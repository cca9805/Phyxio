import re
from pathlib import Path

content = open('frontend/src/v2/components/graphs/fluidos/index.js', 'r', encoding='utf-8').read()
# Remove comments
content = re.sub(r'//.*', '', content)
content = re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)

export_match = re.search(r'export const graphs\s*=\s*\{(.*?)\n\};', content, re.DOTALL)
if export_match:
    print('Match found')
    body = export_match.group(1)
    # The validator uses double quotes in its regex?
    # No, it uses [^"]+
    for m in re.finditer(r'\"([^\"]+)\"\s*:\s*\{([^}]+)\}', body):
        print(f"Key: '{m.group(1)}'")
else:
    print('No match for export const graphs')
    # Try a more relaxed one
    relax = re.search(r'export const graphs\s*=\s*\{(.*)\}', content, re.DOTALL)
    if relax:
        print("Relaxed match found")
