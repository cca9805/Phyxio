export function v2Path(kind, subpath) {
  const clean = String(subpath || "").replace(/^\//, "");
  return `/v2/${kind}/${clean}`;
}
