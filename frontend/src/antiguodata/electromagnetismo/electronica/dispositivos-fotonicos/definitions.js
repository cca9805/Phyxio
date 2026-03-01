import { formatNumber } from '../../../../utils/formatNumber';

// Constantes Físicas
const H = 6.62607015e-34; // Constante de Planck en J·s
const C = 299792458;      // Velocidad de la luz en m/s
const Q = 1.602176634e-19; // Carga del electrón en C

export const definitions = [
  // Grupo 1: Energía del Fotón
  {
    id: "energia-foton-e",
    groupId: "energia-foton",
    title: "Calcular Energía del Fotón (E)",
    isFundamental: true,
    formula: "E = (h * c) / λ",
    variables: [{ symbol: "λ", label: "Longitud de Onda", unit: "nm" }],
    output: { symbol: "E", label: "Energía", unit: "eV" },
    constants: [
      { symbol: "h", value: H, unit: "J·s" },
      { symbol: "c", value: C, unit: "m/s" },
      { symbol: "q", value: Q, unit: "C" }
    ],
    resolve: ({ λ }) => {
      const lambda_m = λ * 1e-9;
      const energy_J = (H * C) / lambda_m;
      const energy_eV = energy_J / Q;
      return {
        result: { E: formatNumber(energy_eV) },
        steps: [
          `Convertir λ a metros: ${λ} nm = ${formatNumber(lambda_m)} m`,
          `Calcular Energía en Joules: E = (h * c) / λ = (${formatNumber(H)} * ${formatNumber(C)}) / ${formatNumber(lambda_m)} = ${formatNumber(energy_J)} J`,
          `Convertir a electronvoltios: E = E(J) / q = ${formatNumber(energy_J)} / ${formatNumber(Q)} = ${formatNumber(energy_eV)} eV`
        ]
      };
    }
  },
  {
    id: "energia-foton-lambda",
    groupId: "energia-foton",
    title: "Calcular Longitud de Onda (λ)",
    isComplementary: true,
    formula: "λ = (h * c) / E",
    variables: [{ symbol: "E", label: "Energía", unit: "eV" }],
    output: { symbol: "λ", label: "Longitud de Onda", unit: "nm" },
    constants: [
      { symbol: "h", value: H, unit: "J·s" },
      { symbol: "c", value: C, unit: "m/s" },
      { symbol: "q", value: Q, unit: "C" }
    ],
    resolve: ({ E }) => {
      const energy_J = E * Q;
      const lambda_m = (H * C) / energy_J;
      const lambda_nm = lambda_m * 1e9;
      return {
        result: { "λ": formatNumber(lambda_nm) },
        steps: [
          `Convertir E a Joules: E = ${E} eV * ${formatNumber(Q)} C = ${formatNumber(energy_J)} J`,
          `Calcular λ en metros: λ = (h * c) / E = (${formatNumber(H)} * ${formatNumber(C)}) / ${formatNumber(energy_J)} = ${formatNumber(lambda_m)} m`,
          `Convertir a nanómetros: λ = ${formatNumber(lambda_m)} * 1e9 = ${formatNumber(lambda_nm)} nm`
        ]
      };
    }
  },

  // Grupo 2: Voltaje Directo del LED
  {
    id: "voltaje-led-vf",
    groupId: "voltaje-led",
    title: "Calcular Voltaje Directo (Vf)",
    isFundamental: true,
    formula: "Vf ≈ E / q",
    variables: [{ symbol: "E", label: "Energía del Fotón", unit: "eV" }],
    output: { symbol: "Vf", label: "Voltaje Directo", unit: "V" },
    constants: [{ symbol: "q", value: Q, unit: "C" }],
    resolve: ({ E }) => {
      // En la práctica, E en eV es numéricamente igual a Vf en V.
      const vf = E;
      const energy_J = E * Q;
      return {
        result: { Vf: formatNumber(vf) },
        steps: [
          `El voltaje directo (Vf) es numéricamente igual a la energía del fotón en eV.`,
          `Convertir E a Joules: E = ${E} eV * ${formatNumber(Q)} C = ${formatNumber(energy_J)} J`,
          `Calcular Vf: Vf = E(J) / q = ${formatNumber(energy_J)} / ${formatNumber(Q)} = ${formatNumber(vf)} V`
        ]
      };
    }
  },
  {
    id: "voltaje-led-e",
    groupId: "voltaje-led",
    title: "Calcular Energía del Fotón (E) desde Vf",
    isComplementary: true,
    formula: "E ≈ Vf * q",
    variables: [{ symbol: "Vf", label: "Voltaje Directo", unit: "V" }],
    output: { symbol: "E", label: "Energía del Fotón", unit: "eV" },
    constants: [{ symbol: "q", value: Q, unit: "C" }],
    resolve: ({ Vf }) => {
      const energy_eV = Vf;
      const energy_J = Vf * Q;
      return {
        result: { E: formatNumber(energy_eV) },
        steps: [
          `La energía del fotón en eV es numéricamente igual al voltaje directo (Vf).`,
          `Calcular E en Joules: E = Vf * q = ${Vf} V * ${formatNumber(Q)} C = ${formatNumber(energy_J)} J`,
          `Convertir E a eV: E = E(J) / q = ${formatNumber(energy_J)} / ${formatNumber(Q)} = ${formatNumber(energy_eV)} eV`
        ]
      };
    }
  },

  // Grupo 3: Responsividad del Fotodiodo
  {
    id: "responsividad-r",
    groupId: "responsividad-fotodiodo",
    title: "Calcular Responsividad (R)",
    isFundamental: true,
    formula: "R = Ip / Pin",
    variables: [
      { symbol: "Ip", label: "Fotocorriente", unit: "A" },
      { symbol: "Pin", label: "Potencia Óptica Incidente", unit: "W" }
    ],
    output: { symbol: "R", label: "Responsividad", unit: "A/W" },
    resolve: ({ Ip, Pin }) => {
      const r = Ip / Pin;
      return {
        result: { R: formatNumber(r) },
        steps: [`R = ${Ip} A / ${Pin} W = ${formatNumber(r)} A/W`]
      };
    }
  },
  {
    id: "responsividad-ip",
    groupId: "responsividad-fotodiodo",
    title: "Calcular Fotocorriente (Ip)",
    isComplementary: true,
    formula: "Ip = R * Pin",
    variables: [
      { symbol: "R", label: "Responsividad", unit: "A/W" },
      { symbol: "Pin", label: "Potencia Óptica Incidente", unit: "W" }
    ],
    output: { symbol: "Ip", label: "Fotocorriente", unit: "A" },
    resolve: ({ R, Pin }) => {
      const ip = R * Pin;
      return {
        result: { Ip: formatNumber(ip) },
        steps: [`Ip = ${R} A/W * ${Pin} W = ${formatNumber(ip)} A`]
      };
    }
  },
  {
    id: "responsividad-pin",
    groupId: "responsividad-fotodiodo",
    title: "Calcular Potencia Óptica Incidente (Pin)",
    isComplementary: true,
    formula: "Pin = Ip / R",
    variables: [
      { symbol: "Ip", label: "Fotocorriente", unit: "A" },
      { symbol: "R", label: "Responsividad", unit: "A/W" }
    ],
    output: { symbol: "Pin", label: "Potencia Óptica", unit: "W" },
    resolve: ({ Ip, R }) => {
      const pin = Ip / R;
      return {
        result: { Pin: formatNumber(pin) },
        steps: [`Pin = ${Ip} A / ${R} A/W = ${formatNumber(pin)} W`]
      };
    }
  },

  // Grupo 4: Eficiencia Cuántica (QE)
  {
    id: "eficiencia-cuantica-qe",
    groupId: "eficiencia-cuantica",
    title: "Calcular Eficiencia Cuántica (QE)",
    isFundamental: true,
    formula: "QE = R * (h * c) / (q * λ)",
    variables: [
      { symbol: "R", label: "Responsividad", unit: "A/W" },
      { symbol: "λ", label: "Longitud de Onda", unit: "nm" }
    ],
    output: { symbol: "QE", label: "Eficiencia Cuántica", unit: "%" },
    constants: [
      { symbol: "h", value: H, unit: "J·s" },
      { symbol: "c", value: C, unit: "m/s" },
      { symbol: "q", value: Q, unit: "C" }
    ],
    resolve: ({ R, λ }) => {
      const lambda_m = λ * 1e-9;
      const qe_ratio = R * (H * C) / (Q * lambda_m);
      const qe_percent = qe_ratio * 100;
      return {
        result: { QE: formatNumber(qe_percent) },
        steps: [
          `Convertir λ a metros: ${λ} nm = ${formatNumber(lambda_m)} m`,
          `Calcular QE (ratio): QE = ${R} * (${formatNumber(H)}*${formatNumber(C)}) / (${formatNumber(Q)}*${formatNumber(lambda_m)}) = ${formatNumber(qe_ratio)}`,
          `Convertir a porcentaje: QE(%) = ${formatNumber(qe_ratio)} * 100 = ${formatNumber(qe_percent)} %`
        ]
      };
    }
  },
  {
    id: "eficiencia-cuantica-r",
    groupId: "eficiencia-cuantica",
    title: "Calcular Responsividad (R) desde QE",
    isComplementary: true,
    formula: "R = QE * (q * λ) / (h * c)",
    variables: [
      { symbol: "QE", label: "Eficiencia Cuántica", unit: "%" },
      { symbol: "λ", label: "Longitud de Onda", unit: "nm" }
    ],
    output: { symbol: "R", label: "Responsividad", unit: "A/W" },
    constants: [
      { symbol: "h", value: H, unit: "J·s" },
      { symbol: "c", value: C, unit: "m/s" },
      { symbol: "q", value: Q, unit: "C" }
    ],
    resolve: ({ QE, λ }) => {
      const qe_ratio = QE / 100;
      const lambda_m = λ * 1e-9;
      const r = qe_ratio * (Q * lambda_m) / (H * C);
      return {
        result: { R: formatNumber(r) },
        steps: [
          `Convertir QE a ratio: ${QE}% = ${formatNumber(qe_ratio)}`,
          `Convertir λ a metros: ${λ} nm = ${formatNumber(lambda_m)} m`,
          `Calcular R: R = ${formatNumber(qe_ratio)} * (${formatNumber(Q)}*${formatNumber(lambda_m)}) / (${formatNumber(H)}*${formatNumber(C)}) = ${formatNumber(r)} A/W`
        ]
      };
    }
  },
  {
    id: "eficiencia-cuantica-lambda",
    groupId: "eficiencia-cuantica",
    title: "Calcular Longitud de Onda (λ) desde QE",
    isComplementary: true,
    formula: "λ = R * (h * c) / (QE * q)",
    variables: [
        { symbol: "R", label: "Responsividad", unit: "A/W" },
        { symbol: "QE", label: "Eficiencia Cuántica", unit: "%" }
    ],
    output: { symbol: "λ", label: "Longitud de Onda", unit: "nm" },
    constants: [
      { symbol: "h", value: H, unit: "J·s" },
      { symbol: "c", value: C, unit: "m/s" },
      { symbol: "q", value: Q, unit: "C" }
    ],
    resolve: ({ R, QE }) => {
      const qe_ratio = QE / 100;
      const lambda_m = R * (H * C) / (qe_ratio * Q);
      const lambda_nm = lambda_m * 1e9;
      return {
        result: { "λ": formatNumber(lambda_nm) },
        steps: [
          `Convertir QE a ratio: ${QE}% = ${formatNumber(qe_ratio)}`,
          `Calcular λ en metros: λ = ${R} * (${formatNumber(H)}*${formatNumber(C)}) / (${formatNumber(qe_ratio)}*${formatNumber(Q)}) = ${formatNumber(lambda_m)} m`,
          `Convertir a nanómetros: λ = ${formatNumber(lambda_m)} * 1e9 = ${formatNumber(lambda_nm)} nm`
        ]
      };
    }
  }
];
