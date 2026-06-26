# Ejemplo tipo examen

## Enunciado
Una varilla delgada y uniforme se usa como modelo de referencia. Su masa es [[m]] de 2 kg y su momento de inercia centroidal [[Icm]] es de 0.24 kg·m² respecto a un eje perpendicular que pasa por el centro de masas. El objetivo es hallar [[I]] cuando el eje se traslada hasta uno de los extremos y comprobar si el resultado conserva la lectura física esperada.

## Datos
- Masa de la varilla: [[m]] = 2 kg.
- Momento de inercia respecto al centro: [[Icm]] = 0.24 kg·m².
- Distancia entre el centro y el extremo: 0.6 m.

## Definición del sistema
El sistema es una varilla rígida con dos ejes paralelos. Uno pasa por el centro de masas y el otro por un extremo. La distancia que importa es la separación perpendicular entre ambos ejes, porque esa separación es la que cambia la inercia de giro.

## Modelo físico
Usamos la fórmula de Steiner:

{{f:steiner-directa}}

porque los ejes son paralelos y el eje de referencia pasa por el centro de masas. La relación nos dice que el cambio de eje no crea una física nueva: solo añade una corrección geométrica positiva al valor central.

## Justificación del modelo
Para una varilla delgada, el modelo escalar es suficiente porque el desplazamiento del eje no cambia la orientación del giro. La masa sigue siendo la misma y el único efecto relevante es que queda más lejos de la línea de rotación. Ese alejamiento es justo lo que el teorema cuantifica.

## Resolución simbólica
La idea clave es que la inercia respecto al extremo debe ser mayor que la inercia respecto al centro. La razón es física, no solo algebraica: mover el eje hacia el extremo obliga a girar más masa efectiva alrededor de la línea de giro.

{{f:steiner-directa}}

La lectura correcta es que el término adicional siempre suma. Por eso el valor final nunca debe quedar por debajo del valor centroidal cuando ambos ejes son paralelos.

Una vez obtenido [[I]], el vínculo con la dinámica se interpreta con la relación rotacional:

{{f:respuesta-rotacional}}

Esto permite cerrar el razonamiento del leaf: el cambio de eje no solo modifica una magnitud geométrica, también cambia la aceleración angular esperada para un mismo torque aplicado.

## Sustitución numérica
Sustituyendo los datos de la varilla de referencia se obtiene:

[[I]] = [[Icm]] + [[m]]·[[d]]^2 = 0.24 + 2·(0.6)^2 = 0.96 kg·m².

El resultado multiplica por cuatro la inercia centroidal. Esa diferencia no es decorativa: explica por qué un eje situado en el extremo hace mucho más difícil arrancar la rotación.

## Validación dimensional
La expresión tiene unidades de kg·m² porque la masa se multiplica por una distancia al cuadrado. Esa combinación coincide con la dimensión de un momento de inercia y confirma que el resultado es coherente.

## Interpretación física
El valor final [[I]] = 0.96 kg·m² es mayor que [[Icm]] = 0.24 kg·m², así que la lectura física es la esperada. Al desplazar el eje, la varilla se vuelve más resistente a la aceleración angular. Si el mismo torque [[tau]] actuara sobre la varilla, la aceleración angular [[alpha]] sería menor porque el sistema presenta más inercia de giro.

La parte importante no es memorizar el número 0.96, sino entender por qué aparece. El teorema sirve para separar dos ideas: la inercia propia del cuerpo y la contribución del lugar donde se sitúa el eje. En un problema real, esa separación ayuda a detectar errores de diseño, de unidades o de lectura del esquema.

La causalidad física completa es: mayor separación del eje implica mayor contribución geométrica; mayor contribución geométrica implica mayor [[I]]; y mayor [[I]] implica menor [[alpha]] para un mismo [[tau]]. Esta cadena explica no solo el valor final, sino el comportamiento temporal del sistema durante el arranque y el frenado.

Si la masa total [[m]] aumentara manteniendo la misma geometría, el incremento de inercia crecería en proporción directa y la respuesta angular se volvería todavía más lenta. Si en cambio disminuyera [[d]] acercando el eje al centro, el sistema recuperaría agilidad y necesitaría menos esfuerzo mecánico para alcanzar el mismo objetivo dinámico.

# Ejemplo de aplicación real
## Contexto
Una barrera de parking de 5 m de longitud y 20 kg de masa pivota por un extremo. El cálculo de la inercia real del sistema es decisivo para no subdimensionar el motor de arranque.

## Estimación física
En esta geometría, el eje real está muy alejado del centro de masas. Por eso la contribución de traslación domina y el valor de [[I]] crece de forma notable frente al valor centroidal. La situación es exactamente la que hace útil el teorema de Steiner: no obliga a integrar de nuevo, pero sí obliga a leer bien la geometría.

Si el diseño se hiciera solo con [[Icm]], el arranque parecería más fácil de lo que realmente es. En cambio, el valor sobre el eje real captura la dificultad mecánica verdadera: cuanto más lejos queda la masa del eje, mayor debe ser el [[tau]] disponible para alcanzar la [[alpha]] deseada.

Una estimación cuantitativa simple ayuda a fijar orden de magnitud. Si el actuador entrega un torque de 120 N·m y la inercia efectiva de la barrera es del orden de 100 kg·m², la aceleración angular inicial queda alrededor de 1.2 rad/s². Si por error se diseñara con una inercia cuatro veces menor, la predicción subiría artificialmente a casi 5 rad/s² y el control quedaría mal calibrado desde el arranque.

## Interpretación
La lectura de ingeniería es directa: hay que diseñar con [[I]], no con [[Icm]]. Ese cambio afecta el actuador, la reducción, el tiempo de arranque y la seguridad del ciclo. Una barrera que abre y cierra muchas veces al día no puede basarse en un valor centroidal idealizado, porque el punto de pivotado real domina la demanda mecánica.

Este ejemplo muestra además un criterio de control de calidad del cálculo. Si el desplazamiento del eje es grande, el resultado debe crecer con fuerza y de manera cuadrática con la distancia. Si no ocurre así, el problema está en la geometría, en la lectura de los datos o en el sistema de unidades.

En resumen, Steiner no es solo una fórmula de examen. Es una regla práctica para decidir dónde colocar el eje y cómo traducir esa decisión en coste dinámico, consumo energético y fiabilidad mecánica.

Además, este ejemplo permite una lectura de sensibilidad: si la distancia al eje aumenta un 20 por ciento, la contribución geométrica no sube 20 por ciento, sino aproximadamente 44 por ciento por la dependencia cuadrática. Esa diferencia explica por qué pequeños cambios de montaje pueden tener efectos grandes en la respuesta de un sistema real.
