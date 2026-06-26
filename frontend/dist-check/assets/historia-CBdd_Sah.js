const e=`# Historia y evolución de los enchufes y tomas de corriente\r
\r
## Problema histórico\r
\r
El problema central que motivó el desarrollo del enchufe doméstico fue conectar y desconectar aparatos eléctricos de la red sin modificar el cableado de la instalación. En los primeros sistemas de distribución doméstica (Edison, Swan, 1880s), los equipos se conectaban directamente a los bornes de la instalación fija, lo que implicaba un riesgo elevado y hacía imposible el uso de equipos portátiles. La necesidad de un punto de conexión seguro, repetible y manipulable por el usuario sin conocimientos técnicos definió el problema de diseño.\r
\r
## Dificultad conceptual previa\r
\r
La dificultad principal no era eléctrica sino mecánica: crear un contacto metálico repetible con [[R_contacto]] baja, que no se degradara con el uso y que fuera seguro ante la manipulación. Los primeros enchufes de clavija abierta (sin carcasa aislante sobre las clavijas) permitían el contacto accidental con las partes conductoras bajo tensión. La introducción de clavijas con carcasa aislante y la geometría de inserción guiada resolvió el problema de seguridad, pero creó un nuevo reto: garantizar que [[R_contacto]] permaneciera baja tras miles de ciclos de inserción y extracción.\r
\r
El concepto de [[I_max]] como límite de diseño del contacto surgió precisamente de la observación de que los contactos se degradaban más rápidamente cuando se usaban con cargas de alta [[I]]. La relación [[P_perdida]] = [[I_tot]]² · [[R_contacto]] explica físicamente por qué la degradación es especialmente severa con corrientes altas: el calor local crece cuadráticamente con la corriente.\r
\r
## Qué cambió\r
\r
La introducción de la toma de tierra con el conector Schuko (1926, Alemania) fue el cambio conceptual más importante: separó la función de conexión eléctrica de la función de protección personal. La toma de tierra no limita [[I_tot]] ni protege el contacto frente a sobrecarga, pero sí protege al usuario frente a tensiones peligrosas en la carcasa del equipo. Esta separación funcional es exactamente la que existe entre [[margen_uso]] (protección del contacto) y el diferencial (protección personal).\r
\r
La normativa IEC 60884 (1994) formalizó el concepto de [[I_max]] como parámetro de diseño obligatorio y estableció pruebas de envejecimiento que validan que [[R_contacto]] no aumente excesivamente tras el uso prolongado.\r
\r
## Impacto en la física\r
\r
El análisis de enchufes y tomas introdujo en la ingeniería eléctrica doméstica el concepto de resistencia de contacto como magnitud física relevante, no solo como imperfección ignorable. La ley de Joule localizada, [[P_perdida]] = [[I_tot]]² · [[R_contacto]], es la misma que explica el calentamiento de los filamentos de tungsteno en lámparas incandescentes y las pérdidas en transformadores de potencia; en el contexto de la toma, esta ley opera en una escala de resistencias muy pequeñas pero con corrientes que pueden ser grandes.\r
\r
El concepto de [[margen_uso]] como ratio adimensional entre la magnitud observada y su límite de diseño es una abstracción que aparece en múltiples contextos de ingeniería de seguridad: factor de uso de materiales, margen de estabilidad en sistemas de control, factor de carga en redes eléctricas. El leaf de enchufes y tomas es una introducción concreta a este patrón de pensamiento.\r
\r
## Conexión con física moderna\r
\r
La proliferación de cargadores USB-C de alta potencia (hasta 140 W por puerto, equivalente a una corriente de 0,61 A a 230 V, pero con picos de corriente armónica significativos) ha renovado el interés en el análisis de [[R_contacto]] y [[P_perdida]] para tomas y regletas. Los cargadores modernos con carga rápida generan formas de onda de corriente no sinusoidales que pueden producir calentamientos de contacto mayores que los predichos por el modelo de valor eficaz.\r
\r
Los estándares actuales (IEC 62368-1) incorporan pruebas de temperatura del contacto bajo perfiles de carga con componentes armónicas, demostrando que el modelo físico de este leaf sigue siendo el núcleo del análisis de seguridad, aunque extendido para incluir la forma de onda real de la corriente.\r
`;export{e as default};
