## 1. Radar de adelantamiento en autopista

Un sistema de radar embarcado en un coche patrulla debe decidir si el vehiculo de delante realmente se aleja o si ambos coches avanzan casi juntos. El dato operativo no es solo la velocidad respecto a la carretera, sino [[v_rel]] entre los dos coches, porque esa magnitud decide si hay aproximacion, alejamiento o reposo mutuo. La aplicacion obliga a distinguir la velocidad leida por el radar del coche patrulla de la velocidad que ambos vehiculos tienen respecto al suelo.

En esta situacion, la velocidad relativa puede ser pequena aunque ambos coches circulen a \(120\;\text{km/h}\). Ese detalle cambia por completo la lectura de seguridad. Un conductor humano o un sistema ADAS no frena por la velocidad absoluta del coche de delante, sino por la velocidad con la que la distancia entre ambos cambia en el tiempo. La utilidad del leaf es convertir esa intuicion en una magnitud medible y defendible.

Variable dominante: [[v_rel]] entre el coche patrulla y el vehiculo observado.

Limite de validez: si el adelantamiento ocurre con cambio rapido de carril o con trayectorias curvadas, ya no basta una lectura escalar con signo.

## 2. Navegacion de un barco en un rio

Un barco de mantenimiento debe llegar a una boya mientras el rio arrastra la embarcacion corriente abajo. El piloto controla la velocidad del barco respecto al agua, pero la autoridad del puerto necesita la velocidad respecto a la orilla. Aqui [[v_frame]] es la velocidad de la corriente y [[v_abs]] es la velocidad efectiva de la embarcacion respecto a tierra. La composicion correcta decide si el barco alcanza la boya o deriva por debajo de ella.

Este caso es especialmente valioso porque obliga a separar con nitidez movimiento propio y movimiento del medio. El piloto puede sentir que "apunta bien" respecto al agua y aun asi fallar respecto a la costa. En navegacion real esa diferencia decide trayectorias de atraque, cruces de canal y tiempos de llegada. El leaf deja de ser una cuenta escolar y pasa a ser una herramienta de decision espacial.

Variable dominante: [[v_frame]] aportada por la corriente del rio.

Limite de validez: si la corriente cambia mucho con la posicion o con el tiempo, el modelo de velocidad relativa constante deja de ser suficiente.

## 3. Robot sobre cinta transportadora

En una linea de empaquetado, un robot debe colocar etiquetas sobre cajas que avanzan en una cinta. Para cerrar bien el gesto del brazo importa la velocidad de la caja respecto al robot, no solo su velocidad respecto al suelo de la nave. En esta aplicacion [[v_rel]] permite sincronizar la accion fina, mientras [[v_abs]] sigue siendo necesaria para coordinar toda la linea de produccion.

La riqueza de este escenario es que conviven dos escalas operativas. El ingeniero de planta piensa en productividad global, para lo que mira [[v_abs]] ; el controlador local del robot piensa en error de posicion en el instante de contacto, para lo que necesita [[v_rel]] . Si ambas capas se mezclan, el brazo puede estar perfectamente programado en papel y aun asi fallar de forma sistematica en el gesto final.

Variable dominante: [[v_abs]] de la caja respecto al suelo cuando se sincronizan varias estaciones.

Limite de validez: si se mezclan la velocidad local caja-robot y la velocidad global caja-suelo, el tiempo de contacto sale mal aunque las unidades sean correctas.

## 4. Analisis de video deportivo con camara movil

Una camara montada en una motocicleta sigue a un ciclista en carrera. Para el realizador, el ciclista puede parecer casi quieto en pantalla aunque se mueva rapido respecto a la carretera. La velocidad relativa explica por que la imagen estable no implica reposo real: la camara comparte casi la misma velocidad del ciclista y hace pequena la [[v_rel]] entre ambos.

Este ejemplo muestra muy bien la diferencia entre percepcion visual y descripcion fisica. El espectador puede inferir, por pura intuicion de imagen, que el ciclista avanza lento, cuando en realidad solo ocurre que la camara comparte su movimiento. En analisis deportivo esto importa para interpretar adelantamientos, cambios de ritmo y cierres de sprint sin dejarse enganar por la referencia movil de la grabacion.

Variable dominante: [[v_rel]] entre ciclista y camara.

Limite de validez: si la camara gira o acelera de forma brusca, la lectura simple de velocidad relativa ya no captura toda la geometria de la escena.

## 5. Informacion al pasajero en un tren

Un panel dentro de un tren quiere mostrar a la vez la velocidad del convoy respecto a la via y la velocidad de una persona caminando por el pasillo respecto al propio tren. El sistema debe evitar mezclar ambas cifras como si describieran lo mismo. Aqui la utilidad del leaf no es calcular mas rapido, sino presentar [[v_frame]] y [[v_rel]] con significado claro para que el pasajero no interprete mal la informacion.

El valor de esta aplicacion esta en la comunicacion fisica correcta. Un pasajero puede ver en la pantalla \(250\;\text{km/h}\) para el tren y, al mismo tiempo, caminar a \(1\;\text{m/s}\) dentro del vagon. Ninguno de los dos datos invalida al otro. El leaf sirve para construir interfaces o materiales didacticos que no mezclen observadores y, por tanto, no conviertan una situacion simple en una aparente contradiccion.

Variable dominante: la separacion conceptual entre [[v_frame]] del tren y [[v_rel]] de la persona dentro del vagon.

Limite de validez: si la interfaz no explicita quien observa cada velocidad, el usuario puede leer dos numeros correctos como si fueran incompatibles.
