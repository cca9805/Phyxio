# Ejemplo tipo examen


## Enunciado

Una cuerda de guitarra tiene longitud vibrante de 0.65 m entre la cejilla y el puente. La velocidad de propagacion de las ondas transversales en esta cuerda es de 312 m/s. Se pide determinar la longitud de onda y frecuencia del modo fundamental, calcular la frecuencia y longitud de onda del tercer modo estacionario, y hallar la nueva frecuencia fundamental cuando el guitarrista presiona la cuerda en un traste que reduce la longitud vibrante a 0.433 m.

## Datos

- Longitud vibrante de la cuerda: [[longitud_cuerda]] vale 0.65 m
- Velocidad de propagacion de ondas transversales: [[velocidad_propagacion]] vale 312 m/s
- Numero de modo para el fundamental: [[numero_armonico]] vale 1
- Numero de modo para el tercer armonico: [[numero_armonico]] vale 3
- Longitud vibrante reducida al presionar el traste: 0.433 m

## Definición del sistema

El sistema es una cuerda con extremos fijos en ambos extremos de la longitud vibrante. Los modos estacionarios son los patrones de vibracion que satisfacen las condiciones de contorno de nodos permanentes en los extremos. Cada modo contiene exactamente [[numero_armonico]] medias longitudes de onda [[longitud_onda_estacionaria]] dentro de la longitud [[longitud_cuerda]].

## Modelo físico

El modelo de ondas estacionarias con extremos fijos cuantiza la longitud de onda [[longitud_onda_estacionaria]] en funcion del modo [[numero_armonico]] y la longitud [[longitud_cuerda]]. La frecuencia de cada modo [[frecuencia_modo]] se obtiene combinando la longitud de onda cuantizada con la velocidad de propagacion [[velocidad_propagacion]] del medio. Para el primer modo, la frecuencia fundamental [[frecuencia_fundamental]] establece la base de la serie armonica.

## Justificación del modelo

Las condiciones de contorno fuerzan nodos permanentes en los extremos de la cuerda. Esto cuantiza la longitud de onda al imponer que [[numero_armonico]] medias longitudes de onda caben exactamente en [[longitud_cuerda]]. La misma velocidad [[velocidad_propagacion]] aplica a todos los modos porque depende de la tension y densidad lineal de la cuerda, que son uniformes. El espectro armonico resultante (donde [[frecuencia_modo]] es exactamente [[numero_armonico]] veces [[frecuencia_fundamental]]) es una consecuencia directa de la linealidad del sistema y de las condiciones de contorno identicas para todos los modos.

## Resolución simbólica

Para la longitud de onda del modo n-esimo:

{{f:longitud_onda_estacionaria}}

Para la frecuencia del modo n-esimo:

{{f:frecuencia_estacionaria}}

Para la frecuencia fundamental con [[numero_armonico]] igual a 1:

{{f:frecuencia_fundamental}}

Para localizar los nodos del patron en el modo n:

{{f:posicion_nodos}}

Para localizar los vientres del patron en el modo n:

{{f:posicion_vientres}}

Para la forma completa de la onda estacionaria:

{{f:funcion_onda_estacionaria}}

## Sustitución numérica

**Modo fundamental (n igual a 1, L igual a 0.65 m, v igual a 312 m/s)**

Longitud de onda: dos veces 0.65 dividido entre 1. Resultado: [[longitud_onda_estacionaria]] aproximadamente 1.30 m.

Frecuencia fundamental: 312 dividido entre dos veces 0.65. Resultado: [[frecuencia_fundamental]] aproximadamente 240 Hz.

Numero de vientres: exactamente 1. Numero de nodos: exactamente 2 (los dos extremos).

**Tercer modo (n igual a 3)**

Longitud de onda: dos veces 0.65 dividido entre 3. Resultado: [[longitud_onda_estacionaria]] aproximadamente 0.433 m.

Frecuencia: tres veces 240. Resultado: [[frecuencia_modo]] aproximadamente 720 Hz.

Numero de vientres: exactamente 3. Numero de nodos: exactamente 4 (dos extremos mas dos nodos interiores).

**Cuerda acortada (L reducida a 0.433 m)**

Nueva frecuencia fundamental: 312 dividido entre dos veces 0.433. Resultado: [[frecuencia_fundamental]] aproximadamente 360 Hz.

Incremento respecto al original: 360 dividido entre 240, que es aproximadamente 1.5. La frecuencia aumenta un 50%.

## Validación dimensional

Para la longitud de onda [[longitud_onda_estacionaria]]: la formula combina metros divididos entre adimensional, resultando en unidades de longitud `[L]`. Dimension correcta en metros.

Para la frecuencia [[frecuencia_modo]]: la formula combina metros por segundo divididos entre metros, resultando en `[T⁻¹]`. Dimension correcta en Hz equivalente a ciclos por segundo.

La verificacion cruzada del producto de [[longitud_onda_estacionaria]] por [[frecuencia_modo]] debe dar [[velocidad_propagacion]]. Para el fundamental: 1.30 m multiplicado por 240 Hz da 312 m/s, coincidiendo con [[velocidad_propagacion]] dado. Consistencia verificada.

## Interpretación física

El valor de [[longitud_onda_estacionaria]] igual a 1.30 m para el modo fundamental indica que la longitud de onda es el doble de la cuerda, lo que significa que exactamente media longitud de onda cabe entre los dos extremos fijos. El [[desplazamiento_transversal]] de cada punto de la cuerda es maximo en el vientre central. Para el indice [[indice_nodo]] igual a 1, la posicion del primer y unico vientre [[posicion_vientre]] se calcula como la mitad de [[longitud_cuerda]], dando 0.325 m. La posicion del nodo extremo [[posicion_nodo]] con indice [[indice_nodo]] igual a 0 esta en el extremo fijo a 0 m, y con indice igual a 1 en el otro extremo a 0.65 m. La frecuencia resultante de 240 Hz corresponde a la nota Sol3 aproximadamente, un tono tipico de cuerdas graves de guitarra clasica.

El tercer modo con frecuencia de 720 Hz es el tercer armonico de la serie. Produce un patron con tres vientres equidistantes y cuatro nodos, incluyendo los extremos. El hecho de que [[frecuencia_modo]] sea exactamente tres veces [[frecuencia_fundamental]] confirma la estructura armonica perfecta del sistema con extremos fijos. En la practica, cuando la cuerda suena, todos estos modos coexisten con amplitudes relativas que determinan el timbre percibido.

La reduccion de [[longitud_cuerda]] de 0.65 m a 0.433 m (multiplicacion por 2/3) produce un aumento de [[frecuencia_fundamental]] de 240 a 360 Hz (multiplicacion por 3/2). Esta relacion inversa entre longitud y frecuencia es el principio fisico que usa el guitarrista al presionar los trastes: cada traste acorta la cuerda en un factor fijo, elevando la frecuencia en el factor inverso. Una cuarta justa (razon de frecuencias 4/3) corresponde exactamente a reducir la longitud al factor 3/4 de su valor original.

---

# Ejemplo de aplicación real


## Contexto

Los diapasones de afinacion utilizados por musicos e ingenieros de sonido son barras metalicas en forma de horquilla que vibran en modo fundamental cuando se golpean. El diapason estandar de 440 Hz (nota La4) tiene dimensiones y material elegidos para que la frecuencia fundamental de sus brazos produzca exactamente esa frecuencia. El modelo de ondas estacionarias explica por que cambiar la longitud o el material altera la frecuencia producida.

## Estimación física

Un diapason de acero tipico tiene brazos de longitud aproximada de 0.09 m. La velocidad de ondas transversales en acero es del orden de 3 000 m/s a 5 000 m/s segun la geometria. Usando el modelo con ambos extremos libres (lo que cambia el factor respecto al caso fijo-fijo), la estimacion de frecuencia fundamental cae en el rango de 1 000 Hz a 3 000 Hz para brazos de 9 cm. Los diapasones de 440 Hz tienen brazos mas largos (15 cm a 20 cm) o materiales de menor velocidad de onda.

La dependencia de [[frecuencia_fundamental]] respecto a [[longitud_cuerda]] sigue la misma logica inversamente proporcional que en la cuerda: duplicar la longitud reduce la frecuencia a la mitad. Por esto, los diapasones de baja frecuencia son fisicamente mas grandes.

## Interpretación

El modelo de ondas estacionarias permite disenar diapasones con frecuencias precisas ajustando [[longitud_cuerda]] y el material (que determina [[velocidad_propagacion]]). La serie armonica del diapason es mas compleja que la de la cuerda porque la geometria de los brazos no es perfectamente unidimensional, pero el armonico fundamental domina la percepcion auditiva y es el que da el tono de referencia.

La alta frecuencia de amortiguamiento del acero hace que los armonicos superiores decaigan rapidamente, dejando solo la frecuencia fundamental audible despues de un segundo o dos. Esta propiedad de decaimiento selectivo de armonicos es lo que hace al diapason util como referencia de afinacion: produce un tono casi puro sin los sobretonos que colorean el sonido de instrumentos musicales.