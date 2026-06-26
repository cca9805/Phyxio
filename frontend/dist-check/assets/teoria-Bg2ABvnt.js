const e=`# Proyecciones y componentes\r
\r
## Que es\r
\r
Este leaf estudia como convertir una magnitud dirigida en componentes sobre ejes y reconstruirla sin perder signo, modulo ni unidad. La trigonometria no es una lista de botones de calculadora: es el lenguaje que conecta angulo, direccion, longitud, componente, signo y escala. Un alumno que empieza desde cero debe aprender primero que un angulo siempre necesita una referencia; despues debe entender que las razones trigonometricas convierten geometria en calculo; finalmente debe usar esa estructura para leer problemas fisicos con fuerzas, velocidades, campos, pendientes y rotaciones.\r
\r
La idea central es que una direccion no se entiende solo con un numero. Hace falta saber desde que eje se mide, en que sentido crece, en que cuadrante cae y que magnitudes quedan proyectadas sobre los ejes. Por eso este leaf avanza desde reconocimiento basico hasta uso avanzado: primero identifica el dibujo, luego calcula, despues interpreta signos y por ultimo decide si el modelo geometrico representa el sistema real.\r
\r
## Por que aparece en fisica\r
\r
Aparece porque muchas magnitudes fisicas tienen direccion o dependen de una geometria. En cinematica se proyectan posiciones y velocidades; en dinamica se descomponen fuerzas; en energia se leen pendientes y distancias; en electricidad y magnetismo se describen campos; en ondas y rotacion se usan angulos que cambian con el tiempo.\r
\r
El uso fisico exige conservar unidad, signo, dominio y modelo. Una componente de fuerza sigue midiendose en newtons, una velocidad angular exige angulos coherentes, una distancia proyectada no puede superar el modulo original salvo que se haya invertido mal una razon. La trigonometria funciona como puente entre dibujo y ecuacion.\r
\r
## Idea visual o geometrica\r
\r
![Proyecciones y componentes](/graphs/matematicas/trigonometria-y-geometria/proyecciones-componentes.svg)\r
\r
Visualmente, el problema se reduce a localizar un triangulo, un arco, una direccion o una proyeccion. La hipotenusa suele representar el modulo de una magnitud; los catetos representan componentes o distancias medibles; el angulo decide que parte cae sobre cada eje. Si se cambia el eje de referencia, seno y coseno pueden intercambiarse, y si se cambia de cuadrante aparecen signos distintos.\r
\r
| Dato conocido | Componente paralela | Componente perpendicular | Control |\r
|---|---|---|---|\r
| modulo y angulo desde x | A cos(theta) | A sin(theta) | mismo modulo al reconstruir |\r
| modulo y angulo desde y | A sin(theta) | A cos(theta) | cambia la funcion usada |\r
| componente y angulo | dividir por sin/cos | despejar modulo | revisar dominio |\r
\r
## Lenguaje simbolico minimo\r
\r
La expresion simbolica de referencia es \`A_x = A cos(theta), A_y = A sin(theta), A = sqrt(A_x^2 + A_y^2)\`. No debe memorizarse aislada: debe leerse junto al dibujo. Cada simbolo representa una magnitud con unidad o una razon sin unidad. Los angulos pueden escribirse en grados para interpretar el dibujo, pero en calculo avanzado y movimiento angular los radianes son la medida natural.\r
\r
Nivel basico: identifica cateto, hipotenusa, radio, arco, eje o componente. Nivel intermedio: elige seno, coseno, tangente, Pitagoras o conversion polar segun que dato falta. Nivel avanzado: revisa cuadrante, dominio de funciones inversas, signo fisico, escala del resultado y condiciones del modelo.\r
\r
## Que significa el resultado\r
\r
El resultado no es solo un numero. Significa una longitud proyectada, una direccion, una componente, una inclinacion, una posicion o una escala angular. Debe tener unidad si representa magnitud fisica y debe ser adimensional si representa una razon trigonometrica. Si el resultado contradice el dibujo, el signo esperado o el orden de magnitud, el calculo no esta cerrado.\r
\r
Tambien significa una dependencia. Si el angulo cambia hacia una direccion mas horizontal, una componente horizontal suele crecer y una vertical suele disminuir. Si el radio aumenta con el mismo angulo, las coordenadas crecen proporcionalmente. Esta lectura de dependencia es la que permite enfrentarse a problemas fisicos nuevos.\r
\r
## Cuando no debes usarlo\r
\r
No debes aplicar trigonometria mecanicamente si no has fijado eje, referencia angular, sentido positivo y dominio. Tampoco debes usar un triangulo rectangulo cuando la geometria real no lo contiene, ni tomar una funcion inversa sin revisar que hay varios angulos posibles con la misma razon.\r
\r
En nivel avanzado, no debes extrapolar un dibujo plano a un sistema tridimensional, curvo o variable sin justificar el modelo. Si el angulo cambia con el tiempo, si el radio no es constante o si las componentes dependen de una base movil, la herramienta sigue siendo util, pero exige mas cuidado.\r
\r
## Resumen operativo\r
\r
Primero dibuja o identifica la geometria. Despues fija referencia, eje, sentido positivo y unidad angular. Luego elige la relacion adecuada, calcula con unidades y revisa signo, cuadrante, dominio y escala. Cierra siempre con una frase fisica: que se ha obtenido, en que unidad, bajo que geometria y que error se ha evitado.\r
`;export{e as default};
