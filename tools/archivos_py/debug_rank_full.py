
import re
import unicodedata
import yaml
from pathlib import Path
from typing import List, Dict, Tuple

def _normalize_text_for_search(text: str) -> str:
    text = unicodedata.normalize("NFKD", text)
    text = "".join(ch for ch in text if not unicodedata.combining(ch))
    return text.lower()

def _collect_formula_entries(for_path: Path) -> List[Dict[str, str]]:
    data = yaml.safe_load(for_path.read_text(encoding="utf-8"))
    items = data.get("formulas", [])
    entries = []
    for item in items:
        fid = str(item.get("id", "")).strip()
        target = ""
        rearrangements = item.get("rearrangements", [])
        if rearrangements:
            target = str(rearrangements[0].get("target", "")).strip()
        latex = str(item.get("latex", "") or item.get("equation", "") or "").strip()
        entries.append({"id": fid, "target": target, "latex": latex})
    return entries

def _rank_core_formulas(entries: List[Dict[str, str]]) -> List[Dict[str, str]]:
    scored = []
    for entry in entries:
        score = 0
        if entry.get("target"): score += 2
        if entry.get("latex"): score += 2
        if entry.get("id"): score += 1
        scored.append((score, entry))
    # EXACT SORTING FROM VALIDATOR
    scored.sort(key=lambda x: (-x[0], x[1].get("id", "")))
    return scored

for_path = Path(r"c:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\aplicaciones\maquinas-simples\plano-inclinado\formulas.yaml")
scored = _rank_core_formulas(_collect_formula_entries(for_path))

print("All Formulas Ranked:")
for score, f in scored:
    print(f"  Score: {score}, ID: {f['id']}, Target: {f['target']}")

core = [f for s, f in scored if s > 0][:6]
print("\nTop 6 (Core):")
for f in core:
    print(f"  {f['id']}")
