import re

target_keys = {
    "palanca",
    "tipos-de-palancas",
    "polea",
    "poleas-simples",
    "poleas-compuestas",
    "plano-inclinado",
    "rueda-y-eje",
    "tornillo",
    "ventaja-mecanica"
}

with open('frontend/src/v2/components/graphs/dinamica/index.js', 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.splitlines()
output_dinamica_lines = []
output_aplicaciones_blocks = {}

in_raw_graphs = False
current_key = None
current_block = []

for line in lines:
    if "const rawGraphs = {" in line:
        in_raw_graphs = True
        output_dinamica_lines.append(line)
        continue
        
    if in_raw_graphs:
        if line.strip() == "};" and not current_key:
            in_raw_graphs = False
            output_dinamica_lines.append(line)
            continue
            
        m = re.match(r'^  "([^"]+)":\s*\{', line)
        if m and not current_key:
            current_key = m.group(1)
            current_block = [line]
            continue
            
        if current_key:
            current_block.append(line)
            if line.startswith("  },") or line.startswith("  }"):
                if current_key in target_keys:
                    output_aplicaciones_blocks[current_key] = current_block
                else:
                    output_dinamica_lines.extend(current_block)
                current_key = None
                current_block = []
            continue
            
        output_dinamica_lines.append(line)
    else:
        output_dinamica_lines.append(line)

print(f"Extracted keys: {sorted(list(output_aplicaciones_blocks.keys()))}")
print(f"Total lines in modified dinamica/index.js: {len(output_dinamica_lines)}")

# Check brace balance of output_dinamica_lines
dinamica_content = "\n".join(output_dinamica_lines)
open_count = 0
close_count = 0
for char in dinamica_content:
    if char == '{': open_count += 1
    elif char == '}': close_count += 1

print(f"Dinamica brace balance: {open_count} open, {close_count} close (diff: {open_count - close_count})")

# Check brace balance of applications content
app_blocks_str = "\n".join(["\n".join(output_aplicaciones_blocks[k]) for k in sorted(output_aplicaciones_blocks.keys())])
app_open = 0
app_close = 0
for char in app_blocks_str:
    if char == '{': app_open += 1
    elif char == '}': app_close += 1
print(f"Applications block brace balance: {app_open} open, {app_close} close (diff: {app_open - app_close})")
