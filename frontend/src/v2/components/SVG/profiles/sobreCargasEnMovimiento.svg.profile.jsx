import React from "react";
import {
  SVG_CONTROL_TYPES,
  SVG_MOTION_TYPES,
  SVG_SCENE_TYPES,
} from "../svgGrammar";

void SVG_CONTROL_TYPES;
void SVG_MOTION_TYPES;
void SVG_SCENE_TYPES;

const safeNum = (v, def = 0) => {
  if (typeof v === "number") return v;
  if (v && typeof v.value === "number") return v.value;
  const n = parseFloat(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : def;
};

const fmt = (n, d = 2, lang = "es") => {
  if (!Number.isFinite(n)) return "-";
  const text = n.toFixed(d);
  return lang === "en" ? text : text.replace(".", ",");
};

const profile = {
  meta: {
    id: "svg-sobre-cargas-en-movimiento",
    leafId: "sobre-cargas-en-movimiento",
    title: {
      es: "Carga movil en campo magnetico",
      en: "Moving charge in a magnetic field",
    },
    subtitle: {
      es: "Velocidad, campo y fuerza perpendicular",
      en: "Velocity, field, and perpendicular force",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Como se orientan v, B y F_B en una desviacion magnetica?",
      en: "How are v, B, and F_B oriented in a magnetic deflection?",
    },
    magnitud_estrella: "radio_de_trayectoria",
    variable_control: "campo_magnetico",
    interpretation_binding: {
      target: "radio_de_trayectoria",
      formula_ref: "radio_trayectoria_circular",
      result_key: "radio_de_trayectoria",
    },
  },
  infoCards: [
    {
      key: "radio",
      label: { es: "Radio visual", en: "Visual radius" },
      lines: ({ p, lang }) => {
        const q = safeNum(p?.q, 1.6e-19);
        const v = safeNum(p?.v, 2e6);
        const B = safeNum(p?.B, 0.2);
        const m = safeNum(p?.m, 1.67e-27);
        const s = safeNum(p?.s_theta, 1);
        const f = q * v * B * s;
        const r = B === 0 || q === 0 ? Infinity : (m * v) / (q * B);
        return [
          `r ${lang === "en" ? "about" : "aprox."} ${Number.isFinite(r) ? fmt(r, 3, lang) : "-"} m`,
          `F_B ${lang === "en" ? "about" : "aprox."} ${f.toExponential(2)} N`,
          lang === "en" ? `B ${fmt(B, 2, lang)} T` : `B ${fmt(B, 2, lang)} T`,
        ];
      },
    },
  ],
  controls: [
    {
      id: "B",
      label: { es: "Campo B (T)", en: "Field B (T)" },
      type: "slider",
      min: 0.02,
      max: 1,
      step: 0.02,
      default: 0.2,
    },
    {
      id: "v",
      label: { es: "Rapidez v (10^6 m/s)", en: "Speed v (10^6 m/s)" },
      type: "slider",
      min: 0.2e6,
      max: 5e6,
      step: 0.1e6,
      default: 2e6,
    },
  ],
  scene: SVG_SCENE_TYPES.CUSTOM,
  render: ({ p, lang = "es", dimensions = {} }) => {
    const isEs = lang === "es";
    const width = dimensions.width || 920;
    const height = dimensions.height || 520;
    const B = safeNum(p?.B, 0.2);
    const v = safeNum(p?.v, 2e6);
    const radius = Math.max(90, Math.min(240, 240 - B * 120 + (v / 5e6) * 70));
    const cx = 250;
    const cy = 310;
    const particleX = cx + radius * 0.6;
    const particleY = cy - radius * 0.8;
    const path = `M ${cx - 70} ${cy + 20} Q ${cx + 60} ${cy - radius} ${particleX} ${particleY}`;

    return (
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <rect x="0" y="0" width={width} height={height} fill="#f8fafc" />
        {Array.from({ length: 7 }, (_, row) =>
          Array.from({ length: 12 }, (_, col) => (
            <g key={`${row}-${col}`} transform={`translate(${80 + col * 65}, ${70 + row * 48})`}>
              <circle r="13" fill="none" stroke="#1d4ed8" strokeWidth="1.5" />
              <circle r="3" fill="#1d4ed8" />
            </g>
          ))
        )}
        <path d={path} fill="none" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" />
        <circle cx={particleX} cy={particleY} r="15" fill="#f97316" stroke="#9a3412" strokeWidth="2" />
        <text x={particleX} y={particleY + 5} textAnchor="middle" fontSize="16" fontWeight="700" fill="#7c2d12">q</text>
        <line x1={particleX - 115} y1={particleY} x2={particleX - 35} y2={particleY} stroke="#334155" strokeWidth="4" markerEnd="url(#arrow)" />
        <line x1={particleX} y1={particleY + 95} x2={particleX} y2={particleY + 32} stroke="#dc2626" strokeWidth="4" markerEnd="url(#arrowRed)" />
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 z" fill="#334155" />
          </marker>
          <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 z" fill="#dc2626" />
          </marker>
        </defs>
        <text x={particleX - 80} y={particleY - 12} fontSize="18" fill="#334155" fontWeight="700">v</text>
        <text x={particleX + 12} y={particleY + 70} fontSize="18" fill="#dc2626" fontWeight="700">F_B</text>
        <text x={76} y={42} fontSize="18" fill="#1d4ed8" fontWeight="700">B</text>
        <text x={70} y={height - 34} fontSize="15" fill="#475569">
          {isEs ? "Los circulos indican B saliendo del plano; la carga positiva se curva por F_B perpendicular." : "Circles show B out of the plane; the positive charge bends by perpendicular F_B."}
        </text>
      </svg>
    );
  },
};

export default profile;
