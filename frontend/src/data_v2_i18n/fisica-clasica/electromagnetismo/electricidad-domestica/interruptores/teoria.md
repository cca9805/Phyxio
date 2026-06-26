## Contexto conceptual

Un interruptor es el dispositivo que abre o cierra un circuito eléctrico de forma mecánica o electrónica. En una instalación doméstica, los interruptores de pared controlan las luces; los interruptores de los electrodomésticos controlan motores y resistencias calefactoras; los termostatos son interruptores controlados por temperatura. En todos estos casos, la función física es la misma: permitir o cortar el paso de la corriente [[corriente_de_maniobra]] entre la fuente de tensión [[tension_de_alimentacion]] y la carga de potencia [[potencia_de_la_carga]].

El interruptor ideal no existe en la práctica. Un interruptor real presenta en estado ON (cerrado) una resistencia no nula [[resistencia_en_estado_on]] que genera una pérdida [[perdida_resistiva_en_on]] por efecto Joule. Ese calor se disipa en los contactos metálicos del interruptor. Si [[perdida_resistiva_en_on]] es suficientemente grande o el tiempo de conducción [[t_on]] es suficientemente largo, la energía acumulada [[energia_disipada_en_conduccion]] puede degradar los contactos, reducir la vida útil del interruptor y, en casos extremos, generar un riesgo de incendio.

## 🟢 Nivel esencial

Un interruptor tiene dos estados: OFF (abierto, sin paso de corriente) y ON (cerrado, con paso de corriente [[corriente_de_maniobra]]). La corriente que demanda la carga depende de su potencia y de la tensión de la instalación.

Cuando el contacto del interruptor está desgastado u oxidado, presenta una resistencia no nula que genera calor por efecto Joule. Ese calor se acumula en los contactos metálicos. Si la corriente conducida es alta o el tiempo de uso es prolongado, el calentamiento puede degradar el contacto y reducir la vida útil del interruptor.

Un interruptor nuevo de calidad apenas calienta porque su resistencia de contacto es muy pequeña. Un interruptor envejecido puede calentarse apreciablemente incluso con cargas moderadas — señal de que hay que sustituirlo.

## 🔵 Nivel formal

La cadena causal completa parte de los datos del circuito. La tensión [[tension_de_alimentacion]] y la potencia [[potencia_de_la_carga]] de la carga determinan la corriente de maniobra [[corriente_de_maniobra]] del interruptor:

{{f:corriente}}

Con esa [[corriente_de_maniobra]] y la [[resistencia_en_estado_on]] del contacto del interruptor, la pérdida resistiva es:

{{f:perdida_on}}

Si el interruptor opera durante un tiempo [[t_on]], la energía disipada en sus contactos es:

{{f:energia_on}}

La dependencia cuadrática [[perdida_resistiva_en_on]] ∝ [[corriente_de_maniobra]]² tiene implicaciones importantes: un contacto con [[resistencia_en_estado_on]] moderada puede disipar vatios cuando la corriente es alta. Para [[corriente_de_maniobra]] = 4 A y [[resistencia_en_estado_on]] = 0,05 Ω, la pérdida es 0,8 W — pequeña pero apreciable en uso continuo. Este valor crece cuadráticamente con la corriente.

La dependencia cuadrática de [[perdida_resistiva_en_on]] en [[corriente_de_maniobra]] implica que duplicar la corriente cuadruplica la pérdida. Un interruptor de luz (carga de 60 W, [[corriente_de_maniobra]] ≈ 0,26 A) disipa 270 veces menos que un interruptor de calefactor (carga de 2 000 W, [[corriente_de_maniobra]] ≈ 8,7 A) si ambos tienen la misma [[resistencia_en_estado_on]], aunque parezcan dispositivos similares.

Las tres magnitudes de salida del análisis — [[perdida_resistiva_en_on]], [[energia_disipada_en_conduccion]] y [[corriente_de_maniobra]] — forman una jerarquía diagnóstica: [[corriente_de_maniobra]] indica si el interruptor está dimensionado para la carga; [[perdida_resistiva_en_on]] indica el riesgo térmico instantáneo; [[energia_disipada_en_conduccion]] indica la carga térmica acumulada en el período de uso.

## 🔴 Nivel estructural

El modelo de interruptor resistivo en ON asume que [[resistencia_en_estado_on]] es constante durante toda la conducción. En la realidad, [[resistencia_en_estado_on]] depende de la temperatura del contacto, del estado de oxidación de la superficie metálica y de la geometría del par de contactos. A medida que el contacto envejece, [[resistencia_en_estado_on]] aumenta de forma no reversible.

El modelo no incluye los fenómenos de apertura y cierre: en el momento de la conmutación (switching), se produce un arco eléctrico breve que puede erosionar los contactos más que miles de horas de conducción estacionaria. Por eso, la vida útil de un interruptor se expresa en número de maniobras (típicamente 10 000 a 100 000 ciclos para interruptores domésticos) más que en horas de conducción.

El dominio de validez del modelo es el régimen permanente con carga resistiva. Para cargas inductivas (motores) o capacitivas (fuentes conmutadas), la corriente en el momento de cierre puede ser mucho mayor que [[corriente_de_maniobra]] en régimen permanente: la corriente de arranque puede superar 5–10 veces [[corriente_de_maniobra]] nominal durante milisegundos. Esos picos de corriente de arranque degradan el contacto de forma desproporcionada aunque no duren nada.

La transición al modelo extendido — cuando conviene cambiar de modelo y pasar del análisis estático al dinámico — se justifica cuando el interruptor opera con cargas inductivas importantes, cicla muy frecuentemente (más de 100 veces por hora), o muestra síntomas de calentamiento con cargas que están dentro del rango nominal.

## Interpretación física profunda

La diferencia conceptual clave es entre pérdida estacionaria y degradación por maniobra. La pérdida estacionaria [[perdida_resistiva_en_on]] se puede calcular con el modelo resistivo y es proporcional a [[corriente_de_maniobra]]² · [[resistencia_en_estado_on]]. La degradación por maniobra depende del arco al abrir y cerrar el contacto y no se modela con la resistencia estática.

En un interruptor de pared estándar de uso doméstico, la pérdida estacionaria es negligible en casi todos los casos prácticos: [[resistencia_en_estado_on]] ≈ 0,01–0,05 Ω y [[corriente_de_maniobra]] típica ≈ 0,3–2 A, dando [[perdida_resistiva_en_on]] ≈ 0,001–0,2 W. El foco del análisis de seguridad está en la degradación por maniobra y en la corriente máxima que el interruptor puede interrumpir de forma segura.

## Orden de magnitud

Interruptor de pared (luz, 60 W, [[tension_de_alimentacion]] = 230 V): [[corriente_de_maniobra]] = 0,26 A, [[perdida_resistiva_en_on]] ≈ 0,0007 W con [[resistencia_en_estado_on]] = 0,01 Ω. Negligible.

Interruptor de calefactor (2 000 W, 230 V): [[corriente_de_maniobra]] = 8,7 A, [[perdida_resistiva_en_on]] ≈ 7,6 W con [[resistencia_en_estado_on]] = 0,1 Ω (contacto degradado). Apreciable — el interruptor se calienta notablemente.

Termostato de caldera (3 000 W, 230 V): [[corriente_de_maniobra]] = 13 A, [[perdida_resistiva_en_on]] ≈ 16,9 W con [[resistencia_en_estado_on]] = 0,1 Ω. Riesgo térmico real — requiere inspección o sustitución.

Con [[t_on]] = 8 h/día = 28 800 s, el calefactor del ejemplo disipa [[energia_disipada_en_conduccion]] = 7,6 × 28 800 ≈ 219 kJ ≈ 60,7 Wh/día. Anualmente son 22 kWh disipados solo en el interruptor — energía que se convierte en calor en el componente de maniobra.

## Método de resolución personalizado

1. Identificar [[tension_de_alimentacion]] (contexto de instalación) y [[potencia_de_la_carga]] de la carga (etiqueta del equipo).
2. Calcular [[corriente_de_maniobra]] = [[potencia_de_la_carga]] / [[tension_de_alimentacion]].
3. Estimar o medir [[resistencia_en_estado_on]] (nuevo: 0,01–0,05 Ω; envejecido: 0,05–0,5 Ω; degradado: > 0,5 Ω).
4. Calcular [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]² · [[resistencia_en_estado_on]].
5. Si [[perdida_resistiva_en_on]] > 1 W en uso continuo, calcular [[energia_disipada_en_conduccion]] = [[perdida_resistiva_en_on]] · [[t_on]] para el período de análisis.
6. Evaluar el resultado: [[perdida_resistiva_en_on]] < 0,1 W → negligible; 0,1–1 W → vigilar; > 1 W → inspeccionar; > 5 W → sustituir.

## Casos especiales y ejemplo extendido

**Termostato de caldera** — cicla frecuentemente (≈ 5–10 veces/hora) con carga inductiva (motor de bomba, 500 W). La corriente de arranque del motor puede ser 5 × [[corriente_de_maniobra]] nominal durante 50–100 ms en cada arranque. Con 8 arranques/hora y 12 horas de operación diaria, el contacto experimenta 96 transitorios diarios. El modelo estático de [[perdida_resistiva_en_on]] subestima significativamente la degradación real del contacto. El análisis correcto requiere el modelo extendido con consideración del arco y los transitorios inductivos.

**Interruptor MOSFET en electrónica de potencia** — [[resistencia_en_estado_on]] puede ser de miliohmios (0,001–0,01 Ω) pero [[corriente_de_maniobra]] puede ser de decenas de amperios. La pérdida [[perdida_resistiva_en_on]] sigue siendo significativa y es el parámetro de diseño central de los conversores conmutados.

## Preguntas reales del alumno

**¿Por qué se calienta el interruptor del calefactor pero no el de la luz?** Porque la corriente del calefactor es 30–50 veces mayor que la de la bombilla, y [[perdida_resistiva_en_on]] ∝ [[corriente_de_maniobra]]². La misma [[resistencia_en_estado_on]] produce 900–2 500 veces más calor con el calefactor.

**¿Un interruptor con [[resistencia_en_estado_on]] alta protege contra sobrecargas?** No. [[resistencia_en_estado_on]] alta genera calor en el propio interruptor pero no limita la corriente de la carga de forma significativa. Para limitación de corriente se necesita un fusible o magnetotérmico, no un interruptor degradado.

**¿Se puede medir [[resistencia_en_estado_on]] en casa?** Sí, con un multímetro de resolución mili-ohm (función de medida de resistencia de baja impedancia, típicamente marcada como "Low Ω" o "mΩ"). Con un multímetro básico es difícil porque la resolución es insuficiente para distinguir entre 0,01 y 0,1 Ω.

## Conexiones transversales y rutas de estudio

- Leaf hermano **enchufes-y-tomas**: allí el foco es margen_uso = [[corriente_de_maniobra]]/I_max en la regleta; aquí el foco es [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]² · [[resistencia_en_estado_on]] en el dispositivo de maniobra. Ambos aplican la ley de Joule localizada.
- Leaf hermano **diferencial-y-magnetotérmico**: el magnetotérmico protege el cableado detectando sobrecorriente; el interruptor simplemente permite o corta el paso de corriente sin función de protección activa.
- **Ley de Ohm** (electromagnetismo básico): [[resistencia_en_estado_on]] es la resistencia de los contactos. La caída de tensión en el interruptor es V_on = [[corriente_de_maniobra]] · [[resistencia_en_estado_on]], que también puede calcularse para verificar la pérdida de tensión en la carga.
- **Efecto Joule** (termodinámica básica): [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]² · [[resistencia_en_estado_on]] es la forma local de la ley de Joule. La energía [[energia_disipada_en_conduccion]] se convierte íntegramente en calor en los contactos.

## Síntesis final

El interruptor ideal tiene [[resistencia_en_estado_on]] = 0 y no disipa energía. El interruptor real tiene [[resistencia_en_estado_on]] > 0 y genera [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]² · [[resistencia_en_estado_on]] al conducir. La pérdida crece con el cuadrado de [[corriente_de_maniobra]]: los interruptores de alta potencia son los que tienen mayor riesgo térmico de contacto. La energía acumulada [[energia_disipada_en_conduccion]] = [[perdida_resistiva_en_on]] · [[t_on]] determina si el calentamiento es significativo en el período de uso. Un interruptor con síntomas de calentamiento (temperatura superficial > 40 °C, olor, decoloración) debe inspeccionarse o sustituirse independientemente de que la corriente esté dentro del rango nominal, porque el problema es [[resistencia_en_estado_on]] elevada, no sobrecarga de circuito.