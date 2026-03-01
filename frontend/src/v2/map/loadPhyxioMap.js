import yaml from "js-yaml";

// Vite puede importar texto con ?raw
import mapYaml from "./phyxio-map.yaml?raw";

export function loadPhyxioMap() {
  const data = yaml.load(mapYaml);
  if (!data?.root?.children) {
    throw new Error("phyxio-map.yaml inválido: falta root.children");
  }
  return data;
}
