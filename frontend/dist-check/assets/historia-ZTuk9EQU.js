const e=`# Historia del motor eléctrico

## Problema histórico

A principios del siglo XIX la única forma de producir trabajo mecánico a gran escala era la máquina de vapor, ligada al consumo de carbón y a una maquinaria voluminosa y peligrosa. La pregunta sin respuesta era si la electricidad, ese fenómeno recién domesticado por Volta y Faraday, podía convertirse en movimiento de forma controlable y reproducible. Los científicos sabían que una corriente eléctrica producía un campo magnético, y que los imanes se atraían o se repelían, pero no existía ningún dispositivo que convirtiera esa interacción en rotación continua. El reto no era solo físico sino también ingenieril: hacer que una fuerza alternante de sentido se convirtiera en un par unidireccional y sostenido en el tiempo.

## Dificultad conceptual previa

El principal obstáculo intelectual era que la fuerza sobre un conductor en un campo magnético cambia de sentido cuando el conductor pasa de una posición a la contraria durante la rotación. Sin un mecanismo que invirtiera la corriente en el momento preciso, el conductor impulsado en una dirección durante media vuelta sería frenado durante la otra media vuelta, sin producir rotación neta. Este problema del sentido alternante de la fuerza era el nudo conceptual que impedía construir un motor práctico. Ninguno de los principios físicos conocidos sugería de forma obvia cómo mantener el par siempre en el mismo sentido sin un control externo continuo. La intuición de que había que sincronizar la inversión de la corriente con la posición del rotor tardó años en materializarse en un dispositivo funcional.

## Qué cambió

En 1821, Michael Faraday demostró que era posible producir rotación continua de un conductor alrededor de un imán permanente, aunque de forma rudimentaria. El avance decisivo llegó con Joseph Henry en 1831 y, de forma más completa, con William Sturgeon y después con los ingenieros que desarrollaron el conmutador mecánico en la década de 1830. El conmutador resolvió el problema del sentido alternante: un par de escobillas en contacto con segmentos del eje invertía automáticamente la conexión eléctrica del bobinado cada media vuelta, garantizando que la fuerza de Laplace actuara siempre en el mismo sentido de giro. Con ese mecanismo, el motor de corriente continua dejó de ser un artilugio de laboratorio y se convirtió en una máquina reproducible y escalable.

## Impacto en la física

El motor eléctrico consolidó la comprensión de la equivalencia entre trabajo mecánico y energía eléctrica, un concepto que precede formalmente a la ley de conservación de la energía de Joule y Helmholtz. La observación de que el motor consume más corriente cuando arrastra una carga pesada fue la demostración experimental más directa de que la energía eléctrica y la energía mecánica son formas intercambiables de la misma magnitud física. Ese resultado, obtenido de forma empírica antes de que existiera una formulación teórica completa, aceleró el desarrollo de la termodinámica clásica y de la teoría electromagnética de Maxwell. La reciprocidad entre motor y generador, verificada experimentalmente en los años 1860, demostró que las leyes de la inducción y de la fuerza magnética son aspectos del mismo fenómeno unificado.

## Conexión con física moderna

El motor de corriente continua de rotor bobinado es hoy el dispositivo de referencia para entender la conversión electromecánica, pero la familia de motores ha evolucionado enormemente. Los motores de imán permanente con conmutación electrónica (motores BLDC) han reemplazado al conmutador mecánico por transistores de potencia controlados por microprocesador, eliminando el desgaste de las escobillas y permitiendo velocidades y eficiencias inalcanzables con la tecnología mecánica. Los motores síncronos de reluctancia variable son la base de los vehículos eléctricos actuales. En todos esos casos, el principio físico es el mismo que formuló Faraday: la fuerza sobre una corriente en un campo magnético. Solo el mecanismo de conmutación ha cambiado, pasando de mecánico a electrónico y de ahí a óptico en los actuadores de nanoprecisión.
`;export{e as default};
