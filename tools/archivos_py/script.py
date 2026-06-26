import re
try:
    with open('_final_leaf_check.txt', 'rb') as f:
        raw = f.read()
        content = raw.decode('utf-16')
except:
    content = open('_final_leaf_check.txt', 'r', encoding='utf-8').read()

score = re.search(r'overall_score.:\s*([\d.]+)', content)
fails = [l.strip() for l in content.splitlines() if '- FAIL:' in l]
print(f'overall_score: {score.group(1) if score else "N/A"}')
print(f'total FAIL: {len(fails)}')
print(f'fail_list: {fails}')
print('\n--- BLOQUE COMPLETO modelos_reinforced ---')
# Buscar el objeto que contiene modelos_reinforced
match = re.search(r'\"modelos_reinforced\":\s*\[.*?\]', content, re.DOTALL)
if match:
    # Intentar expandir un poco el contexto si es posible
    print(match.group(0))
else:
    # Si no está formateado como JSON, buscar por texto
    match = re.search(r'.{0,100}modelos_reinforced.{0,500}', content, re.DOTALL)
    if match: print(match.group(0))

print('\n--- LÍNEAS DE TRANSICIÓN/TRANSITION ASOCIADAS AL FAIL ---')
lines = content.splitlines()
for i, l in enumerate(lines):
    low = l.lower()
    if 'transición' in low or 'transition' in low:
        # Imprimir la línea y un poco de contexto si hay un FAIL cerca
        start = max(0, i-2)
        end = min(len(lines), i+3)
        context = lines[start:end]
        if any('- FAIL:' in cl for cl in context):
            print("\n".join(context))
