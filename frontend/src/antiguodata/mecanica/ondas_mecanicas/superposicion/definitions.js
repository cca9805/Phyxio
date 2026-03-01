import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  // --- Grupo 1: Interferencia Constructiva/Destructiva ---
  {
    id: 'ondas-super-constructiva',
    groupId: 'ondas-super-constructiva',
    isFundamental: true,
    title: 'Amplitud Constructiva (A_max = A₁ + A₂)',
    formula: 'A_max = A1 + A2',
    variables: [
      { symbol: 'A1', label: 'Amplitud A₁ (m)', unit: 'm' },
      { symbol: 'A2', label: 'Amplitud A₂ (m)', unit: 'm' }
    ],
    output: { symbol: 'A_max', label: 'Amplitud máxima A_max (m)', unit: 'm' },
    resolve: ({ A1, A2 }) => {
      const A_max = parseFloat(A1) + parseFloat(A2);
      return {
        result: { A_max: formatNumber(A_max) },
        steps: [
          `A_max = A₁ + A₂ = ${A1} + ${A2}`,
          `A_max = ${formatNumber(A_max)} m`
        ]
      };
    }
  },
  {
    id: 'ondas-super-destructiva',
    groupId: 'ondas-super-destructiva',
    isFundamental: true,
    title: 'Amplitud Destructiva (A_min = |A₁ - A₂|)',
    formula: 'A_min = |A1 - A2|',
    variables: [
      { symbol: 'A1', label: 'Amplitud A₁ (m)', unit: 'm' },
      { symbol: 'A2', label: 'Amplitud A₂ (m)', unit: 'm' }
    ],
    output: { symbol: 'A_min', label: 'Amplitud mínima A_min (m)', unit: 'm' },
    resolve: ({ A1, A2 }) => {
      const A_min = Math.abs(parseFloat(A1) - parseFloat(A2));
      return {
        result: { A_min: formatNumber(A_min) },
        steps: [
          `A_min = |A₁ - A₂| = |${A1} - ${A2}|`,
          `A_min = ${formatNumber(A_min)} m`
        ]
      };
    }
  },
  {
    id: 'ondas-super-amplitud-general',
    groupId: 'ondas-super-amplitud-general',
    isFundamental: true,
    title: 'Amplitud General con Diferencia de Fase',
    formula: 'A = √(A₁² + A₂² + 2A₁A₂cos(Δφ))',
    variables: [
      { symbol: 'A1', label: 'Amplitud A₁ (m)', unit: 'm' },
      { symbol: 'A2', label: 'Amplitud A₂ (m)', unit: 'm' },
      { symbol: 'delta_phi', label: 'Diferencia de fase Δφ (rad)', unit: 'rad' }
    ],
    output: { symbol: 'A', label: 'Amplitud resultante A (m)', unit: 'm' },
    resolve: ({ A1, A2, delta_phi }) => {
      const a1 = parseFloat(A1);
      const a2 = parseFloat(A2);
      const dphi = parseFloat(delta_phi);
      const A = Math.sqrt(a1*a1 + a2*a2 + 2*a1*a2*Math.cos(dphi));
      return {
        result: { A: formatNumber(A) },
        steps: [
          `A = √(A₁² + A₂² + 2A₁A₂cos(Δφ))`,
          `A = √(${a1}² + ${a2}² + 2×${a1}×${a2}×cos(${dphi}))`,
          `A = ${formatNumber(A)} m`
        ]
      };
    }
  },

  // --- Grupo 2: Diferencia de Camino ---
  {
    id: 'ondas-super-fase-camino',
    groupId: 'ondas-super-fase-camino',
    isFundamental: true,
    title: 'Diferencia de Fase desde Camino (Δφ = 2πΔr/λ)',
    formula: 'Δφ = (2π × Δr) / λ',
    variables: [
      { symbol: 'delta_r', label: 'Diferencia de camino Δr (m)', unit: 'm' },
      { symbol: 'lambda', label: 'Longitud de onda λ (m)', unit: 'm' }
    ],
    output: { symbol: 'delta_phi', label: 'Diferencia de fase Δφ (rad)', unit: 'rad' },
    resolve: ({ delta_r, lambda }) => {
      const l = parseFloat(lambda);
      if (l === 0) return { error: 'La longitud de onda no puede ser cero.' };
      const delta_phi = (2 * Math.PI * parseFloat(delta_r)) / l;
      return {
        result: { delta_phi: formatNumber(delta_phi) },
        steps: [
          `Δφ = (2π × Δr) / λ = (2π × ${delta_r}) / ${lambda}`,
          `Δφ = ${formatNumber(delta_phi)} rad`
        ]
      };
    }
  },
  {
    id: 'ondas-super-camino-fase',
    groupId: 'ondas-super-fase-camino',
    isFundamental: false,
    title: 'Diferencia de Camino desde Fase (Δr = λΔφ/2π)',
    formula: 'Δr = (λ × Δφ) / (2π)',
    variables: [
      { symbol: 'lambda', label: 'Longitud de onda λ (m)', unit: 'm' },
      { symbol: 'delta_phi', label: 'Diferencia de fase Δφ (rad)', unit: 'rad' }
    ],
    output: { symbol: 'delta_r', label: 'Diferencia de camino Δr (m)', unit: 'm' },
    resolve: ({ lambda, delta_phi }) => {
      const delta_r = (parseFloat(lambda) * parseFloat(delta_phi)) / (2 * Math.PI);
      return {
        result: { delta_r: formatNumber(delta_r) },
        steps: [
          `Δr = (λ × Δφ) / (2π) = (${lambda} × ${delta_phi}) / (2π)`,
          `Δr = ${formatNumber(delta_r)} m`
        ]
      };
    }
  },
  {
    id: 'ondas-super-orden',
    groupId: 'ondas-super-orden',
    isFundamental: true,
    title: 'Orden de Interferencia (n = Δr/λ)',
    formula: 'n = Δr / λ',
    variables: [
      { symbol: 'delta_r', label: 'Diferencia de camino Δr (m)', unit: 'm' },
      { symbol: 'lambda', label: 'Longitud de onda λ (m)', unit: 'm' }
    ],
    output: { symbol: 'n', label: 'Orden de interferencia n', unit: '' },
    resolve: ({ delta_r, lambda }) => {
      const l = parseFloat(lambda);
      if (l === 0) return { error: 'La longitud de onda no puede ser cero.' };
      const n = parseFloat(delta_r) / l;
      return {
        result: { n: formatNumber(n) },
        steps: [
          `n = Δr / λ = ${delta_r} / ${lambda}`,
          `n = ${formatNumber(n)}`,
          n % 1 === 0 ? 'Interferencia constructiva (n entero)' : 
          Math.abs(n - Math.round(n)) < 0.01 ? 'Interferencia constructiva' :
          Math.abs(n - (Math.floor(n) + 0.5)) < 0.01 ? 'Interferencia destructiva (n + 0.5)' :
          'Interferencia parcial'
        ]
      };
    }
  },

  // --- Grupo 3: Pulsaciones ---
  {
    id: 'ondas-super-pulsacion',
    groupId: 'ondas-super-pulsacion',
    isFundamental: true,
    title: 'Frecuencia de Pulsación (f_puls = |f₁ - f₂|)',
    formula: 'f_puls = |f1 - f2|',
    variables: [
      { symbol: 'f1', label: 'Frecuencia f₁ (Hz)', unit: 'Hz' },
      { symbol: 'f2', label: 'Frecuencia f₂ (Hz)', unit: 'Hz' }
    ],
    output: { symbol: 'f_puls', label: 'Frecuencia de pulsación f_puls (Hz)', unit: 'Hz' },
    resolve: ({ f1, f2 }) => {
      const f_puls = Math.abs(parseFloat(f1) - parseFloat(f2));
      return {
        result: { f_puls: formatNumber(f_puls) },
        steps: [
          `f_puls = |f₁ - f₂| = |${f1} - ${f2}|`,
          `f_puls = ${formatNumber(f_puls)} Hz`
        ]
      };
    }
  },
  {
    id: 'ondas-super-frecuencia-promedio',
    groupId: 'ondas-super-pulsacion',
    isFundamental: false,
    title: 'Frecuencia Promedio (f_prom = (f₁ + f₂)/2)',
    formula: 'f_prom = (f1 + f2) / 2',
    variables: [
      { symbol: 'f1', label: 'Frecuencia f₁ (Hz)', unit: 'Hz' },
      { symbol: 'f2', label: 'Frecuencia f₂ (Hz)', unit: 'Hz' }
    ],
    output: { symbol: 'f_prom', label: 'Frecuencia promedio f_prom (Hz)', unit: 'Hz' },
    resolve: ({ f1, f2 }) => {
      const f_prom = (parseFloat(f1) + parseFloat(f2)) / 2;
      return {
        result: { f_prom: formatNumber(f_prom) },
        steps: [
          `f_prom = (f₁ + f₂) / 2 = (${f1} + ${f2}) / 2`,
          `f_prom = ${formatNumber(f_prom)} Hz`
        ]
      };
    }
  }
];
