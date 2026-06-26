# Aplicaciones

## 1. Resonancia magnética nuclear (RMN/MRI)

La resonancia magnética nuclear es la técnica de diagnóstico médico por imagen más poderosa disponible en la actualidad. Utiliza un campo magnético [[campo_magnetico]] intenso y homogéneo (generalmente entre 1.5 T y 7 T en equipos clínicos) para alinear los espines nucleares de los átomos de hidrógeno del cuerpo humano. Un pulso de radiofrecuencia perturba ese alineamiento; al relajarse, los núcleos emiten señales de radio que son captadas y reconstruidas computacionalmente en imágenes tridimensionales de los tejidos blandos.

La calidad de la imagen (resolución espacial y contraste entre tejidos) depende directamente de la intensidad y la homogeneidad de [[campo_magnetico]]. Un campo menos homogéneo de un parte por millón en el volumen de exploración produce artefactos visibles en la imagen. Los imanes superconductores mantienen esta homogeneidad gracias a corrientes que circulan sin resistencia en niobio-titanio enfriado por helio líquido.

Variable dominante: la intensidad del campo magnético [[campo_magnetico]], que determina la frecuencia de Larmor de precesión de los espines nucleares y por tanto la resolución espectral y espacial de la imagen.
Límite de validez: el modelo de campo uniforme es válido en el volumen central del imán; cerca de los extremos, gradientes de campo diseñados deliberadamente permiten codificar la posición espacial de las señales.

## 2. Motor eléctrico de corriente continua

El motor de corriente continua convierte energía eléctrica en mecánica mediante la fuerza de Lorentz magnética. Una bobina de varias espiras que conduce una corriente [[intensidad_de_corriente]] se coloca en un campo magnético [[campo_magnetico]] permanente. La fuerza [[fuerza_magnetica]] sobre los lados activos de la bobina genera un par de torsión que hace girar el rotor. Un conmutador invierte automáticamente el sentido de la corriente cada media vuelta para mantener el par siempre en el mismo sentido de giro.

El par máximo disponible es proporcional a [[campo_magnetico]], a [[intensidad_de_corriente]] y al área de la bobina. Aumentar [[campo_magnetico]] con imanes más potentes (neodimio-hierro-boro en motores modernos) permite reducir el tamaño y el peso del motor para la misma potencia. Los motores de vehículos eléctricos actuales usan campos de 0.8 a 1.5 T y producen pares de cientos de N·m en volúmenes del orden de decenas de litros.

Variable dominante: el campo magnético [[campo_magnetico]] del estátor, que escala directamente con el par disponible y la eficiencia energética del motor.
Límite de validez: el modelo de campo uniforme entre los polos del imán es válido para ángulos de bobina alejados de las posiciones muerta. Para la dinámica completa del motor, se requiere considerar la variación del flujo magnético con el ángulo del rotor.

## 3. Espectrómetro de masas

El espectrómetro de masas aprovecha la dependencia del radio de curvatura de una partícula cargada con su relación masa-carga en un campo [[campo_magnetico]] conocido. Los iones son acelerados a través de una diferencia de potencial conocida, entran en una región con campo [[campo_magnetico]] uniforme y perpendicular a su velocidad, y se curvan en semicírculos de radio proporcional a la raíz cuadrada de la relación masa-carga. Al medir la posición de impacto de los iones en un detector, se calcula esa relación con precisión de partes por millón.

El espectrómetro de masas es la herramienta analítica más precisa para medir masas atómicas y moleculares. Se usa en análisis forense, control de dopaje deportivo, datación de muestras arqueológicas (carbono 14) y en la química analítica industrial para identificar compuestos desconocidos.

Variable dominante: el campo magnético [[campo_magnetico]] en la región de curvatura, que determina el radio de separación entre iones de distinta relación masa-carga y por tanto la resolución másica del instrumento.
Límite de validez: el modelo de campo uniforme en la región de curvatura es válido para iones con velocidades no relativistas (v < 0.1c). Para iones muy energéticos como los producidos en aceleradores, se requieren correcciones relativistas.

## 4. Selector de velocidades de Wien

El selector de velocidades de Wien combina un campo eléctrico y un campo magnético [[campo_magnetico]] perpendiculares entre sí y a la dirección de movimiento de las partículas. Solo las partículas con una velocidad específica, aquella para la que la fuerza eléctrica y la fuerza magnética se equilibran exactamente, pasan sin desviarse. Las demás son desviadas y bloqueadas.

Este dispositivo permite seleccionar partículas con una velocidad precisa independientemente de su masa o carga, y es la primera etapa de muchos espectrómetros de masas y aceleradores. También se usó históricamente para medir la relación carga-masa del electrón en los experimentos de Thomson (1897).

Variable dominante: la intensidad del campo magnético [[campo_magnetico]], que junto con el campo eléctrico aplicado determina la velocidad de selección y el poder discriminante del filtro.
Límite de validez: el selector asume que [[campo_magnetico]] y el campo eléctrico aplicado son perfectamente uniformes en el volumen de selección. Inhomogeneidades del campo por encima del 0.1% amplían el rango de velocidades transmitidas y reducen la resolución del selector.

## 5. Blindaje magnético en instalaciones sensibles

Los magnetómetros de alta sensibilidad, los tubos fotomultiplicadores, los detectores de partículas y ciertos instrumentos de metrología requieren ser operados en entornos con campo magnético reducido a niveles del orden de nanoteslas o menos. Para conseguirlo se usan blindajes de materiales de alta permeabilidad relativa (permalloy, mu-metal) que concentran las líneas de campo [[campo_magnetico]] en su interior, desviándolas de la cavidad que contienen.

El factor de blindaje (relación entre el campo exterior y el campo en el interior de la cavidad) puede superar el orden de 10⁴ para blindajes multicapa bien diseñados. El principio físico es que el material de alta permeabilidad ofrece un camino de muy baja "resistencia magnética" (reluctancia) a las líneas de campo, que prefieren circular por el metal que por el aire de la cavidad.

Variable dominante: el campo magnético [[campo_magnetico]] residual en el interior de la cavidad blindada, que determina si los instrumentos sensibles pueden operar sin distorsiones causadas por el campo magnético ambiental.
Límite de validez: el blindaje es efectivo para campos estáticos y de baja frecuencia. Para campos de alta frecuencia, el efecto pelicular reduce la permeabilidad efectiva del material y se requieren capas adicionales de conductor para apantallar por corrientes de Foucault.