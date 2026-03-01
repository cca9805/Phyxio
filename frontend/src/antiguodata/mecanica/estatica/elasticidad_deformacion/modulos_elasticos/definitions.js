import { formatNumber } from '../../../../../utils/formatNumber';

export const definitions = [
  // --- Grupo 1: Módulo de Young ---
  {
    id: 'modulo-young',
    groupId: 'modulo-young',
    title: 'Calcular Módulo de Young (E = σ/ε)',
    isFundamental: true,
    formula: 'E = σ / ε',
    variables: [
      { symbol: 'sigma', label: 'Esfuerzo (σ)', unit: 'Pa' },
      { symbol: 'epsilon', label: 'Deformación (ε)', unit: 'adimensional' }
    ],
    output: { symbol: 'E', label: 'Módulo de Young (E)', unit: 'Pa' },
    resolve: ({ sigma, epsilon }) => {
      const deformacion = parseFloat(epsilon);
      if (deformacion === 0) return { error: "La deformación no puede ser cero." };
      const E = parseFloat(sigma) / deformacion;
      return { 
        result: { E: formatNumber(E) }, 
        steps: [`E = ${sigma} / ${epsilon} = ${formatNumber(E)} Pa = ${formatNumber(E/1e9)} GPa`] 
      };
    }
  },

  // --- Grupo 2: Módulo de Corte ---
  {
    id: 'modulo-corte',
    groupId: 'modulo-corte',
    title: 'Calcular Módulo de Corte (G = τ/γ)',
    isFundamental: true,
    formula: 'G = τ / γ',
    variables: [
      { symbol: 'tau', label: 'Esfuerzo Cortante (τ)', unit: 'Pa' },
      { symbol: 'gamma', label: 'Deformación Angular (γ)', unit: 'rad' }
    ],
    output: { symbol: 'G', label: 'Módulo de Corte (G)', unit: 'Pa' },
    resolve: ({ tau, gamma }) => {
      const deformacion = parseFloat(gamma);
      if (deformacion === 0) return { error: "La deformación angular no puede ser cero." };
      const G = parseFloat(tau) / deformacion;
      return { 
        result: { G: formatNumber(G) }, 
        steps: [`G = ${tau} / ${gamma} = ${formatNumber(G)} Pa = ${formatNumber(G/1e9)} GPa`] 
      };
    }
  },

  // --- Grupo 3: Coeficiente de Poisson ---
  {
    id: 'coeficiente-poisson',
    groupId: 'coeficiente-poisson',
    title: 'Calcular Coeficiente de Poisson (ν = -εₜ/εₗ)',
    isFundamental: true,
    formula: 'ν = -εₜ / εₗ',
    variables: [
      { symbol: 'epsilonT', label: 'Deformación Transversal (εₜ)', unit: 'adimensional' },
      { symbol: 'epsilonL', label: 'Deformación Longitudinal (εₗ)', unit: 'adimensional' }
    ],
    output: { symbol: 'ν', label: 'Coeficiente de Poisson (ν)', unit: 'adimensional' },
    resolve: ({ epsilonT, epsilonL }) => {
      const deformacionL = parseFloat(epsilonL);
      if (deformacionL === 0) return { error: "La deformación longitudinal no puede ser cero." };
      const nu = -parseFloat(epsilonT) / deformacionL;
      return { 
        result: { nu: formatNumber(nu) }, 
        steps: [`ν = -${epsilonT} / ${epsilonL} = ${formatNumber(nu)}`] 
      };
    }
  }
];
