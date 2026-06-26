const e=`# Procedimiento\r
\r
## Antes de calcular\r
\r
Lee el enunciado y decide que geometria aparece: triangulo rectangulo, arco circular, eje inclinado, direccion vectorial o coordenadas polares. Antes de calcular, escribe que magnitud se busca, que unidad debe tener y que angulo se esta usando. Si el angulo no tiene referencia, el problema todavia no esta definido.\r
\r
Haz un dibujo aunque sea simple. Marca cateto adyacente, cateto opuesto, hipotenusa, radio, arco, eje horizontal, eje vertical y sentido positivo cuando corresponda. Esta preparacion evita elegir seno o coseno por memoria.\r
\r
## Paso 1: identifica el objeto matematico\r
\r
El objeto puede ser una razon trigonometrica, una proyeccion, una conversion entre coordenadas, una longitud de arco, una semejanza o una aplicacion de Pitagoras. En este leaf la herramienta principal es convertir una magnitud dirigida en componentes sobre ejes y reconstruirla sin perder signo, modulo ni unidad.\r
\r
Clasifica el nivel de dificultad: basico si solo falta un lado; intermedio si hay que elegir funcion o convertir unidades; avanzado si hay cuadrantes, signos, funciones inversas, radianes o una base movil.\r
\r
## Paso 2: elige la operacion\r
\r
Elige la operacion por la geometria. Si tienes hipotenusa y quieres componente horizontal desde el eje x, usa coseno. Si quieres componente vertical, usa seno. Si tienes pendiente entre dos catetos, usa tangente. Si hay radio y arco, usa radianes. Si hay posicion radial, convierte entre polar y cartesiano.\r
\r
No sustituyas numeros hasta tener la relacion simbolica. Para este leaf, una forma guia es \`A_x = A cos(theta), A_y = A sin(theta), A = sqrt(A_x^2 + A_y^2)\`. Despues adapta signos y unidades al sistema fisico.\r
\r
## Paso 3: conserva unidades y signos\r
\r
Las razones trigonometricas no tienen unidad, pero las longitudes, fuerzas, velocidades, campos y radios si la conservan. Una componente de \`50 N\` sigue en newtons; una posicion sigue en metros; una velocidad angular puede estar en rad/s.\r
\r
El signo sale del eje elegido y del cuadrante. No lo borres tomando valores absolutos sin justificar. En problemas fisicos, el signo puede indicar subida o bajada, avance o retroceso, componente a favor o en contra.\r
\r
## Paso 4: calcula\r
\r
Calcula de forma visible. Primero convierte grados o radianes si hace falta. Despues evalua seno, coseno, tangente, raiz o cociente. Mantente atento a resultados imposibles: un seno mayor que 1, una componente mayor que el modulo sin razon geometrica, una distancia negativa donde solo hay longitud.\r
\r
Para estimar, usa valores notables: 30, 45 y 60 grados. Saber que \`sin(30)=1/2\`, \`sin(45)=sqrt(2)/2\` y \`sin(60)=sqrt(3)/2\` permite detectar errores de calculadora o modo angular.\r
\r
## Paso 5: interpreta el resultado\r
\r
Escribe una frase fisica completa. Por ejemplo: la componente horizontal de una fuerza, la altura de una rampa, el arco recorrido por una rueda o la posicion cartesiana de un punto polar. Indica unidad, signo, referencia angular y si la escala es razonable.\r
\r
La interpretacion avanzada compara dependencia: que pasa si aumenta el angulo, si cambia el radio, si se invierte el eje o si se pasa a otro cuadrante. Si no puedes responder, el calculo todavia no se entiende.\r
\r
## Checklist de autocontrol\r
\r
Comprueba: dibujo claro, referencia angular, sentido positivo, unidad angular, funcion elegida, unidades finales, signo, cuadrante, dominio y escala. Decide si el resultado puede compararse con el modulo original o con una estimacion simple.\r
\r
Antes de terminar, explica que error se evita: confundir opuesto con adyacente, mezclar grados y radianes, olvidar el signo por cuadrante, usar el triangulo equivocado o interpretar una razon sin unidad como si fuera una magnitud fisica.\r
`;export{e as default};
