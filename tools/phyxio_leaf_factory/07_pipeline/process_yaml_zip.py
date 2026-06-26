#!/usr/bin/env python3
"""
Procesador de respuesta ZIP con archivos YAML.
Extrae {leaf_id}_yaml.zip y los copia al directorio del leaf.
"""

import os
import sys
import zipfile
import argparse
import shutil
from pathlib import Path


def find_yaml_zip(downloads_dir: Path, leaf_id: str) -> Path | None:
    """Busca {leaf_id}_yaml.zip en el directorio de descargas."""
    
    # Buscar ZIP con nombre específico: {leaf_id}_yaml.zip
    zip_file = downloads_dir / f"{leaf_id}_yaml.zip"
    if zip_file.exists():
        return zip_file
    
    # Fallback: buscar cualquier zip que empiece con el leaf_id y termine en _yaml
    zip_files = list(downloads_dir.glob(f"{leaf_id}_yaml*.zip"))
    if zip_files:
        # Ordenar por fecha de modificación (más reciente primero)
        zip_files.sort(key=lambda p: p.stat().st_mtime, reverse=True)
        return zip_files[0]
    
    return None


def extract_yaml_zip(zip_path: Path, extract_to: Path) -> list[Path]:
    """Extrae el ZIP de YAMLs al directorio especificado."""

    extracted_files = []

    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        for member in zip_ref.namelist():
            # Solo extraer archivos YAML
            if member.endswith('.yaml') or member.endswith('.yml'):
                # Extraer archivo
                zip_ref.extract(member, extract_to)
                # Construir ruta: manejar barras del ZIP convertir a separador local
                member_path = member.replace('/', os.sep).replace('\\', os.sep)
                extracted_path = extract_to / member_path

                if extracted_path.exists():
                    size = extracted_path.stat().st_size
                    extracted_files.append(extracted_path)
                    print(f"  ✓ Extraído: {member} ({size} bytes)")
                else:
                    print(f"  ⚠️  No se encontró: {member} (ruta: {extracted_path})")

    return extracted_files


def copy_to_leaf(extracted_files: list[Path], leaf_path: Path) -> bool:
    """Copia los archivos YAML extraídos al directorio del leaf."""

    success = True

    for file_path in extracted_files:
        if file_path.name == "meta.yaml":
            dest = leaf_path / "meta.yaml"
        elif file_path.name == "formulas.yaml":
            dest = leaf_path / "formulas.yaml"
        elif file_path.name == "magnitudes.yaml":
            dest = leaf_path / "magnitudes.yaml"
        elif file_path.name == "graficos.yaml":
            dest = leaf_path / "graficos.yaml"
        else:
            print(f"  ⚠️  Archivo desconocido: {file_path.name}, omitiendo")
            continue

        # Verificar archivo fuente existe y tiene contenido
        if not file_path.exists():
            print(f"  ❌ Archivo fuente no existe: {file_path}")
            success = False
            continue

        src_size = file_path.stat().st_size
        if src_size == 0:
            print(f"  ⚠️  Archivo fuente vacío: {file_path.name}")

        try:
            # Eliminar destino si existe para forzar sobreescritura limpia
            if dest.exists():
                dest.unlink()
                print(f"   (destino anterior eliminado)")

            shutil.copy2(file_path, dest)

            # Verificar que se copió correctamente
            if not dest.exists():
                print(f"  ❌ ERROR: Archivo destino no existe después de copiar!")
                success = False
                continue

            dest_size = dest.stat().st_size
            print(f"  ✓ Copiado: {file_path.name} ({src_size} → {dest_size} bytes)")

            if dest_size == 0:
                print(f"  ❌ ERROR: Archivo destino vacío después de copiar!")
                success = False
            elif dest_size != src_size:
                print(f"  ⚠️  Tamaño diferente: esperado {src_size}, got {dest_size}")

        except Exception as e:
            print(f"  ❌ Error copiando {file_path.name}: {e}")
            import traceback
            traceback.print_exc()
            success = False

    return success


def process_yaml_zip(leaf_id: str, downloads_dir: Path, leaf_path: Path) -> bool:
    """Procesa el ZIP de YAMLs: buscar, extraer y copiar al leaf."""
    
    print(f"\n🔍 Buscando {leaf_id}_yaml.zip en: {downloads_dir}")
    
    # Buscar ZIP
    zip_path = find_yaml_zip(downloads_dir, leaf_id)
    if not zip_path:
        print(f"  ❌ No se encontró {leaf_id}_yaml.zip")
        print("  💡 Asegúrate de que el archivo esté en Downloads/descargas_phyxio/")
        return False
    
    print(f"  ✓ Encontrado: {zip_path.name}")
    
    # Directorio temporal para extracción
    temp_dir = downloads_dir / "temp_yaml_extract"
    temp_dir.mkdir(exist_ok=True)
    
    try:
        # Debug: mostrar contenido del ZIP
        print(f"\n📋 Contenido del ZIP:")
        yaml_members = []
        with zipfile.ZipFile(zip_path, 'r') as zf:
            for name in zf.namelist():
                info = zf.getinfo(name)
                size = info.file_size
                is_yaml = name.endswith('.yaml') or name.endswith('.yml')
                print(f"   - {name} ({size} bytes) {'[YAML]' if is_yaml else ''}")
                if is_yaml:
                    yaml_members.append(name)

        print(f"\n📝 Miembros YAML encontrados: {yaml_members}")

        # Extraer ZIP
        print(f"\n📦 Extrayendo ZIP a: {temp_dir}")
        extracted_files = extract_yaml_zip(zip_path, temp_dir)

        print(f"\n📂 Archivos extraídos ({len(extracted_files)}):")
        for f in extracted_files:
            if f.exists():
                size = f.stat().st_size
                print(f"   ✓ {f} ({size} bytes)")
            else:
                print(f"   ✗ {f} (NO EXISTE)")

        if not extracted_files:
            print("  ❌ No se encontraron archivos YAML en el ZIP")
            return False

        # Verificar archivos esperados
        expected = {"meta.yaml", "formulas.yaml", "magnitudes.yaml", "graficos.yaml"}
        found = {f.name for f in extracted_files}
        missing = expected - found

        if missing:
            print(f"\n⚠️  Archivos faltantes: {', '.join(missing)}")
            print(f"   Encontrados: {', '.join(found)}")
        
        # Copiar al leaf
        print(f"\n📂 Copiando archivos al leaf: {leaf_path}")
        leaf_path.mkdir(parents=True, exist_ok=True)
        
        success = copy_to_leaf(extracted_files, leaf_path)
        
        # Mover ZIP procesado a procesados/
        procesados_dir = downloads_dir / "procesados"
        procesados_dir.mkdir(exist_ok=True)
        
        timestamp = zip_path.stat().st_mtime
        new_name = f"{leaf_id}_yaml_{int(timestamp)}.zip"
        shutil.move(str(zip_path), str(procesados_dir / new_name))
        print(f"\n✅ ZIP movido a: procesados/{new_name}")
        
        return success
        
    except Exception as e:
        print(f"\n❌ Error procesando ZIP: {e}")
        return False
    finally:
        # Limpiar directorio temporal
        if temp_dir.exists():
            shutil.rmtree(temp_dir)


def main():
    parser = argparse.ArgumentParser(
        description="Procesa {leaf_id}_yaml.zip con meta, formulas, magnitudes y graficos"
    )
    parser.add_argument(
        "--leaf-id",
        required=True,
        help="ID del leaf"
    )
    parser.add_argument(
        "--downloads-dir",
        default=str(Path.home() / "Downloads" / "descargas_phyxio"),
        help="Directorio donde se encuentra {leaf_id}_yaml.zip"
    )
    parser.add_argument(
        "--leafs-root",
        default="frontend/src/data_v2_i18n",
        help="Ruta raíz donde están los leafs"
    )
    
    args = parser.parse_args()
    
    downloads_dir = Path(args.downloads_dir)
    leaf_path = Path(args.leafs_root) / args.leaf_id
    
    print("=" * 60)
    print("PROCESSOR DE YAML ZIP")
    print("=" * 60)
    print(f"Leaf ID: {args.leaf_id}")
    print(f"Leaf Path: {leaf_path}")
    print(f"Downloads: {downloads_dir}")
    
    success = process_yaml_zip(args.leaf_id, downloads_dir, leaf_path)
    
    if success:
        print("\n✅ YAMLs procesados correctamente")
        print("\n📋 Siguientes pasos:")
        print("   1. Sincronizar interpretacion.yaml (si es necesario)")
        print("   2. Generar prompts para interpretacion")
        print("   3. Continuar con archivos .md")
        return 0
    else:
        print("\n❌ Error procesando YAMLs")
        return 1


if __name__ == "__main__":
    sys.exit(main())
