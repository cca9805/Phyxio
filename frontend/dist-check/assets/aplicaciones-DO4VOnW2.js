const e=`# Aplicaciones de Ingeniería de Fluidos\r
\r
## 1. Suministro de Agua en Rascacielos y Edificaciones de Gran Altura\r
El suministro de agua potable a los pisos superiores de un rascacielos es un desafío de ingeniería que depende directamente de la gestión de la potencia hidráulica. Debido a la gran altura geométrica, la presión hidrostática en la base sería insuficiente para que el agua llegue a los niveles más altos. Por ello, se utilizan estaciones de bombeo intermedias o sistemas de bombeo de velocidad variable. En estos sistemas, la bomba debe proporcionar una diferencia de presión [[dp]] suficiente para vencer la altura hidrostática más las pérdidas por fricción en las tuberías verticales. El diseño optimizado permite que el caudal [[Q]] sea constante independientemente de cuántos usuarios abran el grifo simultáneamente, utilizando variadores de frecuencia para ajustar la potencia útil [[P_util]] y maximizar la eficiencia [[eta]] del sistema eléctrico. Esto garantiza que un residente en el piso 80 disfrute de la misma presión que uno en la planta baja sin desperdiciar energía en horas de baja demanda.\r
-   **Variable dominante:** Diferencia de presión [[dp]] y potencia útil [[P_util]].\r
-   **Límite de validez:** Alturas donde la presión no supere los límites de resistencia de las tuberías (típicamente hasta 15-20 bar por tramo).\r
-   **Didáctica impact:** Ilustra cómo la energía potencial gravitatoria se traduce en una demanda de potencia medible.\r
\r
## 2. Centrales Hidroeléctricas y Generación de Energía Renovable\r
Las centrales hidroeléctricas son la aplicación a mayor escala de la extracción de potencia de un fluido. En este caso, la energía se extrae del agua que cae desde una presa. La diferencia de nivel (salto neto) crea un [[dp]] natural que la turbina convierte en trabajo mecánico. El caudal [[Q]] del río determina la capacidad total de la planta. Los ingenieros buscan maximizar la eficiencia [[eta]] de la turbina para que la potencia de salida eléctrica sea lo más cercana posible a la potencia teórica disponible en el agua. En plantas de gran escala, como Itaipú o las Tres Gargantas, incluso una mejora del 1% en la eficiencia puede significar energía suficiente para abastecer a una ciudad pequeña. Este proceso es el ejemplo máximo de transformación de energía potencial en electricidad a escala continental.\r
-   **Variable dominante:** Caudal volumétrico [[Q]] y eficiencia [[eta]].\r
-   **Límite de validez:** Saltos netos constantes y flujo estacionario; se ignora la compresibilidad del agua.\r
-   **Didáctica impact:** Conecta la mecánica de fluidos con la sostenibilidad y la economía a gran escala.\r
\r
## 3. Sistemas Hidráulicos en Maquinaria Pesada y Robótica\r
Las excavadoras, grúas y sistemas de frenado industrial utilizan la potencia de fluidos (aceites hidráulicos) para generar fuerzas inmensas en espacios reducidos. En estas aplicaciones, el caudal [[Q]] suele ser pequeño pero la diferencia de presión [[dp]] es extremadamente alta (pudiendo superar los 300 bar). Esto permite que pistones relativamente delgados levanten toneladas de peso. La potencia útil [[P_util]] se transmite a través de mangueras flexibles a los actuadores. La eficiencia [[eta]] es crítica aquí no solo por el ahorro de energía, sino porque las pérdidas se convierten en calor que puede degradar el aceite hidráulico y los sellos del sistema, requiriendo sistemas de refrigeración adicionales. La precisión de la construcción moderna depende de la modelización de estos circuitos de alta presión.\r
-   **Variable dominante:** Diferencia de presión [[dp]] y diseño de actuadores.\r
-   **Límite de validez:** Sistemas de alta presión donde las fugas internas (pérdida de eficiencia volumétrica) se vuelven significativas.\r
-   **Didáctica impact:** Muestra el intercambio entre presión y área para generar fuerzas mecánicas extremas.\r
\r
## 4. Refrigeración de Centros de Datos y Plantas Industriales\r
Los centros de datos modernos generan una cantidad masiva de calor que debe ser retirado mediante circuitos de agua helada. El diseño de las bombas de circulación es vital para mantener un caudal [[Q]] preciso que retire el calor de los servidores. Si la bomba es demasiado pequeña, el caudal será insuficiente y los equipos se sobrecalentarán; si es demasiado grande, se desperdiciará energía eléctrica [[P_in]] innecesariamente. Los ingenieros utilizan la potencia de bombeo para asegurar que el fluido venza la gran resistencia de los intercambiadores de calor de placas. La eficiencia [[eta]] del sistema de bombeo es un componente clave del PUE (*Power Usage Effectiveness*) de un centro de datos. La refrigeración optimizada es hoy un pilar de la sostenibilidad digital global.\r
-   **Variable dominante:** Caudal [[Q]] y transferencia de calor asociada.\r
-   **Límite de validez:** Flujos monofásicos; no se considera el cambio de fase en este modelo básico.\r
-   **Didáctica impact:** Enfatiza la importancia de la eficiencia en infraestructuras digitales críticas.\r
\r
## 5. Plantas de Desalinización por Ósmosis Inversa\r
La desalinización de agua de mar para consumo humano requiere presurizar el agua a niveles muy altos para obligarla a pasar a través de membranas semipermeables. Este proceso consume una cantidad enorme de energía eléctrica [[P_in]]. Las bombas de alta presión deben entregar una [[dp]] constante para vencer la presión osmótica natural del agua salada. Para mejorar la eficiencia [[eta]], muchas plantas utilizan dispositivos de recuperación de energía que capturan la presión del agua de rechazo para ayudar a presurizar el agua de entrada. Sin estos avances en ingeniería de fluidos y gestión de potencia, el coste del agua desalinizada sería prohibitivo para la mayoría de las ciudades. Este caso muestra cómo la potencia de fluidos es clave para la supervivencia humana.\r
-   **Variable dominante:** Potencia de entrada [[P_in]] y presión de operación.\r
-   **Límite de validez:** Concentraciones de salinidad estándar y temperaturas de operación de las membranas.\r
-   **Didáctica impact:** Presenta un caso donde la potencia de fluidos es la clave para la supervivencia.\r
\r
## 6. Gestión de Aguas Residuales y Saneamiento Urbano\r
Mover millones de toneladas de residuos y aguas residuales a través de una red urbana requiere estaciones de bombeo masivas. Estos sistemas deben manejar fluidos con sólidos en suspensión, lo que cambia la viscosidad efectiva y requiere diseños de impulsores especiales. La potencia [[P_util]] se calcula para evitar la sedimentación manteniendo una velocidad mínima de autolimpieza. La eficiencia [[eta]] es vital para los presupuestos municipales, ya que el transporte de aguas suele ser el mayor gasto eléctrico de una ciudad.\r
-   **Variable dominante:** Caudal [[Q]] y composición del fluido.\r
-   **Límite de validez:** Comportamiento no newtoniano y alta carga de sólidos.\r
-   **Didáctica impact:** Resalta la complejidad del transporte de fluidos en infraestructuras sociales.`;export{e as default};
