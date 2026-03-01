import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'eficiencia-global-sistema',
    groupId: 'ciclo_de_rankine_con_turbina_de_gas-grupo-1',
    title: 'Eficiencia Global del Sistema (η_global)',
    isFundamental: true,
    formula: String.raw`\eta_{global} = \frac{\sum W_{salida} + \sum Q_{util}}{\sum Q_{entrada}}`,
    variables: [
      { symbol: 'W_salida_total', label: 'Trabajo total de salida (ΣW_salida)', unit: 'J' },
      { symbol: 'Q_util_total', label: 'Calor útil total (ΣQ_util)', unit: 'J' },
      { symbol: 'Q_entrada_total', label: 'Energía total de entrada (ΣQ_entrada)', unit: 'J' }
    ],
    output: { symbol: 'eta_global', label: 'Eficiencia global (η_global)', unit: 'adimensional' },
    resolve: ({ W_salida_total, Q_util_total, Q_entrada_total }) => {
      const eta_global = (W_salida_total + Q_util_total) / Q_entrada_total;
      const eta_percent = eta_global * 100;
      return {
        result: { eta_global: formatNumber(eta_global), eta_percent: formatNumber(eta_percent) },
        steps: [
          `η_global = (ΣW_salida + ΣQ_util) / ΣQ_entrada`,
          `η_global = (${W_salida_total} + ${Q_util_total}) / ${Q_entrada_total}`,
          `η_global = ${formatNumber(W_salida_total + Q_util_total)} / ${Q_entrada_total}`,
          `η_global = ${formatNumber(eta_global)} = ${formatNumber(eta_percent)}%`
        ]
      };
    }
  },
  {
    id: 'factor-capacidad',
    groupId: 'ciclo_de_rankine_con_turbina_de_gas-grupo-1',
    title: 'Factor de Capacidad (FC)',
    isFundamental: false,
    formula: String.raw`\text{FC} = \frac{\text{Energía real producida}}{\text{Energía máxima posible}}`,
    variables: [
      { symbol: 'E_real', label: 'Energía real producida (E_real)', unit: 'J' },
      { symbol: 'E_maxima', label: 'Energía máxima posible (E_maxima)', unit: 'J' }
    ],
    output: { symbol: 'FC', label: 'Factor de capacidad (FC)', unit: 'adimensional' },
    resolve: ({ E_real, E_maxima }) => {
      const FC = E_real / E_maxima;
      const FC_percent = FC * 100;
      return {
        result: { FC: formatNumber(FC), FC_percent: formatNumber(FC_percent) },
        steps: [
          `FC = E_real / E_maxima`,
          `FC = ${E_real} / ${E_maxima}`,
          `FC = ${formatNumber(FC)} = ${formatNumber(FC_percent)}%`
        ]
      };
    }
  }
];
