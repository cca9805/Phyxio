import { formatNumber } from '../../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'energia_bobina',
    groupId: 'bobinas',
    title: 'Energía Almacenada (E = ½LI²)',
    formula: 'E = 0.5 * L * I^2',
    variables: [
      { symbol: 'L', label: 'Inductancia', unit: 'mH' },
      { symbol: 'I', label: 'Corriente', unit: 'A' }
    ],
    output: { symbol: 'E', label: 'Energía', unit: 'J' },
    resolve: ({ L, I }) => {
      const L_H = parseFloat(L) * 1e-3;
      const Inum = parseFloat(I);
      const E = 0.5 * L_H * Math.pow(Inum, 2);
      return {
        result: { E: formatNumber(E) },
        steps: [
          `Datos: L = ${L} mH = ${formatNumber(L_H)} H, I = ${I} A`,
          `Energía: E = ½ × L × I²`,
          `E = 0.5 × ${formatNumber(L_H)} × ${I}²`,
          `E = 0.5 × ${formatNumber(L_H)} × ${Math.pow(Inum, 2)}`,
          `Resultado: E = ${formatNumber(E)} J`
        ]
      };
    }
  },

  {
    id: 'reactancia_inductiva',
    groupId: 'bobinas',
    title: 'Reactancia Inductiva (X_L = 2πfL)',
    formula: 'X_L = 2 * PI * f * L',
    variables: [
      { symbol: 'L', label: 'Inductancia', unit: 'mH' },
      { symbol: 'f', label: 'Frecuencia', unit: 'Hz' }
    ],
    output: { symbol: 'XL', label: 'Reactancia inductiva', unit: 'Ω' },
    resolve: ({ L, f }) => {
      const L_H = parseFloat(L) * 1e-3;
      const fnum = parseFloat(f);
      const XL = 2 * Math.PI * fnum * L_H;
      return {
        result: { XL: formatNumber(XL) },
        steps: [
          `Datos: L = ${L} mH = ${formatNumber(L_H)} H, f = ${f} Hz`,
          `Reactancia inductiva: X_L = 2π × f × L`,
          `X_L = 2 × ${Math.PI.toFixed(4)} × ${f} × ${formatNumber(L_H)}`,
          `Resultado: X_L = ${formatNumber(XL)} Ω`,
          ``,
          `La bobina se opone al paso de corriente alterna con ${formatNumber(XL)} Ω`
        ]
      };
    }
  },

  {
    id: 'bobinas_serie',
    groupId: 'bobinas',
    title: 'Bobinas en Serie',
    formula: 'L_total = L1 + L2',
    variables: [
      { symbol: 'L1', label: 'Bobina 1', unit: 'mH' },
      { symbol: 'L2', label: 'Bobina 2', unit: 'mH' }
    ],
    output: { symbol: 'L_total', label: 'Inductancia Total', unit: 'mH' },
    resolve: ({ L1, L2 }) => {
      const Ltotal = parseFloat(L1) + parseFloat(L2);
      return {
        result: { L_total: formatNumber(Ltotal) },
        steps: [
          `Bobinas en serie: L_total = L₁ + L₂`,
          `L_total = ${L1} + ${L2}`,
          `Resultado: L_total = ${formatNumber(Ltotal)} mH`
        ]
      };
    }
  }
];
