import sys, re
sys.path.insert(0, 'scratch')
sys.path.insert(0, 'tools')
from tools.archivos_py.fix_latex_md import process_file, load_formulas
from phyxio_leaf_validator import find_markdown_math_render_issues, find_bare_formula_issues
from pathlib import Path

BASE = Path('frontend/src/data_v2_i18n/fisica-clasica/mecanica')
leaf = BASE / 'cinematica/movimiento-relativo/sistemas-referencia'
formulas = load_formulas(leaf)
fids = set(formulas.keys())

for fname in ['teoria.md', 'ejemplos.md', 'ejemplos.en.md']:
    fp = leaf / fname
    new_text, _ = process_file(fp, formulas)
    i1 = find_markdown_math_render_issues(new_text, formula_ids=fids)
    i2 = find_bare_formula_issues(new_text, max_hits=12-len(i1))
    all_iss = i1 + i2
    if all_iss:
        print(f'{fname}: {len(all_iss)} issues')
        lines = new_text.splitlines()
        for iss in all_iss:
            m = re.match(r'L(\d+):', iss)
            if m:
                lno = int(m.group(1))
                line_content = lines[lno-1][:120] if lno-1 < len(lines) else "OOB"
                print(f'  {iss[:100]}')
                print(f'  -> LINE: {line_content!r}')
