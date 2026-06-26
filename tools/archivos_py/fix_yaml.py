import re

with open('frontend/src/data_v2_i18n/fisica-clasica/mecanica/cantidad-de-movimiento/fundamentos/momento-lineal/interpretacion.yaml', 'r', encoding='utf-8') as f:
    text = f.read()

text = re.sub(r'\s*magnitude_type:.*?\n', '\n', text)
text = re.sub(r'\s*semantic_role:\s*\n\s*es:.*?\n\s*en:.*?\n', '\n', text)

def replace_text(match):
    indent = match.group(1)
    es = match.group(2).strip()
    if es.startswith('"') and es.endswith('"'):
        pass
    else:
        es = f'"{es}"'
        
    en = match.group(3).strip()
    if en.startswith('"') and en.endswith('"'):
        pass
    else:
        en = f'"{en}"'
        
    return f'{indent}text:\n{indent}  es: {es}\n{indent}  en: {en}\n'

text = re.sub(r'([ \t]+)text_es:(.*?)\n[ \t]+text_en:(.*?)\n', replace_text, text)

def replace_when(match):
    indent = match.group(1)
    val = match.group(2).strip()
    if val.startswith('"') or val.startswith('\''):
        return f'{indent}when: {val}\n'
    return f'{indent}when: \'{val}\'\n'

text = re.sub(r'([ \t]+)when:(.*?)\n', replace_when, text)

with open('frontend/src/data_v2_i18n/fisica-clasica/mecanica/cantidad-de-movimiento/fundamentos/momento-lineal/interpretacion.yaml', 'w', encoding='utf-8') as f:
    f.write(text)
print("Done!")
