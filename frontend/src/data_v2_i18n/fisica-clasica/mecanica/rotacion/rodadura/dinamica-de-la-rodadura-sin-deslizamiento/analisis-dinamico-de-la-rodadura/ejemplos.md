# Ejemplo tipo examen

## Enunciado

Un cilindro macizo de masa [[M]] y radio [[R]] baja sin deslizar por un plano inclinado un ángulo [[theta]]. Se pide hallar la aceleración del centro de masas [[a]], la aceleración angular [[alpha]] y la fricción estática [[fs]] que hace posible la rodadura pura.

El dato clave no es la masa absoluta, sino cómo se reparte la inercia. Para un cilindro macizo se usa [[beta]] de 0,5, de modo que el momento de inercia puede escribirse como

{{f:ley-rotacion-rodadura}}

. La pregunta física es si la gravedad disponible se reparte entre traslación y rotación de forma compatible con el vínculo de no deslizamiento.

## Datos

Tomamos [[M]] de 4,0 kg, [[R]] de 0,20 m, [[theta]] de 30 grados,

{{f:aceleracion-rodadura-combinada}}

y [[beta]] de 0,5. El cuerpo parte del reposo, el plano es rígido y hay fricción estática suficiente para que no aparezca deslizamiento relativo en el contacto.

El eje positivo se elige cuesta abajo. Con esa convención, la componente de la gravedad que impulsa el movimiento es M g sintheta, mientras que la fricción estática [[fs]] apunta cuesta arriba porque debe producir el torque que aumenta [[alpha]].

## Definición del sistema

El sistema es el cilindro completo. En traslación se analiza el centro de masas; en rotación se toman torques respecto al centro de masas. Esta separación evita mezclar fuerza neta con torque neto: una misma fricción [[fs]] resta fuerza traslacional, pero simultáneamente crea el giro.

Las magnitudes desconocidas son [[a]], [[alpha]] y [[fs]]. La condición de rodadura pura cierra el sistema porque impone que la aceleración lineal del centro y la aceleración angular no sean independientes.

## Modelo físico

El modelo físico queda anclado a las magnitudes núcleo [[a]], [[alpha]], [[fs]], [[theta]], [[M]], [[R]] y [[beta]]. La fuerza gravitatoria tangencial acelera el centro de masas, pero la fricción estática redistribuye parte de esa causa hacia el giro. Por eso deben aparecer simultáneamente la ecuación de traslación, la ecuación de rotación y el vínculo cinemático antes de usar la fórmula compacta de aceleración.

No se trata de elegir una ecuación aislada: si falta la traslación, no sabemos la fuerza neta; si falta la rotación, no sabemos qué torque produce [[alpha]]; si falta el vínculo, [[a]] y [[alpha]] quedan desacopladas y el cuerpo podría deslizar.

## Justificación del modelo

El modelo físico combina tres relaciones del leaf. La traslación queda descrita por la ecuación de traslación,

{{f:ley-traslacion-rodadura}}

. La rotación queda descrita por la ecuación de rotación,

{{f:ley-traslacion-rodadura}}

. El acoplamiento cinemático se impone con el vínculo de rodadura pura,

{{f:ley-traslacion-rodadura}}

.

La fricción estática no se fija como

{{f:ley-traslacion-rodadura}}

; esa expresión solo da un máximo disponible. Aquí [[fs]] se calcula como la fricción necesaria para que el cilindro ruede sin deslizar. Si el suelo no pudiera proporcionar ese valor, el modelo dejaría de ser válido y habría que pasar a deslizamiento.

## Resolución simbólica

En la resolución se usan explícitamente las cuatro relaciones núcleo del leaf. Sustituimos

{{f:ley-rotacion-rodadura}}

 y

{{f:vinculo-rodadura-acel}}

en la ecuación de rotación:

{{f:ley-rotacion-rodadura}}

De ahí resulta

{{f:ley-traslacion-rodadura}}

. Al introducirlo en la ecuación de traslación:

{{f:ley-traslacion-rodadura}}

Por tanto:

{{f:aceleracion-rodadura-combinada}}

Esta es la relación final de aceleración. Después se recuperan las otras dos incógnitas con

{{f:aceleracion-rodadura-combinada}}

 y

{{f:aceleracion-rodadura-combinada}}

.

## Sustitución numérica

Para [[theta]] de 30 grados,

{{f:ley-traslacion-rodadura}}

. Entonces:

{{f:aceleracion-rodadura-combinada}}

La aceleración angular es:

{{f:vinculo-rodadura-acel}}

La fricción estática necesaria queda:

{{f:ley-traslacion-rodadura}}

## Validación dimensional

La ecuación de traslación

{{f:ley-traslacion-rodadura}}

 compara fuerzas, por tanto todos sus términos tienen dimensión `[M L T⁻²]`. La ecuación de rotación

{{f:ley-traslacion-rodadura}}

 compara torques, con dimensión `[M L² T⁻²]`. El vínculo

{{f:ley-traslacion-rodadura}}

 también es consistente porque la dimensión de [[alpha]] por [[R]] produce `[L T⁻²]`.

{{f:ley-traslacion-rodadura}}

.

El resultado final conserva dimensiones de aceleración: \(g\sin\theta\) tiene unidades de m/s^2 y \(1+\beta\) es adimensional. Por eso la aceleración combinada no puede depender de [[M]] ni de [[R]] para cuerpos con el mismo [[beta]].

## Interpretación física

El cilindro no cae con gsintheta porque parte de la tendencia a acelerar se invierte en crear rotación. La fricción estática [[fs]] no disipa energía en rodadura pura ideal; redistribuye la respuesta dinámica entre traslación y giro. Por eso una esfera, un cilindro y un aro pueden tener masas distintas y aun así ordenarse por [[beta]].

El valor 3,27\ m/s^2 significa que el cilindro conserva dos tercios de la aceleración que tendría un bloque sin fricción en la misma rampa. El tercio restante aparece como inercia rotacional efectiva.

# Ejemplo de aplicación real

## Contexto

En una rampa de mantenimiento se desplaza un rodillo industrial de

{{f:aceleracion-rodadura-combinada}}

,30 m. Su geometría se aproxima a un cilindro hueco grueso con [[beta]] de 0,8. La pendiente es [[theta]] de 12 grados y se quiere comprobar si el rodillo mantiene rodadura pura sin exigir una fricción estática irreal.

## Estimación física

La aceleración esperada por la fórmula combinada es:

{{f:ley-rotacion-rodadura}}

La fricción necesaria, usando la deducción dinámica junto con el vínculo cinemático, es

{{f:ley-rotacion-rodadura}}

:

{{f:ley-rotacion-rodadura}}

La normal vale aproximadamente

{{f:ley-traslacion-rodadura}}

. Por tanto se necesita

{{f:ley-traslacion-rodadura}}

. Este valor es bajo para goma sobre suelo seco, pero puede ser relevante si hay aceite, polvo fino o una superficie metálica pulida.

## Interpretación

La lectura importante no es solo que

{{f:ley-traslacion-rodadura}}

, sino que la condición dinámica exige una fricción estática concreta. Si la fricción disponible supera 108,5 N, el rodillo rueda como cuerpo rígido y la ecuación de traslación queda acoplada a la ecuación de rotación. Si no, el contacto patina, [[alpha]] deja de ser \(a/R\) y el análisis debe cambiar de modelo.

En ingeniería, este cálculo separa dos decisiones: la geometría del rodillo controla la aceleración mediante [[beta]], mientras que la seguridad del contacto se evalúa comparando [[fs]] con el máximo estático disponible.