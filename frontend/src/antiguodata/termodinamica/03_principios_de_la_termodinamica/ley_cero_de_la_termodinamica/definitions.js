import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  // Grupo 1: Equilibrio Térmico
  {
    id: 'ley-cero-temperatura-equilibrio',
    groupId: 'ley-cero-equilibrio',
    title: 'Temperatura de Equilibrio (T_f)',
    isFundamental: true,
    formula: 'T_f = (m_1 ⋅ c_1 ⋅ T_1 + m_2 ⋅ c_2 ⋅ T_2) / (m_1 ⋅ c_1 + m_2 ⋅ c_2)',
    variables: [
      { symbol: 'm_1', label: 'Masa del Sistema 1 (m_1)', unit: 'kg' },
      { symbol: 'c_1', label: 'Calor Específico 1 (c_1)', unit: 'J/(kg·K)' },
      { symbol: 'T_1', label: 'Temperatura Inicial 1 (T_1)', unit: 'K' },
      { symbol: 'm_2', label: 'Masa del Sistema 2 (m_2)', unit: 'kg' },
      { symbol: 'c_2', label: 'Calor Específico 2 (c_2)', unit: 'J/(kg·K)' },
      { symbol: 'T_2', label: 'Temperatura Inicial 2 (T_2)', unit: 'K' }
    ],
    output: { symbol: 'T_f', label: 'Temperatura de Equilibrio (T_f)', unit: 'K' },
    resolve: ({ m_1, c_1, T_1, m_2, c_2, T_2 }) => {
      const numM1 = parseFloat(m_1);
      const numC1 = parseFloat(c_1);
      const numT1 = parseFloat(T_1);
      const numM2 = parseFloat(m_2);
      const numC2 = parseFloat(c_2);
      const numT2 = parseFloat(T_2);
      
      const denominador = numM1 * numC1 + numM2 * numC2;
      if (denominador === 0) return { error: 'El denominador no puede ser cero.' };
      
      const numerador = numM1 * numC1 * numT1 + numM2 * numC2 * numT2;
      const T_f = numerador / denominador;
      
      return { 
        result: { T_f: formatNumber(T_f) }, 
        steps: [
          `Numerador = m_1 × c_1 × T_1 + m_2 × c_2 × T_2`,
          `Numerador = ${formatNumber(numM1 * numC1 * numT1)} + ${formatNumber(numM2 * numC2 * numT2)} = ${formatNumber(numerador)}`,
          `Denominador = m_1 × c_1 + m_2 × c_2 = ${formatNumber(denominador)}`,
          `T_f = ${formatNumber(numerador)} / ${formatNumber(denominador)} = ${formatNumber(T_f)} K`
        ] 
      };
    }
  },
  {
    id: 'ley-cero-masa-sistema',
    groupId: 'ley-cero-equilibrio',
    title: 'Masa del Sistema 2 (m_2)',
    isComplementary: true,
    formula: 'm_2 = (m_1 ⋅ c_1 ⋅ (T_1 - T_f)) / (c_2 ⋅ (T_f - T_2))',
    variables: [
      { symbol: 'm_1', label: 'Masa del Sistema 1 (m_1)', unit: 'kg' },
      { symbol: 'c_1', label: 'Calor Específico 1 (c_1)', unit: 'J/(kg·K)' },
      { symbol: 'T_1', label: 'Temperatura Inicial 1 (T_1)', unit: 'K' },
      { symbol: 'c_2', label: 'Calor Específico 2 (c_2)', unit: 'J/(kg·K)' },
      { symbol: 'T_2', label: 'Temperatura Inicial 2 (T_2)', unit: 'K' },
      { symbol: 'T_f', label: 'Temperatura de Equilibrio (T_f)', unit: 'K' }
    ],
    output: { symbol: 'm_2', label: 'Masa del Sistema 2 (m_2)', unit: 'kg' },
    resolve: ({ m_1, c_1, T_1, c_2, T_2, T_f }) => {
      const numM1 = parseFloat(m_1);
      const numC1 = parseFloat(c_1);
      const numT1 = parseFloat(T_1);
      const numC2 = parseFloat(c_2);
      const numT2 = parseFloat(T_2);
      const numTf = parseFloat(T_f);
      
      const denominador = numC2 * (numTf - numT2);
      if (denominador === 0) return { error: 'El denominador no puede ser cero.' };
      
      const m_2 = (numM1 * numC1 * (numT1 - numTf)) / denominador;
      
      return { 
        result: { m_2: formatNumber(m_2) }, 
        steps: [`m_2 = (${numM1} × ${numC1} × (${numT1} - ${numTf})) / (${numC2} × (${numTf} - ${numT2})) = ${formatNumber(m_2)} kg`] 
      };
    }
  },

  // Grupo 2: Tiempo de Equilibrio
  {
    id: 'ley-cero-tiempo-equilibrio',
    groupId: 'ley-cero-tiempo',
    title: 'Tiempo de Equilibrio (t)',
    isFundamental: true,
    formula: 't = (m ⋅ c ⋅ ΔT) / P',
    variables: [
      { symbol: 'm', label: 'Masa del Sistema (m)', unit: 'kg' },
      { symbol: 'c', label: 'Calor Específico (c)', unit: 'J/(kg·K)' },
      { symbol: 'deltaT', label: 'Diferencia de Temperatura (ΔT)', unit: 'K' },
      { symbol: 'P', label: 'Potencia de Transferencia (P)', unit: 'W' }
    ],
    output: { symbol: 't', label: 'Tiempo Aproximado (t)', unit: 's' },
    resolve: ({ m, c, deltaT, P }) => {
      const numM = parseFloat(m);
      const numC = parseFloat(c);
      const numDeltaT = parseFloat(deltaT);
      const numP = parseFloat(P);
      
      if (numP === 0) return { error: 'La potencia no puede ser cero.' };
      
      const Q = numM * numC * numDeltaT;
      const t = Q / numP;
      const t_min = t / 60;
      
      return { 
        result: { t: formatNumber(t) }, 
        steps: [
          `Calor necesario: Q = m × c × ΔT = ${numM} × ${numC} × ${numDeltaT} = ${formatNumber(Q)} J`,
          `Tiempo: t = Q / P = ${formatNumber(Q)} / ${numP} = ${formatNumber(t)} s`,
          `En minutos: t = ${formatNumber(t_min)} min`
        ] 
      };
    }
  },
  {
    id: 'ley-cero-potencia',
    groupId: 'ley-cero-tiempo',
    title: 'Potencia de Transferencia (P)',
    isComplementary: true,
    formula: 'P = (m ⋅ c ⋅ ΔT) / t',
    variables: [
      { symbol: 'm', label: 'Masa del Sistema (m)', unit: 'kg' },
      { symbol: 'c', label: 'Calor Específico (c)', unit: 'J/(kg·K)' },
      { symbol: 'deltaT', label: 'Diferencia de Temperatura (ΔT)', unit: 'K' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's' }
    ],
    output: { symbol: 'P', label: 'Potencia de Transferencia (P)', unit: 'W' },
    resolve: ({ m, c, deltaT, t }) => {
      const numM = parseFloat(m);
      const numC = parseFloat(c);
      const numDeltaT = parseFloat(deltaT);
      const numT = parseFloat(t);
      
      if (numT === 0) return { error: 'El tiempo no puede ser cero.' };
      
      const Q = numM * numC * numDeltaT;
      const P = Q / numT;
      
      return { 
        result: { P: formatNumber(P) }, 
        steps: [
          `Q = ${numM} × ${numC} × ${numDeltaT} = ${formatNumber(Q)} J`,
          `P = ${formatNumber(Q)} J / ${numT} s = ${formatNumber(P)} W`
        ] 
      };
    }
  }
];
