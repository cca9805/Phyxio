import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'eficiencia-carnot',
    groupId: 'ciclo_carnot-grupo-1',
    title: 'Eficiencia del Ciclo de Carnot (η_C)',
    isFundamental: true,
    formula: String.raw`\eta_C = 1 - \frac{T_C}{T_H}`,
    variables: [
      { symbol: 'T_C', label: 'Temperatura del foco frío (T_C)', unit: 'K' },
      { symbol: 'T_H', label: 'Temperatura del foco caliente (T_H)', unit: 'K' }
    ],
    output: { symbol: 'eta_C', label: 'Eficiencia de Carnot (η_C)', unit: 'adimensional' },
    resolve: ({ T_C, T_H }) => {
      const eta_C = 1 - (T_C / T_H);
      const eta_percent = eta_C * 100;
      return {
        result: { eta_C: formatNumber(eta_C), eta_percent: formatNumber(eta_percent) },
        steps: [
          `η_C = 1 - (T_C / T_H)`,
          `η_C = 1 - (${T_C} / ${T_H})`,
          `η_C = 1 - ${formatNumber(T_C / T_H)}`,
          `η_C = ${formatNumber(eta_C)} = ${formatNumber(eta_percent)}%`
        ]
      };
    }
  },
  {
    id: 'trabajo-carnot',
    groupId: 'ciclo_carnot-grupo-1',
    title: 'Trabajo Neto del Ciclo de Carnot (W)',
    isFundamental: true,
    formula: String.raw`W = Q_H - Q_C`,
    variables: [
      { symbol: 'Q_H', label: 'Calor absorbido del foco caliente (Q_H)', unit: 'J' },
      { symbol: 'Q_C', label: 'Calor cedido al foco frío (Q_C)', unit: 'J' }
    ],
    output: { symbol: 'W', label: 'Trabajo neto (W)', unit: 'J' },
    resolve: ({ Q_H, Q_C }) => {
      const W = Q_H - Q_C;
      return {
        result: { W: formatNumber(W) },
        steps: [
          `W = Q_H - Q_C`,
          `W = ${Q_H} - ${Q_C}`,
          `W = ${formatNumber(W)} J`
        ]
      };
    }
  },
  {
    id: 'relacion-calores-carnot',
    groupId: 'ciclo_carnot-grupo-1',
    title: 'Relación de Calores en Carnot',
    isFundamental: false,
    formula: String.raw`\frac{Q_C}{Q_H} = \frac{T_C}{T_H}`,
    variables: [
      { symbol: 'Q_H', label: 'Calor absorbido del foco caliente (Q_H)', unit: 'J' },
      { symbol: 'T_C', label: 'Temperatura del foco frío (T_C)', unit: 'K' },
      { symbol: 'T_H', label: 'Temperatura del foco caliente (T_H)', unit: 'K' }
    ],
    output: { symbol: 'Q_C', label: 'Calor cedido al foco frío (Q_C)', unit: 'J' },
    resolve: ({ Q_H, T_C, T_H }) => {
      const Q_C = Q_H * (T_C / T_H);
      return {
        result: { Q_C: formatNumber(Q_C) },
        steps: [
          `Q_C / Q_H = T_C / T_H`,
          `Q_C = Q_H × (T_C / T_H)`,
          `Q_C = ${Q_H} × (${T_C} / ${T_H})`,
          `Q_C = ${formatNumber(Q_C)} J`
        ]
      };
    }
  },
  {
    id: 'trabajo-desde-eficiencia',
    groupId: 'ciclo_carnot-grupo-1',
    title: 'Trabajo desde Eficiencia (W)',
    isFundamental: false,
    formula: String.raw`W = \eta_C \times Q_H`,
    variables: [
      { symbol: 'eta_C', label: 'Eficiencia de Carnot (η_C)', unit: 'adimensional' },
      { symbol: 'Q_H', label: 'Calor absorbido (Q_H)', unit: 'J' }
    ],
    output: { symbol: 'W', label: 'Trabajo neto (W)', unit: 'J' },
    resolve: ({ eta_C, Q_H }) => {
      const W = eta_C * Q_H;
      return {
        result: { W: formatNumber(W) },
        steps: [
          `W = η_C × Q_H`,
          `W = ${eta_C} × ${Q_H}`,
          `W = ${formatNumber(W)} J`
        ]
      };
    }
  }
];
