> **Función**: Desarrollo conceptual, matemático y estructural del concepto físico en español.
> **Relaciones**: Mantiene paridad con `teoria.en.md`. Inyecta fórmulas de `formulas.yaml`.

---

# 11. teoria.md

Longitud obligatoria total:

1200 – 2000 palabras

**REGLA DE RECHAZO DURO - Longitud máxima:**

- teoria.md debe tener **<= 2000 palabras**
- teoria.en.md debe tener **<= 2000 palabras**
- El validador rechazará archivos que excedan este límite
- Si el contenido excede 2000 palabras, se debe condensar eliminando redundancias y prosa innecesaria

**PRESUPUESTO ORIENTATIVO POR SECCIÓN (para no exceder 2000 palabras en total):**

| Sección | Palabras máx. orientativas |
|---|---|
| Contexto conceptual | 120 |
| Nivel esencial | 150 |
| Nivel formal | 300 |
| Nivel estructural | 400 |
| Interpretación física profunda | 180 |
| Orden de magnitud | 100 |
| Método de resolución personalizado | 150 |
| Casos especiales y ejemplo extendido | 200 |
| Preguntas reales del alumno | 200 |
| Conexiones transversales y rutas de estudio | 100 |
| Síntesis final | 80 |

Antes de escribir cada sección, llevar un contador mental acumulado. Si al terminar el Nivel estructural ya se superaron 1000 palabras, el resto de secciones debe ser breve. **No añadir más contenido para llegar a 2000 — la cota es un máximo, no un objetivo.**

<!-- EXTRACT-HEADINGS-ES: Título del subtema, Contexto conceptual, 🟢 Nivel esencial, 🔵 Nivel formal, 🔴 Nivel estructural, Interpretación física profunda, Orden de magnitud, Método de resolución personalizado, Casos especiales y ejemplo extendido, Preguntas reales del alumno, Conexiones transversales y rutas de estudio, Síntesis final -->
<!-- EXTRACT-HEADINGS-EN: Título del subtema (en inglés), Conceptual context, 🟢 Essential level, 🔵 Formal level, 🔴 Structural level, Deep physical interpretation, Order of magnitude, Custom resolution method, Special cases and extended example, Real student questions, Transversal connections and study routes, Final synthesis -->

Estructura obligatoria exacta (teoria.md — ESPAÑOL):

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

Estructura obligatoria exacta (teoria.en.md — INGLÉS):

**CRÍTICO**: Las cabeceras de `teoria.en.md` deben ser exactamente las siguientes cadenas (ver `THEORY_SECTIONS_EN` en `_core.py`):

# Título del subtema (en inglés)

## Conceptual context
## 🟢 Essential level
## 🔵 Formal level
## 🔴 Structural level
## Deep physical interpretation
## Order of magnitude
## Personalized resolution method
## Special cases and extended example
## Real student questions
## Cross-cutting connections and study paths
## Final synthesis

**REGLA DE RECHAZO DURO — Cabeceras EN exactas**:
- ❌ `## Contexto conceptual` en `.en.md` → usar `## Conceptual context`
- ❌ `## Nivel esencial` en `.en.md` → usar `## 🟢 Essential level` (con emoji)
- ❌ `## Nivel formal` en `.en.md` → usar `## 🔵 Formal level` (con emoji)
- ❌ `## Nivel estructural` en `.en.md` → usar `## 🔴 Structural level` (con emoji)
- ❌ `## Interpretación física profunda` en `.en.md` → usar `## Deep physical interpretation`
- ❌ `## Orden de magnitud` en `.en.md` → usar `## Order of magnitude`
- ❌ `## Método de resolución personalizado` en `.en.md` → usar `## Personalized resolution method`
- ❌ `## Casos especiales y ejemplo extendido` en `.en.md` → usar `## Special cases and extended example`
- ❌ `## Preguntas reales del alumno` en `.en.md` → usar `## Real student questions`
- ❌ `## Conexiones transversales y rutas de estudio` en `.en.md` → usar `## Cross-cutting connections and study paths`
- ❌ `## Síntesis final` en `.en.md` → usar `## Final synthesis`

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
- **REGLA DE RECHAZO DURO — formal_formula_hits ≥ 2 (check learning_dynamics)**:

El validador comprueba que en `## 🔵 Nivel formal` / `## 🔵 Formal level` aparezcan referencias a **al menos 2 fórmulas del leaf** (via `{{f:id_formula}}`). Con una sola fórmula en `formulas.yaml` el check `learning_dynamics: nivel formal introduce relaciones matemáticas` falla automáticamente porque `formal_formula_hits < 2`.

Soluciones:
1. **Preferred**: Añadir una segunda fórmula derivada en `formulas.yaml` (p.ej. campo eléctrico, energía potencial, versión vectorial) e inyectarla en el nivel formal con `{{f:id_segunda_formula}}`.
2. Los rearrangements NO cuentan como fórmulas independientes — cada entrada top-level en `formulas.yaml` cuenta como 1.

**Ubicación EXCLUSIVA de fórmulas en teoría**: En `teoria.md` y `teoria.en.md`, las referencias `{{f:id_formula}}` deben aparecer **ÚNICAMENTE** en la sección `## 🔵 Nivel formal` / `## 🔵 Formal level`.
  - **PROHIBIDO** usar `{{f:id_formula}}` en otras secciones como `## Casos especiales`, `## Ejemplo extendido`, `## Síntesis final`, `## Preguntas reales`, etc.
  - En secciones fuera del Nivel formal, usar solo referencias a magnitudes `[[id_magnitud]]` para describir cálculos, nunca `{{f:id_formula}}`.
  - Ejemplo válido en caso práctico: "Para la potencia, elevar [[I]] al cuadrado y multiplicar por [[R]] da aproximadamente 13.31 W. Así [[P_joule]] ≈ 13.31 W." (sin usar `{{f:potencia_joule}}`)
  - No se permite repetir fórmulas en `## Síntesis final` / `## Final synthesis`, ni usarlas como cierre decorativo. La síntesis final debe cerrar comprensión conceptual, no reimprimir ecuaciones.
- En **Nivel esencial** debe evitarse el abuso matemático: la prioridad es la intuición física. En la práctica, no debe contener ecuaciones desarrolladas salvo una mención excepcional y muy justificada.

**REGLA DE RECHAZO DURO — Preguntas del alumno sin ecuaciones textuales:**

La sección `## Preguntas reales del alumno` (y su equivalente EN `## Real student questions`) está sujeta al mismo detector de fórmulas textuales que el resto del archivo. En particular:

- **PROHIBIDO** escribir ecuaciones físicas conocidas en el enunciado de la pregunta, aunque sean parte del enunciado literal del alumno.
  - ❌ `¿Por qué la fuerza es F = qE?` → `F = qE` contiene `=` entre variable y expresión → RECHAZADO
  - ❌ `if the force is F = qE` → ídem en inglés
  - ✅ `¿Por qué una carga sigue la línea de campo si la fuerza sobre ella es proporcional a [[E]]?`
  - ✅ `Why does a charge follow the field line if the force on it is proportional to [[E]]?`
- La regla se aplica incluso si la ecuación aparece dentro de la negrita del título de pregunta.

**REGLA DE RECHAZO DURO — Solo magnitudes declaradas en `magnitudes.yaml`:**

Toda referencia `[[id]]` en `teoria.md` y `teoria.en.md` debe tener su correspondiente entrada en `magnitudes.yaml`. Si se menciona una magnitud de otro leaf (e.g. `[[B]]`, `[[c]]`, `[[omega]]`) sin declararla en el propio `magnitudes.yaml`, el validador falla `markdown_entities: toda referencia [[id]] existe en magnitudes.yaml`.

- ✅ Opción 1: Declarar la magnitud en `magnitudes.yaml` con `physical_role: external_reference`.
- ✅ Opción 2: Reescribir la mención en prosa sin la etiqueta `[[id]]`.
- ❌ Usar `[[B]]` o cualquier otra magnitud no declarada localmente.

**REGLA DE RECHAZO DURO — Nivel esencial sin caracteres matemáticos:**

El validador escanea el texto extraído de `## 🟢 Nivel esencial` buscando literalmente los caracteres `=` y `^`. Si detecta alguno, falla el check `learning_dynamics: nivel esencial es conceptual (sin abuso matemático)`.

- ❌ `La onda se propaga a [[c]] = 3×10⁸ m/s` → contiene `=` → RECHAZADO
- ❌ `La energía es E₀² = ...` → contiene `^` en su forma ASCII → RECHAZADO
- ✅ `La onda se propaga a [[c]], aproximadamente trescientos millones de metros por segundo`
- ✅ `La energía es proporcional al cuadrado de la amplitud de [[E]]`

No escribas NINGUNA ecuación ni símbolo matemático con `=` o `^` en el nivel esencial, ni siquiera en fórmulas pasadas como ejemplo verbal.

**REGLA DE RECHAZO DURO — LaTeX inline prohibido con operadores matemáticos:**

El validador escanea TODOS los delimitadores `\(...\)` y `$...$` en el texto completo del archivo (no solo en el nivel formal). Si el contenido de un fragmento LaTeX contiene cualquiera de estos operadores:

```
=    <    >    \le    \ge    \leq    \geq    \neq    \approx
```

el check `render_math: sin riesgos de render matemático` falla con "formula inline invalida".

Esto se aplica fuera del `## 🔵 Nivel formal`, en particular en:
- `## 🔴 Nivel estructural` (expresiones como `\(v = c/n\)`, `\(n \approx 1.5\)`)
- `## Casos especiales y ejemplo extendido` (expresiones como `\(f = c/(2a)\)`, `\(v = c/1.5\)`)
- `## Preguntas reales del alumno` (expresiones como `\(\nabla \cdot \mathbf{E} = 0\)`)
- `## Interpretación física profunda`

**Corrección estándar**: reescribir en prosa descriptiva:

| ❌ Inválido (LaTeX con operador) | ✅ Válido (prosa) |
|---|---|
| `\(v = c/n\)` | `[[c]] dividida entre el índice de refracción` |
| `\(n \approx 1.5\)` | `el índice es aproximadamente 1.5` |
| `\(f = c/(2a)\)` | `[[c]] dividida entre el doble de la dimensión` |
| `\(\nabla \cdot \mathbf{E} = 0\)` | `la ley de Gauss sin cargas impone que [[E]] sea perpendicular...` |

Las únicas expresiones LaTeX inline permitidas fuera del nivel formal son fragmentos **sin operadores de igualdad/comparación**. El símbolo debe estar completamente solo, sin nada más dentro del delimitador.

**ATENCIÓN — Patrones concretos que el validador RECHAZA y que aparecen frecuentemente:**

| ❌ Patrón inválido (aunque parezca «solo símbolo») | ✅ Corrección en prosa |
|---|---|
| `\(\varepsilon_r \approx 80\)` | `permitividad relativa de aproximadamente 80` |
| `\(\varepsilon_r\)` **dentro de una frase descriptiva** | `la permitividad relativa del medio` |
| `\(\sim 1/r_{12}\)` | `la dependencia inversa con la distancia [[r_12]]` |
| `\(N(N-1)/2\)` | `N·(N−1)/2 términos` (texto plano con Unicode) |
| `\(1/r\)` (en contexto comparativo) | `una ley de inverso de la distancia` |
| `\(n \approx 1.5\)` | `el índice es aproximadamente 1.5` |

Regla práctica: si el LaTeX inline tiene más de un token (símbolo + operador + número, o símbolo + fracción), reescribirlo en prosa. Solo es válido un símbolo griego o latino completamente aislado: `\(\alpha\)`, `\(\mu_r\)`, `\(\varepsilon_r\)` — pero únicamente cuando no van seguidos de `\approx`, `=`, `<`, `>` ni ningún número.

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
- **RECHAZO DURO: el validador exige un mínimo estricto de 180 palabras en este nivel** — por debajo de 180 el check `cognitive_load: densidad distribuida razonablemente entre niveles` falla automáticamente
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