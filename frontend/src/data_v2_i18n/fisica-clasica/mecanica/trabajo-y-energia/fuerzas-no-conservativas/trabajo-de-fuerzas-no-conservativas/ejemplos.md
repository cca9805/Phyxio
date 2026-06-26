# Ejemplo tipo examen

## Enunciado

Un carrito asciende una rampa y un motor realiza trabajo sobre el sistema durante el recorrido. Al inicio tiene [[Ki]] = 120 J y [[Ui]] = 40 J. Al final se mide [[Uf]] = 170 J y [[Kf]] = 35 J. Determina [[Emi]], [[Emf]], [[Wnc]] y [[dEm]]. Explica si el agente no conservativo aporta o retira energia mecanica.

El problema no consiste solo en sumar cantidades. Obliga a comparar estados, leer el signo de [[Wnc]] y comprobar si la historia fisica describe una ganancia o una perdida mecanica.

## Datos

Se conocen las contribuciones energeticas de ambos estados: [[Ki]] = 120 J, [[Ui]] = 40 J, [[Kf]] = 35 J y [[Uf]] = 170 J. La incognita central es [[Wnc]], aunque tambien se piden [[Emi]], [[Emf]] y [[dEm]] para verificar el cierre completo.

La rampa permite que cambie la energia potencial. El motor es el agente no conservativo que puede modificar la energia mecanica total.

## Definición del sistema

El sistema es el carrito. La Tierra se incorpora al modelo potencial gravitatorio mediante [[Ui]] y [[Uf]], mientras que el motor queda fuera del sistema y actua mediante trabajo no conservativo.

Con esta frontera, si [[Wnc]] resulta positivo, la lectura fisica es clara: el motor ha transferido energia mecanica al carrito. Si fuera negativo, el balance indicaria una retirada neta por resistencias o frenado.

## Modelo físico

La energia mecanica inicial se construye con:

{{f:energia_mecanica_inicial_componentes}}

La energia mecanica final se construye con:

{{f:energia_mecanica_final_componentes}}

El cambio global de energia queda ligado al trabajo no conservativo por:

{{f:balance_general_no_conservativo}}

Y la lectura firmada se resume en:

{{f:variacion_energia_mecanica_no_conservativa}}

## Justificación del modelo

El modelo es defendible porque el problema compara dos estados energeticos bien definidos y separa una accion externa concreta: el motor. No hace falta describir la fuerza motor instante a instante; basta su efecto acumulado sobre el balance energetico.

Ademas, las energias iniciales y finales se refieren al mismo sistema y a la misma referencia potencial. Esa coherencia permite interpretar [[Wnc]] como trabajo neto no conservativo sin dobles conteos.

## Resolución simbólica

Primero se calculan las energias mecanicas de ambos estados con las expresiones de componentes. Despues se obtiene el trabajo no conservativo como diferencia entre estados:

{{f:trabajo_no_conservativo_por_estados}}

La misma conclusion se puede escribir como balance general:

{{f:balance_general_no_conservativo}}

Si se quiere conservar a la vista la estructura completa de los dos estados, se emplea:

{{f:relacion_completa_entre_estados}}

Por ultimo, se identifica:

{{f:variacion_energia_mecanica_no_conservativa}}

Esta cadena es importante porque evita despejar [[Wnc]] sin haber comprobado antes la consistencia de [[Emi]] y [[Emf]].

## Sustitución numérica

La energia mecanica inicial resulta de sumar 120 J y 40 J, por lo que [[Emi]] toma el valor de 160 J. La energia mecanica final se obtiene con 35 J y 170 J, de modo que [[Emf]] alcanza 205 J.

Por tanto, [[Wnc]] equivale a la diferencia entre 205 J y 160 J, es decir, 45 J. Como [[dEm]] coincide con [[Wnc]], tambien vale 45 J.

El signo positivo indica que el motor ha aportado energia mecanica neta al sistema.

## Validación dimensional

Todas las magnitudes del balance se expresan en julios. [[Ki]], [[Ui]], [[Kf]], [[Uf]], [[Emi]], [[Emf]], [[Wnc]] y [[dEm]] comparten dimension de energia. La operacion de suma y resta es dimensionalmente coherente.

Tambien hay una validacion conceptual: el carrito termina con mas energia mecanica que al inicio, de modo que [[Wnc]] no puede ser negativo.

## Interpretación física

El resultado significa que el motor no solo compensa la subida de energia potencial, sino que deja al carrito con energia mecanica total mayor que al comienzo. Aunque [[Kf]] sea menor que [[Ki]], el aumento de [[Uf]] es suficientemente grande para que [[Emf]] supere a [[Emi]].

Esto muestra por que conviene usar el balance completo y no juzgar el proceso mirando solo la velocidad. La velocidad final ha disminuido, pero la energia mecanica ha aumentado por el trabajo externo. La magnitud [[Wnc]] permite separar ambas ideas sin contradiccion.

# Ejemplo de aplicación real

## Contexto

Un sistema de elevacion sube una carga y, ademas, vence perdidas mecanicas internas. Al inicio del tramo relevante se tiene [[Ki]] = 0 J y [[Ui]] = 0 J. Al final, la carga posee [[Kf]] = 80 J y [[Uf]] = 980 J. El motor ha realizado [[Wnc]] = 1200 J sobre el sistema.

Se quiere comprobar si los datos son coherentes y estimar cuanta energia mecanica no queda almacenada en el estado final.

## Estimación física

El cierre completo entre estados se expresa mediante:

{{f:relacion_completa_entre_estados}}

Con los datos, la energia final esperada a partir del trabajo externo alcanzaria 1200 J si no hubiera otra contribucion no conservativa. Sin embargo, el estado final disponible suma 80 J y 980 J, por lo que queda en 1060 J.

La diferencia entre el trabajo entregado y la energia mecanica final es de 140 J. Esta estimacion indica que, ademas del aporte del motor, existen perdidas mecanicas internas o resistencias que reducen el saldo final. A escala del balance, esa diferencia no es menor: representa una fraccion apreciable del trabajo entregado.

Tambien puede comprobarse con:

{{f:trabajo_no_conservativo_por_estados}}

Si el sistema final solo conserva 1060 J de energia mecanica y el inicial partia de 0 J, el trabajo no conservativo neto asociado al balance mecanico es [[Wnc]] = 1060 J. Compararlo con los 1200 J entregados por el motor permite distinguir trabajo motor bruto y trabajo no conservativo neto del sistema modelado.

## Interpretación

La estimacion muestra que un dato de motor aislado no basta para cerrar el balance del sistema si hay perdidas adicionales. El balance por estados fuerza a preguntar que trabajo se esta incluyendo dentro de [[Wnc]] y cual queda fuera del modelo.

Fisicamente, el objetivo no es declarar una contradiccion, sino aclarar la frontera del problema. Si [[Wnc]] representa el trabajo neto no conservativo, debe ser 1060 J. Si representa solo el trabajo del motor, falta modelar una contribucion resistente de -140 J. Esa diferencia es precisamente la potencia didactica del leaf.
