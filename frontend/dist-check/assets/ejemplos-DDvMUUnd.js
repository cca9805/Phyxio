const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Una placa de acero estructural de 80 mm de espesor se inspecciona con un transductor ultrasónico de contacto. El técnico emite un pulso desde la cara superior y graba la señal A-scan. Se obtiene un eco de defecto que aparece a la mitad del tiempo entre el pulso de entrada y el eco de la pared trasera. Para calibrar el equipo se emplea un bloque de referencia del mismo acero de 50 mm de espesor. El objetivo es calcular la profundidad del defecto y analizar su interpretración física.\r
\r
## Datos\r
\r
- Espesor del bloque calibrado: 50 mm\r
- Tiempo de vuelo del eco de la pared trasera del bloque: 16.95 µs\r
- Espesor de la placa inspeccionada: 80 mm\r
- Tiempo de vuelo total de la pared trasera de la placa: 27.12 µs\r
- Posición del eco del defecto: mitad del tiempo entre entrada y pared trasera\r
\r
Estos datos son típicos en ensayos de control de calidad donde se necesita una referencia para calcular [[v_us]] y una medición directa para estimar [[d_defecto]].\r
\r
## Definición del sistema\r
\r
La pieza inspeccionada es una placa de acero homogénea con un transductor colocado en contacto sobre la superficie. El sistema considera un pulso ultrasónico que atraviesa el material, se refleja en un defecto interno y en la pared trasera.\r
\r
El defecto se modela como una discontinuidad paralela a la superficie de la placa, de modo que el recorrido del pulso es axial y el tiempo de vuelo corresponde al doble de la profundidad.\r
\r
## Modelo físico\r
\r
El modelo físico considera que la onda ultrasónica viaja a través de un medio homogéneo con velocidad constante [[v_us]] y que el defecto se comporta como una discontinuidad con incidencia normal. El pulso recorre ida y vuelta hasta el defecto, por lo que el tiempo [[t_vuelo]] corresponde al doble trayecto.\r
\r
La profundidad del defecto se describe por la fórmula:\r
\r
{{f:profundidad_defecto}}\r
\r
La impedancia acústica del material se define por:\r
\r
{{f:impedancia_acustica}}\r
\r
El coeficiente de reflexión en la interfaz defecto-material viene dado por:\r
\r
{{f:coeficiente_reflexion}}\r
\r
## Justificación del modelo\r
\r
Este modelo es válido con incidencia normal y cuando la pieza tiene un material homogéneo. La calibración con un bloque de 50 mm del mismo acero permite determinar [[v_us]] sin depender de valores tabulados, lo que reduce la incertidumbre.\r
\r
La inclusión de las relaciones de [[Z_ac]] y [[R_ac]] es necesaria para interpretar no solo la profundidad, sino también la intensidad del eco. Un defecto aire-metal produce un [[R_ac]] alto y, por tanto, un eco intenso, mientras que un defecto metálico similar al acero produce un [[R_ac]] más bajo.\r
\r
Este análisis físico justifica que el criterio de detección dependa tanto de [[t_vuelo]] como de [[Z_ac]] y [[R_ac]], es decir, de la velocidad, el tiempo de vuelo y la impedancia del medio.\r
\r
## Resolución simbólica\r
\r
Del bloque calibrado, el espesor conocido de 50 mm y el tiempo de vuelo de 16.95 µs permiten calcular [[v_us]].\r
\r
{{f:profundidad_defecto}}\r
\r
El bloque de referencia se comporta como un reflector de pared trasera, y la profundidad de 50 mm se obtiene con la relación anterior. Con ello, se determina que la velocidad ultrasonica es aproximadamente 5900 m/s.\r
\r
A continuación se usa el tiempo de vuelo del defecto en la placa inspeccionada. El eco de la pared trasera de 80 mm aparece en 27.12 µs, de modo que el eco de defecto está a 13.56 µs.\r
\r
Sustituimos los valores numéricos en la fórmula de profundidad:\r
\r
- [[v_us]] = 5900 m/s\r
- [[t_vuelo]] del defecto = 13.56 µs\r
- [[d_defecto]] = 40 mm\r
\r
## Sustitución numérica\r
\r
Usando los valores anteriores, la profundidad del defecto se calcula como\r
\r
- [[v_us]] * [[t_vuelo]] / 2 = 5900 m/s * 13.56 µs / 2\r
\r
Este cálculo confirma la profundidad de 40 mm, ya que 13.56 µs corresponde al recorrido de ida y vuelta hasta el defecto.\r
\r
La sustitución numérica hace explícita la conversión de tiempo de vuelo en distancia y muestra cómo [[v_us]] y [[t_vuelo]] determinan [[d_defecto]].\r
\r
La profundidad de 40 mm se obtiene directamente del doble recorrido. Esta resolución simbólica es coherente con la estructura del modelo y con la fórmula de profundidad utilizada anteriormente.\r
\r
Además, la estimación de [[Z_ac]] y [[R_ac]] permite valorar la naturaleza del defecto:\r
\r
{{f:impedancia_acustica}}\r
\r
{{f:coeficiente_reflexion}}\r
\r
Con [[rho_mat]] ≈ 7850 kg/m³ y [[v_us]] ≈ 5900 m/s, el acero tiene elevada impedancia acústica y la interfaz con aire presenta un coeficiente de reflexión cercano a 1.\r
\r
## Validación dimensional\r
\r
- [[v_us]] tiene dimensión de velocidad: [L T^{-1}].\r
- [[t_vuelo]] tiene dimensión de tiempo: [T].\r
- El producto [[v_us]] por [[t_vuelo]] tiene dimensión de longitud [L].\r
- Al dividir entre 2, la profundidad [[d_defecto]] mantiene la dimensión de longitud.\r
\r
La expresión es dimensionalmente consistente y produce un resultado en metros, que es la unidad adecuada para [[d_defecto]].\r
\r
## Interpretación física\r
\r
La profundidad de 40 mm coloca el defecto en la región media de la placa, donde los esfuerzos de flexión y tensión son máximos. Esta ubicación tiene implicaciones estructurales: un defecto superficial actúa como concentrador de esfuerzos locales, pero uno profundo puede comprometer la resistencia global de la pieza.\r
\r
Desde el punto de vista acústico, el hecho de que el eco sea detectable (amplitud significativa) combinado con un tiempo de vuelo consistente confirma que existe una discontinuidad real con alto contraste de impedancia. Si el defecto fuera llenado con material similar al acero (por ejemplo, una inclusión de óxido duro), [[R_ac]] sería menor y el eco más débil. El fuerte contraste acústico sugiere que el defecto es predominantemente aire o vacío.\r
\r
La validación mediante el bloque de referencia es crucial: al calcular [[v_us]] a partir de datos conocidos, se elimina la incertidumbre en la velocidad y se asegura que la profundidad calculada refleja la realidad del material. Sin esta calibración, cualquier desviación de [[v_us]] respecto a valores tabulados produciría un error sistemático en [[d_defecto]].\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
En un entorno industrial, este tipo de placa de acero puede formar parte de una estructura de soporte o un depósito a presión. El diagnóstico de defectos internos se integra en los protocolos de mantenimiento predictivo.\r
\r
Un defecto detectado a 40 mm de profundidad indica la necesidad de seguir una traza de inspección más detallada y, posiblemente, realizar mediciones adicionales en puntos contiguos.\r
\r
## Estimación física\r
\r
Con [[Z_ac]] calculada, se puede comparar la impedancia del acero con la del acoplante o del aire. Una gran diferencia de [[Z_ac]] implica un reflejo fuerte y hace más probable que el eco del defecto sea detectable.\r
\r
El coeficiente de reflexión, a su vez, indica si el pulso se refleja con cambio de fase. En una interfaz aire-acero, [[R_ac]] es muy grande y la energía se refleja casi completamente.\r
\r
Estas magnitudes físicas permiten estimar si un defecto será visible en el A-scan y si la profundidad calculada corresponde a una discontinuidad real.\r
\r
## Interpretación\r
\r
El defecto a 40 mm no es superficial, pero está dentro de la zona que el pulso eco puede analizar. Si la placa cumple una función estructural, un defecto en la mitad interna puede ser crítico.\r
\r
La combinación de la fórmula de profundidad con la evaluación de [[Z_ac]] y [[R_ac]] ofrece una interpretación más completa que la mera medida de tiempo. Por eso, se debe interpretar el eco no solo en función del tiempo, sino también de la amplitud y de la impedancia del medio.\r
\r
En resumen, este ejemplo usa las fórmulas núcleo del leaf y las conecta con la física del ensayo ultrasónico, permitiendo una estimación cuantitativa de la profundidad y una interpretación cualitativa de la naturaleza del defecto.\r
`;export{e as default};
