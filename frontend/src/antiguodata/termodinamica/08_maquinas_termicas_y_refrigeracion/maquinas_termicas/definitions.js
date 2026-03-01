import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'eficiencia-termica',
    groupId: 'maquinas_termicas-grupo-1',
    title: 'Eficiencia Térmica (η)',
    isFundamental: true,
    formula: String.raw`\eta = \frac{W}{Q_H} = \frac{Q_H - Q_C}{Q_H}`,
    variables: [
      { symbol: 'W', label: 'Trabajo neto realizado (W)', unit: 'J' },
      { symbol: 'Q_H', label: 'Calor absorbido del foco caliente (Q_H)', unit: 'J' }
    ],
    output: { symbol: 'eta', label: 'Eficiencia térmica (η)', unit: 'adimensional' },
    resolve: ({ W, Q_H }) => {
      const eta = W / Q_H;
      const eta_percent = eta * 100;
      return {
        result: { eta: formatNumber(eta), eta_percent: formatNumber(eta_percent) },
        steps: [
          `η = W / Q_H`,
          `η = ${W} / ${Q_H}`,
          `η = ${formatNumber(eta)} = ${formatNumber(eta_percent)}%`
        ]
      };
    }
  },
  {
    id: 'trabajo-maquina-termica',
    groupId: 'maquinas_termicas-grupo-1',
    title: 'Trabajo de Máquina Térmica (W)',
    isFundamental: true,
    formula: String.raw`W = Q_H - Q_C`,
    variables: [
      { symbol: 'Q_H', label: 'Calor absorbido (Q_H)', unit: 'J' },
      { symbol: 'Q_C', label: 'Calor cedido (Q_C)', unit: 'J' }
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
    id: 'calor-cedido',
    groupId: 'maquinas_termicas-grupo-1',
    title: 'Calor Cedido (Q_C)',
    isFundamental: false,
    formula: String.raw`Q_C = Q_H - W`,
    variables: [
      { symbol: 'Q_H', label: 'Calor absorbido (Q_H)', unit: 'J' },
      { symbol: 'W', label: 'Trabajo realizado (W)', unit: 'J' }
    ],
    output: { symbol: 'Q_C', label: 'Calor cedido (Q_C)', unit: 'J' },
    resolve: ({ Q_H, W }) => {
      const Q_C = Q_H - W;
      return {
        result: { Q_C: formatNumber(Q_C) },
        steps: [
          `Q_C = Q_H - W`,
          `Q_C = ${Q_H} - ${W}`,
          `Q_C = ${formatNumber(Q_C)} J`
        ]
      };
    }
  },
  {
    id: 'trabajo-desde-eficiencia',
    groupId: 'maquinas_termicas-grupo-1',
    title: 'Trabajo desde Eficiencia (W)',
    isFundamental: false,
    formula: String.raw`W = \eta \times Q_H`,
    variables: [
      { symbol: 'eta', label: 'Eficiencia térmica (η)', unit: 'adimensional' },
      { symbol: 'Q_H', label: 'Calor absorbido (Q_H)', unit: 'J' }
    ],
    output: { symbol: 'W', label: 'Trabajo neto (W)', unit: 'J' },
    resolve: ({ eta, Q_H }) => {
      const W = eta * Q_H;
      return {
        result: { W: formatNumber(W) },
        steps: [
          `W = η × Q_H`,
          `W = ${eta} × ${Q_H}`,
          `W = ${formatNumber(W)} J`
        ]
      };
    }
  }
];
