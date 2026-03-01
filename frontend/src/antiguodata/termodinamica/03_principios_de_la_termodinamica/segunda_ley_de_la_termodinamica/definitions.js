import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  // Grupo 1: Entropía Básica
  {
    id: 'segunda-ley-entropia-basica',
    groupId: 'segunda-ley-entropia',
    title: 'Cambio de Entropía (ΔS)',
    isFundamental: true,
    formula: 'ΔS = Q_rev / T',
    variables: [
      { symbol: 'Q_rev', label: 'Calor Reversible (Q_rev)', unit: 'J' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'deltaS', label: 'Cambio de Entropía (ΔS)', unit: 'J/K' },
    resolve: ({ Q_rev, T }) => {
      const numQ = parseFloat(Q_rev);
      const numT = parseFloat(T);
      if (numT === 0) return { error: 'La temperatura no puede ser cero.' };
      const deltaS = numQ / numT;
      return { 
        result: { deltaS: formatNumber(deltaS) }, 
        steps: [`ΔS = ${numQ} J / ${numT} K = ${formatNumber(deltaS)} J/K`] 
      };
    }
  },
  {
    id: 'segunda-ley-calor-reversible',
    groupId: 'segunda-ley-entropia',
    title: 'Calor Reversible (Q_rev)',
    isComplementary: true,
    formula: 'Q_rev = ΔS ⋅ T',
    variables: [
      { symbol: 'deltaS', label: 'Cambio de Entropía (ΔS)', unit: 'J/K' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'Q_rev', label: 'Calor Reversible (Q_rev)', unit: 'J' },
    resolve: ({ deltaS, T }) => {
      const numDeltaS = parseFloat(deltaS);
      const numT = parseFloat(T);
      const Q_rev = numDeltaS * numT;
      return { 
        result: { Q_rev: formatNumber(Q_rev) }, 
        steps: [`Q_rev = ${numDeltaS} J/K × ${numT} K = ${formatNumber(Q_rev)} J`] 
      };
    }
  },
  {
    id: 'segunda-ley-entropia-gas-ideal',
    groupId: 'segunda-ley-entropia',
    title: 'Entropía Gas Ideal (ΔS)',
    isFundamental: true,
    formula: 'ΔS = n ⋅ R ⋅ ln(V_f / V_i)',
    variables: [
      { symbol: 'n', label: 'Número de Moles (n)', unit: 'mol' },
      { symbol: 'V_i', label: 'Volumen Inicial (V_i)', unit: 'm³' },
      { symbol: 'V_f', label: 'Volumen Final (V_f)', unit: 'm³' }
    ],
    output: { symbol: 'deltaS', label: 'Cambio de Entropía (ΔS)', unit: 'J/K' },
    resolve: ({ n, V_i, V_f }) => {
      const numN = parseFloat(n);
      const numVi = parseFloat(V_i);
      const numVf = parseFloat(V_f);
      if (numVi === 0 || numVf === 0) return { error: 'Los volúmenes no pueden ser cero.' };
      const R = 8.314; // J/(mol·K)
      const deltaS = numN * R * Math.log(numVf / numVi);
      return { 
        result: { deltaS: formatNumber(deltaS) }, 
        steps: [
          `R = 8.314 J/(mol·K)`,
          `ΔS = ${numN} mol × 8.314 J/(mol·K) × ln(${numVf} / ${numVi})`,
          `ΔS = ${formatNumber(deltaS)} J/K`
        ] 
      };
    }
  },

  // Grupo 2: Máquinas Térmicas
  {
    id: 'segunda-ley-eficiencia-maquina',
    groupId: 'segunda-ley-maquinas',
    title: 'Eficiencia de Máquina Térmica (η)',
    isFundamental: true,
    formula: 'η = W / Q_H = 1 - Q_C / Q_H',
    variables: [
      { symbol: 'Q_H', label: 'Calor del Foco Caliente (Q_H)', unit: 'J' },
      { symbol: 'Q_C', label: 'Calor al Foco Frío (Q_C)', unit: 'J' }
    ],
    output: { symbol: 'eficiencia', label: 'Eficiencia (η)', unit: '%' },
    resolve: ({ Q_H, Q_C }) => {
      const numQH = parseFloat(Q_H);
      const numQC = parseFloat(Q_C);
      if (numQH === 0) return { error: 'Q_H no puede ser cero.' };
      const W = numQH - numQC;
      const eficiencia = (W / numQH) * 100;
      return { 
        result: { eficiencia: formatNumber(eficiencia) }, 
        steps: [
          `W = Q_H - Q_C = ${numQH} J - ${numQC} J = ${W} J`,
          `η = (W / Q_H) × 100% = (${W} / ${numQH}) × 100%`,
          `η = ${formatNumber(eficiencia)}%`
        ] 
      };
    }
  },
  {
    id: 'segunda-ley-trabajo-maquina',
    groupId: 'segunda-ley-maquinas',
    title: 'Trabajo de Máquina Térmica (W)',
    isComplementary: true,
    formula: 'W = Q_H - Q_C',
    variables: [
      { symbol: 'Q_H', label: 'Calor del Foco Caliente (Q_H)', unit: 'J' },
      { symbol: 'Q_C', label: 'Calor al Foco Frío (Q_C)', unit: 'J' }
    ],
    output: { symbol: 'W', label: 'Trabajo (W)', unit: 'J' },
    resolve: ({ Q_H, Q_C }) => {
      const numQH = parseFloat(Q_H);
      const numQC = parseFloat(Q_C);
      const W = numQH - numQC;
      return { 
        result: { W: formatNumber(W) }, 
        steps: [`W = ${numQH} J - ${numQC} J = ${formatNumber(W)} J`] 
      };
    }
  },
  {
    id: 'segunda-ley-eficiencia-carnot',
    groupId: 'segunda-ley-maquinas',
    title: 'Eficiencia de Carnot (η_Carnot)',
    isFundamental: true,
    formula: 'η_Carnot = 1 - T_C / T_H',
    variables: [
      { symbol: 'T_H', label: 'Temperatura Foco Caliente (T_H)', unit: 'K' },
      { symbol: 'T_C', label: 'Temperatura Foco Frío (T_C)', unit: 'K' }
    ],
    output: { symbol: 'eficiencia_carnot', label: 'Eficiencia de Carnot (η_Carnot)', unit: '%' },
    resolve: ({ T_H, T_C }) => {
      const numTH = parseFloat(T_H);
      const numTC = parseFloat(T_C);
      if (numTH === 0) return { error: 'T_H no puede ser cero.' };
      const eficiencia_carnot = (1 - numTC / numTH) * 100;
      return { 
        result: { eficiencia_carnot: formatNumber(eficiencia_carnot) }, 
        steps: [
          `η_Carnot = (1 - T_C / T_H) × 100%`,
          `η_Carnot = (1 - ${numTC} / ${numTH}) × 100%`,
          `η_Carnot = ${formatNumber(eficiencia_carnot)}%`
        ] 
      };
    }
  },

  // Grupo 3: Coeficiente de Rendimiento
  {
    id: 'segunda-ley-cop-refrigerador',
    groupId: 'segunda-ley-cop',
    title: 'COP de Refrigerador',
    isFundamental: true,
    formula: 'COP_R = Q_C / W',
    variables: [
      { symbol: 'Q_C', label: 'Calor Extraído (Q_C)', unit: 'J' },
      { symbol: 'W', label: 'Trabajo Consumido (W)', unit: 'J' }
    ],
    output: { symbol: 'COP_R', label: 'COP Refrigerador', unit: '' },
    resolve: ({ Q_C, W }) => {
      const numQC = parseFloat(Q_C);
      const numW = parseFloat(W);
      if (numW === 0) return { error: 'El trabajo no puede ser cero.' };
      const COP_R = numQC / numW;
      return { 
        result: { COP_R: formatNumber(COP_R) }, 
        steps: [`COP_R = ${numQC} J / ${numW} J = ${formatNumber(COP_R)}`] 
      };
    }
  },
  {
    id: 'segunda-ley-trabajo-refrigerador',
    groupId: 'segunda-ley-cop',
    title: 'Trabajo de Refrigerador (W)',
    isComplementary: true,
    formula: 'W = Q_C / COP_R',
    variables: [
      { symbol: 'Q_C', label: 'Calor Extraído (Q_C)', unit: 'J' },
      { symbol: 'COP_R', label: 'COP Refrigerador', unit: '' }
    ],
    output: { symbol: 'W', label: 'Trabajo Consumido (W)', unit: 'J' },
    resolve: ({ Q_C, COP_R }) => {
      const numQC = parseFloat(Q_C);
      const numCOP = parseFloat(COP_R);
      if (numCOP === 0) return { error: 'El COP no puede ser cero.' };
      const W = numQC / numCOP;
      return { 
        result: { W: formatNumber(W) }, 
        steps: [`W = ${numQC} J / ${numCOP} = ${formatNumber(W)} J`] 
      };
    }
  }
];
