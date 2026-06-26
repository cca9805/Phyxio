# Ejemplo tipo examen

## Enunciado

Un rifle con una masa [[m1]] de 5 kg dispara una bala de [[m2]] con valor de 0,01 kg a una velocidad de salida [[v2f]] de 800 m/s. El sistema rifle más bala está inicialmente en reposo, lo que implica que tanto [[v1i]] como [[v2i]] son nulos. Calcula: (a) la velocidad de retroceso del rifle [[v1f]] inmediatamente después del disparo; (b) el momento lineal total [[Pinitial]] y [[Pfinal]] del sistema. (c) Si la bala impacta contra un bloque de madera con masa [[m2]] de 2 kg en reposo y se queda incrustada, calcula la velocidad final común [[vf]] del conjunto. Interpreta físicamente el resultado.

## Datos

- Masa del primer cuerpo (rifle): [[m1]] de 5 kg
- Masa del segundo cuerpo (bala): [[m2]] de 0,01 kg
- Masa del bloque (nuevo cuerpo 2): [[m2]] de 2 kg
- Velocidad inicial de ambos: [[v1i]] y [[v2i]] son nulas (0 m/s)
- Velocidad final del segundo cuerpo tras disparo: [[v2f]] de 800 m/s (hacia la derecha)

## Definición del sistema

Definimos el sistema como el conjunto {rifle + bala} para la primera fase, y {bala + bloque} para la segunda. En ambas fases, la [[Fext]] horizontal es despreciable durante el brevísimo instante de la interacción. Por tanto, el [[momento_lineal_total]] del sistema [[P]] debe conservarse: [[Pinitial]] debe ser igual a [[Pfinal]]. Esta elección de sistema es fundamental para ignorar las fuerzas de expansión de los gases y las fuerzas de impacto internas.

## Modelo físico

Utilizamos el principio de conservación mediante la fórmula maestra **p**. Para el disparo desde el reposo, aplicamos la **p**. Para el impacto posterior de la bala con el bloque, aplicamos la fórmula de colisión perfectamente inelástica **p**, que modela el acoplamiento de masas. También utilizaremos la fórmula **p** para demostrar que la suma de momentos individuales se mantiene constante en cualquier interacción del leaf.

## Justificación del modelo

La aproximación de sistema aislado es físicamente válida porque el [[tiempo]] de interacción del disparo y del choque es extremadamente corto (milisegundos). En este intervalo, el impulso neto de fuerzas externas constantes como el peso es despreciable frente a los impulsos internos. Por tanto, el error introducido es mínimo para el cálculo de las velocidades de salida y acoplamiento, permitiendo una predicción de alta fidelidad basada en la invariancia del momento lineal.

## Resolución simbólica

Para hallar la velocidad de retroceso [[v1f]] del rifle, aplicamos la **p** derivada de la conservación total (con [[v1i]] y [[v2i]] nulos):

{{f:cons_principle}}

Para el choque inelástico posterior entre la bala ([[m1]] ahora representa la bala) y el bloque ([[m2]]), aplicamos la resolución del acoplamiento para hallar la velocidad final común [[vf]] mediante la fórmula **p**:

{{f:cons_principle}}

Finalmente, verificamos el balance global mediante la ley fundamental **p**:

{{f:cons_principle}}

La condición de aislamiento que hace válido el modelo es:

{{f:cond}}

El momento lineal individual de cada masa se define como:

{{f:P}}

## Sustitución numérica

**Cálculo de la velocidad de retroceso:**
Al sustituir los valores en la ley **p**, la magnitud de la velocidad final del rifle [[v1f]] se obtiene multiplicando la [[masa_individual]] de la bala por su velocidad (0,01 por 800) y dividiendo el resultado entre la masa del arma (5). Al aplicar el signo opuesto, resulta un valor final de -1,6 m/s. El signo negativo confirma el retroceso.

**Cálculo del acoplamiento inelástico:**
Cuando la bala (0,01 kg a 800 m/s) choca con el bloque (2 kg en reposo), el momento inicial es de 8 kg·m/s. La [[masa_total]] del conjunto tras el impacto es de 2,01 kg. Dividiendo el momento entre la masa total mediante la fórmula **p**, se obtiene una velocidad final común [[vf]] de aproximadamente 3,98 m/s.

**Verificación del momento total:**
El valor de [[Pinitial]] (rifle + bala) es nulo. El valor de [[Pfinal]] tras el disparo (sumando 5 veces -1,6 y 0,01 veces 800) arroja un resultado de cero. Para el choque, la [[DeltaP]] es nula, ya que el momento inicial de 8 kg·m/s se mantiene idéntico al final (producto de 2,01 por 3,98), confirmando la conservación estricta mediante **p**.

## Validación dimensional

Todas las magnitudes resultantes corresponden a velocidades, medidas en metros por segundo (m/s). En el cálculo de [[v1f]], la división de unidades de momento entre masa cancela los kilogramos y deja la unidad de velocidad correcta. El momento lineal se mantiene en unidades de kg·m/s en todas las comprobaciones, asegurando la consistencia dimensional del balance.

## Interpretación física

El resultado obtenido mediante la **p** indica que el rifle debe retroceder obligatoriamente para compensar el momento de la bala. En el choque inelástico, la aplicación de **p** muestra que la [[velocidad_individual]] disminuye drásticamente (de 800 m/s a 3,98 m/s) debido al enorme aumento de la masa inercial del conjunto. Esto significa que el [[momento_lineal_individual]] se ha redistribuido desde el pequeño proyectil a todo el bloque, demostrando que la masa es el factor dominante en la transferencia de movimiento. Los valores calculados son consecuencias directas de que [[Pinitial]] sea igual a [[Pfinal]] en cada etapa.

# Ejemplo de aplicación real

## Contexto

En la ingeniería aeroespacial, las maniobras de atraque (docking) representan una aplicación crítica. Consideremos una cápsula de [[m1]] con 2000 kg que se aproxima a un módulo de carga de [[m2]] con 3000 kg. La cápsula se mueve a una [[velocidad_individual]] inicial [[v1i]] de 0,5 m/s, mientras que el módulo está inicialmente detenido ([[v2i]] es cero). Este es un caso real de la fórmula **p**, donde el éxito depende de predecir el estado dinámico tras la unión de las naves.

## Estimación física

Para estimar el comportamiento tras el acoplamiento, la resolución se basa en la ley de conservación del [[momento_lineal_total]]. El balance inicial nos da el presupuesto dinámico:

{{f:cons_principle}}

Sustituyendo los datos: El momento inicial [[Pinitial]] es el producto de 2000 por 0,5, lo que da 1000 kg·m/s. La [[masa_total]] unida es de 5000 kg. Al dividir el momento total entre esta nueva masa inercial, la velocidad final común [[vf]] resulta ser de exactamente 0,2 m/s. Esta estimación cuantitativa muestra cómo la inercia añadida frena el movimiento original sin necesidad de motores externos en un [[tiempo]] de respuesta corto.

## Interpretación

Este cálculo cuantitativo indica que el sistema resultante se mueve un 60 % más lento que la cápsula original. Físicamente, esto significa que el [[momento_lineal_total]] se ha "diluido" en la masa mayor. Para los ingenieros, este valor de 0,2 m/s determina la energía que los amortiguadores deben disipar. La aplicación de la fórmula **p** demuestra que, aunque la energía se degrade, la [[DeltaP]] total es nula y [[Pfinal]] se mantiene como un ancla matemática que permite predecir el futuro del sistema con total certidumbre en el vacío espacial.



