import {
  buildActiveGraphContextForAgent,
  buildFallbackGraphContextFromType,
  findGraphContextCandidate,
  getGraphTypeFromGraph,
  getGraphTypeFromLeafContext,
  getGraphTypeFromSearch,
  graphContextMatchesSelection,
  isGraphTabActive,
  mergeGraphContextWithContract,
  mergeGraphListsByPriority,
  normalizeAgentGraphType,
} from "./agentGraphContext.helpers";
import { PHYXIO_AGENT_MODES } from "./phyxioAgent.contract";
import { getContextForRoute, searchPhyxioLocal } from "../search/phyxioSearch";

export async function buildAgentAskPayload({
  leafId,
  locale,
  level,
  mode,
  question,
  selectedFormulaId,
  selectedMagnitudeId,
  selectedGraphType,
  location,
  leafContext,
  normalizedLeafContext,
  availableGraphs,
  providerActiveGraphContext,
  lastActiveGraphContext,
}) {
  const graphsFromContext =
    leafContext?.graphsDoc ??
    leafContext?.graphs ??
    leafContext?.graficos ??
    leafContext?.meta?.graphs ??
    leafContext?.meta?.graficos ??
    normalizedLeafContext?.graphsDoc ??
    normalizedLeafContext?.graphs ??
    normalizedLeafContext?.graficos ??
    [];

  const safeGraphs = mergeGraphListsByPriority(
    availableGraphs,
    Array.isArray(graphsFromContext) ? graphsFromContext : []
  );

  const contextForAgent = {
    ...normalizedLeafContext,
    graphs: safeGraphs,
    graficos: safeGraphs,
    graphsDoc: safeGraphs,
    hasGraphs: safeGraphs.length > 0,
    graphsCount: safeGraphs.length,
  };

  const selectedGraphTypeFromContext =
    getGraphTypeFromLeafContext(normalizedLeafContext) ||
    getGraphTypeFromLeafContext(leafContext);

  const selectedGraphTypeFromLocation = getGraphTypeFromSearch(location.search);

  const candidateGraphContext =
    providerActiveGraphContext ||
    lastActiveGraphContext ||
    normalizedLeafContext?.activeGraphContext ||
    normalizedLeafContext?.active_graph_context ||
    leafContext?.activeGraphContext ||
    leafContext?.active_graph_context ||
    null;

  const manualSelectedGraphType = normalizeAgentGraphType(selectedGraphType);
  const activeGraphTypeFromProvider = getGraphTypeFromGraph(candidateGraphContext);

  const shouldRespectVisualGraph =
    mode === PHYXIO_AGENT_MODES.AUTO ||
    mode === PHYXIO_AGENT_MODES.EXPLAIN ||
    mode === PHYXIO_AGENT_MODES.GRAPH ||
    isGraphTabActive(location, normalizedLeafContext);

  const resolvedGraphTypeForAgent =
    manualSelectedGraphType ||
    activeGraphTypeFromProvider ||
    selectedGraphTypeFromContext ||
    selectedGraphTypeFromLocation ||
    (shouldRespectVisualGraph &&
    isGraphTabActive(location, normalizedLeafContext) &&
    availableGraphs.length === 1
      ? getGraphTypeFromGraph(availableGraphs[0])
      : null);

  const realActiveGraphContext =
    candidateGraphContext &&
    (mode !== PHYXIO_AGENT_MODES.GRAPH ||
      !manualSelectedGraphType ||
      graphContextMatchesSelection(candidateGraphContext, manualSelectedGraphType))
      ? candidateGraphContext
      : null;

  const graphContextFromAvailableGraphs = findGraphContextCandidate(
    availableGraphs,
    resolvedGraphTypeForAgent
  );

  const rawActiveGraphContextForAgent =
    mergeGraphContextWithContract(
      realActiveGraphContext,
      graphContextFromAvailableGraphs
    ) || buildFallbackGraphContextFromType(resolvedGraphTypeForAgent, leafId);

  const activeGraphContextForAgent = buildActiveGraphContextForAgent(
    rawActiveGraphContextForAgent,
    resolvedGraphTypeForAgent,
    leafId
  );

  const selectedGraphTypeForRequest =
    manualSelectedGraphType ||
    activeGraphContextForAgent?.type ||
    activeGraphContextForAgent?.graphType ||
    resolvedGraphTypeForAgent ||
    null;
  const cleanRoute = String(location?.pathname || "")
    .replace(/^\/v2\/?/, "")
    .replace(/^\/+|\/+$/g, "");
  const [localSearch, routeContext] = await Promise.all([
    searchPhyxioLocal(question, {
    lang: locale,
    limit: 5,
    }),
    getContextForRoute(cleanRoute, { lang: locale }),
  ]);

  const searchContext = {
    route: cleanRoute,
    ...routeContext,
    question_matches: localSearch.results,
    question_match_groups: localSearch.grouped,
  };

  return {
    request: {
      mode,
      leaf_id: leafId,
      locale,
      level,
      question: question.trim(),
      selected_formula_id:
        mode === PHYXIO_AGENT_MODES.FORMULA ? selectedFormulaId : null,
      selected_magnitude_id:
        mode === PHYXIO_AGENT_MODES.MAGNITUDE ? selectedMagnitudeId : null,
      selected_graph_type: selectedGraphTypeForRequest,
      active_graph_context: activeGraphContextForAgent,
    },
    leafContext: {
      ...contextForAgent,
      selected_graph_type: selectedGraphTypeForRequest,
      active_graph_context: activeGraphContextForAgent,
      search_context: searchContext,
    },
  };
}
