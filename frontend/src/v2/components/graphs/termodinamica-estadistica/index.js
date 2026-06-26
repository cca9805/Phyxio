import { withGraphContextRegistry } from "../shared/withGraphContext.jsx";
/**
 * Termodinamica Estadistica - Graph Components Index
 *
 * WIRING ONLY — los metadatos semánticos (title, xAxis, yAxis, relation,
 * physicalReading, agentHints, commonMistakes, etc.) viven en graficos.yaml.
 * Este archivo solo declara { type, graphType, component } por entrada.
 */

import BosonesGraphsCoord from "./Coord/BosonesGraphsCoord.jsx";
import CondensadoDeBoseEinsteinGraphsCoord from "./Coord/CondensadoDeBoseEinsteinGraphsCoord.jsx";
import ConexionConMagnitudesTermodinamicasGraphsCoord from "./Coord/ConexionConMagnitudesTermodinamicasGraphsCoord.jsx";
import ConexionConTermodinamicaClasicaGraphsCoord from "./Coord/ConexionConTermodinamicaClasicaGraphsCoord.jsx";
import DefinicionBoltzmannGraphsCoord from "./Coord/DefinicionBoltzmannGraphsCoord.jsx";
import DefinicionYSignificadoGraphsCoord from "./Coord/DefinicionYSignificadoGraphsCoord.jsx";
import DistribucionDeVelocidadesGraphsCoord from "./Coord/DistribucionDeVelocidadesGraphsCoord.jsx";
import EnergiaMediaDeParticionGraphsCoord from "./Coord/EnergiaMediaDeParticionGraphsCoord.jsx";
import EnergiaMediaGraphsCoord from "./Coord/EnergiaMediaGraphsCoord.jsx";
import FenomenosCriticosGraphsCoord from "./Coord/FenomenosCriticosGraphsCoord.jsx";
import FermionesGraphsCoord from "./Coord/FermionesGraphsCoord.jsx";
import FluctuacionesGraphsCoord from "./Coord/FluctuacionesGraphsCoord.jsx";
import FuncionDeParticionCanonicaGraphsCoord from "./Coord/FuncionDeParticionCanonicaGraphsCoord.jsx";
import GasDeElectronesGraphsCoord from "./Coord/GasDeElectronesGraphsCoord.jsx";
import GasIdealMicroscopicoGraphsCoord from "./Coord/GasIdealMicroscopicoGraphsCoord.jsx";
import HipotesisFundamentalGraphsCoord from "./Coord/HipotesisFundamentalGraphsCoord.jsx";
import InterpretacionProbabilisticaGraphsCoord from "./Coord/InterpretacionProbabilisticaGraphsCoord.jsx";
import IrreversibilidadYFlechaDelTiempoGraphsCoord from "./Coord/IrreversibilidadYFlechaDelTiempoGraphsCoord.jsx";
import MetodoDeMontecarloGraphsCoord from "./Coord/MetodoDeMontecarloGraphsCoord.jsx";
import MicroestadosYMacroestadosGraphsCoord from "./Coord/MicroestadosYMacroestadosGraphsCoord.jsx";
import ModeloDeDebyeGraphsCoord from "./Coord/ModeloDeDebyeGraphsCoord.jsx";
import ModeloDeEinsteinGraphsCoord from "./Coord/ModeloDeEinsteinGraphsCoord.jsx";
import ModeloDeIsingGraphsCoord from "./Coord/ModeloDeIsingGraphsCoord.jsx";
import OsciladorArmonicoEstadisticoGraphsCoord from "./Coord/OsciladorArmonicoEstadisticoGraphsCoord.jsx";
import ParametrosDeOrdenGraphsCoord from "./Coord/ParametrosDeOrdenGraphsCoord.jsx";
import ProbabilidadYEnsemblesGraphsCoord from "./Coord/ProbabilidadYEnsemblesGraphsCoord.jsx";
import RelacionConEntropiaClasicaGraphsCoord from "./Coord/RelacionConEntropiaClasicaGraphsCoord.jsx";
import SimulacionesEstadisticasGraphsCoord from "./Coord/SimulacionesEstadisticasGraphsCoord.jsx";
import EquilibrioEstadisticoGraphsDcl from "./Dcl/EquilibrioEstadisticoGraphsDcl.jsx";
import DefinicionBoltzmannGraphsSvg from "./Svg/DefinicionBoltzmannGraphsSvg.jsx";
import EquilibrioEstadisticoGraphsSvg from "./Svg/EquilibrioEstadisticoGraphsSvg.jsx";
import InterpretacionProbabilisticaGraphsSvg from "./Svg/InterpretacionProbabilisticaGraphsSvg.jsx";
import IntroduccionAFisicaModernaGraphsSvg from "./Svg/IntroduccionAFisicaModernaGraphsSvg.jsx";

const rawGraphs = {
  "bosones": {
    Coord: { type: "Coord", graphType: "Coord", component: BosonesGraphsCoord },
  },
  "condensado-de-bose-einstein": {
    Coord: { type: "Coord", graphType: "Coord", component: CondensadoDeBoseEinsteinGraphsCoord },
  },
  "conexion-con-magnitudes-termodinamicas": {
    Coord: { type: "Coord", graphType: "Coord", component: ConexionConMagnitudesTermodinamicasGraphsCoord },
  },
  "conexion-con-termodinamica-clasica": {
    Coord: { type: "Coord", graphType: "Coord", component: ConexionConTermodinamicaClasicaGraphsCoord },
  },
  "definicion-boltzmann": {
    Coord: { type: "Coord", graphType: "Coord", component: DefinicionBoltzmannGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: DefinicionBoltzmannGraphsSvg },
  },
  "definicion-y-significado": {
    Coord: { type: "Coord", graphType: "Coord", component: DefinicionYSignificadoGraphsCoord },
  },
  "distribucion-de-velocidades": {
    Coord: { type: "Coord", graphType: "Coord", component: DistribucionDeVelocidadesGraphsCoord },
  },
  "energia-media": {
    Coord: { type: "Coord", graphType: "Coord", component: EnergiaMediaGraphsCoord },
  },
  "energia-media-de-particion": {
    Coord: { type: "Coord", graphType: "Coord", component: EnergiaMediaDeParticionGraphsCoord },
  },
  "equilibrio-estadistico": {
    Dcl: { type: "Dcl", graphType: "Dcl", component: EquilibrioEstadisticoGraphsDcl },
    Svg: { type: "Svg", graphType: "Svg", component: EquilibrioEstadisticoGraphsSvg },
  },
  "fenomenos-criticos": {
    Coord: { type: "Coord", graphType: "Coord", component: FenomenosCriticosGraphsCoord },
  },
  "fermiones": {
    Coord: { type: "Coord", graphType: "Coord", component: FermionesGraphsCoord },
  },
  "fluctuaciones": {
    Coord: { type: "Coord", graphType: "Coord", component: FluctuacionesGraphsCoord },
  },
  "funcion-de-particion-canonica": {
    Coord: { type: "Coord", graphType: "Coord", component: FuncionDeParticionCanonicaGraphsCoord },
  },
  "gas-de-electrones": {
    Coord: { type: "Coord", graphType: "Coord", component: GasDeElectronesGraphsCoord },
  },
  "gas-ideal-microscopico": {
    Coord: { type: "Coord", graphType: "Coord", component: GasIdealMicroscopicoGraphsCoord },
  },
  "hipotesis-fundamental": {
    Coord: { type: "Coord", graphType: "Coord", component: HipotesisFundamentalGraphsCoord },
  },
  "interpretacion-probabilistica": {
    Coord: { type: "Coord", graphType: "Coord", component: InterpretacionProbabilisticaGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: InterpretacionProbabilisticaGraphsSvg },
  },
  "introduccion-a-fisica-moderna": {
    Svg: { type: "Svg", graphType: "Svg", component: IntroduccionAFisicaModernaGraphsSvg },
  },
  "irreversibilidad-y-flecha-del-tiempo": {
    Coord: { type: "Coord", graphType: "Coord", component: IrreversibilidadYFlechaDelTiempoGraphsCoord },
  },
  "metodo-de-montecarlo": {
    Coord: { type: "Coord", graphType: "Coord", component: MetodoDeMontecarloGraphsCoord },
  },
  "microestados-y-macroestados": {
    Coord: { type: "Coord", graphType: "Coord", component: MicroestadosYMacroestadosGraphsCoord },
  },
  "modelo-de-debye": {
    Coord: { type: "Coord", graphType: "Coord", component: ModeloDeDebyeGraphsCoord },
  },
  "modelo-de-einstein": {
    Coord: { type: "Coord", graphType: "Coord", component: ModeloDeEinsteinGraphsCoord },
  },
  "modelo-de-ising": {
    Coord: { type: "Coord", graphType: "Coord", component: ModeloDeIsingGraphsCoord },
  },
  "oscilador-armonico-estadistico": {
    Coord: { type: "Coord", graphType: "Coord", component: OsciladorArmonicoEstadisticoGraphsCoord },
  },
  "parametros-de-orden": {
    Coord: { type: "Coord", graphType: "Coord", component: ParametrosDeOrdenGraphsCoord },
  },
  "probabilidad-y-ensembles": {
    Coord: { type: "Coord", graphType: "Coord", component: ProbabilidadYEnsemblesGraphsCoord },
  },
  "relacion-con-entropia-clasica": {
    Coord: { type: "Coord", graphType: "Coord", component: RelacionConEntropiaClasicaGraphsCoord },
  },
  "simulaciones-estadisticas": {
    Coord: { type: "Coord", graphType: "Coord", component: SimulacionesEstadisticasGraphsCoord },
  },
};

export const graphs = withGraphContextRegistry(rawGraphs);
export const termodinamica_estadisticaGraphs = graphs;

export default graphs;
