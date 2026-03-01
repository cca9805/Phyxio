import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'eficiencia-cogeneracion',
    groupId: 'cogeneracion-grupo-1',
    title: 'Eficiencia de Cogeneración (η_cogen)',
    isFundamental: true,
    formula: String.raw`\eta_{cogen} = \frac{W + Q_{util}}{Q_{entrada}}`,
    variables: [
      { symbol: 'W', label: 'Trabajo eléctrico producido (W)', unit: 'J' },
      { symbol: 'Q_util', label: 'Calor útil aprovechado (Q_util)', unit: 'J' },
      { symbol: 'Q_entrada', label: 'Energía de entrada (Q_entrada)', unit: 'J' }
    ],
    output: { symbol: 'eta_cogen', label: 'Eficiencia de cogeneración (η_cogen)', unit: 'adimensional' },
    resolve: ({ W, Q_util, Q_entrada }) => {
      const eta_cogen = (W + Q_util) / Q_entrada;
      const eta_percent = eta_cogen * 100;
      return {
        result: { eta_cogen: formatNumber(eta_cogen), eta_percent: formatNumber(eta_percent) },
        steps: [
          `η_cogen = (W + Q_util) / Q_entrada`,
          `η_cogen = (${W} + ${Q_util}) / ${Q_entrada}`,
          `η_cogen = ${formatNumber(W + Q_util)} / ${Q_entrada}`,
          `η_cogen = ${formatNumber(eta_cogen)} = ${formatNumber(eta_percent)}%`
        ]
      };
    }
  },
  {
    id: 'factor-ahorro-energia',
    groupId: 'cogeneracion-grupo-1',
    title: 'Factor de Ahorro de Energía (FAE)',
    isFundamental: false,
    formula: String.raw`\text{FAE} = 1 - \frac{Q_{cogen}}{Q_{separado}}`,
    variables: [
      { symbol: 'Q_cogen', label: 'Combustible en cogeneración (Q_cogen)', unit: 'J' },
      { symbol: 'Q_separado', label: 'Combustible en producción separada (Q_separado)', unit: 'J' }
    ],
    output: { symbol: 'FAE', label: 'Factor de ahorro de energía (FAE)', unit: 'adimensional' },
    resolve: ({ Q_cogen, Q_separado }) => {
      const FAE = 1 - (Q_cogen / Q_separado);
      const FAE_percent = FAE * 100;
      return {
        result: { FAE: formatNumber(FAE), FAE_percent: formatNumber(FAE_percent) },
        steps: [
          `FAE = 1 - (Q_cogen / Q_separado)`,
          `FAE = 1 - (${Q_cogen} / ${Q_separado})`,
          `FAE = 1 - ${formatNumber(Q_cogen / Q_separado)}`,
          `FAE = ${formatNumber(FAE)} = ${formatNumber(FAE_percent)}%`
        ]
      };
    }
  }
];
