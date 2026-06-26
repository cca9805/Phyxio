const e=`# Interruptores\r
\r
## Contexto conceptual\r
\r
Un interruptor es el dispositivo que abre o cierra un circuito eléctrico de forma mecánica o electrónica. En una instalación doméstica, los interruptores de pared controlan las luces; los interruptores de los electrodomésticos controlan motores y resistencias calefactoras; los termostatos son interruptores controlados por temperatura. En todos estos casos, la función física es la misma: permitir o cortar el paso de la corriente [[I]] entre la fuente de tensión [[V]] y la carga de potencia [[P]].\r
\r
El interruptor ideal no existe en la práctica. Un interruptor real presenta en estado ON (cerrado) una resistencia no nula [[R_on]] que genera una pérdida [[P_on]] por efecto Joule. Ese calor se disipa en los contactos metálicos del interruptor. Si [[P_on]] es suficientemente grande o el tiempo de conducción [[t_on]] es suficientemente largo, la energía acumulada [[E_on]] puede degradar los contactos, reducir la vida útil del interruptor y, en casos extremos, generar un riesgo de incendio.\r
\r
## 🟢 Nivel esencial\r
\r
Un interruptor tiene dos estados: OFF (abierto, sin paso de corriente) y ON (cerrado, con paso de corriente [[I]]). La corriente que demanda la carga depende de su potencia y de la tensión de la instalación.\r
\r
Cuando el contacto del interruptor está desgastado u oxidado, presenta una resistencia no nula que genera calor por efecto Joule. Ese calor se acumula en los contactos metálicos. Si la corriente conducida es alta o el tiempo de uso es prolongado, el calentamiento puede degradar el contacto y reducir la vida útil del interruptor.\r
\r
Un interruptor nuevo de calidad apenas calienta porque su resistencia de contacto es muy pequeña. Un interruptor envejecido puede calentarse apreciablemente incluso con cargas moderadas — señal de que hay que sustituirlo.\r
\r
## 🔵 Nivel formal\r
\r
La cadena causal completa parte de los datos del circuito. La tensión [[V]] y la potencia [[P]] de la carga determinan la corriente de maniobra [[I]] del interruptor:\r
\r
{{f:corriente}}\r
\r
Con esa [[I]] y la [[R_on]] del contacto del interruptor, la pérdida resistiva es:\r
\r
{{f:perdida_on}}\r
\r
Si el interruptor opera durante un tiempo [[t_on]], la energía disipada en sus contactos es:\r
\r
{{f:energia_on}}\r
\r
La dependencia cuadrática [[P_on]] ∝ [[I]]² tiene implicaciones importantes: un contacto con [[R_on]] moderada puede disipar vatios cuando la corriente es alta. Para [[I]] = 4 A y [[R_on]] = 0,05 Ω, la pérdida es 0,8 W — pequeña pero apreciable en uso continuo. Este valor crece cuadráticamente con la corriente.\r
\r
La dependencia cuadrática de [[P_on]] en [[I]] implica que duplicar la corriente cuadruplica la pérdida. Un interruptor de luz (carga de 60 W, [[I]] ≈ 0,26 A) disipa 270 veces menos que un interruptor de calefactor (carga de 2 000 W, [[I]] ≈ 8,7 A) si ambos tienen la misma [[R_on]], aunque parezcan dispositivos similares.\r
\r
Las tres magnitudes de salida del análisis — [[P_on]], [[E_on]] y [[I]] — forman una jerarquía diagnóstica: [[I]] indica si el interruptor está dimensionado para la carga; [[P_on]] indica el riesgo térmico instantáneo; [[E_on]] indica la carga térmica acumulada en el período de uso.\r
\r
## 🔴 Nivel estructural\r
\r
El modelo de interruptor resistivo en ON asume que [[R_on]] es constante durante toda la conducción. En la realidad, [[R_on]] depende de la temperatura del contacto, del estado de oxidación de la superficie metálica y de la geometría del par de contactos. A medida que el contacto envejece, [[R_on]] aumenta de forma no reversible.\r
\r
El modelo no incluye los fenómenos de apertura y cierre: en el momento de la conmutación (switching), se produce un arco eléctrico breve que puede erosionar los contactos más que miles de horas de conducción estacionaria. Por eso, la vida útil de un interruptor se expresa en número de maniobras (típicamente 10 000 a 100 000 ciclos para interruptores domésticos) más que en horas de conducción.\r
\r
El dominio de validez del modelo es el régimen permanente con carga resistiva. Para cargas inductivas (motores) o capacitivas (fuentes conmutadas), la corriente en el momento de cierre puede ser mucho mayor que [[I]] en régimen permanente: la corriente de arranque puede superar 5–10 veces [[I]] nominal durante milisegundos. Esos picos de corriente de arranque degradan el contacto de forma desproporcionada aunque no duren nada.\r
\r
La transición al modelo extendido — cuando conviene cambiar de modelo y pasar del análisis estático al dinámico — se justifica cuando el interruptor opera con cargas inductivas importantes, cicla muy frecuentemente (más de 100 veces por hora), o muestra síntomas de calentamiento con cargas que están dentro del rango nominal.\r
\r
## Interpretación física profunda\r
\r
La diferencia conceptual clave es entre pérdida estacionaria y degradación por maniobra. La pérdida estacionaria [[P_on]] se puede calcular con el modelo resistivo y es proporcional a [[I]]² · [[R_on]]. La degradación por maniobra depende del arco al abrir y cerrar el contacto y no se modela con la resistencia estática.\r
\r
En un interruptor de pared estándar de uso doméstico, la pérdida estacionaria es negligible en casi todos los casos prácticos: [[R_on]] ≈ 0,01–0,05 Ω y [[I]] típica ≈ 0,3–2 A, dando [[P_on]] ≈ 0,001–0,2 W. El foco del análisis de seguridad está en la degradación por maniobra y en la corriente máxima que el interruptor puede interrumpir de forma segura.\r
\r
## Orden de magnitud\r
\r
Interruptor de pared (luz, 60 W, [[V]] = 230 V): [[I]] = 0,26 A, [[P_on]] ≈ 0,0007 W con [[R_on]] = 0,01 Ω. Negligible.\r
\r
Interruptor de calefactor (2 000 W, 230 V): [[I]] = 8,7 A, [[P_on]] ≈ 7,6 W con [[R_on]] = 0,1 Ω (contacto degradado). Apreciable — el interruptor se calienta notablemente.\r
\r
Termostato de caldera (3 000 W, 230 V): [[I]] = 13 A, [[P_on]] ≈ 16,9 W con [[R_on]] = 0,1 Ω. Riesgo térmico real — requiere inspección o sustitución.\r
\r
Con [[t_on]] = 8 h/día = 28 800 s, el calefactor del ejemplo disipa [[E_on]] = 7,6 × 28 800 ≈ 219 kJ ≈ 60,7 Wh/día. Anualmente son 22 kWh disipados solo en el interruptor — energía que se convierte en calor en el componente de maniobra.\r
\r
## Método de resolución personalizado\r
\r
1. Identificar [[V]] (contexto de instalación) y [[P]] de la carga (etiqueta del equipo).\r
2. Calcular [[I]] = [[P]] / [[V]].\r
3. Estimar o medir [[R_on]] (nuevo: 0,01–0,05 Ω; envejecido: 0,05–0,5 Ω; degradado: > 0,5 Ω).\r
4. Calcular [[P_on]] = [[I]]² · [[R_on]].\r
5. Si [[P_on]] > 1 W en uso continuo, calcular [[E_on]] = [[P_on]] · [[t_on]] para el período de análisis.\r
6. Evaluar el resultado: [[P_on]] < 0,1 W → negligible; 0,1–1 W → vigilar; > 1 W → inspeccionar; > 5 W → sustituir.\r
\r
## Casos especiales y ejemplo extendido\r
\r
**Termostato de caldera** — cicla frecuentemente (≈ 5–10 veces/hora) con carga inductiva (motor de bomba, 500 W). La corriente de arranque del motor puede ser 5 × [[I]] nominal durante 50–100 ms en cada arranque. Con 8 arranques/hora y 12 horas de operación diaria, el contacto experimenta 96 transitorios diarios. El modelo estático de [[P_on]] subestima significativamente la degradación real del contacto. El análisis correcto requiere el modelo extendido con consideración del arco y los transitorios inductivos.\r
\r
**Interruptor MOSFET en electrónica de potencia** — [[R_on]] puede ser de miliohmios (0,001–0,01 Ω) pero [[I]] puede ser de decenas de amperios. La pérdida [[P_on]] sigue siendo significativa y es el parámetro de diseño central de los conversores conmutados.\r
\r
## Preguntas reales del alumno\r
\r
**¿Por qué se calienta el interruptor del calefactor pero no el de la luz?** Porque la corriente del calefactor es 30–50 veces mayor que la de la bombilla, y [[P_on]] ∝ [[I]]². La misma [[R_on]] produce 900–2 500 veces más calor con el calefactor.\r
\r
**¿Un interruptor con [[R_on]] alta protege contra sobrecargas?** No. [[R_on]] alta genera calor en el propio interruptor pero no limita la corriente de la carga de forma significativa. Para limitación de corriente se necesita un fusible o magnetotérmico, no un interruptor degradado.\r
\r
**¿Se puede medir [[R_on]] en casa?** Sí, con un multímetro de resolución mili-ohm (función de medida de resistencia de baja impedancia, típicamente marcada como "Low Ω" o "mΩ"). Con un multímetro básico es difícil porque la resolución es insuficiente para distinguir entre 0,01 y 0,1 Ω.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
- Leaf hermano **enchufes-y-tomas**: allí el foco es margen_uso = [[I]]/I_max en la regleta; aquí el foco es [[P_on]] = [[I]]² · [[R_on]] en el dispositivo de maniobra. Ambos aplican la ley de Joule localizada.\r
- Leaf hermano **diferencial-y-magnetotérmico**: el magnetotérmico protege el cableado detectando sobrecorriente; el interruptor simplemente permite o corta el paso de corriente sin función de protección activa.\r
- **Ley de Ohm** (electromagnetismo básico): [[R_on]] es la resistencia de los contactos. La caída de tensión en el interruptor es V_on = [[I]] · [[R_on]], que también puede calcularse para verificar la pérdida de tensión en la carga.\r
- **Efecto Joule** (termodinámica básica): [[P_on]] = [[I]]² · [[R_on]] es la forma local de la ley de Joule. La energía [[E_on]] se convierte íntegramente en calor en los contactos.\r
\r
## Síntesis final\r
\r
El interruptor ideal tiene [[R_on]] = 0 y no disipa energía. El interruptor real tiene [[R_on]] > 0 y genera [[P_on]] = [[I]]² · [[R_on]] al conducir. La pérdida crece con el cuadrado de [[I]]: los interruptores de alta potencia son los que tienen mayor riesgo térmico de contacto. La energía acumulada [[E_on]] = [[P_on]] · [[t_on]] determina si el calentamiento es significativo en el período de uso. Un interruptor con síntomas de calentamiento (temperatura superficial > 40 °C, olor, decoloración) debe inspeccionarse o sustituirse independientemente de que la corriente esté dentro del rango nominal, porque el problema es [[R_on]] elevada, no sobrecarga de circuito.\r
`;export{e as default};
