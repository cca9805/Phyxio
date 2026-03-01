import { formatNumber } from '../../../../utils/formatNumber';

// Constantes físicas
const h = 6.62607015e-34; // Constante de Planck (J⋅s)
const c = 299792458; // Velocidad de la luz (m/s)
const eV = 1.602176634e-19; // Electrón-voltio en julios

export const definitions = [
  // Grupo 1: Energía de fotones UV
  {
    id: 'uv-energia-foton-nm',
    groupId: 'uv_energia_foton',
    title: 'Energía de Fotón UV (desde λ)',
    isFundamental: true,
    formula: 'E = hc/λ',
    variables: [
      { symbol: 'lambda_nm', label: 'Longitud de onda (λ)', unit: 'nm' }
    ],
    output: { symbol: 'E_eV', label: 'Energía (E)', unit: 'eV' },
    constants: [
      { symbol: 'h', label: 'Constante de Planck', value: h, unit: 'J⋅s' },
      { symbol: 'c', label: 'Velocidad de la luz', value: c, unit: 'm/s' }
    ],
    donde: "E es la energía del fotón UV, h es la constante de Planck, c es la velocidad de la luz y λ es la longitud de onda",
    resolve: ({ lambda_nm }) => {
      const longitud_nm = parseFloat(lambda_nm);
      if (longitud_nm <= 0) return { error: 'La longitud de onda debe ser positiva.' };
      if (longitud_nm > 400) return { error: 'Longitud de onda fuera del rango UV (10-400 nm).' };
      
      const lambda_m = longitud_nm * 1e-9; // Convertir nm a m
      const E_J = (h * c) / lambda_m;
      const E_eV = E_J / eV; // Convertir J a eV
      
      return { 
        result: { E_eV: formatNumber(E_eV) }, 
        steps: [
          `λ = ${longitud_nm} nm = ${lambda_m} m`,
          `E = (${h} × ${c}) / ${lambda_m} = ${formatNumber(E_J)} J`,
          `E = ${formatNumber(E_J)} / ${eV} = ${formatNumber(E_eV)} eV`
        ] 
      };
    }
  },

  // Grupo 2: Clasificación UV
  {
    id: 'uv-clasificacion-banda',
    groupId: 'uv_clasificacion',
    title: 'Clasificación de Banda UV',
    isFundamental: true,
    formula: 'Clasificación según λ',
    variables: [
      { symbol: 'lambda_nm', label: 'Longitud de onda (λ)', unit: 'nm' }
    ],
    output: { symbol: 'banda', label: 'Banda UV', unit: '' },
    donde: "La banda UV se clasifica según la longitud de onda: UV-A (315-400 nm), UV-B (280-315 nm), UV-C (100-280 nm)",
    resolve: ({ lambda_nm }) => {
      const longitud = parseFloat(lambda_nm);
      if (longitud <= 0) return { error: 'La longitud de onda debe ser positiva.' };
      
      let banda, descripcion;
      
      if (longitud >= 315 && longitud <= 400) {
        banda = 'UV-A';
        descripcion = 'Luz negra, bronceado, envejecimiento';
      } else if (longitud >= 280 && longitud < 315) {
        banda = 'UV-B';
        descripcion = 'Vitamina D, quemaduras, daño ADN';
      } else if (longitud >= 100 && longitud < 280) {
        banda = 'UV-C';
        descripcion = 'Germicida, absorbida por atmósfera';
      } else if (longitud < 100) {
        banda = 'UV Extremo';
        descripcion = 'Ionizante, solo en vacío';
      } else {
        banda = 'No UV';
        descripcion = 'Fuera del rango ultravioleta';
      }
      
      return { 
        result: { banda: banda }, 
        steps: [
          `λ = ${longitud} nm`,
          `Banda: ${banda}`,
          `Características: ${descripcion}`
        ] 
      };
    }
  },

  // Grupo 3: Factor de Protección Solar (SPF)
  {
    id: 'uv-spf-proteccion',
    groupId: 'uv_proteccion_solar',
    title: 'Tiempo de Protección SPF',
    isFundamental: true,
    formula: 'T_protegido = SPF × T_natural',
    variables: [
      { symbol: 'SPF', label: 'Factor SPF', unit: '' },
      { symbol: 'T_natural', label: 'Tiempo natural (min)', unit: 'min' }
    ],
    output: { symbol: 'T_protegido', label: 'Tiempo protegido', unit: 'min' },
    donde: "T_protegido es el tiempo de protección, SPF es el factor de protección solar y T_natural es el tiempo natural de exposición sin protección",
    resolve: ({ SPF, T_natural }) => {
      const spf = parseFloat(SPF);
      const tiempo_natural = parseFloat(T_natural);
      
      if (spf <= 0) return { error: 'El SPF debe ser positivo.' };
      if (tiempo_natural <= 0) return { error: 'El tiempo natural debe ser positivo.' };
      
      const T_protegido = spf * tiempo_natural;
      
      return { 
        result: { T_protegido: formatNumber(T_protegido) }, 
        steps: [
          `Tiempo protegido = ${spf} × ${tiempo_natural} min`,
          `T_protegido = ${formatNumber(T_protegido)} minutos`
        ] 
      };
    }
  },

  // Grupo 4: Índice UV
  {
    id: 'uv-indice-riesgo',
    groupId: 'uv_indice_uv',
    title: 'Nivel de Riesgo por Índice UV',
    isFundamental: true,
    formula: 'Clasificación según índice',
    variables: [
      { symbol: 'indice_uv', label: 'Índice UV', unit: '' }
    ],
    output: { symbol: 'riesgo', label: 'Nivel de Riesgo', unit: '' },
    donde: "El nivel de riesgo se clasifica según el índice UV: Bajo (0-2), Moderado (3-5), Alto (6-7), Muy Alto (8-10), Extremo (11+)",
    resolve: ({ indice_uv }) => {
      const indice = parseFloat(indice_uv);
      if (indice < 0) return { error: 'El índice UV no puede ser negativo.' };
      
      let riesgo, color, recomendacion;
      
      if (indice <= 2) {
        riesgo = 'Bajo';
        color = 'Verde';
        recomendacion = 'Mínima protección requerida';
      } else if (indice <= 5) {
        riesgo = 'Moderado';
        color = 'Amarillo';
        recomendacion = 'Protección recomendada';
      } else if (indice <= 7) {
        riesgo = 'Alto';
        color = 'Naranja';
        recomendacion = 'Protección necesaria';
      } else if (indice <= 10) {
        riesgo = 'Muy Alto';
        color = 'Rojo';
        recomendacion = 'Protección extra necesaria';
      } else {
        riesgo = 'Extremo';
        color = 'Violeta';
        recomendacion = 'Evitar exposición';
      }
      
      return { 
        result: { riesgo: riesgo }, 
        steps: [
          `Índice UV: ${indice}`,
          `Nivel: ${riesgo} (${color})`,
          `Recomendación: ${recomendacion}`
        ] 
      };
    }
  }
];