# Ejemplo tipo examen

## Enunciado

Una pelota se lanza desde el suelo con rapidez inicial [[v0]] = 20,0 m/s y ángulo [[theta]] = 30° sobre la horizontal. Tomamos [[g]] = 9,8 m/s², [[x0]] = 0 m y [[y0]] = 0 m. Calcula las componentes iniciales, el ápice, el tiempo total de vuelo, el alcance, y el estado de la pelota cuando [[t]] = 1,00 s.

## Datos

| Magnitud | Valor |
|---|---:|
| [[v0]] | 20,0 m/s |
| [[theta]] | 30° |
| [[g]] | 9,8 m/s² |
| [[x0]] | 0 m |
| [[y0]] | 0 m |
| [[t]] para el estado intermedio | 1,00 s |

El eje [[x]] es positivo hacia delante y el eje [[y]] es positivo hacia arriba. El lanzamiento y el impacto ocurren al mismo nivel, así que en este ejemplo sí se pueden usar las relaciones simétricas de tiempo total y alcance de suelo.

## Definición del sistema

El sistema es la pelota durante el vuelo, tratada como proyectil puntual. La fuerza de lanzamiento solo actúa antes de soltarla; después, dentro del modelo ideal, la única aceleración es la gravedad. Esta decisión separa el movimiento en un eje horizontal uniforme y un eje vertical acelerado.

## Modelo físico

La rapidez inicial [[v0]] no se usa directamente en cada eje. Primero se reparte en una componente horizontal [[vx0]] y una componente vertical [[vy0]]:

{{f:tp_componentes_vx0}}

{{f:tp_componentes_vy0}}

Con esas componentes, la posición se describe mediante una ecuación horizontal de avance uniforme y una ecuación vertical afectada por la gravedad:

{{f:tp_posicion_x}}

{{f:tp_posicion_y}}

La velocidad horizontal se conserva, mientras la velocidad vertical disminuye linealmente con el tiempo:

{{f:tp_velocidad_horizontal}}

{{f:tp_velocidad_y}}

## Justificación del modelo

El modelo es válido porque se trata de un lanzamiento de escala deportiva o de laboratorio, donde la resistencia del aire puede despreciarse en una primera aproximación. También se considera que [[g]] es uniforme y que el suelo es plano durante todo el recorrido. Estas hipótesis permiten usar ejes fijos y una única variable temporal [[t]] compartida por los dos movimientos.

La condición más importante del ejemplo es que [[y0]] y la altura de impacto coinciden. Por eso la subida y la bajada son simétricas: el tiempo de bajada desde el ápice hasta el suelo es igual al tiempo de subida. Si la pelota saliera desde una ventana o aterrizara en una plataforma elevada, esta justificación cambiaría y habría que calcular el impacto con la ecuación vertical general.

## Resolución simbólica

En el ápice la componente vertical de la velocidad se anula. Por tanto, el tiempo hasta el punto más alto es:

{{f:tp_tiempo_apice}}

La altura ganada sobre el punto de lanzamiento se calcula con:

{{f:tp_altura_maxima}}

Como el lanzamiento parte de [[y0]] = 0 m, la altura máxima absoluta coincide con la altura ganada:

{{f:tp_altura_maxima_absoluta}}

Al volver al mismo nivel, el tiempo total de vuelo es:

{{f:tp_tiempo_vuelo_mismo_nivel}}

El alcance horizontal de suelo es:

{{f:tp_alcance_suelo}}

Para hallar la rapidez en un instante, se combinan las componentes de velocidad:

{{f:tp_velocidad_total}}

La trayectoria espacial, útil para relacionar [[x]] e [[y]] sin hablar del tiempo explícitamente, es:

{{f:tiro_parabolico_trayectoria}}

## Sustitución numérica

**Componentes iniciales.** Con [[theta]] = 30°, resulta [[vx0]] = 20,0 · cos 30° = 17,3 m/s y [[vy0]] = 20,0 · sin 30° = 10,0 m/s. La componente horizontal es mayor, así que el lanzamiento avanza mucho más de lo que sube.

**Ápice.** El tiempo hasta el ápice es [[t_ap]] = 10,0 / 9,8 = 1,02 s. La altura ganada es [[h_max]] = 10,0² / (2 · 9,8) = 5,10 m. Como [[y0]] vale cero, [[y_max]] = 5,10 m.

**Vuelo completo y alcance.** La pelota tarda [[T]] = 2 · 10,0 / 9,8 = 2,04 s en volver al suelo. Durante ese tiempo conserva [[vx]] = 17,3 m/s, de modo que [[R]] = 17,3 · 2,04 = 35,3 m.

**Estado a 1,00 s.** La posición horizontal es [[x]] = 17,3 · 1,00 = 17,3 m. La posición vertical es [[y]] = 10,0 · 1,00 - 0,5 · 9,8 · 1,00² = 5,10 m. La velocidad vertical es [[vy]] = 10,0 - 9,8 · 1,00 = 0,20 m/s, un valor pequeño y positivo. La pelota aún sube, pero está prácticamente en el ápice.

**Rapidez instantánea.** Con [[vx]] = 17,3 m/s y [[vy]] = 0,20 m/s, la rapidez vale [[v]] ≈ 17,3 m/s. Este resultado no significa que la pelota se haya parado en lo alto: solo se ha anulado casi toda la componente vertical.

## Validación dimensional

Las componentes de velocidad se expresan en m/s; las posiciones, alturas y alcances en m; y los tiempos en s. En el alcance, una velocidad horizontal multiplicada por un tiempo produce una longitud. En la rapidez total, se suman cuadrados de velocidades y después se toma raíz, por lo que la unidad final vuelve a ser m/s.

## Interpretación física

El alcance de 35,3 m sale de dos hechos distintos: la pelota permanece 2,04 s en el aire y durante todo ese intervalo avanza horizontalmente a 17,3 m/s. La gravedad no reduce el avance horizontal en el modelo ideal; reduce la componente vertical, primero hasta el ápice y luego durante la caída.

La lectura del instante [[t]] = 1,00 s confirma la coherencia del cálculo. El tiempo está muy cerca de [[t_ap]] = 1,02 s, la altura ya es casi máxima y [[vy]] es casi cero. Si el signo de [[vy]] hubiera salido negativo en ese instante, sería una señal de error numérico o de que el instante elegido estaba después del ápice.

Físicamente, el ejemplo muestra que el punto más alto no es un punto de reposo. La pelota conserva una velocidad horizontal grande aunque la parte vertical casi haya desaparecido. Esta lectura evita interpretar el ápice como una parada completa y ayuda a distinguir entre velocidad total, componente horizontal y componente vertical.

También muestra por qué el alcance no depende solo de lanzar "más fuerte". Un mismo [[v0]] puede repartirse de muchas formas entre [[vx0]] y [[vy0]]. Si se dedica demasiada rapidez a subir, aumenta el tiempo de vuelo pero disminuye el avance por segundo; si se dedica muy poca, la pelota avanza rápido pero cae pronto.

Si el lanzamiento no terminara al mismo nivel, no se debería usar [[T]] ni el alcance de suelo. En ese caso habría que fijar [[y_impacto]] y calcular el tiempo de impacto:

{{f:tp_tiempo_impacto_general}}

# Ejemplo de aplicación real

## Contexto

Un saltador de longitud despega con [[v0]] = 9,5 m/s y [[theta]] = 22° desde una tabla situada aproximadamente al mismo nivel que la arena. Queremos estimar el alcance [[R]] y comprobar si el resultado pertenece a la escala de un salto real.

## Estimación física

Las componentes son aproximadamente [[vx0]] = 8,8 m/s y [[vy0]] = 3,6 m/s. El tiempo de vuelo al mismo nivel es [[T]] ≈ 0,73 s, y el alcance ideal sale [[R]] ≈ 6,4 m. El valor está por debajo de marcas de élite, pero pertenece a la escala correcta: metros, no centímetros ni decenas de metros.

## Interpretación

Los atletas saltan con ángulos menores que 45° porque [[v0]] y [[theta]] no se pueden elegir de forma independiente. Al aumentar demasiado el ángulo se gana tiempo de vuelo, pero se pierde mucha velocidad horizontal. El modelo ideal no incluye técnica corporal, batida, posición de las piernas ni rozamiento, aunque sí muestra la tensión física principal entre conservar [[vx0]] y ganar tiempo en el aire mediante [[vy0]].
