## Problema histórico

A finales del siglo XVIII, los constructores de máquinas de vapor necesitaban comparar el rendimiento de diferentes máquinas de forma objetiva. La potencia de una máquina dependía de la presión del vapor y del [[volumen]] del cilindro, pero no existía un método estándar para medir la energía producida por ciclo. La pregunta era: ¿cómo registrar simultáneamente la presión y el [[volumen]] de vapor en el cilindro durante el ciclo de trabajo para calcular el trabajo real?

## Dificultad conceptual previa

El obstáculo era instrumentar el cilindro sin interferir con su funcionamiento. La presión del vapor cambia dinámicamente durante el ciclo, y su relación con el [[volumen]] no era obvia. Además, no había una teoría matemática consolidada que conectara la curva p(V) con el trabajo realizado; la equivalencia integral-área no era parte del conocimiento común de los ingenieros de la época.

## Qué cambió

James Watt y su socio Matthew Boulton desarrollaron alrededor de 1796 el **indicador de vapor**: un dispositivo mecánico que trazaba automáticamente la curva p(V) en un papel mientras la máquina funcionaba. La aguja del indicador se movía verticalmente en proporción a la presión y horizontalmente en proporción al desplazamiento del émbolo, trazando el diagrama p-V del ciclo. El área encerrada por la curva se medía con un planímetro y era proporcional al trabajo neto por ciclo.

## Impacto en la física

El indicador de vapor demostró experimentalmente que el trabajo de un ciclo podía medirse como un área geométrica, mucho antes de que la termodinámica tuviera una formulación matemática rigurosa. Cuando Sadi Carnot (1824) y, más tarde, Clapeyron y Clausius formalizaron la termodinámica, el diagrama p-V ya era una herramienta establecida en la ingeniería. La equivalencia [[trabajo_termodinamico]] = ∫p dV quedó así justificada tanto experimentalmente como matemáticamente.

## Conexión con física moderna

Los analizadores modernos de combustión en motores usan sensores de presión piezoeléctricos y encoders de ángulo del cigüeñal para construir el diagrama p-V en tiempo real con frecuencias de muestreo de decenas de kilohercios. El software integra el área del ciclo para calcular la presión media efectiva y la potencia indicada de cada cilindro. Este diagnóstico en tiempo real, que salva directamente de la ecuación [[trabajo_termodinamico]] = área a la potencia del motor, es el heredero directo del indicador de vapor de Watt.