const e=`## Modelo ideal

El modelo canonico del efecto Doppler asume una **fuente puntual** emitiendo ondas esfericas en un medio **homogeneo, isotropo y en reposo** respecto al sistema de referencia del laboratorio. La velocidad de propagacion del sonido [[v_sonido]] es constante en todo el espacio y no depende de la frecuencia (medio no dispersivo). El movimiento de la fuente y del receptor es a lo largo de la **linea que los une** (movimiento radial puro). Bajo estas condiciones, las relaciones Doppler clasicas son exactas.

Este modelo captura con plena precision el tono de la sirena de una ambulancia que se aproxima y aleja en linea recta, el radar de velocidad de carretera que apunta directamente al vehiculo, y la medicion de velocidad radial de una estrella por desplazamiento de lineas espectrales.

## Hipótesis

- **Medio en reposo**: [[v_sonido]] es la velocidad de propagacion respecto al medio. Si hay viento u otra corriente de fluido, la velocidad efectiva del sonido cambia con la direccion y las formulas deben corregirse usando la velocidad resultante de la composicion vectorial del viento y [[v_sonido]].

- **Movimiento radial puro**: las velocidades [[v_fuente]] y [[v_receptor]] se usan como velocidades a lo largo de la linea fuente-receptor. Si hay un angulo entre la velocidad y esa linea, solo la componente radial contribuye al efecto Doppler. Para un angulo de 90 grados, el efecto Doppler clasico es nulo (aunque el Doppler relativista no lo es).

- **Fuente subsonica**: la formula requiere que [[v_fuente]] sea estrictamente menor que [[v_sonido]]. Cuando [[v_fuente]] iguala o supera [[v_sonido]], el modelo falla.

- **Frecuencia constante**: la fuente emite a [[f_fuente]] constante. Si la fuente varia su frecuencia de emision (por ejemplo, un chirp de sonar), hay que tratar la señal como una superposicion de frecuencias monocromaticas.

- **Campo lejano**: el receptor esta suficientemente lejos de la fuente para que la onda pueda aproximarse como esferica saliente. En campo cercano (distancias menores que la longitud de onda), la distribucion de amplitud y fase es mas compleja.

## Dominio de validez cuantitativo

El modelo es valido cuando el numero de Mach de la fuente (M igual a [[v_fuente]] partido entre [[v_sonido]]) es menor de 0.9. Para M mayor de 0.9, los efectos de compresibilidad del fluido (en el caso del aire) producen desviaciones respecto a la onda esferica ideal.

Para movimiento no estrictamente radial, el error de usar la velocidad total en lugar de la componente radial es proporcional al cuadrado del seno del angulo. Para angulos menores de 10 grados, el error es inferior al 2 %; para angulos de 30 grados, el error alcanza el 13 %.

En presencia de viento, la velocidad efectiva del sonido en la direccion fuente-receptor cambia respecto a [[v_sonido]] segun la alineacion. Para vientos de hasta 10 m/s en aire ([[v_sonido]] de 343 m/s), el error sin correccion de viento es inferior al 3 %.

## Señales de fallo del modelo

- **[[f_obs]] diverge o es negativa**: el denominador de la formula de fuente movil se ha anulado o cambiado de signo, lo que indica que [[v_fuente]] ha alcanzado o superado [[v_sonido]]. En ese regimen la formula no aplica.

- **La frecuencia observada no cambia con la velocidad**: puede indicar que el movimiento es puramente transversal (el objeto se aleja perpendicularmente). En ese caso el efecto Doppler clasico es cero.

- **Presencia de viento apreciable**: si la diferencia entre frecuencia ascendente y descendente de un mismo objeto no es simetrica, hay un componente de viento que desplaza asimetricamente [[v_sonido]] en las dos direcciones.

- **Multiples ecos o frecuencias**: en entornos cerrados, el eco del suelo, paredes u objetos proximos puede llegar con tiempos de vuelo distintos y con desplazamientos Doppler distintos, complicando la identificacion de [[f_obs]] del objeto primario.

## Modelo extendido o alternativo

El **modelo con viento** añade vectorialmente la velocidad del viento a [[v_sonido]] en cada direccion. Para un radar de velocidad en carretera en presencia de viento lateral, la componente del viento en la linea de vision puede producir un error sistematico si no se corrige.

El **modelo de angulo oblicuo** reemplaza [[v_fuente]] por [[v_fuente]] multiplicado por el coseno del angulo entre la velocidad y la linea de vision. Este modelo es esencial en el sonar Doppler de embarcaciones, donde la velocidad del barco no esta siempre alineada con la trayectoria al objeto.

El **modelo Doppler pulsado** para ecografia medica combina el efecto Doppler con el principio de eco. En lugar de una frecuencia continua, el equipo emite pulsos y mide la variacion de la fase del eco entre pulsos sucesivos para calcular la velocidad del flujo sanguineo en cada punto de la imagen.

El **modelo Doppler relativista** reemplaza toda la formulacion clasica para velocidades comparables a la velocidad de la luz. Se usa en radioastronomia y en el analisis de jets relativistas de objetos compactos.

Cuando conviene pasar al modelo extendido: para ángulos de incidencia mayores de 20 grados; para velocidades de viento superiores al 5 % de [[v_sonido]]; para velocidades de fuente mayores del 80 % de [[v_sonido]]; o para mediciones de precision en las que el error de la aproximacion radial supere la incertidumbre de medida.

## Comparación operativa

| Criterio | Modelo ideal (radial, sin viento) | Modelo con angulo oblicuo | Modelo Doppler pulsado |
|---|---|---|---|
| Variables de entrada | [[f_fuente]], [[v_fuente]] o [[v_receptor]], [[v_sonido]] | Idem mas angulo de incidencia | Fase del eco entre pulsos |
| Rango de aplicacion | Radar directo, sirena en linea recta | Sonar con angulo, radar oblicuo | Ecografia Doppler cardiaca y vascular |
| Error sin correccion de angulo | Nulo (angulo cero) | Proporcional a cos²(angulo) | No aplica |
| Capacidad para medir velocidad | Si, despejando [[v_fuente]] | Si, con correccion de angulo | Si, con mayor resolucion espacial |
| Complejidad | Baja | Media | Alta |
`;export{e as default};
