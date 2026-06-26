import re

INLINE_MATH_RE = re.compile(r"\\\((?:\\.|[^\\])*?\\\)|(?<!\\)\$(?:\\.|[^$])*?(?<!\\)\$")

tests = [
    r'La aceleración angular (\(\alpha\)) describe',
    r'la aceleración centrípeta (\(a_c = \omega^2 R\))',
    r'la energía almacenada (\(E_k = \frac{1}{2} I \omega^2\))',
    r'velocidad constante de $v = 90\;\text{km/h}$',
    r'texto $x_0$ más texto',
]

for line in tests:
    matches = INLINE_MATH_RE.findall(line)
    print(f"Line: {line[:60]}")
    print(f"  Matches: {matches}")
