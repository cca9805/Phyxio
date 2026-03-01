import { toNum } from "./dclMath";

const VERSION = 1;

function uid(prefix = "F") {
  return `${prefix}${Math.random().toString(16).slice(2, 8)}`;
}

export function defaultSceneBasic() {
  return {
    version: VERSION,
    mode: "basic",
    forces: [
      { id: uid("F"), label: "F1", F: "10", thetaDeg: "0", active: true },
      { id: uid("F"), label: "F2", F: "10", thetaDeg: "180", active: true },
    ],
  };
}

export function defaultSceneAdvanced() {
  return {
    version: VERSION,
    mode: "advanced",
    body: { w: 2, h: 1 },
    forces: [
      { id: uid("F"), label: "F1", F: "20", thetaDeg: "45", x: "0.5", y: "0.0", active: true },
      { id: uid("F"), label: "F2", F: "15", thetaDeg: "-90", x: "-0.5", y: "0.0", active: true },
    ],
  };
}

export function exportScene(scene) {
  const s = scene ?? {};
  const payload = { ...s, version: VERSION };
  return JSON.stringify(payload, null, 2);
}

export function importScene(text) {
  const raw = JSON.parse(text);

  // Migraciones simples
  const v = Number(raw?.version ?? 0);
  let scene = raw;
  if (v !== VERSION) {
    scene = migrateScene(raw);
  }

  // Validación/normalización mínima
  const mode = scene?.mode === "advanced" ? "advanced" : "basic";
  const forces = Array.isArray(scene?.forces) ? scene.forces : [];

  const normForces = forces.map((f, idx) => {
    const id = String(f?.id ?? uid("F"));
    const label = String(f?.label ?? `F${idx + 1}`);
    const active = Boolean(f?.active ?? true);

    const base = {
      id,
      label,
      active,
      F: f?.F ?? "",
      thetaDeg: f?.thetaDeg ?? "0",
    };

    if (mode === "advanced") {
      return {
        ...base,
        x: f?.x ?? "0",
        y: f?.y ?? "0",
      };
    }
    return base;
  });

  const out = {
    version: VERSION,
    mode,
    forces: normForces,
  };

  if (mode === "advanced") {
    out.body = scene?.body ?? { w: 2, h: 1 };
  }

  return out;
}

function migrateScene(scene) {
  // Por ahora: si viene sin version, asumimos v1
  return { ...scene, version: VERSION };
}

export function addForce(scene) {
  const s = scene ?? defaultSceneBasic();
  const forces = Array.isArray(s.forces) ? s.forces.slice() : [];
  const n = forces.length + 1;

  const f =
    s.mode === "advanced"
      ? { id: uid("F"), label: `F${n}`, F: "", thetaDeg: "0", x: "0", y: "0", active: true }
      : { id: uid("F"), label: `F${n}`, F: "", thetaDeg: "0", active: true };

  forces.push(f);
  return { ...s, forces };
}

export function removeForce(scene, id) {
  const s = scene ?? defaultSceneBasic();
  const forces = (Array.isArray(s.forces) ? s.forces : []).filter((f) => f?.id !== id);
  return { ...s, forces };
}

export function renameForcesSequential(scene) {
  const s = scene ?? defaultSceneBasic();
  const forces = (Array.isArray(s.forces) ? s.forces : []).map((f, i) => ({
    ...f,
    label: `F${i + 1}`,
  }));
  return { ...s, forces };
}

/**
 * Si algún tema quiere "inyectar" una resultante objetivo (Rx/Ry) como referencia visual,
 * aquí tienes un helper (no toca las fuerzas).
 */
export function setReference(scene, ref) {
  const s = scene ?? defaultSceneBasic();
  const Rx = toNum(ref?.Rx, NaN);
  const Ry = toNum(ref?.Ry, NaN);
  if (!Number.isFinite(Rx) || !Number.isFinite(Ry)) return s;
  return { ...s, reference: { Rx, Ry } };
}
