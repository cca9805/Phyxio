import { withGraphContextRegistry } from "../shared/withGraphContext.jsx";
/**
 * Gravitacion - Graph Components Index
 *
 * WIRING ONLY — los metadatos semánticos (title, xAxis, yAxis, relation,
 * physicalReading, agentHints, commonMistakes, etc.) viven en graficos.yaml.
 * Este archivo solo declara { type, graphType, component } por entrada.
 */

import CampoYPotencialGravitatorioGraphsCoord from "./Coord/CampoYPotencialGravitatorioGraphsCoord.jsx";
import EnergiaOrbitalGraphsCoord from "./Coord/EnergiaOrbitalGraphsCoord.jsx";
import EnergiaPotencialGravitatoriaGravGraphsCoord from "./Coord/EnergiaPotencialGravitatoriaGravGraphsCoord.jsx";
import LeyDeGravitacionUniversalGraphsCoord from "./Coord/LeyDeGravitacionUniversalGraphsCoord.jsx";
import LeyesDeKeplerGraphsCoord from "./Coord/LeyesDeKeplerGraphsCoord.jsx";
import MareasYPerturbacionesGraphsCoord from "./Coord/MareasYPerturbacionesGraphsCoord.jsx";
import VelocidadOrbitalGraphsCoord from "./Coord/VelocidadOrbitalGraphsCoord.jsx";
import EnergiaOrbitalGraphsSvg from "./Svg/EnergiaOrbitalGraphsSvg.jsx";
import LeyesDeKeplerGraphsSvg from "./Svg/LeyesDeKeplerGraphsSvg.jsx";
import VelocidadOrbitalGraphsSvg from "./Svg/VelocidadOrbitalGraphsSvg.jsx";

const rawGraphs = {
  "campo-y-potencial-gravitatorio": {
    Coord: { type: "Coord", graphType: "Coord", component: CampoYPotencialGravitatorioGraphsCoord },
  },
  "energia-orbital": {
    Coord: { type: "Coord", graphType: "Coord", component: EnergiaOrbitalGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: EnergiaOrbitalGraphsSvg },
  },
  "energia-potencial-gravitatoria": {
    Coord: { type: "Coord", graphType: "Coord", component: EnergiaPotencialGravitatoriaGravGraphsCoord },
  },
  "ley-de-gravitacion-universal": {
    Coord: { type: "Coord", graphType: "Coord", component: LeyDeGravitacionUniversalGraphsCoord },
  },
  "leyes-de-kepler": {
    Coord: { type: "Coord", graphType: "Coord", component: LeyesDeKeplerGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: LeyesDeKeplerGraphsSvg },
  },
  "mareas-y-perturbaciones": {
    Coord: { type: "Coord", graphType: "Coord", component: MareasYPerturbacionesGraphsCoord },
  },
  "velocidad-orbital": {
    Coord: { type: "Coord", graphType: "Coord", component: VelocidadOrbitalGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: VelocidadOrbitalGraphsSvg },
  },
};

export const graphs = withGraphContextRegistry(rawGraphs);
export const gravitacionGraphs = graphs;

export default graphs;
