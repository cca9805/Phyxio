
import { formatNumber } from '../../../../utils/formatNumber';

const G = 9.81; // Valor estándar de la gravedad en m/s²

export const definitions = [
  // --- Grupo 1: Peso (W = mg) ---
  {
    id: 'diagramas-peso',
    groupId: 'diagramas-peso',
    title: 'Calcular Peso (W = mg)',
    formula: 'W = m * g',
    variables: [
      { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', defaultValue: G }
    ],
    output: { symbol: 'W', label: 'Peso (W)', unit: 'N' },
    resolve: ({ m, g = G }) => {
      const W = parseFloat(m) * parseFloat(g);
      return { result: { W: formatNumber(W) }, steps: [`W = ${m} * ${g} = ${formatNumber(W)} N`] };
    }
  },
  {
    id: 'diagramas-masa-desde-peso',
    groupId: 'diagramas-peso',
    title: 'Calcular Masa (m = W/g)',
    formula: 'm = W / g',
    variables: [
      { symbol: 'W', label: 'Peso (W)', unit: 'N' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', defaultValue: G }
    ],
    output: { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
    resolve: ({ W, g = G }) => {
      const grav = parseFloat(g);
      if (grav === 0) return { error: "La gravedad no puede ser cero." };
      const m = parseFloat(W) / grav;
      return { result: { m: formatNumber(m) }, steps: [`m = ${W} / ${g} = ${formatNumber(m)} kg`] };
    }
  },
  {
    id: 'diagramas-gravedad-desde-peso',
    groupId: 'diagramas-peso',
    title: 'Calcular Gravedad (g = W/m)',
    formula: 'g = W / m',
    variables: [
      { symbol: 'W', label: 'Peso (W)', unit: 'N' },
      { symbol: 'm', label: 'Masa (m)', unit: 'kg' }
    ],
    output: { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²' },
    resolve: ({ W, m }) => {
      const mass = parseFloat(m);
      if (mass === 0) return { error: "La masa no puede ser cero." };
      const g = parseFloat(W) / mass;
      return { result: { g: formatNumber(g) }, steps: [`g = ${W} / ${m} = ${formatNumber(g)} m/s²`] };
    }
  },

  // --- Grupo 2: Componentes del Peso en Plano Inclinado ---
  {
    id: 'diagramas-componente-paralela',
    groupId: 'diagramas-componentes',
    title: 'Componente Paralela (W∥)',
    formula: 'W∥ = W * sin(θ)',
    variables: [
      { symbol: 'W', label: 'Peso (W)', unit: 'N' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados' }
    ],
    output: { symbol: 'W_par', label: 'Componente Paralela (W∥)', unit: 'N' },
    resolve: ({ W, theta }) => {
      const theta_rad = parseFloat(theta) * (Math.PI / 180);
      const W_par = parseFloat(W) * Math.sin(theta_rad);
      return { result: { W_par: formatNumber(W_par) }, steps: [`W∥ = ${W} * sin(${theta}°) = ${formatNumber(W_par)} N`] };
    }
  },
  {
    id: 'diagramas-componente-perpendicular',
    groupId: 'diagramas-componentes',
    title: 'Componente Perpendicular (W⊥)',
    formula: 'W⊥ = W * cos(θ)',
    variables: [
      { symbol: 'W', label: 'Peso (W)', unit: 'N' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados' }
    ],
    output: { symbol: 'W_perp', label: 'Componente Perpendicular (W⊥)', unit: 'N' },
    resolve: ({ W, theta }) => {
      const theta_rad = parseFloat(theta) * (Math.PI / 180);
      const W_perp = parseFloat(W) * Math.cos(theta_rad);
      return { result: { W_perp: formatNumber(W_perp) }, steps: [`W⊥ = ${W} * cos(${theta}°) = ${formatNumber(W_perp)} N`] };
    }
  },
  {
    id: 'diagramas-peso-desde-paralela',
    groupId: 'diagramas-componentes',
    title: 'Calcular Peso (desde W∥)',
    formula: 'W = W∥ / sin(θ)',
    variables: [
      { symbol: 'W_par', label: 'Componente Paralela (W∥)', unit: 'N' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados' }
    ],
    output: { symbol: 'W', label: 'Peso (W)', unit: 'N' },
    resolve: ({ W_par, theta }) => {
      const theta_rad = parseFloat(theta) * (Math.PI / 180);
      const divisor = Math.sin(theta_rad);
      if (divisor === 0) return { error: "El seno del ángulo no puede ser cero." };
      const W = parseFloat(W_par) / divisor;
      return { result: { W: formatNumber(W) }, steps: [`W = ${W_par} / sin(${theta}°) = ${formatNumber(W)} N`] };
    }
  },
  {
    id: 'diagramas-peso-desde-perpendicular',
    groupId: 'diagramas-componentes',
    title: 'Calcular Peso (desde W⊥)',
    formula: 'W = W⊥ / cos(θ)',
    variables: [
      { symbol: 'W_perp', label: 'Componente Perpendicular (W⊥)', unit: 'N' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados' }
    ],
    output: { symbol: 'W', label: 'Peso (W)', unit: 'N' },
    resolve: ({ W_perp, theta }) => {
      const theta_rad = parseFloat(theta) * (Math.PI / 180);
      const divisor = Math.cos(theta_rad);
      if (divisor === 0) return { error: "El coseno del ángulo no puede ser cero." };
      const W = parseFloat(W_perp) / divisor;
      return { result: { W: formatNumber(W) }, steps: [`W = ${W_perp} / cos(${theta}°) = ${formatNumber(W)} N`] };
    }
  },
   {
    id: 'diagramas-angulo-desde-componentes',
    groupId: 'diagramas-componentes',
    title: 'Calcular Ángulo (desde W∥ y W)',
    formula: 'θ = asin(W∥ / W)',
    variables: [
      { symbol: 'W_par', label: 'Componente Paralela (W∥)', unit: 'N' },
      { symbol: 'W', label: 'Peso (W)', unit: 'N' }
    ],
    output: { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados' },
    resolve: ({ W_par, W }) => {
      const W_val = parseFloat(W);
      if (W_val === 0) return { error: "El peso no puede ser cero." };
      const ratio = parseFloat(W_par) / W_val;
      if (ratio < -1 || ratio > 1) return { error: "Argumento de asin() fuera de rango [-1, 1]." };
      const theta_rad = Math.asin(ratio);
      const theta = theta_rad * (180 / Math.PI);
      return { result: { theta: formatNumber(theta) }, steps: [`θ = asin(${W_par} / ${W}) = ${formatNumber(theta)}°`] };
    }
  }
];
