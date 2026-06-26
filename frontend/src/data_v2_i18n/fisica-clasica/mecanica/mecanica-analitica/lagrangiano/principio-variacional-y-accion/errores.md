## Errores conceptuales

### Error 1: Decir siempre minimo de accion

**Por que parece correcto**  
La expresion historica minimo de accion aparece en muchos textos y sugiere una idea intuitiva de economia.

**Por que es incorrecto**  
El criterio general es estacionariedad de [[S]], no minimo absoluto. La condicion local es [[deltaS]]=0.

**Senal de deteccion**  
El alumno afirma que cualquier trayectoria fisica tiene la accion mas baja posible sin comprobar estabilidad.

**Correccion conceptual**  
Usar accion estacionaria y distinguir minimo, maximo local y punto de silla.

**Mini-ejemplo de contraste**  
En una familia de trayectorias, una curva puede tener derivada primera nula de [[S]] y no ser el valor mas bajo global. Aceptarla por estacionariedad es correcto; llamarla minimo absoluto sin prueba no lo es.

## Errores de modelo

### Error 2: Variar extremos temporales o espaciales sin declararlo

**Por que parece correcto**  
Al comparar caminos, parece natural mover tambien el punto inicial o final.

**Por que es incorrecto**  
El principio usado en este leaf fija [[t1]], [[t2]] y las configuraciones extremas. Si se mueven, cambia el problema.

**Senal de deteccion**  
La variacion modifica la duracion o el destino, pero se sigue aplicando la misma ecuacion.

**Correccion conceptual**  
Declarar primero que permanece fijo y que variaciones son admisibles.

**Mini-ejemplo de contraste**  
Comparar dos caminos que llegan a puntos finales distintos no prueba el principio de Hamilton del mismo problema. Para que la comparacion sea valida, ambos caminos deben compartir extremos y solo diferir en su forma intermedia.

## Errores matemáticos

### Error 3: Tratar [[S]] como funcion ordinaria de un numero

**Por que parece correcto**  
La notacion se parece a una funcion y el alumno busca una derivada simple.

**Por que es incorrecto**  
[[S]] es un funcional: recibe una trayectoria [[qi]] completa. La derivada relevante es una variacion.

**Senal de deteccion**  
Se intenta derivar [[S]] solo respecto de una posicion aislada.

**Correccion conceptual**  
Pensar en familias de trayectorias y en cambios compatibles de toda la funcion.

**Mini-ejemplo de contraste**  
Cambiar solo un valor puntual de [[qi]] puede romper la suavidad de la trayectoria. Una variacion correcta modifica una funcion completa y mantiene las condiciones de contorno que hacen definible [[deltaS]].

## Errores de interpretación

### Error 4: Confundir [[Ri]] con una fuerza cartesiana

**Por que parece correcto**  
El residuo tiene dimension de fuerza generalizada en muchos casos.

**Por que es incorrecto**  
[[Ri]] pertenece a la coordenada generalizada elegida y nace de variar [[L]], no de proyectar automaticamente una fuerza cartesiana.

**Senal de deteccion**  
Se compara [[Ri]] con newtons sin revisar la unidad de [[qi]].

**Correccion conceptual**  
Leer [[Ri]] como condicion local de accion estacionaria en la coordenada correspondiente.

**Mini-ejemplo de contraste**  
Si [[qi]] es un angulo, el residuo asociado puede tener dimension de torque. Compararlo directamente con una fuerza lineal en newtons mezcla coordenadas y destruye la lectura fisica del resultado.

## Regla de autocontrol rápido

Antes de aceptar una derivacion variacional, comprobar: 1) [[L]] describe un unico sistema; 2) [[t1]] y [[t2]] estan fijados; 3) las variaciones respetan extremos y ligaduras; 4) todas las formulas usadas pertenecen al mismo leaf o se citan como relaciones externas; 5) [[deltaS]] se interpreta como estacionariedad, no como valor pequeno decorativo.

La comprobacion final debe incluir una lectura fisica del resultado. Si la ecuacion obtenida no recupera el caso libre, el oscilador simple o el pendulo en el limite correspondiente, el fallo probablemente esta antes de derivar: en la eleccion de [[L]], en las condiciones de borde o en las variaciones admitidas.
