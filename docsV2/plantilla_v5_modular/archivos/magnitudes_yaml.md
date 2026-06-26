> **Función**: Diccionario central de todas las magnitudes físicas reales del leaf.
> **Relaciones**: Es el origen de verdad para los símbolos. Cualquier ID en `formulas.yaml`, `teoria.md` o gráficos DEBE estar definido aquí.

---

<!-- EXTRACT-STRUCTURE-YAML -->
```yaml
###ESTRUCTURA OBLIGATORIA MAGNITUDES###
version: ""
magnitudes:
  - id: ""
    symbol: ""
    nombre:
      es: ""
      en: ""
    descripcion:
      es: ""
      en: ""
    unidad_si: ""
    dimension: ""
    is_vector: false
    components: []
    category: ""
    physical_role: ""
    used_in: []
    common_mistake: ""
    typical_range: ""
    sign_behavior:
      has_sign: false
      meaning:
        es: ""
        en: ""
    zero_behavior:
      allowed: false
      meaning:
        es: ""
        en: ""
    value_nature:
      kind: ""
      nonnegative_only: false
      expected_interval: ""
    interpretation_role:
      primary_for: []
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: ""
```

# 7. magnitudes.yaml

Cada magnitud debe incluir obligatoriamente:

- id
- symbol

- nombre:
  - es
  - en

- descripcion:
  - es
  - en

- unidad_si
- dimension

- is_vector
- components

- category
- physical_role

- used_in
- common_mistake
- typical_range

- sign_behavior
  - has_sign
  - meaning
    - es
    - en

- zero_behavior
  - allowed
  - meaning
    - es
    - en

- value_nature
  - kind
  - nonnegative_only
  - expected_interval

- interpretation_role
  - primary_for
  - secondary_for

- graph_binding
  - channels

- pedagogical_notes

Categorías permitidas:

- fundamental
- derived
- state
- parameter
- constant
- dimension

Reglas:

- Toda magnitud real usada en formulas.yaml debe existir aquí.
- Toda magnitud real usada en teoria.md y ejemplos.md debe existir aquí y aparecer como `[[id_magnitud]]` en Markdown.
- Toda magnitud real usada en interpretacion.yaml debe existir aquí.
- Las magnitudes ficticias o variables auxiliares que no sean magnitudes reales del leaf no deben añadirse aquí; en Markdown deben escribirse como código inline, por ejemplo `` `u_aux` ``.

**Regla crítica — Magnitudes adimensionales y ratios (RECHAZADO sin esto):**

Todo valor que sea `target` en `formulas.yaml` (sea `result_semantics.target` o `rearrangements[].target`) DEBE estar definido en `magnitudes.yaml`, aunque sea adimensional o un cociente puro. El validador busca la coherencia en ambos sentidos: si `formulas.yaml` declara `target: margen`, el id `margen` debe existir como magnitud en `magnitudes.yaml` (con `dimension: adimensional` o `"[1]"`, `unidad_si: "-"` o `"adimensional"`). Omitir esto produce 4 fallos en cadena: `coherencia`, `coverage`, `symbols` y `markdown_entities`. Verificación rápida antes de cerrar el leaf:

```bash
grep "target:" formulas.yaml  # Cada valor único debe ser clave en magnitudes.yaml
```
**REGLA DE RECHAZO DURO — `components` siempre obligatorio:**

El campo `components` debe estar **siempre presente**, independientemente de si la magnitud es escalar o vectorial. Omitirlo produce FAIL en la validación YAML.

- Si la magnitud es **escalar**: `components: []` (lista vacía explícita, nunca omitir el campo ni `null`)
- Si la magnitud es **vectorial**: listar las componentes: `components: ["E_x", "E_y", "E_z"]`

```yaml
# ✅ Correcto (escalar)
- id: c
  components: []

# ✅ Correcto (vectorial)
- id: E
  components: ["E_x", "E_y", "E_z"]

# ❌ Incorrecto (campo ausente → FAIL)
- id: c
  # components no aparece → FAIL
```

**REGLA DE RECHAZO DURO — `pedagogical_notes` siempre obligatorio:**

El campo `pedagogical_notes` debe estar **siempre presente** con contenido bilingüe no genérico. Un campo vacío o con texto copiable sin cambios desde otro leaf produce FAIL semántico.

```yaml
# ✅ Correcto
pedagogical_notes:
  es: "Texto específico del leaf en español. No genérico."
  en: "Leaf-specific text in English. Not generic."

# ❌ Incorrecto (campo ausente → FAIL)
# pedagogical_notes no aparece → FAIL
```

- unidad_si no puede quedar vacía.
- dimension no puede quedar vacía.
- used_in debe ser útil, no decorativo.
- common_mistake debe reflejar un error real de alumno.
- typical_range debe dar una escala razonable, no una frase vacía.
- `sign_behavior` debe existir aunque la magnitud no use signo; en ese caso debe explicitarlo.
- `zero_behavior` debe indicar si el valor nulo es posible y qué significa físicamente.
- `value_nature` debe permitir distinguir escalar con signo, parámetro adimensional, magnitud no negativa, proyección vectorial o variable de estado equivalente.
- `interpretation_role` debe reflejar para qué lecturas físicas sirve la magnitud.
- `graph_binding` debe ayudar a conectar resultado e interfaz visual.

**REGLA DE RECHAZO DURO — Campos obligatorios completos (11 campos extra):**

El validador verifica que CADA magnitud tenga los siguientes campos. Si alguno falta, falla `Cada magnitud tiene todos los campos v5`:

```
is_vector        # boolean: true si vectorial, false si escalar
category         # uno de: fundamental | derived | state | parameter | constant | dimension
used_in          # lista de contextos donde aparece (no genérico)
common_mistake   # error real del alumno sobre esta magnitud
typical_range    # rango numérico con unidad (no frase vacía)
sign_behavior:
  has_sign       # boolean
  meaning:
    es           # qué significa el signo físicamente (es)
    en           # qué significa el signo físicamente (en)
zero_behavior:
  allowed        # boolean
  meaning:
    es           # qué significa valor cero (es)
    en           # qué significa valor cero (en)
value_nature:
  kind           # scalar_signed | scalar_unsigned | ratio | vector_component | angle
  nonnegative_only  # boolean
  expected_interval # string con rango o "any"
interpretation_role:
  primary_for    # lista de lecturas físicas principales
  secondary_for  # lista de lecturas secundarias (puede ser [])
graph_binding:
  channels       # lista de canales gráficos (puede ser [])
pedagogical_notes:
  es             # nota pedagógica específica del leaf (no genérica)
  en             # nota pedagógica específica del leaf (no genérica)
```

> Verificación rápida: para cada magnitud en el YAML, confirmar que los 11 campos extra están presentes. Un campo ausente —aunque sea `graph_binding`— produce FAIL en cascada.

**REGLA DE RECHAZO DURO — Toda magnitud núcleo debe estar conectada con `formulas.yaml`:**

El validador comprueba que el `id` o el `symbol` de cada magnitud núcleo aparezca en el bloque de texto formado por los campos `id`, `target` y `latex` de todas las fórmulas. Si una magnitud no aparece en ninguna fórmula como target ni en ningún latex, falla `coverage: magnitudes núcleo conectadas con formulas.yaml`.

Verificación rápida:
```bash
grep -n "id:\|target:\|latex:" formulas.yaml  # cada symbol de magnitudes.yaml debe aparecer en al menos una línea
```

Solución cuando una magnitud no está en ninguna fórmula:
- **Opción A**: Añadir un rearrangement con `target: <id_magnitud>` en la fórmula más relacionada.
- **Opción B**: Añadir una fórmula nueva específica que tenga esa magnitud como target principal.
- **Opción C** (solo si la magnitud es puramente representacional): Añadirla al `latex` de una fórmula existente mediante su símbolo LaTeX.

> Ejemplo típico de fallo: `q_fuente` es magnitud del leaf pero ninguna fórmula la calcula ni la referencia. Solución: añadir la ley de Gauss simplificada con `target: q_fuente`.

**REGLA DE RECHAZO DURO — Funciones matemáticas NO son magnitudes:**

Funciones como `acos`, `asin`, `atan`, `sqrt`, `cos`, `sin` etc. **nunca** deben declararse como magnitudes en `magnitudes.yaml`. Son funciones del motor de cálculo, no cantidades físicas. Si en `formulas.yaml` aparece `acos(x)` en una ecuación, el validador puede reportar `acos` como variable no definida. La solución es **reformular la fórmula** para que el target sea la magnitud física ya declarada, no introducir `acos` como nueva magnitud.

Ejemplo incorrecto:
```yaml
- id: acos  # ❌ NUNCA declarar funciones matemáticas como magnitudes
```

Solución: en `formulas.yaml`, reescribir el rearrangement que usaba `acos` como fórmula separada con target en la magnitud física real (e.g. `angulo_campo`), expresando la ecuación en forma explícita con la función inversa descrita en prose, o simplemente omitir ese rearrangement si no es calculable directamente.

Regla de seguridad YAML (CRÍTICO):

Los valores del campo `components:` que contienen comas dentro de llaves LaTeX
`{...}` deben ir entrecomillados. Ejemplo correcto:

  components: ["a_{rel,x}", "a_{rel,y}", "a_{rel,z}"]

Incorrecto (produce error de parseo):

  components: [a_{rel,x}, a_{rel,y}, a_{rel,z}]

El motivo: YAML interpreta las comas dentro de flow sequences como separadores
de elementos y las llaves como inicio de mapping. El resultado es un error que
impide cargar el documento entero y silencia la interpretación en el frontend.

Regla adicional de unicidad: ningún campo puede aparecer dos veces en el mismo
nivel de un mapping YAML (ni `typical_range:`, ni `es:`, ni cualquier otro).

Regla crítica:

Si en ejemplos o teoría aparece una magnitud auxiliar de uso frecuente,
debe definirse también aquí si tiene significado físico autónomo.

Regla crítica reforzada (rechazo duro):

Los siguientes campos no pueden ser decorativos, genéricos ni copiables sin cambios desde otro leaf:

- sign_behavior
- zero_behavior
- value_nature
- interpretation_role
- graph_binding
- pedagogical_notes

Condiciones obligatorias:

- deben contener información física específica del leaf
- deben ser coherentes con al menos una fórmula del leaf
- deben ser utilizables por `interpretacion.yaml`
- deben permitir lectura física real, no relleno semántico

Si cualquiera de estos campos es vacío, genérico o intercambiable con otro leaf sin cambios de contenido, el leaf no supera Nivel 4.7.

---------------------------------------------------------------------