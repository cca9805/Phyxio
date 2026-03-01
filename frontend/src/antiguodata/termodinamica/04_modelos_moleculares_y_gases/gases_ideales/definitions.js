import { formatNumber } from '../../../../utils/formatNumber';

const R = 8.314; // Constante universal de gases (J/mol·K)

export const definitions = [
  // --- Ecuación de Estado del Gas Ideal: PV = nRT ---
  {
    id: 'gas-ideal-presion',
    groupId: 'gases_ideales-grupo-1',
    title: 'Presión del Gas Ideal (P)',
    isFundamental: true,
    formula: String.raw`P = \frac{nRT}{V}`,
    variables: [
      { symbol: 'n', label: 'Número de moles (n)', unit: 'mol' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' },
      { symbol: 'V', label: 'Volumen (V)', unit: 'm³' }
    ],
    output: { symbol: 'P', label: 'Presión (P)', unit: 'Pa' },
    resolve: ({ n, T, V }) => {
      const P = (n * R * T) / V;
      return {
        result: { P: formatNumber(P) },
        steps: [
          `P = (n × R × T) / V`,
          `P = (${n} mol × ${R} J/(mol·K) × ${T} K) / ${V} m³`,
          `P = ${formatNumber(P)} Pa`
        ]
      };
    }
  },

  {
    id: 'gas-ideal-volumen',
    groupId: 'gases_ideales-grupo-1',
    title: 'Volumen del Gas Ideal (V)',
    isComplementary: true,
    formula: String.raw`V = \frac{nRT}{P}`,
    variables: [
      { symbol: 'n', label: 'Número de moles (n)', unit: 'mol' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' },
      { symbol: 'P', label: 'Presión (P)', unit: 'Pa' }
    ],
    output: { symbol: 'V', label: 'Volumen (V)', unit: 'm³' },
    resolve: ({ n, T, P }) => {
      const V = (n * R * T) / P;
      return {
        result: { V: formatNumber(V) },
        steps: [
          `V = (n × R × T) / P`,
          `V = (${n} mol × ${R} J/(mol·K) × ${T} K) / ${P} Pa`,
          `V = ${formatNumber(V)} m³`
        ]
      };
    }
  },

  {
    id: 'gas-ideal-temperatura',
    groupId: 'gases_ideales-grupo-1',
    title: 'Temperatura del Gas Ideal (T)',
    isComplementary: true,
    formula: String.raw`T = \frac{PV}{nR}`,
    variables: [
      { symbol: 'P', label: 'Presión (P)', unit: 'Pa' },
      { symbol: 'V', label: 'Volumen (V)', unit: 'm³' },
      { symbol: 'n', label: 'Número de moles (n)', unit: 'mol' }
    ],
    output: { symbol: 'T', label: 'Temperatura (T)', unit: 'K' },
    resolve: ({ P, V, n }) => {
      const T = (P * V) / (n * R);
      return {
        result: { T: formatNumber(T) },
        steps: [
          `T = (P × V) / (n × R)`,
          `T = (${P} Pa × ${V} m³) / (${n} mol × ${R} J/(mol·K))`,
          `T = ${formatNumber(T)} K`
        ]
      };
    }
  },

  {
    id: 'gas-ideal-moles',
    groupId: 'gases_ideales-grupo-1',
    title: 'Número de Moles (n)',
    isComplementary: true,
    formula: String.raw`n = \frac{PV}{RT}`,
    variables: [
      { symbol: 'P', label: 'Presión (P)', unit: 'Pa' },
      { symbol: 'V', label: 'Volumen (V)', unit: 'm³' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'n', label: 'Número de moles (n)', unit: 'mol' },
    resolve: ({ P, V, T }) => {
      const n = (P * V) / (R * T);
      return {
        result: { n: formatNumber(n) },
        steps: [
          `n = (P × V) / (R × T)`,
          `n = (${P} Pa × ${V} m³) / (${R} J/(mol·K) × ${T} K)`,
          `n = ${formatNumber(n)} mol`
        ]
      };
    }
  }
];