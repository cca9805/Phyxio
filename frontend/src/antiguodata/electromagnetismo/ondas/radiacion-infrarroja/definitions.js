import { formatNumber } from '../../../../utils/formatNumber';

// Constantes físicas
const sigma = 5.670374419e-8; // Constante de Stefan-Boltzmann (W⋅m⁻²⋅K⁻⁴)
const b = 2.897771955e-3; // Constante de Wien (m⋅K)
const h = 6.62607015e-34; // Constante de Planck (J⋅s)
const c = 299792458; // Velocidad de la luz (m/s)
const k_B = 1.380649e-23; // Constante de Boltzmann (J/K)

export const definitions = [
  // Grupo 1: Ley de Stefan-Boltzmann
  {
    id: 'infrarroja-stefan-boltzmann-potencia',
    groupId: 'infrarroja_stefan_boltzmann',
    title: 'Potencia Radiada (Stefan-Boltzmann)',
    isFundamental: true,
    formula: 'P = σ⋅A⋅T⁴',
    variables: [
      { symbol: 'A', label: 'Área (A)', unit: 'm²' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'P', label: 'Potencia (P)', unit: 'W' },
    constants: [
      { symbol: 'σ', label: 'Constante de Stefan-Boltzmann', value: sigma, unit: 'W⋅m⁻²⋅K⁻⁴' }
    ],
    donde: "P es la potencia radiada por un cuerpo negro, σ es la constante de Stefan-Boltzmann, A es el área y T es la temperatura",
    resolve: ({ A, T }) => {
      const area = parseFloat(A);
      const temp = parseFloat(T);
      if (area <= 0) return { error: 'El área debe ser positiva.' };
      if (temp <= 0) return { error: 'La temperatura debe ser positiva.' };
      
      const P = sigma * area * Math.pow(temp, 4);
      return { 
        result: { P: formatNumber(P) }, 
        steps: [`P = ${sigma} × ${area} × (${temp})⁴ = ${formatNumber(P)} W`] 
      };
    }
  },
  {
    id: 'infrarroja-temperatura-stefan',
    groupId: 'infrarroja_stefan_boltzmann',
    title: 'Temperatura (desde Potencia)',
    isComplementary: true,
    formula: 'T = ⁴√(P/(σ⋅A))',
    variables: [
      { symbol: 'P', label: 'Potencia (P)', unit: 'W' },
      { symbol: 'A', label: 'Área (A)', unit: 'm²' }
    ],
    output: { symbol: 'T', label: 'Temperatura (T)', unit: 'K' },
    constants: [
      { symbol: 'σ', label: 'Constante de Stefan-Boltzmann', value: sigma, unit: 'W⋅m⁻²⋅K⁻⁴' }
    ],
    donde: "T es la temperatura del cuerpo negro, P es la potencia radiada, σ es la constante de Stefan-Boltzmann y A es el área",
    resolve: ({ P, A }) => {
      const potencia = parseFloat(P);
      const area = parseFloat(A);
      if (potencia <= 0) return { error: 'La potencia debe ser positiva.' };
      if (area <= 0) return { error: 'El área debe ser positiva.' };
      
      const T = Math.pow(potencia / (sigma * area), 0.25);
      return { 
        result: { T: formatNumber(T) }, 
        steps: [`T = ⁴√(${potencia} / (${sigma} × ${area})) = ${formatNumber(T)} K`] 
      };
    }
  },

  // Grupo 2: Ley de Wien
  {
    id: 'infrarroja-wien-longitud',
    groupId: 'infrarroja_ley_wien',
    title: 'Longitud de Onda de Máxima Emisión',
    isFundamental: true,
    formula: 'λ_max = b/T',
    variables: [
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'lambda_max', label: 'λ_max', unit: 'm' },
    constants: [
      { symbol: 'b', label: 'Constante de Wien', value: b, unit: 'm⋅K' }
    ],
    donde: "λ_max es la longitud de onda de máxima emisión, b es la constante de Wien y T es la temperatura del cuerpo negro",
    resolve: ({ T }) => {
      const temp = parseFloat(T);
      if (temp <= 0) return { error: 'La temperatura debe ser positiva.' };
      
      const lambda_max = b / temp;
      return { 
        result: { lambda_max: formatNumber(lambda_max) }, 
        steps: [`λ_max = ${b} / ${temp} = ${formatNumber(lambda_max)} m`] 
      };
    }
  },
  {
    id: 'infrarroja-wien-temperatura',
    groupId: 'infrarroja_ley_wien',
    title: 'Temperatura (desde λ_max)',
    isComplementary: true,
    formula: 'T = b/λ_max',
    variables: [
      { symbol: 'lambda_max', label: 'λ_max', unit: 'm' }
    ],
    output: { symbol: 'T', label: 'Temperatura (T)', unit: 'K' },
    constants: [
      { symbol: 'b', label: 'Constante de Wien', value: b, unit: 'm⋅K' }
    ],
    donde: "T es la temperatura del cuerpo negro, b es la constante de Wien y λ_max es la longitud de onda de máxima emisión",
    resolve: ({ lambda_max }) => {
      const longitud = parseFloat(lambda_max);
      if (longitud <= 0) return { error: 'La longitud de onda debe ser positiva.' };
      
      const T = b / longitud;
      return { 
        result: { T: formatNumber(T) }, 
        steps: [`T = ${b} / ${longitud} = ${formatNumber(T)} K`] 
      };
    }
  },

  // Grupo 3: Emisividad
  {
    id: 'infrarroja-emisividad-potencia',
    groupId: 'infrarroja_emisividad',
    title: 'Potencia con Emisividad',
    isFundamental: true,
    formula: 'P = ε⋅σ⋅A⋅T⁴',
    variables: [
      { symbol: 'epsilon', label: 'Emisividad (ε)', unit: '' },
      { symbol: 'A', label: 'Área (A)', unit: 'm²' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'P', label: 'Potencia (P)', unit: 'W' },
    constants: [
      { symbol: 'σ', label: 'Constante de Stefan-Boltzmann', value: sigma, unit: 'W⋅m⁻²⋅K⁻⁴' }
    ],
    donde: "P es la potencia radiada, ε es la emisividad, σ es la constante de Stefan-Boltzmann, A es el área y T es la temperatura",
    resolve: ({ epsilon, A, T }) => {
      const emis = parseFloat(epsilon);
      const area = parseFloat(A);
      const temp = parseFloat(T);
      if (emis < 0 || emis > 1) return { error: 'La emisividad debe estar entre 0 y 1.' };
      if (area <= 0) return { error: 'El área debe ser positiva.' };
      if (temp <= 0) return { error: 'La temperatura debe ser positiva.' };
      
      const P = emis * sigma * area * Math.pow(temp, 4);
      return { 
        result: { P: formatNumber(P) }, 
        steps: [`P = ${emis} × ${sigma} × ${area} × (${temp})⁴ = ${formatNumber(P)} W`] 
      };
    }
  },
  {
    id: 'infrarroja-emisividad-calculo',
    groupId: 'infrarroja_emisividad',
    title: 'Cálculo de Emisividad',
    isComplementary: true,
    formula: 'ε = P/(σ⋅A⋅T⁴)',
    variables: [
      { symbol: 'P', label: 'Potencia (P)', unit: 'W' },
      { symbol: 'A', label: 'Área (A)', unit: 'm²' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'epsilon', label: 'Emisividad (ε)', unit: '' },
    constants: [
      { symbol: 'σ', label: 'Constante de Stefan-Boltzmann', value: sigma, unit: 'W⋅m⁻²⋅K⁻⁴' }
    ],
    donde: "ε es la emisividad del material (0-1), P es la potencia radiada, σ es la constante de Stefan-Boltzmann, A es el área y T es la temperatura",
    resolve: ({ P, A, T }) => {
      const potencia = parseFloat(P);
      const area = parseFloat(A);
      const temp = parseFloat(T);
      if (potencia <= 0) return { error: 'La potencia debe ser positiva.' };
      if (area <= 0) return { error: 'El área debe ser positiva.' };
      if (temp <= 0) return { error: 'La temperatura debe ser positiva.' };
      
      const epsilon = potencia / (sigma * area * Math.pow(temp, 4));
      if (epsilon > 1) return { error: 'Resultado no físico: ε > 1. Verificar datos.' };
      
      return { 
        result: { epsilon: formatNumber(epsilon) }, 
        steps: [`ε = ${potencia} / (${sigma} × ${area} × (${temp})⁴) = ${formatNumber(epsilon)}`] 
      };
    }
  },

  // Grupo 4: Conversiones de temperatura
  {
    id: 'infrarroja-celsius-kelvin',
    groupId: 'infrarroja_conversiones',
    title: 'Celsius a Kelvin',
    isFundamental: true,
    formula: 'T(K) = T(°C) + 273.15',
    variables: [
      { symbol: 'T_celsius', label: 'Temperatura (°C)', unit: '°C' }
    ],
    output: { symbol: 'T_kelvin', label: 'Temperatura (K)', unit: 'K' },
    donde: "T(K) es la temperatura en Kelvin y T(°C) es la temperatura en grados Celsius",
    resolve: ({ T_celsius }) => {
      const temp_c = parseFloat(T_celsius);
      const T_kelvin = temp_c + 273.15;
      return { 
        result: { T_kelvin: formatNumber(T_kelvin) }, 
        steps: [`T = ${temp_c} + 273.15 = ${formatNumber(T_kelvin)} K`] 
      };
    }
  },
  {
    id: 'infrarroja-kelvin-celsius',
    groupId: 'infrarroja_conversiones',
    title: 'Kelvin a Celsius',
    isComplementary: true,
    formula: 'T(°C) = T(K) - 273.15',
    variables: [
      { symbol: 'T_kelvin', label: 'Temperatura (K)', unit: 'K' }
    ],
    output: { symbol: 'T_celsius', label: 'Temperatura (°C)', unit: '°C' },
    donde: "T(°C) es la temperatura en grados Celsius y T(K) es la temperatura en Kelvin",
    resolve: ({ T_kelvin }) => {
      const temp_k = parseFloat(T_kelvin);
      if (temp_k < 0) return { error: 'La temperatura en Kelvin no puede ser negativa.' };
      const T_celsius = temp_k - 273.15;
      return { 
        result: { T_celsius: formatNumber(T_celsius) }, 
        steps: [`T = ${temp_k} - 273.15 = ${formatNumber(T_celsius)} °C`] 
      };
    }
  },

  // Grupo 5: Ley de Planck
  {
    id: 'infrarroja-planck-radiancia',
    groupId: 'infrarroja_planck',
    title: 'Radiancia Espectral (Ley de Planck)',
    isFundamental: true,
    formula: 'B(λ,T) = (2hc²/λ⁵) × 1/(e^(hc/λk_BT) - 1)',
    variables: [
      { symbol: 'lambda', label: 'Longitud de onda (λ)', unit: 'm' },
      { symbol: 'T', label: 'Temperatura (T)', unit: 'K' }
    ],
    output: { symbol: 'B', label: 'Radiancia espectral B(λ,T)', unit: 'W⋅m⁻²⋅sr⁻¹⋅m⁻¹' },
    constants: [
      { symbol: 'h', label: 'Constante de Planck', value: h, unit: 'J⋅s' },
      { symbol: 'c', label: 'Velocidad de la luz', value: c, unit: 'm/s' },
      { symbol: 'k_B', label: 'Constante de Boltzmann', value: k_B, unit: 'J/K' }
    ],
    donde: "B(λ,T) es la radiancia espectral, h es la constante de Planck, c es la velocidad de la luz, λ es la longitud de onda, k_B es la constante de Boltzmann y T es la temperatura",
    resolve: ({ lambda, T }) => {
      const longitud = parseFloat(lambda);
      const temp = parseFloat(T);
      if (longitud <= 0) return { error: 'La longitud de onda debe ser positiva.' };
      if (temp <= 0) return { error: 'La temperatura debe ser positiva.' };
      
      const numerador = 2 * h * Math.pow(c, 2) / Math.pow(longitud, 5);
      const exponente = (h * c) / (longitud * k_B * temp);
      const denominador = Math.exp(exponente) - 1;
      
      if (denominador <= 0) return { error: 'Error en el cálculo. Verificar valores.' };
      
      const B = numerador / denominador;
      return { 
        result: { B: formatNumber(B) }, 
        steps: [
          `Numerador = 2hc²/λ⁵ = ${formatNumber(numerador)}`,
          `Exponente = hc/(λk_BT) = ${formatNumber(exponente)}`,
          `Denominador = e^${formatNumber(exponente)} - 1 = ${formatNumber(denominador)}`,
          `B(λ,T) = ${formatNumber(numerador)} / ${formatNumber(denominador)} = ${formatNumber(B)} W⋅m⁻²⋅sr⁻¹⋅m⁻¹`
        ] 
      };
    }
  }
];
