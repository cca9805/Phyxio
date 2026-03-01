import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'cambio-energia-interna',
    groupId: 'energia_interna-grupo-1',
    title: 'Cambio de Energía Interna (ΔU)',
    isFundamental: true,
    formula: String.raw`\Delta U = Q - W`,
    variables: [
      { symbol: 'Q', label: 'Calor transferido al sistema (Q)', unit: 'J' },
      { symbol: 'W', label: 'Trabajo realizado por el sistema (W)', unit: 'J' }
    ],
    output: { symbol: 'deltaU', label: 'Cambio de energía interna (ΔU)', unit: 'J' },
    resolve: ({ Q, W }) => {
      const deltaU = Q - W;
      return {
        result: { deltaU: formatNumber(deltaU) },
        steps: [
          `Primera ley de la termodinámica: ΔU = Q - W`,
          `ΔU = ${Q} - ${W}`,
          `ΔU = ${formatNumber(deltaU)} J`
        ]
      };
    }
  },
  {
    id: 'energia-interna-gas-ideal',
    groupId: 'energia_interna-grupo-1',
    title: 'Energía Interna de Gas Ideal (U)',
    isFundamental: true,
    formula: String.raw`U = nC_v T`,
    variables: [
      { symbol: 'n', label: 'Número de moles (n)', unit: 'mol' },
      { symbol: 'C_v', label: 'Capacidad calorífica a V constante (C_v)', unit: 'J/(mol·K)' },
      { symbol: 'T', label: 'Temperatura absoluta (T)', unit: 'K' }
    ],
    output: { symbol: 'U', label: 'Energía interna (U)', unit: 'J' },
    resolve: ({ n, C_v, T }) => {
      const U = n * C_v * T;
      return {
        result: { U: formatNumber(U) },
        steps: [
          `U = n × C_v × T`,
          `U = ${n} × ${C_v} × ${T}`,
          `U = ${formatNumber(U)} J`
        ]
      };
    }
  },
  {
    id: 'cambio-energia-interna-temperatura',
    groupId: 'energia_interna-grupo-1',
    title: 'Cambio de U por Temperatura (ΔU)',
    isFundamental: false,
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
          `ΔU = ${n} × ${C_v} × ${deltaT}`,
          `ΔU = ${formatNumber(deltaU)} J`
        ]
      };
    }
  }
];
