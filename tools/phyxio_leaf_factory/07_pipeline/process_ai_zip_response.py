#!/usr/bin/env python3
"""
Procesa respuesta ZIP de IA: desempaqueta, copia al leaf, auto-fix, valida.
Uso: python process_ai_zip_response.py --leaf-id <id> --zip <ruta_zip>
"""

import argparse
import shutil
import subprocess
import sys
import tempfile
import zipfile
from pathlib import Path


def extract_zip(zip_path: Path, extract_dir: Path) -> list[Path]:
    """Extrae ZIP y retorna lista de archivos .md extraídos."""
    print(f"📦 Extrayendo {zip_path}...")
    with zipfile.ZipFile(zip_path, 'r') as zf:
        zf.extractall(extract_dir)
    
    md_files = list(extract_dir.rglob("*.md"))
    print(f"   ✓ {len(md_files)} archivos .md extraídos")
    return md_files


def copy_to_leaf(md_files: list[Path], leaf_dir: Path) -> int:
    """Copia archivos .md al directorio del leaf."""
    print(f"\n📂 Copiando a {leaf_dir}...")
    copied = 0
    for f in md_files:
        dest = leaf_dir / f.name
        shutil.copy2(f, dest)
        copied += 1
        print(f"   ✓ {f.name}")
    return copied


def run_reparador(leaf_id: str, project_root: Path) -> bool:
    """Ejecuta reparador_leafs (reemplazo mejorado de auto-fix) sobre el leaf."""
    print(f"\n🔧 Ejecutando reparador_leafs...")
    reparador_script = (
        project_root
        / "tools" / "phyxio_leaf_factory" / "06_writers" / "reparador_leafs.py"
    )

    if not reparador_script.exists():
        print(f"   ⚠ Script reparador_leafs.py no encontrado: {reparador_script}")
        return False

    # Auto-detectar mapa
    map_candidates = [
        project_root / "frontend" / "src" / "v2" / "map" / "phyxio-map.yaml",
        project_root / "v2" / "map" / "phyxio-map.yaml",
    ]
    map_path = next((c for c in map_candidates if c.exists()), None)

    leaf_dir = (
        project_root
        / "frontend" / "src" / "data_v2_i18n" / "pruebas"
        / leaf_id
    )

    cmd = [sys.executable, str(reparador_script), "--path", str(leaf_dir)]
    if map_path:
        cmd.extend(["--map", str(map_path)])

    result = subprocess.run(
        cmd,
        cwd=project_root,
        capture_output=True,
        text=True
    )

    if result.returncode == 0:
        print("   ✓ Reparador completado")
        return True
    else:
        print(f"   ⚠ Reparador falló: {result.stderr[:200]}")
        return False


def run_validator(leaf_dir: Path, project_root: Path) -> tuple[int, int, float]:
    """Ejecuta validador y retorna (total_checks, fails, score)."""
    print(f"\n✅ Ejecutando validador...")
    
    # Intentar validador modular primero
    validator_modular = project_root / "tools" / "validator_modular" / "main.py"
    validator_v2 = project_root / "tools" / "phyxio_leaf_validator_v2.py"
    
    validator = validator_modular if validator_modular.exists() else validator_v2
    
    result = subprocess.run(
        [sys.executable, str(validator), str(leaf_dir)],
        cwd=project_root,
        capture_output=True,
        text=True,
        encoding='utf-8',
        errors='replace'
    )
    
    output = result.stdout + result.stderr
    
    # Contar fails
    fail_count = output.count("FAIL:")
    ok_count = output.count("OK:")
    total = fail_count + ok_count
    
    # Extraer score
    score = 0.0
    for line in output.split('\n'):
        if 'Total score' in line or 'score' in line.lower():
            try:
                score = float(line.split(':')[-1].strip().rstrip('%'))
            except:
                pass
    
    print(f"   ✓ Validación completada")
    print(f"   📊 Resultados: {ok_count} OK / {fail_count} FAIL / Score: {score:.1f}%")
    
    # Mostrar primeros fails si hay
    if fail_count > 0:
        print(f"\n   📝 Primeros fails:")
        fails = [line for line in output.split('\n') if 'FAIL:' in line][:5]
        for f in fails:
            print(f"      {f.strip()[:80]}")
    
    return total, fail_count, score


def main():
    parser = argparse.ArgumentParser(
        description="Procesa respuesta ZIP de IA para leaf Phyxio"
    )
    parser.add_argument(
        "--leaf-id", 
        required=True, 
        help="ID del leaf (ej: segunda-ley-fuerza-masa)"
    )
    parser.add_argument(
        "--zip", 
        required=True, 
        help="Ruta al archivo ZIP descargado"
    )
    parser.add_argument(
        "--skip-fix", 
        action="store_true", 
        help="Omitir auto-fix"
    )
    parser.add_argument(
        "--skip-validate", 
        action="store_true", 
        help="Omitir validación"
    )
    
    args = parser.parse_args()
    
    # Rutas
    project_root = Path(__file__).parent.parent.parent.parent
    leaf_dir = (
        project_root 
        / "frontend" / "src" / "data_v2_i18n" / "pruebas" 
        / args.leaf_id
    )
    zip_path = Path(args.zip)
    
    if not zip_path.exists():
        print(f"❌ ZIP no encontrado: {zip_path}")
        sys.exit(1)
    
    if not leaf_dir.exists():
        print(f"❌ Directorio del leaf no existe: {leaf_dir}")
        sys.exit(1)
    
    print(f"=" * 60)
    print(f"🚀 Procesando respuesta IA para: {args.leaf_id}")
    print(f"=" * 60)
    
    # 1. Extraer ZIP
    with tempfile.TemporaryDirectory() as tmpdir:
        md_files = extract_zip(zip_path, Path(tmpdir))
        
        if not md_files:
            print("❌ No se encontraron archivos .md en el ZIP")
            sys.exit(1)
        
        # 2. Copiar al leaf
        copied = copy_to_leaf(md_files, leaf_dir)
        
        if copied == 0:
            print("❌ No se copió ningún archivo")
            sys.exit(1)
    
    # 3. Reparador (reemplaza auto-fix)
    if not args.skip_fix:
        run_reparador(args.leaf_id, project_root)
    
    # 4. Validar
    if not args.skip_validate:
        total, fails, score = run_validator(leaf_dir, project_root)
        
        print(f"\n" + "=" * 60)
        if fails == 0:
            print(f"🎉 ¡LEAF VALIDADO! 0 fails, Score: {score:.1f}%")
        elif fails <= 5:
            print(f"⚠️  LEAF ACEPTABLE: {fails} fails menores, Score: {score:.1f}%")
        else:
            print(f"❌ LEAF NECESITA REVISIÓN: {fails} fails, Score: {score:.1f}%")
        print(f"=" * 60)
    
    print(f"\n📁 Leaf actualizado en: {leaf_dir}")


if __name__ == "__main__":
    main()
