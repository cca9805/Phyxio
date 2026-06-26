"""
Fix headings in modelos, errores, historia (ES + EN) across cinematica leaves.
Also fixes teoria heading issues (emojis, ### Orden de magnitud → ##).
"""
import re, pathlib, sys

BASE = pathlib.Path("frontend/src/data_v2_i18n/fisica-clasica/mecanica/cinematica")

# ── Replacements for modelos.md ──
MODELOS_ES = [
    (r"^## \d+\.\s*Modelo ideal",                      "## Modelo ideal"),
    (r"^## \d+\.\s*Modelo extendido",                   "## Modelo extendido"),
    (r"^## \d+\.\s*Dominio de validez cuantitativo",    "## Dominio de validez cuantitativo"),
    (r"^## \d+\.\s*Senales de fallo del modelo",        "## Señales de fallo del modelo"),
    (r"^## \d+\.\s*Señales de fallo del modelo",        "## Señales de fallo del modelo"),
    (r"^## \d+\.\s*Comparacion con modelos alternativos","## Comparación con modelos alternativos"),
    (r"^## \d+\.\s*Comparación con modelos alternativos","## Comparación con modelos alternativos"),
]

MODELOS_EN = [
    (r"^## \d+\.\s*Ideal model",                        "## Ideal model"),
    (r"^## \d+\.\s*Extended model",                      "## Extended model"),
    (r"^## \d+\.\s*Quantitative validity domain",        "## Quantitative validity domain"),
    (r"^## \d+\.\s*Model failure signals",               "## Model failure signals"),
    (r"^## \d+\.\s*Comparison with alternative models",  "## Comparison with alternative models"),
]

# ── Replacements for errores.md ──
ERRORES_ES = [
    (r"^## \d+\.\s*Errores conceptuales",       "## Errores conceptuales"),
    (r"^## \d+\.\s*Errores de modelo",           "## Errores de modelo"),
    (r"^## \d+\.\s*Errores matematicos",         "## Errores matemáticos"),
    (r"^## \d+\.\s*Errores matemáticos",         "## Errores matemáticos"),
    (r"^## \d+\.\s*Errores de interpretacion",   "## Errores de interpretación"),
    (r"^## \d+\.\s*Errores de interpretación",   "## Errores de interpretación"),
    (r"^## \d+\.\s*Regla de autocontrol rapido", "## Regla de autocontrol rápido"),
    (r"^## \d+\.\s*Regla de autocontrol rápido", "## Regla de autocontrol rápido"),
]

ERRORES_EN = [
    (r"^## \d+\.\s*Conceptual errors",           "## Conceptual errors"),
    (r"^## \d+\.\s*Model errors",                "## Model errors"),
    (r"^## \d+\.\s*Mathematical errors",          "## Mathematical errors"),
    (r"^## \d+\.\s*Interpretation errors",        "## Interpretation errors"),
    (r"^## \d+\.\s*Quick self-control rule",      "## Quick self-control rule"),
]

# ── Replacements for historia.md ──
HISTORIA_ES = [
    (r"^## \d+\.\s*Problema historico",            "## Problema histórico"),
    (r"^## \d+\.\s*Problema histórico",            "## Problema histórico"),
    (r"^## \d+\.\s*Que no se entendia antes",      "## Qué no se entendía antes"),
    (r"^## \d+\.\s*Qué no se entendía antes",      "## Qué no se entendía antes"),
    (r"^## \d+\.\s*Que cambio",                    "## Qué cambió"),
    (r"^## \d+\.\s*Qué cambió",                    "## Qué cambió"),
    (r"^## \d+\.\s*Evolucion conceptual",          "## Evolución conceptual"),
    (r"^## \d+\.\s*Evolución conceptual",          "## Evolución conceptual"),
    (r"^## \d+\.\s*Conexion con fisica moderna",   "## Conexión con física moderna"),
    (r"^## \d+\.\s*Conexión con física moderna",   "## Conexión con física moderna"),
]

HISTORIA_EN = [
    (r"^## \d+\.\s*Historical problem",             "## Historical problem"),
    (r"^## \d+\.\s*What was not understood before",  "## What was not understood before"),
    (r"^## \d+\.\s*What changed",                    "## What changed"),
    (r"^## \d+\.\s*Conceptual evolution",            "## Conceptual evolution"),
    (r"^## \d+\.\s*Connection with modern physics",  "## Connection with modern physics"),
]

# ── Teoria heading fixes ──
TEORIA_ES = [
    (r"^## Nivel esencial\s*$",             "## 🟢 Nivel esencial"),
    (r"^## Nivel formal\s*$",               "## 🔵 Nivel formal"),
    (r"^## Nivel estructural\s*$",          "## 🔴 Nivel estructural"),
    (r"^### Orden de magnitud\s*$",         "## Orden de magnitud"),
    (r"^## Interpretacion fisica profunda", "## Interpretación física profunda"),
    (r"^## Metodo de resolucion personalizado", "## Método de resolución personalizado"),
    (r"^## Sintesis final",                 "## Síntesis final"),
]

TEORIA_EN = [
    (r"^## Essential level\s*$",            "## 🟢 Essential level"),
    (r"^## Formal level\s*$",               "## 🔵 Formal level"),
    (r"^## Structural level\s*$",           "## 🔴 Structural level"),
    (r"^### Order of magnitude\s*$",        "## Order of magnitude"),
]

FILE_RULES = {
    "modelos.md":      MODELOS_ES,
    "modelos.en.md":   MODELOS_EN,
    "errores.md":      ERRORES_ES,
    "errores.en.md":   ERRORES_EN,
    "historia.md":     HISTORIA_ES,
    "historia.en.md":  HISTORIA_EN,
    "teoria.md":       TEORIA_ES,
    "teoria.en.md":    TEORIA_EN,
}


def apply_rules(text: str, rules: list) -> tuple[str, int]:
    count = 0
    lines = text.split("\n")
    out = []
    for line in lines:
        replaced = False
        for pattern, replacement in rules:
            if re.match(pattern, line, re.IGNORECASE):
                out.append(replacement)
                count += 1
                replaced = True
                break
        if not replaced:
            out.append(line)
    return "\n".join(out), count


def main():
    leaves = sorted(p.parent for p in BASE.rglob("meta.yaml"))
    print(f"Found {len(leaves)} leaves under cinematica\n")

    total_replacements = 0
    total_files = 0

    for leaf in leaves:
        leaf_name = leaf.name
        for fname, rules in FILE_RULES.items():
            fpath = leaf / fname
            if not fpath.exists():
                continue
            text = fpath.read_text(encoding="utf-8")
            new_text, count = apply_rules(text, rules)
            if count > 0:
                fpath.write_text(new_text, encoding="utf-8")
                print(f"  {leaf_name}/{fname}: {count} replacements")
                total_replacements += count
                total_files += 1

    print(f"\nTotal: {total_replacements} replacements across {total_files} files")


if __name__ == "__main__":
    main()
