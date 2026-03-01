import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'cop-bomba-termica',
    groupId: 'bombas_termicas_domesticas-grupo-1',
    title: 'COP de Bomba Térmica (COP)',
    isFundamental: true,
    formula: String.raw`\text{COP} = \frac{Q_H}{W}`,
    variables: [
      { symbol: 'Q_H', label: 'Calor entregado (Q_H)', unit: 'J' },
      { symbol: 'W', label: 'Trabajo consumido (W)', unit: 'J' }
    ],
    output: { symbol: 'COP', label: 'Coeficiente de rendimiento (COP)', unit: 'adimensional' },
    resolve: ({ Q_H, W }) => {
      const COP = Q_H / W;
      return {
        result: { COP: formatNumber(COP) },
        steps: [
          `COP = Q_H / W`,
          `COP = ${Q_H} / ${W}`,
          `COP = ${formatNumber(COP)}`
        ]
      };
    }
  },
  {
    id: 'ahorro-energia-bomba',
    groupId: 'bombas_termicas_domesticas-grupo-1',
    title: 'Ahorro de Energía vs Calefacción Eléctrica',
    isFundamental: true,
    formula: String.raw`\text{Ahorro} = 1 - \frac{1}{\text{COP}}`,
    variables: [
      { symbol: 'COP', label: 'COP de la bomba térmica (COP)', unit: 'adimensional' }
    ],
    output: { symbol: 'ahorro', label: 'Ahorro de energía', unit: 'adimensional' },
    resolve: ({ COP }) => {
      const ahorro = 1 - (1 / COP);
      const ahorro_percent = ahorro * 100;
      return {
        result: { ahorro: formatNumber(ahorro), ahorro_percent: formatNumber(ahorro_percent) },
        steps: [
          `Ahorro = 1 - 1/COP`,
          `Ahorro = 1 - 1/${COP}`,
          `Ahorro = ${formatNumber(ahorro)} = ${formatNumber(ahorro_percent)}%`
        ]
      };
    }
  }
];
