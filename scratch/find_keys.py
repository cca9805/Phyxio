import re

with open('frontend/src/v2/components/graphs/dinamica/index.js', 'r', encoding='utf-8') as f:
    content = f.read()

keys = re.findall(r'^\s*\"([^\"]+)\"\s*:\s*\{', content, re.MULTILINE)
print("Keys in dinamica/index.js:")
for k in sorted(keys):
    print(f" - {k}")
