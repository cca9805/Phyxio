import { formatNumber } from '../../../utils/formatNumber.js';

const g = 9.81;

export const definitions = [
  {
    id: 'potencia-bomba',
    groupId: 'bombas',
    title: 'Potencia Hidráulica de Bomba',
    isFundamental: true,
    formula: String.raw`P_{hid} = \rho g Q H`,
    variables: [
      { symbol: 'rho', label: 'Densidad del fluido (ρ) (kg/m³)', unit: 'kg/m³', defaultValue: 1000 },
      { symbol: 'Q', label: 'Caudal volumétrico (Q) (m³/s)', unit: 'm³/s' },
      { symbol: 'H', label: 'Altura manométrica total (H) (m)', unit: 'm' }
    ],
    output: { symbol: 'P', label: 'Potencia hidráulica (P_hid) (W)', unit: 'W' },
    resolve: ({ rho = 1000, Q, H }) => {
      const P = parseFloat(rho) * g * parseFloat(Q) * parseFloat(H);
      return {
        result: { P: formatNumber(P) },
        steps: [
          `P_hid = ρ × g × Q × H`,
          `P_hid = ${rho} × ${g} × ${Q} × ${H}`,
          `P_hid = ${formatNumber(P)} W = ${formatNumber(P / 1000)} kW`
        ]
      };
    }
  },
  {
    id: 'caudal-desde-potencia',
    groupId: 'bombas',
    title: 'Caudal desde Potencia Hidráulica',
    isFundamental: false,
    formula: String.raw`Q = \frac{P_{hid}}{\rho g H}`,
    variables: [
      { symbol: 'P', label: 'Potencia hidráulica (P_hid) (W)', unit: 'W' },
      { symbol: 'rho', label: 'Densidad del fluido (ρ) (kg/m³)', unit: 'kg/m³', defaultValue: 1000 },
      { symbol: 'H', label: 'Altura manométrica total (H) (m)', unit: 'm' }
    ],
    output: { symbol: 'Q', label: 'Caudal volumétrico (Q) (m³/s)', unit: 'm³/s' },
    resolve: ({ P, rho = 1000, H }) => {
      const divisor = parseFloat(rho) * g * parseFloat(H);
      if (divisor === 0) return { error: "El denominador no puede ser cero." };
      const Q = parseFloat(P) / divisor;
      return {
        result: { Q: formatNumber(Q) },
        steps: [
          `Q = P_hid / (ρ × g × H)`,
          `Q = ${P} / (${rho} × ${g} × ${H})`,
          `Q = ${formatNumber(Q)} m³/s`
        ]
      };
    }
  },
  {
    id: 'altura-desde-potencia',
    groupId: 'bombas',
    title: 'Altura desde Potencia Hidráulica',
    isFundamental: false,
    formula: String.raw`H = \frac{P_{hid}}{\rho g Q}`,
    variables: [
      { symbol: 'P', label: 'Potencia hidráulica (P_hid) (W)', unit: 'W' },
      { symbol: 'rho', label: 'Densidad del fluido (ρ) (kg/m³)', unit: 'kg/m³', defaultValue: 1000 },
      { symbol: 'Q', label: 'Caudal volumétrico (Q) (m³/s)', unit: 'm³/s' }
    ],
    output: { symbol: 'H', label: 'Altura manométrica total (H) (m)', unit: 'm' },
    resolve: ({ P, rho = 1000, Q }) => {
      const divisor = parseFloat(rho) * g * parseFloat(Q);
      if (divisor === 0) return { error: "El denominador no puede ser cero." };
      const H = parseFloat(P) / divisor;
      return {
        result: { H: formatNumber(H) },
        steps: [
          `H = P_hid / (ρ × g × Q)`,
          `H = ${P} / (${rho} × ${g} × ${Q})`,
          `H = ${formatNumber(H)} m`
        ]
      };
    }
  },
  {
    id: 'eficiencia-bomba',
    groupId: 'eficiencia-bomba',
    title: 'Eficiencia de Bomba',
    isFundamental: true,
    formula: String.raw`\eta = \frac{P_{hid}}{P_{entrada}}`,
    variables: [
      { symbol: 'P_hid', label: 'Potencia hidráulica (P_hid) (W)', unit: 'W' },
      { symbol: 'P_entrada', label: 'Potencia de entrada (P_entrada) (W)', unit: 'W' }
    ],
    output: { symbol: 'eta', label: 'Eficiencia (η) (adimensional)', unit: '-' },
    resolve: ({ P_hid, P_entrada }) => {
      if (parseFloat(P_entrada) === 0) return { error: "La potencia de entrada no puede ser cero." };
      const eta = parseFloat(P_hid) / parseFloat(P_entrada);
      const eta_percent = eta * 100;
      return {
        result: { eta: formatNumber(eta), eta_percent: formatNumber(eta_percent) },
        steps: [
          `η = P_hid / P_entrada`,
          `η = ${P_hid} / ${P_entrada}`,
          `η = ${formatNumber(eta)} = ${formatNumber(eta_percent)}%`
        ]
      };
    }
  },
  {
    id: 'potencia-real-bomba',
    groupId: 'potencia-real-bomba',
    title: 'Potencia Real de Bomba',
    isFundamental: true,
    formula: String.raw`P_{entrada} = \frac{P_{hid}}{\eta}`,
    variables: [
      { symbol: 'P_hid', label: 'Potencia hidráulica (P_hid) (W)', unit: 'W' },
      { symbol: 'eta', label: 'Eficiencia de la bomba (η) (adimensional)', unit: '-', defaultValue: 0.75 }
    ],
    output: { symbol: 'P', label: 'Potencia de entrada (P_entrada) (W)', unit: 'W' },
    resolve: ({ P_hid, eta = 0.75 }) => {
      if (parseFloat(eta) === 0) return { error: "La eficiencia no puede ser cero." };
      const P = parseFloat(P_hid) / parseFloat(eta);
      return {
        result: { P: formatNumber(P) },
        steps: [
          `P_entrada = P_hid / η`,
          `P_entrada = ${P_hid} / ${eta}`,
          `P_entrada = ${formatNumber(P)} W = ${formatNumber(P / 1000)} kW`
        ]
      };
    }
  },
  {
    id: 'potencia-turbina',
    groupId: 'turbinas',
    title: 'Potencia de Turbina',
    isFundamental: true,
    formula: String.raw`P_{turbina} = \eta \rho g Q H`,
    variables: [
      { symbol: 'eta', label: 'Eficiencia de la turbina (η) (adimensional)', unit: '-', defaultValue: 0.85 },
      { symbol: 'rho', label: 'Densidad del fluido (ρ) (kg/m³)', unit: 'kg/m³', defaultValue: 1000 },
      { symbol: 'Q', label: 'Caudal volumétrico (Q) (m³/s)', unit: 'm³/s' },
      { symbol: 'H', label: 'Altura neta disponible (H) (m)', unit: 'm' }
    ],
    output: { symbol: 'P', label: 'Potencia generada (P_turbina) (W)', unit: 'W' },
    resolve: ({ eta = 0.85, rho = 1000, Q, H }) => {
      const P = parseFloat(eta) * parseFloat(rho) * g * parseFloat(Q) * parseFloat(H);
      return {
        result: { P: formatNumber(P) },
        steps: [
          `P_turbina = η × ρ × g × Q × H`,
          `P_turbina = ${eta} × ${rho} × ${g} × ${Q} × ${H}`,
          `P_turbina = ${formatNumber(P)} W = ${formatNumber(P / 1000)} kW = ${formatNumber(P / 1e6)} MW`
        ]
      };
    }
  },
  {
    id: 'potencia-ventilador',
    groupId: 'ventiladores',
    title: 'Potencia de Ventilador',
    isFundamental: true,
    formula: String.raw`P = \frac{Q \Delta P}{\eta}`,
    variables: [
      { symbol: 'Q', label: 'Caudal volumétrico (Q) (m³/s)', unit: 'm³/s' },
      { symbol: 'deltaP', label: 'Diferencia de presión (ΔP) (Pa)', unit: 'Pa' },
      { symbol: 'eta', label: 'Eficiencia del ventilador (η) (adimensional)', unit: '-', defaultValue: 0.6 }
    ],
    output: { symbol: 'P', label: 'Potencia del ventilador (P) (W)', unit: 'W' },
    resolve: ({ Q, deltaP, eta = 0.6 }) => {
      if (parseFloat(eta) === 0) return { error: "La eficiencia no puede ser cero." };
      const P = (parseFloat(Q) * parseFloat(deltaP)) / parseFloat(eta);
      return {
        result: { P: formatNumber(P) },
        steps: [
          `P = (Q × ΔP) / η`,
          `P = (${Q} × ${deltaP}) / ${eta}`,
          `P = ${formatNumber(P)} W = ${formatNumber(P / 1000)} kW`
        ]
      };
    }
  }
];
