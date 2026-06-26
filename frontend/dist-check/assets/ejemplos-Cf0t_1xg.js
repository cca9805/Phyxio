const e=`\uFEFF# Ejemplo tipo examen\r
\r
## Enunciado\r
Un disco de laboratorio gira inicialmente a alta velocidad y se frena mediante una zapata que actua a un radio efectivo [[R]] conocido. El enunciado entrega el momento de inercia [[I]] del disco, la fuerza normal [[N_normal]] de contacto y el coeficiente de rozamiento cinetico [[mu_k]] de la zapata. Tambien pide estimar la evolucion de la velocidad angular [[omega]] en una ventana corta y verificar si la perdida de energia es coherente con frenado pasivo.\r
\r
No se acepta una solucion puramente algebraica. La respuesta debe justificar por que el modelo seco es razonable en la primera ventana, indicar el papel de R y [[mu_k]] en el torque disipativo y usar la formula de energia rotacional como control final de coherencia.\r
\r
## Datos\r
Datos del problema: momento de inercia de 0.38 kg*m^2, velocidad angular inicial [[omega0]] de 95 rad/s, fuerza normal de 85 N, coeficiente [[mu_k]] de 0.38, radio efectivo de 0.20 m y ventana temporal de 2.5 s. El eje se mantiene fijo y no existe motor actuando durante la maniobra.\r
\r
El convenio de signos es el habitual: [[omega]] positiva en el sentido de giro elegido y [[tau_roz]] [[tau_roz]] negativa si se opone al movimiento. Bajo ese convenio, una [[alpha]] negativa representa desaceleracion angular.\r
\r
## Definicion del sistema\r
El sistema se define como un rotor rigido con inercia conocida y una zapata de frenado cuyo contacto actua a radio efectivo R. El entorno solo aporta el apoyo del eje y el mecanismo de contacto. La variable observada principal es [[omega]], mientras que [[alpha]] y [[K_rot]] [[K_rot]] se usan para diagnostico dinamico y energetico.\r
\r
La razon para explicitar el sistema es que el modelo solo tiene sentido si el brazo mecanico del contacto esta bien identificado. Si R cambiara de forma apreciable o si el contacto estuviera distribuido de manera no controlada, el modelo de torque de Coulomb usado aqui dejaria de ser una aproximacion limpia.\r
\r
## Modelo fisico\r
El modelo principal combina dinamica rotacional con modelo de torque de Coulomb. Primero se calcula el torque disipativo seco mediante\r
\r
{{f:dinamica_rotacional}}\r
\r
y despues se obtiene la aceleracion angular [[alpha]] con\r
\r
{{f:energia_rotacional}}\r
\r
Para el control energetico se usa formula de energia rotacional:\r
\r
{{f:energia_rotacional}}\r
\r
## Justificacion del modelo\r
El modelo seco se justifica porque el enunciado entrega justamente [[mu_k]], [[N_normal]] y R, que son las magnitudes propias de modelo de torque de Coulomb. Ademas, la ventana temporal es corta y el objetivo es una estimacion local del frenado. No hace falta introducir ley de decaimiento exponencial en este primer ejercicio porque no se esta modelando un termino viscoso dominante.\r
\r
Tambien existe un control interno muy claro. Si el producto [[mu_k]] [[N_normal]] R produce un torque grande pero [[K_rot]] no disminuye, la solucion estaria contradiciendo el propio significado fisico del rozamiento. Por eso formula de energia rotacional no es un extra: es la comprobacion de que el modelo y el signo del torque cuentan la misma historia.\r
\r
## Resolucion simbolica\r
Paso 1. Calcular el torque disipativo con modelo de torque de Coulomb:\r
\r
{{f:dinamica_rotacional}}\r
\r
Paso 2. Sustituir ese torque en dinamica rotacional:\r
\r
{{f:dinamica_rotacional}}\r
\r
Paso 3. Estimar la velocidad angular final en la ventana corta con la aproximacion local\r
\r
{{f:energia_rotacional}}\r
\r
Paso 4. Calcular formula de energia rotacional al inicio y al final:\r
\r
{{f:energia_rotacional}}\r
\r
Paso 5. Comparar signos y tendencia. Si el sistema frena pasivamente, [[omega]] debe bajar y [[K_rot]] tambien.\r
\r
Como contraste de resolucion, si el tramo no fuese seco sino viscoso, la formula de partida seria modelo de torque viscoso,\r
\r
{{f:torque_viscoso}}\r
\r
y entonces la evolucion temporal de [[omega]] dejaria de ser lineal y deberia compararse con ley de decaimiento exponencial.\r
\r
## Sustitucion numerica\r
Con los datos dados, el torque seco vale\r
\r
{{f:torque_coulomb}}\r
\r
Luego,\r
\r
{{f:energia_rotacional}}\r
\r
La velocidad angular estimada al final de la ventana es\r
\r
{{f:energia_rotacional}}\r
\r
La formula de energia rotacional inicial resulta\r
\r
{{f:energia_rotacional}}\r
\r
y la final\r
\r
{{f:energia_rotacional}}\r
\r
## Validacion dimensional\r
En modelo de torque de Coulomb, [[mu_k]] es adimensional, [[N_normal]] aporta N y R aporta m, de modo que el resultado tiene unidades de N*m. En dinamica rotacional, dividir N*m por kg*m^2 produce rad/s^2, compatible con [[alpha]]. En formula de energia rotacional, I por [[omega]] cuadrado produce joule.\r
\r
Esta revision dimensional no es un formalismo vacio. Si un estudiante olvidara R o usara [[omega]] en rpm en formula de energia rotacional, la cuenta podria seguir "pareciendo ordenada", pero el valor ya no representaria el frenado real del sistema.\r
\r
## Interpretacion fisica\r
El resultado describe un frenado fuerte y claramente consistente con un contacto seco apreciable. La presencia explicita de R y [[mu_k]] muestra que el modelo depende tanto del material como de la geometria del freno. La caida de [[omega]] y la gran disminucion de [[K_rot]] cuentan una historia fisica coherente: la zapata extrae energia mecanica del rotor a traves de un torque opuesto al giro.\r
\r
La conclusion debe seguir siendo local. Si la temperatura cambia o el material se degrada, [[mu_k]] podria variar y el mismo modelo de torque de Coulomb dejaria de representar bien el proceso en una ventana mas larga. Pero para el intervalo dado, el modelo esta bien anclado al leaf.\r
\r
# Ejemplo de aplicacion real\r
\r
## Contexto\r
En una linea de empaquetado, un rodillo motriz presenta una parada anomala. El registro de [[omega]] muestra una caida rapida al comienzo y otra mas lenta en la zona media. El equipo de mantenimiento sospecha que parte del rozamiento viene del lubricante degradado y parte de un sello que ya roza cerca del borde del eje.\r
\r
Se dispone de una estimacion geometrica del contacto seco potencial con un radio efectivo cercano a 0.045 m y de un rango plausible para [[mu_k]] entre 0.18 y 0.30 si el sello estuviera realmente arrastrando. Ademas, se registro la evolucion temporal de [[omega]], lo que permite comparar el modelo seco con modelo de torque de Coulomb y el modelo viscoso basado en modelo de torque viscoso y ley de decaimiento exponencial.\r
\r
## Estimacion fisica\r
En un tramo de alta velocidad, [[omega]] cae de 140 rad/s a 90 rad/s en 3 s con una inercia efectiva de 0.62 kg*m^2. La aceleracion angular media es aproximadamente\r
\r
{{f:torque_viscoso}}\r
\r
lo que implica un torque neto medio cercano a\r
\r
{{f:torque_coulomb}}\r
\r
Si se intentara explicar todo ese frenado con un contacto seco en R de 0.045 m y con una carga normal del orden de 900 N, el valor requerido de [[mu_k]] quedaria alrededor de\r
\r
{{f:torque_viscoso}}\r
\r
Ese valor no es imposible, pero exige un contacto sostenido bastante fuerte. En paralelo, la resolucion alternativa del tramo de alta velocidad usa modelo de torque viscoso, es decir, la ley\r
\r
{{f:torque_viscoso}}\r
\r
, y da un coeficiente [[b_rot]] [[b_rot]] del orden de 0.07 N*m*s con una forma temporal compatible con ley de decaimiento exponencial. Esa doble lectura ya sugiere que la explicacion no debe cerrarse demasiado pronto.\r
\r
## Interpretacion\r
La lectura mas robusta es mixta. En la zona de alta velocidad, la forma de [[omega]] y el ajuste de ley de decaimiento exponencial apoyan una contribucion viscosa importante. Cerca de la parada, aparece un residuo sistematico que el modelo viscoso no absorbe bien y que si es compatible con un aporte seco adicional. En terminos tecnicos: el sistema no parece regirse por un unico mecanismo en toda la maniobra.\r
\r
La recomendacion operativa es escalonada. Primero, renovar lubricante y repetir el ensayo para comprobar si disminuye [[b_rot]]. Segundo, inspeccionar el sello y su radio efectivo R para verificar si existe arrastre seco con [[mu_k]] dentro del rango plausible. Tercero, mantener el control de formula de energia rotacional en cada ventana porque un modelo aceptable debe seguir mostrando perdida energetica coherente con frenado pasivo.\r
\r
Este ejemplo es importante porque conecta calculo y decision. La magnitud [[omega]] actua como huella temporal del problema, R y [[mu_k]] permiten acotar la plausibilidad del contacto seco, y formula de energia rotacional cierra la coherencia del diagnostico. Esa integracion es justamente lo que valida este leaf como "ejemplos aplicados" y no solo como una lista de cuentas.\r
\r
`;export{e as default};
