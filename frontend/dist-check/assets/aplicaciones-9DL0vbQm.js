const e=`# Aplicaciones de los interruptores eléctricos\r
\r
## 1. Diagnóstico de calentamiento en interruptores de alta potencia\r
\r
Un interruptor que controla un calefactor de 2 500 W a 230 V conduce Con [[I]] ≈ 11 A y [[R_on]] = 0,06 Ω, [[P_on]] supera el umbral de riesgo de 5 W. La carcasa alcanza una temperatura apreciable al tacto. El diagnóstico utiliza la fórmula [[P_on]] = [[I]]² · [[R_on]]: el riesgo no es de sobrecarga del circuito (el magnetotérmico no actúa porque [[I]] está dentro de su calibre), sino de degradación térmica local del contacto del interruptor.\r
\r
**Variable dominante:** [[P_on]] — determina el riesgo térmico del contacto.\r
\r
**Límite de validez:** Modelo estático válido para carga resistiva pura. Si la carga fuera inductiva, considerar la corriente de arranque.\r
\r
## 2. Selección de interruptor para instalación de clima\r
\r
En una instalación de aire acondicionado de [[P]] = 3 500 W a [[V]] = 230 V, Con [[I]] ≈ 15 A, incluso un [[R_on]] = 0,03 Ω genera [[P_on]] cercana al umbral de vigilancia. La selección correcta del interruptor requiere conocer [[I]] de la carga y exigir [[R_on]] máxima al fabricante para garantizar [[P_on]] en zona segura durante el uso continuo.\r
\r
**Variable dominante:** [[R_on]] — define qué pérdida tendrá el interruptor a la corriente de la carga.\r
\r
**Límite de validez:** El compresor del aire acondicionado es una carga inductiva con corriente de arranque de 4–6 × [[I]] nominal. El modelo estático aplica en régimen permanente; el arranque requiere análisis adicional.\r
\r
## 3. Análisis energético de interruptores de iluminación con uso intensivo\r
\r
En una oficina, un interruptor controla [[P]] = 500 W de iluminación fluorescente a [[V]] = 230 V. Con [[R_on]] = 0,03 Ω y [[I]] ≈ 2,2 A, [[P_on]] es menor de 0,2 W por interruptor — negligible individualmente. Escalado a 50 interruptores y 10 h/día de uso, la energía acumulada anual [[E_on]] es del orden de 25 kWh — pequeña económicamente pero medible físicamente.\r
\r
**Variable dominante:** [[E_on]] — permite escalar el análisis a un período de tiempo y un conjunto de dispositivos.\r
\r
**Límite de validez:** Las lámparas fluorescentes tienen factor de potencia < 1 (típico 0,85–0,9), por lo que [[I]] real puede ser mayor que [[P]]/[[V]]. Para un cálculo preciso, usar [[I]] = [[P]] / ([[V]] · fp).\r
\r
## 4. Termostatos y ciclos de maniobra frecuentes\r
\r
Un termostato de calefacción cicla 10 veces por hora con [[P]] = 1 500 W a [[V]] = 230 V. Con [[R_on]] = 0,04 Ω y [[I]] ≈ 6,5 A, [[P_on]] ≈ 1,7 W — zona de vigilancia. Con [[t_on]] = 12 h/día al 50 % de ciclo, [[E_on]] diaria es del orden de 10 Wh. En una temporada de calefacción de 150 días, la energía acumulada [[E_on]] supera 1 kWh. El número de maniobras anuales determina la vida útil estimada del termostato.\r
\r
**Variable dominante:** [[t_on]] — determina la energía acumulada y, combinado con la frecuencia de maniobra, la vida útil estimada.\r
\r
**Límite de validez:** La vida útil en maniobras depende también de la corriente de arranque de la carga (caldera vs. resistencia pura). El cálculo de 100 000 maniobras es solo orientativo.\r
\r
## 5. Educación en seguridad eléctrica doméstica\r
\r
En un taller de seguridad eléctrica para usuarios domésticos, el análisis de [[P_on]] y [[R_on]] ilustra por qué los interruptores de electrodomésticos de alta potencia deben revisarse periódicamente. La lección central: un interruptor que "funciona" (abre y cierra el circuito) puede estar en degradación térmica activa ([[P_on]] > 5 W) sin que ninguna protección del circuito lo detecte, porque el diferencial y el magnetotérmico protegen el cableado, no el dispositivo de maniobra.\r
\r
La magnitud [[R_on]] conecta la física del contacto con la seguridad práctica: [[R_on]] < 0,05 Ω → seguro; 0,05–0,2 Ω → vigilar; > 0,2 Ω → inspeccionar; > 0,5 Ω → sustituir. Estos umbrales permiten al técnico diagnosticar el estado del interruptor con un ohmímetro sin necesidad de desmontar la instalación.\r
\r
**Variable dominante:** [[R_on]] — parámetro diagnóstico de estado del contacto, medible directamente.\r
\r
**Límite de validez:** Los umbrales de [[R_on]] son orientativos para interruptores domésticos de 10–16 A. Para interruptores industriales de mayor corriente nominal, los umbrales son más estrictos (menores valores de [[R_on]] para la misma [[P_on]] admisible).\r
\r
## Consideraciones generales de mantenimiento\r
\r
El analisis de [[P_on]] y [[R_on]] en los interruptores domesticos tiene implicaciones practicas directas para el mantenimiento preventivo de instalaciones electricas. Un programa de inspeccion periodica basado en medir [[R_on]] con un ohmimetro de precision puede identificar interruptores en estado de degradacion antes de que presenten sintomas visibles de calentamiento.\r
\r
El criterio de decision es simple y cuantitativo: medir [[R_on]], calcular [[P_on]] = [[I]]^2 x [[R_on]] para la corriente nominal de la carga, y comparar con los umbrales de 1 W (vigilar) y 5 W (sustituir). Este procedimiento se puede realizar sin desmontar la instalacion y permite priorizar las sustituciones por nivel de riesgo real.\r
\r
Para instalaciones con muchos interruptores del mismo tipo (edificios de oficinas, instalaciones industriales), el enfoque estadistico es util: medir una muestra representativa de interruptores con diferente antiguedad y trazar la distribucion de [[R_on]] para estimar la fraccion que ya supera el umbral de riesgo. Esta informacion permite planificar las sustituciones de forma preventiva, antes de que ocurran fallos en servicio.\r
\r
La magnitud [[E_on]] complementa el analisis de [[P_on]] cuando se quiere estimar el impacto energetico global de los interruptores en la instalacion. Aunque individualmente la perdida en cada interruptor es pequena, en instalaciones con decenas o centenares de interruptores de alta potencia la suma puede ser relevante para los objetivos de eficiencia energetica del edificio.\r
`;export{e as default};
