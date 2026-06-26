const e=`# Aplicaciones\r
\r
## 1. Vibracion de estructuras\r
\r
Variable dominante: [[omega]].\r
\r
Limite de validez: desplazamientos pequenos respecto al equilibrio.\r
\r
En puentes y edificios, las frecuencias normales indican que excitaciones son peligrosas. El modo [[phi]] muestra la forma de deformacion asociada. La aplicacion ensena que no basta saber cuanto vibra un punto; hay que saber que patron colectivo se activa.\r
\r
La pregunta profesional es que patron de deformacion concentra riesgo. El criterio une frecuencia y forma modal para no mirar solo desplazamientos locales.\r
\r
## 2. Moleculas y espectros\r
\r
Variable dominante: [[phi]].\r
\r
Limite de validez: enlaces cerca de equilibrio y respuesta aproximadamente armonica.\r
\r
Las moleculas vibran mediante modos colectivos que pueden asociarse a senales espectroscopicas. La matriz [[K]] representa curvaturas del potencial y [[M]] pondera masas atomicas. El alumno conecta autovalores con informacion fisica medible.\r
\r
La pregunta profesional es que modo molecular produce una senal observable. El criterio conecta masas, curvaturas y espectro de forma interpretable.\r
\r
## 3. Instrumentos musicales\r
\r
Variable dominante: [[omega]].\r
\r
Limite de validez: amplitudes moderadas y material casi lineal.\r
\r
Una cuerda, membrana o caja resonante produce tonos por modos normales. La aplicacion muestra por que cambiar masa, tension efectiva o rigidez desplaza frecuencias. El objetivo didactico es separar tono, forma modal y amplitud.\r
\r
La pregunta profesional es que forma vibratoria crea el tono. El criterio separa frecuencia, amplitud y geometria del instrumento.\r
\r
## 4. Suspension de vehiculos\r
\r
Variable dominante: [[A]].\r
\r
Limite de validez: oscilaciones pequenas alrededor de la posicion de trabajo.\r
\r
Un vehiculo puede tener modos de cabeceo, balanceo y rebote. La amplitud modal indica que modo domina bajo una excitacion concreta. Esta lectura ayuda a disenar sistemas que evitan resonancias incomodas o peligrosas.\r
\r
La pregunta profesional es que modo domina la comodidad o seguridad. El criterio convierte la amplitud modal en decision de diseno.\r
\r
## 5. Robots y estabilidad\r
\r
Variable dominante: [[eta]].\r
\r
Limite de validez: linealizacion local alrededor de una postura estable.\r
\r
En robots articulados, los modos normales permiten estudiar pequenas desviaciones de equilibrio. Si el modo crece o la frecuencia no es real, la postura no es estable bajo el modelo lineal. La aplicacion conecta mecanica analitica con control y diseno.\r
\r
La pregunta profesional es si la postura vuelve al equilibrio o amplifica perturbaciones. El criterio usa modos para leer estabilidad local.\r
\r
\r
## Lectura transversal de aplicaciones\r
\r
En todas estas aplicaciones, los modos normales actuan como lenguaje de estabilidad y respuesta colectiva. La frecuencia no se interpreta sola: debe ir unida a una forma modal, una escala pequena y un equilibrio alrededor del cual la linealizacion tenga sentido. En estructuras, moleculas, instrumentos, vehiculos o robots, la pregunta comun es que patron se activa y por que esa activacion importa. Para el alumno, el beneficio es pasar de muchas coordenadas acopladas a movimientos colectivos comprensibles. Para el profesor, el beneficio es disponer de una secuencia clara: equilibrio, matrices, autovalores, modos, amplitudes y limite de validez. Cuando esa secuencia se cumple, la aplicacion enseña a leer vibraciones reales, no solo algebra matricial.\r
\r
\r
## Criterio de transferencia\r
\r
La transferencia a nuevos problemas exige reconocer el equilibrio y la escala donde la linealizacion es honesta. Primero se define el desplazamiento respecto al equilibrio y se comprueba que sea pequeno. Despues se construyen las matrices que representan inercia y rigidez, se resuelve el problema modal y se interpreta cada frecuencia junto con su forma. Finalmente se decide que modos participan segun las condiciones iniciales o la excitacion externa. Este criterio sirve en estructuras, moleculas, instrumentos, vehiculos y robots. La aplicacion avanzada no termina en autovalores, sino en leer patrones colectivos y limites de validez.\r
\r
\r
## Cierre de aplicacion avanzada\r
\r
El uso avanzado de modos normales exige terminar cada aplicacion con una decision sobre estabilidad y respuesta colectiva. No basta calcular frecuencias; hay que explicar que forma modal vibra, que amplitud participa, que escala mantiene valida la linealizacion y que pasaria si la excitacion creciera. En problemas reales, esta exigencia separa una tabla de autovalores de una interpretacion mecanica. Un alumno puede transferir el criterio a edificios, moleculas, instrumentos, vehiculos o robots si conserva la cadena comun: equilibrio, desplazamiento pequeno, matrices, autovalores, modos y superposicion. Esa cadena convierte el calculo en lectura fisica de sistemas complejos.\r
\r
## Criterio de modelización avanzada\r
\r
El análisis de pequeñas oscilaciones se utiliza cuando el sistema real puede entenderse como una desviación controlada alrededor de una configuración de equilibrio. La decisión física central consiste en comprobar que la amplitud de [[eta]] es suficientemente pequeña para que los términos lineales dominen y que las matrices [[M]] y [[K]] representen de forma fiel la inercia y la rigidez locales. En esa situación, los modos normales no son una simple técnica matemática: identifican patrones colectivos que el sistema puede sostener con una frecuencia definida y una forma espacial estable.\r
\r
Este criterio aparece en estructuras, moléculas, redes cristalinas, instrumentos musicales, vibraciones de máquinas y estabilidad de configuraciones mecánicas. Si una frecuencia [[omega]] es real y positiva, el equilibrio puede responder con oscilaciones organizadas; si aparece una frecuencia nula o imaginaria, el modelo señala una libertad no restringida o una inestabilidad. Por eso el leaf debe enseñar a leer el espectro modal como diagnóstico físico, no como una tabla de raíces. El objetivo avanzado es reconocer qué partes de un sistema vibran juntas, qué acoplamientos transmiten energía y qué condiciones hacen que una aproximación lineal deje de ser confiable.\r
\r
`;export{e as default};
