import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'eficiencia-ciclo-combinado',
    groupId: 'ciclo_de_brayton_rankine-grupo-1',
    title: 'Eficiencia del Ciclo Combinado (η_CC)',
    isFundamental: true,
    formula: String.raw`\eta_{CC} = \eta_{Brayton} + \eta_{Rankine}(1 - \eta_{Brayton})`,
    variables: [
      { symbol: 'eta_Brayton', label: 'Eficiencia del ciclo Brayton (η_Brayton)', unit: 'adimensional' },
      { symbol: 'eta_Rankine', label: 'Eficiencia del ciclo Rankine (η_Rankine)', unit: 'adimensional' }
    ],
    output: { symbol: 'eta_CC', label: 'Eficiencia del ciclo combinado (η_CC)', unit: 'adimensional' },
    resolve: ({ eta_Brayton, eta_Rankine }) => {
      const eta_CC = eta_Brayton + eta_Rankine * (1 - eta_Brayton);
      const eta_percent = eta_CC * 100;
      return {
        result: { eta_CC: formatNumber(eta_CC), eta_percent: formatNumber(eta_percent) },
        steps: [
          `η_CC = η_Brayton + η_Rankine × (1 - η_Brayton)`,
          `η_CC = ${eta_Brayton} + ${eta_Rankine} × (1 - ${eta_Brayton})`,
          `η_CC = ${eta_Brayton} + ${eta_Rankine} × ${formatNumber(1 - eta_Brayton)}`,
          `η_CC = ${formatNumber(eta_CC)} = ${formatNumber(eta_percent)}%`
        ]
      };
    }
  },
  {
    id: 'trabajo-total-combinado',
    groupId: 'ciclo_de_brayton_rankine-grupo-1',
    title: 'Trabajo Total del Ciclo Combinado (W_total)',
    isFundamental: true,
    formula: String.raw`W_{total} = W_{Brayton} + W_{Rankine}`,
    variables: [
      { symbol: 'W_Brayton', label: 'Trabajo del ciclo Brayton (W_Brayton)', unit: 'J' },
      { symbol: 'W_Rankine', label: 'Trabajo del ciclo Rankine (W_Rankine)', unit: 'J' }
    ],
    output: { symbol: 'W_total', label: 'Trabajo total (W_total)', unit: 'J' },
    resolve: ({ W_Brayton, W_Rankine }) => {
      const W_total = W_Brayton + W_Rankine;
      return {
        result: { W_total: formatNumber(W_total) },
        steps: [
          `W_total = W_Brayton + W_Rankine`,
          `W_total = ${W_Brayton} + ${W_Rankine}`,
          `W_total = ${formatNumber(W_total)} J`
        ]
      };
    }
  },
  {
    id: 'factor-utilizacion-combustible',
    groupId: 'ciclo_de_brayton_rankine-grupo-1',
    title: 'Factor de Utilización del Combustible (FUC)',
    isFundamental: false,
    formula: String.raw`\text{FUC} = \frac{W_{total}}{Q_{combustible}}`,
    variables: [
      { symbol: 'W_total', label: 'Trabajo total producido (W_total)', unit: 'J' },
      { symbol: 'Q_combustible', label: 'Energía del combustible (Q_combustible)', unit: 'J' }
    ],
    output: { symbol: 'FUC', label: 'Factor de utilización del combustible (FUC)', unit: 'adimensional' },
    resolve: ({ W_total, Q_combustible }) => {
      const FUC = W_total / Q_combustible;
      const FUC_percent = FUC * 100;
      return {
        result: { FUC: formatNumber(FUC), FUC_percent: formatNumber(FUC_percent) },
        steps: [
          `FUC = W_total / Q_combustible`,
          `FUC = ${W_total} / ${Q_combustible}`,
          `FUC = ${formatNumber(FUC)} = ${formatNumber(FUC_percent)}%`
        ]
      };
    }
  }
];
