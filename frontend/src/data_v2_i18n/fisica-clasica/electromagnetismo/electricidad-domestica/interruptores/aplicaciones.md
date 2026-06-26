# Aplicaciones

## 1. Diagnóstico de calentamiento en interruptores de alta potencia

Un interruptor que controla un calefactor de 2 500 W a 230 V conduce Con [[corriente_de_maniobra]] ≈ 11 A y [[resistencia_en_estado_on]] = 0,06 Ω, [[perdida_resistiva_en_on]] supera el umbral de riesgo de 5 W. La carcasa alcanza una temperatura apreciable al tacto. El diagnóstico utiliza la fórmula [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]² · [[resistencia_en_estado_on]]: el riesgo no es de sobrecarga del circuito (el magnetotérmico no actúa porque [[corriente_de_maniobra]] está dentro de su calibre), sino de degradación térmica local del contacto del interruptor.

Variable dominante: ** [[perdida_resistiva_en_on]] — determina el riesgo térmico del contacto.

Límite de validez: ** Modelo estático válido para carga resistiva pura. Si la carga fuera inductiva, considerar la corriente de arranque.

## 2. Selección de interruptor para instalación de clima

En una instalación de aire acondicionado de [[potencia_de_la_carga]] = 3 500 W a [[tension_de_alimentacion]] = 230 V, Con [[corriente_de_maniobra]] ≈ 15 A, incluso un [[resistencia_en_estado_on]] = 0,03 Ω genera [[perdida_resistiva_en_on]] cercana al umbral de vigilancia. La selección correcta del interruptor requiere conocer [[corriente_de_maniobra]] de la carga y exigir [[resistencia_en_estado_on]] máxima al fabricante para garantizar [[perdida_resistiva_en_on]] en zona segura durante el uso continuo.

Variable dominante: ** [[resistencia_en_estado_on]] — define qué pérdida tendrá el interruptor a la corriente de la carga.

Límite de validez: ** El compresor del aire acondicionado es una carga inductiva con corriente de arranque de 4–6 × [[corriente_de_maniobra]] nominal. El modelo estático aplica en régimen permanente; el arranque requiere análisis adicional.

## 3. Análisis energético de interruptores de iluminación con uso intensivo

En una oficina, un interruptor controla [[potencia_de_la_carga]] = 500 W de iluminación fluorescente a [[tension_de_alimentacion]] = 230 V. Con [[resistencia_en_estado_on]] = 0,03 Ω y [[corriente_de_maniobra]] ≈ 2,2 A, [[perdida_resistiva_en_on]] es menor de 0,2 W por interruptor — negligible individualmente. Escalado a 50 interruptores y 10 h/día de uso, la energía acumulada anual [[energia_disipada_en_conduccion]] es del orden de 25 kWh — pequeña económicamente pero medible físicamente.

Variable dominante: ** [[energia_disipada_en_conduccion]] — permite escalar el análisis a un período de tiempo y un conjunto de dispositivos.

Límite de validez: ** Las lámparas fluorescentes tienen factor de potencia < 1 (típico 0,85–0,9), por lo que [[corriente_de_maniobra]] real puede ser mayor que [[potencia_de_la_carga]]/[[tension_de_alimentacion]]. Para un cálculo preciso, usar [[corriente_de_maniobra]] .

## 4. Termostatos y ciclos de maniobra frecuentes

Un termostato de calefacción cicla 10 veces por hora con [[potencia_de_la_carga]] = 1 500 W a [[tension_de_alimentacion]] = 230 V. Con [[resistencia_en_estado_on]] = 0,04 Ω y [[corriente_de_maniobra]] ≈ 6,5 A, [[perdida_resistiva_en_on]] ≈ 1,7 W — zona de vigilancia. Con [[t_on]] = 12 h/día al 50 % de ciclo, [[energia_disipada_en_conduccion]] diaria es del orden de 10 Wh. En una temporada de calefacción de 150 días, la energía acumulada [[energia_disipada_en_conduccion]] supera 1 kWh. El número de maniobras anuales determina la vida útil estimada del termostato.

Variable dominante: ** [[t_on]] — determina la energía acumulada y, combinado con la frecuencia de maniobra, la vida útil estimada.

Límite de validez: ** La vida útil en maniobras depende también de la corriente de arranque de la carga (caldera vs. resistencia pura). El cálculo de 100 000 maniobras es solo orientativo.

## 5. Educación en seguridad eléctrica doméstica

En un taller de seguridad eléctrica para usuarios domésticos, el análisis de [[perdida_resistiva_en_on]] y [[resistencia_en_estado_on]] ilustra por qué los interruptores de electrodomésticos de alta potencia deben revisarse periódicamente. La lección central: un interruptor que "funciona" (abre y cierra el circuito) puede estar en degradación térmica activa ([[perdida_resistiva_en_on]] > 5 W) sin que ninguna protección del circuito lo detecte, porque el diferencial y el magnetotérmico protegen el cableado, no el dispositivo de maniobra.

La magnitud [[resistencia_en_estado_on]] conecta la física del contacto con la seguridad práctica: [[resistencia_en_estado_on]] < 0,05 Ω → seguro; 0,05–0,2 Ω → vigilar; > 0,2 Ω → inspeccionar; > 0,5 Ω → sustituir. Estos umbrales permiten al técnico diagnosticar el estado del interruptor con un ohmímetro sin necesidad de desmontar la instalación.

Variable dominante: ** [[resistencia_en_estado_on]] — parámetro diagnóstico de estado del contacto, medible directamente.

Límite de validez: ** Los umbrales de [[resistencia_en_estado_on]] son orientativos para interruptores domésticos de 10–16 A. Para interruptores industriales de mayor corriente nominal, los umbrales son más estrictos (menores valores de [[resistencia_en_estado_on]] para la misma [[perdida_resistiva_en_on]] admisible).

## Consideraciones generales de mantenimiento

El analisis de [[perdida_resistiva_en_on]] y [[resistencia_en_estado_on]] en los interruptores domesticos tiene implicaciones practicas directas para el mantenimiento preventivo de instalaciones electricas. Un programa de inspeccion periodica basado en medir [[resistencia_en_estado_on]] con un ohmimetro de precision puede identificar interruptores en estado de degradacion antes de que presenten sintomas visibles de calentamiento.

El criterio de decision es simple y cuantitativo: medir [[resistencia_en_estado_on]], calcular [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]^2 x [[resistencia_en_estado_on]] para la corriente nominal de la carga, y comparar con los umbrales de 1 W (vigilar) y 5 W (sustituir). Este procedimiento se puede realizar sin desmontar la instalacion y permite priorizar las sustituciones por nivel de riesgo real.

Para instalaciones con muchos interruptores del mismo tipo (edificios de oficinas, instalaciones industriales), el enfoque estadistico es util: medir una muestra representativa de interruptores con diferente antiguedad y trazar la distribucion de [[resistencia_en_estado_on]] para estimar la fraccion que ya supera el umbral de riesgo. Esta informacion permite planificar las sustituciones de forma preventiva, antes de que ocurran fallos en servicio.

La magnitud [[energia_disipada_en_conduccion]] complementa el analisis de [[perdida_resistiva_en_on]] cuando se quiere estimar el impacto energetico global de los interruptores en la instalacion. Aunque individualmente la perdida en cada interruptor es pequena, en instalaciones con decenas o centenares de interruptores de alta potencia la suma puede ser relevante para los objetivos de eficiencia energetica del edificio.