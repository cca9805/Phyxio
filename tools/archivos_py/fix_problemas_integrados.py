#!/usr/bin/env python3
"""Fix render-risk and magnitude-reference issues in errores-frecuentes and problemas-tipo-examen."""

import re
from pathlib import Path

BASE = Path("c:/Users/USER/Desktop/Phyxio/frontend/src/data_v2_i18n"
            "/fisica-clasica/mecanica/dinamica/aplicaciones/problemas-integrados")
EF = BASE / "errores-frecuentes"
PTE = BASE / "problemas-tipo-examen"

EF_MAGS = [
    "fuerza_erronea", "signo_aceleracion", "componente_normal_erronea", "F_ext_net",
    "aceleracion_sistema", "coeficiente_rozamiento_estatico", "fuerza_rozamiento_maximo", "masa_total",
]
PTE_MAGS = [
    "masa_1", "masa_2", "tension_cuerda", "aceleracion_sistema",
    "coeficiente_rozamiento", "fuerza_normal", "fuerza_rozamiento",
]


def strip_latex(expr: str) -> str:
    """Convert a LaTeX math expression to readable plain text."""
    s = expr.strip()
    # \frac{a}{b} → a/b  (handle simple fracs first)
    s = re.sub(r"\\frac\{([^{}]*)\}\{([^{}]*)\}", r"(\1)/(\2)", s)
    # \left( \right) → ( )
    s = s.replace(r"\left(", "(").replace(r"\right)", ")")
    s = s.replace(r"\left|", "|").replace(r"\right|", "|")
    # \vec{x} → x
    s = re.sub(r"\\vec\{([^{}]*)\}", r"\1", s)
    # \text{unit} → unit
    s = re.sub(r"\\text\{([^{}]*)\}", r"\1", s)
    # \sum → sum
    s = s.replace(r"\sum", "∑")
    # operators
    s = s.replace(r"\times", "×")
    s = s.replace(r"\cdot", "·")
    s = s.replace(r"\neq", "≠")
    s = s.replace(r"\leq", "≤")
    s = s.replace(r"\geq", "≥")
    s = s.replace(r"\approx", "≈")
    s = s.replace(r"\cos", "cos")
    s = s.replace(r"\sin", "sin")
    s = s.replace(r"\tan", "tan")
    s = s.replace(r"\theta", "θ")
    s = s.replace(r"\mu", "μ")
    s = s.replace(r"\sqrt", "√")
    # spacing
    s = re.sub(r"\\[;,!]", " ", s)
    s = s.replace(r"\,", " ")
    # {,} → ,  {.} → .
    s = s.replace("{,}", ",").replace("{.}", ".")
    # Remove remaining braces
    s = re.sub(r"\{([^{}]*)\}", r"\1", s)
    s = re.sub(r"\{([^{}]*)\}", r"\1", s)  # second pass for nested
    # Remove stray backslashes
    s = s.replace("\\", "")
    # Normalise spaces
    s = re.sub(r" {2,}", " ", s).strip()
    return s


def remove_dollar_blocks_plain(text: str) -> str:
    """Replace $$\\n...\\n$$ with plain-text version of the expression."""
    def repl(m):
        inner = m.group(1).strip()
        return strip_latex(inner) + "\n"
    return re.sub(r"\$\$\n(.*?)\n\$\$", repl, text, flags=re.DOTALL)


def remove_inline_equations(text: str) -> str:
    """Replace inline $expr$ that look like equations with plain-text."""
    equation_re = re.compile(r"\$([^$\n]+)\$")
    def repl(m):
        inner = m.group(1)
        if re.search(r"[=><]|\\neq|\\leq|\\geq|\\approx|\\times|\\frac|\\sum|\\vec", inner):
            return strip_latex(inner)
        return m.group(0)  # leave simple variable notation alone
    return equation_re.sub(repl, text)


def fix_magnitudes(text: str, mags: list) -> str:
    """Normalise all magnitude references to [[id]] format."""
    for mag in mags:
        esc = re.escape(mag)
        # 1. `mag [[mag]]`  →  [[mag]]
        text = re.sub(r"`" + esc + r"\s*\[\[" + esc + r"\]\]`", f"[[{mag}]]", text)
        # 2. `mag`          →  [[mag]]
        text = re.sub(r"`" + esc + r"`", f"[[{mag}]]", text)
        # 3. mag [[mag]]    →  [[mag]]  (bare name followed by [[id]])
        text = re.sub(esc + r"\s+\[\[" + esc + r"\]\]", f"[[{mag}]]", text)
        # 4. bare name not already inside [[...]]
        #    Look for the name NOT preceded by '[' and NOT followed by ']'
        text = re.sub(r"(?<!\[)" + esc + r"(?!\])", f"[[{mag}]]", text)
    return text


def replace_dollar_blocks_with_formula_refs(text: str, replacements: list) -> str:
    """Replace specific $$...$$  blocks with {{f:id}} references."""
    for pattern, replacement in replacements:
        text = re.sub(pattern, replacement, text, flags=re.DOTALL)
    return text


def process_teoria(filepath: Path, mags: list, formula_replacements: list):
    raw = filepath.read_text(encoding="utf-8")
    # Step 1: specific $$blocks → {{f:id}}
    raw = replace_dollar_blocks_with_formula_refs(raw, formula_replacements)
    # Step 2: any remaining $$blocks → plain text
    raw = remove_dollar_blocks_plain(raw)
    # Step 3: inline equations → plain text
    raw = remove_inline_equations(raw)
    # Step 4: magnitude refs
    raw = fix_magnitudes(raw, mags)
    filepath.write_text(raw, encoding="utf-8")
    print(f"  ✓ {filepath.name}")


def process_other(filepath: Path, mags: list):
    raw = filepath.read_text(encoding="utf-8")
    # $$blocks → plain text
    raw = remove_dollar_blocks_plain(raw)
    # inline equations → plain text
    raw = remove_inline_equations(raw)
    # magnitude refs
    raw = fix_magnitudes(raw, mags)
    filepath.write_text(raw, encoding="utf-8")
    print(f"  ✓ {filepath.name}")


# ── errores-frecuentes ──────────────────────────────────────────────────────
EF_FORMULA_REPL = [
    # $$\n a_{sys} = ... \n$$ → chequeo_consistencia_aceleracion
    (r"\$\$\s*\n\s*a_\{sys\}.*?\n\$\$",
     "{{f:chequeo_consistencia_aceleracion}}"),
    # $$\n f_{s,\max} = ... \n$$ → relacion_rozamiento_maximo
    (r"\$\$\s*\n\s*f_\{s,\\\\max\}.*?\n\$\$",
     "{{f:relacion_rozamiento_maximo}}"),
    # English versions use same LaTeX
    (r"\$\$\s*\n\s*a_\{sys\}.*?\n\$\$",
     "{{f:chequeo_consistencia_aceleracion}}"),
    (r"\$\$\s*\n\s*f_\{s,\\max\}.*?\n\$\$",
     "{{f:relacion_rozamiento_maximo}}"),
]

print("=== errores-frecuentes ===")
process_teoria(EF / "teoria.md",    EF_MAGS, EF_FORMULA_REPL)
process_teoria(EF / "teoria.en.md", EF_MAGS, EF_FORMULA_REPL)

for fname in [
    "aplicaciones.md", "aplicaciones.en.md",
    "ejemplos.md",     "ejemplos.en.md",
    "errores.md",
    "modelos.md",      "modelos.en.md",
    "historia.md",     "historia.en.md",
]:
    process_other(EF / fname, EF_MAGS)


# ── problemas-tipo-examen ────────────────────────────────────────────────────
PTE_FORMULA_REPL = [
    # $$\n \sum \vec{F}_{ext} = ... \n$$ → segunda_ley_newton_sistema (vector form)
    (r"\$\$\s*\n\s*\\sum \\vec\{F\}_\{ext\}.*?\n\$\$",
     "{{f:segunda_ley_newton_sistema}}"),
    # $$\n a = \frac{...}{...} \n$$ → also segunda_ley_newton_sistema (operational form - deduplicate)
    # We keep the context prose and just remove the block for the 2nd occurrence
    (r"\$\$\s*\n\s*a = \\frac\{m_2.*?\n\$\$",
     ""),
    # $$\n |\vec{a}_1| = ... \n$$ → vinculo_aceleracion
    (r"\$\$\s*\n\s*\|\\vec\{a\}_1\|.*?\n\$\$",
     "{{f:vinculo_aceleracion}}"),
    # $$\n f_r = \mu_d N \n$$ → fuerza_rozamiento_dinamica
    (r"\$\$\s*\n\s*f_r = \\mu_d N\s*\n\$\$",
     "{{f:fuerza_rozamiento_dinamica}}"),
    # $$\n N = m_1 g \cos\theta \n$$ → plain text (no formula ID)
    (r"\$\$\s*\n\s*N = m_1 g \\cos\\theta\s*\n\$\$",
     "N = m₁·g·cos(θ)"),
    # English versions (identical LaTeX)
    (r"\$\$\s*\n\s*\\sum \\vec\{F\}_\{ext\}.*?\n\$\$",
     "{{f:segunda_ley_newton_sistema}}"),
    (r"\$\$\s*\n\s*a = \\frac\{m_2.*?\n\$\$",
     ""),
    (r"\$\$\s*\n\s*\|\\vec\{a\}_1\|.*?\n\$\$",
     "{{f:vinculo_aceleracion}}"),
    (r"\$\$\s*\n\s*f_r = \\mu_d N\s*\n\$\$",
     "{{f:fuerza_rozamiento_dinamica}}"),
    (r"\$\$\s*\n\s*N = m_1 g \\cos\\theta\s*\n\$\$",
     "N = m₁·g·cos(θ)"),
]

print("\n=== problemas-tipo-examen ===")
process_teoria(PTE / "teoria.md",    PTE_MAGS, PTE_FORMULA_REPL)
process_teoria(PTE / "teoria.en.md", PTE_MAGS, PTE_FORMULA_REPL)

for fname in [
    "aplicaciones.md", "aplicaciones.en.md",
    "ejemplos.md",     "ejemplos.en.md",
    "errores.md",      "errores.en.md",
    "modelos.md",      "modelos.en.md",
    "historia.md",     "historia.en.md",
]:
    process_other(PTE / fname, PTE_MAGS)

print("\nDone.")
