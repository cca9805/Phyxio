const e=`## Modelo ideal

El modelo que describe el tono y el timbre en este leaf es el de la **señal periódica estrictamente armónica**: la presión acústica total [[p_total]] es una suma finita (o infinita convergente) de sinusoides cuyas frecuencias [[fn]] son múltiplos enteros exactos de la frecuencia fundamental [[f1]]. Las amplitudes [[An]] son constantes en el tiempo: el espectro no varía durante el análisis.

Este modelo trata el sonido como un fenómeno en régimen estacionario: la fuente ha estado vibrando indefinidamente y lo seguirá haciendo, de modo que el espectro calculado con una ventana de tiempo de duración [[T_per]] o múltiplo es el espectro verdadero. El medio de propagación es lineal y homogéneo, de modo que la superposición es exacta y los armónicos no interactúan entre sí.

## Hipótesis

- **Estricta periodicidad:** La señal se repite exactamente cada [[T_per]] segundos. Si esta hipótesis se viola, los armónicos no son múltiplos enteros exactos de [[f1]] y el espectro ya no está compuesto de líneas discretas igualmente espaciadas. Violación típica: nota musical de duración finita, instrumento de percusión, o voz en transición.

- **Amplitudes constantes en el tiempo:** Los valores de [[An]] no cambian durante el análisis. Si la fuente está en proceso de ataque o decaimiento, [[An]] varía con el tiempo y el espectro instantáneo difiere del espectro estacionario. Violación típica: nota de piano recién golpeada, donde las amplitudes decaen exponencialmente.

- **Armónicos perfectamente enteros:** [[fn]] es exactamente n veces [[f1]] para todo n. En cuerdas rígidas, la inharmonicidad hace que los armónicos estén ligeramente desplazados respecto a los múltiplos exactos. El efecto es perceptible en cuerdas graves del piano y da lugar al "ensanchamiento" del tono percibido.

- **Superposición lineal válida:** Los armónicos se suman sin interacción. Esta hipótesis falla si la amplitud total es suficientemente grande para generar efectos no lineales en el medio o en el instrumento.

- **Espectro de línea (no continuo):** La señal es periódica y no contiene ruido ni transitorios. Los sonidos reales siempre tienen algún ruido de fondo que añade un pedestal continuo al espectro; el modelo lo ignora.

## Dominio de validez cuantitativo

El modelo de señal periódica armónica es válido cuando:

- La duración de la nota es mayor que unas 10 veces [[T_per]], de modo que el espectro calculado tiene resolución de [[f1]] o mejor. Para [[f1]] de 440 Hz, [[T_per]] es 2.27 ms y la duración mínima recomendada es de unos 23 ms, equivalente a una corchea a tempo rápido.
- La inharmonicidad es menor del 1 % en los primeros diez armónicos: la desviación de [[fn]] respecto a n·[[f1]] es menor de 0.01·[[f1]]. Para cuerdas de guitar con tensión y rigidez normales, este criterio se cumple hasta el armónico 8 o 10.
- Las amplitudes [[An]] varían menos del 10 % durante la ventana de análisis, de modo que el espectro puede considerarse estacionario.

Condición numérica concreta: la duración del análisis debe ser mayor que 10 × [[T_per]], es decir, mayor que 10 / [[f1]] segundos.

## Señales de fallo del modelo

- **Espectro no equiespaciado:** Si en la gráfica Coord del espectro las líneas no están igualmente separadas por [[f1]], el sonido es inarmónico o el modelo de señal periódica ha fallado. Sonidos de campana, xilófono o platillo siempre producen espectros con este aspecto.
- **Líneas espectrales ensanchadas:** Si en lugar de líneas discretas aparecen picos anchos, la señal no es estrictamente periódica durante la ventana de análisis; hay modulación de frecuencia o amplitud, o el sonido es transitorio.
- **Pedestal de ruido visible:** Si entre las líneas espectrales hay un nivel elevado de energía continua, el sonido contiene ruido o transitorios que el modelo ignora. Esto es habitual en sonidos de fricción (violín en el instante de inicio del arco) o de percusión.
- **[[An]] que varían al cambiar la ventana:** Si el espectro cambia significativamente al desplazar la ventana de análisis, la señal no es estacionaria y el modelo de amplitudes constantes ha fallado.

## Modelo extendido o alternativo

El modelo de **espectro de tiempo-frecuencia** (espectrograma) extiende el análisis estacionario a señales no estacionarias. En lugar de calcular un único espectro global, calcula espectros en ventanas deslizantes solapadas, produciendo una representación tridimensional de la energía en función de la frecuencia y el tiempo. Este modelo es indispensable para analizar la voz (que cambia de fonema en fonema), notas musicales con ataque y decaimiento, o cualquier señal cuyo espectro evoluciona con el tiempo.

Para sonidos inarmónicos (campanas, platillos, instrumentos de placas), el modelo alternativo es el de **espectro continuo con picos**: las componentes espectrales no están ligadas a una fundamental por una relación de múltiplo entero, y cada parcial tiene su propia frecuencia y amplitud.

Cuando conviene pasar al modelo de espectrograma: cuando la nota tiene ataque y decaimiento distintos, cuando el timbre cambia durante la nota (como en un violín con vibrato), o cuando se analiza la voz humana en habla continua; cambiar al espectro de parciales inarmónicos cuando el sonido analizado es de percusión con placas, campanas o cualquier resonador de geometría no cilíndrica ni esférica.

## Comparación operativa

| Criterio | Serie de Fourier armónica | Espectrograma | Parciales inarmónicos |
|---|---|---|---|
| Tipo de señal | Periódica estacionaria | No estacionaria | Inarmónica (campana, platillo) |
| Espectro resultante | Líneas discretas equiespaciadas | Líneas o bandas variables en el tiempo | Líneas discretas no equiespaciadas |
| Tono percibido | Bien definido por [[f1]] | Variable con el tiempo | Ambiguo o inexistente |
| Timbre | Definido por espectro estático | Definido por evolución temporal del espectro | Definido por frecuencias y amplitudes de cada parcial |
| Aplicación típica | Instrumentos sostenidos, voz en vocal | Voz en habla, instrumentos con vibrato | Percusión con placas, campanas, xilófonos |
| Complejidad matemática | Baja (serie de Fourier discreta) | Media (FFT con ventana deslizante) | Media-alta (análisis de parciales) |
`;export{e as default};
