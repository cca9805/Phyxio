## 1. Diseño acústico de instrumentos musicales

El luthier y el fabricante de instrumentos de viento diseñan la forma geométrica del resonador (tubo, cuerpo de madera, campana de metal) para seleccionar qué armónicos de [[f1]] son amplificados y con qué amplitud relativa. La longitud del tubo determina [[f1]], pero la forma del tubo (cilíndrica vs cónica) determina qué series armónica está presente: un tubo cilíndrico cerrado produce solo armónicos impares; un tubo cónico o un tubo abierto produce todos los armónicos.

El diseñador ajusta los cortes, el grosor de la madera, la posición y tamaño de los orificios y la forma del pabellón para modificar la envolvente espectral [[An]]. La diferencia de timbre entre un oboe y un fagot, ambos instrumentos de doble lengüeta, se debe en parte a la distinta forma de sus tubos, que selecciona distintas relaciones de amplitudes entre los armónicos de una misma nota.

Variable dominante: el número de armónico [[n_arm]] y las amplitudes [[An]] de los modos resonantes, determinados por la geometría del resonador.
Límite de validez: el modelo de serie de Fourier armónica describe bien el sonido en régimen sostenido. En el ataque (inicio de la nota), el espectro es transitorio y las amplitudes [[An]] varían rápidamente; en ese régimen, el espectrograma es más apropiado que el espectro estático.

## 2. Compresión de audio: MP3 y AAC

Los algoritmos de compresión de audio con pérdida (MP3, AAC, Opus) explotan la estructura armónica del sonido y los límites de la percepción auditiva para reducir el tamaño del archivo con mínima pérdida perceptible. Para cada tramo temporal del audio, calculan el espectro de amplitudes [[An]] en función de [[fn]] mediante una transformada de Fourier de tiempo corto.

A continuación aplican dos estrategias: eliminan los armónicos [[fn]] cuya [[An]] está por debajo del umbral de audición en presencia de los componentes más intensos (enmascaramiento auditivo), y codifican las [[An]] restantes con menos bits de los que usaría la representación sin compresión. La redundancia armónica del sonido musical (muchos ciclos de la misma [[f1]] con las mismas [[An]]) hace que estas estrategias sean altamente eficaces.

Variable dominante: la amplitud de cada componente armónico [[An]], cuya relativa a los componentes enmascarantes determina si puede eliminarse sin pérdida perceptible.
Límite de validez: el enmascaramiento auditivo falla para señales transitorias rápidas (castañuelas, percusión aguda) y para escuchas con equipamiento de alta resolución y entrenamiento auditivo fino. Para estos casos se usan tasas de bits más altas o codificación sin pérdida.

## 3. Síntesis y procesado de voz en telecomunicaciones

Los códecs de voz (G.711, G.729, AMR, Opus en modo voz) representan la señal de habla mediante sus parámetros espectrales: [[f1]] del habla sonora (entre 80 y 300 Hz para adultos), las amplitudes [[An]] de los primeros armónicos, y la posición y amplitud de las formantes (concentraciones espectrales debidas a la resonancia del tracto vocal).

Transmitir solo estos parámetros en lugar de la forma de onda completa reduce el ancho de banda necesario de 64 kbps (PCM sin compresión) a 8 o 4 kbps (G.729) o menos de 1 kbps (modelos paramétricos). En el receptor, un sintetizador reconstruye [[p_total]] a partir de los parámetros recibidos, recreando el timbre de la voz con [[f1]] e [[An]] aproximados.

Variable dominante: la frecuencia fundamental de la voz [[f1]], que determina el tono percibido del habla, y la distribución de [[An]] en las formantes, que determina la inteligibilidad y el carácter del timbre vocal.
Límite de validez: los códecs de baja tasa pierden calidad con voces con mucho vibrato, susurros (voz no periódica, [[f1]] no definida), y sonidos consonánticos fricativos (s, f, sh), que no tienen estructura armónica y requieren codificación de ruido.

## 4. Diagnóstico de maquinaria industrial por análisis espectral

Las máquinas rotativas (motores, turbinas, rodamientos) producen vibraciones mecánicas que se transmiten al medio circundante como sonido. El espectro de amplitudes de esa vibración contiene líneas a [[f1]] igual a la frecuencia de rotación y armónicos a múltiplos de [[f1]]. El patrón de [[An]] en cada armónico es la huella acústica del estado mecánico de la máquina.

Un rodamiento desgastado o con un defecto localizado genera una serie de impulsos periódicos a una [[f1]] característica del tipo de fallo, que se superpone al espectro de fondo. Un técnico de mantenimiento entrenado o un sistema automático de vigilancia detecta la aparición de esa [[f1]] y el crecimiento de sus [[An]] a lo largo del tiempo como señal de alerta temprana, antes de que el fallo sea catastrófico.

Variable dominante: la frecuencia fundamental [[f1]] de la señal de fallo, que identifica el componente defectuoso (sus posibles valores se calculan a partir de la geometría del rodamiento y la velocidad de rotación).
Límite de validez: el análisis espectral estático supone que la velocidad de rotación es constante durante la medición. Si la máquina está acelerando o decelerando, las líneas espectrales se ensanchan o se desplazan, y es necesario usar el espectrograma de tiempo-frecuencia o la transformada de Fourier de tiempo corto.

## 5. Reconocimiento automático de instrumentos e identificación del timbre

Los sistemas de análisis musical automático (Music Information Retrieval, MIR) identifican qué instrumento está tocando a partir de la señal de audio. El algoritmo extrae el vector de amplitudes [[An]] de los primeros N armónicos en cada ventana temporal, formando una representación del espectro. Ese vector se compara con modelos aprendidos de cada instrumento mediante clasificadores de aprendizaje automático.

La capacidad del sistema para distinguir instrumentos de timbres similares (oboe vs corno inglés, violín vs viola) depende directamente de la precisión con que se estiman las [[An]] y [[f1]] de la señal. Los errores en la estimación de [[f1]] (especialmente cuando hay múltiples instrumentos sonando simultáneamente) son el principal problema de estos sistemas, porque si [[f1]] se estima incorrectamente, todos los [[n_arm]] y [[An]] asociados quedan desplazados.

Variable dominante: el vector de amplitudes de armónicos [[An]] para n desde 1 hasta N, que es la representación cuantitativa del timbre usada como característica de entrada al clasificador.
Límite de validez: el sistema asume que en cada ventana temporal hay un único instrumento con una única [[f1]]. Con polifonía (múltiples notas simultáneas) o mezcla de instrumentos sin separación previa, la estimación de [[f1]] y [[An]] por instrumento individual requiere algoritmos de separación de fuentes, cuya fiabilidad disminuye rápidamente con el número de fuentes simultáneas.
