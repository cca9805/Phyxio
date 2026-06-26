const e=`# Historia

## Problema histórico

Durante los siglos XVI y XVII, los filósofos naturales y los médicos observaban diferencias de "calor" y "frío" entre cuerpos, pero carecían de un instrumento capaz de cuantificar esas diferencias de forma reproducible. La sensación táctil era subjetiva y dependía del estado previo del observador. La urgencia práctica era doble: la medicina necesitaba medir la fiebre con objetividad, y la astronomía y la química necesitaban registrar y comparar condiciones experimentales entre laboratorios distantes.

El problema central no era solo construir un termómetro —tubos con líquido que se dilatan con el calor ya los había construido Galileo hacia 1592— sino definir una **escala reproducible**: un sistema de referencia con puntos fijos que cualquier observador en cualquier lugar pudiera reproducir con el mismo instrumento. Sin una escala, dos termómetros distintos en dos laboratorios distintos eran incomparables.

## Dificultad conceptual previa

El obstáculo conceptual más profundo era la confusión entre **calor** y **temperatura**. Durante siglos, calor y temperatura se consideraban la misma cosa: una sustancia o cualidad del cuerpo caliente que se podía transferir. La teoría del calórico, dominante en el siglo XVIII, imaginaba el calor como un fluido material que fluía de cuerpos calientes a fríos. En ese marco, la temperatura era simplemente "cuánto calórico" tenía un cuerpo, y no había razón para distinguir el calor de la temperatura.

Esta confusión hacía imposible entender por qué dos cuerpos con la misma temperatura pero distinta masa absorbían cantidades diferentes de calor al calentarse. La distinción conceptual entre calor (magnitud de proceso, energía transferida) y temperatura (magnitud de estado, determinante del equilibrio térmico) solo se clarificó definitivamente con los trabajos de Black (1760) sobre calor específico y con la termodinámica del siglo XIX.

Una segunda dificultad era la definición de los puntos fijos de las escalas: ¿por qué el agua y no otro fluido? ¿A qué presión? ¿Cómo garantizar que el hielo o el vapor estén realmente en las condiciones de referencia? Estas preguntas metrológicas no tenían respuestas simples y generaron décadas de controversia.

## Qué cambió

El primer paso fue la construcción de termómetros con escala cuantitativa. Fahrenheit, alrededor de 1714, fue el primero en fabricar termómetros de mercurio con reproducibilidad suficiente para intercambiar entre laboratorios, usando como puntos fijos la temperatura del cuerpo humano y la de una mezcla de hielo y sal amónica. En 1742, Celsius propuso usar los puntos de fusión y ebullición del agua como referencias, con 100 divisiones entre ellos; inicialmente la escala estaba invertida (100 para el hielo, 0 para el vapor) y fue Linneo quien la invirtió a la forma actual.

El avance conceptual decisivo llegó con la termodinámica de Carnot (1824) y con la síntesis de Clausius y Thomson (Kelvin) en la década de 1850. Thomson demostró en 1848 que era posible definir una escala de temperatura **absoluta** basada en la eficiencia de una máquina de Carnot, independiente de cualquier material termométrico. Esta escala, que hoy llamamos kelvin en su honor, fijó el cero en el punto donde ningún trabajo podría extraerse de un motor térmico: el cero absoluto.

La escala kelvin transformó la temperatura de una medida empírica a una magnitud física fundamental con una definición precisa. Dejó de depender de las propiedades de ningún fluido particular y pasó a estar basada en principios termodinámicos universales.

## Impacto en la física

La definición termodinámica de temperatura tuvo consecuencias profundas que se desplegaron a lo largo del siglo XIX y XX. En primer lugar, permitió enunciar el **tercer principio de la termodinámica** (Nernst, 1906): la entropía de un cristal perfecto tiende a cero cuando [[T_K]] tiende a cero. Esto convirtió el cero absoluto de una extrapolación en una verdad fundamental y estableció que no puede alcanzarse en un número finito de pasos.

En segundo lugar, la escala absoluta fue imprescindible para el desarrollo de la **mecánica estadística** de Boltzmann y Gibbs. La temperatura emerge en ese marco como una propiedad de la distribución de energías de las partículas: [[T_K]] es proporcional a la energía cinética media de traslación en un gas ideal, con la constante de Boltzmann como factor de proporcionalidad. Esta conexión micro-macro convirtió la temperatura de un observable macroscópico en una magnitud con interpretación microscópica precisa.

En tercer lugar, la identificación de [[T_K]] como variable natural de la termodinámica estadística fue esencial para el desarrollo de la **radiación de cuerpo negro** y la crisis que llevó a la mecánica cuántica. Las leyes de Rayleigh-Jeans, Wien y Planck están escritas en [[T_K]], y la catástrofe ultravioleta de la física clásica se manifiesta precisamente porque los modos de alta frecuencia contribuyen por igual sin el factor de supresión cuántica que solo emerge cuando se usa [[T_K]] correctamente.

## Conexión con física moderna

La definición actual de la escala kelvin, vigente desde la revisión del SI de 2019, ya no se basa en el punto triple del agua (como en la ITS-90) sino en el valor fijo de la constante de Boltzmann. La constante de Boltzmann se ha fijado exactamente como 1.380649×10⁻²³ J/K, lo que define el kelvin como la variación de temperatura termodinámica que corresponde a una variación de energía de 1.380649×10⁻²³ julios. Esta definición desacopla completamente la escala de temperatura de cualquier propiedad de una sustancia particular.

En física de materia condensada, el concepto de temperatura negativa en sistemas con estados de energía acotada por arriba (como espines nucleares en campo magnético) es un objeto activo de investigación. En esos sistemas, la temperatura puede definirse formalmente con valores negativos usando la relación termodinámica fundamental, y una temperatura "negativa" en kelvin está de hecho "más caliente" que cualquier temperatura positiva. Este resultado, contraintuitivo pero rigurosamente correcto, ilustra hasta qué punto la temperatura moderna ha superado la intuición cotidiana de "caliente" y "frío".

En cosmología, la temperatura de la radiación de fondo de microondas (CMB) —el eco del Big Bang— es 2.725 K. Que el universo tenga una temperatura perfectamente medible y uniforme en todas las direcciones es uno de los hechos observacionales más asombrosos de la física y una consecuencia directa de la existencia de equilibrio térmico en el universo temprano.
`;export{e as default};
