> **Función**: Puesta en práctica de la teoría y fórmulas.
> **Relaciones**: Requiere uso obligatorio de magnitudes núcleo (`magnitudes.yaml`) y fórmulas núcleo (`formulas.yaml`). Paridad estricta con `ejemplos.en.md`.

---

# 17. ejemplos.md

- Párrafos ágiles: Ningún párrafo debe superar las 4 o 5 líneas de lectura.
Debe contener exactamente:

- 1 ejemplo tipo examen
- 1 ejemplo aplicado real

Estructura obligatoria exacta (ejemplos.md — ESPAÑOL):

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

<!-- EXTRACT-HEADINGS-ES: Ejemplo tipo examen, Enunciado, Datos, Definición del sistema, Modelo físico, Justificación del modelo, Resolución simbólica, Sustitución numérica, Validación dimensional, Interpretación física, Ejemplo de aplicación real, Contexto, Estimación física, Interpretación -->

**REGLA DE RECHAZO DURO**: Si los títulos H1 no coinciden EXACTAMENTE con:
- `# Ejemplo tipo examen` (no "Ejemplo tipo Examen", no "Ejemplo de examen")
- `# Ejemplo de aplicación real` (no "Ejemplo aplicado real", no "Ejemplo práctico")

El validador marcará fallo de estructura obligatoria y el leaf no pasará Nivel 4.7+.

---

Estructura obligatoria exacta (ejemplos.en.md — INGLÉS):

**CRÍTICO**: `ejemplos.en.md` usa cabeceras completamente en INGLÉS. Las cabeceras en español en el archivo `.en.md` causan que el validador reporte todas las secciones como vacías (palabras=0).

**Exam-type example:**

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

**Real-world example:**

```
# Real-world example

## Context
## Physical estimation
## Interpretation
```

<!-- EXTRACT-HEADINGS-EN: Exam-type example, Problem statement, Data, System definition, Physical model, Model justification, Symbolic solution, Numerical substitution, Dimensional validation, Physical interpretation, Real-world example, Context, Physical estimation, Interpretation -->

**REGLA DE RECHAZO DURO — Cabeceras en inglés**:
- ❌ `# Ejemplo tipo examen` en `ejemplos.en.md` → RECHAZADO
- ❌ `## Enunciado`, `## Datos`, `## Definición del sistema` en `.en.md` → RECHAZADO (el validador reporta secciones vacías)
- ✅ `# Exam-type example` en `ejemplos.en.md`
- ✅ `## Problem statement`, `## Data`, `## System definition`, etc.

Las cabeceras del `.en.md` deben ser **exactamente** las cadenas del validador (ver `EJEMPLOS_SECTIONS_EN` en `_core.py`).

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

2. **Uso de fórmulas núcleo del leaf**: El validador busca **CADA** fórmula de `formulas.yaml` en el blob `## Resolución simbólica` + `## Sustitución numérica` (concatenación exacta). **REGLA DE RECHAZO DURO**:
   - Cada fórmula núcleo debe aparecer mediante `{{f:id_formula}}` en `## Resolución simbólica` **O** en `## Sustitución numérica`.
   - ❌ Colocar `{{f:id_formula}}` solo en `## Interpretación física` → el validador NO lo detecta, falla igualmente.
   - ❌ Colocar `{{f:id_formula}}` solo en `## Physical interpretation` → ídem en inglés.
   - ✅ Colocar `{{f:segunda_formula}}` en `## Resolución simbólica` inmediatamente después de la primera fórmula, con una frase de conexión física.
   - Si el leaf tiene 2 fórmulas (`fuerza_coulomb` y `campo_electrico_coulomb`), **ambas** deben aparecer en `## Resolución simbólica` o `## Sustitución numérica`.

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

6. **Desglose de unidades SI con `X = tipo·unidades`**: El validador detecta el patrón `variable_corta = expresión_con_letras` como "formula textual inválida":
   ```
   ❌ H = kg·m²·A⁻²·s⁻²  (H es variable corta, kg·m²·A⁻²·s⁻² tiene letras)
   ❌ F = kg⁻¹·m⁻²·A²·s⁴
   ```
   → **Corrección**: Describir la dimensión en prosa sin usar `=`:
   ```md
   ✅ Expresando la dimensión de [[mu0]] (henrios por metro) en unidades SI fundamentales,
      el producto (H/m)·(F/m) resulta ser s²/m², cuya raíz inversa es m/s ✓
   ```
   La regla del validador: cualquier patrón `[A-Za-z]{1,3} = [expresión con letras]` fuera de delimitadores LaTeX se rechaza. Para validación dimensional, **siempre usar prosa descriptiva, nunca ecuaciones con `=`**.

7. **Conversión de unidades en prosa con `X = Y`**: Escribir `10 MV/m = 10 000 kV/m` en una frase de texto también activa el detector de formula textual inválida, porque el patrón es `token = token_con_letras`:
   ```
   ❌ La tensión de ruptura es 10 MV/m = 10 000 kV/m.
   ❌ The breakdown field is 10 MV/m = 10 000 kV/m.
   ```
   → **Corrección**: usar "equivalente a", "es decir", "que corresponde a" o "o lo que es lo mismo":
   ```md
   ✅ La tensión de ruptura del material es 10 MV/m, equivalente a 10 000 kV/m.
   ✅ The breakdown field is 10 MV/m, equivalent to 10 000 kV/m.
   ```

8. **Descomposición dimensional de unidades compuestas con `X = kg·...`**: Escribir `V = kg·m²·A⁻¹·s⁻³` en prosa activa el mismo detector:
   ```
   ❌ La tensión tiene dimensión V = kg·m²·A⁻¹·s⁻³
   ❌ Voltage has dimension V = kg·m²·A⁻¹·s⁻³
   ```
   → **Corrección**: separar nombre de la unidad de su descomposición sin `=`:
   ```md
   ✅ El voltio se descompone en kg·m²·A⁻¹·s⁻³; dividido entre metros resulta kg·m·A⁻¹·s⁻³.
   ✅ The volt decomposes into kg·m²·A⁻¹·s⁻³; divided by metres this yields kg·m·A⁻¹·s⁻³.
   ```
   El truco: **nunca poner la abreviatura de la unidad antes del `=`**. Usar "se descompone en", "decomposes into", "equivale a" o "yields".

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

9. **Asignaciones variable = valor en Enunciado y Datos**: El validador `find_bare_formula_issues` escanea TODAS las líneas, incluyendo `## Enunciado`, `## Problem statement`, `## Data` y `## Datos`. El regex detecta cualquier patrón `[1-3 letras] = [expresión con letras]`, por ejemplo `R = 0.15 m` (donde `m` es letra) o `Q = 4.8 μC` (donde `μ` y `C` son letras). **RECHAZADO en enunciado y datos**.

   - ❌ `- Sphere radius: R = 0.15 m` → tiene `R = 0.15 m` con letra `m`
   - ❌ `- Radio de la esfera: R = 0.15 m` → ídem
   - ❌ `Q = 4.8 μC distributed uniformly` → tiene `Q = ...C`
   - ❌ `r = 5 mm = 5×10⁻³ m` → doble `=` con letras

   **Corrección**: reescribir los datos con dos puntos o con prosa sin `=`:
   - ✅ `- Sphere radius: 0.15 m`
   - ✅ `- Radio de la esfera: 0.15 m`
   - ✅ `- Total charge: 4.8 μC (uniformly distributed throughout the volume)`
   - ✅ `r de 5 mm, equivalente a 5×10⁻³ m`

   El enunciado debe describir los datos sin usar asignaciones simbólicas con `=`. Los datos se listan con formato `- Nombre: valor unidad` (sin el símbolo de la variable antes del `=`).

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