import { formatNumber } from '../../../../utils/formatNumber.js';

const g = 9.81;

export const definitions = [
  // --- Grupo 1: Fuerza sobre Superficie Plana ---
  {
    id: 'fuerza-superficie',
    groupId: 'fuerza-plana',
    title: 'Calcular Fuerza sobre Superficie',
    isFundamental: true,
    formula: 'F = ρ * g * h_c * A',
    variables: [
      { symbol: 'rho', label: 'Densidad (ρ) (kg/m³)', unit: 'kg/m³', defaultValue: 1000 },
      { symbol: 'hc', label: 'Profundidad centroide (h_c) (m)', unit: 'm' },
      { symbol: 'A', label: 'Área (A) (m²)', unit: 'm²' }
    ],
    output: { symbol: 'F', label: 'Fuerza (F) (N)', unit: 'N' },
    resolve: ({ rho = 1000, hc, A }) => {
      const F = parseFloat(rho) * g * parseFloat(hc) * parseFloat(A);
      return {
        result: { F: formatNumber(F) },
        steps: [
          `F = ρ * g * h_c * A = ${rho} * ${g} * ${hc} * ${A}`,
          `F = ${formatNumber(F)} N`
        ]
      };
    }
  },
  {
    id: 'profundidad-desde-fuerza',
    groupId: 'fuerza-plana',
    title: 'Calcular Profundidad (h_c = F/(ρgA))',
    isFundamental: false,
    formula: 'h_c = F / (ρ * g * A)',
    variables: [
      { symbol: 'F', label: 'Fuerza (F) (N)', unit: 'N' },
      { symbol: 'rho', label: 'Densidad (ρ) (kg/m³)', unit: 'kg/m³', defaultValue: 1000 },
      { symbol: 'A', label: 'Área (A) (m²)', unit: 'm²' }
    ],
    output: { symbol: 'hc', label: 'Profundidad centroide (h_c) (m)', unit: 'm' },
    resolve: ({ F, rho = 1000, A }) => {
      const divisor = parseFloat(rho) * g * parseFloat(A);
      if (divisor === 0) return { error: "El denominador no puede ser cero." };
      const hc = parseFloat(F) / divisor;
      return {
        result: { hc: formatNumber(hc) },
        steps: [
          `h_c = F / (ρ * g * A) = ${F} / (${rho} * ${g} * ${A})`,
          `h_c = ${formatNumber(hc)} m`
        ]
      };
    }
  },
  {
    id: 'area-desde-fuerza',
    groupId: 'fuerza-plana',
    title: 'Calcular Área (A = F/(ρgh_c))',
    isFundamental: false,
    formula: 'A = F / (ρ * g * h_c)',
    variables: [
      { symbol: 'F', label: 'Fuerza (F) (N)', unit: 'N' },
      { symbol: 'rho', label: 'Densidad (ρ) (kg/m³)', unit: 'kg/m³', defaultValue: 1000 },
      { symbol: 'hc', label: 'Profundidad centroide (h_c) (m)', unit: 'm' }
    ],
    output: { symbol: 'A', label: 'Área (A) (m²)', unit: 'm²' },
    resolve: ({ F, rho = 1000, hc }) => {
      const divisor = parseFloat(rho) * g * parseFloat(hc);
      if (divisor === 0) return { error: "El denominador no puede ser cero." };
      const A = parseFloat(F) / divisor;
      return {
        result: { A: formatNumber(A) },
        steps: [
          `A = F / (ρ * g * h_c) = ${F} / (${rho} * ${g} * ${hc})`,
          `A = ${formatNumber(A)} m²`
        ]
      };
    }
  }
];
