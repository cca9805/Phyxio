import { formatNumber } from '../../../utils/formatNumber';

export const definitions = [
  {
    id: 'intensidad-sonido',
    groupId: 'propiedades_sonido-grupo-1',
    title: 'Intensidad del Sonido',
    isFundamental: true,
    formula: String.raw`I = \frac{P}{A}`,
    variables: [
      { symbol: 'P', label: 'Potencia (P)', unit: 'W' },
      { symbol: 'A', label: 'Área (A)', unit: 'm²' }
    ],
    output: { symbol: 'I', label: 'Intensidad (I)', unit: 'W/m²' },
    resolve: ({ P, A }) => {
      const I = P / A;
      return {
        result: { I: formatNumber(I) },
        steps: [
          `I = P/A`,
          `I = ${P}/${A}`,
          `I = ${formatNumber(I)} W/m²`
        ]
      };
    }
  },
  {
    id: 'nivel-intensidad',
    groupId: 'propiedades_sonido-grupo-1',
    title: 'Nivel de Intensidad (Decibeles)',
    isFundamental: true,
    formula: String.raw`\beta = 10 \log_{10}\left(\frac{I}{I_0}\right)`,
    variables: [
      { symbol: 'I', label: 'Intensidad (I)', unit: 'W/m²' }
    ],
    output: { symbol: 'beta', label: 'Nivel de intensidad (β)', unit: 'dB' },
    resolve: ({ I }) => {
      const I0 = 1e-12; // Intensidad de referencia
      const beta = 10 * Math.log10(I / I0);
      return {
        result: { beta: formatNumber(beta) },
        steps: [
          `β = 10 log₁₀(I/I₀)`,
          `β = 10 log₁₀(${I}/10⁻¹²)`,
          `β = 10 × ${formatNumber(Math.log10(I / I0))}`,
          `β = ${formatNumber(beta)} dB`
        ]
      };
    }
  },
  {
    id: 'intensidad-fuente-puntual',
    groupId: 'propiedades_sonido-grupo-1',
    title: 'Intensidad de Fuente Puntual',
    isFundamental: true,
    formula: String.raw`I = \frac{P}{4\pi r^2}`,
    variables: [
      { symbol: 'P', label: 'Potencia (P)', unit: 'W' },
      { symbol: 'r', label: 'Distancia (r)', unit: 'm' }
    ],
    output: { symbol: 'I', label: 'Intensidad (I)', unit: 'W/m²' },
    resolve: ({ P, r }) => {
      const I = P / (4 * Math.PI * r * r);
      return {
        result: { I: formatNumber(I) },
        steps: [
          `I = P/(4πr²)`,
          `I = ${P}/(4π × ${r}²)`,
          `I = ${P}/${formatNumber(4 * Math.PI * r * r)}`,
          `I = ${formatNumber(I)} W/m²`
        ]
      };
    }
  },
  {
    id: 'frecuencia-armonico',
    groupId: 'propiedades_sonido-grupo-1',
    title: 'Frecuencia de Armónico',
    isFundamental: true,
    formula: String.raw`f_n = n \cdot f_1`,
    variables: [
      { symbol: 'n', label: 'Número del armónico (n)', unit: 'adimensional' },
      { symbol: 'f_1', label: 'Frecuencia fundamental (f₁)', unit: 'Hz' }
    ],
    output: { symbol: 'f_n', label: 'Frecuencia del armónico (fₙ)', unit: 'Hz' },
    resolve: ({ n, f_1 }) => {
      const f_n = n * f_1;
      return {
        result: { f_n: formatNumber(f_n) },
        steps: [
          `fₙ = n × f₁`,
          `fₙ = ${n} × ${f_1}`,
          `fₙ = ${formatNumber(f_n)} Hz`
        ]
      };
    }
  },
  {
    id: 'intensidad-desde-decibeles',
    groupId: 'propiedades_sonido-grupo-1',
    title: 'Intensidad desde Decibeles',
    isFundamental: false,
    formula: String.raw`I = I_0 \cdot 10^{\beta/10}`,
    variables: [
      { symbol: 'beta', label: 'Nivel de intensidad (β)', unit: 'dB' }
    ],
    output: { symbol: 'I', label: 'Intensidad (I)', unit: 'W/m²' },
    resolve: ({ beta }) => {
      const I0 = 1e-12;
      const I = I0 * Math.pow(10, beta / 10);
      return {
        result: { I: formatNumber(I, 'scientific') },
        steps: [
          `I = I₀ × 10^(β/10)`,
          `I = 10⁻¹² × 10^(${beta}/10)`,
          `I = 10⁻¹² × 10^${formatNumber(beta / 10)}`,
          `I = ${formatNumber(I, 'scientific')} W/m²`
        ]
      };
    }
  },
  {
    id: 'potencia-desde-intensidad',
    groupId: 'propiedades_sonido-grupo-1',
    title: 'Potencia desde Intensidad',
    isFundamental: false,
    formula: String.raw`P = I \cdot A`,
    variables: [
      { symbol: 'I', label: 'Intensidad (I)', unit: 'W/m²' },
      { symbol: 'A', label: 'Área (A)', unit: 'm²' }
    ],
    output: { symbol: 'P', label: 'Potencia (P)', unit: 'W' },
    resolve: ({ I, A }) => {
      const P = I * A;
      return {
        result: { P: formatNumber(P) },
        steps: [
          `P = I × A`,
          `P = ${I} × ${A}`,
          `P = ${formatNumber(P)} W`
        ]
      };
    }
  },
  {
    id: 'distancia-desde-intensidad',
    groupId: 'propiedades_sonido-grupo-1',
    title: 'Distancia desde Intensidad',
    isFundamental: false,
    formula: String.raw`r = \sqrt{\frac{P}{4\pi I}}`,
    variables: [
      { symbol: 'P', label: 'Potencia (P)', unit: 'W' },
      { symbol: 'I', label: 'Intensidad (I)', unit: 'W/m²' }
    ],
    output: { symbol: 'r', label: 'Distancia (r)', unit: 'm' },
    resolve: ({ P, I }) => {
      const r = Math.sqrt(P / (4 * Math.PI * I));
      return {
        result: { r: formatNumber(r) },
        steps: [
          `r = √(P/(4πI))`,
          `r = √(${P}/(4π × ${I}))`,
          `r = √${formatNumber(P / (4 * Math.PI * I))}`,
          `r = ${formatNumber(r)} m`
        ]
      };
    }
  }
];
