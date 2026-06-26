const e=`# Poleas compuestas\r
\r
## Contexto conceptual\r
\r
Las poleas compuestas responden a una pregunta práctica fundamental: ¿cómo puede una persona elevar cargas mucho más pesadas que su propia capacidad de fuerza? Este sistema simple encapsula el principio de ventaja mecánica: distribuir una carga entre múltiples tramos de cuerda para reducir la fuerza de tracción necesaria.\r
\r
En el estudio de máquinas simples, comprender cómo las magnitudes [[W]], [[nSel]], [[eta]], [[F_ideal]] y [[F_real]] se relacionan permite diseñar sistemas de elevación eficientes. Cada tramo adicional de cuerda que sostiene la carga reduce proporcionalmente el esfuerzo requerido en el extremo de tracción.\r
\r
El aprendizaje de este concepto proporciona herramientas transferibles a grúas, sistemas de rescate, aparejos náuticos y cualquier mecanismo donde se requiera multiplicar la fuerza aplicada mediante configuraciones de poleas.\r
\r
## 🟢 Nivel esencial\r
\r
Imagina una carga pesada colgando de una cuerda que pasa por varias poleas antes de llegar a tus manos. Si la cuerda hace múltiples viajes entre poleas fijas y móviles, cada tramo de cuerda soporta una parte del peso total.\r
\r
La idea central es la distribución del esfuerzo. Cuando varios tramos de cuerda sostienen la carga, cada tramo lleva aproximadamente una fracción del peso. La fuerza que debes aplicar en el extremo libre es mucho menor que el peso total.\r
\r
Piénsalo así: si cuatro amigos sostienen una caja pesada, cada uno lleva un cuarto del peso. Las poleas compuestas hacen algo similar: la carga se reparte entre varios tramos de cuerda que tiran hacia arriba.\r
\r
El principio conserva energía: lo que ahorras en fuerza lo compensas en distancia. Si reduces la fuerza a la cuarta parte, necesitas tirar cuatro veces más cuerda para elevar la misma altura.\r
\r
Tres casos extremos desarrollan intuición:\r
\r
- **Un solo tramo**: Con una sola cuerda directa, debes ejercer fuerza igual al peso completo. No hay ventaja mecánica; es como tirar directamente de la carga.\r
\r
- **Dos tramos**: Con dos tramos sosteniendo la carga, la fuerza necesaria se reduce a la mitad del peso. La carga se distribuye entre dos segmentos de cuerda.\r
\r
- **Múltiples tramos**: Con cuatro o seis tramos, la fuerza requerida se reduce drásticamente, aunque debes tirar más cuerda para lograr el mismo desplazamiento vertical.\r
\r
## 🔵 Nivel formal\r
\r
Ahora expresemos cuantitativamente mediante ecuaciones de equilibrio estático. El análisis riguroso permite predecir numéricamente el comportamiento del sistema y diseñar configuraciones óptimas para aplicaciones específicas.\r
\r
En el modelo ideal sin pérdidas, cada tramo de cuerda soportante sostiene una fracción [[W]]/[[nSel]] del peso total. Esta distribución surge del principio de equilibrio de fuerzas: la suma de tensiones en todos los tramos soportantes debe equilibrar exactamente el peso de la carga suspendida.\r
\r
La condición de equilibrio estático requiere que la tensión en el extremo libre iguale esta carga por tramo:\r
\r
{{f:fuerza_ideal_poleas_compuestas}}\r
\r
Esta relación matemática revela que [[F_ideal]] es inversamente proporcional al número de tramos. El mecanismo físico subyacente es claro: más tramos implican más "brazos" mecánicos compartiendo la carga. Cada tramo adicional reduce la fuerza requerida según una ley de potencia inversa.\r
\r
En sistemas reales de ingeniería, las pérdidas por rozamiento en ejes de poleas y deformación elástica de la cuerda reducen significativamente la efectividad teórica. Modelamos estas pérdidas energéticas mediante el concepto de eficiencia mecánica [[eta]], definida como la relación entre potencia útil de salida y potencia total de entrada:\r
\r
{{f:fuerza_real_poleas_compuestas}}\r
\r
La eficiencia típicamente varía entre 0.8 y 0.95 en equipos industriales bien mantenidos, pudiendo descender a 0.7 o menos en sistemas desgastados o mal lubricados. Estas fórmulas fundamentales aplican estrictamente cuando el sistema se encuentra en equilibrio estático completo o en movimiento cuasi-estático con velocidad de elevación constante y aceleración despreciable.\r
\r
## 🔴 Nivel estructural\r
\r
El modelo de poleas compuestas tiene límites estructurales definidos:\r
\r
**Límites de validez del modelo ideal:**\r
\r
1. **Rozamiento en ejes**: Si las poleas tienen rozamiento apreciable en sus ejes, parte de la fuerza aplicada se disipa en calor. La eficiencia [[eta]] disminuye y la fuerza real [[F_real]] aumenta respecto al valor ideal.\r
\r
2. **Peso propio de poleas**: Poleas móviles con masa significativa añaden carga adicional al sistema. El peso de las poleas móviles debe sumarse a [[W]] en el cálculo de la fuerza real.\r
\r
3. **Rigidez de la cuerda**: Cuerdas muy rígidas o gruesas no se curvan fácilmente alrededor de poleas pequeñas. Esto introduce pérdidas por deformación y flexión que reducen la eficiencia efectiva.\r
\r
**Señales de fallo del modelo:**\r
\r
- Si la fuerza medida difiere más del 15% de la predicha idealmente, alguna no-idealidad domina.\r
- Si la cuerda presenta desgaste visible o calentamiento, hay pérdidas por fricción no modeladas.\r
- Si las poleas no giran suavemente, el rozamiento de ejes invalida las hipótesis de eficiencia constante.\r
\r
**Extensión a modelos más complejos:**\r
\r
El modelo con pérdidas variables requiere incluir rozamiento de cuerda sobre polea y deformación elástica. El límite de transición ocurre cuando estas pérdidas son comparables a la carga útil.\r
\r
## Interpretación física profunda\r
\r
El significado físico trasciende la sustitución numérica.\r
\r
**Principio de conservación de trabajo**: La ventaja mecónica no crea energía; solo redistribuye el esfuerzo. Si reduces la fuerza a la cuarta parte con cuatro tramos, debes tirar cuatro veces más cuerda para elevar la carga la misma distancia. El producto fuerza por distancia permanece constante (ignorando pérdidas).\r
\r
**Interpretación de límites:**\r
- Cuando [[nSel]] → 1: [[F_ideal]] → [[W]]. Sin poleas compuestas, no hay ventaja mecánica.\r
- Cuando [[nSel]] crece: [[F_ideal]] decrece hiperbólicamente. Diez tramos reducen la fuerza a una décima parte, idealmente.\r
- Cuando [[eta]] → 1: el sistema se comporta idealmente sin pérdidas.\r
- Cuando [[eta]] → 0: todas las poleas están bloqueadas; la fuerza requerida diverge hacia infinito.\r
\r
**Dilema diseño-esfuerzo**: Existe un compromiso entre número de tramos (complejidad del sistema) y reducción de fuerza. Más tramos significan más poleas, más cuerda, más mantenimiento, pero menor esfuerzo del operador.\r
\r
## Orden de magnitud\r
\r
Referencias numéricas típicas para desarrollar intuición:\r
\r
**[[W]]**: 100 N a 10 000 N (cargas de 10 kg a 1000 kg en aplicaciones típicas).\r
\r
**[[nSel]]**: 2 a 6 en sistemas manuales; hasta 12 o más en grúas industriales complejas.\r
\r
**[[eta]]**: 0.80 a 0.98; sistemas nuevos y bien lubricados alcanzan valores altos, mientras que equipos desgastados pueden caer hasta 0.60.\r
\r
**[[F_ideal]]**: Desde la mitad de [[W]] (dos tramos) hasta una décima parte (diez tramos).\r
\r
**[[F_real]]**: Típicamente 20% a 50% mayor que [[F_ideal]] debido a pérdidas mecánicas.\r
\r
Estos órdenes permiten validación rápida: una fuerza de tracción de 500 N para una carga de 1000 N con seis tramos es claramente incorrecta (debería ser menor a 200 N).\r
\r
## Método de resolución personalizado\r
\r
Procedimiento para resolver problemas de poleas compuestas:\r
\r
1. **Dibujar el diagrama**: Esquematizar todas las poleas, la carga, y trazar cada tramo de cuerda desde la carga hasta el punto de tracción.\r
\r
2. **Contar tramos portantes**: Identificar cuántos tramos de cuerda sostienen directamente la carga o las poleas móviles. Este es [[nSel]].\r
\r
3. **Estimar eficiencia**: Asignar un valor razonable de [[eta]] según el contexto (0.9 para sistemas nuevos, 0.8 para equipos usados).\r
\r
4. **Seleccionar fórmula**: Usar la ideal si se ignoran pérdidas; usar la real con [[eta]] si se requiere precisión práctica.\r
\r
5. **Despejar la incógnita**: Aplicar álgebra para obtener la magnitud desconocida.\r
\r
6. **Validar**: Verificar que [[F_real]] > [[F_ideal]], que [[eta]] está entre 0 y 1, y que los órdenes de magnitud son físicamente razonables.\r
\r
## Casos especiales y ejemplo extendido\r
\r
**Caso especial 1 — Sistema de polea móvil simple**: Una única polea móvil con dos tramos proporciona ventaja mecánica 2 idealmente. Este es el caso más simple de polea compuesta, base de todos los sistemas más complejos.\r
\r
**Caso especial 2 — Bloqueo mecánico**: Si la carga es tal que [[F_real]] supera la fuerza que puede aplicar un operador humano, el sistema no puede moverse sin ayuda adicional (mecanismo de tracción mecánica).\r
\r
**Ejemplo extendido — Grúa de aparejo naval**: Un sistema con cuatro poleas móviles y ocho tramos portantes, elevando anclas de 5000 kg. Incluye cálculo iterativo considerando el peso propio de las poleas móviles (200 kg cada una) y la eficiencia decreciente con la carga.\r
\r
## Preguntas reales del alumno\r
\r
**¿Por qué no usar siempre el máximo número de tramos posible?**\r
Cada polea añade peso propio, rozamiento y complejidad. Más allá de cierto punto (típicamente 6-8 tramos), las pérdidas por rozamiento de las poleas adicionales compensan la ganancia teórica de ventaja mecánica.\r
\r
**¿Qué pasa si la cuerda se desliza sobre las poleas?**\r
El deslizamiento indica fricción cinética entre cuerda y polea, que no está modelado. El sistema pierde eficiencia drásticamente y puede ser peligroso. Las poleas deben tener ranuras o guías que eviten el deslizamiento.\r
\r
**¿Por qué la cuerda debe ser más larga con más tramos?**\r
Para elevar la carga una distancia h, cada tramo debe acortarse en h. Con [[nSel]] tramos, debes tirar [[nSel]] × h de cuerda. Es el preciso de la ventaja mecánica: menos fuerza pero más distancia.\r
\r
**¿Dónde se usa esto en la realidad?**\r
Grúas de construcción, sistemas de rescate en montaña, aparejos en veleros, montacargas industriales, y cualquier situación donde humanos necesiten mover cargas que superan su fuerza natural.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
**Prerequisitos esenciales:**\r
- Concepto de fuerza y equilibrio estático\r
- Principio de trabajo mecánico\r
- Noción de rozamiento y eficiencia\r
\r
**Continuaciones naturales:**\r
- Máquinas simples (palancas, planos inclinados, tornillos)\r
- Energía y potencia en sistemas mecánicos\r
- Ingeniería mecánica y diseño de mecanismos\r
\r
**Aplicaciones directas:**\r
- Sistemas de elevación industrial\r
- Equipos de rescate y emergencia\r
- Navegación a vela (aparejos)\r
- Montacargas y ascensores de carga\r
\r
**Conexión histórica:**\r
Las poleas compuestas fueron fundamentales en la construcción de monumentos antiguos (pirámides, templos griegos) y en el desarrollo de la navegación a vela durante el Renacimiento.\r
\r
## Síntesis final\r
\r
Las poleas compuestas encapsulan la esencia de las máquinas simples: multiplicar fuerza mediante redistribución del esfuerzo. La fórmula muestra que la fuerza requerida es inversamente proporcional al número de tramos portantes, aunque las pérdidas reales limitan esta reducción.\r
\r
Dominar este leaf significa comprender cómo contar correctamente los tramos, cómo estimar eficiencias realistas, y reconocer los límites donde el modelo ideal requiere ajustes. Estas habilidades son transferibles a todo tipo de sistemas mecánicos donde se busque optimizar la relación entre esfuerzo humano y carga movida.\r
`;export{e as default};
