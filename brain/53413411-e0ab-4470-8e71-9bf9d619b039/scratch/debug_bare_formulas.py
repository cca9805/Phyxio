import re
from pathlib import Path

_BARE_FORMULA_RE = re.compile(
    r"\b([A-Za-z]{1,3}(?:_\{?\w+\}?)?)\s*=\s*"
    r"([A-Za-z0-9_\s+\-*/^(){},.\\]+)"
)

_BARE_MATH_INDICATOR_RE = re.compile(
    r"[*/^]"
    r"|_\{?\w"
    r"|\w\("
    r"|(?:sin|cos|tan|sqrt|log|exp|theta|alpha|omega|mu|rho|sigma|delta|gamma|phi|tau|pi|beta)\b"
)

def strip_inline_math(line):
    line = re.sub(r"\\\((?:\\.|[^\\])*?\\\)", " ", line)
    line = re.sub(r"\$.*?\$", " ", line)
    return line

def find_bare_formula_issues(text: str):
    issues = []
    for lineno, line in enumerate(text.splitlines(), start=1):
        plain = strip_inline_math(line)
        for m in _BARE_FORMULA_RE.finditer(plain):
            rhs = m.group(2).strip()[:60]
            if _BARE_MATH_INDICATOR_RE.search(rhs) or re.search(r"[A-Za-z]", rhs):
                issues.append(f"L{lineno}: {line.strip()} | PLAIN: {plain.strip()}")
                break
    return issues

path = Path("frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/ecuaciones-de-maxwell/formulacion-diferencial/ejemplos.md")
text = path.read_text(encoding="utf-8")
issues = find_bare_formula_issues(text)
for issue in issues:
    print(issue)
