const e=`# Concepto de Fluido

## Contexto conceptual

El concepto de fluido es la piedra angular de la mecánica de medios continuos. A diferencia de los sólidos, que tienen una forma definida y pueden resistir esfuerzos cortantes mediante deformaciones estáticas, los fluidos (líquidos y gases) se caracterizan por su capacidad de fluir. Esta capacidad no es simplemente una descripción cualitativa, sino una definición mecánica precisa: un fluido es una sustancia que se deforma continuamente bajo la aplicación de un esfuerzo cortante [[tau]], por pequeño que este sea.

En el estudio de la física, la transición de la mecánica de partículas a la mecánica de fluidos requiere un cambio de paradigma. Dejamos de seguir partículas individuales para analizar campos de velocidad [[V]], presión y densidad [[rho]]. Esta perspectiva, conocida como descripción euleriana, nos permite entender cómo masas de aire o agua interactúan con estructuras de área [[A]] determinada, transportan energía y sustentan la vida. El concepto de fluido nos permite tratar gases y líquidos bajo un mismo marco teórico, diferenciándolos principalmente por su grado de compresibilidad y la magnitud de su cohesión molecular.

## 🟢 Nivel esencial

A nivel intuitivo, asociamos los fluidos con cosas que "se derraman" o que "toman la forma del recipiente". Sin embargo, la diferencia fundamental radica en cómo reaccionan cuando intentamos "deslizarlos". Si empujas un bloque de madera (sólido) lateralmente, este se deformará un poco y luego se detendrá, manteniendo esa deformación mientras mantengas la fuerza aplicada. Si haces lo mismo con la superficie del agua, el agua se moverá y seguirá moviéndose mientras sigas empujando. No hay un equilibrio estático para el esfuerzo lateral en un fluido.

Podemos resumir las propiedades esenciales de un fluido en tres puntos:
1.  **Fluidez**: No tienen forma propia; adoptan la del recipiente.
2.  **Viscosidad**: Es la "fricción interna" que determina qué tan rápido fluyen. La miel es más viscosa [[mu]] que el agua.
3.  **Continuidad**: A escala macroscópica, tratamos al fluido como una sustancia continua, ignorando el espacio vacío entre moléculas.

Un ejemplo claro es el experimento de las dos placas: si pones una gota de aceite entre dos placas de vidrio y mueves la placa superior con una velocidad constante, el aceite se deformará continuamente creando un perfil de velocidades. La resistencia que sientes al mover la placa es el resultado directo de la viscosidad [[mu]] del fluido.

## 🔵 Nivel formal

Para formalizar esta definición, introducimos el concepto de esfuerzo cortante [[tau]] y la tasa de deformación definici?n de tasa de deformaci?n. Mientras que un sólido responde a [[tau]] con una deformación angular fija, un fluido responde con una tasa de deformación continua definida por la relación definici?n de tasa de deformaci?n. Esta conexión entre la dinámica y la cinemática es la base de la reología y permite cuantificar la fluidez mediante leyes constitutivas como la ley de Newton de la viscosidad ley de Newton de la viscosidad.

**1. Ley de Newton de la viscosidad:**
Para la gran mayoría de los fluidos comunes (llamados Newtonianos), el esfuerzo cortante [[tau]] es directamente proporcional al gradiente de velocidad [[du_dy]] (o tasa de deformación). La constante de proporcionalidad es la viscosidad dinámica [[mu]], expresada en la fórmula ley de Newton de la viscosidad:


{{f:newton_viscosity}}

{{f:shear_rate_def}}

{{f:viscosity_kinematic}}

{{f:shear_force_total}}

{{f:tangential_velocity_rot}}

{{f:omega_from_RPM}}

ley de Newton de la viscosidad

Esta relación ley de Newton de la viscosidad implica que para una viscosidad [[mu]] dada, duplicar el esfuerzo [[tau]] resultará en duplicar la tasa de deformación [[du_dy]]. El despeje de [[mu]] from [[tau]] es fundamental para medir la resistencia interna del fluido. Por tanto, la fórmula ley de Newton de la viscosidad es la herramienta principal de cálculo en este nivel.

**2. Tasa de deformación:**
La variable fundamental que describe el movimiento relativo de las capas es la tasa de deformación [[du_dy]], definida formalmente mediante la relación definici?n de tasa de deformaci?n. Esta magnitud definici?n de tasa de deformaci?n cuantifica la rapidez con la que el fluido cambia su forma bajo la acción de un esfuerzo. La relación definici?n de tasa de deformaci?n es la base para entender el flujo laminar.

**3. Viscosidad cinemática:**
En muchos problemas de ingeniería, es útil normalizar la viscosidad dinámica [[mu]] respecto a la densidad [[rho]]. Esta relación define la viscosidad cinemática [[nu]] mediante la ecuación definici?n de viscosidad cinem?tica. La fórmula definici?n de viscosidad cinem?tica representa la difusividad de la cantidad de movimiento, indicando qué tan rápido se propaga la información del esfuerzo a través del fluido. La expresión definici?n de viscosidad cinem?tica vincula así las propiedades dinámicas con las inerciales.

**4. Perfil de velocidades:**
En un flujo laminar entre dos placas, la velocidad [[V]] varía linealmente desde cero en la placa fija (condición de no deslizamiento) hasta la velocidad máxima en la placa móvil. El gradiente [[du_dy]] representa la pendiente de este perfil y vincula la cinemática con la dinámica de ley de Newton de la viscosidad. Si integramos la expresión ley de Newton de la viscosidad para un [[du_dy]] constante, obtenemos la distribución de velocidades en todo el espesor [[h]] del fluido. La ecuación ley de Newton de la viscosidad define así la transferencia de cantidad de movimiento entre capas adyacentes.

**5. Clasificación reológica:**
No todos los fluidos son Newtonianos. Algunos, como la sangre o la pintura, cambian su viscosidad [[mu]] dependiendo de qué tan rápido se deformen. Sin embargo, todos comparten la característica definitoria: mientras haya un esfuerzo [[tau]] no nulo en la relación ley de Newton de la viscosidad, habrá un movimiento [[du_dy]] no nulo. La resolución de [[mu]] from [[tau]] permite caracterizar estas sustancias experimentalmente y compararlas con fluidos ideales donde [[mu]] se considera constante. La ley ley de Newton de la viscosidad actúa como el modelo de referencia para cualquier análisis de fluidez.

## 🔴 Nivel estructural

Desde un punto de vista microscópico, la fluidez es el resultado del balance entre la energía térmica de las moléculas y sus fuerzas de cohesión. En los líquidos, las moléculas están cerca unas de otras pero tienen suficiente energía para deslizarse entre sí. En los gases, las moléculas están muy separadas y las fuerzas de cohesión son casi nulas, lo que explica por qué los gases son altamente compresibles y los líquidos no.

Estructuralmente, el tratamiento de un fluido como un "continuo" es una aproximación válida siempre que el camino libre medio de las moléculas sea mucho menor que las dimensiones del sistema que estamos analizando (número de Knudsen bajo). Si intentáramos analizar el aire a gran altura (donde está muy enrarecido) usando las leyes de fluidos estándar, fallaríamos porque la hipótesis del continuo se rompe.

Además, la viscosidad [[mu]] tiene orígenes estructurales distintos en gases y líquidos. En los gases, la viscosidad aumenta con la temperatura porque hay más colisiones moleculares que transportan cantidad de movimiento. En los líquidos, la viscosidad disminuye con la temperatura porque la energía térmica ayuda a romper los enlaces intermoleculares que dificultan el deslizamiento.

## Interpretación física profunda

La interpretación profunda del concepto de fluido nos lleva a entender que la materia no es "sólida" o "fluida" de forma absoluta, sino que depende de la escala de tiempo de la observación (número de Deborah). Un material que parece sólido, como el asfalto o incluso el manto terrestre a escalas geológicas, puede comportarse como un fluido si se le observa durante el tiempo suficiente.

En física de fluidos, la presión es una medida de la energía interna por unidad de volumen, mientras que la viscosidad [[mu]] representa la tasa de disipación de energía mecánica en calor. Entender un fluido es entender cómo la materia transporta y disipa energía mientras cambia de forma. Esta visión es esencial para la ingeniería moderna, permitiendo el diseño de todo, desde prótesis valvulares cardíacas hasta sistemas de refrigeración de reactores nucleares.

## Orden de magnitud

*   **Viscosidad dinámica**: El agua tiene una viscosidad [[mu]] de aproximadamente 10 elevado a -3  Pa s a temperatura ambiente. El aire es unas 50 veces menos viscoso (1.8  multiplicado por  10 elevado a -5  Pa s). La miel puede ser 10,000 veces más viscosa que el agua.
*   **Esfuerzos cortantes**: En microfluídica, los esfuerzos [[tau]] pueden ser de pocos Pascales, mientras que en lubricación de motores pueden alcanzar Megapascales.
*   **Densidad**: Los líquidos son típicamente 1000 veces más densos [[rho]] que los gases a presión atmosférica.
*   **Geometría**: El espesor [[h]] de la película y el radio [[R]] del eje definen la escala física del problema.

## Método de resolución personalizado

Para abordar problemas sobre la naturaleza de los fluidos:
1.  **Evaluar el régimen**: ¿El fluido es Newtoniano? Si es agua o aire en condiciones normales, la respuesta es sí.
2.  **Identificar el gradiente**: Observar cómo cambia la velocidad [[V]] con la distancia. En casos simples (placas paralelas), el gradiente [[du_dy]] es constante: V/h.
3.  **Aplicar la ley de viscosidad**: Usar ley de Newton de la viscosidad para calcular la fuerza tangencial [[F]] o la potencia disipada en una superficie de área [[A]].
4.  **Verificar la condición de contorno**: Asegurarse de que la velocidad del fluido en las paredes sea igual a la velocidad de la pared (no deslizamiento). En sistemas rotatorios, esto implica conocer la velocidad angular [[omega]] y el radio [[R]].

## Casos especiales y ejemplo extendido

**Superfluidos**: A temperaturas cercanas al cero absoluto, el helio-4 se convierte en un superfluido con viscosidad [[mu]] estrictamente cero. Esto significa que puede fluir sin disipar energía y trepar por las paredes de su recipiente, desafiando la gravedad y nuestra intuición clásica de fluido.

**Fluidos No-Newtonianos**: Sustancias como la mezcla de maicena y agua (oobleck) aumentan su viscosidad [[mu]] drásticamente cuando se les aplica un esfuerzo rápido. Se comportan como sólidos ante impactos pero fluyen como líquidos si se les maneja con suavidad.

**Ejemplo de extensión**: Consideremos el flujo de una masa de glaciar. Aunque el hielo es un sólido cristalino, a escalas de tiempo de años y bajo esfuerzos enormes, el hielo fluye. Su viscosidad es tan alta que el número de Deborah es muy grande, pero la física que rige su movimiento sigue los mismos principios de deformación continua que una gota de agua. La frecuencia de rotación [[N]] de los engranajes en una máquina de lubricación sigue principios análogos pero en escalas de tiempo mucho menores.

## Preguntas reales del alumno

**¿Un gas es realmente un fluido?**  
Sí, porque cumple la definición técnica: se deforma continuamente bajo un esfuerzo cortante [[tau]]. La principal diferencia con los líquidos es que los gases tienden a expandirse hasta llenar todo el volumen disponible.

**¿Por qué la viscosidad del aceite del coche baja cuando se calienta?**  
Porque al aumentar la temperatura, las moléculas tienen más energía para vencer las fuerzas de atracción entre ellas, facilitando el deslizamiento y reduciendo la fricción interna y la viscosidad [[mu]].

**¿Qué pasa si un fluido no tiene viscosidad?**  
Se llama fluido ideal. En este caso, no hay disipación de energía y se cumple la ecuación de Bernoulli de forma exacta. Sin embargo, todos los fluidos reales tienen al menos un poco de viscosidad [[mu]].

## Conexiones transversales y rutas de estudio

*   **Ecuación de Navier-Stokes**: La generalización de la ley de Newton de la viscosidad ley de Newton de la viscosidad para flujos en 3D.
*   **Hidrostática**: El estudio de los fluidos cuando no hay esfuerzos cortantes [[tau]] (reposo).
*   **Termodinámica**: Explica cómo la temperatura afecta las propiedades de transporte como la viscosidad [[mu]] y la densidad [[rho]].

## Síntesis final

El concepto de fluido define a la materia por su respuesta dinámica. Entender que un fluido es una sustancia que no puede resistir esfuerzos cortantes [[tau]] sin moverse es la clave para predecir el comportamiento del mundo natural y tecnológico. Desde el flujo de sangre en nuestras arterias hasta el movimiento de las corrientes oceánicas, la mecánica de fluidos nos proporciona las herramientas para entender la materia en movimiento constante, cuantificada por la viscosidad [[mu]] y la tasa de deformación [[du_dy]].
`;export{e as default};
