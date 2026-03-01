import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'iluminancia',
    groupId: 'iluminacion-grupo-1',
    title: 'Iluminancia (Ley de Iluminación)',
    isFundamental: true,
    formula: String.raw`E = \frac{\Phi}{A}`,
    variables: [
      { symbol: 'Phi', label: 'Flujo luminoso (Φ)', unit: 'lm' },
      { symbol: 'A', label: 'Área (A)', unit: 'm²' }
    ],
    output: { symbol: 'E', label: 'Iluminancia (E)', unit: 'lx' },
    resolve: ({ Phi, A }) => {
      const E = Phi / A;
      return {
        result: { E: formatNumber(E) },
        steps: [
          `E = Φ/A`,
          `E = ${Phi}/${A}`,
          `E = ${formatNumber(E)} lx`
        ]
      };
    }
  },
  {
    id: 'ley-inversa-cuadrado',
    groupId: 'iluminacion-grupo-1',
    title: 'Ley del Inverso del Cuadrado',
    isFundamental: true,
    formula: String.raw`E = \frac{I}{r^2}`,
    variables: [
      { symbol: 'I', label: 'Intensidad luminosa (I)', unit: 'cd' },
      { symbol: 'r', label: 'Distancia (r)', unit: 'm' }
    ],
    output: { symbol: 'E', label: 'Iluminancia (E)', unit: 'lx' },
    resolve: ({ I, r }) => {
      const E = I / Math.pow(r, 2);
      return {
        result: { E: formatNumber(E) },
        steps: [
          `E = I/r²`,
          `E = ${I}/${r}²`,
          `E = ${formatNumber(E)} lx`
        ]
      };
    }
  },
  {
    id: 'ley-coseno-lambert',
    groupId: 'iluminacion-grupo-1',
    title: 'Ley del Coseno de Lambert',
    isFundamental: true,
    formula: String.raw`E = \frac{I \cos(\theta)}{r^2}`,
    variables: [
      { symbol: 'I', label: 'Intensidad luminosa (I)', unit: 'cd' },
      { symbol: 'theta', label: 'Ángulo de incidencia (θ)', unit: 'grados' },
      { symbol: 'r', label: 'Distancia (r)', unit: 'm' }
    ],
    output: { symbol: 'E', label: 'Iluminancia (E)', unit: 'lx' },
    resolve: ({ I, theta, r }) => {
      const theta_rad = theta * Math.PI / 180;
      const E = (I * Math.cos(theta_rad)) / Math.pow(r, 2);
      return {
        result: { E: formatNumber(E) },
        steps: [
          `E = (I × cos(θ)) / r²`,
          `E = (${I} × cos(${theta}°)) / ${r}²`,
          `E = ${formatNumber(E)} lx`
        ]
      };
    }
  },
  {
    id: 'luminancia',
    groupId: 'iluminacion-grupo-1',
    title: 'Luminancia',
    isFundamental: true,
    formula: String.raw`L = \frac{I}{A \cos(\theta)}`,
    variables: [
      { symbol: 'I', label: 'Intensidad luminosa (I)', unit: 'cd' },
      { symbol: 'A', label: 'Área aparente (A)', unit: 'm²' },
      { symbol: 'theta', label: 'Ángulo de observación (θ)', unit: 'grados' }
    ],
    output: { symbol: 'L', label: 'Luminancia (L)', unit: 'cd/m²' },
    resolve: ({ I, A, theta }) => {
      const theta_rad = theta * Math.PI / 180;
      const L = I / (A * Math.cos(theta_rad));
      return {
        result: { L: formatNumber(L) },
        steps: [
          `L = I / (A × cos(θ))`,
          `L = ${I} / (${A} × cos(${theta}°))`,
          `L = ${formatNumber(L)} cd/m²`
        ]
      };
    }
  }
  ,
  // Método de los lúmenes: cálculo de N (principal)
  {
    id: 'lumen-method-n',
    groupId: 'lumen-method-n',
    title: 'Número de luminarias (N)',
    isFundamental: true,
    formula: 'N = (E · A) / (F · CU · FM)',
    variables: [
      { symbol: 'E', label: 'Iluminancia deseada (E)', unit: 'lx' },
      { symbol: 'A', label: 'Área (A)', unit: 'm²' },
      { symbol: 'F', label: 'Flujo por luminaria (F)', unit: 'lm' },
      { symbol: 'CU', label: 'Coeficiente de utilización (CU)', unit: 'adim' },
      { symbol: 'FM', label: 'Factor de mantenimiento (FM)', unit: 'adim' }
    ],
    output: { symbol: 'N', label: 'Número de luminarias (N)', unit: 'ud' },
    resolve: ({ E, A, F, CU, FM }) => {
      const numE = parseFloat(E);
      const numA = parseFloat(A);
      const numF = parseFloat(F);
      const numCU = parseFloat(CU);
      const numFM = parseFloat(FM);
      const denom = numF * numCU * numFM;
      if (denom === 0) return { error: 'El denominador no puede ser cero.' };
      const N = (numE * numA) / denom;
      return { result: { N: formatNumber(N) }, steps: [`N = (${numE} lx · ${numA} m²) / (${numF} lm · ${numCU} · ${numFM}) = ${formatNumber(N)} ud`] };
    }
  },
  // Complementarias del método de los lúmenes
  {
    id: 'lumen-method-flujo',
    groupId: 'lumen-method-n',
    title: 'Flujo por luminaria (F)',
    isFundamental: false,
    formula: 'F = (E · A) / (N · CU · FM)',
    variables: [
      { symbol: 'E', label: 'Iluminancia deseada (E)', unit: 'lx' },
      { symbol: 'A', label: 'Área (A)', unit: 'm²' },
      { symbol: 'N', label: 'Número de luminarias (N)', unit: 'ud' },
      { symbol: 'CU', label: 'Coeficiente de utilización (CU)', unit: 'adim' },
      { symbol: 'FM', label: 'Factor de mantenimiento (FM)', unit: 'adim' }
    ],
    output: { symbol: 'F', label: 'Flujo por luminaria (F)', unit: 'lm' },
    resolve: ({ E, A, N, CU, FM }) => {
      const numE = parseFloat(E);
      const numA = parseFloat(A);
      const numN = parseFloat(N);
      const numCU = parseFloat(CU);
      const numFM = parseFloat(FM);
      const denom = numN * numCU * numFM;
      if (denom === 0) return { error: 'El denominador no puede ser cero.' };
      const F = (numE * numA) / denom;
      return { result: { F: formatNumber(F) }, steps: [`F = (${numE} lx · ${numA} m²) / (${numN} · ${numCU} · ${numFM}) = ${formatNumber(F)} lm`] };
    }
  },
  {
    id: 'lumen-method-cu',
    groupId: 'lumen-method-n',
    title: 'Coeficiente de utilización (CU)',
    isFundamental: false,
    formula: 'CU = (E · A) / (N · F · FM)',
    variables: [
      { symbol: 'E', label: 'Iluminancia deseada (E)', unit: 'lx' },
      { symbol: 'A', label: 'Área (A)', unit: 'm²' },
      { symbol: 'N', label: 'Número de luminarias (N)', unit: 'ud' },
      { symbol: 'F', label: 'Flujo por luminaria (F)', unit: 'lm' },
      { symbol: 'FM', label: 'Factor de mantenimiento (FM)', unit: 'adim' }
    ],
    output: { symbol: 'CU', label: 'Coeficiente de utilización (CU)', unit: 'adim' },
    resolve: ({ E, A, N, F, FM }) => {
      const numE = parseFloat(E);
      const numA = parseFloat(A);
      const numN = parseFloat(N);
      const numF = parseFloat(F);
      const numFM = parseFloat(FM);
      const denom = numN * numF * numFM;
      if (denom === 0) return { error: 'El denominador no puede ser cero.' };
      const CU = (numE * numA) / denom;
      return { result: { CU: formatNumber(CU) }, steps: [`CU = (${numE} lx · ${numA} m²) / (${numN} · ${numF} lm · ${numFM}) = ${formatNumber(CU)}`] };
    }
  },
  {
    id: 'lumen-method-fm',
    groupId: 'lumen-method-n',
    title: 'Factor de mantenimiento (FM)',
    isFundamental: false,
    formula: 'FM = (E · A) / (N · F · CU)',
    variables: [
      { symbol: 'E', label: 'Iluminancia deseada (E)', unit: 'lx' },
      { symbol: 'A', label: 'Área (A)', unit: 'm²' },
      { symbol: 'N', label: 'Número de luminarias (N)', unit: 'ud' },
      { symbol: 'F', label: 'Flujo por luminaria (F)', unit: 'lm' },
      { symbol: 'CU', label: 'Coeficiente de utilización (CU)', unit: 'adim' }
    ],
    output: { symbol: 'FM', label: 'Factor de mantenimiento (FM)', unit: 'adim' },
    resolve: ({ E, A, N, F, CU }) => {
      const numE = parseFloat(E);
      const numA = parseFloat(A);
      const numN = parseFloat(N);
      const numF = parseFloat(F);
      const numCU = parseFloat(CU);
      const denom = numN * numF * numCU;
      if (denom === 0) return { error: 'El denominador no puede ser cero.' };
      const FM = (numE * numA) / denom;
      return { result: { FM: formatNumber(FM) }, steps: [`FM = (${numE} lx · ${numA} m²) / (${numN} · ${numF} lm · ${numCU}) = ${formatNumber(FM)}`] };
    }
  },
  {
    id: 'lumen-method-e',
    groupId: 'lumen-method-n',
    title: 'Iluminancia objetivo (E)',
    isFundamental: false,
    formula: 'E = (N · F · CU · FM) / A',
    variables: [
      { symbol: 'N', label: 'Número de luminarias (N)', unit: 'ud' },
      { symbol: 'F', label: 'Flujo por luminaria (F)', unit: 'lm' },
      { symbol: 'CU', label: 'Coeficiente de utilización (CU)', unit: 'adim' },
      { symbol: 'FM', label: 'Factor de mantenimiento (FM)', unit: 'adim' },
      { symbol: 'A', label: 'Área (A)', unit: 'm²' }
    ],
    output: { symbol: 'E', label: 'Iluminancia (E)', unit: 'lx' },
    resolve: ({ N, F, CU, FM, A }) => {
      const numN = parseFloat(N);
      const numF = parseFloat(F);
      const numCU = parseFloat(CU);
      const numFM = parseFloat(FM);
      const numA = parseFloat(A);
      if (numA === 0) return { error: 'El área no puede ser cero.' };
      const E = (numN * numF * numCU * numFM) / numA;
      return { result: { E: formatNumber(E) }, steps: [`E = (${numN} · ${numF} lm · ${numCU} · ${numFM}) / ${numA} m² = ${formatNumber(E)} lx`] };
    }
  },
  {
    id: 'lumen-method-area',
    groupId: 'lumen-method-n',
    title: 'Área del local (A)',
    isFundamental: false,
    formula: 'A = (N · F · CU · FM) / E',
    variables: [
      { symbol: 'N', label: 'Número de luminarias (N)', unit: 'ud' },
      { symbol: 'F', label: 'Flujo por luminaria (F)', unit: 'lm' },
      { symbol: 'CU', label: 'Coeficiente de utilización (CU)', unit: 'adim' },
      { symbol: 'FM', label: 'Factor de mantenimiento (FM)', unit: 'adim' },
      { symbol: 'E', label: 'Iluminancia deseada (E)', unit: 'lx' }
    ],
    output: { symbol: 'A', label: 'Área (A)', unit: 'm²' },
    resolve: ({ N, F, CU, FM, E }) => {
      const numN = parseFloat(N);
      const numF = parseFloat(F);
      const numCU = parseFloat(CU);
      const numFM = parseFloat(FM);
      const numE = parseFloat(E);
      if (numE === 0) return { error: 'La iluminancia no puede ser cero.' };
      const A = (numN * numF * numCU * numFM) / numE;
      return { result: { A: formatNumber(A) }, steps: [`A = (${numN} · ${numF} lm · ${numCU} · ${numFM}) / ${numE} lx = ${formatNumber(A)} m²`] };
    }
  }
];
