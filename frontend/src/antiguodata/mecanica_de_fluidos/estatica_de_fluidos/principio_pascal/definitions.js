import { formatNumber } from '../../../../utils/formatNumber.js';

export const definitions = [
  // --- Grupo 1: Transmisión de Presión (Prensa Hidráulica) ---
  {
    id: 'pascal-fuerza-salida',
    groupId: 'pascal-prensa',
    title: 'Calcular Fuerza de salida (F2 = F1·A2/A1)',
    isFundamental: true,
    formula: 'F2 = F1 * (A2 / A1)',
    variables: [
      { symbol: 'F1', label: 'Fuerza de entrada (F1) (N)', unit: 'N' },
      { symbol: 'A1', label: 'Área de entrada (A1) (m²)', unit: 'm²' },
      { symbol: 'A2', label: 'Área de salida (A2) (m²)', unit: 'm²' }
    ],
    output: { symbol: 'F2', label: 'Fuerza de salida (F2) (N)', unit: 'N' },
    resolve: ({ F1, A1, A2 }) => {
      const area1 = parseFloat(A1);
      if (area1 === 0) return { error: "El área de entrada no puede ser cero." };
      const F2 = parseFloat(F1) * (parseFloat(A2) / area1);
      return {
        result: { F2: formatNumber(F2) },
        steps: [
          `F2 = F1 * (A2 / A1) = ${F1} * (${A2} / ${A1})`,
          `F2 = ${formatNumber(F2)} N`
        ]
      };
    }
  },
  {
    id: 'pascal-fuerza-entrada',
    groupId: 'pascal-prensa',
    title: 'Calcular Fuerza de entrada (F1 = F2·A1/A2)',
    isFundamental: false,
    formula: 'F1 = F2 * (A1 / A2)',
    variables: [
      { symbol: 'F2', label: 'Fuerza de salida (F2) (N)', unit: 'N' },
      { symbol: 'A1', label: 'Área de entrada (A1) (m²)', unit: 'm²' },
      { symbol: 'A2', label: 'Área de salida (A2) (m²)', unit: 'm²' }
    ],
    output: { symbol: 'F1', label: 'Fuerza de entrada (F1) (N)', unit: 'N' },
    resolve: ({ F2, A1, A2 }) => {
      const area2 = parseFloat(A2);
      if (area2 === 0) return { error: "El área de salida no puede ser cero." };
      const F1 = parseFloat(F2) * (parseFloat(A1) / area2);
      return {
        result: { F1: formatNumber(F1) },
        steps: [
          `F1 = F2 * (A1 / A2) = ${F2} * (${A1} / ${A2})`,
          `F1 = ${formatNumber(F1)} N`
        ]
      };
    }
  },
  {
    id: 'pascal-ventaja-mecanica',
    groupId: 'pascal-prensa',
    title: 'Calcular Ventaja mecánica (VM = A2/A1)',
    isFundamental: false,
    formula: 'VM = A2 / A1',
    variables: [
      { symbol: 'A2', label: 'Área de salida (A2) (m²)', unit: 'm²' },
      { symbol: 'A1', label: 'Área de entrada (A1) (m²)', unit: 'm²' }
    ],
    output: { symbol: 'VM', label: 'Ventaja mecánica (VM) (adimensional)', unit: '' },
    resolve: ({ A2, A1 }) => {
      const area1 = parseFloat(A1);
      if (area1 === 0) return { error: "El área de entrada no puede ser cero." };
      const VM = parseFloat(A2) / area1;
      return {
        result: { VM: formatNumber(VM) },
        steps: [
          `VM = A2 / A1 = ${A2} / ${A1}`,
          `VM = ${formatNumber(VM)}`
        ]
      };
    }
  }
];
