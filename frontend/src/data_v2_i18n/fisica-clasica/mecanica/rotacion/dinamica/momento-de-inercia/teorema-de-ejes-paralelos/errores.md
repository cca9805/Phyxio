# Errores comunes

## Errores conceptuales
### Error 1: creer que [[Icm]] sirve para cualquier eje

**Por qué parece correcto**
El alumno generaliza en exceso una idea correcta: si [[Icm]] representa "la inercia del cuerpo", entonces parecería lógico usarla en cualquier situación. Ese salto mental ignora que la inercia depende del eje, no solo del objeto.

**Por qué es incorrecto**
[[Icm]] es un valor de referencia asociado al eje que pasa por el centro de masas. Cuando el eje real cambia, la inercia también cambia. Aplicar [[Icm]] sin corrección equivale a resolver otro problema físico.

**Señal de detección**
El resultado final no cambia al mover el eje, o queda menor que [[Icm]] pese a que la separación entre ejes aumenta.

**Corrección conceptual**
Primero identifica el eje real y luego decide si es paralelo al eje centroidal. Solo en ese caso usa Steiner para trasladar desde [[Icm]] hasta [[I]].

**Mini-ejemplo de contraste**
Una barra que gira por el centro y otra por el extremo no pueden compartir la misma inercia. Si se usa el mismo valor, ambas arrancarían igual con el mismo [[tau]], lo cual contradice la experiencia.

## Errores de modelo
### Error 2: aplicar Steiner cuando los ejes no son paralelos

**Por qué parece correcto**
El mecanismo cognitivo es analogía incorrecta: como hay "cambio de eje", se asume que cualquier cambio entra en la misma fórmula.

**Por qué es incorrecto**
Steiner modela un desplazamiento entre ejes paralelos. Si cambia la orientación, aparece acoplamiento entre componentes y el modelo escalar deja de representar la física.

**Señal de detección**
Se intenta trasladar un dato de [[Icm]] entre ejes perpendiculares o inclinados sin cambiar de herramienta matemática.

**Corrección conceptual**
Usa Steiner solo para ejes paralelos. Si hay cambio de orientación, pasa al tensor de inercia o a integración directa según la complejidad del sistema.

**Mini-ejemplo de contraste**
Tomar el dato de una barra para giro transversal y trasladarlo a giro longitudinal con Steiner produce un número, pero describe un eje distinto y por eso el resultado no predice el experimento.

## Errores matemáticos
### Error 3: medir mal [[d]] y ocultar el fallo con álgebra limpia

**Por qué parece correcto**
Confusión de magnitudes: se toma la distancia a un punto visible del dibujo y se confunde con la separación entre ejes.

**Por qué es incorrecto**
La corrección depende de la distancia perpendicular entre ejes. Si esa distancia está mal definida, el cálculo puede ser formalmente correcto pero físicamente inválido.

**Señal de detección**
El resultado tiene unidades válidas, pero no respeta la tendencia esperada al variar la geometría.

**Corrección conceptual**
Antes de sustituir números, marca explícitamente ambos ejes y la perpendicular que los separa. Solo esa longitud entra como [[d]].

**Mini-ejemplo de contraste**
Si dos configuraciones tienen el mismo cuerpo y distinto eje, pero se usa la misma [[d]], la cuenta devolverá la misma [[I]]. Esa igualdad es absurda porque la geometría sí cambió.

## Errores de interpretación
### Error 4: concluir que un [[I]] grande "debe estar mal"

**Por qué parece correcto**
Sesgo de plausibilidad: el alumno espera números cercanos al dato de referencia y descarta resultados altos por parecer exagerados.

**Por qué es incorrecto**
Un [[I]] mayor es justo lo esperable cuando el eje se aleja del centro. No es un error, es la consecuencia física del problema.

**Señal de detección**
Se corrige manualmente el valor para acercarlo a [[Icm]] sin justificación geométrica.

**Corrección conceptual**
Interpreta el resultado junto con la dinámica: con el mismo [[tau]], una [[I]] mayor reduce [[alpha]]. Si esa tendencia coincide con la escena física, el número es coherente.

**Mini-ejemplo de contraste**
Si una barrera larga pivota en un extremo, forzar una [[I]] pequeña implicaría arranque demasiado rápido para un motor modesto. El comportamiento real desmiente esa corrección arbitraria.

## Regla de autocontrol rápido
1. Eje: identificar eje real y eje centroidal.
2. Paralelismo: confirmar que ambos ejes son paralelos.
3. Distancia: medir [[d]] como separación perpendicular entre ejes.
4. Coherencia: verificar que [[I]] >= [[Icm]].
5. Dinámica: comprobar que mayor [[I]] implica menor [[alpha]] para el mismo [[tau]].

Si estos cinco pasos se cumplen, la solución suele ser físicamente consistente y apta para diseño preliminar.
