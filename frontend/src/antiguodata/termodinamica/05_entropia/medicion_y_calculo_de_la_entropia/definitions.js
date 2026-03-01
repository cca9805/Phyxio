import { formatNumber } from '../../../../utils/formatNumber';

const R = 8.314; // Constante universal de gases (J/mol·K)

export const definitions = [
  // Grupo 1: Ecuación básica de entropía (ΔS = Q/T)
  {
    id: 'entropia-proceso-reversible',
    groupId: 'grupo-proceso-reversible',
    title: 'Cambio de Entropía (ΔS)',
    isFundamental: true,
    formula: String.raw`\Delta S = \frac{Q_{rev}}{T}`,
    variables: [
      { symbol: 'Q_rev', label: 'Calor reversible (Q_rev)', unit: 'J' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'deltaS', label: 'Cambio de entropía (ΔS)', unit: 'J/K' },
    resolve: ({ Q_rev, T }) => {
      const deltaS = Q_rev / T;
      return {
        result: { deltaS: formatNumber(deltaS) },
        steps: [
          `ΔS = Q_rev / T`,
          `ΔS = ${Q_rev} J / ${T} K`,
          `ΔS = ${formatNumber(deltaS)} J/K`
        ]
      };
    }
  },
  {
    id: 'calor-reversible',
    groupId: 'grupo-proceso-reversible',
    title: 'Calor Reversible (Q_rev)',
    isFundamental: false,
    formula: String.raw`Q_{rev} = \Delta S \cdot T`,
    variables: [
      { symbol: 'deltaS', label: 'Cambio de entropía (ΔS)', unit: 'J/K' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'Q_rev', label: 'Calor reversible (Q_rev)', unit: 'J' },
    resolve: ({ deltaS, T }) => {
      const Q_rev = deltaS * T;
      return {
        result: { Q_rev: formatNumber(Q_rev) },
        steps: [
          `Q_rev = ΔS × T`,
          `Q_rev = ${deltaS} J/K × ${T} K`,
          `Q_rev = ${formatNumber(Q_rev)} J`
        ]
      };
    }
  },
  {
    id: 'temperatura-entropia',
    groupId: 'grupo-proceso-reversible',
    title: 'Temperatura (T)',
    isFundamental: false,
    formula: String.raw`T = \frac{Q_{rev}}{\Delta S}`,
    variables: [
      { symbol: 'Q_rev', label: 'Calor reversible (Q_rev)', unit: 'J' },
      { symbol: 'deltaS', label: 'Cambio de entropía (ΔS)', unit: 'J/K' }
    ],
    output: { symbol: 'T', label: 'Temperatura (T)', unit: 'K' },
    resolve: ({ Q_rev, deltaS }) => {
      if (deltaS === 0) return { error: 'El cambio de entropía no puede ser cero.' };
      const T = Q_rev / deltaS;
      return {
        result: { T: formatNumber(T) },
        steps: [
          `T = Q_rev / ΔS`,
          `T = ${Q_rev} J / ${deltaS} J/K`,
          `T = ${formatNumber(T)} K`
        ]
      };
    }
  },

  // Grupo 2: Proceso Isotérmico (ΔS = nR ln(Vf/Vi))
  {
    id: 'entropia-isotermico',
    groupId: 'grupo-isotermico',
    title: 'Entropía en Proceso Isotérmico (ΔS)',
    isFundamental: true,
    formula: String.raw`\Delta S = nR\ln\left(\frac{V_f}{V_i}\right)`,
    variables: [
      { symbol: 'n', label: 'Número de moles (n)', unit: 'mol' },
      { symbol: 'V_i', label: 'Volumen inicial (V_i)', unit: 'm³' },
      { symbol: 'V_f', label: 'Volumen final (V_f)', unit: 'm³' }
    ],
    output: { symbol: 'deltaS', label: 'Cambio de entropía (ΔS)', unit: 'J/K' },
    resolve: ({ n, V_i, V_f }) => {
      const deltaS = n * R * Math.log(V_f / V_i);
      return {
        result: { deltaS: formatNumber(deltaS) },
        steps: [
          `ΔS = nR ln(V_f / V_i)`,
          `ΔS = ${n} mol × ${R} J/(mol·K) × ln(${V_f} / ${V_i})`,
          `ΔS = ${n * R} × ln(${formatNumber(V_f / V_i)})`,
          `ΔS = ${formatNumber(deltaS)} J/K`
        ]
      };
    }
  },
  {
    id: 'volumen-final-isotermico',
    groupId: 'grupo-isotermico',
    title: 'Volumen Final (V_f)',
    isFundamental: false,
    formula: String.raw`V_f = V_i \cdot e^{\frac{\Delta S}{nR}}`,
    variables: [
      { symbol: 'deltaS', label: 'Cambio de entropía (ΔS)', unit: 'J/K' },
      { symbol: 'n', label: 'Número de moles (n)', unit: 'mol' },
      { symbol: 'V_i', label: 'Volumen inicial (V_i)', unit: 'm³' }
    ],
    output: { symbol: 'V_f', label: 'Volumen final (V_f)', unit: 'm³' },
    resolve: ({ deltaS, n, V_i }) => {
      const V_f = V_i * Math.exp(deltaS / (n * R));
      return {
        result: { V_f: formatNumber(V_f) },
        steps: [
          `V_f = V_i × e^(ΔS / nR)`,
          `V_f = ${V_i} × e^(${deltaS} / (${n} × ${R}))`,
          `V_f = ${V_i} × e^(${formatNumber(deltaS / (n * R))})`,
          `V_f = ${formatNumber(V_f)} m³`
        ]
      };
    }
  },
  {
    id: 'volumen-inicial-isotermico',
    groupId: 'grupo-isotermico',
    title: 'Volumen Inicial (V_i)',
    isFundamental: false,
    formula: String.raw`V_i = \frac{V_f}{e^{\frac{\Delta S}{nR}}}`,
    variables: [
      { symbol: 'deltaS', label: 'Cambio de entropía (ΔS)', unit: 'J/K' },
      { symbol: 'n', label: 'Número de moles (n)', unit: 'mol' },
      { symbol: 'V_f', label: 'Volumen final (V_f)', unit: 'm³' }
    ],
    output: { symbol: 'V_i', label: 'Volumen inicial (V_i)', unit: 'm³' },
    resolve: ({ deltaS, n, V_f }) => {
      const V_i = V_f / Math.exp(deltaS / (n * R));
      return {
        result: { V_i: formatNumber(V_i) },
        steps: [
          `V_i = V_f / e^(ΔS / nR)`,
          `V_i = ${V_f} / e^(${deltaS} / (${n} × ${R}))`,
          `V_i = ${V_f} / e^(${formatNumber(deltaS / (n * R))})`,
          `V_i = ${formatNumber(V_i)} m³`
        ]
      };
    }
  },

  // Grupo 3: Cambio de Temperatura a Presión Constante (ΔS = nCp ln(Tf/Ti))
  {
    id: 'entropia-temperatura',
    groupId: 'grupo-temperatura',
    title: 'Entropía con Cambio de Temperatura (ΔS)',
    isFundamental: true,
    formula: String.raw`\Delta S = nC_p\ln\left(\frac{T_f}{T_i}\right)`,
    variables: [
      { symbol: 'n', label: 'Número de moles (n)', unit: 'mol' },
      { symbol: 'C_p', label: 'Capacidad calorífica (C_p)', unit: 'J/(mol·K)' },
      { symbol: 'T_i', label: 'Temperatura inicial (T_i)', unit: 'K' },
      { symbol: 'T_f', label: 'Temperatura final (T_f)', unit: 'K' }
    ],
    output: { symbol: 'deltaS', label: 'Cambio de entropía (ΔS)', unit: 'J/K' },
    resolve: ({ n, C_p, T_i, T_f }) => {
      const deltaS = n * C_p * Math.log(T_f / T_i);
      return {
        result: { deltaS: formatNumber(deltaS) },
        steps: [
          `ΔS = nC_p ln(T_f / T_i)`,
          `ΔS = ${n} mol × ${C_p} J/(mol·K) × ln(${T_f} / ${T_i})`,
          `ΔS = ${n * C_p} × ln(${formatNumber(T_f / T_i)})`,
          `ΔS = ${formatNumber(deltaS)} J/K`
        ]
      };
    }
  },
  {
    id: 'temperatura-final-entropia',
    groupId: 'grupo-temperatura',
    title: 'Temperatura Final (T_f)',
    isFundamental: false,
    formula: String.raw`T_f = T_i \cdot e^{\frac{\Delta S}{nC_p}}`,
    variables: [
      { symbol: 'deltaS', label: 'Cambio de entropía (ΔS)', unit: 'J/K' },
      { symbol: 'n', label: 'Número de moles (n)', unit: 'mol' },
      { symbol: 'C_p', label: 'Capacidad calorífica (C_p)', unit: 'J/(mol·K)' },
      { symbol: 'T_i', label: 'Temperatura inicial (T_i)', unit: 'K' }
    ],
    output: { symbol: 'T_f', label: 'Temperatura final (T_f)', unit: 'K' },
    resolve: ({ deltaS, n, C_p, T_i }) => {
      const T_f = T_i * Math.exp(deltaS / (n * C_p));
      return {
        result: { T_f: formatNumber(T_f) },
        steps: [
          `T_f = T_i × e^(ΔS / nC_p)`,
          `T_f = ${T_i} × e^(${deltaS} / (${n} × ${C_p}))`,
          `T_f = ${T_i} × e^(${formatNumber(deltaS / (n * C_p))})`,
          `T_f = ${formatNumber(T_f)} K`
        ]
      };
    }
  },
  {
    id: 'temperatura-inicial-entropia',
    groupId: 'grupo-temperatura',
    title: 'Temperatura Inicial (T_i)',
    isFundamental: false,
    formula: String.raw`T_i = \frac{T_f}{e^{\frac{\Delta S}{nC_p}}}`,
    variables: [
      { symbol: 'deltaS', label: 'Cambio de entropía (ΔS)', unit: 'J/K' },
      { symbol: 'n', label: 'Número de moles (n)', unit: 'mol' },
      { symbol: 'C_p', label: 'Capacidad calorífica (C_p)', unit: 'J/(mol·K)' },
      { symbol: 'T_f', label: 'Temperatura final (T_f)', unit: 'K' }
    ],
    output: { symbol: 'T_i', label: 'Temperatura inicial (T_i)', unit: 'K' },
    resolve: ({ deltaS, n, C_p, T_f }) => {
      const T_i = T_f / Math.exp(deltaS / (n * C_p));
      return {
        result: { T_i: formatNumber(T_i) },
        steps: [
          `T_i = T_f / e^(ΔS / nC_p)`,
          `T_i = ${T_f} / e^(${deltaS} / (${n} × ${C_p}))`,
          `T_i = ${T_f} / e^(${formatNumber(deltaS / (n * C_p))})`,
          `T_i = ${formatNumber(T_i)} K`
        ]
      };
    }
  },

  // Grupo 4: Cambio de Fase (ΔS = nL/T)
  {
    id: 'entropia-cambio-fase',
    groupId: 'grupo-cambio-fase',
    title: 'Entropía en Cambio de Fase (ΔS)',
    isFundamental: true,
    formula: String.raw`\Delta S = \frac{nL}{T}`,
    variables: [
      { symbol: 'n', label: 'Número de moles (n)', unit: 'mol' },
      { symbol: 'L', label: 'Calor latente (L)', unit: 'J/mol' },
      { symbol: 'T', label: 'Temperatura de cambio de fase (T)', unit: 'K' }
    ],
    output: { symbol: 'deltaS', label: 'Cambio de entropía (ΔS)', unit: 'J/K' },
    resolve: ({ n, L, T }) => {
      const deltaS = (n * L) / T;
      return {
        result: { deltaS: formatNumber(deltaS) },
        steps: [
          `ΔS = (n × L) / T`,
          `ΔS = (${n} mol × ${L} J/mol) / ${T} K`,
          `ΔS = ${n * L} J / ${T} K`,
          `ΔS = ${formatNumber(deltaS)} J/K`
        ]
      };
    }
  },
  {
    id: 'calor-latente',
    groupId: 'grupo-cambio-fase',
    title: 'Calor Latente (L)',
    isFundamental: false,
    formula: String.raw`L = \frac{\Delta S \cdot T}{n}`,
    variables: [
      { symbol: 'deltaS', label: 'Cambio de entropía (ΔS)', unit: 'J/K' },
      { symbol: 'T', label: 'Temperatura de cambio de fase (T)', unit: 'K' },
      { symbol: 'n', label: 'Número de moles (n)', unit: 'mol' }
    ],
    output: { symbol: 'L', label: 'Calor latente (L)', unit: 'J/mol' },
    resolve: ({ deltaS, T, n }) => {
      if (n === 0) return { error: 'El número de moles no puede ser cero.' };
      const L = (deltaS * T) / n;
      return {
        result: { L: formatNumber(L) },
        steps: [
          `L = (ΔS × T) / n`,
          `L = (${deltaS} J/K × ${T} K) / ${n} mol`,
          `L = ${deltaS * T} J / ${n} mol`,
          `L = ${formatNumber(L)} J/mol`
        ]
      };
    }
  },
  {
    id: 'moles-cambio-fase',
    groupId: 'grupo-cambio-fase',
    title: 'Número de Moles (n)',
    isFundamental: false,
    formula: String.raw`n = \frac{\Delta S \cdot T}{L}`,
    variables: [
      { symbol: 'deltaS', label: 'Cambio de entropía (ΔS)', unit: 'J/K' },
      { symbol: 'T', label: 'Temperatura de cambio de fase (T)', unit: 'K' },
      { symbol: 'L', label: 'Calor latente (L)', unit: 'J/mol' }
    ],
    output: { symbol: 'n', label: 'Número de moles (n)', unit: 'mol' },
    resolve: ({ deltaS, T, L }) => {
      if (L === 0) return { error: 'El calor latente no puede ser cero.' };
      const n = (deltaS * T) / L;
      return {
        result: { n: formatNumber(n) },
        steps: [
          `n = (ΔS × T) / L`,
          `n = (${deltaS} J/K × ${T} K) / ${L} J/mol`,
          `n = ${deltaS * T} J / ${L} J/mol`,
          `n = ${formatNumber(n)} mol`
        ]
      };
    }
  }
];
