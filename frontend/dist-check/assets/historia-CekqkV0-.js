const e=`## Problema histórico

Durante siglos, la naturaleza del sonido fue objeto de especulación filosófica más que de investigación cuantitativa. La pregunta central que no tenía respuesta científica precisa era: ¿qué viaja exactamente del músico al oyente? ¿Es una sustancia, un movimiento del aire, o algo más abstracto? Los griegos reconocían que el sonido requería aire o algún medio material, pero no disponían de herramientas conceptuales para describir el proceso cuantitativamente.

El problema tomó forma matemática concreta en el siglo XVII, cuando la mecánica newtoniana proporcionó por primera vez un lenguaje para describir el movimiento de las partículas de un medio elástico. La pregunta específica que desafiaba a los físicos era: ¿a qué velocidad se propaga la perturbación y cómo depende esa velocidad de las propiedades del medio? Esta pregunta era tanto teórica como práctica: los artilleros militares de la época usaban el retraso entre el destello y el estruendo de un cañón para estimar distancias, y tener una fórmula precisa para [[v_son]] era de interés estratégico.

## Dificultad conceptual previa

El obstáculo principal era de naturaleza termodinámica y conceptual: Newton asumió en su cálculo de [[v_son]] que las compresiones sonoras eran un proceso **isotérmico**, es decir, que la temperatura del aire no cambiaba al comprimirse porque el calor generado se disipaba instantáneamente hacia el entorno. Bajo esta hipótesis, [[v_son]] resultaba proporcional a la raíz cuadrada del cociente entre la presión y la densidad del gas.

El problema era que el valor predicho (en torno a 280 m/s) era sistemáticamente un 15% menor que el medido experimentalmente (en torno a 330 m/s a la temperatura de los experimentos de Newton). Newton era consciente de esta discrepancia y propuso correcciones ad hoc basadas en el tamaño de las partículas de aire, sin éxito. La física del siglo XVII no disponía del concepto de proceso adiabático ni de la capacidad calorífica de los gases, herramientas imprescindibles para resolver el problema correctamente.

La dificultad real era que el sonido ocurre demasiado rápido para ser isotérmico: las compresiones no tienen tiempo de intercambiar calor con el entorno antes de que llegue la rarefacción siguiente. Sin la distinción entre proceso isotérmico y adiabático, cualquier cálculo de [[v_son]] en un gas estaba condenado al error.

## Qué cambió

La corrección llegó en 1822, cuando Pierre-Simon Laplace publicó el análisis correcto del proceso de compresión sonora, demostrando que debía tratarse como un proceso **adiabático**, no isotérmico. En un proceso adiabático, la compresión eleva localmente la temperatura del gas, lo que aumenta la presión efectiva de restauración más de lo que predecía el modelo isotérmico de Newton.

El factor corrector que Laplace introdujo fue el cociente de capacidades caloríficas del gas a presión y volumen constantes, denominado coeficiente adiabático y cuyo valor para el aire diatómico es aproximadamente 1.4. Al multiplicar por la raíz cuadrada de este factor, la [[v_son]] calculada pasó a coincidir con la medida experimental con una precisión del orden del 1%, validando de forma contundente el modelo de onda mecánica longitudinal adiabática.

Este avance fue posible gracias al desarrollo simultáneo de la calorimetría y la termodinámica de gases, que en las décadas anteriores habían establecido la distinción entre calor específico a presión y volumen constantes. Laplace supo conectar ese conocimiento termodinámico con el problema de la propagación sonora.

## Impacto en la física

La corrección de Laplace tuvo consecuencias que iban mucho más allá de la simple mejora en el cálculo de [[v_son]]. Primero, estableció que la propagación del sonido es un fenómeno fundamentalmente termodinámico, no solo mecánico: las propiedades elásticas de un gas están gobernadas por su comportamiento térmico. Segundo, puso de manifiesto que existen procesos físicos con escalas de tiempo tan cortas que el intercambio térmico con el entorno es despreciable, anticipando conceptos que serían fundamentales para la termodinámica del siglo XIX.

La descripción matemática completa de la onda sonora como solución de la ecuación de onda unidimensional fue desarrollada por Leonhard Euler en la segunda mitad del siglo XVIII, formalizando las magnitudes de [[p_ac]], [[xi]] y [[v_son]] como campos que satisfacen ecuaciones diferenciales parciales derivadas de las leyes de Newton y de la compresibilidad del fluido.

## Conexión con física moderna

La naturaleza del sonido como onda mecánica longitudinal no es un concepto histórico sino una herramienta activa en la física y la ingeniería contemporáneas. El modelado de la propagación del sonido en medios complejos (tejidos biológicos, materiales porosos, océanos) utiliza exactamente las mismas magnitudes fundamentales —[[p_ac]], [[I_ac]], [[f_son]], [[lambda_son]] y [[v_son]]— que fueron definidas en los siglos XVII al XIX, pero en el marco de ecuaciones de onda vectoriales y métodos numéricos de elementos finitos o diferencias finitas.

La física de los sólidos cuánticos ha extendido el concepto de onda mecánica a las escalas atómicas: los **fonones** son los cuantos de vibración de la red cristalina, análogos cuánticos directos de las ondas sonoras clásicas. La relación de dispersión entre [[f_son]] (frecuencia) y [[lambda_son]] (longitud de onda), que en el modelo clásico es lineal, se vuelve no lineal para fonones de alta frecuencia, revelando la estructura discreta de la materia a escala atómica.
`;export{e as default};
