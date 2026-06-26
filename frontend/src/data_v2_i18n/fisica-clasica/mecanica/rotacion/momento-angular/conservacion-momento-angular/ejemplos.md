# Ejemplo tipo examen

## Enunciado

Se estudia conservacion del momento [[Lf]] [[I_final]] [[Ii]] angular [[L]] en un problema donde el dato importante no es solo numerico, sino estructural: hay que decidir si el sistema puede tratarse como casi aislado durante el intervalo relevante y si el cambio observado de velocidad angular se debe a una redistribucion interna o a un torque [[tau]] externo. El objetivo del examen es justificar por que la conservacion angular es la lectura correcta del caso.

## Datos

Los datos deben fijar unidades, eje de giro y ventana temporal del proceso. En este leaf las magnitudes clave son [[Li]], [[Lf]], [[Ii]], [[I_final]], [[omegai]], [[omegaf]] y, si el montaje se audita, [[tau]], [[DeltaL]] y [[DeltaT]]. Un buen planteamiento separa desde el principio lo que pertenece a la redistribucion interna de lo que pertenece al entorno.

## Definicion del sistema

El sistema se define de modo que la reorganizacion interna de masas quede dentro del balance y los torques del entorno queden identificados de forma explicita. Esa eleccion debe ser coherente con el eje elegido y con la pregunta fisica del leaf: podemos comparar directamente [[Li]] y [[Lf]], o existe un torque externo grande como para romper la conservacion?

## Modelo fisico

Se adopta el modelo minimo que conserva el mecanismo dominante. En la version ideal, la ecuacion de conservacion expresa la igualdad entre [[Li]] y [[Lf]]. Para giro alrededor del mismo eje, el balance con inercia liga [[Ii]], [[I_final]], [[omegai]] y [[omegaf]]. Si el sistema no es perfectamente aislado, el modelo se amplía con [[tau]], [[DeltaL]] y [[DeltaT]], de modo que la conservacion no se use por reflejo sino con una auditoria fisica.

## Justificacion del modelo

La justificacion debe explicar por que el regimen elegido es compatible con la escala del problema y con la intensidad esperada del entorno. En este caso el modelo es razonable porque el evento principal es una redistribucion interna de inercia y no un par externo intenso. La justificacion se vuelve fuerte cuando afirma que la conservacion solo puede usarse si el posible [[tau]] acumulado durante [[DeltaT]] es pequeno frente a [[Li]].

## Resolucion simbolica

La resolucion simbolica sigue una cadena clara. Primero, la ecuacion de conservacion impone el balance entre [[Li]] y [[Lf]], y su forma despejada hace heredar el estado final del inicial. Luego el balance con inercia expresa la misma idea mediante [[Ii]], [[I_final]], [[omegai]] y [[omegaf]], mientras la forma despejada final permite calcular directamente [[omegaf]]. Si aparece una accion externa residual, la relacion de torque medio conecta [[DeltaL]] con [[DeltaT]] y convierte el problema en una auditoria de si la conservacion sigue siendo valida.

## Sustitucion numerica

Tomemos un estado inicial con [[Ii]] de 4.0 kg*m^2, [[I_final]] de 1.6 kg*m^2 y [[omegai]] de 2.0 rad/s. El momento angular inicial [[Li]] vale 8.0 kg*m^2/s. Si el sistema esta lo bastante aislado para usar el balance conservativo, entonces el estado final hereda ese mismo valor y [[Lf]] sigue valiendo 8.0 kg*m^2/s. Aplicando la forma despejada para velocidad final, [[omegaf]] resulta 5.0 rad/s.

Ahora añadimos una auditoria: supongamos que el eje puede transmitir un torque medio [[tau]] de 0.20 N*m durante un intervalo [[DeltaT]] de 0.40 s. El cambio angular implicado [[DeltaL]] es 0.08 kg*m^2/s. Ese valor es pequeno frente a [[Li]], asi que la conservacion ideal sigue siendo defendible, pero ya no se trata como una verdad magica sino como una aproximacion cuantificada.

## Validacion dimensional

La validacion dimensional comprueba que [[Li]], [[Lf]] y [[DeltaL]] queden en kg*m^2/s, que [[tau]] quede en N*m y que las velocidades angulares queden en rad/s. Tambien obliga a revisar si el intervalo temporal elegido tiene sentido fisico. Una cuenta con unidades correctas puede seguir siendo mala si compara fases del proceso que no pertenecen al mismo evento.

## Interpretacion fisica

[[Lf]] no es un numero decorativo: indica si el estado final conserva el mismo contenido angular total que el inicial. La subida de [[omegaf]] no significa que haya aparecido nuevo momento angular, sino que [[I_final]] ha disminuido mientras [[L]] se ha mantenido casi fijo. Las magnitudes [[tau]], [[DeltaL]] y [[DeltaT]] importan porque deciden si esa lectura conservativa es legitima o si el entorno ha inyectado un cambio apreciable.

# Ejemplo de aplicacion real

## Contexto

En una situacion real, la conservacion del momento angular aparece en taburetes giratorios, patinadoras, satelites con paneles desplegables y experimentos de colision rotacional. En todos ellos la pregunta interesante es la misma: el cambio observado de velocidad angular es una redistribucion interna o una huella de torque externo?

## Estimacion fisica

Antes de calcular ya se sabe que, si [[I_final]] cae mucho mientras [[Li]] se mantiene casi fijo, [[omegaf]] debe aumentar de manera visible. Tambien se sabe que un [[tau]] pequeno durante una [[DeltaT]] corta solo corrige ligeramente la lectura, mientras que un torque sostenido durante varios segundos destruye la hipotesis central del leaf. Esa estimacion previa impide usar la conservacion de forma ritual.

## Interpretacion

En una aplicacion real, la pregunta importante es si la discrepancia entre [[Li]] y [[Lf]] viene de medir mal [[Ii]] o [[I_final]], o de haber ignorado un torque externo. El leaf es valioso precisamente porque separa una redistribucion geometrica interna de una ruptura autentica de la conservacion, y porque obliga a integrar el balance conservativo con [[tau]], [[DeltaL]] y [[DeltaT]] en una sola historia fisica coherente.