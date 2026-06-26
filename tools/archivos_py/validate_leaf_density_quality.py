#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from __future__ import annotations

import argparse
import json
import re
from dataclasses import dataclass, asdict
from pathlib import Path
from typing import List, Optional


RECOMMENDED_RANGES = {
    "teoria.md": (1200, 2000),
    "teoria.en.md": (1200, 2000),
    "modelos.md": (400, 850),
    "modelos.en.md": (400, 850),
    "errores.md": (500, 850),
    "errores.en.md": (500, 850),
    "ejemplos.md": (800, 1200),
    "ejemplos.en.md": (800, 1200),
    "aplicaciones.md": (800, 1200),
    "aplicaciones.en.md": (800, 1200),
    "historia.md": (300, 600),
    "historia.en.md": (300, 600),
}

REQUIRED_FILES = [
    "meta.yaml",
    "magnitudes.yaml",
    "formulas.yaml",
    "interpretacion.yaml",
    "teoria.md",
    "teoria.en.md",
    "modelos.md",
    "modelos.en.md",
    "errores.md",
    "errores.en.md",
    "ejemplos.md",
    "ejemplos.en.md",
    "aplicaciones.md",
    "aplicaciones.en.md",
    "historia.md",
    "historia.en.md",
]

REQUIRED_SECTIONS = {
    "teoria.md": [
        "## Contexto conceptual",
        "## 🟢 Nivel esencial",
        "## 🔵 Nivel formal",
        "## 🔴 Nivel estructural",
        "## Interpretación física profunda",
        "### Orden de magnitud",
        "## Método de resolución personalizado",
        "## Casos especiales y ejemplo extendido",
        "## Preguntas reales del alumno",
        "## Conexiones transversales y rutas de estudio",
        "## Síntesis final",
    ],
    "modelos.md": [
        "## 1. Modelo ideal",
        "## 2. Modelo extendido",
        "## 3. Dominio de validez cuantitativo",
        "## 4. Señales de fallo del modelo",
        "## 5. Comparación con modelos alternativos",
    ],
    "errores.md": [
        "## 1. Errores conceptuales",
        "## 2. Errores de modelo",
        "## 3. Errores matemáticos",
        "## 4. Errores de interpretación",
        "## 5. Regla de autocontrol rápido",
    ],
    "historia.md": [
        "## 1. Problema histórico",
        "## 2. Qué no se entendía antes",
        "## 3. Qué cambió",
        "## 4. Evolución conceptual",
        "## 5. Conexión con física moderna",
    ],
}

GENERIC_PATTERNS = [
    r"\bdepende del contexto\b",
    r"\brevisar si tiene sentido\b",
    r"\bes importante en física\b",
    r"\bse usa en muchos casos\b",
    r"\bpuede aplicarse en distintas situaciones\b",
    r"\ben la vida real\b",
    r"\beste concepto es importante\b",
]

WEAK_APPLICATION_PATTERNS = [
    r"\baparece en\b",
    r"\bse observa en\b",
    r"\bpuede verse en\b",
]

PLACEHOLDER_PATTERNS = [
    r"\bTODO\b",
    r"\bTBD\b",
    r"\bplaceholder\b",
    r"\bpor completar\b",
]

MOJIBAKE_PATTERNS = [r"Ã¡", r"Ã©", r"Ã­", r"Ã³", r"Ãº", r"â€“", r"â€”", r"ðŸ"]


@dataclass
class FileReport:
    file: str
    exists: bool
    words: int
    range_min: Optional[int]
    range_max: Optional[int]
    range_status: str
    missing_sections: List[str]
    generic_hits: List[str]
    weak_hits: List[str]
    placeholder_hits: List[str]
    mojibake_hits: List[str]
    comments: List[str]
    score: float

    @property
    def has_problems(self) -> bool:
        return (
            not self.exists
            or self.range_status in {"low", "missing"}
            or bool(self.missing_sections)
            or bool(self.generic_hits)
            or bool(self.weak_hits)
            or bool(self.placeholder_hits)
            or bool(self.mojibake_hits)
        )


@dataclass
class LeafReport:
    leaf_path: str
    missing_files: List[str]
    files: List[FileReport]
    score: float
    estimated_level: float
    summary_comments: List[str]

    @property
    def has_problems(self) -> bool:
        return bool(self.missing_files) or any(f.has_problems for f in self.files)


def word_count(text: str) -> int:
    return len(re.findall(r"\b[\w\-]+\b", text, flags=re.UNICODE))


def read_text(path: Path) -> str:
    try:
        return path.read_text(encoding="utf-8")
    except Exception:
        return path.read_text(errors="ignore")


def find_pattern_hits(text: str, patterns: List[str]) -> List[str]:
    hits: List[str] = []
    for pat in patterns:
        if "TODO" in pat or "TBD" in pat:
            if re.search(pat, text):
                hits.append(pat)
        else:
            if re.search(pat, text, flags=re.IGNORECASE):
                hits.append(pat)
    return hits


def check_required_sections(file_name: str, text: str) -> List[str]:
    required = REQUIRED_SECTIONS.get(file_name, [])
    return [section for section in required if section not in text]


def range_status(words: int, min_w: Optional[int], max_w: Optional[int]) -> str:
    if min_w is None or max_w is None:
        return "n/a"
    if words < min_w:
        return "low"
    if words > max_w:
        return "high"
    return "ok"


def score_file(file_name: str, text: str, exists: bool) -> FileReport:
    if not exists:
        return FileReport(
            file=file_name,
            exists=False,
            words=0,
            range_min=RECOMMENDED_RANGES.get(file_name, (None, None))[0],
            range_max=RECOMMENDED_RANGES.get(file_name, (None, None))[1],
            range_status="missing",
            missing_sections=[],
            generic_hits=[],
            weak_hits=[],
            placeholder_hits=[],
            mojibake_hits=[],
            comments=["Archivo obligatorio ausente."],
            score=0.0,
        )

    words = word_count(text)
    min_w, max_w = RECOMMENDED_RANGES.get(file_name, (None, None))
    rs = range_status(words, min_w, max_w)
    missing_sections = check_required_sections(file_name, text)
    generic_hits = find_pattern_hits(text, GENERIC_PATTERNS)
    weak_hits = find_pattern_hits(text, WEAK_APPLICATION_PATTERNS) if "aplicaciones" in file_name else []
    placeholder_hits = find_pattern_hits(text, PLACEHOLDER_PATTERNS)
    mojibake_hits = find_pattern_hits(text, MOJIBAKE_PATTERNS)

    score = 1.0
    comments: List[str] = []

    if rs == "low":
        score -= 0.25
        comments.append(f"Por debajo del rango recomendado: {words} palabras.")
    elif rs == "high":
        score -= 0.08
        comments.append(f"Por encima del rango recomendado: {words} palabras.")

    if missing_sections:
        score -= min(0.35, 0.05 * len(missing_sections))
        comments.append(f"Faltan secciones obligatorias: {len(missing_sections)}.")

    if generic_hits:
        score -= min(0.20, 0.03 * len(generic_hits))
        comments.append("Hay señales de texto genérico o reutilizable.")

    if weak_hits:
        score -= min(0.10, 0.02 * len(weak_hits))
        comments.append("Aplicaciones con señales de redacción débil o genérica.")

    if placeholder_hits:
        score -= 0.30
        comments.append("Contiene placeholders o texto no finalizado.")

    if mojibake_hits:
        score -= 0.20
        comments.append("Contiene señales de mojibake/codificación incorrecta.")

    if file_name.startswith("historia") and words < 300:
        comments.append("Historia por debajo del mínimo duro de 300.")
    if file_name.startswith("modelos") and words < 350:
        comments.append("Modelos por debajo del mínimo duro de 350.")
    if file_name.startswith("teoria") and words < 1000:
        comments.append("Teoría por debajo del mínimo duro de 1000.")
    if file_name.startswith("aplicaciones") and words < 800:
        comments.append("Aplicaciones por debajo del rango recomendado.")
    if file_name.startswith("errores") and words < 500:
        comments.append("Errores por debajo del rango recomendado.")
    if file_name.startswith("ejemplos") and words < 800:
        comments.append("Ejemplos por debajo del rango recomendado.")

    score = max(0.0, min(1.0, score))

    return FileReport(
        file=file_name,
        exists=True,
        words=words,
        range_min=min_w,
        range_max=max_w,
        range_status=rs,
        missing_sections=missing_sections,
        generic_hits=generic_hits,
        weak_hits=weak_hits,
        placeholder_hits=placeholder_hits,
        mojibake_hits=mojibake_hits,
        comments=comments,
        score=score,
    )


def looks_like_leaf_dir(path: Path) -> bool:
    return path.is_dir() and (path / "meta.yaml").exists()


def find_leaf_dirs(root: Path) -> List[Path]:
    if looks_like_leaf_dir(root):
        return [root]
    return sorted([p for p in root.rglob("*") if looks_like_leaf_dir(p)])


def estimate_level(score: float, has_all_files: bool) -> float:
    base = score * 5.0
    if not has_all_files:
        base = min(base, 3.9)
    return round(base, 2)


def audit_leaf(leaf_dir: Path) -> LeafReport:
    reports: List[FileReport] = []
    missing_files: List[str] = []

    for file_name in REQUIRED_FILES:
        file_path = leaf_dir / file_name
        exists = file_path.exists()
        if not exists:
            missing_files.append(file_name)
            reports.append(score_file(file_name, "", False))
            continue
        text = read_text(file_path)
        reports.append(score_file(file_name, text, True))

    avg_score = sum(r.score for r in reports) / len(reports) if reports else 0.0
    estimated = estimate_level(avg_score, len(missing_files) == 0)

    summary_comments: List[str] = []
    lows = [r.file for r in reports if r.range_status == "low"]
    if lows:
        summary_comments.append(f"Archivos cortos: {', '.join(lows)}")

    missing_section_files = [r.file for r in reports if r.missing_sections]
    if missing_section_files:
        summary_comments.append(f"Faltan secciones obligatorias en: {', '.join(missing_section_files)}")

    generic_files = [r.file for r in reports if r.generic_hits]
    if generic_files:
        summary_comments.append(f"Hay texto genérico en: {', '.join(generic_files)}")

    placeholder_files = [r.file for r in reports if r.placeholder_hits]
    if placeholder_files:
        summary_comments.append(f"Hay placeholders en: {', '.join(placeholder_files)}")

    mojibake_files = [r.file for r in reports if r.mojibake_hits]
    if mojibake_files:
        summary_comments.append(f"Hay mojibake en: {', '.join(mojibake_files)}")

    return LeafReport(
        leaf_path=str(leaf_dir),
        missing_files=missing_files,
        files=reports,
        score=round(avg_score, 3),
        estimated_level=estimated,
        summary_comments=summary_comments,
    )


def print_leaf_detail(leaf: LeafReport) -> None:
    print("=" * 90)
    print(f"LEAF: {leaf.leaf_path}")
    print(f"Nivel estimado editorial: {leaf.estimated_level}/5")
    print(f"Score interno: {leaf.score}")

    if leaf.missing_files:
        print("Archivos faltantes:")
        for mf in leaf.missing_files:
            print(f"  - {mf}")

    if leaf.summary_comments:
        print("Resumen:")
        for c in leaf.summary_comments:
            print(f"  - {c}")

    print("\nDetalle por archivo:")
    for fr in leaf.files:
        print(f"  * {fr.file}")
        print(f"      exists: {fr.exists}")
        print(f"      words: {fr.words}")
        print(f"      range: {fr.range_min} - {fr.range_max}")
        print(f"      status: {fr.range_status}")
        print(f"      score: {fr.score}")
        if fr.missing_sections:
            print(f"      missing_sections: {len(fr.missing_sections)}")
            for ms in fr.missing_sections:
                print(f"        - {ms}")
        if fr.comments:
            for com in fr.comments:
                print(f"      note: {com}")
    print()


def print_problem_summary(leaf_reports: List[LeafReport]) -> None:
    problematic = [leaf for leaf in leaf_reports if leaf.has_problems]
    clean = [leaf for leaf in leaf_reports if not leaf.has_problems]

    print("=" * 90)
    print("RESUMEN DE INCUMPLIMIENTOS POR LEAF")
    print("=" * 90)

    if not problematic:
        print("No se han detectado leafs con incumplimientos.")
    else:
        print(f"Leafs con problemas: {len(problematic)}\n")
        for leaf in problematic:
            rel_name = Path(leaf.leaf_path).name
            problem_files = [f.file for f in leaf.files if f.has_problems]
            print(f"- {rel_name}  | nivel estimado: {leaf.estimated_level}/5")
            if leaf.missing_files:
                print(f"    archivos faltantes: {', '.join(leaf.missing_files)}")
            if problem_files:
                print(f"    archivos con problemas: {', '.join(problem_files)}")
            if leaf.summary_comments:
                for c in leaf.summary_comments:
                    print(f"    {c}")
            print()

    if clean:
        print("Leafs sin problemas detectados:")
        for leaf in clean:
            print(f"- {Path(leaf.leaf_path).name}  | nivel estimado: {leaf.estimated_level}/5")
        print()

    if leaf_reports:
        node_avg = round(sum(l.estimated_level for l in leaf_reports) / len(leaf_reports), 2)
        print(f"Nivel medio del nodo: {node_avg}/5")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", required=True, help="Ruta al leaf o nodo")
    parser.add_argument("--json", action="store_true", help="Salida JSON")
    parser.add_argument("--only-problems", action="store_true", help="Muestra solo leafs con incumplimientos")
    args = parser.parse_args()

    root = Path(args.root)
    if not root.exists():
        raise SystemExit(f"Root path does not exist: {root}")

    leaf_dirs = find_leaf_dirs(root)
    if not leaf_dirs:
        raise SystemExit("No se encontraron leafs válidos (directorios con meta.yaml).")

    reports = [audit_leaf(leaf) for leaf in leaf_dirs]

    if args.json:
        print(json.dumps([asdict(r) for r in reports], ensure_ascii=False, indent=2))
        return

    print_problem_summary(reports)

    if not args.only_problems:
        for leaf in reports:
            print_leaf_detail(leaf)


if __name__ == "__main__":
    main()