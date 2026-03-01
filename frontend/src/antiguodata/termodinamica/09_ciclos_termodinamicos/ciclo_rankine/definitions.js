import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'eficiencia-rankine',
    groupId: 'ciclo_rankine-grupo-1',
    title: 'Eficiencia del Ciclo Rankine (η_Rankine)',
    isFundamental: true,
    formula: String.raw`\eta_{Rankine} = \frac{W_{turbina} - W_{bomba}}{Q_{entrada}}`,
    variables: [
      { symbol: 'W_turbina', label: 'Trabajo de la turbina (W_turbina)', unit: 'J' },
      { symbol: 'W_bomba', label: 'Trabajo de la bomba (W_bomba)', unit: 'J' },
      { symbol: 'Q_entrada', label: 'Calor de entrada (Q_entrada)', unit: 'J' }
    ],
    output: { symbol: 'eta_Rankine', label: 'Eficiencia del ciclo Rankine (η_Rankine)', unit: 'adimensional' },
    resolve: ({ W_turbina, W_bomba, Q_entrada }) => {
      const W_neto = W_turbina - W_bomba;
      const eta_Rankine = W_neto / Q_entrada;
      const eta_percent = eta_Rankine * 100;
      return {
        result: { eta_Rankine: formatNumber(eta_Rankine), eta_percent: formatNumber(eta_percent) },
        steps: [
          `Trabajo neto: W_neto = W_turbina - W_bomba`,
          `W_neto = ${W_turbina} - ${W_bomba} = ${formatNumber(W_neto)} J`,
          `η_Rankine = W_neto / Q_entrada`,
          `η_Rankine = ${formatNumber(W_neto)} / ${Q_entrada} = ${formatNumber(eta_Rankine)} = ${formatNumber(eta_percent)}%`
        ]
      };
    }
  }
];
