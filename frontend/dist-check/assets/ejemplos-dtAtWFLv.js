const e=`\uFEFF# Ejemplo tipo examen\r
\r
## Enunciado\r
Un tubo capilar de vidrio de radio interior [[r]] igual a 0.50 mm se introduce verticalmente en un recipiente con agua pura a temperatura ambiente (20^circC). Se conocen los siguientes parámetros físicos: la tensión superficial del agua es [[sigma]] igual a 0.072 N/m, la densidad del líquido es [[rho]] igual a 1000 kg/m al cubo, la aceleración de la gravedad es [[g]] igual a 9.81 m/s al cuadrado y el ángulo de contacto entre el agua y el vidrio limpio es [[theta]] igual a 0 rad (mojado perfecto).\r
\r
Se solicita:\r
1. Calcular la altura de ascenso capilar [[h]] que alcanzará la columna de agua.\r
2. Determinar el exceso de presión [[dp]] (Presión de Laplace) justo debajo del menisco, asumiendo que este es aproximadamente esférico con un radio igual al del tubo.\r
3. Interpretar físicamente por qué el líquido asciende y qué sucedería con la altura si el radio del tubo se redujera a la mitad.\r
\r
## Datos\r
Para la resolución, identificamos las magnitudes clave y sus valores en unidades del Sistema Internacional (SI):\r
- Tensión superficial [[sigma]]: 0.072 N/m.\r
- Radio del tubo [[r]]: 0.50 mm, equivalente a 5.0 por 10 elevado a -4 m.\r
- Densidad del fluido [[rho]]: 1000 kg/m al cubo.\r
- Gravedad [[g]]: 9.81 m/s al cuadrado.\r
- Ángulo de contacto [[theta]]: 0 rad.\r
\r
Es crucial realizar la conversión del radio a metros antes de cualquier cálculo para asegurar la coherencia dimensional con el resto de las variables.\r
\r
## Definición del sistema\r
El sistema físico consiste en una interfaz líquido-gas confinada en una geometría cilíndrica de escala milimétrica. Al entrar en contacto con la pared sólida del capilar, las fuerzas de adhesión entre el agua y el vidrio superan a las fuerzas de cohesión internas del líquido, provocando que la superficie se curve hacia arriba formando un menisco cóncavo. Esta curvatura genera una componente vertical neta de la tensión superficial que actúa a lo largo de la longitud de contacto [[L]] (el perímetro del tubo) y "tira" de la masa de agua hacia arriba. El equilibrio se alcanza cuando el peso de la columna de líquido ascendida iguala exactamente a la fuerza vertical ejercida por la interfaz en dicho perímetro.\r
\r
## Modelo físico\r
Utilizaremos el modelo de equilibrio estático capilar. Este modelo asume que el fluido es incompresible y homogéneo, y que la interfaz es una superficie ideal con tensión superficial constante. Para el cálculo de la altura, aplicaremos la Ley de Jurin, que relaciona la fuerza superficial con el peso de la columna. Para el cálculo del salto de presión, emplearemos la Ley de Young-Laplace aplicada a una interfaz con simetría esférica.\r
\r
## Justificación del modelo\r
Elegimos la Ley de Jurin porque el radio del tubo (0.5 mm) es suficientemente pequeño para que el menisco pueda aproximarse a un casquete esférico y los efectos de la curvatura dominen sobre la presión hidrostática simple. El valor del ángulo de contacto [[theta]] de 0 rad simplifica el modelo, asumiendo que la fuerza superficial actúa puramente en dirección vertical en la línea de contacto. No se consideran efectos dinámicos (viscosidad) ya que buscamos el estado de equilibrio final.\r
\r
## Resolución simbólica\r
1.  **Altura capilar**:\r
    Utilizamos la relación fundamental de equilibrio de fuerzas (Ley de Jurin):\r
    {{f:ascenso_capilar}}\r
    Dado que cos(0) = 1, la fórmula se simplifica a:\r
    \r
    Con mojado perfecto, la altura capilar se obtiene equilibrando la tensión superficial con el peso de la columna.\r
    \r
\r
2.  **Exceso de presión**:\r
    Aplicamos la Ley de Laplace para una interfaz curva:\r
    {{f:laplace}}\r
    Donde el radio de curvatura de la interfaz [[R]] coincide con el radio del tubo [[r]] debido al mojado perfecto.\r
\r
3.  **Análisis de dependencia**:\r
    Observamos que tanto [[h]] como [[dp]] son inversamente proporcionales al radio del tubo. Esto implica que a menor radio, mayor será el efecto observado.\r
\r
## Sustitución numérica\r
1.  **Cálculo de la altura**:\r
    \r
    Al sustituir los datos se obtiene una altura capilar de [[h]] = 0.02936 m.\r
    \r
    \r
    Esto equivale aproximadamente a 2.94 cm de ascenso.\r
    \r
    La columna de agua sube aproximadamente 2.94 cm.\r
\r
2.  **Cálculo del exceso de presión**:\r
    \r
    La estimación de Young-Laplace da un exceso de presión [[dp]] = 288 Pa.\r
    \r
    Este es el salto de presión a través del menisco.\r
\r
## Validación dimensional\r
Verificamos las unidades de la altura [[h]]:\r
\r
[h] = ([N/m] dividido por [kg/m al cubo]  multiplicado por  [m/s al cuadrado]  multiplicado por  [m]) = (N/m dividido por N/m al cubo) = m\r
\r
El resultado en metros es coherente con una dimensión de longitud. Para la presión [[dp]]:\r
\r
Para [[dp]], la tensión superficial dividida entre una longitud da unidades de presión, Pa.\r
\r
Ambas magnitudes presentan unidades correctas según el Sistema Internacional, lo que valida la estructura algebraica de las fórmulas empleadas.\r
\r
## Interpretación física\r
El ascenso de casi 3 cm demuestra que en escalas milimétricas, la tensión superficial es capaz de realizar un trabajo significativo contra la gravedad. El líquido no "sube solo", sino que es impulsado por la reducción de la energía potencial superficial al mojar la pared del vidrio.\r
\r
Si el radio del tubo se redujera a la mitad (0.25 mm), la altura de la columna se duplicaría exactamente hasta los 5.88 cm. Esto ocurre porque mientras la fuerza de sustentación asociada a la longitud [[L]] se reduce a la mitad, el peso de la columna por unidad de altura (área) se reduce a la cuarta parte, permitiendo que la tensión superficial sostenga una columna mucho más alta.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
Un ejemplo biológico crítico es el transporte de savia en las plantas y la retención de humedad en suelos. Los poros del suelo actúan como una red de capilares interconectados que permiten que el agua de lluvia ascienda desde el nivel freático hacia las raíces, incluso en ausencia de lluvias recientes.\r
\r
## Estimación física\r
Consideremos un poro de suelo con un radio efectivo de 0.05 mm (10 veces más pequeño que nuestro ejemplo anterior). Usando la relación\r
\r
{{f:ascenso_capilar}}\r
\r
, la altura de ascenso sería:\r
\r
El poro más pequeño da una altura capilar estimada de [[h]] = 0.294 m, unos 29.4 cm.\r
\r
Esta **estimación** cuantitativa muestra cómo la estructura microscópica del suelo permite mantener hidratada la superficie terrestre mediante "succión capilar", un mecanismo pasivo que no requiere aporte de energía externa más allá de la interacción molecular.\r
\r
## Interpretación\r
La aplicación práctica revela que la tensión superficial es la herramienta de la naturaleza para el transporte vertical en sistemas sin bombas mecánicas. En el suelo, esta fuerza es lo que mantiene el agua disponible para las plantas contra la fuerza de la gravedad. Sin embargo, en la realidad, factores como la presencia de sales (que cambian [[sigma]]) o la irregularidad de los poros (que cambia [[theta]]) hacen que el ascenso real varíe, pero el modelo de Jurin proporciona la cota superior ideal para entender el fenómeno. La tensión superficial convierte el suelo en una esponja gigante que gestiona el ciclo del agua a microescala.\r
`;export{e as default};
