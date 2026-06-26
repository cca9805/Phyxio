# Teoría de la fuerza forzada

## Contexto conceptual

Una fuerza forzada aparece cuando un oscilador no se deja evolucionar libremente, sino que recibe una excitación externa periódica. El sistema ya no decide por sí solo el ritmo final: en régimen estacionario responde a la frecuencia impuesta por la fuente. Lo importante no es solo si vibra, sino cuánto vibra y con qué retraso respecto a la fuerza aplicada.

Este leaf estudia la respuesta permanente de un oscilador lineal con masa [[m]], rigidez [[k]] y amortiguamiento [[b]]. La fuente aporta una amplitud [[F0]] y una pulsación [[omega_f]]. La salida estacionaria se resume en una amplitud [[X]], un desfase [[delta]] y una posición temporal [[x]]. Las derivadas [[x_d]] y [[x_dd]] aparecen porque la ecuación completa incluye velocidad y aceleración.

## 🟢 Nivel esencial

La idea esencial es que una fuerza externa puede imponer un ritmo al sistema. Si empujas periódicamente un objeto unido a un muelle, la respuesta final no conserva necesariamente la frecuencia natural libre; se sincroniza con el forzado. Lo que cambia al variar el ritmo de empuje es la amplitud conseguida y el retraso con que el sistema responde.

En baja frecuencia, el sistema suele comportarse casi como si la fuerza se aplicara despacio: la rigidez domina. En frecuencias altas, domina la inercia y el sistema no puede seguir con facilidad. Entre ambos comportamientos aparece una zona de respuesta grande, que se estudiará con más detalle en resonancia. Aquí el objetivo es construir la respuesta estacionaria general.

El desfase es tan importante como la amplitud. Dos sistemas pueden vibrar con amplitudes parecidas y, sin embargo, responder con retrasos distintos. Ese retraso indica cómo se reparte el papel de rigidez, inercia y disipación en la respuesta.

## 🔵 Nivel formal

El modelo dinámico se escribe como balance entre inercia, disipación, elasticidad y fuerza externa:

{{f:ecuacion_diferencial_forzada}}

Cuando el transitorio libre ya ha decaído, la amplitud estacionaria de la respuesta se calcula con:

{{f:amplitud_forzada}}

Esta relación no dice solo "más fuerza produce más movimiento". El denominador expresa la oposición dinámica del sistema. El término elástico [[k]] compite con el término inercial [[m]] unido a la frecuencia impuesta, mientras [[b]] introduce disipación proporcional a la velocidad.

El retraso angular entre fuerza y respuesta se calcula mediante:

{{f:desfase_forzada}}

Finalmente, la posición estacionaria se representa con:

{{f:respuesta_estacionaria}}

El orden formal recomendado es plantear la ecuación, calcular [[X]], calcular [[delta]] y luego escribir [[x]]. Si se salta el desfase, la respuesta temporal puede tener una amplitud correcta pero una lectura física incompleta.

Formalmente también hay que distinguir tres niveles de salida. [[X]] es un número de amplitud para una frecuencia concreta; [[delta]] es una lectura angular de retraso; [[x]] es la señal que combina ambas cosas en el tiempo. La ecuación diferencial contiene además [[x_d]] y [[x_dd]], que no son adornos algebraicos: representan los mecanismos por los que amortiguamiento e inercia entran en el balance. Esta separación evita resolver todo como si fuera una única fórmula de amplitud.

## 🔴 Nivel estructural

Estructuralmente, este leaf describe el régimen permanente de un sistema lineal. Eso significa que no se está explicando el arranque completo. Al principio coexisten una parte transitoria, heredada de las condiciones iniciales, y una parte forzada. Tras suficiente tiempo, el transitorio se disipa y queda la respuesta sincronizada con la fuente.

El modelo presupone que la fuerza externa es sinusoidal, que [[m]], [[k]] y [[b]] son constantes, y que la amplitud no activa no linealidades. Si el muelle cambia de rigidez, si el amortiguamiento depende de velocidad de forma compleja o si la fuente no es sinusoidal, esta formulación deja de ser suficiente.

La diferencia con resonancia es didácticamente importante. Fuerza forzada estudia la respuesta para cualquier frecuencia impuesta; resonancia analiza la zona donde esa respuesta se hace especialmente grande. Este leaf es la base operativa para poder entender después el máximo resonante.

Si el sistema se mide en laboratorio, esta estructura se comprueba esperando varios ciclos antes de tomar datos. Una medida demasiado temprana mezcla movimiento libre y movimiento forzado. Una medida demasiado grande puede activar efectos no lineales. Por eso el régimen estacionario es una idealización potente, pero exige una ventana experimental bien elegida.

## Interpretación física profunda

La respuesta forzada muestra que un sistema no solo tiene propiedades internas; también depende de cómo se le excita. La misma masa y el mismo muelle pueden responder poco o mucho según la frecuencia externa. Por eso no basta con conocer la frecuencia natural: hay que comparar la fuente con la oposición dinámica completa.

El desfase revela una información que la amplitud no contiene. Cuando la respuesta está casi en fase, el sistema acompaña a la fuerza. Cuando el retraso crece, la energía se almacena y se disipa de otra manera durante el ciclo. En aplicaciones reales, ese retraso puede importar tanto como la amplitud, por ejemplo en actuadores, sensores y estructuras vibrantes.

## Orden de magnitud

Si [[F0]] es de 10 N y [[k]] es de 100 N/m, la respuesta cuasiestática esperada es del orden de 0,1 m cuando la frecuencia impuesta es muy baja. Si [[omega_f]] aumenta, el término inercial puede reducir o modificar esa lectura. El producto [[b]][[omega_f]] tiene unidades de rigidez efectiva y debe compararse con [[k]] y con [[m]] por frecuencia al cuadrado.

Una comprobación rápida es dimensional: [[X]] debe salir en metros, [[delta]] en radianes y [[omega_f]][[t]] debe ser adimensional. Si el denominador de la amplitud se interpreta como fuerza en lugar de rigidez efectiva, el resultado pierde sentido físico.

## Método de resolución personalizado

Primero identifica si el problema pide amplitud, fase o señal temporal. Si pide amplitud, concentra la lectura en [[F0]], [[k]], [[m]], [[b]] y [[omega_f]]. Si pide fase, revisa el signo del término elástico menos inercial y el cuadrante de [[delta]]. Si pide [[x]], no lo calcules hasta conocer [[X]] y [[delta]].

Después interpreta el resultado con lenguaje de régimen estacionario. Pregunta si la respuesta es grande o pequeña respecto a la escala elástica, si el desfase es despreciable o relevante, y si el transitorio ya puede ignorarse. Esta interpretación separa la solución forzada general del estudio específico de resonancia.

## Casos especiales y ejemplo extendido

En forzado lento, la respuesta se parece a una deformación estática que sigue a la fuerza. En forzado muy rápido, la masa impide seguir el empuje y la amplitud puede ser pequeña. En una zona intermedia, la amplitud puede crecer de forma notable, especialmente si el amortiguamiento [[b]] es bajo.

Por ejemplo, una máquina que aplica una fuerza periódica pequeña puede producir una respuesta apreciable si [[omega_f]] cae en una zona dinámica sensible. La conclusión no es automáticamente "hay resonancia"; primero se calcula la respuesta estacionaria y se analiza si el tamaño de [[X]] es aceptable.

## Preguntas reales del alumno

Una duda habitual es si la respuesta usa la frecuencia natural. En régimen estacionario forzado, la respuesta usa la frecuencia de la fuerza externa. Otra pregunta es por qué aparece desfase. Aparece porque inercia, disipación y rigidez no responden al mismo tiempo dentro del ciclo.

También se pregunta si la fórmula de amplitud incluye el transitorio. No: describe la parte permanente después de que el movimiento libre se haya apagado.

## Conexiones transversales y rutas de estudio

Este leaf conecta con amortiguamiento porque [[b]] determina disipación y fase. Conecta con resonancia porque allí se estudia el máximo de la respuesta al variar [[omega_f]]. También conecta con control y vibraciones mecánicas, donde interesa diseñar excitaciones que produzcan o eviten movimiento.

## Síntesis final

La fuerza forzada enseña a pasar de una fuente periódica externa a una respuesta estacionaria con amplitud, fase y señal temporal. La competencia final es decidir cómo la frecuencia impuesta modifica la respuesta sin confundir este análisis general con el caso especial de resonancia.
