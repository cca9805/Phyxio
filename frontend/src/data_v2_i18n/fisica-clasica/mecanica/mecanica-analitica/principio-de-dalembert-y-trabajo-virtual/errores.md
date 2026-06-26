## Errores conceptuales

### Error 1: Creer que una fuerza eliminada no existe

**Por que parece correcto**  
Si la normal o la tension no aparece en la ecuacion reducida, parece que se ha despreciado.

**Por que es incorrecto**  
La fuerza puede existir, pero no realizar trabajo virtual sobre desplazamientos compatibles.

**Senal de deteccion**  
El alumno afirma que la guia no ejerce normal porque la ecuacion angular no la contiene.

**Correccion conceptual**  
Distinguir existencia fisica de relevancia en el balance virtual.

**Mini-ejemplo de contraste**  
En un pendulo ideal, la tension existe y puede romper la cuerda si es grande. Sin embargo, no entra en la ecuacion angular reducida porque no realiza trabajo virtual sobre el desplazamiento angular compatible.

## Errores de modelo

### Error 2: Usar desplazamientos virtuales incompatibles

**Por que parece correcto**  
Se dibuja un desplazamiento pequeno y se piensa que todo desplazamiento pequeno sirve.

**Por que es incorrecto**  
[[dr]] debe respetar las ligaduras instantaneas. Si no lo hace, [[Wv]] no corresponde al sistema.

**Senal de deteccion**  
La variacion atraviesa una guia, estira una cuerda inextensible o cambia una distancia fija.

**Correccion conceptual**  
Construir primero las variaciones admisibles desde la geometria.

**Mini-ejemplo de contraste**  
Si una cuenta esta en una guia circular, una variacion radial cambia el radio y viola la ligadura. La variacion angular, en cambio, permanece sobre la guia y si puede usarse para calcular [[Wv]].

## Errores matemáticos

### Error 3: Medir siempre [[Qj]] en newtons

**Por que parece correcto**  
Se llama fuerza generalizada y se asocia mentalmente a una fuerza ordinaria.

**Por que es incorrecto**  
La unidad de [[Qj]] depende de la unidad de [[qi]]. En una coordenada angular, suele ser torque.

**Senal de deteccion**  
Se mezclan newtons y newton metro sin revisar dimensiones.

**Correccion conceptual**  
Leer [[Qj]] como coeficiente de trabajo virtual.

**Mini-ejemplo de contraste**  
Un empuje de 5 N aplicado a 0.4 m de un eje produce un aporte angular de 2 N m. Es incorrecto escribir [[Qj]]=5 N si la coordenada elegida es un angulo.

## Errores de interpretación

### Error 4: Confundir trabajo virtual con trabajo real

**Por que parece correcto**  
Ambos usan fuerza por desplazamiento.

**Por que es incorrecto**  
El trabajo real ocurre a lo largo de una trayectoria temporal. El trabajo virtual es una prueba instantanea compatible.

**Senal de deteccion**  
Se integra [[Wv]] como si describiera energia transferida durante el movimiento real.

**Correccion conceptual**  
Separar variacion virtual, desplazamiento real y evolucion temporal.

**Mini-ejemplo de contraste**  
Una fuerza puede tener trabajo virtual distinto de cero para una variacion admisible aunque el sistema, en ese instante, tenga velocidad nula. El trabajo virtual prueba direcciones posibles, no energia transferida durante un recorrido real.

## Regla de autocontrol rápido

Antes de usar D'Alembert, comprobar: 1) que [[dr]] es compatible; 2) que las reacciones eliminadas son ideales; 3) que [[F]], [[m]] y [[a]] pertenecen al mismo elemento; 4) que [[Qj]] tiene la dimension correcta para [[qi]]; 5) que [[Ri]] se iguala a [[Qj]] solo cuando la fuerza generalizada esta bien definida.

La regla debe aplicarse antes de sustituir numeros. Si la geometria de la ligadura esta mal, un calculo numerico exacto solo dara una respuesta precisa para el sistema equivocado. La prioridad es decidir primero que variaciones pertenecen al problema real.
