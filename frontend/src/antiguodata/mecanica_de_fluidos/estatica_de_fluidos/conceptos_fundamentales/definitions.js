import { formatNumber } from '../../../../utils/formatNumber.js';

const g = 9.81;

export const definitions = [
  // --- Grupo 1: Densidad (ρ = m/V) ---
  {
    id: 'cf-densidad',
    groupId: 'cf-densidad',
    isFundamental: true,
    title: 'Calcular Densidad (ρ = m/V)',
    formula: 'ρ = m / V',
    variables: [
      { symbol: 'm', label: 'Masa m (kg)', unit: 'kg' },
      { symbol: 'V', label: 'Volumen V (m³)', unit: 'm³' }
    ],
    output: { symbol: 'rho', label: 'Densidad ρ (kg/m³)', unit: 'kg/m³' },
    resolve: ({ m, V }) => {
      const volumen = parseFloat(V);
      if (volumen === 0) return { error: "El volumen no puede ser cero." };
      const rho = parseFloat(m) / volumen;
      return {
        result: { rho: formatNumber(rho) },
        steps: [
          `ρ = m / V = ${m} / ${V}`,
          `ρ = ${formatNumber(rho)} kg/m³`
        ]
      };
    }
  },
  {
    id: 'cf-masa',
    groupId: 'cf-densidad',
    isFundamental: false,
    title: 'Calcular Masa (m = ρV)',
    formula: 'm = ρ * V',
    variables: [
      { symbol: 'rho', label: 'Densidad ρ (kg/m³)', unit: 'kg/m³' },
      { symbol: 'V', label: 'Volumen V (m³)', unit: 'm³' }
    ],
    output: { symbol: 'm', label: 'Masa m (kg)', unit: 'kg' },
    resolve: ({ rho, V }) => {
      const m = parseFloat(rho) * parseFloat(V);
      return {
        result: { m: formatNumber(m) },
        steps: [
          `m = ρ * V = ${rho} * ${V}`,
          `m = ${formatNumber(m)} kg`
        ]
      };
    }
  },
  {
    id: 'cf-volumen',
    groupId: 'cf-densidad',
    isFundamental: false,
    title: 'Calcular Volumen (V = m/ρ)',
    formula: 'V = m / ρ',
    variables: [
      { symbol: 'm', label: 'Masa m (kg)', unit: 'kg' },
      { symbol: 'rho', label: 'Densidad ρ (kg/m³)', unit: 'kg/m³' }
    ],
    output: { symbol: 'V', label: 'Volumen V (m³)', unit: 'm³' },
    resolve: ({ m, rho }) => {
      const densidad = parseFloat(rho);
      if (densidad === 0) return { error: "La densidad no puede ser cero." };
      const V = parseFloat(m) / densidad;
      return {
        result: { V: formatNumber(V) },
        steps: [
          `V = m / ρ = ${m} / ${rho}`,
          `V = ${formatNumber(V)} m³`
        ]
      };
    }
  },
  // --- Grupo 2: Peso Específico (γ = ρg) ---
  {
    id: 'cf-peso-especifico',
    groupId: 'cf-peso-especifico',
    isFundamental: true,
    title: 'Calcular Peso Específico (γ = ρg)',
    formula: 'γ = ρ * g',
    variables: [
      { symbol: 'rho', label: 'Densidad ρ (kg/m³)', unit: 'kg/m³' },
      { symbol: 'g', label: 'Gravedad g (m/s²)', unit: 'm/s²', defaultValue: g }
    ],
    output: { symbol: 'gamma', label: 'Peso específico γ (N/m³)', unit: 'N/m³' },
    resolve: ({ rho, g = 9.81 }) => {
      const gamma = parseFloat(rho) * parseFloat(g);
      return {
        result: { gamma: formatNumber(gamma) },
        steps: [
          `γ = ρ * g = ${rho} * ${g}`,
          `γ = ${formatNumber(gamma)} N/m³`
        ]
      };
    }
  },
  {
    id: 'cf-densidad-desde-gamma',
    groupId: 'cf-peso-especifico',
    isFundamental: false,
    title: 'Calcular Densidad desde γ (ρ = γ/g)',
    formula: 'ρ = γ / g',
    variables: [
      { symbol: 'gamma', label: 'Peso específico γ (N/m³)', unit: 'N/m³' },
      { symbol: 'g', label: 'Gravedad g (m/s²)', unit: 'm/s²', defaultValue: g }
    ],
    output: { symbol: 'rho', label: 'Densidad ρ (kg/m³)', unit: 'kg/m³' },
    resolve: ({ gamma, g = 9.81 }) => {
      const gravedad = parseFloat(g);
      if (gravedad === 0) return { error: "La gravedad no puede ser cero." };
      const rho = parseFloat(gamma) / gravedad;
      return {
        result: { rho: formatNumber(rho) },
        steps: [
          `ρ = γ / g = ${gamma} / ${g}`,
          `ρ = ${formatNumber(rho)} kg/m³`
        ]
      };
    }
  }
];
