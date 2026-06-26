# Introducción al Sonido - Errores Comunes

## Errores conceptuales

### Error - El sonido transporta materia
- **Por qué parece correcto**: Porque sentimos el "viento" cuando estamos cerca de un altavoz potente o una explosión.
- **Por qué es incorrecto**: El desplazamiento neto de las moléculas es nulo. Lo que se desplaza es el estado de compresión, no la masa.
- **Señal de detección**: Si el sonido transportara materia, hablar con alguien al otro lado de la habitación crearía una corriente de aire constante.
- **Corrección conceptual**: El sonido es transporte de energía y cantidad de movimiento, no de masa. Las moléculas oscilan pero no viajan.
- **Mini-ejemplo**: Imagine una fila de piezas de dominó. La caída viaja de un extremo a otro, pero cada pieza permanece en su sitio original.

### Error - El sonido se propaga en el vacío
- **Por qué parece correcto**: Debido a las representaciones en películas de ciencia ficción donde las explosiones espaciales rugen con fuerza.
- **Por qué es incorrecto**: El sonido es una onda mecánica. Sin partículas ([[rho]] = 0), no hay choque y la perturbación se detiene en la fuente.
- **Señal de detección**: Silencio absoluto en grabaciones reales de cámaras de vacío o en el espacio exterior.
- **Corrección conceptual**: La ausencia de medio material anula el vehículo de propagación de la energía mecánica.
- **Mini-ejemplo**: Una campana en una campana de vacío. Al extraer el aire, el sonido desaparece aunque el martillo siga golpeando.

### Error - Confundir intensidad con tono
- **Por qué parece correcto**: Porque ambos términos se usan informalmente como "subir el sonido".
- **Por qué es incorrecto**: La intensidad depende de la amplitud (energía), mientras que el tono depende de la frecuencia [[f]] (rapidez).
- **Señal de detección**: Un grito agudo y un susurro agudo tienen el mismo tono pero diferente intensidad.
- **Corrección conceptual**: El tono es una escala cualitativa de frecuencia; la intensidad es una medida cuantitativa de potencia por área.
- **Mini-ejemplo**: Una nota de piano tocada suavemente vs. la misma nota golpeada con fuerza. Cambia la intensidad, no la nota.

## Errores de modelo

### Error - Ignorar la dependencia térmica en gases
- **Por qué parece correcto**: Porque solemos usar el valor estándar de 340 m/s para todos los problemas de aire.
- **Por qué es incorrecto**: La velocidad del sonido en un gas depende de la raíz de la temperatura absoluta T. En un desierto o en el Ártico, el error puede ser del 10%.
- **Señal de detección**: Desfases en el cálculo de distancias por eco en condiciones climáticas extremas.
- **Corrección conceptual**: En gases, la agitación térmica dicta la rapidez con la que las moléculas se encuentran para chocar.
- **Mini-ejemplo**: A 0^ degreesC, [[c]] ~ 331 m/s; a 40^ degreesC, [[c]] ~ 355 m/s. Una diferencia significativa.

### Error - Usar el modelo de gas ideal para líquidos
- **Por qué parece correcto**: Por la tendencia a querer usar la temperatura T para todo cálculo de velocidad sonora.
- **Por qué es incorrecto**: Los líquidos no siguen la ley de gases ideales. Su velocidad depende del módulo de compresibilidad [[B]] y la densidad [[rho]].
- **Señal de detección**: Resultados absurdamente bajos si se intenta tratar el agua como aire pesado.
- **Corrección conceptual**: Use la fórmula

{{f:sonido_compresible}}

para medios líquidos o sólidos.
- **Mini-ejemplo**: El agua es 800 veces más densa que el aire, pero el sonido viaja más rápido en ella porque su rigidez es inmensamente mayor.

## Errores matemáticos

### Error - Error en la conversión de unidades de frecuencia
- **Por qué parece correcto**: Porque los Megahertz (MHz) y Hertz (Hz) suenan parecidos en el enunciado.
- **Por qué es incorrecto**: Un error de un factor 1,000,000. En física de ondas, las escalas importan.
- **Señal de detección**: Longitudes de onda [[lambda]] de kilómetros cuando deberían ser milímetros (en ecografía).
- **Corrección conceptual**: Siempre trabaje en la unidad base del SI (el hercio equivale a segundos inversos).
- **Mini-ejemplo**: Un pulso de 2 MHz son 2,000,000 Hz. Si usa 2, el resultado estará fuera de escala.

### Error - Mal manejo de escalas logarítmicas en decibelios
- **Por qué parece correcto**: Por la inercia de sumar magnitudes escalares de forma lineal.
- **Por qué es incorrecto**: Los decibelios son logarítmicos. Sumar dos fuentes de 60 dB no da 120 dB (que sería un estruendo mortal), sino 63 dB.
- **Señal de detección**: Valores de decibelios que superan la escala de dolor humana sin razón aparente.
- **Corrección conceptual**: Sume las intensidades (W/m^2) y luego convierta de nuevo a dB.
- **Mini-ejemplo**: Duplicar la potencia sonora solo añade 3 dB al nivel total.

## Errores de interpretación

### Error - Confundir velocidad del sonido con velocidad de partícula
- **Por qué parece correcto**: Porque ambas magnitudes se miden en m/s.
- **Por qué es incorrecto**: La velocidad [[c]] es la rapidez de la señal; la velocidad de partícula es la rapidez del vaivén molecular.
- **Señal de detección**: Valores de velocidad de partícula que superan la velocidad del sonido, lo que implicaría vuelos supersónicos moleculares.
- **Corrección conceptual**: [[c]] es una propiedad del medio; v_particula depende de la intensidad del sonido.
- **Mini-ejemplo**: El sonido viaja a 340 m/s, pero la molécula de aire solo se mueve a unos pocos milímetros por segundo.

### Error - Interpretar la longitud de onda como una distancia vertical
- **Por qué parece correcto**: Por la analogía visual con las olas del mar que suben y bajan.
- **Por qué es incorrecto**: En ondas longitudinales, [[lambda]] es la distancia horizontal entre centros de compresión.
- **Señal de detección**: Dibujar la longitud de onda como la altura de una cresta.
- **Corrección conceptual**: [[lambda]] es el periodo espacial de la perturbación en la dirección de viaje.
- **Mini-ejemplo**: En un muelle estirado, [[lambda]] es la distancia entre dos zonas donde las espiras están más juntas.

## Regla de autocontrol rápido
1.  **Medio gaseoso**: La velocidad debe rondar los 340 m/s.
2.  **Medio líquido**: La velocidad debe rondar los 1500 m/s.
3.  **Relación**: Verifique siempre que la relacion entre [[c]], [[f]] y [[lambda]].
4.  **Audibilidad**: Frecuencias fuera del rango 20-20,000 Hz son ultrasonidos o infrasonidos.