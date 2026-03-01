import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'interferencia-constructiva',
    groupId: 'interferencia-constructiva',
    title: 'Condición de Interferencia Constructiva',
    isFundamental: true,
    formula: String.raw`\Delta x = m \lambda`,
    variables: [
      { symbol: 'm', label: 'Orden de interferencia (m)', unit: 'adimensional' },
      { symbol: 'lambda', label: 'Longitud de onda (λ)', unit: 'm' }
    ],
    output: { symbol: 'Delta_x', label: 'Diferencia de camino (Δx)', unit: 'm' },
    resolve: ({ m, lambda }) => {
      const Delta_x = m * lambda;
      return {
        result: { Delta_x: formatNumber(Delta_x) },
        steps: [
          `Δx = m × λ`,
          `Δx = ${m} × ${lambda}`,
          `Δx = ${formatNumber(Delta_x)} m`
        ]
      };
    }
  },
  {
    id: 'interferencia-destructiva',
    groupId: 'interferencia-destructiva',
    title: 'Condición de Interferencia Destructiva',
    isFundamental: true,
    formula: String.raw`\Delta x = \left(m + \frac{1}{2}\right) \lambda`,
    variables: [
      { symbol: 'm', label: 'Orden de interferencia (m)', unit: 'adimensional' },
      { symbol: 'lambda', label: 'Longitud de onda (λ)', unit: 'm' }
    ],
    output: { symbol: 'Delta_x', label: 'Diferencia de camino (Δx)', unit: 'm' },
    resolve: ({ m, lambda }) => {
      const Delta_x = (m + 0.5) * lambda;
      return {
        result: { Delta_x: formatNumber(Delta_x) },
        steps: [
          `Δx = (m + 1/2) × λ`,
          `Δx = (${m} + 0.5) × ${lambda}`,
          `Δx = ${formatNumber(Delta_x)} m`
        ]
      };
    }
  },
  {
    id: 'doble-rendija-young',
    groupId: 'doble-rendija-young',
    title: 'Posición de Máximos en Doble Rendija de Young',
    isFundamental: true,
    formula: String.raw`y = \frac{m \lambda L}{d}`,
    variables: [
      { symbol: 'm', label: 'Orden del máximo (m)', unit: 'adimensional' },
      { symbol: 'lambda', label: 'Longitud de onda (λ)', unit: 'm' },
      { symbol: 'L', label: 'Distancia a la pantalla (L)', unit: 'm' },
      { symbol: 'd', label: 'Separación entre rendijas (d)', unit: 'm' }
    ],
    output: { symbol: 'y', label: 'Posición del máximo (y)', unit: 'm' },
    resolve: ({ m, lambda, L, d }) => {
      const y = (m * lambda * L) / d;
      return {
        result: { y: formatNumber(y) },
        steps: [
          `y = (m × λ × L) / d`,
          `y = (${m} × ${lambda} × ${L}) / ${d}`,
          `y = ${formatNumber(y)} m`
        ]
      };
    }
  },
  {
    id: 'pelicula-delgada',
    groupId: 'pelicula-delgada',
    title: 'Interferencia en Película Delgada',
    isFundamental: true,
    formula: String.raw`2nt = m\lambda`,
    variables: [
      { symbol: 'n', label: 'Índice de refracción (n)', unit: 'adimensional' },
      { symbol: 't', label: 'Espesor de la película (t)', unit: 'm' },
      { symbol: 'm', label: 'Orden de interferencia (m)', unit: 'adimensional' }
    ],
    output: { symbol: 'lambda', label: 'Longitud de onda (λ)', unit: 'm' },
    resolve: ({ n, t, m }) => {
      const lambda = (2 * n * t) / m;
      return {
        result: { lambda: formatNumber(lambda) },
        steps: [
          `2nt = mλ`,
          `λ = 2nt/m`,
          `λ = (2 × ${n} × ${t}) / ${m}`,
          `λ = ${formatNumber(lambda)} m`
        ]
      };
    }
  }
];
