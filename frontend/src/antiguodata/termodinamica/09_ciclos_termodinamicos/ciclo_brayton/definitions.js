import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'eficiencia-brayton',
    groupId: 'ciclo_brayton-grupo-1',
    title: 'Eficiencia del Ciclo Brayton (η_Brayton)',
    isFundamental: true,
    formula: String.raw`\eta_{Brayton} = 1 - \frac{1}{r_p^{(\gamma - 1)/\gamma}}`,
    variables: [
      { symbol: 'r_p', label: 'Relación de presiones (r_p)', unit: 'adimensional' },
      { symbol: 'gamma', label: 'Coeficiente adiabático (γ)', unit: 'adimensional' }
    ],
    output: { symbol: 'eta_Brayton', label: 'Eficiencia del ciclo Brayton (η_Brayton)', unit: 'adimensional' },
    resolve: ({ r_p, gamma }) => {
      const exponent = (gamma - 1) / gamma;
      const eta_Brayton = 1 - (1 / Math.pow(r_p, exponent));
      const eta_percent = eta_Brayton * 100;
      return {
        result: { eta_Brayton: formatNumber(eta_Brayton), eta_percent: formatNumber(eta_percent) },
        steps: [
          `η_Brayton = 1 - 1/r_p^[(γ-1)/γ]`,
          `Exponente: (${gamma}-1)/${gamma} = ${formatNumber(exponent)}`,
          `η_Brayton = 1 - 1/${r_p}^${formatNumber(exponent)}`,
          `η_Brayton = ${formatNumber(eta_Brayton)} = ${formatNumber(eta_percent)}%`
        ]
      };
    }
  }
];
