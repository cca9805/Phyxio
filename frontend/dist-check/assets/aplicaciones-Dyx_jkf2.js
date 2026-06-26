const e=`## 1. Perfilado geotecnico de suelos mediante MASW para clasificacion sismica

En la ingenieria civil, antes de diseñar una cimentacion se debe clasificar el suelo segun su rigidez sismica. El metodo MASW (Multichannel Analysis of Surface Waves) explota la dispersion de las ondas de Rayleigh en medios estratificados: se genera un impacto en superficie, se mide la velocidad de fase de la onda de Rayleigh a distintas frecuencias y se invierte la curva de dispersion para obtener el perfil de [[v_s]] con la profundidad.

La frecuencia selecciona la profundidad investigada: a 50 Hz se sondean los primeros metros (rellenos, suelo vegetal); a 5 Hz se alcanzan 30-50 m (sustrato rocoso). El parametro VS30 (promedio de [[v_s]] en los primeros 30 metros) determina la categoria sismica del suelo. Un error de 50 m/s en VS30 puede cambiar la categoria y multiplicar las fuerzas de diseno. La tecnica es no invasiva, rapida (un ensayo completo en 30 minutos) y mucho mas economica que perforaciones.

Variable dominante: la velocidad de onda de Rayleigh medida a cada frecuencia, que se transforma en perfil de velocidad de onda S mediante inversion de la curva de dispersion.
Límite de validez: en suelos con inversiones de velocidad (capa rigida superficial sobre capa blanda), el metodo puede generar soluciones no unicas en la inversion, requiriendo informacion complementaria.

## 2. Filtros SAW en telecomunicaciones moviles

Los filtros de ondas acusticas superficiales (SAW, Surface Acoustic Waves) son dispositivos microelectronicos que utilizan ondas de Rayleigh en sustratos piezoelectricos (cuarzo, niobato de litio) para seleccionar frecuencias. Un transductor interdigital convierte señales electricas en ondas de Rayleigh que viajan por la superficie del cristal a velocidades del orden de 3000-4000 m/s. La longitud de onda [[lambda_R]] define la frecuencia central del filtro.

Cada telefono movil contiene entre 5 y 30 filtros SAW para separar las bandas de comunicacion (GSM, LTE, 5G). La precision requerida es extrema: variaciones de [[v_R]] del 0.01 por ciento desplazan la frecuencia central y degradan la calidad de la señal. El confinamiento superficial (penetracion de solo unas decenas de micrometros) garantiza alta sensibilidad a las propiedades de la superficie del cristal, permitiendo miniaturizacion extrema.

Variable dominante: la velocidad de Rayleigh en el sustrato piezoelectrico, que fija la frecuencia central del filtro mediante la relacion entre frecuencia, velocidad y separacion entre electrodos interdigitales.
Límite de validez: a frecuencias superiores a 3 GHz, la longitud de onda se acerca al tamaño de las imperfecciones del sustrato y las perdidas por scattering degradan el rendimiento; se pasa entonces a tecnologia BAW (Bulk Acoustic Wave).

## 3. Deteccion de grietas superficiales en componentes aeronauticos

En la inspeccion de turbinas de avion, discos de freno y trenes de aterrizaje, las ondas de Rayleigh permiten detectar grietas superficiales sin desmontar las piezas. Se emite un pulso ultrasonico de Rayleigh (frecuencia tipica 1-10 MHz, [[lambda_R]] de fracciones de milimetro a milimetros) sobre la superficie de la pieza. Cualquier discontinuidad superficial (grieta, picadura de corrosion, inicio de fatiga) refleja parte de la onda, generando un eco detectable.

La profundidad de penetracion [[d_pen]] (del orden de [[lambda_R]]) limita la inspeccion a defectos superficiales o subsuperficiales (hasta 1-2 mm), pero precisamente esos son los mas criticos en fatiga porque es donde se inician las fracturas. La sensibilidad es extrema: se detectan grietas de 0.1 mm de profundidad. El metodo es rapido, automatizable y no altera la pieza, lo que permite inspecciones periodicas en servicio.

Variable dominante: la amplitud del eco reflejado por el defecto superficial, que depende del tamaño de la grieta relativo a la longitud de onda de Rayleigh utilizada.
Límite de validez: para defectos internos profundos (mas alla de una longitud de onda bajo la superficie), la onda de Rayleigh no tiene sensibilidad y se deben usar ondas de cuerpo longitudinales o transversales.

## 4. Estimacion de magnitud sismica superficial Ms

La magnitud de ondas superficiales (Ms) es una escala sismologica basada en la amplitud de las ondas de Rayleigh registradas a distancias teleseismicas (20-160 grados). Se mide la amplitud maxima del tren de ondas de Rayleigh (periodo cercano a 20 s) y se corrige por la distancia y la profundidad focal. Esta escala es particularmente util para terremotos superficiales (profundidad menor de 70 km) donde las ondas de Rayleigh dominan el registro.

La ventaja de Ms es su robustez: las ondas de Rayleigh se propagan eficientemente a grandes distancias (atenuacion como la inversa de la raiz de la distancia) y su periodo largo las hace menos sensibles a heterogeneidades locales. La relacion entre Ms y la energia liberada permite comparar sismos globalmente. Sin embargo, Ms satura para terremotos muy grandes (superiores a magnitud 8) porque la amplitud a 20 s deja de crecer proporcionalmente con la energia total liberada.

Variable dominante: la amplitud maxima del tren de ondas de Rayleigh a periodo de 20 segundos, corregida por distancia epicentral, que cuantifica la energia superficial del sismo.
Límite de validez: para terremotos profundos (mas de 70 km) las ondas de Rayleigh se excitan debilmente y Ms subestima la magnitud real; se usa entonces la magnitud de momento Mw.

## 5. Caracterizacion mecanica de recubrimientos y peliculas delgadas

En la industria de semiconductores y recubrimientos de proteccion (nitruros, carburos, DLC), las ondas de Rayleigh de alta frecuencia (50-500 MHz) permiten medir las propiedades elasticas de capas de espesor micrometrico sin destruir la muestra. La tecnica de microscopia acustica de ondas superficiales (SAM/SLAM) lanza un haz ultrasonico focalizado sobre la superficie del recubrimiento y analiza la velocidad de Rayleigh generada.

Como la profundidad de penetracion [[d_pen]] a estas frecuencias es del orden de micrometros (comparable al espesor del recubrimiento), la medida es sensible exclusivamente a las propiedades de la pelicula y la interfaz con el sustrato. A partir de [[v_R]] medida, se estima el modulo de Young y el coeficiente de Poisson del recubrimiento. Variaciones locales de [[v_R]] revelan defectos de adhesion, delaminaciones incipientes o gradientes de composicion en la pelicula. La tecnica es no destructiva y tiene resolucion lateral de micrometros.

Variable dominante: la velocidad de Rayleigh en la superficie del recubrimiento, que refleja las constantes elasticas de la pelicula delgada y su grado de adhesion al sustrato.
Límite de validez: cuando el espesor de la pelicula es mucho menor que la longitud de onda (pelicula ultrafina), la medida refleja principalmente el sustrato y la sensibilidad al recubrimiento se pierde; se requieren entonces frecuencias mas altas o tecnicas de ondas guiadas.
`;export{e as default};
