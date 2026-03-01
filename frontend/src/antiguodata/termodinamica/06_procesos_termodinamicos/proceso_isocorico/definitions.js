import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'trabajo-isocorico',
    groupId: 'proceso_isocorico-grupo-1',
    title: 'Trabajo en Proceso Isocórico (W)',
    isFundamental: true,
    formula: String.raw`W = 0`,
    variables: [],
    output: { symbol: 'W', label: 'Trabajo (W)', unit: 'J' },
    resolve: () => {
      return {
        result: { W: 0 },
        steps: [
          `En un proceso isocórico (volumen constante):`,
          `W = ∫P dV = 0 (ya que dV = 0)`,
          `W = 0 J`
        ]
      };
    }
  },
  {
    id: 'calor-isocorico',
    groupId: 'proceso_isocorico-grupo-1',
    title: 'Calor en Proceso Isocórico (Q)',
    isFundamental: true,
    formula: String.raw`Q = nC_v\Delta T`,
    variables: [
      { symbol: 'n', label: 'Número de moles (n)', unit: 'mol' },
      { symbol: 'C_v', label: 'Capacidad calorífica a V constante (C_v)', unit: 'J/(mol·K)' },
      { symbol: 'deltaT', label: 'Cambio de temperatura (ΔT)', unit: 'K' }
    ],
    output: { symbol: 'Q', label: 'Calor (Q)', unit: 'J' },
    resolve: ({ n, C_v, deltaT }) => {
      const Q = n * C_v * deltaT;
      return {
        result: { Q: formatNumber(Q) },
        steps: [
          `Q = n × C_v × ΔT`,
          `Q = ${n} × ${C_v} × ${deltaT}`,
          `Q = ${formatNumber(Q)} J`
        ]
      };
    }
  },
  {
    id: 'relacion-pt-isocorico',
    groupId: 'proceso_isocorico-grupo-1',
    title: 'Temperatura Final (T_f)',
    isFundamental: false,
    formula: String.raw`\frac{P_i}{T_i} = \frac{P_f}{T_f}`,
    variables: [
      { symbol: 'P_i', label: 'Presión inicial (P_i)', unit: 'Pa' },
      { symbol: 'T_i', label: 'Temperatura inicial (T_i)', unit: 'K' },
      { symbol: 'P_f', label: 'Presión final (P_f)', unit: 'Pa' }
    ],
    output: { symbol: 'T_f', label: 'Temperatura final (T_f)', unit: 'K' },
    resolve: ({ P_i, T_i, P_f }) => {
      const T_f = (P_f * T_i) / P_i;
      return {
        result: { T_f: formatNumber(T_f) },
        steps: [
          `P_i / T_i = P_f / T_f`,
          `T_f = (P_f × T_i) / P_i`,
          `T_f = (${P_f} × ${T_i}) / ${P_i}`,
          `T_f = ${formatNumber(T_f)} K`
        ]
      };
    }
  },
  {
    id: 'energia-interna-isocorico',
    groupId: 'proceso_isocorico-grupo-1',
    title: 'Cambio de Energía Interna (ΔU)',
    isFundamental: true,
    formula: String.raw`\Delta U = Q = nC_v\Delta T`,
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
          `Como W = 0, entonces ΔU = Q`,
          `ΔU = n × C_v × ΔT`,
          `ΔU = ${n} × ${C_v} × ${deltaT}`,
          `ΔU = ${formatNumber(deltaU)} J`
        ]
      };
    }
  }
];
