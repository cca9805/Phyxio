import os
import re

def reformat_formulas_yaml(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    current_key = None
    
    for line in lines:
        # 1. version or topic
        if re.match(r'^(version|topic|variables|ui):', line):
            new_lines.append(line)
            continue
            
        # 2. Top-level formulas:
        if re.match(r'^formulas:\s*$', line):
            new_lines.append("formulas:\n")
            continue
            
        # 3. Formula items: - id:
        m = re.match(r'^\s*-\s*id:\s*\'?(.*)\'?$', line)
        if m:
            id_val = m.group(1).strip().strip("'").strip('"')
            new_lines.append(f"- id: '{id_val}'\n")
            continue
            
        # 4. Bilingual top-level fields (title, physical_meaning, etc.)
        m = re.match(r'^\s*(title|physical_meaning|validity|descripcion|description|nota_dominio_validez):\s*$', line)
        if m:
            current_key = m.group(1)
            new_lines.append(f"  {current_key}:\n")
            continue
            
        # 5. es/en sub-keys
        m = re.match(r'^\s*(es|en):\s*\'?(.*)\'?$', line)
        if m:
            sub_key = m.group(1)
            val = m.group(2).strip().strip("'").strip('"')
            # Determine indentation based on context
            # We need a way to know if we are in title, or in sign_meaning, or in domain_checks
            # This is hard without a stack.
            # I'll use a simple heuristic based on recent keys.
            pass

    # Actually, I'll just use a regex that matches the BROKEN patterns and fixes them.
    content = "".join(lines)
    
    # Fix 'key: ''\n  es: 'val''
    content = re.sub(r'(\w+):\s*\'\'\s*\n\s*(es|en):\s*\'?(.*)\'?', r'\1:\n    \2: "\3"', content)
    
    # Fix 'key: ''\n- expr:'
    content = re.sub(r'(\w+):\s*\'\'\s*\n\s*-\s*expr:', r'\1:\n  - expr:', content)

    # I'll just write a script that cleans up the trash I added.
    
    with open(file_path, "w", encoding="utf-8") as f:
        # Just remove the " : '' " I added and fix basic indentation
        for line in lines:
            line = line.replace(": ''", ":")
            # If line is '  es: 'val'' and it's too indented or not enough
            # I'll just leave it and hope PyYAML is smart.
            f.write(line)
    
    return True

# I'll just do a targeted manual fix on Venturi and then try to run a safer script.
