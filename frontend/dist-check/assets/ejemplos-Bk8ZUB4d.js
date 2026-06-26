const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
Una rueda rígida de radio [[R]] 0.30 m rueda sobre una cinta horizontal. En un instante se miden velocidad lineal [[v]] del centro de 3.60 m/s y velocidad angular [[omega]] de 12 rad/s. Se pide verificar si hay rodadura sin deslizamiento, calcular [[v_contacto]], obtener el indicador de deslizamiento [[delta]] e interpretar físicamente el resultado. Además, durante una fase posterior se mide una aceleración angular [[alpha]] de 5.0 rad/s^2 y se pide la aceleración lineal [[a]] compatible con rodadura pura.\r
\r
## Datos\r
- Radio: 0.30 m\r
- Velocidad lineal: 3.60 m/s\r
- Velocidad angular: 12 rad/s\r
- Aceleración angular: 5.0 rad/s^2\r
\r
## Definición del sistema\r
Tomamos como sistema la rueda rígida. El entorno está formado por la superficie horizontal y el mecanismo que arrastra la cinta. Elegimos positivo el sentido de avance de la cinta y el giro compatible con ese avance. Con ese convenio, comparar avance y rotación se vuelve inmediato y el signo del residuo se puede interpretar sin ambigüedad.\r
\r
## Modelo físico\r
El modelo del leaf no parte imponiendo la ligadura, sino comprobándola. Para ello usamos la condición de rodadura pura para comparar avance y giro, la velocidad del punto de contacto para leer directamente el apoyo, un residuo [[delta]] para clasificar el régimen y la relación entre [[a]] y [[alpha]] para la fase acelerada si la rodadura sigue siendo pura.\r
\r
La idea física es sencilla: primero se diagnostica el contacto y solo después se aprovecha la simplificación geométrica del modelo ideal.\r
\r
## Justificación del modelo\r
Esta elección de modelo es correcta porque el problema pide precisamente validar la condición de rodadura. Si impusiéramos la igualdad principal desde la primera línea, convertiríamos en dato lo que el enunciado nos está pidiendo comprobar.\r
\r
Además, la rueda es rígida, el radio efectivo está bien definido y el movimiento se observa sobre una superficie horizontal simple. Eso hace razonable empezar con el modelo ideal como hipótesis de trabajo, pero no como conclusión ya cerrada. La diferencia es importante: aquí la física consiste en medir si el contacto sostiene realmente la ligadura.\r
\r
## Resolución simbólica\r
La relación de rodadura pura es\r
\r
{{f:condicion_rodadura}}\r
\r
Aplicamos explícitamente la relación local de velocidad de contacto para verificarla:\r
\r
{{f:velocidad_contacto}}\r
\r
También escribimos el indicador de deslizamiento:\r
\r
{{f:consistencia_rodadura}}\r
\r
Si el régimen sigue siendo ideal durante una fase acelerada, entonces\r
\r
{{f:relacion_aceleracion}}\r
\r
## Sustitución numérica\r
Primero calculamos el avance compatible con el giro:\r
\r
{{f:velocidad_contacto}}\r
\r
Ahora evaluamos la velocidad del punto de contacto:\r
\r
{{f:velocidad_contacto}}\r
\r
El indicador de deslizamiento vale\r
\r
{{f:consistencia_rodadura}}\r
\r
Por tanto, el dato lineal y el dato angular son completamente compatibles con rodadura pura.\r
\r
Para la fase acelerada:\r
\r
{{f:relacion_aceleracion}}\r
\r
## Validación dimensional\r
En la condición de rodadura, una velocidad angular multiplicada por una longitud produce una velocidad lineal. En la expresión de la velocidad de contacto y en la del residuo, todos los términos tienen dimensión de velocidad. En la relación de aceleraciones, una aceleración angular multiplicada por un radio produce una aceleración lineal. Las cuatro expresiones son dimensionalmente coherentes.\r
\r
También es coherente el orden de magnitud. Un radio de treinta centímetros y una velocidad de algunos metros por segundo conducen de forma natural a una velocidad angular de unas pocas decenas de radianes por segundo, no a cientos ni a milésimas.\r
\r
## Interpretación física\r
El resultado importante no es solo que la cuenta cierre, sino que el contacto queda instantáneamente en reposo respecto a la superficie. Como la velocidad de contacto vale cero y el residuo también vale cero, no hay ni derrape ni patinamiento. La rueda avanza exactamente lo que exige su giro.\r
\r
Eso tiene una lectura física muy clara. Si observáramos una marca en la periferia, esa marca llegaría al suelo y, durante un instante, no rascaría la cinta. El sistema está, por tanto, en el régimen ideal descrito por el leaf.\r
\r
La segunda parte del ejercicio añade una lectura todavía más rica. La aceleración lineal compatible con la aceleración angular es 1.5 m/s^2. Eso no es una fórmula nueva, sino la prolongación temporal de la misma ligadura geométrica. Mientras el contacto siga siendo adherente y el radio efectivo no cambie, el acoplamiento entre traslación y rotación se mantiene también en las tasas de cambio.\r
\r
Si en una medición posterior apareciera una aceleración lineal incompatible con la aceleración angular, el mensaje físico no sería “la ecuación está mal”, sino “la rodadura ideal ha dejado de valer”. Esa diferencia entre error algebraico y cambio de régimen es justo lo que el leaf quiere entrenar.\r
\r
---\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
En un sistema ABS o de control de tracción, la centralita compara continuamente la velocidad del vehículo con la velocidad periférica de cada rueda. La pregunta práctica es la misma que en el ejemplo anterior: si el avance real del coche sigue siendo compatible con el giro de la rueda o si el contacto ya está empezando a deslizar.\r
\r
En automoción esta lectura es crítica porque una pequeña desviación bien detectada permite intervenir antes de que aparezcan bloqueo, pérdida de adherencia fuerte o desgaste innecesario. El leaf es por tanto directamente transferible a una aplicación tecnológica real.\r
\r
## Estimación física\r
Supongamos una rueda de automóvil con radio 0.32 m. Durante una frenada moderada el coche avanza a 22.0 m/s y el sensor de la rueda mide 68 rad/s.\r
\r
La velocidad periférica ideal sería\r
\r
{{f:velocidad_contacto}}\r
\r
Calculamos ahora la velocidad de contacto:\r
\r
{{f:velocidad_contacto}}\r
\r
Y el residuo de régimen:\r
\r
{{f:consistencia_rodadura}}\r
\r
El valor es pequeño comparado con la propia velocidad del vehículo. El orden de magnitud sugiere que la rueda sigue cerca de rodadura pura, pero ya no está en coincidencia exacta con el movimiento ideal.\r
\r
## Interpretación\r
El signo positivo del residuo indica que el vehículo avanza un poco más de lo que acompaña el giro de la rueda. Eso corresponde al inicio de derrape durante la frenada. Todavía no hay bloqueo completo, pero el contacto ya no es perfecto.\r
\r
Esa lectura cuantitativa es exactamente la que necesita un sistema de control. Si la centralita detecta que el residuo crece demasiado rápido, libera presión de frenado y devuelve la rueda hacia un régimen con mejor adherencia. Si el residuo se mantiene pequeño, puede seguir frenando con intensidad sin perder estabilidad.\r
\r
La aplicación real enseña algo importante: el valor físico del leaf no está solo en resolver un problema escolar, sino en traducir una diferencia pequeña entre avance y giro en una decisión de control con impacto directo en seguridad.`;export{e as default};
