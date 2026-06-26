import React from "react";
import {
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
} from "@/v2/components/SVG/svgGrammar";
import { createSvgProfileContract } from "@/v2/components/SVG/profiles/svgProfileContracts.js";

const profile = {
  meta: {
    leafId: "reflexion-y-transmision-en-solidos",
    title: {
      es: "Reflexion y transmision en solidos",
      en: "Reflection and Transmission in Solids",
    },
  },
  title: {
    es: "Reflexion y transmision en una interfaz entre solidos",
    en: "Reflection and transmission at a solid-solid interface",
  },
  infoCards: [
    {
      key: "impedance-contrast",
      label: { es: "Contraste de impedancia", en: "Impedance contrast" },
      body: {
        es: "La fraccion de energia reflejada depende exclusivamente del contraste de impedancias acusticas entre los dos medios. Si Z_1 y Z_2 coinciden, no hay reflexion.",
        en: "The fraction of reflected energy depends exclusively on the acoustic impedance contrast between the two media. If Z_1 and Z_2 match, there is no reflection.",
      },
    },
    {
      key: "energy-conservation",
      label: { es: "Conservacion de energia", en: "Energy conservation" },
      body: {
        es: "La suma de los coeficientes energeticos de reflexion y transmision siempre es igual a la unidad. Lo que no se transmite, se refleja.",
        en: "The sum of the energy reflection and transmission coefficients always equals unity. What is not transmitted is reflected.",
      },
    },
  ],
  interpretation_binding: {
    target: "coeficiente_de_reflexion_en_amplitud",
    magnitudes: [
      "coeficiente_de_reflexion_en_amplitud",
      "coeficiente_de_transmision_en_amplitud",
      "coeficiente_de_reflexion_en_energia",
      "coeficiente_de_transmision_en_energia",
      "impedancia_acustica_del_medio_1",
      "impedancia_acustica_del_medio_2"
    ],
    formula: "coeficiente_reflexion_amplitud",
  },
  id: "reflexion-y-transmision-en-solidos-svg",
  leaf_id: "reflexion-y-transmision-en-solidos",
  graph_identity: {
    pregunta_principal: {
      es: "Que fraccion de la energia de una onda elastica se refleja y que fraccion se transmite al encontrar una interfaz entre dos solidos?",
      en: "What fraction of the energy of an elastic wave is reflected and what fraction is transmitted when encountering an interface between two solids?",
      keywords: ["reflexion", "transmision", "impedancia", "interfaz", "eco", "ultrasonidos"],
    },
    magnitud_estrella: "coeficiente_de_transmision_en_energia",
  },
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 920 520",
  svgHeight: 600,
  motion: { type: SVG_MOTION_TYPES.NONE },
  graph_contract: createSvgProfileContract({
    leafId: "reflexion-y-transmision-en-solidos",
    graphId: "reflexion-y-transmision-en-solidos-svg",
    purpose: {
      es: "Visualizar la onda incidente, reflejada y transmitida en una interfaz entre dos solidos con diferente impedancia acustica.",
      en: "Visualise the incident, reflected and transmitted wave at an interface between two solids with different acoustic impedance.",
    },
    level: ["Upper Secondary", "University"],
    expectedInputs: ["impedancia_acustica_del_medio_1", "impedancia_acustica_del_medio_2"],
    acceptedAliases: {
      impedancia_acustica_del_medio_1: ["impedance_1", "impedancia_1", "Z_1"],
      impedancia_acustica_del_medio_2: ["impedance_2", "impedancia_2", "Z_2"],
    },
    derivedMagnitudes: [
      "coeficiente_de_reflexion_en_amplitud",
      "coeficiente_de_transmision_en_amplitud",
      "coeficiente_de_reflexion_en_energia",
      "coeficiente_de_transmision_en_energia"
    ],
    targetCandidates: ["coeficiente_de_reflexion_en_amplitud", "coeficiente_de_reflexion_en_energia"],
    equations: ["R = (Z2-Z1)/(Z2+Z1)", "T = 2Z1/(Z2+Z1)"],
    hypotheses: [
      { es: "Incidencia normal.", en: "Normal incidence." },
      { es: "Interfaz plana perfectamente unida.", en: "Flat perfectly bonded interface." },
    ],
    validityDomain: [
      { es: "Medios homogeneos isotropos en regimen elastico lineal.", en: "Homogeneous isotropic media in linear elastic regime." },
    ],
    visualSimplifications: [
      { es: "Se muestran ondas sinusoidales con amplitud proporcional a los coeficientes.", en: "Sinusoidal waves with amplitude proportional to coefficients are shown." },
    ],
    alwaysVisible: ["interface_line", "incident_wave", "reflected_wave", "transmitted_wave"],
  }),
  params: {
    schema: [
      { key: "impedancia_acustica_del_medio_1", default: 46e6 },
      { key: "impedancia_acustica_del_medio_2", default: 17e6 },
    ],
    derivations: {
      coeficiente_de_reflexion_en_amplitud: ({ impedancia_acustica_del_medio_1, impedancia_acustica_del_medio_2 }) => {
        const z1 = Number(impedancia_acustica_del_medio_1 ?? 46e6);
        const z2 = Number(impedancia_acustica_del_medio_2 ?? 17e6);
        return (z2 - z1) / (z2 + z1);
      },
      coeficiente_de_transmision_en_amplitud: ({ impedancia_acustica_del_medio_1, impedancia_acustica_del_medio_2 }) => {
        const z1 = Number(impedancia_acustica_del_medio_1 ?? 46e6);
        const z2 = Number(impedancia_acustica_del_medio_2 ?? 17e6);
        return (2 * z1) / (z2 + z1);
      },
      coeficiente_de_reflexion_en_energia: ({ impedancia_acustica_del_medio_1, impedancia_acustica_del_medio_2 }) => {
        const z1 = Number(impedancia_acustica_del_medio_1 ?? 46e6);
        const z2 = Number(impedancia_acustica_del_medio_2 ?? 17e6);
        const r = (z2 - z1) / (z2 + z1);
        return r * r;
      },
      coeficiente_de_transmision_en_energia: ({ impedancia_acustica_del_medio_1, impedancia_acustica_del_medio_2 }) => {
        const z1 = Number(impedancia_acustica_del_medio_1 ?? 46e6);
        const z2 = Number(impedancia_acustica_del_medio_2 ?? 17e6);
        return (4 * z1 * z2) / ((z1 + z2) * (z1 + z2));
      },
    },
  },
  render: ({ p = {}, lang = "es" }) => {
    const z1 = Math.max(1, Number(p.impedancia_acustica_del_medio_1 ?? p.Z_1 ?? 46e6));
    const z2 = Math.max(1, Number(p.impedancia_acustica_del_medio_2 ?? p.Z_2 ?? 17e6));
    const R = (z2 - z1) / (z2 + z1);
    const T = (2 * z1) / (z2 + z1);
    const RE = R * R;
    const TE = 1 - RE;

    const interfaceX = 460;
    const waveY = 260;
    const ampInc = 60;
    const ampRef = Math.abs(R) * ampInc;
    const ampTrans = Math.min(T * ampInc, 100);

    const wavePath = (x0, xEnd, amp, direction) => {
      const pts = [];
      const n = 40;
      const dx = (xEnd - x0) / n;
      for (let i = 0; i <= n; i++) {
        const x = x0 + i * dx;
        const y = waveY + amp * Math.sin((i / n) * 4 * Math.PI) * direction;
        pts.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`);
      }
      return pts.join(" ");
    };

    return (
      <g>
        <rect x="54" y="42" width="812" height="420" rx="12" fill="#f8fafc" stroke="#cbd5e1" />
        <text x="460" y="68" textAnchor="middle" fill="#0f172a" fontSize="18" fontWeight="700">
          {lang === "en" ? "Reflection & Transmission at interface" : "Reflexion y transmision en interfaz"}
        </text>

        {/* Media labels */}
        <rect x="80" y="100" width="350" height="320" fill="#e0f2fe" rx="6" opacity="0.5" />
        <rect x="490" y="100" width="350" height="320" fill="#fef3c7" rx="6" opacity="0.5" />
        <text x="255" y="130" textAnchor="middle" fill="#0369a1" fontSize="14" fontWeight="600">
          {lang === "en" ? "Medium 1" : "Medio 1"}
        </text>
        <text x="665" y="130" textAnchor="middle" fill="#92400e" fontSize="14" fontWeight="600">
          {lang === "en" ? "Medium 2" : "Medio 2"}
        </text>

        {/* Interface */}
        <line x1={interfaceX} y1="100" x2={interfaceX} y2="420" stroke="#475569" strokeWidth="3" strokeDasharray="8 4" />

        {/* Incident wave */}
        <path d={wavePath(100, interfaceX - 10, ampInc, 1)} fill="none" stroke="#2563eb" strokeWidth="2.5" />
        <text x="200" y="180" fill="#2563eb" fontSize="12">
          {lang === "en" ? "Incident" : "Incidente"}
        </text>

        {/* Reflected wave */}
        <path d={wavePath(100, interfaceX - 10, ampRef, R > 0 ? 1 : -1)} fill="none" stroke="#dc2626" strokeWidth="2" strokeDasharray="5 3" />
        <text x="200" y="350" fill="#dc2626" fontSize="12">
          {lang === "en" ? "Reflected" : "Reflejada"}
        </text>

        {/* Transmitted wave */}
        <path d={wavePath(interfaceX + 10, 840, ampTrans, 1)} fill="none" stroke="#16a34a" strokeWidth="2.5" />
        <text x="665" y="180" fill="#16a34a" fontSize="12">
          {lang === "en" ? "Transmitted" : "Transmitida"}
        </text>

        {/* Values */}
        <text x="460" y="455" textAnchor="middle" fill="#0f172a" fontSize="13">
          R = {R.toFixed(3)} · T = {T.toFixed(3)} · R_E = {(RE * 100).toFixed(1)}% · T_E = {(TE * 100).toFixed(1)}%
        </text>
        <text x="255" y="440" textAnchor="middle" fill="#0369a1" fontSize="11">
          Z₁ = {(z1 / 1e6).toFixed(1)} MRayl
        </text>
        <text x="665" y="440" textAnchor="middle" fill="#92400e" fontSize="11">
          Z₂ = {(z2 / 1e6).toFixed(1)} MRayl
        </text>
      </g>
    );
  },
};

export default profile;
