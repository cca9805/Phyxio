import { formatNumber } from '../../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'energia_consumida',
    groupId: 'consumo_factura',
    title: 'Energía Consumida (E = P × t)',
    formula: 'E = P * t',
    variables: [
      { symbol: 'P', label: 'Potencia del aparato', unit: 'W' },
      { symbol: 't', label: 'Tiempo de uso', unit: 'h' }
    ],
    output: { symbol: 'E', label: 'Energía consumida', unit: 'Wh' },
    resolve: ({ P, t }) => {
      const Pnum = parseFloat(P);
      const tnum = parseFloat(t);
      const E_Wh = Pnum * tnum;
      const E_kWh = E_Wh / 1000;
      
      return {
        result: { E: formatNumber(E_Wh) },
        steps: [
          `Datos: P = ${P} W, t = ${t} h`,
          `Energía: E = P × t`,
          `E = ${P} × ${t} = ${formatNumber(E_Wh)} Wh`,
          `E = ${formatNumber(E_kWh)} kWh`
        ]
      };
    }
  },

  {
    id: 'coste_consumo',
    groupId: 'consumo_factura',
    title: 'Coste de Consumo',
    formula: 'Coste = (P * t / 1000) * precio',
    variables: [
      { symbol: 'P', label: 'Potencia', unit: 'W' },
      { symbol: 't', label: 'Tiempo de uso', unit: 'h' },
      { symbol: 'precio', label: 'Precio electricidad', unit: '€/kWh' }
    ],
    output: { symbol: 'coste', label: 'Coste', unit: '€' },
    resolve: ({ P, t, precio }) => {
      const Pnum = parseFloat(P);
      const tnum = parseFloat(t);
      const precioNum = parseFloat(precio);
      const E_kWh = (Pnum * tnum) / 1000;
      const coste = E_kWh * precioNum;
      
      return {
        result: { coste: formatNumber(coste) },
        steps: [
          `Datos: P = ${P} W, t = ${t} h, precio = ${precio} €/kWh`,
          `Energía: E = P × t / 1000 = ${formatNumber(E_kWh)} kWh`,
          `Coste = E × precio`,
          `Coste = ${formatNumber(E_kWh)} × ${precio}`,
          `Resultado: ${formatNumber(coste)} €`
        ]
      };
    }
  },

  {
    id: 'coste_mensual',
    groupId: 'consumo_factura',
    title: 'Coste Mensual de Aparato',
    formula: 'Coste_mes = (P * horas_dia * 30 / 1000) * precio',
    variables: [
      { symbol: 'P', label: 'Potencia', unit: 'W' },
      { symbol: 'horas_dia', label: 'Horas de uso al día', unit: 'h' },
      { symbol: 'precio', label: 'Precio electricidad', unit: '€/kWh' }
    ],
    output: { symbol: 'coste_mes', label: 'Coste mensual', unit: '€' },
    resolve: ({ P, horas_dia, precio }) => {
      const Pnum = parseFloat(P);
      const horasNum = parseFloat(horas_dia);
      const precioNum = parseFloat(precio);
      
      const E_dia_kWh = (Pnum * horasNum) / 1000;
      const E_mes_kWh = E_dia_kWh * 30;
      const coste_dia = E_dia_kWh * precioNum;
      const coste_mes = E_mes_kWh * precioNum;
      const coste_anual = coste_mes * 12;
      
      return {
        result: { coste_mes: formatNumber(coste_mes) },
        steps: [
          `Datos: P = ${P} W, uso = ${horas_dia} h/día, precio = ${precio} €/kWh`,
          `Consumo diario: ${formatNumber(E_dia_kWh)} kWh`,
          `Consumo mensual: ${formatNumber(E_mes_kWh)} kWh`,
          `Coste diario: ${formatNumber(coste_dia)} €`,
          `Coste mensual: ${formatNumber(coste_mes)} €`,
          `Coste anual: ${formatNumber(coste_anual)} €`
        ]
      };
    }
  },

  {
    id: 'potencia_contratada',
    groupId: 'consumo_factura',
    title: 'Coste Término de Potencia',
    formula: 'Coste = potencia * precio_potencia * dias / 365',
    variables: [
      { symbol: 'potencia', label: 'Potencia contratada', unit: 'kW' },
      { symbol: 'precio_potencia', label: 'Precio potencia', unit: '€/kW·año' },
      { symbol: 'dias', label: 'Días del periodo', unit: 'días' }
    ],
    output: { symbol: 'coste', label: 'Coste término potencia', unit: '€' },
    resolve: ({ potencia, precio_potencia, dias }) => {
      const potenciaNum = parseFloat(potencia);
      const precioNum = parseFloat(precio_potencia);
      const diasNum = parseFloat(dias);
      
      const coste_anual = potenciaNum * precioNum;
      const coste_periodo = (coste_anual * diasNum) / 365;
      const coste_mensual = coste_anual / 12;
      
      return {
        result: { coste: formatNumber(coste_periodo) },
        steps: [
          `Datos: Potencia = ${potencia} kW, Precio = ${precio_potencia} €/kW·año`,
          `Periodo: ${dias} días`,
          `Coste anual: ${potencia} × ${precio_potencia} = ${formatNumber(coste_anual)} €/año`,
          `Coste mensual: ${formatNumber(coste_mensual)} €/mes`,
          `Coste periodo (${dias} días): ${formatNumber(coste_periodo)} €`
        ]
      };
    }
  },

  {
    id: 'ahorro_discriminacion',
    groupId: 'consumo_factura',
    title: 'Ahorro con Discriminación Horaria',
    formula: 'Ahorro = E * (precio_punta - precio_valle)',
    variables: [
      { symbol: 'E', label: 'Energía consumida', unit: 'kWh' },
      { symbol: 'precio_punta', label: 'Precio hora punta', unit: '€/kWh' },
      { symbol: 'precio_valle', label: 'Precio hora valle', unit: '€/kWh' }
    ],
    output: { symbol: 'ahorro', label: 'Ahorro', unit: '€' },
    resolve: ({ E, precio_punta, precio_valle }) => {
      const Enum = parseFloat(E);
      const puntaNum = parseFloat(precio_punta);
      const valleNum = parseFloat(precio_valle);
      
      const coste_punta = Enum * puntaNum;
      const coste_valle = Enum * valleNum;
      const ahorro = coste_punta - coste_valle;
      const porcentaje = (ahorro / coste_punta) * 100;
      
      return {
        result: { ahorro: formatNumber(ahorro) },
        steps: [
          `Datos: E = ${E} kWh`,
          `Precio punta: ${precio_punta} €/kWh`,
          `Precio valle: ${precio_valle} €/kWh`,
          ``,
          `Coste en hora punta: ${formatNumber(coste_punta)} €`,
          `Coste en hora valle: ${formatNumber(coste_valle)} €`,
          `Ahorro: ${formatNumber(ahorro)} € (${formatNumber(porcentaje)}%)`
        ]
      };
    }
  },

  {
    id: 'factura_total',
    groupId: 'consumo_factura',
    title: 'Factura Total Estimada',
    formula: 'Total = (E * precio + potencia * precio_pot) * (1 + imp)',
    variables: [
      { symbol: 'E', label: 'Consumo mensual', unit: 'kWh' },
      { symbol: 'precio', label: 'Precio energía', unit: '€/kWh' },
      { symbol: 'potencia', label: 'Potencia contratada', unit: 'kW' },
      { symbol: 'precio_pot', label: 'Precio potencia mensual', unit: '€/kW·mes' }
    ],
    output: { symbol: 'total', label: 'Factura total', unit: '€' },
    resolve: ({ E, precio, potencia, precio_pot }) => {
      const Enum = parseFloat(E);
      const precioNum = parseFloat(precio);
      const potenciaNum = parseFloat(potencia);
      const precioPotNum = parseFloat(precio_pot);
      
      const termino_energia = Enum * precioNum;
      const termino_potencia = potenciaNum * precioPotNum;
      const peajes = (termino_energia + termino_potencia) * 0.15; // Aprox 15%
      const subtotal = termino_energia + termino_potencia + peajes;
      const imp_electrico = subtotal * 0.0511;
      const base_iva = subtotal + imp_electrico;
      const iva = base_iva * 0.21;
      const total = base_iva + iva;
      
      return {
        result: { total: formatNumber(total) },
        steps: [
          `Término energía: ${E} kWh × ${precio} €/kWh = ${formatNumber(termino_energia)} €`,
          `Término potencia: ${potencia} kW × ${precio_pot} €/kW = ${formatNumber(termino_potencia)} €`,
          `Peajes y cargos (≈15%): ${formatNumber(peajes)} €`,
          `Subtotal: ${formatNumber(subtotal)} €`,
          `Impuesto eléctrico (5.11%): ${formatNumber(imp_electrico)} €`,
          `IVA (21%): ${formatNumber(iva)} €`,
          `TOTAL: ${formatNumber(total)} €`
        ]
      };
    }
  }
];
