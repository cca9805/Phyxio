#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# A. Cabecera

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
    "## Hipótesis",
    "## Dominio de validez cuantitativo",
    "## Señales de fallo del modelo",
    "## Modelo extendido o alternativo",
    "## Comparación operativa",
]

MODELOS_SECTIONS_EN = [
    "## Ideal model",
    "## Hypotheses",
    "## Quantitative validity domain",
    "## Model failure signals",
    "## Extended or alternative model",
    "## Operational comparison",
]

ERRORES_SECTIONS = [
    "## Errores conceptuales",
    "## Errores de modelo",
    "## Errores matemáticos",
    "## Errores de interpretación",
    "## Regla de autocontrol rápido",
]

ERRORES_SECTIONS_EN = [
    "## Conceptual errors",
    "## Model errors",
    "## Mathematical errors",
    "## Interpretation errors",
    "## Quick self-control rule",
]

HISTORIA_SECTIONS = [
    "## Problema histórico",
    "## Dificultad conceptual previa",
    "## Qué cambió",
    "## Impacto en la física",
    "## Conexión con física moderna",
]

HISTORIA_SECTIONS_EN = [
    "## Historical problem",
    "## Prior conceptual difficulty",
    "## What changed",
    "## Impact on physics",
    "## Connection with modern physics",
]

ENGLISH_FILES = [
    # Archivos comprobados explícitamente con secciones en inglés.
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
    # -- LaTeX math commands (not physics variables) ----------------------
    "approx", "quad", "qquad", "vec", "circ", "pm", "neq", "ge", "le",
    "sim", "parallel", "perp", "Rightarrow", "Longrightarrow",
    "checkmark", "begin", "end", "cases", "hat", "bar", "tilde",
    "times", "to", "in", "cap", "cup", "subset", "supset",
    "leq", "geq", "neq",
    # -- Trigonometric and math functions --------------------------------
    "sin", "cos", "tan", "arctan", "arcsin", "arccos", "sinh", "cosh", "tanh",
    "log", "ln", "exp",
    # -- YAML/JSON structure keys leaking from code blocks ---------------
    "constraints", "equation", "es", "en", "latex", "target", "message",
    "when", "solving", "for", "the", "be", "cannot", "no", "zero", "expr",
    # -- Common subscript labels (not standalone variables) ---------------
    "ext", "net", "rel", "fict", "app", "sys", "tot", "eff", "neta",
    # -- Combined notation (mí—g = mg, mí—a = ma, etc.) ---------------------
    "mg", "ma", "mv", "gt",
    # -- Units that appear in math contexts -------------------------------
    "km", "Hz", "kN", "kJ", "mm", "ms", "rpm", "Pa", "MPa", "kPa", "ft", "MW",
    # -- Spanish/English words leaked from text blocks ---------------------
    "puede", "ser", "para", "el", "la", "no", "movimiento",
    "constante", "sistema", "objeto", "cuerpo", "reales",
    "aceleracion", "velocidad", "fuerza", "masa", "tiempo",
    "pendiente", "bajo", "area", "rea", "vuelo",
    "max", "min",
    # -- Universal single-letter physics variables (classical mechanics) --
    # These are so fundamental they are expected to be defined in every context.
    "a", "v", "f", "n", "p", "r", "t", "x", "y", "c", "d", "g", "k",
    "h", "j", "b", "e", "q", "u", "z", "w",
    "A", "B", "X", "Y",
    "F", "T", "P", "W", "R", "L", "I", "M", "E", "G", "V", "S", "K",
    # -- Standard Greek-derived physics notation ------------------------
    "tau", "theta", "omega", "alpha", "phi", "mu", "sigma", "delta",
    "lambda", "Lambda", "beta", "gamma", "Gamma",
    "epsilon", "varepsilon", "zeta", "eta", "iota", "kappa",
    "nu", "xi", "Xi", "Pi", "rho", "varrho",
    "Sigma", "Phi", "varphi", "chi", "psi", "Psi", "Omega", "upsilon",
    # -- Universal compound physics notation -------------------------------
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
    # -- Words from real-world examples (not physics variables) -----------
    "The", "ball", "van", "rope", "contact", "force", "normal",
    "system", "magnitude", "coefficient", "cero", "cte", "roz",
    "ideal", "initial", "total", "loss", "out", "ap", "ef", "cf",
    "cor", "ll", "tr", "obs", "obj", "at", "Tierra",
    # -- Domain-specific subscript compounds used in named laws ------------
    "FAB", "FBA", "Nab", "Nba", "FAx", "FAy", "FBx", "FBy",
    "AB", "BA",
    "F_m", "Fm", "F_neta",
    # -- Vectors and components in multiple representations -------------
    "W_x", "W_y", "P_A", "P_B", "Ppar", "Pperp", "SumFx", "SumFy",
    "a_A", "a_B", "a_obs1", "a_obs2", "v_obs1", "v_obs2",
    "T_1", "T_2", "F_y", "E_k",
    # -- Momentum / collision / angular notation ---------------------
    "ij", "gh", "mgd", "os", "lim_m_2", "lambda_0",
    "O", "D",
    # -- Non-inertial frame notation -----------------------------------
    "F_ficticia", "F_coriolis", "F_centrifuga", "F_real", "F_f",
    "a_marco", "a_rel", "a_x", "a_z", "v_rel",
    "marco", "inercial", "Inercial", "Sistema", "NO",
    "avion", "sistema_no", "cf", "cor", "tr",
    # -- Multi-body system notation ------------------------------------
    "m_A", "m_B", "La", "a_rope",
    # -- Rotation and dynamics extended -------------------------------
    "MA", "MR", "MRa", "Ma", "Mmg",
    # -- Real-world example noise (from engineering scenarios) ---------
    "HIC", "Ship", "Sigma", "sigma_y", "Deltav", "Deltaa",
    "galones", "horas", "minutos", "toneladas",
    "aceleracion_sistema", "masa_total", "masa_1", "masa_2",
    "coeficiente_rozamiento", "componente_normal",
    "fuerza_normal", "fuerza_rozamiento",
    "erronea", "estatico", "maximo",
    "friccion", "ideal", "inicial", "tras", "vrelf", "vreli",
    # -- Spanish words and domain terminology leaked from prose --------
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
    # Artefactos típicos de mojibake UTF-8 leído como Latin-1 en contenido ES/EN.
    re.compile(r"\u00C3[\x80-\xBF]"),         # U+00C3 + continuation byte
    re.compile(r"\u00C2(?:[\x80-\xBF])?"),   # U+00C2 + optional continuation byte
    re.compile(r"\u00F0[\x80-\xBF]{2,3}"),  # U+00F0 + continuation bytes (emoji mojibake)
    re.compile(r"\u00E2[\x80-\xBF]{1,2}"),   # U+00E2 + 1-2 continuation bytes
    re.compile(r"\uFFFD"),  # replacement char
    # Generic visible mojibake clusters.
    re.compile(r"[\u00C3\u00C2\u00E2\u00F0][^\s]{0,3}"),
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
FORMULA_REFERENCE_PATTERN = re.compile(r"\{\{f:([A-Za-z0-9_.:-]+)\}\}")
ANY_FORMULA_REFERENCE_PATTERN = re.compile(r"\{\{f:[^}]+\}\}")
MAGNITUDE_REFERENCE_PATTERN = re.compile(r"\[\[(?:[^\]|]+\|)?([A-Za-z0-9_.:-]+)\]\]")
MAGNITUDE_EQUATION_PATTERN = re.compile(r"\[\[[^\]]+\]\]\s*(?:=|≈|<=|>=|<|>)|(?:=|≈|<=|>=|<|>)\s*\[\[[^\]]+\]\]")

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

_TEMPLATE_OPENING_ES = re.compile(
    r"^En\s+[\wáéíóúüñ\s]+\s+interesa\s", re.IGNORECASE
)

_TEMPLATE_OPENING_EN = re.compile(
    r"^In\s+[\w\s]+(?:level|context|interpretation|method|cases|questions|connections|synthesis)\s*,"
    r"\s+the\s+goal\s+is\s+to\s",
    re.IGNORECASE,
)

APPLICATION_MARKER_LINE_RE = re.compile(
    r"^(Variable dominante|Dominant variable|L[iíì]mite de validez|Validity limit)\s*:\s*(.+?)\s*$",
    re.IGNORECASE,
)

GENERIC_SECTION_RAW_SIMILARITY_THRESHOLD = 0.84
GENERIC_SECTION_CANONICAL_SIMILARITY_THRESHOLD = 0.90
APPLICATION_RAW_SIMILARITY_THRESHOLD = 0.82
APPLICATION_CANONICAL_SIMILARITY_THRESHOLD = 0.78
APPLICATION_MARKER_REPEAT_THRESHOLD = 3

_KEY_SECTIONS_VARIETY_NORM = {
    "nivel esencial", "nivel formal", "nivel estructural",
    "essential level", "formal level", "structural level",
}

DYNAMICA_GRAPHS_INDEX = Path("frontend/src/v2/components/graphs/dinamica/index.js")

@dataclass
class CheckResult:
    ok: bool
    message: str
    details: Any = None

# B. Utilidades Base

def count_words(text: str) -> int:
    """Cuenta palabras Unicode de forma robusta para checks de longitud mínima."""
    return len(re.findall(r"\b[\wáéíóúüñÁÉÍÓÚÜÑ]+\b", text, flags=re.UNICODE))

def normalize_prose_fragment(text: str) -> str:
    """Normaliza prosa eliminando LaTeX, acentos y puntuación para comparar texto."""
    text = re.sub(r"`[^`]*`", " ", text)
    text = re.sub(r"\\\((?:\\.|[^\\])*?\\\)", " ", text)
    text = re.sub(r"\\\[(?:\\.|[^\\])*?\\\]", " ", text)
    text = re.sub(r"(?<!\\)\$(?:\\.|[^$])*(?<!\\)\$", " ", text)
    text = unicodedata.normalize("NFKD", text)
    text = text.encode("ascii", "ignore").decode("ascii")
    text = re.sub(r"[^a-zA-Z0-9\s]", " ", text).lower()
    text = re.sub(r"\s+", " ", text).strip()
    return text

def read_text(path: Path) -> str:
    """Lee archivos del leaf en UTF-8 tolerando caracteres defectuosos."""
    return path.read_text(encoding="utf-8", errors="replace")

def load_yaml(path: Path) -> Any:
    """Carga YAML y devuelve un error normalizado si el archivo es inválido."""
    try:
        return yaml.safe_load(read_text(path))
    except Exception as e:
        raise ValueError(f"{path.name}: YAML inválido ({type(e).__name__}): {e}")

def configure_console_encoding() -> None:
    """Configura la salida UTF-8 de la consola para reducir mojibake en terminal."""
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
    """Resuelve una ruta de entrada como directorio leaf o ZIP temporal extraído."""
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

# C. Utilidades Markdown / Texto

def find_duplicate_long_paragraphs(text: str, min_words: int = 35) -> List[Dict[str, Any]]:
    """Detecta párrafos largos repetidos casi literalmente dentro de un markdown."""
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
    """Detecta frases largas repetidas mecánicamente para penalizar texto plantillado."""
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
    """Construye checks reutilizables contra duplicación y monotonía de prosa."""
    dup_paragraphs = find_duplicate_long_paragraphs(text)
    repeated_sentences = find_repeated_long_sentences(text)
    generic_template_issues = []
    if path.name.lower() not in {"aplicaciones.md", "aplicaciones.en.md"}:
        generic_template_issues = find_generic_markdown_template_issues(text)
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
        CheckResult(
            not generic_template_issues,
            f"{path.name} sin secciones internas clónicas o plantilladas",
            generic_template_issues,
        ),
    ]

def find_missing_sections(text: str, required_sections: List[str]) -> List[str]:
    """Comprueba por presencia literal qué secciones obligatorias faltan en el texto."""
    return [s for s in required_sections if s not in text]

def parse_markdown_headings(text: str) -> List[Tuple[int, int, str]]:
    """Extrae encabezados markdown con línea, nivel y título limpio."""
    headings: List[Tuple[int, int, str]] = []
    for lineno, line in enumerate(text.splitlines(), start=1):
        line = line.lstrip("\ufeff")
        m = re.match(r"^(#{1,6})\s+(.+?)\s*$", line)
        if m:
            headings.append((lineno, len(m.group(1)), m.group(2).strip()))
    return headings

def repair_mojibake(text: str) -> str:
    """Intenta reparar texto con artefactos típicos de codificación mojibake."""
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
    """Normaliza títulos de encabezado para compararlos sin acentos ni símbolos."""
    title = repair_mojibake(title)
    cleaned = unicodedata.normalize("NFKD", title.strip().lower())
    cleaned = "".join(ch for ch in cleaned if not unicodedata.combining(ch))
    cleaned = re.sub(r"[`*_~]", "", cleaned)
    cleaned = cleaned.replace("-", " ")
    cleaned = re.sub(r"[^0-9a-z\s]", " ", cleaned)
    cleaned = re.sub(r"\s+", " ", cleaned).strip()
    return cleaned

def heading_matches(actual_norm: str, expected_norm: str) -> bool:
    """Permite matching flexible entre títulos normalizados de secciones."""
    if actual_norm == expected_norm:
        return True
    if len(expected_norm.split()) >= 2:
        return actual_norm.startswith(expected_norm + " ") or actual_norm.startswith(expected_norm + ":")
    return False

def check_required_emoji_prefixes(
    text: str,
    required_sections: List[str],
) -> List[str]:
    """Detecta encabezados que deberían llevar emoji y aparecen sin su prefijo."""
    # Construye el mapa título normalizado -> emoji obligatorio según la plantilla.
    required_map: Dict[str, List[str]] = {}
    for sec in required_sections:
        m = re.match(r"^#{1,6}\s+(.+?)\s*$", sec)
        if not m:
            continue
        raw = m.group(1)
        norm = normalize_heading_title(raw)
        if "nivel esencial" in norm or "essential level" in norm:
            required_map[norm] = ["🟢"]
        elif "nivel formal" in norm or "formal level" in norm:
            required_map[norm] = ["🔵"]
        elif "nivel estructural" in norm or "structural level" in norm:
            required_map[norm] = ["🔴"]

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
            expected_emojis = required_map[title_norm]
            if not any(expected_emoji in title_raw for expected_emoji in expected_emojis):
                issues.append(
                    f"L{lineno}: falta prefijo {expected_emojis[0]} en encabezado: {title_raw!r}"
                )
    return issues

def find_placeholder_lines(text: str) -> List[str]:
    """Localiza líneas con marcadores de plantilla o texto pendiente de rellenar."""
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
    """Resume líneas con tokens de mojibake para reportarlas por archivo."""
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

def find_markdown_math_render_issues(text: str, formula_ids: Set[str] | None = None, max_hits: int = 12) -> List[str]:
    """Detecta patrones markdown que suelen romper el render matemático en frontend."""
    issues: List[str] = []
    in_code_block = False
    in_math_block = False
    formula_ids = formula_ids or set()

    for lineno, line in enumerate(text.splitlines(), start=1):
        stripped = line.strip()

        if stripped.startswith("```"):
            in_code_block = not in_code_block
            continue
        if in_code_block:
            continue

        if re.search(r"\$\$.+\$\$", stripped):
            issues.append(f"L{lineno}: formula en $$ invalida; usar referencia {{{{f:id_formula}}}}: {stripped[:140]}")
            if len(issues) >= max_hits:
                break
            continue

        if stripped == "$$":
            in_math_block = not in_math_block
            issues.append(f"L{lineno}: bloque $$ invalido; usar referencia {{{{f:id_formula}}}}")
            if len(issues) >= max_hits:
                break
            continue

        if in_math_block:
            if len(issues) >= max_hits:
                break
            continue

        for ref in ANY_FORMULA_REFERENCE_PATTERN.finditer(line):
            ref_text = ref.group(0)
            if stripped != ref_text:
                issues.append(f"L{lineno}: referencia de formula inline invalida; debe estar aislada en su propia linea (con salto de linea antes y despues): {ref_text}")
                if len(issues) >= max_hits:
                    break
            m_ref = FORMULA_REFERENCE_PATTERN.fullmatch(ref_text)
            if not m_ref:
                issues.append(f"L{lineno}: referencia de formula mal formada; usar {{{{f:id_formula}}}}: {ref_text}")
                continue
            fid = m_ref.group(1)
            if formula_ids and fid not in formula_ids:
                issues.append(f"L{lineno}: referencia de formula sin id en formulas.yaml: {ref_text}")
            if len(issues) >= max_hits:
                break
        if len(issues) >= max_hits:
            break

        if len(re.findall(r"(?<!\\)\$", line)) % 2 == 1:
            issues.append(f"L{lineno}: delimitadores '$' desbalanceados")
        if line.count(r"\(") != line.count(r"\)"):
            issues.append(f"L{lineno}: delimitadores '\\(' '\\)' desbalanceados")

        # Check for HTML comments (often leak to UI)
        if "<!--" in line and "-->" in line:
            issues.append(f"L{lineno}: comentario HTML detectado; no usar comentarios <!-- ... --> en archivos markdown")
            if len(issues) >= max_hits: break

        # Check for legacy syntax [math](var:id) or [text](var:id)
        if re.search(r'\[.*?\]\(var:.*?\)', line):
            issues.append(f"L{lineno}: sintaxis legacy detectada [texto](var:id); usar [[id]]")
            if len(issues) >= max_hits: break

        # Check for broken LaTeX or empty math blocks
        if re.search(r'\$\s*\$|\\\(\s*\\\)', line):
            issues.append(f"L{lineno}: bloque de matematicas vacio o roto detectado")
            if len(issues) >= max_hits: break

        # Check for suspicious math blocks (e.g. $ followed by too many spaces or nonsense)
        if re.search(r'\$\s{2,}.*?\$|\\\(\s{2,}.*?\\\)', line):
            issues.append(f"L{lineno}: bloque de matematicas con espaciado interno sospechoso")
            if len(issues) >= max_hits: break

        # Check for backticks around magnitudes or segments containing magnitudes
        if re.search(r'`.*?\[\[.*?\]\].*?`', line):
            issues.append(f"L{lineno}: magnitud entre backticks detectada; las etiquetas [[id]] no funcionan dentro de ` `")
            if len(issues) >= max_hits: break

        for math_span in INLINE_MATH_SPAN_PATTERN.findall(line):
            expr = _strip_inline_math_delimiters(math_span)
            if _formula_is_important(expr):
                snippet = stripped if len(stripped) <= 140 else stripped[:137] + "..."
                issues.append(f"L{lineno}: formula inline invalida; usar referencia {{{{f:id_formula}}}}: {snippet}")
                break

        # allow manual equations if they look like external/prose references
        if MAGNITUDE_EQUATION_PATTERN.search(line) and not FORMULA_REFERENCE_PATTERN.search(line):
            # We allow [[id]] = ... if it's meant to be an external formula reference (not in formulas.yaml)
            pass
        elif MAGNITUDE_EQUATION_PATTERN.search(line):
            snippet = stripped if len(stripped) <= 140 else stripped[:137] + "..."
            issues.append(f"L{lineno}: formula con magnitudes [[id]] invalida; usar referencia {{{{f:id_formula}}}}: {snippet}")

        if RISKY_TEXT_UNITS_PATTERN.search(line):
            issues.append(
                f"L{lineno}: unidad riesgosa '\\text{{...\\cdot...}}^n'; usar '\\mathrm{{kg\\cdot m^2}}' o '\\text{{kg}}\\cdot\\text{{m}}^2'"
            )

        plain = strip_inline_math(line)
        # Check for dimensional analysis to enforce Blue Notation Style Phyxio v5
        if re.search(r'\[[MLT][\sMLT]*\^[-0-9]+\]', plain) or re.search(r'\[[MLT][\sMLT]*[⁻¹²³⁴⁵⁶⁷⁸⁹⁰]+\]', plain):
            if not re.search(r'`.*?\[[MLT].*?\].*?`', line):
                 issues.append(f"L{lineno}: analisis dimensional detectado; usar **Estilo de Notación Azul Phyxio v5** (backticks + Unicode, ej: `[M L T⁻²]`) para acabado premium")
                 if len(issues) >= max_hits: break
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
    """Quita delimitadores inline de una fórmula breve para analizar su contenido."""
    token = token.strip()
    if token.startswith(r"\(") and token.endswith(r"\)"):
        return token[2:-2].strip()
    if token.startswith("$") and token.endswith("$"):
        return token[1:-1].strip()
    return token

def _formula_is_important(expr: str) -> bool:
    """Decide si una formula declarativa debe referenciarse como {{f:id_formula}}."""
    compact = re.sub(r"\s+", "", expr)
    if len(compact) < 4:
        return False
    if any(marker in expr for marker in IMPORTANT_FORMULA_MARKERS):
        # Dimensional analysis exclusion: avoid flagging [M L T] checks as missing formula references
        if "[" in expr and "]" in expr and ("M" in expr or "L" in expr or "T" in expr):
            return False
        return True
    # Despeje típico: variable a la izquierda de '='
    if re.search(r"^[A-Za-z\\][A-Za-z0-9_{}\\^]*\s*=", expr):
        return True
    return False

def find_theory_inline_highlight_formula_issues(text: str, max_hits: int = 8) -> List[str]:
    """En secciones clave de teoria, las formulas declarativas deben referenciarse como {{f:id_formula}}."""
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
                f"L{lineno}: formula declarativa inline en nivel esencial/formal/estructural; usar referencia {{{{f:id_formula}}}}: {snippet}"
            )
            if len(issues) >= max_hits:
                break

    return issues

def find_bare_formula_issues(text: str, max_hits: int = 8) -> List[str]:
    """Detecta fórmulas tipo variable = expresión fuera de delimitadores LaTeX."""
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
        if "$$" in stripped:
            continue

        # Remove portions already inside math delimiters
        plain = strip_inline_math(line)

        for m in _BARE_FORMULA_RE.finditer(plain):
            rhs = m.group(2).strip()[:60]
            if _BARE_MATH_INDICATOR_RE.search(rhs) or re.search(r"[A-Za-z]", rhs):
                snippet = stripped if len(stripped) <= 140 else stripped[:137] + "..."
                issues.append(
                    f"L{lineno}: formula textual invalida; usar referencia {{{{f:id_formula}}}}: {snippet}"
                )
                break  # Un único issue por línea.

        if len(issues) >= max_hits:
            break

    return issues

def _extract_section_bodies(text: str) -> Dict[str, str]:
    """Separa un markdown en {encabezado_normalizado: cuerpo} para secciones ##."""
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
    """Calcula similitud léxica entre dos cuerpos de sección."""
    from difflib import SequenceMatcher
    wa = normalize_prose_fragment(a).split()
    wb = normalize_prose_fragment(b).split()
    if not wa or not wb:
        return 0.0
    return SequenceMatcher(None, wa, wb).ratio()

def find_theory_variety_issues(text: str) -> List[str]:
    """Detecta teoría monótona o excesivamente plantillada."""
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

def extract_numbered_h2_sections(text: str) -> List[Dict[str, Any]]:
    """Extrae secciones `## n. ...` preservando número, título y cuerpo."""
    headings = parse_markdown_headings(text)
    h2_headings = [(lineno, title) for lineno, level, title in headings if level == 2]
    lines = text.splitlines()
    sections: List[Dict[str, Any]] = []

    for idx, (lineno, title) in enumerate(h2_headings):
        m = re.match(r"^\s*(\d+)\.\s*(.+?)\s*$", title)
        if not m:
            continue
        next_lineno = h2_headings[idx + 1][0] if idx + 1 < len(h2_headings) else len(lines) + 1
        body = "\n".join(lines[lineno:next_lineno - 1]).strip()
        sections.append({
            "line": lineno,
            "number": int(m.group(1)),
            "heading": title,
            "title": m.group(2).strip(),
            "body": body,
        })
    return sections

def extract_markdown_sections_by_level(text: str, level: int) -> List[Dict[str, Any]]:
    """Extrae secciones markdown de un nivel fijo con título y cuerpo."""
    headings = parse_markdown_headings(text)
    level_headings = [(lineno, title) for lineno, heading_level, title in headings if heading_level == level]
    lines = text.splitlines()
    sections: List[Dict[str, Any]] = []

    for idx, (lineno, title) in enumerate(level_headings):
        next_lineno = level_headings[idx + 1][0] if idx + 1 < len(level_headings) else len(lines) + 1
        body = "\n".join(lines[lineno:next_lineno - 1]).strip()
        sections.append({
            "line": lineno,
            "level": level,
            "heading": title,
            "title": title.strip(),
            "body": body,
        })
    return sections

def _split_application_body_and_markers(body: str) -> Tuple[str, Dict[str, str]]:
    """Separa el cuerpo en prosa libre y marcadores obligatorios de aplicaciones."""
    prose_lines: List[str] = []
    markers: Dict[str, str] = {}

    for line in body.splitlines():
        stripped = line.strip()
        m = APPLICATION_MARKER_LINE_RE.match(stripped)
        if not m:
            prose_lines.append(line)
            continue
        label_norm = normalize_heading_title(m.group(1))
        content = m.group(2).strip()
        if "variable dominante" in label_norm or "dominant variable" in label_norm:
            markers["variable"] = content
        elif "limite de validez" in label_norm or "validity limit" in label_norm:
            markers["limit"] = content

    return "\n".join(prose_lines).strip(), markers

def _canonicalize_section_fragment(text: str, title: str) -> str:
    """Normaliza un fragmento y neutraliza el título para detectar clones disfrazados."""
    canonical = normalize_prose_fragment(text)
    title_norm = normalize_prose_fragment(title)

    if title_norm:
        canonical = re.sub(rf"\b{re.escape(title_norm)}\b", " contexto ", canonical)
        for token in title_norm.split():
            if len(token) >= 5:
                canonical = re.sub(rf"\b{re.escape(token)}\b", " contexto ", canonical)

    canonical = re.sub(r"\b(?:en|in)\s+contexto\b", " contexto ", canonical)
    canonical = re.sub(r"\bcontexto(?:\s+contexto)+\b", " contexto ", canonical)
    canonical = re.sub(r"\s+", " ", canonical).strip()
    return canonical

def _first_long_sentence(text: str, min_words: int = 12) -> str:
    """Devuelve la primera frase suficientemente larga para detectar aperturas plantilla."""
    for sentence in re.split(r"(?<=[.!?])\s+|\n+", text):
        sentence = sentence.strip()
        if count_words(sentence) >= min_words:
            return sentence
    return ""

def find_generic_markdown_template_issues(text: str) -> List[str]:
    """Detecta secciones internas demasiado parecidas en cualquier markdown estructurado."""
    issues: List[str] = []
    headings = parse_markdown_headings(text)
    level_counter = Counter(level for _, level, _ in headings if level >= 2)
    candidate_levels = [level for level, count in level_counter.items() if count >= 3]
    if not candidate_levels:
        return issues

    level = min(candidate_levels)
    sections = extract_markdown_sections_by_level(text, level)
    sections = [section for section in sections if count_words(section["body"]) >= 35]
    if len(sections) < 3:
        return issues

    prepared: List[Dict[str, Any]] = []
    for section in sections:
        prepared.append({
            **section,
            "canon_body": _canonicalize_section_fragment(section["body"], section["title"]),
        })

    similar_pairs: List[str] = []
    for i, left in enumerate(prepared):
        for right in prepared[i + 1:]:
            raw_sim = _section_similarity(left["body"], right["body"])
            canon_sim = _section_similarity(left["canon_body"], right["canon_body"])
            if (
                raw_sim >= GENERIC_SECTION_RAW_SIMILARITY_THRESHOLD
                or canon_sim >= GENERIC_SECTION_CANONICAL_SIMILARITY_THRESHOLD
            ):
                similar_pairs.append(
                    f"Secciones '{left['title']}' y '{right['title']}' demasiado similares "
                    f"(raw={raw_sim:.0%}, canon={canon_sim:.0%})"
                )
    if similar_pairs:
        issues.extend(similar_pairs[:6])

    opening_counter: Counter[str] = Counter()
    opening_samples: Dict[str, str] = {}
    for section in prepared:
        opening = _first_long_sentence(section["body"])
        canon_opening = _canonicalize_section_fragment(opening, section["title"])
        if count_words(canon_opening) >= 10:
            opening_counter[canon_opening] += 1
            opening_samples.setdefault(canon_opening, opening[:140].strip())
    for canon_opening, repeats in opening_counter.items():
        if repeats >= APPLICATION_MARKER_REPEAT_THRESHOLD:
            issues.append(
                f"{repeats} secciones arrancan con la misma frase-esqueleto: "
                f"{opening_samples[canon_opening]!r}"
            )

    return issues[:8]

def find_aplicaciones_template_issues(text: str) -> List[str]:
    """Detecta aplicaciones demasiado similares entre sí dentro del mismo archivo."""
    issues: List[str] = []
    sections = extract_numbered_h2_sections(text)
    if len(sections) < 2:
        return issues

    prepared: List[Dict[str, Any]] = []
    for section in sections:
        prose, markers = _split_application_body_and_markers(section["body"])
        prepared.append({
            **section,
            "prose": prose,
            "markers": markers,
            "canon_prose": _canonicalize_section_fragment(prose, section["title"]),
        })

    similar_pairs: List[str] = []
    for i, left in enumerate(prepared):
        for right in prepared[i + 1:]:
            raw_sim = _section_similarity(left["prose"], right["prose"])
            canon_sim = _section_similarity(left["canon_prose"], right["canon_prose"])
            if (
                raw_sim >= APPLICATION_RAW_SIMILARITY_THRESHOLD
                or canon_sim >= APPLICATION_CANONICAL_SIMILARITY_THRESHOLD
            ):
                similar_pairs.append(
                    f"Aplicaciones {left['number']} y {right['number']} demasiado similares "
                    f"(raw={raw_sim:.0%}, canon={canon_sim:.0%})"
                )
    issues.extend(similar_pairs[:6])

    opening_counter: Counter[str] = Counter()
    opening_samples: Dict[str, str] = {}
    for section in prepared:
        opening = _first_long_sentence(section["prose"])
        canon_opening = _canonicalize_section_fragment(opening, section["title"])
        if count_words(canon_opening) >= 10:
            opening_counter[canon_opening] += 1
            opening_samples.setdefault(canon_opening, opening[:140].strip())
    for canon_opening, repeats in opening_counter.items():
        if repeats >= APPLICATION_MARKER_REPEAT_THRESHOLD:
            issues.append(
                f"{repeats} aplicaciones arrancan con la misma frase-esqueleto: "
                f"{opening_samples[canon_opening]!r}"
            )

    for marker_key, marker_label in (("variable", "Variable dominante"), ("limit", "Límite de validez")):
        marker_counter: Counter[str] = Counter()
        marker_samples: Dict[str, str] = {}
        marker_sections: Dict[str, List[int]] = {}
        for section in prepared:
            marker_text = section["markers"].get(marker_key, "").strip()
            canon_marker = _canonicalize_section_fragment(marker_text, section["title"])
            if count_words(canon_marker) < 4:
                continue
            marker_counter[canon_marker] += 1
            marker_samples.setdefault(canon_marker, marker_text[:140].strip())
            marker_sections.setdefault(canon_marker, []).append(section["number"])
        for canon_marker, repeats in marker_counter.items():
            if repeats >= APPLICATION_MARKER_REPEAT_THRESHOLD:
                issues.append(
                    f"{marker_label} repetido mecánicamente en aplicaciones "
                    f"{marker_sections[canon_marker]}: {marker_samples[canon_marker]!r}"
                )

    return issues[:10]

def analyze_required_heading_structure(text: str, required_sections: List[str]) -> Dict[str, Any]:
    """Analiza ausencia, nivel, duplicados y orden de una plantilla de secciones."""
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

# D. Utilidades Semánticas Nuevas

def _safe_yaml_list(data: Any) -> List[Dict[str, Any]]:
    """Normaliza un valor YAML como lista de diccionarios segura."""
    if isinstance(data, list):
        return [x for x in data if isinstance(x, dict)]
    if isinstance(data, dict):
        for key in ("magnitudes", "formulas", "items", "data"):
            value = data.get(key)
            if isinstance(value, list):
                return [x for x in value if isinstance(x, dict)]
    return []

def _normalize_text_for_search(text: str) -> str:
    """Normaliza texto para búsquedas semánticas tolerantes a acentos y mayúsculas."""
    text = unicodedata.normalize("NFKD", text)
    text = "".join(ch for ch in text if not unicodedata.combining(ch))
    return text.lower()

def _text_contains_token(text: str, token: str) -> bool:
    """Busca un token como unidad léxica dentro de un texto normalizado."""
    if not token:
        return False
    text_n = _normalize_text_for_search(text)
    token_n = _normalize_text_for_search(str(token).strip())
    if not token_n:
        return False
    if re.search(rf"(?<![A-Za-z0-9_]){re.escape(token_n)}(?![A-Za-z0-9_])", text_n):
        return True
    return False

def _read_optional_text(path: Path) -> str:
    """Lee un archivo opcional y devuelve cadena vacía si no existe."""
    return read_text(path) if path.exists() else ""

def _extract_markdown_section(text: str, heading: str) -> str:
    """
    Devuelve el contenido de una sección markdown hasta el siguiente heading
    de igual o menor nivel.
    """
    lines = text.splitlines()
    start_idx = None
    start_level = None

    heading_target = normalize_heading_title(re.sub(r"^#{1,6}\s+", "", heading.strip()))

    for i, line in enumerate(lines):
        m = re.match(r"^(#{1,6})\s+(.+?)\s*$", line.strip())
        if not m:
            continue
        level = len(m.group(1))
        title = m.group(2).strip()
        title_key = normalize_heading_title(title)
        if title_key == heading_target or title_key.endswith(heading_target):
            start_idx = i + 1
            start_level = level
            break

    if start_idx is None:
        return ""

    collected = []
    for line in lines[start_idx:]:
        m = re.match(r"^(#{1,6})\s+(.+?)\s*$", line.strip())
        if m and len(m.group(1)) <= start_level:
            break
        collected.append(line)

    return "\n".join(collected).strip()

def _formula_ref_lines_outside_section(text: str, allowed_heading: str) -> List[str]:
    """Devuelve referencias {{f:id}} que aparecen fuera de una sección concreta."""
    lines = text.splitlines()
    allowed_target = _normalize_text_for_search(re.sub(r"^#{1,6}\s+", "", allowed_heading.strip()))
    in_allowed = False
    allowed_level = 0
    issues: List[str] = []

    for lineno, line in enumerate(lines, start=1):
        heading = re.match(r"^(#{1,6})\s+(.+?)\s*$", line.strip())
        if heading:
            level = len(heading.group(1))
            title = _normalize_text_for_search(heading.group(2).strip())
            if title == allowed_target or title.endswith(allowed_target):
                in_allowed = True
                allowed_level = level
            elif in_allowed and level <= allowed_level:
                in_allowed = False
                allowed_level = 0

        if FORMULA_REFERENCE_PATTERN.search(line) and not in_allowed:
            snippet = line.strip()
            if len(snippet) > 140:
                snippet = snippet[:137] + "..."
            issues.append(f"L{lineno}: fórmula fuera de nivel formal: {snippet}")
            if len(issues) >= 12:
                break

    return issues

def _markdown_words_without_formula_refs(text: str) -> List[str]:
    """Cuenta palabras reales ignorando referencias de fórmula, magnitudes y signos sueltos."""
    stripped = FORMULA_REFERENCE_PATTERN.sub(" ", text)
    stripped = MAGNITUDE_REFERENCE_PATTERN.sub(" ", stripped)
    stripped = re.sub(r"```.*?```", " ", stripped, flags=re.DOTALL)
    return re.findall(r"[^\W\d_]{2,}", stripped, flags=re.UNICODE)

def find_required_section_content_issues(text: str, required_sections: List[str], min_words: int = 8) -> List[str]:
    """Detecta secciones obligatorias vacías o prácticamente vacías."""
    issues: List[str] = []
    for heading in required_sections:
        content = _extract_markdown_section(text, heading)
        # Los títulos raíz agrupan subsecciones; no deben evaluarse como sección vacía.
        if heading.startswith("# ") and not heading.startswith("## "):
            continue
        word_count = len(_markdown_words_without_formula_refs(content))
        if word_count < min_words:
            issues.append(f"{heading}: sección vacía o sin desarrollo suficiente (palabras={word_count})")
    return issues[:12]

def find_empty_example_part_issues(text: str, lang: str = "es") -> List[str]:
    """Detecta líneas tipo 'Apartado (a):' / 'Part (a):' sin desarrollo posterior."""
    issues: List[str] = []
    lines = text.splitlines()
    marker = r"(Apartado|Parte)\s*\([a-z]\)\s*:?\s*$" if lang == "es" else r"Part\s*\([a-z]\)\s*:?\s*$"
    for idx, line in enumerate(lines):
        if not re.search(marker, line.strip(), flags=re.IGNORECASE):
            continue
        following: List[str] = []
        for nxt in lines[idx + 1: idx + 5]:
            stripped = nxt.strip()
            if not stripped:
                continue
            if stripped.startswith("#"):
                break
            following.append(stripped)
        words = _markdown_words_without_formula_refs(" ".join(following))
        if len(words) < 6:
            issues.append(f"L{idx + 1}: apartado sin desarrollo: {line.strip()}")
    return issues[:12]

def find_visible_formula_id_issues(text: str, formula_ids: Set[str], max_hits: int = 12) -> List[str]:
    """Detecta ids técnicos de formulas.yaml usados como prosa visible."""
    if not formula_ids:
        return []
    protected = FORMULA_REFERENCE_PATTERN.sub(" ", text)
    protected = MAGNITUDE_REFERENCE_PATTERN.sub(" ", protected)
    protected = re.sub(r"```.*?```", " ", protected, flags=re.DOTALL)
    issues: List[str] = []
    for lineno, line in enumerate(protected.splitlines(), start=1):
        stripped = line.strip()
        if not stripped or stripped.startswith("#"):
            continue
        for fid in sorted(formula_ids, key=len, reverse=True):
            if not fid:
                continue
            if re.search(rf"(?<![A-Za-z0-9_])`?{re.escape(fid)}`?(?![A-Za-z0-9_])", line):
                snippet = stripped if len(stripped) <= 140 else stripped[:137] + "..."
                issues.append(f"L{lineno}: id de fórmula visible como texto ('{fid}'); usar {{{{f:{fid}}}}} aislado o explicación verbal: {snippet}")
                break
        if len(issues) >= max_hits:
            break
    return issues

def _safe_dict(value: Any) -> Dict[str, Any]:
    """Normaliza un valor cualquiera a dict vacío si no tiene la forma esperada."""
    return value if isinstance(value, dict) else {}

def _safe_list(value: Any) -> List[Any]:
    """Normaliza un valor cualquiera a lista vacía si no tiene la forma esperada."""
    return value if isinstance(value, list) else []

def _yaml_to_searchable_text(value: Any) -> str:
    """Convierte una estructura YAML arbitraria en texto plano buscable."""
    if value is None:
        return ""
    if isinstance(value, str):
        return value
    if isinstance(value, (int, float, bool)):
        return str(value)
    if isinstance(value, list):
        return "\n".join(_yaml_to_searchable_text(v) for v in value)
    if isinstance(value, dict):
        parts = []
        for k, v in value.items():
            parts.append(str(k))
            parts.append(_yaml_to_searchable_text(v))
        return "\n".join(parts)
    return str(value)

def _extract_interpretation_target_text(data: Dict[str, Any], key: str) -> str:
    """Extrae como texto plano el bloque de un target concreto de interpretación."""
    targets = _safe_dict(data.get("targets"))
    block = targets.get(key)

    if isinstance(block, dict):
        parts = []
        for _, v in block.items():
            parts.append(_yaml_to_searchable_text(v))
        return "\n".join(parts).strip()

    return _yaml_to_searchable_text(block).strip()

def _collect_interpretation_target_keys(data: Dict[str, Any]) -> List[str]:
    """Devuelve las claves target definidas en interpretacion.yaml."""
    targets = _safe_dict(data.get("targets"))
    return list(targets.keys())

def _marker_hit(text: str, markers: List[str]) -> bool:
    """Comprueba si un texto contiene alguno de los marcadores semánticos dados."""
    text_n = _normalize_text_for_search(text)
    return any(marker in text_n for marker in markers)

def _count_shared_core_hits(
    core_magnitudes: List[Dict[str, str]],
    core_formulas: List[Dict[str, str]],
    text_a: str,
    text_b: str,
) -> int:
    """Cuenta cuántos elementos del núcleo aparecen a la vez en dos textos."""
    hits = 0
    for m in core_magnitudes:
        if _entry_present_in_text(m, text_a) and _entry_present_in_text(m, text_b):
            hits += 1
    for f in core_formulas:
        reduced = _build_formula_search_entry(f)
        if _entry_present_in_text(reduced, text_a) and _entry_present_in_text(reduced, text_b):
            hits += 1
    return hits

def _any_token_present(tokens: List[str], text: str) -> bool:
    """Indica si alguno de los tokens proporcionados aparece en el texto."""
    return any(_text_contains_token(text, tok) for tok in tokens if tok)

def _core_magnitude_labels(core_magnitudes: List[Dict[str, str]]) -> List[str]:
    """Genera etiquetas legibles para reportar magnitudes núcleo."""
    labels = []
    for m in core_magnitudes:
        labels.append(m.get("id") or m.get("symbol") or m.get("name") or "magnitud")
    return labels

def _core_formula_labels(core_formulas: List[Dict[str, str]]) -> List[str]:
    """Genera etiquetas legibles para reportar fórmulas núcleo."""
    labels = []
    for f in core_formulas:
        labels.append(f.get("id") or f.get("target") or f.get("latex", "")[:50] or "formula")
    return labels

def _build_formula_search_entry(formula_entry: Dict[str, str]) -> Dict[str, str]:
    """Reduce una fórmula a una entrada buscable por id y target."""
    return {
        "id": formula_entry.get("id", ""),
        "symbol": formula_entry.get("target", ""),
        "name": "",
        "target": formula_entry.get("target", ""),
    }

# E. Extracción de Datos

def _collect_magnitude_entries(mag_path: Path) -> List[Dict[str, str]]:
    """Extrae ids, símbolos y nombres de magnitudes.yaml para checks semánticos."""
    if not mag_path.exists():
        return []

    data = load_yaml(mag_path)
    items = _safe_yaml_list(data)
    entries: List[Dict[str, str]] = []

    for item in items:
        mag_id = str(item.get("id", "")).strip()
        symbol = str(item.get("symbol", "")).strip()
        nombre = ""

        raw_name = item.get("name") or item.get("nombre")
        if isinstance(raw_name, dict):
            nombre = str(raw_name.get("es") or raw_name.get("en") or "").strip()
        elif raw_name is not None:
            nombre = str(raw_name).strip()

        if mag_id or symbol or nombre:
            entries.append({
                "id": mag_id,
                "symbol": symbol,
                "name": nombre,
            })

    return entries

def _collect_formula_entries(for_path: Path) -> List[Dict[str, str]]:
    """Extrae ids, targets y latex mínimos desde formulas.yaml."""
    if not for_path.exists():
        return []

    data = load_yaml(for_path)
    items = _safe_yaml_list(data)
    entries: List[Dict[str, str]] = []

    for item in items:
        fid = str(item.get("id", "")).strip()
        target = str(item.get("target", "")).strip()
        if not target:
            result_semantics = item.get("result_semantics", {})
            if isinstance(result_semantics, dict):
                target = str(result_semantics.get("target", "")).strip()
        if not target:
            rearrangements = item.get("rearrangements", [])
            if isinstance(rearrangements, list):
                for rearr in rearrangements:
                    if isinstance(rearr, dict):
                        target = str(rearr.get("target", "")).strip()
                        if target:
                            break
        latex = str(item.get("latex", "") or item.get("equation", "") or "").strip()

        entries.append({
            "id": fid,
            "target": target,
            "latex": latex,
        })

    return entries

def _collect_graph_texts(leaf_dir: Path) -> Dict[str, str]:
    """Recoge contenido textual de archivos de gráficos auxiliares del leaf."""
    texts: Dict[str, str] = {}

    candidate_dirs = [
        leaf_dir / "graphs",
        leaf_dir / "graph",
    ]
    candidate_files = []

    for d in candidate_dirs:
        if d.exists() and d.is_dir():
            candidate_files.extend(
                p for p in d.rglob("*")
                if p.is_file() and p.suffix.lower() in {".js", ".jsx", ".ts", ".tsx", ".json", ".yaml", ".yml"}
            )

    for p in sorted(candidate_files):
        try:
            texts[str(p.relative_to(leaf_dir))] = read_text(p)
        except Exception:
            continue

    return texts

def _entry_tokens(entry: Dict[str, str]) -> List[str]:
    """Construye la lista de tokens buscables asociados a una entrada semántica."""
    tokens = []
    for key in ("id", "symbol", "name", "target"):
        value = str(entry.get(key, "")).strip()
        if value:
            tokens.append(value)
    return tokens

def _entry_present_in_text(entry: Dict[str, str], text: str) -> bool:
    """Comprueba si una entrada aparece en un texto por cualquiera de sus tokens."""
    return any(_text_contains_token(text, tok) for tok in _entry_tokens(entry))

def _entry_present_in_any_graph(entry: Dict[str, str], graph_texts: Dict[str, str]) -> bool:
    """Comprueba si una entrada aparece en alguno de los archivos de gráficos."""
    return any(_entry_present_in_text(entry, content) for content in graph_texts.values())

# F. Detección de Núcleo

def _rank_core_magnitudes(entries: List[Dict[str, str]], formula_entries: List[Dict[str, str]]) -> List[Dict[str, str]]:
    """Prioriza las magnitudes más nucleares según su presencia en fórmulas."""
    if not entries:
        return []

    formula_blob = " ".join(
        f"{f.get('id', '')} {f.get('target', '')} {f.get('latex', '')}"
        for f in formula_entries
    )

    scored: List[Tuple[int, Dict[str, str]]] = []
    for entry in entries:
        score = 0
        mag_id = entry.get("id", "")
        symbol = entry.get("symbol", "")

        if mag_id and _text_contains_token(formula_blob, mag_id):
            score += 3
        if symbol and _text_contains_token(formula_blob, symbol):
            score += 2
        if mag_id:
            score += 1

        scored.append((score, entry))

    scored.sort(key=lambda x: (-x[0], x[1].get("id", "")))
    core = [entry for score, entry in scored if score > 0][:6]

    if not core:
        core = entries[:6]

    return core

def _rank_core_formulas(entries: List[Dict[str, str]]) -> List[Dict[str, str]]:
    """Prioriza fórmulas centrales según target, latex e id disponible."""
    if not entries:
        return []

    scored: List[Tuple[int, Dict[str, str]]] = []
    for entry in entries:
        score = 0
        if entry.get("target"):
            score += 2
        if entry.get("latex"):
            score += 2
        if entry.get("id"):
            score += 1
        scored.append((score, entry))

    scored.sort(key=lambda x: (-x[0], x[1].get("id", "")))
    return [entry for score, entry in scored if score > 0][:6]

# G. Validadores Base

def rough_english_check(text: str) -> bool:
    """Hace una detección rápida de falso inglés contando marcadores en español."""
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
        # -- Momentum / collisions domain ---------------------------------
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
    """Reduce un símbolo LaTeX a una forma comparable sin barras ni llaves."""
    return sym.replace("\\", "").replace("{", "").replace("}", "").replace(" ", "")

def validate_meta(path: Path) -> List[CheckResult]:
    """Valida la estructura completa de meta.yaml según el contrato del leaf."""
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

    # tags: en Nivel 5 debe ir en bloque bilingüe es/en, siempre no vacío y max 6 por lengua
    tags = data.get("tags", {})
    tags_ok = (
        isinstance(tags, dict)
        and "es" in tags and "en" in tags
        and all(isinstance(tags.get(k), list) and 1 <= len(tags.get(k)) <= 6 for k in ("es", "en"))
        and all(isinstance(x, str) and bool(x.strip()) for k in ("es", "en") for x in tags.get(k, []))
    )
    res.append(CheckResult(tags_ok, "tags en bloque es/en con máximo 6 por lengua", tags))

    prereq = data.get("prerequisitos")
    prereq_ok = isinstance(prereq, list) and all(isinstance(x, str) and bool(x.strip()) for x in prereq)
    res.append(CheckResult(prereq_ok, "prerequisitos obligatorio; puede estar vacío, pero si contiene valores deben ser strings", prereq))

    niveles = data.get("niveles")

    def _is_valid_string_list(lst):
        return (
            isinstance(lst, list)
            and len(lst) > 0
            and all(isinstance(x, str) and bool(x.strip()) for x in lst)
        )

    if isinstance(niveles, dict):
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
        "niveles en bloque bilingüe es/en válido",
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
        and all(isinstance(g, str) and g in allowed_graphs for g in graficos)
    )
    res.append(CheckResult(graficos_ok, "graficos usa solo valores permitidos (Coord/Dcl/Svg)", graficos))

    # physical_role: en Nivel 5 debe ir en bloque bilingüe es/en
    pr = data.get("physical_role")
    pr_ok = (
        isinstance(pr, dict)
        and isinstance(pr.get("es"), str) and bool(pr.get("es").strip())
        and isinstance(pr.get("en"), str) and bool(pr.get("en").strip())
    )
    res.append(CheckResult(pr_ok, "physical_role en bloque es/en no vacío", pr))

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
        preferred_ok = isinstance(preferred, str) and preferred in {"Coord", "Dcl", "Svg", "none"}
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
    """Normaliza texto antes de comparar meta.yaml contra el mapa oficial."""
    if value is None:
        return ""
    text = repair_mojibake(str(value)).strip()
    text = text.replace("\ufe0f", "").replace("\ufe0e", "")
    text = re.sub(r"\s+", " ", text)
    return text

def _normalize_compare_value(value: Any) -> Any:
    """Normaliza recursivamente scalars, listas y dicts para comparaciones YAML."""
    if isinstance(value, dict):
        return {k: _normalize_compare_value(v) for k, v in sorted(value.items())}
    if isinstance(value, list):
        return [_normalize_compare_value(v) for v in value]
    if isinstance(value, str):
        return _normalize_compare_text(value)
    return value

def _iter_map_nodes(node: Dict[str, Any], parent_id: str | None = None):
    """Recorre el árbol del mapa oficial devolviendo nodo actual y su parent_id."""
    yield node, parent_id
    for child in node.get("children", []) or []:
        if isinstance(child, dict):
            yield from _iter_map_nodes(child, node.get("id"))

def load_official_map_data(leaf_dir: Path) -> Tuple[Dict[str, Any] | None, Path | None, str | None]:
    """Localiza y carga el mapa oficial del proyecto desde rutas candidatas."""
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
    """Busca el nodo del mapa oficial que corresponde al id del leaf."""
    root = map_data.get("root")
    if not isinstance(root, dict):
        return None, None
    for node, parent_id in _iter_map_nodes(root, None):
        if node.get("id") == leaf_id:
            return node, parent_id
    return None, None

def find_map_nodes_by_leaf_id(map_data: Dict[str, Any], leaf_id: str) -> List[Tuple[Dict[str, Any], str | None]]:
    """Devuelve todos los nodos del mapa que comparten el mismo id."""
    root = map_data.get("root")
    if not isinstance(root, dict):
        return []

    matches: List[Tuple[Dict[str, Any], str | None]] = []
    for node, parent_id in _iter_map_nodes(root, None):
        if node.get("id") == leaf_id:
            matches.append((node, parent_id))
    return matches

def find_map_ancestor_chain_by_leaf_id(map_data: Dict[str, Any], leaf_id: str) -> List[Dict[str, Any]]:
    """Devuelve la cadena de ancestros del leaf desde root hasta su padre inmediato."""
    root = map_data.get("root")
    if not isinstance(root, dict):
        return []

    def _walk(node: Dict[str, Any], ancestors: List[Dict[str, Any]]) -> List[Dict[str, Any]] | None:
        if node.get("id") == leaf_id:
            return ancestors
        for child in node.get("children", []) or []:
            if isinstance(child, dict):
                found = _walk(child, ancestors + [node])
                if found is not None:
                    return found
        return None

    return _walk(root, []) or []

def derive_meta_hierarchy_from_map(map_data: Dict[str, Any], leaf_id: str) -> Dict[str, str]:
    """Reconstruye area, bloque y subbloque desde la posición del leaf en el árbol oficial."""
    ancestors = find_map_ancestor_chain_by_leaf_id(map_data, leaf_id)
    ids = [str(node.get("id", "")).strip() for node in ancestors if isinstance(node, dict)]

    # Ignorar el root lógico del mapa; los tres niveles siguientes definen la jerarquía editorial.
    if ids and ids[0] == "phyxio":
        ids = ids[1:]

    return {
        "area": ids[0] if len(ids) >= 1 else "",
        "bloque": ids[1] if len(ids) >= 2 else "",
        "subbloque": ids[2] if len(ids) >= 3 else "",
    }

def derive_meta_hierarchy_from_route(route: str) -> Dict[str, str]:
    """Reconstruye área, bloque y subbloque desde ruta_relativa cuando hay ids duplicados."""
    parts = [p for p in str(route or "").split("/") if p]
    return {
        "area": parts[0] if len(parts) >= 1 else "",
        "bloque": parts[1] if len(parts) >= 2 else "",
        "subbloque": parts[2] if len(parts) >= 3 else "",
    }

def validate_meta_against_map(meta_path: Path, leaf_dir: Path) -> List[CheckResult]:
    """Contrasta metadatos del leaf frente al nodo correspondiente del mapa oficial."""
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
    node_matches = find_map_nodes_by_leaf_id(map_data or {}, leaf_id)
    expected_route_from_meta = str(meta_data.get("ruta_relativa", "")).strip()
    node = None
    parent_id = None

    if expected_route_from_meta:
        for candidate_node, candidate_parent_id in node_matches:
            if str(candidate_node.get("ruta_relativa", "")).strip() == expected_route_from_meta:
                node = candidate_node
                parent_id = candidate_parent_id
                break

    if node is None and len(node_matches) == 1:
        node, parent_id = node_matches[0]

    if node is None:
        return [
            CheckResult(False, "meta.yaml vs mapa: id existe en mapa oficial", {
                "id": leaf_id,
                "matching_routes": [str(candidate.get("ruta_relativa", "")).strip() for candidate, _ in node_matches],
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
    expected_hierarchy = derive_meta_hierarchy_from_route(expected_ruta)

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
    for key in ["area", "bloque", "subbloque"]:
        expected_value = expected_hierarchy.get(key, "")
        if expected_value:
            res.append(compare(key, expected_value, meta_data.get(key, "")))
    return res

def validate_magnitudes(path: Path) -> Tuple[List[CheckResult], Set[str], Set[str]]:
    """Valida magnitudes.yaml y devuelve checks, símbolos válidos e ids detectados."""
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
    """Valida formulas.yaml y devuelve checks, símbolos usados e ids de fórmulas."""
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
    """Valida estructura, longitud y calidad básica de un markdown con plantilla fija."""
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
    # Emoji-prefix check (applies when required_sections contain 🟢/🔵/🔴)
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
        formal_heading = "Nivel formal" if path.name.lower() == "teoria.md" else "Formal level"
        formula_section_issues = _formula_ref_lines_outside_section(text, formal_heading)
        res.append(CheckResult(
            not formula_section_issues,
            f"{path.name} fórmulas solo en Nivel formal",
            formula_section_issues if formula_section_issues else None,
        ))
    return res

def validate_ejemplos(
    path: Path,
    lang: str = "es",
    min_words: int | None = None,
    max_words: int | None = None,
    formula_ids: Set[str] | None = None,
) -> List[CheckResult]:
    """Valida la plantilla específica de ejemplos en español o inglés."""
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
    empty_section_issues = find_required_section_content_issues(text, required, min_words=8)
    res.append(CheckResult(
        not empty_section_issues,
        f"{path.name} sin secciones obligatorias vacías",
        empty_section_issues if empty_section_issues else None,
    ))
    empty_part_issues = find_empty_example_part_issues(text, lang=lang)
    res.append(CheckResult(
        not empty_part_issues,
        f"{path.name} sin apartados de ejemplo vacíos",
        empty_part_issues if empty_part_issues else None,
    ))
    visible_formula_id_issues = find_visible_formula_id_issues(text, formula_ids or set())
    res.append(CheckResult(
        not visible_formula_id_issues,
        f"{path.name} sin ids técnicos de fórmula como prosa",
        visible_formula_id_issues if visible_formula_id_issues else None,
    ))
    res.extend(build_prose_quality_checks(path, text))
    return res

def validate_aplicaciones(path: Path, lang: str = "es", min_words: int | None = None, max_words: int | None = None) -> List[CheckResult]:
    """Valida numeración y marcadores obligatorios de aplicaciones reales."""
    text = read_text(path)
    numbered_section_dicts = extract_numbered_h2_sections(text)
    numbered_sections: List[Tuple[int, int, str]] = [
        (section["line"], section["number"], section["heading"])
        for section in numbered_section_dicts
    ]
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
    limite_pattern = r"L[iííí¬]mite de validez[*\s]*:" if lang == "es" else r"Validity limit[*\s]*:"
    limite_lines = re.findall(limite_pattern, text, flags=re.IGNORECASE)
    placeholder_hits = find_placeholder_lines(text)
    template_issues = find_aplicaciones_template_issues(text)
    
    res = [
        CheckResult(len(numbered_sections) >= 5, f"{path.name} contiene al menos 5 aplicaciones", len(numbered_sections)),
        CheckResult(not missing_first_five, f"{path.name} incluye aplicaciones 1..5", missing_first_five),
        CheckResult(not duplicated_numbers, f"{path.name} no duplica numeración de aplicaciones", duplicated_numbers),
        CheckResult(not numbering_order_issues, f"{path.name} respeta orden ascendente de numeración", numbering_order_issues),
        CheckResult(len(variable_lines) >= 5, f"Cada aplicación contiene '{'Variable dominante' if lang == 'es' else 'Dominant variable'}:'", len(variable_lines)),
        CheckResult(len(limite_lines) >= 5, f"Cada aplicación contiene '{'Límite de validez' if lang == 'es' else 'Validity limit'}:'", len(limite_lines)),
        CheckResult(not placeholder_hits, f"{path.name} no contiene placeholders de plantilla", placeholder_hits[:8]),
        CheckResult(not template_issues, f"{path.name} no contiene aplicaciones clónicas o plantilladas", template_issues),
    ]
    wc = count_words(text)
    if min_words is not None:
        res.append(CheckResult(wc >= min_words, f"{path.name} >= {min_words} palabras", wc))
    if max_words is not None:
        res.append(CheckResult(wc <= max_words, f"{path.name} <= {max_words} palabras", wc))
    res.extend(build_prose_quality_checks(path, text))
    return res

def validate_history(path: Path, sections: List[str], min_words: int | None = None, max_words: int | None = None) -> List[CheckResult]:
    """Aplica la validación estándar de markdown a historia.md e historia.en.md."""
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

    def _valid_condition_block(value: Any) -> bool:
        """Condicion declarativa para reglas de interpretacion.

        Forma esperada:
          condition:
            variable: magnitud_id
            gte: 1
            lte: 5
        """
        if not isinstance(value, dict):
            return False
        variable = value.get("variable")
        if not isinstance(variable, str) or not variable.strip():
            return False
        allowed_ops = {"lt", "lte", "gt", "gte", "eq", "neq"}
        op_keys = [key for key in allowed_ops if key in value]
        if not op_keys:
            return False
        return all(isinstance(value.get(key), (int, float, str)) and str(value.get(key)).strip() for key in op_keys)

    def _rule_trigger_ok(rule: Dict[str, Any]) -> bool:
        has_when = "when" in rule
        has_condition = "condition" in rule
        if has_when == has_condition:
            return False
        when = rule.get("when")
        condition = rule.get("condition")
        when_ok = isinstance(when, str) and bool(when.strip())
        condition_ok = _valid_condition_block(condition)
        return when_ok if has_when else condition_ok

    def _summary_when_is_declarative(rule: Dict[str, Any]) -> bool:
        """summary_rules no debe contener rangos compuestos en when."""
        if "when" in rule and "condition" in rule:
            return False
        when = rule.get("when")
        if "condition" in rule:
            return _valid_condition_block(rule.get("condition"))
        if not isinstance(when, str):
            return False
        lowered = when.lower()
        return not any(token in lowered for token in (" and ", " or ", "&&", "||"))

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
        targets_bad_summary_condition = []
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
                        and _rule_trigger_ok(rule)
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
                    if key == "summary_rules" and not _summary_when_is_declarative(rule):
                        targets_bad_summary_condition.append(
                            {
                                "target": target_id,
                                "field": key,
                                "index": ridx,
                                "when": rule.get("when"),
                                "condition": rule.get("condition"),
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
                "interpretacion.yaml: reglas por target tienen id/(when o condition)/status/text es/en",
                targets_bad_rule_schema,
            )
        )
        res.append(
            CheckResult(
                not targets_bad_summary_condition,
                "interpretacion.yaml: summary_rules usa when simple o condition estructurado",
                targets_bad_summary_condition,
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
    """Comprueba que los markdown .en no parezcan texto español traducido a medias."""
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
    """Verifica que el leaf tenga exactamente los archivos requeridos y ningún extra."""
    current = sorted([p.name for p in leaf_dir.iterdir() if p.is_file()])
    expected_files = list(REQUIRED_FILES)
    meta_data = load_yaml(leaf_dir / "meta.yaml") if (leaf_dir / "meta.yaml").exists() else {}
    graph_types = meta_data.get("graficos") if isinstance(meta_data, dict) else []
    
    # Comprobar si se declara algún tipo de gráfico (Coord, Dcl, Svg) en meta.yaml
    has_graphs = False
    if isinstance(graph_types, list):
        graph_set = {str(g).strip() for g in graph_types if g}
        if any(t in graph_set for t in ["Coord", "Dcl", "Svg"]):
            has_graphs = True

    # Si se declaran gráficos en meta.yaml, graficos.yaml es obligatorio
    if has_graphs:
        if "graficos.yaml" not in expected_files:
            expected_files.append("graficos.yaml")
    else:
        # Si no se declaran gráficos, graficos.yaml es opcional (se permite si existe)
        if "graficos.yaml" in current and "graficos.yaml" not in expected_files:
            expected_files.append("graficos.yaml")
            
    missing = [f for f in expected_files if f not in current]
    extra = [f for f in current if f not in expected_files]
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
    """Revisa cada archivo .md en busca de riesgos de render matemático."""
    res: List[CheckResult] = []
    formula_ids = {entry.get("id", "") for entry in _collect_formula_entries(leaf_dir / "formulas.yaml") if entry.get("id")}
    md_paths = sorted(
        [p for p in leaf_dir.iterdir() if p.is_file() and p.suffix.lower() == ".md"],
        key=lambda p: p.name.lower(),
    )
    for path in md_paths:
        text = read_text(path)
        issues = find_markdown_math_render_issues(text, formula_ids=formula_ids, max_hits=12)
        remaining = max(0, 12 - len(issues))
        if remaining > 0:
            issues.extend(find_bare_formula_issues(text, max_hits=remaining))
        res.append(CheckResult(
            not issues,
            f"{path.name} sin riesgos de render matemático",
            issues if issues else None,
        ))
    return res

def _collect_markdown_files(leaf_dir: Path) -> List[Path]:
    """Devuelve todos los markdown del leaf, incluyendo .en.md."""
    return sorted(
        [p for p in leaf_dir.iterdir() if p.is_file() and p.suffix.lower() == ".md"],
        key=lambda p: p.name.lower(),
    )

def _strip_markdown_protected_spans(text: str) -> str:
    """Quita zonas donde un id de magnitud no debe interpretarse como texto visible."""
    text = re.sub(r"```.*?```", " ", text, flags=re.DOTALL)
    text = FORMULA_REFERENCE_PATTERN.sub(" ", text)
    text = MAGNITUDE_REFERENCE_PATTERN.sub(" ", text)
    text = re.sub(r"\\\((?:\\.|[^\\])*?\\\)", " ", text)
    text = re.sub(r"(?<!\\)\$(?:\\.|[^$])*(?<!\\)\$", " ", text)
    text = re.sub(r"\[[^\]]+\]\([^)]+\)", " ", text)
    return text

def validate_markdown_entity_sync(leaf_dir: Path, mag_ids: Set[str], formula_ids: Set[str]) -> List[CheckResult]:
    """Valida sincronía bidireccional entre Markdown, formulas.yaml y magnitudes.yaml."""
    md_paths = _collect_markdown_files(leaf_dir)
    formula_refs_by_file: Dict[str, List[str]] = {}
    magnitude_refs_by_file: Dict[str, List[str]] = {}
    all_formula_refs: Set[str] = set()
    all_magnitude_refs: Set[str] = set()
    unwrapped_magnitudes_by_file: Dict[str, List[str]] = {}

    relevant_mag_ids = {
        mid for mid in mag_ids
        if mid and (len(mid) > 1 or "_" in mid or any(ch.isdigit() for ch in mid))
    }

    for path in md_paths:
        text = read_text(path)
        formula_refs = sorted(set(FORMULA_REFERENCE_PATTERN.findall(text)))
        magnitude_refs = sorted(set(MAGNITUDE_REFERENCE_PATTERN.findall(text)))
        formula_refs_by_file[path.name] = formula_refs
        magnitude_refs_by_file[path.name] = magnitude_refs
        all_formula_refs.update(formula_refs)
        all_magnitude_refs.update(magnitude_refs)

        searchable = _strip_markdown_protected_spans(text)
        bare_hits = []
        for mid in sorted(relevant_mag_ids):
            if re.search(rf"(?<![\w\]]){re.escape(mid)}(?![\w\[])",
                         searchable):
                bare_hits.append(mid)
        if bare_hits:
            unwrapped_magnitudes_by_file[path.name] = bare_hits

    unknown_formula_refs = {
        fname: [fid for fid in refs if fid not in formula_ids]
        for fname, refs in formula_refs_by_file.items()
        if any(fid not in formula_ids for fid in refs)
    }
    unknown_magnitude_refs = {
        fname: [mid for mid in refs if mid not in mag_ids]
        for fname, refs in magnitude_refs_by_file.items()
        if any(mid not in mag_ids for mid in refs)
    }
    teoria_formula_refs = set(formula_refs_by_file.get("teoria.md", []))
    teoria_en_formula_refs = set(formula_refs_by_file.get("teoria.en.md", []))
    missing_formula_refs_teoria = sorted(formula_ids - teoria_formula_refs)
    missing_formula_refs_teoria_en = sorted(formula_ids - teoria_en_formula_refs)
    missing_magnitude_refs = sorted(mag_ids - all_magnitude_refs)

    return [
        CheckResult(
            not unknown_formula_refs,
            "markdown_entities: toda fórmula mostrada como {{f:id}} existe en formulas.yaml",
            unknown_formula_refs if unknown_formula_refs else None,
        ),
        CheckResult(
            not missing_formula_refs_teoria,
            "markdown_entities: toda fórmula de formulas.yaml aparece como {{f:id}} en teoria.md",
            missing_formula_refs_teoria if missing_formula_refs_teoria else None,
        ),
        CheckResult(
            not missing_formula_refs_teoria_en,
            "markdown_entities: toda fórmula de formulas.yaml aparece como {{f:id}} en teoria.en.md",
            missing_formula_refs_teoria_en if missing_formula_refs_teoria_en else None,
        ),
        CheckResult(
            not unknown_magnitude_refs,
            "markdown_entities: toda referencia [[id]] existe en magnitudes.yaml",
            unknown_magnitude_refs if unknown_magnitude_refs else None,
        ),
        CheckResult(
            not missing_magnitude_refs,
            "markdown_entities: toda magnitud de magnitudes.yaml aparece como [[id]] en algún .md/.en.md",
            missing_magnitude_refs if missing_magnitude_refs else None,
        ),
        CheckResult(
            not unwrapped_magnitudes_by_file,
            "markdown_entities: magnitudes visibles usan formato [[id]]",
            unwrapped_magnitudes_by_file if unwrapped_magnitudes_by_file else None,
        ),
    ]

def find_workspace_root(leaf_dir: Path) -> Path | None:
    """Sube directorios hasta encontrar la raíz (la que contiene frontend/src/v2/...)."""
    candidate = leaf_dir
    for _ in range(20):
        if (candidate / "frontend" / "src" / "v2" / "components" / "graphs" / "dinamica" / "index.js").exists():
            return candidate
        candidate = candidate.parent
    return None

def route_graph_namespace(route: str) -> str:
    """Deriva el namespace de gráficos a partir de la ruta relativa del leaf."""
    parts = [p for p in str(route or "").split("/") if p]
    try:
        idx = parts.index("mecanica")
        if idx + 1 < len(parts):
            return parts[idx + 1]
    except ValueError:
        pass
    return "dinamica"

def check_coord_bilingual_structure(content: str) -> Tuple[bool, List[str]]:
    """Comprueba la estructura mínima bilingüe exigida a componentes Coord."""
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
            
    for m in re.finditer(r'<(div|button|Pill|span)[^>]*>\s*([A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(?:\s+[a-zA-Záéíóúñ0-9\(\)]+){1,})\s*</\1>', content):
        text = m.group(2).strip()
        if not text.startswith("{") and " " in text and "=" not in text:
            missing.append(f"texto UI JSX hardcodeado detectado: '{text}'")
            break

    return (len(missing) == 0, missing)

def check_dcl_warning_i18n(root: Path) -> CheckResult:
    """Verifica que el renderer DCL traduzca warnings de interpretación."""
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
    """Elimina comentarios JS de forma simple para poder parsear index.js."""
    # Nota: simplificación suficiente para index.js del proyecto.
    no_block = re.sub(r"/\*.*?\*/", "", text, flags=re.DOTALL)
    no_line = re.sub(r"//.*?$", "", no_block, flags=re.MULTILINE)
    return no_line

def resolve_graph_registry(leaf_dir: Path, meta_data: dict) -> Tuple[Dict[str, Any] | None, List[CheckResult]]:
    """Resuelve el registro de gráficos del namespace del leaf y devuelve su contexto."""
    leaf_id = meta_data.get("id", "")
    if not leaf_id:
        return None, [CheckResult(False, "meta.yaml no tiene campo 'id' — imposible buscar gráficos")]

    root = find_workspace_root(leaf_dir)
    if not root:
        return None, [CheckResult(False, "No se pudo localizar la raíz del workspace (frontend/src/v2/...)")]

    graph_namespace = route_graph_namespace(meta_data.get("ruta_relativa", "")) or str(meta_data.get("subbloque") or "dinamica")
    graphs_dir = root / "frontend" / "src" / "v2" / "components" / "graphs" / graph_namespace
    index_path = graphs_dir / "index.js"
    if not index_path.exists() and graph_namespace != "dinamica":
        graph_namespace = "dinamica"
        graphs_dir = root / "frontend" / "src" / "v2" / "components" / "graphs" / graph_namespace
        index_path = graphs_dir / "index.js"

    if not index_path.exists():
        return None, [CheckResult(False, "No existe index.js del namespace de gráficos", str(index_path))]

    idx_text = index_path.read_text(encoding="utf-8", errors="replace")
    active_idx = strip_js_comments(idx_text)

    import_map: Dict[str, str] = {}
    for m in re.finditer(r'import\s+(\w+)\s+from\s+["\']([^"\']+)["\']', active_idx):
        import_map[m.group(1)] = m.group(2)

    export_match = re.search(r'export const graphs\s*=\s*\{(.*?)\n\};', active_idx, re.DOTALL)
    if not export_match:
        return None, [CheckResult(False, "index.js no contiene 'export const graphs = {...}'", str(index_path))]

    registered: Dict[str, Dict[str, str]] = {}
    for m in re.finditer(r'"([^"]+)"\s*:\s*\{([^}]+)\}', export_match.group(1)):
        lid = m.group(1)
        body = m.group(2)
        registered[lid] = {k: v for k, v in re.findall(r'(\w+)\s*:\s*(\w+)', body)}

    reverse_components: Dict[Tuple[str, str], List[str]] = {}
    for reg_leaf_id, comp_map in registered.items():
        for reg_graph_type, reg_component_name in comp_map.items():
            reverse_components.setdefault((reg_graph_type, reg_component_name), []).append(reg_leaf_id)

    return {
        "root": root,
        "graph_namespace": graph_namespace,
        "graphs_dir": graphs_dir,
        "index_path": index_path,
        "import_map": import_map,
        "registered": registered,
        "leaf_components": registered.get(leaf_id, {}),
        "reverse_components": reverse_components,
        "leaf_id": leaf_id,
    }, []

def validate_graph_standard_contract(root: Path, graph_type: str, component_name: str, file_path: Path, content: str) -> List[CheckResult]:
    """Valida que cada wrapper respete el contrato común o una variante heredada equivalente."""
    results: List[CheckResult] = []

    if graph_type == "Svg":
        uses_factory = "createSvgGraph(" in content
        uses_renderer = "SvgProfileRenderer" in content
        has_interpretation = "onInterpretationContextChange" in content
        has_calc_apply = "onApplyToCalculator" in content
        has_shared_input = "sharedParams" in content and "paramsIn" in content

        results.append(CheckResult(
            uses_factory or (uses_renderer and has_interpretation and has_calc_apply and has_shared_input),
            f"graficos[Svg] '{component_name}' usa createSvgGraph o contrato legacy equivalente",
            None if uses_factory or (uses_renderer and has_interpretation and has_calc_apply and has_shared_input) else str(file_path),
        ))
        return results

    if graph_type == "Dcl":
        uses_factory = "createDclGraph(" in content
        uses_renderer = "DclRenderer" in content
        has_interpretation = "onInterpretationContextChange" in content
        has_shared_input = "sharedParams" in content or "paramsIn" in content

        results.append(CheckResult(
            uses_factory or (uses_renderer and has_interpretation and has_shared_input),
            f"graficos[Dcl] '{component_name}' usa createDclGraph o contrato legacy equivalente",
            None if uses_factory or (uses_renderer and has_interpretation and has_shared_input) else str(file_path),
        ))
        return results

    if graph_type == "Coord":
        uses_factory = "createCoordGraph(" in content or "createCoordGraphPage(" in content
        uses_graph_page = "GraphPageV2" in content
        uses_experiment = "useExperimentParams" in content
        has_param_bridge = bool(re.search(r'(props\.)?params\s*\?\?\s*(props\.)?sharedParams', content)) or "sharedParams={normalized.sharedParams}" in content

        results.append(CheckResult(
            uses_factory or ((uses_graph_page or uses_experiment) and has_param_bridge),
            f"graficos[Coord] '{component_name}' usa createCoordGraph/createCoordGraphPage o contrato legacy equivalente",
            None if uses_factory or ((uses_graph_page or uses_experiment) and has_param_bridge) else str(file_path),
        ))
        return results

    return [CheckResult(True, f"graficos[{graph_type}] '{component_name}' sin contrato adicional específico")]

def validate_graph_shared_infrastructure(root: Path) -> List[CheckResult]:
    """Comprueba que la infraestructura común documentada para gráficos exista y esté conectada."""
    checks: List[CheckResult] = []

    required_files = [
        (root / "frontend" / "src" / "v2" / "components" / "graphs" / "graphFactories.jsx", "Infraestructura común graphFactories.jsx existe"),
        (root / "frontend" / "src" / "v2" / "components" / "graphs" / "GraphWorkbenchPanel.jsx", "GraphWorkbenchPanel.jsx existe"),
        (root / "frontend" / "src" / "v2" / "components" / "graphs" / "GraphReadingCard.jsx", "GraphReadingCard.jsx existe"),
        (root / "frontend" / "src" / "v2" / "components" / "graphs" / "_templates" / "GraphsSvg.template.jsx", "Plantilla operativa GraphsSvg.template.jsx existe"),
        (root / "frontend" / "src" / "v2" / "components" / "graphs" / "_templates" / "GraphsDcl.template.jsx", "Plantilla operativa GraphsDcl.template.jsx existe"),
        (root / "frontend" / "src" / "v2" / "components" / "graphs" / "_templates" / "GraphsCoord.template.jsx", "Plantilla operativa GraphsCoord.template.jsx existe"),
    ]

    for path, message in required_files:
        checks.append(CheckResult(path.exists(), message, None if path.exists() else str(path)))

    leaf_tabs_path = root / "frontend" / "src" / "v2" / "pages" / "V2LeafTabs.jsx"
    if not leaf_tabs_path.exists():
        checks.append(CheckResult(False, "V2LeafTabs.jsx existe para integrar workbench y lectura gráfica", str(leaf_tabs_path)))
        return checks

    leaf_tabs = leaf_tabs_path.read_text(encoding="utf-8", errors="replace")
    has_workbench = "GraphWorkbenchPanel" in leaf_tabs and "<GraphWorkbenchPanel" in leaf_tabs
    has_reading = "GraphReadingCard" in leaf_tabs and "<GraphReadingCard" in leaf_tabs
    checks.append(CheckResult(
        has_workbench,
        "V2LeafTabs integra GraphWorkbenchPanel en la pestaña de gráficos",
        None if has_workbench else str(leaf_tabs_path),
    ))
    checks.append(CheckResult(
        has_reading,
        "V2LeafTabs integra GraphReadingCard en la pestaña de gráficos",
        None if has_reading else str(leaf_tabs_path),
    ))

    return checks

def validate_graph_components(leaf_dir: Path, meta_data: dict) -> List[CheckResult]:
    """Comprueba que los gráficos declarados en meta.yaml existan como componentes funcionales:
    - Dcl / Svg : el archivo .jsx debe existir Y contener 'import profile from' (versión nueva).
    - Coord     : debe existir y tener estructura bilingüe mínima (uiLang + helper tt/t).
    """
    graficos = meta_data.get("graficos") or []
    if not graficos:
        return [CheckResult(True, "meta.yaml no declara gráficos — sin comprobación")]
    context, context_errors = resolve_graph_registry(leaf_dir, meta_data)
    if context_errors:
        return context_errors

    assert context is not None
    root = context["root"]
    graphs_dir = context["graphs_dir"]
    import_map = context["import_map"]
    reverse_components = context["reverse_components"]
    leaf_components = context["leaf_components"]
    leaf_id = context["leaf_id"]
    results: List[CheckResult] = []
    checked_dcl_warning_i18n = False

    results.extend(validate_graph_shared_infrastructure(root))

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
                results.extend(validate_graph_standard_contract(root, graph_type, component_name, file_path, content))
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
            results.extend(validate_graph_standard_contract(root, graph_type, component_name, file_path, content))
            if graph_type == "Svg":
                uses_factory = "createSvgGraph(" in content
                shared_with = sorted(
                    other_leaf_id
                    for other_leaf_id in reverse_components.get((graph_type, component_name), [])
                    if other_leaf_id != leaf_id
                )
                results.append(CheckResult(
                    not shared_with,
                    f"graficos[Svg] '{component_name}' no se reutiliza en otros leafs",
                    None if not shared_with else shared_with,
                ))

                uses_renderer = bool(re.search(r'<SvgProfileRenderer\b', content))
                results.append(CheckResult(
                    uses_renderer or uses_factory,
                    f"graficos[Svg] '{component_name}' usa SvgProfileRenderer",
                    None if uses_renderer or uses_factory else str(file_path),
                ))

                apply_link_ok = bool(re.search(r'onApplyToCalculator\s*=\s*\{onSharedParamsChange\}', content))
                results.append(CheckResult(
                    apply_link_ok or uses_factory,
                    f"graficos[Svg] '{component_name}' pasa onApplyToCalculator al renderer",
                    None if apply_link_ok or uses_factory else str(file_path),
                ))

                profile_import_match = re.search(r'import\s+profile\s+from\s+"([^"]+)"', content)
                if profile_import_match:
                    profile_rel = profile_import_match.group(1)
                    profile_path = None
                    if profile_rel.startswith("@/"):
                        profile_path = (root / "frontend" / "src" / Path(*profile_rel[2:].split("/"))).resolve()
                    else:
                        profile_path = (file_path.parent / profile_rel).resolve()

                    profile_exists = bool(profile_path and profile_path.exists())
                    results.append(CheckResult(
                        profile_exists,
                        f"graficos[Svg] '{component_name}' profile importado existe",
                        None if profile_exists else profile_rel,
                    ))

                    if profile_exists and profile_path is not None:
                        profile_content = profile_path.read_text(encoding="utf-8", errors="replace")
                        profile_leaf_match = re.search(r'leafId\s*:\s*["\']([^"\']+)["\']', profile_content)
                        profile_leaf_id = profile_leaf_match.group(1) if profile_leaf_match else None
                        results.append(CheckResult(
                            profile_leaf_id == leaf_id,
                            f"graficos[Svg] '{component_name}' profile.meta.leafId coincide con el leaf",
                            {"expected": leaf_id, "found": profile_leaf_id, "profile": str(profile_path)},
                        ))

                        has_binding = bool(re.search(r'interpretation_binding\s*:\s*\{', profile_content))
                        results.append(CheckResult(
                            has_binding,
                            f"graficos[Svg] '{component_name}' declara interpretation_binding",
                            None if has_binding else str(profile_path),
                        ))

                        has_title = bool(re.search(r'title\s*:\s*\{', profile_content))
                        results.append(CheckResult(
                            has_title,
                            f"graficos[Svg] '{component_name}' declara meta.title bilingüe",
                            None if has_title else str(profile_path),
                        ))
            if graph_type == "Dcl" and not checked_dcl_warning_i18n:
                results.append(check_dcl_warning_i18n(root))
                checked_dcl_warning_i18n = True

    return results

def validate_symbol_consistency(magnitude_symbols: Set[str], formula_symbols: Set[str], theory_text: str, ejemplos_text: str) -> List[CheckResult]:
    """Comprueba que las variables usadas estén definidas en magnitudes.yaml."""
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

    if leaf_id != "analisis-completo":
        return [CheckResult(True, f"Coord semántico especializado no aplica al leaf '{leaf_id}'")]

    context, context_errors = resolve_graph_registry(leaf_dir, meta_data)
    if context_errors:
        return context_errors

    assert context is not None
    graphs_dir = context["graphs_dir"]
    import_map = context["import_map"]
    component_name = context["leaf_components"].get("Coord")
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

# H. Validadores Avanzados

# CHECK 10A — Marcado de magnitudes [[id]] (globo de ayuda)
def validate_magnitude_tagging(leaf_dir: Path, mag_entries: List[Dict[str, str]]) -> List[CheckResult]:
    """Valida el uso de [[id_magnitud]] en el texto de los archivos markdown para tooltips."""
    if not mag_entries:
        return [CheckResult(True, "Sin magnitudes registradas — omitiendo check de marcado [[id]]")]

    theory_text = _read_optional_text(leaf_dir / "teoria.md")
    ejemplos_text = _read_optional_text(leaf_dir / "ejemplos.md")
    combined_text = theory_text + "\n" + ejemplos_text
    
    # Extraer todos los [[id]] encontrados
    tags_found = set(re.findall(r"\[\[([A-Za-z0-9_\-]+)\]\]", combined_text))
    
    magnitude_ids = {m.get("id") for m in mag_entries if m.get("id")}
    
    tagged_count = 0
    missing_tags = []
    for mag_id in sorted(magnitude_ids):
        if mag_id in tags_found:
            tagged_count += 1
        else:
            missing_tags.append(mag_id)
    
    ratio = tagged_count / len(magnitude_ids) if magnitude_ids else 1.0
    
    return [CheckResult(
        ratio >= 0.8,
        f"Marcado de magnitudes [[id]] (globo de ayuda) cubre el {ratio:.0%} de las magnitudes registradas",
        {"missing": missing_tags} if missing_tags and ratio < 1.0 else None
    )]


def validate_concept_coverage(
    leaf_dir: Path,
    mag_path: Path,
    for_path: Path,
    interp_path: Path | None = None,
) -> List[CheckResult]:
    """Valida que el núcleo conceptual del leaf aparezca en teoría, ejemplos e interpretación."""
    checks: List[CheckResult] = []

    magnitudes = _collect_magnitude_entries(mag_path) if mag_path.exists() else []
    formulas = _collect_formula_entries(for_path) if for_path.exists() else []

    core_magnitudes = _rank_core_magnitudes(magnitudes, formulas)
    core_formulas = _rank_core_formulas(formulas)

    teoria_text = _read_optional_text(leaf_dir / "teoria.md")
    teoria_en_text = _read_optional_text(leaf_dir / "teoria.en.md")
    ejemplos_text = _read_optional_text(leaf_dir / "ejemplos.md")
    interpretacion_text = _read_optional_text(interp_path) if interp_path and interp_path.exists() else ""
    graph_texts = _collect_graph_texts(leaf_dir)

    checks.append(CheckResult(
        len(core_magnitudes) > 0,
        "coverage: se detectan magnitudes núcleo",
        None if core_magnitudes else "No se pudieron inferir magnitudes núcleo desde magnitudes.yaml/formulas.yaml"
    ))

    checks.append(CheckResult(
        len(core_formulas) > 0,
        "coverage: se detectan fórmulas núcleo",
        None if core_formulas else "No se pudieron inferir fórmulas núcleo desde formulas.yaml"
    ))

    if core_magnitudes:
        missing_in_teoria = [m.get("id") or m.get("symbol") for m in core_magnitudes if not _entry_present_in_text(m, teoria_text)]
        checks.append(CheckResult(
            not missing_in_teoria,
            "coverage: magnitudes núcleo presentes en teoria.md",
            missing_in_teoria if missing_in_teoria else None
        ))

        missing_in_ejemplos = [m.get("id") or m.get("symbol") for m in core_magnitudes if not _entry_present_in_text(m, ejemplos_text)]
        checks.append(CheckResult(
            not missing_in_ejemplos,
            "coverage: magnitudes núcleo presentes en ejemplos.md",
            missing_in_ejemplos if missing_in_ejemplos else None
        ))

        if interpretacion_text:
            missing_in_interpretacion = [
                m.get("id") or m.get("symbol")
                for m in core_magnitudes
                if not _entry_present_in_text(m, interpretacion_text)
            ]
            checks.append(CheckResult(
                not missing_in_interpretacion,
                "coverage: magnitudes núcleo presentes en interpretacion.yaml",
                missing_in_interpretacion if missing_in_interpretacion else None
            ))

        if graph_texts:
            missing_in_graphs = [
                m.get("id") or m.get("symbol")
                for m in core_magnitudes
                if not _entry_present_in_any_graph(m, graph_texts)
            ]
            checks.append(CheckResult(
                not missing_in_graphs,
                "coverage: magnitudes núcleo representadas en archivos de gráficos",
                missing_in_graphs if missing_in_graphs else None
            ))

    if core_formulas:
        formula_missing_in_teoria = []
        formula_missing_in_ejemplos = []

        for f in core_formulas:
            label = f.get("id") or f.get("target") or f.get("latex", "")[:50]

            # Para teoría y ejemplos usamos id/target; el latex entero es demasiado frágil
            reduced = {
                "id": f.get("id", ""),
                "symbol": f.get("target", ""),
                "name": "",
                "target": f.get("target", ""),
            }

            if not _entry_present_in_text(reduced, teoria_text):
                formula_missing_in_teoria.append(label)

            if not _entry_present_in_text(reduced, ejemplos_text):
                formula_missing_in_ejemplos.append(label)

        checks.append(CheckResult(
            not formula_missing_in_teoria,
            "coverage: fórmulas núcleo presentes en teoria.md",
            formula_missing_in_teoria if formula_missing_in_teoria else None
        ))

        checks.append(CheckResult(
            not formula_missing_in_ejemplos,
            "coverage: fórmulas núcleo presentes en ejemplos.md",
            formula_missing_in_ejemplos if formula_missing_in_ejemplos else None
        ))

    if core_magnitudes and core_formulas:
        cross_orphans = []
        formula_blob = " ".join(
            f"{f.get('id', '')} {f.get('target', '')} {f.get('latex', '')}"
            for f in formulas
        )
        for m in core_magnitudes:
            mag_label = m.get("id") or m.get("symbol")
            symbol = m.get("symbol", "")
            mag_id = m.get("id", "")
            if not ((mag_id and _text_contains_token(formula_blob, mag_id)) or (symbol and _text_contains_token(formula_blob, symbol))):
                cross_orphans.append(mag_label)

        checks.append(CheckResult(
            not cross_orphans,
            "coverage: magnitudes núcleo conectadas con formulas.yaml",
            cross_orphans if cross_orphans else None
        ))

    return checks

def validate_example_semantics(
    leaf_dir: Path,
    mag_path: Path,
    for_path: Path,
    lang: str = "es",
) -> List[CheckResult]:
    """Comprueba que ejemplos.md use el núcleo físico del leaf y no sea genérico."""
    checks: List[CheckResult] = []

    ejemplos_file = leaf_dir / ("ejemplos.md" if lang == "es" else "ejemplos.en.md")
    teoria_file = leaf_dir / ("teoria.md" if lang == "es" else "teoria.en.md")

    if not ejemplos_file.exists():
        return [CheckResult(False, f"example_semantics: {ejemplos_file.name} no existe")]

    ejemplos_text = read_text(ejemplos_file)
    teoria_text = read_text(teoria_file) if teoria_file.exists() else ""

    magnitudes = _collect_magnitude_entries(mag_path) if mag_path.exists() else []
    formulas = _collect_formula_entries(for_path) if for_path.exists() else []

    core_magnitudes = _rank_core_magnitudes(magnitudes, formulas)
    core_formulas = _rank_core_formulas(formulas)

    # Secciones principales del ejemplo tipo examen
    if lang == "es":
        sec_modelo = _extract_markdown_section(ejemplos_text, "Modelo físico")
        sec_just = _extract_markdown_section(ejemplos_text, "Justificación del modelo")
        sec_res_simb = _extract_markdown_section(ejemplos_text, "Resolución simbólica")
        sec_sust = _extract_markdown_section(ejemplos_text, "Sustitución numérica")
        sec_interp = _extract_markdown_section(ejemplos_text, "Interpretación física")
        sec_estim = _extract_markdown_section(ejemplos_text, "Estimación física")
    else:
        sec_modelo = _extract_markdown_section(ejemplos_text, "Physical model")
        sec_just = _extract_markdown_section(ejemplos_text, "Model justification")
        sec_res_simb = _extract_markdown_section(ejemplos_text, "Symbolic solution")
        sec_sust = _extract_markdown_section(ejemplos_text, "Numerical substitution")
        sec_interp = _extract_markdown_section(ejemplos_text, "Physical interpretation")
        sec_estim = _extract_markdown_section(ejemplos_text, "Physical estimation")

    # 1) Uso de magnitudes núcleo en el ejemplo
    if core_magnitudes:
        missing_core_magnitudes = []
        for m in core_magnitudes:
            if not _entry_present_in_text(m, ejemplos_text):
                missing_core_magnitudes.append(m.get("id") or m.get("symbol") or m.get("name"))

        checks.append(CheckResult(
            not missing_core_magnitudes,
            f"example_semantics ({lang}): el ejemplo usa magnitudes núcleo del leaf",
            missing_core_magnitudes if missing_core_magnitudes else None
        ))

    # 2) Uso de fórmulas núcleo en la resolución simbólica / sustitución
    if core_formulas:
        missing_core_formulas = []
        target_blob = f"{sec_res_simb}\n{sec_sust}"
        for f in core_formulas:
            reduced = _build_formula_search_entry(f)
            if not _entry_present_in_text(reduced, target_blob):
                missing_core_formulas.append(f.get("id") or f.get("target") or f.get("latex", "")[:50])

        checks.append(CheckResult(
            not missing_core_formulas,
            f"example_semantics ({lang}): la resolución usa fórmulas núcleo del leaf",
            missing_core_formulas if missing_core_formulas else None
        ))

    # 3) El modelo físico debe mencionar magnitudes o relaciones propias del leaf
    model_has_physics = False
    if sec_modelo:
        model_has_physics = any(_entry_present_in_text(m, sec_modelo) for m in core_magnitudes) or \
                            any(_entry_present_in_text(_build_formula_search_entry(f), sec_modelo) for f in core_formulas)

    checks.append(CheckResult(
        model_has_physics,
        f"example_semantics ({lang}): la sección de modelo físico está anclada al leaf",
        None if model_has_physics else "El modelo físico no menciona magnitudes ni relaciones núcleo del tema"
    ))

    # 4) La justificación del modelo debe contener lenguaje causal / de validez
    if lang == "es":
        justification_markers = [
            "porque", "se desprecia", "se asume", "se considera", "aproxim", "válido",
            "modelo", "ideal", "rozamiento", "constante", "uniforme", "pequeño"
        ]
    else:
        justification_markers = [
            "because", "we neglect", "we assume", "we consider", "approx", "valid",
            "model", "ideal", "friction", "constant", "uniform", "small"
        ]

    just_ok = sec_just and any(marker in _normalize_text_for_search(sec_just) for marker in justification_markers)
    checks.append(CheckResult(
        bool(just_ok),
        f"example_semantics ({lang}): la justificación del modelo es físicamente explícita",
        None if just_ok else "La justificación del modelo parece débil o genérica"
    ))

    # 5) La interpretación física debe ir más allá del resultado numérico
    if lang == "es":
        interp_markers = [
            "significa", "indica", "esto implica", "por tanto", "aumenta", "disminuye",
            "depende", "domina", "se opone", "se compensa", "coherente", "físicamente"
        ]
    else:
        interp_markers = [
            "means", "indicates", "this implies", "therefore", "increases", "decreases",
            "depends", "dominates", "opposes", "balances", "consistent", "physically"
        ]

    interp_ok = sec_interp and any(marker in _normalize_text_for_search(sec_interp) for marker in interp_markers)
    checks.append(CheckResult(
        bool(interp_ok),
        f"example_semantics ({lang}): la interpretación física no es solo numérica",
        None if interp_ok else "La interpretación física parece demasiado mecánica o corta"
    ))

    # 6) El ejemplo debe reutilizar al menos un elemento que aparezca también en teoría
    theory_bridge_ok = False
    if teoria_text:
        shared_tokens = 0

        for m in core_magnitudes:
            if _entry_present_in_text(m, teoria_text) and _entry_present_in_text(m, ejemplos_text):
                shared_tokens += 1

        for f in core_formulas:
            reduced = _build_formula_search_entry(f)
            if _entry_present_in_text(reduced, teoria_text) and _entry_present_in_text(reduced, ejemplos_text):
                shared_tokens += 1

        theory_bridge_ok = shared_tokens >= 2

    checks.append(CheckResult(
        theory_bridge_ok,
        f"example_semantics ({lang}): el ejemplo está conectado con la teoría del leaf",
        None if theory_bridge_ok else "Poca continuidad entre teoría y ejemplo en magnitudes/fórmulas núcleo"
    ))

    # 7) El ejemplo de aplicación real debe tener estimación o transferencia física
    estimation_ok = False
    if sec_estim:
        if lang == "es":
            estimation_markers = ["orden", "estim", "aproxim", "escala", "magnitud", "valor razonable"]
        else:
            estimation_markers = ["order", "estim", "approx", "scale", "magnitude", "reasonable value"]

        estimation_ok = any(marker in _normalize_text_for_search(sec_estim) for marker in estimation_markers)

    checks.append(CheckResult(
        estimation_ok,
        f"example_semantics ({lang}): el ejemplo real incluye estimación o lectura cuantitativa",
        None if estimation_ok else "La sección de estimación física parece débil o ausente semánticamente"
    ))

    return checks

def validate_interpretation_semantics(
    leaf_dir: Path,
    mag_path: Path,
    for_path: Path,
    interp_path: Path,
) -> List[CheckResult]:
    """Valida que interpretacion.yaml tenga contenido físico útil y conectado con el leaf."""
    checks: List[CheckResult] = []

    if not interp_path.exists():
        return [CheckResult(False, "interpretation_semantics: interpretacion.yaml no existe")]

    try:
        data = load_yaml(interp_path)
    except Exception as e:
        return [CheckResult(False, "interpretation_semantics: interpretacion.yaml YAML válido", str(e))]

    if not isinstance(data, dict):
        return [CheckResult(False, "interpretation_semantics: interpretacion.yaml es mapping válido", data)]

    teoria_text = _read_optional_text(leaf_dir / "teoria.md")
    ejemplos_text = _read_optional_text(leaf_dir / "ejemplos.md")
    graph_texts = _collect_graph_texts(leaf_dir)
    graph_blob = "\n".join(graph_texts.values()) if graph_texts else ""

    magnitudes = _collect_magnitude_entries(mag_path) if mag_path.exists() else []
    formulas = _collect_formula_entries(for_path) if for_path.exists() else []

    core_magnitudes = _rank_core_magnitudes(magnitudes, formulas)
    core_formulas = _rank_core_formulas(formulas)

    deps = _safe_dict(data.get("dependencies"))
    dep_mags = [str(x).strip() for x in _safe_list(deps.get("magnitudes")) if str(x).strip()]
    dep_formulas = [str(x).strip() for x in _safe_list(deps.get("formulas")) if str(x).strip()]
    targets = _safe_dict(data.get("targets"))

    interp_full_text = _yaml_to_searchable_text(data)

    required_targets = [
        "summary",
        "physical_reading",
        "coherence",
        "model_validity",
        "graph_reading",
        "likely_errors",
        "next_step",
    ]

    result_blocks = _safe_dict(data.get("result_blocks"))
    output_contract = _safe_dict(data.get("output_contract"))
    declared_sections = [str(x).strip() for x in _safe_list(output_contract.get("sections")) if str(x).strip()]

    rule_key_map = {
        "summary": "summary_rules",
        "physical_reading": "physical_reading_rules",
        "coherence": "coherence_rules",
        "model_validity": "model_validity_rules",
        "graph_reading": "graph_rules",
        "likely_errors": "likely_errors",
        "next_step": "next_step_rules",
    }

    def _collect_section_rule_text(section_key: str) -> str:
        texts: List[str] = []
        rule_key = rule_key_map.get(section_key)
        if not rule_key:
            return ""
        for target_data in targets.values():
            if not isinstance(target_data, dict):
                continue
            block = target_data.get(rule_key)
            if isinstance(block, list):
                for item in block:
                    if isinstance(item, dict):
                        texts.append(_yaml_to_searchable_text(item))
        return "\n".join(t for t in texts if t).strip()

    # 1) Secciones semánticas mínimas presentes y no vacías
    missing_targets = [k for k in required_targets if k not in declared_sections or k not in result_blocks]
    checks.append(CheckResult(
        not missing_targets,
        "interpretation_semantics: targets obligatorios presentes",
        missing_targets if missing_targets else None
    ))

    empty_targets = []
    for key in required_targets:
        text = _collect_section_rule_text(key)
        if count_words(text) < 8:
            empty_targets.append(key)

    checks.append(CheckResult(
        not empty_targets,
        "interpretation_semantics: targets obligatorios con contenido semántico mínimo",
        empty_targets if empty_targets else None
    ))

    # 2) La interpretación usa magnitudes núcleo del leaf
    if core_magnitudes:
        missing_core_mags = [
            m.get("id") or m.get("symbol") or m.get("name")
            for m in core_magnitudes
            if not _entry_present_in_text(m, interp_full_text)
        ]
        checks.append(CheckResult(
            not missing_core_mags,
            "interpretation_semantics: la interpretación usa magnitudes núcleo del leaf",
            missing_core_mags if missing_core_mags else None
        ))

    # 3) La interpretación usa fórmulas núcleo del leaf
    if core_formulas:
        missing_core_formulas = []
        for f in core_formulas:
            reduced = _build_formula_search_entry(f)
            if not _entry_present_in_text(reduced, interp_full_text):
                missing_core_formulas.append(f.get("id") or f.get("target") or f.get("latex", "")[:60])

        checks.append(CheckResult(
            not missing_core_formulas,
            "interpretation_semantics: la interpretación usa fórmulas núcleo del leaf",
            missing_core_formulas if missing_core_formulas else None
        ))

    # 4) dependencies debe cubrir parte del núcleo
    core_mag_ids = {m.get("id", "").strip() for m in core_magnitudes if m.get("id", "").strip()}
    core_formula_ids = {f.get("id", "").strip() for f in core_formulas if f.get("id", "").strip()}

    covered_core_mags = sorted(core_mag_ids.intersection(dep_mags))
    covered_core_formulas = sorted(core_formula_ids.intersection(dep_formulas))

    checks.append(CheckResult(
        len(covered_core_mags) >= max(1, min(2, len(core_mag_ids))) if core_mag_ids else True,
        "interpretation_semantics: dependencies.magnitudes cubre el núcleo del leaf",
        {
            "core": sorted(core_mag_ids),
            "covered": covered_core_mags,
        } if core_mag_ids and len(covered_core_mags) < max(1, min(2, len(core_mag_ids))) else None
    ))

    checks.append(CheckResult(
        len(covered_core_formulas) >= max(1, min(2, len(core_formula_ids))) if core_formula_ids else True,
        "interpretation_semantics: dependencies.formulas cubre el núcleo del leaf",
        {
            "core": sorted(core_formula_ids),
            "covered": covered_core_formulas,
        } if core_formula_ids and len(covered_core_formulas) < max(1, min(2, len(core_formula_ids))) else None
    ))

    # 5) summary debe tener lectura física, no solo título elegante
    summary_text = _collect_section_rule_text("summary")
    summary_markers = [
        "indica", "significa", "resume", "describe", "depends", "depende",
        "resultante", "equilibr", "aumenta", "disminuye", "domina", "balance"
    ]
    summary_ok = count_words(summary_text) >= 12 and _marker_hit(summary_text, summary_markers)
    checks.append(CheckResult(
        summary_ok,
        "interpretation_semantics: summary contiene lectura física explícita",
        None if summary_ok else summary_text[:180]
    ))

    # 6) physical_reading debe contener lenguaje causal / interpretativo
    physical_text = _collect_section_rule_text("physical_reading")
    physical_markers = [
        "porque", "por tanto", "indica", "significa", "se opone", "se compensa",
        "depende", "domina", "if", "because", "therefore", "means", "indicates",
        "balances", "opposes", "depends", "dominates"
    ]
    physical_ok = count_words(physical_text) >= 20 and _marker_hit(physical_text, physical_markers)
    checks.append(CheckResult(
        physical_ok,
        "interpretation_semantics: physical_reading usa lenguaje causal y no solo descriptivo",
        None if physical_ok else physical_text[:180]
    ))

    # 7) model_validity debe hablar de condiciones de validez / fallo
    validity_text = _collect_section_rule_text("model_validity")
    validity_markers = [
        "válido", "deja de valer", "aproxim", "supone", "asume", "limite",
        "regimen", "pequeño", "despreci", "fricción", "valid", "breaks down",
        "assume", "approx", "limit", "regime", "neglect", "small"
    ]
    validity_ok = count_words(validity_text) >= 12 and _marker_hit(validity_text, validity_markers)
    checks.append(CheckResult(
        validity_ok,
        "interpretation_semantics: model_validity expresa condiciones de validez o fallo",
        None if validity_ok else validity_text[:180]
    ))

    # 8) likely_errors debe describir errores de alumno plausibles
    likely_errors_text = _collect_section_rule_text("likely_errors")
    error_markers = [
        "confundir", "pensar", "creer", "olvidar", "tomar", "suponer",
        "mistake", "confuse", "assume", "forget", "believe", "wrongly"
    ]
    likely_errors_ok = count_words(likely_errors_text) >= 10 and _marker_hit(likely_errors_text, error_markers)
    checks.append(CheckResult(
        likely_errors_ok,
        "interpretation_semantics: likely_errors contiene errores conceptuales plausibles",
        None if likely_errors_ok else likely_errors_text[:180]
    ))

    # 9) graph_reading debe estar anclado al gráfico o a magnitudes visibles
    graph_reading_text = _collect_section_rule_text("graph_reading")
    graph_markers = [
        "gráfico", "curva", "pendiente", "área", "eje", "flecha", "vector",
        "graph", "curve", "slope", "area", "axis", "arrow", "vector"
    ]
    graph_reading_ok = count_words(graph_reading_text) >= 10 and (
        _marker_hit(graph_reading_text, graph_markers)
        or any(_entry_present_in_text(m, graph_reading_text) for m in core_magnitudes)
    )
    checks.append(CheckResult(
        graph_reading_ok,
        "interpretation_semantics: graph_reading está anclado a una lectura visual/física",
        None if graph_reading_ok else graph_reading_text[:180]
    ))

    # 10) si hay gráficos, graph_reading debe compartir algo con los archivos gráficos
    if graph_blob.strip():
        shared_with_graphs = 0
        for m in core_magnitudes:
            if _entry_present_in_text(m, graph_reading_text) and _entry_present_in_text(m, graph_blob):
                shared_with_graphs += 1
        for f in core_formulas:
            reduced = _build_formula_search_entry(f)
            if _entry_present_in_text(reduced, graph_reading_text) and _entry_present_in_text(reduced, graph_blob):
                shared_with_graphs += 1

        checks.append(CheckResult(
            shared_with_graphs >= 1,
            "interpretation_semantics: graph_reading comparte semántica con los archivos de gráficos",
            None if shared_with_graphs >= 1 else {
                "graph_reading": graph_reading_text[:160],
                "graphs_detected": list(graph_texts.keys())[:8],
            }
        ))

    # 11) next_step debe orientar al alumno, no ser un adorno
    next_step_text = _collect_section_rule_text("next_step")
    next_step_markers = [
        "siguiente", "ahora", "prueba", "compara", "conecta", "continua", "revisa",
        "next", "now", "try", "compare", "connect", "continue", "review"
    ]
    next_step_ok = count_words(next_step_text) >= 8 and _marker_hit(next_step_text, next_step_markers)
    checks.append(CheckResult(
        next_step_ok,
        "interpretation_semantics: next_step orienta la progresión del alumno",
        None if next_step_ok else next_step_text[:180]
    ))

    # 12) continuidad con teoría
    theory_bridge_hits = _count_shared_core_hits(core_magnitudes, core_formulas, teoria_text, interp_full_text) if teoria_text else 0
    checks.append(CheckResult(
        theory_bridge_hits >= 2 if teoria_text else True,
        "interpretation_semantics: la interpretación mantiene continuidad con teoria.md",
        None if theory_bridge_hits >= 2 or not teoria_text else f"shared_core_hits={theory_bridge_hits}"
    ))

    # 13) continuidad con ejemplos
    example_bridge_hits = _count_shared_core_hits(core_magnitudes, core_formulas, ejemplos_text, interp_full_text) if ejemplos_text else 0
    checks.append(CheckResult(
        example_bridge_hits >= 2 if ejemplos_text else True,
        "interpretation_semantics: la interpretación mantiene continuidad con ejemplos.md",
        None if example_bridge_hits >= 2 or not ejemplos_text else f"shared_core_hits={example_bridge_hits}"
    ))

    return checks

def validate_leaf_didactic_contract(
    leaf_dir: Path,
    mag_path: Path,
    for_path: Path,
    interp_path: Path,
) -> List[CheckResult]:
    """Comprueba que teoría, ejemplos, interpretación y gráficos compartan núcleo didáctico."""

    checks: List[CheckResult] = []

    teoria_text = _read_optional_text(leaf_dir / "teoria.md")
    ejemplos_text = _read_optional_text(leaf_dir / "ejemplos.md")
    interpretacion_text = _yaml_to_searchable_text(load_yaml(interp_path)) if interp_path.exists() else ""
    graph_texts = _collect_graph_texts(leaf_dir)
    graph_blob = "\n".join(graph_texts.values()) if graph_texts else ""

    magnitudes = _collect_magnitude_entries(mag_path) if mag_path.exists() else []
    formulas = _collect_formula_entries(for_path) if for_path.exists() else []

    core_magnitudes = _rank_core_magnitudes(magnitudes, formulas)
    core_formulas = _rank_core_formulas(formulas)

    # núcleo en teoría
    theory_hits = sum(1 for m in core_magnitudes if _entry_present_in_text(m, teoria_text))
    checks.append(CheckResult(theory_hits >= 2, "didactic_contract: teoría cubre núcleo", f"hits={theory_hits}"))

    # núcleo en ejemplos
    example_hits = sum(1 for m in core_magnitudes if _entry_present_in_text(m, ejemplos_text))
    checks.append(CheckResult(example_hits >= 2, "didactic_contract: ejemplos usan núcleo", f"hits={example_hits}"))

    # núcleo en interpretación
    interp_hits = sum(1 for m in core_magnitudes if _entry_present_in_text(m, interpretacion_text))
    checks.append(CheckResult(interp_hits >= 2, "didactic_contract: interpretación usa núcleo", f"hits={interp_hits}"))

    # núcleo en gráficos
    if graph_blob:
        graph_hits = sum(1 for m in core_magnitudes if _entry_present_in_text(m, graph_blob))
        checks.append(CheckResult(graph_hits >= 1, "didactic_contract: gráficos representan núcleo", f"hits={graph_hits}"))

    # coherencia cruzada
    bridge = _count_shared_core_hits(core_magnitudes, core_formulas, teoria_text, ejemplos_text)
    checks.append(CheckResult(bridge >= 2, "didactic_contract: teoría ↔ ejemplos conectados", f"shared={bridge}"))

    return checks

def validate_learning_dynamics(
    leaf_dir: Path,
    mag_path: Path,
    for_path: Path,
) -> List[CheckResult]:
    """
    Valida la progresión didáctica del leaf:
    - nivel esencial → intuición
    - nivel formal → matemáticas
    - nivel estructural → límites y conexiones
    """

    checks: List[CheckResult] = []

    teoria_path = leaf_dir / "teoria.md"
    if not teoria_path.exists():
        return [CheckResult(False, "learning_dynamics: teoria.md no existe")]

    teoria_text = read_text(teoria_path)

    magnitudes = _collect_magnitude_entries(mag_path) if mag_path.exists() else []
    formulas = _collect_formula_entries(for_path) if for_path.exists() else []

    core_magnitudes = _rank_core_magnitudes(magnitudes, formulas)
    core_formulas = _rank_core_formulas(formulas)

    # ---------------------------------------------
    # EXTRAER SECCIONES CLAVE
    # ---------------------------------------------

    esencial = _extract_markdown_section(teoria_text, "## 🟢 Nivel esencial")
    formal = _extract_markdown_section(teoria_text, "## 🔵 Nivel formal")
    estructural = _extract_markdown_section(teoria_text, "## 🔴 Nivel estructural")

    # ---------------------------------------------
    # 1. Nivel esencial → debe ser conceptual
    # ---------------------------------------------

    esencial_has_equations = bool(re.search(r"[=^]", esencial))
    esencial_has_concepts = (
        any(_entry_present_in_text(m, esencial) for m in core_magnitudes)
        or count_words(esencial) > 120
    )

    checks.append(CheckResult(
        esencial_has_concepts and not esencial_has_equations,
        "learning_dynamics: nivel esencial es conceptual (sin abuso matemático)",
        None if (esencial_has_concepts and not esencial_has_equations)
        else "Nivel esencial demasiado matemático o vacío conceptualmente"
    ))

    # ---------------------------------------------
    # 2. Nivel formal → debe introducir fórmulas
    # ---------------------------------------------

    formal_formula_hits = sum(
        1 for f in core_formulas
        if _entry_present_in_text(_build_formula_search_entry(f), formal)
    )

    checks.append(CheckResult(
        formal_formula_hits >= 2,
        "learning_dynamics: nivel formal introduce relaciones matemáticas",
        f"hits={formal_formula_hits}"
    ))

    # ---------------------------------------------
    # 3. Nivel estructural → debe hablar de límites
    # ---------------------------------------------

    estructural_markers = [
        "cuando", "si", "depende", "límite", "aproxim",
        "válido", "no válido", "caso", "condición",
        "when", "depends", "limit", "valid", "condition"
    ]

    estructural_ok = any(
        marker in _normalize_text_for_search(estructural)
        for marker in estructural_markers
    )

    checks.append(CheckResult(
        estructural_ok,
        "learning_dynamics: nivel estructural analiza condiciones y límites",
        None if estructural_ok else "Nivel estructural sin análisis de validez"
    ))

    # ---------------------------------------------
    # 4. Progresión real entre niveles
    # ---------------------------------------------

    esencial_words = count_words(esencial)
    formal_words = count_words(formal)
    estructural_words = count_words(estructural)

    progression_ok = (
        esencial_words > 100 and
        formal_words > 150 and
        estructural_words > 120
    )

    checks.append(CheckResult(
        progression_ok,
        "learning_dynamics: progresión de profundidad entre niveles",
        {
            "esencial": esencial_words,
            "formal": formal_words,
            "estructural": estructural_words
        }
    ))

    # ---------------------------------------------
    # 5. No repetición entre niveles
    # ---------------------------------------------

    overlap_ef = normalize_prose_fragment(esencial)[:200] == normalize_prose_fragment(formal)[:200]
    overlap_fs = normalize_prose_fragment(formal)[:200] == normalize_prose_fragment(estructural)[:200]

    checks.append(CheckResult(
        not (overlap_ef or overlap_fs),
        "learning_dynamics: niveles no son repetición del mismo contenido",
        "Se detecta solapamiento fuerte entre niveles"
    ))

    return checks

def validate_cognitive_load(
    leaf_dir: Path,
    mag_path: Path,
    for_path: Path,
) -> List[CheckResult]:
    """
    Valida la carga cognitiva del leaf:
    - saturación de variables
    - saltos cognitivos entre niveles
    - distribución desequilibrada de densidad
    """

    checks: List[CheckResult] = []

    teoria_path = leaf_dir / "teoria.md"
    if not teoria_path.exists():
        return [CheckResult(False, "cognitive_load: teoria.md no existe")]

    teoria_text = read_text(teoria_path)

    magnitudes = _collect_magnitude_entries(mag_path) if mag_path.exists() else []
    formulas = _collect_formula_entries(for_path) if for_path.exists() else []

    core_magnitudes = _rank_core_magnitudes(magnitudes, formulas)
    core_formulas = _rank_core_formulas(formulas)

    esencial = _extract_markdown_section(teoria_text, "## 🟢 Nivel esencial")
    formal = _extract_markdown_section(teoria_text, "## 🔵 Nivel formal")
    estructural = _extract_markdown_section(teoria_text, "## 🔴 Nivel estructural")

    # 1) Saturación de variables en nivel esencial
    essential_mag_hits = sum(
        1 for m in magnitudes if _entry_present_in_text(m, esencial)
    )
    checks.append(CheckResult(
        essential_mag_hits <= 6,
        "cognitive_load: nivel esencial sin saturación de variables",
        f"variables_detectadas={essential_mag_hits}"
    ))

    # 2) Nivel esencial no debe introducir demasiadas fórmulas núcleo
    essential_formula_hits = len({
        (f.get("target") or f.get("id") or "").strip()
        for f in core_formulas
        if _entry_present_in_text(_build_formula_search_entry(f), esencial)
    })
    checks.append(CheckResult(
        essential_formula_hits <= 1,
        "cognitive_load: nivel esencial no adelanta demasiadas fórmulas",
        f"formula_hits={essential_formula_hits}"
    ))

    # 3) Nivel formal sí debe aumentar complejidad respecto al esencial
    formal_mag_hits = sum(
        1 for m in magnitudes if _entry_present_in_text(m, formal)
    )
    checks.append(CheckResult(
        formal_mag_hits >= essential_mag_hits,
        "cognitive_load: nivel formal aumenta complejidad respecto al esencial",
        {
            "esencial": essential_mag_hits,
            "formal": formal_mag_hits,
        }
    ))

    # 4) El salto formal -> estructural no debe ser vacío
    estructural_words = count_words(estructural)
    checks.append(CheckResult(
        estructural_words >= 120,
        "cognitive_load: nivel estructural tiene masa crítica suficiente",
        f"words={estructural_words}"
    ))

    # 5) Distribución de densidad razonable
    esencial_words = count_words(esencial)
    formal_words = count_words(formal)

    density_ok = (
        esencial_words >= 120 and
        formal_words >= 180 and
        estructural_words >= 120 and
        formal_words >= esencial_words * 0.8 and
        estructural_words >= esencial_words * 0.6
    )

    checks.append(CheckResult(
        density_ok,
        "cognitive_load: densidad distribuida razonablemente entre niveles",
        {
            "esencial": esencial_words,
            "formal": formal_words,
            "estructural": estructural_words,
        }
    ))

    # 6) Detectar salto cognitivo brusco por concentración extrema en formal
    abrupt_jump = formal_words > max(1, esencial_words) * 3
    checks.append(CheckResult(
        not abrupt_jump,
        "cognitive_load: no hay salto cognitivo brusco entre esencial y formal",
        {
            "esencial": esencial_words,
            "formal": formal_words,
        } if abrupt_jump else None
    ))

    # 7) Exceso de magnitudes núcleo simultáneas en teoría completa
    total_core_hits = sum(
        1 for m in core_magnitudes if _entry_present_in_text(m, teoria_text)
    )
    checks.append(CheckResult(
        total_core_hits <= 8,
        "cognitive_load: núcleo del leaf manejable para un único tema",
        f"core_hits={total_core_hits}"
    ))

    return checks

def auto_fix_suggestions(summary: Dict[str, Any]) -> List[str]:
    """Genera sugerencias automáticas de mejora a partir del resumen del leaf."""

    groups = summary.get("groups", {})
    suggestions: List[str] = []

    def failed(group_name: str) -> List[Dict[str, Any]]:
        group = groups.get(group_name, {})
        return [c for c in group.get("checks", []) if not c.get("ok")]

    # 1) Coverage
    if failed("coverage"):
        suggestions.append("Añadir explícitamente las magnitudes núcleo en teoria.md y ejemplos.md.")
        suggestions.append("Revisar que las fórmulas núcleo aparezcan explicadas en teoría y usadas en ejemplos.")

    # 2) Example semantics
    if failed("example_semantics"):
        suggestions.append("Reescribir ejemplos.md para que el modelo físico use variables y fórmulas propias del leaf.")
        suggestions.append("Ampliar la justificación del modelo en ejemplos.md con causalidad física explícita.")
        suggestions.append("Fortalecer la interpretación física del ejemplo, evitando cierre puramente numérico.")

    if failed("example_semantics_en"):
        suggestions.append("Alinear ejemplos.en.md con el núcleo conceptual del leaf, no solo traducir estructura.")

    # 3) Interpretation semantics
    if failed("interpretation_semantics"):
        suggestions.append("Reforzar interpretacion.yaml con lectura física real: summary, physical_reading, model_validity y likely_errors.")
        suggestions.append("Conectar interpretacion.yaml con magnitudes y fórmulas núcleo declaradas en YAML.")

    # 4) Didactic contract
    if failed("didactic_contract"):
        suggestions.append("Alinear teoría, ejemplos, interpretación y gráficos para que expliquen la misma idea física dominante.")
        suggestions.append("Introducir una magnitud o relación dominante más visible a lo largo de todo el leaf.")

    # 5) Learning dynamics
    if failed("learning_dynamics"):
        suggestions.append("Separar mejor los niveles: esencial intuitivo, formal matemático, estructural con límites y condiciones.")
        suggestions.append("Evitar repetir la misma explicación en los tres niveles de teoria.md.")

    # 6) Cognitive load
    if failed("cognitive_load"):
        suggestions.append("Reducir saturación de variables en el nivel esencial y reservar complejidad para el nivel formal.")
        suggestions.append("Redistribuir densidad entre niveles para evitar saltos cognitivos bruscos.")
        suggestions.append("Mover parte de la carga técnica del nivel esencial al formal o estructural.")

    # 7) Symbols
    if failed("symbols"):
        suggestions.append("Corregir símbolos usados en teoría/ejemplos que no estén definidos en magnitudes.yaml.")

    # 8) Coherence
    if failed("coherencia"):
        suggestions.append("Revisar consistencia entre magnitudes.yaml, formulas.yaml e interpretacion.yaml.")
        suggestions.append("Unificar ids, targets y nombres de variables entre todos los archivos del leaf.")

    # 9) Graphs
    if failed("graphs") or failed("coord_semantic"):
        suggestions.append("Alinear gráficos con parámetros reales del leaf y eliminar visualizaciones decorativas.")
        suggestions.append("Hacer que los gráficos representen al menos una magnitud o relación núcleo del tema.")

    # 10) Theory / content density
    if failed("teoria") or failed("teoria_en"):
        suggestions.append("Ampliar teoria.md / teoria.en.md reforzando interpretación física, orden de magnitud y método de resolución.")
    if failed("modelos") or failed("modelos_en"):
        suggestions.append("Desarrollar mejor modelos.md con dominio de validez cuantitativo y señales de fallo.")
    if failed("errores") or failed("errores_en"):
        suggestions.append("Añadir errores típicos plausibles de alumno, no solo errores genéricos.")
    if failed("historia") or failed("historia_en"):
        suggestions.append("Dar más peso a qué cambió conceptualmente y su conexión con física moderna.")

    # Eliminar duplicados conservando orden
    seen = set()
    deduped: List[str] = []
    for s in suggestions:
        if s not in seen:
            seen.add(s)
            deduped.append(s)

    return deduped[:12]

def build_audit_report(summary: Dict[str, Any]) -> Dict[str, Any]:
    """Genera un diagnóstico accionable por capas a partir del resumen del leaf."""

    groups = summary.get("groups", {})
    leaf_name = summary.get("leaf_name", "leaf")

    def fails(group_name: str) -> List[str]:
        g = groups.get(group_name, {})
        return [c["message"] for c in g.get("checks", []) if not c.get("ok")]

    # -- Capas -------------------------------------
    structure_groups = ["files", "meta", "meta_map", "magnitudes", "formulas", "render_math"]
    content_groups = ["teoria", "modelos", "errores", "historia", "ejemplos", "aplicaciones"]
    semantic_groups = ["coverage", "example_semantics", "interpretation_semantics"]
    didactic_groups = ["didactic_contract", "learning_dynamics", "cognitive_load"]

    structure_fails = sum((fails(g) for g in structure_groups), [])
    content_fails   = sum((fails(g) for g in content_groups), [])
    semantic_fails  = sum((fails(g) for g in semantic_groups), [])
    didactic_fails  = sum((fails(g) for g in didactic_groups), [])

    # -- Acciones sugeridas ------------------------
    actions: List[str] = []

    if semantic_fails:
        actions.append("Alinear magnitudes y fórmulas núcleo entre teoría, ejemplos e interpretación.")
        actions.append("Asegurar que ejemplos usan fórmulas del leaf (no tangenciales).")

    if didactic_fails:
        actions.append("Refuerza progresión: esencial → formal → estructural (menos repetición, más profundidad).")
        actions.append("Añade análisis de validez y límites en nivel estructural.")
        actions.append("Controla la carga cognitiva: menos saturación en esencial y mejor distribución de densidad.")

    if "coverage" in groups and any(not c["ok"] for c in groups["coverage"]["checks"]):
        actions.append("Introduce explícitamente magnitudes núcleo en teoría y ejemplos.")

    if "example_semantics" in groups and any(not c["ok"] for c in groups["example_semantics"]["checks"]):
        actions.append("Reescribe ejemplo: modelo físico + justificación + interpretación causal.")

    if "interpretation_semantics" in groups and any(not c["ok"] for c in groups["interpretation_semantics"]["checks"]):
        actions.append("Fortalece interpretacion.yaml: lectura física, errores típicos y next_step útiles.")

    if "render_math" in groups and any(not c["ok"] for c in groups["render_math"]["checks"]):
        actions.append("Elimina bloques LaTeX manuales ($$) y usa inyección {{f:id}} para estandarizar fórmulas.")

    # -- Score por capa ---------------------------
    def score_of(g):
        return groups.get(g, {}).get("score_5", 0)

    report = {
        "leaf": leaf_name,
        "overall_score": summary.get("overall_score_5"),
        "layers": {
            "structure": sum(score_of(g) for g in structure_groups) / max(1, len(structure_groups)),
            "content":   sum(score_of(g) for g in content_groups) / max(1, len(content_groups)),
            "semantic":  sum(score_of(g) for g in semantic_groups) / max(1, len(semantic_groups)),
            "didactic":  sum(score_of(g) for g in didactic_groups) / max(1, len(didactic_groups)),
        },
        "fail_summary": {
            "structure": structure_fails[:5],
            "content": content_fails[:5],
            "semantic": semantic_fails[:5],
            "didactic": didactic_fails[:5],
        },
        "recommended_actions": actions[:6],
    }

    return report

# I. Orquestación

def is_leaf_dir(path: Path) -> bool:
    """Detecta si un directorio tiene el mínimo estructural para ser leaf."""
    if not path.is_dir():
        return False
    core = {"meta.yaml", "magnitudes.yaml", "formulas.yaml"}
    files = {p.name for p in path.iterdir() if p.is_file()}
    return core.issubset(files)

def find_leaf_dirs(root: Path) -> List[Path]:
    """Encuentra todos los leaf válidos dentro de un nodo o subárbol."""
    if is_leaf_dir(root):
        return [root]
    leafs = sorted({p for p in root.rglob("*") if p.is_dir() and is_leaf_dir(p)})
    return leafs

def collect_markdown_word_counts(leaf_dir: Path) -> Dict[str, int]:
    """Cuenta palabras por markdown para incluirlas en el resumen final."""
    counts: Dict[str, int] = {}
    for path in sorted(leaf_dir.glob("*.md")):
        try:
            counts[path.name] = count_words(read_text(path))
        except Exception:
            counts[path.name] = -1
    return counts

# =======================================================================
# CHECKS v5.1 — Endurecimiento de plantilla
# =======================================================================

# CHECK 1 — Reutilización de gráficos
def validate_graph_reuse(leaf_dir: Path, meta_data: dict) -> List[CheckResult]:
    """Valida que cada componente de gráfico no se reutilice más allá de los límites permitidos."""
    MAX_USAGE = {"Coord": 2, "Svg": 1, "Dcl": 1}
    graficos = meta_data.get("graficos") or []
    if not graficos:
        return [CheckResult(True, "graph_reuse: sin gráficos declarados")]
    context, errs = resolve_graph_registry(leaf_dir, meta_data)
    if errs:
        return errs
    assert context is not None
    reverse = context["reverse_components"]
    leaf_id = context["leaf_id"]
    leaf_comps = context["leaf_components"]
    results: List[CheckResult] = []

    for gtype in graficos:
        comp = leaf_comps.get(gtype)
        if not comp:
            continue
        users = reverse.get((gtype, comp), [])
        limit = MAX_USAGE.get(gtype, 1)
        ok = len(users) <= limit
        results.append(CheckResult(
            ok,
            f"graph_reuse: {gtype} '{comp}' usado por <= {limit} leafs",
            None if ok else {"limit": limit, "actual": len(users), "leafs": sorted(users)},
        ))

    if not results:
        results.append(CheckResult(True, "graph_reuse: sin componentes registrados"))
    return results


# CHECK 1B — infoCards obligatorias en SVG profile
def validate_graph_infocards(leaf_dir: Path, meta_data: dict) -> List[CheckResult]:
    """Valida que los profiles SVG declaren infoCards con al menos una tarjeta."""
    graficos = meta_data.get("graficos") or []
    if "Svg" not in graficos:
        return [CheckResult(True, "graph_infocards: no hay Svg declarado")]

    context, errs = resolve_graph_registry(leaf_dir, meta_data)
    if errs:
        return errs
    assert context is not None
    graphs_dir = context["graphs_dir"]
    import_map = context["import_map"]
    leaf_comps = context["leaf_components"]
    root = context["root"]
    results: List[CheckResult] = []

    comp = leaf_comps.get("Svg")
    if not comp:
        return [CheckResult(False, "graph_infocards: Svg no registrado en index.js")]

    rel_path = import_map.get(comp)
    if not rel_path:
        return [CheckResult(False, "graph_infocards: Svg sin import en index.js")]

    file_path = (graphs_dir / rel_path).resolve()
    if not file_path.exists():
        return [CheckResult(False, "graph_infocards: archivo Svg no existe")]

    content = file_path.read_text(encoding="utf-8", errors="replace")
    profile_match = re.search(r'import\s+profile\s+from\s+"([^"]+)"', content)
    if not profile_match:
        return [CheckResult(False, "graph_infocards: Svg no importa profile")]

    profile_rel = profile_match.group(1)
    if profile_rel.startswith("@/"):
        profile_path = (root / "frontend" / "src" / Path(*profile_rel[2:].split("/"))).resolve()
    else:
        profile_path = (file_path.parent / profile_rel).resolve()

    if not profile_path or not profile_path.exists():
        return [CheckResult(False, "graph_infocards: profile no encontrado", str(profile_rel))]

    pcontent = profile_path.read_text(encoding="utf-8", errors="replace")

    has_infocards = bool(re.search(r'infoCards\s*:\s*\[', pcontent))
    results.append(CheckResult(
        has_infocards,
        "graph_infocards: profile declara infoCards",
        None if has_infocards else str(profile_path),
    ))

    if has_infocards:
        # Verificar que hay al menos una tarjeta con key
        card_keys = re.findall(r'key\s*:\s*["\'](\w+)["\']', pcontent)
        has_cards = len(card_keys) >= 1
        results.append(CheckResult(
            has_cards,
            "graph_infocards: infoCards tiene al menos 1 tarjeta con key",
            None if has_cards else str(profile_path),
        ))

        # Verificar que al menos una tarjeta tiene label bilingüe
        has_label_es = bool(re.search(r'label\s*:\s*\{[^}]*es\s*:', pcontent))
        has_label_en = bool(re.search(r'label\s*:\s*\{[^}]*en\s*:', pcontent))
        results.append(CheckResult(
            has_label_es and has_label_en,
            "graph_infocards: infoCards label bilingüe (es/en)",
            None if (has_label_es and has_label_en) else str(profile_path),
        ))

    return results


# CHECK 1C — Estructura obligatoria de profile DCL
def validate_dcl_profile_structure(leaf_dir: Path, meta_data: dict) -> List[CheckResult]:
    """Valida que los profiles DCL tengan escena registrada, vectores y 7 campos de interpretación."""
    graficos = meta_data.get("graficos") or []
    if "Dcl" not in graficos:
        return [CheckResult(True, "dcl_profile: no hay Dcl declarado")]

    context, errs = resolve_graph_registry(leaf_dir, meta_data)
    if errs:
        return errs
    assert context is not None
    graphs_dir = context["graphs_dir"]
    import_map = context["import_map"]
    leaf_comps = context["leaf_components"]
    root = context["root"]
    results: List[CheckResult] = []

    comp = leaf_comps.get("Dcl")
    if not comp:
        return [CheckResult(False, "dcl_profile: Dcl no registrado en index.js")]

    rel_path = import_map.get(comp)
    if not rel_path:
        return [CheckResult(False, "dcl_profile: Dcl sin import en index.js")]

    file_path = (graphs_dir / rel_path).resolve()
    if not file_path.exists():
        return [CheckResult(False, "dcl_profile: archivo Dcl wrapper no existe")]

    content = file_path.read_text(encoding="utf-8", errors="replace")
    profile_match = re.search(r'import\s+profile\s+from\s+"([^"]+)"', content)
    if not profile_match:
        return [CheckResult(True, "dcl_profile: Dcl no importa profile (puede ser legacy)")]

    profile_rel = profile_match.group(1)
    if profile_rel.startswith("@/"):
        profile_path = (root / "frontend" / "src" / Path(*profile_rel[2:].split("/"))).resolve()
    else:
        profile_path = (file_path.parent / profile_rel).resolve()

    # Resolver extensión implícita (.js, .jsx, .ts, .tsx)
    if not profile_path.exists():
        for ext in (".js", ".jsx", ".ts", ".tsx"):
            candidate = Path(str(profile_path) + ext)
            if candidate.exists():
                profile_path = candidate
                break

    if not profile_path or not profile_path.exists():
        return [CheckResult(False, "dcl_profile: profile no encontrado", str(profile_rel))]

    pcontent = profile_path.read_text(encoding="utf-8", errors="replace")

    # 1. Comprobar escena registrada (no CUSTOM si usa createDclGraph)
    REGISTERED_SCENES = {
        "PARTICLE_FREE", "BLOCK_ON_TABLE", "BLOCK_ON_INCLINE",
        "HANGING_MASS", "TWO_MASSES_ROPE", "PULLEY_SIMPLE",
        "TWO_BODIES_HORIZONTAL",
    }
    scene_match = re.search(r'scene\s*:\s*DCL_SCENE_IDS\.(\w+)', pcontent)
    if scene_match:
        scene_name = scene_match.group(1)
        uses_factory = "createDclGraph(" in content
        scene_ok = scene_name in REGISTERED_SCENES
        if uses_factory and scene_name == "CUSTOM":
            results.append(CheckResult(
                False,
                "dcl_profile: escena CUSTOM no está en el Scene Registry (crash en createDclGraph)",
                f"scene: DCL_SCENE_IDS.{scene_name}",
            ))
        else:
            results.append(CheckResult(
                scene_ok,
                "dcl_profile: escena registrada en DCL_SCENE_REGISTRY",
                f"scene: DCL_SCENE_IDS.{scene_name}",
            ))
    else:
        results.append(CheckResult(False, "dcl_profile: no declara scene con DCL_SCENE_IDS"))

    # 2. Comprobar que tiene vectores
    has_vectors = bool(re.search(r'vectors\s*:\s*\[', pcontent))
    results.append(CheckResult(
        has_vectors,
        "dcl_profile: declara bloque vectors",
        None if has_vectors else str(profile_path),
    ))

    if has_vectors:
        vector_count = len(re.findall(r'DCL_VECTOR_TYPE_IDS\.', pcontent))
        results.append(CheckResult(
            vector_count >= 1,
            f"dcl_profile: vectores usan DCL_VECTOR_TYPE_IDS ({vector_count} encontrados)",
            None if vector_count >= 1 else str(profile_path),
        ))

    # 3. Comprobar 7 campos obligatorios de interpretation
    REQUIRED_INTERPRETATION = [
        "header_bridge", "reading_focus", "graph_role",
        "calc_reading", "graph_reading", "physical_insight", "likely_errors",
    ]
    has_interpretation = bool(re.search(r'interpretation\s*:\s*\{', pcontent))
    results.append(CheckResult(
        has_interpretation,
        "dcl_profile: declara bloque interpretation",
        None if has_interpretation else str(profile_path),
    ))

    if has_interpretation:
        missing = [f for f in REQUIRED_INTERPRETATION if not re.search(rf'{f}\s*:', pcontent)]
        results.append(CheckResult(
            len(missing) == 0,
            f"dcl_profile: interpretation tiene los 7 campos obligatorios",
            None if len(missing) == 0 else f"faltan: {', '.join(missing)}",
        ))

    # 4. Comprobar opciones de leyenda/display
    has_legend = bool(re.search(r'showCompactLegend\s*:', pcontent))
    results.append(CheckResult(
        has_legend,
        "dcl_profile: options incluye showCompactLegend",
        None if has_legend else str(profile_path),
    ))

    return results


# CHECK 2 — Identidad de gráfico (graph_identity en profile)
def validate_graph_identity(leaf_dir: Path, meta_data: dict) -> List[CheckResult]:
    """Valida que los profiles SVG declaren graph_identity con pregunta_principal y magnitud_estrella."""
    graficos = meta_data.get("graficos") or []
    if "Svg" not in graficos:
        return [CheckResult(True, "graph_identity: no hay Svg declarado")]

    context, errs = resolve_graph_registry(leaf_dir, meta_data)
    if errs:
        return errs
    assert context is not None
    graphs_dir = context["graphs_dir"]
    import_map = context["import_map"]
    leaf_comps = context["leaf_components"]
    root = context["root"]
    results: List[CheckResult] = []

    comp = leaf_comps.get("Svg")
    if not comp:
        return [CheckResult(False, "graph_identity: Svg no registrado en index.js")]

    rel_path = import_map.get(comp)
    if not rel_path:
        return [CheckResult(False, "graph_identity: Svg sin import en index.js")]

    file_path = (graphs_dir / rel_path).resolve()
    if not file_path.exists():
        return [CheckResult(False, "graph_identity: archivo Svg no existe")]

    content = file_path.read_text(encoding="utf-8", errors="replace")
    profile_match = re.search(r'import\s+profile\s+from\s+"([^"]+)"', content)
    if not profile_match:
        return [CheckResult(False, "graph_identity: Svg no importa profile")]

    profile_rel = profile_match.group(1)
    if profile_rel.startswith("@/"):
        profile_path = (root / "frontend" / "src" / Path(*profile_rel[2:].split("/"))).resolve()
    else:
        profile_path = (file_path.parent / profile_rel).resolve()

    if not profile_path or not profile_path.exists():
        return [CheckResult(False, "graph_identity: profile no encontrado", str(profile_rel))]

    pcontent = profile_path.read_text(encoding="utf-8", errors="replace")

    has_identity = bool(re.search(r'graph_identity\s*[:{]', pcontent))
    results.append(CheckResult(
        has_identity,
        "graph_identity: profile declara graph_identity",
        None if has_identity else str(profile_path),
    ))

    has_pregunta = bool(re.search(r'pregunta_principal\s*[:{]', pcontent))
    results.append(CheckResult(
        has_pregunta,
        "graph_identity: profile declara pregunta_principal",
        None if has_pregunta else str(profile_path),
    ))

    has_mag = bool(re.search(r'magnitud_estrella\s*[:\'"]\s*\S', pcontent))
    results.append(CheckResult(
        has_mag,
        "graph_identity: profile declara magnitud_estrella",
        None if has_mag else str(profile_path),
    ))

    return results


# CHECK 3 — Gráfico decorativo
def validate_graph_not_decorative(leaf_dir: Path, meta_data: dict) -> List[CheckResult]:
    """Detecta gráficos decorativos que no aportan semántica real."""
    graficos = meta_data.get("graficos") or []
    if not graficos:
        return [CheckResult(True, "graph_decorative: sin gráficos declarados")]

    context, errs = resolve_graph_registry(leaf_dir, meta_data)
    if errs:
        return errs
    assert context is not None
    graphs_dir = context["graphs_dir"]
    import_map = context["import_map"]
    leaf_comps = context["leaf_components"]
    root = context["root"]
    results: List[CheckResult] = []

    for gtype in graficos:
        comp = leaf_comps.get(gtype)
        if not comp:
            continue
        rel_path = import_map.get(comp)
        if not rel_path:
            continue
        file_path = (graphs_dir / rel_path).resolve()
        if not file_path.exists():
            continue
        content = file_path.read_text(encoding="utf-8", errors="replace")

        # Los factories inyectan params/sharedParams/callbacks automáticamente
        uses_factory = bool(re.search(r'createSvgGraph\(|createCoordGraph\(|createDclGraph\(|createCoordGraphPage\(', content))

        signals = []
        # ¿emite stateOut o cambia estado de salida?
        if not uses_factory and not re.search(r'stateOut|onGraphStateChange|onInterpretationContextChange|onSharedParamsChange', content):
            signals.append("no emite stateOut ni callbacks de estado")
        # ¿define target interpretable?
        if not uses_factory and not re.search(r'interpretation_binding|interpretationDoc|target', content):
            signals.append("no define target interpretable")
        # ¿cambia con params?
        if not uses_factory and not re.search(r'params|sharedParams|paramsIn', content):
            signals.append("no cambia con params")
        # ¿usa magnitudes reales?
        if not uses_factory and not re.search(r'magnitud|symbol|toNum|parseFloat|Number\(', content):
            signals.append("no depende de magnitudes reales")

        ok = len(signals) < 3
        results.append(CheckResult(
            ok,
            f"graph_decorative: {gtype} '{comp}' no es decorativo",
            None if ok else signals,
        ))

    if not results:
        results.append(CheckResult(True, "graph_decorative: sin componentes analizables"))
    return results


# CHECK 4 — Solapamiento de gráficos
def validate_graph_no_overlap(leaf_dir: Path, meta_data: dict) -> List[CheckResult]:
    """Detecta solapamiento funcional entre tipos de gráfico del leaf."""
    graficos = meta_data.get("graficos") or []
    if len(graficos) < 2:
        return [CheckResult(True, "graph_overlap: menos de 2 tipos de gráfico — sin riesgo")]

    context, errs = resolve_graph_registry(leaf_dir, meta_data)
    if errs:
        return errs
    assert context is not None
    graphs_dir = context["graphs_dir"]
    import_map = context["import_map"]
    leaf_comps = context["leaf_components"]
    results: List[CheckResult] = []

    def _read_comp(gtype: str) -> str:
        comp = leaf_comps.get(gtype)
        if not comp:
            return ""
        rel = import_map.get(comp, "")
        if not rel:
            return ""
        fp = (graphs_dir / rel).resolve()
        return fp.read_text(encoding="utf-8", errors="replace") if fp.exists() else ""

    contents = {g: _read_comp(g) for g in graficos}

    if "Coord" in contents and "Svg" in contents and contents["Coord"] and contents["Svg"]:
        coord_mags = set(re.findall(r'(?:magnitud|symbol|id)\s*[:=]\s*["\'](\w+)', contents["Coord"]))
        svg_mags = set(re.findall(r'(?:magnitud|symbol|id)\s*[:=]\s*["\'](\w+)', contents["Svg"]))
        overlap = coord_mags & svg_mags
        # Alto solapamiento de magnitudes podría indicar redundancia
        frac = len(overlap) / max(len(coord_mags | svg_mags), 1)
        ok = frac < 0.8
        results.append(CheckResult(
            ok,
            "graph_overlap: Coord y Svg no son redundantes",
            None if ok else {"overlap": sorted(overlap), "fraction": round(frac, 2)},
        ))

    if "Dcl" in contents and contents["Dcl"]:
        has_forces = bool(re.search(r'[Ff]orce|fuerza|F_|[Ff]_\w+|[Nn]ormal|[Ww]eight|[Pp]eso|[Ff]riccion|[Tt]ension', contents["Dcl"]))
        results.append(CheckResult(
            has_forces,
            "graph_overlap: DCL introduce fuerzas propias",
            None if has_forces else "DCL no introduce fuerzas nuevas",
        ))

    if not results:
        results.append(CheckResult(True, "graph_overlap: sin pares analizables"))
    return results


# CHECK 5 — Estructura interna de errores.md
def validate_errores_internal_structure(leaf_dir: Path) -> List[CheckResult]:
    """Valida estructura interna de cada bloque de error: subsecciones obligatorias."""
    path = leaf_dir / "errores.md"
    if not path.exists():
        return [CheckResult(False, "errores_structure: errores.md no existe")]
    text = read_text(path)

    REQUIRED_SUBSECTIONS_ES = [
        "por que parece correcto",
        "por que es incorrecto",
        "senal de deteccion",
        "correccion conceptual",
        "mini-ejemplo",
    ]

    # Buscar bloques ### Error
    error_blocks = re.split(r'(?=^###\s+Error\s)', text, flags=re.MULTILINE)
    error_blocks = [b for b in error_blocks if re.match(r'^###\s+Error\s', b)]

    results: List[CheckResult] = []

    if not error_blocks:
        results.append(CheckResult(False, "errores_structure: no se detectaron bloques ### Error (obligatorios en plantilla v5)"))
        return results

    for block in error_blocks:
        header_m = re.match(r'###\s+Error\s+\d+\s*:\s*(.+)', block)
        name = header_m.group(1).strip() if header_m else "desconocido"
        block_lower = _normalize_text_for_search(block)
        missing = [s for s in REQUIRED_SUBSECTIONS_ES if _normalize_text_for_search(s) not in block_lower]
        ok = len(missing) < 2
        results.append(CheckResult(
            ok,
            f"errores_structure: '{name}' tiene subsecciones suficientes",
            None if ok else {"missing": missing, "count": len(missing)},
        ))
        has_example = "mini-ejemplo" in block_lower or "mini ejemplo" in block_lower or "ejemplo de contraste" in block_lower
        results.append(CheckResult(
            has_example,
            f"errores_structure: '{name}' tiene mini-ejemplo de contraste",
        ))

    return results


# CHECK 6 — Estructura reforzada de modelos.md
def validate_modelos_reinforced(leaf_dir: Path) -> List[CheckResult]:
    """Valida presencia de dominio cuantitativo y modelo alternativo en modelos.md."""
    path = leaf_dir / "modelos.md"
    if not path.exists():
        return [CheckResult(False, "modelos_reinforced: modelos.md no existe")]
    text = read_text(path)
    text_lower = _normalize_text_for_search(text)

    results: List[CheckResult] = []

    # Dominio cuantitativo con números/desigualdades
    has_quant = bool(re.search(
        r'\d[\d,\.]*\s*[<>\u2264\u2265]|[<>\u2264\u2265]\s*\d[\d,\.]*|\d+\s*%|orden\s+de\s+magnitud|\$[^$]*[<>][^$]*\$',
        text, re.IGNORECASE
    ))
    results.append(CheckResult(
        has_quant,
        "modelos_reinforced: contiene condición cuantitativa (desigualdad, rango u O.M.)",
        None if has_quant else "No se detectó número+desigualdad ni orden de magnitud",
    ))

    # Modelo alternativo / extendido con transición
    has_alt = bool(re.search(
        r'modelo\s+extendido|modelo\s+alternativo|extended\s+model|alternative\s+model',
        text, re.IGNORECASE
    ))
    has_transition = bool(re.search(
        r'cuando\s+conviene|transicion|pasar\s+al|cambiar\s+a|when\s+to\s+switch|transition\s+to',
        text, re.IGNORECASE
    ))
    results.append(CheckResult(
        has_alt,
        "modelos_reinforced: menciona modelo alternativo o extendido",
        None if has_alt else "No se detectó mención a modelo alternativo/extendido",
    ))
    results.append(CheckResult(
        has_transition,
        "modelos_reinforced: incluye transición explícita a modelo alternativo",
        None if has_transition else "No se detectó transición explícita (cuándo conviene cambiar de modelo)",
    ))

    # Señales de fallo observable
    fallo_section = re.search(
        r'##\s+(?:\d+\.\s*)?Se(?:ñ|n)ales?\s+de\s+fallo(?:\s+del\s+modelo)?\n(.*?)(?=^##|\Z)',
        text, re.DOTALL | re.MULTILINE | re.IGNORECASE
    )
    has_observable_signal = False
    if fallo_section:
        sec = fallo_section.group(1)
        has_observable_signal = count_words(sec) >= 15
    results.append(CheckResult(
        has_observable_signal,
        "modelos_reinforced: señales de fallo con contenido observable",
        None if has_observable_signal else "Sección de señales de fallo vacía o muy corta",
    ))

    return results


# CHECK 7 — Historia funcional
def validate_historia_functional(leaf_dir: Path) -> List[CheckResult]:
    """Valida contenido funcional de historia.md: problema, dificultad, cambio, impacto."""
    path = leaf_dir / "historia.md"
    if not path.exists():
        return [CheckResult(False, "historia_functional: historia.md no existe")]
    text = read_text(path)
    text_norm = _normalize_text_for_search(text)

    FUNCTIONAL_MARKERS = {
        "problema_fisico": [
            "problema", "pregunta", "cuestion", "desafio", "enigma",
            "problem", "question", "challenge",
        ],
        "dificultad_conceptual": [
            "dificultad", "obstaculo", "no se entendia", "confusion",
            "paradigma", "limitacion", "impedimento",
            "difficulty", "obstacle", "confusion", "limitation",
        ],
        "cambio": [
            "cambio", "avance", "descubrimiento", "ruptura", "formulo",
            "demostro", "propuso", "publico",
            "breakthrough", "discovery", "formulated", "demonstrated",
        ],
        "impacto": [
            "impacto", "consecuencia", "revolucion", "permitio",
            "abrio", "transformo", "unificacion",
            "impact", "consequence", "revolution", "enabled", "transformed",
        ],
    }

    results: List[CheckResult] = []
    found_markers: Dict[str, bool] = {}

    for category, markers in FUNCTIONAL_MARKERS.items():
        hit = any(m in text_norm for m in markers)
        found_markers[category] = hit

    missing = [k for k, v in found_markers.items() if not v]
    ok = len(missing) < 2
    results.append(CheckResult(
        ok,
        "historia_functional: contiene elementos funcionales suficientes",
        None if ok else {"missing": missing, "count": len(missing)},
    ))

    # Detectar si es solo cronología (muchas fechas sin análisis)
    fecha_count = len(re.findall(r'\b\d{4}\b', text))
    analysis_markers = [
        "porque", "dificultad", "obstaculo", "permitio", "cambio", "impacto", "ruptura",
        "problema", "desafio", "avance", "consecuencia", "transformo", "revolucion",
        "superar", "comprender", "resolver", "desbloquear", "concepto", "paradigma",
    ]
    analysis_count = sum(1 for m in analysis_markers if m in text_norm)
    is_chrono = fecha_count >= 5 and analysis_count < 3
    results.append(CheckResult(
        not is_chrono,
        "historia_functional: no es una cronología pura",
        None if not is_chrono else {"fechas": fecha_count, "marcadores_analisis": analysis_count},
    ))

    return results


# CHECK 8 — No intercambiabilidad del leaf
def validate_leaf_uniqueness(leaf_dir: Path) -> List[CheckResult]:
    """Heurística: detecta si el leaf es demasiado genérico comparándolo con leafs vecinos."""
    parent = leaf_dir.parent
    sibling_dirs = [d for d in parent.iterdir() if d.is_dir() and d != leaf_dir]
    if not sibling_dirs:
        return [CheckResult(True, "leaf_uniqueness: sin leafs vecinos para comparar")]

    teoria_path = leaf_dir / "teoria.md"
    if not teoria_path.exists():
        return [CheckResult(True, "leaf_uniqueness: sin teoria.md para comparar")]
    own_text = normalize_prose_fragment(read_text(teoria_path))
    own_words = set(own_text.split())
    if not own_words:
        return [CheckResult(True, "leaf_uniqueness: teoria.md vacío")]

    results: List[CheckResult] = []
    for sib in sibling_dirs[:5]:
        sib_teoria = sib / "teoria.md"
        if not sib_teoria.exists():
            continue
        sib_text = normalize_prose_fragment(read_text(sib_teoria))
        sib_words = set(sib_text.split())
        if not sib_words:
            continue
        intersection = own_words & sib_words
        union = own_words | sib_words
        jaccard = len(intersection) / len(union) if union else 0
        too_similar = jaccard > 0.80
        results.append(CheckResult(
            not too_similar,
            f"leaf_uniqueness: diferenciado de '{sib.name}'",
            None if not too_similar else {"jaccard": round(jaccard, 3), "sibling": sib.name},
        ))

    if not results:
        results.append(CheckResult(True, "leaf_uniqueness: sin vecinos con teoria.md"))
    return results


# CHECK 9 — Coherencia gráfico ↔ magnitudes
def validate_graph_magnitude_coherence(leaf_dir: Path, meta_data: dict, mag_ids: Set[str]) -> List[CheckResult]:
    """Valida que las magnitudes referenciadas en profiles SVG existan en magnitudes.yaml."""
    graficos = meta_data.get("graficos") or []
    if "Svg" not in graficos or not mag_ids:
        return [CheckResult(True, "graph_mag_coherence: no aplica (sin Svg o sin magnitudes)")]

    context, errs = resolve_graph_registry(leaf_dir, meta_data)
    if errs:
        return errs
    assert context is not None
    graphs_dir = context["graphs_dir"]
    import_map = context["import_map"]
    leaf_comps = context["leaf_components"]
    root = context["root"]
    results: List[CheckResult] = []

    comp = leaf_comps.get("Svg")
    if not comp:
        return [CheckResult(True, "graph_mag_coherence: Svg no registrado")]
    rel_path = import_map.get(comp, "")
    if not rel_path:
        return [CheckResult(True, "graph_mag_coherence: Svg sin import")]
    file_path = (graphs_dir / rel_path).resolve()
    if not file_path.exists():
        return [CheckResult(True, "graph_mag_coherence: archivo Svg no existe")]

    content = file_path.read_text(encoding="utf-8", errors="replace")
    profile_match = re.search(r'import\s+profile\s+from\s+"([^"]+)"', content)
    if not profile_match:
        return [CheckResult(True, "graph_mag_coherence: sin profile importado")]

    profile_rel = profile_match.group(1)
    if profile_rel.startswith("@/"):
        profile_path = (root / "frontend" / "src" / Path(*profile_rel[2:].split("/"))).resolve()
    else:
        profile_path = (file_path.parent / profile_rel).resolve()

    if not profile_path or not profile_path.exists():
        return [CheckResult(True, "graph_mag_coherence: profile no encontrado")]

    pcontent = profile_path.read_text(encoding="utf-8", errors="replace")

    # Extraer magnitud_estrella y variable_control del profile
    for field in ["magnitud_estrella", "variable_control"]:
        fm = re.search(rf'{field}\s*:\s*["\'](\w+)["\']', pcontent)
        if fm:
            val = fm.group(1)
            ok = val in mag_ids
            results.append(CheckResult(
                ok,
                f"graph_mag_coherence: {field} '{val}' existe en magnitudes.yaml",
                None if ok else {"field": field, "value": val, "available": sorted(mag_ids)},
            ))

    # Comprobar ids en stateOut / schema referenciados
    state_ids = set(re.findall(r'stateOut\s*\.\s*(\w+)|id\s*:\s*["\'](\w+)', pcontent))
    state_ids = {sid for pair in state_ids for sid in pair if sid}
    # Filtrar solo ids que parezcan magnitudes (snake_case, no keywords JS)
    js_keywords = {"true", "false", "null", "undefined", "function", "return", "const", "let", "var", "if", "else", "import", "export", "default", "from"}
    candidate_ids = {sid for sid in state_ids if "_" in sid or sid in mag_ids} - js_keywords
    bad_ids = candidate_ids - mag_ids
    if candidate_ids:
        results.append(CheckResult(
            not bad_ids,
            "graph_mag_coherence: ids del profile existen en magnitudes.yaml",
            None if not bad_ids else {"unknown_ids": sorted(bad_ids)},
        ))

    if not results:
        results.append(CheckResult(True, "graph_mag_coherence: sin campos de identidad a verificar"))
    return results


# CHECK 10 — Dependencia real del cálculo
def validate_graph_calc_dependency(leaf_dir: Path, meta_data: dict) -> List[CheckResult]:
    """Valida que los gráficos dependan del cálculo (sharedParams.__calc o params/paramsIn)."""
    graficos = meta_data.get("graficos") or []
    if not graficos:
        return [CheckResult(True, "graph_calc_dep: sin gráficos declarados")]

    context, errs = resolve_graph_registry(leaf_dir, meta_data)
    if errs:
        return errs
    assert context is not None
    graphs_dir = context["graphs_dir"]
    import_map = context["import_map"]
    leaf_comps = context["leaf_components"]
    results: List[CheckResult] = []

    for gtype in graficos:
        comp = leaf_comps.get(gtype)
        if not comp:
            continue
        rel_path = import_map.get(comp, "")
        if not rel_path:
            continue
        file_path = (graphs_dir / rel_path).resolve()
        if not file_path.exists():
            continue
        content = file_path.read_text(encoding="utf-8", errors="replace")

        uses_factory = bool(re.search(r'createSvgGraph\(|createCoordGraph\(|createDclGraph\(|createCoordGraphPage\(', content))
        uses_calc = bool(re.search(r'sharedParams\s*\.\s*__calc|__calc', content))
        uses_params = bool(re.search(r'\bparams\b|\bparamsIn\b|\bsharedParams\b', content))
        ok = uses_factory or uses_calc or uses_params
        results.append(CheckResult(
            ok,
            f"graph_calc_dep: {gtype} '{comp}' depende del cálculo",
            None if ok else f"{gtype} no usa sharedParams.__calc ni params/paramsIn",
        ))

    if not results:
        results.append(CheckResult(True, "graph_calc_dep: sin componentes analizables"))
    return results


# CHECK 11 — Coherencia pregunta_principal ↔ descripcion del leaf
_STOPWORDS = frozenset(
    "el la los las un una unos unas de del al a en con por para que se y o "
    "the of to and in a an is for with on at by from or as its this that "
    "como como su sus es no".split()
)

def _significant_words(text: str) -> Set[str]:
    """Extrae palabras significativas (≥3 chars, no stopwords) de un texto normalizado."""
    norm = _normalize_text_for_search(text)
    # Eliminar puntuación y dividir por cualquier carácter no alfanumérico
    tokens = re.split(r'[^a-z0-9]+', norm)
    return {w for w in tokens if len(w) >= 3 and w not in _STOPWORDS}


def validate_graph_leaf_coherence(leaf_dir: Path, meta_data: dict) -> List[CheckResult]:
    """Valida que pregunta_principal del gráfico tenga superposición temática con la descripcion del leaf."""
    graficos = meta_data.get("graficos") or []
    if "Svg" not in graficos:
        return [CheckResult(True, "graph_leaf_coherence: no hay Svg declarado")]

    context, errs = resolve_graph_registry(leaf_dir, meta_data)
    if errs:
        return errs
    assert context is not None
    graphs_dir = context["graphs_dir"]
    import_map = context["import_map"]
    leaf_comps = context["leaf_components"]
    root = context["root"]

    # Obtener descripcion del leaf
    desc_es = str(meta_data.get("descripcion", ""))
    desc_en = str(meta_data.get("description_en", ""))
    leaf_words = _significant_words(desc_es) | _significant_words(desc_en)
    if not leaf_words:
        return [CheckResult(True, "graph_leaf_coherence: leaf sin descripcion para comparar")]

    comp = leaf_comps.get("Svg")
    if not comp:
        return [CheckResult(True, "graph_leaf_coherence: Svg no registrado")]
    rel_path = import_map.get(comp, "")
    if not rel_path:
        return [CheckResult(True, "graph_leaf_coherence: Svg sin import")]
    file_path = (graphs_dir / rel_path).resolve()
    if not file_path.exists():
        return [CheckResult(True, "graph_leaf_coherence: archivo Svg no existe")]

    content = file_path.read_text(encoding="utf-8", errors="replace")
    profile_match = re.search(r'import\s+profile\s+from\s+"([^"]+)"', content)
    if not profile_match:
        return [CheckResult(True, "graph_leaf_coherence: sin profile importado")]

    profile_rel = profile_match.group(1)
    if profile_rel.startswith("@/"):
        profile_path = (root / "frontend" / "src" / Path(*profile_rel[2:].split("/"))).resolve()
    else:
        profile_path = (file_path.parent / profile_rel).resolve()
    if not profile_path or not profile_path.exists():
        return [CheckResult(True, "graph_leaf_coherence: profile no encontrado")]

    pcontent = profile_path.read_text(encoding="utf-8", errors="replace")

    # Extraer pregunta_principal (es y en)
    pregunta_es = re.search(r'pregunta_principal\s*:\s*\{[^}]*es\s*:\s*["\']([^"\']+)', pcontent)
    pregunta_en = re.search(r'pregunta_principal\s*:\s*\{[^}]*en\s*:\s*["\']([^"\']+)', pcontent)
    pregunta_text = ""
    if pregunta_es:
        pregunta_text += " " + pregunta_es.group(1)
    if pregunta_en:
        pregunta_text += " " + pregunta_en.group(1)
    if not pregunta_text.strip():
        return [CheckResult(False, "graph_leaf_coherence: pregunta_principal vacía o no encontrada")]

    pregunta_words = _significant_words(pregunta_text)
    overlap = leaf_words & pregunta_words
    ok = len(overlap) >= 2
    results = [CheckResult(
        ok,
        "graph_leaf_coherence: pregunta_principal conectada con descripcion del leaf",
        None if ok else {
            "overlap": sorted(overlap),
            "count": len(overlap),
            "min_required": 2,
            "leaf_words_sample": sorted(list(leaf_words))[:10],
            "pregunta_words": sorted(list(pregunta_words))[:10],
        },
    )]
    return results


# CHECK 12 — Unicidad de magnitud_estrella entre gráficos del leaf
def validate_graph_star_uniqueness(leaf_dir: Path, meta_data: dict) -> List[CheckResult]:
    """Valida que no haya dos gráficos con la misma magnitud_estrella en el mismo leaf."""
    graficos = meta_data.get("graficos") or []
    if len(graficos) < 2:
        return [CheckResult(True, "graph_star_unique: menos de 2 gráficos — sin riesgo")]

    context, errs = resolve_graph_registry(leaf_dir, meta_data)
    if errs:
        return errs
    assert context is not None
    graphs_dir = context["graphs_dir"]
    import_map = context["import_map"]
    leaf_comps = context["leaf_components"]
    root = context["root"]

    stars: Dict[str, List[str]] = {}  # magnitud_estrella → [graph_types]

    for gtype in graficos:
        comp = leaf_comps.get(gtype)
        if not comp:
            continue
        rel_path = import_map.get(comp, "")
        if not rel_path:
            continue
        file_path = (graphs_dir / rel_path).resolve()
        if not file_path.exists():
            continue
        content = file_path.read_text(encoding="utf-8", errors="replace")

        # Buscar profile importado
        profile_match = re.search(r'import\s+profile\s+from\s+"([^"]+)"', content)
        pcontent = content  # fallback: buscar en el propio archivo
        if profile_match:
            profile_rel = profile_match.group(1)
            if profile_rel.startswith("@/"):
                pp = (root / "frontend" / "src" / Path(*profile_rel[2:].split("/"))).resolve()
            else:
                pp = (file_path.parent / profile_rel).resolve()
            if pp and pp.exists():
                pcontent = pp.read_text(encoding="utf-8", errors="replace")

        star_match = re.search(r'magnitud_estrella\s*:\s*["\'](\w+)["\']', pcontent)
        if star_match:
            star = star_match.group(1)
            stars.setdefault(star, []).append(gtype)

    results: List[CheckResult] = []
    for star, gtypes in stars.items():
        if len(gtypes) > 1:
            results.append(CheckResult(
                False,
                f"graph_star_unique: magnitud_estrella '{star}' duplicada",
                {"magnitud_estrella": star, "graph_types": gtypes},
            ))

    if not results:
        results.append(CheckResult(True, "graph_star_unique: cada gráfico tiene magnitud_estrella distinta"))
    return results


# CHECK 13 — Pregunta física central obligatoria
def validate_pregunta_fisica_central(leaf_dir: Path, meta_data: dict) -> List[CheckResult]:
    """Valida que meta.yaml tenga pregunta_fisica_central (es/en) con formato de pregunta real
    y al menos 2 palabras significativas presentes en teoria.md."""
    results: List[CheckResult] = []
    pfc = meta_data.get("pregunta_fisica_central")
    if not pfc or not isinstance(pfc, dict):
        return [CheckResult(False, "pregunta_fisica_central: campo ausente en meta.yaml")]

    pfc_es = str(pfc.get("es", "")).strip()
    pfc_en = str(pfc.get("en", "")).strip()

    # Existencia
    if not pfc_es or not pfc_en:
        results.append(CheckResult(False,
            "pregunta_fisica_central: falta traducción",
            {"es": bool(pfc_es), "en": bool(pfc_en)}))
        return results

    # Formato de pregunta real (signos de interrogación)
    es_is_question = "?" in pfc_es
    en_is_question = "?" in pfc_en
    if not es_is_question or not en_is_question:
        results.append(CheckResult(False,
            "pregunta_fisica_central: no es una pregunta real (faltan signos de interrogación)",
            {"es_has_?": es_is_question, "en_has_?": en_is_question}))
        return results

    # Coherencia con teoria.md — al menos 2 palabras significativas presentes
    teoria_text = _read_optional_text(leaf_dir / "teoria.md")
    if teoria_text:
        teoria_words = _significant_words(teoria_text)
        pfc_words = _significant_words(pfc_es) | _significant_words(pfc_en)
        overlap = pfc_words & teoria_words
        ok = len(overlap) >= 2
        results.append(CheckResult(
            ok,
            "pregunta_fisica_central: coherencia con teoria.md",
            None if ok else {
                "overlap": sorted(overlap),
                "count": len(overlap),
                "min_required": 2,
                "pfc_words_sample": sorted(list(pfc_words))[:10],
            },
        ))
    else:
        results.append(CheckResult(True, "pregunta_fisica_central: sin teoria.md para verificar"))

    if not results:
        results.append(CheckResult(True, "pregunta_fisica_central: declarada correctamente"))
    return results


# CHECK 14 — Coherencia gráfico ↔ pregunta_fisica_central
def validate_graph_pfc_coherence(leaf_dir: Path, meta_data: dict) -> List[CheckResult]:
    """Si el leaf declara gráficos, al menos un pregunta_principal de graph_identity
    debe compartir ≥2 palabras significativas con pregunta_fisica_central."""
    graficos = meta_data.get("graficos") or []
    if not graficos:
        return [CheckResult(True, "graph_pfc_coherence: leaf sin gráficos")]

    pfc = meta_data.get("pregunta_fisica_central")
    if not pfc or not isinstance(pfc, dict):
        return [CheckResult(False, "graph_pfc_coherence: no hay pregunta_fisica_central para comparar")]

    pfc_words = _significant_words(str(pfc.get("es", ""))) | _significant_words(str(pfc.get("en", "")))
    if not pfc_words:
        return [CheckResult(False, "graph_pfc_coherence: pregunta_fisica_central vacía")]

    context, errs = resolve_graph_registry(leaf_dir, meta_data)
    if errs:
        return errs
    assert context is not None
    graphs_dir = context["graphs_dir"]
    import_map = context["import_map"]
    leaf_comps = context["leaf_components"]
    root = context["root"]

    best_overlap = 0
    best_gtype = ""
    for gtype in graficos:
        comp = leaf_comps.get(gtype)
        if not comp:
            continue
        rel_path = import_map.get(comp, "")
        if not rel_path:
            continue
        file_path = (graphs_dir / rel_path).resolve()
        if not file_path.exists():
            continue

        content = file_path.read_text(encoding="utf-8", errors="replace")

        # Buscar profile
        profile_match = re.search(r'import\s+profile\s+from\s+"([^"]+)"', content)
        pcontent = content
        if profile_match:
            profile_rel = profile_match.group(1)
            if profile_rel.startswith("@/"):
                pp = (root / "frontend" / "src" / Path(*profile_rel[2:].split("/"))).resolve()
            else:
                pp = (file_path.parent / profile_rel).resolve()
            if pp and pp.exists():
                pcontent = pp.read_text(encoding="utf-8", errors="replace")

        # Extraer pregunta_principal
        pregunta_es = re.search(r'pregunta_principal\s*:\s*\{[^}]*es\s*:\s*["\']([^"\']+)', pcontent)
        pregunta_en = re.search(r'pregunta_principal\s*:\s*\{[^}]*en\s*:\s*["\']([^"\']+)', pcontent)
        pregunta_text = ""
        if pregunta_es:
            pregunta_text += " " + pregunta_es.group(1)
        if pregunta_en:
            pregunta_text += " " + pregunta_en.group(1)

        if pregunta_text.strip():
            pregunta_words = _significant_words(pregunta_text)
            overlap = len(pfc_words & pregunta_words)
            if overlap > best_overlap:
                best_overlap = overlap
                best_gtype = gtype

    ok = best_overlap >= 2
    return [CheckResult(
        ok,
        "graph_pfc_coherence: gráfico responde a pregunta_fisica_central",
        None if ok else {
            "best_overlap": best_overlap,
            "best_gtype": best_gtype or "ninguno",
            "min_required": 2,
        },
    )]


# CHECK 15 — Identidad operativa del leaf (representacion_dominante + magnitud_dominante)
def validate_leaf_operational_identity(leaf_dir: Path, meta_data: dict) -> List[CheckResult]:
    """Valida que representacion_dominante coincida con el primer gráfico declarado
    y que magnitud_dominante exista."""
    results: List[CheckResult] = []

    rep_dom = meta_data.get("representacion_dominante")
    mag_dom = meta_data.get("magnitud_dominante")
    graficos = meta_data.get("graficos") or []

    # 1. representacion_dominante debe existir
    if not rep_dom:
        results.append(CheckResult(False,
            "leaf_identity: representacion_dominante ausente en meta.yaml"))
    else:
        # 2. Coherencia con graficos
        if graficos:
            expected = graficos[0]
            ok = str(rep_dom).strip().lower() == str(expected).strip().lower()
            results.append(CheckResult(
                ok,
                "leaf_identity: representacion_dominante coincide con primer gráfico",
                None if ok else {
                    "representacion_dominante": rep_dom,
                    "primer_grafico": expected,
                },
            ))
        else:
            ok = True
            results.append(CheckResult(
                ok,
                "leaf_identity: representacion_dominante coherente (sin gráficos → none)",
                None,
            ))

    # 3. magnitud_dominante debe existir y no estar vacía
    if not mag_dom or not str(mag_dom).strip():
        results.append(CheckResult(False,
            "leaf_identity: magnitud_dominante ausente o vacía en meta.yaml"))
    else:
        results.append(CheckResult(True,
            "leaf_identity: magnitud_dominante declarada"))

    return results


# CHECK 16 — Reglas específicas por tipo de gráfico (4F)
def validate_graph_type_rules(leaf_dir: Path, meta_data: dict) -> List[CheckResult]:
    """Valida requisitos mínimos por tipo de gráfico: Coord (ejes+función), Svg (profile con identity), DCL (fuerzas+ecuaciones)."""
    graficos = meta_data.get("graficos") or []
    if not graficos:
        return [CheckResult(True, "graph_type_rules: sin gráficos declarados")]

    context, errs = resolve_graph_registry(leaf_dir, meta_data)
    if errs:
        return errs
    assert context is not None
    graphs_dir = context["graphs_dir"]
    import_map = context["import_map"]
    leaf_comps = context["leaf_components"]
    root = context["root"]
    results: List[CheckResult] = []

    for gtype in graficos:
        comp = leaf_comps.get(gtype)
        if not comp:
            continue
        rel_path = import_map.get(comp, "")
        if not rel_path:
            continue
        file_path = (graphs_dir / rel_path).resolve()
        if not file_path.exists():
            continue
        content = file_path.read_text(encoding="utf-8", errors="replace")

        # Resolver contenido del componente real (seguir imports si usa factory wrapper)
        # Si es un wrapper ligero que importa otro componente, leer ese también
        all_content = content
        local_imports = re.findall(r'import\s+\w+\s+from\s+["\'](\./[^"\']+)["\']', content)
        for li in local_imports:
            li_path = (file_path.parent / li).resolve()
            for ext in ["", ".jsx", ".js", ".tsx", ".ts"]:
                candidate = li_path.parent / (li_path.name + ext) if not li_path.suffix else li_path
                if candidate.exists():
                    all_content += "\n" + candidate.read_text(encoding="utf-8", errors="replace")
                    break

        if gtype == "Coord":
            # Coord: debe tener ejes (XAxis/YAxis o createCoordGraphPage) y fórmula
            has_axes = bool(re.search(r'XAxis|YAxis|createCoordGraphPage', all_content))
            has_formula = bool(re.search(r'MathInline|latex[=:]|formula|\\frac|\\left|equation', all_content))
            ok = has_axes and has_formula
            results.append(CheckResult(
                ok,
                f"graph_type_rules: Coord '{comp}' declara ejes y fórmula",
                None if ok else {
                    "has_axes": has_axes,
                    "has_formula": has_formula,
                },
            ))

        elif gtype == "Svg":
            # Svg: debe tener profile con graph_identity (ya verificado por CHECK 2)
            # Aquí verificamos que el mapa magnitud→visual existe (refs a magnitudes)
            profile_match = re.search(r'import\s+profile\s+from\s+"([^"]+)"', content)
            pcontent = ""
            if profile_match:
                profile_rel = profile_match.group(1)
                if profile_rel.startswith("@/"):
                    pp = (root / "frontend" / "src" / Path(*profile_rel[2:].split("/"))).resolve()
                else:
                    pp = (file_path.parent / profile_rel).resolve()
                if pp and pp.exists():
                    pcontent = pp.read_text(encoding="utf-8", errors="replace")

            has_mag_map = bool(re.search(r'magnitud_estrella|magnitudes|stateOut|interpretation', pcontent or all_content))
            results.append(CheckResult(
                has_mag_map,
                f"graph_type_rules: Svg '{comp}' tiene mapa magnitud→visual",
                None if has_mag_map else "No se detectó referencia a magnitudes en profile o componente",
            ))

        elif gtype == "Dcl" or gtype == "DCL":
            # DCL: debe declarar fuerzas y relación con ecuaciones/fórmulas
            has_forces = bool(re.search(r'fuerza|force|arrow|flecha|vector|Force', all_content, re.IGNORECASE))
            has_equations = bool(re.search(r'formula|equation|ecuacion|\\sum|newton|F\s*=', all_content, re.IGNORECASE))
            ok = has_forces
            results.append(CheckResult(
                ok,
                f"graph_type_rules: DCL '{comp}' declara fuerzas",
                None if ok else "No se detectaron declaraciones de fuerzas en el componente DCL",
            ))

    if not results:
        results.append(CheckResult(True, "graph_type_rules: sin componentes analizables"))
    return results


def score_results(results: List[CheckResult]) -> float:
    """Convierte una lista de checks en una nota sobre 5."""
    if not results:
        return 0.0
    ok = sum(1 for r in results if r.ok)
    return round(5 * ok / len(results), 2)

# CHECK 17 — Formato LaTeX limpio en formulas.yaml
def validate_latex_format(for_path: Path) -> List[CheckResult]:
    r"""Valida que los campos latex de formulas.yaml no incluyan delimitadores \(, \), \[, \]."""
    if not for_path.exists():
        return [CheckResult(True, "latex_format: formulas.yaml no existe")]
    
    try:
        data = load_yaml(for_path)
    except Exception:
        return [CheckResult(False, "latex_format: formulas.yaml YAML inválido")]
    
    formulas = data.get("formulas") if isinstance(data, dict) else data
    if not isinstance(formulas, list):
        return [CheckResult(True, "latex_format: no hay lista de fórmulas")]
    
    bad_entries = []
    delimiters = ["\\(", "\\)", "\\[", "\\]"]
    
    for f in formulas:
        if not isinstance(f, dict): continue
        fid = f.get("id", "unknown")
        
        # Check root latex
        latex = f.get("latex", "")
        if any(d in latex for d in delimiters):
            bad_entries.append(f"{fid} (root)")
            
        # Check rearrangements
        rearrs = f.get("rearrangements", [])
        if isinstance(rearrs, list):
            for ridx, r in enumerate(rearrs):
                if isinstance(r, dict):
                    rlatex = r.get("latex", "")
                    if any(d in rlatex for d in delimiters):
                        bad_entries.append(f"{fid} (rearr {ridx})")
                        
    ok = len(bad_entries) == 0
    return [CheckResult(
        ok,
        r"latex_format: los campos latex de formulas.yaml NO deben incluir delimitadores \( \) o \[ \]",
        None if ok else {"entries_with_delimiters": bad_entries}
    )]

def validate_leaf(leaf_dir: Path) -> Dict[str, Any]:
    """
    Valida completamente un leaf de Phyxio.

    Capas de validación:
    - Estructura de archivos
    - Calidad de contenido (markdown, teoría, ejemplos…)
    - Coherencia YAML (magnitudes, fórmulas, interpretación)
    - Semántica (coverage, example_semantics, interpretation_semantics)
    - Didáctica (didactic_contract, learning_dynamics, cognitive_load)
    """

    all_results: Dict[str, List[CheckResult]] = {}

    # ---------------------------------------------
    # 1. ESTRUCTURA BASE
    # ---------------------------------------------

    all_results["files"] = validate_exact_files(leaf_dir)
    all_results["mojibake"] = validate_mojibake_files(leaf_dir)
    all_results["render_math"] = validate_markdown_rendering_files(leaf_dir)

    # ---------------------------------------------
    # 2. META
    # ---------------------------------------------

    meta_path = leaf_dir / "meta.yaml"
    if meta_path.exists():
        meta_data = load_yaml(meta_path)
        all_results["meta"] = validate_meta(meta_path)
        all_results["meta_map"] = validate_meta_against_map(meta_path, leaf_dir)
    else:
        meta_data = {}
        all_results["meta"] = [CheckResult(False, "meta.yaml no existe", "No se puede validar meta sin el archivo")]
        all_results["meta_map"] = [CheckResult(False, "meta.yaml vs mapa: meta.yaml no existe")]

    # ---------------------------------------------
    # 3. MAGNITUDES
    # ---------------------------------------------

    mag_path = leaf_dir / "magnitudes.yaml"
    mag_symbols, mag_ids = set(), set()

    if mag_path.exists():
        mag_results, mag_symbols, mag_ids = validate_magnitudes(mag_path)
        all_results["magnitudes"] = mag_results
    else:
        all_results["magnitudes"] = [CheckResult(False, "magnitudes.yaml no existe")]

    # ---------------------------------------------
    # 4. Fí“RMULAS
    # ---------------------------------------------

    for_path = leaf_dir / "formulas.yaml"
    formula_symbols, formula_ids = set(), set()

    if for_path.exists():
        formula_results, formula_symbols, formula_ids = validate_formulas(for_path)
        all_results["formulas"] = formula_results
    else:
        all_results["formulas"] = [CheckResult(False, "formulas.yaml no existe")]

    # ---------------------------------------------
    # 5. MARKDOWN PRINCIPAL
    # ---------------------------------------------

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
                all_results[group] = validate_history(
                    fpath,
                    sections,
                    min_words=minw,
                    max_words=maxw,
                )
            else:
                all_results[group] = validate_markdown_structure(
                    fpath,
                    sections,
                    min_words=minw,
                    max_words=maxw,
                    enforce_prose_quality=group in {
                        "teoria", "teoria_en",
                        "modelos", "modelos_en",
                        "errores", "errores_en",
                    },
                )
        else:
            all_results[group] = [CheckResult(False, f"{fname} no existe")]

    # ---------------------------------------------
    # 6. MODELOS CUANTITATIVOS
    # ---------------------------------------------

    if (leaf_dir / "modelos.md").exists():
        all_results["modelos_cuant"] = validate_modelos_cuantitativo(leaf_dir / "modelos.md")

    # ---------------------------------------------
    # 7. EJEMPLOS
    # ---------------------------------------------

    if (leaf_dir / "ejemplos.md").exists():
        all_results["ejemplos"] = validate_ejemplos(leaf_dir / "ejemplos.md", lang="es", min_words=800, formula_ids=formula_ids)
    else:
        all_results["ejemplos"] = [CheckResult(False, "ejemplos.md no existe")]

    if (leaf_dir / "ejemplos.en.md").exists():
        all_results["ejemplos_en"] = validate_ejemplos(leaf_dir / "ejemplos.en.md", lang="en", min_words=800, formula_ids=formula_ids)
    else:
        all_results["ejemplos_en"] = [CheckResult(False, "ejemplos.en.md no existe")]

    # SEMÁNTICA DE EJEMPLOS
    all_results["example_semantics"] = validate_example_semantics(
        leaf_dir,
        mag_path,
        for_path,
        lang="es",
    )

    if (leaf_dir / "ejemplos.en.md").exists():
        all_results["example_semantics_en"] = validate_example_semantics(
            leaf_dir,
            mag_path,
            for_path,
            lang="en",
        )

    # ---------------------------------------------
    # 8. APLICACIONES
    # ---------------------------------------------

    if (leaf_dir / "aplicaciones.md").exists():
        all_results["aplicaciones"] = validate_aplicaciones(leaf_dir / "aplicaciones.md", lang="es", min_words=800)
    else:
        all_results["aplicaciones"] = [CheckResult(False, "aplicaciones.md no existe")]

    if (leaf_dir / "aplicaciones.en.md").exists():
        all_results["aplicaciones_en"] = validate_aplicaciones(leaf_dir / "aplicaciones.en.md", lang="en", min_words=800)
    else:
        all_results["aplicaciones_en"] = [CheckResult(False, "aplicaciones.en.md no existe")]

    # ---------------------------------------------
    # 9. INTERPRETACIÓN
    # ---------------------------------------------

    interp_path = leaf_dir / "interpretacion.yaml"

    if interp_path.exists():
        all_results["interpretacion"] = validate_interpretacion(interp_path, mag_ids, formula_ids)

        # SEMÁNTICA DE INTERPRETACIÓN
        all_results["interpretation_semantics"] = validate_interpretation_semantics(
            leaf_dir,
            mag_path,
            for_path,
            interp_path,
        )
    else:
        all_results["interpretacion"] = [CheckResult(False, "interpretacion.yaml no existe")]
        all_results["interpretation_semantics"] = [CheckResult(False, "interpretation_semantics: interpretacion.yaml no existe")]

    # ---------------------------------------------
    # 10. COHERENCIA ENTRE ARCHIVOS
    # ---------------------------------------------

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
            CheckResult(False, "coherencia: archivos requeridos", missing_for_coherence)
        ]

    all_results["markdown_entities"] = validate_markdown_entity_sync(leaf_dir, mag_ids, formula_ids)

    # ---------------------------------------------
    # 11. COVERAGE (conexión conceptual)
    # ---------------------------------------------

    all_results["coverage"] = validate_concept_coverage(
        leaf_dir,
        mag_path,
        for_path,
        interp_path,
    )

    # ---------------------------------------------
    # 12. CONTRATO DIDÁCTICO
    # ---------------------------------------------

    all_results["didactic_contract"] = validate_leaf_didactic_contract(
        leaf_dir,
        mag_path,
        for_path,
        interp_path,
    )

    # ---------------------------------------------
    # 13. DINÁMICA DE APRENDIZAJE
    # ---------------------------------------------

    all_results["learning_dynamics"] = validate_learning_dynamics(
        leaf_dir,
        mag_path,
        for_path,
    )
    
    # ---------------------------------------------
    # 14. CARGA COGNITIVA
    # ---------------------------------------------

    all_results["cognitive_load"] = validate_cognitive_load(
        leaf_dir,
        mag_path,
        for_path,
    )

    # ---------------------------------------------
    # 15. IDIOMA Y SÍMBOLOS
    # ---------------------------------------------

    all_results["english"] = validate_english_files(leaf_dir)

    if (leaf_dir / "teoria.md").exists() and (leaf_dir / "ejemplos.md").exists():
        all_results["symbols"] = validate_symbol_consistency(
            mag_symbols,
            formula_symbols,
            read_text(leaf_dir / "teoria.md"),
            read_text(leaf_dir / "ejemplos.md"),
        )
        
    # ---------------------------------------------
    # 15B. MARCADO DE MAGNITUDES (TOOLTIPS)
    # ---------------------------------------------

    if mag_path.exists():
        mag_entries = _collect_magnitude_entries(mag_path)
        all_results["magnitude_tagging"] = validate_magnitude_tagging(leaf_dir, mag_entries)

    # ---------------------------------------------
    # 16. GRíFICOS
    # ---------------------------------------------

    if meta_data:
        all_results["graphs"] = validate_graph_components(leaf_dir, meta_data)
        all_results["coord_semantic"] = validate_coord_semantic_alignment(leaf_dir, meta_data)

    # ---------------------------------------------
    # 17. CHECKS v5.1 — ENDURECIMIENTO
    # ---------------------------------------------

    # CHECK 1 — Reutilización de gráficos
    if meta_data:
        all_results["graph_reuse"] = validate_graph_reuse(leaf_dir, meta_data)

    # CHECK 2 — Identidad de gráfico
    if meta_data:
        all_results["graph_identity"] = validate_graph_identity(leaf_dir, meta_data)

    # CHECK 1B — infoCards obligatorias en SVG profile
    if meta_data:
        all_results["graph_infocards"] = validate_graph_infocards(leaf_dir, meta_data)

    # CHECK 1C — Estructura obligatoria de profile DCL
    if meta_data:
        all_results["dcl_profile"] = validate_dcl_profile_structure(leaf_dir, meta_data)

    # CHECK 3 — Gráfico decorativo
    if meta_data:
        all_results["graph_decorative"] = validate_graph_not_decorative(leaf_dir, meta_data)

    # CHECK 4 — Solapamiento de gráficos
    if meta_data:
        all_results["graph_overlap"] = validate_graph_no_overlap(leaf_dir, meta_data)

    # CHECK 5 — Estructura interna de errores.md
    all_results["errores_structure"] = validate_errores_internal_structure(leaf_dir)

    # CHECK 6 — Modelos reforzados
    all_results["modelos_reinforced"] = validate_modelos_reinforced(leaf_dir)

    # CHECK 7 — Historia funcional
    all_results["historia_functional"] = validate_historia_functional(leaf_dir)

    # CHECK 8 — Unicidad del leaf
    all_results["leaf_uniqueness"] = validate_leaf_uniqueness(leaf_dir)

    # CHECK 9 — Coherencia gráfico ↔ magnitudes
    if meta_data:
        all_results["graph_mag_coherence"] = validate_graph_magnitude_coherence(leaf_dir, meta_data, mag_ids)

    # CHECK 10 — Dependencia real del cálculo
    if meta_data:
        all_results["graph_calc_dep"] = validate_graph_calc_dependency(leaf_dir, meta_data)

    # CHECK 11 — Coherencia pregunta_principal ↔ leaf
    if meta_data:
        all_results["graph_leaf_coherence"] = validate_graph_leaf_coherence(leaf_dir, meta_data)

    # CHECK 12 — Unicidad de magnitud_estrella
    if meta_data:
        all_results["graph_star_unique"] = validate_graph_star_uniqueness(leaf_dir, meta_data)

    # CHECK 13 — Pregunta física central obligatoria
    if meta_data:
        all_results["pregunta_fisica_central"] = validate_pregunta_fisica_central(leaf_dir, meta_data)

    # CHECK 14 — Coherencia gráfico ↔ pregunta_fisica_central
    if meta_data:
        all_results["graph_pfc_coherence"] = validate_graph_pfc_coherence(leaf_dir, meta_data)

    # CHECK 15 — Identidad operativa del leaf
    if meta_data:
        all_results["leaf_identity"] = validate_leaf_operational_identity(leaf_dir, meta_data)

    # CHECK 16 — Reglas específicas por tipo de gráfico (4F)
    if meta_data:
        all_results["graph_type_rules"] = validate_graph_type_rules(leaf_dir, meta_data)

    # CHECK 17 — Formato LaTeX limpio en formulas.yaml
    if for_path.exists():
        all_results["latex_format"] = validate_latex_format(for_path)

    # ---------------------------------------------
    # 18. SCORE GLOBAL
    # ---------------------------------------------

    flat = [r for group in all_results.values() for r in group]

    ok_count = sum(1 for r in flat if r.ok)
    fail_count = len(flat) - ok_count
    total_count = len(flat)

    overall = score_results(flat)

    summary = {
        "leaf_dir": str(leaf_dir),
        "leaf_name": leaf_dir.name,
        "overall_score_5": overall,
        "counts": {
            "ok": ok_count,
            "fail": fail_count,
            "total": total_count,
        },
        "word_counts": collect_markdown_word_counts(leaf_dir),
        "groups": {
            name: {
                "score_5": score_results(group),
                "checks": [asdict(r) for r in group]
            }
            for name, group in all_results.items()
        }
    }

    summary["auto_fix_suggestions"] = auto_fix_suggestions(summary)
    return summary

# J. Presentación

def print_full_report(summary: Dict[str, Any]) -> None:
    """Imprime el informe detallado de todos los grupos de checks de un leaf."""
    print("PHYXIO LEAF VALIDATOR")
    print(f"LEAF: {summary['leaf_dir']}")
    print(f"Puntuación global estimada: {summary['overall_score_5']} / 5\n")

    for name, group in summary["groups"].items():
        print(f"[{name}] {group['score_5']} / 5")
        for item in group["checks"]:
            status = "OK" if item["ok"] else "FAIL"
            print(f"  - {status}: {item['message']}")
            if not item["ok"] and item.get("details"):
                print(f"      detalles: {item['details']}")
        print()

    print("RESUMEN CHECKS")
    print(f"  - OK: {summary['counts']['ok']}")
    print(f"  - FAIL: {summary['counts']['fail']}")
    print(f"  - TOTAL: {summary['counts']['total']}")

def print_count_report(summary: Dict[str, Any]) -> None:
    """Imprime un resumen compacto con score y contadores globales."""
    print(f"LEAF: {summary['leaf_name']}")
    print(f"  ruta: {summary['leaf_dir']}")
    print(f"  score: {summary['overall_score_5']} / 5")
    print(f"  OK: {summary['counts']['ok']}")
    print(f"  FAIL: {summary['counts']['fail']}")
    print(f"  TOTAL: {summary['counts']['total']}")

def print_words_report(summary: Dict[str, Any]) -> None:
    """Imprime el recuento de palabras por archivo markdown del leaf."""
    print(summary["leaf_dir"])
    for filename, words in summary["word_counts"].items():
        print(f"  - {filename}: {words} palabras")

# K. Entrada

def main():
    """Entrada CLI para validar un leaf o un nodo completo en varios modos de salida."""
    configure_console_encoding()

    parser = argparse.ArgumentParser()
    parser.add_argument("mode_or_path", help="Modo (all/count/words) o ruta para compatibilidad")
    parser.add_argument("path", nargs="?", help="Ruta leaf/nodo")
    parser.add_argument("--json", action="store_true")
    args = parser.parse_args()

    valid_modes = {"all", "count", "words"}

    if args.mode_or_path in valid_modes:
        mode = args.mode_or_path
        if not args.path:
            parser.error("Debes indicar una ruta.")
        raw_path = args.path
    else:
        mode = "all"
        raw_path = args.mode_or_path

    input_path = Path(raw_path)
    if not input_path.exists():
        raise SystemExit(f"Ruta no existe: {input_path}")

    leaf_or_root, tmp = extract_leaf_dir(input_path)

    try:
        leaf_dirs = find_leaf_dirs(leaf_or_root)
        if not leaf_dirs:
            raise SystemExit(f"No se encontraron leafs válidos en: {leaf_or_root}")

        summaries = [validate_leaf(leaf_dir) for leaf_dir in leaf_dirs]

        if args.json:
            print(json.dumps({
                "mode": mode,
                "target": str(leaf_or_root),
                "leaf_count": len(summaries),
                "results": summaries,
            }, ensure_ascii=False, indent=2))
            return

        for i, summary in enumerate(summaries):
            if len(summaries) > 1:
                print("=" * 90)

            if mode == "all":
                print_full_report(summary)
            elif mode == "count":
                print_count_report(summary)
            elif mode == "words":
                print_words_report(summary)

            if i < len(summaries) - 1:
                print()

        if len(summaries) > 1:
            total_ok = sum(s["counts"]["ok"] for s in summaries)
            total_fail = sum(s["counts"]["fail"] for s in summaries)
            total_checks = sum(s["counts"]["total"] for s in summaries)
            avg_score = round(sum(s["overall_score_5"] for s in summaries) / len(summaries), 2)

            leaves_with_fail = [
                s for s in summaries
                if s["counts"]["fail"] > 0
            ]

            print("=" * 90)
            print("RESUMEN GLOBAL DEL NODO")
            print(f"  Leafs: {len(summaries)}")
            print(f"  Score medio: {avg_score} / 5")
            print(f"  OK: {total_ok}")
            print(f"  FAIL: {total_fail}")
            print(f"  TOTAL: {total_checks}")

            if leaves_with_fail:
                print("  Leafs con FAIL:")
                for s in leaves_with_fail:
                    print(
                        f"    - {s['leaf_name']} "
                        f"(FAIL: {s['counts']['fail']}, score: {s['overall_score_5']} / 5)"
                    )
                    
        if mode in ("all", "audit"):
            for s in summaries:
                audit = build_audit_report(s)
                print("\n=== AUDITORÍA ===")
                print(json.dumps(audit, indent=2, ensure_ascii=False))

    finally:
        if tmp is not None:
            tmp.cleanup()

if __name__ == "__main__":
    main()
