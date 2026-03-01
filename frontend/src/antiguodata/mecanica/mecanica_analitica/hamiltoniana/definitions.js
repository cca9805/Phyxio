import { formatNumber } from '../../../../utils/formatNumber.js';

export const definitions = [
  // Grupo 1: Función Hamiltoniana
  {
    id: 'hamiltoniano',
    groupId: 'hamiltoniano',
    title: 'Función Hamiltoniana',
    isFundamental: true,
    formula: String.raw`H = T + V`,
    variables: [
      { symbol: 'T', label: 'Energía cinética (T)', unit: 'J' },
      { symbol: 'V', label: 'Energía potencial (V)', unit: 'J' }
    ],
    output: { symbol: 'H', label: 'Hamiltoniano (H)', unit: 'J' },
    resolve: ({ T, V }) => {
      const numT = parseFloat(T);
      const numV = parseFloat(V);
      const H = numT + numV;
      
      return {
        result: { H: formatNumber(H) },
        steps: [
          `Hamiltoniano: H = T + V`,
          `H = ${numT} + ${numV}`,
          `H = ${formatNumber(H)} J`,
          `Nota: H representa la energía total del sistema`
        ]
      };
    }
  },

  // Grupo 2: Transformación de Legendre
  {
    id: 'transformacion-legendre',
    groupId: 'transformacion-legendre',
    title: 'Hamiltoniano desde Lagrangiano',
    isFundamental: false,
    formula: String.raw`H = p\dot{q} - L`,
    variables: [
      { symbol: 'p', label: 'Momento generalizado (p)', unit: 'kg·m/s' },
      { symbol: 'dq', label: 'Velocidad generalizada (q̇)', unit: 'm/s' },
      { symbol: 'L', label: 'Lagrangiano (L)', unit: 'J' }
    ],
    output: { symbol: 'H', label: 'Hamiltoniano (H)', unit: 'J' },
    resolve: ({ p, dq, L }) => {
      const numP = parseFloat(p);
      const numDq = parseFloat(dq);
      const numL = parseFloat(L);
      const H = numP * numDq - numL;
      
      return {
        result: { H: formatNumber(H) },
        steps: [
          `Transformación de Legendre: H = pq̇ - L`,
          `H = (${numP})(${numDq}) - ${numL}`,
          `H = ${formatNumber(numP * numDq)} - ${numL}`,
          `H = ${formatNumber(H)} J`
        ]
      };
    }
  },

  // Grupo 3: Oscilador Armónico - Hamiltoniano
  {
    id: 'oscilador-hamiltoniano',
    groupId: 'oscilador-hamiltoniano',
    title: 'Hamiltoniano del Oscilador Armónico',
    isFundamental: true,
    formula: String.raw`H = \frac{p^2}{2m} + \frac{1}{2}kx^2`,
    variables: [
      { symbol: 'p', label: 'Momento (p)', unit: 'kg·m/s' },
      { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
      { symbol: 'k', label: 'Constante del resorte (k)', unit: 'N/m' },
      { symbol: 'x', label: 'Posición (x)', unit: 'm' }
    ],
    output: { symbol: 'H', label: 'Hamiltoniano (H)', unit: 'J' },
    resolve: ({ p, m, k, x }) => {
      const numP = parseFloat(p);
      const numM = parseFloat(m);
      const numK = parseFloat(k);
      const numX = parseFloat(x);
      
      if (numM === 0) {
        return { error: 'La masa no puede ser cero.' };
      }
      
      const T = (numP * numP) / (2 * numM);
      const V = 0.5 * numK * numX * numX;
      const H = T + V;
      
      return {
        result: { H: formatNumber(H) },
        steps: [
          `Energía cinética: T = p²/(2m) = ${formatNumber(T)} J`,
          `Energía potencial: V = ½kx² = ${formatNumber(V)} J`,
          `Hamiltoniano: H = T + V`,
          `H = ${formatNumber(H)} J`
        ]
      };
    }
  }
];
