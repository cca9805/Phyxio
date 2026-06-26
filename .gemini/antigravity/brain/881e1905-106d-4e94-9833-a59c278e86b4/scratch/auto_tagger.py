import os
import yaml
import re
import json

# List of single-letter IDs that are also common words and should be handled carefully
NOISY_IDS = {'a', 'y', 'o', 'm', 's', 't', 'v', 'R', 'I', 'E', 'N'}

def auto_tag_leaf(leaf_path):
    mag_path = os.path.join(leaf_path, "magnitudes.yaml")
    if not os.path.exists(mag_path):
        return False, "magnitudes.yaml not found"

    try:
        with open(mag_path, "r", encoding="utf-8") as f:
            mag_data = yaml.safe_load(f)
    except Exception as e:
        return False, f"Error reading yaml: {e}"

    if not mag_data or "magnitudes" not in mag_data:
        return False, "No magnitudes found in yaml"

    mags = mag_data["magnitudes"]
    mag_ids = [m.get("id") for m in mags if m.get("id")]
    
    files_to_tag = [
        ("teoria.md", "es"),
        ("ejemplos.md", "es"),
        ("teoria.en.md", "en"),
        ("ejemplos.en.md", "en")
    ]
    
    overall_modified = False

    for filename, lang in files_to_tag:
        file_path = os.path.join(leaf_path, filename)
        if not os.path.exists(file_path):
            continue

        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        new_content = content
        
        # 1. CLEANUP NOISE: Remove tags that were likely incorrectly placed on common words
        for noisy_id in NOISY_IDS:
            # Matches " word [[word]]" or "word [[word]]"
            # But NOT if it's "masa [[m]]" (we want to keep those)
            # Actually, let's just remove all [[noisy_id]] tags and re-add them properly
            new_content = re.sub(rf"\b{noisy_id}\b\s*\[\[{noisy_id}\]\]", noisy_id, new_content)
        
        file_modified = (new_content != content)
        
        # Sort mags by name length (descending)
        sorted_mags = sorted(mags, key=lambda x: len(x.get("nombre", {}).get(lang, "") or ""), reverse=True)

        for mag in sorted_mags:
            mag_id = mag.get("id")
            mag_name = mag.get("nombre", {}).get(lang)
            mag_symbol = mag.get("symbol")
            
            if not mag_id:
                continue

            if f"[[{mag_id}]]" in new_content:
                continue

            search_terms = []
            
            # Strategy A: Full names (Safe)
            if mag_name:
                search_terms.append((mag_name, "word"))
                if "_" in mag_name:
                    search_terms.append((mag_name.replace("_", " "), "word"))
            
            # Strategy B: Symbols and IDs in Math/Code (Safe)
            if mag_symbol:
                search_terms.append((mag_symbol, "math"))
            search_terms.append((mag_id, "code"))

            # Strategy C: Short Names for noisy IDs (only if context matches)
            if mag_id in NOISY_IDS:
                if mag_name:
                    search_terms.append((mag_name.split()[0], "word")) # e.g. "radio" for "radio del loop"
            else:
                # For non-noisy IDs, single words are safer
                if mag_name and len(mag_name.split()) > 1:
                    search_terms.append((mag_name.split()[0], "word"))

            found = False
            for term, type in search_terms:
                if not term or len(term) == 0: continue
                escaped_term = re.escape(term)
                
                if type == "math":
                    # $term$ or $ term $
                    p_str = rf"(?<!\[\[)\$\s*{escaped_term}\s*\$(?!\]\])"
                elif type == "code":
                    # `term`
                    p_str = rf"(?<!\[\[)`{escaped_term}`(?!\]\])"
                else: # word
                    if term in NOISY_IDS and type == "word":
                        # Only tag the word if it's NOT a noisy ID used as a word
                        # (This strategy is mostly for longer names now)
                        continue
                    p_str = rf"(?<!\[\[)\b{escaped_term}\b(?!\]\])"
                
                pattern = re.compile(p_str, re.IGNORECASE)
                if pattern.search(new_content):
                    def replace_func(match):
                        return f"{match.group(0)} [[{mag_id}]]"
                    new_content = pattern.sub(replace_func, new_content, count=1)
                    file_modified = True
                    found = True
                    break
            
            if found: continue

        if file_modified:
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(new_content)
            overall_modified = True

    return overall_modified, "Success"

if __name__ == "__main__":
    with open("tagging_audit.json", "r", encoding="utf-8") as f:
        audit_results = json.load(f)

    count = 0
    for res in audit_results:
        path = res["path"]
        success, msg = auto_tag_leaf(path)
        if success:
            count += 1
            print(f"Tagged/Cleaned: {os.path.basename(path)}")
    print(f"\nDone. Processed {count} leaves.")
