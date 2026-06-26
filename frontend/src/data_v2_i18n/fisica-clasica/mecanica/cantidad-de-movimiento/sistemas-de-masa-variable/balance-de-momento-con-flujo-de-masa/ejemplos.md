# Ejemplo tipo examen

## Enunciado

Una cinta transportadora horizontal recibe arena desde una tolva vertical y debe seguir moviendose a velocidad [[v]] constante. El problema no consiste solo en obtener un numero, sino en decidir si el frenado observado nace de una fuerza externa mal estimada o del hecho de que entra masa [[m]] con momento [[P]] horizontal distinto al de la cinta. El leaf obliga a leer el montaje como un sistema abierto y a justificar por que la ecuacion de p describe mejor la escena que la forma cerrada de la segunda ley.

## Datos

La cinta y su carro portador tienen masa instantanea [[m]] de 40 kg y se desplazan con velocidad [[v]] de 2.0 m/s hacia la derecha. La arena entra a un caudal [[mdot]] de 5.0 kg/s. Antes del contacto, la velocidad horizontal de la arena es cero; por tanto, en el marco de la cinta la velocidad relativa [[u]] horizontal de entrada vale -2.0 m/s. El regimen observado es estacionario: durante el intervalo analizado la velocidad de la cinta no cambia apreciablemente, de modo que [[dPdt]] puede tomarse igual a cero.

## Definicion del sistema

El sistema elegido no es "la cinta mas toda la arena del laboratorio", sino el cuerpo formado por cinta mas arena ya adherida a ella dentro de una frontera que se mueve con la propia banda. Esa frontera deja entrar masa desde la tolva y deja fuera el soporte fijo, el motor y la estructura del suelo. La eleccion es crucial porque el leaf estudia justamente que ocurre cuando la masa cruza la frontera del sistema. Si se eligiera un sistema cerrado mas grande, el mecanismo dominante se esconderia; si se eligiera solo un grano aislado, se perderia la lectura global de [[P]] y de la fuerza que debe compensar el motor.

## Modelo fisico

El modelo fisico minimo usa dos piezas. Primero, [[P]] = [[m]]·[[v]] resume el momento del subsistema y permite reconstruir la velocidad cuando se conoce el momento total. Segundo, la ecuacion de p escribe que el cambio temporal del momento del cuerpo seguido satisface la relacion entre fuerza externa y transporte de flujo.

{{f:balance}}

En esta notacion, la fuerza externa [[Fext]] es la accion horizontal neta que el motor y el soporte ejercen sobre la cinta, mientras que el termino de flujo [[u]]·[[mdot]] representa el transporte de momento asociado a la masa entrante. La aceleracion instantanea [[dvdt]] del sistema indica cuanto cambia la velocidad: en regimen estacionario, [[dvdt]] = 0 y la fuerza del motor equilibra exactamente el deficit de momento. El modelo es adecuado porque la arena llega casi vertical, la lectura se hace en una sola direccion y no se necesita resolver toda la dinamica interna del contacto grano a grano.

## Justificacion del modelo

La justificacion fisica debe explicar por que la frontera abierta es razonable. Aqui lo es porque la masa entra de forma continua, la velocidad de la cinta apenas cambia en el intervalo y la pregunta central es cuanta accion externa necesita el sistema para no frenar. Tambien hay que justificar el signo de la velocidad relativa: como la arena entra con velocidad horizontal menor que la de la cinta, en el marco del sistema la masa entrante llega hacia atras y disminuye la capacidad de movimiento horizontal del conjunto. Si se ignorara ese punto y se usara solo la segunda ley en forma cerrada, el problema pareceria indicar que no hace falta ninguna fuerza porque la aceleracion es casi cero, lo cual contradice la experiencia del motor.

## Resolucion simbolica

La resolucion simbolica empieza con la magnitud de estado [[P]] = [[m]]·[[v]]. La tasa de cambio del momento [[dPdt]] es el dato decisivo: en regimen estacionario [[dPdt]] = 0, y entonces

{{f:balance}}

se reduce a una condicion de compensacion entre [[Fext]] y el flujo de momento [[u]]·[[mdot]]. La aceleracion [[dvdt]] del sistema es cero, lo que confirma que el motor equilibra el deficit de momento entrante.

El empuje neto [[Ft]] que ejerce el flujo sobre el sistema queda descrito por

{{f:balance}}

Como caso limite, sin fuerzas externas, integrando la ecuacion de p sobre la variacion de masa se obtiene la ganancia total de velocidad [[Delta_v]] con masa inicial [[m0]], masa final [[mf]] y velocidad de exhaust [[ve]]:

{{f:tsiolkovsky}}

## Sustitucion numerica

Primero se calcula el momento del subsistema para fijar escala. Con [[m]] igual a 40 kg y [[v]] igual a 2,0 m/s, el momento [[P]] resulta 80 kg·m/s. Si alguien entregara el momento medido en vez de la velocidad, el cociente P/m devolveria de nuevo el mismo valor de [[v]], lo que confirma que la velocidad usada es coherente con la masa instantanea elegida.

Despues se aplica el despeje de [[Fext]]. Con [[dPdt]] nulo, [[u]] igual a -2,0 m/s y [[mdot]] igual a 5,0 kg/s, el calculo directo arroja [[Fext]] igual a 10 N.

La cinta necesita una fuerza externa neta [[Fext]] de 10 N hacia delante para mantener velocidad constante. Si el motor entregara menos, el termino [[u]]·[[mdot]] no quedaria compensado y la ecuacion de p daria [[dPdt]] negativo: el momento horizontal del sistema empezaria a caer. Si entregara exactamente esos 10 N, el flujo de momento entrante quedaria neutralizado y la velocidad se mantendria.

## Validacion dimensional

La validacion dimensional obliga a comprobar que [[P]] quede en kg·m/s, que [[dPdt]] y [[Fext]] queden en N, y que [[u]]·[[mdot]] produzca tambien N porque combina m/s con kg/s. Esa coincidencia no es decorativa: muestra que el termino de flujo puede competir directamente con una fuerza externa en el p. Tambien hay que validar el signo. Un [[u]] negativo no significa "velocidad negativa absurda", sino que la arena entra con menos velocidad horizontal que la frontera del sistema.

## Interpretacion fisica

El resultado [[Fext]] igual a 10 N significa que el motor no esta venciendo una fuerza de rozamiento misteriosa. Indica algo mas concreto: cada segundo entran 5 kg de arena que deben pasar de velocidad horizontal cero a 2 m/s. Ese cambio de momento por segundo equivale exactamente a 10 N. La cinta no se frena porque su masa sea variable de forma abstracta, sino porque la masa que entra trae un deficit de momento horizontal respecto al subsistema. Por tanto, si el flujo entrara ya con la misma velocidad horizontal que la cinta, la velocidad relativa seria cero y la fuerza adicional del motor desaparece por esta causa concreta. Esto implica que la lectura conjunta de la fuerza externa [[Fext]] y del termino de flujo [[u]]·[[mdot]] es lo que da coherencia fisica al p.

# Ejemplo de aplicacion real

## Contexto

En una linea industrial real, una cinta alimentada por tolva trabaja con sensores de caudal, tacometros y consumo electrico del motor. El ingeniero no quiere solo "resolver una ecuacion", sino decidir si un aumento de corriente del motor se explica por mayor [[mdot]], por cambio de [[u]], o por una averia mecanica externa. El p de momento con flujo de masa es util porque separa esas historias fisicas en terminos que pueden auditarse por separado.

## Estimacion fisica

Antes de calcular, ya puede anticiparse que si entra mas arena por segundo, la cinta necesitara mas esfuerzo incluso sin cambiar de velocidad. Tambien se espera que el efecto casi desaparezca cuando la arena se deposita con velocidad horizontal parecida a la de la banda. Esa estimacion previa sirve para revisar medidas: si el caudal se duplica y el consumo no cambia nada, probablemente el problema no este en el flujo de masa sino en como se ha definido la frontera o en la lectura del sensor.

## Interpretacion

La decision practica que sale del leaf es clara. Si el motor disponible solo puede aportar 6 N extra, la configuracion actual no mantiene el regimen estacionario y la cinta acabara perdiendo velocidad. Para corregirlo hay tres caminos fisicos distintos: aumentar [[Fext]], reducir [[mdot]] o reducir la diferencia de velocidades que fija [[u]]. Esa es la ventaja de la ecuacion de p: no mezcla todo en una sola "resistencia", sino que muestra que parte del esfuerzo viene del entorno mecanico y que parte viene del momento que la masa entrante debe adquirir al cruzar la frontera del sistema.



