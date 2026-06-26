// Profile para gráfico Coord de intensidad-ondulatoria
// Intensidad de onda esférica - ley del inverso del cuadrado

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

const graph_identity = {
  pregunta_principal: {
    es: "Como se cuantifica la intensidad de una onda tridimensional y que factores determinan su atenuacion con la distancia?",
    en: "How is the intensity of a three-dimensional wave quantified and what factors determine its attenuation with distance?",
  },
  variable_control: "r_distancia",
  magnitud_estrella: "I_intensidad",
  formula: "I_intensidad = P_potencia / (4 * PI * r_distancia^2)",
  target_interpretable: true,
};

const coordSemantic = {
  title: {
    es: "Intensidad ondulatoria - ley del inverso del cuadrado",
    en: "Wave intensity - inverse square law",
  },
  description: {
    es: "Visualizacion de la disminucion de intensidad con la distancia",
    en: "Visualization of intensity decrease with distance",
  },
  xAxis: {
    label: t("Distancia (m)", "Distance (m)"),
    unit: "m",
  },
  yAxis: {
    label: t("Intensidad (W/m²)", "Intensity (W/m²)"),
    unit: "W/m²",
  },
  series: [
    {
      id: "intensidad",
      name: t("Intensidad", "Intensity"),
      description: t("Intensidad de la onda segun la distancia", "Wave intensity according to distance"),
      color: "#f59e0b",
      lineWidth: 2,
    },
    {
      id: "area",
      name: t("Area esferica", "Spherical area"),
      description: t("Area de la superficie esferica de la onda", "Spherical surface area of the wave"),
      color: "#60a5fa",
      lineWidth: 2,
      yScale: "secondary",
    },
  ],
};

const physicsContext = {
  parameters: [
    { id: "P_potencia", symbol: "P", name: t("Potencia fuente", "Source power"), unit: "W", default: 100, min: 1, max: 10000 },
    { id: "r_max", symbol: "r_max", name: t("Distancia maxima", "Maximum distance"), unit: "m", default: 100, min: 10, max: 1000 },
  ],
  variables: {},
};

const dataGenerator = (params) => {
  const { P_potencia, r_max } = params;
  const points = 200;

  const data = [];
  for (let i = 1; i <= points; i++) {
    // Distancia desde r_min hasta r_max (evitamos r=0)
    const r_min = 1;
    const r = r_min + (i / points) * (r_max - r_min);
    
    // Intensidad: ley del inverso del cuadrado
    const I = P_potencia / (4 * Math.PI * r * r);
    
    // Área esférica (normalizada para visualización)
    const A = 4 * Math.PI * r * r;
    const A_norm = A / (4 * Math.PI * r_max * r_max) * (P_potencia / (4 * Math.PI));
    
    // Nivel en dB
    const I_0 = 1e-12;
    const beta = 10 * Math.log10(I / I_0);

    data.push({
      r,
      I,
      A,
      A_norm,
      beta,
    });
  }

  return {
    primary: data.map(d => ({ x: d.r, y: d.I })),
    secondary: data.map(d => ({ x: d.r, y: d.A_norm })),
    metadata: {
      I_max: P_potencia / (4 * Math.PI),
      I_min: P_potencia / (4 * Math.PI * r_max * r_max),
    },
  };
};

const interpretationHints = {
  es: [
    "La intensidad decrece con el cuadrado de la distancia (ley 1/r²)",
    "El area esferica crece cuadraticamente con la distancia",
    "La potencia total se conserva, distribuyendose sobre mas superficie",
  ],
  en: [
    "Intensity decreases with the square of distance (1/r² law)",
    "Spherical area grows quadratically with distance",
    "Total power is conserved, spreading over more surface",
  ],
};

export default {
  graph_identity,
  coordSemantic,
  physicsContext,
  dataGenerator,
  interpretationHints,
  displayName: "IntensidadOndulatoriaGraphsCoord",
};

