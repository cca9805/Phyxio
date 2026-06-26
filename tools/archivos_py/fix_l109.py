"""
Fix final para errores.md L109 y magnitudes
"""
BASE = 'frontend/src/data_v2_i18n/fisica-clasica/mecanica/cinematica/analisis-grafico-del-movimiento'

err_content = open(f'{BASE}/errores.md', encoding='utf-8').read()

# Find L109 exactly - look for the start pattern
new109 = '[[velocidad_inicial]] 0, [[velocidad_final]] 10 m/s, [[intervalo_tiempo]] 4 s. Rectángulo (incorrecto): 10 × 4 = 40 m. Trapecio (correcto): (0 + 10)/2 × 4 = 20 m. Diferencia del 100 %.'

# Split into lines and replace line 109
lines = err_content.split('\n')
print(f'Line 109 (0-indexed 108): {repr(lines[108][:80])}')

if lines[108].startswith('\\(v_i = 0\\)'):
    lines[108] = new109
    err_content = '\n'.join(lines)
    open(f'{BASE}/errores.md', 'w', encoding='utf-8').write(err_content)
    print('L109 FIXED by line replacement')
else:
    print(f'WARN: L109 does not start with expected pattern')
    print(f'Actual start: {repr(lines[108][:40])}')
