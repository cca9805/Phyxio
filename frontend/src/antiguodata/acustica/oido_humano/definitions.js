import { formatNumber } from '../../../utils/formatNumber';

export const definitions = [
  // --- Grupo 1: Rango Audible ---
  {
    id: 'oido-rango-audible',
    groupId: 'oido-rango-audible',
    title: 'Rango Audible por Edad',
    formula: 'f_max = 20000 - (edad × 160)',
    variables: [
      { symbol: 'edad', label: 'Edad de la persona (años)', unit: 'años' }
    ],
    output: { symbol: 'f_max', label: 'Frecuencia máxima audible', unit: 'Hz' },
    resolve: ({ edad }) => {
      const f_max = 20000 - (parseFloat(edad) * 160);
      return { 
        result: { f_max: formatNumber(f_max) }, 
        steps: [`f_max = 20000 - (${edad} × 160) = ${formatNumber(f_max)} Hz`] 
      };
    }
  },

  // --- Grupo 2: Localización de Sonido ---
  {
    id: 'oido-itd',
    groupId: 'oido-itd',
    title: 'Diferencia de Tiempo Interaural (ITD)',
    formula: 'ITD = (d × sen(θ)) / v',
    variables: [
      { symbol: 'd', label: 'Distancia entre oídos (cm)', unit: 'cm' },
      { symbol: 'theta', label: 'Ángulo de la fuente sonora (°)', unit: '°' },
      { symbol: 'v', label: 'Velocidad del sonido (cm/μs)', unit: 'cm/μs', defaultValue: 0.0343 }
    ],
    output: { symbol: 'ITD', label: 'Diferencia de tiempo interaural', unit: 'μs' },
    resolve: ({ d, theta, v = 0.0343 }) => {
      const thetaRad = parseFloat(theta) * Math.PI / 180;
      const ITD = (parseFloat(d) * Math.sin(thetaRad)) / parseFloat(v);
      return { 
        result: { ITD: formatNumber(ITD) }, 
        steps: [`ITD = (${d} × sen(${theta}°)) / ${v} = ${formatNumber(ITD)} μs`] 
      };
    }
  },
  {
    id: 'oido-ild',
    groupId: 'oido-ild',
    title: 'Diferencia de Nivel Interaural (ILD)',
    formula: 'ILD = 20 × log₁₀(I₁ / I₂)',
    variables: [
      { symbol: 'I1', label: 'Intensidad en oído cercano (W/m²)', unit: 'W/m²' },
      { symbol: 'I2', label: 'Intensidad en oído lejano (W/m²)', unit: 'W/m²' }
    ],
    output: { symbol: 'ILD', label: 'Diferencia de nivel interaural', unit: 'dB' },
    resolve: ({ I1, I2 }) => {
      const numI2 = parseFloat(I2);
      if (numI2 === 0) return { error: 'La intensidad I₂ no puede ser cero.' };
      const ILD = 20 * Math.log10(parseFloat(I1) / numI2);
      return { 
        result: { ILD: formatNumber(ILD) }, 
        steps: [`ILD = 20 × log₁₀(${I1} / ${I2}) = ${formatNumber(ILD)} dB`] 
      };
    }
  },
  {
    id: 'oido-precision-angular',
    groupId: 'oido-precision-angular',
    title: 'Precisión de Localización de Sonido',
    formula: 'Δθ = (v × Δt) / (d × cos(θ)) × (180 / π)',
    variables: [
      { symbol: 'v', label: 'Velocidad del sonido (m/s)', unit: 'm/s', defaultValue: 343 },
      { symbol: 'delta_t', label: 'Precisión temporal del oído (μs)', unit: 'μs' },
      { symbol: 'd', label: 'Distancia entre oídos (m)', unit: 'm', defaultValue: 0.20 },
      { symbol: 'theta', label: 'Ángulo de la fuente sonora (°)', unit: '°' }
    ],
    output: { symbol: 'delta_theta', label: 'Precisión angular', unit: '°' },
    resolve: ({ v = 343, delta_t, d = 0.20, theta }) => {
      const thetaRad = parseFloat(theta) * Math.PI / 180;
      const delta_t_s = parseFloat(delta_t) * 1e-6; // Convertir μs a s
      const delta_theta = (parseFloat(v) * delta_t_s) / (parseFloat(d) * Math.cos(thetaRad)) * (180 / Math.PI);
      return { 
        result: { delta_theta: formatNumber(delta_theta) }, 
        steps: [`Δθ = (${v} × ${delta_t}×10⁻⁶) / (${d} × cos(${theta}°)) × (180/π) = ${formatNumber(delta_theta)}°`] 
      };
    }
  },

  // --- Grupo 3: Protección Auditiva ---
  {
    id: 'oido-nivel-seguro',
    groupId: 'oido-nivel-seguro',
    title: 'Nivel de Presión Sonora Seguro',
    formula: 'L_seguro = 85 - 3 × log₂(t / 8)',
    variables: [
      { symbol: 't', label: 'Tiempo de exposición (h)', unit: 'h' }
    ],
    output: { symbol: 'L_seguro', label: 'Nivel seguro', unit: 'dB' },
    resolve: ({ t }) => {
      const numT = parseFloat(t);
      if (numT === 0) return { error: 'El tiempo no puede ser cero.' };
      const L_seguro = 85 - 3 * Math.log2(numT / 8);
      return { 
        result: { L_seguro: formatNumber(L_seguro) }, 
        steps: [`L_seguro = 85 - 3 × log₂(${t} / 8) = ${formatNumber(L_seguro)} dB`] 
      };
    }
  },
  {
    id: 'oido-tiempo-seguro',
    groupId: 'oido-tiempo-seguro',
    title: 'Tiempo de Exposición Seguro',
    formula: 't_seguro = 8 × 2^((85 - L) / 3)',
    variables: [
      { symbol: 'L', label: 'Nivel de presión sonora (dB)', unit: 'dB' }
    ],
    output: { symbol: 't_seguro', label: 'Tiempo seguro', unit: 'h' },
    resolve: ({ L }) => {
      const t_seguro = 8 * Math.pow(2, (85 - parseFloat(L)) / 3);
      return { 
        result: { t_seguro: formatNumber(t_seguro) }, 
        steps: [`t_seguro = 8 × 2^((85 - ${L}) / 3) = ${formatNumber(t_seguro)} h`] 
      };
    }
  },
  {
    id: 'oido-umbral-dolor',
    groupId: 'oido-umbral-dolor',
    title: 'Distancia al Umbral de Dolor',
    formula: 'r = r₀ × 10^((L₀ - 120) / 20)',
    variables: [
      { symbol: 'r0', label: 'Distancia de referencia (m)', unit: 'm' },
      { symbol: 'L0', label: 'Nivel a distancia r₀ (dB)', unit: 'dB' }
    ],
    output: { symbol: 'r', label: 'Distancia al umbral de dolor', unit: 'm' },
    resolve: ({ r0, L0 }) => {
      const r = parseFloat(r0) * Math.pow(10, (parseFloat(L0) - 120) / 20);
      return { 
        result: { r: formatNumber(r) }, 
        steps: [`r = ${r0} × 10^((${L0} - 120) / 20) = ${formatNumber(r)} m`] 
      };
    }
  },
  {
    id: 'oido-celulas-danadas',
    groupId: 'oido-celulas-danadas',
    title: 'Células Ciliadas Dañadas',
    formula: 'N_dañadas = N_total × (1 - 10^(-pérdida / 20))',
    variables: [
      { symbol: 'N_total', label: 'Células totales (células)', unit: 'células', defaultValue: 15000 },
      { symbol: 'perdida', label: 'Pérdida auditiva (dB)', unit: 'dB' }
    ],
    output: { symbol: 'N_danadas', label: 'Células dañadas', unit: 'células' },
    resolve: ({ N_total = 15000, perdida }) => {
      const N_danadas = parseFloat(N_total) * (1 - Math.pow(10, -parseFloat(perdida) / 20));
      return { 
        result: { N_danadas: formatNumber(N_danadas, 0) }, 
        steps: [`N_dañadas = ${N_total} × (1 - 10^(-${perdida} / 20)) = ${formatNumber(N_danadas, 0)} células`] 
      };
    }
  },

  // --- Grupo 4: Aspectos Cuantitativos ---
  {
    id: 'oido-resonancia',
    groupId: 'oido-resonancia',
    title: 'Frecuencia de Resonancia del Conducto',
    formula: 'f_res = v / (4 × L)',
    variables: [
      { symbol: 'v', label: 'Velocidad del sonido (m/s)', unit: 'm/s', defaultValue: 343 },
      { symbol: 'L', label: 'Longitud del conducto (m)', unit: 'm', defaultValue: 0.025 }
    ],
    output: { symbol: 'f_res', label: 'Frecuencia de resonancia', unit: 'Hz' },
    resolve: ({ v = 343, L = 0.025 }) => {
      const numL = parseFloat(L);
      if (numL === 0) return { error: 'La longitud no puede ser cero.' };
      const f_res = parseFloat(v) / (4 * numL);
      return { 
        result: { f_res: formatNumber(f_res) }, 
        steps: [`f_res = ${v} / (4 × ${L}) = ${formatNumber(f_res)} Hz`] 
      };
    }
  },
  {
    id: 'oido-amplificacion',
    groupId: 'oido-amplificacion',
    title: 'Amplificación de los Huesecillos',
    formula: 'G = (A_tímpano / A_ventana) × L_palanca',
    variables: [
      { symbol: 'A_timpano', label: 'Área del tímpano (mm²)', unit: 'mm²', defaultValue: 55 },
      { symbol: 'A_ventana', label: 'Área de la ventana oval (mm²)', unit: 'mm²', defaultValue: 3.2 },
      { symbol: 'L_palanca', label: 'Ventaja mecánica (adimensional)', unit: 'adimensional', defaultValue: 1.3 }
    ],
    output: { symbol: 'G', label: 'Ganancia de amplificación', unit: 'veces' },
    resolve: ({ A_timpano = 55, A_ventana = 3.2, L_palanca = 1.3 }) => {
      const numA_ventana = parseFloat(A_ventana);
      if (numA_ventana === 0) return { error: 'El área de la ventana no puede ser cero.' };
      const G = (parseFloat(A_timpano) / numA_ventana) * parseFloat(L_palanca);
      return { 
        result: { G: formatNumber(G) }, 
        steps: [`G = (${A_timpano} / ${A_ventana}) × ${L_palanca} = ${formatNumber(G)} veces`] 
      };
    }
  }
];
