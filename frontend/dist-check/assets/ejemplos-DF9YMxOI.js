const e=`# Ejemplo tipo examen

## Enunciado

Una bobina de 200 espiras enlaza un flujo magnetico por espira que pasa de 0.0030 Wb a 0.00050 Wb en 0.020 s. Calcula el cambio de flujo por espira, la rapidez media de cambio de flujo y la fem inducida media. Interpreta el signo con la normal elegida.

## Datos

- Numero de espiras [[N]]: 200.
- Flujo inicial [[Phi_B]]: 0.0030 Wb por espira.
- Flujo final: 0.00050 Wb por espira.
- Intervalo [[Deltat]]: 0.020 s.
- La normal positiva es la usada para escribir el flujo inicial.

## Definición del sistema

El sistema es una bobina. La superficie enlazada es la de cada espira y se supone que todas las espiras enlazan cambios de flujo semejantes. La fem [[epsilon_ind]] se interpreta alrededor del circuito completo.

## Modelo físico

Se usa la forma media de la ley de Faraday. El flujo disminuye, por lo que [[DeltaPhi_B]] es negativo con la normal elegida. El signo final de la fem debe reflejar oposicion al descenso de flujo.

## Justificación del modelo

El enunciado da un cambio finito entre dos estados y un intervalo temporal claro. No se mencionan campos no uniformes complejos, movimiento rapido comparable a tiempos de propagacion ni espiras no equivalentes.

La bobina tiene muchas vueltas, por lo que [[N]] multiplica la respuesta si cada vuelta enlaza el mismo cambio de flujo. El resultado seria distinto si el dato de flujo ya fuera enlace total de toda la bobina.

## Resolución simbólica

La rapidez media de cambio de flujo se define como:

{{f:tasa_cambio_flujo}}

La forma media de la ley de Faraday para una bobina es:

{{f:ley_faraday_media}}

La misma lectura puede escribirse directamente con la rapidez de cambio:

{{f:ley_faraday_tasa}}

Si el flujo proviniera de campo uniforme efectivo y area conocida, se estimaria con:

{{f:flujo_uniforme}}

## Sustitución numérica

El flujo final es menor que el inicial, asi que [[DeltaPhi_B]] es un descenso de 0.0025 Wb. Dividir ese cambio por 0.020 s da una rapidez media de cambio con modulo 0.125 Wb/s.

Al multiplicar esa rapidez por 200 espiras, la fem media tiene modulo 25 V. Como el flujo disminuye respecto a la normal positiva, el signo de Faraday hace que [[epsilon_ind]] sea positiva en la referencia que intenta sostener el flujo original.

Si se hubiera olvidado convertir el tiempo o multiplicar por [[N]], el resultado cambiaria por factores grandes. Por eso la lectura numerica debe ir acompañada de control de unidades y de interpretacion del signo.

## Validación dimensional

Weber dividido por segundo produce voltio, por lo que [[r_Phi]] tiene la dimension adecuada para generar fem. El numero de espiras [[N]] no añade unidad; solo multiplica la respuesta.

La lectura de signo tambien es coherente. Un flujo que disminuye induce una fem orientada para oponerse a esa disminucion, no para acelerar la perdida de flujo.

## Interpretación física

La bobina no responde al flujo inicial por si mismo. Responde a que el flujo enlazado cae durante un tiempo corto. Esa caida obliga al circuito a generar una fem con polaridad que intenta mantener el flujo que se esta perdiendo.

El valor de 25 V es razonable para una bobina con muchas espiras, aunque el cambio por espira parezca pequeño. La acumulacion por [[N]] convierte una variacion moderada de flujo en una tension medible.

Fisicamente, esto significa que cada vuelta aporta una pequeña contribucion orientada de forma coherente. La bobina completa no cambia la causa del fenomeno; amplifica la fem total porque repite el mismo enlace magnetico muchas veces.

Si el mismo cambio ocurriera diez veces mas lento, la fem media seria diez veces menor. Si ocurriera con la misma rapidez pero con una sola espira, la fem seria doscientas veces menor. Esas comparaciones muestran que la ley mide rapidez de cambio y enlace acumulado.

# Ejemplo de aplicación real

## Contexto

Un generador simple hace girar una bobina dentro de un campo magnetico. Aunque el campo pueda mantenerse casi constante, la orientacion efectiva de la bobina cambia y con ella cambia el flujo enlazado.

## Estimación física

Si una bobina de muchas espiras experimenta una variacion de flujo de pocas milesimas de weber por vuelta en centesimas de segundo, la fem puede estar en decenas de voltios. Aumentar la velocidad de giro reduce el tiempo caracteristico del cambio y eleva la fem inducida.

La estimacion tambien muestra el papel de la geometria. Una bobina con mayor [[A]] o mejor orientada respecto a [[B_perp]] puede enlazar mas flujo; si ese flujo cambia durante el giro, la respuesta electrica crece.

## Interpretación

El generador no crea tension porque haya campo magnetico estatico, sino porque el flujo enlazado por la bobina cambia continuamente. La ley de Faraday traduce ese cambio geometrico y temporal en fem.

El diseño correcto mira [[Phi_B]], [[DeltaPhi_B]], [[Deltat]] y [[N]] juntos. Si se ignora cualquiera de esas magnitudes, se pierde la causa fisica de la tension inducida o se estima mal su escala.

La estimacion tambien permite distinguir mejoras reales de cambios irrelevantes. Aumentar el campo solo ayuda si aumenta el flujo enlazado que cambia; aumentar area solo ayuda si esa area queda atravesada por la componente efectiva del campo.
`;export{e as default};
