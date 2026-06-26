const ENGLISH = "en";
const EMPTY_INDEX = { entries: [], stats: { entries: 0, leafs: 0 } };

let searchIndexPromise = null;

async function loadSearchIndex() {
  if (!searchIndexPromise) {
    searchIndexPromise = import("./phyxioSearchIndex.generated.json")
      .then((module) => module.default || EMPTY_INDEX)
      .catch((error) => {
        if (import.meta.env.DEV) {
          // eslint-disable-next-line no-console
          console.error("Unable to load Phyxio search index:", error);
        }
        return EMPTY_INDEX;
      });
  }
  return searchIndexPromise;
}

function normalizeLanguage(lang = "es") {
  return String(lang || "").trim().toLowerCase() === ENGLISH ? ENGLISH : "es";
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}\\/_+.\-\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(value) {
  return normalizeText(value)
    .split(" ")
    .map((token) => token.trim())
    .filter((token) => token.length >= 2);
}

function localTitle(entry, lang = "es") {
  const language = normalizeLanguage(lang);
  return entry?.title?.[language] || entry?.title?.es || entry?.title?.en || entry?.id || "";
}

function localDescription(entry, lang = "es") {
  const language = normalizeLanguage(lang);
  return entry?.description?.[language] || entry?.description?.es || entry?.description?.en || "";
}

function localTags(entry, lang = "es") {
  const language = normalizeLanguage(lang);
  return Array.isArray(entry?.tags?.[language]) ? entry.tags[language] : [];
}

function localFormulaTitle(formula, lang = "es") {
  const language = normalizeLanguage(lang);
  return formula?.title?.[language] || formula?.title?.es || formula?.title?.en || formula?.id || "";
}

function localMagnitudeTitle(magnitude, lang = "es") {
  const language = normalizeLanguage(lang);
  return magnitude?.title?.[language] || magnitude?.title?.es || magnitude?.title?.en || magnitude?.id || "";
}

function scoreEntry(entry, query, lang = "es") {
  const normalizedQuery = normalizeText(query);
  if (!normalizedQuery) return 0;

  const tokens = tokenize(query);
  const title = normalizeText(localTitle(entry, lang));
  const route = normalizeText(entry.route);
  const tags = normalizeText(localTags(entry, lang).join(" "));
  const formulaText = normalizeText(
    (entry.formulas || [])
      .flatMap((formula) => [formula.id, formula.title?.[lang], formula.equation, formula.latex])
      .join(" ")
  );
  const magnitudeText = normalizeText(
    (entry.magnitudes || [])
      .flatMap((magnitude) => [magnitude.id, magnitude.symbol, magnitude.title?.[lang]])
      .join(" ")
  );
  const searchText = normalizeText(entry.searchText?.[lang] || entry.searchText?.es || "");

  let score = 0;
  if (title === normalizedQuery) score += 120;
  if (title.includes(normalizedQuery)) score += 80;
  if (route.includes(normalizedQuery)) score += 60;
  if (tags.includes(normalizedQuery)) score += 55;
  if (formulaText.includes(normalizedQuery)) score += 50;
  if (magnitudeText.includes(normalizedQuery)) score += 35;
  if (searchText.includes(normalizedQuery)) score += 25;

  for (const token of tokens) {
    if (title.includes(token)) score += 14;
    if (tags.includes(token)) score += 10;
    if (formulaText.includes(token)) score += 9;
    if (magnitudeText.includes(token)) score += 7;
    if (searchText.includes(token)) score += 3;
  }

  if (entry.type === "leaf") score += 8;
  return score;
}

function buildMatchReasons(entry, query, lang = "es") {
  const normalizedQuery = normalizeText(query);
  if (!normalizedQuery) return [];

  const reasons = [];
  if (normalizeText(localTitle(entry, lang)).includes(normalizedQuery)) reasons.push("title");
  if (normalizeText(localTags(entry, lang).join(" ")).includes(normalizedQuery)) reasons.push("tags");
  if ((entry.formulas || []).some((formula) => normalizeText([formula.id, formula.title?.[lang], formula.equation, formula.latex].join(" ")).includes(normalizedQuery))) {
    reasons.push("formula");
  }
  if ((entry.magnitudes || []).some((magnitude) => normalizeText([magnitude.id, magnitude.symbol, magnitude.title?.[lang]].join(" ")).includes(normalizedQuery))) {
    reasons.push("magnitude");
  }
  if (normalizeText(entry.route).includes(normalizedQuery)) reasons.push("route");
  return reasons.length ? reasons : ["content"];
}

function resultFromEntry(entry, score = 0, query = "", lang = "es") {
  return {
    id: entry.id,
    type: entry.type,
    route: entry.route,
    url: entry.route ? `/v2/${entry.route}` : "/v2",
    title: localTitle(entry, lang),
    description: localDescription(entry, lang),
    icon: entry.icon || "",
    tags: localTags(entry, lang),
    formulas: entry.formulas || [],
    magnitudes: entry.magnitudes || [],
    graphTypes: entry.graphTypes || [],
    ancestors: entry.ancestors || [],
    prerequisites: entry.prerequisites || [],
    score,
    matchReasons: buildMatchReasons(entry, query, lang),
  };
}

export async function getPhyxioSearchEntries() {
  const searchIndex = await loadSearchIndex();
  return Array.isArray(searchIndex.entries) ? searchIndex.entries : [];
}

export async function getPhyxioSearchStats() {
  const searchIndex = await loadSearchIndex();
  return searchIndex.stats || { entries: 0, leafs: 0 };
}

export async function findPhyxioEntryByRoute(route) {
  const clean = String(route || "").replace(/^\/?v2\/?/, "").replace(/^\/+|\/+$/g, "");
  const entries = await getPhyxioSearchEntries();
  return entries.find((entry) => entry.route === clean) || null;
}

export async function searchPhyxioContent(query, options = {}) {
  const lang = normalizeLanguage(options.lang || options.language || "es");
  const limit = Number(options.limit || 10);
  const type = options.type || null;
  const requiredTags = Array.isArray(options.tags) ? options.tags.map(normalizeText).filter(Boolean) : [];
  const entries = await getPhyxioSearchEntries();

  return entries
    .filter((entry) => !type || entry.type === type)
    .filter((entry) => {
      if (!requiredTags.length) return true;
      const tags = localTags(entry, lang).map(normalizeText);
      return requiredTags.every((tag) => tags.some((candidate) => candidate.includes(tag)));
    })
    .map((entry) => ({ entry, score: scoreEntry(entry, query, lang) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || (a.entry.order || 0) - (b.entry.order || 0))
    .slice(0, limit)
    .map((item) => resultFromEntry(item.entry, item.score, query, lang));
}

export async function searchPhyxioFormulas(query, options = {}) {
  const lang = normalizeLanguage(options.lang || options.language || "es");
  const limit = Number(options.limit || 10);
  const normalizedQuery = normalizeText(query);
  if (!normalizedQuery) return [];

  const entries = await getPhyxioSearchEntries();
  return entries
    .filter((entry) => entry.type === "leaf" && Array.isArray(entry.formulas))
    .flatMap((entry) =>
      entry.formulas.map((formula) => {
        const formulaText = normalizeText([
          formula.id,
          localFormulaTitle(formula, lang),
          formula.equation,
          formula.latex,
          ...(formula.variables || []),
          ...(formula.tags || []),
          localTitle(entry, lang),
          entry.route,
        ].join(" "));

        let score = formulaText.includes(normalizedQuery) ? 50 : 0;
        if (normalizeText(formula.id) === normalizedQuery) score += 80;
        if (normalizeText(localFormulaTitle(formula, lang)).includes(normalizedQuery)) score += 45;
        if (normalizeText(formula.equation || formula.latex).includes(normalizedQuery)) score += 35;

        for (const token of tokenize(query)) {
          if (formulaText.includes(token)) score += 8;
        }

        return {
          ...resultFromEntry(entry, score, query, lang),
          resultType: "formula",
          formula: {
            ...formula,
            title: localFormulaTitle(formula, lang),
          },
        };
      })
    )
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, limit);
}

export async function searchPhyxioMagnitudes(query, options = {}) {
  const lang = normalizeLanguage(options.lang || options.language || "es");
  const limit = Number(options.limit || 10);
  const normalizedQuery = normalizeText(query);
  if (!normalizedQuery) return [];

  const entries = await getPhyxioSearchEntries();
  return entries
    .filter((entry) => entry.type === "leaf" && Array.isArray(entry.magnitudes))
    .flatMap((entry) =>
      entry.magnitudes.map((magnitude) => {
        const magnitudeText = normalizeText([
          magnitude.id,
          magnitude.symbol,
          localMagnitudeTitle(magnitude, lang),
          magnitude.unit,
          magnitude.dimension,
          localTitle(entry, lang),
          entry.route,
        ].join(" "));

        let score = magnitudeText.includes(normalizedQuery) ? 45 : 0;
        if (normalizeText(magnitude.id) === normalizedQuery) score += 80;
        if (normalizeText(magnitude.symbol) === normalizedQuery) score += 70;
        if (normalizeText(localMagnitudeTitle(magnitude, lang)).includes(normalizedQuery)) score += 40;

        for (const token of tokenize(query)) {
          if (magnitudeText.includes(token)) score += 7;
        }

        return {
          ...resultFromEntry(entry, score, query, lang),
          resultType: "magnitude",
          magnitude: {
            ...magnitude,
            title: localMagnitudeTitle(magnitude, lang),
          },
        };
      })
    )
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, limit);
}

export async function searchPhyxioTags(query, options = {}) {
  const lang = normalizeLanguage(options.lang || options.language || "es");
  const limit = Number(options.limit || 10);
  const normalizedQuery = normalizeText(query);
  if (!normalizedQuery) return [];

  const entries = await getPhyxioSearchEntries();
  return entries
    .filter((entry) => entry.type === "leaf")
    .flatMap((entry) =>
      localTags(entry, lang).map((tag) => {
        const tagText = normalizeText(tag);
        const score = tagText === normalizedQuery
          ? 90
          : tagText.includes(normalizedQuery)
            ? 55
            : 0;

        return {
          ...resultFromEntry(entry, score, query, lang),
          resultType: "tag",
          tag,
        };
      })
    )
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, limit);
}

export async function searchPhyxioLocal(query, options = {}) {
  const lang = normalizeLanguage(options.lang || options.language || "es");
  const limit = Number(options.limit || 10);
  const perGroupLimit = Math.max(limit, 6);
  const [topics, formulas, magnitudes, tags] = await Promise.all([
    searchPhyxioContent(query, { ...options, lang, type: options.type || "leaf", limit }),
    searchPhyxioFormulas(query, { ...options, lang, limit: perGroupLimit }),
    searchPhyxioMagnitudes(query, { ...options, lang, limit: perGroupLimit }),
    searchPhyxioTags(query, { ...options, lang, limit: perGroupLimit }),
  ]);

  const grouped = { topics, formulas, magnitudes, tags };
  const merged = [...topics, ...formulas, ...magnitudes, ...tags]
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return { grouped, results: merged };
}

export async function getContextForRoute(route, options = {}) {
  const lang = normalizeLanguage(options.lang || options.language || "es");
  const entry = await findPhyxioEntryByRoute(route);
  if (!entry) {
    return {
      current: null,
      parent: null,
      siblings: [],
      prerequisites: [],
      relatedByTags: [],
      relatedByFormulas: [],
    };
  }

  const entries = await getPhyxioSearchEntries();
  const parentRoute = entry.route.split("/").slice(0, -1).join("/");
  const parent = entries.find((item) => item.route === parentRoute) || null;
  const siblings = entries
    .filter((item) => item.type === "leaf" && item.route !== entry.route && item.route.split("/").slice(0, -1).join("/") === parentRoute)
    .slice(0, 8)
    .map((item) => resultFromEntry(item, 0, "", lang));

  const prerequisites = (entry.prerequisites || [])
    .map((prereqRoute) => entries.find((item) => item.route === prereqRoute))
    .filter(Boolean)
    .map((item) => resultFromEntry(item, 0, "", lang));

  const tags = localTags(entry, lang).map(normalizeText).filter(Boolean);
  const formulaIds = new Set((entry.formulas || []).map((formula) => formula.id).filter(Boolean));

  const relatedByTags = entries
    .filter((item) => item.type === "leaf" && item.route !== entry.route)
    .map((item) => {
      const overlap = localTags(item, lang).filter((tag) => tags.includes(normalizeText(tag)));
      return { item, overlap };
    })
    .filter(({ overlap }) => overlap.length > 0)
    .sort((a, b) => b.overlap.length - a.overlap.length)
    .slice(0, 6)
    .map(({ item, overlap }) => ({ ...resultFromEntry(item, overlap.length, overlap.join(" "), lang), matchedTags: overlap }));

  const relatedByFormulas = entries
    .filter((item) => item.type === "leaf" && item.route !== entry.route)
    .map((item) => {
      const overlap = (item.formulas || []).map((formula) => formula.id).filter((id) => formulaIds.has(id));
      return { item, overlap };
    })
    .filter(({ overlap }) => overlap.length > 0)
    .slice(0, 6)
    .map(({ item, overlap }) => ({ ...resultFromEntry(item, overlap.length, overlap.join(" "), lang), matchedFormulas: overlap }));

  return {
    current: resultFromEntry(entry, 0, "", lang),
    parent: parent ? resultFromEntry(parent, 0, "", lang) : null,
    siblings,
    prerequisites,
    relatedByTags,
    relatedByFormulas,
  };
}
