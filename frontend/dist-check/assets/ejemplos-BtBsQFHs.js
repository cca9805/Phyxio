const e=`\uFEFF# Ejemplo tipo examen\r
\r
## Enunciado\r
Determina la presión absoluta y el incremento de presión (presión manométrica) que experimenta un sensor de investigación oceanográfica situado a una profundidad total de 450 metros bajo la superficie del Mar Cantábrico. Este problema es fundamental para comprender los estresores ambientales en la instrumentación de aguas profundas. Debemos suponer que la densidad del agua de mar circundante es aproximadamente 1030 kg/m^3 (ligeramente superior a la del agua dulce debido a la salinidad) y que la presión atmosférica en la superficie libre es el valor estándar de (101325 Pa). Para nuestros cálculos, considera que la aceleración gravitatoria local es de 9.81 m/s^2. El objetivo final es evaluar tanto la presión total [[p]] como el incremento de presión [[dp]] que actúan como carga mecánica crítica sobre la estructura principal del dispositivo.\r
\r
## Datos\r
- Profundidad vertical medida desde la superficie: [[h]] = 450 m\r
- Densidad de masa volumétrica del agua salada: [[rho]] = 1030 kg/m^3\r
- Aceleración gravitatoria local estándar: [[g]] = 9.81 m/s^2\r
- Presión atmosférica superficial de referencia: [[p0]] = 101325 Pa\r
- Magnitud a calcular 1: Presión absoluta o total [[p]] en Pascales (Pa).\r
- Magnitud a calcular 2: Incremento de presión o presión manométrica [[dp]] en Pascales (Pa).\r
\r
## Definición del sistema\r
El sistema físico bajo consideración consiste en una columna vertical ininterrumpida de agua salada en reposo absoluto, que se extiende desde la interfase aire-agua en la superficie hasta la posición exacta del sensor sumergido. El sistema se encuentra en un estado de equilibrio mecánico hidrostático, lo que implica que no existen corrientes macroscópicas netas, turbulencias ni movimientos a gran escala que puedan introducir efectos dinámicos o variaciones temporales en el campo de presiones. Los límites del sistema están definidos por la superficie libre del mar, donde se produce la interacción con la atmósfera terrestre, y por la propia superficie del sensor.\r
\r
## Modelo físico\r
El modelo conceptual utilizado para este análisis es el de **fluido incompresible en reposo dentro de un campo gravitatorio uniforme**. Bajo este marco teórico, la densidad [[rho]] se postula como un parámetro constante e invariante, independientemente de la profundidad alcanzada o del nivel de presión interna del fluido. Esto implica que el agua de mar no sufre compresibilidad interna significativa en el rango de profundidades estudiado. El perfil de presión resultante se predice, por lo tanto, como puramente lineal.\r
\r
## Justificación del modelo\r
Dada la profundidad de análisis de 450 metros, que es pequeña en comparación con las profundidades abisales máximas, la variación de la densidad del agua debida a la compresión se estima en menos del 0.5%, lo que valida el uso de una densidad constante. La quietud supuesta del mar justifica ignorar los términos de energía cinética o de fricción viscosa. Asimismo, la variación de la aceleración de la gravedad con la altura es despreciable a esta escala.\r
\r
## Resolución simbólica\r
Para determinar la presión absoluta [[p]], aplicamos la **Ecuación Fundamental de la Hidrostática**:\r
\r
{{f:presion_hidro}}\r
\r
\r
\r
Para calcular específicamente el incremento de presión [[dp]] (presión manométrica), utilizamos:\r
\r
{{f:delta_p_hidro}}\r
\r
\r
incremento de presion = [[rho]] g h\r
\r
\r
## Sustitución numérica\r
Procedemos a realizar la inserción de los valores numéricos:\r
\r
1. **Cálculo de la presión manométrica**:\r
\r
El incremento de presión se obtiene multiplicando densidad, gravedad y profundidad. El valor numérico es 4,547,035 Pa, aproximadamente 4.55 MPa.\r
\r
\r
2. **Cálculo de la presión absoluta**:\r
\r
Al sumar la presión superficial y la contribución hidrostática, la presión total resulta 4,648,360 Pa, aproximadamente 4.65 MPa.\r
\r
\r
## Validación dimensional\r
Realizamos el análisis de las dimensiones para asegurar la coherencia del resultado:\r
\r
[incremento de presion] = [[[rho]]] * [g] * [h] = (M L^{-3}) * (L T^{-2}) * (L) = M L^{-1} T^{-2}\r
\r
La combinación resultante M L^{-1} T^{-2} corresponde exactamente a la unidad de Presión (Fuerza/Área) en el Sistema Internacional, que es el Pascal (Pa). Esto confirma que el procedimiento algebraico es correcto.\r
\r
## Interpretación física\r
El resultado obtenido, de aproximadamente 4.65 MPa, **significa** que el sensor está soportando una carga mecánica equivalente a unas 46 veces la presión atmosférica estándar. Este valor **indica** que cada centímetro cuadrado de la carcasa del sensor debe ser capaz de resistir una fuerza de unos 46 Newton. La diferencia entre la presión absoluta y la manométrica **indica** que la atmósfera contribuye con solo un 2% del estrés total a esta profundidad, siendo el peso de la columna de agua el factor abrumadoramente dominante.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
En el diseño de sistemas de almacenamiento de agua urbana, es común el uso de torres de agua situadas en colinas para suministrar presión a una zona residencial. Imagina una torre donde el nivel del agua está a 60 metros por encima de la cota de las viviendas más bajas. El objetivo es determinar si la presión hidrostática disponible es suficiente para los estándares de suministro doméstico (entre 250 y 400 kPa).\r
\r
## Estimación física\r
Utilizando la densidad del agua dulce (1000 kg/m^3) y la gravedad estándar, podemos estimar rápidamente que por cada 10 metros de altura ganamos aproximadamente 1 atmósfera (100 kPa). Por tanto, para una torre de 60 metros, la presión manométrica esperada es de unos 600 kPa.\r
\r
## Interpretación\r
El valor de 600 kPa **significa** que la presión es superior al rango estándar de suministro doméstico. Esto **implica** que, aunque el agua llegará con fuerza incluso a los pisos más altos, será necesario instalar válvulas reductoras de presión en la entrada de las viviendas situadas en la cota cero para evitar daños en las tuberías y electrodomésticos, que podrían fugar bajo tal carga hidrostática constante.\r
\r
`;export{e as default};
