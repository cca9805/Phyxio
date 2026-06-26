import subprocess

try:
    result = subprocess.run(
        ["python", "tools/phyxio_leaf_validator.py", "frontend/src/data_v2_i18n/fisica-clasica/mecanica/cantidad-de-movimiento/fundamentos/teorema-impulso-momento"],
        capture_output=True,
        text=True,
        encoding="utf-8"
    )
    lines = result.stdout.split('\n')
    for line in lines:
        if 'FAIL' in line or 'detalles' in line:
            print(line.strip())
except Exception as e:
    print("Error:", e)
