// ============================================================================
// CALCULADORAS DE TEMPERATURA
// ============================================================================

export const definitions = [
  // ========== GRUPO 1: Conversión Celsius ↔ Kelvin ==========
  {
    id: 'temperatura-celsius-kelvin',
    groupId: 'temperatura-celsius-kelvin',
    title: 'Conversión Celsius a Kelvin',
    description: 'Convierte temperatura de grados Celsius a Kelvin',
    formula: 'T(K) = T(°C) + 273.15',
    type: 'form-based',
    variables: [
      { 
        symbol: 'T_C', 
        label: 'Temperatura en Celsius (T)', 
        unit: '°C', 
        type: 'number',
        example: '25'
      }
    ],
    output: { 
      symbol: 'T_K', 
      label: 'Temperatura en Kelvin', 
      unit: 'K' 
    },
    resolve: (values) => {
      const { T_C } = values;
      if (T_C === '' || T_C === undefined) {
        return { error: 'Por favor ingresa la temperatura en Celsius' };
      }
      
      const T_K = T_C + 273.15;
      
      return {
        result: { T_K: T_K.toFixed(2) },
        steps: [
          String.raw`\text{Datos: } T(°C) = ${T_C} \text{ °C}`,
          String.raw`\text{Fórmula: } T(K) = T(°C) + 273.15`,
          String.raw`\text{Sustitución: } T(K) = ${T_C} + 273.15`,
          String.raw`\text{Resultado: } T(K) = ${T_K.toFixed(2)} \text{ K}`
        ]
      };
    }
  },

  {
    id: 'temperatura-kelvin-celsius',
    groupId: 'temperatura-celsius-kelvin',
    title: 'Conversión Kelvin a Celsius',
    description: 'Convierte temperatura de Kelvin a grados Celsius',
    formula: 'T(°C) = T(K) - 273.15',
    type: 'form-based',
    variables: [
      { 
        symbol: 'T_K', 
        label: 'Temperatura en Kelvin (T)', 
        unit: 'K', 
        type: 'number',
        example: '298.15'
      }
    ],
    output: { 
      symbol: 'T_C', 
      label: 'Temperatura en Celsius', 
      unit: '°C' 
    },
    resolve: (values) => {
      const { T_K } = values;
      if (T_K === '' || T_K === undefined) {
        return { error: 'Por favor ingresa la temperatura en Kelvin' };
      }
      
      if (T_K < 0) {
        return { error: 'La temperatura en Kelvin no puede ser negativa' };
      }
      
      const T_C = T_K - 273.15;
      
      return {
        result: { T_C: T_C.toFixed(2) },
        steps: [
          String.raw`\text{Datos: } T(K) = ${T_K} \text{ K}`,
          String.raw`\text{Fórmula: } T(°C) = T(K) - 273.15`,
          String.raw`\text{Sustitución: } T(°C) = ${T_K} - 273.15`,
          String.raw`\text{Resultado: } T(°C) = ${T_C.toFixed(2)} \text{ °C}`
        ]
      };
    }
  },

  // ========== GRUPO 2: Conversión Celsius ↔ Fahrenheit ==========
  {
    id: 'temperatura-celsius-fahrenheit',
    groupId: 'temperatura-celsius-fahrenheit',
    title: 'Conversión Celsius a Fahrenheit',
    description: 'Convierte temperatura de grados Celsius a Fahrenheit',
    formula: 'T(°F) = \\frac{9}{5} \\cdot T(°C) + 32',
    type: 'form-based',
    variables: [
      { 
        symbol: 'T_C', 
        label: 'Temperatura en Celsius (T)', 
        unit: '°C', 
        type: 'number',
        example: '25'
      }
    ],
    output: { 
      symbol: 'T_F', 
      label: 'Temperatura en Fahrenheit', 
      unit: '°F' 
    },
    resolve: (values) => {
      const { T_C } = values;
      if (T_C === '' || T_C === undefined) {
        return { error: 'Por favor ingresa la temperatura en Celsius' };
      }
      
      const T_F = (9/5) * T_C + 32;
      
      return {
        result: { T_F: T_F.toFixed(2) },
        steps: [
          String.raw`\text{Datos: } T(°C) = ${T_C} \text{ °C}`,
          String.raw`\text{Fórmula: } T(°F) = \frac{9}{5} \times T(°C) + 32`,
          String.raw`\text{Sustitución: } T(°F) = \frac{9}{5} \times ${T_C} + 32`,
          String.raw`\text{Cálculo: } T(°F) = ${((9/5) * T_C).toFixed(2)} + 32`,
          String.raw`\text{Resultado: } T(°F) = ${T_F.toFixed(2)} \text{ °F}`
        ]
      };
    }
  },

  {
    id: 'temperatura-fahrenheit-celsius',
    groupId: 'temperatura-celsius-fahrenheit',
    title: 'Conversión Fahrenheit a Celsius',
    description: 'Convierte temperatura de Fahrenheit a grados Celsius',
    formula: 'T(°C) = \\frac{5}{9} \\cdot [T(°F) - 32]',
    type: 'form-based',
    variables: [
      { 
        symbol: 'T_F', 
        label: 'Temperatura en Fahrenheit (T)', 
        unit: '°F', 
        type: 'number',
        example: '77'
      }
    ],
    output: { 
      symbol: 'T_C', 
      label: 'Temperatura en Celsius', 
      unit: '°C' 
    },
    resolve: (values) => {
      const { T_F } = values;
      if (T_F === '' || T_F === undefined) {
        return { error: 'Por favor ingresa la temperatura en Fahrenheit' };
      }
      
      const T_C = (5/9) * (T_F - 32);
      
      return {
        result: { T_C: T_C.toFixed(2) },
        steps: [
          String.raw`\text{Datos: } T(°F) = ${T_F} \text{ °F}`,
          String.raw`\text{Fórmula: } T(°C) = \frac{5}{9} \times [T(°F) - 32]`,
          String.raw`\text{Sustitución: } T(°C) = \frac{5}{9} \times [${T_F} - 32]`,
          String.raw`\text{Cálculo: } T(°C) = \frac{5}{9} \times ${(T_F - 32).toFixed(2)}`,
          String.raw`\text{Resultado: } T(°C) = ${T_C.toFixed(2)} \text{ °C}`
        ]
      };
    }
  },

  // ========== GRUPO 3: Energía Cinética Molecular ==========
  {
    id: 'temperatura-energia-cinetica',
    groupId: 'temperatura-energia-cinetica',
    title: 'Energía Cinética desde Temperatura',
    description: 'Calcula la energía cinética promedio de las moléculas a una temperatura dada',
    formula: 'E_c = \\frac{3}{2} k_B T',
    type: 'form-based',
    variables: [
      { 
        symbol: 'T', 
        label: 'Temperatura (T)', 
        unit: 'K', 
        type: 'number',
        example: '300'
      }
    ],
    output: { 
      symbol: 'E_c', 
      label: 'Energía Cinética Promedio', 
      unit: 'J' 
    },
    constants: [
      { symbol: 'k_B', label: 'Constante de Boltzmann', value: '1.381×10⁻²³', unit: 'J/K' }
    ],
    resolve: (values) => {
      const { T } = values;
      if (T === '' || T === undefined) {
        return { error: 'Por favor ingresa la temperatura' };
      }
      
      if (T < 0) {
        return { error: 'La temperatura en Kelvin no puede ser negativa' };
      }
      
      const k_B = 1.381e-23;
      const E_c = (3/2) * k_B * T;
      
      return {
        result: { E_c: E_c.toExponential(3) },
        steps: [
          String.raw`\text{Datos: } T = ${T} \text{ K}, \, k_B = 1.381 \times 10^{-23} \text{ J/K}`,
          String.raw`\text{Fórmula: } E_c = \frac{3}{2} k_B T`,
          String.raw`\text{Sustitución: } E_c = \frac{3}{2} \times 1.381 \times 10^{-23} \times ${T}`,
          String.raw`\text{Cálculo: } E_c = ${((3/2) * k_B).toExponential(3)} \times ${T}`,
          String.raw`\text{Resultado: } E_c = ${E_c.toExponential(3)} \text{ J}`
        ]
      };
    }
  },

  {
    id: 'temperatura-desde-energia',
    groupId: 'temperatura-energia-cinetica',
    title: 'Temperatura desde Energía Cinética',
    description: 'Calcula la temperatura a partir de la energía cinética promedio de las moléculas',
    formula: 'T = \\frac{2 E_c}{3 k_B}',
    type: 'form-based',
    variables: [
      { 
        symbol: 'E_c', 
        label: 'Energía Cinética Promedio (Ec)', 
        unit: 'J', 
        type: 'number',
        example: '6.21e-21'
      }
    ],
    output: { 
      symbol: 'T', 
      label: 'Temperatura', 
      unit: 'K' 
    },
    constants: [
      { symbol: 'k_B', label: 'Constante de Boltzmann', value: '1.381×10⁻²³', unit: 'J/K' }
    ],
    resolve: (values) => {
      const { E_c } = values;
      if (E_c === '' || E_c === undefined) {
        return { error: 'Por favor ingresa la energía cinética' };
      }
      
      if (E_c < 0) {
        return { error: 'La energía cinética no puede ser negativa' };
      }
      
      const k_B = 1.381e-23;
      const T = (2/3) * (E_c / k_B);
      
      return {
        result: { T: T.toFixed(2) },
        steps: [
          String.raw`\text{Datos: } E_c = ${E_c} \text{ J}, \, k_B = 1.381 \times 10^{-23} \text{ J/K}`,
          String.raw`\text{Fórmula: } T = \frac{2}{3} \times \frac{E_c}{k_B}`,
          String.raw`\text{Sustitución: } T = \frac{2}{3} \times \frac{${E_c}}{1.381 \times 10^{-23}}`,
          String.raw`\text{Cálculo: } T = \frac{2}{3} \times ${(E_c / k_B).toExponential(3)}`,
          String.raw`\text{Resultado: } T = ${T.toFixed(2)} \text{ K}`
        ]
      };
    }
  }
];
