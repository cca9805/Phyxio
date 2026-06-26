# Aplicaciones

## 1. Ensayos no destructivos por ultrasonidos (pulso-eco)

La tecnica mas extendida de inspeccion no destructiva se basa directamente en la reflexion de ondas ultrasonicas en interfaces internas. Un transductor emite un pulso corto que viaja por la pieza. Cuando encuentra una discontinuidad (grieta, poro, inclusion, o simplemente la pared posterior), parte de la energia se refleja y vuelve al transductor como eco. La amplitud del eco depende del contraste de impedancias en la discontinuidad y del tamaño del defecto respecto a la longitud de onda.

El inspector mide el tiempo de vuelo del eco para determinar la profundidad del reflector, y la amplitud para estimar el tipo y tamaño del defecto. La calibracion se realiza con probetas patron que contienen reflectores de tamaño conocido. La sensibilidad del metodo es maxima cuando el contraste de impedancias es alto (defecto tipo grieta con aire: reflexion casi total).

Variable dominante: el [[coeficiente_de_reflexion_en_energia]] en la interfaz material-defecto, que determina la detectabilidad del defecto.
Limite de validez: la tecnica requiere que la longitud de onda sea comparable o menor que el tamaño del defecto para producir un eco localizado. Defectos mucho menores que la longitud de onda producen dispersion difusa y son dificiles de detectar con este metodo.

Límite de validez: válido dentro del régimen físico descrito para la aplicación 1

## 2. Ecografia medica diagnostica

La ecografia produce imagenes del interior del cuerpo humano midiendo las reflexiones de ondas ultrasonicas en las interfaces entre tejidos con diferente impedancia acustica. Las interfaces entre tejido blando y hueso producen reflexiones fuertes; las interfaces entre tejidos blandos similares (higado-riñon, por ejemplo) producen reflexiones debiles pero detectables.

El equipo emite pulsos cortos y registra los ecos a lo largo del tiempo. La posicion de cada eco se convierte en profundidad y la amplitud en brillo de la imagen. La resolucion axial depende de la duracion del pulso (frecuencias tipicas de 2 a 15 MHz). Se usa gel acoplante para eliminar la capa de aire entre el transductor y la piel, que produciria reflexion casi total y bloquearia la transmision.

Variable dominante: el contraste de [[impedancia_acustica_del_medio_1]] y [[impedancia_acustica_del_medio_2]] entre tejidos adyacentes, que determina la visibilidad de cada estructura.
Limite de validez: las estructuras detras de hueso o aire son practicamente invisibles porque la reflexion es casi total. La penetracion esta limitada por la atenuacion, que crece con la frecuencia.

Límite de validez: válido dentro del régimen físico descrito para la aplicación 2

## 3. Sismologia de reflexion y exploracion de hidrocarburos

La exploracion sismica genera ondas en la superficie terrestre (con explosivos o vibradores mecanicos) y registra las reflexiones producidas por las interfaces entre capas geologicas con diferente impedancia. Cada contraste de impedancia produce un eco que permite reconstruir la geometria del subsuelo.

El procesado sismico apila multiples registros para mejorar la relacion señal-ruido y aplica correcciones de velocidad para convertir tiempos de viaje en profundidades reales. La tecnica AVO analiza como varia la amplitud de la reflexion con el angulo de incidencia para inferir las propiedades elasticas de las rocas (porosidad, contenido de fluido, litologia).

Variable dominante: el contraste de impedancia entre capas geologicas, que produce las reflexiones que se registran en superficie.
Limite de validez: la resolucion vertical esta limitada por la longitud de onda dominante (tipicamente 30-100 m para ondas sismicas de exploracion). Capas mas finas que un cuarto de longitud de onda no producen reflexiones individuales distinguibles.

Límite de validez: válido dentro del régimen físico descrito para la aplicación 3

## 4. Diseño de capas de adaptacion de impedancia

En aplicaciones donde se necesita maximizar la transmision de energia entre dos medios de impedancias muy diferentes (por ejemplo, entre un transductor ceramico y agua), se interpone una capa cuya impedancia es la media geometrica de las dos impedancias extremas y cuyo espesor es un cuarto de la longitud de onda. Esta capa produce interferencia destructiva de las reflexiones y maximiza la transmision.

El principio es analogo al recubrimiento antirreflejante en optica. La eficiencia de la capa depende de la precision del espesor y del ajuste de impedancia. En transductores medicos, se usan varias capas de adaptacion apiladas para cubrir un rango de frecuencias mas amplio (adaptacion de banda ancha).

Variable dominante: el [[coeficiente_de_transmision_en_energia]] a traves del sistema multicapa, que se maximiza cuando cada capa cumple la condicion de impedancia geometrica media y espesor de cuarto de longitud de onda.
Limite de validez: el diseño es optimo solo a la frecuencia de diseño. Fuera de esa frecuencia, la condicion de cuarto de longitud de onda no se cumple y la transmision disminuye. Para aplicaciones de banda ancha se requieren multiples capas o gradientes de impedancia.

Límite de validez: válido dentro del régimen físico descrito para la aplicación 4

## 5. Aislamiento acustico en edificacion

El diseño de paredes y suelos con alto aislamiento acustico explota la reflexion en interfaces entre materiales con gran contraste de impedancia. Una pared simple refleja parte del sonido incidente; una pared doble con camara de aire interpuesta aprovecha dos interfaces de alto contraste (material denso-aire-material denso) para maximizar la reflexion total y reducir la transmision al minimo.

El rendimiento del sistema depende del cociente de impedancias en cada interfaz, del espesor de la camara de aire respecto a la longitud de onda y de la frecuencia de coincidencia (donde la rigidez de la placa permite una transmision resonante que degrada el aislamiento).

Variable dominante: el [[coeficiente_de_reflexion_en_energia]] acumulado en las sucesivas interfaces del sistema multicapa, que determina la reduccion sonora total.
Limite de validez: a bajas frecuencias, la longitud de onda es mucho mayor que el espesor de la pared y el aislamiento es pobre (ley de masas). El modelo de reflexion plana deja de ser preciso cuando la pared tiene dimensiones comparables a la longitud de onda (difraccion por bordes).

Límite de validez: válido dentro del régimen físico descrito para la aplicación 5