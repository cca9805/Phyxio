const EPS = 1e-9;

export const toNum = (v, d) => {
  const n = Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : d;
};

export const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

function detectScenarioByKeywords(text = "") {
  const s = String(text || "").toLowerCase();

  if (s.includes("ondas") || s.includes("sonido")) return "ondas";
  if (s.includes("tension-superficial") || s.includes("capilar")) return "tension";
  if (s.includes("compresibilidad")) return "compresibilidad";
  if (s.includes("concepto-de-fluido") || s.includes("concepto de fluido")) return "concepto";
  if (s.includes("pascal")) return "pascal";
  if (s.includes("arquimedes") || s.includes("flotacion") || s.includes("empuje")) return "arquimedes";
  if (s.includes("continuidad")) return "continuidad";
  if (s.includes("bernoulli") || s.includes("venturi") || s.includes("pitot") || s.includes("sustentacion")) return "bernoulli";
  if (
    s.includes("reynolds") ||
    s.includes("laminar") ||
    s.includes("turbulento") ||
    s.includes("viscosidad") ||
    s.includes("tuberias") ||
    s.includes("ingenieriles") ||
    s.includes("hidrodinamica") ||
    s.includes("aerodinamica") ||
    s.includes("navier-stokes") ||
    s.includes("perdidas") ||
    s.includes("darcy")
  ) {
    return "reynolds";
  }
  if (
    s.includes("presion") ||
    s.includes("hidrostatica") ||
    s.includes("manometro") ||
    s.includes("vasos-comunicantes")
  ) {
    return "presion";
  }
  if (s.includes("densidad")) return "densidad";
  return null;
}

export function detectFluidScenario(leafRelPath = "", motionId = "", title = "") {
  const s = `${leafRelPath} ${motionId} ${title}`;
  const byKeywords = detectScenarioByKeywords(s);
  if (byKeywords) return byKeywords;

  return "densidad";
}

const PARAM_VAR_ALIASES = {
  rho1: ["rho"],
  rho2: ["rho"],
  rho: ["rho"],
  g: ["g"],
  p0: ["p0", "p_0", "pref", "presion_referencia"],
  hMax: ["h"],
  k: ["k", "K"],
  dPmax: ["dP", "dp", "delta_p", "deltap", "DeltaP"],
  sigma: ["sigma", "gamma"],
  rMin: ["r"],
  rMax: ["r"],
  a1: ["a1", "A1"],
  a2: ["a2", "A2"],
  f1Max: ["f1", "F1"],
  vObj: ["v", "V", "v_objeto"],
  mObj: ["m", "m_objeto"],
  q: ["q", "Q", "caudal"],
  a2Min: ["a2", "A2"],
  a2Max: ["a2", "A2"],
  vMax: ["v", "vel", "velocidad"],
  mu: ["mu"],
  d: ["d", "D", "diametro"],
  vel: ["v", "c", "velocidad"],
  fMin: ["f"],
  fMax: ["f"],
  mu1: ["mu"],
  mu2: ["mu"],
  gradMax: ["dudy", "du/dy", "gradiente_velocidad"],
};

function uniqStrings(arr) {
  return Array.from(new Set((Array.isArray(arr) ? arr : []).filter(Boolean)));
}

export function getFluidParamAliases(key) {
  const raw = String(key || "").trim();
  if (!raw) return [];

  const suffixLess = raw.replace(/(Max|Min)$/u, "");
  const out = [
    ...(PARAM_VAR_ALIASES[raw] || []),
    ...(PARAM_VAR_ALIASES[suffixLess] || []),
    suffixLess !== raw ? suffixLess : null,
  ];

  const idxMatch = suffixLess.match(/(\d+)$/u);
  if (idxMatch) {
    const idx = idxMatch[1];
    const stem = suffixLess.replace(/(\d+)$/u, "");
    out.push(`${stem}${idx}`, `${stem}_${idx}`, stem);
  }

  if (raw.endsWith("Max")) out.push(`${suffixLess}_max`, `${suffixLess}Max`);
  if (raw.endsWith("Min")) out.push(`${suffixLess}_min`, `${suffixLess}Min`);

  return uniqStrings(out);
}

function normalizeFormulaText(s = "") {
  return String(s || "").toLowerCase().replace(/\s+/g, "");
}

function detectFluidScenarioFromFormula(formula = "") {
  const f = normalizeFormulaText(formula);
  if (!f) return null;
  if (
    f.includes("\\deltap=f\\frac{l}{d}\\frac{\\rhov^2}{2}") ||
    (f.includes("\\deltap") && f.includes("\\frac{l}{d}") && f.includes("\\rho") && f.includes("v^2")) ||
    (f.includes("hf=") && f.includes("\\deltap") && f.includes("\\rho") && f.includes("g"))
  ) {
    return "reynolds";
  }
  if (f.includes("re=") || f.includes("\\frac{\\rhovd}{\\mu}") || f.includes("\\frac{\\rhovd}{mu}")) return "reynolds";
  if (f.includes("\\tau=\\mu\\frac{du}{dy}") || (f.includes("\\tau") && f.includes("du}{dy"))) return "concepto";
  if (f.includes("\\frac{f_1}{a_1}=\\frac{f_2}{a_2}") || (f.includes("f_1") && f.includes("a_1") && f.includes("f_2") && f.includes("a_2"))) return "pascal";
  if (f.includes("q=a_1v_1=a_2v_2") || (f.includes("a_1v_1") && f.includes("a_2v_2"))) return "continuidad";
  if (f.includes("p+\\frac{1}{2}\\rhov^2") || (f.includes("\\rho") && f.includes("gz") && f.includes("\\frac{1}{2}"))) return "bernoulli";
  if (f.includes("\\deltap=\\frac{2\\sigma}{r}") || (f.includes("\\sigma") && f.includes("\\frac{2") && f.includes("/r"))) return "tension";
  if (f.includes("\\frac{\\deltav}{v}") && f.includes("k")) return "compresibilidad";
  if (f.includes("e=\\rhogv_{desplazado}") || (f.includes("\\rho") && f.includes("desplazado"))) return "arquimedes";
  if (f.includes("p=p_0+\\rhogh") || (f.includes("\\rhogh") && f.includes("p_0"))) return "presion";
  if (f.includes("\\rho=\\frac{m}{v}") || f.includes("\\rho=\\frac{m}{v}")) return "densidad";
  if (f.includes("v=\\lambdaf") || (f.includes("\\lambda") && f.includes("f"))) return "ondas";
  return null;
}

function normalizeFormulasDoc(formulasDoc) {
  const d = formulasDoc?.default && typeof formulasDoc.default === "object" ? formulasDoc.default : formulasDoc;
  if (!d) return null;
  if (Array.isArray(d)) return { formulas: d };
  if (Array.isArray(d.formulas)) return d;
  return null;
}

function normalizeMagnitudesDoc(magnitudesDoc) {
  const d = magnitudesDoc?.default && typeof magnitudesDoc.default === "object" ? magnitudesDoc.default : magnitudesDoc;
  if (!d) return null;
  if (Array.isArray(d)) return { magnitudes: d };
  if (Array.isArray(d.magnitudes)) return d;
  return null;
}

function getPrimaryFormula(formulasDoc) {
  const doc = normalizeFormulasDoc(formulasDoc);
  if (!doc || !Array.isArray(doc.formulas) || doc.formulas.length === 0) return null;
  const wantId = doc?.ui?.default_formula;
  if (wantId) {
    const found = doc.formulas.find((f) => String(f?.id || "") === String(wantId));
    if (found) return found;
  }
  return doc.formulas[0];
}

function detectFluidScenarioFromDoc(formulasDoc, primaryFormula) {
  const doc = normalizeFormulasDoc(formulasDoc);
  const txt = [
    doc?.topic?.id,
    doc?.topic?.title,
    primaryFormula?.id,
    primaryFormula?.title,
    primaryFormula?.latex,
    primaryFormula?.equation,
  ]
    .filter(Boolean)
    .join(" ");
  return detectScenarioByKeywords(txt);
}

function toUiSymbol(symbol = "", fallback = "") {
  if (!symbol) return fallback;
  let s = String(symbol);
  s = s
    .replace(/\\rho/g, "rho")
    .replace(/\\mu/g, "mu")
    .replace(/\\tau/g, "tau")
    .replace(/\\sigma/g, "sigma")
    .replace(/\\lambda/g, "lambda")
    .replace(/\\Delta/g, "Delta")
    .replace(/\\frac\{du\}\{dy\}/g, "du/dy")
    .replace(/[{}]/g, "")
    .replace(/\\/g, "")
    .trim();
  return s || fallback;
}

function buildVariableIndex(formulasDoc, magnitudesDoc) {
  const out = {};
  const fDoc = normalizeFormulasDoc(formulasDoc);
  const mDoc = normalizeMagnitudesDoc(magnitudesDoc);
  const add = (id, symbol, name, unit) => {
    const key = String(id || "").trim();
    if (!key) return;
    if (!out[key]) out[key] = {};
    if (symbol) out[key].symbol = symbol;
    if (name) out[key].name = name;
    if (unit) out[key].unit = unit;
  };
  for (const v of fDoc?.variables || []) {
    add(v?.id, v?.symbol, v?.name, v?.si_unit);
  }
  for (const m of mDoc?.magnitudes || []) {
    add(m?.id, m?.symbol, m?.nombre || m?.name, m?.unidad_si || m?.si_unit);
  }
  return out;
}

function labelForParam(key, fallbackLabel, varIndex) {
  const suffix = key.endsWith("Max") ? " max" : key.endsWith("Min") ? " min" : "";
  const baseKey = key.replace(/(Max|Min)$/u, "");
  const idxMatch = baseKey.match(/(\d+)$/u);
  const idx = idxMatch ? idxMatch[1] : "";
  const aliases = PARAM_VAR_ALIASES[key] || PARAM_VAR_ALIASES[baseKey] || [baseKey];
  for (const alias of aliases) {
    const hit = varIndex[alias];
    if (!hit) continue;
    const sym = toUiSymbol(hit.symbol, "");
    const name = String(hit.name || "").replace(/_/g, " ").trim();
    const unitRaw = String(hit.unit || "").trim();
    const unit = unitRaw ? ` (${unitRaw})` : "";
    const baseSym = sym ? `${sym}${idx ? `_${idx}` : ""}` : "";
    const base = baseSym || name;
    if (base) return `${base}${suffix}${unit}`;
  }
  return fallbackLabel;
}

function buildDensidad(p) {
  const rho1 = Math.max(EPS, toNum(p.rho1, 1000));
  const rho2 = Math.max(EPS, toNum(p.rho2, 780));
  const vMax = Math.max(0.5, toNum(p.vMax, 6));
  const data = [];
  const nPts = 220;
  for (let i = 0; i <= nPts; i += 1) {
    const V = (vMax * i) / nPts;
    data.push({ x: V, y1: rho1 * V, y2: rho2 * V });
  }
  return {
    data,
    xLabel: "V (m^3)",
    y1Label: "m1 (kg)",
    y2Label: "m2 (kg)",
    summary: `m = rho * V, con rho1=${rho1.toFixed(1)} y rho2=${rho2.toFixed(1)} kg/m^3`,
  };
}

function buildPresion(p) {
  const rho = Math.max(EPS, toNum(p.rho, 1000));
  const g = Math.max(EPS, toNum(p.g, 9.81));
  const p0 = Math.max(0, toNum(p.p0, 101325));
  const hMax = Math.max(0.5, toNum(p.hMax, 25));
  const data = [];
  const nPts = 220;
  for (let i = 0; i <= nPts; i += 1) {
    const h = (hMax * i) / nPts;
    const pAbs = p0 + rho * g * h;
    const pGauge = pAbs - p0;
    data.push({ x: h, y1: pAbs / 1000, y2: pGauge / 1000 });
  }
  return {
    data,
    xLabel: "h (m)",
    y1Label: "P_abs (kPa)",
    y2Label: "P_gauge (kPa)",
    summary: `P = P0 + rho g h, con rho=${rho.toFixed(1)} kg/m^3 y g=${g.toFixed(2)} m/s2`,
  };
}

function buildCompresibilidad(p) {
  const k = Math.max(EPS, toNum(p.k, 2.2e9));
  const dPmax = Math.max(1000, toNum(p.dPmax, 8e6));
  const data = [];
  const nPts = 220;
  for (let i = 0; i <= nPts; i += 1) {
    const dP = (dPmax * i) / nPts;
    const eps = dP / k;
    data.push({ x: dP / 1e6, y1: eps * 100, y2: (0.5 * dP * eps) / 1e3 });
  }
  return {
    data,
    xLabel: "DeltaP (MPa)",
    y1Label: "DeltaV/V (%)",
    y2Label: "w (kJ/m^3)",
    summary: `Compresion volumetrica lineal con K=${(k / 1e9).toFixed(2)} GPa`,
  };
}

function buildTension(p) {
  const sigma = Math.max(EPS, toNum(p.sigma, 0.072));
  const rMin = Math.max(EPS, toNum(p.rMin, 0.0005));
  const rMaxRaw = Math.max(rMin + EPS, toNum(p.rMax, 0.02));
  const rMax = Math.max(rMin + EPS, rMaxRaw);
  const data = [];
  const nPts = 220;
  for (let i = 0; i <= nPts; i += 1) {
    const r = rMin + ((rMax - rMin) * i) / nPts;
    const dP = (2 * sigma) / r;
    const F = 2 * Math.PI * r * sigma;
    data.push({ x: r * 1000, y1: dP, y2: F });
  }
  return {
    data,
    xLabel: "r (mm)",
    y1Label: "DeltaP (Pa)",
    y2Label: "F borde (N)",
    summary: `Tension superficial: DeltaP = 2 sigma/r. A menor radio, mayor salto de presion.`,
  };
}

function buildPascal(p) {
  const a1 = Math.max(EPS, toNum(p.a1, 0.012));
  const a2 = Math.max(EPS, toNum(p.a2, 0.2));
  const f1Max = Math.max(10, toNum(p.f1Max, 1200));
  const data = [];
  const nPts = 220;
  for (let i = 0; i <= nPts; i += 1) {
    const f1 = (f1Max * i) / nPts;
    const f2 = f1 * (a2 / a1);
    data.push({ x: f1, y1: f2, y2: a2 / a1 });
  }
  return {
    data,
    xLabel: "F1 (N)",
    y1Label: "F2 (N)",
    y2Label: "ventaja mecanica",
    summary: `F2/F1 = A2/A1 = ${(a2 / a1).toFixed(2)}`,
  };
}

function buildArquimedes(p) {
  const rho = Math.max(EPS, toNum(p.rho, 1000));
  const g = Math.max(EPS, toNum(p.g, 9.81));
  const vObj = Math.max(EPS, toNum(p.vObj, 0.12));
  const mObj = Math.max(EPS, toNum(p.mObj, 80));
  const data = [];
  const nPts = 220;
  const w = mObj * g;
  for (let i = 0; i <= nPts; i += 1) {
    const frac = i / nPts;
    const vSub = frac * vObj;
    const E = rho * g * vSub;
    data.push({ x: frac * 100, y1: E, y2: w });
  }
  return {
    data,
    xLabel: "Volumen sumergido (%)",
    y1Label: "Empuje (N)",
    y2Label: "Peso (N)",
    summary: `Flota si Empuje >= Peso. Peso actual: ${w.toFixed(2)} N`,
  };
}

function buildContinuidad(p) {
  const q = Math.max(EPS, toNum(p.q, 0.08));
  const a1 = Math.max(EPS, toNum(p.a1, 0.04));
  const a2Min = Math.max(EPS, toNum(p.a2Min, 0.005));
  const a2Max = Math.max(a2Min + EPS, toNum(p.a2Max, 0.08));
  const v1 = q / a1;
  const data = [];
  const nPts = 220;
  for (let i = 0; i <= nPts; i += 1) {
    const a2 = a2Min + ((a2Max - a2Min) * i) / nPts;
    data.push({ x: a2, y1: q / a2, y2: v1 });
  }
  return {
    data,
    xLabel: "A2 (m^2)",
    y1Label: "v2 (m/s)",
    y2Label: "v1 (m/s)",
    summary: `Q = A v constante. v1=${v1.toFixed(3)} m/s`,
  };
}

function buildBernoulli(p) {
  const rho = Math.max(EPS, toNum(p.rho, 1000));
  const p0 = Math.max(0, toNum(p.p0, 220000));
  const vMax = Math.max(0.5, toNum(p.vMax, 35));
  const data = [];
  const nPts = 220;
  for (let i = 0; i <= nPts; i += 1) {
    const v = (vMax * i) / nPts;
    const q = 0.5 * rho * v * v;
    const pStatic = Math.max(0, p0 - q);
    data.push({ x: v, y1: pStatic / 1000, y2: q / 1000 });
  }
  return {
    data,
    xLabel: "v (m/s)",
    y1Label: "P_estatica (kPa)",
    y2Label: "q dinamica (kPa)",
    summary: `Bernoulli ideal: P + 1/2 rho v^2 = cte`,
  };
}

function buildReynolds(p) {
  const rho = Math.max(EPS, toNum(p.rho, 1000));
  const mu = Math.max(EPS, toNum(p.mu, 0.001));
  const d = Math.max(EPS, toNum(p.d, 0.05));
  const vMax = Math.max(0.5, toNum(p.vMax, 8));
  const data = [];
  const nPts = 220;
  for (let i = 0; i <= nPts; i += 1) {
    const v = (vMax * i) / nPts;
    const Re = (rho * v * d) / mu;
    const fLam = Re > EPS ? 64 / Re : 0;
    data.push({ x: v, y1: Re, y2: fLam });
  }
  return {
    data,
    xLabel: "v (m/s)",
    y1Label: "Re",
    y2Label: "f_laminar",
    summary: `Regimen tipico: laminar si Re < 2300, turbulento si Re > 4000`,
  };
}

function buildOndas(p) {
  const vel = Math.max(EPS, toNum(p.vel, 343));
  const fMax = Math.max(5, toNum(p.fMax, 1000));
  const fMin = Math.max(1, toNum(p.fMin, 40));
  const data = [];
  const nPts = 220;
  for (let i = 0; i <= nPts; i += 1) {
    const f = fMin + ((fMax - fMin) * i) / nPts;
    data.push({ x: f, y1: vel / f, y2: 1 / f });
  }
  return {
    data,
    xLabel: "f (Hz)",
    y1Label: "lambda (m)",
    y2Label: "T (s)",
    summary: `En un medio fijo: v = lambda f. Velocidad usada: ${vel.toFixed(1)} m/s`,
  };
}

function buildConcepto(p) {
  const mu1 = Math.max(EPS, toNum(p.mu1, 0.001));
  const mu2 = Math.max(EPS, toNum(p.mu2, 0.02));
  const gradMax = Math.max(1, toNum(p.gradMax, 120));
  const data = [];
  const nPts = 220;
  for (let i = 0; i <= nPts; i += 1) {
    const grad = (gradMax * i) / nPts;
    data.push({ x: grad, y1: mu1 * grad, y2: mu2 * grad });
  }
  return {
    data,
    xLabel: "du/dy (1/s)",
    y1Label: "tau(mu1) (Pa)",
    y2Label: "tau(mu2) (Pa)",
    summary: `tau = mu * (du/dy). mu se mide en Pa*s: aire ~1.8e-5, agua ~1e-3, aceites tipicos ~5e-2 a 1.`,
  };
}

const MODELS = {
  densidad: {
    title: "Fluidos: densidad",
    formula: "\\rho=\\frac{m}{V}",
    params: [
      { key: "rho1", label: "rho1", default: 1000 },
      { key: "rho2", label: "rho2", default: 780 },
      { key: "vMax", label: "Vmax", default: 6 },
    ],
    build: buildDensidad,
  },
  presion: {
    title: "Fluidos: presion e hidrostatica",
    formula: "P=P_0+\\rho g h",
    params: [
      { key: "rho", label: "rho", default: 1000 },
      { key: "g", label: "g", default: 9.81 },
      { key: "p0", label: "P0", default: 101325 },
      { key: "hMax", label: "hMax", default: 25 },
    ],
    build: buildPresion,
  },
  compresibilidad: {
    title: "Fluidos: compresibilidad",
    formula: "\\frac{\\Delta V}{V}\\approx\\frac{\\Delta P}{K}",
    params: [
      { key: "k", label: "K", default: 2.2e9 },
      { key: "dPmax", label: "DeltaP max", default: 8e6 },
    ],
    build: buildCompresibilidad,
  },
  tension: {
    title: "Fluidos: tension superficial",
    formula: "\\Delta P=\\frac{2\\sigma}{r}",
    params: [
      { key: "sigma", label: "sigma", default: 0.072 },
      { key: "rMin", label: "r min", default: 0.0005 },
      { key: "rMax", label: "r max", default: 0.02 },
    ],
    build: buildTension,
  },
  pascal: {
    title: "Fluidos: principio de Pascal",
    formula: "\\frac{F_1}{A_1}=\\frac{F_2}{A_2}",
    params: [
      { key: "a1", label: "A1", default: 0.012 },
      { key: "a2", label: "A2", default: 0.2 },
      { key: "f1Max", label: "F1 max", default: 1200 },
    ],
    build: buildPascal,
  },
  arquimedes: {
    title: "Fluidos: empuje de Arquimedes",
    formula: "E=\\rho g V_{desplazado}",
    params: [
      { key: "rho", label: "rho", default: 1000 },
      { key: "g", label: "g", default: 9.81 },
      { key: "vObj", label: "V objeto", default: 0.12 },
      { key: "mObj", label: "m objeto", default: 80 },
    ],
    build: buildArquimedes,
  },
  continuidad: {
    title: "Fluidos: ecuacion de continuidad",
    formula: "Q=A_1v_1=A_2v_2",
    params: [
      { key: "q", label: "Q", default: 0.08 },
      { key: "a1", label: "A1", default: 0.04 },
      { key: "a2Min", label: "A2 min", default: 0.005 },
      { key: "a2Max", label: "A2 max", default: 0.08 },
    ],
    build: buildContinuidad,
  },
  bernoulli: {
    title: "Fluidos: Bernoulli y aplicaciones",
    formula: "P+\\frac{1}{2}\\rho v^2+\\rho gz=\\text{cte}",
    params: [
      { key: "rho", label: "rho", default: 1000 },
      { key: "p0", label: "P0", default: 220000 },
      { key: "vMax", label: "vMax", default: 35 },
    ],
    build: buildBernoulli,
  },
  reynolds: {
    title: "Fluidos: viscosidad y regimenes",
    formula: "Re=\\frac{\\rho v D}{\\mu}",
    params: [
      { key: "rho", label: "rho", default: 1000 },
      { key: "mu", label: "mu", default: 0.001 },
      { key: "d", label: "D", default: 0.05 },
      { key: "vMax", label: "vMax", default: 8 },
    ],
    build: buildReynolds,
  },
  ondas: {
    title: "Fluidos: ondas y sonido",
    formula: "v=\\lambda f",
    params: [
      { key: "vel", label: "v medio", default: 343 },
      { key: "fMin", label: "f min", default: 40 },
      { key: "fMax", label: "f max", default: 1000 },
    ],
    build: buildOndas,
  },
  concepto: {
    title: "Fluidos: concepto de fluido",
    formula: "\\tau=\\mu\\frac{du}{dy}",
    params: [
      { key: "mu1", label: "mu_1 (Pa*s)", default: 0.001 },
      { key: "mu2", label: "mu_2 (Pa*s)", default: 0.02 },
      { key: "gradMax", label: "(du/dy)_max (1/s)", default: 120 },
    ],
    build: buildConcepto,
  },
};

export function getFluidModel(scenario) {
  return MODELS[scenario] || MODELS.densidad;
}

function parseFiniteNumber(v) {
  if (v === null || v === undefined || v === "") return null;
  const n = Number(String(v).replace(",", "."));
  return Number.isFinite(n) ? n : null;
}

function normalizeFluidParamSource(params) {
  if (!params || typeof params !== "object") return {};
  const out = {};
  const sources = [params.sharedParams, params.values, params.known, params.result, params];
  for (const src of sources) {
    if (!src || typeof src !== "object" || Array.isArray(src)) continue;
    Object.assign(out, src);
  }
  return out;
}

function readNumAny(bag, keys) {
  for (const k of keys) {
    if (!k) continue;
    const n = parseFiniteNumber(bag?.[k]);
    if (n !== null) return n;
  }
  return null;
}

function setNumIfMissing(bag, key, value) {
  if (!key) return;
  if (!Number.isFinite(value)) return;
  if (parseFiniteNumber(bag?.[key]) !== null) return;
  bag[key] = value;
}

function deriveFluidParamsByScenario(scenario, bag) {
  if (scenario === "bernoulli") {
    const rho = readNumAny(bag, ["rho"]);
    const q = readNumAny(bag, ["q", "q_dinamica"]);
    const v = readNumAny(bag, ["v", "vel", "velocidad"]);
    const p = readNumAny(bag, ["p"]);
    const p0 = readNumAny(bag, ["p0", "p_0", "pref"]);

    if (v === null && q !== null && rho !== null && rho > EPS && q >= 0) {
      setNumIfMissing(bag, "v", Math.sqrt((2 * q) / rho));
    }
    if (q === null && v !== null && rho !== null && rho > EPS) {
      setNumIfMissing(bag, "q", 0.5 * rho * v * v);
    }
    if (p0 === null && p !== null) {
      const qNow = readNumAny(bag, ["q", "q_dinamica"]);
      if (qNow !== null) setNumIfMissing(bag, "p0", p + qNow);
    }
    return;
  }

  if (scenario === "reynolds") {
    const rho = readNumAny(bag, ["rho"]);
    const v = readNumAny(bag, ["v", "vel", "velocidad"]);
    const D = readNumAny(bag, ["D", "d", "diametro"]);
    const mu = readNumAny(bag, ["mu"]);
    const Re = readNumAny(bag, ["Re", "re"]);
    const f = readNumAny(bag, ["f", "f_lam"]);

    if (Re === null && rho !== null && v !== null && D !== null && mu !== null && mu > EPS) {
      setNumIfMissing(bag, "Re", (rho * v * D) / mu);
    }
    if (Re === null && f !== null && f > EPS) {
      setNumIfMissing(bag, "Re", 64 / f);
    }

    const ReNow = readNumAny(bag, ["Re", "re"]);
    if (mu === null && rho !== null && v !== null && D !== null && ReNow !== null && ReNow > EPS) {
      setNumIfMissing(bag, "mu", (rho * v * D) / ReNow);
    }
    if (v === null && rho !== null && D !== null) {
      const muNow = readNumAny(bag, ["mu"]);
      if (muNow !== null && muNow > EPS && ReNow !== null) {
        setNumIfMissing(bag, "v", (ReNow * muNow) / (rho * D));
      }
    }
    return;
  }

  if (scenario === "presion") {
    const p = readNumAny(bag, ["p"]);
    const F = readNumAny(bag, ["F"]);
    const A = readNumAny(bag, ["A"]);
    const p0 = readNumAny(bag, ["p0", "p_0", "pref"]);
    const rho = readNumAny(bag, ["rho"]);
    const g = readNumAny(bag, ["g"]);
    const h = readNumAny(bag, ["h"]);

    if (p === null && F !== null && A !== null && Math.abs(A) > EPS) {
      setNumIfMissing(bag, "p", F / A);
    }
    if (h === null && p !== null && p0 !== null && rho !== null && g !== null && Math.abs(rho * g) > EPS) {
      setNumIfMissing(bag, "h", (p - p0) / (rho * g));
    }
    if (p0 === null && p !== null && rho !== null && g !== null && h !== null) {
      setNumIfMissing(bag, "p0", p - rho * g * h);
    }
    return;
  }

  if (scenario === "continuidad") {
    const Q = readNumAny(bag, ["Q", "q", "caudal"]);
    const A = readNumAny(bag, ["A", "a1", "A1"]);
    const v = readNumAny(bag, ["v", "v1", "v2"]);
    const A1 = readNumAny(bag, ["A1", "a1"]);
    const A2 = readNumAny(bag, ["A2", "a2"]);
    const v1 = readNumAny(bag, ["v1"]);
    const v2 = readNumAny(bag, ["v2"]);

    if (Q === null && A !== null && v !== null) setNumIfMissing(bag, "Q", A * v);
    if (Q === null && A1 !== null && v1 !== null) setNumIfMissing(bag, "Q", A1 * v1);
    if (Q === null && A2 !== null && v2 !== null) setNumIfMissing(bag, "Q", A2 * v2);

    const qNow = readNumAny(bag, ["Q", "q"]);
    if (qNow !== null && A1 !== null && A1 > EPS) setNumIfMissing(bag, "v1", qNow / A1);
    if (qNow !== null && A2 !== null && A2 > EPS) setNumIfMissing(bag, "v2", qNow / A2);
    return;
  }

  if (scenario === "concepto") {
    const tau = readNumAny(bag, ["tau"]);
    const mu = readNumAny(bag, ["mu"]);
    const dudy = readNumAny(bag, ["dudy", "du/dy", "gradiente_velocidad"]);

    if (tau === null && mu !== null && dudy !== null) setNumIfMissing(bag, "tau", mu * dudy);
    if (mu === null && tau !== null && dudy !== null && Math.abs(dudy) > EPS) setNumIfMissing(bag, "mu", tau / dudy);
    if (dudy === null && tau !== null && mu !== null && Math.abs(mu) > EPS) setNumIfMissing(bag, "dudy", tau / mu);

    const muNow = readNumAny(bag, ["mu"]);
    const gradNow = readNumAny(bag, ["dudy", "du/dy", "gradiente_velocidad"]);
    if (muNow !== null) {
      setNumIfMissing(bag, "mu1", muNow);
      setNumIfMissing(bag, "mu2", muNow);
    }
    if (gradNow !== null) setNumIfMissing(bag, "gradMax", Math.max(1, Math.abs(gradNow)));
    return;
  }

  if (scenario === "tension") {
    const gamma = readNumAny(bag, ["gamma", "sigma"]);
    const r = readNumAny(bag, ["r"]);
    const dp = readNumAny(bag, ["dp", "dP", "delta_p"]);

    if (gamma !== null) setNumIfMissing(bag, "sigma", gamma);
    if (dp !== null && gamma !== null && dp > EPS) setNumIfMissing(bag, "r", (2 * gamma) / dp);

    const rNow = readNumAny(bag, ["r"]);
    if (rNow !== null && rNow > EPS) {
      setNumIfMissing(bag, "rMin", Math.max(1e-6, rNow * 0.4));
      setNumIfMissing(bag, "rMax", Math.max(rNow * 1.8, rNow + 1e-6));
    }
    return;
  }

  if (scenario === "compresibilidad") {
    const K = readNumAny(bag, ["K", "k"]);
    const dP = readNumAny(bag, ["dP", "dp", "DeltaP"]);
    const epsV = readNumAny(bag, ["epsV"]);

    if (dP === null && K !== null && epsV !== null) setNumIfMissing(bag, "dP", K * epsV);
    if (K === null && dP !== null && epsV !== null && Math.abs(epsV) > EPS) setNumIfMissing(bag, "K", dP / epsV);

    const dPNow = readNumAny(bag, ["dP", "dp", "DeltaP"]);
    if (K !== null) setNumIfMissing(bag, "k", K);
    if (dPNow !== null) setNumIfMissing(bag, "dPmax", Math.max(1000, Math.abs(dPNow)));
    return;
  }

  if (scenario === "arquimedes") {
    const Vsum = readNumAny(bag, ["Vsum", "vObj"]);
    const m = readNumAny(bag, ["m", "mObj"]);
    if (Vsum !== null) setNumIfMissing(bag, "vObj", Vsum);
    if (m !== null) setNumIfMissing(bag, "mObj", m);
    return;
  }

  if (scenario === "ondas") {
    const v = readNumAny(bag, ["v", "vel", "velocidad"]);
    const f = readNumAny(bag, ["f"]);
    const T = readNumAny(bag, ["T"]);
    const lambda = readNumAny(bag, ["lambda"]);

    if (v !== null) setNumIfMissing(bag, "vel", v);
    if (f === null && T !== null && Math.abs(T) > EPS) setNumIfMissing(bag, "f", 1 / T);
    const fNow = readNumAny(bag, ["f"]);
    if (v === null && lambda !== null && fNow !== null) setNumIfMissing(bag, "vel", lambda * fNow);
  }
}

export function withFluidDerivedParams({ scenario = "densidad", params = {} } = {}) {
  const merged = normalizeFluidParamSource(params);
  const bag = { ...merged };
  deriveFluidParamsByScenario(scenario, bag);
  return bag;
}

export function resolveFluidModelForLeaf({
  leafRelPath = "",
  motionId = "",
  title = "",
  formulasDoc = null,
  magnitudesDoc = null,
}) {
  const primaryFormula = getPrimaryFormula(formulasDoc);
  const leafFormulaLatex = primaryFormula?.latex || primaryFormula?.equation || "";
  const scenarioByFormula = detectFluidScenarioFromFormula(leafFormulaLatex);
  const scenarioByDoc = detectFluidScenarioFromDoc(formulasDoc, primaryFormula);
  const scenario = scenarioByFormula || scenarioByDoc || detectFluidScenario(leafRelPath, motionId, title);
  const base = getFluidModel(scenario);
  const varIndex = buildVariableIndex(formulasDoc, magnitudesDoc);
  const formulaTitle = normalizeFormulasDoc(formulasDoc)?.topic?.title;

  const params = (base.params || []).map((p) => ({
    ...p,
    label: labelForParam(p.key, p.label, varIndex),
  }));

  return {
    scenario,
    source: scenarioByFormula ? "formula" : scenarioByDoc ? "formula-doc" : "path",
    model: {
      ...base,
      title: formulaTitle ? `Fluidos: ${formulaTitle}` : base.title,
      formula: leafFormulaLatex || base.formula,
      params,
    },
    primaryFormula,
  };
}
