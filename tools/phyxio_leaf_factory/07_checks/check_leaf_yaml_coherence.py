from __future__ import annotations

import argparse
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

from config import PRUEBAS_ROOT


YAML_FILES = {
    "meta": "meta.yaml",
    "magnitudes": "magnitudes.yaml",
    "formulas": "formulas.yaml",
    "interpretacion": "interpretacion.yaml",
}


def normalize_leaf_id(value: str) -> str:
    return value.strip().lower().replace(" ", "-").replace("_", "-")


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="replace")


def parse_yaml(path: Path) -> tuple[bool, Any, str | None]:
    if yaml is None:
        return False, None, "PYYAML_NOT_INSTALLED"

    try:
        data = yaml.safe_load(read_text(path))
        return True, data, None
    except Exception as exc:
        return False, None, f"{type(exc).__name__}: {exc}"


def as_list(value: Any) -> list[Any]:
    if value is None:
        return []

    if isinstance(value, list):
        return value

    return [value]


def as_dict(value: Any) -> dict[str, Any]:
    if isinstance(value, dict):
        return value

    return {}


def as_str(value: Any) -> str:
    if value is None:
        return ""

    return str(value).strip()


def load_leaf_yaml_files(leaf_dir: Path) -> tuple[dict[str, Any], list[dict[str, Any]]]:
    loaded: dict[str, Any] = {}
    issues: list[dict[str, Any]] = []

    for key, filename in YAML_FILES.items():
        path = leaf_dir / filename

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

        loaded[key] = data

    return loaded, issues


def get_magnitude_ids(magnitudes_doc: dict[str, Any]) -> set[str]:
    ids: set[str] = set()

    for item in as_list(magnitudes_doc.get("magnitudes")):
        if not isinstance(item, dict):
            continue

        magnitude_id = as_str(item.get("id"))

        if magnitude_id:
            ids.add(magnitude_id)

    return ids


def get_formula_ids(formulas_doc: dict[str, Any]) -> set[str]:
    ids: set[str] = set()

    for item in as_list(formulas_doc.get("formulas")):
        if not isinstance(item, dict):
            continue

        formula_id = as_str(item.get("id"))

        if formula_id:
            ids.add(formula_id)

    return ids


def check_meta_id(
    leaf_id: str,
    meta_doc: dict[str, Any],
) -> list[dict[str, Any]]:
    issues: list[dict[str, Any]] = []

    meta_id = as_str(meta_doc.get("id"))

    if meta_id != leaf_id:
        issues.append(
            {
                "file": "meta.yaml",
                "type": "META_ID_MISMATCH",
                "message": (
                    "meta.id no coincide con el leaf-id. "
                    "Esperado: " + leaf_id + ". Encontrado: " + meta_id
                ),
            }
        )

    return issues


def check_duplicate_ids(
    filename: str,
    section_name: str,
    items: list[Any],
) -> list[dict[str, Any]]:
    issues: list[dict[str, Any]] = []
    seen: set[str] = set()

    for index, item in enumerate(items):
        if not isinstance(item, dict):
            issues.append(
                {
                    "file": filename,
                    "type": "INVALID_LIST_ITEM",
                    "message": (
                        section_name
                        + "["
                        + str(index)
                        + "] no es un objeto YAML."
                    ),
                }
            )
            continue

        item_id = as_str(item.get("id"))

        if not item_id:
            issues.append(
                {
                    "file": filename,
                    "type": "MISSING_ID",
                    "message": (
                        section_name
                        + "["
                        + str(index)
                        + "] no tiene id."
                    ),
                }
            )
            continue

        if item_id in seen:
            issues.append(
                {
                    "file": filename,
                    "type": "DUPLICATE_ID",
                    "message": "ID duplicado en " + section_name + ": " + item_id,
                }
            )

        seen.add(item_id)

    return issues


def check_formula_default(
    formulas_doc: dict[str, Any],
    formula_ids: set[str],
) -> list[dict[str, Any]]:
    issues: list[dict[str, Any]] = []

    ui = as_dict(formulas_doc.get("ui"))
    default_formula = as_str(ui.get("default_formula"))

    if not default_formula:
        issues.append(
            {
                "file": "formulas.yaml",
                "type": "MISSING_DEFAULT_FORMULA",
                "message": "ui.default_formula está vacío.",
            }
        )
        return issues

    if default_formula not in formula_ids:
        issues.append(
            {
                "file": "formulas.yaml",
                "type": "UNKNOWN_DEFAULT_FORMULA",
                "message": (
                    "ui.default_formula apunta a una fórmula inexistente: "
                    + default_formula
                ),
            }
        )

    return issues


def check_formula_magnitude_refs(
    formulas_doc: dict[str, Any],
    magnitude_ids: set[str],
) -> list[dict[str, Any]]:
    issues: list[dict[str, Any]] = []

    for formula in as_list(formulas_doc.get("formulas")):
        if not isinstance(formula, dict):
            continue

        formula_id = as_str(formula.get("id")) or "<sin_id>"

        for magnitude_ref in as_list(formula.get("magnitudes")):
            ref = as_str(magnitude_ref)

            if not ref:
                continue

            if ref not in magnitude_ids:
                issues.append(
                    {
                        "file": "formulas.yaml",
                        "type": "UNKNOWN_MAGNITUDE_REF",
                        "message": (
                            "La fórmula "
                            + formula_id
                            + " usa una magnitud inexistente: "
                            + ref
                        ),
                    }
                )

    return issues


def check_formula_rearrangements(
    formulas_doc: dict[str, Any],
    magnitude_ids: set[str],
) -> list[dict[str, Any]]:
    issues: list[dict[str, Any]] = []

    for formula in as_list(formulas_doc.get("formulas")):
        if not isinstance(formula, dict):
            continue

        formula_id = as_str(formula.get("id")) or "<sin_id>"

        for rearrangement in as_list(formula.get("rearrangements")):
            if not isinstance(rearrangement, dict):
                continue

            target = as_str(rearrangement.get("target"))

            if not target:
                issues.append(
                    {
                        "file": "formulas.yaml",
                        "type": "MISSING_REARRANGEMENT_TARGET",
                        "message": (
                            "La fórmula "
                            + formula_id
                            + " contiene un despeje sin target."
                        ),
                    }
                )
                continue

            if target not in magnitude_ids:
                issues.append(
                    {
                        "file": "formulas.yaml",
                        "type": "UNKNOWN_REARRANGEMENT_TARGET",
                        "message": (
                            "La fórmula "
                            + formula_id
                            + " tiene un despeje hacia una magnitud inexistente: "
                            + target
                        ),
                    }
                )

    return issues


def parse_dependency_refs(value: Any) -> list[str]:
    """
    Acepta varias formas porque el contrato puede venir de plantilla:

    dependencies:
      formulas: "segunda_ley_newton"

    dependencies:
      formulas:
        - segunda_ley_newton

    dependencies:
      formulas: "segunda_ley_newton, otra_formula"
    """

    refs: list[str] = []

    if value is None:
        return refs

    if isinstance(value, list):
        for item in value:
            ref = as_str(item)
            if ref:
                refs.append(ref)
        return refs

    text = as_str(value)

    if not text:
        return refs

    if "," in text:
        for chunk in text.split(","):
            ref = chunk.strip()
            if ref:
                refs.append(ref)
        return refs

    refs.append(text)
    return refs


def check_interpretacion_dependencies(
    interpretacion_doc: dict[str, Any],
) -> list[dict[str, Any]]:
    issues: list[dict[str, Any]] = []

    dependencies = as_dict(interpretacion_doc.get("dependencies"))

    use_formulas = dependencies.get("use_formulas", False)

    if not isinstance(use_formulas, bool):
        issues.append(
            {
                "file": "interpretacion.yaml",
                "type": "INVALID_DEPENDENCY_FLAG",
                "message": "dependencies.use_formulas debe ser booleano: true o false",
            }
        )

    use_magnitudes = dependencies.get("use_magnitudes", False)

    if not isinstance(use_magnitudes, bool):
        issues.append(
            {
                "file": "interpretacion.yaml",
                "type": "INVALID_DEPENDENCY_FLAG",
                "message": "dependencies.use_magnitudes debe ser booleano: true o false",
            }
        )

    return issues


def check_interpretacion_targets(
    interpretacion_doc: dict[str, Any],
    formula_ids: set[str],
    magnitude_ids: set[str],
) -> list[dict[str, Any]]:
    issues: list[dict[str, Any]] = []

    targets = interpretacion_doc.get("targets")

    if targets is None:
        return issues

    if not isinstance(targets, dict):
        issues.append(
            {
                "file": "interpretacion.yaml",
                "type": "TARGETS_NOT_DICT",
                "message": "targets debe ser un diccionario.",
            }
        )
        return issues

    allowed_ids = magnitude_ids | formula_ids

    for target_id, target_body in targets.items():
        target_key = as_str(target_id)

        if not target_key:
            issues.append(
                {
                    "file": "interpretacion.yaml",
                    "type": "EMPTY_TARGET_ID",
                    "message": "targets contiene una clave vacía.",
                }
            )
            continue

        if target_key == "target_id":
            issues.append(
                {
                    "file": "interpretacion.yaml",
                    "type": "PLACEHOLDER_TARGET_ID",
                    "message": (
                        "targets todavía conserva la clave placeholder target_id. "
                        "Debe sustituirse por una magnitud o fórmula real."
                    ),
                }
            )
            continue

        if target_key not in allowed_ids:
            issues.append(
                {
                    "file": "interpretacion.yaml",
                    "type": "UNKNOWN_TARGET_ID",
                    "message": (
                        "targets contiene una clave que no existe como magnitud "
                        "ni fórmula: "
                        + target_key
                    ),
                }
            )

        if not isinstance(target_body, dict):
            issues.append(
                {
                    "file": "interpretacion.yaml",
                    "type": "TARGET_BODY_NOT_DICT",
                    "message": "El target " + target_key + " no contiene un objeto.",
                }
            )

    return issues


def run_yaml_coherence_check(leaf_id: str) -> dict[str, Any]:
    normalized_leaf_id = normalize_leaf_id(leaf_id)
    leaf_dir = PRUEBAS_ROOT / normalized_leaf_id

    issues: list[dict[str, Any]] = []

    if not leaf_dir.exists():
        issues.append(
            {
                "file": None,
                "type": "MISSING_LEAF_DIR",
                "message": "No existe la carpeta del leaf: " + str(leaf_dir),
            }
        )

        return {
            "ok": False,
            "leaf_id": normalized_leaf_id,
            "leaf_dir": str(leaf_dir),
            "issues": issues,
        }

    docs, load_issues = load_leaf_yaml_files(leaf_dir)
    issues.extend(load_issues)

    if load_issues:
        return {
            "ok": False,
            "leaf_id": normalized_leaf_id,
            "leaf_dir": str(leaf_dir),
            "issues": issues,
        }

    meta_doc = docs["meta"]
    magnitudes_doc = docs["magnitudes"]
    formulas_doc = docs["formulas"]
    interpretacion_doc = docs["interpretacion"]

    magnitudes = as_list(magnitudes_doc.get("magnitudes"))
    formulas = as_list(formulas_doc.get("formulas"))

    magnitude_ids = get_magnitude_ids(magnitudes_doc)
    formula_ids = get_formula_ids(formulas_doc)

    issues.extend(check_meta_id(normalized_leaf_id, meta_doc))

    issues.extend(
        check_duplicate_ids(
            filename="magnitudes.yaml",
            section_name="magnitudes",
            items=magnitudes,
        )
    )

    issues.extend(
        check_duplicate_ids(
            filename="formulas.yaml",
            section_name="formulas",
            items=formulas,
        )
    )

    issues.extend(check_formula_default(formulas_doc, formula_ids))
    issues.extend(check_formula_magnitude_refs(formulas_doc, magnitude_ids))
    issues.extend(check_formula_rearrangements(formulas_doc, magnitude_ids))

    issues.extend(
        check_interpretacion_dependencies(
            interpretacion_doc=interpretacion_doc,
        )
    )

    issues.extend(
        check_interpretacion_targets(
            interpretacion_doc=interpretacion_doc,
            formula_ids=formula_ids,
            magnitude_ids=magnitude_ids,
        )
    )

    return {
        "ok": not issues,
        "leaf_id": normalized_leaf_id,
        "leaf_dir": str(leaf_dir),
        "issues": issues,
        "magnitude_ids": sorted(magnitude_ids),
        "formula_ids": sorted(formula_ids),
    }


def print_report(report: dict[str, Any]) -> None:
    print()
    print("PHYXIO LEAF YAML COHERENCE CHECK")
    print("================================")
    print("Leaf ID:  " + report["leaf_id"])
    print("Leaf dir: " + report["leaf_dir"])
    print()

    if report["ok"]:
        print("[OK] Los YAML del leaf son coherentes entre sí.")
        print()
        print("Magnitudes detectadas:")
        for item in report.get("magnitude_ids", []):
            print(" - " + item)

        print()
        print("Fórmulas detectadas:")
        for item in report.get("formula_ids", []):
            print(" - " + item)

        print()
        return

    print("[FAIL] Los YAML del leaf tienen incoherencias.")
    print()

    grouped: dict[str, list[dict[str, Any]]] = {}

    for issue in report["issues"]:
        filename = issue.get("file") or "_general"
        grouped.setdefault(filename, []).append(issue)

    for filename, issues in grouped.items():
        print(filename + ":")

        for issue in issues:
            issue_type = issue.get("type", "UNKNOWN")
            message = issue.get("message", "")
            print(" - [" + issue_type + "] " + message)

        print()


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Comprueba coherencia cruzada entre meta, magnitudes, formulas e interpretacion."
    )

    parser.add_argument(
        "--leaf-id",
        required=True,
        help="ID del leaf. Ejemplo: segunda-ley-fuerza-masa",
    )

    return parser.parse_args()


def main() -> None:
    args = parse_args()

    report = run_yaml_coherence_check(
        leaf_id=args.leaf_id,
    )

    print_report(report)

    if not report["ok"]:
        raise SystemExit(1)


if __name__ == "__main__":
    main()