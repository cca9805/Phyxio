import { formatNumber } from '../../../utils/formatNumber';

export const definitions = [
  // Grupo 1: Energía Térmica del Plasma
  {
    id: 'plasma-energia-termica',
    groupId: 'plasma-temperatura',
    title: 'Energía Térmica (E)',
    isFundamental: true,
    formula: 'E = (3/2) k_B T',
    variables: [
      { symbol: 'k_B', label: 'Constante de Boltzmann (k_B)', unit: 'J/K', defaultValue: 1.38e-23 },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'E', label: 'Energía Térmica (E)', unit: 'J' },
    resolve: ({ k_B = 1.38e-23, T }) => {
      const numKB = parseFloat(k_B);
      const numT = parseFloat(T);
      const E = (3/2) * numKB * numT;
      return { 
        result: { E: formatNumber(E) }, 
        steps: [`E = (3/2) × ${numKB} J/K × ${numT} K = ${formatNumber(E)} J`] 
      };
    }
  },
  {
    id: 'plasma-temperatura',
    groupId: 'plasma-temperatura',
    title: 'Temperatura (T)',
    isComplementary: true,
    formula: 'T = (2E) / (3k_B)',
    variables: [
      { symbol: 'E', label: 'Energía Térmica (E)', unit: 'J' },
      { symbol: 'k_B', label: 'Constante de Boltzmann (k_B)', unit: 'J/K', defaultValue: 1.38e-23 }
    ],
    output: { symbol: 'T', label: 'Temperatura (T)', unit: 'K' },
    resolve: ({ E, k_B = 1.38e-23 }) => {
      const numE = parseFloat(E);
      const numKB = parseFloat(k_B);
      const T = (2 * numE) / (3 * numKB);
      return { 
        result: { T: formatNumber(T) }, 
        steps: [`T = (2 × ${numE} J) / (3 × ${numKB} J/K) = ${formatNumber(T)} K`] 
      };
    }
  },

  // Grupo 2: Densidad del Plasma
  {
    id: 'plasma-densidad',
    groupId: 'plasma-densidad',
    title: 'Densidad Numérica (n)',
    isFundamental: true,
    formula: 'n = N / V',
    variables: [
      { symbol: 'N', label: 'Número de Partículas (N)', unit: '' },
      { symbol: 'V', label: 'Volumen (V)', unit: 'm³' }
    ],
    output: { symbol: 'n', label: 'Densidad Numérica (n)', unit: 'm⁻³' },
    resolve: ({ N, V }) => {
      const numN = parseFloat(N);
      const numV = parseFloat(V);
      if (numV === 0) return { error: 'El volumen no puede ser cero.' };
      const n = numN / numV;
      return { 
        result: { n: formatNumber(n) }, 
        steps: [`n = ${numN} / ${numV} m³ = ${formatNumber(n)} m⁻³`] 
      };
    }
  },
  {
    id: 'plasma-numero-particulas',
    groupId: 'plasma-densidad',
    title: 'Número de Partículas (N)',
    isComplementary: true,
    formula: 'N = n × V',
    variables: [
      { symbol: 'n', label: 'Densidad Numérica (n)', unit: 'm⁻³' },
      { symbol: 'V', label: 'Volumen (V)', unit: 'm³' }
    ],
    output: { symbol: 'N', label: 'Número de Partículas (N)', unit: '' },
    resolve: ({ n, V }) => {
      const numN = parseFloat(n);
      const numV = parseFloat(V);
      const N = numN * numV;
      return { 
        result: { N: formatNumber(N) }, 
        steps: [`N = ${numN} m⁻³ × ${numV} m³ = ${formatNumber(N)}`] 
      };
    }
  },

  // Grupo 3: Frecuencia de Plasma
  {
    id: 'plasma-frecuencia',
    groupId: 'plasma-frecuencia',
    title: 'Frecuencia Angular (ω_p)',
    isFundamental: true,
    formula: 'ω_p = √(ne²/ε₀m_e)',
    variables: [
      { symbol: 'n', label: 'Densidad Electrónica (n)', unit: 'm⁻³' },
      { symbol: 'e', label: 'Carga Elemental (e)', unit: 'C', defaultValue: 1.602e-19 },
      { symbol: 'varepsilon_0', label: 'Permitividad del Vacío (ε₀)', unit: 'F/m', defaultValue: 8.854e-12 },
      { symbol: 'm_e', label: 'Masa del Electrón (m_e)', unit: 'kg', defaultValue: 9.109e-31 }
    ],
    output: { symbol: 'omega_p', label: 'Frecuencia Angular (ω_p)', unit: 'rad/s' },
    resolve: ({ n, e = 1.602e-19, varepsilon_0 = 8.854e-12, m_e = 9.109e-31 }) => {
      const numN = parseFloat(n);
      const numE = parseFloat(e);
      const numEps = parseFloat(varepsilon_0);
      const numMe = parseFloat(m_e);
      const omega_p = Math.sqrt((numN * numE * numE) / (numEps * numMe));
      return { 
        result: { omega_p: formatNumber(omega_p) }, 
        steps: [`ω_p = √((${numN} × ${numE}²) / (${numEps} × ${numMe})) = ${formatNumber(omega_p)} rad/s`] 
      };
    }
  }
];
