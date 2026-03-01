export function defaultParams() {
  return {
    F: 10,     // N (módulo de la interacción)
    mA: 2,     // kg
    mB: 5,     // kg
    tMax: 6,   // s
    n: 240,
    tObs: 2,
  };
}

export function makeSeries(params = {}) {
  const F = Number(params.F ?? 0);
  const mA = Number(params.mA ?? 1);
  const mB = Number(params.mB ?? 1);

  const tMax = Number(params.tMax ?? 6);
  const n = Math.max(20, Math.min(800, Number(params.n ?? 240)));

  const safeMA = mA === 0 ? 1e-9 : mA;
  const safeMB = mB === 0 ? 1e-9 : mB;

  // Fuerzas del par
  const FAB = F;     // A sobre B (tomamos +)
  const FBA = -F;    // B sobre A

  // Aceleraciones por 2ª ley (solo para visualizar consecuencia)
  const aA = FBA / safeMA; // en A actúa FBA
  const aB = FAB / safeMB; // en B actúa FAB

  const data = [];
  for (let i = 0; i <= n; i++) {
    const t = (tMax * i) / n;
    data.push({
      t,
      FAB,
      FBA,
      aA,
      aB,
    });
  }
  return data;
}
