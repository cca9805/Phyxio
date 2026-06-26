# Ejemplo tipo examen


## Enunciado

Una bobina lineal tiene inductancia propia de 0.20 H. Por ella circula inicialmente una corriente de 3.0 A. La corriente se reduce hasta 0.50 A durante 5.0 ms al abrir el circuito con un sistema de proteccion. Calcula el flujo enlazado inicial, la fem autoinducida media y la energia magnetica inicial almacenada.

## Datos

- Inductancia propia [[inductancia_propia]]: 0.20 H.
- Corriente inicial [[corriente_de_la_bobina]]: 3.0 A.
- Cambio de corriente [[cambio_de_corriente]]: descenso de 2.5 A.
- Intervalo de tiempo [[intervalo_de_tiempo]]: 5.0 ms, equivalente a 0.0050 s.
- Bobina lineal, sin saturacion apreciable.

## Definición del sistema

El sistema es una sola bobina. La corriente positiva se toma en el sentido inicial. La normal de flujo se elige de modo coherente con ese sentido, por lo que [[flujo_enlazado]], [[fem_autoinducida]] y [[cambio_de_corriente]] conservan significado de signo.

## Modelo físico

Se usa el modelo de autoinduccion lineal. La inductancia [[inductancia_propia]] conecta [[corriente_de_la_bobina]] con [[flujo_enlazado]], mientras la fem [[fem_autoinducida]] aparece solo durante el cambio de corriente. La energia [[energia_magnetica_almacenada]] describe lo almacenado en el campo antes de abrir el circuito.

## Justificación del modelo

El enunciado declara bobina lineal y sin saturacion apreciable, asi que [[inductancia_propia]] puede tratarse como constante durante el transitorio. El modelo dejaria de valer si el nucleo saturara, si aparecieran oscilaciones por capacitancias parasitas o si la resistencia dominara la descarga.

La situacion exige conservar signos: la corriente disminuye, por tanto [[cambio_de_corriente]] es negativo con la referencia elegida. La respuesta inductiva debe oponerse a esa disminucion.

## Resolución simbólica

La inductancia propia se define por la relacion entre enlace magnetico y corriente:

{{f:definicion_inductancia}}

El flujo enlazado inicial se obtiene con la relacion lineal:

{{f:flujo_enlazado_lineal}}

La fem media durante el transitorio se obtiene con:

{{f:fem_autoinducida_media}}

La energia magnetica inicial almacenada se obtiene mediante:

{{f:energia_magnetica}}

## Sustitución numérica

Para el estado inicial, multiplicar 0.20 H por 3.0 A da 0.60 Wb. Por tanto [[flujo_enlazado]] inicial es aproximadamente 0.60 Wb.

El cambio de corriente es negativo porque la corriente baja de 3.0 A a 0.50 A. Dividir ese cambio por 0.0050 s da una rapidez media de gran modulo. Al multiplicar por 0.20 H y aplicar el signo de oposicion, [[fem_autoinducida]] resulta positiva respecto a la referencia que intenta sostener la corriente, con modulo aproximado de 100 V.

Para la energia inicial, elevar 3.0 A al cuadrado, multiplicar por 0.20 H y tomar la mitad da 0.90 J. Por tanto [[energia_magnetica_almacenada]] inicial es 0.90 J.

## Validación dimensional

Henrio por amperio produce weber en la relacion de flujo enlazado, por lo que [[flujo_enlazado]] tiene unidad Wb. Henrio multiplicado por amperio y dividido por segundo produce voltio, coherente con [[fem_autoinducida]].

La energia usa henrio por amperio cuadrado y da joule. [[cambio_de_corriente]] conserva amperios y [[intervalo_de_tiempo]] conserva segundos; por eso la lectura de rapidez de cambio es dimensionalmente consistente.

## Interpretación física

El signo de [[fem_autoinducida]] indica que la bobina intenta mantener la corriente en el sentido inicial. No esta "creando" energia nueva; esta devolviendo parte de la energia [[energia_magnetica_almacenada]] almacenada en el campo magnetico.

El modulo de 100 V es mucho mayor que muchas tensiones de control, aunque la energia sea menor que 1 J. Esto muestra por que abrir bobinas puede requerir diodos, resistencias de descarga o limitadores de sobretension.

Si el mismo cambio de corriente ocurriera en un tiempo diez veces mayor, la fem media seria diez veces menor. En cambio, la energia inicial dependeria de [[inductancia_propia]] y de la corriente inicial, no de la rapidez de apertura.

# Ejemplo de aplicación real


## Contexto

Un rele de automocion contiene una bobina que se alimenta con corriente continua. Al desconectarla, el interruptor electronico no solo corta una corriente: tambien debe gestionar la energia magnetica que estaba almacenada en la bobina.

## Estimación física

Si la bobina tiene una [[inductancia_propia]] de decenas de milihenrios y conduce varios cientos de miliamperios, [[energia_magnetica_almacenada]] puede parecer pequeña, pero se libera en un intervalo muy corto. Esa combinacion puede elevar [[fem_autoinducida]] lo suficiente para dañar un transistor.

Por ejemplo, con una inductancia de 40 mH y una corriente inicial de 0.30 A, la energia almacenada es del orden de dos milésimas de joule. Si esa corriente se fuerza a caer en 0.20 ms, la fem media esperada queda del orden de decenas de voltios. La lectura cuantitativa muestra que una energia pequeña puede producir una tension peligrosa cuando [[intervalo_de_tiempo]] es muy corto.

Un diodo de rueda libre aumenta el tiempo de descarga y reduce el modulo de la fem. Una resistencia de descarga permite apagar mas rapido, pero acepta una tension mayor. La decision tecnica consiste en repartir seguridad electrica y rapidez de respuesta.

## Interpretación

La autoinduccion explica por que una bobina aparentemente simple exige proteccion en conmutacion. La corriente constante no era el problema; el problema aparece cuando [[cambio_de_corriente]] se fuerza en un [[intervalo_de_tiempo]] pequeño.

El diseño correcto mira simultaneamente [[inductancia_propia]], [[fem_autoinducida]] y [[energia_magnetica_almacenada]]. Si solo se mira la corriente nominal, se ignora la energia que el campo debe entregar al apagar el circuito.

La estimacion no pretende sustituir la ficha tecnica del rele. Sirve para decidir si el orden de magnitud exige proteccion y para comparar dos soluciones: descarga lenta con baja tension o descarga rapida con tension mayor.