import { withGraphContextRegistry } from "../shared/withGraphContext.jsx";
/**
 * Fisica clasica > Mecanica > Cantidad de movimiento
 * Registry alineado con phyxio-map.yaml.
 *
 * WIRING ONLY — los metadatos semánticos (title, xAxis, yAxis, relation,
 * physicalReading, agentHints, commonMistakes, etc.) viven en graficos.yaml.
 * Este archivo solo declara { type, graphType, component } por entrada.
 */

import CantidadDeMovimientoLeafGraphsCoord from "./Coord/CantidadDeMovimientoLeafGraphsCoord.jsx";
import CantidadDeMovimientoLeafGraphsSvg from "./Svg/CantidadDeMovimientoLeafGraphsSvg.jsx";
import CentroDeMasasEnCuerposExtendidosGraphsCoord from "./Coord/CentroDeMasasEnCuerposExtendidosGraphsCoord.jsx";
import CentroDeMasasEnCuerposExtendidosGraphsSvg from "./Svg/CentroDeMasasEnCuerposExtendidosGraphsSvg.jsx";
import CentroDeMasasSistemasDiscretosGraphsCoord from "./Coord/CentroDeMasasSistemasDiscretosGraphsCoord.jsx";
import CentroDeMasasSistemasDiscretosGraphsSvg from "./Svg/CentroDeMasasSistemasDiscretosGraphsSvg.jsx";
import CoeficienteDeRestitucionGraphsCoord from "./Coord/CoeficienteDeRestitucionGraphsCoord.jsx";
import ColisionConParedGraphsCoord from "./Coord/ColisionConParedGraphsCoord.jsx";
import ColisionConParedGraphsSvg from "./Svg/ColisionConParedGraphsSvg.jsx";
import Colisiones2dGraphsCoord from "./Coord/Colisiones2dGraphsCoord.jsx";
import Colisiones2dGraphsSvg from "./Svg/Colisiones2dGraphsSvg.jsx";
import DefinicionCentroDeMasasGraphsCoord from "./Coord/DefinicionCentroDeMasasGraphsCoord.jsx";
import DefinicionCentroDeMasasGraphsSvg from "./Svg/DefinicionCentroDeMasasGraphsSvg.jsx";
import DispersionAngularEnColisiones2dGraphsCoord from "./Coord/DispersionAngularEnColisiones2dGraphsCoord.jsx";
import DispersionAngularEnColisiones2dGraphsSvg from "./Svg/DispersionAngularEnColisiones2dGraphsSvg.jsx";
import ColisionesElasticasGraphsCoord from "./Coord/ColisionesElasticasGraphsCoord.jsx";
import ColisionesElasticasGraphsSvg from "./Svg/ColisionesElasticasGraphsSvg.jsx";
import ColisionesInelasticasGraphsCoord from "./Coord/ColisionesInelasticasGraphsCoord.jsx";
import ColisionesInelasticasGraphsSvg from "./Svg/ColisionesInelasticasGraphsSvg.jsx";
import ColisionesTotalmenteInelasticasGraphsCoord from "./Coord/ColisionesTotalmenteInelasticasGraphsCoord.jsx";
import ColisionesTotalmenteInelasticasGraphsSvg from "./Svg/ColisionesTotalmenteInelasticasGraphsSvg.jsx";
import MarcoDelCentroDeMasasGraphsCoord from "./Coord/MarcoDelCentroDeMasasGraphsCoord.jsx";
import MarcoDelCentroDeMasasGraphsSvg from "./Svg/MarcoDelCentroDeMasasGraphsSvg.jsx";
import MarcoDelCentroDeMasasEnColisionesGraphsCoord from "./Coord/MarcoDelCentroDeMasasEnColisionesGraphsCoord.jsx";
import MarcoDelCentroDeMasasEnColisionesGraphsSvg from "./Svg/MarcoDelCentroDeMasasEnColisionesGraphsSvg.jsx";
import MovimientoDelCentroDeMasasGraphsCoord from "./Coord/MovimientoDelCentroDeMasasGraphsCoord.jsx";
import MovimientoDelCentroDeMasasGraphsSvg from "./Svg/MovimientoDelCentroDeMasasGraphsSvg.jsx";
import ImpulsoGraphsCoord from "./Coord/ImpulsoGraphsCoord.jsx";
import MomentoLinealGraphsCoord from "./Coord/MomentoLinealGraphsCoord.jsx";
import MomentoLinealGraphsSvg from "./Svg/MomentoLinealGraphsSvg.jsx";
import TeoremaImpulsoMomentoGraphsSvg from "./Svg/TeoremaImpulsoMomentoGraphsSvg.jsx";
import PrincipioDeConservacionMomentoGraphsCoord from "./Coord/PrincipioDeConservacionMomentoGraphsCoord.jsx";
import SistemasAisladosGraphsCoord from "./Coord/SistemasAisladosGraphsCoord.jsx";
import SistemasAisladosGraphsSvg from "./Svg/SistemasAisladosGraphsSvg.jsx";
import EnunciadoYCondicionesGraphsSvg from "./Svg/EnunciadoYCondicionesGraphsSvg.jsx";
import SistemasAisladosYFuerzasExternasGraphsSvg from "./Svg/SistemasAisladosYFuerzasExternasGraphsSvg.jsx";
import SistemasAisladosYFuerzasExternasGraphsDcl from "./Dcl/SistemasAisladosYFuerzasExternasGraphsDcl.jsx";
import AplicacionesPrincipioConservacionGraphsCoord from "./Coord/AplicacionesPrincipioConservacionGraphsCoord.jsx";
import BalanceDeMomentoConFlujoDeMasaGraphsSvg from "./Svg/BalanceDeMomentoConFlujoDeMasaGraphsSvg.jsx";
import ImpulsoExternoYRupturaGraphsCoord from "./Coord/ImpulsoExternoYRupturaGraphsCoord.jsx";
import ImpulsoExternoYRupturaGraphsSvg from "./Svg/ImpulsoExternoYRupturaGraphsSvg.jsx";
import EcuacionDelCoheteGraphsCoord from "./Coord/EcuacionDelCoheteGraphsCoord.jsx";
import EcuacionDelCoheteGraphsSvg from "./Svg/EcuacionDelCoheteGraphsSvg.jsx";

const rawGraphs = {
  "momento-lineal": {
    Coord: { type: "Coord", graphType: "Coord", component: MomentoLinealGraphsCoord },
    Svg:  { component: MomentoLinealGraphsSvg },
  },
  "impulso": {
    Coord: { type: "Coord", graphType: "Coord", component: ImpulsoGraphsCoord },
    Svg:  { component: TeoremaImpulsoMomentoGraphsSvg },
  },
  "sistemas-aislados": {
    Svg:  { component: SistemasAisladosGraphsSvg },
    Coord: { type: "Coord", graphType: "Coord", component: SistemasAisladosGraphsCoord },
  },
  "enunciado-y-condiciones-de-aplicacion": {
    Svg:  { component: EnunciadoYCondicionesGraphsSvg },
  },
  "sistemas-aislados-y-fuerzas-externas": {
    Svg:  { component: SistemasAisladosYFuerzasExternasGraphsSvg },
    Dcl:  { component: SistemasAisladosYFuerzasExternasGraphsDcl },
  },
  "impulso-externo-y-ruptura-de-la-conservacion": {
    Coord: { type: "Coord", graphType: "Coord", component: ImpulsoExternoYRupturaGraphsCoord },
    Svg:  { component: ImpulsoExternoYRupturaGraphsSvg },
  },
  "aplicaciones-del-principio-de-conservacion": {
    Coord: { type: "Coord", graphType: "Coord", component: AplicacionesPrincipioConservacionGraphsCoord },
  },
  "definicion-centro-de-masas": {
    Coord: { type: "Coord", graphType: "Coord", component: DefinicionCentroDeMasasGraphsCoord },
    Svg:  { component: DefinicionCentroDeMasasGraphsSvg },
  },
  "centro-de-masas-sistemas-discretos": {
    Coord: { type: "Coord", graphType: "Coord", component: CentroDeMasasSistemasDiscretosGraphsCoord },
    Svg:  { component: CentroDeMasasSistemasDiscretosGraphsSvg },
  },
  "centro-de-masas-en-cuerpos-extendidos": {
    Coord: { type: "Coord", graphType: "Coord", component: CentroDeMasasEnCuerposExtendidosGraphsCoord },
    Svg:  { component: CentroDeMasasEnCuerposExtendidosGraphsSvg },
  },
  "movimiento-del-centro-de-masas": {
    Coord: { type: "Coord", graphType: "Coord", component: MovimientoDelCentroDeMasasGraphsCoord },
    Svg:  { component: MovimientoDelCentroDeMasasGraphsSvg },
  },
  "marco-del-centro-de-masas": {
    Coord: { type: "Coord", graphType: "Coord", component: MarcoDelCentroDeMasasGraphsCoord },
    Svg:  { component: MarcoDelCentroDeMasasGraphsSvg },
  },
  "colisiones-elasticas": {
    Coord: { type: "Coord", graphType: "Coord", component: ColisionesElasticasGraphsCoord },
    Svg:  { component: ColisionesElasticasGraphsSvg },
  },
  "colisiones-inelasticas": {
    Coord: { type: "Coord", graphType: "Coord", component: ColisionesInelasticasGraphsCoord },
    Svg:  { component: ColisionesInelasticasGraphsSvg },
  },
  "colisiones-totalmente-inelasticas": {
    Coord: { type: "Coord", graphType: "Coord", component: ColisionesTotalmenteInelasticasGraphsCoord },
    Svg:  { component: ColisionesTotalmenteInelasticasGraphsSvg },
  },
  "colision-con-pared": {
    Coord: { type: "Coord", graphType: "Coord", component: ColisionConParedGraphsCoord },
    Svg:  { component: ColisionConParedGraphsSvg },
  },
  "colisiones-2d": {
    Coord: { type: "Coord", graphType: "Coord", component: Colisiones2dGraphsCoord },
    Svg:  { component: Colisiones2dGraphsSvg },
  },
  "coeficiente-de-restitucion": {
    Coord: { type: "Coord", graphType: "Coord", component: CoeficienteDeRestitucionGraphsCoord },
  },
  "marco-del-centro-de-masas-en-colisiones": {
    Coord: { type: "Coord", graphType: "Coord", component: MarcoDelCentroDeMasasEnColisionesGraphsCoord },
    Svg:  { component: MarcoDelCentroDeMasasEnColisionesGraphsSvg },
  },
  "dispersion-angular-en-colisiones-2d": {
    Coord: { type: "Coord", graphType: "Coord", component: DispersionAngularEnColisiones2dGraphsCoord },
    Svg:  { component: DispersionAngularEnColisiones2dGraphsSvg },
  },
  "balance-de-momento-con-flujo-de-masa": {
    Coord: { type: "Coord", graphType: "Coord", component: CantidadDeMovimientoLeafGraphsCoord },
    Svg:  { component: BalanceDeMomentoConFlujoDeMasaGraphsSvg },
  },
  "ecuacion-del-cohete": {
    Coord: { type: "Coord", graphType: "Coord", component: EcuacionDelCoheteGraphsCoord },
    Svg:  { component: EcuacionDelCoheteGraphsSvg },
  },
  "principio-de-conservacion-momento": {
    Coord: { type: "Coord", graphType: "Coord", component: PrincipioDeConservacionMomentoGraphsCoord },
  },
  "cantidad-de-movimiento-leaf": {
    Svg: { component: CantidadDeMovimientoLeafGraphsSvg },
  },
};

export const graphs = withGraphContextRegistry(rawGraphs);
export const cantidadDeMovimientoGraphs = graphs;

export default graphs;
