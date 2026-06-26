# Ejemplo tipo examen

## Enunciado

Una rueda de radio [[R]] rueda sin deslizar sobre una superficie horizontal. Su velocidad angular es [[omega]]. Explica por qué la rodadura combina traslación y rotación, y calcula la velocidad del centro de masas [[v_cm]].

## Datos

Se conocen [[R]] y [[omega]]. Se asume que el radio es constante y que el contacto no desliza. También puede describirse el giro mediante [[theta]] y, si cambia la velocidad, mediante [[alpha]] y [[a_cm]].

## Definición del sistema

El sistema es la rueda rígida. El centro de masas avanza sobre una línea horizontal y todos los puntos de la rueda giran alrededor del centro. El punto inferior está instantáneamente en reposo respecto al suelo.

## Modelo físico

El modelo físico está anclado a la condición de rodadura, [[v_cm]], [[omega]] y [[R]]. No resolvemos una traslación aislada ni una rotación aislada: resolvemos el acoplamiento impuesto por el contacto sin deslizamiento.

## Justificación del modelo

El enunciado dice sin deslizar, por tanto es válido usar la condición ideal de rodadura. Se asume sólido rígido, radio constante y superficie fija. Si la rueda patinara, la relación dejaría de ser válida.

## Resolución simbólica

La condición de rodadura es:

{{f:condicion_rodadura_puente}}

Esta ecuación expresa la condición de rodadura. Traduce la rapidez angular en rapidez lineal del centro. Si se estudian aceleraciones, la misma lógica conecta [[a_cm]] con [[alpha]] por medio de [[R]].

Para un avance acumulado, se usa también la relación de desplazamiento angular-lineal: el ángulo [[theta]] girado reconstruye la distancia recorrida por el centro cuando se multiplica por el radio. Si la rueda da dos vueltas completas, el centro avanza dos circunferencias. Esta segunda relación confirma que el puente no vale solo para velocidades instantáneas, sino también para desplazamientos.

## Sustitución numérica

Si [[R]] de 0,30 m y

{{f:condicion_rodadura_puente}}

, entonces [[v_cm]] de 3,0 m/s. El orden de magnitud es razonable para una rueda pequeña de laboratorio o una rueda de bicicleta moviéndose despacio.

## Validación dimensional

El radián es adimensional, de modo que rad/s multiplicado por metros produce metros por segundo. La validación dimensional confirma que [[R]] es el factor que convierte giro en avance.

## Interpretación física

El resultado significa que la rueda avanza porque gira y no desliza. Si aumenta [[omega]] con [[R]] fijo, [[v_cm]] aumenta. Si aumenta [[R]] con [[omega]] fijo, el centro avanza más por cada giro. Esto implica que el puente físico no está en los símbolos, sino en el contacto.

# Ejemplo de aplicación real

## Contexto

En una bicicleta, el ciclista puede observar la rueda girando y la bicicleta avanzando. La rodadura como puente explica por qué esas dos observaciones no son independientes cuando no hay derrape.

## Estimación física

Para una rueda de radio aproximado 0,35 m que gira a 20 rad/s, la velocidad del centro está en torno a 7 m/s. Esa estimación física usa orden de magnitud y permite detectar errores: si alguien obtuviera 700 m/s, habría mezclado unidades o radio.

## Interpretación

La lectura real es que el suelo impone una restricción. La rueda no solo gira; el giro se convierte en avance del centro. Si aparece barro, hielo o frenada con bloqueo, la relación entre [[v_cm]] y [[omega]] deja de cerrar el movimiento y debe usarse un modelo con deslizamiento.

La estimación también puede contrastarse con vídeo: se mide cuánto avanza el centro y cuántas vueltas da una marca en el borde. Si ambas lecturas no coinciden, la diferencia no es ruido matemático; es una señal física de deslizamiento, radio efectivo mal medido o escala de vídeo incorrecta. Así el ejemplo conecta fórmula, gráfico y observación.

Supón ahora que el vídeo muestra que la marca de la rueda completa cinco vueltas mientras el centro avanza unos 9,4 m y el radio es 0,30 m. Cinco vueltas equivalen a un ángulo total de diez pi radianes, y el avance previsto es cercano a 9,4 m. La coincidencia confirma que el puente funciona. Si el centro hubiera avanzado solo 6 m, el giro observado no bastaría para defender rodadura ideal.

La conclusión del ejemplo no es únicamente una velocidad de tres metros por segundo. La conclusión física es que el mismo movimiento puede leerse desde el centro y desde el borde. Cuando ambas lecturas coinciden, traslación y rotación forman un único modelo de rodadura. Cuando no coinciden, deben tratarse como movimientos parcialmente desacoplados y aparece la necesidad de estudiar rozamiento, pérdidas o deformación.

El mismo procedimiento sirve si la rueda acelera. Se mide cómo cambia [[omega]], se usa [[R]] para inferir el cambio de [[v_cm]] y se contrasta con el avance del centro. Si el centro acelera menos de lo que predice el giro, el contacto no está transmitiendo el movimiento como exige la rodadura ideal. Esta lectura transforma una fórmula elemental en una prueba experimental.

Por último, el ejemplo muestra por qué la rodadura es un puente y no un tema aislado. Desde la traslación se obtiene una distancia o velocidad del centro; desde la rotación se obtiene ángulo o velocidad angular; desde el contacto se decide si ambas lecturas representan el mismo movimiento. Sin esa tercera pieza, las dos primeras pueden coexistir sin estar acopladas.