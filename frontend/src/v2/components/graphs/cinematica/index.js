import { withGraphContextRegistry } from "../shared/withGraphContext.jsx";
/**
 * Cinematica - Graph Components Index
 *
 * WIRING ONLY — los metadatos semánticos (title, xAxis, yAxis, relation,
 * physicalReading, agentHints, commonMistakes, etc.) viven en graficos.yaml.
 * Este archivo solo declara { type, graphType, component } por entrada.
 */

import AnalisisGraficoDelMovimientoGraphsCoordContract from "./Coord/AnalisisGraficoDelMovimientoGraphsCoordContract.jsx";
import EncuentrosYPersecucionesGraphsCoordContract from "./Coord/EncuentrosYPersecucionesGraphsCoordContract.jsx";
import MagnitudesCinematicasGraphsCoordContract from "./Coord/MagnitudesCinematicasGraphsCoordContract.jsx";
import McuGraphsCoordContract from "./Coord/McuGraphsCoordContract.jsx";
import McuaGraphsCoordContract from "./Coord/McuaGraphsCoordContract.jsx";
import MovimientoVerticalBajoGravedadGraphsCoordContract from "./Coord/MovimientoVerticalBajoGravedadGraphsCoordContract.jsx";
import MruGraphsCoordContract from "./Coord/MruGraphsCoordContract.jsx";
import MruaGraphsCoordContract from "./Coord/MruaGraphsCoordContract.jsx";
import SistemasReferenciaGraphsCoordContract from "./Coord/SistemasReferenciaGraphsCoordContract.jsx";
import TiroHorizontalGraphsCoordContract from "./Coord/TiroHorizontalGraphsCoordContract.jsx";
import TiroParabolicoGraphsCoordContract from "./Coord/TiroParabolicoGraphsCoordContract.jsx";
import VelocidadRelativaGraphsCoordContract from "./Coord/VelocidadRelativaGraphsCoordContract.jsx";
import EncuentrosYPersecucionesSvgGraphsSvg from "./Svg/EncuentrosYPersecucionesSvgGraphsSvg.jsx";
import McuSvgGraphsSvg from "./Svg/McuSvgGraphsSvg.jsx";
import McuaSvgGraphsSvg from "./Svg/McuaSvgGraphsSvg.jsx";
import MovimientoVerticalBajoGravedadGraphsSvg from "./Svg/MovimientoVerticalBajoGravedadGraphsSvg.jsx";
import SistemasReferenciaSvgGraphsSvg from "./Svg/SistemasReferenciaSvgGraphsSvg.jsx";
import TiroHorizontalSvgGraphsSvg from "./Svg/TiroHorizontalSvgGraphsSvg.jsx";
import TiroParabolicoSvgGraphsSvg from "./Svg/TiroParabolicoSvgGraphsSvg.jsx";
import VelocidadRelativaSvgGraphsSvg from "./Svg/VelocidadRelativaSvgGraphsSvg.jsx";

const rawGraphs = {
  "analisis-grafico-del-movimiento": {
    Coord: { type: "Coord", graphType: "Coord", component: AnalisisGraficoDelMovimientoGraphsCoordContract },
  },
  "encuentros-y-persecuciones": {
    Coord: { type: "Coord", graphType: "Coord", component: EncuentrosYPersecucionesGraphsCoordContract },
    Svg: { type: "Svg", graphType: "Svg", component: EncuentrosYPersecucionesSvgGraphsSvg },
  },
  "magnitudes-cinematicas": {
    Coord: { type: "Coord", graphType: "Coord", component: MagnitudesCinematicasGraphsCoordContract },
  },
  "mcu": {
    Coord: { type: "Coord", graphType: "Coord", component: McuGraphsCoordContract },
    Svg: { type: "Svg", graphType: "Svg", component: McuSvgGraphsSvg },
  },
  "mcua": {
    Coord: { type: "Coord", graphType: "Coord", component: McuaGraphsCoordContract },
    Svg: { type: "Svg", graphType: "Svg", component: McuaSvgGraphsSvg },
  },
  "movimiento-vertical-bajo-gravedad": {
    Coord: { type: "Coord", graphType: "Coord", component: MovimientoVerticalBajoGravedadGraphsCoordContract },
    Svg: { type: "Svg", graphType: "Svg", component: MovimientoVerticalBajoGravedadGraphsSvg },
  },
  "mru": {
    Coord: { type: "Coord", graphType: "Coord", component: MruGraphsCoordContract },
  },
  "mrua": {
    Coord: { type: "Coord", graphType: "Coord", component: MruaGraphsCoordContract },
  },
  "sistemas-referencia": {
    Coord: { type: "Coord", graphType: "Coord", component: SistemasReferenciaGraphsCoordContract },
    Svg: { type: "Svg", graphType: "Svg", component: SistemasReferenciaSvgGraphsSvg },
  },
  "tiro-horizontal": {
    Coord: { type: "Coord", graphType: "Coord", component: TiroHorizontalGraphsCoordContract },
    Svg: { type: "Svg", graphType: "Svg", component: TiroHorizontalSvgGraphsSvg },
  },
  "tiro-parabolico": {
    Coord: { type: "Coord", graphType: "Coord", component: TiroParabolicoGraphsCoordContract },
    Svg: { type: "Svg", graphType: "Svg", component: TiroParabolicoSvgGraphsSvg },
  },
  "velocidad-relativa": {
    Coord: { type: "Coord", graphType: "Coord", component: VelocidadRelativaGraphsCoordContract },
    Svg: { type: "Svg", graphType: "Svg", component: VelocidadRelativaSvgGraphsSvg },
  },
};

export const graphs = withGraphContextRegistry(rawGraphs);
export const cinematicaGraphs = graphs;

export default graphs;
