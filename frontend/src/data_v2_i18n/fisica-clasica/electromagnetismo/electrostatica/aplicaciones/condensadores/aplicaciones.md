# Aplicaciones

## 1. Desfibrilador cardíaco

El desfibrilador eléctrico utiliza un condensador de alta [[energia_almacenada_en_el_condensador]] (típicamente 100–360 J) para detener una fibrilación ventricular aplicando un pulso de corriente de alto voltaje al corazón. El condensador se carga lentamente desde la red o desde baterías hasta una [[diferencia_de_potencial]] de entre 700 y 1500 V en 5–10 segundos, y luego descarga su energía en el tórax del paciente en menos de 10 ms a través de electrodos.

El rango de energía de descarga (100–360 J) está determinado clínicamente: menos de 100 J puede ser insuficiente para revertir la fibrilación; más de 360 J puede dañar el tejido miocárdico. La tensión [[diferencia_de_potencial]] alta es necesaria para que la corriente atraviese la resistencia transtorácica del paciente (típicamente 40–80 Ω). Los condensadores empleados son electrolíticos de alta [[capacidad_electrica]] (típicamente 100–300 µF) con tensión nominal de 1.5–2 kV.

Variable dominante: energía almacenada [[energia_almacenada_en_el_condensador]], maximizada elevando la tensión [[diferencia_de_potencial]] al cuadrado con una capacidad fija de 100–300 µF.
Límite de validez: el modelo de condensador ideal supone descarga en una impedancia resistiva constante; en la práctica la impedancia del tórax varía durante el choque, modificando la forma del pulso respecto a la descarga exponencial ideal.

## 2. Filtrado en fuentes de alimentación

Las fuentes de alimentación de corriente continua convierten la tensión alterna de la red (50 Hz, 230 V en Europa) en continua. Tras la rectificación, la tensión tiene un rizado (variación periódica) que el condensador de filtrado debe reducir. El condensador se carga en los picos de la onda rectificada y se descarga parcialmente entre picos, suministrando carga a la carga proporcional a [[capacidad_electrica]] multiplicado por la caída de tensión tolerable.

Para un rizado menor del 5% en una fuente de 12 V DC con carga de 1 A y frecuencia de 100 Hz (tensión rectificada de onda completa), la capacidad mínima se obtiene dividiendo la corriente entre el doble del producto de la frecuencia por la caída de tensión tolerable, lo que da aproximadamente 8300 µF. Por eso las fuentes lineales utilizan condensadores electrolíticos de gran [[capacidad_electrica]] (miles de µF).

Variable dominante: capacidad [[capacidad_electrica]], que debe ser suficientemente grande para mantener el rizado de tensión [[diferencia_de_potencial]] por debajo del límite tolerado por la carga.
Límite de validez: la tensión nominal del condensador debe superar la tensión pico de la red rectificada (≥ 325 V para la red europea) con un margen de seguridad mínimo del 20%; fuera de este margen el condensador puede sufrir ruptura dieléctrica.

## 3. Sensor táctil capacitivo

Los teléfonos inteligentes, tabletas y portátiles modernos utilizan sensores táctiles basados en condensadores. La pantalla táctil está recubierta de una rejilla de electrodos transparentes que forman una matriz de pequeños condensadores. Cuando un dedo toca la pantalla, la [[capacidad_geometrica_del_condensador_plano]] local aumenta porque el dedo (conductor) actúa como una tercera armadura que incrementa la capacidad del condensador en ese punto, fenómeno denominado acoplamiento capacitivo.

La variación detectada es del orden de 1–5 pF sobre una base de 1–10 pF, suficientes para que el circuito de detección (con resolución típica de 0.1 pF) localice el toque con precisión de décimas de milímetro. El circuito mide la carga transferida a una tensión de referencia fija para cuantificar el incremento de [[capacidad_electrica]].

Variable dominante: variación de [[capacidad_geometrica_del_condensador_plano]] inducida por la proximidad del dedo, que actúa como segunda armadura adicional y modifica la geometría efectiva del condensador.
Límite de validez: el efecto del dedo solo es detectable si no hay materiales gruesos (cristal mayor de 3 mm, guantes de trabajo) entre el dedo y los electrodos, porque la variación de [[capacidad_electrica]] decrece con la distancia al cuadrado.

## 4. Condensador de arranque en motores eléctricos monofásicos

Los motores de inducción monofásicos (utilizados en electrodomésticos como lavadoras y aires acondicionados) necesitan un desfase de corriente para generar el par de arranque. Un condensador de arranque conectado en serie con el bobinado auxiliar crea el desfase de 90° necesario para producir campo giratorio en el arranque. El condensador tiene [[capacidad_electrica]] típica de 10–100 µF y trabaja a la frecuencia de red (50 Hz).

La impedancia reactiva del condensador —obtenida dividiendo 1 entre el producto de la frecuencia angular y [[capacidad_electrica]]— determina, en combinación con la inductancia del bobinado auxiliar, la eficacia del desfase de fase. Para un condensador de 50 µF a 50 Hz esta impedancia resulta aproximadamente 63.7 Ω. Aquí la [[energia_almacenada_en_el_condensador]] almacenada es secundaria: la función del condensador es crear el desfase, no almacenar energía.

Variable dominante: capacidad [[capacidad_electrica]] del condensador de arranque, que fija la impedancia reactiva y con ella el ángulo de desfase entre los bobinados principal y auxiliar.
Límite de validez: el modelo es válido solo durante el arranque; muchos motores desconectan el condensador una vez alcanzada la velocidad nominal, porque mantenerlo conectado genera pérdidas y sobrecalentamiento.

## 5. Circuito snubber en electrónica de potencia

En los convertidores de potencia (inversores, convertidores DC-DC), los interruptores de transistor se abren y cierran miles de veces por segundo. Cada apertura produce un transitorio de tensión que puede dañar el transistor. El **circuito snubber** —un condensador [[capacidad_electrica]] en paralelo con el transistor— absorbe el transitorio almacenando la [[energia_almacenada_en_el_condensador]] del pico de tensión y liberándola de forma suavizada después del cierre.

Para un transitorio de 200 V con energía de pico de 1 mJ, la capacidad necesaria se obtiene despejando [[capacidad_electrica]] de la fórmula de [[energia_almacenada_en_el_condensador]]: dividir dos veces la energía entre el cuadrado de la tensión da aproximadamente 50 nF. El condensador debe tener baja inductancia parásita para responder a transitorios de subida rápida (menos de 100 ns); por ello se usan condensadores de película (MKP o MKT), no electrolíticos. La energía absorbida por cada transitorio se disipa como calor en la resistencia del snubber, lo que a altas frecuencias puede ser significativo y debe incluirse en el diseño térmico.

Variable dominante: tensión del transitorio [[diferencia_de_potencial]], que entra al cuadrado en la fórmula de [[energia_almacenada_en_el_condensador]] y determina la capacidad mínima necesaria para absorber el pico sin que la tensión sobrepase el límite del transistor.
Límite de validez: el modelo de condensador ideal asume inductancia parásita despreciable (ESL); si la inductancia parásita es comparable a la inductancia del circuito de commutación, el snubber pierde eficacia y puede resonar, empeorando el transitorio en lugar de suprimirlo.