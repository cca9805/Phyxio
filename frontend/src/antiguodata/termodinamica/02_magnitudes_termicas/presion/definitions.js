import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  // Grupo 1: Presión desde Fuerza y Área
  {
    id: 'presion-fuerza-area',
    groupId: 'presion-fuerza-area',
    title: 'Presión (P)',
    isFundamental: true,
    formula: 'P = F / A',
    variables: [
      { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
      { symbol: 'A', label: 'Área (A)', unit: 'm²' }
    ],
    output: { symbol: 'P', label: 'Presión (P)', unit: 'Pa' },
    resolve: ({ F, A }) => {
      const numF = parseFloat(F);
      const numA = parseFloat(A);
      if (numA === 0) return { error: 'El área no puede ser cero.' };
      const P = numF / numA;
      return { result: { P: formatNumber(P) }, steps: [`P = ${numF} N / ${numA} m² = ${formatNumber(P)} Pa`] };
    }
  },
  {
    id: 'presion-fuerza',
    groupId: 'presion-fuerza-area',
    title: 'Fuerza (F)',
    isComplementary: true,
    formula: 'F = P ⋅ A',
    variables: [
      { symbol: 'P', label: 'Presión (P)', unit: 'Pa' },
      { symbol: 'A', label: 'Área (A)', unit: 'm²' }
    ],
    output: { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
    resolve: ({ P, A }) => {
      const numP = parseFloat(P);
      const numA = parseFloat(A);
      const F = numP * numA;
      return { result: { F: formatNumber(F) }, steps: [`F = ${numP} Pa * ${numA} m² = ${formatNumber(F)} N`] };
    }
  },
  {
    id: 'presion-area',
    groupId: 'presion-fuerza-area',
    title: 'Área (A)',
    isComplementary: true,
    formula: 'A = F / P',
    variables: [
      { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
      { symbol: 'P', label: 'Presión (P)', unit: 'Pa' }
    ],
    output: { symbol: 'A', label: 'Área (A)', unit: 'm²' },
    resolve: ({ F, P }) => {
      const numF = parseFloat(F);
      const numP = parseFloat(P);
      if (numP === 0) return { error: 'La presión no puede ser cero.' };
      const A = numF / numP;
      return { result: { A: formatNumber(A) }, steps: [`A = ${numF} N / ${numP} Pa = ${formatNumber(A)} m²`] };
    }
  },

  // Grupo 2: Presión Hidrostática
  {
    id: 'presion-hidrostatica',
    groupId: 'presion-hidrostatica',
    title: 'Presión Hidrostática (P)',
    isFundamental: true,
    formula: 'P = ρ ⋅ g ⋅ h',
    variables: [
      { symbol: 'rho', label: 'Densidad (ρ)', unit: 'kg/m³' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', defaultValue: 9.8 },
      { symbol: 'h', label: 'Profundidad (h)', unit: 'm' }
    ],
    output: { symbol: 'P', label: 'Presión (P)', unit: 'Pa' },
    resolve: ({ rho, g, h }) => {
      const numRho = parseFloat(rho);
      const numG = parseFloat(g);
      const numH = parseFloat(h);
      const P = numRho * numG * numH;
      return { result: { P: formatNumber(P) }, steps: [`P = ${numRho} kg/m³ * ${numG} m/s² * ${numH} m = ${formatNumber(P)} Pa`] };
    }
  },
  {
    id: 'presion-profundidad',
    groupId: 'presion-hidrostatica',
    title: 'Profundidad (h)',
    isComplementary: true,
    formula: 'h = P / (ρ ⋅ g)',
    variables: [
      { symbol: 'P', label: 'Presión (P)', unit: 'Pa' },
      { symbol: 'rho', label: 'Densidad (ρ)', unit: 'kg/m³' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', defaultValue: 9.8 }
    ],
    output: { symbol: 'h', label: 'Profundidad (h)', unit: 'm' },
    resolve: ({ P, rho, g }) => {
      const numP = parseFloat(P);
      const numRho = parseFloat(rho);
      const numG = parseFloat(g);
      if (numRho === 0 || numG === 0) return { error: 'La densidad y gravedad no pueden ser cero.' };
      const h = numP / (numRho * numG);
      return { result: { h: formatNumber(h) }, steps: [`h = ${numP} Pa / (${numRho} kg/m³ * ${numG} m/s²) = ${formatNumber(h)} m`] };
    }
  },
  {
    id: 'presion-densidad',
    groupId: 'presion-hidrostatica',
    title: 'Densidad (ρ)',
    isComplementary: true,
    formula: 'ρ = P / (g ⋅ h)',
    variables: [
      { symbol: 'P', label: 'Presión (P)', unit: 'Pa' },
      { symbol: 'g', label: 'Gravedad (g)', unit: 'm/s²', defaultValue: 9.8 },
      { symbol: 'h', label: 'Profundidad (h)', unit: 'm' }
    ],
    output: { symbol: 'rho', label: 'Densidad (ρ)', unit: 'kg/m³' },
    resolve: ({ P, g, h }) => {
      const numP = parseFloat(P);
      const numG = parseFloat(g);
      const numH = parseFloat(h);
      if (numG === 0 || numH === 0) return { error: 'La gravedad y profundidad no pueden ser cero.' };
      const rho = numP / (numG * numH);
      return { result: { rho: formatNumber(rho) }, steps: [`ρ = ${numP} Pa / (${numG} m/s² * ${numH} m) = ${formatNumber(rho)} kg/m³`] };
    }
  }
];
