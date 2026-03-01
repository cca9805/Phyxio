import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  // --- Grupo 1: Relación de Transformación ---
  {
    id: 'relacion-transformacion-v2',
    groupId: 'transformadores_eso',
    title: 'Calcular Voltaje Secundario (V₂)',
    formula: 'V₂ = V₁ × (N₂/N₁)',
    variables: [
      { symbol: 'V1', label: 'Voltaje Primario (V₁)', unit: 'V' },
      { symbol: 'N1', label: 'Vueltas Primaria (N₁)', unit: 'vueltas' },
      { symbol: 'N2', label: 'Vueltas Secundaria (N₂)', unit: 'vueltas' }
    ],
    output: { symbol: 'V2', label: 'Voltaje Secundario (V₂)', unit: 'V' },
    resolve: ({ V1, N1, N2 }) => {
      const V2 = parseFloat(V1) * (parseFloat(N2) / parseFloat(N1));
      const relacion = parseFloat(N2) / parseFloat(N1);
      const tipo = relacion < 1 ? 'Reductor' : relacion > 1 ? 'Elevador' : 'Aislamiento';
      
      return {
        result: {
          'V₂': formatNumber(V2),
          'Relación (N₂/N₁)': formatNumber(relacion),
          'Tipo': tipo
        },
        steps: [
          `Relación: N₂/N₁ = ${N2}/${N1} = ${formatNumber(relacion)}`,
          `V₂ = ${V1} × ${formatNumber(relacion)} = ${formatNumber(V2)} V`,
          `Tipo: ${tipo}`
        ]
      };
    }
  },
  {
    id: 'relacion-transformacion-n2',
    groupId: 'transformadores_eso',
    title: 'Calcular Vueltas Secundaria (N₂)',
    formula: 'N₂ = N₁ × (V₂/V₁)',
    variables: [
      { symbol: 'V1', label: 'Voltaje Primario (V₁)', unit: 'V' },
      { symbol: 'V2', label: 'Voltaje Secundario (V₂)', unit: 'V' },
      { symbol: 'N1', label: 'Vueltas Primaria (N₁)', unit: 'vueltas' }
    ],
    output: { symbol: 'N2', label: 'Vueltas Secundaria (N₂)', unit: 'vueltas' },
    resolve: ({ V1, V2, N1 }) => {
      const N2 = parseFloat(N1) * (parseFloat(V2) / parseFloat(V1));
      const relacion = parseFloat(V2) / parseFloat(V1);
      
      return {
        result: {
          'N₂': formatNumber(Math.round(N2)),
          'Relación (V₂/V₁)': formatNumber(relacion)
        },
        steps: [
          `N₂ = ${N1} × (${V2}/${V1})`,
          `N₂ = ${N1} × ${formatNumber(relacion)}`,
          `N₂ = ${formatNumber(Math.round(N2))} vueltas`
        ]
      };
    }
  },
  {
    id: 'relacion-transformacion-factor',
    groupId: 'transformadores_eso',
    title: 'Calcular Factor de Reducción',
    formula: 'Factor = V₁/V₂',
    variables: [
      { symbol: 'V1', label: 'Voltaje Primario (V₁)', unit: 'V' },
      { symbol: 'V2', label: 'Voltaje Secundario (V₂)', unit: 'V' }
    ],
    output: { symbol: 'Factor', label: 'Factor de Reducción', unit: 'veces' },
    resolve: ({ V1, V2 }) => {
      const factor = parseFloat(V1) / parseFloat(V2);
      const tipo = factor > 1 ? 'Reductor' : factor < 1 ? 'Elevador' : 'Aislamiento';
      
      return {
        result: {
          'Factor': formatNumber(factor),
          'Tipo': tipo
        },
        steps: [
          `Factor = ${V1}/${V2} = ${formatNumber(factor)}`,
          `El transformador es ${tipo}`
        ]
      };
    }
  }
];
