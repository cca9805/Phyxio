
import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  // --- Grupo 1: Componentes de un Vector ---
  {
    id: 'vector-componente-x',
    groupId: 'vector-components',
    title: 'Calcular Componente X',
    formula: 'Vx = |V| * cos(θ)',
    variables: [
      { symbol: 'V', label: 'Magnitud del Vector (|V|)', unit: 'unidades' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados' }
    ],
    output: { symbol: 'Vx', label: 'Componente X (Vx)', unit: 'unidades' },
    resolve: ({ V, theta }) => {
      const theta_rad = parseFloat(theta) * (Math.PI / 180);
      const Vx = parseFloat(V) * Math.cos(theta_rad);
      return { result: { Vx: formatNumber(Vx) }, steps: [`Vx = ${V} * cos(${theta}°) = ${formatNumber(Vx)}`] };
    }
  },
  {
    id: 'vector-componente-y',
    groupId: 'vector-components',
    title: 'Calcular Componente Y',
    formula: 'Vy = |V| * sin(θ)',
    variables: [
      { symbol: 'V', label: 'Magnitud del Vector (|V|)', unit: 'unidades' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados' }
    ],
    output: { symbol: 'Vy', label: 'Componente Y (Vy)', unit: 'unidades' },
    resolve: ({ V, theta }) => {
      const theta_rad = parseFloat(theta) * (Math.PI / 180);
      const Vy = parseFloat(V) * Math.sin(theta_rad);
      return { result: { Vy: formatNumber(Vy) }, steps: [`Vy = ${V} * sin(${theta}°) = ${formatNumber(Vy)}`] };
    }
  },

  // --- Grupo 2: Magnitud y Dirección a partir de Componentes ---
  {
    id: 'vector-magnitud',
    groupId: 'vector-magnitude-direction',
    title: 'Calcular Magnitud del Vector',
    formula: '|V| = √(Vx² + Vy²)',
    variables: [
      { symbol: 'Vx', label: 'Componente X (Vx)', unit: 'unidades' },
      { symbol: 'Vy', label: 'Componente Y (Vy)', unit: 'unidades' }
    ],
    output: { symbol: 'V', label: 'Magnitud (|V|)', unit: 'unidades' },
    resolve: ({ Vx, Vy }) => {
      const V = Math.sqrt(parseFloat(Vx)**2 + parseFloat(Vy)**2);
      return { result: { V: formatNumber(V) }, steps: [`|V| = √(${Vx}² + ${Vy}²) = ${formatNumber(V)}`] };
    }
  },
  {
    id: 'vector-direccion',
    groupId: 'vector-magnitude-direction',
    title: 'Calcular Dirección (Ángulo)',
    formula: 'θ = atan2(Vy, Vx)',
    variables: [
      { symbol: 'Vx', label: 'Componente X (Vx)', unit: 'unidades' },
      { symbol: 'Vy', label: 'Componente Y (Vy)', unit: 'unidades' }
    ],
    output: { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados' },
    resolve: ({ Vx, Vy }) => {
      const theta_rad = Math.atan2(parseFloat(Vy), parseFloat(Vx));
      const theta = theta_rad * (180 / Math.PI);
      return { result: { theta: formatNumber(theta) }, steps: [`θ = atan2(${Vy}, ${Vx}) = ${formatNumber(theta)}°`] };
    }
  },

  // --- Grupo 3: Suma y Resta de Vectores ---
  {
    id: 'vector-suma-componentes',
    groupId: 'vector-sum',
    title: 'Suma de Vectores (Componentes)',
    formula: 'Rx = Ax + Bx, Ry = Ay + By',
    variables: [
      { symbol: 'Ax', label: 'Componente X de A (Ax)', unit: 'unidades' },
      { symbol: 'Ay', label: 'Componente Y de A (Ay)', unit: 'unidades' },
      { symbol: 'Bx', label: 'Componente X de B (Bx)', unit: 'unidades' },
      { symbol: 'By', label: 'Componente Y de B (By)', unit: 'unidades' }
    ],
    output: { symbol: 'R', label: 'Vector Resultante (Rx, Ry)', unit: 'unidades' },
    resolve: ({ Ax, Ay, Bx, By }) => {
      const Rx = parseFloat(Ax) + parseFloat(Bx);
      const Ry = parseFloat(Ay) + parseFloat(By);
      return { result: { R: `(${formatNumber(Rx)}, ${formatNumber(Ry)})` }, steps: [
        `Rx = ${Ax} + ${Bx} = ${formatNumber(Rx)}`,
        `Ry = ${Ay} + ${By} = ${formatNumber(Ry)}`,
        `Resultante = (${formatNumber(Rx)}, ${formatNumber(Ry)})`
      ] };
    }
  },

  // --- Grupo 4: Producto Escalar (Punto) ---
  {
    id: 'vector-producto-punto-componentes',
    groupId: 'vector-dot-product',
    title: 'Producto Escalar (por Componentes)',
    formula: 'A · B = Ax*Bx + Ay*By',
    variables: [
      { symbol: 'Ax', label: 'Componente X de A (Ax)', unit: 'unidades' },
      { symbol: 'Ay', label: 'Componente Y de A (Ay)', unit: 'unidades' },
      { symbol: 'Bx', label: 'Componente X de B (Bx)', unit: 'unidades' },
      { symbol: 'By', label: 'Componente Y de B (By)', unit: 'unidades' }
    ],
    output: { symbol: 'dot', label: 'Producto Escalar (A · B)', unit: 'unidades²' },
    resolve: ({ Ax, Ay, Bx, By }) => {
      const dot = parseFloat(Ax) * parseFloat(Bx) + parseFloat(Ay) * parseFloat(By);
      return { result: { dot: formatNumber(dot) }, steps: [`A · B = (${Ax} * ${Bx}) + (${Ay} * ${By}) = ${formatNumber(dot)}`] };
    }
  },
  {
    id: 'vector-producto-punto-magnitud-angulo',
    groupId: 'vector-dot-product',
    title: 'Producto Escalar (con Magnitud y Ángulo)',
    formula: 'A · B = |A| * |B| * cos(θ)',
    variables: [
      { symbol: 'A', label: 'Magnitud de A (|A|)', unit: 'unidades' },
      { symbol: 'B', label: 'Magnitud de B (|B|)', unit: 'unidades' },
      { symbol: 'theta', label: 'Ángulo entre A y B (θ)', unit: 'grados' }
    ],
    output: { symbol: 'dot', label: 'Producto Escalar (A · B)', unit: 'unidades²' },
    resolve: ({ A, B, theta }) => {
      const theta_rad = parseFloat(theta) * (Math.PI / 180);
      const dot = parseFloat(A) * parseFloat(B) * Math.cos(theta_rad);
      return { result: { dot: formatNumber(dot) }, steps: [`A · B = ${A} * ${B} * cos(${theta}°) = ${formatNumber(dot)}`] };
    }
  }
];
