# Ejemplo tipo examen


## Enunciado

Un cable rectilíneo muy largo conduce una corriente de 8 A. Calcular el campo magnético a 4 cm del cable, determinar la fuerza que experimentaría un protón que pasa por ese punto con rapidez de 2×10⁵ m/s perpendicular al campo, y analizar qué ocurre con el campo si la corriente se duplica y la distancia se duplica simultáneamente.

## Datos

- Corriente en el cable: 8 A
- Distancia al punto de evaluación: 4 cm
- Permeabilidad del vacío: 4π×10⁻⁷ T·m·A⁻¹
- Rapidez del protón: 2×10⁵ m/s (perpendicular a B)
- Carga del protón: 1.6×10⁻¹⁹ C

## Definición del sistema

El sistema consiste en un cable recto muy largo que conduce la corriente [[intensidad_de_corriente]] y un punto de evaluación a distancia perpendicular [[distancia_al_hilo_conductor]] del cable. El campo [[campo_magnetico]] es circular alrededor del hilo. El protón, considerado como carga puntual [[carga_electrica]], se mueve con velocidad [[velocidad_de_la_carga]] perpendicular al campo en el punto de evaluación. La electrostática no interviene porque el cable es eléctricamente neutro en conjunto.

## Modelo físico

Se aplica el modelo de hilo recto infinito: el campo [[campo_magnetico]] depende de [[mu_0]], [[intensidad_de_corriente]] y [[distancia_al_hilo_conductor]] mediante la fórmula del hilo recto. La longitud del cable es mucho mayor que 4 cm, por lo que la aproximación de hilo infinito es válida. La fuerza [[fuerza_magnetica]] sobre el protón se calcula con la fuerza de Lorentz magnética.

## Justificación del modelo

La distancia de evaluación de 4 cm es mucho menor que cualquier longitud de cable doméstico o industrial (generalmente varios metros), por lo que el modelo de hilo infinito es adecuado. La velocidad del protón de 2×10⁵ m/s representa menos del 0.1% de la velocidad de la luz, muy por debajo del umbral relativista. El ángulo entre [[velocidad_de_la_carga]] y [[campo_magnetico]] es de 90°, lo que garantiza fuerza máxima.

## Resolución simbólica

El módulo del campo magnético a distancia [[distancia_al_hilo_conductor]] de un hilo que conduce [[intensidad_de_corriente]] se obtiene aplicando:

{{f:campo_hilo_recto}}

Una vez calculado [[campo_magnetico]], la fuerza sobre el protón moviéndose perpendicular al campo (θ = 90°, sin θ = 1) se obtiene de:

{{f:fuerza_lorentz_magnetica}}

Para el análisis de sensibilidad: si [[intensidad_de_corriente]] se duplica, [[campo_magnetico]] se duplica (proporcionalidad directa con [[intensidad_de_corriente]]); si [[distancia_al_hilo_conductor]] se duplica, [[campo_magnetico]] se reduce a la mitad (dependencia 1/r). Ambos efectos simultáneos se compensan exactamente, dejando [[campo_magnetico]] igual.

## Sustitución numérica

Para el campo: el numerador es el producto de 4π×10⁻⁷ T·m·A⁻¹ por 8 A, que da 32π×10⁻⁷ T·m, es decir, aproximadamente 1.005×10⁻⁵ T·m. El denominador es 2π multiplicado por 0.04 m, que da 0.2513 m. Dividiendo, [[campo_magnetico]] resulta aproximadamente 4×10⁻⁵ T, es decir, 40 μT.

Para la fuerza sobre el protón: multiplicando el módulo de la carga 1.6×10⁻¹⁹ C por la rapidez 2×10⁵ m/s por el campo 4×10⁻⁵ T (con sin 90° = 1), [[fuerza_magnetica]] resulta 1.6×10⁻¹⁹ × 2×10⁵ × 4×10⁻⁵, es decir, 1.28×10⁻¹⁸ N.

Para el análisis de sensibilidad con [[intensidad_de_corriente]] duplicada a 16 A y [[distancia_al_hilo_conductor]] duplicada a 8 cm: el numerador se duplica pero el denominador también se duplica, de modo que [[campo_magnetico]] permanece en 40 μT. El campo no cambia.

## Validación dimensional

- Campo: [[mu_0]] en T·m·A⁻¹ multiplicado por A y dividido por m da T. Correcto.
- Fuerza: C multiplicado por m/s multiplicado por T da C·m/s·kg/(A·s²) que simplifica a N. Correcto.
- Análisis de sensibilidad: ambos factores de escala se cancelan exactamente. Correcto.

## Interpretación física

El resultado de 40 μT es del mismo orden que el campo magnético terrestre, lo que indica que a 4 cm de un cable doméstico corriente de 8 A se genera un campo comparable al de la Tierra. Físicamente, esto significa que el campo magnético de las instalaciones eléctricas ordinarias no es despreciable a escala local; de hecho, los medidores de campo magnético detectan este tipo de valores cerca de los electrodomésticos.

La fuerza sobre el protón de 1.28×10⁻¹⁸ N es extraordinariamente pequeña en términos macroscópicos, pero a escala atómica es apreciable. La consecuencia más importante del análisis de sensibilidad es que doblar simultáneamente la corriente y la distancia deja el campo invariante: esto indica que el campo del hilo recto no se puede "apagar" simplemente alejándose si la corriente también aumenta. Un ingeniero de blindaje magnético debe tener en cuenta que reducir [[distancia_al_hilo_conductor]] a la mitad mientras se duplica [[intensidad_de_corriente]] produce el mismo campo neto.

---

# Ejemplo de aplicación real


## Contexto

El ciclotrón, inventado por Ernest O. Lawrence en 1930, es el primer acelerador circular de partículas de la historia. Utiliza el campo magnético [[campo_magnetico]] para curvar la trayectoria de los iones en semicírculos y un campo eléctrico oscilante para acelerar los iones cada vez que cruzan el espacio entre los dos "D" metálicas. El campo magnético no acelera las partículas: solo las guía. La aceleración la realiza el campo eléctrico.

El principio de funcionamiento del ciclotrón depende de que el tiempo que tarda un ion en completar un semicírculo es independiente de su velocidad, una consecuencia directa de que el radio de curvatura es proporcional a la velocidad. Esta característica, llamada isocronia, es válida solo en el régimen no relativista.

## Estimación física

Considérese un ciclotrón que usa un campo magnético [[campo_magnetico]] de 1 T para acelerar protones. El radio de curvatura de la trayectoria de un protón a velocidad [[velocidad_de_la_carga]] en un campo [[campo_magnetico]] perpendicular es inversamente proporcional a [[campo_magnetico]] y a la carga [[carga_electrica]], y directamente proporcional a la masa y a [[velocidad_de_la_carga]].

Para un protón con masa 1.67×10⁻²⁷ kg, carga 1.6×10⁻¹⁹ C, velocidad final de 10⁷ m/s y campo [[campo_magnetico]] de 1 T, el radio máximo de la trayectoria circular resulta de dividir el producto de masa por velocidad entre el producto de carga por campo: el numerador es 1.67×10⁻²⁷ por 10⁷, es decir, 1.67×10⁻²⁰ kg·m/s; el denominador es 1.6×10⁻¹⁹ por 1, es decir, 1.6×10⁻¹⁹ C·T. El radio resulta aproximadamente 0.104 m, es decir, unos 10 cm. Esto determina el tamaño mínimo de las "D" del ciclotrón para contener la trayectoria.

## Interpretación

Este resultado muestra que [[campo_magnetico]] es el parámetro de diseño central del ciclotrón: cuanto mayor es [[campo_magnetico]], menor es el radio de curvatura para la misma velocidad, lo que permite construir máquinas más compactas. Físicamente, el campo magnético actúa como una "guía" que confina las partículas dentro del volumen del acelerador sin aportar ni consumir energía cinética; toda la energía proviene del campo eléctrico oscilante.

La isocronia del ciclotrón, que implica que la frecuencia de la corriente alterna eléctrica no necesita variar durante la aceleración, es consecuencia directa de que [[fuerza_magnetica]] es siempre perpendicular a [[velocidad_de_la_carga]] y de que el tiempo de vuelta depende solo de la carga, la masa y [[campo_magnetico]], no de la velocidad. Cuando la velocidad del protón supera el 10% de la velocidad de la luz, la masa relativista aumenta, se rompe la isocronia y el ciclotrón convencional falla. Para velocidades relativistas se requiere el sincrociclotrón, donde la frecuencia del campo eléctrico se va ajustando a medida que la masa de las partículas aumenta.