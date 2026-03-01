import { formatNumber } from '../../../../utils/formatNumber';

const SIGMA = 5.67e-8; // Constante de Stefan-Boltzmann (W/(m²·K⁴))

export const definitions = [
  {
    id: 'ley-stefan-boltzmann',
    groupId: 'radiacion-grupo-1',
    title: 'Ley de Stefan-Boltzmann (Q)',
    isFundamental: true,
    formula: String.raw`Q = \varepsilon\sigma A(T^4 - T_{amb}^4)`,
    variables: [
      { symbol: 'epsilon', label: 'Emisividad (ε)', unit: 'adimensional' },
      { symbol: 'A', label: 'Área de superficie (A)', unit: 'm²' },
      { symbol: 'T', label: 'Temperatura de superficie (T)', unit: 'K' },
      { symbol: 'T_amb', label: 'Temperatura ambiente (T_amb)', unit: 'K' }
    ],
    output: { symbol: 'Q', label: 'Flujo de calor por radiación (Q)', unit: 'W' },
    resolve: ({ epsilon, A, T, T_amb }) => {
      const Q = epsilon * SIGMA * A * (Math.pow(T, 4) - Math.pow(T_amb, 4));
      return {
        result: { Q: formatNumber(Q), sigma: formatNumber(SIGMA) },
        steps: [
          `σ = ${formatNumber(SIGMA)} W/(m²·K⁴) (constante de Stefan-Boltzmann)`,
          `Q = ε × σ × A × (T⁴ - T_amb⁴)`,
          `Q = ${epsilon} × ${formatNumber(SIGMA)} × ${A} × (${T}⁴ - ${T_amb}⁴)`,
          `Q = ${epsilon} × ${formatNumber(SIGMA)} × ${A} × (${formatNumber(Math.pow(T, 4))} - ${formatNumber(Math.pow(T_amb, 4))})`,
          `Q = ${formatNumber(Q)} W`
        ]
      };
    }
  },
  {
    id: 'potencia-radiacion',
    groupId: 'radiacion-grupo-1',
    title: 'Potencia Radiada por Cuerpo Negro (P)',
    isComplementary: true,
    formula: String.raw`P = \sigma AT^4`,
    variables: [
      { symbol: 'A', label: 'Área de superficie (A)', unit: 'm²' },
      { symbol: 'T', label: 'Temperatura absoluta (T)', unit: 'K' }
    ],
    output: { symbol: 'P', label: 'Potencia radiada (P)', unit: 'W' },
    resolve: ({ A, T }) => {
      const P = SIGMA * A * Math.pow(T, 4);
      return {
        result: { P: formatNumber(P), sigma: formatNumber(SIGMA) },
        steps: [
          `σ = ${formatNumber(SIGMA)} W/(m²·K⁴)`,
          `P = σ × A × T⁴`,
          `P = ${formatNumber(SIGMA)} × ${A} × ${T}⁴`,
          `P = ${formatNumber(P)} W`
        ]
      };
    }
  }
  ,
  {
    id: 'flujo-por-area',
    groupId: 'radiacion-grupo-1',
    title: 'Flujo por área (q)',
    isComplementary: true,
    formula: String.raw`q = \varepsilon\sigma T^4`,
    variables: [
      { symbol: 'epsilon', label: 'Emisividad (ε)', unit: 'adimensional' },
      { symbol: 'T', label: 'Temperatura absoluta (T)', unit: 'K' }
    ],
    output: { symbol: 'q', label: 'Flujo por área (q)', unit: 'W/m²' },
    resolve: ({ epsilon, T }) => {
      const q = epsilon * SIGMA * Math.pow(T, 4);
      return {
        result: { q: formatNumber(q), sigma: formatNumber(SIGMA) },
        steps: [
          `σ = ${formatNumber(SIGMA)} W/(m²·K⁴)`,
          `q = ε × σ × T⁴`,
          `q = ${epsilon} × ${formatNumber(SIGMA)} × ${T}⁴`,
          `q = ${formatNumber(q)} W/m²`
        ]
      };
    }
  }
];
