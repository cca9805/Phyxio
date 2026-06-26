# Errores comunes: tensor de inercia

## Errores conceptuales

### Error 1: Creer que el tensor es solo "un momento de inercia escrito grande"

**Por que parece correcto:**  
Muchos ejercicios iniciales diagonalizan el tensor enseguida y parece que todo se reduce a tres numeros sueltos.

**Por que es incorrecto:**  
El tensor es una relacion matricial entre [[omega]] y [[momento_angular]]. Su valor didactico aparece justamente cuando los ejes no son principales y [[producto_inercia]] explica el acoplamiento entre componentes.

**Senal de deteccion:**  
El alumno usa siempre una formula escalar aunque el problema mencione cuerpo asimetrico o ejes arbitrarios.

**Correccion conceptual:**  
Preguntar primero si [[momento_angular]] y [[omega]] tienen por que ser paralelos. Si no, hace falta el tensor, no solo un escalar.

**Mini-ejemplo de contraste:**  
Una placa asimetrica puede girar con [[omega]] en una direccion mientras [[momento_angular]] sale inclinada por [[producto_inercia]] no nulo.

### Error 2: Pensar que un producto de inercia no nulo es un error de calculo

**Por que parece correcto:**  
La diagonal parece "limpia" y las componentes cruzadas parecen ruido algebraico.

**Por que es incorrecto:**  
[[producto_inercia]] mide asimetria respecto a los ejes elegidos. Solo desaparece automaticamente en ejes principales o por simetria geometrica.

**Senal de deteccion:**  
El alumno fuerza

{{f:rel_l_omega}}

sin justificar ninguna simetria ni ninguna rotacion de ejes.

**Correccion conceptual:**  
Comprobar si el eje elegido coincide realmente con un eje principal antes de anular terminos fuera de la diagonal.

**Mini-ejemplo de contraste:**  
La misma lamina puede tener `Ixy != 0` en un marco arbitrario y

{{f:rel_l_omega}}

tras girar al marco principal.

## Errores de modelo

### Error 3: Usar el tensor rigido cuando la distribucion de masa cambia durante el movimiento

**Por que parece correcto:**  
Una vez calculada la matriz, da la impresion de que sirve para todo el proceso.

**Por que es incorrecto:**  
Si la masa se redistribuye o si la forma cambia, el tensor deja de ser constante y hay que actualizar el modelo.

**Senal de deteccion:**  
Se analizan masas deslizantes, piezas plegables o deformaciones sin recalcular la matriz.

**Correccion conceptual:**  
Decidir si el problema sigue siendo de cuerpo rigido o si exige un tensor dependiente del tiempo.

**Mini-ejemplo de contraste:**  
Un satelite con paneles desplegables no mantiene el mismo tensor antes y despues del despliegue.

### Error 4: Mezclar componentes medidas en marcos distintos

**Por que parece correcto:**  
Cada numero parece razonable por separado.

**Por que es incorrecto:**  
El tensor solo tiene sentido si todas sus componentes se refieren al mismo origen y al mismo sistema de ejes.

**Senal de deteccion:**  
La matriz deja de ser simetrica o genera resultados incompatibles con la geometria.

**Correccion conceptual:**  
Etiquetar siempre origen, eje y convension de signos antes de ensamblar la matriz.

**Mini-ejemplo de contraste:**  
Tomar `Ixx` en un marco del laboratorio y `Ixy` en un marco ligado al cuerpo produce una matriz sin significado fisico.

## Errores matemáticos

### Error 5: Aplicar `rel_l_omega` como si fuera siempre una formula escalar

**Por que parece correcto:**  
La expresion

{{f:rel_l_omega}}

es corta y se memoriza facil.

**Por que es incorrecto:**  
En el leaf, `rel_l_omega` solo se vuelve escalar en un eje principal o en una reduccion ya justificada. En general es una relacion matricial.

**Senal de deteccion:**  
Se despeja

{{f:rel_l_omega}}

en un problema donde [[momento_angular]] y [[omega]] tienen componentes en varios ejes.

**Correccion conceptual:**  
Escribir antes la forma matricial o, al menos, aclarar que se esta trabajando en una direccion principal.

**Mini-ejemplo de contraste:**  
Si `Ixy != 0`, el cociente escalar entre [[momento_angular]] y [[omega]] pierde informacion sobre la direccion de ambas magnitudes.

### Error 6: Usar `energia_cinetica_tensores` sin justificar el eje principal o la reduccion equivalente

**Por que parece correcto:**  
La formula energetica produce un numero rapido y correcto en muchos casos simples.

**Por que es incorrecto:**  
La expresion de `energia_cinetica_tensores` en el leaf representa la lectura sobre un eje principal o una reduccion equivalente. Si no se justifica ese paso, la interpretacion energetica queda incompleta.

**Senal de deteccion:**  
Se calcula [[E]] con un unico `I` despues de haber trabajado todo el problema con una matriz no diagonal.

**Correccion conceptual:**  
Explicar si se ha pasado a ejes principales o si se esta usando un momento principal equivalente.

**Mini-ejemplo de contraste:**  
Una matriz con [[producto_inercia]] no nulo puede requerir primero diagonalizacion antes de leer [[E]] con una formula escalar.

## Errores de interpretación

### Error 7: Leer la desalineacion entre [[momento_angular]] y [[omega]] como contradiccion

**Por que parece correcto:**  
En cursos iniciales casi todos los dibujos muestran ambos vectores paralelos.

**Por que es incorrecto:**  
La desalineacion es precisamente una de las firmas fisicas del tensor fuera de ejes principales. No es una anomalia; es una lectura del modelo.

**Senal de deteccion:**  
El alumno concluye que "algo salio mal" solo porque el vector [[momento_angular]] no apunta como [[omega]].

**Correccion conceptual:**  
Interpretar la inclinacion como efecto de [[producto_inercia]] y de la eleccion de ejes.

**Mini-ejemplo de contraste:**  
En un cuerpo asimetrico, el mismo modulo de [[omega]] puede producir direcciones distintas de [[momento_angular]] segun el marco usado.

## Regla de autocontrol rápido

Antes de cerrar un problema del tensor de inercia, revisar:

1. Si el origen y los ejes estan declarados.
2. Si la matriz es simetrica y todas sus componentes pertenecen al mismo marco.
3. Si [[producto_inercia]] se ha anulado solo por una simetria o rotacion justificadas.
4. Si `rel_l_omega` y `energia_cinetica_tensores` se usan en el dominio correcto.
5. Si la direccion final de [[momento_angular]] es fisicamente coherente con la geometria.