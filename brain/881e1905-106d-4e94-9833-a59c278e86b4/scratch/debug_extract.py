import re, unicodedata, pathlib

def normalize(text):
    text = unicodedata.normalize('NFKD', text)
    return ''.join(ch for ch in text if not unicodedata.combining(ch)).lower()

def count_words(text):
    return len(re.findall(r"\b[\wáéíóúÁÉÍÓÚñÑüÜ]+\b", text, flags=re.UNICODE))

def extract(text, heading):
    lines = text.splitlines()
    target = normalize(re.sub(r'^#{1,6}\s+', '', heading.strip()))
    start_idx = None
    level = None
    for i, line in enumerate(lines):
        m = re.match(r'^(#{1,6})\s+(.+?)\s*$', line.strip())
        if m:
            title = m.group(2).strip()
            if normalize(title) == target:
                start_idx = i + 1
                level = len(m.group(1))
                break
    if start_idx is None: return 'NOT FOUND'
    res = []
    for line in lines[start_idx:]:
        m = re.match(r'^(#{1,6})\s+(.+?)\s*$', line.strip())
        if m and len(m.group(1)) <= level: break
        res.append(line)
    return '\n'.join(res)

path = pathlib.Path('frontend/src/data_v2_i18n/fisica-clasica/mecanica/fluidos/fundamentos/concepto-de-fluido/teoria.md')
text = path.read_text(encoding='utf-8')

esencial = extract(text, '## 🟢 Nivel esencial')
formal = extract(text, '## 🔵 Nivel formal')
estructural = extract(text, '## 🔴 Nivel estructural')

e_words = count_words(esencial)
f_words = count_words(formal)
s_words = count_words(estructural)

print(f'ESENCIAL WORDS: {e_words}')
print(f'FORMAL WORDS: {f_words}')
print(f'ESTRUCTURAL WORDS: {s_words}')

print(f'DENSITY OK (S >= E*0.6): {s_words >= e_words * 0.6}')
print(f'TOTAL WORDS: {count_words(text)}')
