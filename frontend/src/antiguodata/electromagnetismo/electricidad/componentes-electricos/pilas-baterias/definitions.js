import { formatNumber } from '../../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'duracion-pila',
    groupId: 'pilas_baterias',
    title: 'Calcular Duración de Pila',
    formula: 'Duración (h) = Capacidad (mAh) / Consumo (mA)',
    variables: [
      { symbol: 'capacidad', label: 'Capacidad de la pila', unit: 'mAh' },
      { symbol: 'consumo', label: 'Consumo del dispositivo', unit: 'mA' }
    ],
    output: { symbol: 'duracion', label: 'Duración', unit: 'horas' },
    resolve: ({ capacidad, consumo }) => {
      const duracion = parseFloat(capacidad) / parseFloat(consumo);
      const dias = duracion / 24;
      
      return {
        result: {
          'Duración': formatNumber(duracion) + ' horas',
          'En días': formatNumber(dias) + ' días'
        },
        steps: [
          `Duración = ${capacidad} mAh / ${consumo} mA`,
          `Duración = ${formatNumber(duracion)} horas`,
          `En días = ${formatNumber(duracion)} / 24 = ${formatNumber(dias)} días`
        ]
      };
    }
  },
  {
    id: 'pilas-serie',
    groupId: 'pilas_baterias',
    title: 'Pilas en Serie (Voltaje Total)',
    formula: 'V_total = V₁ + V₂ + V₃ + ...',
    variables: [
      { symbol: 'voltajePila', label: 'Voltaje de cada pila', unit: 'V' },
      { symbol: 'numPilas', label: 'Número de pilas', unit: '' }
    ],
    output: { symbol: 'voltajeTotal', label: 'Voltaje Total', unit: 'V' },
    resolve: ({ voltajePila, numPilas }) => {
      const voltajeTotal = parseFloat(voltajePila) * parseFloat(numPilas);
      
      return {
        result: {
          'Voltaje Total': formatNumber(voltajeTotal) + ' V'
        },
        steps: [
          `V_total = ${voltajePila}V × ${numPilas} pilas`,
          `V_total = ${formatNumber(voltajeTotal)} V`
        ]
      };
    }
  },
  {
    id: 'pilas-paralelo',
    groupId: 'pilas_baterias',
    title: 'Pilas en Paralelo (Capacidad Total)',
    formula: 'C_total = C₁ + C₂ + C₃ + ...',
    variables: [
      { symbol: 'capacidadPila', label: 'Capacidad de cada pila', unit: 'mAh' },
      { symbol: 'numPilas', label: 'Número de pilas', unit: '' }
    ],
    output: { symbol: 'capacidadTotal', label: 'Capacidad Total', unit: 'mAh' },
    resolve: ({ capacidadPila, numPilas }) => {
      const capacidadTotal = parseFloat(capacidadPila) * parseFloat(numPilas);
      
      return {
        result: {
          'Capacidad Total': formatNumber(capacidadTotal) + ' mAh'
        },
        steps: [
          `C_total = ${capacidadPila} mAh × ${numPilas} pilas`,
          `C_total = ${formatNumber(capacidadTotal)} mAh`
        ]
      };
    }
  }
];
