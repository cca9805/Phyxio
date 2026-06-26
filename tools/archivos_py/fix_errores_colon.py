"""
Añade ':' tras los 5 subsections bold de errores.md y errores.en.md
en TODOS los leaf de cantidad-de-movimiento.
"""
from pathlib import Path

BASE = Path(r"frontend/src/data_v2_i18n/fisica-clasica/mecanica/cantidad-de-movimiento")

REPLACEMENTS_ES = {
    "**Por qué parece correcto**": "**Por qué parece correcto:**",
    "**Por qué es incorrecto**": "**Por qué es incorrecto:**",
    "**Señal de detección**": "**Señal de detección:**",
    "**Corrección conceptual**": "**Corrección conceptual:**",
    "**Mini-ejemplo de contraste**": "**Mini-ejemplo de contraste:**",
}

REPLACEMENTS_EN = {
    "**Why it seems correct**": "**Why it seems correct:**",
    "**Why it is wrong**": "**Why it is wrong:**",
    "**Detection signal**": "**Detection signal:**",
    "**Conceptual correction**": "**Conceptual correction:**",
    "**Mini contrast example**": "**Mini contrast example:**",
}

def fix_file(path: Path, replacements: dict) -> int:
    if not path.exists():
        return 0
    text = path.read_text(encoding="utf-8")
    count = 0
    for old, new in replacements.items():
        if old in text:
            text = text.replace(old, new)
            count += 1
    if count:
        path.write_text(text, encoding="utf-8")
    return count

total_es = 0
total_en = 0
for errmd in sorted(BASE.rglob("errores.md")):
    leaf = errmd.parent
    total_es += fix_file(leaf / "errores.md", REPLACEMENTS_ES)
    total_en += fix_file(leaf / "errores.en.md", REPLACEMENTS_EN)

print(f"ES: {total_es} reemplazos en errores.md")
print(f"EN: {total_en} reemplazos en errores.en.md")
print(f"Total: {total_es + total_en}")
