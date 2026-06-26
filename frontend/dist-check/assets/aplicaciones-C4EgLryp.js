const e=`# Aplicaciones

## 1. Meteorología y previsión del tiempo

La temperatura atmosférica es la magnitud meteorológica más fundamental y la que mayor impacto tiene sobre la vida cotidiana, la agricultura y la energía. Los servicios meteorológicos de todo el mundo miden [[T_C]] a 2 metros de altura sobre el suelo en abrigo estándar (garita meteorológica), siguiendo las normas de la Organización Meteorológica Mundial. Las predicciones numéricas de tiempo atmosférico calculan internamente la temperatura en kelvin dentro de los modelos de circulación general, que usan ecuaciones de termodinámica de gas ideal y radiación atmosférica que requieren [[T_K]].

Para la comunicación pública, los datos se convierten a la escala local: Celsius en Europa, América Latina, Asia y Oceanía; Fahrenheit en EE.UU. Los umbrales de aviso meteorológico (olas de calor, heladas) se definen en [[T_C]] en la mayor parte del mundo y en [[T_F]] en EE.UU., con valores de [[DeltaT]] que determinan la intensidad del evento respecto al clima normal de la zona.

La previsión de temperatura para aviación usa tanto Celsius como Fahrenheit: los informes METAR (meteorológicos aeronáuticos) usan Celsius en todo el mundo, pero el personal de tierra estadounidense trabaja con Fahrenheit, por lo que la conversión de escalas es una operación cotidiana en los aeropuertos con tráfico internacional.

Variable dominante: [[T_C]] es la escala de trabajo estándar en meteorología internacional; [[DeltaT]] cuantifica la intensidad de los eventos térmicos respecto a las normales climáticas.
Límite de validez: el modelo de temperatura homogénea del punto de medida es válido para escalas espaciales superiores a la longitud de mezcla turbulenta (~10 m). A escalas menores (microclima urbano, islas de calor), [[T_C]] puede variar varios grados en metros.

## 2. Medicina y control de temperatura corporal

La temperatura corporal humana normal es aproximadamente 37 °C (98.6 °F, 310 K). La medida clínica de [[T_C]] es uno de los signos vitales primarios: una temperatura superior a 38 °C indica fiebre; superior a 40 °C indica fiebre alta con riesgo neurológico; por debajo de 35 °C indica hipotermia. La precisión requerida es de ±0.1 °C, alcanzable con termómetros clínicos calibrados.

En unidades de cuidados intensivos, los pacientes con hipotermia terapéutica inducida (usada para proteger el cerebro tras paradas cardíacas) se mantienen a [[T_C]] entre 32 y 34 °C (305–307 K). El control preciso de [[DeltaT]] durante el enfriamiento (normalmente 1 °C/hora) y el recalentamiento es crítico para evitar complicaciones cardiovasculares.

En criocirugía, los tejidos se destruyen a temperaturas de –20 °C a –40 °C (253–233 K). El nitrógeno líquido, a 77 K (–196 °C), es el agente criogénico más usado. La conversión de unidades es constante en entornos clínicos porque el equipo tiene pantallas en Celsius pero los fabricantes de criosondas especifican temperaturas en kelvin.

Variable dominante: [[T_C]] con precisión de décimas de grado es la magnitud clínica central; [[DeltaT]] controla la velocidad de los procesos de calentamiento o enfriamiento terapéutico.
Límite de validez: la temperatura medida en un punto del cuerpo es representativa del estado central solo cuando hay equilibrio térmico local; en casos de shock o hipotermia severa puede haber gradientes de varios grados entre la superficie y el núcleo corporal.

## 3. Industria alimentaria y cadena de frío

La conservación de alimentos perecederos requiere el control estricto de [[T_C]] a lo largo de toda la cadena: desde la materia prima hasta el consumidor. Los rangos críticos están regulados por normativa sanitaria en Celsius: la carne debe mantenerse por debajo de 4 °C, los congelados por debajo de –18 °C, y la cocción segura exige superar 70 °C en el centro del alimento durante al menos dos minutos.

Los registros de temperatura en cámaras frigoríficas y camiones de transporte usan sensores electrónicos que registran [[T_C]] cada 15 a 30 minutos. La ruptura de la cadena de frío se define como cualquier [[DeltaT]] positivo que lleve al producto por encima del umbral permitido durante más de un tiempo estipulado. Este criterio temporal-térmico integra tanto [[T_C]] como [[DeltaT]] para determinar la aptitud del producto.

Los exportadores de alimentos hacia EE.UU. deben cumplir normativas con umbrales en [[T_F]] (FDA), mientras que sus inspecciones internas y la normativa europea usan Celsius; la conversión de escalas es una operación operativa constante en empresas exportadoras.

Variable dominante: [[T_C]] en puntos críticos de control (APPCC) determina la seguridad microbiológica del alimento; [[DeltaT]] de ruptura de cadena de frío es el indicador de incidencia de temperatura.
Límite de validez: los umbrales de temperatura segura son estadísticos (reducción de carga bacteriana), no umbrales físicos absolutos; la validez del modelo depende de la carga microbiana inicial del producto.

## 4. Ingeniería de semiconductores y circuitos integrados

Los circuitos integrados generan calor al funcionar y su rendimiento y fiabilidad dependen criticamente de [[T_K]] operativa. Los datasheet de componentes electrónicos especifican el rango de temperatura de operación en Celsius (típicamente –40 °C a 85 °C para industrial, o –55 °C a 125 °C para militar/espacial), pero los modelos de derating (reducción de prestaciones con la temperatura) y las ecuaciones de Arrhenius para fiabilidad usan [[T_K]].

La ecuación de Arrhenius para el tiempo medio entre fallos de un componente usa [[T_K]] en el denominador del exponente. Un error de confundir [[T_C]] con [[T_K]] en esta ecuación desplaza completamente la curva de fiabilidad y puede llevar a diseñar sistemas que fallen décadas antes de lo calculado.

Los procesadores modernos integran sensores de temperatura que miden [[T_C]] cada milisegundo para activar el throttling térmico (reducción de frecuencia) antes de que el chip alcance la temperatura máxima de operación. [[DeltaT]] entre el valor actual y el umbral de seguridad determina la respuesta del sistema de gestión térmica.

Variable dominante: [[T_K]] en los modelos de fiabilidad y [[T_C]] en las especificaciones operativas; [[DeltaT]] entre temperatura ambiente y temperatura de unión del chip determina la disipación de calor necesaria.
Límite de validez: los modelos de Arrhenius para semiconductores son válidos en el rango donde el mecanismo de degradación dominante es activación térmica; a temperaturas extremas pueden dominar otros mecanismos (electromigración, radiación) que no siguen la misma ley.

## 5. Oceanografía y cambio climático

La temperatura superficial del mar (TSM) es una de las variables clave del sistema climático. Se mide en Celsius desde boyas, barcos y satélites, con una precisión de ±0.1 °C. Las anomalías de TSM (diferencia respecto a la media histórica del período 1981-2010) son [[DeltaT]] respecto a la climatología de referencia y son la forma estándar de comunicar el calentamiento oceánico.

Los modelos climáticos globales calculan internamente en kelvin y usan [[T_K]] en las ecuaciones de radiación atmosférica y en las parametrizaciones de evaporación. Las proyecciones de temperatura global para 2100 se expresan como [[DeltaT]] respecto al período preindustrial, con valores de +1.5 °C, +2 °C o +4 °C según el escenario de emisiones. Esta [[DeltaT]] es idéntica numéricamente en Celsius y kelvin, lo que facilita la comunicación científica sin ambigüedad de escala.

El fenómeno El Niño se caracteriza por una anomalía positiva de [[T_C]] en el Pacífico ecuatorial central de más de 0.5 °C respecto a la media durante al menos cinco trimestres consecutivos. Este umbral opera en Celsius porque es una [[DeltaT]] respecto a la climatología, no una temperatura absoluta.

Variable dominante: [[DeltaT]] como anomalía respecto a la climatología de referencia es la magnitud estándar para comunicar cambios climáticos; [[T_K]] es la escala de cálculo interna de los modelos de circulación general.
Límite de validez: las anomalías de TSM son representativas de la capa superficial oceánica (~10 m de profundidad); los cambios en temperatura profunda siguen escalas temporales de siglos y no se refleja directamente en la TSM a escala decadal.
`;export{e as default};
