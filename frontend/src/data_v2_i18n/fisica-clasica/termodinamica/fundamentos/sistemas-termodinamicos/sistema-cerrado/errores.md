## Errores conceptuales

### Error 1: Confundir calor con energía interna

**Por qué parece correcto:** El lenguaje cotidiano usa "calor" para describir el estado de un objeto ("ese objeto tiene mucho calor"), lo que induce a pensar que el calor es una propiedad del estado del sistema, como lo es la temperatura.

**Por qué es incorrecto:** El calor [[Q]] no es una propiedad del estado del sistema: es energía en tránsito a través de la frontera. Una vez que [[Q]] ha cruzado la frontera, deja de ser calor y se almacena como energía interna [[U]]. El sistema no "tiene calor"; tiene energía interna.

**Señal de detección:** Aparece cuando el alumno escribe frases como "el sistema tiene 800 J de calor" o "el calor almacenado en el sistema aumentó". El calor no puede almacenarse; lo que se almacena es energía interna.

**Corrección conceptual:** El calor es el mecanismo de transferencia, no la propiedad almacenada. Después de absorber 800 J de calor, el sistema tiene 800 J más de energía interna, no 800 J de calor.

**Mini-ejemplo:** Si un sistema absorbe 500 J de calor sin realizar trabajo, su [[DeltaU]] aumenta en 500 J. Incorrecto: "el sistema tiene 500 J de calor". Correcto: "el sistema ganó 500 J de energía interna mediante transferencia de calor".

### Error 2: Invertir la convención de signos del trabajo

**Por qué parece correcto:** Si el gas realiza trabajo (empuja el émbolo), el alumno piensa que el trabajo "se suma" a la energía del sistema porque la acción de empujar requiere energía. La confusión surge entre la perspectiva del sistema y la del entorno.

**Por qué es incorrecto:** Con convención IUPAC, cuando el sistema realiza trabajo sobre el entorno, [[W]] es negativo (el sistema pierde energía al ceder trabajo al entorno). Sumar [[W]] positivo cuando el sistema expande equivale a añadir energía que en realidad el sistema está perdiendo.

**Señal de detección:** El resultado de [[DeltaU]] es mayor de lo esperado, mayor incluso que [[Q]]. Si [[DeltaU]] > [[Q]] cuando el sistema está expandiendo, hay un error de signo en [[W]].

**Corrección conceptual:** Con convención IUPAC: [[DeltaU]] igual a [[Q]] más [[W]], donde [[W]] es negativo cuando el sistema realiza trabajo (expansión) y positivo cuando el entorno lo realiza (compresión).

**Mini-ejemplo de contraste:** Gas recibe 800 J de calor y realiza 320 J de trabajo en expansión. Incorrecto: [[DeltaU]] = 800 + 320 = 1120 J. Correcto (IUPAC): [[W]] = −320 J, [[DeltaU]] = 800 + (−320) = 480 J.

### Error 3: Creer que [[DeltaU]] depende del camino termodinámico

**Por qué parece correcto:** Como [[Q]] y [[W]] sí dependen del camino termodinámico, el alumno generaliza incorrectamente y piensa que [[DeltaU]] también depende de cómo se llegó al estado final.

**Por qué es incorrecto:** [[DeltaU]] es una función de estado: su valor solo depende de los estados inicial y final, no del camino. Aunque [[Q]] y [[W]] sean completamente distintos en dos procesos, su suma [[Q]] más [[W]] es siempre la misma si los estados extremos son los mismos.

**Señal de detección:** El alumno obtiene dos valores distintos de [[DeltaU]] para dos procesos que parten del mismo estado inicial y llegan al mismo estado final. Esto es imposible si los estados están bien definidos.

**Corrección conceptual:** Separar mentalmente las funciones de estado (U, T, P, V, [[S]]) de las funciones de proceso ([[Q]], [[W]]). Las primeras dependen del estado; las segundas, del camino. [[DeltaU]] es diferencia de función de estado y, por lo tanto, independiente del camino.

**Mini-ejemplo de contraste:** Un gas pasa del estado A al estado B por dos caminos: camino 1 con [[Q]]₁ = 600 J y [[W]]₁ = −100 J; camino 2 con [[Q]]₂ = 300 J y [[W]]₂ = 200 J. En ambos casos [[DeltaU]] = 500 J. [[Q]] y [[W]] cambian con el camino; [[DeltaU]] no.

## Errores de modelo

### Error 4: Aplicar el modelo de sistema cerrado cuando hay flujo de masa

**Por qué parece correcto:** El alumno reconoce que la caldera o compresor intercambia calor y trabajo con el entorno, lo que sugiere el modelo de sistema cerrado. El flujo de masa no es visible directamente en los datos del problema.

**Por qué es incorrecto:** Cuando hay flujo de masa a través de la frontera, el sistema es abierto y el balance energético debe incluir los términos de entalpía de flujo. El balance del sistema cerrado no contabiliza la energía transportada por la masa entrante o saliente, lo que introduce errores sistemáticos.

**Señal de detección:** El resultado de [[DeltaU]] calculado no cuadra con el calor y el trabajo medidos, o el enunciado menciona flujos de fluido, corrientes de entrada/salida, o variación de masa del sistema.

**Corrección conceptual:** Verificar siempre si hay flujo de masa a través de la frontera antes de elegir el modelo. Si la frontera es impermeable a la materia, usar sistema cerrado; si hay flujo de masa, usar el balance de sistema abierto con entalpía de flujo.

**Mini-ejemplo de contraste:** Caldera donde entra agua líquida y sale vapor. Incorrecto: aplicar [[DeltaU]] = [[Q]] + [[W]] ignorando las corrientes. Correcto: usar balance de sistema abierto incluyendo entalpía de las corrientes entrantes y salientes.

### Error 5: Confundir proceso adiabático con proceso isotérmico

**Por qué parece correcto:** El alumno asocia "sin calor" con "sin cambio de temperatura", porque en la experiencia cotidiana el calor es el mecanismo principal de cambio de temperatura. Si no hay calor, parece razonable que la temperatura no cambie.

**Por qué es incorrecto:** En un proceso adiabático, [[Q]] es nulo pero [[W]] puede ser distinto de cero. Para un gas ideal comprimido adiabáticamente, [[DeltaU]] es igual a [[W]] (positivo en compresión), lo que corresponde a un aumento de temperatura. Solo el proceso isotérmico mantiene la temperatura constante.

**Señal de detección:** El alumno aplica [[DeltaU]] = 0 en un proceso que declara adiabático pero no isotérmico. Si el proceso involucra compresión o expansión de un gas sin intercambio de calor, [[DeltaU]] no es cero; es igual a [[W]].

**Corrección conceptual:** Adiabático significa [[Q]] = 0, no [[DeltaU]] = 0. Isotérmico significa temperatura constante, que para gas ideal implica [[DeltaU]] = 0 y por lo tanto [[Q]] = −[[W]].

**Mini-ejemplo de contraste:** Compresión adiabática de gas: [[Q]] = 0, [[W]] = 2000 J (recibido), [[DeltaU]] = 2000 J, temperatura aumenta. Incorrecto: asumir [[DeltaU]] = 0 porque no hay calor. Correcto: [[DeltaU]] = [[W]] = 2000 J.

## Errores matemáticos

### Error 6: Error de signo al despejar Q o W del primer principio

**Por qué parece correcto:** Al transponer un término de la ecuación, el alumno mueve el término al otro miembro pero olvida cambiar su signo, como si la igualdad fuera una simple suma en lugar de una ecuación algebraica.

**Por qué es incorrecto:** Si [[DeltaU]] = [[Q]] + [[W]], al despejar [[Q]] se obtiene [[Q]] = [[DeltaU]] − [[W]], no [[Q]] = [[DeltaU]] + [[W]]. Cambiar un término de lado en una igualdad siempre invierte su signo.

**Señal de detección:** El valor de [[Q]] o [[W]] calculado tiene signo contrario al esperado físicamente, o la verificación [[DeltaU]] = [[Q]] + [[W]] no se cumple con los valores obtenidos.

**Corrección conceptual:** Practicar el despeje algebraico en las tres formas equivalentes del primer principio: [[DeltaU]] = [[Q]] + [[W]]; [[Q]] = [[DeltaU]] − [[W]]; [[W]] = [[DeltaU]] − [[Q]]. Verificar siempre que al sustituir de vuelta se recupera la igualdad original.

**Mini-ejemplo de contraste:** [[DeltaU]] = 200 J, [[W]] = −150 J. Incorrecto: [[Q]] = 200 + (−150) = 50 J aplicando [[Q]] = [[DeltaU]] + [[W]]. Correcto: [[Q]] = 200 − (−150) = 350 J. Verificación: 350 + (−150) = 200 J = [[DeltaU]]. ✓

## Errores de interpretación

### Error 7: Concluir que el segundo principio se viola cuando la entropía del sistema cerrado disminuye

**Por qué parece correcto:** El alumno recuerda que "la entropía nunca disminuye" y al observar que la entropía del sistema cerrado ha disminuido concluye que hay una violación. El enunciado del segundo principio parece aplicarse directamente al sistema.

**Por qué es incorrecto:** El segundo principio establece que la entropía del universo (sistema más entorno) nunca disminuye. La entropía del sistema cerrado puede disminuir perfectamente si el sistema cede calor al entorno: la entropía del entorno aumenta en mayor medida y la suma total es no negativa.

**Señal de detección:** El alumno declara violación del segundo principio para un proceso como la refrigeración o la condensación, donde [[S]] del sistema disminuye por cesión de calor al entorno. La señal es que se evalúa solo el sistema, no el universo completo.

**Corrección conceptual:** Siempre calcular la variación de entropía del universo = variación de entropía del sistema + variación de entropía del entorno. Solo esta suma total debe ser no negativa para que el proceso sea físicamente posible.

**Mini-ejemplo de contraste:** Refrigerante en una nevera cede 300 J al entorno a 300 K: DeltaS_entorno = +1 J/K. El refrigerante recibe 250 J del interior a 250 K y pierde entropía: DeltaS_sistema = −0.5 J/K. DeltaS_universo = +0.5 J/K > 0. El segundo principio se cumple. Incorrecto: concluir violación porque DeltaS_sistema < 0.

## Regla de autocontrol rápido

Antes de dar por correcto cualquier resultado con el primer principio en sistema cerrado, verifica:

1. ¿He declarado explícitamente la convención de signos (IUPAC o ingeniería)?
2. ¿[[DeltaU]] menos [[Q]] menos [[W]] es cero? (Con convención IUPAC donde [[W]] es trabajo recibido.)
3. ¿La frontera del sistema es realmente impermeable a la materia? Si hay flujo de masa, el modelo no es válido.
4. Si [[DeltaU]] es cero, ¿está justificado? (Solo si el proceso es cíclico o isotérmico de gas ideal.)
5. Si la entropía del sistema disminuye, ¿he verificado que la entropía del universo no disminuye?
