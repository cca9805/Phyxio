
import re
import unicodedata
from pathlib import Path

def _normalize_text_for_search(text: str) -> str:
    text = unicodedata.normalize("NFKD", text)
    text = "".join(ch for ch in text if not unicodedata.combining(ch))
    return text.lower()

def _text_contains_token(text: str, token: str) -> bool:
    if not token:
        return False
    text_n = _normalize_text_for_search(text)
    token_n = _normalize_text_for_search(str(token).strip())
    if not token_n:
        return False
    if re.search(rf"(?<![A-Za-z0-9_]){re.escape(token_n)}(?![A-Za-z0-9_])", text_n):
        return True
    return False

def _extract_markdown_section(text: str, heading: str) -> str:
    lines = text.splitlines()
    start_idx = None
    start_level = None
    heading_target = _normalize_text_for_search(re.sub(r"^#{1,6}\s+", "", heading.strip()))
    for i, line in enumerate(lines):
        m = re.match(r"^(#{1,6})\s+(.+?)\s*$", line.strip())
        if not m:
            continue
        level = len(m.group(1))
        title = m.group(2).strip()
        if _normalize_text_for_search(title) == heading_target:
            start_idx = i + 1
            start_level = level
            break
    if start_idx is None:
        return ""
    collected = []
    for line in lines[start_idx:]:
        m = re.match(r"^(#{1,6})\s+(.+?)\s*$", line.strip())
        if m and len(m.group(1)) <= start_level:
            break
        collected.append(line)
    return "\n".join(collected).strip()

path = Path(r"c:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\aplicaciones\maquinas-simples\plano-inclinado\ejemplos.md")
text = path.read_text(encoding="utf-8")

sec_res_simb = _extract_markdown_section(text, "Resolución simbólica")
sec_sust = _extract_markdown_section(text, "Sustitución numérica")

print(f"Section 'Resolución simbólica' length: {len(sec_res_simb)}")
print(f"Section 'Sustitución numérica' length: {len(sec_sust)}")

target_blob = f"{sec_res_simb}\n{sec_sust}"


def _collect_formula_entries(for_path: Path) -> List[Dict[str, str]]:
    import yaml
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
    scored.sort(key=lambda x: (-x[0], x[1].get("id", "")))
    return [entry for score, entry in scored if score > 0][:6]

for_path = Path(r"c:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\aplicaciones\maquinas-simples\plano-inclinado\formulas.yaml")
formulas = _collect_formula_entries(for_path)
core_formulas = _rank_core_formulas(formulas)

print("Core Formulas (Top 6):")
for f in core_formulas:
    print(f"  ID: {f['id']}, Target: {f['target']}, Score: {5 if f['target'] and f['latex'] else '?'}")

for f in core_formulas:
    reduced = {"id": f["id"], "symbol": f["target"], "name": "", "target": f["target"]}
    present = _entry_present_in_text(target_blob, f["id"]) or _entry_present_in_text(target_blob, f["target"])
    print(f"Formula '{f['id']}' present in resolution: {present}")
