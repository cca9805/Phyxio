import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'calor-intercambiador',
    groupId: 'calor_transferido',
    title: 'Calor Transferido en Intercambiador (Q)',
    isFundamental: true,
    formula: String.raw`Q = UA\Delta T_{ml}`,
    variables: [
      { symbol: 'U', label: 'Coeficiente global de transferencia (U)', unit: 'W/(m²·K)' },
      { symbol: 'A', label: 'Área de transferencia (A)', unit: 'm²' },
      { symbol: 'Delta_T_ml', label: 'Diferencia temperatura media logarítmica (ΔT_ml)', unit: 'K' }
    ],
    output: { symbol: 'Q', label: 'Calor transferido (Q)', unit: 'W' },
    complementary: [
      {
        description: 'Despeje de U',
        expression: String.raw`U = \frac{Q}{A\Delta T_{ml}}`,
        calculatorId: 'calor_transferido',
        definitionId: 'despeje-u'
      },
      {
        description: 'Despeje de A',
        expression: String.raw`A = \frac{Q}{U\Delta T_{ml}}`,
        calculatorId: 'calor_transferido',
        definitionId: 'despeje-a'
      },
      {
        description: 'Despeje de ΔT_ml',
        expression: String.raw`\Delta T_{ml} = \frac{Q}{UA}`,
        calculatorId: 'calor_transferido',
        definitionId: 'despeje-delta-tml'
      }
    ],
    resolve: ({ U, A, Delta_T_ml }) => {
      const Q = U * A * Delta_T_ml;
      return {
        result: { Q: formatNumber(Q) },
        steps: [
          `Q = U × A × ΔT_ml`,
          `Q = ${U} × ${A} × ${Delta_T_ml}`,
          `Q = ${formatNumber(Q)} W`
        ]
      };
    }
  },
  {
    id: 'despeje-u',
    groupId: 'calor_transferido',
    title: 'Despeje de U',
    isFundamental: false,
    formula: String.raw`U = \frac{Q}{A\Delta T_{ml}}`,
    variables: [
      { symbol: 'Q', label: 'Calor transferido (Q)', unit: 'W' },
      { symbol: 'A', label: 'Área de transferencia (A)', unit: 'm²' },
      { symbol: 'Delta_T_ml', label: 'Diferencia temperatura media logarítmica (ΔT_ml)', unit: 'K' }
    ],
    output: { symbol: 'U', label: 'Coeficiente global de transferencia (U)', unit: 'W/(m²·K)' },
    resolve: ({ Q, A, Delta_T_ml }) => {
      const denom = A * Delta_T_ml;
      if (!denom) return { error: 'El divisor (A × ΔT_ml) no puede ser cero.' };
      const U = Q / denom;
      return {
        result: { U: formatNumber(U) },
        steps: [
          `U = Q / (A × ΔT_ml)`,
          `U = ${Q} / (${A} × ${Delta_T_ml})`,
          `U = ${formatNumber(U)} W/(m²·K)`
        ]
      };
    }
  },
  {
    id: 'despeje-a',
    groupId: 'calor_transferido',
    title: 'Despeje de A',
    isFundamental: false,
    formula: String.raw`A = \frac{Q}{U\Delta T_{ml}}`,
    variables: [
      { symbol: 'Q', label: 'Calor transferido (Q)', unit: 'W' },
      { symbol: 'U', label: 'Coeficiente global de transferencia (U)', unit: 'W/(m²·K)' },
      { symbol: 'Delta_T_ml', label: 'Diferencia temperatura media logarítmica (ΔT_ml)', unit: 'K' }
    ],
    output: { symbol: 'A', label: 'Área de transferencia (A)', unit: 'm²' },
    resolve: ({ Q, U, Delta_T_ml }) => {
      const denom = U * Delta_T_ml;
      if (!denom) return { error: 'El divisor (U × ΔT_ml) no puede ser cero.' };
      const A = Q / denom;
      return {
        result: { A: formatNumber(A) },
        steps: [
          `A = Q / (U × ΔT_ml)`,
          `A = ${Q} / (${U} × ${Delta_T_ml})`,
          `A = ${formatNumber(A)} m²`
        ]
      };
    }
  },
  {
    id: 'despeje-delta-tml',
    groupId: 'calor_transferido',
    title: 'Despeje de ΔT_ml',
    isFundamental: false,
    formula: String.raw`\Delta T_{ml} = \frac{Q}{UA}`,
    variables: [
      { symbol: 'Q', label: 'Calor transferido (Q)', unit: 'W' },
      { symbol: 'U', label: 'Coeficiente global de transferencia (U)', unit: 'W/(m²·K)' },
      { symbol: 'A', label: 'Área de transferencia (A)', unit: 'm²' }
    ],
    output: { symbol: 'Delta_T_ml', label: 'Diferencia temperatura media logarítmica (ΔT_ml)', unit: 'K' },
    resolve: ({ Q, U, A }) => {
      const denom = U * A;
      if (!denom) return { error: 'El divisor (U × A) no puede ser cero.' };
      const Delta_T_ml = Q / denom;
      return {
        result: { Delta_T_ml: formatNumber(Delta_T_ml) },
        steps: [
          `ΔT_ml = Q / (U × A)`,
          `ΔT_ml = ${Q} / (${U} × ${A})`,
          `ΔT_ml = ${formatNumber(Delta_T_ml)} K`
        ]
      };
    }
  },
  {
    id: 'lmtd',
    groupId: 'diferencia_temperatura',
    title: 'Diferencia de Temperatura Media Logarítmica (LMTD)',
    isFundamental: true,
    formula: String.raw`\Delta T_{ml} = \frac{\Delta T_1 - \Delta T_2}{\ln(\Delta T_1 / \Delta T_2)}`,
    variables: [
      { symbol: 'Delta_T1', label: 'Diferencia de temperatura en entrada (ΔT₁)', unit: 'K' },
      { symbol: 'Delta_T2', label: 'Diferencia de temperatura en salida (ΔT₂)', unit: 'K' }
    ],
    output: { symbol: 'Delta_T_ml', label: 'LMTD (ΔT_ml)', unit: 'K' },
    complementary: [
      {
        description: 'Despeje de ΔT₁',
        expression: String.raw`\Delta T_1 = \Delta T_2 + \Delta T_{ml} \ln\left(\frac{\Delta T_1}{\Delta T_2}\right)`
      },
      {
        description: 'Despeje de ΔT₂',
        expression: String.raw`\Delta T_2 = \Delta T_1 - \Delta T_{ml} \ln\left(\frac{\Delta T_1}{\Delta T_2}\right)`
      }
    ],
    resolve: ({ Delta_T1, Delta_T2 }) => {
      const Delta_T_ml = (Delta_T1 - Delta_T2) / Math.log(Delta_T1 / Delta_T2);
      return {
        result: { Delta_T_ml: formatNumber(Delta_T_ml) },
        steps: [
          `ΔT_ml = (ΔT₁ - ΔT₂) / ln(ΔT₁ / ΔT₂)`,
          `ΔT_ml = (${Delta_T1} - ${Delta_T2}) / ln(${Delta_T1} / ${Delta_T2})`,
          `ΔT_ml = ${formatNumber(Delta_T1 - Delta_T2)} / ${formatNumber(Math.log(Delta_T1 / Delta_T2))}`,
          `ΔT_ml = ${formatNumber(Delta_T_ml)} K`
        ]
      };
    }
  },
  {
    id: 'efectividad-intercambiador',
    groupId: 'efectividad_intercambiador',
    title: 'Efectividad del Intercambiador (ε)',
    isComplementary: true,
    formula: String.raw`\varepsilon = \frac{Q_{real}}{Q_{max}}`,
    variables: [
      { symbol: 'Q_real', label: 'Calor real transferido (Q_real)', unit: 'W' },
      { symbol: 'Q_max', label: 'Calor máximo posible (Q_max)', unit: 'W' }
    ],
    output: { symbol: 'epsilon', label: 'Efectividad (ε)', unit: 'adimensional' },
    complementary: [
      {
        description: 'Despeje de Q_real',
        expression: String.raw`Q_{real} = \varepsilon Q_{max}`,
        calculatorId: 'efectividad_intercambiador',
        definitionId: 'despeje-q-real'
      },
      {
        description: 'Despeje de Q_max',
        expression: String.raw`Q_{max} = \frac{Q_{real}}{\varepsilon}`,
        calculatorId: 'efectividad_intercambiador',
        definitionId: 'despeje-q-max'
      }
    ],
    resolve: ({ Q_real, Q_max }) => {
      const epsilon = Q_real / Q_max;
      const epsilon_percent = epsilon * 100;
      return {
        result: { epsilon: formatNumber(epsilon), epsilon_percent: formatNumber(epsilon_percent) },
        steps: [
          `ε = Q_real / Q_max`,
          `ε = ${Q_real} / ${Q_max}`,
          `ε = ${formatNumber(epsilon)} = ${formatNumber(epsilon_percent)}%`
        ]
      };
    }
  }
  ,
  {
    id: 'despeje-q-real',
    groupId: 'efectividad_intercambiador',
    title: 'Despeje de Q_real',
    isFundamental: false,
    formula: String.raw`Q_{real} = \varepsilon Q_{max}`,
    variables: [
      { symbol: 'epsilon', label: 'Efectividad (ε)', unit: 'adimensional' },
      { symbol: 'Q_max', label: 'Calor máximo posible (Q_max)', unit: 'W' }
    ],
    output: { symbol: 'Q_real', label: 'Calor real transferido (Q_real)', unit: 'W' },
    resolve: ({ epsilon, Q_max }) => {
      const Q_real = epsilon * Q_max;
      return {
        result: { Q_real: formatNumber(Q_real) },
        steps: [
          `Q_real = ε × Q_max`,
          `Q_real = ${epsilon} × ${Q_max}`,
          `Q_real = ${formatNumber(Q_real)} W`
        ]
      };
    }
  },
  {
    id: 'despeje-q-max',
    groupId: 'efectividad_intercambiador',
    title: 'Despeje de Q_max',
    isFundamental: false,
    formula: String.raw`Q_{max} = \frac{Q_{real}}{\varepsilon}`,
    variables: [
      { symbol: 'Q_real', label: 'Calor real transferido (Q_real)', unit: 'W' },
      { symbol: 'epsilon', label: 'Efectividad (ε)', unit: 'adimensional' }
    ],
    output: { symbol: 'Q_max', label: 'Calor máximo posible (Q_max)', unit: 'W' },
    resolve: ({ Q_real, epsilon }) => {
      if (!epsilon) return { error: 'El valor de ε no puede ser cero.' };
      const Q_max = Q_real / epsilon;
      return {
        result: { Q_max: formatNumber(Q_max) },
        steps: [
          `Q_max = Q_real / ε`,
          `Q_max = ${Q_real} / ${epsilon}`,
          `Q_max = ${formatNumber(Q_max)} W`
        ]
      };
    }
  },
];
