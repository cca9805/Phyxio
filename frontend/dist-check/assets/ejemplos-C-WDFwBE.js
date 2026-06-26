const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Una nave de masa [[m]] cambia de orbita circular alrededor de una fuente de masa [[M]]. El proceso se analiza por estados energeticos, no por integracion temporal detallada. Se pide calcular la variacion de energia potencial [[DeltaU]], interpretar el signo de [[Wg]] y decidir si la variacion de [[K]] es coherente con conservacion mecanica ideal. El problema exige justificar modelo, no solo sustituir datos.\r
\r
## Datos\r
\r
Se conocen [[G]], [[M]], [[m]], [[ri]] y [[rf]]. Se define que [[rf]] es mayor que [[ri]], por lo tanto el proceso corresponde a alejamiento radial. Se asume referencia energetica en infinito y ausencia de disipacion. Tambien se informa que el cambio radial no es pequeno frente al radio de la fuente, de modo que la aproximacion local no es la opcion principal para este caso.\r
\r
## Definicion del sistema\r
\r
Sistema fisico: masa fuente [[M]] y nave de prueba [[m]] en campo central. Estado inicial: radio [[ri]], energia [[Ui]] y componente cinetica asociada. Estado final: radio [[rf]], energia [[Uf]] y componente cinetica final. Magnitudes de interes para cierre: [[DeltaU]], [[DeltaK]], [[E]] y [[Wg]]. Se trabaja en SI para que la lectura de joule sea directamente interpretable.\r
\r
## Modelo fisico\r
\r
El modelo seleccionado es gravitacion central conservativa con simetria esferica efectiva. Se usa energia de configuracion para comparar estados. La variable radial [[r]] gobierna la dependencia principal de [[U]]. Este marco es suficiente porque el problema solicita transferencia entre dos radios y no perturbaciones multipolares ni disipacion. La aproximacion local con [[h]] y [[g]] se considera solo como chequeo de orden en un apartado secundario.\r
\r
## Justificacion del modelo\r
\r
El modelo general es fisicamente explicito porque la escala radial del proceso no permite linealizacion local robusta. Ademas, la pregunta central del examen es interpretar cambio energetico entre estados orbitales, y eso se expresa de forma directa con [[ri]] y [[rf]]. El criterio conservativo es razonable porque no se reportan motores activos ni rozamiento significativo durante la transicion idealizada. Por tanto, el conjunto de relaciones energeticas del leaf es pertinente y suficiente.\r
\r
## Resolucion simbolica\r
\r
Primero se establece la energia potencial de estado:\r
\r
{{f:energia_potencial_general}}\r
\r
Luego se calcula la variacion entre estado inicial y final:\r
\r
{{f:cambio_energia_potencial}}\r
\r
Para enlazar con dinamica energetica se usa:\r
\r
{{f:conservacion_energia}}\r
\r
Y la relacion de trabajo gravitatorio:\r
\r
{{f:trabajo_gravitatorio}}\r
\r
Como cierre de consistencia global del estado se recuerda:\r
\r
{{f:energia_mecanica}}\r
\r
Y para clasificar el estado energetico global se incorpora el criterio:\r
\r
{{f:condicion_ligadura_conceptual}}\r
\r
## Sustitucion numerica\r
\r
Se sustituyen datos de [[G]], [[M]], [[m]], [[ri]] y [[rf]] en la formula de [[DeltaU]]. El resultado entrega un valor positivo de [[DeltaU]], coherente con movimiento hacia radio mayor. Con ese valor se deduce [[DeltaK]] negativa por conservacion y [[Wg]] negativa por la relacion de trabajo. La sustitucion confirma que el sistema requiere aporte externo para subir de nivel energetico, aunque en este esquema ideal se represente como transicion entre estados en vez de detalle de propulsion.\r
\r
## Validacion dimensional\r
\r
Las magnitudes de entrada se expresan en SI. La salida de [[DeltaU]], [[DeltaK]], [[E]] y [[Wg]] debe quedar en joule. Si aparece una unidad no energetica, el error suele estar en conversion de radios o en mezcla de unidades de masa. Tambien se verifica coherencia de signos: para un ascenso radial ideal, [[DeltaU]] y [[Wg]] no pueden tener el mismo signo. Este control evita cierres numericos falsamente correctos.\r
\r
## Interpretacion fisica\r
\r
El resultado no se limita a un numero. Un [[DeltaU]] positivo indica que el sistema final esta menos ligado gravitatoriamente que el inicial. Como consecuencia, en marco conservativo, [[DeltaK]] debe disminuir y la nave no puede ganar velocidad orbital sin aporte de energia mecanica adicional externa. El signo de [[Wg]] confirma que la gravedad no esta entregando energia en este tramo, sino oponiendose al alejamiento radial. Esta lectura causal conecta configuracion, trabajo y movimiento.\r
\r
# Ejemplo de aplicacion real\r
\r
## Contexto\r
\r
En una mision de observacion terrestre, un satelite pequeno debe cambiar de altitud para optimizar cobertura. El equipo de control necesita estimar rapidamente el impacto energetico de la maniobra y decidir si la reserva de combustible alcanza para completar la transicion. El analisis preliminar combina modelo general para la decision principal y aproximacion local para una estimacion de respaldo en tramos cortos.\r
\r
## Estimacion fisica\r
\r
La estimacion principal usa radios absolutos [[ri]] y [[rf]] para obtener [[DeltaU]]. En paralelo, para un subtramo corto de ajuste final se evalua la forma local:\r
\r
{{f:aproximacion_superficial}}\r
\r
La comparacion de orden entre ambos resultados permite verificar si la parte local es coherente o si se desvia demasiado del modelo radial completo. En este caso, el equipo encuentra que el tramo grande requiere formula general, mientras el tramo de ajuste fino queda dentro del rango local. Esa lectura cuantitativa ahorra tiempo de simulacion inicial y reduce riesgo de subestimar demanda energetica.\r
\r
## Interpretacion\r
\r
La conclusion operativa es clara. La maniobra completa eleva [[U]], por lo que exige energia util de propulsion. En el tramo corto, la aproximacion local reproduce orden correcto, pero no reemplaza la evaluacion radial global. La combinacion de ambos enfoques entrega una decision robusta: presupuesto energetico, margen de seguridad y secuencia de ejecucion. Esta interpretacion no solo responde cuanto cambia [[DeltaU]], tambien explica por que ese cambio impacta directamente viabilidad de mision, ritmo de maniobra y balance final de [[E]].`;export{e as default};
