import { formatNumber } from '../../../../utils/formatNumber';

const G = 9.81; // Valor estándar de la gravedad en m/s²
const PI = Math.PI;

export const definitions = [
  // --- Grupo 1: Componentes de la Velocidad Inicial ---
  {
    id: 'mp-v0x',
    groupId: 'mp-componentes-velocidad',
    title: 'Calcular Componente Horizontal (v₀x)',
    formula: 'v₀x = v₀ * cos(θ)',
    variables: [
      { symbol: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados' }
    ],
    output: { symbol: 'v0x', label: 'Componente v₀x', unit: 'm/s' },
    resolve: ({ v0, theta }) => {
      const theta_rad = parseFloat(theta) * (PI / 180);
      const v0x = parseFloat(v0) * Math.cos(theta_rad);
      return { result: { v0x: formatNumber(v0x) }, steps: [`v₀x = ${v0} * cos(${theta}°) = ${formatNumber(v0x)} m/s`] };
    }
  },
  {
    id: 'mp-v0y',
    groupId: 'mp-componentes-velocidad',
    title: 'Calcular Componente Vertical (v₀y)',
    formula: 'v₀y = v₀ * sin(θ)',
    variables: [
      { symbol: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados' }
    ],
    output: { symbol: 'v0y', label: 'Componente v₀y', unit: 'm/s' },
    resolve: ({ v0, theta }) => {
      const theta_rad = parseFloat(theta) * (PI / 180);
      const v0y = parseFloat(v0) * Math.sin(theta_rad);
      return { result: { v0y: formatNumber(v0y) }, steps: [`v₀y = ${v0} * sin(${theta}°) = ${formatNumber(v0y)} m/s`] };
    }
  },
  {
    id: 'mp-v0-desde-componentes',
    groupId: 'mp-componentes-velocidad',
    title: 'Calcular Velocidad Inicial (v₀)',
    formula: 'v₀ = √(v₀x² + v₀y²)',
    variables: [
      { symbol: 'v0x', label: 'Componente v₀x', unit: 'm/s' },
      { symbol: 'v0y', label: 'Componente v₀y', unit: 'm/s' }
    ],
    output: { symbol: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s' },
    resolve: ({ v0x, v0y }) => {
      const v0 = Math.sqrt(Math.pow(parseFloat(v0x), 2) + Math.pow(parseFloat(v0y), 2));
      return { result: { v0: formatNumber(v0) }, steps: [`v₀ = √(${v0x}² + ${v0y}²) = ${formatNumber(v0)} m/s`] };
    }
  },
  {
    id: 'mp-angulo-desde-componentes',
    groupId: 'mp-componentes-velocidad',
    title: 'Calcular Ángulo (θ)',
    formula: 'θ = tan⁻¹(v₀y / v₀x)',
    variables: [
      { symbol: 'v0x', label: 'Componente v₀x', unit: 'm/s' },
      { symbol: 'v0y', label: 'Componente v₀y', unit: 'm/s' }
    ],
    output: { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados' },
    resolve: ({ v0x, v0y }) => {
      const numV0x = parseFloat(v0x);
      if (numV0x === 0) return { error: 'La componente v₀x no puede ser cero.' };
      const theta_rad = Math.atan(parseFloat(v0y) / numV0x);
      const theta = theta_rad * (180 / PI);
      return { result: { theta: formatNumber(theta) }, steps: [`θ = tan⁻¹(${v0y} / ${v0x}) = ${formatNumber(theta)}°`] };
    }
  },

  // --- Grupo 2: Altura Máxima (h_max) ---
  {
    id: 'mp-altura-maxima',
    groupId: 'mp-altura-maxima',
    title: 'Calcular Altura Máxima (hₘₐₓ)',
    formula: 'hₘₐₓ = v₀y² / (2g)',
    variables: [
      { symbol: 'v0y', label: 'Componente v₀y', unit: 'm/s' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', defaultValue: G }
    ],
    output: { symbol: 'h_max', label: 'Altura Máxima (hₘₐₓ)', unit: 'm' },
    resolve: ({ v0y, g = G }) => {
      const numG = parseFloat(g);
      if (numG === 0) return { error: 'La gravedad no puede ser cero.' };
      const h_max = Math.pow(parseFloat(v0y), 2) / (2 * numG);
      return { result: { h_max: formatNumber(h_max) }, steps: [`hₘₐₓ = ${v0y}² / (2 * ${g}) = ${formatNumber(h_max)} m`] };
    }
  },
  {
    id: 'mp-v0y-desde-altura-maxima',
    groupId: 'mp-altura-maxima',
    title: 'Calcular v₀y (desde hₘₐₓ)',
    formula: 'v₀y = √(2 * g * hₘₐₓ)',
    variables: [
      { symbol: 'h_max', label: 'Altura Máxima (hₘₐₓ)', unit: 'm' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', defaultValue: G }
    ],
    output: { symbol: 'v0y', label: 'Componente v₀y', unit: 'm/s' },
    resolve: ({ h_max, g = G }) => {
      const radicand = 2 * parseFloat(g) * parseFloat(h_max);
      if (radicand < 0) return { error: 'El producto de g y hₘₐₓ debe ser positivo.' };
      const v0y = Math.sqrt(radicand);
      return { result: { v0y: formatNumber(v0y) }, steps: [`v₀y = √(2 * ${g} * ${h_max}) = ${formatNumber(v0y)} m/s`] };
    }
  },

  // --- Grupo 3: Tiempo de Vuelo y Tiempo de Subida ---
  {
    id: 'mp-tiempo-subida',
    groupId: 'mp-tiempo-vuelo',
    title: 'Calcular Tiempo de Subida (tₛ)',
    formula: 'tₛ = v₀y / g',
    variables: [
      { symbol: 'v0y', label: 'Componente v₀y', unit: 'm/s' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', defaultValue: G }
    ],
    output: { symbol: 't_s', label: 'Tiempo de subida (tₛ)', unit: 's' },
    resolve: ({ v0y, g = G }) => {
      const numG = parseFloat(g);
      if (numG === 0) return { error: 'La gravedad no puede ser cero.' };
      const t_s = parseFloat(v0y) / numG;
      return { result: { t_s: formatNumber(t_s) }, steps: [`tₛ = ${v0y} / ${g} = ${formatNumber(t_s)} s`] };
    }
  },
  {
    id: 'mp-tiempo-vuelo',
    groupId: 'mp-tiempo-vuelo',
    title: 'Calcular Tiempo de Vuelo (tᵥ)',
    formula: 'tᵥ = 2 * v₀y / g',
    variables: [
      { symbol: 'v0y', label: 'Componente v₀y', unit: 'm/s' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', defaultValue: G }
    ],
    output: { symbol: 't_v', label: 'Tiempo de vuelo (tᵥ)', unit: 's' },
    resolve: ({ v0y, g = G }) => {
      const numG = parseFloat(g);
      if (numG === 0) return { error: 'La gravedad no puede ser cero.' };
      const t_v = 2 * parseFloat(v0y) / numG;
      return { result: { t_v: formatNumber(t_v) }, steps: [`tᵥ = 2 * ${v0y} / ${g} = ${formatNumber(t_v)} s`] };
    }
  },
  {
    id: 'mp-v0y-desde-tiempo-vuelo',
    groupId: 'mp-tiempo-vuelo',
    title: 'Calcular v₀y (desde tᵥ)',
    formula: 'v₀y = (tᵥ * g) / 2',
    variables: [
      { symbol: 't_v', label: 'Tiempo de vuelo (tᵥ)', unit: 's' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', defaultValue: G }
    ],
    output: { symbol: 'v0y', label: 'Componente v₀y', unit: 'm/s' },
    resolve: ({ t_v, g = G }) => {
      const v0y = (parseFloat(t_v) * parseFloat(g)) / 2;
      return { result: { v0y: formatNumber(v0y) }, steps: [`v₀y = (${t_v} * ${g}) / 2 = ${formatNumber(v0y)} m/s`] };
    }
  },

  // --- Grupo 4: Alcance Horizontal (R) ---
  {
    id: 'mp-alcance-horizontal',
    groupId: 'mp-alcance-horizontal',
    title: 'Calcular Alcance Horizontal (R)',
    formula: 'R = v₀² * sin(2θ) / g',
    variables: [
      { symbol: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', defaultValue: G }
    ],
    output: { symbol: 'R', label: 'Alcance (R)', unit: 'm' },
    resolve: ({ v0, theta, g = G }) => {
      const numG = parseFloat(g);
      if (numG === 0) return { error: 'La gravedad no puede ser cero.' };
      const theta_rad = parseFloat(theta) * (PI / 180);
      const R = (Math.pow(parseFloat(v0), 2) * Math.sin(2 * theta_rad)) / numG;
      return { result: { R: formatNumber(R) }, steps: [`R = ${v0}² * sin(2*${theta}°) / ${g} = ${formatNumber(R)} m`] };
    }
  },
  {
    id: 'mp-v0-desde-alcance',
    groupId: 'mp-alcance-horizontal',
    title: 'Calcular v₀ (desde Alcance)',
    formula: 'v₀ = √((R * g) / sin(2θ))',
    variables: [
      { symbol: 'R', label: 'Alcance (R)', unit: 'm' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', defaultValue: G }
    ],
    output: { symbol: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s' },
    resolve: ({ R, theta, g = G }) => {
      const theta_rad = parseFloat(theta) * (PI / 180);
      const sin2theta = Math.sin(2 * theta_rad);
      if (sin2theta === 0) return { error: 'El sin(2θ) no puede ser cero (evite ángulos de 0° y 90°).' };
      const radicand = (parseFloat(R) * parseFloat(g)) / sin2theta;
      if (radicand < 0) return { error: 'El valor dentro de la raíz debe ser positivo.' };
      const v0 = Math.sqrt(radicand);
      return { result: { v0: formatNumber(v0) }, steps: [`v₀ = √(${R} * ${g} / sin(2*${theta}°)) = ${formatNumber(v0)} m/s`] };
    }
  },
  {
    id: 'mp-angulo-desde-alcance',
    groupId: 'mp-alcance-horizontal',
    title: 'Calcular Ángulo (θ) (desde Alcance)',
    formula: 'θ = ½ * sin⁻¹(R * g / v₀²)',
    variables: [
      { symbol: 'R', label: 'Alcance (R)', unit: 'm' },
      { symbol: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', defaultValue: G }
    ],
    output: { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados' },
    resolve: ({ R, v0, g = G }) => {
      const numV0 = parseFloat(v0);
      if (numV0 === 0) return { error: 'La velocidad inicial no puede ser cero.' };
      const sin2theta_val = (parseFloat(R) * parseFloat(g)) / Math.pow(numV0, 2);
      if (sin2theta_val < -1 || sin2theta_val > 1) return { error: 'No es posible alcanzar esa distancia con la velocidad dada.' };
      const angle2_rad = Math.asin(sin2theta_val);
      const theta1 = (angle2_rad * (180 / PI)) / 2;
      const theta2 = 90 - theta1;
      const resultText = `θ₁ = ${formatNumber(theta1)}°, θ₂ = ${formatNumber(theta2)}°`;
      return { result: { theta: resultText }, steps: [`sin(2θ) = (${R}*${g})/${v0}² = ${formatNumber(sin2theta_val)}`, `2θ = sin⁻¹(${formatNumber(sin2theta_val)})`, `θ₁ = ${formatNumber(theta1)}°`, `θ₂ = 90° - θ₁ = ${formatNumber(theta2)}°`]};
    }
  },

  // --- Grupo 5: Posición y Velocidad en el tiempo t ---
  {
    id: 'mp-posicion-x',
    groupId: 'mp-cinematica-instantanea',
    title: 'Calcular Posición Horizontal x(t)',
    formula: 'x(t) = v₀x * t',
    variables: [
      { symbol: 'v0x', label: 'Componente v₀x', unit: 'm/s' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's' }
    ],
    output: { symbol: 'x', label: 'Posición x', unit: 'm' },
    resolve: ({ v0x, t }) => {
      const x = parseFloat(v0x) * parseFloat(t);
      return { result: { x: formatNumber(x) }, steps: [`x(${t}) = ${v0x} * ${t} = ${formatNumber(x)} m`] };
    }
  },
  {
    id: 'mp-posicion-y',
    groupId: 'mp-cinematica-instantanea',
    title: 'Calcular Posición Vertical y(t)',
    formula: 'y(t) = v₀y*t - ½gt²',
    variables: [
      { symbol: 'v0y', label: 'Componente v₀y', unit: 'm/s' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', defaultValue: G }
    ],
    output: { symbol: 'y', label: 'Posición y', unit: 'm' },
    resolve: ({ v0y, t, g = G }) => {
      const y = parseFloat(v0y) * parseFloat(t) - 0.5 * parseFloat(g) * Math.pow(parseFloat(t), 2);
      return { result: { y: formatNumber(y) }, steps: [`y(${t}) = ${v0y}*${t} - ½*${g}*${t}² = ${formatNumber(y)} m`] };
    }
  },
  {
    id: 'mp-velocidad-vy',
    groupId: 'mp-cinematica-instantanea',
    title: 'Calcular Velocidad Vertical vy(t)',
    formula: 'vy(t) = v₀y - g*t',
    variables: [
      { symbol: 'v0y', label: 'Componente v₀y', unit: 'm/s' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', defaultValue: G }
    ],
    output: { symbol: 'vy', label: 'Velocidad vy', unit: 'm/s' },
    resolve: ({ v0y, t, g = G }) => {
      const vy = parseFloat(v0y) - parseFloat(g) * parseFloat(t);
      return { result: { vy: formatNumber(vy) }, steps: [`vy(${t}) = ${v0y} - ${g}*${t} = ${formatNumber(vy)} m/s`] };
    }
  },
  {
    id: 'mp-velocidad-total',
    groupId: 'mp-cinematica-instantanea',
    title: 'Calcular Magnitud Velocidad v(t)',
    formula: 'v(t) = √(vₓ² + vᵧ²)',
    variables: [
      { symbol: 'vx', label: 'Velocidad vₓ (constante)', unit: 'm/s' },
      { symbol: 'vy', label: 'Velocidad vᵧ en t', unit: 'm/s' }
    ],
    output: { symbol: 'v', label: 'Magnitud de Velocidad', unit: 'm/s' },
    resolve: ({ vx, vy }) => {
      const v = Math.sqrt(Math.pow(parseFloat(vx), 2) + Math.pow(parseFloat(vy), 2));
      return { result: { v: formatNumber(v) }, steps: [`v = √(${vx}² + ${vy}²) = ${formatNumber(v)} m/s`] };
    }
  },
  
  // --- Grupo 6: Ecuación de la Trayectoria ---
  {
    id: 'mp-trayectoria-y-de-x',
    groupId: 'mp-trayectoria',
    title: 'Calcular y(x) de la Trayectoria',
    formula: 'y(x) = x*tan(θ) - (g*x²) / (2*v₀²*cos²(θ))',
    variables: [
      { symbol: 'x', label: 'Posición horizontal (x)', unit: 'm' },
      { symbol: 'v0', label: 'Velocidad inicial (v₀)', unit: 'm/s' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', defaultValue: G }
    ],
    output: { symbol: 'y', label: 'Posición vertical (y)', unit: 'm' },
    resolve: ({ x, v0, theta, g = G }) => {
      const theta_rad = parseFloat(theta) * (PI / 180);
      const cos_theta = Math.cos(theta_rad);
      const numV0 = parseFloat(v0);
      if (numV0 === 0 || cos_theta === 0) return { error: 'v₀ y cos(θ) no pueden ser cero.' };
      const y = parseFloat(x) * Math.tan(theta_rad) - (parseFloat(g) * Math.pow(parseFloat(x), 2)) / (2 * Math.pow(numV0, 2) * Math.pow(cos_theta, 2));
      return { result: { y: formatNumber(y) }, steps: [`y(${x}) = ${x}*tan(${theta}) - ... = ${formatNumber(y)} m`] };
    }
  },

  // --- Grupo 7: Lanzamiento Horizontal ---
  {
    id: 'mp-lanzamiento-horizontal',
    groupId: 'mp-lanzamiento-horizontal',
    title: 'Calcular Alcance en Lanzamiento Horizontal',
    formula: 'x = v₀x * √(2h / g)',
    variables: [
      { symbol: 'v0x', label: 'Velocidad horizontal inicial (v₀x)', unit: 'm/s' },
      { symbol: 'h', label: 'Altura inicial (h)', unit: 'm' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', defaultValue: G }
    ],
    output: { symbol: 'x', label: 'Alcance horizontal (x)', unit: 'm' },
    resolve: ({ v0x, h, g = G }) => {
      const numG = parseFloat(g);
      if (numG <= 0) return { error: 'La gravedad debe ser positiva.' };
      const hNum = parseFloat(h);
      if (hNum < 0) return { error: 'La altura no puede ser negativa.' };
      const t = Math.sqrt((2 * hNum) / numG);
      const x = parseFloat(v0x) * t;
      return { 
        result: { x: formatNumber(x) }, 
        steps: [
          `1. Calcular tiempo de caída (t): t = √(2 * ${hNum}m / ${numG}m/s²) = ${formatNumber(t)} s`,
          `2. Calcular alcance (x): x = ${v0x}m/s * ${formatNumber(t)}s = ${formatNumber(x)} m`
        ] 
      };
    }
  }
];
