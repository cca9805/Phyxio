## Contexto conceptual

Cuando un sistema cambia de fase, no siempre basta con mirar su aspecto macroscópico. Dos estados pueden tener la misma [[temperatura]] aproximada y, sin embargo, organizarse de forma distinta: un imán puede estar orientado o desordenado; un fluido puede volverse superfluido; una red cristalina puede perder una simetría. El [[parametro_de_orden]] sirve como lupa conceptual: condensa esa organización en una magnitud medible. Su valor no es solo un número, sino una señal de fase. Al acercarse a la [[temperatura_critica]], su comportamiento revela si la transición es suave, abrupta o dominada por fluctuaciones.

## 🟢 Nivel esencial

Un [[parametro_de_orden]] identifica una fase porque vale de forma distinta cuando la simetría o la organización interna cambian. En la fase desordenada suele ser nulo o muy pequeño; en la fase ordenada toma un valor finito. Por eso no describe simplemente “cuánto calor hay”, sino qué patrón colectivo ha elegido el sistema. La [[temperatura]] controla la agitación térmica, y la [[temperatura_critica]] marca la frontera ideal donde el orden aparece o desaparece. Si el cambio es continuo, el [[parametro_de_orden]] se apaga gradualmente al aproximarse a esa frontera. Si existe un [[salto_parametro_de_orden]], el cambio de fase es brusco.

La [[susceptibilidad]] indica cuánto responde ese orden ante perturbaciones externas pequeñas. La idea central es leer orden, no solo estado térmico. Esa lectura permite separar cambio de fase de simple variación continua.

## 🔵 Nivel formal

La descripción formal empieza comparando las fases mediante el [[parametro_de_orden]]. Si dos fases tienen valores diferentes, la diferencia se recoge con el [[salto_parametro_de_orden]], que diagnostica discontinuidad cuando no puede atribuirse al ruido experimental:

{{f:parametro_orden_diferencia_fases}}

Para localizar el sistema respecto a la [[temperatura_critica]], se introduce la [[temperatura_reducida]], que conserva el signo del lado térmico y permite comparar materiales con escalas críticas distintas:

{{f:temperatura_reducida_orden}}

En una transición continua, el [[parametro_de_orden]] suele seguir una ley de escala cerca de la [[temperatura_critica]], con una [[amplitud_critica]] que fija la escala y un [[exponente_critico_beta]] que controla la forma de desaparición del orden:

{{f:ley_parametro_orden_continuo}}

Esta relación no pretende describir toda la curva experimental, sino la zona crítica donde domina la escala colectiva. Finalmente, la [[susceptibilidad]] mide la respuesta del [[parametro_de_orden]] frente a un [[campo_conjugado]]:

{{f:susceptibilidad_parametro_orden}}

Así, el diagnóstico combina tres lecturas: valor absoluto del [[parametro_de_orden]], posible [[salto_parametro_de_orden]] y sensibilidad ante perturbaciones pequeñas.

El criterio operativo es secuencial: primero se define la fase de referencia, después se calcula la distancia térmica, luego se decide si hay continuidad o salto, y finalmente se evalúa la respuesta. Si el [[campo_conjugado]] no es pequeño, la [[susceptibilidad]] deja de representar una pendiente local y pasa a mezclar efectos no lineales. Por eso las fórmulas no son recetas aisladas: forman una cadena de interpretación. El [[parametro_de_orden]] dice qué cambia, la [[temperatura_reducida]] dice dónde se observa, el [[salto_parametro_de_orden]] dice si hay discontinuidad y la [[susceptibilidad]] dice cuán frágil es el orden ante una perturbación.

## 🔴 Nivel estructural

El modelo se apoya en varias hipótesis explícitas. Primero, debe existir una magnitud macroscópica capaz de distinguir las fases; si el [[parametro_de_orden]] elegido no cambia entre ellas, la clasificación queda muda aunque la transición exista. Segundo, la [[temperatura]] debe ser una variable de control adecuada y la [[temperatura_critica]] debe estar bien definida; en muestras pequeñas, con impurezas o con histéresis intensa, el punto crítico puede ensancharse en una región. Tercero, la fase ordenada y la desordenada deben compararse bajo el mismo convenio de signo, porque cambiar la orientación elegida puede cambiar el signo del [[parametro_de_orden]] sin cambiar la física.

Los invariantes importantes son la dimensión de cada magnitud, el convenio de fase de referencia y la interpretación del cero. Un [[parametro_de_orden]] nulo no siempre significa ausencia total de estructura microscópica; significa ausencia del orden que esa magnitud mide. El [[salto_parametro_de_orden]] distingue una discontinuidad finita de una aproximación continua al cero. En el límite continuo, la [[temperatura_reducida]] pequeña permite usar una ley crítica con [[amplitud_critica]] y [[exponente_critico_beta]], pero lejos de la [[temperatura_critica]] esa ley se vuelve una caricatura.

Los casos de frontera son delicados. Cerca de la [[temperatura_critica]], las fluctuaciones pueden ocultar el valor medio del [[parametro_de_orden]], y la [[susceptibilidad]] puede crecer tanto que pequeñas perturbaciones del [[campo_conjugado]] alteran la lectura. En una transición de primer orden, el sistema puede coexistir en dos fases y presentar histéresis; entonces el [[salto_parametro_de_orden]] es más informativo que una pendiente suave. En transiciones continuas, la gráfica del [[parametro_de_orden]] frente a [[temperatura_reducida]] debe leerse como una brújula de simetría: curvatura, acercamiento al cero y lado térmico importan más que un punto aislado. El modelo falla si se ignora el convenio de signo, se mezcla un campo externo con el orden espontáneo, se aplica la ley crítica fuera de su ventana de validez, o se interpreta la [[susceptibilidad]] sin especificar el [[campo_conjugado]]. También falla si el instrumento no resuelve cambios menores que el supuesto [[salto_parametro_de_orden]], porque entonces una discontinuidad aparente puede ser solo ruido o promedio temporal.

La lectura gráfica debe respetar esas condiciones. Una curva suave no prueba por sí sola universalidad, y una nube de puntos dispersa no prueba discontinuidad. El vínculo con el modelo aparece al comprobar si el cero, el signo, el dominio crítico y la sensibilidad son compatibles entre sí.

## Interpretación física profunda

El [[parametro_de_orden]] traduce una elección colectiva. En un ferromagneto sería la magnetización; en una transición estructural, una deformación; en un superfluido, una amplitud de coherencia. La clave es que no mide solo intensidad, sino identidad de fase. El [[campo_conjugado]] actúa como una pregunta dirigida al sistema: si una perturbación mínima produce un gran cambio, la [[susceptibilidad]] revela que el sistema está cerca de reorganizarse. La [[temperatura_reducida]] aporta el mapa: indica desde qué lado se aproxima la transición y a qué escala se está mirando. Así, una curva de [[parametro_de_orden]] no es una línea decorativa, sino el rastro de cómo una simetría se rompe, se recupera o salta.

## Orden de magnitud

En un experimento real se suele exigir que la distancia crítica sea pequeña pero medible: valores de [[temperatura_reducida]] entre 10^-3 y 10^-1 pueden ser útiles según el material. Un [[salto_parametro_de_orden]] comparable al ruido instrumental no basta para afirmar discontinuidad. Si la [[susceptibilidad]] crece por factores de 10 o 100 al acercarse a la [[temperatura_critica]], la señal crítica es más creíble.

## Método de resolución personalizado

Primero identifica qué organización distingue las fases y asígnale un [[parametro_de_orden]]. Después fija el convenio: qué signo, qué fase de referencia y qué valor representa desorden. Calcula la [[temperatura_reducida]] para ubicar el lado térmico. Observa si el [[parametro_de_orden]] cambia suavemente o si aparece un [[salto_parametro_de_orden]]. Si la transición parece continua, usa la ley crítica solo cerca de la [[temperatura_critica]] y estima [[amplitud_critica]] y [[exponente_critico_beta]]. Por último, interpreta la [[susceptibilidad]] como prueba de sensibilidad frente al [[campo_conjugado]], no como una magnitud independiente sin contexto.

## Casos especiales y ejemplo extendido

Imagina un material magnético que al enfriarse empieza a presentar magnetización espontánea. Por encima de la [[temperatura_critica]], el [[parametro_de_orden]] medio es nulo si no hay [[campo_conjugado]]. Por debajo, aparece un valor finito y el sistema elige una orientación. Si el valor crece suavemente desde cero, el comportamiento sugiere una transición continua y puede analizarse con [[temperatura_reducida]], [[amplitud_critica]] y [[exponente_critico_beta]]. Si, en cambio, la magnetización salta entre dos valores coexistentes, el [[salto_parametro_de_orden]] apunta a una transición brusca. El mismo razonamiento se adapta a una red cristalina: el orden no tiene por qué ser magnético, puede ser geométrico.

## Preguntas reales del alumno

¿Un [[parametro_de_orden]] tiene que ser siempre positivo? No. Puede tener signo si representa orientación; lo importante es el convenio y si el cero indica simetría restaurada.

¿Si el [[parametro_de_orden]] es cero no hay fase? Hay fase, pero no hay el tipo de orden que esa magnitud mide.

¿Por qué aparece la [[susceptibilidad]]? Porque cerca de la [[temperatura_critica]] el sistema se vuelve muy sensible al [[campo_conjugado]].

¿El [[salto_parametro_de_orden]] siempre significa transición de primer orden? Es una señal fuerte de discontinuidad, pero debe comprobarse junto con histéresis, coexistencia y condiciones experimentales.

## Conexiones transversales y rutas de estudio

Este leaf conecta con clasificación de transiciones, fenómenos críticos y energía libre. También prepara la lectura de exponentes críticos, simetría rota y modelos de campo medio. Después conviene estudiar cómo el [[parametro_de_orden]] se relaciona con potenciales termodinámicos y con fluctuaciones espaciales.

## Síntesis final

Un [[parametro_de_orden]] convierte un cambio de simetría en una señal medible. Su valor, su posible [[salto_parametro_de_orden]], su dependencia con [[temperatura_reducida]] y su [[susceptibilidad]] permiten distinguir fases y reconocer cómo nace o desaparece el orden colectivo.