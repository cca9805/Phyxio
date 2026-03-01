import { formatNumber } from '../../../../../utils/formatNumber';

export const definitions = [
  // Calculadora 1: Emisiones de transporte
  {
    id: 'emisiones-transporte-calcular',
    groupId: 'emisiones-transporte',
    title: 'Emisiones de CO₂ del transporte',
    formula: 'Emisiones = Distancia  Factor_{emisión}',
    variables: [
      {
        symbol: 'Distancia',
        label: 'Distancia recorrida',
        units: ['km'],
        defaultUnit: 'km',
        defaultValue: 100
      },
      {
        symbol: 'Factor_{emisión}',
        label: 'Factor de emisión',
        units: ['g CO₂/km'],
        defaultUnit: 'g CO₂/km',
        defaultValue: 130,
        options: [
          { label: '🚶 Andando / Bicicleta', value: 0 },
          { label: '🚄 Tren eléctrico', value: 14 },
          { label: '🚌 Autobús urbano', value: 68 },
          { label: '🚗 Coche eléctrico', value: 60 },
          { label: '🏍️ Moto (125cc)', value: 72 },
          { label: '🚗 Coche gasolina', value: 130 },
          { label: '🚗 Coche diésel', value: 120 },
          { label: '🚙 SUV gasolina', value: 180 },
          { label: '✈️ Avión (vuelo corto)', value: 285 },
          { label: '✈️ Avión (vuelo largo)', value: 150 }
        ]
      },
      {
        symbol: 'Días_{año}',
        label: 'Días al año (opcional)',
        units: ['días'],
        defaultUnit: 'días',
        defaultValue: 220
      }
    ],
    output: {
      symbol: 'Emisiones',
      label: 'Emisiones por viaje',
      unit: 'kg CO₂'
    },
    resolve: ({ Distancia, Factor_emision, Dias_ano }) => {
      const emisionesPorViaje = (Distancia * Factor_emision) / 1000;
      const emisionesAnuales = emisionesPorViaje * Dias_ano;
      
      return {
        result: { Emisiones: formatNumber(emisionesPorViaje) },
        steps: [
          `Emisiones = Distancia × Factor`,
          `Emisiones = ${Distancia} km × ${Factor_emision} g/km = ${formatNumber(emisionesPorViaje)} kg CO₂`,
          `Anual (${Dias_ano} días): ${formatNumber(emisionesAnuales)} kg CO₂`
        ]
      };
    }
  },

  // Calculadora 2: Comparación de transportes
  {
    id: 'comparacion-transporte-calcular',
    groupId: 'comparacion-transporte',
    title: 'Comparación de medios de transporte',
    formula: 'Comparación: Tiempo, Coste, CO₂',
    variables: [
      {
        symbol: 'Distancia',
        label: 'Distancia del trayecto',
        units: ['km'],
        defaultUnit: 'km',
        defaultValue: 50
      },
      {
        symbol: 'Transporte_A',
        label: 'Tipo de transporte A',
        units: ['tipo'],
        defaultUnit: 'tipo',
        defaultValue: 'coche_gasolina',
        options: [
          { label: '🚗 Coche gasolina', value: 'coche_gasolina' },
          { label: '🚗 Coche eléctrico', value: 'coche_electrico' },
          { label: '🚄 Tren', value: 'tren' },
          { label: '🚌 Autobús', value: 'autobus' },
          { label: '✈️ Avión', value: 'avion' }
        ]
      },
      {
        symbol: 'Transporte_B',
        label: 'Tipo de transporte B',
        units: ['tipo'],
        defaultUnit: 'tipo',
        defaultValue: 'tren',
        options: [
          { label: '🚗 Coche gasolina', value: 'coche_gasolina' },
          { label: '🚗 Coche eléctrico', value: 'coche_electrico' },
          { label: '🚄 Tren', value: 'tren' },
          { label: '🚌 Autobús', value: 'autobus' },
          { label: '✈️ Avión', value: 'avion' }
        ]
      }
    ],
    output: {
      symbol: 'Comparacion',
      label: 'Comparación',
      unit: ''
    },
    resolve: ({ Distancia, Transporte_A, Transporte_B }) => {
      const transporteData = {
        coche_gasolina: { emoji: '🚗', nombre: 'Coche gasolina', emisiones: 130, coste: 0.09, velocidad: 60 },
        coche_electrico: { emoji: '⚡', nombre: 'Coche eléctrico', emisiones: 60, coste: 0.027, velocidad: 60 },
        tren: { emoji: '🚄', nombre: 'Tren', emisiones: 14, coste: 0.10, velocidad: 120 },
        autobus: { emoji: '🚌', nombre: 'Autobús', emisiones: 68, coste: 0.05, velocidad: 40 },
        avion: { emoji: '✈️', nombre: 'Avión', emisiones: 285, coste: 0.15, velocidad: 500 }
      };
      
      const dataA = transporteData[Transporte_A];
      const dataB = transporteData[Transporte_B];
      
      const emisionesA = (Distancia * dataA.emisiones) / 1000;
      const costeA = Distancia * dataA.coste;
      const tiempoA = Distancia / dataA.velocidad;
      
      const emisionesB = (Distancia * dataB.emisiones) / 1000;
      const costeB = Distancia * dataB.coste;
      const tiempoB = Distancia / dataB.velocidad;
      
      const mejorEcologico = emisionesA < emisionesB ? dataA.nombre : dataB.nombre;
      const mejorEconomico = costeA < costeB ? dataA.nombre : dataB.nombre;
      
      return {
        result: { Comparacion: dataA.nombre + " vs " + dataB.nombre },
        steps: [
          dataA.nombre + ": " + formatNumber(emisionesA) + " kg CO₂, " + formatNumber(costeA) + " €, " + formatNumber(tiempoA) + " h",
          dataB.nombre + ": " + formatNumber(emisionesB) + " kg CO₂, " + formatNumber(costeB) + " €, " + formatNumber(tiempoB) + " h",
          "Más ecológico: " + mejorEcologico + " | Más económico: " + mejorEconomico
        ]
      };
    }
  }
];
