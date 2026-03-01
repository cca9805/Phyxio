// ============================================================================
// CALCULADORAS DE TRABAJO TERMODINÁMICO
// ============================================================================

export const definitions = [
  // ========== GRUPO 1: Trabajo a Presión Constante ==========
  {
    id: 'trabajo-presion-constante',
    groupId: 'trabajo-presion-constante',
    title: 'Trabajo a Presión Constante (Isobárico)',
    description: 'Calcula el trabajo realizado en un proceso a presión constante',
    formula: 'W = P \\cdot \\Delta V',
    type: 'form-based',
    variables: [
      { 
        symbol: 'P', 
        label: 'Presión (P)', 
        unit: 'Pa', 
        type: 'number',
        example: '101325'
      },
      { 
        symbol: 'deltaV', 
        label: 'Cambio de Volumen (ΔV)', 
        unit: 'm³', 
        type: 'number',
        example: '0.001'
      }
    ],
    output: { 
      symbol: 'W', 
      label: 'Trabajo Realizado', 
      unit: 'J' 
    },
    resolve: (values) => {
      const { P, deltaV } = values;
      if (P === '' || deltaV === '') {
        return { error: 'Por favor completa todos los campos' };
      }
      
      if (P < 0) {
        return { error: 'La presión no puede ser negativa' };
      }
      
      const W = P * deltaV;
      
      return {
        result: { W: W.toFixed(2) },
        steps: [
          String.raw`\text{Datos: } P = ${P} \text{ Pa}, \, \Delta V = ${deltaV} \text{ m}^3`,
          String.raw`\text{Fórmula: } W = P \times \Delta V`,
          String.raw`\text{Sustitución: } W = ${P} \times ${deltaV}`,
          String.raw`\text{Resultado: } W = ${W.toFixed(2)} \text{ J}`,
          deltaV > 0 ? String.raw`\text{Expansión: El sistema realiza trabajo (W > 0)}` : String.raw`\text{Compresión: Se realiza trabajo sobre el sistema (W < 0)}`
        ]
      };
    }
  },

  {
    id: 'trabajo-volumen-desde-W',
    groupId: 'trabajo-presion-constante',
    title: 'Calcular Cambio de Volumen desde Trabajo',
    description: 'Determina el cambio de volumen conociendo el trabajo y la presión',
    formula: '\\Delta V = \\frac{W}{P}',
    type: 'form-based',
    variables: [
      { 
        symbol: 'W', 
        label: 'Trabajo Realizado (W)', 
        unit: 'J', 
        type: 'number',
        example: '101.325'
      },
      { 
        symbol: 'P', 
        label: 'Presión (P)', 
        unit: 'Pa', 
        type: 'number',
        example: '101325'
      }
    ],
    output: { 
      symbol: 'deltaV', 
      label: 'Cambio de Volumen (ΔV)', 
      unit: 'm³' 
    },
    resolve: (values) => {
      const { W, P } = values;
      if (W === '' || P === '') {
        return { error: 'Por favor completa todos los campos' };
      }
      
      if (P <= 0) {
        return { error: 'La presión debe ser positiva' };
      }
      
      const deltaV = W / P;
      
      return {
        result: { deltaV: deltaV.toFixed(6) },
        steps: [
          String.raw`\text{Datos: } W = ${W} \text{ J}, \, P = ${P} \text{ Pa}`,
          String.raw`\text{Fórmula: } \Delta V = \frac{W}{P}`,
          String.raw`\text{Sustitución: } \Delta V = \frac{${W}}{${P}}`,
          String.raw`\text{Resultado: } \Delta V = ${deltaV.toFixed(6)} \text{ m}^3`,
          deltaV > 0 ? String.raw`\text{Expansión del sistema}` : String.raw`\text{Compresión del sistema}`
        ]
      };
    }
  },

  {
    id: 'trabajo-presion-desde-W',
    groupId: 'trabajo-presion-constante',
    title: 'Calcular Presión desde Trabajo',
    description: 'Determina la presión conociendo el trabajo y cambio de volumen',
    formula: 'P = \\frac{W}{\\Delta V}',
    type: 'form-based',
    variables: [
      { 
        symbol: 'W', 
        label: 'Trabajo Realizado (W)', 
        unit: 'J', 
        type: 'number',
        example: '101.325'
      },
      { 
        symbol: 'deltaV', 
        label: 'Cambio de Volumen (ΔV)', 
        unit: 'm³', 
        type: 'number',
        example: '0.001'
      }
    ],
    output: { 
      symbol: 'P', 
      label: 'Presión', 
      unit: 'Pa' 
    },
    resolve: (values) => {
      const { W, deltaV } = values;
      if (W === '' || deltaV === '') {
        return { error: 'Por favor completa todos los campos' };
      }
      
      if (deltaV === 0) {
        return { error: 'El cambio de volumen no puede ser cero' };
      }
      
      const P = W / deltaV;
      const P_kPa = P / 1000;
      const P_bar = P / 100000;
      
      if (P < 0) {
        return { error: 'La presión no puede ser negativa. Verifica los signos' };
      }
      
      return {
        result: { P: P.toFixed(2) },
        steps: [
          String.raw`\text{Datos: } W = ${W} \text{ J}, \, \Delta V = ${deltaV} \text{ m}^3`,
          String.raw`\text{Fórmula: } P = \frac{W}{\Delta V}`,
          String.raw`\text{Sustitución: } P = \frac{${W}}{${deltaV}}`,
          String.raw`\text{Resultado: } P = ${P.toFixed(2)} \text{ Pa} = ${P_kPa.toFixed(2)} \text{ kPa} = ${P_bar.toFixed(4)} \text{ bar}`
        ]
      };
    }
  },

  // ========== GRUPO 2: Trabajo Isotérmico (Gas Ideal) ==========
  {
    id: 'trabajo-isotermico',
    groupId: 'trabajo-isotermico',
    title: 'Trabajo Isotérmico (Temperatura Constante)',
    description: 'Calcula el trabajo en un proceso isotérmico de un gas ideal',
    formula: 'W = nRT \\ln\\left(\\frac{V_f}{V_i}\\right)',
    type: 'form-based',
    variables: [
      { 
        symbol: 'n', 
        label: 'Número de Moles (n)', 
        unit: 'mol', 
        type: 'number',
        example: '1'
      },
      { 
        symbol: 'T', 
        label: 'Temperatura (T)', 
        unit: 'K', 
        type: 'number',
        example: '300'
      },
      { 
        symbol: 'V_i', 
        label: 'Volumen Inicial (Vi)', 
        unit: 'm³', 
        type: 'number',
        example: '0.001'
      },
      { 
        symbol: 'V_f', 
        label: 'Volumen Final (Vf)', 
        unit: 'm³', 
        type: 'number',
        example: '0.002'
      }
    ],
    output: { 
      symbol: 'W', 
      label: 'Trabajo Realizado', 
      unit: 'J' 
    },
    constants: [
      { symbol: 'R', label: 'Constante de gases ideales', value: '8.314', unit: 'J/(mol·K)' }
    ],
    resolve: (values) => {
      const { n, T, V_i, V_f } = values;
      if (n === '' || T === '' || V_i === '' || V_f === '') {
        return { error: 'Por favor completa todos los campos' };
      }
      
      if (n <= 0 || T <= 0 || V_i <= 0 || V_f <= 0) {
        return { error: 'Todos los valores deben ser positivos' };
      }
      
      const R = 8.314;
      const W = n * R * T * Math.log(V_f / V_i);
      
      return {
        result: { W: W.toFixed(2) },
        steps: [
          String.raw`\text{Datos: } n = ${n} \text{ mol}, \, T = ${T} \text{ K}, \, V_i = ${V_i} \text{ m}^3, \, V_f = ${V_f} \text{ m}^3`,
          String.raw`\text{Fórmula: } W = nRT \ln\left(\frac{V_f}{V_i}\right)`,
          String.raw`\text{Sustitución: } W = ${n} \times 8.314 \times ${T} \times \ln\left(\frac{${V_f}}{${V_i}}\right)`,
          String.raw`\text{Cálculo: } W = ${(n * R * T).toFixed(2)} \times \ln(${(V_f / V_i).toFixed(3)})`,
          String.raw`\text{Resultado: } W = ${W.toFixed(2)} \text{ J}`,
          V_f > V_i ? String.raw`\text{Expansión isotérmica: El gas realiza trabajo}` : String.raw`\text{Compresión isotérmica: Se realiza trabajo sobre el gas}`
        ]
      };
    }
  },

  // ========== GRUPO 3: Trabajo Adiabático ==========
  {
    id: 'trabajo-adiabatico',
    groupId: 'trabajo-adiabatico',
    title: 'Trabajo Adiabático (Sin Transferencia de Calor)',
    description: 'Calcula el trabajo en un proceso adiabático usando cambio de temperatura',
    formula: 'W = -n C_v \\Delta T',
    type: 'form-based',
    variables: [
      { 
        symbol: 'n', 
        label: 'Número de Moles (n)', 
        unit: 'mol', 
        type: 'number',
        example: '2'
      },
      { 
        symbol: 'C_v', 
        label: 'Capacidad Calorífica a Volumen Constante (Cv)', 
        unit: 'J/(mol·K)', 
        type: 'number',
        example: '20.8'
      },
      { 
        symbol: 'deltaT', 
        label: 'Cambio de Temperatura (ΔT)', 
        unit: 'K', 
        type: 'number',
        example: '-50'
      }
    ],
    output: { 
      symbol: 'W', 
      label: 'Trabajo Realizado', 
      unit: 'J' 
    },
    resolve: (values) => {
      const { n, C_v, deltaT } = values;
      if (n === '' || C_v === '' || deltaT === '') {
        return { error: 'Por favor completa todos los campos' };
      }
      
      if (n <= 0 || C_v <= 0) {
        return { error: 'El número de moles y C_v deben ser positivos' };
      }
      
      const W = -n * C_v * deltaT;
      
      return {
        result: { W: W.toFixed(2) },
        steps: [
          String.raw`\text{Datos: } n = ${n} \text{ mol}, \, C_v = ${C_v} \text{ J/(mol·K)}, \, \Delta T = ${deltaT} \text{ K}`,
          String.raw`\text{Fórmula: } W = -n C_v \Delta T`,
          String.raw`\text{Nota: En proceso adiabático, } Q = 0, \text{ entonces } W = -\Delta U`,
          String.raw`\text{Sustitución: } W = -${n} \times ${C_v} \times ${deltaT}`,
          String.raw`\text{Cálculo: } W = -${(n * C_v * deltaT).toFixed(2)}`,
          String.raw`\text{Resultado: } W = ${W.toFixed(2)} \text{ J}`,
          W > 0 ? String.raw`\text{El gas realiza trabajo (expansión adiabática)}` : String.raw`\text{Se realiza trabajo sobre el gas (compresión adiabática)}`
        ]
      };
    }
  },

  {
    id: 'trabajo-adiabatico-moles',
    groupId: 'trabajo-adiabatico',
    title: 'Calcular Moles en Proceso Adiabático',
    description: 'Determina el número de moles conociendo el trabajo adiabático',
    formula: 'n = \\frac{-W}{C_v \\Delta T}',
    type: 'form-based',
    variables: [
      { 
        symbol: 'W', 
        label: 'Trabajo Realizado (W)', 
        unit: 'J', 
        type: 'number',
        example: '2080'
      },
      { 
        symbol: 'C_v', 
        label: 'Capacidad Calorífica a Volumen Constante (Cv)', 
        unit: 'J/(mol·K)', 
        type: 'number',
        example: '20.8'
      },
      { 
        symbol: 'deltaT', 
        label: 'Cambio de Temperatura (ΔT)', 
        unit: 'K', 
        type: 'number',
        example: '-50'
      }
    ],
    output: { 
      symbol: 'n', 
      label: 'Número de Moles', 
      unit: 'mol' 
    },
    resolve: (values) => {
      const { W, C_v, deltaT } = values;
      if (W === '' || C_v === '' || deltaT === '') {
        return { error: 'Por favor completa todos los campos' };
      }
      
      if (C_v <= 0 || deltaT === 0) {
        return { error: 'C_v debe ser positivo y ΔT no puede ser cero' };
      }
      
      const n = -W / (C_v * deltaT);
      
      if (n < 0) {
        return { error: 'El número de moles no puede ser negativo. Verifica los signos' };
      }
      
      return {
        result: { n: n.toFixed(3) },
        steps: [
          String.raw`\text{Datos: } W = ${W} \text{ J}, \, C_v = ${C_v} \text{ J/(mol·K)}, \, \Delta T = ${deltaT} \text{ K}`,
          String.raw`\text{Fórmula: } W = -n C_v \Delta T`,
          String.raw`\text{Despejando: } n = \frac{-W}{C_v \Delta T}`,
          String.raw`\text{Sustitución: } n = \frac{-${W}}{${C_v} \times ${deltaT}}`,
          String.raw`\text{Resultado: } n = ${n.toFixed(3)} \text{ mol}`
        ]
      };
    }
  },

  {
    id: 'trabajo-adiabatico-Cv',
    groupId: 'trabajo-adiabatico',
    title: 'Calcular Cv en Proceso Adiabático',
    description: 'Determina la capacidad calorífica a volumen constante',
    formula: 'C_v = \\frac{-W}{n \\Delta T}',
    type: 'form-based',
    variables: [
      { 
        symbol: 'W', 
        label: 'Trabajo Realizado (W)', 
        unit: 'J', 
        type: 'number',
        example: '2080'
      },
      { 
        symbol: 'n', 
        label: 'Número de Moles (n)', 
        unit: 'mol', 
        type: 'number',
        example: '2'
      },
      { 
        symbol: 'deltaT', 
        label: 'Cambio de Temperatura (ΔT)', 
        unit: 'K', 
        type: 'number',
        example: '-50'
      }
    ],
    output: { 
      symbol: 'C_v', 
      label: 'Capacidad Calorífica a Volumen Constante', 
      unit: 'J/(mol·K)' 
    },
    resolve: (values) => {
      const { W, n, deltaT } = values;
      if (W === '' || n === '' || deltaT === '') {
        return { error: 'Por favor completa todos los campos' };
      }
      
      if (n <= 0 || deltaT === 0) {
        return { error: 'n debe ser positivo y ΔT no puede ser cero' };
      }
      
      const C_v = -W / (n * deltaT);
      
      if (C_v < 0) {
        return { error: 'C_v no puede ser negativo. Verifica los signos' };
      }
      
      return {
        result: { C_v: C_v.toFixed(2) },
        steps: [
          String.raw`\text{Datos: } W = ${W} \text{ J}, \, n = ${n} \text{ mol}, \, \Delta T = ${deltaT} \text{ K}`,
          String.raw`\text{Fórmula: } W = -n C_v \Delta T`,
          String.raw`\text{Despejando: } C_v = \frac{-W}{n \Delta T}`,
          String.raw`\text{Sustitución: } C_v = \frac{-${W}}{${n} \times ${deltaT}}`,
          String.raw`\text{Resultado: } C_v = ${C_v.toFixed(2)} \text{ J/(mol·K)}`
        ]
      };
    }
  },

  {
    id: 'trabajo-adiabatico-deltaT',
    groupId: 'trabajo-adiabatico',
    title: 'Calcular ΔT en Proceso Adiabático',
    description: 'Determina el cambio de temperatura en proceso adiabático',
    formula: '\\Delta T = \\frac{-W}{n C_v}',
    type: 'form-based',
    variables: [
      { 
        symbol: 'W', 
        label: 'Trabajo Realizado (W)', 
        unit: 'J', 
        type: 'number',
        example: '2080'
      },
      { 
        symbol: 'n', 
        label: 'Número de Moles (n)', 
        unit: 'mol', 
        type: 'number',
        example: '2'
      },
      { 
        symbol: 'C_v', 
        label: 'Capacidad Calorífica a Volumen Constante (Cv)', 
        unit: 'J/(mol·K)', 
        type: 'number',
        example: '20.8'
      }
    ],
    output: { 
      symbol: 'deltaT', 
      label: 'Cambio de Temperatura', 
      unit: 'K' 
    },
    resolve: (values) => {
      const { W, n, C_v } = values;
      if (W === '' || n === '' || C_v === '') {
        return { error: 'Por favor completa todos los campos' };
      }
      
      if (n <= 0 || C_v <= 0) {
        return { error: 'n y C_v deben ser positivos' };
      }
      
      const deltaT = -W / (n * C_v);
      
      return {
        result: { deltaT: deltaT.toFixed(2) },
        steps: [
          String.raw`\text{Datos: } W = ${W} \text{ J}, \, n = ${n} \text{ mol}, \, C_v = ${C_v} \text{ J/(mol·K)}`,
          String.raw`\text{Fórmula: } W = -n C_v \Delta T`,
          String.raw`\text{Despejando: } \Delta T = \frac{-W}{n C_v}`,
          String.raw`\text{Sustitución: } \Delta T = \frac{-${W}}{${n} \times ${C_v}}`,
          String.raw`\text{Resultado: } \Delta T = ${deltaT.toFixed(2)} \text{ K}`,
          deltaT > 0 ? String.raw`\text{La temperatura aumenta}` : String.raw`\text{La temperatura disminuye}`
        ]
      };
    }
  },

  // ========== GRUPO 4: Trabajo en Ciclo ==========
  {
    id: 'trabajo-ciclo',
    groupId: 'trabajo-ciclo',
    title: 'Trabajo Neto en un Ciclo',
    description: 'Calcula el trabajo neto realizado en un ciclo termodinámico',
    formula: 'W_{neto} = Q_{entrada} - Q_{salida}',
    type: 'form-based',
    variables: [
      { 
        symbol: 'Q_entrada', 
        label: 'Calor Absorbido (Qentrada)', 
        unit: 'J', 
        type: 'number',
        example: '1000'
      },
      { 
        symbol: 'Q_salida', 
        label: 'Calor Cedido (Qsalida)', 
        unit: 'J', 
        type: 'number',
        example: '600'
      }
    ],
    output: { 
      symbol: 'W_neto', 
      label: 'Trabajo Neto', 
      unit: 'J' 
    },
    resolve: (values) => {
      const { Q_entrada, Q_salida } = values;
      if (Q_entrada === '' || Q_salida === '') {
        return { error: 'Por favor completa todos los campos' };
      }
      
      if (Q_entrada < 0 || Q_salida < 0) {
        return { error: 'Los calores deben ser positivos (usar valores absolutos)' };
      }
      
      const W_neto = Q_entrada - Q_salida;
      const eficiencia = (W_neto / Q_entrada) * 100;
      
      return {
        result: { W_neto: W_neto.toFixed(2) },
        steps: [
          String.raw`\text{Datos: } Q_{entrada} = ${Q_entrada} \text{ J}, \, Q_{salida} = ${Q_salida} \text{ J}`,
          String.raw`\text{Fórmula: } W_{neto} = Q_{entrada} - Q_{salida}`,
          String.raw`\text{Sustitución: } W_{neto} = ${Q_entrada} - ${Q_salida}`,
          String.raw`\text{Resultado: } W_{neto} = ${W_neto.toFixed(2)} \text{ J}`,
          String.raw`\text{Eficiencia: } \eta = \frac{W_{neto}}{Q_{entrada}} \times 100\% = ${eficiencia.toFixed(2)}\%`
        ]
      };
    }
  },

  {
    id: 'eficiencia-ciclo',
    groupId: 'trabajo-ciclo',
    title: 'Eficiencia de un Ciclo Termodinámico',
    description: 'Calcula la eficiencia o rendimiento de un ciclo térmico',
    formula: '\\eta = \\frac{W_{neto}}{Q_{entrada}} \\times 100\\%',
    type: 'form-based',
    variables: [
      { 
        symbol: 'W_neto', 
        label: 'Trabajo Neto (Wneto)', 
        unit: 'J', 
        type: 'number',
        example: '400'
      },
      { 
        symbol: 'Q_entrada', 
        label: 'Calor Absorbido (Qentrada)', 
        unit: 'J', 
        type: 'number',
        example: '1000'
      }
    ],
    output: { 
      symbol: 'eta', 
      label: 'Eficiencia', 
      unit: '%' 
    },
    resolve: (values) => {
      const { W_neto, Q_entrada } = values;
      if (W_neto === '' || Q_entrada === '') {
        return { error: 'Por favor completa todos los campos' };
      }
      
      if (Q_entrada <= 0) {
        return { error: 'El calor de entrada debe ser positivo' };
      }
      
      const eta = (W_neto / Q_entrada) * 100;
      const Q_salida = Q_entrada - W_neto;
      
      return {
        result: { eta: eta.toFixed(2) },
        steps: [
          String.raw`\text{Datos: } W_{neto} = ${W_neto} \text{ J}, \, Q_{entrada} = ${Q_entrada} \text{ J}`,
          String.raw`\text{Fórmula: } \eta = \frac{W_{neto}}{Q_{entrada}} \times 100\%`,
          String.raw`\text{Sustitución: } \eta = \frac{${W_neto}}{${Q_entrada}} \times 100\%`,
          String.raw`\text{Resultado: } \eta = ${eta.toFixed(2)}\%`,
          String.raw`\text{Calor cedido: } Q_{salida} = ${Q_salida.toFixed(2)} \text{ J}`,
          eta > 50 ? String.raw`\text{Eficiencia alta para ciclo real}` : String.raw`\text{Eficiencia típica de ciclos térmicos}`
        ]
      };
    }
  },

  {
    id: 'trabajo-neto-desde-eficiencia',
    groupId: 'trabajo-ciclo',
    title: 'Trabajo Neto desde Eficiencia',
    description: 'Calcula el trabajo neto conociendo la eficiencia y calor de entrada',
    formula: 'W_{neto} = \\eta \\times Q_{entrada}',
    type: 'form-based',
    variables: [
      { 
        symbol: 'eta', 
        label: 'Eficiencia (η)', 
        unit: '%', 
        type: 'number',
        example: '40'
      },
      { 
        symbol: 'Q_entrada', 
        label: 'Calor Absorbido (Qentrada)', 
        unit: 'J', 
        type: 'number',
        example: '1000'
      }
    ],
    output: { 
      symbol: 'W_neto', 
      label: 'Trabajo Neto', 
      unit: 'J' 
    },
    resolve: (values) => {
      const { eta, Q_entrada } = values;
      if (eta === '' || Q_entrada === '') {
        return { error: 'Por favor completa todos los campos' };
      }
      
      if (eta < 0 || eta > 100) {
        return { error: 'La eficiencia debe estar entre 0% y 100%' };
      }
      
      if (Q_entrada <= 0) {
        return { error: 'El calor de entrada debe ser positivo' };
      }
      
      const W_neto = (eta / 100) * Q_entrada;
      const Q_salida = Q_entrada - W_neto;
      
      return {
        result: { W_neto: W_neto.toFixed(2) },
        steps: [
          String.raw`\text{Datos: } \eta = ${eta}\%, \, Q_{entrada} = ${Q_entrada} \text{ J}`,
          String.raw`\text{Fórmula: } W_{neto} = \frac{\eta}{100} \times Q_{entrada}`,
          String.raw`\text{Sustitución: } W_{neto} = \frac{${eta}}{100} \times ${Q_entrada}`,
          String.raw`\text{Resultado: } W_{neto} = ${W_neto.toFixed(2)} \text{ J}`,
          String.raw`\text{Calor cedido: } Q_{salida} = ${Q_salida.toFixed(2)} \text{ J}`
        ]
      };
    }
  },

  {
    id: 'calor-entrada-desde-eficiencia',
    groupId: 'trabajo-ciclo',
    title: 'Calor de Entrada desde Eficiencia',
    description: 'Determina el calor de entrada necesario conociendo eficiencia y trabajo',
    formula: 'Q_{entrada} = \\frac{W_{neto}}{\\eta}',
    type: 'form-based',
    variables: [
      { 
        symbol: 'W_neto', 
        label: 'Trabajo Neto (Wneto)', 
        unit: 'J', 
        type: 'number',
        example: '400'
      },
      { 
        symbol: 'eta', 
        label: 'Eficiencia (η)', 
        unit: '%', 
        type: 'number',
        example: '40'
      }
    ],
    output: { 
      symbol: 'Q_entrada', 
      label: 'Calor de Entrada', 
      unit: 'J' 
    },
    resolve: (values) => {
      const { W_neto, eta } = values;
      if (W_neto === '' || eta === '') {
        return { error: 'Por favor completa todos los campos' };
      }
      
      if (eta <= 0 || eta > 100) {
        return { error: 'La eficiencia debe estar entre 0% y 100% (mayor que 0)' };
      }
      
      const Q_entrada = W_neto / (eta / 100);
      const Q_salida = Q_entrada - W_neto;
      
      return {
        result: { Q_entrada: Q_entrada.toFixed(2) },
        steps: [
          String.raw`\text{Datos: } W_{neto} = ${W_neto} \text{ J}, \, \eta = ${eta}\%`,
          String.raw`\text{Fórmula: } Q_{entrada} = \frac{W_{neto}}{\eta/100}`,
          String.raw`\text{Sustitución: } Q_{entrada} = \frac{${W_neto}}{${eta}/100}`,
          String.raw`\text{Resultado: } Q_{entrada} = ${Q_entrada.toFixed(2)} \text{ J}`,
          String.raw`\text{Calor cedido: } Q_{salida} = ${Q_salida.toFixed(2)} \text{ J}`
        ]
      };
    }
  },

  // ========== GRUPO 5: Primera Ley de la Termodinámica ==========
  {
    id: 'primera-ley-trabajo',
    groupId: 'primera-ley-trabajo',
    title: 'Trabajo desde Primera Ley (ΔU = Q - W)',
    description: 'Calcula el trabajo usando la Primera Ley de la Termodinámica',
    formula: 'W = Q - \\Delta U',
    type: 'form-based',
    variables: [
      { 
        symbol: 'Q', 
        label: 'Calor Transferido (Q)', 
        unit: 'J', 
        type: 'number',
        example: '500'
      },
      { 
        symbol: 'deltaU', 
        label: 'Cambio de Energía Interna (ΔU)', 
        unit: 'J', 
        type: 'number',
        example: '300'
      }
    ],
    output: { 
      symbol: 'W', 
      label: 'Trabajo Realizado', 
      unit: 'J' 
    },
    resolve: (values) => {
      const { Q, deltaU } = values;
      if (Q === '' || deltaU === '') {
        return { error: 'Por favor completa todos los campos' };
      }
      
      const W = Q - deltaU;
      
      return {
        result: { W: W.toFixed(2) },
        steps: [
          String.raw`\text{Datos: } Q = ${Q} \text{ J}, \, \Delta U = ${deltaU} \text{ J}`,
          String.raw`\text{Primera Ley: } \Delta U = Q - W`,
          String.raw`\text{Despejando: } W = Q - \Delta U`,
          String.raw`\text{Sustitución: } W = ${Q} - ${deltaU}`,
          String.raw`\text{Resultado: } W = ${W.toFixed(2)} \text{ J}`,
          W > 0 ? String.raw`\text{El sistema realiza trabajo}` : String.raw`\text{Se realiza trabajo sobre el sistema}`
        ]
      };
    }
  },

  {
    id: 'primera-ley-energia-interna',
    groupId: 'primera-ley-trabajo',
    title: 'Energía Interna desde Primera Ley',
    description: 'Calcula el cambio de energía interna usando la Primera Ley',
    formula: '\\Delta U = Q - W',
    type: 'form-based',
    variables: [
      { 
        symbol: 'Q', 
        label: 'Calor Transferido (Q)', 
        unit: 'J', 
        type: 'number',
        example: '800'
      },
      { 
        symbol: 'W', 
        label: 'Trabajo Realizado (W)', 
        unit: 'J', 
        type: 'number',
        example: '300'
      }
    ],
    output: { 
      symbol: 'deltaU', 
      label: 'Cambio de Energía Interna (ΔU)', 
      unit: 'J' 
    },
    resolve: (values) => {
      const { Q, W } = values;
      if (Q === '' || W === '') {
        return { error: 'Por favor completa todos los campos' };
      }
      
      const deltaU = Q - W;
      
      return {
        result: { deltaU: deltaU.toFixed(2) },
        steps: [
          String.raw`\text{Datos: } Q = ${Q} \text{ J}, \, W = ${W} \text{ J}`,
          String.raw`\text{Primera Ley: } \Delta U = Q - W`,
          String.raw`\text{Sustitución: } \Delta U = ${Q} - ${W}`,
          String.raw`\text{Resultado: } \Delta U = ${deltaU.toFixed(2)} \text{ J}`,
          deltaU > 0 ? String.raw`\text{La energía interna aumenta}` : String.raw`\text{La energía interna disminuye}`
        ]
      };
    }
  },

  {
    id: 'primera-ley-calor',
    groupId: 'primera-ley-trabajo',
    title: 'Calor desde Primera Ley',
    description: 'Calcula el calor transferido usando la Primera Ley',
    formula: 'Q = \\Delta U + W',
    type: 'form-based',
    variables: [
      { 
        symbol: 'deltaU', 
        label: 'Cambio de Energía Interna (ΔU)', 
        unit: 'J', 
        type: 'number',
        example: '300'
      },
      { 
        symbol: 'W', 
        label: 'Trabajo Realizado (W)', 
        unit: 'J', 
        type: 'number',
        example: '200'
      }
    ],
    output: { 
      symbol: 'Q', 
      label: 'Calor Transferido', 
      unit: 'J' 
    },
    resolve: (values) => {
      const { deltaU, W } = values;
      if (deltaU === '' || W === '') {
        return { error: 'Por favor completa todos los campos' };
      }
      
      const Q = deltaU + W;
      
      return {
        result: { Q: Q.toFixed(2) },
        steps: [
          String.raw`\text{Datos: } \Delta U = ${deltaU} \text{ J}, \, W = ${W} \text{ J}`,
          String.raw`\text{Primera Ley: } \Delta U = Q - W`,
          String.raw`\text{Despejando: } Q = \Delta U + W`,
          String.raw`\text{Sustitución: } Q = ${deltaU} + ${W}`,
          String.raw`\text{Resultado: } Q = ${Q.toFixed(2)} \text{ J}`,
          Q > 0 ? String.raw`\text{El sistema absorbe calor}` : String.raw`\text{El sistema cede calor}`
        ]
      };
    }
  }
];
