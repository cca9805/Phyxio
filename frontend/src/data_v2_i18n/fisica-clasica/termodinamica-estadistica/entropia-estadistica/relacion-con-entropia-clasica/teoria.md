## Contexto conceptual

La [[entropia]] aparece en dos lenguajes que al principio parecen distintos. En termodinámica clásica se observa desde intercambios de [[calor_reversible]] entre estados de equilibrio. En física estadística se lee desde el número de formas microscópicas compatibles con lo que vemos macroscópicamente. Este leaf une ambas miradas: el mismo cambio físico puede describirse como dispersión energética reversible o como cambio de multiplicidad. La pregunta central es cómo una medida basada en [[temperatura]] y calor puede coincidir con otra basada en [[numero_microestados]].

## 🟢 Nivel esencial

La conexión entre [[entropia]] clásica y estadística dice que un sistema cambia su estado térmico porque también cambia el número de formas microscópicas de realizarlo. Cuando un cuerpo recibe [[calor_reversible]] a una [[temperatura]] dada, no solo gana energía: esa energía queda repartida entre más posibilidades internas. La [[delta_entropia]] mide ese cambio de reparto.

Desde la mirada microscópica, el sistema pasa de una multiplicidad inicial a otra final, y el [[ratio_microestados]] expresa cuánto se amplía o se reduce el conjunto de configuraciones accesibles. Si el estado final admite muchas más configuraciones, la [[entropia]] aumenta. Si admite menos, disminuye. La [[k_boltzmann]] actúa como puente de escala entre el conteo estadístico y las unidades termodinámicas habituales. La idea central es comparar siempre el mismo cambio físico, no dos fenómenos separados.

## 🔵 Nivel formal

En la formulación clásica reversible, la variación se obtiene comparando el [[calor_reversible]] intercambiado con la [[temperatura]] absoluta del proceso. La fórmula relevante es:

{{f:variacion_entropia_reversible}}

Esta relación solo se aplica directamente a caminos reversibles o a transformaciones que puedan sustituirse por un camino reversible equivalente entre los mismos estados. En la lectura estadística, la [[entropia]] se asocia a la multiplicidad microscópica compatible con el macroestado observado:

{{f:entropia_boltzmann_clasica}}

Cuando se comparan dos estados de equilibrio del mismo sistema, no importa tanto el valor absoluto de cada multiplicidad como el cambio relativo entre ellas. Por eso se introduce el [[ratio_microestados]], que conecta el paso de un conjunto de [[numero_microestados]] inicial a otro final. La equivalencia central se resume en:

{{f:igualdad_delta_entropia}}

La clave formal es que la misma [[delta_entropia]] puede leerse como cociente térmico clásico o como cambio logarítmico de multiplicidad. La [[k_boltzmann]] convierte una lectura adimensional, basada en conteos, en una magnitud con unidades de energía por [[temperatura]]. Así, el signo y la unidad deben coincidir en ambas rutas. Además, cualquier despeje debe conservar que [[delta_entropia]] es una magnitud de estado: el camino reversible aporta el valor calculable, mientras el conteo microscópico aporta la interpretación. Si una ruta da signo positivo y la otra negativo, no hay equivalencia física sino un error de sistema, escala o dominio.

## 🔴 Nivel estructural

La estructura del modelo exige distinguir estado, camino y descripción microscópica. La [[entropia]] es una magnitud de estado: su variación entre dos estados de equilibrio no depende del camino real seguido, aunque el cálculo clásico mediante [[calor_reversible]] sí requiere imaginar un camino reversible. Esta separación evita una confusión frecuente: un proceso irreversible real puede tener una [[delta_entropia]] bien definida, pero no se calcula dividiendo cualquier calor real entre [[temperatura]]. El camino reversible es un instrumento de cálculo, no necesariamente la historia física ocurrida.

Las hipótesis principales son equilibrio inicial y final, [[temperatura]] absoluta positiva y bien definida, sistema suficientemente grande para que el conteo de [[numero_microestados]] tenga sentido estadístico, y compatibilidad entre el macroestado clásico y el conjunto microscópico usado. También se asume que el [[calor_reversible]] pertenece al mismo sistema y al mismo cambio de estado que se compara estadísticamente. Si cambian las restricciones externas, la energía disponible, el volumen o el número de partículas sin reflejarlo en el conteo, la conexión pierde coherencia.

Los invariantes son importantes. La [[k_boltzmann]] no cambia con el sistema; el signo de [[delta_entropia]] debe coincidir con el crecimiento o disminución del [[ratio_microestados]]; y las unidades finales deben ser energía por [[temperatura]]. Un [[ratio_microestados]] mayor que uno se asocia a aumento de [[entropia]], mientras que un valor menor que uno indica reducción de multiplicidad accesible. El caso límite sin cambio de multiplicidad corresponde a cambio entrópico nulo, tanto en la gráfica como en el modelo.

El modelo falla si no hay estados de equilibrio comparables, si la [[temperatura]] no puede definirse de forma uniforme, si se intenta usar calor no reversible como si fuera reversible, o si se cuentan microestados de dos sistemas distintos. En la lectura gráfica, la curva debe mostrar que el aumento estadístico no es lineal en la multiplicidad absoluta, sino logarítmico en el cociente microscópico. Esa forma visual ayuda a detectar números enormes mal interpretados como cambios proporcionalmente enormes de [[delta_entropia]]. También obliga a revisar dominio, unidades y signo antes de aceptar el resultado. En términos de dominio, la gráfica esperada debe reforzar esta lectura: cambios iguales en [[ratio_microestados]] no se traducen siempre en saltos lineales de [[delta_entropia]]. Por eso el modelo exige interpretar pendiente, signo y curvatura junto con las hipótesis, no como dibujo decorativo.

## Interpretación física profunda

La conexión no afirma que la [[entropia]] sea “desorden” sin más. Afirma algo más preciso: mide cuántas realizaciones microscópicas son compatibles con una descripción macroscópica y cómo esa multiplicidad cambia durante un proceso. El [[calor_reversible]] representa una transferencia energética ordenadamente controlada; la [[temperatura]] mide la escala térmica que hace más o menos significativo ese intercambio. Desde abajo, el mismo cambio aparece como aumento o reducción de [[numero_microestados]]. Por eso la [[delta_entropia]] es un puente: traduce una lectura energética macroscópica a una lectura estadística. La [[k_boltzmann]] es el adaptador de unidades entre ambos alfabetos físicos.

## Orden de magnitud

En sistemas macroscópicos, [[numero_microestados]] puede ser inmensamente grande, de orden exponencial respecto al número de partículas. Por eso se trabaja con logaritmos y con [[ratio_microestados]], no con listados directos de configuraciones. Una [[delta_entropia]] de unos pocos J/K ya puede corresponder a cambios microscópicos gigantescos. Para gases o sólidos ordinarios, valores entre 1 J/K y 100 J/K son razonables en procesos térmicos de laboratorio, siempre que [[temperatura]] esté en kelvin y [[calor_reversible]] en julios.

## Método de resolución personalizado

Primero identifica los dos estados de equilibrio y decide si se pide una lectura clásica, estadística o ambas. Después localiza [[calor_reversible]], [[temperatura]], [[numero_microestados]] o [[ratio_microestados]] según los datos. Usa la fórmula reversible si tienes un camino reversible bien definido; usa la lectura de Boltzmann si tienes multiplicidades o cocientes. Comprueba el signo de [[delta_entropia]]: debe aumentar si el estado final tiene más microestados accesibles. Por último valida unidades, coherencia del sistema y sentido físico del resultado.

## Casos especiales y ejemplo extendido

Si el [[ratio_microestados]] vale uno, los estados tienen la misma multiplicidad y la [[delta_entropia]] es nula aunque puedan diferir en otras variables no consideradas. Si el sistema recibe [[calor_reversible]] a alta [[temperatura]], el mismo calor produce menor cambio entrópico que a baja [[temperatura]], porque la energía añadida altera menos la distribución relativa de posibilidades. En un gas que se expande reversiblemente, suele crecer el volumen accesible y con él el [[numero_microestados]]. La lectura clásica registra un cambio mediante calor reversible; la estadística lo interpreta como más configuraciones disponibles para las partículas.

## Preguntas reales del alumno

¿La [[entropia]] clásica y la estadística son dos magnitudes diferentes? No: son dos formas compatibles de leer la misma magnitud cuando se aplican al mismo sistema y al mismo estado.

¿Por qué aparece la [[temperatura]] en la fórmula clásica? Porque mide la escala térmica del intercambio: el mismo [[calor_reversible]] no cambia igual la dispersión energética a todas las temperaturas.

¿Se puede usar cualquier calor? No. La relación directa usa [[calor_reversible]]. Para procesos irreversibles se calcula la [[delta_entropia]] mediante un camino reversible equivalente.

¿Por qué entra un logaritmo en la parte estadística? Porque la [[entropia]] debe sumar cuando se combinan sistemas independientes, mientras sus microestados se multiplican.

## Conexiones transversales y rutas de estudio

Este leaf conecta termodinámica clásica, teoría cinética, [[entropia]] estadística y modelos de equilibrio. Sirve como puente hacia irreversibilidad, energía libre, distribución de Maxwell-Boltzmann y física de la información. También prepara la lectura de gráficos donde una variable macroscópica suave oculta cambios microscópicos enormes.

## Síntesis final

La [[delta_entropia]] une dos mundos: el intercambio reversible de energía y el conteo microscópico de posibilidades. La [[k_boltzmann]] permite que ambos lenguajes midan la misma [[entropia]].