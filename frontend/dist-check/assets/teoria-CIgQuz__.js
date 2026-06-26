const e=`# Normal en planos\r
\r
## Contexto conceptual\r
\r
La fuerza normal [[N]] no es una fuerza "misteriosa" ni una copia automática del peso. Es la respuesta de contacto que una superficie produce para impedir la interpenetración de cuerpos dentro de un modelo mecánico concreto. En un plano horizontal, puede coincidir con la carga vertical efectiva en condiciones simples. En un plano inclinado, esa equivalencia deja de ser directa: la geometría representada por [[theta]] redistribuye el peso y solo una componente actúa perpendicular al plano.\r
\r
Esta idea tiene valor didáctico y operativo. Didáctico, porque obliga a diferenciar "fuerza total" de "componente relevante por eje". Operativo, porque una mala lectura de [[N]] genera errores en fricción, contacto, soporte estructural y validación de seguridad. En ingeniería, calcular bien [[N]] no es una formalidad: determina si hay contacto sostenido, si el diseño transmite carga dentro de límites y si el modelo elegido sigue siendo válido.\r
\r
El leaf también incorpora escenarios no ideales mediante [[Fextn]] y [[aperp]]. Con [[Fextn]] representamos fuerzas externas perpendiculares adicionales; con [[aperp]] representamos aceleración perpendicular no nula. Esto amplía el tema desde casos de aula hasta contextos reales donde hay actuadores, vibración, maniobras o forzamientos transitorios.\r
\r
## 🟢 Nivel esencial\r
\r
En nivel esencial conviene fijar tres preguntas simples antes de escribir ecuaciones:\r
\r
1. ¿Qué eje es perpendicular al plano y cuál es tangencial?\r
2. ¿Qué fuerzas tienen componente sobre el eje perpendicular?\r
3. ¿El sistema mantiene contacto activo o está en el límite de perderlo?\r
\r
Si se responde bien a esas preguntas, la lectura física mejora inmediatamente. [[N]] se interpreta como una reacción de contacto dependiente de geometría y balance dinámico, no como una constante predefinida. En este nivel, el foco no está en operar expresiones, sino en reconocer qué variable empuja el sistema hacia mayor o menor compresión de contacto.\r
\r
Un error típico de nivel inicial es pensar que más inclinación implica mayor normal. Ocurre lo contrario en el caso base: al aumentar [[theta]], la componente perpendicular del peso disminuye y [[N]] suele reducirse. Otro error típico es olvidar que la condición de contacto es unilateral: la superficie empuja, pero no tira. Por eso no tiene sentido aceptar resultados de [[N]] negativos como "válidos" sin revisar hipótesis.\r
\r
En síntesis esencial: la normal nace del contacto, depende del eje elegido, y su valor cambia cuando cambian geometría, carga perpendicular adicional o estado dinámico perpendicular.\r
\r
## 🔵 Nivel formal\r
\r
La formulación formal del leaf se organiza de lo simple a lo general.\r
\r
Caso base horizontal:\r
\r
{{f:normal_horizontal_base}}\r
\r
Caso base inclinado sin aceleración perpendicular:\r
\r
{{f:normal_inclinado_base}}\r
\r
Balance perpendicular general (incluye fuerza externa y dinámica perpendicular):\r
\r
{{f:balance_perpendicular_general}}\r
\r
Criterio de contacto unilateral:\r
\r
{{f:condicion_contacto}}\r
\r
Relación útil para despejar [[g]] en escenario horizontal ideal:\r
\r
{{f:gravedad_desde_normal_horizontal}}\r
\r
Este bloque formal permite una estrategia robusta:\r
\r
1. Declarar ejes y signos.\r
2. Escribir balance perpendicular con las magnitudes que realmente actúan.\r
3. Simplificar según hipótesis (por ejemplo, [[aperp]]=0 o [[Fextn]]=0 cuando aplique).\r
4. Resolver [[N]] y verificar restricción de contacto.\r
\r
Relaciones de trabajo frecuentes en el nivel formal:\r
\r
- [[N]] = [[m]]*[[g]]*cos([[theta]]) en el caso base inclinado.\r
- [[N]] + [[Fextn]] - [[m]]*[[g]]*cos([[theta]]) = [[m]]*[[aperp]] en el caso general.\r
- Si [[Fextn]] aumenta hacia el plano y el resto se mantiene, [[N]] aumenta.\r
- Si [[theta]] aumenta en el caso base, [[N]] disminuye por proyección geométrica.\r
\r
La potencia de este nivel no está en memorizar cinco expresiones, sino en elegir la que corresponde al contexto. En problemas reales, la ecuación correcta cambia cuando cambia una hipótesis pequeña: agregar un actuador normal, imponer oscilación perpendicular o variar la definición de ángulo puede mover el análisis de la forma base a la forma general.\r
\r
## 🔴 Nivel estructural\r
\r
El nivel estructural responde la pregunta crítica: ¿cuándo el modelo es suficientemente bueno para decidir y cuándo deja de serlo? No basta con obtener un valor de [[N]]; hay que evaluar validez, sensibilidad y consecuencias.\r
\r
Criterios estructurales prácticos:\r
\r
- Coherencia física: [[N]] debe respetar la condición de contacto unilateral.\r
- Coherencia geométrica: la dirección de [[N]] debe permanecer perpendicular a la superficie local.\r
- Coherencia dinámica: si se modela [[aperp]] no nula, esa hipótesis debe estar respaldada por el escenario.\r
- Coherencia de cargas: [[Fextn]] debe representar solo componentes perpendiculares, sin contaminar eje tangencial.\r
\r
Señales de que conviene escalar el modelo:\r
\r
- El cálculo exige [[N]]<0 en un régimen donde se observa contacto continuo.\r
- Pequeñas variaciones de [[theta]] o [[Fextn]] producen cambios desproporcionados incompatibles con medición.\r
- El plano real no puede aproximarse como superficie rígida localmente plana.\r
- La dinámica perpendicular presenta acoplamientos que el balance simplificado no captura.\r
\r
Transición explícita de modelo: si el error entre predicción y observación supera de forma sistemática un umbral operativo (por ejemplo, 5 a 10 por ciento en ensayos repetidos) o si la condición de contacto se viola de forma recurrente, se debe pasar a un modelo extendido (contacto con complianza, deformación de superficie, o dinámica multieje acoplada).\r
\r
Este enfoque evita dos extremos dañinos: sobre-simplificar por comodidad y sobre-complejizar sin necesidad. El criterio correcto es precisión suficiente para decisión física defendible.\r
\r
## Interpretación física profunda\r
\r
Interpretar [[N]] significa leer causalidad, no solo reportar números. Si [[theta]] aumenta y [[N]] disminuye en el caso base, el sistema está redistribuyendo el peso hacia el eje tangencial. Si [[Fextn]] empuja hacia el plano y [[N]] sube, el contacto se refuerza. Si aparece [[aperp]] positiva en el sentido elegido, el balance exige más reacción para sostener la dinámica perpendicular.\r
\r
Esta lectura causal conecta con seguridad y diseño. Una [[N]] mayor puede mejorar estabilidad de contacto, pero también aumentar carga transmitida a la estructura soporte. Una [[N]] muy baja puede reducir carga normal, pero acercar al sistema a pérdida de contacto, afectando control, fricción útil y robustez frente a perturbaciones.\r
\r
Por eso, el resultado útil no es "[[N]]=valor" aislado. El resultado útil incluye tendencia, margen respecto al límite de contacto y sensibilidad a cambios de [[theta]], [[Fextn]] y [[aperp]]. Esa triple lectura convierte cálculo en criterio.\r
\r
## Orden de magnitud\r
\r
Los órdenes de magnitud ayudan a detectar incoherencias tempranas:\r
\r
- [[m]] en prácticas educativas suele estar entre fracciones de kilogramo y varios kilogramos.\r
- [[g]] terrestre se aproxima a 9.8 en unidades de aceleración, con variaciones locales pequeñas para la mayoría de problemas introductorios.\r
- [[theta]] en rampas de laboratorio suele estar en intervalos moderados, no extremos cercanos a vertical.\r
- [[Fextn]] puede ser nula en el caso ideal o comparable a fracciones del peso en montajes forzados.\r
- [[aperp]] suele ser nula en equilibrio perpendicular, pero no necesariamente en sistemas vibratorios.\r
- [[N]] normalmente queda en el mismo orden de magnitud del peso proyectado en el eje perpendicular cuando no hay forzamientos dominantes.\r
\r
Si el resultado rompe estos patrones sin justificación física explícita, conviene revisar signos, ejes y unidades antes de seguir.\r
\r
## Método de resolución personalizado\r
\r
Protocolo recomendado para este leaf:\r
\r
1. Declarar sistema, ejes y convención de signos.\r
2. Dibujar diagrama de cuerpo libre con foco en componentes perpendiculares.\r
3. Identificar qué términos entran al balance: [[m]], [[g]], [[theta]], [[Fextn]], [[aperp]].\r
4. Escribir la relación formal adecuada y resolver [[N]].\r
5. Comprobar condición de contacto y consistencia dimensional.\r
6. Interpretar causalmente: qué variable domina y qué pasaría ante una variación razonable.\r
\r
Este método no solo reduce errores algebraicos; también obliga a justificar hipótesis antes de sustituir números.\r
\r
## Casos especiales y ejemplo extendido\r
\r
Caso especial de referencia: plano horizontal ideal con [[Fextn]]=0 y [[aperp]]=0. Sirve para verificar sentido de unidades y signos.\r
\r
Caso especial de inclinación extrema: al crecer [[theta]], la componente perpendicular del peso cae; en el límite geométrico, la normal del caso base puede tender a valores muy pequeños.\r
\r
Caso especial con forzamiento: si [[Fextn]] actúa hacia fuera del plano, puede reducir significativamente [[N]] y acercar al sistema al límite de contacto.\r
\r
Ejemplo extendido integrado: comparar dos configuraciones con mismo [[m]] y distinta [[theta]], luego añadir [[Fextn]] y finalmente introducir [[aperp]] para observar cómo el balance evoluciona de estático a dinámico sin cambiar el principio físico central.\r
\r
## Preguntas reales del alumno\r
\r
¿Por qué [[N]] no siempre vale [[m]]·[[g]]? Porque [[m]]·[[g]] es el peso total y [[N]] responde solo al balance perpendicular, que depende de [[theta]] y de términos adicionales.\r
\r
¿Qué pasa si obtengo [[N]] negativa? Es una alerta de modelo o de hipótesis: puede indicar pérdida de contacto o convención mal aplicada.\r
\r
¿Cuándo debo usar el balance general y no el caso base? Cuando exista [[Fextn]] relevante o [[aperp]] no nula, o cuando el problema lo exija explícitamente.\r
\r
¿Cómo sé si mi resultado es defendible? Si respeta condición de contacto, unidades, tendencia física esperable y consistencia con observación del sistema.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf conecta de manera natural con:\r
\r
- Dinámica con fricción, donde [[N]] modula fuerzas tangenciales máximas.\r
- Diseño de apoyo y contacto en estructuras y mecanismos.\r
- Modelado de rampas, transporte inclinado y sistemas de guía.\r
- Interpretación de diagramas de cuerpo libre en problemas multieje.\r
\r
Ruta sugerida: dominar primero el caso base sin [[Fextn]] ni [[aperp]], luego integrar forzamientos y dinámica perpendicular, y finalmente contrastar con modelos más completos cuando la validez del esquema simple se agote.\r
\r
## Síntesis final\r
\r
La normal en planos es un problema de balance perpendicular gobernado por geometría, carga y estado dinámico. [[N]] no se adivina: se construye desde hipótesis claras y se valida con criterios físicos. Al integrar [[m]], [[g]], [[theta]], [[Fextn]] y [[aperp]] en una lectura causal, el análisis deja de ser recetario y se vuelve herramienta de decisión mecánica confiable.\r
`;export{e as default};
