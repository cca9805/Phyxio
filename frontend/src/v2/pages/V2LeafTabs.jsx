import { useMemo, useState, useEffect, Suspense, lazy, useCallback, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import yaml from "js-yaml";
import { InlineMath } from "react-katex";
import { getUiLanguage, tr } from "../utils/uiLanguage";
import { getLeafMetaV2 } from "../utils/contentLoaderV2";
import InterpretationPanelV2 from "../components/InterpretationPanelV2.jsx";
import GraphWorkbenchPanel from "../components/graphs/GraphWorkbenchPanel.jsx";
import GraphReadingCard from "../components/graphs/GraphReadingCard.jsx";

import CalculatorV2 from "../components/CalculatorV2.jsx";
import { SvgBlock, loadSvgConfigByLeafRelPath } from "../components/graphs_shared/svg2/index.js";
import { loadGraphRegistryForRoute } from "../components/graphs/graphRegistryLoader.js";
import { loadGraficosYaml, mergeGraphEntry } from "../utils/graficosLoader.js";

// Importar el mapa (para icons/nombres en prerequisitos)
import phyxioMapYaml from "../map/phyxio-map.yaml?raw";

// ============================================
// GRÁFICOS - Barrel Exports
// ============================================

// Gráficos (contrato): el index exporta { graphs }

const MarkdownRenderer = lazy(() => import("../../components/MarkdownRenderer.jsx"));
const MarkdownLoading = ({ lang }) => (
  <div className="p-3">{tr(lang, "Cargando contenido...", "Loading content...")}</div>
);

function TabButton({ active, onClick, children }) {
  return (
    <button
      className={`v2-tab ${active ? "active" : ""}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

function humanizeSlugLabel(value) {
  return String(value || "")
    .trim()
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .split(" ")
    .map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1) : w))
    .join(" ");
}

const EN_LEAF_TITLE_OVERRIDES = {
  "dos-masas-unidas-por-cuerda": "Two Masses Connected by a Rope",
  "poleas-simples": "Simple Pulleys",
  "poleas-compuestas": "Compound Pulleys",
};

function pickLocalizedTitle(value, lang = "es") {
  if (value == null) return "";
  if (typeof value === "string") return value.trim();
  if (typeof value !== "object") return "";
  const primary = lang === "en" ? value?.en : value?.es;
  const fallback = lang === "en" ? value?.es : value?.en;
  if (typeof primary === "string" && primary.trim()) return primary.trim();
  if (typeof fallback === "string" && fallback.trim()) return fallback.trim();
  return "";
}

function pickLeafTitle(meta, lang = "es") {
  const leafId = String(meta?.id || "").trim();
  if (lang === "en" && EN_LEAF_TITLE_OVERRIDES[leafId]) {
    return EN_LEAF_TITLE_OVERRIDES[leafId];
  }

  const candidates =
    lang === "en"
      ? [meta?.title, meta?.name, meta?.nombre, meta?.titulo]
      : [meta?.nombre, meta?.titulo, meta?.title, meta?.name];

  let raw = "";
  for (const candidate of candidates) {
    const text = pickLocalizedTitle(candidate, lang);
    if (text) {
      raw = text;
      break;
    }
  }

  if (!raw) return "Topic";
  if (/^[a-z0-9]+(?:[-_][a-z0-9]+)*$/i.test(raw)) return humanizeSlugLabel(raw);
  return raw;
}

function normalizeGraphInterpretationContext(context) {
  if (!context || typeof context !== "object") return null;

  const graph = context.graph && typeof context.graph === "object"
    ? {
        source: context.graph.source || null,
        profileId: context.graph.profileId || null,
        leafId: context.graph.leafId || null,
        title: context.graph.title || "",
        subtitle: context.graph.subtitle || "",
        mode: context.graph.mode || null,
        followsCalculator: context.graph.followsCalculator !== false,
        target: context.graph.target || null,
        value: Number.isFinite(context.graph.value) ? context.graph.value : null,
        formulaLabel: context.graph.formulaLabel || "",
        paramsIn: context.graph.paramsIn || {},
        stateOut: context.graph.stateOut || {},
        targetCandidates: Array.isArray(context.graph.targetCandidates) ? context.graph.targetCandidates : [],
        selectableMagnitudes: Array.isArray(context.graph.selectableMagnitudes) ? context.graph.selectableMagnitudes : [],
        supportsFocusTarget: context.graph.supportsFocusTarget === true,
        contract: context.graph.contract || null,
      }
    : null;

  const selectedVector = context.selectedVector && typeof context.selectedVector === "object"
    ? {
        id: context.selectedVector.id || null,
        magnitudeId: context.selectedVector.magnitudeId || null,
        symbol: context.selectedVector.symbol || null,
        type: context.selectedVector.type || null,
        semanticRole: context.selectedVector.semanticRole || null,
      }
    : null;

  const calc = context.calc && typeof context.calc === "object"
    ? {
        target: context.calc.target || null,
        result: Number.isFinite(context.calc.result) ? context.calc.result : null,
        formulaId: context.calc.formulaId || null,
        formulaTitle: context.calc.formulaTitle || "",
        formulaEquation: context.calc.formulaEquation || "",
        formulaLatex: context.calc.formulaLatex || "",
        known: context.calc.known || {},
      }
    : null;

  return {
    source: context.source || graph?.source || null,
    target: context.target || selectedVector?.magnitudeId || graph?.target || calc?.target || null,
    lang: context.lang || null,
    graph,
    selectedVector,
    calc,
  };
}

function isSameGraphInterpretationContext(a, b) {
  return JSON.stringify(a || null) === JSON.stringify(b || null);
}

const TAB_SECTION_TEMPLATES = {
  teoria: {
    es: "Teoría de",
    en: "Theory of",
  },
  modelos: {
    es: "Modelos y validez de",
    en: "Models and validity of",
  },
  errores: {
    es: "Errores de",
    en: "Errors in",
  },
  procedimiento: {
    es: "Procedimiento de",
    en: "Procedure for",
  },
  ejemplos: {
    es: "Ejemplos de",
    en: "Examples of",
  },
  leyenda: {
    es: "Leyenda de",
    en: "Legend of",
  },
  calculadora: {
    es: "Calculadora de",
    en: "Calculator of",
  },
  interpretacion: {
    es: "Interpretación de",
    en: "Interpretation of",
  },
  aplicaciones: {
    es: "Aplicaciones del",
    en: "Applications of",
  },
  historia: {
    es: "Historia de",
    en: "History of",
  },
  graficas: {
    es: "Gráficas de",
    en: "Graphs of",
  },
  practica: {
    es: "Práctica de",
    en: "Practice of",
  },
  prerequisitos: {
    es: "Prerequisitos de",
    en: "Prerequisites of",
  },
};

const GRAPH_COORD_EN_OVERRIDES = new Map([
  ["Seguir calculadora", "Follow calculator"],
  ["Curva", "Curve"],
  ["Curvas", "Curves"],
  ["Punto", "Point"],
  ["Puntos", "Points"],
  ["Punto actual", "Current point"],
  ["Puntos actuales", "Current points"],
  ["Referencias", "References"],
  ["Sin rozamiento", "No friction"],
  ["Con rozamiento", "With friction"],
  ["Sin roz.", "No friction"],
  ["Con roz.", "With friction"],
  ["Con deslizamiento", "With slipping"],
  ["Sin deslizamiento", "Without slipping"],
  ["Triangulo", "Triangle"],
  ["Centrifuga", "Centrifuge"],

  ["Aceleracion en funcion de m2", "Acceleration as a function of m2"],
  ["Aceleracion en funcion de la fuerza aplicada", "Acceleration as a function of applied force"],
  ["Aceleracion en funcion del angulo", "Acceleration as a function of angle"],
  ["Aceleracion vs angulo", "Acceleration vs angle"],
  ["Aceleracion de Coriolis vs velocidad relativa", "Coriolis acceleration vs relative velocity"],

  ["Dos masas unidas por cuerda (Coord)", "Two masses connected by a rope (Coord)"],
  ["Poleas (Coord)", "Pulleys (Coord)"],
  ["Poleas simples (Coord)", "Simple pulleys (Coord)"],
  ["Poleas compuestas (Coord)", "Compound pulleys (Coord)"],
  ["Planos inclinados (Coord)", "Inclined planes (Coord)"],
  ["Plano inclinado sin rozamiento (Coord)", "Frictionless inclined plane (Coord)"],
  ["Plano inclinado con rozamiento (Coord)", "Inclined plane with friction (Coord)"],
  ["Tension en cuerdas y cables (Coord)", "Tension in ropes and cables (Coord)"],
  ["Definicion de torque (Coord)", "Definition of torque (Coord)"],
  ["Momento de una fuerza (Coord)", "Moment of a force (Coord)"],
  ["Definicion de fuerza de Coriolis (Coord)", "Definition of Coriolis force (Coord)"],
  ["Definicion de fuerza centrifuga (Coord)", "Definition of centrifugal force (Coord)"],
  ["Concepto de fuerza centripeta (Coord)", "Concept of centripetal force (Coord)"],
  ["Concepto de fuerzas ficticias (Coord)", "Concept of fictitious forces (Coord)"],
  ["Condicion de sumatoria de fuerzas (Coord)", "Net-force condition (Coord)"],
  ["Condicion de sumatoria de momentos (Coord)", "Net-torque condition (Coord)"],
  ["Condicion cinematica de rodadura (Coord)", "Rolling kinematic condition (Coord)"],
  ["Ejemplos tipicos de fuerza centripeta (Coord)", "Typical examples of centripetal force (Coord)"],
  ["Ejemplos de fuerza centrifuga (Coord)", "Examples of centrifugal force (Coord)"],
  ["Ejemplos clasicos de rodadura (Coord)", "Classic rolling examples (Coord)"],
  ["Ejemplos aplicados: rotacion con rozamiento (Coord)", "Applied examples: rotation with friction (Coord)"],
  ["Aplicaciones fisicas de Coriolis (Coord)", "Physical applications of Coriolis (Coord)"],
  ["Coeficiente de rozamiento (Coord)", "Coefficient of friction (Coord)"],
  ["Rozamiento estatico (Coord)", "Static friction (Coord)"],
  ["Rozamiento dinamico (Coord)", "Kinetic friction (Coord)"],
  ["Peso en diferentes contextos (Coord)", "Weight in different contexts (Coord)"],
  ["Palancas (Coord)", "Levers (Coord)"],
  ["Normal en planos (Coord)", "Normal force on planes (Coord)"],
  ["Ventaja mecanica en palancas (Coord)", "Mechanical advantage in levers (Coord)"],

  ["Fuerza necesaria en funcion de n", "Required force as a function of n"],
  ["Tension en funcion de la aceleracion", "Tension as a function of acceleration"],
  ["Fuerza de Coriolis vs velocidad relativa", "Coriolis force vs relative velocity"],
  ["Fuerza centrifuga vs radio", "Centrifugal force vs radius"],
  ["Curvas de ejemplo", "Example curves"],
  ["Curvas de fuerza vs angulo", "Force curves vs angle"],
  ["Curvas de ventaja mecanica", "Mechanical-advantage curves"],
  ["Comparativa de aceleracion", "Acceleration comparison"],
  ["Comparacion por contexto", "Comparison by context"],
  ["Variacion con el angulo theta", "Variation with angle theta"],
  ["Variacion del momento con el angulo", "Moment variation with angle"],
  ["Variacion de alpha con el torque neto", "Alpha variation with net torque"],
  ["Magnitud de la fuerza ficticia vs aceleracion del marco", "Fictitious-force magnitude vs frame acceleration"],
  ["Dependencia de x_CM con L", "Dependence of x_CM on L"],
  ["Dependencia de F_cf con omega", "Dependence of F_cf on omega"],
  ["Dependencia cuadratica de I con d", "Quadratic dependence of I on d"],
  ["Grafica v(omega) y punto medido", "v(omega) graph and measured point"],
  ["Curva tau(theta)", "Curve tau(theta)"],
  ["Curva tau(theta) con F y r fijos", "tau(theta) curve with fixed F and r"],
  ["Curva alpha(sum tau)", "Curve alpha(sum tau)"],
  ["Curva alpha(tau)", "Curve alpha(tau)"],
  ["Curva a(F)", "Curve a(F)"],
  ["Curva T(a)", "Curve T(a)"],
  ["Curva I(d)", "Curve I(d)"],
  ["Punto maximo", "Maximum point"],
  ["alpha en funcion de tau_ap", "alpha as a function of tau_ap"],
  ["alpha en funcion de I", "alpha as a function of I"],
  ["Analogia traslacional (Coord)", "Translational analogy (Coord)"],
  ["Analisis completo (Coord)", "Complete analysis (Coord)"],
  ["Comparacion de linealidad", "Linearity comparison"],
  ["Comparación de linealidad (Coord)", "Linearity comparison (Coord)"],
  ["Centro de masas en cuerpos extendidos (Coord)", "Center of mass in extended bodies (Coord)"],
  ["Centro de masas en sistemas discretos (Coord)", "Center of mass in discrete systems (Coord)"],
  ["Barrido de la tercera masa", "Third-mass sweep"],
  ["Relacion lineal entre v y omega", "Linear relation between v and omega"],
  ["Barrido de theta2", "theta2 sweep"],
  ["Efecto del numero de tramos de cuerda", "Effect of number of rope segments"],
  ["Efecto del paso de rosca", "Thread-pitch effect"],
  ["Plano inclinado", "Inclined plane"],
  ["Empuje horizontal", "Horizontal push"],
  ["Masa colgante", "Hanging mass"],
  ["Recta ideal", "Ideal line"],
  ["Recta v(omega)", "Line v(omega)"],
  ["Ejes", "Axes"],
  ["Mostrar pendiente", "Show slope"],
  ["Marcar maximo", "Mark maximum"],
  ["Linea y=0", "Line y=0"],
  ["Aceleracion", "Acceleration"],
  ["Curva T(a)", "Curve T(a)"],
  ["Curva alpha(sum tau)", "Curve alpha(sum tau)"],
  ["Curva |F_fict|", "Curve |F_fict|"],
  ["Barrido en v", "Sweep in v"],
  ["Barrido en r", "Sweep in r"],
  ["Avion", "Aircraft"],
  ["Viento", "Wind"],
  ["Oceano", "Ocean"],
  ["Proyectil", "Projectile"],
  ["Cuerda", "Rope"],
  ["Orbita", "Orbit"],
  ["Carrusel", "Carousel"],
  ["Rueda coche", "Car wheel"],
  ["Bicicleta", "Bicycle"],
  ["Con deslizamiento", "With slipping"],
  ["Sin deslizamiento", "Without slipping"],
  ["desliza", "slips"],
  ["supera estatico", "exceeds static friction"],
  ["estatico activo", "static friction active"],
  ["Fuerza umbral de rozamiento", "Friction threshold force"],
  ["Lectura rapida", "Quick reading"],
]);

const GRAPH_COORD_EN_REGEX_OVERRIDES = [
  [/\bAceleraci\u00F3n\b/g, "Acceleration"],
  [/\baceleraci\u00F3n\b/g, "acceleration"],
  [/\bAceleracion\b/g, "Acceleration"],
  [/\baceleracion\b/g, "acceleration"],
  [/\b\u00C1ngulo\b/g, "Angle"],
  [/\b\u00E1ngulo\b/g, "angle"],
  [/\bangulo\b/g, "angle"],
  [/\bComparaci\u00F3n\b/g, "Comparison"],
  [/\bcomparaci\u00F3n\b/g, "comparison"],
  [/\bComparacion\b/g, "Comparison"],
  [/\bcomparacion\b/g, "comparison"],
  [/\bRelaci\u00F3n\b/g, "Relation"],
  [/\brelaci\u00F3n\b/g, "relation"],
  [/\bRelacion\b/g, "Relation"],
  [/\brelacion\b/g, "relation"],
  [/\bVariaci\u00F3n\b/g, "Variation"],
  [/\bvariaci\u00F3n\b/g, "variation"],
  [/\bVariacion\b/g, "Variation"],
  [/\bvariacion\b/g, "variation"],
  [/\bDependencia\b/g, "Dependence"],
  [/\bdependencia\b/g, "dependence"],
  [/\bDefinici\u00F3n\b/g, "Definition"],
  [/\bdefinici\u00F3n\b/g, "definition"],
  [/\bDefinicion\b/g, "Definition"],
  [/\bdefinicion\b/g, "definition"],
  [/\bTensi\u00F3n\b/g, "Tension"],
  [/\btensi\u00F3n\b/g, "tension"],
  [/\bTension\b/g, "Tension"],
  [/\btension\b/g, "tension"],
  [/\bCondici\u00F3n\b/g, "Condition"],
  [/\bcondici\u00F3n\b/g, "condition"],
  [/\bCondicion\b/g, "Condition"],
  [/\bcondicion\b/g, "condition"],
  [/\bCentr\u00EDpeta\b/g, "Centripetal"],
  [/\bcentr\u00EDpeta\b/g, "centripetal"],
  [/\bCentripeta\b/g, "Centripetal"],
  [/\bcentripeta\b/g, "centripetal"],
  [/\bCentr\u00EDfuga\b/g, "Centrifugal"],
  [/\bcentr\u00EDfuga\b/g, "centrifugal"],
  [/\bCentrifuga\b/g, "Centrifugal"],
  [/\bcentrifuga\b/g, "centrifugal"],
  [/\bFuerza\b/g, "Force"],
  [/\bfuerza\b/g, "force"],
  [/\bSistema\b/g, "System"],
  [/\bsistema\b/g, "system"],
  [/\bSistemas\b/g, "Systems"],
  [/\bsistemas\b/g, "systems"],
  [/\bMasa\b/g, "Mass"],
  [/\bmasa\b/g, "mass"],
  [/\bMasas\b/g, "Masses"],
  [/\bmasas\b/g, "masses"],
  [/\bVelocidad\b/g, "Speed"],
  [/\bvelocidad\b/g, "speed"],
  [/\bRelativa\b/g, "Relative"],
  [/\brelativa\b/g, "relative"],
  [/\bTiempo\b/g, "Time"],
  [/\btiempo\b/g, "time"],
  [/\bRadio\b/g, "Radius"],
  [/\bradio\b/g, "radius"],
  [/\bGravedad\b/g, "Gravity"],
  [/\bgravedad\b/g, "gravity"],
  [/\bLey\b/g, "Law"],
  [/\bley\b/g, "law"],
  [/\bEnerg\u00EDa\b/g, "Energy"],
  [/\benerg\u00EDa\b/g, "energy"],
  [/\bEnergia\b/g, "Energy"],
  [/\benergia\b/g, "energy"],
  [/\bPar\u00E1metros\b/g, "Parameters"],
  [/\bpar\u00E1metros\b/g, "parameters"],
  [/\bParametros\b/g, "Parameters"],
  [/\bparametros\b/g, "parameters"],
  [/\bInterpretaci\u00F3n\b/g, "Interpretation"],
  [/\binterpretaci\u00F3n\b/g, "interpretation"],
  [/\bInterpretacion\b/g, "Interpretation"],
  [/\binterpretacion\b/g, "interpretation"],
  [/\bRozamiento\b/g, "Friction"],
  [/\brozamiento\b/g, "friction"],
  [/\bEst\u00E1tico\b/g, "Static"],
  [/\best\u00E1tico\b/g, "static"],
  [/\bEstatico\b/g, "Static"],
  [/\bestatico\b/g, "static"],
  [/\bDin\u00E1mico\b/g, "Kinetic"],
  [/\bdin\u00E1mico\b/g, "kinetic"],
  [/\bDinamico\b/g, "Kinetic"],
  [/\bdinamico\b/g, "kinetic"],
  [/\bCurvas\b/g, "Curves"],
  [/\bcurvas\b/g, "curves"],
  [/\bCurva\b/g, "Curve"],
  [/\bcurva\b/g, "curve"],
  [/\bPunto actual\b/g, "Current point"],
  [/\bPuntos actuales\b/g, "Current points"],
  [/\bPunto\b/g, "Point"],
  [/\bPuntos\b/g, "Points"],
  [/\bReferencias\b/g, "References"],
  [/\breferencias\b/g, "references"],
  [/\bEjes\b/g, "Axes"],
  [/\bejes\b/g, "axes"],
  [/\ben funci\u00F3n de\b/g, "as a function of"],
  [/\ben funcion de\b/g, "as a function of"],
];

function applyGraphCoordEnglishOverrides(text) {
  const raw = String(text ?? "");
  const trimmed = raw.trim();
  if (!trimmed) return raw;
  const translated = GRAPH_COORD_EN_OVERRIDES.get(trimmed);
  const lead = raw.match(/^\s*/)?.[0] || "";
  const trail = raw.match(/\s*$/)?.[0] || "";
  if (translated) return `${lead}${translated}${trail}`;

  // Fallback for remaining Coord labels not present in exact map.
  let soft = trimmed;
  for (const [pattern, replacement] of GRAPH_COORD_EN_REGEX_OVERRIDES) {
    soft = soft.replace(pattern, replacement);
  }
  soft = soft
    .replace(/\bclasicos\b/g, "classic")
    .replace(/\bCl\u00E1sicos\b/g, "Classic")
    .replace(/\btipicos\b/g, "typical")
    .replace(/\bT\u00EDpicos\b/g, "Typical");

  return soft === trimmed ? raw : `${lead}${soft}${trail}`;
}

function localizeMetaField(value, lang = "es") {
  if (value == null) return "";

  if (typeof value === "string") {
    return String(value).trim();
  }

  if (Array.isArray(value)) {
    return value
      .map((v) => localizeMetaField(v, lang))
      .filter(Boolean)
      .join(", ");
  }

  if (typeof value === "object") {
    if (lang === "en" && value?.en != null) return localizeMetaField(value.en, "en");
    if (lang === "es" && value?.es != null) return localizeMetaField(value.es, "es");
    if (value?.es != null) return localizeMetaField(value.es, "es");
    if (value?.en != null) return localizeMetaField(value.en, "en");
  }

  return "";
}

function resolveI18nText(value, lang = "es") {
  if (value == null) return "";

  if (typeof value === "string" || typeof value === "number") {
    return String(value).trim();
  }

  if (Array.isArray(value)) {
    return value
      .map((item) => resolveI18nText(item, lang))
      .filter(Boolean)
      .join(", ");
  }

  if (typeof value === "object") {
    const primary = lang === "en" ? value.en : value.es;
    const fallback = lang === "en" ? value.es : value.en;

    if (primary != null) return resolveI18nText(primary, lang);
    if (fallback != null) return resolveI18nText(fallback, lang);

    return "";
  }

  return String(value);
}

function resolveI18nValue(value, lang = "es") {
  if (value == null) return value;

  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => resolveI18nValue(item, lang));
  }

  if (typeof value === "object") {
    const hasI18nKeys = Object.prototype.hasOwnProperty.call(value, "es") ||
      Object.prototype.hasOwnProperty.call(value, "en");

    if (hasI18nKeys) {
      const primary = lang === "en" ? value.en : value.es;
      const fallback = lang === "en" ? value.es : value.en;
      return resolveI18nValue(primary ?? fallback ?? "", lang);
    }

    return Object.fromEntries(
      Object.entries(value).map(([key, nestedValue]) => [
        key,
        resolveI18nValue(nestedValue, lang),
      ])
    );
  }

  return value;
}

function normalizeSectionMarkdown(source) {
  let md = String(source || "");
  if (!md) return "";
  md = md.replace(/^\uFEFF/, "").trimStart();
  if (!md) return "";
  // Solo eliminamos si es un H1 real (# al principio seguido de algo que no sea otro #)
  return md.replace(/^#(?![#])\s*[^\n\r]*\s*(?:\r?\n|$)/, "").trimStart();
}

function formatTabTitle(tabId, meta, lang) {
  const leafTitle = pickLeafTitle(meta, lang);
  const template = TAB_SECTION_TEMPLATES[tabId]?.[lang] || (lang === "en" ? "Section" : "Sección");
  if (!leafTitle) return template;
  return `${template} ${leafTitle}`;
}

function renderSectionTitle(tabId, meta, lang) {
  return `# ${formatTabTitle(tabId, meta, lang)}`;
}

function getLegendCategoryInfo(entry, lang = "es") {
  const category = String(entry?.category || "").trim().toLowerCase();
  const fallback = {
    key: "other",
    label: tr(lang, "Magnitud", "Quantity"),
  };

  switch (category) {
    case "fundamental":
      return { key: "fundamental", label: tr(lang, "Fundamental", "Fundamental") };
    case "state":
      return { key: "state", label: tr(lang, "Estado", "State") };
    case "derived":
      return { key: "derived", label: tr(lang, "Derivada", "Derived") };
    case "parameter":
      return { key: "parameter", label: tr(lang, "Parámetro", "Parameter") };
    default:
      return fallback;
  }
}

function normalizeDoc(doc) {
  if (!doc) return null;
  if (doc?.default && typeof doc.default === "object") return doc.default;
  return doc;
}

// ============================================
// GRÁFICOS - Resolver por motionId (sin ternarios gigantes)
// ============================================

// Alias de motionId (cuando el contenido real es el mismo)
const motionIdAliases = {
  "rodadura-cinematica-sin-deslizamiento": "rodadura-sin-deslizamiento",
  // si aparece el typo histórico:
  "diagramas-decuerpo-libre": "diagramas-cuerpo-libre",
};

// ============================================
// DEFAULT_MOTION_PARAMS (LaTeX) – mantenido por compatibilidad.
// OJO: NO es estado numérico compartido.
// ============================================
const DEFAULT_MOTION_PARAMS = {
  dt: "\\Delta t",
  dx: "\\Delta x",
  dy: "\\Delta y",
  dz: "\\Delta z",
  dr: "\\Delta r",
  dtheta: "\\Delta \\theta",
  dphi: "\\Delta \\varphi",

  x0: "x_0",
  y0: "y_0",
  z0: "z_0",
  r0: "r_0",
  t0: "t_0",
  v0: "v_0",
  vx0: "v_{x0}",
  vy0: "v_{y0}",
  vz0: "v_{z0}",
  a0: "a_0",
  ax0: "a_{x0}",
  ay0: "a_{y0}",
  az0: "a_{z0}",

  t: "t",
  x: "x",
  y: "y",
  z: "z",
  r: "r",
  s: "s",
  v: "v",
  a: "a",
  vx: "v_x",
  vy: "v_y",
  vz: "v_z",
  ax: "a_x",
  ay: "a_y",
  az: "a_z",

  theta: "\\theta",
  phi: "\\varphi",

  g: "g",

  omega: "\\omega",
  alpha: "\\alpha",
  thetaAng: "\\theta",
  w: "\\omega",
  R: "R",

  F: "F",
  Fx: "F_x",
  Fy: "F_y",
  Fz: "F_z",

  m: "m",
};

export default function V2LeafTabs({
  meta,
  teoria,
  procedimiento,
  modelos,
  errores,
  ejemplos,
  formulasDoc,
  magnitudesDoc,
  interpretationDoc,
  aplicaciones,
  practica,
  historia,
}) {
  const lang = getUiLanguage();
  const rootRef = useRef(null);
  const graphTextRootRef = useRef(null);
  const motionId = meta?.id;

  // ---------------------------
  // SVG v2 (config desde data_v2_i18n/.../graphs/svg.config.js)
  // ---------------------------
  const [svg2Config, setSvg2Config] = useState(null);
  const [svg2Err, setSvg2Err] = useState("");
  const leafRelPath = meta?.ruta_relativa;

  useEffect(() => {
    let alive = true;
    setSvg2Config(null);
    setSvg2Err("");

    if (!leafRelPath) return;

    loadSvgConfigByLeafRelPath(leafRelPath)
      .then((cfg) => {
        if (alive) setSvg2Config(cfg);
      })
      .catch((e) => {
        // Silencioso si no existe. Guardamos el mensaje solo para depurar.
        if (alive) setSvg2Err(String(e?.message ?? e));
        if (alive) setSvg2Config(null);
      });

    return () => {
      alive = false;
    };
  }, [leafRelPath]);

  // ---------------------------
  // Normalización de docs
  // ---------------------------
  const normFormulasDoc = useMemo(() => {
    const doc = normalizeDoc(formulasDoc);
    if (!doc) return null;
    if (Array.isArray(doc)) return { formulas: doc };
    if (Array.isArray(doc?.formulas)) return doc;
    if (Array.isArray(doc?.default?.formulas)) return doc.default;
    return doc;
  }, [formulasDoc]);

  const normMagnitudesDoc = useMemo(() => {
    const doc = normalizeDoc(magnitudesDoc);
    if (!doc) return null;
    if (Array.isArray(doc)) return { magnitudes: doc };
    if (Array.isArray(doc?.magnitudes)) return doc;
    if (Array.isArray(doc?.default?.magnitudes)) return doc.default;
    return doc;
  }, [magnitudesDoc]);

  const rawInterpretationDoc = interpretationDoc ?? null;

  const normInterpretationDoc = useMemo(() => {
    const doc = normalizeDoc(rawInterpretationDoc);
    if (!doc) return null;
    if (doc?.default && typeof doc.default === "object") return doc.default;
    return doc;
  }, [rawInterpretationDoc]);

  const hasInterpretation =
    !!normInterpretationDoc &&
    typeof normInterpretationDoc === "object" &&
    !!normInterpretationDoc.targets;
  const interpretationUi = normInterpretationDoc?.ui || meta?.interpretacion?.ui || {};
  const interpretationInlineCalculator =
    hasInterpretation &&
    (interpretationUi.inline_calculator ??
      interpretationUi.calculator_inline) !== false;
  const interpretationDedicatedTab =
    hasInterpretation && 
    (interpretationUi.display_modes?.dedicated_tab ?? interpretationUi.dedicated_tab) !== false;

  const hasFormulas =
    !!normFormulasDoc &&
    Array.isArray(normFormulasDoc.formulas) &&
    normFormulasDoc.formulas.length > 0;

  const mergedLegendEntries = useMemo(() => {
    const magList = Array.isArray(normMagnitudesDoc?.magnitudes) ? normMagnitudesDoc.magnitudes : [];
    const varList = Array.isArray(normFormulasDoc?.variables) ? normFormulasDoc.variables : [];

    const map = new Map();
    for (const m of magList) {
      if (!m?.id) continue;
      map.set(String(m.id), { ...m, id: String(m.id) });
    }
    for (const v of varList) {
      if (!v?.id) continue;
      const id = String(v.id);
      const prev = map.get(id) || {};
      map.set(id, { ...v, ...prev, id });
    }

    return Array.from(map.values());
  }, [normMagnitudesDoc, normFormulasDoc]);

  const hasLegend = mergedLegendEntries.length > 0;

  const isMathLeaf = meta?.type === "math_leaf" || meta?.area === "matematicas";
  const hasProcedure = (procedimiento || "").trim().length > 0;
  const hasModels = (modelos || "").trim().length > 0;
  const hasApps = (aplicaciones || "").trim().length > 0;
  const hasPracticeContent = (practica || "").trim().length > 0;
  const hasHistory = (historia || "").trim().length > 0;
  const physicalRole = localizeMetaField(meta?.physical_role, lang);

  const motionKey = useMemo(() => {
    const raw = String(motionId ?? "").trim();
    const clean = raw.split("?")[0].split("#")[0];
    const last = clean.split("/").filter(Boolean).pop() || clean;
    return String(last).trim();
  }, [motionId]);

  const resolvedGraphIdBase = motionIdAliases[motionKey] || motionKey;

  // ---------------------------
  // Gráficas: resolver vistas (desde contrato graphs[id][tipo])
  // ---------------------------
  const [graphRegistry, setGraphRegistry] = useState({});
  const [graficosYaml, setGraficosYaml] = useState({});

  useEffect(() => {
    let cancelled = false;

    loadGraphRegistryForRoute(leafRelPath, resolvedGraphIdBase, motionId).then((registry) => {
      if (!cancelled) setGraphRegistry(registry);
    });

    return () => {
      cancelled = true;
    };
  }, [leafRelPath, resolvedGraphIdBase, motionId]);

  useEffect(() => {
    if (!leafRelPath) return;
    let cancelled = false;
    loadGraficosYaml(leafRelPath).then((yaml) => {
      if (!cancelled) setGraficosYaml(yaml ?? {});
    });
    return () => { cancelled = true; };
  }, [leafRelPath]);

  // Resolver id legacy: a veces meta.id y ruta_relativa no coinciden 1:1 con las keys del index de graphs.
  const legacyGraphId = useMemo(() => {
    const cand = [];
    const push = (v) => {
      const s = String(v ?? "").trim().replace(/^\/+|\/+$/g, "");
      if (!s) return;
      if (!cand.includes(s)) cand.push(s);
    };

    // 0) ruta completa (evita colisiones de id entre nodos distintos)
    if (leafRelPath) push(leafRelPath);

    // 1) lo normal
    push(resolvedGraphIdBase);

    // 2) fallback: último segmento de la ruta_relativa (suele ser el id real del leaf)
    if (leafRelPath) {
      const last = String(leafRelPath).split("/").filter(Boolean).pop();
      push(last);
    }

    // 3) a veces llega como "foo/bar/caida-libre"
    if (motionId) {
      const last = String(motionId).split("/").filter(Boolean).pop();
      push(last);
    }

    // elegimos el primero que exista en el registro de graficos cargado
    for (const id of cand) {
      if (graphRegistry?.[id]) return id;
    }
    return resolvedGraphIdBase;
  }, [graphRegistry, resolvedGraphIdBase, leafRelPath, motionId]);

  const rawGraphEntry = graphRegistry?.[legacyGraphId]; // { Coord, Svg, Dcl } | undefined

  // Enriquecer cada tipo de gráfico con los metadatos semánticos de graficos.yaml
  const graphEntry = useMemo(() => {
    if (!rawGraphEntry || !legacyGraphId) return rawGraphEntry;
    const enriched = {};
    for (const [gType, entry] of Object.entries(rawGraphEntry)) {
      enriched[gType] = mergeGraphEntry(legacyGraphId, gType, entry, graficosYaml);
    }
    return enriched;
  }, [rawGraphEntry, legacyGraphId, graficosYaml]);

  const typeOrder = ["Coord", "Svg", "Dcl"];
  const typeLabel = {
    Coord: tr(lang, "Coordenadas", "Coordinates"),
    Svg: "SVG",
    Dcl: tr(lang, "Vectorial (DCL)", "Vector (FBD)"),
  };

  const views = useMemo(() => {
    const out = [];

    // 1) SVG v2 (data_v2_i18n/.../graphs/svg.config.js)
    if (svg2Config) {
      out.push({
        id: "svg2",
        label: "SVG",
        Comp: () => (
          <SvgBlock
            config={svg2Config}
            externalParams={motionParams}
            onExternalParamsChange={updateMotion}
          />
        ),
      });
    }

    // 2) Legacy / Contract (Coord / Svg / Dcl) desde graphs/*/index.js
    if (graphEntry && typeof graphEntry === "object") {
      for (const t of typeOrder) {
        // si ya hay svg2, ocultamos svg legacy (para no duplicar "SVG")
        if (t === "Svg" && svg2Config) continue;

        const rawView =
          graphEntry[t] ||
          graphEntry[t.toLowerCase()] ||
          graphEntry[t.toUpperCase()];

        if (!rawView) continue;

        const Comp =
          typeof rawView === "function"
            ? rawView
            : rawView.component ||
              rawView.Component ||
              rawView.comp ||
              rawView.view ||
              null;

        if (typeof Comp !== "function") continue;

        const rawLabel =
          rawView.label ||
          rawView.title ||
          rawView.titulo ||
          typeLabel[t] ||
          t;

        const rawTitle =
          rawView.title ||
          rawView.titulo ||
          rawView.label ||
          typeLabel[t] ||
          t;

        out.push({
          id: rawView.id || rawView.graphId || t.toLowerCase(),
          graphId: rawView.graphId || rawView.id || t.toLowerCase(),
          type: rawView.type || rawView.graphType || t,
          graphType: rawView.graphType || rawView.type || t,

          label: resolveI18nText(rawLabel, lang),
          title: resolveI18nText(rawTitle, lang),
          description: resolveI18nText(
            rawView.description || rawView.descripcion || "",
            lang
          ),

          contract: rawView,
          Comp,
        });
      }
    }

    return out;
  }, [graphEntry, svg2Config, lang]);

  const [graphViewId, setGraphViewId] = useState(() => views[0]?.id || "coord");

  // Si cambia el tema o cambian las vistas disponibles:
  // - mantenemos la vista actual si sigue existiendo
  // - si no existe, ponemos la primera disponible
  useEffect(() => {
    if (!views.length) return;
    if (views.some((v) => v.id === graphViewId)) return;
    setGraphViewId(views[0].id);
  }, [legacyGraphId, views, graphViewId]);

  const hasGraphs = views.length > 0;
  // También sincronizar cuando meta.yaml declara interpretacion.enabled, incluso si
  // normInterpretacionDoc falló al cargar (ej: archivo nuevo antes de reiniciar Vite).
  const hasInterpretationMeta = !!meta?.interpretacion?.enabled;
  const shouldSyncCalculatorState = hasGraphs || hasInterpretation || hasInterpretationMeta;
  const showSelector = views.length > 1;

  const hasPrerequisites =
    Array.isArray(meta?.prerequisitos) && meta.prerequisitos.length > 0;

  // Estado compartido con la calculadora y gráficos (valores numéricos)
  const [motionParams, setMotionParams] = useState({});
  const [graphInterpretationContext, setGraphInterpretationContext] = useState(null);
  const [graphWorkbenchMode, setGraphWorkbenchMode] = useState("experiment");
  const updateMotion = useCallback((patch) => {
    setMotionParams((p) => ({ ...p, ...patch }));
  }, []);

  useEffect(() => {
    setGraphWorkbenchMode(motionParams?.__calc?.target ? "calculator" : "experiment");
  }, [motionParams?.__calc?.target]);

  const tabs = useMemo(() => {
    const base = [];

    if (hasPrerequisites) {
      base.push({ id: "prerequisitos", label: tr(lang, "Prerequisitos", "Prerequisites") });
    }

    base.push({ id: "teoria", label: tr(lang, "Teoria", "Theory") });

    if (hasProcedure) {
      base.push({ id: "procedimiento", label: tr(lang, "Procedimiento", "Procedure") });
    }

    if (hasLegend) {
      base.push({ id: "leyenda", label: tr(lang, "Leyenda", "Legend") });
    }

    if (hasFormulas) {
      base.push({ id: "calculadora", label: tr(lang, "Calculadora", "Calculator") });
    }

    if (interpretationDedicatedTab) {
      base.push({ id: "interpretacion", label: tr(lang, "Interpretación", "Interpretation") });
    }

    

    if (!isMathLeaf || hasModels) {
      base.push({ id: "modelos", label: tr(lang, "Modelo y validez", "Model and validity") });
    }

    base.push(
      { id: "errores", label: tr(lang, "Errores comunes", "Common mistakes") },
      { id: "ejemplos", label: tr(lang, "Ejemplos", "Examples") }
    );

    if (hasApps) base.push({ id: "aplicaciones", label: tr(lang, "Aplicaciones", "Applications") });
    if (hasHistory) base.push({ id: "historia", label: tr(lang, "Historia", "History") });
    if (!isMathLeaf || hasGraphs) {
      base.push({ id: "graficas", label: tr(lang, "Graficas", "Graphs") });
    }
    base.push({ id: "practica", label: tr(lang, "Practica", "Practice") });

    return base;
  }, [
    hasPrerequisites,
    hasProcedure,
    hasFormulas,
    interpretationDedicatedTab,
    hasLegend,
    isMathLeaf,
    hasModels,
    hasApps,
    hasHistory,
    hasGraphs,
    lang,
  ]);

  const [searchParams, setSearchParams] = useSearchParams();
  const validTabs = useMemo(() => tabs.map((t) => t.id), [tabs]);
  const tabFromUrl = searchParams.get("tab");
  const tab = validTabs.includes(tabFromUrl) ? tabFromUrl : "teoria";
  const setTab = useCallback(
    (nextTab) => {
      const safeTab = validTabs.includes(nextTab) ? nextTab : "teoria";
      const next = new URLSearchParams(searchParams);
      next.set("tab", safeTab);
      setSearchParams(next, { replace: true });
    },
    [searchParams, setSearchParams, validTabs]
  );

  // Al cambiar de tab, llevamos el viewport al inicio para evitar abrir el contenido "a mitad".
  useEffect(() => {
    const rootEl = rootRef.current;
    if (!rootEl) return;

    const mainScroll = rootEl.closest(".main-content");
    const behavior = "auto";

    if (mainScroll && typeof mainScroll.scrollTo === "function") {
      mainScroll.scrollTo({ top: 0, left: 0, behavior });
      return;
    }

    if (typeof window !== "undefined" && typeof window.scrollTo === "function") {
      window.scrollTo({ top: 0, left: 0, behavior });
    }
  }, [tab]);

  useEffect(() => {
    if (lang !== "en" || tab !== "graficas") return;
    const host = graphTextRootRef.current;
    if (!host) return;

    let applying = false;
    const apply = () => {
      if (applying) return;
      applying = true;
      try {
        const walker = document.createTreeWalker(host, NodeFilter.SHOW_TEXT);
        let node = walker.nextNode();
        while (node) {
          const current = node.nodeValue || "";
          const next = applyGraphCoordEnglishOverrides(current);
          if (next !== current) node.nodeValue = next;
          node = walker.nextNode();
        }
      } finally {
        applying = false;
      }
    };

    apply();
    const observer = new MutationObserver(() => apply());
    observer.observe(host, {
      childList: true,
      subtree: true,
      characterData: true,
    });
    return () => observer.disconnect();
  }, [lang, tab, graphViewId, legacyGraphId]);

  const renderMarkdown = (tabId, src, markdownClassName = "") => (
    <Suspense fallback={<MarkdownLoading lang={lang} />}>
      <MarkdownRenderer
        source={normalizeMath(
          `${renderSectionTitle(tabId, meta, lang)}\n\n${
            normalizeSectionMarkdown(src || tr(lang, "*(Sin contenido aun)*", "*(No content yet)*"))
          }`
        )}
        magnitudesDoc={magnitudesDoc}
        formulasDoc={normFormulasDoc}
        className={markdownClassName}
        lang={lang}
      />
    </Suspense>
  );

  const graphProps = (p, onSharedParamsChange) => ({
    lang,  // ✅ Agregado lang
    params: p,
    sharedParams: p,  // ✅ Agregar sharedParams
    paramsFromCalculator: p,
    onSharedParamsChange,
    leafRelPath: meta?.ruta_relativa,
    formulasDoc: normFormulasDoc,
    magnitudesDoc: normMagnitudesDoc,
    interpretationDoc: normInterpretationDoc,  // ✅ Agregar interpretationDoc
    onInterpretationContextChange: (context) => {  // ✅ Handler para cambios de contexto
      const normalizedContext = normalizeGraphInterpretationContext(context);
      setGraphInterpretationContext((prev) =>
        isSameGraphInterpretationContext(prev, normalizedContext) ? prev : normalizedContext
      );

      const newTarget = normalizedContext?.target;
      const currentTarget = p?.__calc?.target;
      const storedGraphContext = p?.__graphInterpretationContext ?? null;
      const shouldStoreGraphContext = !isSameGraphInterpretationContext(storedGraphContext, normalizedContext);

      if (shouldStoreGraphContext || (newTarget && currentTarget !== newTarget)) {
        const updated = {
          ...p,
          __graphContext: normalizedContext?.graph || null,
          __graphInterpretationContext: normalizedContext || null,
          __calc: {
            ...(p?.__calc || {}),
            target: newTarget,
            known: p?.__calc?.known || {},
            result: p?.__calc?.result,
            formulaLatex: p?.__calc?.formulaLatex,
          },
        };
        onSharedParamsChange(updated);
      }
    },
  });

  const SHOW_DEBUG = import.meta.env.DEV;


  return (
    <div className="v2-leaf" ref={rootRef}>
      <div className="v2-header">
        <div className="v2-header-content">
          <div className="v2-header-main">
            
          </div>

          <div className="v2-header-meta">
            {physicalRole ? (
              <div className="v2-meta-item">
                <div className="v2-meta-icon">⚙️</div>
                <div className="v2-meta-content">
                  <div className="v2-meta-label">{tr(lang, "Rol físico", "Physical role")}</div>
                  <div className="v2-meta-value">
                    {physicalRole}
                  </div>
                </div>
              </div>
            ) : null}

            {Array.isArray(meta?.niveles) && meta.niveles.length > 0 && (
              <div className="v2-meta-item">
                <div className="v2-meta-icon">🎓</div>
                  <div className="v2-meta-content">
                  <div className="v2-meta-label">{tr(lang, "Nivel de estudio", "Study level")}</div>
                  <div className="v2-meta-value">
                    {meta.niveles.join(", ")}
                  </div>
                </div>
              </div>
            )}

            {meta?.tiempo_estimado_min != null && (
              <div className="v2-meta-item">
                <div className="v2-meta-icon">⏱️</div>
                <div className="v2-meta-content">
                  <div className="v2-meta-label">{tr(lang, "Tiempo estimado", "Estimated time")}</div>
                  <div className="v2-meta-value">{meta.tiempo_estimado_min} min</div>
                </div>
              </div>
            )}

            {meta?.dificultad != null && (
              <div className="v2-meta-item">
                <div className="v2-meta-icon">⭐</div>
                <div className="v2-meta-content">
                  <div className="v2-meta-label">{tr(lang, "Dificultad", "Difficulty")}</div>
                  <div className="v2-meta-value">
                    {meta.dificultad}/5
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="v2-tabs">
        {tabs.map((t) => (
          <TabButton
            key={t.id}
            active={tab === t.id}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </TabButton>
        ))}
      </div>

      <div className="v2-panel">
        {tab === "prerequisitos" && hasPrerequisites && (
          <PrerequisitesTab prerequisites={meta.prerequisitos} lang={lang} />
        )}

        {tab === "teoria" && renderMarkdown("teoria", teoria)}
        {tab === "procedimiento" && hasProcedure && renderMarkdown("procedimiento", procedimiento)}
        {tab === "modelos" && (!isMathLeaf || hasModels) && renderMarkdown("modelos", modelos)}
        {tab === "errores" && renderMarkdown("errores", errores)}
        {tab === "ejemplos" && renderMarkdown("ejemplos", ejemplos)}

        {tab === "leyenda" && hasLegend && (
          <LegendTab
            entries={mergedLegendEntries}
            lang={lang}
            title={formatTabTitle("leyenda", meta, lang)}
          />
        )}

        {tab === "calculadora" && hasFormulas && (
          <div className="v2-card">
            <h1>{formatTabTitle("calculadora", meta, lang)}</h1>
            <CalculatorV2
            formulasDoc={normFormulasDoc}
            magnitudesDoc={normMagnitudesDoc}
            interpretationDoc={interpretationInlineCalculator ? normInterpretationDoc : null}
            leafMeta={meta}
            sharedParams={shouldSyncCalculatorState ? motionParams : undefined}
            onSharedParamsChange={shouldSyncCalculatorState ? updateMotion : undefined}
            onOpenInterpretation={interpretationDedicatedTab ? () => setTab("interpretacion") : undefined}
          />
          </div>
        )}

        {tab === "aplicaciones" && hasApps && renderMarkdown("aplicaciones", aplicaciones)}
        {tab === "historia" && hasHistory && renderMarkdown("historia", historia)}
        {tab === "interpretacion" && interpretationDedicatedTab && (
          <InterpretationPanelV2
            title={formatTabTitle("interpretacion", meta, lang)}
            interpretationDoc={normInterpretationDoc}
            formulasDoc={normFormulasDoc}
            magnitudesDoc={normMagnitudesDoc}
            sharedParams={motionParams}
            graphInterpretationContext={graphInterpretationContext}
            meta={meta}
            lang={lang}
            onNavigateToGraph={hasGraphs ? () => setTab("graficas") : undefined}
          />
        )}
        {tab === "practica" && hasPracticeContent && renderMarkdown("practica", practica)}
        {tab === "practica" && !hasPracticeContent && (
          <PracticePlaceholder
            lang={lang}
            title={formatTabTitle("practica", meta, lang)}
          />
        )}

        {tab === "graficas" &&
          (() => {
            if (!hasGraphs) {
              return (
                <GraphicsPlaceholder
                  lang={lang}
                  title={formatTabTitle("graficas", meta, lang)}
                />
              );
            }

            const activeView =
              views.find((v) => v.id === graphViewId) || views[0];

            const ActiveGraph = activeView?.Comp;

          const rawActiveGraphContract = activeView?.contract || {};

          const {
            component: _component,
            Component: _Component,
            Comp: _Comp,
            comp: _comp,
            view: _view,
            render: _render,
            children: _children,
            ...activeGraphContractRaw
          } = rawActiveGraphContract;

          const activeGraphContract = resolveI18nValue(
            activeGraphContractRaw,
            lang
          );

          const activeGraphForContext = {
            ...activeGraphContract,
            lang,

            id:
              activeGraphContract.graphId ||
              activeGraphContract.id ||
              activeView?.graphId ||
              activeView?.id ||
              null,

            graphId:
              activeGraphContract.graphId ||
              activeGraphContract.id ||
              activeView?.graphId ||
              activeView?.id ||
              null,

            type:
              activeGraphContract.type ||
              activeGraphContract.graphType ||
              activeView?.type ||
              activeView?.graphType ||
              null,

            graphType:
              activeGraphContract.graphType ||
              activeGraphContract.type ||
              activeView?.graphType ||
              activeView?.type ||
              null,

            title:
              activeGraphContract.title ||
              activeGraphContract.label ||
              activeView?.title ||
              activeView?.label ||
              tr(lang, "Gráfica Coord", "Coord Graph"),

            label:
              activeGraphContract.label ||
              activeGraphContract.title ||
              activeView?.label ||
              activeView?.title ||
              tr(lang, "Gráfica Coord", "Coord Graph"),

            description:
              activeGraphContract.description ||
              activeGraphContract.descripcion ||
              activeView?.description ||
              "",
          };

          const activeGraphProps = {
            ...graphProps(motionParams, updateMotion),

            graph: activeGraphForContext,

            graphType:
              activeGraphForContext.type ||
              activeGraphForContext.graphType ||
              "Coord",

            id: activeGraphForContext.id,
            graphId: activeGraphForContext.graphId,
            title: activeGraphForContext.title,

            xAxis: activeGraphForContext.xAxis,
            yAxis: activeGraphForContext.yAxis,
            xMagnitude: activeGraphForContext.xMagnitude,
            yMagnitude: activeGraphForContext.yMagnitude,

            relation: activeGraphForContext.relation,
            physicalReading: activeGraphForContext.physicalReading,
            slopeMeaning: activeGraphForContext.slopeMeaning,
            interceptMeaning: activeGraphForContext.interceptMeaning,
            curvatureMeaning: activeGraphForContext.curvatureMeaning,
            signMeaning: activeGraphForContext.signMeaning,
            areaMeaning: activeGraphForContext.areaMeaning,
            domainMeaning: activeGraphForContext.domainMeaning,

            modelConnection: activeGraphForContext.modelConnection,
            formulaConnection: activeGraphForContext.formulaConnection,
            readingFocus: activeGraphForContext.readingFocus,

            sceneId: activeGraphForContext.sceneId,
            sceneLabel: activeGraphForContext.sceneLabel,
            selectedObject: activeGraphForContext.selectedObject,
            selectedObjectId: activeGraphForContext.selectedObjectId,

            forces: activeGraphForContext.forces,
            visibleForces: activeGraphForContext.visibleForces,
            hiddenForces: activeGraphForContext.hiddenForces,
            components: activeGraphForContext.components,
            resultant: activeGraphForContext.resultant,

            axisConvention: activeGraphForContext.axisConvention,
            positiveDirection: activeGraphForContext.positiveDirection,
            forceBalanceReading: activeGraphForContext.forceBalanceReading,
            equilibriumHints: activeGraphForContext.equilibriumHints,

            objects: activeGraphForContext.objects,
            mainObject: activeGraphForContext.mainObject,
            referenceFrame: activeGraphForContext.referenceFrame,
            geometry: activeGraphForContext.geometry,
            interactions: activeGraphForContext.interactions,
            modelElements: activeGraphForContext.modelElements,
            visualCues: activeGraphForContext.visualCues,
            scaleMeaning: activeGraphForContext.scaleMeaning,

            agentHints: activeGraphForContext.agentHints,
            commonMistakes: activeGraphForContext.commonMistakes,
            recommendedTab: activeGraphForContext.recommendedTab,
            graphWarnings: activeGraphForContext.graphWarnings,
            currentStep: activeGraphForContext.currentStep,

            graphMeta: activeGraphForContext,
            graphContract: activeGraphContract,
          };

          if (SHOW_DEBUG) {
            console.log("[V2LeafTabs] activeGraphForContext", activeGraphForContext);
            
          }

            return (
              <div style={{ display: "grid", gap: 12 }}>
                <div className="v2-card">
                  <h1>{formatTabTitle("graficas", meta, lang)}</h1>
                </div>

                <GraphWorkbenchPanel
                  lang={lang}
                  formulasDoc={normFormulasDoc}
                  magnitudesDoc={normMagnitudesDoc}
                  sharedParams={motionParams}
                  mode={graphWorkbenchMode}
                  onModeChange={setGraphWorkbenchMode}
                  onApply={updateMotion}
                />

                <GraphReadingCard
                  lang={lang}
                  interpretationDoc={normInterpretationDoc}
                  meta={meta}
                  sharedParams={motionParams}
                  graphInterpretationContext={graphInterpretationContext}
                  graphMeta={activeGraphForContext}
                />

                {showSelector && (
                  <div
                    className="v2-card"
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <div style={{ fontWeight: 600 }}>{tr(lang, "Vista", "View")}</div>
                    <select
                      className="form-control"
                      value={graphViewId}
                      onChange={(e) => setGraphViewId(e.target.value)}
                      style={{ maxWidth: 340 }}
                    >
                      {views.map((v) => (
                        <option key={v.id} value={v.id}>
                          {resolveI18nText(v.label, lang)}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="v2-card" ref={graphTextRootRef}>
                  <div style={{ display: "grid", gap: 8 }}>
                    {SHOW_DEBUG && svg2Err ? (
                      <div className="muted p-0" style={{ fontSize: 12 }}>
                        SVG2 err: {svg2Err}
                      </div>
                    ) : null}

                    {ActiveGraph ? (
                      <ActiveGraph {...activeGraphProps} />
                    ) : (
                      <GraphicsPlaceholder
                        lang={lang}
                        title={formatTabTitle("graficas", meta, lang)}
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })()}
      </div>
    </div>
  );
}

// ============================
// UI placeholders
// ============================

function GraphicsPlaceholder({ lang = "es", title }) {
  return (
    <div className="v2-card">
      <h1 style={{ marginTop: 0 }}>
        {title || tr(lang, "Graficas", "Graphs")}
      </h1>
      <div className="muted">
        {tr(
          lang,
          "Este tema todavia no tiene graficas asociadas (Coord / SVG / DCL).",
          "This topic does not have associated graphs yet (Coord / SVG / FBD)."
        )}
      </div>
    </div>
  );
}

function PracticePlaceholder({ lang = "es", title }) {
  return (
    <div className="v2-card">
      <h1 style={{ marginTop: 0 }}>{title || tr(lang, "Practica", "Practice")}</h1>
      <div className="muted">
        {tr(
          lang,
          "Aqui se integrara el motor de ejercicios (parametrizados, pasos, etc.).",
          "The exercise engine will be integrated here (parameterized problems, steps, etc.)."
        )}
      </div>
    </div>
  );
}

function LegendTab({ entries, lang = "es", title }) {
  return (
    <div className="v2-card md-legend-card">
      <h1 style={{ marginTop: 0 }}>{title || tr(lang, "Leyenda", "Legend")}</h1>
      <ul className="md-legend-list">
        {entries.map((entry) => {
          const symbol = String(entry?.symbol || entry?.id || "").trim();
          const rawNombre = entry?.nombre || entry?.name || entry?.id || "";
          const nombre = localizeMetaField(rawNombre, lang).replace(/_/g, " ").trim() || entry?.id;
          const unidad = String(entry?.unidad_si || entry?.si_unit || "").trim();
          const descripcion = localizeMetaField(entry?.descripcion || entry?.description, lang);
          const categoryInfo = getLegendCategoryInfo(entry, lang);

          return (
            <li
              key={entry?.id || `${symbol}-${nombre}`}
              className={`md-legend-item md-legend-item--${categoryInfo.key}`}
            >
              <div className="md-legend-item__top">
                <div className={`md-legend-symbol md-legend-symbol--${categoryInfo.key}`}>
                  {symbol ? <InlineMath math={symbol} settings={{ strict: false }} /> : <code>{entry?.id}</code>}
                </div>
                <div className="md-legend-main">
                  <div className="md-legend-name-row">
                    <span className="md-legend-name">{nombre}</span>
                    <span className={`md-legend-type md-legend-type--${categoryInfo.key}`}>
                      {categoryInfo.label}
                    </span>
                  </div>
                  {unidad ? <div className="md-legend-unit">{unidad}</div> : null}
                </div>
              </div>
              {descripcion ? <div className="md-legend-description">{descripcion}</div> : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// ============================================
// Prerequisitos
// ============================================

function PrerequisitesTab({ prerequisites, lang = "es" }) {
  const map = useMemo(() => {
    try {
      const obj = yaml.load(phyxioMapYaml);
      return buildIndexFromMap(obj);
    } catch {
      return {};
    }
  }, []);

  const [localizedTitles, setLocalizedTitles] = useState({});

  useEffect(() => {
    let alive = true;

    const pickMetaTitle = (metaObj, mapFallbackTitle = "") => {
      if (!metaObj || typeof metaObj !== "object") return "";
      const isI18nMeta = String(metaObj?._resolvedPath || "").includes("/data_v2_i18n/");
      if (lang === "en" && !isI18nMeta) return String(mapFallbackTitle || "").trim();
      const value =
        lang === "en"
          ? metaObj.title || metaObj.name || metaObj.nombre || metaObj.titulo || ""
          : metaObj.nombre || metaObj.titulo || metaObj.title || metaObj.name || "";
      return String(value || "").trim();
    };

    const normalize = (value) => String(value || "").replace(/^\/+|\/+$/g, "");

    (async () => {
      const entries = await Promise.all(
        (Array.isArray(prerequisites) ? prerequisites : []).map(async (p) => {
          const raw =
            typeof p === "string"
              ? p
              : p?.ruta_relativa || p?.path || p?.id || JSON.stringify(p);
          const info = resolvePrereqInfo(map, p) || {};
          const mapTitle =
            lang === "en"
              ? info.titleEn || info.title || info.titleEs || ""
              : info.titleEs || info.title || "";
          const candidatePath = normalize(info.path || raw);
          if (!candidatePath) return [raw, ""];

          const meta = await getLeafMetaV2(candidatePath, { lang }).catch(() => null);
          return [raw, pickMetaTitle(meta, mapTitle) || mapTitle];
        })
      );

      if (!alive) return;

      const next = {};
      for (const [raw, title] of entries) {
        if (title) next[raw] = title;
      }
      setLocalizedTitles(next);
    })();

    return () => {
      alive = false;
    };
  }, [prerequisites, map, lang]);

  return (
    <div className="v2-card">
      <div className="v2-card-title">{tr(lang, "Prerequisitos", "Prerequisites")}</div>
      <div className="muted" style={{ marginBottom: 10 }}>
        {tr(lang, "Temas recomendados antes de comenzar:", "Recommended topics before starting:")}
      </div>

      <div style={{ display: "grid", gap: 8 }}>
        {prerequisites.map((p) => {
          const raw =
            typeof p === "string"
              ? p
              : p?.ruta_relativa || p?.path || p?.id || JSON.stringify(p);
          const info = resolvePrereqInfo(map, p) || {};
          const mapFallbackTitle =
            lang === "en"
              ? info.titleEn || info.title || info.titleEs || ""
              : info.titleEs || info.title || "";
          const title = localizedTitles[raw] || mapFallbackTitle || raw;
          const target = info.path
            ? `/v2/${String(info.path).replace(/^\/+|\/+$/g, "")}?tab=teoria`
            : "";

          if (target) {
            return (
              <Link
                key={raw}
                to={target}
                className="v2-card-2"
                title={`${tr(lang, "Ir a", "Go to")} ${title}`}
              >
                <div style={{ fontWeight: 700 }}>
                  {info.icon ? `${info.icon} ` : ""}
                  {title}
                </div>
              </Link>
            );
          }

          return (
            <div
              key={raw}
              className="v2-card-2"
              style={{ padding: 12, display: "grid", gap: 4 }}
            >
              <div style={{ fontWeight: 700 }}>
                {info.icon ? `${info.icon} ` : ""}
                {title}
              </div>
              {info.path ? (
                <div className="muted" style={{ fontSize: 12 }}>
                  {info.path}
                </div>
              ) : (
                <div className="muted" style={{ fontSize: 12 }}>
                  {tr(lang, "(No encontrado en el mapa)", "(Not found in map)")}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function buildIndexFromMap(root) {
  const index = {};
  const entries = [];
  const norm = (s) => String(s ?? "").trim().replace(/^\/+|\/+$/g, "");
  const add = (k, info) => {
    const key = norm(k);
    if (!key) return;
    if (!index[key]) index[key] = info;
  };

  const walk = (node, parentPath = "", parentIdPath = "") => {
    if (!node) return;
    if (Array.isArray(node)) {
      for (const n of node) walk(n, parentPath, parentIdPath);
      return;
    }

    // Contenedor de mapa (ej. { root: {...} })
    if (!node?.id && node?.root && typeof node.root === "object") {
      walk(node.root, parentPath, parentIdPath);
      return;
    }

    const titleEs = node?.nombre || node?.titulo || node?.title || node?.id || "";
    const titleEn = node?.titulo_en || node?.title_en || "";
    const icon = node?.icon || node?.emoji || "";
    const path = node?.ruta_relativa || node?.link || node?.ruta || parentPath || "";
    const id = String(node?.id || "").trim();
    const idPath = id ? [parentIdPath, id].filter(Boolean).join("/") : parentIdPath;
    const info = {
      title: titleEs,
      titleEs,
      titleEn,
      icon,
      path: norm(path),
      id,
      idPath: norm(idPath),
    };

    if (id) add(id, info);
    if (idPath) add(idPath, info);
    if (path) add(path, info);
    if (id || path) entries.push(info);

    const children = node?.children || node?.hijos || [];
    if (Array.isArray(children)) {
      for (const c of children) walk(c, path, idPath);
    }
  };

  walk(root?.root ?? root, "");
  index.__entries = entries;
  return index;
}

function resolvePrereqInfo(index, prereqRaw) {
  const norm = (s) => String(s ?? "").trim().replace(/^\/+|\/+$/g, "");
  const slugTokens = (s) =>
    norm(s)
      .toLowerCase()
      .split(/[\/\-_]+/)
      .filter((t) => t && t.length > 2);

  const raw =
    typeof prereqRaw === "string"
      ? prereqRaw
      : prereqRaw?.ruta_relativa || prereqRaw?.path || prereqRaw?.id || "";
  const p = norm(raw);
  if (!p) return null;

  const candidates = [
    p,
    p.replace(/^fisica-clasica\//, ""),
    p.replace(/^mecanica\//, ""),
    p.split("/").filter(Boolean).pop() || "",
  ].filter(Boolean);

  for (const c of candidates) {
    if (index[c]) return index[c];
  }

  // Fallback tolerante: busca por similitud de slug/ruta para soportar prerequisitos legacy.
  const targetLast = p.split("/").filter(Boolean).pop() || "";
  const targetTokens = new Set(slugTokens(p));
  let best = null;
  let bestScore = -1;

  for (const e of index.__entries || []) {
    const key = `${e?.path || ""}/${e?.id || ""}/${e?.idPath || ""}`;
    const eTokens = slugTokens(key);
    if (!eTokens.length) continue;

    let score = 0;
    if (e.id === targetLast) score += 120;
    if (e.idPath && norm(e.idPath).endsWith(targetLast)) score += 100;
    if (e.path && norm(e.path).endsWith(targetLast)) score += 90;

    for (const t of eTokens) {
      if (targetTokens.has(t)) score += 8;
    }

    if (score > bestScore) {
      bestScore = score;
      best = e;
    }
  }

  if (bestScore >= 16) return best;
  return null;
}

// ============================================
// Normalización de LaTeX (ayuda a que el MarkdownRenderer detecte fórmulas)
// ============================================

function normalizeMath(md = "") {
  // Convierte \( ... \) y \[ ... \] a $...$ / $$...$$
  md = String(md);

  // Proteger bloques $$...$$ para que no sean procesados por las reglas inline
  const displayBlocks = [];
  md = md.replace(/\$\$[\s\S]*?\$\$/g, (match) => {
    const idx = displayBlocks.length;
    displayBlocks.push(match);
    return `\x00DBLOCK${idx}\x00`;
  });

  md = md.replace(/\\\((.+?)\\\)/gs, (_, expr) => `$${expr.trim()}$`);
  md = md.replace(
    /\\\[(.+?)\\\]/gs,
    (_, expr) => `$$\n${String(expr).trim()}\n$$`
  );

  // Convierte [ ... ] con contenido matemático típico en $...$
  md = md.replace(
    /\[\s*([^\[\]\n]*?(\\frac|\\Delta|\\cdot|\\sqrt|=)[^\[\]\n]*?)\s*\]/g,
    (_, expr) => `$${expr.trim()}$`
  );

  // Restaurar bloques $$...$$ protegidos
  // Usar función para evitar que String.replace() interprete $$ como patrón de escape
  displayBlocks.forEach((block, idx) => {
    md = md.replace(`\x00DBLOCK${idx}\x00`, () => block);
  });

  return md;
}

