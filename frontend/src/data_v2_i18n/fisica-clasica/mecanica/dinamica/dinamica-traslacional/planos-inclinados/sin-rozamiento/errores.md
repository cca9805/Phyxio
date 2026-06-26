# Errores frecuentes: sin rozamiento

## Errores conceptuales

### Error 1: Confundir causa con efecto

**Por qué parece correcto**

Hay varias magnitudes en juego y el alumno puede pensar que todas "causan" la aceleración.

**Por qué es incorrecto**

En este modelo, la causa dinámica directa es [[P_par]], no [[P]] completa ni [[P_perp]].

**Señal de detección**

Se usa [[P]] directamente en el eje del movimiento sin descomponerla.

**Corrección conceptual**

Descomponer primero [[P]] en [[P_par]] y [[P_perp]] antes de aplicar dinámica.

**Mini-ejemplo de contraste**

Dos rampas con misma [[m]] y [[g]] pero distinto [[theta]] no comparten [[P_par]]; por eso no comparten [[a]].

### Error 2: Aplicar fórmula sin validar contexto

**Por qué parece correcto**

La expresión de [[a]] parece simple y universal.

**Por qué es incorrecto**

Esa expresión requiere hipótesis de ausencia de fricción y contacto estable.

**Señal de detección**

El resultado falla sistemáticamente en mediciones y no se revisan hipótesis.

**Corrección conceptual**

Escribir siempre una línea explícita de validez del modelo usado.

**Mini-ejemplo de contraste**

Si la superficie tiene fricción apreciable, usar el modelo ideal sobreestima [[v_f]] y subestima [[t]].

### Error 3: Confundir magnitudes similares

**Por qué parece correcto**

[[P_perp]] y [[N]] suelen tener igual valor en este modelo y eso induce confusión de rol.

**Por qué es incorrecto**

[[P_perp]] es proyección del peso; [[N]] es reacción de contacto. Igual valor no significa misma causa física.

**Señal de detección**

El estudiante intercambia significado de peso proyectado y fuerza de apoyo.

**Corrección conceptual**

Separar siempre "fuerza aplicada" y "fuerza de reacción" en el diagrama.

**Mini-ejemplo de contraste**

Al cambiar [[theta]], ambas magnitudes cambian juntas, pero por mecanismos distintos.

## Errores de modelo

### Error 4: No detectar ruptura del modelo ideal

**Por qué parece correcto**

El caso ideal funciona bien en problemas introductorios.

**Por qué es incorrecto**

En laboratorio real pueden aparecer pérdidas que alteran la dinámica.

**Señal de detección**

Error relativo mayor que 10 por ciento en varias corridas equivalentes.

**Corrección conceptual**

Definir criterio de transición a modelo con fricción.

**Mini-ejemplo de contraste**

Si [[t]] medida es consistentemente mayor que la ideal, hay disipación no modelada.

### Error 5: Ignorar límites de validez

**Por qué parece correcto**

Se cree que una ecuación correcta sirve en cualquier régimen.

**Por qué es incorrecto**

Toda ecuación viene con hipótesis; fuera de ellas pierde poder predictivo.

**Señal de detección**

La conclusión no incluye "válido mientras...".

**Corrección conceptual**

Cerrar cada resolución con condición de validez y condición de cambio de modelo.

**Mini-ejemplo de contraste**

Aplicar sin-rozamiento en una rampa rugosa produce sesgo sistemático.

## Errores matemáticos

### Error 6: Despejes con signo o función trigonométrica incorrecta

**Por qué parece correcto**

Seno y coseno se confunden fácilmente al trabajar rápido.

**Por qué es incorrecto**

Intercambiar funciones cambia completamente el significado de las componentes.

**Señal de detección**

[[P_par]] disminuye al aumentar [[theta]] en el cálculo del alumno.

**Corrección conceptual**

Comprobar el límite: si [[theta]] sube, [[P_par]] debe subir y [[P_perp]] debe bajar.

**Mini-ejemplo de contraste**

Con [[theta]] = 0, [[P_par]] debe ser 0. Si no, la descomposición está mal.

### Error 7: Inconsistencia de unidades

**Por qué parece correcto**

Se prioriza la cuenta numérica y se deja unidades para el final.

**Por qué es incorrecto**

Sin trazabilidad dimensional, el resultado puede ser numéricamente bonito y físicamente inválido.

**Señal de detección**

[[a]] aparece en unidades distintas de m/s2.

**Corrección conceptual**

Verificar unidades en cada salto de ecuación.

**Mini-ejemplo de contraste**

Usar [[L]] en cm sin convertir distorsiona [[v_f]] y [[t]].

## Errores de interpretación

### Error 8: Sobreinterpretar precisión

**Por qué parece correcto**

Más decimales parecen más rigor.

**Por qué es incorrecto**

La precisión útil está limitada por incertidumbre de datos y modelo.

**Señal de detección**

Se toman decisiones por diferencias menores que el error experimental.

**Corrección conceptual**

Reportar cifras significativas coherentes con incertidumbre.

**Mini-ejemplo de contraste**

Diferencias de 0.01 m/s en [[v_f]] no son decisivas con sensores de baja resolución.

### Error 9: Terminar con número sin lectura física

**Por qué parece correcto**

El alumno obtiene [[a]] o [[t]] y da por cerrado el problema.

**Por qué es incorrecto**

Sin lectura causal, el resultado no orienta diseño ni diagnóstico.

**Señal de detección**

No se explica por qué el resultado es razonable para el ángulo usado.

**Corrección conceptual**

Añadir cierre interpretativo: significado, validez y decisión.

**Mini-ejemplo de contraste**

Informar [[a]] sin relacionarla con [[theta]] impide comparar dos rampas.

## Regla de autocontrol rápido

- ¿Descompuse [[P]] correctamente en [[P_par]] y [[P_perp]]?
- ¿Verifiqué coherencia entre [[P_perp]] y [[N]]?
- ¿Comprobé que 0 <= [[a]] <= [[g]]?
- ¿Usé [[L]], [[v_f]] y [[t]] con unidades consistentes?
- ¿Declaré validez y posibles límites del modelo?