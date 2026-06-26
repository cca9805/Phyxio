# 21. historia.md

**REGLA DE RENDER MATEMÁTICO — OBLIGATORIA EN ESTE ARCHIVO**:

El validador escanea TODAS las líneas de `historia.md` y `historia.en.md`. Las secciones de historia a menudo referencian fórmulas físicas históricas que el validador rechaza si se escriben literalmente:

- **Referencias a fórmulas históricas**: ❌ `E = (1/2)·C·V²`, `u = (1/2)·ε·E²` → ✅ "la fórmula de energía almacenada con el factor 1/2", "la densidad de energía del campo eléctrico".
- **En `## Impacto en la física`**: Si se menciona que una fórmula fue derivada, describir el resultado verbal sin escribir la ecuación: ✅ "Maxwell estableció que la energía reside en el campo con una densidad proporcional al cuadrado del campo eléctrico y a la permitividad del medio".
- **En `## Conexión con física moderna`**: No incluir ecuaciones de dispositivos modernos. Describir la relación conceptual verbalmente.

---

Longitud mínima total:

300 palabras

Estructura obligatoria exacta (historia.md — ESPAÑOL):

## Problema histórico
## Dificultad conceptual previa
## Qué cambió
## Impacto en la física
## Conexión con física moderna

<!-- EXTRACT-HEADINGS-ES: Problema histórico, Dificultad conceptual previa, Qué cambió, Impacto en la física, Conexión con física moderna -->
<!-- EXTRACT-HEADINGS-EN: Historical problem, Prior conceptual difficulty, What changed, Impact on physics, Connection with modern physics -->

Estructura obligatoria exacta (historia.en.md — INGLÉS):

**CRÍTICO**: Las cabeceras de `historia.en.md` deben ser exactamente las siguientes cadenas (ver `HISTORIA_SECTIONS_EN` en `_core.py`):

## Historical problem
## Prior conceptual difficulty
## What changed
## Impact on physics
## Connection with modern physics

**REGLA DE RECHAZO DURO — Cabeceras en inglés para historia.en.md**:
- ❌ `## Conceptual difficulty beforehand` → usar `## Prior conceptual difficulty`
- ❌ `## Dificultad conceptual previa` en `.en.md` → RECHAZADO
- ❌ `## Impacto en la física` en `.en.md` → usar `## Impact on physics`
- ❌ `## Conexión con física moderna` en `.en.md` → usar `## Connection with modern physics`
- ✅ `## Historical problem`, `## Prior conceptual difficulty`, `## What changed`, `## Impact on physics`, `## Connection with modern physics`

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