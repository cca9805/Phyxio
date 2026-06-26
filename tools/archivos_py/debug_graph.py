"""Debug graph registration for interruptores."""
import sys
sys.path.insert(0, 'tools')
from pathlib import Path
from phyxio_leaf_validator import resolve_graph_registry, load_yaml

leaf_dir = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/interruptores')
meta = load_yaml(leaf_dir / 'meta.yaml')
ctx, errs = resolve_graph_registry(leaf_dir, meta)
if errs:
    print('ERRORS:', errs)
else:
    print('namespace:', ctx['graph_namespace'])
    print('index_path:', ctx['index_path'])
    print('leaf_id:', ctx['leaf_id'])
    print('leaf_components:', ctx['leaf_components'])
    print('registered keys with interruptores:', [k for k in ctx['registered'] if 'interruptores' in k])
