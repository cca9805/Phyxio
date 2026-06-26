// Profile para gráfico Coord de difraccion
// Patron de difraccion por rendija - intensidad vs angulo

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

const graph_identity = {
  pregunta_principal: {
    es: "Como se desvia una onda al encontrar un obstaculo y que patrones de intensidad emergen?",
    en: "How does a wave deviate when encountering an obstacle and what intensity patterns emerge?",
  },
  variable_control: "a_abertura",
  magnitud_estrella: "theta_dif",
  formula: "a * sin(theta) = m * lambda",
  target_interpretable: true,
};

const coordSemantic = {
  title: {
    es: "Patron de difraccion de una rendija",
    en: "Single-slit diffraction pattern",
  },
  description: {
    es: "Intensidad difractada como funcion del angulo",
    en: "Diffracted intensity as a function of angle",
  },
  xAxis: {
    label: t("Angulo (rad)", "Angle (rad)"),
    unit: "rad",
  },
  yAxis: {
    label: t("Intensidad relativa", "Relative intensity"),
    unit: "adimensional",
  },
  series: [
    {
      id: "intensidad",
      name: t("Intensidad", "Intensity"),
      description: t("Intensidad difractada normalizada", "Normalized diffracted intensity"),
      color: "#f59e0b",
      lineWidth: 2,
    },
    {
      id: "envelope",
      name: t("Envolvente", "Envelope"),
      description: t("Envolvente del patron de difraccion", "Diffraction pattern envelope"),
      color: "#60a5fa",
      lineWidth: 1,
      lineStyle: "dashed",
    },
  ],
};

const physicsContext = {
  parameters: [
    { id: "a_abertura", symbol: "a", name: t("Ancho de abertura", "Aperture width"), unit: "m", default: 1e-4, min: 1e-6, max: 1e-2 },
    { id: "lambda", symbol: "\\lambda", name: t("Longitud de onda", "Wavelength"), unit: "m", default: 500e-9, min: 100e-9, max: 1000e-9 },
    { id: "m_max", symbol: "m_{max}", name: t("Orden maximo", "Maximum order"), unit: "adimensional", default: 5, min: 1, max: 10 },
  ],
  variables: {},
};

const dataGenerator = (params) => {
  const { a_abertura, lambda, m_max } = params;
  const beta_max = m_max * Math.PI;
  const points = 500;

  const data = [];
  for (let i = 0; i <= points; i++) {
    const beta = -beta_max + (2 * beta_max * i) / points;
    const theta = (beta * lambda) / (Math.PI * a_abertura);
    
    // Intensidad de difraccion: I = (sin(beta)/beta)^2
    let I;
    if (Math.abs(beta) < 1e-10) {
      I = 1; // Maximo central
    } else {
      I = Math.pow(Math.sin(beta) / beta, 2);
    }
    
    // Envolvente 1/beta^2
    let envelope;
    if (Math.abs(beta) < 1e-10) {
      envelope = 1;
    } else {
      envelope = 1 / (beta * beta);
    }

    data.push({
      theta,
      beta,
      I,
      envelope,
    });
  }

  // Calcular posiciones de minimos para anotaciones
  const minimos = [];
  for (let m = 1; m <= m_max; m++) {
    const theta_min = (m * lambda) / a_abertura; // Aproximacion pequeno angulo
    if (Math.abs(theta_min) < beta_max * lambda / (Math.PI * a_abertura)) {
      minimos.push({ m, theta: theta_min });
      minimos.push({ m: -m, theta: -theta_min });
    }
  }

  return {
    primary: data.map(d => ({ x: d.theta, y: d.I })),
    secondary: data.map(d => ({ x: d.theta, y: d.envelope })),
    metadata: {
      minimos,
      ancho_central: (2 * lambda) / a_abertura,
    },
  };
};

const interpretationHints = {
  es: [
    "El maximo central es el mas intenso y ancho",
    "Los minimos ocurren cuando beta = m*pi (m entero no nulo)",
    "La intensidad de maximos secundarios decrece rapidamente",
  ],
  en: [
    "The central maximum is the most intense and widest",
    "Minima occur when beta = m*pi (non-zero integer m)",
    "Secondary maxima intensity decreases rapidly",
  ],
};

export default {
  graph_identity,
  coordSemantic,
  physicsContext,
  dataGenerator,
  interpretationHints,
  displayName: "DifraccionGraphsCoord",
};

