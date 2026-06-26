Reparador

python tools\phyxio_leaf_factory\06_writers\reparador_leafs.py --path frontend\src\data_v2_i18n\fisica-clasica\electromagnetismo\corriente-electrica\circuitos-de-corriente-continua\leyes-de-kirchhoff

Validador

python -c "from pathlib import Path; from tools.validator_modular._core import validate_leaf; leaf=Path('frontend\src\data_v2_i18n\fisica-clasica\electromagnetismo\corriente-alterna\magnitudes-alternas'); s=validate_leaf(leaf); fails=[]; [fails.append((group, c.get('name'), c.get('details'))) for group, checks in s.get('groups', {}).items() for c in (checks.get('checks', []) if isinstance(checks, dict) else checks) if not c.get('ok', False)]; print('fails', len(fails)); [print(f'- {group}: {name} | {details}') for group,name,details in fails]"