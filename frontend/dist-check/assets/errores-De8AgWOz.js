const e=`# Errores frecuentes\r
\r
## Error 1: elegir la operacion equivocada\r
\r
El error mas comun es escoger seno, coseno, tangente, Pitagoras o conversion polar por memoria y no por geometria. En nivel basico se corrige dibujando cateto opuesto, adyacente e hipotenusa. En nivel intermedio se comprueba que dato se conoce y que dato falta. En nivel avanzado se revisa si el angulo se mide desde el eje correcto.\r
\r
Si el resultado no cambia como predice el dibujo, la operacion probablemente no era la adecuada. Una componente horizontal medida desde el eje x debe ser maxima cerca de cero grados y pequena cerca de noventa grados.\r
\r
## Error 2: perder el significado de la variable\r
\r
Una letra puede representar modulo, componente, radio, arco, altura, distancia o razon sin unidad. Si se usa la misma letra sin significado fisico, el calculo se vuelve decorativo. La variable debe mantener unidad, signo y papel dentro del modelo.\r
\r
En Radianes y movimiento angular, perder significado suele llevar a interpretar una razon trigonometrica como longitud o una longitud como angulo. El control es escribir una frase: que mide esta variable y con que unidad.\r
\r
## Error 3: ignorar unidades\r
\r
Los angulos en grados y radianes no son intercambiables sin conversion. En movimiento angular, usar grados dentro de formulas como \`s = r theta\` rompe la escala, porque esa relacion exige radianes. Las componentes conservan la unidad de la magnitud original.\r
\r
Otro error es no distinguir una razon sin unidad de una magnitud fisica. \`sin(theta)\` no mide metros ni newtons; multiplica a una longitud, fuerza o velocidad para producir una componente.\r
\r
## Error 4: confundir signo con modulo\r
\r
El modulo es no negativo, pero una componente puede ser positiva o negativa segun el eje. Borrar el signo puede ocultar una fuerza que apunta hacia abajo, una velocidad hacia la izquierda o un campo en sentido contrario.\r
\r
El signo tambien depende del cuadrante. Dos angulos pueden tener el mismo seno y distinto coseno, o la misma tangente y direcciones opuestas. La calculadora no sustituye la lectura geometrica.\r
\r
## Error 5: aplicar una regla fuera de dominio\r
\r
Una funcion inversa solo responde dentro de un dominio y puede ocultar soluciones alternativas. Si \`sin(theta)=0.5\`, el angulo no tiene por que ser solo 30 grados; tambien puede ser 150 grados si el contexto lo permite.\r
\r
En problemas fisicos, el dominio incluye restricciones: radios positivos, longitudes positivas, angulos dentro del intervalo del movimiento, componentes compatibles con el modulo y modelos planos validos.\r
\r
## Regla rapida de deteccion\r
\r
Antes de aceptar el resultado, pregunta: el dibujo coincide, la unidad coincide, el signo coincide, la escala coincide y el modelo coincide. Si una respuesta falla cualquiera de esos cinco controles, no se corrige redondeando; se vuelve al planteamiento geometrico.\r
`;export{e as default};
