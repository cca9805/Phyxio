import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  // Grupo 1: Energía de rayos X/gamma
  {
    id: 'rayos-energia-keV-formula',
    groupId: 'rayos_energia_keV',
    title: 'Energía en keV (desde λ)',
    isFundamental: true,
    formula: 'E(keV) = 1.24/λ(nm)',
    variables: [
      { symbol: 'lambda_nm', label: 'Longitud de onda (λ)', unit: 'nm' }
    ],
    output: { symbol: 'E_keV', label: 'Energía (E)', unit: 'keV' },
    donde: "E es la energía del fotón en keV y λ es la longitud de onda en nm (fórmula simplificada: E(keV) = 1.24/λ(nm))",
    resolve: ({ lambda_nm }) => {
      const longitud_nm = parseFloat(lambda_nm);
      if (longitud_nm <= 0) return { error: 'La longitud de onda debe ser positiva.' };
      if (longitud_nm > 10) return { error: 'Longitud de onda fuera del rango de rayos X/gamma.' };
      
      const E_keV = 1.24 / longitud_nm;
      
      return { 
        result: { E_keV: formatNumber(E_keV) }, 
        steps: [`E = 1.24 / ${longitud_nm} = ${formatNumber(E_keV)} keV`] 
      };
    }
  },

  // Grupo 2: Energía máxima en tubo de rayos X
  {
    id: 'rayos-energia-maxima-tubo',
    groupId: 'rayos_energia_maxima',
    title: 'Energía Máxima de Rayos X',
    isFundamental: true,
    formula: 'E_max = eV_acelerador',
    variables: [
      { symbol: 'V_kV', label: 'Voltaje acelerador', unit: 'kV' }
    ],
    output: { symbol: 'E_max_keV', label: 'Energía máxima', unit: 'keV' },
    donde: "E_max es la energía máxima de los rayos X producidos y V es el voltaje acelerador del tubo (1 kV = 1 keV para electrones)",
    resolve: ({ V_kV }) => {
      const voltaje_kV = parseFloat(V_kV);
      if (voltaje_kV <= 0) return { error: 'El voltaje debe ser positivo.' };
      if (voltaje_kV > 1000) return { error: 'Voltaje muy alto para aplicaciones típicas.' };
      
      const E_max_keV = voltaje_kV; // 1 kV = 1 keV para electrones
      
      return { 
        result: { E_max_keV: formatNumber(E_max_keV) }, 
        steps: [`E_max = e × ${voltaje_kV} kV = ${formatNumber(E_max_keV)} keV`] 
      };
    }
  },

  // Grupo 3: Atenuación exponencial
  {
    id: 'rayos-atenuacion-intensidad',
    groupId: 'rayos_atenuacion',
    title: 'Intensidad Atenuada',
    isFundamental: true,
    formula: 'I = I₀⋅e^(-μx)',
    variables: [
      { symbol: 'I0', label: 'Intensidad inicial (I₀)', unit: 'unidades' },
      { symbol: 'mu', label: 'Coef. atenuación (μ)', unit: 'cm⁻¹' },
      { symbol: 'x', label: 'Espesor (x)', unit: 'cm' }
    ],
    output: { symbol: 'I', label: 'Intensidad final (I)', unit: 'unidades' },
    donde: "I es la intensidad atenuada, I₀ es la intensidad inicial, μ es el coeficiente de atenuación y x es el espesor del material",
    resolve: ({ I0, mu, x }) => {
      const intensidad0 = parseFloat(I0);
      const coef_aten = parseFloat(mu);
      const espesor = parseFloat(x);
      
      if (intensidad0 <= 0) return { error: 'La intensidad inicial debe ser positiva.' };
      if (coef_aten < 0) return { error: 'El coeficiente de atenuación no puede ser negativo.' };
      if (espesor < 0) return { error: 'El espesor no puede ser negativo.' };
      
      const I = intensidad0 * Math.exp(-coef_aten * espesor);
      const factor_reduccion = intensidad0 / I;
      
      return { 
        result: { I: formatNumber(I) }, 
        steps: [
          `I = ${intensidad0} × e^(-${coef_aten} × ${espesor})`,
          `I = ${intensidad0} × e^(-${formatNumber(coef_aten * espesor)}) = ${formatNumber(I)}`,
          `Factor de reducción: ${formatNumber(factor_reduccion)}`
        ] 
      };
    }
  },

  // Grupo 4: Blindaje
  {
    id: 'rayos-blindaje-espesor',
    groupId: 'rayos_blindaje',
    title: 'Espesor de Blindaje',
    isFundamental: true,
    formula: 'x = ln(Factor)/μ',
    variables: [
      { symbol: 'factor_reduccion', label: 'Factor de reducción', unit: '' },
      { symbol: 'mu', label: 'Coef. atenuación (μ)', unit: 'cm⁻¹' }
    ],
    output: { symbol: 'x_blindaje', label: 'Espesor blindaje', unit: 'cm' },
    donde: "x es el espesor de blindaje necesario, factor_reduccion es I₀/I deseado y μ es el coeficiente de atenuación del material",
    resolve: ({ factor_reduccion, mu }) => {
      const factor = parseFloat(factor_reduccion);
      const coef_aten = parseFloat(mu);
      
      if (factor <= 1) return { error: 'El factor de reducción debe ser mayor que 1.' };
      if (coef_aten <= 0) return { error: 'El coeficiente de atenuación debe ser positivo.' };
      
      const x_blindaje = Math.log(factor) / coef_aten;
      
      return { 
        result: { x_blindaje: formatNumber(x_blindaje) }, 
        steps: [
          `x = ln(${factor}) / ${coef_aten}`,
          `x = ${formatNumber(Math.log(factor))} / ${coef_aten} = ${formatNumber(x_blindaje)} cm`
        ] 
      };
    }
  }
];