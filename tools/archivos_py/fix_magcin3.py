# -*- coding: utf-8 -*-
"""
fix_magcin3.py - Correcciones finales para magnitudes-cinematicas (5 FAILs → 0)

FAILs a corregir:
1. teoria.md L61: analisis dimensional detectado → backtick + Unicode
2. teoria.en.md L60: mismo
3. ejemplos.md: formula inline invalida + backtick mag + formula textual invalida
4. ejemplos.en.md: mismo
5. magnitudes visibles usan formato [[id]] (global backtick→[[id]] en 4 archivos)
"""

import re, sys, os
sys.stdout.reconfigure(encoding='utf-8')

BASE = 'frontend/src/data_v2_i18n/fisica-clasica/mecanica/cinematica/magnitudes-cinematicas'

MAGNITUDES = sorted([
    'posicion_vectorial', 'posicion', 'desplazamiento', 'distancia',
    'velocidad_media', 'rapidez_media', 'aceleracion_media', 'cambio_velocidad',
    'tiempo', 'intervalo_tiempo', 'velocidad', 'rapidez', 'aceleracion'
], key=len, reverse=True)  # sort by length desc to avoid partial matches


def read(fn):
    path = os.path.join(BASE, fn)
    return open(path, encoding='utf-8').read()


def write(fn, text):
    path = os.path.join(BASE, fn)
    open(path, 'w', encoding='utf-8').write(text)
    print(f'  Escrito: {fn}')


def fix_backtick_mags(text):
    """Convierte `magnitude_id` → [[magnitude_id]] en todo el texto."""
    count = 0
    for mid in MAGNITUDES:
        pattern = '`' + mid + '`'
        replacement = '[[' + mid + ']]'
        n = text.count(pattern)
        if n > 0:
            text = text.replace(pattern, replacement)
            count += n
            print(f'    backtick→[[id]]: `{mid}` → [[{mid}]] ({n}x)')
    return text, count


def fix_dimensional_es(text):
    """Fix dimensional notation en teoria.md L61."""
    OLD = (
        'Desde el punto de vista dimensional, cada derivada temporal añade un factor T⁻¹ a las unidades. '
        'Posición tiene dimensiones [L], [[velocidad]] [LT⁻¹] y [[aceleracion]] [LT⁻²]. '
        'Esta cadena dimensional permite verificar ecuaciones: '
        'cualquier término sumado debe compartir dimensiones. '
        'Por ejemplo, la ecuación de posición en cinemática es dimensionalmente consistente '
        'porque todos sus términos tienen dimensiones de longitud.'
    )
    NEW = (
        'Desde el punto de vista dimensional, cada derivada temporal añade un factor `T⁻¹` a las unidades. '
        'Posición tiene dimensiones `[L]`, [[velocidad]] `[L T⁻¹]` y [[aceleracion]] `[L T⁻²]`. '
        'Esta cadena dimensional permite verificar ecuaciones: '
        'cualquier término sumado debe compartir dimensiones. '
        'Por ejemplo, la ecuación de posición en cinemática es dimensionalmente consistente '
        'porque todos sus términos tienen dimensiones de longitud.'
    )
    if OLD in text:
        text = text.replace(OLD, NEW)
        print('    dimensional ES: OK')
    else:
        print('    WARN dimensional ES: NO encontrado')
    return text


def fix_dimensional_en(text):
    """Fix dimensional notation en teoria.en.md L60."""
    OLD = (
        'From a dimensional standpoint, each time derivative adds a factor T⁻¹ to the units. '
        'Position has dimensions [L], [[velocidad]] [LT⁻¹] and [[aceleracion]] [LT⁻²]. '
        'This dimensional chain provides a consistency check for equations: '
        'every term in a sum must share the same dimensions. '
        'For instance, the kinematic position equation is dimensionally consistent '
        'because all its terms carry dimensions of length.'
    )
    NEW = (
        'From a dimensional standpoint, each time derivative adds a factor `T⁻¹` to the units. '
        'Position has dimensions `[L]`, [[velocidad]] `[L T⁻¹]` and [[aceleracion]] `[L T⁻²]`. '
        'This dimensional chain provides a consistency check for equations: '
        'every term in a sum must share the same dimensions. '
        'For instance, the kinematic position equation is dimensionally consistent '
        'because all its terms carry dimensions of length.'
    )
    if OLD in text:
        text = text.replace(OLD, NEW)
        print('    dimensional EN: OK')
    else:
        print('    WARN dimensional EN: NO encontrado')
    return text


def fix_ejemplos_es(text):
    """Fix formula textual invalida e inline en ejemplos.md."""
    fixes = [
        # L17: table km = m → km (m)
        (
            '| s | [[distancia]] recorrida | 12,0 km = 12 000 m |',
            '| s | [[distancia]] recorrida | 12,0 km (12 000 m) |'
        ),
        # L18: table km = m → km (m)
        (
            '| |Δx| | módulo del [[desplazamiento]] | 9,6 km = 9 600 m |',
            '| |Δx| | módulo del [[desplazamiento]] | 9,6 km (9 600 m) |'
        ),
        # L19: table min = s → min (s)
        (
            '| Δt | [[intervalo_tiempo]] | 40 min = 2 400 s |',
            '| Δt | [[intervalo_tiempo]] | 40 min (2 400 s) |'
        ),
        # L79: resultado con = → →
        (
            'La [[rapidez_media]] resulta: 12 000 m ÷ 2 400 s = 5,0 m/s.',
            'La [[rapidez_media]] resulta: 12 000 m ÷ 2 400 s → 5,0 m/s.'
        ),
        # L83: resultado con = → →
        (
            'La [[velocidad_media]] resulta: 9 600 m ÷ 2 400 s = 4,0 m/s.',
            'La [[velocidad_media]] resulta: 9 600 m ÷ 2 400 s → 4,0 m/s.'
        ),
        # L123: conversiones de unidades con = → →
        (
            'Convertimos unidades: 45 km = 45 000 m; 1 h 52 min = 6 720 s.',
            'Convertimos unidades: 45 km → 45 000 m; 1 h 52 min → 6 720 s.'
        ),
        # L71: eliminar math inline (formula invalida)
        (
            'Estas tres expresiones no se usan aquí para obtener el valor promedio principal, '
            'pero sí forman parte de la resolución conceptual del problema porque '
            'indican qué ocurriría si dispusiéramos de la función temporal '
            r'\( x(t) \). La relación \( v = dx/dt \) define la `velocidad_instantanea`, '
            r'la relación \( a = dv/dt \) define la `aceleracion_instantanea` y '
            r'la relación \( a = d^2x/dt^2 \) expresa la `aceleracion_como_segunda_derivada`. '
            'Por tanto, la resolución distingue explícitamente entre magnitudes medias, '
            'que sí calculamos, y magnitudes instantáneas, que aquí quedan identificadas '
            'como extensión natural del mismo marco cinemático.',

            'Estas tres expresiones no se usan aquí para obtener el valor promedio principal, '
            'pero sí forman parte de la resolución conceptual del problema porque '
            'indican qué ocurriría si dispusiéramos de la función temporal de posición. '
            'La derivada temporal de posición define la velocidad instantánea ([[velocidad]]), '
            'la derivada temporal de la velocidad define la aceleración instantánea ([[aceleracion]]) '
            'y la segunda derivada temporal de posición expresa la aceleración instantánea como '
            'derivada de orden dos. Por tanto, la resolución distingue explícitamente entre '
            'magnitudes medias, que sí calculamos, y magnitudes instantáneas, que aquí quedan '
            'identificadas como extensión natural del mismo marco cinemático.'
        ),
    ]
    for old, new in fixes:
        if old in text:
            text = text.replace(old, new)
            print(f'    ES fix: OK → {new[:60]}...')
        else:
            print(f'    WARN ES: NO encontrado → {old[:60]}...')
    return text


def fix_ejemplos_en(text):
    """Fix formula textual invalida e inline en ejemplos.en.md."""
    fixes = [
        # L17
        (
            '| s | [[distancia]] traveled | 12.0 km = 12 000 m |',
            '| s | [[distancia]] traveled | 12.0 km (12 000 m) |'
        ),
        # L18
        (
            '| |Δx| | [[desplazamiento]] magnitude | 9.6 km = 9 600 m |',
            '| |Δx| | [[desplazamiento]] magnitude | 9.6 km (9 600 m) |'
        ),
        # L19: fix double ref AND = sign
        (
            '| Δt | [[tiempo]] [[intervalo_tiempo]] | 40 min = 2 400 s |',
            '| Δt | [[intervalo_tiempo]] | 40 min (2 400 s) |'
        ),
        # L81
        (
            'The [[rapidez_media]] gives: 12 000 m ÷ 2 400 s = 5.0 m/s.',
            'The [[rapidez_media]] gives: 12 000 m ÷ 2 400 s → 5.0 m/s.'
        ),
        # L85
        (
            'The [[velocidad_media]] gives: 9 600 m ÷ 2 400 s = 4.0 m/s.',
            'The [[velocidad_media]] gives: 9 600 m ÷ 2 400 s → 4.0 m/s.'
        ),
        # L125
        (
            'Converting units: 45 km = 45 000 m; 1 h 52 min = 6 720 s.',
            'Converting units: 45 km → 45 000 m; 1 h 52 min → 6 720 s.'
        ),
        # L73: eliminar math inline
        (
            'These three expressions are not required for the main average-value calculation, '
            'but they are part of the conceptual resolution of the problem because '
            'they show what would be needed if the full time law '
            r'\( x(t) \) were available. The relation \( v = dx/dt \) defines `velocidad_instantanea`, '
            r'the relation \( a = dv/dt \) defines `aceleracion_instantanea`, '
            r'and the relation \( a = d^2x/dt^2 \) expresses `aceleracion_como_segunda_derivada`. '
            'In that sense, the resolution makes an explicit distinction between average quantities, '
            'which are computed here, and instantaneous quantities, which complete the same '
            'kinematic framework.',

            'These three expressions are not required for the main average-value calculation, '
            'but they are part of the conceptual resolution of the problem because '
            'they show what would be needed if the full time law of position were available. '
            'The time derivative of position defines the instantaneous velocity ([[velocidad]]), '
            'the time derivative of velocity defines the instantaneous acceleration ([[aceleracion]]), '
            'and the second time derivative of position expresses the instantaneous acceleration as '
            'a second-order derivative. In that sense, the resolution makes an explicit distinction '
            'between average quantities, which are computed here, and instantaneous quantities, '
            'which complete the same kinematic framework.'
        ),
    ]
    for old, new in fixes:
        if old in text:
            text = text.replace(old, new)
            print(f'    EN fix: OK → {new[:60]}...')
        else:
            print(f'    WARN EN: NO encontrado → {old[:60]}...')
    return text


def main():
    print('=== fix_magcin3.py ===')

    # 1. Fix teoria.md
    print('\n[1] teoria.md - dimensional notation')
    t = read('teoria.md')
    t = fix_dimensional_es(t)
    write('teoria.md', t)

    # 2. Fix teoria.en.md
    print('\n[2] teoria.en.md - dimensional notation')
    t = read('teoria.en.md')
    t = fix_dimensional_en(t)
    write('teoria.en.md', t)

    # 3-6. Global backtick → [[id]] + specific fixes for 4 files
    for fn, fix_fn in [
        ('aplicaciones.md', None),
        ('aplicaciones.en.md', None),
        ('ejemplos.md', fix_ejemplos_es),
        ('ejemplos.en.md', fix_ejemplos_en),
    ]:
        print(f'\n[*] {fn}')
        t = read(fn)

        # Global backtick mag conversion
        t, n = fix_backtick_mags(t)
        print(f'    Total backtick conversiones: {n}')

        # Specific fixes
        if fix_fn:
            t = fix_fn(t)

        write(fn, t)

    print('\n=== Listo. Ejecutar validador para verificar. ===')


if __name__ == '__main__':
    main()
