import { withGraphContextRegistry } from "../shared/withGraphContext.jsx";
/**
 * Rotacion - Graph Components Index
 *
 * WIRING ONLY — los metadatos semánticos (title, xAxis, yAxis, relation,
 * physicalReading, agentHints, commonMistakes, etc.) viven en graficos.yaml.
 * Este archivo solo declara { type, graphType, component } por entrada.
 */

import AnalisisDinamicoDeLaRodaduraGraphsCoord from "./Coord/AnalisisDinamicoDeLaRodaduraGraphsCoord.jsx";
import AnalogiaTraslacionalGraphsCoord from "./Coord/AnalogiaTraslacionalGraphsCoord.jsx";
import CinematicaRotacionalGraphsCoord from "./Coord/CinematicaRotacionalGraphsCoord.jsx";
import CondicionCinematicaGraphsCoord from "./Coord/CondicionCinematicaGraphsCoord.jsx";
import DefinicionMomentoAngularGraphsCoord from "./Coord/DefinicionMomentoAngularGraphsCoord.jsx";
import DefinicionTorqueGraphsCoord from "./Coord/DefinicionTorqueGraphsCoord.jsx";
import EcuacionFundamentalGraphsCoord from "./Coord/EcuacionFundamentalGraphsCoord.jsx";
import EjemplosAplicadosGraphsCoord from "./Coord/EjemplosAplicadosGraphsCoord.jsx";
import EjemplosClasicosGraphsCoord from "./Coord/EjemplosClasicosGraphsCoord.jsx";
import EnergiaCineticaRotacionalGraphsCoord from "./Coord/EnergiaCineticaRotacionalGraphsCoord.jsx";
import EnergiaEnRodaduraGraphsCoord from "./Coord/EnergiaEnRodaduraGraphsCoord.jsx";
import MagnitudesAngularesGraphsCoord from "./Coord/MagnitudesAngularesGraphsCoord.jsx";
import RelacionLinealAngularGraphsCoord from "./Coord/RelacionLinealAngularGraphsCoord.jsx";
import RodaduraCinematicaSinDeslizamientoGraphsCoord from "./Coord/RodaduraCinematicaSinDeslizamientoGraphsCoord.jsx";
import TeoremaDeEjesParalelosGraphsCoord from "./Coord/TeoremaDeEjesParalelosGraphsCoord.jsx";
import TrabajoYTorqueGraphsCoord from "./Coord/TrabajoYTorqueGraphsCoord.jsx";
import AnalisisDinamicoDeLaRodaduraSvgGraphsSvg from "./Svg/AnalisisDinamicoDeLaRodaduraSvgGraphsSvg.jsx";
import AnalogiaLinealAngularGraphsSvg from "./Svg/AnalogiaLinealAngularGraphsSvg.jsx";
import CondicionCinematicaGraphsSvg from "./Svg/CondicionCinematicaGraphsSvg.jsx";
import ConservacionMomentoAngularGraphsSvg from "./Svg/ConservacionMomentoAngularGraphsSvg.jsx";
import DefinicionMomentoAngularGraphsSvg from "./Svg/DefinicionMomentoAngularGraphsSvg.jsx";
import DefinicionTorqueSvg from "./Svg/DefinicionTorqueSvg.jsx";
import EstrategiaParaProblemasDeRodaduraGraphsSvg from "./Svg/EstrategiaParaProblemasDeRodaduraGraphsSvg.jsx";
import MapaConceptualDeRotacionGraphsSvg from "./Svg/MapaConceptualDeRotacionGraphsSvg.jsx";
import MomentoInerciaDefinicionSvg from "./Svg/MomentoInerciaDefinicionSvg.jsx";
import MomentosTipicosGraphsSvg from "./Svg/MomentosTipicosGraphsSvg.jsx";
import PrecesionGraphsSvg from "./Svg/PrecesionGraphsSvg.jsx";
import RodaduraComoPuenteGraphsSvg from "./Svg/RodaduraComoPuenteGraphsSvg.jsx";
import TensorDeInerciaGraphsSvg from "./Svg/TensorDeInerciaGraphsSvg.jsx";
import DefinicionTorqueGraphsDcl from "./Dcl/DefinicionTorqueGraphsDcl.jsx";
import EstrategiaParaProblemasDeRodaduraGraphsDcl from "./Dcl/EstrategiaParaProblemasDeRodaduraGraphsDcl.jsx";

const rawGraphs = {
  "analisis-dinamico-de-la-rodadura": {
    Coord: { type: "Coord", graphType: "Coord", component: AnalisisDinamicoDeLaRodaduraGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: AnalisisDinamicoDeLaRodaduraSvgGraphsSvg },
  },
  "analogia-lineal-angular": {
    Coord: { type: "Coord", graphType: "Coord", component: AnalogiaTraslacionalGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: AnalogiaLinealAngularGraphsSvg },
  },
  "analogia-traslacional": {
    Coord: { type: "Coord", graphType: "Coord", component: AnalogiaTraslacionalGraphsCoord },
  },
  "calculo-del-torque": {
    Coord: { type: "Coord", graphType: "Coord", component: DefinicionTorqueGraphsCoord },
  },
  "cinematica-rotacional": {
    Coord: { type: "Coord", graphType: "Coord", component: CinematicaRotacionalGraphsCoord },
  },
  "condicion-de-rodadura-sin-deslizamiento": {
    Coord: { type: "Coord", graphType: "Coord", component: CondicionCinematicaGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: CondicionCinematicaGraphsSvg },
  },
  "conservacion-momento-angular": {
    Svg: { type: "Svg", graphType: "Svg", component: ConservacionMomentoAngularGraphsSvg },
  },
  "definicion-momento-angular": {
    Coord: { type: "Coord", graphType: "Coord", component: DefinicionMomentoAngularGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: DefinicionMomentoAngularGraphsSvg },
  },
  "definicion-momento-de-inercia": {
    Svg: { type: "Svg", graphType: "Svg", component: MomentoInerciaDefinicionSvg },
  },
  "definicion-torque": {
    Svg: { type: "Svg", graphType: "Svg", component: DefinicionTorqueSvg },
    Dcl: { type: "Dcl", graphType: "Dcl", component: DefinicionTorqueGraphsDcl },
  },
  "ecuacion-fundamental": {
    Coord: { type: "Coord", graphType: "Coord", component: EcuacionFundamentalGraphsCoord },
  },
  "ejemplos-aplicados": {
    Coord: { type: "Coord", graphType: "Coord", component: EjemplosAplicadosGraphsCoord },
  },
  "ejemplos-clasicos-rodadura": {
    Coord: { type: "Coord", graphType: "Coord", component: EjemplosClasicosGraphsCoord },
  },
  "energia-cinetica-rotacional": {
    Coord: { type: "Coord", graphType: "Coord", component: EnergiaCineticaRotacionalGraphsCoord },
  },
  "energia-en-rodadura": {
    Coord: { type: "Coord", graphType: "Coord", component: EnergiaEnRodaduraGraphsCoord },
  },
  "estrategia-para-problemas-de-rodadura": {
    Coord: { type: "Coord", graphType: "Coord", component: EnergiaEnRodaduraGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: EstrategiaParaProblemasDeRodaduraGraphsSvg },
    Dcl: { type: "Dcl", graphType: "Dcl", component: EstrategiaParaProblemasDeRodaduraGraphsDcl },
  },
  "magnitudes-angulares": {
    Coord: { type: "Coord", graphType: "Coord", component: MagnitudesAngularesGraphsCoord },
  },
  "mapa-conceptual-de-rotacion": {
    Svg: { type: "Svg", graphType: "Svg", component: MapaConceptualDeRotacionGraphsSvg },
  },
  "momentos-tipicos": {
    Svg: { type: "Svg", graphType: "Svg", component: MomentosTipicosGraphsSvg },
  },
  "precesion": {
    Svg: { type: "Svg", graphType: "Svg", component: PrecesionGraphsSvg },
  },
  "relacion-lineal-angular": {
    Coord: { type: "Coord", graphType: "Coord", component: RelacionLinealAngularGraphsCoord },
  },
  "rodadura-como-puente-entre-traslacion-y-rotacion": {
    Coord: { type: "Coord", graphType: "Coord", component: RodaduraCinematicaSinDeslizamientoGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: RodaduraComoPuenteGraphsSvg },
  },
  "tensor-de-inercia": {
    Svg: { type: "Svg", graphType: "Svg", component: TensorDeInerciaGraphsSvg },
  },
  "teorema-de-ejes-paralelos": {
    Coord: { type: "Coord", graphType: "Coord", component: TeoremaDeEjesParalelosGraphsCoord },
  },
  "trabajo-y-torque": {
    Coord: { type: "Coord", graphType: "Coord", component: TrabajoYTorqueGraphsCoord },
  },
};

export const graphs = withGraphContextRegistry(rawGraphs);
export const rotacionGraphs = graphs;

export default graphs;
