
import { formatNumber } from '../../../../utils/formatNumber';

const degToRad = deg => deg * (Math.PI / 180);
const radToDeg = rad => rad * (180 / Math.PI);

export const definitions = [
  // --- Grupo 1: Momento (Fuerza, Distancia) ---
  {
    id: 'momento-fuerza-distancia',
    groupId: 'momento-simple',
    title: 'Calcular Momento (M = F*d)',
    formula: 'M = F * d',
    variables: [
      { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
      { symbol: 'd', label: 'Distancia (d)', unit: 'm' },
    ],
    output: { symbol: 'M', label: 'Momento (M)', unit: 'N·m' },
    resolve: ({ F, d }) => {
      const M = F * d;
      return { result: { M: formatNumber(M) }, steps: [`M = ${F} * ${d} = ${formatNumber(M)} N·m`] };
    },
  },
  {
    id: 'despeje-fuerza-simple',
    groupId: 'momento-simple',
    title: 'Calcular Fuerza (F = M/d)',
    formula: 'F = M / d',
    variables: [
      { symbol: 'M', label: 'Momento (M)', unit: 'N·m' },
      { symbol: 'd', label: 'Distancia (d)', unit: 'm' },
    ],
    output: { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
    resolve: ({ M, d }) => {
      if (parseFloat(d) === 0) return { error: "La distancia (d) no puede ser cero." };
      const F = M / d;
      return { result: { F: formatNumber(F) }, steps: [`F = ${M} / ${d} = ${formatNumber(F)} N`] };
    },
  },
  {
    id: 'despeje-distancia-simple',
    groupId: 'momento-simple',
    title: 'Calcular Distancia (d = M/F)',
    formula: 'd = M / F',
    variables: [
      { symbol: 'M', label: 'Momento (M)', unit: 'N·m' },
      { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
    ],
    output: { symbol: 'd', label: 'Distancia (d)', unit: 'm' },
    resolve: ({ M, F }) => {
      if (parseFloat(F) === 0) return { error: "La fuerza (F) no puede ser cero." };
      const d = M / F;
      return { result: { d: formatNumber(d) }, steps: [`d = ${M} / ${F} = ${formatNumber(d)} m`] };
    },
  },

  // --- Grupo 2: Momento (Fuerza, Distancia, Ángulo) ---
  {
    id: 'momento-fuerza-distancia-angulo',
    groupId: 'momento-fuerza-angulo',
    title: 'Calcular Momento (M = F*r*sinθ)',
    formula: 'M = F * r * sin(θ)',
    variables: [
      { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
      { symbol: 'r', label: 'Distancia (r)', unit: 'm' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: '°' },
    ],
    output: { symbol: 'M', label: 'Momento (M)', unit: 'N·m' },
    resolve: ({ F, r, theta }) => {
      const M = F * r * Math.sin(degToRad(theta));
      return { result: { M: formatNumber(M) }, steps: [`M = ${F} * ${r} * sin(${theta}°) = ${formatNumber(M)} N·m`] };
    },
  },
  {
    id: 'despeje-fuerza-momento',
    groupId: 'momento-fuerza-angulo',
    title: 'Calcular Fuerza (F = M/(r*sinθ))',
    formula: 'F = M / (r * sin(θ))',
    variables: [
      { symbol: 'M', label: 'Momento (M)', unit: 'N·m' },
      { symbol: 'r', label: 'Distancia (r)', unit: 'm' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: '°' },
    ],
    output: { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
    resolve: ({ M, r, theta }) => {
      const divisor = r * Math.sin(degToRad(theta));
      if (divisor === 0) return { error: "El divisor (r * sin(θ)) no puede ser cero." };
      const F = M / divisor;
      return { result: { F: formatNumber(F) }, steps: [`F = ${M} / (${r} * sin(${theta}°)) = ${formatNumber(F)} N`] };
    },
  },
  {
    id: 'despeje-distancia-momento',
    groupId: 'momento-fuerza-angulo',
    title: 'Calcular Distancia (r = M/(F*sinθ))',
    formula: 'r = M / (F * sin(θ))',
    variables: [
      { symbol: 'M', label: 'Momento (M)', unit: 'N·m' },
      { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: '°' },
    ],
    output: { symbol: 'r', label: 'Distancia (r)', unit: 'm' },
    resolve: ({ M, F, theta }) => {
      const divisor = F * Math.sin(degToRad(theta));
      if (divisor === 0) return { error: "El divisor (F * sin(θ)) no puede ser cero." };
      const r = M / divisor;
      return { result: { r: formatNumber(r) }, steps: [`r = ${M} / (${F} * sin(${theta}°)) = ${formatNumber(r)} m`] };
    },
  },
  {
    id: 'despeje-angulo-momento',
    groupId: 'momento-fuerza-angulo',
    title: 'Calcular Ángulo (θ = asin(M/(F*r)))',
    formula: 'θ = asin(M / (F * r))',
    variables: [
      { symbol: 'M', label: 'Momento (M)', unit: 'N·m' },
      { symbol: 'F', label: 'Fuerza (F)', unit: 'N' },
      { symbol: 'r', label: 'Distancia (r)', unit: 'm' },
    ],
    output: { symbol: 'theta', label: 'Ángulo (θ)', unit: '°' },
    resolve: ({ M, F, r }) => {
      const divisor = F * r;
      if (divisor === 0) return { error: "El producto F*r no puede ser cero." };
      const ratio = M / divisor;
      if (ratio < -1 || ratio > 1) return { error: "Argumento de asin() fuera de rango [-1, 1]." };
      const thetaRad = Math.asin(ratio);
      const theta = radToDeg(thetaRad);
      return { result: { theta: formatNumber(theta) }, steps: [`θ = asin(${M} / (${F} * ${r})) = ${formatNumber(theta)}°`] };
    },
  },

  // --- Grupo 3: Teorema de Varignon ---
  {
    id: 'momento-componentes-xy',
    groupId: 'momento-varignon',
    title: 'Calcular Momento (M = Fy*x - Fx*y)',
    formula: 'M = Fy*x - Fx*y',
    variables: [
      { symbol: 'Fx', label: 'Fuerza en x (Fx)', unit: 'N' },
      { symbol: 'Fy', label: 'Fuerza en y (Fy)', unit: 'N' },
      { symbol: 'x', label: 'Posición en x', unit: 'm' },
      { symbol: 'y', label: 'Posición en y', unit: 'm' },
    ],
    output: { symbol: 'M', label: 'Momento (M)', unit: 'N·m' },
    resolve: ({ Fx, Fy, x, y }) => {
      const M = Fy * x - Fx * y;
      return { result: { M: formatNumber(M) }, steps: [`M = (${Fy} * ${x}) - (${Fx} * ${y}) = ${formatNumber(M)} N·m`] };
    },
  },
  {
    id: 'despeje-fuerza-y-varignon',
    groupId: 'momento-varignon',
    title: 'Calcular Fuerza Y (Fy = (M+Fx*y)/x)',
    formula: 'Fy = (M + Fx*y) / x',
    variables: [
        { symbol: 'M', label: 'Momento (M)', unit: 'N·m' },
        { symbol: 'Fx', label: 'Fuerza en x (Fx)', unit: 'N' },
        { symbol: 'x', label: 'Posición en x', unit: 'm' },
        { symbol: 'y', label: 'Posición en y', unit: 'm' },
    ],
    output: { symbol: 'Fy', label: 'Fuerza en y (Fy)', unit: 'N' },
    resolve: ({ M, Fx, x, y }) => {
        if (parseFloat(x) === 0) return { error: "La posición en x no puede ser cero." };
        const Fy = (parseFloat(M) + parseFloat(Fx) * parseFloat(y)) / parseFloat(x);
        return { result: { Fy: formatNumber(Fy) }, steps: [`Fy = (${M} + ${Fx} * ${y}) / ${x} = ${formatNumber(Fy)} N`] };
    },
  },
  {
    id: 'despeje-fuerza-x-varignon',
    groupId: 'momento-varignon',
    title: 'Calcular Fuerza X (Fx = (Fy*x-M)/y)',
    formula: 'Fx = (Fy*x - M) / y',
    variables: [
        { symbol: 'M', label: 'Momento (M)', unit: 'N·m' },
        { symbol: 'Fy', label: 'Fuerza en y (Fy)', unit: 'N' },
        { symbol: 'x', label: 'Posición en x', unit: 'm' },
        { symbol: 'y', label: 'Posición en y', unit: 'm' },
    ],
    output: { symbol: 'Fx', label: 'Fuerza en x (Fx)', unit: 'N' },
    resolve: ({ M, Fy, x, y }) => {
        if (parseFloat(y) === 0) return { error: "La posición en y no puede ser cero." };
        const Fx = (parseFloat(Fy) * parseFloat(x) - parseFloat(M)) / parseFloat(y);
        return { result: { Fx: formatNumber(Fx) }, steps: [`Fx = (${Fy} * ${x} - ${M}) / ${y} = ${formatNumber(Fx)} N`] };
    },
  }
];
