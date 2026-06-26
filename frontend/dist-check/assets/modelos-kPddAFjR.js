const e=`\uFEFF# Modelos del Principio Fundamental de la Hidrostática\r
\r
## Modelo ideal\r
El modelo físico ideal del Principio Fundamental de la Hidrostática describe la relación lineal entre la presión absoluta y la cota vertical en un fluido en reposo. Se basa en la premisa de que el fluido es un medio continuo cuya densidad no se ve alterada por los cambios de presión. Bajo esta aproximación, el gradiente de presión es constante en todo el volumen analizado, lo que simplifica enormemente los cálculos de ingeniería para la gran mayoría de líquidos en condiciones terrestres. Es el modelo estándar para el diseño de presas, sistemas de fontanería, depósitos industriales y estática marina convencional donde la precisión requerida permite ignorar efectos de segundo orden.\r
\r
## Hipótesis\r
La validez de la ecuación [[p2]] es [[p1]] + [[rho]] g ([[z1]] - [[z2]]) depende de las siguientes hipótesis físicas restrictivas:\r
1.  **Incompresibilidad absoluta del medio:** Se asume que el coeficiente de compresibilidad volumétrica es cero (K es 0). Esto implica que el volumen de una masa de fluido no disminuye al aumentar la presión, manteniendo la densidad [[rho]] como un parámetro escalar constante e independiente de la profundidad.\r
2.  **Equilibrio estático puro:** No existen movimientos macroscópicos del fluido. El campo de velocidades es nulo en todos sus puntos (v es 0), lo que elimina cualquier componente dinámica de presión (Bernoulli) o fuerzas viscosas de corte que alterarían el balance de fuerzas.\r
3.  **Campo gravitatorio uniforme:** La aceleración de la gravedad [[g]] se considera constante tanto en magnitud como en dirección a lo largo de toda la columna de fluido analizada. Se desprecian las variaciones de g con la altitud (1/r^2) y las anomalías locales del geoide terrestre.\r
4.  **Ausencia de efectos de tensión superficial:** En grandes volúmenes de fluido, se ignoran las fuerzas capilares y superficiales, considerando únicamente las fuerzas de volumen (gravedad) y de superficie (presión).\r
\r
## Dominio de validez cuantitativo\r
Este modelo es extraordinariamente preciso cuando se trabaja dentro de los siguientes rangos operativos y criterios de error:\r
-   **Altura de columna de líquido (h):** Válido para desniveles de hasta 5000 m en líquidos. En el agua, la densidad solo aumenta un 2\\% a 4000 m de profundidad, por lo que el error de asumir densidad constante es menor al 1\\% para la mayoría de propósitos técnicos.\r
-   **Altura de columna de gas (h):** Para gases como el aire, el modelo lineal solo es aceptable para variaciones de altura menores a 100 m (h < 100 m). Por encima de este valor, la caída de presión provoca una expansión del gas que invalida la hipótesis de densidad constante.\r
-   **Variación de presión (incremento de presion):** El modelo mantiene su integridad para presiones de hasta 500 atm (50 MPa). A presiones superiores, incluso los líquidos empiezan a mostrar una compresibilidad que requiere términos correctivos no lineales.\r
\r
## Señales de fallo del modelo\r
El modelo lineal deja de ser representativo cuando se observan los siguientes fenómenos:\r
-   **Compresibilidad no despreciable:** En gases a gran escala, la presión calculada linealmente difiere drásticamente de la medida. Por ejemplo, a 10 km de altitud, el error del modelo lineal supera el 50\\%.\r
-   **Dinámica de fluidos:** La aparición de corrientes o turbulencias genera diferencias de presión que el principio fundamental no puede explicar, requiriendo la ecuación de Navier-Stokes.\r
-   **Gradiente gravitatorio:** En estudios planetarios a gran escala, la variación de g con la distancia al centro de masas invalida la hipótesis de gravedad uniforme.\r
\r
## Modelo extendido o alternativo\r
Para superar las limitaciones del modelo incompresible, se recurre al **Modelo Hidrostático Compresible o Ecuación Barométrica**. Este modelo integra la ecuación diferencial fundamental [[dp]] es -[[rho]](p) g [[dz]] acoplándola con una ecuación de estado (como la de los gases ideales p es [[rho]] R T / M).\r
\r
Transición al modelo barométrico: conviene cambiar de modelo cuando la altura característica del sistema sea comparable a la altura de escala de la atmósfera (unos 8 km) o cuando debamos pasar al estudio de gases compresibles.\r
\r
{{f:salto_hidro}}\r
\r
\r
p(z) es presion de referencia * exp( - frac{M g z}{R T} )\r
\r
\r
## Comparación operativa\r
Mientras que el modelo lineal es una herramienta potente y sencilla para la ingeniería civil y de fluidos líquidos, el modelo barométrico exponencial es la base de la meteorología, la aeronáutica y la física de atmósferas planetarias. El primero destaca por su facilidad de cálculo en entornos controlados, mientras que el segundo ofrece la profundidad necesaria para entender la estructura de los fluidos compresibles a gran escala y la variación de la presión atmosférica con la altitud.\r
\r
\r
`;export{e as default};
