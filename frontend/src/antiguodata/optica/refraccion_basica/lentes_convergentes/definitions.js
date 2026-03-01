import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'lentes-conjugados-basico',
    groupId: 'lentes-convergentes',
    title: 'Imagen con ecuación de lentes',
    formula: '1/f = 1/d_o + 1/d_i',
    description: 'Calcula la distancia imagen y la magnificación a partir de f y d_o (signo convencional: f>0 para convergente).',
    variables: [
      { symbol: 'f', label: 'Distancia focal (f)', unit: 'cm', example: '10' },
      { symbol: 'do', label: 'Distancia objeto (d_o)', unit: 'cm', example: '30' }
    ],
    output: [
      { symbol: 'di', label: 'Distancia imagen (d_i)', unit: 'cm' },
      { symbol: 'm', label: 'Aumento (m)', unit: '' },
      { symbol: 'tipo', label: 'Tipo de imagen', unit: '' },
      { symbol: 'orientacion', label: 'Orientación', unit: '' },
      { symbol: 'tamano', label: 'Tamaño relativo', unit: '' }
    ],
    resolve: ({ f, do: d_o }) => {
      const fNum = parseFloat(f);
      const doNum = parseFloat(d_o);
      if (!isFinite(fNum) || !isFinite(doNum)) return { error: 'Ingresa valores numéricos válidos.' };
      if (doNum === 0) return { error: 'La distancia del objeto no puede ser cero.' };
      const inv_di = (1 / fNum) - (1 / doNum);
      if (inv_di === 0) return { error: 'Configuración no válida (1/f - 1/d_o = 0).' };
      const di = 1 / inv_di; // Puede ser negativa (imagen virtual)
      const m = -di / doNum;

      const tipo = di > 0 ? 'Real' : 'Virtual';
      const orientacion = m < 0 ? 'Invertida' : 'Derecha';
      const tamano = Math.abs(m) > 1 ? 'Aumentada' : (Math.abs(m) < 1 ? 'Reducida' : 'Igual');

      const steps = [
        `\\frac{1}{d_i} \\;=\\; \\frac{1}{${formatNumber(fNum)}} - \\frac{1}{${formatNumber(doNum)}}`,
        `d_i \\;=\\; \\frac{1}{${formatNumber(inv_di)}} \\;=\\; ${formatNumber(di)}\\; \\text{cm}`,
        `m \\;=\\; - \\frac{d_i}{d_o} \\;=\\; - \\frac{${formatNumber(di)}}{${formatNumber(doNum)}} \\;=\\; ${formatNumber(m)}`,
        `\\text{Clasificación: } ${tipo}, ${orientacion}, ${tamano}`
      ];

      return {
        result: {
          di: formatNumber(di),
          m: formatNumber(m),
          tipo,
          orientacion,
          tamano
        },
        steps
      };
    }
  }
];
