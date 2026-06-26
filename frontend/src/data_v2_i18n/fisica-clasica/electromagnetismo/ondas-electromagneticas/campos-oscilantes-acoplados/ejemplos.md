# Ejemplo tipo examen


## Enunciado

Una estación emisora experimental genera una **onda electromagnética plana armónica** en el vacío absoluto que se propaga de manera transversal a lo largo del eje x positivo. Las mediciones en el laboratorio indican que el campo eléctrico oscila en el eje y con una amplitud [[amplitud_del_campo_electrico]] de 120 V/m y que realiza un ciclo completo cada 3,33 ns (nanosegundos), lo cual corresponde a una [[frecuencia]] [[frecuencia]] de 300 MHz. Determina de manera simbólica y numérica:
- La velocidad de propagación [[velocidad_de_la_luz_en_el_vacio]] y las constantes asociadas del vacío [[mu0]] y [[epsilon0]].
- La longitud de onda [[lambda]] de esta perturbación electromagnética.
- La amplitud máxima del campo magnético asociado [[amplitud_del_campo_magnetico]] y su eje de oscilación.
- La intensidad media [[intensidad_media]] de transporte energético neto de la onda.

## Datos

- Amplitud del campo eléctrico: [[amplitud_del_campo_electrico]] = 120 V/m
- [[frecuencia]] de la oscilación: [[frecuencia]] = 300 MHz (equivalente a 3 * 10^8 Hz)
- Permitividad eléctrica del vacío: [[epsilon0]] = 8,854 * 10^-12 F/m
- Permeabilidad magnética del vacío: [[mu0]] = 4π * 10^-7 H/m

## Definición del sistema

El sistema se compone de una **onda plana armónica** libre en el vacío. Los frentes de onda son paralelos entre sí y perpendiculares al eje x de avance. El triedro ortogonal rígido sitúa los vectores de campo eléctrico en el eje y, los de campo magnético en el eje z, y el vector de avance de potencia en el eje x positivo.

## Modelo físico

Utilizaremos el modelo de **onda plana transversal ideal** para describir el acoplamiento de la amplitud eléctrica [[amplitud_del_campo_electrico]] y magnética [[amplitud_del_campo_magnetico]] en el vacío. Bajo esta aproximación, consideramos que los frentes de onda planos no experimentan decaimiento geométrico ni absorción por el entorno, propagándose a la velocidad de la luz [[velocidad_de_la_luz_en_el_vacio]] y manteniendo las amplitudes constantes de forma espacial y temporal en fase.

## Justificación del modelo

Este modelo es perfectamente válido porque la [[frecuencia]] de 300 MHz se encuentra en la banda de radio de muy alta [[frecuencia]] (VHF), donde el vacío absoluto garantiza la ausencia de dispersión cromática y de pérdidas dieléctricas. La aproximación plana es sumamente precisa dado que asumimos que la distancia radial a la antena emisora cumple holgadamente la condición de campo lejano, superando con creces las diez longitudes de onda de distancia.

## Resolución simbólica

Para calcular las variables fundamentales del triedro electromagnético, empleamos la relación de las constantes del espacio para la velocidad de la luz:

{{f:velocidad_vacio}}

A continuación, acoplamos la longitud de onda [[lambda]] con la [[frecuencia]] de la oscilación utilizando la relación cinemática fundamental de la onda:

{{f:relacion_onda}}

Posteriormente, la amplitud del campo magnético [[amplitud_del_campo_magnetico]] se despeja de la relación transversal de amplitudes de campo de Faraday-Ampère:

{{f:relacion_amplitudes}}

Finalmente, el flujo neto de potencia por unidad de área perpendicular al avance se calcula evaluando la intensidad media [[intensidad_media]] de Poynting integrada en un ciclo completo:

{{f:intensidad_media}}

## Sustitución numérica

Para la velocidad de propagación, multiplicar la permeabilidad del vacío por la permitividad y extraer la raíz inversa de su producto da aproximadamente 2,998 * 10^8 m/s. Por tanto [[velocidad_de_la_luz_en_el_vacio]] ≈ 3 * 10^8 m/s.

Para la longitud de onda, dividir la velocidad [[velocidad_de_la_luz_en_el_vacio]] entre la [[frecuencia]] de 3 * 10^8 Hz da como resultado exacto 1 metro. Por tanto [[lambda]] ≈ 1 m.

Para la amplitud magnética, dividir el campo eléctrico de 120 V/m entre la velocidad [[velocidad_de_la_luz_en_el_vacio]] da como resultado 4 * 10^-7 T. Por tanto [[amplitud_del_campo_magnetico]] ≈ 4 * 10^-7 T. El eje de oscilación es el eje z positivo y negativo en fase.

Para la intensidad media, elevar al cuadrado el campo eléctrico de 120 V/m, multiplicarlo por la permitividad [[epsilon0]], por la velocidad [[velocidad_de_la_luz_en_el_vacio]] y dividir entre dos da aproximadamente 19,12 W/m^2. Por tanto [[intensidad_media]] ≈ 19,12 W/m^2.

## Validación dimensional

Realizamos la validación dimensional de las magnitudes calculadas aplicando el análisis formal de unidades:
- Velocidad de la luz [[velocidad_de_la_luz_en_el_vacio]]: Las unidades de permitividad `[M⁻¹ L⁻³ T⁴ I²]` multiplicadas por las de permeabilidad `[M L T⁻² I⁻²]` dan `[L⁻² T²]`. Al extraer su raíz inversa, obtenemos las dimensiones de velocidad `[L T⁻¹]` ✓.
- Amplitud magnética [[amplitud_del_campo_magnetico]]: La dimensión de campo eléctrico `[M L T⁻³ I⁻¹]` dividida entre la dimensión de velocidad `[L T⁻¹]` se simplifica exactamente a `[M T⁻² I⁻¹]`, correspondiente a teslas en el SI ✓.
- Intensidad media [[intensidad_media]]: Las unidades de potencia y energía `[M L² T⁻³]` divididas por área `[L²]` dan `[M T⁻³]`, correspondiente a vatios por metro cuadrado ✓.

## Interpretación física

El resultado obtenido demuestra el acoplamiento armónico inquebrantable de la perturbación electromagnética. Una longitud de onda de 1 metro clasifica esta radiación en el rango de ondas de radio VHF, comúnmente utilizadas en radiodifusión y telecomunicaciones de corto alcance.

Si la [[frecuencia]] del emisor aumentara al doble manteniendo la misma potencia de salida, la longitud de onda [[lambda]] caería a la mitad (0,5 metros) mientras que la velocidad de propagación [[velocidad_de_la_luz_en_el_vacio]] se mantendría estrictamente invariante. Esto demuestra que la velocidad depende solo de las propiedades de la permitividad y permeabilidad del vacío y no de la excitación de la fuente.

# Ejemplo de aplicación real


## Contexto

En la órbita terrestre externa, la radiación solar incide de forma constante sobre los satélites artificiales de comunicación y los paneles de energía de la Estación Espacial Internacional. Esta radiación llega en forma de ondas electromagnéticas con una densidad de potencia o intensidad media [[intensidad_media]] de aproximadamente 1361 W/m^2 (conocida en astrofísica como la constante solar).

## Estimación física

A partir de este flujo de energía real en condiciones de vacío perfecto, podemos estimar las amplitudes efectivas de los campos eléctrico [[amplitud_del_campo_electrico]] y magnético [[amplitud_del_campo_magnetico]] que golpean las células solares del satélite.

Despejando el campo eléctrico de la ecuación de intensidad:
- Operación: Multiplicar dos por la intensidad solar de 1361 W/m^2, dividir entre el producto de la velocidad [[velocidad_de_la_luz_en_el_vacio]] por la permitividad [[epsilon0]], y extraer la raíz cuadrada.
- Resultado: Aproximadamente 1012,8 V/m. Asignación: [[amplitud_del_campo_electrico]] ≈ 1012,8 V/m.

A partir de este campo eléctrico, hallamos la amplitud del campo magnético asociado:
- Operación: Dividir el campo eléctrico calculado de 1012,8 V/m entre la velocidad de la luz [[velocidad_de_la_luz_en_el_vacio]].
- Resultado: Aproximadamente 3,37 * 10^-6 T. Asignación: [[amplitud_del_campo_magnetico]] ≈ 3,37 microT.

## Interpretación

La obtención de este resultado demuestra que, para una intensidad solar muy alta capaz de calentar y alimentar satélites, la amplitud del campo eléctrico resultante es de aproximadamente 1 kV/m, un valor considerable pero muy seguro que no llega a ionizar los materiales dieléctricos circundantes de los instrumentos espaciales.

Al mismo tiempo, la amplitud del campo magnético es de tan solo 3,37 microT, lo que equivale a apenas una fracción del campo magnético terrestre ordinario. Esto evidencia que el transporte de energía solar en forma de luz se apoya numéricamente de manera dominante en la componente eléctrica en el SI, a pesar de que energéticamente ambos campos contribuyen exactamente con la misma proporción media del 50%.