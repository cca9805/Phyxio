import { formatNumber } from '../../../utils/formatNumber';

export const definitions = [
  {
    id: 'tiempo-reverberacion',
    groupId: 'acustica_arquitectonica-grupo-1',
    title: 'Tiempo de Reverberación (Sabine)',
    isFundamental: true,
    formula: String.raw`T_R = 0.161 \frac{V}{A}`,
    variables: [
      { symbol: 'V', label: 'Volumen del recinto (V)', unit: 'm³' },
      { symbol: 'A', label: 'Absorción total (A)', unit: 'm²' }
    ],
    output: { symbol: 'T_R', label: 'Tiempo de reverberación (TR)', unit: 's' },
    resolve: ({ V, A }) => {
      const T_R = 0.161 * V / A;
      return {
        result: { T_R: formatNumber(T_R) },
        steps: [
          `TR = 0.161 × V/A`,
          `TR = 0.161 × ${V}/${A}`,
          `TR = ${formatNumber(T_R)} s`
        ]
      };
    }
  },
  {
    id: 'absorcion-total',
    groupId: 'acustica_arquitectonica-grupo-1',
    title: 'Absorción Total',
    isFundamental: true,
    formula: String.raw`A = \alpha \cdot S`,
    variables: [
      { symbol: 'alpha', label: 'Coeficiente de absorción (α)', unit: 'adimensional' },
      { symbol: 'S', label: 'Área de la superficie (S)', unit: 'm²' }
    ],
    output: { symbol: 'A', label: 'Absorción (A)', unit: 'm²' },
    resolve: ({ alpha, S }) => {
      const A = alpha * S;
      return {
        result: { A: formatNumber(A) },
        steps: [
          `A = α × S`,
          `A = ${alpha} × ${S}`,
          `A = ${formatNumber(A)} m²`
        ]
      };
    }
  },
  {
    id: 'volumen-desde-reverberacion',
    groupId: 'acustica_arquitectonica-grupo-1',
    title: 'Volumen desde Reverberación',
    isFundamental: false,
    formula: String.raw`V = \frac{T_R \cdot A}{0.161}`,
    variables: [
      { symbol: 'T_R', label: 'Tiempo de reverberación (TR)', unit: 's' },
      { symbol: 'A', label: 'Absorción total (A)', unit: 'm²' }
    ],
    output: { symbol: 'V', label: 'Volumen (V)', unit: 'm³' },
    resolve: ({ T_R, A }) => {
      const V = (T_R * A) / 0.161;
      return {
        result: { V: formatNumber(V) },
        steps: [
          `V = (TR × A)/0.161`,
          `V = (${T_R} × ${A})/0.161`,
          `V = ${formatNumber(V)} m³`
        ]
      };
    }
  },
  {
    id: 'absorcion-desde-reverberacion',
    groupId: 'acustica_arquitectonica-grupo-1',
    title: 'Absorción desde Reverberación',
    isFundamental: false,
    formula: String.raw`A = \frac{0.161 \cdot V}{T_R}`,
    variables: [
      { symbol: 'V', label: 'Volumen del recinto (V)', unit: 'm³' },
      { symbol: 'T_R', label: 'Tiempo de reverberación (TR)', unit: 's' }
    ],
    output: { symbol: 'A', label: 'Absorción total (A)', unit: 'm²' },
    resolve: ({ V, T_R }) => {
      const A = (0.161 * V) / T_R;
      return {
        result: { A: formatNumber(A) },
        steps: [
          `A = (0.161 × V)/TR`,
          `A = (0.161 × ${V})/${T_R}`,
          `A = ${formatNumber(A)} m²`
        ]
      };
    }
  },
  {
    id: 'coeficiente-absorcion',
    groupId: 'acustica_arquitectonica-grupo-1',
    title: 'Coeficiente de Absorción',
    isFundamental: false,
    formula: String.raw`\alpha = \frac{A}{S}`,
    variables: [
      { symbol: 'A', label: 'Absorción (A)', unit: 'm²' },
      { symbol: 'S', label: 'Área de la superficie (S)', unit: 'm²' }
    ],
    output: { symbol: 'alpha', label: 'Coeficiente de absorción (α)', unit: 'adimensional' },
    resolve: ({ A, S }) => {
      const alpha = A / S;
      return {
        result: { alpha: formatNumber(alpha) },
        steps: [
          `α = A/S`,
          `α = ${A}/${S}`,
          `α = ${formatNumber(alpha)}`
        ]
      };
    }
  }
];
