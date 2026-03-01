import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'eficiencia-diesel',
    groupId: 'ciclo_diesel-grupo-1',
    title: 'Eficiencia del Ciclo Diesel (η_Diesel)',
    isFundamental: true,
    formula: String.raw`\eta_{Diesel} = 1 - \frac{1}{r^{\gamma - 1}} \cdot \frac{r_c^{\gamma} - 1}{\gamma(r_c - 1)}`,
    variables: [
      { symbol: 'r', label: 'Relación de compresión (r)', unit: 'adimensional' },
      { symbol: 'r_c', label: 'Relación de corte (r_c)', unit: 'adimensional' },
      { symbol: 'gamma', label: 'Coeficiente adiabático (γ)', unit: 'adimensional' }
    ],
    output: { symbol: 'eta_Diesel', label: 'Eficiencia del ciclo Diesel (η_Diesel)', unit: 'adimensional' },
    resolve: ({ r, r_c, gamma }) => {
      const term1 = 1 / Math.pow(r, gamma - 1);
      const term2 = (Math.pow(r_c, gamma) - 1) / (gamma * (r_c - 1));
      const eta_Diesel = 1 - term1 * term2;
      const eta_percent = eta_Diesel * 100;
      return {
        result: { eta_Diesel: formatNumber(eta_Diesel), eta_percent: formatNumber(eta_percent) },
        steps: [
          `η_Diesel = 1 - [1/r^(γ-1)] × [(r_c^γ - 1)/(γ(r_c - 1))]`,
          `Término 1: 1/${r}^${gamma-1} = ${formatNumber(term1)}`,
          `Término 2: (${r_c}^${gamma} - 1)/(${gamma}×(${r_c} - 1)) = ${formatNumber(term2)}`,
          `η_Diesel = 1 - ${formatNumber(term1 * term2)} = ${formatNumber(eta_Diesel)} = ${formatNumber(eta_percent)}%`
        ]
      };
    }
  }
];
