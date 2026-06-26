# Errores

## Errores conceptuales

### Error 1: Confundir temperatura absoluta [[T_K]] con variación de temperatura [[DeltaT]]

**Por qué parece correcto**

El alumno sabe que la temperatura se mide en kelvin en el SI y que el calor específico involucra temperatura, así que usa [[T_K]] directamente en la fórmula del calor específico como si fuera [[DeltaT]]. Como [[T_K]] siempre tiene un valor numérico positivo, el resultado parece razonable a primera vista.

**Por qué es incorrecto**

[[T_K]] es la temperatura del sistema en un instante dado; [[DeltaT]] es la diferencia entre la temperatura final y la temperatura inicial de un proceso. Son magnitudes distintas. La ley del calor específico requiere [[DeltaT]] (cuánto cambió la temperatura), no [[T_K]] (a qué temperatura está el sistema). Usar [[T_K]] en lugar de [[DeltaT]] produce un resultado que depende del origen arbitrario de la escala de temperatura, lo que carece de sentido físico para una magnitud de proceso.

**Señal de detección**

El calor calculado es enorme (del orden de centenas de kilojulios) cuando debería ser pequeño, o varía radicalmente si se expresa el mismo estado en una escala distinta. Si al pasar de Celsius a kelvin el resultado de calor cambia de forma que no se puede explicar por el cambio de unidades, se está usando temperatura absoluta en lugar de variación.

**Corrección conceptual**

[[DeltaT]] es la diferencia temperatura final menos temperatura inicial, en cualquier escala (Celsius o kelvin producen el mismo número). [[T_K]] es el estado del sistema y solo debe usarse en fórmulas que exigen temperatura absoluta (leyes de gases, Stefan-Boltzmann, Carnot). Para el calor específico, la dilatación y la calorimetría, siempre [[DeltaT]].

**Mini-ejemplo de contraste**

Un kilogramo de agua se calienta de 20 °C a 30 °C. [[DeltaT]] es 10 K (o 10 °C). [[T_K]] en el estado inicial es 293 K. Usar [[T_K]] en la fórmula del calor específico daría un calor absorbido proporcional a 293 K en lugar de a 10 K, un resultado 29 veces mayor que el correcto.

---

### Error 2: Creer que 0 °C equivale al cero absoluto

**Por qué parece correcto**

El alumno escucha "cero grados" y lo asocia con "ausencia de temperatura" o con el límite inferior de la escala. Como el cero de los números enteros es el límite entre positivos y negativos, parece natural pensar que 0 °C es el mínimo térmico.

**Por qué es incorrecto**

El cero Celsius es completamente arbitrario: fue escogido por Celsius como el punto de fusión del agua a presión estándar. El agua a 0 °C tiene una energía térmica de 273.15 kelvins por encima del cero absoluto. El cero absoluto verdadero es –273.15 °C, donde [[T_K]] es igual a cero, no donde [[T_C]] es igual a cero.

**Señal de detección**

El alumno dice que a 0 °C no hay temperatura o que el calor es cero. O usa directamente 0 °C en la ley de los gases ideales y obtiene volumen cero, que acepta sin cuestionar.

**Corrección conceptual**

El cero de una escala de temperatura es una referencia arbitraria, no el mínimo térmico. Solo el cero kelvin (0 K, igual a –273.15 °C) representa el mínimo termodinámico, y en la práctica nunca se alcanza. A 0 °C los cuerpos tienen energía térmica perfectamente real.

**Mini-ejemplo de contraste**

Un globo de gas a 0 °C no colapsa a volumen cero: el gas sigue ocupando un volumen determinado porque [[T_K]] es 273 K, no cero. Si [[T_C]] fuera el cero absoluto, la ley de gases daría volumen nulo, lo que contradice la observación directa.

## Errores de modelo

### Error 3: Invertir el orden de la resta al calcular [[DeltaT]]

**Por qué parece correcto**

El alumno calcula instintivamente "cuánto fue la temperatura inicial" y resta la final, porque la temperatura inicial es el valor "de partida" y le parece natural colocarlo primero. En algunos contextos lingüísticos "la variación desde A hasta B" se interpreta como A menos B.

**Por qué es incorrecto**

La convención universal en física es [[DeltaT]] igual a temperatura final menos temperatura inicial. Invertir el orden produce un [[DeltaT]] con signo opuesto: un proceso de calentamiento da [[DeltaT]] negativo y un proceso de enfriamiento da [[DeltaT]] positivo, lo que es contradictorio con el sentido físico del proceso.

**Señal de detección**

El calor calculado tiene signo contrario al esperado: sale negativo en un proceso donde el sistema claramente absorbe calor, o positivo en un proceso donde claramente lo cede.

**Corrección conceptual**

[[DeltaT]] se define siempre como estado final menos estado inicial, igual que cualquier otra variación en física (desplazamiento, variación de energía). Comprobar que un proceso de calentamiento da [[DeltaT]] positivo es el test de verificación más rápido.

**Mini-ejemplo de contraste**

Agua que se calienta de 20 °C a 80 °C. Calculado correctamente: [[DeltaT]] es 80 menos 20, resultado positivo 60 °C. Calculado con orden invertido: [[DeltaT]] es 20 menos 80, resultado negativo –60 °C. El signo negativo indicaría enfriamiento, lo que contradice el enunciado.

## Errores matemáticos

### Error 4: Omitir el desplazamiento de 32 o de 273.15 en la conversión de escala

**Por qué parece correcto**

El alumno recuerda que las escalas difieren por un factor multiplicativo (9/5 entre Fahrenheit y Celsius, o 1 entre Celsius y kelvin) pero olvida el término de desplazamiento de origen. Como el término multiplicativo es el más "visible" matemáticamente, el desplazamiento se omite.

**Por qué es incorrecto**

Las escalas de temperatura no tienen el mismo cero, por lo que la conversión no puede ser solo un factor multiplicativo: hay que desplazar el origen. Para Celsius-kelvin, el desplazamiento de 273.15 es la parte esencial de la conversión. Para Fahrenheit-Celsius, tanto el factor 9/5 como el +32 son obligatorios; omitir cualquiera de los dos da un resultado incorrecto.

**Señal de detección**

Para Celsius-kelvin: el resultado es [[T_K]] igual a [[T_C]], numéricamente idénticos. Para Fahrenheit-Celsius: el resultado del punto de fusión del agua (0 °C) no da 32 °F, o el punto de ebullición (100 °C) no da 212 °F.

**Corrección conceptual**

La conversión lineal entre escalas con cero distinto siempre tiene dos componentes: reescalado (factor multiplicativo) y desplazamiento (término aditivo). Ninguno puede omitirse. Los dos puntos de referencia del agua (fusión y ebullición) son el test de verificación estándar.

**Mini-ejemplo de contraste**

Convertir 100 °C a Fahrenheit. Correcto: multiplicar por 9/5 da 180, sumar 32 da 212 °F. Sin el desplazamiento: solo multiplicar por 9/5 da 180 °F, que es incorrecto (el punto de ebullición es 212 °F, no 180 °F).

## Errores de interpretación

### Error 5: Interpretar [[T_F]] negativo como un error de cálculo

**Por qué parece correcto**

El alumno asocia temperatura negativa con situaciones imposibles (como [[T_K]] negativo) y concluye que cualquier resultado negativo en una conversión de temperatura indica un error. Como [[T_K]] nunca es negativo, generaliza incorrectamente a todas las escalas.

**Por qué es incorrecto**

Solo [[T_K]] no puede ser negativo en termodinámica clásica. Tanto [[T_C]] como [[T_F]] pueden ser perfectamente negativos: hay temperaturas físicamente posibles por debajo de 0 °C (que corresponden a [[T_F]] negativos por debajo de –17.78 °C) y por debajo de –17.78 °C. [[T_F]] negativo simplemente indica temperatura por debajo de la referencia arbitraria del cero Fahrenheit.

**Señal de detección**

El alumno descarta el resultado –20 °F como incorrecto o lo convierte a positivo antes de presentarlo, sin razón física.

**Corrección conceptual**

El signo de [[T_C]] y [[T_F]] depende de la posición relativa de la temperatura respecto al cero arbitrario de cada escala. El único valor físicamente imposible es [[T_K]] negativo. Verificar usando [[T_K]] calculado: si [[T_K]] es positivo, el resultado en Celsius o Fahrenheit es válido sea cual sea su signo.

**Mini-ejemplo de contraste**

La temperatura de –30 °C corresponde a 243 K (positivo y correcto) y a –22 °F (negativo pero correcto). El nitrógeno líquido a 77 K corresponde a –196 °C y a –320.8 °F: ambos son negativos y físicamente perfectamente válidos.

## Regla de autocontrol rápido

Antes de dar por válida cualquier conversión de temperatura, verificar estas cuatro condiciones:

1. [[T_K]] es siempre positivo; si es negativo hay un error de datos en [[T_C]].
2. La diferencia entre [[T_K]] y [[T_C]] siempre es 273.15 (con variación solo por redondeo).
3. Para [[T_C]] en el punto de fusión del agua (0 °C) la conversión a [[T_F]] da exactamente 32; para [[T_C]] en el punto de ebullición (100 °C) da exactamente 212.
4. [[DeltaT]] tiene el mismo signo que el proceso: positivo para calentamiento, negativo para enfriamiento.
