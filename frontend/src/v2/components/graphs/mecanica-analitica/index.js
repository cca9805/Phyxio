import MecanicaAnaliticaGraphsCoord from "./MecanicaAnaliticaGraphsCoord";
import MecanicaAnaliticaGraphsDcl from "./MecanicaAnaliticaGraphsDcl";
import MecanicaAnaliticaGraphsSvg from "./MecanicaAnaliticaGraphsSvg";

const common = {
  Coord: MecanicaAnaliticaGraphsCoord,
  Dcl: MecanicaAnaliticaGraphsDcl,
  Svg: MecanicaAnaliticaGraphsSvg,
};

const leafRoutes = [
  "fisica-clasica/mecanica/mecanica-analitica/coordenadas-generalizadas",
  "fisica-clasica/mecanica/mecanica-analitica/ligaduras-y-grados-de-libertad",
  "fisica-clasica/mecanica/mecanica-analitica/lagrangiano/energia-cinetica-y-potencial",
  "fisica-clasica/mecanica/mecanica-analitica/lagrangiano/ecuaciones-de-lagrange",
  "fisica-clasica/mecanica/mecanica-analitica/lagrangiano/simetrias-y-conservaciones/  (Noether intro)",
  "fisica-clasica/mecanica/mecanica-analitica/hamiltoniano/transformacion-legendre",
  "fisica-clasica/mecanica/mecanica-analitica/hamiltoniano/ecuaciones-de-hamilton",
  "fisica-clasica/mecanica/mecanica-analitica/aplicaciones/oscilador-armonico",
  "fisica-clasica/mecanica/mecanica-analitica/aplicaciones/pendulo",
  "fisica-clasica/mecanica/mecanica-analitica/aplicaciones/problemas-con-ligaduras",
];

const byRoute = Object.fromEntries(leafRoutes.map((route) => [route, common]));

const byId = {
  "coordenadas-generalizadas": common,
  "ligaduras-y-grados-de-libertad": common,
  "energia-cinetica-y-potencial": common,
  "ecuaciones-de-lagrange": common,
  "simetrias-y-conservaciones/  (Noether intro)": common,
  "(Noether intro)": common,
  "transformacion-legendre": common,
  "ecuaciones-de-hamilton": common,
  "oscilador-armonico": common,
  pendulo: common,
  "problemas-con-ligaduras": common,
};

export const graphs = {
  ...byId,
  ...byRoute,
};

