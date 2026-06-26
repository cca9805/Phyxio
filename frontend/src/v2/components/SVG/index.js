// frontend/src/v2/components/SVG/index.js
//
// Punto de entrada del motor SVG de Phyxio.
// Análogo al sistema DCL en /components/DCL/.

// Motor principal
export { default as SvgProfileRenderer } from "./SvgProfileRenderer";

// Primitivos reutilizables para render() de profiles CUSTOM
export {
  SvgArrow,
  SvgTorqueArc,
  SvgMassDots,
  SvgDisk,
  SvgGround,
  SvgSpring,
} from "./SvgProfileRenderer";

// Gramática / vocabulario
export {
  SVG_GRAMMAR_VERSION,
  SVG_SCENE_TYPES,
  SVG_OBJECT_TYPES,
  SVG_VECTOR_KINDS,
  SVG_MOTION_TYPES,
  SVG_CONTROL_TYPES,
  SVG_COLORS,
  SVG_VECTOR_COLOR,
  getLocalizedText,
  schemaToExperimentSchema,
} from "./svgGrammar";

// Validador (uso en DEV)
export { validateSvgProfile } from "./validateSvgProfile";
