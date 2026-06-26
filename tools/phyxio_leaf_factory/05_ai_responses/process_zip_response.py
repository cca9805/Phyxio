r"""
Procesador de respuestas batch en formato ZIP.

Descarga el ZIP en C:\Users\USER\Downloads\descargas_phyxio
y este script lo descomprime, parsea y escribe al leaf.
"""

from __future__ import annotations

import argparse
import io
import sys
import zipfile
from pathlib import Path
from typing import Any

# Añadir factory al path
CURRENT_FILE = Path(__file__).resolve()
FACTORY_ROOT = CURRENT_FILE.parents[1]
if str(FACTORY_ROOT) not in sys.path:
    sys.path.insert(0, str(FACTORY_ROOT))

from config import PRUEBAS_ROOT
from parse_batch_response import BatchResponseParser, write_response_files, FILE_TO_RESPONSE

DEFAULT_DOWNLOADS_DIR = Path(r"C:\Users\USER\Downloads\descargas_phyxio")
DEFAULT_RESPONSES_ROOT = FACTORY_ROOT / "05_ai_responses"


def find_zip_file(downloads_dir: Path, leaf_id: str) -> Path | None:
    """Busca archivo ZIP que corresponda al leaf_id."""
    if not downloads_dir.exists():
        return None

    # Patrones comunes de nombres
    patterns = [
        f"*{leaf_id}*.zip",
        f"*markdown*{leaf_id}*.zip",
        f"*batch*{leaf_id}*.zip",
        f"*phyxio*.zip",
        "*.zip",
    ]

    for pattern in patterns:
        matches = sorted(downloads_dir.glob(pattern), key=lambda p: p.stat().st_mtime, reverse=True)
        if matches:
            return matches[0]

    return None


def extract_markdown_from_zip(zip_path: Path) -> dict[str, str]:
    """Extrae archivos markdown de un ZIP."""
    files = {}

    with zipfile.ZipFile(zip_path, 'r') as zf:
        for name in zf.namelist():
            # Solo archivos .md relevantes
            if not name.endswith('.md'):
                continue

            # Extraer nombre base
            base_name = Path(name).name

            # Verificar si es uno de los archivos esperados
            if base_name in FILE_TO_RESPONSE:
                content = zf.read(name).decode('utf-8', errors='replace')
                files[base_name] = content

    return files


def process_zip_response(
    leaf_id: str,
    zip_path: Path | None = None,
    downloads_dir: Path = DEFAULT_DOWNLOADS_DIR,
    responses_root: Path = DEFAULT_RESPONSES_ROOT,
    leafs_root: Path = PRUEBAS_ROOT,
    auto_write: bool = False,
) -> dict[str, Any]:
    """
    Procesa una respuesta ZIP completa:
    1. Busca/descomprime ZIP
    2. Extrae archivos markdown
    3. Escribe archivos .response.md
    4. Opcionalmente escribe al leaf
    """
    leaf_id = leaf_id.strip().lower().replace(" ", "-").replace("_", "-")

    # Buscar ZIP si no se proporcionó
    if zip_path is None:
        zip_path = find_zip_file(downloads_dir, leaf_id)
        if zip_path is None:
            return {
                "success": False,
                "error": f"No se encontró archivo ZIP en {downloads_dir} para leaf '{leaf_id}'",
            }

    if not zip_path.exists():
        return {
            "success": False,
            "error": f"Archivo ZIP no existe: {zip_path}",
        }

    print(f"[INFO] Procesando ZIP: {zip_path}")

    # Extraer archivos markdown
    files = extract_markdown_from_zip(zip_path)

    if not files:
        return {
            "success": False,
            "error": f"No se encontraron archivos .md en el ZIP: {zip_path}",
        }

    print(f"[OK] Archivos .md extraídos: {len(files)}")
    for fname in sorted(files.keys()):
        content_len = len(files[fname])
        print(f"  - {fname}: {content_len} caracteres")

    # Escribir archivos .response.md
    written = write_response_files(leaf_id, files, responses_root)

    result = {
        "success": True,
        "zip_path": str(zip_path),
        "files_extracted": len(files),
        "files_written": len(written),
        "written_paths": [str(p) for p in written],
    }

    # Auto-write al leaf si se solicitó
    if auto_write:
        print("\n" + "=" * 50)
        print("AUTO-WRITE: Escribiendo archivos al leaf...")
        print("=" * 50)

        try:
            sys.path.insert(0, str(FACTORY_ROOT / "06_writers"))
            from write_md_ai_responses import write_all_md_responses

            write_results = write_all_md_responses(
                leaf_id=leaf_id,
                responses_root=responses_root,
                pruebas_root=leafs_root,
            )

            success_count = sum(1 for r in write_results if r["success"])
            print(f"[OK] Escritos: {success_count}/{len(write_results)} archivos al leaf")
            result["auto_write"] = {
                "success": success_count,
                "total": len(write_results),
            }

        except Exception as e:
            print(f"[ERROR] Falló auto-write: {e}")
            result["auto_write_error"] = str(e)

    return result


def main():
    parser = argparse.ArgumentParser(
        description="Procesa respuesta ZIP de la IA y escribe archivos markdown al leaf."
    )
    parser.add_argument("--leaf-id", required=True, help="ID del leaf")
    parser.add_argument(
        "--zip-path",
        help="Ruta al archivo ZIP (si no se proporciona, se busca en downloads_dir)",
    )
    parser.add_argument(
        "--downloads-dir",
        default=str(DEFAULT_DOWNLOADS_DIR),
        help="Directorio donde se descargan los ZIP",
    )
    parser.add_argument(
        "--responses-root",
        default=str(DEFAULT_RESPONSES_ROOT),
        help="Directorio raíz de respuestas de IA",
    )
    parser.add_argument(
        "--leafs-root",
        default=str(PRUEBAS_ROOT),
        help="Ruta raiz donde estan los leafs.",
    )
    parser.add_argument(
        "--auto-write",
        action="store_true",
        help="Escribir automáticamente al leaf después de extraer",
    )

    args = parser.parse_args()

    downloads_dir = Path(args.downloads_dir)
    responses_root = Path(args.responses_root)
    leafs_root = Path(args.leafs_root)
    zip_path = Path(args.zip_path) if args.zip_path else None

    print(f"Procesando respuesta ZIP para: {args.leaf_id}")
    print(f"Directorio de descargas: {downloads_dir}")
    print()

    result = process_zip_response(
        leaf_id=args.leaf_id,
        zip_path=zip_path,
        downloads_dir=downloads_dir,
        responses_root=responses_root,
        leafs_root=leafs_root,
        auto_write=args.auto_write,
    )

    if not result["success"]:
        print(f"[ERROR] {result['error']}")
        sys.exit(1)

    print()
    print("=" * 50)
    print("RESUMEN")
    print("=" * 50)
    print(f"ZIP procesado: {result['zip_path']}")
    print(f"Archivos extraídos: {result['files_extracted']}")
    print(f"Archivos escritos: {result['files_written']}")
    print()
    print("Siguientes pasos:")
    if not args.auto_write:
        print(f"  1. Para escribir al leaf:")
        print(f"     python tools/phyxio_leaf_factory/06_writers/write_md_ai_responses.py --leaf-id {args.leaf_id}")
    print(f"  2. Para validar:")
    print(f"     python tools/validator_modular/main.py {leafs_root / args.leaf_id}")


if __name__ == "__main__":
    main()
