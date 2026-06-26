import re

filepath = 'tools/phyxio_leaf_factory/05_ai_responses/segunda-ley-fuerza-masa/05_interpretacion.response.yaml'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')
fixed = 0
for i, line in enumerate(lines):
    # Buscar líneas tipo "es: [[xxx]]" o "en: [[xxx]]" sin comillas
    match = re.match(r'^(\s+(?:es|en):\s*)(\[\[[^\]]+\]\].*)$', line)
    if match:
        prefix = match.group(1)
        value = match.group(2)
        # Verificar que no esté ya entre comillas
        if not (value.startswith('"') or value.startswith("'")):
            # Escapar comillas dobles dentro del valor si las hay
            value_escaped = value.replace('"', '\\"')
            lines[i] = f'{prefix}"{value_escaped}"'
            fixed += 1

print(f"Líneas corregidas: {fixed}")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

print(f"Archivo guardado: {filepath}")
