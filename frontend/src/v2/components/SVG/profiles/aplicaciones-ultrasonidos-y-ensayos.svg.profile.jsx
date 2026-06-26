import React from "react";
import {
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
} from "@/v2/components/SVG/svgGrammar";
import { createSvgProfileContract } from "@/v2/components/SVG/profiles/svgProfileContracts.js";

const profile = {
  meta: {
    leafId: "aplicaciones-ultrasonidos-y-ensayos",
    title: {
      es: "Aplicaciones Ultrasonidos y Ensayos",
      en: "Ultrasound and Testing Applications",
    },
  },
  title: {
    es: "Ensayo Ultrasónico Pulso-Eco",
    en: "Pulse-Echo Ultrasonic Testing",
  },
  infoCards: [
    {
      id: "pulse-echo",
      label: { es: "Método Pulso-Eco", en: "Pulse-Echo Method" },
      body: {
        es: "El transductor emite un pulso corto que viaja por el material. Al encontrar un defecto, parte de la energía se refleja como eco. El tiempo de vuelo t_vuelo determina la profundidad d = v·t/2.",
        en: "The transducer emits a short pulse that travels through the material. Upon encountering a defect, part of the energy reflects as an echo. The time of flight t_vuelo determines depth d = v·t/2.",
      },
    },
    {
      id: "impedance-matching",
      label: { es: "Adaptación de Impedancia", en: "Impedance Matching" },
      body: {
        es: "La impedancia acústica Z_ac = ρ·v governa la reflexión en interfaces. El gel acoplante reduce la diferencia de impedancia entre transductor y pieza, permitiendo que la energía penetre.",
        en: "Acoustic impedance Z_ac = ρ·v governs reflection at interfaces. Coupling gel reduces the impedance mismatch between transducer and part, allowing energy to penetrate.",
      },
    },
  ],
  interpretation_binding: {
    target: "d_defecto",
    magnitudes: ["v_us", "t_vuelo", "d_defecto", "Z_ac", "R_ac", "rho_mat"],
    formula: "profundidad_defecto",
  },
  id: "aplicaciones-ultrasonidos-y-ensayos-svg",
  leaf_id: "aplicaciones-ultrasonidos-y-ensayos",
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo se aplican los ultrasonidos en ensayos no destructivos para calcular la profundidad de un defecto?",
      en: "How are ultrasonics applied in non-destructive testing to calculate defect depth?",
      keywords: ["ultrasonidos", "ensayos", "defecto", "profundidad", "destructivos", "aplicaciones"],
    },
    magnitud_estrella: "d_defecto",
  },
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 920 520",
  svgHeight: 600,
  motion: { type: SVG_MOTION_TYPES.NONE },
  graph_contract: createSvgProfileContract({
    leafId: "aplicaciones-ultrasonidos-y-ensayos",
    graphId: "aplicaciones-ultrasonidos-y-ensayos-svg",
    purpose: {
      es: "Visualizar la propagación del pulso, la reflexión en el defecto y la señal A-scan resultante.",
      en: "Visualize pulse propagation, reflection at the defect and the resulting A-scan signal.",
    },
    level: ["University"],
    expectedInputs: ["v_us", "t_vuelo"],
    acceptedAliases: {
      v_us: ["ultrasonic_speed", "velocidad_ultrasonido"],
      t_vuelo: ["time_of_flight", "tof"],
      d_defecto: ["defect_depth", "profundidad"],
    },
    derivedMagnitudes: ["d_defecto", "Z_ac", "R_ac"],
    targetCandidates: ["d_defecto", "R_ac"],
    equations: ["d_defecto = v_us * t_vuelo / 2", "Z_ac = rho_mat * v_us"],
    hypotheses: [
      { es: "Medio homogéneo e isótropo.", en: "Homogeneous and isotropic medium." },
      { es: "Incidencia normal del haz.", en: "Normal beam incidence." },
    ],
    validityDomain: [
      { es: "Profundidad > zona ciega del transductor.", en: "Depth > transducer dead zone." },
      { es: "Defecto mayor que la longitud de onda.", en: "Defect larger than wavelength." },
    ],
    visualSimplifications: [
      { es: "Se muestra un corte lateral de la pieza con el camino del pulso.", en: "A lateral cross-section of the part with the pulse path is shown." },
    ],
    alwaysVisible: ["transducer", "pulse_path", "defect_marker", "ascan_trace"],
  }),
  params: {
    schema: [
      { key: "v_us", default: 5900 },
      { key: "t_vuelo", default: 8.5e-6 },
      { key: "rho_mat", default: 7800 },
    ],
    derivations: {
      d_defecto: ({ v_us, t_vuelo }) => Number(v_us ?? 5900) * Number(t_vuelo ?? 8.5e-6) / 2,
      Z_ac: ({ rho_mat, v_us }) => Number(rho_mat ?? 7800) * Number(v_us ?? 5900),
    },
  },
  render: ({ p = {}, lang = "es" }) => {
    const v_us = Number(p.v_us ?? 5900);
    const t_vuelo = Number(p.t_vuelo ?? 8.5e-6);
    const d_defecto = v_us * t_vuelo / 2;
    const thickness = 0.025;
    const defectY = 80 + (d_defecto / thickness) * 360;
    const clampedY = Math.min(Math.max(defectY, 100), 420);

    return (
      <g>
        <rect x="50" y="40" width="840" height="450" rx="12" fill="#0f172a" opacity="0.85" />
        <rect x="100" y="80" width="300" height="360" rx="6" fill="#334155" stroke="#64748b" strokeWidth="1.5" />
        <text x="250" y="460" textAnchor="middle" fill="#94a3b8" fontSize="12">
          {lang === "en" ? "Test piece" : "Pieza ensayada"}
        </text>
        <rect x="200" y="55" width="100" height="25" rx="4" fill="#3b82f6" />
        <text x="250" y="72" textAnchor="middle" fill="#fff" fontSize="10">
          {lang === "en" ? "Transducer" : "Transductor"}
        </text>
        <line x1="250" y1="80" x2="250" y2={clampedY} stroke="#60a5fa" strokeWidth="2" strokeDasharray="4 3" />
        <circle cx="250" cy={clampedY} r="8" fill="#ef4444" opacity="0.8" />
        <text x="270" y={clampedY + 4} fill="#ef4444" fontSize="11">
          {lang === "en" ? "Defect" : "Defecto"}
        </text>
        <rect x="480" y="80" width="350" height="360" rx="6" fill="#1e293b" stroke="#475569" strokeWidth="1" />
        <text x="655" y="460" textAnchor="middle" fill="#94a3b8" fontSize="12">A-scan</text>
        <line x1="500" y1="260" x2="810" y2="260" stroke="#475569" strokeWidth="1" />
        <rect x="510" y="230" width="8" height="60" fill="#3b82f6" rx="2" />
        <rect x={510 + (t_vuelo / (thickness * 2 / v_us)) * 280} y="240" width="6" height="40" fill="#ef4444" rx="2" />
        <text x="655" y="110" textAnchor="middle" fill="#f59e0b" fontSize="13" fontWeight="bold">
          d = {(d_defecto * 1000).toFixed(1)} mm
        </text>
        <text x="655" y="130" textAnchor="middle" fill="#94a3b8" fontSize="11">
          t = {(t_vuelo * 1e6).toFixed(1)} µs · v = {v_us} m/s
        </text>
      </g>
    );
  },
  interpretation: {
    header_bridge: { es: "d = v·t / 2", en: "d = v·t / 2" },
    reading_focus: { es: "Observe la posición del eco de defecto en el A-scan.", en: "Observe the defect echo position in the A-scan." },
    graph_role: { es: "Demostrar la relación directa entre tiempo de eco y profundidad.", en: "Demonstrate the direct relationship between echo time and depth." },
    calc_reading: { es: "Mayor tiempo de vuelo implica mayor profundidad.", en: "Longer time of flight implies greater depth." },
    graph_reading: { es: "El eco del defecto aparece antes que el eco de pared trasera.", en: "The defect echo appears before the back-wall echo." },
    physical_insight: { es: "La información de profundidad está en el tiempo; la de tipo de defecto, en la amplitud.", en: "Depth information is in time; defect type information is in amplitude." },
    likely_errors: {
      es: ["Olvidar dividir entre 2 el recorrido total.", "Usar la velocidad del agua en lugar de la del acero."],
      en: ["Forgetting to divide the total path by 2.", "Using water speed instead of steel speed."],
    },
  },
};

export default profile;
