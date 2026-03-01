import { formatNumber } from '../../../utils/formatNumber.js';

// Constantes
const P_atm = 101325; // Pa

export const definitions = [
  // Grupo 1: Valor estándar de presión atmosférica
  {
    id: 'presion-atmosferica-valor',
    groupId: 'presion-atmosferica-valor',
    title: 'Presión Atmosférica Estándar',
    isFundamental: true,
    formula: String.raw`P_{atm} = 101325\ \text{Pa}`,
    variables: [],
    output: { symbol: 'P_atm', label: 'Presión atmosférica', unit: 'Pa' },
    resolve: () => ({
      result: { P_atm: formatNumber(P_atm) },
      steps: [
        `La presión atmosférica estándar al nivel del mar es 101325 Pa.`
      ]
    })
  },
  // Grupo 2: Conversión de presión entre atmósferas y pascales
  {
    id: 'conversion-atm-pascales',
    groupId: 'conversion-atm-pascales',
    title: 'Conversión atmósferas ↔ pascales',
    formula: String.raw`P_{atm} = \frac{P_{Pa}}{101325}`,
    variables: [
      { symbol: 'P_Pa', label: 'Presión en pascales', unit: 'Pa' }
    ],
    output: { symbol: 'P_atm', label: 'Presión en atmósferas', unit: 'atm' },
    resolve: ({ P_Pa }) => {
      const presionPa = parseFloat(P_Pa);
      const P_atm = presionPa / 101325;
      return {
        result: { P_atm: formatNumber(P_atm) },
        steps: [
          `Conversión: P_atm = P_Pa / 101325`,
          `P_atm = ${presionPa} / 101325 = ${formatNumber(P_atm)} atm`
        ]
      };
    }
  },
  {
    id: 'conversion-pascales-atm',
    groupId: 'conversion-atm-pascales',
    title: 'Conversión pascales ↔ atmósferas',
    formula: String.raw`P_{Pa} = P_{atm} \times 101325`,
    variables: [
      { symbol: 'P_atm', label: 'Presión en atmósferas', unit: 'atm' }
    ],
    output: { symbol: 'P_Pa', label: 'Presión en pascales', unit: 'Pa' },
    resolve: ({ P_atm }) => {
      const presionAtm = parseFloat(P_atm);
      const P_Pa = presionAtm * 101325;
      return {
        result: { P_Pa: formatNumber(P_Pa) },
        steps: [
          `Conversión: P_Pa = P_atm × 101325`,
          `P_Pa = ${presionAtm} × 101325 = ${formatNumber(P_Pa)} Pa`
        ]
      };
    }
  }
];