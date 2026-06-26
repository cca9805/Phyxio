const e=`# Aplicaciones

## 1. Afinacion de instrumentos de cuerda

En guitarras, violines, pianos y bajos, la velocidad de propagacion en cada cuerda controla las frecuencias que pueden sostenerse cuando la cuerda queda confinada entre dos puntos. Al aumentar [[T]], sube [[v]] y el instrumento tiende a sonar mas agudo. Al usar una cuerda con mayor [[mu]], baja [[v]] y se facilita un registro mas grave sin tener que usar longitudes enormes.

La aplicacion no consiste solo en "apretar mas". Un instrumento debe equilibrar tono, comodidad y seguridad mecanica. Una tension demasiado alta puede romper la cuerda o deformar el instrumento; una tension demasiado baja puede dejar la cuerda inestable, con respuesta pobre y afinacion imprecisa. Por eso el fabricante escoge [[mu]], longitud activa y rango de [[T]] como un conjunto.

En una guitarra, dos cuerdas pueden tener longitudes casi iguales y aun asi producir notas muy distintas porque sus masas lineales son diferentes. El musico corrige pequenas desviaciones de tono cambiando [[T]], mientras el constructor decide el rango grueso mediante material y calibre. La velocidad de propagacion es el puente fisico entre esas decisiones mecanicas y el resultado sonoro.

Variable dominante: [[T]].

Límite de validez: la cuerda debe comportarse como flexible, con amplitud pequena y sin rigidez dominante. En cuerdas de piano muy gruesas, la inarmonicidad exige un modelo extendido.

## 2. Diseño de demostraciones de laboratorio

En una clase, interesa que un pulso sea visible y medible. Si la cuerda es demasiado ligera o esta demasiado tensa, [[v]] puede ser tan alta que el tiempo de recorrido sea dificil de medir. Si la cuerda es demasiado pesada o muy floja, el pulso se deforma y pierde energia antes de recorrer la distancia.

Una practica bien diseñada suele buscar un compromiso: la rapidez debe ser suficientemente alta para que el pulso conserve forma, pero no tan alta como para impedir medir el tiempo. Con una cuerda de varios metros, una rapidez de decenas de metros por segundo permite usar video, marcas visuales o sensores sencillos. Esa eleccion muestra que el objetivo experimental no siempre es maximizar [[v]], sino hacerla interpretable.

Tambien permite comparar hipotesis. Si se duplica aproximadamente la tension y la rapidez no sigue la tendencia esperada, el montaje revela perdidas, errores de unidad o deslizamientos. La aplicacion pedagogica convierte una formula en una prueba fisica del modelo.

Variable dominante: [[mu]].

Límite de validez: el pulso debe tener amplitud moderada y la tension debe mantenerse aproximadamente constante durante el recorrido.

## 3. Diagnostico de tension en cables ligeros

En cables, hilos o tendidos ligeros, una medicion del tiempo de viaje de un pulso puede ayudar a estimar tension efectiva. Si se conoce [[mu]] y se mide [[v]], se puede inferir si el cable esta mas flojo o mas tenso de lo esperado. Esta idea aparece en controles simples de montaje y en practicas de fisica experimental.

La ventaja es que la medicion puede ser indirecta. En vez de enganchar un dinamometro, se genera un pulso, se mide cuanto tarda en recorrer una distancia conocida y se interpreta la rapidez. Si el cable es uniforme y el pulso no se deforma mucho, la comparacion con el modelo da una estimacion util de tension.

En aplicaciones reales hay que ser prudente: un cable apoyado, rozando o compuesto por varios materiales no se comporta como una cuerda ideal. Aun asi, la tendencia permite detectar anomalias. Una rapidez menor de la esperada puede indicar tension baja, masa lineal mayor de la nominal o contacto no previsto con soportes.

Variable dominante: [[v]].

Límite de validez: el cable debe poder modelarse como cuerda flexible. Si hay rigidez, contacto con soportes intermedios o variacion de seccion, la lectura se vuelve aproximada.

## 4. Seleccion de materiales para cuerdas

El material y el calibre determinan [[mu]]. Dos cuerdas con la misma longitud y tension pueden transmitir ondas a velocidades distintas si su masa por metro cambia. Por eso los fabricantes combinan acero, nylon, entorchados y nucleos de distinto material para obtener una respuesta mecanica y acustica concreta.

La seleccion de materiales no es solo una cuestion de resistencia. Una cuerda con mucha masa lineal permite registros graves en longitudes manejables, pero exige tension suficiente para no sentirse blanda. Una cuerda muy ligera responde rapido y puede alcanzar tonos altos, aunque puede resultar fragil o demasiado brillante para ciertas aplicaciones.

En cuerdas entorchadas, [[mu]] aumenta sin que el nucleo tenga que soportar toda la rigidez. Esto permite diseñar cuerdas graves para instrumentos compactos. La velocidad de propagacion ayuda a entender por que el material, el calibre y la tension se eligen conjuntamente, no como parametros aislados.

Variable dominante: [[mu]].

Límite de validez: la densidad lineal debe ser aproximadamente uniforme en el tramo vibrante. En cuerdas entorchadas irregulares, conviene medir la respuesta real.

## 5. Relacion entre fuente y patron espacial

Cuando una fuente impone una frecuencia [[f]], la cuerda responde con una longitud de onda [[lambda]] compatible con su rapidez. Si se cambia la tension y se mantiene la misma frecuencia de excitacion, el patron espacial se estira o se comprime. Esta lectura ayuda a interpretar ondas viajeras antes de estudiar resonancia.

En un montaje con vibrador, aumentar [[T]] manteniendo la misma frecuencia hace que las crestas queden mas separadas. El alumno puede ver que no fue la fuente la que "empujo mas rapido" la onda, sino el cambio del medio. La fuente conserva el ritmo; el medio cambia la distancia recorrida durante cada ciclo.

Esta aplicacion es especialmente util para preparar ondas estacionarias. Antes de hablar de nodos y vientres, conviene entender que la cuerda ya tiene una rapidez propia. Despues, cuando aparecen extremos fijos, esa rapidez se combina con la longitud disponible para seleccionar frecuencias permitidas.

Variable dominante: [[lambda]].

Límite de validez: la onda debe ser periodica y propagarse en un tramo suficientemente uniforme. Si el medio es dispersivo, la relacion simple entre ritmo temporal y separacion espacial requiere correcciones.

Estas aplicaciones muestran una misma estructura causal: [[T]] aporta restauracion, [[mu]] aporta inercia, [[v]] resume el resultado mecanico y [[f]] solo fija el ritmo si la fuente externa ya esta impuesta.

La lectura comun es operativa: para cambiar la rapidez de una cuerda hay que cambiar el medio, no solo la forma de excitarlo. Para cambiar el patron espacial sin tocar el medio, se modifica la frecuencia de la fuente. Separar esas dos intervenciones evita errores en laboratorio, musica y diseño tecnico.
`;export{e as default};
