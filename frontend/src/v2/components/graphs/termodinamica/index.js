import { withGraphContextRegistry } from "../shared/withGraphContext.jsx";
/**
 * Termodinamica - Graph Components Index
 *
 * WIRING ONLY — los metadatos semánticos (title, xAxis, yAxis, relation,
 * physicalReading, agentHints, commonMistakes, etc.) viven en graficos.yaml.
 * Este archivo solo declara { type, graphType, component } por entrada.
 */

import AdiabaticoGraphsCoord from "./Coord/AdiabaticoGraphsCoord.jsx";
import BraytonRankineGraphsCoord from "./Coord/BraytonRankineGraphsCoord.jsx";
import CalorEspecificoGraphsCoord from "./Coord/CalorEspecificoGraphsCoord.jsx";
import CalorGraphsCoord from "./Coord/CalorGraphsCoord.jsx";
import CalorimetriaGraphsCoord from "./Coord/CalorimetriaGraphsCoord.jsx";
import CambiosDeEstadoGraphsCoord from "./Coord/CambiosDeEstadoGraphsCoord.jsx";
import CapacidadCalorificaGraphsCoord from "./Coord/CapacidadCalorificaGraphsCoord.jsx";
import CarnotGraphsCoord from "./Coord/CarnotGraphsCoord.jsx";
import CoeficienteDeRendimientoGraphsCoord from "./Coord/CoeficienteDeRendimientoGraphsCoord.jsx";
import ConduccionGraphsCoord from "./Coord/ConduccionGraphsCoord.jsx";
import ConveccionGraphsCoord from "./Coord/ConveccionGraphsCoord.jsx";
import DefinicionEntropiaGraphsCoord from "./Coord/DefinicionEntropiaGraphsCoord.jsx";
import DiagramasPVGraphsCoord from "./Coord/DiagramasPVGraphsCoord.jsx";
import DieselGraphsCoord from "./Coord/DieselGraphsCoord.jsx";
import DilatacionGraphsCoord from "./Coord/DilatacionGraphsCoord.jsx";
import EcuacionesDeEstadoGraphsCoord from "./Coord/EcuacionesDeEstadoGraphsCoord.jsx";
import EjemplosPracticosGraphsCoord from "./Coord/EjemplosPracticosGraphsCoord.jsx";
import EnergiaInternaGraphsCoord from "./Coord/EnergiaInternaGraphsCoord.jsx";
import EnergiaLibreDeGibbsGraphsCoord from "./Coord/EnergiaLibreDeGibbsGraphsCoord.jsx";
import EnergiaLibreDeHelmholtzGraphsCoord from "./Coord/EnergiaLibreDeHelmholtzGraphsCoord.jsx";
import EntalpiaGraphsCoord from "./Coord/EntalpiaGraphsCoord.jsx";
import ExtensivasGraphsCoord from "./Coord/ExtensivasGraphsCoord.jsx";
import FormulacionDeClauisiusGraphsCoord from "./Coord/FormulacionDeClauisiusGraphsCoord.jsx";
import FormulacionDeKelvinPlanckGraphsCoord from "./Coord/FormulacionDeKelvinPlanckGraphsCoord.jsx";
import GasIdealGraphsCoord from "./Coord/GasIdealGraphsCoord.jsx";
import IntensivasGraphsCoord from "./Coord/IntensivasGraphsCoord.jsx";
import InterpretacionGeometricaGraphsCoord from "./Coord/InterpretacionGeometricaGraphsCoord.jsx";
import IsobaricoGraphsCoord from "./Coord/IsobaricoGraphsCoord.jsx";
import IsocoricoGraphsCoord from "./Coord/IsocoricoGraphsCoord.jsx";
import IsothermicoGraphsCoord from "./Coord/IsothermicoGraphsCoord.jsx";
import OttoGraphsCoord from "./Coord/OttoGraphsCoord.jsx";
import PotencialQuimicoGraphsCoord from "./Coord/PotencialQuimicoGraphsCoord.jsx";
import PrincipioDeFuncionamientoGraphsCoord from "./Coord/PrincipioDeFuncionamientoGraphsCoord.jsx";
import ProcesosIrreversiblesGraphsCoord from "./Coord/ProcesosIrreversiblesGraphsCoord.jsx";
import ProcesosReversiblesGraphsCoord from "./Coord/ProcesosReversiblesGraphsCoord.jsx";
import RadiacionTermicaGraphsCoord from "./Coord/RadiacionTermicaGraphsCoord.jsx";
import RendimientoYEficienciaGraphsCoord from "./Coord/RendimientoYEficienciaGraphsCoord.jsx";
import SistemaAbiertoGraphsCoord from "./Coord/SistemaAbiertoGraphsCoord.jsx";
import SistemaAisladoGraphsCoord from "./Coord/SistemaAisladoGraphsCoord.jsx";
import SistemaCerradoGraphsCoord from "./Coord/SistemaCerradoGraphsCoord.jsx";
import TemperaturaGraphsCoord from "./Coord/TemperaturaGraphsCoord.jsx";
import TeoriaCineticaGraphsCoord from "./Coord/TeoriaCineticaGraphsCoord.jsx";
import TrabajoDeExpansionGraphsCoord from "./Coord/TrabajoDeExpansionGraphsCoord.jsx";
import VariacionDeEntropiaGraphsCoord from "./Coord/VariacionDeEntropiaGraphsCoord.jsx";
import DiagramasPVGraphsSvg from "./Svg/DiagramasPVGraphsSvg.jsx";
import EquilibrioTermodinamicoGraphsSvg from "./Svg/EquilibrioTermodinamicoGraphsSvg.jsx";
import EquilibrioTermodinamicoGraphsDcl from "./Dcl/EquilibrioTermodinamicoGraphsDcl.jsx";
import PrimeraLeyGraphsDcl from "./Dcl/PrimeraLeyGraphsDcl.jsx";

const rawGraphs = {
  "adiabatico": {
    Coord: { type: "Coord", graphType: "Coord", component: AdiabaticoGraphsCoord },
  },
  "brayton-rankine": {
    Coord: { type: "Coord", graphType: "Coord", component: BraytonRankineGraphsCoord },
  },
  "calor": {
    Coord: { type: "Coord", graphType: "Coord", component: CalorGraphsCoord },
  },
  "calor-especifico": {
    Coord: { type: "Coord", graphType: "Coord", component: CalorEspecificoGraphsCoord },
  },
  "calorimetria": {
    Coord: { type: "Coord", graphType: "Coord", component: CalorimetriaGraphsCoord },
  },
  "cambios-de-estado": {
    Coord: { type: "Coord", graphType: "Coord", component: CambiosDeEstadoGraphsCoord },
  },
  "capacidad-calorifica": {
    Coord: { type: "Coord", graphType: "Coord", component: CapacidadCalorificaGraphsCoord },
  },
  "carnot": {
    Coord: { type: "Coord", graphType: "Coord", component: CarnotGraphsCoord },
  },
  "coeficiente-de-rendimiento": {
    Coord: { type: "Coord", graphType: "Coord", component: CoeficienteDeRendimientoGraphsCoord },
  },
  "conduccion": {
    Coord: { type: "Coord", graphType: "Coord", component: ConduccionGraphsCoord },
  },
  "conveccion": {
    Coord: { type: "Coord", graphType: "Coord", component: ConveccionGraphsCoord },
  },
  "definicion": {
    Coord: { type: "Coord", graphType: "Coord", component: DefinicionEntropiaGraphsCoord },
  },
  "diagramas-pv": {
    Coord: { type: "Coord", graphType: "Coord", component: DiagramasPVGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: DiagramasPVGraphsSvg },
  },
  "diesel": {
    Coord: { type: "Coord", graphType: "Coord", component: DieselGraphsCoord },
  },
  "dilatacion": {
    Coord: { type: "Coord", graphType: "Coord", component: DilatacionGraphsCoord },
  },
  "ecuaciones-de-estado": {
    Coord: { type: "Coord", graphType: "Coord", component: EcuacionesDeEstadoGraphsCoord },
  },
  "ejemplos-practicos": {
    Coord: { type: "Coord", graphType: "Coord", component: EjemplosPracticosGraphsCoord },
  },
  "energia-interna": {
    Coord: { type: "Coord", graphType: "Coord", component: EnergiaInternaGraphsCoord },
  },
  "energia-libre-de-gibbs": {
    Coord: { type: "Coord", graphType: "Coord", component: EnergiaLibreDeGibbsGraphsCoord },
  },
  "energia-libre-de-helmholtz": {
    Coord: { type: "Coord", graphType: "Coord", component: EnergiaLibreDeHelmholtzGraphsCoord },
  },
  "entalpia": {
    Coord: { type: "Coord", graphType: "Coord", component: EntalpiaGraphsCoord },
  },
  "equilibrio-termodinamico": {
    Svg: { type: "Svg", graphType: "Svg", component: EquilibrioTermodinamicoGraphsSvg },
    Dcl: { type: "Dcl", graphType: "Dcl", component: EquilibrioTermodinamicoGraphsDcl },
  },
  "extensivas": {
    Coord: { type: "Coord", graphType: "Coord", component: ExtensivasGraphsCoord },
  },
  "formulacion-de-clausius": {
    Coord: { type: "Coord", graphType: "Coord", component: FormulacionDeClauisiusGraphsCoord },
  },
  "formulacion-de-kelvin-planck": {
    Coord: { type: "Coord", graphType: "Coord", component: FormulacionDeKelvinPlanckGraphsCoord },
  },
  "gas-ideal": {
    Coord: { type: "Coord", graphType: "Coord", component: GasIdealGraphsCoord },
  },
  "intensivas": {
    Coord: { type: "Coord", graphType: "Coord", component: IntensivasGraphsCoord },
  },
  "interpretacion-geometrica": {
    Coord: { type: "Coord", graphType: "Coord", component: InterpretacionGeometricaGraphsCoord },
  },
  "isobarico": {
    Coord: { type: "Coord", graphType: "Coord", component: IsobaricoGraphsCoord },
  },
  "isocorico": {
    Coord: { type: "Coord", graphType: "Coord", component: IsocoricoGraphsCoord },
  },
  "isotermico": {
    Coord: { type: "Coord", graphType: "Coord", component: IsothermicoGraphsCoord },
  },
  "otto": {
    Coord: { type: "Coord", graphType: "Coord", component: OttoGraphsCoord },
  },
  "potencial-quimico": {
    Coord: { type: "Coord", graphType: "Coord", component: PotencialQuimicoGraphsCoord },
  },
  "primera-ley-de-la-termodinamica": {
    Dcl: { type: "Dcl", graphType: "Dcl", component: PrimeraLeyGraphsDcl },
  },
  "principio-de-funcionamiento": {
    Coord: { type: "Coord", graphType: "Coord", component: PrincipioDeFuncionamientoGraphsCoord },
  },
  "procesos-irreversibles": {
    Coord: { type: "Coord", graphType: "Coord", component: ProcesosIrreversiblesGraphsCoord },
  },
  "procesos-reversibles": {
    Coord: { type: "Coord", graphType: "Coord", component: ProcesosReversiblesGraphsCoord },
  },
  "radiacion-termica": {
    Coord: { type: "Coord", graphType: "Coord", component: RadiacionTermicaGraphsCoord },
  },
  "rendimiento-y-eficiencia": {
    Coord: { type: "Coord", graphType: "Coord", component: RendimientoYEficienciaGraphsCoord },
  },
  "sistema-abierto": {
    Coord: { type: "Coord", graphType: "Coord", component: SistemaAbiertoGraphsCoord },
  },
  "sistema-aislado": {
    Coord: { type: "Coord", graphType: "Coord", component: SistemaAisladoGraphsCoord },
  },
  "sistema-cerrado": {
    Coord: { type: "Coord", graphType: "Coord", component: SistemaCerradoGraphsCoord },
  },
  "temperatura": {
    Coord: { type: "Coord", graphType: "Coord", component: TemperaturaGraphsCoord },
  },
  "teoria-cinetica": {
    Coord: { type: "Coord", graphType: "Coord", component: TeoriaCineticaGraphsCoord },
  },
  "trabajo-de-expansion": {
    Coord: { type: "Coord", graphType: "Coord", component: TrabajoDeExpansionGraphsCoord },
  },
  "variacion-de-entropia": {
    Coord: { type: "Coord", graphType: "Coord", component: VariacionDeEntropiaGraphsCoord },
  },
};

export const graphs = withGraphContextRegistry(rawGraphs);
export const termodinamicaGraphs = graphs;

export default graphs;
