import { withGraphContextRegistry } from "../shared/withGraphContext.jsx";
/**
 * Oscilaciones - Graph Components Index
 *
 * WIRING ONLY — los metadatos semánticos (title, xAxis, yAxis, relation,
 * physicalReading, agentHints, commonMistakes, etc.) viven en graficos.yaml.
 * Este archivo solo declara { type, graphType, component } por entrada.
 */

import CriticoGraphsCoord from "./Coord/CriticoGraphsCoord.jsx";
import EcuacionMovimientoGraphsCoord from "./Coord/EcuacionMovimientoGraphsCoord.jsx";
import EnergiaEnMhsGraphsCoord from "./Coord/EnergiaEnMhsGraphsCoord.jsx";
import FaseOscilacionesGraphsCoord from "./Coord/FaseOscilacionesGraphsCoord.jsx";
import FuerzaForzadaGraphsCoord from "./Coord/FuerzaForzadaGraphsCoord.jsx";
import OsciladorMasaMuelleGraphsCoord from "./Coord/OsciladorMasaMuelleGraphsCoord.jsx";
import PenduloFisicoAvanzadoGraphsCoord from "./Coord/PenduloFisicoAvanzadoGraphsCoord.jsx";
import PenduloFisicoGraphsCoord from "./Coord/PenduloFisicoGraphsCoord.jsx";
import PenduloSimpleOscGraphsCoord from "./Coord/PenduloSimpleOscGraphsCoord.jsx";
import ResonanciaOscGraphsCoord from "./Coord/ResonanciaOscGraphsCoord.jsx";
import SobreamortiguadoGraphsCoord from "./Coord/SobreamortiguadoGraphsCoord.jsx";
import SubamortiguadoGraphsCoord from "./Coord/SubamortiguadoGraphsCoord.jsx";
import OsciladorMasaMuelleGraphsSvg from "./Svg/OsciladorMasaMuelleGraphsSvg.jsx";
import PenduloFisicoAvanzadoGraphsSvg from "./Svg/PenduloFisicoAvanzadoGraphsSvg.jsx";
import PenduloFisicoGraphsSvg from "./Svg/PenduloFisicoGraphsSvg.jsx";
import PenduloSimpleOscGraphsSvg from "./Svg/PenduloSimpleOscGraphsSvg.jsx";

const rawGraphs = {
  "critico": {
    Coord: { type: "Coord", graphType: "Coord", component: CriticoGraphsCoord },
  },
  "ecuacion-movimiento": {
    Coord: { type: "Coord", graphType: "Coord", component: EcuacionMovimientoGraphsCoord },
  },
  "energia-en-mhs": {
    Coord: { type: "Coord", graphType: "Coord", component: EnergiaEnMhsGraphsCoord },
  },
  "fase": {
    Coord: { type: "Coord", graphType: "Coord", component: FaseOscilacionesGraphsCoord },
  },
  "fuerza-forzada": {
    Coord: { type: "Coord", graphType: "Coord", component: FuerzaForzadaGraphsCoord },
  },
  "oscilador-masa-muelle": {
    Coord: { type: "Coord", graphType: "Coord", component: OsciladorMasaMuelleGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: OsciladorMasaMuelleGraphsSvg },
  },
  "pendulo-fisico": {
    Coord: { type: "Coord", graphType: "Coord", component: PenduloFisicoGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: PenduloFisicoGraphsSvg },
  },
  "pendulo-fisico-avanzado": {
    Coord: { type: "Coord", graphType: "Coord", component: PenduloFisicoAvanzadoGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: PenduloFisicoAvanzadoGraphsSvg },
  },
  "pendulo-simple": {
    Coord: { type: "Coord", graphType: "Coord", component: PenduloSimpleOscGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: PenduloSimpleOscGraphsSvg },
  },
  "resonancia": {
    Coord: { type: "Coord", graphType: "Coord", component: ResonanciaOscGraphsCoord },
  },
  "sobreamortiguado": {
    Coord: { type: "Coord", graphType: "Coord", component: SobreamortiguadoGraphsCoord },
  },
  "subamortiguado": {
    Coord: { type: "Coord", graphType: "Coord", component: SubamortiguadoGraphsCoord },
  },
};

export const graphs = withGraphContextRegistry(rawGraphs);
export const oscilacionesGraphs = graphs;

export default graphs;
