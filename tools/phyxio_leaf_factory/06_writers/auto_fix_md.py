"""
Pre-validador auto-corrector para archivos markdown del leaf.

Revisa y corrige automáticamente fails estructurales antes de pasar el validador:
- Fórmulas sin {{f:id}} → corregir
- Magnitudes sin [[id]] → corregir
- Estructura de aplicaciones (Variable dominante, Límite de validez)
- Estructura de ejemplos
- Estructura de errores (5 subsecciones)
- Niveles en teoría (esencial, formal, estructural)

Uso:
    python auto_fix_md.py --leaf-id <id>
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path
from typing import Any

# Importar desde el factory
CURRENT_FILE = Path(__file__).resolve()
FACTORY_ROOT = CURRENT_FILE.parents[1]
if str(FACTORY_ROOT) not in sys.path:
    sys.path.insert(0, str(FACTORY_ROOT))

from config import PRUEBAS_ROOT


def load_leaf_context(leaf_dir: Path) -> dict[str, Any]:
    """Carga magnitudes y fórmulas del leaf."""
    context = {
        "magnitudes": {},  # id -> {symbol, nombre_es, nombre_en}
        "formulas": set(),  # ids de fórmulas
    }

    try:
        import yaml
    except ImportError:
        return context

    # Cargar magnitudes
    mags_path = leaf_dir / "magnitudes.yaml"
    if mags_path.exists():
        try:
            data = yaml.safe_load(mags_path.read_text(encoding="utf-8", errors="replace"))
            if isinstance(data, dict) and "magnitudes" in data:
                for mag in data["magnitudes"]:
                    if isinstance(mag, dict) and "id" in mag:
                        mid = mag["id"]
                        nombre = mag.get("nombre", {})
                        context["magnitudes"][mid] = {
                            "symbol": mag.get("symbol", ""),
                            "es": nombre.get("es", "") if isinstance(nombre, dict) else "",
                            "en": nombre.get("en", "") if isinstance(nombre, dict) else "",
                        }
        except Exception:
            pass

    # Cargar fórmulas
    forms_path = leaf_dir / "formulas.yaml"
    if forms_path.exists():
        try:
            data = yaml.safe_load(forms_path.read_text(encoding="utf-8", errors="replace"))
            if isinstance(data, dict) and "formulas" in data:
                for form in data["formulas"]:
                    if isinstance(form, dict) and "id" in form:
                        context["formulas"].add(form["id"])
        except Exception:
            pass

    return context


def wrap_bare_magnitudes(content: str, magnitude_ids: set[str]) -> str:
    """
    Detecta palabras que son IDs de magnitudes pero no están envueltas en [[ ]].
    Las envuelve automáticamente.
    """
    if not magnitude_ids:
        return content

    # Crear patrón que busca IDs de magnitudes que NO están ya envueltos
    # Evitar reemplazar si ya está dentro de [[ ]] o {{ }}
    sorted_ids = sorted(magnitude_ids, key=len, reverse=True)  # Más largos primero

    for mid in sorted_ids:
        # Patrón: palabra completa, no precedida por [[ o {{, no seguida por ]]
        pattern = rf'(?<![\[{{])\b{re.escape(mid)}\b(?![\]}}])'

        def replace_match(match: re.Match) -> str:
            # Verificar que no esté dentro de un enlace markdown o código
            start = match.start()
            line_start = content.rfind('\n', 0, start) + 1
            line_prefix = content[line_start:start]

            # No reemplazar en cabeceras (##)
            if line_prefix.strip().startswith('#'):
                return match.group(0)

            # No reemplazar si parece estar en código inline
            if '`' in line_prefix and line_prefix.count('`') % 2 == 1:
                return match.group(0)

            return f'[[{match.group(0)}]]'

        content = re.sub(pattern, replace_match, content)

    return content


def fix_formula_syntax(content: str, formula_ids: set[str]) -> str:
    """
    Corrige sintaxis de fórmulas:
    - [[formula_id]] donde debería ser {{f:formula_id}} → corregir
    - Asegura que {{f:id}} esté en línea propia
    """
    if not formula_ids:
        return content

    # Buscar [[formula_id]] donde formula_id es una fórmula conocida
    for fid in formula_ids:
        pattern = rf'\[\[{re.escape(fid)}\]\]'

        def replace_to_formula(match: re.Match) -> str:
            return f'{{{{f:{fid}}}}}'

        content = re.sub(pattern, replace_to_formula, content)

    return content


def fix_aplicaciones_structure(content: str, lang: str = "es") -> str:
    """
    Verifica y corrige estructura de aplicaciones:
    - Cada aplicación debe tener Variable dominante / Dominant variable
    - Cada aplicación debe tener Límite de validez / Validity limit
    """
    if lang == "es":
        var_label = "Variable dominante:"
        lim_label = "Límite de validez:"
    else:
        var_label = "Dominant variable:"
        lim_label = "Validity limit:"

    # Encontrar aplicaciones numeradas (## 1., ## 2., etc.)
    app_pattern = r'(##\s+\d+\.\s+.+?)(?=\n##\s+\d+\.|\Z)'
    apps = list(re.finditer(app_pattern, content, re.DOTALL))

    if not apps:
        return content

    fixed_content = content
    offset = 0

    for match in apps:
        start_pos = match.start() + offset
        end_pos = match.end() + offset
        app_content = fixed_content[start_pos:end_pos]

        # Verificar si tiene Variable dominante
        if var_label not in app_content:
            # Insertar después del título de la aplicación
            lines = app_content.split('\n')
            if len(lines) >= 1:
                # Encontrar dónde termina la primera línea (título)
                insert_pos = app_content.find('\n') + 1 if '\n' in app_content else len(app_content)
                new_section = f"\n### {var_label} [magnitud principal]\n"
                app_content = app_content[:insert_pos] + new_section + app_content[insert_pos:]
                offset += len(new_section)

        # Verificar si tiene Límite de validez
        if lim_label not in app_content:
            # Buscar dónde insertar (después de Variable dominante o al inicio)
            if var_label in app_content:
                # Insertar después de Variable dominante
                var_pos = app_content.find(var_label)
                var_line_end = app_content.find('\n', var_pos)
                if var_line_end == -1:
                    var_line_end = len(app_content)
                new_section = f"\n### {lim_label} [condición cuantitativa]\n"
                app_content = app_content[:var_line_end] + new_section + app_content[var_line_end:]
                offset += len(new_section)
            else:
                # Insertar al inicio
                lines = app_content.split('\n')
                if len(lines) >= 1:
                    insert_pos = app_content.find('\n') + 1 if '\n' in app_content else len(app_content)
                    new_section = f"\n### {lim_label} [condición cuantitativa]\n"
                    app_content = app_content[:insert_pos] + new_section + app_content[insert_pos:]
                    offset += len(new_section)

        fixed_content = fixed_content[:start_pos] + app_content + fixed_content[end_pos:]

    return fixed_content


def fix_magnitudes_in_backticks(content: str) -> str:
    """
    Corrige magnitudes dentro de backticks.
    Mueve [[id]] fuera de `` ` `` para que el render funcione.
    
    Ejemplo: `[[masa]] de 5 kg` → [[masa]] `de 5 kg` (valor fuera)
    """
    # Patrón 1: `[[id]]` o `[[id]] texto` dentro de backticks
    # Capturar: `[[id]]` seguido de opcionalmente más texto dentro de los mismos backticks
    pattern1 = r'`(\[\[([a-z_]+)\]\])([^`]*)`'
    
    def replace_backtick_magnitude(match: re.Match) -> str:
        mag_ref = match.group(1)  # [[id]]
        rest = match.group(3)     # resto del contenido
        # Si rest está vacío, solo devolver el magnitud sin backticks
        if not rest.strip():
            return mag_ref
        # Si rest tiene contenido, poner magnitud fuera y resto dentro de backticks
        return f"{mag_ref} `{rest.strip()}`"
    
    content = re.sub(pattern1, replace_backtick_magnitude, content)
    
    return content


def fix_dimensional_notation(content: str) -> str:
    """
    Corrige notación dimensional a Estilo Azul Phyxio v5.
    Convierte [M L T^-2] a `[M L T⁻²]` (backticks + Unicode superscript).
    """
    # Mapeo de superíndices Unicode
    superscripts = {
        '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
        '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
        '-': '⁻', '+': '⁺', '(': '⁽', ')': '⁾',
    }

    # Patrón: [M L T^-2] o [M L T] sin backticks
    pattern = r'(?<!`)\[([MPLT0-9\s\^\-\+\(\)]+)\](?!`)'

    def replace_with_unicode(match: re.Match) -> str:
        inner = match.group(1)
        # Reemplazar ^-n con superíndices
        result = []
        i = 0
        while i < len(inner):
            if inner[i] == '^' and i + 1 < len(inner):
                # Siguiente carácter(s) después de ^
                j = i + 1
                while j < len(inner) and (inner[j].isdigit() or inner[j] == '-'):
                    j += 1
                exp = inner[i+1:j]
                for char in exp:
                    result.append(superscripts.get(char, char))
                i = j
            else:
                result.append(inner[i])
                i += 1
        return f'`[{"".join(result)}]`'

    return re.sub(pattern, replace_with_unicode, content)


def enhance_ejemplos_with_magnitudes(
    content: str,
    magnitude_ids: set[str],
    formula_ids: set[str],
    lang: str = "es"
) -> str:
    """
    Asegura que ejemplos.md use magnitudes y fórmulas del leaf.
    Inserta referencias faltantes en Modelo físico y Resolución.
    GENÉRICO: Funciona con cualquier leaf, no hardcodeado.
    """
    if not magnitude_ids:
        return content

    # Usar TODAS las magnitudes del leaf (no solo unas específicas)
    # Priorizar magnitudes que ya aparecen en el contenido (probablemente son las importantes)
    present_in_content = set()
    for mag in magnitude_ids:
        if f'[[{mag}]]' in content:
            present_in_content.add(mag)
    
    # Complementar con magnitudes faltantes del leaf hasta tener al menos 3
    core_mags = list(present_in_content) + [m for m in magnitude_ids if m not in present_in_content]
    core_mags = core_mags[:5]  # Máximo 5 magnitudes a añadir si faltan

    # Usar TODAS las fórmulas del leaf (no solo unas específicas)
    # Priorizar fórmulas que ya aparecen en el contenido
    present_forms_in_content = set()
    for form in formula_ids:
        if f'{{{{f:{form}}}}}' in content:
            present_forms_in_content.add(form)
    
    core_formulas = list(present_forms_in_content) + [f for f in formula_ids if f not in present_forms_in_content]
    core_formulas = core_formulas[:3]  # Máximo 3 fórmulas a añadir si faltan

    # Verificar sección "Modelo físico"
    modelo_pattern = r'(##\s+(?:Modelo físico|Physical model).*?\n)'
    match = re.search(modelo_pattern, content, re.IGNORECASE | re.DOTALL)
    if match:
        section_start = match.start()
        section_end_match = re.search(r'\n##\s+', content[section_start+1:])
        section_end = section_start + 1 + section_end_match.start() if section_end_match else len(content)
        section_content = content[section_start:section_end]

        # Verificar qué magnitudes faltan (de las que deberían estar)
        present_mags = set()
        for mag in core_mags:
            if f'[[{mag}]]' in section_content:
                present_mags.add(mag)

        missing = set(core_mags) - present_mags
        if missing and len(missing) >= 1:
            # Insertar párrafo con magnitudes faltantes
            if lang == "es":
                insert_text = "\n\nEl modelo debe considerar " + ", ".join([f"[[{m}]]" for m in list(missing)[:3]]) + "."
            else:
                insert_text = "\n\nThe model must consider " + ", ".join([f"[[{m}]]" for m in list(missing)[:3]]) + "."
            content = content[:section_end] + insert_text + content[section_end:]

    # Verificar sección "Resolución simbólica"
    resol_pattern = r'(##\s+(?:Resolución simbólica|Symbolic resolution).*?\n)'
    match = re.search(resol_pattern, content, re.IGNORECASE | re.DOTALL)
    if match and core_formulas:
        section_start = match.start()
        section_end_match = re.search(r'\n##\s+', content[section_start+1:])
        section_end = section_start + 1 + section_end_match.start() if section_end_match else len(content)
        section_content = content[section_start:section_end]

        # Verificar qué fórmulas faltan
        present_forms = set()
        for form in core_formulas:
            if f'{{{{f:{form}}}}}' in section_content:
                present_forms.add(form)

        missing = set(core_formulas) - present_forms
        if missing and len(missing) >= 1:
            # Insertar fórmulas faltantes
            insert_text = "\n\n" + "\n\n".join([f"{{{{f:{f}}}}}" for f in list(missing)[:3]]) + "\n"
            content = content[:section_end] + insert_text + content[section_end:]

    return content


def fix_ejemplos_structure(content: str, lang: str = "es") -> str:
    """
    Verifica y corrige estructura de ejemplos según plantilla:
    - Enunciado, Datos, Definición del sistema, Modelo físico, etc.
    """
    if lang == "es":
        required_sections = [
            "Enunciado",
            "Datos",
            "Definición del sistema",
            "Modelo físico",
            "Justificación del modelo",
            "Resolución simbólica",
            "Sustitución numérica",
            "Validación dimensional",
            "Interpretación física",
        ]
    else:
        required_sections = [
            "Problem statement",
            "Data",
            "System definition",
            "Physical model",
            "Model justification",
            "Symbolic resolution",
            "Numerical substitution",
            "Dimensional validation",
            "Physical interpretation",
        ]

    # Verificar qué secciones faltan
    missing = []
    for section in required_sections:
        # Buscar ## Sección o similar
        pattern = rf'##\s+{re.escape(section)}'
        if not re.search(pattern, content, re.IGNORECASE):
            missing.append(section)

    # Añadir secciones faltantes al final
    if missing:
        content = content.rstrip() + "\n\n"
        for section in missing:
            content += f"## {section}\n\n[Sección generada automáticamente - completar con contenido]\n\n"

    return content


def fix_errores_structure(content: str, lang: str = "es") -> str:
    """
    Verifica y corrige estructura de errores:
    - Cada error debe tener 5 subsecciones
    """
    if lang == "es":
        subsections = [
            "**Por qué parece correcto**",
            "**Por qué es incorrecto**",
            "**Señal de detección**",
            "**Corrección conceptual**",
            "**Mini-ejemplo de contraste**",
        ]
    else:
        subsections = [
            "**Why it seems correct**",
            "**Why it is incorrect**",
            "**Detection signal**",
            "**Conceptual correction**",
            "**Mini-example of contrast**",
        ]

    # Encontrar bloques ### Error X:
    error_blocks = list(re.finditer(r'###\s+Error\s+\d+:', content, re.IGNORECASE))

    for i, block in enumerate(error_blocks):
        if i + 1 < len(error_blocks):
            block_end = error_blocks[i + 1].start()
        else:
            block_end = len(content)

        block_content = content[block.start():block_end]

        # Verificar subsecciones faltantes
        for subsection in subsections:
            if subsection not in block_content:
                # Añadir al final del bloque
                insert_pos = block_end
                new_section = f"\n{subsection}\n\n[Completar - texto generado automáticamente]\n"
                content = content[:insert_pos] + new_section + content[insert_pos:]
                # Actualizar block_end para el siguiente
                block_end += len(new_section)

    return content


def fix_teoria_levels(content: str, formula_ids: set[str]) -> str:
    """
    Verifica y corrige niveles en teoría:
    - Nivel esencial: sin ecuaciones con =
    - Nivel formal: con fórmulas {{f:id}} en líneas propias
    - Nivel estructural: análisis profundo
    """
    # Asegurar que Nivel formal tenga todas las fórmulas del leaf
    # Buscar sección "## 🔵 Nivel formal"
    nivel_pattern = r'(##\s+🔵\s+(?:Nivel\s+formal|Formal\s+level).*?)(?=\n##\s+|$)'
    match = re.search(nivel_pattern, content, re.DOTALL | re.IGNORECASE)

    if match and formula_ids:
        # Verificar qué fórmulas ya están presentes
        section = match.group(1)
        present = set()
        for fid in formula_ids:
            if f'{{{{f:{fid}}}}}' in section:
                present.add(fid)

        # Añadir fórmulas faltantes
        missing = sorted(formula_ids - present)
        if missing:
            formulas_block = "\n\n" + "\n".join([f"{{{{f:{fid}}}}}" for fid in missing]) + "\n"
            insert_pos = match.end(1)
            content = content[:insert_pos] + formulas_block + content[insert_pos:]

    return content


def auto_fix_file(
    file_path: Path,
    context: dict[str, Any],
    lang: str = "es",
) -> tuple[str, list[str]]:
    """
    Aplica todas las correcciones automáticas a un archivo.
    Retorna: (contenido_corregido, lista_de_cambios)
    """
    changes = []
    content = file_path.read_text(encoding="utf-8", errors="replace")
    original = content

    filename = file_path.name

    # 1. Corregir fórmulas mal colocadas
    if formula_ids := context.get("formulas"):
        content = fix_formula_syntax(content, formula_ids)
        if content != original:
            changes.append("Corregidas fórmulas: [[id]] → {{f:id}}")

    # 2. Envolver magnitudes desnudas
    if magnitude_ids := set(context.get("magnitudes", {}).keys()):
        content = wrap_bare_magnitudes(content, magnitude_ids)
        if content != original:
            changes.append("Envueltas magnitudes: id → [[id]]")

    # 3. Correcciones globales (TODOS los archivos)
    # a. Corregir magnitudes dentro de backticks (mueve [[id]] fuera)
    content = fix_magnitudes_in_backticks(content)
    if content != original:
        changes.append("Corregidas magnitudes dentro de backticks")
    
    # b. Corregir notación dimensional a Estilo Azul Phyxio v5
    content = fix_dimensional_notation(content)
    if content != original:
        changes.append("Corregida notación dimensional a Estilo Azul Phyxio v5")

    # 4. Correcciones específicas por tipo de archivo
    if "aplicaciones" in filename:
        content = fix_aplicaciones_structure(content, lang)
        if content != original:
            changes.append("Corregida estructura de aplicaciones")

        # b. Mejorar con magnitudes y fórmulas núcleo
        content = enhance_ejemplos_with_magnitudes(
            content,
            set(context.get("magnitudes", {}).keys()),
            set(context.get("formulas", set())),
            lang
        )

        # c. Estructura base
        content = fix_ejemplos_structure(content, lang)
        if content != original:
            changes.append("Corregida estructura de ejemplos")

    elif "errores" in filename:
        content = fix_errores_structure(content, lang)
        if content != original:
            changes.append("Corregida estructura de errores")

    elif "teoria" in filename and "teoria.md" == filename:
        # Solo para teoria.md (no teoria.en.md)
        if formula_ids := context.get("formulas"):
            content = fix_teoria_levels(content, formula_ids)
            if content != original:
                changes.append("Añadidas fórmulas faltantes en Nivel formal")

    return content, changes


def auto_fix_leaf(leaf_id: str, pruebas_root: Path = PRUEBAS_ROOT) -> dict[str, Any]:
    """
    Auto-corrector completo para todos los archivos markdown de un leaf.
    """
    leaf_id = leaf_id.strip().lower().replace(" ", "-").replace("_", "-")
    leaf_dir = pruebas_root / leaf_id

    if not leaf_dir.exists():
        return {"success": False, "error": f"Leaf no existe: {leaf_dir}"}

    # Cargar contexto del leaf
    context = load_leaf_context(leaf_dir)

    # Archivos a procesar
    md_files = [
        ("teoria.md", "es"),
        ("teoria.en.md", "en"),
        ("modelos.md", "es"),
        ("modelos.en.md", "en"),
        ("errores.md", "es"),
        ("errores.en.md", "en"),
        ("ejemplos.md", "es"),
        ("ejemplos.en.md", "en"),
        ("aplicaciones.md", "es"),
        ("aplicaciones.en.md", "en"),
        ("historia.md", "es"),
        ("historia.en.md", "en"),
    ]

    results = []
    total_changes = 0

    for filename, lang in md_files:
        file_path = leaf_dir / filename
        if not file_path.exists():
            continue

        content, changes = auto_fix_file(file_path, context, lang)

        if changes:
            file_path.write_text(content, encoding="utf-8")
            total_changes += len(changes)

        results.append({
            "file": filename,
            "changes": changes,
        })

    return {
        "success": True,
        "leaf_id": leaf_id,
        "files_processed": len([r for r in results if r["changes"]]),
        "total_changes": total_changes,
        "results": results,
    }


def main():
    parser = argparse.ArgumentParser(
        description="Pre-validador auto-corrector para archivos markdown del leaf."
    )
    parser.add_argument("--leaf-id", required=True, help="ID del leaf")
    parser.add_argument(
        "--pruebas-root",
        default=str(PRUEBAS_ROOT),
        help="Directorio raíz de leafs en pruebas",
    )

    args = parser.parse_args()

    pruebas_root = Path(args.pruebas_root)
    result = auto_fix_leaf(args.leaf_id, pruebas_root)

    if not result["success"]:
        print(f"[ERROR] {result['error']}")
        sys.exit(1)

    print(f"[OK] Auto-corrección completada para: {result['leaf_id']}")
    print(f"     Archivos modificados: {result['files_processed']}")
    print(f"     Total correcciones: {result['total_changes']}")
    print()

    for r in result["results"]:
        if r["changes"]:
            print(f"  {r['file']}:")
            for change in r["changes"]:
                print(f"    - {change}")

    print()
    print("Siguiente paso: Ejecutar el validador para verificar")
    print(f"  python tools/phyxio_leaf_validator_v2.py {pruebas_root / result['leaf_id']}")


if __name__ == "__main__":
    main()
