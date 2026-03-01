import { formatNumber } from '../../../../utils/formatNumber.js';

const g = 9.81; // Gravedad (m/s²)

export const definitions = [
  // Grupo 1: Función Lagrangiana
  {
    id: 'lagrangiano',
    groupId: 'lagrangiano',
    title: 'Función Lagrangiana',
    isFundamental: true,
    formula: String.raw`L = T - V`,
    variables: [
      { symbol: 'T', label: 'Energía cinética (T)', unit: 'J' },
      { symbol: 'V', label: 'Energía potencial (V)', unit: 'J' }
    ],
    output: { symbol: 'L', label: 'Lagrangiano (L)', unit: 'J' },
    resolve: ({ T, V }) => {
      const numT = parseFloat(T);
      const numV = parseFloat(V);
      const L = numT - numV;
      
      return {
        result: { L: formatNumber(L) },
        steps: [
          `Lagrangiano: L = T - V`,
          `L = ${numT} - ${numV}`,
          `L = ${formatNumber(L)} J`
        ]
      };
    }
  },

  // Grupo 2: Energía Cinética en Coordenadas Generalizadas
  {
    id: 'energia-cinetica-generalizada',
    groupId: 'energia-cinetica',
    title: 'Energía Cinética (Coordenadas Generalizadas)',
    isFundamental: true,
    formula: String.raw`T = \frac{1}{2}m\dot{q}^2`,
    variables: [
      { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
      { symbol: 'dq', label: 'Velocidad generalizada (q̇)', unit: 'm/s o rad/s' }
    ],
    output: { symbol: 'T', label: 'Energía cinética (T)', unit: 'J' },
    resolve: ({ m, dq }) => {
      const numM = parseFloat(m);
      const numDq = parseFloat(dq);
      const T = 0.5 * numM * numDq * numDq;
      
      return {
        result: { T: formatNumber(T) },
        steps: [
          `T = ½m(q̇)²`,
          `T = ½(${numM})(${numDq})²`,
          `T = ${formatNumber(T)} J`
        ]
      };
    }
  },

  // Grupo 3: Péndulo Simple - Lagrangiano
  {
    id: 'pendulo-lagrangiano',
    groupId: 'pendulo-simple',
    title: 'Lagrangiano del Péndulo Simple',
    isFundamental: true,
    formula: String.raw`L = \frac{1}{2}mL^2\dot{\theta}^2 + mgL\cos\theta`,
    variables: [
      { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
      { symbol: 'L_pendulo', label: 'Longitud del péndulo (L)', unit: 'm' },
      { symbol: 'dtheta', label: 'Velocidad angular (θ̇)', unit: 'rad/s' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'rad' }
    ],
    output: { symbol: 'L_lag', label: 'Lagrangiano (L)', unit: 'J' },
    resolve: ({ m, L_pendulo, dtheta, theta }) => {
      const numM = parseFloat(m);
      const numL = parseFloat(L_pendulo);
      const numDtheta = parseFloat(dtheta);
      const numTheta = parseFloat(theta);
      
      const T = 0.5 * numM * numL * numL * numDtheta * numDtheta;
      const V = -numM * g * numL * Math.cos(numTheta);
      const L_lag = T - V;
      
      return {
        result: { L_lag: formatNumber(L_lag) },
        steps: [
          `Energía cinética: T = ½mL²θ̇² = ${formatNumber(T)} J`,
          `Energía potencial: V = -mgL cos(θ) = ${formatNumber(V)} J`,
          `Lagrangiano: L = T - V`,
          `L = ${formatNumber(T)} - (${formatNumber(V)})`,
          `L = ${formatNumber(L_lag)} J`
        ]
      };
    }
  },

  // Grupo 4: Momento Generalizado
  {
    id: 'momento-generalizado',
    groupId: 'momento-generalizado',
    title: 'Momento Generalizado',
    isFundamental: true,
    formula: String.raw`p_i = \frac{\partial L}{\partial \dot{q}_i}`,
    variables: [
      { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
      { symbol: 'dq', label: 'Velocidad generalizada (q̇)', unit: 'm/s' }
    ],
    output: { symbol: 'p', label: 'Momento generalizado (p)', unit: 'kg·m/s' },
    resolve: ({ m, dq }) => {
      const numM = parseFloat(m);
      const numDq = parseFloat(dq);
      const p = numM * numDq;
      
      return {
        result: { p: formatNumber(p) },
        steps: [
          `Para L = ½m(q̇)² - V(q)`,
          `p = ∂L/∂q̇ = m·q̇`,
          `p = ${numM} × ${numDq}`,
          `p = ${formatNumber(p)} kg·m/s`
        ]
      };
    }
  },

  // Grupo 5: Oscilador Armónico - Lagrangiano
  {
    id: 'oscilador-lagrangiano',
    groupId: 'oscilador-armonico',
    title: 'Lagrangiano del Oscilador Armónico',
    isFundamental: true,
    formula: String.raw`L = \frac{1}{2}m\dot{x}^2 - \frac{1}{2}kx^2`,
    variables: [
      { symbol: 'm', label: 'Masa (m)', unit: 'kg' },
      { symbol: 'dx', label: 'Velocidad (ẋ)', unit: 'm/s' },
      { symbol: 'k', label: 'Constante del resorte (k)', unit: 'N/m' },
      { symbol: 'x', label: 'Desplazamiento (x)', unit: 'm' }
    ],
    output: { symbol: 'L_osc', label: 'Lagrangiano (L)', unit: 'J' },
    resolve: ({ m, dx, k, x }) => {
      const numM = parseFloat(m);
      const numDx = parseFloat(dx);
      const numK = parseFloat(k);
      const numX = parseFloat(x);
      
      const T = 0.5 * numM * numDx * numDx;
      const V = 0.5 * numK * numX * numX;
      const L_osc = T - V;
      
      return {
        result: { L_osc: formatNumber(L_osc) },
        steps: [
          `Energía cinética: T = ½mẋ² = ${formatNumber(T)} J`,
          `Energía potencial: V = ½kx² = ${formatNumber(V)} J`,
          `Lagrangiano: L = T - V`,
          `L = ${formatNumber(T)} - ${formatNumber(V)}`,
          `L = ${formatNumber(L_osc)} J`
        ]
      };
    }
  },

  // Grupo 6: Frecuencia del Oscilador desde Lagrangiano
  {
    id: 'frecuencia-oscilador',
    groupId: 'oscilador-armonico',
    title: 'Frecuencia Angular del Oscilador',
    isFundamental: false,
    formula: String.raw`\omega = \sqrt{\frac{k}{m}}`,
    variables: [
      { symbol: 'k', label: 'Constante del resorte (k)', unit: 'N/m' },
      { symbol: 'm', label: 'Masa (m)', unit: 'kg' }
    ],
    output: { symbol: 'omega', label: 'Frecuencia angular (ω)', unit: 'rad/s' },
    resolve: ({ k, m }) => {
      const numK = parseFloat(k);
      const numM = parseFloat(m);
      
      if (numM === 0) {
        return { error: 'La masa no puede ser cero.' };
      }
      
      const omega = Math.sqrt(numK / numM);
      const f = omega / (2 * Math.PI);
      const T = 1 / f;
      
      return {
        result: { omega: formatNumber(omega) },
        steps: [
          `ω = √(k/m)`,
          `ω = √(${numK}/${numM})`,
          `ω = ${formatNumber(omega)} rad/s`,
          `Frecuencia: f = ω/(2π) = ${formatNumber(f)} Hz`,
          `Período: T = 1/f = ${formatNumber(T)} s`
        ]
      };
    }
  }
];
