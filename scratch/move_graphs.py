import os
import re
import shutil

# Paths
graphs_dir = "frontend/src/v2/components/graphs"
dinamica_dir = os.path.join(graphs_dir, "dinamica")
aplicaciones_dir = os.path.join(graphs_dir, "aplicaciones")

dinamica_index_path = os.path.join(dinamica_dir, "index.js")
aplicaciones_index_path = os.path.join(aplicaciones_dir, "index.js")

# Simple machines keys to move
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

# Subcomponent filenames to move
filenames_to_move = [
    "Svg/PalancaGraphsSvg.jsx",
    "Svg/PlanoInclinadoGraphsSvg.jsx",
    "Svg/PoleaGraphsSvg.jsx",
    "Svg/PoleasCompuestasGraphsSvg.jsx",
    "Svg/PoleasSimplesGraphsSvg.jsx",
    "Svg/RuedaYEjeGraphsSvg.jsx",
    "Svg/TiposDePalancasGraphsSvg.jsx",
    "Svg/TornilloGraphsSvg.jsx",
    "Coord/PoleasCompuestasGraphsCoord.jsx",
    "Coord/PoleasSimplesGraphsCoord.jsx",
    "Coord/TornilloGraphsCoord.jsx",
    "Coord/VentajaMecanicaGraphsCoord.jsx",
    "Dcl/PlanoInclinadoGraphsDcl.jsx"
]

print("1. Creating directory structure for 'aplicaciones'...")
for sub in ["Svg", "Coord", "Dcl"]:
    os.makedirs(os.path.join(aplicaciones_dir, sub), exist_ok=True)

print("2. Reading dinamica/index.js...")
with open(dinamica_index_path, "r", encoding="utf-8") as f:
    content = f.read()

lines = content.splitlines()
moved_imports = []
remaining_lines = []

import_pattern = re.compile(r'import\s+(\w+)\s+from\s+[\"\']\./(Svg|Coord|Dcl)/([^\"\']+)[\"\']\s*;?')

for line in lines:
    m = import_pattern.match(line)
    if m:
        comp_name = m.group(1)
        sub_folder = m.group(2)
        rel_path = f"{sub_folder}/{m.group(3)}"
        if rel_path in filenames_to_move:
            print(f" - Found import to move: {line}")
            moved_imports.append((comp_name, sub_folder, m.group(3)))
            continue
    remaining_lines.append(line)

content = "\n".join(remaining_lines)

# Now parse rawGraphs line-by-line
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

print("3. Writing modified dinamica/index.js...")
with open(dinamica_index_path, "w", encoding="utf-8") as f:
    f.write("\n".join(output_dinamica_lines))

print("4. Writing aplicaciones/index.js...")
# Assemble index.js for applications
app_imports_str = 'import { withGraphContextRegistry } from "../shared/withGraphContext.jsx";\n'
for comp_name, sub_folder, filename in moved_imports:
    app_imports_str += f'import {comp_name} from "./{sub_folder}/{filename}";\n'

app_blocks_str = "\n".join(["\n".join(output_aplicaciones_blocks[k]) for k in sorted(output_aplicaciones_blocks.keys())])

# Build aplicaciones/index.js content
app_index_content = f"""{app_imports_str}
const rawGraphs = {{
{app_blocks_str}
}};

export const graphs = withGraphContextRegistry(rawGraphs);

export default graphs;
"""

with open(aplicaciones_index_path, "w", encoding="utf-8") as f:
    f.write(app_index_content)

print("5. Moving graph files physically...")
for fn in filenames_to_move:
    src = os.path.join(dinamica_dir, fn)
    dst = os.path.join(aplicaciones_dir, fn)
    if os.path.exists(src):
        shutil.move(src, dst)
        print(f" - Moved: {fn}")
    else:
        print(f" - WARNING: src file not found: {src}")

print("6. Updating references in global index.js...")
global_index_path = os.path.join(graphs_dir, "index.js")
with open(global_index_path, "r", encoding="utf-8") as f:
    g_content = f.read()

# Insert the new import and merge it:
if 'import { graphs as aplicacionesGraphs }' not in g_content:
    pos = g_content.find('import { graphs as dinamicaGraphs }')
    if pos != -1:
        newline_pos = g_content.find('\n', pos)
        g_content = g_content[:newline_pos+1] + 'import { graphs as aplicacionesGraphs } from "./aplicaciones";\n' + g_content[newline_pos+1:]
        
    pos_merge = g_content.find('  ...dinamicaGraphs,')
    if pos_merge != -1:
        newline_pos = g_content.find('\n', pos_merge)
        g_content = g_content[:newline_pos+1] + '  ...aplicacionesGraphs,\n' + g_content[newline_pos+1:]

    with open(global_index_path, "w", encoding="utf-8") as f:
        f.write(g_content)
    print(" - Global index.js updated!")
else:
    print(" - Global index.js already has 'aplicacionesGraphs'.")

print("Done successfully!")
