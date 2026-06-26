import re

with open('tools/phyxio_leaf_factory/05_ai_responses/segunda-ley-fuerza-masa/05_interpretacion.response.yaml', 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')
errors = []
for i, line in enumerate(lines, 1):
    # Buscar líneas con [[xxx]] que no estén entre comillas
    if '[[' in line and ']]' in line:
        # Verificar si la parte del valor está entre comillas
        if ':' in line:
            parts = line.split(':', 1)
            if len(parts) == 2:
                value = parts[1].strip()
                # Si no empieza con comilla, hay problema potencial
                if value and not (value.startswith('"') or value.startswith("'")):
                    if re.search(r'^\s*es?:\s*\[\[', line):
                        errors.append((i, line.strip()[:80]))

print(f"Líneas con [[xxx]] sin comillas (pueden causar error YAML):")
for line_num, line_text in errors[:20]:
    print(f"  Línea {line_num}: {line_text}...")

if len(errors) > 20:
    print(f"  ... y {len(errors) - 20} más")
print(f"\nTotal: {len(errors)} líneas problemáticas")
