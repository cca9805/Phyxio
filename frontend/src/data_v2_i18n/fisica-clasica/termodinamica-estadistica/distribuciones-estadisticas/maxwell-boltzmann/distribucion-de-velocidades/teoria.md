## Contexto conceptual

Un gas ideal no tiene todas sus moléculas moviéndose igual. Aunque el sistema tenga una sola [[temperatura_absoluta]], cada partícula posee una [[velocidad]] distinta por los choques microscópicos. La distribución de Maxwell-Boltzmann describe ese reparto: muchas moléculas aparecen cerca de una rapidez típica, pocas son muy lentas y pocas son muy rápidas. La pregunta central no es qué molécula concreta corre más, sino cómo la [[temperatura_absoluta]] organiza estadísticamente el conjunto. Por eso la gráfica de [[densidad_probabilidad_velocidad]] frente a [[velocidad]] funciona como un mapa de población molecular.

## 🟢 Nivel esencial

La [[temperatura_absoluta]] mide cuánta agitación microscópica posee el gas. Cuando aumenta, la nube de [[velocidad]] molecular se desplaza hacia valores mayores y se ensancha: hay más moléculas rápidas, pero siguen existiendo moléculas lentas. Cuando disminuye, la distribución se concentra cerca de velocidades menores. La [[masa_particula]] también importa: a la misma [[temperatura_absoluta]], partículas más ligeras se reparten hacia velocidades más altas, porque la misma escala de energía térmica produce más rapidez en una masa menor.

La [[densidad_probabilidad_velocidad]] no es una cantidad de moléculas, sino una densidad: la probabilidad real se obtiene mirando un intervalo de [[velocidad]]. Por eso el área bajo un tramo de la curva indica una [[probabilidad_intervalo]], mientras que la altura solo dice qué velocidades son relativamente más frecuentes.

## 🔵 Nivel formal

El modelo usa la distribución de Maxwell-Boltzmann para la rapidez molecular, donde la variable horizontal es [[velocidad]] y la variable vertical es [[densidad_probabilidad_velocidad]]. La forma de la curva depende de [[temperatura_absoluta]], [[masa_particula]] y [[constante_boltzmann]].

{{f:maxwell_boltzmann_velocidad}}

A partir de esa curva se definen tres escalas características. La [[velocidad_mas_probable]] localiza el máximo de [[densidad_probabilidad_velocidad]]; la [[velocidad_media]] representa el promedio de la rapidez; y la [[velocidad_rms]] pondera más las moléculas rápidas porque usa el cuadrado de la rapidez.

{{f:velocidad_mas_probable}}

{{f:velocidad_media}}

{{f:velocidad_cuadratica_media}}

La energía microscópica media queda conectada con la [[temperatura_absoluta]] mediante la [[energia_cinetica_media]].

{{f:energia_cinetica_media_gas}}

Para una pregunta experimental sobre un rango, se usan [[velocidad_minima]] y [[velocidad_maxima]]: el área de la distribución entre esos límites da la [[probabilidad_intervalo]].

{{f:probabilidad_intervalo_velocidad}}

La [[densidad_probabilidad_velocidad]] tiene unidades inversas de rapidez, porque al multiplicarla por un pequeño intervalo de [[velocidad]] se obtiene una probabilidad adimensional. Esa idea evita confundir el valor vertical con una fracción directa de moléculas. En problemas con datos discretos, la gráfica se interpreta como una aproximación continua al comportamiento de muchas partículas.

Así, el cálculo no busca una sola rapidez universal, sino una distribución completa y varias lecturas útiles de esa distribución.

## 🔴 Nivel estructural

El modelo supone un gas ideal clásico, diluido y en equilibrio térmico. Sus partículas se tratan como puntos materiales sin estructura interna relevante, con choques elásticos y sin interacciones de largo alcance durante la mayor parte del movimiento. La [[temperatura_absoluta]] debe estar bien definida, de modo que el sistema haya tenido tiempo de redistribuir energía entre muchas moléculas. También se supone que la [[masa_particula]] es la misma para todas las partículas descritas; si hay mezcla de gases, cada especie necesita su propia curva.

La invariante principal es la normalización: el área total bajo la curva de [[densidad_probabilidad_velocidad]] frente a [[velocidad]] representa toda la probabilidad disponible. Aunque el máximo cambie de posición, la curva no puede crear ni perder probabilidad. Otro rasgo estable es el orden de velocidades características: la [[velocidad_mas_probable]] queda por debajo de la [[velocidad_media]], y esta por debajo de la [[velocidad_rms]]. Esa diferencia no es un error matemático; refleja que la cola de moléculas rápidas pesa más en los promedios.

Los límites aparecen en varios bordes. Para [[velocidad]] nula, la densidad tiende a cero porque en tres dimensiones hay muy pocos estados con rapidez prácticamente nula. Para velocidades muy altas, la curva también cae, porque la energía necesaria se vuelve poco probable a una [[temperatura_absoluta]] finita. Si la [[temperatura_absoluta]] aumenta mucho, el modelo clásico puede fallar si aparecen ionización, excitaciones internas dominantes o efectos relativistas. Si el gas se hace denso o frío, pueden entrar efectos cuánticos y la estadística clásica deja de describir correctamente la ocupación de estados.

La lectura gráfica debe distinguir altura y área. Un pico alto no significa que todas las moléculas tengan exactamente esa [[velocidad]]; significa que esa región concentra más densidad local. Para una [[probabilidad_intervalo]], importa el área entre [[velocidad_minima]] y [[velocidad_maxima]]. El modelo se rompe cuando los datos muestran colas no térmicas, varios picos persistentes, anisotropía de direcciones o choques insuficientes para alcanzar equilibrio. También falla si se intenta aplicar a un chorro molecular recién emitido, a plasma acelerado por campos intensos o a una muestra donde las paredes seleccionan velocidades de forma artificial. En esos casos, la curva ya no responde solo a [[temperatura_absoluta]] y [[masa_particula]], sino a la historia dinámica del sistema.

## Interpretación física profunda

La [[densidad_probabilidad_velocidad]] traduce movimiento microscópico caótico en una predicción estable. Una molécula individual cambia continuamente de [[velocidad]], pero el conjunto mantiene una forma estadística si la [[temperatura_absoluta]] permanece fija. La [[velocidad_mas_probable]] señala la rapidez más típica de la curva, no la rapidez promedio. La [[velocidad_media]] responde a la pregunta “qué rapidez espero al escoger una molécula al azar”, mientras que la [[velocidad_rms]] conecta mejor con la [[energia_cinetica_media]]. Esa diferencia ayuda a leer la curva sin convertirla en una lista de valores únicos.

## Orden de magnitud

Para aire a temperatura ambiente, con moléculas de masa del orden de 10⁻²⁶ kg y [[temperatura_absoluta]] cercana a 300 K, las velocidades características suelen estar en cientos de m/s. En gases ligeros como helio, la misma [[temperatura_absoluta]] produce [[velocidad_media]] mayor. En gases pesados, la curva se desplaza hacia valores menores de [[velocidad]]. La [[probabilidad_intervalo]] para un tramo estrecho depende del ancho del intervalo y de la altura local de la curva.

## Método de resolución personalizado

Primero identifica la especie gaseosa para fijar [[masa_particula]]. Después convierte la temperatura a [[temperatura_absoluta]] en kelvin y decide qué se pide: forma completa, [[velocidad_mas_probable]], [[velocidad_media]], [[velocidad_rms]], [[energia_cinetica_media]] o [[probabilidad_intervalo]]. Elige la fórmula correspondiente y revisa unidades. Si la pregunta menciona un intervalo, no uses solo la altura de [[densidad_probabilidad_velocidad]]: integra o aproxima el área entre [[velocidad_minima]] y [[velocidad_maxima]]. Finalmente interpreta si el resultado cambia al subir [[temperatura_absoluta]] o al cambiar [[masa_particula]].

## Casos especiales y ejemplo extendido

Si la [[temperatura_absoluta]] baja, la distribución se estrecha y se desplaza hacia menor [[velocidad]], pero no se convierte en una única línea mientras el modelo clásico sea válido. Si la [[masa_particula]] disminuye, la curva se mueve hacia la derecha incluso con igual [[temperatura_absoluta]]. En un ejemplo de nitrógeno a temperatura ambiente, la mayoría de moléculas se agrupa alrededor de cientos de m/s. Si se calienta el gas, aumenta la [[velocidad_mas_probable]], crecen la [[velocidad_media]] y la [[velocidad_rms]], y la cola rápida se vuelve más visible. La [[energia_cinetica_media]] aumenta directamente con la escala térmica.

## Preguntas reales del alumno

¿Por qué la curva empieza en cero si puede haber moléculas muy lentas? Porque la probabilidad de rapidez exactamente nula es despreciable en tres dimensiones; lo relevante es un intervalo pequeño de [[velocidad]].

¿La [[velocidad_mas_probable]] es la misma que la [[velocidad_media]]? No. La cola de moléculas rápidas empuja la [[velocidad_media]] por encima del máximo local.

¿Subir la [[temperatura_absoluta]] hace que todas las moléculas aceleren igual? No. Cambia la distribución completa: algunas siguen lentas y otras se vuelven mucho más rápidas.

¿Qué mide la [[densidad_probabilidad_velocidad]]? Mide probabilidad por unidad de rapidez; una probabilidad real necesita un intervalo.

## Conexiones transversales y rutas de estudio

Este leaf conecta teoría cinética, gases ideales, interpretación de gráficas, energía térmica y estadística. Prepara el salto hacia distribución de energías, procesos de difusión, transporte térmico y comparación con distribuciones cuánticas. También ayuda a distinguir valores instantáneos de promedios colectivos.

## Síntesis final

La [[temperatura_absoluta]] no asigna una única rapidez al gas: moldea una distribución. Maxwell-Boltzmann permite leer velocidades típicas, energía media y probabilidades de intervalo sin perder la naturaleza estadística del movimiento molecular.