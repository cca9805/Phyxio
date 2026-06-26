const e=`\uFEFF# Ejemplo tipo examen\r
\r
## Enunciado\r
Un submarino de investigación oceanográfica de última generación se encuentra realizando una misión crítica de mapeo del lecho marino en las gélidas aguas del Ártico. Inicialmente, el vehículo se encuentra sumergido en equilibrio estático a una cota vertical de [[z1]] es -500 m respecto al nivel medio del mar (que tomamos como origen de coordenadas en la superficie). Tras completar la primera fase de recolección de datos, el equipo científico solicita al capitán descender suavemente hasta una nueva posición de trabajo situada a una cota de [[z2]] es -850 m. Sabiendo que la densidad media del agua de mar en esa zona es de [[rho]] es 1025 kg/m^3 debido a la salinidad y baja temperatura, y que la presión absoluta medida por los sensores del casco en la primera posición era de [[p1]] es 5.12 x 10^6 Pa (incluyendo ya el efecto de la atmósfera), calcula con total precisión la presión absoluta [[p2]] que deberá soportar el casco reforzado de titanio del submarino en su nueva cota de máxima profundidad. Considera la aceleración de la gravedad constante como [[g]] es 9.81 m/s^2.\r
\r
## Datos\r
- Presión absoluta de referencia en la cota inicial: [[p1]] es 5.12 x 10^6 Pa\r
- Densidad volumétrica del fluido (agua salada ártica): [[rho]] es 1025 kg/m^3\r
- Aceleración de la gravedad terrestre en la zona: [[g]] es 9.81 m/s^2\r
- Cota vertical inicial del submarino: [[z1]] es -500 m\r
- Cota vertical final del submarino: [[z2]] es -850 m\r
\r
## Definición del sistema\r
El sistema físico bajo estudio se define como una masa continua de agua de mar, considerada como un fluido incompresible y homogéneo en estado de reposo absoluto. Establecemos un sistema de referencia cartesiano con el eje vertical Z orientado positivamente hacia el cenit (hacia arriba), situando el nivel cero exactamente en la superficie libre del océano. En este marco, todas las posiciones sumergidas se representan mediante coordenadas negativas. El submarino se modela como un punto material para el análisis de la presión local en su centro geométrico, asumiendo que el tamaño del vehículo es pequeño comparado con las variaciones de profundidad.\r
\r
## Modelo físico\r
Para resolver este problema, aplicaremos el **Principio Fundamental de la Hidrostática** para fluidos incompresibles. Este modelo físico postula que en un fluido en reposo, la presión absoluta en cualquier punto depende únicamente de su profundidad vertical respecto a una referencia conocida. El modelo asume que la densidad [[rho]] del medio permanece constante en todo el rango de profundidades analizado y que la única fuerza de volumen actuante es la gravedad [[g]], la cual se considera uniforme en dirección vertical hacia abajo. La relación entre la presión absoluta [[p2]] y el cambio de cota se rige por el peso de la columna de agua situada entre los niveles [[z1]] y [[z2]].\r
\r
## Justificación del modelo\r
La elección del modelo hidrostático lineal e incompresible está plenamente justificada por las condiciones físicas del entorno. Aunque el agua de mar posee una ligera compresibilidad, para una diferencia de alturas de solo 350 metros, el cambio en la densidad [[rho]] es inferior al 0.1\\%, lo que lo hace despreciable para cálculos de ingeniería estructural. Además, la velocidad de descenso del submarino es lo suficientemente baja como para considerar que el sistema atraviesa una sucesión de estados de cuasi-equilibrio estático, permitiendo ignorar los términos de presión dinámica derivados de la energía cinética del fluido (Bernoulli). La gravedad [[g]] también se asume constante dado que el radio terrestre es inmensamente mayor que el desnivel estudiado.\r
\r
## Resolución simbólica\r
La presión absoluta en un punto profundo se obtiene sumando la presión de referencia inicial y el incremento de presión o salto hidrostático [[dp]] causado por el peso del fluido adicional que se encuentra sobre el punto al descender. La expresión matemática que gobierna este fenómeno es:\r
\r
{{f:equilibrio_hidro}}\r
{{f:salto_hidro}}\r
\r
\r
[[p2]] es [[p1]] + incremento de presion es [[p1]] + [[rho]] g ([[z1]] - [[z2]])\r
\r
\r
En esta ecuación, el término ([[z1]] - [[z2]]) representa la diferencia de cotas verticales [[dz]]. Si el punto final está a mayor profundidad, [[z2]] será un valor más negativo que [[z1]], haciendo que la resta sea positiva y, por tanto, que la presión [[p2]] aumente respecto a [[p1]].\r
\r
## Sustitución numérica\r
Introducimos los valores proporcionados en el enunciado, asegurando la coherencia total de las unidades dentro del Sistema Internacional (SI):\r
\r
\r
[[p2]] es 5.12 x 10^6 + 1025 * 9.81 * (-500 - (-850))\r
\r
\r
\r
[[p2]] es 5.12 x 10^6 + 1025 * 9.81 * 350\r
\r
\r
Primero calculamos el salto de presión hidrostática [[dp]]:\r
incremento de presion es 1025 * 9.81 * 350 es 3,516,825 Pa aprox 3.52 MPa.\r
\r
Finalmente, sumamos este valor a la presión absoluta inicial en el punto de referencia:\r
\r
[[p2]] es 5,120,000 + 3,516,825 es 8,636,825 Pa\r
\r
\r
## Validación dimensional\r
Realizamos un análisis de las dimensiones de cada término para garantizar la validez física de la operación:\r
[[[rho]] * g * z] es (kg * m^{-3}) * (m * s^{-2}) * (m) es kg * m^{-1} * s^{-2}.\r
Por otro lado, la unidad de presión Newton/metro cuadrado tiene dimensiones:\r
1 N/m^2 es (kg * m * s^{-2}) / m^2 es kg * m^{-1} * s^{-2}.\r
Ambos términos coinciden perfectamente, lo que confirma que estamos sumando magnitudes de la misma naturaleza física (presión).\r
\r
## Interpretación física\r
El resultado obtenido, [[p2]] aprox 8.64 MPa, **significa** que la presión absoluta sobre el submarino ha aumentado en más de un 68\\% respecto a su valor inicial a 500 metros de profundidad. Físicamente, este incremento **indica** que el casco debe ahora resistir una fuerza adicional equivalente al peso de una columna de agua de 350 metros de altura sobre cada metro cuadrado de su superficie. En términos prácticos, esto supone una carga extra de unas 350 toneladas por metro cuadrado, lo que pone de manifiesto la enorme importancia del Principio Fundamental de la Hidrostática en el diseño de naves de exploración abisal.\r
\r
---\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
En la ingeniería civil de rascacielos modernos, como el Burj Khalifa, el suministro de agua potable a las plantas superiores representa un reto físico inmenso. Si intentáramos llevar el agua desde un depósito en la azotea hasta los grifos de la planta baja mediante una única tubería continua, la presión acumulada en la base por efecto del principio fundamental sería tan elevada que destruiría instantáneamente cualquier válvula o tubería doméstica convencional, las cuales están diseñadas para trabajar a presiones seguras inferiores a los 5 o 6 bar.\r
\r
## Estimación física\r
Imaginemos un rascacielos con un depósito de agua situado a una cota de [[z1]] es 300 m (una altura considerable). Queremos estimar el salto de presión [[dp]] que existiría en un grifo situado a nivel de calle ([[z2]] es 0 m). Aplicando la fórmula del principio fundamental:\r
\r
{{f:salto_hidro}}\r
\r
\r
incremento de presion es [[rho]] g ([[z1]] - [[z2]]) es 1000 * 9.81 * 300 es 2,943,000 Pa aprox 29.4 bar\r
\r
\r
Este valor es casi 6 veces superior a la presión de seguridad máxima permitida en instalaciones domésticas. Es una magnitud destructiva para la fontanería estándar.\r
\r
## Interpretación\r
Esta estimación cuantitativa **significa** que es físicamente imposible (y peligroso) realizar una conexión directa. Por tanto, el principio fundamental nos **indica** con precisión matemática la necesidad imperativa de instalar "depósitos de ruptura" o estaciones reductoras cada 50 o 60 metros de altura. Gracias a este principio, los ingenieros pueden calcular que colocando un depósito cada 50 m de desnivel vertical [[dz]], la presión máxima se mantendrá siempre por debajo de los 5 bar, garantizando un suministro seguro y eficiente a todos los habitantes del edificio sin riesgo de reventones catastróficos.\r
\r
\r
`;export{e as default};
