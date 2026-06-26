# Tiro horizontal

## Contexto conceptual

El tiro horizontal describe el movimiento de un proyectil que abandona un borde con velocidad inicial horizontal y sin componente vertical inicial. Es el caso de una canica que sale de una mesa, una caja que cae desde una cinta transportadora o un chorro de agua que sale casi horizontalmente de una boquilla. La escena parece sencilla, pero contiene la idea más importante de la cinemática bidimensional: un mismo cuerpo puede avanzar y caer al mismo tiempo sin que esos dos comportamientos tengan la misma causa.

La gravedad actúa verticalmente. Por eso cambia el estado vertical del proyectil, pero no proporciona aceleración horizontal en el modelo ideal. El tiempo es común a los dos ejes: cada segundo que pasa es el mismo para la caída y para el avance. Esta coordinación permite calcular primero cuánto dura la caída y usar después ese mismo intervalo para saber dónde aterriza el proyectil.

## 🟢 Nivel esencial

Imagina dos canicas en el borde de una mesa. Una se deja caer y la otra sale horizontalmente en el mismo instante. Si el aire no importa, las dos llegan al suelo al mismo tiempo. La segunda cae igual que la primera, pero además avanza. Esa comparación resume el leaf: la velocidad horizontal decide dónde cae, pero no cuánto tarda en caer.

La intuición correcta no es “cuanto más rápido va, más tarda en caer”. La gravedad no espera a que el objeto termine de avanzar. Desde el primer instante, el objeto está cayendo y avanzando a la vez. Un lanzamiento más rápido produce un impacto más lejano porque el objeto recorre más distancia durante el mismo tiempo de caída.

También conviene separar altura y alcance. La altura disponible decide la duración del vuelo; el avance horizontal decide la distancia recorrida durante ese intervalo. Si una mesa es más alta, el objeto tiene más tiempo para avanzar. Si sale más rápido, avanza más en cada segundo. Son efectos distintos que se combinan en el punto de impacto.

## 🔵 Nivel formal

Elegimos un eje horizontal [[x]] positivo en la dirección del lanzamiento y un eje vertical [[y]] positivo hacia arriba. El punto de salida puede tener coordenada horizontal inicial [[x0]] y altura inicial [[y0]]. La velocidad horizontal inicial se representa mediante [[v0]].

La posición horizontal sigue un movimiento rectilíneo uniforme, porque no hay aceleración horizontal en el modelo ideal:

{{f:th_posicion_x}}

La posición vertical sigue una caída bajo gravedad constante. Como el lanzamiento es horizontal, la velocidad vertical inicial es nula:

{{f:th_posicion_y}}

La velocidad horizontal del proyectil se conserva durante el vuelo:

{{f:th_velocidad_horizontal}}

La velocidad vertical cambia linealmente con el tiempo y toma signo negativo si el eje positivo apunta hacia arriba:

{{f:th_velocidad_vertical}}

Cuando el suelo se toma como [[y]] = 0 y el lanzamiento parte desde una altura [[y0]], el tiempo de caída [[t_caida]] se obtiene de la ecuación vertical:

{{f:th_tiempo_caida}}

El alcance horizontal [[R]] es el avance recorrido durante ese tiempo de caída:

{{f:th_alcance}}

La rapidez total [[v]] en un instante combina la velocidad horizontal conservada y la velocidad vertical generada por la gravedad:

{{f:th_velocidad_total}}

Si se elimina el tiempo entre la posición horizontal y la vertical, aparece la ecuación de la trayectoria:

{{f:th_trayectoria}}

## 🔴 Nivel estructural

El modelo descansa sobre tres condiciones: gravedad uniforme, rozamiento del aire despreciable y lanzamiento inicialmente horizontal. Si aparece una componente vertical inicial, el problema deja de ser tiro horizontal y pasa a ser tiro parabólico oblicuo. Si el aire frena de forma apreciable, la velocidad horizontal ya no se conserva y el alcance real será menor que el ideal.

La estructura de resolución siempre empieza por la condición vertical. En tiro horizontal no se pregunta primero “cuánto avanza”, sino “cuánto tiempo tiene para avanzar”. Esa duración sale de la altura y de la gravedad. Solo después se calcula el alcance con el movimiento horizontal. Invertir ese orden puede llevar a atribuir al alcance una influencia que no tiene sobre la caída.

El signo de la velocidad vertical también es estructural. Con eje vertical positivo hacia arriba, el proyectil sale con velocidad vertical nula y después adquiere velocidad negativa. Ese signo no es un adorno algebraico: indica que el objeto está descendiendo. Si una solución da velocidad vertical positiva justo antes del impacto, la convención de signos o la sustitución se han usado mal.

## Interpretación física profunda

El tiro horizontal enseña que independencia no significa desconexión total. Los ejes horizontal y vertical tienen causas distintas, pero comparten el mismo reloj. Por eso la caída puede analizarse como una caída libre y el avance como un movimiento uniforme, aunque ambos pertenezcan al mismo objeto.

Esta idea explica el experimento clásico de la canica lanzada y la canica soltada. Sus movimientos horizontales son diferentes, pero sus movimientos verticales son iguales si parten de la misma altura. La diferencia entre ambas no está en cuánto tardan en caer, sino en dónde están cuando llegan al suelo.

También aclara por qué la rapidez de impacto es mayor que la rapidez de salida. La parte horizontal se mantiene, pero la gravedad añade una componente vertical cada vez mayor en módulo. El proyectil no “pierde” su avance horizontal para caer; suma una caída vertical a un avance que ya tenía.

## Orden de magnitud

En una mesa de laboratorio de unos 0,8 m, el tiempo de caída suele rondar 0,4 s. Con una velocidad horizontal de 1,5 m/s, el alcance será del orden de medio metro. En una cinta industrial a 1 m de altura y 2 m/s, el alcance será del orden de un metro. Desde un vehículo o una aeronave, los tiempos pueden llegar a varios segundos y los alcances a cientos de metros si el aire no domina.

Estos órdenes de magnitud sirven para detectar errores. Un objeto que cae desde una mesa no debería tardar decenas de segundos. Una canica lenta no debería aterrizar a cien metros. Si aparecen resultados de ese tipo, casi siempre hay una unidad mal convertida, un eje mal definido o una fórmula aplicada fuera de dominio.

## Método de resolución personalizado

1. Dibuja el punto de salida, el suelo y los ejes.
2. Fija [[x0]], [[y0]] y la convención de signo vertical.
3. Comprueba que la velocidad inicial sea horizontal.
4. Calcula el tiempo de caída usando la ecuación vertical.
5. Usa ese mismo tiempo para hallar el alcance horizontal.
6. Calcula [[vy]] y [[v]] si se pide velocidad de impacto.
7. Verifica signos, unidades y orden de magnitud.

## Casos especiales y ejemplo extendido

El caso más simple aparece cuando se toma [[x0]] = 0 y el suelo como [[y]] = 0. Entonces el tiempo de caída depende solo de [[y0]] y [[g]], y el alcance se obtiene multiplicando ese tiempo por [[v0]]. Esta es la situación típica de una mesa, una cinta o una boquilla horizontal.

Un ejemplo extendido útil es una caja que sale de una cinta a 2,0 m/s desde 0,80 m de altura. La caída dura aproximadamente 0,40 s, por lo que la caja aterriza a unos 0,80 m del borde. Si la cinta duplica su velocidad, el tiempo de caída no cambia, pero el alcance se duplica. Si la altura se duplica, el tiempo no se duplica: crece solo con la raíz cuadrada de la altura.

## Preguntas reales del alumno

**¿Por qué la velocidad horizontal no cambia?** Porque en el modelo ideal no hay fuerza horizontal. La gravedad actúa verticalmente.

**¿Por qué el tiempo de caída no depende de la velocidad horizontal?** Porque la ecuación vertical no contiene el avance horizontal. La altura y la gravedad fijan la duración de la caída.

**¿La velocidad de impacto es horizontal?** No. Al impactar, el proyectil conserva una componente horizontal, pero además tiene una componente vertical hacia abajo.

## Conexiones transversales y rutas de estudio

Este leaf conecta directamente con caída libre, movimiento rectilíneo uniforme y tiro parabólico. También prepara lecturas gráficas de trayectorias, análisis de seguridad en máquinas y estimaciones de alcance en contextos reales. Su valor didáctico está en enseñar a separar ejes antes de mezclar resultados.

## Síntesis final

Dominar tiro horizontal significa reconocer una salida sin componente vertical inicial, calcular la caída desde la altura disponible y usar el mismo tiempo para el avance horizontal. La clave no es memorizar el alcance, sino defender por qué la altura fija la duración y la velocidad horizontal fija dónde ocurre el impacto.
