import { formatNumber } from '../../../utils/formatNumber.js';

const g = 9.81;

export const definitions = [
  {
    id: 'numero-reynolds',
    groupId: 'reynolds',
    title: 'Número de Reynolds',
    isFundamental: true,
    formula: String.raw`Re = \frac{\rho v D}{\mu} = \frac{v D}{\nu}`,
    variables: [
      { symbol: 'v', label: 'Velocidad (v) (m/s)', unit: 'm/s' },
      { symbol: 'D', label: 'Diámetro (D) (m)', unit: 'm' },
      { symbol: 'nu', label: 'Viscosidad cinemática (ν) (m²/s)', unit: 'm²/s', defaultValue: 1e-6 }
    ],
    output: { symbol: 'Re', label: 'Número de Reynolds (Re) (adimensional)', unit: '-' },
    resolve: ({ v, D, nu }) => {
      const Re = parseFloat(v) * parseFloat(D) / parseFloat(nu);
      const tipo = Re < 2300 ? 'LAMINAR' : Re < 4000 ? 'TRANSICIÓN' : 'TURBULENTO';
      return {
        result: { Re: formatNumber(Re) },
        steps: [
          `Re = v × D / ν`,
          `Re = ${v} × ${D} / ${nu}`,
          `Re = ${formatNumber(Re)}`,
          `Flujo: ${tipo}`
        ]
      };
    }
  },
  {
    id: 'perdida-carga-darcy',
    groupId: 'perdida-carga',
    title: 'Pérdida de Carga (Darcy-Weisbach)',
    isFundamental: true,
    formula: String.raw`h_f = f \frac{L}{D} \frac{v^2}{2g}`,
    variables: [
      { symbol: 'f', label: 'Factor de fricción (f) (adimensional)', unit: '-', defaultValue: 0.02 },
      { symbol: 'L', label: 'Longitud (L) (m)', unit: 'm' },
      { symbol: 'D', label: 'Diámetro (D) (m)', unit: 'm' },
      { symbol: 'v', label: 'Velocidad (v) (m/s)', unit: 'm/s' }
    ],
    output: { symbol: 'hf', label: 'Pérdida de carga h_f (m)', unit: 'm' },
    resolve: ({ f, L, D, v }) => {
      const hf = parseFloat(f) * (parseFloat(L) / parseFloat(D)) * (parseFloat(v) ** 2) / (2 * g);
      return {
        result: { hf: formatNumber(hf) },
        steps: [
          `h_f = f × (L/D) × (v²/2g)`,
          `h_f = ${f} × (${L}/${D}) × (${v}²/${2*g})`,
          `h_f = ${formatNumber(hf)} m`
        ]
      };
    }
  },
  {
    id: 'velocidad-media',
    groupId: 'velocidad-media',
    title: 'Velocidad Media en Tubería',
    isFundamental: true,
    formula: String.raw`v = \frac{Q}{A} = \frac{4Q}{\pi D^2}`,
    variables: [
      { symbol: 'Q', label: 'Caudal (Q) (m³/s)', unit: 'm³/s' },
      { symbol: 'D', label: 'Diámetro (D) (m)', unit: 'm' }
    ],
    output: { symbol: 'v', label: 'Velocidad (v) (m/s)', unit: 'm/s' },
    resolve: ({ Q, D }) => {
      const A = Math.PI * (parseFloat(D) / 2) ** 2;
      const v = parseFloat(Q) / A;
      return {
        result: { v: formatNumber(v) },
        steps: [
          `A = π × (D/2)² = ${formatNumber(A)} m²`,
          `v = Q / A = ${Q} / ${formatNumber(A)}`,
          `v = ${formatNumber(v)} m/s`
        ]
      };
    }
  },
  {
    id: 'factor-friccion-laminar',
    groupId: 'factor-friccion-laminar',
    title: 'Factor de Fricción (Flujo Laminar)',
    isFundamental: false,
    formula: String.raw`f = \frac{64}{Re}`,
    variables: [
      { symbol: 'Re', label: 'Número de Reynolds (Re) (adimensional)', unit: '-' }
    ],
    output: { symbol: 'f', label: 'Factor de fricción (f) (adimensional)', unit: '-' },
    resolve: ({ Re }) => {
      const f = 64 / parseFloat(Re);
      return {
        result: { f: formatNumber(f) },
        steps: [
          `f = 64 / Re`,
          `f = 64 / ${Re}`,
          `f = ${formatNumber(f)}`
        ]
      };
    }
  },
  {
    id: 'caudal-desde-perdida',
    groupId: 'caudal-desde-perdida',
    title: 'Caudal desde Pérdida de Carga',
    isFundamental: false,
    formula: String.raw`Q = \frac{\pi D^2}{4} \sqrt{\frac{2g h_f D}{f L}}`,
    variables: [
      { symbol: 'D', label: 'Diámetro (D) (m)', unit: 'm' },
      { symbol: 'hf', label: 'Pérdida de carga (h_f) (m)', unit: 'm' },
      { symbol: 'f', label: 'Factor de fricción (f) (adimensional)', unit: '-', defaultValue: 0.02 },
      { symbol: 'L', label: 'Longitud (L) (m)', unit: 'm' }
    ],
    output: { symbol: 'Q', label: 'Caudal (Q) (m³/s)', unit: 'm³/s' },
    resolve: ({ D, hf, f, L }) => {
      const A = Math.PI * (parseFloat(D) / 2) ** 2;
      const Q = A * Math.sqrt((2 * g * parseFloat(hf) * parseFloat(D)) / (parseFloat(f) * parseFloat(L)));
      return {
        result: { Q: formatNumber(Q) },
        steps: [
          `A = π × (D/2)² = ${formatNumber(A)} m²`,
          `Q = A × √(2g × h_f × D / (f × L))`,
          `Q = ${formatNumber(A)} × √(${2*g} × ${hf} × ${D} / (${f} × ${L}))`,
          `Q = ${formatNumber(Q)} m³/s`
        ]
      };
    }
  },
  {
    id: 'bernoulli-altura-bomba',
    groupId: 'bernoulli-altura-bomba',
    title: 'Altura de Bomba Necesaria (Bernoulli)',
    isFundamental: true,
    formula: String.raw`h_B = \frac{P_2 - P_1}{\gamma} + \frac{v_2^2 - v_1^2}{2g} + (z_2 - z_1) + h_f + h_m`,
    variables: [
      { symbol: 'P1', label: 'Presión en punto 1 (P₁) (Pa)', unit: 'Pa' },
      { symbol: 'P2', label: 'Presión en punto 2 (P₂) (Pa)', unit: 'Pa' },
      { symbol: 'v1', label: 'Velocidad en punto 1 (v₁) (m/s)', unit: 'm/s' },
      { symbol: 'v2', label: 'Velocidad en punto 2 (v₂) (m/s)', unit: 'm/s' },
      { symbol: 'z1', label: 'Altura en punto 1 (z₁) (m)', unit: 'm' },
      { symbol: 'z2', label: 'Altura en punto 2 (z₂) (m)', unit: 'm' },
      { symbol: 'gamma', label: 'Peso específico (γ) (N/m³)', unit: 'N/m³', defaultValue: 9810 },
      { symbol: 'hf', label: 'Pérdidas por fricción (h_f) (m)', unit: 'm', defaultValue: 0 },
      { symbol: 'hm', label: 'Pérdidas menores (h_m) (m)', unit: 'm', defaultValue: 0 }
    ],
    output: { symbol: 'hB', label: 'Altura de bomba (h_B) (m)', unit: 'm' },
    resolve: ({ P1, P2, v1, v2, z1, z2, gamma, hf, hm }) => {
      const P1_val = parseFloat(P1);
      const P2_val = parseFloat(P2);
      const v1_val = parseFloat(v1);
      const v2_val = parseFloat(v2);
      const z1_val = parseFloat(z1);
      const z2_val = parseFloat(z2);
      const gamma_val = parseFloat(gamma);
      const hf_val = parseFloat(hf) || 0;
      const hm_val = parseFloat(hm) || 0;
      
      const alturaPresion = (P2_val - P1_val) / gamma_val;
      const alturaVelocidad = (v2_val ** 2 - v1_val ** 2) / (2 * g);
      const alturaPosicion = z2_val - z1_val;
      const hB = alturaPresion + alturaVelocidad + alturaPosicion + hf_val + hm_val;
      
      return {
        result: { hB: formatNumber(hB) },
        steps: [
          `h_B = (P₂ - P₁)/γ + (v₂² - v₁²)/(2g) + (z₂ - z₁) + h_f + h_m`,
          `Altura de presión: (${P2_val} - ${P1_val}) / ${gamma_val} = ${formatNumber(alturaPresion)} m`,
          `Altura de velocidad: (${v2_val}² - ${v1_val}²) / (2×${g}) = ${formatNumber(alturaVelocidad)} m`,
          `Altura de posición: ${z2_val} - ${z1_val} = ${formatNumber(alturaPosicion)} m`,
          `Pérdidas: h_f + h_m = ${hf_val} + ${hm_val} = ${formatNumber(hf_val + hm_val)} m`,
          `h_B = ${formatNumber(hB)} m`
        ]
      };
    }
  }
];
