import yaml
from pathlib import Path
leaf = Path('frontend/src/data_v2_i18n/fisica-clasica/mecanica/cinematica/movimiento-relativo/sistemas-referencia')
with open(leaf / 'magnitudes.yaml', encoding='utf-8') as f:
    mags = yaml.safe_load(f)
with open(leaf / 'formulas.yaml', encoding='utf-8') as f:
    forms = yaml.safe_load(f)

if isinstance(mags, list):
    mags_list = mags
elif isinstance(mags, dict):
    mags_list = mags.get('magnitudes', [])
else:
    mags_list = []

if isinstance(forms, list):
    forms_list = forms
elif isinstance(forms, dict):
    forms_list = forms.get('formulas', [])
else:
    forms_list = []

print('Magnitudes:', [m.get('id') for m in mags_list if isinstance(m, dict)])
print()
print('Formulas:')
for item in forms_list:
    if isinstance(item, dict):
        eq = item.get('equation', '') or ''
        print(f'  {item.get("id")} - eq: {eq[:70]}')

formula_blob = ' '.join(
    f'{f.get("id","")} {f.get("target","")} {f.get("equation","")} {f.get("latex","")}'
    for f in forms_list if isinstance(f, dict)
)
print()
print('frame_sigma in formula_blob:', 'frame_sigma' in formula_blob)
