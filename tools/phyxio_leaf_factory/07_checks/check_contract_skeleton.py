import argparse
import json
import re
import sys
from pathlib import Path
from typing import Any

try:
    import yaml
except ImportError:
    yaml = None


CURRENT_FILE = Path(__file__).resolve()
FACTORY_ROOT = CURRENT_FILE.parents[1]

if str(FACTORY_ROOT) not in sys.path:
    sys.path.insert(0, str(FACTORY_ROOT))

from config import PRUEBAS_ROOT, REQUIRED_LEAF_FILES


DEFAULT_CONTRACT_PATH = FACTORY_ROOT / "02_templates" / "extracted_contract.json"


# Claves YAML que en las plantillas representan listas de objetos.
# El checker debe leerlas como:
# magnitudes[]
# formulas[]
# formulas[].rearrangements[]
# targets[]
# targets[].coherence_rules[]
LIST_PATHS = {
    "magnitudes",
    "formulas",
    "formulas[].rearrangements",

    # Reglas por target en interpretacion.yaml v5.1.
    "targets.target_id.summary_rules",
    "targets.target_id.physical_reading_rules",
    "targets.target_id.coherence_rules",
    "targets.target_id.model_validity_rules",
    "targets.target_id.graph_rules",
    "targets.target_id.likely_errors",
    "targets.target_id.next_step_rules",
    "targets.target_id.physical_intuition",
    "targets.target_id.limiting_cases",
}


GROUPING_KEYS = {
    "id",
    "target",
}


PLACEHOLDER_DICT_KEYS = {
    "target_id",
}


TARGET_CHILD_KEYS = {
    "enabled",
    "magnitude_type",
    "semantic_role",
    "summary_rules",
    "physical_reading_rules",
    "coherence_rules",
    "model_validity_rules",
    "graph_rules",
    "likely_errors",
    "next_step_rules",
    "physical_intuition",
    "limiting_cases",
    "sign_convention_reminder",
}


YAML_FILES = [
    "meta.yaml",
    "magnitudes.yaml",
    "formulas.yaml",
    "interpretacion.yaml",
]


MARKDOWN_FILES = [
    "teoria.md",
    "teoria.en.md",
    "modelos.md",
    "modelos.en.md",
    "errores.md",
    "errores.en.md",
    "ejemplos.md",
    "ejemplos.en.md",
    "aplicaciones.md",
    "aplicaciones.en.md",
    "historia.md",
    "historia.en.md",
]


def normalize_leaf_id(value: str) -> str:
    return value.strip().lower().replace(" ", "-").replace("_", "-")


def read_json(path: Path) -> dict[str, Any]:
    return json.loads(path.read_text(encoding="utf-8"))


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="replace")


def normalize_heading(value: str) -> str:
    value = value.strip().lower()
    value = re.sub(r"\s+", " ", value)
    return value


def extract_markdown_h1(text: str) -> list[str]:
    result = []

    for line in text.splitlines():
        match = re.match(r"^#\s+(.+?)\s*$", line)
        if match:
            result.append(match.group(1).strip())

    return result


def extract_markdown_h2(text: str) -> list[str]:
    result = []

    for line in text.splitlines():
        match = re.match(r"^##\s+(.+?)\s*$", line)
        if match:
            result.append(match.group(1).strip())

    return result


def parse_yaml(path: Path) -> tuple[bool, Any, str | None]:
    if yaml is None:
        return False, None, "PYyaml_NOT_INSTALLED"

    try:
        data = yaml.safe_load(read_text(path))
        return True, data, None
    except Exception as exc:
        return False, None, f"{type(exc).__name__}: {exc}"


def check_required_files(leaf_dir: Path) -> list[dict[str, Any]]:
    issues = []

    for filename in REQUIRED_LEAF_FILES:
        path = leaf_dir / filename

        if not path.exists():
            issues.append(
                {
                    "file": filename,
                    "type": "MISSING_FILE",
                    "message": "Archivo obligatorio no encontrado.",
                }
            )
            continue

        if not read_text(path).strip():
            issues.append(
                {
                    "file": filename,
                    "type": "EMPTY_FILE",
                    "message": "Archivo obligatorio vacío.",
                }
            )

    return issues


def normalize_yaml_path(path: str) -> str:
    """
    Normaliza rutas YAML del contrato según la plantilla real extraída.

    Listas reales:
    - magnitudes
    - formulas
    - formulas[].rearrangements
    - targets.target_id.*_rules
    - targets.target_id.likely_errors

    No son listas:
    - dependencies.use_magnitudes
    - dependencies.use_formulas
    - result_blocks.graph_reading
    - result_blocks.likely_errors
    - targets
    - targets.target_id
    """

    clean_path = str(path).strip()

    if not clean_path:
        return clean_path

    parts = clean_path.split(".")

    # Compatibilidad con contratos extraídos antes de soportar <target_id>.
    # Si el extractor produjo targets.summary_rules, lo convertimos a
    # targets.target_id.summary_rules para validar contra cualquier target real.
    if (
        len(parts) >= 2
        and parts[0] == "targets"
        and parts[1] in TARGET_CHILD_KEYS
    ):
        parts = ["targets", "target_id"] + parts[1:]
    normalized_parts: list[str] = []

    index = 0

    while index < len(parts):
        raw_part = parts[index].strip()

        if not raw_part:
            index += 1
            continue

        clean_part = raw_part[:-2] if raw_part.endswith("[]") else raw_part

        normalized_parts.append(clean_part)

        current_path = ".".join(normalized_parts)

        if current_path in LIST_PATHS:
            normalized_parts[-1] = clean_part + "[]"

            if index + 1 < len(parts):
                next_raw = parts[index + 1].strip()
                next_clean = next_raw[:-2] if next_raw.endswith("[]") else next_raw

                # Corrige:
                # coherence_rules.id.status -> coherence_rules[].status
                # graph_rules.id.text.es -> graph_rules[].text.es
                if next_clean in GROUPING_KEYS and index + 2 < len(parts):
                    index += 2
                    continue

        index += 1

    return ".".join(normalized_parts)


def get_nested_path(data: Any, dotted_path: str) -> tuple[bool, Any]:
    """
    Comprueba si existe una ruta YAML.

    Este checker valida estructura, no valores.

    Soporta:
    - version
    - ui.default_formula
    - magnitudes[].id
    - formulas[].rearrangements[].equation
    - targets.target_id.semantic_role.es

    Importante:
    `target_id` puede ser un placeholder de plantilla.
    Si no existe literalmente, se acepta cualquier primera clave real dentro de targets.
    """

    normalized_path = normalize_yaml_path(dotted_path)
    parts = normalized_path.split(".")

    current = data

    for index, part in enumerate(parts):
        is_last = index == len(parts) - 1
        is_list_part = part.endswith("[]")
        clean_part = part[:-2] if is_list_part else part

        if isinstance(current, dict):
            if clean_part not in current:
                if clean_part in PLACEHOLDER_DICT_KEYS:
                    if not current:
                        return False, None

                    first_key = next(iter(current.keys()))
                    current = current[first_key]
                    continue

                return False, None

            current = current[clean_part]

            if is_list_part:
                if not isinstance(current, list):
                    return False, None

                if not current:
                    if is_last:
                        return True, current
                    return False, None

                current = current[0]

            continue

        if isinstance(current, list):
            if not current:
                if is_last:
                    return True, current
                return False, None

            current = current[0]

            if not isinstance(current, dict):
                return False, None

            if clean_part not in current:
                if clean_part in PLACEHOLDER_DICT_KEYS:
                    if not current:
                        return False, None

                    first_key = next(iter(current.keys()))
                    current = current[first_key]
                    continue

                return False, None

            current = current[clean_part]

            if is_list_part:
                if not isinstance(current, list):
                    return False, None

                if not current:
                    if is_last:
                        return True, current
                    return False, None

                current = current[0]

            continue

        return False, None

    return True, current


def check_yaml_files(leaf_dir: Path, contract: dict[str, Any]) -> list[dict[str, Any]]:
    issues = []

    for filename in YAML_FILES:
        path = leaf_dir / filename
        info = contract.get("yaml_files", {}).get(filename, {})
        required_paths = info.get("possible_required_paths", [])

        if not path.exists():
            issues.append(
                {
                    "file": filename,
                    "type": "MISSING_FILE",
                    "message": "Archivo YAML no encontrado.",
                }
            )
            continue

        ok, data, error = parse_yaml(path)

        if not ok:
            issues.append(
                {
                    "file": filename,
                    "type": "YAML_PARSE_ERROR",
                    "message": error,
                }
            )
            continue

        if not isinstance(data, dict):
            issues.append(
                {
                    "file": filename,
                    "type": "YAML_ROOT_NOT_DICT",
                    "message": "La raíz YAML no es un diccionario.",
                }
            )
            continue

        for required_path in required_paths:
            normalized_path = normalize_yaml_path(required_path)
            exists, _ = get_nested_path(data, normalized_path)

            if not exists:
                issues.append(
                    {
                        "file": filename,
                        "type": "MISSING_YAML_PATH",
                        "path": normalized_path,
                        "original_path": required_path,
                        "message": "Falta la ruta YAML obligatoria: " + normalized_path,
                    }
                )

    return issues


def expected_markdown_headings(contract: dict[str, Any], filename: str) -> list[str]:
    info = contract.get("markdown_files", {}).get(filename, {})
    candidates = info.get("required_headings_candidates", [])

    headings = []

    for item in candidates:
        title = item.get("title", "").strip()

        if not title:
            continue

        normalized = title.lower()

        if "título del subtema" in normalized:
            continue

        if "titulo del subtema" in normalized:
            continue

        if "subtopic title" in normalized:
            continue

        if "title of the subtopic" in normalized:
            continue

        headings.append(title)

    return headings


def check_markdown_files(leaf_dir: Path, contract: dict[str, Any]) -> list[dict[str, Any]]:
    issues = []

    for filename in MARKDOWN_FILES:
        path = leaf_dir / filename

        if not path.exists():
            issues.append(
                {
                    "file": filename,
                    "type": "MISSING_FILE",
                    "message": "Archivo Markdown no encontrado.",
                }
            )
            continue

        text = read_text(path)

        h1 = extract_markdown_h1(text)
        h2 = extract_markdown_h2(text)

        if len(h1) != 1:
            issues.append(
                {
                    "file": filename,
                    "type": "INVALID_H1_COUNT",
                    "message": f"Debe haber exactamente un H1. Encontrados: {len(h1)}",
                }
            )

        expected = expected_markdown_headings(contract, filename)

        found_normalized = {normalize_heading(item) for item in h2}

        for heading in expected:
            if normalize_heading(heading) not in found_normalized:
                issues.append(
                    {
                        "file": filename,
                        "type": "MISSING_MARKDOWN_HEADING",
                        "heading": heading,
                        "message": f"Falta encabezado obligatorio: {heading}",
                    }
                )

        title_placeholder_pattern = (
            r"TODO_IA_.*TITULO_DEL_SUBTEMA|"
            r"TODO_IA_.*TITLE_OF_THE_SUBTOPIC|"
            r"TODO_IA_.*SUBTOPIC_TITLE"
        )

        if re.search(title_placeholder_pattern, text, re.IGNORECASE):
            issues.append(
                {
                    "file": filename,
                    "type": "GHOST_TITLE_PLACEHOLDER",
                    "message": "Aparece un placeholder de título tratado como contenido.",
                }
            )

    return issues


def check_contract_skeleton(leaf_id: str, contract_path: Path) -> dict[str, Any]:
    leaf_id = normalize_leaf_id(leaf_id)
    leaf_dir = PRUEBAS_ROOT / leaf_id

    if not contract_path.exists():
        raise FileNotFoundError(f"No existe el contrato: {contract_path}")

    contract = read_json(contract_path)

    issues = []

    if not leaf_dir.exists():
        issues.append(
            {
                "file": None,
                "type": "MISSING_LEAF_DIR",
                "message": f"No existe la carpeta del leaf: {leaf_dir}",
            }
        )

        return {
            "leaf_id": leaf_id,
            "leaf_dir": str(leaf_dir),
            "contract_path": str(contract_path),
            "ok": False,
            "issues": issues,
        }

    issues.extend(check_required_files(leaf_dir))
    issues.extend(check_yaml_files(leaf_dir, contract))
    issues.extend(check_markdown_files(leaf_dir, contract))

    return {
        "leaf_id": leaf_id,
        "leaf_dir": str(leaf_dir),
        "contract_path": str(contract_path),
        "ok": not issues,
        "issues": issues,
    }


def print_report(report: dict[str, Any]) -> None:
    print()
    print("PHYXIO CONTRACT SKELETON CHECK")
    print("=" * 36)
    print(f"Leaf ID:  {report['leaf_id']}")
    print(f"Leaf dir: {report['leaf_dir']}")
    print(f"Contrato: {report['contract_path']}")
    print()

    if report["ok"]:
        print("[OK] El skeleton cumple el contrato extraído.")
        return

    print("[FAIL] El skeleton no cumple el contrato.")
    print()

    grouped: dict[str, list[dict[str, Any]]] = {}

    for issue in report["issues"]:
        filename = issue.get("file") or "_general"
        grouped.setdefault(filename, []).append(issue)

    for filename, issues in grouped.items():
        print(f"{filename}:")
        for issue in issues:
            issue_type = issue.get("type", "UNKNOWN")
            message = issue.get("message", "")
            original_path = issue.get("original_path")
            normalized_path = issue.get("path")

            if original_path and normalized_path and original_path != normalized_path:
                print(
                    f" - [{issue_type}] {message} "
                    f"(original: {original_path})"
                )
            else:
                print(f" - [{issue_type}] {message}")

        print()


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Comprueba que el skeleton del leaf cumple extracted_contract.json."
    )

    parser.add_argument(
        "--leaf-id",
        required=True,
        help="ID del leaf. Ejemplo: segunda-ley-fuerza-masa",
    )

    parser.add_argument(
        "--contract",
        default=str(DEFAULT_CONTRACT_PATH),
        help="Ruta a extracted_contract.json.",
    )

    args = parser.parse_args()

    report = check_contract_skeleton(
        leaf_id=args.leaf_id,
        contract_path=Path(args.contract).resolve(),
    )

    print_report(report)

    if not report["ok"]:
        raise SystemExit(1)


if __name__ == "__main__":
    main()