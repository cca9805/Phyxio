import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'resistencia-serie',
    groupId: 'resistencia-serie',
    title: 'Resistencia Térmica en Serie (R_total)',
    isFundamental: true,
    formula: String.raw`R_{total} = R_1 + R_2 + R_3 + ...`,
    variables: [
      { symbol: 'R1', label: 'Resistencia 1 (R₁)', unit: 'K/W' },
      { symbol: 'R2', label: 'Resistencia 2 (R₂)', unit: 'K/W' },
      { symbol: 'R3', label: 'Resistencia 3 (R₃)', unit: 'K/W' }
    ],
    output: { symbol: 'R_total', label: 'Resistencia total (R_total)', unit: 'K/W' },
    complementary: [
      {
        expression: String.raw`R_1 = R_{total} - R_2 - R_3 - ...`,
        description: 'Despeje para una resistencia individual en serie',
        definitionId: 'resistencia-serie-despeje-R1'
      },
      {
        expression: String.raw`R_2 = R_{total} - R_1 - R_3 - ...`,
        description: 'Despeje para otra resistencia en serie',
        definitionId: 'resistencia-serie-despeje-R2'
      }
    ],
    resolve: ({ R1, R2, R3 }) => {
      const R_total = R1 + R2 + R3;
      return {
        result: { R_total: formatNumber(R_total) },
        steps: [
          `R_total = R₁ + R₂ + R₃`,
          `R_total = ${R1} + ${R2} + ${R3}`,
          `R_total = ${formatNumber(R_total)} K/W`
        ]
      };
    }
  },
  {
    id: 'resistencia-serie-despeje-R1',
    groupId: 'resistencia-serie-despeje-R1',
    title: 'Despeje de R₁ en serie',
    formula: String.raw`R_1 = R_{total} - R_2 - R_3 - ...`,
    variables: [
      { symbol: 'R_total', label: 'Resistencia total (R_total)', unit: 'K/W' },
      { symbol: 'R2', label: 'Resistencia 2 (R₂)', unit: 'K/W' },
      { symbol: 'R3', label: 'Resistencia 3 (R₃)', unit: 'K/W' }
    ],
    output: { symbol: 'R1', label: 'Resistencia 1 (R₁)', unit: 'K/W' },
    resolve: ({ R_total, R2, R3 }) => {
      const R1 = R_total - R2 - R3;
      return {
        result: { R1: formatNumber(R1) },
        steps: [
          `R₁ = R_total - R₂ - R₃`,
          `R₁ = ${R_total} - ${R2} - ${R3}`,
          `R₁ = ${formatNumber(R1)} K/W`
        ]
      };
    }
  },
  {
    id: 'resistencia-serie-despeje-R2',
    groupId: 'resistencia-serie-despeje-R2',
    title: 'Despeje de R₂ en serie',
    formula: String.raw`R_2 = R_{total} - R_1 - R_3 - ...`,
    variables: [
      { symbol: 'R_total', label: 'Resistencia total (R_total)', unit: 'K/W' },
      { symbol: 'R1', label: 'Resistencia 1 (R₁)', unit: 'K/W' },
      { symbol: 'R3', label: 'Resistencia 3 (R₃)', unit: 'K/W' }
    ],
    output: { symbol: 'R2', label: 'Resistencia 2 (R₂)', unit: 'K/W' },
    resolve: ({ R_total, R1, R3 }) => {
      const R2 = R_total - R1 - R3;
      return {
        result: { R2: formatNumber(R2) },
        steps: [
          `R₂ = R_total - R₁ - R₃`,
          `R₂ = ${R_total} - ${R1} - ${R3}`,
          `R₂ = ${formatNumber(R2)} K/W`
        ]
      };
    }
  },
  {
    id: 'resistencia-paralelo',
    groupId: 'resistencia-paralelo',
    title: 'Resistencia Térmica en Paralelo (R_eq)',
    isFundamental: true,
    formula: String.raw`\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + ...`,
    variables: [
      { symbol: 'R1', label: 'Resistencia 1 (R₁)', unit: 'K/W' },
      { symbol: 'R2', label: 'Resistencia 2 (R₂)', unit: 'K/W' },
      { symbol: 'R3', label: 'Resistencia 3 (R₃)', unit: 'K/W' }
    ],
    output: { symbol: 'R_eq', label: 'Resistencia equivalente (R_eq)', unit: 'K/W' },
    complementary: [
      {
        expression: String.raw`R_1 = \left( \frac{1}{R_{eq}} - \frac{1}{R_2} - \frac{1}{R_3} - ... \right)^{-1}`,
        description: 'Despeje para una resistencia individual en paralelo',
        definitionId: 'resistencia-paralelo-despeje-R1'
      },
      {
        expression: String.raw`R_2 = \left( \frac{1}{R_{eq}} - \frac{1}{R_1} - \frac{1}{R_3} - ... \right)^{-1}`,
        description: 'Despeje para otra resistencia en paralelo',
        definitionId: 'resistencia-paralelo-despeje-R2'
      }
    ],
    resolve: ({ R1, R2, R3 }) => {
      const R_eq = 1 / ((1/R1) + (1/R2) + (1/R3));
      return {
        result: { R_eq: formatNumber(R_eq) },
        steps: [
          `1/R_eq = 1/R₁ + 1/R₂ + 1/R₃`,
          `1/R_eq = 1/${R1} + 1/${R2} + 1/${R3}`,
          `1/R_eq = ${formatNumber(1/R1 + 1/R2 + 1/R3)}`,
          `R_eq = ${formatNumber(R_eq)} K/W`
        ]
      };
    }
  },
  {
    id: 'resistencia-paralelo-despeje-R1',
    groupId: 'resistencia-paralelo-despeje-R1',
    title: 'Despeje de R₁ en paralelo',
    formula: String.raw`R_1 = \left( \frac{1}{R_{eq}} - \frac{1}{R_2} - \frac{1}{R_3} - ... \right)^{-1}`,
    variables: [
      { symbol: 'R_eq', label: 'Resistencia equivalente (R_eq)', unit: 'K/W' },
      { symbol: 'R2', label: 'Resistencia 2 (R₂)', unit: 'K/W' },
      { symbol: 'R3', label: 'Resistencia 3 (R₃)', unit: 'K/W' }
    ],
    output: { symbol: 'R1', label: 'Resistencia 1 (R₁)', unit: 'K/W' },
    resolve: ({ R_eq, R2, R3 }) => {
      const R1 = 1 / (1/R_eq - 1/R2 - 1/R3);
      return {
        result: { R1: formatNumber(R1) },
        steps: [
          `R₁ = (1/R_eq - 1/R₂ - 1/R₃)^(-1)` ,
          `R₁ = (1/${R_eq} - 1/${R2} - 1/${R3})^(-1)` ,
          `R₁ = ${formatNumber(R1)} K/W`
        ]
      };
    }
  },
  {
    id: 'resistencia-paralelo-despeje-R2',
    groupId: 'resistencia-paralelo-despeje-R2',
    title: 'Despeje de R₂ en paralelo',
    formula: String.raw`R_2 = \left( \frac{1}{R_{eq}} - \frac{1}{R_1} - \frac{1}{R_3} - ... \right)^{-1}`,
    variables: [
      { symbol: 'R_eq', label: 'Resistencia equivalente (R_eq)', unit: 'K/W' },
      { symbol: 'R1', label: 'Resistencia 1 (R₁)', unit: 'K/W' },
      { symbol: 'R3', label: 'Resistencia 3 (R₃)', unit: 'K/W' }
    ],
    output: { symbol: 'R2', label: 'Resistencia 2 (R₂)', unit: 'K/W' },
    resolve: ({ R_eq, R1, R3 }) => {
      const R2 = 1 / (1/R_eq - 1/R1 - 1/R3);
      return {
        result: { R2: formatNumber(R2) },
        steps: [
          `R₂ = (1/R_eq - 1/R₁ - 1/R₃)^(-1)` ,
          `R₂ = (1/${R_eq} - 1/${R1} - 1/${R3})^(-1)` ,
          `R₂ = ${formatNumber(R2)} K/W`
        ]
      };
    }
  },
  {
    id: 'resistencia-conduccion',
    groupId: 'resistencia-conduccion',
    title: 'Resistencia por Conducción (R_cond)',
    isFundamental: true,
    formula: String.raw`R_{cond} = \frac{L}{kA}`,
    variables: [
      { symbol: 'L', label: 'Espesor (L)', unit: 'm' },
      { symbol: 'k', label: 'Conductividad térmica (k)', unit: 'W/(m·K)' },
      { symbol: 'A', label: 'Área (A)', unit: 'm²' }
    ],
    output: { symbol: 'R_cond', label: 'Resistencia por conducción (R_cond)', unit: 'K/W' },
    complementary: [
      {
        expression: String.raw`L = R_{cond} \cdot kA`,
        description: 'Despeje del espesor (L)'
      },
      {
        expression: String.raw`k = \frac{L}{R_{cond} A}`,
        description: 'Despeje de la conductividad térmica (k)'
      },
      {
        expression: String.raw`A = \frac{L}{k R_{cond}}`,
        description: 'Despeje del área (A)'
      }
    ],
    resolve: ({ L, k, A }) => {
      const R_cond = L / (k * A);
      return {
        result: { R_cond: formatNumber(R_cond) },
        steps: [
          `R_cond = L / (k A)`,
          `R_cond = ${L} / (${k} × ${A})`,
          `R_cond = ${formatNumber(R_cond)} K/W`
        ]
      };
    }
  },
  {
    id: 'resistencia-conveccion',
    groupId: 'resistencia-conveccion',
    title: 'Resistencia por Convección (R_conv)',
    isFundamental: true,
    formula: String.raw`R_{conv} = \frac{1}{hA}`,
    variables: [
      { symbol: 'h', label: 'Coeficiente de convección (h)', unit: 'W/(m²·K)' },
      { symbol: 'A', label: 'Área (A)', unit: 'm²' }
    ],
    output: { symbol: 'R_conv', label: 'Resistencia por convección (R_conv)', unit: 'K/W' },
    complementary: [
      {
        expression: String.raw`h = \frac{1}{R_{conv} A}`,
        description: 'Despeje del coeficiente de convección (h)'
      },
      {
        expression: String.raw`A = \frac{1}{h R_{conv}}`,
        description: 'Despeje del área (A)'
      }
    ],
    resolve: ({ h, A }) => {
      const R_conv = 1 / (h * A);
      return {
        result: { R_conv: formatNumber(R_conv) },
        steps: [
          `R_conv = 1 / (h A)`,
          `R_conv = 1 / (${h} × ${A})`,
          `R_conv = ${formatNumber(R_conv)} K/W`
        ]
      };
    }
  },
  {
    id: 'analogía-electrica',
    groupId: 'analogía-electrica',
    title: 'Analogía eléctrica (Q = ΔT / R_total)',
    isFundamental: true,
    formula: String.raw`Q = \frac{\Delta T}{R_{total}}`,
    variables: [
      { symbol: 'Delta_T', label: 'Diferencia de temperatura (ΔT)', unit: 'K' },
      { symbol: 'R_total', label: 'Resistencia total (R_total)', unit: 'K/W' }
    ],
    output: { symbol: 'Q', label: 'Flujo de calor (Q)', unit: 'W' },
    complementary: [
      {
        expression: String.raw`\Delta T = Q \cdot R_{total}`,
        description: 'Despeje de la diferencia de temperatura (ΔT)'
      },
      {
        expression: String.raw`R_{total} = \frac{\Delta T}{Q}`,
        description: 'Despeje de la resistencia total (R_total)'
      }
    ],
    resolve: ({ Delta_T, R_total }) => {
      const Q = Delta_T / R_total;
      return {
        result: { Q: formatNumber(Q) },
        steps: [
          `Q = ΔT / R_total`,
          `Q = ${Delta_T} / ${R_total}`,
          `Q = ${formatNumber(Q)} W`
        ]
      };
    }
  },
  {
    id: 'conductancia',
    groupId: 'conductancia',
    title: 'Conductancia (C = 1 / R_total)',
    isFundamental: true,
    formula: String.raw`C = \frac{1}{R_{total}}`,
    variables: [
      { symbol: 'R_total', label: 'Resistencia total (R_total)', unit: 'K/W' }
    ],
    output: { symbol: 'C', label: 'Conductancia (C)', unit: 'W/K' },
    complementary: [
      {
        expression: String.raw`R_{total} = \frac{1}{C}`,
        description: 'Despeje de la resistencia total (R_total)'
      }
    ],
    resolve: ({ R_total }) => {
      const C = 1 / R_total;
      return {
        result: { C: formatNumber(C) },
        steps: [
          `C = 1 / R_total`,
          `C = 1 / ${R_total}`,
          `C = ${formatNumber(C)} W/K`
        ]
      };
    }
  }
  ,
  {
    id: 'flujo-superficial',
    groupId: 'flujo-superficial',
    title: 'Flujo de calor superficial (q)',
    isFundamental: true,
    formula: String.raw`q = \frac{Q}{A}`,
    variables: [
      { symbol: 'Q', label: 'Flujo de calor (Q)', unit: 'W' },
      { symbol: 'A', label: 'Área (A)', unit: 'm²' }
    ],
    output: { symbol: 'q', label: 'Flujo de calor superficial (q)', unit: 'W/m²' },
    complementary: [
      {
        expression: String.raw`Q = q \cdot A`,
        description: 'Despeje del flujo de calor (Q)'
      },
      {
        expression: String.raw`A = \frac{Q}{q}`,
        description: 'Despeje del área (A)'
      }
    ],
    resolve: ({ Q, A }) => {
      const q = Q / A;
      return {
        result: { q: formatNumber(q) },
        steps: [
          `q = Q / A`,
          `q = ${Q} / ${A}`,
          `q = ${formatNumber(q)} W/m²`
        ]
      };
    }
  }
];
