# Ejemplo tipo examen

## Enunciado

Una particula de masa constante se mueve en una dimension entre dos posiciones fijadas durante un intervalo desde [[t1]] hasta [[t2]]. Se propone una trayectoria candidata [[qi]] y se quiere explicar, sin resolver todos los detalles numericos, que condicion debe cumplir para ser la trayectoria fisica dentro de un modelo lagrangiano conservativo. Se pide identificar [[S]], interpretar [[deltaS]] y escribir el criterio local sobre [[Ri]].

## Datos

- El sistema se describe con una unica coordenada generalizada [[qi]].
- La velocidad asociada es [[qdi]].
- El lagrangiano [[L]] ya contiene la energia cinetica y la interaccion conservativa.
- Los extremos temporales [[t1]] y [[t2]] permanecen fijados.
- Las variaciones virtuales respetan los extremos de la trayectoria.

## Definición del sistema

El sistema no se define por una fuerza cartesiana aislada, sino por un lagrangiano [[L]] evaluado sobre trayectorias candidatas. Cada trayectoria admisible conecta los mismos extremos, pero puede tener forma intermedia distinta. La comparacion fisica se hace sobre el camino completo.

## Modelo físico

La accion de cada trayectoria se calcula con:

{{f:accion_lagrangiana}}

El criterio variacional de seleccion es:

{{f:condicion_accion_estacionaria}}

Al convertir ese criterio en una condicion local se obtiene:

{{f:residuo_variacional_euler_lagrange}}

Y la trayectoria fisica conservativa cumple:

{{f:ecuacion_euler_lagrange_desde_accion}}

## Justificación del modelo

El modelo es adecuado porque el enunciado fija extremos y usa un lagrangiano conservativo. Eso permite comparar trayectorias sin cambiar el problema. Si los extremos no estuvieran fijados, o si existiera una fuerza no potencial externa no incluida en [[L]], no bastaria con imponer [[Ri]]=0.

La lectura fisica es que [[S]] asigna un numero a cada trayectoria candidata. La trayectoria correcta no se reconoce por el valor absoluto de [[S]], sino porque al perturbarla ligeramente mediante una variacion admisible, el cambio de primer orden [[deltaS]] se anula.

## Resolución simbólica

Primero se construye la accion:

{{f:accion_lagrangiana}}

Despues se impone estacionariedad:

{{f:condicion_accion_estacionaria}}

Esa condicion obliga a que el residuo local sea:

{{f:residuo_variacional_euler_lagrange}}

Finalmente, para un sistema conservativo sin fuerza generalizada externa, se exige:

{{f:ecuacion_euler_lagrange_desde_accion}}

La resolucion no necesita conocer la forma concreta de [[L]] para explicar la estructura. Lo que se obtiene es el filtro que cualquier trayectoria fisica debe superar.

## Sustitución numérica

Supongamos que una trayectoria candidata produce una accion de orden 12 J s en el intervalo, y una trayectoria cercana produce 12.03 J s cuando se introduce una variacion de amplitud pequena. Ese dato aislado no demuestra estacionariedad; falta comprobar si el cambio lineal desaparece al hacer tender la amplitud de variacion a cero.

Si en cambio el calculo simbolico del residuo da [[Ri]]=0 para todo instante del intervalo, la trayectoria pasa la prueba local. La sustitucion numerica sirve como control de escala, pero el criterio fisico principal sigue siendo la anulacion de [[deltaS]] y del residuo variacional.

## Validación dimensional

[[L]] tiene unidad de julio y el diferencial temporal aporta segundos, por lo que [[S]] tiene unidad J s. La primera variacion [[deltaS]] conserva esa unidad. El residuo [[Ri]] tiene la unidad de la fuerza generalizada asociada a [[qi]], que puede ser newton si [[qi]] es longitud o torque si [[qi]] es angulo.

## Interpretación física

El resultado significa que la trayectoria fisica no es una curva cualquiera que une los extremos. Es una curva para la cual las desviaciones virtuales admisibles no mejoran ni empeoran la accion a primer orden. Esa idea es mas robusta que decir que el camino es el mas corto o el de menor energia.

Tambien muestra por que las ecuaciones de Lagrange tienen autoridad fisica. No son una receta desconectada: son la expresion local de un principio global. Si el alumno calcula [[Ri]] y obtiene algo distinto de cero, no ha encontrado la trayectoria fisica del modelo.

# Ejemplo de aplicación real

## Contexto

Un profesor quiere introducir el pendulo simple sin empezar por componentes de tension y peso. Plantea el movimiento mediante una coordenada angular [[qi]] y construye un lagrangiano [[L]] con energia cinetica rotacional efectiva y energia potencial gravitatoria.

## Estimación física

Para pequenas oscilaciones, el movimiento ocurre en tiempos del orden de un segundo y las energias pueden estar entre decimas y unidades de julio en un montaje de laboratorio. Por tanto, [[S]] puede tener orden de J s. Ese valor no se interpreta como energia almacenada; indica la escala de la comparacion entre trayectorias angulares.

Si una trayectoria angular ensayada no respeta los extremos, queda fuera del conjunto admisible. Si los respeta pero produce un residuo [[Ri]] no nulo, tampoco representa el movimiento fisico. La estimacion ayuda a detectar resultados absurdos, por ejemplo acciones enormes para un pendulo pequeno sin velocidades grandes.

## Interpretación

La aplicacion real es didactica: el profesor puede mostrar que el pendulo no se resuelve eligiendo una curva bonita para el angulo. Se escribe [[L]], se forma [[S]], se impone [[deltaS]]=0 y aparece la ecuacion de movimiento. La tension de la cuerda no necesita resolverse como incognita principal porque la coordenada angular ya incorpora la ligadura.

El alumnado aprende que una buena coordenada reduce el problema y que el principio variacional explica por que esa reduccion es legitima. Despues, cuando estudie ecuaciones de Lagrange, reconocera que la formula local es la consecuencia operativa de este criterio global.
