import { formatNumber } from '../../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'ahorro_porcentaje',
    groupId: 'ahorro_energetico',
    title: 'Ahorro por Reducción de Consumo',
    formula: 'Ahorro = consumo * (porcentaje / 100) * precio',
    variables: [
      { symbol: 'consumo', label: 'Consumo mensual actual', unit: 'kWh' },
      { symbol: 'porcentaje', label: 'Porcentaje de reducción', unit: '%' },
      { symbol: 'precio', label: 'Precio electricidad', unit: '€/kWh' }
    ],
    output: { symbol: 'ahorro', label: 'Ahorro mensual', unit: '€' },
    resolve: ({ consumo, porcentaje, precio }) => {
      const consumoNum = parseFloat(consumo);
      const porcentajeNum = parseFloat(porcentaje);
      const precioNum = parseFloat(precio);
      
      const reduccion_kwh = consumoNum * (porcentajeNum / 100);
      const ahorro_mensual = reduccion_kwh * precioNum;
      const ahorro_anual = ahorro_mensual * 12;
      const nuevo_consumo = consumoNum - reduccion_kwh;
      
      return {
        result: { ahorro: formatNumber(ahorro_mensual) },
        steps: [
          `Consumo actual: ${consumo} kWh/mes`,
          `Reducción: ${porcentaje}%`,
          `Precio: ${precio} €/kWh`,
          ``,
          `Reducción: ${formatNumber(reduccion_kwh)} kWh/mes`,
          `Nuevo consumo: ${formatNumber(nuevo_consumo)} kWh/mes`,
          ``,
          `Ahorro mensual: ${formatNumber(ahorro_mensual)} €`,
          `Ahorro anual: ${formatNumber(ahorro_anual)} €`
        ]
      };
    }
  },

  {
    id: 'ahorro_led',
    groupId: 'ahorro_energetico',
    title: 'Ahorro Cambiando a LED',
    formula: 'Ahorro = num * (P_incand - P_led) * horas * dias * precio / 1000',
    variables: [
      { symbol: 'num', label: 'Número de bombillas', unit: '' },
      { symbol: 'P_incand', label: 'Potencia incandescente', unit: 'W' },
      { symbol: 'P_led', label: 'Potencia LED', unit: 'W' },
      { symbol: 'horas', label: 'Horas de uso al día', unit: 'h' }
    ],
    output: { symbol: 'ahorro_anual', label: 'Ahorro anual', unit: '€' },
    resolve: ({ num, P_incand, P_led, horas }) => {
      const numNum = parseFloat(num);
      const incandNum = parseFloat(P_incand);
      const ledNum = parseFloat(P_led);
      const horasNum = parseFloat(horas);
      const precio = 0.15;
      
      const reduccion_por_bombilla = incandNum - ledNum;
      const reduccion_total = reduccion_por_bombilla * numNum;
      const ahorro_diario_kwh = (reduccion_total * horasNum) / 1000;
      const ahorro_anual_kwh = ahorro_diario_kwh * 365;
      const ahorro_anual = ahorro_anual_kwh * precio;
      const coste_led = numNum * 5; // 5€ por bombilla LED
      const amortizacion_meses = coste_led / (ahorro_anual / 12);
      
      return {
        result: { ahorro_anual: formatNumber(ahorro_anual) },
        steps: [
          `${numNum} bombillas: ${P_incand}W → ${P_led}W`,
          `Reducción: ${formatNumber(reduccion_por_bombilla)}W por bombilla`,
          `Reducción total: ${formatNumber(reduccion_total)}W`,
          `Uso: ${horas} h/día`,
          ``,
          `Ahorro diario: ${formatNumber(ahorro_diario_kwh)} kWh`,
          `Ahorro anual: ${formatNumber(ahorro_anual_kwh)} kWh`,
          `Ahorro económico: ${formatNumber(ahorro_anual)} €/año`,
          ``,
          `Inversión LED: ${formatNumber(coste_led)} €`,
          `Amortización: ${formatNumber(amortizacion_meses)} meses`
        ]
      };
    }
  },

  {
    id: 'ahorro_temperatura',
    groupId: 'ahorro_energetico',
    title: 'Ahorro Ajustando Temperatura',
    formula: 'Ahorro = consumo_clima * (grados * 0.07) * precio',
    variables: [
      { symbol: 'consumo_clima', label: 'Consumo climatización mensual', unit: 'kWh' },
      { symbol: 'grados', label: 'Grados de ajuste', unit: '°C' },
      { symbol: 'meses', label: 'Meses de uso al año', unit: 'meses' },
      { symbol: 'precio', label: 'Precio electricidad', unit: '€/kWh' }
    ],
    output: { symbol: 'ahorro_anual', label: 'Ahorro anual', unit: '€' },
    resolve: ({ consumo_clima, grados, meses, precio }) => {
      const consumoNum = parseFloat(consumo_clima);
      const gradosNum = parseFloat(grados);
      const mesesNum = parseFloat(meses);
      const precioNum = parseFloat(precio);
      
      const porcentaje_ahorro = gradosNum * 7; // 7% por grado
      const reduccion_mensual = consumoNum * (porcentaje_ahorro / 100);
      const ahorro_mensual = reduccion_mensual * precioNum;
      const ahorro_anual = ahorro_mensual * mesesNum;
      
      return {
        result: { ahorro_anual: formatNumber(ahorro_anual) },
        steps: [
          `Consumo climatización: ${consumo_clima} kWh/mes`,
          `Ajuste temperatura: ${grados}°C`,
          `Meses de uso: ${meses}`,
          ``,
          `Ahorro por grado: 7%`,
          `Ahorro total: ${formatNumber(porcentaje_ahorro)}%`,
          `Reducción mensual: ${formatNumber(reduccion_mensual)} kWh`,
          ``,
          `Ahorro mensual: ${formatNumber(ahorro_mensual)} €`,
          `Ahorro anual: ${formatNumber(ahorro_anual)} €`
        ]
      };
    }
  },

  {
    id: 'ahorro_standby',
    groupId: 'ahorro_energetico',
    title: 'Ahorro Eliminando Standby',
    formula: 'Ahorro = (P_standby * num * 24 * 365 / 1000) * precio',
    variables: [
      { symbol: 'P_standby', label: 'Potencia standby media', unit: 'W' },
      { symbol: 'num', label: 'Número de aparatos', unit: '' },
      { symbol: 'precio', label: 'Precio electricidad', unit: '€/kWh' }
    ],
    output: { symbol: 'ahorro_anual', label: 'Ahorro anual', unit: '€' },
    resolve: ({ P_standby, num, precio }) => {
      const potenciaNum = parseFloat(P_standby);
      const numNum = parseFloat(num);
      const precioNum = parseFloat(precio);
      
      const potencia_total = potenciaNum * numNum;
      const energia_diaria = (potencia_total * 24) / 1000;
      const energia_anual = energia_diaria * 365;
      const ahorro_anual = energia_anual * precioNum;
      const coste_regletas = numNum * 5; // 5€ por regleta
      const amortizacion_meses = coste_regletas / (ahorro_anual / 12);
      
      return {
        result: { ahorro_anual: formatNumber(ahorro_anual) },
        steps: [
          `${numNum} aparatos × ${P_standby}W = ${formatNumber(potencia_total)}W`,
          `Energía diaria: ${formatNumber(energia_diaria)} kWh`,
          `Energía anual: ${formatNumber(energia_anual)} kWh`,
          ``,
          `Ahorro anual: ${formatNumber(ahorro_anual)} €`,
          ``,
          `Inversión en regletas: ${formatNumber(coste_regletas)} €`,
          `Amortización: ${formatNumber(amortizacion_meses)} meses`
        ]
      };
    }
  },

  {
    id: 'ahorro_solar',
    groupId: 'ahorro_energetico',
    title: 'Ahorro con Paneles Solares',
    formula: 'Ahorro = produccion * precio',
    variables: [
      { symbol: 'potencia', label: 'Potencia instalación', unit: 'kW' },
      { symbol: 'horas_sol', label: 'Horas de sol equivalentes/día', unit: 'h' },
      { symbol: 'precio', label: 'Precio electricidad', unit: '€/kWh' },
      { symbol: 'coste_instalacion', label: 'Coste instalación', unit: '€' }
    ],
    output: { symbol: 'ahorro_anual', label: 'Ahorro anual', unit: '€' },
    resolve: ({ potencia, horas_sol, precio, coste_instalacion }) => {
      const potenciaNum = parseFloat(potencia);
      const horasSolNum = parseFloat(horas_sol);
      const precioNum = parseFloat(precio);
      const costeNum = parseFloat(coste_instalacion);
      
      const produccion_diaria = potenciaNum * horasSolNum;
      const produccion_anual = produccion_diaria * 365;
      const ahorro_anual = produccion_anual * precioNum;
      const amortizacion_años = costeNum / ahorro_anual;
      const ahorro_25_años = ahorro_anual * 25 - costeNum;
      
      return {
        result: { ahorro_anual: formatNumber(ahorro_anual) },
        steps: [
          `Instalación: ${potencia} kW`,
          `Horas sol equivalentes: ${horas_sol} h/día`,
          ``,
          `Producción diaria: ${formatNumber(produccion_diaria)} kWh`,
          `Producción anual: ${formatNumber(produccion_anual)} kWh`,
          ``,
          `Ahorro anual: ${formatNumber(ahorro_anual)} €`,
          `Coste instalación: ${formatNumber(costeNum)} €`,
          `Amortización: ${formatNumber(amortizacion_años)} años`,
          ``,
          `Beneficio en 25 años: ${formatNumber(ahorro_25_años)} €`
        ]
      };
    }
  },

  {
    id: 'plan_ahorro_completo',
    groupId: 'ahorro_energetico',
    title: 'Plan de Ahorro Completo',
    formula: 'Ahorro_total = suma de todos los ahorros',
    variables: [
      { symbol: 'consumo_actual', label: 'Consumo mensual actual', unit: 'kWh' },
      { symbol: 'precio', label: 'Precio electricidad', unit: '€/kWh' },
      { symbol: 'led', label: 'Ahorro LED (%)', unit: '%' },
      { symbol: 'standby', label: 'Ahorro standby (%)', unit: '%' },
      { symbol: 'temperatura', label: 'Ahorro temperatura (%)', unit: '%' },
      { symbol: 'horaria', label: 'Ahorro disc. horaria (%)', unit: '%' }
    ],
    output: { symbol: 'ahorro_total', label: 'Ahorro total anual', unit: '€' },
    resolve: ({ consumo_actual, precio, led, standby, temperatura, horaria }) => {
      const consumoNum = parseFloat(consumo_actual);
      const precioNum = parseFloat(precio);
      const ledNum = parseFloat(led);
      const standbyNum = parseFloat(standby);
      const temperaturaNum = parseFloat(temperatura);
      const horariaNum = parseFloat(horaria);
      
      const porcentaje_total = ledNum + standbyNum + temperaturaNum + horariaNum;
      const reduccion_kwh = consumoNum * (porcentaje_total / 100);
      const nuevo_consumo = consumoNum - reduccion_kwh;
      const factura_actual = consumoNum * precioNum;
      const factura_nueva = nuevo_consumo * precioNum;
      const ahorro_mensual = factura_actual - factura_nueva;
      const ahorro_anual = ahorro_mensual * 12;
      
      return {
        result: { ahorro_total: formatNumber(ahorro_anual) },
        steps: [
          `Consumo actual: ${consumo_actual} kWh/mes`,
          `Factura actual: ${formatNumber(factura_actual)} €/mes`,
          ``,
          `Ahorros aplicados:`,
          `• LED: ${led}%`,
          `• Standby: ${standby}%`,
          `• Temperatura: ${temperatura}%`,
          `• Disc. horaria: ${horaria}%`,
          ``,
          `Ahorro total: ${formatNumber(porcentaje_total)}%`,
          `Nuevo consumo: ${formatNumber(nuevo_consumo)} kWh/mes`,
          `Nueva factura: ${formatNumber(factura_nueva)} €/mes`,
          ``,
          `Ahorro mensual: ${formatNumber(ahorro_mensual)} €`,
          `Ahorro anual: ${formatNumber(ahorro_anual)} €`
        ]
      };
    }
  }
];
