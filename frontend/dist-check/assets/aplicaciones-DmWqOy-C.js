const e=`# Aplicaciones — Líneas de campo eléctrico

## 1. Blindaje electromagnético y diseño de cables coaxiales

Las líneas de campo [[E]] son la herramienta de diseño fundamental en la ingeniería de cables de alta tensión y sistemas de blindaje. En un cable coaxial, las líneas de campo entre el conductor interior y la malla exterior son radiales y confinadas al dieléctrico interior. La densidad de líneas [[rho_lineas]] crece al acercarse al conductor interior, indicando que [[E]] es más intenso allí. Los ingenieros utilizan esta distribución para calcular la tensión máxima que soporta el dieléctrico antes de la ruptura: si [[rho_lineas]] supera el límite correspondiente al campo de ruptura del material, el cable falla.

El blindaje de equipos electrónicos sensibles funciona exactamente invirtiendo este principio: una caja metálica conductora concentra todas las líneas de campo [[E]] externas en su superficie, impidiendo que penetren en el interior. En el interior de la caja, [[E]] es nulo y [[rho_lineas]] es cero, lo que protege los componentes de interferencias externas.

Variable dominante: la densidad de líneas de campo [[rho_lineas]] en el dieléctrico del cable, que es proporcional a [[E]] y determina si se supera el umbral de ruptura del material.
Límite de validez: el modelo de líneas radiales confinadas es válido mientras el conductor interior sea recto y los efectos de borde en los extremos del cable sean despreciables frente a la longitud total; en cables cortos o con conectores los bordes introducen concentraciones de [[E]] no modeladas.

## 2. Diseño de condensadores y control del campo dieléctrico

En el diseño de condensadores, las líneas de campo [[E]] entre las placas son paralelas y uniformemente espaciadas para el modelo ideal. La densidad [[rho_lineas]] uniforme indica campo constante, lo que maximiza la energía almacenada por unidad de volumen para un dieléctrico dado. Los ingenieros eligen geometrías que mantengan [[rho_lineas]] uniforme y eviten concentraciones locales de líneas en puntas o bordes agudos que podrían superar el campo de ruptura dieléctrica.

Los condensadores cilíndricos y esféricos tienen líneas radiales cuya densidad varía con la distancia, lo que permite calcular la capacitancia mediante la ley de Gauss: el flujo [[phi_E]] a través de una superficie gaussiana es proporcional a la [[q_fuente]] encerrada, y de ahí se obtiene [[E]] en función de la geometría.

Variable dominante: la uniformidad de la densidad de líneas [[rho_lineas]] entre las placas, que controla la homogeneidad del campo y la energía almacenada por unidad de volumen en el dieléctrico.
Límite de validez: el modelo de campo uniforme entre placas paralelas se aplica solo cuando la separación entre placas es mucho menor que sus dimensiones laterales; en condensadores compactos los efectos de borde aumentan [[phi_E]] en los bordes y la capacitancia real supera la del modelo ideal.

## 3. Meteorología y detección de tormentas

El campo eléctrico atmosférico, representado por sus líneas de campo, es la base de la meteorología eléctrica. En tiempo despejado, las líneas de campo apuntan hacia el suelo con una densidad correspondiente a un campo de aproximadamente 100 V/m. Durante una tormenta, la separación de cargas en las nubes crea regiones de [[rho_lineas]] muy elevada que preceden a los rayos.

Los medidores de campo atmosférico detectan cambios en el flujo [[phi_E]] sobre una superficie rotatoria y los traducen en el módulo y sentido de [[E]] local. Cuando [[rho_lineas]] supera el umbral de ruptura del aire, se produce la descarga. Este umbral es la base de los protocolos de alerta por rayo en aeropuertos, estadios y campos de atletismo. La evolución temporal de [[phi_E]] medido es el indicador de predicción de descarga más utilizado operativamente.

Variable dominante: el flujo eléctrico [[phi_E]] medido sobre la superficie del sensor, cuyo incremento rápido indica acumulación de [[q_fuente]] en la nube y anticipa la descarga.
Límite de validez: el modelo de campo cuasiestático es válido para escalas de tiempo de minutos; en la microsegunda previa a un rayo la dinámica del canal de líder no es reproducible con líneas de campo estáticas.

## 4. Microscopía de efecto de campo y espectroscopía de campo cercano

En la microscopía de efecto de campo y en la microscopía de efecto túnel, el campo [[E]] entre la punta metálica y la muestra tiene una distribución de líneas extremadamente concentrada. La densidad [[rho_lineas]] en la zona más próxima a la punta es muchos órdenes de magnitud mayor que lejos de ella, lo que produce un [[E]] local suficiente para ionizar átomos o para extraer electrones por efecto túnel.

El diseño de estas puntas consiste en garantizar que las líneas de campo se concentren en la región de un solo átomo del extremo. Cualquier imperfección que cree una distribución de líneas no convergente reduce la resolución del instrumento. La geometría de las líneas, calculada con métodos de elementos finitos, es el criterio principal de diseño de estas herramientas de nanoescala.

Variable dominante: la densidad de líneas [[rho_lineas]] en el ápice de la punta, que determina si [[E]] alcanza el umbral de ionización o extracción de electrones necesario para la imagen.
Límite de validez: el modelo clásico de líneas de campo es válido para distancias punta-muestra superiores a unos pocos nanómetros; a escala atómica los efectos cuánticos dominan y las líneas clásicas dejan de describir la transferencia de electrones.

## 5. Electrospray y nebulización de líquidos en análisis químico

En la técnica de electrospray, utilizada masivamente en espectrometría de masas, se aplica una diferencia de potencial elevada entre un capilar cargado y una placa opuesta. Las líneas de campo [[E]] convergen en el extremo del capilar, creando una densidad [[rho_lineas]] tan elevada que el campo en ese punto supera la tensión superficial del líquido: las gotas se fragmentan en aerosol de gotitas cargadas. Cada gotita lleva una fracción de [[q_fuente]] proporcional al flujo [[phi_E]] que la atraviesa en el momento de la fragmentación.

El control de la geometría de las líneas de campo mediante la forma del capilar y la posición de la placa colectora determina la distribución de tamaños de las gotitas y la eficiencia de ionización de la muestra. Los ingenieros de instrumentación ajustan [[E]] en el extremo del capilar modificando la tensión aplicada y la geometría para maximizar la señal analítica sin causar descarga disruptiva.

Variable dominante: el campo [[E]] en el ápice del capilar, que controla si las gotas se fragmentan de forma estable o si se produce arco eléctrico no controlado.
Límite de validez: el modelo de líneas convergentes es válido para fluidos con tensión superficial bien definida y conductividad baja; en disolventes altamente conductores la redistribución rápida de [[q_fuente]] altera la geometría de las líneas y el régimen de nebulización cambia.
`;export{e as default};
