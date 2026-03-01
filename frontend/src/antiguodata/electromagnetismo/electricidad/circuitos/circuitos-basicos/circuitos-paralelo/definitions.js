import { formatNumber } from '../../../../../../utils/formatNumber';

export const definitions = [
  // --- Resistencia en Paralelo (2 resistencias) ---
  {
    id: 'paralelo-resistencia-2',
    groupId: 'paralelo-resistencia-2',
    title: 'Resistencia Total (2 resistencias)',
    isFundamental: true,
    formula: '1/R_total = 1/R1 + 1/R2',
    variables: [
      { symbol: 'R1', label: 'Resistencia 1 (Ω)', unit: 'Ω' },
      { symbol: 'R2', label: 'Resistencia 2 (Ω)', unit: 'Ω' }
    ],
    output: { symbol: 'R_total', label: 'Resistencia Total (Ω)', unit: 'Ω' },
    resolve: ({ R1, R2 }) => {
      const r1 = parseFloat(R1);
      const r2 = parseFloat(R2);
      if (r1 === 0 || r2 === 0) {
        return { error: "Las resistencias no pueden ser cero." };
      }
      const inversoTotal = (1 / r1) + (1 / r2);
      const total = 1 / inversoTotal;
      return { 
        result: { 'R_total': formatNumber(total) }, 
        steps: [
          `Datos: R₁ = ${R1} Ω, R₂ = ${R2} Ω`,
          `Fórmula: 1/R_total = 1/R₁ + 1/R₂`,
          `Sustitución: 1/R_total = 1/${R1} + 1/${R2}`,
          `1/R_total = ${formatNumber(inversoTotal)}`,
          `R_total = 1/${formatNumber(inversoTotal)} = ${formatNumber(total)} Ω`
        ] 
      };
    }
  },

  // --- Resistencia en Paralelo (3 resistencias) ---
  {
    id: 'paralelo-resistencia-3',
    groupId: 'paralelo-resistencia-3',
    title: 'Resistencia Total (3 resistencias)',
    isFundamental: true,
    formula: '1/R_total = 1/R1 + 1/R2 + 1/R3',
    variables: [
      { symbol: 'R1', label: 'Resistencia 1 (Ω)', unit: 'Ω' },
      { symbol: 'R2', label: 'Resistencia 2 (Ω)', unit: 'Ω' },
      { symbol: 'R3', label: 'Resistencia 3 (Ω)', unit: 'Ω' }
    ],
    output: { symbol: 'R_total', label: 'Resistencia Total (Ω)', unit: 'Ω' },
    resolve: ({ R1, R2, R3 }) => {
      const r1 = parseFloat(R1);
      const r2 = parseFloat(R2);
      const r3 = parseFloat(R3);
      if (r1 === 0 || r2 === 0 || r3 === 0) {
        return { error: "Las resistencias no pueden ser cero." };
      }
      const inversoTotal = (1 / r1) + (1 / r2) + (1 / r3);
      const total = 1 / inversoTotal;
      return { 
        result: { 'R_total': formatNumber(total) }, 
        steps: [
          `Datos: R₁ = ${R1} Ω, R₂ = ${R2} Ω, R₃ = ${R3} Ω`,
          `Fórmula: 1/R_total = 1/R₁ + 1/R₂ + 1/R₃`,
          `Sustitución: 1/R_total = 1/${R1} + 1/${R2} + 1/${R3}`,
          `1/R_total = ${formatNumber(inversoTotal)}`,
          `R_total = 1/${formatNumber(inversoTotal)} = ${formatNumber(total)} Ω`
        ] 
      };
    }
  },

  // --- Resistencias Iguales en Paralelo ---
  {
    id: 'paralelo-resistencia-iguales',
    groupId: 'paralelo-resistencia-iguales',
    title: 'Resistencias Iguales en Paralelo',
    isFundamental: false,
    formula: 'R_total = R / n',
    variables: [
      { symbol: 'R', label: 'Valor de cada resistencia (Ω)', unit: 'Ω' },
      { symbol: 'n', label: 'Número de resistencias', unit: '' }
    ],
    output: { symbol: 'R_total', label: 'Resistencia Total (Ω)', unit: 'Ω' },
    resolve: ({ R, n }) => {
      const num = parseFloat(n);
      if (num === 0) {
        return { error: "El número de resistencias no puede ser cero." };
      }
      const total = parseFloat(R) / num;
      return { 
        result: { 'R_total': formatNumber(total) }, 
        steps: [
          `Datos: R = ${R} Ω, n = ${n} resistencias`,
          `Fórmula: R_total = R / n`,
          `Sustitución: R_total = ${R} / ${n}`,
          `Resultado: R_total = ${formatNumber(total)} Ω`
        ] 
      };
    }
  },
  
  // --- Corriente Total en Paralelo ---
  {
    id: 'paralelo-corriente-total',
    groupId: 'paralelo-corriente-total',
    title: 'Corriente Total',
    isFundamental: true,
    formula: 'I_total = I1 + I2 + I3',
    variables: [
      { symbol: 'I1', label: 'Corriente rama 1 (A)', unit: 'A' },
      { symbol: 'I2', label: 'Corriente rama 2 (A)', unit: 'A' },
      { symbol: 'I3', label: 'Corriente rama 3 (A)', unit: 'A', defaultValue: 0 }
    ],
    output: { symbol: 'I_total', label: 'Corriente Total (A)', unit: 'A' },
    resolve: ({ I1, I2, I3 = 0 }) => {
      const total = parseFloat(I1) + parseFloat(I2) + parseFloat(I3);
      return { 
        result: { 'I_total': formatNumber(total) }, 
        steps: [
          `Datos: I₁ = ${I1} A, I₂ = ${I2} A, I₃ = ${I3} A`,
          `Fórmula: I_total = I₁ + I₂ + I₃`,
          `Sustitución: I_total = ${I1} + ${I2} + ${I3}`,
          `Resultado: I_total = ${formatNumber(total)} A`
        ] 
      };
    }
  },

  // --- Corriente en una Rama ---
  {
    id: 'paralelo-corriente-rama',
    groupId: 'paralelo-corriente-rama',
    title: 'Corriente en una Rama',
    isFundamental: true,
    formula: 'I = V / R',
    variables: [
      { symbol: 'V', label: 'Voltaje de la fuente (V)', unit: 'V' },
      { symbol: 'R', label: 'Resistencia de la rama (Ω)', unit: 'Ω' }
    ],
    output: { symbol: 'I', label: 'Corriente en la rama (A)', unit: 'A' },
    resolve: ({ V, R }) => {
      if (parseFloat(R) === 0) {
        return { error: "La resistencia no puede ser cero." };
      }
      const I = parseFloat(V) / parseFloat(R);
      return { 
        result: { 'I': formatNumber(I) }, 
        steps: [
          `Datos: V = ${V} V, R = ${R} Ω`,
          `Fórmula: I = V / R`,
          `Sustitución: I = ${V} / ${R}`,
          `Resultado: I = ${formatNumber(I)} A`
        ] 
      };
    }
  },
  
  // --- Corriente Total del Circuito ---
  {
    id: 'paralelo-corriente-circuito',
    groupId: 'paralelo-corriente-circuito',
    title: 'Corriente Total del Circuito',
    isFundamental: false,
    formula: 'I = V / R_total',
    variables: [
      { symbol: 'V', label: 'Voltaje de la fuente (V)', unit: 'V' },
      { symbol: 'R_total', label: 'Resistencia Total (Ω)', unit: 'Ω' }
    ],
    output: { symbol: 'I', label: 'Corriente Total (A)', unit: 'A' },
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

  // --- Potencia en una Rama ---
  {
    id: 'paralelo-potencia-rama',
    groupId: 'paralelo-potencia-rama',
    title: 'Potencia en una Rama',
    isFundamental: false,
    formula: 'P = V² / R',
    variables: [
      { symbol: 'V', label: 'Voltaje (V)', unit: 'V' },
      { symbol: 'R', label: 'Resistencia de la rama (Ω)', unit: 'Ω' }
    ],
    output: { symbol: 'P', label: 'Potencia (W)', unit: 'W' },
    resolve: ({ V, R }) => {
      if (parseFloat(R) === 0) {
        return { error: "La resistencia no puede ser cero." };
      }
      const v = parseFloat(V);
      const P = (v * v) / parseFloat(R);
      return { 
        result: { 'P': formatNumber(P) }, 
        steps: [
          `Datos: V = ${V} V, R = ${R} Ω`,
          `Fórmula: P = V² / R`,
          `Sustitución: P = ${V}² / ${R}`,
          `P = ${v * v} / ${R}`,
          `Resultado: P = ${formatNumber(P)} W`
        ] 
      };
    }
  },

  // --- Potencia Total ---
  {
    id: 'paralelo-potencia-total',
    groupId: 'paralelo-potencia-total',
    title: 'Potencia Total',
    isFundamental: false,
    formula: 'P_total = P1 + P2 + P3',
    variables: [
      { symbol: 'P1', label: 'Potencia rama 1 (W)', unit: 'W' },
      { symbol: 'P2', label: 'Potencia rama 2 (W)', unit: 'W' },
      { symbol: 'P3', label: 'Potencia rama 3 (W)', unit: 'W', defaultValue: 0 }
    ],
    output: { symbol: 'P_total', label: 'Potencia Total (W)', unit: 'W' },
    resolve: ({ P1, P2, P3 = 0 }) => {
      const total = parseFloat(P1) + parseFloat(P2) + parseFloat(P3);
      return { 
        result: { 'P_total': formatNumber(total) }, 
        steps: [
          `Datos: P₁ = ${P1} W, P₂ = ${P2} W, P₃ = ${P3} W`,
          `Fórmula: P_total = P₁ + P₂ + P₃`,
          `Sustitución: P_total = ${P1} + ${P2} + ${P3}`,
          `Resultado: P_total = ${formatNumber(total)} W`
        ] 
      };
    }
  }
];
