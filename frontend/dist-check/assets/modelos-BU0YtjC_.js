const e=`# Modelos físicos para la Formulación de Clausius\r
\r
## Modelo ideal\r
\r
El modelo ideal para el enunciado de Clausius es el sistema de **dos focos térmicos infinitos** en contacto térmico a traves de una interfaz conductora. En este modelo:\r
\r
- Los focos caliente ([[T_A]]) y frio ([[T_B]]) mantienen temperaturas constantes e inmutables, independientemente de la cantidad de calor [[Q]] transferida.\r
- El flujo de calor es **puramente conductivo**, gobernado por la ley de Fourier con conductividad térmica constante.\r
- No existe **acumulacion de calor** en la interfaz: todo el calor que entra por un lado sale por el otro instantaneamente.\r
- El proceso es **cuasi-estatico reversible**, con diferencias de temperatura infinitesimales que permiten la reversibilidad teorica.\r
\r
Este modelo idealiza la situación física real donde los focos tienen capacidad calorifica infinita y las transferencias son perfectamente reversibles. Es útil para establecer limites teoricos y comprender la direccion fundamental del flujo térmico sin las complicaciones de los procesos reales irreversibles.\r
\r
## Hipótesis\r
\r
1. **Temperaturas uniformes y constantes**: Cada foco térmico posee temperatura homogenea espacialmente y constante temporalmente. Esto requiere capacidad calorifica infinita o reservorios energeticamente inagotables.\r
\r
2. **Contacto térmico ideal**: La interfaz entre focos permite transferencia térmica perfecta sin resistencia de contacto ni perdidas al ambiente exterior.\r
\r
3. **Proceso estacionario**: El flujo de calor alcanza rápidamente un regimen estacionario donde la tasa de transferencia es constante.\r
\r
4. **Ausencia de trabajo externo**: El flujo espontaneo ocurre sin intervención mecánica; solo la diferencia de temperaturas [[DeltaT]] impulsa la transferencia.\r
\r
5. **Equilibrio térmico local**: Aunque hay flujo neto, cada punto de los focos internamente esta en equilibrio térmico local con temperatura bien definida.\r
\r
## Dominio de validez cuantitativo\r
\r
El modelo de focos infinitos es válido cuando se cumple:\r
\r
[[Q]] / ([[C_A]] · [[T_A]]) << 0.01 y [[Q]] / ([[C_B]] · [[T_B]]) << 0.01\r
\r
Donde [[C_A]] y [[C_B]] son las capacidades calorificas de los focos. Esto significa que el calor transferido debe ser menos del 1% del contenido energético térmico de cada foco para que sus temperaturas permanezcan esencialmente constantes.\r
\r
Para un proceso concreto con diferencia de temperaturas [[DeltaT]] de 50 K y duracion t de 100 s, el modelo es válido si:\r
\r
- Conductividad térmica k > 0.1 W/(m·K) (materiales no aislantes)\r
- Dimension caracteristica L < 0.1 m (transferencias rápidas)\r
- Número de Biot Bi < 0.1 (resistencia interna << resistencia superficial)\r
\r
## Señales de fallo del modelo\r
\r
El modelo de focos infinitos deja de ser aplicable cuando se observan estas señales:\r
\r
- **Cambio apreciable de temperatura**: Si [[T_A]] desciende más de un 5% o [[T_B]] asciende más de un 5% durante el proceso, los focos no son infinitos.\r
\r
- **Acumulacion de calor en la interfaz**: Si la temperatura de la superficie de contacto difiere significativamente de las temperaturas internas de los focos, existe resistencia térmica de contacto no considerada.\r
\r
- **Flujo no estacionario**: Oscilaciones temporales en la tasa de flujo calorifico indican procesos transitorios que no siguen el regimen estacionario asumido.\r
\r
- **Transferencia radiativa dominante**: Si la temperatura es alta (> 500 K) y los cuerpos estan separados, la radiacion puede superar la conduccion, invalidando el modelo conductivo puro.\r
\r
- **Efectos de no equilibrio**: En gradientes extremos (> 10^6 K/m), el concepto de temperatura local pierde validez y se requieren descripciones de no equilibrio térmico.\r
\r
## Modelo extendido o alternativo\r
\r
El **modelo de focos finitos con capacidad calorifica finita** extiende el modelo ideal hacia situaciones más realistas:\r
\r
- Los focos [[C_A]] y [[C_B]] tienen capacidades calorificas finitas, por lo que sus temperaturas evolucionan segun [[T]](t) = [[T_0]] ± [[Q]](t) / [[C]].\r
- El flujo calorifico es transitorio: [[Q]](t) = [[C_A]] · d[[T_A]]/dt = -[[C_B]] · d[[T_B]]/dt.\r
- El proceso continua hasta alcanzar equilibrio térmico: [[T_A]](∞) = [[T_B]](∞) = ([[C_A]]·[[T_A0]] + [[C_B]]·[[T_B0]]) / ([[C_A]] + [[C_B]]).\r
\r
Diferencias concretas respecto al modelo ideal:\r
- El gradiente [[DeltaT]] disminuye temporalmente, reduciendo la tasa de transferencia.\r
- El tiempo para alcanzar equilibrio es finito y calculable: τ ~ [[L]]^2 / α (difusividad térmica).\r
- El análisis requiere ecuaciones diferenciales en lugar de algebraicas.\r
\r
Transicion explicita: Se recomienda abandonar el modelo ideal y adoptar el extendido cuando [[Q]]_transferido > 0.05 · [[C]]_min · [[T]]_promedio.\r
\r
## Comparacion operativa\r
\r
| Aspecto | Modelo ideal (focos infinitos) | Modelo extendido (focos finitos) |\r
|---------|----------------------------------|----------------------------------|\r
| **Temperaturas** | Constantes [[T_A]], [[T_B]] | Evolucionan [[T_A]](t), [[T_B]](t) |\r
| **Ecuaciones** | Algebraicas simples | Diferenciales acopladas |\r
| **Complejidad** | Baja | Media |\r
| **Precision** | Limite teorico | Prediccion realista |\r
| **Tiempo de calculo** | Instantaneo | Requiere integración temporal |\r
| **Aplicaciones** | Limites teoricos, eficiencias maximas | Disenos reales, simulaciones dinamicas |\r
| **Validez** | Transferencias pequeñas, focos masivos | Transferencias significativas, sistemas pequeños |\r
\r
Ventajas del modelo ideal:\r
- Simplicidad matemática que permite calculos rápidos\r
- Establece limites absolutos irreprochables (Carnot, Clausius)\r
- Facil interpretacion física sin complicaciones transitorias\r
\r
Limites del modelo ideal:\r
- No predice evolucion temporal real\r
- No captura acumulacion térmica ni saturacion\r
- Inaplicable a sistemas con capacidades térmicas comparables al calor transferido\r
\r
Ventajas del modelo extendido:\r
- Predice comportamiento temporal cuantitativo\r
- Captura equilibrio térmico final real\r
- Aplicable a sistemas de cualquier escala\r
\r
Limites del modelo extendido:\r
- Requiere conocer capacidades calorificas exactas\r
- Más complejo computacionalmente\r
- Puede necesitar metodos numericos para casos no lineales\r
\r
Magnitudes auxiliares del modelo extendido: [[C]], [[C_A]], [[C_B]], [[L]], [[P_termica]], [[T_0]], [[T_A0]], [[T_B0]], [[T_C]], [[T_K]], [[T_max]] y [[U]].\r
`;export{e as default};
