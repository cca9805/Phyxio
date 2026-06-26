import yaml
import os
import re

leaf_path = 'frontend/src/data_v2_i18n/fisica-clasica/mecanica/rotacion/dinamica/momento-de-inercia/definicion-momento-de-inercia'
mag_file = os.path.join(leaf_path, 'magnitudes.yaml')

with open(mag_file, 'r', encoding='utf-8') as f:
    mag_data = yaml.safe_load(f)

magnitudes = mag_data.get('magnitudes', [])
mag_ids = [m['id'] for m in magnitudes]
mag_names_es = {m['id']: m.get('nombre', {}).get('es') for m in magnitudes}
mag_names_en = {m['id']: m.get('nombre', {}).get('en') for m in magnitudes}
mag_symbols = {m['id']: m.get('symbol') for m in magnitudes}

md_files = [f for f in os.listdir(leaf_path) if f.endswith('.md')]

used_ids = set()
missing_marked = []

# Regex for [[id]]
ref_regex = re.compile(r'\[\[([^\]]+)\]\]')

# For Part 2, we look for names/ids that are NOT marked.
# We'll create a list of strings to look for.
# It's better to look for names because symbols like 'I' or 'm' might have many false positives.
# But often the requirement is to check if the 'id' or 'nombre' appears as plain text.

results_part1 = []
results_part2 = []

for filename in md_files:
    path = os.path.join(leaf_path, filename)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Part 1: Find all [[id]]
    matches = ref_regex.findall(content)
    for m in matches:
        used_ids.add(m)

# 1) IDs not in any [[id]]
not_appearing = [mid for mid in mag_ids if mid not in used_ids]

# 2) Tokens visible in markdown detected as magnitudes without markings
# We'll look for:
# - Common names (es if .md, en if .en.md)
# - IDs
# We should avoid cases where it IS marked, e.g. [[id]] or [[id|label]]
# And we should probably only look for the "name" of the magnitude.

# Clean markdown (remove code blocks and links to avoid false positives in links/code)
def clean_content(text):
    text = re.sub(r'`.*?`', '', text, flags=re.DOTALL)
    text = re.sub(r'.*?', '', text)
    return text

for filename in md_files:
    path = os.path.join(leaf_path, filename)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    cleaned = clean_content(content)
    # Remove existing [[...]] to avoid finding things already marked
    # We'll replace them with a placeholder that won't match names
    cleaned_no_marks = re.sub(r'\[\[.*?\]\]', ' --- ', cleaned)
    
    is_english = filename.endswith('.en.md')
    
    for mid in mag_ids:
        # Check for ID (usually caps or specific strings)
        # Check for Nombre
        name = mag_names_en[mid] if is_english else mag_names_es[mid]
        
        # Word boundaries are important
        if name:
            # Escape name for regex
            escaped_name = re.escape(name)
            # Find all occurrences of name as a whole phrase/word
            # Use flags=re.IGNORECASE if appropriate, but usually these are technical terms.
            # Let's try case insensitive first as it's more helpful for finding missing marks.
            for match in re.finditer(r'\b' + escaped_name + r'\b', cleaned_no_marks, re.IGNORECASE):
                results_part2.append({
                    'file': filename,
                    'token': match.group(0),
                    'mag_id': mid
                })

print("--- PART 1: MISSING IDs ---")
for mid in not_appearing:
    print(mid)

print("\n--- PART 2: UNMARKED TOKENS ---")
for res in results_part2:
    print(f"File: {res['file']}, Token: '{res['token']}', Suggested ID: [[{res['mag_id']}]]")

