import { withGraphContextRegistry } from "../shared/withGraphContext.jsx";
/**
 * Mecanica Analitica - Graph Components Index
 *
 * WIRING ONLY — los metadatos semánticos (title, xAxis, yAxis, relation,
 * physicalReading, agentHints, commonMistakes, etc.) viven en graficos.yaml.
 * Este archivo solo declara { type, graphType, component } por entrada.
 */

import CoordenadasGeneralizadasGraphsCoord from "./Coord/CoordenadasGeneralizadasGraphsCoord.jsx";
import EcuacionesLagrangeGraphsCoord from "./Coord/EcuacionesLagrangeGraphsCoord.jsx";
import LigadurasGradosLibertadGraphsCoord from "./Coord/LigadurasGradosLibertadGraphsCoord.jsx";
import OsciladorArmonicoGraphsCoord from "./Coord/OsciladorArmonicoGraphsCoord.jsx";
import PenduloGraphsCoord from "./Coord/PenduloGraphsCoord.jsx";
import ProblemasConLigadurasGraphsCoord from "./Coord/ProblemasConLigadurasGraphsCoord.jsx";
import SimetriasConservacionesGraphsCoord from "./Coord/SimetriasConservacionesGraphsCoord.jsx";
import OsciladorArmonicoGraphsSvg from "./Svg/OsciladorArmonicoGraphsSvg.jsx";
import PenduloGraphsSvg from "./Svg/PenduloGraphsSvg.jsx";
import ProblemasConLigadurasGraphsSvg from "./Svg/ProblemasConLigadurasGraphsSvg.jsx";

const rawGraphs = {
  "coordenadas-generalizadas": {
    Coord: { type: "Coord", graphType: "Coord", component: CoordenadasGeneralizadasGraphsCoord },
  },
  "ecuaciones-de-lagrange": {
    Coord: { type: "Coord", graphType: "Coord", component: EcuacionesLagrangeGraphsCoord },
  },
  "ligaduras-y-grados-de-libertad": {
    Coord: { type: "Coord", graphType: "Coord", component: LigadurasGradosLibertadGraphsCoord },
  },
  "oscilador-armonico": {
    Coord: { type: "Coord", graphType: "Coord", component: OsciladorArmonicoGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: OsciladorArmonicoGraphsSvg },
  },
  "pendulo": {
    Coord: { type: "Coord", graphType: "Coord", component: PenduloGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: PenduloGraphsSvg },
  },
  "problemas-con-ligaduras": {
    Coord: { type: "Coord", graphType: "Coord", component: ProblemasConLigadurasGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: ProblemasConLigadurasGraphsSvg },
  },
  "simetrias-y-conservaciones": {
    Coord: { type: "Coord", graphType: "Coord", component: SimetriasConservacionesGraphsCoord },
  },
};

export const graphs = withGraphContextRegistry(rawGraphs);
export const mecanica_analiticaGraphs = graphs;

export default graphs;
