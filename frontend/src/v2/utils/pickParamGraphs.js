export function pickParam(params, keys, fallback) {
  for (const k of keys) {
    const v = params?.[k];
    if (v !== undefined && v !== null && v !== "") {
      const n =
        typeof v === "number"
          ? v
          : Number(String(v).replace(",", "."));
      if (Number.isFinite(n)) return n;
    }
  }
  return fallback;
}

export default pickParam;
