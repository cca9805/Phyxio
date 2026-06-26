const e=`## Errores conceptuales

### Error 1: Confundir el proceso isotermico con el adiabatico

**Por qué parece correcto**

El alumno asocia "sin cambio de temperatura" con "sin intercambio de calor", porque en muchos procesos cotidianos las dos ideas van juntas. La analogia erronea es: si la temperatura no cambia, no puede haber calor fluyendo. El mecanismo cognitivo es una **generalizacion incorrecta** de la calorimetria elemental donde el calor se asocia siempre a cambio de temperatura.

**Por qué es incorrecto**

En termodinamica, el calor puede fluir sin que la temperatura cambie cuando hay un foco termico externo. La temperatura constante en el proceso isotermico es precisamente el resultado del flujo de calor entre el gas y el foco, no de su ausencia. En el proceso adiabatico es al revés: no hay calor y por eso la temperatura si cambia. [[Q_iso]] es exactamente igual a [[W]] en el proceso isotermico; afirmar que [[Q_iso]] es nulo equivale a negar el primer principio de la termodinamica.

**Señal de detección**

El alumno escribe que el gas no intercambia calor con el entorno durante el proceso, o afirma que el calor absorbido es nulo. Tambien aparece cuando calcula [[W]] pero deja [[Q_iso]] en blanco o lo pone igual a cero.

**Corrección conceptual**

En el proceso isotermico, [[T]] es constante porque el gas intercambia calor de manera continua con el foco termico. El calor absorbido es exactamente igual al trabajo realizado. La ausencia de calor define al proceso adiabatico, no al isotermico.

**Mini-ejemplo de contraste**

Un mol de gas ideal se expande isotermicamente duplicando su volumen. El alumno incorrecto dice que el calor absorbido es nulo. Si aplicara el primer principio y tuviera en cuenta que la variacion de energia interna es nula, llegaria a la contradiccion de que [[W]] es distinto de cero pero [[Q_iso]] es cero, lo que viola directamente la primera ley. El resultado correcto es que el gas absorbe unos 1730 J del foco termico, exactamente igual al trabajo que realiza sobre el entorno.

---

### Error 2: Creer que la presion no cambia en el proceso isotermico

**Por qué parece correcto**

El alumno generaliza que "si algo no cambia, todo lo demas tampoco cambia". Como [[T]] es constante, puede suponer que tambien lo son [[p2]] y [[V2]]. Ademas, el nombre "isotermico" solo menciona la temperatura, lo que refuerza la idea erronea de que el proceso no implica ningun cambio de estado.

**Por qué es incorrecto**

En el proceso isotermico, [[T]] es la unica magnitud de estado que permanece constante. La presion y el volumen cambian de forma inversamente proporcional siguiendo la ley de Boyle. Si el volumen aumenta en un proceso isotermico, la presion disminuye en la misma proporcion. Creer que la presion no cambia equivale a no comprender la ecuacion de estado del gas ideal.

**Señal de detección**

El alumno asigna [[p2]] igual a [[p1]] en el proceso isotermico, o calcula un trabajo nulo porque asume que el volumen tampoco cambia. Tambien aparece cuando el alumno dibuja una linea horizontal en el diagrama pV para representar la isoterma.

**Corrección conceptual**

La ley de Boyle establece que el producto de presion por volumen se conserva en el proceso isotermico. Esto implica que si el volumen cambia, la presion tambien cambia, pero en sentido opuesto. La isoterma en el diagrama pV es una hiperbola, no una linea horizontal ni vertical.

**Mini-ejemplo de contraste**

Un gas con presion inicial de 200 kPa y volumen de 1 litro se expande isotermicamente hasta un volumen de 2 litros. Si el alumno asume que [[p2]] no cambia, calcula que la presion final es 200 kPa, lo que contradice la ley de Boyle. El resultado correcto es que [[p2]] baja a 100 kPa, de modo que el producto presion por volumen sigue siendo 200 J en ambos estados.

## Errores de modelo

### Error 1: Aplicar la ley de Boyle a procesos rapidos

**Por qué parece correcto**

La ley de Boyle parece una regla general valida en cualquier circunstancia, porque aparece como una de las leyes fundamentales del gas ideal sin restricciones de velocidad. El alumno no presta atencion a la hipotesis de proceso cuasiestatico porque no le parece relevante para un calculo de laboratorio.

**Por qué es incorrecto**

La ley de Boyle solo es valida para procesos reversibles y cuasiestaticos. En un proceso rapido, el gas no esta en equilibrio termodinamico en cada instante y el producto pV no se conserva en el trayecto, aunque si puede conservarse entre el estado inicial y el estado final si la temperatura vuelve al valor original. El trabajo real en un proceso rapido es siempre menor que el trabajo calculado con la hiperbola cuasiestatica.

**Señal de detección**

El alumno obtiene un trabajo calculado mayor que el medido experimentalmente. Tambien aparece si el enunciado menciona que el proceso es rapido o brusco y el alumno aplica igualmente la formula logaritmica.

**Corrección conceptual**

La formula del trabajo isotermico asume que el proceso sigue la hiperbola en todo momento. Para aplicarla, el proceso debe ser suficientemente lento. Cuando no se especifica la velocidad del proceso y se pide el maximo trabajo posible, se asume el proceso reversible cuasiestatico.

**Mini-ejemplo de contraste**

Un gas se expande bruscamente contra el vacio (expansion libre). En este caso, el gas no empuja ningun embolo y el trabajo mecanico realizado sobre el entorno es nulo, aunque el volumen cambie. Si el alumno aplica la formula logaritmica, obtendra un valor incorrecto distinto de cero. En la expansion libre de un gas ideal, el trabajo es nulo y la temperatura tampoco cambia, pero no porque el proceso sea isotermico cuasiestatico sino porque no hay transferencia de energia.

## Errores matemáticos

### Error 1: Usar temperaturas en grados Celsius en la formula del trabajo

**Por qué parece correcto**

El alumno esta acostumbrado a trabajar con temperaturas en grados Celsius en la vida cotidiana y en muchos problemas de fisica de nivel basico. Como el proceso es isotermico y la temperatura no cambia, puede pensar que usar 20 °C o 293 K es equivalente porque la diferencia de temperatura es cero en ambos casos.

**Por qué es incorrecto**

La formula del trabajo isotermico contiene [[T]] en valor absoluto como factor multiplicativo, no como diferencia. Usar 20 °C en lugar de 293 K produce un resultado incorrecto por un factor de casi 15. El error es grande: para un mol de gas a 20 °C, el trabajo calculado con celsius seria unos 166 J por el logaritmo del cociente de volumenes, mientras que el resultado correcto con 293 K es unos 2025 J para una duplicacion de volumen.

**Señal de detección**

El valor del trabajo obtenido es mucho menor de lo esperado para la temperatura indicada en el enunciado. Si el resultado es negativo cuando la temperatura se da en celsius negativo, el error es evidente.

**Corrección conceptual**

En todas las formulas termodinamicas que usan [[T]] como factor (no como diferencia), la temperatura debe expresarse en **kelvin absolutos**. La conversion es añadir 273.15 al valor en Celsius.

**Mini-ejemplo de contraste**

Para un mol de nitrogeno a 20 °C duplicando su volumen, el alumno incorrecto calcula el trabajo como nR por 20 por el logaritmo de 2, obteniendo aproximadamente 115 J. El resultado correcto con 293 K es aproximadamente 2025 J, diferencia de un factor de 15 que podria hacer que un motor calculado con el valor incorrecto resultara inservible en la practica.

## Errores de interpretación

### Error 1: Interpretar el trabajo negativo como error de calculo

**Por qué parece correcto**

En mecanica, el trabajo positivo se asocia habitualmente con movimiento y accion. Un trabajo negativo puede parecer un resultado sin sentido fisico, especialmente si el alumno no ha interiorizado el convenio de signos termodinamico donde el trabajo positivo es el realizado por el gas sobre el entorno.

**Por qué es incorrecto**

En termodinamica, el signo de [[W]] tiene un significado fisico preciso. Trabajo positivo significa que el gas se expande y realiza trabajo sobre el entorno. Trabajo negativo significa que el entorno realiza trabajo sobre el gas durante la compresion. Ambos son fisicamente validos y forman parte del ciclo termodinamico. Ignorar el signo lleva a interpretar mal el intercambio de energia del sistema.

**Señal de detección**

El alumno escribe el valor absoluto del trabajo sin especificar el signo, o reescribe el resultado como positivo aunque el gas se haya comprimido. Tambien aparece cuando se calcula el calor intercambiado con el signo equivocado.

**Corrección conceptual**

El signo de [[W]] determina el sentido del proceso: positivo para expansion (el gas cede energia al entorno) y negativo para compresion (el entorno aporta energia al gas). En la formula, el signo lo da automaticamente el logaritmo del cociente [[V2]] dividido entre [[V1]]: si [[V2]] es mayor que [[V1]], el logaritmo es positivo; si es menor, es negativo. Este signo debe respetarse y reportarse junto al valor numerico.

**Mini-ejemplo de contraste**

Un gas se comprime isotermicamente de 2 litros a 1 litro. El logaritmo de la mitad es negativo (aproximadamente menos 0.693), por lo que el trabajo es negativo: el entorno realizo trabajo sobre el gas. Si el alumno reporta el trabajo como positivo, estaria afirmando que el gas realizo trabajo mientras se comprimia, lo que contradice la termodinamica del proceso.

## Regla de autocontrol rápido

Antes de dar por valido un resultado de un proceso isotermico, verificar tres cosas:

1. El producto [[p1]] por [[V1]] es igual al producto [[p2]] por [[V2]] dentro del margen de redondeo del calculo.
2. El signo de [[W]] coincide con el sentido del proceso: positivo si [[V2]] es mayor que [[V1]], negativo si es menor.
3. El calor calculado [[Q_iso]] es igual en magnitud y signo a [[W]]; si difieren, hay error en alguno de los dos calculos.

Si alguna de las tres condiciones falla, el resultado contiene un error que debe corregirse antes de continuar.
`;export{e as default};
