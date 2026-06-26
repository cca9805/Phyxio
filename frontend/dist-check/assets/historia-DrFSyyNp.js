const e=`## Problema histórico

A principios del siglo XVIII, los experimentadores sabían que distintas cantidades de agua a distintas temperaturas producían temperaturas de mezcla diferentes, pero carecían de una magnitud que cuantificara cuánto calor "contenía" un cuerpo. La pregunta sin responder era: dado que distintos materiales cambian de temperatura de forma distinta ante el mismo calor, ¿qué propiedad del material o del cuerpo gobierna esa resistencia al cambio térmico? El problema tenía consecuencias prácticas inmediatas para el diseño de hornos, calderas y procesos de fusión de metales.

La dificultad central era la ausencia de distinción entre temperatura y "cantidad de calor". Ambas se medían con el termómetro y se confundían: un cuerpo más caliente parecía "tener más calor" sin precisar si eso dependía solo de la temperatura o también de qué y cuánto material estaba presente.

## Dificultad conceptual previa

La teoría del calórico trataba el calor como un fluido imponderable que se acumulaba en los cuerpos. En ese marco, la "cantidad de calor" de un cuerpo dependía de cuánto calórico había absorbido, pero no existía una fórmula que relacionara esa cantidad con la temperatura, la masa y el material. Los experimentos de mezcla de sustancias a distintas temperaturas mostraban que la temperatura de equilibrio dependía de las masas y de alguna propiedad material, pero esa propiedad no tenía nombre ni definición precisa.

La dificultad matemática era que la magnitud necesaria —[[C]] = [[Q]] / [[DeltaT]]— requería ya tener una definición cuantitativa de [[Q]] independiente de [[DeltaT]], lo que era circular sin un instrumento de referencia.

## Qué cambió

Joseph Black, entre 1760 y 1762, fue el primero en distinguir explícitamente entre "temperatura" (intensidad del calor) y "cantidad de calor" (calórico acumulado). A partir de experimentos de mezcla sistemáticos, Black formuló que distintos materiales tienen distinta "capacidad para el calor" por unidad de masa (lo que hoy llamamos calor específico c), y que la [[C]] de un cuerpo depende tanto de su material como de su cantidad.

La formulación cuantitativa de [[C]] como Q / [[DeltaT]] fue articulada de forma más explícita por Adair Crawford (1779) y Johan Wilcke (1772), quienes construyeron tablas de calores específicos para distintas sustancias usando el método de mezclas. Wilcke fue el primero en definir la capacidad calorífica total de un cuerpo de forma operacional: la cantidad de calor necesaria para calentar ese cuerpo específico un grado.

La distinción entre [[C]] extensiva (del cuerpo) y c intensiva (del material) fue consolidada por Lavoisier y Laplace en su "Mémoire sur la chaleur" (1783), donde también introdujeron el concepto de calorímetro como instrumento para medir calores.

## Impacto en la física

El concepto de [[C]] permitió por primera vez calcular de forma cuantitativa el calor necesario para cualquier proceso de calentamiento o enfriamiento, lo que fue esencial para el diseño racional de las máquinas de vapor de Watt y de los procesos industriales de finales del siglo XVIII.

La ley de Dulong y Petit (1819), que establece que el producto c · M_molar es aproximadamente constante para los elementos (igual a 3R ≈ 25 J/(mol·K)), surgió directamente del análisis sistemático de las [[C]] medidas por calorimetría. Esta ley fue la primera regularidad periódica descubierta para los elementos antes de que existiera la tabla periódica, y se usó para estimar masas atómicas de elementos cuyas medidas directas eran inciertas.

La explicación teórica de la ley de Dulong-Petit a baja temperatura (donde [[C]] cae dramáticamente) fue uno de los primeros triunfos de la mecánica cuántica aplicada a sólidos: Einstein (1907) y Debye (1912) mostraron que [[C]] → 0 cuando T → 0 porque los modos vibracionales de la red cristalina se "congelan" a baja temperatura.

## Conexión con física moderna

La capacidad calorífica tiene una expresión precisa en mecánica estadística: [[C]] = k_B · (varianza de la energía) / (k_B · T)², donde k_B es la constante de Boltzmann. Esta expresión conecta la propiedad macroscópica [[C]] con las fluctuaciones de energía a nivel microscópico: materiales con muchos modos de energía disponibles (muchos grados de libertad térmicos) tienen mayor [[C]].

En física de la materia condensada, la anomalía de [[C]] en torno a una temperatura de transición de fase (pico en [[C]](T)) es la huella experimental más directa de una transición de fase de segundo orden o una transición glass. Las medidas de [[C]](T) de alta precisión son herramientas de caracterización fundamentales en superconductores, superfluidos y materiales magnéticos.
`;export{e as default};
