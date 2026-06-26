// frontend/src/v2/components/SVG/svgGrammar.js
//
// Phyxio SVG Grammar v1.0
//
// Objetivo: misma filosofía que dclGrammar.js pero para escenas animadas.
// Define el vocabulario oficial de los gráficos Svg.
// Sirve como contrato único entre:
//   svg.profile.js -> SvgProfileRenderer -> escena visual
//
// Este archivo NO dibuja.
// Este archivo define:
//   - qué escenas existen
//   - qué objetos pueden aparecer
//   - qué tipos de movimiento hay
//   - cómo se llaman las cosas semánticamente

export const SVG_GRAMMAR_VERSION = "1.0.0";

/* ============================================================================
 * SCENE TYPES
 *
 * Determinan qué renderizador built-in usa SvgProfileRenderer.
 * CUSTOM permite un render(ctx) propio en el profile.
 * ============================================================================ */
export const SVG_SCENE_TYPES = Object.freeze({
  // Traslación (1D)
  BLOCK_TRANSLATION:  "block_translation",   // bloque deslizando en superficie horizontal
  HANGING_MASS:       "hanging_mass",         // masa colgante de cuerda o resorte
  BLOCK_ON_INCLINE:   "block_on_incline",     // bloque en plano inclinado

  // Oscilación
  SPRING_MASS:        "spring_mass",          // masa unida a muelle (SHM)
  PENDULUM:           "pendulum",             // péndulo simple

  // Rotación
  ROTATING_DISK:      "rotating_disk",        // disco rotante alrededor de eje fijo
  ROLLING_OBJECT:     "rolling_object",       // rueda que rueda sin deslizamiento

  // Bidimensional
  PROJECTILE:         "projectile",           // lanzamiento parabólico
  CIRCULAR_MOTION:    "circular_motion",      // movimiento circular uniforme/no uniforme

  // Sistemas
  PULLEY_SYSTEM:      "pulley_system",        // sistema polea + dos masas
  TWO_BODIES:         "two_bodies",           // dos cuerpos interactuando

  // Comparativo pedagógico
  COMPARATIVE:        "comparative",          // dos instancias lado a lado para comparar

  // Libre
  CUSTOM:             "custom",               // render(ctx) definido en el profile
});

/* ============================================================================
 * OBJECT TYPES
 *
 * Tipos de objetos que pueden declararse en profile.objects[].
 * El renderer resuelve cada uno al tipo SVG correspondiente.
 * ============================================================================ */
export const SVG_OBJECT_TYPES = Object.freeze({
  // Estructurales
  GROUND:         "ground",         // línea de suelo + trama diagonal
  WALL:           "wall",           // pared / tope lateral
  CEILING:        "ceiling",        // techo
  PIVOT:          "pivot",          // triángulo de pivote / eje
  RAIL:           "rail",           // guía o carril

  // Cuerpos
  BLOCK:          "block",          // bloque rectángulo con etiqueta
  MASS:           "mass",           // círculo con etiqueta (punto material)
  DISK:           "disk",           // disco con radio marcado y rotación
  SPHERE:         "sphere",         // esfera (2D → círculo con sombra)

  // Conexiones
  SPRING:         "spring",         // muelle animado (zigzag escalable)
  ROPE:           "rope",           // cuerda (segmento o curva)
  PULLEY:         "pulley",         // polea circular con ranura

  // Vectores semánticos
  VECTOR:         "vector",         // flecha vectorial con etiqueta
  ANGLE_ARC:      "angle_arc",      // arco de ángulo con etiqueta
  ROTATION_MARK:  "rotation_mark",  // flecha circular indicando rotación / torque

  // Cinemáticos
  TRAJECTORY:     "trajectory",     // trayectoria trazada en el tiempo
  TRAIL:          "trail",          // rastro desvanecido detrás del cuerpo

  // Informativos
  MASS_DOTS:      "mass_dots",      // puntos de masa distribuidos en órbita
  TEXT_LABEL:     "text_label",     // etiqueta texto o LaTeX
  FORMULA_BADGE:  "formula_badge",  // recuadro con fórmula + valor numérico
  DIMENSION_LINE: "dimension_line", // línea de cota con valor (para R, h, d…)

  // SVG genéricos (delegados directamente al DOM)
  CIRCLE:         "circle",
  RECT:           "rect",
  LINE:           "line",
  PATH:           "path",
  GROUP:          "group",
});

/* ============================================================================
 * VECTOR KINDS
 *
 * Rol semántico de un VECTOR en la escena.
 * Determina color y etiqueta por defecto si no se sobreescriben en el profile.
 * ============================================================================ */
export const SVG_VECTOR_KINDS = Object.freeze({
  WEIGHT:         "weight",           // fuerza gravitacional (naranja)
  NORMAL:         "normal",           // fuerza normal (verde)
  FRICTION:       "friction",         // rozamiento (amarillo)
  TENSION:        "tension",          // tensión en cuerda (cyan)
  APPLIED:        "applied",          // fuerza aplicada externa (magenta)
  SPRING_FORCE:   "spring_force",     // fuerza elástica (azul)
  VELOCITY:       "velocity",         // vector velocidad (violeta claro)
  ACCELERATION:   "acceleration",     // vector aceleración (rojo)
  ANGULAR_VEL:    "angular_velocity", // velocidad angular (violeta)
  TORQUE:         "torque",           // torque / momento de fuerza (naranja)
  MOMENTUM:       "momentum",         // cantidad de movimiento (azul)
  CUSTOM:         "custom",           // color y etiqueta libres
});

/* ============================================================================
 * MOTION TYPES
 *
 * Tipo de ecuación de movimiento que anima la escena.
 * Determina qué estado mínimo devuelve motion.state(t, p).
 * ============================================================================ */
export const SVG_MOTION_TYPES = Object.freeze({
  STATIC:         "static",       // sin animación; no se usa useRafPlayer
  NONE:           "static",       // alias legacy: varios profiles históricos usan NONE
  TRANSLATION:    "translation",  // estado: { x, vx }
  ROTATION:       "rotation",     // estado: { theta, omega }
  OSCILLATION:    "oscillation",  // estado: { x, vx, phase } — SHM
  PROJECTILE:     "projectile",   // estado: { x, y, vx, vy }
  ROLLING:        "rolling",      // estado: { x, theta, v, omega }
  COUPLED:        "coupled",      // estado: { x1, x2, v1, v2, … }
  CUSTOM:         "custom",       // estado libre definido por state(t, p)
});

/* ============================================================================
 * PARAM CONTROL TYPES
 *
 * Tipos de control del panel lateral.
 * Compatible con SvgAside y los sliders inline de SvgProfileRenderer.
 * ============================================================================ */
export const SVG_CONTROL_TYPES = Object.freeze({
  RANGE:   "range",    // slider continuo
  NUMBER:  "number",   // campo numérico
  TOGGLE:  "toggle",   // checkbox on/off
  SELECT:  "select",   // lista desplegable
});

/* ============================================================================
 * DEFAULT COLOR PALETTE
 *
 * Colores semánticos por defecto. El profile puede sobreescribirlos.
 * ============================================================================ */
export const SVG_COLORS = Object.freeze({
  // Cuerpos
  MASS_FILL:      "rgba(99,102,241,0.15)",
  MASS_STROKE:    "#6366f1",
  DISK_FILL:      "rgba(99,102,241,0.12)",
  DISK_STROKE:    "#6366f1",
  BLOCK_FILL:     "rgba(30,64,175,0.20)",
  BLOCK_STROKE:   "#3b82f6",

  // Estructurales
  GROUND:         "rgba(255,255,255,0.35)",
  WALL:           "rgba(255,255,255,0.25)",
  PIVOT:          "rgba(255,255,255,0.30)",

  // Vectores
  WEIGHT:         "#f97316",
  NORMAL:         "#22c55e",
  FRICTION:       "#eab308",
  TENSION:        "#06b6d4",
  SPRING_FORCE:   "#60a5fa",
  APPLIED:        "#e879f9",
  VELOCITY:       "#a78bfa",
  ACCELERATION:   "#f43f5e",
  TORQUE:         "#f97316",
  ANGULAR_VEL:    "#8b5cf6",
  MOMENTUM:       "#3b82f6",

  // Escena comparativa
  COMPARE_A:      "#1d4ed8",    // cuerpo izquierdo / instancia A
  COMPARE_B:      "#7c3aed",    // cuerpo derecho / instancia B

  // Informativos
  TEXT:           "rgba(255,255,255,0.88)",
  FORMULA:        "rgba(255,255,255,0.70)",
  DIMENSION:      "rgba(255,255,255,0.45)",
  TRAIL:          "rgba(139,92,246,0.25)",
  BADGE_BG:       "rgba(0,0,0,0.55)",
  BADGE_BORDER:   "rgba(255,255,255,0.15)",
});

/* ============================================================================
 * DEFAULT COLORS BY VECTOR KIND
 * ============================================================================ */
export const SVG_VECTOR_COLOR = Object.freeze({
  [SVG_VECTOR_KINDS.WEIGHT]:        SVG_COLORS.WEIGHT,
  [SVG_VECTOR_KINDS.NORMAL]:        SVG_COLORS.NORMAL,
  [SVG_VECTOR_KINDS.FRICTION]:      SVG_COLORS.FRICTION,
  [SVG_VECTOR_KINDS.TENSION]:       SVG_COLORS.TENSION,
  [SVG_VECTOR_KINDS.SPRING_FORCE]:  SVG_COLORS.SPRING_FORCE,
  [SVG_VECTOR_KINDS.APPLIED]:       SVG_COLORS.APPLIED,
  [SVG_VECTOR_KINDS.VELOCITY]:      SVG_COLORS.VELOCITY,
  [SVG_VECTOR_KINDS.ACCELERATION]:  SVG_COLORS.ACCELERATION,
  [SVG_VECTOR_KINDS.TORQUE]:        SVG_COLORS.TORQUE,
  [SVG_VECTOR_KINDS.ANGULAR_VEL]:   SVG_COLORS.ANGULAR_VEL,
  [SVG_VECTOR_KINDS.MOMENTUM]:      SVG_COLORS.MOMENTUM,
  [SVG_VECTOR_KINDS.CUSTOM]:        SVG_COLORS.TEXT,
});

/* ============================================================================
 * I18N HELPER
 * Igual que en dclGrammar para consistencia.
 * ============================================================================ */
export function getLocalizedText(value, lang = "es", fallback = "") {
  if (!value) return fallback;
  if (typeof value === "string") return value;
  if (typeof value === "object" && !Array.isArray(value)) {
    return value[lang] || value.es || value.en || fallback;
  }
  return fallback;
}

/* ============================================================================
 * SCHEMA HELPERS
 *
 * Utilidades para transformar el schema del profile al formato de
 * useExperimentParams (que usa key + aliases + default).
 * ============================================================================ */

/**
 * Extrae el array compatible con useExperimentParams del schema del profile.
 * El schema del profile puede tener campos extra (label, unit, type, min…)
 * que se ignoran aquí y se usan solo en la UI.
 */
export function schemaToExperimentSchema(profileSchema) {
  if (!Array.isArray(profileSchema)) return [];
  return profileSchema.map((item) => ({
    key:     item.key,
    aliases: item.aliases ?? [],
    default: item.default ?? 0,
  }));
}

function uniqueSvgStringList(values) {
  const out = [];
  const seen = new Set();
  for (const value of values ?? []) {
    if (typeof value !== "string") continue;
    const trimmed = value.trim();
    if (!trimmed || seen.has(trimmed)) continue;
    seen.add(trimmed);
    out.push(trimmed);
  }
  return out;
}

const SVG_INTERPRETATION_TARGET_ALIASES = Object.freeze({
  pTot: ["pTotI", "pTotF", "momento_lineal_total", "ptot", "P"],
  pTotCm: ["ptot", "pTot"],
  Pi: ["momento_lineal_total", "pTotI", "P"],
  Pf: ["momento_lineal_total", "pTotF", "P"],
  DeltaP: ["variacion_momento_lineal", "variacion_momento_total", "DeltaPtot"],
  Jext: ["J", "impulso_externo"],
  Fext: ["F_ext"],
  dt: ["t"],
  vcm: ["Vcm"],
  x_cm: ["xcm"],
  KE_lost: ["DeltaK"],
});

const SVG_INTERPRETATION_TARGET_REVERSE_ALIASES = Object.freeze(
  Object.entries(SVG_INTERPRETATION_TARGET_ALIASES).reduce((acc, [source, aliases]) => {
    for (const alias of aliases ?? []) {
      if (!acc[alias]) acc[alias] = [];
      acc[alias].push(source);
    }
    return acc;
  }, {})
);

function expandSvgInterpretationCandidate(sourceKey) {
  const raw = typeof sourceKey === "string" ? sourceKey.trim() : "";
  if (!raw) return [];

  return uniqueSvgStringList([
    raw,
    ...(SVG_INTERPRETATION_TARGET_ALIASES[raw] ?? []),
    ...(SVG_INTERPRETATION_TARGET_REVERSE_ALIASES[raw] ?? []),
  ]).map((target) => ({
    target,
    sourceKey: raw,
  }));
}

/**
 * Normaliza la semantica de interpretacion para que todos los perfiles SVG
 * puedan emitir un contexto legible aunque no hayan declarado
 * `interpretation_binding` manualmente.
 */
export function resolveSvgInterpretationBinding(profile) {
  const explicit = profile?.interpretation_binding ?? {};
  const graphContract = profile?.graph_contract ?? {};
  const contractBinding = graphContract?.interpretation_contract?.interpretation_binding ?? {};
  const calcContract = graphContract?.calculator_contract ?? {};
  const interpContract = graphContract?.interpretation_contract ?? {};

  const schemaKeys = uniqueSvgStringList(
    Array.isArray(profile?.params?.schema)
      ? profile.params.schema.map((item) => item?.key)
      : []
  );
  const derivationKeys = uniqueSvgStringList(
    profile?.params?.derivations && typeof profile.params.derivations === "object"
      ? Object.keys(profile.params.derivations)
      : []
  );

  const paramsIn = uniqueSvgStringList(
    explicit.paramsIn
      ?? contractBinding.paramsIn
      ?? calcContract.expected_inputs
      ?? schemaKeys
  );

  const stateOut = uniqueSvgStringList(
    explicit.stateOut
      ?? contractBinding.stateOut
      ?? calcContract.derived_magnitudes
      ?? derivationKeys
  );

  const targetCandidates = uniqueSvgStringList(
    calcContract.target_candidates
      ?? interpContract.selectable_magnitudes
      ?? stateOut
  );

  const target =
    (typeof explicit.target === "string" && explicit.target.trim())
    || (typeof explicit.primaryTarget === "string" && explicit.primaryTarget.trim())
    || (typeof contractBinding.target === "string" && contractBinding.target.trim())
    || (typeof contractBinding.primaryTarget === "string" && contractBinding.primaryTarget.trim())
    || (typeof profile?.meta?.target === "string" && profile.meta.target.trim())
    || targetCandidates[0]
    || stateOut[0]
    || derivationKeys[0]
    || schemaKeys[0]
    || null;

  const selectableMagnitudes = uniqueSvgStringList(
    explicit.selectableMagnitudes
      ?? interpContract.selectable_magnitudes
      ?? [target, ...targetCandidates, ...stateOut]
  );

  return {
    ...contractBinding,
    ...explicit,
    paramsIn,
    stateOut,
    target,
    primaryTarget:
      (typeof explicit.primaryTarget === "string" && explicit.primaryTarget.trim())
      || (typeof contractBinding.primaryTarget === "string" && contractBinding.primaryTarget.trim())
      || target,
    targetCandidates,
    selectableMagnitudes,
    supportsFocusTarget:
      explicit.supportsFocusTarget
      ?? interpContract.supports_focus_target
      ?? (selectableMagnitudes.length > 1),
  };
}

export function resolveSvgInterpretationTarget({
  interpretationDoc,
  binding,
  graphContext,
  selectedTarget = null,
  calcTarget = null,
} = {}) {
  const docTargets = uniqueSvgStringList(
    interpretationDoc?.targets && typeof interpretationDoc.targets === "object"
      ? Object.keys(interpretationDoc.targets)
      : []
  );

  const candidateSpecs = [];
  const pushCandidate = (value) => {
    for (const spec of expandSvgInterpretationCandidate(value)) {
      if (candidateSpecs.some((item) => item.target === spec.target && item.sourceKey === spec.sourceKey)) continue;
      candidateSpecs.push(spec);
    }
  };

  [
    selectedTarget,
    graphContext?.target,
    binding?.target,
    binding?.primaryTarget,
    calcTarget,
    ...(Array.isArray(binding?.targetCandidates) ? binding.targetCandidates : []),
    ...(Array.isArray(binding?.selectableMagnitudes) ? binding.selectableMagnitudes : []),
    ...(Array.isArray(graphContext?.stateOut) ? graphContext.stateOut : []),
    ...(Array.isArray(graphContext?.paramsIn) ? graphContext.paramsIn : []),
  ].forEach(pushCandidate);

  const findDocTarget = (target) => {
    if (!target) return null;
    if (docTargets.includes(target)) return target;
    const lowered = target.toLowerCase();
    return docTargets.find((value) => value.toLowerCase() === lowered) ?? null;
  };

  for (const spec of candidateSpecs) {
    const matchedTarget = findDocTarget(spec.target);
    if (matchedTarget) {
      return {
        target: matchedTarget,
        sourceKey: spec.sourceKey,
      };
    }
  }

  const fallback = candidateSpecs[0] ?? null;
  return {
    target: fallback?.target ?? null,
    sourceKey: fallback?.sourceKey ?? null,
  };
}

/* ============================================================================
 * PROFILE SHAPE REFERENCE
 *
 * Documentación del formato esperado. No es código ejecutable.
 *
 * {
 *   meta: {
 *     id:       string,           // "svg-definicion-momento-de-inercia"
 *     leafId:   string,           // "definicion-momento-de-inercia"
 *     title:    { es, en },
 *     subtitle: { es, en },       // opcional
 *     badge:    {                 // chip superior derecho (opcional)
 *       label:  string | { es, en },
 *       value:  (ctx) => string,  // función que retorna el valor a mostrar
 *     },
 *   },
 *
 *   scene: SVG_SCENE_TYPES.*,     // tipo de escena (o CUSTOM)
 *
 *   viewBox: string,              // "0 0 850 520" — coordenadas SVG directas
 *   svgHeight: number,            // altura del contenedor (default 800)
 *
 *   params: {
 *     schema: [
 *       {
 *         key:     string,
 *         aliases: string[],
 *         default: number | boolean,
 *         label:   { es, en },
 *         unit:    string,                  // "kg", "m", "N·m"...
 *         type:    SVG_CONTROL_TYPES.*,     // "range" | "toggle" | "number"
 *         min:     number,
 *         max:     number,
 *         step:    number,
 *       }
 *     ],
 *     derivations: {              // parámetros calculados a partir del schema
 *       I:     ({ m, R }) => m * R * R,
 *       alpha: ({ tau, I }) => tau / I,
 *       ...
 *     },
 *     sanitize: (p) => p,         // opcional: clamps y guardas extra
 *   },
 *
 *   motion: {
 *     type:  SVG_MOTION_TYPES.*,
 *     tMax:  number,              // segundos (null = infinito con loop)
 *     loop:  boolean,             // vuelve a t=0 al llegar a tMax
 *     state: (t, p) => ({...}),   // función pura: instante → estado físico
 *   },
 *
 *   render: (ctx) => JSX,         // solo si scene === CUSTOM
 *                                 // ctx = { p, state, t, lang }
 *
 *   interpretation_binding: {
 *     paramsIn:  string[],        // claves del schema que se leen de sharedParams
 *     stateOut:  string[],        // claves de p o state que se reportan vía onGraphStateChange
 *   },
 * }
 * ============================================================================ */
