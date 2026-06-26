import os
import re

def force_canonical_indent(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    for line in lines:
        stripped = line.strip()
        if not stripped:
            new_lines.append(line)
            continue
            
        if stripped.startswith("- id:"):
            new_lines.append(f"  - id: {stripped[5:].strip()}\n")
        elif ":" in stripped and not stripped.startswith("-"):
            # It's a key. If it's a root key, 0 indent. If it's a child key, 4 indent.
            key = stripped.split(":")[0].strip()
            if key in ["version", "magnitudes", "formulas", "topic", "variables", "ui", "config"]:
                new_lines.append(f"{key}: {stripped.split(':', 1)[1].strip()}\n")
            else:
                # We'll use 4 spaces for everything else for now.
                # This is a brute-force fix.
                new_lines.append(f"    {key}: {stripped.split(':', 1)[1].strip()}\n")
        else:
            new_lines.append(line)

    with open(file_path, "w", encoding="utf-8") as f:
        f.writelines(new_lines)

if __name__ == "__main__":
    # Just for Venturi magnitudes for now
    force_canonical_indent(r"C:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\fluidos\dinamica-de-fluidos\aplicaciones-de-bernoulli\efecto-venturi\magnitudes.yaml")
