import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'trabajo-neto-ciclo',
    groupId: 'ciclos_de_potencia-grupo-1',
    title: 'Trabajo Neto del Ciclo (W_neto)',
    isFundamental: true,
    formula: String.raw`W_{neto} = W_{turbina} - W_{compresor}`,
    variables: [
      { symbol: 'W_turbina', label: 'Trabajo de turbina (W_turbina)', unit: 'J' },
      { symbol: 'W_compresor', label: 'Trabajo de compresor (W_compresor)', unit: 'J' }
    ],
    output: { symbol: 'W_neto', label: 'Trabajo neto (W_neto)', unit: 'J' },
    resolve: ({ W_turbina, W_compresor }) => {
      const W_neto = W_turbina - W_compresor;
      return {
        result: { W_neto: formatNumber(W_neto) },
        steps: [
          `W_neto = W_turbina - W_compresor`,
          `W_neto = ${W_turbina} - ${W_compresor}`,
          `W_neto = ${formatNumber(W_neto)} J`
        ]
      };
    }
  },
  {
    id: 'eficiencia-termica-ciclo',
    groupId: 'ciclos_de_potencia-grupo-1',
    title: 'Eficiencia Térmica del Ciclo (η_th)',
    isFundamental: true,
    formula: String.raw`\eta_{th} = \frac{W_{neto}}{Q_{entrada}}`,
    variables: [
      { symbol: 'W_neto', label: 'Trabajo neto (W_neto)', unit: 'J' },
      { symbol: 'Q_entrada', label: 'Calor de entrada (Q_entrada)', unit: 'J' }
    ],
    output: { symbol: 'eta_th', label: 'Eficiencia térmica (η_th)', unit: 'adimensional' },
    resolve: ({ W_neto, Q_entrada }) => {
      const eta_th = W_neto / Q_entrada;
      const eta_percent = eta_th * 100;
      return {
        result: { eta_th: formatNumber(eta_th), eta_percent: formatNumber(eta_percent) },
        steps: [
          `η_th = W_neto / Q_entrada`,
          `η_th = ${W_neto} / ${Q_entrada}`,
          `η_th = ${formatNumber(eta_th)} = ${formatNumber(eta_percent)}%`
        ]
      };
    }
  }
];
