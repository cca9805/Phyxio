## Modelo ideal

El modelo canonico para las aplicaciones del sonido asume medios de propagacion **homogeneos, isotropos y sin perdidas**. En estas condiciones, la velocidad del sonido [[v_sonido]] es constante en todo el medio, los frentes de onda son esferas perfectas que se expanden uniformemente, y la intensidad cae con el cuadrado de la distancia a la fuente (ley del cuadrado inverso). El tiempo de vuelo del eco es exactamente el doble del cociente entre la distancia y la velocidad.

Para el nivel de intensidad, el modelo ideal asume que la fuente es puntual y omnidireccional y que la propagacion tiene lugar en campo libre (ausencia de reflexiones). En estas condiciones, [[IL]] cae 6 dB cada vez que la distancia a la fuente se duplica.

Este modelo captura con precision el comportamiento del sonar en agua profunda lejos de interfases, de los sensores ultrasonicos en aire sin obstaculos proximos y de fuentes de ruido en campo abierto sin obstaculos.

## Hipótesis

- El medio es **homogeneo**: [[v_sonido]] no cambia de un punto a otro. Si hay gradientes termicos (termoclina en el ocean), salinidad variable o gradientes de densidad, la trayectoria del pulso se curva y la hipotesis falla.

- El medio es **sin perdidas**: no hay atenuacion por viscosidad, absorcion molecular ni scattering. En tejido biologico, la atenuacion es real y significativa (0.5 a 1 dB/cm/MHz), lo que limita la profundidad util de la ecografia.

- La fuente es **puntual y omnidireccional**: la ley del cuadrado inverso aplica solo si el receptor esta en la zona de campo lejano de la fuente. En campo cercano (distancias menores que el cuadrado de la dimension de la fuente partido entre la longitud de onda), la distribucion de intensidad es irregular.

- El pulso es **suficientemente corto**: para resolver objetos proximos, el pulso no debe superponerse con su eco. La longitud espacial del pulso limita la resolucion minima en distancia.

- El **objeto es suficientemente grande** para producir un eco detectable: objetos de tamano mucho menor que la longitud de onda generan scattering difuso en todas direcciones en lugar de un eco coherente hacia el receptor.

## Dominio de validez cuantitativo

Para el sonar en agua de mar con [[v_sonido]] de 1500 m/s, el modelo homogeneo es valido a profundidades menores de la termoclina estacional (tipicamente 50 a 200 m). Por debajo de la termoclina, [[v_sonido]] cambia abruptamente y la trayectoria del pulso se refracta, produciendo errores en [[d_eco]] del orden del 5 al 20 % si no se corrige.

Para la ecografia medica con frecuencias entre 2 y 15 MHz, la longitud de onda en tejido es de 0.1 a 0.8 mm, lo que fija la resolucion axial minima en esos mismos valores. La profundidad maxima util disminuye con la frecuencia: a 5 MHz, la profundidad practica en tejido blando es de aproximadamente 10 a 15 cm; a 15 MHz, se reduce a 2 a 3 cm.

Para el nivel de intensidad en campo libre, la ley del cuadrado inverso es valida cuando la distancia al receptor supera tres veces la dimension maxima de la fuente (condicion de campo lejano). Para una bocina de 30 cm, eso implica distancias mayores de 0.9 m.

## Señales de fallo del modelo

- La **velocidad del sonido medida varia con la posicion**: si se hacen medidas en distintos puntos del medio y [[v_sonido]] no es constante, el modelo homogeneo ha fallado. Esto es tipico del oceano estratificado, del tejido con calcificaciones o del suelo con capas de distinta rigidez.

- **Ecos adicionales no esperados**: en el modelo ideal solo hay un eco por objeto. Si llegan multiples ecos de un mismo objeto, hay reflexiones multiples en interfases internas (reverberacion de caminos multiples) no modeladas.

- **La intensidad no cae segun la ley del cuadrado inverso**: en recintos cerrados, la reverberacion mantiene el nivel por encima de lo predicho por la ley de campo libre a distancias mayores que el radio de reverberacion del recinto.

- **La señal de eco es mas ancha de lo esperado**: la duracion del eco debe ser aproximadamente la del pulso emitido. Si es mucho mas larga, hay dispersion del pulso por atenuacion diferencial en frecuencia (medio dispersivo) o por la textura del objeto reflectante.

## Modelo extendido o alternativo

El modelo de **medio con gradiente de velocidad** (perfilado de velocidad) es la extension utilizada en sonar oceanico. Se divide la columna de agua en capas de [[v_sonido]] constante y se traza la trayectoria del rayo en cada capa usando la ley de Snell generalizada. Este modelo permite calcular la posicion real del objeto corrigiendo la curvatura de la trayectoria.

Para la ecografia medica, el modelo extendido incluye **atenuacion dependiente de la frecuencia**: la amplitud del eco decrece exponencialmente con la profundidad a una tasa que depende de la frecuencia y del tipo de tejido. Los equipos modernos aplican compensacion de ganancia en profundidad (TGC) para corregir este efecto y obtener imagenes de amplitud uniforme.

Para el nivel de intensidad en recintos, el modelo extendido de **acustica estadistica** (Sabine-Eyring) predice el campo reverberante mediante el tiempo de reverberacion T60. Para analisis mas detallados (distribuciones de nivel en el recinto, localizacion de zonas de sombra), se usa la simulacion por trazado de rayos (ray tracing) o elementos finitos de acustica (FEA).

Cuando conviene pasar al modelo extendido: para sonar en aguas poco profundas o con gradiente termico apreciable; para ecografia de estructuras profundas a alta frecuencia; para diseño acustico de recintos de mas de 500 m² de superficie; o cuando la discrepancia entre el nivel medido y el predicho por el modelo simple supera 3 dB.

## Comparación operativa

| Criterio | Modelo ideal (homogeneo, campo libre) | Modelo con gradiente de velocidad | Modelo acustico de recinto |
|---|---|---|---|
| Variables de entrada | [[v_sonido]], [[t_vuelo]], distancia fuente | Perfil de [[v_sonido]] vs profundidad | Absorcion, volumen, T60 |
| Rango de aplicacion | Sonar en aguas profundas, ecografia superficial | Sonar en oceano estratificado | Auditorios, estudios, oficinas |
| Resolucion de distancia | Limitada por longitud de pulso | Similar pero con correccion de trayectoria | No aplica (no mide distancias) |
| Error tipico sin correccion | Menos del 1 % en agua homogenea | Del 5 al 20 % en oceano estratificado | 3 a 6 dB en nivel reverberante |
| Complejidad computacional | Baja | Moderada | Moderada a alta |
