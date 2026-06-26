const e=`# Ejemplo tipo examen

## Enunciado

Un bloque de [[m]] = 10 kg se desliza sobre una superficie horizontal rugosa. El coeficiente de rozamiento cinetico es [[mu]] = 0,47 y el bloque recorre [[d]] = 15 m hasta detenerse. Toma [[g]] = 9,8 m/s^2. Calcula [[fr]], [[Wr]], [[Edis]] y [[Pdis]] si el proceso dura [[t]] = 5 s.

La pregunta no es solo numerica: hay que distinguir el trabajo firmado del rozamiento de la energia disipada positiva. Si se mezclan esas dos lecturas, el balance energetico queda con el signo cambiado.

## Datos

Datos directos: [[m]] = 10 kg, [[mu]] = 0,47, [[d]] = 15 m, [[g]] = 9,8 m/s^2 y [[t]] = 5 s. La superficie es horizontal y no se menciona ninguna fuerza vertical adicional, por lo que la normal [[N]] puede calcularse a partir del peso.

Magnitudes objetivo: [[fr]] para medir la intensidad del contacto, [[Wr]] para cerrar el balance mecanico con signo, [[Edis]] para expresar la energia transformada y [[Pdis]] para estimar el ritmo de disipacion.

## Definición del sistema

Tomamos como sistema el bloque. La mesa y el entorno quedan fuera del sistema, de modo que el rozamiento realiza trabajo externo sobre el bloque. Con esta eleccion, la energia mecanica del bloque disminuye y el trabajo del rozamiento debe aparecer negativo.

Si el sistema incluyera tambien mesa y entorno termico, la energia total no desapareceria; cambiaria de forma. Esta decision de sistema explica por que [[Wr]] y [[Edis]] no llevan el mismo signo.

## Modelo físico

El contacto se modela como rozamiento seco de Coulomb. La fuerza de rozamiento depende de [[mu]] y [[N]]:

{{f:fuerza_rozamiento_cinetico}}

Como el bloque desliza una distancia [[d]] y el rozamiento se opone al movimiento, el trabajo se calcula con:

{{f:trabajo_rozamiento}}

La energia disipada se informa como cantidad positiva:

{{f:energia_disipada_rozamiento}}

Y la potencia media se obtiene con:

{{f:potencia_disipada_media}}

## Justificación del modelo

El modelo es defendible porque el enunciado describe una superficie horizontal rugosa, un coeficiente constante y un tramo de deslizamiento. No hay indicios de lubricacion, rodadura, arrastre dominante ni calentamiento capaz de cambiar [[mu]] durante el recorrido.

Tambien es importante que se pide una estimacion energetica global, no una simulacion microscopica del contacto. Por eso basta con [[fr]], [[d]] y [[t]] para describir la disipacion media.

## Resolución simbólica

En horizontal, la normal se calcula como [[N]] = [[m]][[g]]. Luego se obtiene [[fr]] desde el modelo de Coulomb. Con [[fr]] y [[d]], el trabajo del rozamiento es negativo porque fuerza y desplazamiento tienen sentidos opuestos.

La cadena simbolica queda asi: primero [[N]], despues [[fr]], despues [[Wr]], despues [[Edis]] y finalmente [[Pdis]]. Esta secuencia evita usar energia disipada antes de haber fijado el signo del trabajo.

El balance mecanico que organiza la perdida entre estado inicial y final es:

{{f:balance_energia_mecanica_disipacion}}

En este ejemplo el balance sirve como comprobacion: si el bloque termina con menos energia mecanica, [[Wr]] debe explicar esa diferencia con signo negativo.

## Sustitución numérica

La normal vale [[N]] = 10 x 9,8 = 98 N. La fuerza de rozamiento es [[fr]] = 0,47 x 98 = 46,06 N.

El trabajo es [[Wr]] = -46,06 x 15 = -690,9 J. La energia disipada es [[Edis]] = -[[Wr]] = 690,9 J. La potencia media disipada vale [[Pdis]] = 690,9 / 5 = 138,18 W.

## Validación dimensional

La fuerza [[fr]] queda en newton porque [[mu]] es adimensional y [[N]] se mide en newton. El trabajo [[Wr]] queda en julios porque newton por metro equivale a julio. La potencia [[Pdis]] queda en vatios porque julio dividido por segundo equivale a vatio.

El signo tambien valida el resultado: [[Wr]] es negativo para el bloque, mientras [[Edis]] es positiva. Si ambos salieran positivos sin cambiar el sistema, habria un error conceptual.

## Interpretación física

El bloque pierde 690,9 J de energia mecanica. Esa energia no se destruye; se reparte en calentamiento, vibracion y deformacion microscopica de las superficies. El valor de [[Pdis]] indica que la disipacion no es solo una perdida total, sino tambien un proceso con ritmo temporal.

El resultado seria mayor si aumentaran [[mu]], [[N]] o [[d]]. Seria mas peligroso termicamente si el mismo [[Edis]] ocurriera en menos [[t]], porque entonces [[Pdis]] creceria.

# Ejemplo de aplicación real

## Contexto

Un coche de [[m]] = 1200 kg circula a 16,7 m/s y frena hasta detenerse en carretera horizontal. Suponemos [[mu]] = 0,80, [[g]] = 9,8 m/s^2 y una frenada ideal donde la perdida de energia mecanica se atribuye al rozamiento. Se pide estimar la distancia de frenado y la energia disipada.

Este caso conecta con seguridad vial: no basta con decir que el coche se para; hay que cuantificar cuanta energia mecanica se degrada y durante que distancia se reparte.

## Estimación física

La energia mecanica inicial [[Emi]] es la energia cinetica: 0,5 x 1200 x 16,7^2 = 167334 J. Al terminar en reposo al mismo nivel, [[Emf]] = 0 J. El balance con disipacion es:

{{f:balance_energia_mecanica_disipacion}}

De ahi sale [[Wr]] = -167334 J. Para una carretera horizontal, el trabajo de rozamiento se escribe:

{{f:trabajo_rozamiento_horizontal}}

Por tanto [[d]] = 167334 / (0,80 x 1200 x 9,8) = 17,8 m. La variacion de energia mecanica queda:

{{f:variacion_energia_mecanica_rozamiento}}

Y la energia disipada asociada se lee mediante:

{{f:energia_disipada_rozamiento}}

La estimacion cuantitativa se interpreta por escala: 167 kJ no es una energia pequena para un contacto neumatico-carretera, pero repartida en 17,8 m permite una desaceleracion plausible. Si la misma energia tuviera que disiparse en mucha menos distancia, aumentarian fuerza, temperatura y riesgo de perdida de adherencia.

## Interpretación

La frenada convierte aproximadamente 167 kJ de energia mecanica en calor y deformaciones en el contacto neumatico-carretera y en el sistema de frenos. El modelo explica por que aumentar [[mu]] reduce la distancia: permite un trabajo disipativo de mayor modulo por metro recorrido.

Tambien muestra el limite didactico: si el asfalto esta mojado, las ruedas bloquean o el sistema ABS modula la fuerza, [[mu]] deja de ser un numero fijo. Entonces el resultado sigue siendo una referencia util, pero no una prediccion completa de ingenieria.
`;export{e as default};
