import pathlib

p = pathlib.Path('tools/phyxio_leaf_validator.py')
content = p.read_text(encoding='utf-8')

target = """    missing = [f for f in expected_files if f not in current]
    extra = [f for f in current if f not in expected_files]
        CheckResult(not extra, "No hay archivos extra dentro del leaf", extra),
    ]"""

replacement = """    missing = [f for f in expected_files if f not in current]
    extra = [f for f in current if f not in expected_files]
    return [
        CheckResult(not missing, "No faltan archivos requeridos", missing),
        CheckResult(not extra, "No hay archivos extra dentro del leaf", extra),
    ]"""

# Normalize line endings to LF for replacement to be robust
content_normalized = content.replace('\r\n', '\n')
target_normalized = target.replace('\r\n', '\n')
replacement_normalized = replacement.replace('\r\n', '\n')

if target_normalized in content_normalized:
    content_normalized = content_normalized.replace(target_normalized, replacement_normalized)
    # Write back using OS default or LF
    p.write_text(content_normalized, encoding='utf-8')
    print("SUCCESS: Validator monolith fixed!")
else:
    # Try exact match with CRLF
    if target in content:
        content = content.replace(target, replacement)
        p.write_text(content, encoding='utf-8')
        print("SUCCESS: Validator monolith fixed (exact CRLF)!")
    else:
        print("ERROR: Target not found in file!")
