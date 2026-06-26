const e=`# Ejemplo tipo examen

## Enunciado

Una fuente sonora emite una nota pura de 680 Hz en el aire a 20 °C, donde la velocidad del sonido es 343 m/s y la densidad del aire es 1.21 kg/m³. La intensidad acústica medida a cierta distancia de la fuente es de 2.5×10⁻⁴ W/m². Calcular la longitud de onda de la onda sonora en el aire, la amplitud de presión acústica en ese punto y comentar físicamente los resultados.

## Datos

- Frecuencia de la nota: 680 Hz
- Velocidad del sonido en aire a 20 °C: 343 m/s
- Densidad del aire: 1.21 kg/m³
- Intensidad acústica medida: 2.5×10⁻⁴ W/m²

## Definición del sistema

El sistema es una onda sonora plana armónica que se propaga en una dirección en el aire a 20 °C. Las magnitudes de interés son [[lambda_son]], [[p0_ac]] e [[I_ac]]. La fuente emite de forma continua y estacionaria, por lo que el campo sonoro es estacionario en el punto de medida.

## Modelo físico

Se aplica el modelo de **onda plana armónica** en medio lineal. Las magnitudes clave son [[v_son]], [[f_son]], [[lambda_son]], [[p0_ac]] e [[I_ac]]. Las fórmulas fundamentales del leaf son la relación cinemática entre las magnitudes ondulatorias y la relación entre intensidad y amplitud de presión.

## Justificación del modelo

El modelo de onda plana armónica es válido porque la [[I_ac]] de 2.5×10⁻⁴ W/m² corresponde a una [[p0_ac]] del orden de algunos pascales, muy inferior a la presión estática del aire (101 325 Pa). El régimen lineal se cumple con amplio margen. La frecuencia de 680 Hz está en el rango audible, por lo que la [[lambda_son]] resultará del orden de decímetros, escala en la que el modelo de onda plana es aplicable si el punto de medida está suficientemente alejado de la fuente. El modelo deja de ser válido si la fuente produce presiones acústicas superiores a cientos de pascales o si el punto de medida está a menos de una longitud de onda de la fuente.

## Resolución simbólica

Para calcular [[lambda_son]] se aplica la relación cinemática entre [[v_son]], [[f_son]] y [[lambda_son]]:

{{f:relacion_vel_freq_lambda}}

Despejando [[lambda_son]]:

{{f:onda_presion_armonica}}

Para calcular [[p0_ac]] a partir de [[I_ac]], se aplica la expresión de la intensidad acústica de una onda plana armónica, que relaciona [[I_ac]] con [[p0_ac]], la densidad del medio y [[v_son]]:

{{f:intensidad_acustica}}

Despejando [[p0_ac]]:

{{f:intensidad_acustica}}

## Sustitución numérica

Longitud de onda: dividir [[v_son]] entre [[f_son]] da 343 m/s entre 680 Hz, que resulta en aproximadamente 0.504 m. Por tanto [[lambda_son]] ≈ 0.504 m, es decir, unos 50 centímetros.

Amplitud de presión: despejar [[p0_ac]] de la fórmula de intensidad requiere tomar la raíz cuadrada del producto de dos por [[I_ac]] por la densidad por [[v_son]]. Multiplicar 2 por 2.5×10⁻⁴ W/m² por 1.21 kg/m³ por 343 m/s da aproximadamente 0.2076 Pa². La raíz cuadrada de 0.2076 es aproximadamente 0.456 Pa. Por tanto [[p0_ac]] ≈ 0.456 Pa.

## Validación dimensional

Longitud de onda: velocidad dividida entre frecuencia tiene dimensiones \`[L T⁻¹] / [T⁻¹]\`, que resulta en \`[L]\`, es decir, metros. ✓

Amplitud de presión: la fórmula de intensidad da \`[M T⁻³]\` igualada a \`[M² L⁻² T⁻⁴] / ([M L⁻³] · [L T⁻¹])\`. Operando, el denominador tiene dimensiones \`[M L⁻³] · [L T⁻¹]\` que es \`[M L⁻² T⁻¹]\`. La razón resulta \`[M T⁻³]\`. La raíz cuadrada de \`[M² L⁻² T⁻⁴]\` da \`[M L⁻¹ T⁻²]\`, que son las unidades de presión. ✓

## Interpretación física

El resultado [[lambda_son]] ≈ 0.504 m confirma que el sonido de 680 Hz en el aire tiene una longitud de onda comparable al tamaño de un adulto. Esto explica por qué ese sonido se difracta fácilmente alrededor de objetos de ese tamaño: la difracción es eficaz cuando el obstáculo es comparable a [[lambda_son]]. Si se quisiera aislar ese sonido con un obstáculo, sería necesario que el obstáculo fuera mucho mayor que medio metro para producir una sombra acústica efectiva.

El resultado [[p0_ac]] ≈ 0.456 Pa permite clasificar el nivel sonoro: es aproximadamente 26 veces mayor que el umbral de audición (20 µPa), pero está muy por debajo del umbral de dolor (20 Pa). Corresponde a un nivel de intensidad de alrededor de 84 dB, equivalente al ruido de una calle con tráfico moderado.

Si [[p0_ac]] se duplicara (pasara a aproximadamente 0.91 Pa), la [[I_ac]] se cuadruplicaría (pasaría a aproximadamente 10⁻³ W/m²) y el nivel sonoro aumentaría en 6 dB. Esta relación cuadrática entre amplitud e intensidad es la razón por la que el esfuerzo energético necesario para aumentar significativamente el volumen percibido crece mucho más rápido que la amplitud de la señal.

---

# Ejemplo de aplicación real

## Contexto

En el diseño de salas de concierto, uno de los criterios fundamentales es garantizar que el sonido llega a todos los oyentes con suficiente [[I_ac]] y sin que la diferencia de nivel entre la primera y la última fila sea perceptivamente inaceptable. Un arquitecto acústico debe estimar qué longitudes de onda son relevantes para la frecuencia de referencia del diseño y cómo se comportan las ondas en la sala.

Para una sala de conciertos tipo con longitud de 40 m, frecuencia de diseño de 125 Hz (baja frecuencia crítica para la reverberación) y temperatura del aire interior de 22 °C (velocidad del sonido de aproximadamente 345 m/s), estimar la [[lambda_son]] y discutir las implicaciones de diseño.

## Estimación física

Aplicar la relación entre [[v_son]], [[f_son]] y [[lambda_son]]: dividir 345 m/s entre 125 Hz da aproximadamente 2.76 m. Por tanto [[lambda_son]] ≈ 2.76 m a 125 Hz.

Esta [[lambda_son]] es comparable a la altura de una persona (1.7 m) y mucho menor que la longitud de la sala (40 m). A 40 m de distancia, el sonido habrá recorrido unas 14.5 longitudes de onda a 125 Hz; si la [[I_ac]] decayera siguiendo la ley del inverso del cuadrado (fuente puntual), la [[I_ac]] en la última fila sería unas 200 veces menor que en la primera. En nivel sonoro, esa diferencia sería de aproximadamente 23 dB, lo que en la práctica sería inaceptable para un auditorio.

Para [[p0_ac]] de referencia de 1 Pa en la zona delantera, la [[I_ac]] de referencia sería 1 dividido entre el doble del producto de la densidad (1.21 kg/m³) por [[v_son]] (345 m/s), resultando aproximadamente 1.2×10⁻³ W/m². En la última fila, sin tratamiento acústico, la [[I_ac]] podría descender a valores cercanos al umbral de audición para instrumentos de dinámica suave.

## Interpretación

La [[lambda_son]] de 2.76 m a 125 Hz significa que los obstáculos acústicos de la sala (butacas, balcones, paredes) deben diseñarse con dimensiones superiores a esta escala para que actúen como reflectores eficaces. Un balcón de 1.5 m de vuelo refleja con poca eficiencia las frecuencias de 125 Hz, pero refleja bien las frecuencias por encima de 500 Hz (donde [[lambda_son]] es inferior a 0.7 m en el mismo medio).

Esta interacción entre la [[lambda_son]] de cada frecuencia y la geometría de la sala es la base del diseño acústico: el arquitecto ajusta superficies, ángulos y materiales para que las frecuencias relevantes lleguen uniformemente a todos los oyentes, aprovechando el hecho de que cada frecuencia "ve" la sala de manera distinta según la relación entre [[lambda_son]] y las dimensiones físicas de los elementos arquitectónicos.
`;export{e as default};
