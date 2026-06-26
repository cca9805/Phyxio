import re

def strip_inline_math(line):
    line = re.sub(r"\\\((?:\\.|[^\\])*?\\\)", " ", line)
    line = re.sub(r"(?<!\\)\$(?:\\.|[^$])*(?<!\\)\$", " ", line)
    return line

line = "El impulso [[J]] debe tener dimensiones de fuerza por tiempo. En el SI: $[M L T^{-2}] \\cdot [T] = [M L T^{-1}]$. Esta expresión coincide"
plain = strip_inline_math(line)
print(f"PLAIN: '{plain}'")

regex = r'\[[MLT][\sMLT]*\^[-0-9]+\]'
match = re.search(regex, plain)
print(f"MATCH: {match}")
