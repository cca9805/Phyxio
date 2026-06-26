const e=`# Compresibilidad - Ejemplos Guiados y Resolución\r
\r
# Ejemplo tipo examen\r
## Enunciado\r
Un cilindro hidráulico de alta precisión contiene 2.5 litros de un aceite especial de base sintética cuya compresibilidad [[beta]] ha sido medida en 6.5 × 10⁻¹⁰ Pa⁻¹. El pistón del cilindro, accionado por un motor eléctrico, aplica una fuerza controlada que incrementa la presión del aceite desde la presión atmosférica estándar hasta alcanzar los 250 bar. En este escenario de ingeniería mecánica, se solicita realizar los siguientes cálculos detallados:\r
1.  Determinar el módulo volumétrico [[B]] del aceite sintético.\r
2.  Calcular la disminución absoluta de volumen [[dV]] experimentada por el fluido, expresando el resultado final en centímetros cúbicos (cm³) para facilitar la lectura técnica.\r
3.  Establecer el volumen final exacto del aceite tras el proceso de compresión.\r
\r
## Datos\r
- Volumen inicial [[V]]: 2.5 litros equivalente a 0.0025 metros cúbicos\r
- Compresibilidad [[beta]]: 6.5 × 10⁻¹⁰ Pa⁻¹\r
- Incremento de presión [[dp]]: 250 bar (equivalente a 250 × 10⁵ Pascales o 2.5 × 10⁷ Pascales)\r
- Presión inicial: aproximadamente 1 atmósfera o 10⁵ Pascales (presión manométrica utilizada para el incremento)\r
\r
## Definición del sistema\r
El sistema físico bajo estudio es la masa confinada de aceite dentro de las paredes del cilindro rígido. Se define como un sistema cerrado donde la masa permanece constante pero el volumen se reduce debido a la carga de presión externa aplicada de forma cuasi-estática por el pistón superior. Las variables objetivo principales para el análisis de rigidez son el módulo volumétrico [[B]] y la variación volumétrica neta [[dV]].\r
\r
## Modelo físico\r
Se utiliza el modelo de **Compresibilidad Lineal** para fluidos homogéneos. Este modelo matemático asume que el aceite se comporta como un medio elástico perfecto y que el módulo volumétrico se mantiene constante dentro del rango de presiones especificado. Utilizaremos la definición recíproca de módulo volumétrico\r
\r
{{f:modulo_volumetrico_def}}\r
\r
 y la ley de respuesta de compresibilidad\r
\r
{{f:compresibilidad_def}}\r
\r
.\r
\r
## Justificación del modelo\r
Este modelo es **válido** **porque** el incremento de presión de 250 bar se considera moderado para los aceites industriales modernos y no provoca transiciones de fase ni cambios químicos en la estructura del fluido. **Se asume** un comportamiento lineal dado que la deformación relativa esperada es muy pequeña, situándose muy por debajo del límite del 5% donde los efectos no lineales empiezan a ser dominantes. **Se considera** además que el proceso ocurre con suficiente lentitud para ser tratado como isotérmico y que los sellos del pistón son perfectos, lo que garantiza que la relación entre presión [[dp]] y cambio de volumen [[dV]] sea directa y proporcional.\r
\r
## Resolución simbólica\r
1.  **Cálculo del módulo volumétrico**:\r
    Utilizamos la relación de inversión elástica\r
\r
{{f:modulo_volumetrico_def}}\r
\r
    El módulo volumétrico es el recíproco de la compresibilidad.\r
\r
2.  **Cálculo de la variación de volumen**:\r
    Despejamos el cambio de volumen [[dV]] de la definición de compresibilidad operativa\r
\r
{{f:compresibilidad_def}}\r
\r
    El cambio de volumen se obtiene multiplicando la compresibilidad por el volumen inicial y por el cambio de presión, con signo negativo para asegurar contracción.\r
\r
3.  **Volumen final**:\r
    El estado final se obtiene sumando la variación al estado inicial. Si la variación es negativa (contracción), el volumen final será menor que el inicial.\r
\r
## Sustitución numérica\r
1.  **Módulo B**:\r
    El módulo volumétrico resulta ser aproximadamente 1.538 mil millones de Pascales o 1.538 GPa (gigapascales).\r
\r
2.  **Variación [[dV]]**:\r
    Aplicando los datos en la fórmula, la variación de volumen resulta ser aproximadamente -4.06 × 10⁻⁵ metros cúbicos, o equivalentemente, aproximadamente -40.6 centímetros cúbicos (el signo negativo confirma la contracción esperada).\r
\r
3.  **Volumen final**:\r
    El volumen inicial era 2500 centímetros cúbicos. Después de la compresión, el volumen final es aproximadamente 2459.4 centímetros cúbicos, representando una reducción relativa de aproximadamente 1.6%.\r
\r
## Validación dimensional\r
- Módulo: Las unidades resultan en una medida de presión (Pascales), lo cual corresponde correctamente a una magnitud de rigidez mecánica.\r
- Volumen: El análisis dimensional confirma que la compresibilidad (unidad Pa⁻¹) multiplicada por el volumen (m³) y el cambio de presión (Pa) produce unidades de volumen (m³), validando la coherencia del cálculo con el cambio geométrico esperado en el fluido.\r
\r
## Interpretación física\r
El resultado obtenido **indica** que el aceite sintético, a pesar de su reputación de incompresibilidad en baja presión, ha experimentado una reducción de volumen tangible de aproximadamente 1.6%. Este comportamiento **significa** que el fluido ha almacenado energía elástica que será devuelta al sistema cuando cese la presión del pistón. El valor calculado para el módulo volumétrico (aproximadamente 1.54 GPa) es plenamente **coherente** con las propiedades de los aceites de alta viscosidad y resulta **físicamente** razonable para el diseño de circuitos hidráulicos que operan en condiciones industriales exigentes.\r
\r
# Ejemplo de aplicación real\r
## Contexto\r
**Propagación de señales acústicas en el medio marino**. La velocidad de comunicación y detección bajo el agua depende fundamentalmente del módulo volumétrico [[B]] del agua de mar. Este parámetro define la rapidez con la que las perturbaciones de presión se desplazan a través de las capas oceánicas, permitiendo el funcionamiento de tecnologías críticas como el sonar y la comunicación entre especies marinas a larga distancia.\r
\r
## Estimación física\r
Para realizar una **estimación** precisa del **orden de magnitud** de la velocidad de propagación, consideramos los valores estándar para el agua oceánica: un módulo volumétrico de aproximadamente 2.2 mil millones de Pascales y una densidad media de aproximadamente 1025 kilogramos por metro cúbico. Aplicando la relación de Newton-Laplace que vincula la velocidad del sonido con la rigidez y la densidad del medio, obtenemos una rapidez de propagación de aproximadamente 1464 metros por segundo. Este cálculo nos ofrece una **aproximación** excelente que justifica por qué las señales acústicas viajan casi 4.5 veces más rápido en el agua que en la atmósfera terrestre. La bajísima compresibilidad del líquido permite una transmisión de energía mecánica mucho más eficiente que en el aire gaseoso.\r
\r
## Interpretación\r
En el ámbito de la oceanografía moderna, se sabe que variaciones ínfimas en el módulo [[B]] provocadas por cambios en la salinidad o la temperatura local pueden alterar la trayectoria del sonido, creando los denominados canales SOFAR. Estos canales actúan como guías de onda naturales donde el sonido puede recorrer miles de kilómetros. Este ejemplo demuestra que la compresibilidad, incluso cuando es mínima en magnitud, es el motor físico que permite la exploración del "mundo silencioso" mediante el análisis de la elasticidad volumétrica del agua.`;export{e as default};
