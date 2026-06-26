const e=`# Ecuación de Navier-Stokes Intro — Historia y contexto\r
\r
## Problema histórico\r
A principios del siglo XIX, la ingeniería hidráulica se encontraba en una paradoja técnica. Por un lado, se estaban construyendo los grandes canales de riego y redes de agua de la Revolución Industrial; por otro, los ingenieros no tenían una base física sólida para predecir cuánta presión se perdería en una tubería de una longitud determinada.\r
\r
La mecánica de partículas de Newton era bien conocida, pero aplicarla a un fluido —una sustancia que se deforma continuamente— era un desafío monumental. En el laboratorio, investigadores como Gotthilf Hagen (1839) y Jean Léonard Marie Poiseuille (1840) observaron experimentalmente que, en tubos muy finos, el caudal de agua no dependía linealmente del radio, sino de su cuarta potencia (Q propto R^4). Este resultado era fascinante y desconcertante: no había ninguna ley física conocida que explicara por qué el diámetro del tubo era tan determinante en la resistencia al movimiento. El problema histórico era, por tanto, encontrar la ley de movimiento que unificara la inercia del fluido con su resistencia interna invisible.\r
\r
## Dificultad conceptual previa\r
Antes de que Navier y Stokes publicaran sus trabajos, la visión dominante era la de la **Hidrodinámica Ideal**, liderada por los trabajos de Daniel Bernoulli y Leonhard Euler en el siglo XVIII. \r
\r
La dificultad conceptual radicaba en la omisión de la fricción. El modelo de Euler asumía que el fluido era "invíscido" (viscosidad dinamica [[mu]] igual a cero). Esto llevaba a conclusiones físicamente imposibles en la práctica, como la **Paradoja de D'Alembert**, que predecía que un objeto moviéndose a través de un fluido no sufriría ninguna resistencia al avance.\r
- **Falta de Perfil**: En el modelo ideal, el fluido se deslizaba por las paredes sin rozamiento, lo que implicaba una velocidad uniforme en toda la sección del tubo.\r
- **Ausencia de Pérdidas**: Sin viscosidad, no había mecanismo para disipar la energía mecánica en calor, por lo que el gradiente de presion dpdx necesario para mover el fluido debería haber sido cero en flujo estacionario, lo cual contradecía cualquier observación en tuberías reales.\r
Faltaba entender que el fluido tiene una "memoria" de sus fronteras: la condición de no deslizamiento.\r
\r
## Qué cambió\r
El cambio fundamental ocurrió cuando se introdujo el concepto de **esfuerzo viscoso** en el balance de fuerzas.\r
\r
1. **Navier (1822)**: Claude-Louis Navier fue el primero en proponer una ecuación que incluía la viscosidad, basándose en la idea de que las moléculas de fluido ejercían fuerzas entre sí proporcionales a su velocidad relativa. Aunque su fundamentación molecular era físicamente cuestionable para la época, la estructura matemática de su ecuación era correcta.\r
2. **Stokes (1845)**: George Gabriel Stokes abordó el problema desde la mecánica del continuo, sin recurrir a hipótesis moleculares. Definió lo que hoy llamamos un "fluido newtoniano", donde el esfuerzo es linealmente proporcional a la tasa de deformación. Stokes fue quien demostró analíticamente que la ecuación de Navier explicaba perfectamente los experimentos de Hagen y Poiseuille. Al resolver la ecuación para un tubo, obtuvo el perfil parabólico y la dependencia R^4, cerrando la brecha entre teoría y experimento.\r
3. **Reynolds (1883)**: Décadas después, Osborne Reynolds completó el cuadro al descubrir que la ecuación de Navier-Stokes tenía dos caras. Mediante su famoso experimento de la tinta, demostró que el numero de Reynolds [[Re]] determinaba si el fluido seguía las soluciones ordenadas de Stokes (laminar) o se volvía caótico (turbulento).\r
\r
## Impacto en la física\r
La formulación de Navier-Stokes transformó la hidrodinámica de una curiosidad matemática en una ciencia de ingeniería exacta. El impacto fue masivo en varios frentes:\r
- **Nacimiento de la Aeronáutica**: Permitió comprender cómo la viscosidad dinamica [[mu]] genera la capa límite sobre un ala, lo cual es la fuente última de la sustentación y la resistencia aerodinámica.\r
- **Teoría del Caos**: La naturaleza no lineal de la ecuación (el término donde el fluido se mueve a sí mismo) dio origen al estudio moderno de la turbulencia y los sistemas caóticos.\r
- **Transporte de Energía**: Estableció las bases para entender cómo los fluidos transportan no solo masa, sino también calor y cantidad de movimiento, lo que permitió el diseño de intercambiadores de calor modernos.\r
Navier-Stokes demostró que las leyes de Newton eran capaces de describir el continuo gaseoso y líquido con la misma precisión que el movimiento de los planetas, siempre que se incluyera la difusión de momento.\r
\r
## Conexión con física moderna\r
Hoy en día, la ecuación de Navier-Stokes está en el corazón de la tecnología punta y los grandes desafíos científicos:\r
- **Dinámica de Fluidos Computacional (CFD)**: Superordenadores resuelven estas ecuaciones billones de veces para diseñar desde coches de Fórmula 1 hasta reactores de fusión nuclear.\r
- **Climatología y Oceanografía**: Los modelos de predicción del tiempo y del cambio climático son, en esencia, resoluciones globales de la ecuación de Navier-Stokes acopladas con la termodinámica.\r
- **Medicina de Precisión**: Se utiliza para modelar el flujo de sangre en el corazón y detectar aneurismas o riesgos de infarto basados en la viscosidad dinamica [[mu]] del plasma sanguíneo.\r
- **El Problema del Millón de Dólares**: Matemáticamente, aún no sabemos si las soluciones de Navier-Stokes en 3D siempre "existen" y son "suaves" (sin saltos infinitos). El Clay Mathematics Institute ofrece un millón de dólares a quien lo resuelva, lo que demuestra que, 200 años después, Navier-Stokes sigue siendo la frontera final de la mecánica clásica.\r
- **Microfluídica**: En la escala de los microchips (Lab-on-a-chip), operamos en el límite de bajos numero de Reynolds [[Re]], donde la linealidad de la ecuación permite un control absoluto sobre el transporte de fármacos y células individuales.`;export{e as default};
