import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
  // --- Grupo 1: Flujo Magnético ---
  {
    id: 'flujo-magnetico-phi',
    groupId: 'flujo_magnetico',
    title: 'Calcular Flujo Magnético (Φ_B)',
    formula: 'Φ_B = B * A * cos(α)',
    variables: [
      { symbol: 'B', label: 'Campo Magnético', unit: 'T' },
      { symbol: 'A', label: 'Área', unit: 'm²' },
      { symbol: 'α', label: 'Ángulo', unit: '°' },
    ],
    output: { symbol: 'Φ_B', label: 'Flujo Magnético', unit: 'Wb' },
    resolve: ({ B, A, α }) => {
      const phi_b = parseFloat(B) * parseFloat(A) * Math.cos(parseFloat(α) * Math.PI / 180);
      return { result: { 'Φ_B': formatNumber(phi_b) }, steps: [`Φ_B = ${B} * ${A} * cos(${α}°) = ${formatNumber(phi_b)} Wb`] };
    }
  },
  {
    id: 'flujo-magnetico-b',
    groupId: 'flujo_magnetico',
    title: 'Calcular Campo Magnético (B)',
    formula: 'B = Φ_B / (A * cos(α))',
    variables: [
      { symbol: 'Φ_B', label: 'Flujo Magnético', unit: 'Wb' },
      { symbol: 'A', label: 'Área', unit: 'm²' },
      { symbol: 'α', label: 'Ángulo', unit: '°' },
    ],
    output: { symbol: 'B', label: 'Campo Magnético', unit: 'T' },
    resolve: ({ 'Φ_B': phi_b, A, α }) => {
      const denominator = parseFloat(A) * Math.cos(parseFloat(α) * Math.PI / 180);
      const B = parseFloat(phi_b) / denominator;
      return { result: { B: formatNumber(B) }, steps: [`B = ${phi_b} / (${A} * cos(${α}°)) = ${formatNumber(B)} T`] };
    }
  },
  {
    id: 'flujo-magnetico-a',
    groupId: 'flujo_magnetico',
    title: 'Calcular Área (A)',
    formula: 'A = Φ_B / (B * cos(α))',
    variables: [
      { symbol: 'Φ_B', label: 'Flujo Magnético', unit: 'Wb' },
      { symbol: 'B', label: 'Campo Magnético', unit: 'T' },
      { symbol: 'α', label: 'Ángulo', unit: '°' },
    ],
    output: { symbol: 'A', label: 'Área', unit: 'm²' },
    resolve: ({ 'Φ_B': phi_b, B, α }) => {
      const denominator = parseFloat(B) * Math.cos(parseFloat(α) * Math.PI / 180);
      const A = parseFloat(phi_b) / denominator;
      return { result: { A: formatNumber(A) }, steps: [`A = ${phi_b} / (${B} * cos(${α}°)) = ${formatNumber(A)} m²`] };
    }
  },

  // --- Grupo 2: Ley de Faraday ---
  {
    id: 'ley-faraday-epsilon',
    groupId: 'ley_faraday',
    title: 'Calcular FEM Inducida (ε)',
    formula: 'ε = -N * (ΔΦ_B / Δt)',
    variables: [
      { symbol: 'N', label: 'Número de Espiras', unit: '' },
      { symbol: 'ΔΦ_B', label: 'Cambio de Flujo', unit: 'Wb' },
      { symbol: 'Δt', label: 'Intervalo de Tiempo', unit: 's' },
    ],
    output: { symbol: 'ε', label: 'FEM Inducida', unit: 'V' },
    resolve: ({ N, 'ΔΦ_B': delta_phi, 'Δt': delta_t }) => {
      const epsilon = -parseFloat(N) * (parseFloat(delta_phi) / parseFloat(delta_t));
      return { result: { 'ε': formatNumber(epsilon) }, steps: [`ε = -${N} * (${delta_phi} / ${delta_t}) = ${formatNumber(epsilon)} V`] };
    }
  },
  {
    id: 'ley-faraday-n',
    groupId: 'ley_faraday',
    title: 'Calcular Número de Espiras (N)',
    formula: 'N = (-ε * Δt) / ΔΦ_B',
    variables: [
      { symbol: 'ε', label: 'FEM Inducida', unit: 'V' },
      { symbol: 'ΔΦ_B', label: 'Cambio de Flujo', unit: 'Wb' },
      { symbol: 'Δt', label: 'Intervalo de Tiempo', unit: 's' },
    ],
    output: { symbol: 'N', label: 'Número de Espiras', unit: '' },
    resolve: ({ 'ε': epsilon, 'ΔΦ_B': delta_phi, 'Δt': delta_t }) => {
      const N = (-parseFloat(epsilon) * parseFloat(delta_t)) / parseFloat(delta_phi);
      return { result: { N: formatNumber(N) }, steps: [`N = (-${epsilon} * ${delta_t}) / ${delta_phi} = ${formatNumber(N)}`] };
    }
  },
  {
    id: 'ley-faraday-delta-phi',
    groupId: 'ley_faraday',
    title: 'Calcular Cambio de Flujo (ΔΦ_B)',
    formula: 'ΔΦ_B = (-ε * Δt) / N',
    variables: [
      { symbol: 'ε', label: 'FEM Inducida', unit: 'V' },
      { symbol: 'N', label: 'Número de Espiras', unit: '' },
      { symbol: 'Δt', label: 'Intervalo de Tiempo', unit: 's' },
    ],
    output: { symbol: 'ΔΦ_B', label: 'Cambio de Flujo', unit: 'Wb' },
    resolve: ({ 'ε': epsilon, N, 'Δt': delta_t }) => {
      const delta_phi = (-parseFloat(epsilon) * parseFloat(delta_t)) / parseFloat(N);
      return { result: { 'ΔΦ_B': formatNumber(delta_phi) }, steps: [`ΔΦ_B = (-${epsilon} * ${delta_t}) / ${N} = ${formatNumber(delta_phi)} Wb`] };
    }
  },
  {
    id: 'ley-faraday-delta-t',
    groupId: 'ley_faraday',
    title: 'Calcular Intervalo de Tiempo (Δt)',
    formula: 'Δt = (-N * ΔΦ_B) / ε',
    variables: [
      { symbol: 'ε', label: 'FEM Inducida', unit: 'V' },
      { symbol: 'N', label: 'Número de Espiras', unit: '' },
      { symbol: 'ΔΦ_B', label: 'Cambio de Flujo', unit: 'Wb' },
    ],
    output: { symbol: 'Δt', label: 'Intervalo de Tiempo', unit: 's' },
    resolve: ({ 'ε': epsilon, N, 'ΔΦ_B': delta_phi }) => {
      const delta_t = (-parseFloat(N) * parseFloat(delta_phi)) / parseFloat(epsilon);
      return { result: { 'Δt': formatNumber(delta_t) }, steps: [`Δt = (-${N} * ${delta_phi}) / ${epsilon} = ${formatNumber(delta_t)} s`] };
    }
  },

  // --- Grupo 3: Autoinductancia ---
  {
    id: 'autoinductancia-l',
    groupId: 'autoinductancia',
    title: 'Calcular Autoinductancia (L)',
    formula: 'L = (N * Φ_B) / I',
    variables: [
      { symbol: 'N', label: 'Número de Espiras', unit: '' },
      { symbol: 'Φ_B', label: 'Flujo Magnético', unit: 'Wb' },
      { symbol: 'I', label: 'Corriente', unit: 'A' },
    ],
    output: { symbol: 'L', label: 'Autoinductancia', unit: 'H' },
    resolve: ({ N, 'Φ_B': phi_b, I }) => {
      const L = (parseFloat(N) * parseFloat(phi_b)) / parseFloat(I);
      return { result: { L: formatNumber(L) }, steps: [`L = (${N} * ${phi_b}) / ${I} = ${formatNumber(L)} H`] };
    }
  },
  {
    id: 'autoinductancia-n',
    groupId: 'autoinductancia',
    title: 'Calcular Número de Espiras (N)',
    formula: 'N = (L * I) / Φ_B',
    variables: [
      { symbol: 'L', label: 'Autoinductancia', unit: 'H' },
      { symbol: 'Φ_B', label: 'Flujo Magnético', unit: 'Wb' },
      { symbol: 'I', label: 'Corriente', unit: 'A' },
    ],
    output: { symbol: 'N', label: 'Número de Espiras', unit: '' },
    resolve: ({ L, 'Φ_B': phi_b, I }) => {
      const N = (parseFloat(L) * parseFloat(I)) / parseFloat(phi_b);
      return { result: { N: formatNumber(N) }, steps: [`N = (${L} * ${I}) / ${phi_b} = ${formatNumber(N)}`] };
    }
  },
  {
    id: 'autoinductancia-phi',
    groupId: 'autoinductancia',
    title: 'Calcular Flujo Magnético (Φ_B)',
    formula: 'Φ_B = (L * I) / N',
    variables: [
      { symbol: 'L', label: 'Autoinductancia', unit: 'H' },
      { symbol: 'N', label: 'Número de Espiras', unit: '' },
      { symbol: 'I', label: 'Corriente', unit: 'A' },
    ],
    output: { symbol: 'Φ_B', label: 'Flujo Magnético', unit: 'Wb' },
    resolve: ({ L, N, I }) => {
      const phi_b = (parseFloat(L) * parseFloat(I)) / parseFloat(N);
      return { result: { 'Φ_B': formatNumber(phi_b) }, steps: [`Φ_B = (${L} * ${I}) / ${N} = ${formatNumber(phi_b)} Wb`] };
    }
  },
  {
    id: 'autoinductancia-i',
    groupId: 'autoinductancia',
    title: 'Calcular Corriente (I)',
    formula: 'I = (N * Φ_B) / L',
    variables: [
      { symbol: 'L', label: 'Autoinductancia', unit: 'H' },
      { symbol: 'N', label: 'Número de Espiras', unit: '' },
      { symbol: 'Φ_B', label: 'Flujo Magnético', unit: 'Wb' },
    ],
    output: { symbol: 'I', label: 'Corriente', unit: 'A' },
    resolve: ({ L, N, 'Φ_B': phi_b }) => {
      const I = (parseFloat(N) * parseFloat(phi_b)) / parseFloat(L);
      return { result: { I: formatNumber(I) }, steps: [`I = (${N} * ${phi_b}) / ${L} = ${formatNumber(I)} A`] };
    }
  },

  // --- Grupo 4: FEM Autoinducida ---
  {
    id: 'fem-autoinducida-epsilon',
    groupId: 'fem_autoinducida',
    title: 'Calcular FEM Autoinducida (ε_L)',
    formula: 'ε_L = -L * (ΔI / Δt)',
    variables: [
      { symbol: 'L', label: 'Autoinductancia', unit: 'H' },
      { symbol: 'ΔI', label: 'Cambio de Corriente', unit: 'A' },
      { symbol: 'Δt', label: 'Intervalo de Tiempo', unit: 's' },
    ],
    output: { symbol: 'ε_L', label: 'FEM Autoinducida', unit: 'V' },
    resolve: ({ L, 'ΔI': delta_i, 'Δt': delta_t }) => {
      const epsilon_l = -parseFloat(L) * (parseFloat(delta_i) / parseFloat(delta_t));
      return { result: { 'ε_L': formatNumber(epsilon_l) }, steps: [`ε_L = -${L} * (${delta_i} / ${delta_t}) = ${formatNumber(epsilon_l)} V`] };
    }
  },
  {
    id: 'fem-autoinducida-l',
    groupId: 'fem_autoinducida',
    title: 'Calcular Autoinductancia (L)',
    formula: 'L = (-ε_L * Δt) / ΔI',
    variables: [
      { symbol: 'ε_L', label: 'FEM Autoinducida', unit: 'V' },
      { symbol: 'ΔI', label: 'Cambio de Corriente', unit: 'A' },
      { symbol: 'Δt', label: 'Intervalo de Tiempo', unit: 's' },
    ],
    output: { symbol: 'L', label: 'Autoinductancia', unit: 'H' },
    resolve: ({ 'ε_L': epsilon_l, 'ΔI': delta_i, 'Δt': delta_t }) => {
      const L = (-parseFloat(epsilon_l) * parseFloat(delta_t)) / parseFloat(delta_i);
      return { result: { L: formatNumber(L) }, steps: [`L = (-${epsilon_l} * ${delta_t}) / ${delta_i} = ${formatNumber(L)} H`] };
    }
  },
  {
    id: 'fem-autoinducida-delta-i',
    groupId: 'fem_autoinducida',
    title: 'Calcular Cambio de Corriente (ΔI)',
    formula: 'ΔI = (-ε_L * Δt) / L',
    variables: [
      { symbol: 'ε_L', label: 'FEM Autoinducida', unit: 'V' },
      { symbol: 'L', label: 'Autoinductancia', unit: 'H' },
      { symbol: 'Δt', label: 'Intervalo de Tiempo', unit: 's' },
    ],
    output: { symbol: 'ΔI', label: 'Cambio de Corriente', unit: 'A' },
    resolve: ({ 'ε_L': epsilon_l, L, 'Δt': delta_t }) => {
      const delta_i = (-parseFloat(epsilon_l) * parseFloat(delta_t)) / parseFloat(L);
      return { result: { 'ΔI': formatNumber(delta_i) }, steps: [`ΔI = (-${epsilon_l} * ${delta_t}) / ${L} = ${formatNumber(delta_i)} A`] };
    }
  },
  {
    id: 'fem-autoinducida-delta-t',
    groupId: 'fem_autoinducida',
    title: 'Calcular Intervalo de Tiempo (Δt)',
    formula: 'Δt = (-L * ΔI) / ε_L',
    variables: [
      { symbol: 'ε_L', label: 'FEM Autoinducida', unit: 'V' },
      { symbol: 'L', label: 'Autoinductancia', unit: 'H' },
      { symbol: 'ΔI', label: 'Cambio de Corriente', unit: 'A' },
    ],
    output: { symbol: 'Δt', label: 'Intervalo de Tiempo', unit: 's' },
    resolve: ({ 'ε_L': epsilon_l, L, 'ΔI': delta_i }) => {
      const delta_t = (-parseFloat(L) * parseFloat(delta_i)) / parseFloat(epsilon_l);
      return { result: { 'Δt': formatNumber(delta_t) }, steps: [`Δt = (-${L} * ${delta_i}) / ${epsilon_l} = ${formatNumber(delta_t)} s`] };
    }
  },

  // --- Grupo 5: Energía en un Inductor ---
  {
    id: 'energia-inductor-u',
    groupId: 'energia_inductor',
    title: 'Calcular Energía Almacenada (U_L)',
    formula: 'U_L = 0.5 * L * I²',
    variables: [
      { symbol: 'L', label: 'Autoinductancia', unit: 'H' },
      { symbol: 'I', label: 'Corriente', unit: 'A' },
    ],
    output: { symbol: 'U_L', label: 'Energía Almacenada', unit: 'J' },
    resolve: ({ L, I }) => {
      const u_l = 0.5 * parseFloat(L) * Math.pow(parseFloat(I), 2);
      return { result: { 'U_L': formatNumber(u_l) }, steps: [`U_L = 0.5 * ${L} * ${I}² = ${formatNumber(u_l)} J`] };
    }
  },
  {
    id: 'energia-inductor-l',
    groupId: 'energia_inductor',
    title: 'Calcular Autoinductancia (L)',
    formula: 'L = (2 * U_L) / I²',
    variables: [
      { symbol: 'U_L', label: 'Energía Almacenada', unit: 'J' },
      { symbol: 'I', label: 'Corriente', unit: 'A' },
    ],
    output: { symbol: 'L', label: 'Autoinductancia', unit: 'H' },
    resolve: ({ 'U_L': u_l, I }) => {
      const L = (2 * parseFloat(u_l)) / Math.pow(parseFloat(I), 2);
      return { result: { L: formatNumber(L) }, steps: [`L = (2 * ${u_l}) / ${I}² = ${formatNumber(L)} H`] };
    }
  },
  {
    id: 'energia-inductor-i',
    groupId: 'energia_inductor',
    title: 'Calcular Corriente (I)',
    formula: 'I = sqrt((2 * U_L) / L)',
    variables: [
      { symbol: 'U_L', label: 'Energía Almacenada', unit: 'J' },
      { symbol: 'L', label: 'Autoinductancia', unit: 'H' },
    ],
    output: { symbol: 'I', label: 'Corriente', unit: 'A' },
    resolve: ({ 'U_L': u_l, L }) => {
      const I = Math.sqrt((2 * parseFloat(u_l)) / parseFloat(L));
      return { result: { I: formatNumber(I) }, steps: [`I = sqrt((2 * ${u_l}) / ${L}) = ${formatNumber(I)} A`] };
    }
  },

  // --- Grupo 6: Transformadores ---
  {
    id: 'transformador-v2',
    groupId: 'transformador_completo',
    title: 'Calcular Voltaje Secundario (V₂)',
    formula: 'V₂ = V₁ * (N₂ / N₁)',
    variables: [
      { symbol: 'V₁', label: 'Voltaje Primario', unit: 'V' },
      { symbol: 'N₁', label: 'Espiras Primario', unit: '' },
      { symbol: 'N₂', label: 'Espiras Secundario', unit: '' },
    ],
    output: { symbol: 'V₂', label: 'Voltaje Secundario', unit: 'V' },
    resolve: ({ 'V₁': v1, 'N₁': n1, 'N₂': n2 }) => {
      const v2 = parseFloat(v1) * (parseFloat(n2) / parseFloat(n1));
      const relacion = parseFloat(n2) / parseFloat(n1);
      const tipo = relacion < 1 ? 'Reductor' : relacion > 1 ? 'Elevador' : 'Aislamiento';
      return { 
        result: { 
          'V₂': formatNumber(v2),
          'Relación (N₂/N₁)': formatNumber(relacion),
          'Tipo': tipo
        }, 
        steps: [
          `Relación: N₂/N₁ = ${n2}/${n1} = ${formatNumber(relacion)}`,
          `V₂ = ${v1} * ${formatNumber(relacion)} = ${formatNumber(v2)} V`,
          `Tipo: ${tipo}`
        ] 
      };
    }
  },
  {
    id: 'transformador-i2',
    groupId: 'transformador_completo',
    title: 'Calcular Corriente Secundaria (I₂)',
    formula: 'I₂ = I₁ * (N₁ / N₂)',
    variables: [
      { symbol: 'I₁', label: 'Corriente Primaria', unit: 'A' },
      { symbol: 'N₁', label: 'Espiras Primario', unit: '' },
      { symbol: 'N₂', label: 'Espiras Secundario', unit: '' },
    ],
    output: { symbol: 'I₂', label: 'Corriente Secundaria', unit: 'A' },
    resolve: ({ 'I₁': i1, 'N₁': n1, 'N₂': n2 }) => {
      const i2 = parseFloat(i1) * (parseFloat(n1) / parseFloat(n2));
      return { 
        result: { 'I₂': formatNumber(i2) }, 
        steps: [`I₂ = ${i1} * (${n1} / ${n2}) = ${formatNumber(i2)} A`] 
      };
    }
  },
  {
    id: 'transformador-n2',
    groupId: 'transformador_completo',
    title: 'Calcular Espiras Secundario (N₂)',
    formula: 'N₂ = N₁ * (V₂ / V₁)',
    variables: [
      { symbol: 'N₁', label: 'Espiras Primario', unit: '' },
      { symbol: 'V₁', label: 'Voltaje Primario', unit: 'V' },
      { symbol: 'V₂', label: 'Voltaje Secundario', unit: 'V' },
    ],
    output: { symbol: 'N₂', label: 'Espiras Secundario', unit: '' },
    resolve: ({ 'N₁': n1, 'V₁': v1, 'V₂': v2 }) => {
      const n2 = parseFloat(n1) * (parseFloat(v2) / parseFloat(v1));
      return { 
        result: { 'N₂': formatNumber(Math.round(n2)) }, 
        steps: [`N₂ = ${n1} * (${v2} / ${v1}) = ${formatNumber(Math.round(n2))}`] 
      };
    }
  },
  {
    id: 'potencia-transformador',
    groupId: 'potencia_transformador',
    title: 'Calcular Potencias (P₁ y P₂)',
    formula: 'P₁ = V₁ * I₁, P₂ = V₂ * I₂',
    variables: [
      { symbol: 'V₁', label: 'Voltaje Primario', unit: 'V' },
      { symbol: 'I₁', label: 'Corriente Primaria', unit: 'A' },
      { symbol: 'V₂', label: 'Voltaje Secundario', unit: 'V' },
      { symbol: 'I₂', label: 'Corriente Secundaria', unit: 'A' },
    ],
    output: { symbol: 'P', label: 'Potencias', unit: 'W' },
    resolve: ({ 'V₁': v1, 'I₁': i1, 'V₂': v2, 'I₂': i2 }) => {
      const p1 = parseFloat(v1) * parseFloat(i1);
      const p2 = parseFloat(v2) * parseFloat(i2);
      const perdidas = p1 - p2;
      const rendimiento = (p2 / p1) * 100;
      return { 
        result: { 
          'P₁ (Primaria)': formatNumber(p1) + ' W',
          'P₂ (Secundaria)': formatNumber(p2) + ' W',
          'Pérdidas': formatNumber(perdidas) + ' W',
          'Rendimiento': formatNumber(rendimiento) + ' %'
        }, 
        steps: [
          `P₁ = ${v1} * ${i1} = ${formatNumber(p1)} W`,
          `P₂ = ${v2} * ${i2} = ${formatNumber(p2)} W`,
          `Pérdidas = P₁ - P₂ = ${formatNumber(perdidas)} W`,
          `Rendimiento = (P₂/P₁) * 100% = ${formatNumber(rendimiento)}%`
        ] 
      };
    }
  },
  {
    id: 'rendimiento-transformador',
    groupId: 'rendimiento_transformador',
    title: 'Calcular Rendimiento (η)',
    formula: 'η = (P₂ / P₁) * 100%',
    variables: [
      { symbol: 'P₂', label: 'Potencia Secundaria', unit: 'W' },
      { symbol: 'P₁', label: 'Potencia Primaria', unit: 'W' },
    ],
    output: { symbol: 'η', label: 'Rendimiento', unit: '%' },
    resolve: ({ 'P₂': p2, 'P₁': p1 }) => {
      const eta = (parseFloat(p2) / parseFloat(p1)) * 100;
      const perdidas = parseFloat(p1) - parseFloat(p2);
      const porcentaje_perdidas = (perdidas / parseFloat(p1)) * 100;
      return { 
        result: { 
          'η (Rendimiento)': formatNumber(eta) + ' %',
          'Pérdidas': formatNumber(perdidas) + ' W',
          '% Pérdidas': formatNumber(porcentaje_perdidas) + ' %'
        }, 
        steps: [
          `η = (${p2} / ${p1}) * 100% = ${formatNumber(eta)}%`,
          `Pérdidas = ${p1} - ${p2} = ${formatNumber(perdidas)} W`,
          `% Pérdidas = ${formatNumber(porcentaje_perdidas)}%`
        ] 
      };
    }
  },
  {
    id: 'transformador-completo',
    groupId: 'transformador_completo',
    title: 'Análisis Completo de Transformador',
    formula: 'V₂/V₁ = N₂/N₁ = I₁/I₂',
    variables: [
      { symbol: 'V₁', label: 'Voltaje Primario', unit: 'V' },
      { symbol: 'I₁', label: 'Corriente Primaria', unit: 'A' },
      { symbol: 'N₁', label: 'Espiras Primario', unit: '' },
      { symbol: 'N₂', label: 'Espiras Secundario', unit: '' },
    ],
    output: { symbol: 'Análisis', label: 'Resultados Completos', unit: '' },
    resolve: ({ 'V₁': v1, 'I₁': i1, 'N₁': n1, 'N₂': n2 }) => {
      const relacion = parseFloat(n2) / parseFloat(n1);
      const v2 = parseFloat(v1) * relacion;
      const i2 = parseFloat(i1) / relacion;
      const p1 = parseFloat(v1) * parseFloat(i1);
      const p2 = v2 * i2;
      const tipo = relacion < 1 ? 'Reductor' : relacion > 1 ? 'Elevador' : 'Aislamiento';
      
      return { 
        result: { 
          'Tipo': tipo,
          'Relación (N₂/N₁)': formatNumber(relacion),
          'V₂': formatNumber(v2) + ' V',
          'I₂': formatNumber(i2) + ' A',
          'P₁': formatNumber(p1) + ' W',
          'P₂': formatNumber(p2) + ' W'
        }, 
        steps: [
          `Relación: N₂/N₁ = ${n2}/${n1} = ${formatNumber(relacion)}`,
          `Tipo: ${tipo}`,
          `V₂ = V₁ * (N₂/N₁) = ${v1} * ${formatNumber(relacion)} = ${formatNumber(v2)} V`,
          `I₂ = I₁ * (N₁/N₂) = ${i1} * ${formatNumber(1/relacion)} = ${formatNumber(i2)} A`,
          `P₁ = V₁ * I₁ = ${formatNumber(p1)} W`,
          `P₂ = V₂ * I₂ = ${formatNumber(p2)} W`,
          `Conservación de potencia: P₁ ≈ P₂ (ideal)`
        ] 
      };
    }
  }
];
