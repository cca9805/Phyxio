import React from "react";

const profile = {
  meta: {
    leafId: "tipos-de-ondas-en-solidos",
    title: {
      es: "Tipos de ondas en solidos",
      en: "Types of Waves in Solids",
    },
  },
  title: {
    es: "Movimiento de particulas y velocidades caracteristicas",
    en: "Particle motion and characteristic speeds",
  },
  schema: [
    { key: "velocidad_de_onda_longitudinal_p", label: { es: "v_L (m/s)", en: "v_L (m/s)" }, min: 500, max: 9000, step: 50, defaultValue: 6000 },
    { key: "velocidad_de_onda_transversal_s", label: { es: "v_T (m/s)", en: "v_T (m/s)" }, min: 100, max: 5000, step: 50, defaultValue: 3200 },
    { key: "nu", label: { es: "nu", en: "nu" }, min: 0, max: 0.49, step: 0.01, defaultValue: 0.29 },
  ],
  computeState: (p, { toNum }) => {
    const vL = toNum(p.velocidad_de_onda_longitudinal_p, 6000);
    const vT = toNum(p.velocidad_de_onda_transversal_s, 3200);
    const nu = Math.max(0, Math.min(0.49, toNum(p.nu, 0.29)));
    const vR = vT * (0.862 + 1.14 * nu) / (1 + nu);
    return { velocidad_de_onda_longitudinal_p: vL, velocidad_de_onda_transversal_s: vT, velocidad_de_onda_de_rayleigh: vR, nu };
  },
  derivations: [
    { id: "velocidad_de_onda_longitudinal_p", label: { es: "Velocidad longitudinal", en: "Longitudinal speed" }, compute: (state) => state.velocidad_de_onda_longitudinal_p, unit: "m/s" },
    { id: "velocidad_de_onda_transversal_s", label: { es: "Velocidad transversal", en: "Transverse speed" }, compute: (state) => state.velocidad_de_onda_transversal_s, unit: "m/s" },
    { id: "velocidad_de_onda_de_rayleigh", label: { es: "Velocidad Rayleigh", en: "Rayleigh speed" }, compute: (state) => state.velocidad_de_onda_de_rayleigh, unit: "m/s" },
  ],
  graph_identity: {
    pregunta_principal: {
      es: "Que tipos de ondas se propagan en un solido y como se ordenan sus velocidades segun las propiedades elasticas?",
      en: "Which wave types propagate in a solid and how are their speeds ordered by elastic properties?",
      keywords: ["tipos", "ondas", "solido", "velocidad", "propiedades elasticas", "longitudinal", "transversal"],
    },
    magnitud_estrella: "velocidad_de_onda_transversal_s",
  },
  infoCards: [
    {
      key: "classification",
      label: { es: "Clasificacion", en: "Classification" },
      highlight: "P, S, Rayleigh",
      highlightColor: "#bfdbfe",
      description: {
        es: "Las ondas P comprimen, las S cortan y las Rayleigh quedan ligadas a la superficie.",
        en: "P waves compress, S waves shear and Rayleigh waves remain bound to the surface.",
      },
      lines: ({ state }) => [
        `v_L = ${state.velocidad_de_onda_longitudinal_p.toFixed(0)} m/s`,
        `v_T = ${state.velocidad_de_onda_transversal_s.toFixed(0)} m/s`,
        `v_R = ${state.velocidad_de_onda_de_rayleigh.toFixed(0)} m/s`,
      ],
      result: ({ state, lang }) =>
        lang === "en"
          ? `Expected order: v_L > v_T > v_R`
          : `Orden esperado: v_L > v_T > v_R`,
      resultColor: "#60a5fa",
    },
  ],
  interpretation_binding: {
    target: "velocidad_de_onda_transversal_s",
    magnitudes: ["velocidad_de_onda_longitudinal_p", "velocidad_de_onda_transversal_s", "velocidad_de_onda_de_rayleigh", "modulo_de_corte", "rho", "nu"],
    formula: "vel_transversal",
    physicalReading: {
      es: "El grafico distingue el tipo de onda por la direccion del movimiento de particula y por la velocidad caracteristica.",
      en: "The graph distinguishes wave type by particle-motion direction and characteristic speed.",
    },
  },
  render: ({ state, w, h, lang }) => {
    const label = (es, en) => (lang === "en" ? en : es);
    const rows = [
      {
        y: h * 0.22,
        color: "#2563eb",
        name: label("Longitudinal P", "Longitudinal P"),
        desc: label("particulas vibran en la direccion de propagacion", "particles vibrate along propagation"),
        value: state.velocidad_de_onda_longitudinal_p,
        arrows: "long",
      },
      {
        y: h * 0.50,
        color: "#16a34a",
        name: label("Transversal S", "Transverse S"),
        desc: label("particulas vibran perpendicularmente", "particles vibrate perpendicular to propagation"),
        value: state.velocidad_de_onda_transversal_s,
        arrows: "trans",
      },
      {
        y: h * 0.78,
        color: "#d97706",
        name: "Rayleigh",
        desc: label("movimiento eliptico cerca de la superficie", "elliptical motion near the surface"),
        value: state.velocidad_de_onda_de_rayleigh,
        arrows: "ellipse",
      },
    ];

    return (
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" height="100%">
        <rect x="0" y="0" width={w} height={h} rx="8" fill="#f8fafc" />
        <text x={w / 2} y="28" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0f172a">
          {label("Tipos de ondas en solidos", "Wave types in solids")}
        </text>
        {rows.map((row) => (
          <g key={row.name}>
            <line x1="90" y1={row.y} x2={w - 110} y2={row.y} stroke={row.color} strokeWidth="4" strokeLinecap="round" />
            <polygon points={`${w - 110},${row.y - 7} ${w - 92},${row.y} ${w - 110},${row.y + 7}`} fill={row.color} />
            {row.arrows === "long" ? (
              <>
                <line x1="165" y1={row.y - 24} x2="215" y2={row.y - 24} stroke={row.color} strokeWidth="2" markerEnd="url(#arrow)" />
                <line x1="255" y1={row.y - 24} x2="205" y2={row.y - 24} stroke={row.color} strokeWidth="2" markerEnd="url(#arrow)" />
              </>
            ) : null}
            {row.arrows === "trans" ? (
              <>
                <line x1="205" y1={row.y - 34} x2="205" y2={row.y - 10} stroke={row.color} strokeWidth="2" markerEnd="url(#arrow)" />
                <line x1="245" y1={row.y + 34} x2="245" y2={row.y + 10} stroke={row.color} strokeWidth="2" markerEnd="url(#arrow)" />
              </>
            ) : null}
            {row.arrows === "ellipse" ? (
              <ellipse cx="225" cy={row.y - 18} rx="34" ry="15" fill="none" stroke={row.color} strokeWidth="2" />
            ) : null}
            <text x="90" y={row.y - 34} fontSize="13" fontWeight="700" fill={row.color}>{row.name}</text>
            <text x="90" y={row.y + 26} fontSize="11" fill="#475569">{row.desc}</text>
            <text x={w - 90} y={row.y - 12} textAnchor="end" fontSize="12" fontWeight="700" fill="#0f172a">
              {row.value.toFixed(0)} m/s
            </text>
          </g>
        ))}
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#334155" />
          </marker>
        </defs>
      </svg>
    );
  },
};

export default profile;
