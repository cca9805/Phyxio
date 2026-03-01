const EPS = 1e-9;

export const toNum = (v, d) => {
  const n = Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : d;
};

export const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

const PI2 = Math.PI * 2;

const PARAM_VAR_ALIASES = {
  v: ["velocidad", "c"],
  lambda: ["longitud_onda", "longituddeonda"],
  f: ["frecuencia"],
  T: ["periodo"],
  A: ["amplitud"],
  k: ["numero_onda"],
  omega: ["w"],
  phi: ["fase", "phi0"],
  x: ["posicion"],
  t: ["tiempo"],
  theta: ["angulo"],
  n1: ["indice_1"],
  n2: ["indice_2"],
  theta1: ["theta_i", "angulo_incidencia"],
  theta2: ["theta_r", "angulo_refraccion"],
  v1: ["velocidad_1"],
  v2: ["velocidad_2"],
  m: ["orden"],
  n: ["modo"],
  L: ["longitud"],
  fn: ["frecuencia_modo"],
  vL: ["velocidad_longitudinal", "vp"],
  vT: ["velocidad_transversal", "vs", "velocidad_corte"],
  vP: ["velocidad_p"],
  vS: ["velocidad_s", "velocidad_corte"],
  vR: ["velocidad_rayleigh"],
  Delta_t: ["delta_t", "diferencia_tiempos"],
  sigma: ["esfuerzo_normal"],
  epsilon: ["deformacion"],
  G: ["modulo_corte"],
  K: ["modulo_compresion"],
  nu: ["poisson"],
  ratioA: ["r_a"],
  alpha_dB: ["alfa_db", "atenuacion_db_m"],
  Z1: ["impedancia_1"],
  Z2: ["impedancia_2"],
  R_I: ["ri", "reflexion_intensidad"],
  f0: ["frecuencia_fuente"],
  fobs: ["frecuencia_observada"],
  vo: ["velocidad_observador"],
  vs: ["velocidad_fuente"],
  c: ["velocidad_luz"],
  h: ["constante_planck"],
  E: ["energia"],
  P: ["potencia"],
  I: ["intensidad"],
  Aarea: ["A", "area"],
};

function uniq(arr) {
  return Array.from(new Set((Array.isArray(arr) ? arr : []).filter(Boolean)));
}

export function getOndaParamAliases(key) {
  const raw = String(key || "").trim();
  if (!raw) return [];
  const out = [
    ...(PARAM_VAR_ALIASES[raw] || []),
    raw,
    raw.toLowerCase(),
  ];
  if (raw.endsWith("Max")) out.push(raw.slice(0, -3), `${raw.slice(0, -3)}_max`);
  if (raw.endsWith("Min")) out.push(raw.slice(0, -3), `${raw.slice(0, -3)}_min`);
  return uniq(out);
}

function normalizeFormulaText(s = "") {
  return String(s || "")
    .toLowerCase()
    .replace(/\s+/g, "");
}

function detectScenarioByKeywords(text = "") {
  const s = String(text || "").toLowerCase();
  if (s.includes("sonido/naturaleza-del-sonido")) return "fluidLongitudinal";
  if (s.includes("ondas-electromagneticas/naturaleza-de-las-ondas-em")) return "emSpectrum";
  if (s.includes("concepto-de-onda")) return "waveConcept";
  if (s.includes("ondas-en-solidos/introduccion")) return "waveConcept";
  if (s.includes("ondas-en-solidos/propiedades-elasticas-del-solido")) return "mechanical";
  if (s.includes("ondas-en-solidos/tipos-de-ondas-en-solidos")) return "transLong";
  if (s.includes("ondas-en-solidos/relacion-entre-modulos-elasticos")) return "mechanical";
  if (s.includes("ondas-en-solidos/ondas-flexionales-en-vigas")) return "standing";
  if (s.includes("ondas-en-solidos/ondas-superficiales-rayleigh")) return "surfaceWaves";
  if (s.includes("ondas-en-solidos/ondas-sismicas-p-y-s")) return "propagation";
  if (s.includes("ondas-en-solidos/impedancia-mecanica-en-solidos")) return "fluidLongitudinal";
  if (s.includes("ondas-en-solidos/dispersion-y-atenuacion-en-solidos")) return "intensity";
  if (s.includes("ondas-en-solidos/modos-en-placas-y-membranas")) return "standing";
  if (s.includes("ondas-en-solidos/aplicaciones-ultrasonidos-y-ensayos")) return "propagation";
  if (s.includes("tipos-de-ondas/mecanicas")) return "mechanical";
  if (s.includes("tipos-de-ondas/electromagneticas")) return "electromagnetic";
  if (s.includes("ondas-transversales-y-longitudinales")) return "transLong";
  if (s.includes("ondas-en-fluidos/ondas-longitudinales")) return "fluidLongitudinal";
  if (s.includes("ondas-longitudinales")) return "fluidLongitudinal";
  if (s.includes("ondas-en-fluidos/ondas-superficiales")) return "surfaceWaves";
  if (s.includes("ondas-superficiales")) return "surfaceWaves";
  if (s.includes("frecuencia-y-periodo")) return "freqPeriod";
  if (s.includes("longitud-de-onda")) return "wavelength";
  if (s.includes("ondas-en-cuerdas/velocidad-de-propagacion")) return "stringPropagation";
  if (s.includes("velocidad-de-propagacion")) return "propagation";
  if (s.includes("fase")) return "phase";
  if (s.includes("ecuacion-de-onda")) return "waveEquation";
  if (s.includes("reflexion")) return "reflection";
  if (s.includes("snell")) return "snell";
  if (s.includes("cambio-de-velocidad")) return "refractionSpeed";
  if (s.includes("superposicion")) return "superposition";
  if (s.includes("interferencia")) return "interference";
  if (s.includes("difraccion")) return "diffraction";
  if (
    s.includes("estacionaria") ||
    s.includes("resonancia") ||
    s.includes("armonicos") ||
    s.includes("/cuerdas") ||
    s.includes("/tubos") ||
    s.includes("nodos")
  ) {
    return "standing";
  }
  if (s.includes("efecto-doppler")) return "doppler";
  if (s.includes("intensidad-y-nivel-sonoro")) return "intensity";
  if (s.includes("intensidad-ondulatoria")) return "intensity";
  if (s.includes("tono-y-timbre")) return "timbre";
  if (s.includes("espectro-electromagnetico")) return "emSpectrum";
  if (s.includes("velocidad-de-la-luz")) return "emSpectrum";
  if (s.includes("electromagneticas")) return "emSpectrum";
  if (s.includes("energia-de-una-onda")) return "energyWave";
  if (s.includes("flujo-de-energia")) return "energyFlow";
  return null;
}

function detectScenarioFromFormula(formula = "") {
  const f = normalizeFormulaText(formula);
  if (!f) return null;
  if (
    f.includes("z=\\rhov") ||
    f.includes("\\hat{p}=z\\hat{u}") ||
    (f.includes("v=\\sqrt{\\frac{b}{\\rho}}") && f.includes("z=\\rhov"))
  ) {
    return "fluidLongitudinal";
  }
  if (
    f.includes("v=\\sqrt{gh}") ||
    f.includes("v=\\sqrt{\\frac{g\\lambda}{2\\pi}}") ||
    f.includes("\\omega^2=gk")
  ) {
    return "surfaceWaves";
  }
  if (f.includes("f=\\frac{1}{t}") || f.includes("t=\\frac{1}{f}")) return "freqPeriod";
  if (f.includes("\\lambda=\\frac{v}{f}") || f.includes("v=\\lambdaf")) return "wavelength";
  if (f.includes("\\phi=\\omegat-kx")) return "phase";
  if (f.includes("y=a\\sin(kx-\\omegat+")) return "waveEquation";
  if (f.includes("\\theta_r=\\theta_i")) return "reflection";
  if (f.includes("n_1\\sin\\theta_1=n_2\\sin\\theta_2")) return "snell";
  if (f.includes("v_2=v_1\\frac{n_1}{n_2}")) return "refractionSpeed";
  if (f.includes("y=y_1+y_2")) return "superposition";
  if (f.includes("\\delta=m\\lambda") || f.includes("m+\\frac{1}{2}")) return "interference";
  if (f.includes("a\\sin\\theta=m\\lambda")) return "diffraction";
  if (f.includes("f_n=\\frac{nv}{2l}")) return "standing";
  if (f.includes("f_{obs}=f_0\\frac{v+v_o}{v-v_s}")) return "doppler";
  if (f.includes("i=\\frac{p}{a}")) return "intensity";
  if (f.includes("f_n=nf_1")) return "timbre";
  if (f.includes("c=\\lambdaf") || f.includes("e=hf")) return "emSpectrum";
  if (f.includes("e=ka^2")) return "energyWave";
  if (f.includes("p=\\frac{e}{t}")) return "energyFlow";
  return null;
}

function normalizeFormulasDoc(formulasDoc) {
  const d = formulasDoc?.default && typeof formulasDoc.default === "object"
    ? formulasDoc.default
    : formulasDoc;
  if (!d) return null;
  if (Array.isArray(d)) return { formulas: d };
  if (Array.isArray(d.formulas)) return d;
  return null;
}

function getPrimaryFormula(formulasDoc) {
  const doc = normalizeFormulasDoc(formulasDoc);
  if (!doc || !Array.isArray(doc.formulas) || doc.formulas.length === 0) return null;
  const wanted = doc?.ui?.default_formula;
  if (wanted) {
    const found = doc.formulas.find((x) => String(x?.id || "") === String(wanted));
    if (found) return found;
  }
  return doc.formulas[0];
}

function normalizeParamSource(params) {
  if (!params || typeof params !== "object") return {};
  const out = {};
  const sources = [params.sharedParams, params.values, params.known, params.result, params];
  for (const src of sources) {
    if (!src || typeof src !== "object" || Array.isArray(src)) continue;
    Object.assign(out, src);
  }
  return out;
}

function parseFinite(v) {
  if (v === null || v === undefined || v === "") return null;
  const n = Number(String(v).replace(",", "."));
  return Number.isFinite(n) ? n : null;
}

function setIfMissing(bag, key, value) {
  if (!Number.isFinite(value)) return;
  if (parseFinite(bag[key]) !== null) return;
  bag[key] = value;
}

function deriveParams(scenario, bag) {
  const v = parseFinite(bag.v ?? bag.velocidad ?? bag.c);
  const f = parseFinite(bag.f);
  const T = parseFinite(bag.T);
  const lambda = parseFinite(bag.lambda);
  if (f === null && T !== null && Math.abs(T) > EPS) setIfMissing(bag, "f", 1 / T);
  if (T === null && f !== null && Math.abs(f) > EPS) setIfMissing(bag, "T", 1 / f);
  if (lambda === null && v !== null && f !== null && Math.abs(f) > EPS) setIfMissing(bag, "lambda", v / f);
  if (v === null && lambda !== null && f !== null) setIfMissing(bag, "v", lambda * f);

  const B = parseFinite(bag.B);
  const rho = parseFinite(bag.rho);
  if (v === null && B !== null && rho !== null && rho > EPS) setIfMissing(bag, "v", Math.sqrt(B / rho));
  if (B === null && rho !== null && v !== null) setIfMissing(bag, "B", rho * v * v);
  if (rho === null && B !== null && v !== null && Math.abs(v) > EPS) setIfMissing(bag, "rho", B / (v * v));
  if (parseFinite(bag.Z) === null && rho !== null && v !== null) setIfMissing(bag, "Z", rho * v);

  if (scenario === "intensity") {
    const P = parseFinite(bag.P);
    const Aarea = parseFinite(bag.Aarea ?? bag.A);
    const I = parseFinite(bag.I);
    if (I === null && P !== null && Aarea !== null && Math.abs(Aarea) > EPS) {
      setIfMissing(bag, "I", P / Aarea);
    }
  }
  if (scenario === "energyFlow") {
    const E = parseFinite(bag.E);
    const t = parseFinite(bag.t);
    const P = parseFinite(bag.P);
    if (P === null && E !== null && t !== null && Math.abs(t) > EPS) setIfMissing(bag, "P", E / t);
    if (E === null && P !== null && t !== null) setIfMissing(bag, "E", P * t);
  }
  if (scenario === "emSpectrum") {
    const c = parseFinite(bag.c);
    const h = parseFinite(bag.h);
    if (c !== null) setIfMissing(bag, "v", c);
    if (h !== null) setIfMissing(bag, "planck", h);
  }
}

export function withOndaDerivedParams({ scenario = "wavelength", params = {} } = {}) {
  const bag = { ...normalizeParamSource(params) };
  deriveParams(scenario, bag);
  return bag;
}

function buildWavelength(p) {
  const v = Math.max(EPS, toNum(p.v, 340));
  const fMin = Math.max(1, toNum(p.fMin, 20));
  const fMax = Math.max(fMin + 1, toNum(p.fMax, 2000));
  const data = [];
  const nPts = 240;
  for (let i = 0; i <= nPts; i += 1) {
    const f = fMin + ((fMax - fMin) * i) / nPts;
    data.push({ x: f, y1: v / f, y2: 1 / f });
  }
  return {
    data,
    xLabel: "f (Hz)",
    y1Label: "lambda (m)",
    y2Label: "T (s)",
    summary: `En un medio fijo: v = lambda*f. Se uso v=${v.toFixed(1)} m/s.`,
  };
}

function buildPropagation(p) {
  const lambda = Math.max(EPS, toNum(p.lambda, 1.2));
  const fMin = Math.max(1, toNum(p.fMin, 20));
  const fMax = Math.max(fMin + 1, toNum(p.fMax, 300));

  const Ft = Math.max(EPS, toNum(p.F_t, 90));
  const muL = Math.max(EPS, toNum(p.mu_l, 0.08));
  const B = Math.max(EPS, toNum(p.B, 2.2e9));
  const rho = Math.max(EPS, toNum(p.rho, 1000));
  const n = Math.max(EPS, toNum(p.n, 1.33));
  const c = Math.max(EPS, toNum(p.c, 299792458));

  const vCuerda = Math.sqrt(Ft / muL);
  const vFluido = Math.sqrt(B / rho);
  const vOptica = c / n;

  const data = [];
  const nPts = 240;
  for (let i = 0; i <= nPts; i += 1) {
    const f = fMin + ((fMax - fMin) * i) / nPts;
    data.push({
      x: f,
      y1: lambda * f,
      y2: vCuerda,
    });
  }

  const fCuerda = vCuerda / lambda;
  const inWindow = fCuerda >= fMin && fCuerda <= fMax;
  const opticaTxt = vOptica > 1e6 ? vOptica.toExponential(2) : vOptica.toFixed(1);

  return {
    data,
    xLabel: "f (Hz)",
    y1Label: "v = lambda*f (m/s)",
    y2Label: "v_cuerda = sqrt(F_t/mu_l) (m/s)",
    summary:
      `Comparacion de modelos para la misma onda: ` +
      `v_general = lambda*f, v_cuerda=${vCuerda.toFixed(2)} m/s, ` +
      `v_fluido=${vFluido.toFixed(2)} m/s, v_optica=${opticaTxt} m/s. ` +
      (inWindow
        ? `Cruce con v_cuerda en f=${fCuerda.toFixed(2)} Hz.`
        : `El cruce con v_cuerda cae fuera del rango (f*=${fCuerda.toFixed(2)} Hz).`),
  };
}

function buildSurfaceWaves(p) {
  const g = Math.max(EPS, toNum(p.g, 9.81));
  const h = Math.max(EPS, toNum(p.h, 1.2));
  const lambdaMin = Math.max(0.05, toNum(p.lambdaMin, 0.2));
  const lambdaMax = Math.max(lambdaMin + 0.05, toNum(p.lambdaMax, 25));
  const nPts = 240;
  const data = [];
  const vSomera = Math.sqrt(g * h);
  for (let i = 0; i <= nPts; i += 1) {
    const lambda = lambdaMin + ((lambdaMax - lambdaMin) * i) / nPts;
    const vProfunda = Math.sqrt((g * lambda) / (2 * Math.PI));
    data.push({
      x: lambda,
      y1: vProfunda,
      y2: vSomera,
    });
  }
  const lambdaTrans = 2 * Math.PI * h;
  return {
    data,
    xLabel: "lambda (m)",
    y1Label: "v profunda (m/s)",
    y2Label: "v somera (m/s)",
    summary:
      `Ondas superficiales: v_profunda=sqrt(g*lambda/(2*pi)) y v_somera=sqrt(g*h). ` +
      `Con h=${h.toFixed(3)} m, la frontera orientativa kh~1 ocurre cerca de lambda~${lambdaTrans.toFixed(3)} m.`,
  };
}

function buildFluidLongitudinal(p) {
  const B = Math.max(EPS, toNum(p.B, 2.2e9));
  const rhoMin = Math.max(0.1, toNum(p.rhoMin, 800));
  const rhoMax = Math.max(rhoMin + 0.1, toNum(p.rhoMax, 1400));
  const rhoRef = clamp(toNum(p.rho, (rhoMin + rhoMax) / 2), rhoMin, rhoMax);
  const fRef = Math.max(EPS, toNum(p.f, 1000));
  const lambdaRef = Math.max(EPS, toNum(p.lambda, 1.0));

  const data = [];
  const nPts = 220;
  for (let i = 0; i <= nPts; i += 1) {
    const rho = rhoMin + ((rhoMax - rhoMin) * i) / nPts;
    const v = Math.sqrt(B / rho);
    data.push({
      x: rho,
      y1: v,
      y2: rho * v,
    });
  }

  const vRef = Math.sqrt(B / rhoRef);
  const ZRef = rhoRef * vRef;
  const vWave = lambdaRef * fRef;
  const relErr = Math.abs(vWave - vRef) / Math.max(EPS, vRef);

  return {
    data,
    xLabel: "rho (kg/m^3)",
    y1Label: "v = sqrt(B/rho) (m/s)",
    y2Label: "Z = rho*v (Pa*s/m)",
    summary:
      `Modelo longitudinal en fluido: B=${B.toExponential(2)} Pa, rho_ref=${rhoRef.toFixed(2)} kg/m^3 -> ` +
      `v=${vRef.toFixed(2)} m/s y Z=${ZRef.toExponential(3)} Pa*s/m. ` +
      `Comparacion con v=lambda*f: ${vWave.toFixed(2)} m/s (desajuste ${(100 * relErr).toFixed(2)}%).`,
  };
}

function buildStringPropagation(p) {
  const lambda = Math.max(EPS, toNum(p.lambda, 0.65));
  const fMin = Math.max(1, toNum(p.fMin, 20));
  const fMax = Math.max(fMin + 1, toNum(p.fMax, 600));
  const Ft = Math.max(EPS, toNum(p.F_t, 100));
  const muL = Math.max(EPS, toNum(p.mu_l, 0.005));
  const L = Math.max(EPS, toNum(p.L, 0.65));

  const vCuerda = Math.sqrt(Ft / muL);
  const fCruce = vCuerda / lambda;
  const fFund = vCuerda / (2 * L);

  const data = [];
  const nPts = 240;
  for (let i = 0; i <= nPts; i += 1) {
    const f = fMin + ((fMax - fMin) * i) / nPts;
    data.push({
      x: f,
      y1: lambda * f,
      y2: vCuerda,
    });
  }

  const cruceTxt =
    fCruce >= fMin && fCruce <= fMax
      ? `Cruce en f=${fCruce.toFixed(2)} Hz.`
      : `Cruce fuera de rango (f*=${fCruce.toFixed(2)} Hz).`;

  return {
    data,
    xLabel: "f (Hz)",
    y1Label: "v = lambda*f (m/s)",
    y2Label: "v_cuerda = sqrt(F_t/mu_l) (m/s)",
    summary:
      `Cuerda tensa: v=${vCuerda.toFixed(2)} m/s con F_t=${Ft.toFixed(2)} N y mu_l=${muL.toFixed(4)} kg/m. ` +
      `Para L=${L.toFixed(3)} m, f1=${fFund.toFixed(2)} Hz. ${cruceTxt}`,
  };
}

function buildWaveConcept(p) {
  const A = clamp(Math.abs(toNum(p.A, 1)) || 1, 0.2, 4);
  let f = toNum(p.f, NaN);
  let lambda = toNum(p.lambda, NaN);
  let v = toNum(p.v, NaN);
  const t = toNum(p.t, 0.2);

  if (!(Number.isFinite(f) && f > EPS)) f = 2;
  if (!(Number.isFinite(lambda) && lambda > EPS) && Number.isFinite(v) && v > EPS) lambda = v / f;
  if (!(Number.isFinite(v) && v > EPS) && Number.isFinite(lambda) && lambda > EPS) v = lambda * f;
  if (!(Number.isFinite(lambda) && lambda > EPS)) lambda = 1.2;
  if (!(Number.isFinite(v) && v > EPS)) v = lambda * f;

  const k = PI2 / lambda;
  const omega = PI2 * f;
  const xMax = 2 * lambda;
  const nPts = 240;
  const data = [];
  for (let i = 0; i <= nPts; i += 1) {
    const x = (xMax * i) / nPts;
    const y = A * Math.sin(k * x - omega * t);
    data.push({
      x,
      y1: y,
      y2: (y * y) / (A * A),
    });
  }
  return {
    data,
    xLabel: "x (m)",
    y1Label: "desplazamiento y(x,t)",
    y2Label: "energia relativa",
    summary: `Concepto de onda: oscilacion local + propagacion global. v=${v.toFixed(2)} m/s, lambda=${lambda.toFixed(3)} m, f=${f.toFixed(3)} Hz, T=${(1 / f).toFixed(3)} s.`,
  };
}

function buildMechanical(p) {
  const Ft = Math.max(EPS, toNum(p.F_t, 90));
  const B = Math.max(EPS, toNum(p.B, 2.1e9));
  const muMin = Math.max(0.02, toNum(p.muMin, 0.05));
  const muMax = Math.max(muMin + 0.01, toNum(p.muMax, 0.8));
  const rhoMin = Math.max(50, toNum(p.rhoMin, 300));
  const rhoMax = Math.max(rhoMin + 10, toNum(p.rhoMax, 1800));
  const data = [];
  const nPts = 220;
  for (let i = 0; i <= nPts; i += 1) {
    const r = i / nPts;
    const mu = muMin + (muMax - muMin) * r;
    const rho = rhoMin + (rhoMax - rhoMin) * r;
    data.push({
      x: r * 100,
      y1: Math.sqrt(Ft / mu),
      y2: Math.sqrt(B / rho),
    });
  }
  return {
    data,
    xLabel: "escala de inercia (%)",
    y1Label: "v cuerda (m/s)",
    y2Label: "v fluido (m/s)",
    summary: "Compara propagacion mecanica en cuerda y en fluido al variar inercia del medio.",
  };
}

function buildElectromagnetic(p) {
  const c = Math.max(EPS, toNum(p.c, 299792458));
  const nMin = Math.max(1, toNum(p.nMin, 1));
  const nMax = Math.max(nMin + 0.05, toNum(p.nMax, 2.4));
  const data = [];
  const nPts = 200;
  for (let i = 0; i <= nPts; i += 1) {
    const n = nMin + ((nMax - nMin) * i) / nPts;
    data.push({
      x: n,
      y1: c / n,
      y2: 1 / n,
    });
  }
  return {
    data,
    xLabel: "indice n",
    y1Label: "v = c/n (m/s)",
    y2Label: "lambda/lambda0",
    summary: "En ondas EM la frecuencia se conserva y la longitud de onda se ajusta al indice del medio.",
  };
}

function buildTransLong(p) {
  const A = Math.max(0.2, toNum(p.A, 1));
  const nPts = 220;
  const data = [];
  for (let i = 0; i <= nPts; i += 1) {
    const phi = (PI2 * i) / nPts;
    data.push({
      x: phi,
      y1: A * Math.sin(phi),
      y2: A * Math.cos(phi),
    });
  }
  return {
    data,
    xLabel: "fase (rad)",
    y1Label: "transversal",
    y2Label: "longitudinal",
    summary: "Compara oscilacion perpendicular (transversal) frente a paralela (longitudinal).",
  };
}

function buildFreqPeriod(p) {
  const fMin = Math.max(0.5, toNum(p.fMin, 0.5));
  const fMax = Math.max(fMin + 0.5, toNum(p.fMax, 40));
  const data = [];
  const nPts = 220;
  for (let i = 0; i <= nPts; i += 1) {
    const f = fMin + ((fMax - fMin) * i) / nPts;
    data.push({ x: f, y1: 1 / f, y2: PI2 * f });
  }
  return {
    data,
    xLabel: "f (Hz)",
    y1Label: "T (s)",
    y2Label: "omega (rad/s)",
    summary: "Frecuencia y periodo son magnitudes inversas.",
  };
}

function buildPhase(p) {
  const omega = toNum(p.omega, PI2);
  const k = toNum(p.k, 2);
  const x0 = toNum(p.x, 1.2);
  const tMax = Math.max(0.5, toNum(p.tMax, 6));
  const data = [];
  const nPts = 240;
  for (let i = 0; i <= nPts; i += 1) {
    const t = (tMax * i) / nPts;
    const phi = omega * t - k * x0;
    data.push({ x: t, y1: phi, y2: Math.sin(phi) });
  }
  return {
    data,
    xLabel: "t (s)",
    y1Label: "phi (rad)",
    y2Label: "sin(phi)",
    summary: "La fase permite comparar el estado oscilatorio de dos puntos o instantes.",
  };
}

function buildWaveEquation(p) {
  const A = toNum(p.A, 1);
  const k = toNum(p.k, 2);
  const omega = toNum(p.omega, PI2);
  const t0 = toNum(p.t, 0.3);
  const phi = toNum(p.phi, 0);
  const xMax = Math.max(1, toNum(p.xMax, 12));
  const data = [];
  const nPts = 280;
  for (let i = 0; i <= nPts; i += 1) {
    const x = (xMax * i) / nPts;
    const arg = k * x - omega * t0 + phi;
    data.push({ x, y1: A * Math.sin(arg), y2: A * Math.cos(arg) });
  }
  return {
    data,
    xLabel: "x (m)",
    y1Label: "y(x,t0)",
    y2Label: "cuadratura",
    summary: "Ecuacion de onda armonica en un instante fijo t0.",
  };
}

function buildReflection(p) {
  const thMax = clamp(toNum(p.thetaMax, 80), 5, 89);
  const data = [];
  const nPts = 120;
  for (let i = 0; i <= nPts; i += 1) {
    const th = (thMax * i) / nPts;
    data.push({ x: th, y1: th, y2: 0 });
  }
  return {
    data,
    xLabel: "theta_i (deg)",
    y1Label: "theta_r (deg)",
    y2Label: "error ideal",
    summary: "Reflexion ideal: angulo reflejado igual al angulo incidente.",
  };
}

function buildSnell(p) {
  const n1 = Math.max(EPS, toNum(p.n1, 1.0));
  const n2 = Math.max(EPS, toNum(p.n2, 1.5));
  const thMax = clamp(toNum(p.theta1Max, 80), 1, 89);
  const data = [];
  const nPts = 200;
  for (let i = 0; i <= nPts; i += 1) {
    const th1Deg = (thMax * i) / nPts;
    const th1 = (th1Deg * Math.PI) / 180;
    const s2 = clamp((n1 / n2) * Math.sin(th1), -1, 1);
    const th2Deg = (Math.asin(s2) * 180) / Math.PI;
    data.push({ x: th1Deg, y1: th2Deg, y2: s2 });
  }
  return {
    data,
    xLabel: "theta_1 (deg)",
    y1Label: "theta_2 (deg)",
    y2Label: "sin(theta_2)",
    summary: `Ley de Snell con n1=${n1.toFixed(2)} y n2=${n2.toFixed(2)}.`,
  };
}

function buildRefractionSpeed(p) {
  const v1 = Math.max(EPS, toNum(p.v1, 300000000));
  const n1 = Math.max(EPS, toNum(p.n1, 1.0));
  const n2Min = Math.max(0.5, toNum(p.n2Min, 1.0));
  const n2Max = Math.max(n2Min + 0.05, toNum(p.n2Max, 2.5));
  const data = [];
  const nPts = 180;
  for (let i = 0; i <= nPts; i += 1) {
    const n2 = n2Min + ((n2Max - n2Min) * i) / nPts;
    const v2 = v1 * (n1 / n2);
    data.push({ x: n2, y1: v2, y2: n1 / n2 });
  }
  return {
    data,
    xLabel: "n2",
    y1Label: "v2 (m/s)",
    y2Label: "lambda2/lambda1",
    summary: "Con fuente fija, al aumentar indice n el medio reduce la longitud de onda.",
  };
}

function buildSuperposition(p) {
  const A1 = Math.max(EPS, toNum(p.A1, 1.0));
  const A2 = Math.max(EPS, toNum(p.A2, 0.8));
  const data = [];
  const nPts = 220;
  for (let i = 0; i <= nPts; i += 1) {
    const dphi = (PI2 * i) / nPts;
    const Ares = Math.sqrt(A1 * A1 + A2 * A2 + 2 * A1 * A2 * Math.cos(dphi));
    data.push({ x: dphi, y1: Ares, y2: A1 + A2 * Math.cos(dphi) });
  }
  return {
    data,
    xLabel: "Delta fase (rad)",
    y1Label: "A_resultante",
    y2Label: "y_relativa",
    summary: "La superposicion suma desplazamientos punto a punto.",
  };
}

function buildInterference(p) {
  const lambda = Math.max(EPS, toNum(p.lambda, 0.6));
  const mMax = Math.max(1, Math.round(toNum(p.mMax, 8)));
  const data = [];
  for (let m = 0; m <= mMax; m += 1) {
    data.push({
      x: m,
      y1: m * lambda,
      y2: (m + 0.5) * lambda,
    });
  }
  return {
    data,
    xLabel: "m",
    y1Label: "Delta constructiva (m)",
    y2Label: "Delta destructiva (m)",
    summary: "Constructiva para m*lambda y destructiva para (m+1/2)*lambda.",
  };
}

function buildDiffraction(p) {
  const lambda = Math.max(EPS, toNum(p.lambda, 0.00000055));
  const a = Math.max(lambda * 1.1, toNum(p.a, 0.0001));
  const mMax = Math.max(1, Math.round(toNum(p.mMax, 3)));
  const data = [];
  for (let m = 0; m <= mMax; m += 1) {
    const arg = clamp((m * lambda) / a, -1, 1);
    data.push({
      x: m,
      y1: (Math.asin(arg) * 180) / Math.PI,
      y2: arg,
    });
  }
  return {
    data,
    xLabel: "orden m",
    y1Label: "theta (deg)",
    y2Label: "sin(theta)",
    summary: "Difraccion relevante cuando abertura y longitud de onda son comparables.",
  };
}

function buildStanding(p) {
  const v = Math.max(EPS, toNum(p.v, 120));
  const L = Math.max(EPS, toNum(p.L, 1.2));
  const nMax = Math.max(1, Math.round(toNum(p.nMax, 8)));
  const nSelRaw = Math.round(toNum(p.n, 3));
  const nSel = Math.max(1, Math.min(nSelRaw, nMax));
  const data = [];
  for (let n = 1; n <= nMax; n += 1) {
    data.push({
      x: n,
      y1: (n * v) / (2 * L),
      y2: (2 * L) / n,
    });
  }
  const fn = (nSel * v) / (2 * L);
  const lambdaN = (2 * L) / nSel;
  return {
    data,
    xLabel: "n",
    y1Label: "f_n (Hz)",
    y2Label: "lambda_n (m)",
    summary: `Resonancia fija-fija: para n=${nSel}, f_n=${fn.toFixed(2)} Hz y lambda_n=${lambdaN.toFixed(3)} m.`,
  };
}

function buildDoppler(p) {
  const f0 = Math.max(EPS, toNum(p.f0, 440));
  const v = Math.max(EPS, toNum(p.v, 343));
  const vo = toNum(p.vo, 0);
  const vsMax = Math.max(1, toNum(p.vsMax, 120));
  const data = [];
  const nPts = 220;
  for (let i = 0; i <= nPts; i += 1) {
    const vs = (vsMax * i) / nPts;
    const fAprox = f0 * ((v + vo) / Math.max(EPS, v - vs));
    const fAleja = f0 * ((v - vo) / (v + vs));
    data.push({ x: vs, y1: fAprox, y2: fAleja });
  }
  return {
    data,
    xLabel: "v_s (m/s)",
    y1Label: "f obs acerca (Hz)",
    y2Label: "f obs aleja (Hz)",
    summary: "El movimiento relativo cambia la frecuencia percibida.",
  };
}

function buildIntensity(p) {
  const P = Math.max(EPS, toNum(p.P, 0.08));
  const AMin = Math.max(EPS, toNum(p.AMin, 0.01));
  const AMax = Math.max(AMin + 0.01, toNum(p.AMax, 8));
  const I0 = 1e-12;
  const data = [];
  const nPts = 220;
  for (let i = 0; i <= nPts; i += 1) {
    const A = AMin + ((AMax - AMin) * i) / nPts;
    const I = P / A;
    data.push({
      x: A,
      y1: I,
      y2: 10 * Math.log10(Math.max(I0, I) / I0),
    });
  }
  return {
    data,
    xLabel: "Area (m^2)",
    y1Label: "I (W/m^2)",
    y2Label: "nivel (dB)",
    summary: "A mayor area de reparto, menor intensidad para la misma potencia.",
  };
}

function buildTimbre(p) {
  const f1 = Math.max(EPS, toNum(p.f1, 220));
  const nMax = Math.max(2, Math.round(toNum(p.nMax, 12)));
  const data = [];
  for (let n = 1; n <= nMax; n += 1) {
    data.push({ x: n, y1: n * f1, y2: 1 / n });
  }
  return {
    data,
    xLabel: "armonico n",
    y1Label: "f_n (Hz)",
    y2Label: "peso relativo",
    summary: "El timbre depende del contenido armonico, no solo de la fundamental.",
  };
}

function buildEmSpectrum(p) {
  const c = Math.max(EPS, toNum(p.c, 299792458));
  const h = Math.max(EPS, toNum(p.h, 6.62607015e-34));
  const fMin = Math.max(1, toNum(p.fMin, 1000000));
  const fMax = Math.max(fMin * 2, toNum(p.fMax, 1e20));
  const data = [];
  const nPts = 240;
  for (let i = 0; i <= nPts; i += 1) {
    const r = i / nPts;
    const f = fMin * Math.pow(fMax / fMin, r);
    data.push({
      x: Math.log10(f),
      y1: c / f,
      y2: h * f,
    });
  }
  return {
    data,
    xLabel: "log10(f)",
    y1Label: "lambda (m)",
    y2Label: "E_foton (J)",
    summary: "En ondas EM: c = lambda*f y E = h*f.",
  };
}

function buildEnergyWave(p) {
  const k = Math.max(EPS, toNum(p.k, 10));
  const AMax = Math.max(0.2, toNum(p.AMax, 3));
  const data = [];
  const nPts = 220;
  for (let i = 0; i <= nPts; i += 1) {
    const A = (AMax * i) / nPts;
    data.push({ x: A, y1: k * A * A, y2: A * A });
  }
  return {
    data,
    xLabel: "A",
    y1Label: "E (J)",
    y2Label: "A^2",
    summary: "En modelos lineales simples, energia es proporcional a A^2.",
  };
}

function buildEnergyFlow(p) {
  const E = Math.max(EPS, toNum(p.E, 120));
  const tMin = Math.max(0.1, toNum(p.tMin, 0.2));
  const tMax = Math.max(tMin + 0.2, toNum(p.tMax, 12));
  const data = [];
  const nPts = 220;
  for (let i = 0; i <= nPts; i += 1) {
    const t = tMin + ((tMax - tMin) * i) / nPts;
    data.push({ x: t, y1: E / t, y2: E });
  }
  return {
    data,
    xLabel: "t (s)",
    y1Label: "P (W)",
    y2Label: "E fija (J)",
    summary: "Si la misma energia se transfiere en menos tiempo, aumenta la potencia.",
  };
}

const MODELS = {
  waveConcept: {
    title: "Ondas: concepto de onda",
    formula: "v=\\lambda f,\\ T=\\frac{1}{f}",
    params: [
      { key: "A", label: "A", default: 1.0 },
      { key: "lambda", label: "lambda (m)", default: 1.2 },
      { key: "f", label: "f (Hz)", default: 2.0 },
      { key: "t", label: "t (s)", default: 0.2 },
      { key: "v", label: "v (m/s)", default: 2.4 },
    ],
    build: buildWaveConcept,
  },
  mechanical: {
    title: "Ondas: mecanicas",
    formula: "v=\\sqrt{\\frac{F_t}{\\mu_l}},\\ v=\\sqrt{\\frac{B}{\\rho}}",
    params: [
      { key: "F_t", label: "F_t (N)", default: 90 },
      { key: "B", label: "B (Pa)", default: 2.1e9 },
      { key: "muMin", label: "mu_l min", default: 0.05 },
      { key: "muMax", label: "mu_l max", default: 0.8 },
      { key: "rhoMin", label: "rho min", default: 300 },
      { key: "rhoMax", label: "rho max", default: 1800 },
    ],
    build: buildMechanical,
  },
  electromagnetic: {
    title: "Ondas: electromagneticas",
    formula: "v=\\frac{c}{n}",
    params: [
      { key: "c", label: "c (m/s)", default: 299792458 },
      { key: "nMin", label: "n min", default: 1.0 },
      { key: "nMax", label: "n max", default: 2.4 },
    ],
    build: buildElectromagnetic,
  },
  transLong: {
    title: "Ondas: transversales y longitudinales",
    formula: "\\vec{\\xi}\\cdot\\vec{k}=0,\\ \\vec{\\xi}\\parallel\\vec{k}",
    params: [{ key: "A", label: "A", default: 1 }],
    build: buildTransLong,
  },
  wavelength: {
    title: "Ondas: relacion de propagacion",
    formula: "v=\\lambda f",
    params: [
      { key: "v", label: "v medio (m/s)", default: 340 },
      { key: "fMin", label: "f min (Hz)", default: 20 },
      { key: "fMax", label: "f max (Hz)", default: 2000 },
    ],
    build: buildWavelength,
  },
  propagation: {
    title: "Ondas: velocidad de propagacion",
    formula: "v=\\lambda f,\\ v=\\sqrt{\\frac{F_t}{\\mu_l}},\\ v=\\sqrt{\\frac{B}{\\rho}},\\ v=\\frac{c}{n}",
    params: [
      { key: "lambda", label: "lambda (m)", default: 1.2 },
      { key: "fMin", label: "f min (Hz)", default: 20 },
      { key: "fMax", label: "f max (Hz)", default: 300 },
      { key: "F_t", label: "F_t (N)", default: 90 },
      { key: "mu_l", label: "mu_l (kg/m)", default: 0.08 },
      { key: "B", label: "B (Pa)", default: 2.2e9 },
      { key: "rho", label: "rho (kg/m^3)", default: 1000 },
      { key: "n", label: "n", default: 1.33 },
      { key: "c", label: "c (m/s)", default: 299792458 },
    ],
    build: buildPropagation,
  },
  surfaceWaves: {
    title: "Ondas en fluidos: ondas superficiales",
    formula: "v=\\sqrt{gh},\\ v=\\sqrt{\\frac{g\\lambda}{2\\pi}},\\ \\omega^2=gk",
    params: [
      { key: "g", label: "g (m/s^2)", default: 9.81 },
      { key: "h", label: "h (m)", default: 1.2 },
      { key: "lambdaMin", label: "lambda min (m)", default: 0.2 },
      { key: "lambdaMax", label: "lambda max (m)", default: 25 },
      { key: "f", label: "f (Hz)", default: 1.0 },
      { key: "A", label: "A (m)", default: 1.0 },
    ],
    build: buildSurfaceWaves,
  },
  fluidLongitudinal: {
    title: "Ondas en fluidos: longitudinales",
    formula: "v=\\sqrt{\\frac{B}{\\rho}},\\ Z=\\rho v,\\ v=\\lambda f",
    params: [
      { key: "B", label: "B (Pa)", default: 2.2e9 },
      { key: "rhoMin", label: "rho min (kg/m^3)", default: 800 },
      { key: "rhoMax", label: "rho max (kg/m^3)", default: 1400 },
      { key: "rho", label: "rho ref (kg/m^3)", default: 1000 },
      { key: "lambda", label: "lambda (m)", default: 1.0 },
      { key: "f", label: "f (Hz)", default: 1000 },
      { key: "A", label: "A", default: 1.0 },
    ],
    build: buildFluidLongitudinal,
  },
  stringPropagation: {
    title: "Ondas en cuerdas: velocidad de propagacion",
    formula: "v=\\sqrt{\\frac{F_t}{\\mu_l}},\\ v=\\lambda f,\\ f_1=\\frac{v}{2L}",
    params: [
      { key: "lambda", label: "lambda (m)", default: 0.65 },
      { key: "fMin", label: "f min (Hz)", default: 20 },
      { key: "fMax", label: "f max (Hz)", default: 600 },
      { key: "F_t", label: "F_t (N)", default: 100 },
      { key: "mu_l", label: "mu_l (kg/m)", default: 0.005 },
      { key: "L", label: "L (m)", default: 0.65 },
    ],
    build: buildStringPropagation,
  },
  freqPeriod: {
    title: "Ondas: frecuencia y periodo",
    formula: "f=\\frac{1}{T}",
    params: [
      { key: "fMin", label: "f min (Hz)", default: 0.5 },
      { key: "fMax", label: "f max (Hz)", default: 40 },
    ],
    build: buildFreqPeriod,
  },
  phase: {
    title: "Ondas: fase",
    formula: "\\phi=\\omega t-kx",
    params: [
      { key: "omega", label: "omega (rad/s)", default: PI2 },
      { key: "k", label: "k (rad/m)", default: 2 },
      { key: "x", label: "x fijo (m)", default: 1.2 },
      { key: "tMax", label: "t max (s)", default: 6 },
    ],
    build: buildPhase,
  },
  waveEquation: {
    title: "Ondas: ecuacion armonica",
    formula: "y=A\\sin(kx-\\omega t+\\phi_0)",
    params: [
      { key: "A", label: "A", default: 1 },
      { key: "k", label: "k", default: 2 },
      { key: "omega", label: "omega", default: PI2 },
      { key: "phi", label: "phi0", default: 0 },
      { key: "t", label: "t (s)", default: 0.3 },
      { key: "xMax", label: "x max (m)", default: 12 },
    ],
    build: buildWaveEquation,
  },
  reflection: {
    title: "Ondas: reflexion",
    formula: "\\theta_r=\\theta_i",
    params: [{ key: "thetaMax", label: "theta_i max", default: 80 }],
    build: buildReflection,
  },
  snell: {
    title: "Ondas: ley de Snell",
    formula: "n_1\\sin\\theta_1=n_2\\sin\\theta_2",
    params: [
      { key: "n1", label: "n1", default: 1.0 },
      { key: "n2", label: "n2", default: 1.5 },
      { key: "theta1Max", label: "theta1 max", default: 80 },
    ],
    build: buildSnell,
  },
  refractionSpeed: {
    title: "Ondas: cambio de velocidad",
    formula: "v_2=v_1\\frac{n_1}{n_2}",
    params: [
      { key: "v1", label: "v1", default: 300000000 },
      { key: "n1", label: "n1", default: 1.0 },
      { key: "n2Min", label: "n2 min", default: 1.0 },
      { key: "n2Max", label: "n2 max", default: 2.5 },
    ],
    build: buildRefractionSpeed,
  },
  superposition: {
    title: "Ondas: superposicion",
    formula: "y=y_1+y_2",
    params: [
      { key: "A1", label: "A1", default: 1.0 },
      { key: "A2", label: "A2", default: 0.8 },
    ],
    build: buildSuperposition,
  },
  interference: {
    title: "Ondas: interferencia",
    formula: "\\Delta=m\\lambda",
    params: [
      { key: "lambda", label: "lambda (m)", default: 0.6 },
      { key: "mMax", label: "m max", default: 8 },
    ],
    build: buildInterference,
  },
  diffraction: {
    title: "Ondas: difraccion",
    formula: "a\\sin\\theta=m\\lambda",
    params: [
      { key: "lambda", label: "lambda (m)", default: 0.00000055 },
      { key: "a", label: "a (m)", default: 0.0001 },
      { key: "mMax", label: "m max", default: 3 },
    ],
    build: buildDiffraction,
  },
  standing: {
    title: "Ondas: estacionarias y resonancia",
    formula: "f_n=\\frac{nv}{2L}",
    params: [
      { key: "v", label: "v (m/s)", default: 120 },
      { key: "L", label: "L (m)", default: 1.2 },
      { key: "n", label: "n seleccionado", default: 3 },
      { key: "nMax", label: "n max", default: 8 },
    ],
    build: buildStanding,
  },
  doppler: {
    title: "Ondas: efecto Doppler",
    formula: "f_{obs}=f_0\\frac{v+v_o}{v-v_s}",
    params: [
      { key: "f0", label: "f0 (Hz)", default: 440 },
      { key: "v", label: "v (m/s)", default: 343 },
      { key: "vo", label: "vo (m/s)", default: 0 },
      { key: "vsMax", label: "vs max (m/s)", default: 120 },
    ],
    build: buildDoppler,
  },
  intensity: {
    title: "Ondas: intensidad y nivel",
    formula: "I=\\frac{P}{A}",
    params: [
      { key: "P", label: "P (W)", default: 0.08 },
      { key: "AMin", label: "A min (m^2)", default: 0.01 },
      { key: "AMax", label: "A max (m^2)", default: 8 },
    ],
    build: buildIntensity,
  },
  timbre: {
    title: "Ondas: tono y timbre",
    formula: "f_n=n f_1",
    params: [
      { key: "f1", label: "f1 (Hz)", default: 220 },
      { key: "nMax", label: "n max", default: 12 },
    ],
    build: buildTimbre,
  },
  emSpectrum: {
    title: "Ondas: espectro electromagnetico",
    formula: "c=\\lambda f,\\ E=h f",
    params: [
      { key: "c", label: "c (m/s)", default: 299792458 },
      { key: "h", label: "h (J*s)", default: 6.62607015e-34 },
      { key: "fMin", label: "f min (Hz)", default: 1000000 },
      { key: "fMax", label: "f max (Hz)", default: 1e20 },
    ],
    build: buildEmSpectrum,
  },
  energyWave: {
    title: "Ondas: energia de onda",
    formula: "E=kA^2",
    params: [
      { key: "k", label: "k", default: 10 },
      { key: "AMax", label: "A max", default: 3 },
    ],
    build: buildEnergyWave,
  },
  energyFlow: {
    title: "Ondas: flujo de energia",
    formula: "P=\\frac{E}{t}",
    params: [
      { key: "E", label: "E (J)", default: 120 },
      { key: "tMin", label: "t min (s)", default: 0.2 },
      { key: "tMax", label: "t max (s)", default: 12 },
    ],
    build: buildEnergyFlow,
  },
};

function relabelModelParams(base, formulasDoc) {
  const doc = normalizeFormulasDoc(formulasDoc);
  const varMap = {};
  for (const v of doc?.variables || []) {
    const k = String(v?.id || "").trim();
    if (!k) continue;
    const name = String(v?.name || "").replace(/_/g, " ").trim();
    const unit = String(v?.si_unit || "").trim();
    varMap[k] = {
      label: [k, name ? `: ${name}` : "", unit ? ` (${unit})` : ""].join(""),
    };
  }
  const params = (base.params || []).map((p) => {
    const aliasHit = [p.key, ...(PARAM_VAR_ALIASES[p.key] || [])]
      .map((k) => varMap[k])
      .find(Boolean);
    return aliasHit ? { ...p, label: aliasHit.label } : p;
  });
  return { ...base, params };
}

export function resolveOndaModelForLeaf({
  leafRelPath = "",
  motionId = "",
  title = "",
  formulasDoc = null,
  forcedScenario = "",
}) {
  const primary = getPrimaryFormula(formulasDoc);
  const formulaText = primary?.latex || primary?.equation || "";
  const forced = String(forcedScenario || "").trim();
  const scenario =
    (forced && MODELS[forced] ? forced : null) ||
    detectScenarioFromFormula(formulaText) ||
    detectScenarioByKeywords(`${leafRelPath} ${motionId} ${title}`) ||
    "wavelength";
  const base = MODELS[scenario] || MODELS.wavelength;
  const doc = normalizeFormulasDoc(formulasDoc);
  const docTitle = doc?.topic?.title;
  const relabeled = relabelModelParams(base, formulasDoc);
  return {
    scenario,
    model: {
      ...relabeled,
      title: docTitle ? `Ondas: ${docTitle}` : relabeled.title,
      formula: formulaText || relabeled.formula,
    },
    primaryFormula: primary,
  };
}
