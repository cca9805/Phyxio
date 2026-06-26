# Modelos de Presión Hidrostática

## Modelo ideal
El modelo físico ideal de presión hidrostática describe el cálculo analítico de la presión interior de un fluido en reposo basándose en un perfil lineal donde la presión aumenta proporcionalmente con la profundidad. Este modelo considera que el fluido es un medio continuo e isotrópico, sin movimientos macroscópicos ni efectos de viscosidad significativos. Como consecuencia, la diferencia de presiones entre dos puntos depende exclusivamente de la diferencia de altura y de la densidad del fluido. Este modelo es el estándar utilizado en la hidrostática tradicional y en la mayoría de aplicaciones de ingeniería convencional.

## Hipótesis
Para lograr la validez integral del modelo lineal simple se asume un compendio de hipótesis físicas restrictivas:
1.  **Fluido continua y estrictamente incompresible:** La densidad volumétrica permanece prácticamente constante con la profundidad dentro del rango de trabajo del modelo.
2.  **Reposo macroscópico y estático inercial:** Las velocidades macroscópicas del fluido son nulas y no hay aceleraciones de flujo relevantes. Solo se considera la acción gravitatoria estática.
3.  **Aceleración gravitacional completamente uniforme y paramétrica:** La aceleración del campo gravitacional local impuesta ([[g]]) no decae ni sufre alteraciones relativas al escalar la profundidad dentro del modelo delimitado estricto experimental. Se desprecia la sutil desviación radial gravimétrica esférica inherente de todo astro o planeta esférico analizado en esta aproximación.
4.  **Carencia de gradientes térmicos significativos:** El fluido se considera isotermo, evitando fluctuaciones de densidad por dilatación térmica no contempladas en el modelo lineal.  

## Dominio de validez cuantitativo
Este modelo incompresible mantiene una fiabilidad empírica suprema operativa para los siguientes rangos:
-   **Altura o profundidad del tramo (h):** Se considera válido para 0 < h < 6000 m. Por debajo de los seis kilómetros, la desviación predictiva para el agua se mantiene por debajo del 3%, lo cual es aceptable en la mayoría de aplicaciones técnicas de ingeniería civil y naval.
-   **Variación de densidad (delta [[rho]]):** La hipótesis de densidad constante es aceptable si la variación relativa es menor al 1% (delta [[rho]] / [[rho]] < 0.01). En el océano, esto se cumple hasta profundidades de varios kilómetros.
-   **Magnitudes de presión (p):** El modelo es preciso para presiones menores a 10^8 Pa (100 MPa). A presiones superiores, la compresibilidad del agua deja de ser despreciable y el error supera el umbral de seguridad de ingeniería.

## Señales de fallo del modelo
Cuando las asunciones se corrompen las señales de inaplicabilidad son explícitas y evidentes en contrastes experimentales técnicos formales:
-   **Presencia de flujo:** Si se detectan velocidades no nulas (v no es igual a 0), el gradiente de presión dejará de ser puramente estático y aparecerán términos dinámicos de Bernoulli y pérdidas por fricción viscosa.
-   **Compresibilidad evidente:** Si al aumentar la profundidad la presión medida crece más rápido de lo que predice el modelo lineal hidrostático, significa que el fluido se está compactando y la densidad deja de ser constante.
-   **Gradientes térmicos:** Si hay fuentes de calor intensas (como fumarolas volcánicas submarinas), la densidad variará localmente por convección, rompiendo la estratificación hidrostática.

## Modelo extendido o alternativo
El salto de escalón cognitivo radica inexorablemente en dar paso a la integración global teórica adoptando por completo el **Modelo de Presión Isoterma Bari-dependiente o Ecuación Barométrica Diferencial Integral**. Para todo entorno natural fluido extremadamente deformable compresible elástico (como la atmósfera), interviene con una inmensa precisión acoplando formalmente la termodinámica gaseosa general ideal clásica como sustitución del parámetro densídico fijo constante lineal.

Transición al modelo barométrico: conviene cambiar de modelo cuando la altura característica sea comparable a la altura de escala de la atmósfera (unos 8 km) o cuando debamos pasar al estudio de gases compresibles.

{{f:presion_hidro}}

En medios compresibles, la variación de presión con la altura requiere un modelo diferencial acoplado con termodinámica.


Cuyo despliegue integral para un gas ideal produce una caída de presión de tipo exponencial con la altura.


## Comparación operativa
El modelo elemental clásico (lineal) es óptimo para el estudio de recipientes, piscinas, depósitos y sistemas de tuberías donde la incompresibilidad permite un cálculo sencillo y preciso. Por el contrario, el modelo barométrico exponencial es imprescindible en meteorología, astrofísica y estudios atmosféricos a gran escala donde la densidad varía drásticamente con la altitud.

