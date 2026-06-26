const e=`\uFEFF# Evolución Histórica de la Calefacción Resistiva\r
\r
## Problema histórico\r
\r
Durante la mayor parte del siglo XX, la calefacción residencial se evaluaba casi exclusivamente por la capacidad de un equipo de proporcionar calor de forma inmediata, sin considerar el [[consumo eléctrico|E]] acumulado a lo largo de la temporada. La resistiva eléctrica se extendió masivamente en los años 60 y 70 gracias a la electrificación de las viviendas y a la percepción de que la electricidad era una fuente "limpia" y cómoda. Instalar un radiador eléctrico era trivial en comparación con los sistemas de calefacción central por agua caliente, que requerían calderas, tuberías y radiadores hidráulicos.\r
\r
El problema fundamental era la ausencia de un marco analítico para evaluar el coste de uso prolongado. La [[potencia del emisor|P]] era el único indicador que se comunicaba; el [[tiempo efectivo de uso|t]] se ignoraba como variable de análisis. Nadie calculaba sistemáticamente el [[consumo eléctrico|E]] estacional ni lo comparaba con el calor que el edificio realmente necesitaba.\r
\r
## Dificultad conceptual previa\r
\r
El concepto de [[coeficiente de rendimiento|COP]] como herramienta de comparación tecnológica era prácticamente desconocido fuera del ámbito académico. Los usuarios no disponían de la distinción entre rendimiento de conversión local y eficiencia energética del sistema completo. Esto llevaba a una confusión sistemática: un equipo con [[rendimiento de conversión|eta]] ≈ 1 parecía óptimo, sin considerar que ese mismo valor de [[COP]] = 1 significaba exactamente el peor caso teórico posible para un sistema de calefacción que opera con una fuente de calor externa (el aire) disponible de forma gratuita.\r
\r
El [[calor útil|Q]] necesario para una vivienda dependía de la envolvente del edificio, algo que los usuarios no relacionaban con el coste de la calefacción. La fórmula implícita era “si tengo frío, compro un radiador más potente”, ignorando que la demanda podría reducirse invirtiendo en aislamiento.\r
\r
## Qué cambió\r
\r
Las crisis energéticas de los años 70 y la posterior subida sostenida de los precios de la electricidad forzaron un cambio de perspectiva. Por primera vez, los usuarios comenzaron a relacionar el [[consumo eléctrico|E]] con el coste económico de forma consciente. La aparición en el mercado de las bombas de calor domésticas en los años 80-90, con [[COP]] de 2,5 a 4, hizo visible de forma directa la ventaja energética de los ciclos termodinámicos frente a la conversión directa.\r
\r
La resistiva no desapareció, pero su rol cambió radicalmente: de solución universal a solución contextual. Hoy se usa principalmente como calefacción puntual de bajo coste de instalación, como apoyo temporal para picos de demanda, o como referencia para calcular el ahorro potencial de una tecnología alternativa. El [[COP]] = 1 pasó de ser una característica implícita a ser el punto de comparación explícito contra el que se mide todo sistema más eficiente.\r
\r
## Impacto en la física aplicada\r
\r
Esta evolución impulsó el desarrollo de metodologías de auditoría energética residencial. La distinción entre [[potencia del emisor|P]] nominal y [[tiempo efectivo de uso|t]] real se convirtió en una competencia básica para técnicos de instalaciones. Los medidores de consumo portátiles, disponibles desde los años 2000 a precios accesibles, democratizaron la capacidad de medir el [[consumo eléctrico|E]] real de cualquier emisor resistivo con precisión de ±1%.\r
\r
## Conexión con física moderna\r
\r
Hoy, la resistiva sigue siendo el modelo pedagógico más claro para introducir los conceptos de energía, potencia y coste en contextos domésticos, precisamente porque su transparencia física permite establecer la línea de base a partir de la cual se evalúan todas las demás tecnologías. Con la proliferación del Internet de las Cosas (IoT) y los enchufes inteligentes, hoy es posible medir en tiempo real el [[consumo eléctrico|E]] de cualquier emisor resistivo y compararlo automáticamente con el coste de alternativas más eficientes. El [[COP]] = 1 de la resistiva ha pasado de ser una propiedad implícita a ser un dato de referencia activo en plataformas de gestión energética doméstica.\r
`;export{e as default};
