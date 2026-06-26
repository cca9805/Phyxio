const e=`## Errores conceptuales\r
\r
### Error 1: confundir presión con fuerza\r
\r
**Por qué parece correcto**  \r
El alumno ve que una prensa hidráulica “hace mucha fuerza” y concluye que presión y fuerza son la misma cosa. La intuición falla porque ambas magnitudes aparecen juntas en el mismo fenómeno.\r
\r
**Por qué es incorrecto**  \r
La presión [[p]] es fuerza por unidad de área. La fuerza [[F]] es una interacción total. Dos sistemas pueden tener la misma presión y fuerzas distintas si sus áreas [[A]] son diferentes.\r
\r
**Señal de detección**  \r
El error aparece cuando se responde en newtons a una pregunta de presión, o cuando se afirma que “más fuerza siempre significa más presión” sin mirar el área.\r
\r
**Corrección conceptual**  \r
Primero calcula o identifica [[p]]. Después, si hace falta, transforma esa presión en fuerza usando el área correspondiente.\r
\r
**Mini-ejemplo de contraste**  \r
Dos pistones pueden tener la misma [[p]] y distinta [[F]] porque sus [[A]] son distintas.\r
\r
### Error 2: creer que la presión solo existe hacia abajo\r
\r
**Por qué parece correcto**  \r
En hidrostática se repite que la presión aumenta con la profundidad profundidad, y el alumno asocia presión con peso vertical.\r
\r
**Por qué es incorrecto**  \r
En un fluido en reposo, la presión en un punto actúa normal a cualquier superficie. Puede producir fuerzas laterales sobre paredes, hacia arriba sobre un fondo o sobre un émbolo.\r
\r
**Señal de detección**  \r
El alumno dibuja presión únicamente vertical o ignora fuerzas laterales en recipientes.\r
\r
**Corrección conceptual**  \r
La profundidad determina el valor hidrostático, pero la fuerza producida por la presión es normal a la superficie concreta.\r
\r
**Mini-ejemplo de contraste**  \r
Una pared vertical recibe fuerza horizontal del agua aunque profundidad se mida verticalmente.\r
\r
## Errores de modelo\r
\r
### Error 1: usar presión uniforme donde hay profundidad variable\r
\r
**Por qué parece correcto**  \r
Es tentador elegir una sola presión media y multiplicarla por toda el área porque la fórmula [[F]] = [[p]][[A]] parece sencilla.\r
\r
**Por qué es incorrecto**  \r
Si la profundidad cambia sobre la superficie, la presión también cambia. En una pared vertical, la parte inferior soporta más presión que la superior.\r
\r
**Señal de detección**  \r
El enunciado menciona altura, pared vertical o depósito profundo, pero la resolución usa una única presión sin justificarla.\r
\r
**Corrección conceptual**  \r
Usa presión uniforme solo en superficies pequeñas o a igual profundidad. Si la presión varía, emplea promedio justificado, tramos o integración.\r
\r
**Mini-ejemplo de contraste**  \r
Una placa horizontal pequeña a profundidad fija puede usar una presión; una pared alta no.\r
\r
### Error 2: aplicar presión hidrostática a un fluido acelerado\r
\r
**Por qué parece correcto**  \r
La fórmula con densidad, gravedad y profundidad es conocida y parece aplicable a cualquier líquido.\r
\r
**Por qué es incorrecto**  \r
La relación hidrostática básica requiere fluido en reposo. Si hay aceleraciones importantes, chorros, bombas o flujo rápido, aparecen términos dinámicos y pérdidas.\r
\r
**Señal de detección**  \r
El problema habla de movimiento, velocidad o bomba, pero se usa solo la fórmula de columna estática.\r
\r
**Corrección conceptual**  \r
Antes de usar presión hidrostática, comprueba si el fluido puede modelarse como estático.\r
\r
**Mini-ejemplo de contraste**  \r
Un depósito quieto puede usar densidadgravedadprofundidad; un chorro impulsado necesita modelo dinámico.\r
\r
## Errores matemáticos\r
\r
### Error 1: no convertir el área a metros cuadrados\r
\r
**Por qué parece correcto**  \r
El área suele darse en cm² y el alumno la copia directamente porque el número parece manejable.\r
\r
**Por qué es incorrecto**  \r
La presión en pascales exige [[A]] en m². Un error de conversión puede multiplicar o dividir el resultado por \\(10^4\\).\r
\r
**Señal de detección**  \r
Aparecen presiones absurdamente pequeñas o grandes en problemas de pistones, placas o agujas.\r
\r
**Corrección conceptual**  \r
Convierte siempre el área antes de sustituir. Es preferible escribir la conversión en una línea separada.\r
\r
**Mini-ejemplo de contraste**  \r
\\(10\\) cm² son \\(10^{-3}\\) m², no \\(10\\) m².\r
\r
### Error 2: despejar mal el área\r
\r
**Por qué parece correcto**  \r
Como [[A]] aparece dividiendo, algunos alumnos pasan términos de forma mecánica y escriben una relación invertida.\r
\r
**Por qué es incorrecto**  \r
Desde la definición mecánica, si la presión aumenta con fuerza fija, el área debe disminuir. Un despeje incorrecto suele violar esa lectura.\r
\r
**Señal de detección**  \r
El resultado predice que para bajar presión hay que reducir el área, justo lo contrario de la interpretación física.\r
\r
**Corrección conceptual**  \r
Comprueba el despeje con una prueba cualitativa: a fuerza fija, mayor área debe implicar menor presión.\r
\r
**Mini-ejemplo de contraste**  \r
Con la misma [[F]], duplicar [[A]] reduce [[p]] a la mitad.\r
\r
## Errores de interpretación\r
\r
### Error 1: tratar una presión manométrica negativa como imposible\r
\r
**Por qué parece correcto**  \r
El alumno recuerda que la presión absoluta no puede ser negativa y aplica esa regla a cualquier lectura.\r
\r
**Por qué es incorrecto**  \r
La presión manométrica [[p_man]] es relativa a [[p_atm]]. Puede ser negativa si el sistema está por debajo de la atmósfera, sin que [[p_abs]] sea negativa.\r
\r
**Señal de detección**  \r
Se descarta un dato de vacío parcial o se cambia el signo de una lectura de manómetro sin justificación.\r
\r
**Corrección conceptual**  \r
Antes de juzgar el signo, identifica la referencia: absoluta respecto al vacío o manométrica respecto a la atmósfera.\r
\r
**Mini-ejemplo de contraste**  \r
Una lectura de \\(-20000\\) Pa manométricos puede seguir teniendo [[p_abs]] positiva.\r
\r
### Error 2: leer presión alta como peligro sin mirar el área\r
\r
**Por qué parece correcto**  \r
La palabra “alta” sugiere riesgo inmediato.\r
\r
**Por qué es incorrecto**  \r
Una presión alta sobre un área microscópica puede implicar una fuerza pequeña, mientras que una presión moderada sobre un área enorme puede generar una fuerza total peligrosa.\r
\r
**Señal de detección**  \r
El alumno decide el efecto mecánico sin calcular [[F]] o sin estimar [[A]].\r
\r
**Corrección conceptual**  \r
Para evaluar carga total, transforma presión en fuerza mediante la superficie afectada.\r
\r
**Mini-ejemplo de contraste**  \r
Una [[p]] alta en una aguja puede implicar menos [[F]] total que una [[p]] moderada en una puerta.\r
\r
## Regla de autocontrol rápido\r
\r
Antes de cerrar un ejercicio de presión, verifica cuatro preguntas. Primera: ¿el dato representa [[p]], [[F]] o [[A]]? Segunda: ¿la fuerza usada es normal a la superficie? Tercera: ¿la presión es absoluta [[p_abs]] o manométrica [[p_man]]? Cuarta: ¿la presión es uniforme o depende de profundidad?\r
\r
Si cualquiera de esas respuestas queda ambigua, el cálculo puede ser algebraicamente limpio y físicamente incorrecto. La presión es simple en forma, pero muy exigente en lectura de sistema.`;export{e as default};
