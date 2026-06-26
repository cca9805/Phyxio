const e=`\uFEFF# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un hogar tiene conectados simultáneamente los siguientes electrodomésticos en el mismo circuito de 16 A: un horno eléctrico de 2200 W, un microondas de 1200 W y una cafetera de 800 W. La tensión de la red es de 230 V. Se pide:\r
\r
(a) Calcular la potencia total consumida por los tres electrodomésticos.\r
\r
(b) Determinar la corriente total que circula por el circuito e indicar si excede la capacidad de la protección de 16 A.\r
\r
(c) Calcular la resistencia equivalente del conjunto de electrodomésticos conectados en paralelo.\r
\r
(d) Si se añade adicionalmente un tostador de 1000 W, ¿cuál sería la nueva corriente total? ¿Qué consecuencias tendría esta situación?\r
\r
## Datos\r
\r
- Horno eléctrico: [[P]]_horno = 2200 W\r
- Microondas: [[P]]_micro = 1200 W\r
- Cafetera: [[P]]_cafe = 800 W\r
- Tostador adicional (apartado d): [[P]]_tost = 1000 W\r
- Tensión de red: [[V]] = 230 V\r
- Protección del circuito: [[I]]_max = 16 A\r
- Configuración: Conexión en paralelo a la misma tensión\r
\r
## Definición del sistema\r
\r
El sistema consiste en tres cargas resistivas puras conectadas en paralelo a una fuente de tensión alterna de 230 V (tensión nominal doméstica europea). Cada electrodoméstico se modela como una resistencia equivalente que consume potencia activa según su especificación nominal.\r
\r
La conexión en paralelo implica que todos los electrodomésticos comparten la misma diferencia de potencial [[V]] = 230 V, mientras que la corriente total [[I]]_total es la suma algebraica de las corrientes individuales consumidas por cada carga.\r
\r
El circuito está protegido por un magnetotérmico de 16 A, que actúa como límite de seguridad térmica y de cortocircuito.\r
\r
## Modelo físico\r
\r
El modelo se basa en las relaciones fundamentales de circuitos eléctricos en régimen estacionario:\r
\r
{{f:potencia_base}}\r
\r
Esta ecuación relaciona potencia eléctrica, tensión y corriente instantáneas. Para cargas resistivas puras, también puede expresarse en función de la resistencia:\r
\r
{{f:potencia_resistiva}}\r
\r
Para la conexión en paralelo de resistencias, la resistencia equivalente se calcula como la inversa de la suma de inversas de cada resistencia individual.\r
\r
Donde [[R]]_eq es la resistencia equivalente del conjunto, y [[R]]₁, [[R]]₂, [[R]]₃ son las resistencias individuales de cada electrodoméstico.\r
\r
## Justificación del modelo\r
\r
El modelo de cargas resistivas puras es válido para electrodomésticos de calefacción como hornos, tostadores, cafeteras y la resistencia del microondas (magnetrón). Estos dispositivos operan mediante conversión directa de energía eléctrica en calor mediante el efecto Joule, con factor de potencia prácticamente unitario (cos φ ≈ 1).\r
\r
**Causalidad física**: La potencia disipada en una resistencia depende cuadráticamente de la tensión aplicada. Como la tensión de red se mantiene constante (regulada por la distribuidora), cada electrodoméstico consume la potencia nominal especificada independientemente de otros dispositivos conectados. La única limitación es la capacidad del conductor y la protección del circuito.\r
\r
**Dominio de validez**: El modelo es válido cuando:\r
- La tensión de red se mantiene en 230 V ± 10% (207-253 V según EN 50160)\r
- Los electrodomésticos operan en régimen estacionario (no durante arranque)\r
- El cableado tiene resistencia despreciable comparada con las cargas\r
- No hay armónicos significativos que alteren la potencia aparente\r
\r
El modelo deja de ser válido si la caída de tensión en el cableado es significativa (> 5%), lo que ocurriría si la corriente total excediera ampliamente la capacidad del conductor, o durante transitorios de arranque de motores donde las corrientes pueden ser 3-7 veces superiores a la nominal.\r
\r
## Resolución simbólica\r
\r
**(a) Potencia total**\r
\r
Para cargas en paralelo, la potencia total consumida es la suma algebraica de las potencias individuales:\r
\r
[[P]]_total = [[P]]_horno + [[P]]_micro + [[P]]_cafe\r
\r
**(b) Corriente total**\r
\r
Aplicando la ecuación de potencia [[P]] = [[V]]·[[I]], despejamos la corriente:\r
\r
[[I]]_total = [[P]]_total / [[V]]\r
\r
**(c) Resistencia equivalente**\r
\r
Primero calculamos las resistencias individuales de cada electrodoméstico usando [[R]] = [[V]]² / [[P]]:\r
\r
- [[R]]_horno = [[V]]² / [[P]]_horno\r
- [[R]]_micro = [[V]]² / [[P]]_micro\r
- [[R]]_cafe = [[V]]² / [[P]]_cafe\r
\r
Luego aplicamos la fórmula de resistencias en paralelo para obtener [[R]]_eq.\r
\r
**(d) Con tostador adicional**\r
\r
La nueva potencia total incluye el tostador:\r
\r
[[P]]_nueva = [[P]]_total + [[P]]_tost\r
\r
La nueva corriente se calcula dividiendo la nueva [[P]]_nueva entre [[V]].\r
\r
**(e) Energía consumida en 2 horas de uso normal**\r
\r
La energía acumulada [[E_kWh]] durante un tiempo [[t_h]] se obtiene con:\r
\r
{{f:energia}}\r
\r
## Sustitución numérica\r
\r
**(a) Cálculo de potencia total**\r
\r
Sumando cada potencia: horno 2200 W más microondas 1200 W más cafetera 800 W.\r
\r
[[P]]_total ≈ 4200 W (4.2 kW)\r
\r
**(b) Cálculo de corriente total**\r
\r
Dividiendo [[P]]_total entre [[V]]: 4200 W entre 230 V da aproximadamente 18.26 A.\r
\r
[[I]]_total ≈ 18.3 A\r
\r
**Evaluación de límite**: La corriente calculada de 18.3 A excede la protección de 16 A del circuito. Esta condición es insegura.\r
\r
**(c) Cálculo de resistencias individuales y equivalente**\r
\r
{{f:potencia_resistiva}}\r
\r
Para el horno: elevar 230 V al cuadrado y dividir por 2200 W da aproximadamente 24.0 Ω. Por tanto [[R]]_horno ≈ 24.0 Ω.\r
\r
Para el microondas: elevar 230 V al cuadrado y dividir por 1200 W da aproximadamente 44.1 Ω. Por tanto [[R]]_micro ≈ 44.1 Ω.\r
\r
Para la cafetera: elevar 230 V al cuadrado y dividir por 800 W da aproximadamente 66.1 Ω. Por tanto [[R]]_cafe ≈ 66.1 Ω.\r
\r
Aplicando la fórmula de paralelo (inversa de la suma de inversas):\r
\r
[[R]]_eq ≈ 12.6 Ω\r
\r
Verificación: dividir [[V]] (230 V) entre [[I]]_total (18.26 A) también da aproximadamente 12.6 Ω.\r
\r
**(e) Energía consumida durante 2 [[t_h]] con los tres electrodomésticos funcionando**\r
\r
Multiplicando la [[P]]_total (4.2 kW) por [[t_h]] (2 h):\r
\r
[[E_kWh]] ≈ 8.4 kWh (aproximadamente 1.26 € a tarifa media de 0.15 €/kWh).\r
\r
**(d) Escenario con tostador adicional**\r
\r
Nueva potencia total:\r
\r
Añadiendo el tostador: 4200 W más 1000 W del tostador.\r
\r
[[P]]_nueva ≈ 5200 W (5.2 kW)\r
\r
Nueva corriente total:\r
\r
Dividiendo la nueva potencia total entre [[V]]: 5200 W entre 230 V.\r
\r
[[I]]_nueva ≈ 22.6 A\r
\r
## Validación dimensional\r
\r
Para la ecuación de potencia ([[P]] igual a [[V]] por [[I]]):\r
\r
- Unidades de potencia: \`[M L² T⁻³]\` (vatios)\r
- Unidades de tensión: \`[M L² T⁻³ I⁻¹]\` (voltios)\r
- Unidades de corriente: \`[I]\` (amperios)\r
- Verificación: \`[M L² T⁻³ I⁻¹]\` · \`[I]\` = \`[M L² T⁻³]\` ✓\r
\r
Para la ecuación de resistencia ([[R]] igual a [[V]] al cuadrado dividido entre [[P]]):\r
\r
- Unidades de resistencia: \`[M L² T⁻³ I⁻²]\` (ohmios)\r
- Unidades de tensión al cuadrado: \`[M² L⁴ T⁻⁶ I⁻²]\`\r
- Unidades de potencia: \`[M L² T⁻³]\`\r
- Verificación: \`[M² L⁴ T⁻⁶ I⁻²]\` / \`[M L² T⁻³]\` = \`[M L² T⁻³ I⁻²]\` ✓\r
\r
Para la resistencia equivalente en paralelo:\r
\r
- Unidades de conductancia (1/[[R]]): \`[M⁻¹ L⁻² T³ I²]\` (siemens)\r
- Suma de conductancias: \`[M⁻¹ L⁻² T³ I²]\` + \`[M⁻¹ L⁻² T³ I²]\` = \`[M⁻¹ L⁻² T³ I²]\` ✓\r
- Inverso de conductancia total: \`[M L² T⁻³ I⁻²]\` = unidades de resistencia ✓\r
\r
## Interpretación física\r
\r
El análisis revela una situación de riesgo eléctrico inmediato. Con los tres electrodomésticos operando simultáneamente, la corriente demandada (18.3 A) excede en un 14% la capacidad nominal de la protección (16 A). Físicamente, esto significa que el magnetotérmico debería dispararse para proteger el cableado, interrumpiendo el suministro eléctrico.\r
\r
Si la protección fallara o estuviera sobredimensionada inadecuadamente, el cableado del circuito (típicamente 1.5 mm² o 2.5 mm² de sección) transportaría una corriente superior a su capacidad térmica continua. Según el efecto Joule, la potencia disipada como calor en el cable es proporcional al cuadrado de [[I]] multiplicado por la resistencia del cable. Un aumento del 14% en corriente produce un aumento del 30% en calor generado, acelerando la degradación del aislamiento térmico y aumentando el riesgo de incendio.\r
\r
La resistencia equivalente calculada (12.6 Ω) es menor que cualquiera de las resistencias individuales, lo cual es característico de conexiones en paralelo. Este valor bajo de resistencia equivalente es precisamente lo que permite la alta corriente total: la red "ve" una carga casi como un cortocircuito comparada con los valores individuales.\r
\r
El apartado (d) demuestra la rápida escalada del riesgo al añadir cargas. El tostador adicional eleva la corriente a 22.6 A, un 41% por encima del límite de protección. Esta condición es crítica y requiere intervención inmediata: redistribución de cargas entre circuitos, instalación de un circuito dedicado de mayor capacidad para la cocina, o gestión activa de la simultaneidad (no operar todos los electrodomésticos al mismo tiempo).\r
\r
Si la resistencia de cableado fuera significativa (por ejemplo, 0.5 Ω en una instalación antigua), la caída de tensión en los cables sería el producto de [[I]] (18.3 A) por esa resistencia (0.5 Ω), aproximadamente 9.2 V. Los electrodomésticos recibirían solo 220.8 V en lugar de 230 V, reduciendo su potencia efectiva y prolongando los tiempos de operación, lo cual compensaría parcialmente pero no eliminaría el riesgo térmico del cableado.\r
\r
---\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
María vive en un piso antiguo del centro de Madrid con instalación eléctrica de más de 40 años. Su cuadro eléctrico tiene protecciones de 16 A por circuito, y el cableado es de sección 1.5 mm² (capacidad nominal ~16 A). María ha notado que últimamente el magnetotérmico de la cocina salta con frecuencia, especialmente por la mañana cuando prepara el desayuno.\r
\r
Su cocina tiene conectados: una cafetera (800 W), un tostador (1000 W), un hervidor de agua (2200 W), y el frigorífico (150 W). María suele encender la cafetera, el tostador y el hervidor simultáneamente por la mañana para preparar desayuno rápido. El frigorífico permanece conectado permanentemente.\r
\r
María necesita entender por qué salta la protección y qué soluciones tiene disponibles sin necesidad de reforma completa de la instalación.\r
\r
## Estimación física\r
\r
Para diagnosticar el problema de María, aplicamos las relaciones fundamentales de potencia y corriente del leaf. Además de la corriente, calculamos la energía [[E_kWh]] consumida durante el desayuno (aproximadamente 15 minutos, es decir 0.25 [[t_h]]) para cuantificar el impacto económico.\r
\r
Primero, calculamos la potencia total simultánea cuando María opera sus electrodomésticos de desayuno más el frigorífico base:\r
\r
Sumando: cafetera 800 W, tostador 1000 W, hervidor 2200 W y frigorífico 150 W.\r
\r
[[P]]_total ≈ 4150 W (4.15 kW)\r
\r
Aplicando la ecuación de potencia para obtener la corriente:\r
\r
{{f:potencia_base}}\r
\r
Dividiendo la potencia total entre la tensión doméstica de 230 V:\r
\r
Dividiendo [[P]]_total entre [[V]]: 4150 W entre 230 V.\r
\r
[[I]]_total ≈ 18.0 A\r
\r
Esta corriente excede la protección de 16 A en un 12.5%, lo cual explica los disparos frecuentes del magnetotérmico. La protección está funcionando correctamente al detectar una sobrecarga.\r
\r
La [[E_kWh]] consumida en ese desayuno de 0.25 [[t_h]] se calcula con la fórmula de energía:\r
\r
{{f:energia}}\r
\r
[[P]]_kW × [[t_h]] = 4.15 kW × 0.25 h ≈ 1.04 kWh (aproximadamente 0.16 € a tarifa media).\r
\r
Analicemos alternativas de gestión de carga:\r
\r
**Escenario 1**: Si María usa solo cafetera + tostador + frigorífico (sin hervidor):\r
\r
Cafetera 800 W más tostador 1000 W más frigorífico 150 W: potencia total 1950 W. Dividida entre 230 V:\r
\r
Corriente [[I]] ≈ 8.5 A (dentro del margen seguro < 16 A)\r
\r
**Escenario 2**: Si María usa solo hervidor + cafetera + frigorífico (sin tostador):\r
\r
Hervidor 2200 W más cafetera 800 W más frigorífico 150 W: potencia total 3150 W. Dividida entre 230 V:\r
\r
Corriente [[I]] ≈ 13.7 A (dentro de margen aceptable, aunque elevado)\r
\r
**Escenario 3**: Si María escalona el uso (hervidor primero, luego cafetera cuando el hervidor apague):\r
\r
Potencia máxima instantánea: solo el hervidor activo (2200 W) más frigorífico (150 W).\r
\r
Corriente máxima [[I]] ≈ 10.2 A (margen cómodo y seguro)\r
\r
## Interpretación\r
\r
El problema de María es un caso clásico de evolución de hábitos de consumo sin actualización correspondiente de la infraestructura eléctrica. Cuando la vivienda fue cableada hace 40 años, era improbable que una cocina doméstica tuviera tantos electrodomésticos de alta potencia disponibles simultáneamente. La cultura del "desayuno exprés" con múltiples aparatos operando al mismo tiempo es un fenómeno reciente.\r
\r
Físicamente, los disparos del magnetotérmico son una protección necesaria, no una molestia. Sin ellos, el cableado de 1.5 mm² (diseñado para ~16 A máximo) transportaría 18 A continuos, generando calor por efecto Joule que degradaría progresivamente el aislamiento PVC del cable. Con el tiempo, esta degradación podría llevar a cortocircuitos o incendios.\r
\r
Las soluciones disponibles para María, ordenadas por complejidad creciente:\r
\r
1. **Gestión temporal (sin coste)**: Escalonar el uso de electrodomésticos. Usar el hervidor primero (2 minutos), luego la cafetera (3 minutos), finalmente el tostador (2 minutos). Esta secuencia mantiene la corriente máxima alrededor de 10 A, bien dentro de la capacidad del circuito.\r
\r
2. **Redistribución de carga (bajo coste)**: Si hay otro circuito disponible (salón, dormitorio), conectar el hervidor a ese circuito mediante extensión temporal durante el desayuno. El frigorífico debe permanecer en el circuito de cocina por proximidad.\r
\r
3. **Sustitución de electrodomésticos (coste medio)**: Reemplazar el hervidor de 2200 W por uno de menor potencia (1000-1500 W) o cambiar a hervidor de inducción más eficiente. Alternativamente, usar una thermomix u otro aparato multifunción que combine funciones.\r
\r
4. **Actualización de circuito (alto coste)**: Contratar a un electricista para instalar un circuito dedicado de cocina con cable 2.5 mm² y protección de 20-25 A. Esta es la solución definitiva pero requiere inversión significativa.\r
\r
La solución más adecuada para María, considerando que vive en alquiler y no puede realizar obras mayores, es la gestión temporal. Con solo cambiar sus hábitos de preparación de desayuno (escalonar en lugar de simultanear), resuelve el problema sin coste alguno.\r
\r
La lección física subyacente es que la potencia eléctrica demandada es el resultado de decisiones humanas de uso, no solo de la presencia de electrodomésticos. La simultaneidad es una variable gestionable que impacta directamente sobre la seguridad eléctrica y el confort de uso.\r
`;export{e as default};
