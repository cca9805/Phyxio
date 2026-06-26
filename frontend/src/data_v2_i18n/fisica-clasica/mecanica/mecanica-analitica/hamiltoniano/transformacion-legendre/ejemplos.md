# Ejemplo tipo examen

## Enunciado

Una particula de masa [[m]] se mueve en una dimension bajo una energia potencial [[V]] dependiente de la coordenada [[qi]]. Su lagrangiano es cuadratico en la velocidad generalizada [[qdi]]. Construye el momento conjugado [[p]], invierte la relacion velocidad-momento y escribe el hamiltoniano [[H]].

## Datos

- [[m]] = 2,0 kg.
- [[qdi]] = 3,0 m/s en el estado considerado.
- [[V]] = 5,0 J.
- La coordenada [[qi]] es cartesiana, por lo que [[qdi]] tiene unidades de velocidad ordinaria.

## Definición del sistema

El sistema se reduce a un unico grado de libertad. La descripcion lagrangiana usa [[qi]] y [[qdi]], mientras que la descripcion hamiltoniana debe usar [[qi]] y [[p]]. El objetivo no es resolver una trayectoria completa, sino transformar correctamente las variables dinamicas del estado.

## Modelo físico

Se adopta el modelo regular cuadratico. La masa efectiva [[m]] es constante y la energia potencial [[V]] no depende de [[qdi]]. Bajo estas hipotesis, la pendiente [[DLv]] del lagrangiano respecto de la velocidad define un momento conjugado proporcional a la velocidad.

## Justificación del modelo

El modelo es valido porque no hay rozamiento explicito, no se introduce potencial dependiente de la velocidad y la coordenada elegida no genera una masa efectiva variable. La transformacion de Legendre es regular: para cada [[qdi]] hay un unico [[p]] y, por tanto, se puede invertir el mapa.

## Resolución simbólica

Primero se escribe el lagrangiano cuadratico:

{{f:lagrangiano_cuadratico}}

El momento conjugado se define como pendiente de [[L]] respecto de [[qdi]]:

{{f:momento_conjugado_legendre}}

En este caso esa pendiente toma la forma simple:

{{f:momento_cuadratico}}

La inversion velocidad-momento es:

{{f:velocidad_desde_momento}}

La condicion de regularidad general se resume en:

{{f:condicion_regularidad_legendre}}

Por ultimo, la transformacion de Legendre construye el hamiltoniano:

{{f:hamiltoniano_legendre}}

Para el caso cuadratico conservativo:

{{f:hamiltoniano_cuadratico}}

## Sustitución numérica

Con [[m]] = 2,0 kg y [[qdi]] = 3,0 m/s, el momento conjugado vale 6,0 kg m/s. La energia cinetica escrita con momento vale 9,0 J, porque el cuadrado del momento se divide entre dos veces la masa. Al sumar [[V]] = 5,0 J, el hamiltoniano resulta 14,0 J.

La misma cuenta hecha desde el lagrangiano da un valor de cuatro julios para [[L]]: la energia cinetica supera a la potencial, pero ambas siguen perteneciendo al mismo modelo. Al formar [[H]] con el termino conjugado y retirar el lagrangiano, se recuperan catorce julios. Ambas rutas coinciden porque la transformacion esta bien cerrada.

## Validación dimensional

La unidad de [[p]] es kg m/s. Al multiplicar [[p]] por [[qdi]] aparece kg m^2/s^2, es decir, joule. [[L]], [[V]] y [[H]] tambien se expresan en joules. La consistencia dimensional confirma que no se ha confundido momento con velocidad ni se ha dejado una masa sin incluir.

## Interpretación física

La lectura fisica central es causal: la curvatura del lagrangiano respecto de la velocidad permite que una pendiente identifique el estado dinamico. En este caso [[W]] equivale a la masa efectiva y no se anula, de modo que la condicion de regularidad se cumple. Como esa pendiente es invertible en el modelo elegido, el cambio de variables no destruye informacion; solo reorganiza que magnitud se usa para describir el movimiento.

Esto significa que el numero obtenido para [[H]] no es el centro del ejemplo. Lo importante es reconocer que el sistema tiene una estructura dinamica regular: al aumentar el momento conjugado cambia la capacidad del sistema para evolucionar por la coordenada, y al fijar la posicion el signo del momento determina hacia donde se moveria. La causa fisica del cambio no es una operacion aritmetica, sino la relacion entre inercia, velocidad y pendiente del lagrangiano.

El resultado no dice solo que la energia total sea 14,0 J. Dice que el mismo estado puede describirse de dos maneras equivalentes: con velocidad en el espacio de configuracion o con momento en el espacio de fases. La transformacion permite pasar de una descripcion operacional, centrada en la rapidez de cambio, a una descripcion estructural, centrada en el estado dinamico.

Si otro estado tuviera la misma [[qi]] pero [[p]] = -6,0 kg m/s, su [[H]] seria el mismo en este modelo si [[V]] no cambia, pero el sentido de evolucion seria opuesto. Esa distincion es una de las razones por las que el espacio de fases es mas informativo que una descripcion solo posicional.

La interpretacion clave es que [[p]] no se añade como dato externo: nace de la pendiente de [[L]]. Por eso el resultado muestra continuidad fisica entre dos lenguajes. El lenguaje lagrangiano conserva la intuicion de velocidad y trayectoria; el lenguaje hamiltoniano conserva la informacion suficiente para reconstruir la evolucion desde un punto de fase. Si el alumno no comprueba esta equivalencia, puede creer que se ha inventado una energia nueva, cuando en realidad se ha cambiado la variable natural de descripcion.

# Ejemplo de aplicación real

## Contexto

En el analisis de un oscilador mecanico, como una masa unida a un muelle ideal, la transformacion de Legendre permite pasar de la ecuacion de movimiento a un retrato de fase. El profesor puede mostrar que cada punto del plano formado por [[qi]] y [[p]] representa un estado completo.

## Estimación física

Para una masa pequeña, un momento moderado corresponde a una velocidad relativamente grande. Para una masa grande, el mismo [[p]] implica una velocidad menor. Esta diferencia aparece de forma inmediata al usar la inversion entre [[p]] y [[qdi]]. El hamiltoniano separa energia cinetica, escrita con [[p]], y energia potencial [[V]], escrita con posicion.

Como estimacion numerica, si dos osciladores tienen el mismo momento conjugado pero uno duplica la masa efectiva del otro, la velocidad reconstruida del segundo se reduce a la mitad. Sin embargo, la energia cinetica asociada al mismo momento tambien se reduce, porque el momento queda repartido sobre mas inercia. Esta lectura permite anticipar si el retrato de fase sera mas ancho en momento o mas sensible en velocidad antes de resolver la ecuacion diferencial.

## Interpretación

La aplicacion real es didactica y tecnica a la vez. En lugar de integrar primero la trayectoria temporal, se puede estudiar la geometria del movimiento en espacio de fases. La transformacion de Legendre es el paso que hace posible esa representacion sin abandonar la informacion fisica contenida en el lagrangiano.

En un aula, este ejemplo ayuda a separar tres ideas que suelen mezclarse: calcular energia, cambiar variables y decidir si un modelo es regular. En un laboratorio, ayuda a interpretar datos de posicion y velocidad como estados de fase que pueden compararse mediante [[H]]. En ambos casos, la transformacion no es una decoracion matematica, sino una prueba de que el modelo conserva informacion al pasar de velocidades a momentos.
