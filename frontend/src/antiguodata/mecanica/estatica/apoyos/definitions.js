
import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  // --- Grupo 1: Reacciones en Viga Simplemente Apoyada ---
  {
    id: 'apoyos-reaccion-b-viga-simple',
    groupId: 'reacciones-viga-simple',
    title: 'Calcular Reacción en B (RB)',
    formula: 'RB = (P * a) / L',
    variables: [
      { symbol: 'P', label: 'Carga Puntual (P)', unit: 'N' },
      { symbol: 'L', label: 'Longitud de la Viga (L)', unit: 'm' },
      { symbol: 'a', label: 'Distancia de P desde A (a)', unit: 'm' },
    ],
    output: { symbol: 'RB', label: 'Reacción en B (RB)', unit: 'N' },
    resolve: ({ P, L, a }) => {
      const numL = parseFloat(L);
      if (numL === 0) return { error: 'La longitud (L) no puede ser cero.' };
      const RB = (parseFloat(P) * parseFloat(a)) / numL;
      return { result: { RB: formatNumber(RB) }, steps: [`RB = (${P} * ${a}) / ${L} = ${formatNumber(RB)} N`] };
    }
  },
  {
    id: 'apoyos-reaccion-a-viga-simple',
    groupId: 'reacciones-viga-simple',
    title: 'Calcular Reacción en A (RA)',
    formula: 'RA = P - RB',
    variables: [
      { symbol: 'P', label: 'Carga Total (P)', unit: 'N' },
      { symbol: 'RB', label: 'Reacción en B (RB)', unit: 'N' },
    ],
    output: { symbol: 'RA', label: 'Reacción en A (RA)', unit: 'N' },
    resolve: ({ P, RB }) => {
      const RA = parseFloat(P) - parseFloat(RB);
      return { result: { RA: formatNumber(RA) }, steps: [`RA = ${P} - ${RB} = ${formatNumber(RA)} N`] };
    }
  },

  // --- Grupo 2: Reacciones en Viga en Voladizo ---
  {
    id: 'apoyos-reaccion-a-viga-voladizo',
    groupId: 'reacciones-viga-voladizo',
    title: 'Calcular Fuerza de Reacción (RA)',
    formula: 'RA = P',
    variables: [
      { symbol: 'P', label: 'Carga Puntual (P)', unit: 'N' },
    ],
    output: { symbol: 'RA', label: 'Fuerza de Reacción (RA)', unit: 'N' },
    resolve: ({ P }) => {
      const RA = parseFloat(P);
      return { result: { RA: formatNumber(RA) }, steps: [`RA = ${P} = ${formatNumber(RA)} N`] };
    }
  },
  {
    id: 'apoyos-momento-a-viga-voladizo',
    groupId: 'reacciones-viga-voladizo',
    title: 'Calcular Momento de Reacción (MA)',
    formula: 'MA = P * L',
    variables: [
      { symbol: 'P', label: 'Carga Puntual (P)', unit: 'N' },
      { symbol: 'L', label: 'Longitud del Voladizo (L)', unit: 'm' },
    ],
    output: { symbol: 'MA', label: 'Momento de Reacción (MA)', unit: 'N·m' },
    resolve: ({ P, L }) => {
      const MA = parseFloat(P) * parseFloat(L);
      return { result: { MA: formatNumber(MA) }, steps: [`MA = ${P} * ${L} = ${formatNumber(MA)} N·m`] };
    }
  }
];
