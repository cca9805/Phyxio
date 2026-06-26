export function normalizeUiLanguage(lang) {
  return String(lang || "").trim().toLowerCase() === "en" ? "en" : "es";
}

export function getUiLanguage(langOverride) {
  if (langOverride) return normalizeUiLanguage(langOverride);

  try {
    const saved = localStorage.getItem("ui-language");
    if (saved) return normalizeUiLanguage(saved);
  } catch {
    // noop
  }

  try {
    const htmlLang = document?.documentElement?.lang;
    if (htmlLang) return normalizeUiLanguage(htmlLang);
  } catch {
    // noop
  }

  try {
    const navLang = navigator?.language;
    if (navLang) return normalizeUiLanguage(navLang);
  } catch {
    // noop
  }

  return "es";
}

export function setUiLanguage(lang) {
  const next = normalizeUiLanguage(lang);

  try {
    localStorage.setItem("ui-language", next);
  } catch {
    // noop
  }

  try {
    document?.documentElement?.setAttribute("lang", next);
  } catch {
    // noop
  }

  return next;
}

export function tr(lang, esText, enText) {
  return normalizeUiLanguage(lang) === "en" ? enText : esText;
}
