## Errores conceptuales

### Error 1: Confundir calor con temperatura

**Por qué parece correcto**

En el lenguaje cotidiano, "más calor" y "más temperatura" se usan indistintamente. Un objeto a alta temperatura parece "tener mucho calor", lo que lleva a creer que ambas son la misma magnitud o que la temperatura es una medida de la cantidad de calor almacenado.

**Por qué es incorrecto**

El calor [[Q]] es energía en tránsito: solo existe durante un proceso de transferencia entre dos sistemas a distinta temperatura. La temperatura describe el estado termodinámico del sistema, mientras que [[Q]] describe un intercambio. Un kilogramo de agua a 50 °C tiene más energía interna que 10 gramos de agua a 50 °C, pero ambos están a la misma temperatura. El calor intercambiado al enfriar cada uno depende de la masa y del calor específico, no solo de la temperatura.

**Señal de detección**

El alumno usa frases como "el cuerpo contiene calor" o calcula [[Q]] a partir de la temperatura absoluta en lugar de la variación de temperatura [[DeltaT]].

**Corrección conceptual**

El calor no se almacena: se transfiere. Lo que se almacena en un cuerpo es su energía interna, que depende de la temperatura, la masa y la naturaleza del material. El calor es el proceso, no el contenido.

**Mini-ejemplo de contraste**

Dos cuerpos a la misma temperatura de 80 °C: uno de plomo (1 kg) y otro de agua (1 kg). Si ambos se enfrían hasta 20 °C, el agua cede aproximadamente 11 veces más energía que el plomo, aunque inicialmente estaban a la misma temperatura. La temperatura era igual, pero la energía que ceden es muy distinta.

---

### Error 2: Confundir calor con energía interna

**Por qué parece correcto**

En termodinámica introductoria se dice que "al absorber calor, un cuerpo aumenta su energía interna". Esta relación correcta lleva a muchos alumnos a creer que calor y energía interna son la misma cosa, o que "medir el calor" equivale a medir la energía interna.

**Por qué es incorrecto**

La energía interna es una función de estado: su valor depende únicamente del estado termodinámico del sistema (temperatura, presión, composición). El calor [[Q]] es una función de camino: su valor depende de cómo se realiza el proceso. Dos procesos que llevan al mismo sistema desde el mismo estado inicial al mismo estado final pueden intercambiar cantidades distintas de [[Q]]. La energía interna solo cambia en la misma cuantía que la suma de [[Q]] más el trabajo intercambiado.

**Señal de detección**

El alumno afirma que "la energía interna del sistema es igual al calor absorbido" sin mencionar el trabajo, o calcula [[Q]] final acumulando calores de procesos anteriores como si fuera una magnitud de estado.

**Corrección conceptual**

El calor es uno de los mecanismos de transferencia de energía, no la energía en sí. La variación de energía interna depende de [[Q]] y del trabajo W intercambiados: esta es precisamente la primera ley de la termodinámica. Si no hay trabajo, toda la energía entra como [[Q]]; si hay trabajo, deben sumarse ambos.

**Mini-ejemplo de contraste**

Un gas puede aumentar su energía interna en 500 J recibiendo 500 J de calor y sin trabajo, o recibiendo 700 J de calor y realizando 200 J de trabajo sobre el entorno. En ambos casos la energía interna aumenta 500 J, pero [[Q]] es distinto en cada camino.

## Errores de modelo

### Error 3: Aplicar calor sensible durante un cambio de estado

**Por qué parece correcto**

La fórmula de calor sensible es fácil de aplicar y está siempre disponible. Cuando un proceso incluye un cambio de estado, el alumno a veces aplica la misma fórmula con [[DeltaT]] desde la temperatura inicial hasta la final sin separar los tramos, calculando un [[Q]] sensible con un [[DeltaT]] que atraviesa la temperatura de transición.

**Por qué es incorrecto**

Durante la transición de fase, la temperatura permanece constante aunque se transfiera energía. El calor en ese tramo no calienta ni enfría el material: reorganiza su estructura molecular. Si se incluye la transición dentro de un único [[DeltaT]], se ignora toda la energía del calor latente, que puede ser mayor que el calor sensible de todos los demás tramos combinados.

**Señal de detección**

El alumno calcula [[Q]] como [[m]] · [[c_esp]] · [[DeltaT]] usando temperaturas inicial y final que incluyen la transición, sin mencionar ni calcular el calor latente [[L]] de esa transición.

**Corrección conceptual**

Cuando un proceso cruza la temperatura de transición, debe separarse en tramos: calor sensible hasta la temperatura de transición, calor latente en la transición, y calor sensible desde la temperatura de transición hasta la temperatura final. Los tres calores se suman para obtener [[Q]] total del proceso.

**Mini-ejemplo de contraste**

Calentar 1 kg de hielo de −10 °C a 10 °C. Aplicar la fórmula sensible directamente con [[DeltaT]] de 20 K daría un [[Q]] de unos 42 kJ usando el calor específico del agua. El resultado correcto incluye tres tramos y supera los 380 kJ, siendo el calor de fusión (334 kJ) el componente dominante: el error sería de casi nueve veces.

## Errores matemáticos

### Error 4: Invertir el orden de la resta en la variación de temperatura

**Por qué parece correcto**

En muchas fórmulas físicas el orden de la resta no importa si solo se busca el módulo. El alumno que trabaja habitualmente con magnitudes positivas puede restar T_inicial − T_final y obtener el mismo valor absoluto de [[DeltaT]], sin notar que el signo es el opuesto.

**Por qué es incorrecto**

El signo de [[DeltaT]] determina directamente el signo de [[Q]]. Si un cuerpo se enfría (T_final < T_inicial), [[DeltaT]] debe ser negativo para que [[Q]] sea negativo y así el resultado físico sea correcto: el sistema cede calor. Invertir el orden produce [[Q]] positivo en un proceso de cesión, lo que contradice la definición del signo.

**Señal de detección**

El alumno obtiene [[Q]] positivo para un proceso de enfriamiento, o negativo para un proceso de calentamiento. A veces lo nota él mismo al añadir un signo negativo ad hoc sin justificación física.

**Corrección conceptual**

La variación de cualquier magnitud se calcula siempre como valor_final − valor_inicial. Así [[DeltaT]] = T_final − T_inicial. Este convenio es universal en física y garantiza que el signo de la variación refleja el sentido del cambio.

**Mini-ejemplo de contraste**

Un trozo de metal se enfría de 200 °C a 50 °C. Con la resta correcta, [[DeltaT]] resulta negativo, [[Q]] resulta negativo, y el resultado indica correctamente que el sistema cede calor. Si se resta al revés, [[Q]] es positivo: el metal parecería absorber calor mientras se enfría, lo cual es absurdo.

## Errores de interpretación

### Error 5: Interpretar un resultado negativo de Q como un error de cálculo

**Por qué parece correcto**

Los alumnos que trabajan principalmente con magnitudes positivas tienden a interpretar un resultado negativo como señal de que algo salió mal en el cálculo. El módulo del calor tiene sentido físico claro, y el signo puede parecer una convención arbitraria.

**Por qué es incorrecto**

El signo de [[Q]] tiene significado físico preciso y necesario. [[Q]] negativo indica que el sistema cede energía al entorno, lo cual es un resultado completamente válido. Ignorar el signo o tomar el valor absoluto sin justificación equivale a perder la información más importante del resultado: la dirección del flujo energético. En termodinámica, el signo no es una convención decorativa.

**Señal de detección**

El alumno escribe "[[Q]] resulta negativo, pero como es calor lo tomamos positivo" o presenta el resultado en módulo añadiendo un asterisco o una nota informal para indicar el signo correcto.

**Corrección conceptual**

El signo de [[Q]] es parte del resultado, no un error. Debe reportarse siempre con su signo y debe interpretarse físicamente: [[Q]] negativo es un proceso exotérmico o de cesión de calor. El valor positivo del módulo puede usarse cuando solo interesa la cantidad de energía intercambiada, pero debe indicarse explícitamente que se está usando el valor absoluto.

**Mini-ejemplo de contraste**

Un radiador a 80 °C se enfría hasta la temperatura ambiente de 20 °C, cediendo calor a la habitación. El resultado físicamente correcto tiene [[Q]] negativo (el sistema, el radiador, pierde energía). Si se reporta con signo positivo, el cálculo sugiere que la habitación está calentando el radiador, invirtiendo la causalidad del proceso.

## Regla de autocontrol rápido

Antes de dar por bueno cualquier resultado de calor, verificar tres condiciones:

1. **Coherencia de signo**: el signo de [[Q]] debe coincidir con el signo de [[DeltaT]] en calor sensible. Si ambos tienen signos opuestos, hay un error en la resta de temperaturas o en el signo asignado al proceso.

2. **Orden de magnitud razonable**: para agua a presión atmosférica, el calor sensible entre 0 °C y 100 °C es aproximadamente 419 kJ por kilogramo; el calor de fusión es de unos 334 kJ/kg y el de vaporización de unos 2 260 kJ/kg. Si el resultado se aleja en más de un orden de magnitud de estos valores para masas en el rango habitual, buscar un error de unidades.

3. **Tramos completos en procesos con cambio de estado**: si el proceso cruza la temperatura de transición, verificar que se han sumado los tres calores (sensible antes, latente en la transición, sensible después) y no solo el calor sensible de los tramos de temperatura variable.
