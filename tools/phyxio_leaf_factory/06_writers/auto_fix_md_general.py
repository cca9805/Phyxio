#!/usr/bin/env python3
"""
Auto-fix generalizado para archivos markdown de leafs Phyxio.

Repara errores comunes de estructura, formato y contenido sin intervención humana.
Uso: python auto_fix_md_general.py --leaf-id <id>
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path
from typing import List, Tuple


PROJECT_ROOT = Path(__file__).resolve().parents[3]
DEFAULT_LEAFS_ROOT = PROJECT_ROOT / "frontend" / "src" / "data_v2_i18n" / "pruebas"


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="replace")


def write_text(path: Path, content: str) -> None:
    path.write_text(content, encoding="utf-8")


# Mapeo de variaciones comunes de títulos a los correctos (ejemplos.md y ejemplos.en.md)
HEADING_VARIATIONS = {
    # Secciones principales de ejemplos
    "## Solución numérica": "## Solución numérica",
    "## Solucion numerica": "## Solución numérica",
    "## Numerical solution": "## Numerical solution",
    "## Solución simbólica": "## Solución simbólica",
    "## Solucion simbolica": "## Solución simbólica",
    "## Symbolic resolution": "## Symbolic solution",
    "## Symbolic resolving": "## Symbolic solution",
    "## Resolución simbólica": "## Solución simbólica",
    "# Aplicación real": "# Ejemplo real",
    "# Real-world application": "# Real-world example",
    "# Real-world application:": "# Real-world example",
    "# Aplicación del mundo real": "# Ejemplo real",
    "## Interpretación física": "## Interpretación física",
    "## Interpretacion fisica": "## Interpretación física",
    "## Physical interpretation": "## Physical interpretation",
    # Niveles teoria.md
    "## Nivel esencial": "## 🟢 Nivel esencial",
    "## Nivel formal": "## 🔵 Nivel formal",
    "## Nivel estructural": "## 🔴 Nivel estructural",
    "## Essential level": "## 🟢 Essential level",
    "## Formal level": "## 🔵 Formal level",
    "## Structural level": "## 🔴 Structural level",
}


def normalize_heading_text(text: str) -> str:
    """Normaliza texto de header para matching (sin emojis, lowercase, sin acentos básicos)."""
    text = re.sub(r'^[#\s]+', '', text).strip()
    text = re.sub(r'[🟢🔵🔴]', '', text)
    text = text.lower().replace('ó', 'o').replace('í', 'i').replace('á', 'a').replace('é', 'e').replace('ú', 'u')
    return text


def fix_required_headings(text: str) -> Tuple[str, int]:
    """
    Corrige títulos de secciones obligatorias que varían de la estructura esperada.
    Detecta variaciones comunes y las estandariza.
    """
    changes = 0
    lines = text.splitlines()
    new_lines = []
    
    for line in lines:
        # Solo procesar líneas que son headers
        match = re.match(r'^(#{1,6}\s+)(.+)$', line)
        if match:
            prefix = match.group(1)
            content = match.group(2).strip()
            normalized = normalize_heading_text(content)
            
            # Buscar coincidencia en variaciones
            for variation, correct in HEADING_VARIATIONS.items():
                norm_variation = normalize_heading_text(variation)
                if normalized == norm_variation:
                    # Si la versión correcta tiene emoji, preservar el emoji correcto
                    line = prefix + correct.replace('## ', '## ').replace('# ', '# ')
                    # Remover doble emoji si existe
                    line = re.sub(r'(##)\s+([🟢🔵🔴])\s+\2\s+', r'\1 \2 ', line)
                    changes += 1
                    break
        
        new_lines.append(line)
    
    return '\n'.join(new_lines), changes


def fix_inline_formulas_in_headings(text: str) -> Tuple[str, int]:
    """
    Corrige fórmulas {{f:id}} dentro de títulos de encabezados markdown.
    Las mueve fuera del título, dejando solo texto descriptivo.
    
    Ejemplo:
    ## Nivel formal (con {{f:formula1}} {{f:formula2}} en líneas propias)
    →
    ## Nivel formal (fórmulas en líneas propias)
    """
    changes = 0
    lines = text.splitlines()
    new_lines = []
    
    formula_pattern = re.compile(r"\{\{f:[^}]+\}\}")
    
    for line in lines:
        # Detectar encabezados markdown con fórmulas inline
        if line.startswith("#") and "{{f:" in line:
            # Extraer nivel del encabezado (##, ###, etc.)
            match = re.match(r"^(#+\s+)(.+)$", line)
            if match:
                prefix = match.group(1)
                content = match.group(2)
                
                # Verificar si hay fórmulas en el título
                if formula_pattern.search(content):
                    # Simplificar: eliminar las fórmulas del título
                    # Mantener solo texto descriptivo entre paréntesis
                    new_content = formula_pattern.sub("", content)
                    # Limpiar espacios múltiples
                    new_content = re.sub(r"\s+", " ", new_content).strip()
                    # Limpiar paréntesis vacíos o con solo espacios
                    new_content = re.sub(r"\(\s*\)", "", new_content)
                    new_content = re.sub(r"\(\s+", "(", new_content)
                    new_content = re.sub(r"\s+\)", ")", new_content)
                    
                    line = prefix + new_content
                    changes += 1
        
        new_lines.append(line)
    
    return "\n".join(new_lines), changes


def ensure_formulas_isolated(text: str) -> Tuple[str, int]:
    """
    Asegura que las fórmulas {{f:id}} estén en líneas propias.
    Si una fórmula está al final de una línea de texto, la mueve a su propia línea.
    """
    changes = 0
    lines = text.splitlines()
    new_lines = []
    
    formula_pattern = re.compile(r"(\{\{f:[^}]+\}\})$")
    
    for line in lines:
        # Si la línea termina con una fórmula y tiene texto antes
        match = formula_pattern.search(line.strip())
        if match and not line.strip().startswith("{{f:"):
            # Separar el texto de la fórmula
            formula = match.group(1)
            text_part = line[:line.rindex(formula)].strip()
            
            # Añadir línea de texto + línea vacía + línea de fórmula + línea vacía
            if text_part:
                new_lines.append(text_part)
            new_lines.append("")
            new_lines.append(formula)
            new_lines.append("")
            changes += 1
        else:
            new_lines.append(line)
    
    return "\n".join(new_lines), changes


def remove_loose_magnitude_mentions(text: str, magnitudes: List[str]) -> Tuple[str, int]:
    """
    Convierte menciones sueltas de magnitudes a formato [[id]].
    Solo aplica a palabras completas que coincidan con IDs de magnitudes.
    """
    changes = 0
    
    for mag_id in magnitudes:
        # Buscar la palabra suelta (no entre [[ ]])
        # Usar lookbehind negativo para asegurar que no está dentro de [[...]]
        pattern = rf"(?<!\[\[){re.escape(mag_id)}(?!\]\])"
        
        # Solo reemplazar si es palabra completa
        def replace_match(m):
            # Verificar que sea palabra completa
            start, end = m.span()
            text_before = text[:start]
            text_after = text[end:]
            
            # Check word boundaries
            if start > 0 and text_before[-1].isalnum():
                return mag_id
            if end < len(text) and text_after[0].isalnum():
                return mag_id
            
            return f"[[{mag_id}]]"
        
        new_text, count = re.subn(pattern, replace_match, text, flags=re.IGNORECASE)
        if count > 0:
            text = new_text
            changes += count
    
    return text, changes


def fix_duplicate_blank_lines(text: str) -> Tuple[str, int]:
    """Elimina líneas en blanco duplicadas consecutivas (más de 2)."""
    changes = 0
    lines = text.splitlines()
    new_lines = []
    blank_count = 0
    
    for line in lines:
        if line.strip() == "":
            blank_count += 1
            if blank_count <= 2:
                new_lines.append(line)
            else:
                changes += 1
        else:
            blank_count = 0
            new_lines.append(line)
    
    return "\n".join(new_lines), changes


def fix_trailing_whitespace(text: str) -> Tuple[str, int]:
    """Elimina espacios al final de las líneas."""
    changes = 0
    lines = text.splitlines()
    new_lines = []
    
    for line in lines:
        stripped = line.rstrip()
        if stripped != line:
            changes += 1
        new_lines.append(stripped)
    
    return "\n".join(new_lines), changes


def load_magnitude_ids(leaf_dir: Path) -> List[str]:
    """Carga los IDs de magnitudes desde magnitudes.yaml."""
    magnitudes_path = leaf_dir / "magnitudes.yaml"
    ids = []
    
    if not magnitudes_path.exists():
        return ids
    
    try:
        import yaml
        data = yaml.safe_load(read_text(magnitudes_path))
        if isinstance(data, dict) and "magnitudes" in data:
            for mag in data["magnitudes"]:
                if isinstance(mag, dict) and "id" in mag:
                    ids.append(mag["id"])
    except Exception:
        pass
    
    return ids


def load_formula_ids(leaf_dir: Path) -> List[str]:
    """Carga los IDs de fórmulas desde formulas.yaml."""
    formulas_path = leaf_dir / "formulas.yaml"
    ids = []
    
    if not formulas_path.exists():
        return ids
    
    try:
        import yaml
        data = yaml.safe_load(read_text(formulas_path))
        if isinstance(data, dict) and "formulas" in data:
            for formula in data["formulas"]:
                if isinstance(formula, dict) and "id" in formula:
                    ids.append(formula["id"])
    except Exception:
        pass
    
    return ids


def fix_invented_variables_in_formulas_yaml(leaf_dir: Path, magnitudes: List[str]) -> Tuple[bool, List[str]]:
    """
    Detecta y corrige variables inventadas en formulas.yaml.
    Reemplaza patterns tipo 'sum(fuerzas)' con texto descriptivo válido.
    """
    formulas_path = leaf_dir / "formulas.yaml"
    changes_log = []
    
    if not formulas_path.exists():
        return False, changes_log
    
    try:
        import yaml
        text = read_text(formulas_path)
        original_text = text
        
        # Patrones de variables inventadas y sus correcciones
        invented_patterns = [
            (r'equation:\s*"fuerza_neta\s*=\s*sum\(fuerzas\)"', 'equation: "fuerza_neta = sumatoria de fuerzas individuales"'),
            (r'equation:\s*"fuerza_neta_x\s*=\s*sum\(fuerzas_x\)"', 'equation: "fuerza_neta_x = sumatoria de componentes x"'),
            (r'equation:\s*"fuerza_neta_y\s*=\s*sum\(fuerzas_y\)"', 'equation: "fuerza_neta_y = sumatoria de componentes y"'),
        ]
        
        for pattern, replacement in invented_patterns:
            if re.search(pattern, text):
                text = re.sub(pattern, replacement, text)
                changes_log.append(f"Corregida variable inventada: {pattern}")
        
        if text != original_text:
            write_text(formulas_path, text)
            return True, changes_log
            
    except Exception as e:
        changes_log.append(f"Error procesando formulas.yaml: {e}")
    
    return False, changes_log


def fix_loose_magnitude_refs(text: str, magnitudes: List[str]) -> Tuple[str, int]:
    """
    Detecta menciones sueltas de magnitudes y las envuelve con [[id]].
    Solo aplica a magnitudes que no estén ya dentro de [[ ]] o dentro de código.
    """
    changes = 0
    if not magnitudes:
        return text, changes
    
    # Ordenar magnitudes por longitud descendente para evitar reemplazos parciales
    sorted_mags = sorted(magnitudes, key=len, reverse=True)
    
    lines = text.splitlines()
    new_lines = []
    
    for line in lines:
        original_line = line
        
        # Skip code blocks, headers, and lines that look like metadata
        stripped = line.strip()
        if stripped.startswith('```') or stripped.startswith('---'):
            new_lines.append(line)
            continue
        
        # Skip YAML frontmatter boundaries
        if stripped == '---':
            new_lines.append(line)
            continue
        
        # For each magnitude, check if it appears unmarked
        for mag_id in sorted_mags:
            # Pattern: magnitude not inside [[ ]], not preceded by [[, not followed by ]]
            # Use negative lookbehind and lookahead
            try:
                pattern = rf'(?<!\[\[){re.escape(mag_id)}(?!\]\])'
                
                def replace_if_not_in_brackets(match):
                    start, end = match.span()
                    # Additional check: ensure we're not inside [[...]]
                    context_before = line[max(0, start-2):start]
                    context_after = line[end:end+2]
                    
                    if context_before == '[[' or context_after == ']]':
                        return mag_id
                    
                    # Check word boundaries
                    if start > 0:
                        char_before = line[start-1]
                        if char_before.isalnum() or char_before == '_':
                            return mag_id
                    
                    if end < len(line):
                        char_after = line[end]
                        if char_after.isalnum() or char_after == '_':
                            return mag_id
                    
                    return f'[[{mag_id}]]'
                
                new_line, count = re.subn(pattern, replace_if_not_in_brackets, line, flags=re.IGNORECASE)
                if count > 0:
                    line = new_line
                    changes += count
            except re.error:
                continue
        
        new_lines.append(line)
    
    return '\n'.join(new_lines), changes


def fix_file(filepath: Path, magnitudes: List[str]) -> Tuple[bool, List[str]]:
    """
    Aplica todas las correcciones a un archivo.
    
    Returns:
        (se_hicieron_cambios, lista_de_cambios)
    """
    original = read_text(filepath)
    text = original
    changes_log = []
    
    # Fix 0: Títulos de secciones obligatorias
    text, count = fix_required_headings(text)
    if count > 0:
        changes_log.append(f"Corregidos {count} títulos de secciones obligatorias")
    
    # Fix 1: Fórmulas inline en encabezados
    text, count = fix_inline_formulas_in_headings(text)
    if count > 0:
        changes_log.append(f"Corregidas {count} fórmulas inline en encabezados")
    
    # Fix 2: Aislar fórmulas al final de líneas
    text, count = ensure_formulas_isolated(text)
    if count > 0:
        changes_log.append(f"Aisladas {count} fórmulas en líneas propias")
    
    # Fix 3: Magnitudes sueltas sin [[id]]
    text, count = fix_loose_magnitude_refs(text, magnitudes)
    if count > 0:
        changes_log.append(f"Marcadas {count} magnitudes sueltas con [[id]]")
    
    # Fix 4: Espacios al final de líneas
    text, count = fix_trailing_whitespace(text)
    if count > 0:
        changes_log.append(f"Eliminados espacios finales en {count} líneas")
    
    # Fix 5: Líneas en blanco duplicadas
    text, count = fix_duplicate_blank_lines(text)
    if count > 0:
        changes_log.append(f"Eliminadas {count} líneas en blanco duplicadas")
    
    # Solo escribir si hubo cambios
    made_changes = text != original
    if made_changes:
        write_text(filepath, text)
    
    return made_changes, changes_log


def auto_fix_leaf(leaf_id: str, leafs_root: Path) -> dict:
    """
    Ejecuta auto-fix sobre todos los archivos de un leaf.
    
    Returns:
        Dict con estadísticas de cambios.
    """
    leaf_dir = leafs_root / leaf_id
    
    if not leaf_dir.exists():
        print(f"[ERROR] No existe el directorio: {leaf_dir}")
        return {"success": False, "error": "Directorio no existe"}
    
    # Cargar magnitudes para este leaf
    magnitudes = load_magnitude_ids(leaf_dir)
    
    markdown_files = sorted(leaf_dir.glob("*.md"))
    
    results = {
        "success": True,
        "leaf_id": leaf_id,
        "files_processed": 0,
        "files_modified": 0,
        "total_changes": 0,
        "changes_by_file": {},
    }
    
    print(f"\n🔧 Auto-fix generalizado para: {leaf_id}")
    print(f"   Magnitudes cargadas: {len(magnitudes)}\n")
    
    # Fix 1: Corregir variables inventadas en formulas.yaml
    made_changes, changes_log = fix_invented_variables_in_formulas_yaml(leaf_dir, magnitudes)
    if made_changes:
        results["files_modified"] += 1
        results["total_changes"] += len(changes_log)
        results["changes_by_file"]["formulas.yaml"] = changes_log
        print(f"✓ formulas.yaml (correcciones YAML)")
        for change in changes_log:
            print(f"    - {change}")
    else:
        print(f"  formulas.yaml (sin cambios)")
    
    # Fix 2: Procesar archivos markdown
    print(f"\n   Archivos markdown: {len(markdown_files)}\n")
    for md_file in markdown_files:
        made_changes, changes_log = fix_file(md_file, magnitudes)
        
        results["files_processed"] += 1
        
        if made_changes:
            results["files_modified"] += 1
            results["total_changes"] += len(changes_log)
            results["changes_by_file"][md_file.name] = changes_log
            
            print(f"✓ {md_file.name}")
            for change in changes_log:
                print(f"    - {change}")
        else:
            print(f"  {md_file.name} (sin cambios)")
    
    print(f"\n📊 Resumen:")
    print(f"   Archivos procesados: {results['files_processed']}")
    print(f"   Archivos modificados: {results['files_modified']}")
    print(f"   Total correcciones: {results['total_changes']}")
    
    return results


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Auto-fix generalizado para archivos markdown de leafs Phyxio"
    )
    parser.add_argument(
        "--leaf-id",
        required=True,
        help="ID del leaf a procesar (ej: segunda-ley-fuerza-masa)",
    )
    parser.add_argument(
        "--leafs-root",
        default=str(DEFAULT_LEAFS_ROOT),
        help=f"Directorio raíz de leafs (default: {DEFAULT_LEAFS_ROOT})",
    )
    
    args = parser.parse_args()
    
    leafs_root = Path(args.leafs_root)
    
    results = auto_fix_leaf(args.leaf_id, leafs_root)
    
    if not results["success"]:
        sys.exit(1)
    
    # Exit code 0 si todo OK, 2 si hubo cambios (para CI/CD)
    if results["files_modified"] > 0:
        sys.exit(0)  # Éxito con cambios
    else:
        sys.exit(0)  # Éxito sin cambios necesarios


if __name__ == "__main__":
    main()
