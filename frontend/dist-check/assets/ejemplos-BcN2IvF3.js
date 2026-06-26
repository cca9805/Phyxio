const e=`\uFEFF# Ejemplo tipo examen\r
\r
## Enunciado\r
Un tubo en U de vidrio se llena parcialmente con agua de densidad [[rho1]] = \\( 1000 kg/m}^3 \\). Posteriormente, se vierte una cantidad de aceite de densidad desconocida [[rho2]] en la rama derecha, de modo que se forma una columna de aceite de altura [[h2]] = \\( 0.15 m} \\) por encima de la interfaz de separación con el agua. Debido a este empuje, el nivel del agua en la rama izquierda sube hasta alcanzar una altura [[h1]] = \\( 0.12 m} \\) medida desde el mismo nivel horizontal de la interfaz. Determina el valor de la densidad del aceite [[rho2]] y explica si el resultado es coherente con las propiedades físicas esperadas. Asume que el sistema está en reposo absoluto y que los líquidos son inmiscibles.\r
\r
## Datos\r
- Densidad del agua (fluido 1): [[rho1]] = \\( 1000 kg/m}^3 \\)\r
- Altura de la columna de agua: [[h1]] = \\( 0.12 m} \\)\r
- Altura de la columna de aceite: [[h2]] = \\( 0.15 m} \\)\r
- Aceleración de la gravedad: [[g]] = \\( 9.81 m/s}^2 \\) (se cancelará en el equilibrio)\r
- Incógnita: Densidad del aceite [[rho2]] en \\( kg/m}^3 \\).\r
\r
## Definición del sistema\r
El sistema se define como el conjunto de dos columnas líquidas conectadas por la base en un tubo en U. La frontera del sistema se sitúa en la interfase de separación entre el aceite y el agua en la rama derecha. Analizamos el equilibrio de presiones en la isobara horizontal que atraviesa dicha interfase. El sistema se considera en equilibrio hidrostático, lo que implica que no hay movimiento neto de fluido entre las ramas.\r
\r
## Modelo físico\r
Se aplica el modelo de **vasos comunicantes** en un fluido incompresible en equilibrio bajo un campo gravitatorio constante. Este modelo, basado en el principio fundamental de la hidrostática, presupone que las presiones en puntos situados a la misma profundidad dentro de un fluido continuo deben igualarse. Despreciamos efectos de tensión superficial (capilaridad) dado que el diámetro del tubo se asume suficiente. El balance de fuerzas se reduce a la igualdad de las presiones hidrostáticas en la base de ambas columnas siguiendo la ley\r
\r
{{f:equilibrio_vasos}}\r
\r
.\r
\r
## Justificación del modelo\r
Dada la naturaleza macroscópica del experimento y la inmiscibilidad de los fluidos, el modelo de vasos comunicantes es el estándar de oro para esta determinación de densidades. Los efectos de evaporación o variación de densidad por temperatura son despreciables frente a la precisión de las medidas de altura. El uso de la isobara de interfaz es la herramienta más robusta para aislar el efecto de la densidad desconocida en un sistema de vasos comunicantes estático.\r
\r
## Resolución simbólica\r
Planteamos la igualdad de presiones en la base isobárica y aplicamos la ley hidrostática en ambas ramas.\r
\r
Al cancelar [[p_atm]] y [[g]], queda la relación central del leaf:\r
{{f:equilibrio_vasos}}\r
\r
De esa relación se despeja la densidad desconocida [[rho2]] en función de [[rho1]], [[h1]] y [[h2]].\r
\r
También podemos verificar la relación de proporcionalidad inversa\r
\r
{{f:relacion_alturas_densidades}}\r
\r
como comprobación de proporcionalidad inversa entre alturas y densidades.\r
\r
\r
## Sustitución numérica\r
Sustituimos los valores conocidos en la ecuación despejada y obtenemos [[rho2]] = 800 kg/m^3.\r
\r
\r
## Validación dimensional\r
Realizamos el análisis dimensional y comprobamos que la unidad final corresponde a densidad de masa en kg/m^3.\r
\r
El resultado final se expresa en unidades de densidad de masa del Sistema Internacional, lo que valida la consistencia algebraica del despeje.\r
\r
## Interpretación física\r
El resultado [[rho2]] = 800 kg/m^3 indica que el aceite es un 20 por ciento menos denso que el agua. Esta diferencia de densidad explica por qué la columna de aceite debe ser físicamente más alta (15 cm frente a 12 cm) para generar la misma presión en la base. El aceite pesa menos por unidad de volumen, por lo que requiere mayor espesor para equilibrar la carga del agua. Este valor es característico de aceites minerales ligeros, confirmando la validez física de la medición.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
En un laboratorio de control de calidad de una refinería, se utiliza un visor lateral conectado a un tanque de almacenamiento para estimar el nivel de una capa de protección química. El técnico observa que el tanque contiene un fluido de base con [[rho1]] = 1250 kg/m^3 alcanzando una altura de [[h1]] = 1.8 m. El visor lateral está lleno de un aceite de baja densidad [[rho2]] = 850 kg/m^3. Se requiere una estimación cuantitativa del nivel que debería mostrar el visor para decidir si la lectura es coherente o si existe una obstrucción en el conducto de conexión.\r
\r
## Estimación física\r
Para realizar la estimación, aplicamos la relación de equilibrio de los vasos comunicantes:\r
\r
Se aplica la misma relación de equilibrio para estimar [[h2]] a partir de [[rho1]], [[h1]] y [[rho2]].\r
\r
Sustituyendo los parámetros operativos:\r
\r
El cálculo numérico arroja [[h2]] aproximadamente igual a 2.647 m.\r
\r
La altura estimada en el visor es de aproximadamente 2.65 metros. Esta lectura es un \\( 47\\% \\) superior a la del tanque principal (\\( 2.65 \\) vs \\( 1.8 \\)).\r
\r
## Interpretación\r
La interpretación de este dato es crítica para la seguridad del proceso. Si el visor muestra una altura significativamente distinta de \\( 2.65 m} \\), el técnico debe concluir que el sistema no está en equilibrio real, lo que indica una posible acumulación de sedimentos en la válvula de fondo o una entrada de aire (burbuja) en la rama del visor. La lectura cuantitativa **significa** que el aceite ligero "amplifica" visualmente el nivel del depósito, y la precisión del visor **indica** que variaciones de pocos centímetros en el aceite delatan cambios importantes en la presión del depósito principal. Este método de vasos comunicantes actúa como un sensor pasivo de alta fiabilidad en entornos industriales corrosivos.\r
\r
`;export{e as default};
