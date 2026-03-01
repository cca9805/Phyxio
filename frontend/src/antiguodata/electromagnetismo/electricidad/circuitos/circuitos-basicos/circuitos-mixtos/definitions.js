import { formatNumber } from '../../../../../../utils/formatNumber';

export const definitions = [
  // --- Simplificación de Paralelo ---
  {
    id: 'mixto-resistencia-paralelo',
    groupId: 'mixto-resistencia-paralelo',
    title: 'Resistencia Equivalente Paralelo (2 resistencias)',
    isFundamental: true,
    formula: '1/R_eq = 1/R1 + 1/R2',
    variables: [
      { symbol: 'R1', label: 'Resistencia 1 en paralelo (Ω)', unit: 'Ω' },
      { symbol: 'R2', label: 'Resistencia 2 en paralelo (Ω)', unit: 'Ω' }
    ],
    output: { symbol: 'R_eq', label: 'Resistencia Equivalente (Ω)', unit: 'Ω' },
    resolve: ({ R1, R2 }) => {
      const r1 = parseFloat(R1);
      const r2 = parseFloat(R2);
      if (r1 === 0 || r2 === 0) {
        return { error: "Las resistencias no pueden ser cero." };
      }
      const inversoTotal = (1 / r1) + (1 / r2);
      const req = 1 / inversoTotal;
      return { 
        result: { 'R_eq': formatNumber(req) }, 
        steps: [
          `Paso 1: Simplificar paralelo`,
          `Datos: R₁ = ${R1} Ω, R₂ = ${R2} Ω (en paralelo)`,
          `Fórmula: 1/R_eq = 1/R₁ + 1/R₂`,
          `1/R_eq = 1/${R1} + 1/${R2} = ${formatNumber(inversoTotal)}`,
          `R_eq = ${formatNumber(req)} Ω`
        ] 
      };
    }
  },

  // --- Resistencia Total del Circuito Mixto ---
  {
    id: 'mixto-resistencia-total',
    groupId: 'mixto-resistencia-total',
    title: 'Resistencia Total (Serie + Paralelo + Serie)',
    isFundamental: true,
    formula: 'R_total = R_serie1 + R_eq_paralelo + R_serie2',
    variables: [
      { symbol: 'R_serie1', label: 'Resistencia en serie antes (Ω)', unit: 'Ω' },
      { symbol: 'R_eq_paralelo', label: 'Resistencia equivalente paralelo (Ω)', unit: 'Ω' },
      { symbol: 'R_serie2', label: 'Resistencia en serie después (Ω)', unit: 'Ω', defaultValue: 0 }
    ],
    output: { symbol: 'R_total', label: 'Resistencia Total (Ω)', unit: 'Ω' },
    resolve: ({ R_serie1, R_eq_paralelo, R_serie2 = 0 }) => {
      const total = parseFloat(R_serie1) + parseFloat(R_eq_paralelo) + parseFloat(R_serie2);
      return { 
        result: { 'R_total': formatNumber(total) }, 
        steps: [
          `Paso 2: Sumar resistencias en serie`,
          `Datos: R_serie1 = ${R_serie1} Ω, R_eq = ${R_eq_paralelo} Ω, R_serie2 = ${R_serie2} Ω`,
          `Fórmula: R_total = R_serie1 + R_eq + R_serie2`,
          `R_total = ${R_serie1} + ${R_eq_paralelo} + ${R_serie2}`,
          `R_total = ${formatNumber(total)} Ω`
        ] 
      };
    }
  },

  // --- Corriente Total ---
  {
    id: 'mixto-corriente-total',
    groupId: 'mixto-corriente-total',
    title: 'Corriente Total del Circuito',
    isFundamental: true,
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
          `Paso 3: Calcular corriente total`,
          `Datos: V = ${V} V, R_total = ${R_total} Ω`,
          `Fórmula: I = V / R_total`,
          `I = ${V} / ${R_total}`,
          `I = ${formatNumber(I)} A`,
          `Esta corriente circula por todas las resistencias en serie`
        ] 
      };
    }
  },

  // --- Voltajes en Componentes Serie ---
  {
    id: 'mixto-voltaje-componente',
    groupId: 'mixto-voltaje-componente',
    title: 'Voltaje en Componente Serie',
    isFundamental: false,
    formula: 'V = I × R',
    variables: [
      { symbol: 'I', label: 'Corriente total (A)', unit: 'A' },
      { symbol: 'R', label: 'Resistencia del componente (Ω)', unit: 'Ω' }
    ],
    output: { symbol: 'V', label: 'Voltaje en el componente (V)', unit: 'V' },
    resolve: ({ I, R }) => {
      const V = parseFloat(I) * parseFloat(R);
      return { 
        result: { 'V': formatNumber(V) }, 
        steps: [
          `Paso 4: Calcular voltaje en componente serie`,
          `Datos: I = ${I} A, R = ${R} Ω`,
          `Fórmula: V = I × R`,
          `V = ${I} × ${R}`,
          `V = ${formatNumber(V)} V`
        ] 
      };
    }
  },

  // --- Corrientes en Ramas Paralelas ---
  {
    id: 'mixto-corriente-rama',
    groupId: 'mixto-corriente-rama',
    title: 'Corriente en Rama Paralela',
    isFundamental: false,
    formula: 'I = V / R',
    variables: [
      { symbol: 'V', label: 'Voltaje en el paralelo (V)', unit: 'V' },
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
          `Paso 5: Calcular corriente en rama paralela`,
          `Datos: V_paralelo = ${V} V, R_rama = ${R} Ω`,
          `Fórmula: I = V / R`,
          `I = ${V} / ${R}`,
          `I = ${formatNumber(I)} A`
        ] 
      };
    }
  },

  // --- Verificación de Voltajes ---
  {
    id: 'mixto-verificar-voltajes',
    groupId: 'mixto-verificar-voltajes',
    title: 'Verificar Suma de Voltajes',
    isFundamental: false,
    formula: 'V_total = V1 + V2 + V3',
    variables: [
      { symbol: 'V1', label: 'Voltaje 1 (V)', unit: 'V' },
      { symbol: 'V2', label: 'Voltaje 2 (V)', unit: 'V' },
      { symbol: 'V3', label: 'Voltaje 3 (V)', unit: 'V', defaultValue: 0 }
    ],
    output: { symbol: 'V_total', label: 'Voltaje Total (V)', unit: 'V' },
    resolve: ({ V1, V2, V3 = 0 }) => {
      const total = parseFloat(V1) + parseFloat(V2) + parseFloat(V3);
      return { 
        result: { 'V_total': formatNumber(total) }, 
        steps: [
          `Verificación: Suma de voltajes en serie`,
          `V_total = ${V1} + ${V2} + ${V3}`,
          `V_total = ${formatNumber(total)} V`,
          `Debe coincidir con el voltaje de la fuente`
        ] 
      };
    }
  },

  // --- Verificación de Corrientes ---
  {
    id: 'mixto-verificar-corrientes',
    groupId: 'mixto-verificar-corrientes',
    title: 'Verificar Suma de Corrientes',
    isFundamental: false,
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
          `Verificación: Suma de corrientes en paralelo`,
          `I_total = ${I1} + ${I2} + ${I3}`,
          `I_total = ${formatNumber(total)} A`,
          `Debe coincidir con la corriente que entra al paralelo`
        ] 
      };
    }
  }
];
