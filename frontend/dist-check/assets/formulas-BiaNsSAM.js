const e=`version: 1
formulas:
- id: mru_posicion
  title:
    es: Ecuación horaria de la posición
    en: Position-time equation
  equation: x = x0 + v*t
  latex: x = x_0 + v t
  rearrangements:
  - target: v
    latex: v = \\frac{x - x_0}{t}
    equation: v = (x - x0)/t
    constraints: []
  - target: t
    latex: t = \\frac{x - x_0}{v}
    equation: t = (x - x0)/v
    constraints: []
  category: fundamental
  relation_type: constitutive_relation
  physical_meaning:
    es: Describe la evolución de la posición en función del tiempo para una velocidad constante.
    en: Describes position evolution as a function of time for a constant velocity.
  constraints:
  - v es constante
  - trayectoria rectilínea
  validity:
    es: Sistemas inerciales y velocidades constantes (a = 0).
    en: Inertial systems and constant velocities (a = 0).
  dimension_check: '[L] = [L] + [L/T][T] = [L]'
  calculable: true
  motivo_no_calculable: null
  used_in:
  - Predicción de posición futura
  - Cálculo de tiempo de encuentro
  interpretation_tags:
  - mru
  result_semantics:
    target: v
    meaning: Resulta util para interpretar v en el contexto del leaf.
  domain_checks:
  - expr: 'true'
    message:
      es: Verifica que los datos pertenezcan al dominio del modelo.
      en: Check that the data belong to the model domain.
  coherence_checks:
  - expr: 'true'
    message:
      es: Revisa que el resultado tenga sentido fisico.
      en: Check that the result makes physical sense.
  graph_implications:
  - La grafica debe reflejar cambios coherentes con la formula.
  pedagogical_triggers:
  - when: 'true'
    message:
      es: Comprueba signos, unidades y significado del resultado.
      en: Check signs, units, and meaning of the result.
- id: mru_velocidad_media
  title:
    es: Definición de velocidad media
    en: Average velocity definition
  equation: v = dx / dt
  latex: v = \\frac{\\Delta x}{\\Delta t}
  rearrangements:
  - target: dx
    latex: \\Delta x = v \\Delta t
    equation: dx = v*dt
    constraints: []
  - target: dt
    latex: \\Delta t = \\frac{\\Delta x}{v}
    equation: dt = dx/v
    constraints: []
  category: fundamental
  relation_type: definition
  physical_meaning:
    es: Relación entre el desplazamiento neto y el intervalo de tiempo transcurrido.
    en: Relationship between net displacement and elapsed time interval.
  constraints:
  - dt > 0
  validity:
    es: Aplicable a cualquier tramo finito del movimiento.
    en: Applicable to any finite segment of the motion.
  dimension_check: '[L/T] = [L]/[T]'
  calculable: true
  motivo_no_calculable: null
  used_in:
  - Determinación de ritmos de avance
  interpretation_tags:
  - mru
  result_semantics:
    target: dx
    meaning: Resulta util para interpretar dx en el contexto del leaf.
  domain_checks:
  - expr: 'true'
    message:
      es: Verifica que los datos pertenezcan al dominio del modelo.
      en: Check that the data belong to the model domain.
  coherence_checks:
  - expr: 'true'
    message:
      es: Revisa que el resultado tenga sentido fisico.
      en: Check that the result makes physical sense.
  graph_implications:
  - La grafica debe reflejar cambios coherentes con la formula.
  pedagogical_triggers:
  - when: 'true'
    message:
      es: Comprueba signos, unidades y significado del resultado.
      en: Check signs, units, and meaning of the result.
`;export{e as default};
