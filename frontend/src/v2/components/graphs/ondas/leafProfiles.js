function humanizeSlug(slug = "") {
  const s = String(slug || "").replace(/[-_/]+/g, " ").trim();
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : "Tema";
}

const LEAF_PROFILES = {
  "concepto-de-onda": {
    focus: "Define que es una onda y como leer sus elementos basicos (A, lambda, T y f).",
    formulaVarOrder: ["A", "lambda", "f", "T", "v", "k", "omega", "phi"],
    refVars: { x: "x", y1: "A", y2: "f" },
  },
  mecanicas: {
    focus: "Relaciona propagacion con el medio material y muestra como cambia al variar parametros del medio.",
    formulaVarOrder: ["v", "lambda", "f", "T", "A", "k", "omega"],
    refVars: { x: "f", y1: "lambda", y2: "T" },
  },
  electromagneticas: {
    focus: "Conecta la propagacion electromagnetica con c=lambda*f y lectura de espectro.",
    formulaVarOrder: ["c", "v", "lambda", "f", "T", "omega", "k"],
    refVars: { x: "f", y1: "lambda", y2: "T" },
  },
  "naturaleza-de-las-ondas-em": {
    focus: "Tema de ondas EM: muestra acoplamiento entre E y B, propagacion en vacio y cambio de longitud de onda en medios.",
    formulaVarOrder: ["c", "v", "lambda", "f", "T", "omega", "k", "epsilon0", "mu0", "E", "B", "n"],
    refVars: { x: "f", y1: "v", y2: "lambda" },
  },
  "espectro-electromagnetico": {
    focus: "Tema de espectro EM: conecta banda, frecuencia, longitud de onda y energia por foton para interpretar aplicaciones y riesgo fisico.",
    formulaVarOrder: ["c", "v", "lambda", "f", "T", "h", "E", "E_eV", "e", "n"],
    refVars: { x: "f", y1: "lambda", y2: "E" },
  },
  "ondas-transversales-y-longitudinales": {
    focus: "Diferencia direccion de oscilacion y de propagacion con lectura visual directa.",
    formulaVarOrder: ["A", "lambda", "f", "T", "v", "k", "omega"],
    refVars: { x: "f", y1: "lambda", y2: "T" },
  },
  "naturaleza-del-sonido": {
    focus: "Tema de sonido: interpreta compresiones y rarefacciones, y conecta v=lambda*f con propiedades del medio y variables acusticas locales.",
    formulaVarOrder: ["v", "lambda", "f", "T", "omega", "k", "B", "rho", "Tc", "Z", "p_prima", "u"],
    refVars: { x: "f", y1: "v", y2: "lambda" },
  },
  "velocidad-del-sonido": {
    focus: "Tema de velocidad del sonido: compara modelos por medio y temperatura, y conecta tiempo de vuelo con distancia y eco.",
    formulaVarOrder: ["v", "lambda", "f", "Tc", "TK", "B", "rho", "gamma", "R", "M", "p0", "d", "t"],
    refVars: { x: "Tc", y1: "v", y2: "lambda" },
  },
  "intensidad-y-nivel-sonoro": {
    focus: "Tema de intensidad y nivel sonoro: conecta flujo energetico, ley 1/r^2 y conversion logaritmica en decibelios.",
    formulaVarOrder: ["I", "P", "A", "r", "I0", "beta", "delta_beta", "I1", "I2"],
    refVars: { x: "r", y1: "I", y2: "beta" },
  },
  "tono-y-timbre": {
    focus: "Tema de tono y timbre: diferencia altura tonal de color sonoro mediante armonicos, razones espectrales y envolvente temporal.",
    formulaVarOrder: ["f1", "fn", "n", "An", "A1", "rn", "v", "L", "lambda_n", "fa", "fb", "delta_c", "A_t", "alpha", "t"],
    refVars: { x: "n", y1: "fn", y2: "rn" },
  },
  "efecto-doppler": {
    focus: "Tema de Doppler: relaciona movimiento relativo con corrimiento de frecuencia y exige control estricto del convenio de signos.",
    formulaVarOrder: ["f0", "fobs", "v", "vo", "vs", "delta_f", "z", "u", "beta", "c"],
    refVars: { x: "vs", y1: "fobs", y2: "delta_f" },
  },
  aplicaciones: {
    focus: "Tema integrador de aplicaciones: combina eco, nivel sonoro e inferencia Doppler para resolver escenarios reales con criterio de modelo.",
    formulaVarOrder: ["v", "lambda", "f", "T", "d", "t", "t_echo", "P", "I", "r", "I0", "beta", "f0", "fobs", "vo", "vs", "delta_f"],
    refVars: { x: "r", y1: "I", y2: "beta" },
  },
  "longitud-de-onda": {
    focus: "Analiza lambda como distancia espacial de repeticion y su dependencia con frecuencia.",
    formulaVarOrder: ["lambda", "v", "f", "T", "k", "omega"],
    refVars: { x: "f", y1: "lambda", y2: "T" },
  },
  "frecuencia-y-periodo": {
    focus: "Muestra la relacion inversa entre frecuencia y periodo con conversion inmediata.",
    formulaVarOrder: ["f", "T", "v", "lambda", "omega"],
    refVars: { x: "f", y1: "T", y2: "v" },
  },
  "velocidad-de-propagacion": {
    focus: "Interpreta v como velocidad del patron ondulatorio y compara formulas segun el medio.",
    formulaVarOrder: ["v", "lambda", "f", "T", "omega", "k", "F_t", "mu_l", "B", "rho", "c", "n"],
    refVars: { x: "f", y1: "v", y2: "v" },
  },
  "ondas-superficiales": {
    focus: "Ondas en interfaz aire-agua: compara regimen profundo y somero y elige formula con criterio fisico.",
    formulaVarOrder: ["v", "lambda", "f", "T", "k", "omega", "g", "h", "kh", "v_g"],
    refVars: { x: "lambda", y1: "v", y2: "h" },
  },
  "ondas-longitudinales": {
    focus: "Ondas de compresion en fluidos: vincula medio (B, rho) con velocidad, impedancia y lectura de compresiones/rarefacciones.",
    formulaVarOrder: ["v", "lambda", "f", "T", "k", "omega", "B", "rho", "Z", "p_hat", "u_hat", "I"],
    refVars: { x: "rho", y1: "v", y2: "Z" },
  },
  "cuerdas-velocidad-de-propagacion": {
    focus: "Tema de cuerdas: conecta la velocidad en cuerda tensa con la relacion ondulatoria y la afinacion basica.",
    formulaVarOrder: ["v", "F_t", "mu_l", "lambda", "f", "T", "m", "L", "f1"],
    refVars: { x: "f", y1: "v", y2: "v" },
  },
  "cuerdas-ondas-estacionarias": {
    focus: "Tema de cuerdas: relaciona modos discretos con nodos, antinodos y condicion de resonancia en extremos fijos.",
    formulaVarOrder: ["fn", "n", "v", "L", "lambda_n", "f1", "F_t", "mu_l", "k_n", "omega_n"],
    refVars: { x: "n", y1: "fn", y2: "lambda_n" },
  },
  "cuerdas-armonicos": {
    focus: "Tema de armonicos: conecta fundamental, modos superiores y lectura espectral para interpretar timbre en cuerdas.",
    formulaVarOrder: ["fn", "f1", "n", "v", "L", "lambda_n", "F_t", "mu_l", "r_n"],
    refVars: { x: "n", y1: "fn", y2: "lambda_n" },
  },
  tubos: {
    focus: "Tema de tubos: compara resonancia abierto-abierto y abierto-cerrado para identificar modos permitidos y frecuencias modales.",
    formulaVarOrder: ["fn", "f1", "n", "v", "L", "lambda_n", "Tc", "p_prima", "u"],
    refVars: { x: "n", y1: "fn", y2: "lambda_n" },
  },
  fase: {
    focus: "Relaciona fase con desfase temporal y espacial en y=A sin(kx-omega t+phi).",
    formulaVarOrder: ["phi", "omega", "k", "t", "x", "A"],
    refVars: { x: "t", y1: "phi", y2: "omega" },
  },
  reflexion: {
    focus: "Integra ley angular de reflexion con coeficientes de interfaz y lectura de fase en frontera.",
    formulaVarOrder: ["theta_i", "theta_r", "phi_i", "phi_r", "Z1", "Z2", "R_A", "R_I", "T_I"],
    refVars: { x: "theta_i", y1: "theta_r", y2: "R_I" },
  },
  "cambio-de-velocidad": {
    focus: "Relaciona el cambio de medio con variacion de velocidad, longitud de onda y tiempo de propagacion.",
    formulaVarOrder: ["v1", "v2", "n1", "n2", "theta1", "theta2", "lambda1", "lambda2", "f", "x", "t"],
    refVars: { x: "theta1", y1: "theta2", y2: "v2" },
  },
  superposicion: {
    focus: "Aplica suma lineal de ondas para predecir amplitud resultante, fase relativa y batidos.",
    formulaVarOrder: ["y", "y1", "y2", "A1", "A2", "Ares", "delta_phi", "f1", "f2", "f_beat", "m"],
    refVars: { x: "delta_phi", y1: "Ares", y2: "f_beat" },
  },
  "interferencia-constructiva": {
    focus: "Determina condiciones de maximo por camino/fase y cuantifica amplitud e intensidad resultantes.",
    formulaVarOrder: ["delta", "m", "lambda", "delta_phi", "A1", "A2", "Ares", "I"],
    refVars: { x: "delta", y1: "Ares", y2: "delta_phi" },
  },
  "interferencia-destructiva": {
    focus: "Determina condiciones de minimo por camino/fase y diferencia entre cancelacion parcial y total.",
    formulaVarOrder: ["delta", "m", "lambda", "delta_phi", "A1", "A2", "Ares", "I"],
    refVars: { x: "delta", y1: "Ares", y2: "delta_phi" },
  },
  difraccion: {
    focus: "Relaciona abertura y longitud de onda para predecir angulos, minimos y limite de resolucion.",
    formulaVarOrder: ["a", "lambda", "m", "theta", "sin_theta", "L", "y_m", "w0", "D", "theta_R"],
    refVars: { x: "m", y1: "theta", y2: "y_m" },
  },
  "condicion-de-estacionariedad": {
    focus: "Conecta frontera con cuantizacion modal para determinar frecuencias y longitudes de onda permitidas.",
    formulaVarOrder: ["n", "L", "v", "lambda_n", "fn", "k_n", "omega_n"],
    refVars: { x: "n", y1: "fn", y2: "lambda_n" },
  },
  "nodos-y-antinodos": {
    focus: "Relaciona cada modo con su patron espacial de nodos y antinodos, posiciones y separaciones caracteristicas.",
    formulaVarOrder: ["n", "L", "v", "lambda_n", "fn", "d_nn", "d_na", "p", "x_Np", "x_Ap"],
    refVars: { x: "n", y1: "d_nn", y2: "d_na" },
  },
  resonancia: {
    focus: "Conecta excitacion y modos propios para interpretar pico resonante, ancho de banda y factor Q.",
    formulaVarOrder: ["n", "L", "v", "lambda_n", "fn", "f_exc", "f0", "Delta_f", "Q", "zeta"],
    refVars: { x: "f_exc", y1: "fn", y2: "Q" },
  },
  "ecuacion-de-onda": {
    focus: "Representa la ecuacion armonica completa y el efecto de cada parametro sobre la forma de onda.",
    formulaVarOrder: ["A", "k", "omega", "phi", "x", "t", "lambda", "f", "T", "v"],
    refVars: { x: "x", y1: "A", y2: "omega" },
  },
  introduccion: {
    focus: "Introduce ondas en solidos y diferencia respuestas longitudinales, de corte y superficiales.",
    formulaVarOrder: ["vL", "vT", "K", "G", "rho", "lambda", "f", "T"],
    refVars: { x: "f", y1: "vL", y2: "vT" },
  },
  "propiedades-elasticas-del-solido": {
    focus: "Relaciona rigidez elastica con velocidades de propagacion en el mismo material.",
    formulaVarOrder: ["sigma", "E", "epsilon", "G", "rho", "vL", "vT"],
    refVars: { x: "rho", y1: "vL", y2: "vT" },
  },
  "tipos-de-ondas-en-solidos": {
    focus: "Compara ondas longitudinales, de corte y Rayleigh para decidir el modelo correcto.",
    formulaVarOrder: ["vL", "vT", "vR", "nu", "cR", "lambda", "f"],
    refVars: { x: "f", y1: "vL", y2: "vT" },
  },
  "ondas-longitudinales-en-barras": {
    focus: "Conecta E y rho con modos axiales en barras y lectura modal por n y L.",
    formulaVarOrder: ["v", "E", "rho", "n", "L", "fn", "lambda_n"],
    refVars: { x: "n", y1: "fn", y2: "lambda_n" },
  },
  "ondas-transversales-de-corte": {
    focus: "Estudia propagacion de corte y su dependencia con G y rho.",
    formulaVarOrder: ["vS", "G", "rho", "n", "L", "fn", "lambda"],
    refVars: { x: "n", y1: "fn", y2: "vS" },
  },
  "relacion-entre-modulos-elasticos": {
    focus: "Permite convertir entre E, G, K y nu antes de resolver propagacion.",
    formulaVarOrder: ["E", "G", "K", "nu", "vL", "vT", "rho"],
    refVars: { x: "nu", y1: "vL", y2: "vT" },
  },
  "ondas-flexionales-en-vigas": {
    focus: "Muestra dispersion flexional y diferencia entre velocidad de fase y de grupo.",
    formulaVarOrder: ["E", "I", "rho", "A", "k", "omega", "vp", "vg"],
    refVars: { x: "k", y1: "vp", y2: "vg" },
  },
  "ondas-superficiales-rayleigh": {
    focus: "Analiza propagacion superficial y su relacion con vS y Poisson.",
    formulaVarOrder: ["vS", "nu", "cR", "vR", "lambda", "zp"],
    refVars: { x: "lambda", y1: "vR", y2: "vS" },
  },
  "ondas-sismicas-p-y-s": {
    focus: "Conecta tiempos de llegada P y S con distancia y propiedades del medio.",
    formulaVarOrder: ["vP", "vS", "d", "tP", "tS", "Delta_t"],
    refVars: { x: "d", y1: "tP", y2: "tS" },
  },
  "reflexion-y-transmision-en-solidos": {
    focus: "Interpreta reflexion/transmision en interfaces desde contraste de impedancias.",
    formulaVarOrder: ["Z1", "Z2", "R_A", "R_I", "T_I"],
    refVars: { x: "Z2", y1: "R_I", y2: "T_I" },
  },
  "impedancia-mecanica-en-solidos": {
    focus: "Relaciona impedancia con amplitudes de presion, velocidad de particula e intensidad.",
    formulaVarOrder: ["Z", "rho", "v", "p_hat", "u_hat", "I"],
    refVars: { x: "rho", y1: "Z", y2: "I" },
  },
  "dispersion-y-atenuacion-en-solidos": {
    focus: "Distingue dispersion de atenuacion usando velocidades y ratios de amplitud medidos.",
    formulaVarOrder: ["vp", "omega", "k", "A0", "Ax", "ratioA", "alpha_Np", "atten_dB", "alpha_dB", "x"],
    refVars: { x: "x", y1: "ratioA", y2: "alpha_dB" },
  },
  "resonancia-y-modos-en-barras": {
    focus: "Relaciona modos de barra con frecuencia de resonancia y factor Q.",
    formulaVarOrder: ["E", "rho", "v", "L", "n", "fn", "lambda_n", "k_n", "f0", "f_1", "f_2", "Delta_f", "Q", "zeta"],
    refVars: { x: "n", y1: "fn", y2: "Q" },
  },
  "modos-en-placas-y-membranas": {
    focus: "Muestra modos bidimensionales (m,n) y lectura de patrones nodales.",
    formulaVarOrder: ["Ts", "mu_s", "v", "Lx", "Ly", "m", "n", "fmn", "omega_mn", "E", "h", "nu", "rho", "D"],
    refVars: { x: "m", y1: "fmn", y2: "v" },
  },
  "aplicaciones-ultrasonidos-y-ensayos": {
    focus: "Integra pulso-eco, impedancia y reflexion para problemas END reales.",
    formulaVarOrder: ["e", "v", "t", "f", "lambda", "rho", "Z", "Z1", "Z2", "R_A", "R_I", "T_I", "A0", "Ax", "A_dB", "alpha_dB", "alpha_Np", "x"],
    refVars: { x: "t", y1: "e", y2: "R_I" },
  },
};

function makeProfile(focus, formulaVarOrder = [], refVars = {}) {
  return { focus, formulaVarOrder, refVars };
}

function keywordProfile(profileId = "") {
  const id = String(profileId || "").toLowerCase();
  if (!id) return null;

  if (id === "ondas-estacionarias" || id === "condicion-de-estacionariedad" || id === "nodos-y-antinodos" || id === "resonancia") {
    return makeProfile(
      "Relaciona nodos, antinodos y modos permitidos con condiciones de frontera y resonancia.",
      ["fn", "n", "v", "L", "lambda_n", "f1", "Q", "Delta_f"],
      { x: "n", y1: "fn", y2: "lambda_n" }
    );
  }
  if (id === "armonicos" || id === "cuerdas") {
    return makeProfile(
      "Conecta armonicos y frecuencia fundamental para interpretar espectro modal del sistema.",
      ["fn", "f1", "n", "v", "L", "lambda_n"],
      { x: "n", y1: "fn", y2: "lambda_n" }
    );
  }
  if (id === "reflexion") {
    return makeProfile(
      "Estudia la reflexion en fronteras usando la normal y la igualdad angular de incidencia y salida.",
      ["theta_i", "theta_r", "phi_i", "phi_r", "v"],
      { x: "theta_i", y1: "theta_r", y2: "theta_i" }
    );
  }
  if (id === "ley-de-snell") {
    return makeProfile(
      "Relaciona Snell con indices, angulos y condicion de angulo critico para predecir transmision o RIT.",
      ["n1", "n2", "theta1", "theta2", "theta_c", "v1", "v2", "lambda1", "lambda2", "f"],
      { x: "theta1", y1: "theta2", y2: "theta_c" }
    );
  }
  if (id === "cambio-de-velocidad") {
    return makeProfile(
      "Relaciona cambio de velocidad entre medios con variacion angular y de longitud de onda.",
      ["v1", "v2", "n1", "n2", "theta1", "theta2", "lambda1", "lambda2", "f"],
      { x: "theta1", y1: "theta2", y2: "v2" }
    );
  }
  if (id === "superposicion" || id.includes("interferencia") || id === "difraccion") {
    return makeProfile(
      "Interpreta patrones de superposicion, interferencia y difraccion a partir de fase y diferencia de camino.",
      ["Delta", "m", "lambda", "phi", "A1", "A2", "a", "theta"],
      { x: "m", y1: "Delta", y2: "lambda" }
    );
  }
  if (id.includes("sonido") || id === "tono-y-timbre" || id === "efecto-doppler" || id === "aplicaciones") {
    return makeProfile(
      "Aplica el modelo de ondas sonoras conectando propagacion, intensidad, espectro y efecto Doppler.",
      ["v", "lambda", "f", "T", "B", "rho", "I", "P", "L_dB", "f0", "fobs", "vo", "vs"],
      { x: "f", y1: "v", y2: "I" }
    );
  }
  if (id.includes("electromagneticas") || id.includes("espectro") || id.includes("luz") || id.includes("ondas-em") || id.includes("comparacion-con-ondas-mecanicas")) {
    return makeProfile(
      "Relaciona c=lambda*f y energia por foton para leer y comparar bandas del espectro electromagnetico.",
      ["c", "lambda", "f", "h", "E", "n", "v"],
      { x: "f", y1: "lambda", y2: "E" }
    );
  }
  if (id.includes("energia") || id.includes("intensidad")) {
    return makeProfile(
      "Conecta energia, potencia e intensidad para interpretar el transporte ondulatorio en problemas reales.",
      ["E", "P", "I", "A", "t", "k", "A0", "A_x"],
      { x: "A", y1: "I", y2: "P" }
    );
  }
  return null;
}

export function getOndaLeafProfile(profileId = "") {
  const id = String(profileId || "").trim();
  if (LEAF_PROFILES[id]) return LEAF_PROFILES[id];
  const byKeyword = keywordProfile(id);
  if (byKeyword) return byKeyword;
  return {
    focus: `Enfoque del tema: ${humanizeSlug(id || "ondas")}.`,
    formulaVarOrder: ["v", "lambda", "f", "T"],
    refVars: { x: "f", y1: "v", y2: "lambda" },
  };
}
