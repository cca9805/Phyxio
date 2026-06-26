#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script de corrección final: arregla inline formulas en errores.md 
y traduce encabezados en archivos .en.md
"""

import pathlib
from pathlib import Path
import re

DINAMICA_ROOT = Path(r"C:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\dinamica")

def fix_errores_formulas(leaf_dir: Path, filename: str) -> bool:
    """Fix inline formulas in errores files"""
    
    path = leaf_dir / filename
    if not path.exists():
        return False
    
    try:
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace $...$ with \(...\) for inline math
        # But NOT for block formulas with {{f:
        content = re.sub(r'(?<!\{)\$([^$]+)\$(?!\})', r'\\\(\1\\\)', content)
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
    except:
        return False


TEORIA_HEADERS_EN = {
    "## Contexto conceptual": "## Conceptual context",
    "## 🟢 Nivel esencial": "## 🟢 Essential level",
    "## 🔵 Nivel formal": "## 🔵 Formal level",
    "## 🔴 Nivel estructural": "## 🔴 Structural level",
    "## Interpretación física profunda": "## Deep physical interpretation",
    "## Orden de magnitud": "## Order of magnitude",
    "## Método de resolución personalizado": "## Personalized resolution method",
    "## Casos especiales y ejemplo extendido": "## Special cases and extended example",
    "## Preguntas reales del alumno": "## Real student questions",
    "## Conexiones transversales y rutas de estudio": "## Cross-cutting connections and study paths",
    "## Síntesis final": "## Final synthesis"
}

MODELOS_HEADERS_EN = {
    "## Modelo ideal": "## Ideal model",
    "## Hipótesis": "## Hypotheses",
    "## Dominio de validez cuantitativo": "## Quantitative validity domain",
    "## Señales de fallo del modelo": "## Model failure signals",
    "## Modelo extendido o alternativo": "## Extended or alternative model",
    "## Comparación operativa": "## Operational comparison"
}

ERRORES_HEADERS_EN = {
    "## Errores conceptuales": "## Conceptual errors",
    "## Errores de modelo": "## Model errors",
    "## Errores matemáticos": "## Mathematical errors",
    "## Errores de interpretación": "## Interpretation errors",
    "## Regla de autocontrol rápido": "## Quick self-control rule"
}

HISTORIA_HEADERS_EN = {
    "## Problema histórico": "## Historical problem",
    "## Dificultad conceptual previa": "## Prior conceptual difficulty",
    "## Qué cambió": "## What changed",
    "## Impacto en la física": "## Impact on physics",
    "## Conexión con física moderna": "## Connection with modern physics"
}


def fix_english_headers(leaf_dir: Path, filename: str, headers_map: dict) -> bool:
    """Fix English headers in a file"""
    
    path = leaf_dir / filename
    if not path.exists():
        return False
    
    try:
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        for es_header, en_header in headers_map.items():
            content = content.replace(es_header, en_header)
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
    except:
        return False


def fix_leaf(leaf_dir: Path) -> bool:
    """Fix all issues in a leaf"""
    
    success = True
    
    # Fix errores files
    fix_errores_formulas(leaf_dir, "errores.md")
    fix_errores_formulas(leaf_dir, "errores.en.md")
    
    # Fix English headers
    if not fix_english_headers(leaf_dir, "teoria.en.md", TEORIA_HEADERS_EN):
        pass
    
    if not fix_english_headers(leaf_dir, "modelos.en.md", MODELOS_HEADERS_EN):
        pass
    
    if not fix_english_headers(leaf_dir, "errores.en.md", ERRORES_HEADERS_EN):
        pass
    
    if not fix_english_headers(leaf_dir, "historia.en.md", HISTORIA_HEADERS_EN):
        pass
    
    return success


def get_all_leaves(root: Path) -> list:
    """Find all leaf directories"""
    leaves = []
    for item in root.rglob("meta.yaml"):
        leaf_dir = item.parent
        leaves.append(leaf_dir)
    return sorted(leaves)


def main():
    """Main"""
    
    print("\n" + "="*80)
    print("CORRECCIÓN FINAL — ENCABEZADOS Y FORMULAS")
    print("="*80)
    
    if not DINAMICA_ROOT.exists():
        print(f"ERROR: {DINAMICA_ROOT} no existe")
        return
    
    all_leaves = get_all_leaves(DINAMICA_ROOT)
    valid_leaves = [l for l in all_leaves if (l / "meta.yaml").exists()]
    
    print(f"\nCorrigiendo: {len(valid_leaves)} leaves")
    
    for i, leaf in enumerate(valid_leaves, 1):
        fix_leaf(leaf)
        
        if i % 10 == 0:
            print(f"  {i}/{len(valid_leaves)} ({100*i//len(valid_leaves)}%)")
    
    print(f"\n" + "="*80)
    print(f"COMPLETADO: {len(valid_leaves)} leaves corregidos")
    print(f"="*80)


if __name__ == '__main__':
    main()
