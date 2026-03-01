import { formatNumber } from '../../../utils/formatNumber.js';

const g = 9.81; // Aceleración gravitacional (m/s²)

export const definitions = [
  // --- Grupo 1: Número de Reynolds ---
  {
    id: 'numero-reynolds',
    groupId: 'numero-reynolds',
    isFundamental: true,
    title: 'Número de Reynolds (Re = ρvL/μ)',
    formula: 'Re = (ρ * v * L) / μ',
    variables: [
      { symbol: 'rho', label: 'Densidad ρ (kg/m³)', unit: 'kg/m³' },
      { symbol: 'v', label: 'Velocidad v (m/s)', unit: 'm/s' },
      { symbol: 'L', label: 'Longitud característica L (m)', unit: 'm' },
      { symbol: 'mu', label: 'Viscosidad dinámica μ (Pa·s)', unit: 'Pa·s' }
    ],
    output: { symbol: 'Re', label: 'Número de Reynolds Re', unit: '-' },
    resolve: ({ rho, v, L, mu }) => {
      const viscosidad = parseFloat(mu);
      if (viscosidad === 0) return { error: "La viscosidad no puede ser cero." };
      const Re = (parseFloat(rho) * parseFloat(v) * parseFloat(L)) / viscosidad;
      return {
        result: { Re: formatNumber(Re) },
        steps: [
          `Re = (ρ × v × L) / μ = (${rho} × ${v} × ${L}) / ${mu}`,
          `Re = ${formatNumber(Re)}`,
          Re < 2300 ? 'Flujo laminar' : Re > 4000 ? 'Flujo turbulento' : 'Flujo de transición'
        ]
      };
    }
  },
  {
    id: 'velocidad-desde-reynolds',
    groupId: 'numero-reynolds',
    isFundamental: false,
    title: 'Velocidad desde Reynolds (v = Re·μ/(ρL))',
    formula: 'v = (Re * μ) / (ρ * L)',
    variables: [
      { symbol: 'Re', label: 'Número de Reynolds Re', unit: '-' },
      { symbol: 'mu', label: 'Viscosidad dinámica μ (Pa·s)', unit: 'Pa·s' },
      { symbol: 'rho', label: 'Densidad ρ (kg/m³)', unit: 'kg/m³' },
      { symbol: 'L', label: 'Longitud característica L (m)', unit: 'm' }
    ],
    output: { symbol: 'v', label: 'Velocidad v (m/s)', unit: 'm/s' },
    resolve: ({ Re, mu, rho, L }) => {
      const denominador = parseFloat(rho) * parseFloat(L);
      if (denominador === 0) return { error: "ρ y L no pueden ser cero." };
      const v = (parseFloat(Re) * parseFloat(mu)) / denominador;
      return {
        result: { v: formatNumber(v) },
        steps: [
          `v = (Re × μ) / (ρ × L) = (${Re} × ${mu}) / (${rho} × ${L})`,
          `v = ${formatNumber(v)} m/s`
        ]
      };
    }
  },
  {
    id: 'viscosidad-desde-reynolds',
    groupId: 'numero-reynolds',
    isFundamental: false,
    title: 'Viscosidad desde Reynolds (μ = ρvL/Re)',
    formula: 'μ = (ρ * v * L) / Re',
    variables: [
      { symbol: 'rho', label: 'Densidad ρ (kg/m³)', unit: 'kg/m³' },
      { symbol: 'v', label: 'Velocidad v (m/s)', unit: 'm/s' },
      { symbol: 'L', label: 'Longitud característica L (m)', unit: 'm' },
      { symbol: 'Re', label: 'Número de Reynolds Re', unit: '-' }
    ],
    output: { symbol: 'mu', label: 'Viscosidad dinámica μ (Pa·s)', unit: 'Pa·s' },
    resolve: ({ rho, v, L, Re }) => {
      const reynolds = parseFloat(Re);
      if (reynolds === 0) return { error: "Re no puede ser cero." };
      const mu = (parseFloat(rho) * parseFloat(v) * parseFloat(L)) / reynolds;
      return {
        result: { mu: formatNumber(mu) },
        steps: [
          `μ = (ρ × v × L) / Re = (${rho} × ${v} × ${L}) / ${Re}`,
          `μ = ${formatNumber(mu)} Pa·s`
        ]
      };
    }
  },

  // --- Grupo 2: Número de Mach ---
  {
    id: 'numero-mach',
    groupId: 'numero-mach',
    isFundamental: true,
    title: 'Número de Mach (M = v/c)',
    formula: 'M = v / c',
    variables: [
      { symbol: 'v', label: 'Velocidad v (m/s)', unit: 'm/s' },
      { symbol: 'c', label: 'Velocidad del sonido c (m/s)', unit: 'm/s', defaultValue: 343 }
    ],
    output: { symbol: 'M', label: 'Número de Mach M', unit: '-' },
    resolve: ({ v, c = 343 }) => {
      const velocidadSonido = parseFloat(c);
      if (velocidadSonido === 0) return { error: "La velocidad del sonido no puede ser cero." };
      const M = parseFloat(v) / velocidadSonido;
      return {
        result: { M: formatNumber(M) },
        steps: [
          `M = v / c = ${v} / ${c}`,
          `M = ${formatNumber(M)}`,
          M < 0.3 ? 'Flujo incompresible' : M < 1 ? 'Flujo subsónico' : M === 1 ? 'Flujo sónico' : M < 5 ? 'Flujo supersónico' : 'Flujo hipersónico'
        ]
      };
    }
  },
  {
    id: 'velocidad-desde-mach',
    groupId: 'numero-mach',
    isFundamental: false,
    title: 'Velocidad desde Mach (v = M·c)',
    formula: 'v = M * c',
    variables: [
      { symbol: 'M', label: 'Número de Mach M', unit: '-' },
      { symbol: 'c', label: 'Velocidad del sonido c (m/s)', unit: 'm/s', defaultValue: 343 }
    ],
    output: { symbol: 'v', label: 'Velocidad v (m/s)', unit: 'm/s' },
    resolve: ({ M, c = 343 }) => {
      const v = parseFloat(M) * parseFloat(c);
      return {
        result: { v: formatNumber(v) },
        steps: [
          `v = M × c = ${M} × ${c}`,
          `v = ${formatNumber(v)} m/s`
        ]
      };
    }
  },
  {
    id: 'velocidad-sonido-desde-mach',
    groupId: 'numero-mach',
    isFundamental: false,
    title: 'Velocidad del sonido desde Mach (c = v/M)',
    formula: 'c = v / M',
    variables: [
      { symbol: 'v', label: 'Velocidad v (m/s)', unit: 'm/s' },
      { symbol: 'M', label: 'Número de Mach M', unit: '-' }
    ],
    output: { symbol: 'c', label: 'Velocidad del sonido c (m/s)', unit: 'm/s' },
    resolve: ({ v, M }) => {
      const mach = parseFloat(M);
      if (mach === 0) return { error: "M no puede ser cero." };
      const c = parseFloat(v) / mach;
      return {
        result: { c: formatNumber(c) },
        steps: [
          `c = v / M = ${v} / ${M}`,
          `c = ${formatNumber(c)} m/s`
        ]
      };
    }
  },

  // --- Grupo 3: Número de Froude ---
  {
    id: 'numero-froude',
    groupId: 'numero-froude',
    isFundamental: true,
    title: 'Número de Froude (Fr = v/√(gL))',
    formula: 'Fr = v / √(g*L)',
    variables: [
      { symbol: 'v', label: 'Velocidad v (m/s)', unit: 'm/s' },
      { symbol: 'L', label: 'Longitud característica L (m)', unit: 'm' },
      { symbol: 'g', label: 'Gravedad g (m/s²)', unit: 'm/s²', defaultValue: g }
    ],
    output: { symbol: 'Fr', label: 'Número de Froude Fr', unit: '-' },
    resolve: ({ v, L, g = 9.81 }) => {
      const divisor = Math.sqrt(parseFloat(g) * parseFloat(L));
      if (divisor === 0) return { error: "El denominador no puede ser cero." };
      const Fr = parseFloat(v) / divisor;
      return {
        result: { Fr: formatNumber(Fr) },
        steps: [
          `Fr = v / √(g×L) = ${v} / √(${g}×${L})`,
          `Fr = ${formatNumber(Fr)}`,
          Fr < 1 ? 'Flujo subcrítico (dominan fuerzas gravitacionales)' : Fr === 1 ? 'Flujo crítico' : 'Flujo supercrítico (dominan fuerzas inerciales)'
        ]
      };
    }
  },
  {
    id: 'velocidad-desde-froude',
    groupId: 'numero-froude',
    isFundamental: false,
    title: 'Velocidad desde Froude (v = Fr·√(gL))',
    formula: 'v = Fr * √(g*L)',
    variables: [
      { symbol: 'Fr', label: 'Número de Froude Fr', unit: '-' },
      { symbol: 'L', label: 'Longitud característica L (m)', unit: 'm' },
      { symbol: 'g', label: 'Gravedad g (m/s²)', unit: 'm/s²', defaultValue: g }
    ],
    output: { symbol: 'v', label: 'Velocidad v (m/s)', unit: 'm/s' },
    resolve: ({ Fr, L, g = 9.81 }) => {
      const v = parseFloat(Fr) * Math.sqrt(parseFloat(g) * parseFloat(L));
      return {
        result: { v: formatNumber(v) },
        steps: [
          `v = Fr × √(g×L) = ${Fr} × √(${g}×${L})`,
          `v = ${formatNumber(v)} m/s`
        ]
      };
    }
  },
  {
    id: 'longitud-desde-froude',
    groupId: 'numero-froude',
    isFundamental: false,
    title: 'Longitud desde Froude (L = (v/Fr)²/g)',
    formula: 'L = (v/Fr)² / g',
    variables: [
      { symbol: 'v', label: 'Velocidad v (m/s)', unit: 'm/s' },
      { symbol: 'Fr', label: 'Número de Froude Fr', unit: '-' },
      { symbol: 'g', label: 'Gravedad g (m/s²)', unit: 'm/s²', defaultValue: g }
    ],
    output: { symbol: 'L', label: 'Longitud característica L (m)', unit: 'm' },
    resolve: ({ v, Fr, g = 9.81 }) => {
      const froude = parseFloat(Fr);
      const gravedad = parseFloat(g);
      if (froude === 0 || gravedad === 0) return { error: "Fr y g no pueden ser cero." };
      const L = Math.pow(parseFloat(v) / froude, 2) / gravedad;
      return {
        result: { L: formatNumber(L) },
        steps: [
          `L = (v/Fr)² / g = (${v}/${Fr})² / ${g}`,
          `L = ${formatNumber(L)} m`
        ]
      };
    }
  },

  // --- Grupo 4: Número de Weber ---
  {
    id: 'numero-weber',
    groupId: 'numero-weber',
    isFundamental: true,
    title: 'Número de Weber (We = ρv²L/σ)',
    formula: 'We = (ρ * v² * L) / σ',
    variables: [
      { symbol: 'rho', label: 'Densidad ρ (kg/m³)', unit: 'kg/m³' },
      { symbol: 'v', label: 'Velocidad v (m/s)', unit: 'm/s' },
      { symbol: 'L', label: 'Longitud característica L (m)', unit: 'm' },
      { symbol: 'sigma', label: 'Tensión superficial σ (N/m)', unit: 'N/m' }
    ],
    output: { symbol: 'We', label: 'Número de Weber We', unit: '-' },
    resolve: ({ rho, v, L, sigma }) => {
      const tension = parseFloat(sigma);
      if (tension === 0) return { error: "La tensión superficial no puede ser cero." };
      const We = (parseFloat(rho) * Math.pow(parseFloat(v), 2) * parseFloat(L)) / tension;
      return {
        result: { We: formatNumber(We) },
        steps: [
          `We = (ρ × v² × L) / σ = (${rho} × ${v}² × ${L}) / ${sigma}`,
          `We = ${formatNumber(We)}`,
          We < 1 ? 'Dominan fuerzas de tensión superficial' : 'Dominan fuerzas inerciales'
        ]
      };
    }
  },
  {
    id: 'velocidad-desde-weber',
    groupId: 'numero-weber',
    isFundamental: false,
    title: 'Velocidad desde Weber (v = √(We·σ/(ρL)))',
    formula: 'v = √((We * σ) / (ρ * L))',
    variables: [
      { symbol: 'We', label: 'Número de Weber We', unit: '-' },
      { symbol: 'sigma', label: 'Tensión superficial σ (N/m)', unit: 'N/m' },
      { symbol: 'rho', label: 'Densidad ρ (kg/m³)', unit: 'kg/m³' },
      { symbol: 'L', label: 'Longitud característica L (m)', unit: 'm' }
    ],
    output: { symbol: 'v', label: 'Velocidad v (m/s)', unit: 'm/s' },
    resolve: ({ We, sigma, rho, L }) => {
      const denominador = parseFloat(rho) * parseFloat(L);
      if (denominador === 0) return { error: "ρ y L no pueden ser cero." };
      const v = Math.sqrt((parseFloat(We) * parseFloat(sigma)) / denominador);
      return {
        result: { v: formatNumber(v) },
        steps: [
          `v = √((We × σ) / (ρ × L)) = √((${We} × ${sigma}) / (${rho} × ${L}))`,
          `v = ${formatNumber(v)} m/s`
        ]
      };
    }
  },
  {
    id: 'tension-desde-weber',
    groupId: 'numero-weber',
    isFundamental: false,
    title: 'Tensión superficial desde Weber (σ = ρv²L/We)',
    formula: 'σ = (ρ * v² * L) / We',
    variables: [
      { symbol: 'rho', label: 'Densidad ρ (kg/m³)', unit: 'kg/m³' },
      { symbol: 'v', label: 'Velocidad v (m/s)', unit: 'm/s' },
      { symbol: 'L', label: 'Longitud característica L (m)', unit: 'm' },
      { symbol: 'We', label: 'Número de Weber We', unit: '-' }
    ],
    output: { symbol: 'sigma', label: 'Tensión superficial σ (N/m)', unit: 'N/m' },
    resolve: ({ rho, v, L, We }) => {
      const weber = parseFloat(We);
      if (weber === 0) return { error: "We no puede ser cero." };
      const sigma = (parseFloat(rho) * Math.pow(parseFloat(v), 2) * parseFloat(L)) / weber;
      return {
        result: { sigma: formatNumber(sigma) },
        steps: [
          `σ = (ρ × v² × L) / We = (${rho} × ${v}² × ${L}) / ${We}`,
          `σ = ${formatNumber(sigma)} N/m`
        ]
      };
    }
  },

  // --- Grupo 5: Número de Euler ---
  {
    id: 'numero-euler',
    groupId: 'numero-euler',
    isFundamental: true,
    title: 'Número de Euler (Eu = Δp/(ρv²))',
    formula: 'Eu = Δp / (ρ * v²)',
    variables: [
      { symbol: 'delta_p', label: 'Diferencia de presión Δp (Pa)', unit: 'Pa' },
      { symbol: 'rho', label: 'Densidad ρ (kg/m³)', unit: 'kg/m³' },
      { symbol: 'v', label: 'Velocidad v (m/s)', unit: 'm/s' }
    ],
    output: { symbol: 'Eu', label: 'Número de Euler Eu', unit: '-' },
    resolve: ({ delta_p, rho, v }) => {
      const denominador = parseFloat(rho) * Math.pow(parseFloat(v), 2);
      if (denominador === 0) return { error: "ρ y v no pueden ser cero." };
      const Eu = parseFloat(delta_p) / denominador;
      return {
        result: { Eu: formatNumber(Eu) },
        steps: [
          `Eu = Δp / (ρ × v²) = ${delta_p} / (${rho} × ${v}²)`,
          `Eu = ${formatNumber(Eu)}`
        ]
      };
    }
  },
  {
    id: 'presion-desde-euler',
    groupId: 'numero-euler',
    isFundamental: false,
    title: 'Diferencia de presión desde Euler (Δp = Eu·ρv²)',
    formula: 'Δp = Eu * ρ * v²',
    variables: [
      { symbol: 'Eu', label: 'Número de Euler Eu', unit: '-' },
      { symbol: 'rho', label: 'Densidad ρ (kg/m³)', unit: 'kg/m³' },
      { symbol: 'v', label: 'Velocidad v (m/s)', unit: 'm/s' }
    ],
    output: { symbol: 'delta_p', label: 'Diferencia de presión Δp (Pa)', unit: 'Pa' },
    resolve: ({ Eu, rho, v }) => {
      const delta_p = parseFloat(Eu) * parseFloat(rho) * Math.pow(parseFloat(v), 2);
      return {
        result: { delta_p: formatNumber(delta_p) },
        steps: [
          `Δp = Eu × ρ × v² = ${Eu} × ${rho} × ${v}²`,
          `Δp = ${formatNumber(delta_p)} Pa`
        ]
      };
    }
  },
  {
    id: 'velocidad-desde-euler',
    groupId: 'numero-euler',
    isFundamental: false,
    title: 'Velocidad desde Euler (v = √(Δp/(Eu·ρ)))',
    formula: 'v = √(Δp / (Eu * ρ))',
    variables: [
      { symbol: 'delta_p', label: 'Diferencia de presión Δp (Pa)', unit: 'Pa' },
      { symbol: 'Eu', label: 'Número de Euler Eu', unit: '-' },
      { symbol: 'rho', label: 'Densidad ρ (kg/m³)', unit: 'kg/m³' }
    ],
    output: { symbol: 'v', label: 'Velocidad v (m/s)', unit: 'm/s' },
    resolve: ({ delta_p, Eu, rho }) => {
      const denominador = parseFloat(Eu) * parseFloat(rho);
      if (denominador === 0) return { error: "Eu y ρ no pueden ser cero." };
      const v = Math.sqrt(parseFloat(delta_p) / denominador);
      return {
        result: { v: formatNumber(v) },
        steps: [
          `v = √(Δp / (Eu × ρ)) = √(${delta_p} / (${Eu} × ${rho}))`,
          `v = ${formatNumber(v)} m/s`
        ]
      };
    }
  }
];
