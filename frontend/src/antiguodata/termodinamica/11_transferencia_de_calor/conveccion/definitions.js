import { formatNumber } from '../../../../utils/formatNumber';
// ...existing code...

export const definitions = [
  {
    id: 'ley-newton-enfriamiento',
    groupId: 'conveccion-grupo-1',
    title: 'Ley de Newton del Enfriamiento (Q)',
    isFundamental: true,
    formula: String.raw`Q = hA(T_s - T_\infty)`,
    variables: [
      { symbol: 'h', label: 'Coeficiente de convección (h)', unit: 'W/(m²·K)' },
      { symbol: 'A', label: 'Área de transferencia (A)', unit: 'm²' },
      { symbol: 'T_s', label: 'Temperatura de superficie (T_s)', unit: 'K' },
      { symbol: 'T_inf', label: 'Temperatura del fluido (T_∞)', unit: 'K' }
    ],
    output: { symbol: 'Q', label: 'Flujo de calor (Q)', unit: 'W' },
    complementary: [
      {
        description: 'Coeficiente de convección (despeje de h)',
        expression: String.raw`h = \frac{Q}{A(T_s - T_\infty)}`,
        calculatorId: 'conveccion-grupo-2',
        definitionId: 'coeficiente-h'
      },
      {
        description: 'Flujo de calor por área',
        expression: String.raw`q = h(T_s - T_\infty)` ,
        calculatorId: 'conveccion-grupo-3',
        definitionId: 'flujo-area'
      }
    ],
    resolve: ({ h, A, T_s, T_inf }) => {
      const Q = h * A * (T_s - T_inf);
      return {
        result: { Q: formatNumber(Q) },
        steps: [
          `Q = h × A × (T_s - T_∞)`,
          `Q = ${h} × ${A} × (${T_s} - ${T_inf})`,
          `Q = ${h} × ${A} × ${formatNumber(T_s - T_inf)}`,
          `Q = ${formatNumber(Q)} W`
        ]
      };
    }
  },
  {
    id: 'coeficiente-h',
    groupId: 'conveccion-grupo-1',
    title: 'Cálculo del coeficiente de convección (h)',
    isFundamental: false,
    formula: String.raw`h = \frac{Q}{A(T_s - T_\infty)}`,
    variables: [
      { symbol: 'Q', label: 'Flujo de calor (Q)', unit: 'W' },
      { symbol: 'A', label: 'Área de transferencia (A)', unit: 'm²' },
      { symbol: 'T_s', label: 'Temperatura de superficie (T_s)', unit: 'K' },
      { symbol: 'T_inf', label: 'Temperatura del fluido (T_∞)', unit: 'K' }
    ],
    output: { symbol: 'h', label: 'Coeficiente de convección (h)', unit: 'W/(m²·K)' },
    resolve: ({ Q, A, T_s, T_inf }) => {
      const h = Q / (A * (T_s - T_inf));
      return {
        result: { h: formatNumber(h) },
        steps: [
          `h = Q / [A × (T_s - T_∞)]`,
          `h = ${Q} / [${A} × (${T_s} - ${T_inf})]`,
          `h = ${Q} / [${A} × ${formatNumber(T_s - T_inf)}]`,
          `h = ${formatNumber(h)} W/(m²·K)`
        ]
      };
    }
  },
  {
    id: 'flujo-area',
    groupId: 'conveccion-grupo-1',
    title: 'Flujo de calor por área (q)',
    isFundamental: false,
    formula: String.raw`q = h(T_s - T_\infty)` ,
    variables: [
      { symbol: 'h', label: 'Coeficiente de convección (h)', unit: 'W/(m²·K)' },
      { symbol: 'T_s', label: 'Temperatura de superficie (T_s)', unit: 'K' },
      { symbol: 'T_inf', label: 'Temperatura del fluido (T_∞)', unit: 'K' }
    ],
    output: { symbol: 'q', label: 'Flujo de calor por área (q)', unit: 'W/m²' },
    resolve: ({ h, T_s, T_inf }) => {
      const q = h * (T_s - T_inf);
      return {
        result: { q: formatNumber(q) },
        steps: [
          `q = h × (T_s - T_∞)` ,
          `q = ${h} × (${T_s} - ${T_inf})` ,
          `q = ${h} × ${formatNumber(T_s - T_inf)}` ,
          `q = ${formatNumber(q)} W/m²`
        ]
      };
    }
  },
  {
    id: 'resistencia-conveccion',
    groupId: 'conveccion-grupo-2',
    title: 'Resistencia Térmica por Convección (R_conv)',
    isFundamental: true,
    formula: String.raw`R_{conv} = \frac{1}{hA}`,
    variables: [
      { symbol: 'h', label: 'Coeficiente de convección (h)', unit: 'W/(m²·K)' },
      { symbol: 'A', label: 'Área (A)', unit: 'm²' }
    ],
    output: { symbol: 'R_conv', label: 'Resistencia térmica (R_conv)', unit: 'K/W' },
    resolve: ({ h, A }) => {
      const R_conv = 1 / (h * A);
      return {
        result: { R_conv: formatNumber(R_conv) },
        steps: [
          `R_conv = 1 / (h × A)`,
          `R_conv = 1 / (${h} × ${A})`,
          `R_conv = ${formatNumber(R_conv)} K/W`
        ]
      };
    }
  }
];
