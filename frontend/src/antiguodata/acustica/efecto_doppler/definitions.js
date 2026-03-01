import { formatNumber } from '../../../utils/formatNumber';

export const definitions = [
  {
    id: 'doppler-general',
    groupId: 'efecto_doppler-grupo-1',
    title: 'Efecto Doppler General',
    isFundamental: true,
    formula: String.raw`f' = f \frac{v + v_o}{v - v_f}`,
    variables: [
      { symbol: 'f', label: 'Frecuencia emitida (f)', unit: 'Hz' },
      { symbol: 'v', label: 'Velocidad del sonido (v)', unit: 'm/s' },
      { symbol: 'v_o', label: 'Velocidad del observador (vₒ)', unit: 'm/s' },
      { symbol: 'v_f', label: 'Velocidad de la fuente (vf)', unit: 'm/s' }
    ],
    output: { symbol: 'f_prima', label: 'Frecuencia observada (f\')', unit: 'Hz' },
    resolve: ({ f, v, v_o, v_f }) => {
      const f_prima = f * (v + v_o) / (v - v_f);
      return {
        result: { f_prima: formatNumber(f_prima) },
        steps: [
          `f' = f × (v + vₒ)/(v - vf)`,
          `f' = ${f} × (${v} + ${v_o})/(${v} - ${v_f})`,
          `f' = ${f} × ${formatNumber((v + v_o) / (v - v_f))}`,
          `f' = ${formatNumber(f_prima)} Hz`
        ]
      };
    }
  },
  {
    id: 'doppler-fuente-movil',
    groupId: 'efecto_doppler-grupo-1',
    title: 'Doppler - Solo Fuente Móvil',
    isFundamental: true,
    formula: String.raw`f' = f \frac{v}{v - v_f}`,
    variables: [
      { symbol: 'f', label: 'Frecuencia emitida (f)', unit: 'Hz' },
      { symbol: 'v', label: 'Velocidad del sonido (v)', unit: 'm/s' },
      { symbol: 'v_f', label: 'Velocidad de la fuente (vf)', unit: 'm/s' }
    ],
    output: { symbol: 'f_prima', label: 'Frecuencia observada (f\')', unit: 'Hz' },
    resolve: ({ f, v, v_f }) => {
      const f_prima = f * v / (v - v_f);
      return {
        result: { f_prima: formatNumber(f_prima) },
        steps: [
          `f' = f × v/(v - vf)`,
          `f' = ${f} × ${v}/(${v} - ${v_f})`,
          `f' = ${formatNumber(f_prima)} Hz`
        ]
      };
    }
  },
  {
    id: 'doppler-observador-movil',
    groupId: 'efecto_doppler-grupo-1',
    title: 'Doppler - Solo Observador Móvil',
    isFundamental: false,
    formula: String.raw`f' = f \frac{v + v_o}{v}`,
    variables: [
      { symbol: 'f', label: 'Frecuencia emitida (f)', unit: 'Hz' },
      { symbol: 'v', label: 'Velocidad del sonido (v)', unit: 'm/s' },
      { symbol: 'v_o', label: 'Velocidad del observador (vₒ)', unit: 'm/s' }
    ],
    output: { symbol: 'f_prima', label: 'Frecuencia observada (f\')', unit: 'Hz' },
    resolve: ({ f, v, v_o }) => {
      const f_prima = f * (v + v_o) / v;
      return {
        result: { f_prima: formatNumber(f_prima) },
        steps: [
          `f' = f × (v + vₒ)/v`,
          `f' = ${f} × (${v} + ${v_o})/${v}`,
          `f' = ${formatNumber(f_prima)} Hz`
        ]
      };
    }
  },
  {
    id: 'cambio-frecuencia',
    groupId: 'efecto_doppler-grupo-1',
    title: 'Cambio de Frecuencia',
    isFundamental: false,
    formula: String.raw`\Delta f = f' - f`,
    variables: [
      { symbol: 'f_prima', label: 'Frecuencia observada (f\')', unit: 'Hz' },
      { symbol: 'f', label: 'Frecuencia emitida (f)', unit: 'Hz' }
    ],
    output: { symbol: 'Delta_f', label: 'Cambio de frecuencia (Δf)', unit: 'Hz' },
    resolve: ({ f_prima, f }) => {
      const Delta_f = f_prima - f;
      return {
        result: { Delta_f: formatNumber(Delta_f) },
        steps: [
          `Δf = f' - f`,
          `Δf = ${f_prima} - ${f}`,
          `Δf = ${formatNumber(Delta_f)} Hz`
        ]
      };
    }
  }
];
