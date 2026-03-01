import { formatNumber } from '../../../../utils/formatNumber';

const R = 8.314;

export const definitions = [
  {
    id: 'trabajo-isobarico',
    groupId: 'proceso_isobarico-grupo-1',
    title: 'Trabajo en Proceso Isobárico (W)',
    isFundamental: true,
    formula: String.raw`W = P(V_f - V_i) = P\Delta V`,
    variables: [
      { symbol: 'P', label: 'Presión constante (P)', unit: 'Pa' },
      { symbol: 'V_i', label: 'Volumen inicial (V_i)', unit: 'm³' },
      { symbol: 'V_f', label: 'Volumen final (V_f)', unit: 'm³' }
    ],
    output: { symbol: 'W', label: 'Trabajo (W)', unit: 'J' },
    resolve: ({ P, V_i, V_f }) => {
      const W = P * (V_f - V_i);
      return {
        result: { W: formatNumber(W) },
        steps: [
          `W = P × (V_f - V_i)`,
          `W = ${P} Pa × (${V_f} - ${V_i}) m³`,
          `W = ${P} × ${formatNumber(V_f - V_i)} = ${formatNumber(W)} J`
        ]
      };
    }
  },
  {
    id: 'calor-isobarico',
    groupId: 'proceso_isobarico-grupo-1',
    title: 'Calor en Proceso Isobárico (Q)',
    isFundamental: true,
    formula: String.raw`Q = nC_p\Delta T`,
    variables: [
      { symbol: 'n', label: 'Número de moles (n)', unit: 'mol' },
      { symbol: 'C_p', label: 'Capacidad calorífica a P constante (C_p)', unit: 'J/(mol·K)' },
      { symbol: 'deltaT', label: 'Cambio de temperatura (ΔT)', unit: 'K' }
    ],
    output: { symbol: 'Q', label: 'Calor (Q)', unit: 'J' },
    resolve: ({ n, C_p, deltaT }) => {
      const Q = n * C_p * deltaT;
      return {
        result: { Q: formatNumber(Q) },
        steps: [
          `Q = n × C_p × ΔT`,
          `Q = ${n} mol × ${C_p} J/(mol·K) × ${deltaT} K`,
          `Q = ${formatNumber(Q)} J`
        ]
      };
    }
  },
  {
    id: 'relacion-tv-isobarico',
    groupId: 'proceso_isobarico-grupo-1',
    title: 'Temperatura Final (T_f)',
    isFundamental: false,
    formula: String.raw`\frac{V_i}{T_i} = \frac{V_f}{T_f}`,
    variables: [
      { symbol: 'V_i', label: 'Volumen inicial (V_i)', unit: 'm³' },
      { symbol: 'T_i', label: 'Temperatura inicial (T_i)', unit: 'K' },
      { symbol: 'V_f', label: 'Volumen final (V_f)', unit: 'm³' }
    ],
    output: { symbol: 'T_f', label: 'Temperatura final (T_f)', unit: 'K' },
    resolve: ({ V_i, T_i, V_f }) => {
      const T_f = (V_f * T_i) / V_i;
      return {
        result: { T_f: formatNumber(T_f) },
        steps: [
          `V_i / T_i = V_f / T_f`,
          `T_f = (V_f × T_i) / V_i`,
          `T_f = (${V_f} × ${T_i}) / ${V_i}`,
          `T_f = ${formatNumber(T_f)} K`
        ]
      };
    }
  },
  {
    id: 'energia-interna-isobarico',
    groupId: 'proceso_isobarico-grupo-1',
    title: 'Cambio de Energía Interna (ΔU)',
    isFundamental: true,
    formula: String.raw`\Delta U = nC_v\Delta T`,
    variables: [
      { symbol: 'n', label: 'Número de moles (n)', unit: 'mol' },
      { symbol: 'C_v', label: 'Capacidad calorífica a V constante (C_v)', unit: 'J/(mol·K)' },
      { symbol: 'deltaT', label: 'Cambio de temperatura (ΔT)', unit: 'K' }
    ],
    output: { symbol: 'deltaU', label: 'Cambio de energía interna (ΔU)', unit: 'J' },
    resolve: ({ n, C_v, deltaT }) => {
      const deltaU = n * C_v * deltaT;
      return {
        result: { deltaU: formatNumber(deltaU) },
        steps: [
          `ΔU = n × C_v × ΔT`,
          `ΔU = ${n} mol × ${C_v} J/(mol·K) × ${deltaT} K`,
          `ΔU = ${formatNumber(deltaU)} J`
        ]
      };
    }
  }
];
