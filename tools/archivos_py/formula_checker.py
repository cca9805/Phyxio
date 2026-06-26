import yaml
import sys
import os

def check_formulas(leaf_path):
    formulas_file = os.path.join(leaf_path, "formulas.yaml")
    magnitudes_file = os.path.join(leaf_path, "magnitudes.yaml")
    
    with open(formulas_file, "r", encoding="utf-8") as f:
        formulas = yaml.safe_load(f)
    
    with open(magnitudes_file, "r", encoding="utf-8") as f:
        magnitudes_data = yaml.safe_load(f)
    
    # Handle both list and dict formats for magnitudes.yaml if necessary
    # but based on error, it seems it loaded something where m["id"] failed.
    # Let's print the type and first element if list.
    
    magnitude_ids = []
    if isinstance(magnitudes_data, list):
        for m in magnitudes_data:
            if isinstance(m, dict) and "id" in m:
                magnitude_ids.append(m["id"])
    elif isinstance(magnitudes_data, dict):
        magnitude_ids = list(magnitudes_data.keys())
    
    results = []
    missing_targets = set()
    
    if isinstance(formulas, list):
        for formula in formulas:
            if not isinstance(formula, dict): continue
            f_id = formula.get("id", "UNKNOWN")
            errors = []
            
            for field in ["id", "equation", "latex"]:
                if field not in formula:
                    errors.append(field)
            
            titles = formula.get("title", {})
            if not isinstance(titles, dict):
                errors.append("title_not_dict")
            else:
                if "es" not in titles: errors.append("title.es")
                if "en" not in titles: errors.append("title.en")
            
            rs = formula.get("result_semantics", {})
            if not isinstance(rs, dict):
                errors.append("result_semantics_not_dict")
            else:
                target = rs.get("target")
                if not target:
                    errors.append("result_semantics.target")
                elif target not in magnitude_ids:
                    errors.append(f"target_not_found:{target}")
                    missing_targets.add(target)
                
            status = "OK" if not errors else f"FAIL ({', '.join(errors)})"
            results.append(f"Formula {f_id}: {status}")
    
    print("\n--- Formula Check ---")
    for r in results:
        print(r)
    
    if missing_targets:
        print("\n--- Missing Targets ---")
        for t in missing_targets:
            print(f"- {t}")

check_formulas(sys.argv[1])
