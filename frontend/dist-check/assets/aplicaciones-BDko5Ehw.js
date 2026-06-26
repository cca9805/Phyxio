const e=`# Aplicaciones: Bloque colgante\r
\r
## 1. Elevadores de pasajeros\r
\r
Los ascensores modernos funcionan mediante un motor eléctrico que tira de un cable de acero conectado a la cabina mediante un sistema de poleas. Cuando el ascensor está parado en un piso esperando pasajeros, la tensión del cable es exactamente igual al peso total de la cabina más los pasajeros que contiene en ese momento. Para iniciar el ascenso hacia el siguiente piso, el motor aumenta la tensión ligeramente por encima del peso, generando una aceleración controlada de unos 0.5 a 1 m/s² hacia arriba.\r
\r
El análisis del bloque colgante predice que durante el frenado (al llegar a un piso), la tensión disminuye por debajo del peso para producir aceleración negativa (desceleración controlada). Los ascensores están diseñados para que estas variaciones de tensión nunca excedan los límites seguros del cable, tipicamente con un factor de seguridad de 10 respecto a la carga máxima nominal. Los sistemas de control modernos utilizan sensores de tensión en tiempo real para garantizar que las aceleraciones sean suaves y confortables para los pasajeros.\r
\r
Variable dominante: masa total de la cabina con pasajeros, que determina el peso base que el sistema debe soportar.\r
Límite de validez: el modelo asume cuerda inextensible; en cables muy largos (ascensores en rascacielos extremos) la elasticidad del acero produce oscilaciones que requieren modelos más complejos.\r
\r
## 2. Grúas de construcción\r
\r
Las grúas torre y móviles elevan cargas pesadas en obras de construcción mediante cables de acero de alta resistencia a la tracción. El operario cualificado controla la tensión aplicada mediante el sistema de motor eléctrico y frenos hidráulicos. Cuando la carga cuelga en reposo esperando ser movida, la tensión en el cable iguala exactamente al peso de la carga suspendida. Para elevar la carga, el operario aumenta la tensión mediante el control de velocidad; para descender controladamente, reduce la tensión pero manteniéndola siempre por encima de cero para evitar la caída libre descontrolada.\r
\r
La selección del cable de grúa requiere calcular la tensión máxima esperada según la fórmula de tensión para aceleración dada. Esta fórmula permite dimensionar el cable considerando cuidadosamente la masa máxima de carga prevista y la aceleración máxima de diseño permitida.\r
\r
{{f:tension_aceleracion}}\r
\r
Los cables industriales se dimensionan con factores de seguridad de 3 a 5 respecto a la carga teórica de rotura del material, proporcionando un margen adicional para absorber efectos dinámicos no previstos.\r
\r
Variable dominante: coeficiente de seguridad del cable respecto a la carga máxima de trabajo.\r
Límite de validez: cuando la carga oscila (efecto péndulo), aparecen tensiones adicionales por efecto centrífugo que el modelo simple no captura; se requiere análisis de péndulo forzado.\r
\r
## 3. Paracaidismo y descensos controlados\r
\r
Un paracaidista durante la fase de caída libre antes de abrir el paracaídas está en una condición aproximada de caída libre donde la tensión del arnés es casi nula respecto al peso corporal. Al desplegar el paracaídas, la resistencia del aire genera una fuerza equivalente a la tensión del modelo de bloque colgante, que rápidamente aumenta hasta equilibrar el peso total del sistema, alcanzando así una velocidad terminal constante y segura para el aterrizaje.\r
\r
Durante la apertura del paracaídas, la tensión experimenta un pico transitorio importante que puede alcanzar varias veces el peso del paracaidista. Este «efecto de apertura» debe diseñarse cuidadosamente para no exceder la resistencia máxima del arnés ni del tejido del paracaídas, tipicamente 1500-2000 N para arneses estándar de paracaidismo deportivo. El diseño del paracaídas optimiza la velocidad de apertura para minimizar este pico de tensión mientras garantiza la desaceleración necesaria.\r
\r
Variable dominante: velocidad de apertura del paracaídas, que determina la rapidez del incremento de resistencia del aire.\r
Límite de validez: el modelo vertical puro falla cuando hay viento horizontal significativo, que introduce deriva y componentes de fuerza lateral no modeladas.\r
\r
## 4. Ascensores de carga en minas\r
\r
Los sistemas de elevación en minería subterránea transportan toneladas de mineral extraído y personal de trabajo mediante jaulas robustas suspendidas de cables de acero que pueden alcanzar varios kilómetros de longitud en pozos profundos. La tensión en la parte superior del cable debe vencer no solo el peso de la carga útil sino también el peso propio del cable suspendido, que puede ser comparable o incluso superior al de la carga en profundidades muy grandes.\r
\r
La aceleración controlada es crítica en estos sistemas: una aceleración brusca genera fuerzas dinámicas significativas que pueden superar considerablemente la carga estática calculada. Los sistemas mineros modernos limitan la aceleración a valores inferiores a 0.3 m/s² cuando transportan personal, y hasta 0.6 m/s² para carga mineral solamente, garantizando la seguridad operativa.\r
\r
Variable dominante: profundidad del pozo, que añade peso del propio cable a la tensión total requerida.\r
Límite de validez: la elasticidad del cable de varios kilómetros hace que la dinámica sea de ondas elásticas, no de cuerda rígida; el modelo simple solo es válido para movimientos lentos respecto a la velocidad de propagación de ondas en el cable.\r
\r
## 5. Máquinas de gimnasio (poleas y contrapesos)\r
\r
Las máquinas de musculación de gimnasio como sistemas de poleas y multiestaciones utilizan bloques colgantes con contrapesos calibrados seleccionables por el usuario. Cuando el usuario tira de la manija, debe vencer el peso del contrapeso seleccionado más la fricción del sistema de poleas. La tensión que el usuario debe ejercer depende directamente de la masa del contrapeso seleccionada mediante la clavija de ajuste.\r
\r
El diseño biomecánico de estas máquinas aprovecha que la aceleración producida por una fuerza dada es inversamente proporcional a la masa total del sistema según la segunda ley de Newton en dirección vertical.\r
\r
{{f:dinamica_vertical}}\r
\r
Contrapesos más pesados requieren más fuerza de tracción por parte del usuario pero producen movimientos más estables y menos aceleraciones bruscas durante el ejercicio.\r
\r
Variable dominante: masa del contrapeso seleccionada por el usuario, que determina directamente la tensión de ejercicio requerida.\r
Límite de validez: la fricción en poleas y guías introduce fuerzas de rozamiento significativas que el modelo ideal no incluye; para masas pequeñas la fricción puede representar un 10-20 % de la fuerza total, distorsionando la relación lineal teórica predicha por el modelo simple.\r
`;export{e as default};
