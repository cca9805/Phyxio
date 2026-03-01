import { formatNumber } from '../../../../utils/formatNumber';

const R = 8.314;

export const definitions = [
  {
    id: 'trabajo-isotermico',
    groupId: 'proceso_isotermico-grupo-1',
    title: 'Trabajo en Proceso Isotérmico (W)',
    isFundamental: true,
    formula: String.raw`W = nRT\ln\left(\frac{V_f}{V_i}\right)`,
    variables: [
      { symbol: 'n', label: 'Número de moles (n)', unit: 'mol' },
      { symbol: 'T', label: 'Temperatura constante (T)', unit: 'K' },
      { symbol: 'V_i', label: 'Volumen inicial (V_i)', unit: 'm³' },
      { symbol: 'V_f', label: 'Volumen final (V_f)', unit: 'm³' }
    ],
    output: { symbol: 'W', label: 'Trabajo (W)', unit: 'J' },
    resolve: ({ n, T, V_i, V_f }) => {
      const W = n * R * T * Math.log(V_f / V_i);
      return {
        result: { W: formatNumber(W) },
        steps: [
          `W = nRT ln(V_f / V_i)`,
          `W = ${n} × ${R} × ${T} × ln(${V_f} / ${V_i})`,
          `W = ${formatNumber(n * R * T)} × ${formatNumber(Math.log(V_f / V_i))}`,
          `W = ${formatNumber(W)} J`
        ]
      };
    }
  },
  {
    id: 'calor-isotermico',
    groupId: 'proceso_isotermico-grupo-1',
    title: 'Calor en Proceso Isotérmico (Q)',
    isFundamental: true,
    formula: String.raw`Q = W = nRT\ln\left(\frac{V_f}{V_i}\right)`,
    variables: [
      { symbol: 'n', label: 'Número de moles (n)', unit: 'mol' },
      { symbol: 'T', label: 'Temperatura constante (T)', unit: 'K' },
      { symbol: 'V_i', label: 'Volumen inicial (V_i)', unit: 'm³' },
      { symbol: 'V_f', label: 'Volumen final (V_f)', unit: 'm³' }
    ],
    output: { symbol: 'Q', label: 'Calor (Q)', unit: 'J' },
    resolve: ({ n, T, V_i, V_f }) => {
      const Q = n * R * T * Math.log(V_f / V_i);
      return {
        result: { Q: formatNumber(Q) },
        steps: [
          `Como ΔU = 0 (T constante), entonces Q = W`,
          `Q = nRT ln(V_f / V_i)`,
          `Q = ${n} × ${R} × ${T} × ln(${V_f} / ${V_i})`,
          `Q = ${formatNumber(Q)} J`
        ]
      };
    }
  },
  {
    id: 'relacion-pv-isotermico',
    groupId: 'proceso_isotermico-grupo-1',
    title: 'Volumen Final (V_f)',
    isFundamental: false,
    formula: String.raw`P_iV_i = P_fV_f`,
    variables: [
      { symbol: 'P_i', label: 'Presión inicial (P_i)', unit: 'Pa' },
      { symbol: 'V_i', label: 'Volumen inicial (V_i)', unit: 'm³' },
      { symbol: 'P_f', label: 'Presión final (P_f)', unit: 'Pa' }
    ],
    output: { symbol: 'V_f', label: 'Volumen final (V_f)', unit: 'm³' },
    resolve: ({ P_i, V_i, P_f }) => {
      const V_f = (P_i * V_i) / P_f;
      return {
        result: { V_f: formatNumber(V_f) },
        steps: [
          `P_i × V_i = P_f × V_f`,
          `V_f = (P_i × V_i) / P_f`,
          `V_f = (${P_i} × ${V_i}) / ${P_f}`,
          `V_f = ${formatNumber(V_f)} m³`
        ]
      };
    }
  }
];
