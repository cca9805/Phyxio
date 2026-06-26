# Teoría — Ejemplos prácticos

## Contexto conceptual

Los ejemplos prácticos de refrigeradores y bombas de calor conectan los principios termodinámicos teóricos con el diseño y operación de sistemas reales. El problema central es determinar cuánta potencia eléctrica necesita un compresor para mantener un espacio a una temperatura deseada, cuánto calor puede extraer o entregar el sistema, y cómo se compara su eficiencia medida con el límite teórico de Carnot. Esta conexión entre teoría y práctica es esencial para dimensionar sistemas, estimar costes energéticos y evaluar la calidad de un diseño.

## 🟢 Nivel esencial

Un refrigerador doméstico extrae calor [[Q_C]] del interior frío y lo entrega al ambiente caliente consumiendo potencia eléctrica [[W_comp]] en el compresor. El [[COP_real]] indica cuántas unidades de calor se extraen por cada unidad de potencia consumida. Un refrigerador típico tiene un [[COP_real]] entre 2 y 4, lo que significa que por cada vatio de electricidad consumido, se extraen de 2 a 4 vatios de calor del interior.

Una bomba de calor hace lo mismo pero con objetivo inverso: extrae calor del exterior frío y lo entrega al interior de un edificio. Su [[COP_real]] mide cuántas unidades de calor se entregan al espacio calentado por unidad de potencia. Las bombas de calor geotérmicas alcanzan [[COP_real]] de 3.5 a 5, convirtiendo cada vatio de electricidad en 3.5 a 5 vatios de calefacción.

El [[COP_Carnot]] establece el techo absoluto de eficiencia. Ningún sistema real lo alcanza. La fracción de Carnot [[eta_Carnot]] mide qué porcentaje del límite teórico alcanza el sistema, típicamente un 30 a 60 %.

## 🔵 Nivel formal

La definición del COP real de refrigeración es:

{{f:cop_real_refrigeracion}}

Para una bomba de calor, la definición del COP real es:

{{f:cop_real_bomba_calor}}

El COP de Carnot de referencia para refrigeración se calcula como:

{{f:cop_carnot_referencia}}

La fracción de Carnot cuantifica la eficiencia relativa del sistema real:

{{f:fraccion_carnot}}

El balance energético en estado estacionario establece que el calor entregado al foco caliente [[Q_H]] siempre supera al calor extraído del foco frío [[Q_C]] en exactamente la potencia del compresor [[W_comp]]:

{{f:balance_energetico_practico}}

El consumo energético en un período de operación se obtiene multiplicando la potencia por el tiempo de funcionamiento:

{{f:consumo_energetico}}

Para un refrigerador doméstico con [[T_C]] de 258 K y [[T_H]] de 308 K, el [[COP_Carnot]] es 5.16. Con un [[COP_real]] de 2.5 (fracción de Carnot del 48 %), una potencia de compresor [[W_comp]] de 150 W produce una capacidad de refrigeración [[Q_C]] de 375 W y un rechazo de calor [[Q_H]] de 525 W. El consumo energético diario [[E_dia]] para 8 horas de operación efectiva es 150 multiplicado por 8, dando 1200 Wh o 1.2 kWh. Este valor permite estimar directamente el coste eléctrico asociado al funcionamiento del equipo de refrigeración en condiciones nominales de operación.

## 🔴 Nivel estructural

La eficiencia de los sistemas reales se degrada respecto al ideal de Carnot por múltiples fuentes de irreversibilidad. La compresión real no es isentrópica: el rendimiento isentrópico del compresor oscila entre 0.70 y 0.85, lo que incrementa [[W_comp]] y reduce [[COP_real]]. La expansión a través de la válvula de estrangulamiento es isoentálpica, no isentrópica, generando entropía adicional. Los intercambiadores de calor operan con diferencias de temperatura finitas de 5 a 15 K entre el refrigerante y los focos, alejando las temperaturas efectivas de los valores nominales de [[T_C]] y [[T_H]].

La conexión estructural entre [[COP_real]], [[COP_Carnot]] y [[eta_Carnot]] revela que mejorar la eficiencia requiere actuar sobre múltiples frentes simultáneamente: reducir las pérdidas del compresor, minimizar las diferencias de temperatura en los intercambiadores y optimizar el ciclo termodinámico del refrigerante.

## Interpretación física profunda

El [[COP_real]] no es una constante del sistema sino una función de las condiciones de operación. A medida que [[T_C]] se aleja de [[T_H]], tanto el [[COP_Carnot]] como el [[COP_real]] disminuyen porque el salto térmico que debe vencer el compresor aumenta. Físicamente, esto significa que refrigerar a temperaturas más bajas cuesta progresivamente más energía, y que calentar desde fuentes más frías también es más costoso.

La fracción de Carnot [[eta_Carnot]] captura la calidad termodinámica del diseño. Un sistema con alta fracción de Carnot está bien diseñado y opera cerca de sus límites físicos. Un sistema con baja fracción tiene margen de mejora significativo, ya sea en el compresor, los intercambiadores o el refrigerante.

## Orden de magnitud

| Magnitud | Valor típico | Contexto |
|---|---|---|
| [[COP_real]] refrigeración doméstica | 2 a 4 | Refrigerador entre 258 K y 308 K |
| [[COP_real]] bomba de calor geotérmica | 3.5 a 5 | Fuente a 283 K, entrega a 318 K |
| [[COP_Carnot]] refrigeración doméstica | 4.5 a 6 | Condiciones estándar |
| [[eta_Carnot]] | 30 a 60 % | Sistemas bien diseñados |
| [[W_comp]] doméstico | 80 a 200 W | Refrigerador estándar |
| [[Q_C]] doméstico | 200 a 500 W | Capacidad frigorífica |

## Método de resolución personalizado

1. Identificar si el sistema es refrigerador o bomba de calor y determinar el efecto útil.
2. Convertir todas las temperaturas a kelvin sumando 273.15 a los valores en Celsius.
3. Calcular el [[COP_Carnot]] como [[T_C]] dividido entre la diferencia [[T_H]] menos [[T_C]].
4. Estimar o leer el [[COP_real]] del sistema; si no se da, usar la fracción de Carnot típica (40 a 55 %).
5. Calcular la capacidad ([[Q_C]] o [[Q_H]]) multiplicando [[COP_real]] por [[W_comp]].
6. Verificar el balance energético: [[Q_H]] debe ser [[Q_C]] más [[W_comp]].
7. Comparar [[COP_real]] con [[COP_Carnot]] para validar coherencia.

## Casos especiales y ejemplo extendido

Cuando [[T_C]] se acerca a [[T_H]], el [[COP_Carnot]] diverge, sugiriendo eficiencia infinita. En la práctica, esto nunca se alcanza porque las irreversibilidades tienen un mínimo irreducible. Cuando [[T_C]] es muy baja (criogenia, menos de 200 K), el [[COP_real]] cae drásticamente y las pérdidas del compresor dominan. En estos casos, la fracción de Carnot baja del 25 %.

Como ejemplo extendido, considérese un sistema de refrigeración industrial que opera a [[T_C]] de 233 K (menos 40 grados Celsius) y [[T_H]] de 313 K. El [[COP_Carnot]] es 233 dividido entre 80, que da 2.91. Con [[eta_Carnot]] del 35 %, el [[COP_real]] es 1.02. Con [[W_comp]] de 50 kW, la capacidad de refrigeración [[Q_C]] es 51 kW y [[Q_H]] es 101 kW. El consumo eléctrico mensual alcanza 36000 kWh, lo que demuestra el enorme coste energético de la refrigeración a baja temperatura. Una mejora del 10 % en el [[COP_real]] ahorraría 3273 kWh mensuales.

## Preguntas reales del alumno

**¿Por qué un refrigerador consume 150 W pero extrae 375 W de calor?**
Porque el refrigerador no genera calor sino que lo transfiere. El compresor realiza trabajo para mover calor del interior frío al exterior caliente. El COP de 2.5 significa que cada vatio de electricidad mueve 2.5 vatios de calor, lo cual no viola ninguna ley.

**¿Cómo sé si mi sistema está bien diseñado?**
Calculando la fracción de Carnot. Si el sistema alcanza un 45 a 55 % del COP de Carnot, está en el rango normal. Por debajo del 30 %, hay margen significativo de mejora.

## Conexiones transversales y rutas de estudio

Los ejemplos prácticos conectan con el coeficiente de rendimiento teórico como referencia, con los ciclos termodinámicos como base del diseño del sistema, y con la segunda ley de la termodinámica como fundamento de los límites de eficiencia. En ingeniería, conectan con la normativa de etiquetado energético, el diseño de intercambiadores de calor y la selección de refrigerantes.

## Síntesis final

Los ejemplos prácticos demuestran que los principios termodinámicos no son abstracciones sino herramientas predictivas. El [[COP_Carnot]] establece el techo, el [[COP_real]] mide la realidad, y la fracción de Carnot cuantifica la distancia entre ambos. El consumo energético diario [[E_dia]] traduce estos coeficientes en impacto económico real: multiplicando [[W_comp]] por las horas de operación se obtiene la energía total consumida, que convertida a kWh permite estimar directamente el coste eléctrico. Dominar el dimensionado de estos sistemas requiere integrar la termodinámica teórica con las restricciones prácticas de componentes reales, incluyendo la estimación de [[E_dia]] para evaluar la viabilidad económica.
