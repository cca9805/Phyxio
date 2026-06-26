# Aplicaciones

## 1. Control de ruido en paneles de maquinaria

Las tapas metálicas, carcasas de motores, paneles de ascensores y cerramientos industriales suelen comportarse como placas vibrantes. Cuando una fuente periódica, como un motor eléctrico o una bomba, excita una frecuencia cercana a [[f_mn]], el panel puede amplificar el sonido radiado. El cálculo modal permite anticipar qué modos caen dentro del rango audible y qué zonas de la placa tendrán mayor amplitud.

La intervención técnica depende de la lectura física del modo. Aumentar [[h_placa]] eleva [[rigidez_a_la_flexion_de_la_placa]] de forma muy intensa, mientras que añadir masa aumenta [[rho_s]] y baja las frecuencias. Cambiar [[a_dim]] o [[b_dim]] mediante nervios estructurales altera los patrones nodales disponibles. Por eso el diseño no consiste solo en "hacer la pieza más gruesa"; consiste en desplazar el modo problemático fuera de la excitación o aumentar su amortiguamiento.

Variable dominante: rigidez de flexión de la placa, medida por [[rigidez_a_la_flexion_de_la_placa]].

Límite de validez: bordes no realmente fijos, perforaciones, refuerzos o amortiguamiento importante llevan al modelo analítico más allá de su alcance.

## 2. Instrumentos de percusión y membranas tensadas

Los parches de tambor, timbales y membranas de altavoz se entienden mediante modos de membrana. La fuerza restauradora dominante no es [[rigidez_a_la_flexion_de_la_placa]], sino la tensión superficial [[tension_superficial_de_la_membrana]]. Al aumentar [[tension_superficial_de_la_membrana]], todas las frecuencias modales suben; al aumentar [[rho_mem]], bajan. Esta relación explica el afinado de un tambor y también por qué dos parches de igual tamaño pueden sonar distintos si tienen masas superficiales diferentes.

La fórmula de membrana rectangular ideal:

{{f:frecuencia_modal_membrana}}

resume la dependencia esencial, aunque muchos instrumentos reales son circulares. La enseñanza que permanece es que cada frecuencia corresponde a un patrón nodal espacial, no a una oscilación uniforme de toda la superficie. En percusión, los modos superiores influyen mucho en el timbre porque no forman una serie armónica simple.

Variable dominante: tensión superficial homogénea del parche, representada por [[tension_superficial_de_la_membrana]].

Límite de validez: la tensión no uniforme, el borde mal sujeto, la rigidez propia del parche o amplitudes grandes invalidan el modelo ideal.

## 3. Diseño de altavoces, diafragmas y micrófonos

Los diafragmas de altavoces y micrófonos deben moverse de forma controlada. A bajas frecuencias se desea que la superficie se desplace casi como un pistón, pero a frecuencias más altas aparecen modos de flexión. Cuando esos modos entran en la banda útil, la respuesta se vuelve irregular: unas zonas del diafragma emiten en fase y otras en oposición.

El diseñador controla [[rigidez_a_la_flexion_de_la_placa]], [[rho_s]], [[a_dim]] y [[b_dim]] mediante material, espesor, geometría y tratamiento del borde. Un diafragma más rígido desplaza los modos de ruptura a frecuencias más altas; uno más ligero mejora la sensibilidad, pero puede ser más susceptible a modos indeseados. La lectura de patrones nodales indica dónde conviene cambiar material, añadir corrugaciones o modificar la suspensión.

La aplicación exige distinguir placa y membrana. Una cúpula rígida trabaja más cerca del modelo de placa; una película muy tensada trabaja más cerca del modelo de membrana. Confundir ambos regímenes lleva a predicciones incorrectas sobre cómo cambiará [[f_mn]] al modificar espesor o tensión.

Variable dominante: masa superficial efectiva del diafragma, especialmente [[rho_s]], que regula la inercia frente a la excitación acústica.

Límite de validez: el acoplamiento acústico con aire y la geometría real del sistema pueden invalidar el modelo plano de placa o membrana.

## 4. Ensayos modales en ingeniería civil y aeronáutica

Las placas no son solo objetos de laboratorio. Suelos, paneles de fuselaje, cubiertas, tableros y placas compuestas presentan modos bidimensionales que influyen en fatiga, confort vibratorio y ruido estructural. En un ensayo modal, se excita la estructura con un martillo instrumentado o un vibrador y se mide la respuesta en varios puntos. Los picos del espectro se asocian a frecuencias [[f_mn]] y los mapas de fase revelan patrones nodales.

La estimación analítica con:

{{f:frecuencia_modal_placa}}

sirve para comprobar si una frecuencia medida es plausible. Si un modo experimental aparece mucho más bajo de lo esperado, puede indicar bordes menos rígidos, masa añadida, daño estructural o una condición de contorno mal representada. Si aparece mucho más alto, puede haber refuerzos o acoplamientos no incluidos en el modelo simple.

Variable dominante: condición de contorno del borde y rigidez efectiva de la placa, que determinan la distribución modal.

Límite de validez: geometrías complejas, curvaturas, placas compuestas y acoplamientos múltiples superan la simplicidad del modelo de placa plana.

## 5. Acústica arquitectónica y control de vibración en cerramientos

Paredes ligeras, ventanas, suelos flotantes y paneles de yeso pueden transmitir sonido porque vibran como placas. Cuando una onda acústica incidente coincide con un modo estructural, el cerramiento radia sonido al otro lado con mayor eficacia. Por eso el aislamiento acústico de una pared no depende solo de su masa, sino también de sus modos propios.

El cálculo de [[rho_s]] mediante:

{{f:densidad_superficial_placa}}

ayuda a estimar la inercia superficial, mientras que [[rigidez_a_la_flexion_de_la_placa]] describe la resistencia a la curvatura. Añadir una capa pesada aumenta la masa y suele mejorar el aislamiento en algunas bandas, pero puede desplazar resonancias. Cambiar la fijación de los bordes o desacoplar paneles puede alterar los modos dominantes sin cambiar demasiado la masa total.

Variable dominante: masa superficial efectiva del cerramiento y su rigidez frente a curvatura, que regulan qué modos se excitan con el campo sonoro.

Límite de validez: uniones imperfectas, amortiguamiento del panel, cavidades de aire y acoplamiento con otros elementos reducen la validez del modelo ideal.