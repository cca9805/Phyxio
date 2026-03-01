import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'aumento-microscopio',
    groupId: 'aumento-microscopio',
    title: 'Aumento de un Microscopio',
    isFundamental: true,
    formula: String.raw`M = m_o \times m_e = -\frac{L \times D}{f_o \times f_e}`,
    variables: [
      { symbol: 'L', label: 'Longitud del tubo (L)', unit: 'cm' },
      { symbol: 'D', label: 'Distancia mínima de visión (D)', unit: 'cm' },
      { symbol: 'f_o', label: 'Distancia focal objetivo (fₒ)', unit: 'cm' },
      { symbol: 'f_e', label: 'Distancia focal ocular (fₑ)', unit: 'cm' }
    ],
    output: { symbol: 'M', label: 'Aumento total (M)', unit: 'adimensional' },
    resolve: ({ L, D, f_o, f_e }) => {
      const M = -(L * D) / (f_o * f_e);
      return {
        result: { M: formatNumber(M) },
        steps: [
          `M = -(L × D) / (fₒ × fₑ)`,
          `M = -(${L} × ${D}) / (${f_o} × ${f_e})`,
          `M = ${formatNumber(M)}`
        ]
      };
    }
  },
  {
    id: 'aumento-telescopio',
    groupId: 'aumento-telescopio',
    title: 'Aumento de un Telescopio',
    isFundamental: true,
    formula: String.raw`M = -\frac{f_o}{f_e}`,
    variables: [
      { symbol: 'f_o', label: 'Distancia focal objetivo (fₒ)', unit: 'cm' },
      { symbol: 'f_e', label: 'Distancia focal ocular (fₑ)', unit: 'cm' }
    ],
    output: { symbol: 'M', label: 'Aumento angular (M)', unit: 'adimensional' },
    resolve: ({ f_o, f_e }) => {
      const M = -f_o / f_e;
      return {
        result: { M: formatNumber(M) },
        steps: [
          `M = -fₒ/fₑ`,
          `M = -${f_o}/${f_e}`,
          `M = ${formatNumber(M)}`
        ]
      };
    }
  },
  {
    id: 'poder-resolucion',
    groupId: 'poder-resolucion',
    title: 'Poder de Resolución',
    isFundamental: true,
    formula: String.raw`\theta_{min} = 1.22 \frac{\lambda}{D}`,
    variables: [
      { symbol: 'lambda', label: 'Longitud de onda (λ)', unit: 'm' },
      { symbol: 'D', label: 'Diámetro de apertura (D)', unit: 'm' }
    ],
    output: { symbol: 'theta_min', label: 'Ángulo mínimo resoluble (θₘᵢₙ)', unit: 'radianes' },
    resolve: ({ lambda, D }) => {
      const theta_min = 1.22 * lambda / D;
      return {
        result: { theta_min: formatNumber(theta_min) },
        steps: [
          `θₘᵢₙ = 1.22 × λ/D`,
          `θₘᵢₙ = 1.22 × ${lambda}/${D}`,
          `θₘᵢₙ = ${formatNumber(theta_min)} rad`
        ]
      };
    }
  },
  {
    id: 'aumento-lupa',
    groupId: 'aumento-lupa',
    title: 'Aumento de una Lupa',
    isFundamental: true,
    formula: String.raw`M = \frac{D}{f}`,
    variables: [
      { symbol: 'D', label: 'Distancia mínima de visión (D)', unit: 'cm' },
      { symbol: 'f', label: 'Distancia focal (f)', unit: 'cm' }
    ],
    output: { symbol: 'M', label: 'Aumento angular (M)', unit: 'adimensional' },
    resolve: ({ D, f }) => {
      const M = D / f;
      return {
        result: { M: formatNumber(M) },
        steps: [
          `M = D/f`,
          `M = ${D}/${f}`,
          `M = ${formatNumber(M)}`
        ]
      };
    }
  },
  {
    id: 'numero-f',
    groupId: 'numero-f',
    title: 'Número f (f-number)',
    isFundamental: false,
    formula: String.raw`f/\# = \frac{f}{D}`,
    variables: [
      { symbol: 'f', label: 'Distancia focal (f)', unit: 'mm' },
      { symbol: 'D', label: 'Diámetro de apertura (D)', unit: 'mm' }
    ],
    output: { symbol: 'f_number', label: 'Número f (f/#)', unit: 'adimensional' },
    resolve: ({ f, D }) => {
      const f_number = f / D;
      return {
        result: { f_number: formatNumber(f_number) },
        steps: [
          `f/# = f/D`,
          `f/# = ${f}/${D}`,
          `f/# = ${formatNumber(f_number)}`
        ]
      };
    }
  }
];
