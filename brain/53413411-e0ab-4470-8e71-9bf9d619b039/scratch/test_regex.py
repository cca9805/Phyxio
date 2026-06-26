import re

line = r"1. Dado un campo eléctrico \(\mathbf{E}(x,t) = E_0 \cos(kx - \omega t) \hat{j}\), determinar la densidad de carga local [[rho]]."

# Validator regexes
def strip_inline_math(line: str) -> str:
    line = re.sub(r"\\\((?:\\.|[^\\])*?\\\)", " ", line)
    line = re.sub(r"(?<!\\)\$(?:\\.|[^$])*(?<!\\)\$", " ", line)
    return line

_BARE_FORMULA_RE = re.compile(
    r"\b([A-Za-z]{1,3}(?:_\{?\w+\}?)?)\s*=\s*"
    r"([A-Za-z0-9_\s+\-*/^(){},.\\]+)"
)

plain = strip_inline_math(line)
print(f"LINE: {line}")
print(f"PLAIN: '{plain}'")

for m in _BARE_FORMULA_RE.finditer(plain):
    print(f"MATCH: {m.group(0)}")
