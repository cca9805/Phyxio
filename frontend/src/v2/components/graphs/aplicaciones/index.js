import { withGraphContextRegistry } from "../shared/withGraphContext.jsx";
/**
 * Aplicaciones - Graph Components Index
 *
 * WIRING ONLY — los metadatos semánticos (title, xAxis, yAxis, relation,
 * physicalReading, agentHints, commonMistakes, etc.) viven en graficos.yaml.
 * Este archivo solo declara { type, graphType, component } por entrada.
 */

import TornilloGraphsCoord from "./Coord/TornilloGraphsCoord.jsx";
import VentajaMecanicaGraphsCoord from "./Coord/VentajaMecanicaGraphsCoord.jsx";
import PalancaGraphsSvg from "./Svg/PalancaGraphsSvg.jsx";
import PlanoInclinadoGraphsSvg from "./Svg/PlanoInclinadoGraphsSvg.jsx";
import PoleaGraphsSvg from "./Svg/PoleaGraphsSvg.jsx";
import RuedaYEjeGraphsSvg from "./Svg/RuedaYEjeGraphsSvg.jsx";
import TiposDePalancasGraphsSvg from "./Svg/TiposDePalancasGraphsSvg.jsx";
import TornilloGraphsSvg from "./Svg/TornilloGraphsSvg.jsx";
import PlanoInclinadoGraphsDcl from "./Dcl/PlanoInclinadoGraphsDcl.jsx";

const rawGraphs = {
  "palanca": {
    Svg: { type: "Svg", graphType: "Svg", component: PalancaGraphsSvg },
  },
  "plano-inclinado": {
    Svg: { type: "Svg", graphType: "Svg", component: PlanoInclinadoGraphsSvg },
    Dcl: { type: "Dcl", graphType: "Dcl", component: PlanoInclinadoGraphsDcl },
  },
  "polea": {
    Svg: { type: "Svg", graphType: "Svg", component: PoleaGraphsSvg },
  },
  "rueda-y-eje": {
    Svg: { type: "Svg", graphType: "Svg", component: RuedaYEjeGraphsSvg },
  },
  "tipos-de-palancas": {
    Svg: { type: "Svg", graphType: "Svg", component: TiposDePalancasGraphsSvg },
  },
  "tornillo": {
    Coord: { type: "Coord", graphType: "Coord", component: TornilloGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: TornilloGraphsSvg },
  },
  "ventaja-mecanica": {
    Coord: { type: "Coord", graphType: "Coord", component: VentajaMecanicaGraphsCoord },
  },
};

export const graphs = withGraphContextRegistry(rawGraphs);
export const aplicacionesGraphs = graphs;

export default graphs;
