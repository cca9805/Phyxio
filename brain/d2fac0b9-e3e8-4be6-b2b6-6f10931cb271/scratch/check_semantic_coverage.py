import sys
import os
from pathlib import Path

# Add tools to path
sys.path.append(os.getcwd())

from tools.validadores.phyxio_leaf_validator import (
    _collect_magnitude_entries,
    _collect_formula_entries,
    _rank_core_magnitudes,
    _rank_core_formulas,
    _entry_present_in_text,
    _build_formula_search_entry,
    read_text
)

leaf_dir = Path("frontend/src/data_v2_i18n/fisica-clasica/mecanica/cantidad-de-movimiento/centro-de-masas/movimiento-del-centro-de-masas")
mag_path = leaf_dir / "magnitudes.yaml"
for_path = leaf_dir / "formulas.yaml"
ejemplos_file = leaf_dir / "ejemplos.md"

magnitudes = _collect_magnitude_entries(mag_path)
formulas = _collect_formula_entries(for_path)

core_magnitudes = _rank_core_magnitudes(magnitudes, formulas)
core_formulas = _rank_core_formulas(formulas)

ejemplos_text = read_text(ejemplos_file)

print("CORE MAGNITUDES:")
for m in core_magnitudes:
    present = _entry_present_in_text(m, ejemplos_text)
    print(f" - ID: {m.get('id')} | Symbol: {m.get('symbol')} | Present: {present}")

print("\nCORE FORMULAS:")
for f in core_formulas:
    reduced = _build_formula_search_entry(f)
    present = _entry_present_in_text(reduced, ejemplos_text)
    print(f" - ID: {f.get('id')} | Present: {present}")
