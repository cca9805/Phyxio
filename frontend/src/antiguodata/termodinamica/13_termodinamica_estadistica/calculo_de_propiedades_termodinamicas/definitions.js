import { formatNumber } from '../../../../utils/formatNumber';

const kB = 1.381e-23; // Constante de Boltzmann en J/K
const R = 8.314; // Constante de gases en J/(mol·K)

export const definitions = [
  // Grupo 1: Energía interna desde Z
  {
    id: 'energia-interna-desde-z',
    groupId: 'energia-interna-z',
    title: 'Energía Interna desde Z',
    isFundamental: true,
      formula: 'U = k_B * T^2 * (dZ/dT) / Z',
    variables: [
      { symbol: 'Z', label: 'Función de Partición (Z)', unit: '-' },
      { symbol: 'dZ_dT', label: 'Derivada dZ/dT', unit: 'K⁻¹' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'U', label: 'Energía Interna (U)', unit: 'J' },
    resolve: ({ Z, dZ_dT, T }) => {
      const numZ = parseFloat(Z);
      const numDZ = parseFloat(dZ_dT);
      const numT = parseFloat(T);
      if (numZ === 0) return { error: 'Z no puede ser cero.' };
      const U = kB * numT * numT * (numDZ / numZ);
      return {
        result: { U: formatNumber(U) },
        steps: [
          `U = k_B × T² × (dZ/dT) / Z`,
          `U = ${kB} J/K × (${numT} K)² × ${numDZ} K⁻¹ / ${numZ}`,
          `U = ${formatNumber(U)} J`
        ]
      };
    }
  },

  // Grupo 2: Entropía desde Z
  {
    id: 'entropia-desde-z',
    groupId: 'entropia-z',
    title: 'Entropía desde Z y U',
    isFundamental: true,
      formula: 'S = k_B * ln(Z) + U/T',
    variables: [
      { symbol: 'Z', label: 'Función de Partición (Z)', unit: '-' },
      { symbol: 'U', label: 'Energía Interna (U)', unit: 'J' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'S', label: 'Entropía (S)', unit: 'J/K' },
    resolve: ({ Z, U, T }) => {
      const numZ = parseFloat(Z);
      const numU = parseFloat(U);
      const numT = parseFloat(T);
      if (numT === 0) return { error: 'T no puede ser cero.' };
      const S = kB * Math.log(numZ) + numU / numT;
      return {
        result: { S: formatNumber(S) },
        steps: [
          `S = k_B × ln(Z) + U/T`,
          `S = ${kB} J/K × ln(${numZ}) + ${numU} J / ${numT} K`,
          `S = ${formatNumber(kB * Math.log(numZ))} J/K + ${formatNumber(numU / numT)} J/K`,
          `S = ${formatNumber(S)} J/K`
        ]
      };
    }
  },

  // Grupo 3: Energía libre de Helmholtz
  {
    id: 'helmholtz-desde-z',
    groupId: 'helmholtz-z',
    title: 'Energía Libre de Helmholtz',
    isFundamental: true,
      formula: 'F = -k_B * T * ln(Z)',
    variables: [
      { symbol: 'Z', label: 'Función de Partición (Z)', unit: '-' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'F', label: 'Energía Libre (F)', unit: 'J' },
    resolve: ({ Z, T }) => {
      const numZ = parseFloat(Z);
      const numT = parseFloat(T);
      const F = -kB * numT * Math.log(numZ);
      return {
        result: { F: formatNumber(F) },
        steps: [
          `F = -k_B × T × ln(Z)`,
          `F = -${kB} J/K × ${numT} K × ln(${numZ})`,
          `F = ${formatNumber(F)} J`
        ]
      };
    }
  },

  // Grupo 4: Presión desde Z
  {
    id: 'presion-desde-z',
    groupId: 'presion-z',
    title: 'Presión desde Z',
    isFundamental: true,
      formula: 'P = k_B * T * (dZ/dV) / Z',
    variables: [
      { symbol: 'Z', label: 'Función de Partición (Z)', unit: '-' },
      { symbol: 'dZ_dV', label: 'Derivada dZ/dV', unit: 'm⁻³' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'P', label: 'Presión (P)', unit: 'Pa' },
    resolve: ({ Z, dZ_dV, T }) => {
      const numZ = parseFloat(Z);
      const numDZ = parseFloat(dZ_dV);
      const numT = parseFloat(T);
      if (numZ === 0) return { error: 'Z no puede ser cero.' };
      const P = kB * numT * (numDZ / numZ);
      const atm = P / 101325;
      return {
        result: { P: formatNumber(P) },
        steps: [
          `P = k_B × T × (dZ/dV) / Z`,
          `P = ${kB} J/K × ${numT} K × ${numDZ} m⁻³ / ${numZ}`,
          `P = ${formatNumber(P)} Pa = ${formatNumber(atm)} atm`
        ]
      };
    }
  },

  // Grupo 5: Calor específico
  {
    id: 'calor-especifico-gas',
    groupId: 'calor-especifico-z',
    title: 'Calor Específico a Volumen Constante',
    isFundamental: true,
      formula: 'C_V = 1.5 * N * k_B',
    variables: [
      { symbol: 'N', label: 'Número de partículas (N)', unit: '-' }
    ],
    output: { symbol: 'CV', label: 'Calor Específico (C_V)', unit: 'J/K' },
    resolve: ({ N }) => {
      const numN = parseFloat(N);
      const CV = 1.5 * numN * kB;
      return {
        result: { CV: formatNumber(CV) },
        steps: [
          `C_V = (3/2) × N × k_B`,
          `C_V = 1.5 × ${formatNumber(numN)} × ${kB} J/K`,
          `C_V = ${formatNumber(CV)} J/K`
        ]
      };
    }
  },

  // Grupo 6: Fluctuación de energía
  {
    id: 'fluctuacion-energia-calc',
    groupId: 'fluctuacion-energia',
    title: 'Fluctuación de Energía',
    isFundamental: true,
      formula: 'sigma_E = sqrt(k_B * T^2 * C_V)',
    variables: [
      { symbol: 'CV', label: 'Calor Específico (C_V)', unit: 'J/K' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'sigmaE', label: 'Desviación Estándar σ_E', unit: 'J' },
    resolve: ({ CV, T }) => {
      const numCV = parseFloat(CV);
      const numT = parseFloat(T);
      const sigmaE = Math.sqrt(kB * numT * numT * numCV);
      return {
        result: { sigmaE: formatNumber(sigmaE) },
        steps: [
          `σ_E = √(k_B × T² × C_V)`,
          `σ_E = √(${kB} J/K × (${numT} K)² × ${numCV} J/K)`,
          `σ_E = ${formatNumber(sigmaE)} J`
        ]
      };
    }
  },

  // Grupo 7: Potencial químico
  {
    id: 'potencial-quimico-calc',
    groupId: 'potencial-quimico',
    title: 'Potencial Químico',
    isFundamental: true,
      formula: 'mu = F / N',
    variables: [
      { symbol: 'F', label: 'Energía Libre (F)', unit: 'J' },
      { symbol: 'N', label: 'Número de partículas (N)', unit: '-' }
    ],
    output: { symbol: 'mu', label: 'Potencial Químico (μ)', unit: 'J' },
    resolve: ({ F, N }) => {
      const numF = parseFloat(F);
      const numN = parseFloat(N);
      if (numN === 0) return { error: 'N no puede ser cero.' };
      const mu = numF / numN;
      const eV = mu / 1.602e-19;
      return {
        result: { mu: formatNumber(mu) },
        steps: [
          `μ = F / N`,
          `μ = ${numF} J / ${formatNumber(numN)}`,
          `μ = ${formatNumber(mu)} J = ${formatNumber(eV)} eV`
        ]
      };
    }
  },

  // Grupo 8: Compresibilidad isotérmica
  {
    id: 'compresibilidad-isotermica-calc',
    groupId: 'compresibilidad-isotermica',
    title: 'Compresibilidad Isotérmica',
    isFundamental: true,
      formula: 'kappa_T = sigma_V^2 / (V * k_B * T)',
    variables: [
      { symbol: 'V', label: 'Volumen (V)', unit: 'm³' },
      { symbol: 'sigmaV', label: 'Desviación σ_V', unit: 'm³' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'kappaT', label: 'Compresibilidad κ_T', unit: 'Pa⁻¹' },
    resolve: ({ V, sigmaV, T }) => {
      const numV = parseFloat(V);
      const numSigma = parseFloat(sigmaV);
      const numT = parseFloat(T);
      if (numV === 0 || numT === 0) return { error: 'V y T no pueden ser cero.' };
      const kappaT = (numSigma * numSigma) / (numV * kB * numT);
      return {
        result: { kappaT: formatNumber(kappaT) },
        steps: [
          `κ_T = σ_V² / (V × k_B × T)`,
          `κ_T = (${numSigma} m³)² / (${numV} m³ × ${kB} J/K × ${numT} K)`,
          `κ_T = ${formatNumber(kappaT)} Pa⁻¹`
        ]
      };
    }

  },

  // Grupo 9: Caso límite T→0
  {
    id: 'energia-t0',
    groupId: 'caso-limite-t0',
    title: 'Energía Interna a T→0',
    isFundamental: false,
      formula: 'U = 0 (a T=0 K, Z=1)',
    variables: [
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'U', label: 'Energía Interna (U)', unit: 'J' },
    resolve: ({ T }) => {
      const numT = parseFloat(T);
      if (numT === 0) return { result: { U: 0 }, steps: ['A T=0, U=0 J (estado fundamental)'] };
      return { result: { U: 'Depende de Z y dZ/dT' }, steps: ['Para T≠0, usar fórmula general.'] };
    }
  },

  // Grupo 10: Aplicación industrial (explicativa)
  {
    id: 'aplicacion-industrial-z',
    groupId: 'aplicacion-industrial',
    title: 'Aplicación Industrial de Z',
    isFundamental: false,
      formula: 'Optimizacion de eficiencia y materiales usando Z',
    variables: [],
    output: { symbol: 'info', label: 'Descripción', unit: '-' },
    resolve: () => ({
      result: { info: 'La función de partición Z permite optimizar ciclos térmicos y seleccionar materiales en la industria.' },
      steps: [
        'Z permite calcular U, S y C_V.',
        'Estos valores optimizan la eficiencia y selección de materiales en sistemas térmicos industriales.'
      ]
    })
  }
];
