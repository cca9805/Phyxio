import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPhyxioSearchStats, searchPhyxioLocal } from "./phyxioSearch";
import { tr } from "../utils/uiLanguage";

function reasonLabel(reason, lang = "es") {
  const labels = {
    title: tr(lang, "titulo", "title"),
    tags: "tags",
    formula: tr(lang, "formula", "formula"),
    magnitude: tr(lang, "magnitud", "quantity"),
    route: tr(lang, "ruta", "route"),
    content: tr(lang, "contenido", "content"),
  };
  return labels[reason] || reason;
}

export default function PhyxioGlobalSearch({ lang = "es", onNavigate = null }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [stats, setStats] = useState({ entries: 0, leafs: 0 });
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    getPhyxioSearchStats().then((nextStats) => {
      if (!cancelled) setStats(nextStats);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    const cleanQuery = query.trim();

    if (cleanQuery.length < 2) {
      setResults([]);
      setIsSearching(false);
      return () => {
        cancelled = true;
      };
    }

    setIsSearching(true);
    searchPhyxioLocal(cleanQuery, { lang, limit: 8 })
      .then((searchResult) => {
        if (!cancelled) setResults(searchResult.results);
      })
      .finally(() => {
        if (!cancelled) setIsSearching(false);
      });

    return () => {
      cancelled = true;
    };
  }, [query, lang]);

  useEffect(() => {
    function handlePointerDown(event) {
      if (!rootRef.current || rootRef.current.contains(event.target)) return;
      setIsOpen(false);
    }

    window.addEventListener("pointerdown", handlePointerDown);
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  function goTo(result) {
    if (!result?.url) return;
    setIsOpen(false);
    setQuery("");
    if (onNavigate) onNavigate();
    navigate(result.url);
  }

  function resultMeta(result) {
    if (result.resultType === "formula" && result.formula) {
      return `${reasonLabel("formula", lang)}: ${result.formula.title || result.formula.id}`;
    }
    if (result.resultType === "magnitude" && result.magnitude) {
      const symbol = result.magnitude.symbol ? ` (${result.magnitude.symbol})` : "";
      return `${reasonLabel("magnitude", lang)}: ${result.magnitude.title || result.magnitude.id}${symbol}`;
    }
    if (result.resultType === "tag" && result.tag) {
      return `${reasonLabel("tags", lang)}: ${result.tag}`;
    }
    return result.matchReasons.map((reason) => reasonLabel(reason, lang)).join(" / ");
  }

  return (
    <div className="phyxio-global-search" ref={rootRef}>
      <label className="phyxio-global-search__label" htmlFor="phyxio-global-search-input">
        {tr(lang, "Buscar en Phyxio", "Search Phyxio")}
      </label>

      <div className="phyxio-global-search__control">
        <i className="bi bi-search" aria-hidden="true"></i>
        <input
          id="phyxio-global-search-input"
          type="search"
          value={query}
          placeholder={tr(lang, "Tema, tag, formula...", "Topic, tag, formula...")}
          onChange={(event) => {
            setQuery(event.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />
      </div>

      {isOpen && (
        <div className="phyxio-global-search__panel">
          {query.trim().length < 2 ? (
            <div className="phyxio-global-search__empty">
              {tr(
                lang,
                `Busca entre ${stats.leafs || 0} leafs por tema, tag, formula o magnitud.`,
                `Search ${stats.leafs || 0} leaves by topic, tag, formula, or quantity.`
              )}
            </div>
          ) : isSearching ? (
            <div className="phyxio-global-search__empty">
              {tr(lang, "Buscando...", "Searching...")}
            </div>
          ) : results.length === 0 ? (
            <div className="phyxio-global-search__empty">
              {tr(lang, "Sin resultados locales.", "No local results.")}
            </div>
          ) : (
            <ul className="phyxio-global-search__results">
              {results.map((result) => (
                <li key={[
                  result.resultType || result.type,
                  result.route || result.id,
                  result.formula?.id,
                  result.magnitude?.id,
                  result.tag,
                ].filter(Boolean).join("-")}>
                  <button type="button" onClick={() => goTo(result)}>
                    <span className="phyxio-global-search__result-title">
                      {result.icon && <span>{result.icon}</span>}
                      {result.title}
                    </span>
                    {result.description && (
                      <span className="phyxio-global-search__result-description">
                        {result.description}
                      </span>
                    )}
                    <span className="phyxio-global-search__result-meta">
                      {resultMeta(result)}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
