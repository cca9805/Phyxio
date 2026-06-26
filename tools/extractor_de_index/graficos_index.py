import os
import re
import json5
import yaml

INPUT_FILE = "extractor_de_index/index_file/index.js"
OUTPUT_DIR = "extractor_de_index/graficos_index/cantidad-de-movimiento"


def ensure_output_dir(path):
    os.makedirs(path, exist_ok=True)


def find_matching_brace(text, open_pos):
    """
    Devuelve la posición de la llave de cierre correspondiente a text[open_pos].
    Respeta strings con comillas simples, dobles y template strings.
    """
    depth = 0
    in_string = None
    escape = False

    for i in range(open_pos, len(text)):
        ch = text[i]

        if in_string:
            if escape:
                escape = False
                continue

            if ch == "\\":
                escape = True
                continue

            if ch == in_string:
                in_string = None

            continue

        if ch in ("'", '"', "`"):
            in_string = ch
            continue

        if ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                return i

    raise ValueError(f"No se encontró llave de cierre para la posición {open_pos}")


def extract_leaf_blocks(js_text):
    """
    Extrae bloques del tipo:
    "momento-lineal": { ... }

    No usa regex para cerrar el bloque: cuenta llaves.
    """
    leafs = {}

    pattern = re.compile(r'^\s*"([^"]+)"\s*:\s*\{', re.MULTILINE)

    for match in pattern.finditer(js_text):
        leaf_name = match.group(1)
        open_brace_pos = js_text.find("{", match.start())
        close_brace_pos = find_matching_brace(js_text, open_brace_pos)

        block = js_text[open_brace_pos:close_brace_pos + 1]
        leafs[leaf_name] = block

    return leafs


def remove_js_comments(text):
    """
    Elimina comentarios // y /* */ sin tocar strings.
    """
    result = []
    i = 0
    in_string = None
    escape = False

    while i < len(text):
        ch = text[i]
        nxt = text[i + 1] if i + 1 < len(text) else ""

        if in_string:
            result.append(ch)

            if escape:
                escape = False
            elif ch == "\\":
                escape = True
            elif ch == in_string:
                in_string = None

            i += 1
            continue

        if ch in ("'", '"', "`"):
            in_string = ch
            result.append(ch)
            i += 1
            continue

        if ch == "/" and nxt == "/":
            i += 2
            while i < len(text) and text[i] not in "\r\n":
                i += 1
            continue

        if ch == "/" and nxt == "*":
            i += 2
            while i + 1 < len(text) and not (text[i] == "*" and text[i + 1] == "/"):
                i += 1
            i += 2
            continue

        result.append(ch)
        i += 1

    return "".join(result)


def remove_component_lines(block):
    """
    Elimina líneas tipo:
    component: MomentumCoord,
    component: SomeComponent,
    """
    return re.sub(
        r'^\s*component\s*:\s*[A-Za-z_$][A-Za-z0-9_$]*\s*,?\s*$',
        "",
        block,
        flags=re.MULTILINE,
    )


def remove_import_export_noise(js_text):
    """
    No modifica los bloques internos, pero ayuda si el index tiene export/import alrededor.
    """
    js_text = re.sub(r"^\s*import\s+.*?;\s*$", "", js_text, flags=re.MULTILINE)
    js_text = re.sub(r"^\s*export\s+default\s+", "", js_text, flags=re.MULTILINE)
    return js_text


def clean_js_block(block):
    """
    Limpieza mínima.
    Importante: NO convertir comillas simples, NO citar claves a mano,
    NO tocar strings internos. Eso lo gestiona json5.
    """
    block = remove_js_comments(block)
    block = remove_component_lines(block)
    return block


def parse_leaf_json(block, leaf_name):
    try:
        return json5.loads(block)
    except Exception as e:
        print("\n❌ ERROR PARSEANDO LEAF:", leaf_name)
        print(str(e))

        debug_dir = "_debug_graficos_index"
        ensure_output_dir(debug_dir)
        debug_path = os.path.join(debug_dir, f"{leaf_name}.json5_debug.txt")

        with open(debug_path, "w", encoding="utf-8") as f:
            f.write(block)

        print(f"\nBloque limpio guardado para revisar en: {debug_path}")
        raise


def save_leaf(leaf_name, leaf_data, output_dir):
    leaf_dir = os.path.join(output_dir, leaf_name)
    ensure_output_dir(leaf_dir)

    output_path = os.path.join(leaf_dir, "graficos.yaml")

    final = {
        "version": "1.0",
        "leaf": leaf_name,
    }

    if "Coord" in leaf_data:
        final["coord"] = leaf_data["Coord"]

    if "Dcl" in leaf_data:
        final["dcl"] = leaf_data["Dcl"]

    if "Svg" in leaf_data:
        final["svg"] = leaf_data["Svg"]

    with open(output_path, "w", encoding="utf-8") as f:
        yaml.safe_dump(
            final,
            f,
            allow_unicode=True,
            sort_keys=False,
            default_flow_style=False,
        )

    print(f"✔ graficos.yaml exportado: {output_path}")


def split_leafs(input_file, output_dir):
    ensure_output_dir(output_dir)

    with open(input_file, "r", encoding="utf-8") as f:
        js_text = f.read()

    js_text = remove_import_export_noise(js_text)
    leaf_blocks = extract_leaf_blocks(js_text)

    print("LEAFS ENCONTRADOS:", list(leaf_blocks.keys()))

    for leaf_name, block in leaf_blocks.items():
        cleaned = clean_js_block(block)
        leaf_json = parse_leaf_json(cleaned, leaf_name)
        save_leaf(leaf_name, leaf_json, output_dir)

    print("\nProceso completado.")


if __name__ == "__main__":
    split_leafs(INPUT_FILE, OUTPUT_DIR)