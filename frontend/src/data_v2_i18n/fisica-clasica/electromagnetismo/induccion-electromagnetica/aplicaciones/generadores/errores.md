## Errores conceptuales


### Error 1: Creer que el generador crea energía eléctrica

**Por qué parece correcto**

La analogía cotidiana con una pila lleva a imaginar el generador como una fuente autónoma. El alumno ve tensión en bornes y generaliza en exceso la idea de “productor de electricidad”.

**Por qué es incorrecto**

La energía procede de [[potencia_mecanica_de_entrada]]. La inducción convierte trabajo mecánico en separación de cargas y luego en [[potencia_electrica_util]] si hay carga conectada.

**Señal de detección**

El razonamiento ignora el par resistente que aparece al conectar una carga.

**Corrección conceptual**

Un generador es un convertidor de energía: sin entrada mecánica sostenida, no hay salida eléctrica sostenida.

**Mini-ejemplo de contraste**

Una dinamo de bicicleta ilumina más cuando se pedalea con esfuerzo adicional. Si no hubiera conversión mecánica, la lámpara no exigiría más trabajo al ciclista.

## Errores de modelo


### Error 2: Usar el modelo ideal para cualquier carga

**Por qué parece correcto**

La fórmula de [[epsilon_0]] parece dar directamente la tensión disponible. Es una confusión de magnitudes entre fem interna y salida útil.

**Por qué es incorrecto**

La carga modifica la corriente, las pérdidas internas y la tensión terminal. El modelo ideal no incluye calentamiento ni caída interna.

**Señal de detección**

El cálculo predice una tensión alta, pero el montaje real se hunde al conectar una resistencia baja.

**Corrección conceptual**

Usa el modelo ideal para estimar fem; pasa al modelo extendido para potencia bajo carga.

**Mini-ejemplo de contraste**

Un pequeño generador manual puede mostrar decenas de voltios en vacío y aun así no alimentar una carga potente durante mucho tiempo.

## Errores matemáticos


### Error 3: Confundir cambio de flujo con flujo máximo

**Por qué parece correcto**

El alumno recuerda que el flujo interviene en Faraday y sustituye cualquier valor de [[flujo_magnetico_maximo_enlazado]] sin atender al intervalo. Es una sustitución mecánica de símbolos.

**Por qué es incorrecto**

La fem media depende de [[cambio_de_flujo_magnetico]] durante [[intervalo_temporal]], no del valor máximo aislado. Sin cambio de flujo, la fem media desaparece.

**Señal de detección**

El resultado no cambia aunque el tiempo del proceso sea más corto o más largo.

**Corrección conceptual**

Identifica siempre estado inicial, estado final e intervalo antes de calcular [[epsilon]].

**Mini-ejemplo de contraste**

Mantener una bobina quieta en un campo intenso puede dar gran flujo, pero no una fem sostenida por variación de flujo.

## Errores de interpretación


### Error 4: Tratar el signo como un adorno

**Por qué parece correcto**

Muchos ejercicios piden solo módulos, y eso crea el hábito de descartar la polaridad. Es una simplificación válida mal extendida.

**Por qué es incorrecto**

El signo indica la polaridad inducida y la oposición de Lenz. Sin signo no se puede interpretar el sentido de corriente ni la reacción mecánica.

**Señal de detección**

El alumno obtiene un valor de [[epsilon]] pero no puede decir qué terminal queda a mayor potencial.

**Corrección conceptual**

Calcula el módulo si se pide tensión máxima, pero usa Lenz para polaridad y sentido cuando el circuito lo requiera.

**Mini-ejemplo de contraste**

Invertir el sentido de giro cambia la polaridad instantánea aunque la amplitud sea la misma.

## Regla de autocontrol rápido

Antes de cerrar un problema de generadores, comprueba cuatro preguntas: qué cambia en [[flujo_magnetico_maximo_enlazado]], durante cuánto tiempo cambia, qué magnitud eléctrica se pide y si la respuesta es fem o potencia. Después revisa que [[eta]] no supere la unidad y que [[potencia_electrica_util]] no sea mayor que [[potencia_mecanica_de_entrada]].

## Errores de unidades


### Error 5: Confundir valor eficaz con amplitud de la fem

**Por qué parece correcto**

En el contexto de la red eléctrica se trabaja habitualmente con valores eficaces. El alumno que llega al leaf de generadores desde circuitos de corriente alterna tiende a identificar [[epsilon_0]] con la tensión eficaz de red, aplicando un factor de escala erroneo o ninguno.

**Por qué es incorrecto**

[[epsilon_0]] es la **amplitud** de la señal sinusoidal, no el valor eficaz. La tensión eficaz equivale a la amplitud dividida por la raíz de dos. Usar [[epsilon_0]] directamente como si fuera la tensión eficaz sobreestima la potencia entregada a una carga resistiva por un factor de dos.

**Señal de detección**

El alumno calcula [[potencia_electrica_util]] multiplicando la amplitud al cuadrado por la conductancia de la carga sin el factor un medio, obteniendo el doble de la potencia real.

**Corrección conceptual**

Distinguir siempre amplitud y valor eficaz. Si el problema pide potencia media entregada a una carga resistiva, usar el valor eficaz de [[epsilon]], que es [[epsilon_0]] dividido por la raíz de dos. Si solo se pide la amplitud de la fem generada, [[epsilon_0]] es el resultado directo.

**Mini-ejemplo de contraste**

Un generador con [[epsilon_0]] igual a 311 V tiene un valor eficaz de aproximadamente 220 V. Aplicar directamente 311 V a la fórmula de potencia media da el doble de la potencia correcta. La red eléctrica doméstica de 220 V no tiene una amplitud de 220 V sino de aproximadamente 311 V.