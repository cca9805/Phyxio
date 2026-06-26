const e=`## 1. Taburete giratorio con pesas\r
\r
En una practica donde una persona recoge o separa masas mientras gira, la conservacion del momento angular sirve para decidir si el aumento de velocidad angular puede explicarse sin torque externo apreciable. La utilidad real aparece cuando hay que convertir una observacion parcial en un criterio operativo: decidir si el sistema puede tratarse con el modelo del leaf, si conviene recortar el intervalo de analisis y que dato experimental manda cuando varias explicaciones parecen posibles. En lugar de repetir una formula, la aplicacion obliga a identificar donde entra el intercambio de momento, como se mide y por que el resultado cambia cuando el escenario deja de parecerse al ideal.\r
\r
La lectura buena no se cierra con la cuenta. Tambien exige comparar el orden de magnitud esperado con lo que muestran sensores, video o trazas sobre el banco de ensayo. Si el valor obtenido solo funciona despues de ignorar una fuerza, una deformacion o una geometria dominante, entonces la decision tecnica debe cambiar. Por eso en una practica donde una persona recoge o separa masas mientras gira la interpretacion se usa para justificar una accion concreta y no para decorar la solucion.\r
\r
Variable dominante: la comparacion entre [[Ii]], [[I_final]], [[omegai]] y [[omegaf]] antes de invocar una fuerza misteriosa.\r
\r
Limite de validez: la conservacion deja de ser fiable si aparece rozamiento fuerte en el eje o si alguien impulsa el sistema durante el cambio.\r
\r
## 2. Patinadora analizada cuadro a cuadro\r
\r
Cuando se analiza un video donde la patinadora cambia de postura durante el giro, la relevancia de la conservacion del momento angular aparece al tener que comprobar si la lectura de [[Li]] y [[Lf]] sigue siendo coherente a pesar de ruido experimental. Lo primero es separar sistema, entorno y ventana temporal, porque un mismo montaje puede parecer favorable al modelo del leaf durante el contacto principal y dejar de serlo unos instantes despues. Esa distincion cambia que datos conviene tomar, que magnitudes deben proyectarse y que comparaciones permiten defender la conclusion ante otra persona.\r
\r
En esta aplicacion no basta con que el calculo sea limpio. Hay que revisar si el dato dominante viene de una velocidad relativa, de una masa efectiva, de un angulo o de una fuerza externa acumulada en poco tiempo. Tambien hay que mirar que perturbacion volveria enganoso el resultado: rozamiento, giro, acoplamiento estructural, flexion o mala definicion del sistema. Si ese limite no se explicita, la prediccion puede parecer razonable y aun asi conducir a una decision equivocada.\r
\r
Variable dominante: el torque externo acumulado durante [[DeltaT]] y no solo la variacion visible de [[omegaf]].\r
\r
Limite de validez: hay que abandonar la lectura ideal si el apoyo transmite par apreciable o si el eje corporal se descentra mucho.\r
\r
## 3. Apertura de panel solar en satelite\r
\r
Una aplicacion exigente de la conservacion del momento angular aparece en una maniobra espacial donde piezas internas se mueven sin apoyo externo cercano. Ahi no interesa una descripcion escolar generica, sino resolver anticipar como cambia la velocidad angular del cuerpo principal al redistribuir masa con un criterio que pueda contrastarse. Eso obliga a traducir la teoria a operaciones observables: fijar ejes, escoger el antes y el despues del proceso, descartar interacciones secundarias solo cuando su impulso o su efecto energetico sean realmente pequenos y relacionar el modelo con una medida disponible en el problema.\r
\r
El valor didactico del caso esta en que muestra donde suele romperse la intuicion. Una lectura apresurada suele mezclar fuerzas internas con externas, usar datos tomados fuera del intervalo util o confundir simetria geometrica con validez dinamica. Por eso el cierre debe decir que magnitud gobierna la decision, que evidencia experimental la respalda y que cambio del entorno obligaria a sustituir el modelo por otro mas completo. Esa ultima frase es la que convierte la aplicacion en una herramienta de trabajo.\r
\r
Variable dominante: si el balance total\r
\r
{{f:cons}}\r
\r
mantiene mientras cambia [[I_final]] y se reordena la masa.\r
\r
Limite de validez: el modelo se rompe si los propulsores corrigen la actitud durante la maniobra o si el despliegue dura demasiado.\r
\r
## 4. Colision giratoria en mesa de aire\r
\r
En un choque oblicuo alrededor de un punto de referencia fijo, la conservacion del momento angular deja de ser abstracto porque permite elegir si la conservacion angular aporta una ecuacion util ademas del balance lineal. El problema practico no consiste solo en obtener un numero, sino en decidir si la simplificacion elegida sigue siendo defendible cuando aparecen tiempos finitos de contacto, rotaciones, apoyos o distribuciones reales de masa. Para responder bien hay que conectar el modelo con una escena medible y con una consecuencia tangible: aprobar un ensayo, corregir un diseno, interpretar un video o rechazar una conclusion precipitada.\r
\r
Esta clase de aplicacion obliga a mirar el proceso en dos capas. Primero, la capa mecanica que fija que magnitudes son nucleares y que conservaciones siguen activas. Despues, la capa de validacion, donde se comprueba si el montaje introduce una fuerza externa, una disipacion o una restriccion geometrica suficiente para alterar la lectura. Si se omite esa segunda capa, el numero final puede ser internamente coherente y, aun asi, inutil para actuar sobre el sistema real.\r
\r
Variable dominante: el momento angular antes y despues del impacto respecto al mismo origen, no respecto a origenes cambiantes.\r
\r
Limite de validez: la herramienta pierde valor si el choque recibe un par externo del soporte o si el origen no permanece fijo.\r
\r
## 5. Auditoria de ruptura de conservacion\r
\r
La interpretacion de la conservacion del momento angular es decisiva en una discrepancia experimental donde [[omegaf]] no cuadra con el cambio de inercia esperado cuando toca determinar si el fallo viene de datos malos o de un [[tau]] externo que no se habia modelado. La escena obliga a elegir entre varias historias fisicas posibles y a quedarse solo con la que mantiene consistencia entre diagrama, escala temporal y dato disponible. Por eso la aplicacion no se resuelve citando la ley; se resuelve justificando que variable se mide primero, cual puede inferirse y que aproximacion permite pasar del montaje real a una prediccion util.\r
\r
Tambien es una buena prueba de madurez porque el error tipico no suele ser algebraico, sino de encuadre. Si se toma mal el sistema, si se mezclan fases distintas del proceso o si se extrapola una condicion ideal mas alla de su rango, la lectura se vuelve fragil. Explicar ese punto de ruptura es obligatorio: solo asi puede distinguirse entre un resultado que sirve para decidir y un ejemplo que solo ilustra una tendencia general.\r
\r
Variable dominante: la estimacion de\r
\r
{{f:tau}}\r
\r
para saber si el entorno si tuvo capacidad de alterar L total.\r
\r
Limite de validez: la auditoria no cierra si el intervalo [[DeltaT]] esta mal elegido o si varias fuentes de torque se mezclan sin separarlas.`;export{e as default};
