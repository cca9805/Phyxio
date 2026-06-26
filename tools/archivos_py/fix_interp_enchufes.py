"""Fix unquoted colon strings in interpretacion.yaml for enchufes-y-tomas."""
import re
from pathlib import Path
import yaml

p = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/enchufes-y-tomas/interpretacion.yaml')
text = p.read_text(encoding='utf-8')

lines = text.splitlines()
fixed = []
for line in lines:
    # Match lines like: "        es: text: with colon" or "        en: text: with colon"
    m = re.match(r'^(\s+)(es|en): (.+)$', line)
    if m:
        indent, lang, value = m.group(1), m.group(2), m.group(3)
        # Only quote if not already quoted and contains a colon
        if ':' in value and not (value.startswith("'") or value.startswith('"')):
            escaped = value.replace("'", "\\'")
            line = f"{indent}{lang}: '{escaped}'"
    fixed.append(line)

text2 = '\n'.join(fixed)
try:
    yaml.safe_load(text2)
    p.write_text(text2, encoding='utf-8')
    print('interpretacion.yaml fixed and OK')
except yaml.YAMLError as e:
    print(f'Still error: {e}')
    # Show problematic area
    lines2 = text2.splitlines()
    for i, l in enumerate(lines2[165:185], start=166):
        print(f'L{i}: {l}')
