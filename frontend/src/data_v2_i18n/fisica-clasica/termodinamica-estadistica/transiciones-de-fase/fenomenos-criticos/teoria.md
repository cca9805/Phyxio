## Contexto conceptual

Los fenómenos críticos aparecen cuando un sistema se acerca a una [[temperatura_critica]] y deja de comportarse como una colección de zonas casi independientes. Pequeñas fluctuaciones empiezan a comunicarse a distancias cada vez mayores, la [[susceptibilidad]] se vuelve enorme y el [[parametro_de_orden]] pierde su valor característico de forma controlada. La clave no es solo que cambie una fase, sino que muchas magnitudes obedecen leyes de escala parecidas. Por eso la [[temperatura_reducida]] sirve como brújula: indica de qué lado de la transición estamos y cuán cerca queda el punto crítico.

## 🟢 Nivel esencial

Cerca de la [[temperatura_critica]], el sistema se vuelve extremadamente sensible. El [[parametro_de_orden]] mide si existe una fase organizada: por ejemplo, magnetización espontánea, densidad diferenciada o una orientación colectiva. Al acercarse al punto crítico desde la fase ordenada, ese orden se debilita hasta desaparecer. A la vez, la [[susceptibilidad]] crece porque una perturbación pequeña puede reorganizar muchas partes del sistema. La [[longitud_correlacion]] también aumenta: una fluctuación local deja de ser local y arrastra regiones cada vez más grandes.

La [[temperatura_reducida]] resume la distancia térmica al punto crítico. Su signo separa los dos lados de la transición y su valor absoluto mide la proximidad. La física esencial es una amplificación colectiva: menos distancia crítica implica más correlación, más respuesta y un orden más frágil.

## 🔵 Nivel formal

La variable que organiza el cálculo es la [[temperatura_reducida]], construida a partir de [[temperatura]] y [[temperatura_critica]]. Su signo identifica el lado térmico y su módulo mide la cercanía crítica.

{{f:temperatura_reducida_critica}}

En una transición continua, el [[parametro_de_orden]] se aproxima a cero mediante una ley de escala controlada por [[amplitud_critica]] y [[exponente_critico_beta]].

{{f:parametro_orden_ley_critica}}

La respuesta lineal se describe con la [[susceptibilidad]], cuya divergencia queda parametrizada por [[amplitud_susceptibilidad]] y [[exponente_critico_gamma]].

{{f:susceptibilidad_critica}}

La extensión espacial de las fluctuaciones se resume en la [[longitud_correlacion]], con [[amplitud_correlacion]] como escala microscópica y [[exponente_critico_nu]] como exponente de crecimiento.

{{f:longitud_correlacion_critica}}

Finalmente, el [[calor_especifico]] puede mostrar una anomalía controlada por [[amplitud_calor_especifico]] y [[exponente_critico_alpha]].

{{f:calor_especifico_critico}}

Estas relaciones no son simples ajustes: permiten comparar sistemas distintos mediante exponentes críticos. En cada caso, la dependencia dominante aparece cuando el valor absoluto de [[temperatura_reducida]] es pequeño, pero aún fuera de la región donde el tamaño finito, impurezas o campos externos redondean la singularidad. La práctica consiste en separar amplitudes, que fijan escala material, de exponentes, que describen la forma universal de la aproximación a [[temperatura_critica]]. Así, dos materiales pueden tener valores muy distintos de [[susceptibilidad]] y compartir el mismo patrón crítico.

## 🔴 Nivel estructural

La estructura del modelo crítico descansa en varias hipótesis fuertes. Primero, se supone que la transición es continua y que existe una [[temperatura_critica]] bien definida. Si la muestra presenta histéresis marcada, coexistencia de fases con calor latente o saltos abruptos, la lectura por exponentes críticos puede mezclarse con física de primer orden. Segundo, se asume que la [[temperatura_reducida]] es suficientemente pequeña para que dominen las leyes de escala, pero no tan pequeña como para que el tamaño finito del sistema limite la [[longitud_correlacion]]. En una muestra real, cuando la [[longitud_correlacion]] se acerca al tamaño del dominio experimental, la divergencia ideal se redondea.

El invariante conceptual es que los exponentes describen tendencias universales, mientras que las amplitudes dependen del material, la preparación y las unidades. Por eso [[exponente_critico_beta]], [[exponente_critico_gamma]], [[exponente_critico_nu]] y [[exponente_critico_alpha]] pueden compararse entre sistemas, pero [[amplitud_critica]], [[amplitud_susceptibilidad]], [[amplitud_correlacion]] y [[amplitud_calor_especifico]] no deben usarse como firma universal sin contexto. Otro límite aparece en el signo: el [[parametro_de_orden]] suele estar definido solo en la fase ordenada, mientras que la [[susceptibilidad]] puede analizarse a ambos lados con amplitudes distintas.

Los casos frontera son reveladores. Lejos de la [[temperatura_critica]], la [[temperatura_reducida]] deja de ser pequeña y las potencias críticas pierden precisión. Exactamente en el punto crítico ideal, algunas expresiones predicen divergencias o desaparición perfecta, pero los experimentos siempre tienen resolución finita. La lectura gráfica debe buscar rectas en escalas logarítmicas, cambios de pendiente y saturaciones, no solo una curva espectacular. El modelo falla si los datos dependen fuertemente del barrido térmico, si hay campos externos no controlados, si la muestra es inhomogénea o si el intervalo usado mezcla zona crítica con zona no crítica. También falla si se ajusta el [[calor_especifico]] con el mismo intervalo que la [[susceptibilidad]] sin comprobar que ambos responden al mismo régimen crítico. La coherencia final exige que el lado térmico, la tendencia del [[parametro_de_orden]] y el crecimiento de la [[longitud_correlacion]] cuenten la misma historia física. Si una gráfica de [[temperatura_reducida]] frente a una magnitud crítica no conserva pendiente estable en escala logarítmica, la estimación del exponente debe tratarse como local, no como propiedad universal del sistema. Esta cautela evita confundir crossover con comportamiento crítico auténtico.

## Interpretación física profunda

El mensaje profundo es que cerca de la [[temperatura_critica]] el sistema pierde una escala característica simple. La [[longitud_correlacion]] creciente indica que las fluctuaciones dejan de pertenecer a átomos aislados y pasan a abarcar dominios extensos. La [[susceptibilidad]] grande significa que el sistema no está rígido frente a una perturbación: una señal pequeña encuentra una red de fluctuaciones preparada para amplificarse. El [[parametro_de_orden]] que se anula no solo mide “menos orden”; expresa que las dos fases dejan de distinguirse de manera macroscópica. Los exponentes críticos son una gramática de esa desaparición colectiva.

## Orden de magnitud

En experimentos reales se suele trabajar con valores de [[temperatura_reducida]] entre 10^-2 y 10^-5. Si [[amplitud_correlacion]] es del orden de nanómetros, una ley con [[exponente_critico_nu]] cercano a 0,6 puede llevar la [[longitud_correlacion]] a decenas o cientos de nanómetros. La [[susceptibilidad]] puede crecer varios órdenes de magnitud, pero rara vez diverge de forma ideal porque el tamaño de muestra, impurezas y resolución térmica cortan el crecimiento.

## Método de resolución personalizado

Primero identifica [[temperatura_critica]] y calcula [[temperatura_reducida]] con su signo. Después decide qué magnitud se está estudiando: [[parametro_de_orden]], [[susceptibilidad]], [[longitud_correlacion]] o [[calor_especifico]]. Selecciona la ley crítica correspondiente y comprueba si el intervalo térmico está cerca de la zona crítica. Para estimar exponentes, conviene representar datos en escala logarítmica y medir pendientes. Finalmente, interpreta si la tendencia obtenida es física: el [[parametro_de_orden]] debe disminuir hacia el punto crítico, mientras [[susceptibilidad]] y [[longitud_correlacion]] deben aumentar.

## Casos especiales y ejemplo extendido

Si una muestra magnética tiene [[temperatura_critica]] de 300 K y se mide a [[temperatura]] de 297 K, la [[temperatura_reducida]] es pequeña y negativa si se usa el convenio ordenado por debajo. En esa zona el [[parametro_de_orden]] todavía existe, pero cae rápido al acercarse a la transición. Si se mide a 303 K, el sistema está en la fase desordenada y el [[parametro_de_orden]] espontáneo ya no describe una fase ordenada estable. Sin embargo, la [[susceptibilidad]] puede seguir siendo grande a ambos lados. Si los datos muestran una meseta cerca del punto crítico, no significa que la teoría sea falsa: puede indicar tamaño finito, resolución térmica insuficiente o campo externo residual.

## Preguntas reales del alumno

¿La [[susceptibilidad]] infinita existe de verdad? No como número experimental perfecto. La divergencia es una idealización útil que describe crecimiento muy rápido antes de que aparezcan límites reales.

¿Por qué usar [[temperatura_reducida]] y no solo [[temperatura]]? Porque compara la distancia a la [[temperatura_critica]] de forma relativa y permite contrastar materiales con escalas térmicas distintas.

¿Todos los exponentes son independientes? No siempre. En modelos críticos existen relaciones de escala que conectan exponentes, aunque verificarlas exige un marco más avanzado.

¿El [[calor_especifico]] siempre diverge? No. Según [[exponente_critico_alpha]], puede divergir, mostrar una cúspide o variar débilmente.

## Conexiones transversales y rutas de estudio

Este leaf conecta transiciones de fase, magnetismo, fluidos cerca del punto crítico, teoría de escala y modelos de campo medio. Después conviene estudiar clasificación de transiciones, parámetro de orden, exponentes críticos y universalidad. También prepara el salto hacia simulaciones estadísticas, donde las fluctuaciones se observan directamente.

## Síntesis final

Los fenómenos críticos describen cómo un sistema se vuelve colectivo al acercarse a [[temperatura_critica]]. La [[temperatura_reducida]] mide la cercanía, el [[parametro_de_orden]] desaparece, la [[susceptibilidad]] crece y la [[longitud_correlacion]] revela fluctuaciones cada vez más extensas.