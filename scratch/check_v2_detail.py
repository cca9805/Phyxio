import subprocess, sys
result = subprocess.run(
    [sys.executable, 'tools/phyxio_leaf_validator_v2.py',
     'frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/ecuaciones-de-maxwell/ecuacion-de-onda-electromagnetica'],
    capture_output=True, text=True, cwd='.'
)
# Print all lines with FAIL and the line after for context
lines = result.stdout.splitlines()
for i, line in enumerate(lines):
    if 'FAIL' in line:
        print(line)
        if i+1 < len(lines) and 'detalles' in lines[i+1].lower():
            print(lines[i+1])
        if i+2 < len(lines) and lines[i+2].strip().startswith('{') or (i+2 < len(lines) and lines[i+2].strip().startswith("'")):
            print(lines[i+2])
print('\n--- TOTAL ---')
for line in lines:
    if '- FAIL:' in line and 'TOTAL' not in line and 'RESUMEN' not in line:
        pass
for line in lines[-10:]:
    print(line)
