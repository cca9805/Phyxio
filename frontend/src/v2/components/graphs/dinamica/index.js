import { withGraphContextRegistry } from "../shared/withGraphContext.jsx";
/**
 * Dinamica - Graph Components Index
 *
 * WIRING ONLY — los metadatos semánticos (title, xAxis, yAxis, relation,
 * physicalReading, agentHints, commonMistakes, etc.) viven en graficos.yaml.
 * Este archivo solo declara { type, graphType, component } por entrada.
 */

import PoleasCompuestasGraphsCoord from "./Coord/PoleasCompuestasGraphsCoord.jsx";
import PoleasCompuestasGraphsSvg from "./Svg/PoleasCompuestasGraphsSvg.jsx";
import PoleasSimplesGraphsCoord from "./Coord/PoleasSimplesGraphsCoord.jsx";
import PoleasSimplesGraphsSvg from "./Svg/PoleasSimplesGraphsSvg.jsx";
import DescomposicionVectorialGraphsCoord from "./Coord/DescomposicionVectorialGraphsCoord.jsx";
import DescomposicionVectorialGraphsDcl from "./Dcl/DescomposicionVectorialGraphsDcl.jsx";
import DescomposicionVectorialGraphsSvg from "./Svg/DescomposicionVectorialGraphsSvg.jsx";
import DiagramasCuerpoLibreGraphsCoord from "./Coord/DiagramasCuerpoLibreGraphsCoord.jsx";
import DiagramasCuerpoLibreGraphsDcl from "./Dcl/DiagramasCuerpoLibreGraphsDcl.jsx";
import DiagramasCuerpoLibreGraphsSvg from "./Svg/DiagramasCuerpoLibreGraphsSvg.jsx";
import IdentificacionDeFuerzasGraphsDcl from "./Dcl/IdentificacionDeFuerzasGraphsDcl.jsx";
import IdentificacionDeFuerzasGraphsSvg from "./Svg/IdentificacionDeFuerzasGraphsSvg.jsx";
import PrimeraLeyInerciaGraphsDcl from "./Dcl/PrimeraLeyInerciaGraphsDcl.jsx";
import SegundaLeyFuerzaMasaGraphsCoord from "./Coord/SegundaLeyFuerzaMasaGraphsCoord.jsx";
import SegundaLeyFuerzaMasaGraphsDcl from "./Dcl/SegundaLeyFuerzaMasaGraphsDcl.jsx";
import TerceraLeyAccionReaccionGraphsDcl from "./Dcl/TerceraLeyAccionReaccionGraphsDcl.jsx";
import TerceraLeyAccionReaccionGraphsSvg from "./Svg/TerceraLeyAccionReaccionGraphsSvg.jsx";
import AceleracionRelativaGraphsDcl from "./Dcl/AceleracionRelativaGraphsDcl.jsx";
import SistemasInercialesGraphsDcl from "./Dcl/SistemasInercialesGraphsDcl.jsx";
import SistemasInercialesGraphsSvg from "./Svg/SistemasInercialesGraphsSvg.jsx";
import SistemasNoInercialesIntroGraphsDcl from "./Dcl/SistemasNoInercialesIntroGraphsDcl.jsx";
import SistemasNoInercialesIntroGraphsSvg from "./Svg/SistemasNoInercialesIntroGraphsSvg.jsx";
import ErroresFrecuentesGraphsCoord from "./Coord/ErroresFrecuentesGraphsCoord.jsx";
import ProblemasTipoExamenGraphsCoord from "./Coord/ProblemasTipoExamenGraphsCoord.jsx";
import ProblemasTipoExamenGraphsSvg from "./Svg/ProblemasTipoExamenGraphsSvg.jsx";
import SistemasRealesGraphsCoord from "./Coord/SistemasRealesGraphsCoord.jsx";
import SistemasRealesGraphsSvg from "./Svg/SistemasRealesGraphsSvg.jsx";
import TraslacionYRotacionGraphsCoord from "./Coord/TraslacionYRotacionGraphsCoord.jsx";
import AnalisisCompletoGraphsCoord from "./Coord/AnalisisCompletoGraphsCoord.jsx";
import BloqueColganteGraphsCoord from "./Coord/BloqueColganteGraphsCoord.jsx";
import BloqueSobreSuperficieGraphsCoord from "./Coord/BloqueSobreSuperficieGraphsCoord.jsx";
import ConRozamientoGraphsCoord from "./Coord/ConRozamientoGraphsCoord.jsx";
import ConRozamientoGraphsDcl from "./Dcl/ConRozamientoGraphsDcl.jsx";
import DosMasasUnidasPorCuerdaGraphsCoord from "./Coord/DosMasasUnidasPorCuerdaGraphsCoord.jsx";
import DosMasasUnidasPorCuerdaGraphsSvg from "./Svg/DosMasasUnidasPorCuerdaGraphsSvg.jsx";
import SinRozamientoGraphsCoord from "./Coord/SinRozamientoGraphsCoord.jsx";
import SinRozamientoGraphsDcl from "./Dcl/SinRozamientoGraphsDcl.jsx";
import CentroDeMasasEnCuerposExtendidosGraphsCoord from "./Coord/CentroDeMasasEnCuerposExtendidosGraphsCoord.jsx";
import CentroDeMasasEnCuerposExtendidosGraphsSvg from "./Svg/CentroDeMasasEnCuerposExtendidosGraphsSvg.jsx";
import CentroDeMasasEnSistemasDiscretosGraphsCoord from "./Coord/CentroDeMasasEnSistemasDiscretosGraphsCoord.jsx";
import CentroDeMasasEnSistemasDiscretosGraphsSvg from "./Svg/CentroDeMasasEnSistemasDiscretosGraphsSvg.jsx";
import CondicionSumatoriaFuerzasGraphsCoord from "./Coord/CondicionSumatoriaFuerzasGraphsCoord.jsx";
import CondicionSumatoriaFuerzasGraphsDcl from "./Dcl/CondicionSumatoriaFuerzasGraphsDcl.jsx";
import CondicionSumatoriaMomentosGraphsCoord from "./Coord/CondicionSumatoriaMomentosGraphsCoord.jsx";
import DefinicionCentroDeMasasGraphsCoord from "./Coord/DefinicionCentroDeMasasGraphsCoord.jsx";
import DefinicionCentroDeMasasGraphsSvg from "./Svg/DefinicionCentroDeMasasGraphsSvg.jsx";
import EjemplosDeEquilibrioGraphsDcl from "./Dcl/EjemplosDeEquilibrioGraphsDcl.jsx";
import EjemplosDeEquilibrioGraphsSvg from "./Svg/EjemplosDeEquilibrioGraphsSvg.jsx";
import MomentoDeUnaFuerzaGraphsCoord from "./Coord/MomentoDeUnaFuerzaGraphsCoord.jsx";
import ArrastreCuadraticoGraphsCoord from "./Coord/ArrastreCuadraticoGraphsCoord.jsx";
import ArrastreCuadraticoGraphsDcl from "./Dcl/ArrastreCuadraticoGraphsDcl.jsx";
import ArrastreLinealGraphsCoord from "./Coord/ArrastreLinealGraphsCoord.jsx";
import ArrastreLinealGraphsDcl from "./Dcl/ArrastreLinealGraphsDcl.jsx";
import CoeficienteDeArrastreGraphsCoord from "./Coord/CoeficienteDeArrastreGraphsCoord.jsx";
import CoeficienteDeArrastreGraphsSvg from "./Svg/CoeficienteDeArrastreGraphsSvg.jsx";
import CoeficienteDeRozamientoGraphsCoord from "./Coord/CoeficienteDeRozamientoGraphsCoord.jsx";
import CoeficienteDeRozamientoGraphsDcl from "./Dcl/CoeficienteDeRozamientoGraphsDcl.jsx";
import ConceptoFuerzaCentripetaGraphsCoord from "./Coord/ConceptoFuerzaCentripetaGraphsCoord.jsx";
import ConceptoFuerzaCentripetaGraphsDcl from "./Dcl/ConceptoFuerzaCentripetaGraphsDcl.jsx";
import ConceptoFuerzaCentripetaGraphsSvg from "./Svg/ConceptoFuerzaCentripetaGraphsSvg.jsx";
import CurvasPlanasYPeraltadasGraphsCoord from "./Coord/CurvasPlanasYPeraltadasGraphsCoord.jsx";
import CurvasPlanasYPeraltadasGraphsDcl from "./Dcl/CurvasPlanasYPeraltadasGraphsDcl.jsx";
import CurvasPlanasYPeraltadasGraphsSvg from "./Svg/CurvasPlanasYPeraltadasGraphsSvg.jsx";
import DefinicionYExpresionGraphsDcl from "./Dcl/DefinicionYExpresionGraphsDcl.jsx";
import DefinicionYExpresionGraphsSvg from "./Svg/DefinicionYExpresionGraphsSvg.jsx";
import EjemplosTipicosGraphsCoord from "./Coord/EjemplosTipicosGraphsCoord.jsx";
import LeyDeHookeGraphsCoord from "./Coord/LeyDeHookeGraphsCoord.jsx";
import LeyDeHookeGraphsDcl from "./Dcl/LeyDeHookeGraphsDcl.jsx";
import LoopVerticalYCondicionDeContactoGraphsCoord from "./Coord/LoopVerticalYCondicionDeContactoGraphsCoord.jsx";
import LoopVerticalYCondicionDeContactoGraphsDcl from "./Dcl/LoopVerticalYCondicionDeContactoGraphsDcl.jsx";
import LoopVerticalYCondicionDeContactoGraphsSvg from "./Svg/LoopVerticalYCondicionDeContactoGraphsSvg.jsx";
import NormalEnPlanosGraphsCoord from "./Coord/NormalEnPlanosGraphsCoord.jsx";
import NormalEnPlanosGraphsDcl from "./Dcl/NormalEnPlanosGraphsDcl.jsx";
import NumeroDeReynoldsYRegimenesDeArrastreGraphsCoord from "./Coord/NumeroDeReynoldsYRegimenesDeArrastreGraphsCoord.jsx";
import NumeroDeReynoldsYRegimenesDeArrastreGraphsSvg from "./Svg/NumeroDeReynoldsYRegimenesDeArrastreGraphsSvg.jsx";
import PesoEnDiferentesContextosGraphsCoord from "./Coord/PesoEnDiferentesContextosGraphsCoord.jsx";
import PesoEnDiferentesContextosGraphsDcl from "./Dcl/PesoEnDiferentesContextosGraphsDcl.jsx";
import RozamientoDinamicoGraphsCoord from "./Coord/RozamientoDinamicoGraphsCoord.jsx";
import RozamientoDinamicoGraphsDcl from "./Dcl/RozamientoDinamicoGraphsDcl.jsx";
import RozamientoEstaticoGraphsCoord from "./Coord/RozamientoEstaticoGraphsCoord.jsx";
import RozamientoEstaticoGraphsDcl from "./Dcl/RozamientoEstaticoGraphsDcl.jsx";
import SistemasConMuellesGraphsCoord from "./Coord/SistemasConMuellesGraphsCoord.jsx";
import SistemasConMuellesGraphsDcl from "./Dcl/SistemasConMuellesGraphsDcl.jsx";
import SistemasConMuellesGraphsSvg from "./Svg/SistemasConMuellesGraphsSvg.jsx";
import TensionEnCuerdasYCablesGraphsCoord from "./Coord/TensionEnCuerdasYCablesGraphsCoord.jsx";
import TensionEnCuerdasYCablesGraphsDcl from "./Dcl/TensionEnCuerdasYCablesGraphsDcl.jsx";
import VelocidadTerminalGraphsCoord from "./Coord/VelocidadTerminalGraphsCoord.jsx";
import VelocidadTerminalGraphsDcl from "./Dcl/VelocidadTerminalGraphsDcl.jsx";
import AplicacionesFisicasGraphsCoord from "./Coord/AplicacionesFisicasGraphsCoord.jsx";
import ConceptoFuerzasFicticiasGraphsCoord from "./Coord/ConceptoFuerzasFicticiasGraphsCoord.jsx";
import DefinicionFuerzaCoriolisGraphsCoord from "./Coord/DefinicionFuerzaCoriolisGraphsCoord.jsx";
import EjemplosFuerzaCentrifugaGraphsCoord from "./Coord/EjemplosFuerzaCentrifugaGraphsCoord.jsx";
import FuerzaCentrifugaGraphsCoord from "./Coord/FuerzaCentrifugaGraphsCoord.jsx";
import ConceptoFuerzasFicticiasGraphsDcl from "./Dcl/ConceptoFuerzasFicticiasGraphsDcl.jsx";
import InterpretacionFuerzasFicticiasGraphsDcl from "./Dcl/InterpretacionFuerzasFicticiasGraphsDcl.jsx";
import ConceptoFuerzasFicticiasGraphsSvg from "./Svg/ConceptoFuerzasFicticiasGraphsSvg.jsx";
import DefinicionFuerzaCoriolisGraphsSvg from "./Svg/DefinicionFuerzaCoriolisGraphsSvg.jsx";
import InterpretacionFuerzasFicticiasGraphsSvg from "./Svg/InterpretacionFuerzasFicticiasGraphsSvg.jsx";

const rawGraphs = {
  "descomposicion-vectorial": {
    Dcl: { type: "Dcl", graphType: "Dcl", component: DescomposicionVectorialGraphsDcl },
    Svg: { type: "Svg", graphType: "Svg", component: DescomposicionVectorialGraphsSvg },
    Coord: { type: "Coord", graphType: "Coord", component: DescomposicionVectorialGraphsCoord },
  },
  "diagramas-cuerpo-libre": {
    Coord: { type: "Coord", graphType: "Coord", component: DiagramasCuerpoLibreGraphsCoord },
    Dcl: { type: "Dcl", graphType: "Dcl", component: DiagramasCuerpoLibreGraphsDcl },
    Svg: { type: "Svg", graphType: "Svg", component: DiagramasCuerpoLibreGraphsSvg },
  },
  "identificacion-de-fuerzas": {
    Dcl: { type: "Dcl", graphType: "Dcl", component: IdentificacionDeFuerzasGraphsDcl },
    Svg: { type: "Svg", graphType: "Svg", component: IdentificacionDeFuerzasGraphsSvg },
  },
  "primera-ley-inercia": {
    Dcl: { type: "Dcl", graphType: "Dcl", component: PrimeraLeyInerciaGraphsDcl },
  },
  "segunda-ley-fuerza-masa": {
    Coord: { type: "Coord", graphType: "Coord", component: SegundaLeyFuerzaMasaGraphsCoord },
    Dcl: { type: "Dcl", graphType: "Dcl", component: SegundaLeyFuerzaMasaGraphsDcl },
  },
  "tercera-ley-accion-reaccion": {
    Dcl: { type: "Dcl", graphType: "Dcl", component: TerceraLeyAccionReaccionGraphsDcl },
    Svg: { type: "Svg", graphType: "Svg", component: TerceraLeyAccionReaccionGraphsSvg },
  },
  "aceleracion-relativa": {
    Dcl: { type: "Dcl", graphType: "Dcl", component: AceleracionRelativaGraphsDcl },
  },
  "sistemas-inerciales": {
    Dcl: { type: "Dcl", graphType: "Dcl", component: SistemasInercialesGraphsDcl },
    Svg: { type: "Svg", graphType: "Svg", component: SistemasInercialesGraphsSvg },
  },
  "sistemas-no-inerciales-intro": {
    Dcl: { type: "Dcl", graphType: "Dcl", component: SistemasNoInercialesIntroGraphsDcl },
    Svg: { type: "Svg", graphType: "Svg", component: SistemasNoInercialesIntroGraphsSvg },
  },
  "errores-frecuentes": {
    Coord: { type: "Coord", graphType: "Coord", component: ErroresFrecuentesGraphsCoord },
  },
  "problemas-tipo-examen": {
    Coord: { type: "Coord", graphType: "Coord", component: ProblemasTipoExamenGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: ProblemasTipoExamenGraphsSvg },
  },
  "sistemas-reales": {
    Coord: { type: "Coord", graphType: "Coord", component: SistemasRealesGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: SistemasRealesGraphsSvg },
  },
  "traslacion-y-rotacion": {
    Coord: { type: "Coord", graphType: "Coord", component: TraslacionYRotacionGraphsCoord },
  },
  "analisis-completo": {
    Coord: { type: "Coord", graphType: "Coord", component: AnalisisCompletoGraphsCoord },
  },
  "bloque-colgante": {
    Coord: { type: "Coord", graphType: "Coord", component: BloqueColganteGraphsCoord },
  },
  "bloque-sobre-superficie": {
    Coord: { type: "Coord", graphType: "Coord", component: BloqueSobreSuperficieGraphsCoord },
  },
  "con-rozamiento": {
    Coord: { type: "Coord", graphType: "Coord", component: ConRozamientoGraphsCoord },
    Dcl: { type: "Dcl", graphType: "Dcl", component: ConRozamientoGraphsDcl },
  },
  "dos-masas-unidas-por-cuerda": {
    Coord: { type: "Coord", graphType: "Coord", component: DosMasasUnidasPorCuerdaGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: DosMasasUnidasPorCuerdaGraphsSvg },
  },
  "sin-rozamiento": {
    Coord: { type: "Coord", graphType: "Coord", component: SinRozamientoGraphsCoord },
    Dcl: { type: "Dcl", graphType: "Dcl", component: SinRozamientoGraphsDcl },
  },
  "centro-de-masas-en-cuerpos-extendidos": {
    Coord: { type: "Coord", graphType: "Coord", component: CentroDeMasasEnCuerposExtendidosGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: CentroDeMasasEnCuerposExtendidosGraphsSvg },
  },
  "centro-de-masas-en-sistemas-discretos": {
    Coord: { type: "Coord", graphType: "Coord", component: CentroDeMasasEnSistemasDiscretosGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: CentroDeMasasEnSistemasDiscretosGraphsSvg },
  },
  "condicion-sumatoria-fuerzas": {
    Coord: { type: "Coord", graphType: "Coord", component: CondicionSumatoriaFuerzasGraphsCoord },
    Dcl: { type: "Dcl", graphType: "Dcl", component: CondicionSumatoriaFuerzasGraphsDcl },
  },
  "condicion-sumatoria-momentos": {
    Coord: { type: "Coord", graphType: "Coord", component: CondicionSumatoriaMomentosGraphsCoord },
  },
  "definicion-centro-de-masas": {
    Coord: { type: "Coord", graphType: "Coord", component: DefinicionCentroDeMasasGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: DefinicionCentroDeMasasGraphsSvg },
  },
  "ejemplos-de-equilibrio": {
    Dcl: { type: "Dcl", graphType: "Dcl", component: EjemplosDeEquilibrioGraphsDcl },
    Svg: { type: "Svg", graphType: "Svg", component: EjemplosDeEquilibrioGraphsSvg },
  },
  "momento-de-una-fuerza": {
    Coord: { type: "Coord", graphType: "Coord", component: MomentoDeUnaFuerzaGraphsCoord },
  },
  "arrastre-cuadratico": {
    Coord: { type: "Coord", graphType: "Coord", component: ArrastreCuadraticoGraphsCoord },
    Dcl: { type: "Dcl", graphType: "Dcl", component: ArrastreCuadraticoGraphsDcl },
  },
  "arrastre-lineal": {
    Coord: { type: "Coord", graphType: "Coord", component: ArrastreLinealGraphsCoord },
    Dcl: { type: "Dcl", graphType: "Dcl", component: ArrastreLinealGraphsDcl },
  },
  "coeficiente-de-arrastre": {
    Coord: { type: "Coord", graphType: "Coord", component: CoeficienteDeArrastreGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: CoeficienteDeArrastreGraphsSvg },
  },
  "coeficiente-de-rozamiento": {
    Coord: { type: "Coord", graphType: "Coord", component: CoeficienteDeRozamientoGraphsCoord },
    Dcl: { type: "Dcl", graphType: "Dcl", component: CoeficienteDeRozamientoGraphsDcl },
  },
  "concepto-fuerza-centripeta": {
    Coord: { type: "Coord", graphType: "Coord", component: ConceptoFuerzaCentripetaGraphsCoord },
    Dcl: { type: "Dcl", graphType: "Dcl", component: ConceptoFuerzaCentripetaGraphsDcl },
    Svg: { type: "Svg", graphType: "Svg", component: ConceptoFuerzaCentripetaGraphsSvg },
  },
  "curvas-planas-y-peraltadas": {
    Coord: { type: "Coord", graphType: "Coord", component: CurvasPlanasYPeraltadasGraphsCoord },
    Dcl: { type: "Dcl", graphType: "Dcl", component: CurvasPlanasYPeraltadasGraphsDcl },
    Svg: { type: "Svg", graphType: "Svg", component: CurvasPlanasYPeraltadasGraphsSvg },
  },
  "definicion-y-expresion": {
    Dcl: { type: "Dcl", graphType: "Dcl", component: DefinicionYExpresionGraphsDcl },
    Svg: { type: "Svg", graphType: "Svg", component: DefinicionYExpresionGraphsSvg },
  },
  "ejemplos-tipicos": {
    Coord: { type: "Coord", graphType: "Coord", component: EjemplosTipicosGraphsCoord },
  },
  "ley-de-hooke": {
    Coord: { type: "Coord", graphType: "Coord", component: LeyDeHookeGraphsCoord },
    Dcl: { type: "Dcl", graphType: "Dcl", component: LeyDeHookeGraphsDcl },
  },
  "loop-vertical-y-condicion-de-contacto": {
    Coord: { type: "Coord", graphType: "Coord", component: LoopVerticalYCondicionDeContactoGraphsCoord },
    Dcl: { type: "Dcl", graphType: "Dcl", component: LoopVerticalYCondicionDeContactoGraphsDcl },
    Svg: { type: "Svg", graphType: "Svg", component: LoopVerticalYCondicionDeContactoGraphsSvg },
  },
  "normal-en-planos": {
    Coord: { type: "Coord", graphType: "Coord", component: NormalEnPlanosGraphsCoord },
    Dcl: { type: "Dcl", graphType: "Dcl", component: NormalEnPlanosGraphsDcl },
  },
  "numero-de-reynolds-y-regimenes-de-arrastre": {
    Coord: { type: "Coord", graphType: "Coord", component: NumeroDeReynoldsYRegimenesDeArrastreGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: NumeroDeReynoldsYRegimenesDeArrastreGraphsSvg },
  },
  "peso-en-diferentes-contextos": {
    Coord: { type: "Coord", graphType: "Coord", component: PesoEnDiferentesContextosGraphsCoord },
    Dcl: { type: "Dcl", graphType: "Dcl", component: PesoEnDiferentesContextosGraphsDcl },
  },
  "rozamiento-dinamico": {
    Coord: { type: "Coord", graphType: "Coord", component: RozamientoDinamicoGraphsCoord },
    Dcl: { type: "Dcl", graphType: "Dcl", component: RozamientoDinamicoGraphsDcl },
  },
  "rozamiento-estatico": {
    Coord: { type: "Coord", graphType: "Coord", component: RozamientoEstaticoGraphsCoord },
    Dcl: { type: "Dcl", graphType: "Dcl", component: RozamientoEstaticoGraphsDcl },
  },
  "sistemas-con-muelles": {
    Coord: { type: "Coord", graphType: "Coord", component: SistemasConMuellesGraphsCoord },
    Dcl: { type: "Dcl", graphType: "Dcl", component: SistemasConMuellesGraphsDcl },
    Svg: { type: "Svg", graphType: "Svg", component: SistemasConMuellesGraphsSvg },
  },
  "tension-en-cuerdas-y-cables": {
    Coord: { type: "Coord", graphType: "Coord", component: TensionEnCuerdasYCablesGraphsCoord },
    Dcl: { type: "Dcl", graphType: "Dcl", component: TensionEnCuerdasYCablesGraphsDcl },
  },
  "velocidad-terminal": {
    Coord: { type: "Coord", graphType: "Coord", component: VelocidadTerminalGraphsCoord },
    Dcl: { type: "Dcl", graphType: "Dcl", component: VelocidadTerminalGraphsDcl },
  },
  "aplicaciones-fisicas": {
    Coord: { type: "Coord", graphType: "Coord", component: AplicacionesFisicasGraphsCoord },
  },
  "concepto-fuerzas-ficticias": {
    Coord: { type: "Coord", graphType: "Coord", component: ConceptoFuerzasFicticiasGraphsCoord },
    Dcl: { type: "Dcl", graphType: "Dcl", component: ConceptoFuerzasFicticiasGraphsDcl },
    Svg: { type: "Svg", graphType: "Svg", component: ConceptoFuerzasFicticiasGraphsSvg },
  },
  "definicion-fuerza-centrifuga": {
    Coord: { type: "Coord", graphType: "Coord", component: FuerzaCentrifugaGraphsCoord },
  },
  "definicion-fuerza-coriolis": {
    Coord: { type: "Coord", graphType: "Coord", component: DefinicionFuerzaCoriolisGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: DefinicionFuerzaCoriolisGraphsSvg },
  },
  "ejemplos-fuerza-centrifuga": {
    Coord: { type: "Coord", graphType: "Coord", component: EjemplosFuerzaCentrifugaGraphsCoord },
  },
  "interpretacion": {
    Dcl: { type: "Dcl", graphType: "Dcl", component: InterpretacionFuerzasFicticiasGraphsDcl },
    Svg: { type: "Svg", graphType: "Svg", component: InterpretacionFuerzasFicticiasGraphsSvg },
  },
  
  "poleas-compuestas": {
    Coord: { type: "Coord", graphType: "Coord", component: PoleasCompuestasGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: PoleasCompuestasGraphsSvg },
  },
  "poleas-simples": {
    Coord: { type: "Coord", graphType: "Coord", component: PoleasSimplesGraphsCoord },
    Svg: { type: "Svg", graphType: "Svg", component: PoleasSimplesGraphsSvg },
  },
  
  
  
};

export const graphs = withGraphContextRegistry(rawGraphs);
export const dinamicaGraphs = graphs;

export default graphs;