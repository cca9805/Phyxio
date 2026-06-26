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
    used_ids.update(re.findall(r'\[\[([^\|\]]+)(?:\|[^\]]+)?\]\]', content))

missing_ids = [mid for mid in mag_ids if mid not in used_ids]

print("MISSING_IDS:")
for mid in missing_ids:
    print(mid)

print("\nUNMARKED_TOKENS:")
for filename in md_files:
    path = os.path.join(leaf_path, filename)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove code blocks
    content = re.sub(r'`.*?`', '', content, flags=re.DOTALL)
    content = re.sub(r'.*?', '', content)
    # Remove already marked ones
    content_no_marks = re.sub(r'\[\[.*?\]\]', ' ', content)
    
    is_en = filename.endswith('.en.md')
    
    for mid, info in mag_info.items():
        name = info['nombre_en'] if is_en else info['nombre_es']
        
        # Searching for name as a whole word, excluding common prepositions if name is short
        if name and len(name) > 3:
            pattern = r'\b' + re.escape(name) + r'\b'
            matches = re.finditer(pattern, content_no_marks, re.IGNORECASE)
            for m in matches:
                print(f"File: {filename}, Token: '{m.group(0)}', ID: {mid}")

        # Also search for symbol? Symbols are often single letters, leads to many false positives if not careful.
        # But ID might be relevant.
        if mid in ['alpha', 'omega', 'tau', 'theta', 'delta_theta']: # specific physics IDs
             pattern = r'\b' + re.escape(mid) + r'\b'
             matches = re.finditer(pattern, content_no_marks)
             for m in matches:
                 print(f"File: {filename}, Token: '{m.group(0)}', ID: {mid}")

