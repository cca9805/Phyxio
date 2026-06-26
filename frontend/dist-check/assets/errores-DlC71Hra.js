const e=`# Errores frecuentes\r
\r
## Error 1: elegir la operacion equivocada\r
\r
El error mas comun es mover la coma decimal en la direccion contraria. Parece razonable porque convertir entre metros y milimetros se siente como una regla de memoria, pero en realidad hay que pensar que el prefijo ya contiene una potencia de diez.\r
\r
Si pasas de \`mm\` a \`m\`, debes hacer la cantidad mas pequena en numero de metros: \`1 mm = 10^-3 m\`. Si pasas de \`m\` a \`mm\`, el numero aumenta: \`1 m = 1000 mm\`. Detectalo preguntando si la unidad final es mas grande o mas pequena que la inicial.\r
\r
## Error 2: perder el significado de la variable\r
\r
Una cantidad no es solo un numero grande o pequeno. \`3 x 10^8 m/s\` como velocidad no significa lo mismo que \`3 x 10^8 m\` como distancia. Si se separa el exponente de la magnitud fisica, el resultado pierde sentido.\r
\r
Para corregirlo, escribe siempre el nombre de la magnitud junto a la unidad: longitud, tiempo, masa, carga, energia, potencia o frecuencia. Asi evitas comparar exponentes de cantidades que no son comparables.\r
\r
## Error 3: ignorar unidades\r
\r
Este error ocurre cuando se opera con prefijos como si fueran parte del numero pero se olvida la unidad base. Por ejemplo, multiplicar \`mA\` por \`kOhm\` sin convertir puede producir un numero correcto por casualidad o totalmente equivocado segun los prefijos.\r
\r
La deteccion es directa: cada numero debe conservar una unidad escrita. Si desaparecen las unidades durante el calculo, tambien desaparece el control fisico. Corrigelo reemplazando cada prefijo por su potencia de diez antes de operar.\r
\r
## Error 4: confundir signo con modulo\r
\r
Un exponente negativo no representa un valor negativo. \`10^-6\` significa una millonésima parte de la unidad, no una cantidad por debajo de cero. El error aparece mucho cuando se leen escalas microscopicas o tiempos muy breves.\r
\r
Tambien puede confundirse el signo fisico de una magnitud con el signo del exponente. Una carga puede ser negativa y ademas tener escala micro; esas dos informaciones son distintas. Detectalo separando signo algebraico, mantisa, exponente y unidad.\r
\r
## Error 5: aplicar una regla fuera de dominio\r
\r
No todos los resultados deben redondearse a una sola cifra significativa. En mediciones de laboratorio, la precision disponible importa. Cambiar \`1.96 x 10^-3 m\` por \`2 x 10^-3 m\` puede ser aceptable para estimar, pero no para comparar datos experimentales finos.\r
\r
Tampoco debes aplicar prefijos a expresiones que no son unidades lineales sin analizar la potencia. Un centimetro cuadrado no equivale a \`10^-2 m^2\`, sino a \`10^-4 m^2\`. Detecta este error revisando si la unidad esta elevada al cuadrado o al cubo.\r
\r
## Regla rapida de deteccion\r
\r
Antes de aceptar una conversion, pregunta tres cosas: el prefijo se sustituyo por la potencia correcta, la unidad final es la que pide la formula y la escala resultante es fisicamente razonable.\r
\r
Si una mesa mide \`10^6 m\`, una molecula mide \`10^2 m\` o una bateria domestica entrega \`10^-9 V\`, no sigas calculando. Revisa prefijos, exponentes y unidades porque el orden de magnitud ya avisa del error.\r
\r
<!-- algebra-depth-v2 -->\r
## Diagnostico rapido\r
\r
Error de entrada: usar un dato sin unidad, sin escala o sin decidir si es constante. En notacion cientifica y prefijos SI, una cifra aislada rara vez contiene toda la informacion fisica.\r
\r
Error de estructura: aplicar una operacion correcta a una relacion equivocada. La aritmetica puede estar bien y la fisica mal si el patron elegido no representa el fenomeno.\r
\r
Error de salida: aceptar un numero sin compararlo con una estimacion. Un resultado debe tener unidad, orden de magnitud, signo y dependencia razonables.\r
\r
`;export{e as default};
