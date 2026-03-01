// A) Legacy (solo lectura) desde V1
const legacyDefs = import.meta.glob("/src/data/**/definitions.js");

// B) V2 calculadoras (cuando existan)
const v2Defs = import.meta.glob("/src/data_v2/**/calculadoras.js");

function legacyPath(fullPath) {
  // fullPath: "/mecanica/cinematica/mru"
  return `/src/data${fullPath}/definitions.js`;
}

function v2Path(kind, fullPath) {
  const root = kind === "moderna"
    ? "/src/data_v2/contenido/fisica-moderna"
    : "/src/data_v2/contenido/fisica-clasica";
  return `${root}${fullPath}/calculadoras.js`;
}

export async function getCalculatorsV2(kind, fullPath, { preferV2 = true } = {}) {
  // 1) Si existen calculadoras V2, úsala
  if (preferV2) {
    const p2 = v2Path(kind, fullPath);
    const importer2 = v2Defs[p2];
    if (importer2) {
      const mod2 = await importer2();
      return mod2.calculadoras || mod2.definitions || [];
    }
  }

  // 2) Si no, cae a legacy
  const p1 = legacyPath(fullPath);
  const importer1 = legacyDefs[p1];
  if (importer1) {
    const mod1 = await importer1();
    return mod1.definitions || [];
  }

  return [];
}
