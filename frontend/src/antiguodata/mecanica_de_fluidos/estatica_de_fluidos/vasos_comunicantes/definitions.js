import { formatNumber } from '../../../../utils/formatNumber.js';

export const definitions = [
  // --- Grupo 1: Vasos Comunicantes con Líquidos Diferentes ---
  {
    id: 'vasos-altura-liquido2',
    groupId: 'vasos-comunicantes',
    title: 'Calcular Altura líquido 2 (h2 = h1·ρ1/ρ2)',
    isFundamental: true,
    formula: 'h2 = h1 * (ρ1 / ρ2)',
    variables: [
      { symbol: 'h1', label: 'Altura líquido 1 (h1) (m)', unit: 'm' },
      { symbol: 'rho1', label: 'Densidad líquido 1 (ρ1) (kg/m³)', unit: 'kg/m³' },
      { symbol: 'rho2', label: 'Densidad líquido 2 (ρ2) (kg/m³)', unit: 'kg/m³' }
    ],
    output: { symbol: 'h2', label: 'Altura líquido 2 (h2) (m)', unit: 'm' },
    resolve: ({ h1, rho1, rho2 }) => {
      const densidad2 = parseFloat(rho2);
      if (densidad2 === 0) return { error: "La densidad del líquido 2 no puede ser cero." };
      const h2 = parseFloat(h1) * (parseFloat(rho1) / densidad2);
      return {
        result: { h2: formatNumber(h2) },
        steps: [
          `h2 = h1 * (ρ1 / ρ2) = ${h1} * (${rho1} / ${rho2})`,
          `h2 = ${formatNumber(h2)} m`
        ]
      };
    }
  },
  {
    id: 'vasos-altura-liquido1',
    groupId: 'vasos-comunicantes',
    title: 'Calcular Altura líquido 1 (h1 = h2·ρ2/ρ1)',
    isFundamental: false,
    formula: 'h1 = h2 * (ρ2 / ρ1)',
    variables: [
      { symbol: 'h2', label: 'Altura líquido 2 (h2) (m)', unit: 'm' },
      { symbol: 'rho1', label: 'Densidad líquido 1 (ρ1) (kg/m³)', unit: 'kg/m³' },
      { symbol: 'rho2', label: 'Densidad líquido 2 (ρ2) (kg/m³)', unit: 'kg/m³' }
    ],
    output: { symbol: 'h1', label: 'Altura líquido 1 (h1) (m)', unit: 'm' },
    resolve: ({ h2, rho1, rho2 }) => {
      const densidad1 = parseFloat(rho1);
      if (densidad1 === 0) return { error: "La densidad del líquido 1 no puede ser cero." };
      const h1 = parseFloat(h2) * (parseFloat(rho2) / densidad1);
      return {
        result: { h1: formatNumber(h1) },
        steps: [
          `h1 = h2 * (ρ2 / ρ1) = ${h2} * (${rho2} / ${rho1})`,
          `h1 = ${formatNumber(h1)} m`
        ]
      };
    }
  },
  {
    id: 'vasos-densidad-liquido2',
    groupId: 'vasos-comunicantes',
    title: 'Calcular Densidad líquido 2 (ρ2 = ρ1·h1/h2)',
    isFundamental: false,
    formula: 'ρ2 = ρ1 * (h1 / h2)',
    variables: [
      { symbol: 'rho1', label: 'Densidad líquido 1 (ρ1) (kg/m³)', unit: 'kg/m³' },
      { symbol: 'h1', label: 'Altura líquido 1 (h1) (m)', unit: 'm' },
      { symbol: 'h2', label: 'Altura líquido 2 (h2) (m)', unit: 'm' }
    ],
    output: { symbol: 'rho2', label: 'Densidad líquido 2 (ρ2) (kg/m³)', unit: 'kg/m³' },
    resolve: ({ rho1, h1, h2 }) => {
      const altura2 = parseFloat(h2);
      if (altura2 === 0) return { error: "La altura del líquido 2 no puede ser cero." };
      const rho2 = parseFloat(rho1) * (parseFloat(h1) / altura2);
      return {
        result: { rho2: formatNumber(rho2) },
        steps: [
          `ρ2 = ρ1 * (h1 / h2) = ${rho1} * (${h1} / ${h2})`,
          `ρ2 = ${formatNumber(rho2)} kg/m³`
        ]
      };
    }
  }
];
