## Modelo ideal

El modelo de onda longitudinal en fluidos asume un medio **continuo, homogéneo e isótropo** donde la perturbación de presión es infinitesimalmente pequeña respecto a la presión de equilibrio. La relación entre presión y cambio de volumen es **lineal** (régimen de Hooke volumétrico), y la compresión se produce de forma **adiabática** sin intercambio térmico con el entorno.

Bajo estas condiciones, la propagación se describe con una ecuación de onda escalar de segundo orden cuya velocidad de fase depende exclusivamente de [[modulo_de_compresibilidad_volumetrica]] y [[rho]]. Se ignoran la viscosidad del fluido, la conductividad térmica, la rotación del medio y cualquier efecto de borde o geometría.

## Hipótesis

- **Amplitud pequeña**: la variación de presión es mucho menor que la presión estática del fluido. Si se viola, aparecen efectos no lineales que deforman el perfil de la onda (generación de armónicos, ondas de choque).

- **Medio continuo**: la longitud de onda [[lambda]] es muy superior al recorrido libre medio de las moléculas. Si se viola, el concepto de compresión pierde sentido y hay que recurrir a teoría cinética molecular.

- **Homogeneidad e isotropía**: [[modulo_de_compresibilidad_volumetrica]] y [[rho]] son constantes en todo el volumen. Si se viola (gradientes de temperatura, salinidad o presión), la onda sufre refracción y la rapidez [[rapidez_de_propagacion]] varía de punto a punto.

- **Compresión adiabática**: no hay intercambio de calor apreciable durante el ciclo de compresión-rarefacción. Si se viola (frecuencias extremadamente bajas o fluidos con alta conductividad térmica), [[modulo_de_compresibilidad_volumetrica]] debe sustituirse por el módulo isotérmico, alterando [[rapidez_de_propagacion]].

- **Fluido no viscoso**: no hay disipación de energía mecánica por fricción interna. Si se viola, la amplitud decae exponencialmente con la distancia y la onda se atenúa.

## Dominio de validez cuantitativo

El modelo lineal es fiable cuando la razón entre la amplitud de presión acústica y la presión estática es inferior a 0.01 (variaciones menores al 1 % de la presión ambiental). En aire a presión atmosférica estándar, esto corresponde a niveles acústicos por debajo de aproximadamente 171 dB SPL.

La condición de medio continuo exige que [[lambda]] > 10⁻⁷ m, requisito ampliamente satisfecho en todo el rango audible (20 Hz a 20 kHz), donde [[lambda]] varía entre 17 m y 1.7 cm en aire.

Para gases ideales a temperaturas entre 200 K y 2000 K y presiones entre 10 kPa y 10 MPa, el módulo adiabático se relaciona bien con la presión y el coeficiente adiabático. Fuera de esos rangos, el gas muestra desviaciones del comportamiento ideal que afectan la predicción de [[rapidez_de_propagacion]].

## Señales de fallo del modelo

- **Distorsión del perfil de onda**: si el frente de compresión se agudiza mientras la rarefacción se aplana, la amplitud ha excedido el régimen lineal y se aproxima la formación de una onda de choque.

- **Atenuación anómala**: si la amplitud cae más rápido de lo esperado por divergencia geométrica, la viscosidad del fluido ya no es despreciable y el modelo ideal sobreestima el alcance.

- **Dependencia de la rapidez con la [[frecuencia]]**: en el modelo ideal [[rapidez_de_propagacion]] no depende de [[frecuencia]]. Si mediciones experimentales muestran dispersión (frecuencias altas viajando a rapidez distinta), el medio presenta relajación molecular o efectos viscoelásticos.

- **Gradiente térmico observable**: si la temperatura varía apreciablemente en la dirección de propagación, la hipótesis de homogeneidad falla y aparecen curvaturas en los frentes de onda (refracción acústica).

## Modelo extendido o alternativo

El **modelo viscotérmico** incorpora la viscosidad dinámica y la conductividad térmica del fluido. La ecuación de onda resultante añade un término de amortiguamiento que hace que la amplitud decaiga exponencialmente con la distancia. Este modelo predice correctamente la atenuación del sonido en gases reales y en líquidos a frecuencias ultrasónicas.

Para amplitudes grandes, el **modelo de Burgers** o la **ecuación de Westervelt** incluyen no linealidades que describen la generación de armónicos, la distorsión del perfil y la eventual formación de ondas de choque. Cuando conviene pasar al modelo viscotérmico: cuando la atenuación medida supera en más de un 10 % la predicción geométrica, o cuando [[frecuencia]] excede el rango de megahercios en líquidos. Cambiar a un modelo no lineal cuando la amplitud de presión acústica supera el 1 % de la presión estática del medio.

## Comparación operativa

| Criterio | Modelo ideal (lineal, adiabático) | Modelo viscotérmico / no lineal |
|---|---|---|
| Complejidad matemática | Ecuación de onda escalar de segundo orden | Ecuación de difusión-onda con términos disipativos |
| Rapidez de propagación | Constante, independiente de la [[frecuencia]] | Ligeramente dependiente de la [[frecuencia]] (dispersión) |
| Atenuación | Solo divergencia geométrica | Decaimiento exponencial adicional por viscosidad |
| Rango de amplitud | Perturbaciones pequeñas (menor al 1 % de la presión estática) | Perturbaciones moderadas y grandes |
| Aplicación típica | Acústica ambiental, diseño básico de tubos | Ultrasonidos médicos, acústica submarina, ondas de choque |
| Limitación principal | Ignora disipación y no linealidades | Mayor carga computacional y necesidad de parámetros adicionales |