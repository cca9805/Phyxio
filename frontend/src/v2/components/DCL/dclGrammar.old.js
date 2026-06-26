// frontend/src/v2/components/DCL/dclGrammar.js

/**
 * Phyxio DCL Grammar v2
 *
 * Objetivo:
 * - definir el vocabulario oficial de los DCL
 * - desacoplar leaf -> render manual
 * - servir como contrato único entre:
 *   graph profile -> scene registry -> DCL renderer -> auto layout
 * - unificar semántica, validación y normalización
 *
 * Este archivo NO dibuja.
 * Este archivo define:
 * - qué existe
 * - cómo se llama
 * - qué shape debe tener
 * - cómo se valida
 * - cómo se normaliza
 */

export const DCL_GRAMMAR_VERSION = "2.1.0";

/* ============================================================================
 * ENUMS BÁSICOS
 * ========================================================================== */

export const DCL_SCENE_IDS = Object.freeze({
  PARTICLE_FREE: "particle_free",
  BLOCK_ON_TABLE: "block_on_table",
  BLOCK_ON_INCLINE: "block_on_incline",
  HANGING_MASS: "hanging_mass",
  TWO_MASSES_ROPE: "two_masses_rope",
  PULLEY_SIMPLE: "pulley_simple",
  CUSTOM: "custom",
});

export const DCL_BODY_KIND_IDS = Object.freeze({
  POINT: "point",
  BLOCK: "block",
  MASS: "mass",
  PULLEY: "pulley",
  SURFACE: "surface",
  ANCHOR: "anchor",
});

export const DCL_VECTOR_TYPE_IDS = Object.freeze({
  WEIGHT: "weight",
  NORMAL: "normal",
  FRICTION: "friction",
  TENSION: "tension",
  APPLIED_FORCE: "applied_force",
  DRAG: "drag",
  SPRING_FORCE: "spring_force",
  ACCELERATION: "acceleration",
  VELOCITY: "velocity",
  REACTION: "reaction",
  CUSTOM: "custom",
});

export const DCL_DIRECTION_MODE_IDS = Object.freeze({
  UP: "up",
  DOWN: "down",
  LEFT: "left",
  RIGHT: "right",
  ALONG_SURFACE_POSITIVE: "along_surface_positive",
  ALONG_SURFACE_NEGATIVE: "along_surface_negative",
  NORMAL_OUTWARD: "normal_outward",
  NORMAL_INWARD: "normal_inward",
  ROPE_DIRECTION: "rope_direction",
  CUSTOM: "custom",
});

export const DCL_ANCHORS = Object.freeze({
  CENTER: "center",
  CONTACT: "contact",
  ATTACHMENT: "attachment",
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right",
  CUSTOM: "custom",
});

export const DCL_LABEL_POSITIONS = Object.freeze({
  AUTO: "auto",
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right",
  START: "start",
  END: "end",
  CENTER: "center",
  OUTER: "outer",
  SIDE: "side",
  FALLBACK: "fallback",
});

export const DCL_HIGHLIGHT_MODES = Object.freeze({
  NONE: "none",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  MUTED: "muted",
});

export const DCL_QUESTION_TYPES = Object.freeze({
  IDENTIFY_FORCES: "identify_forces",
  IDENTIFY_DIRECTIONS: "identify_directions",
  FORCE_BALANCE: "force_balance",
  AXIS_SELECTION: "axis_selection",
  MOTION_RELATION: "motion_relation",
  CUSTOM: "custom",
});

/* ============================================================================
 * I18N HELPERS
 * ========================================================================== */

function makeBilingual(es, en) {
  return Object.freeze({ es, en });
}

function isBilingualText(value) {
  return (
    value &&
    typeof value === "object" &&
    !Array.isArray(value) &&
    typeof value.es === "string" &&
    typeof value.en === "string"
  );
}

function normalizeBilingualText(value, fallbackEs = "", fallbackEn = "") {
  if (isBilingualText(value)) {
    return {
      es: value.es,
      en: value.en,
    };
  }

  if (typeof value === "string") {
    return {
      es: value,
      en: value,
    };
  }

  return {
    es: fallbackEs,
    en: fallbackEn || fallbackEs,
  };
}

export function getLocalizedText(value, lang = "es", fallback = "") {
  if (isBilingualText(value)) {
    return value[lang] || value.es || value.en || fallback;
  }
  if (typeof value === "string") {
    return value;
  }
  return fallback;
}

/* ============================================================================
 * METADATA SEMÁNTICA OFICIAL
 * ========================================================================== */

export const DCL_SCENES = Object.freeze({
  [DCL_SCENE_IDS.PARTICLE_FREE]: {
    id: DCL_SCENE_IDS.PARTICLE_FREE,
    label: makeBilingual("Partícula libre", "Particle in free space"),
    description: makeBilingual(
      "Partícula libre sin apoyo ni contacto. Útil para peso aislado, fuerzas centrales, campos o vectores cinemáticos.",
      "Free particle without support or contact. Useful for isolated weight, central forces, fields, or kinematic vectors."
    ),
    bodyKinds: [DCL_BODY_KIND_IDS.POINT, DCL_BODY_KIND_IDS.MASS],
    supportsSurface: false,
    supportsRope: false,
    supportsPulley: false,
    supportsMultipleBodies: false,
    requiredParams: [],
  },

  [DCL_SCENE_IDS.BLOCK_ON_TABLE]: {
    id: DCL_SCENE_IDS.BLOCK_ON_TABLE,
    label: makeBilingual("Bloque sobre mesa horizontal", "Block on horizontal table"),
    description: makeBilingual(
      "Bloque sobre superficie horizontal. Escena base para normal, peso, rozamiento y fuerza aplicada.",
      "Block on a horizontal surface. Base scene for normal force, weight, friction, and applied force."
    ),
    bodyKinds: [DCL_BODY_KIND_IDS.BLOCK],
    supportsSurface: true,
    supportsRope: false,
    supportsPulley: false,
    supportsMultipleBodies: false,
    requiredParams: [],
  },

  [DCL_SCENE_IDS.BLOCK_ON_INCLINE]: {
    id: DCL_SCENE_IDS.BLOCK_ON_INCLINE,
    label: makeBilingual("Bloque en plano inclinado", "Block on incline"),
    description: makeBilingual(
      "Bloque sobre plano inclinado. Escena base para peso, normal, rozamiento y fuerzas tangenciales.",
      "Block on an inclined plane. Base scene for weight, normal force, friction, and tangential forces."
    ),
    bodyKinds: [DCL_BODY_KIND_IDS.BLOCK],
    supportsSurface: true,
    supportsRope: false,
    supportsPulley: false,
    supportsMultipleBodies: false,
    requiredParams: ["theta"],
  },

  [DCL_SCENE_IDS.HANGING_MASS]: {
    id: DCL_SCENE_IDS.HANGING_MASS,
    label: makeBilingual("Masa colgante", "Hanging mass"),
    description: makeBilingual(
      "Masa suspendida verticalmente. Útil para tensión, peso y aceleración vertical.",
      "Vertically suspended mass. Useful for tension, weight, and vertical acceleration."
    ),
    bodyKinds: [DCL_BODY_KIND_IDS.MASS],
    supportsSurface: false,
    supportsRope: true,
    supportsPulley: false,
    supportsMultipleBodies: false,
    requiredParams: [],
  },

  [DCL_SCENE_IDS.TWO_MASSES_ROPE]: {
    id: DCL_SCENE_IDS.TWO_MASSES_ROPE,
    label: makeBilingual("Dos masas unidas por cuerda", "Two masses connected by rope"),
    description: makeBilingual(
      "Dos cuerpos unidos por cuerda, sin polea compleja en esta primera versión.",
      "Two bodies connected by a rope, without complex pulley behavior in this first version."
    ),
    bodyKinds: [DCL_BODY_KIND_IDS.BLOCK, DCL_BODY_KIND_IDS.MASS],
    supportsSurface: true,
    supportsRope: true,
    supportsPulley: false,
    supportsMultipleBodies: true,
    requiredParams: [],
  },

  [DCL_SCENE_IDS.PULLEY_SIMPLE]: {
    id: DCL_SCENE_IDS.PULLEY_SIMPLE,
    label: makeBilingual("Polea simple", "Simple pulley"),
    description: makeBilingual(
      "Sistema simple con polea ideal. Base para extensiones posteriores.",
      "Simple system with ideal pulley. Base for later extensions."
    ),
    bodyKinds: [
      DCL_BODY_KIND_IDS.BLOCK,
      DCL_BODY_KIND_IDS.MASS,
      DCL_BODY_KIND_IDS.PULLEY,
    ],
    supportsSurface: true,
    supportsRope: true,
    supportsPulley: true,
    supportsMultipleBodies: true,
    requiredParams: [],
  },

  [DCL_SCENE_IDS.CUSTOM]: {
    id: DCL_SCENE_IDS.CUSTOM,
    label: makeBilingual("Escena personalizada", "Custom scene"),
    description: makeBilingual(
      "Escena libre para prototipos o transiciones del sistema antiguo.",
      "Free scene for prototypes or transitions from the old system."
    ),
    bodyKinds: Object.values(DCL_BODY_KIND_IDS),
    supportsSurface: true,
    supportsRope: true,
    supportsPulley: true,
    supportsMultipleBodies: true,
    requiredParams: [],
  },
});

export const DCL_BODY_KINDS = Object.freeze({
  [DCL_BODY_KIND_IDS.POINT]: {
    id: DCL_BODY_KIND_IDS.POINT,
    label: makeBilingual("Punto", "Point"),
    description: makeBilingual(
      "Punto material sin tamaño apreciable.",
      "Material point with negligible size."
    ),
    defaultAnchor: DCL_ANCHORS.CENTER,
    supportsRotation: false,
    category: "body",
  },

  [DCL_BODY_KIND_IDS.BLOCK]: {
    id: DCL_BODY_KIND_IDS.BLOCK,
    label: makeBilingual("Bloque", "Block"),
    description: makeBilingual(
      "Bloque rígido idealizado.",
      "Idealized rigid block."
    ),
    defaultAnchor: DCL_ANCHORS.CENTER,
    supportsRotation: false,
    category: "body",
  },

  [DCL_BODY_KIND_IDS.MASS]: {
    id: DCL_BODY_KIND_IDS.MASS,
    label: makeBilingual("Masa", "Mass"),
    description: makeBilingual(
      "Masa puntual o colgante representada visualmente.",
      "Point mass or hanging mass represented visually."
    ),
    defaultAnchor: DCL_ANCHORS.CENTER,
    supportsRotation: false,
    category: "body",
  },

  [DCL_BODY_KIND_IDS.PULLEY]: {
    id: DCL_BODY_KIND_IDS.PULLEY,
    label: makeBilingual("Polea", "Pulley"),
    description: makeBilingual(
      "Polea ideal o simplificada.",
      "Ideal or simplified pulley."
    ),
    defaultAnchor: DCL_ANCHORS.CENTER,
    supportsRotation: true,
    category: "mechanism",
  },

  [DCL_BODY_KIND_IDS.SURFACE]: {
    id: DCL_BODY_KIND_IDS.SURFACE,
    label: makeBilingual("Superficie", "Surface"),
    description: makeBilingual(
      "Superficie de apoyo o plano.",
      "Support surface or plane."
    ),
    defaultAnchor: DCL_ANCHORS.CENTER,
    supportsRotation: false,
    category: "environment",
  },

  [DCL_BODY_KIND_IDS.ANCHOR]: {
    id: DCL_BODY_KIND_IDS.ANCHOR,
    label: makeBilingual("Anclaje", "Anchor"),
    description: makeBilingual(
      "Punto de anclaje fijo.",
      "Fixed anchoring point."
    ),
    defaultAnchor: DCL_ANCHORS.CENTER,
    supportsRotation: false,
    category: "environment",
  },
});

export const DCL_VECTOR_TYPES = Object.freeze({
  [DCL_VECTOR_TYPE_IDS.WEIGHT]: {
    id: DCL_VECTOR_TYPE_IDS.WEIGHT,
    label: makeBilingual("Peso", "Weight"),
    symbolHint: "P",
    physicalMeaning: makeBilingual(
      "Fuerza peso.",
      "Weight force."
    ),
    directionModel: DCL_DIRECTION_MODE_IDS.DOWN,
    defaultAnchor: DCL_ANCHORS.CENTER,
    category: "force",
  },

  [DCL_VECTOR_TYPE_IDS.NORMAL]: {
    id: DCL_VECTOR_TYPE_IDS.NORMAL,
    label: makeBilingual("Normal", "Normal"),
    symbolHint: "N",
    physicalMeaning: makeBilingual(
      "Fuerza normal de contacto.",
      "Contact normal force."
    ),
    directionModel: DCL_DIRECTION_MODE_IDS.NORMAL_OUTWARD,
    defaultAnchor: DCL_ANCHORS.CONTACT,
    category: "force",
  },

  [DCL_VECTOR_TYPE_IDS.FRICTION]: {
    id: DCL_VECTOR_TYPE_IDS.FRICTION,
    label: makeBilingual("Rozamiento", "Friction"),
    symbolHint: "f",
    physicalMeaning: makeBilingual(
      "Fuerza de rozamiento tangencial.",
      "Tangential friction force."
    ),
    directionModel: DCL_DIRECTION_MODE_IDS.ALONG_SURFACE_NEGATIVE,
    defaultAnchor: DCL_ANCHORS.CONTACT,
    category: "force",
  },

  [DCL_VECTOR_TYPE_IDS.TENSION]: {
    id: DCL_VECTOR_TYPE_IDS.TENSION,
    label: makeBilingual("Tensión", "Tension"),
    symbolHint: "T",
    physicalMeaning: makeBilingual(
      "Fuerza transmitida por cuerda ideal.",
      "Force transmitted through an ideal rope."
    ),
    directionModel: DCL_DIRECTION_MODE_IDS.ROPE_DIRECTION,
    defaultAnchor: DCL_ANCHORS.ATTACHMENT,
    category: "force",
  },

  [DCL_VECTOR_TYPE_IDS.APPLIED_FORCE]: {
    id: DCL_VECTOR_TYPE_IDS.APPLIED_FORCE,
    label: makeBilingual("Fuerza aplicada", "Applied force"),
    symbolHint: "F",
    physicalMeaning: makeBilingual(
      "Fuerza externa aplicada.",
      "Applied external force."
    ),
    directionModel: DCL_DIRECTION_MODE_IDS.CUSTOM,
    defaultAnchor: DCL_ANCHORS.CENTER,
    category: "force",
  },

  [DCL_VECTOR_TYPE_IDS.DRAG]: {
    id: DCL_VECTOR_TYPE_IDS.DRAG,
    label: makeBilingual("Arrastre", "Drag"),
    symbolHint: "D",
    physicalMeaning: makeBilingual(
      "Fuerza de arrastre o resistencia.",
      "Drag or resistive force."
    ),
    directionModel: DCL_DIRECTION_MODE_IDS.CUSTOM,
    defaultAnchor: DCL_ANCHORS.CENTER,
    category: "force",
  },

  [DCL_VECTOR_TYPE_IDS.SPRING_FORCE]: {
    id: DCL_VECTOR_TYPE_IDS.SPRING_FORCE,
    label: makeBilingual("Fuerza elástica", "Spring force"),
    symbolHint: "F_e",
    physicalMeaning: makeBilingual(
      "Fuerza elástica de resorte.",
      "Spring elastic force."
    ),
    directionModel: DCL_DIRECTION_MODE_IDS.CUSTOM,
    defaultAnchor: DCL_ANCHORS.ATTACHMENT,
    category: "force",
  },

  [DCL_VECTOR_TYPE_IDS.ACCELERATION]: {
    id: DCL_VECTOR_TYPE_IDS.ACCELERATION,
    label: makeBilingual("Aceleración", "Acceleration"),
    symbolHint: "a",
    physicalMeaning: makeBilingual(
      "Vector aceleración.",
      "Acceleration vector."
    ),
    directionModel: DCL_DIRECTION_MODE_IDS.CUSTOM,
    defaultAnchor: DCL_ANCHORS.CENTER,
    category: "kinematics",
  },

  [DCL_VECTOR_TYPE_IDS.VELOCITY]: {
    id: DCL_VECTOR_TYPE_IDS.VELOCITY,
    label: makeBilingual("Velocidad", "Velocity"),
    symbolHint: "v",
    physicalMeaning: makeBilingual(
      "Vector velocidad.",
      "Velocity vector."
    ),
    directionModel: DCL_DIRECTION_MODE_IDS.CUSTOM,
    defaultAnchor: DCL_ANCHORS.CENTER,
    category: "kinematics",
  },

  [DCL_VECTOR_TYPE_IDS.REACTION]: {
    id: DCL_VECTOR_TYPE_IDS.REACTION,
    label: makeBilingual("Reacción", "Reaction"),
    symbolHint: "R",
    physicalMeaning: makeBilingual(
      "Reacción global o fuerza resultante.",
      "Global reaction or resultant force."
    ),
    directionModel: DCL_DIRECTION_MODE_IDS.CUSTOM,
    defaultAnchor: DCL_ANCHORS.CONTACT,
    category: "force",
  },

  [DCL_VECTOR_TYPE_IDS.CUSTOM]: {
    id: DCL_VECTOR_TYPE_IDS.CUSTOM,
    label: makeBilingual("Vector personalizado", "Custom vector"),
    symbolHint: "",
    physicalMeaning: makeBilingual(
      "Vector personalizado.",
      "Custom vector."
    ),
    directionModel: DCL_DIRECTION_MODE_IDS.CUSTOM,
    defaultAnchor: DCL_ANCHORS.CENTER,
    category: "custom",
  },
});

export const DCL_VISUAL_PRIORITY = Object.freeze({
  highlighted_vector: 100,
  primary_force: 90,
  secondary_force: 80,
  kinematic_vector: 70,
  body: 50,
  surface: 30,
  background: 10,
});

export const DCL_LABEL_POLICY = Object.freeze({
  minDistanceFromBody: 14,
  minDistanceBetweenLabels: 18,
  preferredPositions: ["end", "side", "outer", "fallback"],
  allowAutoShift: true,
  allowLeaderLine: false,
});

/* ============================================================================
 * SHAPE OFICIAL DEL PROFILE
 * ========================================================================== */

export const DCL_PROFILE_SHAPE = Object.freeze({
  scene: DCL_SCENE_IDS.BLOCK_ON_INCLINE,
  question: DCL_QUESTION_TYPES.IDENTIFY_FORCES,
  lang: "es",
  meta: {
    id: "example-block-on-incline",
    title: makeBilingual("Bloque en plano inclinado", "Block on incline"),
    leafId: "example-leaf",
    question: makeBilingual("Identificar fuerzas", "Identify forces"),
  },
  environment: {
    inclineAngleDeg: 30,
    showAxes: false,
    showGrid: false,
    gravityDirection: DCL_DIRECTION_MODE_IDS.DOWN,
  },
  params: {
    theta: "theta",
  },
  bodies: [
    {
      id: "body1",
      kind: DCL_BODY_KIND_IDS.BLOCK,
      label: makeBilingual("Bloque", "Block"),
      role: "main",
      anchor: DCL_ANCHORS.CENTER,
      params: {},
      bindings: {},
      style: {
        variant: "default",
        highlight: DCL_HIGHLIGHT_MODES.PRIMARY,
        opacity: 1,
      },
    },
  ],
  vectors: [
    {
      id: "weight_main",
      type: DCL_VECTOR_TYPE_IDS.WEIGHT,
      bodyId: "body1",
      magnitudeId: "P",
      label: makeBilingual("Peso", "Weight"),
      symbol: "P",
      visible: true,
      highlight: false,
      anchor: DCL_ANCHORS.CENTER,
      direction: null,
      semanticRole: "cause",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.PRIMARY,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 3,
        visible: true,
      },
    },
  ],
  labels: [],
  interpretation: {
    header_bridge: makeBilingual("", ""),
    graph_role: makeBilingual("", ""),
    graph_reading: makeBilingual("", ""),
    calc_reading: makeBilingual("", ""),
    likely_errors: {
      es: [],
      en: [],
    },
  },
  options: {
    showSurface: true,
    showAxes: false,
    showAngleMarker: true,
    autoLabelLayout: true,
    autoVectorScale: true,
    clampVectorLengths: true,
    showVectorMagnitudes: false,
    showBodyNames: false,
    followCalculator: true,
    experimentMode: false,
    debug: false,
  },
});

/* ============================================================================
 * DEFAULTS INTERNOS
 * ========================================================================== */

const DEFAULT_ENVIRONMENT = Object.freeze({
  inclineAngleDeg: 0,
  showAxes: false,
  showGrid: false,
  gravityDirection: DCL_DIRECTION_MODE_IDS.DOWN,
});

const DEFAULT_OPTIONS = Object.freeze({
  showSurface: true,
  showAxes: false,
  showAngleMarker: false,
  autoLabelLayout: true,
  autoVectorScale: true,
  clampVectorLengths: true,
  showVectorMagnitudes: false,
  showBodyNames: false,
  followCalculator: false,
  experimentMode: false,
  debug: false,
});

const DEFAULT_META = Object.freeze({
  id: "",
  title: makeBilingual("", ""),
  smartHeader: makeBilingual("", ""),
  leafId: "",
  question: makeBilingual("", ""),
});

const DEFAULT_BODY_STYLE = Object.freeze({
  variant: "default",
  highlight: DCL_HIGHLIGHT_MODES.NONE,
  opacity: 1,
});

const DEFAULT_VECTOR_STYLE = Object.freeze({
  highlight: DCL_HIGHLIGHT_MODES.NONE,
  labelPosition: DCL_LABEL_POSITIONS.AUTO,
  priority: 1,
  visible: true,
});

/* ============================================================================
 * UTILS
 * ========================================================================== */

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function ensureArray(value, fallback = []) {
  return Array.isArray(value) ? value : fallback;
}

function ensureString(value, fallback = "") {
  return typeof value === "string" ? value : fallback;
}

function ensureBoolean(value, fallback = false) {
  return typeof value === "boolean" ? value : fallback;
}

function ensureNumber(value, fallback = 0) {
  return Number.isFinite(value) ? value : fallback;
}

function ensureEnum(value, allowedValues, fallback) {
  return allowedValues.includes(value) ? value : fallback;
}

function invariant(condition, message) {
  if (!condition) {
    throw new Error(`[DCL Grammar] ${message}`);
  }
}

function uniqueById(items, kind = "item") {
  const seen = new Set();
  for (const item of items) {
    if (!item?.id) continue;
    if (seen.has(item.id)) {
      throw new Error(`[DCL Grammar] Duplicate ${kind} id detected: "${item.id}"`);
    }
    seen.add(item.id);
  }
}

function collectValidationErrors(profile) {
  const errors = [];

  if (!profile || typeof profile !== "object") {
    return ["DCL profile must be an object."];
  }

  if (!profile.scene) {
    errors.push("Missing required field: scene");
  } else if (!isValidDclScene(profile.scene)) {
    errors.push(`Unknown scene: ${profile.scene}`);
  }

  if (!Array.isArray(profile.bodies) || profile.bodies.length === 0) {
    errors.push("Profile must define at least one body.");
  }

  if (!Array.isArray(profile.vectors)) {
    errors.push("Profile must define vectors as an array.");
  }

  return errors;
}

/* ============================================================================
 * HELPERS PÚBLICOS SEMÁNTICOS
 * ========================================================================== */

export function getDclScene(sceneId) {
  return DCL_SCENES[sceneId] || null;
}

export function getDclBodyKind(kindId) {
  return DCL_BODY_KINDS[kindId] || null;
}

export function getDclVectorType(vectorTypeId) {
  return DCL_VECTOR_TYPES[vectorTypeId] || null;
}

export function isValidDclScene(sceneId) {
  return Boolean(getDclScene(sceneId));
}

export function isValidDclBodyKind(kindId) {
  return Boolean(getDclBodyKind(kindId));
}

export function isValidDclVectorType(vectorTypeId) {
  return Boolean(getDclVectorType(vectorTypeId));
}

export function getSupportedSceneIds() {
  return Object.keys(DCL_SCENES);
}

export function getSupportedBodyKinds() {
  return Object.keys(DCL_BODY_KINDS);
}

export function getSupportedVectorTypes() {
  return Object.keys(DCL_VECTOR_TYPES);
}

/* ============================================================================
 * NORMALIZADORES
 * ========================================================================== */

function normalizeMeta(meta = {}) {
  const safe = isPlainObject(meta) ? meta : {};
  return {
    ...DEFAULT_META,
    id: ensureString(safe.id),
    title: normalizeBilingualText(safe.title, "", ""),
    smartHeader: normalizeBilingualText(safe.smartHeader, "", ""),
    leafId: ensureString(safe.leafId),
    question: normalizeBilingualText(safe.question, "", ""),
  };
}

function normalizeEnvironment(environment = {}) {
  const safe = isPlainObject(environment) ? environment : {};
  return {
    ...DEFAULT_ENVIRONMENT,
    inclineAngleDeg: ensureNumber(
      safe.inclineAngleDeg,
      DEFAULT_ENVIRONMENT.inclineAngleDeg
    ),
    showAxes: ensureBoolean(safe.showAxes, DEFAULT_ENVIRONMENT.showAxes),
    showGrid: ensureBoolean(safe.showGrid, DEFAULT_ENVIRONMENT.showGrid),
    gravityDirection: ensureEnum(
      safe.gravityDirection,
      [DCL_DIRECTION_MODE_IDS.DOWN, DCL_DIRECTION_MODE_IDS.UP],
      DEFAULT_ENVIRONMENT.gravityDirection
    ),
  };
}

function normalizeOptions(options = {}) {
  const safe = isPlainObject(options) ? options : {};
  return {
    ...DEFAULT_OPTIONS,
    showSurface: ensureBoolean(safe.showSurface, DEFAULT_OPTIONS.showSurface),
    showAxes: ensureBoolean(safe.showAxes, DEFAULT_OPTIONS.showAxes),
    showAngleMarker: ensureBoolean(
      safe.showAngleMarker,
      DEFAULT_OPTIONS.showAngleMarker
    ),
    autoLabelLayout: ensureBoolean(
      safe.autoLabelLayout,
      DEFAULT_OPTIONS.autoLabelLayout
    ),
    autoVectorScale: ensureBoolean(
      safe.autoVectorScale,
      DEFAULT_OPTIONS.autoVectorScale
    ),
    clampVectorLengths: ensureBoolean(
      safe.clampVectorLengths,
      DEFAULT_OPTIONS.clampVectorLengths
    ),
    showVectorMagnitudes: ensureBoolean(
      safe.showVectorMagnitudes,
      DEFAULT_OPTIONS.showVectorMagnitudes
    ),
    showBodyNames: ensureBoolean(
      safe.showBodyNames,
      DEFAULT_OPTIONS.showBodyNames
    ),
    followCalculator: ensureBoolean(
      safe.followCalculator,
      DEFAULT_OPTIONS.followCalculator
    ),
    experimentMode: ensureBoolean(
      safe.experimentMode,
      DEFAULT_OPTIONS.experimentMode
    ),
    debug: ensureBoolean(safe.debug, DEFAULT_OPTIONS.debug),
  };
}

function normalizeInterpretation(interpretation = {}) {
  const safe = isPlainObject(interpretation) ? interpretation : {};

  return {
    header_bridge: normalizeBilingualText(safe.header_bridge, "", ""),
    reading_focus: normalizeBilingualText(safe.reading_focus, "", ""),
    graph_role: normalizeBilingualText(safe.graph_role, "", ""),
    graph_reading: normalizeBilingualText(safe.graph_reading, "", ""),
    calc_reading: normalizeBilingualText(safe.calc_reading, "", ""),
    likely_errors: isPlainObject(safe.likely_errors)
      ? {
          es: Array.isArray(safe.likely_errors.es) ? safe.likely_errors.es : [],
          en: Array.isArray(safe.likely_errors.en) ? safe.likely_errors.en : [],
        }
      : {
          es: [],
          en: [],
        },
  };
}

function normalizeBody(body = {}) {
  invariant(isPlainObject(body), "Each body must be an object.");

  const style = isPlainObject(body.style) ? body.style : {};
  const kind = ensureEnum(
    body.kind ?? body.type,
    Object.values(DCL_BODY_KIND_IDS),
    DCL_BODY_KIND_IDS.BLOCK
  );
  const kindMeta = getDclBodyKind(kind);

  const normalized = {
    id: ensureString(body.id),
    kind,
    type: kind,
    label: normalizeBilingualText(
      body.label ?? body.name,
      kindMeta ? getLocalizedText(kindMeta.label, "es") : "",
      kindMeta ? getLocalizedText(kindMeta.label, "en") : ""
    ),
    name: normalizeBilingualText(
      body.name ?? body.label,
      kindMeta ? getLocalizedText(kindMeta.label, "es") : "",
      kindMeta ? getLocalizedText(kindMeta.label, "en") : ""
    ),
    role: ensureString(body.role, "main"),
    anchor: ensureEnum(
      body.anchor,
      Object.values(DCL_ANCHORS),
      kindMeta?.defaultAnchor ?? DCL_ANCHORS.CENTER
    ),
    params: isPlainObject(body.params) ? body.params : {},
    bindings: isPlainObject(body.bindings) ? body.bindings : {},
    style: {
      ...DEFAULT_BODY_STYLE,
      variant: ensureString(style.variant, DEFAULT_BODY_STYLE.variant),
      highlight: ensureEnum(
        style.highlight,
        Object.values(DCL_HIGHLIGHT_MODES),
        DEFAULT_BODY_STYLE.highlight
      ),
      opacity: ensureNumber(style.opacity, DEFAULT_BODY_STYLE.opacity),
    },
  };

  invariant(normalized.id, "Each body must have a non-empty id.");
  return normalized;
}

function normalizeVector(vector = {}) {
  invariant(isPlainObject(vector), "Each vector must be an object.");

  const style = isPlainObject(vector.style) ? vector.style : {};
  const type = ensureEnum(
    vector.type,
    Object.values(DCL_VECTOR_TYPE_IDS),
    DCL_VECTOR_TYPE_IDS.CUSTOM
  );
  const vectorMeta = getDclVectorType(type);

  const directionMode = ensureEnum(
    vector.directionMode ?? vector.direction,
    Object.values(DCL_DIRECTION_MODE_IDS),
    vectorMeta?.directionModel ?? DCL_DIRECTION_MODE_IDS.CUSTOM
  );

  const anchor = ensureEnum(
    vector.anchor ?? vector.origin,
    Object.values(DCL_ANCHORS),
    vectorMeta?.defaultAnchor ?? DCL_ANCHORS.CENTER
  );

  const normalized = {
    id: ensureString(vector.id),
    type,
    bodyId: ensureString(vector.bodyId ?? vector.targetBodyId),
    targetBodyId: ensureString(vector.targetBodyId ?? vector.bodyId),
    magnitudeId: ensureString(vector.magnitudeId),
    label: normalizeBilingualText(
      vector.label,
      vectorMeta ? getLocalizedText(vectorMeta.label, "es") : "",
      vectorMeta ? getLocalizedText(vectorMeta.label, "en") : ""
    ),
    symbol: ensureString(vector.symbol, ""),
    visible: ensureBoolean(vector.visible, true),
    highlight: ensureBoolean(vector.highlight, false),
    anchor,
    origin: anchor,
    directionMode,
    direction: vector.direction ?? null,
    customDirection: isPlainObject(vector.customDirection)
      ? {
          x: ensureNumber(vector.customDirection.x, 0),
          y: ensureNumber(vector.customDirection.y, 0),
        }
      : null,
    semanticRole: ensureString(vector.semanticRole),
    bindings: isPlainObject(vector.bindings) ? vector.bindings : {},
    style: {
      ...DEFAULT_VECTOR_STYLE,
      highlight: ensureEnum(
        style.highlight,
        Object.values(DCL_HIGHLIGHT_MODES),
        vector.highlight
          ? DCL_HIGHLIGHT_MODES.PRIMARY
          : DEFAULT_VECTOR_STYLE.highlight
      ),
      labelPosition: ensureEnum(
        style.labelPosition,
        Object.values(DCL_LABEL_POSITIONS),
        DEFAULT_VECTOR_STYLE.labelPosition
      ),
      priority: ensureNumber(style.priority, DEFAULT_VECTOR_STYLE.priority),
      visible: ensureBoolean(style.visible, vector.visible),
    },
  };

  invariant(normalized.id, "Each vector must have a non-empty id.");
  invariant(
    normalized.bodyId,
    `Vector "${normalized.id}" must define bodyId or targetBodyId.`
  );

  if (normalized.directionMode === DCL_DIRECTION_MODE_IDS.CUSTOM) {
    const hasLegacyDirection =
      typeof normalized.direction === "string" && normalized.direction.length > 0;

    invariant(
      hasLegacyDirection ||
        (normalized.customDirection &&
          Number.isFinite(normalized.customDirection.x) &&
          Number.isFinite(normalized.customDirection.y)),
      `Vector "${normalized.id}" uses CUSTOM direction and requires direction string or customDirection.`
    );
  }

  return normalized;
}

function normalizeLabel(label = {}) {
  invariant(isPlainObject(label), "Each label must be an object.");

  const normalized = {
    id: ensureString(label.id),
    text: normalizeBilingualText(label.text, "", ""),
    targetId: ensureString(label.targetId),
    position: ensureEnum(
      label.position,
      Object.values(DCL_LABEL_POSITIONS),
      DCL_LABEL_POSITIONS.AUTO
    ),
    priority: ensureNumber(label.priority, 1),
    visible: ensureBoolean(label.visible, true),
  };

  invariant(normalized.id, "Each label must have a non-empty id.");
  return normalized;
}

/* ============================================================================
 * VALIDACIÓN POR ESCENA
 * ========================================================================== */

function validateSceneSpecificRules(profile) {
  const { scene, bodies, vectors, environment, params } = profile;
  const sceneMeta = getDclScene(scene);

  invariant(sceneMeta, `Unknown scene "${scene}".`);

  const bodyKinds = new Set(bodies.map((b) => b.kind));
  const bodyIds = new Set(bodies.map((b) => b.id));

  if (sceneMeta.requiredParams?.length) {
    for (const paramName of sceneMeta.requiredParams) {
      invariant(
        params && Object.prototype.hasOwnProperty.call(params, paramName),
        `Scene "${scene}" requires param "${paramName}".`
      );
    }
  }

  for (const kind of bodyKinds) {
    invariant(
      sceneMeta.bodyKinds.includes(kind) || scene === DCL_SCENE_IDS.CUSTOM,
      `Scene "${scene}" does not support body kind "${kind}".`
    );
  }

  if (!sceneMeta.supportsMultipleBodies) {
    invariant(
      bodies.length <= 1,
      `Scene "${scene}" does not support multiple bodies.`
    );
  }

  if (scene === DCL_SCENE_IDS.BLOCK_ON_INCLINE) {
    invariant(
      environment.inclineAngleDeg >= 0 && environment.inclineAngleDeg <= 90,
      'BLOCK_ON_INCLINE requires "inclineAngleDeg" between 0 and 90.'
    );
    invariant(
      bodies.some((b) => b.kind === DCL_BODY_KIND_IDS.BLOCK),
      "BLOCK_ON_INCLINE requires at least one block body."
    );
  }

  if (scene === DCL_SCENE_IDS.BLOCK_ON_TABLE) {
    invariant(
      bodies.some((b) => b.kind === DCL_BODY_KIND_IDS.BLOCK),
      "BLOCK_ON_TABLE requires at least one block body."
    );
  }

  if (scene === DCL_SCENE_IDS.HANGING_MASS) {
    invariant(
      bodies.some((b) => b.kind === DCL_BODY_KIND_IDS.MASS),
      "HANGING_MASS requires at least one mass body."
    );
  }

  for (const vector of vectors) {
    invariant(
      bodyIds.has(vector.bodyId),
      `Vector "${vector.id}" references unknown bodyId "${vector.bodyId}".`
    );
  }
}

/* ============================================================================
 * VALIDACIÓN PÚBLICA
 * ========================================================================== */

export function validateDclProfile(profile) {
  const initialErrors = collectValidationErrors(profile);
  if (initialErrors.length > 0) {
    return {
      ok: false,
      errors: initialErrors,
    };
  }

  const errors = [];

  try {
    uniqueById(profile.bodies, "body");
    uniqueById(profile.vectors, "vector");
    uniqueById(profile.labels ?? [], "label");

    for (const body of profile.bodies) {
      if (!body.id) errors.push("Each body must have an id.");
      if (!body.kind && !body.type) {
        errors.push(`Body ${body.id || "(unknown)"} is missing kind/type.`);
      } else if (!isValidDclBodyKind(body.kind ?? body.type)) {
        errors.push(`Unknown body kind: ${body.kind ?? body.type}`);
      }
    }

    const bodyIds = new Set(profile.bodies.map((b) => b.id));
    for (const vector of profile.vectors) {
      if (!vector.id) errors.push("Each vector must have an id.");
      if (!vector.type) {
        errors.push(`Vector ${vector.id || "(unknown)"} is missing type.`);
      } else if (!isValidDclVectorType(vector.type)) {
        errors.push(`Unknown vector type: ${vector.type}`);
      }

      const refBodyId = vector.bodyId ?? vector.targetBodyId;
      if (!refBodyId) {
        errors.push(`Vector ${vector.id || "(unknown)"} is missing bodyId.`);
      } else if (!bodyIds.has(refBodyId)) {
        errors.push(
          `Vector ${vector.id || "(unknown)"} references unknown bodyId: ${refBodyId}`
        );
      }
    }

    if (errors.length === 0) {
      validateSceneSpecificRules(profile);
    }
  } catch (error) {
    errors.push(error instanceof Error ? error.message : String(error));
  }

  return {
    ok: errors.length === 0,
    errors,
  };
}

/* ============================================================================
 * NORMALIZACIÓN PÚBLICA
 * ========================================================================== */

export function normalizeDclProfile(input = {}) {
  invariant(isPlainObject(input), "DCL profile must be an object.");

  const scene = ensureEnum(
    input.scene,
    Object.values(DCL_SCENE_IDS),
    DCL_SCENE_IDS.CUSTOM
  );

  const question = ensureEnum(
    input.question,
    Object.values(DCL_QUESTION_TYPES),
    DCL_QUESTION_TYPES.CUSTOM
  );

  const lang = ensureEnum(input.lang, ["es", "en"], "es");

  const bodies = ensureArray(input.bodies).map(normalizeBody);
  const vectors = ensureArray(input.vectors).map(normalizeVector);
  const labels = ensureArray(input.labels).map(normalizeLabel);

  const profile = {
    scene,
    question,
    lang,
    meta: normalizeMeta(input.meta),
    environment: normalizeEnvironment(input.environment),
    params: isPlainObject(input.params) ? input.params : {},
    bodies,
    vectors,
    labels,
    interpretation: normalizeInterpretation(input.interpretation),
    options: normalizeOptions(input.options),
  };

  uniqueById(profile.bodies, "body");
  uniqueById(profile.vectors, "vector");
  uniqueById(profile.labels, "label");

  validateSceneSpecificRules(profile);

  return profile;
}

/* ============================================================================
 * CONSTRUCTORES
 * ========================================================================== */

export function createDclProfile(config = {}) {
  return normalizeDclProfile(config);
}

export function createBody(config = {}) {
  return normalizeBody(config);
}

export function createVector(config = {}) {
  return normalizeVector(config);
}

export function createLabel(config = {}) {
  return normalizeLabel(config);
}

/* ============================================================================
 * EJEMPLO OFICIAL
 * ========================================================================== */

export const DCL_PROFILE_EXAMPLE = Object.freeze({
  scene: DCL_SCENE_IDS.BLOCK_ON_INCLINE,
  question: DCL_QUESTION_TYPES.IDENTIFY_FORCES,
  lang: "es",
  meta: {
    id: "example-block-on-incline",
    title: makeBilingual("Bloque en plano inclinado", "Block on incline"),
    leafId: "ejemplo",
    question: makeBilingual("Identificar fuerzas", "Identify forces"),
  },
  environment: {
    inclineAngleDeg: 30,
    showAxes: false,
    showGrid: false,
    gravityDirection: DCL_DIRECTION_MODE_IDS.DOWN,
  },
  params: {
    theta: "theta",
  },
  bodies: [
    {
      id: "block-1",
      kind: DCL_BODY_KIND_IDS.BLOCK,
      label: makeBilingual("Bloque", "Block"),
      role: "main",
      anchor: DCL_ANCHORS.CENTER,
      style: {
        variant: "default",
        highlight: DCL_HIGHLIGHT_MODES.PRIMARY,
        opacity: 1,
      },
    },
  ],
  vectors: [
    {
      id: "weight-1",
      type: DCL_VECTOR_TYPE_IDS.WEIGHT,
      bodyId: "block-1",
      magnitudeId: "P",
      label: makeBilingual("Peso", "Weight"),
      symbol: "P",
      anchor: DCL_ANCHORS.CENTER,
      semanticRole: "cause",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.PRIMARY,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 3,
        visible: true,
      },
    },
    {
      id: "normal-1",
      type: DCL_VECTOR_TYPE_IDS.NORMAL,
      bodyId: "block-1",
      magnitudeId: "N",
      label: makeBilingual("Normal", "Normal"),
      symbol: "N",
      anchor: DCL_ANCHORS.CONTACT,
      semanticRole: "constraint",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.NONE,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 2,
        visible: true,
      },
    },
    {
      id: "friction-1",
      type: DCL_VECTOR_TYPE_IDS.FRICTION,
      bodyId: "block-1",
      magnitudeId: "f",
      label: makeBilingual("Rozamiento", "Friction"),
      symbol: "f",
      anchor: DCL_ANCHORS.CONTACT,
      semanticRole: "opposition",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.SECONDARY,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 2,
        visible: true,
      },
    },
  ],
  labels: [],
  options: {
    showSurface: true,
    showAxes: false,
    showAngleMarker: true,
    autoLabelLayout: true,
    autoVectorScale: true,
    clampVectorLengths: true,
    showVectorMagnitudes: false,
    showBodyNames: false,
    followCalculator: true,
    experimentMode: false,
    debug: false,
  },
});