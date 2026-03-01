import { formatNumber } from '../../../../utils/formatNumber';

const R = 8.314; // Constante universal de gases (J/mol·K)

export const definitions = [
  // --- Ecuación de Van der Waals ---
  {
    id: 'van-der-waals-presion',
    groupId: 'gases_reales-grupo-1',
    title: 'Presión según Van der Waals (P)',
    isFundamental: true,
    formula: String.raw`P = \frac{nRT}{V - nb} - \frac{an^2}{V^2}`,
    variables: [
      { symbol: 'n', label: 'Número de moles (n)', unit: 'mol' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' },
      { symbol: 'V', label: 'Volumen (V)', unit: 'm³' },
      { symbol: 'a', label: 'Parámetro a (atracción)', unit: 'Pa·m⁶/mol²' },
      { symbol: 'b', label: 'Parámetro b (volumen)', unit: 'm³/mol' }
    ],
    output: { symbol: 'P', label: 'Presión (P)', unit: 'Pa' },
    resolve: ({ n, T, V, a, b }) => {
      const termoPres = (n * R * T) / (V - n * b);
      const termoAtrac = (a * n * n) / (V * V);
      const P = termoPres - termoAtrac;
      return {
        result: { P: formatNumber(P) },
        steps: [
          `P = [nRT / (V - nb)] - [an² / V²]`,
          `Término de presión = (${n} × ${R} × ${T}) / (${V} - ${n} × ${b}) = ${formatNumber(termoPres)} Pa`,
          `Término de atracción = (${a} × ${n}²) / ${V}² = ${formatNumber(termoAtrac)} Pa`,
          `P = ${formatNumber(termoPres)} - ${formatNumber(termoAtrac)} = ${formatNumber(P)} Pa`
        ]
      };
    }
  },

  // --- Factor de Compresibilidad ---
  {
    id: 'factor-compresibilidad',
    groupId: 'gases_reales-grupo-1',
    title: 'Factor de Compresibilidad (Z)',
    isFundamental: true,
    formula: String.raw`Z = \frac{PV}{nRT}`,
    variables: [
      { symbol: 'P', label: 'Presión (P)', unit: 'Pa' },
      { symbol: 'V', label: 'Volumen (V)', unit: 'm³' },
      { symbol: 'n', label: 'Número de moles (n)', unit: 'mol' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'Z', label: 'Factor Z', unit: 'adimensional' },
    resolve: ({ P, V, n, T }) => {
      const Z = (P * V) / (n * R * T);
      return {
        result: { Z: formatNumber(Z) },
        steps: [
          `Z = (P × V) / (n × R × T)`,
          `Z = (${P} × ${V}) / (${n} × ${R} × ${T})`,
          `Z = ${formatNumber(Z)}`,
          Z > 1 ? 'Z > 1: Fuerzas repulsivas dominan' : Z < 1 ? 'Z < 1: Fuerzas atractivas dominan' : 'Z = 1: Comportamiento ideal'
        ]
      };
    }
  }
];
