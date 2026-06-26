# Ejemplo tipo examen


## Enunciado

Una espira circular esta frente a un iman cuyo polo norte se acerca a la espira. Se elige como normal positiva la que apunta hacia el iman. Durante 0.050 s, el flujo magnetico enlazado aumenta en 0.0040 Wb. Determina el signo de la fem inducida, su modulo medio para una espira y el sentido fisico de la corriente inducida.

## Datos

- Cambio de flujo [[cambio_de_flujo_magnetico]]: aumento de 0.0040 Wb.
- Intervalo [[intervalo_de_tiempo]]: 0.050 s.
- Numero de espiras [[numero_de_espiras]]: 1.
- Normal positiva: hacia el iman.
- El circuito esta cerrado y puede circular corriente inducida.

## Definición del sistema

El sistema es una espira cerrada. La superficie es la encerrada por la espira y la normal positiva apunta hacia el iman. Con esa convencion, el acercamiento aumenta [[flujo_magnetico]], por lo que el cambio tiene signo positivo.

## Modelo físico

Se usa la ley de Lenz en la forma media de Faraday. La fem inducida debe tener signo opuesto al aumento de flujo. Si circula corriente, su campo magnetico asociado debe intentar frenar el aumento de [[flujo_magnetico]].

## Justificación del modelo

El enunciado fija las tres piezas que hacen aplicable a Lenz: una superficie encerrada por la espira, una normal positiva hacia el iman y un aumento de [[flujo_magnetico]] durante [[intervalo_de_tiempo]]. Con esas referencias, el problema no es ambiguo: se sabe que el cambio de flujo es positivo y que la respuesta inducida debe tener signo contrario.

Tambien esta justificado usar una lectura media porque se da el cambio total de flujo y el intervalo, no una funcion temporal detallada. La resistencia del circuito no es necesaria para decidir el sentido; solo haria falta para calcular la intensidad de corriente. La espira cerrada permite traducir la polaridad de [[epsilon_ind]] a un sentido de corriente inducida.

## Resolución simbólica

Primero se calcula la rapidez media de cambio [[rapidez_media_de_cambio_de_flujo]]:

{{f:tasa_cambio_flujo}}

Luego se aplica la forma de Lenz-Faraday:

{{f:ley_lenz_faraday}}

La misma oposicion puede verse con:

{{f:ley_lenz_tasa}}

Para la regla puramente de signos:

{{f:regla_signos_lenz}}

## Sustitución numérica

El flujo aumenta 0.0040 Wb en 0.050 s. La [[rapidez_media_de_cambio_de_flujo]] tiene modulo 0.080 Wb/s y signo positivo respecto a la normal elegida.

Como [[numero_de_espiras]] es 1, el modulo medio de [[epsilon_ind]] es 0.080 V. El signo de la fem es negativo respecto a la referencia positiva asociada al aumento de flujo, porque Lenz exige oposicion al cambio.

Fisicamente, la corriente inducida debe producir un campo que reduzca el aumento de flujo hacia el iman. Con la regla de la mano derecha, eso fija el sentido de circulacion que hace que la cara de la espira frente al iman se comporte como un polo que se opone al acercamiento.

## Validación dimensional

Weber dividido por segundo produce voltio, coherente con [[epsilon_ind]]. [[numero_de_espiras]] es adimensional y no cambia unidades. La regla de signos usa [[s_flujo]] y [[s_ind]] solo como indicadores conceptuales.

La coherencia fisica tambien se cumple: si el iman se acerca, la espira no ayuda a que el flujo aumente mas. La polaridad inducida exige trabajo externo para mantener el acercamiento.

## Interpretación física

El valor numerico no es lo mas importante del ejemplo. La lectura clave es que el flujo aumenta y la corriente inducida se orienta para oponerse a ese aumento. El sistema transforma trabajo mecanico de acercar el iman en energia electrica y calor.

Si el iman se alejara con la misma rapidez, el modulo podria ser igual, pero la polaridad se invertiría. Esa comparacion muestra por que Lenz es una ley de signo y causalidad, no solo una receta de voltios.

La respuesta real podria ser pequeña si la resistencia de la espira fuera grande. Aun asi, el sentido de la fem inducida seguiria siendo el mismo, porque depende del cambio de flujo y no de la facilidad con que circule corriente.

Si se invierte la normal elegida, los signos escritos de [[cambio_de_flujo_magnetico]] y [[epsilon_ind]] cambian, pero la conclusion fisica no cambia. La cara de la espira sigue oponiendose al acercamiento del iman. Esta comprobacion evita confundir convencion matematica con sentido fisico real.

# Ejemplo de aplicación real


## Contexto

En un freno magnetico, un disco conductor gira entre imanes. El movimiento cambia el flujo enlazado por trayectorias conductoras dentro del disco y aparecen corrientes inducidas.

## Estimación física

Si el disco gira mas rapido, el cambio de flujo por cada region conductora ocurre en menos tiempo y aumenta la fem inducida local. La corriente inducida no se orienta para acelerar el disco, sino para producir un efecto magnetico que se opone al movimiento relativo.

Una estimacion de orden de magnitud compara rapidez de giro, campo y area efectiva de las corrientes inducidas. Si el tiempo caracteristico baja de decimas de segundo a milisegundos, la oposicion puede crecer mucho.

## Interpretación

La ley de Lenz explica por que el freno no necesita contacto mecanico. La oposicion electromagnetica aparece porque el movimiento intenta cambiar el flujo enlazado, y la respuesta inducida se orienta contra ese cambio.

La energia no desaparece. La energia mecanica del disco se transforma principalmente en calor por corrientes inducidas. Por eso estos frenos pueden calentarse aunque no haya rozamiento por contacto.

La aplicacion tambien muestra que Lenz no es solo una regla para espiras dibujadas en papel. Es un criterio de diseño: si se quiere mas frenado, se aumenta el cambio de flujo o se facilita la corriente inducida; si se quiere menos calentamiento, se limita esa corriente o el acoplamiento.

Una lectura cuantitativa simple compara dos velocidades. Si el disco duplica su rapidez y el resto del sistema se mantiene en el mismo regimen, la rapidez de cambio de flujo aumenta aproximadamente en la misma proporcion. La polaridad no cambia por eso; cambia la intensidad de la oposicion.