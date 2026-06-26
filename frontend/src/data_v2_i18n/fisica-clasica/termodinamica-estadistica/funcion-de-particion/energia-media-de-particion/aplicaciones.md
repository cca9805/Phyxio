# Aplicaciones

## 1. Espectros moleculares discretos
Variable dominante: [[energia_media]]
Límite de validez: niveles incluidos con peso relativo mayor que 1e-4

En moléculas con pocos niveles rotacionales o vibracionales activos, la [[funcion_particion]] permite predecir qué [[energia_media]] corresponde a una [[temperatura]] dada. Se mide o calcula cada [[energia_microestado]], se construye la suma canónica y se observa qué niveles contribuyen. Esta aplicación permite decidir si un modo interno está congelado o térmicamente activo. Si [[constante_boltzmann]] T es menor que las separaciones, la [[beta]] grande mantiene la energía cerca del nivel bajo. Si [[constante_boltzmann]] T alcanza las separaciones, suben las ocupaciones excitadas y cambia la [[capacidad_calorifica]]. Es útil para interpretar espectros térmicos sin confundir presencia de niveles con ocupación significativa.

En moléculas diatómicas, los modos rotacionales tienen separaciones energéticas del orden de decenas de kelvin, mientras los vibracionales superan varios cientos. La [[funcion_particion]] total factoriza en un producto de contribuciones independientes, y la [[energia_media]] total resulta de sumar los aportes de cada modo. Si [[constante_boltzmann]] por [[temperatura]] no alcanza la separación del modo, este contribuye solo con la energía de su nivel más bajo.

## 2. Calor específico de sólidos simplificados
Variable dominante: [[capacidad_calorifica]]
Límite de validez: equilibrio térmico y ΔT/T < 0.05 para pendientes numéricas

En modelos de sólidos, la [[energia_media]] de vibraciones microscópicas determina la [[capacidad_calorifica]]. Al variar [[temperatura]], la [[funcion_particion]] indica cuántos modos vibracionales participan. Se predice la energía almacenada en vibraciones y se constriñe el rango donde el modelo clásico o cuántico es necesario. Si la pendiente de [[energia_media]] frente a [[temperatura]] crece, nuevos modos se están activando. Si se satura, las ocupaciones ya no cambian mucho. La aplicación es distinta de un simple balance de calor porque usa microestados y pesos, no una constante experimental fija puesta a mano.

El modelo de Einstein describe cada posición atómica como oscilador cuántico de frecuencia única. La [[funcion_particion]] resultante tiene forma cerrada, y la [[energia_media]] varía desde el nivel de cero absoluto hasta un crecimiento lineal en el régimen cálido. La [[capacidad_calorifica]] asciende gradualmente hacia el valor clásico de Dulong-Petit, explicando la anomalía que los datos de sólidos a bajas temperaturas revelan respecto del modelo clásico de equipartición.

## 3. Sistemas de dos niveles en física cuántica
Variable dominante: [[beta]]
Límite de validez: separación energética estable y ausencia de acoplos externos fuertes

Un sistema de dos niveles, como un espín ideal o una molécula con dos configuraciones, muestra de forma limpia cómo [[beta]] controla [[energia_media]]. A baja [[temperatura]], casi toda la población ocupa la menor [[energia_microestado]]. Al calentar, el estado alto gana peso y el promedio cambia. Se predice la ocupación, se mide la respuesta térmica y se constriñe la validez de aproximaciones que ignoran el estado alto. La [[funcion_particion]] actúa aquí como un interruptor estadístico gradual, no como un conteo bruto de dos estados.

El sistema de dos niveles sirve como banco de pruebas conceptual. Cuando la separación supera [[constante_boltzmann]] por [[temperatura]], la [[funcion_particion]] se aproxima a la unidad y [[energia_media]] reside cerca del nivel inferior. Al igualar ambas escalas, [[energia_media]] crece con rapidez y la [[capacidad_calorifica]] exhibe un pico pronunciado, denominado pico de Schottky, observable en espines nucleares, materiales magnéticos diluidos y moléculas con dos configuraciones de distinta energía.

## 4. Simulación computacional de materiales
Variable dominante: [[funcion_particion]]
Límite de validez: muestreo suficiente de estados relevantes y error estadístico menor que 5%

En simulaciones, no siempre se conocen todos los microestados, pero se pueden muestrear configuraciones representativas. La [[funcion_particion]] o sus equivalentes estimados permiten obtener [[energia_media]] y [[capacidad_calorifica]]. Se mide la convergencia del muestreo, se predice el comportamiento térmico y se constriñe el tamaño de paso o el número de muestras. Si aparecen grandes fluctuaciones, puede faltar exploración de regiones energéticas importantes. Esta aplicación convierte el concepto formal en una herramienta de diagnóstico numérico: una media estable requiere que las [[energia_microestado]] relevantes hayan entrado en el cálculo.

Los métodos de Monte Carlo muestrean [[energia_microestado]] representativas sin calcular la [[funcion_particion]] completa. La [[energia_media]] converge si las regiones relevantes del espacio de configuraciones han sido visitadas con suficiente frecuencia. El criterio práctico es comprobar que la varianza del promedio disminuye al ampliar el muestreo: una varianza estable confirma que los microestados de peso significativo han contribuido, y la [[capacidad_calorifica]] calculada por diferencias queda bien definida.

## 5. Activación térmica de grados de libertad
Variable dominante: [[derivada_log_particion_temperatura]]
Límite de validez: cambios de [[temperatura]] lentos y sistema en equilibrio local

En gases y materiales complejos, algunos grados de libertad solo se activan cuando [[temperatura]] alcanza una escala suficiente. La [[derivada_log_particion_temperatura]] permite ver cómo responde la estadística microscópica al calentamiento. Se predice cuándo aumenta [[energia_media]], se mide una variación en [[capacidad_calorifica]] y se constriñe qué niveles o modos deben incluirse. Si un modo está muy por encima de [[constante_boltzmann]] T, apenas pesa; si está cerca, su contribución crece rápidamente. Esta lectura evita decir simplemente “más [[temperatura]], más energía” y obliga a preguntar qué microestados se han vuelto accesibles.

La velocidad de muchas reacciones sigue una dependencia exponencial con la escala de [[temperatura]]. La [[derivada_log_particion_temperatura]] del estado de transición cuantifica cuántos sistemas alcanzan la barrera energética requerida. La [[funcion_particion]] total permite estimar la fracción activa, y la [[energia_media]] de esa fracción marca la escala de activación. Cuando la [[capacidad_calorifica]] del sistema reactivo muestra una inflexión, los datos señalan que nuevos modos de alta energía han empezado a participar en el proceso.