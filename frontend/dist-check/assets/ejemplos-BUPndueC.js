const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Se estudia precesion giroscopica en un problema donde el dato importante no es solo numerico, sino estructural: hay que decidir si el sistema esta realmente en regimen giroscopico y si el entorno puede resumirse como un torque [[tau]] aproximadamente constante. El objetivo del examen es justificar por que la lectura correcta del montaje es una precesion y no una simple caida rotacional.\r
\r
## Datos\r
\r
Los datos deben fijar unidades, sentido positivo, geometria y posicion del apoyo. En este leaf las magnitudes clave son [[M]], [[d]], [[I]], [[omega]], [[L]], [[tau]], [[Omegap]] y [[Tp]]. Un buen enunciado tambien deja claro si la nutacion es despreciable y si la inclinacion cambia poco durante la observacion.\r
\r
## Definicion del sistema\r
\r
El sistema se define de modo que la rueda o el trompo formen el cuerpo giratorio principal, mientras que el apoyo y la gravedad aparezcan a traves del torque que ejercen. Esa eleccion importa porque el leaf no trata una rotacion cualquiera, sino la reorientacion de un gran momento [[I]] angular [[L]] bajo un torque externo.\r
\r
## Modelo fisico\r
\r
Se adopta el modelo minimo que conserva el mecanismo dominante. La relacion de giro principal conecta [[L]], [[I]] y [[omega]]. El torque gravitatorio se modela con [[M]], [[g]] y [[d]]. La tasa de precesion se interpreta como cociente entre torque y momento angular, y el resultado final se traduce a un periodo [[Tp]] observable.\r
\r
## Justificacion del modelo\r
\r
La justificacion debe explicar por que la aproximacion giroscopica es razonable. En este caso lo es porque el giro principal es lo bastante grande como para que el eje se reoriente lentamente en vez de caer de inmediato, y porque el torque esta dominado por el peso aplicado a una distancia [[d]]. Una buena justificacion tambien debe decir que la nutacion es pequena y no arruina la lectura de [[Omegap]].\r
\r
## Resolucion simbolica\r
\r
La resolucion simbolica sigue una cadena causal. Primero, [[L]] se obtiene a partir de [[I]] y [[omega]]. Despues, el torque gravitatorio se fija con [[M]], [[g]] y [[d]]. Luego la tasa de precesion se expresa como cociente entre [[tau]] y [[L]]. Si el problema es inverso, se despeja el torque admisible para una [[Omegap]] dada. Finalmente, [[Tp]] transforma esa tasa en un tiempo interpretable.\r
\r
## Sustitucion numerica\r
\r
Tomemos una rueda con [[M]] de 2.0 kg, [[d]] de 0.15 m, [[I]] de 0.245 kg*m^2 y [[omega]] de 4*pi rad/s. Entonces el momento angular [[L]] vale 3.08 kg*m^2/s. El torque gravitatorio [[tau]] vale 2.94 N*m. La tasa de precesion [[Omegap]] es 0.955 rad/s y el periodo correspondiente [[Tp]] es 6.6 s.\r
\r
Ahora invirtamos el problema: si el diseño exige que [[Omegap]] no supere 0.50 rad/s, entonces el torque admisible debe bajar a unos 1.54 N*m. Esa lectura inversa suele ser mas util en decisiones de diseño que la lectura directa.\r
\r
## Validacion dimensional\r
\r
La validacion dimensional comprueba que [[L]] quede en kg*m^2/s, que [[tau]] quede en N*m, que [[Omegap]] quede en rad/s y que [[Tp]] quede en segundos. Tambien obliga a revisar si la magnitud del resultado es fisicamente razonable: una rueda grande y rapida no deberia precesar muchas vueltas por segundo bajo un torque gravitatorio moderado.\r
\r
## Interpretacion fisica\r
\r
[[Omegap]] no describe cuan rapido gira la rueda sobre su propio eje, sino cuan rapido el torque dobla ese eje. [[Tp]] expresa la misma idea en una escala temporal visible. La comparacion entre [[tau]] y [[L]] es la clave causal: un torque mayor o un giro principal menor implican precesion mas rapida. Cuando [[omega]] cae por rozamiento, tambien cae [[L]], y entonces el mismo peso consigue desviar mas eje por segundo. Eso significa que la rueda no cambia de orientacion porque "le toque" un numero, sino porque el torque dispone de menos contenido angular que oponerle. Por eso un trompo que se frena precesa cada vez peor y cada vez mas deprisa.\r
\r
# Ejemplo de aplicacion real\r
\r
## Contexto\r
\r
En una situacion real, la precesion giroscopica aparece en ruedas suspendidas, trompos, sensores inerciales y dispositivos de actitud espacial. En todos esos casos la pregunta practica es la misma: el giro principal es suficiente para mantener una respuesta lenta y predecible bajo el torque disponible?\r
\r
## Estimacion fisica\r
\r
Antes de calcular ya puede estimarse que una rueda con [[I]] moderado y [[omega]] visible no deberia precesar varias vueltas por segundo: el gran [[L]] frena el cambio de direccion. Tambien se anticipa que aumentar [[M]] o [[d]] hace crecer [[tau]], mientras que aumentar [[I]] o [[omega]] alarga [[Tp]] porque fortalece el giro principal. Esa estimacion previa mantiene el numero final anclado a una imagen fisica.\r
\r
## Interpretacion\r
\r
En una aplicacion real, la pregunta importante es si conviene reducir el brazo [[d]], aligerar la masa [[M]] o reforzar el giro para bajar [[Omegap]]. Esa decision no toca el numero final por casualidad: actua directamente sobre el cociente entre torque y momento angular que gobierna la precesion. El mismo marco sirve tambien para auditar medidas: si el [[Tp]] observado no cuadra con [[L]] y [[tau]], el fallo suele estar en la estimacion de [[I]], en el origen del torque o en que la rueda ha salido del regimen giroscopico simple.`;export{e as default};
