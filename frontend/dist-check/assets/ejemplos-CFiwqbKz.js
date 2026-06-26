const e=`# Ejemplo guiado\r
\r
## Situacion fisica\r
\r
Considera una rampa de \`30 grados\` y longitud \`8 m\` en un problema fisico donde se necesita usar usar seno, coseno y tangente como razones entre catetos, hipotenusa, angulo y proyeccion. El objetivo no es pulsar una funcion trigonometrica al azar, sino traducir la situacion a una geometria clara. Primero se decide que representa el angulo, desde que eje se mide y que magnitud debe calcularse.\r
\r
En un nivel basico, basta con reconocer el dibujo y la unidad esperada. En un nivel intermedio, se elige la relacion correcta. En un nivel avanzado, se revisan signos, cuadrantes, dominio y escala.\r
\r
## Traduccion matematica\r
\r
La traduccion usa la relacion \`sin(theta)=opuesto/hipotenusa, cos(theta)=adyacente/hipotenusa, tan(theta)=opuesto/adyacente\`. El dato conocido se coloca en el papel geometrico adecuado: modulo, radio, hipotenusa, cateto, arco, componente o coordenada. Si el angulo se mide desde otro eje, la funcion usada puede cambiar.\r
\r
La traduccion debe conservar la unidad. Una longitud sigue en metros, una fuerza sigue en newtons y una razon trigonometrica no tiene unidad. Esta separacion evita mezclar resultado fisico con factor geometrico.\r
\r
## Calculo paso a paso\r
\r
Paso 1: dibuja la geometria y marca el angulo. Paso 2: escribe la relacion simbolica antes de sustituir. Paso 3: convierte grados o radianes si procede. Paso 4: calcula el valor. Paso 5: compara si el resultado es menor, mayor o compatible con la magnitud original.\r
\r
Si el calculo produce una componente, su modulo no debe superar el modulo original. Si produce un angulo, debe pertenecer al dominio del problema. Si produce una distancia, debe tener unidad de longitud.\r
\r
## Lectura del resultado\r
\r
El resultado se lee como una afirmacion fisica: una componente, una direccion, una altura, un arco, una posicion o una escala. No basta con escribir el numero; hay que decir que mide, respecto de que referencia y que signo tiene.\r
\r
La lectura avanzada compara dependencias. Si se aumenta el angulo, el radio o la hipotenusa, el resultado debe cambiar segun predice el modelo. Esa comparacion detecta errores antes de llegar a un examen o a un laboratorio.\r
\r
## Error comun evitado\r
\r
El error evitado es escoger la funcion por memoria, mezclar grados y radianes, olvidar el cuadrante o interpretar una razon sin unidad como magnitud. El metodo obliga a que dibujo, formula y frase fisica coincidan.\r
\r
# Ejemplo inverso\r
\r
## Resultado dado\r
\r
Supongamos que aparece una expresion como \`sin(theta)=opuesto/hipotenusa, cos(theta)=adyacente/hipotenusa, tan(theta)=opuesto/adyacente\` ya escrita en una solucion. La pregunta inversa es: que geometria tuvo que existir para que esa expresion fuera razonable.\r
\r
## Que pregunta fisica permite responder\r
\r
Permite reconstruir si el problema buscaba una componente, un angulo, una distancia, una posicion o una longitud de arco. Esta lectura inversa es muy importante en problemas avanzados porque muchas veces se revisa una solucion ajena o se depura una simulacion.\r
`;export{e as default};
