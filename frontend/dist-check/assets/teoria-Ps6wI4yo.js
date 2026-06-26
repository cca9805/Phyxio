const e=`# Tensor de inercia [[tensor_inercia]]\r
\r
## Contexto conceptual\r
\r
El tensor de inercia aparece cuando el momento de inercia escalar deja de ser suficiente para describir la rotacion de un cuerpo rigido en tres dimensiones. Si el giro ocurre exactamente sobre un eje principal, un solo numero puede bastar. Pero en cuanto el cuerpo es asimetrico o los ejes elegidos no coinciden con sus direcciones naturales, hace falta una descripcion matricial. Ese salto no es un lujo matematico. Es la manera correcta de responder una pregunta fisica distinta: no solo cuanto cuesta girar, sino tambien como la geometria de masa puede cambiar la direccion de la respuesta rotacional.\r
\r
La idea central del leaf es que [[tensor_inercia]] transforma [[omega]] en [[momento_angular]]. En un marco arbitrario, esa transformacion puede mezclar componentes. Por eso aparece [[producto_inercia]]: no es ruido algebraico, sino la firma de que la masa no esta distribuida de forma simetrica respecto a los ejes elegidos. Cuando un alumno entiende esto, deja de ver el tensor como "una matriz que hay que diagonalizar" y empieza a leerlo como un mapa fisico entre direccion de giro y respuesta angular.\r
\r
Tambien cambia la interpretacion de los ejes. En el leaf de definicion del momento de inercia se aprendia que el par objeto-eje importa. Aqui se da un paso mas: el conjunto de ejes puede elegirse mejor o peor. Hay marcos en los que el tensor se ve acoplado y marcos en los que se vuelve diagonal. La fisica del cuerpo es la misma; lo que cambia es la claridad con la que esa fisica se deja leer. Ese es el motivo por el que los ejes principales tienen un papel protagonista.\r
\r
## 🟢 Nivel esencial\r
\r
La intuicion esencial del tensor de inercia puede formularse sin matrices. Imagina un cuerpo asimetrico, por ejemplo una placa con una masa adicional en un cuadrante. Si intentas hacerlo girar con una [[omega]] dirigida segun un eje que no es principal, el cuerpo responde con un [[momento_angular]] que no apunta exactamente en la misma direccion. Esa falta de paralelismo es la primera pista fisica de que un momento de inercia escalar no alcanza.\r
\r
En este nivel basta con retener tres ideas. La primera es que [[momento_angular]] y [[omega]] no tienen por que ser paralelos. La segunda es que esa desalineacion viene de la geometria de masa, no de un capricho algebraico. La tercera es que siempre existe una base especial, la de ejes principales, donde el tensor se vuelve diagonal y la lectura se simplifica. Estas tres ideas organizan todo el resto del leaf.\r
\r
Una forma intuitiva de contarlo es pensar que el tensor describe preferencias de giro. Algunas direcciones son "naturales" para el cuerpo, porque en ellas la respuesta no se mezcla entre ejes. Otras direcciones son "oblicuas", y entonces una componente de [[omega]] alimenta varias componentes de [[momento_angular]]. [[producto_inercia]] es precisamente el indicador de esa mezcla.\r
\r
La consecuencia didactica es fuerte. Cuando el tensor no se ha diagonalizado, no se debe leer un resultado solo por su modulo. La direccion importa. Un [[momento_angular]] correcto en modulo pero incorrecto en orientacion sigue siendo una mala lectura fisica. Ese criterio diferencia una resolucion mecanica de una comprension real del leaf.\r
\r
## 🔵 Nivel formal\r
\r
Formalmente, el tensor de inercia es una matriz simetrica\r
\r
{{f:rel_l_omega}}\r
\r
:\r
\r
{{f:rel_l_omega}}\r
\r
Los elementos diagonales son momentos de inercia respecto a los ejes elegidos. Los elementos fuera de la diagonal son [[producto_inercia]]. Su signo depende de la convencion, pero su presencia o ausencia tiene significado fisico: indican si el marco esta alineado o no con las direcciones principales de la distribucion de masa.\r
\r
La relacion estructural del leaf es la forma matricial de la relacion entre [[momento_angular]], [[tensor_inercia]] y [[omega]]:\r
\r
{{f:rel_l_omega}}\r
\r
Esta ecuacion resume la esencia del tema. En ejes principales, la matriz queda diagonal y la relacion se desacopla:\r
\r
{{f:rel_l_omega}}\r
\r
En ese caso, la relacion recupera una lectura escalar por componente. Pero fuera de ejes principales, cada componente de [[momento_angular]] puede depender de varias componentes de [[omega]]. Por eso no tiene sentido aplicar sin mas la forma escalar\r
\r
{{f:rel_l_omega}}\r
\r
si el problema no esta ya reducido a una direccion principal.\r
\r
La energia [[E]] rotacional tambien cambia de lectura. En la base principal puede escribirse como\r
\r
{{f:energia_cinetica_tensores}}\r
\r
para una rotacion pura sobre un eje principal. Si el movimiento tiene varias componentes, la forma completa depende de la forma cuadratica completa del tensor.\r
\r
Este detalle es crucial: el escalar [[E]] no borra la informacion geometrica del tensor, sino que la resume. La direccion principal excitada y el valor de los autovalores del tensor deciden cuanta energia se almacena para una misma rapidez angular.\r
\r
## 🔴 Nivel estructural\r
\r
La lectura estructural pregunta por que la matriz puede simplificarse y cuando deja de poder hacerlo. La simplificacion depende de dos hechos. Primero, el tensor es simetrico, por lo que admite autovectores ortogonales. Segundo, esos autovectores definen los ejes principales. La diagonalizacion no es un truco de calculo: es el paso que revela la estructura propia del cuerpo.\r
\r
Cuando los ejes elegidos no son principales, [[producto_inercia]] aparece y la interpretacion se hace mas rica. Esa riqueza no debe verse como una complicacion externa, sino como la informacion que faltaba para describir un cuerpo asimetrico. Si se forzara un modelo escalar, se perderia exactamente el fenomeno que hace interesante al leaf: que el cuerpo puede responder en una direccion angular distinta de la que parecia obvia.\r
\r
La estructura tambien depende del origen. Cambiar el origen sin control modifica la matriz. Por eso el tensor suele leerse respecto al centro de masa y a un marco bien declarado. Si se mezclan orígenes o marcos, la matriz puede dejar de ser interpretable aunque numericamente parezca razonable. Este punto enlaza con errores clasicos de modelizacion: una mala coordinatizacion puede disfrazarse de "calculo correcto".\r
\r
## Interpretación física profunda\r
\r
La lectura profunda del tensor de inercia no consiste en decir que "es una matriz de la distribucion de masa". Eso es cierto, pero insuficiente. Fisicamente, el tensor expresa que el cuerpo no responde igual a todas las direcciones de giro. Algunas direcciones son privilegiadas porque estan alineadas con modos propios de la distribucion de masa. Otras producen mezcla entre ejes. Por eso el tensor es una herramienta para leer anisotropia dinamica.\r
\r
[[producto_inercia]] es la puerta de entrada a esa idea. Si vale cero por simetria o por eleccion de ejes principales, la respuesta se desacopla. Si no vale cero, una parte del giro "contamina" otra direccion de [[momento_angular]]. De ahi viene la desalineacion entre [[momento_angular]] y [[omega]], y tambien parte de la intuicion sobre precesion, bamboleo y estabilidad.\r
\r
La energia [[E]] refuerza la misma lectura desde otro angulo. No todas las direcciones de giro cuestan lo mismo. Girar alrededor del eje principal asociado al autovalor mayor requiere mas energia para un mismo modulo de [[omega]] que girar alrededor del eje asociado al autovalor menor. Asi, el tensor no solo organiza direcciones, sino tambien escalas energeticas.\r
\r
## Orden de magnitud\r
\r
En este leaf conviene estimar antes de calcular. Si un cuerpo tiene momentos principales de orden 10 kg m^2 y [[producto_inercia]] de orden 10^-3 kg m^2, el acoplamiento angular sera probablemente despreciable en primera aproximacion. Pero si los productos son de orden 1 kg m^2, la desalineacion puede ser relevante. Una regla practica es mirar cocientes del tipo producto_diagonal sobre termino_diagonal porque dan una escala de mezcla entre componentes. Si esos cocientes son menores que 10^-2, a menudo un modelo casi diagonal basta. Si suben a 10^-1, el acoplamiento ya no deberia ignorarse.\r
\r
Otra comparacion util es entre autovalores. Si $I_1$, $I_2$ e $I_3$ son muy distintos, las direcciones principales estan bien separadas y la anisotropia dinamica es fuerte. Si son casi iguales, el cuerpo se acerca a un comportamiento mas isotropo y la eleccion de ejes pierde parte de su dramatismo fisico.\r
\r
## Método de resolución personalizado\r
\r
Un procedimiento robusto para el tensor de inercia puede escribirse asi:\r
\r
1. Declarar origen, ejes y si el marco es arbitrario o principal.\r
2. Escribir la matriz con signos y simetrias controlados.\r
3. Aplicar la forma matricial para obtener [[momento_angular]] a partir de [[tensor_inercia]] y [[omega]].\r
4. Comparar direcciones de [[momento_angular]] y [[omega]] antes de reducir nada.\r
5. Si conviene interpretar mejor, diagonalizar y pasar a ejes principales.\r
6. Solo despues usar la expresion energetica o formulas escalares por eje principal.\r
\r
Este metodo evita un error muy comun: diagonalizar demasiado pronto y perder el fenomeno que se queria estudiar. Si el problema pregunta por acoplamiento o por desalineacion, el marco arbitrario es parte de la fisica, no una molestia provisional.\r
\r
## Casos especiales y ejemplo extendido\r
\r
El caso especial mas importante es el de simetria. En un cuerpo con simetria suficiente, [[producto_inercia]] puede anularse directamente en un marco adaptado a esa simetria. Entonces el tensor se hace diagonal sin gran esfuerzo y el leaf se parece mas al momento de inercia escalar, pero sin confundirse con el: ahora se entiende por que esa reduccion funciona.\r
\r
Otro caso especial es el de isotropia aproximada, cuando los autovalores son casi iguales. En ese limite, cambiar de direccion de giro altera poco la respuesta energetica. En cambio, cuando los autovalores son muy diferentes, la eleccion de eje se vuelve decisiva.\r
\r
Como ejemplo extendido, imagina una placa con una masa extra en un cuadrante. En un marco cartesiano ligado a sus bordes, aparece [[producto_inercia]] no nulo. Si calculas [[momento_angular]] para una [[omega]] oblicua, veras que ambos vectores no se alinean. Si despues rotas al marco principal, el mismo cuerpo revela direcciones naturales y la lectura de [[E]] se simplifica. El fenomeno no ha cambiado; ha cambiado la transparencia del modelo.\r
\r
## Preguntas reales del alumno\r
\r
**¿Por que el tensor es simetrico?**  \r
Porque sus componentes se construyen con productos cuadraticos de coordenadas y, fisicamente, la respuesta rotacional no distingue entre intercambiar el orden de los ejes en esos terminos.\r
\r
**¿El producto de inercia [[producto_inercia]] siempre es malo?**  \r
No. No es "malo" ni "bueno". Es informacion. Puede ser molesto en control si induce acoplamiento, pero es justamente lo que describe la asimetria real del cuerpo.\r
\r
**¿Cuando puedo volver a una formula escalar?**  \r
Cuando ya has pasado a ejes principales o cuando el problema se reduce de forma justificada a una unica direccion principal. Antes de eso, una formula escalar suele esconder fisica.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf conecta con varios temas cercanos:\r
\r
- Con \`definicion-momento-de-inercia\`, porque extiende el concepto escalar a una estructura matricial.\r
- Con \`momentos-tipicos\`, porque explica por que ciertas formulas tabuladas funcionan solo en ejes bien elegidos.\r
- Con el \`teorema-de-ejes-paralelos\`, porque cambiar origen altera el tensor y no solo un numero.\r
- Con estabilidad y giroscopios, porque la diagonalizacion y los ejes principales anticipan modos de giro mas o menos estables.\r
\r
Seguir estas conexiones ayuda a no estudiar el tensor como un bloque aislado de algebra lineal. En realidad es una pieza central de la dinamica rotacional tridimensional.\r
\r
## Síntesis final\r
\r
Dominar el tensor de inercia significa entender que la distribucion de masa no solo fija una dificultad de giro, sino una geometria completa de respuesta. [[tensor_inercia]] transforma [[omega]] en [[momento_angular]], [[producto_inercia]] describe acoplamientos entre ejes y los ejes principales revelan las direcciones naturales del cuerpo. A partir de ahi, la relacion angular y la expresion energetica dejan de ser formulas sueltas y se convierten en consecuencias bien ordenadas del mismo marco fisico.`;export{e as default};
