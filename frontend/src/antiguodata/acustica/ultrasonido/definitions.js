import { formatNumber } from '../../../utils/formatNumber';

export const definitions = [
  {
    id: 'ultrasonido-impedancia',
    groupId: 'ultrasonido-impedancia',
    title: 'Impedancia acústica (Z)',
    isFundamental: true,
    formula: 'Z = ρ · c',
    variables: [
      { symbol: 'ρ', label: 'Densidad (ρ)', unit: 'kg/m³' },
      { symbol: 'c', label: 'Velocidad del sonido (c)', unit: 'm/s' }
    ],
    output: { symbol: 'Z', label: 'Impedancia acústica (Z)', unit: 'Rayl' },
    resolve: ({ ρ, c }) => {
      const numRho = parseFloat(ρ);
      const numC = parseFloat(c);
      if (isNaN(numRho) || isNaN(numC)) return { error: 'Completa todos los campos con valores numéricos.' };
      const Z = numRho * numC;
      return {
        result: { Z: formatNumber(Z) },
        steps: [
          `Z = ρ · c`,
          `Z = ${numRho} kg/m³ · ${numC} m/s = ${formatNumber(Z)} Rayl`
        ]
      };
    }
  }
];
