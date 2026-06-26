#!/usr/bin/env python3
"""
Procesa el ZIP más reciente descargado para un leaf específico.
Busca en Downloads cualquier ZIP que contenga el leaf-id en su nombre.

Uso:
    # Con leaf activo configurado:
    python process_latest_zip.py
    
    # Especificando leaf manualmente:
    python process_latest_zip.py --leaf-id conduccion

Ejemplo:
    python process_latest_zip.py
"""

import argparse
import glob
import os
import subprocess
import sys
from pathlib import Path

FACTORY_ROOT = Path(__file__).resolve().parents[1]
if str(FACTORY_ROOT) not in sys.path:
    sys.path.insert(0, str(FACTORY_ROOT))

from ruta_leaf import require_leaf_id


def find_md_zip(leaf_id: str) -> Path | None:
    """Busca el ZIP de Markdowns con nombre específico {leaf_id}_md.zip."""
    downloads = Path.home() / "Downloads" / "descargas_phyxio"
    
    # Buscar ZIP con nombre específico: {leaf_id}_md.zip
    zip_file = downloads / f"{leaf_id}_md.zip"
    if zip_file.exists():
        return zip_file
    
    # Fallback: buscar cualquier zip que empiece con el leaf_id y termine en _md
    zip_files = list(downloads.glob(f"{leaf_id}_md*.zip"))
    if zip_files:
        # Ordenar por fecha de modificación (más reciente primero)
        zip_files.sort(key=lambda p: p.stat().st_mtime, reverse=True)
        return zip_files[0]
    
    # Si no hay ZIP específico, buscar cualquier ZIP (fallback general)
    all_zips = list(downloads.glob("*.zip"))
    if all_zips:
        all_zips.sort(key=lambda p: p.stat().st_mtime, reverse=True)
        return all_zips[0]
    
    return None


def main():
    parser = argparse.ArgumentParser(
        description="Procesa el ZIP más reciente para un leaf"
    )
    parser.add_argument(
        "--leaf-id",
        required=False,
        help="ID del leaf (ej: conduccion). Si no se especifica, usa el leaf activo."
    )

    args = parser.parse_args()

    # Usar leaf activo si no se especificó
    leaf_id = require_leaf_id(args.leaf_id)

    # Buscar ZIP específico de Markdowns
    print(f"🔍 Buscando {leaf_id}_md.zip en Downloads\\descargas_phyxio...")
    zip_path = find_md_zip(leaf_id)

    if not zip_path:
        print(f"❌ No se encontró {leaf_id}_md.zip en Downloads\\descargas_phyxio")
        print(f"   Asegúrate de descargar el ZIP con el nombre correcto")
        sys.exit(1)

    print(f"📦 ZIP encontrado: {zip_path.name}")
    print(f"   Ruta: {zip_path}")
    print()

    # Ejecutar el procesador de ZIP
    script_path = Path(__file__).parent / "process_ai_zip_response.py"
    cmd = [
        sys.executable,
        str(script_path),
        "--leaf-id", leaf_id,
        "--zip", str(zip_path)
    ]

    print(f"🚀 Ejecutando procesador...")
    print(f"   python {script_path.name} --leaf-id {leaf_id} --zip {zip_path.name}")
    print()

    result = subprocess.run(cmd, cwd=Path(__file__).parent.parent.parent.parent)

    if result.returncode != 0:
        print(f"\n❌ Error al procesar el ZIP (código: {result.returncode})")
        sys.exit(result.returncode)

    print("\n✅ Proceso completado")


if __name__ == "__main__":
    main()
