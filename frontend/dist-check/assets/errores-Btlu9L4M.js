const e=`## Errores conceptuales

### Error 1: Confundir presión acústica con presión absoluta

**Por qué parece correcto**

El sonido viaja a través del aire y el aire tiene presión. La asociación mental entre sonido y presión atmosférica es inmediata y parece lógica: si el aire "tiene" una presión, y el sonido es una vibración del aire, entonces la presión que produce el sonido debería ser del orden de la presión atmosférica.

**Por qué es incorrecto**

La [[p_ac]] es únicamente la **perturbación** respecto al valor de equilibrio, no la presión total. La presión total en un punto con sonido es la suma de la presión estática (aproximadamente 101 325 Pa) más la presión acústica. En una conversación normal, [[p_ac]] es del orden de 0.02 Pa: seis órdenes de magnitud por debajo de la presión estática. Confundir ambas lleva a calcular intensidades millones de veces mayores de las reales.

**Señal de detección**

El alumno obtiene valores de [[p_ac]] del orden de kilopascales para sonidos cotidianos, o afirma que el sonido "comprime el aire hasta el doble de la presión atmosférica".

**Corrección conceptual**

La presión acústica es siempre una fluctuación diminuta sobre la presión de reposo. Su amplitud [[p0_ac]] va desde 20 micropascales (umbral de audición) hasta unos 20 pascales (umbral de dolor), siempre mucho menor que la presión atmosférica.

**Mini-ejemplo de contraste**

Un altavoz de sala produce un nivel de 90 dB. Eso corresponde a [[p0_ac]] de aproximadamente 0.63 Pa: una fracción de milésima de la presión atmosférica. Si un alumno calcula [[p0_ac]] de varios kilopascales para ese nivel, ha confundido las magnitudes.

---

### Error 2: Creer que el sonido es una onda transversal

**Por qué parece correcto**

Las ondas más familiares en la enseñanza básica son las ondas en la superficie del agua, donde la perturbación visible es perpendicular a la dirección de propagación. Al representar el sonido con una curva sinusoidal de [[p_ac]] frente a posición, el gráfico parece evocar un movimiento ondulatorio transversal, como el de una cuerda que oscila.

**Por qué es incorrecto**

En el sonido, el **desplazamiento de partícula** [[xi]] es paralelo a la dirección de propagación, no perpendicular. La sinusoide de [[p_ac]] en la gráfica representa la presión en distintos puntos del espacio, no la forma física del medio. Las partículas se mueven hacia adelante y hacia atrás en la misma dirección en que viaja la onda, generando zonas de compresión y rarefacción. Las ondas transversales (como las ondas en una cuerda) tienen el desplazamiento perpendicular a la propagación.

**Señal de detección**

El alumno dibuja flechas de desplazamiento de partícula perpendiculares a la dirección de propagación, o afirma que el sonido podría polarizarse como la luz.

**Corrección conceptual**

El sonido en gases y líquidos es siempre longitudinal: [[xi]] es paralelo al vector de propagación. Por eso el sonido no puede polarizarse: no hay plano de oscilación perpendicular que seleccionar. Solo las ondas en sólidos pueden tener componentes transversales (ondas de cizalla).

**Mini-ejemplo de contraste**

Si el sonido fuera transversal, sería posible bloquearlo con un filtro polarizador, como se hace con la luz. Esto no ocurre: no existe ningún dispositivo que polarice el sonido como se polariza la luz, porque el movimiento de las partículas sonoras no tiene componente transversal en fluidos.

## Errores de modelo

### Error 1: Asumir que la velocidad del sonido es independiente del medio

**Por qué parece correcto**

En muchos problemas de bachillerato se usa [[v_son]] de 340 m/s sin especificar el medio, lo que sugiere que es una constante universal, como la velocidad de la luz. Además, la [[f_son]] no cambia al cambiar el medio, lo que puede hacerle pensar al alumno que tampoco [[v_son]] cambia.

**Por qué es incorrecto**

[[v_son]] depende de las propiedades elásticas y de la densidad del medio. En el agua es unas cuatro veces mayor que en el aire; en el acero es unas quince veces mayor. El valor 340 m/s es específico del **aire a temperatura ambiente**. Si se usa ese valor en agua o en un sólido, el cálculo de [[lambda_son]] resultará erróneo por un factor de 4 a 15.

**Señal de detección**

El alumno usa siempre [[v_son]] de 340 m/s independientemente del medio, o calcula [[lambda_son]] en el agua usando el valor del aire.

**Corrección conceptual**

Antes de usar [[v_son]], identificar el medio. Para el aire a 20 °C, usar 343 m/s; para el agua, 1480 m/s; para el acero, aproximadamente 5100 m/s. En el aire, la velocidad varía con la temperatura a razón de aproximadamente 0.6 m/s por grado Celsius.

**Mini-ejemplo de contraste**

Un bat echolocaliza con ultrasonido a 50 kHz. En el aire, [[lambda_son]] sería 343/50000, es decir, aproximadamente 6.9 mm. Si el murciélago estuviera bajo el agua y el alumno usara el mismo [[v_son]], obtendría la misma [[lambda_son]]. Pero la [[lambda_son]] correcta bajo el agua sería 1480/50000, es decir, aproximadamente 29.6 mm, más de cuatro veces mayor, cambiando completamente la capacidad de resolución del sistema.

### Error 2: Ignorar el desfase entre presión acústica y desplazamiento de partícula

**Por qué parece correcto**

Es natural suponer que cuando [[p_ac]] es máxima (compresión máxima), las partículas también están en su posición de máximo desplazamiento. La imagen mental es la de un "empuje" que lleva las partículas hacia adelante hasta el punto de mayor presión.

**Por qué es incorrecto**

En la onda armónica, [[p_ac]] y [[xi]] están **desfasados 90°**. El máximo de presión ocurre donde el gradiente de desplazamiento es máximo, no donde el desplazamiento mismo es máximo. Las partículas en el punto de máxima compresión están pasando por su posición de equilibrio con velocidad máxima, no en su posición de máximo desplazamiento.

**Señal de detección**

El alumno dibuja el pico de [[p_ac]] coincidiendo con el pico de [[xi]] en la misma posición, o calcula la velocidad de partícula como cero en el punto de máxima presión.

**Corrección conceptual**

Donde [[p_ac]] es cero, [[xi]] es máxima y la velocidad de partícula es cero. Donde [[xi]] es cero, [[p_ac]] es máxima y la velocidad de partícula es máxima. Este desfase es una consecuencia directa de la ecuación de onda y puede verificarse inspeccionando la gráfica Coord de ambas magnitudes.

**Mini-ejemplo de contraste**

Aplicar la idea errónea: si en el pico de compresión las partículas estuvieran en máximo desplazamiento, estarían estáticas en ese punto. Pero estáticas significa sin velocidad, y sin velocidad no podrían comprimir la capa siguiente. Así, la onda no podría propagarse, lo cual contradice la observación.

## Errores matemáticos

### Error 1: Confundir frecuencia ordinaria con frecuencia angular

**Por qué parece correcto**

Ambas tienen el nombre "frecuencia" y ambas describen cuán rápido oscila algo. En muchos textos la ecuación de onda se escribe con la frecuencia angular sin advertir explícitamente la diferencia con la frecuencia ordinaria.

**Por qué es incorrecto**

La frecuencia angular es dos veces pi multiplicado por [[f_son]]. Si se sustituye [[f_son]] donde la fórmula espera la frecuencia angular, el resultado de [[lambda_son]] queda dividido entre dos pi, es decir, unas seis veces menor de lo correcto. Si se sustituye la frecuencia angular donde la fórmula espera [[f_son]], [[lambda_son]] queda multiplicado por dos pi.

**Señal de detección**

El alumno obtiene [[lambda_son]] que difiere del valor esperado por un factor de aproximadamente 6.28 (dos pi), ya sea por exceso o por defecto.

**Corrección conceptual**

La ecuación de la onda de presión usa la frecuencia ordinaria [[f_son]] en Hz multiplicada por dos pi, o equivalentemente, la frecuencia angular directamente. Identificar en cada fórmula si la frecuencia que aparece es la ordinaria o la angular antes de sustituir.

**Mini-ejemplo de contraste**

Para una nota de 440 Hz en el aire, [[lambda_son]] correcto es 343/440, aproximadamente 0.78 m. Si por error se usa la frecuencia angular (2·3.14·440 ≈ 2765 rad/s) como si fuera [[f_son]], el resultado sería 343/2765, aproximadamente 0.12 m: seis veces menor que el correcto.

## Errores de interpretación

### Error 1: Interpretar la intensidad acústica como proporcional a la presión acústica

**Por qué parece correcto**

La sensación subjetiva de volumen crece cuando la presión acústica crece. La relación parece directa: más presión, más intensidad. Además, la proporcionalidad directa es el tipo de relación más simple y familiar.

**Por qué es incorrecto**

[[I_ac]] es proporcional al **cuadrado** de [[p0_ac]]. Esto tiene consecuencias prácticas inmediatas: si [[p0_ac]] se duplica, [[I_ac]] se cuadruplica, no se duplica. Si [[p0_ac]] se multiplica por diez, [[I_ac]] aumenta cien veces. El error lleva a subestimar gravemente la intensidad para amplitudes grandes y a no comprender por qué el decibelio usa una escala logarítmica.

**Señal de detección**

El alumno afirma que "duplicar la presión acústica duplica la intensidad", o calcula [[I_ac]] como directamente proporcional a [[p0_ac]] sin elevar al cuadrado.

**Corrección conceptual**

La relación correcta entre [[I_ac]] y [[p0_ac]] es cuadrática. Esta dependencia es análoga a la de la potencia eléctrica con la tensión: la potencia es proporcional al cuadrado de la tensión porque la energía por ciclo es proporcional al cuadrado de la amplitud de oscilación.

**Mini-ejemplo de contraste**

Un altavoz emite a 80 dB y se quiere subir a 100 dB, es decir, aumentar [[I_ac]] en un factor de cien. Para ello, basta multiplicar [[p0_ac]] por diez (no por cien). Si el alumno confunde la relación y cree que es lineal, pensará que hay que multiplicar [[p0_ac]] por cien, lo que sobreestimaría la amplitud necesaria en un factor de diez.

## Regla de autocontrol rápido

Antes de dar por válido un cálculo sobre naturaleza del sonido, verificar:

1. ¿Se ha identificado el medio y se ha usado el [[v_son]] correcto para ese medio?
2. ¿La [[lambda_son]] calculada está en el rango esperable para la [[f_son]] dada (entre milímetros y decenas de metros para el rango audible en el aire)?
3. ¿La [[p0_ac]] obtenida es coherente con el nivel sonoro descrito (el umbral de audición es 20 µPa y el umbral de dolor es 20 Pa)?
4. ¿Se ha elevado al cuadrado [[p0_ac]] al calcular [[I_ac]]?
5. ¿Se ha usado [[f_son]] en Hz (no en rad/s) en la relación cinemática entre [[v_son]], [[f_son]] y [[lambda_son]]?

Si alguna de estas comprobaciones falla, el resultado está comprometido desde su raíz.
`;export{e as default};
