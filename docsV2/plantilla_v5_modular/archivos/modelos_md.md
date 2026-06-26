# 13. modelos.md

**REGLA DE RENDER MATEMÁTICO — OBLIGATORIA EN ESTE ARCHIVO**:

El validador escanea TODAS las líneas de `modelos.md` y `modelos.en.md`. Las secciones de modelos son especialmente propensas a introducir ecuaciones que el validador rechaza:

- **`## Hipótesis`**: NUNCA escribir condiciones como `ESR = 0`, `tanδ = 0`, `ESL = 0`. ❌ `el factor de disipación tanδ = 0` → ✅ "sin pérdidas dieléctricas (factor de disipación nulo)".
- **`## Dominio de validez cuantitativo`**: Las desigualdades con `\(...\)` que contienen `=` son rechazadas. ❌ `\(f \ll f_r = 1/(2\pi\sqrt{LC})\)` → ✅ `\(f \ll f_r\)` (sin definir `f_r` con `=` en el mismo fragmento LaTeX); o reescribir en prosa.
- **`## Comparación operativa` (tabla)**: Las celdas con ecuaciones como `Q = C·V`, `Z = 1/(jωC)`, `E = (1/2)·C·V²` son rechazadas aunque estén en celdas de tabla. Reemplazar por descripciones verbales: "relación lineal carga-tensión", "impedancia inversamente proporcional a la frecuencia".
- **`## Modelo extendido`**: Las ecuaciones de impedancia como `Z = ESR + j(\omega ESL - 1/(\omega C))` son rechazadas. Describir verbalmente la estructura del modelo sin escribir la ecuación completa.
- **`\(...\)` con `=`**: PROHIBIDO. Solo se permite LaTeX inline sin signo `=`.

---

Longitud mínima total:

Rango ideal total: 400 – 750 palabras
- Párrafos ágiles: Ningún párrafo debe superar las 4 o 5 líneas de lectura.

Desglose:

5 secciones × 100 – 150 palabras

Estructura obligatoria exacta (modelos.md — ESPAÑOL):

## Modelo ideal
## Hipótesis
## Dominio de validez cuantitativo
## Señales de fallo del modelo
## Modelo extendido o alternativo
## Comparación operativa

Estructura obligatoria exacta (modelos.en.md — INGLÉS):

**CRÍTICO**: Las cabeceras de `modelos.en.md` deben ser exactamente las siguientes cadenas (ver `MODELOS_SECTIONS_EN` en `_core.py`):

## Ideal model
## Hypotheses
## Quantitative validity domain
## Model failure signals
## Extended or alternative model
## Operational comparison

<!-- EXTRACT-HEADINGS-ES: Modelo ideal, Hipótesis, Dominio de validez cuantitativo, Señales de fallo del modelo, Modelo extendido o alternativo, Comparación operativa -->
<!-- EXTRACT-HEADINGS-EN: Ideal model, Hypotheses, Quantitative validity domain, Model failure signals, Extended or alternative model, Operational comparison -->

**REGLA DE RECHAZO DURO — Cabeceras en inglés para modelos.en.md**:
- ❌ `## Dominio de validez cuantitativo` en `.en.md` → usar `## Quantitative validity domain`
- ❌ `## Señales de fallo del modelo` en `.en.md` → usar `## Model failure signals`
- ❌ `## Hipótesis` en `.en.md` → usar `## Hypotheses`
- ❌ `## Comparación operativa` en `.en.md` → usar `## Operational comparison`

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

**REGLA DE RECHAZO DURO — Patrón cuantitativo detectado por el validador**:

El validador (`validate_modelos_cuantitativo` y `validate_modelos_reinforced`) busca literalmente en el texto de `## Dominio de validez cuantitativo` alguno de estos patrones:

- `número < ` o `número > ` (número seguido de operador comparación, ej: `1 MHz <`)
- `< número` o `> número` (operador seguido de número, ej: `< 10⁻¹⁰ m`)
- `número %` (porcentaje)
- la frase literal `orden de magnitud` (sin tilde en "orden")

**Ejemplos que PASAN:**
```
- La aproximación es válida para r > 2.8×10⁻¹⁵ m (radio del electrón clásico).
- Frecuencias por debajo de 1 MHz < f_critica para dimensiones de laboratorio.
- Las corrientes deben ser menores de 10 A para evitar el régimen no lineal.
- El error relativo es inferior al 1 % cuando la resistencia interna es despreciable.
```

**Ejemplos que FALLAN (solo prosa sin número+desigualdad):**
```
❌ "Las cargas están en reposo o se mueven muy lentamente en comparación con la velocidad de la luz"
❌ "Las distancias son mucho mayores que el radio del electrón clásico (aprox. 2.8×10⁻¹⁵ m)"
```
La segunda frase tiene un número pero NO tiene el operador `<` o `>` directamente adyacente: necesita escribirse como `r > 2.8×10⁻¹⁵ m` para que el regex lo detecte.

## Señales de fallo del modelo
- síntomas físicos, gráficos o numéricos observables que delatan que el modelo ya no aplica
- no una frase genérica: cada señal debe ser algo que el alumno pueda buscar en sus datos

## Modelo extendido o alternativo
- extensión del modelo ideal hacia datos reales, tramos, ruido o complejidad
- diferencia concreta respecto al modelo ideal
- transición explícita: cuándo conviene abandonar el modelo ideal y pasar al extendido

**Regla de transición — OBLIGATORIO para pasar la validación**:

La sección debe contener al menos una frase que use explícitamente alguno de estos patrones de vocabulario (el validador los busca literalmente):

| Vocabulario aceptado (es) | Vocabulario aceptado (en) |
|---|---|
| `cuando conviene` | `when to switch` |
| `transición` / `transicion` | `transition to` |
| `pasar al` | `switch to` |
| `cambiar a` | `when to use` |

Frases típicas válidas:
- "La transición al modelo extendido conviene cuando la frecuencia supera los 50 Hz."
- "Cuando conviene pasar al modelo trifásico: instalaciones con cargas desequilibradas."
- "Cambiar a este modelo cuando la resistencia interna del generador no sea despreciable."

Frases **inválidas** aunque sean semánticamente correctas (el validador las rechaza):
- ❌ "Se recomienda usar el modelo extendido para instalaciones industriales."
- ❌ "El modelo alternativo resulta más adecuado en circuitos no lineales."
- ❌ "Para mayor precisión, emplear el modelo complejo."

**REGLA DE ORDEN GRAMATICAL — CRÍTICO:**

El validador busca los patrones literales con una búsqueda de subcadena. El orden de las palabras importa:

| ✅ Válido (patrón encontrado) | ❌ Inválido (patrón no encontrado) |
|---|---|
| `"cuando conviene pasar al modelo..."` | `"La transición conviene cuando..."` |
| `"Cuando conviene cambiar a este modelo..."` | `"El modelo alternativo conviene cuando..."` |
| `"transición al modelo extendido"` | `"conviene cuando r/λ < 10"` (si `cuando conviene` no aparece también) |
| `"pasar al modelo dispersivo"` | |

La subcadena buscada es `cuando\s+conviene` (cuando + espacio(s) + conviene). Si la frase dice `"conviene cuando"` (orden invertido), el validador **no la detecta**.

**Formulación canónica recomendada:**
```
"Cuando conviene pasar al modelo extendido: [condición A]; cuando [condición B], cambiar a [modelo C]."
```

Si no puedes usar ninguno de esos patrones de forma natural, reformula con: *"Cuando conviene pasar al modelo [X]: [condición]."*


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