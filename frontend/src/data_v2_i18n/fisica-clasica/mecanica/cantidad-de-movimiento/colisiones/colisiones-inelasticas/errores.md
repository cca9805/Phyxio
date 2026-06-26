# Errores comunes: colisiones inelásticas

## Errores conceptuales

### Error 1: Creer que en una colisión inelástica no se conserva el momento lineal

**Por qué parece correcto:**
Si se pierde energía, el alumno suele intuir que también debe perderse cantidad de movimiento, asociando la "pérdida" de una magnitud con la de la otra.

**Por qué es incorrecto:**
El momento lineal total [[p]] se conserva siempre que no existan fuerzas externas netas sobre el sistema. La inelasticidad afecta exclusivamente a la energía cinética traslacional [[K]], no a la simetría traslacional que garantiza la conservación de [[p]].

**Señal de detección:**
El alumno escribe que el momento final es menor que el inicial sin justificar la presencia de fuerzas externas.

**Corrección conceptual:**
Separar claramente el balance de momento (ley fundamental) del balance energético (propiedad de la interacción).

**Mini-ejemplo de contraste:**
Dos masas de 2 kg: una a 4 m/s y otra en reposo. El momento inicial es 8 kg·m/s. Tras el choque (con [[e]] de 0,5), las velocidades son 1 m/s y 3 m/s. El momento final sigue siendo 8 kg·m/s, aunque la energía haya bajado de 16 J a 10 J.

### Error 2: Pensar que se puede recuperar el estado inicial invirtiendo las velocidades

**Por qué parece correcto:**
En cinemática básica, si inviertes la velocidad de un móvil, este desanda su camino.

**Por qué es incorrecto:**
Las colisiones inelásticas son procesos **irreversibles**. Debido a que parte de la energía se ha transformado en calor y deformación ([[DeltaK]] negativa), el sistema ha aumentado su entropía. Invertir las velocidades finales no devolverá los cuerpos a su estado de aproximación original.

**Señal de detección:**
Intentar resolver el problema hacia atrás sin considerar el factor disipativo.

**Corrección conceptual:**
Reconocer que [[DeltaK]] representa una "fuga" de energía mecánica que rompe la simetría temporal del proceso.

**Mini-ejemplo de contraste:**
Si lanzas una pelota de plastilina contra el suelo, se deforma y apenas rebota. Invertir su (pequeña) velocidad de rebote no hará que la pelota se "desdeforme" y recupere su altura original.

## Errores de modelo

### Error 3: Confundir choque inelástico con totalmente inelástico

**Por qué parece correcto:**
Ambos términos incluyen la palabra "inelástico", lo que induce a pensar que los cuerpos siempre terminan moviéndose juntos.

**Por qué es incorrecto:**
En un choque inelástico genérico, el coeficiente [[e]] está entre 0 y 1, por lo que los cuerpos se separan. Solo si e es exactamente cero el choque es totalmente inelástico.

**Señal de detección:**
Asumir que las velocidades finales [[v1f]] y [[v2f]] son iguales cuando el enunciado da un valor de [[e]] mayor que cero.

**Corrección conceptual:**
Utilizar la relación de velocidades relativas para verificar que la separación existe mediante la definición de [[e]].

**Mini-ejemplo de contraste:**
En un choque con [[e]] de 0,5, si la velocidad relativa de acercamiento es 10 m/s, la de alejamiento será 5 m/s. Solo si [[e]] es exactamente 0 la velocidad relativa de alejamiento sería 0 m/s (cuerpos pegados).

## Errores matemáticos

### Error 4: Omitir el factor 1/2 en el cálculo de energía cinética

**Por qué parece correcto:**
Por rapidez, el alumno a veces multiplica directamente masa por velocidad al cuadrado.

**Por qué es incorrecto:**
La definición estándar de energía cinética traslacional exige el factor medio. Omitirlo invalida todo el balance energético y la fracción de pérdida [[loss_fraction]].

**Señal de detección:**
Valores de [[Ki]] y [[Kf]] que son exactamente el doble de lo esperado.

**Corrección conceptual:**
Aplicar rigurosamente las definiciones de energía cinética del leaf.

**Mini-ejemplo de contraste:**
Para 10 kg a 2 m/s, la energía es 20 J. Sin el factor 1/2, el alumno calcularía 40 J, duplicando erróneamente la escala energética del problema.

## Errores de interpretación

### Error 5: Ignorar el signo negativo en la variación de energía

**Por qué parece correcto:**
Se calcula la diferencia en valor absoluto y se informa como "energía perdida".

**Por qué es incorrecto:**
Físicamente, la variación [[DeltaK]] debe ser negativa para indicar una pérdida. Un valor positivo implicaría una colisión explosiva (superelástica), lo cual es físicamente imposible en un choque inelástico pasivo.

**Señal de detección:**
Escribir [[DeltaK]] como un número positivo en el informe de resultados.

**Corrección conceptual:**
Asegurar que la variación cumple el balance energético descendente.

**Mini-ejemplo de contraste:**
Si la energía pasa de 100 J a 80 J, la variación es -20 J. Informar +20 J como "variación" es matemáticamente incorrecto, aunque se entienda como "pérdida".

## Regla de autocontrol rápido

Antes de entregar un ejercicio de colisiones inelásticas, verifica:
1. **Conservación de p**: ¿La suma de masas por velocidades iniciales es igual a la final?
2. **Descenso de K**: ¿Es [[Kf]] estrictamente menor que [[Ki]]?
3. **Sentido del Rebote**: ¿Se alejan los cuerpos tras el impacto de forma coherente con [[e]]?
4. **Signo de [[DeltaK]]**: ¿Es el balance energético negativo?
