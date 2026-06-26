import os
import re

def ultimate_healer(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    
    # Simple rule-based re-indentation
    # We ignore previous indentation and build it from context
    
    current_indent = 0
    in_formulas = False
    in_formula_item = False
    
    for line in lines:
        stripped = line.strip()
        if not stripped:
            new_lines.append("\n")
            continue
            
        # Top level keys
        if re.match(r'^(version|topic|variables|ui|formulas):', stripped):
            new_lines.append(stripped + "\n")
            in_formulas = (stripped == "formulas:")
            current_indent = 0
            continue
            
        # List items in formulas: - id:
        if in_formulas and re.match(r'^- id:', stripped):
            new_lines.append(stripped + "\n")
            current_indent = 2
            continue
            
        # Standard keys under formula item or variables
        m = re.match(r'^(\w+):\s*(.*)$', stripped)
        if m:
            key = m.group(1)
            val = m.group(2).strip()
            # If it's es/en
            if key in ["es", "en"]:
                # This is tricky because it could be under title, or sign_meaning etc.
                # Let's assume it's always +2 from the previous key if the previous key ended with :
                pass

    # Actually, the most robust way is to fix the SPECIFIC errors I see.
    # The errors are mostly 2 spaces vs 4 spaces.
    
    # I'll just write a script that FIXES the indentation of any line starting with '-' 
    # to be either 0 or 2 or 4 spaces depending on the previous line.
    
    fixed_lines = []
    for i, line in enumerate(lines):
        stripped = line.strip()
        if stripped.startswith("-"):
            # If previous line was 'formulas:', indent 0
            if i > 0 and "formulas:" in lines[i-1]:
                fixed_lines.append(stripped + "\n")
            # If previous line was 'rearrangements:', indent 2
            elif i > 0 and "rearrangements:" in lines[i-1]:
                fixed_lines.append("  " + stripped + "\n")
            # If previous line was 'domain_checks:', indent 2
            elif i > 0 and "domain_checks:" in lines[i-1]:
                fixed_lines.append("  " + stripped + "\n")
            else:
                fixed_lines.append(line)
        else:
            fixed_lines.append(line)
            
    with open(file_path, "w", encoding="utf-8") as f:
        f.writelines(fixed_lines)
    return True
