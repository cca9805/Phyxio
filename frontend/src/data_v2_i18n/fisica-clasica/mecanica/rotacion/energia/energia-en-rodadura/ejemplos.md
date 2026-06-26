# Ejemplo tipo examen

## Enunciado

Un cilindro macizo de masa [[m]] igual a 4 kg, radio [[R]] igual a 0.20 m y momento de inercia [[I]] igual a 0.08 kg m^2 rueda sin deslizar con velocidad del centro de masas [[v_cm]] igual a 3 m/s. Calcula la velocidad angular [[omega]], la energía cinética total [[K_total]] y explica el reparto entre traslación y rotación.

## Datos

Tenemos

{{f:energia_total_rodadura}}

,

{{f:energia_total_rodadura}}

,

{{f:energia_total_rodadura}}

. Como el enunciado declara rodadura sin deslizamiento, puede usarse la condición cinemática de contacto para obtener [[omega]]. La fórmula núcleo para la energía es la suma de contribuciones traslacional y rotacional.

## Definición del sistema

El sistema es el cilindro. La superficie solo impone la condición de contacto y, en el modelo ideal, no extrae energía mecánica. No incluimos la Tierra salvo que queramos analizar una rampa con [[g]] y [[phi]]. Aquí se pide energía cinética instantánea, por lo que el objetivo es [[K_total]], no [[E_total]].

## Modelo físico

El modelo físico es sólido rígido en rodadura pura. [[I]] pertenece al eje central, [[R]] es el radio de contacto y todos los puntos comparten la misma [[omega]]. La relación entre [[a_cm]] y [[alpha]] sería válida si se estudiara aceleración, aunque no sea necesaria para la energía instantánea.

## Justificación del modelo

La frase “sin deslizar” permite usar

{{f:energia_total_rodadura}}

. El cilindro macizo tiene [[I]] constante, y el dato de [[v_cm]] ya describe el avance del centro de masas. No hay trabajo disipativo declarado, así que el reparto energético se interpreta como suma de dos contribuciones mecánicas.

## Resolución simbólica

Primero se calcula [[omega]] con

{{f:condicion_rodadura_energia}}

Después se sustituye en

{{f:energia_total_rodadura}}

de modo que [[K_total]] es la suma de 0.5 [[m]] [[v_cm]]^2 y 0.5 [[I]] [[omega]]^2. Si se quisiera una rampa, se añadiría

{{f:energia_mecanica_total_rodadura}}

para conectar [[E_total]], [[g]] y [[phi]].

Si el enunciado pidiera aceleración, se usaría además

{{f:aceleracion_cm_rodadura}}

para relacionar [[a_cm]] y [[alpha]]. En este ejemplo no hace falta resolver [[a_cm]], pero citar la relación ayuda a ver que el mismo contacto que vincula velocidades también vincula aceleraciones cuando no hay deslizamiento.

## Sustitución numérica

La condición da

{{f:energia_total_rodadura}}

. La parte traslacional vale 0.5 * 4 * 3^2 = 18 J. La parte rotacional vale 0.5 * 0.08 * 15^2 = 9 J. Por tanto,

{{f:energia_total_rodadura}}

. Un tercio de la energía cinética está en giro y dos tercios en avance.

## Validación dimensional

La parte traslacional tiene unidades kg m^2 s^-2, y la parte rotacional también porque [[I]] tiene unidades kg m^2 y [[omega]] aporta s^-1. La suma queda en joules. Además, [[R]] en metros convierte correctamente velocidad angular en velocidad lineal.

## Interpretación física

El resultado significa que el cilindro no usa toda la energía cinética para trasladar su centro. Una parte queda ligada a la rotación. Si el cuerpo fuera un aro con mayor [[I]] para la misma [[m]] y [[R]], la fracción rotacional aumentaría. Si hubiera patinaje, estos 27 J no cerrarían el balance porque parte de la energía podría convertirse en calor.

# Ejemplo de aplicación real

## Contexto

En una bicicleta, las ruedas almacenan energía traslacional con el conjunto de la bici y energía rotacional alrededor de sus ejes. Una rueda más pesada en el borde aumenta [[I]] y hace que acelerar requiera más trabajo. Queremos estimar por qué dos ruedas con igual masa pueden sentirse distintas al arrancar.

## Estimación física

Supón una rueda con

{{f:energia_total_rodadura}}

,

{{f:energia_total_rodadura}}

,

{{f:energia_total_rodadura}}

. La condición da [[omega]] aproximadamente 23.5 rad/s. La energía traslacional de esa rueda es 48 J, y la rotacional es cerca de 36 J, así que [[K_total]] ronda 84 J. Si otra rueda tiene menor [[I]], necesitará menos energía rotacional para la misma velocidad.

## Interpretación

La estimación indica que la distribución de masa importa tanto como la masa total. En aceleraciones repetidas, más energía en rotación significa más trabajo que debe aportar el ciclista. El modelo ideal no incluye deformación del neumático, pérdidas en rodamientos ni resistencia del aire, por lo que en una bicicleta real [[E_total]] debe ampliarse con términos disipativos. Aun así, la separación entre traslación y rotación explica la sensación de ruedas más o menos “vivas”.

La lectura práctica es que una mejora de diseño puede buscar menor [[I]] sin cambiar demasiado [[m]]. Si el radio [[R]] se mantiene y la velocidad objetivo no cambia, bajar [[I]] reduce la parte rotacional de [[K_total]]. En una ruta llana a velocidad constante esta diferencia puede parecer pequeña, pero en salidas, curvas y cambios de ritmo se acumula porque el sistema repite muchas aceleraciones.

También se puede usar el ejemplo para detectar patinaje. Si el sensor de rueda mide una [[omega]] incompatible con [[v_cm]] y [[R]], la energía calculada con rodadura pura deja de representar el proceso real. Entonces parte de [[E_total]] se va a calor, ruido y deformación, y la estimación ideal debe corregirse.

Como verificación práctica adicional, conviene comparar esta estimación con un registro de tiempo de aceleración en un tramo fijo. Si dos ruedas con masa total similar muestran diferencias sistemáticas de respuesta bajo la misma potencia de pedaleo, la causa puede estar en la distribución de masa y en el valor efectivo de [[I]], no solo en la masa total.