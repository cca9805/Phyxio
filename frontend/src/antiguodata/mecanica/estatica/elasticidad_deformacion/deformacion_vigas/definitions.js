import { formatNumber } from '../../../../../utils/formatNumber';

export const definitions = [
  // VIGAS EN VOLADIZO
  {
    id: 'deflexion-viga-voladizo-puntual',
    groupId: 'deflexion-viga-voladizo-puntual',
    title: 'Deflexión de Viga en Voladizo - Carga Puntual (δ = FL³/3EI)',
    isFundamental: true,
    formula: 'δ = (F * L³) / (3 * E * I)',
    variables: [
      { symbol: 'F', label: 'Fuerza en el extremo (N)', unit: 'N' },
      { symbol: 'L', label: 'Longitud de la viga (m)', unit: 'm' },
      { symbol: 'E', label: 'Módulo de Young (Pa)', unit: 'Pa' },
      { symbol: 'I', label: 'Momento de inercia (m⁴)', unit: 'm⁴' }
    ],
    output: { symbol: 'δ', label: 'Deflexión máxima (m)', unit: 'm' },
    resolve: ({ F, L, E, I }) => {
      const denominador = 3 * parseFloat(E) * parseFloat(I);
      if (denominador === 0) return { error: "3*E*I no puede ser cero." };
      const longitud = parseFloat(L);
      const delta = (parseFloat(F) * longitud * longitud * longitud) / denominador;
      return { 
        result: { delta: formatNumber(delta) }, 
        steps: [
          `δ = (F × L³) / (3 × E × I)`,
          `δ = (${F} × ${L}³) / (3 × ${E} × ${I})`,
          `δ = (${F} × ${formatNumber(longitud**3)}) / ${formatNumber(denominador)}`,
          `δ = ${formatNumber(delta)} m = ${formatNumber(delta*1000)} mm`
        ] 
      };
    }
  },

  {
    id: 'deflexion-viga-voladizo-distribuida',
    groupId: 'deflexion-viga-voladizo-distribuida',
    title: 'Deflexión de Viga en Voladizo - Carga Distribuida (δ = wL⁴/8EI)',
    isFundamental: true,
    formula: 'δ = (w * L⁴) / (8 * E * I)',
    variables: [
      { symbol: 'w', label: 'Carga distribuida (N/m)', unit: 'N/m' },
      { symbol: 'L', label: 'Longitud de la viga (m)', unit: 'm' },
      { symbol: 'E', label: 'Módulo de Young (Pa)', unit: 'Pa' },
      { symbol: 'I', label: 'Momento de inercia (m⁴)', unit: 'm⁴' }
    ],
    output: { symbol: 'δ', label: 'Deflexión máxima (m)', unit: 'm' },
    resolve: ({ w, L, E, I }) => {
      const denominador = 8 * parseFloat(E) * parseFloat(I);
      if (denominador === 0) return { error: "8*E*I no puede ser cero." };
      const longitud = parseFloat(L);
      const delta = (parseFloat(w) * Math.pow(longitud, 4)) / denominador;
      return { 
        result: { delta: formatNumber(delta) }, 
        steps: [
          `δ = (w × L⁴) / (8 × E × I)`,
          `δ = (${w} × ${L}⁴) / (8 × ${E} × ${I})`,
          `δ = (${w} × ${formatNumber(Math.pow(longitud, 4))}) / ${formatNumber(denominador)}`,
          `δ = ${formatNumber(delta)} m = ${formatNumber(delta*1000)} mm`
        ] 
      };
    }
  },

  {
    id: 'pendiente-viga-voladizo',
    groupId: 'pendiente-viga-voladizo',
    title: 'Pendiente en Viga en Voladizo (θ = FL²/2EI)',
    isFundamental: false,
    formula: 'θ = (F * L²) / (2 * E * I)',
    variables: [
      { symbol: 'F', label: 'Fuerza en el extremo (N)', unit: 'N' },
      { symbol: 'L', label: 'Longitud de la viga (m)', unit: 'm' },
      { symbol: 'E', label: 'Módulo de Young (Pa)', unit: 'Pa' },
      { symbol: 'I', label: 'Momento de inercia (m⁴)', unit: 'm⁴' }
    ],
    output: { symbol: 'θ', label: 'Pendiente (radianes)', unit: 'rad' },
    resolve: ({ F, L, E, I }) => {
      const denominador = 2 * parseFloat(E) * parseFloat(I);
      if (denominador === 0) return { error: "2*E*I no puede ser cero." };
      const longitud = parseFloat(L);
      const theta = (parseFloat(F) * longitud * longitud) / denominador;
      const thetaGrados = theta * (180 / Math.PI);
      return { 
        result: { theta: formatNumber(theta) }, 
        steps: [
          `θ = (F × L²) / (2 × E × I)`,
          `θ = (${F} × ${L}²) / (2 × ${E} × ${I})`,
          `θ = (${F} × ${formatNumber(longitud**2)}) / ${formatNumber(denominador)}`,
          `θ = ${formatNumber(theta)} rad = ${formatNumber(thetaGrados)}°`
        ] 
      };
    }
  },

  // VIGAS SIMPLEMENTE APOYADAS
  {
    id: 'deflexion-viga-apoyada-central',
    groupId: 'deflexion-viga-apoyada-central',
    title: 'Deflexión de Viga Apoyada - Carga Central (δ = FL³/48EI)',
    isFundamental: true,
    formula: 'δ = (F * L³) / (48 * E * I)',
    variables: [
      { symbol: 'F', label: 'Fuerza en el centro (N)', unit: 'N' },
      { symbol: 'L', label: 'Longitud de la viga (m)', unit: 'm' },
      { symbol: 'E', label: 'Módulo de Young (Pa)', unit: 'Pa' },
      { symbol: 'I', label: 'Momento de inercia (m⁴)', unit: 'm⁴' }
    ],
    output: { symbol: 'δ', label: 'Deflexión máxima (m)', unit: 'm' },
    resolve: ({ F, L, E, I }) => {
      const denominador = 48 * parseFloat(E) * parseFloat(I);
      if (denominador === 0) return { error: "48*E*I no puede ser cero." };
      const longitud = parseFloat(L);
      const delta = (parseFloat(F) * longitud * longitud * longitud) / denominador;
      return { 
        result: { delta: formatNumber(delta) }, 
        steps: [
          `δ = (F × L³) / (48 × E × I)`,
          `δ = (${F} × ${L}³) / (48 × ${E} × ${I})`,
          `δ = (${F} × ${formatNumber(longitud**3)}) / ${formatNumber(denominador)}`,
          `δ = ${formatNumber(delta)} m = ${formatNumber(delta*1000)} mm`
        ] 
      };
    }
  },

  {
    id: 'deflexion-viga-apoyada-distribuida',
    groupId: 'deflexion-viga-apoyada-distribuida',
    title: 'Deflexión de Viga Apoyada - Carga Distribuida (δ = 5wL⁴/384EI)',
    isFundamental: true,
    formula: 'δ = (5 * w * L⁴) / (384 * E * I)',
    variables: [
      { symbol: 'w', label: 'Carga distribuida (N/m)', unit: 'N/m' },
      { symbol: 'L', label: 'Longitud de la viga (m)', unit: 'm' },
      { symbol: 'E', label: 'Módulo de Young (Pa)', unit: 'Pa' },
      { symbol: 'I', label: 'Momento de inercia (m⁴)', unit: 'm⁴' }
    ],
    output: { symbol: 'δ', label: 'Deflexión máxima (m)', unit: 'm' },
    resolve: ({ w, L, E, I }) => {
      const denominador = 384 * parseFloat(E) * parseFloat(I);
      if (denominador === 0) return { error: "384*E*I no puede ser cero." };
      const longitud = parseFloat(L);
      const delta = (5 * parseFloat(w) * Math.pow(longitud, 4)) / denominador;
      return { 
        result: { delta: formatNumber(delta) }, 
        steps: [
          `δ = (5 × w × L⁴) / (384 × E × I)`,
          `δ = (5 × ${w} × ${L}⁴) / (384 × ${E} × ${I})`,
          `δ = (5 × ${w} × ${formatNumber(Math.pow(longitud, 4))}) / ${formatNumber(denominador)}`,
          `δ = ${formatNumber(delta)} m = ${formatNumber(delta*1000)} mm`
        ] 
      };
    }
  },

  // MOMENTO DE INERCIA
  {
    id: 'momento-inercia-rectangular',
    groupId: 'momento-inercia-rectangular',
    title: 'Momento de Inercia - Sección Rectangular (I = bh³/12)',
    isFundamental: false,
    formula: 'I = (b * h³) / 12',
    variables: [
      { symbol: 'b', label: 'Base de la sección (m)', unit: 'm' },
      { symbol: 'h', label: 'Altura de la sección (m)', unit: 'm' }
    ],
    output: { symbol: 'I', label: 'Momento de inercia (m⁴)', unit: 'm⁴' },
    resolve: ({ b, h }) => {
      const altura = parseFloat(h);
      const base = parseFloat(b);
      const I = (base * Math.pow(altura, 3)) / 12;
      return { 
        result: { I: formatNumber(I) }, 
        steps: [
          `I = (b × h³) / 12`,
          `I = (${b} × ${h}³) / 12`,
          `I = (${base} × ${formatNumber(Math.pow(altura, 3))}) / 12`,
          `I = ${formatNumber(I)} m⁴`
        ] 
      };
    }
  },

  {
    id: 'momento-inercia-circular',
    groupId: 'momento-inercia-circular',
    title: 'Momento de Inercia - Sección Circular (I = πd⁴/64)',
    isFundamental: false,
    formula: 'I = (π * d⁴) / 64',
    variables: [
      { symbol: 'd', label: 'Diámetro de la sección (m)', unit: 'm' }
    ],
    output: { symbol: 'I', label: 'Momento de inercia (m⁴)', unit: 'm⁴' },
    resolve: ({ d }) => {
      const diametro = parseFloat(d);
      const I = (Math.PI * Math.pow(diametro, 4)) / 64;
      return { 
        result: { I: formatNumber(I) }, 
        steps: [
          `I = (π × d⁴) / 64`,
          `I = (π × ${d}⁴) / 64`,
          `I = (${formatNumber(Math.PI)} × ${formatNumber(Math.pow(diametro, 4))}) / 64`,
          `I = ${formatNumber(I)} m⁴`
        ] 
      };
    }
  }
];
