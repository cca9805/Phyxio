/**
 * Cantidad de movimiento - Graph Components Index
 */

import MomentoLinealGraphsCoord from "./MomentoLinealGraphsCoord";
import ImpulsoGraphsCoord from "./ImpulsoGraphsCoord";
import SistemasAisladosGraphsCoord from "./SistemasAisladosGraphsCoord";
import SistemasAisladosGraphsSvg from "./SistemasAisladosGraphsSvg";
import PrincipioDeConservacionMomentoGraphsCoord from "./PrincipioDeConservacionMomentoGraphsCoord";
import CentroDeMasasMecGraphsCoord from "./CentroDeMasasMecGraphsCoord";
import CentroDeMasasMecGraphsSvg from "./CentroDeMasasMecGraphsSvg";
import ColisionesElasticasGraphsCoord from "./ColisionesElasticasGraphsCoord";
import ColisionesElasticasGraphsDcl from "./ColisionesElasticasGraphsDcl";
import ColisionesInelasticasGraphsCoord from "./ColisionesInelasticasGraphsCoord";
import ColisionesInelasticasGraphsDcl from "./ColisionesInelasticasGraphsDcl";
import ColisionesTotalmenteInelasticasGraphsCoord from "./ColisionesTotalmenteInelasticasGraphsCoord";
import ColisionesTotalmenteInelasticasGraphsDcl from "./ColisionesTotalmenteInelasticasGraphsDcl";
import DefinicionMomentoAngularGraphsCoord from "./DefinicionMomentoAngularGraphsCoord";
import ConservacionMomentoAngularGraphsCoord from "./ConservacionMomentoAngularGraphsCoord";
import PrecesionGraphsCoord from "./PrecesionGraphsCoord";

export const graphs = {
  "momento-lineal": {
    Coord: MomentoLinealGraphsCoord,
  },
  impulso: {
    Coord: ImpulsoGraphsCoord,
  },
  "sistemas-aislados": {
    Coord: SistemasAisladosGraphsCoord,
    Svg: SistemasAisladosGraphsSvg,
  },
  "principio-de-conservacion": {
    Coord: PrincipioDeConservacionMomentoGraphsCoord,
  },
  "centro-de-masas-mec": {
    Coord: CentroDeMasasMecGraphsCoord,
    Svg: CentroDeMasasMecGraphsSvg,
  },
  "centro-de-masas": {
    Coord: CentroDeMasasMecGraphsCoord,
    Svg: CentroDeMasasMecGraphsSvg,
  },
  "colisiones-elasticas": {
    Coord: ColisionesElasticasGraphsCoord,
    Dcl: ColisionesElasticasGraphsDcl,
  },
  "colisiones-inelasticas": {
    Coord: ColisionesInelasticasGraphsCoord,
    Dcl: ColisionesInelasticasGraphsDcl,
  },
  "colisiones-totalmente-inelasticas": {
    Coord: ColisionesTotalmenteInelasticasGraphsCoord,
    Dcl: ColisionesTotalmenteInelasticasGraphsDcl,
  },
  "definicion-momento-angular": {
    Coord: DefinicionMomentoAngularGraphsCoord,
  },
  "conservacion-momento-angular": {
    Coord: ConservacionMomentoAngularGraphsCoord,
  },
  precesion: {
    Coord: PrecesionGraphsCoord,
  },
};

export { default as MomentoLinealGraphsCoord } from "./MomentoLinealGraphsCoord";
export { default as ImpulsoGraphsCoord } from "./ImpulsoGraphsCoord";
export { default as SistemasAisladosGraphsCoord } from "./SistemasAisladosGraphsCoord";
export { default as SistemasAisladosGraphsSvg } from "./SistemasAisladosGraphsSvg";
export { default as PrincipioDeConservacionMomentoGraphsCoord } from "./PrincipioDeConservacionMomentoGraphsCoord";
export { default as CentroDeMasasMecGraphsCoord } from "./CentroDeMasasMecGraphsCoord";
export { default as CentroDeMasasMecGraphsSvg } from "./CentroDeMasasMecGraphsSvg";
export { default as ColisionesElasticasGraphsCoord } from "./ColisionesElasticasGraphsCoord";
export { default as ColisionesElasticasGraphsDcl } from "./ColisionesElasticasGraphsDcl";
export { default as ColisionesInelasticasGraphsCoord } from "./ColisionesInelasticasGraphsCoord";
export { default as ColisionesInelasticasGraphsDcl } from "./ColisionesInelasticasGraphsDcl";
export { default as ColisionesTotalmenteInelasticasGraphsCoord } from "./ColisionesTotalmenteInelasticasGraphsCoord";
export { default as ColisionesTotalmenteInelasticasGraphsDcl } from "./ColisionesTotalmenteInelasticasGraphsDcl";
export { default as DefinicionMomentoAngularGraphsCoord } from "./DefinicionMomentoAngularGraphsCoord";
export { default as ConservacionMomentoAngularGraphsCoord } from "./ConservacionMomentoAngularGraphsCoord";
export { default as PrecesionGraphsCoord } from "./PrecesionGraphsCoord";
