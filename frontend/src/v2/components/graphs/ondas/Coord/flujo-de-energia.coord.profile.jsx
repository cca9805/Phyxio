// Profile para gráfico Coord de flujo-de-energia
// Transporte de energía en ondas - visualización del flujo energético

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

const graph_identity = {
  pregunta_principal: {
    es: "Como fluye la energia en una onda y que factores determinan la intensidad del transporte energetico?",
    en: "How does energy flow in a wave and what factors determine the intensity of energy transport?",
  },
  variable_control: "A",
  magnitud_estrella: "S_flujo",
  formula: "S_flujo = u_energia * v",
  target_interpretable: true,
};

const coordSemantic = {
  title: {
    es: "Flujo de energia en onda progresiva",
    en: "Energy flux in progressive wave",
  },
  description: {
    es: "Visualizacion del transporte energetico a traves del medio",
    en: "Visualization of energy transport through the medium",
  },
  xAxis: {
    label: t("Posicion (m)", "Position (m)"),
    unit: "m",
  },
  yAxis: {
    label: t("Desplazamiento (m)", "Displacement (m)"),
    unit: "m",
  },
  series: [
    {
      id: "onda",
      name: t("Onda", "Wave"),
      description: t("Desplazamiento transversal de la cuerda", "Transverse displacement of the string"),
      color: "#60a5fa",
      lineWidth: 2,
    },
    {
      id: "flujo",
      name: t("Flujo de energia", "Energy flux"),
      description: t("Magnitud del flujo energético local", "Magnitude of local energy flux"),
      color: "#f59e0b",
      lineWidth: 2,
      yScale: "secondary",
    },
  ],
};

const physicsContext = {
  parameters: [
    { id: "A", symbol: "A", name: t("Amplitud", "Amplitude"), unit: "m", default: 0.01, min: 0.001, max: 0.1 },
    { id: "lambda", symbol: "\\lambda", name: t("Longitud de onda", "Wavelength"), unit: "m", default: 0.5, min: 0.1, max: 2.0 },
    { id: "v", symbol: "v", name: t("Velocidad de propagacion", "Propagation velocity"), unit: "m/s", default: 100, min: 10, max: 500 },
    { id: "mu", symbol: "\\mu", name: t("Densidad lineal", "Linear density"), unit: "kg/m", default: 0.001, min: 0.0001, max: 0.01 },
    { id: "t", symbol: "t", name: t("Tiempo", "Time"), unit: "s", default: 0, min: 0, max: 10, step: 0.01 },
  ],
  variables: {
    omega: { expr: "2 * PI * v / lambda", description: t("Frecuencia angular", "Angular frequency") },
    k: { expr: "2 * PI / lambda", description: t("Numero de onda", "Wave number") },
  },
};

const dataGenerator = (params) => {
  const { A, lambda, v, mu, t } = params;
  const omega = (2 * Math.PI * v) / lambda;
  const k = (2 * Math.PI) / lambda;
  const xMax = lambda * 4;
  const points = 200;

  const data = [];
  for (let i = 0; i <= points; i++) {
    const x = (i / points) * xMax;
    const phase = k * x - omega * t;
    const y = A * Math.sin(phase);
    
    // Velocidad transversal
    const vy = -A * omega * Math.cos(phase);
    
    // Densidad de energía cinética + potencial
    const u_cin = 0.5 * mu * vy * vy;
    const u_pot = 0.5 * mu * omega * omega * y * y;
    const u_total = u_cin + u_pot;
    
    // Flujo de energía (proporcional a densidad × velocidad)
    const S = u_total * v;
    
    // Flujo normalizado para visualización
    const S_max = 0.5 * mu * omega * omega * A * A * v;
    const S_norm = S_max > 0 ? S / S_max : 0;

    data.push({
      x,
      y,
      u_cin,
      u_pot,
      u_total,
      S,
      S_norm,
      vy,
    });
  }

  return {
    primary: data.map(d => ({ x: d.x, y: d.y })),
    secondary: data.map(d => ({ x: d.x, y: d.S_norm * A })),
    metadata: {
      S_max: 0.5 * mu * omega * omega * A * A * v,
      u_max: 0.5 * mu * omega * omega * A * A,
    },
  };
};

const interpretationHints = {
  es: [
    "El flujo de energia es maximo donde la densidad de energia es maxima",
    "El flujo sigue la direccion de propagacion de la onda",
    "La energia oscila entre forma cinetica y potencial",
  ],
  en: [
    "Energy flux is maximum where energy density is maximum",
    "Flux follows the direction of wave propagation",
    "Energy oscillates between kinetic and potential forms",
  ],
};

export default {
  graph_identity,
  coordSemantic,
  physicsContext,
  dataGenerator,
  interpretationHints,
  displayName: "FlujoDeEnergiaGraphsCoord",
};

