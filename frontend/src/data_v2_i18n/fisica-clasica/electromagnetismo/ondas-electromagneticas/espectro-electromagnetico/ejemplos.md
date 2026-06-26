# Ejemplo tipo examen


## Enunciado

Una luz verde de laboratorio se propaga en aire y se puede tratar como onda electromagnética en vacío para una primera estimación. Su longitud de onda medida con un espectrómetro es de 500 nm, equivalente a 5.00×10⁻⁷ m. Se quiere ubicar esa radiación dentro del espectro electromagnético y estimar la energía de cada fotón asociado.

El objetivo no es calcular la potencia de la fuente ni el brillo observado. Solo se pide traducir la escala espacial de la onda en [[frecuencia]] y después leer la energía por fotón. Esa distinción es importante porque una fuente débil de luz visible puede tener los mismos fotones que una fuente intensa del mismo color, aunque lleguen menos fotones por segundo.

## Datos

- Longitud de onda medida: 500 nm, equivalente a 5.00×10⁻⁷ m.
- Velocidad de propagación usada: 2.998×10⁸ m/s.
- Constante de Planck usada: 6.626×10⁻³⁴ J s.
- Medio: aire, tratado como vacío en primera aproximación.

## Definición del sistema

El sistema físico es una onda electromagnética monocromática idealizada. La magnitud espacial de entrada es [[lambda]], la magnitud temporal que se quiere obtener es [[frecuencia]], y la constante que une ambas en el vacío es [[velocidad_de_la_luz_en_el_vacio]]. Después, con [[constante_de_planck]], se estima [[energia_de_un_foton]] para un fotón individual de esa radiación.

La región espectral se determina por el orden de magnitud de [[frecuencia]] y por la lectura inversa entre [[lambda]] y [[frecuencia]]. Una longitud de onda visible, mucho menor que la de radio y mucho mayor que la de rayos X, debe producir una [[frecuencia]] intermedia dentro del espectro óptico.

## Modelo físico

Se usa el modelo de onda electromagnética plana en vacío o aire. En ese modelo, la misma velocidad [[velocidad_de_la_luz_en_el_vacio]] conecta la escala espacial [[lambda]] con el ritmo temporal [[frecuencia]]. Para pasar de la lectura ondulatoria a la lectura corpuscular elemental, se usa la energía de un fotón mediante [[constante_de_planck]].

El modelo contiene dos relaciones nucleares del leaf. La primera clasifica la onda en el espectro por su [[frecuencia]]; la segunda interpreta qué energía corresponde a un fotón de esa [[frecuencia]]. No describe absorción en un material, intensidad luminosa, número de fotones ni potencia emitida.

## Justificación del modelo

La aproximación de vacío es adecuada porque el aire cambia muy poco la velocidad de la luz para una estimación de bachillerato o primer curso universitario. La longitud de onda dada ya se entiende como longitud de onda en aire, y el objetivo es ordenar la radiación dentro del espectro, no estudiar dispersión en un prisma ni propagación en una fibra.

El modelo dejaría de valer como lectura directa si la luz atravesara un medio con índice de refracción relevante, si la fuente tuviera un ancho espectral grande o si la pregunta pidiera energía total del haz. En esos casos habría que añadir velocidad de fase del medio, distribución espectral o flujo de fotones.

## Resolución simbólica

Primero se relacionan [[lambda]], [[frecuencia]] y [[velocidad_de_la_luz_en_el_vacio]]:

{{f:relacion_dispersion_espectral}}

Para obtener [[frecuencia]], se toma la velocidad de propagación y se divide por la longitud de onda. La relación muestra que, en el mismo medio, una [[lambda]] menor implica una [[frecuencia]] mayor.

Después se convierte esa [[frecuencia]] en energía por fotón:

{{f:energia_foton}}

La segunda relación no mide la intensidad de la luz. Solo asigna a cada fotón una energía proporcional a [[frecuencia]], con [[constante_de_planck]] como constante de escala cuántica.

## Sustitución numérica

Para la [[frecuencia]], dividir 2.998×10⁸ m/s entre 5.00×10⁻⁷ m da aproximadamente 6.00×10¹⁴ Hz. Por tanto [[frecuencia]] ≈ 6.00×10¹⁴ Hz.

Para la energía por fotón, multiplicar 6.626×10⁻³⁴ J s por 6.00×10¹⁴ Hz da aproximadamente 3.98×10⁻¹⁹ J. Por tanto [[energia_de_un_foton]] ≈ 3.98×10⁻¹⁹ J.

El resultado cae en el rango visible: frecuencias del orden de 10¹⁴ Hz y longitudes de onda de cientos de nanómetros. Esa lectura coincide con el dato inicial de luz verde y descarta regiones como radio, microondas, ultravioleta extremo o rayos X.

## Validación dimensional

En la relación ondulatoria, una rapidez en m/s dividida por una longitud en m produce un ritmo por segundo. Dimensionalmente, el cociente corresponde a `[T⁻¹]`, que es la dimensión de [[frecuencia]].

En la energía fotónica, una constante con dimensión de acción `J s` se multiplica por la [[frecuencia]].
La [[frecuencia]] tiene dimensión `[T⁻¹]`, por lo que el resultado tiene dimensión `[M L² T⁻²]`, coherente con [[energia_de_un_foton]].

## Interpretación física

El resultado significa que la luz verde no se distingue por viajar más rápido que otras regiones del espectro en el vacío, sino por tener una combinación concreta de [[lambda]] y [[frecuencia]]. La [[frecuencia]] calculada indica un ritmo de oscilación muy alto respecto a microondas o radio, pero menor que el de radiación ultravioleta, rayos X o gamma.

Si la longitud de onda se redujera a la mitad manteniendo el mismo medio, la [[frecuencia]] se duplicaría y también aumentaría [[energia_de_un_foton]]. Físicamente, eso desplazaría la radiación hacia colores más azulados o hacia regiones todavía más energéticas. Si [[lambda]] aumentara, ocurriría lo contrario: menor [[frecuencia]], menor energía por fotón y una interacción menos localizada con la materia.

La energía por fotón no dice cuánta energía total entrega la fuente. Una lámpara intensa y una señal débil pueden compartir el mismo valor de [[energia_de_un_foton]] si tienen la misma [[frecuencia]]; lo que cambia es el número de fotones emitidos o recibidos por unidad de tiempo. Por eso el espectro organiza la naturaleza de la radiación, no por sí solo su potencia.

# Ejemplo de aplicación real


## Contexto

Un sensor óptico de una cámara industrial debe distinguir una marca verde de seguridad iluminada con un LED estrecho. El fabricante indica que el máximo de emisión está alrededor de 530 nm. Antes de elegir filtros y fotodiodos, el equipo quiere comprobar si la señal está dentro del visible y estimar el orden de energía por fotón que llegará al detector.

La decisión práctica depende de la región espectral. Si la radiación estuviera en infrarrojo cercano, algunos sensores de silicio responderían aún bien pero el color no sería visible para un operario. Si estuviera en ultravioleta, aparecerían requisitos de protección y materiales distintos. La lectura de [[lambda]], [[frecuencia]] y [[energia_de_un_foton]] evita confundir color, potencia y seguridad.

## Estimación física

Tomando 530 nm como 5.30×10⁻⁷ m y usando [[velocidad_de_la_luz_en_el_vacio]] ≈ 3.00×10⁸ m/s, la [[frecuencia]] estimada sale del orden de 5.7×10¹⁴ Hz. Con [[constante_de_planck]] ≈ 6.63×10⁻³⁴ J s, la energía por fotón queda del orden de 3.8×10⁻¹⁹ J.

La estimación cuantitativa es suficiente para clasificar la emisión como visible verde. Además muestra que cada fotón tiene mucha más energía que un fotón de microondas, pero menos que un fotón ultravioleta capaz de provocar efectos fotoquímicos más agresivos. La magnitud dominante para clasificar el dispositivo es [[frecuencia]], mientras que [[lambda]] ayuda a comparar con filtros, rejillas y tamaños ópticos.

## Interpretación

En la práctica, el detector no se elige solo por la energía de un fotón. También importan el flujo de fotones, la eficiencia cuántica del sensor, el ruido electrónico y el ancho espectral del LED. Sin embargo, el espectro electromagnético da el primer filtro conceptual: la radiación cae en una región donde la óptica visible, los filtros verdes y sensores de silicio son razonables.

Si el máximo del LED se desplazara hacia longitudes de onda mucho menores, la misma potencia óptica estaría repartida en fotones más energéticos y cambiarían los riesgos de exposición. Si se desplazara hacia longitudes mucho mayores, habría menos energía por fotón y podría perderse la señal visible. Por eso el cálculo de [[frecuencia]] y [[energia_de_un_foton]] no es una sustitución aislada, sino una lectura física que orienta diseño, seguridad y selección de instrumentos.