## Errores conceptuales


### Error 1: Creer que la onda de Rayleigh es simplemente una onda S que viaja por la superficie

**Por que parece correcto**

La onda de Rayleigh tiene una componente transversal dominante y su velocidad es cercana a [[v_s]], lo que induce a pensar que es una onda S confinada a la superficie.

**Por que es incorrecto**

La onda de Rayleigh es un modo acoplado P-S. Tiene componente longitudinal (vertical) y transversal (horizontal) simultáneamente. La condicion de superficie libre crea un acoplamiento que no existe para ondas de cuerpo aisladas. El movimiento eliptico retrogrado no es reproducible con una onda S pura.

**Senal de deteccion**

El alumno no puede explicar por que [[velocidad_de_onda_de_rayleigh]] es menor que [[v_s]], ni por que existe una componente vertical de movimiento.

**Correccion conceptual**

La onda de Rayleigh es una superposicion coherente de ondas P y S evanescentes (que decaen con la profundidad) acopladas por la condicion de contorno. Ni la P ni la S por separado satisfacen la superficie libre; solo su combinacion lo hace, y esa combinacion viaja mas lento que cualquiera de las dos.

**Mini-ejemplo de contraste**

Una onda S pura en un medio infinito tiene [[v_s]] de 3000 m/s y solo movimiento horizontal. La onda de Rayleigh en el mismo medio tiene [[velocidad_de_onda_de_rayleigh]] de 2760 m/s (con [[nu_poisson]] de 0.25) y describe elipses con componentes vertical y horizontal. Son fenomenos distintos.


### Error 2: Pensar que las ondas de Rayleigh se propagan en fluidos

**Por que parece correcto**

Las olas del mar parecen ondas superficiales con movimiento eliptico, y el alumno generaliza esa observacion a todos los medios.

**Por que es incorrecto**

Las ondas de Rayleigh requieren rigidez de cizalla ([[v_s]] finita). En un fluido, [[v_s]] es cero y la ecuacion secular de Rayleigh no tiene solucion real. Las olas del mar son ondas de gravedad, no elasticas; su mecanismo restaurador es la gravedad, no la elasticidad.

**Senal de deteccion**

El alumno intenta aplicar la formula de [[velocidad_de_onda_de_rayleigh]] a agua o aire obteniendo resultados absurdos (o afirma que las ondas del oceano son "de Rayleigh").

**Correccion conceptual**

Las ondas de Rayleigh necesitan un solido con superficie libre. Las ondas de superficie en fluidos (ondas de gravedad, ondas capilares) tienen mecanismos restauradores completamente distintos y no siguen la ecuacion secular elastica.

**Mini-ejemplo de contraste**

Agua: [[v_s]] cero. Intentar calcular [[velocidad_de_onda_de_rayleigh]] con la formula de Viktorov da [[velocidad_de_onda_de_rayleigh]] cero: no hay onda de Rayleigh. Las ondas que se observan en la superficie del mar dependen de la gravedad y su velocidad depende de la profundidad y la longitud de onda, no de modulos elasticos.

## Errores de modelo


### Error 3: Aplicar la formula de medio homogeneo a un suelo estratificado y esperar resultados correctos a todas las frecuencias

**Por que parece correcto**

La formula de Viktorov da un unico valor de [[velocidad_de_onda_de_rayleigh]] independiente de la frecuencia, y el alumno asume que ese valor aplica siempre.

**Por que es incorrecto**

En un medio estratificado, la onda de Rayleigh es dispersiva: su velocidad de fase depende de la frecuencia. Frecuencias altas sondean la capa superficial (generalmente mas lenta) y frecuencias bajas sondean capas profundas (mas rapidas). La formula de Viktorov solo da la velocidad para un semiespacio homogeneo.

**Senal de deteccion**

El alumno obtiene un unico valor de [[velocidad_de_onda_de_rayleigh]] para un perfil de suelo claramente heterogeneo (por ejemplo, arcilla sobre roca) y no comprende por que el ensayo MASW muestra una curva de dispersion en lugar de un punto.

**Correccion conceptual**

En medios estratificados se debe resolver la ecuacion secular generalizada para cada frecuencia. La curva de dispersion resultante es la herramienta diagnostica; aplicar la formula de Viktorov solo tiene sentido como referencia para cada capa individual.

**Mini-ejemplo de contraste**

Suelo con 5 m de arcilla ([[v_s]] 150 m/s) sobre roca ([[v_s]] 2000 m/s). A 30 Hz ([[longitud_de_onda_de_rayleigh]] de 5 m), la onda sondea solo la arcilla y [[velocidad_de_onda_de_rayleigh]] es cercana a 140 m/s. A 3 Hz ([[longitud_de_onda_de_rayleigh]] de 700 m), la onda sondea principalmente la roca y [[velocidad_de_onda_de_rayleigh]] es cercana a 1850 m/s. Un unico valor de 1000 m/s no describe la realidad.


### Error 4: Ignorar que la profundidad de penetracion depende de la frecuencia

**Por que parece correcto**

El alumno aplica [[d_pen]] como un valor fijo del material, sin considerar que [[longitud_de_onda_de_rayleigh]] cambia con la frecuencia.

**Por que es incorrecto**

[[d_pen]] es aproximadamente [[longitud_de_onda_de_rayleigh]], y [[longitud_de_onda_de_rayleigh]] depende de la frecuencia (es [[velocidad_de_onda_de_rayleigh]] dividido entre la frecuencia). A frecuencia alta la penetracion es corta; a frecuencia baja es profunda. Es la herramienta fundamental para seleccionar la profundidad de investigacion.

**Senal de deteccion**

El alumno afirma que "la onda de Rayleigh penetra 10 metros" sin especificar la frecuencia, o usa la misma [[d_pen]] para 5 Hz y 50 Hz.

**Correccion conceptual**

La profundidad de penetracion es una funcion de la frecuencia: [[d_pen]] es aproximadamente [[velocidad_de_onda_de_rayleigh]] dividido entre la frecuencia. Para sondear a mayor profundidad, se debe usar menor frecuencia. Este es el principio operativo del metodo MASW.

**Mini-ejemplo de contraste**

Suelo con [[velocidad_de_onda_de_rayleigh]] de 200 m/s. A 50 Hz: [[longitud_de_onda_de_rayleigh]] de 4 m, penetracion de 4 m. A 5 Hz: [[longitud_de_onda_de_rayleigh]] de 40 m, penetracion de 40 m. Diez veces mas profundidad con diez veces menos frecuencia.

## Errores matemáticos


### Error 5: Usar la ecuacion secular como si fuera resoluble directamente para [[velocidad_de_onda_de_rayleigh]]

**Por que parece correcto**

El alumno ve un polinomio de sexto grado y intenta factorizarlo algebraicamente o busca una formula cerrada para [[cociente_adimensional_v_r_v_s]].

**Por que es incorrecto**

La ecuacion secular de Rayleigh no tiene solucion algebraica cerrada en forma general. Las raices se obtienen numericamente o mediante aproximaciones validadas como la de Viktorov. Intentar factorizar da expresiones incorrectas o aproximaciones fuera de rango.

**Senal de deteccion**

El alumno presenta una "solucion exacta" de la secular que no coincide con los valores tabulados de [[cociente_adimensional_v_r_v_s]] (por ejemplo, obtiene [[cociente_adimensional_v_r_v_s]] mayor que 1 o negativo).

**Correccion conceptual**

Para calculos practicos, usar la aproximacion de Viktorov (error menor del 0.5 por ciento) o resolver numericamente. La ecuacion secular sirve para comprender la fisica (existencia de una unica raiz real entre 0 y 1), no como herramienta de calculo directo.

**Mini-ejemplo de contraste**

Con [[nu_poisson]] de 0.25 ([[xi_vs_vp]] de 0.577): la raiz numerica exacta es [[cociente_adimensional_v_r_v_s]] de 0.9194. La aproximacion de Viktorov da 0.9200. Cualquier "factorizacion algebraica" que de un valor distinto (como 0.95 o 0.88) esta equivocada.


### Error 6: Confundir el signo del exponente en el decaimiento con la profundidad

**Por que parece correcto**

El alumno escribe la exponencial con signo positivo en el exponente, pensando que la amplitud "crece" hacia el interior.

**Por que es incorrecto**

La onda de Rayleigh esta confinada a la superficie; su amplitud decrece con la profundidad. El exponente debe ser negativo: [[amplitud_a_profundidad_z]] es [[amplitud_en_la_superficie]] por la exponencial de menos [[coeficiente_de_decaimiento_con_la_profundidad]] por [[z_prof]]. Un exponente positivo daria amplitud infinita en profundidad, lo cual viola la conservacion de energia.

**Senal de deteccion**

El resultado muestra [[amplitud_a_profundidad_z]] mayor que [[amplitud_en_la_superficie]] para [[z_prof]] positivo, o [[amplitud_a_profundidad_z]] que crece con la profundidad.

**Correccion conceptual**

El signo negativo en el exponente garantiza que la amplitud disminuye con la profundidad. Verificar siempre que para [[z_prof]] grande, [[amplitud_a_profundidad_z]] tienda a cero.

**Mini-ejemplo de contraste**

Con [[coeficiente_de_decaimiento_con_la_profundidad]] de 0.5 por metro y [[z_prof]] de 4 m: correcto, exponencial de menos 2, es decir [[amplitud_a_profundidad_z]] de 0.135 por [[amplitud_en_la_superficie]]. Incorrecto (signo positivo): exponencial de mas 2, es decir [[amplitud_a_profundidad_z]] de 7.39 por [[amplitud_en_la_superficie]]. La amplitud no puede crecer 7 veces al bajar 4 metros.

## Errores de interpretación


### Error 7: Interpretar una velocidad de Rayleigh alta como un material "rigido en profundidad"

**Por que parece correcto**

El alumno sabe que mayor velocidad indica mayor rigidez, y extrapola esa informacion a todo el volumen del medio.

**Por que es incorrecto**

La onda de Rayleigh a una frecuencia dada solo sondea hasta una profundidad del orden de [[longitud_de_onda_de_rayleigh]]. Una [[velocidad_de_onda_de_rayleigh]] alta indica que el material es rigido en esa capa, pero no dice nada sobre lo que hay debajo. Para conocer la rigidez a mayor profundidad hay que medir a frecuencias mas bajas.

**Senal de deteccion**

El alumno concluye que "todo el terreno es rigido" basandose en una sola medida de [[velocidad_de_onda_de_rayleigh]] a frecuencia alta, sin comprobar la curva de dispersion.

**Correccion conceptual**

La informacion de [[velocidad_de_onda_de_rayleigh]] esta ligada a la frecuencia de medida. Una caracterizacion completa requiere medir [[velocidad_de_onda_de_rayleigh]] a multiples frecuencias y construir el perfil de dispersion, que luego se invierte para obtener [[v_s]] en funcion de la profundidad.

**Mini-ejemplo de contraste**

Suelo con capa de hormigon de 0.5 m ([[v_s]] de 2500 m/s) sobre arcilla blanda ([[v_s]] de 120 m/s). A 500 Hz ([[longitud_de_onda_de_rayleigh]] de 5 m), la medida refleja mayormente el hormigon y [[velocidad_de_onda_de_rayleigh]] es alta. A 10 Hz ([[longitud_de_onda_de_rayleigh]] de 12 m), la onda penetra la arcilla y [[velocidad_de_onda_de_rayleigh]] cae drasticamente. La capa superficial rigida enmascara la debilidad subyacente si no se mide a baja frecuencia.


### Error 8: Creer que la onda de Rayleigh no produce daño porque es "superficial"

**Por que parece correcto**

El termino "superficial" sugiere que la onda es debil o insignificante comparada con las ondas de cuerpo que vienen del interior.

**Por que es incorrecto**

Las ondas de Rayleigh son las mas destructivas en terremotos superficiales. Su amplitud en superficie es maxima, se atenuan geometricamente menos que las ondas de cuerpo (decrecen como la inversa de la raiz de la distancia en lugar del cuadrado), y su contenido de baja frecuencia acopla eficientemente con edificios.

**Senal de deteccion**

El alumno subestima la amplitud superficial de un sismo lejano o no entiende por que la fase de mayor amplitud en un sismograma llega despues de las P y las S.

**Correccion conceptual**

"Superficial" se refiere al confinamiento vertical (amplitud concentrada cerca de la superficie), no a la intensidad. Precisamente porque la energia esta concentrada en la capa superficial donde estan las estructuras, el daño es maximo.

**Mini-ejemplo de contraste**

Sismo a 500 km. Las ondas P y S se atenuan con la distancia al cubo (divergencia esferica). Las de Rayleigh se atenuan con la raiz de la distancia (divergencia cilindrica). En el sismograma, la fase de Rayleigh tiene amplitud 10 veces mayor que la fase S directa a esa distancia. Es la fase que mueve los edificios.

## Regla de autocontrol rápido

Antes de dar por valido un calculo de ondas de Rayleigh, verificar estos puntos:

1. **[[velocidad_de_onda_de_rayleigh]] menor que [[v_s]]**: siempre, sin excepcion. El cociente [[cociente_adimensional_v_r_v_s]] esta entre 0.87 y 0.96.
2. **[[amplitud_a_profundidad_z]] menor o igual que [[amplitud_en_la_superficie]]**: la amplitud nunca crece con la profundidad. Si el resultado da lo contrario, el signo del exponente esta mal.
3. **Penetracion proporcional a [[longitud_de_onda_de_rayleigh]]**: si la frecuencia se duplica, la profundidad sondeada se reduce a la mitad. Si el resultado no refleja esto, revisar la relacion entre frecuencia y longitud de onda.