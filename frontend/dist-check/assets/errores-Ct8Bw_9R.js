const r=`# Errores frecuentes: sin rozamiento\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir causa con efecto\r
\r
**Por qué parece correcto**\r
\r
Hay varias magnitudes en juego y el alumno puede pensar que todas "causan" la aceleración.\r
\r
**Por qué es incorrecto**\r
\r
En este modelo, la causa dinámica directa es [[P_par]], no [[P]] completa ni [[P_perp]].\r
\r
**Señal de detección**\r
\r
Se usa [[P]] directamente en el eje del movimiento sin descomponerla.\r
\r
**Corrección conceptual**\r
\r
Descomponer primero [[P]] en [[P_par]] y [[P_perp]] antes de aplicar dinámica.\r
\r
**Mini-ejemplo de contraste**\r
\r
Dos rampas con misma [[m]] y [[g]] pero distinto [[theta]] no comparten [[P_par]]; por eso no comparten [[a]].\r
\r
### Error 2: Aplicar fórmula sin validar contexto\r
\r
**Por qué parece correcto**\r
\r
La expresión de [[a]] parece simple y universal.\r
\r
**Por qué es incorrecto**\r
\r
Esa expresión requiere hipótesis de ausencia de fricción y contacto estable.\r
\r
**Señal de detección**\r
\r
El resultado falla sistemáticamente en mediciones y no se revisan hipótesis.\r
\r
**Corrección conceptual**\r
\r
Escribir siempre una línea explícita de validez del modelo usado.\r
\r
**Mini-ejemplo de contraste**\r
\r
Si la superficie tiene fricción apreciable, usar el modelo ideal sobreestima [[v_f]] y subestima [[t]].\r
\r
### Error 3: Confundir magnitudes similares\r
\r
**Por qué parece correcto**\r
\r
[[P_perp]] y [[N]] suelen tener igual valor en este modelo y eso induce confusión de rol.\r
\r
**Por qué es incorrecto**\r
\r
[[P_perp]] es proyección del peso; [[N]] es reacción de contacto. Igual valor no significa misma causa física.\r
\r
**Señal de detección**\r
\r
El estudiante intercambia significado de peso proyectado y fuerza de apoyo.\r
\r
**Corrección conceptual**\r
\r
Separar siempre "fuerza aplicada" y "fuerza de reacción" en el diagrama.\r
\r
**Mini-ejemplo de contraste**\r
\r
Al cambiar [[theta]], ambas magnitudes cambian juntas, pero por mecanismos distintos.\r
\r
## Errores de modelo\r
\r
### Error 4: No detectar ruptura del modelo ideal\r
\r
**Por qué parece correcto**\r
\r
El caso ideal funciona bien en problemas introductorios.\r
\r
**Por qué es incorrecto**\r
\r
En laboratorio real pueden aparecer pérdidas que alteran la dinámica.\r
\r
**Señal de detección**\r
\r
Error relativo mayor que 10 por ciento en varias corridas equivalentes.\r
\r
**Corrección conceptual**\r
\r
Definir criterio de transición a modelo con fricción.\r
\r
**Mini-ejemplo de contraste**\r
\r
Si [[t]] medida es consistentemente mayor que la ideal, hay disipación no modelada.\r
\r
### Error 5: Ignorar límites de validez\r
\r
**Por qué parece correcto**\r
\r
Se cree que una ecuación correcta sirve en cualquier régimen.\r
\r
**Por qué es incorrecto**\r
\r
Toda ecuación viene con hipótesis; fuera de ellas pierde poder predictivo.\r
\r
**Señal de detección**\r
\r
La conclusión no incluye "válido mientras...".\r
\r
**Corrección conceptual**\r
\r
Cerrar cada resolución con condición de validez y condición de cambio de modelo.\r
\r
**Mini-ejemplo de contraste**\r
\r
Aplicar sin-rozamiento en una rampa rugosa produce sesgo sistemático.\r
\r
## Errores matemáticos\r
\r
### Error 6: Despejes con signo o función trigonométrica incorrecta\r
\r
**Por qué parece correcto**\r
\r
Seno y coseno se confunden fácilmente al trabajar rápido.\r
\r
**Por qué es incorrecto**\r
\r
Intercambiar funciones cambia completamente el significado de las componentes.\r
\r
**Señal de detección**\r
\r
[[P_par]] disminuye al aumentar [[theta]] en el cálculo del alumno.\r
\r
**Corrección conceptual**\r
\r
Comprobar el límite: si [[theta]] sube, [[P_par]] debe subir y [[P_perp]] debe bajar.\r
\r
**Mini-ejemplo de contraste**\r
\r
Con [[theta]] = 0, [[P_par]] debe ser 0. Si no, la descomposición está mal.\r
\r
### Error 7: Inconsistencia de unidades\r
\r
**Por qué parece correcto**\r
\r
Se prioriza la cuenta numérica y se deja unidades para el final.\r
\r
**Por qué es incorrecto**\r
\r
Sin trazabilidad dimensional, el resultado puede ser numéricamente bonito y físicamente inválido.\r
\r
**Señal de detección**\r
\r
[[a]] aparece en unidades distintas de m/s2.\r
\r
**Corrección conceptual**\r
\r
Verificar unidades en cada salto de ecuación.\r
\r
**Mini-ejemplo de contraste**\r
\r
Usar [[L]] en cm sin convertir distorsiona [[v_f]] y [[t]].\r
\r
## Errores de interpretación\r
\r
### Error 8: Sobreinterpretar precisión\r
\r
**Por qué parece correcto**\r
\r
Más decimales parecen más rigor.\r
\r
**Por qué es incorrecto**\r
\r
La precisión útil está limitada por incertidumbre de datos y modelo.\r
\r
**Señal de detección**\r
\r
Se toman decisiones por diferencias menores que el error experimental.\r
\r
**Corrección conceptual**\r
\r
Reportar cifras significativas coherentes con incertidumbre.\r
\r
**Mini-ejemplo de contraste**\r
\r
Diferencias de 0.01 m/s en [[v_f]] no son decisivas con sensores de baja resolución.\r
\r
### Error 9: Terminar con número sin lectura física\r
\r
**Por qué parece correcto**\r
\r
El alumno obtiene [[a]] o [[t]] y da por cerrado el problema.\r
\r
**Por qué es incorrecto**\r
\r
Sin lectura causal, el resultado no orienta diseño ni diagnóstico.\r
\r
**Señal de detección**\r
\r
No se explica por qué el resultado es razonable para el ángulo usado.\r
\r
**Corrección conceptual**\r
\r
Añadir cierre interpretativo: significado, validez y decisión.\r
\r
**Mini-ejemplo de contraste**\r
\r
Informar [[a]] sin relacionarla con [[theta]] impide comparar dos rampas.\r
\r
## Regla de autocontrol rápido\r
\r
- ¿Descompuse [[P]] correctamente en [[P_par]] y [[P_perp]]?\r
- ¿Verifiqué coherencia entre [[P_perp]] y [[N]]?\r
- ¿Comprobé que 0 <= [[a]] <= [[g]]?\r
- ¿Usé [[L]], [[v_f]] y [[t]] con unidades consistentes?\r
- ¿Declaré validez y posibles límites del modelo?`;export{r as default};
