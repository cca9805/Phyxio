const e=`# Ejemplos Guiados: Cálculo de Pérdidas de Carga\r
\r
En esta sección resolveremos dos problemas fundamentales que ilustran cómo aplicar las ecuaciones de Darcy-Weisbach y el balance de energía en escenarios reales y académicos.\r
\r
# Ejemplo tipo examen\r
\r
## Enunciado\r
Un laboratorio metalúrgico necesita transportar agua a 20 grados Celsius, con [[rho]] de 998 kilogramos por metro cúbico y viscosidad dinámica de 1.002 por diez a la menos tres pascal segundo, a través de una tubería de acero comercial con rugosidad absoluta de 0.045 milímetros. La línea tiene 150 metros de longitud y 10 centímetros de diámetro interno. Si la velocidad media del flujo es de 2 metros por segundo, determine la pérdida de carga [[hf]] en metros y la caída de presión [[dp]] en kilopascales. Considere [[g]] igual a 9.81 metros por segundo al cuadrado.\r
\r
## Datos\r
-   Densidad [[rho]]: 998 kilogramos por metro cúbico.\r
-   Viscosidad dinámica: 1.002 por diez a la menos tres pascal segundo.\r
-   Longitud [[L]]: 150 metros.\r
-   Diámetro [[D]]: 0.1 metros, equivalente a 10 centímetros.\r
-   Rugosidad absoluta: 0.045 por diez a la menos tres metros.\r
-   Velocidad media [[v]]: 2 metros por segundo.\r
-   Gravedad [[g]]: 9.81 metros por segundo al cuadrado.\r
\r
## Definición del sistema\r
El sistema bajo estudio es el volumen de fluido contenido en un tramo recto de tubería circular. Se asume flujo estacionario, incompresible y totalmente desarrollado. No existen porosidades ni fugas en el conducto. El análisis se realiza en condiciones estándar donde las variaciones de densidad por presión son despreciables.\r
\r
## Modelo físico\r
Se utiliza el modelo de **Darcy-Weisbach** para las pérdidas primarias en conductos cerrados. Este modelo matemático asume que la disipación es proporcional a la energía cinética y a la longitud del tubo. Utilizaremos la ecuación de Darcy-Weisbach y la relación de conversión a presión definidas en este leaf.\r
\r
{{f:darcy_weisbach}}\r
\r
{{f:conversion_presion}}\r
\r
El factor de fricción se obtendrá considerando el régimen detectado por el Número de Reynolds.\r
\r
## Justificación del modelo\r
Este enfoque es **válido** **porque** el agua a estas velocidades y diámetros presenta un régimen turbulento ([[Re]] alto). El uso de la ecuación de Darcy-Weisbach es **correcto** para este caso, considerando tanto la viscosidad (vía [[Re]]) como la rugosidad relativa del material. **Se asume** homogeneidad y estado estacionario dado que se trata de un flujo industrial estable. **Se considera** que la disipación se debe principalmente al rozamiento en la capa límite y a la generación de remolinos turbulentos.\r
\r
## Resolución simbólica\r
1.  **Número de Reynolds**: se calcula con [[rho]], [[v]], [[D]] y la viscosidad dinámica para identificar el régimen de flujo.\r
2.  **Rugosidad relativa**: se obtiene como el cociente entre rugosidad absoluta y [[D]].\r
3.  **Factor [[f]]**: se estima con una correlación explícita para régimen turbulento, como Haaland.\r
4.  **Pérdida de carga**:\r
    {{f:darcy_weisbach}}\r
5.  **Caída de presión**:\r
    {{f:conversion_presion}}\r
\r
## Sustitución numérica\r
1.  **Reynolds [[Re]]**:\r
- Con los datos del problema, [[Re]] resulta aproximadamente 199201, por lo que el flujo es turbulento.\r
2.  **Factor f**:\r
- Con rugosidad relativa de 0.00045, [[f]] resulta aproximadamente 0.0189.\r
3.  **Pérdida de carga [[hf]]**:\r
- Al aplicar Darcy-Weisbach se obtiene [[hf]] aproximadamente igual a 5.78 metros.\r
4.  **Presión [[dp]]**:\r
- Al convertir con densidad y gravedad, [[dp]] resulta aproximadamente 56.6 kilopascales.\r
\r
## Validación dimensional\r
- Pérdida de carga: la combinación adimensional del factor de fricción y términos geométricos entrega una magnitud de longitud, coherente con metros.\r
- Presión: al multiplicar densidad, gravedad y altura de carga se obtiene una magnitud de fuerza por unidad de área, coherente con pascales.\r
\r
## Interpretación física\r
El resultado obtenido **indica** que el agua pierde energía equivalente a una columna de 5.78 metros solo por fricción. Esto **significa** que si la tubería fuera horizontal, la presión final sería 56.6 kilopascales menor. El valor es plenamente **coherente** para una instalación industrial de estas dimensiones. La potencia disipada de 890 vatios es la **resultante** del trabajo realizado por las fuerzas viscosas sobre el fluido, transformándose irreversiblemente en calor.\r
\r
---\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
**Bombeo a tanques elevados en comunidades rurales**. En muchos proyectos de desarrollo, se bombea agua desde pozos hasta tanques elevados. Si la tubería de PVC de 50 metros tiene demasiados codos o válvulas, la pérdida de carga puede impedir que el agua llegue al tanque a pesar de tener una bomba de potencia nominal suficiente.\r
\r
## Estimación física\r
Para realizar una **estimación** de las pérdidas totales, sumamos los coeficientes locales. Para una velocidad de 1.5 metros por segundo y una suma de coeficientes K igual a 6.1:\r
- Carga de velocidad aproximada: 0.115 metros.\r
- Pérdidas secundarias aproximadas: 0.7 metros.\r
- Pérdidas primarias aproximadas, con [[f]] alrededor de 0.02: 1.15 metros.\r
La pérdida total de casi 2 metros es la **resultante** que debe sumarse a la altura geométrica del tanque.\r
\r
## Interpretación\r
Este ejemplo **demuestra** que la pérdida de carga es el "impuesto" que el fluido paga por moverse. Esta **aproximación** permite entender por qué una bomba ajustada solo a la altura estática fallará en la práctica. La interpretación física **indica** que el diseño debe contemplar siempre este margen para garantizar el suministro vital de agua.`;export{e as default};
