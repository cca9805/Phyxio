import { formatNumber } from '../../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'corriente-fusible',
    groupId: 'fusibles',
    title: 'Calcular Corriente del Aparato',
    formula: 'I = P / V',
    variables: [
      { symbol: 'P', label: 'Potencia del aparato', unit: 'W' },
      { symbol: 'V', label: 'Voltaje', unit: 'V' }
    ],
    output: { symbol: 'I', label: 'Corriente', unit: 'A' },
    resolve: ({ P, V }) => {
      const I = parseFloat(P) / parseFloat(V);
      
      return {
        result: {
          'Corriente': formatNumber(I) + ' A'
        },
        steps: [
          `I = ${P} W / ${V} V`,
          `I = ${formatNumber(I)} A`
        ]
      };
    }
  },
  {
    id: 'fusible-recomendado',
    groupId: 'fusibles',
    title: 'Calcular Fusible Recomendado',
    formula: 'I_fusible = I_max × 1.25',
    variables: [
      { symbol: 'Imax', label: 'Corriente máxima', unit: 'A' }
    ],
    output: { symbol: 'Ifusible', label: 'Fusible Recomendado', unit: 'A' },
    resolve: ({ Imax }) => {
      const Ifusible = parseFloat(Imax) * 1.25;
      const fusiblesComerciales = [1, 2, 3, 5, 6, 10, 13, 16, 20, 25, 32];
      const fusibleCercano = fusiblesComerciales.find(f => f >= Ifusible) || fusiblesComerciales[fusiblesComerciales.length - 1];
      
      return {
        result: {
          'Fusible Calculado': formatNumber(Ifusible) + ' A',
          'Fusible Comercial': fusibleCercano + ' A'
        },
        steps: [
          `I_fusible = ${Imax} A × 1.25`,
          `I_fusible = ${formatNumber(Ifusible)} A`,
          `Fusible comercial más cercano: ${fusibleCercano} A`
        ]
      };
    }
  },
  {
    id: 'fusible-completo',
    groupId: 'fusibles',
    title: 'Calcular Fusible desde Potencia',
    formula: 'I_fusible = (P / V) × 1.25',
    variables: [
      { symbol: 'P', label: 'Potencia del aparato', unit: 'W' },
      { symbol: 'V', label: 'Voltaje', unit: 'V' }
    ],
    output: { symbol: 'Ifusible', label: 'Fusible Recomendado', unit: 'A' },
    resolve: ({ P, V }) => {
      const I = parseFloat(P) / parseFloat(V);
      const Ifusible = I * 1.25;
      const fusiblesComerciales = [1, 2, 3, 5, 6, 10, 13, 16, 20, 25, 32];
      const fusibleCercano = fusiblesComerciales.find(f => f >= Ifusible) || fusiblesComerciales[fusiblesComerciales.length - 1];
      
      return {
        result: {
          'Corriente del aparato': formatNumber(I) + ' A',
          'Fusible calculado': formatNumber(Ifusible) + ' A',
          'Fusible comercial': fusibleCercano + ' A'
        },
        steps: [
          `I = ${P} W / ${V} V = ${formatNumber(I)} A`,
          `I_fusible = ${formatNumber(I)} A × 1.25 = ${formatNumber(Ifusible)} A`,
          `Fusible comercial recomendado: ${fusibleCercano} A`
        ]
      };
    }
  }
];
