const e=`# Introduccion al sonido\r
\r
## Contexto conceptual\r
El **sonido** es una perturbación mecánica ondulatoria y longitudinal que se propaga exclusivamente a través de medios materiales elásticos, ya sean gases, líquidos o sólidos. En el marco de la mecánica de fluidos, el sonido se manifiesta como una sucesión de variaciones locales y temporales en la presión y la densidad del medio. Estas perturbaciones viajan en forma de frentes de onda, transportando energía y cantidad de movimiento sin que exista un transporte neto de materia a través de grandes distancias. El estudio de la acústica física es fundamental para comprender cómo los fluidos responden a excitaciones dinámicas rápidas, permitiendo el desarrollo de tecnologías que van desde la comunicación humana hasta el diseño de sonares y sistemas de diagnóstico médico no invasivos.\r
\r
A diferencia de las ondas en la superficie del agua, donde la perturbación es transversal (el líquido sube y baja mientras la onda avanza), en el sonido las moléculas oscilan en la **misma dirección** de propagación. Esta naturaleza longitudinal es la que permite que el sonido viaje a través del interior de los fluidos, aprovechando su compresibilidad. Sin elasticidad (la capacidad de recuperar el volumen original tras una compresión), el sonido no podría existir; y sin inercia (la tendencia de la masa a permanecer en su estado de movimiento), la perturbación no podría propagarse. Por tanto, el sonido es el resultado de una danza perfecta entre la rigidez y la pesadez de la materia.\r
\r
## 🟢 Nivel esencial\r
De forma intuitiva, podemos imaginar el sonido como una "conversación de choques" entre las moléculas de un fluido. Cuando una fuente sonora, como la membrana de un altavoz o las cuerdas vocales, vibra, empuja a las moléculas más cercanas. Estas moléculas chocan con sus vecinas, transmitiendo el "empujón" antes de regresar a su posición original. Este proceso crea dos zonas características que se desplazan por el espacio:\r
1.  **Compresión**: Zonas donde las moléculas están más apretadas, lo que resulta en una mayor densidad y una presión superior a la atmosférica.\r
2.  **Rarefacción**: Zonas donde las moléculas están más separadas, resultando en una menor densidad y una presión inferior a la de equilibrio.\r
\r
Es vital comprender tres pilares básicos de la naturaleza sonora:\r
-   **Necesidad de un medio material**: El sonido es una onda mecánica. Requiere átomos o moléculas para viajar. En el vacío absoluto del espacio exterior, el sonido no existe; no hay "silencio", hay una ausencia total del fenómeno físico.\r
-   **Transporte de Energía**: Lo que llega a nuestro oído no es el aire que estaba junto a la fuente, sino la energía del choque que ha viajado de molécula en molécula. Las moléculas individuales apenas se desplazan unos micrómetros.\r
-   **Percepción Sensorial**: Clasificamos el sonido según el **Tono** (qué tan rápido vibran las moléculas), la **Intensidad** (qué tan fuerte es el empujón de presión) y el **Timbre** (la forma compleja de la onda).\r
\r
## 🔵 Nivel formal\r
La descripción matemática del sonido se rige por la relación cinemática fundamental que vincula las escalas espaciales y temporales de la onda:\r
\r
{{f:onda_basica}}\r
\r
Donde:\r
-   [[c]]: Velocidad de propagación del sonido (m/s). Es una propiedad intrínseca del medio.\r
-   [[f]]: Frecuencia temporal (Hz o 1/s). Define cuántos ciclos de presión ocurren por segundo.\r
-   [[lambda]]: Longitud de onda (m). Es la distancia física entre dos compresiones consecutivas.\r
\r
Para profundizar en la física del fluido, debemos considerar que la velocidad del sonido es el resultado del balance entre las fuerzas elásticas y las fuerzas inerciales:\r
\r
{{f:sonido_compresible}}\r
\r
Donde [[B]] es el **Módulo de Compresibilidad Volumétrico** (Bulk Modulus), que mide la resistencia del fluido a ser comprimido, y [[rho]] es su densidad en equilibrio. Esta fórmula revela que el sonido viaja más rápido en medios que son muy difíciles de comprimir (altos [[B]]) pero que son relativamente ligeros (bajos [[rho]]). Por esta razón, el sonido viaja casi 4.5 veces más rápido en el agua que en el aire: aunque el agua es mucho más densa, es inmensamente más difícil de comprimir que un gas.\r
\r
Formalmente, la presión acústica p y el desplazamiento de las partículas s están relacionados por:\r
La perturbacion de presion crece donde el desplazamiento de las particulas cambia con mayor rapidez en la direccion de propagacion.\r
Esta ecuación diferencial indica que la presión es máxima donde el gradiente de desplazamiento es mayor, existiendo un desfase de un cuarto de ciclo (90^ degrees) entre la onda de desplazamiento y la onda de presión.\r
\r
## 🔴 Nivel estructural\r
Estructuralmente, la propagación del sonido en gases es un proceso **adiabático**. Las oscilaciones son tan rápidas que el calor generado durante la compresión no tiene tiempo de fluir hacia las zonas de rarefacción. Esto altera el valor efectivo de la elasticidad del gas.\r
\r
1.  **Velocidad en Gases Ideales**:\r
    A partir de la termodinámica, se demuestra que para un gas ideal:\r
    Para un gas ideal, la termodinamica relaciona la velocidad del sonido con el coeficiente adiabatico, la constante de los gases, la temperatura absoluta y la masa molar.\r
    Donde gamma es el coeficiente adiabático (1.4 para el aire), R es la constante de los gases, T es la temperatura absoluta y M la masa molar. Este resultado es crucial: en un gas, la velocidad del sonido depende **únicamente de la temperatura** y no de la presión o densidad de forma independiente. Si calientas el aire, el sonido se acelera.\r
\r
2.  **Impedancia Acústica (Z = [[rho]] [[c]])**:\r
    Es la propiedad estructural que define cómo el medio se opone al paso del sonido. La diferencia de impedancia entre dos medios determina qué fracción del sonido se refleja y cuánto se transmite. Esto explica por qué el sonido rebota tan fuertemente al chocar contra una pared sólida o la superficie del agua.\r
\r
3.  **Límite de Linealidad**:\r
    El modelo estándar asume que perturbacion de presion much less than P_atmosferica. Si el sonido es extremadamente fuerte (explosiones), el fluido entra en un régimen no lineal donde la velocidad de la onda depende de su propia amplitud, dando lugar a la formación de **ondas de choque**.\r
\r
## Aplicaciones Ingenieriles y Biológicas\r
La acústica física es una herramienta de ingeniería de precisión:\r
-   **Sonar**: Utiliza ecos para medir distancias bajo el agua, basándose en el conocimiento preciso de [[c]] en el océano.\r
-   **Ecografía Médica**: Emplea ultrasonidos de alta frecuencia para lograr longitudes de onda [[lambda]] submilimétricas, permitiendo obtener imágenes detalladas de órganos internos.\r
-   **Control de Ruido**: En la industria, se diseñan materiales porosos que convierten la energía mecánica del sonido en calor mediante fricción viscosa.\r
-   **Biología**: Los murciélagos y cetáceos han evolucionado sistemas de ecolocalización que aprovechan la reflexión del sonido para "iluminar" su entorno en ausencia de luz.\r
\r
## Interpretación física profunda\r
La velocidad del sonido [[c]] debe interpretarse como la **velocidad de transferencia de información mecánica**. Es la rapidez máxima a la que una parte de un fluido puede "enterarse" de que otra parte ha sido movida. Representa la capacidad de respuesta del medio: un medio rígido transmite la información instantáneamente, mientras que uno denso y pesado la frena debido a su inercia. El sonido es, por tanto, la manifestación de que la materia no es perfectamente rígida, sino un tejido elástico que vibra y comunica energía a través del espacio.\r
\r
## Orden de magnitud\r
-   **Aire (20°C)**: [[c]] ~ 343 m/s.\r
-   **Agua marina**: [[c]] ~ 1500 m/s.\r
-   **Tejidos blandos**: [[c]] ~ 1540 m/s.\r
-   **Rango audible**: 20 Hz a 20,000 Hz.\r
-   **Longitud de onda de la voz humana (1 kHz en aire)**: ~ 34 cm.\r
\r
## Método de resolución personalizado\r
1.  **Identificar el medio**: Si el fluido es un gas, compruebe la temperatura para hallar [[c]]. Si es un líquido, busque [[B]] y [[rho]].\r
2.  **Calcular la velocidad**: Use la fórmula dinámica\r
\r
la relacion de Newton-Laplace ya formalizada en el nivel formal\r
\r
para medios generales o la térmica para gases.\r
3.  **Vincular escalas**: Aplique\r
\r
la relacion basica de onda ya formalizada en el nivel formal\r
\r
para conectar la velocidad con la frecuencia de la fuente y la longitud de onda.\r
4.  **Verificar límites**: Asegúrese de que el sonido sea audible si el problema es de percepción humana, y trabaje siempre en unidades del SI (Hz, m, s).\r
\r
## Casos especiales y ejemplo extendido\r
Un caso de gran relevancia es el **Efecto de Capa**. En el océano, la velocidad del sonido varía con la profundidad debido a cambios de temperatura y presión. Esto crea "canales sonoros" (canal SOFAR) donde el sonido puede viajar miles de kilómetros sin perder casi energía, quedando atrapado por refracción. Considere un submarino: para ser invisible, debe conocer estos perfiles de velocidad para esconderse en las zonas de sombra donde el sonar enemigo no puede penetrar debido a la curvatura de los rayos sonoros. Este fenómeno demuestra que el sonido en la naturaleza rara vez viaja en línea recta, sino que sigue los dictados de la termodinámica del medio.\r
\r
## Preguntas reales del alumno\r
-   **¿Por qué el sonido viaja más rápido en el agua si es más densa?** Porque aunque su densidad [[rho]] es mayor (lo que frena la onda), su módulo de compresibilidad [[B]] es inmensamente más grande, lo que acelera la onda mucho más de lo que la densidad la frena.\r
-   **¿Qué pasa en el vacío?** No hay sonido. No hay moléculas que choquen, por lo que la energía mecánica no tiene vehículo de transporte.\r
-   **¿Puedo ver el sonido?** Directamente no, pero mediante técnicas como la fotografía Schlieren, podemos observar los cambios de densidad en el aire causados por las ondas de presión, haciendo visible lo invisible.\r
\r
## Conexiones transversales y rutas de estudio\r
-   **Termodinámica**: El sonido permite medir la velocidad de las moléculas y el coeficiente gamma.\r
-   **Óptica**: Los fenómenos de reflexión y refracción del sonido siguen leyes análogas a las de la luz.\r
-   **Matemáticas**: El análisis de armónicos y series de Fourier permite descomponer sonidos complejos en frecuencias puras.\r
\r
## Síntesis final\r
El sonido es la "voz" de la materia. Al entender cómo vibran los fluidos, somos capaces de interpretar el mundo que nos rodea, diseñar tecnologías invisibles y explorar las profundidades de los océanos. Es una danza perfecta de presiones y densidades que nos recuerda que incluso el aire aparentemente vacío es un medio elástico vibrante y lleno de información. Dominar sus bases es el primer paso para controlar la energía mecánica que viaja por el espacio.`;export{e as default};
