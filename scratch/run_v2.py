import subprocess, sys
result = subprocess.run(
    [sys.executable, 'tools/phyxio_leaf_validator_v2.py',
     'frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/ecuaciones-de-maxwell/ecuacion-de-onda-electromagnetica'],
    capture_output=True, text=True, cwd='.'
)
# Print only FAIL lines
for line in result.stdout.splitlines():
    if 'FAIL' in line or 'fail' in line.lower():
        print(line)
