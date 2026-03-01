// frontend/src/v2/tools/unitCatalog.js
// Catálogo mínimo pero útil (ampliable sin romper nada).
// En cada unidad: factor = multiplicador para convertir a la unidad base del "group".

export const UNIT_GROUPS = [
  {
    id: "length",
    label: "Longitud",
    base: "m",
    units: [
      { id: "mm", label: "Milímetro", symbol: "mm", factor: 1e-3 },
      { id: "cm", label: "Centímetro", symbol: "cm", factor: 1e-2 },
      { id: "m", label: "Metro", symbol: "m", factor: 1 },
      { id: "km", label: "Kilómetro", symbol: "km", factor: 1e3 },
      { id: "in", label: "Pulgada", symbol: "in", factor: 0.0254 },
      { id: "ft", label: "Pie", symbol: "ft", factor: 0.3048 },
      { id: "mi", label: "Milla", symbol: "mi", factor: 1609.344 },
    ],
  },
  {
    id: "mass",
    label: "Masa",
    base: "kg",
    units: [
      { id: "g", label: "Gramo", symbol: "g", factor: 1e-3 },
      { id: "kg", label: "Kilogramo", symbol: "kg", factor: 1 },
      { id: "t", label: "Tonelada", symbol: "t", factor: 1e3 },
      { id: "lb", label: "Libra", symbol: "lb", factor: 0.45359237 },
    ],
  },
  {
    id: "time",
    label: "Tiempo",
    base: "s",
    units: [
      { id: "ms", label: "Milisegundo", symbol: "ms", factor: 1e-3 },
      { id: "s", label: "Segundo", symbol: "s", factor: 1 },
      { id: "min", label: "Minuto", symbol: "min", factor: 60 },
      { id: "h", label: "Hora", symbol: "h", factor: 3600 },
      { id: "day", label: "Día", symbol: "d", factor: 86400 },
    ],
  },
  {
    id: "speed",
    label: "Velocidad",
    base: "m/s",
    units: [
      { id: "mps", label: "Metro/segundo", symbol: "m/s", factor: 1 },
      { id: "kmh", label: "Kilómetro/hora", symbol: "km/h", factor: 1000 / 3600 },
      { id: "mph", label: "Milla/hora", symbol: "mph", factor: 1609.344 / 3600 },
    ],
  },
  {
    id: "acceleration",
    label: "Aceleración",
    base: "m/s²",
    units: [
      { id: "mps2", label: "Metro/segundo²", symbol: "m/s²", factor: 1 },
      { id: "gal", label: "Gal", symbol: "Gal", factor: 0.01 }, // 1 Gal = 0.01 m/s²
    ],
  },
  {
    id: "force",
    label: "Fuerza",
    base: "N",
    units: [
      { id: "N", label: "Newton", symbol: "N", factor: 1 },
      { id: "kN", label: "Kilonewton", symbol: "kN", factor: 1e3 },
      { id: "kgf", label: "Kilogramo-fuerza", symbol: "kgf", factor: 9.80665 },
      { id: "lbf", label: "Libra-fuerza", symbol: "lbf", factor: 4.4482216152605 },
    ],
  },
  {
    id: "energy",
    label: "Energía / Trabajo",
    base: "J",
    units: [
      { id: "J", label: "Joule", symbol: "J", factor: 1 },
      { id: "kJ", label: "Kilojoule", symbol: "kJ", factor: 1e3 },
      { id: "Wh", label: "Watt-hora", symbol: "Wh", factor: 3600 },
      { id: "kWh", label: "Kilowatt-hora", symbol: "kWh", factor: 3.6e6 },
      { id: "cal", label: "Caloría", symbol: "cal", factor: 4.184 },
      { id: "kcal", label: "Kilocaloría", symbol: "kcal", factor: 4184 },
    ],
  },
  {
    id: "power",
    label: "Potencia",
    base: "W",
    units: [
      { id: "W", label: "Watt", symbol: "W", factor: 1 },
      { id: "kW", label: "Kilowatt", symbol: "kW", factor: 1e3 },
      { id: "hp", label: "Caballo de vapor", symbol: "CV", factor: 735.49875 },
    ],
  },
  {
    id: "pressure",
    label: "Presión",
    base: "Pa",
    units: [
      { id: "Pa", label: "Pascal", symbol: "Pa", factor: 1 },
      { id: "kPa", label: "Kilopascal", symbol: "kPa", factor: 1e3 },
      { id: "bar", label: "Bar", symbol: "bar", factor: 1e5 },
      { id: "atm", label: "Atmósfera", symbol: "atm", factor: 101325 },
      { id: "mmHg", label: "mmHg", symbol: "mmHg", factor: 133.322387415 },
    ],
  },
  {
    id: "temperature",
    label: "Temperatura",
    base: "K",
    // Temperatura NO usa factor lineal solo. Se maneja con funciones.
    units: [
      { id: "K", label: "Kelvin", symbol: "K" },
      { id: "C", label: "Celsius", symbol: "°C" },
      { id: "F", label: "Fahrenheit", symbol: "°F" },
    ],
    isAffine: true,
  },
];

export const SI_PREFIXES = [
  // Normalizamos a id "none" para que el UI sea consistente
  { id: "none", label: "—", symbol: "", factor: 1 },

  { id: "n", label: "nano", symbol: "n", factor: 1e-9 },
  { id: "µ", label: "micro", symbol: "µ", factor: 1e-6 },
  { id: "m", label: "mili", symbol: "m", factor: 1e-3 },
  { id: "c", label: "centi", symbol: "c", factor: 1e-2 },

  { id: "k", label: "kilo", symbol: "k", factor: 1e3 },
  { id: "M", label: "mega", symbol: "M", factor: 1e6 },
  { id: "G", label: "giga", symbol: "G", factor: 1e9 },
];

// helpers de temperatura
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

/**
 * Busca un prefijo SI por id.
 * Acepta "none", "" o undefined como "sin prefijo".
 */
export function findPrefix(prefixId) {
  const id = prefixId == null || prefixId === "" ? "none" : String(prefixId);
  return SI_PREFIXES.find((p) => p.id === id) || SI_PREFIXES[0];
}
