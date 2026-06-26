# Aplicaciones del proceso adiabático

## 1. Motor diesel: encendido por compresión adiabatica

En un motor diesel, el aire se comprime en el cilindro con una relación de compresión de entre 15:1 y 22:1. El proceso de compresión es tan rápido que puede considerarse esencialmente adiabático. El aire entra a temperatura ambiente (unos 300 K) y, tras la compresión adiabatica, su temperatura sube hasta 750-900 K. Esa temperatura es suficiente para encender el combustible diesel inyectado sin necesidad de bujia.

Variable dominante: [[T2]], porque el encendido requiere superar la temperatura de autoignicion del combustible (unos 500-550 °C para el diesel).

Limite de validez: El modelo adiabático falla si la compresión es lenta (hay tiempo para que el calor se transfiera a las paredes del cilindro) o si hay refrigeración de las paredes tan eficaz que la temperatura del gas no sube lo suficiente. En motores muy pequenos, la relación area/volumen del cilindro es mayor y las perdidas de calor son más significativas.

El valor de [[gamma]] para el aire (1.40) determina directamente la temperatura de encendido alcanzable. Si se usara un gas con [[gamma]] menor, como el vapor de agua, la compresión adiabatica produciria menos calentamiento y el motor diesel no funcionaria con ese gas. El diseño del motor se basa en la relación entre [[gamma]], la relación de compresión y [[T2]] que proporciona la formula adiabatica.

## 2. Gradiente adiabático seco en la atmósfera

Cuando una masa de aire asciende en la atmósfera, su presión disminuye porque la presión atmosférica decrece con la altitud. El proceso de ascenso es suficientemente rápido como para considerarse adiabático: el aire no tiene tiempo de intercambiar calor con el entorno. Por eso la temperatura del aire que asciende cae con la altitud siguiendo el gradiente adiabático seco, aproximadamente 9.8 K por cada kilometro de ascenso.

Variable dominante: [[DeltaT_ad]], porque determina si una masa de aire es más o menos densa que el aire circundante y por tanto si el movimiento vertical es estable o inestable.

Limite de validez: El gradiente adiabático seco solo aplica para aire sin condensacion de vapor de agua. Si el aire se satura y el vapor se condensa, la condensacion libera calor latente y el enfriamiento real es menor (gradiente adiabático humedo, unos 6 K/km). Además, en la estratosfera la temperatura aumenta con la altitud, lo que invierte la condición de inestabilidad.

Este principio es esencial en meteorologia para predecir la formacion de nubes, la estabilidad atmosférica y la generacion de vientos convectivos. Las tormentas severas ocurren cuando el gradiente de temperatura real es mayor que el adiabático, creando condiciones de inestabilidad donde el aire asciende aceleradamente.

## 3. Refrigeración por expansión adiabatica en ciclos de Joule-Thomson y turboexpansores

En la produccion de nitrogeno, oxigeno y otros gases licuados a escala industrial, el gas comprimido se expande adiabáticamente a traves de una turbina o un expansor. La temperatura del gas cae durante esta expansión, siguiendo la relación adiabatica, y eventualmente el gas puede alcanzar temperaturas por debajo de su punto de licuefaccion.

Variable dominante: [[T2]], porque el objetivo del proceso es reducir la temperatura del gas hasta el rango de licuefaccion o de almacenamiento criogenico.

Limite de validez: Cerca del punto critico del gas, el modelo de gas ideal con [[gamma]] constante ya no es preciso y se necesitan tablas de propiedades termodinámicas. Además, el proceso de Joule-Thomson (a traves de una valvula, no de una turbina) es irreversible y no sigue exactamente la ley adiabatica reversible.

La eficiencia de un ciclo de licuefaccion depende de cuantos kelvin se consigue bajar la temperatura por cada julios de trabajo invertido en la compresión. Cuanto mayor es [[gamma]] y cuanto mayor es la razon de expansión, mayor es el descenso de [[T2]], lo que permite diseñar ciclos más eficientes con menos etapas de compresión.

## 4. Ciclo de Brayton: fundamento del motor de reaccion y la turbina de gas

El ciclo de Brayton, que describe el funcionamiento de motores de reaccion, turbinas de gas y turborreactores, incluye dos procesos adiabáticos: la compresión en el compresor y la expansión en la turbina. En el compresor, el aire se comprime adiabáticamente y su temperatura aumenta. En la turbina, los gases de combustión se expanden adiabáticamente produciendo el trabajo mecánico que impulsa el avion o genera electricidad.

Variable dominante: [[W]], porque la diferencia entre el trabajo producido en la turbina y el trabajo consumido en el compresor determina la potencia neta del ciclo.

Limite de validez: En la práctica, los procesos no son perfectamente adiabaticos ni reversibles. La eficiencia isentropica del compresor y la turbina mide la desviacion respecto al proceso adiabático ideal y suele estar entre 0.80 y 0.92 en maquinas bien diseñadas. Las perdidas por friccion, turbulencia y transferencia de calor reducen la eficiencia real.

El análisis adiabático del ciclo de Brayton permite calcular la temperatura de entrada a la camara de combustión, la relación de compresión óptima y la temperatura de los gases de escape. Todos estos parametros son criticos para el diseño estructural de los materiales del motor, que deben soportar las temperaturas resultantes de la compresión adiabatica.

## 5. Sonido en un gas: propagacion adiabatica de ondas de presión

La velocidad del sonido en un gas depende de [[gamma]] precisamente porque las ondas sonoras comprimen y expanden el gas de forma adiabatica. Newton calculo la velocidad del sonido asumiendo isotermicidad y obtuvo un valor un 20% menor que el real. Laplace corrigio el calculo reconociendo que las oscilaciones de presión son demasiado rápidas para que haya transferencia de calor significativa, por lo que el proceso es adiabático, no isotérmico.

Variable dominante: [[gamma]], porque la velocidad del sonido en un gas ideal es proporcional a la raiz cuadrada de [[gamma]] dividido por la densidad.

Limite de validez: Para frecuencias muy bajas (infrasonido lento) o en medios muy conductivos térmicamente, las oscilaciones pueden ser parcialmente isotermicas y [[gamma]] efectivo se acerca a 1. A frecuencias ultrasonicas muy altas, la hipótesis de equilibrio local puede fallar y la velocidad del sonido puede depender de la frecuencia (dispersion).

Esta aplicación muestra que el proceso adiabático no es solo un caso extremo de laboratorio: es el regimen natural de cualquier perturbacion mecánica rápida en un gas. La meteorologia, la acustica submarina, el diagnostico medico por ecografia y el diseño de instrumentos musicales de viento dependen todos de la correcta descripción adiabatica de las oscilaciones de presión.
