## 1. Diseno de orbita baja para observacion terrestre
En observacion terrestre, la altura elegida determina frecuencia de revisita, calidad espacial y costo operacional. El equipo parte de un objetivo fisico concreto: observar la misma zona con alta frecuencia sin saturar combustible de mantenimiento. Para eso compara radios orbitales cercanos y usa velocidad circular como restriccion dinamica principal.

La hipotesis dominante es trabajar con modelo central ideal en fase preliminar. Esta simplificacion permite detectar rapidamente alternativas inviables antes de simulacion detallada. La interpretacion fisica clave es que al aumentar [[r]] disminuye [[v_orb]], pero aumenta [[T]], por lo que una mejora en cobertura continua puede venir con peor ritmo de revisita.

Variable dominante: [[r]]
Límite de validez: La conclusion deja de ser suficiente cuando arrastre atmosferico y perturbaciones acumuladas condicionan la mision por encima del margen tolerado.

En una revision tecnica, esta aplicacion tambien obliga a separar altura operacional y radio dinamico. El valor que entra en las relaciones orbitales no es solo la distancia sobre la superficie, sino la distancia al centro de masa. Esa comprobacion evita que una decision de diseno parezca razonable por una conversion geometrica incompleta.

## 2. Planeacion de transferencia entre orbitas circulares
En una transferencia entre dos orbitas, la diferencia de velocidades orbitales define el costo de maniobra. No basta conocer radios inicial y final; hace falta interpretar como cambia el estado dinamico y energetico entre tramos. Esta aplicacion usa [[v_orb]] para estados circulares y vis viva para lectura intermedia.

La simplificacion dominante es separar fase de impulsos ideales de la fase de propagacion detallada. Fisicamente, la maniobra existe porque cada radio exige distinta rapidez de equilibrio. La interpretacion correcta evita dos errores: suponer variacion lineal con distancia y confundir velocidad circular con umbral de escape.

Variable dominante: [[v_orb]]
Límite de validez: El enfoque preliminar falla cuando se requieren modelos con empuje continuo, restricciones de actitud o perturbaciones fuertes durante la transferencia.

La utilidad del leaf en este caso es didactica y operativa: muestra por que la velocidad circular de partida, la velocidad instantanea en la transferencia y el umbral de escape pertenecen a lecturas distintas. Una maniobra bien planteada no mezcla esas magnitudes como si fueran intercambiables.

## 3. Sincronizacion de satelites en constelaciones
En constelaciones, pequenas diferencias de velocidad generan derivas de fase que se acumulan con el tiempo. La aplicacion practica consiste en ajustar insercion y correcciones para mantener separacion angular prevista entre plataformas. Aqui, la magnitud operacional critica no es solo velocidad instantanea, sino el periodo asociado.

La hipotesis dominante es que todos los satelites comparten la misma fuente central y un regimen cercano a circular en el horizonte de control. La interpretacion fisica principal es que variaciones pequenas en [[T]] alteran significativamente ventanas de cobertura y enlaces con estaciones.

Variable dominante: [[T]]
Límite de validez: Debe ampliarse modelo cuando la deriva por perturbaciones diferenciales supera la capacidad de correccion de la constelacion.

En operaciones reales, este analisis se combina con tolerancias de fase y ventanas de comunicacion. La velocidad orbital permite estimar la tendencia inicial, mientras que el periodo traduce esa tendencia a consecuencias de servicio: perdida de sincronizacion, necesidad de correcciones o redistribucion de satelites.

## 4. Analisis rapido de viabilidad para mision lunar o marciana
Al cambiar de cuerpo central, el esquema fisico se mantiene, pero cambian escalas por [[M]] y [[mu]]. Esta aplicacion permite trasladar intuicion sin copiar numeros de Tierra. En evaluacion inicial se estiman velocidades y periodos para alturas candidatas y se verifica plausibilidad de operaciones.

La simplificacion dominante es usar campo central ideal para primera criba de escenarios. La lectura fisica importante es que una misma altura absoluta puede implicar regimenes orbitales muy diferentes en cuerpos con distinta masa. Esto cambia tiempos de orbita, ventanas de comunicacion y coste energetico.

Variable dominante: [[mu]]
Límite de validez: Se requiere modelo extendido cuando objetivos cientificos exigen precision fina de trayectoria o hay perturbaciones locales relevantes.

## 5. Diagnostico de telemetria orbital inconsistente
Cuando la telemetria no coincide con prediccion, la velocidad orbital sirve como prueba diagnostica inicial. Se comparan valores esperados y medidos para detectar si el problema es de datos, de conversion de unidades o de modelo fisico insuficiente. Esta aplicacion reduce tiempo de respuesta en operaciones.

La hipotesis dominante es usar el modelo ideal como linea base de coherencia. La interpretacion fisica se centra en causalidad: si [[v_orb]] y [[T]] no respetan tendencia esperada con [[r]], hay inconsistencia que debe rastrearse antes de ejecutar correcciones costosas.

Variable dominante: [[E]]
Límite de validez: El diagnostico base no reemplaza una propagacion completa cuando hay maniobras activas o perturbaciones no modeladas de alta magnitud.

## 6. Divulgacion cientifica y alfabetizacion espacial
En comunicacion publica, explicar velocidad orbital ayuda a desmontar ideas erradas sobre satelites y gravedad. Esta aplicacion transforma relaciones fisicas en mensajes comprensibles para no especialistas, sin perder rigor conceptual. Se discute por que no todos los satelites van igual de rapido y por que orbitar no equivale a escapar.

La simplificacion dominante es usar casos de referencia con escalas conocidas para construir intuicion de orden de magnitud. La interpretacion fisica final conecta dinamica, energia y geometria en lenguaje accesible.

Variable dominante: [[v_escape]]
Límite de validez: La simplificacion divulgativa no debe usarse para decisiones tecnicas de navegacion sin volver al marco cuantitativo completo.
