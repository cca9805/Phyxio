import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  // --- Grupo 1: Número de Mach ---
  {
    id: 'numero-mach',
    groupId: 'numero-mach',
    title: 'Calcular Número de Mach (M = V/a)',
    formula: 'M = V / a',
    isFundamental: true,
    variables: [
      { symbol: 'V', label: 'Velocidad del Flujo (V) (m/s)', unit: 'm/s' },
      { symbol: 'a', label: 'Velocidad del Sonido (a) (m/s)', unit: 'm/s', defaultValue: 343 }
    ],
    output: { symbol: 'M', label: 'Número de Mach (M) (adimensional)', unit: 'adimensional' },
    resolve: ({ V, a = 343 }) => {
      const velocidadSonido = parseFloat(a);
      if (velocidadSonido === 0) return { error: "La velocidad del sonido no puede ser cero." };
      const M = parseFloat(V) / velocidadSonido;
      let regimen = '';
      if (M < 0.3) regimen = ' (incompresible)';
      else if (M < 0.8) regimen = ' (subsónico)';
      else if (M < 1.2) regimen = ' (transónico)';
      else if (M < 5) regimen = ' (supersónico)';
      else regimen = ' (hipersónico)';
      return { 
        result: { M: formatNumber(M) }, 
        steps: [`M = ${V} / ${a} = ${formatNumber(M)}${regimen}`] 
      };
    }
  },
  {
    id: 'velocidad-desde-mach',
    groupId: 'numero-mach',
    title: 'Calcular Velocidad (V = Ma)',
    formula: 'V = M * a',
    isFundamental: false,
    variables: [
      { symbol: 'M', label: 'Número de Mach (M) (adimensional)', unit: 'adimensional' },
      { symbol: 'a', label: 'Velocidad del Sonido (a) (m/s)', unit: 'm/s', defaultValue: 343 }
    ],
    output: { symbol: 'V', label: 'Velocidad del Flujo (V) (m/s)', unit: 'm/s' },
    resolve: ({ M, a = 343 }) => {
      const V = parseFloat(M) * parseFloat(a);
      return { 
        result: { V: formatNumber(V) }, 
        steps: [`V = ${M} * ${a} = ${formatNumber(V)} m/s`] 
      };
    }
  },

  // --- Grupo 2: Velocidad del Sonido ---
  {
    id: 'velocidad-sonido-gas',
    groupId: 'velocidad-sonido',
    title: 'Velocidad del Sonido en Gas (a = √(γRT))',
    formula: 'a = √(γ * R * T)',
    isFundamental: true,
    variables: [
      { symbol: 'gamma', label: 'Coeficiente Adiabático (γ) (adimensional)', unit: 'adimensional', defaultValue: 1.4 },
      { symbol: 'R', label: 'Constante del Gas (R) (J/(kg·K))', unit: 'J/(kg·K)', defaultValue: 287 },
      { symbol: 'T', label: 'Temperatura (T) (K)', unit: 'K' }
    ],
    output: { symbol: 'a', label: 'Velocidad del Sonido (a) (m/s)', unit: 'm/s' },
    resolve: ({ gamma = 1.4, R = 287, T }) => {
      const a = Math.sqrt(parseFloat(gamma) * parseFloat(R) * parseFloat(T));
      return { 
        result: { a: formatNumber(a) }, 
        steps: [`a = √(${gamma} * ${R} * ${T}) = ${formatNumber(a)} m/s`] 
      };
    }
  }
];
