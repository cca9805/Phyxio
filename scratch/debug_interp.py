import sys
sys.path.insert(0, '.')
from tools.validator_modular._core import load_yaml, _yaml_to_searchable_text, _safe_dict, _safe_list
from pathlib import Path

path = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/ecuaciones-de-maxwell/ecuacion-de-onda-electromagnetica/interpretacion.yaml')
data = load_yaml(path)

targets = _safe_dict(data.get("targets"))
print(f"Type of targets: {type(targets)}")
print(f"Keys in targets: {list(targets.keys())[:5]}")

# Check summary_rules of first target
first_key = list(targets.keys())[0]
first_val = targets[first_key]
print(f"\nFirst target key: {first_key}")
print(f"First target type: {type(first_val)}")
if isinstance(first_val, dict):
    sr = first_val.get('summary_rules')
    print(f"summary_rules type: {type(sr)}")
    if isinstance(sr, list) and sr:
        txt = _yaml_to_searchable_text(sr[0])
        print(f"summary_rules[0] text (first 200): {txt[:200]}")

# Simulate _collect_section_rule_text for summary
rule_key = "summary_rules"
texts = []
for td in targets.values():
    if not isinstance(td, dict):
        continue
    block = td.get(rule_key)
    if isinstance(block, list):
        for item in block:
            if isinstance(item, dict):
                texts.append(_yaml_to_searchable_text(item))
full_text = "\n".join(t for t in texts if t).strip()
print(f"\nFull summary text length: {len(full_text)}")
print(f"First 300 chars: {full_text[:300]}")

# Check markers
summary_markers = ["indica", "significa", "resume", "describe", "depends", "depende", "resultante", "equilibr", "aumenta", "disminuye", "domina", "balance"]
found = [m for m in summary_markers if m in full_text.lower()]
print(f"\nMarkers found: {found}")
