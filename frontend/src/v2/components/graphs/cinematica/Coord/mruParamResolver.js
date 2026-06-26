const toNumOrNull = (v) => {
  if (v === null || v === undefined || v === "") return null;
  const n = typeof v === "number" ? v : Number(String(v).replace(",", "."));
  return Number.isFinite(n) ? n : null;
};

const pick = (obj, keys) => {
  for (const k of keys) {
    const n = toNumOrNull(obj?.[k]);
    if (n !== null) return n;
  }
  return null;
};

const has = (v) => v !== null && v !== undefined && Number.isFinite(v);

export function resolveMruParams(raw = {}) {
  let x0 = pick(raw, ["x0", "x_0"]);
  let x = pick(raw, ["x"]);
  let v = pick(raw, ["v", "velocidad"]);
  let t = pick(raw, ["t", "tiempo"]);
  let dx = pick(raw, ["dx", "delta_x"]);
  let dt = pick(raw, ["dt", "delta_t"]);

  // Inference set 1: velocity
  if (!has(v)) {
    if (has(dx) && has(dt) && Math.abs(dt) > 1e-9) v = dx / dt;
    else if (has(x) && has(x0) && has(t) && Math.abs(t) > 1e-9) v = (x - x0) / t;
  }

  // Inference set 2: initial position
  if (!has(x0)) {
    if (has(x) && has(v) && has(t)) x0 = x - v * t;
    else if (has(x) && has(dx)) x0 = x - dx;
  }

  // Inference set 3: position
  if (!has(x)) {
    if (has(x0) && has(v) && has(t)) x = x0 + v * t;
    else if (has(x0) && has(dx)) x = x0 + dx;
  }

  // Inference set 4: displacement
  if (!has(dx)) {
    if (has(x) && has(x0)) dx = x - x0;
    else if (has(v) && has(dt)) dx = v * dt;
  }

  // Inference set 5: times
  if (!has(dt)) {
    if (has(t)) dt = t;
    else if (has(dx) && has(v) && Math.abs(v) > 1e-9) dt = dx / v;
  }
  if (!has(t)) t = has(dt) ? dt : null;

  const tObs = pick(raw, ["tObs"]) ?? t ?? 4;
  const tMaxRaw = pick(raw, ["tMax", "tmax"]);
  const tMax = has(tMaxRaw) ? tMaxRaw : Math.max(8, Math.abs(tObs) * 1.6);

  return {
    x0: has(x0) ? x0 : 0,
    x: has(x) ? x : null,
    v: has(v) ? v : 2,
    t: has(t) ? t : null,
    dx: has(dx) ? dx : null,
    dt: has(dt) ? dt : null,
    tObs,
    tMax,
  };
}

