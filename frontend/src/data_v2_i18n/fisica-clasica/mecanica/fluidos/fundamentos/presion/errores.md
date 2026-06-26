## Errores conceptuales

### Error 1: confundir presión con fuerza

**Por qué parece correcto**  
El alumno ve que una prensa hidráulica “hace mucha fuerza” y concluye que presión y fuerza son la misma cosa. La intuición falla porque ambas magnitudes aparecen juntas en el mismo fenómeno.

**Por qué es incorrecto**  
La presión [[p]] es fuerza por unidad de área. La fuerza [[F]] es una interacción total. Dos sistemas pueden tener la misma presión y fuerzas distintas si sus áreas [[A]] son diferentes.

**Señal de detección**  
El error aparece cuando se responde en newtons a una pregunta de presión, o cuando se afirma que “más fuerza siempre significa más presión” sin mirar el área.

**Corrección conceptual**  
Primero calcula o identifica [[p]]. Después, si hace falta, transforma esa presión en fuerza usando el área correspondiente.

**Mini-ejemplo de contraste**  
Dos pistones pueden tener la misma [[p]] y distinta [[F]] porque sus [[A]] son distintas.

### Error 2: creer que la presión solo existe hacia abajo

**Por qué parece correcto**  
En hidrostática se repite que la presión aumenta con la profundidad profundidad, y el alumno asocia presión con peso vertical.

**Por qué es incorrecto**  
En un fluido en reposo, la presión en un punto actúa normal a cualquier superficie. Puede producir fuerzas laterales sobre paredes, hacia arriba sobre un fondo o sobre un émbolo.

**Señal de detección**  
El alumno dibuja presión únicamente vertical o ignora fuerzas laterales en recipientes.

**Corrección conceptual**  
La profundidad determina el valor hidrostático, pero la fuerza producida por la presión es normal a la superficie concreta.

**Mini-ejemplo de contraste**  
Una pared vertical recibe fuerza horizontal del agua aunque profundidad se mida verticalmente.

## Errores de modelo

### Error 1: usar presión uniforme donde hay profundidad variable

**Por qué parece correcto**  
Es tentador elegir una sola presión media y multiplicarla por toda el área porque la fórmula [[F]] = [[p]][[A]] parece sencilla.

**Por qué es incorrecto**  
Si la profundidad cambia sobre la superficie, la presión también cambia. En una pared vertical, la parte inferior soporta más presión que la superior.

**Señal de detección**  
El enunciado menciona altura, pared vertical o depósito profundo, pero la resolución usa una única presión sin justificarla.

**Corrección conceptual**  
Usa presión uniforme solo en superficies pequeñas o a igual profundidad. Si la presión varía, emplea promedio justificado, tramos o integración.

**Mini-ejemplo de contraste**  
Una placa horizontal pequeña a profundidad fija puede usar una presión; una pared alta no.

### Error 2: aplicar presión hidrostática a un fluido acelerado

**Por qué parece correcto**  
La fórmula con densidad, gravedad y profundidad es conocida y parece aplicable a cualquier líquido.

**Por qué es incorrecto**  
La relación hidrostática básica requiere fluido en reposo. Si hay aceleraciones importantes, chorros, bombas o flujo rápido, aparecen términos dinámicos y pérdidas.

**Señal de detección**  
El problema habla de movimiento, velocidad o bomba, pero se usa solo la fórmula de columna estática.

**Corrección conceptual**  
Antes de usar presión hidrostática, comprueba si el fluido puede modelarse como estático.

**Mini-ejemplo de contraste**  
Un depósito quieto puede usar densidadgravedadprofundidad; un chorro impulsado necesita modelo dinámico.

## Errores matemáticos

### Error 1: no convertir el área a metros cuadrados

**Por qué parece correcto**  
El área suele darse en cm² y el alumno la copia directamente porque el número parece manejable.

**Por qué es incorrecto**  
La presión en pascales exige [[A]] en m². Un error de conversión puede multiplicar o dividir el resultado por \(10^4\).

**Señal de detección**  
Aparecen presiones absurdamente pequeñas o grandes en problemas de pistones, placas o agujas.

**Corrección conceptual**  
Convierte siempre el área antes de sustituir. Es preferible escribir la conversión en una línea separada.

**Mini-ejemplo de contraste**  
\(10\) cm² son \(10^{-3}\) m², no \(10\) m².

### Error 2: despejar mal el área

**Por qué parece correcto**  
Como [[A]] aparece dividiendo, algunos alumnos pasan términos de forma mecánica y escriben una relación invertida.

**Por qué es incorrecto**  
Desde la definición mecánica, si la presión aumenta con fuerza fija, el área debe disminuir. Un despeje incorrecto suele violar esa lectura.

**Señal de detección**  
El resultado predice que para bajar presión hay que reducir el área, justo lo contrario de la interpretación física.

**Corrección conceptual**  
Comprueba el despeje con una prueba cualitativa: a fuerza fija, mayor área debe implicar menor presión.

**Mini-ejemplo de contraste**  
Con la misma [[F]], duplicar [[A]] reduce [[p]] a la mitad.

## Errores de interpretación

### Error 1: tratar una presión manométrica negativa como imposible

**Por qué parece correcto**  
El alumno recuerda que la presión absoluta no puede ser negativa y aplica esa regla a cualquier lectura.

**Por qué es incorrecto**  
La presión manométrica [[p_man]] es relativa a [[p_atm]]. Puede ser negativa si el sistema está por debajo de la atmósfera, sin que [[p_abs]] sea negativa.

**Señal de detección**  
Se descarta un dato de vacío parcial o se cambia el signo de una lectura de manómetro sin justificación.

**Corrección conceptual**  
Antes de juzgar el signo, identifica la referencia: absoluta respecto al vacío o manométrica respecto a la atmósfera.

**Mini-ejemplo de contraste**  
Una lectura de \(-20000\) Pa manométricos puede seguir teniendo [[p_abs]] positiva.

### Error 2: leer presión alta como peligro sin mirar el área

**Por qué parece correcto**  
La palabra “alta” sugiere riesgo inmediato.

**Por qué es incorrecto**  
Una presión alta sobre un área microscópica puede implicar una fuerza pequeña, mientras que una presión moderada sobre un área enorme puede generar una fuerza total peligrosa.

**Señal de detección**  
El alumno decide el efecto mecánico sin calcular [[F]] o sin estimar [[A]].

**Corrección conceptual**  
Para evaluar carga total, transforma presión en fuerza mediante la superficie afectada.

**Mini-ejemplo de contraste**  
Una [[p]] alta en una aguja puede implicar menos [[F]] total que una [[p]] moderada en una puerta.

## Regla de autocontrol rápido

Antes de cerrar un ejercicio de presión, verifica cuatro preguntas. Primera: ¿el dato representa [[p]], [[F]] o [[A]]? Segunda: ¿la fuerza usada es normal a la superficie? Tercera: ¿la presión es absoluta [[p_abs]] o manométrica [[p_man]]? Cuarta: ¿la presión es uniforme o depende de profundidad?

Si cualquiera de esas respuestas queda ambigua, el cálculo puede ser algebraicamente limpio y físicamente incorrecto. La presión es simple en forma, pero muy exigente en lectura de sistema.