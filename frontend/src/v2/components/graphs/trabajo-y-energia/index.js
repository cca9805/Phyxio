import { withGraphContextRegistry } from "../shared/withGraphContext.jsx";
/**
 * Trabajo Y Energia - Graph Components Index
 *
 * WIRING ONLY — los metadatos semánticos (title, xAxis, yAxis, relation,
 * physicalReading, agentHints, commonMistakes, etc.) viven en graficos.yaml.
 * Este archivo solo declara { type, graphType, component } por entrada.
 */

import EnergiaCineticaGraphsCoord from "./Coord/EnergiaCineticaGraphsCoord.jsx";
import EnergiaPotencialElasticaGraphsCoord from "./Coord/EnergiaPotencialElasticaGraphsCoord.jsx";
import EnergiaPotencialGravitatoriaGraphsCoord from "./Coord/EnergiaPotencialGravitatoriaGraphsCoord.jsx";
import PotenciaGraphsCoord from "./Coord/PotenciaGraphsCoord.jsx";
import PrincipioDeConservacionGraphsCoord from "./Coord/PrincipioDeConservacionGraphsCoord.jsx";
import RozamientoYDisipacionGraphsCoord from "./Coord/RozamientoYDisipacionGraphsCoord.jsx";
import SistemasConservativosGraphsCoord from "./Coord/SistemasConservativosGraphsCoord.jsx";
import TrabajoDeFuerzasNoConservativasGraphsCoord from "./Coord/TrabajoDeFuerzasNoConservativasGraphsCoord.jsx";
import TrabajoFuerzaVariableGraphsCoord from "./Coord/TrabajoFuerzaVariableGraphsCoord.jsx";
import SistemasConservativosGraphsSvg from "./Svg/SistemasConservativosGraphsSvg.jsx";
import EnergiaPotencialElasticaGraphsDcl from "./Dcl/EnergiaPotencialElasticaGraphsDcl.jsx";
import RozamientoYDisipacionGraphsDcl from "./Dcl/RozamientoYDisipacionGraphsDcl.jsx";

const rawGraphs = {
  "energia-cinetica": {
    Coord: { type: "Coord", graphType: "Coord", component: EnergiaCineticaGraphsCoord },
  },
  "energia-potencial-elastica": {
    Coord: { type: "Coord", graphType: "Coord", component: EnergiaPotencialElasticaGraphsCoord },
    Dcl: { type: "Dcl", graphType: "Dcl", component: EnergiaPotencialElasticaGraphsDcl },
  },
  "energia-potencial-gravitatoria": {
    Coord: { type: "Coord", graphType: "Coord", component: EnergiaPotencialGravitatoriaGraphsCoord },
  },
  "potencia": {
    Coord: { type: "Coord", graphType: "Coord", component: PotenciaGraphsCoord },
  },
  "principio-de-conservacion": {
    Coord: { type: "Coord", graphType: "Coord", component: PrincipioDeConservacionGraphsCoord },
  },
  "rozamiento-y-disipacion": {
    Coord: { type: "Coord", graphType: "Coord", component: RozamientoYDisipacionGraphsCoord },
    Dcl: { type: "Dcl", graphType: "Dcl", component: RozamientoYDisipacionGraphsDcl },
  },
  "sistemas-conservativos": {
    Coord: { type: "Coord", graphType: "Coord", component: SistemasConservativosGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: SistemasConservativosGraphsSvg },
  },
  "trabajo-de-fuerzas-no-conservativas": {
    Coord: { type: "Coord", graphType: "Coord", component: TrabajoDeFuerzasNoConservativasGraphsCoord },
  },
  "trabajo-fuerza-variable": {
    Coord: { type: "Coord", graphType: "Coord", component: TrabajoFuerzaVariableGraphsCoord },
  },
};

export const graphs = withGraphContextRegistry(rawGraphs);
export const trabajo_y_energiaGraphs = graphs;

export default graphs;
