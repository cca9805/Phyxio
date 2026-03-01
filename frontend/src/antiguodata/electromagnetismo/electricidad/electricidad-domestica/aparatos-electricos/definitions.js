import { formatNumber } from '../../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'eficiencia',
    groupId: 'aparatos_electricos',
    title: 'Eficiencia Energética',
    formula: 'η = (E_util / E_consumida) * 100',
    variables: [
      { symbol: 'E_util', label: 'Energía útil', unit: 'J' },
      { symbol: 'E_consumida', label: 'Energía consumida', unit: 'J' }
    ],
    output: { symbol: 'eta', label: 'Eficiencia', unit: '%' },
    resolve: ({ E_util, E_consumida }) => {
      const utilNum = parseFloat(E_util);
      const consumidaNum = parseFloat(E_consumida);
      const eta = (utilNum / consumidaNum) * 100;
      const perdida = 100 - eta;
      
      return {
        result: { eta: formatNumber(eta) },
        steps: [
          `Datos: E_útil = ${E_util} J, E_consumida = ${E_consumida} J`,
          `Eficiencia: η = (E_útil / E_consumida) × 100%`,
          `η = (${E_util} / ${E_consumida}) × 100%`,
          `η = ${formatNumber(eta)}%`,
          ``,
          `Energía perdida: ${formatNumber(perdida)}%`
        ]
      };
    }
  },

  {
    id: 'coste_total_propiedad',
    groupId: 'aparatos_electricos',
    title: 'Coste Total de Propiedad',
    formula: 'Coste_total = precio + (consumo_anual * años * precio_kwh)',
    variables: [
      { symbol: 'precio', label: 'Precio de compra', unit: '€' },
      { symbol: 'consumo_anual', label: 'Consumo anual', unit: 'kWh' },
      { symbol: 'años', label: 'Años de uso', unit: 'años' },
      { symbol: 'precio_kwh', label: 'Precio electricidad', unit: '€/kWh' }
    ],
    output: { symbol: 'coste_total', label: 'Coste total', unit: '€' },
    resolve: ({ precio, consumo_anual, años, precio_kwh }) => {
      const precioNum = parseFloat(precio);
      const consumoNum = parseFloat(consumo_anual);
      const añosNum = parseFloat(años);
      const precioKwhNum = parseFloat(precio_kwh);
      
      const consumo_total = consumoNum * añosNum;
      const coste_energia = consumo_total * precioKwhNum;
      const coste_total = precioNum + coste_energia;
      const coste_anual = coste_total / añosNum;
      
      return {
        result: { coste_total: formatNumber(coste_total) },
        steps: [
          `Precio compra: ${precio} €`,
          `Consumo anual: ${consumo_anual} kWh`,
          `Vida útil: ${años} años`,
          `Precio electricidad: ${precio_kwh} €/kWh`,
          ``,
          `Consumo total: ${formatNumber(consumo_total)} kWh`,
          `Coste energía: ${formatNumber(coste_energia)} €`,
          `Coste total: ${precio} + ${formatNumber(coste_energia)} = ${formatNumber(coste_total)} €`,
          `Coste anual medio: ${formatNumber(coste_anual)} €/año`
        ]
      };
    }
  },

  {
    id: 'comparar_aparatos',
    groupId: 'aparatos_electricos',
    title: 'Comparar Dos Aparatos',
    formula: 'Diferencia = Coste_A - Coste_B',
    variables: [
      { symbol: 'precio_A', label: 'Precio aparato A', unit: '€' },
      { symbol: 'consumo_A', label: 'Consumo anual A', unit: 'kWh' },
      { symbol: 'precio_B', label: 'Precio aparato B', unit: '€' },
      { symbol: 'consumo_B', label: 'Consumo anual B', unit: 'kWh' },
      { symbol: 'años', label: 'Años de uso', unit: 'años' }
    ],
    output: { symbol: 'diferencia', label: 'Diferencia de coste', unit: '€' },
    resolve: ({ precio_A, consumo_A, precio_B, consumo_B, años }) => {
      const precioANum = parseFloat(precio_A);
      const consumoANum = parseFloat(consumo_A);
      const precioBNum = parseFloat(precio_B);
      const consumoBNum = parseFloat(consumo_B);
      const añosNum = parseFloat(años);
      const precio_kwh = 0.15; // Precio medio
      
      const coste_total_A = precioANum + (consumoANum * añosNum * precio_kwh);
      const coste_total_B = precioBNum + (consumoBNum * añosNum * precio_kwh);
      const diferencia = coste_total_A - coste_total_B;
      const mejor = diferencia < 0 ? "A" : "B";
      
      return {
        result: { diferencia: formatNumber(Math.abs(diferencia)) },
        steps: [
          `Aparato A: ${precio_A} € + ${consumo_A} kWh/año`,
          `Aparato B: ${precio_B} € + ${consumo_B} kWh/año`,
          `Periodo: ${años} años`,
          ``,
          `Coste total A: ${formatNumber(coste_total_A)} €`,
          `Coste total B: ${formatNumber(coste_total_B)} €`,
          ``,
          `Diferencia: ${formatNumber(Math.abs(diferencia))} €`,
          `✅ Mejor opción: Aparato ${mejor}`
        ]
      };
    }
  },

  {
    id: 'consumo_standby',
    groupId: 'aparatos_electricos',
    title: 'Consumo en Standby',
    formula: 'Coste_anual = (P_standby * 24 * 365 / 1000) * precio',
    variables: [
      { symbol: 'P_standby', label: 'Potencia en standby', unit: 'W' },
      { symbol: 'num_aparatos', label: 'Número de aparatos', unit: '' },
      { symbol: 'precio', label: 'Precio electricidad', unit: '€/kWh' }
    ],
    output: { symbol: 'coste_anual', label: 'Coste anual', unit: '€' },
    resolve: ({ P_standby, num_aparatos, precio }) => {
      const potenciaNum = parseFloat(P_standby);
      const numNum = parseFloat(num_aparatos);
      const precioNum = parseFloat(precio);
      
      const potencia_total = potenciaNum * numNum;
      const energia_diaria = (potencia_total * 24) / 1000;
      const energia_anual = energia_diaria * 365;
      const coste_anual = energia_anual * precioNum;
      const coste_mensual = coste_anual / 12;
      
      return {
        result: { coste_anual: formatNumber(coste_anual) },
        steps: [
          `${numNum} aparatos × ${P_standby}W = ${formatNumber(potencia_total)}W total`,
          `Energía diaria: ${formatNumber(energia_diaria)} kWh`,
          `Energía anual: ${formatNumber(energia_anual)} kWh`,
          ``,
          `Coste mensual: ${formatNumber(coste_mensual)} €`,
          `Coste anual: ${formatNumber(coste_anual)} €`,
          ``,
          `💡 Apagando completamente ahorras ${formatNumber(coste_anual)} € al año`
        ]
      };
    }
  },

  {
    id: 'ahorro_led',
    groupId: 'aparatos_electricos',
    title: 'Ahorro LED vs Incandescente',
    formula: 'Ahorro = (P_incand - P_led) * horas * precio / 1000',
    variables: [
      { symbol: 'P_incand', label: 'Potencia incandescente', unit: 'W' },
      { symbol: 'P_led', label: 'Potencia LED equivalente', unit: 'W' },
      { symbol: 'horas_dia', label: 'Horas de uso al día', unit: 'h' },
      { symbol: 'precio', label: 'Precio electricidad', unit: '€/kWh' }
    ],
    output: { symbol: 'ahorro_anual', label: 'Ahorro anual', unit: '€' },
    resolve: ({ P_incand, P_led, horas_dia, precio }) => {
      const incandNum = parseFloat(P_incand);
      const ledNum = parseFloat(P_led);
      const horasNum = parseFloat(horas_dia);
      const precioNum = parseFloat(precio);
      
      const diferencia_potencia = incandNum - ledNum;
      const ahorro_diario_kwh = (diferencia_potencia * horasNum) / 1000;
      const ahorro_anual_kwh = ahorro_diario_kwh * 365;
      const ahorro_anual_euros = ahorro_anual_kwh * precioNum;
      const porcentaje = (diferencia_potencia / incandNum) * 100;
      
      return {
        result: { ahorro_anual: formatNumber(ahorro_anual_euros) },
        steps: [
          `Incandescente: ${P_incand}W → LED: ${P_led}W`,
          `Reducción: ${formatNumber(diferencia_potencia)}W (${formatNumber(porcentaje)}%)`,
          `Uso: ${horas_dia} h/día`,
          ``,
          `Ahorro diario: ${formatNumber(ahorro_diario_kwh)} kWh`,
          `Ahorro anual: ${formatNumber(ahorro_anual_kwh)} kWh`,
          `Ahorro económico: ${formatNumber(ahorro_anual_euros)} €/año`,
          ``,
          `💡 En 10 años ahorras ${formatNumber(ahorro_anual_euros * 10)} €`
        ]
      };
    }
  }
];
