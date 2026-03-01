
import { formatNumber } from '../../../../utils/formatNumber';

// Función auxiliar para convertir grados a radianes
const toRadians = (degrees) => degrees * (Math.PI / 180);

export const definitions = [
  // --- Grupo 1: Equilibrio en un Nodo (Método de los Nodos) ---
  {
    id: 'equilibrio-nodo-resultante',
    groupId: 'equilibrio-nodo',
    title: 'Calcular Resultante de 2 Fuerzas en un Nodo',
    formula: 'Cálculo de componentes y suma vectorial',
    variables: [
      { symbol: 'F1', label: 'Fuerza 1 (F₁)', unit: 'N' },
      { symbol: 'a1', label: 'Ángulo de F₁ (α₁)', unit: '°' },
      { symbol: 'F2', label: 'Fuerza 2 (F₂)', unit: 'N' },
      { symbol: 'a2', label: 'Ángulo de F₂ (α₂)', unit: '°' },
    ],
    output: { symbol: 'R', label: 'Fuerza Resultante (R)', unit: 'N' },
    resolve: ({ F1, a1, F2, a2 }) => {
      const F1x = parseFloat(F1) * Math.cos(toRadians(parseFloat(a1)));
      const F1y = parseFloat(F1) * Math.sin(toRadians(parseFloat(a1)));
      const F2x = parseFloat(F2) * Math.cos(toRadians(parseFloat(a2)));
      const F2y = parseFloat(F2) * Math.sin(toRadians(parseFloat(a2)));
      
      const Rx = F1x + F2x;
      const Ry = F1y + F2y;
      
      const R = Math.sqrt(Rx**2 + Ry**2);

      const steps = [
        `Componente x de F₁: F₁x = ${F1} * cos(${a1}°) = ${formatNumber(F1x)} N`,
        `Componente y de F₁: F₁y = ${F1} * sin(${a1}°) = ${formatNumber(F1y)} N`,
        `Componente x de F₂: F₂x = ${F2} * cos(${a2}°) = ${formatNumber(F2x)} N`,
        `Componente y de F₂: F₂y = ${F2} * sin(${a2}°) = ${formatNumber(F2y)} N`,
        `Suma de componentes en x: Rx = ${formatNumber(F1x)} + ${formatNumber(F2x)} = ${formatNumber(Rx)} N`,
        `Suma de componentes en y: Ry = ${formatNumber(F1y)} + ${formatNumber(F2y)} = ${formatNumber(Ry)} N`,
        `Magnitud de la Resultante: R = √(${formatNumber(Rx)}² + ${formatNumber(Ry)}²) = ${formatNumber(R)} N`
      ];

      return { result: { R: formatNumber(R) }, steps };
    }
  },
  {
    id: 'equilibrio-nodo-equilibrante',
    groupId: 'equilibrio-nodo',
    title: 'Calcular Fuerza Equilibrante en un Nodo',
    description: 'La fuerza equilibrante es igual en magnitud y opuesta en dirección a la fuerza resultante.',
    formula: 'E = -R',
    variables: [
      { symbol: 'F1', label: 'Fuerza 1 (F₁)', unit: 'N' },
      { symbol: 'a1', label: 'Ángulo de F₁ (α₁)', unit: '°' },
      { symbol: 'F2', label: 'Fuerza 2 (F₂)', unit: 'N' },
      { symbol: 'a2', label: 'Ángulo de F₂ (α₂)', unit: '°' },
    ],
    output: { symbol: 'E', label: 'Fuerza Equilibrante (E)', unit: 'N' },
    resolve: ({ F1, a1, F2, a2 }) => {
      const F1x = parseFloat(F1) * Math.cos(toRadians(parseFloat(a1)));
      const F1y = parseFloat(F1) * Math.sin(toRadians(parseFloat(a1)));
      const F2x = parseFloat(F2) * Math.cos(toRadians(parseFloat(a2)));
      const F2y = parseFloat(F2) * Math.sin(toRadians(parseFloat(a2)));
      
      const Rx = F1x + F2x;
      const Ry = F1y + F2y;
      
      const E = Math.sqrt(Rx**2 + Ry**2);
      const angleR = Math.atan2(Ry, Rx) * (180 / Math.PI);
      const angleE = (angleR + 180) % 360;

      const steps = [
        `Se calcula la fuerza resultante (R) de F₁ y F₂. (Ver calculadora de Resultante)`,
        `Rx = ${formatNumber(Rx)} N, Ry = ${formatNumber(Ry)} N`,
        `Magnitud de la Resultante: R = √(${formatNumber(Rx)}² + ${formatNumber(Ry)}²) = ${formatNumber(E)} N`,
        `La fuerza equilibrante (E) tiene la misma magnitud que la resultante.`,
        `Ángulo de la Resultante: α_R = atan2(${formatNumber(Ry)}, ${formatNumber(Rx)}) = ${formatNumber(angleR)}°`,
        `Ángulo de la Equilibrante: α_E = α_R + 180° = ${formatNumber(angleE)}°`,
        `Resultado: La fuerza equilibrante tiene una magnitud de ${formatNumber(E)} N y un ángulo de ${formatNumber(angleE)}°.`
      ];

      return { result: { E: formatNumber(E) }, steps };
    }
  }
];
