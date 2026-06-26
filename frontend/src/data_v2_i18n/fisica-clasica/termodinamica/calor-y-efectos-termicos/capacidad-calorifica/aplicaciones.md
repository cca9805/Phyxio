## 1. Calibracion de calorimetros

Un calorimetro real no solo contiene la muestra: también tiene paredes, tapa, sensor y agitador. Cada parte posee una capacidad calorifica que absorbe calor durante la medición. Si se ignora esa contribucion, el calor calculado para la muestra queda sesgado. Por eso los laboratorios determinan previamente la [[C]] efectiva del instrumento con una fuente de calor conocida.

La calibracion convierte el instrumento en una parte cuantificada del sistema. Una vez conocida su [[C]], el balance deja de tratar el recipiente como una perdida misteriosa y lo incorpora como otro cuerpo que cambia de temperatura. Esto mejora la comparacion entre ensayos repetidos, especialmente cuando las muestras son pequeñas.

En docencia, esta aplicación tiene valor diagnostico: si dos grupos obtienen resultados distintos con la misma muestra, revisar la capacidad del calorimetro suele explicar parte de la discrepancia. Un vaso más grueso, una tapa distinta o un sensor más masivo cambian el reparto de [[Q]] aunque la muestra sea identica.

Variable dominante: [[C]] del calorimetro, porque convierte una parte del calor suministrado en calentamiento del propio instrumento.

Límite de validez: la calibracion sirve mientras el montaje, el rango de temperatura y las perdidas al entorno sean similares a los usados durante la calibracion.

## 2. Termos y recipientes isotermos

Un termo reduce las fugas de calor mediante aislamiento, pero la temperatura del contenido también depende de su capacidad calorifica. Una sopa con gran [[C]] se enfria más lentamente que una pequeña cantidad de liquido porque el mismo calor perdido produce menor [[DeltaT]]. El recipiente ideal combina aislamiento alto y capacidad total adecuada.

Esta aplicación separa dos efectos que a menudo se confunden. El aislamiento controla cuanto [[Q]] escapa por unidad de tiempo; la capacidad calorifica controla cuanto cambia la temperatura por cada cantidad de calor perdida. Un recipiente puede aislar bien y aun así enfriarse rápido si contiene poca masa térmica.

Por eso una botella casi vacia pierde temperatura más deprisa que una llena aunque el envase sea el mismo. La fuga puede ser parecida, pero el mismo intercambio de calor se reparte sobre una capacidad total menor y produce mayor [[DeltaT]].

Variable dominante: [[C]] del contenido más recipiente, que determina cuanto cambia la temperatura ante una fuga de calor dada.

Límite de validez: si hay evaporacion, cambio de estado o apertura frecuente del recipiente, el balance simple de calor sensible deja de ser suficiente.

## 3. Inercia térmica en edificios

Muros, suelos y depositos de agua almacenan energía sensible. Durante el dia absorben [[Q]] con poco aumento de temperatura si su [[C]] es grande; por la noche pueden devolver parte de esa energía. Esta inercia térmica suaviza oscilaciones de temperatura interior y reduce picos de calefaccion o refrigeración.

El diseño bioclimatico usa esta idea para desplazar la demanda energética. Una pared con gran capacidad no elimina el calor, pero retrasa y amortigua su efecto. La lectura correcta no es solo "material pesado", sino masa que realmente participa en el intercambio dentro del periodo diario.

La aplicación también ayuda a evitar sobredimensionar sistemas activos. Si se conoce la capacidad efectiva de la zona, se puede estimar cuanta energía sensible absorbe antes de que la temperatura interior cambie de forma perceptible.

Variable dominante: [[C]] efectiva de la masa constructiva que participa realmente en el intercambio diario.

Límite de validez: no toda la masa del edificio responde al mismo tiempo; con paredes gruesas entran en juego conduccion, retrasos temporales y gradientes internos.

## 4. Procesos industriales de calentamiento

En pasteurizacion, reactores o tanques de proceso, la potencia necesaria depende de la capacidad calorifica total que debe calentarse. No basta mirar la temperatura objetivo: hay que sumar producto, recipiente, tuberias y accesorios. Si [[C]] total es grande, el calentamiento requiere más energía o más tiempo.

La estimacion de [[C]] total permite dimensionar resistencias, intercambiadores o calderas antes de detallar la transferencia. También ayuda a diagnosticar ciclos demasiado lentos: si la potencia instalada parece suficiente para el producto pero no para el equipo completo, el fallo no esta en la consigna de temperatura sino en la masa térmica omitida.

En lotes repetidos, comparar la energía realmente entregada con el cambio de temperatura observado permite detectar incrustaciones, llenados parciales o accesorios que han cambiado. La capacidad calorifica funciona así como una firma energética del equipo completo.

Variable dominante: [[C]] total del conjunto que cambia de temperatura durante el ciclo.

Límite de validez: el calculo con [[C]] constante es una primera escala; para grandes intervalos se usan datos de capacidad dependiente de temperatura y se añaden perdidas.

## 5. Sensores de flujo de calor

Algunos sensores estiman calor midiendo [[DeltaT]] en un elemento de capacidad conocida. Si la [[C]] del sensor es estable, la señal térmica se convierte en [[Q]] de forma reproducible. Por eso la calibracion de sensores incluye controlar masa, material y rango de temperatura.

En estos dispositivos interesa que la capacidad sea suficientemente conocida y que el elemento sea pequeño para responder con rapidez. Una [[C]] demasiado grande suaviza la señal pero retrasa la lectura; una [[C]] demasiado pequeña aumenta la sensibilidad pero puede amplificar ruido y perdidas laterales.

La eleccion final es un compromiso de diseño. Para medir pulsos rápidos conviene poca capacidad y buena correccion de perdidas; para medir energía acumulada durante más tiempo conviene una capacidad mayor y una lectura más estable.

Variable dominante: [[C]] del sensor o elemento calibrado.

Límite de validez: si la capacidad del sensor cambia con temperatura o si hay perdidas laterales, la conversion entre temperatura y calor deja de ser lineal.
