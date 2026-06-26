const e=`# Ejemplo guiado\r
\r
## Situacion fisica\r
\r
Un sensor mide una separacion de \`2.5 mm\` entre dos marcas y queremos usar esa longitud en una formula escrita en metros. Tambien queremos expresar el resultado en notacion cientifica para que la escala quede clara.\r
\r
El problema no consiste solo en mover una coma. Hay que reconocer que el prefijo mili representa \`10^-3\` y que la unidad base compatible con la formula es el metro.\r
\r
## Traduccion matematica\r
\r
Escribimos \`2.5 mm = 2.5 x 10^-3 m\`. La mantisa es \`2.5\`, el exponente es \`-3\` y la unidad final es \`m\`. La longitud sigue siendo positiva; el exponente negativo solo indica que es menor que un metro.\r
\r
Si despues una formula pide multiplicar esa distancia por una fuerza de \`4 N\`, el trabajo asociado seria \`4 N x 2.5 x 10^-3 m\`. La conversion permite que newton por metro se lea correctamente como julio.\r
\r
## Calculo paso a paso\r
\r
Primero sustituimos el prefijo: \`mili = 10^-3\`. Despues mantenemos el numero: \`2.5 mm = 2.5 x 10^-3 m\`. Si calculamos el trabajo, multiplicamos mantisas: \`4 x 2.5 = 10\`, y conservamos el exponente \`10^-3\`.\r
\r
El resultado intermedio es \`10 x 10^-3 J\`. Normalizamos la mantisa: \`10 x 10^-3 = 1.0 x 10^-2\`. Por tanto, el trabajo es \`1.0 x 10^-2 J\`.\r
\r
## Lectura del resultado\r
\r
La longitud esta en escala milimetrica y el trabajo en escala centesimal de julio. Esa lectura fisica importa: una fuerza de unos pocos newtons actuando durante pocos milimetros no deberia producir muchos julios.\r
\r
La notacion cientifica permite ver que el resultado no esta cerca de \`1 J\`, sino cien veces por debajo. Si hubieramos olvidado el prefijo mili, el trabajo habria salido mil veces mayor.\r
\r
## Error comun evitado\r
\r
El error comun seria escribir \`2.5 mm = 2.5 x 10^3 m\`, confundiendo mili con kilo. Las unidades no detectan por si solas este error, pero la escala si: dos milimetros no pueden convertirse en miles de metros.\r
\r
Otro error seria no normalizar \`10 x 10^-3\` y dejarlo en una forma dificil de comparar. La forma \`1.0 x 10^-2\` muestra mejor el orden de magnitud.\r
\r
## Segundo caso guiado: area con prefijo\r
\r
Una placa tiene area de \`12 cm^2\` y queremos usarla en una formula de presion escrita en \`m^2\`. El prefijo centi significa \`10^-2\`, pero como la unidad es cuadrada, el factor debe elevarse al cuadrado.\r
\r
La traduccion correcta es \`12 cm^2 = 12 x (10^-2 m)^2 = 12 x 10^-4 m^2 = 1.2 x 10^-3 m^2\`. El error tipico seria escribir \`12 x 10^-2 m^2\`, que es cien veces mayor.\r
\r
Si una fuerza de \`6 N\` actua sobre esa area, la presion seria \`p = F/A = 6 N / (1.2 x 10^-3 m^2) = 5.0 x 10^3 Pa\`. La lectura fisica es coherente: una fuerza moderada sobre un area pequena produce miles de pascales.\r
\r
En Phyxio, este es un buen momento para abrir el conversor de unidades y comprobar \`cm^2\` a \`m^2\`. La comprobacion no sustituye el paso escrito: sirve para confirmar que el factor \`10^-2\` fue elevado al cuadrado y no aplicado una sola vez.\r
\r
## Tercer caso guiado: velocidad compuesta\r
\r
Un coche circula a \`72 km/h\` y queremos usar esa velocidad en una formula con segundos. Convertimos kilometros a metros y horas a segundos: \`72 km/h = 72 x 10^3 m / 3600 s\`.\r
\r
Como \`72/3.6 = 20\`, el resultado es \`20 m/s = 2.0 x 10^1 m/s\`. La conversion no solo mueve una coma: cambia simultaneamente numerador y denominador. Si solo se cambiara kilometros a metros, el resultado seria absurdo.\r
\r
El conversor puede verificar el valor final, pero la estimacion previa es obligatoria: una velocidad de carretera debe quedar en decenas de metros por segundo, no en miles. Despues, la calculadora puede usarse para multiplicar esa velocidad por un tiempo ya expresado en segundos.\r
\r
## Cuarto caso guiado: densidad\r
\r
El agua tiene densidad aproximada \`1 g/cm^3\`. Para usarla en SI, convertimos masa y volumen: \`1 g = 10^-3 kg\` y \`1 cm^3 = (10^-2 m)^3 = 10^-6 m^3\`.\r
\r
Entonces \`1 g/cm^3 = 10^-3 kg / 10^-6 m^3 = 10^3 kg/m^3\`. Este ejemplo muestra por que una densidad puede aumentar numericamente al pasar a unidades SI: el volumen del denominador se hace muchisimo mas pequeno cuando se expresa en metros cubicos.\r
\r
Si la densidad se usa junto a constantes fisicas o parametros de un material, conviene revisar la tabla de constantes o valores de referencia disponibles en Phyxio. Asi separas dos tareas distintas: convertir bien la unidad y usar un valor fisico fiable.\r
\r
# Ejemplo inverso\r
\r
## Resultado dado\r
\r
Supongamos que un calculo entrega \`6.0 x 10^-6 s\`. Sin cambiar el valor, podemos escribirlo como \`6.0 microsegundos\`, porque micro representa \`10^-6\`.\r
\r
El resultado nos dice que el proceso ocurre en una escala temporal muy breve, mucho menor que un milisegundo y muchisimo menor que un segundo.\r
\r
## Que pregunta fisica permite responder\r
\r
Este resultado podria responder cuanto tarda una senal electronica en cruzar un circuito pequeno, cuanto dura un pulso de medicion o que intervalo temporal separa dos eventos rapidos.\r
\r
El ejemplo inverso ensena a leer la escala antes de hacer nuevos calculos. Si el fenomeno descrito fuera el tiempo de caida de una pelota desde una mesa, \`10^-6 s\` seria sospechoso y obligaria a revisar los datos.\r
\r
<!-- algebra-depth-v2 -->\r
# Ejemplo de lectura por niveles\r
\r
## Nivel basico\r
\r
Identifica la magnitud que se busca, su unidad esperada y el dato que mas condiciona el resultado. Si no puedes decir esas tres cosas, todavia no debes usar la calculadora.\r
\r
## Nivel intermedio\r
\r
Resuelve el mismo planteamiento cambiando una entrada por un factor \`10\` o \`1/10\`. Observa si el resultado cambia linealmente, inversamente, por una potencia o por un factor acumulado. Esa comparacion revela la estructura real de notacion cientifica y prefijos SI.\r
\r
## Nivel avanzado\r
\r
Pregunta que hipotesis permite usar el modelo. Puede ser una escala valida, una constante tratada como fija, una aproximacion lineal, independencia entre variables o un dominio donde una funcion inversa tiene sentido. Si esa hipotesis falla, el numero obtenido puede dejar de tener interpretacion fisica.\r
\r
`;export{e as default};
