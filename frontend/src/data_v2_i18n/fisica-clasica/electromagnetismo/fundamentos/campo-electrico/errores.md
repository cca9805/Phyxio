## Errores conceptuales


### Error 1: Confundir el campo eléctrico con la fuerza eléctrica

**Por qué parece correcto**

El estudiante aprende que el campo se "siente" como una fuerza y que ambos están relacionados. La analogía intuitiva lleva a pensar que [[campo_electrico]] y [[fuerza_electrica]] son la misma cosa medida en unidades distintas, o que el campo es simplemente la fuerza que actúa sobre la carga de interés.

**Por qué es incorrecto**

[[campo_electrico]] es una propiedad del espacio en un punto, independiente de la carga que se coloque allí. [[fuerza_electrica]] es la fuerza que experimenta una carga específica [[q_0]] colocada en ese punto. El campo existe aunque no haya ninguna carga de prueba presente; la fuerza no existe sin la carga. La dependencia de [[fuerza_electrica]] con [[q_0]] es exactamente la que separa las dos magnitudes.

**Señal de detección**

El alumno sustituye directamente [[campo_electrico]] en lugar de [[fuerza_electrica]] en la segunda ley de Newton, o calcula la aceleración de una partícula dividiéndola entre la carga en lugar de entre la masa.

**Corrección conceptual**

La fuerza sobre una carga real [[q_0]] se obtiene multiplicando el campo [[campo_electrico]] por esa carga. El campo es el "catálogo" del entorno; la fuerza es el resultado de aplicar ese catálogo a una carga concreta.

**Mini-ejemplo de contraste**

Un campo de 1000 N/C en un punto produciría fuerzas completamente diferentes sobre un electrón y sobre un protón, aunque el campo sea el mismo: la fuerza depende de la carga, el campo no.

---


### Error 2: Creer que el campo apunta siempre hacia afuera de la carga

**Por qué parece correcto**

Los diagramas más comunes muestran una carga positiva rodeada de líneas que apuntan radialmente hacia afuera. Si el estudiante generaliza esto sin considerar el signo de la carga, concluirá que el campo siempre es saliente.

**Por qué es incorrecto**

El campo apunta radialmente hacia afuera solo para cargas positivas. Para cargas negativas, el campo apunta radialmente hacia adentro: las líneas de campo terminan en la carga negativa, no salen de ella. El signo de [[q_fuente]] determina completamente la dirección.

**Señal de detección**

El alumno obtiene una fuerza repulsiva cuando debería ser atractiva, o dibuja líneas de campo saliendo de una carga negativa.

**Corrección conceptual**

Las líneas de campo nacen en cargas positivas (fuentes) y terminan en cargas negativas (sumideros). Para una carga negativa, [[campo_electrico]] en cualquier punto cercano apunta hacia ella, no alejándose.

**Mini-ejemplo de contraste**

Para un electrón (carga negativa), una carga de prueba positiva colocada a su derecha sentirá una fuerza hacia la izquierda (hacia el electrón). El campo en ese punto apunta hacia la izquierda, no hacia la derecha.

## Errores de modelo


### Error 3: Aplicar la fórmula de carga puntual a objetos extendidos a distancias cortas

**Por qué parece correcto**

La fórmula de Coulomb para el campo es sencilla y siempre da un resultado numérico, incluso cuando la geometría no la justifica. El estudiante tiende a usarla por defecto sin verificar si la carga puede tratarse como puntual.

**Por qué es incorrecto**

El modelo de carga puntual asume que toda la carga se concentra en un único punto. Para un objeto extendido (esfera cargada, barra, placa), el campo real requiere integrar las contribuciones de todos los elementos de carga. A distancias cortas comparables con el tamaño del objeto, el error puede superar el 50%.

**Señal de detección**

El campo calculado no coincide con mediciones experimentales, o cambia de forma no esperada al acercarse al objeto (en lugar de seguir la curva 1/r², se vuelve aproximadamente constante, como en una placa).

**Corrección conceptual**

Antes de aplicar la fórmula puntual, verificar que la distancia de evaluación [[distancia_a_la_carga_fuente]] sea al menos diez veces mayor que la dimensión característica del objeto cargado. Si no se cumple, usar la ley de Gauss o integración directa.

**Mini-ejemplo de contraste**

El campo a 1 mm de una esfera cargada de 5 mm de radio no puede calcularse con la fórmula puntual: la distancia no es despreciable frente al radio. A 10 cm de la misma esfera, el error de la aproximación puntual es inferior al 1%.

## Errores matemáticos


### Error 4: Olvidar elevar la distancia al cuadrado

**Por qué parece correcto**

La dependencia de [[distancia_a_la_carga_fuente]] en el denominador lleva a algunos estudiantes a escribir simplemente la distancia en lugar de su cuadrado, posiblemente por analogía incorrecta con otras fórmulas donde la variable aparece en primer orden.

**Por qué es incorrecto**

La ley cuadrática inversa es una consecuencia fundamental de la geometría tridimensional (el área de una esfera crece como el cuadrado del radio). Omitir el cuadrado produce un campo que decae mucho más lentamente con la distancia, sobreestimando la intensidad a grandes [[distancia_a_la_carga_fuente]].

**Señal de detección**

El campo calculado a doble distancia es la mitad del original en lugar de la cuarta parte. Si duplicar [[distancia_a_la_carga_fuente]] divide [[campo_electrico]] entre dos, la fórmula usada tiene [[distancia_a_la_carga_fuente]] en primer orden, no al cuadrado.

**Corrección conceptual**

En la fórmula de Coulomb, el denominador es siempre [[distancia_a_la_carga_fuente]] al cuadrado. La regla práctica: duplicar la distancia divide el campo entre cuatro; triplicar la distancia lo divide entre nueve.

**Mini-ejemplo de contraste**

Con [[q_fuente]] de 1 μC y [[k_e]] estándar, a 1 m el campo debería ser aproximadamente 9000 N/C. Si el alumno omite el cuadrado, obtiene 9×10⁹ N/C, diez órdenes de magnitud mayor: el resultado absurdo delata el error.

## Errores de interpretación


### Error 5: Interpretar el campo nulo como ausencia de carga

**Por qué parece correcto**

Si no hay campo, parece lógico concluir que no hay cargas cerca. La asociación intuitiva "campo implica carga cercana" lleva a la inversa incorrecta.

**Por qué es incorrecto**

El campo puede ser nulo en puntos donde las contribuciones de varias cargas se cancelan exactamente (puntos de equilibrio electrostático), o en el interior de conductores donde las cargas libres se redistribuyen para anular el campo interno. En ambos casos hay cargas presentes pero el campo neto es cero.

**Señal de detección**

El alumno concluye que "no hay carga en la región" cuando el campo es nulo, sin considerar la posibilidad de cancelación entre campos de cargas opuestas.

**Corrección conceptual**

[[campo_electrico]] nulo en un punto solo garantiza que la fuerza neta sobre una carga de prueba allí colocada sería cero. No garantiza ausencia de carga en el entorno. Para saber si hay carga, hay que aplicar la ley de Gauss sobre una superficie cerrada y calcular el flujo.

**Mini-ejemplo de contraste**

En el punto central exacto entre dos cargas iguales y de mismo signo, [[campo_electrico]] es exactamente cero. Sin embargo, hay dos cargas muy próximas. El campo nulo no indica "vacío eléctrico" sino equilibrio de contribuciones.

## Regla de autocontrol rápido

Antes de dar por bueno un cálculo de campo eléctrico, verificar mentalmente:

1. ¿El denominador de la fórmula de Coulomb contiene [[distancia_a_la_carga_fuente]] al cuadrado?
2. ¿El resultado tiene unidades de N/C?
3. ¿El módulo de [[campo_electrico]] es positivo?
4. ¿La dirección del campo es coherente con el signo de [[q_fuente]]?
5. ¿La distancia de evaluación es al menos diez veces el tamaño del objeto cargado?

Si alguna de estas cinco comprobaciones falla, el cálculo tiene un error que debe corregirse antes de continuar con el problema.