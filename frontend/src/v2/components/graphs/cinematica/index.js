/**
 * Cinematica - Graph Components Index
 * 
 * Auto-generado desde phyxio-map.yaml
 * Fecha: 2026-01-23
 * 
 * Estructura:
 * export const graphs = {
 *   "topic-id": {
 *     Coord: TopicGraphsCoord,
 *     Svg: TopicGraphsSvg,
 *     Dcl: TopicGraphsDcl
 *   }
 * };
 */

// Movimiento rectilineo
import MruGraphsCoord from "./MruGraphsCoord";
import MruGraphsSvg from "./MruGraphsSvg";
import MruaGraphsCoord from "./MruaGraphsCoord";
import MruaGraphsSvg from "./MruaGraphsSvg";
import CaidaLibreGraphsCoord from "./CaidaLibreGraphsCoord";
import CaidaLibreSvg from "./CaidaLibreSvg.jsx";

// Movimiento circular
import McuGraphsCoord from "./McuGraphsCoord";
import McuGraphsSvg from "./McuGraphsSvg";
import McuaGraphsCoord from "./McuaGraphsCoord";
import McuaGraphsSvg from "./McuaGraphsSvg";

// Rotación
import MagnitudesAngularesGraphsCoord from "./MagnitudesAngularesGraphsCoord";
import CinematicaRotacionalGraphsCoord from "./CinematicaRotacionalGraphsCoord";
import CinematicaRotacionalGraphsSvg from "./CinematicaRotacionalGraphsSvg";
import RelacionLinealAngularGraphsCoord from "./RelacionLinealAngularGraphsCoord";
import RodaduraCinematicaSinDeslizamientoGraphsCoord from "./RodaduraCinematicaSinDeslizamientoGraphsCoord";
import RodaduraCinematicaSinDeslizamientoGraphsSvg from "./RodaduraCinematicaSinDeslizamientoGraphsSvg";

// Movimiento relativo
import SistemasReferenciaGraphsCoord from "./SistemasReferenciaGraphsCoord";
import SistemasReferenciaGraphsSvg from "./SistemasReferenciaGraphsSvg";
import VelocidadRelativaGraphsCoord from "./VelocidadRelativaGraphsCoord";
import VelocidadRelativaGraphsSvg from "./VelocidadRelativaGraphsSvg";
import EncuentrosYPersecucionesGraphsCoord from "./EncuentrosYPersecucionesGraphsCoord";
import EncuentrosYPersecucionesGraphsSvg from "./EncuentrosYPersecucionesGraphsSvg";

import TiroHorizontalGraphsCoord from "./TiroHorizontalGraphsCoord";
import TiroHorizontalGraphsSvg from "./TiroHorizontalGraphsSvg";
import TiroParabolicoGraphsCoord from "./TiroParabolicoGraphsCoord";
import TiroParabolicoGraphsSvg from "./TiroParabolicoGraphsSvg";
import TiroVerticalGraphsCoord from "./TiroVerticalGraphsCoord";
import TiroVerticalGraphsSvg from "./TiroVerticalGraphsSvg";



export const graphs = {
  "mru": {
    Coord: MruGraphsCoord,
    Svg: MruGraphsSvg,
  },
  "mrua": {
    Coord: MruaGraphsCoord,
    Svg: MruaGraphsSvg,
  },
  "caida-libre": {
    Coord: CaidaLibreGraphsCoord,
    Svg: CaidaLibreSvg,
  },
  "mcu": {
    Coord: McuGraphsCoord,
    Svg: McuGraphsSvg,
  },
  "mcua": {
    Coord: McuaGraphsCoord,
    Svg: McuaGraphsSvg,
  },
  "magnitudes-angulares": {
    Coord: MagnitudesAngularesGraphsCoord,
  },  
  "cinematica-rotacional": {
    Coord: CinematicaRotacionalGraphsCoord,
    Svg: CinematicaRotacionalGraphsSvg,
  },
  "relacion-lineal-angular": {
    Coord: RelacionLinealAngularGraphsCoord,
  },
  "rodadura-cinematica-sin-deslizamiento": {
    Coord: RodaduraCinematicaSinDeslizamientoGraphsCoord,
    Svg: RodaduraCinematicaSinDeslizamientoGraphsSvg,
  },
  "sistemas-referencia": {
    Coord: SistemasReferenciaGraphsCoord,
    Svg: SistemasReferenciaGraphsSvg,
  },
  "velocidad-relativa": {
    Coord: VelocidadRelativaGraphsCoord,
    Svg: VelocidadRelativaGraphsSvg,
  },
  "encuentros-y-persecuciones": {
    Coord: EncuentrosYPersecucionesGraphsCoord,
    Svg: EncuentrosYPersecucionesGraphsSvg,
  },
  "tiro-horizontal": {
    Coord: TiroHorizontalGraphsCoord,
    Svg: TiroHorizontalGraphsSvg,
  },
  "tiro-vertical": {
    Coord: TiroVerticalGraphsCoord,
    Svg: TiroVerticalGraphsSvg,
  },
  "tiro-parabolico": {
    Coord: TiroParabolicoGraphsCoord,
    Svg: TiroParabolicoGraphsSvg,
  }
};

// Exports individuales para compatibilidad
// Movimiento rectilineo
export { default as MruGraphsCoord } from "./MruGraphsCoord";
export { default as MruGraphsSvg } from "./MruGraphsSvg";
export { default as MruaGraphsCoord } from "./MruaGraphsCoord";
export { default as MruaGraphsSvg } from "./MruaGraphsSvg";
export { default as CaidaLibreGraphsCoord } from "./CaidaLibreGraphsCoord";
export { default as CaidaLibreSvg } from "./CaidaLibreSvg.jsx";

// Movimiento circular
export { default as McuGraphsCoord } from "./McuGraphsCoord";
export { default as McuGraphsSvg } from "./McuGraphsSvg";
export { default as McuaGraphsCoord } from "./McuaGraphsCoord";
export { default as McuaGraphsSvg } from "./McuaGraphsSvg";

// Rotación
export { default as MagnitudesAngularesGraphsCoord } from "./MagnitudesAngularesGraphsCoord";
export { default as CinematicaRotacionalGraphsCoord } from "./CinematicaRotacionalGraphsCoord";
export { default as CinematicaRotacionalGraphsSvg } from "./CinematicaRotacionalGraphsSvg";
export { default as RelacionLinealAngularGraphsCoord } from "./RelacionLinealAngularGraphsCoord";
export { default as RodaduraCinematicaSinDeslizamientoGraphsCoord } from "./RodaduraCinematicaSinDeslizamientoGraphsCoord";
export { default as RodaduraCinematicaSinDeslizamientoGraphsSvg } from "./RodaduraCinematicaSinDeslizamientoGraphsSvg";

// Movimiento relativo
export { default as SistemasReferenciaGraphsCoord } from "./SistemasReferenciaGraphsCoord";
export { default as SistemasReferenciaGraphsSvg } from "./SistemasReferenciaGraphsSvg";
export { default as VelocidadRelativaGraphsCoord } from "./VelocidadRelativaGraphsCoord";
export { default as VelocidadRelativaGraphsSvg } from "./VelocidadRelativaGraphsSvg";
export { default as EncuentrosYPersecucionesGraphsCoord } from "./EncuentrosYPersecucionesGraphsCoord";
export { default as EncuentrosYPersecucionesGraphsSvg } from "./EncuentrosYPersecucionesGraphsSvg";


export { default as TiroHorizontalGraphsCoord } from "./TiroHorizontalGraphsCoord";
export { default as TiroHorizontalGraphsSvg } from "./TiroHorizontalGraphsSvg";
export { default as TiroVerticalGraphsCoord } from "./TiroVerticalGraphsCoord";
export { default as TiroVerticalGraphsSvg } from "./TiroVerticalGraphsSvg";
export { default as TiroParabolicoGraphsCoord } from "./TiroParabolicoGraphsCoord";
export { default as TiroParabolicoGraphsSvg } from "./TiroParabolicoGraphsSvg";

