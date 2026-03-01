import { formatNumber } from '../../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'eficiencia-bombilla',
    groupId: 'bombillas_leds',
    title: 'Calcular Eficiencia (lm/W)',
    formula: 'Eficiencia = Lúmenes / Vatios',
    variables: [
      { symbol: 'lumenes', label: 'Lúmenes', unit: 'lm' },
      { symbol: 'vatios', label: 'Potencia', unit: 'W' }
    ],
    output: { symbol: 'eficiencia', label: 'Eficiencia', unit: 'lm/W' },
    resolve: ({ lumenes, vatios }) => {
      const eficiencia = parseFloat(lumenes) / parseFloat(vatios);
      let clase = 'G';
      if (eficiencia > 210) clase = 'A';
      else if (eficiencia > 185) clase = 'B';
      else if (eficiencia > 160) clase = 'C';
      else if (eficiencia > 135) clase = 'D';
      else if (eficiencia > 110) clase = 'E';
      else if (eficiencia > 85) clase = 'F';
      
      return {
        result: {
          'Eficiencia': formatNumber(eficiencia) + ' lm/W',
          'Clase Energética': clase
        },
        steps: [
          `Eficiencia = ${lumenes} lm / ${vatios} W`,
          `Eficiencia = ${formatNumber(eficiencia)} lm/W`,
          `Clase energética: ${clase}`
        ]
      };
    }
  },
  {
    id: 'consumo-bombilla',
    groupId: 'bombillas_leds',
    title: 'Calcular Consumo (kWh)',
    formula: 'Consumo = (Potencia × Horas) / 1000',
    variables: [
      { symbol: 'potencia', label: 'Potencia', unit: 'W' },
      { symbol: 'horas', label: 'Horas de uso', unit: 'h' }
    ],
    output: { symbol: 'consumo', label: 'Consumo', unit: 'kWh' },
    resolve: ({ potencia, horas }) => {
      const consumo = (parseFloat(potencia) * parseFloat(horas)) / 1000;
      
      return {
        result: {
          'Consumo': formatNumber(consumo) + ' kWh'
        },
        steps: [
          `Consumo = (${potencia} W × ${horas} h) / 1000`,
          `Consumo = ${formatNumber(consumo)} kWh`
        ]
      };
    }
  },
  {
    id: 'coste-bombilla',
    groupId: 'bombillas_leds',
    title: 'Calcular Coste (€)',
    formula: 'Coste = Consumo × Precio',
    variables: [
      { symbol: 'consumo', label: 'Consumo', unit: 'kWh' },
      { symbol: 'precio', label: 'Precio electricidad', unit: '€/kWh' }
    ],
    output: { symbol: 'coste', label: 'Coste', unit: '€' },
    resolve: ({ consumo, precio }) => {
      const coste = parseFloat(consumo) * parseFloat(precio);
      
      return {
        result: {
          'Coste': formatNumber(coste) + ' €'
        },
        steps: [
          `Coste = ${consumo} kWh × ${precio} €/kWh`,
          `Coste = ${formatNumber(coste)} €`
        ]
      };
    }
  },
  {
    id: 'ahorro-led',
    groupId: 'bombillas_leds',
    title: 'Calcular Ahorro LED vs Incandescente',
    formula: 'Ahorro = (Consumo_inc - Consumo_led) × Precio',
    variables: [
      { symbol: 'potenciaInc', label: 'Potencia Incandescente', unit: 'W' },
      { symbol: 'potenciaLed', label: 'Potencia LED', unit: 'W' },
      { symbol: 'horas', label: 'Horas de uso', unit: 'h' },
      { symbol: 'precio', label: 'Precio electricidad', unit: '€/kWh' }
    ],
    output: { symbol: 'ahorro', label: 'Ahorro', unit: '€' },
    resolve: ({ potenciaInc, potenciaLed, horas, precio }) => {
      const consumoInc = (parseFloat(potenciaInc) * parseFloat(horas)) / 1000;
      const consumoLed = (parseFloat(potenciaLed) * parseFloat(horas)) / 1000;
      const ahorro = (consumoInc - consumoLed) * parseFloat(precio);
      const porcentaje = ((parseFloat(potenciaInc) - parseFloat(potenciaLed)) / parseFloat(potenciaInc)) * 100;
      
      return {
        result: {
          'Consumo Incandescente': formatNumber(consumoInc) + ' kWh',
          'Consumo LED': formatNumber(consumoLed) + ' kWh',
          'Ahorro': formatNumber(ahorro) + ' €',
          'Reducción': formatNumber(porcentaje) + ' %'
        },
        steps: [
          `Consumo incandescente = (${potenciaInc} W × ${horas} h) / 1000 = ${formatNumber(consumoInc)} kWh`,
          `Consumo LED = (${potenciaLed} W × ${horas} h) / 1000 = ${formatNumber(consumoLed)} kWh`,
          `Ahorro = (${formatNumber(consumoInc)} - ${formatNumber(consumoLed)}) × ${precio} = ${formatNumber(ahorro)} €`,
          `Reducción = ${formatNumber(porcentaje)}%`
        ]
      };
    }
  }
];
