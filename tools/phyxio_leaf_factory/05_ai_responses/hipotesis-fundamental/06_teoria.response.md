# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: hipotesis-fundamental
# Target response file: teoria.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Hipotesis fundamental
## Contexto conceptual
La hipótesis fundamental de la física estadística aparece cuando un sistema aislado ha perdido la memoria de cómo llegó a su estado macroscópico. Si [[energia_total]], [[volumen]] y [[numero_particulas]] permanecen fijos, muchos microestados distintos pueden representar el mismo aspecto macroscópico. La pregunta no es cuál microestado “elige” el sistema, sino qué asignación estadística es compatible con no tener información adicional. La respuesta microcanónica es limpia: todos los microestados accesibles reciben la misma [[probabilidad_microestado]]. Esa igualdad no dice que el sistema esté quieto, sino que no hay razón física interna, dentro del modelo aislado, para privilegiar un microestado permitido frente a otro.

## 🟢 Nivel esencial
La hipótesis fundamental afirma que, en un sistema aislado en equilibrio, cada microestado accesible cuenta lo mismo. Accesible significa compatible con las restricciones macroscópicas: [[energia_total]] fijada, [[volumen]] fijado y [[numero_particulas]] fijado. Si solo sabemos esas restricciones, asignar distinta [[probabilidad_microestado]] a dos microestados equivalentes introduciría una preferencia no justificada. La idea no es que el sistema visite todos los microestados de forma visible en cada instante, sino que la descripción estadística no debe favorecer ninguno. Por eso el número [[numero_microestados_accesibles]] se vuelve central: cuanto más grande es el conjunto de posibilidades, menor es la fracción asignada a cada una. Un macroestado con mayor [[multiplicidad_macroestado]] resulta más probable porque agrupa más microestados igualmente posibles, no porque cada microestado individual pese más nunca.

## 🔵 Nivel formal
La formulación parte del conjunto microcanónico: solo se consideran microestados compatibles con las restricciones fijas del sistema aislado. El postulado asigna una [[probabilidad_microestado]] uniforme a cada microestado accesible.

{{f:postulado_equiprobabilidad_microcanonica}}

La normalización garantiza que toda la población estadística queda repartida dentro del conjunto accesible, sin probabilidad perdida fuera de las restricciones.

{{f:normalizacion_microestados_accesibles}}

La [[entropia]] conecta el conteo microscópico con una magnitud macroscópica: no mide desorden visual, sino crecimiento logarítmico de [[numero_microestados_accesibles]].

{{f:entropia_boltzmann_microcanonica}}

Para comparar macroestados, se usa la [[multiplicidad_macroestado]]: si un macroestado agrupa más microestados, su probabilidad total aumenta aunque cada microestado tenga la misma [[probabilidad_microestado]].

{{f:probabilidad_macroestado_desde_multiplicidad}}

El [[desbalance_probabilidad]] permite detectar si una distribución propuesta se aleja de la equiprobabilidad ideal.

{{f:desbalance_frente_equiprobabilidad}}

Así, la hipótesis fundamental convierte una ausencia de información dinámica fina en una regla cuantitativa: contar microestados accesibles, normalizar, comparar multiplicidades y leer la [[entropia]] como medida de amplitud estadística. En problemas reales, estas fórmulas no se usan como decoración algebraica: fijan qué conjunto se cuenta, qué probabilidad recibe cada microestado y qué magnitud macroscópica resume el conteo. Además, obliga a distinguir conteo total, conteo de macroestado y probabilidad individual antes de interpretar cualquier resultado.

## 🔴 Nivel estructural
La hipótesis fundamental descansa sobre varias condiciones que no conviene esconder bajo la alfombra. Primera: el sistema debe tratarse como aislado durante el intervalo relevante; si intercambia energía, partículas o volumen efectivo con el entorno, las restricciones [[energia_total]], [[volumen]] y [[numero_particulas]] dejan de fijar el conjunto accesible y la distribución adecuada ya no es necesariamente microcanónica. Segunda: debe existir equilibrio estadístico; no basta con tener muchos microestados, porque una preparación inicial sesgada puede mantener durante un tiempo un [[desbalance_probabilidad]] apreciable. Tercera: los microestados comparados deben estar definidos con el mismo nivel de descripción; mezclar celdas de fase de distinto tamaño, degeneraciones mal contadas o macroestados de granularidad desigual rompe la lectura de [[numero_microestados_accesibles]].

Hay invariantes básicos: la normalización de la [[probabilidad_microestado]], la conservación de las restricciones macroscópicas y la equivalencia estadística entre microestados accesibles. También hay límites claros. Si el sistema es pequeño, integrable, con barreras dinámicas internas o con tiempos de mezcla enormes, la equiprobabilidad puede funcionar como ideal teórico pero fallar como descripción experimental inmediata. Si ciertos microestados son inaccesibles por simetrías, restricciones adicionales o conservación oculta, incluirlos infla artificialmente la [[entropia]]. Si se compara un macroestado por su [[multiplicidad_macroestado]], hay que recordar que la probabilidad del macroestado suma muchas probabilidades individuales; no cambia el peso de cada microestado.

La lectura gráfica del leaf debe verse como un mapa de reparto: al crecer [[numero_microestados_accesibles]], la [[probabilidad_microestado]] individual disminuye, mientras la [[entropia]] aumenta de forma logarítmica. Esta relación no es una ley dinámica de movimiento, sino una consecuencia estructural de contar posibilidades compatibles con las restricciones. El modelo falla cuando aparece un [[desbalance_probabilidad]] persistente, cuando las restricciones no están bien definidas, cuando el sistema no está aislado o cuando la muestra temporal no representa el conjunto accesible. En esos casos, la hipótesis fundamental sigue siendo una brújula conceptual, pero no una descripción cerrada del experimento. Un caso frontera importante aparece cuando el número de microestados es pequeño: la regla sigue siendo lógica, pero las fluctuaciones relativas son visibles y no debe confundirse el promedio estadístico con una garantía instantánea. Otro límite surge cuando el tiempo de observación es corto frente al tiempo de exploración del espacio accesible; entonces una muestra puede parecer sesgada aunque el ideal de equilibrio sea uniforme. Por eso el gráfico debe leerse como relación entre conteo, probabilidad y entropía, no como historial temporal.

## Interpretación física profunda
La equiprobabilidad no es una apuesta ingenua por “todos los estados igual porque sí”. Es una regla de simetría informacional: si dos microestados satisfacen las mismas restricciones macroscópicas, no existe dentro del modelo aislado una etiqueta física que permita favorecer uno. La [[probabilidad_microestado]] uniforme expresa esa ausencia de privilegio. La [[entropia]] aparece entonces como traducción macroscópica del tamaño del repertorio microscópico. Un valor alto no significa caos visible, sino muchas maneras microscópicas de realizar el mismo estado observable. La [[multiplicidad_macroestado]] explica por qué ciertos macroestados dominan: no porque tengan microestados especiales, sino porque contienen una multitud de microestados ordinarios.

## Orden de magnitud
En sistemas macroscópicos, [[numero_microestados_accesibles]] suele ser gigantesco. Para un mol, [[numero_particulas]] es del orden de 10^23, por lo que pequeñas diferencias de [[multiplicidad_macroestado]] pueden producir probabilidades macroscópicas abrumadoras. Si [[numero_microestados_accesibles]] fuera 10^6, cada [[probabilidad_microestado]] ideal sería del orden de 10^-6. Si fuera 10^10^20, la probabilidad individual sería inimaginablemente pequeña, pero la [[entropia]] seguiría siendo manejable por su dependencia logarítmica.

## Método de resolución personalizado
Primero identifica si el sistema puede tratarse como aislado y fija [[energia_total]], [[volumen]] y [[numero_particulas]]. Después define qué microestados cumplen esas restricciones y cuenta, estima o representa [[numero_microestados_accesibles]]. Aplica la equiprobabilidad solo dentro de ese conjunto. Luego calcula la [[probabilidad_microestado]] y, si el problema pregunta por macroestados, usa la [[multiplicidad_macroestado]] correspondiente. Finalmente interpreta la [[entropia]] como lectura del tamaño estadístico y usa [[desbalance_probabilidad]] para comprobar si la distribución propuesta realmente respeta la hipótesis fundamental.

## Casos especiales y ejemplo extendido
Si solo hay dos microestados accesibles, la hipótesis asigna la misma [[probabilidad_microestado]] a ambos. Si aparece un tercer microestado al ampliar ligeramente la ventana de [[energia_total]], cada probabilidad individual disminuye, aunque el conjunto total sea más amplio. Si un macroestado A agrupa dos microestados y otro B agrupa ocho, B resulta más probable en el modelo microcanónico porque tiene mayor [[multiplicidad_macroestado]]. En el límite de muchísimos microestados, las probabilidades individuales son minúsculas, pero las diferencias de multiplicidad dominan lo observable. Si una pared móvil cambia [[volumen]] o entra energía desde fuera, el conjunto accesible cambia y la comparación anterior ya no describe el mismo sistema.

## Preguntas reales del alumno
¿La hipótesis dice que el sistema pasa por todos los microestados? No necesariamente; dice cómo asignar probabilidades cuando el sistema aislado está en equilibrio y no hay información que distinga microestados accesibles. ¿Por qué un macroestado puede ser más probable si todos los microestados son igual de probables? Porque el macroestado contiene muchos microestados, y sus probabilidades se suman. ¿La [[entropia]] es desorden? Es mejor leerla como medida de multiplicidad: cuántas configuraciones microscópicas sostienen el mismo aspecto macroscópico. ¿Qué revela un [[desbalance_probabilidad]] grande? Que la distribución propuesta contiene una preferencia no explicada por la hipótesis fundamental.

## Conexiones transversales y rutas de estudio
Esta hipótesis conecta directamente con la [[entropia]] de Boltzmann, la distribución microcanónica, la probabilidad de macroestados y el paso hacia el ensemble canónico. También prepara la idea de equilibrio estadístico: no buscamos una trayectoria concreta, sino una distribución estable y coherente con restricciones físicas.

## Síntesis final
La hipótesis fundamental transforma “no sé qué microestado tiene el sistema” en una regla precisa: todos los microestados accesibles de un sistema aislado en equilibrio reciben la misma [[probabilidad_microestado]]. Desde ahí nacen la [[multiplicidad_macroestado]], la [[entropia]] y la lectura probabilística de la termodinámica.

