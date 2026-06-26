const a=`# Aplicaciones — Ondas superficiales

## 1. Predicción de llegada de olas generadas por tormentas oceánicas

**Contexto físico real**: las tormentas en el océano Atlántico generan un espectro amplio de longitudes de onda que viajan miles de kilómetros hasta las costas europeas. Los sistemas de alerta temprana para surfistas y para protección civil modelan la propagación de estas olas usando la relación de dispersión gravitatoria.

**Hipótesis o simplificación dominante**: agua profunda en toda la ruta de propagación; amplitudes pequeñas (ondas lineales); sin dispersión de amplitud por efectos de fricción oceánica en la primera aproximación.

**Variable dominante**: [[lambda]], que determina [[v]] y, por tanto, el tiempo de llegada de cada componente espectral. Las olas más largas llegan primero porque su [[v]] es mayor. La separación temporal entre la llegada de diferentes [[lambda]] permite estimar la distancia de la fuente.

**Interpretación física**: cada componente armónico de [[lambda]] viaja a [[v]] proporcional a la raíz de [[lambda]]. Un paquete de ondas se dispersa: las componentes largas llegan días antes que las cortas. Los surfistas experimentados reconocen la llegada de "swells" regulares (largas, suaves) antes que las olas caóticas cortas.

**Límite de validez**: el modelo falla cuando las olas entran en aguas someras (plataforma continental, menos de 200 m de profundidad para olas de cientos de metros de longitud) o cuando las amplitudes se vuelven comparables a la profundidad local. En esas zonas se requiere la corrección de agua somera con la función tangente hiperbólica.

---

## 2. Medición de la tensión superficial por análisis de ondas capilares

**Contexto físico real**: en laboratorios de química y física de superficies se mide [[sigma]] de soluciones acuosas, aceites o líquidos biológicos mediante el análisis de la frecuencia y [[lambda]] de ondas capilares generadas por vibración controlada de la superficie. Esta técnica, llamada tensiometría de ondas capilares, es no invasiva y de alta precisión.

**Hipótesis o simplificación dominante**: régimen capilar puro; amplitud muy pequeña (menor de un centésimo de [[lambda]]); temperatura constante; fluido Newtoniano sin viscoelasticidad.

**Variable dominante**: [[sigma]], que fija directamente [[v]] en el régimen capilar dado [[k]] y [[rho]] conocidos. Midiendo [[v]] y [[k]] experimentalmente, [[sigma]] se obtiene despejando de la fórmula capilar.

**Interpretación física**: la fórmula capilar actúa como una ecuación inversa que conecta la observable experimental ([[v]] y [[k]]) con la propiedad material deseada ([[sigma]]). Surfactantes, proteínas o contaminantes en la interfaz modifican [[sigma]] de manera detectable con precisión del 1%.

**Límite de validez**: el método falla si la viscosidad del líquido es elevada (aceites pesados, polímeros), porque la amortiguación viscosa altera la relación de dispersión. Tampoco aplica si la interfaz tiene películas rígidas (monocapas de Langmuir) que añaden viscoelasticidad superficial.

---

## 3. Diseño de estructuras de protección costera (diques y rompeolas)

**Contexto físico real**: los ingenieros costeros diseñan diques y rompeolas para proteger puertos y playas de la erosión por olas. El dimensionado de estas estructuras requiere conocer [[v]], la longitud de onda de las olas de diseño y la profundidad local, todo ello derivado de la relación de dispersión.

**Hipótesis o simplificación dominante**: régimen gravitatorio para olas oceánicas de [[lambda]] de decenas a centenares de metros; condiciones de agua somera en la zona de la estructura (profundidades de 5 a 20 m); espectro de olas dado por las estadísticas meteorológicas del lugar.

**Variable dominante**: [[lambda]], que determina si la estructura actúa como barrera efectiva. Una estructura de longitud mucho menor que [[lambda]] apenas dispersa la ola; para disipar eficientemente la energía, la dimensión de la estructura debe ser comparable a [[lambda]].

**Interpretación física**: las olas de mayor [[lambda]] tienen [[v]] más alta y transportan más energía por unidad de tiempo. El diseño de protección apunta a reducir la [[v]] de las olas que alcanzan la costa disipando energía por reflexión, difracción y disipación viscosa en el material de la estructura.

**Límite de validez**: los modelos lineales de agua profunda son insuficientes; las olas en las cercanías de un dique están en régimen de agua somera y amplitud grande. Se requieren modelos numéricos de elementos finitos o de volúmenes finitos que incorporen la relación de dispersión completa y la interacción con el fondo.

---

## 4. Formación de patrones en la superficie de lluvia (ondas capilares de impacto)

**Contexto físico real**: cuando una gota de lluvia impacta sobre una superficie de agua tranquila, genera un anillo de ondas capilares que se expande radialmente. El patrón de anillos lleva información sobre [[sigma]], [[rho]] y la energía del impacto. Este fenómeno es estudiado en meteorología y en la física de la lluvia.

**Hipótesis o simplificación dominante**: onda circular bidimensional que puede analizarse localmente como onda plana de [[lambda]] dada; régimen capilar para los anillos de menor radio (centímetros y menos); agua profunda respecto a la [[lambda]] de los capilares.

**Variable dominante**: [[sigma]], que controla la [[v]] de los anillos capilares de pequeño radio. Mayor [[sigma]] produce anillos que se expanden más rápido y son más estables frente al amortiguamiento viscoso.

**Interpretación física**: los anillos más cercanos al punto de impacto corresponden a longitudes de onda cortas (capilares) y viajan relativamente rápido. Los anillos más distantes, generados por [[lambda]] mayores, corresponden al régimen gravitatorio y viajan más despacio. El patrón resultante muestra dispersión temporal inversa para las dos familias de anillos.

**Límite de validez**: el modelo capilar simple falla para los instantes inmediatamente después del impacto, donde la geometría es tridimensional y la amplitud es grande. La turbulencia y la salpicadura requieren modelos no lineales. Para radios mayores de unos 10 cm, el régimen gravitatorio empieza a dominar.

---

## 5. Detección de películas de contaminantes en la superficie del agua (sensores capilares)

**Contexto físico real**: la presencia de residuos de petróleo, aceites o surfactantes en la superficie del agua reduce [[sigma]] de forma medible. Sensores ópticos y acústicos miden la [[v]] de ondas capilares generadas artificialmente para estimar el grado de contaminación superficial en tiempo real.

**Hipótesis o simplificación dominante**: régimen capilar puro; [[lambda]] del orden de milímetros para maximizar la sensibilidad al cambio en [[sigma]]; temperatura controlada para evitar variaciones térmicas de [[sigma]].

**Variable dominante**: [[sigma]], cuya reducción por contaminantes disminuye [[v]] capilar. La sensibilidad es máxima en el régimen capilar puro: [[v]] es proporcional a la raíz cuadrada de [[sigma]], por lo que una reducción del 50% en [[sigma]] produce una reducción del 29% en [[v]], detectable con precisión acústica.

**Interpretación física**: el sensor emite una onda capilar de [[k]] conocido y mide el tiempo de llegada al receptor. La [[v]] medida se invierte en la fórmula capilar para obtener [[sigma]] efectivo de la superficie. Cualquier contaminante que reduzca [[sigma]] se manifiesta como una disminución de [[v]] medida.

**Límite de validez**: el método pierde sensibilidad para capas de contaminante muy delgadas (monomolecular) donde la reducción de [[sigma]] es inferior al 1%. También falla si el contaminante forma una película viscoelástica rígida en lugar de simplemente reducir [[sigma]]; en ese caso se requiere una teoría más compleja de ondas en interfaces viscoelásticas.
`;export{a as default};
