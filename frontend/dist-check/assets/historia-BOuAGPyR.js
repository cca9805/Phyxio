const e=`\uFEFF# Historia del coste eléctrico doméstico\r
\r
## Problema histórico\r
\r
Durante la mayor parte del siglo XX, la factura eléctrica doméstica fue percibida como un dato opaco: un número que llegaba al final del mes sin que el usuario tuviera herramientas para entender de dónde provenía. El [[coste total de la factura|C_total]] se pagaba sin poder distinguir qué parte correspondía al consumo de energía, qué parte era el coste de la [[potencia contratada|P_contratada]] y qué parte eran impuestos y peajes regulatorios. Las subidas de factura se atribuían sistemáticamente a "la compañía" sin analizar si el [[coste de energía|C_energia]] había aumentado por mayor uso, si los [[días del periodo de facturación|dias]] eran más o si había cambiado la estructura de precios.\r
\r
## Dificultad conceptual previa\r
\r
El modelo conceptual dominante era el de un coste proporcional al consumo: más kilovatios-hora significaba más euros, y menos consumo significaba menos gasto. Este modelo ignora completamente el [[coste de potencia|C_potencia]] como término fijo y los [[costes adicionales y peajes|C_extra]] como cargos independientes del uso. Esta visión simplificada llevaba a dos errores estructurales: creer que consumir cero kWh durante un mes produciría una factura de cero euros, y creer que cualquier reducción del consumo se traduciría directamente en una reducción proporcional del [[coste total de la factura|C_total]].\r
\r
## Qué cambió\r
\r
La introducción de la discriminación horaria a finales del siglo XX fue el primer paso conceptual importante: reveló que el [[precio de la energía por franja|precio_i]] no era constante y que el momento del consumo importaba tanto como la cantidad consumida. Desplazar la [[energía por periodo tarifario|E_i]] de hora punta a valle se convirtió en una decisión con impacto económico medible.\r
\r
El cambio estructural llegó con la digitalización de la medida. Los contadores inteligentes (instalados masivamente en España entre 2010 y 2018) permitieron por primera vez leer el consumo en intervalos horarios y asignar a cada kWh el [[precio de la energía por franja|precio_i]] correspondiente al momento exacto en que se consumió. Esto hizo posible calcular el [[coste de energía|C_energia]] con precisión real, no estimada.\r
\r
## Evolución conceptual\r
\r
La transición más importante fue pasar de analizar el [[coste total de la factura|C_total]] como un todo indiferenciado a descomponerlo en sus tres componentes físicamente interpretables. Esta descomposición transformó el análisis doméstico de la factura de una lectura pasiva a una herramienta activa de decisión: ¿qué fracción del [[coste total de la factura|C_total]] puedo controlar con mis hábitos? ¿Cuánto ahorra ajustar la [[potencia contratada|P_contratada]]? ¿Cuándo conviene invertir en eficiencia de equipos frente a cambiar horarios?\r
\r
## Impacto en la física\r
\r
El estudio del [[ahorro porcentual|Ahorro_pct]] en contexto doméstico es un ejemplo de física aplicada con consecuencias económicas directas. La necesidad de comparar periodos equivalentes, controlar variables de confusión (días, temperatura, ocupación) y separar causa de efecto es exactamente el método experimental que se aplica en cualquier laboratorio de física. La factura eléctrica, bien analizada, es un conjunto de datos experimentales que permite verificar o refutar hipótesis sobre el comportamiento energético de una vivienda.\r
\r
## Conexión con física moderna\r
\r
Las aplicaciones de monitorización energética, los mercados horarios de electricidad y los sistemas de gestión activa de la demanda son las herramientas actuales que implementan operativamente estos principios. La física del [[coste de energía|C_energia]] y del [[coste de potencia|C_potencia]] no ha cambiado; lo que ha cambiado es la resolución temporal y la accesibilidad de los datos que permiten calcularlos con precisión.\r
`;export{e as default};
