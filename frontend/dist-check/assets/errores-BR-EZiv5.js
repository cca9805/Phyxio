const e=`# Errores comunes: tensor de inercia\r
\r
## Errores conceptuales\r
\r
### Error 1: Creer que el tensor es solo "un momento de inercia escrito grande"\r
\r
**Por que parece correcto:**  \r
Muchos ejercicios iniciales diagonalizan el tensor enseguida y parece que todo se reduce a tres numeros sueltos.\r
\r
**Por que es incorrecto:**  \r
El tensor es una relacion matricial entre [[omega]] y [[momento_angular]]. Su valor didactico aparece justamente cuando los ejes no son principales y [[producto_inercia]] explica el acoplamiento entre componentes.\r
\r
**Senal de deteccion:**  \r
El alumno usa siempre una formula escalar aunque el problema mencione cuerpo asimetrico o ejes arbitrarios.\r
\r
**Correccion conceptual:**  \r
Preguntar primero si [[momento_angular]] y [[omega]] tienen por que ser paralelos. Si no, hace falta el tensor, no solo un escalar.\r
\r
**Mini-ejemplo de contraste:**  \r
Una placa asimetrica puede girar con [[omega]] en una direccion mientras [[momento_angular]] sale inclinada por [[producto_inercia]] no nulo.\r
\r
### Error 2: Pensar que un producto de inercia no nulo es un error de calculo\r
\r
**Por que parece correcto:**  \r
La diagonal parece "limpia" y las componentes cruzadas parecen ruido algebraico.\r
\r
**Por que es incorrecto:**  \r
[[producto_inercia]] mide asimetria respecto a los ejes elegidos. Solo desaparece automaticamente en ejes principales o por simetria geometrica.\r
\r
**Senal de deteccion:**  \r
El alumno fuerza\r
\r
{{f:rel_l_omega}}\r
\r
sin justificar ninguna simetria ni ninguna rotacion de ejes.\r
\r
**Correccion conceptual:**  \r
Comprobar si el eje elegido coincide realmente con un eje principal antes de anular terminos fuera de la diagonal.\r
\r
**Mini-ejemplo de contraste:**  \r
La misma lamina puede tener \`Ixy != 0\` en un marco arbitrario y\r
\r
{{f:rel_l_omega}}\r
\r
tras girar al marco principal.\r
\r
## Errores de modelo\r
\r
### Error 3: Usar el tensor rigido cuando la distribucion de masa cambia durante el movimiento\r
\r
**Por que parece correcto:**  \r
Una vez calculada la matriz, da la impresion de que sirve para todo el proceso.\r
\r
**Por que es incorrecto:**  \r
Si la masa se redistribuye o si la forma cambia, el tensor deja de ser constante y hay que actualizar el modelo.\r
\r
**Senal de deteccion:**  \r
Se analizan masas deslizantes, piezas plegables o deformaciones sin recalcular la matriz.\r
\r
**Correccion conceptual:**  \r
Decidir si el problema sigue siendo de cuerpo rigido o si exige un tensor dependiente del tiempo.\r
\r
**Mini-ejemplo de contraste:**  \r
Un satelite con paneles desplegables no mantiene el mismo tensor antes y despues del despliegue.\r
\r
### Error 4: Mezclar componentes medidas en marcos distintos\r
\r
**Por que parece correcto:**  \r
Cada numero parece razonable por separado.\r
\r
**Por que es incorrecto:**  \r
El tensor solo tiene sentido si todas sus componentes se refieren al mismo origen y al mismo sistema de ejes.\r
\r
**Senal de deteccion:**  \r
La matriz deja de ser simetrica o genera resultados incompatibles con la geometria.\r
\r
**Correccion conceptual:**  \r
Etiquetar siempre origen, eje y convension de signos antes de ensamblar la matriz.\r
\r
**Mini-ejemplo de contraste:**  \r
Tomar \`Ixx\` en un marco del laboratorio y \`Ixy\` en un marco ligado al cuerpo produce una matriz sin significado fisico.\r
\r
## Errores matemáticos\r
\r
### Error 5: Aplicar \`rel_l_omega\` como si fuera siempre una formula escalar\r
\r
**Por que parece correcto:**  \r
La expresion\r
\r
{{f:rel_l_omega}}\r
\r
es corta y se memoriza facil.\r
\r
**Por que es incorrecto:**  \r
En el leaf, \`rel_l_omega\` solo se vuelve escalar en un eje principal o en una reduccion ya justificada. En general es una relacion matricial.\r
\r
**Senal de deteccion:**  \r
Se despeja\r
\r
{{f:rel_l_omega}}\r
\r
en un problema donde [[momento_angular]] y [[omega]] tienen componentes en varios ejes.\r
\r
**Correccion conceptual:**  \r
Escribir antes la forma matricial o, al menos, aclarar que se esta trabajando en una direccion principal.\r
\r
**Mini-ejemplo de contraste:**  \r
Si \`Ixy != 0\`, el cociente escalar entre [[momento_angular]] y [[omega]] pierde informacion sobre la direccion de ambas magnitudes.\r
\r
### Error 6: Usar \`energia_cinetica_tensores\` sin justificar el eje principal o la reduccion equivalente\r
\r
**Por que parece correcto:**  \r
La formula energetica produce un numero rapido y correcto en muchos casos simples.\r
\r
**Por que es incorrecto:**  \r
La expresion de \`energia_cinetica_tensores\` en el leaf representa la lectura sobre un eje principal o una reduccion equivalente. Si no se justifica ese paso, la interpretacion energetica queda incompleta.\r
\r
**Senal de deteccion:**  \r
Se calcula [[E]] con un unico \`I\` despues de haber trabajado todo el problema con una matriz no diagonal.\r
\r
**Correccion conceptual:**  \r
Explicar si se ha pasado a ejes principales o si se esta usando un momento principal equivalente.\r
\r
**Mini-ejemplo de contraste:**  \r
Una matriz con [[producto_inercia]] no nulo puede requerir primero diagonalizacion antes de leer [[E]] con una formula escalar.\r
\r
## Errores de interpretación\r
\r
### Error 7: Leer la desalineacion entre [[momento_angular]] y [[omega]] como contradiccion\r
\r
**Por que parece correcto:**  \r
En cursos iniciales casi todos los dibujos muestran ambos vectores paralelos.\r
\r
**Por que es incorrecto:**  \r
La desalineacion es precisamente una de las firmas fisicas del tensor fuera de ejes principales. No es una anomalia; es una lectura del modelo.\r
\r
**Senal de deteccion:**  \r
El alumno concluye que "algo salio mal" solo porque el vector [[momento_angular]] no apunta como [[omega]].\r
\r
**Correccion conceptual:**  \r
Interpretar la inclinacion como efecto de [[producto_inercia]] y de la eleccion de ejes.\r
\r
**Mini-ejemplo de contraste:**  \r
En un cuerpo asimetrico, el mismo modulo de [[omega]] puede producir direcciones distintas de [[momento_angular]] segun el marco usado.\r
\r
## Regla de autocontrol rápido\r
\r
Antes de cerrar un problema del tensor de inercia, revisar:\r
\r
1. Si el origen y los ejes estan declarados.\r
2. Si la matriz es simetrica y todas sus componentes pertenecen al mismo marco.\r
3. Si [[producto_inercia]] se ha anulado solo por una simetria o rotacion justificadas.\r
4. Si \`rel_l_omega\` y \`energia_cinetica_tensores\` se usan en el dominio correcto.\r
5. Si la direccion final de [[momento_angular]] es fisicamente coherente con la geometria.`;export{e as default};
