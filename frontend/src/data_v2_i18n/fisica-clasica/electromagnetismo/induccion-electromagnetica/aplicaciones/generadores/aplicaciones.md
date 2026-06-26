# Aplicaciones

## 1. Alternador de automóvil

En un automóvil, el alternador convierte parte de la potencia mecánica del motor en energía eléctrica para batería, luces, sensores y electrónica de control. La bobina y el campo magnético se diseñan para que [[epsilon_0]] sea suficiente incluso cuando el régimen del motor cambia. El regulador evita que la tensión útil crezca sin control al aumentar [[omega]].

La simplificación dominante consiste en tratar el alternador como una fuente de fem con regulación. La interpretación física relevante es que más giro facilita la inducción, pero la salida real queda limitada por electrónica, calentamiento y demanda de la batería.

En diagnóstico, esta aplicación permite distinguir una avería de inducción de una avería de regulación. Si el eje gira y existe campo, debería aparecer fem interna; si la batería no carga, el problema puede estar en rectificación, escobillas, diodos o control. Esa separación evita culpar a [[campo_magnetico]] o [[numero_de_espiras]] cuando el fallo real está en la etapa de salida.

Variable dominante: la velocidad angular efectiva [[omega]] controla la escala de fem antes de la regulación.
Límite de validez: el modelo ideal deja de valer cuando el regulador, la saturación magnética o el calentamiento dominan la salida.

## 2. Turbina eólica

En una turbina eólica, el viento aporta [[potencia_mecanica_de_entrada]] al eje y el generador transforma esa entrada en [[potencia_electrica_util]]. El diseño busca mantener una conversión estable aunque la velocidad del viento varíe. La física de inducción aparece en el generador, pero el rendimiento global depende también de palas, caja multiplicadora, electrónica de potencia y control.

La hipótesis útil de aula es separar captura mecánica y conversión electromagnética. Si la turbina gira más rápido, la fem inducida tiende a aumentar; si el viento fluctúa, el sistema de control debe evitar tensiones y potencias fuera de rango.

La lectura de [[eta]] es crítica porque el sistema completo no se evalúa solo por producir tensión. Un aerogenerador puede inducir fem alta en ráfagas y aun así no entregar potencia útil estable si el control limita la carga o si la velocidad queda fuera de la zona óptima de conversión.

Variable dominante: la potencia mecánica de entrada [[potencia_mecanica_de_entrada]] fija el techo energético de la potencia eléctrica útil.
Límite de validez: la estimación simple falla con viento turbulento, control activo, saturación o desconexión por seguridad.

## 3. Central hidroeléctrica

En una central hidroeléctrica, el agua en caída mueve una turbina acoplada a un alternador. La ventaja física es que [[omega]] puede mantenerse muy estable, lo que permite frecuencia y tensión controladas. El generador convierte el movimiento rotatorio en fem alterna y después en potencia eléctrica de red.

La variable de diseño no es solo la tensión inducida. Importan la capacidad de entregar corriente, el rendimiento [[eta]], la refrigeración y las pérdidas del circuito magnético. Por eso una central puede manejar enormes [[potencia_electrica_util]] sin requerir campos absurdos: aumenta escala, número de espiras, sección conductora y calidad de conversión.

El análisis de orden de magnitud es distinto al de una dinamo pequeña. En vez de buscar giros extremadamente rápidos, se usan máquinas grandes con campos intensos, conductores robustos y refrigeración. La estabilidad de [[omega]] se vuelve tan importante como la amplitud de la fem.

Variable dominante: el rendimiento [[eta]] decide qué fracción de la entrada hidráulica termina como salida eléctrica útil.
Límite de validez: el modelo ideal no describe regulación de red, pérdidas de transmisión ni transitorios de conexión.

## 4. Dinamo de bicicleta

Una dinamo de bicicleta muestra el fenómeno a escala humana. Al aumentar la rapidez de la rueda, aumenta la variación de flujo y la lámpara recibe más energía. Cuando se conecta la luz, el ciclista nota más resistencia porque la energía eléctrica sale del trabajo mecánico.

Este caso es pedagógicamente valioso porque corrige la idea de que la fem inducida es gratuita. La intensidad de la luz depende de [[potencia_electrica_util]], no solo de [[epsilon_0]]. A velocidades bajas, puede existir inducción insuficiente para alimentar bien la lámpara; a velocidades altas, la electrónica limita la tensión.

También permite leer la diferencia entre circuito abierto y carga conectada. En vacío puede medirse tensión sin transferencia apreciable de energía; con la lámpara, aparece corriente y el sistema exige más trabajo mecánico. Esa reacción es una prueba cualitativa de Lenz.

Variable dominante: la fem inducida [[epsilon]] controla el inicio de alimentación visible de la lámpara.
Límite de validez: el modelo simple falla si hay rectificación, batería intermedia o regulación electrónica.

## 5. Micrófono dinámico

Un micrófono dinámico es un generador pequeño: una bobina se mueve en un campo magnético por la vibración del diafragma. El sonido aporta movimiento mecánico y el dispositivo entrega una señal eléctrica muy pequeña. Aquí [[epsilon]] no busca potencia grande, sino reproducir fielmente la forma temporal de la vibración.

La hipótesis dominante es linealidad: desplazamientos pequeños, campo estable y bobina ligera. La interpretación física cambia respecto a una central eléctrica; no se prioriza [[potencia_electrica_util]], sino que la fem siga la variación del movimiento sin distorsión apreciable.

Esta aplicación muestra que “generador” no significa siempre máquina de potencia. La misma física sirve para sensorizar movimiento. La señal inducida codifica rapidez y forma de la vibración, por lo que la fidelidad depende de mantener constantes [[campo_magnetico]], geometría y respuesta mecánica.

Variable dominante: el cambio de flujo [[cambio_de_flujo_magnetico]] asociado al movimiento del diafragma determina la señal inducida.
Límite de validez: la lectura lineal falla con amplitudes grandes, saturación magnética o resonancias mecánicas del diafragma.