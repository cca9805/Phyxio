const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un interruptor de pared controla un calefactor electrico de [[P]] = 2000 W en una instalacion de [[V]] = 230 V. Tras varios anos de uso, el interruptor presenta la carcasa caliente al tacto. Se mide [[R_on]] = 0,08 ohm con un ohmimetro de resolucion mili-ohm. El interruptor opera [[t_on]] = 6 horas al dia en invierno. Calcular [[I]], [[P_on]] y [[E_on]] diaria, y evaluar el riesgo termico.\r
\r
## Datos\r
\r
La carga tiene una potencia [[P]] en el orden de los kilowatios. La instalacion opera a tension [[V]] nominal europea. La resistencia del contacto [[R_on]] fue medida con instrumento de precision. El tiempo diario de conduccion [[t_on]] es de varias horas. Las magnitudes de resultado son [[P_on]] para el diagnostico de riesgo termico y [[E_on]] para el analisis energetico del periodo.\r
\r
## Definicion del sistema\r
\r
El sistema fisico es el interruptor como elemento resistivo en estado ON. La carga (calefactor) es externa al sistema de analisis: su funcion es fijar [[I]] a traves del interruptor. El modelo aplicado es la ley de Joule localizada en el contacto del interruptor, con resistencia [[R_on]] como parametro de estado del contacto.\r
\r
## Modelo fisico\r
\r
El interruptor real se modela como una resistencia [[R_on]] en serie con la carga. Al conducir [[I]], disipa [[P_on]] proporcional al cuadrado de [[I]] y a [[R_on]]. Durante [[t_on]], la energia total disipada es [[E_on]]. Las tres formulas del leaf describen completamente este comportamiento para carga resistiva en regimen permanente.\r
\r
## Justificacion del modelo\r
\r
Se aplica el modelo resistivo estatico porque la carga es resistiva pura (calefactor), el regimen es permanente y [[R_on]] es constante. Las hipotesis son validas: factor de potencia unitario, regimen permanente, sin transitorios de arranque. El modelo no es aplicable si la carga fuera inductiva o si el interruptor ciclara frecuentemente.\r
\r
## Resolucion simbolica\r
\r
[[I]] del interruptor se obtiene aplicando:\r
\r
{{f:corriente}}\r
\r
[[P_on]] en el contacto se obtiene aplicando:\r
\r
{{f:perdida_on}}\r
\r
[[E_on]] durante la conduccion se obtiene aplicando:\r
\r
{{f:energia_on}}\r
\r
## Sustitucion numerica\r
\r
Sustituyendo los datos del enunciado en las formulas simbolicas: [[I]] es igual a 8,70 A, [[P_on]] es igual a 6,05 W y [[E_on]] es igual a 130680 J equivalente a 36,3 Wh por dia.\r
\r
## Validacion dimensional\r
\r
Las dimensiones son coherentes en todas las formulas del leaf: [[I]] se expresa en amperios, [[P_on]] se expresa en vatios, [[E_on]] se expresa en julios. La dependencia cuadratica de [[P_on]] en [[I]] es correcta dimensionalmente porque el cuadrado de amperios multiplicado por ohmios da vatios.\r
\r
## Interpretacion fisica\r
\r
El valor de [[P_on]] obtenido supera el umbral de riesgo de 5 W establecido para interruptores domesticos. La carcasa caliente al tacto es la senal observable que confirma la disipacion local elevada. La causa fisica es [[R_on]] elevada — el doble del valor tipico de un interruptor nuevo de esta gama. La recomendacion es sustituir el interruptor. La energia acumulada [[E_on]] equivale a varios kWh por temporada de invierno disipados exclusivamente en el contacto del interruptor, energia convertida a calor en el dispositivo de maniobra y no en la carga util. Este ejemplo ilustra un principio general del diagnostico electrico: la carcasa caliente al tacto no indica sobrecarga del circuito (el magnetotermico no actua porque [[I]] esta dentro del calibre), sino degradacion termica local del contacto del interruptor con [[R_on]] excesiva. El diagnostico correcto requiere medir [[R_on]] y calcular [[P_on]], no solo observar si [[I]] esta dentro del nominal.\r
\r
---\r
\r
# Ejemplo de aplicacion real\r
\r
## Contexto\r
\r
Una instalacion domestica tiene un termostato que controla una bomba de calefaccion de [[P]] = 800 W a [[V]] = 230 V. El termostato cicla aproximadamente 8 veces por hora y opera 10 horas al dia. La carga es inductiva. Evaluar el riesgo termico del termostato con [[R_on]] = 0,05 ohm.\r
\r
## Estimacion fisica\r
\r
Aplicando las formulas del leaf: [[I]] = 3,48 A con [[P]] = 800 W y [[V]] = 230 V. Con [[R_on]] = 0,05 ohm, [[P_on]] = 0,61 W — zona de vigilancia, no de riesgo inmediato. Con ciclo de trabajo del 50 por ciento y [[t_on]] correspondiente, [[E_on]] diaria es de aproximadamente 3 Wh. La naturaleza inductiva de la carga implica picos de [[I]] de arranque varias veces superiores al valor nominal durante arranques breves, lo que puede degradar el contacto por arco aunque la [[P_on]] estatica sea baja.\r
\r
## Interpretacion\r
\r
El modelo estatico da como resultado [[P_on]] baja — riesgo termico reducido en regimen permanente. Sin embargo, el numero de maniobras diarias es el factor limitante de la vida util del termostato, no el calentamiento estacionario. La magnitud diagnostica correcta para este caso es el numero acumulado de operaciones, no [[P_on]] ni [[E_on]] estaticas. Este es el limite del modelo estatico: es valido para el diagnostico termico en regimen permanente pero no para predecir la degradacion por arco en cargas inductivas con ciclado frecuente. El modelo extendido, que incluye los picos de [[I]] en arranque y el conteo de maniobras, es necesario para predecir la vida util en este tipo de instalacion. La transicion del modelo estatico al modelo extendido se produce cuando los sintomas de degradacion (aumento de [[R_on]] medida, chispas en la maniobra) no son explicables por el calentamiento estacionario calculado con [[P_on]].\r
`;export{e as default};
