import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'motores_de_combustion_interna-eficiencia',
    groupId: 'motores_de_combustion_interna-eficiencia',
    title: 'Eficiencia del Motor (η_motor)',
    isFundamental: true,
    formula: String.raw`\eta_{motor} = \frac{W_{util}}{Q_{combustible}}`,
    variables: [
      { symbol: 'W_util', label: 'Trabajo útil (J)', unit: 'J' },
      { symbol: 'Q_combustible', label: 'Energía del combustible (J)', unit: 'J' }
    ],
    output: { symbol: 'eta_motor', label: 'Eficiencia del motor (η_motor)', unit: 'adimensional' },
    resolve: ({ W_util, Q_combustible }) => {
      const eta_motor = W_util / Q_combustible;
      const eta_percent = eta_motor * 100;
      return {
        result: { eta_motor: formatNumber(eta_motor), eta_percent: formatNumber(eta_percent) },
        steps: [
          `η_motor = W_util / Q_combustible`,
          `η_motor = ${W_util} / ${Q_combustible}`,
          `η_motor = ${formatNumber(eta_motor)} = ${formatNumber(eta_percent)}%`
        ]
      };
    }
  },
  {
    id: 'motores_de_combustion_interna-sfc',
    groupId: 'motores_de_combustion_interna-sfc',
    title: 'Consumo Específico de Combustible (SFC)',
    isFundamental: true,
    formula: String.raw`\text{SFC} = \frac{\dot{m}_{combustible}}{P}`,
    variables: [
      { symbol: 'm_dot_combustible', label: 'Flujo másico de combustible (kg/s)', unit: 'kg/s' },
      { symbol: 'P', label: 'Potencia del motor (W)', unit: 'W' }
    ],
    output: { symbol: 'SFC', label: 'Consumo específico (SFC)', unit: 'kg/(W·s)' },
    resolve: ({ m_dot_combustible, P }) => {
      const SFC = m_dot_combustible / P;
      const SFC_g_kWh = SFC * 3.6e6; // Conversión a g/(kW·h)
      return {
        result: { SFC: formatNumber(SFC), SFC_g_kWh: formatNumber(SFC_g_kWh) },
        steps: [
          `SFC = ṁ_combustible / P`,
          `SFC = ${m_dot_combustible} / ${P}`,
          `SFC = ${formatNumber(SFC)} kg/(W·s)`,
          `SFC = ${formatNumber(SFC_g_kWh)} g/(kW·h)`
        ]
      };
    },
    isFundamental: true
  }
];
