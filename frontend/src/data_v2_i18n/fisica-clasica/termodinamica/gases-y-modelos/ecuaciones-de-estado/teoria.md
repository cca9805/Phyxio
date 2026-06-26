# Ecuaciones de estado

## Contexto conceptual

Una ecuación de estado es la relación matemática que conecta las variables macroscópicas de un sistema termodinámico: **presión** [[P]], **volumen** [[V]], **temperatura** [[T]] y **cantidad de sustancia** [[n]]. Su utilidad radica en que, conocidas tres de estas cuatro variables, la ecuación permite calcular la cuarta sin necesidad de describir el movimiento individual de ninguna molécula.

El concepto nace de la observación experimental sistemática: Boyle en el siglo XVII, Charles y Gay-Lussac en el XVIII y Avogadro a principios del XIX establecieron leyes parciales que finalmente se unificaron en la **ley del gas ideal**. Esta ecuación no describe un gas real, sino una idealización que los gases reales aproximan bien bajo condiciones de baja densidad.

La ecuación de estado es el puente entre la descripción microscópica de la materia (qué hacen las moléculas) y su descripción macroscópica (qué medimos con manómetros y termómetros). Comprender esta relación es comprender por qué los gases se comprimen al enfriarse, por qué los neumáticos se inflan más en verano o por qué el viento surge de diferencias de presión en la atmósfera.

## 🟢 Nivel esencial

Un gas ejerce [[P]] sobre las paredes de su recipiente porque sus moléculas chocan continuamente contra ellas. Cuantas más moléculas haya ([[n]] mayor), más choque habrá. Si el recipiente se calienta, las moléculas se mueven más rápido, golpean con más fuerza y [[P]] sube. Si el recipiente se agranda ([[V]] mayor), las moléculas tienen que recorrer más distancia entre choque y choque, y [[P]] baja.

La **ley del gas ideal** resume todo esto en una sola relación: el producto [[P]]·[[V]] es proporcional a [[n]] y a [[T]]. La constante de proporcionalidad es la **constante universal de los gases** [[R]], idéntica para cualquier gas ideal independientemente de su naturaleza química: ese es el hallazgo más sorprendente de esta ley.

> [!NOTE]
> La temperatura **siempre** debe expresarse en **kelvin** (K). Un error muy común es sustituir directamente grados Celsius: introducir 25 en lugar de 298 kelvin produce un resultado calculado de [[P]] o [[V]] aproximadamente 12 veces más pequeño que el correcto.

## 🔵 Nivel formal

La ley del gas ideal se expresa como:

{{f:ley_gas_ideal}}

donde [[P]] es la presión en pascales, [[V]] el volumen en metros cúbicos, [[n]] la cantidad de sustancia en moles, [[R]] = 8.314 J/(mol·K) y [[T]] la temperatura absoluta en kelvin.

La ecuación anterior puede despejarse para cualquiera de las cuatro variables:

- Para obtener [[P]]: dividir el producto de [[n]], [[R]] y [[T]] entre [[V]].
- Para obtener [[V]]: dividir el producto de [[n]], [[R]] y [[T]] entre [[P]].
- Para obtener [[T]]: dividir el producto de [[P]] y [[V]] entre el producto de [[n]] y [[R]].
- Para obtener [[n]]: dividir el producto de [[P]] y [[V]] entre el producto de [[R]] y [[T]].

Para gases **reales** con interacciones moleculares significativas, la ecuación de Van der Waals introduce dos correcciones:

{{f:van_der_waals}}

El término `a·n²/V²` corrige la presión a la baja porque las fuerzas de atracción entre moléculas reducen los impulsos contra las paredes. El parámetro `n·b` descuenta del volumen total el **volumen excluido** ocupado por las propias moléculas. Los parámetros a y b son específicos de cada gas y se encuentran tabulados experimentalmente.

> [!TIP]
> A condiciones normales (0 °C, 1 atm), el **volumen molar** de cualquier gas ideal vale exactamente 22.4 L/mol. Este dato sirve de referencia rápida: si al calcular con un mol se obtiene un [[V]] muy diferente de 22.4 L, hay que revisar las unidades.

## 🔴 Nivel estructural

La ley del gas ideal es el límite de baja densidad (n/V → 0) de cualquier ecuación de estado más general. En ese límite, las moléculas están tan separadas que sus interacciones mutuas son despreciables y su volumen propio es negligible: el gas es un conjunto de partículas puntuales sin interacción.

Cuando la densidad crece —al aumentar [[P]] o disminuir [[T]] cerca del punto de condensación— ambas hipótesis fallan simultáneamente: las moléculas se acercan lo suficiente para que las fuerzas de Van der Waals sean apreciables, y su propio volumen ocupa una fracción no despreciable del espacio total. La ecuación de Van der Waals captura estos dos efectos en dos parámetros, pero sigue siendo una aproximación: cerca de la transición de fase líquido–vapor muestra un **bucle de Maxwell** (regiones donde ∂P/∂V > 0) que carece de significado físico directo y debe tratarse con la construcción de Maxwell para encontrar la presión de coexistencia.

**Dominio de validez cuantitativo.** La ley del gas ideal es fiable con errores inferiores al 1 % cuando [[P]] no supera ~10 atm y [[T]] supera el doble de la temperatura crítica del gas. Para N₂ (temperatura crítica 126 K) esto cubre condiciones ordinarias de laboratorio; para CO₂ (temperatura crítica 304 K) la ley falla apreciablemente si [[P]] supera 20 atm. La señal de fallo es que el factor Z —cociente entre el producto [[P]]·[[V]] real y [[n]]·[[R]]·[[T]]— se aleje de la unidad más del 5 %.

La arquitectura de cualquier ecuación de estado refleja una **jerarquía de modelos**: cada nivel cubre un régimen que el anterior no puede describir. Más allá de Van der Waals existen ecuaciones como la de Peng–Robinson o la virial, usadas en ingeniería química a presiones industriales.

Desde el punto de vista de las variables de estado, hay que distinguir las **intensivas** ([[P]], [[T]], densidad molar) de las **extensivas** ([[V]], energía interna). La ley del gas ideal conecta ambos tipos: al dividir [[V]] entre [[n]] se obtiene el volumen molar, cuyo producto con [[P]] solo depende de [[T]] y [[R]], sin importar la cantidad total de gas. Esta separación es imprescindible para comparar estados de gases en condiciones distintas.

> [!WARNING]
> Las ecuaciones de estado describen **equilibrios termodinámicos**. En un proceso rápido no cuasiestático (explosión, expansión libre), [[P]] y [[T]] no son uniformes en todo el sistema y la ecuación de estado no puede aplicarse al proceso en curso: solo es válida para los estados de equilibrio inicial y final.

## Interpretación física profunda

La ley del gas ideal no es una ley fundamental derivada de primeros principios de la mecánica: es una **ley fenoménológica** verificada experimentalmente para gases de baja densidad. Su derivación rigurosa requiere mecánica estadística, donde [[P]] emerge como promedio temporal de la transferencia de momento lineal de las moléculas. El resultado en términos moleculares es equivalente a la ley del gas ideal, pues [[R]] es el producto del número de Avogadro por la constante de Boltzmann (k_B).

La linealidad en [[n]] a ([[P]], [[T]]) fijas refleja que el gas ideal no tiene **correlaciones entre moléculas**: añadir un mol más no altera el comportamiento de los que ya estaban. Esta independencia estadística es lo que falla en los gases reales a alta densidad.

## Orden de magnitud

A condiciones de laboratorio habitual (1 atm, 25 °C):

- Volumen molar: aproximadamente 24.5 L/mol (equivalente a 0.0245 m³/mol).
- Para un globo de 10 L a presión atmosférica y 25 °C: [[n]] es aproximadamente 0.41 mol, lo que representa unos 2.5 × 10²³ moléculas.

A alta presión industrial (200 atm, 300 K):

- Volumen molar ideal: ≈ 122 mL/mol; el valor real para N₂ es ≈ 118 mL/mol (Z ≈ 0.97), desviación del ~3%, aceptable para muchos propósitos.

Si un resultado da un volumen molar de 22.4 m³/mol en lugar de 22.4 L/mol, el factor de error es 1000: [[V]] se ha expresado en litros cuando la fórmula exige m³. Esta comparación con 22.4 L/mol es el check de sanidad más rápido.

## Método de resolución personalizado

1. **Identificar la incógnita**: ¿qué variable (P, V, T o n) se busca?
2. **Listar los datos con unidades**: convertir T a kelvin, [[V]] a m³, [[P]] a pascales si se usa [[R]] con su valor en el SI.
3. **Seleccionar el despeje**: elegir la forma de la ley del gas ideal que aísla la incógnita.
4. **Sustituir y calcular**: verificar que las unidades cancelan correctamente (pascales por metros cúbicos equivalen a julios).
5. **Validar el resultado**: una presión de laboratorio suele estar entre 10³ y 10⁶ Pa; un volumen de unos gramos de gas, entre 10⁻³ y 10⁻¹ m³.

> [!TIP]
> Si el enunciado da condiciones iniciales y finales de un mismo sistema cerrado ([[n]] constante), se puede usar la **ley combinada**: el cociente del producto [[P]]·[[V]] entre [[T]] se conserva entre el estado inicial y el final, evitando calcular explícitamente [[n]] y [[R]].

## Casos especiales y ejemplo extendido

**Proceso isotérmico** ([[T]] constante, ley de Boyle): el producto [[P]]·[[V]] se conserva. Al comprimir isotérmicamente a la mitad el volumen, [[P]] se dobla. La isoterma es una hipérbola en el diagrama P–V.

**Proceso isobárico** ([[P]] constante, ley de Charles): el cociente [[V]]/[[T]] se conserva. Un globo en un baño de agua caliente a 60 °C (333 K) en lugar de 20 °C (293 K) aumenta su volumen en el cociente 333/293 (aproximadamente 1.14), es decir un 14 %.

**Proceso isocórico** ([[V]] constante, ley de Gay-Lussac): el cociente [[P]]/[[T]] se conserva. Un recipiente sellado calentado de 20 °C a 100 °C (293 K a 373 K) experimenta un aumento de presión del 27 %.

**Mezcla de gases ideales** (ley de Dalton): la presión total es la suma de las presiones parciales de cada componente, calculadas como si cada uno ocupara el volumen total a la misma temperatura.

## Preguntas reales del alumno

**¿Por qué tengo que usar kelvin? ¿No podría usar Celsius si soy consistente?**

No. La ley del gas ideal requiere [[T]] en kelvin como medida de energía cinética absoluta. A 0 °C la energía cinética no es cero; solo a 0 K (−273.15 °C) lo es. Usar Celsius produce errores del 50–100 % en temperaturas cotidianas.

**¿Cuándo "falla" la ley del gas ideal?**

Cuando las moléculas están muy próximas (alta [[P]] o baja [[T]], cerca del punto de condensación). Una regla práctica: si el factor de compresibilidad Z difiere de 1 en más del 5 %, conviene usar una ecuación más precisa como Van der Waals.

**¿Qué significa exactamente [[R]]?**

[[R]] es la energía cinética media por mol y por kelvin. Su unidad J/(mol·K) indica que, al aumentar 1 K la temperatura de 1 mol de gas ideal, su energía cinética traslacional total aumenta en (3/2)R ≈ 12.5 J.

**¿Puede una ecuación de estado predecir condensación?**

La ley del gas ideal no puede: no distingue fases. La ecuación de Van der Waals predice cualitativamente la coexistencia líquido–vapor, aunque con errores cuantitativos cerca del punto crítico.

## Conexiones transversales y rutas de estudio

Las ecuaciones de estado son la base de la [termodinámica de procesos](leaf:física-clasica/termodinámica/gases-y-modelos/procesos-termodinámicos): cualquier proceso cuasiestático en un gas (isotérmico, isobárico, isocórico, adiabático) se describe trazando una trayectoria sobre la superficie de la ley del gas ideal. El trabajo realizado en cada proceso es la integral del producto [[P]]·d[[V]] a lo largo de esa trayectoria, que depende de cómo [[P]] varía con [[V]].

La [teoría cinética de gases](leaf:física-clasica/termodinámica/gases-y-modelos/teoria-cinética) proporciona la justificación microscópica: [[P]] es una consecuencia estadística del movimiento de las moléculas, y [[T]] es proporcional a su energía cinética media traslacional. Conectar las dos perspectivas —macroscópica (ecuación de estado) y microscópica (teoría cinética)— es uno de los logros conceptuales más importantes de la termodinámica clásica.

Las desviaciones del comportamiento ideal conectan con la física molecular: los parámetros a y b de Van der Waals reflejan las interacciones moleculares que explican propiedades como la tensión superficial y los puntos de ebullición.

## Síntesis final

La ley del gas ideal es la ecuación de estado más simple y usada de la termodinámica: el estado de cualquier gas de baja densidad queda determinado por tres variables macroscópicas mensurables. Sus desviaciones se modelan con extensiones como Van der Waals. Dominar esta relación —incluyendo sus límites— es el punto de partida para cualquier problema termodinámico con gases.
