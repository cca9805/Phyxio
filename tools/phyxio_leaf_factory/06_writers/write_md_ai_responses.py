"""
Writer normalizador para archivos Markdown (.md) del leaf.

Similar a write_yaml_ai_responses.py, pero para contenido markdown.
- Normaliza cabeceras (emoji, nombres exactos)
- Detecta y corrige patrones prohibidos
- Asegura estructuras anidadas (5 bloques de errores, etc.)
- Corrige referencias mal formadas [[id]] y {{f:id}}
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path
from typing import Any

CURRENT_FILE = Path(__file__).resolve()
FACTORY_ROOT = CURRENT_FILE.parents[1]

if str(FACTORY_ROOT) not in sys.path:
    sys.path.insert(0, str(FACTORY_ROOT))

from config import PRUEBAS_ROOT

DEFAULT_RESPONSES_ROOT = FACTORY_ROOT / "05_ai_responses"

# Mapeo de archivos de respuesta a targets
RESPONSE_TO_TARGET = {
    "06_teoria.response.md": "teoria.md",
    "07_teoria_en.response.md": "teoria.en.md",
    "08_modelos.response.md": "modelos.md",
    "09_modelos_en.response.md": "modelos.en.md",
    "10_errores.response.md": "errores.md",
    "11_errores_en.response.md": "errores.en.md",
    "12_ejemplos.response.md": "ejemplos.md",
    "13_ejemplos_en.response.md": "ejemplos.en.md",
    "14_aplicaciones.response.md": "aplicaciones.md",
    "15_aplicaciones_en.response.md": "aplicaciones.en.md",
    "16_historia.response.md": "historia.md",
    "17_historia_en.response.md": "historia.en.md",
}

# Correcciones de cabeceras comunes
HEADER_CORRECTIONS = {
    # Teoria.md español
    "Nivel esencial": "🟢 Nivel esencial",
    "Nivel formal": "🔵 Nivel formal",
    "Nivel estructural": "🔴 Nivel estructural",
    # Teoria.en.md
    "Essential level": "🟢 Essential level",
    "Formal level": "🔵 Formal level",
    "Structural level": "🔴 Structural level",
    "Conceptual context": "Conceptual context",  # Ya es correcto
    "Deep physical interpretation": "Deep physical interpretation",  # Ya es correcto
    "Order of magnitude": "Order of magnitude",  # Ya es correcto
    "Personalized resolution method": "Personalized resolution method",  # Ya es correcto
    "Special cases and extended example": "Special cases and extended example",
    "Real student questions": "Real student questions",
    "Cross-cutting connections and study paths": "Cross-cutting connections and study paths",
    "Final synthesis": "Final synthesis",
}

# Patrones prohibidos y sus correcciones
FORBIDDEN_PATTERNS = [
    # (patrón regex, descripción, corrección sugerida o None)
    (r'\[\[([^\]]+)\]\]\s*=\s*', "Magnitud etiquetada seguida de =", None),
    (r'`\$[^$]+\$`', "LaTeX inline con backticks", None),
    (r'\$[^=]+=[^$]+\$', "LaTeX inline con operador =", None),
    (r'\\\([^=\\]+[=<>][^\\]+\\\)', "LaTeX \(\) con operadores", None),
]

# Subsecciones requeridas para errores
ERROR_SUBSECTIONS = [
    "**Por qué parece correcto**",
    "**Por qué es incorrecto**",
    "**Señal de detección**",
    "**Corrección conceptual**",
    "**Mini-ejemplo de contraste**",
]


def normalize_heading(heading: str, filename: str) -> str:
    """Normaliza una cabecera según las reglas del contrato."""
    # Primero aplicar correcciones directas
    for incorrect, correct in HEADER_CORRECTIONS.items():
        if heading.strip().lower() == incorrect.lower():
            return correct

    # Asegurar emojis en niveles para español
    if filename == "teoria.md":
        if heading.strip() == "Nivel esencial":
            return "🟢 Nivel esencial"
        if heading.strip() == "Nivel formal":
            return "🔵 Nivel formal"
        if heading.strip() == "Nivel estructural":
            return "🔴 Nivel estructural"

    # Asegurar emojis en niveles para inglés
    if filename == "teoria.en.md":
        if heading.strip() == "Essential level":
            return "🟢 Essential level"
        if heading.strip() == "Formal level":
            return "🔵 Formal level"
        if heading.strip() == "Structural level":
            return "🔴 Structural level"

    return heading


def fix_formula_refs(content: str, formula_ids: set[str] | None = None) -> str:
    """Corrige referencias a fórmulas mal formadas."""
    # {{f:id}} en línea propia (solo con \n o fin de string después) es correcto
    # {{f:id}} inline (seguido de otro texto en la misma línea) es incorrecto - debería ser [[id]]

    def replace_inline_formula(match: re.Match) -> str:
        fid = match.group(1)
        end_pos = match.end()

        # Verificar qué hay después de {{f:id}}
        remaining = content[end_pos:]

        # Si después hay solo espacios + \n o fin de string, es línea propia (correcto)
        # Si después hay texto antes de \n, es inline (incorrecto, convertir a [[id]])
        next_newline = remaining.find('\n')
        if next_newline == -1:
            text_after = remaining
        else:
            text_after = remaining[:next_newline]

        # Si solo hay espacios/tabulaciones, es línea propia -> mantener {{f:id}}
        if text_after.strip() == '':
            return match.group(0)  # Mantener {{f:id}}
        else:
            # Es inline -> convertir a [[id]]
            return f'[[{fid}]]'

    pattern = r'\{\{f:([^}]+)\}\}'
    content = re.sub(pattern, replace_inline_formula, content)

    return content


def fix_misplaced_formula_refs(content: str, formula_ids: set[str]) -> str:
    """
    Corrige cuando la IA confunde sintaxis y pone [[formula_id]] en lugar de {{f:formula_id}}.

    Regla:
    - Si un ID de fórmula aparece como [[id]] → convertir a {{f:id}}
    - Si un ID de magnitud aparece como {{f:id}} → convertir a [[id]]
    """
    if not formula_ids:
        return content

    # Buscar [[id]] donde id es una fórmula conocida → corregir a {{f:id}}
    # Esto solo aplica en contextos donde {{f:id}} es esperado (Nivel formal, etc.)
    formula_pattern = r'\[\[(' + '|'.join(re.escape(fid) for fid in formula_ids) + r')\]\]'

    def replace_formula_ref(match: re.Match) -> str:
        fid = match.group(1)
        # Solo reemplazar si está en línea propia (antes/después de \n o inicio/fin)
        start_pos = match.start()
        end_pos = match.end()

        # Verificar si está en línea propia (rodeado de \n o inicio/fin)
        before = content[start_pos - 1] if start_pos > 0 else '\n'
        after = content[end_pos] if end_pos < len(content) else '\n'

        is_own_line = before in '\n' and after in '\n'

        if is_own_line:
            # Es fórmula en línea propia, debe ser {{f:id}}
            return f'{{{{f:{fid}}}}}'
        else:
            # Es inline, debe ser [[id]] (magnitud)
            return match.group(0)

    content = re.sub(formula_pattern, replace_formula_ref, content)

    return content


def load_leaf_formula_ids(leaf_dir: Path) -> tuple[set[str], set[str]]:
    """
    Carga los IDs de fórmulas y magnitudes desde el leaf.
    Retorna: (formula_ids, magnitude_ids)
    """
    formula_ids = set()
    magnitude_ids = set()

    # Intentar importar yaml
    try:
        import yaml
    except ImportError:
        return formula_ids, magnitude_ids

    # Cargar fórmulas
    formulas_path = leaf_dir / "formulas.yaml"
    if formulas_path.exists():
        try:
            content = formulas_path.read_text(encoding="utf-8", errors="replace")
            data = yaml.safe_load(content)
            if isinstance(data, dict) and "formulas" in data:
                for form in data["formulas"]:
                    if isinstance(form, dict) and "id" in form:
                        fid = form["id"]
                        if fid and isinstance(fid, str):
                            formula_ids.add(fid.strip())
        except Exception:
            pass

    # Cargar magnitudes
    mags_path = leaf_dir / "magnitudes.yaml"
    if mags_path.exists():
        try:
            content = mags_path.read_text(encoding="utf-8", errors="replace")
            data = yaml.safe_load(content)
            if isinstance(data, dict) and "magnitudes" in data:
                for mag in data["magnitudes"]:
                    if isinstance(mag, dict) and "id" in mag:
                        mid = mag["id"]
                        if mid and isinstance(mid, str):
                            magnitude_ids.add(mid.strip())
        except Exception:
            pass

    return formula_ids, magnitude_ids


def fix_magnitude_refs(content: str) -> str:
    """Corrige referencias a magnitudes mal formadas."""
    # [[id ]] → [[id]]
    content = re.sub(r'\[\[\s*([^\]]+?)\s*\]\]', r'[[\1]]', content)

    # [id] → [[id]]
    # Solo si parece un ID de magnitud (mayúsculas, números, guiones bajos)
    content = re.sub(r'\[([A-Z][A-Z0-9_]*)\]', r'[[\1]]', content)

    return content


def insert_missing_formulas(content: str, formula_ids: set[str]) -> str:
    """
    Inserta fórmulas del leaf que faltan en teoria.md.
    Busca fórmulas que no aparecen como {{f:id}} y las inserta en Nivel formal
    o al final del archivo.
    """
    if not formula_ids:
        return content

    # Encontrar qué fórmulas ya están presentes como {{f:id}}
    present_formulas = set()
    pattern = r'\{\{f:([^}]+)\}\}'
    for match in re.finditer(pattern, content):
        present_formulas.add(match.group(1))

    # Calcular fórmulas faltantes
    missing = sorted(formula_ids - present_formulas)
    if not missing:
        return content

    # Construir bloque de fórmulas faltantes
    formulas_block = "\n\n" + "\n".join([f"{{{{f:{fid}}}}}" for fid in missing]) + "\n"

    # Intentar insertar en "## 🔵 Nivel formal" o "## 🔵 Formal level"
    nivel_formal_pattern = r'(##\s+🔵\s+(?:Nivel\s+formal|Formal\s+level).*?)(\n##\s+|$)'
    match = re.search(nivel_formal_pattern, content, re.DOTALL | re.IGNORECASE)

    if match:
        # Insertar al final de la sección Nivel formal, antes de la siguiente sección
        end_pos = match.end(1)
        content = content[:end_pos] + formulas_block + content[end_pos:]
    else:
        # Si no hay Nivel formal, añadir al final del archivo
        content = content.rstrip() + formulas_block

    return content


def detect_forbidden_patterns(content: str) -> list[dict]:
    """Detecta patrones prohibidos en el contenido."""
    issues = []

    for pattern, description, _ in FORBIDDEN_PATTERNS:
        matches = re.finditer(pattern, content, re.MULTILINE)
        for match in matches:
            # Encontrar línea
            line_start = content.rfind('\n', 0, match.start()) + 1
            line_end = content.find('\n', match.end())
            if line_end == -1:
                line_end = len(content)
            line_content = content[line_start:line_end].strip()

            issues.append({
                "line": content[:match.start()].count('\n') + 1,
                "pattern": pattern,
                "description": description,
                "content": line_content[:80] + "..." if len(line_content) > 80 else line_content,
            })

    return issues


def normalize_headings(content: str, filename: str) -> str:
    """Normaliza todas las cabeceras del documento."""
    lines = content.splitlines()
    normalized = []

    for line in lines:
        # Detectar cabeceras markdown (##, ###, etc.)
        match = re.match(r'^(#{1,6}\s+)(.+)$', line)
        if match:
            prefix = match.group(1)
            heading = match.group(2).strip()
            new_heading = normalize_heading(heading, filename)
            line = prefix + new_heading

        normalized.append(line)

    return '\n'.join(normalized)


def check_error_structure(content: str) -> list[dict]:
    """Verifica que los errores tengan las 5 subsecciones requeridas."""
    issues = []

    # Encontrar bloques ### Error X:
    error_blocks = list(re.finditer(r'###\s+Error\s+\d+:', content, re.IGNORECASE))

    for i, block in enumerate(error_blocks):
        # Determinar dónde termina este bloque
        if i + 1 < len(error_blocks):
            block_end = error_blocks[i + 1].start()
        else:
            block_end = len(content)

        block_content = content[block.start():block_end]

        # Verificar cada subsección requerida
        for subsection in ERROR_SUBSECTIONS:
            if subsection not in block_content:
                # Calcular número de línea
                line_num = content[:block.start()].count('\n') + 1
                issues.append({
                    "line": line_num,
                    "error": f"Falta subsección: {subsection}",
                    "block": block.group(0),
                })

    return issues


def clean_response_content(content: str) -> str:
    """Limpia el contenido de marcadores de respuesta de IA."""
    lines = content.splitlines()
    cleaned = []

    skip_patterns = [
        "Pega aquí la respuesta",
        "No pegues",
        "---",
        "Phyxio Leaf Factory",
        "PENDING_AI_RESPONSE",
        "# Leaf ID:",
        "# Target response file:",
        "# ------------------------------------------------------------",
    ]

    for line in lines:
        # Saltar líneas de header específicas
        if any(pattern in line for pattern in skip_patterns):
            continue
        # Saltar líneas de comentario que solo tienen #
        stripped = line.strip()
        if stripped == "#" or stripped.startswith("# Phyxio"):
            continue
        cleaned.append(line)

    # Eliminar líneas vacías iniciales
    while cleaned and not cleaned[0].strip():
        cleaned.pop(0)

    return '\n'.join(cleaned)


def normalize_markdown_content(
    content: str,
    filename: str,
    formula_ids: set[str] | None = None,
    magnitude_ids: set[str] | None = None,
) -> tuple[str, list[dict]]:
    """
    Normaliza el contenido markdown completo.
    Retorna: (contenido_normalizado, lista_de_issues)
    """
    issues = []

    # 1. Limpiar contenido de marcadores
    content = clean_response_content(content)

    # 2. Normalizar cabeceras
    content = normalize_headings(content, filename)

    # 3. Corregir referencias a fórmulas mal colocadas
    # Cuando la IA pone [[formula_id]] en lugar de {{f:formula_id}}
    if formula_ids:
        content = fix_misplaced_formula_refs(content, formula_ids)

    # 4. Corregir referencias a fórmulas ({{f:id}} inline -> [[id]])
    content = fix_formula_refs(content, formula_ids)

    # 5. Corregir referencias a magnitudes
    content = fix_magnitude_refs(content)

    # 6. Insertar fórmulas faltantes en teoria.md y teoria.en.md
    # Si hay fórmulas del leaf que no aparecen como {{f:id}}, insertarlas
    if formula_ids and filename in ("teoria.md", "teoria.en.md"):
        content = insert_missing_formulas(content, formula_ids)

    # 7. Detectar patrones prohibidos (reportar, no corregir automáticamente)
    forbidden = detect_forbidden_patterns(content)
    if forbidden:
        issues.extend(forbidden)

    # 7. Verificar estructura de errores
    if "errores" in filename:
        error_issues = check_error_structure(content)
        if error_issues:
            issues.extend(error_issues)

    return content, issues


def write_md_response(
    leaf_id: str,
    response_file: str,
    target_file: str,
    responses_root: Path = DEFAULT_RESPONSES_ROOT,
    pruebas_root: Path = PRUEBAS_ROOT,
    formula_ids: set[str] | None = None,
    magnitude_ids: set[str] | None = None,
) -> dict[str, Any]:
    """Escribe una respuesta de IA al archivo markdown final del leaf."""
    leaf_id = leaf_id.strip().lower().replace(" ", "-").replace("_", "-")

    leaf_dir = pruebas_root / leaf_id
    if not leaf_dir.exists():
        return {"success": False, "error": f"Leaf no existe: {leaf_dir}"}

    # Cargar IDs si no se proporcionaron
    if formula_ids is None or magnitude_ids is None:
        loaded_formula_ids, loaded_mag_ids = load_leaf_formula_ids(leaf_dir)
        formula_ids = formula_ids if formula_ids is not None else loaded_formula_ids
        magnitude_ids = magnitude_ids if magnitude_ids is not None else loaded_mag_ids

    response_path = responses_root / leaf_id / response_file
    if not response_path.exists():
        return {"success": False, "error": f"Respuesta no existe: {response_path}"}

    target_path = leaf_dir / target_file

    # Leer contenido
    content = response_path.read_text(encoding="utf-8", errors="replace")

    # Normalizar con conocimiento de IDs
    normalized_content, issues = normalize_markdown_content(
        content, target_file, formula_ids, magnitude_ids
    )

    # Escribir
    target_path.write_text(normalized_content, encoding="utf-8")

    return {
        "success": True,
        "response_file": str(response_path),
        "target_file": str(target_path),
        "issues": issues,
        "issues_count": len(issues),
    }


def write_all_md_responses(
    leaf_id: str,
    responses_root: Path = DEFAULT_RESPONSES_ROOT,
    pruebas_root: Path = PRUEBAS_ROOT,
) -> list[dict[str, Any]]:
    """Escribe todas las respuestas markdown disponibles para un leaf."""
    leaf_id = leaf_id.strip().lower().replace(" ", "-").replace("_", "-")
    leaf_dir = pruebas_root / leaf_id

    # Cargar IDs una sola vez para todas las respuestas
    formula_ids, magnitude_ids = load_leaf_formula_ids(leaf_dir)

    results = []

    for response_file, target_file in RESPONSE_TO_TARGET.items():
        result = write_md_response(
            leaf_id=leaf_id,
            response_file=response_file,
            target_file=target_file,
            responses_root=responses_root,
            pruebas_root=pruebas_root,
            formula_ids=formula_ids,
            magnitude_ids=magnitude_ids,
        )
        results.append(result)

    return results


def main():
    parser = argparse.ArgumentParser(
        description="Escribe respuestas de IA de markdown al leaf con normalización."
    )
    parser.add_argument("--leaf-id", required=True, help="ID del leaf")
    parser.add_argument(
        "--response",
        help="Archivo de respuesta específico (ej: 06_teoria.response.md). Si no se indica, procesa todos.",
    )
    parser.add_argument(
        "--responses-root",
        default=str(DEFAULT_RESPONSES_ROOT),
        help="Directorio raíz de respuestas de IA",
    )
    parser.add_argument(
        "--pruebas-root",
        default=str(PRUEBAS_ROOT),
        help="Directorio raíz de leafs en pruebas",
    )

    args = parser.parse_args()

    responses_root = Path(args.responses_root)
    pruebas_root = Path(args.pruebas_root)

    if args.response:
        # Procesar archivo específico
        target = RESPONSE_TO_TARGET.get(args.response)
        if not target:
            print(f"[ERROR] Archivo de respuesta no reconocido: {args.response}")
            print(f"[INFO] Archivos válidos: {list(RESPONSE_TO_TARGET.keys())}")
            sys.exit(1)

        result = write_md_response(
            leaf_id=args.leaf_id,
            response_file=args.response,
            target_file=target,
            responses_root=responses_root,
            pruebas_root=pruebas_root,
        )

        if result["success"]:
            print(f"[OK] Escrito: {result['target_file']}")
            if result['issues']:
                print(f"[WARNING] {result['issues_count']} issues detectados:")
                for issue in result['issues'][:5]:  # Mostrar máximo 5
                    line_num = issue.get("line", "?")
                    desc = issue.get("description") or issue.get("error") or "Unknown"
                    print(f"  - Línea {line_num}: {desc}")
        else:
            print(f"[ERROR] {result['error']}")
            sys.exit(1)
    else:
        # Procesar todos
        results = write_all_md_responses(
            leaf_id=args.leaf_id,
            responses_root=responses_root,
            pruebas_root=pruebas_root,
        )

        success_count = sum(1 for r in results if r["success"])
        total_issues = sum(r.get("issues_count", 0) for r in results)

        print(f"[OK] Procesados: {success_count}/{len(results)} archivos")
        if total_issues:
            print(f"[WARNING] Total issues detectados: {total_issues}")


if __name__ == "__main__":
    main()
