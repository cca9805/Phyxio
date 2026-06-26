Sí. Para Phyxio lo plantearía como un **motor de ejercicios declarativo**, conectado a cada `leaf`, con capacidad de generar baterías por:

1. **leaf concreto**
2. **nodo completo con varios leaf**
3. **nivel de dificultad**
4. **tipo de ejercicio**
5. **variables/fórmulas objetivo**
6. **salida deseada: enunciado, resolución, pistas, validación, interpretación y gráfico**

La idea buena no es decirle a la IA: “hazme 10 ejercicios de este leaf”. Eso vuelve a crear el monstruo de los 40 fails, pero vestido de gimnasia. Lo correcto es construir un sistema con **plantillas + contratos + validación**.

---

# 1. Nueva pieza: `exercise_engine`

Yo crearía algo así:

```txt
tools/
  phyxio_exercise_engine/
    generate_exercises.py
    validate_exercises.py
    select_leafs.py
    difficulty_rules.py
    exercise_schema.py
    exporters/
      to_markdown.py
      to_json.py
      to_yaml.py
    templates/
      exercise_prompt_leaf.md
      exercise_prompt_node.md
      exercise_checklist.md
```

Y en datos:

```txt
frontend/src/data_v2_i18n/
  fisica-clasica/
    mecanica/
      cinematica/
        magnitudes-cinematicas/
          ejercicios.yaml
          ejercicios.en.yaml
```

O, mejor todavía, separado para no contaminar el leaf base:

```txt
frontend/src/exercises_v2/
  fisica-clasica/
    mecanica/
      cinematica/
        magnitudes-cinematicas/
          exercises.es.yaml
          exercises.en.yaml
```

Yo prefiero esta segunda opción: **los ejercicios son una capa derivada**, no parte nuclear del leaf.

---

# 2. El motor debe leer el leaf, no improvisarlo

Para generar ejercicios de un leaf, el motor debería cargar:

```txt
meta.yaml
magnitudes.yaml
formulas.yaml
interpretacion.yaml
teoria.md
ejemplos.md
errores.md
aplicaciones.md
modelos.md
```

Pero no todo siempre.

Para ahorrar tokens y evitar ruido, puedes definir niveles de lectura:

| Modo       | Archivos usados                                                       | Uso                               |
| ---------- | --------------------------------------------------------------------- | --------------------------------- |
| `minimal`  | `meta.yaml`, `magnitudes.yaml`, `formulas.yaml`                       | ejercicios numéricos básicos      |
| `didactic` | + `errores.md`, `ejemplos.md`                                         | ejercicios con trampas y pistas   |
| `full`     | + `teoria.md`, `modelos.md`, `aplicaciones.md`, `interpretacion.yaml` | ejercicios completos nivel Phyxio |

Para empezar, yo haría `minimal` y `didactic`.

---

# 3. Cada ejercicio debería tener un schema fijo

No generaría ejercicios como Markdown libre. Los generaría como YAML/JSON validable.

Ejemplo:

```yaml
version: 1
leaf_id: segunda_ley_fuerza_masa
exercise_set:
  id: segunda_ley_fuerza_masa_pack_001
  title:
    es: Ejercicios sobre la segunda ley de Newton
    en: Exercises on Newton's second law
  difficulty_mix:
    bajo: 4
    medio: 4
    dificil: 2

exercises:
  - id: segunda_ley_fuerza_masa_bajo_001
    difficulty: bajo
    type: numeric_direct
    target_formulas:
      - segunda_ley_newton
    target_magnitudes:
      - F
      - m
      - a
    statement:
      es: >
        Un carrito de masa 2,0 kg recibe una fuerza horizontal constante
        de 6,0 N sobre una superficie sin rozamiento. Calcula su aceleración.
      en: >
        A cart of mass 2.0 kg is acted on by a constant horizontal force
        of 6.0 N on a frictionless surface. Calculate its acceleration.
    givens:
      - magnitude: m
        value: 2.0
        unit: kg
      - magnitude: F
        value: 6.0
        unit: N
    asks:
      - magnitude: a
        unit: m/s^2
    solution:
      symbolic:
        es: "A partir de F = m a, se despeja a = F / m."
        en: "From F = m a, solve for a = F / m."
      numeric_steps:
        es:
          - "a = 6,0 / 2,0"
          - "a = 3,0 m/s²"
        en:
          - "a = 6.0 / 2.0"
          - "a = 3.0 m/s²"
      final_answer:
        es: "La aceleración es 3,0 m/s²."
        en: "The acceleration is 3.0 m/s²."
    interpretation:
      es: >
        La aceleración no aparece porque el cuerpo ya se mueva, sino porque
        existe una fuerza neta no nula.
      en: >
        The acceleration appears not because the body is already moving,
        but because there is a non-zero net force.
    common_errors:
      - es: "Confundir fuerza con velocidad."
        en: "Confusing force with velocity."
      - es: "Olvidar despejar la masa."
        en: "Forgetting to divide by mass."
    validation:
      dimensional_check: true
      uses_existing_formula_ids: true
      uses_existing_magnitude_ids: true
```

Esto es mucho más robusto que un `.md` libre.

---

# 4. Tipos de ejercicios

Yo definiría una taxonomía fija. Por ejemplo:

```yaml
exercise_types:
  numeric_direct:
    description: Cálculo directo usando una fórmula.
  numeric_inverse:
    description: Despeje de una variable no principal.
  conceptual:
    description: Pregunta sin cálculo o con cálculo mínimo.
  error_detection:
    description: Detectar un razonamiento incorrecto.
  graph_interpretation:
    description: Interpretar un gráfico Coord, Dcl o Svg.
  model_validity:
    description: Analizar si el modelo físico es aplicable.
  multi_step:
    description: Encadenar dos o más fórmulas.
  real_context:
    description: Aplicación contextualizada.
  comparison:
    description: Comparar dos situaciones físicas.
  parameter_variation:
    description: Cambiar una variable y razonar el efecto.
```

Esto encaja muy bien con Phyxio porque cada leaf ya tiene:

```txt
formulas.yaml
magnitudes.yaml
interpretacion.yaml
errores.md
aplicaciones.md
modelos.md
```

Es decir, ya tienes el ADN del ejercicio. Solo falta el “tejedor de problemas” 🧬⚙️.

---

# 5. Dificultad: bajo, medio, difícil

La dificultad no debería ser una etiqueta decorativa. Debe tener reglas reales.

## Nivel bajo

Ejercicio directo.

```yaml
difficulty: bajo
rules:
  max_formulas: 1
  max_unknowns: 1
  context_complexity: simple
  algebra: direct_substitution
  includes_common_trap: false
  requires_interpretation: basic
  graph_required: false
```

Ejemplo:

> Dada la masa y la fuerza, calcula la aceleración.

---

## Nivel medio

Requiere despeje, unidades, interpretación o pequeño encadenamiento.

```yaml
difficulty: medio
rules:
  max_formulas: 2
  max_unknowns: 1
  context_complexity: moderate
  algebra: rearrangement
  includes_common_trap: true
  requires_interpretation: medium
  graph_required: optional
```

Ejemplo:

> Dada la aceleración y la masa, calcula la fuerza neta y explica si el movimiento puede ser uniforme.

---

## Nivel difícil

Combina modelo, validez, varias etapas, interpretación y posibles errores.

```yaml
difficulty: dificil
rules:
  max_formulas: 3
  max_unknowns: 2
  context_complexity: rich
  algebra: multi_step
  includes_common_trap: true
  requires_interpretation: deep
  graph_required: optional_or_required
  model_validity_required: true
```

Ejemplo:

> Un bloque se mueve sobre una mesa con rozamiento y una fuerza aplicada inclinada. Determina la aceleración, analiza el diagrama de fuerzas y explica cuándo el modelo deja de ser válido.

---

# 6. Generar 10 ejercicios de un leaf

Comando ideal:

```bash
py tools/phyxio_exercise_engine/generate_exercises.py ^
  --leaf frontend/src/data_v2_i18n/fisica-clasica/mecanica/dinamica/fundamentos/leyes-de-newton/segunda-ley-fuerza-masa ^
  --count 10 ^
  --difficulty bajo:4,medio:4,dificil:2 ^
  --lang es,en ^
  --mode didactic ^
  --out frontend/src/exercises_v2
```

Salida:

```txt
frontend/src/exercises_v2/fisica-clasica/mecanica/dinamica/fundamentos/leyes-de-newton/segunda-ley-fuerza-masa/
  exercises.es.yaml
  exercises.en.yaml
  exercises.report.json
```

---

# 7. Generar 10 ejercicios de un nodo con 6 leaf

Aquí necesitas un selector.

Ejemplo:

```bash
py tools/phyxio_exercise_engine/generate_exercises.py ^
  --node frontend/src/data_v2_i18n/fisica-clasica/mecanica/cinematica ^
  --count 10 ^
  --difficulty bajo:3,medio:4,dificil:3 ^
  --distribution balanced ^
  --lang es,en ^
  --mode didactic ^
  --out frontend/src/exercises_v2
```

Con 6 leaf y 10 ejercicios, el motor puede repartir así:

```yaml
distribution:
  mode: balanced
  total: 10
  leafs:
    magnitudes-cinematicas: 2
    movimiento-rectilineo-uniforme: 2
    movimiento-rectilineo-uniformemente-acelerado: 2
    caida-libre: 2
    movimiento-circular: 1
    composicion-de-movimientos: 1
```

O puedes tener varios modos:

| Modo                     | Comportamiento                                              |
| ------------------------ | ----------------------------------------------------------- |
| `balanced`               | reparte ejercicios entre todos los leaf                     |
| `weighted_by_order`      | sigue el orden del mapa                                     |
| `weighted_by_difficulty` | usa leaf más básicos para bajo y más complejos para difícil |
| `exam`                   | mezcla como examen                                          |
| `adaptive`               | genera según errores previos del alumno                     |
| `review`                 | prioriza conceptos transversales                            |

---

# 8. El mapa `phyxio-map.yaml` debe intervenir

El motor de nodo debe leer el mapa para saber:

```yaml
id
titulo
titulo_en
ruta_relativa
orden
type
niveles
graficos
physical_role
children
```

Flujo:

```txt
Usuario pide ejercicios de nodo
        ↓
select_leafs.py lee phyxio-map.yaml
        ↓
extrae leafs hijos
        ↓
filtra leafs válidos
        ↓
carga contratos mínimos de cada leaf
        ↓
distribuye cantidad y dificultad
        ↓
genera ejercicios por leaf
        ↓
valida coherencia
        ↓
exporta pack
```

---

# 9. Contrato de generación por ejercicio

Cada ejercicio debería cumplir un contrato duro:

```yaml
exercise_contract:
  required:
    - id
    - leaf_id
    - difficulty
    - type
    - target_formulas
    - target_magnitudes
    - statement.es
    - statement.en
    - givens
    - asks
    - solution.symbolic.es
    - solution.symbolic.en
    - solution.numeric_steps.es
    - solution.numeric_steps.en
    - solution.final_answer.es
    - solution.final_answer.en
    - interpretation.es
    - interpretation.en
    - common_errors
    - validation
```

Y reglas:

```yaml
rules:
  - every target_formula must exist in formulas.yaml
  - every target_magnitude must exist in magnitudes.yaml
  - every given magnitude must exist in magnitudes.yaml
  - every asked magnitude must exist in magnitudes.yaml
  - units must match unidad_si or accepted alternatives
  - solution must include symbolic step
  - final answer must include unit
  - bilingual fields must be complete
  - difficulty rules must be satisfied
```

---

# 10. Validación automática

Aquí está la joya. No puedes depender de que el modelo “lo haga bien”. Necesitas un `validate_exercises.py`.

Checks mínimos:

```txt
[structure]
- YAML válido
- campos obligatorios
- ids únicos
- dificultad válida: bajo/medio/dificil
- tipo válido

[leaf_binding]
- leaf_id existe
- fórmulas referenciadas existen
- magnitudes referenciadas existen
- variables usadas existen

[numeric]
- unidades presentes
- valores numéricos razonables
- resultado calculable
- resultado final coherente con pasos

[didactic]
- hay interpretación
- hay errores comunes
- dificultad cumple reglas
- bajo no usa demasiadas fórmulas
- difícil no es solo sustitución directa

[bilingual]
- todos los campos es/en existen
- no hay spanglish evidente
- no falta solución en inglés

[render]
- LaTeX bien delimitado si aparece
- no hay comandos LaTeX sueltos
```

Comando:

```bash
py tools/phyxio_exercise_engine/validate_exercises.py ^
  --file frontend/src/exercises_v2/.../exercises.es.yaml
```

Salida deseable:

```txt
PHYXIO EXERCISE VALIDATOR

PACK: segunda_ley_fuerza_masa_pack_001
TOTAL EXERCISES: 10

[structure] OK
[leaf_binding] OK
[numeric] OK
[didactic] OK
[bilingual] OK
[render] OK

SCORE: 4.86 / 5
```

---

# 11. Integración con calculadora

Aquí puedes hacer algo muy potente.

Cada ejercicio puede declarar si es resoluble por calculadora:

```yaml
calculator_binding:
  enabled: true
  formula_id: segunda_ley_newton
  inputs:
    m: 2.0
    F: 6.0
  target: a
```

Entonces en UI puedes mostrar:

```txt
[Resolver paso a paso]
[Enviar a calculadora]
[Ver interpretación]
[Ver gráfico]
```

Esto convierte los ejercicios en objetos vivos, no en texto muerto. Pequeños autómatas didácticos con bata de laboratorio 🧪.

---

# 12. Integración con gráficos

Cada ejercicio puede declarar un gráfico sugerido:

```yaml
graph_binding:
  enabled: true
  type: Dcl
  scene_id: block_on_table
  profile_id: secondLawHorizontalForce
  parameters:
    mass: 2.0
    applied_force: 6.0
    friction: 0
```

O para Coord:

```yaml
graph_binding:
  enabled: true
  type: Coord
  x_axis: t
  y_axis: v
  relation: linear
```

O para Svg:

```yaml
graph_binding:
  enabled: true
  type: Svg
  scene_id: pitot_tube_flow
```

No todos los ejercicios necesitan gráfico. Pero los de nivel medio/difícil deberían poder usarlo cuando el leaf tenga `graficos`.

Regla práctica:

| Tipo de leaf | Ejercicios con gráfico                        |
| ------------ | --------------------------------------------- |
| `Coord`      | cinemática, ondas, funciones físicas          |
| `Dcl`        | dinámica, fuerzas, equilibrio                 |
| `Svg`        | escenas, fluidos, electromagnetismo, aparatos |
| sin gráfico  | ejercicios conceptuales o numéricos puros     |

---

# 13. Packs de ejercicios

Además de ejercicios sueltos, yo generaría **packs**.

```yaml
exercise_pack:
  id: dinamica_fundamentos_pack_001
  source_type: node
  source_id: fundamentos
  count: 10
  difficulty_mix:
    bajo: 3
    medio: 4
    dificil: 3
  pedagogical_goal:
    es: Repasar las leyes de Newton, fuerzas y diagramas de cuerpo libre.
    en: Review Newton's laws, forces and free-body diagrams.
  exercises:
    - id: primera_ley_inercia_bajo_001
    - id: segunda_ley_fuerza_masa_medio_001
    - id: diagramas_cuerpo_libre_dificil_001
```

Esto te permitiría en el futuro crear:

```txt
Modo práctica
Modo examen
Modo repaso
Modo errores frecuentes
Modo PAU / EvAU
Modo universidad
Modo academia
```

---

# 14. Reparto recomendado de dificultad

Para un leaf:

```yaml
count: 10
difficulty:
  bajo: 3
  medio: 5
  dificil: 2
```

Para un nodo:

```yaml
count: 10
difficulty:
  bajo: 3
  medio: 4
  dificil: 3
distribution: balanced
```

Para modo examen:

```yaml
count: 10
difficulty:
  bajo: 2
  medio: 5
  dificil: 3
distribution: mixed
include_conceptual: true
include_numeric: true
include_error_detection: true
include_graph_interpretation: true
```

---

# 15. Prompt interno para generar ejercicios

No lo haría enorme. Algo así:

```md
Eres el generador de ejercicios de Phyxio.

Usa exclusivamente los datos del contrato del leaf.
No inventes magnitudes ni fórmulas.
No uses variables que no existan en magnitudes.yaml.
No uses fórmulas que no existan en formulas.yaml.

Genera exactamente {{count}} ejercicios.

Distribución:
{{difficulty_mix}}

Tipos permitidos:
{{exercise_types}}

Cada ejercicio debe seguir exactamente este schema:
{{exercise_schema}}

Contrato del leaf:
{{leaf_contract}}

Errores comunes disponibles:
{{common_errors}}

Aplicaciones/contextos disponibles:
{{applications}}

Devuelve únicamente YAML válido.
```

El truco es pasarle un **leaf_contract reducido**, no todos los archivos.

---

# 16. Leaf contract reducido

Puedes crear automáticamente un archivo temporal:

```yaml
leaf_contract:
  id: segunda_ley_fuerza_masa
  title:
    es: Segunda ley: fuerza y masa
    en: Newton's second law: force and mass
  formulas:
    - id: segunda_ley_newton
      latex: F = m a
      variables:
        - F
        - m
        - a
      rearrangements:
        - a = F / m
        - m = F / a
  magnitudes:
    - id: F
      symbol: F
      unidad_si: N
      is_vector: true
    - id: m
      symbol: m
      unidad_si: kg
      is_vector: false
    - id: a
      symbol: a
      unidad_si: m/s^2
      is_vector: true
  common_errors:
    - Confundir fuerza con velocidad.
    - Pensar que si hay movimiento siempre hay fuerza neta.
  graph_types:
    - Dcl
  interpretation_targets:
    - F
    - m
    - a
```

Esto reduce muchísimo tokens.

---

# 17. Arquitectura recomendada

La arquitectura completa sería:

```txt
phyxio-map.yaml
      ↓
select_leafs.py
      ↓
build_leaf_exercise_contract.py
      ↓
generate_exercises.py
      ↓
validate_exercises.py
      ↓
export exercises YAML/JSON
      ↓
UI ExercisePage / PracticeMode / ExamMode
```

En UI:

```txt
ExercisePackPage.jsx
ExerciseCard.jsx
ExerciseSolutionSteps.jsx
ExerciseCalculatorBridge.jsx
ExerciseGraphBridge.jsx
ExerciseInterpretationPanel.jsx
```

---

# 18. Fases de implementación

Yo lo haría en 4 fases.

## Fase 1: motor básico por leaf

Objetivo:

```bash
--leaf
--count
--difficulty
```

Genera YAML validable con ejercicios numéricos y conceptuales.

Sin gráficos todavía.

---

## Fase 2: motor por nodo

Objetivo:

```bash
--node
--count
--distribution balanced
```

Lee `phyxio-map.yaml`, encuentra los leaf hijos y reparte ejercicios.

---

## Fase 3: binding con calculadora e interpretación

Añadir:

```yaml
calculator_binding
interpretation_binding
```

El ejercicio ya puede abrir calculadora con inputs precargados.

---

## Fase 4: binding con gráficos

Añadir:

```yaml
graph_binding
```

Especialmente para:

```txt
Dcl → dinámica y fuerzas
Coord → cinemática, ondas, gráficas funcionales
Svg → fluidos, circuitos, escenas físicas
```

---

# 19. Mi recomendación concreta para Phyxio

Yo no lo metería dentro del validador actual todavía. Haría un módulo paralelo:

```txt
tools/phyxio_exercise_engine/
```

Y un schema independiente:

```txt
exercise_schema_v1.yaml
```

Con una salida como:

```txt
frontend/src/exercises_v2/
```

Después, cuando funcione, lo conectas a la UI.

El primer MVP debería generar:

```txt
10 ejercicios de 1 leaf
3 bajos
5 medios
2 difíciles
en español e inglés
con solución paso a paso
con fórmula objetivo
con magnitudes objetivo
con errores comunes
validado automáticamente
```

Eso ya sería una mejora enorme.

---

# 20. Diseño mínimo viable

Para empezar, yo crearía solo estos 4 archivos:

```txt
tools/phyxio_exercise_engine/
  generate_exercises.py
  validate_exercises.py
  exercise_schema_v1.yaml
  build_leaf_contract.py
```

Y esta salida:

```txt
frontend/src/exercises_v2/<ruta_leaf>/exercises.yaml
```

Luego ya separas `es/en` si lo prefieres.

---

# Conclusión

El planteamiento correcto sería:

```txt
No generar ejercicios como texto.
Generar ejercicios como datos estructurados.
No dejar que la IA invente fórmulas.
Forzar que use magnitudes.yaml y formulas.yaml.
Validar cada ejercicio contra el leaf.
Separar generación por leaf y por nodo.
Añadir dificultad mediante reglas objetivas.
Preparar bindings futuros con calculadora, interpretación y gráficos.
```

La frase clave sería:

> **Un ejercicio Phyxio no es un enunciado: es un objeto didáctico validable conectado al leaf.**

Y ahí está el salto de calidad: ejercicios que no solo “existen”, sino que saben de dónde vienen, qué fórmula entrenan, qué error previenen, qué gráfico pueden activar y qué interpretación física deben provocar.
