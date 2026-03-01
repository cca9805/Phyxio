import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  // Grupo 1: Reflexión
  {
    id: 'reflexion-angulo-igual',
    groupId: 'reflexion_angulos',
    title: 'Ley de Reflexión',
    isFundamental: true,
    formula: 'θᵢ = θᵣ',
    variables: [
      { symbol: 'theta_i', label: 'Ángulo incidencia (θᵢ)', unit: '°' }
    ],
    output: { symbol: 'theta_r', label: 'Ángulo reflexión (θᵣ)', unit: '°' },
    donde: "θᵣ es el ángulo de reflexión y θᵢ es el ángulo de incidencia (ley de reflexión: θᵢ = θᵣ)",
    resolve: ({ theta_i }) => {
      const angulo_i = parseFloat(theta_i);
      if (angulo_i < 0 || angulo_i > 90) return { error: 'El ángulo debe estar entre 0° y 90°.' };
      
      const theta_r = angulo_i; // Ley de reflexión
      
      return { 
        result: { theta_r: formatNumber(theta_r) }, 
        steps: [
          `Por la ley de reflexión: θᵣ = θᵢ`,
          `θᵣ = ${angulo_i}°`
        ] 
      };
    }
  },

  // Grupo 2: Coeficiente de reflexión (simplificado para incidencia normal)
  {
    id: 'coeficiente-reflexion-normal',
    groupId: 'coeficiente_reflexion',
    title: 'Coeficiente de Reflexión (incidencia normal)',
    isFundamental: true,
    formula: 'R = ((n₁-n₂)/(n₁+n₂))²',
    variables: [
      { symbol: 'n1', label: 'Índice medio 1 (n₁)', unit: '' },
      { symbol: 'n2', label: 'Índice medio 2 (n₂)', unit: '' }
    ],
    output: { symbol: 'R', label: 'Coeficiente reflexión (R)', unit: '' },
    donde: "R es el coeficiente de reflexión (fracción de intensidad reflejada), n₁ es el índice del primer medio y n₂ es el índice del segundo medio",
    resolve: ({ n1, n2 }) => {
      const indice1 = parseFloat(n1);
      const indice2 = parseFloat(n2);
      
      if (indice1 <= 0 || indice2 <= 0) return { error: 'Los índices de refracción deben ser positivos.' };
      
      const R = Math.pow((indice1 - indice2) / (indice1 + indice2), 2);
      const porcentaje = R * 100;
      
      return { 
        result: { R: formatNumber(R) }, 
        steps: [
          `R = ((${indice1} - ${indice2}) / (${indice1} + ${indice2}))²`,
          `R = (${formatNumber(indice1 - indice2)} / ${formatNumber(indice1 + indice2)})²`,
          `R = ${formatNumber(R)} = ${formatNumber(porcentaje)}%`
        ] 
      };
    }
  },

  // Grupo 3: Ley de Snell
  {
    id: 'ley-snell-angulo-transmision',
    groupId: 'ley_snell',
    title: 'Ángulo de Transmisión (Ley de Snell)',
    isFundamental: true,
    formula: 'n₁sin(θᵢ) = n₂sin(θₜ)',
    variables: [
      { symbol: 'n1', label: 'Índice medio 1 (n₁)', unit: '' },
      { symbol: 'n2', label: 'Índice medio 2 (n₂)', unit: '' },
      { symbol: 'theta_i', label: 'Ángulo incidencia (θᵢ)', unit: '°' }
    ],
    output: { symbol: 'theta_t', label: 'Ángulo transmisión (θₜ)', unit: '°' },
    donde: "θₜ es el ángulo de transmisión (refracción), n₁ es el índice del primer medio, n₂ es el índice del segundo medio y θᵢ es el ángulo de incidencia",
    resolve: ({ n1, n2, theta_i }) => {
      const indice1 = parseFloat(n1);
      const indice2 = parseFloat(n2);
      const angulo_i = parseFloat(theta_i);
      
      if (indice1 <= 0 || indice2 <= 0) return { error: 'Los índices de refracción deben ser positivos.' };
      if (angulo_i < 0 || angulo_i > 90) return { error: 'El ángulo debe estar entre 0° y 90°.' };
      
      const sin_theta_i = Math.sin(angulo_i * Math.PI / 180);
      const sin_theta_t = (indice1 / indice2) * sin_theta_i;
      
      if (sin_theta_t > 1) {
        const angulo_critico = Math.asin(indice2 / indice1) * 180 / Math.PI;
        return { 
          error: `Reflexión total interna. Ángulo crítico: ${formatNumber(angulo_critico)}°` 
        };
      }
      
      const theta_t = Math.asin(sin_theta_t) * 180 / Math.PI;
      
      return { 
        result: { theta_t: formatNumber(theta_t) }, 
        steps: [
          `sin(θₜ) = (n₁/n₂) × sin(θᵢ) = (${indice1}/${indice2}) × sin(${angulo_i}°)`,
          `sin(θₜ) = ${formatNumber(indice1/indice2)} × ${formatNumber(sin_theta_i)} = ${formatNumber(sin_theta_t)}`,
          `θₜ = arcsin(${formatNumber(sin_theta_t)}) = ${formatNumber(theta_t)}°`
        ] 
      };
    }
  },
  {
    id: 'angulo-critico-reflexion-total',
    groupId: 'ley_snell',
    title: 'Ángulo Crítico',
    isComplementary: true,
    formula: 'θc = arcsin(n₂/n₁)',
    variables: [
      { symbol: 'n1', label: 'Índice medio 1 (n₁)', unit: '' },
      { symbol: 'n2', label: 'Índice medio 2 (n₂)', unit: '' }
    ],
    output: { symbol: 'theta_c', label: 'Ángulo crítico (θc)', unit: '°' },
    donde: "θc es el ángulo crítico para reflexión total interna, n₁ es el índice del medio más denso y n₂ es el índice del medio menos denso (n₁ > n₂)",
    resolve: ({ n1, n2 }) => {
      const indice1 = parseFloat(n1);
      const indice2 = parseFloat(n2);
      
      if (indice1 <= 0 || indice2 <= 0) return { error: 'Los índices de refracción deben ser positivos.' };
      if (indice2 >= indice1) return { error: 'Para reflexión total interna: n₁ > n₂' };
      
      const sin_theta_c = indice2 / indice1;
      const theta_c = Math.asin(sin_theta_c) * 180 / Math.PI;
      
      return { 
        result: { theta_c: formatNumber(theta_c) }, 
        steps: [
          `θc = arcsin(n₂/n₁) = arcsin(${indice2}/${indice1})`,
          `θc = arcsin(${formatNumber(sin_theta_c)}) = ${formatNumber(theta_c)}°`
        ] 
      };
    }
  },

  // Grupo 4: Índice de refracción
  {
    id: 'indice-refraccion-velocidad',
    groupId: 'indice_refraccion',
    title: 'Índice de Refracción',
    isFundamental: true,
    formula: 'n = c/v',
    variables: [
      { symbol: 'v', label: 'Velocidad en el medio (v)', unit: 'm/s' }
    ],
    output: { symbol: 'n', label: 'Índice de refracción (n)', unit: '' },
    constants: [
      { symbol: 'c', label: 'Velocidad de la luz', value: 299792458, unit: 'm/s' }
    ],
    donde: "n es el índice de refracción del medio, c es la velocidad de la luz en el vacío y v es la velocidad de la luz en el medio",
    resolve: ({ v }) => {
      const velocidad = parseFloat(v);
      const c = 299792458;
      
      if (velocidad <= 0) return { error: 'La velocidad debe ser positiva.' };
      if (velocidad > c) return { error: 'La velocidad no puede ser mayor que c.' };
      
      const n = c / velocidad;
      
      return { 
        result: { n: formatNumber(n) }, 
        steps: [
          `n = c/v = ${c} / ${velocidad}`,
          `n = ${formatNumber(n)}`
        ] 
      };
    }
  },

  // Grupo 5: Difracción por rendija
  {
    id: 'difraccion-rendija-minimos',
    groupId: 'difraccion_rendija',
    title: 'Posición de Mínimos (rendija simple)',
    isFundamental: true,
    formula: 'a⋅sin(θ) = m⋅λ',
    variables: [
      { symbol: 'a', label: 'Ancho rendija (a)', unit: 'μm' },
      { symbol: 'lambda', label: 'Longitud de onda (λ)', unit: 'nm' },
      { symbol: 'm', label: 'Orden del mínimo (m)', unit: '' }
    ],
    output: { symbol: 'theta', label: 'Ángulo del mínimo (θ)', unit: '°' },
    donde: "θ es el ángulo del mínimo de difracción, a es el ancho de la rendija, λ es la longitud de onda y m es el orden del mínimo",
    resolve: ({ a, lambda, m }) => {
      const ancho_um = parseFloat(a);
      const longitud_nm = parseFloat(lambda);
      const orden = parseInt(m);
      
      if (ancho_um <= 0) return { error: 'El ancho de la rendija debe ser positivo.' };
      if (longitud_nm <= 0) return { error: 'La longitud de onda debe ser positiva.' };
      if (orden === 0) return { error: 'El orden m debe ser ±1, ±2, ±3, ...' };
      
      const ancho_m = ancho_um * 1e-6; // Convertir μm a m
      const lambda_m = longitud_nm * 1e-9; // Convertir nm a m
      
      const sin_theta = (orden * lambda_m) / ancho_m;
      
      if (Math.abs(sin_theta) > 1) {
        return { error: 'No existe solución real. Reducir el orden m o aumentar el ancho a.' };
      }
      
      const theta = Math.asin(Math.abs(sin_theta)) * 180 / Math.PI;
      
      return { 
        result: { theta: formatNumber(theta) }, 
        steps: [
          `sin(θ) = m⋅λ/a = ${orden} × ${longitud_nm}×10⁻⁹ / ${ancho_um}×10⁻⁶`,
          `sin(θ) = ${formatNumber(Math.abs(sin_theta))}`,
          `θ = ${formatNumber(theta)}° (mínimo de orden ${Math.abs(orden)})`
        ] 
      };
    }
  },

  // Grupo 6: Límite de resolución
  {
    id: 'limite-resolucion-rayleigh',
    groupId: 'limite_resolucion',
    title: 'Límite de Resolución (Criterio de Rayleigh)',
    isFundamental: true,
    formula: 'θmin = 1.22⋅λ/D',
    variables: [
      { symbol: 'lambda', label: 'Longitud de onda (λ)', unit: 'nm' },
      { symbol: 'D', label: 'Diámetro apertura (D)', unit: 'mm' }
    ],
    output: { symbol: 'theta_min_arcsec', label: 'Resolución angular', unit: 'arcsec' },
    donde: "θmin es el límite de resolución angular (criterio de Rayleigh), λ es la longitud de onda y D es el diámetro de la apertura",
    resolve: ({ lambda, D }) => {
      const longitud_nm = parseFloat(lambda);
      const diametro_mm = parseFloat(D);
      
      if (longitud_nm <= 0) return { error: 'La longitud de onda debe ser positiva.' };
      if (diametro_mm <= 0) return { error: 'El diámetro debe ser positivo.' };
      
      const lambda_m = longitud_nm * 1e-9; // Convertir nm a m
      const D_m = diametro_mm * 1e-3; // Convertir mm a m
      
      const theta_min_rad = 1.22 * lambda_m / D_m;
      const theta_min_arcsec = theta_min_rad * 206265; // Convertir rad a arcsec
      
      return { 
        result: { theta_min_arcsec: formatNumber(theta_min_arcsec) }, 
        steps: [
          `θmin = 1.22 × λ/D = 1.22 × ${longitud_nm}×10⁻⁹ / ${diametro_mm}×10⁻³`,
          `θmin = ${formatNumber(theta_min_rad)} rad`,
          `θmin = ${formatNumber(theta_min_arcsec)} arcsec`
        ] 
      };
    }
  },

  // Grupo 7: Interferencia
  {
    id: 'interferencia-diferencia-fase',
    groupId: 'diferencia_camino',
    title: 'Diferencia de Fase',
    isFundamental: true,
    formula: 'δ = (2π/λ)⋅Δ',
    variables: [
      { symbol: 'delta_camino', label: 'Diferencia camino (Δ)', unit: 'nm' },
      { symbol: 'lambda', label: 'Longitud de onda (λ)', unit: 'nm' }
    ],
    output: { symbol: 'delta_fase', label: 'Diferencia fase (δ)', unit: 'rad' },
    donde: "δ es la diferencia de fase, Δ es la diferencia de camino óptico y λ es la longitud de onda",
    resolve: ({ delta_camino, lambda }) => {
      const diferencia_nm = parseFloat(delta_camino);
      const longitud_nm = parseFloat(lambda);
      
      if (longitud_nm <= 0) return { error: 'La longitud de onda debe ser positiva.' };
      
      const delta_fase = (2 * Math.PI * diferencia_nm) / longitud_nm;
      const tipo_interferencia = Math.abs(delta_fase % (2 * Math.PI)) < 0.1 ? 'Constructiva' : 
                                Math.abs((delta_fase % (2 * Math.PI)) - Math.PI) < 0.1 ? 'Destructiva' : 'Intermedia';
      
      return { 
        result: { delta_fase: formatNumber(delta_fase) }, 
        steps: [
          `δ = (2π/λ) × Δ = (2π/${longitud_nm}) × ${diferencia_nm}`,
          `δ = ${formatNumber(delta_fase)} rad`,
          `Tipo de interferencia: ${tipo_interferencia}`
        ] 
      };
    }
  },

  // Grupo 8: Ley de Malus
  {
    id: 'ley-malus-intensidad',
    groupId: 'ley_malus',
    title: 'Ley de Malus',
    isFundamental: true,
    formula: 'I = I₀⋅cos²(θ)',
    variables: [
      { symbol: 'I0', label: 'Intensidad inicial (I₀)', unit: 'W/m²' },
      { symbol: 'theta', label: 'Ángulo polarizador (θ)', unit: '°' }
    ],
    output: { symbol: 'I', label: 'Intensidad transmitida (I)', unit: 'W/m²' },
    donde: "I es la intensidad transmitida, I₀ es la intensidad inicial y θ es el ángulo entre los ejes de polarización (Ley de Malus)",
    resolve: ({ I0, theta }) => {
      const intensidad0 = parseFloat(I0);
      const angulo = parseFloat(theta);
      
      if (intensidad0 < 0) return { error: 'La intensidad inicial no puede ser negativa.' };
      
      const theta_rad = angulo * Math.PI / 180;
      const I = intensidad0 * Math.pow(Math.cos(theta_rad), 2);
      const porcentaje = (I / intensidad0) * 100;
      
      return { 
        result: { I: formatNumber(I) }, 
        steps: [
          `I = I₀ × cos²(θ) = ${intensidad0} × cos²(${angulo}°)`,
          `I = ${intensidad0} × ${formatNumber(Math.pow(Math.cos(theta_rad), 2))}`,
          `I = ${formatNumber(I)} W/m² (${formatNumber(porcentaje)}% transmitido)`
        ] 
      };
    }
  },

  // Grupo 9: Ángulo de Brewster
  {
    id: 'angulo-brewster-polarizacion',
    groupId: 'angulo_brewster',
    title: 'Ángulo de Brewster',
    isFundamental: true,
    formula: 'θB = arctan(n₂/n₁)',
    variables: [
      { symbol: 'n1', label: 'Índice medio 1 (n₁)', unit: '' },
      { symbol: 'n2', label: 'Índice medio 2 (n₂)', unit: '' }
    ],
    output: { symbol: 'theta_B', label: 'Ángulo de Brewster (θB)', unit: '°' },
    donde: "θB es el ángulo de Brewster (polarización completa por reflexión), n₁ es el índice del primer medio y n₂ es el índice del segundo medio",
    resolve: ({ n1, n2 }) => {
      const indice1 = parseFloat(n1);
      const indice2 = parseFloat(n2);
      
      if (indice1 <= 0 || indice2 <= 0) return { error: 'Los índices de refracción deben ser positivos.' };
      
      const theta_B = Math.atan(indice2 / indice1) * 180 / Math.PI;
      
      return { 
        result: { theta_B: formatNumber(theta_B) }, 
        steps: [
          `θB = arctan(n₂/n₁) = arctan(${indice2}/${indice1})`,
          `θB = arctan(${formatNumber(indice2/indice1)}) = ${formatNumber(theta_B)}°`
        ] 
      };
    }
  },

  // Grupo 10: Dispersión de Rayleigh
  {
    id: 'dispersion-rayleigh-intensidad',
    groupId: 'dispersion_rayleigh',
    title: 'Intensidad Dispersión Rayleigh',
    isFundamental: true,
    formula: 'I ∝ 1/λ⁴',
    variables: [
      { symbol: 'lambda1', label: 'Longitud onda 1 (λ₁)', unit: 'nm' },
      { symbol: 'lambda2', label: 'Longitud onda 2 (λ₂)', unit: 'nm' }
    ],
    output: { symbol: 'razon_intensidades', label: 'Razón I₁/I₂', unit: '' },
    donde: "La razón I₁/I₂ es proporcional a (λ₂/λ₁)⁴ según la dispersión de Rayleigh (explica por qué el cielo es azul)",
    resolve: ({ lambda1, lambda2 }) => {
      const longitud1 = parseFloat(lambda1);
      const longitud2 = parseFloat(lambda2);
      
      if (longitud1 <= 0 || longitud2 <= 0) return { error: 'Las longitudes de onda deben ser positivas.' };
      
      const razon_intensidades = Math.pow(longitud2 / longitud1, 4);
      
      return { 
        result: { razon_intensidades: formatNumber(razon_intensidades) }, 
        steps: [
          `I₁/I₂ = (λ₂/λ₁)⁴ = (${longitud2}/${longitud1})⁴`,
          `I₁/I₂ = ${formatNumber(Math.pow(longitud2/longitud1, 4))}`
        ] 
      };
    }
  },

  // Grupo 11: Interferencia de dos fuentes
  {
    id: 'interferencia-dos-fuentes-intensidad',
    groupId: 'interferencia_intensidad',
    title: 'Intensidad por Interferencia',
    isFundamental: true,
    formula: 'I = I₁ + I₂ + 2√(I₁⋅I₂)⋅cos(δ)',
    variables: [
      { symbol: 'I1', label: 'Intensidad fuente 1 (I₁)', unit: 'W/m²' },
      { symbol: 'I2', label: 'Intensidad fuente 2 (I₂)', unit: 'W/m²' },
      { symbol: 'delta', label: 'Diferencia de fase (δ)', unit: 'rad' }
    ],
    output: { symbol: 'I', label: 'Intensidad resultante (I)', unit: 'W/m²' },
    donde: "I es la intensidad resultante, I₁ e I₂ son las intensidades de las dos fuentes y δ es la diferencia de fase entre ellas",
    resolve: ({ I1, I2, delta }) => {
      const intensidad1 = parseFloat(I1);
      const intensidad2 = parseFloat(I2);
      const fase = parseFloat(delta);
      
      if (intensidad1 < 0 || intensidad2 < 0) return { error: 'Las intensidades no pueden ser negativas.' };
      
      const I = intensidad1 + intensidad2 + 2 * Math.sqrt(intensidad1 * intensidad2) * Math.cos(fase);
      
      let tipo;
      if (Math.abs(Math.cos(fase) - 1) < 0.01) {
        tipo = 'Constructiva (máximo)';
      } else if (Math.abs(Math.cos(fase) + 1) < 0.01) {
        tipo = 'Destructiva (mínimo)';
      } else {
        tipo = 'Intermedia';
      }
      
      return { 
        result: { I: formatNumber(I) }, 
        steps: [
          `I = I₁ + I₂ + 2√(I₁⋅I₂)⋅cos(δ)`,
          `I = ${intensidad1} + ${intensidad2} + 2√(${intensidad1}⋅${intensidad2})⋅cos(${fase})`,
          `I = ${intensidad1} + ${intensidad2} + ${formatNumber(2 * Math.sqrt(intensidad1 * intensidad2))}⋅${formatNumber(Math.cos(fase))}`,
          `I = ${formatNumber(I)} W/m²`,
          `Tipo de interferencia: ${tipo}`
        ] 
      };
    }
  },

  // Grupo 12: Frecuencia de corte en guías de onda
  {
    id: 'frecuencia-corte-guia-onda',
    groupId: 'frecuencia_corte',
    title: 'Frecuencia de Corte (guía rectangular)',
    isFundamental: true,
    formula: 'fc = (c/2π)⋅√((mπ/a)² + (nπ/b)²)',
    variables: [
      { symbol: 'm', label: 'Modo m', unit: '' },
      { symbol: 'n', label: 'Modo n', unit: '' },
      { symbol: 'a', label: 'Dimensión a (ancho)', unit: 'cm' },
      { symbol: 'b', label: 'Dimensión b (alto)', unit: 'cm' }
    ],
    output: { symbol: 'fc', label: 'Frecuencia de corte (fc)', unit: 'GHz' },
    constants: [
      { symbol: 'c', label: 'Velocidad de la luz', value: 299792458, unit: 'm/s' }
    ],
    donde: "fc es la frecuencia de corte del modo (m,n), c es la velocidad de la luz, a y b son las dimensiones de la guía rectangular",
    resolve: ({ m, n, a, b }) => {
      const modo_m = parseInt(m);
      const modo_n = parseInt(n);
      const ancho_cm = parseFloat(a);
      const alto_cm = parseFloat(b);
      const c = 299792458;
      
      if (ancho_cm <= 0 || alto_cm <= 0) return { error: 'Las dimensiones deben ser positivas.' };
      if (modo_m < 0 || modo_n < 0) return { error: 'Los modos deben ser enteros no negativos.' };
      if (modo_m === 0 && modo_n === 0) return { error: 'Al menos uno de los modos debe ser mayor que 0.' };
      
      const a_m = ancho_cm * 0.01; // Convertir cm a m
      const b_m = alto_cm * 0.01;
      
      const termino_a = (modo_m * Math.PI / a_m) ** 2;
      const termino_b = (modo_n * Math.PI / b_m) ** 2;
      const fc_Hz = (c / (2 * Math.PI)) * Math.sqrt(termino_a + termino_b);
      const fc_GHz = fc_Hz / 1e9;
      
      return { 
        result: { fc: formatNumber(fc_GHz) }, 
        steps: [
          `Modo TE${modo_m}${modo_n} o TM${modo_m}${modo_n}`,
          `a = ${ancho_cm} cm = ${a_m} m, b = ${alto_cm} cm = ${b_m} m`,
          `fc = (c/2π)⋅√((${modo_m}π/${a_m})² + (${modo_n}π/${b_m})²)`,
          `fc = ${formatNumber(fc_Hz)} Hz = ${formatNumber(fc_GHz)} GHz`
        ] 
      };
    }
  }

];