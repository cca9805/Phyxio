const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

const graph_identity = {
  pregunta_principal: {
    es: "Cuando dos ondas coherentes se refuerzan y como se predice la intensidad resultante?",
    en: "When do two coherent waves reinforce each other and how is the resulting intensity predicted?",
  },
  variable_control: "delta_phi",
  magnitud_estrella: "I_resultante",
  formula: "I_resultante = I1 + I2 + 2 * sqrt(I1 * I2) * cos(delta_phi)",
  target_interpretable: true,
};

const coordSemantic = {
  title: {
    es: "Interferencia constructiva por fase",
    en: "Constructive interference by phase",
  },
  description: {
    es: "Intensidad resultante frente a diferencia de fase",
    en: "Resulting intensity versus phase difference",
  },
  xAxis: {
    label: t("Diferencia de fase (rad)", "Phase difference (rad)"),
    unit: "rad",
  },
  yAxis: {
    label: t("Intensidad relativa", "Relative intensity"),
    unit: "adimensional",
  },
  series: [
    {
      id: "I_resultante",
      name: t("Intensidad resultante", "Resulting intensity"),
      description: t("Maximos cuando las ondas llegan en fase", "Maxima when waves arrive in phase"),
      color: "#2563eb",
      lineWidth: 2,
    },
    {
      id: "referencia",
      name: t("Suma incoherente", "Incoherent sum"),
      description: t("Referencia sin termino de interferencia", "Reference without interference term"),
      color: "#64748b",
      lineWidth: 1,
      lineStyle: "dashed",
    },
  ],
};

const physicsContext = {
  parameters: [
    { id: "I1", symbol: "I_1", name: t("Intensidad primera onda", "First-wave intensity"), unit: "rel", default: 1, min: 0, max: 4 },
    { id: "I2", symbol: "I_2", name: t("Intensidad segunda onda", "Second-wave intensity"), unit: "rel", default: 1, min: 0, max: 4 },
    { id: "lambda", symbol: "\\lambda", name: t("Longitud de onda", "Wavelength"), unit: "m", default: 1, min: 0.2, max: 4 },
  ],
  variables: {
    delta_phi: { unit: "rad", role: t("Variable de fase", "Phase variable") },
    I_resultante: { unit: "rel", role: t("Magnitud observable", "Observable quantity") },
  },
};

const dataGenerator = (params) => {
  const { I1 = 1, I2 = 1, lambda = 1 } = params;
  const points = 240;
  const data = [];
  const pathMarkers = [];
  const amplitudeTerm = 2 * Math.sqrt(Math.max(I1 * I2, 0));
  const incoherent = I1 + I2;

  for (let i = 0; i <= points; i++) {
    const delta_phi = -2 * Math.PI + (4 * Math.PI * i) / points;
    const I_resultante = incoherent + amplitudeTerm * Math.cos(delta_phi);
    const Delta_r = (delta_phi * lambda) / (2 * Math.PI);
    data.push({ x: delta_phi, y: Math.max(I_resultante, 0), Delta_r });
  }

  for (let m = -2; m <= 2; m++) {
    pathMarkers.push({
      m,
      delta_phi: 2 * Math.PI * m,
      Delta_r: m * lambda,
    });
  }

  return {
    primary: data,
    secondary: data.map((point) => ({ x: point.x, y: incoherent })),
    metadata: {
      pathMarkers,
      maximum: Math.pow(Math.sqrt(I1) + Math.sqrt(I2), 2),
      incoherent,
    },
  };
};

const interpretationHints = {
  es: [
    "Los maximos aparecen cuando delta_phi completa ciclos enteros",
    "La linea gris muestra la suma sin coherencia de fase",
    "Si I1 e I2 son comparables, el contraste del maximo es mayor",
  ],
  en: [
    "Maxima appear when delta_phi completes whole cycles",
    "The gray line shows the sum without phase coherence",
    "If I1 and I2 are comparable, maximum contrast is larger",
  ],
};

export default {
  graph_identity,
  coordSemantic,
  physicsContext,
  dataGenerator,
  interpretationHints,
  displayName: "InterferenciaConstructivaGraphsCoord",
};

