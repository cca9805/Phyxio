# CHECKLIST OPERATIVA
## VALIDACIÓN LEAF NIVEL 4+ / 5 BLINDADO — PHYXIO

Uso:

Autoevaluación
Revisión por terceros
Auditoría editorial
Control de calidad continuo

---

## 1 VALIDACIÓN ESTRUCTURAL

### 1.1 Archivos obligatorios

Debe existir:

[ ] meta.yaml
[ ] magnitudes.yaml
[ ] formulas.yaml
[ ] interpretacion.yaml
[ ] teoria.md
[ ] teoria.en.md
[ ] modelos.md
[ ] modelos.en.md
[ ] errores.md
[ ] errores.en.md
[ ] ejemplos.md
[ ] ejemplos.en.md
[ ] aplicaciones.md
[ ] aplicaciones.en.md
[ ] historia.md
[ ] historia.en.md

Si falta uno → no puede marcarse como Nivel 4.

Si falta `interpretacion.yaml` en el estándar v5 ampliado, el leaf no puede marcarse como Nivel 5 blindado.

### 1.2 Validación de meta.yaml

[ ] id correcto
[ ] bloque `interpretacion` presente y coherente
[ ] interpretacion.enabled definido
[ ] interpretacion.archivo = interpretacion.yaml
[ ] configuración UI de interpretación coherente con el leaf
[ ] nombre.es / nombre.en definidos
[ ] descripcion.es / descripcion.en definidos
[ ] slug coherente
[ ] prerequisitos correctos
[ ] coherencia con phyxio-map.yaml
[ ] dificultad declarada coherente con contenido

### 1.3 Coherencia interna del modelo

[ ] Todas las variables en formulas.yaml existen en magnitudes.yaml
[ ] No hay magnitudes sin uso
[ ] No hay formulas sin interpretación física
[ ] Todas las fórmulas relevantes están cubiertas en interpretacion.yaml
[ ] Coherencia entre calculadora, interpretación y gráficos
[ ] Consistencia simbólica entre teoría, fórmulas y gráficos

---

## 2 VALIDACIÓN teoria.md

### 2.1 Estructura obligatoria (10 secciones)

Debe existir:

[ ] Contexto conceptual
[ ] 🟢 Nivel esencial
[ ] 🔵 Nivel formal
[ ] 🔴 Nivel estructural
[ ] Interpretación física profunda
[ ] Método de resolución personalizado
[ ] Casos especiales y ejemplo extendido
[ ] Preguntas reales del alumno
[ ] Conexiones transversales y rutas de estudio
[ ] Síntesis final

Si falta dominio de validez en nivel estructural → baja a 3.5.

## 2.2 Preguntas críticas

[ ] Se especifican hipótesis explícitas
[ ] Se explica cuándo NO se puede usar la ecuación
[ ] Se discuten casos límite
[ ] Se explica físicamente cada término importante
[ ] Se conecta con conceptos estructurales
[ ] Los conceptos estructurales aparecen con ruta explícita
[ ] Cada pregunta de sección 7 tiene respuesta clara
[ ] Preguntas personalizadas para el subtema
[ ] Las secciones 1-4 tienen profundidad real

### 2.3 Densidad editorial

[ ] teoría alcanza densidad Nivel 4 (~1200-1600 palabras)

### 2.4 Regla de alcance

[ ] teoria.md no desarrolla completamente ejemplos.md
[ ] teoria.md no sustituye aplicaciones.md
[ ] teoria.md indica dónde profundizar

### 2.5 Regla de render matemático

[ ] fórmulas completas en $$...$$
[ ] variables inline en \( ... \)
[ ] no hay fórmulas en texto plano
[ ] no hay unicode matemático
[ ] no hay líneas LaTeX sueltas

---

## 3 VALIDACIÓN teoria.en.md

Debe cumplir lo mismo que teoria.md.

### 3.1 Estructura

[ ] mismas 10 secciones
[ ] misma estructura conceptual
[ ] cumple con la estructura obligatoria (títulos y subtítulos)

### 3.2 Calidad lingüística

[ ] no contiene español
[ ] inglés técnico natural
[ ] no hay spanglish
[ ] vocabulario técnico consistente

### 3.3 Consistencia conceptual

[ ] mismo modelo físico que teoria.md
[ ] mismas ecuaciones
[ ] mismas hipótesis

---

## 4 VALIDACIÓN formulas.yaml

### 4.1 Estructura mínima

Cada fórmula debe tener:

[ ] id
[ ] title.es
[ ] title.en
[ ] equation
[ ] latex
[ ] rearrangements

### 4.2 Metadatos editoriales

[ ] category
[ ] interpretation_tags
[ ] result_semantics
[ ] domain_checks
[ ] coherence_checks
[ ] graph_implications
[ ] pedagogical_triggers
[ ] physical_meaning.es/en
[ ] validity.es/en
[ ] dimension_check.es/en
[ ] used_in

### 4.3 Densidad de fórmulas

[ ] mínimo 4 fórmulas
[ ] incluye fórmula fundamental
[ ] incluye fórmula estructural o conceptual
[ ] incluye despejes útiles

### 4.4 Coherencia dimensional

[ ] dimension_check presente
[ ] coherencia dimensional correcta

### 4.5 Consistencia con magnitudes.yaml

[ ] todas las variables definidas
[ ] no hay símbolos ambiguos

### 4.6 Calidad semántica reforzada

[ ] interpretation_tags no son decorativos
[ ] result_semantics permite leer el resultado
[ ] domain_checks son evaluables
[ ] coherence_checks detectan salidas sospechosas
[ ] graph_implications conectan con representación real
[ ] pedagogical_triggers detectan errores del alumno
[ ] todos esos campos conectan con interpretacion.yaml

Regla crítica:

Si esos campos existen pero no sirven para interpretación automática, el leaf no supera 4.7.

### 4.7 Integración con calculadora e interpretación (CRÍTICO)

[ ] al menos una fórmula tiene `calculable: true` explícito
[ ] `ui.default_formula` existe y apunta a la primera fórmula calculable del leaf
    (si no existe, la calculadora carga la primera fórmula del array, que puede ser
    `calculable: false`, y nunca generará resultado)
[ ] cada target declarado en `interpretacion.yaml` tiene su propio entry en `rearrangements`
    de su fórmula correspondiente (el target del despeje es exactamente lo que recibe el motor)
[ ] el primer rearrangement de la fórmula por defecto es el target principal del leaf
[ ] no hay targets en `interpretacion.yaml` que la calculadora no pueda producir

Regla crítica:

Si `ui.default_formula` no existe y la primera fórmula del array tiene `calculable: false`,
la calculadora nunca generará resultado y la interpretación nunca se activará.
Si un target de `interpretacion.yaml` no tiene rearrangement propio, ese target nunca
llegará al motor y todas sus reglas quedarán silenciosamente inactivas.

---

## 5 VALIDACIÓN magnitudes.yaml

### 5.1 Estructura mínima

Cada magnitud debe incluir:

[ ] id
[ ] symbol
[ ] nombre.es
[ ] nombre.en
[ ] descripcion.es
[ ] descripcion.en
[ ] unidad_si

### 5.2 Metadatos Nivel 4+

[ ] category
[ ] sign_behavior
[ ] zero_behavior
[ ] value_nature
[ ] interpretation_role
[ ] graph_binding
[ ] pedagogical_notes
[ ] physical_role
[ ] dimension
[ ] is_vector

### 5.3 Coherencia física

[ ] descripción física clara
[ ] coherencia con fórmulas

### 5.4 Calidad semántica reforzada

[ ] sign_behavior no es genérico
[ ] zero_behavior tiene significado físico real
[ ] value_nature clasifica correctamente la magnitud
[ ] interpretation_role sirve a lecturas físicas reales
[ ] graph_binding ayuda a conectar con interfaz visual
[ ] pedagogical_notes recogen trampas reales del leaf
[ ] esos campos no son copiables en otro leaf sin cambios

Regla crítica:

Si estos campos son decorativos o genéricos, el leaf no supera 4.7.

### 5.5 Sintaxis YAML segura (CRÍTICO)

[ ] los valores de `components:` que contienen comas dentro de llaves `{...}` van
    entrecomillados: `"a_{rel,x}"` — nunca `a_{rel,x}` sin comillas
    (YAML interpreta las comas en flow sequences como separadores de elementos,
    produciendo un error de parseo que silencia todo el motor de interpretación)
[ ] no existen claves duplicadas en el mismo mapping (ni `es:` repetido, ni
    `typical_range:` duplicado, ni ningún campo a mismo nivel repetido dos veces)
[ ] validar con el comando antes de cerrar el leaf:
    `node -e "require('js-yaml').load(require('fs').readFileSync('magnitudes.yaml','utf8'))"`
    — debe completarse sin error

Regla crítica:

Un error de parseo en `magnitudes.yaml` hace que el frontend reciba `null` en lugar del
documento. Esto provoca que el tab de interpretación desaparezca completamente aunque
`interpretacion.yaml` sea perfecto. El error es silencioso en UI —solo visible en consola.

---

## 5B VALIDACIÓN interpretacion.yaml

### 5B.1 Estructura mínima

El archivo debe incluir:

[ ] version
[ ] id
[ ] leaf_id
[ ] nombre.es / nombre.en
[ ] scope
[ ] ui
[ ] dependencies
[ ] global_context
[ ] result_blocks
[ ] targets
[ ] cross_checks
[ ] error_patterns
[ ] graph_binding
[ ] mini_graph
[ ] output_contract

### 5B.2 Cobertura funcional

[ ] cubre todas las magnitudes objetivo calculables del leaf
[ ] incluye lectura por signo / cero / módulo cuando aplique
[ ] incluye coherencia física
[ ] incluye validez del modelo
[ ] incluye lectura gráfica
[ ] incluye errores probables del alumno
[ ] incluye siguiente paso didáctico

### 5B.3 Coherencia transversal

[ ] usa ids de fórmulas reales de formulas.yaml
[ ] usa magnitudes reales de magnitudes.yaml
[ ] no contradice teoria.md ni modelos.md
[ ] no duplica teoría larga: interpreta resultados concretos

### 5B.4 Reglas por target

Para cada target definido en `targets`:

[ ] magnitude_type
[ ] semantic_role
[ ] summary_rules
[ ] physical_reading_rules
[ ] coherence_rules
[ ] model_validity_rules
[ ] graph_rules
[ ] likely_errors
[ ] next_step_rules

### 5B.5 Coherencia de dependencias

[ ] dependencies.formulas referencia ids reales
[ ] dependencies.magnitudes referencia ids reales
[ ] los targets de interpretacion.yaml existen en formulas.yaml o magnitudes.yaml según corresponda
[ ] la convención de ids coincide exactamente con la del leaf (`rcm` no mezclado con `r_cm`, etc.)

### 5B.6 Calidad funcional reforzada

[ ] los `when` son evaluables
[ ] los `detect_when` son evaluables
[ ] el archivo no contiene teoría repetida
[ ] los mensajes dependen del resultado real
[ ] puede producir salida breve e integrada
[ ] puede producir salida desarrollada en tab/panel

Regla crítica:

Si interpretacion.yaml no depende del resultado calculado, el leaf no supera 4.7.

### 5B.7 Scope del motor en condiciones `when:` (CRÍTICO — fallo más frecuente)

Las condiciones `when:` solo pueden referenciar variables disponibles en el scope
del motor en el momento de evaluar ese target concreto.

El scope contiene ÚNICAMENTE:

- el resultado: disponible como `result` y como `[id_del_target]`
  (ej: si target = `a_rel`, entonces `a_rel` está en scope)
- los inputs del rearrangement activo: las otras variables del despeje
  (ej: para `a_rel = a_A - a_B`, están disponibles `a_A` y `a_B`)
- funciones matemáticas: `abs`, `min`, `max`, `round`, `floor`, `ceil`, `sqrt`, `pow`, `PI`

NO están en scope:

- variables de otros rearrangements o de otras fórmulas
- magnitudes de `magnitudes.yaml` no presentes en el despeje activo
- variables rotacionales (`omega`, `r`, etc.) si la fórmula activa es traslacional
- el target de un despeje desde el punto de vista de otro despeje distinto
  (ej: `a_rel` no está disponible cuando el target es `F_ficticia`)

Protocolo de validación (obligatorio para cada target):

1. Identificar el rearrangement activo para ese target en `formulas.yaml`
2. Listar sus inputs (las variables del lado derecho de la ecuación)
3. Para cada `when:` del target, verificar que todos sus identificadores
   están en `{ [id_target], inputs, abs, min, max, round, floor, ceil, sqrt, pow, PI }`
4. Si algún identificador no está → `when: "false"` explícito si la regla no aplica,
   o reescribir la condición usando solo variables disponibles

[ ] todos los `when:` de `summary_rules` usan solo variables en scope
[ ] todos los `when:` de `physical_reading_rules` usan solo variables en scope
[ ] todos los `when:` de `coherence_rules` usan solo variables en scope
[ ] todos los `when:` de `model_validity_rules` usan solo variables en scope
[ ] se ha identificado el rearrangement activo de cada target antes de escribir sus reglas

### 5B.8 Disparo garantizado

[ ] cada target tiene al menos una regla con `when: "true"` como fallback final
    en **cada una de las 7 secciones** (`summary_rules`, `physical_reading_rules`,
    `coherence_rules`, `model_validity_rules`, `graph_rules`, `likely_errors`,
    `next_step_rules`), garantizando que siempre se muestra algo tras calcular
[ ] cuando una regla no puede aplicarse por el rearrangement activo, se marca
    `when: "false"` de forma explícita — nunca se deja con condición inalcanzable

Verificación automatizable con: `python audit_dinamica.py`

Regla crítica:

Si un target carece de regla fallback y todas sus condiciones `when:` son imposibles
para el rearrangement activo, el usuario obtendrá un panel de interpretación vacío
sin ningún error visible. Este fallo es silencioso y solo detectable auditando el
scope del motor manualmente. Debe prevenirse en el YAML, no en el frontend.

---

## 6 VALIDACIÓN modelos.md

[ ] modelo ideal explicado
[ ] hipótesis enumeradas
[ ] dominio de validez cuantitativo
[ ] señales de fallo del modelo
[ ] comparación con otro modelo
[ ] cumple con la estructura obligatoria (títulos y subtítulos)
[ ] cumple reglas de densidad de texto

---

## 7 VALIDACIÓN errores.md

Para cada error:

[ ] descripción clara
[ ] por qué ocurre
[ ] cómo detectarlo
[ ] cómo corregirlo
[ ] cumple con la estructura obligatoria (títulos y subtítulos)
[ ] cumple reglas de densidad de texto

Si solo lista errores → Nivel 2.

---

## 8 VALIDACIÓN ejemplos.md

Debe existir:

[ ] ejemplo tipo examen
[ ] ejemplo aplicado real

Cada ejemplo incluye:

[ ] definición del sistema
[ ] datos dados
[ ] modelo elegido
[ ] justificación del modelo
[ ] resolución simbólica
[ ] sustitución numérica
[ ] validación dimensional
[ ] interpretación física
[ ] cumple reglas de densidad de texto
[ ] cumple con la estructura obligatoria (títulos y subtítulos)

---

## 9 VALIDACIÓN aplicaciones.md

Cada aplicación debe incluir:

[ ] contexto real
[ ] modelo físico
[ ] hipótesis
[ ] variable dominante
[ ] limitaciones
[ ] cumple reglas de densidad de texto
[ ] cumple con la estructura obligatoria (títulos y subtítulos)

---

## 10 VALIDACIÓN historia.md

[ ] problema histórico
[ ] qué no se entendía antes
[ ] qué cambió
[ ] evolución conceptual
[ ] conexión con física moderna
[ ] cumple reglas de densidad de texto
[ ] cumple con la estructura obligatoria (títulos y subtítulos)

---

## 11 VALIDACIÓN GRÁFICOS

Plantilla obligatoria asociada:

[ ] se ha aplicado `docsV2/plantilla_y_checklist/plantilla_graficos_v5.md`
[ ] el leaf no declara gráficos fuera de ese estándar

### 11.1 Nivel 4 obligatorio

[ ] cada gráfico responde a una pregunta
[ ] DCL correcto
[ ] SVG describe fenómeno
[ ] Coord muestra métricas
[ ] ejes con unidades
[ ] coherencia con fórmulas

### 11.2 Nivel 4+ opcional

[ ] modo seguir calculadora
[ ] modo experimentar
[ ] controles play/pause
[ ] análisis de sensibilidad

### 11.2B Infraestructura común obligatoria (CRÍTICO)

[ ] los wrappers nuevos usan `frontend/src/v2/components/graphs/graphFactories.jsx`
[ ] los gráficos Svg usan `createSvgGraph(...)` cuando el caso está cubierto
[ ] los gráficos Dcl usan `createDclGraph(...)` cuando el caso está cubierto
[ ] los gráficos Coord usan `createCoordGraph(...)` o `createCoordGraphPage(...)` cuando el caso está cubierto
[ ] no se han dejado placeholders en lugar de wrappers operativos
[ ] no se han creado wrappers ad hoc duplicando código antiguo cuando la plantilla común lo cubre

### 11.2C Profile SVG propio del leaf (CRÍTICO — rechazo duro)

[ ] el profile SVG NO usa `...baseProfile` spread sin sobrescribir `render`, `params.schema` y `motion`
[ ] `params.schema` contiene los sliders propios de la física del leaf (no los de otro leaf)
[ ] `derivations` calcula las magnitudes reales que el leaf necesita
[ ] `motion.state` anima la física real del leaf
[ ] `render` dibuja la escena correcta para el leaf (no una escena genérica o de otro leaf)
[ ] `graph_contract.expectedInputs` corresponde a los inputs reales del profile
[ ] `interpretation_binding.stateOut` lista las magnitudes que el render realmente expone

### 11.3 Integración con interpretación

[ ] el gráfico puede recibir el resultado de la calculadora
[ ] la lectura gráfica no contradice interpretacion.yaml
[ ] si existe lectura gráfica inline, refleja el target calculado
[ ] la convención de signos y ejes coincide entre gráfico, fórmula e interpretación

Regla crítica:

Sin integración cálculo → interpretación → gráfico no hay Nivel 5 completo con gráficos.

### 11.4 Coherencia física de escena DCL (CRÍTICO)

La escena (`scene`) del profile DCL determina la geometría renderizada y las fuerzas
físicamente admisibles. Usar una escena incompatible produce incoherencias visuales
silenciosas (sin error de consola).

| Escena | Cuándo usar | Fuerzas válidas |
|---|---|---|
| `PARTICLE_FREE` | masa suspendida, sin apoyo | Peso, Tensión, F_aplicada, F_ficticia |
| `BLOCK_ON_TABLE` | bloque sobre superficie horizontal | Peso, Normal, Rozamiento, F_aplicada, F_ficticia |
| `BLOCK_ON_INCLINE` | bloque en plano inclinado | Peso, Normal (⊥ plano), Rozamiento |
| `HANGING_MASS` | masa colgante de cuerda | Peso, Tensión |
| `TWO_MASSES_ROPE` | dos masas horizontales (colisiones, tensión) | Peso, Normal, Impulso, F_aplicada, Velocidad |
| `PULLEY_SIMPLE` | polea ideal con dos masas | Peso, Tensión |

> CUSTOM no está en `DCL_SCENE_REGISTRY` → crash si se usa con `createDclGraph`.

[ ] la escena elegida justifica todas las fuerzas mostradas
    (ej: Normal solo es coherente en escenas con superficie: `BLOCK_ON_TABLE`, `BLOCK_ON_INCLINE`)
[ ] `kind` del cuerpo coincide con los `bodyKinds` permitidos por la escena
    (`PARTICLE_FREE` → `POINT/MASS`; `BLOCK_ON_TABLE` → `BLOCK`)
[ ] si el leaf trata sistemas no inerciales con Normal + Peso + F_ficticia,
    la escena es `BLOCK_ON_TABLE` (no `PARTICLE_FREE`)
[ ] si se muestra a_marco como contexto, aparece como vector de tipo `ACCELERATION`
    (punteado automáticamente) con `derived: true` para diferenciarlo de fuerzas reales

Regla crítica:

`PARTICLE_FREE` + Normal es incoherente: una partícula libre no tiene contacto.
No produce error de consola — el error es exclusivamente físico y visual.

### 11.5 Sincronización mapa ↔ meta ↔ archivo ↔ index (CRÍTICO)

Esta comprobación garantiza que los gráficos declarados en `phyxio-map.yaml`
coincidan con lo declarado en `meta.yaml`, con los archivos físicos en disco
y con el registro en `dinamica/index.js`.

Verificación automatizable con: `python audit_dinamica.py`

[ ] `graficos` en `meta.yaml` coincide exactamente con `graficos` en `phyxio-map.yaml`
    (mismos tipos, mismo casing: `Coord`, `Dcl`, `Svg` — no `COORD`, `DCL`, `SVG`)
[ ] por cada tipo declarado en `graficos`, existe el archivo en su carpeta:
    - `Coord` → `dinamica/Coord/{PascalCase}GraphsCoord.jsx`
    - `Dcl`   → `dinamica/Dcl/{leaf-id}-dcl.jsx`
    - `Svg`   → `dinamica/Svg/{PascalCase}GraphsSvg.jsx`
[ ] el leaf-id está registrado en `dinamica/index.js` (entrada activa, no comentada)
[ ] por cada tipo declarado, el index exporta el componente correspondiente
    (key `Coord`, `Dcl` o `Svg` dentro de la entrada del leaf-id en `graphs`)
[ ] el archivo importado en index.js existe físicamente en disco
[ ] si el gráfico es nuevo, su wrapper parte de las plantillas operativas de `frontend/src/v2/components/graphs/_templates`

### 11.6 Campos de interpretación vinculados a gráficos (CRÍTICO)

[ ] `interpretacion.graph_binding` está presente en `interpretacion.yaml`
[ ] `interpretacion.graph_binding.enabled: true` cuando el leaf tiene gráficos
    en `phyxio-map.yaml` (si el leaf tiene `graficos: []` puede ser `false`)
[ ] `interpretacion.mini_graph` está presente y configurado
[ ] `interpretacion.output_contract` está presente
[ ] todos los targets tienen `when: "true"` fallback en las 7 secciones de reglas:
    `summary_rules`, `physical_reading_rules`, `coherence_rules`,
    `model_validity_rules`, `graph_rules`, `likely_errors`, `next_step_rules`
    (verificar con `python audit_dinamica.py` antes de commit)

---

## 12 VALIDACIÓN TRANSVERSAL

[ ] coherencia con arquitectura conceptual
[ ] lenguaje consistente
[ ] no hay tabs idénticos
[ ] no aparece palabra leaf
[ ] codificación UTF-8 correcta

---

## 13 VALIDACIÓN BILINGÜE

### 13.1 Estructura

[ ] un solo árbol físico
[ ] markdown duplicado
[ ] YAML bilingüe

### 13.2 Campos bilingües

[ ] meta.yaml bilingüe
[ ] magnitudes.yaml bilingüe
[ ] formulas.yaml bilingüe
[ ] interpretacion.yaml bilingüe

### 13.3 Nivel 4 inglés

[ ] inglés natural técnico
[ ] sin español incrustado
[ ] sin spanglish
[ ] coherente con phyxio-map.yaml

---

## 14 CONTROL ANTI-MOJIBAKE

Debe ejecutarse:

npm --prefix frontend run check:mojibake
npm --prefix frontend run check:mojibake:staged

Y comprobar:

[ ] sin caracteres corruptos

---

## 15 VALIDACIÓN FUNCIONAL DEL FRONTEND

### 15.1 Carga y render

[ ] carga correcta ES/EN
[ ] breadcrumbs correctos
[ ] render matemático correcto
[ ] calculadoras funcionales
[ ] interpretación funcional
[ ] gráficos correctos
[ ] coherencia entre resultado calculado, interpretación y gráfico

### 15.2 Integración de archivos comunes

[ ] `contentLoaderV2` carga `interpretacion.yaml`
[ ] `V2LeafPage` pasa `interpretacionDoc`
[ ] `V2LeafTabs` detecta y renderiza el tab de interpretación
[ ] `CalculatorV2` recibe `interpretacionDoc` y muestra interpretación inline
[ ] `CalculatorV2` recibe `leafMeta` si el motor lo usa
[ ] `GraphPageV2` recibe `interpretacionDoc` y `meta`
[ ] `GraphPageV2` recibe `lang` si renderiza textos bilingües
[ ] `InterpretationPanelV2` existe y renderiza el payload completo
[ ] el motor `interpretationEngine` se importa desde una ruta real
[ ] no hay imports rotos de `InterpretationPanelV2`
[ ] no hay props declarados que luego no se pasen desde el padre

### 15.3 Flujo mínimo funcional de interpretación

[ ] calcular un resultado genera payload interpretativo
[ ] el payload inline de calculadora no queda vacío cuando hay target válido
[ ] el tab de interpretación muestra secciones reales
[ ] la lectura gráfica aparece cuando el gráfico tiene acceso al cálculo
[ ] `__calc` viaja correctamente por `sharedParams` o `paramsIn`
[ ] cambiar el target recalcula también la interpretación

---

## 15B VALIDACIÓN SEMÁNTICA DE INTERPRETACIÓN

[ ] los campos de formulas.yaml no son decorativos
[ ] los campos de magnitudes.yaml no son genéricos
[ ] interpretacion.yaml usa ids reales de formulas y magnitudes
[ ] el resultado calculado activa reglas de interpretación
[ ] existen mensajes reales en summary
[ ] existen mensajes reales en coherence
[ ] existen mensajes reales en likely_errors cuando procede
[ ] las condiciones (when/detect_when) son evaluables
[ ] la interpretación no repite teoría, interpreta resultado

### Integración real

[ ] la calculadora muestra interpretación inline
[ ] el tab de interpretación muestra contenido estructurado
[ ] el gráfico (si existe) refleja el resultado
[ ] la interpretación gráfica es coherente con el resultado

Regla crítica:

Si la interpretación no depende del resultado calculado, el leaf no supera 4.7.

---

## 16 VALIDACIÓN ORTOGRÁFICA

[ ] ortografía correcta ES
[ ] ortografía correcta EN
[ ] terminología consistente

---

## 17 CRITERIO FINAL

Un leaf puede marcarse Nivel 4 cuando:

[ ] estructura completa
[ ] teoría profunda
[ ] interpretacion.yaml completo y coherente
[ ] dominio de validez
[ ] interpretación física
[ ] coherencia simbólica
[ ] bilingüe correcto
[ ] pasa control anti-mojibake
[ ] pasa validación funcional
[ ] se han revisado todos y cada uno de los 16 archivos

Para marcarse como **Nivel 4.7 sin gráficos** además debe cumplir:

[ ] semántica operativa real en formulas.yaml
[ ] semántica operativa real en magnitudes.yaml
[ ] interpretación inline funcional
[ ] tab de interpretación operativo
[ ] el resultado calculado activa mensajes reales
[ ] sin inconsistencias de ids entre meta, magnitudes, fórmulas e interpretación

Para marcarse como **Nivel 5 blindado con gráficos** además debe cumplir:

[ ] integración funcional completa de interpretación en frontend
[ ] interpretación inline en calculadora operativa
[ ] tab de interpretación operativo
[ ] lectura gráfica coherente cuando exista soporte gráfico
[ ] coherencia cálculo → interpretación → gráfico
[ ] sin inconsistencias de ids entre meta, magnitudes, fórmulas, interpretación y gráficos
[ ] cumplimiento completo de `docsV2/plantilla_y_checklist/plantilla_graficos_v5.md`

## 18 REGLA DE CALIDAD ESTRUCTURAL REAL

Un leaf no puede considerarse Nivel 5 si:

[ ] podría eliminarse interpretacion.yaml sin afectar al funcionamiento
[ ] formulas.yaml no permite generar interpretación automática
[ ] magnitudes.yaml no aporta semántica interpretativa real
[ ] el frontend no usa activamente la interpretación

Nivel 5 implica:

[ ] estructura
[ ] semántica
[ ] ejecución
