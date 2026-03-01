import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'relacion-presion-choque',
    groupId: 'ondas-choque',
    title: 'Relación de Presión en Choque Normal (P₂/P₁)',
    formula: 'P2/P1 = 1 + (2γ/(γ+1)) * (M₁² - 1)',
    isFundamental: true,
    variables: [
      { symbol: 'M1', label: 'Mach Antes del Choque (M₁) (adimensional)', unit: 'adimensional' },
      { symbol: 'gamma', label: 'Coeficiente Adiabático (γ) (adimensional)', unit: 'adimensional', defaultValue: 1.4 }
    ],
    output: { symbol: 'ratio', label: 'Relación P₂/P₁ (adimensional)', unit: 'adimensional' },
    resolve: ({ M1, gamma = 1.4 }) => {
      const M = parseFloat(M1);
      const g = parseFloat(gamma);
      const ratio = 1 + (2 * g / (g + 1)) * (M * M - 1);
      return { 
        result: { ratio: formatNumber(ratio) }, 
        steps: [`P₂/P₁ = 1 + (2×${g}/(${g}+1)) × (${M}² - 1) = ${formatNumber(ratio)}`] 
      };
    }
  },
  {
    id: 'mach-despues-choque',
    groupId: 'ondas-choque',
    title: 'Mach Después del Choque Normal',
    formula: 'M₂² = (M₁² + 2/(γ-1)) / (2γM₁²/(γ-1) - 1)',
    isFundamental: true,
    variables: [
      { symbol: 'M1', label: 'Mach Antes del Choque (M₁) (adimensional)', unit: 'adimensional' },
      { symbol: 'gamma', label: 'Coeficiente Adiabático (γ) (adimensional)', unit: 'adimensional', defaultValue: 1.4 }
    ],
    output: { symbol: 'M2', label: 'Mach Después (M₂) (adimensional)', unit: 'adimensional' },
    resolve: ({ M1, gamma = 1.4 }) => {
      const M = parseFloat(M1);
      const g = parseFloat(gamma);
      const numerador = M * M + 2 / (g - 1);
      const denominador = (2 * g * M * M) / (g - 1) - 1;
      if (denominador === 0) return { error: "Denominador cero." };
      const M2 = Math.sqrt(numerador / denominador);
      return { 
        result: { M2: formatNumber(M2) }, 
        steps: [`M₂ = √[(${M}² + 2/(${g}-1)) / (2×${g}×${M}²/(${g}-1) - 1)] = ${formatNumber(M2)}`] 
      };
    }
  }
];
