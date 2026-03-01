import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  // Grupo 1: Ecuación de Velocidad-Distancia
  {
    id: 'mru-velocidad-simple',
    groupId: 'mru-velocidad-distancia',
    title: 'Velocidad (v)',
    isFundamental: true,
    formula: 'v = d / t',
    variables: [
      { symbol: 'd', label: 'Distancia (d)', unit: 'm' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's' }
    ],
    output: { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' },
    resolve: ({ d, t }) => {
      const numD = parseFloat(d);
      const numT = parseFloat(t);
      if (numT === 0) return { error: 'El tiempo no puede ser cero.' };
      const v = numD / numT;
      return { result: { v: formatNumber(v) }, steps: [`v = ${numD} m / ${numT} s = ${formatNumber(v)} m/s`] };
    }
  },
  {
    id: 'mru-distancia',
    groupId: 'mru-velocidad-distancia',
    title: 'Distancia (d)',
    isFundamental: false,
    formula: 'd = v ⋅ t',
    variables: [
      { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's' }
    ],
    output: { symbol: 'd', label: 'Distancia (d)', unit: 'm' },
    resolve: ({ v, t }) => {
      const numV = parseFloat(v);
      const numT = parseFloat(t);
      const d = numV * numT;
      return { result: { d: formatNumber(d) }, steps: [`d = ${numV} m/s * ${numT} s = ${formatNumber(d)} m`] };
    }
  },
  {
    id: 'mru-tiempo-simple',
    groupId: 'mru-velocidad-distancia',
    title: 'Tiempo (t)',
    isFundamental: false,
    formula: 't = d / v',
    variables: [
      { symbol: 'd', label: 'Distancia (d)', unit: 'm' },
      { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' }
    ],
    output: { symbol: 't', label: 'Tiempo (t)', unit: 's' },
    resolve: ({ d, v }) => {
      const numD = parseFloat(d);
      const numV = parseFloat(v);
      if (numV === 0) return { error: 'La velocidad no puede ser cero.' };
      const t = numD / numV;
      return { result: { t: formatNumber(t) }, steps: [`t = ${numD} m / ${numV} m/s = ${formatNumber(t)} s`] };
    }
  },

  // Grupo 2: Ecuación de Posición
  {
    id: 'mru-posicion-final',
    groupId: 'mru-ecuacion-posicion',
    title: 'Posición Final (xf)',
    isFundamental: true,
    formula: 'xf = x₀ + v ⋅ t',
    variables: [
      { symbol: 'x0', label: 'Posición Inicial (x₀)', unit: 'm' },
      { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's' }
    ],
    output: { symbol: 'xf', label: 'Posición Final (xf)', unit: 'm' },
    resolve: ({ x0, v, t }) => {
      const numX0 = parseFloat(x0);
      const numV = parseFloat(v);
      const numT = parseFloat(t);
      const xf = numX0 + numV * numT;
      return { result: { xf: formatNumber(xf) }, steps: [`xf = ${numX0} m + (${numV} m/s * ${numT} s) = ${formatNumber(xf)} m`] };
    }
  },
  {
    id: 'mru-velocidad-posicion',
    groupId: 'mru-ecuacion-posicion',
    title: 'Velocidad (v)',
    isFundamental: false,
    formula: 'v = (xf - x₀) / t',
    variables: [
      { symbol: 'xf', label: 'Posición Final (xf)', unit: 'm' },
      { symbol: 'x0', label: 'Posición Inicial (x₀)', unit: 'm' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's' }
    ],
    output: { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' },
    resolve: ({ xf, x0, t }) => {
      const numXf = parseFloat(xf);
      const numX0 = parseFloat(x0);
      const numT = parseFloat(t);
      if (numT === 0) return { error: 'El tiempo no puede ser cero.' };
      const v = (numXf - numX0) / numT;
      return { result: { v: formatNumber(v) }, steps: [`v = (${numXf} m - ${numX0} m) / ${numT} s = ${formatNumber(v)} m/s`] };
    }
  },
  {
    id: 'mru-tiempo-posicion',
    groupId: 'mru-ecuacion-posicion',
    title: 'Tiempo (t)',
    isFundamental: false,
    formula: 't = (xf - x₀) / v',
    variables: [
      { symbol: 'xf', label: 'Posición Final (xf)', unit: 'm' },
      { symbol: 'x0', label: 'Posición Inicial (x₀)', unit: 'm' },
      { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' }
    ],
    output: { symbol: 't', label: 'Tiempo (t)', unit: 's' },
    resolve: ({ xf, x0, v }) => {
      const numXf = parseFloat(xf);
      const numX0 = parseFloat(x0);
      const numV = parseFloat(v);
      if (numV === 0) return { error: 'La velocidad no puede ser cero.' };
      const t = (numXf - numX0) / numV;
      return { result: { t: formatNumber(t) }, steps: [`t = (${numXf} m - ${numX0} m) / ${numV} m/s = ${formatNumber(t)} s`] };
    }
  },
  {
    id: 'mru-posicion-inicial',
    groupId: 'mru-ecuacion-posicion',
    title: 'Posición Inicial (x₀)',
    isFundamental: false,
    formula: 'x₀ = xf - v ⋅ t',
    variables: [
      { symbol: 'xf', label: 'Posición Final (xf)', unit: 'm' },
      { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' },
      { symbol: 't', label: 'Tiempo (t)', unit: 's' }
    ],
    output: { symbol: 'x0', label: 'Posición Inicial (x₀)', unit: 'm' },
    resolve: ({ xf, v, t }) => {
      const numXf = parseFloat(xf);
      const numV = parseFloat(v);
      const numT = parseFloat(t);
      const x0 = numXf - numV * numT;
      return { result: { x0: formatNumber(x0) }, steps: [`x₀ = ${numXf} m - (${numV} m/s * ${numT} s) = ${formatNumber(x0)} m`] };
    }
  }
];
