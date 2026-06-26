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

Regla de rechazo duro - Longitud de teoria.md y teoria.en.md:

Un leaf no puede declararse Nivel 4.7+ ni Nivel 5 si `teoria.md` o
`teoria.en.md` superan las **2000 palabras**. El validador genera un FAIL
automático cuando el recuento de palabras excede este límite.

- Rango obligatorio: **1200 – 2000 palabras** (ambos archivos)
- Si el contenido excede 2000 palabras, condensar eliminando redundancias
  y prosa innecesaria, nunca recortando contenido conceptual esencial.
- Ambos archivos deben cumplir el límite de forma independiente.

Regla adicional de cierre con gráficos:

Si el leaf declara gráficos y no cumple también `plantilla_graficos_v5.md`,
el leaf no puede declararse cerrado ni a Nivel 5.

---------------------------------------------------------------------

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
- **USO PERMITIDO**: Solo símbolos aislados o fragmentos sin signo `=` y sin valores numéricos.
  - ✅ Válido: "donde la magnitud \(\alpha\) es constante..."
  - ✅ Válido: "la unidad \(\mathrm{kg \cdot m^2}\)..."
  - ✅ Válido: "la desigualdad \(d \ll \sqrt{A}\) garantiza..."
- **USO PROHIBIDO**: Cualquier `\(...\)` que contenga un signo `=`.
  - ❌ Inválido: `\(P = I^2 R = 13.31\,\mathrm{W}\)` — el validador lo rechaza como "fórmula inline inválida"
  - ❌ Inválido: `\(f \ll f_r = 1/(2\pi\sqrt{LC})\)` — rechazado por el `=`
  - ❌ Inválido: `\(V \leq 0.5 \cdot V_{ruptura}\)` — rechazado si incluye `=` o define una relación completa
  - ✅ Solución: Reescribir como prosa: "cuando la frecuencia es mucho menor que la frecuencia de autorresonancia..."

**REGLA DE ORO PARA LATEX INLINE**: Si el fragmento `\(...\)` contiene `=`, es una ecuación completa y debe escribirse en prosa o como `{{f:id_formula}}`. Si solo contiene un símbolo, una unidad o una desigualdad sin `=`, está permitido.

**ALCANCE REAL DEL DETECTOR DE FÓRMULAS TEXTUALES — CRÍTICO**:

El validador detecta como "fórmula textual inválida" **cualquier línea** que contenga el patrón `variable = expresión`, independientemente de si usa o no `[[magnitudes]]`. Esto afecta a **todos** los archivos `.md` y `.en.md`. Los siguientes patrones son rechazados aunque sean texto explicativo:

| ❌ Patrón rechazado | ✅ Reformulación válida |
|---|---|
| `tanδ = 0` | "sin pérdidas dieléctricas (factor de disipación nulo)" |
| `ESR = 0 y ESL = 0` | "sin resistencia ni inductancia parásita" |
| `Z = 1/(jωC)` | "impedancia reactiva inversamente proporcional a la frecuencia" |
| `Q = C·V` en celda de tabla | "relación lineal entre carga y tensión" |
| `E = (1/2)·C·V²` en celda de tabla | "100% de la energía almacenada" |
| `C = ε₀·(0.01)²/(0.005) ≈ 17.7 pF` | "el cálculo con ε₀, área y separación da aproximadamente 17.7 pF" |
| `Q = 50 µC` en mini-ejemplo | "la carga almacenada es de 50 µC" |
| `E = (1/2)·C·V²` en sección de autocontrol | "la fórmula con el factor 1/2 y el cuadrado de la tensión" |
| `u = (1/2)·ε·E²` en texto | "la densidad de energía volumétrica del campo eléctrico" |

**Este detector actúa en todos los archivos**: `teoria.md`, `modelos.md`, `errores.md`, `ejemplos.md`, `aplicaciones.md`, `historia.md` y sus versiones `.en.md`.

**Reglas específicas por archivo**:

- **`errores.md` / `errores.en.md`**: Los mini-ejemplos de contraste y las secciones de autocontrol tienden a incluir ecuaciones explicativas (`E = (1/2)·C·V²`, `Q = C·V`, `Z = 1/(ωC)`). **TODAS** deben reescribirse en prosa sin signo `=` entre variable y expresión. El mecanismo cognitivo puede describir la ecuación verbalmente sin escribirla literalmente.

- **`modelos.md` / `modelos.en.md`**: La sección `## Hipótesis` tiende a incluir condiciones matemáticas (`ESR = 0`, `tanδ = 0`). La sección `## Dominio de validez cuantitativo` tiende a incluir desigualdades con `\(...\)` que contienen `=`. La `## Comparación operativa` (tabla) tiende a incluir ecuaciones en celdas. **TODOS** estos patrones se reemplazan por prosa o por descripciones sin `=`.

- **`aplicaciones.md` / `aplicaciones.en.md`**: Las ecuaciones de cálculo dentro de las aplicaciones (`Z = 1/(ω·C)`, `C = 2·E/V²`) deben reescribirse en prosa: "dividir dos veces la energía por el cuadrado de la tensión da..." Sin `=` entre símbolo y expresión.

- **`historia.md` / `historia.en.md`**: Las referencias a fórmulas históricas (`E = (1/2)·C·V²`, `u = (1/2)·ε·E²`) deben escribirse en lenguaje verbal: "la fórmula de energía con el factor 1/2", "la densidad de energía del campo eléctrico".

Prohibido:
- **FÓRMULAS TEXTUALES CON MAGNITUDES ETIQUETADAS**: Escribir ecuaciones completas como `[[magnitud]] = valor · valor = resultado` en lugar de usar `{{f:id_formula}}`.
- **CUALQUIER `x = expr` EN PROSA**: Escribir `tanδ = 0`, `Z = 1/(ωC)`, `C = Q/V`, `E = (1/2)CV²` como texto literal fuera de un bloque `{{f:id}}`. El validador rechaza cualquier línea que contenga ese patrón.
- **`\(...\)` CON SIGNO `=`**: Cualquier fragmento LaTeX inline que contenga `=` es tratado como ecuación completa y rechazado.
- **ECUACIONES EN CELDAS DE TABLA**: Las celdas de tablas en `## Comparación operativa` no son excepción; el validador también las escanea. Reemplazar ecuaciones de celda por descripciones verbales.
- **REFERENCIAS DE FÓRMULA INLINE**: Usar `{{f:id_formula}}` dentro de un párrafo de texto.
- **ECUACIONES CON ID DE FÓRMULA**: `{{f:potencia_joule}} = 8 W · 2 h = 16 Wh`.
- Bloques LaTeX manuales (`$$ ... $$`) para fórmulas que existen en `formulas.yaml`.
- Ecuaciones en texto plano sin delimitadores matemáticos.
- Comandos LaTeX fuera de delimitadores matemáticos.

Reglas de render obligatorio (v5):
- Toda expresión con comandos LaTeX (`\alpha`, `\omega`, `\leftrightarrow`, `\frac`, `\cdot`, etc.) debe ir dentro de `\(...\)`, `$ ... $` o bloque `{{f:id}}`.
- `\(...\)` solo está permitido si **NO contiene `=`**.
- Si se compara una unidad compuesta con una simple, usar notación robusta: `\(\mathrm{kg\cdot m^2}\)` frente a `\(\mathrm{kg}\)`.
- El uso de `$$ ... $$` manual se considera una señal de "Didáctica de Relleno" y restará puntuación en la validación Nivel 5.

Reglas:

- Toda ecuación visible debe ser científicamente correcta y dimensionalmente coherente.
- Las magnitudes deben escribirse con el mismo símbolo en todos los archivos.
- Las explicaciones verbales de fórmulas deben usar el mismo nombre físico
  que figure en magnitudes.yaml.

---------------------------------------------------------------------

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

---------------------------------------------------------------------

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
Los archivos .md se deben crear en parejas versión epsñola .md y versión ingles .en.md para mantener la coherencia entre los dos idiomas.

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
  - coherencia idiomática entre español e inglés

---------------------------------------------------------------------

---------------------------------------------------------------------

# 5.1 Nodo asociado

Si el leaf pertenece a un nodo con varios leafs, el nodo debe tener
obligatoriamente:

- overview.md
- overview.en.md

---------------------------------------------------------------------

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
- sección 6: cierre de competencias adquiridas

overview.en.md debe estar completamente en inglés académico y mantener
la misma estructura del overview.md.

---------------------------------------------------------------------

---------------------------------------------------------------------

# 23B. Control de carga cognitiva (OBLIGATORIO)

El leaf no debe introducir demasiadas variables nuevas a la vez ni adelantar
formalismo matemático al nivel esencial.

Reglas de distribución de densidad por nivel:

- **Nivel esencial**: 100–200 palabras, máximo 5–6 magnitudes nuevas, evitar fórmulas desarrolladas
- **Nivel formal**: 200–350 palabras, asume la mayor densidad matemática con todas las fórmulas núcleo
- **Nivel estructural**: 250–400 palabras, el nivel más profundo y denso, nunca más corto que el formal

**Progresión de densidad obligatoria**: esencial (menor densidad) → formal (densidad media-alta) → estructural (mayor densidad)

**Definición operativa de "fórmula en el nivel esencial"** (para el validador `cognitive_load`):

Se considera que el nivel esencial "adelanta una fórmula" **únicamente** cuando contiene una referencia explícita `{{f:id}}`. Las menciones de magnitudes con la sintaxis `[[id]]` (ej. `[[P]]`, `[[I]]`) **no cuentan** como fórmulas aunque coincidan con el target de una fórmula núcleo. El nivel esencial puede y debe nombrar las magnitudes del leaf; solo debe evitar mostrar las relaciones matemáticas formales entre ellas.

- ✅ `la **potencia** [[P]] indica el ritmo de consumo` → permitido
- ✅ `[[V]], [[I]] y [[R]] son las magnitudes fundamentales` → permitido
- ❌ `{{f:potencia_base}}` en el nivel esencial → rechazado (adelanta formalismo)

El validador cuenta como `formula_hits` solo las intersecciones entre `{{f:id}}` explícitos del texto y los IDs de las fórmulas núcleo del leaf. El check pasa si `formula_hits ≤ 1`.

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