
import { formatNumber } from '../../../../utils/formatNumber';

const kB = 1.381e-23; // Constante de Boltzmann (J/K)

export const definitions = [
  // Distribución de Boltzmann
  {
    id: 'boltzmann-ni',
    groupId: 'boltzmann-ni',
    title: 'Distribución de Boltzmann',
      formula: 'n_i = (N / Z) * g_i * exp(-epsilon_i / (k_B * T))',
    variables: [
      { symbol: 'N', label: 'Número total de partículas (N)', unit: '' },
      { symbol: 'gi', label: 'Degeneración del estado (g_i)', unit: '' },
      { symbol: 'epsilon', label: 'Energía del estado (ε_i)', unit: 'J' },
      { symbol: 'kB', label: 'Constante de Boltzmann (k_B)', unit: 'J/K', constant: true, default: kB },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' },
      { symbol: 'Z', label: 'Función de partición (Z)', unit: '' }
    ],
    output: { symbol: 'ni', label: 'n_i', unit: '' },
    resolve: ({ N, gi, epsilon, kB, T, Z }) => {
      const numN = parseFloat(N);
      const numG = parseFloat(gi);
      const numE = parseFloat(epsilon);
      const numK = kB ? parseFloat(kB) : 1.381e-23;
      const numT = parseFloat(T);
      const numZ = parseFloat(Z);
      const ni = (numN / numZ) * numG * Math.exp(-numE / (numK * numT));
      return {
        result: { ni: formatNumber(ni) },
        steps: [
          `n_i = (N / Z) × g_i × exp(-ε_i / (k_B T))`,
          `n_i = (${numN} / ${numZ}) × ${numG} × exp(-${numE} / (${numK} × ${numT}))`,
          `n_i = ${formatNumber(ni)}`
        ]
      };
    }
  },
  // Factor de Boltzmann
  {
    id: 'boltzmann-factor',
    groupId: 'boltzmann-factor',
    title: 'Factor de Boltzmann',
    formula: String.raw`f_B = e^{-\varepsilon / (k_B T)}`,
    variables: [
      { symbol: 'epsilon', label: 'Energía del estado (ε)', unit: 'J' },
      { symbol: 'kB', label: 'Constante de Boltzmann (k_B)', unit: 'J/K', constant: true, default: kB },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'fB', label: 'f_B', unit: '' },
    resolve: ({ epsilon, kB, T }) => {
      const numE = parseFloat(epsilon);
      const numK = kB ? parseFloat(kB) : 1.381e-23;
      const numT = parseFloat(T);
      const fB = Math.exp(-numE / (numK * numT));
      return {
        result: { fB: formatNumber(fB) },
        steps: [
          `f_B = exp(-ε / (k_B T))`,
          `f_B = exp(-${numE} / (${numK} × ${numT}))`,
          `f_B = ${formatNumber(fB)}`
        ]
      };
    }
  },
  // Razón de poblaciones (dos niveles)
  {
    id: 'boltzmann-ratio',
    groupId: 'boltzmann-ratio',
    title: 'Razón de poblaciones (dos niveles)',
    formula: String.raw`n_1 / n_0 = e^{-\Delta E / (k_B T)}`,
    variables: [
      { symbol: 'deltaE', label: 'Diferencia de energía (ΔE)', unit: 'J' },
      { symbol: 'kB', label: 'Constante de Boltzmann (k_B)', unit: 'J/K', constant: true, default: kB },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'ratio', label: 'n_1 / n_0', unit: '' },
    resolve: ({ deltaE, kB, T }) => {
      const numD = parseFloat(deltaE);
      const numK = kB ? parseFloat(kB) : 1.381e-23;
      const numT = parseFloat(T);
      const ratio = Math.exp(-numD / (numK * numT));
      return {
        result: { ratio: formatNumber(ratio) },
        steps: [
          `n_1 / n_0 = exp(-ΔE / (k_B T))`,
          `n_1 / n_0 = exp(-${numD} / (${numK} × ${numT}))`,
          `n_1 / n_0 = ${formatNumber(ratio)}`
        ]
      };
    }
  },
  // Distribución de Gibbs
  {
    id: 'gibbs-pi',
    groupId: 'gibbs-pi',
    title: 'Distribución de Gibbs',
      formula: 'P_i = (1 / Z) * exp(-E_i / (k_B * T))',
    variables: [
      { symbol: 'Ei', label: 'Energía del microestado (E_i)', unit: 'J' },
      { symbol: 'kB', label: 'Constante de Boltzmann (k_B)', unit: 'J/K', constant: true, default: kB },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' },
      { symbol: 'Z', label: 'Función de partición (Z)', unit: '' }
    ],
    output: { symbol: 'Pi', label: 'P_i', unit: '' },
    resolve: ({ Ei, kB, T, Z }) => {
      const numE = parseFloat(Ei);
      const numK = kB ? parseFloat(kB) : 1.381e-23;
      const numT = parseFloat(T);
      const numZ = parseFloat(Z);
      const Pi = (1 / numZ) * Math.exp(-numE / (numK * numT));
      return {
        result: { Pi: formatNumber(Pi) },
        steps: [
          `P_i = (1 / Z) × exp(-E_i / (k_B T))`,
          `P_i = (1 / ${numZ}) × exp(-${numE} / (${numK} × ${numT}))`,
          `P_i = ${formatNumber(Pi)}`
        ]
      };
    }
  },
  // Función de partición
  {
    id: 'partition-z',
    groupId: 'partition-z',
    title: 'Función de partición',
      formula: 'Z = sum_i [g_i * exp(-epsilon_i / (k_B * T))]', // ASCII plano, alineado con la guía
    variables: [
      { symbol: 'gi', label: 'Degeneración del estado (g_i)', unit: '' },
      { symbol: 'epsilon', label: 'Energía del estado (ε_i)', unit: 'J' },
      { symbol: 'kB', label: 'Constante de Boltzmann (k_B)', unit: 'J/K', constant: true, default: kB },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'Z', label: 'Z', unit: '' },
    resolve: ({ gi, epsilon, kB, T }) => {
      // Para un solo término, Z = g_i * exp(-epsilon / (kB * T))
      const numG = parseFloat(gi);
      const numE = parseFloat(epsilon);
      const numK = kB ? parseFloat(kB) : 1.381e-23;
      const numT = parseFloat(T);
      const Z = numG * Math.exp(-numE / (numK * numT));
      return {
        result: { Z: formatNumber(Z) },
        steps: [
          `Z = g_i × exp(-ε_i / (k_B T))`,
          `Z = ${numG} × exp(-${numE} / (${numK} × ${numT}))`,
          `Z = ${formatNumber(Z)}`
        ]
      };
    }
  }
];

// Conceptos clave para este subtema teórico
export const theoreticalConcepts = {
  mainTopic: 'Distribuciones de Boltzmann y Gibbs',
  description: 'Distribuciones estadísticas fundamentales para sistemas en equilibrio térmico',
  mainConcept: 'Las distribuciones de Boltzmann y Gibbs describen cómo se distribuyen las partículas entre estados de energía y la probabilidad de microestados del sistema completo, respectivamente. Ambas tienen la forma exponencial exp(-E / k_B T), característica del equilibrio térmico.',
  keyPoints: [
    'Distribución de Boltzmann: describe la población de estados de energía individuales',
    'Distribución de Gibbs: describe la probabilidad de microestados del sistema completo',
    'Factor de Boltzmann exp(-ε / k_B T): probabilidad relativa de un estado',
    'Función de partición Z: factor de normalización que contiene toda la termodinámica',
    'Temperatura: parámetro que controla la competencia entre energía y entropía',
    'Aplicaciones: desde gases ideales hasta semiconductores y reacciones químicas'
  ],
  learningObjectives: [
    'Comprender la forma y significado de la distribución de Boltzmann',
    'Distinguir entre las distribuciones de Boltzmann y Gibbs',
    'Interpretar el factor de Boltzmann y su dependencia con la temperatura',
    'Reconocer el papel central de la función de partición',
    'Aplicar estas distribuciones a sistemas físicos simples',
    'Conectar las distribuciones con propiedades termodinámicas macroscópicas'
  ],
  detailedSections: [
    'Distribución de Boltzmann',
    'Factor de Boltzmann',
    'Distribución de Gibbs',
    'Función de partición',
    'Relación entre ambas distribuciones',
    'Aplicaciones físicas'
  ],
  academicLevel: 'advanced undergraduate / graduate',
  estimatedStudyTime: '2.5-3 horas',
  prerequisites: [
    'Microestados y macroestados',
    'Conceptos básicos de probabilidad',
    'Termodinámica clásica'
  ],
  relatedTopics: [
    'Función de partición',
    'Ensambles estadísticos',
    'Estadísticas cuánticas',
    'Teorema de equipartición'
  ]
};
