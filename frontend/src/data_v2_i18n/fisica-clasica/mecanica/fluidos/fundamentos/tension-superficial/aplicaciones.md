## 1. Absorción en papel técnico
Variable dominante: [[r]]
Límite de validez: poros conectados, mojado estable y líquido limpio.

En papeles de laboratorio, filtros y pañales, el líquido asciende por una red de poros que actúan como capilares irregulares. La hipótesis dominante es que cada poro tiene un radio efectivo [[r]] y un ángulo de contacto [[theta]] aproximadamente estable. Aunque el material real sea una red compleja, el primer criterio de diseño sigue siendo capilar: cuanto menor es la escala del poro, mayor puede ser la altura de equilibrio.

La interpretación física es que una reducción de [[r]] aumenta el impulso capilar, pero también puede aumentar la resistencia viscosa del recorrido. Por eso no basta con elegir poros mínimos: un poro demasiado estrecho puede absorber alto pero lento. La decisión concreta consiste en equilibrar altura capilar y velocidad de absorción según el uso. Un papel de filtro prioriza control y homogeneidad; un absorbente rápido prioriza distribución en red y entrada inicial.

## 2. Microfluídica
Variable dominante: [[sigma]]
Límite de validez: canales limpios, escala micrométrica y ausencia de contaminación superficial.

En dispositivos microfluídicos, la tensión superficial puede mover gotas, fijar meniscos o bloquear canales. La hipótesis dominante es que las fuerzas de interfaz son comparables o superiores a peso e inercia. En esa escala, una burbuja pequeña o una gota mal situada puede actuar como una válvula no deseada.

La lectura física es que pequeñas variaciones de [[sigma]] cambian la presión necesaria para desplazar una gota. Si la superficie del canal se contamina, la tensión efectiva y el ángulo de contacto cambian. La decisión concreta es tratar la limpieza superficial como requisito de diseño, no como detalle secundario. En chips de diagnóstico, esto puede decidir si una muestra avanza correctamente o queda atrapada en una cámara.

## 3. Aerosoles y gotas pequeñas
Variable dominante: [[R]]
Límite de validez: gotas aproximadamente esféricas y curvatura definida.

En aerosoles, pulverizadores y nieblas, el salto de presión [[dp]] aumenta al disminuir [[R]]. La hipótesis dominante es que la gota puede aproximarse por una esfera y que la tensión superficial es uniforme. En gotas muy pequeñas, la curvatura deja de ser un detalle geométrico y pasa a controlar estabilidad y evaporación.

La interpretación física es que las gotas pequeñas son más sensibles a efectos capilares que las grandes. Un aerosol fino requiere energía para crear mucha superficie nueva; por eso la atomización depende de [[sigma]], de la geometría de salida y del régimen dinámico. La decisión concreta consiste en controlar tamaño de gota para modificar alcance, evaporación, estabilidad y presión interna.

## 4. Detergentes y surfactantes
Variable dominante: [[sigma]]
Límite de validez: concentración uniforme y equilibrio superficial alcanzado.

Los detergentes reducen la tensión superficial del agua y facilitan el mojado de fibras, grasa o superficies rugosas. La hipótesis dominante es que el surfactante modifica la energía de interfaz sin cambiar de forma dominante la densidad [[rho]]. Esta reducción permite que el líquido se extienda y penetre mejor en irregularidades pequeñas.

La interpretación física es que menor [[sigma]] puede mejorar la extensión del líquido, pero también reduce fuerzas capilares máximas. No siempre conviene bajar la tensión sin límite: puede aparecer espuma, residuos o pérdida de control del menisco. La decisión concreta es ajustar concentración. Demasiada poca no moja; demasiada puede alterar la aplicación y cambiar el comportamiento previsto.

## 5. Soldadura, impresión y recubrimientos
Variable dominante: [[theta]]
Límite de validez: superficie sólida homogénea, temperatura controlada y contacto estable.

En recubrimientos, tintas y soldadura blanda, el ángulo de contacto [[theta]] decide si el líquido se extiende o se retrae. La hipótesis dominante es que la interfaz líquido-sólido define el mojado efectivo. Una gota de tinta que no moja produce manchas o bordes irregulares; una soldadura que no moja no forma unión fiable.

La interpretación física es que no basta con conocer [[sigma]]: el mismo líquido puede comportarse de forma distinta sobre vidrio, polímero o metal. La decisión concreta consiste en preparar la superficie para obtener el ángulo de contacto deseado. Limpieza, rugosidad, temperatura y tratamiento químico son variables de ingeniería porque modifican el balance interfacial.

Como control operativo, antes de usar el modelo se compara la escala visible con la escala capilar. Si el efecto desaparece al aumentar mucho el tamaño, la tensión superficial era dominante; si persiste igual, probablemente manda otra física como presión, gravedad o viscosidad. Esta regla evita aplicar el mismo razonamiento a sistemas donde la interfaz ya no controla el fenómeno.

En todos los casos, la comparación con un dato experimental sencillo es decisiva: altura observada, radio de gota, forma del menisco o presión necesaria para mover una burbuja. Si esa observación no coincide con la predicción, no se debe forzar la fórmula; hay que revisar limpieza, ángulo de contacto, radio efectivo y presencia de surfactantes.

La decisión final siempre debe vincular diseño y escala: no es lo mismo aumentar mojado, estabilizar una gota, romper un chorro o transportar líquido por un poro. La tensión superficial aporta el mecanismo, pero la aplicación concreta decide qué variable conviene controlar primero.