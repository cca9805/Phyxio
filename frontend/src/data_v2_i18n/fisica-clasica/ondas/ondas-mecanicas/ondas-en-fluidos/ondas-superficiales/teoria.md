## Contexto conceptual

Las **ondas superficiales** son perturbaciones que viajan confinadas a la interfaz entre dos medios fluidos, de forma característica la interfaz aire-agua. A diferencia de las ondas de volumen, estas perturbaciones concentran su energía en la zona de contacto y se propagan horizontalmente a lo largo de esa frontera. Su física surge del equilibrio dinámico entre fuerzas restauradoras de distinta naturaleza: la **gravedad** actúa a grandes escalas y la **tensión superficial** domina a escalas microscópicas.

Este fenómeno es omnipresente: las olas marinas, las ondas generadas al dejar caer una gota de agua y los capilares en un vaso son todos ejemplos de ondas superficiales. Lo que hace especialmente rico este concepto es que la misma ecuación de propagación produce comportamientos cualitativamente distintos según la escala espacial de la perturbación, definida por [[lambda]]. Entender cuándo aplica cada régimen es el núcleo de este leaf.

La teoría de ondas superficiales también conecta con la hidrodinámica, la meteorología y la ingeniería costera, haciendo de este concepto un puente entre la física de laboratorio y las ciencias ambientales.

## 🟢 Nivel esencial

Una onda superficial es una ondulación de la interfaz líquida que se propaga horizontalmente. Cuando una perturbación eleva la superficie, se crea un desequilibrio: la gravedad tiende a devolver el fluido desplazado hacia abajo, mientras que la curvatura de la superficie genera una presión adicional debida a la [[sigma]] que también contribuye a la restauración. El resultado es una **oscilación viajera** a lo largo de la interfaz.

La clave intuitiva es la competencia entre las dos fuerzas restauradoras. Las **olas marinas largas** (del orden de metros) son dominadas por la gravedad: cuanto más larga es la ola, más rápido viaja, porque una cresta larga desplaza más volumen y la presión gravitatoria actúa sobre una masa mayor. Las **ondas capilares cortas** (de milímetros), en cambio, son dominadas por [[sigma]]: la curvatura es intensa en ondas pequeñas y [[sigma]] produce una fuerza restauradora proporcional a esa curvatura. En este régimen, ondas más cortas viajan más rápido que las largas.

> [!NOTE]
> La longitud de onda [[lambda]] es la variable que decide el régimen. No se puede calcular [[rapidez_de_propagacion_de_ondas_superficiales]] sin saber primero si se está en el dominio gravitatorio, en el capilar o en la zona de transición.

## 🔵 Nivel formal

En el régimen formal, la relación de dispersión de ondas superficiales en agua profunda vincula [[rapidez_de_propagacion_de_ondas_superficiales]], [[aceleracion_gravitatoria]], [[sigma]], [[rho]] y [[numero_de_onda]]. La formulación más simple, válida cuando la gravedad domina (ondas largas), es:

{{f:rapidez_gravedad}}

Esta expresión muestra que [[rapidez_de_propagacion_de_ondas_superficiales]] crece al reducir [[numero_de_onda]] (onda más larga), es decir, en el régimen gravitatorio las ondas largas son más rápidas. El número de onda [[numero_de_onda]] es la inversa de [[lambda]] multiplicada por dos pi, y encapsula la escala espacial en una variable más cómoda para álgebra.

En el extremo opuesto, cuando la tensión superficial domina (ondas capilares cortas), la relación de dispersión toma la forma:

{{f:rapidez_capilares}}

Aquí [[rapidez_de_propagacion_de_ondas_superficiales]] crece con [[numero_de_onda]], lo que significa que ondas más cortas viajan más rápido. [[sigma]] actúa como módulo de rigidez interfacial y [[rho]] como inercia. La presencia de [[rho]] en el denominador refleja que un fluido más denso requiere mayor fuerza para acelerar la misma masa.

La expresión general, válida en toda la zona de transición, combina ambas contribuciones:

{{f:rapidez_combinada}}

> [!TIP]
> Usar siempre esta última expresión cuando no se sepa de antemano cuál régimen domina. Los dos términos bajo la raíz pueden compararse directamente para determinar cuál prevalece.

## 🔴 Nivel estructural

La estructura profunda de las ondas superficiales radica en la **relación de dispersión**: la función que vincula [[numero_de_onda]] con [[rapidez_de_propagacion_de_ondas_superficiales]]. Esta función no es lineal, lo que significa que diferentes longitudes de onda viajan a velocidades distintas, produciendo el fenómeno conocido como **dispersión**. Cuando un grupo de ondas con distintas longitudes de onda se propaga juntas —como las olas generadas por una tormenta— el paquete de ondas se ensancha con el tiempo porque cada componente avanza a su propia [[rapidez_de_propagacion_de_ondas_superficiales]].

La longitud crítica que separa el régimen gravitatorio del capilar se obtiene igualando los dos términos bajo la raíz. En agua pura vale unos 1.7 cm. En esa longitud, [[rapidez_de_propagacion_de_ondas_superficiales]] alcanza su **mínimo global**: existe una velocidad de propagación mínima.

> [!WARNING]
> La fórmula de agua profunda deja de ser válida cuando la profundidad del fluido es comparable a [[lambda]]. En aguas someras, el fondo ejerce una fricción adicional y la relación de dispersión se modifica con una tangente hiperbólica.

La dependencia de [[rapidez_de_propagacion_de_ondas_superficiales]] con [[numero_de_onda]] también tiene consecuencias para la **velocidad de grupo**, que es la velocidad a la que viaja la energía del paquete de onda, distinta de [[rapidez_de_propagacion_de_ondas_superficiales]] en medios dispersivos. En el régimen gravitatorio, la velocidad de grupo es la mitad de [[rapidez_de_propagacion_de_ondas_superficiales]]; en el régimen capilar, es vez y media [[rapidez_de_propagacion_de_ondas_superficiales]]. Esta diferencia entre velocidad de fase y velocidad de grupo es fundamental para entender la propagación de energía en ondas oceánicas.

La [[rho]] del fluido determina la inercia: duplicar [[rho]] reduce [[rapidez_de_propagacion_de_ondas_superficiales]] capilar en un factor raíz de dos. En el régimen gravitatorio de agua profunda, [[rho]] se cancela y no aparece en la fórmula, lo que refleja que la gravedad actúa directamente sobre el volumen desplazado independientemente de su densidad.

Finalmente, la [[sigma]] no es una constante universal: depende del líquido, la temperatura y la presencia de contaminantes. El agua dulce tiene [[sigma]] mayor que el agua salada o el agua jabonosa. Una pequeña película de aceite sobre la superficie puede reducir [[sigma]] significativamente, alterando el régimen capilar y produciendo superficies anormalmente calmadas —el fenómeno observado históricamente por navegantes cerca de vertidos de aceite.

## Interpretación física profunda

La dispersión de ondas superficiales tiene implicaciones directas para la predicción del tiempo marítimo. Las tormentas oceánicas generan un espectro amplio de [[lambda]]. Las componentes largas viajan más rápido y llegan primero a la costa como un "tren" de olas regulares; las cortas llegan más tarde. Esta **separación temporal por [[frecuencia_de_la_onda_superficial]]** permite estimar la distancia de la tormenta midiendo el período de las olas y su variación en el tiempo. La rapidez con que se transporta la energía —la velocidad de grupo— es la magnitud relevante para la predicción de llegada, no [[rapidez_de_propagacion_de_ondas_superficiales]] de fase.

## Orden de magnitud

En agua con [[sigma]] de aproximadamente 0.072 N/m, [[rho]] de aproximadamente 1000 kg/m³ y [[aceleracion_gravitatoria]] de aproximadamente 9.81 m/s²: una ola de [[lambda]] de 10 m tiene [[rapidez_de_propagacion_de_ondas_superficiales]] de unos 4 m/s; una ola de 100 m viaja a unos 13 m/s; un capilar de [[lambda]] de 1 mm tiene [[rapidez_de_propagacion_de_ondas_superficiales]] de unos 0.3 m/s. El mínimo de [[rapidez_de_propagacion_de_ondas_superficiales]] ocurre en [[lambda]] crítica de unos 1.7 cm con [[rapidez_de_propagacion_de_ondas_superficiales]] mínima de 0.23 m/s. Resultado absurdo: [[rapidez_de_propagacion_de_ondas_superficiales]] superior a 50 m/s para [[lambda]] métrica con parámetros de agua —revisión inmediata de [[numero_de_onda]].

## Método de resolución personalizado

El protocolo estándar para calcular [[rapidez_de_propagacion_de_ondas_superficiales]] en ondas superficiales sigue cuatro pasos ordenados.

**Paso 1**: Identificar [[lambda]] a partir del contexto del problema y calcular [[numero_de_onda]] como dos pi dividido entre [[lambda]]. **Paso 2**: Evaluar los dos términos bajo la raíz en la fórmula combinada: el término gravitatorio [[aceleracion_gravitatoria]] dividido entre [[numero_de_onda]] y el término capilar [[sigma]] multiplicado por [[numero_de_onda]] dividido entre [[rho]]. **Paso 3**: Comparar ambos términos; si el gravitatorio supera al capilar en dos órdenes de magnitud o más, usar directamente la fórmula simplificada de gravedad; si el capilar supera al gravitatorio, usar la fórmula capilar. En la zona de transición, utilizar la fórmula combinada completa. **Paso 4**: Verificar dimensionalmente que el resultado esté en m/s y que sea físicamente razonable comparando con las escalas del orden de magnitud.

> [!TIP]
> Si el enunciado menciona olas en el océano o en ríos, se está casi con certeza en el régimen gravitatorio. Si menciona gotas, capilares o fenómenos de milímetros, se está en el régimen de tensión superficial.

## Casos especiales y ejemplo extendido

**Límite gravitatorio puro**: cuando [[lambda]] es mucho mayor que la longitud capilar crítica, el término de [[sigma]] en la fórmula combinada es despreciable. [[rapidez_de_propagacion_de_ondas_superficiales]] crece con la raíz de [[lambda]], y las olas más largas son siempre más rápidas. Este es el comportamiento familiar de las olas oceánicas.

**Límite capilar puro**: cuando [[lambda]] es mucho menor que la longitud crítica, el término de [[aceleracion_gravitatoria]] es despreciable. [[rapidez_de_propagacion_de_ondas_superficiales]] crece con la raíz de [[numero_de_onda]], es decir, decrece con [[lambda]]. Las ondas capilares muestran así la dependencia inversa: ondas más cortas, más rápidas. Este fenómeno es observable con el anillo de ondas que forma una gota de agua al caer.

**Zona de transición y mínimo de velocidad**: en torno a [[lambda]] de 1.7 cm, ambos términos son comparables. La [[rapidez_de_propagacion_de_ondas_superficiales]] de grupo presenta un mínimo, y el sistema es sensible a perturbaciones en esa escala. Esta longitud crítica depende únicamente de [[sigma]], [[rho]] y [[aceleracion_gravitatoria]] del líquido, no de la frecuencia de excitación.

**Efecto de surfactantes**: añadir jabón al agua reduce [[sigma]] de 0.072 N/m a valores alrededor de 0.025-0.040 N/m. Esto desplaza la longitud crítica hacia valores menores y reduce el mínimo de [[rapidez_de_propagacion_de_ondas_superficiales]], lo que cambia visiblemente los patrones de ondas en la superficie.

## Preguntas reales del alumno

**¿Por qué las olas largas viajan más rápido que las cortas en el mar?**
Porque en el régimen gravitatorio, [[rapidez_de_propagacion_de_ondas_superficiales]] crece con la raíz de [[lambda]]: una ola de 100 m de longitud de onda tiene [[numero_de_onda]] mucho más pequeño que una de 1 m, y la fórmula gravitatoria da [[rapidez_de_propagacion_de_ondas_superficiales]] proporcional a la raíz inversa de [[numero_de_onda]]. La gravedad actúa sobre un mayor volumen desplazado y genera mayor fuerza restauradora por unidad de longitud horizontal.

**¿Por qué las ondas capilares viajan más rápido al hacerse más cortas?**
En el régimen capilar, la fuerza restauradora es [[sigma]] multiplicada por la curvatura de la superficie. La curvatura es inversamente proporcional al radio de curvatura, que a su vez crece con [[lambda]]. Por tanto, ondas más cortas tienen mayor curvatura, mayor fuerza restauradora y mayor [[rapidez_de_propagacion_de_ondas_superficiales]]. El efecto es opuesto al gravitatorio: el régimen capilar tiene dispersión anómala.

**¿Qué sucede exactamente en la longitud de onda crítica?**
En ese punto, los dos términos bajo la raíz son iguales, y [[rapidez_de_propagacion_de_ondas_superficiales]] alcanza su mínimo. Físicamente, ninguna de las dos fuerzas restauradoras domina claramente. Ningún paquete de onda puede propagarse más lento que este mínimo en agua profunda; es la velocidad mínima del sistema.

**¿Cómo cambia [[rapidez_de_propagacion_de_ondas_superficiales]] si se añade sal al agua?**
La sal aumenta [[rho]] de aproximadamente 1000 a 1025 kg/m³ y reduce ligeramente [[sigma]]. En el régimen capilar, mayor [[rho]] reduce [[rapidez_de_propagacion_de_ondas_superficiales]] (denominador mayor) y menor [[sigma]] también reduce [[rapidez_de_propagacion_de_ondas_superficiales]] (numerador menor), de modo que el agua de mar tiene ondas capilares ligeramente más lentas que el agua dulce.

## Conexiones transversales y rutas de estudio

Las ondas superficiales conectan directamente con el concepto de **dispersión**, presente en óptica, mecánica cuántica y guías de onda. La idea de que [[rapidez_de_propagacion_de_ondas_superficiales]] depende de [[numero_de_onda]] es universal en medios dispersivos. Un paso avanzado es el estudio de las **ondas de Stokes** (régimen no lineal) y de las **ondas solitarias**, donde la no linealidad contrarresta la dispersión. Estos fenómenos conectan con la física de tsunamis y con aguas someras.

## Síntesis final

Las ondas superficiales ilustran cómo la competencia entre dos mecanismos restauradores —gravedad a grandes escalas y [[sigma]] a pequeñas escalas— produce una relación de dispersión no lineal. La variable clave es [[lambda]]: determina qué fórmula aplicar, cuál régimen domina y qué magnitudes —[[aceleracion_gravitatoria]], [[sigma]], [[rho]] — controlan el resultado. Dominar este diagnóstico previo es la habilidad central del leaf.