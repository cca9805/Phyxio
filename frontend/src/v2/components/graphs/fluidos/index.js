import FluidosGraphsCoord from "./FluidosGraphsCoord";
import FluidosGraphsSvg from "./FluidosGraphsSvg";
import FluidosGraphsDcl from "./FluidosGraphsDcl";

const graphPair = { Coord: FluidosGraphsCoord, Svg: FluidosGraphsSvg };
const graphTriplet = { Coord: FluidosGraphsCoord, Svg: FluidosGraphsSvg, Dcl: FluidosGraphsDcl };
const graphSet = (withDcl) => (withDcl ? graphTriplet : graphPair);

const fluidLeaves = [
  {
    id: "concepto-de-fluido",
    route: "fisica-clasica/mecanica/fluidos/fundamentos/concepto-de-fluido",
    dcl: false,
  },
  { id: "densidad", route: "fisica-clasica/mecanica/fluidos/fundamentos/densidad", dcl: false },
  { id: "presion", route: "fisica-clasica/mecanica/fluidos/fundamentos/presion", dcl: false },
  {
    id: "compresibilidad",
    route: "fisica-clasica/mecanica/fluidos/fundamentos/compresibilidad",
    dcl: false,
  },
  {
    id: "tension-superficial",
    route: "fisica-clasica/mecanica/fluidos/fundamentos/tension-superficial",
    dcl: false,
  },
  {
    id: "presion-hidrostatica",
    route: "fisica-clasica/mecanica/fluidos/estatica-de-fluidos/presion-hidrostatica",
    dcl: true,
  },
  {
    id: "principio-fundamental-de-la-hidrostatica",
    route: "fisica-clasica/mecanica/fluidos/estatica-de-fluidos/principio-fundamental-de-la-hidrostatica",
    dcl: true,
  },
  {
    id: "principio-de-pascal",
    route: "fisica-clasica/mecanica/fluidos/estatica-de-fluidos/principio-de-pascal",
    dcl: true,
  },
  {
    id: "principio-de-arquimedes",
    route: "fisica-clasica/mecanica/fluidos/estatica-de-fluidos/principio-de-arquimedes",
    dcl: true,
  },
  {
    id: "manometros",
    route: "fisica-clasica/mecanica/fluidos/estatica-de-fluidos/aplicaciones/manometros",
    dcl: true,
  },
  {
    id: "vasos-comunicantes",
    route: "fisica-clasica/mecanica/fluidos/estatica-de-fluidos/aplicaciones/vasos-comunicantes",
    dcl: false,
  },
  {
    id: "flotacion",
    route: "fisica-clasica/mecanica/fluidos/estatica-de-fluidos/aplicaciones/flotacion",
    dcl: true,
  },
  {
    id: "ecuacion-de-continuidad",
    route: "fisica-clasica/mecanica/fluidos/dinamica-de-fluidos/ecuacion-de-continuidad",
    dcl: false,
  },
  {
    id: "ecuacion-de-bernoulli",
    route: "fisica-clasica/mecanica/fluidos/dinamica-de-fluidos/ecuacion-de-bernoulli",
    dcl: false,
  },
  {
    id: "efecto-venturi",
    route: "fisica-clasica/mecanica/fluidos/dinamica-de-fluidos/aplicaciones-de-bernoulli/efecto-venturi",
    dcl: false,
  },
  {
    id: "tubo-de-pitot",
    route: "fisica-clasica/mecanica/fluidos/dinamica-de-fluidos/aplicaciones-de-bernoulli/tubo-de-pitot",
    dcl: false,
  },
  {
    id: "sustentacion",
    route: "fisica-clasica/mecanica/fluidos/dinamica-de-fluidos/aplicaciones-de-bernoulli/sustentacion",
    dcl: true,
  },
  {
    id: "ecuacion-de-navier-stokes-intro",
    route: "fisica-clasica/mecanica/fluidos/dinamica-de-fluidos/ecuaciones-del-movimiento/ecuacion-de-navier-stokes-intro",
    dcl: false,
  },
  {
    id: "viscosidad",
    route: "fisica-clasica/mecanica/fluidos/viscosidad-y-regimenes/viscosidad",
    dcl: false,
  },
  {
    id: "flujo-laminar",
    route: "fisica-clasica/mecanica/fluidos/viscosidad-y-regimenes/flujo-laminar",
    dcl: false,
  },
  {
    id: "flujo-turbulento",
    route: "fisica-clasica/mecanica/fluidos/viscosidad-y-regimenes/flujo-turbulento",
    dcl: false,
  },
  {
    id: "numero-de-reynolds",
    route: "fisica-clasica/mecanica/fluidos/viscosidad-y-regimenes/numero-de-reynolds",
    dcl: false,
  },
  {
    id: "perdidas-de-carga",
    route: "fisica-clasica/mecanica/fluidos/viscosidad-y-regimenes/perdidas-de-carga",
    dcl: false,
  },
  {
    id: "flujo-en-tuberias",
    route: "fisica-clasica/mecanica/fluidos/fluidos-reales/flujo-en-tuberias",
    dcl: false,
  },
  {
    id: "aerodinamica-basica",
    route: "fisica-clasica/mecanica/fluidos/fluidos-reales/aerodinamica-basica",
    dcl: true,
  },
  {
    id: "hidrodinamica",
    route: "fisica-clasica/mecanica/fluidos/fluidos-reales/hidrodinamica",
    dcl: false,
  },
  {
    id: "aplicaciones-ingenieriles",
    route: "fisica-clasica/mecanica/fluidos/fluidos-reales/aplicaciones-ingenieriles",
    dcl: false,
  },
  {
    id: "ondas-superficiales",
    route: "fisica-clasica/mecanica/fluidos/ondas-en-fluidos/ondas-superficiales",
    dcl: false,
  },
  {
    id: "ondas-longitudinales",
    route: "fisica-clasica/mecanica/fluidos/ondas-en-fluidos/ondas-longitudinales",
    dcl: false,
  },
  {
    id: "introduccion-al-sonido",
    route: "fisica-clasica/mecanica/fluidos/ondas-en-fluidos/introduccion-al-sonido",
    dcl: false,
  },
];

const byRoute = Object.fromEntries(
  fluidLeaves.map(({ route, dcl }) => [route, graphSet(dcl)])
);

const byId = Object.fromEntries(
  fluidLeaves.map(({ id, dcl }) => [id, graphSet(dcl)])
);

export const graphs = {
  ...byId,
  ...byRoute,
};
