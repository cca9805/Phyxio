import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'intensidad-luminosa',
    groupId:"intensidad-luminosa",
    title: 'Intensidad Luminosa',
    isFundamental: true,
    formula: String.raw`I = \frac{d\Phi}{d\Omega}`,
    variables: [
      { symbol: 'Phi', label: 'Flujo luminoso (Φ)', unit: 'lm' },
      { symbol: 'Omega', label: 'Ángulo sólido (Ω)', unit: 'sr' }
    ],
    output: { symbol: 'I', label: 'Intensidad luminosa (I)', unit: 'cd' },
    resolve: ({ Phi, Omega }) => {
      const I = Phi / Omega;
      return {
        result: { I: formatNumber(I) },
        steps: [
          `I = Φ/Ω`,
          `I = ${Phi}/${Omega}`,
          `I = ${formatNumber(I)} cd`
        ]
      };
    }
  },
  {
    id: 'angulo-solido',
    groupId: 'angulo-solido',
    title: 'Ángulo Sólido',
    isFundamental: true,
    formula: String.raw`\Omega = \frac{A}{r^2}`,
    variables: [
      { symbol: 'A', label: 'Área de la superficie (A)', unit: 'm²' },
      { symbol: 'r', label: 'Radio (r)', unit: 'm' }
    ],
    output: { symbol: 'Omega', label: 'Ángulo sólido (Ω)', unit: 'sr' },
    resolve: ({ A, r }) => {
      const Omega = A / Math.pow(r, 2);
      return {
        result: { Omega: formatNumber(Omega) },
        steps: [
          `Ω = A/r²`,
          `Ω = ${A}/${r}²`,
          `Ω = ${formatNumber(Omega)} sr`
        ]
      };
    }
  },
  {
    id: 'flujo-desde-intensidad',
    groupId: 'intensidad_luminosa-grupo-3',
    title: 'Flujo Luminoso desde Intensidad',
    isFundamental: true,
    formula: String.raw`\Phi = I \times \Omega`,
    variables: [
      { symbol: 'I', label: 'Intensidad luminosa (I)', unit: 'cd' },
      { symbol: 'Omega', label: 'Ángulo sólido (Ω)', unit: 'sr' }
    ],
    output: { symbol: 'Phi', label: 'Flujo luminoso (Φ)', unit: 'lm' },
    resolve: ({ I, Omega }) => {
      const Phi = I * Omega;
      return {
        result: { Phi: formatNumber(Phi) },
        steps: [
          `Φ = I × Ω`,
          `Φ = ${I} × ${Omega}`,
          `Φ = ${formatNumber(Phi)} lm`
        ]
      };
    }
  }
];
