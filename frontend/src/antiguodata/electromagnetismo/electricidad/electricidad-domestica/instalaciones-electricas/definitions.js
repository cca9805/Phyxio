import { formatNumber } from '../../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'corriente_potencia',
    groupId: 'instalaciones_electricas',
    title: 'Corriente por Potencia (I = P / V)',
    formula: 'I = P / V',
    variables: [
      { symbol: 'P', label: 'Potencia', unit: 'W' },
      { symbol: 'V', label: 'Voltaje', unit: 'V' }
    ],
    output: { symbol: 'I', label: 'Corriente', unit: 'A' },
    resolve: ({ P, V }) => {
      const Pnum = parseFloat(P);
      const Vnum = parseFloat(V);
      const I = Pnum / Vnum;
      
      // Recomendación de cable
      let cable = "";
      if (I <= 10) cable = "1.5 mm²";
      else if (I <= 16) cable = "2.5 mm²";
      else if (I <= 25) cable = "4 mm²";
      else if (I <= 32) cable = "6 mm²";
      else cable = "10 mm² o mayor";
      
      return {
        result: { I: formatNumber(I) },
        steps: [
          `Datos: P = ${P} W, V = ${V} V`,
          `Corriente: I = P / V`,
          `I = ${P} / ${V}`,
          `Resultado: I = ${formatNumber(I)} A`,
          ``,
          `Recomendación de cable: ${cable}`,
          `Protección sugerida: ${Math.ceil(I * 1.25)} A`
        ]
      };
    }
  },

  {
    id: 'potencia_aparato',
    groupId: 'instalaciones_electricas',
    title: 'Potencia de Aparato (P = V × I)',
    formula: 'P = V * I',
    variables: [
      { symbol: 'V', label: 'Voltaje', unit: 'V' },
      { symbol: 'I', label: 'Corriente', unit: 'A' }
    ],
    output: { symbol: 'P', label: 'Potencia', unit: 'W' },
    resolve: ({ V, I }) => {
      const Vnum = parseFloat(V);
      const Inum = parseFloat(I);
      const P = Vnum * Inum;
      
      return {
        result: { P: formatNumber(P) },
        steps: [
          `Datos: V = ${V} V, I = ${I} A`,
          `Potencia: P = V × I`,
          `P = ${V} × ${I}`,
          `Resultado: P = ${formatNumber(P)} W = ${formatNumber(P/1000)} kW`
        ]
      };
    }
  },

  {
    id: 'seccion_cable',
    groupId: 'instalaciones_electricas',
    title: 'Sección de Cable Necesaria',
    formula: 'S = I / densidad_corriente',
    variables: [
      { symbol: 'I', label: 'Corriente máxima', unit: 'A' },
      { symbol: 'tipo', label: 'Tipo instalación (0=superficie, 1=empotrado)', unit: '' }
    ],
    output: { symbol: 'S', label: 'Sección mínima', unit: 'mm²' },
    resolve: ({ I, tipo }) => {
      const Inum = parseFloat(I);
      const tipoNum = parseInt(tipo);
      
      // Densidades de corriente típicas (A/mm²)
      const densidad = tipoNum === 0 ? 6 : 5; // Superficie vs empotrado
      const S_calculada = Inum / densidad;
      
      // Secciones comerciales estándar
      const secciones = [1.5, 2.5, 4, 6, 10, 16, 25, 35, 50];
      const S_comercial = secciones.find(s => s >= S_calculada) || 50;
      
      const tipoTexto = tipoNum === 0 ? "superficie" : "empotrado";
      
      return {
        result: { S: formatNumber(S_comercial) },
        steps: [
          `Datos: I = ${I} A, Instalación: ${tipoTexto}`,
          `Densidad de corriente: ${densidad} A/mm²`,
          `Sección calculada: S = I / densidad = ${I} / ${densidad} = ${formatNumber(S_calculada)} mm²`,
          `Sección comercial: ${formatNumber(S_comercial)} mm²`,
          ``,
          `✅ Usar cable de ${formatNumber(S_comercial)} mm²`
        ]
      };
    }
  },

  {
    id: 'caida_tension',
    groupId: 'instalaciones_electricas',
    title: 'Caída de Tensión en Cable',
    formula: 'ΔV = (2 * ρ * L * I) / S',
    variables: [
      { symbol: 'L', label: 'Longitud del cable', unit: 'm' },
      { symbol: 'I', label: 'Corriente', unit: 'A' },
      { symbol: 'S', label: 'Sección del cable', unit: 'mm²' }
    ],
    output: { symbol: 'deltaV', label: 'Caída de tensión', unit: 'V' },
    resolve: ({ L, I, S }) => {
      const Lnum = parseFloat(L);
      const Inum = parseFloat(I);
      const Snum = parseFloat(S);
      
      // Resistividad del cobre: 0.018 Ω·mm²/m
      const rho = 0.018;
      const deltaV = (2 * rho * Lnum * Inum) / Snum;
      const porcentaje = (deltaV / 230) * 100;
      
      let evaluacion = "";
      if (porcentaje <= 3) evaluacion = "✅ Excelente (≤3%)";
      else if (porcentaje <= 5) evaluacion = "⚠️ Aceptable (≤5%)";
      else evaluacion = "❌ Excesiva (>5%)";
      
      return {
        result: { deltaV: formatNumber(deltaV) },
        steps: [
          `Datos: L = ${L} m, I = ${I} A, S = ${S} mm²`,
          `Resistividad cobre: ρ = 0.018 Ω·mm²/m`,
          `Caída de tensión: ΔV = (2 × ρ × L × I) / S`,
          `ΔV = (2 × 0.018 × ${L} × ${I}) / ${S}`,
          `Resultado: ΔV = ${formatNumber(deltaV)} V`,
          ``,
          `Porcentaje: ${formatNumber(porcentaje)}% de 230V`,
          `Evaluación: ${evaluacion}`
        ]
      };
    }
  },

  {
    id: 'consumo_diario',
    groupId: 'instalaciones_electricas',
    title: 'Consumo Diario de Aparatos',
    formula: 'E = P * t / 1000',
    variables: [
      { symbol: 'P', label: 'Potencia del aparato', unit: 'W' },
      { symbol: 't', label: 'Tiempo de uso diario', unit: 'h' }
    ],
    output: { symbol: 'E', label: 'Energía consumida', unit: 'kWh' },
    resolve: ({ P, t }) => {
      const Pnum = parseFloat(P);
      const tnum = parseFloat(t);
      const E_diaria = (Pnum * tnum) / 1000;
      const E_mensual = E_diaria * 30;
      const E_anual = E_diaria * 365;
      
      // Coste aproximado (0.15 €/kWh)
      const coste_diario = E_diaria * 0.15;
      const coste_anual = E_anual * 0.15;
      
      return {
        result: { E: formatNumber(E_diaria) },
        steps: [
          `Datos: P = ${P} W, t = ${t} h/día`,
          `Energía diaria: E = P × t / 1000`,
          `E = ${P} × ${t} / 1000 = ${formatNumber(E_diaria)} kWh/día`,
          ``,
          `Consumos:`,
          `• Mensual: ${formatNumber(E_mensual)} kWh`,
          `• Anual: ${formatNumber(E_anual)} kWh`,
          ``,
          `Coste aproximado (0.15 €/kWh):`,
          `• Diario: ${formatNumber(coste_diario)} €`,
          `• Anual: ${formatNumber(coste_anual)} €`
        ]
      };
    }
  }
];
