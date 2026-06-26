import React, { useMemo } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import MathInline from "@/v2/components/shared/MathInline";

const EPS0 = 8.8541878128e-12;
const KE = 8.9875517923e9;

const fmt = (value, digits = 3) => {
  if (!Number.isFinite(value)) return "-";
  if (Math.abs(value) >= 1e4 || (Math.abs(value) > 0 && Math.abs(value) < 1e-2)) {
    return value.toExponential(2);
  }
  return value.toFixed(digits).replace(/\.?0+$/, "");
};

const pickText = (value, lang = "es", fallback = "") => {
  if (typeof value === "string") return value;
  if (value && typeof value === "object") return value[lang] || value.es || value.en || fallback;
  return fallback;
};

const range = (count, start, end) =>
  Array.from({ length: count }, (_, i) => {
    const t = count <= 1 ? 0 : i / (count - 1);
    return start + t * (end - start);
  });

function lineProfile({
  title,
  subtitle,
  xLabel,
  yLabel,
  equation,
  seriesName,
  color = "#38bdf8",
  data,
  notes,
  domainY,
}) {
  return { title, subtitle, xLabel, yLabel, equation, seriesName, color, data, notes, domainY };
}

function buildProfile(leafId, lang) {
  const es = lang !== "en";

  switch (leafId) {
    case "ley-de-coulomb": {
      const q1 = 2e-6;
      const q2 = 3e-6;
      const data = range(80, 0.04, 0.8).map((r) => ({
        x: r,
        y: (KE * Math.abs(q1 * q2)) / (r * r),
      }));
      return lineProfile({
        title: es ? "Fuerza frente a distancia" : "Force versus distance",
        subtitle: es ? "Cargas puntuales fijas; dependencia inversa cuadratica." : "Fixed point charges; inverse-square dependence.",
        xLabel: "r (m)",
        yLabel: "F (N)",
        equation: "F=k_e\\frac{|q_1q_2|}{r^2}",
        seriesName: "F(r)",
        color: "#f97316",
        data,
        notes: [
          es ? "Al duplicar r, la fuerza cae a la cuarta parte." : "Doubling r reduces the force to one quarter.",
          es ? "El signo de q1 q2 decide atraccion o repulsion; la grafica muestra el modulo." : "The sign of q1 q2 sets attraction or repulsion; the chart shows magnitude.",
        ],
      });
    }
    case "diferencia-de-potencial": {
      const eField = 120;
      const data = range(60, 0, 2).map((d) => ({ x: d, y: eField * d }));
      return lineProfile({
        title: es ? "Diferencia de potencial en campo uniforme" : "Potential difference in a uniform field",
        subtitle: es ? "La pendiente representa el campo electrico aplicado." : "The slope represents the applied electric field.",
        xLabel: "d (m)",
        yLabel: "Delta V (V)",
        equation: "\\Delta V=E\\,d",
        seriesName: "Delta V",
        color: "#22c55e",
        data,
      });
    }
    case "ley-de-gauss":
    case "formulacion-integral": {
      const data = range(81, -5e-9, 5e-9).map((q) => ({ x: q * 1e9, y: q / EPS0 }));
      return lineProfile({
        title: es ? "Flujo electrico y carga encerrada" : "Electric flux and enclosed charge",
        subtitle: es ? "La ley de Gauss convierte una fuente encerrada en flujo neto." : "Gauss's law turns enclosed source into net flux.",
        xLabel: "Q_enc (nC)",
        yLabel: "Phi_E (N m2/C)",
        equation: "\\Phi_E=\\frac{Q_{enc}}{\\varepsilon_0}",
        seriesName: "Phi_E",
        color: "#60a5fa",
        data,
      });
    }
    case "campo-de-distribuciones": {
      const r0 = 1;
      const e0 = 100;
      const data = range(100, 0.02, 3).map((r) => ({
        x: r,
        y: r <= r0 ? e0 * (r / r0) : e0 * (r0 * r0) / (r * r),
      }));
      return lineProfile({
        title: es ? "Campo radial de una distribucion esferica" : "Radial field of a spherical distribution",
        subtitle: es ? "Dentro crece con r; fuera decae como una carga puntual equivalente." : "Inside it grows with r; outside it decays like an equivalent point charge.",
        xLabel: "r/R",
        yLabel: "E/E(R)",
        equation: "E(r<R)\\propto r,\\quad E(r>R)\\propto \\frac{1}{r^2}",
        seriesName: "E(r)",
        color: "#a78bfa",
        data,
      });
    }
    case "lineas-de-campo":
      return {
        kind: "field-lines",
        title: es ? "Lineas de campo electrico" : "Electric field lines",
        subtitle: es ? "Las lineas salen de cargas positivas y entran en cargas negativas." : "Lines leave positive charges and enter negative charges.",
        equation: "\\vec E=\\frac{\\vec F}{q}",
      };
    case "condensadores": {
      const c = 4.7e-6;
      const data = range(70, 0, 12).map((v) => ({ x: v, y: c * v * 1e6 }));
      return lineProfile({
        title: es ? "Carga almacenada en un condensador" : "Stored charge in a capacitor",
        subtitle: es ? "La capacitancia es la pendiente Q/V." : "Capacitance is the Q/V slope.",
        xLabel: "V (V)",
        yLabel: "Q (microC)",
        equation: "Q=C\\,V",
        seriesName: "Q(V)",
        color: "#14b8a6",
        data,
      });
    }
    case "dielectricos": {
      const c0 = 2.2;
      const data = range(60, 1, 8).map((er) => ({ x: er, y: c0 * er }));
      return lineProfile({
        title: es ? "Capacitancia al introducir dielectrico" : "Capacitance with dielectric",
        subtitle: es ? "El dielectrico aumenta la capacitancia ideal por un factor epsilon_r." : "The dielectric increases ideal capacitance by epsilon_r.",
        xLabel: "epsilon_r",
        yLabel: "C (nF)",
        equation: "C=\\varepsilon_r C_0",
        seriesName: "C",
        color: "#f59e0b",
        data,
      });
    }
    case "circuitos-rc": {
      const data = range(100, 0, 5).map((t) => ({
        x: t,
        vc: 1 - Math.exp(-t),
        i: Math.exp(-t),
      }));
      return lineProfile({
        title: es ? "Carga de un circuito RC" : "RC charging response",
        subtitle: es ? "La tension sube exponencialmente y la corriente transitoria decae." : "Voltage rises exponentially and transient current decays.",
        xLabel: "t/tau",
        yLabel: "valor normalizado",
        equation: "V_C=V_0(1-e^{-t/RC}),\\quad I=I_0e^{-t/RC}",
        seriesName: "V_C",
        color: "#38bdf8",
        data,
        secondSeries: { key: "i", name: "I", color: "#fb7185" },
      });
    }
    case "intensidad-de-corriente": {
      const data = range(60, 0, 10).map((t) => ({ x: t, y: 0.42 * t }));
      return lineProfile({
        title: es ? "Carga transportada por una corriente constante" : "Charge transported by a steady current",
        subtitle: es ? "La corriente es la pendiente de Q frente al tiempo." : "Current is the slope of Q versus time.",
        xLabel: "t (s)",
        yLabel: "Q (C)",
        equation: "I=\\frac{\\Delta Q}{\\Delta t}",
        seriesName: "Q(t)",
        color: "#22d3ee",
        data,
      });
    }
    case "potencia-electrica": {
      const v = 12;
      const data = range(60, 0, 5).map((i) => ({ x: i, y: v * i }));
      return lineProfile({
        title: es ? "Potencia entregada por tension constante" : "Power delivered at fixed voltage",
        subtitle: es ? "Para V fija, P crece linealmente con la corriente." : "For fixed V, P grows linearly with current.",
        xLabel: "I (A)",
        yLabel: "P (W)",
        equation: "P=V\\,I",
        seriesName: "P(I)",
        color: "#e879f9",
        data,
      });
    }
    case "resistencia-y-ley-de-ohm": {
      const r = 6;
      const data = range(81, -4, 4).map((i) => ({ x: i, y: r * i }));
      return lineProfile({
        title: es ? "Caracteristica ohmica" : "Ohmic characteristic",
        subtitle: es ? "La resistencia es la pendiente de V frente a I." : "Resistance is the V versus I slope.",
        xLabel: "I (A)",
        yLabel: "V (V)",
        equation: "V=R\\,I",
        seriesName: "V(I)",
        color: "#f43f5e",
        data,
      });
    }
    case "resistencias-en-serie": {
      const rUnit = 10;
      const data = range(8, 1, 8).map((n) => ({ x: n, y: n * rUnit }));
      return lineProfile({
        title: es ? "Resistencia equivalente en serie" : "Equivalent resistance in series",
        subtitle: es ? "Cada resistencia sumada aumenta R_eq." : "Each added resistor increases R_eq.",
        xLabel: "numero de resistencias",
        yLabel: "R_eq (ohm)",
        equation: "R_{eq}=R_1+R_2+\\cdots",
        seriesName: "R_eq",
        color: "#84cc16",
        data,
      });
    }
    case "resistencias-en-paralelo": {
      const rUnit = 10;
      const data = range(8, 1, 8).map((n) => ({ x: n, y: rUnit / n }));
      return lineProfile({
        title: es ? "Resistencia equivalente en paralelo" : "Equivalent resistance in parallel",
        subtitle: es ? "R_eq baja al abrir caminos de corriente adicionales." : "R_eq decreases when extra current paths are added.",
        xLabel: "ramas iguales",
        yLabel: "R_eq (ohm)",
        equation: "\\frac{1}{R_{eq}}=\\sum_i\\frac{1}{R_i}",
        seriesName: "R_eq",
        color: "#2dd4bf",
        data,
      });
    }
    case "coste-de-la-electricidad": {
      const price = 0.18;
      const data = range(60, 0, 50).map((e) => ({ x: e, y: price * e }));
      return lineProfile({
        title: es ? "Coste frente a energia consumida" : "Cost versus consumed energy",
        subtitle: es ? "La pendiente es el precio por kWh." : "The slope is the price per kWh.",
        xLabel: "E (kWh)",
        yLabel: "coste",
        equation: "C=p_{kWh}E",
        seriesName: "C(E)",
        color: "#facc15",
        data,
      });
    }
    case "ecuacion-de-onda-electromagnetica": {
      const c = 3;
      const data = range(70, 0, 10).map((k) => ({ x: k, y: c * k }));
      return lineProfile({
        title: es ? "Relacion de dispersion en el vacio" : "Vacuum dispersion relation",
        subtitle: es ? "La pendiente omega/k es la velocidad de propagacion." : "The omega/k slope is propagation speed.",
        xLabel: "k",
        yLabel: "omega",
        equation: "\\omega=c\\,k",
        seriesName: "omega(k)",
        color: "#60a5fa",
        data,
      });
    }
    case "formulacion-diferencial": {
      const data = range(80, -2, 2).map((x) => ({ x, y: 2 * x }));
      return lineProfile({
        title: es ? "Divergencia local y densidad de carga" : "Local divergence and charge density",
        subtitle: es ? "La forma diferencial expresa fuentes punto a punto." : "The differential form expresses sources point by point.",
        xLabel: "rho",
        yLabel: "div E",
        equation: "\\nabla\\cdot\\vec E=\\rho/\\varepsilon_0",
        seriesName: "div E",
        color: "#818cf8",
        data,
      });
    }
    case "interpretacion-fisica": {
      const data = range(80, 0, 2 * Math.PI).map((x) => ({
        x,
        e: Math.sin(x),
        b: Math.sin(x),
        s: Math.sin(x) ** 2,
      }));
      return lineProfile({
        title: es ? "Campos en fase y flujo de energia" : "In-phase fields and energy flow",
        subtitle: es ? "E y B oscilan transversales; el flujo de energia apunta en la propagacion." : "E and B oscillate transversely; energy flow points along propagation.",
        xLabel: "fase",
        yLabel: "valor normalizado",
        equation: "\\vec S=\\frac{1}{\\mu_0}\\vec E\\times\\vec B",
        seriesName: "E",
        color: "#ef4444",
        data,
        secondSeries: { key: "b", name: "B", color: "#3b82f6" },
        thirdSeries: { key: "s", name: "S", color: "#22c55e" },
      });
    }
    case "generadores": {
      const data = range(120, 0, 2 * Math.PI).map((phase) => ({
        x: phase,
        y: Math.sin(phase),
        flux: Math.cos(phase),
      }));
      return lineProfile({
        title: es ? "Fem inducida durante el giro" : "Induced emf during rotation",
        subtitle: es
          ? "La fem es maxima cuando el flujo enlazado cambia mas rapido."
          : "Emf is maximum when linked flux changes fastest.",
        xLabel: es ? "fase de giro (rad)" : "rotation phase (rad)",
        yLabel: es ? "valor normalizado" : "normalized value",
        equation: "\\varepsilon_0=N B A\\omega",
        seriesName: "epsilon",
        color: "#f97316",
        data,
        secondSeries: { key: "flux", name: "Phi_B", color: "#38bdf8" },
        domainY: [-1.15, 1.15],
        notes: [
          es
            ? "Cuando Phi_B cruza por la zona central, epsilon alcanza su modulo maximo."
            : "When Phi_B crosses the central region, epsilon reaches maximum magnitude.",
          es
            ? "Aumentar N, B, A u omega escala la amplitud sin cambiar la forma ideal."
            : "Increasing N, B, A, or omega scales amplitude without changing the ideal shape.",
        ],
      });
    }
    default:
      return lineProfile({
        title: es ? "Grafico de coordenadas" : "Coordinate graph",
        subtitle: es ? "Relacion cuantitativa principal del leaf." : "Main quantitative relation for this leaf.",
        xLabel: "x",
        yLabel: "y",
        equation: "y=f(x)",
        seriesName: "y",
        color: "#38bdf8",
        data: range(40, 0, 1).map((x) => ({ x, y: x })),
      });
  }
}

function FieldLinesGraph({ profile }) {
  const charges = [
    { cx: 170, cy: 150, sign: "+", color: "#ef4444" },
    { cx: 470, cy: 150, sign: "-", color: "#3b82f6" },
  ];
  const lines = range(11, -1, 1).map((offset, i) => {
    const c1x = 260;
    const c1y = 150 + offset * 110;
    const c2x = 380;
    const c2y = 150 - offset * 70;
    return `M 190 ${150 + offset * 58} C ${c1x} ${c1y}, ${c2x} ${c2y}, 450 ${150 - offset * 42}`;
  });

  return (
    <div className="v2-card" style={{ padding: 12 }}>
      <div style={{ width: "100%", overflow: "hidden", borderRadius: 10 }}>
        <svg viewBox="0 0 640 320" width="100%" height="320" role="img" aria-label={profile.title}>
          <rect x="0" y="0" width="640" height="320" fill="rgba(15,23,42,0.92)" />
          <line x1="50" y1="280" x2="590" y2="280" stroke="rgba(255,255,255,0.25)" />
          <line x1="50" y1="40" x2="50" y2="280" stroke="rgba(255,255,255,0.25)" />
          <text x="585" y="302" fill="rgba(255,255,255,0.65)" fontSize="12">x</text>
          <text x="28" y="48" fill="rgba(255,255,255,0.65)" fontSize="12">y</text>
          {lines.map((d, i) => (
            <g key={d}>
              <path
                d={d}
                fill="none"
                stroke="#facc15"
                strokeWidth="2"
                opacity={0.35 + 0.045 * i}
                markerEnd="url(#arrow)"
              />
            </g>
          ))}
          <defs>
            <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#facc15" />
            </marker>
          </defs>
          {charges.map((charge) => (
            <g key={charge.sign}>
              <circle cx={charge.cx} cy={charge.cy} r="28" fill={charge.color} opacity="0.9" />
              <text x={charge.cx} y={charge.cy + 8} textAnchor="middle" fill="#fff" fontSize="28" fontWeight="800">
                {charge.sign}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export default function ElectromagnetismCoordGraph({ leafId, graphContract, lang = "es" }) {
  const profile = useMemo(() => buildProfile(leafId, lang), [leafId, lang]);
  const title = pickText(graphContract?.meta?.title, lang, profile.title);
  const question = pickText(graphContract?.graph_identity?.pregunta_principal, lang, "");
  const yKeys = [
    { key: "y", name: profile.seriesName || "y", color: profile.color || "#38bdf8" },
    profile.secondSeries,
    profile.thirdSeries,
  ].filter(Boolean);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 14 }}>
        <div className="v2-card-title">{title}</div>
        {question ? <p className="muted" style={{ marginTop: 6 }}>{question}</p> : null}
        <div style={{ marginTop: 10 }}>
          <MathInline latex={profile.equation || graphContract?.formula || "y=f(x)"} />
        </div>
      </div>

      {profile.kind === "field-lines" ? (
        <FieldLinesGraph profile={profile} />
      ) : (
        <div className="v2-card" style={{ padding: 12 }}>
          <div className="v2-card-title">{profile.title}</div>
          <div className="muted" style={{ marginTop: 4 }}>{profile.subtitle}</div>
          <div style={{ width: "100%", height: 360, marginTop: 12 }}>
            <ResponsiveContainer>
              <LineChart data={profile.data} margin={{ top: 12, right: 24, left: 10, bottom: 18 }}>
                <CartesianGrid strokeDasharray="4 4" stroke="rgba(148,163,184,0.28)" />
                <XAxis
                  dataKey="x"
                  type="number"
                  tickFormatter={(value) => fmt(value, 2)}
                  label={{ value: profile.xLabel, position: "insideBottomRight", offset: -10 }}
                />
                <YAxis
                  domain={profile.domainY || ["auto", "auto"]}
                  tickFormatter={(value) => fmt(value, 2)}
                  label={{ value: profile.yLabel, angle: -90, position: "insideLeft" }}
                />
                <Tooltip formatter={(value, name) => [fmt(Number(value), 4), name]} labelFormatter={(value) => `${profile.xLabel}: ${fmt(Number(value), 4)}`} />
                <ReferenceLine x={0} stroke="rgba(255,255,255,0.28)" />
                <ReferenceLine y={0} stroke="rgba(255,255,255,0.28)" />
                {yKeys.map((series) => (
                  <Line
                    key={series.key}
                    type="monotone"
                    dataKey={series.key}
                    name={series.name}
                    stroke={series.color}
                    strokeWidth={2.8}
                    dot={false}
                    isAnimationActive={false}
                  />
                ))}
                {yKeys.length > 1 ? <Legend /> : null}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {Array.isArray(profile.notes) && profile.notes.length > 0 ? (
        <div className="v2-card" style={{ padding: 12 }}>
          <div style={{ display: "grid", gap: 6 }}>
            {profile.notes.map((note) => (
              <div key={note} className="muted">{note}</div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
