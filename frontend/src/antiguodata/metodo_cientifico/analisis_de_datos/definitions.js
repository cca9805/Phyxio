import { formatNumber } from '../../../utils/formatNumber.js';

export const definitions = [
  {
    id: 'pendiente-regresion',
    groupId: 'pendiente-regresion',
    title: 'Pendiente de Regresión Lineal',
    isFundamental: true,
    formula: String.raw`m = \frac{n\sum x_i y_i - \sum x_i \sum y_i}{n\sum x_i^2 - (\sum x_i)^2}`,
    where: [
      { symbol: 'n', description: 'Número de puntos de datos' },
      { symbol: 'x_i, y_i', description: 'Valores individuales de las variables x e y' },
      { symbol: '\sum', description: 'Operador de suma sobre los datos' },
      { symbol: 'm', description: 'Pendiente de la recta de mejor ajuste' }
    ],
    variables: [
      { symbol: 'valoresX', label: 'Valores de x (separados por comas)', unit: '', description: 'Ejemplo: 1, 2, 3, 4, 5' },
      { symbol: 'valoresY', label: 'Valores de y (separados por comas)', unit: '', description: 'Ejemplo: 3.2, 5.9, 8.7, 11.2, 13.8' }
    ],
    output: { symbol: 'm', label: 'Pendiente (m)', unit: '' },
    resolve: ({ valoresX, valoresY }) => {
      const xArray = valoresX.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
      const yArray = valoresY.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
      const n = Math.min(xArray.length, yArray.length);
      
      if (n < 2) {
        return {
          result: { m: 'Error' },
          steps: ['Se necesitan al menos 2 puntos para calcular la pendiente.']
        };
      }
      
      const sumX = xArray.slice(0, n).reduce((acc, val) => acc + val, 0);
      const sumY = yArray.slice(0, n).reduce((acc, val) => acc + val, 0);
      const sumXY = xArray.slice(0, n).reduce((acc, val, i) => acc + val * yArray[i], 0);
      const sumX2 = xArray.slice(0, n).reduce((acc, val) => acc + val * val, 0);
      
      const denominador = n * sumX2 - sumX * sumX;
      if (Math.abs(denominador) < 1e-10) {
        return {
          result: { m: 'Error' },
          steps: ['Los datos no permiten calcular la pendiente (división por cero).']
        };
      }
      
      const m = (n * sumXY - sumX * sumY) / denominador;
      
      return {
        result: { m: formatNumber(m) },
        steps: [
          `n = ${n} puntos`,
          `Σx = ${formatNumber(sumX)}`,
          `Σy = ${formatNumber(sumY)}`,
          `Σxy = ${formatNumber(sumXY)}`,
          `Σx² = ${formatNumber(sumX2)}`,
          `m = (${n}×${formatNumber(sumXY)} - ${formatNumber(sumX)}×${formatNumber(sumY)}) / (${n}×${formatNumber(sumX2)} - ${formatNumber(sumX)}²)`,
          `m = ${formatNumber(m)}`
        ]
      };
    }
  },
  {
    id: 'ordenada-regresion',
    groupId: 'ordenada-regresion',
    title: 'Ordenada al Origen de Regresión Lineal',
    isFundamental: true,
    formula: String.raw`b = \frac{\sum y_i - m \sum x_i}{n}`,
    where: [
      { symbol: 'n', description: 'Número de puntos de datos' },
      { symbol: 'x_i, y_i', description: 'Valores individuales de las variables x e y' },
      { symbol: 'm', description: 'Pendiente previamente calculada' },
      { symbol: 'b', description: 'Ordenada al origen (intersección con eje y)' }
    ],
    variables: [
      { symbol: 'valoresX', label: 'Valores de x (separados por comas)', unit: '', description: 'Ejemplo: 1, 2, 3, 4, 5' },
      { symbol: 'valoresY', label: 'Valores de y (separados por comas)', unit: '', description: 'Ejemplo: 3.2, 5.9, 8.7, 11.2, 13.8' },
      { symbol: 'm', label: 'Pendiente (m)', unit: '' }
    ],
    output: { symbol: 'b', label: 'Ordenada al origen (b)', unit: '' },
    resolve: ({ valoresX, valoresY, m }) => {
      const xArray = valoresX.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
      const yArray = valoresY.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
      const n = Math.min(xArray.length, yArray.length);
      const m_val = parseFloat(m);
      
      if (n < 1) {
        return {
          result: { b: 'Error' },
          steps: ['Se necesitan al menos 1 punto.']
        };
      }
      
      const sumX = xArray.slice(0, n).reduce((acc, val) => acc + val, 0);
      const sumY = yArray.slice(0, n).reduce((acc, val) => acc + val, 0);
      
      const b = (sumY - m_val * sumX) / n;
      
      return {
        result: { b: formatNumber(b) },
        steps: [
          `n = ${n} puntos`,
          `Σx = ${formatNumber(sumX)}`,
          `Σy = ${formatNumber(sumY)}`,
          `m = ${formatNumber(m_val)}`,
          `b = (${formatNumber(sumY)} - ${formatNumber(m_val)}×${formatNumber(sumX)}) / ${n}`,
          `b = ${formatNumber(b)}`
        ]
      };
    }
  }
];
