# Teoría de la resonancia

## Contexto conceptual

La resonancia estudia el máximo de respuesta de un oscilador cuando se lo fuerza periódicamente. No basta con decir que hay una fuerza externa: eso pertenece al leaf de fuerza forzada. Aquí la pregunta es más concreta: al variar [[omega_f]], ¿en qué zona la amplitud [[X]] se vuelve máxima y qué papel tienen [[b]], [[m]] y [[k]] en limitar o desplazar ese máximo?

El fenómeno aparece cuando la fuente entrega energía al sistema con un ritmo compatible con su dinámica interna. Si la disipación es pequeña, la respuesta puede crecer mucho alrededor de una frecuencia crítica. Si la disipación es grande, el pico se aplana, se ensancha o incluso deja de ser una resonancia clara de desplazamiento.

## 🟢 Nivel esencial

La idea esencial es comparar frecuencias. Un oscilador tiene una escala propia, pero la fuente impone otra escala externa. La resonancia ocurre cuando el barrido de frecuencia encuentra una zona donde el sistema absorbe energía con especial eficacia y la amplitud alcanza un máximo.

Ese máximo no significa que el sistema oscile "por sí solo". En régimen estacionario sigue respondiendo a la fuente externa. Lo que cambia es la eficiencia de transferencia de energía: cada ciclo añade movimiento en una fase favorable, y el amortiguamiento decide cuánto de esa energía se pierde antes del siguiente ciclo.

La resonancia tampoco es sinónimo de desastre. En instrumentos musicales, sensores o filtros puede ser útil porque amplifica una frecuencia concreta. En puentes, motores o estructuras puede ser peligrosa porque una excitación moderada produce una respuesta excesiva. El criterio físico no es "amplitud grande" en abstracto, sino amplitud grande respecto a tolerancias y al ancho de la zona crítica.

Por eso la selectividad es tan importante. Un pico alto y estrecho exige controlar muy bien la frecuencia de trabajo. Un pico bajo y ancho puede ser menos espectacular, pero afecta a una franja mayor de frecuencias. La lectura didáctica debe unir tres elementos: dónde está el pico, cuánto mide la respuesta y cuán selectivo es el sistema.

## 🔵 Nivel formal

Formalmente se parte de la curva de amplitud estacionaria del oscilador forzado. Para cada valor de [[omega_f]], la amplitud [[X]] queda determinada por la competencia entre rigidez, inercia y amortiguamiento:

{{f:amplitud_respuesta}}

Esta relación no declara resonancia por sí sola. Es una curva: hay que observar cómo cambia [[X]] al recorrer [[omega_f]]. La resonancia de desplazamiento se localiza buscando el máximo de esa curva, siempre que el amortiguamiento permita un máximo real y el modelo lineal siga siendo válido.

La frecuencia angular del pico de desplazamiento se estima mediante:

{{f:frecuencia_resonancia}}

La expresión muestra dos ideas importantes. Primero, el máximo no coincide exactamente con [[omega0]] cuando [[b]] no es despreciable. Segundo, si el término disipativo es demasiado grande, el máximo de desplazamiento deja de estar bien definido como pico resonante ordinario. Esto evita el error de llamar resonancia a cualquier oscilación forzada cerca de la frecuencia natural.

La selectividad del pico se resume con el factor de calidad:

{{f:factor_calidad}}

Un [[Q]] alto indica baja disipación relativa, pico estrecho y gran sensibilidad a pequeños cambios de [[omega_f]]. Un [[Q]] bajo indica una respuesta más amortiguada y menos selectiva. En problemas reales, [[Q]] ayuda a decidir si conviene evitar una frecuencia concreta o si basta con controlar una banda amplia.

El criterio operativo de resonancia se expresa como comparación entre la frecuencia de trabajo y la posición del pico:

{{f:criterio_resonancia}}

Este criterio debe leerse con cuidado. La igualdad exacta es una idealización; en una curva real importa si [[omega_f]] cae dentro de la zona alta del pico. Esa zona depende de [[Q]], de la tolerancia admisible de [[X]] y de la validez del modelo lineal.

## 🔴 Nivel estructural

Estructuralmente, la resonancia es una lectura de curva, no de un único dato. Un valor grande de [[X]] puede deberse a una fuerza [[F0]] grande, a una rigidez [[k]] pequeña o a una frecuencia cercana al pico. Para separar esas causas hay que mirar la dependencia de [[X]] con [[omega_f]] y no solo el desplazamiento medido en una frecuencia.

El amortiguamiento [[b]] actúa en dos niveles. Reduce la altura máxima porque disipa energía en cada ciclo, y desplaza el máximo respecto a [[omega0]]. Esta doble función explica por qué añadir amortiguamiento puede ser eficaz en seguridad estructural aunque no cambie de forma importante la frecuencia natural.

También importa distinguir resonancia de respuesta transitoria. Si se mide durante el arranque, la señal puede mezclar oscilación libre y respuesta forzada. El pico resonante se define en régimen estacionario, cuando la respuesta libre ya ha decaído y la curva amplitud-frecuencia representa una propiedad estable del sistema.

En diseño, el criterio estructural consiste en comparar tres escalas: la frecuencia de operación [[omega_f]], la frecuencia crítica [[omega_r]] y el ancho asociado a [[Q]]. Si la frecuencia de operación cae en una zona peligrosa, se puede cambiar [[m]], [[k]], [[b]] o la propia excitación. Cada intervención mueve una parte diferente del problema.

## Interpretación física profunda

La resonancia es una condición de transferencia eficiente de energía. La fuente externa no necesita ser enorme: si empuja con el ritmo adecuado, el sistema acumula respuesta ciclo tras ciclo hasta que la disipación equilibra la energía entrante. El estado estacionario no es energía infinita, sino balance entre alimentación y pérdida.

La comparación entre [[omega0]] y [[omega_r]] enseña una lectura fina. [[omega0]] describe una escala interna ideal del sistema; [[omega_r]] describe dónde aparece el máximo de amplitud bajo forzado y amortiguamiento. En amortiguamiento débil se parecen mucho, pero didácticamente no deben identificarse sin comprobar condiciones.

## Orden de magnitud

En sistemas mecánicos de laboratorio, [[omega0]] puede estar entre unos pocos rad/s y cientos de rad/s. Un [[Q]] de 2 o 3 ya muestra cierta selectividad, mientras que valores de 20 o 50 producen picos estrechos que exigen barridos finos. La amplitud [[X]] debe compararse con longitudes admisibles: milímetros en máquinas precisas, centímetros en montajes flexibles o valores mucho menores en sensores.

El orden de magnitud también ayuda a detectar errores. Si el cálculo da un pico enorme con [[b]] grande, probablemente se ha omitido el término disipativo. Si [[omega_r]] queda muy lejos de [[omega0]] con amortiguamiento pequeño, conviene revisar unidades de [[b]], [[m]] o [[k]].

## Método de resolución personalizado

Primero identifica los parámetros del sistema: [[m]], [[k]] y [[b]]. Después calcula o estima [[omega0]] si el problema la proporciona como escala natural. A continuación localiza [[omega_r]] y calcula [[Q]] para saber si el pico será estrecho o ancho. Solo entonces compara la frecuencia de trabajo [[omega_f]] con la zona crítica.

Si el ejercicio pide una amplitud concreta, usa la curva de respuesta para calcular [[X]] en esa frecuencia. Si pide decidir si hay resonancia, no basta con un cálculo aislado: debes explicar si [[omega_f]] coincide con el máximo o si cae cerca de él según el ancho del pico. Esa frase física suele ser más importante que el número final.

## Casos especiales y ejemplo extendido

Con amortiguamiento muy pequeño, el pico aparece muy cerca de [[omega0]] y [[Q]] es alto. En ese caso una pequeña variación de frecuencia cambia mucho la amplitud. Con amortiguamiento moderado, el pico baja y se desplaza. Con amortiguamiento fuerte, puede no haber un máximo de desplazamiento nítido, aunque siga existiendo respuesta forzada.

Imagina una bancada que trabaja cerca de una velocidad crítica. Si al aumentar [[b]] la amplitud baja aunque [[omega_f]] no cambie, el problema no era solo la frecuencia: era la acumulación de energía por ciclo. Si al cambiar [[k]] la frecuencia crítica se aleja de la velocidad de trabajo, el diseño evita que el barrido pase por la zona de máximo.

## Preguntas reales del alumno

"¿Resonancia significa que la amplitud es infinita?" No en un sistema real. El modelo ideal sin amortiguamiento puede divergir, pero cualquier disipación, límite material o no linealidad impone una amplitud finita. La pregunta correcta es si esa amplitud supera el rango seguro.

"¿Siempre ocurre en [[omega0]]?" Solo aproximadamente cuando [[b]] es pequeño. El pico real de desplazamiento se describe mejor con [[omega_r]]. Esta diferencia es pequeña en muchos ejercicios básicos, pero importante cuando se diseña o se mide.

"¿Puedo verla con una sola medición?" Una medición puede sugerir riesgo, pero la resonancia se confirma comparando la amplitud al variar [[omega_f]]. La curva es la evidencia física.

## Conexiones transversales y rutas de estudio

La resonancia conecta con fuerza forzada porque usa su respuesta estacionaria, pero añade la idea de máximo al barrer frecuencia. Conecta con amortiguamiento porque [[b]] decide la altura y anchura del pico. También aparece en sonido, circuitos eléctricos, instrumentación, puentes, motores y control de vibraciones.

Después de este leaf conviene estudiar modos normales, respuesta en frecuencia y sistemas acoplados. En todos ellos se repite la misma pregunta: qué frecuencias excitan mucho al sistema y qué mecanismos limitan esa respuesta.

## Síntesis final

Comprender resonancia significa leer una curva de respuesta, no memorizar una palabra. Debes distinguir la frecuencia impuesta, la frecuencia natural, la frecuencia del pico y la selectividad del sistema. El objetivo final es decidir si una excitación periódica es segura, útil o peligrosa según la amplitud que produce y según la capacidad del sistema para disipar energía.
