import { formatNumber } from '../../../../utils/formatNumber.js';

const g = 9.81;

export const definitions = [
  {
    id: 'presion-hidrostatica',
    groupId: 'presion-hidrostatica-basica',
    title: 'Presión Hidrostática',
    isFundamental: true,
    formula: String.raw`P = \rho g h`,
    variables: [
      { symbol: 'rho', label: 'Densidad (ρ)', unit: 'kg/m³' },
      { symbol: 'h', label: 'Profundidad (h)', unit: 'm' }
    ],
    output: { symbol: 'P', label: 'Presión (P)', unit: 'Pa' },
    resolve: ({ rho, h }) => {
      const P = rho * g * h;
      return {
        result: { P: formatNumber(P) },
        steps: [
          `P = ρ × g × h`,
          `P = ${rho} × ${g} × ${h}`,
          `P = ${formatNumber(P)} Pa`
        ]
      };
    }
  },
  {
    id: 'profundidad',
    groupId: 'presion-hidrostatica-basica',
    title: 'Profundidad',
    isFundamental: false,
    formula: String.raw`h = \frac{P}{\rho g}`,
    variables: [
      { symbol: 'P', label: 'Presión (P)', unit: 'Pa' },
      { symbol: 'rho', label: 'Densidad (ρ)', unit: 'kg/m³' }
    ],
    output: { symbol: 'h', label: 'Profundidad (h)', unit: 'm' },
    resolve: ({ P, rho }) => {
      const h = P / (rho * g);
      return {
        result: { h: formatNumber(h) },
        steps: [
          `h = P/(ρ × g)`,
          `h = ${P}/(${rho} × ${g})`,
          `h = ${formatNumber(h)} m`
        ]
      };
    }
  },
  {
    id: 'densidad-desde-presion',
    groupId: 'presion-hidrostatica-basica',
    title: 'Densidad desde Presión',
    isFundamental: false,
    formula: String.raw`\rho = \frac{P}{g h}`,
    variables: [
      { symbol: 'P', label: 'Presión (P)', unit: 'Pa' },
      { symbol: 'h', label: 'Profundidad (h)', unit: 'm' }
    ],
    output: { symbol: 'rho', label: 'Densidad (ρ)', unit: 'kg/m³' },
    resolve: ({ P, h }) => {
      const rho = P / (g * h);
      return {
        result: { rho: formatNumber(rho) },
        steps: [
          `ρ = P/(g × h)`,
          `ρ = ${P}/(${g} × ${h})`,
          `ρ = ${formatNumber(rho)} kg/m³`
        ]
      };
    }
  },
  {
    id: 'presion-total',
    groupId: 'presion-total',
    title: 'Presión Total',
    isFundamental: true,
    formula: String.raw`P_{total} = P_0 + \rho g h`,
    variables: [
      { symbol: 'P_0', label: 'Presión atmosférica (P₀)', unit: 'Pa' },
      { symbol: 'rho', label: 'Densidad (ρ)', unit: 'kg/m³' },
      { symbol: 'h', label: 'Profundidad (h)', unit: 'm' }
    ],
    output: { symbol: 'P_total', label: 'Presión total (P_total)', unit: 'Pa' },
    resolve: ({ P_0, rho, h }) => {
      const P_total = parseFloat(P_0) + parseFloat(rho) * g * parseFloat(h);
      return {
        result: { P_total: formatNumber(P_total) },
        steps: [
          `P_total = P₀ + ρ × g × h`,
          `P_total = ${P_0} + ${rho} × ${g} × ${h}`,
          `P_total = ${P_0} + ${formatNumber(parseFloat(rho) * g * parseFloat(h))}`,
          `P_total = ${formatNumber(P_total)} Pa`
        ]
      };
    }
  },
  {
    id: 'diferencia-presion',
    groupId: 'diferencia-presion',
    title: 'Diferencia de Presión',
    isFundamental: false,
    formula: String.raw`\Delta P = \rho g \Delta h`,
    variables: [
      { symbol: 'rho', label: 'Densidad (ρ)', unit: 'kg/m³' },
      { symbol: 'delta_h', label: 'Diferencia de altura (Δh)', unit: 'm' }
    ],
    output: { symbol: 'delta_P', label: 'Diferencia de presión (ΔP)', unit: 'Pa' },
    resolve: ({ rho, delta_h }) => {
      const delta_P = parseFloat(rho) * g * parseFloat(delta_h);
      return {
        result: { delta_P: formatNumber(delta_P) },
        steps: [
          `ΔP = ρ × g × Δh`,
          `ΔP = ${rho} × ${g} × ${delta_h}`,
          `ΔP = ${formatNumber(delta_P)} Pa`
        ]
      };
    }
  }
];
