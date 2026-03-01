import { formatNumber } from '../../../../utils/formatNumber.js';

export const definitions = [
  // Grupo 1: Vorticidad en 2D
  {
    id: 'vorticidad-2d',
    groupId: 'vorticidad-2d',
    isFundamental: true,
    title: 'Vorticidad en 2D (ω = ∂v/∂x - ∂u/∂y)',
    formula: 'ω = (∂v/∂x) - (∂u/∂y)',
    variables: [
      { symbol: 'dv_dx', label: 'Derivada ∂v/∂x (1/s)', unit: '1/s' },
      { symbol: 'du_dy', label: 'Derivada ∂u/∂y (1/s)', unit: '1/s' }
    ],
    output: { symbol: 'omega', label: 'Vorticidad ω (1/s)', unit: '1/s' },
    resolve: ({ dv_dx, du_dy }) => {
      const omega = parseFloat(dv_dx) - parseFloat(du_dy);
      return {
        result: { omega: formatNumber(omega) },
        steps: [
          `ω = ∂v/∂x - ∂u/∂y`,
          `ω = ${dv_dx} - ${du_dy}`,
          `ω = ${formatNumber(omega)} 1/s`,
          omega > 0 ? 'Rotación antihoraria' : omega < 0 ? 'Rotación horaria' : 'Sin rotación'
        ]
      };
    }
  },

  // Grupo 2: Magnitud de vorticidad
  {
    id: 'magnitud-vorticidad',
    groupId: 'magnitud-vorticidad',
    isFundamental: true,
    title: 'Magnitud de Vorticidad (|ω| = √(ωx² + ωy² + ωz²))',
    formula: '|ω| = √(ωx² + ωy² + ωz²)',
    variables: [
      { symbol: 'omega_x', label: 'Componente ωx (1/s)', unit: '1/s' },
      { symbol: 'omega_y', label: 'Componente ωy (1/s)', unit: '1/s' },
      { symbol: 'omega_z', label: 'Componente ωz (1/s)', unit: '1/s' }
    ],
    output: { symbol: 'omega_mag', label: 'Magnitud |ω| (1/s)', unit: '1/s' },
    resolve: ({ omega_x, omega_y, omega_z }) => {
      const wx = parseFloat(omega_x);
      const wy = parseFloat(omega_y);
      const wz = parseFloat(omega_z);
      const omega_mag = Math.sqrt(wx*wx + wy*wy + wz*wz);
      return {
        result: { omega_mag: formatNumber(omega_mag) },
        steps: [
          `|ω| = √(ωx² + ωy² + ωz²)`,
          `|ω| = √(${wx}² + ${wy}² + ${wz}²)`,
          `|ω| = ${formatNumber(omega_mag)} 1/s`
        ]
      };
    }
  },

  // Grupo 3: Circulación
  {
    id: 'circulacion',
    groupId: 'circulacion',
    isFundamental: true,
    title: 'Circulación (Γ = ∮ v⃗·dl⃗)',
    formula: 'Γ = v × L',
    variables: [
      { symbol: 'v', label: 'Velocidad promedio v (m/s)', unit: 'm/s' },
      { symbol: 'L', label: 'Longitud del contorno L (m)', unit: 'm' }
    ],
    output: { symbol: 'Gamma', label: 'Circulación Γ (m²/s)', unit: 'm²/s' },
    resolve: ({ v, L }) => {
      const Gamma = parseFloat(v) * parseFloat(L);
      return {
        result: { Gamma: formatNumber(Gamma) },
        steps: [
          `Γ = v × L (aproximación para contorno cerrado)`,
          `Γ = ${v} × ${L}`,
          `Γ = ${formatNumber(Gamma)} m²/s`
        ]
      };
    }
  },

  // Grupo 4: Función de corriente (velocidad u)
  {
    id: 'velocidad-u-corriente',
    groupId: 'funcion-corriente',
    isFundamental: true,
    title: 'Velocidad u desde Función de Corriente (u = ∂ψ/∂y)',
    formula: 'u = ∂ψ/∂y',
    variables: [
      { symbol: 'dpsi_dy', label: 'Derivada ∂ψ/∂y (m²/s·m)', unit: 'm/s' }
    ],
    output: { symbol: 'u', label: 'Velocidad u (m/s)', unit: 'm/s' },
    resolve: ({ dpsi_dy }) => {
      const u = parseFloat(dpsi_dy);
      return {
        result: { u: formatNumber(u) },
        steps: [
          `u = ∂ψ/∂y`,
          `u = ${formatNumber(u)} m/s`
        ]
      };
    }
  },

  // Grupo 5: Función de corriente (velocidad v)
  {
    id: 'velocidad-v-corriente',
    groupId: 'funcion-corriente',
    isFundamental: false,
    title: 'Velocidad v desde Función de Corriente (v = -∂ψ/∂x)',
    formula: 'v = -∂ψ/∂x',
    variables: [
      { symbol: 'dpsi_dx', label: 'Derivada ∂ψ/∂x (m²/s·m)', unit: 'm/s' }
    ],
    output: { symbol: 'v', label: 'Velocidad v (m/s)', unit: 'm/s' },
    resolve: ({ dpsi_dx }) => {
      const v = -parseFloat(dpsi_dx);
      return {
        result: { v: formatNumber(v) },
        steps: [
          `v = -∂ψ/∂x`,
          `v = -${dpsi_dx}`,
          `v = ${formatNumber(v)} m/s`
        ]
      };
    }
  },

  // Grupo 6: Caudal entre líneas de corriente
  {
    id: 'caudal-lineas-corriente',
    groupId: 'caudal-corriente',
    isFundamental: true,
    title: 'Caudal entre Líneas de Corriente (Q = ψ₂ - ψ₁)',
    formula: 'Q = ψ₂ - ψ₁',
    variables: [
      { symbol: 'psi_2', label: 'Función corriente ψ₂ (m²/s)', unit: 'm²/s' },
      { symbol: 'psi_1', label: 'Función corriente ψ₁ (m²/s)', unit: 'm²/s' }
    ],
    output: { symbol: 'Q', label: 'Caudal Q (m²/s)', unit: 'm²/s' },
    resolve: ({ psi_2, psi_1 }) => {
      const Q = parseFloat(psi_2) - parseFloat(psi_1);
      return {
        result: { Q: formatNumber(Q) },
        steps: [
          `Q = ψ₂ - ψ₁`,
          `Q = ${psi_2} - ${psi_1}`,
          `Q = ${formatNumber(Q)} m²/s (por unidad de profundidad)`
        ]
      };
    }
  },

  // Grupo 7: Potencial de velocidad (velocidad u)
  {
    id: 'velocidad-u-potencial',
    groupId: 'potencial-velocidad',
    isFundamental: true,
    title: 'Velocidad u desde Potencial (u = ∂φ/∂x)',
    formula: 'u = ∂φ/∂x',
    variables: [
      { symbol: 'dphi_dx', label: 'Derivada ∂φ/∂x (m²/s·m)', unit: 'm/s' }
    ],
    output: { symbol: 'u', label: 'Velocidad u (m/s)', unit: 'm/s' },
    resolve: ({ dphi_dx }) => {
      const u = parseFloat(dphi_dx);
      return {
        result: { u: formatNumber(u) },
        steps: [
          `u = ∂φ/∂x`,
          `u = ${formatNumber(u)} m/s`
        ]
      };
    }
  },

  // Grupo 8: Potencial de velocidad (velocidad v)
  {
    id: 'velocidad-v-potencial',
    groupId: 'potencial-velocidad',
    isFundamental: false,
    title: 'Velocidad v desde Potencial (v = ∂φ/∂y)',
    formula: 'v = ∂φ/∂y',
    variables: [
      { symbol: 'dphi_dy', label: 'Derivada ∂φ/∂y (m²/s·m)', unit: 'm/s' }
    ],
    output: { symbol: 'v', label: 'Velocidad v (m/s)', unit: 'm/s' },
    resolve: ({ dphi_dy }) => {
      const v = parseFloat(dphi_dy);
      return {
        result: { v: formatNumber(v) },
        steps: [
          `v = ∂φ/∂y`,
          `v = ${formatNumber(v)} m/s`
        ]
      };
    }
  },

  // Grupo 9: Flujo uniforme
  {
    id: 'flujo-uniforme',
    groupId: 'flujo-uniforme',
    isFundamental: true,
    title: 'Flujo Uniforme (φ = U∞x, ψ = U∞y)',
    formula: 'φ = U∞ × x',
    variables: [
      { symbol: 'U_inf', label: 'Velocidad uniforme U∞ (m/s)', unit: 'm/s' },
      { symbol: 'x', label: 'Coordenada x (m)', unit: 'm' }
    ],
    output: { symbol: 'phi', label: 'Potencial φ (m²/s)', unit: 'm²/s' },
    resolve: ({ U_inf, x }) => {
      const phi = parseFloat(U_inf) * parseFloat(x);
      const psi = parseFloat(U_inf) * 0; // Para y=0
      return {
        result: { phi: formatNumber(phi) },
        steps: [
          `Flujo uniforme en dirección x`,
          `φ = U∞ × x = ${U_inf} × ${x}`,
          `φ = ${formatNumber(phi)} m²/s`,
          `ψ = U∞ × y (función de corriente)`
        ]
      };
    }
  },

  // Grupo 10: Fuente/Sumidero
  {
    id: 'fuente-sumidero',
    groupId: 'fuente-sumidero',
    isFundamental: true,
    title: 'Fuente/Sumidero (φ = (m/2π)ln(r))',
    formula: 'φ = (m/2π) × ln(r)',
    variables: [
      { symbol: 'm', label: 'Intensidad m (m²/s)', unit: 'm²/s' },
      { symbol: 'r', label: 'Radio r (m)', unit: 'm' }
    ],
    output: { symbol: 'phi', label: 'Potencial φ (m²/s)', unit: 'm²/s' },
    resolve: ({ m, r }) => {
      const numR = parseFloat(r);
      if (numR <= 0) return { error: 'El radio debe ser positivo.' };
      const phi = (parseFloat(m) / (2 * Math.PI)) * Math.log(numR);
      const tipo = parseFloat(m) > 0 ? 'Fuente (m > 0)' : 'Sumidero (m < 0)';
      return {
        result: { phi: formatNumber(phi) },
        steps: [
          `φ = (m/2π) × ln(r)`,
          `φ = (${m}/2π) × ln(${numR})`,
          `φ = ${formatNumber(phi)} m²/s`,
          tipo
        ]
      };
    }
  }
];
