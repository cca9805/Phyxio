import { formatNumber } from '../../../../utils/formatNumber.js';

const g = 9.81;

export const definitions = [
  // --- Grupo 1: Empuje (Principio de Arquímedes) ---
  {
    id: 'arquimedes-empuje',
    groupId: 'arquimedes-empuje',
    title: 'Calcular Empuje (E = ρf·Vs·g)',
    isFundamental: true,
    formula: 'E = ρ_f * V_s * g',
    variables: [
      { symbol: 'rho_f', label: 'Densidad del fluido (ρf) (kg/m³)', unit: 'kg/m³', defaultValue: 1000 },
      { symbol: 'V_s', label: 'Volumen sumergido (Vs) (m³)', unit: 'm³' },
      { symbol: 'g', label: 'Gravedad (g) (m/s²)', unit: 'm/s²', defaultValue: g }
    ],
    output: { symbol: 'E', label: 'Empuje (E) (N)', unit: 'N' },
    resolve: ({ rho_f = 1000, V_s, g = 9.81 }) => {
      const E = parseFloat(rho_f) * parseFloat(V_s) * parseFloat(g);
      return {
        result: { E: formatNumber(E) },
        steps: [
          `E = ρf * Vs * g = ${rho_f} * ${V_s} * ${g}`,
          `E = ${formatNumber(E)} N`
        ]
      };
    }
  },
  {
    id: 'arquimedes-volumen',
    groupId: 'arquimedes-empuje',
    title: 'Calcular Volumen sumergido (Vs = E/(ρf·g))',
    isFundamental: false,
    formula: 'V_s = E / (ρ_f * g)',
    variables: [
      { symbol: 'E', label: 'Empuje (E) (N)', unit: 'N' },
      { symbol: 'rho_f', label: 'Densidad del fluido (ρf) (kg/m³)', unit: 'kg/m³', defaultValue: 1000 },
      { symbol: 'g', label: 'Gravedad (g) (m/s²)', unit: 'm/s²', defaultValue: g }
    ],
    output: { symbol: 'V_s', label: 'Volumen sumergido (Vs) (m³)', unit: 'm³' },
    resolve: ({ E, rho_f = 1000, g = 9.81 }) => {
      const divisor = parseFloat(rho_f) * parseFloat(g);
      if (divisor === 0) return { error: "El denominador no puede ser cero." };
      const V_s = parseFloat(E) / divisor;
      return {
        result: { V_s: formatNumber(V_s) },
        steps: [
          `Vs = E / (ρf * g) = ${E} / (${rho_f} * ${g})`,
          `Vs = ${formatNumber(V_s)} m³`
        ]
      };
    }
  },

  // --- Grupo 2: Peso Aparente ---
  {
    id: 'arquimedes-peso-aparente',
    groupId: 'arquimedes-peso-aparente',
    title: 'Calcular Peso aparente (Pap = P - E)',
    isFundamental: true,
    formula: 'P_ap = P - E',
    variables: [
      { symbol: 'P', label: 'Peso real (P) (N)', unit: 'N' },
      { symbol: 'E', label: 'Empuje (E) (N)', unit: 'N' }
    ],
    output: { symbol: 'P_ap', label: 'Peso aparente (Pap) (N)', unit: 'N' },
    resolve: ({ P, E }) => {
      const P_ap = parseFloat(P) - parseFloat(E);
      return {
        result: { P_ap: formatNumber(P_ap) },
        steps: [
          `Pap = P - E = ${P} - ${E}`,
          `Pap = ${formatNumber(P_ap)} N`
        ]
      };
    }
  },
  {
    id: 'arquimedes-empuje-desde-peso',
    groupId: 'arquimedes-peso-aparente',
    title: 'Calcular Empuje (E = P - Pap)',
    isFundamental: false,
    formula: 'E = P - P_ap',
    variables: [
      { symbol: 'P', label: 'Peso real (P) (N)', unit: 'N' },
      { symbol: 'P_ap', label: 'Peso aparente (Pap) (N)', unit: 'N' }
    ],
    output: { symbol: 'E', label: 'Empuje (E) (N)', unit: 'N' },
    resolve: ({ P, P_ap }) => {
      const E = parseFloat(P) - parseFloat(P_ap);
      return {
        result: { E: formatNumber(E) },
        steps: [
          `E = P - Pap = ${P} - ${P_ap}`,
          `E = ${formatNumber(E)} N`
        ]
      };
    }
  },
  {
    id: 'arquimedes-peso-real',
    groupId: 'arquimedes-peso-aparente',
    title: 'Calcular Peso real (P = Pap + E)',
    isFundamental: false,
    formula: 'P = P_ap + E',
    variables: [
      { symbol: 'P_ap', label: 'Peso aparente (Pap) (N)', unit: 'N' },
      { symbol: 'E', label: 'Empuje (E) (N)', unit: 'N' }
    ],
    output: { symbol: 'P', label: 'Peso real (P) (N)', unit: 'N' },
    resolve: ({ P_ap, E }) => {
      const P = parseFloat(P_ap) + parseFloat(E);
      return {
        result: { P: formatNumber(P) },
        steps: [
          `P = Pap + E = ${P_ap} + ${E}`,
          `P = ${formatNumber(P)} N`
        ]
      };
    }
  }
];
