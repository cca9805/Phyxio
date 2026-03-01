import { formatNumber } from '../../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'fuerza_distancia',
    groupId: 'imanes_magnetismo',
    title: 'Fuerza Magnética según Distancia',
    formula: 'F2 = F1 * (d1 / d2)^2',
    variables: [
      { symbol: 'F1', label: 'Fuerza inicial', unit: 'N' },
      { symbol: 'd1', label: 'Distancia inicial', unit: 'cm' },
      { symbol: 'd2', label: 'Nueva distancia', unit: 'cm' }
    ],
    output: { symbol: 'F2', label: 'Nueva fuerza', unit: 'N' },
    resolve: ({ F1, d1, d2 }) => {
      const F1num = parseFloat(F1);
      const d1num = parseFloat(d1);
      const d2num = parseFloat(d2);
      
      const F2 = F1num * Math.pow(d1num / d2num, 2);
      const factor = Math.pow(d1num / d2num, 2);
      const porcentaje = (F2 / F1num) * 100;
      
      return {
        result: { F2: formatNumber(F2) },
        steps: [
          `Fuerza inicial: F₁ = ${F1} N a ${d1} cm`,
          `Nueva distancia: d₂ = ${d2} cm`,
          ``,
          `Fórmula: F₂ = F₁ × (d₁/d₂)²`,
          `F₂ = ${F1} × (${d1}/${d2})²`,
          `F₂ = ${F1} × ${formatNumber(factor)}`,
          `F₂ = ${formatNumber(F2)} N`,
          ``,
          `La fuerza es ${formatNumber(porcentaje)}% de la inicial`
        ]
      };
    }
  },

  {
    id: 'distancia_para_fuerza',
    groupId: 'imanes_magnetismo',
    title: 'Distancia para Obtener Cierta Fuerza',
    formula: 'd2 = d1 * sqrt(F1 / F2)',
    variables: [
      { symbol: 'F1', label: 'Fuerza inicial', unit: 'N' },
      { symbol: 'd1', label: 'Distancia inicial', unit: 'cm' },
      { symbol: 'F2', label: 'Fuerza deseada', unit: 'N' }
    ],
    output: { symbol: 'd2', label: 'Distancia necesaria', unit: 'cm' },
    resolve: ({ F1, d1, F2 }) => {
      const F1num = parseFloat(F1);
      const d1num = parseFloat(d1);
      const F2num = parseFloat(F2);
      
      const d2 = d1num * Math.sqrt(F1num / F2num);
      const factor = Math.sqrt(F1num / F2num);
      
      return {
        result: { d2: formatNumber(d2) },
        steps: [
          `Fuerza inicial: F₁ = ${F1} N a ${d1} cm`,
          `Fuerza deseada: F₂ = ${F2} N`,
          ``,
          `Fórmula: d₂ = d₁ × √(F₁/F₂)`,
          `d₂ = ${d1} × √(${F1}/${F2})`,
          `d₂ = ${d1} × ${formatNumber(factor)}`,
          `d₂ = ${formatNumber(d2)} cm`,
          ``,
          `A ${formatNumber(d2)} cm la fuerza será ${F2} N`
        ]
      };
    }
  },

  {
    id: 'comparar_fuerzas',
    groupId: 'imanes_magnetismo',
    title: 'Comparar Fuerzas a Diferentes Distancias',
    formula: 'Ratio = (d2 / d1)^2',
    variables: [
      { symbol: 'd1', label: 'Primera distancia', unit: 'cm' },
      { symbol: 'd2', label: 'Segunda distancia', unit: 'cm' }
    ],
    output: { symbol: 'ratio', label: 'Ratio de fuerzas', unit: '' },
    resolve: ({ d1, d2 }) => {
      const d1num = parseFloat(d1);
      const d2num = parseFloat(d2);
      
      const ratio = Math.pow(d1num / d2num, 2);
      const porcentaje = ratio * 100;
      
      let interpretacion = "";
      if (d2num > d1num) {
        interpretacion = `La fuerza a ${d2} cm es ${formatNumber(porcentaje)}% de la fuerza a ${d1} cm`;
      } else {
        interpretacion = `La fuerza a ${d2} cm es ${formatNumber(ratio)} veces mayor que a ${d1} cm`;
      }
      
      return {
        result: { ratio: formatNumber(ratio) },
        steps: [
          `Distancia 1: ${d1} cm`,
          `Distancia 2: ${d2} cm`,
          ``,
          `Ratio de fuerzas: (d₁/d₂)²`,
          `Ratio = (${d1}/${d2})²`,
          `Ratio = ${formatNumber(ratio)}`,
          ``,
          interpretacion
        ]
      };
    }
  }
];
