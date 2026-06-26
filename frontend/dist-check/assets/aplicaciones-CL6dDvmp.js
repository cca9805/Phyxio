const e=`## 1. Sonar y navegación subacuática

El sonar activo emite pulsos acusticos bajo el agua y mide el tiempo de retorno de los ecos para calcular distancias a objetos. La distancia se obtiene multiplicando la mitad del tiempo de ida y vuelta por [[v_son]]. La precision del sistema depende directamente de lo bien que se conozca [[v_son]] en las condiciones reales del mar.

En el océano, [[v_son]] varía entre ~1450 m/s (aguas frías profundas) y ~1530 m/s (aguas tropicales superficiales), dependiendo de la temperatura, la salinidad y la presión hidrostática. Los sistemas de sonar de alta precisión incorporan perfiles de [[v_son]] medidos en tiempo real con sondas de velocidad del sonido para corregir las distancias calculadas. Un error del 1 % en [[v_son]] (15 m/s) causa un error del 1 % en la distancia calculada, inaceptable para navegación submarina de precisión.

Variable dominante: [[v_son]] en agua de mar, que varía con temperatura, salinidad y profundidad. La dependencia más importante es con la temperatura: [[v_son]] aumenta ~4.6 m/s por °C.
Límite de validez: el modelo de propagación rectilínea falla en presencia de gradientes de temperatura que causan refracción acústica. Los sistemas de sonar de largo alcance usan modelos de propagación por rayos acústicos para corregir la curvatura de las trayectorias.

## 2. Ecografía médica y diagnóstico por ultrasonidos

Los equipos de ecografia medica emiten pulsos ultrasonicos y miden el tiempo de retorno de los ecos desde las interfaces entre tejidos con distintas propiedades acusticas. La distancia a cada interfaz se obtiene a partir de la mitad del tiempo de eco y la [[v_son]] calibrada en tejidos blandos, aproximadamente 1540 m/s en equipos estandar.

La elección de [[v_son]] = 1540 m/s como valor de calibración es un compromiso: [[v_son]] varía entre ~1450 m/s en grasa y ~1570 m/s en músculo. Si el haz atraviesa tejidos con [[v_son]] diferente al valor de calibración, la profundidad calculada tiene un error proporcional a la desviación relativa de [[v_son]]. Esto causa el artefacto de "distorsión de velocidad" en ecografía, visible como estructuras desplazadas de su posición real en la imagen.

Variable dominante: [[v_son]] en el tejido de interés. La variación entre tejidos blandos es del ±5 % respecto al valor de calibración, causando errores de posición de hasta ±5 % en la imagen.
Límite de validez: el modelo de [[v_son]] constante a 1540 m/s produce imágenes con errores de posición en interfaces entre tejidos con velocidades muy diferentes (por ejemplo, entre grasa y músculo). Los equipos de alta gama incorporan mapas de [[v_son]] del tejido para compensar estos artefactos.

## 3. Control de calidad industrial por ultrasonidos (END)

Los ensayos no destructivos (END) por ultrasonidos se usan para detectar grietas, inclusiones, delaminaciones y otros defectos en piezas metalicas, soldaduras y materiales compuestos, sin danar la pieza. El principio es identico al del sonar: se emite un pulso ultrasonico y se mide el tiempo de vuelo del eco desde el defecto. La profundidad del defecto se infiere con la mitad de ese tiempo y la [[v_son]] del material.

La calibración precisa de [[v_son]] en el material bajo ensayo es crítica. [[v_son]] en acero varía con el tipo de acero, el tratamiento térmico, la temperatura de la pieza y la presencia de tensiones mecánicas residuales (efecto acustoelástico). Los laboratorios de END mantienen tablas de [[v_son]] para cada material y condición de ensayo, y calibran el equipo con bloques de referencia de espesor conocido fabricados del mismo material que la pieza a ensayar.

Variable dominante: [[v_son]] en el material de la pieza. Para acero inoxidable, [[v_son]] varía entre 5630 m/s (acero inoxidable austenítico) y 5940 m/s (acero inoxidable ferrítico), una diferencia del 5 % que se traduce en un error de posición del defecto del mismo orden si no se calibra específicamente.
Límite de validez: en materiales anisótropos (acero austenítico soldado, materiales compuestos de fibra de carbono), [[v_son]] depende de la dirección del haz ultrasónico. El modelo isótropo de [[v_son]] constante produce errores sistemáticos que requieren corrección mediante modelos de propagación anisotrópica.

## 4. Meteorología acústica: medición de temperatura atmosférica

La dependencia de [[v_son]] en aire con [[T_abs]] puede usarse inversamente para medir la temperatura de capas de la atmosfera sin sensores de contacto. Los sistemas de sondeo acustico de la atmosfera emiten pulsos de sonido verticalmente y miden la intensidad y el espectro de las senales retrodispersadas por las turbulencias termicas del aire.

El desplazamiento Doppler de la señal retrodispersada da la velocidad vertical del viento; la intensidad de la retrodispersión da información sobre la estructura térmica de la capa límite atmosférica. A partir de perfiles de [[v_son]] medidos, se puede reconstruir el perfil de temperatura con resolución vertical de decenas de metros, sin globos sonda ni radiosondas. Los SODAR se usan en meteorología de capa límite, evaluación de impacto ambiental de parques eólicos y monitorización de contaminantes atmosféricos.

Variable dominante: [[T_abs]] inferida a partir de [[v_son]] medida. La sensibilidad es aproximadamente 0.6 m/s por °C, lo que permite resolver diferencias de temperatura de ~0.5 °C con equipos bien calibrados.
Limite de validez: la humedad del aire modifica ligeramente [[v_son]] porque el vapor de agua tiene menor [[M_mol]] que el aire seco. En dias muy humedos, [[v_son]] puede ser hasta un 0.5 % mayor que en aire seco, lo que produce un sesgo de ~1.5 C en la temperatura estimada si no se corrige la humedad.

## 5. Diseño de instrumentos musicales de viento

La longitud de un tubo resonante determina que frecuencias puede emitir el instrumento a traves de la condicion de resonancia. Los tubos abiertos y cerrados usan condiciones de contorno distintas, de modo que la longitud efectiva se disena a partir de [[v_son]] para producir la frecuencia deseada.

Como [[v_son]] depende de [[T_abs]], la longitud de onda acústica para una frecuencia dada cambia con la temperatura del aire dentro del instrumento. En la práctica, esto significa que los instrumentos de viento se desafinan cuando la temperatura cambia: si el aire interior está más frío de lo previsto, [[v_son]] es menor, la longitud de onda es menor, la frecuencia de resonancia disminuye y el instrumento suena más bajo (bemolizado). Los músicos compensan este efecto calentando previamente el instrumento con el aliento o ajustando mecánicamente la longitud efectiva del tubo (cuerpo de afinación en flautas, vara de afinación en trompetas).

Variable dominante: [[v_son]] a la temperatura del aire dentro del instrumento. Un cambio de 10 °C cambia [[v_son]] en ~6 m/s, es decir, un 1.8 %, lo que desafina el instrumento en ~31 cents (un cent es una centésima de semitono; 31 cents es perceptible para músicos entrenados).
Límite de validez: el modelo de tubo ideal asume [[v_son]] uniforme a lo largo del tubo y no tiene en cuenta los efectos de la geometría de los extremos (corrección de extremo), la viscosidad del aire, ni la presencia de las paredes. Para diseño de alta precisión, estos efectos requieren correcciones del orden del 1-3 % en la longitud efectiva.
`;export{e as default};
