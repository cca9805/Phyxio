import { formatNumber } from '../../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'ley-hooke-alargamiento',
    groupId: 'ley-hooke-alargamiento',
    title: 'Calcular Alargamiento (ΔL = FL₀/AE)',
    isFundamental: true,
    formula: 'ΔL = (F * L₀) / (A * E)',
    variables: [
      { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
      { symbol: 'L0', label: 'Longitud Original (L₀)', unit: 'm' },
      { symbol: 'A', label: 'Área (A)', unit: 'm²' },
      { symbol: 'E', label: 'Módulo de Young (E)', unit: 'Pa' }
    ],
    output: { symbol: 'deltaL', label: 'Alargamiento (ΔL)', unit: 'm' },
    resolve: ({ F, L0, A, E }) => {
      const denominador = parseFloat(A) * parseFloat(E);
      if (denominador === 0) return { error: "A*E no puede ser cero." };
      const deltaL = (parseFloat(F) * parseFloat(L0)) / denominador;
      return { 
        result: { deltaL: formatNumber(deltaL) }, 
        steps: [`ΔL = (${F} * ${L0}) / (${A} * ${E}) = ${formatNumber(deltaL)} m = ${formatNumber(deltaL*1000)} mm`] 
      };
    }
  },
  {
    id: 'ley-hooke-fuerza',
    groupId: 'ley-hooke-fuerza',
    title: 'Calcular Fuerza (F = AEΔ L/L₀)',
    isFundamental: false,
    formula: 'F = (A * E * ΔL) / L₀',
    variables: [
      { symbol: 'A', label: 'Área (A)', unit: 'm²' },
      { symbol: 'E', label: 'Módulo de Young (E)', unit: 'Pa' },
      { symbol: 'deltaL', label: 'Alargamiento (ΔL)', unit: 'm' },
      { symbol: 'L0', label: 'Longitud Original (L₀)', unit: 'm' }
    ],
    output: { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
    resolve: ({ A, E, deltaL, L0 }) => {
      const longitud = parseFloat(L0);
      if (longitud === 0) return { error: "La longitud original no puede ser cero." };
      const F = (parseFloat(A) * parseFloat(E) * parseFloat(deltaL)) / longitud;
      return { 
        result: { F: formatNumber(F) }, 
        steps: [`F = (${A} * ${E} * ${deltaL}) / ${L0} = ${formatNumber(F)} N`] 
      };
    }
  },
  {
    id: 'ley-hooke-area',
    groupId: 'ley-hooke-area',
    title: 'Calcular Área (A = FL₀/EΔL)',
    isFundamental: false,
    formula: 'A = (F * L₀) / (E * ΔL)',
    variables: [
      { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
      { symbol: 'L0', label: 'Longitud Original (L₀)', unit: 'm' },
      { symbol: 'E', label: 'Módulo de Young (E)', unit: 'Pa' },
      { symbol: 'deltaL', label: 'Alargamiento (ΔL)', unit: 'm' }
    ],
    output: { symbol: 'A', label: 'Área (A)', unit: 'm²' },
    resolve: ({ F, L0, E, deltaL }) => {
      const denominador = parseFloat(E) * parseFloat(deltaL);
      if (denominador === 0) return { error: "E*ΔL no puede ser cero." };
      const A = (parseFloat(F) * parseFloat(L0)) / denominador;
      return { 
        result: { A: formatNumber(A) }, 
        steps: [`A = (${F} * ${L0}) / (${E} * ${deltaL}) = ${formatNumber(A)} m²`] 
      };
    }
  }
];
