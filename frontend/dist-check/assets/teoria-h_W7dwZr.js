const e=`# Teoria\r
\r
## Contexto conceptual\r
Los problemas con ligaduras aparecen cuando varias partes de un sistema no pueden moverse de manera independiente. Una cuerda ideal, una varilla rigida o un contacto geometrico imponen relaciones de movimiento que reducen los grados de libertad. En una maquina de Atwood ideal, las dos masas [[m1]] y [[m2]] quedan conectadas por una cuerda inextensible que pasa por una polea ideal. Esa restriccion obliga a que ambas compartan el mismo modulo de aceleracion [[a]], aunque sus sentidos sean opuestos segun el eje elegido. El valor de [[T]] no se decide desde fuera como una entrada libre: emerge para que el sistema cumpla simultaneamente la dinamica de cada masa y la condicion de ligadura. Esta idea es central para evitar un error habitual: resolver cada bloque como si estuviera aislado, ignorando el acoplamiento.\r
\r
La potencia del enfoque por ligaduras esta en que traduce un problema aparentemente complejo en una estructura ordenada. Primero se fija una convencion de signos coherente con el movimiento esperado. Luego se escriben ecuaciones dinamicas para cada cuerpo usando las mismas magnitudes compartidas, en particular [[a]] y [[T]]. Finalmente se usa la propia restriccion cinemática para cerrar el sistema sin introducir grados de libertad ficticios. Con ese procedimiento, la lectura fisica no se limita a obtener un numero: permite entender como el desbalance entre [[m1]] y [[m2]] define la rapidez del cambio, y como [[g]] solo escala ese efecto. Cuando las masas casi se igualan, la respuesta comun se vuelve pequena; cuando el contraste aumenta, el sistema se acerca a una aceleracion de orden gravitatorio.\r
\r
## 🟢 Nivel esencial\r
En nivel esencial conviene pensar en una pregunta unica: que impide que cada masa haga lo que quiera por separado. La respuesta es la ligadura. Si la cuerda no se estira y la polea ideal solo redirige fuerza, entonces la geometria del conjunto obliga a que ambas masas compartan un movimiento coordinado. Esa coordinacion se expresa en una sola aceleracion comun y en una sola fuerza interna de transmision. No hace falta memorizar una lista grande de casos: basta con reconocer tres ideas. Primera, la diferencia entre [[m1]] y [[m2]] crea asimetria dinamica. Segunda, [[g]] fija la escala de fuerzas externas. Tercera, la cuerda transforma esa asimetria en una respuesta comun compatible para ambos lados.\r
\r
Tambien es importante separar causa y efecto. Las masas y la gravedad actuan como parametros del escenario; la aceleracion y la tension son consecuencias del acoplamiento. Si se confunden esos papeles, aparecen interpretaciones erroneas como suponer que la tension es igual al peso de una masa en cualquier situacion. En realidad, la fuerza interna depende de todo el sistema. Un cambio en [[m1]] altera no solo su propio balance, sino tambien el de [[m2]], porque ambas partes estan ligadas. Esta mirada sistémica es la que distingue resolver una receta algebraica de comprender un modelo fisico.\r
\r
## 🔵 Nivel formal\r
La derivacion formal parte de aplicar la segunda ley de Newton en cada masa con una convencion de signos consistente. El paso clave no es escribir muchas ecuaciones, sino escribir pocas ecuaciones correctas y acopladas. Al combinar ambas ecuaciones se elimina [[T]] y se obtiene la aceleracion comun. Luego, sustituyendo esa respuesta en una de las ecuaciones individuales, se obtiene la tension interna.\r
\r
{{f:a_comun}}\r
\r
{{f:T}}\r
\r
Estas expresiones condensan informacion estructural: el denominador con suma de masas representa inercia total del sistema acoplado; el termino de diferencia de masas representa el origen del desbalance que impulsa el movimiento; y la presencia de [[g]] confirma que la fuente externa dominante es gravitatoria. La ecuacion de [[T]] muestra ademas que la fuerza interna no depende de una sola masa, sino del producto acoplado entre [[m1]] y [[m2]], lo cual explica por que su valor refleja cooperacion dinamica y no accion unilateral.\r
\r
Un chequeo formal obligatorio es la coherencia dimensional. [[a]] debe tener unidad de aceleracion y [[T]] unidad de fuerza. Otro chequeo es la consistencia de signos: una convencion distinta cambia el signo algebraico, pero no cambia la prediccion fisica cuando se interpreta correctamente la direccion. Finalmente, el caso simetrico con masas iguales debe conducir a aceleracion nula, porque no hay desbalance neto que favorezca un sentido de movimiento. Ese limite funciona como prueba rapida de sanidad del calculo.\r
\r
## 🔴 Nivel estructural\r
En nivel estructural interesa saber cuando este modelo deja de representar bien la realidad. La formulacion ideal supone cuerda sin masa, sin elasticidad, polea sin inercia rotacional y sin friccion apreciable. Si una de estas hipotesis falla de forma significativa, el problema cambia de naturaleza: pueden aparecer diferencias de tension entre ramas, retrasos de propagacion de fuerza, disipacion energetica o dependencia temporal de parametros. En ese punto, mantener las formulas ideales puede ser util como primera aproximacion, pero no como cierre definitivo.\r
\r
Tambien hay un limite geometrico: el modelo de una sola coordenada funciona cuando la trayectoria esta claramente restringida y no aparecen oscilaciones laterales relevantes. Si el montaje real tiene vibraciones, holgura o flexion, el numero de grados de libertad efectivos aumenta y la ligadura deja de ser estricta. Una buena practica es declarar explicitamente el rango de validez antes de reportar resultados. Eso protege contra sobreinterpretaciones y conecta la resolucion matematica con criterio experimental.\r
\r
## Interpretación física profunda\r
La lectura profunda de este leaf no es solo "quien baja y quien sube". El mensaje fuerte es que la ligadura redistribuye causalidad. Cada masa influye en la otra mediante [[T]], y esa influencia no es opcional: es la forma en que el sistema conserva compatibilidad de movimiento. Por eso, [[T]] se interpreta mejor como variable de cierre interno. Si la cuerda pudiera estirarse libremente, la relacion cambiaría y la tension ya no cumpliria el mismo rol. Entender esto ayuda a transitar hacia modelos mas complejos de contacto y acoplamiento.\r
\r
Otra lectura profunda es que la simetria importa tanto como la magnitud absoluta. Dos masas grandes y casi iguales pueden producir una respuesta lenta, mientras que dos masas pequenas con contraste relativo marcado pueden producir una respuesta mas intensa respecto de su escala. El cerebro del analisis esta en el cociente entre diferencia e inercia total, no en un parametro aislado. Esta idea reaparece en muchos sistemas mecanicos y electromecanicos donde una restriccion geometrica convierte fuerzas locales en dinamica global.\r
\r
## Orden de magnitud\r
Para estimaciones rapidas, [[a]] suele ser una fraccion de [[g]] determinada por el contraste relativo entre [[m1]] y [[m2]]. Si el contraste es moderado, la aceleracion comun tambien sera moderada. Si el contraste es extremo, [[a]] se acerca a escala gravitatoria sin superarla en el marco ideal. En cambio, [[T]] suele quedar en escala de pesos caracteristicos del sistema, con sensibilidad fuerte al nivel de carga total. Estas reglas de orden de magnitud sirven para detectar resultados absurdos antes de cerrar una solucion.\r
\r
## Método de resolución personalizado\r
Paso 1: definir ejes y signos antes de escribir ecuaciones.\r
Paso 2: declarar hipotesis de idealidad y rango de validez.\r
Paso 3: escribir dinamica de cada masa compartiendo [[a]] y [[T]].\r
Paso 4: combinar ecuaciones para obtener [[a]].\r
Paso 5: sustituir para obtener [[T]].\r
Paso 6: verificar unidades, signos y caso simetrico.\r
Paso 7: redactar una interpretacion causal de los resultados y no solo el valor numerico.\r
\r
## Casos especiales y ejemplo extendido\r
Caso de casi equilibrio: cuando [[m1]] y [[m2]] son muy cercanas, el sistema se mueve lentamente y es sensible a pequeñas fricciones no modeladas. Caso de gran desbalance: una masa domina y la respuesta se acerca a comportamiento de caida controlada por acoplamiento. Caso experimental: si se miden tiempos y recorridos, se puede inferir [[a]] y luego contrastar [[T]] con sensores de fuerza en la cuerda. Esta ruta permite validar hipotesis de idealidad y estimar donde aparece desviacion sistematica.\r
\r
## Preguntas reales del alumno\r
Pregunta: por que no se puede elegir una aceleracion para cada bloque. Respuesta: porque la cuerda inextensible impone compatibilidad cinemática y reduce grados de libertad.\r
Pregunta: por que la tension no es igual al peso de una masa. Respuesta: porque [[T]] es variable interna que equilibra simultaneamente ambas ecuaciones dinamicas.\r
Pregunta: que pasa si hay friccion en la polea. Respuesta: el modelo ideal se corrige y pueden aparecer tensiones distintas en cada tramo.\r
\r
## Conexiones transversales y rutas de estudio\r
Este leaf conecta con ligaduras y grados de libertad, con formulaciones de energia y con modelos de poleas no ideales. Tambien enlaza con inferencia experimental porque permite estimar parametros internos a partir de mediciones externas. Una ruta recomendada es: primero dominar la lectura causal de [[a]] y [[T]], luego introducir inercia de polea, y finalmente comparar solucion analitica con datos de laboratorio.\r
\r
## Síntesis final\r
Problemas con ligaduras enseña una idea nuclear de mecanica analitica: las restricciones no son un detalle geometrico, sino el mecanismo que organiza la dinamica compartida. En la maquina de Atwood ideal, [[m1]], [[m2]] y [[g]] definen un escenario; [[a]] y [[T]] emergen como respuesta coherente del sistema acoplado. Resolver bien implica combinar algebra, chequeos de coherencia y criterio fisico sobre validez del modelo. Cuando esa triada se respeta, el resultado no solo es correcto, tambien es interpretable y transferible a sistemas mas complejos.\r
`;export{e as default};
