import { formatNumber } from '../../../../utils/formatNumber.js';

export const definitions = [
  // Grupo 1: Acción
  {
    id: 'accion',
    groupId: 'accion',
    title: 'Acción de Hamilton',
    isFundamental: true,
    formula: String.raw`S = \int_{t_1}^{t_2} L \, dt`,
    variables: [
      { symbol: 'L', label: 'Lagrangiano promedio (L)', unit: 'J' },
      { symbol: 'dt', label: 'Intervalo de tiempo (Δt)', unit: 's' }
    ],
    output: { symbol: 'S', label: 'Acción (S)', unit: 'J·s' },
    resolve: ({ L, dt }) => {
      const numL = parseFloat(L);
      const numDt = parseFloat(dt);
      const S = numL * numDt;
      
      return {
        result: { S: formatNumber(S) },
        steps: [
          `Acción: S = ∫L dt ≈ L·Δt`,
          `S = ${numL} × ${numDt}`,
          `S = ${formatNumber(S)} J·s`,
          `Unidades: [Energía × Tiempo] = [Acción]`
        ]
      };
    }
  },

  // Grupo 2: Acción para Partícula Libre
  {
    id: 'accion-particula-libre',
    groupId: 'accion-ejemplos',
    title: 'Acción de Partícula Libre',
    isFundamental: true,
    formula: String.raw`S = \frac{1}{2}m\frac{(x_2-x_1)^2}{t_2-t_1}`,
    variables: [
      { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
      { symbol: 'x1', label: 'Posición inicial (x₁)', unit: 'm' },
      { symbol: 'x2', label: 'Posición final (x₂)', unit: 'm' },
      { symbol: 't1', label: 'Tiempo inicial (t₁)', unit: 's' },
      { symbol: 't2', label: 'Tiempo final (t₂)', unit: 's' }
    ],
    output: { symbol: 'S', label: 'Acción (S)', unit: 'J·s' },
    resolve: ({ m, x1, x2, t1, t2 }) => {
      const numM = parseFloat(m);
      const numX1 = parseFloat(x1);
      const numX2 = parseFloat(x2);
      const numT1 = parseFloat(t1);
      const numT2 = parseFloat(t2);
      
      const dx = numX2 - numX1;
      const dt = numT2 - numT1;
      
      if (dt === 0) {
        return { error: 'El intervalo de tiempo no puede ser cero.' };
      }
      
      const S = 0.5 * numM * (dx * dx) / dt;
      
      return {
        result: { S: formatNumber(S) },
        steps: [
          `Δx = x₂ - x₁ = ${numX2} - ${numX1} = ${formatNumber(dx)} m`,
          `Δt = t₂ - t₁ = ${numT2} - ${numT1} = ${formatNumber(dt)} s`,
          `S = ½m(Δx)²/Δt`,
          `S = ½(${numM})(${formatNumber(dx)})²/${formatNumber(dt)}`,
          `S = ${formatNumber(S)} J·s`
        ]
      };
    }
  }
];
