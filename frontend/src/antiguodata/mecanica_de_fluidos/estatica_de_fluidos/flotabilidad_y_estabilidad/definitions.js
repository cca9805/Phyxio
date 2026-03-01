import { formatNumber } from '../../../../utils/formatNumber.js';

const g = 9.81; // Gravedad (m/s²)
const rho_agua = 1000; // Densidad del agua (kg/m³)

export const definitions = [
  // Grupo 1: Principio de Arquímedes - Empuje
  {
    id: 'empuje-arquimedes',
    groupId: 'principio-arquimedes',
    title: 'Empuje (Principio de Arquímedes)',
    isFundamental: true,
    formula: String.raw`E = \rho_{fluido} \cdot g \cdot V_{sumergido}`,
    variables: [
      { symbol: 'rho_fluido', label: 'Densidad del fluido (ρ)', unit: 'kg/m³', defaultValue: rho_agua },
      { symbol: 'V_sumergido', label: 'Volumen sumergido (V)', unit: 'm³' }
    ],
    output: { symbol: 'E', label: 'Empuje (E)', unit: 'N' },
    resolve: ({ rho_fluido, V_sumergido }) => {
      const numRho = parseFloat(rho_fluido);
      const numV = parseFloat(V_sumergido);
      const E = numRho * g * numV;
      const kN = E / 1000;
      return {
        result: { E: formatNumber(E) },
        steps: [
          `E = ρ_fluido × g × V_sumergido`,
          `E = ${numRho} kg/m³ × ${g} m/s² × ${numV} m³`,
          `E = ${formatNumber(E)} N`,
          E > 1000 ? `E = ${formatNumber(kN)} kN` : ''
        ].filter(s => s)
      };
    }
  },

  // Grupo 2: Condición de flotación
  {
    id: 'condicion-flotacion',
    groupId: 'condicion-flotacion',
    title: 'Condición de Flotación',
    isFundamental: true,
    formula: String.raw`E = W \quad \Rightarrow \quad \rho_{fluido} \cdot V_{sumergido} = \rho_{objeto} \cdot V_{total}`,
    variables: [
      { symbol: 'rho_objeto', label: 'Densidad del objeto (ρ_obj)', unit: 'kg/m³' },
      { symbol: 'V_total', label: 'Volumen total del objeto (V)', unit: 'm³' },
      { symbol: 'rho_fluido', label: 'Densidad del fluido (ρ_f)', unit: 'kg/m³', defaultValue: rho_agua }
    ],
    output: { symbol: 'V_sumergido', label: 'Volumen sumergido', unit: 'm³' },
    resolve: ({ rho_objeto, V_total, rho_fluido }) => {
      const numRhoObj = parseFloat(rho_objeto);
      const numVtotal = parseFloat(V_total);
      const numRhoFluid = parseFloat(rho_fluido);
      
      if (numRhoObj >= numRhoFluid) {
        return { 
          error: 'El objeto se hunde (ρ_objeto ≥ ρ_fluido). No hay equilibrio de flotación.' 
        };
      }
      
      const V_sumergido = (numRhoObj / numRhoFluid) * numVtotal;
      const fraccion = V_sumergido / numVtotal;
      const porcentaje = fraccion * 100;
      
      return {
        result: { V_sumergido: formatNumber(V_sumergido) },
        steps: [
          `Condición de equilibrio: E = W`,
          `ρ_fluido × V_sumergido = ρ_objeto × V_total`,
          `V_sumergido = (ρ_objeto / ρ_fluido) × V_total`,
          `V_sumergido = (${numRhoObj} / ${numRhoFluid}) × ${numVtotal}`,
          `V_sumergido = ${formatNumber(V_sumergido)} m³`,
          `Fracción sumergida: ${formatNumber(porcentaje)}%`
        ]
      };
    }
  },

  // Grupo 3: Peso aparente
  {
    id: 'peso-aparente',
    groupId: 'peso-aparente',
    title: 'Peso Aparente en Fluido',
    isFundamental: true,
    formula: String.raw`W_{aparente} = W - E`,
    variables: [
      { symbol: 'W', label: 'Peso real (W)', unit: 'N' },
      { symbol: 'E', label: 'Empuje (E)', unit: 'N' }
    ],
    output: { symbol: 'W_aparente', label: 'Peso aparente', unit: 'N' },
    resolve: ({ W, E }) => {
      const numW = parseFloat(W);
      const numE = parseFloat(E);
      const W_aparente = numW - numE;
      const reduccion = (numE / numW) * 100;
      
      return {
        result: { W_aparente: formatNumber(W_aparente) },
        steps: [
          `W_aparente = W - E`,
          `W_aparente = ${numW} N - ${numE} N`,
          `W_aparente = ${formatNumber(W_aparente)} N`,
          `Reducción: ${formatNumber(reduccion)}%`
        ]
      };
    }
  },

  // Grupo 4: Densidad desde flotación
  {
    id: 'densidad-desde-flotacion',
    groupId: 'densidad-flotacion',
    title: 'Densidad del Objeto desde Flotación',
    isFundamental: true,
    formula: String.raw`\rho_{objeto} = \rho_{fluido} \cdot \frac{V_{sumergido}}{V_{total}}`,
    variables: [
      { symbol: 'rho_fluido', label: 'Densidad del fluido (ρ_f)', unit: 'kg/m³', defaultValue: rho_agua },
      { symbol: 'V_sumergido', label: 'Volumen sumergido', unit: 'm³' },
      { symbol: 'V_total', label: 'Volumen total', unit: 'm³' }
    ],
    output: { symbol: 'rho_objeto', label: 'Densidad del objeto', unit: 'kg/m³' },
    resolve: ({ rho_fluido, V_sumergido, V_total }) => {
      const numRhoFluid = parseFloat(rho_fluido);
      const numVsum = parseFloat(V_sumergido);
      const numVtotal = parseFloat(V_total);
      
      if (numVsum > numVtotal) {
        return { error: 'El volumen sumergido no puede ser mayor que el volumen total.' };
      }
      
      const rho_objeto = numRhoFluid * (numVsum / numVtotal);
      const fraccion = numVsum / numVtotal;
      
      return {
        result: { rho_objeto: formatNumber(rho_objeto) },
        steps: [
          `ρ_objeto = ρ_fluido × (V_sumergido / V_total)`,
          `ρ_objeto = ${numRhoFluid} × (${numVsum} / ${numVtotal})`,
          `ρ_objeto = ${numRhoFluid} × ${formatNumber(fraccion)}`,
          `ρ_objeto = ${formatNumber(rho_objeto)} kg/m³`
        ]
      };
    }
  },

  // Grupo 5: Carga máxima de flotación
  {
    id: 'carga-maxima-flotacion',
    groupId: 'carga-maxima',
    title: 'Carga Máxima de Flotación',
    isFundamental: true,
    formula: String.raw`m_{carga} = \rho_{fluido} \cdot V_{total} - m_{objeto}`,
    variables: [
      { symbol: 'rho_fluido', label: 'Densidad del fluido (ρ_f)', unit: 'kg/m³', defaultValue: rho_agua },
      { symbol: 'V_total', label: 'Volumen total', unit: 'm³' },
      { symbol: 'm_objeto', label: 'Masa del objeto', unit: 'kg' }
    ],
    output: { symbol: 'm_carga', label: 'Carga máxima', unit: 'kg' },
    resolve: ({ rho_fluido, V_total, m_objeto }) => {
      const numRhoFluid = parseFloat(rho_fluido);
      const numVtotal = parseFloat(V_total);
      const numMobj = parseFloat(m_objeto);
      
      const m_max_total = numRhoFluid * numVtotal;
      const m_carga = m_max_total - numMobj;
      
      if (m_carga < 0) {
        return { error: 'El objeto es demasiado pesado y se hundirá sin carga.' };
      }
      
      const toneladas = m_carga / 1000;
      
      return {
        result: { m_carga: formatNumber(m_carga) },
        steps: [
          `Masa máxima total: m_max = ρ_fluido × V_total = ${formatNumber(m_max_total)} kg`,
          `m_carga = m_max - m_objeto`,
          `m_carga = ${formatNumber(m_max_total)} - ${numMobj}`,
          `m_carga = ${formatNumber(m_carga)} kg`,
          m_carga > 1000 ? `m_carga = ${formatNumber(toneladas)} toneladas` : ''
        ].filter(s => s)
      };
    }
  },

  // Grupo 6: Altura metacéntrica
  {
    id: 'altura-metacentrica',
    groupId: 'estabilidad-metacentrica',
    title: 'Altura Metacéntrica',
    isFundamental: true,
    formula: String.raw`GM = \frac{I}{V_{sumergido}} - BG`,
    variables: [
      { symbol: 'I', label: 'Momento de inercia del área de flotación (I)', unit: 'm⁴' },
      { symbol: 'V_sumergido', label: 'Volumen sumergido (V)', unit: 'm³' },
      { symbol: 'BG', label: 'Distancia centro flotación-centro gravedad', unit: 'm' }
    ],
    output: { symbol: 'GM', label: 'Altura metacéntrica (GM)', unit: 'm' },
    resolve: ({ I, V_sumergido, BG }) => {
      const numI = parseFloat(I);
      const numV = parseFloat(V_sumergido);
      const numBG = parseFloat(BG);
      
      const BM = numI / numV;
      const GM = BM - numBG;
      
      let estabilidad;
      if (GM > 0) estabilidad = 'ESTABLE';
      else if (GM === 0) estabilidad = 'INDIFERENTE';
      else estabilidad = 'INESTABLE';
      
      return {
        result: { GM: formatNumber(GM) },
        steps: [
          `BM = I / V_sumergido = ${numI} / ${numV} = ${formatNumber(BM)} m`,
          `GM = BM - BG = ${formatNumber(BM)} - ${numBG}`,
          `GM = ${formatNumber(GM)} m`,
          `Estabilidad: ${estabilidad}`
        ]
      };
    }
  },

  // Grupo 7: Densidad relativa (gravedad específica)
  {
    id: 'densidad-relativa',
    groupId: 'densidad-relativa',
    title: 'Densidad Relativa (Gravedad Específica)',
    isFundamental: true,
    formula: String.raw`SG = \frac{\rho_{sustancia}}{\rho_{agua}}`,
    variables: [
      { symbol: 'rho_sustancia', label: 'Densidad de la sustancia (ρ)', unit: 'kg/m³' }
    ],
    output: { symbol: 'SG', label: 'Gravedad específica (SG)', unit: '-' },
    resolve: ({ rho_sustancia }) => {
      const numRho = parseFloat(rho_sustancia);
      const SG = numRho / rho_agua;
      
      let comportamiento;
      if (SG < 1) comportamiento = 'Flota en agua';
      else if (SG === 1) comportamiento = 'Neutro en agua';
      else comportamiento = 'Se hunde en agua';
      
      return {
        result: { SG: formatNumber(SG) },
        steps: [
          `SG = ρ_sustancia / ρ_agua`,
          `SG = ${numRho} / ${rho_agua}`,
          `SG = ${formatNumber(SG)}`,
          `Comportamiento: ${comportamiento}`
        ]
      };
    }
  },

  // Grupo 8: Volumen desplazado
  {
    id: 'volumen-desplazado',
    groupId: 'volumen-desplazado',
    title: 'Volumen Desplazado desde Peso',
    isFundamental: true,
    formula: String.raw`V_{desplazado} = \frac{W}{\rho_{fluido} \cdot g}`,
    variables: [
      { symbol: 'W', label: 'Peso del objeto (W)', unit: 'N' },
      { symbol: 'rho_fluido', label: 'Densidad del fluido (ρ)', unit: 'kg/m³', defaultValue: rho_agua }
    ],
    output: { symbol: 'V_desplazado', label: 'Volumen desplazado', unit: 'm³' },
    resolve: ({ W, rho_fluido }) => {
      const numW = parseFloat(W);
      const numRho = parseFloat(rho_fluido);
      
      const V_desplazado = numW / (numRho * g);
      const litros = V_desplazado * 1000;
      
      return {
        result: { V_desplazado: formatNumber(V_desplazado) },
        steps: [
          `V_desplazado = W / (ρ_fluido × g)`,
          `V_desplazado = ${numW} / (${numRho} × ${g})`,
          `V_desplazado = ${formatNumber(V_desplazado)} m³`,
          `V_desplazado = ${formatNumber(litros)} litros`
        ]
      };
    }
  }
];
