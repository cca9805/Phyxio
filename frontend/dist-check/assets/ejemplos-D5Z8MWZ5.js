const e=`\uFEFF# Presión - Ejemplos Guiados y Resolución\r
\r
# Ejemplo tipo examen\r
## Enunciado\r
Un pistón hidráulico de sección circular recibe una fuerza normal constante de [[F]] de 850 N sobre un área efectiva de [[A]] de 5.0 por 10 elevado a -3 m al cuadrado (equivalente a unos 50 cm al cuadrado). El sistema está conectado a un segundo émbolo de mayor tamaño cuya área es de [[A]] de 4.0 por 10 elevado a -2 m al cuadrado (400 cm al cuadrado). Se desea determinar:\r
1. La presión mecánica [[p]] generada en el primer pistón.\r
2. La fuerza total [[F]] que se manifiesta en el segundo émbolo bajo condiciones ideales.\r
3. El análisis de si la presión absoluta [[p_abs]] en el interior del sistema superaría la presión atmosférica estándar de 101325 Pa si la presión manométrica inicial fuera nula.\r
\r
## Datos\r
Para resolver el problema, identificamos las magnitudes clave y sus valores en el Sistema Internacional:\r
- Fuerza inicial [[F]]: 850 N.\r
- Área del pistón 1 [[A]]: 5.0  por  10 elevado a -3 m al cuadrado.\r
- Área del pistón 2 [[A]]: 4.0  por  10 elevado a -2 m al cuadrado.\r
- Presión atmosférica de referencia [[p_atm]]: 101325 Pa.\r
\r
Es fundamental notar que todas las unidades ya están expresadas en metros cuadrados y Newtons, lo que simplifica el cálculo directo. La fuerza se especifica como normal, por lo que no requerimos proyecciones trigonométricas adicionales.\r
\r
## Definición del sistema\r
El sistema físico consiste en un fluido incompresible confinado en un circuito hidráulico cerrado. Se asume que el fluido es homogéneo y que la transmisión de la presión es instantánea y uniforme en todos los puntos del volumen conectado. No consideraremos pérdidas por rozamiento en los sellos de los pistones ni variaciones significativas de altura que introduzcan presiones hidrostáticas adicionales, enfocándonos puramente en la transmisión de presión mecánica externa.\r
\r
## Modelo físico\r
Utilizaremos el modelo de presión mecánica como fuerza distribuida uniformemente. La relación fundamental que define la intensidad de la interacción es:\r
\r
{{f:presion_mec}}\r
\r
Este modelo establece que la presión [[p]] es una propiedad local del fluido que se transmite íntegramente (Principio de Pascal). Para recuperar la fuerza total en una superficie distinta, aplicaremos el despeje:\r
\r
{{f:presion_mec}}\r
\r
\r
Finalmente, para el análisis de escalas, emplearemos la relación de presiones absoluta y manométrica:\r
\r
{{f:presion_abs}}\r
\r
## Justificación del modelo\r
Elegimos este modelo porque el fluido está confinado y las fuerzas aplicadas son perpendiculares a las superficies de los pistones. Al no haber mención de velocidades de flujo (dinámica) ni de grandes columnas verticales (estática pesada), la definición mecánica de presión es la herramienta primaria y suficiente. El uso de la presión absoluta es obligatorio para responder a la tercera cuestión, ya que la presión manométrica solo nos indica el exceso sobre la atmósfera, ocultando el estado físico total del sistema respecto al vacío.\r
\r
## Resolución simbólica\r
1.  **Presión en el primer pistón**:\r
    Calculamos el ratio entre la fuerza de entrada y su área de aplicación:\r
    \r
    La presión se obtiene comparando la fuerza normal de entrada con el área de entrada.\r
    \r
2.  **Fuerza en el segundo pistón**:\r
    Multiplicamos la presión (que se mantiene constante en el fluido) por el área de salida:\r
    \r
    La fuerza de salida se obtiene aplicando la presión transmitida sobre el área mayor de salida.\r
    \r
3.  **Presión absoluta total**:\r
    Sumamos la contribución de la atmósfera a la presión manométrica generada por el pistón:\r
    \r
    La presión absoluta se obtiene sumando la referencia atmosférica a la presión manométrica.\r
    \r
\r
## Sustitución numérica\r
1.  **Cálculo de la presión**:\r
    \r
    Los datos de entrada dan una presión mecánica de [[p]] = 170,000 Pa, equivalente a 170 kPa.\r
    \r
2.  **Cálculo de la fuerza multiplicada**:\r
    \r
    El área mayor de salida produce una fuerza de [[F]] = 6,800 N.\r
    \r
3.  **Análisis de presión absoluta**:\r
    Aplicando la relación\r
\r
{{f:presion_abs}}\r
\r
si consideramos que los 170 kPa son presión manométrica:\r
    \r
    La presión absoluta resultante es [[p_abs]] = 271,325 Pa, aproximadamente 271.3 kPa.\r
    \r
    El sistema se encuentra claramente por encima de la presión atmosférica estándar (unos 2.68 veces el valor de referencia).\r
\r
## Validación dimensional\r
Verificamos que las unidades resultantes sean coherentes con la física:\r
- Para la presión: [p] = N / m al cuadrado = Pa. Correcto.\r
- Para la fuerza resultante: [F] = Pa  multiplicado por  m al cuadrado = (N / m al cuadrado)  multiplicado por  m al cuadrado = N. Correcto.\r
- Para la presión absoluta: sumar dos presiones conserva la unidad Pa. Correcto.\r
\r
Las dimensiones confirman que no ha habido errores en los despejes algebraicos ni en las sustituciones de unidades.\r
\r
## Interpretación física\r
El resultado muestra el poder de la presión como multiplicador de fuerza. Con una inversión de apenas 850 N, el sistema es capaz de sostener una carga de 6,800 N (equivalente a unos 690 kg en la Tierra). Esto ocurre porque el fluido transmite la intensidad de la fuerza (la presión), permitiendo que un área mayor recoja más "unidades de fuerza" por cada metro cuadrado disponible. La presión es el lenguaje que permite a un sistema pequeño controlar cargas masivas mediante la gestión del espacio.\r
\r
La presión absoluta de 271 kPa indica que las paredes del contenedor están sometidas a un esfuerzo real considerable, casi tres veces superior a la presión que ejerce el aire exterior. Este es el principio básico detrás de los gatos hidráulicos y los sistemas de frenado de los automóviles: gestionar la presión para obtener ventajas mecánicas masivas a costa de un mayor recorrido del pistón de entrada.\r
\r
# Ejemplo de aplicación real\r
## Contexto\r
Un caso cotidiano es el inflado de un neumático. Cuando el medidor marca 32 psi (aproximadamente 220 kPa), se está midiendo la presión manométrica [[p_man]]. Esto significa que el aire dentro del neumático está a 220 kPa **por encima** de la presión atmosférica exterior [[p_atm]].\r
\r
## Estimación física\r
Para realizar una **estimación** cuantitativa de la carga total que soporta el neumático, consideramos una presión manométrica de 2.2  por  10 elevado a 5 Pa. Si el área de contacto ("huella") del neumático con el suelo es de aproximadamente 0.02 m al cuadrado (200 cm al cuadrado), la fuerza total de sustentación generada por el aire comprimido es:\r
\r
La fuerza de sustentación estimada con la presión manométrica y el área de contacto es [[F]] = 4,400 N.\r
\r
Dado que un coche medio pesa unos 16,000 N, esta fuerza de 4,400 N  por neumático es una **aproximación** coherente que permite sostener el peso total del vehículo mediante la distribución de la carga sobre las cuatro ruedas.\r
\r
## Interpretación\r
La presión absoluta real [[p_abs]] dentro del neumático es de unos 321 kPa. Esta diferencia de presión es la que mantiene la estructura del neumático rígida y capaz de soportar el peso del vehículo, distribuyendo la carga total sobre el área de contacto del caucho con el suelo. Sin este balance de presiones, el peso del coche simplemente colapsaría el volumen de aire interior. Este ejemplo demuestra que la presión no es solo un dato técnico, sino la resultante física que permite el transporte moderno y la estabilidad estructural de los sistemas neumáticos. La energía acumulada en el aire comprimido se traduce en una capacidad de trabajo que sostiene la carga gravitatoria del vehículo contra el suelo, permitiendo que la interacción neumático-pavimento ocurra sin deformaciones catastróficas. Este equilibrio dinámico es lo que permite que el neumático absorba irregularidades sin perder su integridad estructural.\r
`;export{e as default};
