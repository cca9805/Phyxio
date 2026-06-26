const e=`# Ejemplo tipo examen

## Enunciado

Un instrumento emite un sonido periódico cuyo espectro de amplitudes contiene líneas a 220 Hz, 660 Hz, 1100 Hz y 1540 Hz con amplitudes respectivas de 0.40 Pa, 0.25 Pa, 0.12 Pa y 0.06 Pa. Se pide: (a) identificar la frecuencia fundamental [[f1]] y el número de armónico [[n_arm]] de cada componente, (b) calcular el periodo [[T_per]] de la señal total, (c) comentar qué tipo de instrumento podría producir este espectro y qué timbre se esperaría.

## Datos

- Frecuencias del espectro: 220 Hz, 660 Hz, 1100 Hz, 1540 Hz
- Amplitudes correspondientes: 0.40 Pa, 0.25 Pa, 0.12 Pa, 0.06 Pa

## Definición del sistema

El sistema es un sonido periódico complejo cuyos componentes espectrales son los cuatro armónicos listados. Las magnitudes de interés son [[f1]], [[n_arm]] para cada componente, [[fn]], [[An]], [[T_per]] y la presión acústica total [[p_total]] que resulta de sumar esos componentes.

## Modelo físico

Se aplica el modelo de **serie de Fourier armónica**: las frecuencias del espectro son múltiplos enteros de [[f1]], y cada componente es un armónico de la serie. Las magnitudes clave son [[f1]], [[fn]], [[An]], [[T_per]] y [[p_total]].

## Justificación del modelo

El modelo de serie de Fourier armónica es válido porque las frecuencias del espectro son múltiplos de 220 Hz: 660 es 3 veces 220; 1100 es 5 veces 220; 1540 es 7 veces 220. El patrón es de armónicos impares (1, 3, 5, 7), coherente con una fuente de simetría de media onda. El modelo sería inválido si las frecuencias no fueran múltiplos enteros de un valor común, como ocurre en campanas o xilófonos.

## Resolución simbólica

Para identificar [[f1]], se busca el máximo común divisor de todas las frecuencias del espectro. Aplicando la relación entre armónicos y frecuencia fundamental:

{{f:frecuencia_armonico}}

Para calcular [[T_per]] a partir de [[f1]]:

{{f:periodo_fundamental}}

La forma de onda acústica completa se reconstruye con la serie de Fourier:

{{f:serie_fourier_presion}}

## Sustitución numérica

Máximo común divisor de 220, 660, 1100 y 1540: dividiendo sucesivamente, el MCD es 220 Hz. Por tanto [[f1]] es 220 Hz.

Verificación de [[n_arm]] para cada componente:
- 220 Hz: 220 dividido entre 220 da 1 → armónico 1 (fundamental), amplitud 0.40 Pa
- 660 Hz: 660 dividido entre 220 da 3 → armónico 3, amplitud 0.25 Pa
- 1100 Hz: 1100 dividido entre 220 da 5 → armónico 5, amplitud 0.12 Pa
- 1540 Hz: 1540 dividido entre 220 da 7 → armónico 7, amplitud 0.06 Pa

Los armónicos presentes son los impares 1, 3, 5, 7. Los armónicos pares (2, 4, 6...) tienen amplitud nula.

Periodo de la señal total: [[T_per]] es el inverso de 220 Hz, es decir, aproximadamente 4.55 ms.

La señal [[p_total]] se obtiene superponiendo los armónicos presentes con sus amplitudes: 0.40 Pa en el armónico 1, 0.25 Pa en el 3, 0.12 Pa en el 5 y 0.06 Pa en el 7. El resultado no es una sinusoide pura, sino una onda periódica con el mismo [[T_per]] y una forma determinada por [[An]].

## Validación dimensional

Frecuencia fundamental: máximo común divisor de frecuencias, dimensiones Hz, coherente con [[f1]] en Hz. ✓

Periodo: inverso de una frecuencia, dimensiones de tiempo en segundos. ✓

Razón [[n_arm]]: cociente de dos frecuencias, adimensional, resultado entero. ✓

## Interpretación física

La presencia exclusiva de armónicos impares es la firma acústica de instrumentos con resonador de tubo cilíndrico cerrado por un extremo, como el **clarinete** en su registro fundamental. La condición de frontera del tubo (nodo de presión en el extremo abierto, antinodo en el cerrado) solo permite modos de vibración impares, eliminando los armónicos pares del espectro.

El timbre esperado es **hueco y oscuro**: la ausencia de armónicos pares crea ese color particular que distingue al clarinete de los instrumentos con todos los armónicos. Además, la envolvente espectral decrece monótonamente con [[n_arm]] (0.40, 0.25, 0.12, 0.06 Pa), lo que indica un sonido relativamente suave, sin brillo exagerado en los agudos.

Con [[f1]] de 220 Hz, la nota correspondiente es la3 (A3), una octava por debajo del la4 estándar de afinación. El tono percibido es este la3 aunque el espectro solo contenga cuatro armónicos: el sistema auditivo infiere [[f1]] del espaciado entre las líneas espectrales incluso si el fundamental tiene amplitud pequeña.

---

# Ejemplo de aplicación real

## Contexto

En el diseño de un sintetizador de sonido, el programador quiere recrear el timbre de un clarinete en su registro fundamental (nota la3, [[f1]] de 220 Hz) usando síntesis aditiva. Dispone de un oscilador para cada armónico y debe configurar qué armónicos activar y con qué amplitud relativa para que el resultado sea reconocible como timbre de clarinete.

## Estimación física

La física del clarinete determina que en su registro fundamental solo están presentes los armónicos impares. Para que el sintetizador produzca un timbre reconocible como clarinete, hay que activar los osciladores en las frecuencias de los armónicos impares de [[f1]] y desactivar los de los pares.

Calculando las frecuencias de los primeros diez armónicos impares con [[f1]] de 220 Hz: armónico 1 a 220 Hz, armónico 3 a 660 Hz, armónico 5 a 1100 Hz, armónico 7 a 1540 Hz, armónico 9 a 1980 Hz. A partir del armónico 11 (2420 Hz), la amplitud real del clarinete ya es muy pequeña y su contribución perceptiva al timbre es marginal.

Para las amplitudes, la envolvente espectral del clarinete decrece aproximadamente como el inverso del número de armónico al cuadrado para los impares. Una aproximación práctica es dar al armónico 1 la amplitud de referencia; al armónico 3, aproximadamente la mitad; al armónico 5, aproximadamente un tercio de la mitad; y así sucesivamente.

La lectura cuantitativa del diseño es directa: con [[f1]] de 220 Hz, [[n_arm]] igual a 1, 3, 5, 7 y 9 produce [[fn]] de 220, 660, 1100, 1540 y 1980 Hz. Al asignar [[An]] decrecientes a esas líneas, la serie de Fourier genera una [[p_total]] periódica con [[T_per]] cercano a 4.55 ms y con timbre hueco por ausencia de armónicos pares.

## Interpretación

El resultado de activar únicamente los armónicos impares con esa envolvente decreciente produce un timbre que los oyentes identifican como "similar al clarinete" aunque no sea idéntico. Las diferencias perceptivas residuales se deben a que el timbre real del clarinete también incluye la envolvente temporal (ataque, sustain, decaimiento), el vibrato y pequeñas variaciones de afinación (inharmonicidad), que la síntesis aditiva estática no captura.

Esta aplicación ilustra el principio fundamental del leaf: el timbre es el espectro de amplitudes [[An]]. Modificar qué armónicos están presentes y con qué amplitudes es modificar el timbre, y hacerlo sistemáticamente permite diseñar cualquier color sonoro imaginable mediante síntesis aditiva. Esta es la base del funcionamiento de los sintetizadores modulares, los órganos de pipes virtuales y los instrumentos de orquesta virtual usados en producción musical profesional.
`;export{e as default};
