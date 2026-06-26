#!/usr/bin/env python3
"""Fix pregunta_principal format in Coord components.
Changes: const pregunta_principal = { es: ..., en: ... };
To:      const _graph_meta = { pregunta_principal: { es: ..., en: ... } };
"""
import re
from pathlib import Path

graphs_dir = Path(r"c:\Users\USER\Desktop\Phyxio\frontend\src\v2\components\graphs\cantidad-de-movimiento")
count = 0

for f in sorted(graphs_dir.glob("*GraphsCoord.jsx")):
    content = f.read_text(encoding="utf-8")
    if "const pregunta_principal = {" not in content:
        continue

    old_pat = r'(/\*\* Graph identity metadata \*/\n)const pregunta_principal = \{\n  es: ("[^"]+"),\n  en: ("[^"]+"),\n\};'
    m = re.search(old_pat, content)
    if m:
        new_block = (
            f'{m.group(1)}'
            f'const _graph_meta = {{\n'
            f'  pregunta_principal: {{\n'
            f'    es: {m.group(2)},\n'
            f'    en: {m.group(3)},\n'
            f'  }},\n'
            f'}};'
        )
        new_content = content[:m.start()] + new_block + content[m.end():]
        f.write_text(new_content, encoding="utf-8", newline="\n")
        count += 1
        print(f"FIXED: {f.name}")
    else:
        print(f"NO MATCH (trying alt pattern): {f.name}")
        # Try without the comment header
        old_pat2 = r'const pregunta_principal = \{\n  es: ("[^"]+"),\n  en: ("[^"]+"),\n\};'
        m2 = re.search(old_pat2, content)
        if m2:
            new_block = (
                f'const _graph_meta = {{\n'
                f'  pregunta_principal: {{\n'
                f'    es: {m2.group(1)},\n'
                f'    en: {m2.group(2)},\n'
                f'  }},\n'
                f'}};'
            )
            new_content = content[:m2.start()] + new_block + content[m2.end():]
            f.write_text(new_content, encoding="utf-8", newline="\n")
            count += 1
            print(f"  -> FIXED with alt pattern: {f.name}")
        else:
            print(f"  -> CANNOT FIX: {f.name}")

print(f"\nTotal fixed: {count}")
