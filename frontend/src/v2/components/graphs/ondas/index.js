import React from "react";
import OndasGraphsCoord from "./OndasGraphsCoord";
import OndasGraphsSvg from "./OndasGraphsSvg";
import ConceptoDeOndaGraphsCoord from "./ConceptoDeOndaGraphsCoord";
import MecanicasGraphsCoord from "./MecanicasGraphsCoord";
import ElectromagneticasGraphsCoord from "./ElectromagneticasGraphsCoord";
import OndasTransversalesYLongitudinalesGraphsCoord from "./OndasTransversalesYLongitudinalesGraphsCoord";
import OndasTransversalesYLongitudinalesGraphsSvg from "./OndasTransversalesYLongitudinalesGraphsSvg";
import LongitudDeOndaGraphsCoord from "./LongitudDeOndaGraphsCoord";
import LongitudDeOndaGraphsSvg from "./LongitudDeOndaGraphsSvg";
import FrecuenciaYPeriodoGraphsCoord from "./FrecuenciaYPeriodoGraphsCoord";
import VelocidadDePropagacionGraphsCoord from "./VelocidadDePropagacionGraphsCoord";
import VelocidadDePropagacionGraphsSvg from "./VelocidadDePropagacionGraphsSvg";
import CuerdasVelocidadDePropagacionGraphsCoord from "./CuerdasVelocidadDePropagacionGraphsCoord";
import CuerdasVelocidadDePropagacionGraphsSvg from "./CuerdasVelocidadDePropagacionGraphsSvg";
import CuerdasOndasEstacionariasGraphsCoord from "./CuerdasOndasEstacionariasGraphsCoord";
import CuerdasOndasEstacionariasGraphsSvg from "./CuerdasOndasEstacionariasGraphsSvg";
import CuerdasArmonicosGraphsCoord from "./CuerdasArmonicosGraphsCoord";
import CuerdasArmonicosGraphsSvg from "./CuerdasArmonicosGraphsSvg";
import OndasSuperficialesGraphsCoord from "./OndasSuperficialesGraphsCoord";
import OndasSuperficialesGraphsSvg from "./OndasSuperficialesGraphsSvg";
import OndasLongitudinalesFluidosGraphsCoord from "./OndasLongitudinalesFluidosGraphsCoord";
import OndasLongitudinalesFluidosGraphsSvg from "./OndasLongitudinalesFluidosGraphsSvg";
import FaseGraphsCoord from "./FaseGraphsCoord";
import EcuacionDeOndaGraphsCoord from "./EcuacionDeOndaGraphsCoord";

const graphByType = {
  Coord: OndasGraphsCoord,
  Svg: OndasGraphsSvg,
};

function wrapWithLeafProfile(Comp, leafProfileId) {
  const Wrapped = (props) => React.createElement(Comp, { ...props, leafProfileId });
  Wrapped.displayName = `OndasLeafGraph(${leafProfileId || "default"})`;
  return Wrapped;
}

function graphSet(types = [], components = null, leafProfileId = "") {
  const safeTypes = Array.isArray(types) && types.length ? types : ["Coord"];
  const out = {};
  if (components && typeof components === "object") {
    for (const t of safeTypes) {
      if (typeof components[t] === "function") out[t] = wrapWithLeafProfile(components[t], leafProfileId);
    }
    if (Object.keys(out).length) return out;
  }
  for (const t of safeTypes) {
    if (graphByType[t]) out[t] = wrapWithLeafProfile(graphByType[t], leafProfileId);
  }
  if (!Object.keys(out).length) out.Coord = wrapWithLeafProfile(OndasGraphsCoord, leafProfileId);
  return out;
}

const ondaLeaves = [
  {
    id: "concepto-de-onda",
    route: "fisica-clasica/ondas/fundamentos/concepto-de-onda",
    graficos: ["Coord"],
    components: { Coord: ConceptoDeOndaGraphsCoord },
  },
  {
    id: "mecanicas",
    route: "fisica-clasica/ondas/fundamentos/tipos-de-ondas/mecanicas",
    graficos: ["Coord"],
    components: { Coord: MecanicasGraphsCoord },
  },
  {
    id: "electromagneticas",
    route: "fisica-clasica/ondas/fundamentos/tipos-de-ondas/electromagneticas",
    graficos: ["Coord"],
    components: { Coord: ElectromagneticasGraphsCoord },
  },
  {
    id: "ondas-transversales-y-longitudinales",
    route: "fisica-clasica/ondas/fundamentos/ondas-transversales-y-longitudinales",
    graficos: ["Coord", "Svg"],
    components: {
      Coord: OndasTransversalesYLongitudinalesGraphsCoord,
      Svg: OndasTransversalesYLongitudinalesGraphsSvg,
    },
  },
  {
    id: "longitud-de-onda",
    route: "fisica-clasica/ondas/fundamentos/magnitudes-ondulatorias/longitud-de-onda",
    graficos: ["Coord", "Svg"],
    components: { Coord: LongitudDeOndaGraphsCoord, Svg: LongitudDeOndaGraphsSvg },
  },
  {
    id: "frecuencia-y-periodo",
    route: "fisica-clasica/ondas/fundamentos/magnitudes-ondulatorias/frecuencia-y-periodo",
    graficos: ["Coord"],
    components: { Coord: FrecuenciaYPeriodoGraphsCoord },
  },
  {
    id: "velocidad-de-propagacion",
    route: "fisica-clasica/ondas/fundamentos/magnitudes-ondulatorias/velocidad-de-propagacion",
    graficos: ["Coord", "Svg"],
    components: { Coord: VelocidadDePropagacionGraphsCoord, Svg: VelocidadDePropagacionGraphsSvg },
  },
  {
    id: "fase",
    route: "fisica-clasica/ondas/fundamentos/magnitudes-ondulatorias/fase",
    graficos: ["Coord"],
    components: { Coord: FaseGraphsCoord },
  },
  {
    id: "ecuacion-de-onda",
    route: "fisica-clasica/ondas/fundamentos/ecuacion-de-onda",
    graficos: ["Coord"],
    components: { Coord: EcuacionDeOndaGraphsCoord },
  },
  {
    id: "velocidad-de-propagacion",
    route: "fisica-clasica/ondas/ondas-mecanicas/ondas-en-cuerdas/velocidad-de-propagacion",
    graficos: ["Coord", "Svg"],
    components: {
      Coord: CuerdasVelocidadDePropagacionGraphsCoord,
      Svg: CuerdasVelocidadDePropagacionGraphsSvg,
    },
  },
  {
    id: "ondas-estacionarias",
    route: "fisica-clasica/ondas/ondas-mecanicas/ondas-en-cuerdas/ondas-estacionarias",
    graficos: ["Coord", "Svg"],
    components: {
      Coord: CuerdasOndasEstacionariasGraphsCoord,
      Svg: CuerdasOndasEstacionariasGraphsSvg,
    },
  },
  {
    id: "armonicos",
    route: "fisica-clasica/ondas/ondas-mecanicas/ondas-en-cuerdas/armonicos",
    graficos: ["Coord", "Svg"],
    components: {
      Coord: CuerdasArmonicosGraphsCoord,
      Svg: CuerdasArmonicosGraphsSvg,
    },
  },
  {
    id: "ondas-superficiales",
    route: "fisica-clasica/ondas/ondas-mecanicas/ondas-en-fluidos/ondas-superficiales",
    graficos: ["Coord", "Svg"],
    components: {
      Coord: OndasSuperficialesGraphsCoord,
      Svg: OndasSuperficialesGraphsSvg,
    },
  },
  {
    id: "ondas-longitudinales",
    route: "fisica-clasica/ondas/ondas-mecanicas/ondas-en-fluidos/ondas-longitudinales",
    graficos: ["Coord", "Svg"],
    components: {
      Coord: OndasLongitudinalesFluidosGraphsCoord,
      Svg: OndasLongitudinalesFluidosGraphsSvg,
    },
  },
  { id: "introduccion", route: "fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/introduccion", graficos: ["Coord", "Svg"] },
  { id: "propiedades-elasticas-del-solido", route: "fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/propiedades-elasticas-del-solido", graficos: ["Coord", "Svg"] },
  { id: "tipos-de-ondas-en-solidos", route: "fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/tipos-de-ondas-en-solidos", graficos: ["Coord", "Svg"] },
  { id: "ondas-longitudinales-en-barras", route: "fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/ondas-longitudinales-en-barras", graficos: ["Coord", "Svg"] },
  { id: "ondas-transversales-de-corte", route: "fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/ondas-transversales-de-corte", graficos: ["Coord", "Svg"] },
  { id: "relacion-entre-modulos-elasticos", route: "fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/relacion-entre-modulos-elasticos", graficos: ["Coord", "Svg"] },
  { id: "ondas-flexionales-en-vigas", route: "fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/ondas-flexionales-en-vigas", graficos: ["Coord", "Svg"] },
  { id: "ondas-superficiales-rayleigh", route: "fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/ondas-superficiales-rayleigh", graficos: ["Coord", "Svg"] },
  { id: "ondas-sismicas-p-y-s", route: "fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/ondas-sismicas-p-y-s", graficos: ["Coord", "Svg"] },
  { id: "reflexion-y-transmision-en-solidos", route: "fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/reflexion-y-transmision-en-solidos", graficos: ["Coord", "Svg"] },
  { id: "impedancia-mecanica-en-solidos", route: "fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/impedancia-mecanica-en-solidos", graficos: ["Coord", "Svg"] },
  { id: "dispersion-y-atenuacion-en-solidos", route: "fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/dispersion-y-atenuacion-en-solidos", graficos: ["Coord", "Svg"] },
  { id: "resonancia-y-modos-en-barras", route: "fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/resonancia-y-modos-en-barras", graficos: ["Coord", "Svg"] },
  { id: "modos-en-placas-y-membranas", route: "fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/modos-en-placas-y-membranas", graficos: ["Coord", "Svg"] },
  { id: "aplicaciones-ultrasonidos-y-ensayos", route: "fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/aplicaciones-ultrasonidos-y-ensayos", graficos: ["Coord", "Svg"] },
  { id: "reflexion", route: "fisica-clasica/ondas/fenomenos-ondulatorios/reflexion", graficos: ["Svg"] },
  { id: "ley-de-snell", route: "fisica-clasica/ondas/fenomenos-ondulatorios/refraccion/ley-de-snell", graficos: ["Coord"] },
  { id: "cambio-de-velocidad", route: "fisica-clasica/ondas/fenomenos-ondulatorios/refraccion/cambio-de-velocidad", graficos: ["Coord", "Svg"] },
  { id: "superposicion", route: "fisica-clasica/ondas/fenomenos-ondulatorios/superposicion", graficos: ["Coord"] },
  { id: "interferencia-constructiva", route: "fisica-clasica/ondas/fenomenos-ondulatorios/interferencia/interferencia-constructiva", graficos: ["Coord"] },
  { id: "interferencia-destructiva", route: "fisica-clasica/ondas/fenomenos-ondulatorios/interferencia/interferencia-destructiva", graficos: ["Coord"] },
  { id: "difraccion", route: "fisica-clasica/ondas/fenomenos-ondulatorios/difraccion", graficos: ["Coord"] },
  { id: "condicion-de-estacionariedad", route: "fisica-clasica/ondas/ondas-estacionarias/condicion-de-estacionariedad", graficos: ["Coord"] },
  { id: "nodos-y-antinodos", route: "fisica-clasica/ondas/ondas-estacionarias/nodos-y-antinodos", graficos: ["Coord"] },
  { id: "resonancia", route: "fisica-clasica/ondas/ondas-estacionarias/resonancia", graficos: ["Coord"] },
  { id: "cuerdas", route: "fisica-clasica/ondas/ondas-estacionarias/ejemplos-clasicos/cuerdas", graficos: ["Coord"] },
  { id: "tubos", route: "fisica-clasica/ondas/ondas-estacionarias/ejemplos-clasicos/tubos", graficos: ["Coord"] },
  { id: "naturaleza-del-sonido", route: "fisica-clasica/ondas/sonido/naturaleza-del-sonido", graficos: ["Coord", "Svg"] },
  { id: "velocidad-del-sonido", route: "fisica-clasica/ondas/sonido/velocidad-del-sonido", graficos: ["Coord", "Svg"] },
  { id: "intensidad-y-nivel-sonoro", route: "fisica-clasica/ondas/sonido/intensidad-y-nivel-sonoro", graficos: ["Coord"] },
  { id: "tono-y-timbre", route: "fisica-clasica/ondas/sonido/tono-y-timbre", graficos: ["Coord"] },
  { id: "efecto-doppler", route: "fisica-clasica/ondas/sonido/efecto-doppler", graficos: ["Coord"] },
  { id: "aplicaciones", route: "fisica-clasica/ondas/sonido/aplicaciones", graficos: ["Coord"] },
  { id: "naturaleza-de-las-ondas-em", route: "fisica-clasica/ondas/ondas-electromagneticas/naturaleza-de-las-ondas-em", graficos: ["Coord", "Svg"] },
  { id: "espectro-electromagnetico", route: "fisica-clasica/ondas/ondas-electromagneticas/espectro-electromagnetico", graficos: ["Coord"] },
  { id: "velocidad-de-la-luz", route: "fisica-clasica/ondas/ondas-electromagneticas/velocidad-de-la-luz", graficos: ["Coord", "Svg"] },
  { id: "comparacion-con-ondas-mecanicas", route: "fisica-clasica/ondas/ondas-electromagneticas/comparacion-con-ondas-mecanicas", graficos: ["Coord", "Svg"] },
  { id: "energia-de-una-onda", route: "fisica-clasica/ondas/energia-y-transporte/energia-de-una-onda", graficos: ["Coord", "Svg"] },
  { id: "intensidad-ondulatoria", route: "fisica-clasica/ondas/energia-y-transporte/intensidad-ondulatoria", graficos: ["Coord"] },
  { id: "flujo-de-energia", route: "fisica-clasica/ondas/energia-y-transporte/flujo-de-energia", graficos: ["Coord"] },
];

const byRoute = Object.fromEntries(
  ondaLeaves.map(({ id, route, graficos, components }) => [route, graphSet(graficos, components, id)])
);

const byId = Object.fromEntries(
  ondaLeaves.map(({ id, graficos, components }) => [id, graphSet(graficos, components, id)])
);

export const graphs = {
  ...byId,
  ...byRoute,
};
