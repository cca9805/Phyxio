import sys
sys.path.insert(0, 'tools')
from validator_modular._core import _collect_magnitude_entries, _entry_tokens, _text_contains_token, _extract_markdown_section, _entry_present_in_text
from pathlib import Path
import re, unicodedata, yaml

def _normalize(text):
    text = unicodedata.normalize('NFD', str(text))
    text = ''.join(ch for ch in text if not unicodedata.combining(ch))
    return text.lower()

def _has_token(text, token):
    if not token: return False
    t = _normalize(text)
    k = _normalize(str(token).strip())
    if not k: return False
    return bool(re.search(rf'(?<![A-Za-z0-9_]){re.escape(k)}(?![A-Za-z0-9_])', t))

def _entry_tokens(entry):
    tokens = []
    for key in ('id', 'symbol', 'name', 'target'):
        v = str(entry.get(key, '')).strip()
        if v:
            tokens.append(v)
    return tokens

def _present(entry, text):
    return any(_has_token(text, t) for t in _entry_tokens(entry))

def extract_section(text, heading):
    lines = text.splitlines()
    ht = re.sub(r'^#{1,6}\s+', '', heading.strip()).lower().strip()
    start_idx = None
    start_level = None
    for i, line in enumerate(lines):
        m = re.match(r'^(#{1,6})\s+(.+?)\s*$', line.strip())
        if not m: continue
        level = len(m.group(1))
        title = m.group(2).strip().lower()
        if title == ht or title.endswith(ht):
            start_idx = i + 1
            start_level = level
            break
    if start_idx is None: return ''
    result = []
    for line in lines[start_idx:]:
        m = re.match(r'^(#{1,6})\s+', line.strip())
        if m and len(m.group(1)) <= start_level:
            break
        result.append(line)
    return '\n'.join(result)

leaf = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/fundamentos/fuerzas-electromagneticas/fuerza-de-lorentz')
mags = _collect_magnitude_entries(leaf / 'magnitudes.yaml')
teoria = (leaf / 'teoria.md').read_text(encoding='utf-8')
esencial = _extract_markdown_section(teoria, '## 🟢 Nivel esencial')

print("=== Entry keys ===")
if mags:
    print(list(mags[0].keys()))
print()
print("=== Texto esencial (primeras 500 chars) ===")
print(esencial[:500])
print()
print("=== Deteccion por magnitud (validator internals) ===")
count = 0
for mag in mags:
    mid = mag.get('id', '?')
    tokens = _entry_tokens(mag)
    found = _entry_present_in_text(mag, esencial)
    if found:
        count += 1
        matching = [t for t in tokens if _text_contains_token(esencial, t)]
        print("FOUND", mid, "| tokens=", tokens, "| matching=", matching)
    else:
        print("  --  ", mid, "| tokens=", tokens)
print("Total hit:", count)
