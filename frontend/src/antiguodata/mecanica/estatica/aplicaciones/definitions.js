
import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'aplicaciones-reaccion-viga-b',
    groupId: 'viga-simplemente-apoyada',
    title: 'Cálculo de Reacción en Apoyo B',
    formula: 'R_B = (P * a) / L',
    variables: [
      { symbol: 'P', label: 'Carga Puntual (P)', unit: 'N' },
      { symbol: 'L', label: 'Longitud de la viga (L)', unit: 'm' },
      { symbol: 'a', label: 'Distancia de la carga al apoyo A (a)', unit: 'm' },
    ],
    output: { symbol: 'R_B', label: 'Reacción en Apoyo B (R_B)', unit: 'N' },
    resolve: ({ P, L, a }) => {
      const num_P = parseFloat(P);
      const num_L = parseFloat(L);
      const num_a = parseFloat(a);
      if (num_L <= 0) return { error: "La longitud de la viga debe ser mayor que cero." };
      if (num_a < 0 || num_a > num_L) return { error: "La distancia 'a' debe estar dentro de la longitud de la viga." };

      const R_B = (num_P * num_a) / num_L;
      return { result: { R_B: formatNumber(R_B) }, steps: [`R_B = (${P} * ${a}) / ${L} = ${formatNumber(R_B)} N`] };
    }
  },
  {
    id: 'aplicaciones-reaccion-viga-a',
    groupId: 'viga-simplemente-apoyada',
    title: 'Cálculo de Reacción en Apoyo A',
    formula: 'R_A = P - R_B',
    variables: [
      { symbol: 'P', label: 'Carga Puntual (P)', unit: 'N' },
      { symbol: 'R_B', label: 'Reacción en Apoyo B (R_B)', unit: 'N' },
    ],
    output: { symbol: 'R_A', label: 'Reacción en Apoyo A (R_A)', unit: 'N' },
    resolve: ({ P, R_B }) => {
      const num_P = parseFloat(P);
      const num_R_B = parseFloat(R_B);
      const R_A = num_P - num_R_B;
      return { result: { R_A: formatNumber(R_A) }, steps: [`R_A = ${P} - ${R_B} = ${formatNumber(R_A)} N`] };
    }
  }
];
