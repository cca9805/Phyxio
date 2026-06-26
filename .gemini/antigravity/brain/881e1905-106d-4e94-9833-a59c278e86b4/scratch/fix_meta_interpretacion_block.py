import os
import re

def fix_meta_interpretacion_block(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Even more flexible regex
    pattern = r'^(\s*interpretacion:\s*)\n(.*?)(?=\n\S+:|$)'
    m = re.search(pattern, content, re.DOTALL | re.MULTILINE)
    
    if not m: 
        return False
    
    header = m.group(1)
    block = m.group(2)
    lines = block.split("\n")
    new_lines = []
    
    sub_keys = ["enabled", "archivo", "ui", "mini_graph", "preferred_type", "output_policy", "max_inline_messages", "show_warnings", "show_likely_errors", "dependencies", "requires_formulas", "requires_magnitudes", "supports_graph_binding"]
    ui_keys = ["inline_calculator", "inline_graph", "dedicated_tab", "tab_label", "mini_graph", "preferred_type", "output_policy", "max_inline_messages", "show_warnings", "show_likely_errors", "dependencies"]
    
    for line in lines:
        stripped = line.strip()
        if not stripped:
            new_lines.append("")
            continue
            
        m_key = re.match(r'^(\s*)(\w+):\s*(.*)$', line)
        if m_key:
            key = m_key.group(2)
            rest = m_key.group(3).strip()
            
            if key in sub_keys:
                new_lines.append(f"  {key}: {rest}")
            elif key in ui_keys:
                new_lines.append(f"    {key}: {rest}")
            elif key in ["es", "en"]:
                new_lines.append(f"      {key}: {rest}")
            else:
                new_lines.append(f"    {key}: {rest}")
        else:
            new_lines.append("    " + stripped)

    new_block = "\n".join(new_lines)
    if new_block.strip() != block.strip():
        new_content = content.replace(block, new_block)
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        return True
    return False

if __name__ == "__main__":
    root_dir = r"C:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\fluidos"
    count = 0
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith("meta.yaml"):
                path = os.path.join(root, file)
                if fix_meta_interpretacion_block(path):
                    count += 1
                    print(f"Fixed Meta Interp Block: {path}")

    print(f"\nDone. Fixed {count} meta.yaml files.")
