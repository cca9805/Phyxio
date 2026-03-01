export function indexByPath(node, out = new Map()) {
  if (!node) return out;

  if (node.ruta_relativa) out.set(node.ruta_relativa, node);

  const children = Array.isArray(node.children) ? node.children : [];
  for (const ch of children) indexByPath(ch, out);

  return out;
}
