import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'valor-r-aislamiento',
    groupId: 'aislamiento_termico-grupo-1',
    title: 'Valor R de Aislamiento (R)',
    isFundamental: true,
    formula: String.raw`R = \frac{L}{k}`,
    variables: [
      { symbol: 'L', label: 'Espesor del aislante (L)', unit: 'm' },
      { symbol: 'k', label: 'Conductividad térmica (k)', unit: 'W/(m·K)' }
    ],
    output: { symbol: 'R', label: 'Valor R (R)', unit: 'm²·K/W' },
    resolve: ({ L, k }) => {
      const R = L / k;
      return {
        result: { R: formatNumber(R) },
        steps: [
          `R = L / k`,
          `R = ${L} / ${k}`,
          `R = ${formatNumber(R)} m²·K/W`
        ]
      };
    }
  },
  {
    id: 'perdida-calor-aislamiento',
    groupId: 'aislamiento_termico-grupo-1',
    title: 'Pérdida de Calor con Aislamiento (Q)',
    isFundamental: true,
    formula: String.raw`Q = \frac{A\Delta T}{R}`,
    variables: [
      { symbol: 'A', label: 'Área (A)', unit: 'm²' },
      { symbol: 'Delta_T', label: 'Diferencia de temperatura (ΔT)', unit: 'K' },
      { symbol: 'R', label: 'Valor R del aislamiento (R)', unit: 'm²·K/W' }
    ],
    output: { symbol: 'Q', label: 'Pérdida de calor (Q)', unit: 'W' },
    resolve: ({ A, Delta_T, R }) => {
      const Q = (A * Delta_T) / R;
      return {
        result: { Q: formatNumber(Q) },
        steps: [
          `Q = A × ΔT / R`,
          `Q = ${A} × ${Delta_T} / ${R}`,
          `Q = ${formatNumber(Q)} W`
        ]
      };
    }
  }
];
