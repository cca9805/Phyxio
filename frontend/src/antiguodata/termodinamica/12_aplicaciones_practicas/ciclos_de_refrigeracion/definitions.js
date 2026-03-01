import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'cop-refrigerador',
    groupId: 'ciclos_de_refrigeracion-grupo-1',
    title: 'COP de Refrigerador (COP_R)',
    isFundamental: true,
    formula: String.raw`\text{COP}_R = \frac{Q_L}{W}`,
    variables: [
      { symbol: 'Q_L', label: 'Calor extraído del espacio frío (Q_L)', unit: 'J' },
      { symbol: 'W', label: 'Trabajo consumido (W)', unit: 'J' }
    ],
    output: { symbol: 'COP_R', label: 'COP del refrigerador (COP_R)', unit: 'adimensional' },
    resolve: ({ Q_L, W }) => {
      const COP_R = Q_L / W;
      return {
        result: { COP_R: formatNumber(COP_R) },
        steps: [
          `COP_R = Q_L / W`,
          `COP_R = ${Q_L} / ${W}`,
          `COP_R = ${formatNumber(COP_R)}`
        ]
      };
    }
  },
  {
    id: 'consumo-energia-refrigerador',
    groupId: 'ciclos_de_refrigeracion-grupo-1',
    title: 'Consumo de Energía del Refrigerador (W)',
    isFundamental: true,
    formula: String.raw`W = \frac{Q_L}{\text{COP}_R}`,
    variables: [
      { symbol: 'Q_L', label: 'Calor a extraer (Q_L)', unit: 'J' },
      { symbol: 'COP_R', label: 'COP del refrigerador (COP_R)', unit: 'adimensional' }
    ],
    output: { symbol: 'W', label: 'Trabajo requerido (W)', unit: 'J' },
    resolve: ({ Q_L, COP_R }) => {
      const W = Q_L / COP_R;
      return {
        result: { W: formatNumber(W) },
        steps: [
          `W = Q_L / COP_R`,
          `W = ${Q_L} / ${COP_R}`,
          `W = ${formatNumber(W)} J`
        ]
      };
    }
  }
];
