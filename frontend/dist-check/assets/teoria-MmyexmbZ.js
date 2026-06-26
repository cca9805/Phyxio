const e=`# Tono y timbre

## Contexto conceptual

Dos instrumentos distintos tocan la misma nota: el violín y la flauta emiten la misma altura musical, el mismo "la4". Sin embargo, cualquier oyente los distingue de inmediato. ¿Por qué? La respuesta es que comparten la **frecuencia fundamental** pero difieren en su **espectro armónico**. El tono es el atributo perceptivo que depende de la frecuencia; el timbre es el que depende de la composición espectral.

Este leaf conecta la física ondulatoria con la percepción auditiva y con la acústica musical. El puente entre ambos mundos es el **análisis de Fourier**: cualquier señal de presión acústica periódica puede descomponerse en una suma de sinusoides de frecuencias múltiplos enteros de la fundamental. Cada sinusoide es un **armónico**, y el conjunto de armónicos y sus amplitudes es el espectro del sonido.

Comprender tono y timbre no es solo física: es la base para diseñar instrumentos, sintetizadores, filtros de audio, protocolos de compresión (MP3, AAC) y sistemas de diagnóstico de máquinas por análisis de vibración.

## 🟢 Nivel esencial

Cuando una guitarra toca la nota do4, la cuerda vibra a 261.6 Hz. Esa es la **frecuencia fundamental** [[f1]]. El tono que escuchamos —esa sensación de "grave" o "agudo"— depende directamente de [[f1]]: mayor [[f1]], sonido más agudo.

Pero la cuerda no vibra solo en su modo fundamental. Al mismo tiempo vibra a 523 Hz (el doble de 261.6 Hz), a 784.8 Hz (el triple), a 1046.4 Hz (el cuádruple), y así sucesivamente. Cada una de esas frecuencias es un **armónico**: el armónico de orden [[n_arm]] tiene frecuencia [[fn]], que es n veces [[f1]]. Los armónicos coexisten en la misma cuerda al mismo tiempo, y su suma produce la forma de onda real que escuchamos.

El **timbre** es precisamente el color del sonido que resulta de esa mezcla. La flauta tiene pocos armónicos y débiles: suena suave y pura. El oboe tiene muchos armónicos intensos: suena brillante y penetrante. Dos instrumentos con la misma [[f1]] pero distinta distribución de amplitudes [[An]] suenan diferente porque tienen distinto timbre.

> [!NOTE]
> El oído humano no percibe directamente los armónicos individuales a menos que se los escuche con atención. El cerebro los integra en una sola percepción de tono y timbre. Este proceso de fusión auditiva es tan automático que hay que entrenarse para escuchar los armónicos por separado, como hacen los cantantes de throat singing mongol.

## 🔵 Nivel formal

La herramienta matemática que formaliza la descomposición en armónicos es la **serie de Fourier**. Para una señal de presión acústica periódica con periodo [[T_per]], la descomposición es:

{{f:serie_fourier_presion}}

donde [[An]] es la amplitud del n-ésimo armónico, [[fn]] es su frecuencia y la suma recorre todos los enteros positivos. La frecuencia del n-ésimo armónico satisface la relación:

{{f:frecuencia_armonico}}

y el periodo de la señal total se relaciona con [[f1]] mediante:

{{f:periodo_fundamental}}

La ecuación de la serie de Fourier tiene implicaciones profundas. Primero, la **periodicidad de la señal total** es siempre [[T_per]], aunque cada armónico tenga su propio periodo más corto. Segundo, la forma de onda de [[p_total]] puede ser muy distinta a una sinusoide; la "rugosidad" o "suavidad" de esa forma depende de cuántos armónicos están presentes y de sus amplitudes relativas. Tercero, la descomposición es **única**: dado un espectro de amplitudes y fases, hay exactamente una forma de onda, y viceversa.

El **espectro de amplitudes** es la representación gráfica de [[An]] en función de [[fn]]. Para un sonido perfectamente armónico, el espectro consiste en líneas discretas igualmente espaciadas en el eje de frecuencias, separadas por [[f1]]. Este espaciado regular es la huella de la periodicidad.

> [!TIP]
> El teorema de Fourier garantiza que la descomposición existe para cualquier señal periódica de energía finita. No hace ninguna suposición sobre la forma de la onda: puede ser sinusoidal, cuadrada, triangular, o cualquier perfil imaginable. Siempre puede descomponerse en sinusoides.

## 🔴 Nivel estructural

El análisis de Fourier revela que el tono y el timbre no son propiedades independientes: están ligados a través del espectro. El tono corresponde a la posición del espectro en el eje de frecuencias (determinada por [[f1]]); el timbre corresponde a la **forma** del espectro (determinada por los valores relativos de [[An]]).

La simetría de la fuente sonora impone restricciones sobre qué armónicos pueden estar presentes. Un tubo cilíndrico cerrado por un extremo —como el clarinete en su modo fundamental— produce solo armónicos impares ([[n_arm]] impar: 1, 3, 5, 7...). Esto es consecuencia de la condición de frontera asimétrica: el patrón de presión en el tubo tiene simetría de media onda. El resultado perceptivo es un timbre hueco, oscuro, con ese característico vacío en los armónicos pares que hace al clarinete inconfundible.

Los instrumentos de cuerda, los tubos abiertos y la voz humana producen generalmente todos los armónicos, aunque con amplitudes distintas. La **envolvente espectral** —la curva que conecta los máximos de [[An]] en el espectro— es la que caracteriza cada instrumento. Los violines bien construidos tienen una envolvente que potencia ciertas regiones del espectro (las llamadas "formantes de cuerpo") que contribuyen a su proyección y calidad sonora.

> [!WARNING]
> Los sonidos de percusión (campanas, xilófonos) son **inarmónicos**: sus componentes espectrales no son múltiplos enteros de la frecuencia más baja. Para estos sonidos, la serie de Fourier armónica no describe el espectro real; se requiere una representación espectral más general. El oído percibe estos sonidos como timbres brillantes pero sin tono claramente definido.

La **síntesis aditiva** es la técnica inversa al análisis: sumar sinusoides de distintas frecuencias, amplitudes y fases para construir cualquier timbre deseado. Los sintetizadores de sonido modernos usan síntesis aditiva, síntesis de tabla de onda y modulación de frecuencia, que son extensiones directas del modelo de Fourier. Los algoritmos de compresión de audio (MP3, AAC) también explotan la estructura armónica: eliminan los armónicos de menor amplitud o los que quedan enmascarados psicoacústicamente, reduciendo el tamaño del archivo con mínima pérdida perceptible.

## Interpretación física profunda

Uno de los fenómenos más reveladores de la percepción del tono es el **tono faltante** (missing fundamental). Si se suprime el armónico fundamental de una señal —se elimina [[f1]] del espectro— el oyente sigue percibiendo el mismo tono que antes. El sistema auditivo **infiere** [[f1]] a partir del patrón de armónicos superiores, cuyo espaciado sigue siendo [[f1]] aunque la componente en esa frecuencia esté ausente.

Este fenómeno tiene implicaciones prácticas directas. Los teléfonos analógicos tradicionales tenían una respuesta en frecuencia que cortaba por debajo de 300 Hz; sin embargo, voces masculinas con [[f1]] de 100-150 Hz se entendían perfectamente porque los armónicos transmitidos (300, 400, 500 Hz...) permitían al oído reconstruir el tono fundamental.

## Orden de magnitud

En música, una [[f1]] de 110 Hz corresponde a una nota grave, 440 Hz a la referencia la4 y 880 Hz a una nota una octava más aguda. Para [[f1]] de 220 Hz, los armónicos audibles con [[n_arm]] bajo aparecen en 220 Hz, 440 Hz, 660 Hz y 880 Hz. Si [[An]] cae rápido, el sonido resulta suave; si [[An]] se mantiene grande hasta armónicos altos, el timbre se percibe brillante.

## Método de resolución personalizado

El procedimiento para caracterizar un sonido periódico a partir de su espectro es:

- **Identificar [[f1]]**: es la frecuencia de la primera línea espectral, o el máximo común divisor de todas las frecuencias presentes.
- **Calcular [[T_per]]**: es el inverso de [[f1]].
- **Indexar los armónicos**: dividir cada frecuencia del espectro entre [[f1]] para obtener [[n_arm]]; el resultado debe ser un entero.
- **Leer [[An]]** de la altura de cada barra en el espectro: determina la contribución de ese armónico al timbre.
- **Verificar la coherencia**: el espaciado entre barras consecutivas debe ser constante e igual a [[f1]].

> [!TIP]
> Si el máximo común divisor de las frecuencias espectrales no coincide con la frecuencia de la primera línea visible, el fundamental puede estar ausente (tono faltante). El tono percibido seguirá siendo [[f1]] aunque no aparezca en el espectro.

## Casos especiales y ejemplo extendido

Todo sonido periódico tiene dos representaciones equivalentes y complementarias que la gráfica Coord puede mostrar:

- **Dominio temporal**: [[p_total]] frente al tiempo. Muestra la forma de onda compleja con periodicidad [[T_per]]. Un ojo entrenado puede inferir el timbre de la morfología: picos agudos indican armónicos altos; forma sinusoidal indica sonido puro.
- **Dominio frecuencial (espectro)**: [[An]] frente a [[fn]]. Muestra las líneas discretas igualmente espaciadas. La distribución de alturas define el timbre de forma objetiva y cuantificable.

Ambas representaciones contienen exactamente la misma información física; son dos caras de la misma realidad acústica. Pasar de una a otra requiere la transformada de Fourier (directa o inversa).

Caso especial: si la línea en [[f1]] falta pero las líneas en 2[[f1]], 3[[f1]] y 4[[f1]] permanecen igualmente espaciadas, el oído puede seguir percibiendo el tono de [[f1]]. En cambio, si las líneas no son múltiplos enteros, la señal deja de ser armónica y conviene usar un modelo inarmónico o un espectrograma.

## Preguntas reales del alumno

**¿El tono es siempre la frecuencia más intensa?**
No. El tono suele organizarse alrededor de [[f1]], aunque otro armónico tenga mayor [[An]]. Por eso puede percibirse un tono fundamental incluso si el primer componente es débil.

**¿Dos instrumentos con la misma nota tienen la misma onda?**
No. Comparten [[f1]], pero difieren en [[An]] y en la forma temporal de [[p_total]]. Esa diferencia espectral y temporal es el timbre.

## Conexiones transversales y rutas de estudio

La comprensión del tono y el timbre como espectro armónico es el prerequisito para el leaf de [efecto Doppler](leaf:fisica-clasica/ondas/sonido/efecto-doppler), donde [[f1]] percibida cambia por movimiento relativo, y para el leaf de resonancia, donde ciertos armónicos son amplificados selectivamente por las dimensiones del resonador.

El concepto de serie de Fourier conecta directamente con el bloque de [ondas estacionarias](leaf:fisica-clasica/ondas/ondas-estacionarias), donde los modos propios de una cuerda o un tubo son exactamente los armónicos del sonido. Cada modo de vibración aporta un componente armónico al espectro del instrumento.

Desde el punto de vista matemático, este leaf es la introducción a la transformada de Fourier discreta, que en el nivel universitario se desarrolla con la DFT y la FFT, herramientas fundamentales del procesado digital de señales.

## Síntesis final

El tono es el correlato perceptivo de la [[f1]]: determina la nota musical. El timbre es el correlato del espectro de amplitudes [[An]]: determina el color instrumental. Ambos conviven en la señal acústica total [[p_total]], cuya descomposición en armónicos mediante la serie de Fourier revela que todos los sonidos periódicos son sumas de sinusoides de frecuencias múltiplos enteros de [[f1]]. El espectro armónico es la huella digital acústica de cada fuente sonora.
`;export{e as default};
