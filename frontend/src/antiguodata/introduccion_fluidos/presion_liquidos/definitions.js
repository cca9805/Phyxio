import { formatNumber } from '../../../utils/formatNumber.js';

// Constantes útiles
const g = 10; // m/s² (simplificado para ESO)
const rho_agua = 1000; // kg/m³
const P_atm = 101325; // Pa

export const definitions = [
  // Grupo 1: Presión hidrostática
  {
    id: 'presion-hidrostatica',
    groupId: 'presion-hidrostatica',
    title: 'Presión Hidrostática',
    isFundamental: true,
    formula: String.raw`P_{total} = P_{atm} + \rho \cdot g \cdot h`,
    variables: [
      { symbol: 'h', label: 'Profundidad', unit: 'm' },
      { symbol: 'rho', label: 'Densidad del líquido (ρ)', unit: 'kg/m³', defaultValue: rho_agua }
    ],
    output: { symbol: 'P_total', label: 'Presión total', unit: 'Pa' },
    resolve: ({ h, rho }) => {
      const profundidad = parseFloat(h);
      const densidad = parseFloat(rho);
      
      if (profundidad < 0) {
        return { error: 'La profundidad no puede ser negativa.' };
      }
      
      const P_liquido = densidad * g * profundidad;
      const P_total = P_atm + P_liquido;
      const atm = P_total / P_atm;
      
      return {
        result: { P_total: formatNumber(P_total) },
        steps: [
          `Presión del líquido: P = ρ × g × h`,
          `P_líquido = ${densidad} × ${g} × ${profundidad} = ${formatNumber(P_liquido)} Pa`,
          `Presión total = P_atm + P_líquido`,
          `P_total = ${P_atm} + ${formatNumber(P_liquido)} = ${formatNumber(P_total)} Pa`,
          `Equivalente a ${formatNumber(atm)} atmósferas`
        ]
      };
    }
  },

  // Grupo 2: Profundidad desde presión
  {
    id: 'profundidad-desde-presion',
    groupId: 'presion-hidrostatica',
    title: 'Calcular Profundidad',
    formula: String.raw`h = \frac{P_{total} - P_{atm}}{\rho \cdot g}`,
    variables: [
      { symbol: 'P_total', label: 'Presión total', unit: 'Pa' },
      { symbol: 'rho', label: 'Densidad del líquido (ρ)', unit: 'kg/m³', defaultValue: rho_agua }
    ],
    output: { symbol: 'h', label: 'Profundidad', unit: 'm' },
    resolve: ({ P_total, rho }) => {
      const presion = parseFloat(P_total);
      const densidad = parseFloat(rho);
      
      if (presion < P_atm) {
        return { error: 'La presión total debe ser mayor que la presión atmosférica.' };
      }
      
      const P_liquido = presion - P_atm;
      const h = P_liquido / (densidad * g);
      
      return {
        result: { h: formatNumber(h) },
        steps: [
          `Presión del líquido: P_líquido = P_total - P_atm`,
          `P_líquido = ${presion} - ${P_atm} = ${formatNumber(P_liquido)} Pa`,
          `Profundidad: h = P_líquido / (ρ × g)`,
          `h = ${formatNumber(P_liquido)} / (${densidad} × ${g})`,
          `h = ${formatNumber(h)} metros`
        ]
      };
    }
  },

  // Grupo 3: Prensa hidráulica - Fuerza resultante
  {
    id: 'prensa-hidraulica',
    groupId: 'prensa-hidraulica',
    title: 'Prensa Hidráulica - Fuerza Resultante',
    isFundamental: true,
    formula: String.raw`F_2 = F_1 \cdot \frac{A_2}{A_1}`,
    variables: [
      { symbol: 'F1', label: 'Fuerza aplicada (F₁)', unit: 'N' },
      { symbol: 'A1', label: 'Área émbolo pequeño (A₁)', unit: 'cm²' },
      { symbol: 'A2', label: 'Área émbolo grande (A₂)', unit: 'cm²' }
    ],
    output: { symbol: 'F2', label: 'Fuerza resultante (F₂)', unit: 'N' },
    resolve: ({ F1, A1, A2 }) => {
      const fuerza1 = parseFloat(F1);
      const area1 = parseFloat(A1);
      const area2 = parseFloat(A2);
      
      if (area1 <= 0 || area2 <= 0) {
        return { error: 'Las áreas deben ser positivas.' };
      }
      
      const F2 = fuerza1 * (area2 / area1);
      const ventajaMecanica = area2 / area1;
      const kg = F2 / 10; // Conversión aproximada a kg
      
      return {
        result: { F2: formatNumber(F2) },
        steps: [
          `Ventaja mecánica: VM = A₂ / A₁ = ${area2} / ${area1} = ${formatNumber(ventajaMecanica)}`,
          `Fuerza resultante: F₂ = F₁ × VM`,
          `F₂ = ${fuerza1} × ${formatNumber(ventajaMecanica)}`,
          `F₂ = ${formatNumber(F2)} N`,
          `Equivalente a levantar ${formatNumber(kg)} kg`
        ]
      };
    }
  },

  // Grupo 4: Prensa hidráulica - Fuerza necesaria
  {
    id: 'prensa-fuerza-necesaria',
    groupId: 'prensa-hidraulica',
    title: 'Prensa Hidráulica - Fuerza Necesaria',
    formula: String.raw`F_1 = F_2 \cdot \frac{A_1}{A_2}`,
    variables: [
      { symbol: 'F2', label: 'Fuerza a levantar (F₂)', unit: 'N' },
      { symbol: 'A1', label: 'Área émbolo pequeño (A₁)', unit: 'cm²' },
      { symbol: 'A2', label: 'Área émbolo grande (A₂)', unit: 'cm²' }
    ],
    output: { symbol: 'F1', label: 'Fuerza necesaria (F₁)', unit: 'N' },
    resolve: ({ F2, A1, A2 }) => {
      const fuerza2 = parseFloat(F2);
      const area1 = parseFloat(A1);
      const area2 = parseFloat(A2);
      
      if (area1 <= 0 || area2 <= 0) {
        return { error: 'Las áreas deben ser positivas.' };
      }
      
      if (area2 <= area1) {
        return { error: 'El área grande (A₂) debe ser mayor que el área pequeña (A₁) para tener ventaja mecánica.' };
      }
      
      const F1 = fuerza2 * (area1 / area2);
      const ventajaMecanica = area2 / area1;
      
      return {
        result: { F1: formatNumber(F1) },
        steps: [
          `Ventaja mecánica: VM = A₂ / A₁ = ${area2} / ${area1} = ${formatNumber(ventajaMecanica)}`,
          `Fuerza necesaria: F₁ = F₂ / VM`,
          `F₁ = ${fuerza2} / ${formatNumber(ventajaMecanica)}`,
          `F₁ = ${formatNumber(F1)} N`,
          `Se reduce la fuerza necesaria ${formatNumber(ventajaMecanica)} veces`
        ]
      };
    }
  },

  // Grupo 5: Ventaja mecánica de prensa
  {
    id: 'ventaja-mecanica-prensa',
    groupId: 'prensa-hidraulica',
    title: 'Ventaja Mecánica de Prensa',
    formula: String.raw`VM = \frac{A_2}{A_1} = \frac{F_2}{F_1}`,
    variables: [
      { symbol: 'A1', label: 'Área émbolo pequeño (A₁)', unit: 'cm²' },
      { symbol: 'A2', label: 'Área émbolo grande (A₂)', unit: 'cm²' }
    ],
    output: { symbol: 'VM', label: 'Ventaja Mecánica', unit: '-' },
    resolve: ({ A1, A2 }) => {
      const area1 = parseFloat(A1);
      const area2 = parseFloat(A2);
      
      if (area1 <= 0 || area2 <= 0) {
        return { error: 'Las áreas deben ser positivas.' };
      }
      
      const VM = area2 / area1;
      
      return {
        result: { VM: formatNumber(VM) },
        steps: [
          `Ventaja mecánica: VM = A₂ / A₁`,
          `VM = ${area2} / ${area1}`,
          `VM = ${formatNumber(VM)}`,
          VM > 1 
            ? `La prensa multiplica la fuerza por ${formatNumber(VM)}`
            : 'Sin ventaja mecánica (A₂ debe ser mayor que A₁)'
        ]
      };
    }
  }
];
