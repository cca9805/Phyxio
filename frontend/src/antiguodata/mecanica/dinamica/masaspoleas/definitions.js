
import { formatNumber } from '../../../../utils/formatNumber';

const G = 9.81; // Aceleración gravitatoria estándar en m/s²
const toRadians = (degrees) => degrees * (Math.PI / 180);

export const definitions = [
  // --- Grupo 1: Máquina de Atwood (Sistema Vertical) ---
  {
    id: 'atwood-aceleracion',
    groupId: 'maquina-atwood',
    title: 'Calcular Aceleración (a)',
    formula: 'a = g * (m₁ - m₂) / (m₁ + m₂)',
    variables: [
      { symbol: 'm1', label: 'Masa 1 (m₁)', unit: 'kg' },
      { symbol: 'm2', label: 'Masa 2 (m₂)', unit: 'kg' },
    ],
    output: { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' },
    resolve: ({ m1, m2 }) => {
      const massSum = parseFloat(m1) + parseFloat(m2);
      if (massSum === 0) return { error: "La suma de las masas no puede ser cero." };
      const a = G * (parseFloat(m1) - parseFloat(m2)) / massSum;
      return { result: { a: formatNumber(a) }, steps: [`a = ${G} * (${m1} - ${m2}) / (${m1} + ${m2}) = ${formatNumber(a)} m/s²`] };
    }
  },
  {
    id: 'atwood-tension',
    groupId: 'maquina-atwood',
    title: 'Calcular Tensión (T)',
    formula: 'T = 2 * g * m₁ * m₂ / (m₁ + m₂)',
    variables: [
      { symbol: 'm1', label: 'Masa 1 (m₁)', unit: 'kg' },
      { symbol: 'm2', label: 'Masa 2 (m₂)', unit: 'kg' },
    ],
    output: { symbol: 'T', label: 'Tensión (T)', unit: 'N' },
    resolve: ({ m1, m2 }) => {
      const massSum = parseFloat(m1) + parseFloat(m2);
      if (massSum === 0) return { error: "La suma de las masas no puede ser cero." };
      const T = (2 * G * parseFloat(m1) * parseFloat(m2)) / massSum;
      return { result: { T: formatNumber(T) }, steps: [`T = (2 * ${G} * ${m1} * ${m2}) / (${m1} + ${m2}) = ${formatNumber(T)} N`] };
    }
  },
  {
    id: 'atwood-masa1',
    groupId: 'maquina-atwood',
    title: 'Calcular Masa 1 (m₁)',
    formula: 'm₁ = m₂ * (g + a) / (g - a)',
    variables: [
      { symbol: 'm2', label: 'Masa 2 (m₂)', unit: 'kg' },
      { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' },
    ],
    output: { symbol: 'm1', label: 'Masa 1 (m₁)', unit: 'kg' },
    resolve: ({ m2, a }) => {
      if (G - parseFloat(a) === 0) return { error: "La aceleración no puede ser igual a g."};
      const m1 = parseFloat(m2) * (G + parseFloat(a)) / (G - parseFloat(a));
      return { result: { m1: formatNumber(m1) }, steps: [`m₁ = ${m2} * (${G} + ${a}) / (${G} - ${a}) = ${formatNumber(m1)} kg`] };
    }
  },
  {
    id: 'atwood-masa2',
    groupId: 'maquina-atwood',
    title: 'Calcular Masa 2 (m₂)',
    formula: 'm₂ = m₁ * (g - a) / (g + a)',
    variables: [
      { symbol: 'm1', label: 'Masa 1 (m₁)', unit: 'kg' },
      { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' },
    ],
    output: { symbol: 'm2', label: 'Masa 2 (m₂)', unit: 'kg' },
    resolve: ({ m1, a }) => {
      if (G + parseFloat(a) === 0) return { error: "La aceleración no puede ser igual a -g."};
      const m2 = parseFloat(m1) * (G - parseFloat(a)) / (G + parseFloat(a));
      return { result: { m2: formatNumber(m2) }, steps: [`m₂ = ${m1} * (${G} - ${a}) / (${G} + ${a}) = ${formatNumber(m2)} kg`] };
    }
  },

  // --- Grupo 2: Sistema Mesa Horizontal ---
  {
    id: 'mesa-aceleracion',
    groupId: 'mesa-horizontal',
    title: 'Calcular Aceleración (a)',
    formula: 'a = g * (m₂ - μ*m₁) / (m₁ + m₂)',
    variables: [
      { symbol: 'm1', label: 'Masa en mesa (m₁)', unit: 'kg' },
      { symbol: 'm2', label: 'Masa colgante (m₂)', unit: 'kg' },
      { symbol: 'mu', label: 'Coef. Fricción (μ)', unit: '', isOptional: true, defaultValue: '0' },
    ],
    output: { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' },
    resolve: ({ m1, m2, mu = 0 }) => {
      const massSum = parseFloat(m1) + parseFloat(m2);
      if (massSum === 0) return { error: "La suma de masas no puede ser cero." };
      const numerator = G * (parseFloat(m2) - parseFloat(mu) * parseFloat(m1));
      if (numerator < 0 && mu > 0) return { result: { a: 0 }, steps: ["La fuerza de fricción estática es mayor que la fuerza de tracción. El sistema no se mueve (a = 0 m/s²)." ] };
      const a = numerator / massSum;
      return { result: { a: formatNumber(a) }, steps: [`a = ${G} * (${m2} - ${mu} * ${m1}) / (${m1} + ${m2}) = ${formatNumber(a)} m/s²`] };
    }
  },
    {
    id: 'mesa-masa1',
    groupId: 'mesa-horizontal',
    title: 'Calcular Masa en Mesa (m₁)',
    formula: 'm₁ = (m₂ * (g - a)) / (a + g * μ)',
    variables: [
      { symbol: 'm2', label: 'Masa colgante (m₂)', unit: 'kg' },
      { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' },
      { symbol: 'mu', label: 'Coef. Fricción (μ)', unit: '', isOptional: true, defaultValue: '0' },
    ],
    output: { symbol: 'm1', label: 'Masa en mesa (m₁)', unit: 'kg' },
    resolve: ({ m2, a, mu=0 }) => {
        const denominator = parseFloat(a) + G * parseFloat(mu);
        if (denominator === 0) return {error: "El denominador (a + gμ) no puede ser cero."};
        const m1 = (parseFloat(m2)*(G - parseFloat(a))) / denominator;
        return { result: {m1: formatNumber(m1)}, steps: [`m₁ = (${m2}*(${G}-${a})) / (${a}+${G}*${mu}) = ${formatNumber(m1)} kg`]};
    }
  },
  {
    id: 'mesa-masa2',
    groupId: 'mesa-horizontal',
    title: 'Calcular Masa Colgante (m₂)',
    formula: 'm₂ = (m₁ * (a + g * μ)) / (g - a)',
    variables: [
      { symbol: 'm1', label: 'Masa en mesa (m₁)', unit: 'kg' },
      { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' },
      { symbol: 'mu', label: 'Coef. Fricción (μ)', unit: '', isOptional: true, defaultValue: '0' },
    ],
    output: { symbol: 'm2', label: 'Masa colgante (m₂)', unit: 'kg' },
    resolve: ({ m1, a, mu=0 }) => {
        if (G - parseFloat(a) === 0) return {error: "La aceleración no puede ser igual a g."};
        const m2 = (parseFloat(m1)*(parseFloat(a) + G * parseFloat(mu))) / (G - parseFloat(a));
        return { result: {m2: formatNumber(m2)}, steps: [`m₂ = (${m1}*(${a}+${G}*${mu})) / (${G}-${a}) = ${formatNumber(m2)} kg`]};
    }
  },
  {
    id: 'mesa-inicio-movimiento',
    groupId: 'mesa-horizontal',
    title: 'Masa Mínima para Iniciar Movimiento (m₂)',
    formula: 'm₂ = μₛ * m₁',
    variables: [
      { symbol: 'm1', label: 'Masa en mesa (m₁)', unit: 'kg' },
      { symbol: 'mu_s', label: 'Coef. Fricción Estática (μₛ)', unit: '' },
    ],
    output: { symbol: 'm2', label: 'Masa colgante mínima (m₂)', unit: 'kg' },
    resolve: ({ m1, mu_s }) => {
        const m2 = parseFloat(m1) * parseFloat(mu_s);
        return { result: {m2: formatNumber(m2)}, steps: [`El movimiento inicia cuando P₂ = Froz,s(max)`, `m₂*g = μₛ*m₁*g`, `m₂ = ${mu_s} * ${m1} = ${formatNumber(m2)} kg`]};
    }
  },
  {
    id: 'mesa-mu',
    groupId: 'mesa-horizontal',
    title: 'Calcular Coef. Fricción (μ)',
    formula: 'μ = (m₂*g - a*(m₁+m₂)) / (g*m₁)',
    variables: [
      { symbol: 'm1', label: 'Masa en mesa (m₁)', unit: 'kg' },
      { symbol: 'm2', label: 'Masa colgante (m₂)', unit: 'kg' },
      { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' },
    ],
    output: { symbol: 'mu', label: 'Coef. Fricción (μ)', unit: '' },
    resolve: ({ m1, m2, a }) => {
        if (G * parseFloat(m1) === 0) return {error: "La masa en la mesa (m₁) no puede ser cero."};
        const mu = (parseFloat(m2)*G - parseFloat(a)*(parseFloat(m1)+parseFloat(m2))) / (G*parseFloat(m1));
        return { result: {mu: formatNumber(mu)}, steps: [`μ = (${m2}*${G} - ${a}*(${m1}+${m2})) / (${G}*${m1}) = ${formatNumber(mu)}`]};
    }
  },
  {
    id: 'mesa-tension',
    groupId: 'mesa-horizontal',
    title: 'Calcular Tensión (T)',
    formula: 'T = m₁ * (a + μ * g)',
    variables: [
        { symbol: 'm1', label: 'Masa en mesa (m₁)', unit: 'kg' },
        { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' },
        { symbol: 'mu', label: 'Coef. Fricción (μ)', unit: '', isOptional: true, defaultValue: '0' },
    ],
    output: { symbol: 'T', label: 'Tensión (T)', unit: 'N' },
    resolve: ({m1, a, mu = 0}) => {
        const T = parseFloat(m1) * (parseFloat(a) + parseFloat(mu) * G);
        return { result: { T: formatNumber(T) }, steps: [`T = ${m1} * (${a} + ${mu} * ${G}) = ${formatNumber(T)} N` ] };
    }
  },

  // --- Grupo 3: Sistema en Plano Inclinado ---
  {
    id: 'plano-aceleracion',
    groupId: 'plano-inclinado',
    title: 'Calcular Aceleración (a)',
    formula: 'a = g * (m₂ - m₁*sin(θ) - μ*m₁*cos(θ)) / (m₁ + m₂)',
    variables: [
      { symbol: 'm1', label: 'Masa en plano (m₁)', unit: 'kg' },
      { symbol: 'm2', label: 'Masa colgante (m₂)', unit: 'kg' },
      { symbol: 'theta', label: 'Ángulo plano (θ)', unit: 'grados' },
      { symbol: 'mu', label: 'Coef. Fricción (μ)', unit: '', isOptional: true, defaultValue: '0' },
    ],
    output: { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' },
    resolve: ({ m1, m2, theta, mu = 0 }) => {
      const massSum = parseFloat(m1) + parseFloat(m2);
      if (massSum === 0) return { error: "La suma de masas no puede ser cero." };
      const thetaRad = toRadians(parseFloat(theta));
      const sinTheta = Math.sin(thetaRad);
      const cosTheta = Math.cos(thetaRad);
      const numerator = G * (parseFloat(m2) - parseFloat(m1) * sinTheta - parseFloat(mu) * parseFloat(m1) * cosTheta);
      if (numerator < 0 && mu > 0) return { result: {a: 0}, steps: ["Las fuerzas que se oponen al movimiento son mayores que la fuerza de tracción. El sistema no acelera."] };
      const a = numerator / massSum;
      return { result: { a: formatNumber(a) }, steps: [`a = ${G}*(${m2} - ${m1}*sin(${theta}) - ${mu}*${m1}*cos(${theta})) / (${m1}+${m2}) = ${formatNumber(a)} m/s²`] };
    }
  },
  {
      id: 'plano-masa1',
      groupId: 'plano-inclinado',
      title: 'Calcular Masa en Plano (m₁)',
      formula: 'm₁ = m₂ * (g - a) / (a + g*sin(θ))',
      variables: [
        { symbol: 'm2', label: 'Masa colgante (m₂)', unit: 'kg' },
        { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' },
        { symbol: 'theta', label: 'Ángulo plano (θ)', unit: 'grados' },
      ],
      output: { symbol: 'm1', label: 'Masa en plano (m₁)', unit: 'kg' },
      resolve: ({ m2, a, theta }) => {
          const thetaRad = toRadians(parseFloat(theta));
          const sinTheta = Math.sin(thetaRad);
          const denominator = parseFloat(a) + G * sinTheta;
          if (denominator === 0) return {error: "El denominador (a + g*sin(θ)) no puede ser cero."};
          const m1 = parseFloat(m2) * (G - parseFloat(a)) / denominator;
          return { result: {m1: formatNumber(m1)}, steps: [`m₁ = ${m2} * (${G} - ${a}) / (${a} + ${G}*sin(${theta})) = ${formatNumber(m1)} kg`]};
      }
  },
    {
      id: 'plano-masa2',
      groupId: 'plano-inclinado',
      title: 'Calcular Masa Colgante (m₂)',
      formula: 'm₂ = m₁ * (a + g*(sin(θ) + μ*cos(θ))) / (g - a)',
      variables: [
        { symbol: 'm1', label: 'Masa en plano (m₁)', unit: 'kg' },
        { symbol: 'a', label: 'Aceleración (a)', unit: 'm/s²' },
        { symbol: 'theta', label: 'Ángulo plano (θ)', unit: 'grados' },
        { symbol: 'mu', label: 'Coef. Fricción (μ)', unit: '', isOptional: true, defaultValue: '0' },
      ],
      output: { symbol: 'm2', label: 'Masa colgante (m₂)', unit: 'kg' },
      resolve: ({ m1, a, theta, mu=0 }) => {
          if (G - parseFloat(a) === 0) return {error: "La aceleración no puede ser igual a g."};
          const thetaRad = toRadians(parseFloat(theta));
          const sinTheta = Math.sin(thetaRad);
          const cosTheta = Math.cos(thetaRad);
          const numerator = parseFloat(m1) * (parseFloat(a) + G * (sinTheta + parseFloat(mu) * cosTheta));
          const m2 = numerator / (G - parseFloat(a));
          return { result: {m2: formatNumber(m2)}, steps: [`m₂ = ${m1}*(${a}+${G}*(sin(${theta})+${mu}*cos(${theta}))) / (${G}-${a}) = ${formatNumber(m2)} kg`]};
      }
  },
  {
    id: 'plano-tension',
    groupId: 'plano-inclinado',
    title: 'Calcular Tensión (T)',
    formula: 'T = m₂ * (g - a)',
    variables: [
      { symbol: 'm2', label: 'Masa colgante (m₂)', unit: 'kg' },
      { symbol: 'a', label: 'Aceleración del sistema (a)', unit: 'm/s²' },
    ],
    output: { symbol: 'T', label: 'Tensión (T)', unit: 'N' },
    resolve: ({ m2, a }) => {
      const T = parseFloat(m2) * (G - parseFloat(a));
      return { result: { T: formatNumber(T) }, steps: [`T = ${m2} * (${G} - ${a}) = ${formatNumber(T)} N`] };
    }
  }
];
