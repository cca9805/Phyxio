import { formatNumber } from '../../../utils/formatNumber.js';

export const definitions = [
  {
    id: 'error-absoluto',
    groupId: 'error-absoluto',
    title: 'Error Absoluto',
    isFundamental: true,
    formula: String.raw`\Delta x = |x_{\text{medido}} - x_{\text{real}}|`,
    where: [
      { symbol: 'x_{medido}', description: 'Valor obtenido en la medición' },
      { symbol: 'x_{real}', description: 'Valor real o de referencia' },
      { symbol: '\Delta x', description: 'Error absoluto (mismas unidades que la magnitud)' }
    ],
    variables: [
      { symbol: 'xMedido', label: 'Valor medido (x_medido)', unit: '' },
      { symbol: 'xReal', label: 'Valor real (x_real)', unit: '' }
    ],
    output: { symbol: 'deltaX', label: 'Error absoluto (Δx)', unit: '' },
    resolve: ({ xMedido, xReal }) => {
      const xMed = parseFloat(xMedido);
      const xReal_val = parseFloat(xReal);
      const deltaX = Math.abs(xMed - xReal_val);
      return {
        result: { deltaX: formatNumber(deltaX) },
        steps: [
          `Δx = |x_medido - x_real|`,
          `Δx = |${xMed} - ${xReal_val}|`,
          `Δx = ${formatNumber(deltaX)}`
        ]
      };
    }
  },
  {
    id: 'error-relativo',
    groupId: 'error-relativo',
    title: 'Error Relativo',
    isFundamental: true,
    formula: String.raw`\epsilon = \frac{\Delta x}{x_{\text{real}}}`,
    where: [
      { symbol: '\Delta x', description: 'Error absoluto' },
      { symbol: 'x_{real}', description: 'Valor real o de referencia' },
      { symbol: '\epsilon', description: 'Error relativo (adimensional)' }
    ],
    variables: [
      { symbol: 'deltaX', label: 'Error absoluto (Δx)', unit: '' },
      { symbol: 'xReal', label: 'Valor real (x_real)', unit: '' }
    ],
    output: { symbol: 'epsilon', label: 'Error relativo (ε)', unit: '' },
    resolve: ({ deltaX, xReal }) => {
      const deltaX_val = parseFloat(deltaX);
      const xReal_val = parseFloat(xReal);
      const epsilon = deltaX_val / xReal_val;
      return {
        result: { epsilon: formatNumber(epsilon) },
        steps: [
          `ε = Δx / x_real`,
          `ε = ${deltaX_val} / ${xReal_val}`,
          `ε = ${formatNumber(epsilon)}`
        ]
      };
    }
  },
  {
    id: 'error-relativo-porcentual',
    groupId: 'error-relativo-porcentual',
    title: 'Error Relativo Porcentual',
    isFundamental: false,
    formula: String.raw`\epsilon_{\%} = \frac{\Delta x}{x_{\text{real}}} \times 100\%`,
    where: [
      { symbol: '\Delta x', description: 'Error absoluto' },
      { symbol: 'x_{real}', description: 'Valor real o de referencia' },
      { symbol: '\epsilon_{\%}', description: 'Error relativo expresado en porcentaje' }
    ],
    variables: [
      { symbol: 'deltaX', label: 'Error absoluto (Δx)', unit: '' },
      { symbol: 'xReal', label: 'Valor real (x_real)', unit: '' }
    ],
    output: { symbol: 'epsilonPorcentual', label: 'Error relativo porcentual (ε%)', unit: '%' },
    resolve: ({ deltaX, xReal }) => {
      const deltaX_val = parseFloat(deltaX);
      const xReal_val = parseFloat(xReal);
      const epsilon = (deltaX_val / xReal_val) * 100;
      return {
        result: { epsilonPorcentual: formatNumber(epsilon) },
        steps: [
          `ε% = (Δx / x_real) × 100%`,
          `ε% = (${deltaX_val} / ${xReal_val}) × 100%`,
          `ε% = ${formatNumber(epsilon)}%`
        ]
      };
    }
  },
  {
    id: 'valor-medio',
    groupId: 'valor-medio',
    title: 'Valor Medio',
    isFundamental: true,
    formula: String.raw`\bar{x} = \frac{x_1 + x_2 + ... + x_n}{n}`,
    where: [
      { symbol: 'x_i', description: 'Valores individuales medidos' },
      { symbol: 'n', description: 'Número total de medidas' },
      { symbol: '\bar{x}', description: 'Promedio (media aritmética) de los valores' }
    ],
    variables: [
      { symbol: 'valores', label: 'Valores (separados por comas)', unit: '', description: 'Ejemplo: 2.3, 2.5, 2.4, 2.6, 2.2' }
    ],
    output: { symbol: 'xMedia', label: 'Valor medio (x̄)', unit: '' },
    resolve: ({ valores }) => {
      const valoresArray = valores.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
      const n = valoresArray.length;
      const suma = valoresArray.reduce((acc, val) => acc + val, 0);
      const xMedia = suma / n;
      return {
        result: { xMedia: formatNumber(xMedia) },
        steps: [
          `n = ${n} medidas`,
          `Suma = ${valoresArray.join(' + ')} = ${formatNumber(suma)}`,
          `x̄ = ${formatNumber(suma)} / ${n}`,
          `x̄ = ${formatNumber(xMedia)}`
        ]
      };
    }
  },
  {
    id: 'desviacion-estandar',
    groupId: 'desviacion-estandar',
    title: 'Desviación Estándar',
    isFundamental: true,
    formula: String.raw`\sigma = \sqrt{\frac{\sum_{i=1}^{n}(x_i - \bar{x})^2}{n-1}}`,
    where: [
      { symbol: 'x_i', description: 'Valores individuales medidos' },
      { symbol: '\bar{x}', description: 'Valor medio de las medidas' },
      { symbol: 'n', description: 'Número de medidas (se usa n-1 en muestras)' },
      { symbol: '\sigma', description: 'Desviación estándar muestral' }
    ],
    variables: [
      { symbol: 'valores', label: 'Valores (separados por comas)', unit: '', description: 'Ejemplo: 2.3, 2.5, 2.4, 2.6, 2.2' }
    ],
    output: { symbol: 'sigma', label: 'Desviación estándar (σ)', unit: '' },
    resolve: ({ valores }) => {
      const valoresArray = valores.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
      const n = valoresArray.length;
      const suma = valoresArray.reduce((acc, val) => acc + val, 0);
      const xMedia = suma / n;
      const sumaDiferencias = valoresArray.reduce((acc, val) => acc + Math.pow(val - xMedia, 2), 0);
      const sigma = Math.sqrt(sumaDiferencias / (n - 1));
      return {
        result: { sigma: formatNumber(sigma) },
        steps: [
          `n = ${n} medidas`,
          `x̄ = ${formatNumber(xMedia)}`,
          `Suma de diferencias al cuadrado = ${formatNumber(sumaDiferencias)}`,
          `σ = √(${formatNumber(sumaDiferencias)} / ${n-1})`,
          `σ = ${formatNumber(sigma)}`
        ]
      };
    }
  },
  {
    id: 'incertidumbre-promedio',
    groupId: 'incertidumbre-promedio',
    title: 'Incertidumbre del Promedio',
    isFundamental: false,
    formula: String.raw`\Delta \bar{x} = \frac{\sigma}{\sqrt{n}}`,
    where: [
      { symbol: '\sigma', description: 'Desviación estándar de las medidas' },
      { symbol: 'n', description: 'Número de medidas realizadas' },
      { symbol: '\Delta \bar{x}', description: 'Incertidumbre asociada al valor medio' }
    ],
    variables: [
      { symbol: 'sigma', label: 'Desviación estándar (σ)', unit: '' },
      { symbol: 'n', label: 'Número de medidas (n)', unit: '' }
    ],
    output: { symbol: 'deltaXMedia', label: 'Incertidumbre del promedio (Δx̄)', unit: '' },
    resolve: ({ sigma, n }) => {
      const sigma_val = parseFloat(sigma);
      const n_val = parseFloat(n);
      const deltaXMedia = sigma_val / Math.sqrt(n_val);
      return {
        result: { deltaXMedia: formatNumber(deltaXMedia) },
        steps: [
          `Δx̄ = σ / √n`,
          `Δx̄ = ${sigma_val} / √${n_val}`,
          `Δx̄ = ${formatNumber(deltaXMedia)}`
        ]
      };
    }
  },
  {
    id: 'propagacion-suma-resta',
    groupId: 'propagacion-suma-resta',
    title: 'Propagación de Errores (Suma/Resta)',
    isFundamental: true,
    formula: String.raw`\Delta z = \sqrt{(\Delta x)^2 + (\Delta y)^2}`,
    where: [
      { symbol: '\Delta x', description: 'Incertidumbre de la magnitud x' },
      { symbol: '\Delta y', description: 'Incertidumbre de la magnitud y' },
      { symbol: '\Delta z', description: 'Incertidumbre resultante de z = x ± y' }
    ],
    variables: [
      { symbol: 'deltaX', label: 'Incertidumbre de x (Δx)', unit: '' },
      { symbol: 'deltaY', label: 'Incertidumbre de y (Δy)', unit: '' }
    ],
    output: { symbol: 'deltaZ', label: 'Incertidumbre de z (Δz)', unit: '' },
    resolve: ({ deltaX, deltaY }) => {
      const deltaX_val = parseFloat(deltaX);
      const deltaY_val = parseFloat(deltaY);
      const deltaZ = Math.sqrt(deltaX_val ** 2 + deltaY_val ** 2);
      return {
        result: { deltaZ: formatNumber(deltaZ) },
        steps: [
          `Δz = √[(Δx)² + (Δy)²]`,
          `Δz = √[(${deltaX_val})² + (${deltaY_val})²]`,
          `Δz = √[${formatNumber(deltaX_val ** 2)} + ${formatNumber(deltaY_val ** 2)}]`,
          `Δz = ${formatNumber(deltaZ)}`
        ]
      };
    }
  },
  {
    id: 'propagacion-multiplicacion-division',
    groupId: 'propagacion-multiplicacion-division',
    title: 'Propagación de Errores (Multiplicación/División)',
    isFundamental: true,
    formula: String.raw`\frac{\Delta z}{z} = \sqrt{\left(\frac{\Delta x}{x}\right)^2 + \left(\frac{\Delta y}{y}\right)^2}`,
    where: [
      { symbol: 'x', description: 'Valor de la magnitud x' },
      { symbol: 'y', description: 'Valor de la magnitud y' },
      { symbol: '\Delta x', description: 'Incertidumbre de x' },
      { symbol: '\Delta y', description: 'Incertidumbre de y' },
      { symbol: '\Delta z/z', description: 'Error relativo de z = x · y o z = x / y' }
    ],
    variables: [
      { symbol: 'x', label: 'Valor de x', unit: '' },
      { symbol: 'deltaX', label: 'Incertidumbre de x (Δx)', unit: '' },
      { symbol: 'y', label: 'Valor de y', unit: '' },
      { symbol: 'deltaY', label: 'Incertidumbre de y (Δy)', unit: '' }
    ],
    output: { symbol: 'deltaZRelativo', label: 'Error relativo de z (Δz/z)', unit: '' },
    resolve: ({ x, deltaX, y, deltaY }) => {
      const x_val = parseFloat(x);
      const deltaX_val = parseFloat(deltaX);
      const y_val = parseFloat(y);
      const deltaY_val = parseFloat(deltaY);
      const errorRelX = deltaX_val / x_val;
      const errorRelY = deltaY_val / y_val;
      const deltaZRelativo = Math.sqrt(errorRelX ** 2 + errorRelY ** 2);
      return {
        result: { deltaZRelativo: formatNumber(deltaZRelativo) },
        steps: [
          `Δz/z = √[(Δx/x)² + (Δy/y)²]`,
          `Δx/x = ${deltaX_val} / ${x_val} = ${formatNumber(errorRelX)}`,
          `Δy/y = ${deltaY_val} / ${y_val} = ${formatNumber(errorRelY)}`,
          `Δz/z = √[${formatNumber(errorRelX ** 2)} + ${formatNumber(errorRelY ** 2)}]`,
          `Δz/z = ${formatNumber(deltaZRelativo)}`
        ]
      };
    }
  },
  {
    id: 'propagacion-potencias',
    groupId: 'propagacion-potencias',
    title: 'Propagación de Errores (Potencias)',
    isFundamental: false,
    formula: String.raw`\frac{\Delta z}{z} = |n| \frac{\Delta x}{x}`,
    where: [
      { symbol: 'n', description: 'Exponente de la potencia aplicada a x' },
      { symbol: 'x', description: 'Valor de la magnitud base' },
      { symbol: '\Delta x', description: 'Incertidumbre de la magnitud base' },
      { symbol: '\Delta z/z', description: 'Error relativo de z = x^n' }
    ],
    variables: [
      { symbol: 'n', label: 'Exponente (n)', unit: '' },
      { symbol: 'x', label: 'Valor de x', unit: '' },
      { symbol: 'deltaX', label: 'Incertidumbre de x (Δx)', unit: '' }
    ],
    output: { symbol: 'deltaZRelativo', label: 'Error relativo de z (Δz/z)', unit: '' },
    resolve: ({ n, x, deltaX }) => {
      const n_val = parseFloat(n);
      const x_val = parseFloat(x);
      const deltaX_val = parseFloat(deltaX);
      const errorRelX = deltaX_val / x_val;
      const deltaZRelativo = Math.abs(n_val) * errorRelX;
      return {
        result: { deltaZRelativo: formatNumber(deltaZRelativo) },
        steps: [
          `Δz/z = |n| × (Δx/x)`,
          `Δx/x = ${deltaX_val} / ${x_val} = ${formatNumber(errorRelX)}`,
          `Δz/z = |${n_val}| × ${formatNumber(errorRelX)}`,
          `Δz/z = ${formatNumber(deltaZRelativo)}`
        ]
      };
    }
  }
];
