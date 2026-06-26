const e=`# Tubo de Pitot\r
\r
## Contexto conceptual\r
El **tubo de Pitot** es un instrumento de medición de presión que se utiliza para calcular la velocidad de flujo de un fluido. Su funcionamiento se basa en la conversión de la energía cinética del fluido en energía de presión. Es una herramienta fundamental en la aviación (para medir la velocidad del aire de las aeronaves) y en la ingeniería hidráulica e industrial (para medir velocidades en tuberías y canales).\r
\r
Al combinar una medida de la presión total con la presión estática, el tubo de Pitot permite determinar la rapidez local de un fluido de forma sencilla y robusta. Se fundamenta en el principio de que cualquier fluido en movimiento que se vea obligado a detenerse experimentará un aumento local de presión proporcional al cuadrado de su velocidad original, un fenómeno que puede cuantificarse con precisión matemática.\r
\r
## 🟢 Nivel esencial\r
La idea básica del tubo de Pitot es medir la fuerza con la que el fluido "golpea" la entrada del tubo.\r
\r
-   **Punto de estancamiento**: Cuando un fluido se mueve hacia un tubo abierto orientado de frente a la corriente, el fluido que entra choca contra el aire o líquido que ya está dentro del tubo y se detiene completamente. Ese punto donde la velocidad es cero se llama punto de estancamiento.\r
-   **Presión de estancamiento**: Al detenerse, la energía que llevaba el fluido por su movimiento (energía cinética) se transforma en presión extra. Por eso, en la boca del tubo la presión es mayor que en el resto del fluido.\r
-   **Deducción de la velocidad**: Cuanto más rápido se mueva el fluido, mayor será la presión en el punto de estancamiento. Midiendo esta presión, podemos calcular la velocidad original del fluido.\r
\r
Conceptos clave que todo estudiante debe recordar:\r
1.  **Presión estática**: La presión real del fluido en movimiento, la que "sentiríamos" si viajáramos con él.\r
2.  **Presión total (o de estancamiento)**: La presión máxima que alcanza el fluido cuando se le obliga a detener su movimiento cinético por completo.\r
\r
## 🔵 Nivel formal\r
El principio de funcionamiento se deriva directamente de la **Ecuación de Bernoulli**. Si aplicamos Bernoulli entre un punto del flujo libre y el punto de estancamiento en la entrada del tubo, asumiendo flujo incompresible y estacionario, obtenemos la relación entre presión estática, presión de estancamiento y energía cinética.\r
\r
En el punto de estancamiento la velocidad local se anula, de modo que la energía cinética del flujo libre se transforma en incremento de presión. Esa lectura se organiza con la diferencia entre presión total y presión estática:\r
\r
{{f:delta_pitot}}\r
\r
De aquí podemos despejar la velocidad del fluido [[v]] basándonos en la diferencia de presiones medida:\r
\r
{{f:velocidad_pitot}}\r
\r
Donde las magnitudes involucradas son:\r
-   [[v]]: Velocidad del fluido (m/s).\r
-   [[p_t]]: Presión total o de estancamiento (Pa), medida por el orificio frontal.\r
-   [[p]]: Presión estática del fluido (Pa), medida por los orificios laterales.\r
-   [[rho]]: Densidad del fluido ($\\text{kg/m}^3$).\r
\r
La diferencia [[dp]] entre [[p_t]] y [[p]] se conoce como **presión dinámica**. En la práctica, se suele utilizar una **sonda de Pitot-estática** (o tubo de Prandtl), que es un solo instrumento con dos tomas integradas que permite medir esta diferencia directamente.\r
\r
## 🔴 Nivel estructural\r
Para que la medición sea físicamente válida y técnicamente precisa, se deben considerar varios factores de diseño y entorno. El primero es la **alineación**: el eje del tubo debe ser paralelo a las líneas de corriente del fluido. Un pequeño ángulo de desvío (incidencia) altera la formación del punto de estancamiento y puede provocar errores de medición que crecen de forma no lineal con el ángulo, subestimando sistemáticamente la velocidad real.\r
\r
Otro factor crítico es el **régimen de flujo**. En flujos muy lentos o con fluidos muy viscosos, los efectos de la capa límite cerca de la punta del tubo pueden alterar la lectura de presión. Por el contrario, en aire a altas velocidades (Mach > 0.3), los efectos de **compresibilidad** se vuelven dominantes: la densidad del aire cambia al detenerse bruscamente, y la fórmula simple de Bernoulli debe sustituirse por relaciones isentrópicas que consideran el calentamiento y la compresión del fluido en el punto de impacto.\r
\r
Finalmente, la **ubicación de las tomas estáticas** es vital. Estas tomas deben situarse en una zona de la sonda donde las líneas de corriente hayan recuperado su trayectoria paralela tras el impacto inicial, evitando las zonas de aceleración o turbulencia generadas por la propia nariz del instrumento.\r
\r
## Interpretación física profunda\r
El tubo de Pitot actúa como un transformador de energía: convierte energía cinética macroscópica en energía potencial de presión. Representa el límite de la interacción mecánica entre un flujo y un obstáculo sólido. La presión dinámica no es una "presión real" que el fluido ejerce hacia los lados, sino una medida de su inercia específica.\r
\r
El éxito del Pitot reside en su capacidad de aislar la componente dinámica del movimiento. Al "congelar" el flujo en un punto infinitesimal, el instrumento nos permite observar la rapidez del fluido sin necesidad de cronometrar el paso de partículas. Es un recordatorio de que en la mecánica de fluidos, la presión es tanto una medida del estado estático como un reservorio de la historia dinámica del flujo.\r
\r
## Orden de magnitud\r
-   **Aviación general**: Un Cessna volando a $200\\text{ km/h}$ genera una presión dinámica de aproximadamente $1800\\text{ Pa}$.\r
-   **Hidráulica**: En una tubería con agua a $2\\text{ m/s}$, la diferencia de presión es de $2000\\text{ Pa}$, lo que equivale a unos $20\\text{ cm}$ de columna de agua.\r
-   **Tornados**: Los vientos de un tornado fuerte ($300\\text{ km/h}$) pueden generar presiones de estancamiento de más de $4000\\text{ Pa}$ contra las paredes de los edificios, una fuerza capaz de derribar estructuras no reforzadas.\r
\r
## Método de resolución personalizado\r
1.  **Identificar las presiones**: Asegúrate de distinguir entre la presión estática [[p]] (ambiente) y la total [[p_t]] (impacto). Si el enunciado da un valor en "columna de líquido", conviértelo primero a Pascales con la relación hidrostática basada en [[rho]], gravedad y altura.\r
2.  **Obtener la densidad**: Verifica si el fluido [[rho]] es agua, aire u otro. Si es aire, recuerda que su densidad varía significativamente con la altitud y la temperatura.\r
3.  **Aplicar la fórmula**: Utiliza la relación del leaf para velocidad con [[dp]] y [[rho]], asegurándote de que todas las unidades estén en el sistema internacional (Pa y kg/m^3).\r
4.  **Conversión de unidades**: Las velocidades resultantes estarán en m/s. Multiplica por $3.6$ para obtener km/h o por $1.94$ para nudos si el contexto es aeronáutico.\r
5.  **Análisis de coherencia**: Si la presión total [[p_t]] resultara ser menor que la estática [[p]], significa que hay un error de medición, una succión o que el instrumento está invertido.\r
\r
## Casos especiales y ejemplo extendido\r
**Bloqueo del tubo de Pitot en aviación**: Es uno de los fallos más peligrosos. Si la entrada frontal se bloquea (por hielo o insectos) pero los agujeros de drenaje o las tomas estáticas siguen libres, el velocímetro dejará de medir la velocidad real. La presión atrapada dentro del sistema actuará como en un barómetro: si el avión sube, la presión externa (estática) baja, y la diferencia detectada por el instrumento aumentará, haciendo que el piloto crea que el avión está acelerando cuando en realidad puede estar perdiendo sustentación.\r
\r
Este fenómeno ha sido la causa raíz de accidentes importantes como el del vuelo Air France 447. Comprender la relación física entre las dos presiones es vital para que los pilotos puedan identificar lecturas erróneas y evitar maniobras bruscas basadas en datos falsos.\r
\r
## Preguntas reales del alumno\r
-   **¿Por qué el tubo de Pitot tiene un agujerito pequeño en la parte de atrás?** Es un orificio de drenaje. Permite que el agua de lluvia o la humedad salgan del sistema por gravedad, evitando que se formen tapones de líquido que arruinarían la lectura de presión.\r
-   **¿Se puede usar para medir la velocidad de un río?** Sí. Al sumergir un tubo doblado en forma de L, el agua subirá por el tubo vertical. La altura alcanzada por el agua sobre el nivel del río permite estimar la velocidad con una relación hidrostática-energética simplificada.\r
-   **¿Qué es la "velocidad indicada" vs "velocidad verdadera"?** El instrumento está calibrado para la densidad del aire a nivel del mar. A gran altitud, donde el aire es menos denso, la velocidad verdadera es mayor que la indicada porque se necesita más rapidez para generar la misma presión de impacto.\r
\r
## Conexiones transversales y rutas de estudio\r
-   **Meteorología**: Uso en anemómetros de alta precisión para medir ráfagas de viento.\r
-   **Automovilismo**: Sensores clave en coches de Fórmula 1 para mapear el flujo de aire sobre los alerones y optimizar la carga aerodinámica.\r
-   **Fisiología**: Adaptaciones minúsculas para medir la velocidad del flujo sanguíneo en arterias principales sin perturbar el torrente.\r
\r
## Sintesis final\r
El tubo de Pitot es la aplicación más pura de la conservación de la energía en fluidos. Nos permite "sentir" la velocidad de una corriente a través de la presión que genera al detenerse. Su simplicidad mecánica y su robustez lo convierten en el estándar de oro para la navegación aérea y el diagnóstico industrial. Nos enseña que, en muchas ocasiones, la mejor forma de comprender el movimiento es obligándolo a revelarse a través de su propia detención.`;export{e as default};
