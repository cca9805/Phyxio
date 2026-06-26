import sys; sys.path.insert(0, 'tools')
from phyxio_leaf_validator import _extract_markdown_section, _collect_formula_entries, _rank_core_formulas, _build_formula_search_entry, _entry_present_in_text, read_text
from pathlib import Path

leaf = Path('frontend/src/data_v2_i18n/fisica-clasica/mecanica/cinematica/movimiento-en-dos-dimensiones/tiro-horizontal')
teoria_text = read_text(leaf / 'teoria.md')
formulas = _collect_formula_entries(leaf / 'formulas.yaml')
core_formulas = _rank_core_formulas(formulas)

esencial = _extract_markdown_section(teoria_text, '## \U0001f7e2 Nivel esencial')
print('Esencial section length:', len(esencial))
print('Esencial text snippet:', esencial[:300])

print('Core formulas:')
for f in core_formulas:
    r = _build_formula_search_entry(f)
    present = _entry_present_in_text(r, esencial)
    fid = f.get('id', '')
    tgt = f.get('target', '')
    print(f'  {fid} (target={tgt}): {present}')
