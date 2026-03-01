import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'difraccion-rendija-simple',
    groupId: 'difraccion-rendija-simple',
    title: 'Mínimos de Difracción en Rendija Simple',
    isFundamental: true,
    formula: String.raw`a \sin(\theta) = m\lambda`,
    variables: [
      { symbol: 'a', label: 'Ancho de la rendija (a) (mm)', unit: 'mm' },
      { symbol: 'm', label: 'Orden del mínimo (m)', unit: 'adimensional' },
      { symbol: 'lambda', label: 'Longitud de onda (λ) (nm)', unit: 'nm' }
    ],
    output: { symbol: 'theta', label: 'Ángulo del mínimo (θ)', unit: 'grados' },
    resolve: ({ a, m, lambda }) => {
      // Convertir a metros
      const a_m = a * 1e-3;  // mm → m
      const lambda_m = lambda * 1e-9;  // nm → m
      
      const sin_theta = (m * lambda_m) / a_m;
      
      // Verificar que sin(θ) esté en rango válido [-1, 1]
      if (Math.abs(sin_theta) > 1) {
        return {
          result: { theta: 'No existe (sin θ > 1)' },
          steps: [
            `a sin(θ) = mλ`,
            `sin(θ) = mλ/a`,
            `sin(θ) = (${m} × ${lambda} × 10⁻⁹) / (${a} × 10⁻³)`,
            `sin(θ) = ${formatNumber(sin_theta)}`,
            `Error: sin(θ) debe estar entre -1 y 1`
          ]
        };
      }
      
      const theta_rad = Math.asin(sin_theta);
      const theta = theta_rad * 180 / Math.PI;
      return {
        result: { theta: formatNumber(theta) },
        steps: [
          `a sin(θ) = mλ`,
          `sin(θ) = mλ/a`,
          `sin(θ) = (${m} × ${lambda} × 10⁻⁹) / (${a} × 10⁻³)`,
          `sin(θ) = ${formatNumber(sin_theta)}`,
          `θ = arcsin(${formatNumber(sin_theta)}) = ${formatNumber(theta)}°`
        ]
      };
    }
  },
  {
    id: 'ancho-maximo-central',
    groupId: 'ancho-maximo-central',
    title: 'Ancho del Máximo Central',
    isFundamental: true,
    formula: String.raw`w = \frac{2\lambda L}{a}`,
    variables: [
      { symbol: 'lambda', label: 'Longitud de onda (λ) (nm)', unit: 'nm' },
      { symbol: 'L', label: 'Distancia a la pantalla (L) (m)', unit: 'm' },
      { symbol: 'a', label: 'Ancho de la rendija (a) (mm)', unit: 'mm' }
    ],
    output: { symbol: 'w', label: 'Ancho del máximo central (w)', unit: 'mm' },
    resolve: ({ lambda, L, a }) => {
      // Convertir a metros
      const lambda_m = lambda * 1e-9; // nm a m
      const a_m = a * 1e-3; // mm a m
      
      const w_m = (2 * lambda_m * L) / a_m;
      const w = w_m * 1000; // m a mm
      
      return {
        result: { w: formatNumber(w) },
        steps: [
          `w = 2λL/a`,
          `w = (2 × ${lambda} × 10⁻⁹ m × ${L} m) / (${a} × 10⁻³ m)`,
          `w = ${formatNumber(w_m)} m = ${formatNumber(w)} mm`
        ]
      };
    }
  },
  {
    id: 'red-difraccion',
    groupId: 'red-difraccion',
    title: 'Ecuación de la Red de Difracción',
    isFundamental: true,
    formula: String.raw`d \sin(\theta) = m\lambda`,
    variables: [
      { symbol: 'd', label: 'Espaciado de la red (d) (µm)', unit: 'µm' },
      { symbol: 'm', label: 'Orden del máximo (m)', unit: 'adimensional' },
      { symbol: 'lambda', label: 'Longitud de onda (λ) (nm)', unit: 'nm' }
    ],
    output: { symbol: 'theta', label: 'Ángulo del máximo (θ)', unit: 'grados' },
    resolve: ({ d, m, lambda }) => {
      // Convertir a metros
      const d_m = d * 1e-6; // µm a m
      const lambda_m = lambda * 1e-9; // nm a m
      
      const sin_theta = (m * lambda_m) / d_m;
      
      // Validar dominio de arcoseno
      if (Math.abs(sin_theta) > 1) {
        return {
          result: { theta: 'Error' },
          steps: [
            `d sin(θ) = mλ`,
            `sin(θ) = mλ/d`,
            `sin(θ) = (${m} × ${lambda} × 10⁻⁹) / (${d} × 10⁻⁶)`,
            `sin(θ) = ${formatNumber(sin_theta)}`,
            `Error: |sin(θ)| > 1. No existe solución física.`
          ]
        };
      }
      
      const theta_rad = Math.asin(sin_theta);
      const theta = theta_rad * 180 / Math.PI;
      
      return {
        result: { theta: formatNumber(theta) },
        steps: [
          `d sin(θ) = mλ`,
          `sin(θ) = mλ/d`,
          `sin(θ) = (${m} × ${lambda} × 10⁻⁹) / (${d} × 10⁻⁶)`,
          `sin(θ) = ${formatNumber(sin_theta)}`,
          `θ = arcsin(${formatNumber(sin_theta)}) = ${formatNumber(theta)}°`
        ]
      };
    }
  },
  {
    id: 'criterio-rayleigh',
    groupId: 'criterio-rayleigh',
    title: 'Criterio de Rayleigh',
    isFundamental: true,
    formula: String.raw`\theta_{min} = 1.22 \frac{\lambda}{D}`,
    variables: [
      { symbol: 'lambda', label: 'Longitud de onda (λ) (nm)', unit: 'nm' },
      { symbol: 'D', label: 'Diámetro de apertura (D) (cm)', unit: 'cm' }
    ],
    output: { symbol: 'theta_min', label: 'Ángulo mínimo resoluble (θₘᵢₙ)', unit: 'mrad' },
    resolve: ({ lambda, D }) => {
      // Convertir a metros
      const lambda_m = lambda * 1e-9; // nm a m
      const D_m = D * 1e-2; // cm a m
      
      const theta_min_rad = 1.22 * lambda_m / D_m;
      const theta_min = theta_min_rad * 1000; // rad a mrad
      
      return {
        result: { theta_min: formatNumber(theta_min) },
        steps: [
          `θₘᵢₙ = 1.22 × λ/D`,
          `θₘᵢₙ = 1.22 × (${lambda} × 10⁻⁹ m) / (${D} × 10⁻² m)`,
          `θₘᵢₙ = ${formatNumber(theta_min_rad)} rad = ${formatNumber(theta_min)} mrad`
        ]
      };
    }
  }
];
