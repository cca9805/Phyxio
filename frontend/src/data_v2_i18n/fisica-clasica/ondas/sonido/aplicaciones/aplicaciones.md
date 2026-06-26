## 1. Sonar batimetrico para cartografia del fondo oceanico

Los buques de investigacion oceanografica y los sistemas de posicionamiento global de precision emplean sonares multihaz para mapear el fondo marino con resolucion de metros en profundidades de hasta 11000 m. El principio es el de la formula de eco: se emiten decenas de pulsos en abanico hacia el fondo, se miden los tiempos de vuelo de todos los ecos y se calcula [[d_eco]] para cada direccion. El conjunto de distancias forma un perfil batimetrico de alta resolucion.

El reto tecnico principal no es la formula en si misma, sino conocer [[v_sonido]] con precision en cada capa de agua: la temperatura y la salinidad del oceano cambian con la profundidad, y con ellos cambia [[v_sonido]]. Un perfil de velocidad erroneo de solo el 1 % en [[v_sonido]] produce un error del 1 % en toda la profundidad calculada, equivalente a 100 m en una zona de 10000 m. Por eso los buques oceanograficos miden el perfil de velocidad del sonido con sondas de lanzamiento (XBT) antes de cada campana de batimetria de precision.

Variable dominante: velocidad del sonido [[v_sonido]] en la columna de agua, cuya precision limita directamente la exactitud de la carta batimetrica resultante.
Límite de validez: el modelo de eco simple es valido para fondos planos y horizontales; en taludes submarinos con pendiente superior a 30 grados, los ecos multiples y la refraccion por gradiente de velocidad requieren correcciones geometricas adicionales.

---

## 2. Ecografia Doppler en cardiologia para evaluar flujo sanguineo

La ecografia Doppler combina el principio de eco (para localizar estructuras anatomicas) con el efecto Doppler (para medir la velocidad del flujo sanguineo). Cuando el pulso ultrasonico alcanza los globulos rojos en movimiento dentro del corazon o los vasos, el eco regresa con una frecuencia ligeramente distinta a la emitida. La diferencia de frecuencia es proporcional a la velocidad del flujo, y el equipo la convierte en una medida de velocidad en metros por segundo.

La aplicacion clinica mas critica es la evaluacion de valvulopatias cardiacas: una valvula estenosis crea un flujo acelerado que el Doppler detecta como un pico de alta velocidad. La formula de distancia por eco permite localizar exactamente donde se encuentra la valvula respecto al transductor, mientras que el cambio de frecuencia Doppler proporciona la velocidad del flujo en ese punto concreto. Combinar ambas informaciones en tiempo real permite al cardiologo evaluar la funcion valvular sin cateterismo invasivo.

Variable dominante: el tiempo de vuelo [[t_vuelo]] del eco estructural (para localizar la valvula) y la variacion de frecuencia del eco Doppler (para medir el flujo).
Límite de validez: la tecnica pierde precision cuando el angulo entre el haz ultrasonico y la direccion del flujo supera los 60 grados, porque el componente Doppler del movimiento se reduce con el coseno del angulo y los errores de estimacion del angulo producen grandes errores de velocidad.

---

## 3. Ultrasonidos industriales para deteccion de grietas en carriles de ferrocarril

Las vias ferreas en servicio acumulan fatiga superficial y pueden desarrollar grietas internas que no son visibles desde el exterior pero que pueden causar descarrilamientos. Los equipos de inspeccion ultrasonics automatizados montados en trenes de inspeccion emiten pulsos de onda longitudinal y de onda de corte hacia el interior del carril a medida que el tren avanza, y registran los ecos de cualquier discontinuidad interna.

La formula de eco permite calcular la profundidad de la grieta a partir del [[t_vuelo]] del eco de defecto, usando [[v_sonido]] del acero del carril (aproximadamente 5900 m/s para onda longitudinal). Un eco que llegue antes de lo esperado para el fondo del carril indica una discontinuidad interna: la diferencia en [[t_vuelo]] entre el eco del defecto y el del fondo da la profundidad del defecto. La interpretacion combinada de ondas longitudinales y de corte permite distinguir grietas transversales de fisuras longitudinales, porque cada tipo de onda es mas sensible a planos de grieta de distinta orientacion.

Variable dominante: el tiempo de vuelo [[t_vuelo]] del eco de defecto en relacion con el del fondo del carril, cuya diferencia determina la profundidad del defecto.
Límite de validez: la tecnica no detecta grietas cuya apertura es menor que la longitud de onda del ultrasonido empleado; a 5 MHz en acero (longitud de onda 1.2 mm), defectos menores de 0.6 mm de apertura producen reflexiones de amplitud insuficiente para superar el umbral de deteccion del equipo.

---

## 4. Control del ruido en entornos urbanos mediante barreras acusticas

Las autovias y lineas de ferrocarril en zonas urbanas generan niveles de ruido de trafico que pueden superar los 80 dB a 25 m de la fuente. La normativa europea (Directiva 2002/49/CE) exige reducir el nivel a menos de 55 dB en fachadas de vivienda. Las barreras acusticas —paneles de hormigon, vidrio o materiales absorbentes de 3 a 6 m de altura— son la solucion mas extendida.

El nivel de reduccion conseguido por una barrera depende de la diferencia de caminos entre la trayectoria directa (fuente a receptor) y la trayectoria difractada por el borde superior de la barrera. Cuanto mayor es esa diferencia de caminos, mayor es la reduccion. A 500 Hz y con una diferencia de caminos de 0.5 m, la reduccion tipica es de 10 a 12 dB en campo libre. Combinada con un [[R_aislamiento]] de la fachada de la vivienda, la suma permite cumplir los limites normativos. El diseno optimo de una barrera implica conocer el nivel fuente, la geometria del recorrido y el nivel objetivo en el receptor, calculando la reduccion necesaria como diferencia de los dos niveles de intensidad [[IL]].

Variable dominante: el nivel de intensidad sonora [[IL]] de la fuente de trafico y el nivel objetivo en el receptor, cuya diferencia fija el requisito de reduccion de la barrera.
Límite de validez: las barreras son eficaces principalmente para sonido directo en campo libre; en zonas con edificios altos, las reflexiones de las fachadas contrarias pueden superar la reduccion de la barrera en varios decibelios, requiriendo tratamiento adicional de esas superficies.

---

## 5. Acustica de sala en auditorios de concierto de musica clasica

El diseño acustico de un auditorio de musica clasica es una de las aplicaciones mas complejas y sutiles del sonido. El objetivo es lograr un tiempo de reverberacion T60 en la banda de 500 Hz entre 1.8 y 2.2 segundos, junto con un nivel de sonido directo suficiente, ausencia de ecos perjudiciales y distribucion uniforme del sonido en todas las localidades.

El nivel de intensidad [[IL]] en la sala no debe variar mas de 4 a 6 dB entre las primeras y las ultimas filas. Para lograrlo, se controla la geometria del techo y los paneles reflectores superiores, que redirigen el sonido directo hacia las zonas mas alejadas del escenario. Al mismo tiempo, el [[R_aislamiento]] de la envolvente del auditorio debe ser suficientemente alto para bloquear el ruido exterior (trafico, instalaciones): para una sala de concierto de alta calidad, el nivel de ruido de fondo interior debe ser inferior a 25 dB, lo que exige [[R_aislamiento]] de las fachadas y cubierta tipicamente superior a 55 dB.

Variable dominante: el nivel de intensidad [[IL]] en distintos puntos de la sala y su variacion espacial, que determina la uniformidad de la experiencia acustica para el publico.
Límite de validez: el modelo de acustica estadistica (Sabine) para predecir T60 es valido solo en salas con distribucion difusa del campo sonoro; en salas muy largas y estrechas, o con geometrias muy irregulares, la teoria de rayos o la simulacion numerica (BEM, FEM) es necesaria para predecir la distribucion real del nivel y detectar zonas de sombra o foco acustico no deseado.
