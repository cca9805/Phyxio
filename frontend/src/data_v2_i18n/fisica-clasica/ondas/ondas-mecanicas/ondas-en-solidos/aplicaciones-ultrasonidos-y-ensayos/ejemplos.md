# Ejemplo tipo examen


## Enunciado

Una placa de acero estructural de 80 mm de espesor se inspecciona con un transductor ultrasónico de contacto. El técnico emite un pulso desde la cara superior y graba la señal A-scan. Se obtiene un eco de defecto que aparece a la mitad del tiempo entre el pulso de entrada y el eco de la pared trasera. Para calibrar el equipo se emplea un bloque de referencia del mismo acero de 50 mm de espesor. El objetivo es calcular la profundidad del defecto y analizar su interpretración física.

## Datos

- Espesor del bloque calibrado: 50 mm
- Tiempo de vuelo del eco de la pared trasera del bloque: 16.95 µs
- Espesor de la placa inspeccionada: 80 mm
- Tiempo de vuelo total de la pared trasera de la placa: 27.12 µs
- Posición del eco del defecto: mitad del tiempo entre entrada y pared trasera

Estos datos son típicos en ensayos de control de calidad donde se necesita una referencia para calcular [[v_us]] y una medición directa para estimar [[d_defecto]].

## Definición del sistema

La pieza inspeccionada es una placa de acero homogénea con un transductor colocado en contacto sobre la superficie. El sistema considera un pulso ultrasónico que atraviesa el material, se refleja en un defecto interno y en la pared trasera.

El defecto se modela como una discontinuidad paralela a la superficie de la placa, de modo que el recorrido del pulso es axial y el tiempo de vuelo corresponde al doble de la profundidad.

## Modelo físico

El modelo físico considera que la onda ultrasónica viaja a través de un medio homogéneo con velocidad constante [[v_us]] y que el defecto se comporta como una discontinuidad con incidencia normal. El pulso recorre ida y vuelta hasta el defecto, por lo que el tiempo [[t_vuelo]] corresponde al doble trayecto.

La profundidad del defecto se describe por la fórmula:

{{f:profundidad_defecto}}

La impedancia acústica del material se define por:

{{f:impedancia_acustica}}

El coeficiente de reflexión en la interfaz defecto-material viene dado por:

{{f:coeficiente_reflexion}}

## Justificación del modelo

Este modelo es válido con incidencia normal y cuando la pieza tiene un material homogéneo. La calibración con un bloque de 50 mm del mismo acero permite determinar [[v_us]] sin depender de valores tabulados, lo que reduce la incertidumbre.

La inclusión de las relaciones de [[impedancia_acustica]] y [[coeficiente_de_reflexion_acustica]] es necesaria para interpretar no solo la profundidad, sino también la intensidad del eco. Un defecto aire-metal produce un [[coeficiente_de_reflexion_acustica]] alto y, por tanto, un eco intenso, mientras que un defecto metálico similar al acero produce un [[coeficiente_de_reflexion_acustica]] más bajo.

Este análisis físico justifica que el criterio de detección dependa tanto de [[t_vuelo]] como de [[impedancia_acustica]] y [[coeficiente_de_reflexion_acustica]], es decir, de la velocidad, el tiempo de vuelo y la impedancia del medio.

## Resolución simbólica

Del bloque calibrado, el espesor conocido de 50 mm y el tiempo de vuelo de 16.95 µs permiten calcular [[v_us]].

{{f:profundidad_defecto}}

El bloque de referencia se comporta como un reflector de pared trasera, y la profundidad de 50 mm se obtiene con la relación anterior. Con ello, se determina que la velocidad ultrasonica es aproximadamente 5900 m/s.

A continuación se usa el tiempo de vuelo del defecto en la placa inspeccionada. El eco de la pared trasera de 80 mm aparece en 27.12 µs, de modo que el eco de defecto está a 13.56 µs.

Sustituimos los valores numéricos en la fórmula de profundidad:

- [[v_us]] = 5900 m/s
- [[t_vuelo]] del defecto = 13.56 µs
- [[d_defecto]] = 40 mm

## Sustitución numérica

Usando los valores anteriores, la profundidad del defecto se calcula como

- [[v_us]] * [[t_vuelo]] / 2 = 5900 m/s * 13.56 µs / 2

Este cálculo confirma la profundidad de 40 mm, ya que 13.56 µs corresponde al recorrido de ida y vuelta hasta el defecto.

La sustitución numérica hace explícita la conversión de tiempo de vuelo en distancia y muestra cómo [[v_us]] y [[t_vuelo]] determinan [[d_defecto]].

La profundidad de 40 mm se obtiene directamente del doble recorrido. Esta resolución simbólica es coherente con la estructura del modelo y con la fórmula de profundidad utilizada anteriormente.

Además, la estimación de [[impedancia_acustica]] y [[coeficiente_de_reflexion_acustica]] permite valorar la naturaleza del defecto:

{{f:impedancia_acustica}}

{{f:coeficiente_reflexion}}

Con [[rho_mat]] ≈ 7850 kg/m³ y [[v_us]] ≈ 5900 m/s, el acero tiene elevada impedancia acústica y la interfaz con aire presenta un coeficiente de reflexión cercano a 1.

## Validación dimensional

- [[v_us]] tiene dimensión de velocidad: [L T^{-1}].
- [[t_vuelo]] tiene dimensión de tiempo: `[T]`.
- El producto [[v_us]] por [[t_vuelo]] tiene dimensión de longitud `[L]`.
- Al dividir entre 2, la profundidad [[d_defecto]] mantiene la dimensión de longitud.

La expresión es dimensionalmente consistente y produce un resultado en metros, que es la unidad adecuada para [[d_defecto]].

## Interpretación física

La profundidad de 40 mm coloca el defecto en la región media de la placa, donde los esfuerzos de flexión y tensión son máximos. Esta ubicación tiene implicaciones estructurales: un defecto superficial actúa como concentrador de esfuerzos locales, pero uno profundo puede comprometer la resistencia global de la pieza.

Desde el punto de vista acústico, el hecho de que el eco sea detectable (amplitud significativa) combinado con un tiempo de vuelo consistente confirma que existe una discontinuidad real con alto contraste de impedancia. Si el defecto fuera llenado con material similar al acero (por ejemplo, una inclusión de óxido duro), [[coeficiente_de_reflexion_acustica]] sería menor y el eco más débil. El fuerte contraste acústico sugiere que el defecto es predominantemente aire o vacío.

La validación mediante el bloque de referencia es crucial: al calcular [[v_us]] a partir de datos conocidos, se elimina la incertidumbre en la velocidad y se asegura que la profundidad calculada refleja la realidad del material. Sin esta calibración, cualquier desviación de [[v_us]] respecto a valores tabulados produciría un error sistemático en [[d_defecto]].

# Ejemplo de aplicación real


## Contexto

En un entorno industrial, este tipo de placa de acero puede formar parte de una estructura de soporte o un depósito a presión. El diagnóstico de defectos internos se integra en los protocolos de mantenimiento predictivo.

Un defecto detectado a 40 mm de profundidad indica la necesidad de seguir una traza de inspección más detallada y, posiblemente, realizar mediciones adicionales en puntos contiguos.

## Estimación física

Con [[impedancia_acustica]] calculada, se puede comparar la impedancia del acero con la del acoplante o del aire. Una gran diferencia de [[impedancia_acustica]] implica un reflejo fuerte y hace más probable que el eco del defecto sea detectable.

El coeficiente de reflexión, a su vez, indica si el pulso se refleja con cambio de fase. En una interfaz aire-acero, [[coeficiente_de_reflexion_acustica]] es muy grande y la energía se refleja casi completamente.

Estas magnitudes físicas permiten estimar si un defecto será visible en el A-scan y si la profundidad calculada corresponde a una discontinuidad real.

## Interpretación

El defecto a 40 mm no es superficial, pero está dentro de la zona que el pulso eco puede analizar. Si la placa cumple una función estructural, un defecto en la mitad interna puede ser crítico.

La combinación de la fórmula de profundidad con la evaluación de [[impedancia_acustica]] y [[coeficiente_de_reflexion_acustica]] ofrece una interpretación más completa que la mera medida de tiempo. Por eso, se debe interpretar el eco no solo en función del tiempo, sino también de la amplitud y de la impedancia del medio.

En resumen, este ejemplo usa las fórmulas núcleo del leaf y las conecta con la física del ensayo ultrasónico, permitiendo una estimación cuantitativa de la profundidad y una interpretación cualitativa de la naturaleza del defecto.