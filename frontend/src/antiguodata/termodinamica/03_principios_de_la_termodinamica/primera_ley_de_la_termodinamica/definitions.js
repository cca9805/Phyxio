import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  // Grupo 1: Primera Ley Básica
  {
    id: 'primera-ley-energia-interna',
    groupId: 'primera-ley-basica',
    title: 'Cambio de Energía Interna (ΔU)',
    isFundamental: true,
    formula: 'ΔU = Q - W',
    variables: [
      { symbol: 'Q', label: 'Calor (Q)', unit: 'J' },
      { symbol: 'W', label: 'Trabajo (W)', unit: 'J' }
    ],
    output: { symbol: 'deltaU', label: 'Cambio de Energía Interna (ΔU)', unit: 'J' },
    resolve: ({ Q, W }) => {
      const numQ = parseFloat(Q);
      const numW = parseFloat(W);
      const deltaU = numQ - numW;
      return { 
        result: { deltaU: formatNumber(deltaU) }, 
        steps: [`ΔU = ${numQ} J - ${numW} J = ${formatNumber(deltaU)} J`] 
      };
    }
  },
  {
    id: 'primera-ley-calor',
    groupId: 'primera-ley-basica',
    title: 'Calor (Q)',
    isComplementary: true,
    formula: 'Q = ΔU + W',
    variables: [
      { symbol: 'deltaU', label: 'Cambio de Energía Interna (ΔU)', unit: 'J' },
      { symbol: 'W', label: 'Trabajo (W)', unit: 'J' }
    ],
    output: { symbol: 'Q', label: 'Calor (Q)', unit: 'J' },
    resolve: ({ deltaU, W }) => {
      const numDeltaU = parseFloat(deltaU);
      const numW = parseFloat(W);
      const Q = numDeltaU + numW;
      return { 
        result: { Q: formatNumber(Q) }, 
        steps: [`Q = ${numDeltaU} J + ${numW} J = ${formatNumber(Q)} J`] 
      };
    }
  },
  {
    id: 'primera-ley-trabajo',
    groupId: 'primera-ley-basica',
    title: 'Trabajo (W)',
    isComplementary: true,
    formula: 'W = Q - ΔU',
    variables: [
      { symbol: 'Q', label: 'Calor (Q)', unit: 'J' },
      { symbol: 'deltaU', label: 'Cambio de Energía Interna (ΔU)', unit: 'J' }
    ],
    output: { symbol: 'W', label: 'Trabajo (W)', unit: 'J' },
    resolve: ({ Q, deltaU }) => {
      const numQ = parseFloat(Q);
      const numDeltaU = parseFloat(deltaU);
      const W = numQ - numDeltaU;
      return { 
        result: { W: formatNumber(W) }, 
        steps: [`W = ${numQ} J - ${numDeltaU} J = ${formatNumber(W)} J`] 
      };
    }
  },

  // Grupo 2: Energía Interna Gas Ideal
  {
    id: 'energia-interna-gas-ideal',
    groupId: 'energia-interna-gas-ideal',
    title: 'Cambio de Energía Interna Gas Ideal (ΔU)',
    isFundamental: true,
    formula: 'ΔU = n ⋅ Cv ⋅ ΔT',
    variables: [
      { symbol: 'n', label: 'Número de Moles (n)', unit: 'mol' },
      { symbol: 'Cv', label: 'Capacidad Calorífica a Volumen Constante (Cv)', unit: 'J/(mol·K)' },
      { symbol: 'deltaT', label: 'Cambio de Temperatura (ΔT)', unit: 'K' }
    ],
    output: { symbol: 'deltaU', label: 'Cambio de Energía Interna (ΔU)', unit: 'J' },
    resolve: ({ n, Cv, deltaT }) => {
      const numN = parseFloat(n);
      const numCv = parseFloat(Cv);
      const numDeltaT = parseFloat(deltaT);
      const deltaU = numN * numCv * numDeltaT;
      return { 
        result: { deltaU: formatNumber(deltaU) }, 
        steps: [`ΔU = ${numN} mol × ${numCv} J/(mol·K) × ${numDeltaT} K = ${formatNumber(deltaU)} J`] 
      };
    }
  },
  {
    id: 'cambio-temperatura-gas',
    groupId: 'energia-interna-gas-ideal',
    title: 'Cambio de Temperatura (ΔT)',
    isComplementary: true,
    formula: 'ΔT = ΔU / (n ⋅ Cv)',
    variables: [
      { symbol: 'deltaU', label: 'Cambio de Energía Interna (ΔU)', unit: 'J' },
      { symbol: 'n', label: 'Número de Moles (n)', unit: 'mol' },
      { symbol: 'Cv', label: 'Capacidad Calorífica a Volumen Constante (Cv)', unit: 'J/(mol·K)' }
    ],
    output: { symbol: 'deltaT', label: 'Cambio de Temperatura (ΔT)', unit: 'K' },
    resolve: ({ deltaU, n, Cv }) => {
      const numDeltaU = parseFloat(deltaU);
      const numN = parseFloat(n);
      const numCv = parseFloat(Cv);
      if (numN === 0 || numCv === 0) return { error: 'n y Cv no pueden ser cero.' };
      const deltaT = numDeltaU / (numN * numCv);
      return { 
        result: { deltaT: formatNumber(deltaT) }, 
        steps: [`ΔT = ${numDeltaU} J / (${numN} mol × ${numCv} J/(mol·K)) = ${formatNumber(deltaT)} K`] 
      };
    }
  },

  // Grupo 3: Entalpía
  {
    id: 'entalpia',
    groupId: 'entalpia',
    title: 'Entalpía (H)',
    isFundamental: true,
    formula: 'H = U + P ⋅ V',
    variables: [
      { symbol: 'U', label: 'Energía Interna (U)', unit: 'J' },
      { symbol: 'P', label: 'Presión (P)', unit: 'Pa' },
      { symbol: 'V', label: 'Volumen (V)', unit: 'm³' }
    ],
    output: { symbol: 'H', label: 'Entalpía (H)', unit: 'J' },
    resolve: ({ U, P, V }) => {
      const numU = parseFloat(U);
      const numP = parseFloat(P);
      const numV = parseFloat(V);
      const H = numU + (numP * numV);
      return { 
        result: { H: formatNumber(H) }, 
        steps: [`H = ${numU} J + (${numP} Pa × ${numV} m³) = ${formatNumber(H)} J`] 
      };
    }
  },
  {
    id: 'cambio-entalpia-gas-ideal',
    groupId: 'entalpia',
    title: 'Cambio de Entalpía Gas Ideal (ΔH)',
    isFundamental: true,
    formula: 'ΔH = n ⋅ Cp ⋅ ΔT',
    variables: [
      { symbol: 'n', label: 'Número de Moles (n)', unit: 'mol' },
      { symbol: 'Cp', label: 'Capacidad Calorífica a Presión Constante (Cp)', unit: 'J/(mol·K)' },
      { symbol: 'deltaT', label: 'Cambio de Temperatura (ΔT)', unit: 'K' }
    ],
    output: { symbol: 'deltaH', label: 'Cambio de Entalpía (ΔH)', unit: 'J' },
    resolve: ({ n, Cp, deltaT }) => {
      const numN = parseFloat(n);
      const numCp = parseFloat(Cp);
      const numDeltaT = parseFloat(deltaT);
      const deltaH = numN * numCp * numDeltaT;
      return { 
        result: { deltaH: formatNumber(deltaH) }, 
        steps: [`ΔH = ${numN} mol × ${numCp} J/(mol·K) × ${numDeltaT} K = ${formatNumber(deltaH)} J`] 
      };
    }
  }
];
