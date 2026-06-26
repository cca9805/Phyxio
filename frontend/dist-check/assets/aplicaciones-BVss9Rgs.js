const e=`## 1. Diseño de ciclos de potencia en centrales térmicas\r
\r
En toda central térmica (carbón, gas natural, nuclear), el ingeniero de ciclo calcula primero [[eta_Carnot]] entre las temperaturas del foco caliente (cámara de combustión o reactor) y el foco frío (condensador, torre de refrigeración). Este valor establece el rendimiento máximo que ninguna modificación del ciclo puede superar.\r
\r
El ciclo real (Rankine para vapor, Brayton para gas) se evalua comparando su eficiencia con [[eta_Carnot]]. La eficiencia de segunda ley compara el rendimiento real con ese limite y cuantifica la calidad del diseno: valores del 70-85% indican un buen aprovechamiento; valores inferiores al 60% senalan margen de mejora significativo.\r
\r
Las mejoras típicas se orientan a acercar el ciclo real al reversible: precalentamiento del agua de alimentación (reduce irreversibilidad en la caldera), recalentamiento intermedio en la turbina (reduce humedad y pérdidas), y ciclos combinados gas-vapor (aprovechan mejor el rango de temperaturas).\r
\r
Variable dominante: [[eta_Carnot]] como referencia y eta_II como indicador de calidad\r
Límite de validez: [[eta_Carnot]] asume focos a temperatura constante, pero en ciclos Rankine la temperatura del vapor varía durante la absorción de calor. Para mayor precisión se usa la temperatura media termodinámica.\r
\r
## 2. Refrigeración y bombas de calor\r
\r
El coeficiente de operación (COP) máximo de un refrigerador reversible es COP_Carnot = [[T_frio]] / ([[T_caliente]] − [[T_frio]]), y el de una bomba de calor reversible es COP_BC = [[T_caliente]] / ([[T_caliente]] − [[T_frio]]). Ambos se derivan directamente de [[DeltaS_univ]] = 0.\r
\r
El ingeniero de climatizacion usa estos valores como referencia para evaluar equipos comerciales. Un aire acondicionado domestico con COP real de 3.5 frente a un COP reversible cercano a 12 indica una eficiencia de segunda ley del 29%, senalando que hay mucho margen de mejora teorico.\r
\r
El límite práctico viene dado por los gradientes de T necesarios en los intercambiadores de calor (evaporador y condensador), la fricción del compresor y las pérdidas de presión en las tuberías. Cada una de estas fuentes genera entropía y reduce el COP real respecto al reversible.\r
\r
Variable dominante: COP_Carnot como referencia y COP_real / COP_Carnot como indicador de calidad\r
Límite de validez: la fórmula de COP_Carnot asume temperaturas de los focos constantes. Si la fuente de calor o el sumidero varían de temperatura (por ejemplo, calentamiento de agua desde 10 °C hasta 60 °C), se requiere integrar.\r
\r
## 3. Licuefacción de gases y criogenia\r
\r
En la industria criogénica, el trabajo mínimo para licuar un gas desde temperatura ambiente hasta su punto de ebullición se calcula mediante un proceso reversible idealizado. El trabajo mínimo es la diferencia de exergía entre los estados gaseoso y líquido, que equivale al trabajo de un ciclo de Carnot operando entre T_ambiente y T_licuefacción.\r
\r
Para licuar nitrogeno desde temperatura ambiente hasta 77 K, la referencia reversible da una fraccion de Carnot cercana al 74%. El trabajo mínimo por kg se obtiene como diferencia de exergia y ronda 768 kJ/kg. Los sistemas reales (Linde, Claude) consumen 3-5 veces más, indicando una eficiencia de segunda ley del 20-33%.\r
\r
La comparación con el proceso reversible permite evaluar si vale la pena invertir en mejorar el ciclo de licuefacción (pre-enfriamiento, expansores en lugar de válvulas) o si las pérdidas son inherentes al rango de temperaturas.\r
\r
Variable dominante: trabajo mínimo reversible por kg de gas licuado (kJ/kg)\r
Límite de validez: el modelo reversible asume gas ideal para la fase gaseosa. A presiones y temperaturas próximas a la zona de transición, se necesitan ecuaciones de estado reales (Peng-Robinson, NIST).\r
\r
## 4. Pilas de combustible de hidrógeno\r
\r
Una pila de combustible de hidrógeno convierte energía química en energía eléctrica. La eficiencia máxima reversible no está limitada por Carnot (porque no es una máquina térmica cíclica) sino por la termodinámica de la reacción: eta_max = ΔG / ΔH, donde ΔG es la energía libre de Gibbs y ΔH la entalpía de reacción.\r
\r
Para la reacción H₂ + ½O₂ → H₂O a 25 °C: ΔG = −237 kJ/mol, ΔH = −286 kJ/mol. La eficiencia máxima reversible es 237/286 = 82.9%. Esta es la referencia contra la que se mide la eficiencia real de la pila (típicamente 50-65%).\r
\r
La diferencia entre la eficiencia real y la reversible se debe a irreversibilidades internas: polarización del electrodo, resistencia óhmica de la membrana, limitaciones de transporte de masa. Cada fuente genera entropía y reduce el voltaje de celda por debajo del reversible (1.23 V a 25 °C).\r
\r
Variable dominante: voltaje de celda real vs voltaje reversible (V) y eficiencia de segunda ley\r
Límite de validez: a temperaturas elevadas (pilas SOFC a 800 °C), ΔG cambia con T y la eficiencia máxima reversible aumenta. El modelo a 25 °C no es aplicable directamente.\r
\r
## 5. Almacenamiento de energía por aire comprimido (CAES)\r
\r
En sistemas de almacenamiento de energía por aire comprimido, el aire se comprime durante horas valle (electricidad barata) y se expande en horas pico para generar electricidad. La eficiencia máxima del almacenamiento se calcula asumiendo compresión y expansión isentrópicas (adiabáticas reversibles).\r
\r
Para una relación de presiones de 70:1 y una compresión isentropica desde 300 K, la temperatura final ideal queda cerca de 1032 K. El trabajo de compresión isentropico ronda 735 kJ/kg. La expansión isentropica recupera teoricamente el 100% de ese trabajo.\r
\r
En la práctica, la compresión real genera entropía (temperatura del aire mayor que la isentrópica) y la expansión real también (temperatura final mayor que la isentrópica). La eficiencia «round-trip» de sistemas CAES adiabáticos es del 60-70%, comparada con el 100% reversible.\r
\r
La comparación con el proceso reversible permite cuantificar las pérdidas por irreversibilidad del compresor (eficiencia isentrópica típica: 85-90%) y de la turbina (eficiencia isentrópica típica: 88-93%), y decidir si la inversión en compresores de mayor eficiencia justifica el coste.\r
\r
Variable dominante: eficiencia isentrópica del compresor y de la turbina (adimensional)\r
Límite de validez: el modelo isentrópico asume aire como gas ideal con c_p constante. A presiones de 70 atm, las desviaciones de idealidad son del 2-5% y pueden requerir correcciones de gas real.\r
`;export{e as default};
