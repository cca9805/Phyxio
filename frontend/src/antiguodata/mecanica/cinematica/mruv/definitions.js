import { formatNumber } from '../../../../utils/formatNumber';

const GRAVITY_LABEL = 'Aceleración (g)';
const GRAVITY_UNIT = 'm/s²';

export const definitions = [
  // === GRUPO 1: ECUACIÓN DE VELOCIDAD ===
  {
    id: 'mruv-velocidad-final',
    groupId: 'mruv-ecuacion-velocidad',
    title: 'Velocidad Final (vf)',
    formula: 'vf = v₀ + a ⋅ t',
    variables: [
      { symbol: 'v0', label: 'Velocidad Inicial (v₀)', unit: 'm/s' },
      { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's' }
    ],
    output: { symbol: 'vf', label: 'Velocidad Final (vf)', unit: 'm/s' },
    resolve: ({ v0, a, t }) => {
      const nums = [v0, a, t].map(parseFloat);
      const vf = nums[0] + nums[1] * nums[2];
      return { result: { vf }, steps: [`vf = ${nums[0]} + ${nums[1]} * ${nums[2]} = ${formatNumber(vf)} m/s`] };
    }
  },
  {
    id: 'mruv-velocidad-inicial-desde-vf',
    groupId: 'mruv-ecuacion-velocidad',
    title: 'Velocidad Inicial (v₀)',
    formula: 'v₀ = vf - a ⋅ t',
    variables: [
      { symbol: 'vf', label: 'Velocidad Final (vf)', unit: 'm/s' },
      { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's' }
    ],
    output: { symbol: 'v0', label: 'Velocidad Inicial (v₀)', unit: 'm/s' },
    resolve: ({ vf, a, t }) => {
      const nums = [vf, a, t].map(parseFloat);
      const v0 = nums[0] - nums[1] * nums[2];
      return { result: { v0 }, steps: [`v₀ = ${nums[0]} - ${nums[1]} * ${nums[2]} = ${formatNumber(v0)} m/s`] };
    }
  },
  {
    id: 'mruv-aceleracion-desde-velocidad',
    groupId: 'mruv-ecuacion-velocidad',
    title: 'Aceleración (a)',
    formula: 'a = (vf - v₀) / t',
    variables: [
      { symbol: 'vf', label: 'Velocidad Final (vf)', unit: 'm/s' },
      { symbol: 'v0', label: 'Velocidad Inicial (v₀)', unit: 'm/s' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's' }
    ],
    output: { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' },
    resolve: ({ vf, v0, t }) => {
      const nums = [vf, v0, t].map(parseFloat);
      if (nums[2] === 0) return { error: 'El tiempo no puede ser cero.' };
      const a = (nums[0] - nums[1]) / nums[2];
      return { result: { a }, steps: [`a = (${nums[0]} - ${nums[1]}) / ${nums[2]} = ${formatNumber(a)} m/s²`] };
    }
  },
  {
    id: 'mruv-tiempo-desde-velocidad',
    groupId: 'mruv-ecuacion-velocidad',
    title: 'Tiempo (t)',
    formula: 't = (vf - v₀) / a',
    variables: [
      { symbol: 'vf', label: 'Velocidad Final (vf)', unit: 'm/s' },
      { symbol: 'v0', label: 'Velocidad Inicial (v₀)', unit: 'm/s' },
      { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' }
    ],
    output: { symbol: 't', label: 'Tiempo (t)', unit: 's' },
    resolve: ({ vf, v0, a }) => {
      const nums = [vf, v0, a].map(parseFloat);
      if (nums[2] === 0) return { error: 'La aceleración no puede ser cero.' };
      const t = (nums[0] - nums[1]) / nums[2];
      return { result: { t }, steps: [`t = (${nums[0]} - ${nums[1]}) / ${nums[2]} = ${formatNumber(t)} s`] };
    }
  },

  // === GRUPO 2: ECUACIÓN DE POSICIÓN ===
  {
    id: 'mruv-posicion-final',
    groupId: 'mruv-ecuacion-posicion',
    title: 'Posición Final (xf)',
    formula: 'xf = x₀ + v₀t + ½at²',
    variables: [
      { symbol: 'x0', label: 'Posición Inicial (x₀)', unit: 'm' },
      { symbol: 'v0', label: 'Velocidad Inicial (v₀)', unit: 'm/s' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's' },
      { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' }
    ],
    output: { symbol: 'xf', label: 'Posición Final (xf)', unit: 'm' },
    resolve: ({ x0, v0, t, a }) => {
      const nums = [x0, v0, t, a].map(parseFloat);
      const xf = nums[0] + nums[1] * nums[2] + 0.5 * nums[3] * Math.pow(nums[2], 2);
      return { result: { xf }, steps: [`xf = ${nums[0]} + ${nums[1]}*${nums[2]} + ½*${nums[3]}*${nums[2]}² = ${formatNumber(xf)} m`] };
    }
  },
  {
    id: 'mruv-aceleracion-desde-posicion',
    groupId: 'mruv-ecuacion-posicion',
    title: 'Aceleración (a)',
    formula: 'a = 2(xf - x₀ - v₀t) / t²',
    variables: [
      { symbol: 'xf', label: 'Posición Final (xf)', unit: 'm' },
      { symbol: 'x0', label: 'Posición Inicial (x₀)', unit: 'm' },
      { symbol: 'v0', label: 'Velocidad Inicial (v₀)', unit: 'm/s' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's' }
    ],
    output: { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' },
    resolve: ({ xf, x0, v0, t }) => {
      const nums = [xf, x0, v0, t].map(parseFloat);
      if (nums[3] === 0) return { error: 'El tiempo no puede ser cero.' };
      const a = 2 * (nums[0] - nums[1] - nums[2] * nums[3]) / Math.pow(nums[3], 2);
      return { result: { a }, steps: [`a = 2(${nums[0]} - ${nums[1]} - ${nums[2]}*${nums[3]}) / ${nums[3]}² = ${formatNumber(a)} m/s²`] };
    }
  },

  // === GRUPO 3: ECUACIÓN DE TORRICELLI ===
  {
    id: 'mruv-velocidad-final-torricelli',
    groupId: 'mruv-ecuacion-torricelli',
    title: 'Velocidad Final (vf)',
    formula: 'vf² = v₀² + 2aΔx',
    variables: [
      { symbol: 'v0', label: 'Velocidad Inicial (v₀)', unit: 'm/s' },
      { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' },
      { symbol: 'dx', label: 'Desplazamiento (Δx)', unit: 'm' }
    ],
    output: { symbol: 'vf', label: 'Velocidad Final (vf)', unit: 'm/s' },
    resolve: ({ v0, a, dx }) => {
      const nums = [v0, a, dx].map(parseFloat);
      const vf_sq = Math.pow(nums[0], 2) + 2 * nums[1] * nums[2];
      if (vf_sq < 0) return { error: 'Resulta en una velocidad imaginaria (raíz negativa).' };
      const vf = Math.sqrt(vf_sq);
      return { result: { vf }, steps: [`vf = √(${nums[0]}² + 2*${nums[1]}*${nums[2]}) = ${formatNumber(vf)} m/s`] };
    }
  },
  {
    id: 'mruv-aceleracion-torricelli',
    groupId: 'mruv-ecuacion-torricelli',
    title: 'Aceleración (a)',
    formula: 'a = (vf² - v₀²) / 2Δx',
    variables: [
      { symbol: 'vf', label: 'Velocidad Final (vf)', unit: 'm/s' },
      { symbol: 'v0', label: 'Velocidad Inicial (v₀)', unit: 'm/s' },
      { symbol: 'dx', label: 'Desplazamiento (Δx)', unit: 'm' }
    ],
    output: { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' },
    resolve: ({ vf, v0, dx }) => {
      const nums = [vf, v0, dx].map(parseFloat);
      if (nums[2] === 0) return { error: 'El desplazamiento no puede ser cero.' };
      const a = (Math.pow(nums[0], 2) - Math.pow(nums[1], 2)) / (2 * nums[2]);
      return { result: { a }, steps: [`a = (${nums[0]}² - ${nums[1]}²) / (2*${nums[2]}) = ${formatNumber(a)} m/s²`] };
    }
  },

  // === GRUPO 4: POSICIÓN POR VELOCIDAD MEDIA ===
  {
    id: 'mruv-posicion-velocidad-media',
    groupId: 'mruv-posicion-velocidad-media',
    title: 'Posición Final (xf)',
    formula: 'xf = x₀ + ½(v₀+vf)t',
    variables: [
      { symbol: 'x0', label: 'Posición Inicial (x₀)', unit: 'm' },
      { symbol: 'v0', label: 'Velocidad Inicial (v₀)', unit: 'm/s' },
      { symbol: 'vf', label: 'Velocidad Final (vf)', unit: 'm/s' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's' }
    ],
    output: { symbol: 'xf', label: 'Posición Final (xf)', unit: 'm' },
    resolve: ({ x0, v0, vf, t }) => {
      const nums = [x0, v0, vf, t].map(parseFloat);
      const xf = nums[0] + 0.5 * (nums[1] + nums[2]) * nums[3];
      return { result: { xf }, steps: [`xf = ${nums[0]} + 0.5*(${nums[1]}+${nums[2]})*${nums[3]} = ${formatNumber(xf)} m`] };
    }
  },
  {
    id: 'mruv-tiempo-desde-posicion-media',
    groupId: 'mruv-posicion-velocidad-media',
    title: 'Tiempo (t)',
    formula: 't = 2(xf - x₀) / (v₀ + vf)',
    variables: [
        { symbol: 'xf', label: 'Posición Final (xf)', unit: 'm' },
        { symbol: 'x0', label: 'Posición Inicial (x₀)', unit: 'm' },
        { symbol: 'v0', label: 'Velocidad Inicial (v₀)', unit: 'm/s' },
        { symbol: 'vf', label: 'Velocidad Final (vf)', unit: 'm/s' },
    ],
    output: { symbol: 't', label: 'Tiempo (t)', unit: 's' },
    resolve: ({ xf, x0, v0, vf }) => {
      const nums = [xf, x0, v0, vf].map(parseFloat);
      if (nums[2] + nums[3] === 0) return { error: 'La suma de las velocidades no puede ser cero.' };
      const t = 2 * (nums[0] - nums[1]) / (nums[2] + nums[3]);
      return { result: { t }, steps: [`t = 2(${nums[0]} - ${nums[1]}) / (${nums[2]} + ${nums[3]}) = ${formatNumber(t)} s`] };
    }
  },

  // === GRUPO 5: CAÍDA LIBRE ===
  {
    id: 'mruv-caida-libre-altura',
    groupId: 'mruv-caida-libre',
    title: 'Altura de Caída (h)',
    formula: 'h = ½gt²',
    variables: [
      { symbol: 'g', label: GRAVITY_LABEL, unit: GRAVITY_UNIT, defaultValue: 9.8 },
      { symbol: 't', label: 'Tiempo de caída (t)', unit: 's' }
    ],
    output: { symbol: 'h', label: 'Altura (h)', unit: 'm' },
    resolve: ({ g, t }) => {
      const nums = [g, t].map(parseFloat);
      const h = 0.5 * nums[0] * Math.pow(nums[1], 2);
      return { result: { h }, steps: [`h = ½ * ${nums[0]} * ${nums[1]}² = ${formatNumber(h)} m`] };
    }
  },
  {
    id: 'mruv-caida-libre-tiempo',
    groupId: 'mruv-caida-libre',
    title: 'Tiempo de Caída (t)',
    formula: 't = √(2h / g)',
    variables: [
        { symbol: 'h', label: 'Altura (h)', unit: 'm' },
        { symbol: 'g', label: GRAVITY_LABEL, unit: GRAVITY_UNIT, defaultValue: 9.8 }
    ],
    output: { symbol: 't', label: 'Tiempo de caída (t)', unit: 's' },
    resolve: ({ h, g }) => {
      const nums = [h, g].map(parseFloat);
      if (nums[1] === 0) return { error: 'La gravedad no puede ser cero.' };
      const hg_ratio = 2 * nums[0] / nums[1];
      if (hg_ratio < 0) return { error: 'La altura no puede ser negativa.' };
      const t = Math.sqrt(hg_ratio);
      return { result: { t }, steps: [`t = √(2 * ${nums[0]} / ${nums[1]}) = ${formatNumber(t)} s`] };
    }
  },

  // === GRUPO 6: TIRO VERTICAL ===
  {
    id: 'mruv-tiro-vertical-hmax',
    groupId: 'mruv-tiro-vertical',
    title: 'Altura Máxima (hₘₐₓ)',
    formula: 'hₘₐₓ = v₀² / 2g',
    variables: [
      { symbol: 'v0', label: 'Velocidad Inicial (v₀)', unit: 'm/s' },
      { symbol: 'g', label: GRAVITY_LABEL, unit: GRAVITY_UNIT, defaultValue: 9.8 }
    ],
    output: { symbol: 'h_max', label: 'Altura Máxima (hₘₐₓ)', unit: 'm' },
    resolve: ({ v0, g }) => {
      const nums = [v0, g].map(parseFloat);
      if (nums[1] === 0) return { error: 'La gravedad no puede ser cero.' };
      const h_max = Math.pow(nums[0], 2) / (2 * nums[1]);
      return { result: { h_max }, steps: [`hₘₐₓ = ${nums[0]}² / (2 * ${nums[1]}) = ${formatNumber(h_max)} m`] };
    }
  },
    {
    id: 'mruv-tiro-vertical-tsubir',
    groupId: 'mruv-tiro-vertical',
    title: 'Tiempo de Subida (tₛᵤᵦᵢᵣ)',
    formula: 't_subir = v₀/g',
    variables: [
      { symbol: 'v0', label: 'Velocidad Inicial (v₀)', unit: 'm/s' },
      { symbol: 'g', label: GRAVITY_LABEL, unit: GRAVITY_UNIT, defaultValue: 9.8 }
    ],
    output: { symbol: 't_subir', label: 'Tiempo de Subida (tₛᵤᵦᵢᵣ)', unit: 's' },
    resolve: ({ v0, g }) => {
      const nums = [v0, g].map(parseFloat);
      if (nums[1] === 0) return { error: 'La gravedad no puede ser cero.' };
      const t_subir = nums[0] / nums[1];
      return { result: { t_subir }, steps: [`t_subir = ${nums[0]} / ${nums[1]} = ${formatNumber(t_subir)} s`] };
    }
  },
  {
    id: 'mruv-tiro-vertical-tvuelo',
    groupId: 'mruv-tiro-vertical',
    title: 'Tiempo de Vuelo (tᵥᵤₑₗₒ)',
    formula: 'tᵥᵤₑₗₒ = 2v₀ / g',
    variables: [
      { symbol: 'v0', label: 'Velocidad Inicial (v₀)', unit: 'm/s' },
      { symbol: 'g', label: GRAVITY_LABEL, unit: GRAVITY_UNIT, defaultValue: 9.8 }
    ],
    output: { symbol: 't_vuelo', label: 'Tiempo de Vuelo (tᵥᵤₑₗₒ)', unit: 's' },
    resolve: ({ v0, g }) => {
      const nums = [v0, g].map(parseFloat);
      if (nums[1] === 0) return { error: 'La gravedad no puede ser cero.' };
      const t_vuelo = 2 * nums[0] / nums[1];
      return { result: { t_vuelo }, steps: [`tᵥᵤₑₗₒ = (2 * ${nums[0]}) / ${nums[1]} = ${formatNumber(t_vuelo)} s`] };
    }
  }
];
