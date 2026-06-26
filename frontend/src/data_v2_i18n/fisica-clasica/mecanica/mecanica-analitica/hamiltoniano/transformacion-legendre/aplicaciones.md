# Aplicaciones de la transformacion de Legendre

## 1. Oscilador mecanico en espacio de fases

La aplicacion mas directa aparece al transformar el oscilador masa-muelle desde su descripcion lagrangiana hacia una descripcion hamiltoniana. En lugar de seguir solo la posicion en funcion del tiempo, se estudia el plano formado por [[qi]] y [[p]].

Esta lectura permite comparar amplitudes, energia y sentido de movimiento sin resolver de nuevo toda la trayectoria. Dos puntos con igual posicion pueden corresponder a avance o retroceso segun el signo del momento, y eso queda visible en el retrato de fase. Para el alumno, el beneficio es entender que el estado mecanico no queda fijado por la posicion aislada; para el profesor, el beneficio es disponer de una representacion compacta de todo el movimiento.

Variable dominante: [[p]], porque permite distinguir estados con la misma posicion y sentidos de movimiento opuestos.

Límite de validez: el muelle debe poder modelarse con energia potencial [[V]] conservativa y la masa efectiva [[m]] debe ser aproximadamente constante.

## 2. Enseñanza de retratos de fase

Para un profesor, la transformacion permite justificar por que un retrato de fase no es un dibujo arbitrario. Cada punto del retrato contiene una coordenada y un momento conjugado; esa pareja procede de una transformacion regular desde [[L]].

Esto evita presentar el plano de fase como una tecnica separada del lagrangiano. La clase puede avanzar desde energia cinetica y potencial hacia lagrangiano, despues hacia momento conjugado y finalmente hacia hamiltoniano. Asi el grafico no aparece como una receta nueva, sino como la consecuencia visual de haber elegido variables naturales para el estado.

Variable dominante: [[H]], porque las curvas de nivel del hamiltoniano muestran familias de estados con la misma energia en modelos conservativos.

Límite de validez: si [[H]] no coincide con energia mecanica, las curvas de nivel deben interpretarse como niveles de la funcion hamiltoniana, no necesariamente como energia total observable.

## 3. Sistemas con coordenadas generalizadas

En pendulos, rotaciones y sistemas con ligaduras, el momento conjugado no siempre es momento lineal. La transformacion de Legendre obliga a calcular [[p]] desde [[DLv]], evitando copiar una formula cartesiana que no corresponde.

La aplicacion es especialmente importante en coordenadas angulares. El momento conjugado puede ser un momento angular o una combinacion dependiente de la geometria. Esta diferencia ayuda a detectar errores de unidades y de interpretacion: no se debe exigir kg m/s si la coordenada elegida no es una distancia lineal.

Variable dominante: [[qi]], porque la naturaleza de la coordenada determina las unidades y el significado del momento conjugado.

Límite de validez: las coordenadas elegidas deben describir correctamente la configuracion y no introducir singularidades en la region estudiada.

## 4. Analisis de estabilidad

Una vez construido [[H]], muchas preguntas de estabilidad se reformulan como estudio de la geometria de una funcion en espacio de fases. Minimos, puntos estacionarios y curvas de nivel ofrecen informacion cualitativa antes de resolver ecuaciones completas.

En problemas de equilibrio, esta lectura permite decidir si una perturbacion pequeña queda confinada alrededor de un punto o si se aleja de el. El hamiltoniano aporta una superficie de referencia: los estados cercanos se comparan por como cambia su valor y por la forma de sus curvas de nivel. La transformacion de Legendre es necesaria porque esa geometria requiere momentos, no solo velocidades.

Variable dominante: [[H]], porque organiza la dinamica y permite comparar estados cercanos.

Límite de validez: la lectura energetica simple exige un sistema regular y conservativo; en sistemas forzados o disipativos hay que usar modelos extendidos.

## 5. Puente hacia fisica moderna

La mecanica cuantica y la mecanica estadistica usan variables conjugadas de forma sistematica. La transformacion de Legendre prepara esa idea mostrando que posicion y momento no son simples datos independientes añadidos a mano, sino variables relacionadas por una estructura dinamica.

En mecanica estadistica, los estados se cuentan en espacio de fases. En mecanica cuantica, la relacion entre coordenada y momento se vuelve aun mas profunda. Estudiar la transformacion clasica permite entrar en esos temas con una intuicion precisa: las variables conjugadas no son un vocabulario arbitrario, sino una forma de reorganizar la informacion fisica.

Variable dominante: [[p]], porque actua como variable conjugada y anticipa el papel de pares canonicos.

Límite de validez: la mecanica clasica describe estados definidos simultaneamente por coordenada y momento; en fisica cuantica esa lectura se modifica, aunque la estructura formal conserve una huella clara.

## Cierre aplicado

La transformacion de Legendre sirve para decidir cuando el lenguaje hamiltoniano es una reformulacion fiel del lagrangiano. Sus aplicaciones no consisten en memorizar otra formula, sino en saber pasar de velocidades a momentos, comprobar regularidad y usar [[H]] para razonar sobre estados, conservacion y geometria de la dinamica.

El criterio final es operativo: si el problema requiere trayectorias con ligaduras, el lenguaje lagrangiano suele ser el punto de entrada; si requiere comparar estados, estabilidad o estructura de fase, la transformacion hacia [[H]] se vuelve natural. Esa eleccion de lenguaje es una competencia fisica, no solo matematica.
