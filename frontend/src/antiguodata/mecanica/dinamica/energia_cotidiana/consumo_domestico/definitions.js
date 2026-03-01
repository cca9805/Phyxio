import { formatNumber } from '../../../../../utils/formatNumber';

export const definitions = [
  // Calculadora 1: Energía consumida
  {
    id: 'energia-consumida-calcular',
    groupId: 'energia-consumida',
    title: 'Energía consumida (E = P × t)',
    formula: 'E = P  t',
    variables: [
      {
        symbol: 'P',
        label: 'Potencia del dispositivo',
        units: ['W', 'kW'],
        defaultUnit: 'W',
        defaultValue: 1000
      },
      {
        symbol: 't',
        label: 'Tiempo de uso',
        units: ['h', 'min'],
        defaultUnit: 'h',
        defaultValue: 3
      }
    ],
    output: {
      symbol: 'E',
      label: 'Energía consumida',
      unit: 'kWh'
    },
    resolve: ({ P, t }) => {
      const energiaWh = P * t;
      const energiaKWh = energiaWh / 1000;
      
      return {
        result: { E: formatNumber(energiaKWh) },
        steps: [
          `E = P  t`,
          `E = ${P} W  ${t} h = ${formatNumber(energiaWh)} Wh`,
          `E = ${formatNumber(energiaKWh)} kWh`
        ]
      };
    }
  },

  // Calculadora 2: Coste de electricidad
  {
    id: 'coste-electricidad-calcular',
    groupId: 'coste-electricidad',
    title: 'Coste de la electricidad',
    formula: 'Coste = E  Precio_{kWh}',
    variables: [
      {
        symbol: 'E',
        label: 'Energía consumida',
        units: ['kWh', 'Wh'],
        defaultUnit: 'kWh',
        defaultValue: 100
      },
      {
        symbol: 'Precio_{kWh}',
        label: 'Precio de la electricidad',
        units: ['€/kWh'],
        defaultUnit: '€/kWh',
        defaultValue: 0.15
      }
    ],
    output: {
      symbol: 'Coste',
      label: 'Coste total',
      unit: '€'
    },
    resolve: ({ E, Precio_kWh }) => {
      const coste = E * Precio_kWh;
      const costeAnual = coste * 12;
      
      return {
        result: { Coste: formatNumber(coste) },
        steps: [
          `Coste = E  Precio`,
          `Coste = ${E} kWh  ${Precio_kWh} €/kWh = ${formatNumber(coste)} €`,
          `Coste anual \\approx ${formatNumber(costeAnual)} €`
        ]
      };
    }
  },

  // Calculadora 3: Consumo en standby
  {
    id: 'consumo-standby-calcular',
    groupId: 'consumo-standby',
    title: 'Consumo fantasma (standby)',
    formula: 'E_{standby} = P_{standby}  24h  365 días  Precio',
    variables: [
      {
        symbol: 'P_{standby}',
        label: 'Potencia en standby',
        units: ['W'],
        defaultUnit: 'W',
        defaultValue: 10
      },
      {
        symbol: 'Precio',
        label: 'Precio electricidad',
        units: ['€/kWh'],
        defaultUnit: '€/kWh',
        defaultValue: 0.15
      }
    ],
    output: {
      symbol: 'Coste_anual',
      label: 'Coste anual en standby',
      unit: '€/año'
    },
    resolve: ({ P_standby, Precio }) => {
      const energiaAnualKWh = (P_standby * 24 * 365) / 1000;
      const costeAnual = energiaAnualKWh * Precio;
      const coste10anos = costeAnual * 10;
      
      return {
        result: { Coste_anual: formatNumber(costeAnual) },
        steps: [
          `E_{anual} = \\frac{${P_standby}  24  365}{1000} = ${formatNumber(energiaAnualKWh)} kWh/año`,
          `Coste anual = ${formatNumber(energiaAnualKWh)}  ${Precio} = ${formatNumber(costeAnual)} €/año`,
          `En 10 años:  ${formatNumber(coste10anos)} €`
        ]
      };
    }
  },

  // Calculadora 4: Consumo de calefacción
  {
    id: 'consumo-calefaccion-calcular',
    groupId: 'consumo-calefaccion',
    title: 'Consumo de calefacción',
    formula: 'E_{calefacción} = P  h_{día}  días_{temporada}',
    variables: [
      {
        symbol: 'P',
        label: 'Potencia de calefacción',
        units: ['W', 'kW'],
        defaultUnit: 'kW',
        defaultValue: 5
      },
      {
        symbol: 'h_{día}',
        label: 'Horas diarias de uso',
        units: ['h'],
        defaultUnit: 'h',
        defaultValue: 8
      },
      {
        symbol: 'días_{temporada}',
        label: 'Días de calefacción al año',
        units: ['días'],
        defaultUnit: 'días',
        defaultValue: 150
      },
      {
        symbol: 'Precio',
        label: 'Precio energía',
        units: ['€/kWh', '€/m³ (gas)'],
        defaultUnit: '€/kWh',
        defaultValue: 0.15
      }
    ],
    output: {
      symbol: 'E_temporada',
      label: 'Energía en temporada',
      unit: 'kWh'
    },
    resolve: ({ P, h_dia, dias_temporada, Precio }) => {
      const energiaTemporadaKWh = P * h_dia * dias_temporada;
      const costeTemporada = energiaTemporadaKWh * Precio;
      
      return {
        result: { E_temporada: formatNumber(energiaTemporadaKWh) },
        steps: [
          `E_{temporada} = P  h_{día}  días`,
          `E_{temporada} = ${P} kW  ${h_dia} h  ${dias_temporada} días = ${formatNumber(energiaTemporadaKWh)} kWh`,
          `Coste:  ${formatNumber(costeTemporada)} €/temporada`
        ]
      };
    }
  },

  // Calculadora 5: Ahorro por reducción de temperatura
  {
    id: 'ahorro-temperatura-calcular',
    groupId: 'ahorro-temperatura',
    title: 'Ahorro al bajar la temperatura',
    formula: 'Ahorro = Coste_{actual}  7\\%  ΔT',
    variables: [
      {
        symbol: 'Coste_{actual}',
        label: 'Coste actual calefacción',
        units: ['€/año'],
        defaultUnit: '€/año',
        defaultValue: 1000
      },
      {
        symbol: 'ΔT',
        label: 'Reducción de temperatura',
        units: ['°C'],
        defaultUnit: '°C',
        defaultValue: 2
      }
    ],
    output: {
      symbol: 'Ahorro',
      label: 'Ahorro anual',
      unit: '€/año'
    },
    resolve: ({ Coste_actual, DeltaT }) => {
      const porcentajeAhorro = 7 * DeltaT;
      const ahorroAnual = Coste_actual * (porcentajeAhorro / 100);
      const ahorro10anos = ahorroAnual * 10;
      
      return {
        result: { Ahorro: formatNumber(ahorroAnual) },
        steps: [
          `Ahorro = 7\\%  \\Delta T  Coste actual`,
          `Ahorro = ${porcentajeAhorro}\\%  ${Coste_actual} € = ${formatNumber(ahorroAnual)} €/año`,
          `En 10 años:  ${formatNumber(ahorro10anos)} €`
        ]
      };
    }
  }
];
