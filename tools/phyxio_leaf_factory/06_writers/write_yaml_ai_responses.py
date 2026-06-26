from __future__ import annotations

import argparse
import shutil
import sys
from datetime import datetime
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


DEFAULT_RESPONSES_ROOT = FACTORY_ROOT / "05_ai_responses"
DEFAULT_BACKUPS_ROOT = FACTORY_ROOT / "10_outputs" / "backups"


RESPONSE_TO_TARGET = {
    "01_meta.response.yaml": "meta.yaml",
    "02_magnitudes.response.yaml": "magnitudes.yaml",
    "03_formulas.response.yaml": "formulas.yaml",
    "04_graficos.response.yaml": "graficos.yaml",
    "05_interpretacion.response.yaml": "interpretacion.yaml",
}


PLACEHOLDER_MARKERS = [
    "Pega aquí la respuesta YAML devuelta por la IA.",
    "No pegues bloques markdown.",
    "Solo YAML válido.",
    "Phyxio Leaf Factory | AI YAML response",
]

# Líneas de header que deben eliminarse antes de escribir al leaf
HEADER_LINES_TO_SKIP = [
    "# ------------------------------------------------------------",
    "# Phyxio Leaf Factory | AI YAML response",
    "# ------------------------------------------------------------",
    "# Leaf ID:",
    "# Target response file:",
    "#",
    "# Pega aquí la respuesta YAML devuelta por la IA.",
    "# No pegues bloques markdown.",  # Header antiguo (compatibilidad)
    "# No pegues bloques bloques markdown",  # Nuevo header
    "# No pegues explicaciones.",  # Header antiguo (compatibilidad)
    "# No pegues explicaciones, solo YAML válido.",  # Nuevo header
    "# Solo YAML válido.",  # Header antiguo (compatibilidad)
    "# ------------------------------------------------------------",
    "# PENDING_AI_RESPONSE",
]


FORBIDDEN_MARKERS = [
    "```",
    "Aquí tienes",
    "A continuación",
    "Explicación",
]


def normalize_leaf_id(value: str) -> str:
    return value.strip().lower().replace(" ", "-").replace("_", "-")


def normalize_dependencies(data: Any) -> Any:
    """Normaliza dependencies.formulas y dependencies.magnitudes de CSV string a array."""
    if not isinstance(data, dict):
        return data
    
    deps = data.get("dependencies")
    if not isinstance(deps, dict):
        return data
    
    # Normalizar formulas: si es string CSV, convertir a lista
    formulas = deps.get("formulas")
    if isinstance(formulas, str) and "," in formulas:
        deps["formulas"] = [f.strip() for f in formulas.split(",") if f.strip()]
    
    # Normalizar magnitudes: si es string CSV, convertir a lista
    magnitudes = deps.get("magnitudes")
    if isinstance(magnitudes, str) and "," in magnitudes:
        deps["magnitudes"] = [m.strip() for m in magnitudes.split(",") if m.strip()]
    
    return data


def clean_header_lines(content: str) -> str:
    """Elimina líneas del header placeholder, manteniendo solo el YAML válido."""
    lines = content.splitlines()
    cleaned_lines = []

    for line in lines:
        # Si la línea coincide con alguna del header placeholder, saltarla
        is_header_line = any(line.strip().startswith(marker) for marker in HEADER_LINES_TO_SKIP)
        if is_header_line:
            continue
        cleaned_lines.append(line)

    # Eliminar líneas vacías al inicio
    while cleaned_lines and not cleaned_lines[0].strip():
        cleaned_lines.pop(0)

    return "\n".join(cleaned_lines)


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="replace")


def write_text(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")


def parse_yaml_text(content: str, filename: str) -> tuple[bool, Any, str | None]:
    if yaml is None:
        return False, None, "PYyaml_NOT_INSTALLED"

    try:
        data = yaml.safe_load(content)
        return True, data, None
    except Exception as exc:
        return False, None, f"YAML inválido en {filename}: {type(exc).__name__}: {exc}"


def contains_placeholder(content: str) -> bool:
    if not content.strip():
        return True

    for marker in PLACEHOLDER_MARKERS:
        if marker in content:
            return True

    return False


def find_forbidden_markers(content: str) -> list[str]:
    found = []
    # Extraer solo líneas que no son comentarios del header para buscar marcadores prohibidos
    lines = content.split('\n')
    yaml_content_lines = []
    for line in lines:
        stripped = line.strip()
        # Ignorar líneas de comentario del header
        if stripped.startswith('#'):
            continue
        yaml_content_lines.append(line)
    
    yaml_content = '\n'.join(yaml_content_lines)
    
    for marker in FORBIDDEN_MARKERS:
        if marker in yaml_content:
            found.append(marker)

    return found


def ensure_leaf_dir_exists(leaf_dir: Path) -> None:
    if not leaf_dir.exists():
        raise FileNotFoundError("No existe la carpeta del leaf: " + str(leaf_dir))

    if not leaf_dir.is_dir():
        raise NotADirectoryError("La ruta del leaf no es una carpeta: " + str(leaf_dir))


def ensure_responses_dir_exists(responses_dir: Path) -> None:
    if not responses_dir.exists():
        raise FileNotFoundError(
            "No existe la carpeta de respuestas IA: " + str(responses_dir)
        )

    if not responses_dir.is_dir():
        raise NotADirectoryError(
            "La ruta de respuestas IA no es una carpeta: " + str(responses_dir)
        )


def validate_response_file(path: Path, allow_pending: bool = True) -> list[str]:
    errors = []

    if not path.exists():
        return ["No existe el archivo de respuesta: " + path.name]

    content = read_text(path)

    # Detectar si es placeholder por ausencia de YAML válido
    has_valid_yaml = False
    if yaml is not None:
        try:
            data = yaml.safe_load(content)
            if isinstance(data, dict) and data:
                has_valid_yaml = True
        except yaml.YAMLError:
            pass
    
    # Si no tiene YAML válido y allow_pending=True, es válido (pendiente)
    if allow_pending and not has_valid_yaml:
        return []  # Archivo pendiente, no es error

    forbidden = find_forbidden_markers(content)

    if forbidden:
        errors.append(
            path.name
            + " contiene marcadores no permitidos: "
            + ", ".join(forbidden)
        )

    # Intentar parsear YAML
    ok, data, error = parse_yaml_text(content, path.name)

    if not ok:
        errors.append(error or ("YAML inválido en " + path.name))
        return errors

    if not isinstance(data, dict):
        errors.append(path.name + " no contiene un objeto YAML raíz.")

    return errors


def validate_all_responses(responses_dir: Path) -> list[str]:
    errors = []

    for response_filename in RESPONSE_TO_TARGET:
        path = responses_dir / response_filename
        errors.extend(validate_response_file(path))

    return errors


def create_backup_dir(
    leaf_id: str,
    leaf_dir: Path,
    backups_root: Path,
) -> Path:
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    backup_dir = backups_root / leaf_id / timestamp
    backup_dir.mkdir(parents=True, exist_ok=True)

    for target_filename in RESPONSE_TO_TARGET.values():
        source_path = leaf_dir / target_filename
        backup_path = backup_dir / target_filename

        if source_path.exists():
            shutil.copy2(source_path, backup_path)

    return backup_dir


def write_responses_to_leaf(
    leaf_id: str,
    responses_root: Path = DEFAULT_RESPONSES_ROOT,
    backups_root: Path = DEFAULT_BACKUPS_ROOT,
    leafs_root: Path = PRUEBAS_ROOT,
    dry_run: bool = False,
) -> dict[str, Any]:
    normalized_leaf_id = normalize_leaf_id(leaf_id)

    leaf_dir = leafs_root / normalized_leaf_id
    responses_dir = responses_root / normalized_leaf_id

    ensure_leaf_dir_exists(leaf_dir)
    ensure_responses_dir_exists(responses_dir)

    validation_errors = validate_all_responses(responses_dir)

    if validation_errors:
        return {
            "ok": False,
            "leaf_id": normalized_leaf_id,
            "leaf_dir": str(leaf_dir),
            "responses_dir": str(responses_dir),
            "backup_dir": None,
            "written": [],
            "errors": validation_errors,
            "dry_run": dry_run,
        }

    backup_dir = None

    if not dry_run:
        backup_dir = create_backup_dir(
            leaf_id=normalized_leaf_id,
            leaf_dir=leaf_dir,
            backups_root=backups_root,
        )

    written = []

    for response_filename, target_filename in RESPONSE_TO_TARGET.items():
        response_path = responses_dir / response_filename
        target_path = leaf_dir / target_filename

        # Si no existe, saltar (puede ser opcional)
        if not response_path.exists():
            continue

        content = read_text(response_path)

        # Detectar si es placeholder por ausencia de YAML válido
        # Si tiene YAML real (dict no vacío), escribirlo
        is_placeholder = True
        if yaml is not None:
            try:
                data = yaml.safe_load(content)
                # Si es un dict con contenido, NO es placeholder
                if isinstance(data, dict) and data:
                    is_placeholder = False
            except yaml.YAMLError:
                pass  # YAML inválido = placeholder
        
        if is_placeholder:
            continue  # Saltar archivo vacío/placeholder

        # Limpiar header placeholder antes de escribir al leaf
        content_cleaned = clean_header_lines(content)
        
        # Para interpretacion.yaml, normalizar dependencies de CSV a array
        if target_filename == "interpretacion.yaml" and yaml is not None:
            try:
                data = yaml.safe_load(content_cleaned)
                if isinstance(data, dict):
                    data = normalize_dependencies(data)
                    content_cleaned = yaml.dump(data, allow_unicode=True, sort_keys=False, default_flow_style=False)
            except Exception:
                pass  # Si falla, escribir el contenido limpio original

        if not dry_run:
            write_text(target_path, content_cleaned)

        written.append(
            {
                "from": str(response_path),
                "to": str(target_path),
            }
        )

    return {
        "ok": True,
        "leaf_id": normalized_leaf_id,
        "leaf_dir": str(leaf_dir),
        "responses_dir": str(responses_dir),
        "backup_dir": str(backup_dir) if backup_dir else None,
        "written": written,
        "errors": [],
        "dry_run": dry_run,
    }


def print_report(report: dict[str, Any]) -> None:
    print()
    print("PHYXIO YAML AI RESPONSES WRITER")
    print("================================")
    print("Leaf ID:       " + report["leaf_id"])
    print("Leaf dir:      " + report["leaf_dir"])
    print("Responses dir: " + report["responses_dir"])
    print("Dry run:       " + str(report["dry_run"]))
    print()

    if not report["ok"]:
        print("[FAIL] No se han escrito las respuestas IA.")
        print()
        print("Errores encontrados:")

        for error in report["errors"]:
            print(" - " + error)

        print()
        return

    if report["dry_run"]:
        print("[OK] Dry run correcto. No se ha escrito ningún archivo.")
    else:
        print("[OK] Respuestas YAML escritas en el leaf.")
        print("Backup: " + str(report["backup_dir"]))

    print()
    print("Archivos:")

    for item in report["written"]:
        print(" - " + item["from"])
        print("   -> " + item["to"])

    print()


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Escribe respuestas YAML de IA validadas sobre los YAML reales del leaf."
    )

    parser.add_argument(
        "--leaf-id",
        required=True,
        help="ID del leaf. Ejemplo: segunda-ley-fuerza-masa",
    )

    parser.add_argument(
        "--responses-root",
        default=str(DEFAULT_RESPONSES_ROOT),
        help="Ruta raíz donde están las respuestas IA.",
    )

    parser.add_argument(
        "--backups-root",
        default=str(DEFAULT_BACKUPS_ROOT),
        help="Ruta raíz donde se guardarán los backups.",
    )
    parser.add_argument(
        "--leafs-root",
        default=str(PRUEBAS_ROOT),
        help="Ruta raiz donde estan los leafs.",
    )

    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Valida y muestra qué escribiría, pero no modifica archivos.",
    )

    return parser.parse_args()


def main() -> None:
    args = parse_args()

    report = write_responses_to_leaf(
        leaf_id=args.leaf_id,
        responses_root=Path(args.responses_root).resolve(),
        backups_root=Path(args.backups_root).resolve(),
        leafs_root=Path(args.leafs_root).resolve(),
        dry_run=args.dry_run,
    )

    print_report(report)

    if not report["ok"]:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
