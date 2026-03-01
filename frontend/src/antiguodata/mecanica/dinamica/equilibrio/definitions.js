
import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  // --- Grupo 1: Momento de Fuerza (Torque) ---
  {
    id: 'torque-calcular',
    groupId: 'torque-concepts',
    title: 'Calcular Momento (τ = F * r * sin(θ))',
    formula: 'τ = F * r * sin(θ)',
    variables: [
      { symbol: 'F', label: 'Fuerza aplicada', unit: 'N' },
      { symbol: 'r', label: 'Distancia al punto de giro (radio)', unit: 'm' },
      { symbol: 'theta', label: 'Ángulo de aplicación de la fuerza', unit: 'grados', defaultValue: 90 }
    ],
    output: { symbol: 'τ', label: 'Momento de fuerza (Torque)', unit: 'N·m' },
    resolve: ({ F, r, theta = 90 }) => {
      const theta_rad = parseFloat(theta) * (Math.PI / 180);
      const torque = parseFloat(F) * parseFloat(r) * Math.sin(theta_rad);
      return { result: { 'τ': formatNumber(torque) }, steps: [`τ = ${F} * ${r} * sin(${theta}°) = ${formatNumber(torque)} N·m`] };
    }
  },
  {
    id: 'torque-fuerza',
    groupId: 'torque-concepts',
    title: 'Calcular Fuerza (F = τ / (r * sin(θ)))',
    formula: 'F = τ / (r * sin(θ))',
    variables: [
      { symbol: 'τ', label: 'Momento de fuerza (Torque)', unit: 'N·m' },
      { symbol: 'r', label: 'Distancia al punto de giro (radio)', unit: 'm' },
      { symbol: 'theta', label: 'Ángulo de aplicación', unit: 'grados', defaultValue: 90 }
    ],
    output: { symbol: 'F', label: 'Fuerza aplicada', unit: 'N' },
    resolve: ({ 'τ': torque, r, theta = 90 }) => {
      const theta_rad = parseFloat(theta) * (Math.PI / 180);
      const denominator = parseFloat(r) * Math.sin(theta_rad);
      if (denominator === 0) return { error: "El denominador (r * sin(θ)) no puede ser cero." };
      const F = parseFloat(torque) / denominator;
      return { result: { F: formatNumber(F) }, steps: [`F = ${torque} / (${r} * sin(${theta}°)) = ${formatNumber(F)} N`] };
    }
  },
  {
    id: 'torque-distancia',
    groupId: 'torque-concepts',
    title: 'Calcular Distancia (r = τ / (F * sin(θ)))',
    formula: 'r = τ / (F * sin(θ))',
    variables: [
      { symbol: 'τ', label: 'Momento de fuerza (Torque)', unit: 'N·m' },
      { symbol: 'F', label: 'Fuerza aplicada', unit: 'N' },
      { symbol: 'theta', label: 'Ángulo de aplicación', unit: 'grados', defaultValue: 90 }
    ],
    output: { symbol: 'r', label: 'Distancia (radio)', unit: 'm' },
    resolve: ({ 'τ': torque, F, theta = 90 }) => {
      const theta_rad = parseFloat(theta) * (Math.PI / 180);
      const denominator = parseFloat(F) * Math.sin(theta_rad);
      if (denominator === 0) return { error: "El denominador (F * sin(θ)) no puede ser cero." };
      const r = parseFloat(torque) / denominator;
      return { result: { r: formatNumber(r) }, steps: [`r = ${torque} / (${F} * sin(${theta}°)) = ${formatNumber(r)} m`] };
    }
  },
  {
    id: 'torque-angulo',
    groupId: 'torque-concepts',
    title: 'Calcular Ángulo (θ = asin(τ / (F * r)))',
    formula: 'θ = asin(τ / (F * r))',
    variables: [
      { symbol: 'τ', label: 'Momento de fuerza (Torque)', unit: 'N·m' },
      { symbol: 'F', label: 'Fuerza aplicada', unit: 'N' },
      { symbol: 'r', label: 'Distancia (radio)', unit: 'm' }
    ],
    output: { symbol: 'theta', label: 'Ángulo de aplicación', unit: 'grados' },
    resolve: ({ 'τ': torque, F, r }) => {
      const denominator = parseFloat(F) * parseFloat(r);
      if (denominator === 0) return { error: "El producto F*r no puede ser cero." };
      const ratio = parseFloat(torque) / denominator;
      if (ratio < -1 || ratio > 1) return { error: "Argumento de asin() fuera del rango [-1, 1]." };
      const theta_rad = Math.asin(ratio);
      const theta = theta_rad * (180 / Math.PI);
      return { result: { theta: formatNumber(theta) }, steps: [`θ = asin(${torque} / (${F} * ${r})) = ${formatNumber(theta)}°`] };
    }
  },

  // --- Grupo 2: Condición de Equilibrio Rotacional (Palancas) ---
  {
    id: 'equilibrio-palanca-f1',
    groupId: 'rotational-equilibrium',
    title: 'Calcular Fuerza 1 (F₁ = F₂ * r₂ / r₁)',
    formula: 'F₁ * r₁ = F₂ * r₂',
    description: 'Para que un objeto esté en equilibrio rotacional, la suma de los momentos en sentido horario debe ser igual a la suma de los momentos en sentido antihorario.',
    variables: [
      { symbol: 'F2', label: 'Fuerza 2 (Resistencia)', unit: 'N' },
      { symbol: 'r2', label: 'Distancia de F₂ al fulcro', unit: 'm' },
      { symbol: 'r1', label: 'Distancia de F₁ al fulcro', unit: 'm' }
    ],
    output: { symbol: 'F1', label: 'Fuerza 1 (Esfuerzo)', unit: 'N' },
    resolve: ({ F2, r2, r1 }) => {
      const r_1 = parseFloat(r1);
      if (r_1 === 0) return { error: "La distancia r₁ no puede ser cero." };
      const F1 = (parseFloat(F2) * parseFloat(r2)) / r_1;
      return { result: { F1: formatNumber(F1) }, steps: [`F₁ = (${F2} * ${r2}) / ${r1} = ${formatNumber(F1)} N`] };
    }
  },
  {
    id: 'equilibrio-palanca-r1',
    groupId: 'rotational-equilibrium',
    title: 'Calcular Distancia 1 (r₁ = F₂ * r₂ / F₁)',
    formula: 'F₁ * r₁ = F₂ * r₂',
    variables: [
      { symbol: 'F1', label: 'Fuerza 1 (Esfuerzo)', unit: 'N' },
      { symbol: 'F2', label: 'Fuerza 2 (Resistencia)', unit: 'N' },
      { symbol: 'r2', label: 'Distancia de F₂ al fulcro', unit: 'm' }
    ],
    output: { symbol: 'r1', label: 'Distancia de F₁ al fulcro', unit: 'm' },
    resolve: ({ F1, F2, r2 }) => {
      const F_1 = parseFloat(F1);
      if (F_1 === 0) return { error: "La fuerza F₁ no puede ser cero." };
      const r1 = (parseFloat(F2) * parseFloat(r2)) / F_1;
      return { result: { r1: formatNumber(r1) }, steps: [`r₁ = (${F2} * ${r2}) / ${F1} = ${formatNumber(r1)} m`] };
    }
  }
];
