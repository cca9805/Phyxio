import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'eficiencia-ericsson',
    groupId: 'ciclo_ericsson-grupo-1',
    title: 'Eficiencia del Ciclo Ericsson (η_Ericsson)',
    isFundamental: true,
    formula: String.raw`\eta_{Ericsson} = 1 - \frac{T_C}{T_H}`,
    variables: [
      { symbol: 'T_C', label: 'Temperatura del foco frío (T_C)', unit: 'K' },
      { symbol: 'T_H', label: 'Temperatura del foco caliente (T_H)', unit: 'K' }
    ],
    output: { symbol: 'eta_Ericsson', label: 'Eficiencia del ciclo Ericsson (η_Ericsson)', unit: 'adimensional' },
    resolve: ({ T_C, T_H }) => {
      const eta_Ericsson = 1 - (T_C / T_H);
      const eta_percent = eta_Ericsson * 100;
      return {
        result: { eta_Ericsson: formatNumber(eta_Ericsson), eta_percent: formatNumber(eta_percent) },
        steps: [
          `η_Ericsson = 1 - T_C / T_H`,
          `η_Ericsson = 1 - ${T_C} / ${T_H}`,
          `η_Ericsson = ${formatNumber(eta_Ericsson)} = ${formatNumber(eta_percent)}%`
        ]
      };
    }
  }
];
