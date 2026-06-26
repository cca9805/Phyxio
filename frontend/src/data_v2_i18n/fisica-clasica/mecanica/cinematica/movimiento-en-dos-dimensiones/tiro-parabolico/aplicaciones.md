## 1. Optimización del ángulo de lanzamiento de jabalina

Un atleta lanza una jabalina con rapidez inicial fija [[v0]] = 28,0 m/s desde una altura próxima al suelo. Si se ignora el arrastre y el lanzamiento termina al mismo nivel, el alcance [[R]] depende de cómo se reparte la rapidez entre avance horizontal y subida vertical:

{{f:tp_alcance_suelo}}

El valor ideal máximo aparece cuando [[theta]] = 45°, porque esa elección equilibra tiempo de vuelo y avance horizontal. Con [[g]] = 9,8 m/s², el alcance ideal sería de unos 80 m. Para [[theta]] = 35°, el alcance ideal baja ligeramente, pero en una jabalina real ese ángulo menor suele ser más útil porque el proyectil debe conservar orientación aerodinámica y sufre resistencia del aire.

Variable dominante: [[R]]. El alcance horizontal es el parámetro de rendimiento, [[theta]] es la variable de control y [[v0]] se mantiene fijo para comparar lanzamientos.

Límite de validez: esta lectura sirve como referencia teórica, no como predicción exacta de competición. En condiciones reales el arrastre y la sustentación de la jabalina modifican la trayectoria y desplazan el ángulo óptimo por debajo de 45°.

## 2. Estimación de la velocidad inicial a partir de un alcance medido

En un banco de pruebas, una bola de acero se lanza horizontalmente desde [[y0]] = 1,20 m sobre el suelo y aterriza a 0,85 m del punto de lanzamiento. Como el lanzamiento es horizontal, [[vy0]] = 0 y la caída determina el tiempo. La ecuación vertical se usa fijando la altura de impacto:

{{f:tp_posicion_y}}

Una vez obtenido el tiempo de caída, la ecuación horizontal permite despejar [[vx0]]:

{{f:tp_posicion_x}}

Con esos datos, el tiempo de caída es aproximadamente 0,49 s y la velocidad horizontal inicial sale cerca de 1,7 m/s. Como [[theta]] es casi cero, la rapidez inicial coincide prácticamente con [[vx0]].

Variable dominante: [[vx0]]. Es la magnitud que se deduce a partir de una distancia horizontal medida y un tiempo calculado por la caída.

Límite de validez: funciona bien para una bola densa y velocidades pequeñas, donde el arrastre es mucho menor que el peso. Si el proyectil fuera una pelota ligera, la resistencia del aire cambiaría el alcance y el método subestimaría o sobreestimaría la rapidez real.

## 3. Análisis de seguridad en una fuente ornamental

Una fuente lanza agua con [[v0]] = 4,0 m/s y [[theta]] = 60° desde una boquilla al nivel del suelo. Para decidir dónde puede pasar una persona sin mojarse, se estiman primero las componentes iniciales:

{{f:tp_componentes_vx0}}

{{f:tp_componentes_vy0}}

Después se calcula el tiempo de vuelo al mismo nivel y el alcance:

{{f:tp_tiempo_vuelo_mismo_nivel}}

{{f:tp_alcance_suelo}}

El resultado ideal es un alcance de aproximadamente 1,4 m. Una zona de exclusión razonable sería algo mayor, por ejemplo 1,5 m, porque el viento, la fragmentación del chorro y las gotas laterales no aparecen en el modelo ideal.

Variable dominante: [[vy0]]. La componente vertical controla cuánto tiempo permanece el agua en el aire; durante ese tiempo, [[vx0]] fija cuánto avanza el chorro.

Límite de validez: el cálculo es útil para chorros compactos y velocidades bajas. Con viento cruzado, gotas dispersas o boquillas turbulentas, la frontera real de mojado debe medirse o simularse con un modelo de fluidos.

## 4. Medida indirecta de [[g]] mediante una trayectoria filmada

Un laboratorio graba una pelota con cámara de alta velocidad. La pelota se lanza casi horizontalmente con [[vx0]] = 3,00 m/s y se miden posiciones [[x]] e [[y]] respecto al punto de salida. La ecuación horizontal transforma cada posición horizontal en un tiempo:

{{f:tp_posicion_x}}

Como [[vy0]] es aproximadamente cero, la caída vertical se relaciona con [[g]] a través de la ecuación vertical:

{{f:tp_posicion_y}}

Si para [[x]] = 0,60 m se mide [[y]] = -0,196 m, el tiempo estimado es 0,20 s y el valor obtenido para [[g]] queda cercano a 9,8 m/s². El método no necesita cronómetro directo porque el tiempo se reconstruye a partir del avance horizontal.

Variable dominante: [[g]]. La intensidad del campo gravitatorio es la incógnita; [[vx0]], [[x]] e [[y]] se miden o se fijan experimentalmente.

Límite de validez: requiere que [[vx0]] sea casi constante, que la cámara esté calibrada y que el rozamiento sea despreciable. Un pequeño error en [[x]] afecta al tiempo estimado y se amplifica al despejar [[g]].

## 5. Predicción del punto de impacto desde un edificio

Una pelota se lanza desde una ventana a [[y0]] = 15,0 m con [[v0]] = 8,0 m/s y [[theta]] = 20° sobre la horizontal. A diferencia del caso de suelo, el lanzamiento y el impacto no están al mismo nivel, así que no debe usarse el tiempo simétrico. Primero se calculan las componentes iniciales:

{{f:tp_componentes_vx0}}

{{f:tp_componentes_vy0}}

Después se impone que la altura final sea el suelo, [[y]] = 0, y se resuelve la ecuación vertical para obtener el tiempo de impacto:

{{f:tp_tiempo_impacto_general}}

Con ese tiempo, la posición horizontal se obtiene con:

{{f:tp_posicion_x}}

El tiempo de vuelo resulta mayor que en un lanzamiento al mismo nivel porque la pelota debe descender los 15,0 m adicionales. El impacto queda a varias decenas de metros de la base si se desprecia el aire.

Variable dominante: [[t_impacto]]. En este problema, el tiempo no lo fija la simetría sino la condición vertical de llegar al suelo.

Límite de validez: es adecuado para una pelota densa y una altura de edificio moderada. Para alturas grandes, viento fuerte o proyectiles ligeros, el arrastre cambia [[vx]] y también modifica el tiempo de caída.
