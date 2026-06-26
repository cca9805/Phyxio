const e=`# Errores comunes\r
\r
## Errores conceptuales\r
### Error 1: creer que [[Icm]] sirve para cualquier eje\r
\r
**Por qué parece correcto**\r
El alumno generaliza en exceso una idea correcta: si [[Icm]] representa "la inercia del cuerpo", entonces parecería lógico usarla en cualquier situación. Ese salto mental ignora que la inercia depende del eje, no solo del objeto.\r
\r
**Por qué es incorrecto**\r
[[Icm]] es un valor de referencia asociado al eje que pasa por el centro de masas. Cuando el eje real cambia, la inercia también cambia. Aplicar [[Icm]] sin corrección equivale a resolver otro problema físico.\r
\r
**Señal de detección**\r
El resultado final no cambia al mover el eje, o queda menor que [[Icm]] pese a que la separación entre ejes aumenta.\r
\r
**Corrección conceptual**\r
Primero identifica el eje real y luego decide si es paralelo al eje centroidal. Solo en ese caso usa Steiner para trasladar desde [[Icm]] hasta [[I]].\r
\r
**Mini-ejemplo de contraste**\r
Una barra que gira por el centro y otra por el extremo no pueden compartir la misma inercia. Si se usa el mismo valor, ambas arrancarían igual con el mismo [[tau]], lo cual contradice la experiencia.\r
\r
## Errores de modelo\r
### Error 2: aplicar Steiner cuando los ejes no son paralelos\r
\r
**Por qué parece correcto**\r
El mecanismo cognitivo es analogía incorrecta: como hay "cambio de eje", se asume que cualquier cambio entra en la misma fórmula.\r
\r
**Por qué es incorrecto**\r
Steiner modela un desplazamiento entre ejes paralelos. Si cambia la orientación, aparece acoplamiento entre componentes y el modelo escalar deja de representar la física.\r
\r
**Señal de detección**\r
Se intenta trasladar un dato de [[Icm]] entre ejes perpendiculares o inclinados sin cambiar de herramienta matemática.\r
\r
**Corrección conceptual**\r
Usa Steiner solo para ejes paralelos. Si hay cambio de orientación, pasa al tensor de inercia o a integración directa según la complejidad del sistema.\r
\r
**Mini-ejemplo de contraste**\r
Tomar el dato de una barra para giro transversal y trasladarlo a giro longitudinal con Steiner produce un número, pero describe un eje distinto y por eso el resultado no predice el experimento.\r
\r
## Errores matemáticos\r
### Error 3: medir mal [[d]] y ocultar el fallo con álgebra limpia\r
\r
**Por qué parece correcto**\r
Confusión de magnitudes: se toma la distancia a un punto visible del dibujo y se confunde con la separación entre ejes.\r
\r
**Por qué es incorrecto**\r
La corrección depende de la distancia perpendicular entre ejes. Si esa distancia está mal definida, el cálculo puede ser formalmente correcto pero físicamente inválido.\r
\r
**Señal de detección**\r
El resultado tiene unidades válidas, pero no respeta la tendencia esperada al variar la geometría.\r
\r
**Corrección conceptual**\r
Antes de sustituir números, marca explícitamente ambos ejes y la perpendicular que los separa. Solo esa longitud entra como [[d]].\r
\r
**Mini-ejemplo de contraste**\r
Si dos configuraciones tienen el mismo cuerpo y distinto eje, pero se usa la misma [[d]], la cuenta devolverá la misma [[I]]. Esa igualdad es absurda porque la geometría sí cambió.\r
\r
## Errores de interpretación\r
### Error 4: concluir que un [[I]] grande "debe estar mal"\r
\r
**Por qué parece correcto**\r
Sesgo de plausibilidad: el alumno espera números cercanos al dato de referencia y descarta resultados altos por parecer exagerados.\r
\r
**Por qué es incorrecto**\r
Un [[I]] mayor es justo lo esperable cuando el eje se aleja del centro. No es un error, es la consecuencia física del problema.\r
\r
**Señal de detección**\r
Se corrige manualmente el valor para acercarlo a [[Icm]] sin justificación geométrica.\r
\r
**Corrección conceptual**\r
Interpreta el resultado junto con la dinámica: con el mismo [[tau]], una [[I]] mayor reduce [[alpha]]. Si esa tendencia coincide con la escena física, el número es coherente.\r
\r
**Mini-ejemplo de contraste**\r
Si una barrera larga pivota en un extremo, forzar una [[I]] pequeña implicaría arranque demasiado rápido para un motor modesto. El comportamiento real desmiente esa corrección arbitraria.\r
\r
## Regla de autocontrol rápido\r
1. Eje: identificar eje real y eje centroidal.\r
2. Paralelismo: confirmar que ambos ejes son paralelos.\r
3. Distancia: medir [[d]] como separación perpendicular entre ejes.\r
4. Coherencia: verificar que [[I]] >= [[Icm]].\r
5. Dinámica: comprobar que mayor [[I]] implica menor [[alpha]] para el mismo [[tau]].\r
\r
Si estos cinco pasos se cumplen, la solución suele ser físicamente consistente y apta para diseño preliminar.\r
`;export{e as default};
