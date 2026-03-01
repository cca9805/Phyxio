import { formatNumber } from '../../../../utils/formatNumber';

// Constantes físicas
const h = 6.62607015e-34; // Constante de Planck (J⋅s)
const c = 299792458; // Velocidad de la luz (m/s)

export const definitions = [
  // Grupo 1: Energía de fotones
  {
    id: 'optica-energia-foton-longitud',
    groupId: 'optica_energia_foton',
    title: 'Energía de Fotón (desde λ)',
    isFundamental: true,
    formula: 'E = hc/λ',
    variables: [
      { symbol: 'lambda', label: 'Longitud de onda (λ)', unit: 'm' }
    ],
    output: { symbol: 'E', label: 'Energía (E)', unit: 'J' },
    constants: [
      { symbol: 'h', label: 'Constante de Planck', value: h, unit: 'J⋅s' },
      { symbol: 'c', label: 'Velocidad de la luz', value: c, unit: 'm/s' }
    ],
    donde: "E es la energía del fotón, h es la constante de Planck, c es la velocidad de la luz y λ es la longitud de onda",
    resolve: ({ lambda }) => {
      const longitud = parseFloat(lambda);
      if (longitud <= 0) return { error: 'La longitud de onda debe ser positiva.' };
      
      const E = (h * c) / longitud;
      return { 
        result: { E: formatNumber(E) }, 
        steps: [`E = (${h} × ${c}) / ${longitud} = ${formatNumber(E)} J`] 
      };
    }
  },
  {
    id: 'optica-frecuencia-energia',
    groupId: 'optica_energia_foton',
    title: 'Frecuencia (desde E)',
    isFundamental: false,
    formula: 'f = E/h',
    variables: [
      { symbol: 'E', label: 'Energía (E)', unit: 'J' }
    ],
    output: { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' },
    constants: [
      { symbol: 'h', label: 'Constante de Planck', value: h, unit: 'J⋅s' }
    ],
    donde: "f es la frecuencia, E es la energía del fotón y h es la constante de Planck",
    resolve: ({ E }) => {
      const energia = parseFloat(E);
      if (energia <= 0) return { error: 'La energía debe ser positiva.' };
      
      const f = energia / h;
      return { 
        result: { f: formatNumber(f) }, 
        steps: [`f = ${energia} / ${h} = ${formatNumber(f)} Hz`] 
      };
    }
  },
  {
    id: 'optica-longitud-energia',
    groupId: 'optica_energia_foton',
    title: 'Longitud de onda (desde E)',
    isFundamental: false,
    formula: 'λ = hc/E',
    variables: [
      { symbol: 'E', label: 'Energía (E)', unit: 'J' }
    ],
    output: { symbol: 'lambda', label: 'Longitud de onda (λ)', unit: 'm' },
    constants: [
      { symbol: 'h', label: 'Constante de Planck', value: h, unit: 'J⋅s' },
      { symbol: 'c', label: 'Velocidad de la luz', value: c, unit: 'm/s' }
    ],
    donde: "λ es la longitud de onda, E es la energía del fotón, h es la constante de Planck y c es la velocidad de la luz",
    resolve: ({ E }) => {
      const energia = parseFloat(E);
      if (energia <= 0) return { error: 'La energía debe ser positiva.' };
      
      const lambda = (h * c) / energia;
      return { 
        result: { lambda: formatNumber(lambda) }, 
        steps: [`λ = (${h} × ${c}) / ${energia} = ${formatNumber(lambda)} m`] 
      };
    }
  },

  // Grupo 2: Ley de Snell
  {
    id: 'optica-angulo-refraccion',
    groupId: 'optica_ley_snell',
    title: 'Ángulo de Refracción',
    isFundamental: true,
    formula: 'θ₂ = arcsin(n₁⋅sin(θ₁)/n₂)',
    variables: [
      { symbol: 'n1', label: 'Índice medio 1 (n₁)', unit: '' },
      { symbol: 'theta1', label: 'Ángulo incidencia (θ₁)', unit: 'grados' },
      { symbol: 'n2', label: 'Índice medio 2 (n₂)', unit: '' }
    ],
    output: { symbol: 'theta2', label: 'Ángulo refracción (θ₂)', unit: 'grados' },
    donde: "θ₂ es el ángulo de refracción, n₁ es el índice de refracción del primer medio, θ₁ es el ángulo de incidencia y n₂ es el índice de refracción del segundo medio",
    resolve: ({ n1, theta1, n2 }) => {
      const indice1 = parseFloat(n1);
      const angulo1 = parseFloat(theta1);
      const indice2 = parseFloat(n2);
      
      if (indice1 <= 0 || indice2 <= 0) return { error: 'Los índices de refracción deben ser positivos.' };
      if (angulo1 < 0 || angulo1 > 90) return { error: 'El ángulo debe estar entre 0° y 90°.' };
      
      const theta1_rad = angulo1 * (Math.PI / 180);
      const sin_theta2 = (indice1 * Math.sin(theta1_rad)) / indice2;
      
      if (sin_theta2 > 1) return { error: 'Reflexión total interna. No hay refracción.' };
      
      const theta2_rad = Math.asin(sin_theta2);
      const theta2 = theta2_rad * (180 / Math.PI);
      
      return { 
        result: { theta2: formatNumber(theta2) }, 
        steps: [
          `sin(θ₂) = (${indice1} × sin(${angulo1}°)) / ${indice2} = ${formatNumber(sin_theta2)}`,
          `θ₂ = arcsin(${formatNumber(sin_theta2)}) = ${formatNumber(theta2)}°`
        ] 
      };
    }
  },
  {
    id: 'optica-indice-refraccion',
    groupId: 'optica_ley_snell',
    title: 'Índice de Refracción n₂',
    isFundamental: false,
    formula: 'n₂ = n₁⋅sin(θ₁)/sin(θ₂)',
    variables: [
      { symbol: 'n1', label: 'Índice medio 1 (n₁)', unit: '' },
      { symbol: 'theta1', label: 'Ángulo incidencia (θ₁)', unit: 'grados' },
      { symbol: 'theta2', label: 'Ángulo refracción (θ₂)', unit: 'grados' }
    ],
    output: { symbol: 'n2', label: 'Índice medio 2 (n₂)', unit: '' },
    donde: "n₂ es el índice de refracción del segundo medio, n₁ es el índice del primer medio, θ₁ es el ángulo de incidencia y θ₂ es el ángulo de refracción",
    resolve: ({ n1, theta1, theta2 }) => {
      const indice1 = parseFloat(n1);
      const angulo1 = parseFloat(theta1);
      const angulo2 = parseFloat(theta2);
      
      if (indice1 <= 0) return { error: 'El índice de refracción debe ser positivo.' };
      if (angulo1 < 0 || angulo1 > 90) return { error: 'El ángulo de incidencia debe estar entre 0° y 90°.' };
      if (angulo2 < 0 || angulo2 > 90) return { error: 'El ángulo de refracción debe estar entre 0° y 90°.' };
      
      const theta1_rad = angulo1 * (Math.PI / 180);
      const theta2_rad = angulo2 * (Math.PI / 180);
      
      const sin_theta2 = Math.sin(theta2_rad);
      if (sin_theta2 === 0) return { error: 'El ángulo de refracción no puede ser 0°.' };
      
      const n2 = (indice1 * Math.sin(theta1_rad)) / sin_theta2;
      
      return { 
        result: { n2: formatNumber(n2) }, 
        steps: [
          `n₂ = (${indice1} × sin(${angulo1}°)) / sin(${angulo2}°)`,
          `n₂ = (${indice1} × ${formatNumber(Math.sin(theta1_rad))}) / ${formatNumber(sin_theta2)} = ${formatNumber(n2)}`
        ] 
      };
    }
  },

  // Grupo 3: Ángulo crítico
  {
    id: 'optica-angulo-critico-calc',
    groupId: 'optica_angulo_critico',
    title: 'Ángulo Crítico',
    isFundamental: true,
    formula: 'θc = arcsin(n₂/n₁)',
    variables: [
      { symbol: 'n1', label: 'Índice medio denso (n₁)', unit: '' },
      { symbol: 'n2', label: 'Índice medio menos denso (n₂)', unit: '' }
    ],
    output: { symbol: 'theta_c', label: 'Ángulo crítico (θc)', unit: 'grados' },
    donde: "θc es el ángulo crítico para reflexión total interna, n₁ es el índice del medio más denso y n₂ es el índice del medio menos denso",
    resolve: ({ n1, n2 }) => {
      const indice1 = parseFloat(n1);
      const indice2 = parseFloat(n2);
      
      if (indice1 <= 0 || indice2 <= 0) return { error: 'Los índices de refracción deben ser positivos.' };
      if (indice2 >= indice1) return { error: 'Para reflexión total, n₁ > n₂.' };
      
      const ratio = indice2 / indice1;
      const theta_c_rad = Math.asin(ratio);
      const theta_c = theta_c_rad * (180 / Math.PI);
      
      return { 
        result: { theta_c: formatNumber(theta_c) }, 
        steps: [
          `θc = arcsin(${indice2} / ${indice1}) = arcsin(${formatNumber(ratio)})`,
          `θc = ${formatNumber(theta_c)}°`
        ] 
      };
    }
  },

  // Grupo 4: Velocidad en medios
  {
    id: 'optica-velocidad-medio-calc',
    groupId: 'optica_velocidad_medio',
    title: 'Velocidad en Medio',
    isFundamental: true,
    formula: 'v = c/n',
    variables: [
      { symbol: 'n', label: 'Índice de refracción (n)', unit: '' }
    ],
    output: { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' },
    constants: [
      { symbol: 'c', label: 'Velocidad de la luz', value: c, unit: 'm/s' }
    ],
    donde: "v es la velocidad de la luz en el medio, c es la velocidad de la luz en el vacío y n es el índice de refracción del medio",
    resolve: ({ n }) => {
      const indice = parseFloat(n);
      if (indice <= 0) return { error: 'El índice de refracción debe ser positivo.' };
      
      const v = c / indice;
      return { 
        result: { v: formatNumber(v) }, 
        steps: [`v = ${c} / ${indice} = ${formatNumber(v)} m/s`] 
      };
    }
  },
  {
    id: 'optica-indice-velocidad',
    groupId: 'optica_velocidad_medio',
    title: 'Índice de Refracción (desde v)',
    isFundamental: false,
    formula: 'n = c/v',
    variables: [
      { symbol: 'v', label: 'Velocidad en medio (v)', unit: 'm/s' }
    ],
    output: { symbol: 'n', label: 'Índice de refracción (n)', unit: '' },
    constants: [
      { symbol: 'c', label: 'Velocidad de la luz', value: c, unit: 'm/s' }
    ],
    donde: "n es el índice de refracción del medio, c es la velocidad de la luz en el vacío y v es la velocidad de la luz en el medio",
    resolve: ({ v }) => {
      const velocidad = parseFloat(v);
      if (velocidad <= 0) return { error: 'La velocidad debe ser positiva.' };
      if (velocidad > c) return { error: 'La velocidad en un medio no puede superar c.' };
      
      const n = c / velocidad;
      return { 
        result: { n: formatNumber(n) }, 
        steps: [`n = ${c} / ${velocidad} = ${formatNumber(n)}`] 
      };
    }
  },

  // Grupo 5: Interferencia doble rendija
  {
    id: 'optica-doble-rendija-angulo',
    groupId: 'optica_doble_rendija',
    title: 'Ángulo de Máximo (Doble Rendija)',
    isFundamental: true,
    formula: 'θ = arcsin(mλ/d)',
    variables: [
      { symbol: 'm', label: 'Orden del máximo (m)', unit: '' },
      { symbol: 'lambda', label: 'Longitud de onda (λ)', unit: 'm' },
      { symbol: 'd', label: 'Separación rendijas (d)', unit: 'm' }
    ],
    output: { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados' },
    donde: "θ es el ángulo del máximo de interferencia, m es el orden del máximo, λ es la longitud de onda y d es la separación entre las rendijas",
    resolve: ({ m, lambda, d }) => {
      const orden = parseInt(m);
      const longitud = parseFloat(lambda);
      const separacion = parseFloat(d);
      
      if (longitud <= 0) return { error: 'La longitud de onda debe ser positiva.' };
      if (separacion <= 0) return { error: 'La separación debe ser positiva.' };
      
      const sin_theta = (orden * longitud) / separacion;
      if (sin_theta > 1) return { error: 'No existe solución física para estos valores.' };
      
      const theta_rad = Math.asin(sin_theta);
      const theta = theta_rad * (180 / Math.PI);
      
      return { 
        result: { theta: formatNumber(theta) }, 
        steps: [
          `sin(θ) = (${orden} × ${longitud}) / ${separacion} = ${formatNumber(sin_theta)}`,
          `θ = arcsin(${formatNumber(sin_theta)}) = ${formatNumber(theta)}°`
        ] 
      };
    }
  },
  {
    id: 'optica-doble-rendija-separacion',
    groupId: 'optica_doble_rendija',
    title: 'Separación de Rendijas',
    isFundamental: false,
    formula: 'd = mλ/sin(θ)',
    variables: [
      { symbol: 'm', label: 'Orden del máximo (m)', unit: '' },
      { symbol: 'lambda', label: 'Longitud de onda (λ)', unit: 'm' },
      { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados' }
    ],
    output: { symbol: 'd', label: 'Separación rendijas (d)', unit: 'm' },
    donde: "d es la separación entre las rendijas, m es el orden del máximo, λ es la longitud de onda y θ es el ángulo del máximo",
    resolve: ({ m, lambda, theta }) => {
      const orden = parseInt(m);
      const longitud = parseFloat(lambda);
      const angulo = parseFloat(theta);
      
      if (longitud <= 0) return { error: 'La longitud de onda debe ser positiva.' };
      if (angulo <= 0 || angulo >= 90) return { error: 'El ángulo debe estar entre 0° y 90°.' };
      
      const theta_rad = angulo * (Math.PI / 180);
      const sin_theta = Math.sin(theta_rad);
      
      const d = (orden * longitud) / sin_theta;
      
      return { 
        result: { d: formatNumber(d) }, 
        steps: [
          `d = (${orden} × ${longitud}) / sin(${angulo}°)`,
          `d = ${formatNumber(orden * longitud)} / ${formatNumber(sin_theta)} = ${formatNumber(d)} m`
        ] 
      };
    }
  },

  // Grupo 6: Ley de Malus
  {
    id: 'optica-malus-intensidad',
    groupId: 'optica_ley_malus',
    title: 'Intensidad Transmitida (Malus)',
    isFundamental: true,
    formula: 'I = I₀⋅cos²(θ)',
    variables: [
      { symbol: 'I0', label: 'Intensidad inicial (I₀)', unit: 'W/m²' },
      { symbol: 'theta', label: 'Ángulo polarización (θ)', unit: 'grados' }
    ],
    output: { symbol: 'I', label: 'Intensidad transmitida (I)', unit: 'W/m²' },
    donde: "I es la intensidad transmitida, I₀ es la intensidad inicial y θ es el ángulo entre los ejes de polarización",
    resolve: ({ I0, theta }) => {
      const intensidad0 = parseFloat(I0);
      const angulo = parseFloat(theta);
      
      if (intensidad0 < 0) return { error: 'La intensidad inicial debe ser positiva.' };
      
      const theta_rad = angulo * (Math.PI / 180);
      const I = intensidad0 * Math.pow(Math.cos(theta_rad), 2);
      
      return { 
        result: { I: formatNumber(I) }, 
        steps: [
          `I = ${intensidad0} × cos²(${angulo}°)`,
          `I = ${intensidad0} × ${formatNumber(Math.pow(Math.cos(theta_rad), 2))} = ${formatNumber(I)} W/m²`
        ] 
      };
    }
  },
  {
    id: 'optica-malus-angulo',
    groupId: 'optica_ley_malus',
    title: 'Ángulo de Polarización',
    isFundamental: false,
    formula: 'θ = arccos(√(I/I₀))',
    variables: [
      { symbol: 'I', label: 'Intensidad transmitida (I)', unit: 'W/m²' },
      { symbol: 'I0', label: 'Intensidad inicial (I₀)', unit: 'W/m²' }
    ],
    output: { symbol: 'theta', label: 'Ángulo polarización (θ)', unit: 'grados' },
    donde: "θ es el ángulo entre los ejes de polarización, I es la intensidad transmitida e I₀ es la intensidad inicial",
    resolve: ({ I, I0 }) => {
      const intensidad = parseFloat(I);
      const intensidad0 = parseFloat(I0);
      
      if (intensidad < 0 || intensidad0 < 0) return { error: 'Las intensidades deben ser positivas.' };
      if (intensidad > intensidad0) return { error: 'La intensidad transmitida no puede ser mayor que la inicial.' };
      
      const ratio = intensidad / intensidad0;
      const theta_rad = Math.acos(Math.sqrt(ratio));
      const theta = theta_rad * (180 / Math.PI);
      
      return { 
        result: { theta: formatNumber(theta) }, 
        steps: [
          `θ = arccos(√(${intensidad} / ${intensidad0}))`,
          `θ = arccos(√${formatNumber(ratio)}) = arccos(${formatNumber(Math.sqrt(ratio))})`,
          `θ = ${formatNumber(theta)}°`
        ] 
      };
    }
  },

  // Grupo 7: Difracción por rendija simple
  {
    id: 'optica-rendija-simple-angulo',
    groupId: 'optica_rendija_simple',
    title: 'Ángulo de Mínimo (Rendija Simple)',
    isFundamental: true,
    formula: 'θ = arcsin(mλ/a)',
    variables: [
      { symbol: 'm', label: 'Orden del mínimo (m)', unit: '' },
      { symbol: 'lambda', label: 'Longitud de onda (λ)', unit: 'm' },
      { symbol: 'a', label: 'Ancho de rendija (a)', unit: 'm' }
    ],
    output: { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados' },
    donde: "θ es el ángulo del mínimo de difracción, m es el orden del mínimo, λ es la longitud de onda y a es el ancho de la rendija",
    resolve: ({ m, lambda, a }) => {
      const orden = parseInt(m);
      const longitud = parseFloat(lambda);
      const ancho = parseFloat(a);
      
      if (orden === 0) return { error: 'El orden m debe ser ±1, ±2, ±3, ... (no puede ser 0).' };
      if (longitud <= 0) return { error: 'La longitud de onda debe ser positiva.' };
      if (ancho <= 0) return { error: 'El ancho de la rendija debe ser positivo.' };
      
      const sin_theta = (orden * longitud) / ancho;
      if (Math.abs(sin_theta) > 1) return { error: 'No existe solución física para estos valores.' };
      
      const theta_rad = Math.asin(sin_theta);
      const theta = theta_rad * (180 / Math.PI);
      
      return { 
        result: { theta: formatNumber(theta) }, 
        steps: [
          `sin(θ) = (${orden} × ${longitud}) / ${ancho} = ${formatNumber(sin_theta)}`,
          `θ = arcsin(${formatNumber(sin_theta)}) = ${formatNumber(theta)}°`
        ] 
      };
    }
  },

  // Grupo 8: Red de difracción
  {
    id: 'optica-red-difraccion-angulo',
    groupId: 'optica_red_difraccion',
    title: 'Ángulo de Máximo (Red de Difracción)',
    isFundamental: true,
    formula: 'θ = arcsin(mλ/d)',
    variables: [
      { symbol: 'm', label: 'Orden del máximo (m)', unit: '' },
      { symbol: 'lambda', label: 'Longitud de onda (λ)', unit: 'm' },
      { symbol: 'd', label: 'Separación entre rendijas (d)', unit: 'm' }
    ],
    output: { symbol: 'theta', label: 'Ángulo (θ)', unit: 'grados' },
    donde: "θ es el ángulo del máximo de difracción, m es el orden del máximo, λ es la longitud de onda y d es la separación entre rendijas de la red",
    resolve: ({ m, lambda, d }) => {
      const orden = parseInt(m);
      const longitud = parseFloat(lambda);
      const separacion = parseFloat(d);
      
      if (longitud <= 0) return { error: 'La longitud de onda debe ser positiva.' };
      if (separacion <= 0) return { error: 'La separación debe ser positiva.' };
      
      const sin_theta = (orden * longitud) / separacion;
      if (Math.abs(sin_theta) > 1) return { error: 'No existe solución física para estos valores.' };
      
      const theta_rad = Math.asin(sin_theta);
      const theta = theta_rad * (180 / Math.PI);
      
      return { 
        result: { theta: formatNumber(theta) }, 
        steps: [
          `sin(θ) = (${orden} × ${longitud}) / ${separacion} = ${formatNumber(sin_theta)}`,
          `θ = arcsin(${formatNumber(sin_theta)}) = ${formatNumber(theta)}°`
        ] 
      };
    }
  },

  // Grupo 9: Ángulo de Brewster
  {
    id: 'optica-brewster-angulo',
    groupId: 'optica_angulo_brewster',
    title: 'Ángulo de Brewster',
    isFundamental: true,
    formula: 'θB = arctan(n₂/n₁)',
    variables: [
      { symbol: 'n1', label: 'Índice medio 1 (n₁)', unit: '' },
      { symbol: 'n2', label: 'Índice medio 2 (n₂)', unit: '' }
    ],
    output: { symbol: 'theta_B', label: 'Ángulo Brewster (θB)', unit: 'grados' },
    donde: "θB es el ángulo de Brewster (polarización completa por reflexión), n₁ es el índice del primer medio y n₂ es el índice del segundo medio",
    resolve: ({ n1, n2 }) => {
      const indice1 = parseFloat(n1);
      const indice2 = parseFloat(n2);
      
      if (indice1 <= 0 || indice2 <= 0) return { error: 'Los índices de refracción deben ser positivos.' };
      
      const theta_B_rad = Math.atan(indice2 / indice1);
      const theta_B = theta_B_rad * (180 / Math.PI);
      
      return { 
        result: { theta_B: formatNumber(theta_B) }, 
        steps: [
          `θB = arctan(${indice2} / ${indice1}) = arctan(${formatNumber(indice2/indice1)})`,
          `θB = ${formatNumber(theta_B)}°`
        ] 
      };
    }
  }
];