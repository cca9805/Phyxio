import React from "react";
import {
  SVG_CONTROL_TYPES,
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
} from "../svgGrammar";
import { SvgArrow } from "../SvgProfileRenderer";

const safeNum = (v, def = 0) => {
  if (typeof v === "number") return v;
  if (v && typeof v.value === "number") return v.value;
  const n = parseFloat(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : def;
};

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const tt = (lang, es, en) => (lang === "en" ? en : es);

const profile = {
  meta: {
    id: "svg-tubo-de-pitot",
    leafId: "tubo-de-pitot",
    title: {
      es: "Sonda de Pitot y Presión de Estancamiento",
      en: "Pitot Probe and Stagnation Pressure",
    },
    subtitle: {
      es: "Conversión de energía cinética en presión",
      en: "Conversion of kinetic energy into pressure",
    },
    graph_identity: {
      pregunta_principal: {
        es: "¿Cómo permite la presión de estancamiento medir la rapidez del flujo?",
        en: "How does stagnation pressure allow measuring flow speed?",
      },
      magnitud_estrella: "v",
    },
    interpretation_binding: {
      dp: "dp",
      rho: "rho",
      v: "v",
      p: "p",
      p_t: "p_t",
    },
    infoCards: [
      {
        key: "velocidad",
        label: { es: "Velocidad Calculada", en: "Calculated Velocity" },
        result: ({ p, fmt }) => {
            const v = Math.sqrt(2 * safeNum(p.dp, 450) / safeNum(p.rho, 1.2));
            return `${fmt(v, 2)} m/s (${fmt(v * 3.6, 1)} km/h)`;
        }
      },
      {
        key: "presion-dinamica",
        label: { es: "Presión Dinámica", en: "Dynamic Pressure" },
        description: { es: "La diferencia entre la presión total y la estática.", en: "The difference between total and static pressure." },
        result: ({ p, fmt }) => `${fmt(safeNum(p.dp, 450), 0)} Pa`
      },
    ],
  },

  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 920 520",
  svgHeight: 600,
  
  motion: {
    type: SVG_MOTION_TYPES.CUSTOM,
    state: (t, params) => {
      const v = Math.sqrt(2 * safeNum(params?.dp, 450) / safeNum(params?.rho, 1.2));
      return { flowOffset: (t * v * 0.5) % 100 };
    }
  },

  params: {
    schema: [
      {
        key: "rho",
        aliases: ["densidad", "density"],
        default: 1.2,
        label: { es: "Densidad ρ (kg/m³)", en: "Density ρ (kg/m³)" },
        unit: "kg/m³",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.1,
        max: 15,
        step: 0.1,
      },
      {
        key: "dp",
        aliases: ["delta_p", "presion_dinamica"],
        default: 450,
        label: { es: "Δp (Pa)", en: "Δp (Pa)" },
        unit: "Pa",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0,
        max: 2000,
        step: 10,
      },
    ],
  },

  render({ params = {}, lang = "es", motionState = { flowOffset: 0 } }) {
    const uiLang = lang === "en" ? "en" : "es";
    const rho = clamp(safeNum(params.rho, 1.2), 0.1, 15);
    const dp = clamp(safeNum(params.dp, 450), 0, 2000);
    const v = Math.sqrt((2 * dp) / rho);
    const { flowOffset } = motionState;

    const decSep = uiLang === "en" ? "." : ",";
    const fmtL = (n, d = 1) =>
      Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "-";

    const tubeY = 260;
    const tubeH = 160;
    const tubeTop = tubeY - tubeH / 2;
    const tubeBot = tubeY + tubeH / 2;
    
    // Animación de líneas de corriente
    const streamLines = [];
    for(let i = -3; i <= 3; i++) {
        if(i === 0) continue; // No cruzar el centro donde está el pitot
        streamLines.push(tubeY + i * 20);
    }

    return (
      <g>
        {/* Fondo decorativo */}
        <rect x="0" y="0" width="920" height="520" rx="28" fill="#07111f" />
        
        {/* Paredes del conducto */}
        <rect x="50" y={tubeTop} width="820" height="10" fill="#1e293b" />
        <rect x="50" y={tubeBot - 10} width="820" height="10" fill="#1e293b" />
        
        {/* Líneas de corriente animadas */}
        {streamLines.map((y, idx) => (
            <line 
                key={idx}
                x1="60" y1={y} x2="860" y2={y}
                stroke="#38bdf8"
                strokeWidth="1.5"
                opacity="0.3"
                strokeDasharray="20,15"
                strokeDashoffset={-flowOffset * 2}
            />
        ))}

        {/* Punto de estancamiento (visual) */}
        <circle cx="460" cy={tubeY} r="12" fill="#fbbf24" opacity="0.2">
            <animate attributeName="r" values="10;14;10" dur="2s" repeatCount="indefinite" />
        </circle>
        
        {/* Sonda de Pitot (L-shape) */}
        <path 
            d={`M 460 ${tubeY} L 700 ${tubeY} L 700 80`}
            fill="none"
            stroke="#94a3b8"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <circle cx="460" cy={tubeY} r="6" fill="#facc15" />
        
        {/* Etiquetas de presión */}
        <g transform={`translate(460, ${tubeY - 30})`}>
            <text fill="#facc15" fontSize="14" fontWeight="bold" textAnchor="middle">
                {tt(uiLang, "Punto de Estancamiento", "Stagnation Point")}
            </text>
            <text y="18" fill="#e2e8f0" fontSize="12" textAnchor="middle">
                (v = 0)
            </text>
        </g>

        {/* Vector de velocidad incidente */}
        <SvgArrow 
            x1={150} y1={tubeY}
            x2={150 + Math.min(60 + v * 2, 180)} y2={tubeY}
            color="#818cf8"
            strokeWidth={5}
            label={`v = ${fmtL(v, 2)} m/s`}
            labelDy={-15}
        />

        {/* Panel de parámetros superior */}
        <g transform="translate(60, 60)">
            <rect width="220" height="80" rx="12" fill="rgba(15, 23, 42, 0.8)" stroke="rgba(255,255,255,0.1)" />
            <text x="15" y="30" fill="#94a3b8" fontSize="12">{tt(uiLang, "CONDICIONES DEL FLUIDO", "FLUID CONDITIONS")}</text>
            <text x="15" y="55" fill="#e2e8f0" fontSize="16" fontWeight="bold">ρ = {fmtL(rho, 3)} kg/m³</text>
        </g>

        {/* Leyenda inferior */}
        <g transform="translate(100, 470)">
            <circle cx="0" cy="0" r="6" fill="#818cf8" />
            <text x="12" y="5" fill="#94a3b8" fontSize="12">{tt(uiLang, "Velocidad incidente", "Incident Velocity")}</text>
            
            <circle cx="180" cy="0" r="6" fill="#facc15" />
            <text x="192" y="5" fill="#94a3b8" fontSize="12">{tt(uiLang, "Presión total (p_t)", "Total Pressure (p_t)")}</text>
            
            <rect x="380" y="-1.5" width="20" height="3" fill="#38bdf8" />
            <text x="410" y="5" fill="#94a3b8" fontSize="12">{tt(uiLang, "Líneas de corriente", "Streamlines")}</text>
            
            <text x="600" y="5" fill="#facc15" fontSize="13" fontWeight="bold">
                {tt(uiLang, `Δp = ${fmtL(dp, 0)} Pa`, `Δp = ${fmtL(dp, 0)} Pa`)}
            </text>
        </g>
      </g>
    );
  },
};

export default profile;
