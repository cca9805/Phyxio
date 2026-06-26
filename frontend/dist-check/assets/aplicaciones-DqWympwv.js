const e=`## 1. Puerta empujada en distintos puntos\r
\r
En una comparacion entre empujes aplicados cerca y lejos de la bisagra, la definicion de momento angular sirve para decidir que accion produce mas efecto de giro aunque la fuerza lineal sea parecida. La utilidad real aparece cuando hay que convertir una observacion parcial en un criterio operativo: decidir si el sistema puede tratarse con el modelo del leaf, si conviene recortar el intervalo de analisis y que dato experimental manda cuando varias explicaciones parecen posibles. En lugar de repetir una formula, la aplicacion obliga a identificar donde entra el intercambio de momento, como se mide y por que el resultado cambia cuando el escenario deja de parecerse al ideal.\r
\r
La lectura buena no se cierra con la cuenta. Tambien exige comparar el orden de magnitud esperado con lo que muestran sensores, video o trazas sobre el banco de ensayo. Si el valor obtenido solo funciona despues de ignorar una fuerza, una deformacion o una geometria dominante, entonces la decision tecnica debe cambiar. Por eso en una comparacion entre empujes aplicados cerca y lejos de la bisagra la interpretacion se usa para justificar una accion concreta y no para decorar la solucion.\r
\r
Variable dominante: el brazo perpendicular respecto al origen elegido y no solo el valor aislado de p.\r
\r
Limite de validez: la lectura simple deja de bastar si la puerta flexa, cambia el eje real o aparecen varios contactos simultaneos.\r
\r
## 2. Videoanalisis de una pelota y una porteria\r
\r
Cuando se analiza una trayectoria que pasa cerca de un poste pero no lo alcanza, la relevancia de la definicion de momento angular aparece al tener que elegir desde que origen conviene medir para interpretar si el movimiento tiene gran capacidad de giro. Lo primero es separar sistema, entorno y ventana temporal, porque un mismo montaje puede parecer favorable al modelo del leaf durante el contacto principal y dejar de serlo unos instantes despues. Esa distincion cambia que datos conviene tomar, que magnitudes deben proyectarse y que comparaciones permiten defender la conclusion ante otra persona.\r
\r
En esta aplicacion no basta con que el calculo sea limpio. Hay que revisar si el dato dominante viene de una velocidad relativa, de una masa efectiva, de un angulo o de una fuerza externa acumulada en poco tiempo. Tambien hay que mirar que perturbacion volveria enganoso el resultado: rozamiento, giro, acoplamiento estructural, flexion o mala definicion del sistema. Si ese limite no se explicita, la prediccion puede parecer razonable y aun asi conducir a una decision equivocada.\r
\r
Variable dominante: como cambia L cuando se mantiene p pero se modifica la distancia perpendicular al origen.\r
\r
Limite de validez: hay que cambiar de modelo si la camara deforma la perspectiva o si el movimiento deja de ser aproximadamente plano.\r
\r
## 3. Rotor en banco didactico\r
\r
Una aplicacion exigente de la definicion de momento angular aparece en un disco cuyo giro se mide con sensor de velocidad angular. Ahi no interesa una descripcion escolar generica, sino resolver traducir una lectura de [[omega]] a una lectura fisica de [[L]] sin perder el papel del momento de inercia con un criterio que pueda contrastarse. Eso obliga a traducir la teoria a operaciones observables: fijar ejes, escoger el antes y el despues del proceso, descartar interacciones secundarias solo cuando su impulso o su efecto energetico sean realmente pequenos y relacionar el modelo con una medida disponible en el problema.\r
\r
El valor didactico del caso esta en que muestra donde suele romperse la intuicion. Una lectura apresurada suele mezclar fuerzas internas con externas, usar datos tomados fuera del intervalo util o confundir simetria geometrica con validez dinamica. Por eso el cierre debe decir que magnitud gobierna la decision, que evidencia experimental la respalda y que cambio del entorno obligaria a sustituir el modelo por otro mas completo. Esa ultima frase es la que convierte la aplicacion en una herramienta de trabajo.\r
\r
Variable dominante: la combinacion entre [[I]] y [[omega]], porque una [[omega]] grande no implica por si sola un gran [[L]].\r
\r
Limite de validez: la aproximacion falla si el eje oscila, si I cambia con la deformacion o si el sensor no separa spin y vibracion.\r
\r
## 4. Comparacion entre corredor y martillo atletico\r
\r
En dos escenas con el mismo momento lineal pero geometria distinta, la definicion de momento angular deja de ser abstracto porque permite explicar por que no basta conocer p para anticipar el efecto rotacional sobre un punto externo. El problema practico no consiste solo en obtener un numero, sino en decidir si la simplificacion elegida sigue siendo defendible cuando aparecen tiempos finitos de contacto, rotaciones, apoyos o distribuciones reales de masa. Para responder bien hay que conectar el modelo con una escena medible y con una consecuencia tangible: aprobar un ensayo, corregir un diseno, interpretar un video o rechazar una conclusion precipitada.\r
\r
Esta clase de aplicacion obliga a mirar el proceso en dos capas. Primero, la capa mecanica que fija que magnitudes son nucleares y que conservaciones siguen activas. Despues, la capa de validacion, donde se comprueba si el montaje introduce una fuerza externa, una disipacion o una restriccion geometrica suficiente para alterar la lectura. Si se omite esa segunda capa, el numero final puede ser internamente coherente y, aun asi, inutil para actuar sobre el sistema real.\r
\r
Variable dominante: la orientacion entre r y p, porque el seno del angulo decide que fraccion del movimiento contribuye a L.\r
\r
Limite de validez: no debe extrapolarse si el sistema real cambia de plano o si el origen relevante se mueve durante el proceso.\r
\r
## 5. Auditoria de un origen mal elegido\r
\r
La interpretacion de la definicion de momento angular es decisiva en una revision de informe donde dos calculos de L discrepan cuando toca determinar si el error viene del algebra o de haber cambiado el punto de referencia sin decirlo. La escena obliga a elegir entre varias historias fisicas posibles y a quedarse solo con la que mantiene consistencia entre diagrama, escala temporal y dato disponible. Por eso la aplicacion no se resuelve citando la ley; se resuelve justificando que variable se mide primero, cual puede inferirse y que aproximacion permite pasar del montaje real a una prediccion util.\r
\r
Tambien es una buena prueba de madurez porque el error tipico no suele ser algebraico, sino de encuadre. Si se toma mal el sistema, si se mezclan fases distintas del proceso o si se extrapola una condicion ideal mas alla de su rango, la lectura se vuelve fragil. Explicar ese punto de ruptura es obligatorio: solo asi puede distinguirse entre un resultado que sirve para decidir y un ejemplo que solo ilustra una tendencia general.\r
\r
Variable dominante: la consistencia entre origen, signo vectorial y distancia perpendicular usada en la lectura.\r
\r
Limite de validez: la auditoria deja de ser concluyente si cada calculo usa un sistema distinto o si el problema mezcla rotacion y traslacion no declaradas.`;export{e as default};
