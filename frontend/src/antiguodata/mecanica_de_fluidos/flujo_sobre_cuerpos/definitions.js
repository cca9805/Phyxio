import { formatNumber } from '../../../utils/formatNumber.js';

export const definitions = [
  {
    id: 'fuerza-arrastre',
    groupId: 'arrastre',
    title: 'Fuerza de Arrastre',
    isFundamental: true,
    formula: String.raw`F_D = \frac{1}{2} C_D \rho v^2 A`,
    variables: [
      { symbol: 'CD', label: 'Coeficiente de arrastre (C_D) (adimensional)', unit: '-', defaultValue: 0.5 },
      { symbol: 'rho', label: 'Densidad del fluido (ρ) (kg/m³)', unit: 'kg/m³', defaultValue: 1.2 },
      { symbol: 'v', label: 'Velocidad relativa (v) (m/s)', unit: 'm/s' },
      { symbol: 'A', label: 'Área frontal (A) (m²)', unit: 'm²' }
    ],
    output: { symbol: 'FD', label: 'Fuerza de arrastre (F_D) (N)', unit: 'N' },
    resolve: ({ CD = 0.5, rho = 1.2, v, A }) => {
      const FD = 0.5 * parseFloat(CD) * parseFloat(rho) * Math.pow(parseFloat(v), 2) * parseFloat(A);
      return {
        result: { FD: formatNumber(FD) },
        steps: [
          `F_D = 0.5 × C_D × ρ × v² × A`,
          `F_D = 0.5 × ${CD} × ${rho} × ${v}² × ${A}`,
          `F_D = ${formatNumber(FD)} N`
        ]
      };
    }
  },
  {
    id: 'velocidad-desde-arrastre',
    groupId: 'arrastre',
    title: 'Velocidad desde Fuerza de Arrastre',
    isFundamental: false,
    formula: String.raw`v = \sqrt{\frac{2F_D}{C_D \rho A}}`,
    variables: [
      { symbol: 'FD', label: 'Fuerza de arrastre (F_D) (N)', unit: 'N' },
      { symbol: 'CD', label: 'Coeficiente de arrastre (C_D) (adimensional)', unit: '-', defaultValue: 0.5 },
      { symbol: 'rho', label: 'Densidad del fluido (ρ) (kg/m³)', unit: 'kg/m³', defaultValue: 1.2 },
      { symbol: 'A', label: 'Área frontal (A) (m²)', unit: 'm²' }
    ],
    output: { symbol: 'v', label: 'Velocidad relativa (v) (m/s)', unit: 'm/s' },
    resolve: ({ FD, CD = 0.5, rho = 1.2, A }) => {
      const divisor = parseFloat(CD) * parseFloat(rho) * parseFloat(A);
      if (divisor === 0) return { error: "El denominador no puede ser cero." };
      const v = Math.sqrt((2 * parseFloat(FD)) / divisor);
      return {
        result: { v: formatNumber(v) },
        steps: [
          `v = √(2 × F_D / (C_D × ρ × A))`,
          `v = √(2 × ${FD} / (${CD} × ${rho} × ${A}))`,
          `v = ${formatNumber(v)} m/s`
        ]
      };
    }
  },
  {
    id: 'area-desde-arrastre',
    groupId: 'arrastre',
    title: 'Área desde Fuerza de Arrastre',
    isFundamental: false,
    formula: String.raw`A = \frac{2F_D}{C_D \rho v^2}`,
    variables: [
      { symbol: 'FD', label: 'Fuerza de arrastre (F_D) (N)', unit: 'N' },
      { symbol: 'CD', label: 'Coeficiente de arrastre (C_D) (adimensional)', unit: '-', defaultValue: 0.5 },
      { symbol: 'rho', label: 'Densidad del fluido (ρ) (kg/m³)', unit: 'kg/m³', defaultValue: 1.2 },
      { symbol: 'v', label: 'Velocidad relativa (v) (m/s)', unit: 'm/s' }
    ],
    output: { symbol: 'A', label: 'Área frontal (A) (m²)', unit: 'm²' },
    resolve: ({ FD, CD = 0.5, rho = 1.2, v }) => {
      const divisor = parseFloat(CD) * parseFloat(rho) * Math.pow(parseFloat(v), 2);
      if (divisor === 0) return { error: "El denominador no puede ser cero." };
      const A = (2 * parseFloat(FD)) / divisor;
      return {
        result: { A: formatNumber(A) },
        steps: [
          `A = 2 × F_D / (C_D × ρ × v²)`,
          `A = 2 × ${FD} / (${CD} × ${rho} × ${v}²)`,
          `A = ${formatNumber(A)} m²`
        ]
      };
    }
  },
  {
    id: 'fuerza-sustentacion',
    groupId: 'sustentacion',
    title: 'Fuerza de Sustentación',
    isFundamental: true,
    formula: String.raw`F_L = \frac{1}{2} C_L \rho v^2 A`,
    variables: [
      { symbol: 'CL', label: 'Coeficiente de sustentación (C_L) (adimensional)', unit: '-', defaultValue: 0.8 },
      { symbol: 'rho', label: 'Densidad del fluido (ρ) (kg/m³)', unit: 'kg/m³', defaultValue: 1.2 },
      { symbol: 'v', label: 'Velocidad relativa (v) (m/s)', unit: 'm/s' },
      { symbol: 'A', label: 'Área alar (A) (m²)', unit: 'm²' }
    ],
    output: { symbol: 'FL', label: 'Fuerza de sustentación (F_L) (N)', unit: 'N' },
    resolve: ({ CL = 0.8, rho = 1.2, v, A }) => {
      const FL = 0.5 * parseFloat(CL) * parseFloat(rho) * Math.pow(parseFloat(v), 2) * parseFloat(A);
      return {
        result: { FL: formatNumber(FL) },
        steps: [
          `F_L = 0.5 × C_L × ρ × v² × A`,
          `F_L = 0.5 × ${CL} × ${rho} × ${v}² × ${A}`,
          `F_L = ${formatNumber(FL)} N`
        ]
      };
    }
  }
];
