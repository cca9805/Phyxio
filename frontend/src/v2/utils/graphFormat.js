export function fmt(value, decimals = 4) {
  const n = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(n)) return "";
  // devuelve string para que el Tooltip muestre exactamente esos decimales
  return n.toFixed(decimals);
}
