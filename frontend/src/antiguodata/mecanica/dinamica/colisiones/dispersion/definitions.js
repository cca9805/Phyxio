import { formatNumber } from '../../../../../utils/formatNumber';

export const definitions = [
  // --- Grupo 1: Ángulo de Dispersión ---
  {
    id: 'disp-angulo',
    groupId: 'dispersion-angulo',
    title: 'Ángulo de Dispersión',
    formula: 'θ = arctan(vᵧ/vₓ)',
    variables: [
      { symbol: 'v_x', label: 'Velocidad x (vₓ)', unit: 'm/s' },
      { symbol: 'v_y', label: 'Velocidad y (vᵧ)', unit: 'm/s' }
    ],
    output: { symbol: 'theta', label: 'Ángulo (θ)', unit: '°' },
    resolve: ({ v_x, v_y }) => {
      const theta = Math.atan2(parseFloat(v_y), parseFloat(v_x)) * (180 / Math.PI);
      return { 
        result: { theta: formatNumber(theta) }, 
        steps: [`θ = arctan(${v_y}/${v_x}) = ${formatNumber(theta)}°`] 
      };
    }
  },

  // --- Grupo 2: Parámetro de Impacto ---
  {
    id: 'disp-parametro',
    groupId: 'dispersion-parametro',
    title: 'Parámetro de Impacto',
    formula: 'b = d·sin(α)',
    variables: [
      { symbol: 'd', label: 'Distancia (d)', unit: 'm' },
      { symbol: 'alpha', label: 'Ángulo (α)', unit: '°' }
    ],
    output: { symbol: 'b', label: 'Parámetro de impacto (b)', unit: 'm' },
    resolve: ({ d, alpha }) => {
      const b = parseFloat(d) * Math.sin(parseFloat(alpha) * Math.PI / 180);
      return { 
        result: { b: formatNumber(b) }, 
        steps: [`b = ${d}×sin(${alpha}°) = ${formatNumber(b)} m`] 
      };
    }
  },
  {
    id: 'disp-angulo-desde-parametro',
    groupId: 'dispersion-parametro',
    title: 'Ángulo desde Parámetro de Impacto',
    formula: 'α = arcsin(b/d)',
    variables: [
      { symbol: 'b', label: 'Parámetro de impacto (b)', unit: 'm' },
      { symbol: 'd', label: 'Distancia (d)', unit: 'm' }
    ],
    output: { symbol: 'alpha', label: 'Ángulo (α)', unit: '°' },
    resolve: ({ b, d }) => {
      const dist = parseFloat(d);
      if (dist === 0) return { error: "La distancia no puede ser cero." };
      const ratio = parseFloat(b) / dist;
      if (ratio < -1 || ratio > 1) return { error: "El valor b/d debe estar entre -1 y 1." };
      const alpha = Math.asin(ratio) * (180 / Math.PI);
      return { 
        result: { alpha: formatNumber(alpha) }, 
        steps: [`α = arcsin(${b}/${d}) = ${formatNumber(alpha)}°`] 
      };
    }
  },

  // --- Grupo 3: Sección Eficaz ---
  {
    id: 'disp-seccion-eficaz',
    groupId: 'dispersion-seccion',
    title: 'Sección Eficaz',
    formula: 'σ = πb²',
    variables: [
      { symbol: 'b', label: 'Parámetro de impacto (b)', unit: 'm' }
    ],
    output: { symbol: 'sigma', label: 'Sección eficaz (σ)', unit: 'm²' },
    resolve: ({ b }) => {
      const sigma = Math.PI * parseFloat(b) ** 2;
      return { 
        result: { sigma: formatNumber(sigma) }, 
        steps: [`σ = π×${b}² = ${formatNumber(sigma)} m²`] 
      };
    }
  },

  // --- Grupo 4: Dispersión Elástica 2D ---
  {
    id: 'disp-momento-x',
    groupId: 'dispersion-2d',
    title: 'Conservación Momento (componente x)',
    formula: 'v₂f·cos(θ₂) = [m₁v₁ᵢ - m₁v₁f·cos(θ₁)]/m₂',
    variables: [
      { symbol: 'm_1', label: 'Masa 1 (m₁)', unit: 'kg' },
      { symbol: 'v_1i', label: 'Velocidad inicial 1 (v₁ᵢ)', unit: 'm/s' },
      { symbol: 'm_2', label: 'Masa 2 (m₂)', unit: 'kg' },
      { symbol: 'v_1f', label: 'Velocidad final 1 (v₁f)', unit: 'm/s' },
      { symbol: 'theta_1', label: 'Ángulo 1 (θ₁)', unit: '°' }
    ],
    output: { symbol: 'v_2f_x', label: 'v₂f·cos(θ₂)', unit: 'm/s' },
    resolve: ({ m_1, v_1i, m_2, v_1f, theta_1 }) => {
      const m2 = parseFloat(m_2);
      if (m2 === 0) return { error: "La masa 2 no puede ser cero." };
      const theta1_rad = parseFloat(theta_1) * Math.PI / 180;
      const v_2f_x = (parseFloat(m_1) * parseFloat(v_1i) - parseFloat(m_1) * parseFloat(v_1f) * Math.cos(theta1_rad)) / m2;
      return { 
        result: { v_2f_x: formatNumber(v_2f_x) }, 
        steps: [`v₂f·cos(θ₂) = [${m_1}×${v_1i} - ${m_1}×${v_1f}×cos(${theta_1}°)]/${m_2} = ${formatNumber(v_2f_x)} m/s`] 
      };
    }
  },
  {
    id: 'disp-momento-y',
    groupId: 'dispersion-2d',
    title: 'Conservación Momento (componente y)',
    formula: 'v₂f·sin(θ₂) = -m₁v₁f·sin(θ₁)/m₂',
    variables: [
      { symbol: 'm_1', label: 'Masa 1 (m₁)', unit: 'kg' },
      { symbol: 'm_2', label: 'Masa 2 (m₂)', unit: 'kg' },
      { symbol: 'v_1f', label: 'Velocidad final 1 (v₁f)', unit: 'm/s' },
      { symbol: 'theta_1', label: 'Ángulo 1 (θ₁)', unit: '°' }
    ],
    output: { symbol: 'v_2f_y', label: 'v₂f·sin(θ₂)', unit: 'm/s' },
    resolve: ({ m_1, m_2, v_1f, theta_1 }) => {
      const m2 = parseFloat(m_2);
      if (m2 === 0) return { error: "La masa 2 no puede ser cero." };
      const theta1_rad = parseFloat(theta_1) * Math.PI / 180;
      const v_2f_y = -(parseFloat(m_1) * parseFloat(v_1f) * Math.sin(theta1_rad)) / m2;
      return { 
        result: { v_2f_y: formatNumber(v_2f_y) }, 
        steps: [`v₂f·sin(θ₂) = -${m_1}×${v_1f}×sin(${theta_1}°)/${m_2} = ${formatNumber(v_2f_y)} m/s`] 
      };
    }
  },
  {
    id: 'disp-velocidad-2f',
    groupId: 'dispersion-2d',
    title: 'Velocidad Final Objeto 2 (magnitud)',
    formula: 'v₂f = √[(v₂f·cos(θ₂))² + (v₂f·sin(θ₂))²]',
    variables: [
      { symbol: 'v_2f_x', label: 'Componente x (v₂f·cos(θ₂))', unit: 'm/s' },
      { symbol: 'v_2f_y', label: 'Componente y (v₂f·sin(θ₂))', unit: 'm/s' }
    ],
    output: { symbol: 'v_2f', label: 'Velocidad final 2 (v₂f)', unit: 'm/s' },
    resolve: ({ v_2f_x, v_2f_y }) => {
      const v_2f = Math.sqrt(parseFloat(v_2f_x) ** 2 + parseFloat(v_2f_y) ** 2);
      return { 
        result: { v_2f: formatNumber(v_2f) }, 
        steps: [`v₂f = √[(${v_2f_x})² + (${v_2f_y})²] = ${formatNumber(v_2f)} m/s`] 
      };
    }
  },
  {
    id: 'disp-angulo-2f',
    groupId: 'dispersion-2d',
    title: 'Ángulo Final Objeto 2',
    formula: 'θ₂ = arctan(v₂f·sin(θ₂) / v₂f·cos(θ₂))',
    variables: [
      { symbol: 'v_2f_x', label: 'Componente x (v₂f·cos(θ₂))', unit: 'm/s' },
      { symbol: 'v_2f_y', label: 'Componente y (v₂f·sin(θ₂))', unit: 'm/s' }
    ],
    output: { symbol: 'theta_2', label: 'Ángulo 2 (θ₂)', unit: '°' },
    resolve: ({ v_2f_x, v_2f_y }) => {
      const theta_2 = Math.atan2(parseFloat(v_2f_y), parseFloat(v_2f_x)) * (180 / Math.PI);
      return { 
        result: { theta_2: formatNumber(theta_2) }, 
        steps: [`θ₂ = arctan(${v_2f_y}/${v_2f_x}) = ${formatNumber(theta_2)}°`] 
      };
    }
  }
];
