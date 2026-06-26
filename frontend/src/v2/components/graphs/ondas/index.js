import { withGraphContextRegistry } from "../shared/withGraphContext.jsx";
/**
 * Ondas - Graph Components Index
 *
 * WIRING ONLY — los metadatos semánticos (title, xAxis, yAxis, relation,
 * physicalReading, agentHints, commonMistakes, etc.) viven en graficos.yaml.
 * Este archivo solo declara { type, graphType, component } por entrada.
 */

import AplicacionesSonidoGraphsCoord from "./Coord/AplicacionesSonidoGraphsCoord.jsx";
import AplicacionesUltrasonidosYEnsayosGraphsCoord from "./Coord/AplicacionesUltrasonidosYEnsayosGraphsCoord.jsx";
import CambioDeVelocidadGraphsCoord from "./Coord/CambioDeVelocidadGraphsCoord.jsx";
import ConceptoDeOndaGraphsCoord from "./Coord/ConceptoDeOndaGraphsCoord.jsx";
import CondicionDeEstacionariedadGraphsCoord from "./Coord/CondicionDeEstacionariedadGraphsCoord.jsx";
import CuerdasArmonicosGraphsCoord from "./Coord/CuerdasArmonicosGraphsCoord.jsx";
import CuerdasGraphsCoord from "./Coord/CuerdasGraphsCoord.jsx";
import CuerdasOndasEstacionariasGraphsCoord from "./Coord/CuerdasOndasEstacionariasGraphsCoord.jsx";
import CuerdasVelocidadEnCuerdaTensaGraphsCoord from "./Coord/CuerdasVelocidadEnCuerdaTensaGraphsCoord.jsx";
import DifraccionGraphsCoord from "./Coord/DifraccionGraphsCoord.jsx";
import DispersionYAtenuacionEnSolidosGraphsCoord from "./Coord/DispersionYAtenuacionEnSolidosGraphsCoord.jsx";
import EcuacionDeOndaGraphsCoord from "./Coord/EcuacionDeOndaGraphsCoord.jsx";
import EfectoDopplerGraphsCoord from "./Coord/EfectoDopplerGraphsCoord.jsx";
import ElectromagneticasGraphsCoord from "./Coord/ElectromagneticasGraphsCoord.jsx";
import EnergiaDeUnaOndaGraphsCoord from "./Coord/EnergiaDeUnaOndaGraphsCoord.jsx";
import FaseGraphsCoord from "./Coord/FaseGraphsCoord.jsx";
import FlujoDeEnergiaGraphsCoord from "./Coord/FlujoDeEnergiaGraphsCoord.jsx";
import FrecuenciaYPeriodoGraphsCoord from "./Coord/FrecuenciaYPeriodoGraphsCoord.jsx";
import ImpedanciaMecanicaEnSolidosGraphsCoord from "./Coord/ImpedanciaMecanicaEnSolidosGraphsCoord.jsx";
import IntensidadOndulatoriaGraphsCoord from "./Coord/IntensidadOndulatoriaGraphsCoord.jsx";
import IntensidadYNivelSonoroGraphsCoord from "./Coord/IntensidadYNivelSonoroGraphsCoord.jsx";
import InterferenciaConstructivaGraphsCoord from "./Coord/InterferenciaConstructivaGraphsCoord.jsx";
import InterferenciaDestructivaGraphsCoord from "./Coord/InterferenciaDestructivaGraphsCoord.jsx";
import IntroduccionGraphsCoord from "./Coord/IntroduccionGraphsCoord.jsx";
import LeyDeSnellGraphsCoord from "./Coord/LeyDeSnellGraphsCoord.jsx";
import LongitudDeOndaGraphsCoord from "./Coord/LongitudDeOndaGraphsCoord.jsx";
import MecanicasGraphsCoord from "./Coord/MecanicasGraphsCoord.jsx";
import ModosEnPlacasYMembranasGraphsCoord from "./Coord/ModosEnPlacasYMembranasGraphsCoord.jsx";
import NaturalezaDelSonidoGraphsCoord from "./Coord/NaturalezaDelSonidoGraphsCoord.jsx";
import OndasFlexionalesEnVigasGraphsCoord from "./Coord/OndasFlexionalesEnVigasGraphsCoord.jsx";
import OndasGraphsCoord from "./Coord/OndasGraphsCoord.jsx";
import OndasLongitudinalesEnBarrasGraphsCoord from "./Coord/OndasLongitudinalesEnBarrasGraphsCoord.jsx";
import OndasLongitudinalesFluidosGraphsCoord from "./Coord/OndasLongitudinalesFluidosGraphsCoord.jsx";
import OndasSismicasPYSGraphsCoord from "./Coord/OndasSismicasPYSGraphsCoord.jsx";
import OndasSuperficialesGraphsCoord from "./Coord/OndasSuperficialesGraphsCoord.jsx";
import OndasSuperficialesRayleighGraphsCoord from "./Coord/OndasSuperficialesRayleighGraphsCoord.jsx";
import OndasTransversalesDeCorteGraphsCoord from "./Coord/OndasTransversalesDeCorteGraphsCoord.jsx";
import OndasTransversalesYLongitudinalesGraphsCoord from "./Coord/OndasTransversalesYLongitudinalesGraphsCoord.jsx";
import PropiedadesElasticasDelSolidoGraphsCoord from "./Coord/PropiedadesElasticasDelSolidoGraphsCoord.jsx";
import ReflexionYTransmisionEnSolidosGraphsCoord from "./Coord/ReflexionYTransmisionEnSolidosGraphsCoord.jsx";
import RelacionEntreModulosElasticosGraphsCoord from "./Coord/RelacionEntreModulosElasticosGraphsCoord.jsx";
import ResonanciaYModosEnBarrasGraphsCoord from "./Coord/ResonanciaYModosEnBarrasGraphsCoord.jsx";
import SuperposicionGraphsCoord from "./Coord/SuperposicionGraphsCoord.jsx";
import TiposDeOndasEnSolidosGraphsCoord from "./Coord/TiposDeOndasEnSolidosGraphsCoord.jsx";
import TonoYTimbreGraphsCoord from "./Coord/TonoYTimbreGraphsCoord.jsx";
import TubosGraphsCoord from "./Coord/TubosGraphsCoord.jsx";
import VelocidadDePropagacionGraphsCoord from "./Coord/VelocidadDePropagacionGraphsCoord.jsx";
import VelocidadDelSonidoGraphsCoord from "./Coord/VelocidadDelSonidoGraphsCoord.jsx";
import AplicacionesUltrasonidosYEnsayosGraphsSvg from "./Svg/AplicacionesUltrasonidosYEnsayosGraphsSvg.jsx";
import CambioDeVelocidadGraphsSvg from "./Svg/CambioDeVelocidadGraphsSvg.jsx";
import ConceptoDeOndaGraphsSvg from "./Svg/ConceptoDeOndaGraphsSvg.jsx";
import CuerdasOndasEstacionariasGraphsSvg from "./Svg/CuerdasOndasEstacionariasGraphsSvg.jsx";
import CuerdasVelocidadEnCuerdaTensaGraphsSvg from "./Svg/CuerdasVelocidadEnCuerdaTensaGraphsSvg.jsx";
import DispersionYAtenuacionEnSolidosGraphsSvg from "./Svg/DispersionYAtenuacionEnSolidosGraphsSvg.jsx";
import EnergiaDeUnaOndaGraphsSvg from "./Svg/EnergiaDeUnaOndaGraphsSvg.jsx";
import ImpedanciaMecanicaEnSolidosGraphsSvg from "./Svg/ImpedanciaMecanicaEnSolidosGraphsSvg.jsx";
import IntroduccionGraphsSvg from "./Svg/IntroduccionGraphsSvg.jsx";
import LongitudDeOndaGraphsSvg from "./Svg/LongitudDeOndaGraphsSvg.jsx";
import ModosEnPlacasYMembranasGraphsSvg from "./Svg/ModosEnPlacasYMembranasGraphsSvg.jsx";
import NaturalezaDelSonidoGraphsSvg from "./Svg/NaturalezaDelSonidoGraphsSvg.jsx";
import OndasFlexionalesEnVigasGraphsSvg from "./Svg/OndasFlexionalesEnVigasGraphsSvg.jsx";
import OndasLongitudinalesEnBarrasGraphsSvg from "./Svg/OndasLongitudinalesEnBarrasGraphsSvg.jsx";
import OndasLongitudinalesFluidosGraphsSvg from "./Svg/OndasLongitudinalesFluidosGraphsSvg.jsx";
import OndasSismicasPYSGraphsSvg from "./Svg/OndasSismicasPYSGraphsSvg.jsx";
import OndasSuperficialesGraphsSvg from "./Svg/OndasSuperficialesGraphsSvg.jsx";
import OndasSuperficialesRayleighGraphsSvg from "./Svg/OndasSuperficialesRayleighGraphsSvg.jsx";
import OndasTransversalesDeCorteGraphsSvg from "./Svg/OndasTransversalesDeCorteGraphsSvg.jsx";
import OndasTransversalesYLongitudinalesGraphsSvg from "./Svg/OndasTransversalesYLongitudinalesGraphsSvg.jsx";
import PropiedadesElasticasDelSolidoGraphsSvg from "./Svg/PropiedadesElasticasDelSolidoGraphsSvg.jsx";
import ReflexionGraphsSvg from "./Svg/ReflexionGraphsSvg.jsx";
import ReflexionYTransmisionEnSolidosGraphsSvg from "./Svg/ReflexionYTransmisionEnSolidosGraphsSvg.jsx";
import RelacionEntreModulosElasticosGraphsSvg from "./Svg/RelacionEntreModulosElasticosGraphsSvg.jsx";
import ResonanciaYModosEnBarrasGraphsSvg from "./Svg/ResonanciaYModosEnBarrasGraphsSvg.jsx";
import TiposDeOndasEnSolidosGraphsSvg from "./Svg/TiposDeOndasEnSolidosGraphsSvg.jsx";
import VelocidadDePropagacionGraphsSvg from "./Svg/VelocidadDePropagacionGraphsSvg.jsx";
import VelocidadDelSonidoGraphsSvg from "./Svg/VelocidadDelSonidoGraphsSvg.jsx";

const rawGraphs = {
  "aplicaciones": {
    Coord: { type: "Coord", graphType: "Coord", component: AplicacionesSonidoGraphsCoord },
  },
  "aplicaciones-ultrasonidos-y-ensayos": {
    Coord: { type: "Coord", graphType: "Coord", component: AplicacionesUltrasonidosYEnsayosGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: AplicacionesUltrasonidosYEnsayosGraphsSvg },
  },
  "armonicos": {
    Coord: { type: "Coord", graphType: "Coord", component: CuerdasArmonicosGraphsCoord },
  },
  "cambio-de-velocidad": {
    Coord: { type: "Coord", graphType: "Coord", component: CambioDeVelocidadGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: CambioDeVelocidadGraphsSvg },
  },
  "concepto-de-onda": {
    Coord: { type: "Coord", graphType: "Coord", component: ConceptoDeOndaGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: ConceptoDeOndaGraphsSvg },
  },
  "condicion-de-estacionariedad": {
    Coord: { type: "Coord", graphType: "Coord", component: CondicionDeEstacionariedadGraphsCoord },
  },
  "cuerdas": {
    Coord: { type: "Coord", graphType: "Coord", component: CuerdasGraphsCoord },
  },
  "difraccion": {
    Coord: { type: "Coord", graphType: "Coord", component: DifraccionGraphsCoord },
  },
  "dispersion-y-atenuacion-en-solidos": {
    Coord: { type: "Coord", graphType: "Coord", component: DispersionYAtenuacionEnSolidosGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: DispersionYAtenuacionEnSolidosGraphsSvg },
  },
  "ecuacion-de-onda": {
    Coord: { type: "Coord", graphType: "Coord", component: EcuacionDeOndaGraphsCoord },
  },
  "efecto-doppler": {
    Coord: { type: "Coord", graphType: "Coord", component: EfectoDopplerGraphsCoord },
  },
  "electromagneticas": {
    Coord: { type: "Coord", graphType: "Coord", component: ElectromagneticasGraphsCoord },
  },
  "energia-de-una-onda": {
    Coord: { type: "Coord", graphType: "Coord", component: EnergiaDeUnaOndaGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: EnergiaDeUnaOndaGraphsSvg },
  },
  "fase": {
    Coord: { type: "Coord", graphType: "Coord", component: FaseGraphsCoord },
  },
  "flujo-de-energia": {
    Coord: { type: "Coord", graphType: "Coord", component: FlujoDeEnergiaGraphsCoord },
  },
  "frecuencia-y-periodo": {
    Coord: { type: "Coord", graphType: "Coord", component: FrecuenciaYPeriodoGraphsCoord },
  },
  "impedancia-mecanica-en-solidos": {
    Coord: { type: "Coord", graphType: "Coord", component: ImpedanciaMecanicaEnSolidosGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: ImpedanciaMecanicaEnSolidosGraphsSvg },
  },
  "intensidad-ondulatoria": {
    Coord: { type: "Coord", graphType: "Coord", component: IntensidadOndulatoriaGraphsCoord },
  },
  "intensidad-y-nivel-sonoro": {
    Coord: { type: "Coord", graphType: "Coord", component: IntensidadYNivelSonoroGraphsCoord },
  },
  "interferencia-constructiva": {
    Coord: { type: "Coord", graphType: "Coord", component: InterferenciaConstructivaGraphsCoord },
  },
  "interferencia-destructiva": {
    Coord: { type: "Coord", graphType: "Coord", component: InterferenciaDestructivaGraphsCoord },
  },
  "introduccion": {
    Coord: { type: "Coord", graphType: "Coord", component: IntroduccionGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: IntroduccionGraphsSvg },
  },
  "ley-de-snell": {
    Coord: { type: "Coord", graphType: "Coord", component: LeyDeSnellGraphsCoord },
  },
  "longitud-de-onda": {
    Coord: { type: "Coord", graphType: "Coord", component: LongitudDeOndaGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: LongitudDeOndaGraphsSvg },
  },
  "mecanicas": {
    Coord: { type: "Coord", graphType: "Coord", component: MecanicasGraphsCoord },
  },
  "modos-en-placas-y-membranas": {
    Coord: { type: "Coord", graphType: "Coord", component: ModosEnPlacasYMembranasGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: ModosEnPlacasYMembranasGraphsSvg },
  },
  "naturaleza-del-sonido": {
    Coord: { type: "Coord", graphType: "Coord", component: NaturalezaDelSonidoGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: NaturalezaDelSonidoGraphsSvg },
  },
  "nodos-y-antinodos": {
    Coord: { type: "Coord", graphType: "Coord", component: OndasGraphsCoord },
  },
  "ondas-estacionarias-en-cuerdas": {
    Coord: { type: "Coord", graphType: "Coord", component: CuerdasOndasEstacionariasGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: CuerdasOndasEstacionariasGraphsSvg },
  },
  "ondas-flexionales-en-vigas": {
    Coord: { type: "Coord", graphType: "Coord", component: OndasFlexionalesEnVigasGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: OndasFlexionalesEnVigasGraphsSvg },
  },
  "ondas-longitudinales": {
    Coord: { type: "Coord", graphType: "Coord", component: OndasLongitudinalesFluidosGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: OndasLongitudinalesFluidosGraphsSvg },
  },
  "ondas-longitudinales-en-barras": {
    Coord: { type: "Coord", graphType: "Coord", component: OndasLongitudinalesEnBarrasGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: OndasLongitudinalesEnBarrasGraphsSvg },
  },
  "ondas-sismicas-p-y-s": {
    Coord: { type: "Coord", graphType: "Coord", component: OndasSismicasPYSGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: OndasSismicasPYSGraphsSvg },
  },
  "ondas-superficiales": {
    Coord: { type: "Coord", graphType: "Coord", component: OndasSuperficialesGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: OndasSuperficialesGraphsSvg },
  },
  "ondas-superficiales-rayleigh": {
    Coord: { type: "Coord", graphType: "Coord", component: OndasSuperficialesRayleighGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: OndasSuperficialesRayleighGraphsSvg },
  },
  "ondas-transversales-de-corte": {
    Coord: { type: "Coord", graphType: "Coord", component: OndasTransversalesDeCorteGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: OndasTransversalesDeCorteGraphsSvg },
  },
  "ondas-transversales-y-longitudinales": {
    Coord: { type: "Coord", graphType: "Coord", component: OndasTransversalesYLongitudinalesGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: OndasTransversalesYLongitudinalesGraphsSvg },
  },
  "propiedades-elasticas-del-solido": {
    Coord: { type: "Coord", graphType: "Coord", component: PropiedadesElasticasDelSolidoGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: PropiedadesElasticasDelSolidoGraphsSvg },
  },
  "reflexion": {
    Svg: { type: "Svg", graphType: "Svg", component: ReflexionGraphsSvg },
  },
  "reflexion-y-transmision-en-solidos": {
    Coord: { type: "Coord", graphType: "Coord", component: ReflexionYTransmisionEnSolidosGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: ReflexionYTransmisionEnSolidosGraphsSvg },
  },
  "relacion-entre-modulos-elasticos": {
    Coord: { type: "Coord", graphType: "Coord", component: RelacionEntreModulosElasticosGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: RelacionEntreModulosElasticosGraphsSvg },
  },
  "resonancia": {
    Coord: { type: "Coord", graphType: "Coord", component: OndasGraphsCoord },
  },
  "resonancia-y-modos-en-barras": {
    Coord: { type: "Coord", graphType: "Coord", component: ResonanciaYModosEnBarrasGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: ResonanciaYModosEnBarrasGraphsSvg },
  },
  "superposicion": {
    Coord: { type: "Coord", graphType: "Coord", component: SuperposicionGraphsCoord },
  },
  "tipos-de-ondas-en-solidos": {
    Coord: { type: "Coord", graphType: "Coord", component: TiposDeOndasEnSolidosGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: TiposDeOndasEnSolidosGraphsSvg },
  },
  "tono-y-timbre": {
    Coord: { type: "Coord", graphType: "Coord", component: TonoYTimbreGraphsCoord },
  },
  "tubos": {
    Coord: { type: "Coord", graphType: "Coord", component: TubosGraphsCoord },
  },
  "velocidad-de-propagacion": {
    Coord: { type: "Coord", graphType: "Coord", component: VelocidadDePropagacionGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: VelocidadDePropagacionGraphsSvg },
  },
  "velocidad-del-sonido": {
    Coord: { type: "Coord", graphType: "Coord", component: VelocidadDelSonidoGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: VelocidadDelSonidoGraphsSvg },
  },
  "velocidad-en-cuerda-tensa": {
    Coord: { type: "Coord", graphType: "Coord", component: CuerdasVelocidadEnCuerdaTensaGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: CuerdasVelocidadEnCuerdaTensaGraphsSvg },
  },
};

export const graphs = withGraphContextRegistry(rawGraphs);
export const ondasGraphs = graphs;

export default graphs;
