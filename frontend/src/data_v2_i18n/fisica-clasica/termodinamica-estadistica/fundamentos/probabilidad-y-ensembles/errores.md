## Errores conceptuales


### Error 1: Confundir [[ensemble]] con sistema real

**Por qué parece correcto**
Se describe el [[ensemble]] como muchas copias del mismo sistema, lo que sugiere que debe existir un objeto físico concreto que las contenga o que el experimento deba repetirse literalmente.

**Por qué es incorrecto**
El [[ensemble]] es una herramienta estadística. Las copias son conceptuales: no hace falta construirlas ni medirlas individualmente. La [[probabilidad_estado]] se define sobre una población imaginaria de preparaciones equivalentes, no sobre repeticiones físicas obligatorias.

**Señal de detección**
El alumno pregunta cuántas copias existen literalmente o asume que [[numero_copias_ensemble]] requiere un aparato experimental con ese número exacto de réplicas materiales.

**Corrección conceptual**
Separa la idea de copias ideales de la necesidad de copias materiales. Un [[ensemble]] canónico con [[numero_copias_ensemble]] muy grande puede usarse para calcular el [[valor_medio_ensemble]] sin construir ninguna réplica física.

**Mini-ejemplo de contraste**
Un [[ensemble]] de gas ideal a temperatura fija tiene [[numero_copias_ensemble]] conceptualmente infinito. No necesitas 10²³ laboratorios: el [[peso_estadistico]] y la normalización se aplican sobre estados, no sobre copias reales.


### Error 2: Leer probabilidad como opinión personal

**Por qué parece correcto**
La palabra "probabilidad" se usa coloquialmente para expresar creencias o incertidumbre subjetiva, como "creo que llueve con probabilidad 0,7".

**Por qué es incorrecto**
La [[probabilidad_estado]] en un [[ensemble]] representa la fracción de copias compatibles con un [[estado_microscopico]] dado. No refleja la opinión del observador, sino la estructura de la distribución estadística derivada de la [[restriccion_macroscopica]].

**Señal de detección**
El alumno modifica la [[probabilidad_estado]] según lo que considera más razonable intuitivamente, sin conectarla con pesos, frecuencias o [[conteo_sistemas]].

**Corrección conceptual**
La probabilidad física se conecta con la preparación. Si la [[restriccion_macroscopica]] define el conjunto, las probabilidades vienen de los [[peso_estadistico]] o del [[conteo_sistemas]], no de impresiones personales.

**Mini-ejemplo de contraste**
Dos estudiantes con distintas intuiciones asignan [[probabilidad_estado]] diferentes al mismo [[estado_microscopico]]. Solo la distribución que reproduce el [[valor_medio_ensemble]] medido es físicamente válida.

## Errores de modelo


### Error 3: Mezclar restricciones macroscópicas

**Por qué parece correcto**
Parece útil combinar datos de ensembles con distintas preparaciones para obtener mayor estadística y una descripción más completa.

**Por qué es incorrecto**
Si el [[ensemble]] mezcla copias con distintas [[restriccion_macroscopica]], los [[estado_microscopico]] compatibles cambian entre subconjuntos. El [[conteo_sistemas]] total se vuelve incoherente y la [[probabilidad_estado]] resultante no describe ninguna preparación física real.

**Señal de detección**
La distribución de probabilidad obtenida incluye estados que son incompatibles con alguna de las preparaciones combinadas, o la suma de probabilidades no se normaliza correctamente al aplicar una sola fórmula al conjunto mixto.

**Corrección conceptual**
Define primero qué [[restriccion_macroscopica]] comparten todas las copias. Solo entonces distribuye probabilidades sobre [[estado_microscopico]] compatibles con esa preparación única. Si las preparaciones difieren, construye ensembles separados y analízalos por separado.

**Mini-ejemplo de contraste**
Un [[ensemble]] a temperatura fija y otro a energía fija no pueden combinarse directamente. El [[peso_estadistico]] de cada [[estado_microscopico]] difiere según la restricción aplicada y la normalización cambia.


### Error 4: Contar estados incompatibles

**Por qué parece correcto**
Incluir más [[estado_microscopico]] parece dar una descripción más completa y evitar que se omitan configuraciones del sistema.

**Por qué es incorrecto**
Solo los [[estado_microscopico]] compatibles con la [[restriccion_macroscopica]] pueden tener [[probabilidad_estado]] no nula. Contar estados fuera del conjunto permitido infla el denominador de la normalización y distorsiona todas las probabilidades hacia valores más pequeños de lo real.

**Señal de detección**
La suma de probabilidades resulta menor que 1 aunque todos los pesos sean positivos, o aparece un [[estado_microscopico]] con [[valor_estado]] que viola la restricción declarada.

**Corrección conceptual**
Define el conjunto de estados antes de asignar [[peso_estadistico]]. Si un estado no es compatible con la [[restriccion_macroscopica]], su peso es cero y no entra en la normalización ni en el cálculo del [[valor_medio_ensemble]].

**Mini-ejemplo de contraste**
Si la [[restriccion_macroscopica]] fija que la energía no supera 5 J, incluir un [[estado_microscopico]] con [[valor_estado]] de 8 J viola esa restricción y contamina el [[valor_medio_ensemble]] con una contribución que el sistema no puede alcanzar.

## Errores matemáticos


### Error 5: No normalizar probabilidades

**Por qué parece correcto**
Los [[peso_estadistico]] relativos ya indican cuál [[estado_microscopico]] es más frecuente, así que usarlos directamente parece ahorrar un paso.

**Por qué es incorrecto**
Un [[peso_estadistico]] solo dice qué estado es relativamente más frecuente dentro del conjunto. Sin normalizar, el [[valor_medio_ensemble]] tiene escala incorrecta porque la suma de probabilidades no es 1 y la [[fluctuacion_ensemble]] pierde su referencia física.

**Señal de detección**
La suma de los valores usados como probabilidades supera 1 o los resultados del [[valor_medio_ensemble]] tienen una magnitud mucho mayor que cualquier [[valor_estado]] individual.

**Corrección conceptual**
Divide cada [[peso_estadistico]] entre la suma total de pesos para convertirlo en [[probabilidad_estado]] física. Solo después aplica la fórmula del promedio ponderado. La normalización garantiza que el [[conteo_sistemas]] de cada estado sea coherente con [[numero_copias_ensemble]].

**Mini-ejemplo de contraste**
Pesos 2, 3 y 5 suman 10. Sin normalizar, el promedio con esos pesos da un resultado 10 veces mayor que el correcto. Con probabilidades 0,2; 0,3 y 0,5, el [[valor_medio_ensemble]] queda en la escala física correcta.


### Error 6: Promediar sin pesos

**Por qué parece correcto**
La media aritmética simple es rápida de calcular y se aprende antes que el promedio ponderado. Si los estados parecen igualmente frecuentes, parece razonable sumarlos y dividir entre el número de estados.

**Por qué es incorrecto**
Si los [[estado_microscopico]] no son igualmente probables, la media simple ignora la [[probabilidad_estado]] y produce un [[valor_medio_ensemble]] incorrecto. Solo en el caso uniforme, donde todos los [[peso_estadistico]] son iguales, la media simple coincide con el promedio ponderado.

**Señal de detección**
El resultado de la media simple difiere del promedio ponderado y el alumno no puede explicar por qué los estados con mayor [[peso_estadistico]] deberían contribuir más al observable final.

**Corrección conceptual**
Multiplica cada [[valor_estado]] por su [[probabilidad_estado]] antes de sumar. Si los pesos no son iguales, la media simple no reproduce el [[valor_medio_ensemble]] del [[ensemble]].

**Mini-ejemplo de contraste**
Tres estados con [[valor_estado]] 0 J, 4 J y 10 J y probabilidades 0,1; 0,2 y 0,7 dan [[valor_medio_ensemble]] de 7,8 J. La media simple (0 + 4 + 10)/3 ≈ 4,7 J, alejada del resultado correcto porque ignora que el tercer estado domina el [[ensemble]].

## Errores de interpretación


### Error 7: Ignorar la fluctuación

**Por qué parece correcto**
El promedio resume el comportamiento esperado y parece suficiente para la mayoría de las predicciones macroscópicas.

**Por qué es incorrecto**
Dos ensembles pueden tener el mismo [[valor_medio_ensemble]] pero dispersiones muy distintas. Ignorar la [[fluctuacion_ensemble]] lleva a concluir que ambos sistemas se comportan igual, cuando en realidad uno produce resultados mucho más variables copia a copia.

**Señal de detección**
El alumno reporta solo el [[valor_medio_ensemble]] sin comentar si la [[fluctuacion_ensemble]] es despreciable o comparable al promedio. Cuando [[fluctuacion_ensemble]] dividido entre [[valor_medio_ensemble]] supera 0,1, el promedio solo no basta.

**Corrección conceptual**
Calcula siempre la [[fluctuacion_ensemble]] junto al [[valor_medio_ensemble]] cuando los [[estado_microscopico]] tienen [[valor_estado]] muy distintos. La dispersión indica si una copia individual es típica o puede alejarse notablemente del promedio.

**Mini-ejemplo de contraste**
Dos ensembles con [[valor_medio_ensemble]] de 5 J: uno concentrado en un solo estado (baja [[fluctuacion_ensemble]]) y otro con pesos iguales entre 0 J y 10 J (alta dispersión). El promedio es idéntico, pero el comportamiento copia a copia es completamente diferente.


### Error 8: Tomar pesos como probabilidades

**Por qué parece correcto**
Un [[peso_estadistico]] mayor implica mayor [[probabilidad_estado]], así que puede parecer equivalente usarlos directamente sin normalizarlos primero.

**Por qué es incorrecto**
Un [[peso_estadistico]] indica importancia relativa, no absoluta. Antes de calcular [[valor_medio_ensemble]] o [[fluctuacion_ensemble]], los pesos deben convertirse en probabilidades normalizadas. Un peso de 5 no significa una probabilidad de 0,5 si la suma de todos los pesos no es 1.

**Señal de detección**
El alumno reporta un [[valor_medio_ensemble]] con magnitud incorrecta porque multiplicó [[valor_estado]] por pesos sin normalizar. Aparecen sumas de contribuciones mayores que el mayor [[valor_estado]] individual del conjunto.

**Corrección conceptual**
Suma todos los [[peso_estadistico]] primero. Luego divide cada peso entre la suma total para obtener la [[probabilidad_estado]] correspondiente. Solo entonces aplica la fórmula del [[valor_medio_ensemble]] ponderado.

**Mini-ejemplo de contraste**
Pesos 1, 2 y 7 dan suma 10. Las probabilidades son 0,1; 0,2 y 0,7, no 1, 2 y 7. Usar los pesos directamente en la fórmula del promedio sobreestima el [[valor_medio_ensemble]] diez veces y hace que la normalización de la [[probabilidad_estado]] quede sin verificar.

## Regla de autocontrol rápido

Comprueba tres cosas: las probabilidades suman 1, cada [[valor_estado]] tiene la misma unidad y la [[fluctuacion_ensemble]] acompaña al promedio cuando la dispersión sea relevante.
