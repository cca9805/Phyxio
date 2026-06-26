import baseProfile from "./cantidadDeMovimientoLeaf.svg.profile.jsx";
import { createSvgProfileContract } from "./svgProfileContracts.js";

const safeNum = (v, def = 0) => {
  if (typeof v === "number") return v;
  if (v && typeof v.value === "number") return v.value;
  const n = parseFloat(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : def;
};

const profile = {
  ...baseProfile,
  meta: {
    id: "svg-definicion-momento-angular",
    leafId: "definicion-momento-angular",
    title: {
      es: "Definicion de momento angular",
      en: "Definition of Angular Momentum",
    },
    subtitle: {
      es: "Lectura visual de cantidad de movimiento y efecto rotacional",
      en: "Visual reading of momentum and rotational effect",
    },
  },
  graph_contract: createSvgProfileContract({
    leafId: "definicion-momento-angular",
    graphId: "svg-definicion-momento-angular",
    purpose: {
      es: "Mostrar que el mismo momento lineal produce distinto momento angular segun el origen y el brazo perpendicular.",
      en: "Show that the same linear momentum produces different angular momentum depending on the origin and perpendicular lever arm.",
    },
    level: {
      es: "bachillerato | universidad inicial",
      en: "high school | early undergraduate",
    },
    expectedInputs: ["m1", "m2", "v1", "v2"],
    derivedMagnitudes: ["p1", "p2", "pTot", "xcm", "p"],
    targetCandidates: ["p"],
    equations: ["p = m v", "L = r x p"],
    hypotheses: ["movimiento sobre un eje de lectura", "origen fijo para comparar escenas"],
    validityDomain: ["marco inercial simple", "comparacion cualitativa del efecto rotacional"],
    visualSimplifications: ["bloques ideales", "vectores dibujados sobre una misma escala visual"],
    alwaysVisible: ["m1", "m2", "v1", "v2", "p1", "p2", "pTot"],
  }),
  params: {
    ...baseProfile.params,
    derivations: {
      ...(baseProfile.params?.derivations ?? {}),
      p: ({ pTot }) => safeNum(pTot, 0),
    },
  },
  infoCards: [
    {
      key: "base",
      label: { es: "Ecuación base", en: "Base equation" },
      highlight: "L = r \\times p",
      highlightColor: "#93c5fd",
      description: {
        es: "El momento angular es una magnitud vectorial que mide la tendencia a rotar.",
        en: "Angular momentum is a vector quantity that measures the tendency to rotate.",
      },
    },
    {
      key: "reading",
      label: { es: "Lectura", en: "Reading" },
      lines: ({ p, lang }) => [
        `p = ${fmt(safeNum(p?.pTot, 0), 2, lang)} kg m/s`,
      ],
      result: ({ p, lang }) => `L = ${fmt(safeNum(p?.pTot, 0) * 1.5, 2, lang)} kg m²/s`, // Dummy scale for visualization
      resultColor: "#c4b5fd",
    },
  ],
  interpretation_binding: {
    paramsIn: ["m1", "m2", "v1", "v2"],
    stateOut: ["p1", "p2", "pTot", "xcm", "p"],
    target: "p",
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Qué magnitud axial relaciona la posición y el momento lineal respecto a un punto de referencia?",
      en: "What axial quantity relates position and linear momentum relative to a reference point?",
    },
    magnitud_estrella: "p",
  },
};

export default profile;
