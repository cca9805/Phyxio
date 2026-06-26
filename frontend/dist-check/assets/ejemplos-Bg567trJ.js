const a=`# Ejemplo tipo examen

## Enunciado

Una cuerda horizontal de laboratorio esta sometida a una tension de 45 N. Su densidad lineal es 0.0050 kg/m. Se genera una perturbacion transversal periodica de frecuencia 60 Hz. Se pide calcular la velocidad de propagacion de la onda en la cuerda y la longitud de onda asociada a esa frecuencia. Despues se compara que ocurriria si se cambia la cuerda por otra con el doble de densidad lineal manteniendo la misma tension.

## Datos

- Tension de la cuerda: 45 N
- Densidad lineal: 0.0050 kg/m
- Frecuencia impuesta por la fuente: 60 Hz
- Segunda cuerda: densidad lineal doble
- Longitud activa para lectura complementaria de modo fundamental: 1.5 m
- Cuerda flexible, uniforme y con amplitud pequena

## Definición del sistema

El sistema fisico es una cuerda tensa que actua como medio mecanico. La fuente impone el ritmo [[f]], pero la rapidez [[v]] debe leerse desde las propiedades de la cuerda: [[T]] y [[mu]]. La longitud efectiva [[L]] no es necesaria para hallar la rapidez local, aunque seria importante si se pidieran modos estacionarios.

## Modelo físico

Usamos el modelo de cuerda ideal: tension uniforme, masa lineal constante, amplitud pequena y ausencia de dispersion apreciable. Bajo esas condiciones, [[v]] depende del equilibrio entre restauracion por [[T]] e inercia por [[mu]]. Una vez conocida la rapidez, se conecta con [[f]] para obtener [[lambda]].

## Justificación del modelo

La cuerda es de laboratorio, la tension se mantiene fija y el enunciado no menciona rigidez, nudos ni variaciones de masa. Por tanto, es razonable tratarla como uniforme. La frecuencia de 60 Hz no es extrema y la amplitud es pequena, asi que el modelo no dispersivo es suficiente. La comparacion con la segunda cuerda es fisicamente significativa porque cambia solo [[mu]], dejando aislado el efecto de la inercia lineal.

## Resolución simbólica

Primero se obtiene la rapidez de propagacion desde la tension y la densidad lineal:

{{f:velocidad_cuerda_tensa}}

Esta lectura muestra que [[T]] acelera la propagacion y [[mu]] la ralentiza. Despues se relaciona la rapidez calculada con la frecuencia impuesta:

{{f:frecuencia_desde_velocidad}}

Para hallar la separacion espacial de la onda a frecuencia fija, se usa la forma de longitud de onda:

{{f:longitud_onda_desde_velocidad}}

Si el mismo tramo se fija en ambos extremos y se quiere leer la frecuencia fundamental compatible, la longitud activa entra como condicion de frontera:

{{f:frecuencia_fundamental_cuerda}}

Si se sustituye la cuerda por otra con doble [[mu]] y la misma [[T]], la rapidez disminuye porque aumenta la inercia por metro. No se modifica la frecuencia de la fuente, por lo que el cambio visible principal sera una longitud de onda menor.

## Sustitución numérica

Con [[T]] de 45 N y [[mu]] de 0.0050 kg/m, dividir la tension entre la densidad lineal da 9000 en unidades compatibles. La raiz cuadrada de ese valor produce una rapidez aproximada de 95 m/s. Por tanto [[v]] ≈ 95 m/s.

Con una frecuencia [[f]] de 60 Hz, dividir la rapidez por la frecuencia da una longitud de onda aproximada de 1.6 m. Por tanto [[lambda]] ≈ 1.6 m.

Si el tramo activo [[L]] mide 1.5 m y sus extremos se comportan como fijos, dividir 95 m/s entre el doble de esa longitud da una fundamental cercana a 32 Hz. Esa lectura no cambia la rapidez ya calculada; solo traduce la misma propagacion a un modo compatible con la longitud disponible.

Para la segunda cuerda, la densidad lineal pasa a 0.010 kg/m. Manteniendo los 45 N, el cociente mecanico se reduce a la mitad. La rapidez resultante baja aproximadamente a 67 m/s. Con la misma frecuencia de 60 Hz, la longitud de onda queda cerca de 1.1 m.

## Validación dimensional

- Velocidad mecanica: la razon entre tension y densidad lineal tiene dimension \`[L² T⁻²]\`; al tomar la raiz queda \`[L T⁻¹]\`.
- Longitud de onda: dividir una rapidez \`[L T⁻¹]\` entre una frecuencia \`[T⁻¹]\` deja dimension \`[L]\`.
- Frecuencia: dividir una rapidez \`[L T⁻¹]\` entre una longitud \`[L]\` deja dimension \`[T⁻¹]\`.

La comprobacion de la fundamental de cuerda fija tambien es coherente: una rapidez dividida por una longitud activa produce una frecuencia.

Las tres comprobaciones son coherentes con las unidades esperadas: m/s para [[v]], m para [[lambda]] y Hz para [[f]].

## Interpretación física

El resultado muestra que la rapidez pertenece al medio: la cuerda inicial permite que la perturbacion avance unos 95 metros cada segundo porque combina tension moderada y masa lineal baja. Esto significa que la frecuencia de la fuente no ha causado esa rapidez; solo ha decidido cuantas oscilaciones por segundo se dibujan sobre una onda que ya tiene una rapidez mecanica fijada.

Al duplicar [[mu]], la cuerda se vuelve mas dificil de acelerar en cada metro. La tension sigue siendo la misma, pero debe mover mas inercia distribuida. Por eso la rapidez disminuye y, al mantenerse [[f]], tambien disminuye [[lambda]]. La comparacion aisla la idea clave del leaf: una cuerda mas pesada por metro no necesita una fuente mas lenta para propagar mas despacio; su propia inercia ya reduce [[v]].

La lectura de [[L]] anade una consecuencia fisica distinta. Si el tramo esta fijado, la misma rapidez mecanica queda obligada a encajar en un recorrido de ida y vuelta; por eso la frecuencia fundamental no mide una nueva causa, sino una restriccion geometrica sobre una propagacion ya decidida por la cuerda. En un laboratorio, esto ayuda a no mezclar decisiones: cambiar la masa lineal modifica el medio, cambiar la longitud activa modifica las condiciones de frontera, y cambiar la fuente solo cambia el ritmo impuesto.

En un laboratorio, esta lectura permite comprobar experimentalmente el modelo midiendo tiempos de recorrido de un pulso. En un instrumento, explica por que una cuerda mas gruesa puede producir notas mas graves sin cambiar necesariamente la longitud activa: al modificar [[mu]], cambia la rapidez y con ella las frecuencias que pueden sostenerse.

# Ejemplo de aplicación real

## Contexto

Un tecnico prepara una demostracion con una cuerda larga para mostrar pulsos transversales a un grupo de estudiantes. Quiere que el pulso tarde aproximadamente una fraccion de segundo en recorrer varios metros, para que el movimiento sea visible. Puede elegir entre una cuerda fina y otra mas pesada, y tambien puede ajustar la tension con una masa colgante.

## Estimación física

Si usa una cuerda de densidad lineal cercana a 0.020 kg/m con una tension de 20 N, la rapidez esperada es del orden de 30 m/s. En una cuerda de 5 m, el recorrido completo estaria en torno a una decima de segundo, visible con camara lenta o con marcas sobre la cuerda. Si sube la tension hasta 80 N manteniendo la misma cuerda, la rapidez se duplica aproximadamente, no se cuadruplica.

Si en lugar de aumentar la tension cambia a una cuerda cuatro veces mas pesada por metro, la rapidez se reduce aproximadamente a la mitad. Esta estimacion permite disenar la practica: para observar bien el pulso conviene una cuerda no demasiado ligera y una tension moderada. El objetivo no es maximizar [[v]], sino obtener un tiempo de viaje que pueda medirse.

## Interpretación

La decision practica depende de la pregunta fisica. Si se quiere ver causalidad entre tension y rapidez, se mantiene [[mu]] constante y se modifica [[T]]. Si se quiere comparar materiales, se mantiene [[T]] constante y se modifica [[mu]]. En ambos casos, la lectura correcta no consiste en mirar solo el ritmo de sacudida de la mano, sino en medir cuanto tarda el pulso en recorrer una distancia conocida.

El ejemplo real tambien muestra por que el modelo ideal es util aunque no sea perfecto. Una cuerda real pierde energia, tiene soportes que reflejan y puede no estar totalmente uniforme. Aun asi, la tendencia principal permite planificar el experimento: mas tension acelera la propagacion, mas densidad lineal la frena y la frecuencia de la fuente ajusta la separacion espacial de la onda.
`;export{a as default};
