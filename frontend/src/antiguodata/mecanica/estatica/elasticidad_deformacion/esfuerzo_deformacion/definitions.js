import { formatNumber } from '../../../../../utils/formatNumber';

export const definitions = [
  // --- Grupo 1: Esfuerzo Normal ---
  {
    id: 'esfuerzo-normal',
    groupId: 'esfuerzo-normal',
    title: 'Calcular Esfuerzo Normal (σ = F/A)',
    isFundamental: true,
    formula: 'σ = F / A',
    variables: [
      { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
      { symbol: 'A', label: 'Área (A)', unit: 'm²' }
    ],
    output: { symbol: 'σ', label: 'Esfuerzo Normal (σ)', unit: 'Pa' },
    resolve: ({ F, A }) => {
      const area = parseFloat(A);
      if (area === 0) return { error: "El área no puede ser cero." };
      const sigma = parseFloat(F) / area;
      return { 
        result: { sigma: formatNumber(sigma) }, 
        steps: [`σ = ${F} / ${A} = ${formatNumber(sigma)} Pa = ${formatNumber(sigma/1e6)} MPa`] 
      };
    }
  },
  {
    id: 'fuerza-desde-esfuerzo',
    groupId: 'esfuerzo-normal',
    title: 'Calcular Fuerza (F = σA)',
    isFundamental: false,
    formula: 'F = σ * A',
    variables: [
      { symbol: 'sigma', label: 'Esfuerzo Normal (σ)', unit: 'Pa' },
      { symbol: 'A', label: 'Área (A)', unit: 'm²' }
    ],
    output: { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
    resolve: ({ sigma, A }) => {
      const F = parseFloat(sigma) * parseFloat(A);
      return { 
        result: { F: formatNumber(F) }, 
        steps: [`F = ${sigma} * ${A} = ${formatNumber(F)} N`] 
      };
    }
  },
  {
    id: 'area-desde-esfuerzo',
    groupId: 'esfuerzo-normal',
    title: 'Calcular Área (A = F/σ)',
    isFundamental: false,
    formula: 'A = F / σ',
    variables: [
      { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
      { symbol: 'sigma', label: 'Esfuerzo Normal (σ)', unit: 'Pa' }
    ],
    output: { symbol: 'A', label: 'Área (A)', unit: 'm²' },
    resolve: ({ F, sigma }) => {
      const esfuerzo = parseFloat(sigma);
      if (esfuerzo === 0) return { error: "El esfuerzo no puede ser cero." };
      const A = parseFloat(F) / esfuerzo;
      return { 
        result: { A: formatNumber(A) }, 
        steps: [`A = ${F} / ${sigma} = ${formatNumber(A)} m²`] 
      };
    }
  },

  // --- Grupo 2: Esfuerzo Cortante ---
  {
    id: 'esfuerzo-cortante',
    groupId: 'esfuerzo-cortante',
    title: 'Calcular Esfuerzo Cortante (τ = F/A)',
    isFundamental: true,
    formula: 'τ = F / A',
    variables: [
      { symbol: 'F', label: 'Fuerza Tangencial (F)', unit: 'N' },
      { symbol: 'A', label: 'Área (A)', unit: 'm²' }
    ],
    output: { symbol: 'τ', label: 'Esfuerzo Cortante (τ)', unit: 'Pa' },
    resolve: ({ F, A }) => {
      const area = parseFloat(A);
      if (area === 0) return { error: "El área no puede ser cero." };
      const tau = parseFloat(F) / area;
      return { 
        result: { tau: formatNumber(tau) }, 
        steps: [`τ = ${F} / ${A} = ${formatNumber(tau)} Pa`] 
      };
    }
  },
  {
    id: 'fuerza-desde-cortante',
    groupId: 'esfuerzo-cortante',
    title: 'Calcular Fuerza Tangencial (F = τA)',
    isFundamental: false,
    formula: 'F = τ * A',
    variables: [
      { symbol: 'tau', label: 'Esfuerzo Cortante (τ)', unit: 'Pa' },
      { symbol: 'A', label: 'Área (A)', unit: 'm²' }
    ],
    output: { symbol: 'F', label: 'Fuerza Tangencial (F)', unit: 'N' },
    resolve: ({ tau, A }) => {
      const F = parseFloat(tau) * parseFloat(A);
      return { 
        result: { F: formatNumber(F) }, 
        steps: [`F = ${tau} * ${A} = ${formatNumber(F)} N`] 
      };
    }
  },
  {
    id: 'area-desde-cortante',
    groupId: 'esfuerzo-cortante',
    title: 'Calcular Área (A = F/τ)',
    isFundamental: false,
    formula: 'A = F / τ',
    variables: [
      { symbol: 'F', label: 'Fuerza Tangencial (F)', unit: 'N' },
      { symbol: 'tau', label: 'Esfuerzo Cortante (τ)', unit: 'Pa' }
    ],
    output: { symbol: 'A', label: 'Área (A)', unit: 'm²' },
    resolve: ({ F, tau }) => {
      const esfuerzo = parseFloat(tau);
      if (esfuerzo === 0) return { error: "El esfuerzo cortante no puede ser cero." };
      const A = parseFloat(F) / esfuerzo;
      return { 
        result: { A: formatNumber(A) }, 
        steps: [`A = ${F} / ${tau} = ${formatNumber(A)} m²`] 
      };
    }
  },

  // --- Grupo 3: Deformación Unitaria ---
  {
    id: 'deformacion-unitaria',
    groupId: 'deformacion-unitaria',
    title: 'Calcular Deformación Unitaria (ε = ΔL/L₀)',
    isFundamental: true,
    formula: 'ε = ΔL / L₀',
    variables: [
      { symbol: 'deltaL', label: 'Cambio de Longitud (ΔL)', unit: 'm' },
      { symbol: 'L0', label: 'Longitud Original (L₀)', unit: 'm' }
    ],
    output: { symbol: 'ε', label: 'Deformación Unitaria (ε)', unit: 'adimensional' },
    resolve: ({ deltaL, L0 }) => {
      const longitud = parseFloat(L0);
      if (longitud === 0) return { error: "La longitud original no puede ser cero." };
      const epsilon = parseFloat(deltaL) / longitud;
      return { 
        result: { epsilon: formatNumber(epsilon) }, 
        steps: [`ε = ${deltaL} / ${L0} = ${formatNumber(epsilon)}`] 
      };
    }
  },
  {
    id: 'alargamiento-desde-deformacion',
    groupId: 'deformacion-unitaria',
    title: 'Calcular Alargamiento (ΔL = εL₀)',
    isFundamental: false,
    formula: 'ΔL = ε * L₀',
    variables: [
      { symbol: 'epsilon', label: 'Deformación Unitaria (ε)', unit: 'adimensional' },
      { symbol: 'L0', label: 'Longitud Original (L₀)', unit: 'm' }
    ],
    output: { symbol: 'deltaL', label: 'Alargamiento (ΔL)', unit: 'm' },
    resolve: ({ epsilon, L0 }) => {
      const deltaL = parseFloat(epsilon) * parseFloat(L0);
      return { 
        result: { deltaL: formatNumber(deltaL) }, 
        steps: [`ΔL = ${epsilon} * ${L0} = ${formatNumber(deltaL)} m`] 
      };
    }
  }
];
