## Contexto conceptual

## 🟢 Nivel esencial

Para entender la eficiencia, primero debemos separar la necesidad física del gasto técnico real. En cualquier sistema de climatización doméstica, manejamos conceptos que a menudo se confunden pero que operan en dimensiones físicas distintas. Es vital no tratar el sistema como una "caja negra" que simplemente consume dinero, sino como una cadena de transformaciones de energía con pérdidas y ganancias bien definidas.

1.  **Demanda**: Es la cantidad de calor que la casa "pide" para estar a gusto. Si la casa tiene buenas ventanas y aislamiento, la [[demanda_termica_estacional]] será baja. Es como un balde con agujeros: cuanto más pequeños sean los agujeros (mejor aislamiento), menos agua (calor) hay que echar para mantenerlo lleno. Depende de la superficie de la casa y de cómo esté construida.
2.  **Rendimiento**: Es la capacidad de la máquina para dar calor usando electricidad. Una máquina con un [[rendimiento_estacional_scop]] alto es como un grifo inteligente que, por cada gota que pagas, te regala tres o cuatro gotas de agua extra que extrae gratuitamente del aire exterior.
3.  **Consumo**: Es lo que finalmente marca el contador de la luz en kWh al final del mes. Depende de los dos puntos anteriores en una relación directa. Si la demanda es baja y el rendimiento es alto, el [[consumo_electrico_estacional]] será mínimo y la factura será pequeña.

La idea central de este nivel es que la eficiencia no es algo fijo del equipo, sino que se puede mejorar actuando sobre la estructura de la casa (tapando fugas) o sobre la tecnología de la máquina (cambiando el equipo por uno mejor).

## 🔵 Nivel formal

La relación matemática que gobierna este proceso es una ley de proporcionalidad inversa respecto al rendimiento. El [[consumo_electrico_estacional]] se calcula dividiendo la necesidad térmica total del edificio por la capacidad de multiplicación del sistema de climatización instalado:

{{f:consumo_estacional}}

Esta fórmula revela una verdad fundamental: para una misma [[demanda_termica_estacional]], si duplicamos el [[rendimiento_estacional_scop]], reducimos el consumo exactamente a la mitad. En sistemas resistivos puros, como radiadores de aceite o estufas eléctricas, el [[rendimiento_estacional_scop]] es aproximadamente 1, lo que significa que cada julio de electricidad se convierte en un solo julio de calor. En bombas de calor modernas, el [[rendimiento_estacional_scop]] puede estar entre 3 y 5, lo que implica que el [[consumo_electrico_estacional]] es solo una pequeña fracción de la energía térmica entregada al hogar.

Una vez conocido el consumo eléctrico, el impacto financiero se determina aplicando la tarifa energética vigente en el mercado:

{{f:facturacion_estacional}}

Para evaluar el éxito de una inversión en eficiencia, utilizamos el concepto de **escenario [[base]]**. El escenario [[base]] representa la situación de referencia original, mientras que el **escenario [[nuevo]]** representa la mejora propuesta. La métrica clave para validar técnica y económicamente una propuesta es el [[ahorro_energetico_porcentual]], que nos da una visión clara de la mejora conseguida:

{{f:ahorro_porcentual}}

Donde el [[consumo_escenario_base]] y el [[consumo_escenario_nuevo]] deben calcularse o medirse bajo las mismas condiciones de uso y temperatura exterior para que la comparación sea físicamente rigurosa y no dependa de factores externos aleatorios.

## 🔴 Nivel estructural

A nivel estructural, el análisis de eficiencia debe considerar los límites de validez del modelo y las variables sistémicas complejas que pueden invalidar los cálculos teóricos simplificados de escritorio:

1.  **Límites Termodinámicos y Ciclo de Carnot**: Ningún sistema de transporte de calor puede superar el límite de eficiencia teórico definido por la segunda ley de la termodinámica. El [[rendimiento_estacional_scop]] real de los equipos comerciales siempre estará limitado por irreversibilidades internas, pérdidas por fricción y la ineficacia de los intercambiadores.
2.  **Influencia del Salto Térmico Estacional**: La eficiencia es esclava de la temperatura exterior y la humedad. Un [[rendimiento_estacional_scop]] calculado para una zona costera con inviernos suaves no es válido para una zona de alta montaña con heladas frecuentes. A temperaturas extremas, los equipos suelen entrar en ciclos de desescarche que penalizan severamente el promedio estacional.
3.  **Inercia Térmica y Modulación**: El consumo real se ve afectado por la capacidad del sistema de adaptarse a la carga parcial. Los equipos con tecnología *inverter* modulan su potencia para equilibrar exactamente las pérdidas de la casa, evitando los picos de arranque que degradan la eficiencia neta.

## Interpretación física profunda

La interpretación más profunda nos dice que la eficiencia es, en última instancia, una medida de la entropía generada en el proceso de climatización artificial. Un sistema perfecto mantendría la temperatura sin gasto energético si el aislamiento fuera infinito, lo que implicaría un sistema adiabático ideal. Como esto es físicamente imposible, la eficiencia busca minimizar el trabajo termodinámico necesario para compensar la degradación inevitable de la energía y el flujo constante de calor hacia el exterior. Esta visión convierte a la vivienda en un organismo termodinámico que interactúa y busca el equilibrio con su entorno de forma continua.

## Orden de magnitud

En una vivienda típica de 90 m² en un clima templado, la [[demanda_termica_estacional]] suele rondar los 3000-5000 kWh térmicos. Si usamos radiadores eléctricos ([[rendimiento_estacional_scop]] = 1), el [[consumo_electrico_estacional]] será de 5000 kWh. Con una bomba de calor eficiente ([[rendimiento_estacional_scop]] = 4), el [[consumo_electrico_estacional]] baja drásticamente a 1250 kWh. Este salto de factor 4 es el orden de magnitud que define la verdadera revolución de la aerotermia y la descarbonización.

## Método de resolución personalizado

Para resolver un problema de ahorro de forma profesional:
1. Identifica el escenario [[base]] y determina su [[consumo_escenario_base]] mediante facturas históricas.
2. Calcula la nueva [[demanda_termica_estacional]] proyectada si hay mejoras previstas en el aislamiento de la envolvente.
3. Determina el [[nuevo]] [[rendimiento_estacional_scop]] esperado del equipo propuesto según el clima local.
4. Calcula el [[consumo_escenario_nuevo]] aplicando la fórmula de división estacional.
5. Obtén el [[ahorro_energetico_porcentual]] y tradúcelo a [[coste_economico_estacional]] anual para evaluar el retorno de la inversión.

## Casos especiales y ejemplo extendido

Un caso especial muy frecuente es el "efecto rebote": cuando un usuario instala un sistema muy eficiente, a veces aumenta su estándar de consigna (pasando de 20 °C a 24 °C) porque siente que "ahora es muy barato calentar". Esto puede anular gran parte del ahorro energético teórico, demostrando que el factor humano y el comportamiento social son variables estructurales del sistema físico real.

## Preguntas reales del alumno

- **¿Por qué mi factura no baja a la mitad si el equipo es el doble de eficiente?** Posiblemente porque el precio unitario de la energía ha subido o porque has aumentado involuntariamente las horas de uso del sistema.
- **¿Es mejor invertir primero en aislamiento o en cambiar la máquina de calor?** Físicamente, siempre es prioritario reducir la [[demanda_termica_estacional]] mediante el aislamiento, ya que es una mejora pasiva permanente que no consume energía ni requiere mantenimiento a largo plazo.

## Conexiones transversales y rutas de estudio

Este tema conecta de forma multidisciplinar con:
- **Bomba de calor**: Fundamentos físicos avanzados del ciclo de refrigeración y compresión.
- **Termodinámica**: Primer y segundo principio aplicados al estudio de sistemas abiertos y cerrados.
- **Economía circular**: Reducción masiva de la huella de carbono mediante la eficiencia y el uso de fuentes renovables.

## Síntesis final

La eficiencia en climatización se optimiza verdaderamente cuando se equilibran con inteligencia la reducción de la demanda térmica ([[demanda_termica_estacional]]) y el aumento del rendimiento estacional del equipo ([[rendimiento_estacional_scop]]). El resultado final no es solo un menor consumo eléctrico ([[consumo_electrico_estacional]]), sino una vivienda con mayor resiliencia económica, menor impacto ambiental y un confort superior para sus habitantes.