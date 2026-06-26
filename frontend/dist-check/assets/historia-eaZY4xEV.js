const e=`# Historia — Ondas superficiales

## Problema histórico

Durante siglos, los navegantes observaron que las olas oceánicas no se propagan todas a la misma velocidad: las olas largas y suaves preceden a las cortas y caóticas generadas por una tormenta lejana. Este fenómeno de separación temporal de olas —denominado "swell" en la tradición marinera— fue conocido empíricamente desde la Antigüedad, pero su explicación física precisa fue imposible antes del siglo XIX, cuando la mecánica de fluidos matemática alcanzó el nivel de rigor necesario.

El problema central era doble: por un lado, predecir la velocidad de una ola a partir de sus características observables (su longitud de onda o su período); por otro, explicar por qué ondas de distinta escala se comportan de forma cualitativamente diferente. La tensión superficial, conocida desde antiguo como fenómeno de capilaridad, no fue conectada con las ondas de agua hasta más de un siglo después de los primeros trabajos sobre olas gravitatorias.

## Dificultad conceptual previa

La dificultad central estaba en la naturaleza del movimiento del fluido bajo una ola. Los científicos del siglo XVIII tendían a imaginar el agua como un sistema de partículas que se desplazan en la dirección de propagación de la ola, análogamente a cómo las pelotas en una fila se transmiten un empujón. Esta imagen es radicalmente incorrecta: las partículas de agua describen trayectorias circulares cerradas y no hay transporte neto de masa.

Superar este error conceptual requirió el desarrollo del formalismo de mecánica de fluidos potencial por Laplace y Lagrange a finales del siglo XVIII. Solo cuando se comprendió que el movimiento del fluido podía describirse mediante un campo de potencial irrotacional fue posible derivar la relación de dispersión correcta. La second difficulty was que la interfaz libre es una condición de contorno no lineal: la posición de la superficie libre depende del propio movimiento del fluido, lo que hace la ecuación del sistema intrínsecamente no lineal. La linearización que permite obtener las fórmulas presentadas en este leaf fue un paso conceptual decisivo que no resultó obvio en absoluto.

## Qué cambió

La primera derivación sistemática de la relación de dispersión para ondas gravitatorias en agua profunda fue realizada por Siméon Denis Poisson en 1816 y de forma independiente por Augustin-Louis Cauchy en la misma época, en el contexto de resolver un problema de olas generadas por una perturbación inicial. Estos trabajos establecieron que la celeridad de cada componente armónico depende de su longitud de onda, lo que explicó matemáticamente por primera vez la dispersión observada empíricamente por los marineros.

La contribución de la tensión superficial a las ondas de agua fue analizada sistemáticamente por William Thomson (Lord Kelvin) en 1871. Kelvin derivó la relación de dispersión completa que incluye tanto el término gravitatorio como el capilar, identificó la existencia de una velocidad mínima y calculó la longitud de onda crítica de transición. Este trabajo también predijo que un objeto moviéndose en la superficie del agua produce un patrón de olas en forma de "V" con ángulo de apertura fijo de aproximadamente 39 grados, independientemente de la velocidad del objeto —el llamado "patrón de Kelvin"— una predicción verificada experimentalmente con alta precisión y que tiene aplicaciones en la detección de barcos desde satélites.

## Impacto en la física

El desarrollo de la teoría de ondas superficiales tuvo un impacto fundamental en la física matemática del siglo XIX por dos razones. Primera: demostró la potencia del método de potencial de velocidades para resolver problemas de fluidos a superficie libre, un método que se generalizó a aerodinámica, acústica y electromagnetismo. Segunda: estableció un modelo paradigmático de relación de dispersión —la función que vincula [[k]] con [[v]] o con [[f]]— que se encontraría después en casi todas las ramas de la física ondulatoria: ondas de materia en mecánica cuántica, fotones en medios dispersivos, fonones en sólidos, ondas de plasma.

La existencia de una velocidad mínima de propagación, predicha por Kelvin para las ondas superficiales, tiene un análogo directo en la física de partículas: la velocidad de la luz como límite máximo de propagación de señales. Aunque los contextos son radicalmente distintos, la idea de que un sistema físico impone un extremo (máximo o mínimo) a la celeridad de propagación resultó ser un concepto con un alcance mucho más amplio del esperado.

## Conexión con física moderna

La teoría de ondas superficiales es formalmente isomorfa a varios problemas de la física moderna. La relación de dispersión capilar, donde [[v]] crece con [[k]], es análoga a la relación de dispersión de las ondas de materia de de Broglie en mecánica cuántica no relativista: la velocidad de fase de una partícula libre crece con el momento, y la velocidad de grupo (velocidad de transporte de energía) es la mitad de la velocidad de fase, exactamente como en las ondas gravitatorias superficiales.

La no linealidad de las ondas superficiales de gran amplitud conecta con el campo activo de la física de solitones. Las ecuaciones de Korteweg-de Vries, derivadas originalmente para describir ondas en canales de agua somera en el siglo XIX, son hoy uno de los sistemas paradigmáticos de la física matemática integrable, con aplicaciones en fibra óptica, plasmas y condensados de Bose-Einstein.

Los tsunamis, que son ondas de agua somera de longitudes de onda del orden de centenares de kilómetros, constituyen un caso extremo donde la relación de dispersión de agua profunda es completamente inaplicable y donde las no linealidades y la batimetría del fondo oceánico determinan la forma y velocidad del pulso. La física de tsunamis aplica directamente la extensión de agua somera de la relación de dispersión derivada por Cauchy y Poisson, demostrando la vigencia de la física del siglo XIX para fenómenos catastróficos del mundo contemporáneo.
`;export{e as default};
