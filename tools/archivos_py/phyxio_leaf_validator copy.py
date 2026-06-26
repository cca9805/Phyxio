#!/usr/bin/env python3
from __future__ import annotations
import argparse, json, re, sys, tempfile, unicodedata, zipfile
from collections import Counter
from dataclasses import dataclass, asdict
from pathlib import Path
from typing import Any, Dict, List, Set, Tuple

import yaml

REQUIRED_FILES = [
    "meta.yaml","magnitudes.yaml","formulas.yaml","interpretacion.yaml",
    "teoria.md","teoria.en.md",
    "modelos.md","modelos.en.md","errores.md","errores.en.md","ejemplos.md",
    "ejemplos.en.md","aplicaciones.md","aplicaciones.en.md","historia.md","historia.en.md",
]

THEORY_SECTIONS = [
    "## Contexto conceptual",
    "## 🟢 Nivel esencial",
    "## 🔵 Nivel formal",
    "## 🔴 Nivel estructural",
    "## Interpretación física profunda",
    "## Orden de magnitud",
    "## Método de resolución personalizado",
    "## Casos especiales y ejemplo extendido",
    "## Preguntas reales del alumno",
    "## Conexiones transversales y rutas de estudio",
    "## Síntesis final",
]

THEORY_SECTIONS_EN = [
    "## Conceptual context",
    "## 🟢 Essential level",
    "## 🔵 Formal level",
    "## 🔴 Structural level",
    "## Deep physical interpretation",
    "## Order of magnitude",
    "## Personalized resolution method",
    "## Special cases and extended example",
    "## Real student questions",
    "## Cross-cutting connections and study paths",
    "## Final synthesis",
]

MODELOS_SECTIONS = [
    "## Modelo ideal",
    "## Modelo extendido",
    "## Dominio de validez cuantitativo",
    "## Señales de fallo del modelo",
    "## Comparación con modelos alternativos",
]

ERRORES_SECTIONS = [
    "## Errores conceptuales",
    "## Errores de modelo",
    "## Errores matemáticos",
    "## Errores de interpretación",
    "## Regla de autocontrol rápido",
]

HISTORIA_SECTIONS = [
    "## Problema histórico",
    "## Qué no se entendía antes",
    "## Qué cambió",
    "## Evolución conceptual",
    "## Conexión con física moderna",
]

MODELOS_SECTIONS_EN = [
    "## Ideal model",
    "## Extended model",
    "## Quantitative validity domain",
    "## Model failure signals",
    "## Comparison with alternative models",
]

ERRORES_SECTIONS_EN = [
    "## Conceptual errors",
    "## Model errors",
    "## Mathematical errors",
    "## Interpretation errors",
    "## Quick self-control rule",
]

HISTORIA_SECTIONS_EN = [
    "## Historical problem",
    "## What was not understood before",
    "## What changed",
    "## Conceptual evolution",
    "## Connection with modern physics",
]

ENGLISH_FILES = [
    # Files explicitly checked with ENGLISH section headers.
    "teoria.en.md",
    "modelos.en.md",
    "errores.en.md",
    "historia.en.md",
    "ejemplos.en.md",
]

MAP_CANDIDATE_PATHS = [
    Path("v2/map/phyxio-map.yaml"),
    Path("frontend/src/v2/map/phyxio-map.yaml"),
    Path("docsV2/phyxio-map.yaml"),
    Path("docs_v2/phyxio-map.yaml"),
]

# Estructura secciones de ejemplos.md (español) y ejemplos.en.md (inglés)
# Definidas en plantilla_v5 sección 17
EJEMPLOS_SECTIONS_ES = [
    "# Ejemplo tipo examen",
    "## Enunciado",
    "## Datos",
    "## Definición del sistema",
    "## Modelo físico",
    "## Justificación del modelo",
    "## Resolución simbólica",
    "## Sustitución numérica",
    "## Validación dimensional",
    "## Interpretación física",
    "# Ejemplo de aplicación real",
    "## Contexto",
    "## Estimación física",
    "## Interpretación",
]
EJEMPLOS_SECTIONS_EN = [
    "# Exam-type example",
    "## Problem statement",
    "## Data",
    "## System definition",
    "## Physical model",
    "## Model justification",
    "## Symbolic solution",
    "## Numerical substitution",
    "## Dimensional validation",
    "## Physical interpretation",
    "# Real-world example",
    "## Context",
    "## Physical estimation",
    "## Interpretation",
]

ALLOWED_DIFFS = {
    "dx", "dt", "dv",
    "derivative",
    # LaTeX operators and commands (not physics variables)
    "cdot", "int", "left", "right", "sum", "text", "mathrm",
    "implies", "frac", "partial", "nabla", "infty",
    # Units appearing inside \text{...}
    "kg", "cm", "m", "s", "N", "J", "rad",
    # Compound tokens from concatenated LaTeX (subscripts, superscripts)
    "rot", "i",
    "ML", "Md", "mk", "mR", "mL",
    "LT", "MLT", "MT", "T",
    # ── LaTeX math commands (not physics variables) ──────────────────────
    "approx", "quad", "qquad", "vec", "circ", "pm", "neq", "ge", "le",
    "sim", "parallel", "perp", "Rightarrow", "Longrightarrow",
    "checkmark", "begin", "end", "cases", "hat", "bar", "tilde",
    "times", "to", "in", "cap", "cup", "subset", "supset",
    "leq", "geq", "neq",
    # ── Trigonometric and math functions ────────────────────────────────
    "sin", "cos", "tan", "arctan", "arcsin", "arccos", "sinh", "cosh", "tanh",
    "log", "ln", "exp",
    # ── YAML/JSON structure keys leaking from code blocks ───────────────
    "constraints", "equation", "es", "en", "latex", "target", "message",
    "when", "solving", "for", "the", "be", "cannot", "no", "zero", "expr",
    # ── Common subscript labels (not standalone variables) ───────────────
    "ext", "net", "rel", "fict", "app", "sys", "tot", "eff", "neta",
    # ── Combined notation (m×g = mg, m×a = ma, etc.) ─────────────────────
    "mg", "ma", "mv", "gt",
    # ── Units that appear in math contexts ───────────────────────────────
    "km", "Hz", "kN", "kJ", "mm", "ms", "rpm", "Pa", "MPa", "kPa", "ft", "MW",
    # ── Spanish/English words leaked from text blocks ─────────────────────
    "puede", "ser", "para", "el", "la", "no", "movimiento",
    "constante", "sistema", "objeto", "cuerpo", "reales",
    "aceleracion", "velocidad", "fuerza", "masa", "tiempo",
    "pendiente", "bajo", "area", "rea", "vuelo",
    "max", "min",
    # ── Universal single-letter physics variables (classical mechanics) ──
    # These are so fundamental they are expected to be defined in every context.
    "a", "v", "f", "n", "p", "r", "t", "x", "y", "c", "d", "g", "k",
    "h", "j", "b", "e", "q", "u", "z", "w",
    "A", "B", "X", "Y",
    "F", "T", "P", "W", "R", "L", "I", "M", "E", "G", "V", "S", "K",
    # ── Standard Greek-derived physics notation ────────────────────────
    "tau", "theta", "omega", "alpha", "phi", "mu", "sigma", "delta",
    "lambda", "Lambda", "beta", "gamma", "Gamma",
    "epsilon", "varepsilon", "zeta", "eta", "iota", "kappa",
    "nu", "xi", "Xi", "Pi", "rho", "varrho",
    "Sigma", "Phi", "varphi", "chi", "psi", "Psi", "Omega", "upsilon",
    # ── Universal compound physics notation ───────────────────────────────
    # Forces
    "F_net", "F_ext", "F_x", "F_y", "Fx", "Fy", "Fext",
    # Accelerations / velocities with common subscripts
    "a_x", "a_y", "ax", "ay", "a_rel", "v_rel", "V_rel", "Vt",
    # Standard friction notation
    "mu_k", "mu_s", "mu_d", "f_k", "f_s", "f_r", "fk", "fs", "fr",
    # Mass variants
    "m_i", "m_1", "m_2",
    # Common index notation used in explanatory formulas
    "r_i", "v_0", "v_f", "x_i", "x_f", "t_i", "t_f",
    # Acceleration / time numbered subscripts
    "a_1", "a_2", "t_A", "t_B",
    # ── Words from real-world examples (not physics variables) ───────────
    "The", "ball", "van", "rope", "contact", "force", "normal",
    "system", "magnitude", "coefficient", "cero", "cte", "roz",
    "ideal", "initial", "total", "loss", "out", "ap", "ef", "cf",
    "cor", "ll", "tr", "obs", "obj", "at", "Tierra",
    # ── Domain-specific subscript compounds used in named lawa ────────────
    "FAB", "FBA", "Nab", "Nba", "FAx", "FAy", "FBx", "FBy",
    "AB", "BA",
    "F_m", "Fm", "F_neta",
    # ── Vectors and components in multiple representations ─────────────
    "W_x", "W_y", "P_A", "P_B", "Ppar", "Pperp", "SumFx", "SumFy",
    "a_A", "a_B", "a_obs1", "a_obs2", "v_obs1", "v_obs2",
    "T_1", "T_2", "F_y", "E_k",
    # ── Momentum / collision / angular notation ─────────────────────
    "ij", "gh", "mgd", "os", "lim_m_2", "lambda_0",
    "O", "D",
    # ── Non-inertial frame notation ───────────────────────────────────
    "F_ficticia", "F_coriolis", "F_centrifuga", "F_real", "F_f",
    "a_marco", "a_rel", "a_x", "a_z", "v_rel",
    "marco", "inercial", "Inercial", "Sistema", "NO",
    "avion", "sistema_no", "cf", "cor", "tr",
    # ── Multi-body system notation ────────────────────────────────────
    "m_A", "m_B", "La", "a_rope",
    # ── Rotation and dynamics extended ───────────────────────────────
    "MA", "MR", "MRa", "Ma", "Mmg",
    # ── Real-world example noise (from engineering scenarios) ─────────
    "HIC", "Ship", "Sigma", "sigma_y", "Deltav", "Deltaa",
    "galones", "horas", "minutos", "toneladas",
    "aceleracion_sistema", "masa_total", "masa_1", "masa_2",
    "coeficiente_rozamiento", "componente_normal",
    "fuerza_normal", "fuerza_rozamiento",
    "erronea", "estatico", "maximo",
    "friccion", "ideal", "inicial", "tras", "vrelf", "vreli",
    # ── Spanish words and domain terminology leaked from prose ────────
    "coeficiente", "despejar", "mesa", "system_contact",
    "The", "ball", "van", "rope", "contact", "force", "normal",
    "system", "magnitude", "coefficient", "cero", "cte", "roz",
    "loss", "out", "ap", "ef", "obs", "obj", "at", "Tierra",
    "ll", "cor",
}

COMMON_SPANISH_MARKERS = {
    " el ", " la ", " los ", " las ", " que ", " para ", " porque ",
    " movimiento ", " velocidad ", " aceleración ", " posición ",
    " ejemplo ", " historia ", " errores ", " modelo ", " aplicación "
}

PLACEHOLDER_PATTERNS = [
    r"\bcontenido\s+pendiente\b",
    r"\bcontenido\s+por\s+completar\b",
    r"\bpor\s+redactar\b",
    r"\bpending\s+content\b",
    r"\bto\s+be\s+completed\b",
    r"\btbd\b",
    r"(?-i:\bTODO\b)",
    r"\blorem\s+ipsum\b",
]

MOJIBAKE_PATTERNS = [
    # Typical UTF-8-as-Latin1 mojibake artifacts seen in ES/EN content.
    re.compile(r"\u00C3[\x80-\xBF]"),         # U+00C3 + continuation byte
    re.compile(r"\u00C2(?:[\x80-\xBF])?"),   # Â + optional continuation
    re.compile(r"\u00F0\u0178[\x80-\xBF]{2}"),  # ðŸ + 2 continuation bytes
    re.compile(r"\u00E2[\x80-\xBF]{1,2}"),   # U+00E2 + 1-2 continuation bytes
    re.compile(r"\uFFFD"),  # replacement char
    # Common visible mojibake sequences.
    re.compile(r"Ã¡|Ã©|Ãí|Ãó|Ãº|Ã±|Ãü|ÃÁ|Ã‰|ÃÍ|ÃÓ|ÃÚ|ÃÑ|Ãœ"),
    re.compile(r"â€œ|â€|â€˜|â€™|â€“|â€”|â€¢|â€¦|â‚¬|â„¢"),
    re.compile(r"Â¡|Â¿|Â°|Â·|Â«|Â»"),
    re.compile(r"ðŸ"),
]

LATEX_OUTSIDE_MATH_COMMANDS = {
    "alpha", "beta", "gamma", "delta", "theta", "omega", "tau", "rho", "sigma", "mu", "phi", "pi",
    "Delta", "sum", "int", "frac", "sqrt", "cdot", "times", "left", "right", "mathrm", "text",
    "sin", "cos", "tan", "log", "ln", "exp", "approx", "leq", "geq", "neq",
    "leftrightarrow", "longleftrightarrow", "Rightarrow", "Longrightarrow",
}

RISKY_TEXT_UNITS_PATTERN = re.compile(r"\\text\{[^}]*\\cdot[^}]*\}\s*\^\s*\d+")
THEORY_INLINE_HIGHLIGHT_FORMULA_PATTERN = re.compile(
    r"^\s*(?:[-*]|\d+\.)\s+\*\*[^*]+\*\*:\s*(?:\\\((?:\\.|[^\\])*?\\\)|(?<!\\)\$(?:\\.|[^$])*(?<!\\)\$)"
)
INLINE_MATH_SPAN_PATTERN = re.compile(r"\\\((?:\\.|[^\\])*?\\\)|(?<!\\)\$(?:\\.|[^$])*(?<!\\)\$")
THEORY_FORMULA_DECLARATION_PATTERN = re.compile(
    r"^\s*(?:[-*]|\d+\.)\s+(?:\*\*[^*]+\*\*|[^:]{1,120})\s*:\s*(\\\((?:\\.|[^\\])*?\\\)|(?<!\\)\$(?:\\.|[^$])*(?<!\\)\$)"
)
_BARE_FORMULA_RE = re.compile(
    r"\b([A-Za-z]{1,3}(?:_\{?\w+\}?)?)\s*=\s*"
    r"([A-Za-z0-9_\s+\-*/^(){},.\\]+)"
)
_BARE_MATH_INDICATOR_RE = re.compile(
    r"[*/^]"
    r"|_\{?\w"
    r"|\w\("
    r"|(?:sin|cos|tan|sqrt|log|exp|theta|alpha|omega|mu|rho|sigma|delta|gamma|phi|tau|pi|beta)\b"
)

THEORY_KEY_SECTIONS_NORM = {
    "nivel esencial",
    "nivel formal",
    "nivel estructural",
    "essential level",
    "formal level",
    "structural level",
}
IMPORTANT_FORMULA_MARKERS = (
    "=",
    "<",
    ">",
    r"\le",
    r"\ge",
    r"\leq",
    r"\geq",
    r"\neq",
    r"\approx",
    r"\sim",
    r"\propto",
    r"\leftrightarrow",
    r"\longleftrightarrow",
    r"\Rightarrow",
    r"\Longrightarrow",
    r"\to",
)

@dataclass
class CheckResult:
    ok: bool
    message: str
    details: Any = None

def count_words(text: str) -> int:
    return len(re.findall(r"\b[\wáéíóúÁÉÍÓÚñÑüÜ]+\b", text, flags=re.UNICODE))

def normalize_prose_fragment(text: str) -> str:
    text = re.sub(r"`[^`]*`", " ", text)
    text = re.sub(r"\\\((?:\\.|[^\\])*?\\\)", " ", text)
    text = re.sub(r"\\\[(?:\\.|[^\\])*?\\\]", " ", text)
    text = re.sub(r"(?<!\\)\$(?:\\.|[^$])*(?<!\\)\$", " ", text)
    text = unicodedata.normalize("NFKD", text)
    text = text.encode("ascii", "ignore").decode("ascii")
    text = re.sub(r"[^a-zA-Z0-9\s]", " ", text).lower()
    text = re.sub(r"\s+", " ", text).strip()
    return text

def find_duplicate_long_paragraphs(text: str, min_words: int = 35) -> List[Dict[str, Any]]:
    paragraphs = [p.strip() for p in re.split(r"\n\s*\n", text) if p.strip()]
    seen: Dict[str, Dict[str, Any]] = {}
    duplicates: List[Dict[str, Any]] = []
    for idx, paragraph in enumerate(paragraphs, start=1):
        if count_words(paragraph) < min_words:
            continue
        norm = normalize_prose_fragment(paragraph)
        if count_words(norm) < min_words:
            continue
        if norm in seen:
            entry = seen[norm]
            entry["count"] += 1
            entry["paragraphs"].append(idx)
        else:
            seen[norm] = {
                "count": 1,
                "paragraphs": [idx],
                "sample": paragraph[:160].strip(),
            }
    for entry in seen.values():
        if entry["count"] > 1:
            duplicates.append({
                "count": entry["count"],
                "paragraphs": entry["paragraphs"],
                "sample": entry["sample"],
            })
    return duplicates[:6]

def find_repeated_long_sentences(text: str, min_words: int = 10, min_repeats: int = 3) -> List[Dict[str, Any]]:
    raw_sentences = re.split(r"(?<=[.!?])\s+|\n+", text)
    seen: Dict[str, Dict[str, Any]] = {}
    for sentence in raw_sentences:
        sentence = sentence.strip()
        if count_words(sentence) < min_words:
            continue
        norm = normalize_prose_fragment(sentence)
        if count_words(norm) < min_words:
            continue
        if norm in seen:
            seen[norm]["count"] += 1
        else:
            seen[norm] = {"count": 1, "sample": sentence[:160].strip()}
    repeated = [
        {"count": entry["count"], "sample": entry["sample"]}
        for entry in seen.values()
        if entry["count"] >= min_repeats
    ]
    repeated.sort(key=lambda x: (-x["count"], x["sample"]))
    return repeated[:6]

def build_prose_quality_checks(path: Path, text: str) -> List["CheckResult"]:
    dup_paragraphs = find_duplicate_long_paragraphs(text)
    repeated_sentences = find_repeated_long_sentences(text)
    return [
        CheckResult(
            not dup_paragraphs,
            f"{path.name} sin parrafos largos duplicados",
            dup_paragraphs,
        ),
        CheckResult(
            not repeated_sentences,
            f"{path.name} sin frases largas repetidas mecanicamente",
            repeated_sentences,
        ),
    ]

def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="replace")

def load_yaml(path: Path) -> Any:
    try:
        return yaml.safe_load(read_text(path))
    except Exception as e:
        raise ValueError(f"{path.name}: YAML inválido ({type(e).__name__}): {e}")

def configure_console_encoding() -> None:
    """Best effort UTF-8 output to reduce mojibake in terminal reports."""
    try:
        if sys.platform.startswith("win"):
            try:
                import ctypes
                ctypes.windll.kernel32.SetConsoleOutputCP(65001)
                ctypes.windll.kernel32.SetConsoleCP(65001)
            except Exception:
                pass
        if hasattr(sys.stdout, "reconfigure"):
            sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        if hasattr(sys.stderr, "reconfigure"):
            sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

def extract_leaf_dir(input_path: Path) -> Tuple[Path, tempfile.TemporaryDirectory | None]:
    if input_path.is_dir():
        return input_path, None
    if zipfile.is_zipfile(input_path):
        tmp = tempfile.TemporaryDirectory()
        with zipfile.ZipFile(input_path, "r") as zf:
            zf.extractall(tmp.name)
        root = Path(tmp.name)
        children = [p for p in root.iterdir() if not p.name.startswith("__MACOSX")]
        if len(children) == 1 and children[0].is_dir():
            return children[0], tmp
        return root, tmp
    raise ValueError("La ruta debe ser un directorio o un ZIP válido.")

def find_missing_sections(text: str, required_sections: List[str]) -> List[str]:
    return [s for s in required_sections if s not in text]

def parse_markdown_headings(text: str) -> List[Tuple[int, int, str]]:
    headings: List[Tuple[int, int, str]] = []
    for lineno, line in enumerate(text.splitlines(), start=1):
        line = line.lstrip("\ufeff")
        m = re.match(r"^(#{1,6})\s+(.+?)\s*$", line)
        if m:
            headings.append((lineno, len(m.group(1)), m.group(2).strip()))
    return headings

def repair_mojibake(text: str) -> str:
    if not text:
        return text
    if any(ch in text for ch in ("\u00C3", "\u00C2", "\u00F0")):
        try:
            repaired = text.encode("latin1", errors="ignore").decode("utf-8", errors="ignore")
            if repaired:
                return repaired
        except Exception:
            return text
    return text

def normalize_heading_title(title: str) -> str:
    title = repair_mojibake(title)
    cleaned = unicodedata.normalize("NFKD", title.strip().lower())
    cleaned = "".join(ch for ch in cleaned if not unicodedata.combining(ch))
    cleaned = re.sub(r"[`*_~]", "", cleaned)
    cleaned = cleaned.replace("-", " ")
    cleaned = re.sub(r"[^0-9a-z\s]", " ", cleaned)
    cleaned = re.sub(r"\s+", " ", cleaned).strip()
    return cleaned

def heading_matches(actual_norm: str, expected_norm: str) -> bool:
    if actual_norm == expected_norm:
        return True
    if len(expected_norm.split()) >= 2:
        return actual_norm.startswith(expected_norm + " ") or actual_norm.startswith(expected_norm + ":")
    return False


# ── Emoji‑prefix enforcement for theory headings ────────────────────────────
# Map each required emoji to normalised keywords that identify its heading.
_EMOJI_HEADING_MAP_ES = {
    "🟢": "nivel esencial",
    "🔵": "nivel formal",
    "🔴": "nivel estructural",
}
_EMOJI_HEADING_MAP_EN = {
    "🟢": "essential level",
    "🔵": "formal level",
    "🔴": "structural level",
}


def check_required_emoji_prefixes(
    text: str,
    required_sections: List[str],
) -> List[str]:
    """Return a list of issues when a heading that should carry an emoji (🟢🔵🔴)
    is present in the file without the corresponding emoji prefix.

    ``required_sections`` is one of THEORY_SECTIONS / THEORY_SECTIONS_EN.
    """
    # Build mapping: normalised keyword → required emoji from required_sections
    required_map: Dict[str, str] = {}
    for sec in required_sections:
        m = re.match(r"^#{1,6}\s+(.+?)\s*$", sec)
        if not m:
            continue
        raw = m.group(1)
        for emoji in ("🟢", "🔵", "🔴"):
            if emoji in raw:
                norm = normalize_heading_title(raw)
                required_map[norm] = emoji
                break

    if not required_map:
        return []

    issues: List[str] = []
    for lineno, line in enumerate(text.splitlines(), start=1):
        hm = re.match(r"^(#{1,6})\s+(.+?)\s*$", line)
        if not hm:
            continue
        title_raw = hm.group(2)
        title_norm = normalize_heading_title(title_raw)
        if title_norm in required_map:
            expected_emoji = required_map[title_norm]
            if expected_emoji not in title_raw:
                issues.append(
                    f"L{lineno}: falta prefijo {expected_emoji} en encabezado: {title_raw!r}"
                )
    return issues

def find_placeholder_lines(text: str) -> List[str]:
    hits: List[str] = []
    for lineno, line in enumerate(text.splitlines(), start=1):
        stripped = line.strip()
        if not stripped or stripped.startswith("#"):
            continue
        for pattern in PLACEHOLDER_PATTERNS:
            if re.search(pattern, stripped, flags=re.IGNORECASE):
                hits.append(f"L{lineno}: {stripped}")
                break
    return hits

def find_mojibake_lines(text: str, max_hits: int = 8) -> List[str]:
    hits: List[str] = []
    for lineno, line in enumerate(text.splitlines(), start=1):
        tokens = sorted({
            m.group(0)
            for pat in MOJIBAKE_PATTERNS
            for m in pat.finditer(line)
        })
        if not tokens:
            continue
        snippet = line.strip()
        if len(snippet) > 180:
            snippet = snippet[:177] + "..."
        hits.append(f"L{lineno}: {snippet} | tokens={tokens[:4]}")
        if len(hits) >= max_hits:
            break
    return hits

def strip_inline_math(line: str) -> str:
    """Remove inline math spans, keeping plain text for command leak checks."""
    line = re.sub(r"\\\((?:\\.|[^\\])*?\\\)", " ", line)
    line = re.sub(r"(?<!\\)\$(?:\\.|[^$])*(?<!\\)\$", " ", line)
    return line

def find_markdown_math_render_issues(text: str, max_hits: int = 12) -> List[str]:
    """Detect markdown patterns that usually break math rendering in the frontend."""
    issues: List[str] = []
    in_code_block = False
    in_math_block = False

    for lineno, line in enumerate(text.splitlines(), start=1):
        stripped = line.strip()

        if stripped.startswith("```"):
            in_code_block = not in_code_block
            continue
        if in_code_block:
            continue

        if re.search(r"\$\$.+\$\$", stripped):
            issues.append(f"L{lineno}: bloque $$ en una sola línea (prohibido): {stripped[:140]}")
            if RISKY_TEXT_UNITS_PATTERN.search(line):
                issues.append(
                    f"L{lineno}: unidad riesgosa '\\text{{...\\cdot...}}^n'; usar '\\mathrm{{kg\\cdot m^2}}' o '\\text{{kg}}\\cdot\\text{{m}}^2'"
                )
            if len(issues) >= max_hits:
                break
            continue

        if stripped == "$$":
            in_math_block = not in_math_block
            continue

        if in_math_block:
            if RISKY_TEXT_UNITS_PATTERN.search(line):
                issues.append(
                    f"L{lineno}: unidad riesgosa '\\text{{...\\cdot...}}^n'; usar '\\mathrm{{kg\\cdot m^2}}' o '\\text{{kg}}\\cdot\\text{{m}}^2'"
                )
            if len(issues) >= max_hits:
                break
            continue

        if len(re.findall(r"(?<!\\)\$", line)) % 2 == 1:
            issues.append(f"L{lineno}: delimitadores '$' desbalanceados")
        if line.count(r"\(") != line.count(r"\)"):
            issues.append(f"L{lineno}: delimitadores '\\(' '\\)' desbalanceados")

        if RISKY_TEXT_UNITS_PATTERN.search(line):
            issues.append(
                f"L{lineno}: unidad riesgosa '\\text{{...\\cdot...}}^n'; usar '\\mathrm{{kg\\cdot m^2}}' o '\\text{{kg}}\\cdot\\text{{m}}^2'"
            )

        plain = strip_inline_math(line)
        for m in re.finditer(r"\\([A-Za-z]+)", plain):
            cmd = m.group(1)
            if cmd in LATEX_OUTSIDE_MATH_COMMANDS:
                snippet = stripped if len(stripped) <= 140 else stripped[:137] + "..."
                issues.append(f"L{lineno}: comando LaTeX fuera de delimitadores: \\{cmd} | {snippet}")
                break

        if len(issues) >= max_hits:
            break

    return issues


def _strip_inline_math_delimiters(token: str) -> str:
    token = token.strip()
    if token.startswith(r"\(") and token.endswith(r"\)"):
        return token[2:-2].strip()
    if token.startswith("$") and token.endswith("$"):
        return token[1:-1].strip()
    return token


def _formula_is_important(expr: str) -> bool:
    compact = re.sub(r"\s+", "", expr)
    if len(compact) < 4:
        return False
    if any(marker in expr for marker in IMPORTANT_FORMULA_MARKERS):
        return True
    # Despeje típico: variable a la izquierda de '='
    if re.search(r"^[A-Za-z\\][A-Za-z0-9_{}\\^]*\s*=", expr):
        return True
    return False


def find_theory_inline_highlight_formula_issues(text: str, max_hits: int = 8) -> List[str]:
    """En secciones clave de teoría, fórmulas declarativas importantes deben ir en bloque $$."""
    issues: List[str] = []
    in_code_block = False
    in_math_block = False
    in_target_section = False
    target_section_level = 0

    for lineno, line in enumerate(text.splitlines(), start=1):
        stripped = line.strip()

        if stripped.startswith("```"):
            in_code_block = not in_code_block
            continue
        if in_code_block:
            continue

        if stripped == "$$":
            in_math_block = not in_math_block
            continue
        if in_math_block:
            continue

        heading = re.match(r"^(#{1,6})\s+(.+?)\s*$", line)
        if heading:
            level = len(heading.group(1))
            title_norm = normalize_heading_title(heading.group(2))
            if title_norm in THEORY_KEY_SECTIONS_NORM:
                in_target_section = True
                target_section_level = level
            elif in_target_section and level <= target_section_level:
                in_target_section = False
                target_section_level = 0
            continue

        if not in_target_section:
            continue

        m_decl = THEORY_FORMULA_DECLARATION_PATTERN.match(line)
        if not m_decl:
            continue

        token = m_decl.group(1)
        expr = _strip_inline_math_delimiters(token)
        if not _formula_is_important(expr):
            continue

        if THEORY_INLINE_HIGHLIGHT_FORMULA_PATTERN.search(line) or ":" in line:
            snippet = stripped if len(stripped) <= 140 else stripped[:137] + "..."
            issues.append(
                f"L{lineno}: fórmula declarativa inline en nivel esencial/formal/estructural; usar bloque $$ multilinea: {snippet}"
            )
            if len(issues) >= max_hits:
                break

    return issues


def find_bare_formula_issues(text: str, max_hits: int = 8) -> List[str]:
    """Detect formula-like patterns (var = expr) outside any LaTeX delimiter."""
    issues: List[str] = []
    in_code_block = False
    in_math_block = False

    for lineno, line in enumerate(text.splitlines(), start=1):
        stripped = line.strip()

        if stripped.startswith("```"):
            in_code_block = not in_code_block
            continue
        if in_code_block:
            continue
        if stripped == "$$":
            in_math_block = not in_math_block
            continue
        if in_math_block:
            continue

        # Skip headings and image references
        if stripped.startswith("#") or stripped.startswith("!["):
            continue

        # Remove portions already inside math delimiters
        plain = strip_inline_math(line)

        for m in _BARE_FORMULA_RE.finditer(plain):
            rhs = m.group(2).strip()[:60]
            if _BARE_MATH_INDICATOR_RE.search(rhs):
                snippet = stripped if len(stripped) <= 140 else stripped[:137] + "..."
                issues.append(
                    f"L{lineno}: fórmula sin delimitadores LaTeX: {snippet}"
                )
                break  # one issue per line

        if len(issues) >= max_hits:
            break

    return issues


# ── Theory variety / anti-monotony checks ────────────────────────────────────

_TEMPLATE_OPENING_ES = re.compile(
    r"^En\s+[\wáéíóúüñ\s]+\s+interesa\s", re.IGNORECASE
)
_TEMPLATE_OPENING_EN = re.compile(
    r"^In\s+[\w\s]+(?:level|context|interpretation|method|cases|questions|connections|synthesis)\s*,"
    r"\s+the\s+goal\s+is\s+to\s",
    re.IGNORECASE,
)

_KEY_SECTIONS_VARIETY_NORM = {
    "nivel esencial", "nivel formal", "nivel estructural",
    "essential level", "formal level", "structural level",
}


def _extract_section_bodies(text: str) -> Dict[str, str]:
    """Split markdown into {normalised_heading: body_text} for ## headings."""
    sections: Dict[str, str] = {}
    current_key: str | None = None
    lines: list[str] = []
    for line in text.splitlines():
        m = re.match(r"^(#{1,6})\s+(.+?)\s*$", line)
        if m and len(m.group(1)) == 2:
            if current_key is not None:
                sections[current_key] = "\n".join(lines).strip()
            current_key = normalize_heading_title(m.group(2))
            lines = []
        elif current_key is not None:
            lines.append(line)
    if current_key is not None:
        sections[current_key] = "\n".join(lines).strip()
    return sections


def _section_similarity(a: str, b: str) -> float:
    """Word-level SequenceMatcher ratio between two section bodies."""
    from difflib import SequenceMatcher
    wa = normalize_prose_fragment(a).split()
    wb = normalize_prose_fragment(b).split()
    if not wa or not wb:
        return 0.0
    return SequenceMatcher(None, wa, wb).ratio()


def find_theory_variety_issues(text: str) -> List[str]:
    """Detect monotonous / template-generated theory files.

    Checks:
    1. Key sections (esencial/formal/estructural) too similar (>50%).
    2. Key sections with only 1 paragraph (monolithic wall of text).
    3. Majority of sections starting with the same template phrase.
    """
    issues: List[str] = []
    sections = _extract_section_bodies(text)

    # --- 1. Pairwise similarity of key sections --------------------------------
    key_names = [k for k in sections if k in _KEY_SECTIONS_VARIETY_NORM]
    for i, k1 in enumerate(key_names):
        for k2 in key_names[i + 1:]:
            sim = _section_similarity(sections[k1], sections[k2])
            if sim > 0.50:
                issues.append(
                    f"Secciones '{k1}' y '{k2}' demasiado similares ({sim:.0%}); "
                    f"cada nivel debe tener contenido diferenciado"
                )

    # --- 2. Monolithic sections (1 paragraph, >80 words) -----------------------
    mono_sections: list[str] = []
    for k in key_names:
        body = sections.get(k, "")
        paragraphs = [p.strip() for p in body.split("\n\n") if p.strip()]
        wc = len(body.split())
        if len(paragraphs) <= 1 and wc > 80:
            mono_sections.append(k)
    if mono_sections:
        issues.append(
            f"Secciones con un solo párrafo monolítico (se necesitan ≥2 párrafos): "
            f"{', '.join(mono_sections)}"
        )

    # --- 3. Template opening pattern ------------------------------------------
    total_sections = len(sections)
    template_count = 0
    for body in sections.values():
        first_line = body.lstrip().split("\n")[0] if body.strip() else ""
        if _TEMPLATE_OPENING_ES.match(first_line) or _TEMPLATE_OPENING_EN.match(first_line):
            template_count += 1
    if total_sections > 0 and template_count / total_sections > 0.5:
        issues.append(
            f"{template_count}/{total_sections} secciones inician con frase plantilla "
            f"('En … interesa' / 'In … the goal is to'); el texto parece generado por template"
        )

    return issues


def analyze_required_heading_structure(text: str, required_sections: List[str]) -> Dict[str, Any]:
    headings = parse_markdown_headings(text)
    expected: List[Tuple[int, str, str]] = []
    for sec in required_sections:
        m = re.match(r"^(#{1,6})\s+(.+?)\s*$", sec)
        if not m:
            continue
        level = len(m.group(1))
        raw_title = m.group(2).strip()
        expected.append((level, raw_title, normalize_heading_title(raw_title)))

    indexed_headings = [
        (idx, lineno, level, title, normalize_heading_title(title))
        for idx, (lineno, level, title) in enumerate(headings)
    ]

    missing: List[str] = []
    level_issues: List[Dict[str, Any]] = []
    duplicates: List[Dict[str, Any]] = []
    matched_order: List[Tuple[str, int]] = []

    for expected_level, expected_title_raw, expected_title_norm in expected:
        matches = [h for h in indexed_headings if heading_matches(h[4], expected_title_norm)]
        if not matches:
            missing.append(f"{'#' * expected_level} {expected_title_raw}")
            continue

        if len(matches) > 1:
            duplicates.append({
                "section": f"{'#' * expected_level} {expected_title_raw}",
                "count": len(matches),
                "lines": [m[1] for m in matches],
            })

        best = next((m for m in matches if m[2] == expected_level), matches[0])
        if best[2] != expected_level:
            level_issues.append({
                "section": f"{'#' * expected_level} {expected_title_raw}",
                "expected_level": expected_level,
                "found_level": best[2],
                "line": best[1],
            })
        matched_order.append((expected_title_raw, best[0]))

    order_issues: List[str] = []
    if len(matched_order) == len(expected):
        last_idx = -1
        for title, idx in matched_order:
            if idx < last_idx:
                order_issues.append(title)
            last_idx = idx

    return {
        "missing": missing,
        "level_issues": level_issues,
        "duplicates": duplicates,
        "order_issues": order_issues,
    }

def rough_english_check(text: str) -> bool:
    lowered = f" {text.lower()} "
    hits = sum(1 for m in COMMON_SPANISH_MARKERS if m in lowered)
    return hits <= 2

def gather_magnitude_symbols(magnitudes_data: Any) -> Set[str]:
    """Genera un set de símbolos válidos desde magnitudes.yaml, incluyendo versiones limpias."""
    symbols = set()
    items = magnitudes_data.get("magnitudes") if isinstance(magnitudes_data, dict) else magnitudes_data
    if not isinstance(items, list):
        return symbols
    
    LATEX_CLEAN = {
        "boldsymbol", "mathrm", "mathbf", "textrm", "text"
    }
    
    for item in items:
        if isinstance(item, dict):
            symbol = item.get("symbol")
            if symbol:
                symbols.add(symbol)
                # Versión ultralimpia: sin \, sin {}, sin espacios y sin comandos comunes
                clean = symbol.replace("\\", "").replace("{", "").replace("}", "").replace(" ", "")
                for cmd in LATEX_CLEAN:
                    clean = clean.replace(cmd, "")
                symbols.add(clean)
                
                # También añadir el ID como símbolo válido si no está
                if "id" in item:
                    symbols.add(item["id"])
    return symbols

def extract_math_tokens(text: str) -> Set[str]:
    """Extrae símbolos matemáticos de bloques LaTeX, filtrando comandos y palabras comunes."""
    tokens = set()
    latex_blocks = re.findall(r"\$\$(.*?)\$\$", text, flags=re.DOTALL)
    latex_inline = re.findall(r"\\\((.*?)\\\)", text, flags=re.DOTALL)
    raw = "\n".join(latex_blocks + latex_inline)
    
    # Comandos LaTeX a ignorar (extraídos como palabras por la regex)
    LATEX_BLACKLIST = {
        "boldsymbol", "mathrm", "mathbf", "textrm", "text", "frac", "tfrac", "dfrac", "sqrt", "int", "sum",
        "partial", "limits", "cdot", "times", "left", "right", "begin", "end", "cases",
        "leftrightarrow", "longleftrightarrow", "Rightarrow", "Longrightarrow",
        "bigl", "bigr", "Bigl", "Bigr", "biggl", "biggr",
        "cdots", "ldots", "ddots", "vdots",
        "iiint", "iint", "oint",
        "underbrace", "overbrace", "overline", "underline",
        "prime", "lim", "max", "min", "sup", "inf",
        "displaystyle", "scriptstyle", "operatorname",
        "cancel", "bcancel", "xcancel", "sout",
        "color", "textcolor", "colorbox", "boxed"
    }
    # Palabras comunes o descriptores que suelen aparecer en fórmulas o subíndices
    WORDS_IGNORE = {
        "anillo", "aro", "disco", "varilla", "borde", "radio", "radios", "masa", "centro",
        "eje", "med", "rot", "cm", "ext", "int", "total", "fixed", "point", "mass",
        # ── Momentum / collisions domain ─────────────────────────────────
        "media", "contacto", "gravedad", "pared", "rebote", "acercamiento",
        "separaci", "velocidades", "moderadas", "rugby", "isbol",
        "fricci", "grav", "antes", "despu", "independiente",
        "cuando", "nimo", "construcci", "bote", "hueco", "rica", "polar",
        "orbital", "spin", "exhaust", "thrust", "lab", "conservaci",
        "disponible", "relativa", "final", "por"
    }
    
    # Pattern para variables: letras solas, griego escapado y simbolos con subindices
    # con o sin llaves. Asi evitamos partir a_{cor} en falsos tokens como a_c / or.
    pattern = r"(\\Delta\s*[A-Za-z]+|\\omega|\\theta_0|\\theta|\\tau|\\alpha|\\rho|\\sigma|[A-Za-z]+(?:_\{?[0-9A-Za-z]+\}?)*)"

    for token in re.findall(pattern, raw):
        # Limpiar llaves y espacios
        cleaned = re.sub(r"\s+", "", token).replace("{", "").replace("}", "")
        
        # Filtrar si es un comando LaTeX o una palabra común
        base_word = cleaned.split('_')[0].replace("\\", "")
        if base_word.lower() in LATEX_BLACKLIST or base_word.lower() in WORDS_IGNORE:
            continue
            
        # Ignorar diferenciales (dm, dr, dV, dx, dy, dz)
        if len(cleaned) == 2 and cleaned.startswith('d') and (cleaned[1].isalpha()):
            continue
            
        tokens.add(cleaned)
    return tokens

def normalize_symbol(sym: str) -> str:
    return sym.replace("\\", "").replace("{", "").replace("}", "").replace(" ", "")

def validate_meta(path: Path) -> List[CheckResult]:
    try:
        data = load_yaml(path)
    except Exception as e:
        return [CheckResult(False, "meta.yaml YAML válido", str(e))]
    if not isinstance(data, dict):
        return [CheckResult(False, "meta.yaml es un mapping válido", data)]
    required = [
        "id","nombre","area","bloque","subbloque","parent_id","ruta_relativa","orden","type",
        "niveles","icon","descripcion","description_en","tags","prerequisitos","graficos",
        "physical_role","dificultad","tiempo_estimado_min"
    ]
    missing = [k for k in required if k not in data]
    res = [CheckResult(not missing, "Campos obligatorios en meta.yaml", missing)]

    # Descripciones no vacias y <= 20 palabras
    res.append(CheckResult(
        isinstance(data.get("descripcion"), str) and 1 <= len(data.get("descripcion", "").split()) <= 20,
        "descripcion <= 20 palabras",
        data.get("descripcion"),
    ))
    res.append(CheckResult(
        isinstance(data.get("description_en"), str) and 1 <= len(data.get("description_en", "").split()) <= 20,
        "description_en <= 20 palabras",
        data.get("description_en"),
    ))

    # nombre bilingue obligatorio y no vacio
    nombre = data.get("nombre", {})
    nombre_ok = (
        isinstance(nombre, dict)
        and isinstance(nombre.get("es"), str) and bool(nombre.get("es").strip())
        and isinstance(nombre.get("en"), str) and bool(nombre.get("en").strip())
    )
    res.append(CheckResult(nombre_ok, "nombre con bloque es/en no vacio", nombre))

    # tags: lista simple o dict bilingue, siempre no vacio y max 6 por lengua
    tags = data.get("tags", [])
    if isinstance(tags, dict):
        tags_ok = (
            "es" in tags and "en" in tags
            and all(isinstance(tags.get(k), list) and 1 <= len(tags.get(k)) <= 6 for k in ("es", "en"))
            and all(isinstance(x, str) and bool(x.strip()) for k in ("es", "en") for x in tags.get(k, []))
        )
        tags_val = tags
    else:
        tags_ok = (
            isinstance(tags, list)
            and 1 <= len(tags) <= 6
            and all(isinstance(x, str) and bool(x.strip()) for x in tags)
        )
        tags_val = tags
    res.append(CheckResult(tags_ok, "tags <= 6 (en cada lengua si es dict)", tags_val))

    prereq = data.get("prerequisitos")
    prereq_ok = isinstance(prereq, list) and all(isinstance(x, str) and bool(x.strip()) for x in prereq)
    res.append(CheckResult(prereq_ok, "prerequisitos es lista de strings", prereq))

    niveles = data.get("niveles")

    def _is_valid_string_list(lst):
        return (
            isinstance(lst, list)
            and len(lst) > 0
            and all(isinstance(x, str) and bool(x.strip()) for x in lst)
        )

    if _is_valid_string_list(niveles):
        niveles_ok = True
    elif isinstance(niveles, dict):
        es_ok = _is_valid_string_list(niveles.get("es"))
        en_ok = _is_valid_string_list(niveles.get("en"))
        niveles_ok = es_ok and en_ok
        if niveles_ok and len(niveles["es"]) != len(niveles["en"]):
            res.append(CheckResult(
                False,
                "niveles bilingue es/en con misma longitud",
                niveles
            ))
    else:
        niveles_ok = False

    res.append(CheckResult(
        niveles_ok,
        "niveles valido (lista simple o bilingue es/en)",
        niveles
    ))

    icon = data.get("icon")
    icon_ok = isinstance(icon, str) and bool(icon.strip())
    res.append(CheckResult(icon_ok, "icon no vacio", icon))

    orden = data.get("orden")
    res.append(CheckResult(isinstance(orden, int) and orden > 0, "orden es entero positivo", orden))

    dificultad = data.get("dificultad")
    res.append(CheckResult(isinstance(dificultad, int) and 1 <= dificultad <= 5, "dificultad en rango 1..5", dificultad))

    tiempo = data.get("tiempo_estimado_min")
    res.append(CheckResult(isinstance(tiempo, int) and tiempo > 0, "tiempo_estimado_min entero positivo", tiempo))

    graficos = data.get("graficos")
    allowed_graphs = {"Coord", "Dcl", "Svg"}
    graficos_ok = (
        isinstance(graficos, list)
        and len(graficos) > 0
        and all(isinstance(g, str) and g in allowed_graphs for g in graficos)
    )
    res.append(CheckResult(graficos_ok, "graficos usa valores permitidos (Coord/Dcl/Svg)", graficos))

    # physical_role: puede ser string (plantilla) o dict es/en
    pr = data.get("physical_role")
    pr_ok = (
        isinstance(pr, str)
        or (
            isinstance(pr, dict)
            and isinstance(pr.get("es"), str) and bool(pr.get("es").strip())
            and isinstance(pr.get("en"), str) and bool(pr.get("en").strip())
        )
    )
    res.append(CheckResult(pr_ok, "physical_role es string o bloque es/en", pr))

    res.append(CheckResult(data.get("type") == "leaf", "type = leaf", data.get("type")))

    # Bloque interpretacion obligatorio (plantilla_v5 seccion 6)
    interp = data.get("interpretacion", {})
    interp_ok = (
        isinstance(interp, dict)
        and interp.get("enabled") is True
        and interp.get("archivo") == "interpretacion.yaml"
    )
    res.append(CheckResult(
        interp_ok,
        "meta.yaml: interpretacion.enabled=true y archivo=interpretacion.yaml",
        None if interp_ok else interp,
    ))

    # Estructura extendida de interpretacion (UI, mini_graph, output_policy, dependencies)
    ui = interp.get("ui") if isinstance(interp, dict) else None
    ui_ok = isinstance(ui, dict)
    res.append(CheckResult(ui_ok, "meta.yaml: interpretacion.ui es bloque válido", ui))
    if ui_ok:
        ui_missing = [k for k in ["inline_calculator", "inline_graph", "dedicated_tab", "tab_label"] if k not in ui]
        res.append(CheckResult(not ui_missing, "meta.yaml: interpretacion.ui campos obligatorios", ui_missing))
        ui_flags_ok = all(isinstance(ui.get(k), bool) for k in ["inline_calculator", "inline_graph", "dedicated_tab"])
        res.append(CheckResult(
            ui_flags_ok,
            "meta.yaml: interpretacion.ui flags booleanos",
            {k: ui.get(k) for k in ["inline_calculator", "inline_graph", "dedicated_tab"]},
        ))
        tab_label = ui.get("tab_label", {})
        tab_label_ok = (
            isinstance(tab_label, dict)
            and isinstance(tab_label.get("es"), str) and bool(tab_label.get("es").strip())
            and isinstance(tab_label.get("en"), str) and bool(tab_label.get("en").strip())
        )
        res.append(CheckResult(tab_label_ok, "meta.yaml: interpretacion.ui.tab_label con es/en", tab_label))
    else:
        res.append(CheckResult(False, "meta.yaml: interpretacion.ui campos obligatorios", "ui no es dict"))
        res.append(CheckResult(False, "meta.yaml: interpretacion.ui flags booleanos", "ui no es dict"))
        res.append(CheckResult(False, "meta.yaml: interpretacion.ui.tab_label con es/en", "ui no es dict"))

    mini = interp.get("mini_graph") if isinstance(interp, dict) else None
    mini_ok = isinstance(mini, dict)
    res.append(CheckResult(mini_ok, "meta.yaml: interpretacion.mini_graph es bloque válido", mini))
    if mini_ok:
        mini_missing = [k for k in ["enabled", "preferred_type"] if k not in mini]
        res.append(CheckResult(not mini_missing, "meta.yaml: interpretacion.mini_graph campos obligatorios", mini_missing))
        mini_enabled_ok = isinstance(mini.get("enabled"), bool)
        res.append(CheckResult(mini_enabled_ok, "meta.yaml: interpretacion.mini_graph.enabled es booleano", mini.get("enabled")))
        preferred = mini.get("preferred_type")
        preferred_ok = isinstance(preferred, str) and preferred in {"Coord", "Dcl", "Svg", "auto"}
        res.append(CheckResult(preferred_ok, "meta.yaml: interpretacion.mini_graph.preferred_type válido", preferred))
    else:
        res.append(CheckResult(False, "meta.yaml: interpretacion.mini_graph campos obligatorios", "mini_graph no es dict"))
        res.append(CheckResult(False, "meta.yaml: interpretacion.mini_graph.enabled es booleano", "mini_graph no es dict"))
        res.append(CheckResult(False, "meta.yaml: interpretacion.mini_graph.preferred_type válido", "mini_graph no es dict"))

    outp = interp.get("output_policy") if isinstance(interp, dict) else None
    outp_ok = isinstance(outp, dict)
    res.append(CheckResult(outp_ok, "meta.yaml: interpretacion.output_policy es bloque válido", outp))
    if outp_ok:
        outp_missing = [k for k in ["show_summary_first", "max_inline_messages", "show_warnings", "show_likely_errors"] if k not in outp]
        res.append(CheckResult(not outp_missing, "meta.yaml: interpretacion.output_policy campos obligatorios", outp_missing))
        outp_flags_ok = all(isinstance(outp.get(k), bool) for k in ["show_summary_first", "show_warnings", "show_likely_errors"])
        res.append(CheckResult(
            outp_flags_ok,
            "meta.yaml: interpretacion.output_policy flags booleanos",
            {k: outp.get(k) for k in ["show_summary_first", "show_warnings", "show_likely_errors"]},
        ))
        max_inline_ok = isinstance(outp.get("max_inline_messages"), int) and outp.get("max_inline_messages") >= 1
        res.append(CheckResult(max_inline_ok, "meta.yaml: interpretacion.output_policy.max_inline_messages entero >= 1", outp.get("max_inline_messages")))
    else:
        res.append(CheckResult(False, "meta.yaml: interpretacion.output_policy campos obligatorios", "output_policy no es dict"))
        res.append(CheckResult(False, "meta.yaml: interpretacion.output_policy flags booleanos", "output_policy no es dict"))
        res.append(CheckResult(False, "meta.yaml: interpretacion.output_policy.max_inline_messages entero >= 1", "output_policy no es dict"))

    ideps = interp.get("dependencies") if isinstance(interp, dict) else None
    ideps_ok = isinstance(ideps, dict)
    res.append(CheckResult(ideps_ok, "meta.yaml: interpretacion.dependencies es bloque válido", ideps))
    if ideps_ok:
        ideps_missing = [k for k in ["requires_formulas", "requires_magnitudes", "supports_graph_binding"] if k not in ideps]
        res.append(CheckResult(not ideps_missing, "meta.yaml: interpretacion.dependencies campos obligatorios", ideps_missing))
        ideps_flags_ok = all(isinstance(ideps.get(k), bool) for k in ["requires_formulas", "requires_magnitudes", "supports_graph_binding"])
        res.append(CheckResult(
            ideps_flags_ok,
            "meta.yaml: interpretacion.dependencies flags booleanos",
            {k: ideps.get(k) for k in ["requires_formulas", "requires_magnitudes", "supports_graph_binding"]},
        ))
    else:
        res.append(CheckResult(False, "meta.yaml: interpretacion.dependencies campos obligatorios", "dependencies no es dict"))
        res.append(CheckResult(False, "meta.yaml: interpretacion.dependencies flags booleanos", "dependencies no es dict"))
    return res

def _normalize_compare_text(value: Any) -> str:
    if value is None:
        return ""
    text = repair_mojibake(str(value)).strip()
    text = text.replace("\ufe0f", "").replace("\ufe0e", "")
    text = re.sub(r"\s+", " ", text)
    return text

def _normalize_compare_value(value: Any) -> Any:
    if isinstance(value, dict):
        return {k: _normalize_compare_value(v) for k, v in sorted(value.items())}
    if isinstance(value, list):
        return [_normalize_compare_value(v) for v in value]
    if isinstance(value, str):
        return _normalize_compare_text(value)
    return value

def _iter_map_nodes(node: Dict[str, Any], parent_id: str | None = None):
    yield node, parent_id
    for child in node.get("children", []) or []:
        if isinstance(child, dict):
            yield from _iter_map_nodes(child, node.get("id"))

def load_official_map_data(leaf_dir: Path) -> Tuple[Dict[str, Any] | None, Path | None, str | None]:
    root = find_workspace_root(leaf_dir)
    bases: List[Path] = []
    if root:
        bases.append(root)
    bases.extend([leaf_dir, Path.cwd()])

    seen: Set[Path] = set()
    for base in bases:
        try:
            base_resolved = base.resolve()
        except Exception:
            base_resolved = base
        if base_resolved in seen:
            continue
        seen.add(base_resolved)
        for rel in MAP_CANDIDATE_PATHS:
            candidate = (base_resolved / rel).resolve()
            if not candidate.exists():
                continue
            try:
                data = load_yaml(candidate)
            except Exception as e:
                return None, candidate, f"no se pudo leer mapa: {e}"
            if not isinstance(data, dict):
                return None, candidate, "mapa no es un mapping YAML valido"
            return data, candidate, None
    return None, None, "no se encontró phyxio-map.yaml"

def find_map_node_by_leaf_id(map_data: Dict[str, Any], leaf_id: str) -> Tuple[Dict[str, Any] | None, str | None]:
    root = map_data.get("root")
    if not isinstance(root, dict):
        return None, None
    for node, parent_id in _iter_map_nodes(root, None):
        if node.get("id") == leaf_id:
            return node, parent_id
    return None, None

def validate_meta_against_map(meta_path: Path, leaf_dir: Path) -> List[CheckResult]:
    try:
        meta_data = load_yaml(meta_path)
    except Exception as e:
        return [CheckResult(False, "meta.yaml vs mapa: meta.yaml YAML válido", str(e))]
    if not isinstance(meta_data, dict):
        return [CheckResult(False, "meta.yaml vs mapa: meta.yaml es mapping válido", meta_data)]

    map_data, map_path, map_err = load_official_map_data(leaf_dir)
    if map_err:
        return [CheckResult(False, "meta.yaml vs mapa: mapa oficial disponible", map_err)]

    leaf_id = str(meta_data.get("id", "")).strip()
    node, parent_id = find_map_node_by_leaf_id(map_data or {}, leaf_id)
    if node is None:
        return [
            CheckResult(False, "meta.yaml vs mapa: id existe en mapa oficial", {
                "id": leaf_id,
                "map_path": str(map_path) if map_path else None,
            })
        ]

    def compare(label: str, expected: Any, actual: Any) -> CheckResult:
        ok = _normalize_compare_value(expected) == _normalize_compare_value(actual)
        details = None if ok else {"expected": expected, "found": actual}
        return CheckResult(ok, f"meta.yaml vs mapa: {label}", details)

    expected_nombre = {
        "es": node.get("titulo", ""),
        "en": node.get("titulo_en", ""),
    }
    expected_ruta = node.get("ruta_relativa", "")

    res: List[CheckResult] = [
        CheckResult(True, "meta.yaml vs mapa: mapa cargado", str(map_path)),
        compare("nombre (titulo/titulo_en)", expected_nombre, meta_data.get("nombre")),
        compare("orden", node.get("orden"), meta_data.get("orden")),
        compare("niveles", node.get("niveles", []), meta_data.get("niveles", [])),
        compare("ruta_relativa", expected_ruta, meta_data.get("ruta_relativa", "")),
        compare("icon", node.get("icon", ""), meta_data.get("icon", "")),
        compare("graficos", node.get("graficos", []), meta_data.get("graficos", [])),
        compare("physical_role", node.get("physical_role", {}), meta_data.get("physical_role", {})),
        compare("type", node.get("type", "leaf"), meta_data.get("type")),
    ]
    if parent_id is not None:
        res.append(compare("parent_id", parent_id, meta_data.get("parent_id")))
    return res

def validate_magnitudes(path: Path) -> Tuple[List[CheckResult], Set[str], Set[str]]:
    try:
        data = load_yaml(path)
    except Exception as e:
        return [CheckResult(False, "magnitudes.yaml YAML válido", str(e))], set(), set()
    items = data.get("magnitudes") if isinstance(data, dict) else data
    res = [CheckResult(isinstance(items, list) and len(items) > 0, "magnitudes.yaml contiene lista de magnitudes")]
    # Campos básicos + campos semánticos v5 obligatorios (plantilla_v5 sección 7)
    required_fields = [
        "id","symbol","nombre","descripcion","unidad_si","dimension",
        "is_vector","components","category","physical_role","used_in",
        "common_mistake","typical_range",
        "sign_behavior","zero_behavior","value_nature",
        "interpretation_role","graph_binding","pedagogical_notes",
    ]
    problems = []
    mag_ids: Set[str] = set()
    for idx, item in enumerate(items or []):
        if not isinstance(item, dict):
            problems.append((idx, "item_no_dict"))
            continue
        if "id" in item:
            mag_ids.add(item["id"])
        missing = [k for k in required_fields if k not in item]
        if missing:
            problems.append((idx, missing))
        nombre = item.get("nombre", {})
        descripcion = item.get("descripcion", {})
        if not (isinstance(nombre, dict) and "es" in nombre and "en" in nombre):
            problems.append((idx, "nombre_es_en"))
        if not (isinstance(descripcion, dict) and "es" in descripcion and "en" in descripcion):
            problems.append((idx, "descripcion_es_en"))
    res.append(CheckResult(not problems, "Cada magnitud tiene todos los campos v5", problems))
    return res, gather_magnitude_symbols(data), mag_ids

def validate_formulas(path: Path) -> Tuple[List[CheckResult], Set[str], Set[str]]:
    try:
        data = load_yaml(path)
    except Exception as e:
        return [CheckResult(False, "formulas.yaml YAML válido", str(e))], set(), set()
    items = data.get("formulas") if isinstance(data, dict) else data
    res = [CheckResult(isinstance(items, list) and len(items) > 0, "formulas.yaml contiene lista de fórmulas")]
    # Campos básicos + campos de anclaje interpretativo obligatorios (plantilla_v5 sección 9)
    required_fields = [
        "id","title","equation","latex","rearrangements","category","relation_type",
        "physical_meaning","constraints","validity","dimension_check",
        "calculable","motivo_no_calculable","used_in",
        "interpretation_tags","result_semantics","domain_checks",
        "coherence_checks","graph_implications","pedagogical_triggers",
    ]
    problems = []
    symbols = set()
    formula_ids: Set[str] = set()
    for idx, item in enumerate(items or []):
        if not isinstance(item, dict):
            problems.append((idx, "item_no_dict"))
            continue
        if "id" in item:
            formula_ids.add(item["id"])
        missing = [k for k in required_fields if k not in item]
        if missing:
            problems.append((idx, missing))
        for key in ["title","physical_meaning","validity"]:
            val = item.get(key, {})
            if not (isinstance(val, dict) and "es" in val and "en" in val):
                problems.append((idx, f"{key}_es_en"))
        rearrangements = item.get("rearrangements", [])
        rearr_texts: List[str] = []
        if isinstance(rearrangements, list):
            for rearr in rearrangements:
                if isinstance(rearr, dict):
                    rearr_texts.append(str(rearr.get("equation", "")))
                    rearr_texts.append(str(rearr.get("latex", "")))
        latex_text = " ".join(
            [
                str(item.get("equation", "")),
                str(item.get("latex", "")),
                *rearr_texts,
            ]
        )
        symbols |= extract_math_tokens(f"\\({latex_text}\\)")
    res.append(CheckResult(not problems, "Cada fórmula tiene todos los campos v5", problems))
    return res, symbols, formula_ids

def validate_markdown_structure(
    path: Path,
    required_sections: List[str],
    min_words: int | None = None,
    max_words: int | None = None,
    enforce_prose_quality: bool = False,
) -> List[CheckResult]:
    text = read_text(path)
    analysis = analyze_required_heading_structure(text, required_sections)
    placeholder_hits = find_placeholder_lines(text)
    res = [
        CheckResult(not analysis["missing"], f"Estructura obligatoria en {path.name}", analysis["missing"]),
        CheckResult(not analysis["level_issues"], f"Niveles de encabezado correctos en {path.name}", analysis["level_issues"]),
        CheckResult(not analysis["duplicates"], f"No hay secciones duplicadas en {path.name}", analysis["duplicates"]),
        CheckResult(not analysis["order_issues"], f"Orden de secciones en {path.name}", analysis["order_issues"]),
        CheckResult(not placeholder_hits, f"{path.name} no contiene placeholders de plantilla", placeholder_hits[:8]),
    ]
    # Emoji‑prefix check (applies when required_sections contain 🟢/🔵/🔴)
    emoji_issues = check_required_emoji_prefixes(text, required_sections)
    if emoji_issues or any(e in "".join(required_sections) for e in ("🟢", "🔵", "🔴")):
        res.append(CheckResult(
            not emoji_issues,
            f"{path.name} encabezados con prefijo emoji obligatorio (🟢🔵🔴)",
            emoji_issues if emoji_issues else None,
        ))
    wc = count_words(text)
    if min_words is not None:
        res.append(CheckResult(wc >= min_words, f"{path.name} >= {min_words} palabras", wc))
    if max_words is not None:
        res.append(CheckResult(wc <= max_words, f"{path.name} <= {max_words} palabras", wc))
    if enforce_prose_quality:
        res.extend(build_prose_quality_checks(path, text))
    # Theory variety check (only for teoria.md / teoria.en.md)
    if path.name.lower() in {"teoria.md", "teoria.en.md"}:
        variety_issues = find_theory_variety_issues(text)
        if variety_issues:
            res.append(CheckResult(
                False,
                f"{path.name} variedad y calidad didáctica entre secciones",
                variety_issues,
            ))
    return res

def validate_ejemplos(path: Path, lang: str = "es", min_words: int | None = None, max_words: int | None = None) -> List[CheckResult]:
    text = read_text(path)
    required = EJEMPLOS_SECTIONS_ES if lang == "es" else EJEMPLOS_SECTIONS_EN
    analysis = analyze_required_heading_structure(text, required)
    placeholder_hits = find_placeholder_lines(text)

    res = [
        CheckResult(not analysis["missing"], "Estructura obligatoria de ejemplos", analysis["missing"]),
        CheckResult(not analysis["level_issues"], "Niveles de encabezado correctos en ejemplos", analysis["level_issues"]),
        CheckResult(not analysis["duplicates"], "No hay secciones duplicadas en ejemplos", analysis["duplicates"]),
        CheckResult(not analysis["order_issues"], "Orden de secciones de ejemplos", analysis["order_issues"]),
        CheckResult(not placeholder_hits, "No contiene placeholders de plantilla", placeholder_hits[:8]),
    ]
    wc = count_words(text)
    if min_words is not None:
        res.append(CheckResult(wc >= min_words, f"{path.name} >= {min_words} palabras", wc))
    if max_words is not None:
        res.append(CheckResult(wc <= max_words, f"{path.name} <= {max_words} palabras", wc))
    res.extend(build_prose_quality_checks(path, text))
    return res

def validate_aplicaciones(path: Path, lang: str = "es", min_words: int | None = None, max_words: int | None = None) -> List[CheckResult]:
    text = read_text(path)
    headings = parse_markdown_headings(text)
    numbered_sections: List[Tuple[int, int, str]] = []
    for lineno, level, title in headings:
        if level != 2:
            continue
        m = re.match(r"^\s*(\d+)\.", title)
        if m:
            numbered_sections.append((lineno, int(m.group(1)), title))
    section_numbers = [n for _, n, _ in numbered_sections]
    missing_first_five = [n for n in range(1, 6) if n not in set(section_numbers)]
    duplicated_numbers = sorted([n for n, c in Counter(section_numbers).items() if c > 1])
    numbering_order_issues: List[Dict[str, Any]] = []
    for prev, curr in zip(numbered_sections, numbered_sections[1:]):
        if curr[1] < prev[1]:
            numbering_order_issues.append({
                "line_prev": prev[0],
                "num_prev": prev[1],
                "line_curr": curr[0],
                "num_curr": curr[1],
            })
    
    # Marcador obligatorio de variable dominante (plantilla_v5 sección 19/20)
    # Aceptamos tanto "Variable dominante:" (estándar plantilla) como "Dominant variable:" (inglés natural)
    var_pattern = r"Variable dominante[*\s]*:" if lang == "es" else r"(Variable dominante|Dominant variable)[*\s]*:"
    variable_lines = re.findall(var_pattern, text, flags=re.IGNORECASE)
    
    # Marcador obligatorio de límite de validez (plantilla_v5 sección 19/20)
    limite_pattern = r"L[iíì]mite de validez[*\s]*:" if lang == "es" else r"Validity limit[*\s]*:"
    limite_lines = re.findall(limite_pattern, text, flags=re.IGNORECASE)
    placeholder_hits = find_placeholder_lines(text)
    
    res = [
        CheckResult(len(numbered_sections) >= 5, f"{path.name} contiene al menos 5 aplicaciones", len(numbered_sections)),
        CheckResult(not missing_first_five, f"{path.name} incluye aplicaciones 1..5", missing_first_five),
        CheckResult(not duplicated_numbers, f"{path.name} no duplica numeración de aplicaciones", duplicated_numbers),
        CheckResult(not numbering_order_issues, f"{path.name} respeta orden ascendente de numeración", numbering_order_issues),
        CheckResult(len(variable_lines) >= 5, f"Cada aplicación contiene '{'Variable dominante' if lang == 'es' else 'Dominant variable'}:'", len(variable_lines)),
        CheckResult(len(limite_lines) >= 5, f"Cada aplicación contiene '{'Límite de validez' if lang == 'es' else 'Validity limit'}:'", len(limite_lines)),
        CheckResult(not placeholder_hits, f"{path.name} no contiene placeholders de plantilla", placeholder_hits[:8]),
    ]
    wc = count_words(text)
    if min_words is not None:
        res.append(CheckResult(wc >= min_words, f"{path.name} >= {min_words} palabras", wc))
    if max_words is not None:
        res.append(CheckResult(wc <= max_words, f"{path.name} <= {max_words} palabras", wc))
    res.extend(build_prose_quality_checks(path, text))
    return res

def validate_history(path: Path, sections: List[str], min_words: int | None = None, max_words: int | None = None) -> List[CheckResult]:
    return validate_markdown_structure(
        path,
        sections,
        min_words=min_words,
        max_words=max_words,
        enforce_prose_quality=True,
    )

def validate_modelos_cuantitativo(path: Path) -> List[CheckResult]:
    """Verifica que la sección 3 de modelos.md contenga criterio cuantitativo explícito
    (número, desigualdad u orden de magnitud) — protocolo_v5 Paso 7 regla crítica."""
    text = read_text(path)
    match = re.search(r'##\s+(?:\d+\.\s*)?Dominio de validez cuantitativo\n(.*?)(?=##|\Z)', text, re.DOTALL)
    if not match:
        return [CheckResult(False, f"{path.name} sección 3 no encontrada")]
    section_text = match.group(1)
    has_quantitative = bool(re.search(
        r'\d[\d,\.]*\s*[<>\u2264\u2265]|[<>\u2264\u2265]\s*\d[\d,\.]*|\d+\s*%|orden\s+de\s+magnitud|\$[^$]*[<>][^$]*\$',
        section_text, re.IGNORECASE
    ))
    return [CheckResult(has_quantitative,
                        f"{path.name} sección 3 contiene criterio cuantitativo explícito",
                        section_text[:120].strip() if not has_quantitative else None)]

def validate_interpretacion(path: Path, mag_ids: Set[str], formula_ids: Set[str]) -> List[CheckResult]:
    """Valida estructura y consistencia de interpretacion.yaml.
    Incluye contrato de salida del tab e indicadores de errores comunes."""
    try:
        data = load_yaml(path)
    except Exception as e:
        return [CheckResult(False, "interpretacion.yaml YAML válido", str(e))]
    if not isinstance(data, dict):
        return [CheckResult(False, "interpretacion.yaml no es un mapping valido")]

    res: List[CheckResult] = []
    required_fields = ["version", "id", "leaf_id", "nombre", "scope", "dependencies", "targets"]
    missing = [k for k in required_fields if k not in data]
    res.append(CheckResult(not missing, "Campos obligatorios en interpretacion.yaml", missing))

    nombre = data.get("nombre", {})
    res.append(
        CheckResult(
            isinstance(nombre, dict) and "es" in nombre and "en" in nombre,
            "interpretacion.yaml: nombre con es/en",
            nombre,
        )
    )

    deps = data.get("dependencies", {}) or {}
    dep_mags = deps.get("magnitudes", []) if isinstance(deps, dict) else []
    dep_formulas = deps.get("formulas", []) if isinstance(deps, dict) else []
    res.append(
        CheckResult(
            isinstance(dep_mags, list) and len(dep_mags) > 0,
            "interpretacion.yaml: dependencies.magnitudes no vacio",
            dep_mags,
        )
    )
    res.append(
        CheckResult(
            isinstance(dep_formulas, list) and len(dep_formulas) > 0,
            "interpretacion.yaml: dependencies.formulas no vacio",
            dep_formulas,
        )
    )
    if mag_ids:
        bad_mags = [m for m in dep_mags if m not in mag_ids]
        res.append(
            CheckResult(
                not bad_mags,
                "interpretacion.yaml: dependencies.magnitudes apuntan a ids reales",
                bad_mags,
            )
        )
    if formula_ids:
        bad_formulas = [f for f in dep_formulas if f not in formula_ids]
        res.append(
            CheckResult(
                not bad_formulas,
                "interpretacion.yaml: dependencies.formulas apuntan a ids reales",
                bad_formulas,
            )
        )

    required_sections = [
        "summary",
        "physical_reading",
        "coherence",
        "model_validity",
        "graph_reading",
        "likely_errors",
        "next_step",
    ]

    output_contract = data.get("output_contract", {})
    oc_ok = isinstance(output_contract, dict)
    res.append(
        CheckResult(
            oc_ok,
            "interpretacion.yaml: output_contract es bloque valido",
            output_contract if not oc_ok else None,
        )
    )
    if oc_ok:
        sections = output_contract.get("sections", [])
        sections_ok = (
            isinstance(sections, list)
            and len(sections) > 0
            and all(isinstance(s, str) and bool(s.strip()) for s in sections)
        )
        res.append(
            CheckResult(
                sections_ok,
                "interpretacion.yaml: output_contract.sections lista valida",
                sections if not sections_ok else None,
            )
        )
        missing_sections = [s for s in required_sections if s not in set(sections if isinstance(sections, list) else [])]
        res.append(
            CheckResult(
                not missing_sections,
                "interpretacion.yaml: output_contract.sections incluye bloques obligatorios",
                missing_sections,
            )
        )
    else:
        res.append(
            CheckResult(
                False,
                "interpretacion.yaml: output_contract.sections lista valida",
                "output_contract no es dict",
            )
        )
        res.append(
            CheckResult(
                False,
                "interpretacion.yaml: output_contract.sections incluye bloques obligatorios",
                "output_contract no es dict",
            )
        )

    result_blocks = data.get("result_blocks", {})
    rb_ok = isinstance(result_blocks, dict)
    res.append(
        CheckResult(
            rb_ok,
            "interpretacion.yaml: result_blocks es bloque valido",
            result_blocks if not rb_ok else None,
        )
    )
    if rb_ok:
        missing_rb = [s for s in required_sections if s not in result_blocks]
        res.append(
            CheckResult(
                not missing_rb,
                "interpretacion.yaml: result_blocks incluye bloques obligatorios",
                missing_rb,
            )
        )

        bad_titles = []
        for sec in required_sections:
            block = result_blocks.get(sec, {})
            title = block.get("title", {}) if isinstance(block, dict) else {}
            title_ok = (
                isinstance(title, dict)
                and isinstance(title.get("es"), str)
                and bool(title.get("es").strip())
                and isinstance(title.get("en"), str)
                and bool(title.get("en").strip())
            )
            if not title_ok:
                bad_titles.append({"section": sec, "title": title})
        res.append(
            CheckResult(
                not bad_titles,
                "interpretacion.yaml: result_blocks.<seccion>.title con es/en",
                bad_titles,
            )
        )
    else:
        res.append(
            CheckResult(
                False,
                "interpretacion.yaml: result_blocks incluye bloques obligatorios",
                "result_blocks no es dict",
            )
        )
        res.append(
            CheckResult(
                False,
                "interpretacion.yaml: result_blocks.<seccion>.title con es/en",
                "result_blocks no es dict",
            )
        )

    targets = data.get("targets", {})
    res.append(CheckResult(isinstance(targets, dict) and len(targets) > 0, "interpretacion.yaml: targets no vacio", None))
    if isinstance(targets, dict) and targets:
        required_target_lists = [
            "summary_rules",
            "coherence_rules",
            "physical_reading_rules",
            "model_validity_rules",
            "graph_rules",
            "likely_errors",
            "next_step_rules",
        ]
        targets_missing_fields = []
        targets_bad_list_type = []
        targets_bad_rule_schema = []
        for target_id, target_block in targets.items():
            if not isinstance(target_block, dict):
                targets_missing_fields.append({"target": target_id, "missing": required_target_lists})
                continue

            missing_fields = [k for k in required_target_lists if k not in target_block]
            if missing_fields:
                targets_missing_fields.append({"target": target_id, "missing": missing_fields})

            for key in required_target_lists:
                rules = target_block.get(key)
                if not isinstance(rules, list) or len(rules) == 0:
                    targets_bad_list_type.append({"target": target_id, "field": key, "value": rules})
                    continue
                for ridx, rule in enumerate(rules):
                    if not isinstance(rule, dict):
                        targets_bad_rule_schema.append(
                            {"target": target_id, "field": key, "index": ridx, "error": "rule_no_dict"}
                        )
                        continue

                    text = rule.get("text", {})
                    text_ok = (
                        isinstance(text, dict)
                        and isinstance(text.get("es"), str)
                        and bool(text.get("es").strip())
                        and isinstance(text.get("en"), str)
                        and bool(text.get("en").strip())
                    )
                    rule_ok = (
                        isinstance(rule.get("id"), str)
                        and bool(rule.get("id").strip())
                        and isinstance(rule.get("when"), str)
                        and bool(rule.get("when").strip())
                        and isinstance(rule.get("status"), str)
                        and bool(rule.get("status").strip())
                        and text_ok
                    )
                    if not rule_ok:
                        targets_bad_rule_schema.append(
                            {
                                "target": target_id,
                                "field": key,
                                "index": ridx,
                                "error": "schema_invalido",
                            }
                        )
        res.append(
            CheckResult(
                not targets_missing_fields,
                "interpretacion.yaml: cada target incluye bloques de reglas obligatorios",
                targets_missing_fields,
            )
        )
        res.append(
            CheckResult(
                not targets_bad_list_type,
                "interpretacion.yaml: cada bloque de reglas por target es lista no vacia",
                targets_bad_list_type,
            )
        )
        res.append(
            CheckResult(
                not targets_bad_rule_schema,
                "interpretacion.yaml: reglas por target tienen id/when/status/text es/en",
                targets_bad_rule_schema,
            )
        )

        missing_likely = []
        for target_id, target_block in targets.items():
            if not isinstance(target_block, dict):
                missing_likely.append({"target": target_id, "reason": "target_no_dict"})
                continue
            le = target_block.get("likely_errors")
            if not isinstance(le, list) or len(le) == 0:
                missing_likely.append({"target": target_id, "reason": "likely_errors_vacio_o_invalido"})
        res.append(
            CheckResult(
                not missing_likely,
                "interpretacion.yaml: errores comunes (likely_errors) presentes por target",
                missing_likely,
            )
        )

    return res

def validate_cross_file_coherence(mag_path: Path, for_path: Path, interp_path: Path) -> List[CheckResult]:
    """Valida coherencia estricta entre magnitudes.yaml, formulas.yaml e interpretacion.yaml.
    Regla: si una variable objetivo aparece en fórmulas, debe existir en magnitudes y en
    interpretacion.targets. Además, dependencies debe estar alineado con ids reales.
    """
    try:
        mag_data = load_yaml(mag_path)
    except Exception as e:
        return [CheckResult(False, "coherencia: magnitudes.yaml YAML válido", str(e))]
    try:
        formula_data = load_yaml(for_path)
    except Exception as e:
        return [CheckResult(False, "coherencia: formulas.yaml YAML válido", str(e))]
    try:
        interp_data = load_yaml(interp_path)
    except Exception as e:
        return [CheckResult(False, "coherencia: interpretacion.yaml YAML válido", str(e))]

    mags = mag_data.get("magnitudes") if isinstance(mag_data, dict) else mag_data
    formulas = formula_data.get("formulas") if isinstance(formula_data, dict) else formula_data
    targets_block = interp_data.get("targets", {}) if isinstance(interp_data, dict) else {}
    deps_block = interp_data.get("dependencies", {}) if isinstance(interp_data, dict) else {}

    mag_ids: Set[str] = set()
    for item in mags or []:
        if isinstance(item, dict) and isinstance(item.get("id"), str) and item["id"].strip():
            mag_ids.add(item["id"].strip())

    formula_ids: Set[str] = set()
    formula_targets: Set[str] = set()
    for item in formulas or []:
        if not isinstance(item, dict):
            continue
        fid = item.get("id")
        if isinstance(fid, str) and fid.strip():
            formula_ids.add(fid.strip())

        rs = item.get("result_semantics", {})
        if isinstance(rs, dict):
            rt = rs.get("target")
            if isinstance(rt, str) and rt.strip():
                formula_targets.add(rt.strip())

        rearr = item.get("rearrangements", [])
        if isinstance(rearr, list):
            for r in rearr:
                if not isinstance(r, dict):
                    continue
                t = r.get("target")
                if isinstance(t, str) and t.strip():
                    formula_targets.add(t.strip())

    interp_targets: Set[str] = set()
    if isinstance(targets_block, dict):
        interp_targets = {k.strip() for k in targets_block.keys() if isinstance(k, str) and k.strip()}

    dep_mags = deps_block.get("magnitudes", []) if isinstance(deps_block, dict) else []
    dep_formulas = deps_block.get("formulas", []) if isinstance(deps_block, dict) else []
    dep_mag_set = {m.strip() for m in dep_mags if isinstance(m, str) and m.strip()} if isinstance(dep_mags, list) else set()
    dep_formula_set = {f.strip() for f in dep_formulas if isinstance(f, str) and f.strip()} if isinstance(dep_formulas, list) else set()

    missing_formula_targets_in_magnitudes = sorted(formula_targets - mag_ids)
    missing_formula_targets_in_interpretation = sorted(formula_targets - interp_targets)
    missing_interpretation_targets_in_magnitudes = sorted(interp_targets - mag_ids)
    bad_dep_magnitudes = sorted(dep_mag_set - mag_ids)
    bad_dep_formulas = sorted(dep_formula_set - formula_ids)
    missing_formula_ids_in_dep = sorted(formula_ids - dep_formula_set)
    missing_interpretation_targets_in_dep = sorted(interp_targets - dep_mag_set)

    return [
        CheckResult(
            not missing_formula_targets_in_magnitudes,
            "coherencia: targets de fórmulas existen en magnitudes.yaml",
            missing_formula_targets_in_magnitudes,
        ),
        CheckResult(
            not missing_formula_targets_in_interpretation,
            "coherencia: targets de fórmulas existen en interpretacion.yaml.targets",
            missing_formula_targets_in_interpretation,
        ),
        CheckResult(
            not missing_interpretation_targets_in_magnitudes,
            "coherencia: targets de interpretación existen en magnitudes.yaml",
            missing_interpretation_targets_in_magnitudes,
        ),
        CheckResult(
            not bad_dep_magnitudes,
            "coherencia: dependencies.magnitudes usa ids reales de magnitudes.yaml",
            bad_dep_magnitudes,
        ),
        CheckResult(
            not bad_dep_formulas,
            "coherencia: dependencies.formulas usa ids reales de formulas.yaml",
            bad_dep_formulas,
        ),
        CheckResult(
            not missing_formula_ids_in_dep,
            "coherencia: todas las fórmulas del leaf están declaradas en dependencies.formulas",
            missing_formula_ids_in_dep,
        ),
        CheckResult(
            not missing_interpretation_targets_in_dep,
            "coherencia: todos los targets de interpretación están declarados en dependencies.magnitudes",
            missing_interpretation_targets_in_dep,
        ),
    ]

def validate_english_files(leaf_dir: Path) -> List[CheckResult]:
    res = []
    for fname in ENGLISH_FILES:
        fpath = leaf_dir / fname
        if not fpath.exists():
            res.append(CheckResult(False, f"{fname} existe para validación de inglés", "archivo no encontrado"))
            continue
        text = read_text(fpath)
        ok = rough_english_check(text)
        res.append(CheckResult(ok, f"{fname} parece estar realmente en inglés", None if ok else "marcadores de español detectados"))
    return res

def validate_exact_files(leaf_dir: Path) -> List[CheckResult]:
    current = sorted([p.name for p in leaf_dir.iterdir() if p.is_file()])
    missing = [f for f in REQUIRED_FILES if f not in current]
    extra = [f for f in current if f not in REQUIRED_FILES]
    return [
        CheckResult(not missing, "No faltan archivos requeridos", missing),
        CheckResult(not extra, "No hay archivos extra dentro del leaf", extra),
    ]

def validate_mojibake_files(leaf_dir: Path) -> List[CheckResult]:
    """Valida archivo por archivo que no existan artefactos de mojibake.
    Si aparece mojibake, cada archivo afectado resta puntuación."""
    res: List[CheckResult] = []
    file_paths = sorted([p for p in leaf_dir.iterdir() if p.is_file()], key=lambda p: p.name.lower())
    for path in file_paths:
        text = read_text(path)
        hits = find_mojibake_lines(text, max_hits=8)
        res.append(CheckResult(
            not hits,
            f"{path.name} sin mojibake",
            hits if hits else None,
        ))
    return res

def validate_markdown_rendering_files(leaf_dir: Path) -> List[CheckResult]:
    """Checks every .md file for math rendering risks (ES and EN)."""
    res: List[CheckResult] = []
    md_paths = sorted(
        [p for p in leaf_dir.iterdir() if p.is_file() and p.suffix.lower() == ".md"],
        key=lambda p: p.name.lower(),
    )
    for path in md_paths:
        text = read_text(path)
        issues = find_markdown_math_render_issues(text, max_hits=12)
        if path.name.lower() in {"teoria.md", "teoria.en.md"}:
            remaining = max(0, 12 - len(issues))
            if remaining > 0:
                issues.extend(find_theory_inline_highlight_formula_issues(text, max_hits=remaining))
        remaining = max(0, 12 - len(issues))
        if remaining > 0:
            issues.extend(find_bare_formula_issues(text, max_hits=remaining))
        res.append(CheckResult(
            not issues,
            f"{path.name} sin riesgos de render matemático",
            issues if issues else None,
        ))
    return res

def find_workspace_root(leaf_dir: Path) -> Path | None:
    """Sube directorios hasta encontrar la raíz (la que contiene frontend/src/v2/...)."""
    candidate = leaf_dir
    for _ in range(20):
        if (candidate / "frontend" / "src" / "v2" / "components" / "graphs" / "dinamica" / "index.js").exists():
            return candidate
        candidate = candidate.parent
    return None


DYNAMICA_GRAPHS_INDEX = Path("frontend/src/v2/components/graphs/dinamica/index.js")


def route_graph_namespace(route: str) -> str:
    parts = [p for p in str(route or "").split("/") if p]
    try:
        idx = parts.index("mecanica")
        if idx + 1 < len(parts):
            return parts[idx + 1]
    except ValueError:
        pass
    return "dinamica"

def check_coord_bilingual_structure(content: str) -> Tuple[bool, List[str]]:
    missing: List[str] = []
    has_ui_lang = bool(re.search(r"\bconst\s+uiLang\s*=", content))
    has_translate_helper = bool(re.search(r"\bconst\s+(tt|t)\s*=\s*\(", content))
    if not has_ui_lang:
        missing.append("falta const uiLang")
    if not has_translate_helper:
        missing.append("falta helper de traducción (tt/t)")
        
    if re.search(r'\.replace\([^,]+,\s*","\)', content):
        if not re.search(r'(uiLang|lang|decSep|\?.*:)', content):
            missing.append("coma decimal hardcodeada (.replace('.', ',')) sin condicional de idioma")
            
    for m in re.finditer(r'<(div|button|Pill|span)[^>]*>\s*([A-ZÁÉÍÓÚ][a-záéíóúñ]+(?:\s+[a-zA-Záéíóúñ0-9\(\)]+){1,})\s*</\1>', content):
        text = m.group(2).strip()
        if not text.startswith("{") and " " in text and "=" not in text:
            missing.append(f"texto UI JSX hardcodeado detectado: '{text}'")
            break

    return (len(missing) == 0, missing)

def check_dcl_warning_i18n(root: Path) -> CheckResult:
    renderer_path = root / "frontend" / "src" / "v2" / "components" / "DCL" / "DclRenderer.jsx"
    if not renderer_path.exists():
        return CheckResult(
            False,
            "DCL renderer existe para localización de warnings",
            str(renderer_path),
        )
    content = renderer_path.read_text(encoding="utf-8", errors="replace")
    has_fn = "function localizeWarningMessage" in content
    has_usage = bool(re.search(r"localizeWarningMessage\s*\(\s*warning\s*,\s*lang\s*\)", content))
    ok = has_fn and has_usage
    details = None if ok else {
        "missing_function": not has_fn,
        "missing_usage": not has_usage,
    }
    return CheckResult(ok, "DCL warnings de interpretación con localización bilingüe", details)

def strip_js_comments(text: str) -> str:
    # Nota: simplificación suficiente para index.js del proyecto.
    no_block = re.sub(r"/\*.*?\*/", "", text, flags=re.DOTALL)
    no_line = re.sub(r"//.*?$", "", no_block, flags=re.MULTILINE)
    return no_line


def validate_graph_components(leaf_dir: Path, meta_data: dict) -> List[CheckResult]:
    """Comprueba que los gráficos declarados en meta.yaml existan como componentes funcionales:
    - Dcl / Svg : el archivo .jsx debe existir Y contener 'import profile from' (versión nueva).
    - Coord     : debe existir y tener estructura bilingüe mínima (uiLang + helper tt/t).
    """
    graficos = meta_data.get("graficos") or []
    leaf_id  = meta_data.get("id", "")

    if not graficos:
        return [CheckResult(True, "meta.yaml no declara gráficos — sin comprobación")]
    if not leaf_id:
        return [CheckResult(False, "meta.yaml no tiene campo 'id' — imposible buscar gráficos")]

    root = find_workspace_root(leaf_dir)
    if not root:
        return [CheckResult(False, "No se pudo localizar la raíz del workspace (frontend/src/v2/...)")]

    graph_namespace = route_graph_namespace(meta_data.get("ruta_relativa", "")) or str(meta_data.get("subbloque") or "dinamica")
    graphs_dir = root / "frontend" / "src" / "v2" / "components" / "graphs" / graph_namespace
    index_path = graphs_dir / "index.js"
    if not index_path.exists() and graph_namespace != "dinamica":
        graph_namespace = "dinamica"
        graphs_dir = root / "frontend" / "src" / "v2" / "components" / "graphs" / graph_namespace
        index_path = graphs_dir / "index.js"

    # --- Parsear import map: ComponentName -> ruta de archivo relativa a graphs_dir ----
    idx_text   = index_path.read_text(encoding="utf-8", errors="replace")
    active_idx = strip_js_comments(idx_text)
    import_map: Dict[str, str] = {}
    for m in re.finditer(r'import\s+(\w+)\s+from\s+"([^"]+)"', active_idx):
        import_map[m.group(1)] = m.group(2)  # e.g. "./Svg/TerceraLey..."

    # --- Parsear el bloque activo de export const graphs = { ... } ------------------
    export_match = re.search(r'export const graphs\s*=\s*\{(.*?)\n\};', active_idx, re.DOTALL)
    if not export_match:
        return [CheckResult(False, "index.js no contiene 'export const graphs = {...}'")]

    registered: Dict[str, Dict[str, str]] = {}
    for m in re.finditer(r'"([^"]+)"\s*:\s*\{([^}]+)\}', export_match.group(1)):
        lid  = m.group(1)
        body = m.group(2)
        registered[lid] = {k: v for k, v in re.findall(r'(\w+)\s*:\s*(\w+)', body)}

    leaf_components = registered.get(leaf_id, {})
    results: List[CheckResult] = []
    checked_dcl_warning_i18n = False

    for graph_type in graficos:
        component_name = leaf_components.get(graph_type)
        if not component_name:
            results.append(CheckResult(
                False,
                f"graficos[{graph_type}] declarado en meta pero no registrado en index.js",
                f"leaf_id={leaf_id}",
            ))
            continue

        rel_path = import_map.get(component_name)
        if not rel_path:
            results.append(CheckResult(
                False,
                f"graficos[{graph_type}] '{component_name}' no tiene import activo en index.js",
            ))
            continue

        # Resolver ruta absoluta  ("./Svg/Foo.jsx" → graphs_dir/Svg/Foo.jsx)
        file_path = (graphs_dir / rel_path).resolve()

        if graph_type == "Coord":
            # Comprobar existencia + estructura bilingüe mínima
            exists = file_path.exists()
            results.append(CheckResult(
                exists,
                f"graficos[Coord] '{component_name}' existe",
                None if exists else str(file_path),
            ))
            if exists:
                content = file_path.read_text(encoding="utf-8", errors="replace")
                coord_ok, coord_missing = check_coord_bilingual_structure(content)
                results.append(CheckResult(
                    coord_ok,
                    f"graficos[Coord] '{component_name}' estructura bilingüe mínima",
                    None if coord_ok else coord_missing,
                ))
        else:
            # Dcl / Svg: existencia + import profile
            if not file_path.exists():
                results.append(CheckResult(
                    False,
                    f"graficos[{graph_type}] '{component_name}' — archivo no encontrado",
                    str(file_path),
                ))
                continue
            content     = file_path.read_text(encoding="utf-8", errors="replace")
            has_profile = bool(re.search(r'import\s+profile\s+from', content))
            results.append(CheckResult(
                has_profile,
                f"graficos[{graph_type}] '{component_name}' importa profile (versión nueva)",
                None if has_profile else "No importa profile — versión antigua, debe rehacerse",
            ))
            if graph_type == "Dcl" and not checked_dcl_warning_i18n:
                results.append(check_dcl_warning_i18n(root))
                checked_dcl_warning_i18n = True

    return results


def validate_symbol_consistency(magnitude_symbols: Set[str], formula_symbols: Set[str], theory_text: str, ejemplos_text: str) -> List[CheckResult]:
    mag_norm = {normalize_symbol(s) for s in magnitude_symbols}
    mag_norm_lower = {s.lower() for s in mag_norm}
    allowed_lower = {s.lower() for s in ALLOWED_DIFFS}
    used = set()
    used |= {normalize_symbol(s) for s in formula_symbols}
    used |= {normalize_symbol(s) for s in extract_math_tokens(theory_text)}
    used |= {normalize_symbol(s) for s in extract_math_tokens(ejemplos_text)}

    def token_is_allowed(token: str) -> bool:
        if token in {"pi", "sqrt", "frac"}:
            return True
        if token in ALLOWED_DIFFS or token in mag_norm:
            return True

        token_lower = token.lower()
        if token_lower in allowed_lower or token_lower in mag_norm_lower:
            return True

        if token_lower in {"integral", "dot"}:
            return True

        # Notacion frecuente en cinematica:
        # xA, xB, vA, vB, aA, aB, xA0, xB0, vA0, vB0, etc.
        if re.fullmatch(r"[xvatr][A-Z](?:0)?", token):
            return True

        # Alias compactos para magnitudes primas y diferencias primas:
        # xp, yp, zp, tp, Dxp, Dyp, Dzp, Dtp.
        if token in {"xp", "yp", "zp", "tp", "Dxp", "Dyp", "Dzp", "Dtp"}:
            return True

        if token_lower.startswith("delta") and len(token_lower) > 5:
            tail = token[5:]
            tail_lower = token_lower[5:]
            if tail in mag_norm or tail_lower in mag_norm_lower or tail_lower in allowed_lower:
                return True

        for suffix in ("x", "y", "z", "i", "f"):
            if token_lower.endswith(suffix) and len(token_lower) > 1:
                base = token[:-1]
                base_lower = token_lower[:-1]
                if (
                    base in mag_norm
                    or base_lower in mag_norm_lower
                    or base_lower in allowed_lower
                ):
                    return True

        for tail in ("total", "tot"):
            if token_lower.endswith(tail) and len(token_lower) > len(tail):
                base = token[:-len(tail)]
                base_lower = token_lower[:-len(tail)]
                if (
                    base in mag_norm
                    or base_lower in mag_norm_lower
                    or base_lower in allowed_lower
                ):
                    return True

        if "_" in token:
            base = token.split("_", 1)[0]
            base_lower = base.lower()
            if (
                base in ALLOWED_DIFFS
                or base in mag_norm
                or base_lower in allowed_lower
                or base_lower in mag_norm_lower
            ):
                return True
        return False

    missing = []
    for token in sorted({u for u in used if u}):
        if not token_is_allowed(token):
            missing.append(token)
    return [CheckResult(not missing, "Todas las variables finitas usadas están definidas en magnitudes.yaml", missing)]

def validate_coord_semantic_alignment(leaf_dir: Path, meta_data: dict) -> List[CheckResult]:
    """
    Valida que el gráfico Coord use exactamente la semántica del leaf:
    - umbral estático con mu_e y F_ext_crit
    - régimen cinético con mu_c
    - ids coherentes con formulas.yaml e interpretacion.yaml
    """
    graficos = meta_data.get("graficos") or []
    leaf_id = meta_data.get("id", "")
    if "Coord" not in graficos:
        return [CheckResult(True, "No hay Coord declarado — sin comprobación semántica Coord")]

    root = find_workspace_root(leaf_dir)
    if not root:
        return [CheckResult(False, "No se pudo localizar la raíz del workspace para validar Coord semántico")]

    graphs_dir = root / "frontend" / "src" / "v2" / "components" / "graphs" / "dinamica"
    index_path = graphs_dir / "index.js"
    idx_text = index_path.read_text(encoding="utf-8", errors="replace")
    active_idx = strip_js_comments(idx_text)

    import_map = {}
    for m in re.finditer(r'import\s+(\w+)\s+from\s+"([^"]+)"', active_idx):
        import_map[m.group(1)] = m.group(2)

    export_match = re.search(r'export const graphs\s*=\s*\{(.*?)\n\};', active_idx, re.DOTALL)
    if not export_match:
        return [CheckResult(False, "index.js no contiene 'export const graphs = {...}'")]

    registered = {}
    for m in re.finditer(r'"([^"]+)"\s*:\s*\{([^}]+)\}', export_match.group(1)):
        lid = m.group(1)
        body = m.group(2)
        registered[lid] = {k: v for k, v in re.findall(r'(\w+)\s*:\s*(\w+)', body)}

    component_name = registered.get(leaf_id, {}).get("Coord")
    if not component_name:
        return [CheckResult(False, "No hay componente Coord registrado para el leaf", leaf_id)]

    rel_path = import_map.get(component_name)
    if not rel_path:
        return [CheckResult(False, "El componente Coord no tiene import activo en index.js", component_name)]

    file_path = (graphs_dir / rel_path).resolve()
    if not file_path.exists():
        return [CheckResult(False, "El archivo Coord no existe", str(file_path))]

    content = file_path.read_text(encoding="utf-8", errors="replace")

    checks = []

    # Debe usar mu_e para el umbral estático
    uses_mu_e_threshold = (
        "F_ext_crit" in content and
        re.search(r'F_ext_crit\s*=\s*.*mu_e', content) is not None
    )
    checks.append(CheckResult(
        uses_mu_e_threshold,
        "Coord usa mu_e para el umbral estático F_ext_crit",
        None if uses_mu_e_threshold else "Debe construirse con mu_e, no con mu_c/mu_k"
    ))

    # Debe usar mu_c en el régimen cinético
    uses_mu_c_dynamic = re.search(r'mu_c', content) is not None
    checks.append(CheckResult(
        uses_mu_c_dynamic,
        "Coord usa mu_c para el régimen cinético",
        None if uses_mu_c_dynamic else "Falta mu_c en la rama dinámica"
    ))

    # Debe distinguir explícitamente régimen estático y cinético
    has_regime_labels = ("regime" in content or "regimen" in content) and ("static" in content or "estatico" in content)
    checks.append(CheckResult(
        has_regime_labels,
        "Coord distingue explícitamente los regímenes",
        None if has_regime_labels else "Falta lectura explícita de régimen"
    ))

    # Debe evitar mu_k si el leaf usa mu_c
    has_mu_k = re.search(r'\bmu_k\b|\bmuK\b', content) is not None
    checks.append(CheckResult(
        not has_mu_k,
        "Coord no mezcla mu_k/muK con la convención del leaf",
        "Se detectó mu_k o muK" if has_mu_k else None
    ))

    return checks

def score_results(results: List[CheckResult]) -> float:
    if not results:
        return 0.0
    ok = sum(1 for r in results if r.ok)
    return round(5 * ok / len(results), 2)

def main():
    configure_console_encoding()
    parser = argparse.ArgumentParser()
    parser.add_argument("path")
    parser.add_argument("--json", action="store_true")
    args = parser.parse_args()

    input_path = Path(args.path)
    leaf_dir, tmp = extract_leaf_dir(input_path)

    all_results: Dict[str, List[CheckResult]] = {}
    all_results["files"] = validate_exact_files(leaf_dir)
    all_results["mojibake"] = validate_mojibake_files(leaf_dir)
    all_results["render_math"] = validate_markdown_rendering_files(leaf_dir)
    
    meta_path = leaf_dir / "meta.yaml"
    if meta_path.exists():
        meta_data = load_yaml(meta_path)
        all_results["meta"] = validate_meta(meta_path)
        all_results["meta_map"] = validate_meta_against_map(meta_path, leaf_dir)
    else:
        meta_data = {}
        all_results["meta"] = [CheckResult(False, "meta.yaml no existe", "No se puede validar meta sin el archivo")]
        all_results["meta_map"] = [CheckResult(False, "meta.yaml vs mapa: meta.yaml no existe")]

    mag_path = leaf_dir / "magnitudes.yaml"
    mag_symbols, mag_ids = set(), set()
    if mag_path.exists():
        mag_results, mag_symbols, mag_ids = validate_magnitudes(mag_path)
        all_results["magnitudes"] = mag_results
    else:
        all_results["magnitudes"] = [CheckResult(False, "magnitudes.yaml no existe")]

    for_path = leaf_dir / "formulas.yaml"
    formula_symbols, formula_ids = set(), set()
    if for_path.exists():
        formula_results, formula_symbols, formula_ids = validate_formulas(for_path)
        all_results["formulas"] = formula_results
    else:
        all_results["formulas"] = [CheckResult(False, "formulas.yaml no existe")]
    # Límites de palabras según plantilla_v5 y protocolo_v5 (documentos invariables del proyecto)
    # teoria.md: "entre 1000 y 1500 palabras" (protocolo_v5, Fase 4)
    # teoria.en.md: comparable, misma estructura, inglés real — sin límite explícito
    # modelos.md: "≥ 350 palabras" (protocolo_v5, Fase 3.2)
    # errores.md: "5 bloques desarrollados" — mínimo funcional para evitar bloques de una línea
    # ejemplos.md: "2 ejemplos completos" — mín 400: 2 ejemplos × ~200 palabras cada uno
    # aplicaciones.md: "5 aplicaciones desarrolladas" — mín 500: 5 aplicaciones × ~100 palabras cada una
    # historia.md: "≥ 300 palabras" (protocolo_v5, Fase 3.2)
    # Teoria: 1200+ palabras (Nivel 5 Blindado), max flexibilizado
    # Markdown Files
    markdown_files = [
        ("teoria.md", "teoria", THEORY_SECTIONS, 1200, 2000),
        ("teoria.en.md", "teoria_en", THEORY_SECTIONS_EN, 1200, 2000),
        ("modelos.md", "modelos", MODELOS_SECTIONS, 400, None),
        ("modelos.en.md", "modelos_en", MODELOS_SECTIONS_EN, 400, None),
        ("errores.md", "errores", ERRORES_SECTIONS, 500, None),
        ("errores.en.md", "errores_en", ERRORES_SECTIONS_EN, 300, None),
        ("historia.md", "historia", HISTORIA_SECTIONS, 300, None),
        ("historia.en.md", "historia_en", HISTORIA_SECTIONS_EN, 250, None),
    ]

    for fname, group, sections, minw, maxw in markdown_files:
        fpath = leaf_dir / fname
        if fpath.exists():
            if "historia" in group:
                all_results[group] = validate_history(fpath, sections, min_words=minw, max_words=maxw)
            else:
                all_results[group] = validate_markdown_structure(
                    fpath,
                    sections,
                    min_words=minw,
                    max_words=maxw,
                    enforce_prose_quality=group in {
                        "teoria",
                        "teoria_en",
                        "modelos",
                        "modelos_en",
                        "errores",
                        "errores_en",
                    },
                )
        else:
            all_results[group] = [CheckResult(False, f"{fname} no existe")]

    # Specialized checks
    if (leaf_dir / "modelos.md").exists():
        all_results["modelos_cuant"] = validate_modelos_cuantitativo(leaf_dir / "modelos.md")
    
    if (leaf_dir / "ejemplos.md").exists():
        all_results["ejemplos"] = validate_ejemplos(leaf_dir / "ejemplos.md", lang="es", min_words=800)
    if (leaf_dir / "ejemplos.en.md").exists():
        all_results["ejemplos_en"] = validate_ejemplos(leaf_dir / "ejemplos.en.md", lang="en", min_words=800)
    
    if (leaf_dir / "aplicaciones.md").exists():
        all_results["aplicaciones"] = validate_aplicaciones(leaf_dir / "aplicaciones.md", lang="es", min_words=800)
    if (leaf_dir / "aplicaciones.en.md").exists():
        all_results["aplicaciones_en"] = validate_aplicaciones(leaf_dir / "aplicaciones.en.md", lang="en", min_words=800)

    interp_path = leaf_dir / "interpretacion.yaml"
    if interp_path.exists():
        all_results["interpretacion"] = validate_interpretacion(interp_path, mag_ids, formula_ids)
    else:
        all_results["interpretacion"] = [CheckResult(False, "interpretacion.yaml no existe")]

    if mag_path.exists() and for_path.exists() and interp_path.exists():
        all_results["coherencia"] = validate_cross_file_coherence(mag_path, for_path, interp_path)
    else:
        missing_for_coherence = [
            name for name, p in [
                ("magnitudes.yaml", mag_path),
                ("formulas.yaml", for_path),
                ("interpretacion.yaml", interp_path),
            ] if not p.exists()
        ]
        all_results["coherencia"] = [
            CheckResult(
                False,
                "coherencia: archivos requeridos para validación cruzada",
                missing_for_coherence,
            )
        ]

    all_results["english"] = validate_english_files(leaf_dir)
    
    if (leaf_dir / "teoria.md").exists() and (leaf_dir / "ejemplos.md").exists():
        all_results["symbols"] = validate_symbol_consistency(
            mag_symbols,
            formula_symbols,
            read_text(leaf_dir / "teoria.md"),
            read_text(leaf_dir / "ejemplos.md"),
        )
    
    if meta_data:
        all_results["graphs"] = validate_graph_components(leaf_dir, meta_data)

    flat = [r for group in all_results.values() for r in group]
    ok_count = sum(1 for r in flat if r.ok)
    fail_count = len(flat) - ok_count
    total_count = len(flat)
    overall = score_results(flat)
    summary = {
        "overall_score_5": overall,
        "counts": {
            "ok": ok_count,
            "fail": fail_count,
            "total": total_count,
        },
        "groups": {name: {"score_5": score_results(group), "checks": [asdict(r) for r in group]} for name, group in all_results.items()}
    }

    if args.json:
        print(json.dumps(summary, ensure_ascii=False, indent=2))
    else:
        print("PHYXIO LEAF VALIDATOR")
        print(f"Puntuación global estimada: {overall} / 5\n")
        for name, group in all_results.items():
            print(f"[{name}] {score_results(group)} / 5")
            for item in group:
                status = "OK" if item.ok else "FAIL"
                print(f"  - {status}: {item.message}")
                if not item.ok and item.details:
                    print(f"      detalles: {item.details}")
            print()
        print("RESUMEN CHECKS")
        print(f"  - OK: {ok_count}")
        print(f"  - FAIL: {fail_count}")
        print(f"  - TOTAL: {total_count}")

    if tmp is not None:
        tmp.cleanup()

if __name__ == "__main__":
    main()
