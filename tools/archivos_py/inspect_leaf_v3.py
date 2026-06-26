import yaml
import os
import re

leaf_path = 'frontend/src/data_v2_i18n/fisica-clasica/mecanica/rotacion/dinamica/momento-de-inercia/definicion-momento-de-inercia'
mag_file = os.path.join(leaf_path, 'magnitudes.yaml')

with open(mag_file, 'r', encoding='utf-8') as f:
    data = yaml.safe_load(f)

magnitudes = data.get('magnitudes', [])
mag_ids = [m['id'] for m in magnitudes]
mag_info = {
    m['id']: {
        'nombre_es': m.get('nombre', {}).get('es'),
        'nombre_en': m.get('nombre', {}).get('en'),
        'symbol': m.get('symbol')
    } for m in magnitudes
}

md_files = [f for f in os.listdir(leaf_path) if f.endswith('.md')]

used_ids = set()
for filename in md_files:
    path = os.path.join(leaf_path, filename)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    # Correct regex for [[id]] or [[id|label]]
    # It must capture only the ID part (before the | if it exists)
    found = re.findall(r'\[\[([^\|\]\n]+)(?:\|[^\]]+)?\]\]', content)
    used_ids.update(found)

missing_ids = sorted([mid for mid in mag_ids if mid not in used_ids])

print("MISSING_IDS:")
for mid in missing_ids:
    print(mid)

print("\nUNMARKED_TOKENS:")

for filename in md_files:
    path = os.path.join(leaf_path, filename)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove code blocks
    content = re.sub(r'`.*?`', ' ', content, flags=re.DOTALL)
    content = re.sub(r'[^]*', ' ', content)
    
    # Hide existing [[ ]] links
    content_no_marks = re.sub(r'\[\[.*?\]\]', ' LINK_PLACEHOLDER ', content)
    
    is_en = filename.endswith('.en.md')
    
    for mid, info in mag_info.items():
        name = info['nombre_en'] if is_en else info['nombre_es']
        if not name: continue
        
        # Word boundary search
        # Note: names like "Momento de inercia" should be found.
        # We use re.IGNORECASE for names.
        pattern = r'\b' + re.escape(name) + r'\b'
        matches = re.finditer(pattern, content_no_marks, re.IGNORECASE)
        for m in matches:
             # Double check: ensure it's not part of another word
             # Also exclude very short names if they aren't specific
             if len(name) > 2:
                 print(f"File: {filename}, Token: '{m.group(0)}', ID: {mid}")

