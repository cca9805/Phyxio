# Aplicaciones

## 1. Nanosistemas en contacto con un sustrato
Variable dominante: [[fluctuacion_energia]]
Límite de validez: sistema en equilibrio canónico con [[temperatura]] > 0 K y acoplamiento térmico débil pero suficiente.

En moléculas adsorbidas, nanopartículas o defectos puntuales, la energía no se mantiene fija como en una descripción macroscópica rígida. La [[funcion_particion]] permite predecir cuánto se dispersa la energía alrededor de la [[energia_media]]. Lo que se mide o estima es la escala de oscilación térmica, representada por [[fluctuacion_energia]], a partir de la [[varianza_energia]]. Esta información limita cuándo un estado molecular puede considerarse estable. Si la fluctuación es comparable con separaciones entre configuraciones, la molécula puede saltar entre estados accesibles. El análisis deja de ser válido si el sistema no está equilibrado con el sustrato o si las [[energia_microestado]] cambian por reacciones químicas no incluidas.

En sistemas de tipo punto cuántico, la [[fluctuacion_energia]] puede representar una fracción significativa de la energía de confinamiento. Si esa fracción supera el umbral de separación entre estados cargados y neutros, la interpretación termodinámica cambia cualitativamente. La [[funcion_particion]] permite acotar ese umbral antes de hacer la medida experimental.

## 2. Capacidad calorífica de sólidos pequeños
Variable dominante: [[capacidad_calorifica]]
Límite de validez: volumen fijo, estructura estable y cambios pequeños de [[temperatura]], por ejemplo |Delta T|/T < 0,05.

En sólidos pequeños o cristales mesoscópicos, la [[capacidad_calorifica]] puede interpretarse como respuesta macroscópica ligada a fluctuaciones de energía. La [[funcion_particion]] contiene la curvatura que genera la [[varianza_energia]], y esa dispersión informa de cuánto cambia [[energia_media]] cuando se modifica [[temperatura]]. Lo que se predice es la sensibilidad térmica del material. Si la capacidad calorífica muestra un máximo, puede indicar que muchos modos microscópicos se activan en ese intervalo. El límite aparece cuando hay expansión, cambio de fase o defectos móviles no representados por el mismo conjunto de [[energia_microestado]].

En nanocristales de menos de diez nanómetros, la [[capacidad_calorifica]] puede mostrar picos secundarios que no aparecen en el material masivo. Esos picos corresponden a activación de modos de superficie, que tienen [[energia_microestado]] distintas del interior. La [[varianza_energia]] calculada desde la curvatura de la [[funcion_particion]] permite anticipar en qué rango de [[temperatura]] aparecerán.

## 3. Simulaciones Monte Carlo canónicas
Variable dominante: [[varianza_energia]]
Límite de validez: muestreo equilibrado y número de muestras suficiente para estabilizar la dispersión.

En simulaciones, la energía muestreada fluctúa paso a paso. La [[varianza_energia]] calculada desde la lista de energías debe coincidir con la predicha por derivadas de la [[funcion_particion]] si el muestreo es correcto. Esta aplicación mide la calidad estadística del algoritmo y detecta falta de equilibrio. Una varianza demasiado baja puede indicar que la simulación no explora estados suficientes; una demasiado alta puede señalar saltos entre regiones no equilibradas. La [[fluctuacion_energia]] sirve como escala rápida para decidir si la [[energia_media]] es representativa o si se necesitan más muestras.

Un criterio práctico para simulaciones largas: si la [[varianza_energia]] calculada por bloques consecutivos de muestras varía en más de un diez por ciento entre bloques, el algoritmo no ha equilibrado todavía. En ese caso, ampliar el periodo de termalización antes de medir la [[funcion_particion]] media es necesario para obtener resultados fiables.

## 4. Detección de transiciones térmicas
Variable dominante: [[derivada_segunda_log_particion_beta]]
Límite de validez: modelo con estados comparables en el intervalo y sin discontinuidades numéricas artificiales.

Cerca de una transición o reorganización interna, la curvatura de ln(Z) puede crecer. Esa curvatura está asociada con [[derivada_segunda_log_particion_beta]] y, por tanto, con [[varianza_energia]]. Lo que se predice es un aumento de fluctuaciones energéticas al variar [[temperatura]]. En laboratorio, una señal relacionada puede verse como pico de [[capacidad_calorifica]]. La lectura es útil para distinguir una activación gradual de una reorganización colectiva. El límite de validez aparece si el modelo de microestados no incluye los estados relevantes o si se interpreta un ruido numérico como pico físico.

Para distinguir un pico real de [[capacidad_calorifica]] de un artefacto numérico, conviene calcular la [[varianza_energia]] por dos rutas independientes: desde la curvatura de la [[funcion_particion]] y desde las fluctuaciones directas del muestreo. Si ambas coinciden dentro del error estadístico, el pico puede considerarse físico. Si divergen, el intervalo de [[temperatura]] estudiado puede estar mal parametrizado.

## 5. Diseño de sensores térmicos microscópicos
Variable dominante: [[temperatura]]
Límite de validez: respuesta lineal local y fluctuaciones relativas compatibles con la resolución del sensor.

En sensores muy pequeños, las fluctuaciones térmicas no son un detalle secundario: pueden limitar la precisión. La [[funcion_particion]] ayuda a estimar la [[varianza_energia]] esperada para una [[temperatura]] dada, y con ella la incertidumbre asociada a la [[fluctuacion_energia]]. Lo que se constriñe es la resolución: si la fluctuación natural es grande, el sensor no puede distinguir cambios térmicos menores sin promediar durante más tiempo. La [[constante_boltzmann]] fija la escala microscópica de este ruido térmico. La aplicación falla si el sensor está fuera de equilibrio o si recibe energía externa no térmica, como radiación pulsada o corrientes parásitas.

El diseño cuantitativo de un sensor requiere conocer cuánto tiempo hay que promediar para que la incertidumbre estadística baje por debajo del umbral de detección. Ese tiempo de promedio crece con la [[varianza_energia]] y decrece con la [[energia_media]] de la señal. La [[funcion_particion]] proporciona ambas cantidades de forma consistente.