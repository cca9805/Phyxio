# Ejemplo tipo examen

## Enunciado

Una pelota sale horizontalmente desde el borde de una mesa de laboratorio de [[y0]] = 1,25 m de altura con velocidad inicial [[v0]] = 3,20 m/s. Tomamos [[g]] = 9,8 m/s² y [[x0]] = 0 m. Calcula el tiempo de caída, el alcance horizontal, la velocidad vertical justo antes del impacto, la rapidez de impacto y la ecuación de la trayectoria.

## Datos

| Magnitud | Valor |
|---|---:|
| [[y0]] | 1,25 m |
| [[v0]] | 3,20 m/s |
| [[g]] | 9,8 m/s² |
| [[x0]] | 0 m |
| Nivel de impacto | [[y]] = 0 m |

Tomamos el eje horizontal positivo hacia delante y el eje vertical positivo hacia arriba. La pelota sale sin velocidad vertical inicial, de modo que el movimiento vertical empieza como caída libre desde la altura de la mesa.

## Definición del sistema

El sistema es la pelota desde que abandona la mesa hasta que toca el suelo. No se estudia el empuje previo de la mano ni el rozamiento con la mesa, porque ya no actúan durante la fase de vuelo. En esa fase ideal, la gravedad es la única aceleración relevante.

## Modelo físico

La posición horizontal avanza de forma uniforme:

{{f:th_posicion_x}}

La posición vertical cambia por la caída bajo gravedad:

{{f:th_posicion_y}}

La componente horizontal de la velocidad se conserva:

{{f:th_velocidad_horizontal}}

La componente vertical aparece durante la caída:

{{f:th_velocidad_vertical}}

## Justificación del modelo

El modelo es válido porque la altura y la velocidad son moderadas, y una pelota compacta de laboratorio suele sufrir un rozamiento pequeño frente al peso durante un recorrido tan corto. También se considera que [[g]] es constante y que el suelo está suficientemente cerca como para tratar los ejes como fijos.

La hipótesis decisiva es que la velocidad inicial es puramente horizontal. Si la pelota saliera con una inclinación apreciable hacia arriba o hacia abajo, el tiempo de caída ya no estaría determinado solo por [[y0]] y [[g]]. Entonces el problema pertenecería al tiro parabólico oblicuo, no al tiro horizontal.

## Resolución simbólica

El tiempo de caída se obtiene imponiendo que el impacto ocurra en [[y]] = 0:

{{f:th_tiempo_caida}}

Con ese mismo tiempo, el alcance horizontal es:

{{f:th_posicion_x}}

{{f:th_alcance}}

La rapidez total en el impacto combina la componente horizontal conservada y la vertical generada por la gravedad:

{{f:th_velocidad_total}}

La forma de la trayectoria se obtiene eliminando el tiempo entre las posiciones horizontal y vertical:

{{f:th_trayectoria}}

## Sustitución numérica

**Tiempo de caída.** Con [[y0]] = 1,25 m, resulta [[t_caida]] = sqrt(2 · 1,25 / 9,8) = 0,505 s. Este tiempo no usa [[v0]], porque la caída vertical no depende de la rapidez horizontal.

**Alcance.** Durante esos 0,505 s, la pelota avanza horizontalmente a 3,20 m/s. Por tanto, [[R]] = 3,20 · 0,505 = 1,62 m. La pelota aterriza algo más de metro y medio delante del borde.

**Velocidad vertical.** Justo antes del impacto, [[vy]] = -9,8 · 0,505 = -4,95 m/s. El signo negativo indica movimiento hacia abajo con la convención elegida.

**Rapidez de impacto.** La componente horizontal sigue siendo [[vx]] = 3,20 m/s. La rapidez total vale [[v]] = sqrt(3,20² + 4,95²) = 5,89 m/s. Es mayor que la rapidez inicial porque ahora se suma la componente vertical adquirida durante la caída.

**Trayectoria.** Con [[x0]] = 0 m, la curva queda como una parábola que empieza en [[y0]] = 1,25 m y desciende hasta el suelo. El término cuadrático muestra que la caída vertical aumenta cada vez más rápido conforme avanza el tiempo.

## Validación dimensional

El tiempo de caída se expresa en segundos porque aparece la raíz de una longitud dividida por una aceleración. El alcance está en metros porque se obtiene multiplicando velocidad por tiempo. Las componentes de velocidad y la rapidez final están en m/s. El signo de [[vy]] también es coherente: al llegar al suelo, la pelota debe estar descendiendo.

## Interpretación física

El resultado central no es solo que [[R]] sea 1,62 m, sino por qué. La altura de la mesa fija un intervalo de vuelo de 0,505 s. La pelota no puede elegir caer más despacio por avanzar más rápido; simplemente tiene ese tiempo disponible para recorrer distancia horizontal.

Si la pelota saliera con el doble de [[v0]], el tiempo de caída seguiría siendo 0,505 s, pero el alcance se duplicaría. Si la mesa fuera más alta, el tiempo aumentaría y el alcance también, aunque no de forma lineal con la altura. Esta lectura separa correctamente los papeles de [[y0]], [[v0]] y [[g]].

# Ejemplo de aplicación real

## Contexto

En una línea de envasado, una caja sale horizontalmente desde el extremo de una cinta y debe caer dentro de un contenedor situado delante. El técnico conoce la altura de la cinta y puede ajustar la velocidad de salida.

## Estimación física

Si la cinta está a [[y0]] = 0,80 m, el tiempo de caída es aproximadamente 0,40 s. Con una velocidad horizontal de 2,0 m/s, el alcance esperado es de unos 0,80 m. Esa estimación basta para colocar el contenedor cerca de la posición correcta antes de hacer pruebas finas.

## Interpretación

El alcance resume la coordinación entre caída y avance. Si el técnico aumenta la velocidad de la cinta, cambia el avance horizontal sin cambiar casi el tiempo de caída. Si cambia la altura de la cinta, cambia el tiempo disponible para avanzar. El modelo permite decidir qué ajuste conviene tocar primero.
