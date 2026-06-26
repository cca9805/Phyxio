# Aplicaciones

## 1. Diseño de trampas de iones en espectrómetros de masas

En un espectrómetro de masas de trampa de iones (tipo Paul o Penning), varios electrodos crean campos eléctricos que se superponen para confinar iones en una región del espacio. Cada electrodo actúa como una fuente de campo independiente, y el campo confinador total resulta de la superposición vectorial de todas las contribuciones. El diseño de la trampa consiste en ajustar la geometría y la carga de cada electrodo para que [[campo_electrico_total]] tenga la forma cuadrupolar o armónica necesaria para la estabilidad orbital de los iones.

Sin el principio de superposición, no sería posible calcular el campo de confinamiento sumando los campos de cada electrodo por separado. El diseñador del instrumento calcula numéricamente [[campo_electrico_total]] en cada punto relevante de la trampa sumando la contribución de cada electrodo, y verifica que los iones con la relación masa-carga deseada queden estables.

Variable dominante: distribución de [[q_i]] en los electrodos y geometría de las distancias [[r_i]] al centro de la trampa.
Límite de validez: el modelo de superposición requiere que el medio dentro de la trampa sea lineal (vacío o gas a presión muy baja) y que las cargas de los iones confinados no alteren significativamente el campo de los electrodos.

## 2. Cálculo del campo en tornos electrostáticos de impresión

En la impresión electrostática y los rodillos de transferencia de imagen, múltiples cargas de tóner se acumulan en posiciones discretas sobre el tambor del fotocopiador. El campo [[campo_electrico_total]] en la superficie receptora es la superposición de las contribuciones de cada partícula de tóner cargada. La calidad de la transferencia depende de que [[campo_electrico_total]] supere el umbral de adhesión en cada punto de la imagen y permanezca por debajo del umbral de descarga disruptiva.

Los ingenieros de proceso calculan [[campo_electrico_total]] sumando las contribuciones de las [[numero_de_cargas_fuente]] partículas presentes en cada línea de imagen, estimando cuándo la densidad de carga es suficiente para transferir tóner pero no tan alta que genere arcos eléctricos. La dependencia inverso-cuadrado de cada contribución con [[r_i]] hace que las partículas más próximas a la superficie receptora dominen la suma de superposición.

Variable dominante: número [[numero_de_cargas_fuente]] de partículas de tóner y su distancia [[r_i]] a la superficie receptora.
Límite de validez: el modelo falla cuando las partículas de tóner están tan juntas que el campo entre ellas induce polarización mutua significativa, lo que viola la hipótesis de contribuciones independientes.

## 3. Localización de puntos de campo nulo en sistemas de pararrayos

El diseño de instalaciones de protección contra rayos requiere conocer los puntos donde [[campo_electrico_total]] alcanza su valor máximo en la atmósfera cercana al edificio, ya que esos puntos son los candidatos para el inicio de líderes ascendentes. En una instalación con varios pararrayos, el campo cerca de cada punta es la superposición de las contribuciones de todas las puntas y de la nube cargada. Calcular [[campo_electrico_total]] en la región entre puntas permite identificar si existe un punto de campo nulo (donde las contribuciones se cancelan) o si una punta domina sobre las demás.

Un punto de [[fuerza_electrica_total]] nulo entre dos pararrayos indicaría una zona de protección reducida: un líder descendente que llegara allí no sería capturado por ninguna de las dos puntas de forma eficiente. El análisis de superposición revela directamente esas zonas débiles y permite optimizar el número [[numero_de_cargas_fuente]] y las posiciones de las puntas para eliminarlas.

Variable dominante: posición relativa de las puntas y el valor de las cargas inducidas en cada una [[q_i]].
Límite de validez: el modelo de carga puntual es una aproximación; en la práctica, las puntas son conductores extendidos y el campo cerca de ellas requiere métodos de elementos finitos para precisión alta.

## 4. Análisis de la fuerza sobre granos de polvo en limpiadoras electrostáticas

Las limpiadoras electrostáticas industriales usan varias placas o hilos a distintos potenciales para crear un campo no uniforme que dirige partículas de polvo cargadas hacia los colectores. Cada elemento activo de la limpiadora actúa como una carga fuente, y [[fuerza_electrica_total]] sobre un grano de polvo es la superposición de las fuerzas de todas las placas e hilos presentes en el canal de limpieza.

La eficiencia de recolección depende de que la componente de [[fuerza_electrica_total]] perpendicular al flujo de aire sea suficiente para desviar la partícula hacia el colector antes de que el flujo la arrastre al otro extremo del canal. Aumentar [[numero_de_cargas_fuente]] (añadir más etapas de carga) mejora la probabilidad de captura pero también complica el mantenimiento. El análisis de superposición permite optimizar cuántas etapas son necesarias para una eficiencia del 99 % con el mínimo coste de instalación.

Variable dominante: componente de [[fuerza_electrica_total]] perpendicular al flujo, controlada por la geometría de las distancias [[r_i]] de cada electrodo al canal central.
Límite de validez: el modelo falla para partículas conductoras grandes en las que el campo inducido en la superficie de la partícula no es despreciable frente al campo aplicado.

## 5. Modelado del potencial de Madelung en cristales iónicos

En un cristal iónico como el cloruro de sodio, cada ion está rodeado por [[numero_de_cargas_fuente]] iones de signo alternante que crean un campo total [[campo_electrico_total]] en la posición de cada ion de la red. La energía de cohesión del cristal resulta de sumar la energía de interacción de cada par de iones, lo que equivale a evaluar el potencial de la suma de superposición en cada punto de la red.

La constante de Madelung, que caracteriza la estabilidad energética de una estructura cristalina, es esencialmente la suma de superposición del potencial de Coulomb de todos los iones de la red sobre un ion de referencia. Su cálculo requiere sumar contribuciones de iones a distintas distancias [[r_i]] con signos alternantes [[q_i]], lo que hace que la suma converja lentamente. Sin el principio de superposición y sin métodos de aceleración de la convergencia (como la transformada de Ewald), este cálculo sería irrealizable en la práctica.

Variable dominante: relación entre las distancias [[r_i]] a los primeros vecinos y las cargas [[q_i]] de los iones, que fija la magnitud de la energía de cohesión.
Límite de validez: el modelo de iones puntuales y la aplicación directa de la superposición de Coulomb requieren correcciones cuánticas para describir correctamente la repulsión a corto alcance cuando los iones se acercan lo suficiente para que sus nubes electrónicas se solapen.