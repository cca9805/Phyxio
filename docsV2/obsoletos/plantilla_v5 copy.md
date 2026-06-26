# PLANTILLA PHYXIO — LEAF STANDARD v5 (Nivel 5 Blindado)

version_estandar: v5_n5_blindado_reforzado

Plantilla complementaria obligatoria para gráficos:

- `docsV2/plantilla_y_checklist/plantilla_graficos_v5.md`

Regla de activación:

Si el leaf declara cualquier gráfico en `meta.yaml` o en `phyxio-map.yaml`,
la creación e integración de esos gráficos debe seguir además,
obligatoriamente y sin excepciones editoriales, la plantilla
`plantilla_graficos_v5.md`.

---------------------------------------------------------------------

# 1. Objetivo del estándar

Esta plantilla define el estándar editorial completo para generar un
leaf Phyxio de Nivel 5 de forma robusta, consistente y publicable sin
revisión estructural posterior.

Un leaf generado con esta plantilla debe ser:

- científicamente correcto
- simbólicamente coherente
- pedagógicamente claro
- bilingüe real ES/EN
  - Los archivos .md deben estar en español con ortografía revisada
  - Los archivos .en.md deben estar en inglés técnico de alto nivel
- homogéneo con el resto del proyecto
- publicable sin edición correctiva de fondo
- funcionalmente integrable con cálculo, interpretación y gráficos cuando aplique

Regla absoluta:

Si cualquier regla de esta plantilla no se cumple, el leaf no se
considera finalizado.

Regla de rechazo duro:

Un leaf no puede declararse Nivel 4.7+ ni Nivel 5 si la semántica de
magnitudes, fórmulas e interpretación es decorativa, no evaluable o no
usable por el frontend.

Regla de rechazo duro - Render matemático:

Un leaf no puede declararse Nivel 4.7+ ni Nivel 5 si contiene **fórmulas
textuales inválidas** (ecuaciones escritas como `[[magnitud]] = valor = resultado`
en lugar de usar `{{f:id_formula}}`). Toda igualdad matemática con valores
numéricos debe renderizarse mediante inyección de fórmula, nunca como
texto plano con magnitudes etiquetadas.

Regla de rechazo duro - Estructura de ejemplos:

Un leaf no puede declararse Nivel 4.7+ ni Nivel 5 si `ejemplos.md` o
`ejemplos.en.md` no siguen la **estructura obligatoria exacta** definida en
las secciones 17 y 18 de esta plantilla. Los títulos H1 deben coincidir
CARÁCTER POR CARÁCTER:
- `# Ejemplo tipo examen` (español)
- `# Ejemplo de aplicación real` (español)
- `# Exam-type example` (inglés)
- `# Real-world example` (inglés)

Cualquier variación (mayúsculas diferentes, palabras alternativas, orden
cambiado) causará fallo de validación estructural.

Regla de rechazo duro - Render matemático estricto:

Un leaf no puede declararse Nivel 4.7+ ni Nivel 5 si contiene **cualquiera**
de estos patrones inválidos detectados por el validador:

1. **Fórmulas textuales con magnitudes (más crítico)**: 
   El patrón `[[magnitud]] = valor numérico = resultado` es el error más común.
   - ❌ `[[P_joule]] = (10 A)² · 0.08 Ω = 8 W`
   - ❌ `[[E_joule]] = 8 W · 7200 s = 57.6 kJ`
   - ❌ `[[DeltaT]] = 13.31 W · 3.5 K/W = 46.6 K`
   - ✅ Reformulación válida: "Para la potencia, elevar 10 A al cuadrado y multiplicar por 0.08 Ω da aproximadamente 8 W. Por tanto [[P_joule]] ≈ 8 W."
   
2. **Referencias de fórmula inline**: `{{f:id_formula}}` dentro de un párrafo
   (ejemplo: "La potencia {{f:potencia_joule}} es mayor que...")
   
3. **Ecuaciones con ID de fórmula**: Usar el ID como parte de una ecuación
   (ejemplo: `{{f:energia_joule}} = 8 W · 2 h = 16 Wh`)
   
4. **Ecuaciones LaTeX inline con valores**: Usar `\(...\)` para cálculos
   completos (ejemplo: `\(P = I^2 \cdot R = 8\,\mathrm{W}\)`)

Todas las descripciones de cálculo con valores numéricos deben seguir este formato (en prosa, sin ecuaciones):
```md
{{f:id_formula}}

Para la potencia, elevar 10 A al cuadrado y multiplicar por 0.08 Ω da aproximadamente 8 W. Por tanto [[P_joule]] ≈ 8 W.
```
O usar fórmulas auxiliares en `formulas.yaml` para cálculos específicos.

Regla adicional de cierre con gráficos:

Si el leaf declara gráficos y no cumple también `plantilla_graficos_v5.md`,
el leaf no puede declararse cerrado ni a Nivel 5.

---------------------------------------------------------------------

# 2. Clasificación conceptual del leaf

Cada leaf debe pertenecer principalmente a uno de estos tipos:

1. Fenómeno físico
   - comportamiento observable experimentalmente
   - explicado mediante un modelo físico

2. Magnitud física
   - cantidad medible con unidad física
   - presente explícitamente en ecuaciones

3. Ley física
   - relación fundamental entre magnitudes
   - con dominio de validez físico claro

4. Modelo físico
   - aproximación teórica con hipótesis
   - con límites y señales de fallo

5. Método de resolución
   - procedimiento sistemático para resolver problemas físicos
   - no debe mezclarse con definiciones de ley o magnitud

Reglas:

- El leaf debe declarar implícitamente su tipo principal.
- Todo el contenido debe mantener coherencia con ese tipo principal.
- Si el leaf es de tipo “método de resolución”, la teoría debe centrarse
  en interpretación, procedimiento y criterio físico, no en sustituirlo
  por un leaf de ley física o de magnitud.

---------------------------------------------------------------------

# 2B. Núcleo didáctico obligatorio del leaf

Antes de redactar cualquier archivo, definir explícitamente:

- idea_fisica_dominante
  - es
  - en
- magnitudes_nucleo
- formulas_nucleo
- error_conceptual_dominante
  - es
  - en
- criterio_de_aplicabilidad
  - es
  - en
- criterio_de_fallo_del_modelo
  - es
  - en
- representacion_dominante: Coord | Svg | Dcl | none

Reglas:

- Todo el leaf debe orbitar alrededor de este núcleo.
- `teoria.md`, `ejemplos.md`, `interpretacion.yaml` y gráficos deben reutilizar
  este núcleo de forma explícita.
- Si el núcleo cambia durante la redacción, deben revisarse todos los archivos.
- Un leaf será rechazado si cumple cualquiera de estas condiciones:

  - teoria.md puede trasladarse a otro leaf cambiando solo nombres
  - ejemplos.md puede reutilizarse sin cambio estructural
  - el gráfico principal puede usarse en otro leaf sin modificación semántica
  - el núcleo didáctico no es distinguible de otro leaf cercano

---------------------------------------------------------------------

# 2C. Pregunta física central (obligatoria)

Todo leaf debe declarar explícitamente:

- pregunta_fisica_central:
  - es
  - en

Reglas:

- Debe poder responderse usando:
  - teoria.md
  - ejemplos.md
  - al menos un gráfico (si existe)
- Debe ser una pregunta real, no un título reformulado.
  - Inválido: "Cinemática del movimiento rectilíneo"
  - Válido: "¿Cómo se determina la posición de un objeto a partir de su gráfica velocidad-tiempo?"
- Si no existe → leaf inválido.
- Si la respuesta no está cubierta por teoria.md ni por ejemplos.md → leaf incompleto.

Validación:

1. `pregunta_fisica_central.es` y `pregunta_fisica_central.en` deben existir en meta.yaml.
2. Ambas deben contener signos de interrogación (`¿…?` / `…?`).
3. Al menos 2 palabras significativas de la pregunta deben aparecer en teoria.md.

---------------------------------------------------------------------

# 2D. Coherencia obligatoria con gráficos

Si el leaf declara gráficos:

- Al menos un gráfico debe responder directamente a la `pregunta_fisica_central`.

Reglas:

- Si ningún gráfico responde a la pregunta → gráficos inválidos.
- Si el leaf se entiende igual sin gráficos → leaf no supera nivel 4.7.
- La `pregunta_principal` (en graph_identity del profile) debe compartir
  ≥ 2 palabras significativas con `pregunta_fisica_central`.

Validación:

1. Si `graficos` existe en meta.yaml, al menos un profile debe tener
   `pregunta_principal` con ≥ 2 palabras significativas en común con
   `pregunta_fisica_central`.
2. Si ningún gráfico cumple → FAIL.

---------------------------------------------------------------------

# 2E. Identidad operativa del leaf

El leaf debe declarar en meta.yaml:

- `representacion_dominante`: Coord | Svg | Dcl | none
- `magnitud_dominante`: id de magnitudes.yaml (la magnitud central del leaf)

Reglas:

- `representacion_dominante` debe coincidir con el primer tipo declarado en
  `graficos` de meta.yaml.
  - Si `graficos: [Coord, Svg]` → `representacion_dominante: Coord`.
  - Si `graficos: [Svg]` → `representacion_dominante: Svg`.
  - Si no hay gráficos → `representacion_dominante: none`.
  - Si hay discrepancia → **incoherencia del leaf** (FAIL).
- `magnitud_dominante` debe existir y no estar vacío.
- Si `magnitud_dominante` coincide con la `magnitud_estrella` del gráfico
  principal → coherencia confirmada (bonus de calidad, no bloquea).

Validación:

1. `representacion_dominante` debe existir en meta.yaml.
2. Si `graficos` existe, el primer elemento debe coincidir con `representacion_dominante`.
3. `magnitud_dominante` debe existir y no estar vacío.

---------------------------------------------------------------------

# 3. Convenciones matemáticas

Todas las expresiones matemáticas que correspondan a una relación física definida deben usar la inyección de fórmulas mediante `{{f:id_formula}}`.

Reglas de inyección (Nuevo Estándar Phyxio v5):
- Utilizar `{{f:id_formula}}` para mostrar ecuaciones completas o relaciones declarativas.
- **Formato obligatorio**: La etiqueta `{{f:id_formula}}` debe estar **sola en su propia línea**, con un salto de línea antes y otro después. El uso inline (dentro de un párrafo) causará errores de renderizado y será rechazado por el validador.
- El motor inyectará automáticamente el bloque LaTeX correspondiente definido en `formulas.yaml`.
- En `teoria.md` y `teoria.en.md`, todo `id` declarado en `formulas.yaml` debe aparecer representado mediante `{{f:id_formula}}`.
- En cualquier otro `.md` o `.en.md`, si aparece una fórmula debe estar en formato `{{f:id_formula}}` y ese id debe existir en `formulas.yaml`.
- **Fórmulas Externas (Transversales)**: Si necesitas mencionar una fórmula que NO pertenece al leaf actual (y por tanto no está en su `formulas.yaml`), DEBES escribirla usando magnitudes etiquetadas en texto plano, por ejemplo: `[[F]] = [[m]]·[[a]]`. El validador aceptará esta sintaxis únicamente para relaciones transversales que no tengan un ID local asignado.
- **PROHIBIDO - Fórmulas textuales con magnitudes etiquetadas**: NO escribir ecuaciones completas usando magnitudes etiquetadas como `[[DeltaT]] = 13.31 W · 3.5 K/W = 46.6 K`. Cualquier igualdad matemática que incluya valores numéricos, operaciones o resultados debe usar obligatoriamente `{{f:id_formula}}` si existe la fórmula en `formulas.yaml`, o crear una fórmula auxiliar en `formulas.yaml` si es un cálculo específico del ejemplo. El validador rechazará cualquier línea que contenga el patrón `[[magnitud]] = ... = ...` como "fórmula textual inválida".
- **Ejemplo de uso correcto**:
  ```md
  En rotación mediante

  {{f:segunda_ley_rotacional}}

  gracias a la correspondencia...
  ```
- **Ejemplo de uso incorrecto (PROHIBIDO)**:
  ```md
  En rotación mediante {{f:segunda_ley_rotacional}} gracias a la correspondencia...
  ```
  
- **Ejemplo de referencia inline inválida (PROHIBIDO)**:
  ```md
  La potencia {{f:potencia_joule}} es mayor que 10 W, indicando riesgo alto.
  ```
  Corrección: Usar `[[P_joule]]` en el texto, y `{{f:potencia_joule}}` solo en línea propia.
  
- **Ejemplo de ecuación con ID inválida (PROHIBIDO)**:
  ```md
  {{f:energia_joule}} = 8 W · (2 · 3600 s) = 57,600 J/day
  ```
  Esto es inválido porque el ID de fórmula aparece junto a valores numéricos.
  
- **Ejemplo de fórmula textual inválida (PROHIBIDO)**:
  ```md
  [[DeltaT]] = 13.31 W · 3.5 K/W = 46.6 K
  ```
  Esta sintaxis es inválida porque es una ecuación completa con valores numéricos usando magnitudes etiquetadas. Debe reemplazarse por:
  ```md
  {{f:incremento_termico}}
  
  [[DeltaT]] = 13.31 W · 3.5 K/W = 46.6 K
  ```
  (donde la fórmula `incremento_termico` existe en `formulas.yaml`)
- **PROHIBIDO** el uso de bloques LaTeX manuales (`$$ ... $$`) en los archivos `.md` y `.en.md` para fórmulas que ya están o deben estar en `formulas.yaml`. Esto evita la duplicación y garantiza que el motor pueda manipular la ecuación (despejes, resaltado).

Uso de LaTeX inline:
- **USO PERMITIDO**: Menciones breves de símbolos o fragmentos matemáticos que NO son fórmulas completas con valores numéricos.
  - Ejemplo válido: "donde la magnitud \(\alpha\) es constante..."
  - Ejemplo válido: "la unidad \(\mathrm{kg \cdot m^2}\)..."
- **USO PROHIBIDO**: Ecuaciones completas con cálculos numéricos usando LaTeX inline.
  - Ejemplo INVÁLIDO: `\(P_{Joule} = (11\,\mathrm{A})^2 \cdot 0.11\,\Omega = 13.31\,\mathrm{W}\)`
  - **REGLA CRÍTICA**: Cualquier ecuación con el patrón `[[magnitud]] = valor = resultado` será rechazada por el validador como "fórmula textual inválida".
  - Esto incluye: `[[P_joule]] = (10 A)² · 0.08 Ω = 8 W`, `[[E_joule]] = 8 W · 2 h = 16 Wh`, etc.
  - Solución: Reformular en prosa sin usar `=` entre la magnitud y valores: "Para la potencia, elevar 10 A al cuadrado y multiplicar por 0.08 Ω da aproximadamente 8 W. Por tanto [[P_joule]] ≈ 8 W."

Prohibido:
- **FÓRMULAS TEXTUALES CON MAGNITUDES ETIQUETADAS**: Escribir ecuaciones completas como `[[magnitud]] = valor · valor = resultado` en lugar de usar `{{f:id_formula}}`.
- **REFERENCIAS DE FÓRMULA INLINE**: Usar `{{f:id_formula}}` dentro de un párrafo de texto, como "El resultado {{f:mi_formula}} indica que...". La referencia debe estar SIEMPRE aislada en su propia línea con saltos de línea antes y después.
- **ECUACIONES CON ID DE FÓRMULA**: Escribir ecuaciones numéricas usando el ID de fórmula como `{{f:potencia_joule}} = 8 W · 2 h = 16 Wh`. Esto es inválido. El ID de fórmula solo debe aparecer solo en su línea, nunca como parte de una ecuación con valores.
- **ECUACIONES LATEX INLINE CON VALORES NUMÉRICOS**: Usar `\( ... \)` para ecuaciones completas con cálculos numéricos.
- ecuaciones en texto plano sin delimitadores matemáticos
- símbolos matemáticos Unicode sueltos como √, ∞, ∑, ≈, → dentro del contenido físico explicativo cuando deban ir en LaTeX
- mezclar notación textual y notación matemática para una misma relación
- comandos LaTeX fuera de delimitadores matemáticos (ejemplo inválido: `F = m a \longleftrightarrow \tau = I \alpha` en texto plano)
- notación de unidad inestable tipo `\text{kg \cdot m}^2` cuando pueda romper render inline en algunos parsers

Reglas de render obligatorio (v5):
- Toda expresión con comandos LaTeX (`\alpha`, `\omega`, `\leftrightarrow`, `\frac`, `\cdot`, etc.) debe ir dentro de `\(...\)`, `$ ... $` o bloque `{{f:id}}`.
- Si se compara una unidad compuesta con una simple, usar notación robusta: `\(\mathrm{kg\cdot m^2}\)` frente a `\(\mathrm{kg}\)`.
- El uso de `$$ ... $$` manual se considera una señal de "Didáctica de Relleno" y restará puntuación en la validación Nivel 5.

Reglas:

- Toda ecuación visible debe ser científicamente correcta y dimensionalmente coherente.
- Las magnitudes deben escribirse con el mismo símbolo en todos los archivos.
- Las explicaciones verbales de fórmulas deben usar el mismo nombre físico
  que figure en magnitudes.yaml.

---------------------------------------------------------------------

# 4A. Marcado de magnitudes en texto (Globo de ayuda)

Todo uso de una magnitud física dentro del texto descriptivo o explicativo de
`teoria.md`, `ejemplos.md`, `modelos.md` y `errores.md` debe ir envuelto en
corchetes dobles `[[id_magnitud]]`.

Reglas:

- `[[sigma]]`, `[[F]]`, `[[m]]`, etc.
- El ID debe coincidir exactamente con el definido en `magnitudes.yaml`.
- Este marcado habilita automáticamente el globo de ayuda (tooltip) con el
  nombre, símbolo y descripción de la magnitud en la interfaz de usuario.
- Es obligatorio para todas las magnitudes que tengan entrada en `magnitudes.yaml`.
- No usar para variables matemáticas puras que no sean magnitudes del leaf.
- Solo las magnitudes reales del leaf deben declararse en `magnitudes.yaml`.
- Toda magnitud real que aparezca en cualquier archivo `.md` o `.en.md` debe existir en `magnitudes.yaml` y escribirse mediante `[[id_magnitud]]`.
- Las magnitudes ficticias, variables auxiliares, nombres temporales o símbolos de apoyo que no estén en `magnitudes.yaml` no deben escribirse como `[[...]]`; deben escribirse como código inline, por ejemplo `` `u_aux` ``.
- Toda magnitud real declarada en `magnitudes.yaml` debe aparecer al menos una vez en algún archivo `.md` o `.en.md` mediante `[[id_magnitud]]`.

**REGLA CRÍTICA - IDs de magnitudes compuestos:**

Cuando una magnitud tiene ID compuesto (ej: `P_joule`, `E_joule`, `R_th`, `C_th`, `DeltaP`), **NUNCA** uses la segunda parte del ID como palabra standalone en el texto prose. El validador detectará "joule" o "th" como variables no definidas.

- **INVÁLIDO**: "efecto Joule", "resistencia th", "capacidad th"
- **VÁLIDO**: "efecto Joule" escrito como `efecto [[P_joule]]` (referenciando la magnitud completa), o reescribir la frase para evitar la palabra suelta

Ejemplo de reescritura correcta:
```md
# Incorrecto - causará fail de validación
La potencia por efecto Joule se calcula...

# Correcto
La potencia térmica [[P_joule]] se calcula...
# O: La potencia por efecto [[P_joule]] se calcula...
```

**Nota sobre validación de variables finitas:**
El validador extrae tokens de todas las expresiones matemáticas para verificar que estén definidos en `magnitudes.yaml`. Los subíndices LaTeX como `\mathrm{joule}` en `P_{\mathrm{joule}}` o `\mathrm{th}` en `R_{\mathrm{th}}` pueden ser detectados como tokens independientes "joule" y "th". Esto es un comportamiento conocido del validador y no indica un error real en el leaf, ya que estos subíndices son parte de la notación LaTeX de símbolos válidos (`P_joule`, `R_th`). Si aparece este fail de validación con `detalles: ['joule', 'th']`, puede ignorarse siempre que los símbolos principales (`P_joule`, `E_joule`, `R_th`, `C_th`) estén correctamente definidos en `magnitudes.yaml`.

### 4A.1 Sintaxis avanzada: Etiquetas personalizadas
Si necesitas mostrar un texto o símbolo LaTeX diferente al ID de la magnitud, usa la sintaxis de "pipe":
- `[[$\rho_1$|rho]]` → Muestra $\rho_1$ pero abre el tooltip de `rho`.
- `[[Velocidad inicial|v]]` → Muestra "Velocidad inicial" pero abre el tooltip de `v`.

### 4A.2 Índices y variantes
Si una magnitud con índice o variante debe aparecer como tooltip, su ID debe existir de forma explícita en `magnitudes.yaml` o debe usarse la sintaxis de etiqueta personalizada apuntando a un ID real:
- `[[rho1]]` solo es válido si `rho1` existe en `magnitudes.yaml`.
- `[[$\rho_1$|rho]]` es válido si `rho` existe en `magnitudes.yaml`.
- No se permite crear referencias `[[id]]` que dependan de una inferencia automática inexistente en `magnitudes.yaml`.

Validación:

1. El validador comprobará que el 100% de las magnitudes declaradas
   en `magnitudes.yaml` aparezcan al menos una vez con el formato `[[id]]`
   en algún archivo `.md` o `.en.md` del leaf.
2. El validador comprobará que todo `[[id]]` usado en `.md` o `.en.md`
   exista realmente en `magnitudes.yaml`.
3. Si se detecta el símbolo o ID de la magnitud pero no está envuelto en `[[...]]`,
   se considerará un fallo de estándar Nivel 5.

---------------------------------------------------------------------

# 4. Consistencia simbólica

Los símbolos deben coincidir en:

- teoria.md
- teoria.en.md
- formulas.yaml
- magnitudes.yaml
- interpretacion.yaml
- ejemplos.md
- ejemplos.en.md
- gráficos

Reglas:

- 1 símbolo = 1 magnitud física
- 1 magnitud física = 1 símbolo dominante
- no se permiten magnitudes reales no definidas
- las magnitudes ficticias o variables auxiliares no declaradas deben escribirse como código inline
- no se permiten cambios de notación entre archivos
- no se permiten símbolos duplicados para magnitudes distintas
- no se permiten nombres distintos para la misma magnitud entre español e inglés

Regla adicional crítica:

Toda magnitud real que aparezca en fórmulas, teoría o ejemplos debe estar
definida en `magnitudes.yaml`. Las magnitudes ficticias, variables auxiliares,
nombres temporales o símbolos de apoyo que no correspondan a una magnitud real
del leaf no se declaran en `magnitudes.yaml` y deben escribirse como código
inline en Markdown, por ejemplo `` `u_aux` ``. Los diferenciales matemáticos
puros \(dx\), \(dt\), \(dv\) se consideran operadores diferenciales y no
magnitudes físicas independientes.

Variables de intervalo o estado que SÍ deben declararse si aparecen:

- \(\Delta x\)
- \(\Delta v\)
- \(\Delta t\)
- \(x_i\)
- \(x_f\)
- \(v_0\)
- \(v_f\)
- \(a_{\mathrm{med}}\)
- \(v_{\mathrm{med}}\)

Regla de consistencia reforzada:

- `interpretacion.yaml` debe usar exactamente los mismos ids técnicos que el leaf
- está prohibido mezclar convenciones como `rcm` y `r_cm` dentro del mismo leaf
- si existe cálculo y gráfico, los ids compartidos deben coincidir también en el frontend

---------------------------------------------------------------------

---------------------------------------------------------------------

# 4B. Sincronización operativa obligatoria

Si el leaf tiene calculadora, interpretación o resultados numéricos, debe cumplirse una sincronización estricta entre:

- `magnitudes.yaml`
- `formulas.yaml`
- `interpretacion.yaml`
- `ejemplos.md`

La sincronización no es solo simbólica o editorial. Debe ser **operativa**, es decir, usable por el motor y por el frontend.
La coherencia entre archivos debe ser absoluta y será motivo de no pasar

## Reglas obligatorias

### 1. Sincronización de ids de magnitudes

Todo id de magnitud usado en:

- `formulas.yaml`
- `interpretacion.yaml`
- calculadora
- validaciones de coherencia

debe existir exactamente igual en `magnitudes.yaml`.

Prohibido:

- `acm` en un archivo y `a_cm` en otro
- `Fext` en un archivo y `F_ext` en otro
- `ptot` en un archivo y `p_tot` en otro

No se permiten aliases silenciosos.

### 2. Sincronización target ↔ magnitud

Todo `result_semantics.target` de `formulas.yaml` debe corresponder a un id real de `magnitudes.yaml`.

Todo target de `interpretacion.yaml` debe corresponder a:

- una magnitud real de `magnitudes.yaml`
- y, además, a un target calculable desde `formulas.yaml`

Si un target interpretado no puede ser producido por la calculadora, el leaf no supera Nivel 4.7.

### 3. Sincronización de dependencias de interpretación

`interpretacion.yaml` debe declarar en `dependencies.formulas` ids reales de `formulas.yaml`.

`interpretacion.yaml` debe declarar en `dependencies.magnitudes` ids reales de `magnitudes.yaml`.

No se admite:

- ids huérfanos
- ids antiguos
- ids renombrados solo en uno de los archivos

### 4. Sincronización semántica fórmula → interpretación

Cada fórmula calculable debe aportar semántica operativa que pueda ser consumida por `interpretacion.yaml`:

- `interpretation_tags`
- `result_semantics`
- `domain_checks`
- `coherence_checks`
- `pedagogical_triggers`

Cada target de `interpretacion.yaml` debe reaccionar a resultados reales usando esas magnitudes y relaciones.

No se admite interpretación cosmética o independiente del resultado calculado.

### 5. Sincronización funcional de relaciones físicas

Si `formulas.yaml` define:

- `a_cm = F_ext / M`

entonces `interpretacion.yaml` debe poder verificar coherencia usando exactamente:

- `a_cm`
- `F_ext`
- `M`

y no versiones alternativas ni nombres heredados.

Análogamente, si `formulas.yaml` define:

- `p_tot = M v_cm`

entonces `interpretacion.yaml` debe poder verificar coherencia usando exactamente:

- `p_tot`
- `M`
- `v_cm`

### 6. Sincronización con gráficos, si existen

Si el leaf usa gráficos y `graph_binding` está habilitado:

- los canales declarados en `magnitudes.yaml`
- los canales sugeridos en `formulas.yaml`
- los canales usados en `interpretacion.yaml`

deben coincidir exactamente.

No se admite:

- `velocity_arrow` en un archivo y `center_of_mass_velocity_arrow` en otro
- canales presentes en interpretación pero inexistentes en magnitudes o fórmulas
- canales decorativos no usados por el frontend

### 7. Regla de desactivación limpia

Si el leaf se entrega sin integración gráfica operativa:

- `graph_binding.channels` en `magnitudes.yaml` debe quedar vacío o coherentemente desactivado
- `graph_implications` en `formulas.yaml` debe quedar vacío o coherentemente desactivado
- `graph_reading` en `interpretacion.yaml` debe deshabilitarse
- `graph_binding` y `mini_graph` en `interpretacion.yaml` deben marcarse como desactivados

No se admite dejar restos gráficos activos sin implementación real.

## Regla de rechazo duro

Un leaf no puede declararse 4.7 ni 5 si ocurre cualquiera de estas situaciones:

- ids distintos para la misma magnitud entre YAML
- targets interpretados que la calculadora no puede producir
- dependencias de interpretación que apuntan a ids inexistentes
- checks de coherencia que usan nombres no definidos
- canales de gráfico no sincronizados
- interpretación que no reacciona al valor real calculado

-------------------------------------------------------

# 5. Estructura obligatoria del leaf

Cada leaf debe contener exactamente estos 16 archivos:

- meta.yaml
- magnitudes.yaml
- formulas.yaml
- interpretacion.yaml
- teoria.md
- teoria.en.md
- modelos.md
- modelos.en.md
- errores.md
- errores.en.md
- ejemplos.md
- ejemplos.en.md
- aplicaciones.md
- aplicaciones.en.md
- historia.md
- historia.en.md

No se permiten archivos adicionales dentro del leaf.

`interpretacion.yaml` es obligatorio en el estándar ampliado cuando el leaf tenga calculadora, resultados numéricos, validación física o gráficos con lectura didáctica.

Regla de cierre reforzada:

Si el leaf tiene cálculo, resultado numérico o lectura física operativa, `interpretacion.yaml` deja de ser opcional y pasa a ser obligatorio absoluto.

Contrato reforzado con `phyxio_leaf_validator.py`:

- La plantilla debe cumplirse con nombres de archivo exactos y sin archivos extra.
- Los encabezados exigidos por la plantilla deben aparecer con el mismo texto y el mismo nivel markdown.
- No se admite numeración en encabezados salvo en `aplicaciones.md` y `aplicaciones.en.md`.
- No se admite texto placeholder, `TODO`, mojibake ni secciones vacías.
- En cualquier archivo `.md`, dos secciones hermanas no pueden ser clones con el titulo retocado o con sustituciones minimas de contexto.
- El leaf debe nacer preparado para pasar no solo checks estructurales, sino también:
  - coherencia entre YAML
  - cobertura conceptual entre teoría, ejemplos e interpretación
  - progresión didáctica
  - carga cognitiva razonable

---------------------------------------------------------------------

# 5.1 Nodo asociado

Si el leaf pertenece a un nodo con varios leafs, el nodo debe tener
obligatoriamente:

- overview.md
- overview.en.md

---------------------------------------------------------------------

# 5.2 Estructura overview.md y overview.en.md

Secciones obligatorias:

1. ## Idea general del tema
2. ## Qué vas a comprender de verdad
3. ## Ruta didáctica recomendada
4. ## Criterio físico que debes adquirir
5. ## Conexión con problemas reales
6. ## Objetivo final del tema

Reglas:

- sección 1: 1–2 párrafos, 3–8 líneas cada uno
- sección 2: síntesis real de la comprensión conseguida al terminar
- sección 3: orden lógico de estudio
- sección 4: criterio físico fino, no simple resumen
- sección 5: aplicaciones reales concretas
- sección 6: cierre breve de competencias adquiridas

overview.en.md debe estar completamente en inglés académico y mantener
la misma estructura del overview.md.

---------------------------------------------------------------------

# 6. meta.yaml

Campos obligatorios:

- id (tomar de phyxio-map.yaml)
- nombre
  - en: (tomar de titulo_en: de phyxio-map.yaml)
  - es: (tomar de titulo: de phyxio-map.yaml)
- area
- bloque
- subbloque
- parent_id
- ruta_relativa (tomar de phyxio-map.yaml)
- orden (tomar de phyxio-map.yaml)
- type (tomar de phyxio-map.yaml)
- niveles (tomar de phyxio-map.yaml)
  - en:
  - es:
- icon (tomar de phyxio-map.yaml)
- descripcion
- description_en
- tags
  - en:
  - es:
- prerequisitos (ruta relativa de otro leaf)
- graficos (tomar de phyxio-map.yaml)
- physical_role (tomar de phyxio-map.yaml)
  - en:
  - es:
- dificultad
- tiempo_estimado_min

- interpretacion
  - enabled
  - archivo
  - ui
    - inline_calculator
    - inline_graph
    - dedicated_tab
    - tab_label
      - es
      - en
  - mini_graph
    - enabled
    - preferred_type
  - output_policy
    - show_summary_first
    - max_inline_messages
    - show_warnings
    - show_likely_errors
  - dependencies
    - requires_formulas
    - requires_magnitudes
    - supports_graph_binding

**REGLA DE OBLIGATORIEDAD ABSOLUTA — Todos los campos de `interpretacion` son MANDATORIOS:**

Cuando `interpretacion.enabled: true`, **TODOS** los campos listados arriba deben existir
con valores válidos (nunca `null`, `None`, ni ausentes). Esto incluye:

- `mini_graph.enabled` (booleano)
- `mini_graph.preferred_type` (string: Coord | Svg | Dcl | none)
- `output_policy.show_summary_first` (booleano)
- `output_policy.max_inline_messages` (entero ≥ 1)
- `output_policy.show_warnings` (booleano)
- `output_policy.show_likely_errors` (booleano)
- `dependencies.requires_formulas` (booleano)
- `dependencies.requires_magnitudes` (booleano)
- `dependencies.supports_graph_binding` (booleano)

**NO es válido** omitir campos declarando solo los que "parecen relevantes".
El validador rechazará cualquier `meta.yaml` con campos faltantes en esta sección.

Reglas:

- UTF-8 obligatorio
- descripcion: máximo 20 palabras
- description_en: máximo 20 palabras
- `descripcion` y `description_en` pueden mejorarse editorialmente respecto al mapa, pero no pueden contradecir el tipo conceptual, la ruta ni el rol físico declarados en el mapa
- máximo 6 tags
- type debe ser leaf
- niveles debe contener únicamente etiquetas válidas del proyecto
- physical_role, tags, niveles, nombre debe ir en bloque es/en
- descripcion y description_en deben ser equivalentes semánticamente
- tags deben ser útiles para navegación, no genéricos vacíos
- `interpretacion.archivo` debe ser exactamente `interpretacion.yaml`
- `interpretacion.enabled` debe ser `true` en el estándar completo
- la configuración UI de interpretación debe ser coherente con la experiencia del leaf

## Regla de sincronización con phyxio-map.yaml (OBLIGATORIA)

Los siguientes campos de `meta.yaml` no se redactan libremente. Deben tomarse
del nodo leaf correspondiente en `phyxio-map.yaml` y mantenerse sincronizados:

- id
- nombre.es  ← titulo
- nombre.en  ← titulo_en
- ruta_relativa
- orden
- type
- niveles.es
- niveles.en
- icon
- graficos
- physical_role.es
- physical_role.en

Reglas:

**PROTOCOLO OBLIGATORIO antes de crear/editar meta.yaml:**

1. **ABRIR y LEER** el nodo del leaf en `phyxio-map.yaml` ANTES de escribir código
2. **COPIAR EXACTAMENTE** los valores de los campos sincronizados (arriba)
3. **NO MODIFICAR** ortografía, mayúsculas/minúsculas, ni valores de estos campos:
   - `nombre.es/en`: usar el `titulo/titulo_en` exacto del mapa (respetar tildes/sin tildes)
   - `niveles.es`: ESO, BACHILLERATO, UNIVERSIDAD, EXTRACURRICULAR (mayúsculas exactas)
   - `niveles.en`: Secondary, Upper Secondary, University, Extracurricular
   - `icon`: copiar el emoji exacto del mapa (ej: 🔦, no ⚡)
   - `physical_role`: copiar exactamente "magnitud física" o "concepto físico"
4. **VERIFICAR** que `meta.yaml` pase la validación contra el mapa antes de finalizar

- Si el mapa y el meta discrepan en cualquiera de esos campos, el meta es inválido.
- `descripcion` y `description_en` sí pueden ser editoriales, pero deben seguir siendo
  semánticamente coherentes con el mapa.
- `descripcion` y `description_en` no pueden contradecir el tipo conceptual del leaf,
  su ruta en el árbol ni el `physical_role` declarado en el mapa.
- `area`, `bloque`, `subbloque` y `parent_id` deben derivarse de la ruta y de la posición
  del leaf dentro del árbol del mapa, no inventarse manualmente.
- Si el mapa cambia, el `meta.yaml` debe regenerarse o sincronizarse antes de seguir
  editando el leaf.

Regla reforzada:

Si `interpretacion.enabled` es `true`, los demás archivos del leaf deben estar preparados para soportar:
- lectura inline en calculadora
- tab dedicada
- integración con gráfico cuando exista gráfico

No se admite un `meta.yaml` que declare interpretación sin que el leaf pueda sostenerla.

---------------------------------------------------------------------

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
- Si una magnitud es escalar, components debe ser null.
- Si una magnitud es vectorial, components debe ser coherente.
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

# 8. Validación simbólica obligatoria

Antes de cerrar el leaf debe comprobarse:

1. Todas las magnitudes reales de formulas.yaml aparecen en magnitudes.yaml.
2. Todas las magnitudes reales de teoria.md aparecen en magnitudes.yaml y en Markdown usan `[[id_magnitud]]`.
3. Todas las magnitudes reales de ejemplos.md aparecen en magnitudes.yaml y en Markdown usan `[[id_magnitud]]`.
4. Todas las magnitudes reales de interpretacion.yaml aparecen en magnitudes.yaml o son funciones/flags válidos del motor.
5. teoria.en.md usa exactamente los mismos símbolos que teoria.md.
6. ejemplos.en.md usa exactamente los mismos símbolos que ejemplos.md.
7. los gráficos usan la misma notación.
8. Toda referencia `{{f:id_formula}}` usada en cualquier `.md` o `.en.md` existe en `formulas.yaml`.
9. Toda fórmula declarada en `formulas.yaml` aparece como `{{f:id_formula}}` en `teoria.md` y en `teoria.en.md`.
10. Toda referencia `[[id_magnitud]]` usada en cualquier `.md` o `.en.md` existe en `magnitudes.yaml`.
11. Toda magnitud declarada en `magnitudes.yaml` aparece al menos una vez como `[[id_magnitud]]` en algún `.md` o `.en.md`.
12. Toda magnitud real visible en texto explicativo debe estar marcada con `[[id_magnitud]]`; las magnitudes ficticias o variables auxiliares no declaradas deben ir como código inline, por ejemplo `` `u_aux` ``.
13. **VALIDACIÓN RENDER MATEMÁTICO - FÓRMULAS TEXTUALES**: Ningún archivo `.md` o `.en.md` contiene ecuaciones con valores numéricos escritas como `[[magnitud]] = valor = resultado`. Todas las igualdades matemáticas con resultados numéricos deben usar el formato: `{{f:id_formula}}` en línea propia, seguido de la ecuación numérica en texto plano con magnitudes etiquetadas.
14. **VALIDACIÓN RENDER MATEMÁTICO - REFERENCIAS INLINE**: Ninguna referencia `{{f:id_formula}}` aparece dentro de un párrafo de texto. Todas las referencias deben estar aisladas en su propia línea con saltos de línea antes y después.
15. **VALIDACIÓN RENDER MATEMÁTICO - ECUACIONES LATEX**: Ningún archivo usa `\(...\)` o `$...$` para ecuaciones completas con cálculos numéricos. El LaTeX inline solo debe usarse para símbolos sueltos, nunca para igualdades con valores numéricos.
16. **VALIDACIÓN ESTRUCTURA EJEMPLOS**: Los archivos `ejemplos.md` y `ejemplos.en.md` contienen EXACTAMENTE los títulos H1 especificados en las secciones 17 y 18, carácter por carácter:
    - `ejemplos.md`: `# Ejemplo tipo examen` y `# Ejemplo de aplicación real`
    - `ejemplos.en.md`: `# Exam-type example` y `# Real-world example`

Regla de excepción:

- \(dx\), \(dt\), \(dv\) no exigen entrada propia en magnitudes.yaml por ser
  diferenciales matemáticos.
- \(\Delta x\), \(\Delta t\), \(\Delta v\) sí la exigen.

---------------------------------------------------------------------

# 9. formulas.yaml

¡¡MUY IMPORTANTE!!

Este archivo es la base fundamental del leaf, desde el que se debe construir todo,
debe contener todas las fórmulas de cada leaf como base para el desarrollo de los demás archivos, especialmente magnitudes e interpretación, así que se debe tomar como el corazón del leaf, respetando cada campo y desarrollandolo con pulcritud extrema.

Cada fórmula debe incluir obligatoriamente:

- id

- title:
  - es
  - en

- equation
- latex

- rearrangements:
  - target
    equation
    latex

- category
- relation_type

- physical_meaning:
  - es
  - en

- constraints

- validity:
  - es
  - en

- dimension_check

- calculable
- motivo_no_calculable

- used_in

- interpretation_tags
- result_semantics
  - target
  - kind
  - sign_meaning
    - es
    - en
  - absolute_value_meaning
    - es
    - en

### Regla Crítica de Formato LaTeX (Blindaje v5)

Para garantizar la compatibilidad con el motor de renderizado v5 y evitar fallos de visualización en la UI:

- El campo `latex` (tanto en la raíz de la fórmula como en sus `rearrangements`) debe contener únicamente el **código LaTeX puro**.
- **ESTÁ TOTALMENTE PROHIBIDO** incluir delimitadores externos como `\(` y `\)` o `\[` y `\]` dentro del string en el archivo YAML.
- El motor de renderizado se encarga de envolver automáticamente el código en el bloque adecuado (`$$` para display o `$` para inline).
- **Consecuencia de incumplimiento**: La inclusión de delimitadores internos provoca que la fórmula se visualice como texto plano en lugar de matemáticas renderizadas, lo cual es motivo de **Rechazo Duro** en la validación.

**Ejemplo Incorrecto:**
`latex: "\\(p_f = p_i + J\\)"`

**Ejemplo Correcto:**
`latex: "p_f = p_i + J"`

- domain_checks
- coherence_checks
- graph_implications
- pedagogical_triggers

---

Categorías permitidas:

- fundamental
- derived
- structural
- conceptual
- auxiliary

relation_type permitidos:

- definition
- average_relation
- integral_relation
- differential_relation
- geometric_interpretation
- constitutive_relation

Reglas:

- Cada fórmula representa una sola relación física.
- No mezclar definiciones diferenciales con relaciones promedio.
- No duplicar la misma fórmula con títulos distintos.
- No usar rearrangements irrelevantes o meramente algebraicos si no aportan valor físico.
- Toda fórmula debe tener significado físico explícito.
- constraints debe incluir hipótesis mínimas de aplicación.
- validity debe expresar el dominio físico, no una frase genérica.
- dimension_check debe ser concreto y correcto.
- `interpretation_tags` debe resumir qué tipo de lectura física activa la fórmula.
- `result_semantics` debe indicar cómo debe leerse el resultado calculado.
- `domain_checks` debe contener condiciones evaluables, no frases decorativas.
- `coherence_checks` debe permitir detectar salidas físicamente sospechosas.
- `graph_implications` debe conectar el resultado con la representación visual.
- `pedagogical_triggers` debe detectar errores típicos ligados a esa fórmula.

Incorrecto:

v = dx/dt = \Delta x/\Delta t

Correcto:

- fórmula 1: \(v = dx/dt\)
- fórmula 2: \(v_{\mathrm{med}} = \Delta x/\Delta t\)

Regla crítica:

Si una fórmula usa tiempos iniciales o finales explícitos \((t_i, t_f)\),
esas variables deben estar declaradas si se usan de forma sistemática en el leaf
o evitarse en favor de lenguaje de intervalo si no son magnitudes centrales.

Regla crítica reforzada (rechazo duro):

Los siguientes campos deben ser operativos y evaluables:

- interpretation_tags
- result_semantics
- domain_checks
- coherence_checks
- graph_implications
- pedagogical_triggers

Condiciones obligatorias:

- deben poder ser utilizados por un motor de interpretación
- deben conectar con `interpretacion.yaml` mediante ids y targets reales
- deben permitir detectar estados coherentes o incoherentes del resultado
- no pueden ser frases vagas del tipo “revisar si tiene sentido”

Si estos campos no son utilizables para generar interpretación automática, el leaf no supera Nivel 4.7.

# 9B. Contrato de integración calculadora ↔ interpretación (CRÍTICO)

La calculadora y el motor de interpretación están acoplados. Cualquier discrepancia
entre `formulas.yaml`, `magnitudes.yaml` y `interpretacion.yaml` produce fallos silenciosos.

## Regla 1 — `ui.default_formula` obligatorio

`ui.default_formula` debe apuntar a la primera fórmula con `calculable: true`.

Si `ui.default_formula` no existe, la calculadora carga la primera fórmula del array.
Si esa primera fórmula es `calculable: false`, la calculadora nunca producirá resultado
y el motor de interpretación nunca recibirá datos.

## Regla 2 — Rearrangement propio por cada target interpretado

Cada variable objetivo declarada en `targets` de `interpretacion.yaml` debe tener
su propio entry en `rearrangements` dentro de la fórmula correspondiente.

El motor recibe como target exactamente la clave `target:` del rearrangement activo.
Si no existe ese rearrangement, el target no llega al motor y sus reglas no se disparan.

Ejemplo correcto:

  rearrangements:
    - target: a_rel        # target principal
      equation: a_rel = a_A - a_B
    - target: a_A
      equation: a_A = a_rel + a_B
    - target: a_B
      equation: a_B = a_A - a_rel

## Regla 3 — `calculable: true` explícito

Toda fórmula de la cual se espera resultado numérico debe declarar `calculable: true`
de manera explícita. No se admite implícito.

---

---------------------------------------------------------------------

# 10. interpretacion.yaml

Este archivo define la **lectura didáctica estructurada del resultado**. No sustituye a `teoria.md`, no duplica `errores.md` y no se limita a mensajes cosméticos. Su función es traducir el resultado calculado a significado físico, validez de modelo, lectura gráfica y errores probables.

Campos obligatorios:

- version
- id
- leaf_id

- nombre
  - es
  - en

- scope
  - area
  - bloque
  - subbloque
  - parent_id
  - ruta_relativa

- ui
  - enabled
  - display_modes
    - calculator_inline
    - graph_inline
    - dedicated_tab
    - modal
  - labels
  - priority_order
  - inline_limits

- dependencies
  - formulas
  - magnitudes

- global_context
  - physical_domain
    - es
    - en
  - axis_convention
    - es
    - en
  - standard_assumptions
  - standard_warnings

- result_blocks
  - summary
  - physical_reading
  - coherence
  - model_validity
  - graph_reading
  - likely_errors
  - next_step

- targets
  - magnitude_type
  - semantic_role
    - es
    - en
  - next_step_rules

### La Regla de los 7 Bloques (OBLIGATORIO NIVEL 5)

Para que un leaf alcance el Nivel 5 Blindado, cada target de `interpretacion.yaml` debe contener **exactamente las 7 secciones de reglas** definidas el `priority_order`. No se permite omitir ninguna sección, incluso si el contenido es genérico.

Cada sección debe tener al menos una regla con `when: true` como fallback de seguridad.

**Estructura Heptagonal por Target:**
1. `summary_rules`: Resumen físico del estado del target.
2. `physical_reading_rules`: Qué significa el valor numérico obtenido.
3. `coherence_rules`: Validación de signos y rangos razonables.
4. `model_validity_rules`: Cuándo deja de ser fiable este resultado.
5. `graph_rules`: Cómo se refleja el valor en la representación visual.
6. `likely_errors`: Trampas comunes del alumno sobre esta magnitud.
7. `next_step_rules`: Sugerencia de hacia dónde mirar a continuación.

**Consecuencia de incumplimiento:**
Si falta alguno de los 7 bloques en cualquier target, la UI de Phyxio mostrará paneles vacíos o inconsistencias de diseño, y el leaf será rechazado en la validación de Blindaje.

- cross_checks
- error_patterns
- graph_binding
- mini_graph
- output_contract

Reglas:

- Debe cubrir todas las variables objetivo calculables del leaf.
- Debe usar ids y magnitudes que existan realmente en `formulas.yaml` y `magnitudes.yaml`.
- Debe distinguir entre:
  - lectura inmediata del resultado
  - coherencia física
  - validez del modelo
  - lectura del gráfico
  - errores probables del alumno
- `when` o `detect_when` debe ser evaluable por motor, no frase vaga.
- No debe convertirse en una mini teoría larga: interpreta estados concretos.
- Debe permitir salida breve para calculadora y salida desarrollada para tab o panel de interpretación.
- Debe estar preparado para ES/EN sin duplicar contenido científico contradictorio.
- Cada target debe tener contenido semántico real en las 7 áreas: resumen, lectura física, coherencia, validez de modelo, lectura gráfica, errores probables y siguiente paso.
- `summary` debe contener lectura física explícita, no solo un título elegante.
- `physical_reading` debe usar lenguaje causal.
- `model_validity` debe expresar límites, hipótesis o condiciones de fallo.
- `likely_errors` debe describir errores plausibles del alumno.
- `next_step` debe orientar qué revisar o comparar después.

## Reglas semánticas obligatorias de targets

`summary`:

- debe resumir el estado físico calculado
- no puede ser una frase genérica reutilizable en cualquier leaf

`physical_reading`:

- debe contener causalidad física
- debe usar magnitudes núcleo o targets reales

`model_validity`:

- debe indicar al menos una condición de validez y una de fallo

`graph_reading`:

- debe quedar desactivado si no existe soporte gráfico real
- si existe, debe referirse a magnitudes o relaciones visibles

`likely_errors`:

- debe contener errores plausibles de alumno, no solo advertencias abstractas

`next_step`:

- debe orientar la progresión del alumno dentro del leaf o hacia otro leaf

Regla crítica:

Si el leaf tiene calculadora o resultados numéricos y no tiene `interpretacion.yaml`, no cumple el estándar v5 ampliado.

Regla crítica reforzada (integración obligatoria):

`interpretacion.yaml` debe estar conectado funcionalmente con:

- formulas.yaml
- magnitudes.yaml
- CalculatorV2
- GraphPageV2, si existen gráficos
- V2LeafTabs o panel equivalente de interpretación

Condiciones obligatorias:

- los targets deben corresponder a variables realmente calculadas
- las reglas deben poder activarse con resultados reales
- debe existir coherencia entre cálculo, interpretación y gráfico
- debe ser posible producir salida inline y salida desarrollada

Contrato de scope del motor de interpretación (CRÍTICO):

Las condiciones `when:` de cada regla solo pueden referenciar variables que estén
disponibles en el scope del motor cuando se evalúa ese target específico.

Scope disponible al evaluar un target:

  {
    result,            // valor numérico del resultado
    [id_target],       // el mismo valor accesible por nombre (ej: a_rel, F_ficticia)
    ...inputs,         // SOLO los inputs del rearrangement activo
    abs, min, max, round, floor, ceil, sqrt, pow, PI
  }

Fuera de scope (no accesibles en `when:`):

  - magnitudes del leaf no incluidas en el rearrangement activo
  - variables de otros rearrangements o de otras fórmulas
  - variables rotacionales (omega, r) si la fórmula activa es traslacional
  - el target de otro rearrangement distinto

Protocolo obligatorio antes de escribir cada bloque de reglas:

1. Identificar en `formulas.yaml` el rearrangement cuyo `target` coincide con
   el target que se está describiendo.
2. Listar los inputs de ese rearrangement (variables del lado derecho).
3. Todo `when:` del bloque debe usar solo esos inputs + el target + funciones math.
4. Si una regla conceptualmente válida no puede expresarse con esas variables
   (ej: clasificación rotacional cuando la fórmula es traslacional),
   marcarla `when: "false"` de forma explícita.
5. Incluir siempre al menos una regla con `when: "true"` como fallback en
   **cada una de las 7 secciones de reglas** de cada target:
   `summary_rules`, `physical_reading_rules`, `coherence_rules`,
   `model_validity_rules`, `graph_rules`, `likely_errors` y `next_step_rules`.
   Sin este fallback, la sección queda en blanco si ninguna condición específica
   se cumple — un panel vacío sin error visible es indistinguible de un error
   de configuración. Las secciones ausentes deben añadirse completas con al
   menos este fallback antes de entregar el leaf.

Si estos contratos no se cumplen, las reglas producirán fallos silenciosos:
condiciones que nunca se disparan, paneles vacíos sin error visible.

Contrato adicional con el validador:

- La interpretación debe reutilizar magnitudes y fórmulas núcleo del leaf.
- Debe mantener continuidad real con `teoria.md` y `ejemplos.md`.
- Si hay gráficos, `graph_reading` debe compartir semántica con el gráfico y no ser decorativo.

> **Diagnóstico automatizado**: El script `fix_interp_fallbacks.py` (raíz del
> proyecto) audita y corrige este problema en todos los `interpretacion.yaml`
> de una rama. Ejecutar con `python fix_interp_fallbacks.py` antes de hacer
> commit de cualquier leaf nuevo.

Regla de rechazo duro:

Si `interpretacion.yaml` puede eliminarse sin pérdida real de lectura física,
coherencia o feedback didáctico, el leaf no está a Nivel 5.

Si `interpretacion.yaml` no es utilizable por el frontend o no depende del resultado real, el leaf no cumple Nivel 5.

---------------------------------------------------------------------

# 10B. Seguridad YAML en `interpretacion.yaml` (CRÍTICO)

Todo valor textual de los campos `es:` o `en:` que contenga dos puntos `:`
en su interior debe encerrarse obligatoriamente entre comillas dobles.

## El problema

YAML interpreta cualquier `:` seguido de espacio como separador de clave:valor.
Un texto como:

```yaml
es: Error típico: sumar FAx y FBx en el DCL
```

es analizado como si `Error típico` fuera una clave con valor `sumar FAx y FBx en el DCL`,
lo que produce un error de parseo que `js-yaml` y `yaml.safe_load` reportan en
líneas distintas según la longitud del texto.

## El efecto en Phyxio

La función `loadYamlDocWithFallback` usa `js-yaml.load()`. Cuando el parseo falla,
devuelve `null` silenciosamente. El resultado en cadena:

- `interpretacionDoc = null`
- `hasInterpretation = false`
- El tab "Interpretación" desaparece de `V2LeafTabs`
- El botón "Ver interpretación" desaparece de `CalculatorV2`
- No aparece ningún error en consola del navegador

El leaf parece funcionar pero la interpretación está completamente desactivada
sin ningún aviso visual.

## La regla

Toda cadena `es:` o `en:` cuyo valor contenga `:` debe ir entre comillas dobles:

```yaml
# INCORRECTO — produce error de parseo silencioso
text:
  es: Error típico: sumar FAx y FBx en el DCL
  en: Typical error: summing FAx and FBx in the FBD

# CORRECTO
text:
  es: "Error típico: sumar FAx y FBx en el DCL"
  en: "Typical error: summing FAx and FBx in the FBD"
```

## Patrones de riesgo más frecuentes

Los patrones que más habitualmente producen este fallo son:

- `Error típico: texto...`
- `Typical mistake: texto...`
- `Error clásico: texto...`
- `Classic error: texto...`
- `Nota: texto...`
- Cualquier texto con estructura `Término: descripción`

## Verificación obligatoria antes del cierre del leaf

```python
import yaml
doc = yaml.safe_load(open("interpretacion.yaml", encoding="utf-8").read())
print(list(doc["targets"].keys()))
```

Si lanza excepción, hay al menos un valor textual con dos puntos sin comillas.
El mensaje de error indica la línea exacta con `line N, column M`.

Regla de rechazo duro:

Un `interpretacion.yaml` que no parsea correctamente equivale a no tener
interpretación. El leaf no supera Nivel 4.7 si esta comprobación falla.

---------------------------------------------------------------------

# 11. teoria.md

Longitud obligatoria total:

1200 – 2000 palabras

Estructura obligatoria exacta:

# Título del subtema

## Contexto conceptual

## 🟢 Nivel esencial

## 🔵 Nivel formal

## 🔴 Nivel estructural

## Interpretación física profunda

## Orden de magnitud

## Método de resolución personalizado

## Casos especiales y ejemplo extendido

## Preguntas reales del alumno

## Conexiones transversales y rutas de estudio

## Síntesis final

Reglas globales (Contenido):

- No incluir numeración ni en títulos ni en subtítulos
- Debe explicar qué, cómo y por qué.
- No debe incluir ejercicios completos resueltos.
- No debe convertirse en una lista de definiciones.
- Debe ser didáctica, no telegráfica ni un manual estéril de instrucciones.
- Debe mantener coherencia con el tipo conceptual del leaf.
- Debe evitar tono de plantilla repetitiva entre secciones.
- Los tres niveles no pueden repetir el mismo párrafo con leves cambios.

Regla de rechazo duro:

Si los tres niveles repiten esencialmente la misma idea con redacciones distintas,
la teoría no cumple la plantilla aunque tenga la longitud requerida.
La misma regla anti-repeticion aplica a cualquier archivo `.md` del leaf cuando sus secciones internas se vuelven intercambiables.

Reglas de Formato Visual (Estándar de Legibilidad Nivel 5):

- Párrafos ágiles: Ningún párrafo debe superar las 4 o 5 líneas de lectura.
- Listas y viñetas: Es obligatorio usar listas para desglosar enumeraciones (ej. procedimientos categóricos, pasos de resolución, causas, etc.).
- Destacados estratégicos: Usar sistemáticamente **negritas** en dos o tres palabras o conceptos clave por párrafo para guiar rápidamente el "escaneo visual" del alumno.
- Cajas de Alerta (Callouts): Uso obligatorio e intensivo de bloques nativos como `> [!NOTE]`, `> [!WARNING]` y `> [!TIP]` para encapsular consejos prácticos, aislar trampas operativas comunes o destacar premisas físicas innegociables.
- Redacción directa (Cero Word Salad): Está totalmente prohibida la prosa innecesariamente enrevesada o barroca. El texto Nivel 5 consigue la alta densidad teórica mediante frases claras, concluyentes y de alta densidad argumentativa.
- Fórmulas declarativas clave (obligatorio): en `teoria.md` y `teoria.en.md`, todas las fórmulas declaradas en `formulas.yaml` deben estar representadas mediante `{{f:id_formula}}`; las fórmulas fundamentales, despejes y relaciones declarativas nunca deben duplicarse como bloque LaTeX manual. Las notaciones matemáticas referenciales o de apoyo (sin peso declarativo) deben ir inline con `\(...\)` o `$ ... $`.
- **Ubicación EXCLUSIVA de fórmulas en teoría**: En `teoria.md` y `teoria.en.md`, las referencias `{{f:id_formula}}` deben aparecer **ÚNICAMENTE** en la sección `## 🔵 Nivel formal` / `## 🔵 Formal level`.
  - **PROHIBIDO** usar `{{f:id_formula}}` en otras secciones como `## Casos especiales`, `## Ejemplo extendido`, `## Síntesis final`, `## Preguntas reales`, etc.
  - En secciones fuera del Nivel formal, usar solo referencias a magnitudes `[[id_magnitud]]` para describir cálculos, nunca `{{f:id_formula}}`.
  - Ejemplo válido en caso práctico: "Para la potencia, elevar [[I]] al cuadrado y multiplicar por [[R]] da aproximadamente 13.31 W. Así [[P_joule]] ≈ 13.31 W." (sin usar `{{f:potencia_joule}}`)
  - No se permite repetir fórmulas en `## Síntesis final` / `## Final synthesis`, ni usarlas como cierre decorativo. La síntesis final debe cerrar comprensión conceptual, no reimprimir ecuaciones.
- En **Nivel esencial** debe evitarse el abuso matemático: la prioridad es la intuición física. En la práctica, no debe contener ecuaciones desarrolladas salvo una mención excepcional y muy justificada.

Formato obligatorio para fórmulas destacadas:

```md
- **Caso Estático**:
{{f:fuerza_rozamiento_max}}
Texto de interpretación...
```

Requisitos mínimos por sección:

## Contexto conceptual
- 2–3 párrafos
- debe situar el leaf dentro de la física y del nodo
- debe explicar para qué sirve pensar este tema

## 🟢 Nivel esencial
- mínimo 2 párrafos
- **rango de palabras: 100 – 200** (introducción intuitiva, sin saturación)
- debe permitir a un alumno identificar la idea central sin cálculo pesado
- debe incluir interpretación intuitiva correcta
- no debe convertirse en una lista de fórmulas
- no debe apoyarse en signos `=` o desarrollos algebraicos como eje de la explicación
- **PROHIBIDO** exceder 250 palabras — el nivel esencial debe ser conciso y enfocado en intuición

## 🔵 Nivel formal
- mínimo 2 párrafos
- **rango de palabras: 200 – 350** (desarrollo matemático completo)
- debe introducir ecuaciones relevantes y su interpretación
- no debe ser solo una lista de fórmulas
- debe contener relaciones matemáticas del leaf realmente explicadas, no solo enunciadas
- este nivel asume la mayor densidad técnica del leaf

## 🔴 Nivel estructural
- mínimo 2 párrafos
- **rango de palabras: 250 – 400** (el nivel más profundo, nunca el más corto)
- debe mostrar la estructura profunda del tema
- debe relacionar representación, dependencia entre magnitudes y arquitectura física
- debe hablar de límites, condiciones de validez, regímenes o casos de fallo
- **CRÍTICO**: El nivel estructural debe tener **más palabras/contenido que el nivel formal** — si el estructural es más corto que el formal, la progresión didáctica está invertida y el leaf no pasa validación Nivel 5

## Interpretación física profunda
- mínimo 2 párrafos
- debe aclarar matices de signos, acumulación, cambio, causalidad o lectura fina
- no puede ser un simple resumen repetido

## Orden de magnitud
- mínimo 1 párrafo
- debe incluir escalas físicas razonables
- debe servir para detectar resultados absurdos

Regla adicional obligatoria:

El apartado de orden de magnitud debe contener al menos:

- una escala numérica real de la magnitud dominante
- una comparación entre dos órdenes de magnitud distintos
- una explicación de cómo detectar un resultado físicamente absurdo

## Método de resolución personalizado
- mínimo 1 párrafo largo o 2 cortos
- debe dar una secuencia operativa clara
- debe distinguir entre pendiente, área, lectura de signo, tramos o criterio equivalente

## Casos especiales y ejemplo extendido
- mínimo 2 párrafos
- debe incluir al menos dos situaciones límite o sutiles
- no debe convertirse en un ejercicio tabulado

## Preguntas reales del alumno
- mínimo 4 preguntas reales con respuesta breve razonada
- no respuestas vacías
- deben atacar errores auténticos

## Conexiones transversales y rutas de estudio
- mínimo 2 párrafos
- debe conectar con otros leafs y otros bloques físicos
- debe orientar la ruta didáctica

Ejemplo de referencia:

`[Nombre leaf](leaf:ruta/relativa)`

## Síntesis final
- 1 párrafo compacto
- debe cerrar la comprensión sin introducir contenido nuevo
- no debe contener `{{f:id_formula}}`, bloques LaTeX, listas de fórmulas ni repetición de ecuaciones ya presentadas en `Nivel formal`

Regla crítica:

La teoría no cumple nivel 5 si alcanza 1200 palabras solo por relleno.
Debe haber densidad conceptual real en cada sección.

Reglas adicionales para pasar el validador:

- Los encabezados `## 🟢 Nivel esencial`, `## 🔵 Nivel formal` y `## 🔴 Nivel estructural` deben llevar exactamente ese prefijo emoji.
- `Orden de magnitud` debe ir como `##`, no como `###`.
- Las secciones clave deben tener al menos 2 párrafos reales cuando la plantilla lo exige.
- **Progresión de densidad obligatoria**: La cuenta de palabras debe crecer progresivamente: **Nivel esencial (100-200) < Nivel formal (200-350) < Nivel estructural (250-400)**. Un nivel estructural más corto que el formal es fallo crítico de validación.
- La teoría debe mantener progresión didáctica:
  - esencial → intuición
  - formal → matemáticas
  - estructural → límites, conexión y validez

---------------------------------------------------------------------

# 12. teoria.en.md

Debe cumplir simultáneamente:

- replicar exactamente la estructura de teoria.md
- estar completamente en inglés académico natural
- títulos y subtítulos en ingles académico natural
- no contener frases en español
- no contener spanglish
- no ser una traducción literal torpe si rompe naturalidad física
- usar terminología estándar de libro de física
- mantener también todas las reglas semánticas, anti-repetición y reglas de rechazo duro definidas en `teoria.md`

Reglas de calidad:

- mismo número de secciones y subsecciones
- mismos símbolos
- mismo nivel de precisión conceptual
- misma profundidad didáctica
- longitud razonablemente equivalente a teoria.md

Hard rejection rule:

If the three levels restate essentially the same idea with different wording,
`teoria.en.md` does not satisfy the template even if it meets the required length.

Regla crítica:

No basta con traducir títulos. Todo el cuerpo del texto debe estar realmente en inglés.

---------------------------------------------------------------------

# 13. modelos.md

Longitud mínima total:

Rango ideal total: 400 – 750 palabras
- Párrafos ágiles: Ningún párrafo debe superar las 4 o 5 líneas de lectura.

Desglose:

5 secciones × 100 – 150 palabras

Estructura obligatoria exacta:

## Modelo ideal
## Hipótesis
## Dominio de validez cuantitativo
## Señales de fallo del modelo
## Modelo extendido o alternativo
## Comparación operativa

Requisitos por sección:

## Modelo ideal
- descripción del modelo simplificado que se usa en este leaf
- significado físico de la simplificación central
- qué magnitudes se conservan y cuáles se ignoran

## Hipótesis
- lista explícita de las hipótesis del modelo (cada una en su propio ítem)
- para cada hipótesis, indicar qué consecuencia tendría violarla

## Dominio de validez cuantitativo
- órdenes de magnitud o condiciones cuantitativas
- cuándo la aproximación es razonable

Regla adicional obligatoria:

Esta sección debe incluir al menos uno de los siguientes:

- una desigualdad física explícita
- un rango de valores típico
- un orden de magnitud relevante

## Señales de fallo del modelo
- síntomas físicos, gráficos o numéricos observables que delatan que el modelo ya no aplica
- no una frase genérica: cada señal debe ser algo que el alumno pueda buscar en sus datos

## Modelo extendido o alternativo
- extensión del modelo ideal hacia datos reales, tramos, ruido o complejidad
- diferencia concreta respecto al modelo ideal
- transición explícita: cuándo conviene abandonar el modelo ideal y pasar al extendido

## Comparación operativa
- tabla o lista comparativa real entre modelo ideal y extendido/alternativo
- criterios de comparación: precisión, complejidad, rango de aplicación
- ventajas y límites de cada uno

Reglas de validación por modelo:

- Si no hay condición cuantitativa (desigualdad, rango u orden de magnitud) en "Dominio de validez cuantitativo" → modelo **inválido**.
- Si no hay transición explícita a modelo alternativo/extendido → modelo **incompleto**.
- Si no hay señal de fallo observable (algo que el alumno pueda detectar) → modelo **inválido**.

Regla crítica:

Cada sección debe contener desarrollo propio. No se permite una única línea por bloque.

Regla de validador:

Los encabezados deben aparecer exactamente así, sin numeración inicial.

---------------------------------------------------------------------

# 14. modelos.en.md

Debe:

- Párrafos ágiles: Ningún párrafo debe superar las 4 o 5 líneas de lectura.
- replicar exactamente la estructura de modelos.md
- estar completamente en inglés
- títulos y subtítulos en ingles académico natural
- mantener misma profundidad conceptual
- no contener frases en español
- no ser más pobre que la versión española
- respetar exactamente los mismos encabezados, sin numeración adicional

---------------------------------------------------------------------

# 15. errores.md

- Párrafos ágiles: Ningún párrafo debe superar las 4 o 5 líneas de lectura.
Debe contener exactamente 5 bloques desarrollados:

## Errores conceptuales
## Errores de modelo
## Errores matemáticos
## Errores de interpretación
## Regla de autocontrol rápido

Dentro de cada bloque (§§ Errores conceptuales, de modelo, matemáticos, de interpretación),
cada error individual debe seguir esta estructura obligatoria con encabezados EXACTOS:

### Error X: <nombre descriptivo>

**Por qué parece correcto**

Explicar el razonamiento intuitivo o la regla mal generalizada que lleva al estudiante a creer que la idea es válida. Debe nombrar el mecanismo cognitivo (analogía incorrecta, generalización excesiva, confusión de magnitudes, etc.).

**Por qué es incorrecto**

Argumento físico o matemático concreto que refuta la idea. No basta decir "es falso"; hay que mostrar la contradicción con la definición, la ley o el resultado experimental.

**Señal de detección**

Patrón observable (en un cálculo, en una gráfica, en un enunciado) que delata la presencia de este error. Debe ser algo que el propio alumno pueda buscar.

**Corrección conceptual**

Reformulación correcta de la idea, expresada en lenguaje del alumno. Incluir la regla o definición precisa que debe sustituir a la creencia errónea.

**Mini-ejemplo de contraste**

Situación breve (2-4 líneas) donde aplicar la idea incorrecta da un resultado evidentemente absurdo o contradictorio, seguida del resultado correcto. Sirve como "vacuna" mental.

**Estructura obligatoria exacta** - Los 5 encabezados deben ser:

```
**Por qué parece correcto**

**Por qué es incorrecto**

**Señal de detección**

**Corrección conceptual**

**Mini-ejemplo de contraste**
```

**REGLA DE RECHAZO DURO**: Los encabezados deben coincidir exactamente con el formato mostrado arriba, incluyendo acentos, mayúsculas iniciales y puntuación.

Reglas de validación por error:

- Si faltan 2 o más de las 5 secciones internas → el error se considera **inválido** (no pasa validador).
- Si no hay mini-ejemplo de contraste → el error se considera **incompleto**.
- Si no aparece mecanismo cognitivo en "Por qué parece correcto" → el error se considera **cosmético** (no enseña nada).

Requisitos generales:

- Rango ideal total: 500 – 750 palabras
  - Desglose: 5 bloques × 200 – 300 palabras
- Mínimo 2 párrafos en cada uno de los bloques 1–4
- El bloque 5 debe contener una regla de verificación operativa real
- No se permiten listas vacías
- No se permiten títulos sin desarrollo

Regla crítica:

Si un error puede formularse en una sola frase, aún no está suficientemente desarrollado.

Regla de validador:

Los encabezados de sección (## ) deben aparecer exactamente así, sin numeración inicial.
Los encabezados de error individual (### Error X: …) son obligatorios dentro de cada sección.

---------------------------------------------------------------------

# 16. errores.en.md

- Párrafos ágiles: Ningún párrafo debe superar las 4 o 5 líneas de lectura.
Debe:
- títulos y subtítulos en ingles académico natural
- replicar la estructura de errores.md
- estar completamente en inglés
- no contener español
- mantener la misma profundidad explicativa
- respetar exactamente los mismos encabezados, sin numeración adicional

---------------------------------------------------------------------

# 17. ejemplos.md

- Párrafos ágiles: Ningún párrafo debe superar las 4 o 5 líneas de lectura.
Debe contener exactamente:

- 1 ejemplo tipo examen
- 1 ejemplo aplicado real

Estructura obligatoria exacta (ejemplos.md):

Los títulos deben coincidir CARÁCTER POR CARÁCTER con los siguientes:

**Ejemplo tipo examen:**

```
# Ejemplo tipo examen

## Enunciado
## Datos
## Definición del sistema
## Modelo físico
## Justificación del modelo
## Resolución simbólica
## Sustitución numérica
## Validación dimensional
## Interpretación física
```

**Ejemplo aplicado real:**

```
# Ejemplo de aplicación real

## Contexto
## Estimación física
## Interpretación
```

**REGLA DE RECHAZO DURO**: Si los títulos H1 no coinciden EXACTAMENTE con:
- `# Ejemplo tipo examen` (no "Ejemplo tipo Examen", no "Ejemplo de examen")
- `# Ejemplo de aplicación real` (no "Ejemplo aplicado real", no "Ejemplo práctico")

El validador marcará fallo de estructura obligatoria y el leaf no pasará Nivel 4.7+.

Reglas:

-Rango ideal total: 800 – 1200 palabras
  -Desglose interno:
    -Ejemplo tipo examen: 500 – 700
    -Ejemplo aplicado real: 300 – 500

- El ejemplo tipo examen debe requerir interpretación real del leaf.
- No debe ser un ejercicio trivial de una sola sustitución si el leaf trata un método de lectura o interpretación.
- Debe usar las magnitudes declaradas en magnitudes.yaml.
- La solución simbólica debe estar bien separada de la numérica.
- La validación dimensional debe ser explícita y seguir el **Estilo de Notación Azul Phyxio v5**: usar backticks con exponentes Unicode (ej: `[M L T⁻²]`) para que el frontend aplique el estilo matemático premium. No usar LaTeX estándar para estas verificaciones si se desea el color corporativo.
- La interpretación física final debe explicar ampliamente qué significa el resultado.
- Debe tener al menos 700 palabras
- La sección `Modelo físico` debe anclarse a magnitudes o relaciones nucleares del leaf.
- La sección `Justificación del modelo` debe incluir causalidad física explícita.
- La sección `Interpretación física` no puede limitarse a repetir el valor numérico.
- La sección `Estimación física` del ejemplo real debe contener una lectura cuantitativa razonable o un orden de magnitud.
- Ninguna sección obligatoria puede quedar vacía, reducida a un título, a una lista de apartados sin desarrollo o a una fórmula aislada sin explicación.
- Prohibido escribir ids técnicos de `formulas.yaml` como prosa visible, por ejemplo `` `th_posicion_y` ``, `` `tp_alcance_suelo` `` o `th_trayectoria`. Si la fórmula debe mostrarse, usar `{{f:id_formula}}` en línea propia; si solo se explica el procedimiento, usar lenguaje físico natural.
- Prohibidos apartados desnudos tipo `Apartado (a):`, `Apartado (b):`, `Part (a):` sin resolución, sustitución o interpretación debajo. Cada apartado anunciado debe quedar desarrollado.

**REGLAS SEMÁNTICAS OBLIGATORIAS PARA EJEMPLOS:**

1. **Uso de magnitudes núcleo del leaf**: En `## Resolución simbólica` deben aparecer **TODAS** las magnitudes núcleo definidas en `magnitudes.yaml` con `physical_role: core_physical_quantity` o `derived` que sean relevantes para el ejemplo. Si falta una magnitud núcleo (ej: `[[DeltaT]]`, `[[P_joule]]`), el validador marcará fallo de semántica.

2. **Uso de fórmulas núcleo del leaf**: En `## Sustitución numérica` deben usarse **TODAS** las fórmulas núcleo definidas en `formulas.yaml` con `target: core` o `derived` que correspondan al problema. Si una fórmula núcleo no se aplica (ej: no se usa `{{f:incremento_termico}}` cuando el ejemplo involucra incremento térmico), el validador marcará fallo.

3. **Interpretación física no mecánica**: La sección `## Interpretación física` debe contener **mínimo 2 párrafos** que expliquen:
   - Qué significa físicamente el resultado en el contexto del problema
   - Cómo cambiaría el resultado si variaran las magnitudes dominantes
   - Implicaciones prácticas o consecuencias físicas del resultado
   - No basta con listar los valores calculados o repetir la comparación numérica.

Ejemplo de interpretación física válida (no mecánica):
```md
## Interpretación física

El resultado muestra que el punto B acumula 3.7 veces más energía térmica diaria que el punto A, a pesar de tener menor corriente. Esto ocurre porque la resistencia de contacto degradada (0.20 Ω vs 0.08 Ω) eleva la potencia disipada, y el tiempo de uso prolongado (6 h vs 2 h) permite acumulación mayor. Físicamente, esto significa que el daño térmico no depende solo de la "intensidad" instantánea, sino de la "dosis" total de calor recibida.

Si la resistencia del punto B se redujera al mismo valor que el punto A (0.08 Ω), su potencia caería a aproximadamente 3.9 W y la energía diaria a 84.2 kJ, haciéndolo comparable al punto A. Esto demuestra que la intervención sobre la resistencia de contacto (reapriete o sustitución) es altamente efectiva para reducir el riesgo, incluso sin reducir la carga (corriente).

La priorización de intervención debe basarse en [[E_joule]] acumulada, no en [[P_joule]] instantánea. El punto B requiere atención prioritaria porque su daño térmico acumulado puede llevar a degradación acelerada del aislante y eventual fallo, mientras que el punto A, aunque de mayor potencia, acumula menos daño por uso breve.
```

### Reglas de render matemático en ejemplos (críticas para validación)

**REGLA FUNDAMENTAL**: El validador detecta como "fórmula textual inválida" cualquier línea que contenga el patrón:
```
[[magnitud]] = valor numérico = resultado
```

Esto incluye ecuaciones como `[[P_joule]] = (10 A)² · 0.08 Ω = 8 W`.

**Formato VÁLIDO que pasa validación:**
```md
Aplicando la fórmula de potencia térmica:

{{f:potencia_joule}}

Para la potencia, elevar 10 A al cuadrado y multiplicar por 0.08 Ω da aproximadamente 8 W. Por tanto [[P_joule]] ≈ 8 W.
```

**Fórmula válida alternativa (sin signo = entre magnitud y valores):**
```md
{{f:potencia_joule}}

Operación: (10 A)² × 0.08 Ω. Resultado: 8 W. Asignación: [[P_joule]] ≈ 8 W.
```

**Patrones INVÁLIDOS que causarán fallo de validación:**

1. **Ecuación con magnitud etiquetada**: `[[P_joule]] = (10 A)² · 0.08 Ω = 8 W`
   → El validador detecta `[[magnitud]] = ... = ...` como fórmula textual inválida.
   → Corrección: Reformular en prosa sin usar `=` entre la magnitud etiquetada y valores numéricos.

2. **Referencia inline**: `La potencia {{f:potencia_joule}} es de 8 W`
   → Corrección: `La potencia [[P_joule]] es de 8 W` (usar magnitud etiquetada)

3. **Ecuación con ID de fórmula**: `{{f:potencia_joule}} = (10 A)² · 0.08 Ω = 8 W`
   → Corrección: Separar `{{f:potencia_joule}}` en su línea, luego descripción del cálculo en prosa.

4. **LaTeX inline para cálculos**: `\(P_{Joule} = (10\,\mathrm{A})^2 \cdot 0.08\,\Omega = 8.0\,\mathrm{W}\)`
   → El validador detecta cualquier ecuación LaTeX con valores numéricos.
   → Corrección: Usar texto plano descriptivo, nunca LaTeX para ecuaciones con valores.

5. **Validación dimensional con ecuaciones**: `- Potencia: A² · Ω = ... = W`
   → Corrección: Describir dimensionalmente sin ecuaciones con `=`:
   ```md
   - Unidades de potencia: A² · Ω se resuelven a W mediante análisis dimensional `[M L² T⁻³]`
   - Desglose: `[I]² · [M L² T⁻³ I⁻²] = [M L² T⁻³]` ✓
   ```

**Para cálculos intermedios sin fórmula en formulas.yaml:**
- Crear magnitud auxiliar en `magnitudes.yaml` (ej: `DeltaP` para diferencias)
- Describir el cálculo en prosa sin usar `=` con magnitudes etiquetadas:
  ```md
  Restando las potencias (9.8 W menos 2.94 W) se obtiene una reducción de 6.86 W. Por tanto [[DeltaP]] ≈ 6.86 W.
  ```

**Ejemplos de reformulación correcta:**

| ❌ Inválido (detectado por validador) | ✅ Válido (pasa validación) |
|---|---|
| `[[P_joule]] = (10 A)² · 0.08 Ω = 8 W` | `Para la potencia, elevar 10 A al cuadrado y multiplicar por 0.08 Ω da aproximadamente 8 W. Por tanto [[P_joule]] ≈ 8 W.` |
| `[[E_joule]] = 8 W · (2 · 3600 s) = 57.6 kJ` | `Para la energía, multiplicar 8 W por 7200 segundos (2 horas) da aproximadamente 57.6 kJ. Por tanto [[E_joule]] ≈ 57.6 kJ.` |
| `[[DeltaP]] = 9.8 W - 2.94 W = 6.86 W` | `Restando las potencias (9.8 W menos 2.94 W) se obtiene una reducción de 6.86 W. Por tanto [[DeltaP]] ≈ 6.86 W.` |
| `\(P_{Joule} = 13.31 \, \mathrm{W}\)` | `La potencia calculada es aproximadamente 13.31 W. Así [[P_joule]] ≈ 13.31 W.` |

**REGLA DE ORO**: Si ves el carácter `=` entre una magnitud etiquetada `[[...]]` y valores numéricos, el validador lo rechazará. Reformula en prosa usando "da", "resulta", "es aproximadamente", "por tanto", etc.

## Reglas semánticas obligatorias para ejemplos

En `## Modelo físico` debe aparecer al menos:

- una magnitud núcleo
- una fórmula núcleo o su target dominante

En `## Justificación del modelo` debe aparecer explícitamente:

- por qué el modelo vale
- cuándo dejaría de valer

En `## Interpretación física` debe aparecer explícitamente:

- qué significa físicamente el resultado
- cómo cambia el resultado si cambia una magnitud dominante

Regla crítica:

El ejemplo no cumple nivel 5 si alcanza 800 palabras solo por relleno.
El ejemplo no cumple nivel 5 si podría pertenecer a cualquier leaf sin cambios.
El ejemplo no cumple nivel 5 si el frontend puede renderizar ids técnicos de fórmula como frases azules, si aparecen secciones visualmente vacías o si la sustitución numérica queda como una lista de rótulos sin contenido.

Regla de rechazo duro:

Un ejemplo no es válido si puede intercambiarse por el de otro leaf sin apenas cambios.

Regla de continuidad didáctica:

El ejemplo debe reutilizar magnitudes y fórmulas que ya hayan aparecido en `teoria.md`.

---------------------------------------------------------------------

# 18. ejemplos.en.md

- Párrafos ágiles: Ningún párrafo debe superar las 4 o 5 líneas de lectura.
Debe:
- títulos y subtítulos en ingles académico natural
- **replicar EXACTAMENTE la estructura de ejemplos.md con los títulos en inglés especificados abajo**
- estar completamente en inglés
- usar los mismos símbolos
- mantener el mismo grado de detalle
- mantener también la misma lógica física del ejemplo, no solo la estructura

## Estructura obligatoria exacta (ejemplos.en.md)

Los títulos deben coincidir CARÁCTER POR CARÁCTER con los siguientes:

**Ejemplo tipo examen:**

```
# Exam-type example

## Problem statement
## Data
## System definition
## Physical model
## Model justification
## Symbolic solution
## Numerical substitution
## Dimensional validation
## Physical interpretation
```

**Ejemplo aplicado real:**

```
# Real-world example

## Context
## Physical estimation
## Interpretation
```

**REGLA DE RECHAZO DURO**: Si los títulos H1 no coinciden EXACTAMENTE con:
- `# Exam-type example` (no "Exam-type Example", no "Exam Example", no "Problem")
- `# Real-world example` (no "Real Application Example", no "Real-world Example", no "Practical example")

El validador marcará fallo de estructura obligatoria y el leaf no pasará Nivel 4.7+.

## Mandatory semantic rules for examples

In `## Physical model` there must appear at least:

- one core magnitude
- one core formula or its dominant target

In `## Model justification` there must appear explicitly:

- why the model is valid
- when it would stop being valid

In `## Physical interpretation` there must appear explicitly:

- what the result means physically
- how the result changes if a dominant magnitude changes

Hard rejection rule:

An example is not valid if it can be exchanged with the example from another leaf with only minimal changes.
An example is not valid if required sections are empty, if technical formula ids are written as visible prose, or if `Part (a):`, `Part (b):` style labels appear without developed work underneath.

---------------------------------------------------------------------

# 19. aplicaciones.md

Mínimo:

- 5 aplicaciones reales desarrolladas

Estructura obligatoria por aplicación:

## 1. ...
## 2. ...
## 3. ...
## 4. ...
## 5. ...

Cada aplicación debe incluir explícitamente:

- contexto físico real
- hipótesis o simplificación dominante
- variable dominante
- interpretación física
- límite de validez

Requisitos:


- Rango densidad de palabras ideal total: mínimo 800 palabras
- mínimo 2 párrafos o 1 párrafo denso por aplicación
- Párrafos ágiles: Ningún párrafo debe superar las 4 o 5 líneas de lectura.
- no se aceptan listas desnudas
- no se aceptan aplicaciones genéricas sin conexión con el leaf
- no se acepta reutilizar la misma plantilla sintáctica en las 5 aplicaciones cambiando solo el nombre del contexto
- cada aplicación debe cerrar una decisión distinta del leaf; no basta cambiar el escenario nominal si el análisis, la variable y el límite siguen siendo iguales
- los títulos `## 1. ...` a `## 5. ...` deben nombrar situaciones físicas concretas, no etiquetas intercambiables o meta-categorías vacías

Regla crítica:

Si una aplicación puede copiarse sin cambios en diez leafs distintos, no está lo bastante personalizada.
Si dos aplicaciones del mismo archivo son intercambiables tras sustituir el nombre del contexto, el archivo no cumple.
Si varias aplicaciones conservan la misma secuencia argumental, la misma fraseología o los mismos marcadores con retoques mínimos, el archivo no cumple.
Si no tiene mínimo 800 palabras no pasa
Aplicaciones no cumple nivel 5 si no alcanza 800 palabras y si solo es por relleno.

Regla adicional obligatoria:

Cada aplicación debe contener explícitamente estas dos líneas:

Variable dominante: ...
Límite de validez: ...

Ambas líneas sin negrita. Sin estas dos líneas, la aplicación no supera el validador.

Regla de rechazo duro reforzada:

- `phyxio_leaf_validator.py` debe rechazar `aplicaciones.md` cuando detecte similitud alta entre aplicaciones del mismo archivo.
- El rechazo aplica también si la repetición está disfrazada cambiando solo el título, el contexto nominal o una o dos palabras por frase.
- `Variable dominante:` y `Límite de validez:` también deben variar cuando cambia la aplicación; no valen cinco líneas equivalentes maquilladas.

---------------------------------------------------------------------

# 20. aplicaciones.en.md

Debe:

- Párrafos ágiles: Ningún párrafo debe superar las 4 o 5 líneas de lectura.
- replicar la estructura de aplicaciones.md
- estar completamente en inglés
- títulos y subtítulos en ingles académico natural
- mantener misma profundidad y personalización
- usar preferentemente `Dominant variable:` y `Validity limit:` como marcas explícitas
- mantener también todas las reglas anti-repetición y rechazo duro de `aplicaciones.md`

Regla adicional obligatoria:

Cada aplicación debe contener explícitamente estas dos líneas:

Variable dominante: ...
Validity limit: ...

Ambas líneas sin negrita. Sin estas dos líneas, la aplicación no supera el validador.

Regla de rechazo duro reforzada:

- No se acepta una traducción al inglés que conserve cinco bloques clónicos con el contexto renombrado.
- El validador debe tratar como fallo duro la repetición mecánica entre aplicaciones también en `aplicaciones.en.md`.

---------------------------------------------------------------------

# 21. historia.md

Longitud mínima total:

300 palabras

Estructura obligatoria exacta:

## Problema histórico
## Dificultad conceptual previa
## Qué cambió
## Impacto en la física
## Conexión con física moderna

Requisitos por sección:

## Problema histórico
- descripción del problema físico concreto que motivó la investigación
- no debe ser una cronología de fechas; debe centrarse en "qué pregunta no tenía respuesta"
- mencionar al menos un científico, corriente o etapa histórica relevante

## Dificultad conceptual previa
- explicar qué obstáculo intelectual, filosófico o experimental impedía avanzar
- identificar la confusión, el paradigma limitante o el dato ausente
- debe quedar claro por qué el problema era genuinamente difícil

## Qué cambió
- describir el avance clave (experimento, formulación teórica, cambio de enfoque)
- quién lo logró y en qué contexto
- por qué ese avance desbloqueó el problema

## Impacto en la física
- consecuencias del avance para la disciplina (nuevas leyes, nuevas ramas, unificaciones)
- cómo cambió la forma de pensar o de hacer física
- repercusiones más allá del problema original cuando sea pertinente

## Conexión con física moderna
- enlace del concepto histórico con la física actual o con tecnología contemporánea
- debe mostrar que el tema no es un relicto histórico sino un concepto vivo

Reglas de validación:

- Si el contenido es una cronología de fechas sin análisis del problema físico → **inválido**.
- Si no hay dificultad conceptual explícita (sección vacía o genérica) → **inválido**.
- Si no hay impacto físico concreto → **incompleto**.

Requisitos generales:

- Debe contener al menos 300 – 500 palabras
- Párrafos ágiles: Ningún párrafo debe superar las 4 o 5 líneas de lectura
- No basta con una cronología superficial; debe haber análisis histórico del problema físico

Regla crítica:

No cumple nivel 5 si no tiene al menos 400 palabras y que no sea relleno.

Regla de validador:

Los encabezados deben aparecer exactamente así, sin numeración inicial.

---------------------------------------------------------------------

# 22. historia.en.md

Debe:

- Párrafos ágiles: Ningún párrafo debe superar las 4 o 5 líneas de lectura.
- replicar la estructura de historia.md
- estar completamente en inglés
- títulos y subtítulos en ingles académico natural
- no contener español
- mantener mismo contenido histórico y mismo nivel
- respetar exactamente los mismos encabezados, sin numeración adicional

---------------------------------------------------------------------

# 23. Gráficos

Plantilla obligatoria asociada:

- `docsV2/plantilla_y_checklist/plantilla_graficos_v5.md`

Regla de precedencia:

Esta sección define el contrato del leaf con los gráficos, pero la creación,
estructura técnica, integración con frontend y reglas de rechazo específicas
de Coord, SVG y DCL quedan desarrolladas y endurecidas en
`plantilla_graficos_v5.md`, cuyo cumplimiento es obligatorio cuando el leaf
declare gráficos.

Tipos permitidos:

- Coord
- SVG
- DCL

Reglas:

- cada gráfico responde a una pregunta física concreta
- ejes con unidades cuando proceda
- símbolos coherentes con magnitudes.yaml
- título, leyenda o etiquetas coherentes con el leaf
- no se permiten gráficos decorativos sin valor interpretativo

Si el leaf declara varios tipos de gráficos, cada uno debe tener una función distinta:
- Coord: lectura cuantitativa o ejes
- SVG: representación visual física
- DCL: solo cuando la naturaleza del leaf lo justifique

Regla de integración reforzada:

Si el leaf declara gráficos y tiene interpretación habilitada:

- el gráfico debe poder recibir el resultado calculado o su estado derivado
- debe existir coherencia entre la lectura gráfica y `interpretacion.yaml`
- la convención de signos y ejes debe coincidir entre fórmula, interpretación y gráfico

En la versión en inglés:

- Todos los textos deben estar en ingles académico natural
- Todos los títulos y subtítulos deben estar en inglés académico natural.

Sin esta integración, el leaf no puede alcanzar Nivel 5 completo con gráficos.

Regla adicional de implementación obligatoria:

Todo gráfico nuevo del leaf debe crearse usando la infraestructura común del
frontend definida por la plantilla de gráficos, incluyendo la fábrica común
de wrappers y las plantillas operativas de creación. No se admite resolver
gráficos nuevos mediante placeholders o wrappers ad hoc si el estándar común
ya cubre el caso.

---------------------------------------------------------------------

# 23B. Control de carga cognitiva (OBLIGATORIO)

El leaf no debe introducir demasiadas variables nuevas a la vez ni adelantar
formalismo matemático al nivel esencial.

Reglas de distribución de densidad por nivel:

- **Nivel esencial**: 100–200 palabras, máximo 5–6 magnitudes nuevas, evitar fórmulas desarrolladas
- **Nivel formal**: 200–350 palabras, asume la mayor densidad matemática con todas las fórmulas núcleo
- **Nivel estructural**: 250–400 palabras, el nivel más profundo y denso, nunca más corto que el formal

**Progresión de densidad obligatoria**: esencial (menor densidad) → formal (densidad media-alta) → estructural (mayor densidad)

Regla de rechazo duro:

- Si el nivel estructural tiene menos palabras que el nivel formal → **FAIL de validación** (`learning_dynamics: progresión de profundidad entre niveles`)
- Si la comprensión del nivel esencial depende de leer el nivel formal → **FAIL de carga cognitiva**
- Si el nivel esencial excede 250 palabras o contiene fórmulas complejas → **FAIL de saturación prematura**

Ejemplo de distribución válida:
```
esencial: 145 palabras (intuición, conceptos clave)
formal: 280 palabras (matemáticas, fórmulas, derivaciones)
estructural: 320 palabras (límites, conexiones, validez del modelo)
```

Ejemplo de distribución inválida (causa fail):
```
esencial: 145 palabras
formal: 169 palabras  
estructural: 113 palabras  ← ERROR: más corto que el formal
```

---------------------------------------------------------------------

# 23C. Estándar DCL de alto nivel — estructura y ejemplo de referencia

Un DCL de Nivel 5 no es un diagrama decorativo. Es una herramienta didáctica
que debe responder a una pregunta física concreta, ser coherente con la escena
física real del leaf y estar preparado para recibir el resultado de la calculadora.

## 23C.1 Estructura mínima obligatoria de un profile DCL

Un profile DCL de alto nivel debe declarar exactamente estos bloques:

```
scene          — escena física (determina geometría y fuerzas admisibles)
question       — qué pregunta responde el DCL
meta           — id, title (es/en), smartHeader (es/en), leafId, question (es/en)
environment    — inclineAngleDeg, showGrid, gravityDirection
params         — parámetros dinámicos si el DCL los consume
bodies         — al menos 1 cuerpo con id, kind, label (es/en), role, anchor,
                 labelYOffset (si el label colisiona con vectores), style
vectors        — fuerzas reales + vectores de contexto cinemático
labels         — anotaciones textuales de contexto en el SVG
options        — flags de comportamiento (showSurface, showAxes, showBodyNames,
                 followCalculator, experimentMode, showCompactLegend, etc.)
theory_link    — enlace al concepto teórico del leaf
interpretation — textos interpretativos para panel lateral y lectura gráfica
```

## 23C.2 Reglas de escena y coherencia física

La elección de `scene` es una decisión física, no técnica.
Cada escena habilita un conjunto específico de fuerzas admisibles:

| scene | Cuándo usarla | Fuerzas físicamente coherentes |
|---|---|---|
| `PARTICLE_FREE` | masa suspendida, sin contacto con superficie | Peso, Tensión, F_aplicada, F_ficticia |
| `BLOCK_ON_TABLE` | bloque sobre superficie horizontal | Peso, Normal, Rozamiento, F_aplicada, F_ficticia |
| `BLOCK_ON_INCLINE` | bloque en plano inclinado | Peso, Normal (⊥ plano), Rozamiento |
| `HANGING_MASS` | masa colgante de cuerda | Peso, Tensión |
| `TWO_MASSES_ROPE` | dos masas horizontales (colisiones, tensión) | Peso, Normal, Impulso, F_aplicada, Velocidad |
| `PULLEY_SIMPLE` | polea ideal con dos masas | Peso, Tensión |

> **CUSTOM no está en el Scene Registry.** Si el wrapper usa `createDclGraph`,
> la escena CUSTOM provoca crash (`Unsupported scene`). Solo es válida con
> renderers manuales que no consultan `DCL_SCENE_REGISTRY`.

Regla absoluta: la Normal solo aparece en escenas con superficie.
`PARTICLE_FREE` + Normal es físicamente incorrecto. No genera error de consola.

## 23C.3 Vectores de contexto cinemático

Cuando el leaf trata un fenómeno causal (una aceleración que produce una fuerza,
una velocidad que implica un cambio), ese vector causal debe aparecer en el DCL
como **vector de contexto**, diferenciado visualmente de las fuerzas reales.

Reglas para vectores de contexto:

- `type: ACCELERATION` o `type: VELOCITY` (se renderizan automáticamente punteados)
- `derived: true` — marca visual que lo diferencia de fuerzas reales
- `highlight: MUTED` — tono atenuado visual
- `semanticRole: "system_response"` — rol semántico correcto
- la etiqueta debe aclarar que es contexto: `"Aceleración del marco (contexto)"`
- visible por defecto para no ocultar la relación causal al alumno

Sin el vector de contexto, el alumno no comprende el origen de la fuerza ficticia
(o del efecto físico equivalente en otros leafs).

## 23C.4 Simbología en SVG — subscripts corrrectos

Los símbolos con subscript LaTeX (`F_{ficticia}`, `a_{marco}`) se escriben
en el campo `symbol` del vector usando notación LaTeX de subscript:

```js
symbol: "F_{ficticia}"   // correcto → renderiza F con subíndice
symbol: "F_ficticia"     // incorrecto → puede renderizar literalmente
```

El motor `renderSvgSymbol` del DclRenderer convierte `_{...}` en `<tspan>`
automáticamente. No usar notación plana ni notación LaTeX de bloque `\(...\)`.

## 23C.5 Bloque `interpretation` del profile

Todo DCL de Nivel 5 incluye un bloque `interpretation` con estos campos:

```
header_bridge   — fórmula o relación clave que justifica el DCL (es/en)
reading_focus   — qué debe observar el alumno en el diagrama (es/en)
graph_role      — objetivo pedagógico del gráfico (es/en)
calc_reading    — cómo leer el resultado de la calculadora con este DCL (es/en)
graph_reading   — qué error visual detecta el DCL (es/en)
physical_insight — comprensión profunda que aporta (es/en)
likely_errors   — lista de errores típicos del alumno (es/en, array)
```

Ninguno de estos campos puede ser genérico ni duplicar `teoria.md`.
Cada campo interpreta el resultado concreto o la lectura visual real del leaf.

## 23C.6 Ejemplo de referencia — sistemas-no-inerciales-intro

Este profile es la referencia canónica de un DCL de alto nivel en Phyxio:

```js
// Escena correcta: bloque sobre superficie → Normal físicamente justificada
scene: DCL_SCENE_IDS.BLOCK_ON_TABLE,

// Pregunta física concreta
question: DCL_QUESTION_TYPES.IDENTIFY_FORCES,

// Cuerpo con kind coherente con la escena
bodies: [{
    id: "body_particle",
    kind: DCL_BODY_KIND_IDS.BLOCK,    // MASS no es válido para BLOCK_ON_TABLE
    label: { es: "Masa m", en: "Mass m" },
    labelYOffset: 70,                  // evita colisión con el vector N
    style: { highlight: DCL_HIGHLIGHT_MODES.PRIMARY, opacity: 1 },
}],

vectors: [
    // Fuerzas reales (highlight PRIMARY o SECONDARY)
    { id: "weight_particle", type: WEIGHT,  symbol: "P",           highlight: PRIMARY  },
    { id: "normal_particle", type: NORMAL,  symbol: "N",           highlight: SECONDARY },
    // Fuerza ficticia (highlight MUTED — visualmente diferenciada)
    { id: "fictitious_force", type: CUSTOM, symbol: "F_{ficticia}", highlight: MUTED,
      directionMode: "left", semanticRole: "fictitious_cause" },
    // Vector de contexto (tipo ACCELERATION → punteado automático, derived:true)
    { id: "frame_accel", type: ACCELERATION, symbol: "a_{marco}",
      anchor: TOP, directionMode: "right",
      derived: true, highlight: MUTED,
      label: { es: "Aceleración del marco (contexto)" } },
],

// Labels contextuales en el SVG
labels: [{
    id: "note_marco",
    text: { es: "Marco acelerado → a_marco", en: "Accelerated frame → a_frame" },
}],

options: {
    showSurface: true,
    showAxes: true,
    showBodyNames: true,
    followCalculator: true,
    experimentMode: true,
    showCompactLegend: true,
    showTypicalErrors: true,
    showTheoryLink: true,
},
```

---------------------------------------------------------------------

# 23D. SVG Profile — Estándar de Sincronización Blindada v5

Un SVG profile (`*.svg.profile.jsx`) es una pieza de software físico-visual. Para alcanzar el Nivel 5, no solo debe animar, sino ser **reactivamente indistinguible** del motor de cálculo. Si el alumno cambia una masa en la calculadora, el gráfico debe mutar instantáneamente.

## 23D.1 Protocolo de "Triple Blindaje" (Magnitude Objects)

A diferencia de versiones anteriores, el motor Phyxio v2 emite magnitudes como objetos `{ value, unit }`. Un perfil que no use el blindaje fallará silenciosamente al recibir `NaN`.

**Regla obligatoria:** Usar la función `toNum` (provista por el renderer) en todas las extracciones de `p`.

```js
// CORRECTO — Extrae .value recursivamente si existe
const m = toNum(p.m, 2); 

// INCORRECTO — Se rompe si p.m es { value: 2, unit: "kg" }
const m = p.m ?? 2; 
```

## 23D.2 Detección Automática de Contexto (__calc)

El renderer v5 inyecta automáticamente metadatos de la calculadora en el campo `__calc`. El perfil debe estar preparado para usar esta información si el renderer no la procesa por defecto.

-   **Título de Fórmula**: El renderer v5 extrae `sharedParams.__calc.formulaTitle` y lo pasa como `formulaLabel` al panel lateral.
-   **Regla de UI**: No renderizar el título de la ecuación DENTRO del SVG. El estándar v5 delega los metadatos de texto al panel lateral (`Aside`) para mantener el lienzo SVG limpio para la física.

## 23D.3 Esquema de Parámetros — Registro de Sincronización

Para que una variable (ej: $I$) se muestre en la lista de datos sincronizados del gráfico, **DEBE** figurar en el `schema` del perfil, aunque no tenga slider.

**Regla:** Incluir todos los IDs de `magnitudes.yaml` que la calculadora emita y el gráfico use.
```js
{
  key: "I",
  aliases: ["I_izq", "I_der"],
  label: { es: "Momento de Inercia", en: "Moment of Inertia" },
  unit: "kg·m²",
  // Si no quieres slider, el renderer lo ocultará si no tiene min/max definidos
}
```

## 23D.4 Indicador de Salud (SYNC OK)

Todo gráfico conectado debe incluir un indicador visual de estado en la esquina superior derecha (Dashboard Mode).

**Regla de Implementación:**
1. Solo visible si existe `label` (fórmula activa).
2. Posición: Esquina superior derecha.
3. Color: `#22c55e` (Verde éxito).

```jsx
{label && (
  <g transform="translate(760, 25)">
    <circle cx="12" cy="0" r="3.5" fill="#22c55e" />
    <text x="22" y="1" fontSize="9" fill="#22c55e" fontWeight="900">SYNC OK</text>
  </g>
)}
```

## 23D.5 Conexión Bidireccional (Calculator Link)

El gráfico no es un vídeo, es un experimento. El usuario debe poder mover los sliders y "Empujar" esos valores a la calculadora.

**Regla de Wrapper:**
El archivo `NombreLeafSvg.jsx` debe inyectar `onSharedParamsChange` (desde los props del leaf) en el renderer:
```jsx
<SvgProfileRenderer
  profile={profile}
  sharedParams={sharedParams}
  onApplyToCalculator={onSharedParamsChange} // Crucial para el botón "Aplicar"
/>
```

## 23D.6 Lista de Verificación SVG v5

- [ ] Usa `toNum(p.variable, default)` para blindar contra objetos de magnitud.
- [ ] No renderiza el título de la ecuación dentro del SVG (está en el `Aside`).
- [ ] Muestra el badge **SYNC OK** arriba a la derecha cuando hay conexión.
- [ ] Los parámetros de la calculadora tienen `aliases` que coinciden con `formulas.yaml`.
- [ ] El botón "↑ Aplicar" funciona y actualiza la calculadora del leaf.
- [ ] Las variables derivadas (derivations) reportan resultados coherentes a `interpretation_binding`.
- [ ] Declara `infoCards` con al menos una tarjeta (ver 23D.8).

## 23D.8 `infoCards` obligatorias en el panel lateral (CRÍTICO)

Todo profile SVG debe declarar un array `infoCards` con al menos una tarjeta.
Estas tarjetas pueblan la sección ANÁLISIS del panel lateral (`AsidePanel`)
del `SvgProfileRenderer`. Sin `infoCards`, la columna derecha queda vacía y
el alumno pierde la lectura rápida del gráfico.

Estructura mínima de una tarjeta:

```js
{
  key: "reading",                                    // identificador único
  label: { es: "Lectura actual", en: "Current reading" },  // título bilingüe
  highlight: "p = m·v",                              // fórmula destacada (opcional)
  highlightColor: "#86efac",                          // color del highlight (opcional)
  description: {                                      // texto explicativo bilingüe (opcional)
    es: "El momento lineal es el producto de masa y velocidad.",
    en: "Linear momentum is the product of mass and velocity.",
  },
  lines: ({ p, state, lang }) => [                    // líneas dinámicas (opcional)
    `m = ${fmt(safeNum(p?.m, 4), 1, lang)} kg`,
  ],
  result: ({ p, state, lang }) => `p = ... kg·m/s`,  // resultado destacado (opcional)
  resultColor: "#34d399",                             // color del resultado (opcional)
}
```

Reglas:

- El profile debe tener al menos 1 card con `key` y `label` bilingüe.
- Se recomienda incluir una card de tipo "lectura actual" con `lines` y `result`
  que muestre los valores calculados en tiempo real.
- Los textos de `label` y `description` deben ser bilingües reales (es/en).

Regla de rechazo:

Si el profile no declara `infoCards` o el array está vacío, el gráfico SVG
no cumple el estándar Nivel 5 y la columna lateral quedará muda.

## 23D.7 Regla anti-reutilización ciega (CRÍTICO)

Un SVG de Nivel 5 no puede resolverse importando un profile ajeno solo porque “se parece”.

Reglas obligatorias:

- cada leaf con `Svg` debe tener un wrapper propio del leaf y un `profile` semánticamente propio
- `profile.meta.leafId` debe coincidir exactamente con el `id` del leaf
- el `title`, `subtitle`, `schema`, `derivations` e `interpretation_binding` del profile deben corresponder al núcleo físico del leaf, no al de otro leaf parecido
- el wrapper debe pasar `onApplyToCalculator={onSharedParamsChange}` al renderer
- un mismo componente `Svg` no puede registrarse para dos leafs distintos si eso elimina especificidad física o didáctica

No se admite:

- reutilizar un profile de otro leaf cambiando solo el título visible
- reutilizar un profile cuyo `leafId` no coincide con el leaf actual
- reutilizar una escena genérica que no represente magnitudes, relaciones o estados propios del leaf
- entregar un SVG correcto técnicamente pero intercambiable con el de otro leaf sin pérdida real de identidad física

Regla de rechazo duro:

Si un SVG puede reasignarse a otro leaf cercano sin cambios sustantivos en profile, semántica o lectura didáctica, no cumple Nivel 5.

Regla de rechazo:
Un gráfico que no reacciona a la calculadora o que muestra `NaN` por no estar blindado no puede superar el Nivel 4.7.
 profile

Antes de dar por integrado un profile SVG con la calculadora:

- [ ] El `key` o al menos un `alias` de cada param incluye el nombre exacto emitido por la calculadora (verificar en `formulas.yaml` los `target` de los rearrangements)
- [ ] `Math.abs()` aplicado en `computeState`, `derivations` y `render` donde la convención de la fórmula produce negativos
- [ ] El wrapper pasa `onApplyToCalculator={onSharedParamsChange}` (no una función interna)
- [ ] El botón "↑ Aplicar" está visible en ambos modos del panel
- [ ] El click del botón llama `resetToCalculator()` después de aplicar
- [ ] `interpretation_binding.paramsIn` usa los keys internos del profile, no los alias
- [ ] La animación cambia visiblemente al cambiar el resultado de la calculadora

Regla de rechazo:

Si los valores calculados no cambian la animación, la integración no está completa
y el gráfico SVG no cumple el estándar funcional de Nivel 5.

---------------------------------------------------------------------

# 24. Implementación bilingüe

Reglas:

- Un único contenido físico, dos realizaciones lingüísticas coherentes
- No duplicar conceptos con diferencias científicas entre ES y EN
- Los archivos .en.md deben poder publicarse de forma independiente
- No usar traducciones literales defectuosas
- Mantener terminología estándar tipo Halliday / Serway cuando aplique
- **Gráficos interactivos:** Textos puros en español dentro del código UI de los gráficos (`.jsx` o Svg/Coord) están **estrictamente prohibidos**. Todos los textos en JSX (Títulos, botones, etiquetas, descripciones) deben usar obligatoriamente el helper de traducción `tt("Español", "English")` o una capa de internacionalización.
- **Formato numérico:** Prohibido dejar valores numéricos con comas decimales hardcodeadas `.replace(".", ",")` de forma incondicional. En gráficos bilingües, usar separador decimal `.` para inglés y `,` para español mediante una constante basada en `uiLang` (ej. `const decSep = uiLang === "en" ? "." : ",";`).

---------------------------------------------------------------------

# 25. Control anti-mojibake y control textual

Antes de cerrar el leaf:

- revisar codificación UTF-8
- revisar caracteres corruptos
- revisar tildes, comillas y signos
- revisar consistencia de títulos
- revisar que no haya fragmentos en idioma incorrecto
- revisar cada archivo del leaf (todos los `.md` y `.yaml`) para eliminar
  mojibake antes de validar

Regla de puntuación:

- si un archivo contiene mojibake, ese archivo resta puntuación en el validador
  (no se admite “aprobado parcial” por promedio textual)

Secuencias a eliminar:

- Ã¡
- Ã©
- Ã­
- Ã³
- Ãº
- â€“
- â€”
- ðŸ

---------------------------------------------------------------------

# 26. Validación final obligatoria

Antes de considerar el leaf finalizado, debe cumplirse TODO lo siguiente:

✓ 16 archivos exactos
✓ meta.yaml completo y coherente
✓ interpretacion.yaml completo y coherente
✓ meta.yaml alineado con `phyxio-map.yaml`
✓ todas las magnitudes reales definidas en `magnitudes.yaml`; variables auxiliares o ficticias en Markdown como código inline
✓ magnitudes.yaml con campos de interpretación física completos
✓ formulas.yaml sin mezclar relaciones incompatibles
✓ formulas.yaml con semántica interpretativa evaluable
✓ teoria.md entre 1200 y 2000 palabras
✓ teoria.en.md completa y en inglés real
✓ teoria.md con encabezados exactos y prefijos emoji obligatorios
✓ teoria.md con `## Orden de magnitud` al nivel correcto
✓ modelos.md ≥ 400 palabras
✓ modelos.en.md completo y en inglés real
✓ modelos.md con `Dominio de validez cuantitativo` realmente cuantitativo
✓ errores.md ≥ 500 palabras y con 5 bloques realmente desarrollados
✓ errores.en.md completo y en inglés real
✓ errores/modelos/historia sin numeración en encabezados
✓ ejemplos.md ≥ 800 palabras, con 2 ejemplos completos y personalizados
✓ ejemplos.en.md completo y en inglés real
✓ ejemplos conectados con la teoría del leaf
✓ aplicaciones.md ≥ 800 palabras y con 5 aplicaciones desarrolladas
✓ aplicaciones.en.md completo y en inglés real
✓ historia.md ≥ 300 palabras
✓ historia.en.md completo y en inglés real
✓ historia.en.md ≥ 250 palabras
✓ coherencia simbólica total
✓ dimensiones correctas
✓ ausencia de comandos LaTeX fuera de delimitadores matemáticos en todos los `.md`
✓ ausencia de patrones de unidad no robustos (ejemplo a evitar: `\text{kg \cdot m}^2`)
✓ ausencia de placeholders, TODOs o texto vacío
✓ ausencia de párrafos largos duplicados y frases repetidas mecánicamente
✓ ausencia de mojibake en cada archivo del leaf
✓ ausencia de listas desnudas donde deba haber desarrollo
✓ títulos y subtítulos de cada archivo deben coincidir exactamente con la estructura obligatoria propuesta en cada sección de archivo
✓ coverage: magnitudes y fórmulas núcleo presentes en teoría, ejemplos e interpretación
✓ markdown_entities: fórmulas y magnitudes sincronizadas bidireccionalmente entre `.md`/`.en.md`, `formulas.yaml` y `magnitudes.yaml`
✓ didactic_contract: teoría, ejemplos, interpretación y gráficos explican el mismo núcleo físico
✓ learning_dynamics: progresión real esencial → formal → estructural
✓ cognitive_load: sin saturación prematura en nivel esencial ni salto brusco de densidad

Validación funcional reforzada:

✓ cálculo funcional
✓ interpretación inline funcional
✓ tab de interpretación funcional
✓ lectura gráfica coherente cuando exista soporte gráfico
✓ coherencia cálculo → interpretación → gráfico
✓ ids consistentes entre meta, magnitudes, fórmulas, interpretación y frontend
✓ `interpretacion.yaml` con los 7 bloques operativos por target
✓ `dependencies.formulas` y `dependencies.magnitudes` apuntan solo a ids reales

Regla de rechazo duro:

Si la interpretación puede eliminarse sin afectar al funcionamiento del leaf, el leaf no está a Nivel 5.

---------------------------------------------------------------------

# 27. Regla de cierre

Un leaf no está a nivel 5 por “parecer completo”, sino por superar todas las
reglas estructurales, simbólicas, bilingües, históricas, didácticas, de
densidad y de integración definidas en esta plantilla.

Criterio final reforzado:

- El objetivo de cierre es siempre Nivel 5 real, no una versión intermedia del leaf.
- Sin checklist final completo no existe cierre válido del leaf.
- Si el leaf no declara gráficos, debe cerrar igualmente con cálculo, interpretación y semántica YAML plenamente operativos.
- Si el leaf declara gráficos, el Nivel 5 exige además integración real y coherente entre cálculo, interpretación y lectura gráfica.
