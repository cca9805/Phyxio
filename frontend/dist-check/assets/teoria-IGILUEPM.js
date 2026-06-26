const e=`# Efecto Venturi\r
\r
## Contexto conceptual\r
\r
El efecto Venturi describe un fenómeno fundamental de la dinámica de fluidos: la disminución de la presión estática de un fluido incompresible cuando su velocidad aumenta al atravesar una sección estrecha de un conducto. Este comportamiento no es una curiosidad aislada, sino una consecuencia directa de dos principios universales: la conservación de la masa (continuidad) y la conservación de la energía mecánica (ecuación de Bernoulli).\r
\r
Al estudiar el efecto Venturi, el foco se desplaza de la simple geometría del tubo hacia el balance energético del flujo. La pregunta central no es solo cuánto cae la presión, sino cómo el sistema reorganiza su energía para permitir que la misma cantidad de materia cruce un área menor en el mismo tiempo. Comprender este encuadre permite reconocer aplicaciones que van desde carburadores y atomizadores hasta la medición de caudales en grandes tuberías industriales o la interpretación de patologías hemodinámicas.\r
\r
## 🟢 Nivel esencial\r
\r
La idea intuitiva del efecto Venturi suele chocar con la idea preconcebida de que "más velocidad implica más fuerza y por tanto más presión". La realidad física es la opuesta: para que el fluido acelere al entrar en el estrechamiento, debe existir una fuerza que lo empuje hacia adelante. Esa fuerza solo puede provenir de que la presión detrás del fluido sea mayor que la presión delante.\r
\r
En este nivel, basta con identificar tres piezas clave:\r
1.  **Estrechamiento**: El área de paso disminuye.\r
2.  **Aceleración**: Como no puede "sobrar" ni "faltar" fluido, este debe moverse más rápido en la zona estrecha.\r
3.  **Caída de presión**: Esa aceleración "consume" presión estática. El fluido se mueve más rápido donde la presión es más baja.\r
\r
Un ejemplo cotidiano es el de una manguera de jardín: al poner el dedo en la salida, el agua sale a más velocidad porque hemos reducido el área. Si pudiéramos medir la presión justo en el punto de salida, veríamos que es menor que dentro de la manguera. El efecto Venturi es el principio que permite a un pulverizador "succionar" líquido de un depósito: el aire sopla rápido sobre un tubo, crea baja presión y el líquido sube para equilibrar esa diferencia.\r
\r
## 🔵 Nivel formal\r
\r
El nivel formal traduce estas intuiciones en el lenguaje de la conservación. La descripción matemática se apoya en dos pilares que deben resolverse simultáneamente:\r
\r
**1. Conservación de la masa (Continuidad):**\r
Para un fluido incompresible (densidad [[rho]] constante), el caudal volumétrico es el mismo en cualquier sección del tubo. Si el área [[A1]] se reduce a [[A2]], la velocidad [[v1]] debe aumentar a [[v2]]:\r
\r
{{f:continuity_venturi}}\r
\r
**2. Conservación de la energía (Bernoulli):**\r
Para un flujo horizontal y sin rozamiento (fluido ideal), la suma de la presión estática y la energía cinética por unidad de volumen es constante:\r
\r
{{f:bernoulli_venturi}}\r
\r
Al combinar ambas ecuaciones obtenemos la caída de presión [[dp]] en función de la velocidad de entrada y la geometría:\r
\r
{{f:dp_venturi}}\r
\r
Esta relación muestra que la caída de presión es proporcional al cuadrado de la velocidad y aumenta drásticamente con la reducción del área. Es la base operativa para diseñar tubos de Venturi destinados a medir velocidades de flujo mediante la simple lectura de una diferencia de presiones [[p1]] y [[p2]].\r
\r
Ese encuadre formal también deja claro por qué el dispositivo funciona como sensor: una vez fijada la geometría, la lectura de [[dp]] se convierte en una estimación directa del estado del flujo sin introducir elementos mecánicos dentro del tubo. En la práctica, la interpretación es más sólida cuando el chorro se mantiene adherido, la pérdida por viscosidad es pequeña y la diferencia de presiones sigue siendo moderada frente a la presión absoluta del sistema.\r
\r
## 🔴 Nivel estructural\r
\r
La validez del modelo Venturi depende de que se mantengan las hipótesis del fluido ideal. Estructuralmente, el leaf asume que el fluido es incompresible (su densidad no cambia con la presión), lo cual es una excelente aproximación para líquidos pero requiere cautela en gases a altas velocidades (donde el número de Mach se acerca a 0.3).\r
\r
Además, el modelo ignora la viscosidad. En un tubo real, parte de la presión se pierde por fricción con las paredes, lo que significa que la recuperación de presión después del estrechamiento nunca es del 100%. Un diseño estructural eficiente (como el tubo de Venturi con cono de divergencia suave) busca minimizar la turbulencia y el desprendimiento de la capa límite para que el intercambio entre presión y velocidad sea lo más reversible posible. Sin estas condiciones de contorno, el formalismo de Bernoulli deja de ser predictivo y se convierte solo en una cota ideal.\r
\r
## Interpretación física profunda\r
\r
Dominar el efecto Venturi significa entender la presión no como una "fuerza estática", sino como un reservorio de energía. En el estrechamiento, el fluido no "gana" energía de la nada; simplemente la transforma. La caída de presión es el "pago" energético necesario para comprar velocidad.\r
\r
Esta lectura profunda permite explicar fenómenos paradójicos: por qué dos barcos que navegan muy juntos en paralelo tienden a atraerse (el agua entre ellos acelera, la presión baja y el mar circundante los empuja hacia el centro) o por qué el techo de una casa sale volando en un huracán (el aire corre rápido sobre el techo, la presión exterior baja y la presión interna, más alta, levanta la estructura). En todos estos casos, el estrechamiento de las líneas de corriente dicta el balance de fuerzas.\r
\r
## Orden de magnitud\r
\r
Para anticipar resultados en ejercicios de Venturi, conviene manejar escalas típicas:\r
*   **Velocidades**: En tuberías domésticas, [[v1]] suele estar entre $0.5$ y $2$ m/s. Si [[v2]] supera los $10$-$15$ m/s, las pérdidas por fricción suelen volverse dominantes.\r
*   **Presiones**: Para agua ([[rho]] = $1000$ kg/m³), una velocidad de $1$ m/s equivale a una presión dinámica de unos $500$ Pa ($0.005$ bar). Si la velocidad sube a $10$ m/s, la presión dinámica salta a $50,000$ Pa ($0.5$ bar).\r
*   **Densidades**: El efecto es mucho más marcado en líquidos que en gases a la misma velocidad debido a la enorme diferencia de densidad. Succionar agua con aire requiere velocidades de aire muy altas para compensar la baja densidad del gas.\r
\r
## Método de resolución personalizado\r
\r
Para resolver problemas de Venturi sin perderse en el álgebra:\r
1.  **Identificar estados**: Definir claramente el punto 1 (sección ancha) y el punto 2 (garganta).\r
2.  **Calcular velocidades**: Usar la ecuación de continuidad para relacionar [[v1]] y [[v2]] a partir de los diámetros o áreas.\r
3.  **Aplicar Bernoulli**: Plantear la ecuación de balance de energía entre los dos puntos.\r
4.  **Despejar la incógnita**: Suele ser la caída de presión o la velocidad de entrada.\r
5.  **Validación de succión**: Si [[p2]] resulta ser menor que la presión atmosférica, el sistema puede funcionar como aspirador (trompa de agua, carburador).\r
\r
## Casos especiales y ejemplo extendido\r
\r
**Cavitación**: Si el estrechamiento es demasiado severo o la velocidad muy alta, la presión [[p2]] puede caer por debajo de la presión de vapor del líquido. En ese punto, el líquido hierve a temperatura ambiente, formando burbujas de vapor que colapsan violentamente al recuperar presión, dañando las tuberías. Este es el límite físico real de muchos diseños industriales.\r
\r
**Ejemplo extendido**: Un tubo de Venturi con diámetros D1 = 10 cm y D2 = 5 cm transporta agua. Si medimos una diferencia de presión [[dp]] de 15 kPa, ¿cuál es el caudal [[Q]]?\r
*   Relación de áreas: [[A1]]/[[A2]] = (D1/D2)² = 4.\r
*   Por continuidad ([[A1]]·[[v1]] = [[A2]]·[[v2]]): [[v2]] = 4·[[v1]].\r
*   Aplicando la caida de presion [[dp]] con factor geométrico 15: 15 000 = 0.5 · 1000 · 15 · [[v1]]² → [[v1]]² = 2 → [[v1]] ≈ 1.41 m/s.\r
*   [[Q]] = [[A1]] · [[v1]] ≈ π·(0.05)² · 1.41 ≈ 0.011 m³/s (11 litros por segundo).\r
\r
## Preguntas reales del alumno\r
\r
**¿Por qué no aumenta la presión si el fluido va más "apretado"?**  \r
Porque "apretado" en fluidos incompresibles no significa más densidad, sino más velocidad. Para ganar esa velocidad, el fluido debe perder presión.\r
\r
**¿Se puede usar Venturi para elevar líquidos?**  \r
Sí, es el principio de las bombas de succión y los aerógrafos. La baja presión en el estrechamiento "succiona" el líquido hacia arriba.\r
\r
**¿Qué pasa si el tubo no es horizontal?**\r
Habría que añadir el término de energía potencial (densidad · g · h) a la ecuación de Bernoulli. El efecto Venturi puro se refiere solo al intercambio entre presión y velocidad.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
*   **Ecuación de Bernoulli**: Es el marco teórico general del que deriva este leaf.\r
*   **Ecuación de continuidad**: La restricción cinemática que obliga al fluido a acelerar.\r
*   **Viscosidad y Pérdida de Carga**: El siguiente nivel de realismo donde se estudia por qué el modelo Venturi ideal falla en tuberías muy largas.\r
*   **Aerodinámica**: Interpretación de la sustentación en alas (aunque Bernoulli es solo una parte de la explicación completa).\r
\r
## Síntesis final\r
\r
El efecto Venturi es el arte de intercambiar presión por velocidad. Entender que un estrechamiento acelera el flujo y succiona el entorno es la clave para diseñar desde sistemas médicos de oxigenación hasta motores de combustión. El error conceptual a evitar es creer que la presión es una medida de la "fuerza de choque" del fluido; en realidad, es una medida de su energía potencial estática disponible para convertirse en movimiento.`;export{e as default};
