// ============================================================================
// CALCULADORAS DE CALOR
// ============================================================================

export const definitions = [
  // ========== GRUPO 1: Calor Sensible ==========
  {
    id: 'calor-sensible',
    groupId: 'calor-sensible',
    title: 'Calor Sensible (Cambio de Temperatura)',
    description: 'Calcula el calor necesario para cambiar la temperatura de una sustancia',
    formula: 'Q = m \\cdot c \\cdot \\Delta T',
    type: 'form-based',
    variables: [
      { 
        symbol: 'm', 
        label: 'Masa (m)', 
        unit: 'kg', 
        type: 'number',
        example: '2'
      },
      { 
        symbol: 'c', 
        label: 'Calor Específico (c)', 
        unit: 'J/(kg·K)', 
        type: 'number',
        example: '4186'
      },
      { 
        symbol: 'deltaT', 
        label: 'Cambio de Temperatura (ΔT)', 
        unit: 'K o °C', 
        type: 'number',
        example: '60'
      }
    ],
    output: { 
      symbol: 'Q', 
      label: 'Calor Transferido', 
      unit: 'J' 
    },
    resolve: (values) => {
      const { m, c, deltaT } = values;
      if (m === '' || c === '' || deltaT === '') {
        return { error: 'Por favor completa todos los campos' };
      }
      
      if (m <= 0 || c <= 0) {
        return { error: 'La masa y el calor específico deben ser positivos' };
      }
      
      const Q = m * c * deltaT;
      const Q_kJ = Q / 1000;
      
      return {
        result: { Q: Q.toFixed(2) },
        steps: [
          String.raw`\text{Datos: } m = ${m} \text{ kg}, \, c = ${c} \text{ J/(kg·K)}, \, \Delta T = ${deltaT} \text{ K}`,
          String.raw`\text{Fórmula: } Q = m \times c \times \Delta T`,
          String.raw`\text{Sustitución: } Q = ${m} \times ${c} \times ${deltaT}`,
          String.raw`\text{Resultado: } Q = ${Q.toFixed(2)} \text{ J} = ${Q_kJ.toFixed(2)} \text{ kJ}`,
          deltaT > 0 ? String.raw`\text{El sistema absorbe calor (Q > 0)}` : String.raw`\text{El sistema cede calor (Q < 0)}`
        ]
      };
    }
  },

  {
    id: 'calor-masa-desde-Q',
    groupId: 'calor-sensible',
    title: 'Calcular Masa desde Calor',
    description: 'Determina la masa conociendo el calor, calor específico y cambio de temperatura',
    formula: 'm = \\frac{Q}{c \\cdot \\Delta T}',
    type: 'form-based',
    variables: [
      { 
        symbol: 'Q', 
        label: 'Calor Transferido (Q)', 
        unit: 'J', 
        type: 'number',
        example: '502320'
      },
      { 
        symbol: 'c', 
        label: 'Calor Específico (c)', 
        unit: 'J/(kg·K)', 
        type: 'number',
        example: '4186'
      },
      { 
        symbol: 'deltaT', 
        label: 'Cambio de Temperatura (ΔT)', 
        unit: 'K o °C', 
        type: 'number',
        example: '60'
      }
    ],
    output: { 
      symbol: 'm', 
      label: 'Masa', 
      unit: 'kg' 
    },
    resolve: (values) => {
      const { Q, c, deltaT } = values;
      if (Q === '' || c === '' || deltaT === '') {
        return { error: 'Por favor completa todos los campos' };
      }
      
      if (c <= 0 || deltaT === 0) {
        return { error: 'El calor específico debe ser positivo y ΔT no puede ser cero' };
      }
      
      const m = Q / (c * deltaT);
      
      if (m < 0) {
        return { error: 'La masa no puede ser negativa. Verifica los signos de Q y ΔT' };
      }
      
      return {
        result: { m: m.toFixed(3) },
        steps: [
          String.raw`\text{Datos: } Q = ${Q} \text{ J}, \, c = ${c} \text{ J/(kg·K)}, \, \Delta T = ${deltaT} \text{ K}`,
          String.raw`\text{Fórmula: } m = \frac{Q}{c \times \Delta T}`,
          String.raw`\text{Sustitución: } m = \frac{${Q}}{${c} \times ${deltaT}}`,
          String.raw`\text{Cálculo: } m = \frac{${Q}}{${(c * deltaT).toFixed(2)}}`,
          String.raw`\text{Resultado: } m = ${m.toFixed(3)} \text{ kg}`
        ]
      };
    }
  },

  {
    id: 'calor-especifico-desde-Q',
    groupId: 'calor-sensible',
    title: 'Calcular Calor Específico',
    description: 'Determina el calor específico de una sustancia',
    formula: 'c = \\frac{Q}{m \\cdot \\Delta T}',
    type: 'form-based',
    variables: [
      { 
        symbol: 'Q', 
        label: 'Calor Transferido (Q)', 
        unit: 'J', 
        type: 'number',
        example: '83720'
      },
      { 
        symbol: 'm', 
        label: 'Masa (m)', 
        unit: 'kg', 
        type: 'number',
        example: '0.5'
      },
      { 
        symbol: 'deltaT', 
        label: 'Cambio de Temperatura (ΔT)', 
        unit: 'K o °C', 
        type: 'number',
        example: '40'
      }
    ],
    output: { 
      symbol: 'c', 
      label: 'Calor Específico', 
      unit: 'J/(kg·K)' 
    },
    resolve: (values) => {
      const { Q, m, deltaT } = values;
      if (Q === '' || m === '' || deltaT === '') {
        return { error: 'Por favor completa todos los campos' };
      }
      
      if (m <= 0 || deltaT === 0) {
        return { error: 'La masa debe ser positiva y ΔT no puede ser cero' };
      }
      
      const c = Q / (m * deltaT);
      
      if (c < 0) {
        return { error: 'El calor específico no puede ser negativo. Verifica los signos' };
      }
      
      return {
        result: { c: c.toFixed(2) },
        steps: [
          String.raw`\text{Datos: } Q = ${Q} \text{ J}, \, m = ${m} \text{ kg}, \, \Delta T = ${deltaT} \text{ K}`,
          String.raw`\text{Fórmula: } c = \frac{Q}{m \times \Delta T}`,
          String.raw`\text{Sustitución: } c = \frac{${Q}}{${m} \times ${deltaT}}`,
          String.raw`\text{Cálculo: } c = \frac{${Q}}{${(m * deltaT).toFixed(2)}}`,
          String.raw`\text{Resultado: } c = ${c.toFixed(2)} \text{ J/(kg·K)}`
        ]
      };
    }
  },

  {
    id: 'calor-cambio-temperatura',
    groupId: 'calor-sensible',
    title: 'Calcular Cambio de Temperatura',
    description: 'Determina el cambio de temperatura producido por una cantidad de calor',
    formula: '\\Delta T = \\frac{Q}{m \\cdot c}',
    type: 'form-based',
    variables: [
      { 
        symbol: 'Q', 
        label: 'Calor Transferido (Q)', 
        unit: 'J', 
        type: 'number',
        example: '502320'
      },
      { 
        symbol: 'm', 
        label: 'Masa (m)', 
        unit: 'kg', 
        type: 'number',
        example: '2'
      },
      { 
        symbol: 'c', 
        label: 'Calor Específico (c)', 
        unit: 'J/(kg·K)', 
        type: 'number',
        example: '4186'
      }
    ],
    output: { 
      symbol: 'deltaT', 
      label: 'Cambio de Temperatura', 
      unit: 'K o °C' 
    },
    resolve: (values) => {
      const { Q, m, c } = values;
      if (Q === '' || m === '' || c === '') {
        return { error: 'Por favor completa todos los campos' };
      }
      
      if (m <= 0 || c <= 0) {
        return { error: 'La masa y el calor específico deben ser positivos' };
      }
      
      const deltaT = Q / (m * c);
      
      return {
        result: { deltaT: deltaT.toFixed(2) },
        steps: [
          String.raw`\text{Datos: } Q = ${Q} \text{ J}, \, m = ${m} \text{ kg}, \, c = ${c} \text{ J/(kg·K)}`,
          String.raw`\text{Fórmula: } \Delta T = \frac{Q}{m \times c}`,
          String.raw`\text{Sustitución: } \Delta T = \frac{${Q}}{${m} \times ${c}}`,
          String.raw`\text{Cálculo: } \Delta T = \frac{${Q}}{${(m * c).toFixed(2)}}`,
          String.raw`\text{Resultado: } \Delta T = ${deltaT.toFixed(2)} \text{ K (o °C)}`
        ]
      };
    }
  },

  // ========== GRUPO 2: Calor Latente ==========
  {
    id: 'calor-latente',
    groupId: 'calor-latente',
    title: 'Calor Latente (Cambio de Fase)',
    description: 'Calcula el calor necesario para cambiar la fase de una sustancia',
    formula: 'Q = m \\cdot L',
    type: 'form-based',
    variables: [
      { 
        symbol: 'm', 
        label: 'Masa (m)', 
        unit: 'kg', 
        type: 'number',
        example: '2'
      },
      { 
        symbol: 'L', 
        label: 'Calor Latente Específico (L)', 
        unit: 'J/kg', 
        type: 'number',
        example: '334000'
      }
    ],
    output: { 
      symbol: 'Q', 
      label: 'Calor Transferido', 
      unit: 'J' 
    },
    constants: [
      { symbol: 'L_f (agua)', label: 'Calor latente de fusión del agua', value: '334,000', unit: 'J/kg' },
      { symbol: 'L_v (agua)', label: 'Calor latente de vaporización del agua', value: '2,257,000', unit: 'J/kg' }
    ],
    resolve: (values) => {
      const { m, L } = values;
      if (m === '' || L === '') {
        return { error: 'Por favor completa todos los campos' };
      }
      
      if (m <= 0 || L <= 0) {
        return { error: 'La masa y el calor latente deben ser positivos' };
      }
      
      const Q = m * L;
      const Q_kJ = Q / 1000;
      
      return {
        result: { Q: Q.toFixed(2) },
        steps: [
          String.raw`\text{Datos: } m = ${m} \text{ kg}, \, L = ${L} \text{ J/kg}`,
          String.raw`\text{Fórmula: } Q = m \times L`,
          String.raw`\text{Sustitución: } Q = ${m} \times ${L}`,
          String.raw`\text{Resultado: } Q = ${Q.toFixed(2)} \text{ J} = ${Q_kJ.toFixed(2)} \text{ kJ}`,
          String.raw`\text{Nota: La temperatura permanece constante durante el cambio de fase}`
        ]
      };
    }
  },

  {
    id: 'calor-masa-desde-latente',
    groupId: 'calor-latente',
    title: 'Calcular Masa desde Calor Latente',
    description: 'Determina la masa que cambia de fase conociendo el calor',
    formula: 'm = \\frac{Q}{L}',
    type: 'form-based',
    variables: [
      { 
        symbol: 'Q', 
        label: 'Calor Transferido (Q)', 
        unit: 'J', 
        type: 'number',
        example: '668000'
      },
      { 
        symbol: 'L', 
        label: 'Calor Latente Específico (L)', 
        unit: 'J/kg', 
        type: 'number',
        example: '334000'
      }
    ],
    output: { 
      symbol: 'm', 
      label: 'Masa', 
      unit: 'kg' 
    },
    constants: [
      { symbol: 'L_f (agua)', label: 'Calor latente de fusión del agua', value: '334,000', unit: 'J/kg' },
      { symbol: 'L_v (agua)', label: 'Calor latente de vaporización del agua', value: '2,257,000', unit: 'J/kg' }
    ],
    resolve: (values) => {
      const { Q, L } = values;
      if (Q === '' || L === '') {
        return { error: 'Por favor completa todos los campos' };
      }
      
      if (L <= 0) {
        return { error: 'El calor latente debe ser positivo' };
      }
      
      const m = Q / L;
      
      if (m < 0) {
        return { error: 'La masa no puede ser negativa. Verifica el signo de Q' };
      }
      
      return {
        result: { m: m.toFixed(3) },
        steps: [
          String.raw`\text{Datos: } Q = ${Q} \text{ J}, \, L = ${L} \text{ J/kg}`,
          String.raw`\text{Fórmula: } m = \frac{Q}{L}`,
          String.raw`\text{Sustitución: } m = \frac{${Q}}{${L}}`,
          String.raw`\text{Resultado: } m = ${m.toFixed(3)} \text{ kg}`
        ]
      };
    }
  },

  {
    id: 'calor-latente-especifico',
    groupId: 'calor-latente',
    title: 'Calcular Calor Latente Específico',
    description: 'Determina el calor latente específico de una sustancia',
    formula: 'L = \\frac{Q}{m}',
    type: 'form-based',
    variables: [
      { 
        symbol: 'Q', 
        label: 'Calor Transferido (Q)', 
        unit: 'J', 
        type: 'number',
        example: '668000'
      },
      { 
        symbol: 'm', 
        label: 'Masa (m)', 
        unit: 'kg', 
        type: 'number',
        example: '2'
      }
    ],
    output: { 
      symbol: 'L', 
      label: 'Calor Latente Específico', 
      unit: 'J/kg' 
    },
    constants: [
      { symbol: 'L_f (agua)', label: 'Calor latente de fusión del agua', value: '334,000', unit: 'J/kg' },
      { symbol: 'L_v (agua)', label: 'Calor latente de vaporización del agua', value: '2,257,000', unit: 'J/kg' }
    ],
    resolve: (values) => {
      const { Q, m } = values;
      if (Q === '' || m === '') {
        return { error: 'Por favor completa todos los campos' };
      }
      
      if (m <= 0) {
        return { error: 'La masa debe ser positiva' };
      }
      
      const L = Q / m;
      const L_kJ = L / 1000;
      
      if (L < 0) {
        return { error: 'El calor latente no puede ser negativo. Verifica el signo de Q' };
      }
      
      return {
        result: { L: L.toFixed(2) },
        steps: [
          String.raw`\text{Datos: } Q = ${Q} \text{ J}, \, m = ${m} \text{ kg}`,
          String.raw`\text{Fórmula: } L = \frac{Q}{m}`,
          String.raw`\text{Sustitución: } L = \frac{${Q}}{${m}}`,
          String.raw`\text{Resultado: } L = ${L.toFixed(2)} \text{ J/kg} = ${L_kJ.toFixed(2)} \text{ kJ/kg}`
        ]
      };
    }
  },

  // ========== GRUPO 3: Capacidad Calorífica ==========
  {
    id: 'capacidad-calorifica',
    groupId: 'capacidad-calorifica',
    title: 'Capacidad Calorífica',
    description: 'Calcula la capacidad calorífica de un sistema',
    formula: 'C = m \\cdot c',
    type: 'form-based',
    variables: [
      { 
        symbol: 'm', 
        label: 'Masa (m)', 
        unit: 'kg', 
        type: 'number',
        example: '50'
      },
      { 
        symbol: 'c', 
        label: 'Calor Específico (c)', 
        unit: 'J/(kg·K)', 
        type: 'number',
        example: '4186'
      }
    ],
    output: { 
      symbol: 'C', 
      label: 'Capacidad Calorífica', 
      unit: 'J/K' 
    },
    resolve: (values) => {
      const { m, c } = values;
      if (m === '' || c === '') {
        return { error: 'Por favor completa todos los campos' };
      }
      
      if (m <= 0 || c <= 0) {
        return { error: 'La masa y el calor específico deben ser positivos' };
      }
      
      const C = m * c;
      const C_kJ = C / 1000;
      
      return {
        result: { C: C.toFixed(2) },
        steps: [
          String.raw`\text{Datos: } m = ${m} \text{ kg}, \, c = ${c} \text{ J/(kg·K)}`,
          String.raw`\text{Fórmula: } C = m \times c`,
          String.raw`\text{Sustitución: } C = ${m} \times ${c}`,
          String.raw`\text{Resultado: } C = ${C.toFixed(2)} \text{ J/K} = ${C_kJ.toFixed(2)} \text{ kJ/K}`,
          String.raw`\text{Interpretación: Se necesitan } ${C_kJ.toFixed(2)} \text{ kJ para elevar 1 K la temperatura}`
        ]
      };
    }
  },

  {
    id: 'calor-capacidad-calorifica',
    groupId: 'capacidad-calorifica',
    title: 'Calor con Capacidad Calorífica',
    description: 'Calcula el calor usando la capacidad calorífica del sistema',
    formula: 'Q = C \\cdot \\Delta T',
    type: 'form-based',
    variables: [
      { 
        symbol: 'C', 
        label: 'Capacidad Calorífica (C)', 
        unit: 'J/K', 
        type: 'number',
        example: '209300'
      },
      { 
        symbol: 'deltaT', 
        label: 'Cambio de Temperatura (ΔT)', 
        unit: 'K o °C', 
        type: 'number',
        example: '15'
      }
    ],
    output: { 
      symbol: 'Q', 
      label: 'Calor Transferido', 
      unit: 'J' 
    },
    resolve: (values) => {
      const { C, deltaT } = values;
      if (C === '' || deltaT === '') {
        return { error: 'Por favor completa todos los campos' };
      }
      
      if (C <= 0) {
        return { error: 'La capacidad calorífica debe ser positiva' };
      }
      
      const Q = C * deltaT;
      const Q_kJ = Q / 1000;
      const Q_MJ = Q / 1000000;
      
      return {
        result: { Q: Q.toFixed(2) },
        steps: [
          String.raw`\text{Datos: } C = ${C} \text{ J/K}, \, \Delta T = ${deltaT} \text{ K}`,
          String.raw`\text{Fórmula: } Q = C \times \Delta T`,
          String.raw`\text{Sustitución: } Q = ${C} \times ${deltaT}`,
          String.raw`\text{Resultado: } Q = ${Q.toFixed(2)} \text{ J} = ${Q_kJ.toFixed(2)} \text{ kJ}`,
          String.raw`\text{Nota: La capacidad calorífica relaciona directamente calor y temperatura}`
        ]
      };
    }
  },

  {
    id: 'capacidad-desde-calor',
    groupId: 'capacidad-calorifica',
    title: 'Capacidad Calorífica desde Calor',
    description: 'Determina la capacidad calorífica conociendo el calor y cambio de temperatura',
    formula: 'C = \\frac{Q}{\\Delta T}',
    type: 'form-based',
    variables: [
      { 
        symbol: 'Q', 
        label: 'Calor Transferido (Q)', 
        unit: 'J', 
        type: 'number',
        example: '3139500'
      },
      { 
        symbol: 'deltaT', 
        label: 'Cambio de Temperatura (ΔT)', 
        unit: 'K o °C', 
        type: 'number',
        example: '15'
      }
    ],
    output: { 
      symbol: 'C', 
      label: 'Capacidad Calorífica', 
      unit: 'J/K' 
    },
    resolve: (values) => {
      const { Q, deltaT } = values;
      if (Q === '' || deltaT === '') {
        return { error: 'Por favor completa todos los campos' };
      }
      
      if (deltaT === 0) {
        return { error: 'El cambio de temperatura no puede ser cero' };
      }
      
      const C = Q / deltaT;
      const C_kJ = C / 1000;
      
      if (C < 0) {
        return { error: 'La capacidad calorífica no puede ser negativa. Verifica los signos' };
      }
      
      return {
        result: { C: C.toFixed(2) },
        steps: [
          String.raw`\text{Datos: } Q = ${Q} \text{ J}, \, \Delta T = ${deltaT} \text{ K}`,
          String.raw`\text{Fórmula: } C = \frac{Q}{\Delta T}`,
          String.raw`\text{Sustitución: } C = \frac{${Q}}{${deltaT}}`,
          String.raw`\text{Resultado: } C = ${C.toFixed(2)} \text{ J/K} = ${C_kJ.toFixed(2)} \text{ kJ/K}`
        ]
      };
    }
  },

  {
    id: 'deltaT-desde-capacidad',
    groupId: 'capacidad-calorifica',
    title: 'Cambio de Temperatura desde Capacidad',
    description: 'Calcula el cambio de temperatura usando capacidad calorífica',
    formula: '\\Delta T = \\frac{Q}{C}',
    type: 'form-based',
    variables: [
      { 
        symbol: 'Q', 
        label: 'Calor Transferido (Q)', 
        unit: 'J', 
        type: 'number',
        example: '3139500'
      },
      { 
        symbol: 'C', 
        label: 'Capacidad Calorífica (C)', 
        unit: 'J/K', 
        type: 'number',
        example: '209300'
      }
    ],
    output: { 
      symbol: 'deltaT', 
      label: 'Cambio de Temperatura', 
      unit: 'K o °C' 
    },
    resolve: (values) => {
      const { Q, C } = values;
      if (Q === '' || C === '') {
        return { error: 'Por favor completa todos los campos' };
      }
      
      if (C <= 0) {
        return { error: 'La capacidad calorífica debe ser positiva' };
      }
      
      const deltaT = Q / C;
      
      return {
        result: { deltaT: deltaT.toFixed(2) },
        steps: [
          String.raw`\text{Datos: } Q = ${Q} \text{ J}, \, C = ${C} \text{ J/K}`,
          String.raw`\text{Fórmula: } \Delta T = \frac{Q}{C}`,
          String.raw`\text{Sustitución: } \Delta T = \frac{${Q}}{${C}}`,
          String.raw`\text{Resultado: } \Delta T = ${deltaT.toFixed(2)} \text{ K (o °C)}`
        ]
      };
    }
  }
];
