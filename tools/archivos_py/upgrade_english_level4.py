#!/usr/bin/env python3
import argparse
import json
import re
from pathlib import Path

VISIBLE_YAML_KEYS = {
    "nombre", "titulo", "descripcion", "descripcion_corta", "objetivos", "suposiciones", "title", "name", "description", "notes", "message"
}
EN_FILE_SUFFIXES = (".en.md",)
YAML_SUFFIXES = (".yaml", ".yml")


def read(p):
    return p.read_text(encoding="utf-8", errors="replace")


def write(p, txt):
    p.write_text(txt, encoding="utf-8")


def apply_replacements(text: str, repl: dict):
    out = text
    for old, new in sorted(repl.items(), key=lambda kv: len(kv[0]), reverse=True):
        out = re.sub(re.escape(old), new, out, flags=re.IGNORECASE)
    return out


def normalize_english_md(text: str, glossary: dict) -> str:
    out = text
    out = apply_replacements(out, glossary.get("markdown_phrase_replacements", {}))

    out = re.sub(r"\b[Aa] hanging block\b", "A suspended mass", out)
    out = re.sub(r"\bthe hanging block\b", "the suspended mass", out, flags=re.I)
    out = re.sub(r"\bblock attached to a rope\b", "suspended mass attached to a rope", out, flags=re.I)
    out = re.sub(r"\bused to study\b", "used to analyse", out, flags=re.I)
    out = re.sub(r"\bto calculate\b", "to determine", out, flags=re.I)
    out = re.sub(r"\bgravitational force and tension\b", "gravitational force and rope tension", out, flags=re.I)

    # polish headings toward a more academic tone
    heading_map = {
        "## Essential level": "## Essential level",
        "## Formal level": "## Formal level",
        "## Structural level": "## Structural level",
        "## Deep physical interpretation": "## Deep physical interpretation",
        "## Custom solution method": "## Custom solution method",
        "## Special cases and extended example": "## Special cases and extended example",
        "## Real student questions": "## Real student questions",
        "## Cross-connections and study pathways": "## Cross-connections and study pathways",
        "## Final synthesis": "## Final synthesis"
    }
    for old, new in heading_map.items():
        out = out.replace(old, new)

    # tighten repeated spaces
    out = re.sub(r"[ \t]+\n", "\n", out)
    out = re.sub(r"\n{3,}", "\n\n", out)
    return out


def normalize_yaml_en_fields(text: str, glossary: dict) -> str:
    out = text
    out = apply_replacements(out, glossary.get("yaml_field_replacements", {}))
    for old, new in glossary.get("preferred_titles", {}).items():
        out = re.sub(rf'(^\s*en:\s*["\']?){re.escape(old)}(["\']?\s*$)', rf'\1{new}\2', out, flags=re.M)
    return out


def iter_target_files(root: Path):
    for p in root.rglob("*"):
        if p.is_file() and (p.name.endswith(EN_FILE_SUFFIXES) or p.suffix in YAML_SUFFIXES):
            yield p


def main():
    ap = argparse.ArgumentParser(description="Rule-based upgrade of English content toward Phyxio Level 4")
    ap.add_argument("root", help="Root folder")
    ap.add_argument("--glossary", default=str(Path(__file__).parent / "config" / "glossary_en_physics.json"))
    ap.add_argument("--write", action="store_true", help="Write changes in place")
    ap.add_argument("--backup-ext", default=".bak")
    args = ap.parse_args()

    root = Path(args.root)
    glossary = json.loads(Path(args.glossary).read_text(encoding="utf-8"))
    changed = []
    for p in iter_target_files(root):
        before = read(p)
        if p.name.endswith(EN_FILE_SUFFIXES):
            after = normalize_english_md(before, glossary)
        elif p.suffix in YAML_SUFFIXES:
            after = normalize_yaml_en_fields(before, glossary)
        else:
            continue
        if after != before:
            changed.append(str(p))
            if args.write:
                backup = p.with_name(p.name + args.backup_ext)
                if not backup.exists():
                    write(backup, before)
                write(p, after)
    print(json.dumps({"changed_count": len(changed), "changed_files": changed}, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
