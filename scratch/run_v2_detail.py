import subprocess, sys
result = subprocess.run(
    [sys.executable, 'tools/phyxio_leaf_validator_v2.py',
     'frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/ecuaciones-de-maxwell/ecuacion-de-onda-electromagnetica'],
    capture_output=True, text=True, cwd='.'
)
lines = result.stdout.splitlines()
for i, line in enumerate(lines):
    if 'FAIL' in line:
        print(line)
        for j in range(i+1, min(i+4, len(lines))):
            if lines[j].strip():
                print(lines[j])
            else:
                break
print('\n--- END ---')
