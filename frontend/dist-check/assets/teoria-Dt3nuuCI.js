const e=`# Aplicaciones del sonido

## Contexto conceptual

El sonido es mucho mas que un fenomeno auditivo. Las leyes de propagacion, reflexion e intensidad se aprovechan en diagnostico medico, navegacion submarina, auditorios e inspeccion de infraestructuras. El denominador comun es controlar **donde va el sonido, con que velocidad, con que intensidad y que informacion transporta**.

Este leaf conecta velocidad del sonido, nivel de intensidad y principio de eco con escenarios tecnologicos reales: medir distancia sin regla, ver dentro del cuerpo y proteger frente al ruido.

La clasificacion que sigue agrupa las aplicaciones en cuatro familias, cada una con su principio fisico dominante, sus magnitudes criticas y sus limitaciones inherentes.

## 🟢 Nivel esencial

Las aplicaciones del sonido se agrupan en cuatro grandes familias:

**Deteccion por eco (sonar y ecografia)**: Se emite un pulso, se mide su retorno y se obtiene la distancia multiplicando el tiempo por la velocidad del sonido y dividiendo entre dos. El factor 2 aparece porque el pulso va y vuelve.

**Medicion y control del nivel sonoro**: El nivel de intensidad se expresa en decibelios porque el oido percibe la intensidad de forma logaritmica. El nivel de referencia de 0 dB corresponde al umbral de audicion.

**Aislamiento acustico**: El indice de reduccion sonora de un elemento constructivo describe cuantos decibelios se pierden al atravesarlo. Materiales mas masivos aislan mas en general, pero todos los materiales tienen frecuencias de coincidencia en las que el aislamiento cae bruscamente.

**Acustica de recintos**: La calidad de un auditorio, aula o estudio depende del tiempo de reverberacion, el sonido directo y la ausencia de ecos perjudiciales.

> [!NOTE]
> La frecuencia del sonido determina la aplicacion apropiada. El sonido audible (20 Hz a 20 kHz) es el que usamos para comunicarnos y al que protegemos en acustica arquitectonica. Los ultrasonidos (frecuencias por encima de 20 kHz) son inaudibles pero se usan en sonar, ecografia y ultrasonidos industriales porque su longitud de onda corta permite mayor resolucion espacial.

## 🔵 Nivel formal

**Formula de eco**: La relacion entre distancia [[d_eco]], velocidad del sonido en el medio [[v_sonido]] y tiempo de vuelo [[t_vuelo]] es la base de sonar y ecografia:

{{f:distancia_eco}}

El factor 2 en el denominador es inevitable: el pulso viaja dos veces la distancia [[d_eco]]. Este calculo requiere conocer [[v_sonido]] con precision, ya que cualquier error en ella produce un error proporcional en la distancia calculada.

**Formula del nivel de intensidad sonora**: El nivel en decibelios [[IL]] se calcula como:

{{f:nivel_intensidad}}

donde la intensidad de referencia es 10⁻¹² W/m², que corresponde al umbral de audicion a 1 kHz. La escala logaritmica hace que una variacion de 10 dB corresponda a multiplicar la intensidad por 10. Cuando hay varias fuentes, los niveles en dB **no se suman directamente**: hay que convertir cada nivel a intensidad, sumar las intensidades y reconvertir al resultado en dB.

**Indice de reduccion sonora**: El nivel en el recinto receptor [[IL_rec]] se estima a partir del nivel de la fuente [[IL_fuente]] y del indice de reduccion sonora [[R_aislamiento]] de la particion:

{{f:aislamiento_requerido}}

La diferencia de nivel entre fuente y receptor es aproximadamente igual a [[R_aislamiento]] en condiciones de campo difuso en ambos recintos. Disenar una particion implica elegir materiales y geometrias que maximicen [[R_aislamiento]] en el rango de frecuencias criticas para el uso.

> [!TIP]
> Para el sonar en agua de mar, [[v_sonido]] es aproximadamente 1500 m/s. Para la ecografia medica en tejido blando, [[v_sonido]] es aproximadamente 1540 m/s. Para sensores de aparcamiento en aire, [[v_sonido]] es aproximadamente 340 m/s a temperatura ambiente. Usar el valor del medio incorrecto produce errores directos en [[d_eco]].

## 🔴 Nivel estructural

La arquitectura de cada aplicacion revela como el mismo principio fisico se adapta a contextos radicalmente distintos.

En el **sonar activo**, la mayor dificultad no es la formula de eco sino la identificacion del eco correcto entre el ruido de fondo oceano y los ecos multiples de objetos no deseados. El procesado de señal (correlacion cruzada entre el pulso emitido y la señal recibida) permite extraer [[t_vuelo]] con una precision mucho mayor que la simple deteccion del primer pico. Esta mejora de resolucion en tiempo se traduce en mejora de resolucion en distancia.

En la **ecografia medica**, los tejidos biologicos no son medios homogeneos: tienen velocidades del sonido ligeramente distintas en funcion de la composicion (tejido blando entre 1450 y 1600 m/s, hueso por encima de 3000 m/s). El equipo ecografico asume un valor unico de [[v_sonido]] para reconstruir la imagen, lo que introduce errores geometricos en la posicion de las estructuras. Ademas, la atenuacion del sonido en tejido aumenta con la frecuencia, lo que obliga a usar frecuencias bajas para imagenes profundas (menor resolucion) y frecuencias altas para estructuras superficiales (mayor resolucion).

En el **aislamiento acustico**, la ley de masa establece que [[R_aislamiento]] aumenta 6 dB cada vez que la masa superficial del panel se duplica. Sin embargo, en la frecuencia de coincidencia —donde la velocidad de la onda de flexion en el panel iguala la velocidad del sonido en el aire— el aislamiento cae drasticamente (hueco de coincidencia). Las soluciones practicas emplean dobles hojas separadas por una camara de aire para desacoplar las frecuencias de coincidencia de las dos hojas y elevar el aislamiento global.

En la **acustica de recintos**, el tiempo de reverberacion T60 —tiempo que tarda el nivel sonoro en caer 60 dB despues de apagarse la fuente— es el parametro de diseño mas relevante. Para musica orquestal se prefieren T60 entre 1.8 y 2.2 s; para la palabra hablada, entre 0.4 y 0.8 s. Este valor se controla distribuyendo materiales absorbentes de forma que la suma de sus absorpciones equivalentes produce el T60 deseado mediante la formula de Sabine o la de Eyring.

> [!WARNING]
> En el sonar, el eco de un objeto no siempre llega en linea recta: en aguas termoclinales, el gradiente de temperatura crea un gradiente de [[v_sonido]] que curva la trayectoria del sonido (refraccion). En casos extremos, el sonido puede viajar por canales acusticos profundos (canal SOFAR) dando la vuelta al planeta. Ignorar la refraccion en sonar de alta precision produce errores sistematicos de posicion.

## Interpretación física profunda

Las cuatro familias de aplicaciones del sonido explotan propiedades distintas de la onda:

El sonar y la ecografia explotan la **reflexion** y la **velocidad de propagacion**: el sonido rebota en superficies y el tiempo de vuelo codifica la distancia. La resolucion espacial esta limitada por la longitud de onda, que a su vez depende de [[v_sonido]] y de la frecuencia. Aumentar la frecuencia mejora la resolucion pero reduce la profundidad de penetracion por mayor atenuacion.

El nivel de intensidad y la acustica de proteccion explotan la **relacion logaritmica entre intensidad y percepcion**: el oido humano tiene un rango dinámico de 12 ordenes de magnitud, y la escala dB lo comprime a un rango manejable de 0 a 120 dB para el sonido practico.

El aislamiento acustico explota la **impedancia acustica** y la **ley de masa**: para que el sonido no se transmita, la diferencia de impedancias entre el medio y el panel debe ser grande, y esa diferencia crece con la masa del panel.

La acustica de recintos explota el **equilibrio entre energia directa y reverberante**: la claridad del mensaje acustico depende de la razon entre la energia del sonido directo y la del campo reverberante, y ese balance se diseña con la geometria y los materiales del recinto.

## Orden de magnitud

Para sonar en agua de mar con [[v_sonido]] de 1500 m/s, un tiempo de vuelo de 1 segundo corresponde a una distancia de 750 m. Un submarino a 3 km produce un eco con tiempo de vuelo de 4 segundos. Para ecografia medica con [[v_sonido]] de 1540 m/s, un organo a 10 cm de profundidad produce un eco con tiempo de vuelo de aproximadamente 130 microsegundos.

Para el nivel de intensidad: una conversacion normal a 1 m genera unos 65 dB. Una avenida con trafico intenso puede superar los 75 dB. Un martillo perforador a 1 m alcanza los 100 dB. El umbral de dolor se situa alrededor de 120 dB.

Para el aislamiento: una pared de ladrillo macizo de 10 cm tiene [[R_aislamiento]] de aproximadamente 42 dB; una doble hoja de carton-yeso con camara de 10 cm puede alcanzar 55 a 60 dB a frecuencias medias.

## Método de resolución personalizado

Para resolver un problema de deteccion por eco:

1. Identificar el medio de propagacion y obtener [[v_sonido]] apropiado para ese medio y temperatura.
2. Medir o identificar [[t_vuelo]] (recordar que es el tiempo de ida y vuelta).
3. Aplicar la formula de distancia por eco con el factor 2 en el denominador.
4. Verificar el orden de magnitud: para agua y 1 s de [[t_vuelo]], el resultado debe ser del orden de cientos de metros.

Para resolver un problema de nivel sonoro:

1. Convertir la intensidad dada a W/m² si esta en otras unidades.
2. Dividir entre la intensidad de referencia 10⁻¹² W/m².
3. Aplicar la formula logaritmica del nivel de intensidad.
4. Para combinar fuentes: convertir cada [[IL]] a intensidad, sumar y reconvertir.

Para resolver un problema de aislamiento:

1. Identificar [[IL_fuente]] en el recinto emisor y el limite [[IL_rec]] en el receptor.
2. Calcular [[R_aislamiento]] como la diferencia entre ambos niveles.
3. Verificar que el elemento constructivo mantiene ese aislamiento en la banda de frecuencia dominante.

## Casos especiales y ejemplo extendido

**Sonar en agua estratificada**: si [[v_sonido]] cambia con la profundidad, el rayo se curva y la formula de eco simple deja de localizar correctamente el objeto. En batimetria precisa se usa un perfil de [[v_sonido]] por capas.

**Aislamiento de baja frecuencia**: una particion que cumple [[R_aislamiento]] a frecuencias medias puede fallar con motores diesel o trafico pesado. La masa, las juntas y los flanqueos dominan el resultado real.

**Ejemplo extendido**: si una sala tecnica tiene [[IL_fuente]] de 92 dB y el despacho contiguo exige [[IL_rec]] de 75 dB, el requisito minimo es [[R_aislamiento]] de 17 dB. Una mampara real debe superar ese valor con margen en la banda dominante.

## Preguntas reales del alumno

**¿Por que se divide entre dos en sonar?**

Porque [[t_vuelo]] mide ida y vuelta. La distancia al objeto es solo la mitad del recorrido total del pulso.

**¿Por que no puedo restar siempre niveles dB sin mas?**

La resta de niveles sirve para una reduccion entre fuente y receptor comparables. Para sumar fuentes distintas hay que volver a la intensidad lineal [[I]].

## Conexiones transversales y rutas de estudio

Este leaf conecta directamente con:

- [Velocidad del sonido](leaf:fisica-clasica/ondas/sonido/velocidad-del-sonido): determina [[v_sonido]] en distintos medios, parametro critico de todas las aplicaciones de eco.
- [Intensidad y nivel sonoro](leaf:fisica-clasica/ondas/sonido/intensidad-y-nivel-sonoro): desarrolla la formula de nivel de intensidad y la ley del cuadrado inverso de la distancia.
- [Efecto Doppler](leaf:fisica-clasica/ondas/sonido/efecto-doppler): extiende el sonar al caso de objetos en movimiento, donde la frecuencia del eco varia y permite medir velocidad ademas de posicion.
- [Naturaleza del sonido](leaf:fisica-clasica/ondas/sonido/naturaleza-del-sonido): provee el marco conceptual de onda de presion del que derivan todas las aplicaciones.

## Síntesis final

Las aplicaciones del sonido transforman las propiedades de propagacion, reflexion e intensidad de las ondas de presion en herramientas tecnologicas concretas. La formula de eco convierte un tiempo de vuelo en una distancia; la escala dB comprime el inmenso rango dinámico del oido en numeros manejables; el indice de reduccion sonora cuantifica la barrera entre espacios; y el tiempo de reverberacion define la calidad acustica de un recinto. En todos los casos, conocer [[v_sonido]] del medio con precision y respetar el factor 2 del recorrido de ida y vuelta son las condiciones criticas para no cometer errores sistematicos.
`;export{e as default};
