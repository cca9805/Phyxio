import { formatNumber } from '../../../../../../utils/formatNumber';

export const definitions = [
  // --- Grupo 1: Resistencia en Serie ---
  {
    id: 'resistencia_serie_2',
    groupId: 'circuitos_serie',
    title: 'Resistencia Total (2 resistencias)',
    formula: 'R_total = R1 + R2',
    variables: [
      { symbol: 'R1', label: 'Resistencia 1', unit: 'Ω' },
      { symbol: 'R2', label: 'Resistencia 2', unit: 'Ω' }
    ],
    output: { symbol: 'R_total', label: 'Resistencia Total', unit: 'Ω' },
    resolve: ({ R1, R2 }) => {
      const total = parseFloat(R1) + parseFloat(R2);
      return { 
        result: { 'R_total': formatNumber(total) }, 
        steps: [
          `Datos: R₁ = ${R1} Ω, R₂ = ${R2} Ω`,
          `Fórmula: R_total = R₁ + R₂`,
          `Sustitución: R_total = ${R1} + ${R2}`,
          `Resultado: R_total = ${formatNumber(total)} Ω`
        ] 
      };
    }
  },
  
  {
    id: 'resistencia_serie_3',
    groupId: 'circuitos_serie',
    title: 'Resistencia Total (3 resistencias)',
    formula: 'R_total = R1 + R2 + R3',
    variables: [
      { symbol: 'R1', label: 'Resistencia 1', unit: 'Ω' },
      { symbol: 'R2', label: 'Resistencia 2', unit: 'Ω' },
      { symbol: 'R3', label: 'Resistencia 3', unit: 'Ω' }
    ],
    output: { symbol: 'R_total', label: 'Resistencia Total', unit: 'Ω' },
    resolve: ({ R1, R2, R3 }) => {
      const total = parseFloat(R1) + parseFloat(R2) + parseFloat(R3);
      return { 
        result: { 'R_total': formatNumber(total) }, 
        steps: [
          `Datos: R₁ = ${R1} Ω, R₂ = ${R2} Ω, R₃ = ${R3} Ω`,
          `Fórmula: R_total = R₁ + R₂ + R₃`,
          `Sustitución: R_total = ${R1} + ${R2} + ${R3}`,
          `Resultado: R_total = ${formatNumber(total)} Ω`
        ] 
      };
    }
  },
  
  // --- Grupo 2: Voltaje en Serie ---
  {
    id: 'voltaje_serie_2',
    groupId: 'circuitos_serie',
    title: 'Voltaje Total (2 componentes)',
    formula: 'V_total = V1 + V2',
    variables: [
      { symbol: 'V1', label: 'Voltaje 1', unit: 'V' },
      { symbol: 'V2', label: 'Voltaje 2', unit: 'V' }
    ],
    output: { symbol: 'V_total', label: 'Voltaje Total', unit: 'V' },
    resolve: ({ V1, V2 }) => {
      const total = parseFloat(V1) + parseFloat(V2);
      return { 
        result: { 'V_total': formatNumber(total) }, 
        steps: [
          `Datos: V₁ = ${V1} V, V₂ = ${V2} V`,
          `Fórmula: V_total = V₁ + V₂`,
          `Sustitución: V_total = ${V1} + ${V2}`,
          `Resultado: V_total = ${formatNumber(total)} V`
        ] 
      };
    }
  },

  {
    id: 'voltaje_serie_3',
    groupId: 'circuitos_serie',
    title: 'Voltaje Total (3 componentes)',
    formula: 'V_total = V1 + V2 + V3',
    variables: [
      { symbol: 'V1', label: 'Voltaje 1', unit: 'V' },
      { symbol: 'V2', label: 'Voltaje 2', unit: 'V' },
      { symbol: 'V3', label: 'Voltaje 3', unit: 'V' }
    ],
    output: { symbol: 'V_total', label: 'Voltaje Total', unit: 'V' },
    resolve: ({ V1, V2, V3 }) => {
      const total = parseFloat(V1) + parseFloat(V2) + parseFloat(V3);
      return { 
        result: { 'V_total': formatNumber(total) }, 
        steps: [
          `Datos: V₁ = ${V1} V, V₂ = ${V2} V, V₃ = ${V3} V`,
          `Fórmula: V_total = V₁ + V₂ + V₃`,
          `Sustitución: V_total = ${V1} + ${V2} + ${V3}`,
          `Resultado: V_total = ${formatNumber(total)} V`
        ] 
      };
    }
  },

  {
    id: 'voltaje_componente',
    groupId: 'circuitos_serie',
    title: 'Voltaje en un Componente (V = I × R)',
    formula: 'V = I × R',
    variables: [
      { symbol: 'I', label: 'Corriente del circuito', unit: 'A' },
      { symbol: 'R', label: 'Resistencia del componente', unit: 'Ω' }
    ],
    output: { symbol: 'V', label: 'Voltaje en el componente', unit: 'V' },
    resolve: ({ I, R }) => {
      const V = parseFloat(I) * parseFloat(R);
      return { 
        result: { 'V': formatNumber(V) }, 
        steps: [
          `Datos: I = ${I} A, R = ${R} Ω`,
          `Fórmula: V = I × R`,
          `Sustitución: V = ${I} × ${R}`,
          `Resultado: V = ${formatNumber(V)} V`
        ] 
      };
    }
  },
  
  // --- Grupo 3: Ley de Ohm en Serie ---
  {
    id: 'corriente_serie_ohm',
    groupId: 'circuitos_serie',
    title: 'Corriente del Circuito (I = V / R_total)',
    formula: 'I = V / R_total',
    variables: [
      { symbol: 'V', label: 'Voltaje de la fuente', unit: 'V' },
      { symbol: 'R_total', label: 'Resistencia Total', unit: 'Ω' }
    ],
    output: { symbol: 'I', label: 'Corriente', unit: 'A' },
    resolve: ({ V, R_total }) => {
      if (parseFloat(R_total) === 0) {
        return { error: "La resistencia total no puede ser cero." };
      }
      const I = parseFloat(V) / parseFloat(R_total);
      return { 
        result: { 'I': formatNumber(I) }, 
        steps: [
          `Datos: V = ${V} V, R_total = ${R_total} Ω`,
          `Fórmula: I = V / R_total`,
          `Sustitución: I = ${V} / ${R_total}`,
          `Resultado: I = ${formatNumber(I)} A`
        ] 
      };
    }
  },

  {
    id: 'voltaje_fuente',
    groupId: 'circuitos_serie',
    title: 'Voltaje de la Fuente (V = I × R_total)',
    formula: 'V = I × R_total',
    variables: [
      { symbol: 'I', label: 'Corriente del circuito', unit: 'A' },
      { symbol: 'R_total', label: 'Resistencia Total', unit: 'Ω' }
    ],
    output: { symbol: 'V', label: 'Voltaje de la fuente', unit: 'V' },
    resolve: ({ I, R_total }) => {
      const V = parseFloat(I) * parseFloat(R_total);
      return { 
        result: { 'V': formatNumber(V) }, 
        steps: [
          `Datos: I = ${I} A, R_total = ${R_total} Ω`,
          `Fórmula: V = I × R_total`,
          `Sustitución: V = ${I} × ${R_total}`,
          `Resultado: V = ${formatNumber(V)} V`
        ] 
      };
    }
  },

  {
    id: 'resistencia_desde_vi',
    groupId: 'circuitos_serie',
    title: 'Resistencia Total (R_total = V / I)',
    formula: 'R_total = V / I',
    variables: [
      { symbol: 'V', label: 'Voltaje de la fuente', unit: 'V' },
      { symbol: 'I', label: 'Corriente del circuito', unit: 'A' }
    ],
    output: { symbol: 'R_total', label: 'Resistencia Total', unit: 'Ω' },
    resolve: ({ V, I }) => {
      if (parseFloat(I) === 0) {
        return { error: "La corriente no puede ser cero." };
      }
      const R = parseFloat(V) / parseFloat(I);
      return { 
        result: { 'R_total': formatNumber(R) }, 
        steps: [
          `Datos: V = ${V} V, I = ${I} A`,
          `Fórmula: R_total = V / I`,
          `Sustitución: R_total = ${V} / ${I}`,
          `Resultado: R_total = ${formatNumber(R)} Ω`
        ] 
      };
    }
  }
];
