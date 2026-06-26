import { withGraphContextRegistry } from "../shared/withGraphContext.jsx";
/**
 * Electromagnetismo - Graph Components Index
 *
 * WIRING ONLY — los metadatos semánticos (title, xAxis, yAxis, relation,
 * physicalReading, agentHints, commonMistakes, etc.) viven en graficos.yaml.
 * Este archivo solo declara { type, graphType, component } por entrada.
 */

import AutoinduccionGraphsCoordContract from "./Coord/AutoinduccionGraphsCoordContract.jsx";
import CampoDeDistribucionesGraphsCoordContract from "./Coord/CampoDeDistribucionesGraphsCoordContract.jsx";
import CampoElectricoGraphsCoordContract from "./Coord/CampoElectricoGraphsCoordContract.jsx";
import CampoMagneticoGraphsCoordContract from "./Coord/CampoMagneticoGraphsCoordContract.jsx";
import CargaElectricaGraphsCoordContract from "./Coord/CargaElectricaGraphsCoordContract.jsx";
import CircuitosRcGraphsCoordContract from "./Coord/CircuitosRcGraphsCoordContract.jsx";
import CoherenciaGraphsCoordContract from "./Coord/CoherenciaGraphsCoordContract.jsx";
import CondensadoresGraphsCoordContract from "./Coord/CondensadoresGraphsCoordContract.jsx";
import CosteDeLaElectricidadGraphsCoordContract from "./Coord/CosteDeLaElectricidadGraphsCoordContract.jsx";
import DielectricosGraphsCoordContract from "./Coord/DielectricosGraphsCoordContract.jsx";
import DiferenciadePotencialGraphsCoordContract from "./Coord/DiferenciadePotencialGraphsCoordContract.jsx";
import DifraccionDeLaLuzGraphsCoordContract from "./Coord/DifraccionDeLaLuzGraphsCoordContract.jsx";
import EcuacionDeOndaElectromagneticaGraphsCoordContract from "./Coord/EcuacionDeOndaElectromagneticaGraphsCoordContract.jsx";
import EnergiaPotencialElectricaGraphsCoordContract from "./Coord/EnergiaPotencialElectricaGraphsCoordContract.jsx";
import EnergiaYMomentoDeLaOndaEmGraphsCoordContract from "./Coord/EnergiaYMomentoDeLaOndaEmGraphsCoordContract.jsx";
import EspectroElectromagneticoGraphsCoordContract from "./Coord/EspectroElectromagneticoGraphsCoordContract.jsx";
import FlujoMagneticoGraphsCoordContract from "./Coord/FlujoMagneticoGraphsCoordContract.jsx";
import FormulacionDiferencialGraphsCoordContract from "./Coord/FormulacionDiferencialGraphsCoordContract.jsx";
import FormulacionIntegralGraphsCoordContract from "./Coord/FormulacionIntegralGraphsCoordContract.jsx";
import FuerzaDeLorentzGraphsCoordContract from "./Coord/FuerzaDeLorentzGraphsCoordContract.jsx";
import FuerzaElectricaGraphsCoordContract from "./Coord/FuerzaElectricaGraphsCoordContract.jsx";
import GeneradoresGraphsCoordContract from "./Coord/GeneradoresGraphsCoordContract.jsx";
import InductanciaMutuaGraphsCoordContract from "./Coord/InductanciaMutuaGraphsCoordContract.jsx";
import InstrumentosOpticosGraphsCoordContract from "./Coord/InstrumentosOpticosGraphsCoordContract.jsx";
import IntensidadDeCorrienteGraphsCoordContract from "./Coord/IntensidadDeCorrienteGraphsCoordContract.jsx";
import InterferenciaDeLaLuzGraphsCoordContract from "./Coord/InterferenciaDeLaLuzGraphsCoordContract.jsx";
import InterpretacionFisicaGraphsCoordContract from "./Coord/InterpretacionFisicaGraphsCoordContract.jsx";
import LeyDeAmpereGraphsCoordContract from "./Coord/LeyDeAmpereGraphsCoordContract.jsx";
import LeyDeBiotSavartGraphsCoordContract from "./Coord/LeyDeBiotSavartGraphsCoordContract.jsx";
import LeyDeCoulombGraphsCoordContract from "./Coord/LeyDeCoulombGraphsCoordContract.jsx";
import LeyDeFaradayGraphsCoordContract from "./Coord/LeyDeFaradayGraphsCoordContract.jsx";
import LeyDeGaussGraphsCoordContract from "./Coord/LeyDeGaussGraphsCoordContract.jsx";
import LeyDeLenzGraphsCoordContract from "./Coord/LeyDeLenzGraphsCoordContract.jsx";
import LeyDeSnellGraphsCoordContract from "./Coord/LeyDeSnellGraphsCoordContract.jsx";
import LineasDeCampoGraphsCoordContract from "./Coord/LineasDeCampoGraphsCoordContract.jsx";
import MaterialesMagneticosGraphsCoordContract from "./Coord/MaterialesMagneticosGraphsCoordContract.jsx";
import MotoresGraphsCoordContract from "./Coord/MotoresGraphsCoordContract.jsx";
import PolarizacionGraphsCoordContract from "./Coord/PolarizacionGraphsCoordContract.jsx";
import PotenciaElectricaGraphsCoordContract from "./Coord/PotenciaElectricaGraphsCoordContract.jsx";
import PrincipioDeSuperposicionGraphsCoordContract from "./Coord/PrincipioDeSuperposicionGraphsCoordContract.jsx";
import PropagacionEnMediosGraphsCoordContract from "./Coord/PropagacionEnMediosGraphsCoordContract.jsx";
import ResistenciaYLeyDeOhmGraphsCoordContract from "./Coord/ResistenciaYLeyDeOhmGraphsCoordContract.jsx";
import ResistenciasEnParaleloGraphsCoordContract from "./Coord/ResistenciasEnParaleloGraphsCoordContract.jsx";
import ResistenciasEnSerieGraphsCoordContract from "./Coord/ResistenciasEnSerieGraphsCoordContract.jsx";
import SobreCargasEnMovimientoGraphsCoordContract from "./Coord/SobreCargasEnMovimientoGraphsCoordContract.jsx";
import SobreConductoresGraphsCoordContract from "./Coord/SobreConductoresGraphsCoordContract.jsx";
import TransformadoresGraphsCoordContract from "./Coord/TransformadoresGraphsCoordContract.jsx";
import EcuacionDeOndaElectromagneticaGraphsSvgContract from "./Svg/EcuacionDeOndaElectromagneticaGraphsSvgContract.jsx";
import EnergiaYMomentoDeLaOndaEmGraphsSvgContract from "./Svg/EnergiaYMomentoDeLaOndaEmGraphsSvgContract.jsx";
import EspejosGraphsSvgContract from "./Svg/EspejosGraphsSvgContract.jsx";
import IndiceDeRefraccionGraphsSvgContract from "./Svg/IndiceDeRefraccionGraphsSvgContract.jsx";
import InterpretacionFisicaGraphsSvgContract from "./Svg/InterpretacionFisicaGraphsSvgContract.jsx";
import LentesGraphsSvgContract from "./Svg/LentesGraphsSvgContract.jsx";
import PropagacionEnMediosGraphsSvgContract from "./Svg/PropagacionEnMediosGraphsSvgContract.jsx";
import ReflexionGraphsSvgContract from "./Svg/ReflexionGraphsSvgContract.jsx";
import SobreCargasEnMovimientoGraphsSvgContract from "./Svg/SobreCargasEnMovimientoGraphsSvgContract.jsx";

const rawGraphs = {
  "autoinduccion": {
    Coord: { type: "Coord", graphType: "Coord", component: AutoinduccionGraphsCoordContract },
  },
  "campo-de-distribuciones": {
    Coord: { type: "Coord", graphType: "Coord", component: CampoDeDistribucionesGraphsCoordContract },
  },
  "campo-electrico": {
    Coord: { type: "Coord", graphType: "Coord", component: CampoElectricoGraphsCoordContract },
  },
  "campo-magnetico": {
    Coord: { type: "Coord", graphType: "Coord", component: CampoMagneticoGraphsCoordContract },
  },
  "carga-electrica": {
    Coord: { type: "Coord", graphType: "Coord", component: CargaElectricaGraphsCoordContract },
  },
  "circuitos-rc": {
    Coord: { type: "Coord", graphType: "Coord", component: CircuitosRcGraphsCoordContract },
  },
  "coherencia": {
    Coord: { type: "Coord", graphType: "Coord", component: CoherenciaGraphsCoordContract },
  },
  "condensadores": {
    Coord: { type: "Coord", graphType: "Coord", component: CondensadoresGraphsCoordContract },
  },
  "coste-de-la-electricidad": {
    Coord: { type: "Coord", graphType: "Coord", component: CosteDeLaElectricidadGraphsCoordContract },
  },
  "dielectricos": {
    Coord: { type: "Coord", graphType: "Coord", component: DielectricosGraphsCoordContract },
  },
  "diferencia-de-potencial": {
    Coord: { type: "Coord", graphType: "Coord", component: DiferenciadePotencialGraphsCoordContract },
  },
  "difraccion-de-la-luz": {
    Coord: { type: "Coord", graphType: "Coord", component: DifraccionDeLaLuzGraphsCoordContract },
  },
  "ecuacion-de-onda-electromagnetica": {
    Coord: { type: "Coord", graphType: "Coord", component: EcuacionDeOndaElectromagneticaGraphsCoordContract },
    Svg: { type: "Svg", graphType: "Svg", component: EcuacionDeOndaElectromagneticaGraphsSvgContract },
  },
  "energia-potencial-electrica": {
    Coord: { type: "Coord", graphType: "Coord", component: EnergiaPotencialElectricaGraphsCoordContract },
  },
  "energia-y-momento-de-la-onda-em": {
    Coord: { type: "Coord", graphType: "Coord", component: EnergiaYMomentoDeLaOndaEmGraphsCoordContract },
    Svg: { type: "Svg", graphType: "Svg", component: EnergiaYMomentoDeLaOndaEmGraphsSvgContract },
  },
  "espectro-electromagnetico": {
    Coord: { type: "Coord", graphType: "Coord", component: EspectroElectromagneticoGraphsCoordContract },
  },
  "espejos": {
    Svg: { type: "Svg", graphType: "Svg", component: EspejosGraphsSvgContract },
  },
  "flujo-magnetico": {
    Coord: { type: "Coord", graphType: "Coord", component: FlujoMagneticoGraphsCoordContract },
  },
  "formulacion-diferencial": {
    Coord: { type: "Coord", graphType: "Coord", component: FormulacionDiferencialGraphsCoordContract },
  },
  "formulacion-integral": {
    Coord: { type: "Coord", graphType: "Coord", component: FormulacionIntegralGraphsCoordContract },
  },
  "fuerza-de-lorentz": {
    Coord: { type: "Coord", graphType: "Coord", component: FuerzaDeLorentzGraphsCoordContract },
  },
  "fuerza-electrica": {
    Coord: { type: "Coord", graphType: "Coord", component: FuerzaElectricaGraphsCoordContract },
  },
  "generadores": {
    Coord: { type: "Coord", graphType: "Coord", component: GeneradoresGraphsCoordContract },
  },
  "indice-de-refraccion": {
    Svg: { type: "Svg", graphType: "Svg", component: IndiceDeRefraccionGraphsSvgContract },
  },
  "inductancia-mutua": {
    Coord: { type: "Coord", graphType: "Coord", component: InductanciaMutuaGraphsCoordContract },
  },
  "instrumentos-opticos": {
    Coord: { type: "Coord", graphType: "Coord", component: InstrumentosOpticosGraphsCoordContract },
  },
  "intensidad-de-corriente": {
    Coord: { type: "Coord", graphType: "Coord", component: IntensidadDeCorrienteGraphsCoordContract },
  },
  "interferencia-de-la-luz": {
    Coord: { type: "Coord", graphType: "Coord", component: InterferenciaDeLaLuzGraphsCoordContract },
  },
  "interpretacion-fisica": {
    Coord: { type: "Coord", graphType: "Coord", component: InterpretacionFisicaGraphsCoordContract },
    Svg: { type: "Svg", graphType: "Svg", component: InterpretacionFisicaGraphsSvgContract },
  },
  "lentes": {
    Svg: { type: "Svg", graphType: "Svg", component: LentesGraphsSvgContract },
  },
  "ley-de-ampere": {
    Coord: { type: "Coord", graphType: "Coord", component: LeyDeAmpereGraphsCoordContract },
  },
  "ley-de-biot-savart": {
    Coord: { type: "Coord", graphType: "Coord", component: LeyDeBiotSavartGraphsCoordContract },
  },
  "ley-de-coulomb": {
    Coord: { type: "Coord", graphType: "Coord", component: LeyDeCoulombGraphsCoordContract },
  },
  "ley-de-faraday": {
    Coord: { type: "Coord", graphType: "Coord", component: LeyDeFaradayGraphsCoordContract },
  },
  "ley-de-gauss": {
    Coord: { type: "Coord", graphType: "Coord", component: LeyDeGaussGraphsCoordContract },
  },
  "ley-de-lenz": {
    Coord: { type: "Coord", graphType: "Coord", component: LeyDeLenzGraphsCoordContract },
  },
  "ley-de-snell": {
    Coord: { type: "Coord", graphType: "Coord", component: LeyDeSnellGraphsCoordContract },
  },
  "lineas-de-campo": {
    Coord: { type: "Coord", graphType: "Coord", component: LineasDeCampoGraphsCoordContract },
  },
  "materiales-magneticos": {
    Coord: { type: "Coord", graphType: "Coord", component: MaterialesMagneticosGraphsCoordContract },
  },
  "motores": {
    Coord: { type: "Coord", graphType: "Coord", component: MotoresGraphsCoordContract },
  },
  "polarizacion": {
    Coord: { type: "Coord", graphType: "Coord", component: PolarizacionGraphsCoordContract },
  },
  "potencia-electrica": {
    Coord: { type: "Coord", graphType: "Coord", component: PotenciaElectricaGraphsCoordContract },
  },
  "principio-de-superposicion": {
    Coord: { type: "Coord", graphType: "Coord", component: PrincipioDeSuperposicionGraphsCoordContract },
  },
  "propagacion-en-medios": {
    Coord: { type: "Coord", graphType: "Coord", component: PropagacionEnMediosGraphsCoordContract },
    Svg: { type: "Svg", graphType: "Svg", component: PropagacionEnMediosGraphsSvgContract },
  },
  "reflexion": {
    Svg: { type: "Svg", graphType: "Svg", component: ReflexionGraphsSvgContract },
  },
  "resistencia-y-ley-de-ohm": {
    Coord: { type: "Coord", graphType: "Coord", component: ResistenciaYLeyDeOhmGraphsCoordContract },
  },
  "resistencias-en-paralelo": {
    Coord: { type: "Coord", graphType: "Coord", component: ResistenciasEnParaleloGraphsCoordContract },
  },
  "resistencias-en-serie": {
    Coord: { type: "Coord", graphType: "Coord", component: ResistenciasEnSerieGraphsCoordContract },
  },
  "sobre-cargas-en-movimiento": {
    Coord: { type: "Coord", graphType: "Coord", component: SobreCargasEnMovimientoGraphsCoordContract },
    Svg: { type: "Svg", graphType: "Svg", component: SobreCargasEnMovimientoGraphsSvgContract },
  },
  "sobre-conductores": {
    Coord: { type: "Coord", graphType: "Coord", component: SobreConductoresGraphsCoordContract },
  },
  "transformadores": {
    Coord: { type: "Coord", graphType: "Coord", component: TransformadoresGraphsCoordContract },
  },
};

export const graphs = withGraphContextRegistry(rawGraphs);
export const electromagnetismoGraphs = graphs;

export default graphs;
