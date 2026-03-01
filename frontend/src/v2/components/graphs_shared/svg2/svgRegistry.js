/**
 * Registry/loader de SVG configs (Vite).
 *
 * Estructura esperada:
 *   /src/data_v2/<ruta_relativa_del_leaf>/graphs/svg.config.(js|jsx|ts|tsx)
 *
 * donde ruta_relativa coincide con meta.yaml -> ruta_relativa
 */
const svgModules = import.meta.glob(
  "/src/data_v2/**/graphs/svg.config.{js,jsx,ts,tsx}"
);

function keyFromLeafRelPath(leafRelPath) {
  // Probamos extensiones en orden preferido
  const candidates = [
    `/src/data_v2/${leafRelPath}/graphs/svg.config.jsx`,
    `/src/data_v2/${leafRelPath}/graphs/svg.config.js`,
    `/src/data_v2/${leafRelPath}/graphs/svg.config.tsx`,
    `/src/data_v2/${leafRelPath}/graphs/svg.config.ts`,
  ];

  for (const k of candidates) {
    if (svgModules[k]) return k;
  }
  return null;
}

export async function loadSvgConfigByLeafRelPath(leafRelPath) {
  const key = keyFromLeafRelPath(leafRelPath);

  if (!key) {
    // Mensaje claro para depurar
    throw new Error(
      `No existe graphs/svg.config.(js|jsx|ts|tsx) para: ${leafRelPath}`
    );
  }

  const loader = svgModules[key];
  const mod = await loader();
  return mod.default ?? mod;
}
