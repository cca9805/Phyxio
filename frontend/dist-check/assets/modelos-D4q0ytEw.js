const e=`## Modelo ideal

El modelo principal es la onda como perturbacion propagante. Se representa un estado local [[y]] que cambia con [[x]] y [[t]], con una amplitud [[A]] y, si hay periodicidad, con [[lambda]], [[f]], [[T]] y [[v]].

La simplificacion central es separar el avance del patron del movimiento local del medio. El modelo conserva la identidad de la perturbacion y deja fuera rozamiento, dispersion intensa, ruptura del medio y transferencia neta apreciable de materia.

## Hipótesis

- La perturbacion es identificable y se transmite de un punto a otro.
- El medio o campo permite una rapidez de propagacion definida.
- Las oscilaciones son suficientemente pequenas para hablar de magnitudes estables.
- Si se usa periodicidad, el patron se repite de forma regular.

Si la primera hipotesis falla, no hay una onda claramente reconocible. Si falla la segunda, la velocidad deja de ser una lectura simple. Si falla la tercera, el perfil puede deformarse y el modelo ideal pierde poder predictivo.

## Dominio de validez cuantitativo

La aproximacion es razonable para amplitudes menores del 10 % de la longitud caracteristica del montaje y para variaciones de velocidad inferiores al 5 % dentro de la zona observada. En una cuerda de aula, un orden de magnitud tipico es centimetros para [[A]] y decimetros o metros para [[lambda]].

Tambien es razonable cuando varias crestas permiten medir periodicidad de forma estable. Si solo hay un pulso aislado, puede seguir hablándose de propagacion, pero no conviene forzar una lectura de [[lambda]], [[f]] o [[T]] como si el patron fuera repetitivo.

## Señales de fallo del modelo

Una señal clara de fallo es que la forma cambie de anchura mientras avanza. Otra es que la amplitud disminuya rapidamente sin que el problema haya declarado atenuacion. Tambien falla si una marca del medio muestra arrastre neto dominante en vez de oscilacion local.

En graficas, el fallo aparece cuando no puede identificarse una repeticion espacial estable o cuando dos medidas sucesivas dan valores incompatibles de [[v]]. En esos casos, la onda real exige un modelo mas rico.

## Modelo extendido o alternativo

Un modelo extendido incluye atenuacion, dispersion, reflexiones, superposicion o energia transportada. La diferencia concreta es que la forma ya no se describe solo por una perturbacion ideal que se repite: ahora puede cambiar con la distancia, combinarse con otras ondas o depender de propiedades del medio.

Cuando conviene pasar al modelo extendido: si el perfil se deforma, si la amplitud cae de forma sistematica, si aparecen ecos o si el objetivo es calcular energia. Para una señal medida en un unico detector, puede usarse un modelo local centrado en [[y]], [[A]], [[f]] y [[T]].

## Comparación operativa

| Lectura | Modelo propagante | Modelo de senal local |
|---|---|---|
| Pregunta principal | Como avanza el patron | Como cambia un punto |
| Magnitudes clave | [[lambda]], [[f]], [[v]] | [[y]], [[A]], [[T]] |
| Riesgo | Confundir patron y materia | Olvidar la estructura espacial |

El modelo propagante es mejor cuando el enunciado menciona crestas, distancia entre repeticiones o rapidez de avance. El modelo local es mejor cuando el problema se centra en un sensor, una marca de la cuerda o una oscilacion en un punto. La comparacion evita usar todas las magnitudes a la vez sin saber que lectura fisica se necesita.
`;export{e as default};
