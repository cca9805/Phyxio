import { withGraphContextRegistry } from "../shared/withGraphContext.jsx";
/**
 * Fluidos - Graph Components Index
 *
 * WIRING ONLY — los metadatos semánticos (title, xAxis, yAxis, relation,
 * physicalReading, agentHints, commonMistakes, etc.) viven en graficos.yaml.
 * Este archivo solo declara { type, graphType, component } por entrada.
 */

import AerodinamicaBasicaGraphsCoord from "./Coord/AerodinamicaBasicaGraphsCoord.jsx";
import AplicacionesIngenierilesGraphsCoord from "./Coord/AplicacionesIngenierilesGraphsCoord.jsx";
import ArchimedesGraphsCoord from "./Coord/ArchimedesGraphsCoord.jsx";
import CompresibilidadGraphsCoord from "./Coord/CompresibilidadGraphsCoord.jsx";
import ConceptoDeFluidoGraphsCoord from "./Coord/ConceptoDeFluidoGraphsCoord.jsx";
import DensidadGraphsCoord from "./Coord/DensidadGraphsCoord.jsx";
import EcuacionDeBernoulliGraphsCoord from "./Coord/EcuacionDeBernoulliGraphsCoord.jsx";
import EcuacionDeContinuidadGraphsCoord from "./Coord/EcuacionDeContinuidadGraphsCoord.jsx";
import EfectoVenturiGraphsCoord from "./Coord/EfectoVenturiGraphsCoord.jsx";
import FlotacionGraphsCoord from "./Coord/FlotacionGraphsCoord.jsx";
import FlujoEnTuberiasGraphsCoord from "./Coord/FlujoEnTuberiasGraphsCoord.jsx";
import FlujoLaminarGraphsCoord from "./Coord/FlujoLaminarGraphsCoord.jsx";
import FlujoTurbulentoGraphsCoord from "./Coord/FlujoTurbulentoGraphsCoord.jsx";
import HidrodinamicaGraphsCoord from "./Coord/HidrodinamicaGraphsCoord.jsx";
import IntroduccionAlSonidoGraphsSvg from "./Svg/IntroduccionAlSonidoGraphsSvg.jsx";
import ManometrosGraphsCoord from "./Coord/ManometrosGraphsCoord.jsx";
import NavierStokesIntroGraphsCoord from "./Coord/NavierStokesIntroGraphsCoord.jsx";
import NavierStokesIntroGraphsSvg from "./Svg/NavierStokesIntroGraphsSvg.jsx";
import OndasLongitudinalesFluidosGraphsCoord from "../ondas/Coord/OndasLongitudinalesFluidosGraphsCoord.jsx";
import OndasLongitudinalesGraphsCoord from "../ondas/Coord/OndasLongitudinalesGraphsCoord.jsx";
import OndasLongitudinalesGraphsSvg from "../ondas/Svg/OndasLongitudinalesGraphsSvg.jsx";
import OndasSuperficialesGraphsCoord from "../ondas/Coord/OndasSuperficialesGraphsCoord.jsx";
import OndasSuperficialesGraphsSvg from "../ondas/Svg/OndasSuperficialesGraphsSvg.jsx";
import PerdidasDeCargaGraphsCoord from "./Coord/PerdidasDeCargaGraphsCoord.jsx";
import PresionGraphsCoord from "./Coord/PresionGraphsCoord.jsx";
import PresionHidrostaticaGraphsCoord from "./Coord/PresionHidrostaticaGraphsCoord.jsx";
import PrincipioDePascalGraphsCoord from "./Coord/PrincipioDePascalGraphsCoord.jsx";
import PrincipioFundamentalDeLaHidrostaticaGraphsCoord from "./Coord/PrincipioFundamentalDeLaHidrostaticaGraphsCoord.jsx";
import ReynoldsGraphsCoord from "./Coord/ReynoldsGraphsCoord.jsx";
import SustentacionGraphsCoord from "./Coord/SustentacionGraphsCoord.jsx";
import TensionSuperficialGraphsCoord from "./Coord/TensionSuperficialGraphsCoord.jsx";
import TuboDePitotGraphsCoord from "./Coord/TuboDePitotGraphsCoord.jsx";
import VasosComunicantesGraphsCoord from "./Coord/VasosComunicantesGraphsCoord.jsx";
import ViscosidadGraphsCoord from "./Coord/ViscosidadGraphsCoord.jsx";
import AerodinamicaBasicaGraphsSvg from "./Svg/AerodinamicaBasicaGraphsSvg.jsx";
import AplicacionesIngenierilesGraphsSvg from "./Svg/AplicacionesIngenierilesGraphsSvg.jsx";
import ArchimedesGraphsSvg from "./Svg/ArchimedesGraphsSvg.jsx";
import CompresibilidadGraphsSvg from "./Svg/CompresibilidadGraphsSvg.jsx";
import ConceptoDeFluidoGraphsSvg from "./Svg/ConceptoDeFluidoGraphsSvg.jsx";
import DensidadGraphsSvg from "./Svg/DensidadGraphsSvg.jsx";
import EcuacionDeBernoulliGraphsSvg from "./Svg/EcuacionDeBernoulliGraphsSvg.jsx";
import EcuacionDeContinuidadGraphsSvg from "./Svg/EcuacionDeContinuidadGraphsSvg.jsx";
import EfectoVenturiGraphsSvg from "./Svg/EfectoVenturiGraphsSvg.jsx";
import FlotacionGraphsSvg from "./Svg/FlotacionGraphsSvg.jsx";
import FlujoEnTuberiasGraphsSvg from "./Svg/FlujoEnTuberiasGraphsSvg.jsx";
import FlujoLaminarGraphsSvg from "./Svg/FlujoLaminarGraphsSvg.jsx";
import FlujoTurbulentoGraphsSvg from "./Svg/FlujoTurbulentoGraphsSvg.jsx";
import HidrodinamicaGraphsSvg from "./Svg/HidrodinamicaGraphsSvg.jsx";
import ManometrosGraphsSvg from "./Svg/ManometrosGraphsSvg.jsx";
import PerdidasDeCargaGraphsSvg from "./Svg/PerdidasDeCargaGraphsSvg.jsx";
import PresionGraphsSvg from "./Svg/PresionGraphsSvg.jsx";
import PresionHidrostaticaGraphsSvg from "./Svg/PresionHidrostaticaGraphsSvg.jsx";
import PrincipioDePascalGraphsSvg from "./Svg/PrincipioDePascalGraphsSvg.jsx";
import PrincipioFundamentalDeLaHidrostaticaGraphsSvg from "./Svg/PrincipioFundamentalDeLaHidrostaticaGraphsSvg.jsx";
import ReynoldsGraphsSvg from "./Svg/ReynoldsGraphsSvg.jsx";
import SustentacionGraphsSvg from "./Svg/SustentacionGraphsSvg.jsx";
import TensionSuperficialGraphsSvg from "./Svg/TensionSuperficialGraphsSvg.jsx";
import TuboDePitotGraphsSvg from "./Svg/TuboDePitotGraphsSvg.jsx";
import VasosComunicantesGraphsSvg from "./Svg/VasosComunicantesGraphsSvg.jsx";
import ViscosidadGraphsSvg from "./Svg/ViscosidadGraphsSvg.jsx";
import AerodinamicaBasicaGraphsDcl from "./Dcl/AerodinamicaBasicaGraphsDcl.jsx";
import ArchimedesGraphsDcl from "./Dcl/ArchimedesGraphsDcl.jsx";
import FlotacionGraphsDcl from "./Dcl/FlotacionGraphsDcl.jsx";
import ManometrosGraphsDcl from "./Dcl/ManometrosGraphsDcl.jsx";
import PresionHidrostaticaGraphsDcl from "./Dcl/PresionHidrostaticaGraphsDcl.jsx";
import PrincipioDePascalGraphsDcl from "./Dcl/PrincipioDePascalGraphsDcl.jsx";
import PrincipioFundamentalDeLaHidrostaticaGraphsDcl from "./Dcl/PrincipioFundamentalDeLaHidrostaticaGraphsDcl.jsx";
import SustentacionGraphsDcl from "./Dcl/SustentacionGraphsDcl.jsx";

const rawGraphs = {
  "aerodinamica-basica": {
    Coord: { type: "Coord", graphType: "Coord", component: AerodinamicaBasicaGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: AerodinamicaBasicaGraphsSvg },
    Dcl: { type: "Dcl", graphType: "Dcl", component: AerodinamicaBasicaGraphsDcl },
  },
  "aplicaciones-ingenieriles": {
    Coord: { type: "Coord", graphType: "Coord", component: AplicacionesIngenierilesGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: AplicacionesIngenierilesGraphsSvg },
  },
  "compresibilidad": {
    Coord: { type: "Coord", graphType: "Coord", component: CompresibilidadGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: CompresibilidadGraphsSvg },
  },
  "concepto-de-fluido": {
    Coord: { type: "Coord", graphType: "Coord", component: ConceptoDeFluidoGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: ConceptoDeFluidoGraphsSvg },
  },
  "densidad": {
    Coord: { type: "Coord", graphType: "Coord", component: DensidadGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: DensidadGraphsSvg },
  },
  "ecuacion-de-bernoulli": {
    Coord: { type: "Coord", graphType: "Coord", component: EcuacionDeBernoulliGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: EcuacionDeBernoulliGraphsSvg },
  },
  "ecuacion-de-continuidad": {
    Coord: { type: "Coord", graphType: "Coord", component: EcuacionDeContinuidadGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: EcuacionDeContinuidadGraphsSvg },
  },
  "ecuacion-de-navier-stokes-intro": {
    Coord: { type: "Coord", graphType: "Coord", component: NavierStokesIntroGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: NavierStokesIntroGraphsSvg },
  },
  "efecto-venturi": {
    Coord: { type: "Coord", graphType: "Coord", component: EfectoVenturiGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: EfectoVenturiGraphsSvg },
  },
  "flotacion": {
    Coord: { type: "Coord", graphType: "Coord", component: FlotacionGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: FlotacionGraphsSvg },
    Dcl: { type: "Dcl", graphType: "Dcl", component: FlotacionGraphsDcl },
  },
  "flujo-en-tuberias": {
    Coord: { type: "Coord", graphType: "Coord", component: FlujoEnTuberiasGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: FlujoEnTuberiasGraphsSvg },
  },
  "flujo-laminar": {
    Coord: { type: "Coord", graphType: "Coord", component: FlujoLaminarGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: FlujoLaminarGraphsSvg },
  },
  "flujo-turbulento": {
    Coord: { type: "Coord", graphType: "Coord", component: FlujoTurbulentoGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: FlujoTurbulentoGraphsSvg },
  },
  "hidrodinamica": {
    Coord: { type: "Coord", graphType: "Coord", component: HidrodinamicaGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: HidrodinamicaGraphsSvg },
  },
  "introduccion-al-sonido": {
    Coord: { type: "Coord", graphType: "Coord", component: OndasLongitudinalesFluidosGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: IntroduccionAlSonidoGraphsSvg },
  },
  "ondas-longitudinales": {
    Coord: { type: "Coord", graphType: "Coord", component: OndasLongitudinalesGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: OndasLongitudinalesGraphsSvg },
  },
  "ondas-superficiales": {
    Coord: { type: "Coord", graphType: "Coord", component: OndasSuperficialesGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: OndasSuperficialesGraphsSvg },
  },
  "manometros": {
    Coord: { type: "Coord", graphType: "Coord", component: ManometrosGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: ManometrosGraphsSvg },
    Dcl: { type: "Dcl", graphType: "Dcl", component: ManometrosGraphsDcl },
  },
  "numero-de-reynolds": {
    Coord: { type: "Coord", graphType: "Coord", component: ReynoldsGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: ReynoldsGraphsSvg },
  },
  "perdidas-de-carga": {
    Coord: { type: "Coord", graphType: "Coord", component: PerdidasDeCargaGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: PerdidasDeCargaGraphsSvg },
  },
  "presion": {
    Coord: { type: "Coord", graphType: "Coord", component: PresionGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: PresionGraphsSvg },
  },
  "presion-hidrostatica": {
    Coord: { type: "Coord", graphType: "Coord", component: PresionHidrostaticaGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: PresionHidrostaticaGraphsSvg },
    Dcl: { type: "Dcl", graphType: "Dcl", component: PresionHidrostaticaGraphsDcl },
  },
  "principio-de-arquimedes": {
    Coord: { type: "Coord", graphType: "Coord", component: ArchimedesGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: ArchimedesGraphsSvg },
    Dcl: { type: "Dcl", graphType: "Dcl", component: ArchimedesGraphsDcl },
  },
  "principio-de-pascal": {
    Coord: { type: "Coord", graphType: "Coord", component: PrincipioDePascalGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: PrincipioDePascalGraphsSvg },
    Dcl: { type: "Dcl", graphType: "Dcl", component: PrincipioDePascalGraphsDcl },
  },
  "principio-fundamental-de-la-hidrostatica": {
    Coord: { type: "Coord", graphType: "Coord", component: PrincipioFundamentalDeLaHidrostaticaGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: PrincipioFundamentalDeLaHidrostaticaGraphsSvg },
    Dcl: { type: "Dcl", graphType: "Dcl", component: PrincipioFundamentalDeLaHidrostaticaGraphsDcl },
  },
  "sustentacion": {
    Coord: { type: "Coord", graphType: "Coord", component: SustentacionGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: SustentacionGraphsSvg },
    Dcl: { type: "Dcl", graphType: "Dcl", component: SustentacionGraphsDcl },
  },
  "tension-superficial": {
    Coord: { type: "Coord", graphType: "Coord", component: TensionSuperficialGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: TensionSuperficialGraphsSvg },
  },
  "tubo-de-pitot": {
    Coord: { type: "Coord", graphType: "Coord", component: TuboDePitotGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: TuboDePitotGraphsSvg },
  },
  "vasos-comunicantes": {
    Coord: { type: "Coord", graphType: "Coord", component: VasosComunicantesGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: VasosComunicantesGraphsSvg },
  },
  "viscosidad": {
    Coord: { type: "Coord", graphType: "Coord", component: ViscosidadGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: ViscosidadGraphsSvg },
  },
};

export const graphs = withGraphContextRegistry(rawGraphs);
export const fluidosGraphs = graphs;

export default graphs;
