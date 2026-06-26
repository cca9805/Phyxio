# 19. aplicaciones.md

**REGLA DE RENDER MATEMÁTICO — OBLIGATORIA EN ESTE ARCHIVO**:

El validador escanea TODAS las líneas de `aplicaciones.md` y `aplicaciones.en.md`. Cualquier patrón `variable = expresión` es rechazado, incluyendo dentro de párrafos descriptivos:

- **Cálculos de ejemplo dentro de la aplicación**: ❌ `Z = 1/(ω·C) = 63.7 Ω` → ✅ "la impedancia reactiva, calculada dividiendo 1 entre el producto de la frecuencia angular y la capacidad, resulta aproximadamente 63.7 Ω".
- **Fórmulas de diseño**: ❌ `C = 2·E/V²` → ✅ "despejando la capacidad de la fórmula de energía almacenada, dividir dos veces la energía por el cuadrado de la tensión".
- **Límites de validez con ecuaciones**: ❌ `V ≤ 0.5 V_{ruptura}` → ✅ "operar a menos del 50% de la tensión de ruptura".
- **Las líneas `Variable dominante:` y `Límite de validez:`** son obligatorias y deben ser solo texto descriptivo, nunca ecuaciones con `=`.

---

Mínimo:

- 5 aplicaciones reales desarrolladas

Estructura obligatoria por aplicación:

## 1. ...
## 2. ...
## 3. ...
## 4. ...
## 5. ...

<!-- EXTRACT-HEADINGS-ES: 1., 2., 3., 4., 5. -->
<!-- EXTRACT-HEADINGS-EN: 1., 2., 3., 4., 5. -->

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

**REGLA DE RECHAZO DURO — Estructura mínima obligatoria por aplicación:**

El validador rechaza `aplicaciones.md` / `aplicaciones.en.md` si:

1. Los títulos H2 no están numerados exactamente como `## 1. Nombre`, `## 2. Nombre`, ..., `## 5. Nombre`.
   - ❌ `## Desfibrilador cardíaco` → ✅ `## 1. Desfibrilador cardíaco`
2. Faltan las líneas de marcadores obligatorios en alguna aplicación.
3. Los marcadores van en negrita (`**Variable dominante:**`) — deben ser texto plano sin formato.

Estructura mínima obligatoria por cada aplicación (española):

```
## N. Nombre concreto de la aplicación

[párrafo de contexto físico real]

[párrafo de análisis con variable dominante y límite]

Variable dominante: descripción en prosa de qué magnitud controla el comportamiento.
Límite de validez: descripción en prosa de cuándo el modelo deja de ser válido.
```

En `aplicaciones.md` (español):
Variable dominante: ...
Límite de validez: ...

En `aplicaciones.en.md` (inglés):
Dominant variable: ...
Validity limit: ...

Ambas líneas **sin negrita** y **sin ecuaciones con `=`**. Sin estas dos líneas en sus respectivos idiomas, la aplicación no supera el validador.

Regla de rechazo duro reforzada:

- `phyxio_leaf_validator.py` debe rechazar `aplicaciones.md` cuando detecte similitud alta entre aplicaciones del mismo archivo.
- El rechazo aplica también si la repetición está disfrazada cambiando solo el título, el contexto nominal o una o dos palabras por frase.
- `Variable dominante:` y `Límite de validez:` también deben variar cuando cambia la aplicación; no valen cinco líneas equivalentes maquilladas.

---------------------------------------------------------------------