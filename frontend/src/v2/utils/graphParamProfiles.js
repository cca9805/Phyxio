// src/v2/utils/graphs/cinematica/graphParamProfiles.js
//
// Perfiles de lectura de parámetros para que los Graphs
// consuman sharedParams aunque haya variaciones de naming.
// Importa pickParam(params, keys, fallback) desde utils/graphs/pickParamGraphs.js

export const CINEMATICA_PARAM_PROFILES = {
  // Base útil para casi todos
  base: {
    // tiempo
    t: ["t"],
    tMax: ["tMax", "t_max", "tmax", "T", "tFinal", "t_final"],

    // posiciones 1D/2D
    x: ["x"],
    y: ["y"],
    x0: ["x0", "x_0"],
    y0: ["y0", "y_0"],
    dx: ["dx", "Δx", "deltaX", "DeltaX"],
    dy: ["dy", "Δy", "deltaY", "DeltaY"],

    // velocidades 1D
    v: ["v"],
    v0: ["v0", "v_0"],

    // aceleraciones 1D
    a: ["a"],
    g: ["g"],

    // 2D componentes
    vx: ["vx", "v_x"],
    vy: ["vy", "v_y"],
    vx0: ["vx0", "vx_0", "v_x0", "v{x0}", "v_{x0}", "vX0"],
    vy0: ["vy0", "vy_0", "v_y0", "v{y0}", "v_{y0}", "vY0"],
    ax: ["ax", "a_x", "aX"],
    ay: ["ay", "a_y", "aY"],

    // Tiro
    h: ["h", "altura", "height"],
    R: ["R", "alcance", "range"],
    theta: ["theta", "θ", "angulo", "angle"],
  },

  // MRU (x = x0 + v t)
  mru: {
    x0: ["x0", "x_0"],
    v: ["v"],
    t: ["t"],
    tMax: ["tMax", "t"], // para rango de gráfico, si solo hay t
    x: ["x"],
  },

  // MRUA 1D
  mrua: {
    x0: ["x0", "x_0"],
    v0: ["v0", "v_0"],
    v: ["v"],
    a: ["a"],
    t: ["t"],
    tMax: ["tMax", "t"],
    x: ["x"],
    dx: ["dx", "Δx"],
  },

  // Caída libre (vertical)
  "caida-libre": {
    y0: ["y0", "y_0", "h"],  // a veces el usuario mete "h" como y0
    y: ["y"],
    v0: ["v0", "v_0"],
    v: ["v"],
    g: ["g"],
    a: ["a"],               // por si a=-g
    t: ["t"],
    tMax: ["tMax", "t"],
    dy: ["dy", "Δy"],
    h: ["h"],
  },

  // Tiro vertical (vertical con subida/bajada)
  "tiro-vertical": {
    y0: ["y0", "y_0"],
    y: ["y"],
    v0: ["v0", "v_0"],
    v: ["v"],
    g: ["g"],
    t: ["t"],
    tMax: ["tMax", "t"],
    dy: ["dy", "Δy"],
    tPeak: ["tPeak", "tMax", "t_max"], // por si en futuro calculas el ápice
    yPeak: ["yPeak", "yMax", "y_max"],
  },

  // Tiro horizontal (2D especial: vx constante, vy inicial = 0 normalmente)
  "tiro-horizontal": {
    x0: ["x0", "x_0"],
    y0: ["y0", "y_0", "h"],
    vx0: ["vx0", "vx", "v0", "v_0"],  // muchos temas usan v0 como velocidad inicial horizontal
    vy0: ["vy0", "vy"],               // suele 0, pero lo soportamos
    g: ["g"],
    t: ["t"],
    tMax: ["tMax", "t"],
    x: ["x"],
    y: ["y"],
    R: ["R", "alcance", "range"],
    h: ["h"],
  },

  // Tiro parabólico (2D con vx0, vy0)
  "tiro-parabolico": {
    x0: ["x0", "x_0"],
    y0: ["y0", "y_0"],
    vx0: ["vx0", "vx", "v0x", "v_x0", "v_{x0}"],
    vy0: ["vy0", "vy", "v0y", "v_y0", "v_{y0}"],
    g: ["g"],
    t: ["t"],
    tMax: ["tMax", "t"],
    x: ["x"],
    y: ["y"],
    R: ["R"],
    theta: ["theta", "θ", "angulo"],
  },

  // Movimiento 2D general
  "movimiento-2d": {
    x0: ["x0", "x_0"],
    y0: ["y0", "y_0"],
    vx0: ["vx0", "vx"], // compat con temas que usan vx como inicial
    vy0: ["vy0", "vy"],
    ax: ["ax", "a_x"],
    ay: ["ay", "a_y"],
    t: ["t"],
    tMax: ["tMax", "t"],
    x: ["x"],
    y: ["y"],
  },

  // Encuentros / persecuciones (1D)
  "encuentros-persecuciones": {
    xA0: ["xA0", "xa0", "x_a0", "x_{A0}"],
    xB0: ["xB0", "xb0", "x_b0", "x_{B0}"],
    vA: ["vA", "va", "v_a", "v_{A}"],
    vB: ["vB", "vb", "v_b", "v_{B}"],
    dt: ["dt", "Δt", "deltaT", "DeltaT"],
    t: ["t"],
    tMax: ["tMax", "t"],
    xMeet: ["xMeet", "x*", "xStar", "x_star"],
  },

  // Movimiento relativo
  "movimiento-relativo": {
    v_rel: ["vRel", "v_rel", "vrel"],
    vA: ["vA", "va"],
    vB: ["vB", "vb"],
    x0: ["x0"],
    t: ["t"],
    tMax: ["tMax", "t"],
  },
};

// Helper: obtener perfil por id, con fallback a base
export function cinematicaProfileFor(motionId) {
  return CINEMATICA_PARAM_PROFILES[motionId] || CINEMATICA_PARAM_PROFILES.base;
}
