const e=`## 1. Maniobra orbital de satelite pequeno\r
\r
En un satelite que debe elevar ligeramente su orbita con combustible limitado, la ecuacion del cohete sirve para comprobar si el [[DeltaV]] pedido cabe en la razon de masas disponible sin comprometer masa final. La utilidad real aparece cuando hay que convertir una observacion parcial en un criterio operativo: decidir si el sistema puede tratarse con el modelo del leaf, si conviene recortar el intervalo de analisis y que dato experimental manda cuando varias explicaciones parecen posibles. En lugar de repetir una formula, la aplicacion obliga a identificar donde entra el intercambio de momento, como se mide y por que el resultado cambia cuando el escenario deja de parecerse al ideal.\r
\r
La lectura buena no se cierra con la cuenta. Tambien exige comparar el orden de magnitud esperado con lo que muestran sensores, video o trazas sobre el banco de ensayo. Si el valor obtenido solo funciona despues de ignorar una fuerza, una deformacion o una geometria dominante, entonces la decision tecnica debe cambiar. Por eso en un satelite que debe elevar ligeramente su orbita con combustible limitado la interpretacion se usa para justificar una accion concreta y no para decorar la solucion.\r
\r
Variable dominante: la relacion entre [[DeltaV]], [[ve]] y [[m0]]/[[mf]], porque el combustible disponible entra solo a traves del logaritmo.\r
\r
Limite de validez: la lectura ideal deja de bastar si el encendido es largo, la gravedad pesa o el empuje no puede tomarse cuasi instantaneo.\r
\r
## 2. Cohete de agua escolar\r
\r
Cuando se analiza un lanzamiento corto donde se comparan presiones y masa de agua, la relevancia de la ecuacion del cohete aparece al tener que elegir si conviene cargar mas agua o aligerar la estructura para ganar altura util. Lo primero es separar sistema, entorno y ventana temporal, porque un mismo montaje puede parecer favorable al modelo del leaf durante el contacto principal y dejar de serlo unos instantes despues. Esa distincion cambia que datos conviene tomar, que magnitudes deben proyectarse y que comparaciones permiten defender la conclusion ante otra persona.\r
\r
En esta aplicacion no basta con que el calculo sea limpio. Hay que revisar si el dato dominante viene de una velocidad relativa, de una masa efectiva, de un angulo o de una fuerza externa acumulada en poco tiempo. Tambien hay que mirar que perturbacion volveria enganoso el resultado: rozamiento, giro, acoplamiento estructural, flexion o mala definicion del sistema. Si ese limite no se explicita, la prediccion puede parecer razonable y aun asi conducir a una decision equivocada.\r
\r
Variable dominante: la masa final [[mf]], porque demasiada agua mejora el empuje inicial pero empeora la razon de masas global.\r
\r
Limite de validez: la ecuacion simple se vuelve pobre si la resistencia del aire y la expansion del agua dominan toda la maniobra.\r
\r
## 3. Predimensionado de etapa superior\r
\r
Una aplicacion exigente de la ecuacion del cohete aparece en una discusion de ingenieria sobre cuanto propelente debe cargar una etapa final. Ahi no interesa una descripcion escolar generica, sino resolver reconstruir [[m0]] o [[mf]] a partir de un [[DeltaV]] objetivo antes de fijar tanques y carga util con un criterio que pueda contrastarse. Eso obliga a traducir la teoria a operaciones observables: fijar ejes, escoger el antes y el despues del proceso, descartar interacciones secundarias solo cuando su impulso o su efecto energetico sean realmente pequenos y relacionar el modelo con una medida disponible en el problema.\r
\r
El valor didactico del caso esta en que muestra donde suele romperse la intuicion. Una lectura apresurada suele mezclar fuerzas internas con externas, usar datos tomados fuera del intervalo util o confundir simetria geometrica con validez dinamica. Por eso el cierre debe decir que magnitud gobierna la decision, que evidencia experimental la respalda y que cambio del entorno obligaria a sustituir el modelo por otro mas completo. Esa ultima frase es la que convierte la aplicacion en una herramienta de trabajo.\r
\r
Variable dominante: los despejes m0_from_dv y dv_solve_mf, porque convierten la ecuacion en una herramienta de diseno.\r
\r
Limite de validez: hay que ampliar el modelo si el motor cambia mucho de [[ve]] o si la estructura no puede considerarse masa inerte fija.\r
\r
## 4. Comparacion entre motores quimico e ionico\r
\r
En una seleccion de propulsion para una mision de largo alcance, la ecuacion del cohete deja de ser abstracto porque permite estimar si compensa subir [[ve]] aunque el empuje instantaneo sea menor. El problema practico no consiste solo en obtener un numero, sino en decidir si la simplificacion elegida sigue siendo defendible cuando aparecen tiempos finitos de contacto, rotaciones, apoyos o distribuciones reales de masa. Para responder bien hay que conectar el modelo con una escena medible y con una consecuencia tangible: aprobar un ensayo, corregir un diseno, interpretar un video o rechazar una conclusion precipitada.\r
\r
Esta clase de aplicacion obliga a mirar el proceso en dos capas. Primero, la capa mecanica que fija que magnitudes son nucleares y que conservaciones siguen activas. Despues, la capa de validacion, donde se comprueba si el montaje introduce una fuerza externa, una disipacion o una restriccion geometrica suficiente para alterar la lectura. Si se omite esa segunda capa, el numero final puede ser internamente coherente y, aun asi, inutil para actuar sobre el sistema real.\r
\r
Variable dominante: [[ve]], porque una mejora en velocidad de eyeccion reduce de forma directa la razon de masas requerida.\r
\r
Limite de validez: el leaf no decide por si solo si el motor sirve, porque tambien importan potencia disponible y tiempo de maniobra.\r
\r
## 5. Auditoria de presupuesto de [[DeltaV]]\r
\r
La interpretacion de la ecuacion del cohete es decisiva en una revision de mision donde el presupuesto de maniobras ya no cuadra cuando toca detectar si el fallo viene de una estimacion mala de [[mf]], de [[ve]] o del propio [[DeltaV]] requerido. La escena obliga a elegir entre varias historias fisicas posibles y a quedarse solo con la que mantiene consistencia entre diagrama, escala temporal y dato disponible. Por eso la aplicacion no se resuelve citando la ley; se resuelve justificando que variable se mide primero, cual puede inferirse y que aproximacion permite pasar del montaje real a una prediccion util.\r
\r
Tambien es una buena prueba de madurez porque el error tipico no suele ser algebraico, sino de encuadre. Si se toma mal el sistema, si se mezclan fases distintas del proceso o si se extrapola una condicion ideal mas alla de su rango, la lectura se vuelve fragil. Explicar ese punto de ruptura es obligatorio: solo asi puede distinguirse entre un resultado que sirve para decidir y un ejemplo que solo ilustra una tendencia general.\r
\r
Variable dominante: que despeje inverso explica mejor la discrepancia sin esconder el coste real de combustible.\r
\r
Limite de validez: la auditoria ideal no basta si hubo perdidas gravitacionales, arrastre o etapas que no se modelaron por separado.\r
`;export{e as default};
