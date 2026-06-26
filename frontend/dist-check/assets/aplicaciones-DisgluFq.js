const e=`## 1. Colision en carril de aire\r
\r
En un laboratorio con carros sobre carril de rozamiento muy bajo, sistemas aislados sirve para decidir si el montaje permite tratar el sistema como aislado antes de aplicar conservacion. La utilidad real aparece cuando hay que convertir una observacion parcial en un criterio operativo: decidir si el sistema puede tratarse con el modelo del leaf, si conviene recortar el intervalo de analisis y que dato experimental manda cuando varias explicaciones parecen posibles. En lugar de repetir una formula, la aplicacion obliga a identificar donde entra el intercambio de momento, como se mide y por que el resultado cambia cuando el escenario deja de parecerse al ideal.\r
\r
La lectura buena no se cierra con la cuenta. Tambien exige comparar el orden de magnitud esperado con lo que muestran sensores, video o trazas sobre el banco de ensayo. Si el valor obtenido solo funciona despues de ignorar una fuerza, una deformacion o una geometria dominante, entonces la decision tecnica debe cambiar. Por eso en un laboratorio con carros sobre carril de rozamiento muy bajo la interpretacion se usa para justificar una accion concreta y no para decorar la solucion.\r
\r
Variable dominante: comparar el impulso externo esperado con el intercambio interno del choque.\r
\r
Limite de validez: la hipotesis cae si el rozamiento residual, la pendiente o el empuje del aire dejan de ser pequenos.\r
\r
## 2. Explosion de puck sobre hielo\r
\r
Cuando se analiza una demostracion donde un objeto se separa en fragmentos sobre hielo, la relevancia de sistemas aislados aparece al tener que comprobar si la lectura de aislamiento sigue siendo defendible durante toda la separacion. Lo primero es separar sistema, entorno y ventana temporal, porque un mismo montaje puede parecer favorable al modelo del leaf durante el contacto principal y dejar de serlo unos instantes despues. Esa distincion cambia que datos conviene tomar, que magnitudes deben proyectarse y que comparaciones permiten defender la conclusion ante otra persona.\r
\r
En esta aplicacion no basta con que el calculo sea limpio. Hay que revisar si el dato dominante viene de una velocidad relativa, de una masa efectiva, de un angulo o de una fuerza externa acumulada en poco tiempo. Tambien hay que mirar que perturbacion volveria enganoso el resultado: rozamiento, giro, acoplamiento estructural, flexion o mala definicion del sistema. Si ese limite no se explicita, la prediccion puede parecer razonable y aun asi conducir a una decision equivocada.\r
\r
Variable dominante: vigilar si [[pTotI]] y [[pTotF]] se mantienen coherentes mientras [[Jext]] sigue siendo despreciable.\r
\r
Limite de validez: la aplicacion deja de servir si el objeto roza bordes, recibe un empuje externo o cambia de plano.\r
\r
## 3. Separacion de nave y modulo\r
\r
Una aplicacion exigente de sistemas aislados aparece en la liberacion de un modulo desde una nave en maniobra. Ahi no interesa una descripcion escolar generica, sino resolver decidir si basta el modelo aislado o si el empuje residual obliga a usar balance externo con un criterio que pueda contrastarse. Eso obliga a traducir la teoria a operaciones observables: fijar ejes, escoger el antes y el despues del proceso, descartar interacciones secundarias solo cuando su impulso o su efecto energetico sean realmente pequenos y relacionar el modelo con una medida disponible en el problema.\r
\r
El valor didactico del caso esta en que muestra donde suele romperse la intuicion. Una lectura apresurada suele mezclar fuerzas internas con externas, usar datos tomados fuera del intervalo util o confundir simetria geometrica con validez dinamica. Por eso el cierre debe decir que magnitud gobierna la decision, que evidencia experimental la respalda y que cambio del entorno obligaria a sustituir el modelo por otro mas completo. Esa ultima frase es la que convierte la aplicacion en una herramienta de trabajo.\r
\r
Variable dominante: estimar cuanto pesa [[Jext]] frente al momento intercambiado entre las dos partes.\r
\r
Limite de validez: hay que cambiar de modelo si los propulsores siguen activos o si la separacion dura demasiado.\r
\r
## 4. Auditoria de perturbaciones\r
\r
En una revision experimental para saber que fuerzas externas se estaban ignorando, sistemas aislados deja de ser abstracto porque permite determinar si una discrepancia nace del sensor o de un mal supuesto de aislamiento. El problema practico no consiste solo en obtener un numero, sino en decidir si la simplificacion elegida sigue siendo defendible cuando aparecen tiempos finitos de contacto, rotaciones, apoyos o distribuciones reales de masa. Para responder bien hay que conectar el modelo con una escena medible y con una consecuencia tangible: aprobar un ensayo, corregir un diseno, interpretar un video o rechazar una conclusion precipitada.\r
\r
Esta clase de aplicacion obliga a mirar el proceso en dos capas. Primero, la capa mecanica que fija que magnitudes son nucleares y que conservaciones siguen activas. Despues, la capa de validacion, donde se comprueba si el montaje introduce una fuerza externa, una disipacion o una restriccion geometrica suficiente para alterar la lectura. Si se omite esa segunda capa, el numero final puede ser internamente coherente y, aun asi, inutil para actuar sobre el sistema real.\r
\r
Variable dominante: usar [[DeltaPtot]] como prueba de fuego para detectar cuando el entorno si esta mandando.\r
\r
Limite de validez: la lectura se vuelve ambigua si el intervalo temporal del analisis no coincide con el evento fisico.\r
\r
## 5. Comparacion de fronteras del sistema\r
\r
La interpretacion de sistemas aislados es decisiva en un problema donde varias definiciones de sistema parecen razonables cuando toca elegir la frontera que convierte mas fuerzas en internas sin ocultar el mecanismo importante. La escena obliga a elegir entre varias historias fisicas posibles y a quedarse solo con la que mantiene consistencia entre diagrama, escala temporal y dato disponible. Por eso la aplicacion no se resuelve citando la ley; se resuelve justificando que variable se mide primero, cual puede inferirse y que aproximacion permite pasar del montaje real a una prediccion util.\r
\r
Tambien es una buena prueba de madurez porque el error tipico no suele ser algebraico, sino de encuadre. Si se toma mal el sistema, si se mezclan fases distintas del proceso o si se extrapola una condicion ideal mas alla de su rango, la lectura se vuelve fragil. Explicar ese punto de ruptura es obligatorio: solo asi puede distinguirse entre un resultado que sirve para decidir y un ejemplo que solo ilustra una tendencia general.\r
\r
Variable dominante: seguir como cambian [[pTotI]], [[pTotF]] y [[Jext]] cuando la frontera se mueve.\r
\r
Limite de validez: no sirve redefinir el sistema si con ello desaparece la magnitud que se queria interpretar.\r
`;export{e as default};
