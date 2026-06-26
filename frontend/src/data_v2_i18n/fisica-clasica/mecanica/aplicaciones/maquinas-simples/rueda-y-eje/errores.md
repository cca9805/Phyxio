# Rueda y eje — Errores comunes y malentendidos

## Errores conceptuales

### Error 1: Intercambiar el radio de la rueda y el radio del eje

**Por qué parece correcto**
El enunciado menciona «radio» sin especificar a cuál corresponde, y el estudiante asocia intuitivamente el valor mayor con el eje porque «el eje gira más rápido». La confusión entre la pieza física y su rol mecánico es frecuente.

**Por qué es incorrecto**
El esfuerzo [[FR]] actúa sobre el elemento de mayor radio, que es la rueda exterior. La resistencia [[Fr]] actúa sobre el eje de menor radio. Invertir los radios invierte la razón, obteniendo [[VM]] inferior a 1 cuando debería ser [[VM]] superior a 1 y viceversa.

**Señal de detección**
El resultado de [[VM]] es el inverso del esperado; por ejemplo, 0,1 en vez de 10. O bien [[FR]] resulta mucho mayor que [[Fr]] en un sistema que debería multiplicar la fuerza.

**Corrección conceptual**
Recuerda: el esfuerzo siempre actúa sobre el brazo largo [[R]] (la rueda), la resistencia siempre actúa sobre el brazo corto [[r]] (el eje). La ventaja mecánica ideal [[VM]] es R/r y debe ser mayor que 1.

**Mini-ejemplo de contraste**
Con R de 0,30 m y r de 0,03 m. Correcto: [[VM]] de 10, [[FR]] de 50 N para [[Fr]] de 500 N. Incorrecto (radios invertidos): [[VM]] de 0,1, [[FR]] de 5000 N para [[Fr]] de 500 N. El error multiplica por 100 el esfuerzo necesario.

## Errores de modelo

### Error 2: Usar la ventaja mecánica ideal en un sistema real sin aplicar el rendimiento

**Por qué parece correcto**
El modelo ideal es más sencillo y se trabaja con él en la mayoría de los ejercicios de nivel esencial. El estudiante lo aplica automáticamente incluso cuando el enunciado indica rozamiento o da valores de [[eta]].

**Por qué es incorrecto**
En cualquier sistema real con cojinetes, el rozamiento consume parte del torque de entrada. La ventaja mecánica real [[VM_real]] siempre es menor que [[VM]], y el esfuerzo real [[FR]] siempre es mayor que el ideal.

**Señal de detección**
El esfuerzo calculado resulta menor que el medido en un experimento real. La temperatura de los cojinetes aumenta, evidenciando disipación de energía.

**Corrección conceptual**
Para sistemas reales usar:

{{f:ley_rueda_real}}

Con [[eta]] estimado entre 0,75 y 0,95 según estado de la lubricación.

**Mini-ejemplo de contraste**
Con R de 0,20 m, r de 0,02 m y [[Fr]] de 600 N. Modelo ideal: [[FR]] de 60 N. Con [[eta]] de 0,80: [[FR]] real de 75 N. En un motor de 70 N, el modelo ideal indica que puede con la carga; el modelo real indica que no puede. Usar el modelo equivocado puede provocar un fallo de diseño.

### Error 3: Calcular [[VM_real]] como R dividido entre el producto [[eta]] por r

**Por qué parece correcto**
El estudiante recuerda que el rendimiento «divide algo» y lo coloca en el denominador de la fórmula de la ventaja mecánica real.

**Por qué es incorrecto**
El rendimiento reduce la ventaja: [[VM_real]] es siempre menor que [[VM]]. Si se escribe R/([[eta]]·r), el resultado es mayor que R/r, lo que implicaría que el rozamiento aumenta la ventaja mecánica, lo cual viola la física.

**Señal de detección**
[[VM_real]] calculado resulta mayor que [[VM]]. Eso es imposible físicamente.

**Corrección conceptual**
La fórmula correcta es:

{{f:ventaja_mecanica_real}}

[[VM_real]] es [[eta]] multiplicado por R/r: el rendimiento se multiplica por la ventaja geométrica, nunca divide el radio.

**Mini-ejemplo de contraste**
Con R/r de 10 y [[eta]] de 0,80. Correcto: [[VM_real]] de 8. Incorrecto: [[VM_real]] de 12,5. El error lleva a subestimar el esfuerzo real en un 56%.

## Errores matemáticos

### Error 4: Confundir radio con diámetro

**Por qué parece correcto**
Los enunciados de ingeniería frecuentemente dan el diámetro de la rueda o del eje porque es la magnitud directamente medible con un calibre. El estudiante usa ese valor directamente como radio.

**Por qué es incorrecto**
Las fórmulas del leaf usan radios, no diámetros. Introducir el diámetro duplica el valor de [[R]] o [[r]], lo que modifica la razón de radios y por tanto la ventaja mecánica calculada.

**Señal de detección**
La ventaja mecánica calculada es el doble o la mitad del valor esperado. Si el enunciado da «diámetro de la rueda D de 60 cm», el radio correcto a usar es [[R]] de 0,30 m.

**Corrección conceptual**
Siempre extraer el radio antes de sustituir: R de D_rueda dividido entre 2; r de d_eje dividido entre 2.

**Mini-ejemplo de contraste**
Con D de 0,60 m y d de 0,06 m. Correcto: [[VM]] de 10. Usando diámetros como radios: [[VM]] de 10 (¡da igual!). Pero si solo uno se convierte: con R de 0,30 m y r de 0,06 m (diámetro del eje): [[VM]] de 5. Error del 50% solo por olvidar dividir entre 2 el radio del eje.

### Error 5: Usar el ángulo en grados en la fórmula de arcos

**Por qué parece correcto**
El ángulo de giro es un dato natural en muchos enunciados (por ejemplo, «la rueda gira 90°»). El estudiante sustituye directamente ese valor en [[sR]] de R·θ.

**Por qué es incorrecto**
La fórmula [[sR]] de R·θ requiere θ en radianes. Un ángulo de 90° equivale a π/2 radianes ≈ 1,57 rad, no a 90 rad.

**Señal de detección**
El arco calculado es aproximadamente 57 veces mayor que el correcto (factor 180/π).

**Corrección conceptual**
Convertir siempre a radianes: θ en rad de θ en grados multiplicado por π/180. Para cuarto de vuelta: 90° da π/2 rad.

**Mini-ejemplo de contraste**
Con R de 0,30 m y θ de 90°. Correcto: [[sR]] de 0,30 por π/2 ≈ 0,471 m. Incorrecto: [[sR]] de 0,30 por 90 de 27 m. El error multiplica el arco por casi 57.

## Errores de interpretación

### Error 6: Creer que la Regla de Oro se puede violar con suficiente ingeniería

**Por qué parece correcto**
El estudiante ha visto cómo añadir más poleas reduce el esfuerzo, y espera que algo similar exista para la rueda y el eje: aumentar [[R]] indefinidamente para obtener ventaja arbitraria sin coste.

**Por qué es incorrecto**
La Regla de Oro es una consecuencia directa de la conservación de la energía. Lo que ganas en [[Fr]] (fuerza en el eje) lo pagas exactamente en [[sR]] (recorrido en la rueda). Aumentar [[R]] reduce [[FR]] pero aumenta [[sR]] en la misma proporción. El trabajo de entrada no disminuye.

**Señal de detección**
El estudiante calcula que aumentando R de 10 a 100 veces r, el trabajo de entrada [[FR]]·[[sR]] disminuye. Al verificar energéticamente: [[FR]]·[[sR]] de [[Fr]]·[[sr]] (en el modelo ideal) siempre se mantiene constante.

**Corrección conceptual**
La ventaja mecánica redistribuye fuerza y recorrido; no reduce trabajo. El único camino para reducir trabajo total es usar un motor o una fuente de energía adicional.

**Mini-ejemplo de contraste**
Con R de 10 cm y r de 1 cm, [[VM]] de 10: para levantar [[Fr]] de 100 N durante [[sr]] de 1 m se necesita [[FR]] de 10 N durante [[sR]] de 10 m. Trabajo de entrada: 10 × 10 de 100 J. Trabajo de salida: 100 × 1 de 100 J. Idénticos. Con R de 1 m y r de 1 cm, [[VM]] de 100: [[FR]] de 1 N, [[sR]] de 100 m. Trabajo de entrada: 1 × 100 de 100 J. El trabajo total no cambia; solo se redistribuye entre fuerza y desplazamiento.

## Regla de autocontrol rápido

Antes de dar por bueno un resultado de rueda y eje, aplica estas tres comprobaciones:

1. **Verificación de orden**: ¿R > r? Si no, la máquina no tiene ventaja mecánica positiva; revisa cuál es la rueda y cuál el eje.
2. **Regla de oro**: ¿El producto [[FR]] por [[sR]] es igual o mayor que [[Fr]] por [[sr]]? Si no, hay un error en los radios o en los arcos. En el modelo ideal deben ser iguales.
3. **Coherencia de [[eta]]**: ¿[[VM_real]] es menor o igual que [[VM]]? Si [[VM_real]] resulta mayor que [[VM]], el rendimiento se introdujo de forma incorrecta en la fórmula.

