const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Se estudia definicion de momento [[I]] angular [[L]] en un problema donde el dato importante no es solo numerico, sino estructural: hay que decidir si el sistema relevante es el cuerpo o conjunto de cuerpos cuyo movimiento se estudia y si el entorno puede resumirse como la eleccion del origen, del eje y de las fuerzas capaces de producir torque [[tau]]. El objetivo del examen es justificar por que el momento angular respecto a un origen concreto es la lectura correcta de la escena.\r
\r
## Datos\r
\r
Los datos deben fijar unidades, sentido positivo, geometria y marco de referencia. En este leaf conviene separar tres grupos: las magnitudes lineales [[m]], [[v]] y [[p]]; las magnitudes geometricas [[r]] y [[theta]]; y las magnitudes de rotor [[I]], [[omega]], [[tau]], [[DeltaL]] y [[DeltaT]]. Esa separacion evita mezclar el problema orbital con el problema de cuerpo rigido antes de tiempo.\r
\r
## Definicion del sistema\r
\r
El sistema se define de forma que el origen de referencia quede fijado desde el principio y no cambie a mitad de la resolucion. Esa eleccion debe ser compatible con el diagrama de cuerpo libre, con la geometria del movimiento y con la pregunta central del leaf: que efecto de giro tiene la trayectoria respecto al punto elegido. Si el origen cambia sin declararlo, el resto del ejercicio puede quedar algebraicamente limpio y fisicamente mal interpretado.\r
\r
## Modelo fisico\r
\r
Se adopta el modelo minimo que conserva el mecanismo dominante. En la lectura orbital se usa [[p]] para construir [[L]] a partir de [[r]] y [[theta]], y asi decidir como influye el origen. En la lectura de rotor se usa la relacion entre [[L]], [[I]] y [[omega]]. Si ademas un torque medio [[tau]] actua durante [[DeltaT]], el cambio [[DeltaL]] entra en el modelo como variacion angular acumulada.\r
\r
## Justificacion del modelo\r
\r
La justificacion debe explicar por que el regimen elegido es compatible con la escala del problema y con la precision pedida. Aqui la justificacion es buena cuando distingue tres preguntas fisicas distintas: cuanto movimiento lineal hay ([[p]]), que efecto de giro tiene respecto al origen ([[L]]) y como se leeria ese mismo estado si el sistema fuera un rotor ([[I]] y [[omega]]). Tambien debe decir si el origen permanece fijo, porque un cambio de origen puede modificar [[L]] aunque [[p]] no cambie, y si el posible [[tau]] externo es despreciable o forma parte del planteamiento. Esa ultima decision no es formalismo: decide si el valor final de [[L]] describe una geometria del movimiento o una accion real del entorno sobre el sistema.\r
\r
## Resolucion simbolica\r
\r
La resolucion simbolica sigue una cadena fisica clara. Primero, [[p]] fija el movimiento lineal. Despues, [[L]] convierte ese movimiento en lectura angular alrededor del origen. Si la escena se reescribe como giro de un cuerpo rigido, la relacion entre [[L]], [[I]] y [[omega]] permite despejar la velocidad angular cuando el estado angular ya es conocido. Si el sistema recibe un par medio [[tau]], la relacion temporal conecta [[DeltaL]] con [[DeltaT]] y cuantifica el cambio finito del estado angular.\r
\r
## Sustitucion numerica\r
\r
Tomemos una particula con [[m]] igual a 0.50 kg, [[v]] igual a 6.0 m/s, [[r]] igual a 0.40 m y [[theta]] igual a 90 deg. El momento lineal [[p]] vale 3.0 kg*m/s. Aplicando la definicion de momento angular, el valor respecto al origen elegido es 1.2 kg*m^2/s. Si ese mismo estado se interpreta como un disco con [[I]] de 0.12 kg*m^2, la relacion de rotor exige [[omega]] igual a 10 rad/s.\r
\r
Supongamos ahora que actua un torque medio [[tau]] de 0.60 N*m durante [[DeltaT]] igual a 0.50 s. Entonces la variacion [[DeltaL]] es 0.30 kg*m^2/s. El nuevo estado angular ya no coincide con el inicial, y la interpretacion debe decidir si eso representa una accion externa real o un simple cambio de lectura del problema.\r
\r
## Validacion dimensional\r
\r
La validacion dimensional comprueba que [[p]] quede en kg*m/s, que [[L]] y [[DeltaL]] queden en kg*m^2/s, que [[tau]] quede en N*m y que [[omega]] quede en rad/s. Tambien comprueba algo mas importante: que la comparacion entre lectura orbital y lectura de rotor siga siendo fisicamente coherente. Un resultado con unidades correctas puede seguir siendo malo si el origen o el angulo [[theta]] se han elegido sin criterio.\r
\r
## Interpretacion fisica\r
\r
La lectura final debe decir que significa cada magnitud en el sistema. [[p]] por si solo no decide el efecto de giro. La magnitud que resume el estado angular alrededor del origen es [[L]], y su valor crece o disminuye segun el brazo perpendicular efectivo: si la trayectoria pasa mas lejos del origen, el mismo [[p]] produce mas capacidad de giro. Cuando el problema se traduce a un rotor, [[I]] y [[omega]] muestran que dos discos con la misma velocidad angular [[omega]] pueden tener distinto [[L]] porque almacenan distinta resistencia a reorientarse. Si aparece un [[tau]] durante [[DeltaT]], el [[DeltaL]] resultante deja de ser un numero decorativo y se convierte en evidencia de que el entorno ha modificado el estado angular.\r
\r
# Ejemplo de aplicacion real\r
\r
## Contexto\r
\r
En una situacion real, la definicion de momento angular aparece junto a incertidumbres de medida, geometria imperfecta y camaras que no siempre respetan bien la perspectiva. Un video de una pelota que pasa cerca de un poste, o un rotor grabado desde un punto descentrado, muestran enseguida que la dificultad principal suele ser geometrica antes que algebraica.\r
\r
## Estimacion fisica\r
\r
Antes de calcular ya puede preverse que una escena con gran brazo y trayectoria casi perpendicular producira mas [[L]] que otra con el mismo [[p]] pero peor geometria. En un banco con rotor la intuicion cambia: si [[I]] es pequeno, un [[DeltaL]] moderado produce una variacion visible de [[omega]]; si [[I]] es grande, la misma accion apenas altera el giro. Esa estimacion previa es lo que hace que la solucion numerica tenga una referencia fisica y no sea solo una cifra.\r
\r
## Interpretacion\r
\r
En una aplicacion real, la pregunta importante es si conviene comparar origenes, revisar el brazo efectivo o estimar que [[tau]] hace falta para obtener un [[DeltaL]] deseado. El valor del leaf no esta en repetir un producto vectorial, sino en saber cuando [[L]] es la lectura correcta, cuando conviene pasar a la lectura de rotor y cuando un [[tau]] sobre [[DeltaT]] obliga a reconocer un cambio angular autentico.`;export{e as default};
