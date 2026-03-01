import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'eficiencia-otto',
    groupId: 'ciclo_otto-grupo-1',
    title: 'Eficiencia del Ciclo Otto (η_Otto)',
    isFundamental: true,
    formula: String.raw`\eta_{Otto} = 1 - \frac{1}{r^{\gamma - 1}}`,
    variables: [
      { symbol: 'r', label: 'Relación de compresión (r)', unit: 'adimensional' },
      { symbol: 'gamma', label: 'Coeficiente adiabático (γ)', unit: 'adimensional' }
    ],
    output: { symbol: 'eta_Otto', label: 'Eficiencia del ciclo Otto (η_Otto)', unit: 'adimensional' },
    resolve: ({ r, gamma }) => {
      const eta_Otto = 1 - (1 / Math.pow(r, gamma - 1));
      const eta_percent = eta_Otto * 100;
      return {
        result: { eta_Otto: formatNumber(eta_Otto), eta_percent: formatNumber(eta_percent) },
        steps: [
          `η_Otto = 1 - 1/r^(γ-1)`,
          `η_Otto = 1 - 1/${r}^(${gamma}-1)`,
          `η_Otto = 1 - 1/${formatNumber(Math.pow(r, gamma - 1))}`,
          `η_Otto = ${formatNumber(eta_Otto)} = ${formatNumber(eta_percent)}%`
        ]
      };
    }
  },
  {
    id: 'relacion-compresion',
    groupId: 'ciclo_otto-grupo-1',
    title: 'Relación de Compresión (r)',
    isFundamental: false,
    formula: String.raw`r = \frac{V_{max}}{V_{min}}`,
    variables: [
      { symbol: 'V_max', label: 'Volumen máximo (V_max)', unit: 'm³' },
      { symbol: 'V_min', label: 'Volumen mínimo (V_min)', unit: 'm³' }
    ],
    output: { symbol: 'r', label: 'Relación de compresión (r)', unit: 'adimensional' },
    resolve: ({ V_max, V_min }) => {
      const r = V_max / V_min;
      return {
        result: { r: formatNumber(r) },
        steps: [
          `r = V_max / V_min`,
          `r = ${V_max} / ${V_min}`,
          `r = ${formatNumber(r)}`
        ]
      };
    }
  }
];
