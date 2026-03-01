import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  // Grupo 1: Potencia de Onda
  {
    id: 'ondas-potencia',
    groupId: 'ondas-potencia',
    title: 'Potencia de onda en cuerda',
    isFundamental: true,
    formula: 'P = 0.5 * μ * ω² * A² * v',
    variables: [
      { symbol: 'mu', label: 'Densidad lineal μ (kg/m)', unit: 'kg/m' },
      { symbol: 'omega', label: 'Frecuencia angular ω (rad/s)', unit: 'rad/s' },
      { symbol: 'A', label: 'Amplitud A (m)', unit: 'm' },
      { symbol: 'v', label: 'Velocidad v (m/s)', unit: 'm/s' }
    ],
    output: { symbol: 'P', label: 'Potencia P (W)', unit: 'W' },
    resolve: ({ mu, omega, A, v }) => {
      const P = 0.5 * parseFloat(mu) * Math.pow(parseFloat(omega), 2) * Math.pow(parseFloat(A), 2) * parseFloat(v);
      return {
        result: { P: formatNumber(P) },
        steps: [
          `P = ½μω²A²v`,
          `P = 0.5 × ${mu} × (${omega})² × (${A})² × ${v}`,
          `P = ${formatNumber(P)} W`
        ]
      };
    }
  },

  // Grupo 2: Intensidad
  {
    id: 'ondas-intensidad',
    groupId: 'ondas-intensidad',
    title: 'Intensidad (I = P/A)',
    isFundamental: true,
    formula: 'I = P / A',
    variables: [
      { symbol: 'P', label: 'Potencia P (W)', unit: 'W' },
      { symbol: 'A', label: 'Área A (m²)', unit: 'm²' }
    ],
    output: { symbol: 'I', label: 'Intensidad I (W/m²)', unit: 'W/m²' },
    resolve: ({ P, A }) => {
      const area = parseFloat(A);
      if (area === 0) return { error: 'El área no puede ser cero.' };
      const I = parseFloat(P) / area;
      return {
        result: { I: formatNumber(I) },
        steps: [
          `I = P / A`,
          `I = ${P} / ${A}`,
          `I = ${formatNumber(I)} W/m²`
        ]
      };
    }
  },

  // Grupo 3: Intensidad Sonora
  {
    id: 'ondas-intensidad-sonora',
    groupId: 'ondas-intensidad-sonora',
    title: 'Intensidad sonora (I = ½ρvω²A²)',
    isFundamental: true,
    formula: 'I = 0.5 * ρ * v * ω² * A²',
    variables: [
      { symbol: 'rho', label: 'Densidad ρ (kg/m³)', unit: 'kg/m³' },
      { symbol: 'v', label: 'Velocidad v (m/s)', unit: 'm/s' },
      { symbol: 'omega', label: 'Frecuencia angular ω (rad/s)', unit: 'rad/s' },
      { symbol: 'A', label: 'Amplitud A (m)', unit: 'm' }
    ],
    output: { symbol: 'I', label: 'Intensidad I (W/m²)', unit: 'W/m²' },
    resolve: ({ rho, v, omega, A }) => {
      const I = 0.5 * parseFloat(rho) * parseFloat(v) * Math.pow(parseFloat(omega), 2) * Math.pow(parseFloat(A), 2);
      return {
        result: { I: formatNumber(I) },
        steps: [
          `I = ½ρvω²A²`,
          `I = 0.5 × ${rho} × ${v} × (${omega})² × (${A})²`,
          `I = ${formatNumber(I)} W/m²`
        ]
      };
    }
  },

  // Grupo 4: Decibelios
  {
    id: 'ondas-decibelios',
    groupId: 'ondas-decibelios',
    title: 'Nivel de intensidad (β = 10 log(I/I₀))',
    isFundamental: true,
    formula: 'β = 10 * log₁₀(I / I₀)',
    variables: [
      { symbol: 'I', label: 'Intensidad I (W/m²)', unit: 'W/m²' }
    ],
    output: { symbol: 'beta', label: 'Nivel β (dB)', unit: 'dB' },
    resolve: ({ I }) => {
      const I0 = 1e-12; // Intensidad de referencia
      const intensidad = parseFloat(I);
      if (intensidad <= 0) return { error: 'La intensidad debe ser positiva.' };
      const beta = 10 * Math.log10(intensidad / I0);
      return {
        result: { beta: formatNumber(beta) },
        steps: [
          `I₀ = 10⁻¹² W/m² (intensidad de referencia)`,
          `β = 10 log₁₀(I / I₀)`,
          `β = 10 log₁₀(${I} / 10⁻¹²)`,
          `β = ${formatNumber(beta)} dB`
        ]
      };
    }
  },
  {
    id: 'ondas-intensidad-desde-db',
    groupId: 'ondas-decibelios',
    title: 'Intensidad desde decibelios (I = I₀ × 10^(β/10))',
    isFundamental: false,
    formula: 'I = I₀ * 10^(β/10)',
    variables: [
      { symbol: 'beta', label: 'Nivel β (dB)', unit: 'dB' }
    ],
    output: { symbol: 'I', label: 'Intensidad I (W/m²)', unit: 'W/m²' },
    resolve: ({ beta }) => {
      const I0 = 1e-12;
      const I = I0 * Math.pow(10, parseFloat(beta) / 10);
      return {
        result: { I: formatNumber(I, 6) },
        steps: [
          `I₀ = 10⁻¹² W/m²`,
          `I = I₀ × 10^(β/10)`,
          `I = 10⁻¹² × 10^(${beta}/10)`,
          `I = ${formatNumber(I, 6)} W/m²`
        ]
      };
    }
  },

  // Grupo 5: Atenuación
  {
    id: 'ondas-atenuacion',
    groupId: 'ondas-atenuacion',
    title: 'Atenuación (I = I₀e^(-αx))',
    isFundamental: true,
    formula: 'I = I₀ * e^(-α * x)',
    variables: [
      { symbol: 'I0', label: 'Intensidad inicial I₀ (W/m²)', unit: 'W/m²' },
      { symbol: 'alpha', label: 'Coeficiente α (m⁻¹)', unit: 'm⁻¹' },
      { symbol: 'x', label: 'Distancia x (m)', unit: 'm' }
    ],
    output: { symbol: 'I', label: 'Intensidad I (W/m²)', unit: 'W/m²' },
    resolve: ({ I0, alpha, x }) => {
      const I = parseFloat(I0) * Math.exp(-parseFloat(alpha) * parseFloat(x));
      return {
        result: { I: formatNumber(I) },
        steps: [
          `I = I₀ e^(-αx)`,
          `I = ${I0} × e^(-${alpha} × ${x})`,
          `I = ${formatNumber(I)} W/m²`
        ]
      };
    }
  },

  // Grupo 6: Densidad de Energía
  {
    id: 'ondas-densidad-energia',
    groupId: 'ondas-densidad-energia',
    title: 'Densidad de energía (u = ½ρω²A²)',
    isFundamental: true,
    formula: 'u = 0.5 * ρ * ω² * A²',
    variables: [
      { symbol: 'rho', label: 'Densidad ρ (kg/m³)', unit: 'kg/m³' },
      { symbol: 'omega', label: 'Frecuencia angular ω (rad/s)', unit: 'rad/s' },
      { symbol: 'A', label: 'Amplitud A (m)', unit: 'm' }
    ],
    output: { symbol: 'u', label: 'Densidad de energía u (J/m³)', unit: 'J/m³' },
    resolve: ({ rho, omega, A }) => {
      const u = 0.5 * parseFloat(rho) * Math.pow(parseFloat(omega), 2) * Math.pow(parseFloat(A), 2);
      return {
        result: { u: formatNumber(u) },
        steps: [
          `u = ½ρω²A²`,
          `u = 0.5 × ${rho} × (${omega})² × (${A})²`,
          `u = ${formatNumber(u)} J/m³`
        ]
      };
    }
  }
];
