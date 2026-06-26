const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

const graph_identity = {
  pregunta_principal: {
    es: "Como se obtiene la perturbacion resultante cuando dos ondas coinciden en el mismo punto de un medio lineal?",
    en: "How is the resultant disturbance obtained when two waves meet at the same point in a linear medium?",
  },
  variable_control: "y_1",
  magnitud_estrella: "y_resultante",
  formula: "y_resultante = y_1 + y_2",
  target_interpretable: true,
};

const coordSemantic = {
  title: {
    es: "Superposicion lineal",
    en: "Linear superposition",
  },
  description: {
    es: "Perturbacion resultante frente a la contribucion de dos ondas coincidentes.",
    en: "Resultant disturbance versus the contribution from two coincident waves.",
  },
  xAxis: {
    id: "y_1",
    label: t("Perturbacion de la primera onda", "First-wave disturbance"),
    unit: "m",
  },
  yAxis: {
    id: "y_resultante",
    label: t("Perturbacion resultante", "Resultant disturbance"),
    unit: "m",
  },
  series: [
    {
      id: "y_resultante",
      name: t("Suma instantanea", "Instantaneous sum"),
      description: t("Resultado observable de sumar y_1 con y_2", "Observable result of adding y_1 and y_2"),
      color: "#0f766e",
      lineWidth: 2,
    },
    {
      id: "referencia_y2",
      name: t("Aporte fijo de y_2", "Fixed y_2 contribution"),
      description: t("Desplazamiento que aporta la segunda onda", "Displacement contributed by the second wave"),
      color: "#64748b",
      lineWidth: 1,
      lineStyle: "dashed",
    },
  ],
};

const physicsContext = {
  parameters: [
    { id: "y_2", symbol: "y_2", name: t("Perturbacion segunda onda", "Second-wave disturbance"), unit: "m", default: 0.012, min: -0.03, max: 0.03 },
    { id: "A_1", symbol: "A_1", name: t("Amplitud primera onda", "First-wave amplitude"), unit: "m", default: 0.018, min: 0, max: 0.05 },
    { id: "A_2", symbol: "A_2", name: t("Amplitud segunda onda", "Second-wave amplitude"), unit: "m", default: 0.012, min: 0, max: 0.05 },
  ],
  variables: {
    y_1: { unit: "m", role: t("Variable de entrada", "Input variable") },
    y_resultante: { unit: "m", role: t("Magnitud observable", "Observable quantity") },
    A_resultante: { unit: "m", role: t("Amplitud en fase", "In-phase amplitude") },
    I_relativa: { unit: "adimensional", role: t("Lectura energetica relativa", "Relative energetic reading") },
  },
};

const dataGenerator = (params) => {
  const { y_2 = 0.012, A_1 = 0.018, A_2 = 0.012 } = params;
  const points = 120;
  const minY1 = -0.03;
  const maxY1 = 0.03;
  const primary = [];
  const secondary = [];

  for (let i = 0; i <= points; i++) {
    const y_1 = minY1 + ((maxY1 - minY1) * i) / points;
    primary.push({ x: y_1, y: y_1 + y_2, y_1, y_2 });
    secondary.push({ x: y_1, y: y_2, y_1, y_2 });
  }

  const A_resultante = A_1 + A_2;
  const I_relativa = A_resultante * A_resultante;

  return {
    primary,
    secondary,
    metadata: {
      y_2,
      A_resultante,
      I_relativa,
      exampleResult: 0.018 + y_2,
    },
  };
};

const interpretationHints = {
  es: [
    "La lectura vertical es la suma punto a punto de las dos perturbaciones",
    "Un y_2 positivo desplaza toda la recta hacia arriba",
    "La amplitud en fase aumenta cuando A_1 y A_2 tienen el mismo signo fisico",
  ],
  en: [
    "The vertical reading is the point-by-point sum of the two disturbances",
    "A positive y_2 shifts the whole line upward",
    "The in-phase amplitude increases when A_1 and A_2 have the same physical sign",
  ],
};

export default {
  graph_identity,
  coordSemantic,
  physicsContext,
  dataGenerator,
  interpretationHints,
  displayName: "SuperposicionGraphsCoord",
};

