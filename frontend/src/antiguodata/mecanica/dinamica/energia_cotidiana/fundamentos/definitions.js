import { formatNumber } from '../../../../../utils/formatNumber';

export const definitions = [
  // Calculadora 1: Eficiencia Energética
  {
    id: 'eficiencia-energetica-calcular',
    groupId: 'eficiencia-energetica',
    title: 'Eficiencia Energética (η = E_útil / E_consumida × 100%)',
    formula: '\\eta = \\frac{E_{útil}}{E_{consumida}}  100\\%',
    variables: [
      {
        symbol: 'E_util',
        label: 'Energía útil (E_útil)',
        units: ['J', 'kJ', 'kWh', 'W'],
        defaultUnit: 'W'
      },
      {
        symbol: 'E_consumida',
        label: 'Energía consumida (E_consumida)',
        units: ['J', 'kJ', 'kWh', 'W'],
        defaultUnit: 'W'
      }
    ],
    output: {
      symbol: 'eta',
      label: 'Eficiencia (η)',
      unit: '%'
    },
    resolve: ({ E_util, E_consumida }) => {
      if (E_consumida === 0) {
        throw new Error('La energía consumida no puede ser cero');
      }
      const eficiencia = (E_util / E_consumida) * 100;
      const perdidas = 100 - eficiencia;
      const interpretacion = eficiencia > 80 ? 'Muy eficiente' : 
                            eficiencia > 50 ? 'Eficiencia media' : 
                            'Baja eficiencia, muchas pérdidas';
      
      return {
        result: { eta: formatNumber(eficiencia) },
        steps: [
          `η = (E_útil / E_consumida) × 100%`,
          `η = (${E_util} / ${E_consumida}) × 100% = ${formatNumber(eficiencia)}%`,
          `Pérdidas = ${formatNumber(perdidas)}%`,
          `Interpretación: ${interpretacion}`
        ]
      };
    }
  },

  // Calculadora 2: Ahorro con Bombilla LED
  {
    id: 'ahorro-bombilla-led-calcular',
    groupId: 'ahorro-bombilla-led',
    title: 'Ahorro al cambiar bombilla incandescente por LED',
    formula: 'Ahorro = (P_{incandescente} - P_{LED})  h  días  precio',
    variables: [
      {
        symbol: 'P_incandescente',
        label: 'Potencia bombilla incandescente',
        units: ['W'],
        defaultUnit: 'W',
        defaultValue: 60
      },
      {
        symbol: 'P_LED',
        label: 'Potencia bombilla LED equivalente',
        units: ['W'],
        defaultUnit: 'W',
        defaultValue: 8
      },
      {
        symbol: 'h',
        label: 'Horas de uso diario',
        units: ['h'],
        defaultUnit: 'h',
        defaultValue: 5
      },
      {
        symbol: 'dias',
        label: 'Días al año',
        units: ['días'],
        defaultUnit: 'días',
        defaultValue: 365
      },
      {
        symbol: 'precio',
        label: 'Precio electricidad',
        units: ['€/kWh'],
        defaultUnit: '€/kWh',
        defaultValue: 0.15
      }
    ],
    output: {
      symbol: 'Ahorro',
      label: 'Ahorro anual',
      unit: '€/año'
    },
    resolve: ({ P_incandescente, P_LED, h, dias, precio }) => {
      const diferenciaPotencia = P_incandescente - P_LED; // W
      const energiaAhorradaAnual = (diferenciaPotencia * h * dias) / 1000; // kWh
      const ahorroAnual = energiaAhorradaAnual * precio; // €
      const reduccionPorcentual = (diferenciaPotencia / P_incandescente) * 100;
      
      return {
        result: { Ahorro: formatNumber(ahorroAnual) },
        steps: [
          `Diferencia de potencia = ${P_incandescente} - ${P_LED} = ${diferenciaPotencia} W`,
          `Energía ahorrada anual = (${diferenciaPotencia} × ${h} × ${dias}) / 1000 = ${formatNumber(energiaAhorradaAnual)} kWh`,
          `Ahorro anual = ${formatNumber(energiaAhorradaAnual)} × ${precio} = ${formatNumber(ahorroAnual)} €/año`,
          `Reducción del consumo: ${formatNumber(reduccionPorcentual)}%`
        ]
      };
    }
  }
];
