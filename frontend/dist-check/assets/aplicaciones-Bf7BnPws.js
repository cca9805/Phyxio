const e=`## 1. Cinta transportadora que recibe arena\r
\r
En una cinta horizontal alimentada desde una tolva, el balance de momento con flujo de masa sirve para calcular que fuerza externa hace falta para mantener velocidad constante mientras entra masa. La utilidad real aparece cuando hay que convertir una observacion parcial en un criterio operativo: decidir si el sistema puede tratarse con el modelo del leaf, si conviene recortar el intervalo de analisis y que dato experimental manda cuando varias explicaciones parecen posibles. En lugar de repetir una formula, la aplicacion obliga a identificar donde entra el intercambio de momento, como se mide y por que el resultado cambia cuando el escenario deja de parecerse al ideal.\r
\r
La lectura buena no se cierra con la cuenta. Tambien exige comparar el orden de magnitud esperado con lo que muestran sensores, video o trazas sobre el banco de ensayo. Si el valor obtenido solo funciona despues de ignorar una fuerza, una deformacion o una geometria dominante, entonces la decision tecnica debe cambiar. Por eso en una cinta horizontal alimentada desde una tolva la interpretacion se usa para justificar una accion concreta y no para decorar la solucion.\r
\r
Variable dominante: el termino [[u]]·[[mdot]] frente a [[Fext]], porque el frenado nace del momento que la arena debe ganar al entrar.\r
\r
Limite de validez: el modelo deja de bastar si la arena rebota, se amontona o aparece rozamiento interno dominante.\r
\r
## 2. Manguera de bomberos y retroceso\r
\r
Cuando se analiza el manejo de una manguera que expulsa agua a gran caudal, la relevancia de el balance de momento con flujo de masa aparece al tener que estimar si el operario puede compensar el retroceso o si hace falta apoyo mecanico. Lo primero es separar sistema, entorno y ventana temporal, porque un mismo montaje puede parecer favorable al modelo del leaf durante el contacto principal y dejar de serlo unos instantes despues. Esa distincion cambia que datos conviene tomar, que magnitudes deben proyectarse y que comparaciones permiten defender la conclusion ante otra persona.\r
\r
En esta aplicacion no basta con que el calculo sea limpio. Hay que revisar si el dato dominante viene de una velocidad relativa, de una masa efectiva, de un angulo o de una fuerza externa acumulada en poco tiempo. Tambien hay que mirar que perturbacion volveria enganoso el resultado: rozamiento, giro, acoplamiento estructural, flexion o mala definicion del sistema. Si ese limite no se explicita, la prediccion puede parecer razonable y aun asi conducir a una decision equivocada.\r
\r
Variable dominante: la rapidez con la que el flujo exporta momento y no solo la masa total de agua movida.\r
\r
Limite de validez: la lectura se degrada si el chorro cambia de direccion, pulsa en el tiempo o el conducto flexa mucho.\r
\r
## 3. Vagon con fuga vertical\r
\r
Una aplicacion exigente de el balance de momento con flujo de masa aparece en un carro que pierde liquido por un orificio en el fondo. Ahi no interesa una descripcion escolar generica, sino resolver decidir si la velocidad horizontal cambiara realmente o si solo cambia la masa transportada con un criterio que pueda contrastarse. Eso obliga a traducir la teoria a operaciones observables: fijar ejes, escoger el antes y el despues del proceso, descartar interacciones secundarias solo cuando su impulso o su efecto energetico sean realmente pequenos y relacionar el modelo con una medida disponible en el problema.\r
\r
El valor didactico del caso esta en que muestra donde suele romperse la intuicion. Una lectura apresurada suele mezclar fuerzas internas con externas, usar datos tomados fuera del intervalo util o confundir simetria geometrica con validez dinamica. Por eso el cierre debe decir que magnitud gobierna la decision, que evidencia experimental la respalda y que cambio del entorno obligaria a sustituir el modelo por otro mas completo. Esa ultima frase es la que convierte la aplicacion en una herramienta de trabajo.\r
\r
Variable dominante: la componente horizontal de u, porque sin ella el flujo no extrae momento en esa direccion.\r
\r
Limite de validez: hay que cambiar de modelo si el liquido sale inclinado, si hay rozamiento apreciable o si el carro rota.\r
\r
## 4. Tolva dosificadora instrumentada\r
\r
En una linea industrial con sensores de caudal y fuerza, el balance de momento con flujo de masa deja de ser abstracto porque permite comprobar si las lecturas de fuerza cierran con el flujo de masa medido antes de ajustar el control. El problema practico no consiste solo en obtener un numero, sino en decidir si la simplificacion elegida sigue siendo defendible cuando aparecen tiempos finitos de contacto, rotaciones, apoyos o distribuciones reales de masa. Para responder bien hay que conectar el modelo con una escena medible y con una consecuencia tangible: aprobar un ensayo, corregir un diseno, interpretar un video o rechazar una conclusion precipitada.\r
\r
Esta clase de aplicacion obliga a mirar el proceso en dos capas. Primero, la capa mecanica que fija que magnitudes son nucleares y que conservaciones siguen activas. Despues, la capa de validacion, donde se comprueba si el montaje introduce una fuerza externa, una disipacion o una restriccion geometrica suficiente para alterar la lectura. Si se omite esa segunda capa, el numero final puede ser internamente coherente y, aun asi, inutil para actuar sobre el sistema real.\r
\r
Variable dominante: la coherencia entre [[dPdt]], [[Fext]] y [[u]]·[[mdot]] en una misma ventana temporal.\r
\r
Limite de validez: la auditoria falla si sensores y video no miran el mismo tramo o si el volumen de control se mueve.\r
\r
## 5. Aspersor con dos salidas\r
\r
La interpretacion de el balance de momento con flujo de masa es decisiva en un dispositivo que recibe agua y la expulsa por ramas simetricas cuando toca elegir si puede suponerse cancelacion de momento o si una asimetria obliga a modelar fuerza neta. La escena obliga a elegir entre varias historias fisicas posibles y a quedarse solo con la que mantiene consistencia entre diagrama, escala temporal y dato disponible. Por eso la aplicacion no se resuelve citando la ley; se resuelve justificando que variable se mide primero, cual puede inferirse y que aproximacion permite pasar del montaje real a una prediccion util.\r
\r
Tambien es una buena prueba de madurez porque el error tipico no suele ser algebraico, sino de encuadre. Si se toma mal el sistema, si se mezclan fases distintas del proceso o si se extrapola una condicion ideal mas alla de su rango, la lectura se vuelve fragil. Explicar ese punto de ruptura es obligatorio: solo asi puede distinguirse entre un resultado que sirve para decidir y un ejemplo que solo ilustra una tendencia general.\r
\r
Variable dominante: la suma vectorial de los flujos de salida y no cada chorro aislado.\r
\r
Limite de validez: la simplificacion se rompe si las ramas no son equivalentes o si el flujo cambia de regimen.\r
`;export{e as default};
