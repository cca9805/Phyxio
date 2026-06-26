## Errores conceptuales

### Error 1: Confundir tono con intensidad

**Por qué parece correcto**

En el lenguaje cotidiano, "bajar el volumen" puede confundirse con "bajar el tono". Además, un sonido muy suave parece más grave que uno muy fuerte, efecto real conocido como efecto Fletcher-Munson. Esta correlación aparente sugiere que tono e intensidad son la misma cosa.

**Por qué es incorrecto**

El tono es el correlato perceptivo de [[f1]]; la intensidad es el correlato perceptivo de la [[An]] global o de la amplitud de presión. Son magnitudes físicamente independientes: una nota de flauta a gran volumen sigue siendo aguda, y un violonchelo a pianísimo sigue siendo grave. La correlación percibida en casos extremos (efecto Fletcher-Munson) es una distorsión psicoacústica secundaria, no una ley física fundamental.

**Señal de detección**

El alumno afirma que "aumentar el volumen sube el tono" o calcula [[f1]] a partir de la amplitud de la señal en lugar de medir el periodo o el espectro.

**Corrección conceptual**

[[f1]] determina el tono; [[An]] determina la intensidad. Para cambiar el tono hay que cambiar la frecuencia de vibración de la fuente; para cambiar la intensidad, hay que cambiar la amplitud de las oscilaciones. Ambos parámetros son independientes.

**Mini-ejemplo de contraste**

Un diapasón de 440 Hz golpeado suavemente y golpeado fuertemente produce el mismo tono (la4) a distintos volúmenes. Si el tono dependiera de la intensidad, el diapasón golpeado fuertemente sonaría como una nota distinta, lo que no ocurre.

---

### Error 2: Creer que el timbre es simplemente "el instrumento"

**Por qué parece correcto**

La definición operativa habitual es "el timbre es lo que diferencia dos instrumentos que tocan la misma nota". Esta definición describe correctamente el efecto perceptivo, pero no explica el mecanismo físico, lo que deja al alumno sin herramienta para cuantificarlo o modificarlo.

**Por qué es incorrecto**

El timbre es una propiedad física cuantificable: es la distribución de amplitudes [[An]] en la serie de Fourier del sonido. Dos instrumentos con distintos timbres tienen distintos espectros de amplitudes. Esto significa que el timbre puede medirse, representarse en una gráfica Coord, compararse numéricamente y modificarse mediante filtros o síntesis. No es una categoría subjetiva sin sustrato físico.

**Señal de detección**

El alumno no puede describir qué cambia físicamente entre un violín y una flauta más allá de "suenan diferente", o afirma que el timbre no puede representarse ni calcularse.

**Corrección conceptual**

El timbre corresponde al espectro de amplitudes [[An]] de los armónicos. Un sonido con solo la fundamental tiene el timbre de una sinusoide pura (suave, sin brillo). Añadir amplitudes en los armónicos superiores añade brillo, aspereza o calidez, según cuáles sean los armónicos potenciados. El espectrograma de un instrumento es la huella objetiva de su timbre.

**Mini-ejemplo de contraste**

Si se filtra un oboe electrónicamente para eliminar los armónicos por encima del quinto, el timbre resultante se parece al de una flauta. Dos instrumentos distintos se vuelven perceptivamente similares modificando el espectro de amplitudes. Esto prueba que el timbre reside en el espectro, no en la naturaleza del instrumento como categoría.

## Errores de modelo

### Error 1: Suponer que la suma de dos sonidos de igual frecuencia siempre da el doble de amplitud

**Por qué parece correcto**

La superposición lineal dice que se suman las señales. Si dos sinusoides de igual frecuencia y amplitud [[An]] se suman, parece natural que la amplitud resultante sea el doble. En muchos contextos esto es correcto y da la impresión de ser una regla general.

**Por qué es incorrecto**

La amplitud de la suma depende de la **fase relativa** de las dos señales. Si están en fase (diferencia de fase nula), la amplitud se duplica. Si están en antifase (desfase de 180°), las señales se cancelan y la amplitud total es cero. Para fases intermedias, la amplitud resultante puede tomar cualquier valor entre cero y el doble de la amplitud individual. Este error lleva a predecir intensidades erróneas en problemas de superposición e interferencia.

**Señal de detección**

El alumno suma directamente las amplitudes [[An]] de dos armónicos de igual frecuencia para obtener la amplitud total, sin considerar la fase relativa.

**Corrección conceptual**

Para sumar dos sinusoides de igual frecuencia, hay que usar la suma vectorial de sus amplitudes complejas (o equivalentemente, la regla del coseno: la amplitud resultante depende del cuadrado de la suma más dos veces el producto de las amplitudes por el coseno de la diferencia de fase).

**Mini-ejemplo de contraste**

Dos altavoces emiten el mismo tono puro a igual amplitud. En ciertos puntos de la sala (interferencia destructiva), no se escucha nada; en otros (interferencia constructiva), el volumen es el máximo. Si la suma fuera siempre el doble de la amplitud, no habría puntos de silencio, lo que contradice la experiencia cotidiana en salas con acústica deficiente.

### Error 2: Aplicar la serie de Fourier armónica a sonidos inarmónicos

**Por qué parece correcto**

La serie de Fourier se enseña como una herramienta universal para descomponer cualquier señal periódica. Si el alumno escucha "universal" entiende "siempre aplicable", incluyendo campanas, xilófonos y percusión en general.

**Por qué es incorrecto**

La serie de Fourier armónica asume que los componentes espectrales son múltiplos enteros de [[f1]]. Las campanas y otros instrumentos de percusión de placas tienen parciales inarmónicos: sus componentes espectrales no satisfacen la relación [[fn]] igual a n veces [[f1]]. Aplicar la serie armónica a una campana produce un [[f1]] "aparente" que no corresponde a ninguna componente real del sonido, y las frecuencias calculadas para los armónicos superiores no coinciden con las frecuencias reales del espectro.

**Señal de detección**

El alumno identifica una [[f1]] y calcula las frecuencias de los armónicos, pero al comparar con el espectro medido, los armónicos calculados no coinciden con las líneas espectrales reales.

**Corrección conceptual**

Para sonidos inarmónicos, el espectro debe describirse con las frecuencias y amplitudes reales de cada parcial, sin imponer que sean múltiplos enteros de ninguna fundamental. El tono percibido en estos sonidos, si existe, resulta de mecanismos psicoacústicos complejos, no de la presencia de una fundamental física.

**Mini-ejemplo de contraste**

Una campana de iglesia tiene parciales en frecuencias que no son múltiplos enteros entre sí. Si se aplica la serie armónica y se calcula la "fundamental" como el máximo común divisor de las frecuencias medidas, el resultado puede ser una frecuencia muy baja que en realidad no está presente en el espectro de la campana, lo que da una predicción incorrecta de su "nota".

## Errores matemáticos

### Error 1: Confundir el número de armónico con el número de sobretonos

**Por qué parece correcto**

En acústica musical se usan dos terminologías: la de armónicos, que cuenta la fundamental como primer componente, y la de sobretonos, que empieza a contar desde el componente situado por encima de la fundamental. La inconsistencia entre terminologías crea confusión especialmente cuando se estudian fuentes con solo armónicos impares.

**Por qué es incorrecto**

Si se confunde el número de sobretonos con el número de armónico, la frecuencia calculada será (n+1) veces [[f1]] en lugar de n veces [[f1]] para el sobretonos n. Para el segundo sobretonos (tercer armónico) en un clarinete, la frecuencia real es 3 veces [[f1]], no 2 veces [[f1]]. El error desplaza todo el espectro calculado y produce frecuencias equivocadas.

**Señal de detección**

El espectro calculado por el alumno está desplazado un factor respecto al medido; el primer componente calculado coincide con la segunda línea real del espectro.

**Corrección conceptual**

Usar siempre la nomenclatura de armónicos: el armónico 1 es la fundamental con frecuencia [[f1]]; el armónico n tiene frecuencia n veces [[f1]]. Si el enunciado usa "sobretonos", el sobretonos n corresponde al armónico (n+1).

**Mini-ejemplo de contraste**

Un clarinete en do3 tiene [[f1]] de 131 Hz y produce armónicos impares. El primer sobretonos del clarinete es su segundo sobretonos acústico, es decir, el tercer armónico, a 393 Hz. Si el alumno lo llama "primer sobretonos igual a segundo armónico" pero calcula la frecuencia como 2 veces [[f1]] (262 Hz), obtiene un resultado erróneo que no corresponde a ningún componente real del clarinete.

## Errores de interpretación

### Error 1: Leer el tono percibido como la frecuencia de mayor amplitud en el espectro

**Por qué parece correcto**

El armónico más intenso es el que domina la energía del sonido, y parece razonable que el oído lo use como referencia para el tono. Además, en muchos instrumentos el fundamental sí es el armónico de mayor amplitud, lo que refuerza la asociación.

**Por qué es incorrecto**

El tono percibido corresponde a [[f1]], la frecuencia más baja del espectro, no a la de mayor amplitud. En instrumentos donde el fundamental tiene amplitud pequeña (o donde directamente está ausente por el fenómeno del tono faltante), el oído infiere [[f1]] a partir del espaciado entre los armónicos superiores. Si se identifica el tono con el armónico más intenso, se obtiene una nota equivocada para estos instrumentos.

**Señal de detección**

El alumno identifica el tono de una nota con la línea espectral de mayor altura en la gráfica, en lugar de identificar [[f1]] como la línea de menor frecuencia o el máximo común divisor de las frecuencias presentes.

**Corrección conceptual**

El tono corresponde siempre a [[f1]], la frecuencia más baja del patrón armónico. Para identificarla desde el espectro, buscar la primera línea visible o calcular el máximo común divisor de las frecuencias de todas las líneas.

**Mini-ejemplo de contraste**

Una tuba tocando un do grave puede tener el armónico 2 o 3 más intenso que el fundamental, porque el resonador del instrumento atenúa la fundamental en ese registro. Si el alumno lee el tono como la frecuencia del armónico más intenso, asigna al instrumento una nota dos o tres veces más aguda que la que realmente está tocando.

## Regla de autocontrol rápido

Antes de dar por válido un cálculo sobre tono y timbre, verificar:

1. ¿Se ha identificado [[f1]] como la frecuencia de la primera línea espectral o el máximo común divisor de todas las frecuencias presentes, y no como la de mayor amplitud?
2. ¿Las frecuencias de los armónicos calculadas son múltiplos enteros exactos de [[f1]]? Si no, el sonido puede ser inarmónico.
3. ¿El número de armónico [[n_arm]] se ha contado desde 1 (fundamental), no desde el primer sobretonos?
4. ¿Las amplitudes [[An]] obtenidas son todas no negativas?
5. ¿El periodo [[T_per]] calculado coincide con el inverso de [[f1]]?

Si alguna de estas comprobaciones falla, el análisis espectral está comprometido en su base.
