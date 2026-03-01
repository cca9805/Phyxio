import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  // --- Grupo 1: Movimiento Relativo en 1D ---
  {
    id: 'mr-posicion-relativa-1d',
    groupId: 'mr-1d',
    title: 'Posición Relativa (1D)',
    formula: 'xₐᵦ = xₐ - xᵦ',
    variables: [
      { symbol: 'xa', label: 'Posición de A (xₐ)', unit: 'm' },
      { symbol: 'xb', label: 'Posición de B (xᵦ)', unit: 'm' }
    ],
    output: { symbol: 'xab', label: 'Posición de A respecto a B (xₐᵦ)', unit: 'm' },
    resolve: ({ xa, xb }) => {
      const xab = parseFloat(xa) - parseFloat(xb);
      return { result: { xab: formatNumber(xab) }, steps: [`xₐᵦ = ${xa} - ${xb} = ${formatNumber(xab)} m`] };
    }
  },
  {
    id: 'mr-despeje-xa-posicion-1d',
    groupId: 'mr-1d',
    title: 'Calcular xₐ (Posición Relativa 1D)',
    formula: 'xₐ = xₐᵦ + xᵦ',
    variables: [
      { symbol: 'xab', label: 'Posición de A respecto a B (xₐᵦ)', unit: 'm' },
      { symbol: 'xb', label: 'Posición de B (xᵦ)', unit: 'm' }
    ],
    output: { symbol: 'xa', label: 'Posición de A (xₐ)', unit: 'm' },
    resolve: ({ xab, xb }) => {
      const xa = parseFloat(xab) + parseFloat(xb);
      return { result: { xa: formatNumber(xa) }, steps: [`xₐ = ${xab} + ${xb} = ${formatNumber(xa)} m`] };
    }
  },
  {
    id: 'mr-velocidad-relativa-1d',
    groupId: 'mr-1d',
    title: 'Velocidad Relativa (1D)',
    formula: 'vₐᵦ = vₐ - vᵦ',
    variables: [
      { symbol: 'va', label: 'Velocidad de A (vₐ)', unit: 'm/s' },
      { symbol: 'vb', label: 'Velocidad de B (vᵦ)', unit: 'm/s' }
    ],
    output: { symbol: 'vab', label: 'Velocidad de A respecto a B (vₐᵦ)', unit: 'm/s' },
    resolve: ({ va, vb }) => {
      const vab = parseFloat(va) - parseFloat(vb);
      return { result: { vab: formatNumber(vab) }, steps: [`vₐᵦ = ${va} - (${vb}) = ${formatNumber(vab)} m/s`] };
    }
  },
  {
    id: 'mr-despeje-va-velocidad-1d',
    groupId: 'mr-1d',
    title: 'Calcular vₐ (Velocidad Relativa 1D)',
    formula: 'vₐ = vₐᵦ + vᵦ',
    variables: [
      { symbol: 'vab', label: 'Velocidad de A respecto a B (vₐᵦ)', unit: 'm/s' },
      { symbol: 'vb', label: 'Velocidad de B (vᵦ)', unit: 'm/s' }
    ],
    output: { symbol: 'va', label: 'Velocidad de A (vₐ)', unit: 'm/s' },
    resolve: ({ vab, vb }) => {
      const va = parseFloat(vab) + parseFloat(vb);
      return { result: { va: formatNumber(va) }, steps: [`vₐ = ${vab} + (${vb}) = ${formatNumber(va)} m/s`] };
    }
  },

  // --- Grupo 2: Transformada de Galileo (1D) ---
  {
    id: 'mr-galileo-posicion',
    groupId: 'mr-galileo',
    title: "Posición en Sistema Fijo S",
    formula: "x = x' + V*t",
    variables: [
      { symbol: 'xp', label: "Posición en S' (x')", unit: 'm' },
      { symbol: 'V', label: "Velocidad de S' respecto a S (V)", unit: 'm/s' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's' }
    ],
    output: { symbol: 'x', label: 'Posición en S (x)', unit: 'm' },
    resolve: ({ xp, V, t }) => {
      const x = parseFloat(xp) + parseFloat(V) * parseFloat(t);
      return { result: { x: formatNumber(x) }, steps: [`x = ${xp} + ${V} * ${t} = ${formatNumber(x)} m`] };
    }
  },
  {
    id: 'mr-galileo-posicion-prima',
    groupId: 'mr-galileo',
    title: "Posición en Sistema Móvil S'",
    formula: "x' = x - V*t",
    variables: [
      { symbol: 'x', label: "Posición en S (x)", unit: 'm' },
      { symbol: 'V', label: "Velocidad de S' respecto a S (V)", unit: 'm/s' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's' }
    ],
    output: { symbol: 'xp', label: "Posición en S' (x')", unit: 'm' },
    resolve: ({ x, V, t }) => {
      const xp = parseFloat(x) - parseFloat(V) * parseFloat(t);
      return { result: { xp: formatNumber(xp) }, steps: [`x' = ${x} - ${V} * ${t} = ${formatNumber(xp)} m`] };
    }
  },
  {
    id: 'mr-galileo-velocidad',
    groupId: 'mr-galileo',
    title: "Velocidad en Sistema Fijo S",
    formula: "v = v' + V",
    variables: [
      { symbol: 'vp', label: "Velocidad en S' (v')", unit: 'm/s' },
      { symbol: 'V', label: "Velocidad de S' respecto a S (V)", unit: 'm/s' }
    ],
    output: { symbol: 'v', label: 'Velocidad en S (v)', unit: 'm/s' },
    resolve: ({ vp, V }) => {
      const v = parseFloat(vp) + parseFloat(V);
      return { result: { v: formatNumber(v) }, steps: [`v = ${vp} + ${V} = ${formatNumber(v)} m/s`] };
    }
  },

  // --- Grupo 3: Encuentro en 1D ---
  {
    id: 'mr-tiempo-encuentro-1d',
    groupId: 'mr-encuentro-1d',
    title: 'Tiempo de Encuentro (1D)',
    formula: 't = (xᵦ₀ - xₐ₀) / (vₐ - vᵦ)',
    variables: [
      { symbol: 'xa0', label: 'Posición inicial de A (xₐ₀)', unit: 'm' },
      { symbol: 'va', label: 'Velocidad de A (vₐ)', unit: 'm/s' },
      { symbol: 'xb0', label: 'Posición inicial de B (xᵦ₀)', unit: 'm' },
      { symbol: 'vb', label: 'Velocidad de B (vᵦ)', unit: 'm/s' },
    ],
    output: { symbol: 't_enc', label: 'Tiempo de encuentro (t)', unit: 's' },
    resolve: ({ xa0, va, xb0, vb }) => {
      const delta_v = parseFloat(va) - parseFloat(vb);
      if (delta_v === 0) return { error: 'La velocidad relativa es cero, no se encontrarán.' };
      const t = (parseFloat(xb0) - parseFloat(xa0)) / delta_v;
      if (t < 0) return { error: `El encuentro ocurrió en el pasado (t=${formatNumber(t)} s).` };
      const x_enc = parseFloat(xa0) + parseFloat(va) * t;
      return { result: { t_enc: formatNumber(t) }, steps: [`t = (${xb0} - ${xa0}) / (${va} - (${vb})) = ${formatNumber(t)} s`, `Posición de encuentro: x = ${xa0} + (${va})*${formatNumber(t)} = ${formatNumber(x_enc)} m`] };
    }
  },

  // --- Grupo 4: Operaciones Vectoriales en 2D ---
  {
    id: 'mr-suma-vectores-2d',
    groupId: 'mr-vectores-2d',
    title: 'Suma de Vectores 2D',
    formula: 'R = A + B',
    variables: [
      { symbol: 'ax', label: 'Componente Ax', unit: '' },
      { symbol: 'ay', label: 'Componente Ay', unit: '' },
      { symbol: 'bx', label: 'Componente Bx', unit: '' },
      { symbol: 'by', label: 'Componente By', unit: '' },
    ],
    output: { symbol: 'R', label: 'Vector Resultante R', unit: '' },
    resolve: ({ ax, ay, bx, by }) => {
      const rx = parseFloat(ax) + parseFloat(bx);
      const ry = parseFloat(ay) + parseFloat(by);
      const mag = Math.sqrt(Math.pow(rx, 2) + Math.pow(ry, 2));
      const angle = Math.atan2(ry, rx) * (180 / Math.PI);
      return { result: { R: `(${formatNumber(rx)}, ${formatNumber(ry)})` }, steps: [`Rx = ${ax} + ${bx} = ${formatNumber(rx)}`, `Ry = ${ay} + ${by} = ${formatNumber(ry)}`, `|R| = ${formatNumber(mag)}`, `θ = ${formatNumber(angle)}°`] };
    }
  },
  {
    id: 'mr-resta-vectores-2d',
    groupId: 'mr-vectores-2d',
    title: 'Resta de Vectores 2D',
    formula: 'R = A - B',
    variables: [
      { symbol: 'ax', label: 'Componente Ax', unit: '' },
      { symbol: 'ay', label: 'Componente Ay', unit: '' },
      { symbol: 'bx', label: 'Componente Bx', unit: '' },
      { symbol: 'by', label: 'Componente By', unit: '' },
    ],
    output: { symbol: 'R', label: 'Vector Resultante R', unit: '' },
    resolve: ({ ax, ay, bx, by }) => {
      const rx = parseFloat(ax) - parseFloat(bx);
      const ry = parseFloat(ay) - parseFloat(by);
      const mag = Math.sqrt(Math.pow(rx, 2) + Math.pow(ry, 2));
      const angle = Math.atan2(ry, rx) * (180 / Math.PI);
      return { result: { R: `(${formatNumber(rx)}, ${formatNumber(ry)})` }, steps: [`Rx = ${ax} - ${bx} = ${formatNumber(rx)}`, `Ry = ${ay} - ${by} = ${formatNumber(ry)}`, `|R| = ${formatNumber(mag)}`, `θ = ${formatNumber(angle)}°`] };
    }
  },

  // --- Grupo 5: Velocidad Relativa en 2D ---
  {
    id: 'mr-velocidad-relativa-2d',
    groupId: 'mr-2d',
    title: 'Velocidad Relativa (2D)',
    formula: 'vₐᵦ = vₐ - vᵦ',
    variables: [
      { symbol: 'vax', label: 'Velocidad vₐ (x)', unit: 'm/s' },
      { symbol: 'vay', label: 'Velocidad vₐ (y)', unit: 'm/s' },
      { symbol: 'vbx', label: 'Velocidad vᵦ (x)', unit: 'm/s' },
      { symbol: 'vby', label: 'Velocidad vᵦ (y)', unit: 'm/s' },
    ],
    output: { symbol: 'vab', label: 'Velocidad Relativa vₐᵦ', unit: 'm/s' },
    resolve: ({ vax, vay, vbx, vby }) => {
      const vabx = parseFloat(vax) - parseFloat(vbx);
      const vaby = parseFloat(vay) - parseFloat(vby);
      const mag = Math.sqrt(Math.pow(vabx, 2) + Math.pow(vaby, 2));
      const angle = Math.atan2(vaby, vabx) * (180 / Math.PI);
      return { result: { vab: `(${formatNumber(vabx)}, ${formatNumber(vaby)})` }, steps: [`vₐᵦₓ = ${vax} - ${vbx} = ${formatNumber(vabx)}`, `vₐᵦᵧ = ${vay} - ${vby} = ${formatNumber(vaby)}`, `|vₐᵦ| = ${formatNumber(mag)} m/s`, `θ = ${formatNumber(angle)}°`] };
    }
  },
  {
    id: 'mr-composicion-velocidades-2d',
    groupId: 'mr-2d',
    title: 'Composición de Velocidades (2D)',
    formula: 'vₐₑ = vₐᵦ + vᵦₑ',
    variables: [
      { symbol: 'vabx', label: 'vₐᵦ (x)', unit: 'm/s' },
      { symbol: 'vaby', label: 'vₐᵦ (y)', unit: 'm/s' },
      { symbol: 'vbex', label: 'vᵦₑ (x)', unit: 'm/s' },
      { symbol: 'vbey', label: 'vᵦₑ (y)', unit: 'm/s' },
    ],
    output: { symbol: 'vae', label: 'Velocidad Resultante vₐₑ', unit: 'm/s' },
    resolve: ({ vabx, vaby, vbex, vbey }) => {
      const vaex = parseFloat(vabx) + parseFloat(vbex);
      const vaey = parseFloat(vaby) + parseFloat(vbey);
      const mag = Math.sqrt(Math.pow(vaex, 2) + Math.pow(vaey, 2));
      const angle = Math.atan2(vaey, vaex) * (180 / Math.PI);
      return { result: { vae: `(${formatNumber(vaex)}, ${formatNumber(vaey)})` }, steps: [`vₐₑₓ = ${vabx} + ${vbex} = ${formatNumber(vaex)}`, `vₐₑᵧ = ${vaby} + ${vbey} = ${formatNumber(vaey)}`, `|vₐₑ| = ${formatNumber(mag)} m/s`, `θ = ${formatNumber(angle)}°`] };
    }
  }
];
