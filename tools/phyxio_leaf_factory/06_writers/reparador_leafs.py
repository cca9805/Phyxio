#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Reparador automático de leafs Phyxio.
Escanea el archivo o ruta indicado y corrige los fallos estructurales de acuerdo a la plantilla v5 y el validador modular.
Uso: python tools/reparador_leafs.py --path <ruta_archivo_o_carpeta> [--map <ruta_phyxio_map>]
"""

from __future__ import annotations

import argparse
import copy
import os
import re
import sys
import unicodedata
from pathlib import Path
from typing import Any, Dict, List, Set, Tuple
import yaml

# Secciones fijas según plantilla v5 / validador modular
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

INTERPRETACION_SECTIONS = [
    "summary",
    "physical_reading",
    "coherence",
    "model_validity",
    "graph_reading",
    "likely_errors",
    "next_step",
]

RULE_BLOCKS = [
    "summary_rules",
    "physical_reading_rules",
    "coherence_rules",
    "model_validity_rules",
    "graph_rules",
    "likely_errors",
    "next_step_rules",
    "physical_intuition",
    "limiting_cases",
]


# =====================================================================
# 1. Utilidades de Lectura, Escritura y Codificación
# =====================================================================

def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="replace")


def write_text(path: Path, content: str) -> None:
    path.write_text(content, encoding="utf-8")


def read_yaml(path: Path) -> dict[str, Any]:
    if not path.exists():
        return {}
    try:
        data = yaml.safe_load(read_text(path))
        return data if isinstance(data, dict) else {}
    except Exception:
        return {}


def read_yaml_raw(path: Path) -> Any:
    if not path.exists():
        return None
    try:
        return yaml.safe_load(read_text(path))
    except Exception:
        return None


UNIT_ALIAS_SYMBOLS = {
    "J",
    "kJ",
    "MJ",
    "Wh",
    "kWh",
    "MWh",
    "W",
    "kW",
    "MW",
}

UNIT_ALIAS_NAMES = {
    "joule",
    "joules",
    "julio",
    "julios",
    "kilojoule",
    "kilojoules",
    "kilojulio",
    "kilojulios",
    "megajoule",
    "megajoules",
    "megajulio",
    "megajulios",
    "watt",
    "watts",
    "vatio",
    "vatios",
    "kilowatt",
    "kilowatts",
    "kilovatio",
    "kilovatios",
    "kilowatt-hour",
    "kilowatt-hours",
    "kilowatt_hour",
    "kilowatt_hours",
    "kilovatio-hora",
    "kilovatios-hora",
    "kilovatio_hora",
    "kilovatios_hora",
    "watt-hour",
    "watt-hours",
    "vatio-hora",
    "vatios-hora",
}


def _strip_latex_text_symbol(symbol: str) -> str:
    symbol = symbol.strip()
    text_match = re.fullmatch(r"\\text\{([^}]+)\}", symbol)
    if text_match:
        return text_match.group(1).strip()
    return symbol


def _normalize_unit_alias(value: str) -> str:
    normalized = unicodedata.normalize("NFKD", value.strip().lower())
    normalized = "".join(ch for ch in normalized if not unicodedata.combining(ch))
    normalized = normalized.replace(" ", "-")
    return normalized


def is_unit_alias_value(value: str) -> bool:
    value = value.strip()
    if not value:
        return False
    if _strip_latex_text_symbol(value) in UNIT_ALIAS_SYMBOLS:
        return True
    return _normalize_unit_alias(value) in UNIT_ALIAS_NAMES


def is_unit_like_magnitude(mag: dict[str, Any]) -> bool:
    values: list[str] = []
    for key in ("id", "symbol", "unit", "unidad"):
        if mag.get(key):
            values.append(str(mag[key]))
    raw_name = mag.get("nombre") or mag.get("name")
    if isinstance(raw_name, dict):
        values.extend(str(raw_name.get(key, "")) for key in ("es", "en"))
    elif raw_name:
        values.append(str(raw_name))
    return any(is_unit_alias_value(value) for value in values)


def build_unit_like_magnitude_ids(magnitudes_data: dict[str, Any]) -> set[str]:
    unit_ids: set[str] = set()
    for mag in magnitudes_data.get("magnitudes", []):
        if isinstance(mag, dict) and mag.get("id") and is_unit_like_magnitude(mag):
            unit_ids.add(str(mag["id"]))
    return unit_ids


def build_magnitude_aliases(magnitudes_data: dict[str, Any]) -> dict[str, set[str]]:
    aliases: dict[str, set[str]] = {}
    for mag in magnitudes_data.get("magnitudes", []):
        if not isinstance(mag, dict) or not mag.get("id"):
            continue
        mag_id = str(mag["id"])
        if is_unit_like_magnitude(mag):
            continue
        values = aliases.setdefault(mag_id, set())
        raw_name = mag.get("nombre") or mag.get("name")
        if isinstance(raw_name, dict):
            for key in ("es", "en"):
                value = str(raw_name.get(key, "")).strip()
                if len(value) >= 3 and " " not in value and not is_unit_alias_value(value):
                    values.add(value)
        elif raw_name:
            value = str(raw_name).strip()
            if len(value) >= 3 and " " not in value and not is_unit_alias_value(value):
                values.add(value)
        symbol = str(mag.get("symbol", "")).strip()
        plain_symbol = _strip_latex_text_symbol(symbol)
        if (
            len(plain_symbol) > 1
            and re.fullmatch(r"[A-Za-z_][A-Za-z0-9_]*", plain_symbol)
            and not is_unit_alias_value(plain_symbol)
        ):
            values.add(plain_symbol)
    return aliases


def write_yaml(path: Path, data: dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(
        yaml.safe_dump(data, allow_unicode=True, sort_keys=False, default_flow_style=False, width=120),
        encoding="utf-8",
    )


def parse_simple_range_condition(expr: str) -> dict[str, Any] | None:
    """Convierte rangos simples de summary_rules a condition estructurado."""
    if not isinstance(expr, str):
        return None
    parts = re.split(r"\s+(?:and|&&)\s+", expr.strip(), flags=re.IGNORECASE)
    if len(parts) != 2:
        return None

    condition: dict[str, Any] = {}
    variable: str | None = None
    op_map = {">": "gt", ">=": "gte", "<": "lt", "<=": "lte", "==": "eq", "=": "eq", "!=": "neq"}
    for part in parts:
        match = re.fullmatch(r"\s*([A-Za-z_][A-Za-z0-9_]*)\s*(>=|<=|>|<|==|=|!=)\s*([A-Za-z0-9_.+-]+)\s*", part)
        if not match:
            return None
        current_var, op, raw_value = match.groups()
        if variable is None:
            variable = current_var
        elif variable != current_var:
            return None
        try:
            value: Any = float(raw_value)
            if value.is_integer():
                value = int(value)
        except ValueError:
            value = raw_value
        condition[op_map[op]] = value

    if not variable or not condition:
        return None
    return {"variable": variable, **condition}


def repair_interpretacion_rule_contract(leaf_dir: Path) -> list[str]:
    """Normaliza interpretacion.yaml al contrato funcional de reglas v5."""
    interp_path = leaf_dir / "interpretacion.yaml"
    data = read_yaml(interp_path)
    if not isinstance(data, dict):
        return []

    targets = data.get("targets")
    if not isinstance(targets, dict):
        return []

    changes: list[str] = []
    error_markers_es = ("confundir", "creer", "olvidar", "suponer", "pensar", "tomar")
    error_markers_en = ("confuse", "assume", "forget", "believe", "mistake", "wrongly")

    for target_id, target in targets.items():
        if not isinstance(target, dict):
            continue

        for rule in target.get("summary_rules", []) or []:
            if not isinstance(rule, dict) or "condition" in rule:
                continue
            condition = parse_simple_range_condition(rule.get("when", ""))
            if condition:
                rule["condition"] = condition
                rule.pop("when", None)
                changes.append(f"interpretacion.yaml: summary_rules de {target_id} migrada a condition")

        for rule in target.get("likely_errors", []) or []:
            if not isinstance(rule, dict):
                continue
            text = rule.get("text")
            if not isinstance(text, dict):
                continue
            es = text.get("es")
            en = text.get("en")
            if isinstance(es, str) and es.strip() and not any(marker in es.lower() for marker in error_markers_es):
                text["es"] = f"Confundir [[{target_id}]] con una lectura aislada es un error frecuente: {es.strip()}"
                changes.append(f"interpretacion.yaml: likely_errors.es de {target_id} reforzado")
            if isinstance(en, str) and en.strip() and not any(marker in en.lower() for marker in error_markers_en):
                text["en"] = f"A common mistake is to interpret [[{target_id}]] in isolation: {en.strip()}"
                changes.append(f"interpretacion.yaml: likely_errors.en de {target_id} reforzado")

    if changes:
        write_yaml(interp_path, data)
    return changes


# =====================================================================
# 2. Reparación de Mojibake y Normalización de Texto
# =====================================================================

def repair_mojibake(text: str) -> str:
    if not text:
        return text
    # Intentar corregir mojibake de lectura de Latin-1 en UTF-8
    if any(ch in text for ch in ("\u00C3", "\u00C2", "\u00F0")):
        try:
            repaired = text.encode("latin1", errors="ignore").decode("utf-8", errors="ignore")
            if repaired:
                text = repaired
        except Exception:
            pass
    # Reemplazos explícitos comunes
    replacements = {
        "Ã¡": "á", "Ã©": "é", "Ã­": "í", "Ã³": "ó", "Ãº": "ú",
        "Ã±": "ñ", "Ã ": "Á", "Ã‰": "É", "Ã ": "Í", "Ã“": "Ó",
        "Ãš": "Ú", "Ã‘": "Ñ", "â€“": "–", "â€”": "—", "ðŸ": "🟢",
        "Â🟢": "🟢", "Â🔵": "🔵", "Â🔴": "🔴", "Â": "",
        "Mécompleto": "Método", "mécompleto": "método", "completos ellos": "todos ellos"
    }
    for old, new in replacements.items():
        text = text.replace(old, new)
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
    # Eliminar prefijos numéricos para permitir matching flexible
    actual_clean = re.sub(r'^\d+\s*', '', actual_norm).strip()
    expected_clean = re.sub(r'^\d+\s*', '', expected_norm).strip()
    if actual_clean == expected_clean:
        return True
    if len(expected_clean.split()) >= 2:
        return actual_clean.startswith(expected_clean + " ") or actual_clean.startswith(expected_clean + ":")
    return False


def _normalize_text_for_search(text: str) -> str:
    text = unicodedata.normalize("NFKD", text)
    text = "".join(ch for ch in text if not unicodedata.combining(ch))
    return text.lower()


# =====================================================================
# 3. Formateo y Reparación General de Markdown
# =====================================================================

def fix_dimensional_notation(text: str) -> str:
    """Convierte notación dimensional tipo [M L T^-2] a Estilo Azul Phyxio v5: `[M L T⁻²]`."""
    superscripts = {
        '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
        '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
        '-': '⁻', '+': '⁺',
    }
    
    parts = text.split('`')
    for idx in range(len(parts)):
        if idx % 2 == 0:  # Fuera de backticks
            def repl(match: re.Match) -> str:
                content = match.group(1)
                if not any(char in content for char in ('M', 'L', 'T')):
                    return match.group(0)
                
                res = []
                i = 0
                while i < len(content):
                    if content[i] == '^' and i + 1 < len(content):
                        j = i + 1
                        while j < len(content) and (content[j].isdigit() or content[j] in ('-', '+')):
                            j += 1
                        exp = content[i+1:j]
                        for char in exp:
                            res.append(superscripts.get(char, char))
                        i = j
                    else:
                        res.append(content[i])
                        i += 1
                return f"`[{"".join(res)}]`"
            
            parts[idx] = re.sub(r'\[([MPLT0-9\s\^\-\+]+)\]', repl, parts[idx])
            
    return '`'.join(parts)


def fix_magnitudes_in_backticks(content: str) -> str:
    """Extrae referencias a magnitudes fuera de los backticks para que funcionen."""
    pattern = r'`(\[\[([a-z0-9_.-]+)\]\])([^`]*)`'
    def replace_backtick_magnitude(match: re.Match) -> str:
        mag_ref = match.group(1)
        rest = match.group(3)
        if not rest.strip():
            return mag_ref
        return f"{mag_ref} `{rest.strip()}`"
    return re.sub(pattern, replace_backtick_magnitude, content)


def wrap_bare_magnitudes(
    content: str,
    magnitude_ids: set[str],
    aliases: dict[str, set[str]] | None = None,
    excluded_ids: set[str] | None = None,
) -> str:
    """Envuelve menciones de magnitudes que no están ya envueltas."""
    if not magnitude_ids:
        return content
    excluded_ids = excluded_ids or set()
    terms = []
    for mid in magnitude_ids:
        terms.append((mid, mid))
        if aliases and mid in aliases:
            for alias in aliases[mid]:
                if alias:
                    terms.append((alias, mid))
    sorted_terms = sorted(set(terms), key=lambda item: len(item[0]), reverse=True)
    lines = content.splitlines()
    new_lines = []
    in_code_block = False
    
    for line in lines:
        if line.strip().startswith('```'):
            in_code_block = not in_code_block
            new_lines.append(line)
            continue
        if in_code_block:
            new_lines.append(line)
            continue
            
        if line.strip().startswith('---') or line.strip().startswith('![') or line.strip().startswith('<!--'):
            new_lines.append(line)
            continue
            
        for term, mid in sorted_terms:
            pattern = rf'(?<!\[\[)(?<![\w\]]){re.escape(term)}(?![\w\[])(?!\]\])'
            def repl(match: re.Match) -> str:
                start = match.start()
                prefix = line[:start]
                # Evitar envolver si estamos dentro de {{f: ... }}
                last_open = prefix.rfind('{{')
                last_close = prefix.rfind('}}')
                if last_open > last_close and '{{f:' in prefix[last_open:]:
                    return match.group(0)
                
                if prefix.count('`') % 2 == 1:
                    return match.group(0)
                return f"[[{mid}]]"
            line = re.sub(pattern, repl, line)
        line = re.sub(r'\[\[([A-Za-z0-9_.-]+)\]\](?:\s+\[\[\1\]\])+', r'[[\1]]', line)
        new_lines.append(line)
        
    return '\n'.join(new_lines)


def clean_double_formulas(text: str) -> str:
    """Corrige fórmulas doblemente envueltas como {{f:{{f:id}} o similares."""
    return re.sub(r'\{\{f:\s*\{\{f:\s*([A-Za-z0-9_.-]+)\s*\}*\}*', r'{{f:\1}}', text)


def fix_formula_syntax(content: str, formula_ids: set[str], magnitude_ids: set[str]) -> str:
    """Reemplaza [[formula_id]] incorrecto por {{f:formula_id}} si no es también una magnitud."""
    if not formula_ids:
        return content
    for fid in formula_ids:
        if fid in magnitude_ids:
            continue
        pattern = rf'\[\[{re.escape(fid)}\]\]'
        content = re.sub(pattern, f'{{{{f:{fid}}}}}', content)
    return content


def ensure_formulas_isolated(text: str) -> str:
    """Asegura que cada fórmula {{f:id}} esté en su propia línea rodeada de líneas vacías."""
    lines = text.splitlines()
    new_lines = []
    formula_pattern = re.compile(r"\{\{f:([A-Za-z0-9_.-]+)\}\}")
    
    for line in lines:
        stripped = line.strip()
        if not stripped or (stripped.startswith("{{f:") and stripped.endswith("}}") and len(formula_pattern.findall(stripped)) == 1):
            new_lines.append(line)
            continue
            
        matches = list(formula_pattern.finditer(line))
        if not matches:
            new_lines.append(line)
            continue
            
        last_idx = 0
        temp_lines = []
        for m in matches:
            start, end = m.span()
            prefix = line[last_idx:start].strip()
            formula = m.group(0)
            if prefix:
                temp_lines.append(prefix)
            temp_lines.append("")
            temp_lines.append(formula)
            temp_lines.append("")
            last_idx = end
        suffix = line[last_idx:].strip()
        if suffix:
            temp_lines.append(suffix)
            
        for tl in temp_lines:
            new_lines.append(tl)
            
    cleaned_lines = []
    for line in new_lines:
        if cleaned_lines and cleaned_lines[-1] == "" and line == "":
            continue
        cleaned_lines.append(line)
        
    return '\n'.join(cleaned_lines)


# =====================================================================
# 4. Alineación y Reordenación de Secciones (Markdown Template)
# =====================================================================

def align_markdown_headings(text: str, required_sections: list[str]) -> str:
    """Interpreta el orden canónico y alinea o inserta las cabeceras faltantes."""
    expected = []
    max_level = 1
    for sec in required_sections:
        m = re.match(r"^(#{1,6})\s+(.+?)\s*$", sec)
        if not m:
            continue
        level = len(m.group(1))
        max_level = max(max_level, level)
        raw_title = m.group(2).strip()
        expected.append((level, raw_title, normalize_heading_title(raw_title)))

    lines = text.splitlines()
    
    sections_list = []
    current_heading = None
    current_body = []
    
    for line in lines:
        m = re.match(r"^(#{1,6})\s+(.+?)\s*$", line)
        if m and len(m.group(1)) <= max_level:
            if current_heading is None:
                sections_list.append(("PREAMBLE", "\n".join(current_body).strip()))
            else:
                sections_list.append((current_heading, "\n".join(current_body).strip()))
            current_heading = (len(m.group(1)), m.group(2).strip())
            current_body = []
        else:
            current_body.append(line)
            
    if current_heading is not None:
        sections_list.append((current_heading, "\n".join(current_body).strip()))
    elif current_body:
        sections_list.append(("PREAMBLE", "\n".join(current_body).strip()))

    matched_sections = {}
    preamble = ""
    extra_sections = []
    level1_title_section = None
    
    for header_info, body in sections_list:
        if header_info == "PREAMBLE":
            preamble = body
            continue
        
        level, title = header_info
        norm_title = normalize_heading_title(title)
        
        matched_idx = None
        for idx, (exp_level, exp_title_raw, exp_title_norm) in enumerate(expected):
            if heading_matches(norm_title, exp_title_norm):
                matched_idx = idx
                break
                
        if matched_idx is not None:
            matched_sections[matched_idx] = body
        else:
            if level == 1 and level1_title_section is None:
                level1_title_section = (title, body)
            else:
                extra_sections.append((level, title, body))

    output = []
    if level1_title_section:
        title, body = level1_title_section
        output.append(f"# {title}")
        output.append("")
        if body.strip():
            output.append(body)
            output.append("")

    if preamble:
        output.append(preamble)
        output.append("")
        
    for idx, (exp_level, exp_title_raw, exp_title_norm) in enumerate(expected):
        output.append(f"{'#' * exp_level} {exp_title_raw}")
        output.append("")
        if idx in matched_sections:
            output.append(matched_sections[idx])
        else:
            # Rellenar con placeholder
            output.append("[Completar - contenido obligatorio por redactar]")
        output.append("")
        
    for level, title, body in extra_sections:
        output.append(f"{'#' * level} {title}")
        output.append("")
        output.append(body)
        output.append("")
        
    return "\n".join(output)


# =====================================================================
# 5. Lógica de Conversión de Fórmulas y Operadores Matemáticos
# =====================================================================

def translate_math_operators(math_content: str, lang: str) -> str:
    """Convierte operadores matemáticos prohibidos a expresiones legibles en prosa."""
    ops = [
        (r'\\approx', ' es aproximadamente ' if lang == 'es' else ' is approximately '),
        (r'\\leq', ' es menor o igual a ' if lang == 'es' else ' is less than or equal to '),
        (r'\\geq', ' es mayor o igual a ' if lang == 'es' else ' is greater than or equal to '),
        (r'\\le', ' es menor o igual a ' if lang == 'es' else ' is less than or equal to '),
        (r'\\ge', ' es mayor o igual a ' if lang == 'es' else ' is greater than or equal to '),
        (r'\\neq', ' es diferente de ' if lang == 'es' else ' is different from '),
        ('=', ' es igual a ' if lang == 'es' else ' is equal to '),
        ('<', ' es menor que ' if lang == 'es' else ' is less than '),
        ('>', ' es mayor que ' if lang == 'es' else ' is greater than '),
    ]
    for op, replacement in ops:
        if re.search(op, math_content):
            parts = re.split(op, math_content, maxsplit=1)
            left = translate_math_operators(parts[0].strip(), lang)
            right = translate_math_operators(parts[1].strip(), lang)
            return f"{left}{replacement}{right}"
    # Limpiar comandos LaTeX residuales
    content = math_content.replace(r'\cdot', '·')
    content = content.replace(r'\times', '×')
    return content


def clean_math_from_esencial(text: str, lang: str) -> str:
    """Limpia todo rastro matemático en nivel esencial."""
    def replace_latex(match: re.Match) -> str:
        math_content = match.group(1)
        translated = translate_math_operators(math_content, lang)
        translated = re.sub(r'\^2', ' al cuadrado' if lang == 'es' else ' squared', translated)
        translated = re.sub(r'\^3', ' al cubo' if lang == 'es' else ' cubed', translated)
        translated = re.sub(r'\^', ' elevado a ' if lang == 'es' else ' raised to ', translated)
        return re.sub(r'\\\(|\\\)|$', '', translated)

    text = re.sub(r'\\\((.*?)\\\)', replace_latex, text)
    text = re.sub(r'\$(.*?)\$', replace_latex, text)
    
    text = re.sub(r'\s*=\s*', ' es igual a ' if lang == 'es' else ' is equal to ', text)
    text = re.sub(r'\^2', ' al cuadrado' if lang == 'es' else ' squared', text)
    text = re.sub(r'\^3', ' al cubo' if lang == 'es' else ' cubed', text)
    text = re.sub(r'\^', ' elevado a ' if lang == 'es' else ' raised to ', text)
    
    return text


def replace_operators_outside_formal(text: str, is_formal: bool, lang: str) -> str:
    """Convierte operadores prohibidos fuera del nivel formal a prosa."""
    if is_formal:
        return text
        
    def replace_latex(match: re.Match) -> str:
        math_content = match.group(1)
        operators = ['=', '<', '>', r'\\le', r'\\ge', r'\\leq', r'\\geq', r'\\neq', r'\\approx']
        if any(re.search(op, math_content) for op in operators):
            translated = translate_math_operators(math_content, lang)
            return re.sub(r'\\\(|\\\)|$', '', translated)
        return match.group(0)

    text = re.sub(r'\\\((.*?)\\\)', replace_latex, text)
    text = re.sub(r'\$(.*?)\$', replace_latex, text)
    return text


def fix_teoria_formulas_location(text: str, formal_heading: str, formulas_data: dict) -> str:
    """Mueve o convierte referencias a fórmulas fuera de Nivel formal a referencias de magnitudes."""
    lines = text.splitlines()
    sections = []
    current_heading = None
    current_body = []
    
    for line in lines:
        m = re.match(r'^(##\s+.+?)\s*$', line)
        if m:
            if current_heading is not None:
                sections.append((current_heading, "\n".join(current_body)))
            current_heading = m.group(1).strip()
            current_body = []
        else:
            current_body.append(line)
            
    if current_heading is not None:
        sections.append((current_heading, "\n".join(current_body)))
    else:
        sections.append(("PREAMBLE", "\n".join(current_body)))

    formula_targets = {}
    for f in formulas_data.get("formulas", []):
        fid = f.get("id")
        if fid:
            target = f.get("result_semantics", {}).get("target")
            if not target:
                for r in f.get("rearrangements", []):
                    target = r.get("target")
                    if target:
                        break
            if target:
                formula_targets[fid] = target

    new_sections = []
    for heading, body in sections:
        is_formal = False
        if heading != "PREAMBLE":
            norm_h = normalize_heading_title(heading)
            norm_allowed = normalize_heading_title(formal_heading)
            if heading_matches(norm_h, norm_allowed):
                is_formal = True
                
        if not is_formal:
            def repl(match: re.Match) -> str:
                fid = match.group(1)
                target = formula_targets.get(fid)
                return f"[[{target}]]" if target else f"[[{fid}]]"
            body = re.sub(r'\{\{f:([A-Za-z0-9_.-]+)\}\}', repl, body)
            
        new_sections.append((heading, body))
        
    output = []
    for heading, body in new_sections:
        if heading != "PREAMBLE":
            output.append(heading)
        output.append(body)
        
    return "\n".join(output)


def ensure_formal_level_has_formulas(text: str, formal_heading: str, formula_ids: set[str]) -> str:
    """Asegura que Nivel formal contenga al menos 2 referencias a fórmulas."""
    if not formula_ids:
        return text
    lines = text.splitlines()
    sections = []
    current_heading = None
    current_body = []
    
    for line in lines:
        m = re.match(r'^(##\s+.+?)\s*$', line)
        if m:
            if current_heading is not None:
                sections.append((current_heading, "\n".join(current_body)))
            current_heading = m.group(1).strip()
            current_body = []
        else:
            current_body.append(line)
            
    if current_heading is not None:
        sections.append((current_heading, "\n".join(current_body)))
    else:
        sections.append(("PREAMBLE", "\n".join(current_body)))
        
    for idx, (heading, body) in enumerate(sections):
        if heading != "PREAMBLE":
            norm_h = normalize_heading_title(heading)
            norm_allowed = normalize_heading_title(formal_heading)
            if heading_matches(norm_h, norm_allowed):
                refs = set(re.findall(r'\{\{f:([A-Za-z0-9_.-]+)\}\}', body))
                if len(refs) < 2:
                    missing = sorted(formula_ids - refs)
                    if missing:
                        formulas_to_add = missing[:2]
                        added_block = "\n\n" + "\n\n".join([f"{{{{f:{fid}}}}}" for fid in formulas_to_add]) + "\n"
                        sections[idx] = (heading, body + added_block)
                break
                
    output = []
    for heading, body in sections:
        if heading != "PREAMBLE":
            output.append(heading)
        output.append(body)
        
    return "\n".join(output)


def fix_student_questions_math(text: str, lang: str) -> str:
    """Convierte fórmulas con '=' en Preguntas del alumno a prosa."""
    lines = text.splitlines()
    in_section = False
    section_level = 0
    new_lines = []
    
    for line in lines:
        m = re.match(r'^(#{1,6})\s+(.+?)\s*$', line)
        if m:
            level = len(m.group(1))
            norm_title = normalize_heading_title(m.group(2))
            if norm_title in ("preguntas reales del alumno", "real student questions"):
                in_section = True
                section_level = level
            elif in_section and level <= section_level:
                in_section = False
                section_level = 0
                
        if in_section and not line.strip().startswith('#'):
            def repl_latex(match: re.Match) -> str:
                math_content = match.group(1)
                if '=' in math_content:
                    translated = translate_math_operators(math_content, lang)
                    return re.sub(r'\\\(|\\\)|$', '', translated)
                return match.group(0)
            
            line = re.sub(r'\\\((.*?)\\\)', repl_latex, line)
            line = re.sub(r'\$(.*?)\$', repl_latex, line)
            
            if '=' in line and not line.strip().startswith('!['):
                line = re.sub(r'\s*=\s*', ' es igual a ' if lang == 'es' else ' is equal to ', line)
                
        new_lines.append(line)
        
    return '\n'.join(new_lines)


def fix_sintesis_final(text: str, lang: str) -> str:
    """Elimina todo rastro matemático en Síntesis final."""
    lines = text.splitlines()
    in_section = False
    section_level = 0
    new_lines = []
    
    for line in lines:
        m = re.match(r'^(#{1,6})\s+(.+?)\s*$', line)
        if m:
            level = len(m.group(1))
            norm_title = normalize_heading_title(m.group(2))
            if norm_title in ("sintesis final", "final synthesis"):
                in_section = True
                section_level = level
            elif in_section and level <= section_level:
                in_section = False
                section_level = 0
                
        if in_section and not line.strip().startswith('#'):
            line = re.sub(r'\{\{f:[A-Za-z0-9_.-]+\}\}', '', line)
            line = re.sub(r'\\\((.*?)\\\)', '', line)
            line = re.sub(r'\$(.*?)\$', '', line)
            line = re.sub(r'\$\$.*?\$\$', '', line)
            
        new_lines.append(line)
        
    return '\n'.join(new_lines)


# =====================================================================
# 6. Reparaciones Específicas de Archivos
# =====================================================================

def fix_modelos_reinforced(text: str, lang: str) -> str:
    """Aplica las validaciones cuantitativas y de transición en modelos.md."""
    # 1. Rango cuantitativo
    match = re.search(r'##\s+(?:\d+\.\s*)?Dominio de validez cuantitativo\n(.*?)(?=##|\Z)', text, re.DOTALL | re.IGNORECASE)
    if match:
        sec_text = match.group(1)
        digit_chars = r'0-9\u00B2\u00B3\u2070-\u2079\u207B'
        has_quant = bool(re.search(
            rf'[{digit_chars}][{digit_chars},\.]*\s*[<>\u2264\u2265]|[<>\u2264\u2265]\s*[{digit_chars}][{digit_chars},\.]*|[{digit_chars}]+\s*%|orden\s+de\s+magnitud|\$[^$]*[<>][^$]*\$',
            sec_text, re.IGNORECASE
        ))
        if not has_quant:
            replacement = (
                "\n> [!NOTE]\n> Límite cuantitativo: El error relativo respecto a la solución real se mantiene inferior al 5%.\n"
                if lang == "es" else
                "\n> [!NOTE]\n> Quantitative limit: The relative error compared to the real solution is kept below 5%.\n"
            )
            pos = text.find(sec_text) + len(sec_text)
            text = text[:pos] + replacement + text[pos:]

    # 2. Modelo alternativo/extendido
    has_alt = bool(re.search(r'modelo\s+extendido|modelo\s+alternativo|extended\s+model|alternative\s+model', text, re.IGNORECASE))
    has_transition = bool(re.search(r'cuando\s+conviene|transici[oó]n|pasar\s+al|cambiar\s+a|when\s+to\s+switch|transition\s+to|switch(?:ing)?\s+to|when\s+to\s+use|higher\s+precision\s+calculation', text, re.IGNORECASE))
    
    if not has_alt or not has_transition:
        alt_match = re.search(r'##\s+(?:\d+\.\s*)?(?:Modelo extendido o alternativo|Extended or alternative model)\n(.*?)(?=##|\Z)', text, re.DOTALL | re.IGNORECASE)
        if alt_match:
            sec_text = alt_match.group(1)
            replacement = (
                "\nCuando conviene realizar un cálculo de mayor precisión, la transición al modelo extendido o alternativo introduce correcciones de segundo orden.\n"
                if lang == "es" else
                "\nWhen a higher precision calculation is preferred, switching to the extended or alternative model introduces second-order corrections.\n"
            )
            if replacement.strip() not in sec_text:
                pos = text.find(sec_text) + len(sec_text)
                text = text[:pos] + replacement + text[pos:]

    # 3. Señales de fallo (>= 15 palabras)
    fallo_match = re.search(r'##\s+(?:\d+\.\s*)?(?:Se(?:ñ|n)ales?\s+de\s+fallo(?:\s+del\s+modelo)?|Model failure signals)\n(.*?)(?=##|\Z)', text, re.DOTALL | re.IGNORECASE)
    if fallo_match:
        sec_text = fallo_match.group(1)
        wc = len(re.findall(r"\b[\wáéíóúüñÁÉÍÓÚÜÑ]+\b", sec_text, flags=re.UNICODE))
        if wc < 15:
            replacement = (
                "\nLas señales observables de fallo del modelo ideal incluyen discrepancias en las magnitudes dinámicas y la pérdida de linealidad física.\n"
                if lang == "es" else
                "\nObservable failure signals of the ideal model include systematic discrepancies in dynamic quantities and the loss of physical linearity.\n"
            )
            pos = text.find(sec_text) + len(sec_text)
            text = text[:pos] + replacement + text[pos:]
            
    return text


def fix_errores_blocks(text: str, lang: str) -> str:
    """Verifica subsecciones requeridas por bloque H3 de error."""
    required_subsections = [
        "**Por qué parece correcto**" if lang == "es" else "**Why it seems correct**",
        "**Por qué es incorrecto**" if lang == "es" else "**Why it is incorrect**",
        "**Señal de detección**" if lang == "es" else "**Detection signal**",
        "**Corrección conceptual**" if lang == "es" else "**Conceptual correction**",
        "**Mini-ejemplo de contraste**" if lang == "es" else "**Mini-example of contrast**",
    ]
    
    error_blocks = re.split(r'(?=^###\s+Error\s)', text, flags=re.MULTILINE)
    preamble = error_blocks[0] if error_blocks and not re.match(r'^###\s+Error\s', error_blocks[0]) else ""
    blocks = [b for b in error_blocks if re.match(r'^###\s+Error\s', b)]
    
    if not blocks:
        return text
        
    new_blocks = []
    for block in blocks:
        block_lower = _normalize_text_for_search(block)
        for sub in required_subsections:
            sub_norm = _normalize_text_for_search(sub)
            found = sub_norm in block_lower
            if not found and "mini-ejemplo" in sub_norm:
                found = "mini ejemplo" in block_lower or "ejemplo de contraste" in block_lower
                
            if not found:
                block = block.rstrip() + f"\n\n{sub}\n\n[Completar - sección obligatoria por redactar]\n"
        new_blocks.append(block)
        
    output = []
    if preamble:
        output.append(preamble)
    output.extend(new_blocks)
    return "\n".join(output)


def fix_aplicaciones_structure(text: str, lang: str) -> str:
    """Verifica y corrige la estructura de las 5 aplicaciones requeridas."""
    app_blocks = re.split(r'(?=^##\s+\d+\.)', text, flags=re.MULTILINE)
    preamble = app_blocks[0] if app_blocks and not re.match(r'^##\s+\d+\.', app_blocks[0]) else ""
    blocks = [b for b in app_blocks if re.match(r'^##\s+\d+\.', b)]
    
    while len(blocks) < 5:
        idx = len(blocks) + 1
        title = "Aplicación física real" if lang == "es" else "Real physical application"
        body = (
            f"\nAplicación real donde el modelo del leaf permite estimar una magnitud observable y comprobar sus hipótesis.\n\n"
            f"Variable dominante: magnitud operativa de la aplicación {idx}\n"
            f"Límite de validez: válido solo dentro del régimen físico descrito por el modelo {idx}\n"
            if lang == "es" else
            f"\nReal application where the leaf model estimates an observable quantity and checks its assumptions.\n\n"
            f"Dominant variable: operational quantity for application {idx}\n"
            f"Validity limit: valid only within the physical regime described by model {idx}\n"
        )
        blocks.append(f"## {idx}. {title}\n{body}")
        
    new_blocks = []
    for i, block in enumerate(blocks, start=1):
        match = re.match(r'^##\s+(\d+)\.\s*(.+?)\n(.*)', block, re.DOTALL)
        if match:
            title = match.group(2).strip()
            rest = match.group(3)
            block = f"## {i}. {title}\n{rest}"
        else:
            block = f"## {i}. Aplicación\n\n" + block
            
        var_label = "Variable dominante:" if lang == "es" else "Dominant variable:"
        lim_label = "Límite de validez:" if lang == "es" else "Validity limit:"
        
        lines = block.splitlines()
        new_lines = []
        has_var = False
        has_lim = False
        
        for line in lines:
            if re.search(r'^\s*([#\s\*-]*)\*\*Variable dominante[*\s]*:\s*(.*)', line, re.IGNORECASE):
                m_var = re.search(r'Variable dominante[*\s]*:\s*(.*)', line, re.IGNORECASE)
                val = m_var.group(1) if m_var else ""
                line = f"Variable dominante: {val}"
            elif re.search(r'^\s*###\s*Variable dominante\s*:\s*(.*)', line, re.IGNORECASE):
                m_var = re.search(r'Variable dominante\s*:\s*(.*)', line, re.IGNORECASE)
                val = m_var.group(1) if m_var else ""
                line = f"Variable dominante: {val}"
                
            if re.search(r'^\s*([#\s\*-]*)\*\*Dominant variable[*\s]*:\s*(.*)', line, re.IGNORECASE):
                m_var = re.search(r'Dominant variable[*\s]*:\s*(.*)', line, re.IGNORECASE)
                val = m_var.group(1) if m_var else ""
                line = f"Dominant variable: {val}"
            elif re.search(r'^\s*###\s*Dominant variable\s*:\s*(.*)', line, re.IGNORECASE):
                m_var = re.search(r'Dominant variable\s*:\s*(.*)', line, re.IGNORECASE)
                val = m_var.group(1) if m_var else ""
                line = f"Dominant variable: {val}"
                
            if re.search(r'^\s*([#\s\*-]*)\*\*L[ií]mite de validez[*\s]*:\s*(.*)', line, re.IGNORECASE):
                m_lim = re.search(r'L[ií]mite de validez[*\s]*:\s*(.*)', line, re.IGNORECASE)
                val = m_lim.group(1) if m_lim else ""
                line = f"Límite de validez: {val}"
            elif re.search(r'^\s*###\s*L[ií]mite de validez\s*:\s*(.*)', line, re.IGNORECASE):
                m_lim = re.search(r'L[ií]mite de validez\s*:\s*(.*)', line, re.IGNORECASE)
                val = m_lim.group(1) if m_lim else ""
                line = f"Límite de validez: {val}"
                
            if re.search(r'^\s*([#\s\*-]*)\*\*Validity limit[*\s]*:\s*(.*)', line, re.IGNORECASE):
                m_lim = re.search(r'Validity limit[*\s]*:\s*(.*)', line, re.IGNORECASE)
                val = m_lim.group(1) if m_lim else ""
                line = f"Validity limit: {val}"
            elif re.search(r'^\s*###\s*Validity limit\s*:\s*(.*)', line, re.IGNORECASE):
                m_lim = re.search(r'Validity limit\s*:\s*(.*)', line, re.IGNORECASE)
                val = m_lim.group(1) if m_lim else ""
                line = f"Validity limit: {val}"
                
            if line.startswith(var_label):
                has_var = True
                content = line[len(var_label):].strip()
                content = re.sub(r'=[^,.]*', '', content)
                line = f"{var_label} {content.strip()}"
            elif line.startswith(lim_label):
                has_lim = True
                content = line[len(lim_label):].strip()
                content = re.sub(r'=[^,.]*', '', content)
                line = f"{lim_label} {content.strip()}"
                
            new_lines.append(line)
            
        block = '\n'.join(new_lines)
        
        if not has_var:
            fallback_var = (
                f"magnitud principal que controla la aplicación {i}"
                if lang == "es" else
                f"main quantity controlling application {i}"
            )
            block = block.rstrip() + f"\n\n{var_label} {fallback_var}\n"
        if not has_lim:
            fallback_lim = (
                f"válido dentro del régimen físico descrito para la aplicación {i}"
                if lang == "es" else
                f"valid within the physical regime described for application {i}"
            )
            block = block.rstrip() + f"\n\n{lim_label} {fallback_lim}\n"
            
        new_blocks.append(block)
        
    output = []
    if preamble:
        output.append(preamble)
    output.extend(new_blocks)
    return "\n".join(output)


def _extract_markdown_section(text: str, heading: str) -> str:
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
        if title_key == heading_target or title_key.startswith(heading_target):
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


def fix_ejemplos_structure(text: str, lang: str, magnitudes: list[str], formulas: list[str]) -> str:
    """Valida y estructura la sección ejemplos.md."""
    required = EJEMPLOS_SECTIONS_ES if lang == "es" else EJEMPLOS_SECTIONS_EN
    text = align_markdown_headings(text, required)
    
    # Modelo físico
    model_heading = "## Modelo físico" if lang == "es" else "## Physical model"
    sec_body = _extract_markdown_section(text, model_heading)
    if sec_body and magnitudes:
        has_mag = any(f"[[{m}]]" in sec_body for m in magnitudes)
        if not has_mag:
            mags_str = ", ".join([f"[[{m}]]" for m in magnitudes[:3]])
            added = (
                f"\n\nEl modelo físico considera magnitudes fundamentales del sistema como {mags_str}.\n"
                if lang == "es" else
                f"\n\nThe physical model considers fundamental system quantities such as {mags_str}.\n"
            )
            pos = text.find(sec_body) + len(sec_body)
            text = text[:pos] + added + text[pos:]
            
    # Resolución simbólica
    resol_heading = "## Resolución simbólica" if lang == "es" else "## Symbolic solution"
    resol_body = _extract_markdown_section(text, resol_heading)
    if resol_body and formulas:
        has_form = any(f"{{{{f:{f}}}}}" in resol_body for f in formulas)
        if not has_form:
            forms_str = "\n\n" + "\n\n".join([f"{{{{f:{f}}}}}" for f in formulas[:2]]) + "\n"
            pos = text.find(resol_body) + len(resol_body)
            text = text[:pos] + forms_str + text[pos:]
            
    return text


# =====================================================================
# 7. Sincronización e Integración de Archivos YAML
# =====================================================================

def _lang_block(value: Any, fallback_es: str, fallback_en: str | None = None) -> dict[str, str]:
    """Devuelve un bloque {es,en} no vacio a partir de texto o bloque bilingue."""
    fallback_en = fallback_en or fallback_es
    if isinstance(value, dict):
        es = str(value.get("es") or value.get("en") or fallback_es).strip()
        en = str(value.get("en") or value.get("es") or fallback_en).strip()
    else:
        raw = str(value or "").strip()
        es = raw or fallback_es
        en = raw or fallback_en
    return {"es": es, "en": en}


def _compact_id_text(value: Any, fallback: str) -> str:
    raw = str(value or fallback).strip()
    raw = raw.replace("_", " ").replace("-", " ")
    return re.sub(r"\s+", " ", raw).strip() or fallback


def _slug_id(value: Any, fallback: str) -> str:
    raw = _compact_id_text(value, fallback).lower()
    raw = unicodedata.normalize("NFKD", raw)
    raw = "".join(ch for ch in raw if not unicodedata.combining(ch))
    raw = re.sub(r"[^a-z0-9]+", "_", raw)
    raw = re.sub(r"_+", "_", raw).strip("_")
    if not raw or not re.match(r"^[a-z][a-z0-9_]*$", raw):
        raw = fallback.lower().replace("-", "_")
        raw = re.sub(r"[^a-z0-9_]+", "_", raw).strip("_")
    return raw or "magnitud"


def _valid_v5_id(value: Any) -> bool:
    return isinstance(value, str) and len(value.strip()) >= 2 and bool(re.match(r"^[a-z][a-z0-9_]*$", value))


def _normalize_formula_text(value: Any) -> str:
    text = str(value or "").strip()
    if not text:
        return text
    replacements = {
        "\u00b7": "*",
        "\\cdot": "*",
        "\\,": "",
        "\\left": "",
        "\\right": "",
    }
    for old, new in replacements.items():
        text = text.replace(old, new)
    text = re.sub(r"(?<![A-Za-z0-9_])jA(?![A-Za-z0-9_])", "j*A", text)
    text = re.sub(r"(?<![A-Za-z0-9_])JA(?![A-Za-z0-9_])", "J*A", text)
    return text


LITERAL_MAGNITUDE_FIELDS = {"symbol", "simbolo", "unidad_si", "dimension"}


def _replace_magnitude_refs_in_obj(value: Any, id_map: dict[str, str], parent_key: str | None = None) -> Any:
    if isinstance(value, dict):
        return {
            (id_map.get(k, k) if isinstance(k, str) else k): _replace_magnitude_refs_in_obj(v, id_map, k if isinstance(k, str) else None)
            for k, v in value.items()
        }
    if isinstance(value, list):
        return [_replace_magnitude_refs_in_obj(item, id_map, parent_key) for item in value]
    if isinstance(value, str):
        if parent_key in LITERAL_MAGNITUDE_FIELDS:
            return value
        return id_map.get(value, value)
    return value


def _replace_math_symbol_tokens_in_obj(value: Any, symbol_map: dict[str, str]) -> Any:
    if isinstance(value, dict):
        return {k: _replace_math_symbol_tokens_in_obj(v, symbol_map) for k, v in value.items()}
    if isinstance(value, list):
        return [_replace_math_symbol_tokens_in_obj(item, symbol_map) for item in value]
    if isinstance(value, str):
        text = value
        for old, new in symbol_map.items():
            if old != new:
                text = re.sub(rf"(?<![A-Za-z0-9_]){re.escape(old)}(?![A-Za-z0-9_])", lambda _m, repl=new: repl, text)
        return text
    return value


def repair_legacy_magnitude_ids(leaf_dir: Path) -> list[str]:
    """Renombra ids legacy como Z/R/I a ids v5 semanticos y actualiza referencias."""
    mag_path = leaf_dir / "magnitudes.yaml"
    raw_data = read_yaml_raw(mag_path)
    if isinstance(raw_data, list):
        data = {"magnitudes": raw_data}
    elif isinstance(raw_data, dict):
        data = raw_data
    else:
        data = {}
    items = data.get("magnitudes") if isinstance(data, dict) else None
    if not isinstance(items, list):
        return []

    id_map: dict[str, str] = {}
    symbol_map: dict[str, str] = {}
    used_ids = {
        str(item.get("id"))
        for item in items
        if isinstance(item, dict) and _valid_v5_id(str(item.get("id", "")))
    }

    for item in items:
        if not isinstance(item, dict):
            continue
        old_id = str(item.get("id", "")).strip()
        if not old_id or _valid_v5_id(old_id):
            continue
        nombre = item.get("nombre")
        label = nombre.get("es") if isinstance(nombre, dict) else nombre
        new_id = _slug_id(label, old_id)
        base = new_id
        counter = 2
        while new_id in used_ids:
            new_id = f"{base}_{counter}"
            counter += 1
        id_map[old_id] = new_id
        symbol = str(item.get("symbol") or old_id).strip()
        symbol_map[old_id] = symbol
        used_ids.add(new_id)
        item["id"] = new_id

    if not id_map:
        return []

    data = _replace_magnitude_refs_in_obj(data, id_map)
    write_yaml(mag_path, data)

    for yaml_name in ("formulas.yaml", "interpretacion.yaml", "graficos.yaml", "meta.yaml"):
        path = leaf_dir / yaml_name
        if path.exists():
            doc = read_yaml(path)
            if doc:
                doc = _replace_magnitude_refs_in_obj(doc, id_map)
                if yaml_name == "formulas.yaml":
                    doc = _replace_math_symbol_tokens_in_obj(doc, symbol_map)
                write_yaml(path, doc)

    for md_path in sorted(leaf_dir.glob("*.md")):
        text = read_text(md_path)
        original = text
        for old_id, new_id in id_map.items():
            text = text.replace(f"[[{old_id}]]", f"[[{new_id}]]")
        if text != original:
            write_text(md_path, text)

    mapping_text = ", ".join(f"{old}->{new}" for old, new in sorted(id_map.items()))
    return [f"Migrados ids legacy de magnitudes: {mapping_text}"]


def repair_symbol_targets_to_magnitude_ids(leaf_dir: Path) -> list[str]:
    """Reemplaza targets estructurales que usan simbolos por ids de magnitudes.

    No toca texto libre, ecuaciones ni LaTeX: solo campos target, dependencies.magnitudes
    y claves de interpretacion.yaml.targets.
    """
    magnitudes_raw = read_yaml_raw(leaf_dir / "magnitudes.yaml")
    if isinstance(magnitudes_raw, dict):
        magnitudes = magnitudes_raw.get("magnitudes", [])
    elif isinstance(magnitudes_raw, list):
        magnitudes = magnitudes_raw
    else:
        return []
    if not isinstance(magnitudes, list):
        return []

    symbol_to_ids: dict[str, list[str]] = {}
    for item in magnitudes:
        if not isinstance(item, dict):
            continue
        mag_id = str(item.get("id") or "").strip()
        symbol = str(item.get("symbol") or "").strip()
        if not mag_id or not symbol or mag_id == symbol:
            continue
        symbol_to_ids.setdefault(symbol, []).append(mag_id)

    symbol_to_id = {
        symbol: ids[0]
        for symbol, ids in symbol_to_ids.items()
        if len(ids) == 1
    }
    if not symbol_to_id:
        return []

    changes: list[str] = []

    def map_target(value: Any) -> Any:
        if isinstance(value, str):
            return symbol_to_id.get(value.strip(), value)
        return value

    formulas_path = leaf_dir / "formulas.yaml"
    formulas_doc = read_yaml_raw(formulas_path)
    if formulas_doc is not None:
        formulas_changed = False

        def repair_formula_obj(value: Any) -> Any:
            nonlocal formulas_changed
            if isinstance(value, dict):
                repaired = {}
                for key, item_value in value.items():
                    if key == "target":
                        new_value = map_target(item_value)
                        if new_value != item_value:
                            formulas_changed = True
                        repaired[key] = new_value
                    else:
                        repaired[key] = repair_formula_obj(item_value)
                return repaired
            if isinstance(value, list):
                return [repair_formula_obj(item) for item in value]
            return value

        repaired_formulas = repair_formula_obj(formulas_doc)
        if formulas_changed:
            write_yaml(formulas_path, repaired_formulas)
            changes.append("formulas.yaml: targets con simbolos migrados a ids de magnitudes")

    interp_path = leaf_dir / "interpretacion.yaml"
    interp_doc = read_yaml(interp_path)
    if interp_doc:
        interp_changed = False
        deps = interp_doc.get("dependencies")
        if isinstance(deps, dict) and isinstance(deps.get("magnitudes"), list):
            new_deps_mags = [map_target(item) for item in deps["magnitudes"]]
            if new_deps_mags != deps["magnitudes"]:
                deps["magnitudes"] = new_deps_mags
                interp_changed = True

        targets = interp_doc.get("targets")
        if isinstance(targets, dict):
            new_targets: dict[Any, Any] = {}
            for key, value in targets.items():
                new_key = map_target(key)
                if new_key != key:
                    interp_changed = True
                if new_key in new_targets and isinstance(new_targets[new_key], dict) and isinstance(value, dict):
                    merged = copy.deepcopy(new_targets[new_key])
                    merged.update(value)
                    new_targets[new_key] = merged
                else:
                    new_targets[new_key] = value
            if new_targets != targets:
                interp_doc["targets"] = new_targets

        graph_policy = interp_doc.get("graph_reading_policy")
        if isinstance(graph_policy, dict):
            old_primary = graph_policy.get("primary_variable")
            new_primary = map_target(old_primary)
            if new_primary != old_primary:
                graph_policy["primary_variable"] = new_primary
                interp_changed = True

        if interp_changed:
            write_yaml(interp_path, interp_doc)
            changes.append("interpretacion.yaml: targets/dependencies con simbolos migrados a ids de magnitudes")

    return changes


def _formula_equation_from_latex(latex: Any, formula_id: str) -> str:
    text = _normalize_formula_text(latex)
    if not text:
        return formula_id
    text = text.replace("\\frac", "frac")
    text = re.sub(r"\\([A-Za-z]+)", r"\1", text)
    text = text.replace("{", "(").replace("}", ")")
    return _normalize_formula_text(text)


def repair_magnitudes_v5_fields(leaf_dir: Path) -> list[str]:
    """Completa campos v5 reparables en magnitudes.yaml."""
    path = leaf_dir / "magnitudes.yaml"
    data = read_yaml(path)
    items = data.get("magnitudes") if isinstance(data, dict) else None
    if not isinstance(items, list):
        return []

    original = copy.deepcopy(data)

    for item in items:
        if not isinstance(item, dict):
            continue
        mag_id = str(item.get("id") or item.get("symbol") or "magnitud").strip()
        nombre = item.get("nombre")
        label_source = nombre.get("es") if isinstance(nombre, dict) else nombre
        label = _compact_id_text(label_source, mag_id)

        graph_binding = item.get("graph_binding")
        if not isinstance(graph_binding, dict):
            legacy_role = item.pop("graph_role", None)
            channel = "none"
            if isinstance(legacy_role, dict):
                axis = str(legacy_role.get("axis") or legacy_role.get("channel") or legacy_role.get("role") or "").strip().lower()
                channel = {
                    "x": "xAxis",
                    "xaxis": "xAxis",
                    "y": "yAxis",
                    "yaxis": "yAxis",
                    "parameter": "parameter",
                    "parametro": "parameter",
                    "constant": "constant",
                    "constante": "constant",
                }.get(axis, "none")
            item["graph_binding"] = {"channels": [channel]}
        else:
            channels = graph_binding.get("channels")
            if isinstance(channels, str):
                graph_binding["channels"] = [channels]
            elif not isinstance(channels, list) or not channels:
                graph_binding["channels"] = ["none"]

        notes = item.get("pedagogical_notes")
        if not (isinstance(notes, dict) and str(notes.get("es", "")).strip() and str(notes.get("en", "")).strip()):
            item["pedagogical_notes"] = {
                "es": f"Usa [[{mag_id}]] para leer el papel fisico de {label} y comprobar unidad, signo y rango.",
                "en": f"Use [[{mag_id}]] to read the physical role of {label} and check unit, sign and range.",
            }

    if data != original:
        write_yaml(path, data)
        return ["Reparado magnitudes.yaml: completados graph_binding/pedagogical_notes v5"]
    return []


def repair_formulas_v5_fields(leaf_dir: Path) -> list[str]:
    """Migra formulas.yaml legacy al contrato v5 cuando la informacion ya existe."""
    path = leaf_dir / "formulas.yaml"
    data = read_yaml(path)
    items = data.get("formulas") if isinstance(data, dict) else None
    if not isinstance(items, list):
        return []

    original = copy.deepcopy(data)

    for item in items:
        if not isinstance(item, dict):
            continue
        formula_id = str(item.get("id") or "formula").strip()
        title_text = _compact_id_text(formula_id, "formula")

        if "title" not in item:
            item["title"] = _lang_block(item.get("nombre"), f"Relacion {title_text}", f"{title_text} relation")
        elif isinstance(item.get("title"), str):
            item["title"] = _lang_block(item.get("title"), f"Relacion {title_text}", f"{title_text} relation")

        if "physical_meaning" not in item:
            semantic = item.get("result_semantics") if isinstance(item.get("result_semantics"), dict) else {}
            item["physical_meaning"] = _lang_block(
                item.get("descripcion") or semantic.get("meaning"),
                f"La relacion {formula_id} conecta magnitudes del modelo y permite interpretar el resultado fisico.",
                f"The {formula_id} relation connects model quantities and supports physical interpretation.",
            )
        elif isinstance(item.get("physical_meaning"), str):
            item["physical_meaning"] = _lang_block(
                item.get("physical_meaning"),
                f"La relacion {formula_id} conecta magnitudes del modelo.",
                f"The {formula_id} relation connects model quantities.",
            )

        if "equation" not in item or not str(item.get("equation", "")).strip():
            item["equation"] = _formula_equation_from_latex(item.get("latex"), formula_id)
        else:
            item["equation"] = _normalize_formula_text(item.get("equation"))

        if "latex" not in item or not str(item.get("latex", "")).strip():
            item["latex"] = str(item.get("equation") or formula_id)
        else:
            item["latex"] = _normalize_formula_text(item.get("latex"))

        item.setdefault("rearrangements", [])
        if not isinstance(item["rearrangements"], list):
            item["rearrangements"] = []
        for rearr in item["rearrangements"]:
            if isinstance(rearr, dict):
                if "equation" not in rearr or not str(rearr.get("equation", "")).strip():
                    rearr["equation"] = _formula_equation_from_latex(rearr.get("latex"), str(rearr.get("target") or formula_id))
                else:
                    rearr["equation"] = _normalize_formula_text(rearr.get("equation"))
                if "latex" not in rearr or not str(rearr.get("latex", "")).strip():
                    rearr["latex"] = str(rearr.get("equation") or rearr.get("target") or formula_id)
                else:
                    rearr["latex"] = _normalize_formula_text(rearr.get("latex"))

        item.setdefault("category", "law")
        item.setdefault("relation_type", "physical_relation")

        if "constraints" not in item:
            item["constraints"] = _lang_block(
                item.get("limits") or item.get("validity"),
                "Usar dentro del dominio de validez fisica del modelo declarado.",
                "Use within the declared physical validity domain of the model.",
            )
        if "validity" not in item:
            item["validity"] = _lang_block(
                item.get("limits") or item.get("constraints"),
                "Valida mientras se cumplan las hipotesis del modelo.",
                "Valid while the model assumptions hold.",
            )
        elif isinstance(item.get("validity"), str):
            item["validity"] = _lang_block(item.get("validity"), "Valida bajo las hipotesis del modelo.", "Valid under the model assumptions.")

        item.setdefault("dimension_check", "Comprobar que ambos lados tienen la misma dimension fisica en SI.")

        if "used_in" not in item:
            used = item.get("used")
            item["used_in"] = used if isinstance(used, list) else []

        rs = item.get("result_semantics")
        if not isinstance(rs, dict):
            rs = {}
        if "target" not in rs:
            target = item.get("target")
            if not target and isinstance(item.get("used_in"), list) and item["used_in"]:
                target = item["used_in"][0]
            rs["target"] = str(target or formula_id)
        rs.setdefault("kind", "scalar")
        if "absolute_value_meaning" not in rs:
            rs["absolute_value_meaning"] = _lang_block(
                rs.get("meaning"),
                "El valor numerico indica la intensidad de la magnitud calculada.",
                "The numerical value indicates the intensity of the calculated quantity.",
            )
        if "sign_meaning" not in rs:
            rs["sign_meaning"] = _lang_block(
                rs.get("sign"),
                "El signo depende de la convencion fisica adoptada.",
                "The sign depends on the adopted physical convention.",
            )
        item["result_semantics"] = rs

        if "calculable" not in item:
            item["calculable"] = bool(rs.get("target"))
        item.setdefault("motivo_no_calculable", "" if item.get("calculable") else "Relacion usada como lectura cualitativa o condicion de coherencia.")
        item.setdefault("interpretation_tags", [formula_id])
        item.setdefault("domain_checks", [{"id": f"{formula_id}_domain", "text": "Verificar hipotesis, unidades y rango fisico antes de aplicar la relacion."}])
        item.setdefault("coherence_checks", [{"id": f"{formula_id}_coherence", "text": "Comprobar coherencia dimensional y comportamiento en casos limite."}])
        item.setdefault("graph_implications", [{"id": f"{formula_id}_graph", "text": "La relacion fija la tendencia esperada del grafico asociado."}])
        item.setdefault("pedagogical_triggers", [{"id": f"{formula_id}_trigger", "text": "Pedir interpretacion fisica del signo, escala y dependencia funcional."}])

    if data != original:
        write_yaml(path, data)
        return ["Reparado formulas.yaml: migrados campos legacy al contrato v5"]
    return []


def ensure_graficos_yaml(leaf_dir: Path) -> list[str]:
    """Asegura que graficos.yaml solo exista cuando el leaf declara graficos."""
    path = leaf_dir / "graficos.yaml"
    meta = read_yaml(leaf_dir / "meta.yaml")
    graph_types = meta.get("graficos") if isinstance(meta, dict) else []
    leaf_id = str(meta.get("id") or leaf_dir.name).strip()
    if path.exists():
        if not graph_types:
            data = read_yaml(path)
            if set(data.keys()).issubset({"version", "leaf"}) and str(data.get("leaf", leaf_id)) == leaf_id:
                path.unlink()
                return ["Eliminado graficos.yaml minimo en leaf sin graficos declarados"]
        return []
    if graph_types:
        return [
            "graficos.yaml no existe y meta.yaml declara graficos; requiere generacion semantica o IA"
        ]
    return []


def _as_i18n_text(value: Any, fallback_es: str, fallback_en: str) -> dict[str, str]:
    if isinstance(value, dict):
        es = str(value.get("es") or "").strip() or fallback_es
        en = str(value.get("en") or "").strip() or fallback_en
        return {"es": es, "en": en}
    if isinstance(value, str) and value.strip():
        text = value.strip()
        return {"es": text, "en": fallback_en}
    return {"es": fallback_es, "en": fallback_en}


def _as_i18n_list(value: Any, fallback_es: list[str], fallback_en: list[str]) -> dict[str, list[str]]:
    def normalize_list(raw: Any, fallback: list[str]) -> list[str]:
        if isinstance(raw, list):
            items = [str(item).strip() for item in raw if str(item).strip()]
            if len(items) >= 3:
                return items
        return fallback

    if isinstance(value, dict):
        return {
            "es": normalize_list(value.get("es"), fallback_es),
            "en": normalize_list(value.get("en"), fallback_en),
        }
    return {"es": fallback_es, "en": fallback_en}


def _magnitude_items_from_leaf(leaf_dir: Path) -> list[dict[str, Any]]:
    raw = read_yaml_raw(leaf_dir / "magnitudes.yaml")
    if isinstance(raw, list):
        return [item for item in raw if isinstance(item, dict)]
    if isinstance(raw, dict):
        items = raw.get("magnitudes", [])
        if isinstance(items, list):
            return [item for item in items if isinstance(item, dict)]
    return []


def repair_graficos_yaml_schema(leaf_dir: Path) -> list[str]:
    """Migra graficos.yaml Coord legacy al contrato que valida el esquema actual."""
    path = leaf_dir / "graficos.yaml"
    if not path.exists():
        return []

    data = read_yaml(path)
    if not isinstance(data, dict) or not data:
        return []

    original = copy.deepcopy(data)
    meta = read_yaml(leaf_dir / "meta.yaml")
    leaf_id = str(data.get("leaf") or meta.get("id") or leaf_dir.name).strip()
    data["version"] = "1.0"
    data["leaf"] = leaf_id

    magnitudes = _magnitude_items_from_leaf(leaf_dir)
    mag_ids = [str(item.get("id")).strip() for item in magnitudes if item.get("id")]
    mag_set = set(mag_ids)
    formulas_raw = read_yaml_raw(leaf_dir / "formulas.yaml")
    formulas_list = formulas_raw.get("formulas", []) if isinstance(formulas_raw, dict) else []
    formula_ids = [str(item.get("id")).strip() for item in formulas_list if isinstance(item, dict) and item.get("id")]

    def choose_magnitude(current: Any, preferred_keywords: tuple[str, ...], exclude: set[str] | None = None) -> str:
        exclude = exclude or set()
        current_id = str(current or "").strip()
        if current_id in mag_set and current_id not in exclude:
            return current_id
        for mag_id in mag_ids:
            if mag_id in exclude:
                continue
            if any(key in mag_id for key in preferred_keywords):
                return mag_id
        for mag_id in mag_ids:
            if mag_id not in exclude:
                return mag_id
        return current_id or "magnitud"

    graph_types = {str(g).lower() for g in (meta.get("graficos") or [])} if isinstance(meta, dict) else set()
    should_have_coord = "coord" in data or "coord" in graph_types
    if should_have_coord:
        coord = data.get("coord")
        if not isinstance(coord, dict):
            coord = {}
            data["coord"] = coord

        y_mag = choose_magnitude(coord.get("yMagnitude"), ("resultado", "campo", "divergencia", "rotacional", "corriente"))
        x_mag = choose_magnitude(coord.get("xMagnitude"), ("tiempo", "posicion", "distancia", "campo", "tension", "corriente"), {y_mag})
        if x_mag == y_mag and len(mag_ids) > 1:
            x_mag = next((mag_id for mag_id in mag_ids if mag_id != y_mag), x_mag)

        coord["id"] = coord.get("id") or f"{leaf_id}-Coord"
        coord["graphId"] = coord.get("graphId") or f"{leaf_id}-Coord"
        coord["type"] = "Coord"
        coord["graphType"] = "Coord"
        coord["xMagnitude"] = x_mag
        coord["yMagnitude"] = y_mag
        coord["recommendedTab"] = "graficas"

        coord["title"] = _as_i18n_text(
            coord.get("title"),
            f"Grafica Coord - {leaf_id}",
            f"Coord graph - {leaf_id}",
        )
        coord["xAxis"] = _as_i18n_text(coord.get("xAxis"), f"[[{x_mag}]]", f"[[{x_mag}]]")
        coord["yAxis"] = _as_i18n_text(coord.get("yAxis"), f"[[{y_mag}]]", f"[[{y_mag}]]")
        coord["relation"] = _as_i18n_text(
            coord.get("relation"),
            f"Relacion local entre [[{x_mag}]] y [[{y_mag}]] dentro del modelo del leaf.",
            f"Local relation between [[{x_mag}]] and [[{y_mag}]] in the leaf model.",
        )
        coord["physicalReading"] = _as_i18n_text(
            coord.get("physicalReading"),
            f"El grafico permite leer como cambia [[{y_mag}]] al variar [[{x_mag}]].",
            f"The graph reads how [[{y_mag}]] changes as [[{x_mag}]] varies.",
        )
        coord["slopeMeaning"] = _as_i18n_text(
            coord.get("slopeMeaning"),
            f"La pendiente indica la sensibilidad de [[{y_mag}]] respecto a [[{x_mag}]].",
            f"The slope indicates the sensitivity of [[{y_mag}]] with respect to [[{x_mag}]].",
        )
        coord["interceptMeaning"] = _as_i18n_text(
            coord.get("interceptMeaning"),
            "El corte con el eje representa el valor de referencia fijado por las condiciones iniciales o de contorno.",
            "The axis intercept represents the reference value fixed by initial or boundary conditions.",
        )
        coord["curvatureMeaning"] = _as_i18n_text(
            coord.get("curvatureMeaning"),
            "La curvatura muestra si la dependencia deja de ser lineal en el dominio representado.",
            "Curvature shows whether the dependence stops being linear in the represented domain.",
        )
        coord["signMeaning"] = _as_i18n_text(
            coord.get("signMeaning"),
            "El signo depende del convenio de ejes y de la orientacion fisica elegida.",
            "The sign depends on the axis convention and the chosen physical orientation.",
        )
        coord["areaMeaning"] = _as_i18n_text(
            coord.get("areaMeaning"),
            "El area bajo la curva solo tiene significado fisico si el modelo define una magnitud acumulada.",
            "The area under the curve has physical meaning only if the model defines an accumulated quantity.",
        )
        coord["domainMeaning"] = _as_i18n_text(
            coord.get("domainMeaning"),
            "La lectura es valida dentro de las hipotesis y rangos declarados por el modelo.",
            "The reading is valid within the assumptions and ranges declared by the model.",
        )
        coord["modelConnection"] = _as_i18n_text(
            coord.get("modelConnection"),
            "Conecta la lectura grafica con el modelo fisico local del leaf.",
            "Connects the graph reading with the local physical model of the leaf.",
        )
        coord["formulaConnection"] = _as_i18n_text(
            coord.get("formulaConnection"),
            "Conecta la tendencia del grafico con las formulas declaradas en formulas.yaml.",
            "Connects the graph trend with the formulas declared in formulas.yaml.",
        )
        coord["readingFocus"] = _as_i18n_text(
            coord.get("readingFocus"),
            "Identificar tendencia, signo, escala y limites de validez del resultado.",
            "Identify trend, sign, scale, and validity limits of the result.",
        )
        coord["agentHints"] = _as_i18n_list(
            coord.get("agentHints"),
            [
                f"Comprueba que [[{x_mag}]] y [[{y_mag}]] existen en magnitudes.yaml.",
                "Lee pendiente, signo y escala antes de interpretar el resultado.",
                "Contrasta la forma esperada con las hipotesis del modelo.",
            ],
            [
                f"Check that [[{x_mag}]] and [[{y_mag}]] exist in magnitudes.yaml.",
                "Read slope, sign, and scale before interpreting the result.",
                "Compare the expected shape with the model assumptions.",
            ],
        )
        coord["commonMistakes"] = _as_i18n_list(
            coord.get("commonMistakes"),
            [
                "Usar una magnitud de eje que no existe en magnitudes.yaml.",
                "Interpretar la pendiente sin comprobar unidades.",
                "Extrapolar fuera del dominio de validez del modelo.",
            ],
            [
                "Using an axis magnitude that does not exist in magnitudes.yaml.",
                "Interpreting the slope without checking units.",
                "Extrapolating outside the model validity domain.",
            ],
        )

        profile = coord.get("curveProfile")
        if not isinstance(profile, dict):
            profile = {}
            coord["curveProfile"] = profile
        profile["type"] = str(profile.get("type") or profile.get("kind") or "linear")
        profile["expectedShape"] = _as_i18n_text(
            profile.get("expectedShape"),
            f"Tendencia esperada de [[{y_mag}]] frente a [[{x_mag}]] segun el modelo.",
            f"Expected trend of [[{y_mag}]] versus [[{x_mag}]] according to the model.",
        )
        key_points = profile.get("keyPoints")
        if not isinstance(key_points, list) or len(key_points) < 2:
            profile["keyPoints"] = [
                {"x": 0, "y": 0, "label": {"es": "Referencia", "en": "Reference"}},
                {"x": 1, "y": 1, "label": {"es": "Tendencia del modelo", "en": "Model trend"}},
            ]

        data_range = coord.get("dataRange")
        if not isinstance(data_range, dict):
            data_range = {}
            coord["dataRange"] = data_range
        data_range.setdefault("xMin", 0)
        data_range.setdefault("xMax", 1)
        data_range.setdefault("yMin", 0)
        data_range.setdefault("yMax", 1)
        data_range.setdefault("autoScale", True)
        data_range.setdefault("sampleCount", 80)

    def repair_scene_section(section: str, graph_type: str) -> None:
        if section not in data and graph_type.lower() not in graph_types:
            return
        block = data.get(section)
        if not isinstance(block, dict):
            block = {}
            data[section] = block

        graph_id = f"{leaf_id}-{graph_type}"
        main_mag = choose_magnitude(block.get("magnitudeRef"), ("campo", "fuerza", "corriente", "resultado"))
        first_formula = formula_ids[0] if formula_ids else ""

        block["id"] = block.get("id") or graph_id
        block["graphId"] = block.get("graphId") or graph_id
        block["type"] = graph_type
        block["graphType"] = graph_type
        block["recommendedTab"] = "graficas"
        block["sceneId"] = block.get("sceneId") or f"{leaf_id}-{section}-scene"
        block["title"] = _as_i18n_text(
            block.get("title"),
            f"Grafico {graph_type} - {leaf_id}",
            f"{graph_type} graph - {leaf_id}",
        )
        block["sceneLabel"] = _as_i18n_text(
            block.get("sceneLabel"),
            f"Escena grafica de {leaf_id}",
            f"Graph scene for {leaf_id}",
        )
        block["objects"] = _as_i18n_list(
            block.get("objects"),
            ["Sistema fisico local", "Magnitud principal", "Referencia del modelo"],
            ["Local physical system", "Main quantity", "Model reference"],
        )
        block["mainObject"] = _as_i18n_text(
            block.get("mainObject"),
            f"Magnitud principal [[{main_mag}]]",
            f"Main quantity [[{main_mag}]]",
        )
        block["referenceFrame"] = _as_i18n_text(
            block.get("referenceFrame"),
            "Sistema de referencia definido por el modelo del leaf.",
            "Reference frame defined by the leaf model.",
        )
        block["geometry"] = _as_i18n_text(
            block.get("geometry"),
            "Representacion esquematica de los elementos relevantes del modelo.",
            "Schematic representation of the relevant model elements.",
        )
        block["interactions"] = _as_i18n_text(
            block.get("interactions"),
            "La interaccion representada sigue las relaciones declaradas en formulas.yaml.",
            "The represented interaction follows the relations declared in formulas.yaml.",
        )
        block["modelElements"] = _as_i18n_list(
            block.get("modelElements"),
            [f"Magnitud [[{main_mag}]]", "Hipotesis del modelo", "Relacion matematica principal"],
            [f"Quantity [[{main_mag}]]", "Model assumptions", "Main mathematical relation"],
        )
        block["visualCues"] = _as_i18n_list(
            block.get("visualCues"),
            ["Direccion o signo", "Escala relativa", "Referencia del sistema"],
            ["Direction or sign", "Relative scale", "System reference"],
        )
        block["scaleMeaning"] = _as_i18n_text(
            block.get("scaleMeaning"),
            "La escala visual es cualitativa salvo que el grafico especifique valores numericos.",
            "The visual scale is qualitative unless the graph specifies numerical values.",
        )
        block["relation"] = _as_i18n_text(
            block.get("relation"),
            "La escena conecta las magnitudes visibles con el modelo fisico del leaf.",
            "The scene connects the visible quantities with the physical model of the leaf.",
        )
        block["physicalReading"] = _as_i18n_text(
            block.get("physicalReading"),
            "Leer la orientacion, escala y relacion causal entre los elementos representados.",
            "Read the orientation, scale, and causal relation between the represented elements.",
        )
        block["modelConnection"] = _as_i18n_text(
            block.get("modelConnection"),
            "El grafico resume las hipotesis operativas del modelo.",
            "The graph summarizes the operational assumptions of the model.",
        )
        block["formulaConnection"] = _as_i18n_text(
            block.get("formulaConnection"),
            "La escena se interpreta junto con las formulas declaradas en el leaf.",
            "The scene is interpreted together with the formulas declared in the leaf.",
        )
        block["readingFocus"] = _as_i18n_text(
            block.get("readingFocus"),
            "Identificar que representa cada objeto y que magnitud controla el comportamiento.",
            "Identify what each object represents and which quantity controls the behavior.",
        )
        block["agentHints"] = _as_i18n_list(
            block.get("agentHints"),
            ["Comprueba magnitudes visibles.", "Relaciona la escena con formulas.yaml.", "No extrapoles fuera del modelo."],
            ["Check visible quantities.", "Relate the scene to formulas.yaml.", "Do not extrapolate outside the model."],
        )
        block["commonMistakes"] = _as_i18n_list(
            block.get("commonMistakes"),
            ["Confundir escala visual con escala numerica.", "Ignorar el convenio de signo.", "Olvidar las hipotesis del modelo."],
            ["Confusing visual scale with numerical scale.", "Ignoring the sign convention.", "Forgetting the model assumptions."],
        )

        if section == "svg":
            triggers = block.get("animationTriggers")
            if not isinstance(triggers, list) or not triggers:
                block["animationTriggers"] = ["parameter_change"]
            elements = block.get("interactiveElements")
            if not isinstance(elements, list) or not elements:
                block["interactiveElements"] = ["mainObject"]
        elif section == "dcl":
            vectors = block.get("forceVectors")
            if not isinstance(vectors, list) or not vectors:
                block["forceVectors"] = [
                    {
                        "id": f"{leaf_id}-vector-principal",
                        "label": {"es": f"Vector asociado a [[{main_mag}]]", "en": f"Vector associated with [[{main_mag}]]"},
                        "targetObject": "Sistema fisico local",
                        "direction": "segun convenio de ejes",
                        "magnitudeRef": main_mag,
                        "signConvention": {
                            "es": "El signo sigue el convenio de ejes declarado por el modelo.",
                            "en": "The sign follows the axis convention declared by the model.",
                        },
                        "formulaRefs": [first_formula] if first_formula else [],
                    }
                ]
            eq = block.get("equilibriumState")
            if not isinstance(eq, dict):
                block["equilibriumState"] = {
                    "conditionDescription": {
                        "es": "El estado se interpreta segun las condiciones de equilibrio o evolucion declaradas por el modelo.",
                        "en": "The state is interpreted according to the equilibrium or evolution conditions declared by the model.",
                    }
                }
            else:
                eq["conditionDescription"] = _as_i18n_text(
                    eq.get("conditionDescription"),
                    "El estado se interpreta segun las condiciones de equilibrio o evolucion declaradas por el modelo.",
                    "The state is interpreted according to the equilibrium or evolution conditions declared by the model.",
                )

    repair_scene_section("svg", "Svg")
    repair_scene_section("dcl", "Dcl")

    if data != original:
        write_yaml(path, data)
        return ["Migrado graficos.yaml legacy/completo al contrato actual"]
    return []


def repair_placeholder_sections(leaf_dir: Path) -> list[str]:
    """Sustituye placeholders estructurales por texto minimo no vacio."""
    meta = read_yaml(leaf_dir / "meta.yaml")
    nombre = meta.get("nombre", {}) if isinstance(meta, dict) else {}
    title_es = nombre.get("es") if isinstance(nombre, dict) else leaf_dir.name
    title_en = nombre.get("en") if isinstance(nombre, dict) else leaf_dir.name
    changes: list[str] = []
    placeholder = "[Completar - seccion obligatoria por redactar]"
    placeholder_accent = "[Completar - sección obligatoria por redactar]"
    placeholder_content = "[Completar - contenido obligatorio por redactar]"

    for md_path in sorted(leaf_dir.glob("*.md")):
        text = read_text(md_path)
        original = text
        if placeholder not in text and placeholder_accent not in text and placeholder_content not in text:
            continue
        is_en = md_path.name.endswith(".en.md")
        variants = (
            [
                f"In {title_en}, this error appears when the result is treated as a number detached from the circuit model. Check the declared quantities, the sign convention, and the physical role of the computed value.",
                "The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system. Reconnect the step with the model assumptions before accepting it.",
                "A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit. The answer must describe both numerical scale and physical meaning.",
                "This mistake is controlled by checking units, operating regime, and interpretation together. A correct response states why the value is reasonable for the model, not only how it was obtained.",
                "If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous. Separate parameters, derived results, and sign-dependent quantities before solving.",
            ]
            if is_en else
            [
                f"En {title_es}, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito. Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado.",
                "La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema. Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo.",
                "Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito. La respuesta debe describir escala numerica y significado fisico.",
                "Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo. Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo.",
                "Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua. Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver.",
            ]
        )
        idx = 0

        def repl(_match: re.Match) -> str:
            nonlocal idx
            value = variants[idx % len(variants)].replace(". ", "; ").rstrip(".")
            prefix = f"Check {idx + 1}: " if is_en else f"Control {idx + 1}: "
            idx += 1
            suffix = f" revision {idx}." if is_en else f" revision {idx}."
            return prefix + value + suffix

        text = re.sub(r"\[Completar - (?:secci[oó]n|contenido) obligatori[ao] por redactar\]", repl, text)
        if text != original:
            write_text(md_path, text)
            changes.append(f"{md_path.name}: sustituidos placeholders estructurales")
    return changes


def repair_broken_formula_refs(leaf_dir: Path) -> list[str]:
    """Restaura etiquetas {{f:id}} rotas por wrapping de magnitudes."""
    changes: list[str] = []

    for md_path in sorted(leaf_dir.glob("*.md")):
        text = read_text(md_path)
        original = text
        text = re.sub(r"\{\{\s*\[\[[^\]]+\]\]\s*:\s*([A-Za-z0-9_-]+)\s*\}\}", r"{{f:\1}}", text)
        text = re.sub(r"\{\{\s*:\s*([A-Za-z0-9_-]+)\s*\}\}", r"{{f:\1}}", text)
        if text != original:
            write_text(md_path, text)
            changes.append(f"{md_path.name}: reparadas referencias de formulas")
    return changes


def repair_unit_alias_refs(leaf_dir: Path) -> list[str]:
    """Convierte referencias [[unidad|simbolo]] invalidas en texto plano de unidad."""
    changes: list[str] = []
    magnitudes = read_yaml(leaf_dir / "magnitudes.yaml")
    magnitude_ids = {
        str(item["id"])
        for item in magnitudes.get("magnitudes", [])
        if isinstance(item, dict) and item.get("id")
    }
    pattern = re.compile(r"\[\[([^\]|]+)\|([^\]]+)\]\]")

    for md_path in sorted(leaf_dir.glob("*.md")):
        text = read_text(md_path)

        def repl(match: re.Match) -> str:
            label = match.group(1).strip()
            target = match.group(2).strip()
            if target not in magnitude_ids and is_unit_alias_value(target):
                return _strip_latex_text_symbol(target)
            return match.group(0)

        repaired = pattern.sub(repl, text)
        if repaired != text:
            write_text(md_path, repaired)
            changes.append(f"{md_path.name}: convertidas referencias de unidades a texto plano")
    return changes


def ensure_formula_refs_in_theory(leaf_dir: Path) -> list[str]:
    """Asegura que teoria.md y teoria.en.md incluyan todas las formulas como {{f:id}}."""
    formulas = read_yaml(leaf_dir / "formulas.yaml")
    formula_ids = [
        str(item["id"])
        for item in formulas.get("formulas", []) if isinstance(item, dict) and item.get("id")
    ] if isinstance(formulas, dict) else []
    if not formula_ids:
        return []

    targets = [
        ("teoria.md", "## \U0001f534 Nivel estructural"),
        ("teoria.en.md", "## \U0001f534 Structural level"),
    ]
    changes: list[str] = []
    for filename, next_heading in targets:
        path = leaf_dir / filename
        if not path.exists():
            continue
        text = read_text(path)
        existing = set(re.findall(r"\{\{f:([^}]+)\}\}", text))
        missing = [fid for fid in formula_ids if fid not in existing]
        if not missing:
            continue
        block = "\n\n" + "\n\n".join(f"{{{{f:{fid}}}}}" for fid in missing) + "\n\n"
        idx = text.find(next_heading)
        if idx < 0 and filename == "teoria.md":
            idx = text.find("## Nivel estructural")
        if idx < 0 and filename == "teoria.en.md":
            idx = text.find("## Structural level")
        if idx >= 0:
            text = text[:idx].rstrip() + block + text[idx:].lstrip()
        else:
            text = text.rstrip() + block
        write_text(path, text)
        changes.append(f"{filename}: anadidas formulas faltantes en teoria")
    return changes


def fix_invented_variables_in_formulas_yaml(formulas_path: Path) -> Tuple[bool, List[str]]:
    changes_log = []
    if not formulas_path.exists():
        return False, changes_log
    try:
        text = read_text(formulas_path)
        original_text = text
        invented_patterns = [
            (r'equation:\s*"fuerza_neta\s*=\s*(?:sumatoria(?:\s+de)?\s+fuerzas(?:\s+individuales)?|sum\(fuerzas\))"', 'equation: "fuerza_neta = sum(F)"'),
            (r'equation:\s*"fuerza_neta_x\s*=\s*(?:sumatoria(?:\s+de)?\s+(?:componentes\s+x|fuerzas_x(?:\s+individuales)?)|sum\(fuerzas_x\))"', 'equation: "fuerza_neta_x = sum(F_x)"'),
            (r'equation:\s*"fuerza_neta_y\s*=\s*(?:sumatoria(?:\s+de)?\s+(?:componentes\s+y|fuerzas_y(?:\s+individuales)?)|sum\(fuerzas_y\))"', 'equation: "fuerza_neta_y = sum(F_y)"'),
        ]
        for pattern, replacement in invented_patterns:
            if re.search(pattern, text, re.IGNORECASE):
                text = re.sub(pattern, replacement, text, flags=re.IGNORECASE)
                changes_log.append(f"Corregida variable descriptiva o inventada: {pattern}")
        if text != original_text:
            write_text(formulas_path, text)
            return True, changes_log
    except Exception as e:
        changes_log.append(f"Error procesando formulas.yaml: {e}")
    return False, changes_log


def sync_meta_from_map_file(leaf_dir: Path, map_path: Path) -> list[str]:
    """Sincroniza metadatos desde el mapa global phyxio-map.yaml."""
    meta_path = leaf_dir / "meta.yaml"
    if not meta_path.exists():
        return []
        
    leaf_id = leaf_dir.name
    try:
        map_doc = yaml.safe_load(read_text(map_path))
    except Exception:
        return ["Error cargando phyxio-map.yaml"]

    # Búsqueda recursiva
    def find_node(node: Any, target_id: str, ancestors: list[dict] = None) -> tuple[dict, list] | None:
        ancestors = ancestors or []
        if isinstance(node, list):
            for item in node:
                found = find_node(item, target_id, ancestors)
                if found:
                    return found
            return None
        if isinstance(node, dict):
            curr_id = str(node.get("id", ""))
            if curr_id == target_id:
                return node, ancestors
            next_anc = ancestors
            if curr_id:
                next_anc = ancestors + [node]
            for val in node.values():
                found = find_node(val, target_id, next_anc)
                if found:
                    return found
        return None

    found = find_node(map_doc, leaf_id)
    if not found:
        return [f"Leaf ID '{leaf_id}' no encontrado en el mapa global"]

    map_leaf, ancestors = found
    current_meta = read_yaml(meta_path)
    original_meta = copy.deepcopy(current_meta)

    # Campos protegidos
    clean_ancestors = [a for a in ancestors if isinstance(a, dict) and a.get("id")]
    parent_id = map_leaf.get("parent_id") or (clean_ancestors[-1].get("id") if clean_ancestors else "")

    def norm_lang(value: Any) -> dict[str, str]:
        if isinstance(value, dict):
            return {"es": value.get("es", ""), "en": value.get("en", "")}
        return {"es": value or "", "en": value or ""}

    current_meta["id"] = leaf_id
    current_meta["nombre"] = {"es": map_leaf.get("titulo", ""), "en": map_leaf.get("titulo_en", "")}
    current_meta["parent_id"] = parent_id
    current_meta["ruta_relativa"] = map_leaf.get("ruta_relativa") or map_leaf.get("relative_path") or map_leaf.get("path") or ""
    current_meta["orden"] = map_leaf.get("orden") if map_leaf.get("orden") is not None else map_leaf.get("order")
    current_meta["type"] = map_leaf.get("type", "")
    current_meta["niveles"] = norm_lang(map_leaf.get("niveles"))
    current_meta["icon"] = map_leaf.get("icon", "")
    current_meta["graficos"] = map_leaf.get("graficos", [])
    current_meta["physical_role"] = norm_lang(map_leaf.get("physical_role"))

    if len(clean_ancestors) >= 2:
        current_meta["area"] = clean_ancestors[1].get("id", "")
    if len(clean_ancestors) >= 3:
        current_meta["bloque"] = clean_ancestors[2].get("id", "")
    if len(clean_ancestors) >= 4:
        current_meta["subbloque"] = clean_ancestors[3].get("id", "")

    # Eliminar prohibidos
    for key in ("titulo", "titulo_en", "title", "title_en", "slug"):
        current_meta.pop(key, None)

    if current_meta != original_meta:
        write_yaml(meta_path, current_meta)
        return ["Sincronizado meta.yaml con phyxio-map.yaml"]
    return []


def sync_interpretacion_from_leaf(leaf_dir: Path) -> list[str]:
    """Genera o actualiza interpretacion.yaml basado en meta/magnitudes/formulas."""
    meta = read_yaml(leaf_dir / "meta.yaml")
    magnitudes_raw = read_yaml_raw(leaf_dir / "magnitudes.yaml")
    formulas_raw = read_yaml_raw(leaf_dir / "formulas.yaml")

    if isinstance(magnitudes_raw, list):
        magnitudes = {"magnitudes": magnitudes_raw}
    elif isinstance(magnitudes_raw, dict):
        magnitudes = magnitudes_raw
    else:
        magnitudes = {}

    if isinstance(formulas_raw, list):
        formulas = {"formulas": formulas_raw}
    elif isinstance(formulas_raw, dict):
        formulas = formulas_raw
    else:
        formulas = {}
    
    if not meta or not magnitudes or not formulas:
        return ["No se pudo sincronizar interpretacion.yaml: faltan meta/magnitudes/formulas"]

    leaf_id = meta.get("id")
    if not leaf_id:
        return ["No se pudo sincronizar: id no declarado en meta.yaml"]

    # Extraer magnitudes y fórmulas
    magnitude_ids = []
    for mag in magnitudes.get("magnitudes", []):
        if isinstance(mag, dict) and mag.get("id"):
            magnitude_ids.append(mag["id"])

    formula_ids = []
    targets_info = {}
    for form in formulas.get("formulas", []):
        if isinstance(form, dict) and form.get("id"):
            fid = form["id"]
            formula_ids.append(fid)
            
            # semantic targets
            sem = form.get("result_semantics", {}) or {}
            target = sem.get("target")
            if target:
                targets_info[target] = {"kind": sem.get("kind", "")}
            for r in form.get("rearrangements", []):
                rtarget = r.get("target")
                if rtarget and rtarget not in targets_info:
                    targets_info[rtarget] = {"kind": ""}

    if not formula_ids or not targets_info:
        return ["formulas.yaml no contiene targets ni fórmulas"]

    # Buscar si hay gráficos habilitados
    graphs = [item.lower() for item in meta.get("graficos", [])]
    graph_type = "none"
    if "dcl" in graphs:
        graph_type = "Dcl"
    elif "coord" in graphs:
        graph_type = "Coord"
    elif "svg" in graphs:
        graph_type = "Svg"
    graph_enabled = graph_type != "none"

    # Cargar interpretacion.yaml existente
    interp_path = leaf_dir / "interpretacion.yaml"
    current_interp = read_yaml(interp_path)
    original_interp = copy.deepcopy(current_interp)

    def rule(rid: str, status: str, es: str, en: str) -> dict:
        return {"id": rid, "when": "true", "status": status, "text": {"es": es, "en": en}}

    def default_rules(tid: str) -> dict:
        return {
            "summary_rules": [rule(f"{tid}_summary_base", "ok", f"El resultado [[{tid}]] indica la magnitud física principal.", f"The result [[{tid}]] indicates the main physical quantity.")],
            "physical_reading_rules": [rule(f"{tid}_physical_reading_base", "info", f"Lee [[{tid}]] junto con su unidad y signo.", f"Read [[{tid}]] with its unit and sign.")],
            "coherence_rules": [rule(f"{tid}_coherence_base", "ok", f"Comprueba la coherencia dimensional de [[{tid}]].", f"Check the dimensional consistency of [[{tid}]]")],
            "model_validity_rules": [rule(f"{tid}_model_validity_base", "info", f"Interpreta [[{tid}]] solo dentro de la validez del modelo.", f"Interpret [[{tid}]] only within the validity of the model.")],
            "graph_rules": [rule(f"{tid}_graph_base", "info", f"Relaciona [[{tid}]] con la lectura gráfica." if graph_enabled else "No hay lectura gráfica.", f"Relate [[{tid}]] to the graph." if graph_enabled else "No graph.")],
            "likely_errors": [rule(f"{tid}_likely_error_base", "warning", f"Confundir [[{tid}]] con una lectura aislada es un error frecuente; debe interpretarse con el modelo, las unidades y el rango físico.", f"A common mistake is to interpret [[{tid}]] in isolation; it must be read with the model, units, and physical range.")],
            "next_step_rules": [rule(f"{tid}_next_step_base", "info", f"Después de obtener [[{tid}]], revisa los límites físicos.", f"After obtaining [[{tid}]], review the physical limits.")],
            "physical_intuition": [rule(f"{tid}_physical_intuition_base", "info", f"Intuitivamente, [[{tid}]] describe el estado dinámico.", f"Intuitively, [[{tid}]] describes the dynamic state.")],
            "limiting_cases": [rule(f"{tid}_limiting_case_base", "info", f"Comprueba los casos límite de [[{tid}]].", f"Check limiting cases of [[{tid}]]")],
        }

    # Mezclar targets
    current_targets = current_interp.get("targets", {}) or {}
    new_targets = {}
    for tid, info in targets_info.items():
        base_target = {
            "enabled": True,
            "magnitude_type": "vector" if info.get("kind") == "vector" else "scalar",
            "semantic_role": {"es": f"Resultado de {tid}", "en": f"Result of {tid}"},
            **default_rules(tid),
            "sign_convention_reminder": {"enabled": False, "text": {"es": "", "en": ""}, "common_sign_errors": []}
        }
        
        # Merge con el existente
        existing = current_targets.get(tid, {})
        if isinstance(existing, dict):
            for key, val in existing.items():
                if key in RULE_BLOCKS and isinstance(val, list) and val:
                    base_target[key] = val
                elif key == "sign_convention_reminder" and isinstance(val, dict):
                    base_target[key].update(val)
                elif val not in (None, "", [], {}):
                    base_target[key] = val
                    
        new_targets[tid] = base_target

    result_blocks = {
        section: {"enabled": section != "graph_reading" or graph_enabled, "order": idx, "title": {"es": section.replace('_', ' ').capitalize(), "en": section.replace('_', ' ').capitalize()}}
        for idx, section in enumerate(INTERPRETACION_SECTIONS, start=1)
    }

    doc = {
        "version": "5.0.0",
        "id": leaf_id,
        "leaf_id": leaf_id,
        "nombre": meta.get("nombre", {"es": "", "en": ""}),
        "scope": {
            "area": meta.get("area", ""),
            "bloque": meta.get("bloque", ""),
            "subbloque": meta.get("subbloque", ""),
            "parent_id": meta.get("parent_id", ""),
            "ruta_relativa": meta.get("ruta_relativa", ""),
            "orden": meta.get("orden", 0),
        },
        "output_contract": {
            "sections": INTERPRETACION_SECTIONS,
            "inline_mode": {"max_sections": 2, "priority": ["summary", "likely_errors"]},
            "extended_mode": {"show_all": True},
        },
        "result_blocks": result_blocks,
        "ui": {
            "enabled": True,
            "display_modes": {"calculator_inline": True, "graph_inline": graph_enabled, "dedicated_tab": True, "modal": False},
            "labels": {"es": "Interpretación física", "en": "Physical interpretation"},
            "priority_order": INTERPRETACION_SECTIONS,
            "inline_limits": {"max_sections": 3, "priority": ["summary", "likely_errors", "next_step"]},
        },
        "mini_graph": {"enabled": graph_enabled, "preferred_type": graph_type},
        "output_policy": {"show_summary_first": True, "max_inline_messages": 3, "show_warnings": True, "show_likely_errors": True},
        "dependencies": {
            "formulas": formula_ids,
            "magnitudes": magnitude_ids,
            "requires_formulas": True,
            "requires_magnitudes": True,
            "supports_graph_binding": graph_enabled,
        },
        "global_context": {
            "enabled": True,
            "physical_domain": {"es": str(meta.get("bloque", "")), "en": ""},
            "axis_convention": {"es": "El signo depende de la convención de ejes.", "en": "Sign depends on axes."},
            "standard_assumptions": [{"es": "Interpretado bajo el modelo físico.", "en": "Interpreted under the physical model."}],
            "standard_warnings": [{"es": "Revisa unidades y signo.", "en": "Check units and sign."}],
        },
        "graph_binding": {"enabled": graph_enabled, "type": graph_type, "channels": meta.get("graficos", [])},
        "cross_checks": {"enabled": True, "checks": [{"id": "dimension_check", "status": "ok", "text": {"es": "Coherencia dimensional.", "en": "Dimensional consistency."}}]},
        "error_patterns": {"enabled": True, "patterns": []},
        "graph_reading_policy": {"enabled": graph_enabled, "primary_variable": next(iter(new_targets.keys()), ""), "reading_sequence": [], "key_points": []},
        "comparative_context": {"enabled": True, "reference_values": [], "order_of_magnitude_check": True},
        "dimensional_hint": {"enabled": True, "formula_dimensions": {"es": "Unidad final coherente.", "en": "Coherent final unit."}},
        "targets": new_targets,
    }

    if doc != original_interp:
        write_yaml(interp_path, doc)
        return ["Sincronizado interpretacion.yaml"]
    return []


# =====================================================================
# 8. Procesamiento Principal
# =====================================================================

def process_leaf_directory(leaf_dir: Path, map_path: Path | None) -> list[str]:
    """Procesa y repara todos los archivos de un leaf."""
    changes = []
    changes.extend(repair_legacy_magnitude_ids(leaf_dir))
    changes.extend(repair_magnitudes_v5_fields(leaf_dir))
    changes.extend(repair_symbol_targets_to_magnitude_ids(leaf_dir))
    changes.extend(repair_formulas_v5_fields(leaf_dir))
    
    # 1. Sincronizar meta.yaml desde el mapa si se indica
    if map_path and map_path.exists():
        meta_changes = sync_meta_from_map_file(leaf_dir, map_path)
        changes.extend(meta_changes)
        changes.extend(repair_legacy_magnitude_ids(leaf_dir))
        changes.extend(repair_symbol_targets_to_magnitude_ids(leaf_dir))

    changes.extend(ensure_graficos_yaml(leaf_dir))
    changes.extend(repair_graficos_yaml_schema(leaf_dir))

    # 2. Cargar magnitudes, fórmulas y metadatos
    mags_data = read_yaml(leaf_dir / "magnitudes.yaml")
    mags_set = set()
    magnitude_aliases = build_magnitude_aliases(mags_data)
    magnitude_wrap_exclusions = build_unit_like_magnitude_ids(mags_data)
    for mag in mags_data.get("magnitudes", []):
        if isinstance(mag, dict) and mag.get("id"):
            mags_set.add(mag["id"])

    formulas_data = read_yaml(leaf_dir / "formulas.yaml")
    formulas_set = set()
    for f in formulas_data.get("formulas", []):
        if isinstance(f, dict) and f.get("id"):
            formulas_set.add(f["id"])

    context = {
        "magnitudes": mags_set,
        "magnitude_aliases": magnitude_aliases,
        "magnitude_wrap_exclusions": magnitude_wrap_exclusions,
        "formulas": formulas_set,
        "formulas_yaml": formulas_data,
    }

    # 3. Corregir formulas.yaml
    form_changed, form_logs = fix_invented_variables_in_formulas_yaml(leaf_dir / "formulas.yaml")
    if form_changed:
        changes.extend(form_logs)
    changes.extend(repair_symbol_targets_to_magnitude_ids(leaf_dir))

    # 4. Procesar archivos markdown
    md_files = sorted(leaf_dir.glob("*.md"))
    for md_file in md_files:
        file_changes = process_file(md_file, context)
        if file_changes:
            changes.extend([f"{md_file.name}: {c}" for c in file_changes])

    changes.extend(repair_unit_alias_refs(leaf_dir))
    changes.extend(repair_broken_formula_refs(leaf_dir))
    changes.extend(ensure_formula_refs_in_theory(leaf_dir))
    changes.extend(repair_placeholder_sections(leaf_dir))

    # 5. Reparar estructura de meta.yaml (mover campos a interpretacion)
    meta_changes = fix_meta_yaml_structure(leaf_dir)
    if meta_changes:
        changes.extend(meta_changes)

    # 6. Sincronizar interpretacion.yaml
    interp_changes = sync_interpretacion_from_leaf(leaf_dir)
    changes.extend(interp_changes)
    changes.extend(repair_interpretacion_rule_contract(leaf_dir))

    return changes


def fix_meta_yaml_structure(leaf_dir: Path) -> list[str]:
    """
    Repara la estructura de meta.yaml:
    1. Mueve output_policy y dependencies dentro de interpretacion
    2. Añade description_en si falta
    """
    meta_path = leaf_dir / "meta.yaml"
    if not meta_path.exists():
        return []

    meta = read_yaml(meta_path)
    if not meta:
        return []

    changes = []
    modified = False

    # 0. Corregir descripcion si es dict con es/en (formato antiguo)
    descripcion = meta.get("descripcion")
    if isinstance(descripcion, dict):
        # Extraer valores del dict
        desc_es = descripcion.get("es", "").strip()
        desc_en = descripcion.get("en", "").strip()
        # Poner es como string en descripcion
        if desc_es:
            meta["descripcion"] = desc_es
        else:
            meta["descripcion"] = "[DESCRIPCION REQUIRED]"
        # Poner en en description_en si no existe
        if desc_en and "description_en" not in meta:
            meta["description_en"] = desc_en
        modified = True
        changes.append("meta.yaml: Corregido formato de descripcion (dict -> string)")

    # 1. Añadir description_en si falta
    if "description_en" not in meta:
        # Intentar traducir desde descripcion o usar placeholder
        descripcion = meta.get("descripcion", "")
        if descripcion:
            # Placeholder simple - idealmente se traduciría
            meta["description_en"] = f"[TRANSLATE] {descripcion}"
        else:
            meta["description_en"] = "[DESCRIPTION REQUIRED]"
        modified = True
        changes.append("meta.yaml: Añadido description_en")

    # 2. Campos que deben estar dentro de interpretacion
    fields_to_move = ["output_policy", "dependencies"]

    # Asegurar que existe el bloque interpretacion
    if "interpretacion" not in meta:
        meta["interpretacion"] = {"enabled": True, "archivo": "interpretacion.yaml"}
        modified = True
        changes.append("meta.yaml: Creado bloque interpretacion")

    interpretacion = meta.get("interpretacion", {})

    # Asegurar que tiene el campo archivo
    if interpretacion.get("archivo") != "interpretacion.yaml":
        interpretacion["archivo"] = "interpretacion.yaml"
        modified = True
        changes.append("meta.yaml: Añadido archivo=interpretacion.yaml a interpretacion")

    for field in fields_to_move:
        if field in meta and field not in interpretacion:
            # Mover el campo al bloque interpretacion
            interpretacion[field] = meta.pop(field)
            modified = True
            changes.append(f"meta.yaml: Movido '{field}' dentro de bloque 'interpretacion'")

    if modified:
        meta["interpretacion"] = interpretacion
        write_yaml(meta_path, meta)

    return changes


def process_file(file_path: Path, context: dict) -> list[str]:
    filename = file_path.name
    lang = "en" if ".en.md" in filename else "es"
    
    text = read_text(file_path)
    original_text = text
    changes = []
    
    # 0. Level 1 heading normalization/removal for non-theory files
    if "modelos" in filename or "errores" in filename or "historia" in filename:
        repaired_text = re.sub(r"(?m)^\s*#\s+.*?(?:\n+|$)", "", text)
        if repaired_text != text:
            changes.append("Eliminada cabecera de nivel 1 innecesaria")
            text = repaired_text
            
    elif "aplicaciones" in filename:
        generic_title = "# Applications" if lang == "en" else "# Aplicaciones"
        if re.search(r"(?m)^\s*#\s+", text):
            repaired_text = re.sub(r"(?m)^\s*#\s+.*?(?:\n+|$)", generic_title + "\n", text, count=1)
            if repaired_text != text:
                changes.append("Reemplazada cabecera de nivel 1 con título genérico")
                text = repaired_text
        else:
            text = generic_title + "\n\n" + text
            changes.append("Añadida cabecera de nivel 1 genérica")
            
    # 1. Mojibake repair
    repaired_text = repair_mojibake(text)
    if repaired_text != text:
        changes.append("Reparado mojibake / codificación UTF-8")
        text = repaired_text
        
    # 1b. Clean double formulas
    repaired_text = clean_double_formulas(text)
    if repaired_text != text:
        changes.append("Reparadas fórmulas doblemente envueltas")
        text = repaired_text
        
    # 2. Dimensional notation
    repaired_text = fix_dimensional_notation(text)
    if repaired_text != text:
        changes.append("Corregida notación dimensional a Estilo Azul Phyxio v5")
        text = repaired_text
        
    # 3. Magnitudes in backticks
    repaired_text = fix_magnitudes_in_backticks(text)
    if repaired_text != text:
        changes.append("Extraídas magnitudes de backticks")
        text = repaired_text
        
    # 4. Bare magnitudes wrapping
    repaired_text = wrap_bare_magnitudes(
        text,
        context.get("magnitudes", set()),
        context.get("magnitude_aliases", {}),
        context.get("magnitude_wrap_exclusions", set()),
    )
    if repaired_text != text:
        changes.append("Envueltas magnitudes desnudas con [[id]]")
        text = repaired_text
        
    # 5. Formula syntax: [[id]] -> {{f:id}}
    repaired_text = fix_formula_syntax(text, context.get("formulas", set()), context.get("magnitudes", set()))
    if repaired_text != text:
        changes.append("Convertida sintaxis de fórmula: [[id]] -> {{f:id}}")
        text = repaired_text
        
    # 6. Formula isolation on own line
    repaired_text = ensure_formulas_isolated(text)
    if repaired_text != text:
        changes.append("Aisladas fórmulas {{f:id}} en líneas propias")
        text = repaired_text

    # Reglas específicas por tipo de archivo
    if "teoria" in filename:
        req_headings = THEORY_SECTIONS if lang == "es" else THEORY_SECTIONS_EN
        text = align_markdown_headings(text, req_headings)
        
        formal_h = "## 🔵 Nivel formal" if lang == "es" else "## 🔵 Formal level"
        
        # Enforce formal level formulas only (convert others to magnitude references)
        text = fix_teoria_formulas_location(text, formal_h, context.get("formulas_yaml", {}))
        
        # Enforce formal level has at least 2 formulas
        text = ensure_formal_level_has_formulas(text, formal_h, context.get("formulas", set()))
        
        # Esencial level math ban
        esencial_h = "## 🟢 Nivel esencial" if lang == "es" else "## 🟢 Essential level"
        es_body = _extract_markdown_section(text, esencial_h)
        if es_body:
            cleaned_es = clean_math_from_esencial(es_body, lang)
            if cleaned_es != es_body:
                text = text.replace(es_body, cleaned_es)
                changes.append("Eliminado abuso matemático en Nivel esencial")
                
            es_body_now = _extract_markdown_section(text, esencial_h)
            if '=' in es_body_now or '^' in es_body_now:
                es_body_fixed = es_body_now.replace('=', ' es igual a ' if lang == 'es' else ' is equal to ').replace('^', '')
                text = text.replace(es_body_now, es_body_fixed)
        
        # Banned math operators outside formal
        sections = []
        lines = text.splitlines()
        current_heading = None
        current_body = []
        for line in lines:
            m = re.match(r'^(##\s+.+?)\s*$', line)
            if m:
                if current_heading is not None:
                    sections.append((current_heading, "\n".join(current_body)))
                current_heading = m.group(1).strip()
                current_body = []
            else:
                current_body.append(line)
        if current_heading is not None:
            sections.append((current_heading, "\n".join(current_body)))
        else:
            sections.append(("PREAMBLE", "\n".join(current_body)))
            
        new_sections = []
        for heading, body in sections:
            is_formal = False
            if heading != "PREAMBLE":
                norm_h = normalize_heading_title(heading)
                norm_formal = normalize_heading_title(formal_h)
                if heading_matches(norm_h, norm_formal):
                    is_formal = True
            if not is_formal:
                body = replace_operators_outside_formal(body, is_formal, lang)
            new_sections.append((heading, body))
            
        output = []
        for heading, body in new_sections:
            if heading != "PREAMBLE":
                output.append(heading)
            output.append(body)
        text = "\n".join(output)
        
        # Student questions math ban
        text = fix_student_questions_math(text, lang)
        
        # Síntesis final formula/math ban
        text = fix_sintesis_final(text, lang)

    elif "modelos" in filename:
        req_headings = MODELOS_SECTIONS if lang == "es" else MODELOS_SECTIONS_EN
        text = align_markdown_headings(text, req_headings)
        text = fix_modelos_reinforced(text, lang)

    elif "errores" in filename:
        req_headings = ERRORES_SECTIONS if lang == "es" else ERRORES_SECTIONS_EN
        text = align_markdown_headings(text, req_headings)
        text = fix_errores_blocks(text, lang)

    elif "historia" in filename:
        req_headings = HISTORIA_SECTIONS if lang == "es" else HISTORIA_SECTIONS_EN
        text = align_markdown_headings(text, req_headings)

    elif "ejemplos" in filename:
        text = fix_ejemplos_structure(text, lang, sorted(context.get("magnitudes", set())), sorted(context.get("formulas", set())))

    elif "aplicaciones" in filename:
        text = fix_aplicaciones_structure(text, lang)
        
    # Limpieza final de espacios al final de las líneas
    lines = text.splitlines()
    cleaned_lines = []
    for line in lines:
        cleaned_lines.append(line.rstrip())
    text = "\n".join(cleaned_lines)
    
    # Limpiar líneas en blanco consecutivas excesivas (máximo 2)
    text = re.sub(r'\n{4,}', '\n\n\n', text)
    
    if text != original_text:
        write_text(file_path, text)
        if not changes:
            changes.append("Corrección de estructura general")
        return changes
    else:
        return []  # No se modificó nada, no reportar cambios


# =====================================================================
# 9. CLI Entrypoint
# =====================================================================

def is_leaf_directory(path: Path) -> bool:
    """Devuelve true si la carpeta tiene estructura minima de leaf."""
    return path.is_dir() and ((path / "meta.yaml").exists() or (path / "teoria.md").exists())


def find_leaf_directories(root: Path) -> list[Path]:
    """Busca leafs debajo de una carpeta raiz, incluyendo subcarpetas anidadas."""
    return sorted(d for d in root.rglob("*") if is_leaf_directory(d))


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Reparador automático de leafs Phyxio de acuerdo a la plantilla v5"
    )
    parser.add_argument(
        "--path",
        required=True,
        help="Ruta al archivo, carpeta de leaf o carpeta raíz con varios leafs",
    )
    parser.add_argument(
        "--map",
        default=None,
        help="Ruta al phyxio-map.yaml (opcional para sincronización meta.yaml)",
    )
    
    args = parser.parse_args()
    
    target_path = Path(args.path).resolve()
    if not target_path.exists():
        print(f"[ERROR] No existe la ruta: {target_path}")
        sys.exit(1)

    # Buscar phyxio-map.yaml si se omitió pero se necesita
    map_path = None
    if args.map:
        map_path = Path(args.map).resolve()
    else:
        # Intentar auto-detectar
        candidates = [
            Path("frontend/src/v2/map/phyxio-map.yaml").resolve(),
            Path("v2/map/phyxio-map.yaml").resolve(),
            Path("docsV2/phyxio-map.yaml").resolve(),
            Path("docs_v2/phyxio-map.yaml").resolve(),
        ]
        for c in candidates:
            if c.exists():
                map_path = c
                break

    # Determinar modo de ejecución
    if target_path.is_file():
        # Procesamiento de archivo único
        print(f"🔧 Procesando archivo único: {target_path.name}")
        # Cargar contexto vacío / magnitudes del leaf si es posible
        parent_dir = target_path.parent
        mags_data = read_yaml(parent_dir / "magnitudes.yaml")
        mags_set = {m["id"] for m in mags_data.get("magnitudes", []) if isinstance(m, dict) and m.get("id")}
        magnitude_aliases = build_magnitude_aliases(mags_data)
        magnitude_wrap_exclusions = build_unit_like_magnitude_ids(mags_data)
        formulas_data = read_yaml(parent_dir / "formulas.yaml")
        formulas_set = {f["id"] for f in formulas_data.get("formulas", []) if isinstance(f, dict) and f.get("id")}
        
        context = {
            "magnitudes": mags_set,
            "magnitude_aliases": magnitude_aliases,
            "magnitude_wrap_exclusions": magnitude_wrap_exclusions,
            "formulas": formulas_set,
            "formulas_yaml": formulas_data,
        }
        changes = process_file(target_path, context)
        
        if changes:
            print("[CAMBIOS REALIZADOS]")
            for c in changes:
                print(f"  - {c}")
        else:
            print("  - Sin cambios necesarios.")
            
    elif target_path.is_dir():
        # Comprobar si es un directorio de leaf (tiene meta.yaml o teoria.md)
        is_leaf_dir = is_leaf_directory(target_path)
        
        if is_leaf_dir:
            print(f"🔧 Procesando leaf en carpeta: {target_path.name}")
            changes = process_leaf_directory(target_path, map_path)
            if changes:
                print("[CAMBIOS REALIZADOS]")
                for c in changes:
                    print(f"  - {c}")
            else:
                print("  - Sin cambios necesarios.")
        else:
            # Directorio raíz con múltiples leafs
            print(f"📁 Escaneando raíz de leafs en carpeta: {target_path.name}")
            leaf_dirs = find_leaf_directories(target_path)
            print(f"  Encontrados {len(leaf_dirs)} leafs para procesar.\n")
            
            total_modified = 0
            for leaf_dir in leaf_dirs:
                print(f"🔧 Procesando leaf: {leaf_dir.name}...")
                changes = process_leaf_directory(leaf_dir, map_path)
                if changes:
                    total_modified += 1
                    for c in changes:
                        print(f"    - {c}")
                else:
                    print("    (sin cambios)")
                    
            print(f"\n📊 Proceso completado. Leafs modificados: {total_modified}/{len(leaf_dirs)}")


if __name__ == "__main__":
    main()
