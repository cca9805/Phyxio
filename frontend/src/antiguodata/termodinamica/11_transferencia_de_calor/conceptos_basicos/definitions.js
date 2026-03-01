import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'flujo-calor-basico',
    groupId: 'conceptos_basicos-grupo-1',
    title: 'Flujo de Calor (Q)',
    isFundamental: true,
    formula: String.raw`Q = \frac{\Delta T}{R_{th}}`,
    variables: [
      { symbol: 'Delta_T', label: 'Diferencia de temperatura (ΔT)', unit: 'K' },
      { symbol: 'R_th', label: 'Resistencia térmica (R_th)', unit: 'K/W' }
    ],
    output: { symbol: 'Q', label: 'Flujo de calor (Q)', unit: 'W' },
    resolve: ({ Delta_T, R_th }) => {
      const Q = Delta_T / R_th;
      return {
        result: { Q: formatNumber(Q) },
        steps: [
          `Q = ΔT / R_th`,
          `Q = ${Delta_T} / ${R_th}`,
          `Q = ${formatNumber(Q)} W`
        ]
      };
    }
  },
  {
    id: 'resistencia-termica',
    groupId: 'conceptos_basicos-grupo-1',
    title: 'Resistencia Térmica (R_th)',
    isFundamental: true,
    formula: String.raw`R_{th} = \frac{\Delta T}{Q}`,
    variables: [
      { symbol: 'Delta_T', label: 'Diferencia de temperatura (ΔT)', unit: 'K' },
      { symbol: 'Q', label: 'Flujo de calor (Q)', unit: 'W' }
    ],
    output: { symbol: 'R_th', label: 'Resistencia térmica (R_th)', unit: 'K/W' },
    resolve: ({ Delta_T, Q }) => {
      const R_th = Delta_T / Q;
      return {
        result: { R_th: formatNumber(R_th) },
        steps: [
          `R_th = ΔT / Q`,
          `R_th = ${Delta_T} / ${Q}`,
          `R_th = ${formatNumber(R_th)} K/W`
        ]
      };
    }
  }
];
