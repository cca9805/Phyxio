import os
import re
import shutil

# Paths
graphs_dir = "frontend/src/v2/components/graphs"
dinamica_dir = os.path.join(graphs_dir, "dinamica")
aplicaciones_dir = os.path.join(graphs_dir, "aplicaciones")

dinamica_index_path = os.path.join(dinamica_dir, "index.js")
aplicaciones_index_path = os.path.join(aplicaciones_dir, "index.js")

target_pulleys = {"poleas-simples", "poleas-compuestas"}

files_to_move_back = [
    "Svg/PoleasSimplesGraphsSvg.jsx",
    "Coord/PoleasSimplesGraphsCoord.jsx",
    "Svg/PoleasCompuestasGraphsSvg.jsx",
    "Coord/PoleasCompuestasGraphsCoord.jsx"
]

print("1. Reading index files...")
with open(dinamica_index_path, "r", encoding="utf-8") as f:
    dinamica_content = f.read()

with open(aplicaciones_index_path, "r", encoding="utf-8") as f:
    aplicaciones_content = f.read()

# Re-add imports to dinamica/index.js
dinamica_imports = [
    'import PoleasCompuestasGraphsCoord from "./Coord/PoleasCompuestasGraphsCoord.jsx";',
    'import PoleasCompuestasGraphsSvg from "./Svg/PoleasCompuestasGraphsSvg.jsx";',
    'import PoleasSimplesGraphsCoord from "./Coord/PoleasSimplesGraphsCoord.jsx";',
    'import PoleasSimplesGraphsSvg from "./Svg/PoleasSimplesGraphsSvg.jsx";'
]

# Insert imports at the top of dinamica/index.js (after import { withGraphContextRegistry } ...)
pos = dinamica_content.find("import { withGraphContextRegistry }")
if pos != -1:
    newline_pos = dinamica_content.find("\n", pos)
    imports_str = "\n" + "\n".join(dinamica_imports)
    dinamica_content = dinamica_content[:newline_pos+1] + imports_str + dinamica_content[newline_pos+1:]

# Extract key blocks from aplicaciones/index.js and remove them
lines = aplicaciones_content.splitlines()
output_aplicaciones_lines = []
output_dinamica_blocks = []

in_raw_graphs = False
current_key = None
current_block = []

for line in lines:
    if "const rawGraphs = {" in line:
        in_raw_graphs = True
        output_aplicaciones_lines.append(line)
        continue
    
    if in_raw_graphs:
        if line.strip() == "};" and not current_key:
            in_raw_graphs = False
            output_aplicaciones_lines.append(line)
            continue
            
        m = re.match(r'^  "([^"]+)":\s*\{', line)
        if m and not current_key:
            current_key = m.group(1)
            current_block = [line]
            continue
            
        if current_key:
            current_block.append(line)
            if line.startswith("  },") or line.startswith("  }"):
                if current_key in target_pulleys:
                    output_dinamica_blocks.append("\n".join(current_block))
                    print(f" - Extracted block for {current_key} from aplicaciones/index.js")
                else:
                    output_aplicaciones_lines.extend(current_block)
                current_key = None
                current_block = []
            continue
            
        output_aplicaciones_lines.append(line)
    else:
        # Check imports to remove from aplicaciones/index.js
        if any(f'from "./Svg/Poleas' in line or f'from "./Coord/Poleas' in line for line in [line]):
            print(f" - Removing import from aplicaciones/index.js: {line}")
            continue
        output_aplicaciones_lines.append(line)

# Add extracted blocks to rawGraphs in dinamica/index.js
# Insert them right before the closing }; of rawGraphs (around the end of the file)
raw_graphs_end = dinamica_content.rfind("};")
if raw_graphs_end != -1:
    blocks_str = ",\n\n" + ",\n\n".join(output_dinamica_blocks)
    dinamica_content = dinamica_content[:raw_graphs_end] + blocks_str + dinamica_content[raw_graphs_end:]

# Write indices
print("2. Writing updated dinamica/index.js...")
with open(dinamica_index_path, "w", encoding="utf-8") as f:
    f.write(dinamica_content)

print("3. Writing updated aplicaciones/index.js...")
with open(aplicaciones_index_path, "w", encoding="utf-8") as f:
    f.write("\n".join(output_aplicaciones_lines))

print("4. Moving files back physically...")
for fn in files_to_move_back:
    src = os.path.join(aplicaciones_dir, fn)
    dst = os.path.join(dinamica_dir, fn)
    if os.path.exists(src):
        shutil.move(src, dst)
        print(f" - Moved back: {fn}")
    else:
        print(f" - WARNING: src file not found: {src}")

print("Done!")
