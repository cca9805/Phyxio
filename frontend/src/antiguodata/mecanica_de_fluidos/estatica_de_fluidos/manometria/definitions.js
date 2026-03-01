import { formatNumber } from '../../../../utils/formatNumber.js';

const g = 9.81;
const rho_agua = 1000;
const rho_Hg = 13600;

export const definitions = [
  {
    id: 'manometro-tubo-u',
    groupId: 'manometro-u',
    title: 'Manómetro de Tubo en U',
    isFundamental: true,
    formula: String.raw`P_A - P_B = \rho_{man} g h`,
    variables: [
      { symbol: 'rho_man', label: 'Densidad del manómetro (ρ) (kg/m³)', unit: 'kg/m³', defaultValue: rho_Hg },
      { symbol: 'h', label: 'Diferencia de altura (h) (m)', unit: 'm' }
    ],
    output: { symbol: 'deltaP', label: 'Diferencia de presión ΔP (Pa)', unit: 'Pa' },
    resolve: ({ rho_man, h }) => {
      const deltaP = parseFloat(rho_man) * g * parseFloat(h);
      return {
        result: { deltaP: formatNumber(deltaP) },
        steps: [
          `ΔP = ρ × g × h`,
          `ΔP = ${rho_man} × ${g} × ${h}`,
          `ΔP = ${formatNumber(deltaP)} Pa = ${formatNumber(deltaP/1000)} kPa`
        ]
      };
    }
  },
  {
    id: 'altura-columna-mercurio',
    groupId: 'columna-mercurio',
    title: 'Presión en mmHg',
    isFundamental: true,
    formula: String.raw`P = \rho_{Hg} g h`,
    variables: [
      { symbol: 'h_mm', label: 'Altura en mm (mm)', unit: 'mm' }
    ],
    output: { symbol: 'P', label: 'Presión (P) (Pa)', unit: 'Pa' },
    resolve: ({ h_mm }) => {
      const h_m = parseFloat(h_mm) / 1000;
      const P = rho_Hg * g * h_m;
      return {
        result: { P: formatNumber(P) },
        steps: [
          `h = ${h_mm} mm = ${h_m} m`,
          `P = ρ_Hg × g × h = ${rho_Hg} × ${g} × ${h_m}`,
          `P = ${formatNumber(P)} Pa = ${formatNumber(P/1000)} kPa`
        ]
      };
    }
  },
  {
    id: 'presion-diferencial',
    groupId: 'presion-diferencial',
    title: 'Presión Diferencial',
    isFundamental: true,
    formula: String.raw`\Delta P = (\rho_1 - \rho_2) g h`,
    variables: [
      { symbol: 'rho1', label: 'Densidad fluido 1 (ρ₁) (kg/m³)', unit: 'kg/m³' },
      { symbol: 'rho2', label: 'Densidad fluido 2 (ρ₂) (kg/m³)', unit: 'kg/m³' },
      { symbol: 'h', label: 'Altura (h) (m)', unit: 'm' }
    ],
    output: { symbol: 'deltaP', label: 'ΔP (Pa)', unit: 'Pa' },
    resolve: ({ rho1, rho2, h }) => {
      const deltaP = (parseFloat(rho1) - parseFloat(rho2)) * g * parseFloat(h);
      return {
        result: { deltaP: formatNumber(deltaP) },
        steps: [
          `ΔP = (ρ₁ - ρ₂) × g × h`,
          `ΔP = (${rho1} - ${rho2}) × ${g} × ${h}`,
          `ΔP = ${formatNumber(deltaP)} Pa`
        ]
      };
    }
  }
];
