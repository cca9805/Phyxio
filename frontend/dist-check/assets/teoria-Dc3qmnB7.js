const e=`# Campo magnético

## Contexto conceptual

El electromagnetismo unifica la electricidad y el magnetismo bajo una sola teoría. Así como el campo eléctrico describe la influencia de las cargas sobre el espacio, el **campo magnético** [[B]] describe la influencia de las corrientes y los magnetos sobre el espacio circundante. La pregunta central es: ¿qué magnitud cuantifica la capacidad de una corriente para desviar otras cargas en movimiento que pasen cerca?

Los fenómenos magnéticos son conocidos desde la antigüedad: los imanes naturales (magnetita) atraen el hierro y las brújulas apuntan al norte. Sin embargo, la conexión con la electricidad no se descubrió hasta 1820, cuando Ørsted observó que una corriente eléctrica desviaba una aguja de brújula cercana. Ese hallazgo fue el detonante de toda la teoría del electromagnetismo. Este leaf pertenece al bloque de fundamentos del electromagnetismo y es el complemento magnético del campo eléctrico.

La comprensión del campo magnético permite predecir el movimiento de partículas cargadas en plasmas, diseñar motores eléctricos y entender la física de la resonancia magnética nuclear.

## 🟢 Nivel esencial

El **campo magnético** [[B]] en un punto del espacio es una magnitud vectorial que describe la capacidad de ese punto para ejercer fuerza sobre una carga en movimiento. La diferencia fundamental con el campo eléctrico es que [[B]] **solo actúa sobre cargas en movimiento**: una carga en reposo no experimenta fuerza magnética alguna, aunque esté en una región donde [[B]] sea muy intenso.

La intuición más directa es imaginar un hilo conductor por el que circula una corriente [[I]]. Esa corriente modifica el espacio que la rodea, creando un campo [[B]] que apunta circularmente alrededor del hilo. Si se coloca una carga [[q]] en movimiento en ese espacio, experimenta una fuerza [[F_m]] perpendicular a su velocidad [[v]] y al campo [[B]]. Esa perpendicularidad tiene una consecuencia clave: **la fuerza magnética nunca realiza trabajo**, porque siempre es perpendicular al desplazamiento.

La magnitud [[B]] existe aunque no haya ninguna carga de prueba presente, igual que el campo eléctrico existe independientemente de si hay cargas que lo detecten. Es una propiedad del espacio creada por corrientes y magnetos. Una brújula detecta [[B]] porque sus átomos actúan como pequeños imanes que se alinean con el campo: es la forma más cotidiana de visualizar [[B]] sin ningún cálculo.

> [!NOTE]
> La dirección de [[B]] alrededor de un hilo conductor se determina con la **regla de la mano derecha**: si el pulgar de la mano derecha apunta en el sentido de la corriente [[I]], los dedos curvados indican el sentido en que circula [[B]].

## 🔵 Nivel formal

La **fuerza que ejerce [[B]] sobre una carga [[q]] en movimiento** con velocidad [[v]] a un ángulo θ respecto al campo es:

{{f:fuerza_lorentz_magnetica}}

Esta fórmula tiene tres implicaciones inmediatas: la fuerza es máxima cuando [[v]] es perpendicular a [[B]] (θ = 90°), es nula cuando [[v]] es paralela a [[B]] (θ = 0° o 180°), y es siempre perpendicular al plano formado por [[v]] y [[B]].

Para la fuente más común de campo magnético a nivel básico, el **hilo recto infinito** que conduce una corriente [[I]], el campo a distancia perpendicular [[r]] se calcula usando la permeabilidad del vacío [[mu_0]]:

{{f:campo_hilo_recto}}

La dirección del campo es circular alrededor del hilo. El módulo [[B]] decrece linealmente con la inversa de [[r]]: duplicar la distancia reduce el campo a la mitad. Esta dependencia 1/r es más suave que la dependencia 1/r² del campo eléctrico de carga puntual, consecuencia de la diferente geometría de la fuente.

El factor [[sin_theta]] en la fuerza de Lorentz merece atención especial: es el seno del ángulo entre [[v]] y [[B]], y determina qué fracción de la velocidad es efectiva para generar fuerza. Cuando [[v]] y [[B]] son perpendiculares, [[sin_theta]] vale 1 y la fuerza es máxima; cuando son paralelos, [[sin_theta]] vale 0 y la fuerza es nula. Este comportamiento angular no tiene equivalente en el campo eléctrico, que ejerce fuerza independientemente de la dirección del movimiento.

La constante [[mu_0]] juega en magnetismo el mismo papel que la constante de Coulomb en electrostática: fija la escala de los campos magnéticos generados por corrientes en el vacío. Su valor exacto de 4π×10⁻⁷ T·m·A⁻¹ está vinculado a la velocidad de la luz mediante la relación que une [[mu_0]] con la permitividad eléctrica del vacío.

## 🔴 Nivel estructural

La estructura más profunda del campo magnético emerge de las ecuaciones de Maxwell. El campo [[B]] tiene **divergencia nula**: no existen monopolos magnéticos, por lo que las líneas de campo magnético siempre son cerradas, sin principio ni fin. Esto contrasta radicalmente con el campo eléctrico, cuyas líneas nacen y terminan en cargas.

El campo magnético y el campo eléctrico no son magnitudes independientes: en relatividad especial, un campo puramente eléctrico en un sistema de referencia se convierte en una combinación de campo eléctrico y magnético en un sistema de referencia en movimiento relativo. Esta unificación es la esencia de la teoría electromagnética de Maxwell.

> [!WARNING]
> La dependencia 1/r del hilo recto se aplica a **conductores rectos muy largos** en el **vacío**. Para bobinas, toroides y distribuciones generales, la geometría cambia la forma del campo. Un solenoide largo produce un campo casi uniforme en su interior y prácticamente nulo en el exterior.

El **principio de superposición** se aplica también al campo magnético: el campo total generado por varias fuentes es la suma vectorial de los campos individuales. Esto permite calcular la interacción entre hilos paralelos: dos hilos con corrientes en el mismo sentido se atraen; en sentidos opuestos, se repelen.

Esta lectura estructural separa tres preguntas: qué fuente crea [[B]], qué geometría fija su dirección y qué partícula lo detecta mediante [[F_m]]. Mezclar esas capas produce errores de signo, dirección y dominio de validez.

La relación entre campo magnético y campo eléctrico es aún más profunda: el campo [[B]] variable crea un campo eléctrico (ley de Faraday), y el campo eléctrico variable crea un campo magnético (corriente de desplazamiento de Maxwell). Esta interdependencia es la base de la propagación de ondas electromagnéticas.

La validez del modelo clásico tiene límites: para partículas con velocidades cercanas a la de la luz, la fuerza de Lorentz debe combinarse con la dinámica relativista. En el interior de la materia, [[B]] se ve modificado por la permeabilidad relativa del material.

## Interpretación física profunda

La propiedad más contraintuitiva del campo magnético es que la fuerza [[F_m]] nunca realiza trabajo. Esto se debe a que siempre es perpendicular a [[v]], por lo que no cambia la energía cinética de la partícula. En consecuencia, el campo magnético puede cambiar la **dirección** del movimiento de una carga pero nunca su **rapidez**. Una partícula que entra en un campo [[B]] uniforme con velocidad perpendicular al campo describe una trayectoria **circular** de radio constante.

El **radio de curvatura** de esa trayectoria circular depende de la masa de la partícula, su carga y su velocidad. Esta dependencia es la base del espectrómetro de masas: partículas con distinta relación masa-carga se curvan diferente en el mismo campo [[B]] y se separan espacialmente.

> [!TIP]
> La diferencia clave entre campo eléctrico y magnético: el campo eléctrico puede acelerar o frenar cargas y actúa sobre cargas en reposo; [[B]] solo desvía cargas en movimiento y nunca cambia su energía. Para acelerar partículas se necesita un campo eléctrico; para enfocarlas y guiarlas se usa [[B]].

## Orden de magnitud

Las escalas típicas de [[B]] abarcan muchos órdenes de magnitud. El campo magnético terrestre en la superficie es de aproximadamente 5×10⁻⁵ T. Un imán de nevera tiene un campo de unos 10⁻² T en su superficie. Los electroimanes de laboratorio convencionales alcanzan 1–2 T. Los imanes superconductores de los aceleradores de partículas superan los 10 T.

Un resultado de [[B]] superior a 10 T en condiciones ordinarias de laboratorio es sospechoso. Un valor de [[B]] del orden de 10⁻⁷ T calculado para una corriente de 1 A a 10 cm es el correcto (campo terrestre dividido entre 5 aproximadamente); si el resultado difiere en varios órdenes, revisar las unidades o el factor 2π en el denominador.

## Método de resolución personalizado

Para calcular el campo de un hilo recto largo:

1. Identificar la corriente [[I]] y su sentido.
2. Medir la distancia perpendicular [[r]] al punto de evaluación.
3. Calcular el módulo de [[B]] introduciendo [[mu_0]], [[I]] y [[r]] en la fórmula del hilo recto.
4. Determinar la dirección con la regla de la mano derecha.
5. Si hay varias fuentes, calcular cada campo y sumar vectorialmente.

Para calcular la fuerza sobre una carga en movimiento:

1. Conocer [[B]] en el punto de interés.
2. Identificar la carga [[q]], la rapidez [[v]] y el ángulo θ entre [[v]] y [[B]].
3. Calcular el módulo de [[F_m]] con la fórmula de Lorentz.
4. Determinar la dirección con la regla de la mano derecha aplicada a [[q]](v × B).

## Casos especiales y ejemplo extendido

**Movimiento en campo uniforme perpendicular a la velocidad**: la partícula describe una circunferencia. El radio es directamente proporcional a la masa y la rapidez, e inversamente proporcional al módulo de la carga y al campo.

**Movimiento con velocidad no perpendicular a B**: la trayectoria es una **hélice**. La componente perpendicular a [[B]] da el movimiento circular; la componente paralela no es afectada por [[B]] y produce el avance lineal.

**Jaula de Faraday magnética**: no existe equivalente magnético exacto, porque no hay monopolos magnéticos. Sin embargo, ciertos materiales de alta permeabilidad relativa (permalloy) concentran las líneas de campo en su interior y desvían el campo del espacio circundante, funcionando como blindajes magnéticos.

## Preguntas reales del alumno

**¿Por qué la fuerza magnética no realiza trabajo?**

Porque [[F_m]] siempre es perpendicular a [[v]]. El trabajo es la componente de la fuerza en la dirección del desplazamiento; si son perpendiculares, el producto escalar es cero en todo instante.

**¿Cuál es la diferencia entre [[B]] y [[F_m]]?**

[[B]] es una propiedad del espacio creada por corrientes y magnetos; existe aunque no haya cargas en movimiento presentes. [[F_m]] es la fuerza real sobre una carga específica [[q]] que se mueve con velocidad [[v]] en ese campo.

**¿Por qué las líneas de [[B]] siempre son cerradas?**

Porque no existen monopolos magnéticos: no hay cargas magnéticas libres donde las líneas puedan empezar o terminar. Las líneas de [[B]] siempre forman lazos cerrados, saliendo del polo norte y entrando por el polo sur de cualquier imán.

## Conexiones transversales y rutas de estudio

El campo magnético conecta directamente con el [campo eléctrico](leaf:fisica-clasica/electromagnetismo/fundamentos/campo-electrico): juntos forman el campo electromagnético. El paso siguiente es la [fuerza entre conductores](leaf:fisica-clasica/electromagnetismo/fundamentos/fuerzas-electromagneticas) y la [ley de Faraday](leaf:fisica-clasica/electromagnetismo/magnetismo/induccion-electromagnetica), que describe cómo un campo [[B]] variable genera un campo eléctrico.

## Síntesis final

El campo magnético [[B]] describe la influencia magnética de corrientes y magnetos sobre el espacio, actuando solo sobre cargas en movimiento. Nunca realiza trabajo: solo desvía trayectorias. Su dependencia 1/r para el hilo recto lo distingue del campo eléctrico coulombiano. Dominar [[B]] es imprescindible para entender motores, generadores, resonancia magnética y la física de partículas.
`;export{e as default};
