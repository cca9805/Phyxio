import re
from pathlib import Path

path = Path('frontend/src/v2/map/phyxio-map.yaml')
if not path.exists():
    print("Map not found")
    exit(1)

text = path.read_text(encoding='utf8')

def fix_quotes(match):
    prefix = match.group(1)
    content = match.group(2).strip()
    # If already quoted with ' or ", leave it
    if (content.startswith("'") and content.endswith("'")) or (content.startswith('"') and content.endswith('"')):
        return match.group(0)
    # Quote it
    return f"{prefix}'{content}'"

# Match lines starting with descripcion or description_en, having a colon in the value
new_text = re.sub(r'^(\s*(?:descripcion|description_en):\s*)(.*:.*)$', fix_quotes, text, flags=re.M)

if text != new_text:
    path.write_text(new_text, encoding='utf8')
    print("Fixed YAML descriptions")
else:
    print("No changes needed")
