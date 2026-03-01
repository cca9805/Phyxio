import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'cop-refrigerador',
    groupId: 'refrigeracion-grupo-1',
    title: 'Coeficiente de Rendimiento de Refrigerador (COP_R)',
    isFundamental: true,
    formula: String.raw`\text{COP}_R = \frac{Q_C}{W}`,
    variables: [
      { symbol: 'Q_C', label: 'Calor extraído del espacio frío (Q_C)', unit: 'J' },
      { symbol: 'W', label: 'Trabajo requerido (W)', unit: 'J' }
    ],
    output: { symbol: 'COP_R', label: 'COP del refrigerador (COP_R)', unit: 'adimensional' },
    resolve: ({ Q_C, W }) => {
      const COP_R = Q_C / W;
      return {
        result: { COP_R: formatNumber(COP_R) },
        steps: [
          `COP_R = Q_C / W`,
          `COP_R = ${Q_C} / ${W}`,
          `COP_R = ${formatNumber(COP_R)}`
        ]
      };
    }
  },
  {
    id: 'cop-bomba-calor',
    groupId: 'refrigeracion-grupo-1',
    title: 'Coeficiente de Rendimiento de Bomba de Calor (COP_HP)',
    isFundamental: true,
    formula: String.raw`\text{COP}_{HP} = \frac{Q_H}{W}`,
    variables: [
      { symbol: 'Q_H', label: 'Calor entregado al espacio caliente (Q_H)', unit: 'J' },
      { symbol: 'W', label: 'Trabajo requerido (W)', unit: 'J' }
    ],
    output: { symbol: 'COP_HP', label: 'COP de bomba de calor (COP_HP)', unit: 'adimensional' },
    resolve: ({ Q_H, W }) => {
      const COP_HP = Q_H / W;
      return {
        result: { COP_HP: formatNumber(COP_HP) },
        steps: [
          `COP_HP = Q_H / W`,
          `COP_HP = ${Q_H} / ${W}`,
          `COP_HP = ${formatNumber(COP_HP)}`
        ]
      };
    }
  },
  {
    id: 'cop-carnot-refrigerador',
    groupId: 'refrigeracion-grupo-1',
    title: 'COP de Carnot para Refrigerador',
    isFundamental: true,
    formula: String.raw`\text{COP}_{R,Carnot} = \frac{T_C}{T_H - T_C}`,
    variables: [
      { symbol: 'T_C', label: 'Temperatura del espacio frío (T_C)', unit: 'K' },
      { symbol: 'T_H', label: 'Temperatura del espacio caliente (T_H)', unit: 'K' }
    ],
    output: { symbol: 'COP_R_Carnot', label: 'COP de Carnot refrigerador', unit: 'adimensional' },
    resolve: ({ T_C, T_H }) => {
      const COP_R_Carnot = T_C / (T_H - T_C);
      return {
        result: { COP_R_Carnot: formatNumber(COP_R_Carnot) },
        steps: [
          `COP_R,Carnot = T_C / (T_H - T_C)`,
          `COP_R,Carnot = ${T_C} / (${T_H} - ${T_C})`,
          `COP_R,Carnot = ${T_C} / ${T_H - T_C}`,
          `COP_R,Carnot = ${formatNumber(COP_R_Carnot)}`
        ]
      };
    }
  },
  {
    id: 'cop-carnot-bomba',
    groupId: 'refrigeracion-grupo-1',
    title: 'COP de Carnot para Bomba de Calor',
    isFundamental: false,
    formula: String.raw`\text{COP}_{HP,Carnot} = \frac{T_H}{T_H - T_C}`,
    variables: [
      { symbol: 'T_H', label: 'Temperatura del espacio caliente (T_H)', unit: 'K' },
      { symbol: 'T_C', label: 'Temperatura del espacio frío (T_C)', unit: 'K' }
    ],
    output: { symbol: 'COP_HP_Carnot', label: 'COP de Carnot bomba de calor', unit: 'adimensional' },
    resolve: ({ T_H, T_C }) => {
      const COP_HP_Carnot = T_H / (T_H - T_C);
      return {
        result: { COP_HP_Carnot: formatNumber(COP_HP_Carnot) },
        steps: [
          `COP_HP,Carnot = T_H / (T_H - T_C)`,
          `COP_HP,Carnot = ${T_H} / (${T_H} - ${T_C})`,
          `COP_HP,Carnot = ${T_H} / ${T_H - T_C}`,
          `COP_HP,Carnot = ${formatNumber(COP_HP_Carnot)}`
        ]
      };
    }
  },
  {
    id: 'relacion-cops',
    groupId: 'refrigeracion-grupo-1',
    title: 'Relación entre COPs',
    isFundamental: false,
    formula: String.raw`\text{COP}_{HP} = \text{COP}_R + 1`,
    variables: [
      { symbol: 'COP_R', label: 'COP del refrigerador (COP_R)', unit: 'adimensional' }
    ],
    output: { symbol: 'COP_HP', label: 'COP de bomba de calor (COP_HP)', unit: 'adimensional' },
    resolve: ({ COP_R }) => {
      const COP_HP = COP_R + 1;
      return {
        result: { COP_HP: formatNumber(COP_HP) },
        steps: [
          `COP_HP = COP_R + 1`,
          `COP_HP = ${COP_R} + 1`,
          `COP_HP = ${formatNumber(COP_HP)}`
        ]
      };
    }
  }
];
