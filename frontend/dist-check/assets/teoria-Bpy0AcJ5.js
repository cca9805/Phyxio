const a=`# Ondas superficiales\r
\r
## Contexto conceptual\r
\r
Las **ondas superficiales** son perturbaciones que viajan confinadas a la interfaz entre dos medios fluidos, de forma característica la interfaz aire-agua. A diferencia de las ondas de volumen, estas perturbaciones concentran su energía en la zona de contacto y se propagan horizontalmente a lo largo de esa frontera. Su física surge del equilibrio dinámico entre fuerzas restauradoras de distinta naturaleza: la **gravedad** actúa a grandes escalas y la **tensión superficial** domina a escalas microscópicas.\r
\r
Este fenómeno es omnipresente: las olas marinas, las ondas generadas al dejar caer una gota de agua y los capilares en un vaso son todos ejemplos de ondas superficiales. Lo que hace especialmente rico este concepto es que la misma ecuación de propagación produce comportamientos cualitativamente distintos según la escala espacial de la perturbación, definida por [[lambda]]. Entender cuándo aplica cada régimen es el núcleo de este leaf.\r
\r
La teoría de ondas superficiales también conecta con la hidrodinámica, la meteorología y la ingeniería costera, haciendo de este concepto un puente entre la física de laboratorio y las ciencias ambientales.\r
\r
## 🟢 Nivel esencial\r
\r
Una onda superficial es una ondulación de la interfaz líquida que se propaga horizontalmente. Cuando una perturbación eleva la superficie, se crea un desequilibrio: la gravedad tiende a devolver el fluido desplazado hacia abajo, mientras que la curvatura de la superficie genera una presión adicional debida a la [[sigma]] que también contribuye a la restauración. El resultado es una **oscilación viajera** a lo largo de la interfaz.\r
\r
La clave intuitiva es la competencia entre las dos fuerzas restauradoras. Las **olas marinas largas** (del orden de metros) son dominadas por la gravedad: cuanto más larga es la ola, más rápido viaja, porque una cresta larga desplaza más volumen y la presión gravitatoria actúa sobre una masa mayor. Las **ondas capilares cortas** (de milímetros), en cambio, son dominadas por [[sigma]]: la curvatura es intensa en ondas pequeñas y [[sigma]] produce una fuerza restauradora proporcional a esa curvatura. En este régimen, ondas más cortas viajan más rápido que las largas.\r
\r
> [!NOTE]\r
> La longitud de onda [[lambda]] es la variable que decide el régimen. No se puede calcular [[v]] sin saber primero si se está en el dominio gravitatorio, en el capilar o en la zona de transición.\r
\r
## 🔵 Nivel formal\r
\r
En el régimen formal, la relación de dispersión de ondas superficiales en agua profunda vincula [[v]], [[g]], [[sigma]], [[rho]] y [[k]]. La formulación más simple, válida cuando la gravedad domina (ondas largas), es:\r
\r
{{f:rapidez_gravedad}}\r
\r
Esta expresión muestra que [[v]] crece al reducir [[k]] (onda más larga), es decir, en el régimen gravitatorio las ondas largas son más rápidas. El número de onda [[k]] es la inversa de [[lambda]] multiplicada por dos pi, y encapsula la escala espacial en una variable más cómoda para álgebra.\r
\r
En el extremo opuesto, cuando la tensión superficial domina (ondas capilares cortas), la relación de dispersión toma la forma:\r
\r
{{f:rapidez_capilares}}\r
\r
Aquí [[v]] crece con [[k]], lo que significa que ondas más cortas viajan más rápido. [[sigma]] actúa como módulo de rigidez interfacial y [[rho]] como inercia. La presencia de [[rho]] en el denominador refleja que un fluido más denso requiere mayor fuerza para acelerar la misma masa.\r
\r
La expresión general, válida en toda la zona de transición, combina ambas contribuciones:\r
\r
{{f:rapidez_combinada}}\r
\r
> [!TIP]\r
> Usar siempre esta última expresión cuando no se sepa de antemano cuál régimen domina. Los dos términos bajo la raíz pueden compararse directamente para determinar cuál prevalece.\r
\r
## 🔴 Nivel estructural\r
\r
La estructura profunda de las ondas superficiales radica en la **relación de dispersión**: la función que vincula [[k]] con [[v]]. Esta función no es lineal, lo que significa que diferentes longitudes de onda viajan a velocidades distintas, produciendo el fenómeno conocido como **dispersión**. Cuando un grupo de ondas con distintas longitudes de onda se propaga juntas —como las olas generadas por una tormenta— el paquete de ondas se ensancha con el tiempo porque cada componente avanza a su propia [[v]].\r
\r
La longitud crítica que separa el régimen gravitatorio del capilar se obtiene igualando los dos términos bajo la raíz. En agua pura vale unos 1.7 cm. En esa longitud, [[v]] alcanza su **mínimo global**: existe una velocidad de propagación mínima.\r
\r
> [!WARNING]\r
> La fórmula de agua profunda deja de ser válida cuando la profundidad del fluido es comparable a [[lambda]]. En aguas someras, el fondo ejerce una fricción adicional y la relación de dispersión se modifica con una tangente hiperbólica.\r
\r
La dependencia de [[v]] con [[k]] también tiene consecuencias para la **velocidad de grupo**, que es la velocidad a la que viaja la energía del paquete de onda, distinta de [[v]] en medios dispersivos. En el régimen gravitatorio, la velocidad de grupo es la mitad de [[v]]; en el régimen capilar, es vez y media [[v]]. Esta diferencia entre velocidad de fase y velocidad de grupo es fundamental para entender la propagación de energía en ondas oceánicas.\r
\r
La [[rho]] del fluido determina la inercia: duplicar [[rho]] reduce [[v]] capilar en un factor raíz de dos. En el régimen gravitatorio de agua profunda, [[rho]] se cancela y no aparece en la fórmula, lo que refleja que la gravedad actúa directamente sobre el volumen desplazado independientemente de su densidad.\r
\r
Finalmente, la [[sigma]] no es una constante universal: depende del líquido, la temperatura y la presencia de contaminantes. El agua dulce tiene [[sigma]] mayor que el agua salada o el agua jabonosa. Una pequeña película de aceite sobre la superficie puede reducir [[sigma]] significativamente, alterando el régimen capilar y produciendo superficies anormalmente calmadas —el fenómeno observado históricamente por navegantes cerca de vertidos de aceite.\r
\r
## Interpretación física profunda\r
\r
La dispersión de ondas superficiales tiene implicaciones directas para la predicción del tiempo marítimo. Las tormentas oceánicas generan un espectro amplio de [[lambda]]. Las componentes largas viajan más rápido y llegan primero a la costa como un "tren" de olas regulares; las cortas llegan más tarde. Esta **separación temporal por [[f]]** permite estimar la distancia de la tormenta midiendo el período de las olas y su variación en el tiempo. La rapidez con que se transporta la energía —la velocidad de grupo— es la magnitud relevante para la predicción de llegada, no [[v]] de fase.\r
\r
## Orden de magnitud\r
\r
En agua con [[sigma]] de aproximadamente 0.072 N/m, [[rho]] de aproximadamente 1000 kg/m³ y [[g]] de aproximadamente 9.81 m/s²: una ola de [[lambda]] de 10 m tiene [[v]] de unos 4 m/s; una ola de 100 m viaja a unos 13 m/s; un capilar de [[lambda]] de 1 mm tiene [[v]] de unos 0.3 m/s. El mínimo de [[v]] ocurre en [[lambda]] crítica de unos 1.7 cm con [[v]] mínima de 0.23 m/s. Resultado absurdo: [[v]] superior a 50 m/s para [[lambda]] métrica con parámetros de agua —revisión inmediata de [[k]].\r
\r
## Método de resolución personalizado\r
\r
El protocolo estándar para calcular [[v]] en ondas superficiales sigue cuatro pasos ordenados.\r
\r
**Paso 1**: Identificar [[lambda]] a partir del contexto del problema y calcular [[k]] como dos pi dividido entre [[lambda]]. **Paso 2**: Evaluar los dos términos bajo la raíz en la fórmula combinada: el término gravitatorio [[g]] dividido entre [[k]] y el término capilar [[sigma]] multiplicado por [[k]] dividido entre [[rho]]. **Paso 3**: Comparar ambos términos; si el gravitatorio supera al capilar en dos órdenes de magnitud o más, usar directamente la fórmula simplificada de gravedad; si el capilar supera al gravitatorio, usar la fórmula capilar. En la zona de transición, utilizar la fórmula combinada completa. **Paso 4**: Verificar dimensionalmente que el resultado esté en m/s y que sea físicamente razonable comparando con las escalas del orden de magnitud.\r
\r
> [!TIP]\r
> Si el enunciado menciona olas en el océano o en ríos, se está casi con certeza en el régimen gravitatorio. Si menciona gotas, capilares o fenómenos de milímetros, se está en el régimen de tensión superficial.\r
\r
## Casos especiales y ejemplo extendido\r
\r
**Límite gravitatorio puro**: cuando [[lambda]] es mucho mayor que la longitud capilar crítica, el término de [[sigma]] en la fórmula combinada es despreciable. [[v]] crece con la raíz de [[lambda]], y las olas más largas son siempre más rápidas. Este es el comportamiento familiar de las olas oceánicas.\r
\r
**Límite capilar puro**: cuando [[lambda]] es mucho menor que la longitud crítica, el término de [[g]] es despreciable. [[v]] crece con la raíz de [[k]], es decir, decrece con [[lambda]]. Las ondas capilares muestran así la dependencia inversa: ondas más cortas, más rápidas. Este fenómeno es observable con el anillo de ondas que forma una gota de agua al caer.\r
\r
**Zona de transición y mínimo de velocidad**: en torno a [[lambda]] de 1.7 cm, ambos términos son comparables. La [[v]] de grupo presenta un mínimo, y el sistema es sensible a perturbaciones en esa escala. Esta longitud crítica depende únicamente de [[sigma]], [[rho]] y [[g]] del líquido, no de la frecuencia de excitación.\r
\r
**Efecto de surfactantes**: añadir jabón al agua reduce [[sigma]] de 0.072 N/m a valores alrededor de 0.025-0.040 N/m. Esto desplaza la longitud crítica hacia valores menores y reduce el mínimo de [[v]], lo que cambia visiblemente los patrones de ondas en la superficie.\r
\r
## Preguntas reales del alumno\r
\r
**¿Por qué las olas largas viajan más rápido que las cortas en el mar?**\r
Porque en el régimen gravitatorio, [[v]] crece con la raíz de [[lambda]]: una ola de 100 m de longitud de onda tiene [[k]] mucho más pequeño que una de 1 m, y la fórmula gravitatoria da [[v]] proporcional a la raíz inversa de [[k]]. La gravedad actúa sobre un mayor volumen desplazado y genera mayor fuerza restauradora por unidad de longitud horizontal.\r
\r
**¿Por qué las ondas capilares viajan más rápido al hacerse más cortas?**\r
En el régimen capilar, la fuerza restauradora es [[sigma]] multiplicada por la curvatura de la superficie. La curvatura es inversamente proporcional al radio de curvatura, que a su vez crece con [[lambda]]. Por tanto, ondas más cortas tienen mayor curvatura, mayor fuerza restauradora y mayor [[v]]. El efecto es opuesto al gravitatorio: el régimen capilar tiene dispersión anómala.\r
\r
**¿Qué sucede exactamente en la longitud de onda crítica?**\r
En ese punto, los dos términos bajo la raíz son iguales, y [[v]] alcanza su mínimo. Físicamente, ninguna de las dos fuerzas restauradoras domina claramente. Ningún paquete de onda puede propagarse más lento que este mínimo en agua profunda; es la velocidad mínima del sistema.\r
\r
**¿Cómo cambia [[v]] si se añade sal al agua?**\r
La sal aumenta [[rho]] de aproximadamente 1000 a 1025 kg/m³ y reduce ligeramente [[sigma]]. En el régimen capilar, mayor [[rho]] reduce [[v]] (denominador mayor) y menor [[sigma]] también reduce [[v]] (numerador menor), de modo que el agua de mar tiene ondas capilares ligeramente más lentas que el agua dulce.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Las ondas superficiales conectan directamente con el concepto de **dispersión**, presente en óptica, mecánica cuántica y guías de onda. La idea de que [[v]] depende de [[k]] es universal en medios dispersivos. Un paso avanzado es el estudio de las **ondas de Stokes** (régimen no lineal) y de las **ondas solitarias**, donde la no linealidad contrarresta la dispersión. Estos fenómenos conectan con la física de tsunamis y con aguas someras.\r
\r
## Síntesis final\r
\r
Las ondas superficiales ilustran cómo la competencia entre dos mecanismos restauradores —gravedad a grandes escalas y [[sigma]] a pequeñas escalas— produce una relación de dispersión no lineal. La variable clave es [[lambda]]: determina qué fórmula aplicar, cuál régimen domina y qué magnitudes —[[g]], [[sigma]], [[rho]] — controlan el resultado. Dominar este diagnóstico previo es la habilidad central del leaf.\r
`;export{a as default};
