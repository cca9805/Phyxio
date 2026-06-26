const e=`# Gas ideal\r
\r
## Contexto conceptual\r
\r
El **gas ideal** es el modelo físico más fundamental de la termodinámica de gases. Describe un sistema formado por partículas puntuales que no interactúan entre sí salvo en colisiones perfectamente elásticas con las paredes del recipiente. La ley que lo gobierna relaciona las cuatro variables macroscópicas del sistema — **presión** [[P]], **volumen** [[V]], **temperatura** [[T]] y **cantidad de sustancia** [[n]] — en una única ecuación de estado.\r
\r
La importancia del gas ideal no reside en que ningún gas real se comporte exactamente así, sino en que constituye el límite de baja densidad al que todos los gases reales convergen. Conocer el modelo ideal y sus condiciones de validez es el punto de partida indispensable para entender cualquier proceso termodinámico con gases, y la base sobre la que se construyen los modelos más precisos como la ecuación de Van der Waals.\r
\r
## 🟢 Nivel esencial\r
\r
Las moléculas de un gas se mueven en todas direcciones y chocan continuamente contra las paredes del recipiente. Cada choque transfiere un pequeño impulso a la pared, y el promedio de miles de millones de esos choques por segundo sobre cada metro cuadrado es lo que medimos como [[P]].\r
\r
El gas ideal resume tres intuiciones físicas simples: cuantas más moléculas haya ([[n]] mayor), más choques ocurren y [[P]] sube; si el gas se calienta ([[T]] mayor), las moléculas se mueven más rápido, golpean con más fuerza y [[P]] sube; si el recipiente se hace más grande ([[V]] mayor), las moléculas tardan más en llegar a la pared y [[P]] baja. La **ley del gas ideal** une estas tres ideas en una sola ecuación: el producto [[P]]·[[V]] es proporcional al producto [[n]]·[[T]], con la constante universal [[R]] como factor de proporcionalidad.\r
\r
> [!NOTE]\r
> La temperatura **siempre** debe expresarse en **kelvin** (K). Usar grados Celsius produce resultados erróneos: a 25 °C la temperatura correcta es 298 K, no 25 K. Introducir 25 en lugar de 298 hace que el resultado calculado sea unas 12 veces menor de lo correcto.\r
\r
## 🔵 Nivel formal\r
\r
La ley del gas ideal se escribe:\r
\r
{{f:ley_gas_ideal}}\r
\r
donde [[P]] se expresa en pascales, [[V]] en metros cúbicos, [[n]] en moles, [[R]] = 8.314 J/(mol·K) y [[T]] en kelvin. La constante [[R]] es el factor de proporcionalidad universal que conecta la escala macroscópica de energía por mol con la escala de temperatura absoluta; su valor exacto es consecuencia directa de las definiciones del Sistema Internacional adoptadas en 2019.\r
\r
La ecuación es lineal en cada una de sus cuatro variables: duplicar [[n]] a [[P]], [[V]] y [[T]] fijos duplica exactamente el producto [[P]]·[[V]]; duplicar [[T]] a [[n]] y [[V]] fijos duplica [[P]]. Esta linealidad cuádruple es la huella matemática de la hipótesis de no interacción: cada molécula contribuye de forma independiente y aditiva.\r
\r
Despejando cada variable:\r
\r
- Para obtener [[P]]: dividir el producto de [[n]], [[R]] y [[T]] entre [[V]].\r
- Para obtener [[V]]: dividir el producto de [[n]], [[R]] y [[T]] entre [[P]].\r
- Para obtener [[T]]: dividir el producto de [[P]] y [[V]] entre el producto de [[n]] y [[R]].\r
- Para obtener [[n]]: dividir el producto de [[P]] y [[V]] entre el producto de [[R]] y [[T]].\r
\r
Cuando el sistema permanece cerrado con [[n]] constante, la **ley combinada** relaciona directamente los estados inicial y final del sistema sin necesidad de calcular [[n]] ni [[R]] explícitamente:\r
\r
{{f:ley_combinada_gases}}\r
\r
En esta expresión los subíndices 1 y 2 identifican el estado inicial y el estado final respectivamente. La constante del segundo miembro es el mismo cociente [[P]]·[[V]]/[[T]] evaluado en el estado inicial.\r
\r
El modelo se basa en cuatro hipótesis que deben verificarse para su aplicación:\r
\r
1. Las moléculas son partículas puntuales (su volumen propio es despreciable frente a [[V]]).\r
2. No existen fuerzas intermoleculares salvo durante la colisión.\r
3. Las colisiones son perfectamente elásticas (se conserva la energía cinética total).\r
4. El gas se halla en equilibrio termodinámico o en un proceso cuasiestático.\r
\r
> [!TIP]\r
> A condiciones normales (0 °C, 1 atm), el **volumen molar** de cualquier gas ideal es exactamente 22.4 L/mol (equivalente a 0.0224 m³/mol). Este valor sirve de referencia rápida: si al calcular con un mol se obtiene un [[V]] muy diferente de 22.4 L, hay que revisar las unidades.\r
\r
## 🔴 Nivel estructural\r
\r
La ley del gas ideal es el límite termodinámico de baja densidad (n/[[V]] → 0) de cualquier fluido. En ese límite, la distancia media entre moléculas es mucho mayor que el radio de interacción molecular, de modo que las fuerzas de Van der Waals y el volumen excluido son negligibles. La ecuación de estado resultante es lineal en cada variable individual y es la misma para todo gas, independientemente de la naturaleza química de las moléculas: esa **universalidad** es la consecuencia más profunda de la hipótesis de no interacción.\r
\r
La constante [[R]] no es arbitraria: es el producto del número de Avogadro (N_A ≈ 6.022 × 10²³ mol⁻¹) y la constante de Boltzmann (k_B ≈ 1.381 × 10⁻²³ J/K). Desde el punto de vista microscópico, k_B·[[T]] es la energía térmica típica de un grado de libertad por molécula, y [[R]]·[[T]] es la energía térmica por mol. Esto conecta la escala macroscópica de la termodinámica con la escala molecular de la mecánica estadística.\r
\r
**Dominio de validez cuantitativo.** El modelo ideal es fiable con errores inferiores al 1 % cuando [[P]] no supera ~10 atm y [[T]] supera el doble de la temperatura crítica del gas. Para N₂ (T_c: 126 K) esto cubre la mayoría de condiciones de laboratorio; para CO₂ (T_c: 304 K) la ley falla apreciablemente por encima de 20 atm a temperatura ambiente. El indicador de fallo es el **factor de compresibilidad** Z —cociente P·V/(n·R·T)—: si Z difiere de la unidad en más del 5 %, el modelo ideal no es suficiente.\r
\r
> [!WARNING]\r
> La ley del gas ideal describe **estados de equilibrio**. En procesos rápidos o no cuasiestáticos (una explosión, una expansión libre), [[P]] y [[T]] no son uniformes en todo el sistema y la ecuación de estado no puede aplicarse al proceso en curso: solo es válida para los estados inicial y final de equilibrio.\r
\r
## Interpretación física profunda\r
\r
La presión en un gas ideal emerge como promedio estadístico de la transferencia de momento lineal de las moléculas a las paredes. En el límite termodinámico, ese promedio es proporcional a la densidad numérica de moléculas y a la energía cinética media traslacional de cada una. La temperatura es exactamente proporcional a esa energía cinética media, con constante de proporcionalidad 2/(3·k_B). Este vínculo entre [[T]] y la energía cinética es el puente entre la termodinámica macroscópica y la teoría cinética microscópica.\r
\r
La linealidad de la ley del gas ideal en [[n]] a ([[P]], [[T]]) fijas refleja que las moléculas son estadísticamente independientes: añadir un mol más no altera el comportamiento de los que ya estaban. Esta independencia estadística es exacta en el modelo ideal y se rompe en los gases reales a alta densidad, donde la correlación entre posiciones de moléculas vecinas se vuelve significativa.\r
\r
## Orden de magnitud\r
\r
A condiciones de laboratorio (1 atm, 25 °C):\r
\r
- Volumen molar: ≈ 24.5 L/mol (equivalente a 0.0245 m³/mol).\r
- Para un globo de 5 L a presión atmosférica y 25 °C: [[n]] ≈ 0.204 mol, es decir, unos 1.23 × 10²³ moléculas.\r
- La distancia media entre moléculas de N₂ a 1 atm y 25 °C es ≈ 3.4 nm, unas diez veces el diámetro molecular: la hipótesis de gas diluido es una excelente aproximación.\r
\r
A alta presión (100 atm, 300 K):\r
\r
- Volumen molar ideal: ≈ 0.245 L/mol; el valor real para N₂ es ≈ 0.237 L/mol (Z ≈ 0.97). La desviación del 3 % es aceptable para cálculos de ingeniería de precisión media.\r
\r
## Método de resolución personalizado\r
\r
1. **Identificar la incógnita**: ¿qué variable (P, V, T o n) se busca?\r
2. **Listar los datos con unidades**: convertir [[T]] a kelvin sumando 273.15, [[V]] a m³ dividiendo litros entre 1000, [[P]] a pascales si se usa [[R]] = 8.314 J/(mol·K).\r
3. **Seleccionar el despeje**: elegir la forma de la ley del gas ideal que aísla la incógnita.\r
4. **Sustituir y calcular**: verificar que las unidades cancelan correctamente (pascales × metros cúbicos = julios).\r
5. **Validar el resultado**: una presión de laboratorio típica está entre 10³ y 10⁶ Pa; el volumen molar a presiones ordinarias es del orden de 10–25 L/mol.\r
\r
> [!TIP]\r
> Si el enunciado da condiciones iniciales y finales de un mismo sistema cerrado ([[n]] constante), usar la **ley combinada**: el cociente del producto [[P]]·[[V]] entre [[T]] se conserva, evitando calcular explícitamente [[n]] y [[R]].\r
\r
## Casos especiales y ejemplo extendido\r
\r
**Proceso isotérmico** ([[T]] constante — ley de Boyle): el producto [[P]]·[[V]] se conserva. La isoterma es una hipérbola en el diagrama P–V.\r
\r
**Proceso isobárico** ([[P]] constante — ley de Charles): el cociente [[V]]/[[T]] se conserva. Un globo que pasa de 20 °C (293 K) a 60 °C (333 K) aumenta su volumen en el factor 333/293 ≈ 1.14.\r
\r
**Proceso isocórico** ([[V]] constante — ley de Gay-Lussac): el cociente [[P]]/[[T]] se conserva. Un recipiente sellado calentado de 20 °C a 100 °C experimenta un aumento de presión del 27 %.\r
\r
**Mezcla de gases ideales** (ley de Dalton): la [[P]] total es la suma de las presiones parciales de cada componente, cada una calculada como si ocupara sola el volumen total a la misma temperatura.\r
\r
## Preguntas reales del alumno\r
\r
**¿Por qué tengo que usar kelvin? ¿No podría usar Celsius?**\r
\r
No. La ley del gas ideal exige [[T]] en kelvin porque mide la energía cinética absoluta de las moléculas desde el cero absoluto. A 0 °C la energía cinética no es cero; solo lo es a 0 K (−273.15 °C). Usar Celsius produce errores del 50–100 % a temperaturas cotidianas.\r
\r
**¿Cuándo deja de ser válida la ley del gas ideal?**\r
\r
Cuando las moléculas están muy próximas entre sí, es decir, a alta [[P]] o baja [[T]] próxima al punto de condensación. Regla práctica: si el factor de compresibilidad Z difiere de 1 en más del 5 %, conviene usar la ecuación de Van der Waals u otra más precisa.\r
\r
**¿Qué significa físicamente [[R]]?**\r
\r
[[R]] es la energía cinética traslacional media por mol y por kelvin. Su valor 8.314 J/(mol·K) indica que, al subir 1 K la temperatura de 1 mol de gas ideal, su energía cinética traslacional total aumenta en (3/2)R ≈ 12.5 J.\r
\r
**¿El gas ideal existe realmente?**\r
\r
No en sentido estricto. Es una idealización que los gases reales a baja densidad (aire a presión atmosférica, gases nobles en condiciones ordinarias) aproximan con errores menores al 1 %. La utilidad del modelo reside precisamente en esa simplificación matemática radical.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
La ley del gas ideal es la base de la [termodinámica de procesos](leaf:física-clasica/termodinámica/gases-y-modelos/procesos-termodinámicos): cualquier proceso cuasiestático en un gas — isotérmico, isobárico, isocórico, adiabático — se describe como una trayectoria sobre la superficie definida por la ley del gas ideal. El trabajo realizado en cada proceso es la integral del producto [[P]]·d[[V]] a lo largo de esa trayectoria.\r
\r
La [teoría cinética de gases](leaf:física-clasica/termodinámica/gases-y-modelos/teoria-cinética) proporciona la justificación microscópica: [[P]] surge del promedio estadístico de choques moleculares y [[T]] es proporcional a la energía cinética media de traslación. La conexión entre ambas perspectivas —macroscópica y microscópica— es uno de los logros conceptuales más importantes de la física clásica.\r
\r
Las desviaciones del comportamiento ideal conectan con la [ecuación de estado de Van der Waals](leaf:física-clasica/termodinámica/gases-y-modelos/ecuaciones-de-estado) y con la física molecular: los parámetros a y b reflejan las interacciones intermoleculares que explican propiedades como la tensión superficial y los puntos de ebullición.\r
\r
## Síntesis final\r
\r
El gas ideal es el modelo más simple y más poderoso de la termodinámica de gases: con cuatro variables macroscópicas mensurables y una constante universal, describe el estado de cualquier gas de baja densidad. Su dominio de validez es amplio en la práctica — aire, N₂, O₂, gases nobles a condiciones ordinarias de laboratorio — y sus desviaciones se modelan sistemáticamente con ecuaciones de estado más precisas. Dominar este modelo, incluidas sus hipótesis y sus límites, es el punto de partida indispensable para cualquier problema termodinámico con gases.\r
`;export{e as default};
