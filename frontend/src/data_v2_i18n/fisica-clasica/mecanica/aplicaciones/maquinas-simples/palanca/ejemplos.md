# Ejemplo tipo examen

**El Balancín de Parque**

## Enunciado

Un adulto de 80 kg desea equilibrar a un niño de 20 kg en un balancín ideal de primera clase que tiene una longitud total de 4 metros. El fulcro se encuentra exactamente en el centro de la barra. El niño se sienta en el extremo derecho de la barra. Calcula a qué distancia exacta del fulcro debe situarse el adulto para que el sistema permanezca en equilibrio horizontal. Además, determina la ventaja mecánica ideal del sistema desde la perspectiva del adulto y analiza qué ocurriría si el adulto decidiera sentarse en el extremo opuesto al niño.

## Datos

- Masa del niño: 20 kg
- Resistencia [[R]]: 196.2 N (calculada como 20 por 9.81)
- Brazo de resistencia [[bR]]: 2 m (mitad de la barra de 4 m)
- Masa del adulto: 80 kg
- Potencia [[P]]: 784.8 N (calculada como 80 por 9.81)
- Gravedad: 9.81 m/s²

## Definición del sistema

El sistema consiste en una barra rígida apoyada en un fulcro central (palanca de primera clase). Las fuerzas de peso del adulto y el niño actúan verticalmente hacia abajo en extremos opuestos del apoyo. El sistema se considera en equilibrio estático rotacional cuando la suma de los momentos de fuerza respecto al fulcro es cero. En este caso, el niño genera un momento en sentido horario y el adulto debe generar un momento igual en sentido antihorario para estabilizar el balancín en la horizontal. La barra se considera perfectamente rígida para este análisis.

## Modelo físico

Se utiliza el **Modelo de Sólido Rígido para Palancas Ideales**. En este modelo, la barra se considera indeformable y sin masa propia, lo que simplifica el problema al no tener que considerar el momento generado por el peso de la madera o el metal del balancín. El fulcro se trata como un punto de apoyo sin fricción que solo ejerce una fuerza de reacción normal hacia arriba. La interacción física se rige por el equilibrio de torques, donde cada fuerza genera una tendencia de giro calculada como el producto de la fuerza por su brazo perpendicular:

{{f:ley_palanca}}

Donde la potencia [[P]] y la resistencia [[R]] son las fuerzas aplicadas, y [[bP]] y [[bR]] sus respectivos brazos de palanca medidos desde el fulcro. En equilibrio, el torque de potencia [[tauP]] compensa exactamente al torque de resistencia [[tauR]].

## Justificación del modelo

La aproximación es **válida porque** la flexión de la viga del balancín es despreciable frente a su longitud total y las masas no son lo suficientemente grandes como para comprometer la integridad estructural del material. **Se asume** que no hay rozamiento en el eje del fulcro, lo que permite ignorar pérdidas energéticas y aplicar directamente la ley de momentos. El modelo es físicamente explícito para predecir condiciones de equilibrio estático en máquinas simples de baja velocidad y es el estándar para el análisis de sistemas de balanza de primer género.

## Resolución simbólica

Para resolver este sistema, aplicamos el conjunto completo de leyes que rigen la palanca:

1. Momento de potencia y resistencia:
{{f:torque_potencia}}
{{f:torque_resistencia}}

2. Equilibrio de momentos:
{{f:ley_palanca}}

3. Ventaja mecánica geométrica y cinemática:
{{f:ventaja_mecanica_geometria}}
{{f:ventaja_mecanica_cinematica}}

4. Ventaja mecánica por fuerzas:
{{f:ventaja_mecanica_fuerzas}}

5. Conservación del trabajo:
{{f:conservacion_trabajo}}

6. Rendimiento y eficiencia:
{{f:rendimiento_palanca}}

Aislamos la incógnita principal, que es la posición del adulto o brazo de potencia [[bP]] mediante la transposición de términos de la ecuación anterior. El resultado teórico es que el brazo de potencia [[bP]] es proporcional al brazo [[bR]] e inversamente proporcional a la potencia [[P]]. Si el sistema se moviera, consideraríamos el desplazamiento de la potencia [[sP]] y el de la resistencia [[sR]] bajo la regla de oro del trabajo.

## Sustitución numérica

1. **Sustitución de valores:**
   Utilizamos la relación aislada para introducir los datos conocidos del problema.
   El brazo [[bP]] se estima como el cociente entre el producto (196.2 por 2) y el valor 784.8.
   El valor resultante para [[bP]] es de aproximadamente 0.5 metros.

2. **Cálculo de la Ventaja Mecánica:**
   La magnitud [[VM]] se obtiene dividiendo 0.5 entre 2, lo que resulta en un valor de 0.25.

## Validación dimensional

Verificamos que las unidades en la ecuación de equilibrio sean consistentes. En el lado izquierdo tenemos Newtons (N) multiplicados por metros (m), lo que da unidades de Torque (N metros). En el lado derecho, la resistencia [[R]] en N multiplicada por el brazo [[bR]] en m también resulta en N metros. Dado que ambas magnitudes tienen la misma dimensión L^2MT^-2, la igualdad es físicamente coherente y el resultado para el brazo [[bP]] en metros es correcto.

## Interpretación física

El adulto debe sentarse a tan solo **0.5 metros** (50 cm) del fulcro para equilibrar al niño que está a 2 metros. Esto **significa que** al ser el adulto cuatro veces más pesado que el niño, su brazo de palanca [[bP]] debe ser cuatro veces más corto para que los momentos se igualen.

La ventaja mecánica [[VM]] de **0.25** **indica que** el adulto "pierde" fuerza pero gana en estabilidad y control del movimiento. Si el adulto se sentara en el extremo opuesto (2 m), el balancín caería bruscamente hacia su lado, ya que generaría un momento [[tauP]] de 1569.6 N metros, cuatro veces superior al del niño [[tauR]].

# Ejemplo de aplicación real

**El Cascanueces de Palanca**

## Contexto

El cascanueces es una herramienta doméstica que utiliza el principio de la palanca de segunda clase para multiplicar la fuerza de la mano humana y romper la cáscara de un fruto seco. En este diseño, el fulcro (bisagra) está en un extremo, la nuez se coloca en el medio (resistencia [[R]]), y la mano aplica la fuerza en el otro extremo (potencia [[P]]).

## Estimación física

Estimamos un **orden de magnitud** para un cascanueces donde la mano aplica una fuerza de 50 N a una distancia de 15 cm (0.15 m) de la bisagra, definiendo así el brazo de potencia [[bP]]. La nuez se coloca a solo 3 cm (0.03 m) de la bisagra, lo que representa el brazo de resistencia [[bR]].

La ventaja mecánica ideal del sistema es de 5 unidades.
Esto implica que la fuerza aplicada sobre la nuez es cinco veces mayor que la fuerza de la mano, alcanzando un valor de 250 N para la resistencia [[R]].

En un escenario real, debemos considerar el rendimiento [[eta]]. Si asumimos una eficiencia del 90% ([[eta]] es aproximadamente 0.9) debido al ligero rozamiento de la bisagra y la deformación plástica inicial de la cáscara, la ventaja mecánica real [[VMreal]] sobre la nuez sería de 4.5.

## Interpretación

La palanca de segunda clase es extremadamente eficiente para tareas que requieren grandes presiones en espacios reducidos. Al duplicar la longitud de los mangos del cascanueces, duplicaríamos la ventaja mecánica [[VM]] a un valor de 10, permitiendo romper cáscaras mucho más duras con el mismo esfuerzo manual. Para una palanca de tercer género, la potencia se aplica entre el fulcro y la resistencia. Por ejemplo, en unas pinzas, si queremos vencer una resistencia de 98.1 N con una ventaja mecánica de 0.143, la potencia necesaria sería de 686 N. Este ejemplo ilustra cómo el diseño de herramientas cotidianas utiliza la ley de la palanca para ampliar las capacidades biológicas del ser humano, transformando un pequeño desplazamiento de la mano [[sP]] en una gran fuerza compresiva localizada.
