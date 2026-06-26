#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Validador por capas para Phyxio.

No sustituye al validador completo. Sirve para ahorrar ciclos durante la creación:
- gate: errores baratos y frecuentes
- yaml: meta/magnitudes/formulas/interpretacion/coherencia
- markdown-es: textos españoles
- markdown-en: textos ingleses
- semantic: coverage, ejemplos, interpretación, didáctica
- graphs: contrato gráfico
- all: validador completo

Coloca este archivo junto a phyxio_leaf_validator_full.py o cambia FULL_VALIDATOR_NAME.
"""
from __future__ import annotations
import argparse, importlib.util, json, re, sys
from dataclasses import asdict
from pathlib import Path

FULL_VALIDATOR_NAME = "phyxio_leaf_validator_full.py"

STAGE_GROUPS = {
    "gate": ["files", "mojibake", "render_math", "meta", "magnitudes", "formulas", "markdown_entities", "latex_format"],
    "yaml": ["meta", "meta_map", "magnitudes", "formulas", "interpretacion", "coherencia", "pregunta_fisica_central", "leaf_identity", "latex_format"],
    "markdown-es": ["teoria", "modelos", "errores", "historia", "ejemplos", "aplicaciones", "errores_structure", "modelos_reinforced", "historia_functional", "magnitude_tagging"],
    "markdown-en": ["teoria_en", "modelos_en", "errores_en", "historia_en", "ejemplos_en", "aplicaciones_en", "english"],
    "semantic": ["coverage", "example_semantics", "example_semantics_en", "interpretation_semantics", "didactic_contract", "learning_dynamics", "cognitive_load", "symbols", "leaf_uniqueness"],
    "graphs": ["graphs", "coord_semantic", "graph_reuse", "graph_identity", "graph_infocards", "dcl_profile", "graph_decorative", "graph_overlap", "graph_mag_coherence", "graph_calc_dep", "graph_leaf_coherence", "graph_star_unique", "graph_pfc_coherence", "graph_type_rules"],
}


def load_full_validator():
    here = Path(__file__).resolve().parent
    full = here / FULL_VALIDATOR_NAME

    if not full.exists():
        # common project fallback
        full = Path.cwd() / "tools" / "phyxio_leaf_validator.py"

    if not full.exists():
        raise SystemExit(f"No encuentro {FULL_VALIDATOR_NAME} ni tools/phyxio_leaf_validator.py")

    module_name = "phyxio_leaf_validator_full"

    spec = importlib.util.spec_from_file_location(module_name, full)
    if spec is None or spec.loader is None:
        raise SystemExit(f"No puedo cargar el validador completo desde: {full}")

    mod = importlib.util.module_from_spec(spec)

    # Necesario para que @dataclass resuelva correctamente cls.__module__
    sys.modules[module_name] = mod

    spec.loader.exec_module(mod)
    return mod


def fail_rows(summary, groups):
    rows=[]
    for g in groups:
        data=summary.get("groups",{}).get(g)
        if not data:
            continue
        for c in data.get("checks",[]):
            if not c.get("ok"):
                rows.append({"group":g,"message":c.get("message"),"details":c.get("details")})
    return rows


def print_stage(summary, stage):
    groups = list(summary.get("groups",{}).keys()) if stage == "all" else STAGE_GROUPS[stage]
    fails=fail_rows(summary, groups)
    total=0; ok=0
    for g in groups:
        data=summary.get("groups",{}).get(g)
        if not data: continue
        checks=data.get("checks",[])
        total += len(checks)
        ok += sum(1 for c in checks if c.get("ok"))
    stage_score = (ok/total*5) if total else 0
    print(f"PHYXIO STAGE VALIDATOR | stage={stage}")
    print(f"Leaf: {summary.get('leaf_name')}")
    print(f"Score capa: {stage_score:.2f}/5 | OK {ok}/{total} | FAIL {len(fails)}")
    if not fails:
        print("Sin fallos en esta capa.")
        return
    print("\nFallos:")
    for i,f in enumerate(fails[:80],1):
        print(f"{i}. [{f['group']}] {f['message']}")
        if f.get("details"):
            d=str(f["details"])
            d=re.sub(r"\s+"," ",d)
            print(f"   detalles: {d[:700]}")
    if len(fails)>80:
        print(f"... {len(fails)-80} fallos más omitidos en pantalla.")


def main():
    ap=argparse.ArgumentParser()
    ap.add_argument("leaf", type=Path)
    ap.add_argument("--stage", choices=["gate","yaml","markdown-es","markdown-en","semantic","graphs","all"], default="gate")
    ap.add_argument("--json", action="store_true")
    args=ap.parse_args()
    mod=load_full_validator()
    summary=mod.validate_leaf(args.leaf)
    if args.json:
        groups = summary.get("groups",{}) if args.stage == "all" else {g:summary.get("groups",{}).get(g) for g in STAGE_GROUPS[args.stage] if summary.get("groups",{}).get(g)}
        print(json.dumps({"leaf":summary.get("leaf_name"),"overall_score_5":summary.get("overall_score_5"),"stage":args.stage,"groups":groups}, ensure_ascii=False, indent=2))
    else:
        print_stage(summary,args.stage)

if __name__ == "__main__":
    main()
