import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const toNum = (v, d) => {
  const n = Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : d;
};

const LEAF_TO_TOPIC = {
  "ecuacion-movimiento": "ecuacion-movimiento",
  "energia-en-mhs": "energia-en-mhs",
  fase: "fase",
  "oscilador-masa-muelle": "oscilador-masa-muelle",
  "pendulo-simple": "pendulo-simple",
  "pendulo-fisico": "pendulo-fisico",
  "pendulo-fisico-avanzado": "pendulo-fisico-avanzado",
  subamortiguado: "subamortiguado",
  critico: "critico",
  sobreamortiguado: "sobreamortiguado",
  "fuerza-forzada": "fuerza-forzada",
  resonancia: "resonancia",
};

function resolveTopicKey(leafRelPath = "") {
  const parts = String(leafRelPath).split("/").filter(Boolean);
  const last = parts[parts.length - 1] || "";
  return LEAF_TO_TOPIC[last] || "ecuacion-movimiento";
}

const BASE_SCHEMA = [
  { key: "A", default: 0.25 },
  { key: "omega", default: 4.5 },
  { key: "phiDeg", default: 0 },
  { key: "tMax", default: 14 },
  { key: "m", default: 1.0 },
  { key: "k", default: 22 },
  { key: "L", default: 1.1 },
  { key: "g", default: 9.81 },
  { key: "gamma", default: 0.22 },
  { key: "omega0", default: 2.5 },
  { key: "omegaF", default: 2.1 },
  { key: "b", default: 0.55 },
  { key: "F0", default: 1.0 },
  { key: "I", default: 0.7 },
  { key: "d", default: 0.45 },
];

function sampleTime(tMax, n = 220) {
  const out = [];
  for (let i = 0; i <= n; i += 1) {
    out.push((tMax * i) / n);
  }
  return out;
}

function buildCoordSpec(topicKey, p) {
  const A = toNum(p.A, 0.25);
  const omega = Math.max(0.01, toNum(p.omega, 4.5));
  const phi = (toNum(p.phiDeg, 0) * Math.PI) / 180;
  const tMax = Math.max(2, toNum(p.tMax, 14));
  const m = Math.max(0.05, toNum(p.m, 1.0));
  const k = Math.max(0.05, toNum(p.k, 22));
  const L = Math.max(0.05, toNum(p.L, 1.1));
  const g = Math.max(0.1, toNum(p.g, 9.81));
  const gamma = Math.max(0, toNum(p.gamma, 0.22));
  const omega0 = Math.max(0.05, toNum(p.omega0, 2.5));
  const omegaF = Math.max(0.05, toNum(p.omegaF, 2.1));
  const b = Math.max(0, toNum(p.b, 0.55));
  const F0 = Math.max(0.01, toNum(p.F0, 1.0));
  const I = Math.max(0.02, toNum(p.I, 0.7));
  const d = Math.max(0.02, toNum(p.d, 0.45));

  const defaultSpec = {
    title: "Oscilaciones (Coord)",
    formula: "x(t)=A\\cos(\\omega t+\\varphi)",
    xKey: "t",
    xLabel: "t",
    yLabel: "x",
    lines: [{ key: "x", name: "x(t)", color: "#60a5fa" }],
    data: sampleTime(tMax).map((t) => ({ t, x: A * Math.cos(omega * t + phi) })),
  };

  switch (topicKey) {
    case "ecuacion-movimiento": {
      return {
        title: "Ecuacion del movimiento (MHS)",
        formula: "x=A\\cos(\\omega t+\\varphi),\\ v=-A\\omega\\sin(\\omega t+\\varphi),\\ a=-\\omega^2x",
        xKey: "t",
        xLabel: "t (s)",
        yLabel: "magnitud",
        lines: [
          { key: "x", name: "x(t)", color: "#60a5fa" },
          { key: "v", name: "v(t)", color: "#34d399" },
          { key: "a", name: "a(t)", color: "#f59e0b" },
        ],
        data: sampleTime(tMax).map((t) => {
          const x = A * Math.cos(omega * t + phi);
          const v = -A * omega * Math.sin(omega * t + phi);
          const a = -(omega ** 2) * x;
          return { t, x, v, a };
        }),
      };
    }
    case "energia-en-mhs": {
      return {
        title: "Energia en MHS",
        formula: "K=\\frac12mv^2,\\ U=\\frac12kx^2,\\ E=K+U",
        xKey: "t",
        xLabel: "t (s)",
        yLabel: "energia (J)",
        lines: [
          { key: "K", name: "K", color: "#22c55e" },
          { key: "U", name: "U", color: "#3b82f6" },
          { key: "E", name: "E", color: "#f97316" },
        ],
        data: sampleTime(tMax).map((t) => {
          const x = A * Math.cos(omega * t + phi);
          const v = -A * omega * Math.sin(omega * t + phi);
          const K = 0.5 * m * v * v;
          const U = 0.5 * k * x * x;
          const E = K + U;
          return { t, K, U, E };
        }),
      };
    }
    case "fase": {
      return {
        title: "Fase y desfase",
        formula: "x=A\\cos(\\omega t+\\varphi),\\ \\tilde v=\\frac{v}{A\\omega}",
        xKey: "t",
        xLabel: "t (s)",
        yLabel: "x/A y v/(A*omega)",
        lines: [
          { key: "xNorm", name: "x/A", color: "#60a5fa" },
          { key: "vNorm", name: "v/(A*omega)", color: "#f59e0b" },
        ],
        data: sampleTime(tMax).map((t) => {
          const xNorm = Math.cos(omega * t + phi);
          const vNorm = -Math.sin(omega * t + phi);
          return { t, xNorm, vNorm };
        }),
      };
    }
    case "oscilador-masa-muelle": {
      const omegaN = Math.sqrt(k / m);
      return {
        title: "Oscilador masa-muelle",
        formula: "\\omega_0=\\sqrt{\\frac{k}{m}},\\ x=A\\cos(\\omega_0 t+\\varphi)",
        xKey: "t",
        xLabel: "t (s)",
        yLabel: "x (m)",
        lines: [{ key: "x", name: "x(t)", color: "#60a5fa" }],
        data: sampleTime(tMax).map((t) => ({ t, x: A * Math.cos(omegaN * t + phi) })),
      };
    }
    case "pendulo-simple": {
      const omegaP = Math.sqrt(g / L);
      return {
        title: "Pendulo simple (pequenos angulos)",
        formula: "\\theta(t)=\\theta_0\\cos\\left(\\sqrt{\\frac{g}{L}}t+\\varphi\\right)",
        xKey: "t",
        xLabel: "t (s)",
        yLabel: "theta (rad)",
        lines: [{ key: "theta", name: "theta(t)", color: "#a78bfa" }],
        data: sampleTime(tMax).map((t) => ({ t, theta: A * Math.cos(omegaP * t + phi) })),
      };
    }
    case "subamortiguado": {
      const wd = Math.sqrt(Math.max(0.0001, omega0 * omega0 - gamma * gamma));
      return {
        title: "Amortiguamiento subamortiguado",
        formula: "x=Ae^{-\\gamma t}\\cos(\\omega_d t+\\varphi),\\ \\omega_d=\\sqrt{\\omega_0^2-\\gamma^2}",
        xKey: "t",
        xLabel: "t (s)",
        yLabel: "x (m)",
        lines: [
          { key: "x", name: "x(t)", color: "#60a5fa" },
          { key: "env", name: "envolvente", color: "#f59e0b" },
        ],
        data: sampleTime(tMax).map((t) => {
          const env = A * Math.exp(-gamma * t);
          const x = env * Math.cos(wd * t + phi);
          return { t, x, env };
        }),
      };
    }
    case "critico": {
      return {
        title: "Amortiguamiento critico",
        formula: "x=A(1+\\omega_0 t)e^{-\\omega_0 t}",
        xKey: "t",
        xLabel: "t (s)",
        yLabel: "x (m)",
        lines: [{ key: "x", name: "x(t)", color: "#22c55e" }],
        data: sampleTime(tMax).map((t) => ({ t, x: A * (1 + omega0 * t) * Math.exp(-omega0 * t) })),
      };
    }
    case "sobreamortiguado": {
      const s = Math.sqrt(Math.max(0.0001, gamma * gamma - omega0 * omega0));
      const r1 = -(gamma - s);
      const r2 = -(gamma + s);
      return {
        title: "Amortiguamiento sobreamortiguado",
        formula: "x=C_1e^{r_1t}+C_2e^{r_2t}",
        xKey: "t",
        xLabel: "t (s)",
        yLabel: "x (m)",
        lines: [{ key: "x", name: "x(t)", color: "#06b6d4" }],
        data: sampleTime(tMax).map((t) => ({ t, x: 0.5 * A * Math.exp(r1 * t) + 0.5 * A * Math.exp(r2 * t) })),
      };
    }
    case "pendulo-fisico": {
      const omegaPF = Math.sqrt((m * g * d) / I);
      return {
        title: "Pendulo fisico",
        formula: "T=2\\pi\\sqrt{\\frac{I}{mgd}},\\ \\theta(t)=\\theta_0\\cos(\\omega_0 t+\\varphi)",
        xKey: "t",
        xLabel: "t (s)",
        yLabel: "theta (rad)",
        lines: [{ key: "theta", name: "theta(t)", color: "#ec4899" }],
        data: sampleTime(tMax).map((t) => ({ t, theta: A * Math.cos(omegaPF * t + phi) })),
      };
    }
    case "pendulo-fisico-avanzado": {
      const omegaPF = Math.sqrt((m * g * d) / I);
      return {
        title: "Pendulo fisico avanzado",
        formula: "\\omega_0=\\sqrt{\\frac{mgd}{I}},\\ \\theta(t)=\\theta_0\\cos(\\omega_0 t+\\varphi)",
        xKey: "t",
        xLabel: "t (s)",
        yLabel: "theta (rad)",
        lines: [{ key: "theta", name: "theta(t)", color: "#f43f5e" }],
        data: sampleTime(tMax).map((t) => ({ t, theta: A * Math.cos(omegaPF * t + phi) })),
      };
    }
    case "fuerza-forzada": {
      const den = Math.sqrt((k - m * omegaF * omegaF) ** 2 + (b * omegaF) ** 2);
      const X = F0 / Math.max(0.0001, den);
      const delta = Math.atan2(b * omegaF, k - m * omegaF * omegaF);
      return {
        title: "Respuesta a fuerza forzada",
        formula: "x(t)=X\\cos(\\omega_f t-\\delta),\\ X=\\frac{F_0}{\\sqrt{(k-m\\omega_f^2)^2+(b\\omega_f)^2}}",
        xKey: "t",
        xLabel: "t (s)",
        yLabel: "x (m)",
        lines: [{ key: "x", name: "x(t)", color: "#60a5fa" }],
        data: sampleTime(tMax).map((t) => ({ t, x: X * Math.cos(omegaF * t - delta) })),
      };
    }
    case "resonancia": {
      const omegaRef = Math.sqrt(k / m);
      const omegaMin = 0.15 * omegaRef;
      const omegaMax = 2.5 * omegaRef;
      const data = [];
      for (let i = 0; i <= 180; i += 1) {
        const wf = omegaMin + ((omegaMax - omegaMin) * i) / 180;
        const amp = F0 / Math.sqrt((k - m * wf * wf) ** 2 + (b * wf) ** 2);
        data.push({ wf, amp });
      }
      return {
        title: "Curva de resonancia",
        formula: "X(\\omega_f)=\\frac{F_0}{\\sqrt{(k-m\\omega_f^2)^2+(b\\omega_f)^2}}",
        xKey: "wf",
        xLabel: "omega_f (rad/s)",
        yLabel: "amplitud X (m)",
        lines: [{ key: "amp", name: "X(omega_f)", color: "#f97316" }],
        referenceX: omegaRef,
        data,
      };
    }
    default:
      return defaultSpec;
  }
}

export default function OscilacionesGraphsCoord({ title, params, leafRelPath }) {
  const topicKey = resolveTopicKey(leafRelPath);

  const exp = useExperimentParams({
    params,
    modeDefault: "follow",
    schema: BASE_SCHEMA,
  });
  const p = exp.effectiveParams;

  const spec = useMemo(() => buildCoordSpec(topicKey, p), [topicKey, p]);

  const setValue = (key, value) => {
    exp.startExperiment();
    exp.setValue(key, value);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || `${spec.title} (Coord)`}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={spec.formula} />
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
          {["A", "omega", "phiDeg", "tMax", "m", "k", "gamma", "omega0", "omegaF", "b", "F0", "L", "I", "d"].map(
            (key) => (
              <input
                key={key}
                className="form-control"
                style={{ width: 90 }}
                value={p[key]}
                onChange={(e) => setValue(key, e.target.value)}
                title={key}
              />
            )
          )}
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div style={{ width: "100%", height: 340 }}>
          <ResponsiveContainer>
            <LineChart data={spec.data} margin={{ top: 12, right: 14, left: 8, bottom: 12 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey={spec.xKey} tickFormatter={(v) => Number(v).toFixed(2)} label={{ value: spec.xLabel, position: "insideBottomRight", offset: -6 }} />
              <YAxis tickFormatter={(v) => Number(v).toFixed(2)} label={{ value: spec.yLabel, angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(v) => Number(v).toFixed(5)} />
              <Legend />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.35)" />
              {Number.isFinite(spec.referenceX) ? <ReferenceLine x={spec.referenceX} stroke="#fbbf24" strokeDasharray="5 3" /> : null}
              {spec.lines.map((line) => (
                <Line key={line.key} type="monotone" dataKey={line.key} name={line.name} stroke={line.color} strokeWidth={2.5} dot={false} />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

