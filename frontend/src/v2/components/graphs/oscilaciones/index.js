import EcuacionMovimientoGraphsCoord from "./EcuacionMovimientoGraphsCoord";
import EnergiaEnMhsGraphsCoord from "./EnergiaEnMhsGraphsCoord";
import FaseOscilacionesGraphsCoord from "./FaseOscilacionesGraphsCoord";
import OsciladorMasaMuelleGraphsCoord from "./OsciladorMasaMuelleGraphsCoord";
import OsciladorMasaMuelleGraphsSvg from "./OsciladorMasaMuelleGraphsSvg";
import PenduloSimpleOscGraphsCoord from "./PenduloSimpleOscGraphsCoord";
import PenduloSimpleOscGraphsSvg from "./PenduloSimpleOscGraphsSvg";
import PenduloFisicoGraphsCoord from "./PenduloFisicoGraphsCoord";
import PenduloFisicoGraphsSvg from "./PenduloFisicoGraphsSvg";
import SubamortiguadoGraphsCoord from "./SubamortiguadoGraphsCoord";
import CriticoGraphsCoord from "./CriticoGraphsCoord";
import SobreamortiguadoGraphsCoord from "./SobreamortiguadoGraphsCoord";
import FuerzaForzadaGraphsCoord from "./FuerzaForzadaGraphsCoord";
import ResonanciaOscGraphsCoord from "./ResonanciaOscGraphsCoord";
import PenduloFisicoAvanzadoGraphsCoord from "./PenduloFisicoAvanzadoGraphsCoord";
import PenduloFisicoAvanzadoGraphsSvg from "./PenduloFisicoAvanzadoGraphsSvg";

export const graphs = {
  "ecuacion-movimiento": {
    Coord: EcuacionMovimientoGraphsCoord,
  },
  "fisica-clasica/mecanica/oscilaciones/mhs/ecuacion-movimiento": {
    Coord: EcuacionMovimientoGraphsCoord,
  },

  "energia-en-mhs": {
    Coord: EnergiaEnMhsGraphsCoord,
  },
  "fisica-clasica/mecanica/oscilaciones/mhs/energia-en-mhs": {
    Coord: EnergiaEnMhsGraphsCoord,
  },

  fase: {
    Coord: FaseOscilacionesGraphsCoord,
  },
  "fisica-clasica/mecanica/oscilaciones/mhs/fase": {
    Coord: FaseOscilacionesGraphsCoord,
  },

  "oscilador-masa-muelle": {
    Coord: OsciladorMasaMuelleGraphsCoord,
    Svg: OsciladorMasaMuelleGraphsSvg,
  },
  "fisica-clasica/mecanica/oscilaciones/oscilador-masa-muelle": {
    Coord: OsciladorMasaMuelleGraphsCoord,
    Svg: OsciladorMasaMuelleGraphsSvg,
  },

  "pendulo-simple": {
    Coord: PenduloSimpleOscGraphsCoord,
    Svg: PenduloSimpleOscGraphsSvg,
  },
  "fisica-clasica/mecanica/oscilaciones/pendulo-simple": {
    Coord: PenduloSimpleOscGraphsCoord,
    Svg: PenduloSimpleOscGraphsSvg,
  },

  subamortiguado: {
    Coord: SubamortiguadoGraphsCoord,
  },
  "fisica-clasica/mecanica/oscilaciones/amortiguamiento/subamortiguado": {
    Coord: SubamortiguadoGraphsCoord,
  },

  critico: {
    Coord: CriticoGraphsCoord,
  },
  "fisica-clasica/mecanica/oscilaciones/amortiguamiento/critico": {
    Coord: CriticoGraphsCoord,
  },

  sobreamortiguado: {
    Coord: SobreamortiguadoGraphsCoord,
  },
  "fisica-clasica/mecanica/oscilaciones/amortiguamiento/sobreamortiguado": {
    Coord: SobreamortiguadoGraphsCoord,
  },

  "fuerza-forzada": {
    Coord: FuerzaForzadaGraphsCoord,
  },
  "fisica-clasica/mecanica/oscilaciones/forzadas-y-resonancia/fuerza-forzada": {
    Coord: FuerzaForzadaGraphsCoord,
  },

  resonancia: {
    Coord: ResonanciaOscGraphsCoord,
  },
  "fisica-clasica/mecanica/oscilaciones/forzadas-y-resonancia/resonancia": {
    Coord: ResonanciaOscGraphsCoord,
  },

  "pendulo-fisico": {
    Coord: PenduloFisicoGraphsCoord,
    Svg: PenduloFisicoGraphsSvg,
  },
  "fisica-clasica/mecanica/oscilaciones/pendulo-fisico": {
    Coord: PenduloFisicoGraphsCoord,
    Svg: PenduloFisicoGraphsSvg,
  },

  "pendulo-fisico-avanzado": {
    Coord: PenduloFisicoAvanzadoGraphsCoord,
    Svg: PenduloFisicoAvanzadoGraphsSvg,
  },
  "fisica-clasica/mecanica/oscilaciones/pendulo-fisico-avanzado": {
    Coord: PenduloFisicoAvanzadoGraphsCoord,
    Svg: PenduloFisicoAvanzadoGraphsSvg,
  },
};
