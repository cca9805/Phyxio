const e=`## 1. Radar Doppler de velocidad en carretera

Los radares de velocidad de trafico explotan el efecto Doppler con ondas de radio o microondas. El dispositivo emite una señal continua a frecuencia [[f_fuente]] conocida (tipicamente entre 10 y 35 GHz). El vehiculo refleja la señal de vuelta al radar, actuando como receptor y como nueva fuente con un desplazamiento Doppler. El radar recibe el eco y mide el desplazamiento total de frecuencia, que en el caso de reflexion es el doble del desplazamiento simple porque el efecto se aplica dos veces (una al recibir y otra al reemitir). A partir de ese [[delta_f]] se calcula directamente la velocidad del vehiculo.

La fisica del radar de microondas es identica a la del efecto Doppler acustico, reemplazando [[v_sonido]] por la velocidad de la luz. Para un radar de banda K (24 GHz), cada km/h de velocidad del vehiculo produce aproximadamente 44 Hz de desplazamiento Doppler: velocidades de 50 a 150 km/h producen desplazamientos de 2.2 a 6.6 kHz, facilmente medibles con precision de fracciones de Hz.

Variable dominante: el desplazamiento Doppler [[delta_f]], directamente proporcional a la velocidad del vehiculo; la precision de la medida de velocidad esta limitada por la precision en la medida de [[delta_f]].
Límite de validez: el radar apunta directamente al vehiculo (angulo de incidencia pequeno). Para angulos oblicuos, la componente radial de la velocidad es menor que la velocidad total: el radar subestima la velocidad. Ademas, el radar no puede distinguir entre varias frecuencias Doppler superpuestas de multiples vehiculos sin procesado de señal adicional.

---

## 2. Ecografia Doppler cardiaca y vascular

En medicina, la ecografia Doppler permite medir la velocidad del flujo sanguineo en tiempo real sin contacto con la sangre. El transductor ultrasonico emite pulsos a [[f_fuente]] tipicamente entre 2 y 10 MHz. Los globulos rojos en movimiento reflejan los pulsos con un desplazamiento Doppler proporcional a su velocidad, y el equipo mide [[delta_f]] del eco y lo convierte en velocidad de flujo.

La aplicacion clinica mas critica es la evaluacion de estenosis valvulares cardiacas: una valvula estrecha acelera el flujo de sangre, y el pico de velocidad detectado por Doppler permite al cardiologo calcular el gradiente de presion a traves de la valvula (mediante la ecuacion de Bernoulli modificada) sin necesidad de cateterismo invasivo. El Doppler color asigna un color (tipicamente rojo para flujo hacia el transductor, azul para flujo que se aleja) a cada pixel de la imagen ultrasonics, produciendo un mapa de velocidades en tiempo real.

Variable dominante: el desplazamiento Doppler [[delta_f]] del eco ultrasonico, que es proporcional a la velocidad de los globulos rojos a lo largo de la linea de vision del transductor.
Límite de validez: la tecnica pierde sensibilidad para angulos entre el haz y el flujo superiores a 60 grados, donde la componente radial de la velocidad se vuelve pequeña. Para flujo perpendicular al haz, el desplazamiento Doppler es nulo aunque el flujo sea rapido.

---

## 3. Radar meteorologico Doppler para deteccion de tornados

Los radares meteorologicos modernos (tipo WSR-88D en Estados Unidos) emiten pulsos de microondas y miden el desplazamiento Doppler de los ecos de las particulas de lluvia, granizo o nieve. El [[delta_f]] de cada eco revela la velocidad radial de las particulas en cada punto del volumen escaneado. Un mapa de velocidades radiales de toda la atmosfera permite detectar la rotacion del viento caracteristica de los tornados: si en una region del mapa aparece un area de viento acercandose adyacente a un area de viento alejandose, se deduce que el aire esta girando, lo que es la firma Doppler de una supercelula tornadica.

Esta deteccion puede realizarse con hasta 30 minutos de anticipacion respecto a la observacion visual del tornado, tiempo suficiente para emitir alertas de emergencia. El sistema integra medidas de [[f_obs]] en toda la extension del haz radar para construir el campo de velocidades tridimensional de la atmosfera.

Variable dominante: la componente radial de la velocidad del viento detectada como [[delta_f]] del eco de precipitacion; la diferencia entre zonas de acercamiento y alejamiento adyacentes permite inferir la rotacion del viento.
Límite de validez: el radar solo mide la componente radial de la velocidad; el viento transversal (perpendicular al haz) es invisible para el Doppler. Los radares de doble polarizacion y la red de multiples radares permiten reconstruir el campo vectorial completo del viento a partir de las componentes radiales medidas desde distintas posiciones.

---

## 4. Sonar Doppler de navegacion para submarines y AUVs

Los vehiculos submarinos autonomos (AUV) y los submarinos militares usan el efecto Doppler acustico para medir su propia velocidad respecto al fondo marino. El dispositivo —conocido como ADCP (Acoustic Doppler Current Profiler) cuando mide corrientes, o DVL (Doppler Velocity Log) cuando mide la velocidad del vehiculo— emite haces acusticos en varias direcciones hacia el fondo. El desplazamiento Doppler del eco del fondo proporciona la velocidad del vehiculo respecto al suelo en las tres dimensiones, sin necesidad de GPS (que no funciona bajo el agua).

El DVL tipico usa cuatro haces a 30 grados respecto a la vertical del vehiculo. Midiendo el [[delta_f]] de los cuatro ecos y combinando geometricamente los cuatro componentes radiales de velocidad, se obtiene el vector de velocidad tridimensional completo del vehiculo con precision de centimetros por segundo. Este sistema es el principal instrumento de navegacion autonoma de los AUV usados en exploracion oceanografica profunda.

Variable dominante: el desplazamiento Doppler [[delta_f]] de los ecos de los cuatro haces del DVL, que combinados geometricamente dan la velocidad del vehiculo respecto al fondo.
Límite de validez: el DVL requiere que los ecos del fondo sean suficientemente fuertes para ser detectados. A grandes profundidades (superiores a 1000 m para DVL tipicos), los ecos se atenuan demasiado y el DVL pierde la señal del fondo, teniendo que recurrir a medida de la velocidad respecto al agua (modo de agua, con precision menor).

---

## 5. Velocimetria Doppler en astrometria y cosmologia

El desplazamiento Doppler de las lineas espectrales de las estrellas fue historicamente la primera aplicacion del efecto Doppler mas alla del sonido. Cuando una estrella se aleja de la Tierra, sus lineas espectrales se desplazan hacia el rojo (redshift); cuando se acerca, hacia el azul (blueshift). Midiendo el [[delta_f]] de una linea espectral conocida, los astronomos calculan la velocidad radial de la estrella con precision de metros por segundo.

Esta tecnica permitio descubrir los primeros planetas extrasolares mediante el metodo de velocidades radiales: un planeta en orbita hace que su estrella se balancee ligeramente, produciendo un [[delta_f]] periodico detectable en las lineas espectrales. La extension cosmologica del efecto Doppler es el redshift cosmologico de las galaxias lejanas, que Hubble uso en 1929 para demostrar que el universo se expande. Sin embargo, el redshift cosmologico es tecnocamente diferente del Doppler: no es causado por movimiento de la fuente en el espacio, sino por la expansion del propio espacio entre la galaxia y el observador.

Variable dominante: el desplazamiento de frecuencia [[delta_f]] de las lineas espectrales, que para velocidades radiales estelares tipicas (decenas de km/s) produce desplazamientos del orden de partes por millon de [[f_fuente]], medibles con espectrografos de alta resolucion.
Límite de validez: para velocidades radiales superiores al 10 % de la velocidad de la luz, la formula Doppler clasica produce errores superiores al 1 % y debe usarse la formula Doppler relativista. Para el redshift cosmologico de galaxias lejanas (z superior a 0.1), la formula Doppler clasica no es valida: hay que usar la metrica de Friedmann-Robertson-Walker de la cosmologia relativista.
`;export{e as default};
