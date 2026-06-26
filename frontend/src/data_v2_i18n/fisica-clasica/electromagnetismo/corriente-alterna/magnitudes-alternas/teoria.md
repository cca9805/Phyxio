## Contexto conceptual

Magnitudes alternas es el leaf donde la corriente alterna deja de verse como una señal que solo "sube y baja" y empieza a leerse como un sistema cuantitativo con significado energético. En AC no basta saber el valor instantáneo [[v_t]]. Hace falta distinguir amplitud [[amplitud_de_tension]], valor eficaz [[tension_eficaz]], [[frecuencia]] [[frecuencia]], [[frecuencia]] angular [[omega]], período [[periodo]], [[phi]] [[phi]] y potencia activa [[potencia_activa]]. Cada una de esas magnitudes responde a una pregunta distinta y operativa.

La pregunta física central del nodo es cómo se relacionan amplitud, [[frecuencia]], fase y RMS para describir y comparar señales reales. Esa pregunta no es académica: aparece cuando un instrumento marca 230 V, cuando una carga consume más corriente de la esperada o cuando dos señales con la misma amplitud producen comportamientos energéticos diferentes. Entender magnitudes alternas evita errores de interpretación que luego se arrastran en reactancia, potencia y diseño de circuitos.

Este tema es puente entre lenguaje temporal y lenguaje energético. El dominio temporal usa [[tiempo]], [[v_t]], [[omega]] y [[phi]] para describir forma de onda. El dominio energético usa [[tension_eficaz]], [[corriente_eficaz]] y [[potencia_activa]] para cuantificar transferencia media. Una lectura rigurosa necesita ambos: forma de señal y consecuencia física.

## 🟢 Nivel esencial

En nivel esencial debes retener tres ideas. Primera: amplitud y valor eficaz no son lo mismo. Segunda: [[frecuencia]] y período describen la misma repetición temporal con dos miradas complementarias. Tercera: la fase cambia la porción útil de la transferencia en AC.

Con estas ideas ya puedes interpretar situaciones reales sin cálculo detallado. Una lectura grande de pico no garantiza por sí sola transferencia activa alta. Un cambio de [[frecuencia]] altera la escala temporal del ciclo. Y una discrepancia entre instrumentos suele indicar que no están reportando la misma magnitud física.

La competencia esencial no es memorizar símbolos, sino clasificar correctamente el tipo de dato antes de operar. Esa disciplina inicial reduce errores de raíz y prepara un paso ordenado al nivel formal.

## 🔵 Nivel formal

La forma temporal sinusoidal ideal se modela con:

{{f:senal_sinusoidal}}

La relación entre [[frecuencia]] angular y [[frecuencia]] ordinaria es:

{{f:omega_f}}

El vínculo entre período y [[frecuencia]] es:

{{[[frecuencia]]:[[periodo]]}}

Para senoide pura, la conversión de amplitud a valor eficaz usa:

{{f:valor_eficaz}}

La potencia activa media en régimen sinusoidal se calcula con:

{{[[frecuencia]]:[[potencia_activa]]}}

Este bloque formal exige coherencia de unidades y de contexto. [[frecuencia]] en Hz no puede sustituirse por [[omega]] en rad/s sin factor de conversión. [[tension_eficaz]] e [[corriente_eficaz]] deben pertenecer al mismo estado estacionario. Y la expresión de [[potencia_activa]] no es completa sin [[phi]], porque el [[phi]] codifica cuánto de la demanda eléctrica se transforma en transferencia media neta.

Formalmente, también debes distinguir dominio de validez de cada expresión. La ecuación temporal requiere periodicidad definida. La conversión de pico a RMS requiere senoide pura. La potencia activa requiere marco sinusoidal coherente. El cálculo numérico puede cerrar con datos inconsistentes, pero el resultado físico queda inválido si no se respetan estas condiciones.

Un criterio formal útil es realizar doble control antes de concluir. Primer control: consistencia matemática local en cada fórmula, con unidades correctas y dependencia explícita de variables. Segundo control: consistencia global entre fórmulas, de modo que los resultados de [[frecuencia]], período y potencia no se contradigan entre sí. Esta práctica convierte el bloque formal en una etapa de validación, no solo de sustitución numérica.

{{f:omega_f}}

{{f:periodo}}

{{f:potencia_activa}}

## 🔴 Nivel estructural

En nivel estructural interesa cómo se organizan las magnitudes entre sí. [[v_t]] vive en el dominio instantáneo y oscila de signo. [[tension_eficaz]] e [[corriente_eficaz]] viven en el dominio energético y se reportan como magnitudes no negativas. [[frecuencia]] y [[periodo]] forman una pareja recíproca que fija la escala temporal del problema. [[omega]] traduce esa escala al lenguaje angular. [[phi]] conecta geometría temporal con transferencia de potencia.

Esa estructura explica por qué dos señales con igual [[amplitud_de_tension]] pueden no ser equivalentes en uso real. Si cambia la forma de onda, el vínculo simple entre [[amplitud_de_tension]] y [[tension_eficaz]] puede romperse. Si cambia [[phi]], la potencia activa [[potencia_activa]] cambia aunque [[tension_eficaz]] e [[corriente_eficaz]] se mantengan. Si cambia [[frecuencia]], cambia [[periodo]] y cambia el comportamiento de sistemas acoplados que dependen del ritmo de excitación.

El dominio de validez de este leaf puede expresarse de forma cuantitativa: el tratamiento sinusoidal básico es razonable cuando la distorsión armónica total se mantiene moderada, por ejemplo THD <= 5 por ciento, y cuando [[frecuencia]] y fase se mantienen estables dentro de la ventana de observación. Fuera de ese rango, sigue habiendo magnitudes alternas, pero el modelo mínimo debe ampliarse con análisis armónico.

También importa la trazabilidad de medición. Un multímetro RMS, un osciloscopio y un analizador de potencia no entregan exactamente la misma descripción. El trabajo estructural consiste en mapear cada instrumento a la magnitud correcta y luego cerrar coherencia entre [[tiempo]], [[frecuencia]] y energía. Esa práctica es la base para temas posteriores de reactancia y circuitos RLC.

## Interpretación física profunda

La lectura profunda de magnitudes alternas aparece cuando dejas de verlas como definiciones aisladas y las interpretas como un sistema de compresión física. Una señal temporal tiene infinitos puntos. Sin embargo, con [[amplitud_de_tension]], [[tension_eficaz]], [[frecuencia]], [[omega]], [[periodo]] y [[phi]] puedes resumir su comportamiento esencial para diseño y operación.

[[tension_eficaz]] es especialmente importante porque traduce AC a criterio energético comparable con DC. [[phi]] es igualmente decisiva porque cuantifica desalineación temporal entre variables conjugadas, lo que afecta la porción realmente útil de transferencia. Por eso potencia activa [[potencia_activa]] no depende solo de cuánta tensión o corriente hay, sino de cómo se relacionan en fase.

Otra lectura física clave es distinguir descripción y causa. [[v_t]] describe el estado instantáneo. [[frecuencia]] y [[omega]] describen el ritmo. [[phi]] describe relación temporal. [[potencia_activa]] describe consecuencia energética media. Mezclar niveles de descripción conduce a errores de diseño, de diagnóstico y de interpretación experimental.

## Orden de magnitud

En red eléctrica doméstica o de laboratorio, [[tension_eficaz]] suele estar en decenas o centenas de voltios. [[frecuencia]] suele estar en decenas de hertz, y [[omega]] en centenas de radianes por segundo. [[periodo]] suele estar en milisegundos para [[frecuencia]] de red. Estas escalas sirven para detectar errores inmediatos de unidad.

Si obtienes [[omega]] del orden de 50 rad/s para una red de 50 Hz, hay error de factor 2π. Si obtienes [[periodo]] de segundos enteros para red estándar, algo falla en la conversión. Si [[potencia_activa]] sale incompatible con [[tension_eficaz]] e [[corriente_eficaz]] reportadas, probablemente se omitió [[phi]] o se mezclaron valores pico y eficaces.

El control de orden de magnitud no reemplaza el cálculo detallado, pero evita invertir esfuerzo en soluciones físicamente absurdas. En práctica profesional, esta verificación temprana reduce errores de instrumentación y acelera diagnóstico.

## Método de resolución personalizado

Primero, etiqueta cada dato: instantáneo, pico, eficaz, [[frecuencia]], período o fase. Segundo, unifica unidades SI y decide si trabajarás en Hz o rad/s, manteniendo conversión explícita. Tercero, escribe la señal temporal y comprueba que el argumento trigonométrico sea coherente con [[omega]] y [[tiempo]].

Cuarto, convierte amplitud a RMS solo si la forma es sinusoidal pura. Quinto, calcula potencia activa usando [[tension_eficaz]], [[corriente_eficaz]] y [[phi]] del mismo estado operativo. Sexto, cierra con una validación rápida: reciprocidad entre [[frecuencia]] y [[periodo]], consistencia entre [[amplitud_de_tension]] y [[tension_eficaz]], y razonabilidad de [[potencia_activa]] frente a magnitudes de entrada.

Séptimo, formula una conclusión física breve: qué describe la señal, qué magnitud es operativa para energía y qué limitaciones tiene el modelo usado. Esta última parte evita soluciones mecánicas y prepara la conexión con reactancia y potencia en AC.

## Casos especiales y ejemplo extendido

Considera una señal sinusoidal en la que conoces amplitud, [[frecuencia]] y fase relativa de trabajo. El objetivo no es solo obtener números, sino construir trazabilidad entre descripción temporal y consecuencia energética. Inicia con la forma temporal para ubicar el papel de [[v_t]] y [[tiempo]], luego pasa a [[omega]], [[frecuencia]] y [[periodo]], y finalmente traduce a [[tension_eficaz]] y [[potencia_activa]].

En este tipo de casos, un error frecuente es saltar directamente a potencia sin comprobar coherencia temporal. Si [[omega]] está mal, toda la interpretación de ciclo queda comprometida. Si [[tension_eficaz]] se deduce mal de [[amplitud_de_tension]], [[potencia_activa]] heredará el error. Si [[phi]] se ignora, la estimación de transferencia útil se sobrestima.

Otro caso especial importante es la señal no sinusoidal. Allí la conversión simple entre [[amplitud_de_tension]] y [[tension_eficaz]] deja de ser exacta. El leaf enseña a reconocer ese límite y a justificar cuándo pasar de modelo básico a análisis más rico. El objetivo pedagógico no es negar la complejidad, sino saber cuándo aparece.

## Preguntas reales del alumno

1. ¿Por qué un medidor RMS puede dar un número distinto del pico observado en osciloscopio? Porque reportan magnitudes físicas diferentes: equivalente energético frente a valor máximo instantáneo.

2. ¿Qué cambia primero cuando aumenta [[frecuencia]]? Cambia [[periodo]] en forma inversa y cambia la rapidez de variación de fase asociada a [[omega]].

3. ¿Puede haber potencia activa con [[phi]] grande? Sí, pero disminuye con el factor coseno asociado a [[phi]].

4. ¿Promedio temporal y RMS son lo mismo? No. El promedio algebraico de una senoide puede ser cero y su valor eficaz no.

5. ¿Cuándo debo dejar de usar el modelo sinusoidal mínimo? Cuando la distorsión y variación temporal superan el rango en que las relaciones básicas conservan validez operacional.

## Conexiones transversales y rutas de estudio

Este leaf conecta de forma directa con reactancia inductiva y capacitiva, porque la conversión entre [[frecuencia]] y [[omega]] fija magnitudes de respuesta en esos temas. También conecta con potencia en AC, donde [[tension_eficaz]], [[corriente_eficaz]] y [[phi]] determinan lectura energética útil.

En rutas de estudio, conviene seguir este orden: magnitudes alternas, luego reactancia, luego circuitos RLC y finalmente análisis de compensación y calidad de energía. Esa secuencia conserva la lógica física de pasar de descripción de señal a interpretación de sistema.

También conecta con instrumentación: osciloscopio para forma temporal, multímetro RMS para equivalencia energética y analizador de potencia para validación final. Aprender a cruzar esas lecturas es una competencia transferible a laboratorio, mantenimiento y diseño.

## Síntesis final

Magnitudes alternas establece el alfabeto operativo de la corriente alterna. Sin distinguir instantáneo, pico, eficaz, [[frecuencia]], período y fase, los cálculos posteriores pueden ser numéricamente correctos pero físicamente equivocados. Con esta base, el estudiante puede pasar de una señal a una interpretación energética coherente y defendible.