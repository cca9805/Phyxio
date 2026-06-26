# 15. errores.md

**REGLA DE RENDER MATEMÁTICO — OBLIGATORIA EN ESTE ARCHIVO**:

El validador escanea TODAS las líneas de `errores.md` y `errores.en.md` buscando el patrón `variable = expresión`. Las secciones de errores son especialmente propensas a incluir ecuaciones explicativas que el validador rechaza. Reglas específicas:

- **Mini-ejemplos de contraste**: NUNCA escribir `Q = 50 µC`, `C = Q/V = 10 µF`, `E = (1/2)·C·V²`. Reemplazar por prosa: "la carga almacenada es 50 µC", "el cociente carga/tensión da 10 µF", "la fórmula de energía con el factor 1/2".
- **Sección `## Regla de autocontrol rápido`**: No incluir ecuaciones como `E = (1/2)·C·V²`, `Q = C·V`. Describir la fórmula verbalmente: "la fórmula con el factor 1/2 y el cuadrado de la tensión", "el producto de capacidad por tensión".
- **Sección `**Por qué es incorrecto**`**: Si se describe una ecuación, usar lenguaje físico sin signo `=`. ❌ `E_k = (1/2)·m·v²` → ✅ "la energía cinética tiene un factor 1/2 y crece con el cuadrado de la velocidad".
- **`\ (...\)` con `=` o `\approx`**: Cualquier LaTeX inline que contenga `=`, `\approx`, `<`, `>`, `\leq`, `\geq` es rechazado. Solo se permite un símbolo aislado: `\(\alpha\)`, `\(\mathrm{F}\)`, `\(\varepsilon_r\)` — **pero únicamente aislado**, nunca en combinación como `\(\varepsilon_r \approx 80\)` o `\(\varepsilon_r\)` dentro de una frase.

**ATENCIÓN — Patrones concretos que fallan en errores.md al explicar el Error de modelo con dieléctrico:**

| ❌ Inválido | ✅ Corrección en prosa |
|---|---|
| `\(\varepsilon_r\)` como variable en texto | `la permitividad relativa del medio` |
| `\(\varepsilon_r \approx 80\)` | `permitividad relativa de aproximadamente 80` |
| `en un medio con permitividad \(\varepsilon_r\)` | `en un medio con permitividad relativa (factor dieléctrico)` |
| `se divide por \(\varepsilon_r\)` | `se divide por la permitividad relativa del medio` |

- **Tablas**: Las celdas de tabla también son escaneadas. No incluir ecuaciones en celdas de tabla.
- **REGLA CRÍTICA — `=` en texto descriptivo**: El validador escanea TODO el texto, incluidas las secciones `**Señal de detección**` y `**Detection signal**`. Cualquier `=` en texto narrativo es rechazado como fórmula textual inválida.
  - ❌ `el alumno escribe "r = 5 cm"` → RECHAZADO (contiene `=`)
  - ❌ `si [[F_C]] = 0` en texto libre → RECHAZADO
  - ✅ `el alumno escribe la distancia en centímetros y la sustituye sin convertir`
  - ✅ `si [[F_C]] resulta cero` o `cuando [[F_C]] es nulo`
  - Reformular siempre en prosa sin usar el signo `=` fuera de bloques `{{f:id}}`.

---

- Párrafos ágiles: Ningún párrafo debe superar las 4 o 5 líneas de lectura.
Debe contener exactamente 5 bloques desarrollados:

Estructura obligatoria exacta (errores.md — ESPAÑOL):

## Errores conceptuales
## Errores de modelo
## Errores matemáticos
## Errores de interpretación
## Regla de autocontrol rápido

<!-- EXTRACT-HEADINGS-ES: Errores conceptuales, Errores de modelo, Errores matemáticos, Errores de interpretación, Regla de autocontrol rápido -->
<!-- EXTRACT-HEADINGS-EN: Conceptual errors, Model errors, Mathematical errors, Interpretation errors, Quick self-control rule -->

Estructura obligatoria exacta (errores.en.md — INGLÉS):

**CRÍTICO**: Las cabeceras de `errores.en.md` deben ser exactamente las siguientes cadenas (ver `ERRORES_SECTIONS_EN` en `_core.py`):

## Conceptual errors
## Model errors
## Mathematical errors
## Interpretation errors
## Quick self-control rule

**REGLA DE RECHAZO DURO — Cabeceras en inglés para errores.en.md**:
- ❌ `## Errores conceptuales` en `.en.md` → usar `## Conceptual errors`
- ❌ `## Errores de modelo` en `.en.md` → usar `## Model errors`
- ❌ `## Errores matemáticos` en `.en.md` → usar `## Mathematical errors`
- ❌ `## Errores de interpretación` en `.en.md` → usar `## Interpretation errors`
- ❌ `## Regla de autocontrol rápido` en `.en.md` → usar `## Quick self-control rule`

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