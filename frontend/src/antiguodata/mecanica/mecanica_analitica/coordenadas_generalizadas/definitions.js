import { formatNumber } from '../../../../utils/formatNumber.js';

export const definitions = [
  // Grupo 1: Grados de Libertad
  {
    id: 'grados-libertad',
    groupId: 'grados-libertad',
    title: 'Grados de Libertad',
    isFundamental: true,
    formula: String.raw`n = 3N - k`,
    variables: [
      { symbol: 'N', label: 'Número de partículas (N)', unit: '-' },
      { symbol: 'k', label: 'Número de restricciones (k)', unit: '-' }
    ],
    output: { symbol: 'n', label: 'Grados de libertad (n)', unit: '-' },
    resolve: ({ N, k }) => {
      const numN = parseFloat(N);
      const numK = parseFloat(k);
      const n = 3 * numN - numK;
      
      return {
        result: { n: formatNumber(n) },
        steps: [
          `Grados de libertad: n = 3N - k`,
          `n = 3(${numN}) - ${numK}`,
          `n = ${3 * numN} - ${numK}`,
          `n = ${formatNumber(n)}`
        ]
      };
    }
  },

  // Grupo 2: Transformación de Coordenadas
  {
    id: 'coord-cartesianas-polares',
    groupId: 'transformacion-coordenadas',
    title: 'Cartesianas a Polares (2D)',
    isFundamental: true,
    formula: String.raw`r = \sqrt{x^2 + y^2}, \quad \theta = \arctan\left(\frac{y}{x}\right)`,
    variables: [
      { symbol: 'x', label: 'Coordenada x', unit: 'm' },
      { symbol: 'y', label: 'Coordenada y', unit: 'm' }
    ],
    output: { symbol: 'r', label: 'Radio (r)', unit: 'm' },
    resolve: ({ x, y }) => {
      const numX = parseFloat(x);
      const numY = parseFloat(y);
      const r = Math.sqrt(numX * numX + numY * numY);
      const theta = Math.atan2(numY, numX) * (180 / Math.PI);
      
      return {
        result: { r: formatNumber(r) },
        steps: [
          `r = √(x² + y²)`,
          `r = √(${numX}² + ${numY}²)`,
          `r = √(${formatNumber(numX * numX)} + ${formatNumber(numY * numY)})`,
          `r = ${formatNumber(r)} m`,
          `θ = arctan(y/x) = ${formatNumber(theta)}°`
        ]
      };
    }
  },

  // Grupo 3: Velocidad en Coordenadas Generalizadas
  {
    id: 'velocidad-generalizada',
    groupId: 'velocidad-generalizada',
    title: 'Velocidad Generalizada',
    isFundamental: true,
    formula: String.raw`\dot{q}_i = \frac{dq_i}{dt}`,
    variables: [
      { symbol: 'q_i', label: 'Coordenada generalizada (qᵢ)', unit: 'variable' },
      { symbol: 'dt', label: 'Intervalo de tiempo (Δt)', unit: 's' }
    ],
    output: { symbol: 'dq_i', label: 'Velocidad generalizada (q̇ᵢ)', unit: 'variable/s' },
    resolve: ({ q_i, dt }) => {
      const numQ = parseFloat(q_i);
      const numDt = parseFloat(dt);
      
      if (numDt === 0) {
        return { error: 'El intervalo de tiempo no puede ser cero.' };
      }
      
      const dq_i = numQ / numDt;
      
      return {
        result: { dq_i: formatNumber(dq_i) },
        steps: [
          `q̇ᵢ = Δqᵢ / Δt`,
          `q̇ᵢ = ${numQ} / ${numDt}`,
          `q̇ᵢ = ${formatNumber(dq_i)} unidades/s`
        ]
      };
    }
  }
];
