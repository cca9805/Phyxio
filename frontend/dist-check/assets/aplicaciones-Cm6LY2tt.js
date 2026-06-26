const a=`## 1. Diseño de una demostración de laboratorio

En un laboratorio docente, una canica sale horizontalmente desde una rampa corta y debe caer dentro de un vaso colocado delante de la mesa. El profesor necesita decidir a qué distancia colocar el vaso para que la demostración sea reproducible. El tiro horizontal separa la caída, fijada por la altura [[y0]], del avance, fijado por la rapidez de salida [[v0]].

{{f:th_tiempo_caida}}

{{f:th_alcance}}

Variable dominante: [[R]], porque determina la posición del vaso respecto al borde.

La utilidad didáctica está en que la predicción se puede comprobar de inmediato. Si se mantiene la misma mesa y se cambia solo la rapidez de salida, el vaso debe moverse casi en proporción directa. Si se cambia la altura de la mesa, el ajuste es menor de lo que muchos alumnos esperan, porque el tiempo de caída no crece linealmente con la altura.

Límite de validez: si la canica sale con inclinación vertical apreciable o el borde modifica su velocidad, el modelo deja de describir exactamente la salida.

## 2. Salida de piezas en una cinta de empaquetado

En una línea de producción, una pieza abandona el extremo de una cinta y debe caer en una bandeja situada a cierta distancia horizontal. La altura de caída viene impuesta por la máquina, pero el técnico puede ajustar la velocidad de la cinta. El modelo permite convertir una decisión mecánica en una predicción simple: si la bandeja está más lejos, hace falta más [[v0]] o más altura disponible.

{{f:th_posicion_x}}

{{f:th_posicion_y}}

Variable dominante: [[v0]], porque una pequeña variación de la velocidad de salida cambia linealmente el alcance.

En mantenimiento, este cálculo sirve también para diagnosticar fallos. Si las piezas empiezan a caer siempre antes de la bandeja, puede que la cinta haya perdido velocidad o que la altura efectiva haya cambiado. Si caen demasiado lejos, la velocidad de salida puede estar por encima de la nominal. El modelo no sustituye la medición, pero indica qué magnitud conviene revisar primero.

Límite de validez: si la pieza gira mucho, roza con guías laterales o recibe flujo de aire, el avance horizontal puede dejar de ser uniforme.

## 3. Trayectoria en un videojuego o simulador

En un simulador físico, un objeto se lanza horizontalmente desde una plataforma y el motor debe dibujar una trayectoria creíble. No basta con mover el objeto hacia delante y hacia abajo de forma arbitraria: la curvatura debe responder a [[g]] y a [[v0]]. La trayectoria espacial permite representar la parábola sin resolver de nuevo todo el problema en cada fotograma.

{{f:th_trayectoria}}

Variable dominante: la relación entre [[x]] e [[y]], porque determina la curvatura visual del movimiento.

La aplicación no es solo estética. En una simulación educativa o técnica, la curva debe responder de manera estable cuando se modifican datos como altura, gravedad o velocidad inicial. Si al duplicar [[v0]] la trayectoria no se alarga horizontalmente, o si al aumentar [[g]] la caída no se vuelve más pronunciada, el usuario percibirá que el modelo visual contradice la física.

Límite de validez: si el motor añade impulsos, colisiones intermedias o zonas con gravedad distinta, la parábola simple ya no describe la escena completa.

## 4. Reconstrucción de una caída desde una cornisa

En una reconstrucción pericial, un objeto cae desde una ventana con velocidad inicial casi horizontal. La pregunta no es solo si cae, sino dónde impacta respecto a la fachada. El alcance y la velocidad vertical al impacto ayudan a comparar la escena con marcas en el suelo y a decidir si una narración es compatible con la geometría observada.

{{f:th_velocidad_vertical}}

{{f:th_velocidad_total}}

Variable dominante: [[vy]], porque informa de la dirección y la intensidad vertical del impacto junto con la altura de salida.

La lectura pericial debe evitar una conclusión automática. Un mismo punto de impacto puede ser compatible con distintas combinaciones de altura y velocidad horizontal, por lo que el tiro horizontal funciona como filtro de plausibilidad. Si la distancia observada exige una velocidad horizontal imposible para la escena, la hipótesis debe revisarse antes de añadir detalles más complejos.

Límite de validez: si el objeto roza la pared, recibe un impulso adicional o es muy ligero, el modelo ideal puede subestimar la desviación real.

## 5. Chorro de agua desde una boquilla horizontal

Un chorro de agua sale horizontalmente desde una boquilla y el operario quiere saber dónde cae para colocar un recipiente o evitar que moje una zona sensible. Aunque el flujo real puede ser complejo, el primer tramo del chorro puede aproximarse como tiro horizontal para obtener una estimación rápida.

{{f:th_tiempo_caida}}

{{f:th_alcance}}

Variable dominante: la combinación entre [[y0]] y [[v0]]. La altura fija el tiempo disponible y la velocidad horizontal fija el avance durante ese tiempo.

Esta estimación es útil cuando la decisión práctica no necesita una simulación completa del fluido. Por ejemplo, para colocar una bandeja, una protección o una canaleta, basta con saber el orden de magnitud del primer impacto. Después se añade margen porque el chorro real puede abrirse, oscilar o romperse en gotas antes de llegar al recipiente.

Límite de validez: la aproximación falla si el chorro se fragmenta pronto, si el aire lo frena de forma apreciable o si la boquilla no apunta realmente en horizontal.
`;export{a as default};
