import { formatNumber } from '../../../../utils/formatNumber';

const G = 9.81; // Valor estándar de la gravedad en m/s²

export const definitions = [
  // --- Grupo 1: Segunda Ley de Newton ---
  {
    id: 'newton-fuerza',
    groupId: 'newton-second-law',
    title: 'Calcular Fuerza (F = ma)',
    formula: 'F = m * a',
    variables: [
      { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
      { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' }
    ],
    output: { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
    resolve: ({ m, a }) => {
      const F = parseFloat(m) * parseFloat(a);
      return { result: { F: formatNumber(F) }, steps: [`F = ${m} * ${a} = ${formatNumber(F)} N`] };
    }
  },
  {
    id: 'newton-masa',
    groupId: 'newton-second-law',
    title: 'Calcular Masa (m = F/a)',
    formula: 'm = F / a',
    variables: [
      { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
      { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' }
    ],
    output: { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
    resolve: ({ F, a }) => {
      const accel = parseFloat(a);
      if (accel === 0) return { error: "La aceleración no puede ser cero." };
      const m = parseFloat(F) / accel;
      return { result: { m: formatNumber(m) }, steps: [`m = ${F} / ${a} = ${formatNumber(m)} kg`] };
    }
  },
  {
    id: 'newton-aceleracion',
    groupId: 'newton-second-law',
    title: 'Calcular Aceleración (a = F/m)',
    formula: 'a = F / m',
    variables: [
      { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
      { symbol: 'm', label: 'Masa (m)', unit: 'kg' }
    ],
    output: { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' },
    resolve: ({ F, m }) => {
      const mass = parseFloat(m);
      if (mass === 0) return { error: "La masa no puede ser cero." };
      const a = parseFloat(F) / mass;
      return { result: { a: formatNumber(a) }, steps: [`a = ${F} / ${m} = ${formatNumber(a)} m/s²`] };
    }
  },

  // --- Grupo 2: Peso y Componentes de Fuerza ---
  {
    id: 'newton-peso',
    groupId: 'newton-weight',
    title: 'Calcular Peso (P = mg)',
    formula: 'P = m * g',
    variables: [
      { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', defaultValue: G }
    ],
    output: { symbol: 'P', label: 'Peso (P)', unit: 'N' },
    resolve: ({ m, g = G }) => {
      const P = parseFloat(m) * parseFloat(g);
      return { result: { P: formatNumber(P) }, steps: [`P = ${m} * ${g} = ${formatNumber(P)} N`] };
    }
  },
  {
    id: 'newton-fuerza-paralela',
    groupId: 'newton-weight',
    title: 'Componente Paralela (F∥)',
    formula: 'F∥ = mg * sin(θ)',
    variables: [
      { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', defaultValue: G }
    ],
    output: { symbol: 'F_par', label: 'Fuerza Paralela (F∥)', unit: 'N' },
    resolve: ({ m, theta, g = G }) => {
      const theta_rad = parseFloat(theta) * (Math.PI / 180);
      const F_par = parseFloat(m) * parseFloat(g) * Math.sin(theta_rad);
      return { result: { F_par: formatNumber(F_par) }, steps: [`F∥ = ${m} * ${g} * sin(${theta}°) = ${formatNumber(F_par)} N`] };
    }
  },
  {
    id: 'newton-fuerza-normal',
    groupId: 'newton-weight',
    title: 'Componente Normal (N)',
    formula: 'N = mg * cos(θ)',
    variables: [
      { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', defaultValue: G }
    ],
    output: { symbol: 'N', label: 'Fuerza Normal (N)', unit: 'N' },
    resolve: ({ m, theta, g = G }) => {
      const theta_rad = parseFloat(theta) * (Math.PI / 180);
      const N = parseFloat(m) * parseFloat(g) * Math.cos(theta_rad);
      return { result: { N: formatNumber(N) }, steps: [`N = ${m} * ${g} * cos(${theta}°) = ${formatNumber(N)} N`] };
    }
  },

  // --- Grupo 3: Despejes en Plano Inclinado ---
  {
    id: 'newton-masa-desde-peso',
    groupId: 'newton-inclined-plane',
    title: 'Calcular Masa (desde Peso)',
    formula: 'm = P / g',
    variables: [
      { symbol: 'P', label: 'Peso (P)', unit: 'N' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', defaultValue: G }
    ],
    output: { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
    resolve: ({ P, g = G }) => {
      const grav = parseFloat(g);
      if (grav === 0) return { error: "La gravedad no puede ser cero." };
      const m = parseFloat(P) / grav;
      return { result: { m: formatNumber(m) }, steps: [`m = ${P} / ${g} = ${formatNumber(m)} kg`] };
    }
  },
  {
    id: 'newton-masa-desde-fparalela',
    groupId: 'newton-inclined-plane',
    title: 'Calcular Masa (desde F∥)',
    formula: 'm = F∥ / (g * sin(θ))',
    variables: [
      { symbol: 'F_par', label: 'Fuerza Paralela (F∥)', unit: 'N' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', defaultValue: G }
    ],
    output: { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
    resolve: ({ F_par, theta, g = G }) => {
      const theta_rad = parseFloat(theta) * (Math.PI / 180);
      const divisor = parseFloat(g) * Math.sin(theta_rad);
      if (divisor === 0) return { error: "El denominador (g * sin(θ)) no puede ser cero." };
      const m = parseFloat(F_par) / divisor;
      return { result: { m: formatNumber(m) }, steps: [`m = ${F_par} / (${g} * sin(${theta}°)) = ${formatNumber(m)} kg`] };
    }
  },
  {
    id: 'newton-masa-desde-normal',
    groupId: 'newton-inclined-plane',
    title: 'Calcular Masa (desde N)',
    formula: 'm = N / (g * cos(θ))',
    variables: [
      { symbol: 'N', label: 'Fuerza Normal (N)', unit: 'N' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', defaultValue: G }
    ],
    output: { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
    resolve: ({ N, theta, g = G }) => {
      const theta_rad = parseFloat(theta) * (Math.PI / 180);
      const divisor = parseFloat(g) * Math.cos(theta_rad);
      if (divisor === 0) return { error: "El denominador (g * cos(θ)) no puede ser cero." };
      const m = parseFloat(N) / divisor;
      return { result: { m: formatNumber(m) }, steps: [`m = ${N} / (${g} * cos(${theta}°)) = ${formatNumber(m)} kg`] };
    }
  },
  {
    id: 'newton-angulo-desde-fparalela',
    groupId: 'newton-inclined-plane',
    title: 'Calcular Ángulo (desde F∥)',
    formula: 'θ = asin(F∥ / mg)',
    variables: [
      { symbol: 'F_par', label: 'Fuerza Paralela (F∥)', unit: 'N' },
      { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', defaultValue: G }
    ],
    output: { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados' },
    resolve: ({ F_par, m, g = G }) => {
      const divisor = parseFloat(m) * parseFloat(g);
      if (divisor === 0) return { error: "El producto mg no puede ser cero." };
      const ratio = parseFloat(F_par) / divisor;
      if (ratio < -1 || ratio > 1) return { error: "Argumento de asin() fuera de rango [-1, 1]." };
      const theta_rad = Math.asin(ratio);
      const theta = theta_rad * (180 / Math.PI);
      return { result: { theta: formatNumber(theta) }, steps: [`θ = asin(${F_par} / (${m}*${g})) = ${formatNumber(theta)}°`] };
    }
  },
  {
    id: 'newton-angulo-desde-normal',
    groupId: 'newton-inclined-plane',
    title: 'Calcular Ángulo (desde N)',
    formula: 'θ = acos(N / mg)',
    variables: [
      { symbol: 'N', label: 'Fuerza Normal (N)', unit: 'N' },
      { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', defaultValue: G }
    ],
    output: { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados' },
    resolve: ({ N, m, g = G }) => {
      const divisor = parseFloat(m) * parseFloat(g);
      if (divisor === 0) return { error: "El producto mg no puede ser cero." };
      const ratio = parseFloat(N) / divisor;
      if (ratio < -1 || ratio > 1) return { error: "Argumento de acos() fuera de rango [-1, 1]." };
      const theta_rad = Math.acos(ratio);
      const theta = theta_rad * (180 / Math.PI);
      return { result: { theta: formatNumber(theta) }, steps: [`θ = acos(${N} / (${m}*${g})) = ${formatNumber(theta)}°`] };
    }
  }
];
