import re
from pathlib import Path

def find_markdown_math_render_issues(text: str, formula_ids=None, max_hits=12):
    issues = []
    in_code_block = False
    in_math_block = False
    formula_ids = formula_ids or set()
    ANY_FORMULA_REFERENCE_PATTERN = re.compile(r'\{\{f:(.*?)\}\}')
    FORMULA_REFERENCE_PATTERN = re.compile(r'\{\{f:(.*?)\}\}')
    MAGNITUDE_EQUATION_PATTERN = re.compile(r'\[\[(.*?)\]\]\s*=\s*')

    for lineno, line in enumerate(text.splitlines(), start=1):
        stripped = line.strip()
        if stripped.startswith("```"):
            in_code_block = not in_code_block
            continue
        if in_code_block:
            continue
        if re.search(r"\$\$.+\$\$", stripped):
            issues.append(f"L{lineno}: formula en $$ invalida; usar referencia {{f:id_formula}}: {stripped[:140]}")
            continue
        if stripped == "$$":
            in_math_block = not in_math_block
            issues.append(f"L{lineno}: bloque $$ invalido; usar referencia {{f:id_formula}}")
            continue
        if in_math_block:
            continue
        for ref in ANY_FORMULA_REFERENCE_PATTERN.finditer(line):
            ref_text = ref.group(0)
            if stripped != ref_text:
                issues.append(f"L{lineno}: referencia de formula inline invalida; debe estar aislada en su propia linea (con salto de linea antes y despues): {ref_text}")
        
        if len(re.findall(r"(?<!\\)\$", line)) % 2 == 1:
            issues.append(f"L{lineno}: delimitadores '$' desbalanceados")
        
        if MAGNITUDE_EQUATION_PATTERN.search(line) and not FORMULA_REFERENCE_PATTERN.search(line):
            # allowed
            pass
        elif MAGNITUDE_EQUATION_PATTERN.search(line):
             issues.append(f"L{lineno}: formula con magnitudes [[id]] invalida; usar referencia {{f:id_formula}}: {stripped[:140]}")

    return issues

path = Path("frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/ecuaciones-de-maxwell/interpretacion-fisica/ejemplos.md")
text = path.read_text(encoding="utf-8")
print(f"Issues in {path.name}:")
for issue in find_markdown_math_render_issues(text):
    print(issue)

path2 = Path("frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/ecuaciones-de-maxwell/interpretacion-fisica/errores.md")
text2 = path2.read_text(encoding="utf-8")
print(f"\nIssues in {path2.name}:")
for issue in find_markdown_math_render_issues(text2):
    print(issue)
