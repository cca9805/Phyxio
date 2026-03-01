import { formatNumber } from '../../../utils/formatNumber.js';

// Constantes útiles
const g = 10; // m/s² (simplificado para ESO)
const rho_agua = 1000; // kg/m³

export const definitions = [
  // Grupo 1: Cálculo del Empuje
  {
    id: 'empuje',
    groupId: 'empuje',
    title: 'Cálculo del Empuje',
    isFundamental: true,
    formula: String.raw`E = \rho \cdot V \cdot g`,
    variables: [
      { symbol: 'rho', label: 'Densidad del líquido (ρ)', unit: 'kg/m³', defaultValue: rho_agua },
      { symbol: 'V', label: 'Volumen sumergido', unit: 'm³' }
    ],
    output: { symbol: 'E', label: 'Empuje', unit: 'N' },
    resolve: ({ rho, V }) => {
      const densidad = parseFloat(rho);
      const volumen = parseFloat(V);
      
      if (densidad <= 0) {
        return { error: 'La densidad debe ser positiva.' };
      }
      
      if (volumen <= 0) {
        return { error: 'El volumen debe ser positivo.' };
      }
      
      const E = densidad * volumen * g;
      const kg = E / g; // Peso equivalente en kg
      
      return {
        result: { E: formatNumber(E) },
        steps: [
          `Fórmula del empuje: E = ρ × V × g`,
          `Sustitución: E = ${densidad} × ${volumen} × ${g}`,
          `E = ${formatNumber(E)} N`,
          `Equivalente al peso de ${formatNumber(kg)} kg de líquido desplazado`
        ]
      };
    }
  },

  // Grupo 2: Volumen desde empuje
  {
    id: 'volumen-desde-empuje',
    groupId: 'empuje',
    title: 'Calcular Volumen Sumergido',
    formula: String.raw`V = \frac{E}{\rho \cdot g}`,
    variables: [
      { symbol: 'E', label: 'Empuje', unit: 'N' },
      { symbol: 'rho', label: 'Densidad del líquido (ρ)', unit: 'kg/m³', defaultValue: rho_agua }
    ],
    output: { symbol: 'V', label: 'Volumen sumergido', unit: 'm³' },
    resolve: ({ E, rho }) => {
      const empuje = parseFloat(E);
      const densidad = parseFloat(rho);
      
      if (empuje <= 0) {
        return { error: 'El empuje debe ser positivo.' };
      }
      
      if (densidad <= 0) {
        return { error: 'La densidad debe ser positiva.' };
      }
      
      const V = empuje / (densidad * g);
      const litros = V * 1000;
      
      return {
        result: { V: formatNumber(V) },
        steps: [
          `Despeje: V = E / (ρ × g)`,
          `Sustitución: V = ${empuje} / (${densidad} × ${g})`,
          `V = ${formatNumber(V)} m³`,
          `Equivalente a ${formatNumber(litros)} litros`
        ]
      };
    }
  },

  // Grupo 3: Densidad desde empuje
  {
    id: 'densidad-desde-empuje',
    groupId: 'empuje',
    title: 'Calcular Densidad del Líquido',
    formula: String.raw`\rho = \frac{E}{V \cdot g}`,
    variables: [
      { symbol: 'E', label: 'Empuje', unit: 'N' },
      { symbol: 'V', label: 'Volumen sumergido', unit: 'm³' }
    ],
    output: { symbol: 'rho', label: 'Densidad del líquido (ρ)', unit: 'kg/m³' },
    resolve: ({ E, V }) => {
      const empuje = parseFloat(E);
      const volumen = parseFloat(V);
      
      if (empuje <= 0) {
        return { error: 'El empuje debe ser positivo.' };
      }
      
      if (volumen <= 0) {
        return { error: 'El volumen debe ser positivo.' };
      }
      
      const rho = empuje / (volumen * g);
      
      let tipoLiquido = '';
      if (rho < 900) tipoLiquido = 'Menos denso que el agua (aceite, alcohol)';
      else if (rho >= 900 && rho <= 1100) tipoLiquido = 'Similar al agua';
      else tipoLiquido = 'Más denso que el agua (agua salada, mercurio)';
      
      return {
        result: { rho: formatNumber(rho) },
        steps: [
          `Despeje: ρ = E / (V × g)`,
          `Sustitución: ρ = ${empuje} / (${volumen} × ${g})`,
          `ρ = ${formatNumber(rho)} kg/m³`,
          tipoLiquido
        ]
      };
    }
  },

  // Grupo 4: Comparación de flotación
  {
    id: 'flotacion',
    groupId: 'flotacion',
    title: 'Comparación de Flotación',
    isFundamental: true,
    formula: String.raw`\text{Comparar: } \rho_{objeto} \text{ vs } \rho_{líquido}`,
    variables: [
      { symbol: 'rho_objeto', label: 'Densidad del objeto', unit: 'kg/m³' },
      { symbol: 'rho_liquido', label: 'Densidad del líquido', unit: 'kg/m³', defaultValue: rho_agua }
    ],
    output: { symbol: 'resultado', label: 'Resultado', unit: '-' },
    resolve: ({ rho_objeto, rho_liquido }) => {
      const densidadObjeto = parseFloat(rho_objeto);
      const densidadLiquido = parseFloat(rho_liquido);
      
      if (densidadObjeto <= 0 || densidadLiquido <= 0) {
        return { error: 'Las densidades deben ser positivas.' };
      }
      
      let resultado;
      let fraccionSumergida = 0;
      let explicacion;
      
      if (densidadObjeto < densidadLiquido) {
        resultado = "FLOTA";
        fraccionSumergida = (densidadObjeto / densidadLiquido) * 100;
        explicacion = `El objeto flota porque su densidad (${densidadObjeto} kg/m³) es menor que la del líquido (${densidadLiquido} kg/m³)`;
      } else if (densidadObjeto > densidadLiquido) {
        resultado = "SE HUNDE";
        fraccionSumergida = 100;
        explicacion = `El objeto se hunde porque su densidad (${densidadObjeto} kg/m³) es mayor que la del líquido (${densidadLiquido} kg/m³)`;
      } else {
        resultado = "EQUILIBRIO";
        fraccionSumergida = 100;
        explicacion = `El objeto queda en equilibrio porque su densidad es igual a la del líquido (${densidadObjeto} kg/m³)`;
      }
      
      return {
        result: { resultado: resultado },
        steps: [
          `Densidad del objeto: ${densidadObjeto} kg/m³`,
          `Densidad del líquido: ${densidadLiquido} kg/m³`,
          `Comparación: ${densidadObjeto} ${densidadObjeto < densidadLiquido ? '<' : densidadObjeto > densidadLiquido ? '>' : '='} ${densidadLiquido}`,
          explicacion,
          resultado === "FLOTA" ? `Porcentaje sumergido: ${formatNumber(fraccionSumergida)}%` : ''
        ].filter(step => step !== '')
      };
    }
  },

  // Grupo 5: Fracción sumergida
  {
    id: 'fraccion-sumergida',
    groupId: 'flotacion',
    title: 'Calcular Fracción Sumergida',
    formula: String.raw`f = \frac{\rho_{objeto}}{\rho_{líquido}}`,
    variables: [
      { symbol: 'rho_objeto', label: 'Densidad del objeto', unit: 'kg/m³' },
      { symbol: 'rho_liquido', label: 'Densidad del líquido', unit: 'kg/m³', defaultValue: rho_agua }
    ],
    output: { symbol: 'f', label: 'Fracción sumergida', unit: '%' },
    resolve: ({ rho_objeto, rho_liquido }) => {
      const densidadObjeto = parseFloat(rho_objeto);
      const densidadLiquido = parseFloat(rho_liquido);
      
      if (densidadObjeto <= 0 || densidadLiquido <= 0) {
        return { error: 'Las densidades deben ser positivas.' };
      }
      
      if (densidadObjeto >= densidadLiquido) {
        return { 
          error: 'El objeto se hunde (densidad objeto ≥ densidad líquido). Esta calculadora solo aplica para objetos que flotan.' 
        };
      }
      
      const fraccion = densidadObjeto / densidadLiquido;
      const porcentajeSumergido = fraccion * 100;
      const porcentajeVisible = 100 - porcentajeSumergido;
      
      return {
        result: { f: formatNumber(porcentajeSumergido) },
        steps: [
          `Fracción sumergida: f = ρ_objeto / ρ_líquido`,
          `f = ${densidadObjeto} / ${densidadLiquido}`,
          `f = ${formatNumber(fraccion)}`,
          `Porcentaje sumergido: ${formatNumber(porcentajeSumergido)}%`,
          `Porcentaje visible: ${formatNumber(porcentajeVisible)}%`
        ]
      };
    }
  },

  // Grupo 6: Densidad del objeto desde fracción sumergida
  {
    id: 'densidad-desde-fraccion',
    groupId: 'flotacion',
    title: 'Calcular Densidad del Objeto',
    formula: String.raw`\rho_{objeto} = f \cdot \rho_{líquido}`,
    variables: [
      { symbol: 'f', label: 'Fracción sumergida', unit: '%' },
      { symbol: 'rho_liquido', label: 'Densidad del líquido', unit: 'kg/m³', defaultValue: rho_agua }
    ],
    output: { symbol: 'rho_objeto', label: 'Densidad del objeto', unit: 'kg/m³' },
    resolve: ({ f, rho_liquido }) => {
      const fraccion = parseFloat(f) / 100; // Convertir porcentaje a fracción
      const densidadLiquido = parseFloat(rho_liquido);
      
      if (fraccion <= 0 || fraccion > 1) {
        return { error: 'La fracción sumergida debe estar entre 0% y 100%.' };
      }
      
      if (densidadLiquido <= 0) {
        return { error: 'La densidad del líquido debe ser positiva.' };
      }
      
      const rho_objeto = fraccion * densidadLiquido;
      
      let material = '';
      if (rho_objeto < 500) material = 'Material muy ligero (corcho, espuma)';
      else if (rho_objeto < 900) material = 'Madera o plástico ligero';
      else if (rho_objeto < 1000) material = 'Hielo o madera densa';
      else material = 'Material denso (se hundiría en agua pura)';
      
      return {
        result: { rho_objeto: formatNumber(rho_objeto) },
        steps: [
          `Fracción sumergida: ${f}% = ${formatNumber(fraccion)}`,
          `Densidad del objeto: ρ_objeto = f × ρ_líquido`,
          `ρ_objeto = ${formatNumber(fraccion)} × ${densidadLiquido}`,
          `ρ_objeto = ${formatNumber(rho_objeto)} kg/m³`,
          material
        ]
      };
    }
  }
];
