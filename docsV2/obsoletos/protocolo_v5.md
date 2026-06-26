# Protocolo de aplicación de la Plantilla Phyxio v5

## Objetivo

Este protocolo define cómo aplicar realmente la plantilla `v5_n5_blindado` a un leaf existente o nuevo para que el resultado final alcance Nivel 5 real y no se quede en una corrección parcial.

La idea central es simple:

**la plantilla no se “parchea”, se aplica archivo por archivo y se valida al final.**

## Regla de oro

Nunca des por aplicado un leaf solo porque:

- tenga 16 archivos
- tenga títulos correctos
- tenga texto largo
- tenga algunas fórmulas válidas
- tenga un `interpretacion.yaml` presente

Un leaf solo queda realmente aplicado cuando supera la validación completa de:

- estructura
- coherencia simbólica
- densidad
- bilingüismo
- consistencia física
- calidad editorial
- semántica operativa
- integración funcional

## Fase 0. Preparación

Antes de tocar un leaf:

1. abrir el leaf completo
2. leer la plantilla v5 entera
3. identificar el tipo conceptual del leaf:
   - fenómeno físico
   - magnitud física
   - ley física
   - modelo físico
   - método de resolución
4. decidir si se va a:
   - corregir un leaf existente
   - reconstruirlo desde cero

### Regla

Si el leaf está por debajo de nivel 3.5, lo correcto suele ser reconstrucción casi total, no parcheo.

## Fase 0B. Extracción obligatoria desde phyxio-map.yaml

Antes de escribir `meta.yaml`, localizar el leaf exacto en `phyxio-map.yaml` y extraer:

- id
- titulo
- titulo_en
- ruta_relativa
- orden
- type
- niveles.es
- niveles.en
- icon
- graficos
- physical_role.es
- physical_role.en

Además, reconstruir:

- parent_id
- area
- bloque
- subbloque

a partir de la posición del leaf en el árbol.

### Regla

No se permite redactar `meta.yaml` “a mano” sin abrir el mapa.

## Fase 0C. Definición del núcleo didáctico

Antes de redactar contenido:

1. definir idea física dominante
2. definir magnitudes núcleo
3. definir fórmulas núcleo
4. definir error conceptual dominante
5. definir criterio de aplicabilidad
6. definir criterio de fallo del modelo

### Regla

Si no puedes escribir este bloque en 6 líneas claras, el leaf todavía no está suficientemente comprendido para empezar a redactarse.

## Fase 1. Auditoría inicial del leaf

Antes de reescribir nada, pasar checklist rápido:

### 1.1 Estructura
Verificar que existan exactamente estos 16 archivos:

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

### 1.2 Coherencia gruesa
Detectar rápidamente:

- archivos vacíos
- texto mezclado ES/EN
- fórmulas sin campos
- ausencia de interpretacion.yaml
- secciones internas clonadas dentro de cualquier `.md`
- variables no definidas
- comandos LaTeX fuera de delimitadores en `.md` (riesgo de no render)
- notación de unidades inestable en inline math (ejemplo a corregir:
  `\text{kg \cdot m}^2`)
- teoría muy corta
- aplicaciones como lista desnuda
- aplicaciones repetidas con el mismo molde discursivo
- historia demasiado corta
- campos semánticos genéricos o decorativos
- targets de interpretación no conectados con fórmulas reales

### 1.3 Decisión
Marcar cada archivo como:

- conservar
- ampliar
- reescribir completo

Regla transversal:

Si un `.md` contiene secciones hermanas con el mismo molde discursivo y cambios solo nominales, la decisión correcta es `reescribir completo`, no `ampliar`.

## Fase 2. Aplicación por orden obligatorio

La plantilla debe aplicarse en este orden. No alterarlo.

### Paso 1. meta.yaml
Revisar primero:

- los datos extraídos previamente desde `phyxio-map.yaml`
- id
- nombre
- area
- bloque
- subbloque
- parent_id
- ruta_relativa
- orden
- type
- niveles
- icon
- descripcion
- description_en
- tags
- prerequisitos
- graficos
- physical_role
- dificultad
- tiempo_estimado_min
- interpretacion

### Criterios
- `id`, `nombre`, `ruta_relativa`, `orden`, `type`, `niveles`, `icon`, `graficos` y `physical_role` deben salir del mapa, no inventarse
- `parent_id`, `area`, `bloque` y `subbloque` deben reconstruirse desde la posición del leaf en el árbol del mapa
- `descripcion` y `description_en` deben ser equivalentes semánticamente
- `descripcion` y `description_en` pueden mejorarse editorialmente respecto al mapa, pero no pueden contradecir el tipo conceptual, la ruta ni el rol físico declarados en el mapa
- máximo 6 tags
- `physical_role` debe estar en bloque `es/en`
- el leaf debe quedar correctamente clasificado

**No continuar si meta.yaml no está limpio.**

Además, dejar ya definido si el leaf soporta interpretación inline, tab dedicada y vínculo con mini gráfico.

### Paso 2. magnitudes.yaml
Reconstruir el sistema de magnitudes del leaf.

Para cada magnitud definir:

- id
- symbol
- nombre es/en
- descripcion es/en
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
- zero_behavior
- value_nature
- interpretation_role
- graph_binding
- pedagogical_notes

### Regla crítica
Toda variable finita que aparezca después en:

- formulas.yaml
- interpretacion.yaml
- teoria.md
- ejemplos.md

debe existir aquí.

### Excepción
No hace falta crear magnitudes independientes para:

- \(dx\)
- \(dt\)
- \(dv\)

porque son diferenciales matemáticos puros.

### Regla de rechazo duro
No aceptar campos genéricos del tipo:
- "depende del contexto"
- "revisar el signo"
- "sirve para interpretar"
- "se usa en gráficos"

sin especificación física propia del leaf.

### Paso 3. formulas.yaml
Una vez fijadas las magnitudes, reescribir fórmulas.

Cada fórmula debe incluir:

- id
- title es/en
- equation
- latex
- rearrangements
- category
- relation_type
- physical_meaning es/en
- constraints
- validity es/en
- dimension_check
- calculable
- motivo_no_calculable
- used_in
- interpretation_tags
- result_semantics
- domain_checks
- coherence_checks
- graph_implications
- pedagogical_triggers

### Regla crítica
No mezclar en una sola fórmula:

- definición diferencial
- relación promedio
- interpretación geométrica

Cada fórmula debe representar una sola relación física.

### Regla de rechazo duro
No aceptar:
- domain_checks con frases no evaluables
- coherence_checks que no distingan salidas correctas de sospechosas
- graph_implications decorativos
- pedagogical_triggers que no detecten errores reales

### Paso 4. interpretacion.yaml
Con `meta`, `magnitudes` y `formulas` fijados, construir el archivo de interpretación.

Debe incluir, como mínimo:

- version
- id
- leaf_id
- nombre es/en
- scope
- ui
- dependencies
- global_context
- result_blocks
- targets
- cross_checks
- error_patterns
- graph_binding
- mini_graph
- output_contract

### Regla crítica
No redactar este archivo como teoría duplicada. Debe contener reglas de lectura de resultado, coherencia, validez, lectura gráfica y errores probables, con condiciones evaluables.

### Regla de rechazo duro
No aceptar:
- targets que no correspondan a variables calculables reales
- `when` o `detect_when` no evaluables
- bloques completos vacíos
- mensajes que no dependan del resultado real

### Paso 5. teoria.md
Ahora sí se redacta la teoría.

Estructura obligatoria:

- Contexto conceptual
- 🟢 Nivel esencial
- 🔵 Nivel formal
- 🔴 Nivel estructural
- Interpretación física profunda
- Orden de magnitud
- Método de resolución personalizado
- Casos especiales y ejemplo extendido
- Preguntas reales del alumno
- Conexiones transversales y rutas de estudio
- Síntesis final

### Regla crítica
La teoría no debe rellenarse para llegar a 1000 palabras. Debe tener densidad física real.

### Paso 5C. Verificación de carga cognitiva

Comprobar que:

- el nivel esencial no introduce demasiadas magnitudes simultáneamente
- el nivel esencial no adelanta ecuaciones innecesarias
- el formal contiene la mayor densidad técnica
- el estructural no queda por debajo del umbral mínimo de desarrollo

Si la densidad está mal distribuida, el leaf sigue abierto aunque cumpla longitud total.

### Paso 6. teoria.en.md
No traducir de forma automática sin revisar.

Debe cumplir:

- misma estructura exacta
- mismos símbolos
- inglés académico natural
- sin frases en español
- sin spanglish
- terminología estándar física

### Paso 7. modelos.md
Estructura obligatoria:

1. Modelo ideal
2. Modelo extendido
3. Dominio de validez cuantitativo
4. Señales de fallo del modelo
5. Comparación con modelos alternativos

### Regla crítica
El apartado 3 debe contener al menos uno de estos:

- desigualdad física explícita
- rango de valores
- orden de magnitud cuantitativo

No valen frases vacías como “cuando las variaciones son pequeñas”.

### Paso 8. modelos.en.md
Mismos criterios que el español. No traducir de forma pobre.

### Paso 9. errores.md
Debe contener exactamente 5 bloques:

1. Errores conceptuales
2. Errores de modelo
3. Errores matemáticos
4. Errores de interpretación
5. Regla de autocontrol rápido

Cada bloque 1–4 debe incluir:

- idea incorrecta
- por qué el alumno cree eso
- por qué está mal físicamente
- interpretación correcta

### Paso 10. errores.en.md
Misma estructura y misma profundidad. Sin español residual.

### Paso 11. ejemplos.md
Debe contener exactamente:

- 1 ejemplo tipo examen
- 1 ejemplo aplicado real

Estructura obligatoria del ejemplo tipo examen:

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

Estructura obligatoria del ejemplo aplicado:

```
# Ejemplo de aplicación real
## Contexto
## Estimación física
## Interpretación
```

### Regla crítica
No sirve un ejemplo genérico. Debe estar claramente personalizado al leaf.

### Paso 12. ejemplos.en.md
Misma estructura, mismos símbolos, inglés real.

### Paso 13. aplicaciones.md
Debe contener mínimo 5 aplicaciones reales desarrolladas.

Cada aplicación debe incluir explícitamente:

- contexto físico
- hipótesis dominante
- variable dominante
- interpretación física
- límite de validez
- una decisión concreta distinta de las demás aplicaciones del archivo

Marcadores obligatorios sin negrita en cada aplicación:

```
Variable dominante: ...
Límite de validez: ...
```

Sin estos dos marcadores, la aplicación no supera el validador.

### Regla crítica
No valen listas desnudas. No valen aplicaciones copiables en cualquier tema.
No vale repetir el mismo bloque cinco veces cambiando solo el nombre del contexto.

### Regla de rechazo duro para aplicaciones

Rechazar `aplicaciones.md` si ocurre cualquiera de estas condiciones:

- dos o más aplicaciones tienen desarrollo casi idéntico y solo cambian el título o el contexto nominal
- `Variable dominante:` se repite de forma mecánica en 3 o más aplicaciones
- `Límite de validez:` se repite de forma mecánica en 3 o más aplicaciones
- la secuencia argumental es la misma en casi todos los bloques: misma apertura, mismo razonamiento, mismo cierre

El criterio operativo del validador debe ser estricto: alta similitud entre aplicaciones del mismo archivo implica reescritura completa, no corrección menor.

### Paso 14. aplicaciones.en.md
Misma profundidad, misma personalización y buen inglés.

Aplicar exactamente las mismas reglas de rechazo duro anti-repetición en inglés.

### Paso 15. historia.md
Estructura obligatoria:

1. Problema histórico
2. Qué no se entendía antes
3. Qué cambió
4. Evolución conceptual
5. Conexión con física moderna

### Regla crítica
Debe tener análisis histórico, no cronología superficial.

### Paso 16. historia.en.md
Misma estructura, mismo contenido y buen inglés.

## Fase 3. Validación cruzada

Cuando los 16 archivos estén redactados, hacer validación cruzada.

### 3.1 Validación simbólica
Comprobar que:

- todas las variables finitas de formulas.yaml estén en magnitudes.yaml
- todas las variables finitas de teoria.md estén en magnitudes.yaml
- todas las variables finitas de ejemplos.md estén en magnitudes.yaml
- teoria.en.md use los mismos símbolos
- ejemplos.en.md use los mismos símbolos
- los gráficos previstos usen la misma notación
- `interpretacion.yaml` use exactamente esos ids y símbolos

### 3.2 Validación de densidad
Comprobar mínimos:

- teoria.md: 1000–1500 palabras
- modelos.md: ≥350
- historia.md: ≥300
- aplicaciones.md: 5 aplicaciones desarrolladas
- aplicaciones.md: 5 aplicaciones desarrolladas y claramente diferenciadas entre sí
- errores.md: 5 bloques desarrollados

### 3.3 Validación bilingüe
Comprobar:

- no haya frases en español dentro de `.en.md`
- no haya traducciones literales rotas
- no haya spanglish
- la longitud ES/EN sea comparable

### 3.4 Validación científica
Comprobar:

- dimensiones correctas
- hipótesis explícitas
- dominio de validez explícito
- órdenes de magnitud razonables
- ausencia de contradicciones
- coherencia entre cálculo, interpretación y gráfico

## Fase 3.5. Validación funcional de interpretación

Antes de cerrar el leaf, debe comprobarse:

Regla previa obligatoria si el leaf declara gráficos:

- aplicar también `docsV2/plantilla_y_checklist/plantilla_graficos_v5.md`
- verificar que la creación de wrappers y la integración de gráficos siguen ese estándar
- no continuar al cierre si los gráficos existen pero aún están fuera del contrato común

1. Ejecutar la calculadora:
   - produce resultado válido
   - activa interpretación inline

2. Verificar:
   - existen mensajes en summary
   - existen mensajes en coherence
   - existen mensajes en likely_errors cuando procede

3. Verificar conexión con fórmulas:
   - el target interpretado existe en formulas.yaml
   - coincide con result_semantics

4. Verificar conexión con magnitudes:
   - todas las variables usadas en interpretación existen en magnitudes.yaml

5. Si hay gráficos:
   - el resultado calculado afecta al gráfico
   - existe lectura gráfica coherente
   - la implementación cumple `plantilla_graficos_v5.md`
   - los wrappers se crean con la infraestructura común del frontend cuando el caso esté cubierto
   - **Si el gráfico es SVG:** verificar que el `key` o al menos un `alias`
     del parámetro principal del profile coincide exactamente con el nombre
     de variable emitido por la calculadora (target del rearrangement activo
     en `formulas.yaml`). Si no coincide, la animación ignora la calculadora
     silenciosamente.
   - **Si el gráfico es SVG:** verificar que se aplica `Math.abs()` a todo
     valor que pueda llegar negativo por convención de la fórmula pero que
     la animación espere como magnitud positiva.

6. Verificar integración frontend:
   - contentLoader carga `interpretacion.yaml`
   - CalculatorV2 recibe `interpretacionDoc`
   - V2LeafTabs renderiza el tab si procede
   - GraphPageV2 recibe `interpretacionDoc` y `meta`
   - no hay props declarados que no se pasen desde el padre
   - **Verificar que `interpretacion.yaml` parsea correctamente:** ejecutar
     `yaml.safe_load` o `js-yaml.load` sobre el archivo. Cualquier campo
     `es:` o `en:` que contenga `:` sin comillas dobles produce un error
     silencioso que deja `interpretacionDoc = null` y elimina el tab y el
     botón "Ver interpretación" sin aviso visible.

### Regla crítica

Si la interpretación no se activa o no depende del resultado real,
el leaf no supera Nivel 4.7.

## Fase 3.6. Validación de sincronización operativa

Antes del cierre del leaf, ejecutar una validación explícita de sincronización entre:

- `magnitudes.yaml`
- `formulas.yaml`
- `interpretacion.yaml`

### 3.6.1 Verificación de ids de magnitudes

Comprobar que:

- todo id usado en `equation`, `rearrangements`, `result_semantics.target`,
  `domain_checks`, `coherence_checks` y `pedagogical_triggers` de `formulas.yaml`
  existe en `magnitudes.yaml`
- todo id usado en `targets`, `dependencies.magnitudes`, `cross_checks`,
  `error_patterns` y reglas `when` o `detect_when` de `interpretacion.yaml`
  existe en `magnitudes.yaml`

### 3.6.2 Verificación de ids de fórmulas

Comprobar que:

- todo id declarado en `interpretacion.yaml > dependencies.formulas`
  existe realmente en `formulas.yaml`
- no quedan ids antiguos tras un renombrado de fórmulas

### 3.6.3 Verificación target ↔ fórmula ↔ magnitud

Para cada target interpretado:

1. existe como magnitud real en `magnitudes.yaml`
2. existe al menos una fórmula calculable que pueda producirlo
3. el `result_semantics.target` de esa fórmula coincide exactamente con el target interpretado

### 3.6.4 Verificación de checks operativos

Comprobar que:

- los `domain_checks` de `formulas.yaml` usan ids reales
- los `coherence_checks` de `formulas.yaml` usan ids reales
- los `when` y `detect_when` de `interpretacion.yaml` usan ids reales
- no aparecen nombres alternativos mezclados dentro del mismo leaf

Ejemplos de error grave:

- `acm` en un archivo y `a_cm` en otro
- `Fext` en un archivo y `F_ext` en otro
- `ptot` en un archivo y `p_tot` en otro

### 3.6.5 Verificación de semántica reactiva

Comprobar que la interpretación:

- cambia si cambia el resultado
- no devuelve siempre el mismo texto
- puede producir al menos:
  - una lectura resumen
  - una lectura de coherencia
  - una advertencia o error cuando el resultado sea incoherente

Si el texto de interpretación no depende del valor real calculado, el leaf no supera Nivel 4.7.

### 3.6.6 Verificación de desactivación gráfica limpia

Si el leaf no se entrega con lectura gráfica operativa:

- `graph_binding.channels` en `magnitudes.yaml` debe ser vacío o equivalente
- `graph_implications` en `formulas.yaml` debe ser vacío o equivalente
- `graph_reading` en `interpretacion.yaml` debe estar desactivado
- `graph_binding` y `mini_graph` en `interpretacion.yaml` deben estar desactivados

No se admite dejar banderas de gráfico activas sin soporte real.

### 3.6.7 Criterio de cierre

El leaf no puede darse por cerrado hasta que se cumplan simultáneamente estas tres capas:

- capa 1: ids sincronizados
- capa 2: semántica operativa utilizable
- capa 3: interpretación reactiva y funcional
- capa 4: coherencia entre archivos

Si falla cualquiera de esas tres capas, el leaf sigue abierto.

## Fase 3.7. Verificación del contrato didáctico global

Comprobar que teoría, ejemplos, interpretación y gráficos cuentan la misma física.

Verificar explícitamente:

- la teoría usa las magnitudes núcleo
- los ejemplos resuelven con las fórmulas núcleo
- la interpretación lee targets y magnitudes núcleo reales
- los gráficos representan al menos una relación o magnitud núcleo
- existe una idea física dominante reconocible en todo el leaf

Regla de rechazo duro:

Si teoría, ejemplos, interpretación y gráficos pueden separarse sin pérdida de identidad física común,
el leaf no está cerrado.

## Fase 4. Revisión final obligatoria

Antes de cerrar, ejecutar el checklist final completo.

Si el leaf declara gráficos, ejecutar además la validación específica de
`plantilla_graficos_v5.md` antes de aceptar el cierre.

### El leaf solo se da por cerrado si cumple todo:

- 16 archivos exactos
- meta.yaml completo y coherente
- interpretacion.yaml completo y coherente
- todas las variables finitas definidas
- magnitudes.yaml con semántica interpretativa básica completa
- formulas.yaml sin mezclar relaciones incompatibles
- formulas.yaml con anclajes interpretativos completos
- teoria.md entre 1000 y 1500 palabras
- teoria.en.md completa y en inglés real
- modelos.md ≥ 350 palabras
- modelos.en.md completo y en inglés real
- errores.md con 5 bloques desarrollados
- errores.en.md completo y en inglés real
- ejemplos.md con 2 ejemplos completos y personalizados
- ejemplos.en.md completo y en inglés real
- aplicaciones.md con 5 aplicaciones desarrolladas
- aplicaciones.md sin bloques clónicos ni plantillas repetidas entre aplicaciones
- aplicaciones.en.md completo y en inglés real
- historia.md ≥ 300 palabras
- historia.en.md completo y en inglés real
- coherencia simbólica total
- dimensiones correctas
- ausencia de placeholders
- ausencia de listas desnudas donde deba haber desarrollo
- semántica operativa real en magnitudes y fórmulas
- integración funcional real de interpretación
- núcleo didáctico explícito y coherente
- teoría, ejemplos e interpretación comparten magnitudes núcleo
- progresión cognitiva correcta
- carga cognitiva controlada
- contrato didáctico global cumplido
- interpretación semántica no decorativa
- ejemplos no intercambiables con los de otro leaf
- si hay gráficos, cumplimiento completo de `plantilla_graficos_v5.md`

## Fase 5. Regla operativa para Phyxio

La regla operativa no es empujar el leaf a una franja intermedia, sino cerrarlo directamente con estándar de Nivel 5.

Reglas:

- todo leaf nuevo debe nacer ya orientado a cumplir la plantilla completa de Nivel 5
- todo leaf existente que se rehaga con este protocolo debe cerrarse solo cuando cumpla las reglas de Nivel 5, no cuando “quede bastante mejor”
- los rangos intermedios solo sirven para diagnosticar el estado de entrada y estimar esfuerzo de reescritura
- no existe criterio de salida válido por debajo del checklist final completo
- si falta integración entre teoría, ejemplos, interpretación, YAML y gráficos cuando apliquen, el leaf sigue abierto

## Error más común al aplicar la plantilla

El error más habitual es este:

**corregir solo YAML y copiar los `.md` antiguos.**

Eso da una falsa sensación de mejora, pero no eleva el leaf a nivel 5.

La plantilla v5 solo funciona de verdad si se aplica a:

- estructura
- contenido
- densidad
- símbolos
- bilingüe
- interpretación
- vínculo cálculo-gráfico

al mismo tiempo.

## Regla de cierre

Un leaf no está “aplicado” porque se haya tocado. Está aplicado cuando supera la validación final completa.

Criterio operativo final:

- el objetivo de salida es siempre Nivel 5 real
- sin checklist final completo no hay cierre del leaf
- con gráficos, el Nivel 5 exige además integración coherente cálculo → interpretación → gráfico
- con gráficos, el Nivel 5 exige además cumplimiento explícito de `plantilla_graficos_v5.md`
