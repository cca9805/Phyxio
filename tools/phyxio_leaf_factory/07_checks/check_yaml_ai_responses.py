from __future__ import annotations

import argparse
from pathlib import Path
from typing import Any

import yaml


PROJECT_ROOT = Path(__file__).resolve().parents[3]

FACTORY_ROOT = PROJECT_ROOT / "tools" / "phyxio_leaf_factory"

DEFAULT_RESPONSES_ROOT = FACTORY_ROOT / "05_ai_responses"


REQUIRED_RESPONSE_FILES = {
    "01_meta.response.yaml": {
        "required_roots": ["id"],
        "target": "meta.yaml",
    },
    "02_magnitudes.response.yaml": {
        "required_roots": ["version", "magnitudes"],
        "target": "magnitudes.yaml",
    },
    "03_formulas.response.yaml": {
        "required_roots": ["version", "ui", "formulas"],
        "target": "formulas.yaml",
    },
    "04_graficos.response.yaml": {
        "required_roots": ["version"],
        "target": "graficos.yaml",
    },
    "05_interpretacion.response.yaml": {
        "required_roots": ["version"],
        "target": "interpretacion.yaml",
        "optional": True,  # Se genera después de sincronizar interpretacion (Phase 2 lo genera)
    },
}


PLACEHOLDER_MARKERS = [
    "# PENDING_AI_RESPONSE",  # Marcador nuevo
    "# Phyxio Leaf Factory | AI YAML response",  # Header antiguo (compatibilidad)
    "# Pega aquí la respuesta YAML devuelta por la IA.",  # Header antiguo
]


FORBIDDEN_MARKERS = [
    "```",
    "Aquí tienes",
    "A continuación",
    "Explicación",
]


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def ensure_responses_dir_exists(responses_dir: Path) -> None:
    if not responses_dir.exists():
        raise FileNotFoundError(
            "No existe la carpeta de respuestas IA: " + str(responses_dir)
        )

    if not responses_dir.is_dir():
        raise NotADirectoryError(
            "La ruta de respuestas IA no es una carpeta: " + str(responses_dir)
        )


def load_yaml_file(path: Path) -> Any:
    content = read_text(path)

    try:
        return yaml.safe_load(content)
    except yaml.YAMLError as error:
        raise ValueError(
            "YAML inválido en " + path.name + ": " + str(error)
        ) from error


def contains_placeholder(content: str) -> bool:
    stripped = content.strip()

    if not stripped:
        return True

    for marker in PLACEHOLDER_MARKERS:
        if marker in content:
            return True

    return False


def contains_forbidden_markers(content: str) -> list[str]:
    found = []
    # Extraer solo líneas que no son comentarios del header para buscar marcadores prohibidos
    # Los marcadores prohibidos solo deben buscarse en el contenido real, no en los comentarios explicativos
    lines = content.split('\n')
    yaml_content_lines = []
    for line in lines:
        stripped = line.strip()
        # Ignorar líneas de comentario del header
        if stripped.startswith('#'):
            # Saltar esta línea - es un comentario del header
            continue
        yaml_content_lines.append(line)
    
    yaml_content = '\n'.join(yaml_content_lines)
    
    for marker in FORBIDDEN_MARKERS:
        if marker in yaml_content:
            found.append(marker)

    return found


def check_required_files(responses_dir: Path) -> list[str]:
    errors = []

    for filename, spec in REQUIRED_RESPONSE_FILES.items():
        path = responses_dir / filename

        if not path.exists():
            # Si es opcional, no es error si no existe
            if spec.get("optional", False):
                continue
            errors.append("Falta el archivo de respuesta IA: " + filename)

    return errors


def check_yaml_root(
    filename: str,
    data: Any,
    required_roots: list[str],
) -> list[str]:
    errors = []

    if not isinstance(data, dict):
        errors.append(filename + " no contiene un objeto YAML raíz.")
        return errors

    for root in required_roots:
        if root not in data:
            errors.append(
                filename + " no contiene la raíz obligatoria: " + root
            )

    return errors


def check_meta_leaf_id(
    filename: str,
    data: Any,
    leaf_id: str,
) -> list[str]:
    errors = []

    if filename != "01_meta.response.yaml":
        return errors

    if not isinstance(data, dict):
        return errors

    found_id = str(data.get("id", "")).strip()

    if found_id != leaf_id:
        errors.append(
            filename
            + " tiene id='"
            + found_id
            + "', pero se esperaba '"
            + leaf_id
            + "'."
        )

    return errors


def check_one_response_file(
    responses_dir: Path,
    filename: str,
    leaf_id: str,
) -> list[str]:
    errors = []
    path = responses_dir / filename

    if not path.exists():
        return errors

    content = read_text(path)

    # Detectar si es placeholder por ausencia de YAML válido
    has_valid_yaml = False
    try:
        data = yaml.safe_load(content)
        if isinstance(data, dict) and data:
            has_valid_yaml = True
    except yaml.YAMLError:
        pass

    forbidden = contains_forbidden_markers(content)

    if forbidden:
        errors.append(
            filename
            + " contiene marcadores no permitidos: "
            + ", ".join(forbidden)
        )

    # Si no tiene YAML válido, es placeholder
    if not has_valid_yaml:
        errors.append(filename + " todavía contiene placeholder o está vacío.")
        return errors
    
    # Continuar con validación de contenido
    data = load_yaml_file(path)

    spec = REQUIRED_RESPONSE_FILES[filename]
    required_roots = spec["required_roots"]

    errors.extend(
        check_yaml_root(
            filename=filename,
            data=data,
            required_roots=required_roots,
        )
    )

    errors.extend(
        check_meta_leaf_id(
            filename=filename,
            data=data,
            leaf_id=leaf_id,
        )
    )

    return errors


def run_check_yaml_ai_responses(
    leaf_id: str,
    responses_root: Path = DEFAULT_RESPONSES_ROOT,
) -> list[str]:
    responses_dir = responses_root / leaf_id

    ensure_responses_dir_exists(responses_dir)

    errors = []
    errors.extend(check_required_files(responses_dir))

    for filename, spec in REQUIRED_RESPONSE_FILES.items():
        path = responses_dir / filename
        
        # Saltar archivos opcionales que no existen
        if spec.get("optional", False) and not path.exists():
            continue
        
        # Si es opcional y está vacío/con placeholder, ignorar sin error
        if spec.get("optional", False) and path.exists():
            content = read_text(path)
            stripped = content.strip()
            # Ignorar si está vacío, solo tiene comentarios, o contiene placeholder
            if not stripped or stripped.startswith("#") or contains_placeholder(content):
                continue
            # También ignorar si no tiene YAML válido (vacío después del header)
            try:
                data = load_yaml_file(path)
                if data is None or not isinstance(data, dict):
                    continue  # YAML vacío o no es objeto, ignorar
            except ValueError:
                continue  # YAML inválido, ignorar archivo opcional
        
        errors.extend(
            check_one_response_file(
                responses_dir=responses_dir,
                filename=filename,
                leaf_id=leaf_id,
            )
        )

    return errors


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Valida las respuestas YAML generadas por IA antes de escribirlas al leaf."
    )

    parser.add_argument(
        "--leaf-id",
        required=True,
        help="ID del leaf. Ejemplo: segunda-ley-fuerza-masa",
    )

    parser.add_argument(
        "--responses-root",
        default=str(DEFAULT_RESPONSES_ROOT),
        help=(
            "Ruta raíz donde están las respuestas IA. "
            "Por defecto: tools/phyxio_leaf_factory/05_ai_responses"
        ),
    )

    return parser.parse_args()


def main() -> None:
    args = parse_args()

    leaf_id = args.leaf_id.strip()
    responses_root = Path(args.responses_root).resolve()
    responses_dir = responses_root / leaf_id

    print()
    print("PHYXIO AI YAML RESPONSES CHECK")
    print("================================")
    print("Leaf ID:        " + leaf_id)
    print("Responses root: " + str(responses_root))
    print("Responses dir:  " + str(responses_dir))
    print()

    errors = run_check_yaml_ai_responses(
        leaf_id=leaf_id,
        responses_root=responses_root,
    )

    if errors:
        print("[FAIL] Las respuestas YAML de IA tienen errores.")
        print()
        print("Errores encontrados:")

        for error in errors:
            print(" - " + error)

        raise SystemExit(1)

    print("[OK] Las respuestas YAML de IA son válidas.")
    print()
    print("Archivos comprobados:")

    for filename, spec in REQUIRED_RESPONSE_FILES.items():
        print(" - " + filename + " -> " + spec["target"])

    print()


if __name__ == "__main__":
    main()