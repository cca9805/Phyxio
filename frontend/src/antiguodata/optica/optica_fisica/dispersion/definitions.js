import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'ecuacion-cauchy',
    groupId: 'ecuacion-cauchy',
    title: 'Ecuación de Cauchy',
    isFundamental: true,
    formula: String.raw`n(\lambda) = A + \frac{B}{\lambda^2}`,
    variables: [
      { symbol: 'A', label: 'Constante A', unit: 'adimensional' },
      { symbol: 'B', label: 'Constante B', unit: 'm²' },
      { symbol: 'lambda', label: 'Longitud de onda (λ)', unit: 'm' }
    ],
    output: { symbol: 'n', label: 'Índice de refracción (n)', unit: 'adimensional' },
    resolve: ({ A, B, lambda }) => {
      const n = A + B / Math.pow(lambda, 2);
      return {
        result: { n: formatNumber(n) },
        steps: [
          `n(λ) = A + B/λ²`,
          `n = ${A} + ${B}/${lambda}²`,
          `n = ${formatNumber(n)}`
        ]
      };
    }
  },
  {
    id: 'angulo-desviacion-prisma',
    groupId: 'angulo-desviacion-prisma',
    title: 'Ángulo de Desviación en un Prisma',
    isFundamental: true,
    formula: String.raw`\delta = (n - 1) \times A`,
    variables: [
      { symbol: 'n', label: 'Índice de refracción (n)', unit: 'adimensional' },
      { symbol: 'A', label: 'Ángulo del prisma (A)', unit: 'grados' }
    ],
    output: { symbol: 'delta', label: 'Ángulo de desviación (δ)', unit: 'grados' },
    resolve: ({ n, A }) => {
      const delta = (n - 1) * A;
      return {
        result: { delta: formatNumber(delta) },
        steps: [
          `δ = (n - 1) × A`,
          `δ = (${n} - 1) × ${A}`,
          `δ = ${formatNumber(delta)}°`
        ]
      };
    }
  },
  {
    id: 'poder-dispersivo',
    groupId: 'poder-dispersivo',
    title: 'Poder Dispersivo',
    isFundamental: true,
    formula: String.raw`\omega = \frac{n_F - n_C}{n_d - 1}`,
    variables: [
      { symbol: 'n_F', label: 'Índice de refracción línea F (n_F)', unit: 'adimensional' },
      { symbol: 'n_C', label: 'Índice de refracción línea C (n_C)', unit: 'adimensional' },
      { symbol: 'n_d', label: 'Índice de refracción línea d (n_d)', unit: 'adimensional' }
    ],
    output: { symbol: 'omega', label: 'Poder dispersivo (ω)', unit: 'adimensional' },
    resolve: ({ n_F, n_C, n_d }) => {
      const omega = (n_F - n_C) / (n_d - 1);
      return {
        result: { omega: formatNumber(omega) },
        steps: [
          `ω = (n_F - n_C) / (n_d - 1)`,
          `ω = (${n_F} - ${n_C}) / (${n_d} - 1)`,
          `ω = ${formatNumber(omega)}`
        ]
      };
    }
  }
];
