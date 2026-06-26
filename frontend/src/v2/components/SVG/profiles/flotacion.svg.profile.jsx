import { 
  SVG_CONTROL_TYPES, 
  SVG_MOTION_TYPES, 
  SVG_SCENE_TYPES 
} from "../svgGrammar";

const safeNum = (v, def = 0) => {
  if (typeof v === "number") return v;
  const n = parseFloat(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : def;
};

const profile = {
  meta: {
    id: "svg-flotacion",
    leafId: "flotacion",
    title: { es: "Simulación de Flotación", en: "Flotation Simulation" },
  },

  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo varía el equilibrio de la fracción sumergida de un cuerpo al modificar la densidad relativa?",
      en: "How does the equilibrium of the submerged fraction of a body vary when modifying the relative density?",
    },
    magnitud_estrella: "frac_sum",
  },

  interpretation_binding: {
    paramsIn: ["rho_obj", "rho_f", "Vtot"],
    stateOut: ["frac_sum", "E", "P"],
    target: "frac_sum"
  },

  interpretation: {
    header_bridge: { es: "Análisis del equilibrio de flotación", en: "Flotation equilibrium analysis" },
    reading_focus: { es: "Balance de fuerzas verticales", en: "Vertical force balance" },
    graph_role: { es: "Representación vectorial del peso y empuje", en: "Vector representation of weight and buoyancy" },
    calc_reading: { es: "Cruce de densidades para determinar hundimiento", en: "Density crossover to determine sinking" },
    graph_reading: { es: "Vectores opuestos en equilibrio estático", en: "Opposing vectors in static equilibrium" },
    physical_insight: { es: "El empuje iguala al peso cuando se desplaza el volumen justo de fluido", en: "Buoyancy equals weight when the right volume of fluid is displaced" },
    likely_errors: {
      es: ["Confundir masa con peso", "Suponer que el empuje es constante al hundirse"],
      en: ["Confusing mass with weight", "Assuming buoyancy is constant when sinking"]
    }
  },

  viewBox: "0 0 900 650",
  svgHeight: 720,

  params: {
    schema: [
      {
        key: "rho_obj",
        default: 800,
        label: { es: "Densidad Objeto", en: "Object Density" },
        unit: "kg/m³",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 100,
        max: 1500,
        step: 10,
      },
      {
        key: "rho_f",
        default: 1000,
        label: { es: "Densidad Fluido", en: "Fluid Density" },
        unit: "kg/m³",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 500,
        max: 2000,
        step: 10,
      },
    ],
    derivations: {
      frac_sum: ({ rho_obj, rho_f }) => Math.min(1, safeNum(rho_obj, 800) / safeNum(rho_f, 1000)),
      E: ({ rho_f, rho_obj }) => safeNum(rho_f, 1000) * 9.81 * Math.min(1, safeNum(rho_obj, 800) / safeNum(rho_f, 1000)),
      P: ({ rho_obj }) => safeNum(rho_obj, 800) * 9.81
    },
  },

  infoCards: [
    {
      key: "state",
      label: { es: "Estado", en: "State" },
      highlight: ({ p, lang }) => (safeNum(p?.rho_obj) > safeNum(p?.rho_f) ? (lang === "en" ? "Sinking" : "Hundiéndose") : (lang === "en" ? "Floating" : "Flotando")),
      result: ({ p, lang }) => `fs: ${(safeNum(p?.frac_sum) * 100).toFixed(1)}%`
    }
  ],

  motion: { type: SVG_MOTION_TYPES.STATIC },

  render: ({ p, lang = "es", toNum }) => {
    const fs = toNum(p?.frac_sum, 0.8);
    const cy = 350;
    const size = 150;
    const waterLevel = cy + 50;
    const blockTop = waterLevel - size * (1 - fs);
    return (
      <g>
        <rect x="0" y="0" width="900" height="650" fill="#0f172a" />
        <rect x="100" y={waterLevel} width="700" height="250" fill="#38bdf8" fillOpacity="0.3" stroke="#38bdf8" />
        <rect x={450 - size/2} y={blockTop} width={size} height={size} fill="#94a3b8" stroke="#ffffff" strokeWidth="3" fillOpacity="0.8" />
      </g>
    );
  }
};

export default profile;
