const e=`# Aplicaciones fisicas\r
\r
## 1. Cinematica\r
\r
<!-- algebra-numbered-app-fix-v1:1 -->\r
Contexto fisico: problema de movimiento con modelo elegido. Uso operativo: calcula o interpreta la variable aislada y compara si la escala final es coherente con el movimiento.\r
\r
En cinematica, el despeje permite cambiar la pregunta dentro de la misma relacion de movimiento. Si conoces distancia y tiempo, puedes hallar velocidad media; si conoces velocidad y distancia, puedes hallar tiempo; si conoces aceleracion y tiempo, puedes hallar cambio de velocidad.\r
\r
Lo importante es no usar el despeje como sustituto del modelo. Primero decides si el movimiento es uniforme, uniformemente acelerado o variable. Despues despejas la magnitud que pide el problema. Asi evitas aplicar una formula de velocidad constante a una situacion con aceleracion.\r
\r
## 2. Dinamica\r
\r
<!-- algebra-numbered-app-fix-v1:2 -->\r
Contexto fisico: sistema dinamico con eje, masa y fuerza neta definidos. Uso operativo: calcula la incognita y detecta si signo, unidad y dependencia respetan el modelo.\r
\r
En dinamica, despejar transforma leyes como la segunda ley de Newton en preguntas distintas. Puedes calcular fuerza neta, masa o aceleracion segun que datos sean conocidos. La unidad final sirve de control: fuerza en newtons, masa en kilogramos, aceleracion en metros por segundo cuadrado.\r
\r
Tambien ayuda a interpretar proporcionalidades. Para una misma fuerza, mayor masa implica menor aceleracion; para una misma aceleracion, mayor masa exige mayor fuerza. El despeje debe conservar esa lectura.\r
\r
## 3. Trabajo, energia y potencia\r
\r
<!-- algebra-numbered-app-fix-v1:3 -->\r
Contexto fisico: transferencia de energia o potencia durante un proceso. Uso operativo: calcula la magnitud pedida e interpreta si el signo representa aporte o perdida de energia.\r
\r
En energia, muchas relaciones conectan trabajo, fuerza, desplazamiento, potencia y tiempo. Despejar permite saber cuanto tiempo debe actuar una potencia, que fuerza media produce cierto trabajo o que energia se transfiere en un proceso.\r
\r
Aqui los signos importan mucho. Un trabajo negativo no se arregla cambiando el despeje: puede indicar que una fuerza se opone al movimiento y extrae energia mecanica.\r
\r
## 4. Electricidad\r
\r
<!-- algebra-numbered-app-fix-v1:4 -->\r
Contexto fisico: circuito con tension, corriente y resistencia medibles. Uso operativo: calcula la variable desconocida y compara si la dependencia directa o inversa tiene sentido.\r
\r
En circuitos sencillos, despejar permite pasar entre tension, corriente y resistencia. Si una resistencia aumenta manteniendo la tension, la corriente disminuye; esa dependencia inversa debe aparecer en el resultado.\r
\r
Tambien es una zona donde las unidades protegen contra errores. Voltios, amperios y ohmios no son etiquetas finales: indican si la operacion usada tiene sentido.\r
\r
## 5. Fluidos y presion\r
\r
En fluidos, despejar aparece al relacionar presion, fuerza, area, densidad o altura. Por ejemplo, una misma presion puede alcanzarse con mucha fuerza sobre gran area o con poca fuerza sobre area pequena.\r
\r
La interpretacion fisica es esencial porque algunas cantidades deben ser positivas, como area, densidad o volumen. Si el despeje produce un area negativa, el problema no esta en la calculadora sino en el modelo, el signo o los datos.\r
\r
<!-- algebra-intensive-fix-v1 -->\r
## Cierre intensivo de transferencia\r
\r
En cinematica, el contexto es elegir si una ecuacion de movimiento permite hallar posicion, velocidad, aceleracion o tiempo. El uso operativo consiste en decidir primero que variable aparece una sola vez y cual aparece repetida; si el tiempo aparece al cuadrado, el problema ya no es un despeje lineal.\r
\r
En dinamica, el modelo \`F = m a\` parece simple, pero el contexto fisico decide el signo de la fuerza neta y si la masa puede tratarse como constante. El despeje solo es valido despues de fijar eje, sistema y condiciones.\r
\r
En electricidad y fluidos, despejar una resistencia, una presion o un area obliga a revisar denominadores nulos y unidades. Ese control evita aceptar resultados imposibles aunque la calculadora entregue un numero.\r
\r
`;export{e as default};
