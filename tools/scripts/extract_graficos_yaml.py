"""
extract_graficos_yaml.py

Extrae los metadatos semánticos de un index.js de cantidad-de-movimiento
y los vuelca a graficos.yaml.

Estrategia: usa json5 (si disponible) o pyjson5 para parsear el JS;
si ninguno está instalado, usa una transformación regex + json estándar.
"""

import re, sys, textwrap
from pathlib import Path

SKIP_FIELDS = {"component", "id", "graphId", "type", "graphType", "recommendedTab"}

# ─── YAML helpers ────────────────────────────────────────────────────────────

def _yaml_str(s):
    """Emite un escalar string YAML seguro."""
    if not isinstance(s, str):
        return str(s)
    # Si contiene caracteres problemáticos, usar comillas dobles
    needs_quote = any(c in s for c in ['"', "'", ':', '{', '}', '[', ']', '#', '&', '*', '!', '|', '>', '%', '@', '`', '\n'])
    if needs_quote or s.startswith('-') or s.startswith(' ') or s == '' or s.lower() in ('true','false','null','yes','no'):
        escaped = s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')
        return f'"{escaped}"'
    return s

def _dump_val(val, indent):
    """Serializes a Python value to YAML text.
    
    Returns either an inline string (no leading newline) or a block starting
    with a newline (for dicts and lists). The caller is responsible for
    placing it after the key with proper spacing.
    """
    sp = "  " * indent
    if isinstance(val, dict):
        parts = []
        for k, v in val.items():
            vdump = _dump_val(v, indent + 1)
            if vdump.startswith('\n'):
                parts.append(f"{sp}{k}:{vdump}")
            else:
                parts.append(f"{sp}{k}: {vdump}")
        return '\n' + '\n'.join(parts)
    elif isinstance(val, list):
        parts = []
        for item in val:
            item_dump = _dump_val(item, indent)  # list items at same indent as list
            if item_dump.startswith('\n'):
                inner = item_dump.lstrip('\n')
                lines = inner.split('\n')
                parts.append(f"{sp}- {lines[0]}")
                for extra in lines[1:]:
                    parts.append(f"{sp}  {extra.lstrip()}" if extra.strip() else "")
            else:
                parts.append(f"{sp}- {item_dump}")
        return '\n' + '\n'.join(parts)
    elif isinstance(val, bool):
        return 'true' if val else 'false'
    elif val is None:
        return 'null'
    elif isinstance(val, (int, float)):
        return str(val)
    else:
        return _yaml_str(str(val))

# ─── JS parser ───────────────────────────────────────────────────────────────

def _fix_js_to_json(raw):
    """Transforms a JS object literal (with trailing commas, unquoted keys) to JSON."""
    # 1. Remove JS single-line comments
    raw = re.sub(r'//[^\n]*', '', raw)
    # 2. Remove component: XxxComponent references
    raw = re.sub(r'component:\s*[A-Z]\w+', 'component: null', raw)
    # 3. Quote unquoted keys (word chars possibly with hyphens, not already quoted)
    raw = re.sub(r'(?<!["\w])([\w][\w-]*)(?=\s*:)', lambda m: f'"{m.group(1)}"', raw)
    # 4. Remove trailing commas before } or ]
    raw = re.sub(r',(\s*[}\]])', r'\1', raw)
    return raw


def parse_rawgraphs(js_text):
    """Extract rawGraphs object from JS file and parse it."""
    # Find const rawGraphs = { ... };
    m = re.search(r'const rawGraphs\s*=\s*', js_text)
    if not m:
        return None
    start = m.end()
    # Find the matching brace
    depth = 0
    end = start
    for i, c in enumerate(js_text[start:]):
        if c == '{':
            depth += 1
        elif c == '}':
            depth -= 1
            if depth == 0:
                end = start + i + 1
                break
    raw = js_text[start:end]
    
    # Replace bare identifier values (React component references) with null
    # Pattern: "component: SomePascalCaseIdentifier" → "component: null"
    raw = re.sub(r'(component\s*:)\s*[A-Z][A-Za-z0-9_]*', r'\1 null', raw)
    
    # Try json5 first
    try:
        import json5
        return json5.loads(raw)
    except ImportError:
        pass
    
    # Fallback: manual fix
    import json
    try:
        fixed = _fix_js_to_json(raw)
        return json.loads(fixed)
    except Exception as e:
        print(f"  JSON parse error: {e}")
        return None


# ─── YAML writer ─────────────────────────────────────────────────────────────

def dump_graficos_yaml(data):
    """
    Indentation scheme:
      leaves:           indent=0
        leaf-id:        indent=1  (2 spaces)
          coord/svg:    indent=2  (4 spaces)
            field:      indent=3  (6 spaces)
              subfield: indent=4  (8 spaces)
    """
    type_map = {"Coord": "coord", "Svg": "svg", "Dcl": "dcl"}
    
    lines = [
        'version: "1.0"',
        'domain: "cantidad-de-movimiento"',
        '',
        'leaves:',
        '',
    ]
    
    for leaf_id, leaf_data in data.items():
        lines.append(f"  {leaf_id}:")
        
        for gtype, entry in leaf_data.items():
            yaml_type = type_map.get(gtype, gtype.lower())
            lines.append(f"    {yaml_type}:")
            
            for field, val in entry.items():
                if field in SKIP_FIELDS:
                    continue
                # field values live at indent=4 (8 spaces for sub-keys)
                vdump = _dump_val(val, indent=4)
                if vdump.startswith('\n'):
                    lines.append(f"      {field}:{vdump}")
                else:
                    lines.append(f"      {field}: {vdump}")
        
        lines.append('')
    
    return '\n'.join(lines)


# ─── main ─────────────────────────────────────────────────────────────────────

def find_leaf_dirs(data_root: Path) -> dict:
    """
    Walks data_root looking for directories that contain meta.yaml.
    Returns a mapping { leaf-id: absolute_path }.
    """
    mapping = {}
    for meta in data_root.rglob("meta.yaml"):
        leaf_dir = meta.parent
        mapping[leaf_dir.name] = leaf_dir
    return mapping


def dump_leaf_graficos_yaml(leaf_id, leaf_data):
    """
    Dumps one leaf's graph types as a standalone graficos.yaml.
    Structure:
      version: "1.0"
      leaf: "<leaf-id>"
      coord:
        ...
      svg:
        ...
    """
    type_map = {"Coord": "coord", "Svg": "svg", "Dcl": "dcl"}

    lines = [
        'version: "1.0"',
        f'leaf: "{leaf_id}"',
        '',
    ]

    for gtype, entry in leaf_data.items():
        yaml_type = type_map.get(gtype, gtype.lower())
        lines.append(f"{yaml_type}:")

        for field, val in entry.items():
            if field in SKIP_FIELDS:
                continue
            vdump = _dump_val(val, indent=2)
            if vdump.startswith('\n'):
                lines.append(f"  {field}:{vdump}")
            else:
                lines.append(f"  {field}: {vdump}")

        lines.append('')

    return '\n'.join(lines)


DATA_I18N_SEARCH_ROOTS = [
    "frontend/src/data_v2_i18n/fisica-clasica/mecanica",
    "frontend/src/data_v2_i18n/fisica-clasica",
    "frontend/src/data_v2_i18n",
]


def find_data_root(repo_root: Path, domain: str) -> Path | None:
    """Busca el directorio data_v2_i18n/<...>/<domain> en las rutas conocidas."""
    for search in DATA_I18N_SEARCH_ROOTS:
        candidate = repo_root / search / domain
        if candidate.is_dir():
            return candidate
    # búsqueda recursiva como fallback
    for candidate in (repo_root / "frontend/src/data_v2_i18n").rglob(domain):
        if candidate.is_dir():
            return candidate
    return None


def main():
    repo_root = Path(__file__).resolve().parent.parent.parent

    # Argumento: dominio (ej: "cinematica", "dinamica"). Por defecto cantidad-de-movimiento.
    domain = sys.argv[1] if len(sys.argv) > 1 else "cantidad-de-movimiento"
    # Normalizar: admite rutas completas o solo el nombre del dominio
    domain = Path(domain).name  # por si pasan una ruta completa al index.js

    index_path = repo_root / f"frontend/src/v2/components/graphs/{domain}/index.js"
    monolithic  = repo_root / f"frontend/src/v2/components/graphs/{domain}/graficos.yaml"

    if not index_path.exists():
        print(f"ERROR: No existe {index_path}")
        sys.exit(1)

    data_root = find_data_root(repo_root, domain)
    if data_root is None:
        print(f"ERROR: No se encontró directorio data_v2_i18n para el dominio '{domain}'")
        sys.exit(1)

    print(f"Dominio  : {domain}")
    print(f"Index    : {index_path.relative_to(repo_root)}")
    print(f"Data root: {data_root.relative_to(repo_root)}")

    if monolithic.exists():
        import yaml as _yaml
        mono_data = _yaml.safe_load(monolithic.read_text(encoding="utf-8"))
        data = {}
        for leaf_id, leaf_content in mono_data.get("leaves", {}).items():
            remapped = {}
            for k, v in leaf_content.items():
                remapped[k.capitalize()] = v
            data[leaf_id] = remapped
        print(f"Source: monolithic graficos.yaml ({len(data)} leaves)")
    else:
        js_text = index_path.read_text(encoding="utf-8")
        data = parse_rawgraphs(js_text)
        if data is None:
            print("FAILED to parse rawGraphs. Aborting.")
            sys.exit(1)
        print(f"Source: index.js ({len(data)} leaves)")

    leaf_dirs = find_leaf_dirs(data_root)
    print(f"Found {len(leaf_dirs)} leaf directories in data_v2_i18n\n")

    written = 0
    missing = []

    for leaf_id, leaf_data in data.items():
        if leaf_id not in leaf_dirs:
            missing.append(leaf_id)
            continue
        out_path = leaf_dirs[leaf_id] / "graficos.yaml"
        yaml_content = dump_leaf_graficos_yaml(leaf_id, leaf_data)
        out_path.write_text(yaml_content, encoding="utf-8")
        size_kb = len(yaml_content.encode("utf-8")) / 1024
        print(f"  [{leaf_id}] → {out_path.relative_to(repo_root)} ({size_kb:.1f} KB)")
        written += 1

    print(f"\nWritten: {written} graficos.yaml files")
    if missing:
        print(f"WARNING: {len(missing)} leaf IDs had no matching data_v2_i18n directory:")
        for m in missing:
            print(f"  - {m}")

    if written == len(data) and monolithic.exists():
        monolithic.unlink()
        print(f"\nDeleted monolithic: {monolithic.relative_to(repo_root)}")


if __name__ == "__main__":
    main()
