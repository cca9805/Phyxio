const e=`# Ecuación de Navier-Stokes: Introducción\r
\r
## Contexto conceptual\r
Las **ecuaciones de Navier-Stokes** son la expresión definitiva de la mecánica de fluidos clásica. Representan la aplicación de la segunda ley de Newton a un medio continuo, permitiendo predecir cómo cambia la velocidad de un fluido bajo la influencia de fuerzas internas y externas. A diferencia del modelo de fluido ideal (Bernoulli), Navier-Stokes incorpora la **viscosidad**, lo que las convierte en la herramienta estándar para modelar desde el flujo sanguíneo en nuestras arterias hasta el diseño aerodinámico de aviones comerciales.\r
\r
Matemáticamente, son un sistema de ecuaciones en derivadas parciales no lineales. Su resolución exacta es extremadamente compleja y constituye uno de los "Problemas del Milenio" de la matemática contemporánea. Sin embargo, su comprensión conceptual permite entender por qué el agua se adhiere a las paredes de un tubo, cómo se generan los remolinos y por qué es necesario un gradiente de presión para mantener un flujo viscoso en movimiento. Sin estas ecuaciones, no podríamos explicar la sustentación de un ala o el clima de nuestro planeta.\r
\r
## 🟢 Nivel esencial\r
En su esencia, la ecuación de Navier-Stokes es una ley de **balance de fuerzas** por unidad de volumen. Nos dice que la aceleración de una partícula fluida es el resultado neto de cuatro contribuciones fundamentales que compiten en cada punto del espacio:\r
\r
1. **Inercia**: La tendencia del fluido a mantener su estado de movimiento. Está ligada a la densidad [[rho]]. Un fluido más denso ofrece más resistencia a ser acelerado, siguiendo la misma lógica de la masa en sólidos.\r
2. **Presión**: El fluido siempre siente un empuje desde las zonas de mayor presión hacia las de menor presión. Este efecto se cuantifica mediante el gradiente de presión [[gp]]. Es el "motor" principal en bombas y tuberías.\r
3. **Viscosidad**: Es la fricción interna del fluido. Actúa como una resistencia al deslizamiento que intenta frenar el movimiento relativo entre capas. Depende de la viscosidad dinámica [[mu]] y disipa energía en forma de calor.\r
4. **Fuerzas externas**: Contribuciones como la gravedad [[gx]] o fuerzas electromagnéticas que actúan sobre todo el volumen del fluido. Se conocen como fuerzas "mássicas".\r
\r
Entender Navier-Stokes es entender que un fluido no "se mueve" simplemente; es acelerado o frenado continuamente por la competencia entre estas fuerzas. Por ejemplo, en una tubería horizontal, la viscosidad intenta detener el fluido, y es el gradiente de presión el que debe suministrar la fuerza necesaria para vencer ese rozamiento y mantener la velocidad. Si eliminamos la diferencia de presión, el fluido se detendrá inevitablemente por la fricción interna.\r
\r
## 🔵 Nivel formal\r
Para un fluido incompresible y Newtoniano, la forma vectorial general de la ecuación de Navier-Stokes es:\r
\r
Donde cada término tiene unidades de fuerza por unidad de volumen (N/m^3):\r
- [[rho]] derivada material de la velocidad: Inercia o tasa de cambio del momento. Incluye la aceleración local y la convectiva (cambio por movimiento a través de gradientes de velocidad).\r
- -nabla p: Fuerza debida al gradiente de presión. Empuja al fluido hacia donde la presión disminuye más rápidamente.\r
- [[mu]] nabla^2 {v}: Fuerza viscosa (término de difusión del momento). El laplaciano representa cómo la velocidad se "extiende" desde las zonas rápidas a las lentas.\r
- {f}: Fuerzas másicas externas, usualmente la gravedad [[rho]] {g}.\r
\r
En este leaf, trabajamos con una versión simplificada unidimensional para el análisis de flujos desarrollados. La ecuación de balance para la aceleración material [[a]] se expresa mediante \r
{{f:balance_1d}}\r
\r
\r
{{f:balance_1d}}\r
\r
Esta forma operativa nos permite calcular la aceleración neta de una partícula si conocemos el gradiente de presión [[gp]], la difusión viscosa [[lapu]] (laplaciano) y la gravedad proyectada [[gx]]. Además, para completar el análisis formal del flujo, introducimos el **Número de Reynolds [[Re]]**, que relaciona las fuerzas inerciales con las viscosas:\r
\r
{{f:re_apoyo}}\r
\r
En un flujo estacionario y completamente desarrollado (como en el centro de una tubería larga), la aceleración [[a]] es cero, lo que implica que la presión y la gravedad equilibran exactamente a la viscosidad.\r
\r
## 🔴 Nivel estructural\r
La estructura de Navier-Stokes revela la naturaleza dual de los fluidos. El término de difusión ([[mu]] nabla^2 {v}) tiende a suavizar el movimiento y uniformizar la velocidad, actuando como un factor estabilizador. Por el contrario, el término convectivo ({v} ? nabla {v}) introduce no linealidad y es el responsable de la creación de estructuras complejas como la turbulencia. Esta competencia define si el flujo será predecible o caótico.\r
\r
El comportamiento del sistema está gobernado por el **Número de Reynolds [[Re]]**, cuyo valor dicta el dominio de validez de las diferentes simplificaciones:\r
1. **Límite de Stokes ([[Re]] ll 1)**: La viscosidad domina. Los términos de inercia son despreciables. Es el régimen de la microfluídica, el movimiento de bacterias y el lento posar del polvo fino.\r
2. **Límite de Euler ([[mu]] to 0 o [[Re]] to infty)**: La viscosidad es despreciable frente a la inercia en el seno del fluido. Es la base de la aerodinámica clásica, aunque falla cerca de las paredes.\r
3. **Transición a la turbulencia**: Para flujos en tuberías, cuando [[Re]] supera aproximadamente 2300, el flujo deja de ser laminar y ordenado para volverse caótico, generando remolinos de todas las escalas.\r
\r
Un aspecto estructural clave es la **condición de no deslizamiento**: en la interfaz entre un fluido y un sólido, la velocidad del fluido es idéntica a la del sólido. Esto genera gradientes de velocidad intensos cerca de las paredes (capa límite), donde las fuerzas viscosas se vuelven dominantes sin importar cuán bajo sea el valor de [[mu]]. Sin esta condición, no existiría la resistencia aerodinámica por fricción.\r
\r
## Interpretación física profunda\r
Navier-Stokes nos enseña que el movimiento de un fluido es un proceso de **transporte y disipación**. La cantidad de movimiento se transporta por el flujo (convección) pero también se difunde lateralmente por la viscosidad (difusión), de forma análoga a cómo el calor se propaga en un metal. La presión actúa como el motor que inyecta energía mecánica en el sistema, mientras que la viscosidad actúa como el sumidero que transforma esa energía mecánica en calor por fricción molecular.\r
\r
Además, la ecuación acopla el campo de presiones con el de velocidades de forma global en fluidos incompresibles. Esto significa que un cambio de presión en un punto se siente instantáneamente en todo el dominio, lo que exige que el fluido se mueva de forma que se conserve siempre la masa (continuidad). Es esta danza entre conservación de masa y balance de fuerzas lo que define la física de fluidos.\r
\r
## Orden de magnitud\r
- **Microfluídica**: En un capilar de 100\\,mum, con agua a 1\\,mm/s, [[Re]] aprox 0.1. El flujo es puramente viscoso y reversible; si inviertes la presión, las partículas desandan su camino exactamente.\r
- **Tuberías industriales**: Un flujo de agua a 1\\,m/s en un tubo de 10\\,cm tiene [[Re]] aprox 10^5. El flujo es plenamente turbulento, lo que aumenta drásticamente la pérdida de energía frente al caso laminar.\r
- **Gran escala**: En la atmósfera, el número de Reynolds es tan inmenso que la viscosidad molecular es irrelevante para el movimiento global, pero la fricción con el suelo sigue limitando la velocidad de los vientos en una capa de cientos de metros de espesor.\r
\r
## Método de resolución personalizado\r
1. **Simplificación geométrica**: Elige coordenadas (cartesianas, cilíndricas) que aprovechen la simetría del conducto para reducir el número de incógnitas y fija la longitud característica [[L]] con criterio físico.\r
2. **Hipótesis cinemáticas**: Determina si el flujo es estacionario (sin variaci?n temporal expl?cita) e incompresible. Verifica si es un flujo "desarrollado" para anular gradientes longitudinales de velocidad.\r
3. **Evaluación de fuerzas**: Identifica si el movimiento es impulsado por presión [[gp]], gravedad [[gx]] o por el movimiento de una pared (flujo de Couette).\r
4. **Cálculo de Reynolds**: Usa [[Re]] para decidir si puedes usar un modelo laminar o si debes considerar efectos turbulentos. Es el primer paso crítico en cualquier diseño de ingeniería.\r
5. **Cierre de balance**: Aplica la ecuación de balance para hallar la aceleración [[a]] o el gradiente necesario. Usa las condiciones de contorno de no deslizamiento para hallar las constantes de integración.\r
\r
## Casos especiales y ejemplo extendido\r
**Flujo de Poiseuille**: En un tubo cilíndrico bajo un gradiente constante, Navier-Stokes predice un perfil de velocidad parabólico. La velocidad es máxima en el eje y cae a cero en las paredes. La caída de presión necesaria para mantener este flujo es directamente proporcional a la viscosidad [[mu]] e inversamente proporcional a la cuarta potencia del radio (Ley de Poiseuille), lo que explica por qué una pequeña obstrucción arterial dispara la presión sanguínea.\r
\r
**Flujo de Couette**: Ocurre cuando el fluido se encuentra entre dos placas paralelas y una de ellas se mueve. Si no hay gradiente de presión, el perfil de velocidades es lineal. Es el modelo básico para entender cómo se transmite el esfuerzo cortante a través de un fluido lubricante.\r
\r
## Preguntas reales del alumno\r
- **¿Por qué el aire parece no tener viscosidad si Navier-Stokes dice que sí?** Porque su viscosidad es muy baja (aprox 1.8 por diez a la menos cinco Pa por segundo). A escalas grandes, la inercia es tan superior que la viscosidad parece invisible, pero sin ella, los aviones no podrían generar sustentación ni sentirían resistencia al avance.\r
- **¿Qué es la aceleración material?** Es la aceleración que siente una partícula de fluido específica mientras se mueve. Incluye el cambio de velocidad en el tiempo (aceleración local) y el cambio debido a que la partícula se mueve a zonas con distinta velocidad (aceleración convectiva). Es como sentir que un coche acelera porque el conductor pisa el pedal frente a sentir que acelera porque entra en una bajada.\r
\r
## Conexiones transversales y rutas de estudio\r
- **De Bernoulli a Navier-Stokes**: Navier-Stokes es la ley general; Bernoulli es el caso ideal sin fricción ([[mu]] = 0) aplicado a lo largo de una línea de corriente.\r
- **Hacia la Dinámica de Fluidos Computacional (CFD)**: Dado que estas ecuaciones son difíciles de resolver a mano, usamos ordenadores para discretizarlas y hallar soluciones en geometrías complejas como motores o corazones artificiales.\r
- **Hacia el flujo turbulento**: En el límite de Reynolds alto, estudiamos las ecuaciones promediadas de Reynolds (RANS) para capturar el efecto de los remolinos sin resolver cada detalle del caos.\r
\r
## Síntesis final\r
La ecuación de Navier-Stokes es la ley fundamental que gobierna el mundo fluido. Al unificar la inercia, la presión y la fricción viscosa en un solo balance, nos permite describir desde la suavidad de un flujo laminar hasta la complejidad de la turbulencia. Dominar su interpretación es la clave para entender cómo la energía y la materia fluyen a través de nuestro entorno físico, desde el interior de una célula hasta la escala planetaria.`;export{e as default};
