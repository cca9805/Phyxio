import { formatNumber } from '../../../utils/formatNumber';

export const definitions = [
  {
    id: 'proteccion-nivel-seguro',
    groupId: 'proteccion-nivel-seguro',
    title: 'Nivel de Presión Sonora Seguro',
    isFundamental: true,
    formula: 'L_seguro = 85 - 3 × log₂(t / 8)',
    variables: [
      { symbol: 't', label: 'Tiempo de exposición (h)', unit: 'h' }
    ],
    output: { symbol: 'L_seguro', label: 'Nivel seguro', unit: 'dB' },
    resolve: ({ t }) => {
      const numT = parseFloat(t);
      if (numT === 0) return { error: 'El tiempo no puede ser cero.' };
      const L_seguro = 85 - 3 * Math.log2(numT / 8);
      return {
        result: { L_seguro: formatNumber(L_seguro) },
        steps: [
          `L_seguro = 85 - 3 × log₂(t / 8)`,
          `L_seguro = 85 - 3 × log₂(${t} / 8)`,
          `L_seguro = 85 - 3 × ${formatNumber(Math.log2(numT / 8))}`,
          `L_seguro = ${formatNumber(L_seguro)} dB`
        ]
      };
    }
  },
  {
    id: 'proteccion-tiempo-seguro',
    groupId: 'proteccion-tiempo-seguro',
    title: 'Tiempo de Exposición Seguro',
    isFundamental: true,
    formula: 't_seguro = 8 × 2^((85 - L) / 3)',
    variables: [
      { symbol: 'L', label: 'Nivel de presión sonora (dB)', unit: 'dB' }
    ],
    output: { symbol: 't_seguro', label: 'Tiempo seguro', unit: 'h' },
    resolve: ({ L }) => {
      const t_seguro = 8 * Math.pow(2, (85 - parseFloat(L)) / 3);
      return {
        result: { t_seguro: formatNumber(t_seguro) },
        steps: [
          `t_seguro = 8 × 2^((85 - L) / 3)`,
          `t_seguro = 8 × 2^((85 - ${L}) / 3)`,
          `t_seguro = 8 × 2^(${formatNumber((85 - parseFloat(L)) / 3)})`,
          `t_seguro = ${formatNumber(t_seguro)} h`
        ]
      };
    }
  },
  {
    id: 'proteccion-dosis-ruido',
    groupId: 'proteccion-dosis-ruido',
    title: 'Dosis de Ruido Acumulada',
    isFundamental: true,
    formula: 'D = (t / T_seguro) × 100%',
    variables: [
      { symbol: 't', label: 'Tiempo de exposición real (h)', unit: 'h' },
      { symbol: 'L', label: 'Nivel de presión sonora (dB)', unit: 'dB' }
    ],
    output: { symbol: 'D', label: 'Dosis de ruido', unit: '%' },
    resolve: ({ t, L }) => {
      const T_seguro = 8 * Math.pow(2, (85 - parseFloat(L)) / 3);
      const D = (parseFloat(t) / T_seguro) * 100;
      return {
        result: { D: formatNumber(D) },
        steps: [
          `Primero calculamos T_seguro = 8 × 2^((85 - ${L}) / 3) = ${formatNumber(T_seguro)} h`,
          `D = (t / T_seguro) × 100%`,
          `D = (${t} / ${formatNumber(T_seguro)}) × 100%`,
          `D = ${formatNumber(D)}%`,
          D >= 100 ? '⚠️ PELIGRO: Dosis superior al 100%, riesgo de daño auditivo' : D >= 50 ? '⚠️ PRECAUCIÓN: Dosis elevada, usar protección' : '✅ Dosis segura'
        ]
      };
    }
  },
  {
    id: 'proteccion-nivel-efectivo',
    groupId: 'proteccion-nivel-efectivo',
    title: 'Nivel Efectivo con Protección',
    isFundamental: false,
    formula: 'L_efectivo = L_ambiente - A_real',
    variables: [
      { symbol: 'L_ambiente', label: 'Nivel ambiental (dB)', unit: 'dB' },
      { symbol: 'NRR', label: 'NRR del protector (dB)', unit: 'dB' },
      {
        symbol: 'tipo',
        label: 'Tipo de protector',
        unit: 'tipo',
        options: [
          { value: 'tapones', label: 'Tapones' },
          { value: 'orejeras', label: 'Orejeras' }
        ]
      }
    ],
    output: { symbol: 'L_efectivo', label: 'Nivel efectivo', unit: 'dB' },
    resolve: ({ L_ambiente, NRR, tipo }) => {
      const factor = tipo === 'tapones' ? 7 : 3;
      const A_real = parseFloat(NRR) - factor;
      const L_efectivo = parseFloat(L_ambiente) - A_real;
      return {
        result: { L_efectivo: formatNumber(L_efectivo) },
        steps: [
          `Para ${tipo === 'tapones' ? 'tapones' : 'orejeras'}: A_real = NRR - ${factor}`,
          `A_real = ${NRR} - ${factor} = ${formatNumber(A_real)} dB`,
          `L_efectivo = L_ambiente - A_real`,
          `L_efectivo = ${L_ambiente} - ${formatNumber(A_real)}`,
          `L_efectivo = ${formatNumber(L_efectivo)} dB`,
          L_efectivo > 85 ? '⚠️ Nivel aún peligroso, considerar protección adicional' : '✅ Nivel seguro con protección'
        ]
      };
    }
  },
  {
    id: 'proteccion-atenuacion-necesaria',
    groupId: 'proteccion-atenuacion-necesaria',
    title: 'Atenuación Necesaria',
    isFundamental: false,
    formula: 'A_necesaria = L_ambiente - L_objetivo',
    variables: [
      { symbol: 'L_ambiente', label: 'Nivel ambiental (dB)', unit: 'dB' },
      { symbol: 'L_objetivo', label: 'Nivel objetivo (dB)', unit: 'dB', defaultValue: 85 }
    ],
    output: { symbol: 'A_necesaria', label: 'Atenuación necesaria', unit: 'dB' },
    resolve: ({ L_ambiente, L_objetivo = 85 }) => {
      const A_necesaria = parseFloat(L_ambiente) - parseFloat(L_objetivo);
      let recomendacion = '';
      if (A_necesaria <= 0) {
        recomendacion = '✅ No se necesita protección';
      } else if (A_necesaria <= 15) {
        recomendacion = '💡 Tapones de espuma (15-20 dB) son suficientes';
      } else if (A_necesaria <= 25) {
        recomendacion = '💡 Tapones con filtro (20-25 dB) u orejeras básicas';
      } else if (A_necesaria <= 35) {
        recomendacion = '💡 Orejeras profesionales (25-35 dB)';
      } else {
        recomendacion = '⚠️ Protección doble (tapones + orejeras) o reducir exposición';
      }
      return {
        result: { A_necesaria: formatNumber(A_necesaria) },
        steps: [
          `A_necesaria = L_ambiente - L_objetivo`,
          `A_necesaria = ${L_ambiente} - ${L_objetivo}`,
          `A_necesaria = ${formatNumber(A_necesaria)} dB`,
          recomendacion
        ]
      };
    }
  },
  {
    id: 'proteccion-distancia-segura',
    groupId: 'proteccion-distancia-segura',
    title: 'Distancia Segura de Fuente Sonora',
    isFundamental: false,
    formula: 'r = r₀ × 10^((L₀ - L_seguro) / 20)',
    variables: [
      { symbol: 'r0', label: 'Distancia de referencia (m)', unit: 'm' },
      { symbol: 'L0', label: 'Nivel a distancia r₀ (dB)', unit: 'dB' },
      { symbol: 'L_seguro', label: 'Nivel seguro deseado (dB)', unit: 'dB', defaultValue: 85 }
    ],
    output: { symbol: 'r', label: 'Distancia segura', unit: 'm' },
    resolve: ({ r0, L0, L_seguro = 85 }) => {
      const r = parseFloat(r0) * Math.pow(10, (parseFloat(L0) - parseFloat(L_seguro)) / 20);
      return {
        result: { r: formatNumber(r) },
        steps: [
          `r = r₀ × 10^((L₀ - L_seguro) / 20)`,
          `r = ${r0} × 10^((${L0} - ${L_seguro}) / 20)`,
          `r = ${r0} × 10^(${formatNumber((parseFloat(L0) - parseFloat(L_seguro)) / 20)})`,
          `r = ${formatNumber(r)} m`,
          `💡 Aléjate al menos ${formatNumber(r)} m de la fuente para estar seguro`
        ]
      };
    }
  }
];
