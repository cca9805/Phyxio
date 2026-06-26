# Ejemplo tipo examen


## Enunciado

Un hilo recto muy largo transporta una corriente continua de 12 A. Se desea estimar el campo magnetico a 4.0 cm del eje del conductor usando la ley de Ampere. Despues, se compara con un solenoide largo de densidad de espiras [[densidad_de_espiras]] igual a 800 por metro que transporta la misma corriente. Determinar [[campo_magnetico]] en el caso del hilo, [[campo_de_solenoide_largo]] en el solenoide, y explicar por que las curvas amperianas usadas no son las mismas.

## Datos

- Corriente del conductor: 12 A.
- Radio de la curva circular: 4.0 cm, equivalente a 0.040 m.
- Densidad de espiras del solenoide: 800 por metro.
- Medio aproximado: aire, tratado como vacio.
- Se buscan [[campo_magnetico]] para el hilo y [[campo_de_solenoide_largo]] para el solenoide.

Los datos describen dos simetrias distintas. En el hilo se usa una circunferencia porque el campo gira alrededor del conductor. En el solenoide se usa una trayectoria rectangular porque el campo interior es casi uniforme y el exterior se desprecia.

## Definición del sistema

El primer sistema es un conductor recto ideal, muy largo comparado con la distancia de observacion. La curva amperiana es circular, centrada en el hilo, con [[campo_magnetico]] tangente en todos sus puntos. El elemento orientado [[dl]] recorre esa circunferencia y fija el sentido positivo de la circulacion. La corriente encerrada [[corriente_encerrada]] coincide con la corriente del conductor.

El segundo sistema es un solenoide largo ideal. El campo relevante es [[campo_de_solenoide_largo]], casi uniforme en el interior. La trayectoria elegida cruza un tramo interno donde el campo contribuye y un tramo externo donde la contribucion se aproxima como nula.

## Modelo físico

El modelo usa la ley de Ampere en regimen magnetostatico. La magnitud estructural es [[circulacion_magnetica]], vinculada a [[corriente_encerrada]] mediante la ley integral. En el hilo, la simetria permite obtener [[campo_magnetico]] a partir de [[corriente_del_conductor]] y [[radio_amperiano]]. En el solenoide, la geometria enrollada introduce [[densidad_de_espiras]] como numero de espiras por longitud.

## Justificación del modelo

El modelo vale porque las corrientes son constantes y las geometrias tienen simetria suficiente. Para el hilo, todos los puntos a igual [[radio_amperiano]] son equivalentes; por eso [[campo_magnetico]] tiene el mismo modulo en la circunferencia. Para el solenoide largo, lejos de los bordes, el campo interior domina.

Dejaria de valer cerca de extremos del conductor, en un solenoide corto, con corrientes variables rapidas o si el nucleo material cambia de forma no lineal la permeabilidad efectiva.

## Resolución simbólica

La relacion general que justifica ambos calculos usa [[dl]] como elemento orientado de la curva cerrada:

{{f:ampere_integral}}

Para el hilo recto largo, la simetria circular transforma la circulacion en un producto entre campo tangente y longitud de la circunferencia. De esa simplificacion se obtiene:

{{f:campo_hilo_ampere}}

Para el solenoide largo, la trayectoria rectangular deja como dominante el tramo interior. El resultado ideal es:

{{f:campo_solenoide_largo}}

La comparacion es fisica: el hilo reparte la misma corriente sobre circunferencias crecientes, mientras el solenoide suma muchas espiras por unidad de longitud.

## Sustitución numérica

Para el hilo, se toma la constante magnetica del vacio y se multiplica por 12 A. Luego se divide por el perimetro asociado al radio de 0.040 m. El resultado es aproximadamente 6.0e-5 T, por tanto [[campo_magnetico]] queda del orden de 60 microteslas.

Para el solenoide, se multiplica la constante magnetica por 800 por metro y por 12 A. El resultado es aproximadamente 1.2e-2 T, por tanto [[campo_de_solenoide_largo]] queda del orden de 12 militeslas.

## Validación dimensional

Para el hilo, la combinacion de permeabilidad, corriente y distancia produce teslas. La permeabilidad aporta el acoplamiento magnetico, la corriente aporta la fuente y la division por longitud ajusta la escala espacial.

Para el solenoide, la densidad de espiras aporta inverso de longitud. Al combinarla con corriente y permeabilidad, el resultado vuelve a ser teslas. Ambas salidas son campos magneticos, por lo que las dimensiones son coherentes.

## Interpretación física

El campo del solenoide es mucho mayor que el del hilo en este caso porque muchas espiras refuerzan el campo en una region interior comun. El hilo aislado solo produce un campo circular que se debilita al aumentar [[radio_amperiano]]. La diferencia no contradice Ampere; muestra que la geometria decide como se organiza la circulacion.

Si se duplicara la corriente, ambos campos se duplicarian. Si se duplicara [[radio_amperiano]] en el caso del hilo, [[campo_magnetico]] se reduciria a la mitad. En el solenoide ideal, cambiar [[radio_amperiano]] no es la variable central; lo decisivo es [[densidad_de_espiras]] y la corriente que atraviesa cada espira.

# Ejemplo de aplicación real


## Contexto

Un laboratorio quiere diseñar una bobina larga para producir un campo magnetico casi uniforme en una region central. El equipo disponible puede entregar 3 A de forma estable y se puede fabricar un solenoide con 1200 espiras por metro. La pregunta practica es si el campo esperado entra en el rango de militeslas adecuado para ensayos con sensores Hall.

## Estimación física

Aplicando el modelo de solenoide largo, [[campo_de_solenoide_largo]] se estima combinando [[mu0]], [[densidad_de_espiras]] e [[corriente_del_conductor]]. Con 1200 espiras por metro y 3 A, el campo interior queda del orden de 4.5 militeslas. Ese valor supera ampliamente el campo terrestre, pero esta muy por debajo de campos de resonancia magnetica o electroimanes industriales.

La estimacion tambien indica el limite termico indirecto: aumentar [[corriente_del_conductor]] aumenta el campo, pero tambien calienta el hilo. Aumentar [[densidad_de_espiras]] puede ser mejor hasta que aparezcan problemas de espacio, resistencia y disipacion.

## Interpretación

La ley de Ampere permite pasar de un diseño geometrico a una prediccion de campo sin sumar cada espira una por una. La condicion importante es que el solenoide sea suficientemente largo y que la medicion se realice lejos de los bordes.

Si el sensor se coloca cerca del extremo, el valor medido sera menor que la estimacion central. En ese caso no falla la ley; falla la hipotesis de solenoide largo ideal. La aplicacion muestra por que Ampere es una herramienta de diseño cuando se usa junto con un criterio de validez.