// frontend/src/v2/agent/graphMetadataRegistry.js

export function getGraphMetadataForLeaf({ leafId, graphType, graphId } = {}) {
  if (!leafId || !graphType) return null;

  // Registro central de metadatos específicos por leaf.
  // De momento lo dejamos vacío para no romper nada.
  // En el siguiente paso añadiremos aquí segunda-ley-fuerza-masa.
  const GRAPH_METADATA_BY_LEAF = {};

  const byLeaf = GRAPH_METADATA_BY_LEAF[leafId];
  if (!byLeaf) return null;

  if (graphId && byLeaf[graphId]) {
    return byLeaf[graphId];
  }

  return byLeaf[graphType] || null;
}