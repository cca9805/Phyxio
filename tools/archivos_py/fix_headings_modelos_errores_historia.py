"""
Fix headings in modelos.md/en, errores.md/en, historia.md/en
across all 26 cantidad-de-movimiento leaves.

Issues:
1. Numbered headings: "## 1. Modelo ideal" → "## Modelo ideal"
2. Missing accents in Spanish: "Senales" → "Señales", etc.
"""

import os
import glob

BASE = "frontend/src/data_v2_i18n/fisica-clasica/mecanica/cantidad-de-movimiento"

# Mapping: (filename_pattern, old_heading, new_heading)
REPLACEMENTS = [
    # --- modelos.md ---
    ("modelos.md", "## 1. Modelo ideal", "## Modelo ideal"),
    ("modelos.md", "## 2. Modelo extendido", "## Modelo extendido"),
    ("modelos.md", "## 3. Dominio de validez cuantitativo", "## Dominio de validez cuantitativo"),
    ("modelos.md", "## 4. Senales de fallo del modelo", "## Señales de fallo del modelo"),
    ("modelos.md", "## 5. Comparacion con modelos alternativos", "## Comparación con modelos alternativos"),

    # --- modelos.en.md ---
    ("modelos.en.md", "## 1. Ideal model", "## Ideal model"),
    ("modelos.en.md", "## 2. Extended model", "## Extended model"),
    ("modelos.en.md", "## 3. Quantitative validity domain", "## Quantitative validity domain"),
    ("modelos.en.md", "## 4. Model failure signals", "## Model failure signals"),
    ("modelos.en.md", "## 5. Comparison with alternative models", "## Comparison with alternative models"),

    # --- errores.md ---
    ("errores.md", "## 1. Errores conceptuales", "## Errores conceptuales"),
    ("errores.md", "## 2. Errores de modelo", "## Errores de modelo"),
    ("errores.md", "## 3. Errores matematicos", "## Errores matemáticos"),
    ("errores.md", "## 4. Errores de interpretacion", "## Errores de interpretación"),
    ("errores.md", "## 5. Regla de autocontrol rapido", "## Regla de autocontrol rápido"),

    # --- errores.en.md ---
    ("errores.en.md", "## 1. Conceptual errors", "## Conceptual errors"),
    ("errores.en.md", "## 2. Model errors", "## Model errors"),
    ("errores.en.md", "## 3. Mathematical errors", "## Mathematical errors"),
    ("errores.en.md", "## 4. Interpretation errors", "## Interpretation errors"),
    ("errores.en.md", "## 5. Quick self-control rule", "## Quick self-control rule"),

    # --- historia.md ---
    ("historia.md", "## 1. Problema historico", "## Problema histórico"),
    ("historia.md", "## 2. Que no se entendia antes", "## Qué no se entendía antes"),
    ("historia.md", "## 3. Que cambio", "## Qué cambió"),
    ("historia.md", "## 4. Evolucion conceptual", "## Evolución conceptual"),
    ("historia.md", "## 5. Conexion con fisica moderna", "## Conexión con física moderna"),

    # --- historia.en.md ---
    ("historia.en.md", "## 1. Historical problem", "## Historical problem"),
    ("historia.en.md", "## 2. What was not understood before", "## What was not understood before"),
    ("historia.en.md", "## 3. What changed", "## What changed"),
    ("historia.en.md", "## 4. Conceptual evolution", "## Conceptual evolution"),
    ("historia.en.md", "## 5. Connection with modern physics", "## Connection with modern physics"),
]

def fix_file(filepath, old, new):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    if old not in content:
        return False
    content = content.replace(old, new)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    return True

def main():
    total_fixes = 0
    total_files = 0
    
    for filename, old_heading, new_heading in REPLACEMENTS:
        pattern = os.path.join(BASE, "**", filename)
        files = glob.glob(pattern, recursive=True)
        for fpath in sorted(files):
            if fix_file(fpath, old_heading, new_heading):
                total_fixes += 1
    
    # Count unique files modified
    all_files = set()
    for filename in ["modelos.md", "modelos.en.md", "errores.md", "errores.en.md", "historia.md", "historia.en.md"]:
        pattern = os.path.join(BASE, "**", filename)
        all_files.update(glob.glob(pattern, recursive=True))
    
    print(f"Replacements applied: {total_fixes}")
    print(f"Files in scope: {len(all_files)}")
    
    # Verify: check that no numbered headings remain
    problems = []
    for fpath in sorted(all_files):
        with open(fpath, "r", encoding="utf-8") as f:
            for i, line in enumerate(f, 1):
                if line.startswith("## ") and len(line) > 4 and line[3].isdigit():
                    problems.append(f"  {fpath}:{i} → {line.strip()}")
    
    if problems:
        print(f"\nWARNING: {len(problems)} numbered headings still remain:")
        for p in problems:
            print(p)
    else:
        print("\nAll numbered headings removed successfully.")

if __name__ == "__main__":
    main()
