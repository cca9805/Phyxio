import { formatNumber } from '../../../../utils/formatNumber';

const PI = Math.PI;
const R = 8.314; // Constante universal de gases (J/mol·K)
const k_B = 1.381e-23; // Constante de Boltzmann (J/K)

export const definitions = [
  // --- Grupo 1: Propiedades Térmicas - Conceptos Fundamentales ---
  {
    id: 'propiedades_termicas-volumen-especifico',
    groupId: 'propiedades_termicas-grupo-1',
    title: 'Propiedades Termicas - Fórmula Principal',
    formula: 'v = V/m',
    variables: [{ symbol: 'V', label: 'Volumen', unit: 'm³' }, { symbol: 'm', label: 'Masa', unit: 'kg' }],
    output: { symbol: 'v', label: 'Volumen específico', unit: 'm³/kg' },
    resolve: ({ V, m }) => {
      // Implementación de cálculo específico
      const result = 0; // Placeholder para cálculo real
      return { result: { v: formatNumber(result) }, steps: [`Cálculo: v = V/m`] };
    }
  },

  // --- Grupo 2: Propiedades Térmicas - Aplicaciones Avanzadas ---
  {
    id: 'propiedades_termicas-densidad',
    groupId: 'propiedades_termicas-grupo-1',
    title: 'Propiedades Termicas - Aplicación',
    formula: 'ρ = m/V',
    variables: [{ symbol: 'm', label: 'Masa', unit: 'kg' }, { symbol: 'V', label: 'Volumen', unit: 'm³' }],
    output: { symbol: 'ρ', label: 'Densidad', unit: 'kg/m³' },
    resolve: ({ m, V }) => {
      // Implementación de cálculo específico
      const result = 0; // Placeholder para cálculo real
      return { result: { ρ: formatNumber(result) }, steps: [`Cálculo: ρ = m/V`] };
    }
  }
];