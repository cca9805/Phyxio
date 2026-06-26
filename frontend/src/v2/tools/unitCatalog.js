// frontend/src/v2/tools/unitCatalog.js
// factor = multiplicador para convertir a la unidad base del grupo.

const metricUnits = (root, rootLabel, rootFactor, prefixes) =>
  prefixes.map((p) => ({
    id: `${p.id}${root}`,
    label: `${p.label}${rootLabel}`,
    symbol: `${p.symbol}${root}`,
    factor: rootFactor * p.factor,
    system: "metric",
  }));

const SI_PREFIX_SCALE = [
  { id: "p", label: "pico", symbol: "p", factor: 1e-12 },
  { id: "n", label: "nano", symbol: "n", factor: 1e-9 },
  { id: "u", label: "micro", symbol: "µ", factor: 1e-6 },
  { id: "m", label: "mili", symbol: "m", factor: 1e-3 },
  { id: "c", label: "centi", symbol: "c", factor: 1e-2 },
  { id: "d", label: "deci", symbol: "d", factor: 1e-1 },
  { id: "", label: "", symbol: "", factor: 1 },
  { id: "da", label: "deca", symbol: "da", factor: 1e1 },
  { id: "h", label: "hecto", symbol: "h", factor: 1e2 },
  { id: "k", label: "kilo", symbol: "k", factor: 1e3 },
  { id: "M", label: "mega", symbol: "M", factor: 1e6 },
  { id: "G", label: "giga", symbol: "G", factor: 1e9 },
];

export const RESULT_PREFIXES = [
  { id: "target", label: "Unidad elegida", symbol: "", factor: null },
  { id: "auto", label: "Prefijo SI automatico", symbol: "", factor: null },
  ...SI_PREFIX_SCALE.map((p) => ({
    id: p.id || "base",
    label: p.label || "base",
    symbol: p.symbol,
    factor: p.factor,
  })),
];

const lengthMetric = metricUnits("m", "metro", 1, SI_PREFIX_SCALE);
const massMetric = metricUnits("g", "gramo", 1e-3, SI_PREFIX_SCALE);
const timeMetric = [
  { id: "ps", label: "Picosegundo", symbol: "ps", factor: 1e-12, system: "metric" },
  { id: "ns", label: "Nanosegundo", symbol: "ns", factor: 1e-9, system: "metric" },
  { id: "us", label: "Microsegundo", symbol: "µs", factor: 1e-6, system: "metric" },
  { id: "ms", label: "Milisegundo", symbol: "ms", factor: 1e-3, system: "metric" },
  { id: "s", label: "Segundo", symbol: "s", factor: 1, system: "metric" },
  { id: "min", label: "Minuto", symbol: "min", factor: 60, system: "common" },
  { id: "h", label: "Hora", symbol: "h", factor: 3600, system: "common" },
  { id: "day", label: "Dia", symbol: "d", factor: 86400, system: "common" },
  { id: "week", label: "Semana", symbol: "sem", factor: 604800, system: "common" },
  { id: "year", label: "Ano juliano", symbol: "a", factor: 31557600, system: "common" },
];

export const UNIT_GROUPS = [
  {
    id: "length",
    label: "Longitud",
    base: "m",
    resultRoot: { symbol: "m", factor: 1, power: 1 },
    units: [
      ...lengthMetric,
      { id: "in", label: "Pulgada", symbol: "in", factor: 0.0254, system: "imperial" },
      { id: "ft", label: "Pie", symbol: "ft", factor: 0.3048, system: "imperial" },
      { id: "yd", label: "Yarda", symbol: "yd", factor: 0.9144, system: "imperial" },
      { id: "mi", label: "Milla", symbol: "mi", factor: 1609.344, system: "imperial" },
      { id: "nmi", label: "Milla nautica", symbol: "nmi", factor: 1852, system: "other" },
      { id: "au", label: "Unidad astronomica", symbol: "au", factor: 149597870700, system: "astronomy" },
      { id: "ly", label: "Ano luz", symbol: "ly", factor: 9.4607304725808e15, system: "astronomy" },
    ],
  },
  {
    id: "mass",
    label: "Masa",
    base: "kg",
    resultRoot: { symbol: "g", factor: 1e-3, power: 1 },
    units: [
      ...massMetric,
      { id: "oz", label: "Onza", symbol: "oz", factor: 0.028349523125, system: "imperial" },
      { id: "lb", label: "Libra", symbol: "lb", factor: 0.45359237, system: "imperial" },
      { id: "st", label: "Stone", symbol: "st", factor: 6.35029318, system: "imperial" },
      { id: "slug", label: "Slug", symbol: "slug", factor: 14.59390294, system: "imperial" },
      { id: "short_ton", label: "Tonelada corta", symbol: "US ton", factor: 907.18474, system: "imperial" },
      { id: "long_ton", label: "Tonelada larga", symbol: "UK ton", factor: 1016.0469088, system: "imperial" },
      { id: "u", label: "Unidad de masa atomica", symbol: "u", factor: 1.6605390666e-27, system: "atomic" },
    ],
  },
  {
    id: "time",
    label: "Tiempo",
    base: "s",
    resultRoot: { symbol: "s", factor: 1, power: 1 },
    units: timeMetric,
  },
  {
    id: "area",
    label: "Area",
    base: "m²",
    resultRoot: { symbol: "m", factor: 1, power: 2 },
    units: [
      { id: "mm2", label: "Milimetro cuadrado", symbol: "mm²", factor: 1e-6, system: "metric" },
      { id: "cm2", label: "Centimetro cuadrado", symbol: "cm²", factor: 1e-4, system: "metric" },
      { id: "m2", label: "Metro cuadrado", symbol: "m²", factor: 1, system: "metric" },
      { id: "km2", label: "Kilometro cuadrado", symbol: "km²", factor: 1e6, system: "metric" },
      { id: "ha", label: "Hectarea", symbol: "ha", factor: 1e4, system: "metric" },
      { id: "in2", label: "Pulgada cuadrada", symbol: "in²", factor: 0.00064516, system: "imperial" },
      { id: "ft2", label: "Pie cuadrado", symbol: "ft²", factor: 0.09290304, system: "imperial" },
      { id: "acre", label: "Acre", symbol: "acre", factor: 4046.8564224, system: "imperial" },
    ],
  },
  {
    id: "volume",
    label: "Volumen",
    base: "m³",
    resultRoot: { symbol: "m", factor: 1, power: 3 },
    units: [
      { id: "mm3", label: "Milimetro cubico", symbol: "mm³", factor: 1e-9, system: "metric" },
      { id: "cm3", label: "Centimetro cubico", symbol: "cm³", factor: 1e-6, system: "metric" },
      { id: "m3", label: "Metro cubico", symbol: "m³", factor: 1, system: "metric" },
      { id: "ml", label: "Mililitro", symbol: "mL", factor: 1e-6, system: "metric" },
      { id: "l", label: "Litro", symbol: "L", factor: 1e-3, system: "metric" },
      { id: "ft3", label: "Pie cubico", symbol: "ft³", factor: 0.028316846592, system: "imperial" },
      { id: "gal_us", label: "Galon estadounidense", symbol: "gal US", factor: 0.003785411784, system: "imperial" },
      { id: "gal_uk", label: "Galon imperial", symbol: "gal UK", factor: 0.00454609, system: "imperial" },
    ],
  },
  {
    id: "speed",
    label: "Velocidad",
    base: "m/s",
    units: [
      { id: "mps", label: "Metro/segundo", symbol: "m/s", factor: 1 },
      { id: "kmh", label: "Kilometro/hora", symbol: "km/h", factor: 1000 / 3600 },
      { id: "cms", label: "Centimetro/segundo", symbol: "cm/s", factor: 1e-2 },
      { id: "mph", label: "Milla/hora", symbol: "mph", factor: 1609.344 / 3600 },
      { id: "ftps", label: "Pie/segundo", symbol: "ft/s", factor: 0.3048 },
      { id: "knot", label: "Nudo", symbol: "kn", factor: 1852 / 3600 },
      { id: "c", label: "Velocidad de la luz", symbol: "c", factor: 299792458 },
    ],
  },
  {
    id: "acceleration",
    label: "Aceleracion",
    base: "m/s²",
    units: [
      { id: "mps2", label: "Metro/segundo²", symbol: "m/s²", factor: 1 },
      { id: "gal", label: "Gal", symbol: "Gal", factor: 0.01 },
      { id: "g0", label: "Gravedad estandar", symbol: "g0", factor: 9.80665 },
      { id: "ftps2", label: "Pie/segundo²", symbol: "ft/s²", factor: 0.3048 },
    ],
  },
  {
    id: "force",
    label: "Fuerza",
    base: "N",
    resultRoot: { symbol: "N", factor: 1, power: 1 },
    units: [
      ...metricUnits("N", "newton", 1, SI_PREFIX_SCALE),
      { id: "dyn", label: "Dina", symbol: "dyn", factor: 1e-5, system: "cgs" },
      { id: "kgf", label: "Kilogramo-fuerza", symbol: "kgf", factor: 9.80665, system: "technical" },
      { id: "lbf", label: "Libra-fuerza", symbol: "lbf", factor: 4.4482216152605, system: "imperial" },
      { id: "pdl", label: "Poundal", symbol: "pdl", factor: 0.138254954376, system: "imperial" },
    ],
  },
  {
    id: "energy",
    label: "Energia / Trabajo",
    base: "J",
    resultRoot: { symbol: "J", factor: 1, power: 1 },
    units: [
      ...metricUnits("J", "joule", 1, SI_PREFIX_SCALE),
      { id: "Wh", label: "Watt-hora", symbol: "Wh", factor: 3600 },
      { id: "kWh", label: "Kilowatt-hora", symbol: "kWh", factor: 3.6e6 },
      { id: "cal", label: "Caloria", symbol: "cal", factor: 4.184 },
      { id: "kcal", label: "Kilocaloria", symbol: "kcal", factor: 4184 },
      { id: "eV", label: "Electronvoltio", symbol: "eV", factor: 1.602176634e-19 },
      { id: "BTU", label: "BTU", symbol: "BTU", factor: 1055.05585262 },
      { id: "ftlb", label: "Pie-libra", symbol: "ft·lbf", factor: 1.3558179483314004 },
    ],
  },
  {
    id: "power",
    label: "Potencia",
    base: "W",
    resultRoot: { symbol: "W", factor: 1, power: 1 },
    units: [
      ...metricUnits("W", "watt", 1, SI_PREFIX_SCALE),
      { id: "hp_metric", label: "Caballo de vapor", symbol: "CV", factor: 735.49875 },
      { id: "hp_imp", label: "Horsepower mecanico", symbol: "hp", factor: 745.6998715822702 },
      { id: "BTUh", label: "BTU/h", symbol: "BTU/h", factor: 1055.05585262 / 3600 },
    ],
  },
  {
    id: "pressure",
    label: "Presion",
    base: "Pa",
    resultRoot: { symbol: "Pa", factor: 1, power: 1 },
    units: [
      ...metricUnits("Pa", "pascal", 1, SI_PREFIX_SCALE),
      { id: "bar", label: "Bar", symbol: "bar", factor: 1e5 },
      { id: "mbar", label: "Milibar", symbol: "mbar", factor: 100 },
      { id: "atm", label: "Atmosfera", symbol: "atm", factor: 101325 },
      { id: "mmHg", label: "Milimetro de mercurio", symbol: "mmHg", factor: 133.322387415 },
      { id: "psi", label: "Libra/pulgada²", symbol: "psi", factor: 6894.757293168 },
      { id: "torr", label: "Torr", symbol: "Torr", factor: 101325 / 760 },
    ],
  },
  {
    id: "density",
    label: "Densidad",
    base: "kg/m³",
    units: [
      { id: "kgm3", label: "Kilogramo/metro cubico", symbol: "kg/m³", factor: 1 },
      { id: "gcm3", label: "Gramo/centimetro cubico", symbol: "g/cm³", factor: 1000 },
      { id: "gl", label: "Gramo/litro", symbol: "g/L", factor: 1 },
      { id: "kgL", label: "Kilogramo/litro", symbol: "kg/L", factor: 1000 },
      { id: "lbft3", label: "Libra/pie cubico", symbol: "lb/ft³", factor: 16.01846337396 },
      { id: "lbgal", label: "Libra/galon US", symbol: "lb/gal", factor: 119.8264273167 },
    ],
  },
  {
    id: "charge",
    label: "Carga electrica",
    base: "C",
    resultRoot: { symbol: "C", factor: 1, power: 1 },
    units: [
      ...metricUnits("C", "coulomb", 1, SI_PREFIX_SCALE),
      { id: "Ah", label: "Amperio-hora", symbol: "Ah", factor: 3600 },
      { id: "mAh", label: "Miliamperio-hora", symbol: "mAh", factor: 3.6 },
      { id: "e", label: "Carga elemental", symbol: "e", factor: 1.602176634e-19 },
    ],
  },
  {
    id: "temperature",
    label: "Temperatura",
    base: "K",
    units: [
      { id: "K", label: "Kelvin", symbol: "K" },
      { id: "C", label: "Celsius", symbol: "°C" },
      { id: "F", label: "Fahrenheit", symbol: "°F" },
    ],
    isAffine: true,
  },
];

export function tempToKelvin(value, fromId) {
  if (!Number.isFinite(value)) return NaN;
  if (fromId === "K") return value;
  if (fromId === "C") return value + 273.15;
  if (fromId === "F") return (value - 32) * (5 / 9) + 273.15;
  return NaN;
}

export function kelvinToTemp(valueK, toId) {
  if (!Number.isFinite(valueK)) return NaN;
  if (toId === "K") return valueK;
  if (toId === "C") return valueK - 273.15;
  if (toId === "F") return (valueK - 273.15) * (9 / 5) + 32;
  return NaN;
}

export function findGroup(groupId) {
  return UNIT_GROUPS.find((g) => g.id === groupId) || UNIT_GROUPS[0];
}

export function findUnit(group, unitId) {
  return group?.units?.find((u) => u.id === unitId) || group?.units?.[0];
}

export function findResultPrefix(prefixId) {
  const id = prefixId == null || prefixId === "" ? "target" : String(prefixId);
  return RESULT_PREFIXES.find((p) => p.id === id) || RESULT_PREFIXES[0];
}
