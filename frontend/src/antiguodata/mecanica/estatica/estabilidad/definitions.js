
import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  // --- Grupo 1: Momento de una Fuerza (Torque) ---
  {
    id: 'estabilidad-momento',
    groupId: 'estabilidad-momento',
    title: 'Calcular Momento (M = F * d)',
    formula: 'M = F * d',
    variables: [
      { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
      { symbol: 'd', label: 'Distancia (d)', unit: 'm' }
    ],
    output: { symbol: 'M', label: 'Momento (M)', unit: 'N·m' },
    resolve: ({ F, d }) => {
      const M = parseFloat(F) * parseFloat(d);
      return { result: { M: formatNumber(M) }, steps: [`M = ${F} * ${d} = ${formatNumber(M)} N·m`] };
    }
  },
  {
    id: 'estabilidad-fuerza-desde-momento',
    groupId: 'estabilidad-momento',
    title: 'Calcular Fuerza (F = M / d)',
    formula: 'F = M / d',
    variables: [
      { symbol: 'M', label: 'Momento (M)', unit: 'N·m' },
      { symbol: 'd', label: 'Distancia (d)', unit: 'm' }
    ],
    output: { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
    resolve: ({ M, d }) => {
      const dist = parseFloat(d);
      if (dist === 0) return { error: "La distancia no puede ser cero." };
      const F = parseFloat(M) / dist;
      return { result: { F: formatNumber(F) }, steps: [`F = ${M} / ${d} = ${formatNumber(F)} N`] };
    }
  },
  {
    id: 'estabilidad-distancia-desde-momento',
    groupId: 'estabilidad-momento',
    title: 'Calcular Distancia (d = M / F)',
    formula: 'd = M / F',
    variables: [
      { symbol: 'M', label: 'Momento (M)', unit: 'N·m' },
      { symbol: 'F', label: 'Fuerza (F)', unit: 'N' }
    ],
    output: { symbol: 'd', label: 'Distancia (d)', unit: 'm' },
    resolve: ({ M, F }) => {
      const force = parseFloat(F);
      if (force === 0) return { error: "La fuerza no puede ser cero." };
      const d = parseFloat(M) / force;
      return { result: { d: formatNumber(d) }, steps: [`d = ${M} / ${F} = ${formatNumber(d)} m`] };
    }
  },

  // --- Grupo 2: Condición de Vuelco ---
  {
    id: 'estabilidad-vuelco-fuerza',
    groupId: 'estabilidad-vuelco',
    title: 'Calcular Fuerza de Vuelco (P)',
    formula: 'P = (W * b) / h',
    variables: [
      { symbol: 'W', label: 'Peso del objeto (W)', unit: 'N' },
      { symbol: 'b', label: 'Brazo estabilizador (b)', unit: 'm' },
      { symbol: 'h', label: 'Altura de la fuerza (h)', unit: 'm' }
    ],
    output: { symbol: 'P', label: 'Fuerza de vuelco (P)', unit: 'N' },
    resolve: ({ W, b, h }) => {
      const height = parseFloat(h);
      if (height === 0) return { error: "La altura no puede ser cero." };
      const P = (parseFloat(W) * parseFloat(b)) / height;
      return { result: { P: formatNumber(P) }, steps: [`P = (${W} * ${b}) / ${h} = ${formatNumber(P)} N`] };
    }
  },
  {
    id: 'estabilidad-vuelco-peso',
    groupId: 'estabilidad-vuelco',
    title: 'Calcular Peso Estabilizador (W)',
    formula: 'W = (P * h) / b',
    variables: [
      { symbol: 'P', label: 'Fuerza de vuelco (P)', unit: 'N' },
      { symbol: 'h', label: 'Altura de la fuerza (h)', unit: 'm' },
      { symbol: 'b', label: 'Brazo estabilizador (b)', unit: 'm' }
    ],
    output: { symbol: 'W', label: 'Peso necesario (W)', unit: 'N' },
    resolve: ({ P, h, b }) => {
      const base = parseFloat(b);
      if (base === 0) return { error: "El brazo estabilizador no puede ser cero." };
      const W = (parseFloat(P) * parseFloat(h)) / base;
      return { result: { W: formatNumber(W) }, steps: [`W = (${P} * ${h}) / ${b} = ${formatNumber(W)} N`] };
    }
  },
  {
    id: 'estabilidad-vuelco-altura',
    groupId: 'estabilidad-vuelco',
    title: 'Calcular Altura Máxima (h)',
    formula: 'h = (W * b) / P',
    variables: [
        { symbol: 'W', label: 'Peso del objeto (W)', unit: 'N' },
        { symbol: 'b', label: 'Brazo estabilizador (b)', unit: 'm' },
        { symbol: 'P', label: 'Fuerza de vuelco (P)', unit: 'N' }
    ],
    output: { symbol: 'h', label: 'Altura máxima (h)', unit: 'm' },
    resolve: ({ W, b, P }) => {
        const force = parseFloat(P);
        if (force === 0) return { error: "La fuerza no puede ser cero." };
        const h = (parseFloat(W) * parseFloat(b)) / force;
        return { result: { h: formatNumber(h) }, steps: [`h = (${W} * ${b}) / ${P} = ${formatNumber(h)} m`] };
    }
  },
  {
    id: 'estabilidad-vuelco-base',
    groupId: 'estabilidad-vuelco',
    title: 'Calcular Base Mínima (b)',
    formula: 'b = (P * h) / W',
    variables: [
        { symbol: 'P', label: 'Fuerza de vuelco (P)', unit: 'N' },
        { symbol: 'h', label: 'Altura de la fuerza (h)', unit: 'm' },
        { symbol: 'W', label: 'Peso del objeto (W)', unit: 'N' }
    ],
    output: { symbol: 'b', label: 'Base mínima (b)', unit: 'm' },
    resolve: ({ P, h, W }) => {
        const weight = parseFloat(W);
        if (weight === 0) return { error: "El peso no puede ser cero." };
        const b = (parseFloat(P) * parseFloat(h)) / weight;
        return { result: { b: formatNumber(b) }, steps: [`b = (${P} * ${h}) / ${W} = ${formatNumber(b)} m`] };
    }
  }
];
