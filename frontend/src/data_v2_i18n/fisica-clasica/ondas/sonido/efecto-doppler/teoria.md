# Efecto Doppler

## Contexto conceptual

Cuando una ambulancia pasa a toda velocidad junto a un observador, el tono de la sirena sube al acercarse y baja al alejarse. La ambulancia no cambia de frecuencia en ningún momento: el efecto es perceptivo, no de la fuente. Este cambio aparente de frecuencia por movimiento relativo entre emisor y receptor recibe el nombre de **efecto Doppler**, y es uno de los fenómenos ondulatórios mas generales de la fisica: aparece en sonido, luz, ondas de radio y cualquier otro tipo de onda que se propague a una velocidad finita por un medio o en el vacio.

El mecanismo fisico es geométrico y directo. Una fuente sonora en movimiento comprime los frentes de onda delante de ella y los estira detras. Un receptor en movimiento intercepta mas frentes de onda por segundo cuando avanza hacia ellos o menos cuando se aleja. En los dos casos, el resultado es una frecuencia percibida [[f_obs]] distinta de la frecuencia emitida [[f_fuente]].

Comprender el efecto Doppler no es solo un ejercicio académico: es la base fisica del radar de velocidad en carretera, de la ecografia Doppler cardiaca, del sonar de navegacion submarina y de la medicion de velocidades de estrellas y galaxias.

## 🟢 Nivel esencial

Cuando una fuente sonora se **acerca** al receptor, los frentes de onda se compilan uno encima del otro: llegan con mayor frecuencia de la que son emitidos. El tono sube. Cuando la fuente se **aleja**, los frentes de onda se estiran: llegan con menor frecuencia. El tono baja.

Lo mismo ocurre si es el receptor quien se mueve: acercarse a una fuente sonora fija equivale a interceptar mas frentes de onda por segundo, y alejarse, interceptar menos.

El factor clave es la **velocidad relativa radial** entre fuente y receptor respecto a la velocidad de propagacion del sonido en el medio [[v_sonido]]. Cuanto mayor es esa velocidad relativa como fraccion de [[v_sonido]], mayor es el desplazamiento de frecuencia.

> [!NOTE]
> El efecto Doppler clasico **no es simetrico**: una fuente que se acerca a un receptor fijo produce un cambio de frecuencia distinto al de un receptor que se acerca a una fuente fija, incluso si la velocidad relativa es la misma. Esto contrasta con el efecto Doppler relativista (para la luz), donde solo importa la velocidad relativa entre fuente y receptor.

La regla practica: si la fuente y el receptor se acercan, [[f_obs]] mayor que [[f_fuente]]; si se alejan, [[f_obs]] menor que [[f_fuente]]; si estan en reposo relativo, [[f_obs]] igual a [[f_fuente]].

## 🔵 Nivel formal

La formula general del efecto Doppler relaciona todas las velocidades en juego:

{{f:doppler_general}}

donde el convenio de signos estandar es:
- [[v_receptor]] positivo cuando el receptor se mueve **hacia** la fuente
- [[v_fuente]] positivo cuando la fuente se mueve **alejandose** del receptor

Para el caso mas comun de receptor fijo y fuente en movimiento:

{{f:doppler_fuente_movil}}

Para el caso de fuente fija y receptor en movimiento:

{{f:doppler_receptor_movil}}

La diferencia entre las dos formulas subraya la asimetria del efecto Doppler clasico. Para una fuente acercandose a [[v_sonido]]/2 (fuente movil), [[f_obs]] es 2 veces [[f_fuente]]. Para un receptor acercandose a [[v_sonido]]/2 (receptor movil), [[f_obs]] es solo 1.5 veces [[f_fuente]]. Mismo acercamiento relativo, resultado distinto.

En calculos practicos conviene leer cada cociente como un factor multiplicador de [[f_fuente]]. Un factor mayor que 1 indica aumento de tono; un factor menor que 1 indica disminucion. Esa lectura evita sustituir signos mecanicamente sin comprobar el sentido fisico.

El desplazamiento Doppler es:

{{f:desplazamiento_doppler}}

> [!TIP]
> El convenio de signos es la principal fuente de errores en el efecto Doppler. Una forma robusta de trabajar: identificar primero si [[f_obs]] debe ser mayor o menor que [[f_fuente]] a partir del contexto fisico, calcular el resultado esperado con la formula, y verificar que el signo del resultado es coherente con la expectativa inicial.

## 🔴 Nivel estructural

El mecanismo fisico de los dos casos (fuente movil y receptor movil) es conceptualmente diferente, aunque ambos producen cambios en [[f_obs]].

**Fuente en movimiento**: La fuente emite frentes de onda esfericos a intervalos regulares. Al moverse, el centro de cada frente de onda nuevo esta desplazado respecto al anterior. En la direccion de avance, los centros de onda sucesivos se aproximan, reduciendo la distancia entre frentes: la longitud de onda efectiva en esa direccion es menor que en el caso de fuente en reposo. Como [[v_sonido]] no cambia (es una propiedad del medio, no de la fuente), una longitud de onda menor implica una frecuencia mayor. En la direccion opuesta, los frentes se estiran: longitud de onda mayor y frecuencia menor.

**Receptor en movimiento**: La fuente esta en reposo respecto al medio, por lo que los frentes de onda están igualmente espaciados en todas las direcciones con la longitud de onda intrinseca [[v_sonido]] partido entre [[f_fuente]]. La longitud de onda en el medio no cambia. Lo que cambia es la velocidad relativa con que el receptor atraviesa esos frentes: si se mueve hacia la fuente, los cruza a velocidad [[v_sonido]] mas [[v_receptor]], encontrando mas frentes por segundo. Si se aleja, los cruza a velocidad [[v_sonido]] menos [[v_receptor]].

Esta distincion explica por que las dos formulas son diferentes y por que el efecto Doppler clasico no es simetrico: en el caso de fuente movil, la longitud de onda en el medio se altera; en el caso de receptor movil, no.

**Singularidad sónica**: Cuando [[v_fuente]] se aproxima a [[v_sonido]], el denominador de la formula de fuente movil se acerca a cero y [[f_obs]] tiende a infinito. Fisicamente, la fuente "alcanza" sus propios frentes de onda: todos se apilan en un frente de choque (el **boom sonico**). Cuando [[v_fuente]] supera [[v_sonido]], se forma el **cono de Mach**: los frentes de onda forman un cono con semiangulo igual al arcoseno de la razon [[v_sonido]] partido entre [[v_fuente]]. Detrás del cono existe solución de onda; delante, no.

> [!WARNING]
> La formula Doppler clasica **falla** cuando [[v_fuente]] es mayor o igual a [[v_sonido]]. En ese régimen no existe solución de onda monocromatica en la region frontal y el concepto de [[f_obs]] pierde sentido. El cono de Mach no es una "frecuencia infinita", sino la ausencia de frentes de onda periodicos en la zona delantera.

## Interpretación física profunda

La simetria rota del efecto Doppler clasico tiene raices profundas: el sonido se propaga respecto al medio, no respecto a la fuente ni al receptor. El medio (el aire, el agua) es la referencia privilegiada. Cuando la fuente se mueve en el medio, la estructura espacial de los frentes de onda cambia. Cuando el receptor se mueve, la estructura no cambia, pero su velocidad relativa respecto a los frentes si.

En la fisica relativista, no existe un "medio privilegiado" para la luz: la velocidad de la luz es la misma para todos los observadores inerciales. Como consecuencia, el efecto Doppler relativista **si es simetrico**: solo depende de la velocidad relativa entre fuente y receptor, no de quien se mueve respecto a que. Esta diferencia entre el Doppler clasico y el relativista es una de las demostraciones experimentales mas directas de la relatividad especial.

## Orden de magnitud

Para una ambulancia con sirena de 440 Hz moviéndose a 90 km/h (25 m/s) en aire a 20 °C ([[v_sonido]] cercano a 343 m/s):

Al acercarse, la relacion de fuente movil con [[v_fuente]] de menos 25 m/s (convenio negativo acercandose) da [[f_obs]] de 343 partido entre (343 menos 25) multiplicado por 440, igual a aproximadamente 474 Hz.

Al alejarse: [[v_fuente]] de mas 25 m/s da [[f_obs]] de 343 partido entre (343 mas 25) multiplicado por 440, igual a aproximadamente 411 Hz.

El cambio total de tono al pasar la ambulancia es de 474 a 411 Hz, una diferencia de 63 Hz perceptible como un descenso notorio. Esta diferencia de tono es proporcional a la velocidad del vehiculo y permite al oido entrenado estimar la velocidad del objeto que pasa.

## Método de resolución personalizado

1. Identificar qué se mueve: la fuente, el receptor, o ambos. Seleccionar la relacion general si ambos se mueven, la de fuente movil si solo se mueve la fuente, o la de receptor movil si solo se mueve el receptor.

2. Establecer el convenio de signos antes de sustituir: [[v_fuente]] positivo alejandose del receptor; [[v_receptor]] positivo hacia la fuente.

3. Estimar el resultado esperado: si hay acercamiento, [[f_obs]] debe ser mayor que [[f_fuente]]; si hay alejamiento, menor.

4. Sustituir los valores numericos y verificar que el resultado es coherente con la estimacion del paso 3.

5. Si se pide la velocidad del objeto a partir de [[f_obs]] medido: despejar [[v_fuente]] de la relacion de fuente movil: [[v_fuente]] igual a [[v_sonido]] multiplicado por la cantidad 1 menos [[f_fuente]] partido entre [[f_obs]].

## Casos especiales y ejemplo extendido

**Fuente casi sonica**: si [[v_fuente]] se acerca a [[v_sonido]], el denominador se vuelve pequeño y el modelo deja de ser operativo antes de llegar al valor infinito. En la practica aparecen ondas de choque, no una frecuencia audible ordinaria.

**Movimiento oblicuo**: si la fuente no se mueve sobre la linea fuente-receptor, solo cuenta la componente radial. Un vehiculo que cruza perpendicularmente delante del observador puede tener gran rapidez y, aun asi, desplazamiento Doppler casi nulo en el instante de maxima aproximacion.

**Ejemplo extendido**: para una sirena de [[f_fuente]] igual a 1000 Hz y una fuente que se acerca a 34 m/s en aire con [[v_sonido]] de 340 m/s, [[f_obs]] aumenta hasta cerca de 1111 Hz. Si se aleja a la misma rapidez, baja a cerca de 909 Hz. El salto es grande porque la rapidez ya es el 10 % de la velocidad del sonido.

## Preguntas reales del alumno

**¿Por que no basta con la velocidad relativa?**

Porque el sonido se propaga respecto al medio. Mover la fuente cambia la separacion espacial entre frentes; mover el receptor cambia cuántos frentes atraviesa por segundo.

**¿El boom sonico es una frecuencia muy alta?**

No. Es una onda de choque asociada a una fuente supersonica. En ese regimen [[f_obs]] como frecuencia periodica frontal deja de ser una magnitud bien definida.

## Conexiones transversales y rutas de estudio

- [Velocidad del sonido](leaf:fisica-clasica/ondas/sonido/velocidad-del-sonido): provee [[v_sonido]] del medio, parametro critico del denominador de la formula Doppler.
- [Naturaleza del sonido](leaf:fisica-clasica/ondas/sonido/naturaleza-del-sonido): describe la estructura de los frentes de onda que el efecto Doppler comprime o estira.
- [Aplicaciones del sonido](leaf:fisica-clasica/ondas/sonido/aplicaciones): extiende el principio Doppler a sonar de velocidad, ecografia Doppler y radar meteorologico.
- [Efecto Doppler relativista](leaf:fisica-clasica/relatividad/efecto-doppler-relativista): generaliza el efecto Doppler a ondas electromagneticas y a velocidades comparables a la luz.

## Síntesis final

El efecto Doppler es la modificacion de la frecuencia percibida por movimiento relativo entre fuente y receptor. La relacion general encapsula dos mecanismos: compresion de frentes por fuente movil e intercepcion acelerada por receptor movil. El convenio de signos es la clave practica, y [[v_fuente]] igual a [[v_sonido]] marca el limite fisico del modelo.
