const e=`# Ecuación de Bernoulli\r
\r
## Contexto conceptual\r
La **Ecuación de Bernoulli** es la expresión fundamental de la conservación de la energía mecánica en el flujo de fluidos. Establece una relación matemática entre la presión, la velocidad y la altura de un fluido en movimiento a lo largo de una línea de corriente. Representa un balance energético donde la suma de la energía de presión, la energía cinética y la energía potencial permanece constante para un fluido ideal. Esta ley es el pilar de la aerodinámica y la hidráulica, permitiendo explicar fenómenos como la sustentación de las alas de un avión, el funcionamiento de los atomizadores y la medida de caudales en tuberías. \r
\r
Desde una perspectiva histórica, fue publicada por Daniel Bernoulli en su obra *Hydrodynamica* en 1738. Aunque Bernoulli fue quien lo planteó originalmente, fue Leonhard Euler quien derivó la ecuación en su forma familiar actual utilizando las leyes de Newton. La belleza de esta ecuación reside en su simplicidad: a pesar de la complejidad intrínseca de los fluidos, bajo ciertas condiciones ideales, el comportamiento del sistema puede describirse mediante un balance de sumas constantes. Entender Bernoulli es pasar de la estática de fluidos (donde solo importa la profundidad) a la dinámica, donde el movimiento altera radicalmente la percepción de la presión.\r
\r
## 🟢 Nivel esencial\r
De forma intuitiva, el principio de Bernoulli nos dice que existe un intercambio entre la velocidad y la presión de un fluido. No es que el fluido "cree" energía, sino que la transforma de una forma a otra.\r
-   **Regla de oro**: Donde el fluido se mueve más rápido, la presión es menor; y donde se mueve más lento, la presión es mayor. Este concepto es contra-intuitivo para muchos, ya que tendemos a pensar que un flujo "rápido" debería "empujar más", pero en realidad empuja menos contra las paredes laterales porque gran parte de su energía se ha invertido en el desplazamiento longitudinal.\r
-   **Intercambio de energía**: El fluido tiene una cantidad fija de energía total. Si el fluido gana velocidad (energy cinética) al pasar por un estrechamiento de una tubería, esa energía extra debe provenir de algún lugar: proviene de la presión. Al "gastarse" energía de presión para ganar velocidad, la presión medida disminuye.\r
-   **Tres formas de energía**:\r
    1.  **Presión**: La fuerza que empuja el fluido, similar a un resorte comprimido.\r
    2.  **Velocidad**: La energía debida al movimiento masivo de las partículas.\r
    3.  **Altura**: La energía por estar en una posición elevada respecto a la gravedad.\r
\r
Conceptos clave para principiantes:\r
1.  **Línea de corriente**: Es como un "carril" invisible por el que viaja una partícula de fluido sin mezclarse con las de los carriles vecinos.\r
2.  **Efecto Venturi**: Es la aplicación práctica más famosa. Al reducir el diámetro de un tubo, el fluido se ve obligado a acelerar para que pase la misma cantidad de masa por segundo, y esa aceleración provoca una caída de presión que puede usarse para succionar otros fluidos.\r
3.  **Presión de estancamiento**: Si pones el dedo en la salida de una manguera, detienes el agua. La energía cinética del agua se detiene y se convierte de nuevo en presión. Esa presión "extra" que sientes es la suma de la presión estática y la dinámica.\r
\r
## 🔵 Nivel formal\r
Para un fluido incompresible de densidad [[rho]] que fluye entre dos puntos de una línea de corriente, la ecuación de Bernoulli se expresa como una suma de términos de energía por unidad de volumen. Si en ambos puntos se comparan la presión [[p]], la velocidad [[v]] y la altura [[z]], se cumple el mismo balance energético:\r
\r
{{f:head}}\r
\r
Donde cada término tiene unidades de presión (Pascales, Pa) y representa:\r
-   [[p]]: **Presión estática**. Es la presión que mediría un observador que se moviera con el fluido. Representa el trabajo realizado por las fuerzas de presión.\r
-   Presión dinámica: representa la energía cinética del fluido por unidad de volumen. Depende críticamente del cuadrado de la velocidad [[v]] y de la densidad [[rho]].\r
-   Presión hidrostática de elevación: representa la energía potencial gravitatoria por unidad de volumen, dependiendo de la altura [[z]] respecto a un nivel de referencia y la gravedad [[g]].\r
\r
{{f:q_dinamica}}\r
\r
En el ámbito de la ingeniería civil e hidráulica, es extremadamente común trabajar con el concepto de **Carga Hidráulica (Head)**. Para ello, dividimos toda la ecuación anterior por el peso específico del fluido, que se define como gamma igual a [[rho]] por [[g]].\r
\r
En esta forma, cada término se mide en **metros (m)**:\r
-   **Carga de presión**: altura a la que subiría el líquido en un tubo vertical abierto (piezómetro).\r
-   **Carga de velocidad**: altura equivalente asociada al movimiento del fluido.\r
-   **Carga de elevación**: posición geométrica.\r
-   **Línea de energía (H)**: La suma total, que debe ser constante a lo largo de toda la tubería si no hay fricción.\r
\r
Esta lectura formal permite verificar consistencia interna: si un término aumenta, al menos uno de los otros debe disminuir para conservar el balance de energía total en el régimen ideal.\r
\r
## 🔴 Nivel estructural\r
La derivación rigurosa de la ecuación de Bernoulli se basa en la integración de las **Ecuaciones de Euler** para el movimiento de un fluido. Si aplicamos la segunda ley de Newton a una pequeña partícula de fluido que viaja por una línea de corriente, obtenemos que el cambio en la energía total es igual al trabajo de las fuerzas externas.\r
\r
La validez de Bernoulli está sujeta a cuatro hipótesis restrictivas que definen un **fluido ideal**:\r
1.  **Fluido invíscido**: Se desprecia la viscosidad. No hay "fricción" entre las capas de fluido ni con las paredes. En fluidos reales, esta aproximación falla y requiere correcciones.\r
2.  **Flujo estacionario**: Las propiedades del fluido en cualquier punto del espacio no cambian con el tiempo. El patrón de flujo es constante.\r
3.  **Flujo incompresible**: La densidad [[rho]] es constante en todo el campo de flujo. Esta es una excelente aproximación para líquidos y para gases siempre que el número de Mach sea bajo (M menor que 0,3).\r
4.  **Flujo irrotacional**: Si el flujo no tiene "vorticidad" (las partículas no rotan sobre sí mismas), la constante de Bernoulli es la misma para *todo el fluido*, no solo a lo largo de una línea de corriente. Esto simplifica enormemente los cálculos en aerodinámica.\r
\r
### El mundo real: Pérdidas de carga y Potencia\r
En la realidad, la viscosidad causa una degradación de la energía mecánica en energía térmica (calor). Para modelar esto, introducimos un término de pérdidas de energía llamado hL.\r
\r
Además, si el sistema incluye una **bomba** (que añade energía) o una **turbina** (que extrae energía), la ecuación se convierte en un balance general de energía con aportes y pérdidas.\r
\r
## Interpretación física profunda\r
Bernoulli nos revela que la presión no es solo una "fuerza", sino una reserva de energía potencial. Cuando un fluido acelera, no es un proceso espontáneo; es el resultado de un gradiente de presión. El fluido se mueve de zonas de alta presión a zonas de baja presión, "cayendo" por una pendiente de presión y ganando velocidad en el proceso. Es la misma lógica que una bola rodando por una colina: cambia altura (potencial) por velocidad (cinética). En Bernoulli, la "altura" es la presión estática.\r
\r
Físicamente, la presión estática es la manifestación del **caos molecular**. Las moléculas chocan aleatoriamente en todas direcciones. Cuando el fluido fluye ordenadamente a alta velocidad, parte de esa energía cinética molecular se alinea en la dirección del flujo. Hay menos "empuje" lateral porque las moléculas están ocupadas moviéndose hacia adelante. Por eso, un medidor de presión perpendicular al flujo registrará una lectura menor.\r
\r
## Orden de magnitud y Aplicaciones\r
-   **Sustentación aerodinámica**: Un ala de avión está diseñada para que el aire viaje más rápido por la parte superior (curvada) que por la inferior. Esto crea un vacío parcial arriba y una sobrepresión abajo. Para un avión comercial, esta pequeña diferencia de presión multiplicada por los cientos de metros cuadrados del ala genera las 200 toneladas de fuerza necesarias para vencer la gravedad.\r
-   **Fenómenos meteorológicos**: En un huracán, la velocidad del viento es extrema. Según Bernoulli, esto baja la presión atmosférica sobre los tejados. Si las ventanas están cerradas, la presión dentro de la casa es mucho mayor que la exterior, y la casa literalmente "explota" hacia afuera, arrancando el tejado no por el empuje del viento, sino por la succión del vacío superior.\r
-   **Arteria obstruida**: Si una arteria se estrecha (estenosis), la sangre debe acelerar para pasar. La presión cae en el estrechamiento. Si la caída es suficiente, la presión externa puede colapsar la arteria, cerrándola por completo, lo cual es una paradoja peligrosa del cuerpo humano.\r
\r
## Método de resolución personalizado\r
Para resolver cualquier problema de Bernoulli con éxito, sigue este protocolo:\r
1.  **Dibujar y Elegir Puntos**: Selecciona el punto 1 (donde conoces casi todo) y el punto 2 (donde está tu incógnita). Los mejores puntos son superficies de tanques, salidas a chorro libre o centros de tuberías.\r
2.  **Establecer el Nivel de Referencia (Datum)**: Elige el punto más bajo del sistema como referencia de altura cero. Esto elimina términos negativos y simplifica el álgebra.\r
3.  **Identificar Simplificaciones**:\r
    -   **Superficie de depósito grande**: Si el área es enorme, la velocidad de descenso del nivel es despreciable.\r
    -   **Salida a la atmósfera**: La presión manométrica en un chorro libre es cero.\r
    -   **Mismo diámetro**: Si la tubería no cambia de sección entre 1 y 2, por continuidad las velocidades en ambos puntos son equivalentes y los términos cinéticos se cancelan.\r
4.  **Combinar con Continuidad**: Si necesitas velocidades y solo tienes diámetros, usa la ecuación de continuidad para relacionar área y velocidad.\r
5.  **Despejar con Cuidado**: Escribe la ecuación completa antes de tachar términos. Evita errores de unidades asegurándote de que todos los términos estén en Pascales o todos en Metros.\r
\r
## Casos especiales y ejemplo extendido\r
**Teorema de Torricelli**: Consideremos un tanque gigante con un pequeño agujero a una profundidad h.\r
Punto 1 (superficie): presión atmosférica, velocidad despreciable y altura h.\r
Punto 2 (salida): presión atmosférica y altura de referencia cero.\r
\r
La resolución ideal conduce a una velocidad de salida proporcional a la raíz cuadrada de dos por gravedad y por profundidad.\r
Este resultado es fascinante: el fluido sale con la misma velocidad que alcanzaría una piedra cayendo desde la superficie del tanque. No importa qué fluido sea (agua, mercurio, gasolina), la velocidad de salida solo depende de la altura y la gravedad.\r
\r
## Preguntas reales del alumno\r
-   **¿Por qué el humo de la chimenea sube mejor cuando hace viento?** Porque el viento soplando sobre la boca de la chimenea baja la presión allí (Bernoulli). Esto crea una succión extra que ayuda a tirar del aire caliente desde el interior de la casa.\r
-   **¿Si el fluido es viscoso, Bernoulli no sirve para nada?** Sirve como límite ideal. Te da la máxima presión o velocidad teórica posible. En la práctica, sabrás que el resultado real será siempre un poco menor debido a la fricción.\r
-   **¿Qué es la presión de remanso?** Es la presión que mides cuando obligas al fluido a frenar hasta velocidad cero. En ese punto, toda su energía cinética se ha transformado en presión estática "extra". Es el principio de funcionamiento de los tubos de Pitot en los aviones.\r
\r
## Conexiones transversales y rutas de estudio\r
Termodinámica y procesos.\r
\r
## Síntesis final\r
La Ecuación de Bernoulli es fundamental. Conecta presión, velocidad y altura de forma poderosa. Proporciona la base para entender sistemas de flujo reales, desde aviones hasta plantas nucleares.`;export{e as default};
