#!/usr/bin/env python3
"""Debug validator failure for momento-lineal leaf."""
import json
from pathlib import Path
import sys
sys.path.insert(0, "tools")
from phyxio_leaf_validator import validate_leaf

leaf = Path("frontend/src/data_v2_i18n/fisica-clasica/mecanica/cantidad-de-movimiento/fundamentos/momento-lineal")
result = validate_leaf(leaf)

print("Top keys:", list(result.keys()))
print()

for gname, group_data in result["groups"].items():
    print(f"Group '{gname}': type={type(group_data).__name__}")
    if isinstance(group_data, dict):
        for k, v in group_data.items():
            if k == "checks":
                print(f"  checks: {len(v)} items")
                for i, c in enumerate(v):
                    print(f"    [{i}] type={type(c).__name__}: {str(c)[:150]}")
            else:
                print(f"  {k}: {type(v).__name__} = {str(v)[:100]}")
