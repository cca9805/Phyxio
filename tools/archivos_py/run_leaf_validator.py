"""
run_leaf_validator.py — Ejecuta phyxio_leaf_validator.py sobre todos los leafs
de fundamentos y aplicaciones de dinámica y consolida los resultados.

Uso:
  python run_leaf_validator.py [--json] [--output informe.json]
"""
import argparse, json, subprocess, sys
from pathlib import Path

PYTHON = sys.executable

DATA_BASE = Path("frontend/src/data_v2_i18n/fisica-clasica/mecanica/dinamica")
VALIDATOR  = Path("tools/phyxio_leaf_validator.py")

SCOPES = {
    "fundamentos": [
        "fundamentos/diagramas-de-fuerzas/descomposicion-vectorial",
        "fundamentos/diagramas-de-fuerzas/diagramas-cuerpo-libre",
        "fundamentos/diagramas-de-fuerzas/identificacion-de-fuerzas",
        "fundamentos/leyes-de-newton/primera-ley-inercia",
        "fundamentos/leyes-de-newton/segunda-ley-fuerza-masa",
        "fundamentos/leyes-de-newton/tercera-ley-accion-reaccion",
        "fundamentos/sistemas-de-referencia/aceleracion-relativa",
        "fundamentos/sistemas-de-referencia/sistemas-inerciales",
        "fundamentos/sistemas-de-referencia/sistemas-no-inerciales-intro",
    ],
    "aplicaciones": [
        "aplicaciones/problemas-integrados/errores-frecuentes",
        "aplicaciones/problemas-integrados/problemas-tipo-examen",
        "aplicaciones/sistemas-mixtos/sistemas-reales",
        "aplicaciones/sistemas-mixtos/traslacion-y-rotacion",
    ],
}

BAR = "═" * 68

def run_validator(leaf_path: Path) -> dict:
    result = subprocess.run(
        [PYTHON, str(VALIDATOR), str(leaf_path), "--json"],
        capture_output=True, text=True, encoding="utf-8"
    )
    if result.returncode != 0 or not result.stdout.strip():
        return {"error": result.stderr.strip() or "empty output", "overall_score_5": 0}
    try:
        return json.loads(result.stdout)
    except json.JSONDecodeError as e:
        return {"error": f"JSON parse error: {e}", "overall_score_5": 0}

def bar_score(score: float) -> str:
    filled = round(score * 2)   # out of 10 blocks
    return "█" * filled + "░" * (10 - filled) + f"  {score:.2f}/5"

def print_report(all_data: dict) -> None:
    print(BAR)
    print("  PHYXIO LEAF VALIDATOR — FUNDAMENTOS + APLICACIONES")
    print(BAR)
    totals = []
    for scope, leafs in all_data.items():
        print(f"\n  ── {scope.upper()} ──")
        for leaf_id, data in leafs.items():
            score = data.get("overall_score_5", 0)
            totals.append(score)
            icon = "✔" if score >= 4.0 else ("⚠" if score >= 2.5 else "✘")
            print(f"\n  {icon}  {leaf_id}")
            print(f"     Puntuación: {bar_score(score)}")
            if "error" in data:
                print(f"     ERROR: {data['error']}")
                continue
            groups = data.get("groups", {})
            fails = [
                (grp_name, chk["message"], chk.get("details"))
                for grp_name, grp in groups.items()
                for chk in grp.get("checks", [])
                if not chk["ok"]
            ]
            if fails:
                print(f"     Checks fallidos ({len(fails)}):")
                for grp_name, msg, details in fails:
                    det = f" → {details}" if details is not None else ""
                    print(f"       [{grp_name}] FAIL: {msg}{det}")
            else:
                print("     Todos los checks OK ✔")

    avg = sum(totals) / len(totals) if totals else 0
    print(f"\n{BAR}")
    print(f"  TOTAL leafs : {len(totals)}")
    ok = sum(1 for s in totals if s >= 4.0)
    warn = sum(1 for s in totals if 2.5 <= s < 4.0)
    fail = sum(1 for s in totals if s < 2.5)
    print(f"  ✔ OK (≥4)   : {ok}")
    print(f"  ⚠ WARN (≥2.5): {warn}")
    print(f"  ✘ FAIL (<2.5): {fail}")
    print(f"  Promedio    : {avg:.2f} / 5")
    print(BAR)

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--json", action="store_true", help="Salida JSON completa")
    parser.add_argument("--output", help="Guardar resultados JSON en archivo")
    args = parser.parse_args()

    all_data: dict = {}
    for scope, leaf_paths in SCOPES.items():
        all_data[scope] = {}
        for rel in leaf_paths:
            leaf_dir = DATA_BASE / rel
            leaf_id  = leaf_dir.name
            if not leaf_dir.exists():
                all_data[scope][leaf_id] = {"error": f"Directorio no encontrado: {leaf_dir}", "overall_score_5": 0}
                continue
            print(f"  Validando {leaf_id}...", flush=True)
            all_data[scope][leaf_id] = run_validator(leaf_dir)

    if args.json:
        print(json.dumps(all_data, ensure_ascii=False, indent=2))
    else:
        print_report(all_data)

    if args.output:
        Path(args.output).write_text(
            json.dumps(all_data, ensure_ascii=False, indent=2), encoding="utf-8"
        )
        print(f"\n  Resultados guardados en: {args.output}")

if __name__ == "__main__":
    main()
