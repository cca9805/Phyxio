const TAU = Math.PI * 2;

export const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
export const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

const sample = (from, to, n, fn) => {
  const out = [];
  for (let i = 0; i <= n; i += 1) {
    const x = from + ((to - from) * i) / n;
    out.push(fn(x, i));
  }
  return out;
};

export function detectAnalyticScenario(leafRelPath = "", motionId = "", title = "") {
  const s = `${leafRelPath} ${motionId} ${title}`.toLowerCase();
  if (s.includes("coordenadas-generalizadas")) return "coordenadas";
  if (s.includes("ligaduras-y-grados-de-libertad")) return "ligaduras";
  if (s.includes("energia-cinetica-y-potencial")) return "energia";
  if (s.includes("ecuaciones-de-lagrange")) return "lagrange";
  if (s.includes("simetrias-y-conservaciones") || s.includes("noether")) return "noether";
  if (s.includes("transformacion-legendre")) return "legendre";
  if (s.includes("ecuaciones-de-hamilton")) return "hamilton";
  if (s.includes("oscilador-armonico")) return "oscilador";
  if (s.includes("pendulo")) return "pendulo";
  if (s.includes("problemas-con-ligaduras")) return "atwood";
  return "coordenadas";
}

function modelCoordenadas() {
  return {
    title: "Coordenadas generalizadas",
    formula: "x=r\\cos\\theta,\\ y=r\\sin\\theta",
    xLabel: "theta (rad)",
    y1Label: "x (m)",
    y2Label: "y (m)",
    params: [
      { key: "r", label: "r", min: 0.2, max: 8, step: 0.1, default: 2, aliases: ["radio"] },
      { key: "theta0", label: "theta0", min: -180, max: 180, step: 1, default: 0, aliases: ["angulo"] },
    ],
    build: (p) => {
      const r = clamp(toNum(p.r, 2), 0.2, 8);
      const theta0 = (Math.PI * clamp(toNum(p.theta0, 0), -180, 180)) / 180;
      const data = sample(0, TAU, 180, (theta) => ({
        x: theta,
        y1: r * Math.cos(theta + theta0),
        y2: r * Math.sin(theta + theta0),
      }));
      return { data };
    },
  };
}

function modelLigaduras() {
  return {
    title: "Ligaduras y grados de libertad",
    formula: "f=3n-C,\\ f_{2D}=2n-C",
    xLabel: "n",
    y1Label: "f (3D)",
    y2Label: "f (2D)",
    params: [
      { key: "C", label: "C", min: 0, max: 12, step: 1, default: 3, aliases: ["ligaduras"] },
    ],
    build: (p) => {
      const C = clamp(toNum(p.C, 3), 0, 12);
      const data = sample(1, 8, 56, (n) => ({
        x: n,
        y1: 3 * n - C,
        y2: 2 * n - C,
      }));
      return { data };
    },
  };
}

function modelEnergia() {
  return {
    title: "Lagrangiano: energia cinetica y potencial",
    formula: "L=T-V,\\ T=\\frac{1}{2}mv^2,\\ V=mgh",
    xLabel: "v (m/s)",
    y1Label: "T (J)",
    y2Label: "V (J)",
    params: [
      { key: "m", label: "m", min: 0.1, max: 30, step: 0.1, default: 2, aliases: ["masa"] },
      { key: "h", label: "h", min: 0, max: 20, step: 0.1, default: 3, aliases: ["altura"] },
      { key: "g", label: "g", min: 0.1, max: 20, step: 0.01, default: 9.81, aliases: ["gravedad"] },
    ],
    build: (p) => {
      const m = clamp(toNum(p.m, 2), 0.1, 30);
      const h = clamp(toNum(p.h, 3), 0, 20);
      const g = clamp(toNum(p.g, 9.81), 0.1, 20);
      const V = m * g * h;
      const data = sample(0, 18, 180, (v) => ({
        x: v,
        y1: 0.5 * m * v * v,
        y2: V,
      }));
      return { data };
    },
  };
}

function modelLagrange() {
  return {
    title: "Ecuaciones de Lagrange",
    formula: "\\ddot q=\\frac{Q-kq}{m}",
    xLabel: "q (m)",
    y1Label: "qdd (m/s2)",
    y2Label: "Qeq (N)",
    params: [
      { key: "m", label: "m", min: 0.1, max: 20, step: 0.1, default: 1, aliases: ["masa"] },
      { key: "k", label: "k", min: 0.1, max: 80, step: 0.1, default: 18, aliases: ["rigidez"] },
      { key: "Q", label: "Q", min: -50, max: 50, step: 0.5, default: 0, aliases: ["fuerza"] },
    ],
    build: (p) => {
      const m = clamp(toNum(p.m, 1), 0.1, 20);
      const k = clamp(toNum(p.k, 18), 0.1, 80);
      const Q = clamp(toNum(p.Q, 0), -50, 50);
      const data = sample(-2, 2, 180, (q) => ({
        x: q,
        y1: (Q - k * q) / m,
        y2: Q - k * q,
      }));
      return { data };
    },
  };
}

function modelNoether() {
  return {
    title: "Simetrias y conservaciones",
    formula: "p=mv,\\ L_z=rp",
    xLabel: "v (m/s)",
    y1Label: "p (kg m/s)",
    y2Label: "Lz (kg m2/s)",
    params: [
      { key: "m", label: "m", min: 0.1, max: 40, step: 0.1, default: 2, aliases: ["masa"] },
      { key: "r", label: "r", min: 0.1, max: 20, step: 0.1, default: 3, aliases: ["radio"] },
    ],
    build: (p) => {
      const m = clamp(toNum(p.m, 2), 0.1, 40);
      const r = clamp(toNum(p.r, 3), 0.1, 20);
      const data = sample(0, 20, 180, (v) => {
        const y1 = m * v;
        return { x: v, y1, y2: r * y1 };
      });
      return { data };
    },
  };
}

function modelLegendre() {
  return {
    title: "Transformacion de Legendre",
    formula: "H=p\\dot q-L,\\ p=m\\dot q",
    xLabel: "qdot (m/s)",
    y1Label: "p (kg m/s)",
    y2Label: "H (J)",
    params: [
      { key: "m", label: "m", min: 0.1, max: 20, step: 0.1, default: 1.5, aliases: ["masa"] },
      { key: "L", label: "L", min: -20, max: 40, step: 0.1, default: 2, aliases: ["lagrangiano"] },
    ],
    build: (p) => {
      const m = clamp(toNum(p.m, 1.5), 0.1, 20);
      const L = clamp(toNum(p.L, 2), -20, 40);
      const data = sample(-10, 10, 180, (qdot) => {
        const y1 = m * qdot;
        return { x: qdot, y1, y2: y1 * qdot - L };
      });
      return { data };
    },
  };
}

function modelHamilton() {
  return {
    title: "Ecuaciones de Hamilton",
    formula: "\\dot q=\\frac{p}{m},\\ \\dot p=-kq",
    xLabel: "q (m)",
    y1Label: "qdot (m/s)",
    y2Label: "pdot (N)",
    params: [
      { key: "m", label: "m", min: 0.1, max: 20, step: 0.1, default: 1, aliases: ["masa"] },
      { key: "k", label: "k", min: 0.1, max: 80, step: 0.1, default: 16, aliases: ["rigidez"] },
      { key: "p0", label: "p0", min: -20, max: 20, step: 0.1, default: 4, aliases: ["p"] },
    ],
    build: (p) => {
      const m = clamp(toNum(p.m, 1), 0.1, 20);
      const k = clamp(toNum(p.k, 16), 0.1, 80);
      const p0 = clamp(toNum(p.p0, 4), -20, 20);
      const data = sample(-2, 2, 180, (q) => ({
        x: q,
        y1: p0 / m,
        y2: -k * q,
      }));
      return { data };
    },
  };
}

function modelOscilador() {
  return {
    title: "Aplicacion: oscilador armonico",
    formula: "\\omega=\\sqrt{\\frac{k}{m}},\\ q=A\\cos(\\omega t)",
    xLabel: "t (s)",
    y1Label: "q (m)",
    y2Label: "p (kg m/s)",
    params: [
      { key: "m", label: "m", min: 0.1, max: 20, step: 0.1, default: 1.2, aliases: ["masa"] },
      { key: "k", label: "k", min: 0.1, max: 80, step: 0.1, default: 22, aliases: ["rigidez"] },
      { key: "A", label: "A", min: 0.02, max: 1.5, step: 0.01, default: 0.4, aliases: ["amplitud"] },
    ],
    build: (p) => {
      const m = clamp(toNum(p.m, 1.2), 0.1, 20);
      const k = clamp(toNum(p.k, 22), 0.1, 80);
      const A = clamp(toNum(p.A, 0.4), 0.02, 1.5);
      const w = Math.sqrt(k / m);
      const data = sample(0, 12, 240, (t) => ({
        x: t,
        y1: A * Math.cos(w * t),
        y2: -m * A * w * Math.sin(w * t),
      }));
      return { data };
    },
  };
}

function modelPendulo() {
  return {
    title: "Aplicacion: pendulo",
    formula: "\\omega\\approx\\sqrt{\\frac{g}{L}},\\ \\tau=-mgL\\sin\\theta",
    xLabel: "t (s)",
    y1Label: "theta (rad)",
    y2Label: "tau (N m)",
    params: [
      { key: "m", label: "m", min: 0.1, max: 20, step: 0.1, default: 1.5, aliases: ["masa"] },
      { key: "L", label: "L", min: 0.1, max: 5, step: 0.01, default: 1.2, aliases: ["longitud"] },
      { key: "g", label: "g", min: 0.1, max: 20, step: 0.01, default: 9.81, aliases: ["gravedad"] },
      { key: "A", label: "A", min: 0.02, max: 1, step: 0.01, default: 0.35, aliases: ["amplitud", "theta"] },
    ],
    build: (p) => {
      const m = clamp(toNum(p.m, 1.5), 0.1, 20);
      const L = clamp(toNum(p.L, 1.2), 0.1, 5);
      const g = clamp(toNum(p.g, 9.81), 0.1, 20);
      const A = clamp(toNum(p.A, 0.35), 0.02, 1);
      const w = Math.sqrt(g / L);
      const data = sample(0, 12, 240, (t) => {
        const y1 = A * Math.sin(w * t);
        return { x: t, y1, y2: -m * g * L * Math.sin(y1) };
      });
      return { data };
    },
  };
}

function modelAtwood() {
  return {
    title: "Aplicacion: problemas con ligaduras",
    formula: "a=\\frac{(m_2-m_1)g}{m_1+m_2},\\ T=\\frac{2m_1m_2}{m_1+m_2}g",
    xLabel: "m2/m1",
    y1Label: "a (m/s2)",
    y2Label: "T (N)",
    params: [
      { key: "m1", label: "m1", min: 0.1, max: 50, step: 0.1, default: 2, aliases: [] },
      { key: "g", label: "g", min: 0.1, max: 20, step: 0.01, default: 9.81, aliases: ["gravedad"] },
    ],
    build: (p) => {
      const m1 = clamp(toNum(p.m1, 2), 0.1, 50);
      const g = clamp(toNum(p.g, 9.81), 0.1, 20);
      const data = sample(0.2, 4, 160, (ratio) => {
        const m2 = m1 * ratio;
        const y1 = ((m2 - m1) * g) / (m1 + m2);
        const y2 = (2 * m1 * m2 * g) / (m1 + m2);
        return { x: ratio, y1, y2 };
      });
      return { data };
    },
  };
}

const byScenario = {
  coordenadas: modelCoordenadas,
  ligaduras: modelLigaduras,
  energia: modelEnergia,
  lagrange: modelLagrange,
  noether: modelNoether,
  legendre: modelLegendre,
  hamilton: modelHamilton,
  oscilador: modelOscilador,
  pendulo: modelPendulo,
  atwood: modelAtwood,
};

export function getAnalyticModel(scenario) {
  const fn = byScenario[scenario] || byScenario.coordenadas;
  return fn();
}

