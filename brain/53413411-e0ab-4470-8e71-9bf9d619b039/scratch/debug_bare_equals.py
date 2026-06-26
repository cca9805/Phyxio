import re
from pathlib import Path

def strip_inline_math(line):
    # Standard \( ... \)
    line = re.sub(r"\\\((?:\\.|[^\\])*?\\\)", " [MATH] ", line)
    # Standard $ ... $
    line = re.sub(r"\$.*?\$", " [MATH] ", line)
    return line

def find_bare_equals(text: str):
    issues = []
    in_code_block = False
    in_math_block = False
    for lineno, line in enumerate(text.splitlines(), start=1):
        stripped = line.strip()
        if stripped.startswith("```"):
            in_code_block = not in_code_block
            continue
        if in_code_block:
            continue
        if stripped == "$$":
            in_math_block = not in_math_block
            continue
        if in_math_block:
            continue
        
        plain = strip_inline_math(line)
        if "=" in plain:
            issues.append(f"L{lineno}: {line.strip()} | PLAIN: {plain.strip()}")
    return issues

files = [
    "ejemplos.md", "ejemplos.en.md", "errores.md", "errores.en.md", "modelos.md", "modelos.en.md", "teoria.md", "teoria.en.md"
]

base_path = Path("frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/ecuaciones-de-maxwell/formulacion-diferencial")

for f in files:
    path = base_path / f
    if not path.exists(): continue
    text = path.read_text(encoding="utf-8")
    issues = find_bare_equals(text)
    if issues:
        print(f"--- {f} ---")
        for issue in issues:
            print(issue)
