"""
Fix remaining teoria.md / teoria.en.md issues:
1. ### Orden de magnitud → ## Orden de magnitud (3 leaves × 2 langs)
2. Inline declarative formulas → block $$ (impulso, momento-lineal, colision-con-pared × 2 langs)
"""

import os
import re

BASE = "frontend/src/data_v2_i18n/fisica-clasica/mecanica/cantidad-de-movimiento"

# ── 1. Fix heading levels ──────────────────────────────────────────────
def fix_heading_levels():
    count = 0
    for root, dirs, files in os.walk(BASE):
        for fname in files:
            if fname not in ("teoria.md", "teoria.en.md"):
                continue
            fpath = os.path.join(root, fname)
            with open(fpath, "r", encoding="utf-8") as f:
                content = f.read()
            new_content = content.replace("### Orden de magnitud", "## Orden de magnitud")
            new_content = new_content.replace("### Order of magnitude", "## Order of magnitude")
            if new_content != content:
                with open(fpath, "w", encoding="utf-8") as f:
                    f.write(new_content)
                count += 1
                print(f"  Fixed heading level: {fpath}")
    print(f"Heading levels fixed: {count} files\n")


# ── 2. Fix inline declarative formulas ──────────────────────────────────
# These are list items with "Label: $formula$" that the validator flags.
# Convert to: "Label:\n$$\nformula\n$$"
# or split the $ so there's no = inside a single $...$

INLINE_FORMULA_FIXES = {
    # impulso/teoria.md
    "fundamentos/impulso/teoria.md": [
        (
            '- SI: $\\text{N·s} = \\text{kg·m/s}$ (mismas que el momento lineal)',
            '- SI: $\\text{N·s}$, equivalente a $\\text{kg·m/s}$ (mismas que el momento lineal)',
        ),
    ],
    "fundamentos/impulso/teoria.en.md": [
        (
            '- SI: $\\text{N·s} = \\text{kg·m/s}$ (same as linear momentum)',
            '- SI: $\\text{N·s}$, equivalent to $\\text{kg·m/s}$ (same as linear momentum)',
        ),
    ],
    # momento-lineal/teoria.md
    "fundamentos/momento-lineal/teoria.md": [
        (
            '- SI: $\\text{kg·m/s} = \\text{N·s}$',
            '- SI: $\\text{kg·m/s}$, equivalente a $\\text{N·s}$',
        ),
        (
            '- Energía cinética: $K = p^2/(2m)$. Conocer $p$ y $m$ fija $K$.',
            '- Energía cinética: conocer $p$ y $m$ fija $K$, ya que\n\n$$\nK = \\frac{p^2}{2m}\n$$',
        ),
        (
            '- Fuerza: $\\vec{F} = d\\vec{p}/dt$. La fuerza causa cambio de momento, no velocidad directamente.',
            '- Fuerza: la fuerza causa cambio de momento, no velocidad directamente:\n\n$$\n\\vec{F} = \\frac{d\\vec{p}}{dt}\n$$',
        ),
        (
            '- Impulso: $\\vec{J} = \\Delta\\vec{p}$, variación finita de momento.',
            '- Impulso: variación finita de momento:\n\n$$\n\\vec{J} = \\Delta\\vec{p}\n$$',
        ),
    ],
    "fundamentos/momento-lineal/teoria.en.md": [
        (
            '- SI: $\\text{kg·m/s} = \\text{N·s}$',
            '- SI: $\\text{kg·m/s}$, equivalent to $\\text{N·s}$',
        ),
        (
            '- Kinetic energy: $K = p^2/(2m)$. Knowing $p$ and $m$ fixes $K$.',
            '- Kinetic energy: knowing $p$ and $m$ fixes $K$, since\n\n$$\nK = \\frac{p^2}{2m}\n$$',
        ),
        (
            '- Force: $\\vec{F} = d\\vec{p}/dt$. Force causes change in momentum, not velocity directly.',
            '- Force: force causes change in momentum, not velocity directly:\n\n$$\n\\vec{F} = \\frac{d\\vec{p}}{dt}\n$$',
        ),
        (
            '- Impulse: $\\vec{J} = \\Delta\\vec{p}$, the finite change in momentum.',
            '- Impulse: the finite change in momentum:\n\n$$\n\\vec{J} = \\Delta\\vec{p}\n$$',
        ),
    ],
    # colision-con-pared/teoria.md
    "colisiones/colision-con-pared/teoria.md": [
        (
            '- Componente normal: $v_{n,f} = -e\\,v_{n,i}$',
            '- Componente normal:\n\n$$\nv_{n,f} = -e\\,v_{n,i}\n$$',
        ),
        (
            '- Componente tangencial: $v_{t,f} = v_{t,i}$ (sin fricción)',
            '- Componente tangencial (sin fricción):\n\n$$\nv_{t,f} = v_{t,i}\n$$',
        ),
    ],
    "colisiones/colision-con-pared/teoria.en.md": [
        (
            '- Normal component: $v_{n,f} = -e\\,v_{n,i}$',
            '- Normal component:\n\n$$\nv_{n,f} = -e\\,v_{n,i}\n$$',
        ),
        (
            '- Tangential component: $v_{t,f} = v_{t,i}$ (no friction)',
            '- Tangential component (no friction):\n\n$$\nv_{t,f} = v_{t,i}\n$$',
        ),
    ],
}


def fix_inline_formulas():
    count = 0
    for rel_path, replacements in INLINE_FORMULA_FIXES.items():
        fpath = os.path.join(BASE, rel_path)
        if not os.path.exists(fpath):
            print(f"  WARNING: {fpath} not found")
            continue
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()
        modified = False
        for old, new in replacements:
            if old in content:
                content = content.replace(old, new)
                modified = True
                count += 1
            else:
                print(f"  WARNING: pattern not found in {rel_path}: {old[:60]}...")
        if modified:
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"  Fixed formulas: {fpath}")
    print(f"Inline formula fixes applied: {count}\n")


if __name__ == "__main__":
    print("=== Fixing heading levels ===")
    fix_heading_levels()
    print("=== Fixing inline declarative formulas ===")
    fix_inline_formulas()
    print("Done.")
