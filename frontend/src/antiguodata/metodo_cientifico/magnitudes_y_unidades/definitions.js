import { formatNumber } from '../../../utils/formatNumber.js';

export const definitions = [
  {
    id: 'conversion-longitud',
    groupId: 'conversion-longitud',
    title: 'Conversión de Longitud',
    isFundamental: true,
    formula: String.raw`L_2 = L_1 \times \frac{\text{factor de conversión}}{1}`,
    where: [
      { symbol: 'L_1', description: 'Valor inicial en unidades de origen' },
      { symbol: 'L_2', description: 'Valor convertido en unidades destino' },
      { symbol: 'factor de conversión', description: 'Relación entre unidades (igual a 1 como fracción equivalente)' }
    ],
    variables: [
      { symbol: 'valor', label: 'Valor a convertir', unit: '' },
      { symbol: 'factor', label: 'Factor de conversión', unit: '', description: 'Ejemplo: 1000 para km a m, 0.001 para m a km' }
    ],
    output: { symbol: 'resultado', label: 'Valor convertido', unit: '' },
    resolve: ({ valor, factor }) => {
      const valor_val = parseFloat(valor);
      const factor_val = parseFloat(factor);
      const resultado = valor_val * factor_val;
      return {
        result: { resultado: formatNumber(resultado) },
        steps: [
          `Valor convertido = Valor × Factor`,
          `Valor convertido = ${valor_val} × ${factor_val}`,
          `Valor convertido = ${formatNumber(resultado)}`
        ]
      };
    }
  },
  {
    id: 'conversion-velocidad',
    groupId: 'conversion-velocidad',
    title: 'Conversión de Velocidad',
    isFundamental: true,
    formula: String.raw`v_2 = v_1 \times \frac{\text{factor 1}}{1} \times \frac{1}{\text{factor 2}}`,
    where: [
      { symbol: 'v_1', description: 'Velocidad inicial (km/h o m/s)' },
      { symbol: 'v_2', description: 'Velocidad convertida (m/s o km/h)' },
      { symbol: 'factor 1', description: 'Conversión de unidades de distancia (km↔m)' },
      { symbol: 'factor 2', description: 'Conversión de unidades de tiempo (h↔s)' }
    ],
    variables: [
      { symbol: 'velocidad', label: 'Velocidad a convertir (km/h o m/s)', unit: '' },
      { symbol: 'tipo', label: 'Tipo de conversión', unit: '', description: 'kmh_a_ms o ms_a_kmh' }
    ],
    output: { symbol: 'velocidadConvertida', label: 'Velocidad convertida', unit: '' },
    resolve: ({ velocidad, tipo }) => {
      const v = parseFloat(velocidad);
      let resultado;
      let pasos;
      
      if (tipo === 'kmh_a_ms' || tipo === 'km/h a m/s') {
        resultado = v * (1000 / 3600); // km/h a m/s
        pasos = [
          `v (m/s) = v (km/h) × (1000 m / 1 km) × (1 h / 3600 s)`,
          `v (m/s) = ${v} × (1000 / 3600)`,
          `v (m/s) = ${formatNumber(resultado)} m/s`
        ];
      } else {
        resultado = v * (3600 / 1000); // m/s a km/h
        pasos = [
          `v (km/h) = v (m/s) × (3600 s / 1 h) × (1 km / 1000 m)`,
          `v (km/h) = ${v} × (3600 / 1000)`,
          `v (km/h) = ${formatNumber(resultado)} km/h`
        ];
      }
      
      return {
        result: { velocidadConvertida: formatNumber(resultado) },
        steps: pasos
      };
    }
  },
  {
    id: 'notacion-cientifica',
    groupId: 'notacion-cientifica',
    title: 'Notación Científica',
    isFundamental: true,
    formula: String.raw`a \times 10^n`,
    where: [
      { symbol: 'a', description: 'Mantisa (1 ≤ |a| < 10)' },
      { symbol: 'n', description: 'Exponente entero (positivo, negativo o cero)' }
    ],
    variables: [
      { symbol: 'numero', label: 'Número a convertir', unit: '' }
    ],
    output: { symbol: 'notacion', label: 'Notación científica', unit: '' },
    resolve: ({ numero }) => {
      const num = parseFloat(numero);
      if (isNaN(num)) {
        return {
          result: { notacion: 'Error' },
          steps: ['Por favor ingresa un número válido.']
        };
      }
      
      const exponente = Math.floor(Math.log10(Math.abs(num)));
      const mantisa = num / Math.pow(10, exponente);
      
      return {
        result: { notacion: `${formatNumber(mantisa)} × 10^${exponente}` },
        steps: [
          `Número: ${num}`,
          `Exponente: ${exponente}`,
          `Mantisa: ${num} / 10^${exponente} = ${formatNumber(mantisa)}`,
          `Resultado: ${formatNumber(mantisa)} × 10^${exponente}`
        ]
      };
    }
  }
];
