const e=`# Tubo de Pitot - Ejemplos guiados\r
\r
En este leaf aparecen dos formulas nucleares que conviene usar en cadena. La primera organiza la lectura de presiones y la segunda convierte esa lectura en rapidez. Los ejemplos muestran precisamente ese paso: primero leer bien la diferencia de presion y despues interpretar la velocidad que esa diferencia representa.\r
\r
# Ejemplo tipo examen\r
\r
## Enunciado\r
Una sonda pitot-estatica instalada en un avion ligero registra una presion frontal de 101770 Pa y una presion estatica de 101325 Pa. La densidad del aire en el punto de vuelo puede tomarse como 1,225 kg/m3. Se pide calcular la velocidad indicada del avion en m/s y en km/h, y justificar si el modelo incompresible del leaf es razonable.\r
\r
## Datos\r
- Presion de estancamiento: 101770 Pa\r
- Presion estatica: 101325 Pa\r
- Densidad del aire: 1,225 kg/m3\r
\r
## Definicion del sistema\r
Tomamos como sistema la linea de corriente que llega a la sonda. La magnitud objetivo es la rapidez del aire relativa al avion, pero el instrumento no la mide de forma directa. Lo que mide son dos presiones: una frontal, asociada al estancamiento, y una lateral, asociada al flujo sin frenado frontal.\r
\r
## Modelo fisico\r
El modelo del leaf usa primero la relacion de diferencia de presion a partir de las dos lecturas del instrumento, y despues la relacion de velocidad para convertir esa diferencia en rapidez:\r
\r
{{f:delta_pitot}}\r
\r
{{f:velocidad_pitot}}\r
\r
## Justificacion del modelo\r
La justificacion fisica es clara. Estamos en un caso de avion ligero con una lectura de presiones moderada, asi que la velocidad esperada es muy inferior a los regimenes donde la compresibilidad del aire domina. Ademas, el problema no describe ondas de choque ni maniobras extremas, sino una lectura normal de una sonda bien alineada. Por eso el modelo incompresible del leaf es la primera herramienta correcta.\r
\r
## Resolucion simbolica\r
Primero construimos la diferencia de presion con la relacion entre [[p_t]] y [[p]].\r
\r
Luego aplicamos la relacion de velocidad con [[dp]] y [[rho]].\r
\r
Combinando ambos pasos, la velocidad queda determinada por la diferencia entre presión total y presión estática.\r
\r
## Sustitucion numerica\r
Calculamos primero la diferencia: [[dp]] = 445 Pa.\r
\r
Ahora la velocidad estimada con [[dp]] y [[rho]]: [[v]] ≈ 26,95 m/s.\r
\r
Convertimos a kilometros por hora: [[v]] ≈ 97,0 km/h.\r
\r
## Validacion dimensional\r
\r
La division de presion entre densidad produce unidades equivalentes a m^2/s^2. Al aplicar la raiz cuadrada, el resultado queda en m/s, asi que el despeje es dimensionalmente coherente.\r
\r
## Interpretacion fisica\r
La lectura no dice solo que el avion va a unos 97 km/h. Dice algo mas interesante: el aire que llega a la sonda trae suficiente energia cinetica como para producir una sobrepresion frontal de 445 Pa cuando se frena en la punta. Esa sobrepresion es la firma mecanica del movimiento relativo entre el avion y el aire.\r
\r
Tambien conviene leer la escala del resultado. No estamos ante una velocidad extrema, sino ante una rapidez moderada compatible con un avion ligero. Eso refuerza la idea de que el modelo incompresible es adecuado. Si el resultado hubiera sido del orden de cientos de metros por segundo, la cuenta seguiria siendo algebraicamente posible, pero la interpretacion fisica cambiaria y habria que revisar compresibilidad.\r
\r
La leccion del ejemplo es que el Pitot no mide "aire rapido" como una etiqueta vaga. Mide la diferencia de presion creada por el estancamiento y a partir de ella reconstruye la rapidez. La velocidad sale de una lectura energetica, no de una observacion geometrica.\r
\r
Eso significa que cualquier cambio fisico en la energia del flujo cambia antes la presion que la lectura de velocidad. Si el avion acelerara, la sobrepresion frontal creceria; si el aire fuera menos denso por altitud, la misma diferencia de presion corresponderia a otra rapidez. Leer bien el resultado exige entender esa cadena causal: movimiento del aire, estancamiento parcial, salto de presion y solo despues velocidad inferida.\r
\r
---\r
\r
# Ejemplo de aplicacion real\r
\r
## Contexto\r
En un conducto de ventilacion industrial se inserta una sonda de Pitot conectada a un manometro diferencial de agua. El conducto tiene un area de 0,1257 m2. El manometro muestra una altura de 32 mm de agua. El aire del conducto puede tomarse con densidad 1,20 kg/m3. Se pide estimar la diferencia de presion, la velocidad del aire y el caudal volumetrico.\r
\r
## Estimacion fisica\r
Aqui la lectura no llega como diferencia de presion directa, sino como altura manometrica. Por tanto, el primer paso cuantitativo es reconstruir [[dp]] antes de aplicar la relacion de velocidad.\r
\r
La diferencia de presion equivalente se obtiene con la relacion hidrostatica y da aproximadamente [[dp]] = 313,9 Pa.\r
\r
Con esa diferencia, usamos la formula del leaf:\r
\r
{{f:velocidad_pitot}}\r
\r
Con esa diferencia, la velocidad estimada es [[v]] ≈ 22,9 m/s.\r
\r
Y el caudal volumetrico estimado es Q ≈ 2,88 m^3/s.\r
\r
Esta estimacion ya permite leer el orden de magnitud del sistema: una columna de agua bastante pequena basta para representar un flujo de aire rapido y energicamente relevante en el interior del conducto.\r
\r
## Interpretacion\r
La interpretacion fisica no debe quedarse en el numero final del caudal. El punto importante es que una pequena altura de agua en el manometro representa una diferencia de presion suficiente para corresponder a un aire moviendose a decenas de metros por segundo. Eso ocurre porque el agua del manometro es mucho mas densa que el aire del conducto y convierte una lectura corta en una diferencia de presion perfectamente medible.\r
\r
Tambien es importante no mezclar densidades. La densidad del agua sirve para transformar la altura en diferencia de presion. La densidad del aire sirve para transformar esa diferencia de presion en velocidad. Si se confundieran ambas, la velocidad quedaria gravemente mal interpretada. Este es precisamente uno de los errores mas tipicos que el leaf intenta prevenir.\r
\r
Desde el punto de vista ingenieril, el resultado muestra que el Pitot no es solo un instrumento de avionica. Es tambien una herramienta robusta para auditoria de flujos industriales: a partir de una lectura de presion bien interpretada puede obtenerse una primera estimacion del caudal con muy poca instrumentacion.\r
\r
La lectura fisica profunda es esta: el Pitot no mide directamente cuanto aire atraviesa el conducto, sino cuanta energia cinetica por unidad de volumen trae ese aire cuando llega a la sonda. Esa energia se manifiesta como una diferencia de presion y, solo despues, se traduce en velocidad y en caudal. Por eso una lectura de presion aparentemente modesta puede tener consecuencias operativas grandes en ventilacion, consumo energetico y balance de planta.\r
\r
Ademas, el signo y la escala del resultado importan tanto como el numero final. Si la diferencia de presion fuese casi nula, la conclusion fisica seria que el flujo local es debil. Si apareciera un signo incoherente, no habria que "forzar" la raiz cuadrada, sino revisar el montaje, la conexion del manometro o la orientacion de la sonda. Esa lectura causal es lo que convierte un dato de presion en diagnostico real de flujo.`;export{e as default};
