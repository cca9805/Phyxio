const e=`## Errores conceptuales

### Error 1: Confundir [[L]] con [[E]]

**Por que parece correcto**  
Ambas magnitudes usan [[T]] y [[V]] y tienen unidad de energia, asi que parecen versiones equivalentes.

**Por que es incorrecto**  
[[L]] se define como diferencia y se usa para dinamica lagrangiana. [[E]] se define como suma y se usa para balances de energia.

**Senal de deteccion**  
Se sustituye [[E]] en una ecuacion de Lagrange o se interpreta [[L]] como energia almacenada total.

**Correccion conceptual**  
Separar siempre la pregunta: conservacion energetica o construccion de ecuaciones.

**Mini-ejemplo de contraste**  
Si [[T]]=5 J y [[V]]=3 J, entonces [[L]]=2 J y [[E]]=8 J. No describen lo mismo.

## Errores de modelo

### Error 2: Mezclar coordenadas entre [[T]] y [[V]]

**Por que parece correcto**  
En muchos ejercicios las expresiones se copian de memoria y parecen independientes entre si.

**Por que es incorrecto**  
El lagrangiano exige que ambas energias describan la misma configuracion. Si [[T]] usa [[qdi]] pero [[V]] usa una coordenada incompatible, el modelo queda roto.

**Senal de deteccion**  
No se puede explicar que coordenada del sistema aparece simultaneamente en movimiento y configuracion.

**Correccion conceptual**  
Antes de formar [[L]], reescribir todas las energias en las coordenadas elegidas.

**Mini-ejemplo de contraste**  
En una rampa, usar velocidad de avance pero altura sin relacionarla con la posicion sobre la rampa deja el modelo incompleto.

## Errores matematicos

### Error 3: Tratar [[T]] como proporcional a [[v]]

**Por que parece correcto**  
La intuicion cotidiana asocia mas velocidad con mas energia de forma lineal.

**Por que es incorrecto**  
La energia cinetica traslacional depende de [[v]] al cuadrado.

**Senal de deteccion**  
Al duplicar [[v]], el alumno duplica [[T]] en vez de multiplicarla por cuatro.

**Correccion conceptual**  
Revisar el exponente antes de sustituir y comprobar unidades.

**Mini-ejemplo de contraste**  
Un cuerpo a 4 m/s no tiene el doble de energia cinetica que a 2 m/s; tiene cuatro veces mas.

## Errores de interpretacion

### Error 4: Leer el cero de [[V]] como ausencia de interaccion

**Por que parece correcto**  
La palabra cero sugiere que no hay energia o que no hay fuerza.

**Por que es incorrecto**  
El cero de energia potencial depende de la referencia. Cambiarlo no elimina necesariamente la interaccion.

**Senal de deteccion**  
Se comparan valores absolutos de [[V]] entre problemas con referencias distintas.

**Correccion conceptual**  
Declarar la referencia y analizar cambios o gradientes, no solo valores absolutos.

**Mini-ejemplo de contraste**  
Una mesa puede ser el cero de [[V]] en un problema y no en otro; la gravedad sigue actuando.

## Regla de autocontrol rapido

Antes de aceptar el resultado, verificar: 1) [[T]] no es negativa; 2) [[V]] tiene referencia declarada; 3) [[L]] se calcula como diferencia; 4) [[E]] se calcula como suma; 5) todas las energias pertenecen al mismo sistema. Si falla un punto, rehacer el modelo energetico antes de continuar.

La regla tambien obliga a revisar el objetivo del problema. Si se pide conservacion, [[E]] es la magnitud natural; si se pide preparar la ecuacion lagrangiana, [[L]] es el objeto correcto. Cambiar uno por otro no es un atajo, es un cambio de pregunta fisica.
`;export{e as default};
