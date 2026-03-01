import { formatNumber } from '../../../../utils/formatNumber';

const h = 6.626e-34; // Planck (J·s)
const hbar = 1.055e-34; // Planck reducido (J·s)
const kB = 1.38e-23; // Boltzmann (J/K)
const pi = Math.PI;

export const definitions = [
  // Bose-Einstein distribution
  {
    id: 'bec-distribucion',
    groupId: 'bec-distribucion',
    title: 'Distribución de Bose-Einstein',
    isFundamental: true,
    formula: String.raw`n_i = 1 / [e^{(ε_i - μ)/(k_B T)} - 1]`,
    variables: [
      { symbol: 'epsilon', label: 'Energía del estado (ε_i)', unit: 'J' },
      { symbol: 'mu', label: 'Potencial químico (μ)', unit: 'J' },
      { symbol: 'kB', label: 'Constante de Boltzmann (k_B)', unit: 'J/K', constant: true, default: kB },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'ni', label: 'n_i', unit: '' },
    resolve: ({ epsilon, mu, kB, T }) => {
      const numE = parseFloat(epsilon);
      const numMu = parseFloat(mu);
      const numK = kB ? parseFloat(kB) : 1.38e-23;
      const numT = parseFloat(T);
      const exp = Math.exp((numE - numMu) / (numK * numT));
      const ni = 1 / (exp - 1);
      return {
        result: { ni: formatNumber(ni) },
        steps: [
          `n_i = 1 / [e^{(ε_i - μ)/(k_B T)} - 1]`,
          `n_i = 1 / [e^{(${numE} - ${numMu})/(${numK} × ${numT})} - 1]`,
          `n_i = 1 / [${formatNumber(exp)} - 1] = ${formatNumber(ni)}`
        ]
      };
    }
  },

  // Critical temperature
  {
    id: 'bec-tc',
    groupId: 'bec-tc',
    title: 'Temperatura crítica BEC',
    isFundamental: true,
    formula: String.raw`T_c = (2\pi\hbar^2 / m k_B) [n/\zeta(3/2)]^{2/3}`,
    variables: [
      { symbol: 'm', label: 'Masa del bosón (m)', unit: 'kg' },
      { symbol: 'n', label: 'Densidad numérica (n)', unit: '1/m³' },
      { symbol: 'zeta', label: 'ζ(3/2)', unit: '', constant: true, default: 2.612 },
      { symbol: 'kB', label: 'Constante de Boltzmann (k_B)', unit: 'J/K', constant: true, default: kB },
      { symbol: 'hbar', label: 'Constante de Planck reducida (ℏ)', unit: 'J·s', constant: true, default: hbar }
    ],
    output: { symbol: 'Tc', label: 'T_c', unit: 'K' },
    resolve: ({ m, n, zeta, kB, hbar }) => {
      const numM = parseFloat(m);
      const numN = parseFloat(n);
      const numZ = zeta ? parseFloat(zeta) : 2.612;
      const numK = kB ? parseFloat(kB) : 1.38e-23;
      const numH = hbar ? parseFloat(hbar) : 1.055e-34;
      const factor = (2 * pi * Math.pow(numH, 2)) / (numM * numK);
      const ratio = Math.pow(numN / numZ, 2 / 3);
      const Tc = factor * ratio;
      return {
        result: { Tc: formatNumber(Tc) },
        steps: [
          `T_c = (2πℏ² / m k_B) × (n/ζ(3/2))^{2/3}`,
          `T_c = (2 × π × (${numH})² / (${numM} × ${numK})) × (${numN}/${numZ})^{2/3}`,
          `T_c = ${formatNumber(factor)} × ${formatNumber(ratio)} = ${formatNumber(Tc)} K`
        ]
      };
    }
  },

  // Thermal de Broglie wavelength
  {
    id: 'bec-lambdaT',
    groupId: 'bec-lambdaT',
    title: 'Longitud de onda térmica de de Broglie',
    isFundamental: true,
    formula: String.raw`λ_T = h / \sqrt{2\pi m k_B T}`,
    variables: [
      { symbol: 'h', label: 'Constante de Planck (h)', unit: 'J·s', constant: true, default: h },
      { symbol: 'm', label: 'Masa del bosón (m)', unit: 'kg' },
      { symbol: 'kB', label: 'Constante de Boltzmann (k_B)', unit: 'J/K', constant: true, default: kB },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'lambdaT', label: 'λ_T', unit: 'm' },
    resolve: ({ h, m, kB, T }) => {
      const numH = h ? parseFloat(h) : 6.626e-34;
      const numM = parseFloat(m);
      const numK = kB ? parseFloat(kB) : 1.38e-23;
      const numT = parseFloat(T);
      const denom = Math.sqrt(2 * pi * numM * numK * numT);
      const lambdaT = numH / denom;
      return {
        result: { lambdaT: formatNumber(lambdaT) },
        steps: [
          `λ_T = h / sqrt(2π m k_B T)`,
          `λ_T = ${numH} / sqrt(2 × π × ${numM} × ${numK} × ${numT})`,
          `λ_T = ${formatNumber(lambdaT)} m`
        ]
      };
    }
  },

  // Condensate fraction
  {
    id: 'bec-fraccion',
    groupId: 'bec-fraccion',
    title: 'Fracción condensada',
    isFundamental: true,
    formula: String.raw`N₀/N = 1 - (T/T_c)^{3/2}`,
    variables: [
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' },
      { symbol: 'Tc', label: 'Temperatura crítica (T_c)', unit: 'K' }
    ],
    output: { symbol: 'fraccion', label: 'N₀/N', unit: '' },
    resolve: ({ T, Tc }) => {
      const numT = parseFloat(T);
      const numTc = parseFloat(Tc);
      const frac = 1 - Math.pow(numT / numTc, 1.5);
      return {
        result: { fraccion: formatNumber(frac) },
        steps: [
          `N₀/N = 1 - (T/T_c)^{3/2}`,
          `N₀/N = 1 - (${numT}/${numTc})^{3/2}`,
          `N₀/N = 1 - ${formatNumber(Math.pow(numT / numTc, 1.5))} = ${formatNumber(frac)}`
        ]
      };
    }
  }
];
