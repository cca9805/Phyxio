/**
 * Trabajo y Energia - Graph Components Index
 */

import TrabajoGraphsCoord from "./TrabajoGraphsCoord";
import TrabajoFuerzaVariableGraphsCoord from "./TrabajoFuerzaVariableGraphsCoord";
import PotenciaGraphsCoord from "./PotenciaGraphsCoord";
import EnergiaCineticaGraphsCoord from "./EnergiaCineticaGraphsCoord";
import EnergiaPotencialGravitatoriaGraphsCoord from "./EnergiaPotencialGravitatoriaGraphsCoord";
import EnergiaPotencialElasticaGraphsCoord from "./EnergiaPotencialElasticaGraphsCoord";
import EnergiaPotencialElasticaGraphsDcl from "./EnergiaPotencialElasticaGraphsDcl";
import PrincipioDeConservacionGraphsCoord from "./PrincipioDeConservacionGraphsCoord";
import SistemasConservativosGraphsCoord from "./SistemasConservativosGraphsCoord";
import SistemasConservativosGraphsSvg from "./SistemasConservativosGraphsSvg";
import RozamientoYDisipacionGraphsCoord from "./RozamientoYDisipacionGraphsCoord";
import RozamientoYDisipacionGraphsDcl from "./RozamientoYDisipacionGraphsDcl";
import TrabajoDeFuerzasNoConservativasGraphsCoord from "./TrabajoDeFuerzasNoConservativasGraphsCoord";
import EnergiaCineticaRotacionalGraphsCoord from "./EnergiaCineticaRotacionalGraphsCoord";
import TrabajoYTorqueGraphsCoord from "./TrabajoYTorqueGraphsCoord";

export const graphs = {
  "trabajo": {
    Coord: TrabajoGraphsCoord,
  },
  "trabajo-fuerza-variable": {
    Coord: TrabajoFuerzaVariableGraphsCoord,
  },
  "potencia": {
    Coord: PotenciaGraphsCoord,
  },
  "energia-cinetica": {
    Coord: EnergiaCineticaGraphsCoord,
  },
  "energia-potencial-gravitatoria": {
    Coord: EnergiaPotencialGravitatoriaGraphsCoord,
  },
  "energia-potencial-elastica": {
    Coord: EnergiaPotencialElasticaGraphsCoord,
    Dcl: EnergiaPotencialElasticaGraphsDcl,
  },
  "principio-de-conservacion": {
    Coord: PrincipioDeConservacionGraphsCoord,
  },
  "sistemas-conservativos": {
    Coord: SistemasConservativosGraphsCoord,
    Svg: SistemasConservativosGraphsSvg,
  },
  "rozamiento-y-disipacion": {
    Coord: RozamientoYDisipacionGraphsCoord,
    Dcl: RozamientoYDisipacionGraphsDcl,
  },
  "trabajo-de-fuerzas-no-conservativas": {
    Coord: TrabajoDeFuerzasNoConservativasGraphsCoord,
  },
  "energia-cinetica-rotacional": {
    Coord: EnergiaCineticaRotacionalGraphsCoord,
  },
  "trabajo-y-torque": {
    Coord: TrabajoYTorqueGraphsCoord,
  },
};

export { default as TrabajoGraphsCoord } from "./TrabajoGraphsCoord";
export { default as TrabajoFuerzaVariableGraphsCoord } from "./TrabajoFuerzaVariableGraphsCoord";
export { default as PotenciaGraphsCoord } from "./PotenciaGraphsCoord";
export { default as EnergiaCineticaGraphsCoord } from "./EnergiaCineticaGraphsCoord";
export { default as EnergiaPotencialGravitatoriaGraphsCoord } from "./EnergiaPotencialGravitatoriaGraphsCoord";
export { default as EnergiaPotencialElasticaGraphsCoord } from "./EnergiaPotencialElasticaGraphsCoord";
export { default as EnergiaPotencialElasticaGraphsDcl } from "./EnergiaPotencialElasticaGraphsDcl";
export { default as PrincipioDeConservacionGraphsCoord } from "./PrincipioDeConservacionGraphsCoord";
export { default as SistemasConservativosGraphsCoord } from "./SistemasConservativosGraphsCoord";
export { default as SistemasConservativosGraphsSvg } from "./SistemasConservativosGraphsSvg";
export { default as RozamientoYDisipacionGraphsCoord } from "./RozamientoYDisipacionGraphsCoord";
export { default as RozamientoYDisipacionGraphsDcl } from "./RozamientoYDisipacionGraphsDcl";
export { default as TrabajoDeFuerzasNoConservativasGraphsCoord } from "./TrabajoDeFuerzasNoConservativasGraphsCoord";
export { default as EnergiaCineticaRotacionalGraphsCoord } from "./EnergiaCineticaRotacionalGraphsCoord";
export { default as TrabajoYTorqueGraphsCoord } from "./TrabajoYTorqueGraphsCoord";
