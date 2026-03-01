import { formatNumber } from '../../../../utils/formatNumber';

const R = 8.314; // Constante de gases J/(mol·K)

export const definitions = [
  // --- Grupo 1: Velocidad del Sonido en Aire ---
  {
    id: 'ondas-long-v-aire',
    groupId: 'ondas-long-v-aire',
    isFundamental: true,
    title: 'Calcular Velocidad en aire (v ≈ 331 + 0.6T)',
    formula: 'v ≈ 331 + 0.6 * T_C',
    variables: [
      { symbol: 'T_C', label: 'Temperatura T (°C)', unit: '°C' }
    ],
    output: { symbol: 'v', label: 'Velocidad v (m/s)', unit: 'm/s' },
    resolve: ({ T_C }) => {
      const v = 331 + 0.6 * parseFloat(T_C);
      return {
        result: { v: formatNumber(v) },
        steps: [
          `v ≈ 331 + 0.6 * T = 331 + 0.6 * ${T_C}`,
          `v ≈ ${formatNumber(v)} m/s`
        ]
      };
    }
  },
  {
    id: 'ondas-long-temp-aire',
    groupId: 'ondas-long-v-aire',
    isFundamental: false,
    title: 'Calcular Temperatura (T = (v-331)/0.6)',
    formula: 'T_C = (v - 331) / 0.6',
    variables: [
      { symbol: 'v', label: 'Velocidad v (m/s)', unit: 'm/s' }
    ],
    output: { symbol: 'T_C', label: 'Temperatura T (°C)', unit: '°C' },
    resolve: ({ v }) => {
      const T_C = (parseFloat(v) - 331) / 0.6;
      return {
        result: { T_C: formatNumber(T_C) },
        steps: [
          `T = (v - 331) / 0.6 = (${v} - 331) / 0.6`,
          `T = ${formatNumber(T_C)} °C`
        ]
      };
    }
  },

  // --- Grupo 2: Velocidad en Sólidos ---
  {
    id: 'ondas-long-v-solido',
    groupId: 'ondas-long-v-solido',
    isFundamental: true,
    title: 'Calcular Velocidad en sólido (v = √(E/ρ))',
    formula: 'v = √(E / ρ)',
    variables: [
      { symbol: 'E', label: 'Módulo de Young E (GPa)', unit: 'GPa' },
      { symbol: 'rho', label: 'Densidad ρ (kg/m³)', unit: 'kg/m³' }
    ],
    output: { symbol: 'v', label: 'Velocidad v (m/s)', unit: 'm/s' },
    resolve: ({ E, rho }) => {
      const densidad = parseFloat(rho);
      if (densidad === 0) return { error: "La densidad no puede ser cero." };
      const v = Math.sqrt((parseFloat(E) * 1e9) / densidad);
      return {
        result: { v: formatNumber(v) },
        steps: [
          `v = √(E / ρ) = √(${E}×10⁹ / ${rho})`,
          `v = ${formatNumber(v)} m/s`
        ]
      };
    }
  },
  {
    id: 'ondas-long-modulo',
    groupId: 'ondas-long-v-solido',
    isFundamental: false,
    title: 'Calcular Módulo de Young (E = ρv²)',
    formula: 'E = ρ * v²',
    variables: [
      { symbol: 'rho', label: 'Densidad ρ (kg/m³)', unit: 'kg/m³' },
      { symbol: 'v', label: 'Velocidad v (m/s)', unit: 'm/s' }
    ],
    output: { symbol: 'E', label: 'Módulo de Young E (GPa)', unit: 'GPa' },
    resolve: ({ rho, v }) => {
      const E = (parseFloat(rho) * Math.pow(parseFloat(v), 2)) / 1e9;
      return {
        result: { E: formatNumber(E) },
        steps: [
          `E = ρ * v² = ${rho} * ${v}²`,
          `E = ${formatNumber(E)} GPa`
        ]
      };
    }
  },
  {
    id: 'ondas-long-densidad-solido',
    groupId: 'ondas-long-v-solido',
    isFundamental: false,
    title: 'Calcular Densidad (ρ = E/v²)',
    formula: 'ρ = E / v²',
    variables: [
      { symbol: 'E', label: 'Módulo de Young E (GPa)', unit: 'GPa' },
      { symbol: 'v', label: 'Velocidad v (m/s)', unit: 'm/s' }
    ],
    output: { symbol: 'rho', label: 'Densidad ρ (kg/m³)', unit: 'kg/m³' },
    resolve: ({ E, v }) => {
      const velocidad = parseFloat(v);
      if (velocidad === 0) return { error: "La velocidad no puede ser cero." };
      const rho = (parseFloat(E) * 1e9) / Math.pow(velocidad, 2);
      return {
        result: { rho: formatNumber(rho) },
        steps: [
          `ρ = E / v² = ${E}×10⁹ / ${v}²`,
          `ρ = ${formatNumber(rho)} kg/m³`
        ]
      };
    }
  },

  // --- Grupo 3: Velocidad en Líquidos ---
  {
    id: 'ondas-long-v-liquido',
    groupId: 'ondas-long-v-liquido',
    isFundamental: true,
    title: 'Calcular Velocidad en líquido (v = √(B/ρ))',
    formula: 'v = √(B / ρ)',
    variables: [
      { symbol: 'B', label: 'Módulo de compresibilidad B (GPa)', unit: 'GPa' },
      { symbol: 'rho', label: 'Densidad ρ (kg/m³)', unit: 'kg/m³' }
    ],
    output: { symbol: 'v', label: 'Velocidad v (m/s)', unit: 'm/s' },
    resolve: ({ B, rho }) => {
      const densidad = parseFloat(rho);
      if (densidad === 0) return { error: "La densidad no puede ser cero." };
      const v = Math.sqrt((parseFloat(B) * 1e9) / densidad);
      return {
        result: { v: formatNumber(v) },
        steps: [
          `v = √(B / ρ) = √(${B}×10⁹ / ${rho})`,
          `v = ${formatNumber(v)} m/s`
        ]
      };
    }
  },
  {
    id: 'ondas-long-compresibilidad',
    groupId: 'ondas-long-v-liquido',
    isFundamental: false,
    title: 'Calcular Módulo de compresibilidad (B = ρv²)',
    formula: 'B = ρ * v²',
    variables: [
      { symbol: 'rho', label: 'Densidad ρ (kg/m³)', unit: 'kg/m³' },
      { symbol: 'v', label: 'Velocidad v (m/s)', unit: 'm/s' }
    ],
    output: { symbol: 'B', label: 'Módulo de compresibilidad B (GPa)', unit: 'GPa' },
    resolve: ({ rho, v }) => {
      const B = (parseFloat(rho) * Math.pow(parseFloat(v), 2)) / 1e9;
      return {
        result: { B: formatNumber(B) },
        steps: [
          `B = ρ * v² = ${rho} * ${v}²`,
          `B = ${formatNumber(B)} GPa`
        ]
      };
    }
  },
  {
    id: 'ondas-long-densidad-liquido',
    groupId: 'ondas-long-v-liquido',
    isFundamental: false,
    title: 'Calcular Densidad (ρ = B/v²)',
    formula: 'ρ = B / v²',
    variables: [
      { symbol: 'B', label: 'Módulo de compresibilidad B (GPa)', unit: 'GPa' },
      { symbol: 'v', label: 'Velocidad v (m/s)', unit: 'm/s' }
    ],
    output: { symbol: 'rho', label: 'Densidad ρ (kg/m³)', unit: 'kg/m³' },
    resolve: ({ B, v }) => {
      const velocidad = parseFloat(v);
      if (velocidad === 0) return { error: "La velocidad no puede ser cero." };
      const rho = (parseFloat(B) * 1e9) / Math.pow(velocidad, 2);
      return {
        result: { rho: formatNumber(rho) },
        steps: [
          `ρ = B / v² = ${B}×10⁹ / ${v}²`,
          `ρ = ${formatNumber(rho)} kg/m³`
        ]
      };
    }
  }
];
