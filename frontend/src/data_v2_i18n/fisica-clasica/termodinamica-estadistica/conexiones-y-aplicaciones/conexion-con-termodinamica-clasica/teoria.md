## Contexto conceptual

La termodinámica clásica describe sistemas mediante variables macroscópicas como [[temperatura]], [[entropia]] y [[energia_interna]]. La termodinámica estadística explica de dónde salen esas variables: no las sustituye, las traduce al lenguaje de microestados. En este leaf, la pregunta clave es cómo el conteo de [[numero_microestados]] y la energía de cada configuración microscópica permiten entender por qué una [[temperatura]] clásica mide equilibrio térmico, por qué la entropía crece con la multiplicidad y por qué ciertos estados son más probables que otros.

## 🟢 Nivel esencial

Un macroestado clásico, como un gas con cierta [[temperatura]] y cierta [[energia_interna]], puede realizarse mediante muchísimas configuraciones microscópicas. Cada configuración compatible cuenta como microestado, y el total se recoge en [[numero_microestados]]. Cuantos más microestados corresponden al mismo aspecto macroscópico, mayor es la [[entropia]] asociada. La [[constante_boltzmann]] actúa como traductor de escala: convierte el conteo microscópico en una magnitud con unidades termodinámicas. Así, la termodinámica clásica no aparece como una regla aislada, sino como el resultado colectivo de muchísimas posibilidades microscópicas.

La [[probabilidad_relativa]] ayuda a decidir qué estados pesan más en equilibrio. Esta lectura también aclara por qué dos sistemas con igual aspecto externo pueden tener distinta estructura estadística. El objetivo no es calcular cada partícula, sino reconocer cómo una variable clásica resume muchas posibilidades internas. Por eso, al estudiar equilibrio, la mirada microscópica explica la estabilidad de las magnitudes macroscópicas.

## 🔵 Nivel formal

La conexión básica entre multiplicidad y [[entropia]] se expresa con la relación de Boltzmann:

{{f:entropia_boltzmann}}

Esta fórmula dice que [[numero_microestados]] no se suma de forma directa, sino mediante una escala logarítmica fijada por [[constante_boltzmann]]. La [[temperatura]] clásica aparece al analizar cómo cambia la [[entropia]] cuando varía la [[energia_interna]]:

{{f:temperatura_desde_entropia}}

Aquí [[derivada_entropia_energia]] representa la sensibilidad entrópica ante un cambio de energía. Si esa sensibilidad cambia, también cambia la lectura de [[temperatura]]. La [[energia_libre]] de Helmholtz resume competencia entre energía almacenada y término entrópico cuando [[temperatura]] se mantiene fija:

{{f:energia_libre_helmholtz}}

Por último, el peso estadístico de un estado con cierta [[energia_estado]] frente a otro se resume mediante:

{{f:probabilidad_boltzmann}}

Con estas cuatro relaciones, las variables clásicas dejan de ser etiquetas externas y se leen como límites macroscópicos de conteos, pendientes y pesos microscópicos. El punto formal importante es no mezclar los papeles: [[entropia]] mide multiplicidad, [[temperatura]] mide respuesta entrópica, [[energia_libre]] compara estabilidad y [[probabilidad_relativa]] compara ocupación estadística. Además, estas expresiones separan tres tareas: contar posibilidades, medir una pendiente energética y comparar pesos. Si una respuesta numérica no respeta esa separación, puede producir una lectura clásica falsa aunque la operación algebraica parezca correcta.

## 🔴 Nivel estructural

El puente entre termodinámica estadística y termodinámica clásica exige varias hipótesis. Primero, el sistema debe admitir una descripción mediante microestados distinguibles o contables, aunque en la práctica ese conteo sea idealizado. Segundo, debe existir un macroestado bien definido, porque [[entropia]], [[temperatura]] y [[energia_interna]] no describen una partícula aislada de forma completa, sino un conjunto de configuraciones compatibles con restricciones macroscópicas. Tercero, se presupone equilibrio o cuasiequilibrio: si el sistema cambia demasiado deprisa, la [[temperatura]] puede no estar definida de manera única y la [[derivada_entropia_energia]] deja de ser una lectura estable.

Hay invariantes conceptuales que conviene conservar. [[numero_microestados]] no mide desorden visual, sino multiplicidad compatible con información macroscópica. [[constante_boltzmann]] no es un ajuste arbitrario, sino el factor que convierte el mundo microscópico en unidades clásicas. [[probabilidad_relativa]] no afirma que un estado sea inevitable, sino que su peso en equilibrio aumenta o disminuye con [[energia_estado]] y [[temperatura]]. La [[energia_libre]] tampoco es toda la energía disponible en cualquier situación; su lectura tiene sentido bajo condiciones concretas, especialmente [[temperatura]] constante.

Los límites aparecen cuando hay pocos grados de libertad, interacciones fuertes no tratadas, sistemas fuera de equilibrio, transiciones de fase abruptas o estados con degeneración mal identificada. En esos casos, una gráfica Coord puede mostrar tendencias que no deben extrapolarse sin revisar el dominio: una curva de [[entropia]] frente a [[numero_microestados]] tiene crecimiento logarítmico, mientras una lectura de probabilidad frente a [[energia_estado]] depende de la escala térmica. Si la pendiente, la curvatura o el rango elegido contradicen el modelo, la interpretación clásica se vuelve frágil. Por eso la lectura estructural combina fórmulas, dominio y gráfica. La frontera de validez se reconoce cuando una misma variable clásica ya no resume bien el conjunto microscópico o cuando las fluctuaciones son comparables al valor medio. También existe un requisito de escala. Para que la descripción clásica sea suave, las fluctuaciones relativas deben ser pequeñas frente al valor medio. Cuando [[numero_microestados]] es enorme, esa suavidad suele emerger de forma natural; cuando el conjunto de estados es pequeño, la gráfica puede mostrar saltos o cambios bruscos. En ese caso no basta con aplicar una fórmula: hay que preguntar si [[entropia]], [[temperatura]] y [[energia_libre]] siguen representando propiedades macroscópicas robustas. Este criterio protege frente a extrapolaciones indebidas.

## Interpretación física profunda

La [[entropia]] no es una sustancia ni un recipiente de caos: es una forma de resumir cuántas formas microscópicas producen el mismo aspecto macroscópico. La [[temperatura]] no es solo “calor sensible”, sino una medida de cómo responde la multiplicidad cuando se cambia [[energia_interna]]. Si una pequeña variación energética produce muchos microestados adicionales, el sistema tiene una respuesta térmica distinta de otro con pocas posibilidades nuevas. La [[energia_libre]] condensa esa competencia: baja cuando el estado combina energía interna favorable y contribución entrópica compatible con la [[temperatura]] del entorno.

Esta lectura permite evitar dos errores: tratar la estadística como un detalle matemático sin significado físico o tratar la termodinámica clásica como una descripción sin origen microscópico. El enlace correcto es doble: la multiplicidad explica la entropía, y la pendiente entrópica explica la [[temperatura]].

## Orden de magnitud

En sistemas macroscópicos, [[numero_microestados]] puede ser enorme, a menudo mucho mayor que 10^20, por eso se usa logaritmo. La [[constante_boltzmann]] es muy pequeña en unidades SI, aproximadamente 10^-23 J/K, porque traduce contribuciones microscópicas a escalas macroscópicas. Una [[probabilidad_relativa]] menor que 10^-6 señala un estado estadísticamente poco relevante frente a otro bajo la misma [[temperatura]].

## Método de resolución personalizado

Primero identifica el macroestado clásico: qué [[temperatura]], [[energia_interna]] o [[entropia]] se quiere interpretar. Después busca la variable microscópica: [[numero_microestados]], [[energia_estado]] o [[probabilidad_relativa]]. Elige la fórmula adecuada y revisa unidades. Si aparece una pendiente, interpreta [[derivada_entropia_energia]] antes de hablar de [[temperatura]]. Si aparece [[energia_libre]], comprueba que el proceso se está leyendo a [[temperatura]] fija. Finalmente conecta el resultado con la gráfica Coord y pregunta si la tendencia observada responde a la pregunta física central.

## Casos especiales y ejemplo extendido

Si dos macroestados tienen el mismo [[numero_microestados]], tienen la misma [[entropia]] aunque sus microestados concretos sean distintos. Si aumenta [[energia_estado]] manteniendo [[temperatura]] baja, la [[probabilidad_relativa]] puede caer muy deprisa: el sistema evita estados energéticamente caros. A [[temperatura]] alta, esa penalización se suaviza. En un caso extendido, comparar dos configuraciones de un sólido permite ver que la termodinámica clásica aparece cuando muchísimas configuraciones individuales se agrupan en una tendencia estable y reproducible.

## Preguntas reales del alumno

¿Por qué la [[entropia]] usa microestados si la termodinámica clásica no los menciona? Porque la descripción clásica resume un comportamiento colectivo que la estadística explica desde abajo.

¿La [[temperatura]] es lo mismo que energía media? No exactamente. Su sentido estadístico depende de cómo cambia la [[entropia]] con la [[energia_interna]].

¿Una mayor [[probabilidad_relativa]] significa que el otro estado no puede ocurrir? No. Significa que, bajo las condiciones dadas, tiene menor peso estadístico.

## Conexiones transversales y rutas de estudio

Este leaf conecta con gases ideales, ensembles, equilibrio térmico, energía libre y segunda ley. También prepara el paso hacia distribuciones de Boltzmann, potenciales termodinámicos y fluctuaciones.

## Síntesis final

La termodinámica clásica se vuelve más profunda cuando se ve como el límite macroscópico de microestados. [[entropia]], [[temperatura]] y [[energia_libre]] resumen conteos, pendientes y pesos estadísticos.