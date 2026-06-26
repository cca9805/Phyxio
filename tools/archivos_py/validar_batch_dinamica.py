#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Batch validation of all dinamica leaves
"""

import pathlib
from pathlib import Path
import subprocess
import json
import re

DINAMICA_ROOT = Path(r"C:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\dinamica")
VALIDATOR = Path(r"C:\Users\USER\Desktop\Phyxio\tools\phyxio_leaf_validator.py")

def get_all_leaves(root: Path) -> list:
    """Find all leaf directories"""
    leaves = []
    for item in root.rglob("meta.yaml"):
        leaf_dir = item.parent
        leaves.append(leaf_dir)
    return sorted(leaves)

def extract_score(output: str) -> float:
    """Extract puntuación from validator output"""
    match = re.search(r'Puntuaci.*?n global estimada:\s*([\d.]+)', output)
    if match:
        return float(match.group(1))
    return 0.0

def validate_leaf(leaf_path: str) -> tuple:
    """Validate a single leaf"""
    try:
        result = subprocess.run(
            ['python', str(VALIDATOR), leaf_path],
            capture_output=True,
            text=True,
            timeout=30
        )
        output = result.stdout + result.stderr
        score = extract_score(output)
        return score, "OK"
    except Exception as e:
        return 0.0, f"ERROR: {str(e)}"


def main():
    """Main"""
    
    print("\n" + "="*80)
    print("VALIDACIÓN BATCH — DINAMICA 54 LEAVES")
    print("="*80)
    
    leaves = get_all_leaves(DINAMICA_ROOT)
    valid_leaves = [str(l) for l in leaves if (Path(l) / "meta.yaml").exists()]
    
    print(f"\nValidando: {len(valid_leaves)} leaves\n")
    
    scores = []
    for i, leaf_path in enumerate(valid_leaves, 1):
        score, status = validate_leaf(leaf_path)
        scores.append(score)
        
        leaf_name = Path(leaf_path).name
        if score >= 4.5:
            status_icon = "✅"
        elif score >= 4.0:
            status_icon = "✓"
        else:
            status_icon = "⚠"
        
        print(f"  {status_icon} {leaf_name}: {score:.2f}/5")
        
        if i % 10 == 0:
            avg_so_far = sum(scores) / len(scores)
            print(f"\n  Progreso: {i}/{len(valid_leaves)} ({100*i//len(valid_leaves)}%) | Promedio: {avg_so_far:.2f}")
            print()
    
    # Summary
    avg_score = sum(scores) / len(scores)
    count_45_plus = sum(1 for s in scores if s >= 4.5)
    count_40_plus = sum(1 for s in scores if s >= 4.0)
    
    print(f"\n" + "="*80)
    print(f"RESUMEN FINAL")
    print(f"="*80)
    print(f"  Validados: {len(valid_leaves)}")
    print(f"  Puntuación promedio: {avg_score:.2f}/5")
    print(f"  Leaves >= 4.5/5: {count_45_plus}/{len(valid_leaves)} ({100*count_45_plus//len(valid_leaves)}%)")
    print(f"  Leaves >= 4.0/5: {count_40_plus}/{len(valid_leaves)} ({100*count_40_plus//len(valid_leaves)}%)")
    print(f"\n  Distribución:")
    for threshold in [5.0, 4.8, 4.5, 4.0, 3.5, 3.0]:
        count = sum(1 for s in scores if s >= threshold)
        if count > 0:
            print(f"    {threshold:.1f}+: {count}")
    print(f"="*80)


if __name__ == '__main__':
    main()
