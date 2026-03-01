import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'eficiencia-stirling',
    groupId: 'ciclo_stirling-grupo-1',
    title: 'Eficiencia del Ciclo Stirling (η_Stirling)',
    isFundamental: true,
    formula: String.raw`\eta_{Stirling} = 1 - \frac{T_C}{T_H}`,
    variables: [
      { symbol: 'T_C', label: 'Temperatura del foco frío (T_C)', unit: 'K' },
      { symbol: 'T_H', label: 'Temperatura del foco caliente (T_H)', unit: 'K' }
    ],
    output: { symbol: 'eta_Stirling', label: 'Eficiencia del ciclo Stirling (η_Stirling)', unit: 'adimensional' },
    resolve: ({ T_C, T_H }) => {
      const eta_Stirling = 1 - (T_C / T_H);
      const eta_percent = eta_Stirling * 100;
      return {
        result: { eta_Stirling: formatNumber(eta_Stirling), eta_percent: formatNumber(eta_percent) },
        steps: [
          `η_Stirling = 1 - T_C / T_H`,
          `η_Stirling = 1 - ${T_C} / ${T_H}`,
          `η_Stirling = ${formatNumber(eta_Stirling)} = ${formatNumber(eta_percent)}%`
        ]
      };
    }
  }
];
