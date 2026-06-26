const a=`# Ejemplo tipo examen

## Enunciado

Un elevador realiza un trabajo mecanico de 24000 J para subir una carga durante 12 s. En otro tramo, el motor ejerce una fuerza de 800 N sobre el cable mientras el punto de aplicacion se mueve a 1,5 m/s en la misma direccion. Calcula la potencia media del primer tramo y la potencia instantanea del segundo. Interpreta si los dos resultados describen la misma informacion fisica.

## Datos

- [[W]] = 24000 J.
- [[t]] = 12 s.
- [[F]] = 800 N.
- [[v]] = 1,5 m/s.
- [[theta]] = 0 rad para el segundo tramo.
- La potencia buscada es [[P]].

## Definicion del sistema

El sistema es el conjunto motor-carga visto desde la transferencia mecanica. En el primer tramo solo interesa el balance acumulado de [[W]] durante un intervalo [[t]]. En el segundo tramo se observa un instante donde la fuerza del cable y la rapidez del punto de aplicacion son conocidas.

## Modelo fisico

Se usa el modelo de potencia mecanica clasica. Para el primer tramo se aplica potencia media porque el enunciado da trabajo total e intervalo. Para el segundo se aplica potencia instantanea porque se conocen [[F]], [[v]] y [[theta]] en el mismo instante.

## Justificacion del modelo

El modelo es valido porque cada conjunto de datos pertenece a una misma fase. No se mezcla el trabajo total de la subida con la rapidez instantanea del cable. Ademas, en el segundo tramo la fuerza esta alineada con el movimiento, por lo que el coseno angular no reduce la transferencia.

## Resolucion simbolica

Para la potencia media:

{{f:potencia_media}}

Para la potencia instantanea mecanica:

{{f:potencia_instantanea_mecanica}}

La definicion diferencial justifica la lectura local de potencia como tasa de cambio del trabajo:

{{f:potencia_definicion_diferencial}}

## Sustitucion numerica

En el primer tramo, la division del trabajo entre el tiempo da una [[P]] media de 2000 W. En el segundo tramo, como [[theta]] es nulo, toda la [[F]] contribuye en la direccion de [[v]] y la [[P]] instantanea resulta 1200 W. Los resultados son distintos porque uno resume una fase completa y el otro describe un instante de otra fase.

## Validacion dimensional

La potencia media queda en J/s, que equivale a W. La potencia instantanea queda en N m/s; como un newton por metro es un joule, tambien equivale a J/s. Las dos rutas dimensionales llevan a la misma unidad, pero no a la misma interpretacion temporal.

## Interpretacion fisica

La primera potencia indica que durante la subida el elevador transfirio energia mecanica a un ritmo medio de 2000 W. La segunda indica que, en el instante analizado, la transferencia mecanica era de 1200 W. No hay contradiccion: una media puede ser mayor o menor que un valor instantaneo segun como haya variado el proceso.

El punto fisico clave es que [[P]] no es energia total. Si otro motor hiciera los mismos 24000 J en 6 s, tendria el doble de potencia media aunque el trabajo fuera identico. Si una fuerza de 800 N actuara perpendicularmente al movimiento, la potencia instantanea mecanica seria nula aunque la fuerza fuese grande.

# Ejemplo de aplicacion real

## Contexto

Un profesor compara dos taladros que pueden realizar el mismo trabajo mecanico sobre una pieza, pero uno completa la operacion en menos tiempo. La pregunta relevante para produccion no es solo cuanta energia consume cada proceso, sino que potencia puede sostener la herramienta sin sobrecalentarse.

## Estimacion fisica

Si una herramienta realiza 6000 J en 30 s, la potencia media es 200 W. Si otra realiza el mismo trabajo en 10 s, la potencia media es 600 W. La segunda no ha hecho mas trabajo sobre la pieza; lo ha hecho mas rapido. Si durante el corte la fuerza y la velocidad no estan alineadas, la potencia util debe calcularse con la componente paralela.

La estimacion tambien permite revisar limites de diseno. Si el fabricante declara una potencia util continua de 400 W, la segunda herramienta no podria sostener 600 W durante mucho tiempo sin calentamiento o reduccion de rendimiento. Si el corte solo exige ese valor durante un pico de dos segundos, el criterio cambia: importa la potencia maxima admisible y no solo la potencia media de todo el ciclo. Esta lectura cuantitativa muestra por que [[P]] debe compararse con duracion, refrigeracion y tipo de demanda.

## Interpretacion

La aplicacion real muestra por que la potencia sirve para dimensionar motores, baterias, frenos y sistemas de refrigeracion. Un sistema puede tener energia suficiente y aun fallar si no puede entregarla con la rapidez requerida. Tambien puede tener potencia instantanea alta durante picos cortos y una potencia media moderada durante todo el ciclo.

Para el alumno, el criterio practico es claro: usar potencia media para comparar procesos completos y potencia instantanea para analizar la exigencia en un instante. La lectura final debe incluir unidad, signo, escala y coherencia del intervalo elegido.

Un cierre correcto no diria solo "600 W". Diria que la herramienta transfiere energia tres veces mas rapido que la de 200 W, que esa diferencia no implica mas trabajo total, y que la validez de la comparacion depende de que ambas tareas tengan la misma profundidad de corte, material y trayectoria efectiva.
`;export{a as default};
