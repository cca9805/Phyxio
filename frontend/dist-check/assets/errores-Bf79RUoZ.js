const e=`\uFEFF# Rueda y eje — Errores comunes y malentendidos\r
\r
## Errores conceptuales\r
\r
### Error 1: Intercambiar el radio de la rueda y el radio del eje\r
\r
**Por qué parece correcto**\r
El enunciado menciona «radio» sin especificar a cuál corresponde, y el estudiante asocia intuitivamente el valor mayor con el eje porque «el eje gira más rápido». La confusión entre la pieza física y su rol mecánico es frecuente.\r
\r
**Por qué es incorrecto**\r
El esfuerzo [[FR]] actúa sobre el elemento de mayor radio, que es la rueda exterior. La resistencia [[Fr]] actúa sobre el eje de menor radio. Invertir los radios invierte la razón, obteniendo [[VM]] inferior a 1 cuando debería ser [[VM]] superior a 1 y viceversa.\r
\r
**Señal de detección**\r
El resultado de [[VM]] es el inverso del esperado; por ejemplo, 0,1 en vez de 10. O bien [[FR]] resulta mucho mayor que [[Fr]] en un sistema que debería multiplicar la fuerza.\r
\r
**Corrección conceptual**\r
Recuerda: el esfuerzo siempre actúa sobre el brazo largo [[R]] (la rueda), la resistencia siempre actúa sobre el brazo corto [[r]] (el eje). La ventaja mecánica ideal [[VM]] es R/r y debe ser mayor que 1.\r
\r
**Mini-ejemplo de contraste**\r
Con R de 0,30 m y r de 0,03 m. Correcto: [[VM]] de 10, [[FR]] de 50 N para [[Fr]] de 500 N. Incorrecto (radios invertidos): [[VM]] de 0,1, [[FR]] de 5000 N para [[Fr]] de 500 N. El error multiplica por 100 el esfuerzo necesario.\r
\r
## Errores de modelo\r
\r
### Error 2: Usar la ventaja mecánica ideal en un sistema real sin aplicar el rendimiento\r
\r
**Por qué parece correcto**\r
El modelo ideal es más sencillo y se trabaja con él en la mayoría de los ejercicios de nivel esencial. El estudiante lo aplica automáticamente incluso cuando el enunciado indica rozamiento o da valores de [[eta]].\r
\r
**Por qué es incorrecto**\r
En cualquier sistema real con cojinetes, el rozamiento consume parte del torque de entrada. La ventaja mecánica real [[VM_real]] siempre es menor que [[VM]], y el esfuerzo real [[FR]] siempre es mayor que el ideal.\r
\r
**Señal de detección**\r
El esfuerzo calculado resulta menor que el medido en un experimento real. La temperatura de los cojinetes aumenta, evidenciando disipación de energía.\r
\r
**Corrección conceptual**\r
Para sistemas reales usar:\r
\r
{{f:ley_rueda_real}}\r
\r
Con [[eta]] estimado entre 0,75 y 0,95 según estado de la lubricación.\r
\r
**Mini-ejemplo de contraste**\r
Con R de 0,20 m, r de 0,02 m y [[Fr]] de 600 N. Modelo ideal: [[FR]] de 60 N. Con [[eta]] de 0,80: [[FR]] real de 75 N. En un motor de 70 N, el modelo ideal indica que puede con la carga; el modelo real indica que no puede. Usar el modelo equivocado puede provocar un fallo de diseño.\r
\r
### Error 3: Calcular [[VM_real]] como R dividido entre el producto [[eta]] por r\r
\r
**Por qué parece correcto**\r
El estudiante recuerda que el rendimiento «divide algo» y lo coloca en el denominador de la fórmula de la ventaja mecánica real.\r
\r
**Por qué es incorrecto**\r
El rendimiento reduce la ventaja: [[VM_real]] es siempre menor que [[VM]]. Si se escribe R/([[eta]]·r), el resultado es mayor que R/r, lo que implicaría que el rozamiento aumenta la ventaja mecánica, lo cual viola la física.\r
\r
**Señal de detección**\r
[[VM_real]] calculado resulta mayor que [[VM]]. Eso es imposible físicamente.\r
\r
**Corrección conceptual**\r
La fórmula correcta es:\r
\r
{{f:ventaja_mecanica_real}}\r
\r
[[VM_real]] es [[eta]] multiplicado por R/r: el rendimiento se multiplica por la ventaja geométrica, nunca divide el radio.\r
\r
**Mini-ejemplo de contraste**\r
Con R/r de 10 y [[eta]] de 0,80. Correcto: [[VM_real]] de 8. Incorrecto: [[VM_real]] de 12,5. El error lleva a subestimar el esfuerzo real en un 56%.\r
\r
## Errores matemáticos\r
\r
### Error 4: Confundir radio con diámetro\r
\r
**Por qué parece correcto**\r
Los enunciados de ingeniería frecuentemente dan el diámetro de la rueda o del eje porque es la magnitud directamente medible con un calibre. El estudiante usa ese valor directamente como radio.\r
\r
**Por qué es incorrecto**\r
Las fórmulas del leaf usan radios, no diámetros. Introducir el diámetro duplica el valor de [[R]] o [[r]], lo que modifica la razón de radios y por tanto la ventaja mecánica calculada.\r
\r
**Señal de detección**\r
La ventaja mecánica calculada es el doble o la mitad del valor esperado. Si el enunciado da «diámetro de la rueda D de 60 cm», el radio correcto a usar es [[R]] de 0,30 m.\r
\r
**Corrección conceptual**\r
Siempre extraer el radio antes de sustituir: R de D_rueda dividido entre 2; r de d_eje dividido entre 2.\r
\r
**Mini-ejemplo de contraste**\r
Con D de 0,60 m y d de 0,06 m. Correcto: [[VM]] de 10. Usando diámetros como radios: [[VM]] de 10 (¡da igual!). Pero si solo uno se convierte: con R de 0,30 m y r de 0,06 m (diámetro del eje): [[VM]] de 5. Error del 50% solo por olvidar dividir entre 2 el radio del eje.\r
\r
### Error 5: Usar el ángulo en grados en la fórmula de arcos\r
\r
**Por qué parece correcto**\r
El ángulo de giro es un dato natural en muchos enunciados (por ejemplo, «la rueda gira 90°»). El estudiante sustituye directamente ese valor en [[sR]] de R·θ.\r
\r
**Por qué es incorrecto**\r
La fórmula [[sR]] de R·θ requiere θ en radianes. Un ángulo de 90° equivale a π/2 radianes ≈ 1,57 rad, no a 90 rad.\r
\r
**Señal de detección**\r
El arco calculado es aproximadamente 57 veces mayor que el correcto (factor 180/π).\r
\r
**Corrección conceptual**\r
Convertir siempre a radianes: θ en rad de θ en grados multiplicado por π/180. Para cuarto de vuelta: 90° da π/2 rad.\r
\r
**Mini-ejemplo de contraste**\r
Con R de 0,30 m y θ de 90°. Correcto: [[sR]] de 0,30 por π/2 ≈ 0,471 m. Incorrecto: [[sR]] de 0,30 por 90 de 27 m. El error multiplica el arco por casi 57.\r
\r
## Errores de interpretación\r
\r
### Error 6: Creer que la Regla de Oro se puede violar con suficiente ingeniería\r
\r
**Por qué parece correcto**\r
El estudiante ha visto cómo añadir más poleas reduce el esfuerzo, y espera que algo similar exista para la rueda y el eje: aumentar [[R]] indefinidamente para obtener ventaja arbitraria sin coste.\r
\r
**Por qué es incorrecto**\r
La Regla de Oro es una consecuencia directa de la conservación de la energía. Lo que ganas en [[Fr]] (fuerza en el eje) lo pagas exactamente en [[sR]] (recorrido en la rueda). Aumentar [[R]] reduce [[FR]] pero aumenta [[sR]] en la misma proporción. El trabajo de entrada no disminuye.\r
\r
**Señal de detección**\r
El estudiante calcula que aumentando R de 10 a 100 veces r, el trabajo de entrada [[FR]]·[[sR]] disminuye. Al verificar energéticamente: [[FR]]·[[sR]] de [[Fr]]·[[sr]] (en el modelo ideal) siempre se mantiene constante.\r
\r
**Corrección conceptual**\r
La ventaja mecánica redistribuye fuerza y recorrido; no reduce trabajo. El único camino para reducir trabajo total es usar un motor o una fuente de energía adicional.\r
\r
**Mini-ejemplo de contraste**\r
Con R de 10 cm y r de 1 cm, [[VM]] de 10: para levantar [[Fr]] de 100 N durante [[sr]] de 1 m se necesita [[FR]] de 10 N durante [[sR]] de 10 m. Trabajo de entrada: 10 × 10 de 100 J. Trabajo de salida: 100 × 1 de 100 J. Idénticos. Con R de 1 m y r de 1 cm, [[VM]] de 100: [[FR]] de 1 N, [[sR]] de 100 m. Trabajo de entrada: 1 × 100 de 100 J. El trabajo total no cambia; solo se redistribuye entre fuerza y desplazamiento.\r
\r
## Regla de autocontrol rápido\r
\r
Antes de dar por bueno un resultado de rueda y eje, aplica estas tres comprobaciones:\r
\r
1. **Verificación de orden**: ¿R > r? Si no, la máquina no tiene ventaja mecánica positiva; revisa cuál es la rueda y cuál el eje.\r
2. **Regla de oro**: ¿El producto [[FR]] por [[sR]] es igual o mayor que [[Fr]] por [[sr]]? Si no, hay un error en los radios o en los arcos. En el modelo ideal deben ser iguales.\r
3. **Coherencia de [[eta]]**: ¿[[VM_real]] es menor o igual que [[VM]]? Si [[VM_real]] resulta mayor que [[VM]], el rendimiento se introdujo de forma incorrecta en la fórmula.\r
\r
`;export{e as default};
