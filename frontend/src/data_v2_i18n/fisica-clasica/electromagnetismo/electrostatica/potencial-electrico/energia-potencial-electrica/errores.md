## Errores conceptuales


### Error 1: Confundir energía potencial eléctrica con potencial eléctrico

**Por qué parece correcto**

El alumno ha escuchado "potencial eléctrico" y "energía potencial eléctrica" en la misma unidad y en frases muy similares. Ambos conceptos se relacionan con la posición de una carga en un campo, y ambos tienen la palabra "potencial". El mecanismo cognitivo es una generalización excesiva: si dos nombres son casi idénticos, probablemente describen la misma cosa con distinta escala.

**Por qué es incorrecto**

El potencial eléctrico [[potencial_electrico_en_el_punto_a]] es una propiedad del campo en un punto del espacio, medida en voltios (julios por coulombio). La energía potencial eléctrica [[energia_potencial_electrica]] es una propiedad del sistema carga-campo, medida en julios. La diferencia es que [[energia_potencial_electrica]] depende de la carga [[carga_de_prueba]] que se coloca en ese punto, mientras que [[potencial_electrico_en_el_punto_a]] no depende de ninguna carga de prueba. Un punto en el espacio tiene un potencial definido incluso cuando no hay ninguna carga allí; la energía potencial solo existe cuando una carga real ocupa ese punto.

**Señal de detección**

El alumno obtiene un resultado con unidades de voltios cuando el problema pide julios, o asigna "la energía potencial del campo" a un punto vacío del espacio sin carga de prueba.

**Corrección conceptual**

El potencial [[potencial_electrico_en_el_punto_a]] es la energía potencial por unidad de carga positiva. Para obtener [[energia_potencial_electrica]] de una carga concreta [[carga_de_prueba]] en ese punto hay que multiplicar: la energía es [[carga_de_prueba]] por [[potencial_electrico_en_el_punto_a]]. Recordar que cargas de distinto valor colocadas en el mismo punto del campo tienen distinta [[energia_potencial_electrica]] pero el mismo [[potencial_electrico_en_el_punto_a]].

**Mini-ejemplo de contraste**

Un punto del espacio donde el campo produce un potencial de 100 V tiene una sola propiedad definida: [[potencial_electrico_en_el_punto_a]] es 100 V. Si se coloca allí una carga de 2 µC, la energía es 200 µJ. Si se coloca una carga de 5 µC, la energía es 500 µJ. Si se aplica incorrectamente la confusión (tratando [[potencial_electrico_en_el_punto_a]] como [[energia_potencial_electrica]]), se obtiene siempre 100 J independientemente de la carga, lo cual es absurdo: la energía dependería del campo pero no de cuánta carga hay.

---


### Error 2: Suponer que la energía potencial eléctrica siempre es positiva

**Por qué parece correcto**

El alumno asocia "energía" con algo positivo: una cantidad física que se puede acumular, gastar o transferir, pero nunca tener en valor negativo. La energía cinética, la energía interna, la energía luminosa: todas se presentan habitualmente como positivas. El mecanismo cognitivo es una analogía incorrecta con las formas de energía que el alumno conoce mejor.

**Por qué es incorrecto**

La energía potencial es siempre relativa a una referencia. Con la referencia estándar en el infinito, la energía de interacción entre dos cargas de signo opuesto es negativa: indica que el sistema ligado tiene menos energía que el sistema con las cargas infinitamente separadas. Esta negatividad tiene significado físico preciso: para separar las cargas hasta el infinito hay que aportarle al sistema una cantidad de energía igual al valor absoluto de [[energia_potencial_electrica]].

**Señal de detección**

El alumno toma el valor absoluto de su resultado sin darse cuenta, o afirma que "la energía es 3.5 J" cuando el cálculo correcto da −3.5 J para dos cargas de signo opuesto.

**Corrección conceptual**

El signo de [[energia_potencial_electrica]] para un sistema de dos cargas puntuales está determinado por el producto de las cargas: mismo signo da positivo, signo opuesto da negativo. La negatividad no indica un error: indica que el sistema está en un estado ligado. El átomo de hidrógeno tiene una energía de enlace de −13.6 eV precisamente porque el electrón y el protón tienen cargas opuestas.

**Mini-ejemplo de contraste**

Aplicar incorrectamente "la energía siempre es positiva" a un protón y un electrón separados 0.053 nm (radio de Bohr) lleva a afirmar que la energía de interacción es positiva, lo que implicaría que el electrón y el protón se repelen y el átomo de hidrógeno es inestable. El resultado correcto es negativo, indicando atracción y un estado ligado estable.

## Errores de modelo


### Error 3: Usar la fórmula coulombiana en un medio dieléctrico sin corregir

**Por qué parece correcto**

La ley de Coulomb y la fórmula de energía de interacción se presentan en el vacío. El alumno aplica directamente la fórmula con [[k_e]] aunque el problema especifique que las cargas están en agua, aceite o plástico. El mecanismo cognitivo es una generalización excesiva: si la fórmula funciona en todos los ejemplos vistos (que suelen ser en el vacío o en el aire), el alumno la aplica universalmente.

**Por qué es incorrecto**

En un medio con permitividad relativa (factor dieléctrico del medio), la constante efectiva de la interacción se reduce por ese factor. El agua tiene una permitividad relativa de aproximadamente 80, lo que reduce la energía de interacción a menos del 1.3 % del valor en el vacío. Ignorar esto en un problema que ocurre en solución acuosa produce resultados erróneos en casi dos órdenes de magnitud.

**Señal de detección**

El enunciado menciona un medio distinto del vacío o del aire, pero el alumno usa la constante de Coulomb del vacío sin modificar. El resultado de [[energia_potencial_electrica]] es decenas o cientos de veces mayor que el esperado para ese contexto.

**Corrección conceptual**

En un medio homogéneo e isótropo, la constante efectiva de la interacción se divide por la permitividad relativa del medio. Verificar siempre en el enunciado si las cargas están en el vacío, en el aire (donde la permitividad relativa es aproximadamente 1 y la corrección es despreciable) o en otro medio.

**Mini-ejemplo de contraste**

Dos cargas de signo opuesto en agua (permitividad relativa igual a 80) tienen una energía de interacción unas 80 veces menor en módulo que las mismas cargas en el vacío. Ignorar el medio y usar directamente [[k_e]] del vacío daría una energía de enlace 80 veces sobreestimada, lo que llevaría a predecir iones inseparables en solución acuosa cuando en realidad se disocian con facilidad.

## Errores matemáticos


### Error 4: Invertir el signo del trabajo del campo respecto al cambio de energía potencial

**Por qué parece correcto**

El alumno recuerda que "el trabajo y la energía están relacionados" y escribe directamente que el trabajo del campo es igual a la variación de [[energia_potencial_electrica]]. La confusión surge porque en mecánica, el trabajo realizado por una fuerza conservativa es el negativo del cambio de energía potencial, pero el alumno omite el signo negativo por analogía superficial.

**Por qué es incorrecto**

El trabajo realizado por el campo eléctrico sobre la carga es el negativo de la variación de [[energia_potencial_electrica]]. Si [[variacion_de_energia_potencial_electrica]] es positiva (la energía potencial aumenta), el campo realizó trabajo negativo sobre la carga (la frenó o se opuso a su movimiento). Si [[variacion_de_energia_potencial_electrica]] es negativa, el campo realizó trabajo positivo (aceleró la carga). La relación es: trabajo del campo sobre la carga es el negativo de [[variacion_de_energia_potencial_electrica]].

**Señal de detección**

El alumno obtiene que una carga positiva que se mueve de un punto de alto potencial a uno de bajo potencial ha perdido energía cinética, cuando en realidad debería ganarla. O calcula que el trabajo del campo es positivo cuando la carga sube a mayor potencial.

**Corrección conceptual**

Recordar la regla: cuando [[variacion_de_energia_potencial_electrica]] disminuye, el campo realiza trabajo positivo (convierte energía potencial en cinética). Cuando [[variacion_de_energia_potencial_electrica]] aumenta, el campo realiza trabajo negativo (la carga necesita un agente externo que la empuje). El signo negativo en la relación entre trabajo y variación de energía potencial es el sello del carácter conservativo del campo.

**Mini-ejemplo de contraste**

Una carga positiva se mueve espontáneamente desde un punto de potencial alto hacia uno de potencial bajo: [[energia_potencial_electrica]] disminuye (variación negativa) y la velocidad aumenta. Si se confunde el signo y se dice que el trabajo del campo es negativo (igual a [[variacion_de_energia_potencial_electrica]]), se llega a la conclusión de que la carga se frena, contradiciendo directamente la experiencia de que las cargas positivas se aceleran en la dirección del campo.

## Errores de interpretación


### Error 5: Pensar que la energía potencial es una propiedad de la carga aislada

**Por qué parece correcto**

En los problemas habituales se calcula "la energía potencial de la carga [[carga_de_prueba]] en el punto P". Esta forma de hablar suena como si [[energia_potencial_electrica]] perteneciera a la carga. El mecanismo cognitivo es una transferencia incorrecta del lenguaje cotidiano: "la energía de la carga" se interpreta como si fuera intrínseca a ella, del mismo modo que la masa o la carga eléctrica.

**Por qué es incorrecto**

La energía potencial es siempre una propiedad del sistema: de la interacción entre la carga [[carga_de_prueba]] y el campo generado por otras cargas. Si no hay campo externo, la carga [[carga_de_prueba]] aislada no tiene energía potencial. Si se mueve la carga a otro punto del campo, su energía potencial cambia, lo que demuestra que [[energia_potencial_electrica]] no es intrínseca a la carga sino que depende de su posición relativa respecto al resto del sistema.

**Señal de detección**

El alumno afirma que al mover la carga de un punto a otro "la carga lleva consigo su energía potencial", o confunde el cambio de [[energia_potencial_electrica]] con un cambio en alguna propiedad interna de la carga.

**Corrección conceptual**

La energía potencial eléctrica describe la interacción entre la carga y su entorno. Es tan propiedad de la carga como del campo: ambos son necesarios para que exista. Esta perspectiva de sistema es la clave para entender que cuando una carga se mueve a favor del campo, su [[energia_potencial_electrica]] disminuye y la energía se redistribuye hacia la energía cinética o hacia el campo, no desaparece.

**Mini-ejemplo de contraste**

Si la energía potencial fuera intrínseca a la carga, moverla al vacío sin campo (por ejemplo, a una región completamente alejada de todas las cargas fuente) debería conservar su [[energia_potencial_electrica]]. Sin embargo, en el vacío sin campo, el potencial es cero y [[energia_potencial_electrica]] es cero, independientemente de cuál sea el valor de la carga. La energía potencial desaparece porque desaparece la interacción, no porque la carga la haya perdido internamente.

## Regla de autocontrol rápido

Antes de dar un resultado de [[energia_potencial_electrica]] o [[variacion_de_energia_potencial_electrica]] como definitivo, verificar los siguientes cinco puntos:

1. **Unidades**: [[energia_potencial_electrica]] debe estar en joules, no en voltios. Si el resultado tiene unidades de voltios, falta multiplicar por la carga.
2. **Signo del producto de cargas**: para la fórmula de dos cargas puntuales, el producto [[q_1]]·[[q_2]] determina el signo de la energía. Cargas iguales dan positivo, cargas opuestas dan negativo.
3. **Relación trabajo-energía**: el trabajo del campo eléctrico sobre la carga es el negativo de la variación de [[energia_potencial_electrica]], no igual a ella.
4. **Dependencia con la distancia**: al duplicar [[r_12]], [[energia_potencial_electrica]] se reduce a la mitad en módulo. Si el resultado cambia de otra manera al variar la distancia, revisar la fórmula utilizada.
5. **Orden de magnitud**: verificar que el resultado es razonable para las cargas y distancias del problema. Microcoulombios a distancias de centímetros producen energías del orden de microjulios a milijijulios, no kilojoules.