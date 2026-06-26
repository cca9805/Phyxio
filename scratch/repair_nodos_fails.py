from pathlib import Path
import yaml

leaf = Path('frontend/src/data_v2_i18n/fisica-clasica/ondas/ondas-estacionarias/nodos-y-antinodos')

p = leaf / 'magnitudes.yaml'
data = yaml.safe_load(p.read_text(encoding='utf-8'))
for m in data:
    if 'name' in m and 'nombre' not in m:
        m['nombre'] = m['name']
    if 'description' in m and 'descripcion' not in m:
        m['descripcion'] = m['description']
    if 'si_unit' in m and 'unidad_si' not in m:
        m['unidad_si'] = m['si_unit']
p.write_text(yaml.safe_dump(data, allow_unicode=True, sort_keys=False), encoding='utf-8')

fp = leaf / 'formulas.yaml'
fd = yaml.safe_load(fp.read_text(encoding='utf-8'))
forms = fd['formulas']
if not any(f.get('id') == 'amplitud_maxima_antinodo' for f in forms):
    forms.append({
        'id': 'amplitud_maxima_antinodo',
        'title': {'es': 'Amplitud maxima en un antinodo', 'en': 'Maximum amplitude at an antinode'},
        'equation': 'amplitud_maxima = 2 * amplitud_onda_incidente',
        'latex': 'A_{max} = 2 A',
        'rearrangements': [
            {'target': 'amplitud_maxima', 'equation': 'amplitud_maxima = 2 * amplitud_onda_incidente', 'latex': 'A_{max} = 2 A'}
        ],
        'category': 'fundamental',
        'relation_type': 'interference_result',
        'physical_meaning': {
            'es': 'En un antinodo las dos ondas viajeras se suman constructivamente y producen la amplitud maxima del patron estacionario.',
            'en': 'At an antinode the two traveling waves add constructively and produce the maximum amplitude of the standing pattern.'
        },
        'constraints': ['Ondas viajeras de igual amplitud', 'Interferencia constructiva en el antinodo'],
        'validity': {
            'es': 'Valida para ondas estacionarias lineales con dos ondas viajeras coherentes de igual amplitud.',
            'en': 'Valid for linear standing waves with two coherent traveling waves of equal amplitude.'
        },
        'dimension_check': '[L] = [1] * [L]',
        'calculable': True,
        'motivo_no_calculable': '',
        'used_in': ['Identificacion de antinodos', 'Estimacion de intensidad vibratoria', 'Analisis de maxima oscilacion'],
        'interpretation_tags': ['amplitud maxima', 'antinodo', 'interferencia constructiva'],
        'result_semantics': {
            'target': 'amplitud_maxima',
            'kind': 'maximum_oscillation',
            'sign_meaning': {'es': 'Positiva, representa magnitud maxima de oscilacion', 'en': 'Positive, represents maximum oscillation magnitude'},
            'absolute_value_meaning': {'es': 'Desplazamiento maximo medible en un antinodo', 'en': 'Measurable maximum displacement at an antinode'}
        },
        'domain_checks': [
            {'condition': 'amplitud_maxima >= 0', 'message': {'es': 'La amplitud maxima no puede ser negativa', 'en': 'Maximum amplitude cannot be negative'}}
        ],
        'coherence_checks': [
            {'check': 'amplitud_maxima >= 0', 'description': {'es': 'La amplitud maxima debe ser no negativa', 'en': 'Maximum amplitude must be non-negative'}}
        ],
        'graph_implications': [
            {'plot_type': 'line', 'x_axis': 'posicion_antinodo', 'y_axis': 'amplitud_maxima', 'description': {'es': 'Los antinodos aparecen como maximos de amplitud', 'en': 'Antinodes appear as amplitude maxima'}}
        ],
        'pedagogical_triggers': [
            {'error_type': 'confusion_nodo_antinodo', 'trigger': 'amplitud_maxima == 0', 'message': {'es': 'Si la amplitud maxima es cero, no hay antinodo observable', 'en': 'If maximum amplitude is zero, there is no observable antinode'}}
        ]
    })
fp.write_text(yaml.safe_dump(fd, allow_unicode=True, sort_keys=False), encoding='utf-8')
