const e=`# Ejemplo tipo examen

## Enunciado

Un cable rectilíneo muy largo conduce una corriente de 8 A. Calcular el campo magnético a 4 cm del cable, determinar la fuerza que experimentaría un protón que pasa por ese punto con rapidez de 2×10⁵ m/s perpendicular al campo, y analizar qué ocurre con el campo si la corriente se duplica y la distancia se duplica simultáneamente.

## Datos

- Corriente en el cable: 8 A
- Distancia al punto de evaluación: 4 cm
- Permeabilidad del vacío: 4π×10⁻⁷ T·m·A⁻¹
- Rapidez del protón: 2×10⁵ m/s (perpendicular a B)
- Carga del protón: 1.6×10⁻¹⁹ C

## Definición del sistema

El sistema consiste en un cable recto muy largo que conduce la corriente [[I]] y un punto de evaluación a distancia perpendicular [[r]] del cable. El campo [[B]] es circular alrededor del hilo. El protón, considerado como carga puntual [[q]], se mueve con velocidad [[v]] perpendicular al campo en el punto de evaluación. La electrostática no interviene porque el cable es eléctricamente neutro en conjunto.

## Modelo físico

Se aplica el modelo de hilo recto infinito: el campo [[B]] depende de [[mu_0]], [[I]] y [[r]] mediante la fórmula del hilo recto. La longitud del cable es mucho mayor que 4 cm, por lo que la aproximación de hilo infinito es válida. La fuerza [[F_m]] sobre el protón se calcula con la fuerza de Lorentz magnética.

## Justificación del modelo

La distancia de evaluación de 4 cm es mucho menor que cualquier longitud de cable doméstico o industrial (generalmente varios metros), por lo que el modelo de hilo infinito es adecuado. La velocidad del protón de 2×10⁵ m/s representa menos del 0.1% de la velocidad de la luz, muy por debajo del umbral relativista. El ángulo entre [[v]] y [[B]] es de 90°, lo que garantiza fuerza máxima.

## Resolución simbólica

El módulo del campo magnético a distancia [[r]] de un hilo que conduce [[I]] se obtiene aplicando:

{{f:campo_hilo_recto}}

Una vez calculado [[B]], la fuerza sobre el protón moviéndose perpendicular al campo (θ = 90°, sin θ = 1) se obtiene de:

{{f:fuerza_lorentz_magnetica}}

Para el análisis de sensibilidad: si [[I]] se duplica, [[B]] se duplica (proporcionalidad directa con [[I]]); si [[r]] se duplica, [[B]] se reduce a la mitad (dependencia 1/r). Ambos efectos simultáneos se compensan exactamente, dejando [[B]] igual.

## Sustitución numérica

Para el campo: el numerador es el producto de 4π×10⁻⁷ T·m·A⁻¹ por 8 A, que da 32π×10⁻⁷ T·m, es decir, aproximadamente 1.005×10⁻⁵ T·m. El denominador es 2π multiplicado por 0.04 m, que da 0.2513 m. Dividiendo, [[B]] resulta aproximadamente 4×10⁻⁵ T, es decir, 40 μT.

Para la fuerza sobre el protón: multiplicando el módulo de la carga 1.6×10⁻¹⁹ C por la rapidez 2×10⁵ m/s por el campo 4×10⁻⁵ T (con sin 90° = 1), [[F_m]] resulta 1.6×10⁻¹⁹ × 2×10⁵ × 4×10⁻⁵, es decir, 1.28×10⁻¹⁸ N.

Para el análisis de sensibilidad con [[I]] duplicada a 16 A y [[r]] duplicada a 8 cm: el numerador se duplica pero el denominador también se duplica, de modo que [[B]] permanece en 40 μT. El campo no cambia.

## Validación dimensional

- Campo: [[mu_0]] en T·m·A⁻¹ multiplicado por A y dividido por m da T. Correcto.
- Fuerza: C multiplicado por m/s multiplicado por T da C·m/s·kg/(A·s²) que simplifica a N. Correcto.
- Análisis de sensibilidad: ambos factores de escala se cancelan exactamente. Correcto.

## Interpretación física

El resultado de 40 μT es del mismo orden que el campo magnético terrestre, lo que indica que a 4 cm de un cable doméstico corriente de 8 A se genera un campo comparable al de la Tierra. Físicamente, esto significa que el campo magnético de las instalaciones eléctricas ordinarias no es despreciable a escala local; de hecho, los medidores de campo magnético detectan este tipo de valores cerca de los electrodomésticos.

La fuerza sobre el protón de 1.28×10⁻¹⁸ N es extraordinariamente pequeña en términos macroscópicos, pero a escala atómica es apreciable. La consecuencia más importante del análisis de sensibilidad es que doblar simultáneamente la corriente y la distancia deja el campo invariante: esto indica que el campo del hilo recto no se puede "apagar" simplemente alejándose si la corriente también aumenta. Un ingeniero de blindaje magnético debe tener en cuenta que reducir [[r]] a la mitad mientras se duplica [[I]] produce el mismo campo neto.

---

# Ejemplo de aplicación real

## Contexto

El ciclotrón, inventado por Ernest O. Lawrence en 1930, es el primer acelerador circular de partículas de la historia. Utiliza el campo magnético [[B]] para curvar la trayectoria de los iones en semicírculos y un campo eléctrico oscilante para acelerar los iones cada vez que cruzan el espacio entre los dos "D" metálicas. El campo magnético no acelera las partículas: solo las guía. La aceleración la realiza el campo eléctrico.

El principio de funcionamiento del ciclotrón depende de que el tiempo que tarda un ion en completar un semicírculo es independiente de su velocidad, una consecuencia directa de que el radio de curvatura es proporcional a la velocidad. Esta característica, llamada isocronia, es válida solo en el régimen no relativista.

## Estimación física

Considérese un ciclotrón que usa un campo magnético [[B]] de 1 T para acelerar protones. El radio de curvatura de la trayectoria de un protón a velocidad [[v]] en un campo [[B]] perpendicular es inversamente proporcional a [[B]] y a la carga [[q]], y directamente proporcional a la masa y a [[v]].

Para un protón con masa 1.67×10⁻²⁷ kg, carga 1.6×10⁻¹⁹ C, velocidad final de 10⁷ m/s y campo [[B]] de 1 T, el radio máximo de la trayectoria circular resulta de dividir el producto de masa por velocidad entre el producto de carga por campo: el numerador es 1.67×10⁻²⁷ por 10⁷, es decir, 1.67×10⁻²⁰ kg·m/s; el denominador es 1.6×10⁻¹⁹ por 1, es decir, 1.6×10⁻¹⁹ C·T. El radio resulta aproximadamente 0.104 m, es decir, unos 10 cm. Esto determina el tamaño mínimo de las "D" del ciclotrón para contener la trayectoria.

## Interpretación

Este resultado muestra que [[B]] es el parámetro de diseño central del ciclotrón: cuanto mayor es [[B]], menor es el radio de curvatura para la misma velocidad, lo que permite construir máquinas más compactas. Físicamente, el campo magnético actúa como una "guía" que confina las partículas dentro del volumen del acelerador sin aportar ni consumir energía cinética; toda la energía proviene del campo eléctrico oscilante.

La isocronia del ciclotrón, que implica que la frecuencia de la corriente alterna eléctrica no necesita variar durante la aceleración, es consecuencia directa de que [[F_m]] es siempre perpendicular a [[v]] y de que el tiempo de vuelta depende solo de la carga, la masa y [[B]], no de la velocidad. Cuando la velocidad del protón supera el 10% de la velocidad de la luz, la masa relativista aumenta, se rompe la isocronia y el ciclotrón convencional falla. Para velocidades relativistas se requiere el sincrociclotrón, donde la frecuencia del campo eléctrico se va ajustando a medida que la masa de las partículas aumenta.
`;export{e as default};
