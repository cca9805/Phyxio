const e=`# Aplicaciones de la Formulación de Kelvin-Planck\r
\r
## 1. Centrales térmicas de vapor\r
\r
Las centrales de vapor son la aplicación clasica del enunciado de Kelvin-Planck. El combustible calienta agua, el vapor mueve una turbina y el condensador rechaza [[Q_C]] hacia un foco frio. El objetivo de diseno es aumentar [[W]] y [[eta]], pero nunca eliminar por completo el rechazo térmico.\r
\r
Variable dominante: [[eta]] comparada con [[eta_carnot]], porque esa comparacion separa mejora tecnica de imposibilidad física.\r
\r
Limite de validez: Si se analizan arranques, paradas o cambios rápidos de carga, el modelo ciclico estacionario debe sustituirse por un modelo transitorio de planta.\r
\r
En la práctica, esta aplicación obliga a mirar el condensador como parte central del rendimiento. Una central que parece perder mucho calor al ambiente no necesariamente esta mal planteada: una parte del rechazo viene impuesta por la segunda ley. La mejora razonable consiste en elevar temperaturas de vapor, reducir irreversibilidades y aprovechar calor residual, no en prometer que [[Q_C]] desaparecera.\r
\r
## 2. Motores de combustión interna\r
\r
En motores de gasolina o diesel, parte del calor liberado por el combustible se transforma en trabajo mecánico y otra parte sale por gases de escape, refrigeración y radiacion. Aunque el [[ciclo]] real no sea exactamente reversible, Kelvin-Planck explica por que no puede existir un motor que convierta toda la energía térmica del combustible en trabajo de eje.\r
\r
Variable dominante: [[Q_H]] disponible por [[ciclo]] y fraccion convertida en [[W]] útil.\r
\r
Limite de validez: El modelo simple no incluye combustión finita, perdidas por bombeo, mezcla, friccion ni restricciones de materiales; para rendimiento real se necesita un modelo de [[ciclo]] Otto o Diesel.\r
\r
La lectura de Kelvin-Planck evita comparar el motor con un ideal imposible. En ciudad, gran parte del calor termina en el radiador y el escape; en carretera, el punto de operación mejora, pero sigue existiendo rechazo térmico. Por eso una mejora de rendimiento del 5 por ciento puede ser muy relevante aunque el motor continue lejos de conversion total.\r
\r
## 3. Turbinas de gas y motores aeronauticos\r
\r
Las turbinas de gas operan con temperaturas altas para elevar el limite de rendimiento. Aumentar [[T_H]] mejora [[eta_carnot]], pero materiales, refrigeración de alabes y emisiones limitan el incremento. Kelvin-Planck sigue marcando que parte de la energía debe salir como calor residual en el chorro o en gases de escape.\r
\r
Variable dominante: [[T_H]], porque determina el techo termodinámico junto con [[T_C]].\r
\r
Limite de validez: En propulsion, no todo se evalua como trabajo de eje; aparece energía cinética del chorro, por lo que el balance debe adaptarse al sistema elegido.\r
\r
La formulacion también ayuda a distinguir eficiencia térmica de eficiencia propulsiva. Un turborreactor puede producir empuje eficaz sin convertir todo el calor en trabajo de eje. El análisis correcto define el sistema, identifica [[Q_H]] y separa calor residual, energía cinética y trabajo útil segun el objetivo tecnico.\r
\r
## 4. Recuperacion de calor industrial\r
\r
En hornos, refinerias y procesos quimicos, el calor residual tiene valor, pero no todo puede convertirse en electricidad. La temperatura del residuo determina la fraccion máxima recuperable como trabajo. Kelvin-Planck evita estimaciones irreales que tratan todo calor residual como energía electrica disponible.\r
\r
Variable dominante: [[T_C]] efectiva del sumidero y temperatura de la fuente residual.\r
\r
Limite de validez: Si las fuentes tienen temperatura variable, se requiere análisis de exergia o integración térmica, no solo una eficiencia media.\r
\r
Esta aplicación es importante en auditorías energeticas. Dos corrientes con la misma energía térmica pueden tener valor distinto si sus temperaturas son diferentes. Kelvin-Planck anticipa esa idea: el calor a baja temperatura tiene menor capacidad de convertirse en trabajo, aunque su cantidad energética sea grande.\r
\r
## 5. Evaluacion de propuestas de energía libre\r
\r
Muchas propuestas pseudotecnicas prometen extraer calor del ambiente y convertirlo integramente en trabajo continuo. Kelvin-Planck ofrece una prueba rápida: si el dispositivo es ciclico, usa un solo foco y no presenta otro efecto compensador, viola la segunda ley.\r
\r
Variable dominante: [[ciclo]], porque la condición de repeticion indefinida impide ocultar cambios de estado o consumo de reservas internas.\r
\r
Limite de validez: Si el dispositivo consume energía quimica, electrica o cambia internamente, ya no es una maquina de un único foco; debe analizarse con el balance completo correspondiente.\r
\r
La prueba no requiere conocer todos los detalles internos. Basta preguntar si al final de cada vuelta el dispositivo queda igual, si solo toma calor ambiental y si entrega trabajo neto. Si las tres respuestas son afirmativas, la propuesta contradice Kelvin-Planck. Si alguna no lo es, entonces debe declararse la fuente real de energía o el cambio interno acumulado.\r
\r
En docencia y divulgacion, esta aplicación es especialmente útil porque convierte una afirmacion espectacular en una lista verificable de condiciones. La energía libre suele esconder un deposito, una bateria, una reaccion quimica o un enfriamiento no declarado. Kelvin-Planck obliga a explicitar ese coste antes de aceptar el dispositivo.\r
`;export{e as default};
