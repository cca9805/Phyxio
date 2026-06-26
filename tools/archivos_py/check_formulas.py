import yaml
import sys
leaf = sys.argv[1]
with open(f'{leaf}/formulas.yaml', encoding='utf-8') as f:
    formulas = yaml.safe_load(f)
with open(f'{leaf}/magnitudes.yaml', encoding='utf-8') as f:
    magnitudes = yaml.safe_load(f)
mags = [m['id'] for m in magnitudes] if isinstance(magnitudes, list) else []
if isinstance(formulas, list):
    for f in formulas:
        if not isinstance(f, dict):
            print(f'Element is not a dict: {f}')
            continue
        fid = f.get('id')
        rs = f.get('result_semantics')
        target = rs.get('target') if isinstance(rs, dict) else None
        in_mags = target in mags if target else False
        missing = [k for k in ['id', 'latex', 'result_semantics', 'physical_meaning'] if k not in f or (k=='result_semantics' and (not isinstance(f[k], dict) or 'target' not in f[k]))]
        print(f'ID: {fid} | Target: {target} | In Mags: {in_mags} | Missing: {missing}')
else:
    print('Formulas is not a list')
