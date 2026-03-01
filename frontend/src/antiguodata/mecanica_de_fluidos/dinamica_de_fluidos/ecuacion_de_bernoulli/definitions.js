import { formatNumber } from '../../../../utils/formatNumber.js';

const g = 9.81; // Gravedad (m/s²)
const rho_agua = 1000; // Densidad del agua (kg/m³)

export const definitions = [
  // Grupo 1: Ecuación de Bernoulli completa
  {
    id: 'bernoulli-completa',
    groupId: 'ecuacion-bernoulli',
    title: 'Ecuación de Bernoulli',
    isFundamental: true,
    formula: String.raw`P_1 + \frac{1}{2}\rho v_1^2 + \rho g h_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g h_2`,
    variables: [
      { symbol: 'P1', label: 'Presión punto 1 (P₁)', unit: 'Pa' },
      { symbol: 'v1', label: 'Velocidad punto 1 (v₁)', unit: 'm/s' },
      { symbol: 'h1', label: 'Altura punto 1 (h₁)', unit: 'm' },
      { symbol: 'P2', label: 'Presión punto 2 (P₂)', unit: 'Pa' },
      { symbol: 'v2', label: 'Velocidad punto 2 (v₂)', unit: 'm/s' },
      { symbol: 'h2', label: 'Altura punto 2 (h₂)', unit: 'm' },
      { symbol: 'rho', label: 'Densidad (ρ)', unit: 'kg/m³', defaultValue: rho_agua }
    ],
    output: { symbol: 'verificacion', label: 'Verificación', unit: '-' },
    resolve: ({ P1, v1, h1, P2, v2, h2, rho }) => {
      const numP1 = parseFloat(P1);
      const numV1 = parseFloat(v1);
      const numH1 = parseFloat(h1);
      const numP2 = parseFloat(P2);
      const numV2 = parseFloat(v2);
      const numH2 = parseFloat(h2);
      const numRho = parseFloat(rho);
      
      const E1 = numP1 + 0.5 * numRho * numV1 * numV1 + numRho * g * numH1;
      const E2 = numP2 + 0.5 * numRho * numV2 * numV2 + numRho * g * numH2;
      const diferencia = Math.abs(E1 - E2);
      const error_porcentual = (diferencia / E1) * 100;
      
      return {
        result: { verificacion: formatNumber(error_porcentual) },
        steps: [
          `Punto 1: E₁ = P₁ + ½ρv₁² + ρgh₁`,
          `E₁ = ${numP1} + ${formatNumber(0.5 * numRho * numV1 * numV1)} + ${formatNumber(numRho * g * numH1)}`,
          `E₁ = ${formatNumber(E1)} Pa`,
          `Punto 2: E₂ = ${formatNumber(E2)} Pa`,
          `Diferencia: ${formatNumber(diferencia)} Pa`,
          `Error: ${formatNumber(error_porcentual)}%`,
          error_porcentual < 1 ? 'Bernoulli se cumple ✓' : 'Hay pérdidas significativas'
        ]
      };
    }
  },

  // Grupo 2: Velocidad desde Bernoulli (horizontal)
  {
    id: 'velocidad-bernoulli-horizontal',
    groupId: 'velocidad-bernoulli',
    title: 'Velocidad desde Diferencia de Presión (Horizontal)',
    isFundamental: true,
    formula: String.raw`v_2 = \sqrt{v_1^2 + \frac{2(P_1 - P_2)}{\rho}}`,
    variables: [
      { symbol: 'P1', label: 'Presión punto 1 (P₁)', unit: 'Pa' },
      { symbol: 'P2', label: 'Presión punto 2 (P₂)', unit: 'Pa' },
      { symbol: 'v1', label: 'Velocidad punto 1 (v₁)', unit: 'm/s', defaultValue: 0 },
      { symbol: 'rho', label: 'Densidad (ρ)', unit: 'kg/m³', defaultValue: rho_agua }
    ],
    output: { symbol: 'v2', label: 'Velocidad v₂', unit: 'm/s' },
    resolve: ({ P1, P2, v1, rho }) => {
      const numP1 = parseFloat(P1);
      const numP2 = parseFloat(P2);
      const numV1 = parseFloat(v1);
      const numRho = parseFloat(rho);
      
      const deltaP = numP1 - numP2;
      const v2_squared = numV1 * numV1 + (2 * deltaP / numRho);
      
      if (v2_squared < 0) {
        return { error: 'Velocidad negativa: P₂ debe ser menor que P₁ para flujo en esa dirección.' };
      }
      
      const v2 = Math.sqrt(v2_squared);
      const kmh = v2 * 3.6;
      
      return {
        result: { v2: formatNumber(v2) },
        steps: [
          `ΔP = P₁ - P₂ = ${formatNumber(deltaP)} Pa`,
          `v₂² = v₁² + 2ΔP/ρ`,
          `v₂² = ${numV1}² + 2(${formatNumber(deltaP)})/${numRho}`,
          `v₂ = ${formatNumber(v2)} m/s = ${formatNumber(kmh)} km/h`
        ]
      };
    }
  },

  // Grupo 3: Teorema de Torricelli
  {
    id: 'teorema-torricelli',
    groupId: 'torricelli',
    title: 'Teorema de Torricelli (Velocidad de Salida)',
    isFundamental: true,
    formula: String.raw`v = \sqrt{2gh}`,
    variables: [
      { symbol: 'h', label: 'Altura de la columna (h)', unit: 'm' }
    ],
    output: { symbol: 'v', label: 'Velocidad de salida (v)', unit: 'm/s' },
    resolve: ({ h }) => {
      const numH = parseFloat(h);
      const v = Math.sqrt(2 * g * numH);
      const kmh = v * 3.6;
      
      return {
        result: { v: formatNumber(v) },
        steps: [
          `v = √(2gh)`,
          `v = √(2 × ${g} × ${numH})`,
          `v = √${formatNumber(2 * g * numH)}`,
          `v = ${formatNumber(v)} m/s = ${formatNumber(kmh)} km/h`
        ]
      };
    }
  },

  // Grupo 4: Caudal volumétrico
  {
    id: 'caudal-volumetrico',
    groupId: 'caudal',
    title: 'Caudal Volumétrico',
    isFundamental: true,
    formula: String.raw`Q = A \cdot v`,
    variables: [
      { symbol: 'A', label: 'Área de la sección (A)', unit: 'm²' },
      { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' }
    ],
    output: { symbol: 'Q', label: 'Caudal (Q)', unit: 'm³/s' },
    resolve: ({ A, v }) => {
      const numA = parseFloat(A);
      const numV = parseFloat(v);
      const Q = numA * numV;
      const litros_s = Q * 1000;
      const litros_min = litros_s * 60;
      
      return {
        result: { Q: formatNumber(Q) },
        steps: [
          `Q = A × v`,
          `Q = ${numA} m² × ${numV} m/s`,
          `Q = ${formatNumber(Q)} m³/s`,
          `Q = ${formatNumber(litros_s)} L/s = ${formatNumber(litros_min)} L/min`
        ]
      };
    }
  },

  // Grupo 5: Ecuación de continuidad
  {
    id: 'ecuacion-continuidad',
    groupId: 'continuidad',
    title: 'Ecuación de Continuidad',
    isFundamental: true,
    formula: String.raw`A_1 v_1 = A_2 v_2`,
    variables: [
      { symbol: 'A1', label: 'Área sección 1 (A₁)', unit: 'm²' },
      { symbol: 'v1', label: 'Velocidad sección 1 (v₁)', unit: 'm/s' },
      { symbol: 'A2', label: 'Área sección 2 (A₂)', unit: 'm²' }
    ],
    output: { symbol: 'v2', label: 'Velocidad v₂', unit: 'm/s' },
    resolve: ({ A1, v1, A2 }) => {
      const numA1 = parseFloat(A1);
      const numV1 = parseFloat(v1);
      const numA2 = parseFloat(A2);
      
      if (numA2 === 0) return { error: 'El área A₂ no puede ser cero.' };
      
      const v2 = (numA1 * numV1) / numA2;
      const relacion = numA1 / numA2;
      
      return {
        result: { v2: formatNumber(v2) },
        steps: [
          `A₁v₁ = A₂v₂`,
          `v₂ = (A₁/A₂) × v₁`,
          `v₂ = (${numA1}/${numA2}) × ${numV1}`,
          `v₂ = ${formatNumber(relacion)} × ${numV1}`,
          `v₂ = ${formatNumber(v2)} m/s`
        ]
      };
    }
  },

  // Grupo 6: Presión dinámica
  {
    id: 'presion-dinamica',
    groupId: 'presion-dinamica',
    title: 'Presión Dinámica',
    isFundamental: true,
    formula: String.raw`P_{din} = \frac{1}{2}\rho v^2`,
    variables: [
      { symbol: 'rho', label: 'Densidad (ρ)', unit: 'kg/m³', defaultValue: rho_agua },
      { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' }
    ],
    output: { symbol: 'P_din', label: 'Presión dinámica', unit: 'Pa' },
    resolve: ({ rho, v }) => {
      const numRho = parseFloat(rho);
      const numV = parseFloat(v);
      const P_din = 0.5 * numRho * numV * numV;
      const kPa = P_din / 1000;
      
      return {
        result: { P_din: formatNumber(P_din) },
        steps: [
          `P_din = ½ρv²`,
          `P_din = 0.5 × ${numRho} × ${numV}²`,
          `P_din = 0.5 × ${numRho} × ${formatNumber(numV * numV)}`,
          `P_din = ${formatNumber(P_din)} Pa = ${formatNumber(kPa)} kPa`
        ]
      };
    }
  },

  // Grupo 7: Carga total (altura piezométrica)
  {
    id: 'carga-total',
    groupId: 'carga-total',
    title: 'Carga Total (Altura Piezométrica)',
    isFundamental: true,
    formula: String.raw`H = \frac{P}{\rho g} + \frac{v^2}{2g} + z`,
    variables: [
      { symbol: 'P', label: 'Presión (P)', unit: 'Pa' },
      { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' },
      { symbol: 'z', label: 'Altura (z)', unit: 'm' },
      { symbol: 'rho', label: 'Densidad (ρ)', unit: 'kg/m³', defaultValue: rho_agua }
    ],
    output: { symbol: 'H', label: 'Carga total (H)', unit: 'm' },
    resolve: ({ P, v, z, rho }) => {
      const numP = parseFloat(P);
      const numV = parseFloat(v);
      const numZ = parseFloat(z);
      const numRho = parseFloat(rho);
      
      const h_presion = numP / (numRho * g);
      const h_velocidad = (numV * numV) / (2 * g);
      const H = h_presion + h_velocidad + numZ;
      
      return {
        result: { H: formatNumber(H) },
        steps: [
          `Carga de presión: h_p = P/(ρg) = ${formatNumber(h_presion)} m`,
          `Carga de velocidad: h_v = v²/(2g) = ${formatNumber(h_velocidad)} m`,
          `Carga de posición: z = ${numZ} m`,
          `Carga total: H = ${formatNumber(h_presion)} + ${formatNumber(h_velocidad)} + ${numZ}`,
          `H = ${formatNumber(H)} m`
        ]
      };
    }
  },

  // Grupo 8: Tubo de Pitot
  {
    id: 'tubo-pitot',
    groupId: 'tubo-pitot',
    title: 'Velocidad con Tubo de Pitot',
    isFundamental: true,
    formula: String.raw`v = \sqrt{\frac{2(P_{estancamiento} - P_{estatica})}{\rho}}`,
    variables: [
      { symbol: 'P_estancamiento', label: 'Presión de estancamiento', unit: 'Pa' },
      { symbol: 'P_estatica', label: 'Presión estática', unit: 'Pa' },
      { symbol: 'rho', label: 'Densidad (ρ)', unit: 'kg/m³', defaultValue: rho_agua }
    ],
    output: { symbol: 'v', label: 'Velocidad (v)', unit: 'm/s' },
    resolve: ({ P_estancamiento, P_estatica, rho }) => {
      const numPe = parseFloat(P_estancamiento);
      const numPs = parseFloat(P_estatica);
      const numRho = parseFloat(rho);
      
      const deltaP = numPe - numPs;
      if (deltaP < 0) {
        return { error: 'P_estancamiento debe ser mayor que P_estática.' };
      }
      
      const v = Math.sqrt((2 * deltaP) / numRho);
      const kmh = v * 3.6;
      
      return {
        result: { v: formatNumber(v) },
        steps: [
          `ΔP = P_estancamiento - P_estática = ${formatNumber(deltaP)} Pa`,
          `v = √(2ΔP/ρ)`,
          `v = √(2 × ${formatNumber(deltaP)} / ${numRho})`,
          `v = ${formatNumber(v)} m/s = ${formatNumber(kmh)} km/h`
        ]
      };
    }
  }
];
