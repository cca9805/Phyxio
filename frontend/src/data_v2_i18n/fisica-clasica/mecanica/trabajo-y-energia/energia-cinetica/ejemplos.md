# Ejemplo tipo examen

## Enunciado

Un carrito de laboratorio se mueve sobre un carril horizontal casi sin rozamiento. Su masa [[m]] vale 4 kg. Parte con una rapidez inicial de 3 m/s y, tras recibir el empuje de un motor lineal durante un breve tramo, sale con una rapidez final de 7 m/s. Se pide calcular [[Ki]], [[Kf]], [[dK]] y el trabajo neto [[Wnet]] realizado sobre el carrito. Tambien se pide explicar por que el aumento de energia cinetica es mucho mayor que lo que muchos alumnos anticipan cuando solo comparan de forma intuitiva las dos velocidades.

## Datos

Los datos relevantes son una masa [[m]] constante de 4 kg, una rapidez inicial de 3 m/s y una rapidez final de 7 m/s. El enunciado ademas informa de que el carril es casi horizontal y que las perdidas por rozamiento son despreciables durante el tramo de empuje. Eso permite tratar el problema como un cambio de estado puramente traslacional.

## Definición del sistema

El sistema es solo el carrito. No se incluye el motor ni el carril dentro del sistema. Esa eleccion es adecuada porque el objetivo es leer como cambia la energia cinetica del cuerpo que se acelera. Las acciones externas se resumen despues en [[Wnet]].

## Modelo físico

El modelo fisico usa las magnitudes [[K]], [[m]], [[Ki]], [[Kf]], [[dK]] y [[Wnet]]. Se trata de un movimiento traslacional clasico con masa constante. La energia cinetica general [[K]] se evalua en dos estados y el cambio se conecta con el trabajo neto del tramo de empuje. No hace falta reconstruir toda la aceleracion instante a instante porque el leaf permite cerrar por comparacion de estados.

## Justificación del modelo

El modelo es fisicamente adecuado porque la velocidad es claramente clasica, la masa [[m]] no cambia, y el enunciado no sugiere que rotacion, deformacion o disipacion dominante formen parte del problema. Ademas, el carril horizontal y casi sin rozamiento justifica que el cambio de energia cinetica se interprete sobre todo como efecto del trabajo neto del motor sobre el carrito. Si el rozamiento fuera importante o si el sistema girara, el cierre del leaf dejaria de ser suficiente por si solo.

## Resolución simbólica

Primero se calcula la energia cinetica en cada estado con la formula basica:

{{f:energia_cinetica_basica}}

En esta relacion, la masa [[m]] entra de forma explicita y controla cuanto cambia [[K]] para una misma rapidez.

Luego se compara el estado final con el inicial mediante la variacion de energia cinetica:

{{f:variacion_energia_cinetica}}

Por ultimo, se interpreta el resultado como trabajo neto del conjunto de fuerzas externas relevantes:

{{f:teorema_trabajo_energia}}

## Sustitución numérica

Con una masa [[m]] de 4 kg y una rapidez inicial de 3 m/s, la energia cinetica inicial [[Ki]] resulta 18 J. Para la rapidez final de 7 m/s, la energia cinetica final [[Kf]] resulta 98 J. La variacion [[dK]] es, por tanto, 80 J. Como el teorema trabajo-energia identifica [[Wnet]] con [[dK]], el trabajo neto sobre el carrito durante el tramo de empuje tambien vale 80 J.

El dato mas didactico no es solo el numero final. La rapidez final no es algo mas del doble de la inicial, pero la energia final es mucho mas de cinco veces mayor que la inicial. Ese desajuste con la intuicion lineal es precisamente una de las ideas que el leaf quiere fijar.

## Validación dimensional

La energia cinetica debe expresarse en julios. Al combinar kilogramos con el cuadrado de metros por segundo, el resultado pertenece al dominio energetico correcto. La variacion [[dK]] y el trabajo neto [[Wnet]] tambien quedan en julios, de modo que el cierre dimensional es coherente. Si alguno de los resultados hubiera aparecido en unidades de fuerza o velocidad, habria una alarma inmediata de modelado o sustitucion.

## Interpretación física

Este ejemplo muestra que el cambio energetico del movimiento no sigue la intuicion lineal que a veces se arrastra desde la cinematica elemental. Pasar de 3 m/s a 7 m/s no significa solo una mejora moderada del estado de marcha; significa que el carrito sale con un presupuesto cinetico muy superior. La causa es el caracter cuadratico de la dependencia con la rapidez.

Tambien muestra por que [[Wnet]] es una magnitud causal y no una formalidad algebraica. El trabajo neto positivo de 80 J resume que el motor ha transferido energia mecanica al carrito. Si el mismo carrito hubiera terminado con menor rapidez, el signo de [[dK]] y de [[Wnet]] se habria invertido y la lectura fisica habria sido la de un frenado o una extraccion de presupuesto cinetico.

Este tipo de ejemplo es util porque enlaza directamente con seguridad, automatizacion y diseno experimental. Un pequeno error al juzgar el efecto de la rapidez lleva a infravalorar la energia que un sistema debe absorber, suministrar o controlar.

# Ejemplo de aplicación real

## Contexto

Considera ahora una aplicacion real de movilidad urbana. Un turismo electrico de 1400 kg circula a unos 50 km/h al aproximarse a un cruce con semaforo. El conductor reduce la velocidad hasta unos 20 km/h antes de detenerse por completo unos metros mas adelante. El objetivo no es reconstruir toda la dinamica del frenado, sino estimar cuanta energia cinetica desaparece ya en el primer tramo de reduccion de velocidad y por que esa magnitud es relevante para frenos, neumáticos y control de distancia de seguridad.

## Estimación física

Para una lectura de orden de magnitud, la rapidez inicial es de unos 13.9 m/s y la rapidez intermedia de unos 5.6 m/s. Con masa [[m]] de 1400 kg, la energia cinetica inicial queda en el entorno de 135 kJ. Al bajar a 20 km/h, la energia cinetica final de ese primer tramo queda cerca de 22 kJ. Eso significa que [[dK]] es aproximadamente negativa con un valor cercano a menos 113 kJ. Por el teorema trabajo-energia, [[Wnet]] del frenado en ese tramo comparte esa misma lectura energetica y ese mismo orden de magnitud.

La estimacion deja una idea muy clara: antes incluso de detenerse del todo, el vehiculo ya ha debido ceder al entorno y al sistema de frenado una cantidad de energia comparable a la que muchos dispositivos domesticos consumen durante bastante tiempo. El fenomeno no puede entenderse solo diciendo que el coche paso de ir rapido a ir menos rapido. La variacion de rapidez desencadena una caida muy grande del presupuesto cinetico.

## Interpretación

La importancia fisica de esta estimacion es doble. Primero, muestra por que la seguridad vial es tan sensible a la velocidad: una reduccion parcial de rapidez ya implica extraer una fraccion enorme de energia del movimiento. Segundo, ayuda a entender por que frenos, neumáticos y pavimento deben disipar o redirigir cantidades de energia tan grandes en tiempos cortos.

La leccion del leaf aparece con claridad. El conductor no solo modifica una cifra de velocidad; modifica de forma drástica el presupuesto energetico asociado al movimiento. Cuando el sistema de frenado funciona bien, [[Wnet]] negativo traduce esa extraccion de energia cinetica en calor, ruido, deformacion de contacto y otras formas no cineticas. Esa es la razon por la que una diferencia aparentemente modesta de velocidad puede cambiar tanto la severidad fisica de una maniobra.