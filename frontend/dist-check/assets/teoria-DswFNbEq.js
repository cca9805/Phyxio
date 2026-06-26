const e=`# Teorema de Ejes Paralelos\r
\r
## Contexto conceptual\r
\r
El Teorema de Ejes Paralelos describe un cambio de referencia, no una nueva geometria del cuerpo. La pregunta del leaf es concreta: como obtener el momento de inercia [[I]] respecto a un eje real de trabajo cuando ya se conoce el valor respecto al eje paralelo que pasa por el centro de masas. El tema, por tanto, no gira alrededor de memorizar cuerpos tipicos, sino de reconocer cuando el eje fisico del problema esta desplazado.\r
\r
Esta diferencia importa porque muchos sistemas reales no giran alrededor de su centro de masas. Una puerta gira alrededor de las bisagras, un pendulo fisico alrededor del punto de suspension y una barra apoyada alrededor de un extremo. En esos casos el cuerpo es el mismo, pero el eje no. El leaf enseña a traducir esa diferencia de eje en una diferencia de inercia.\r
\r
Tambien ayuda a separar dos capas que en clase suelen mezclarse. Una capa es la inercia propia del cuerpo resumida en [[Icm]]. Otra capa es el efecto geometrico de haber colocado el eje en otro sitio. Si el alumno no distingue esas dos contribuciones, acaba tratando Steiner como una receta aislada. Si las distingue, entiende que el teorema es un puente entre un valor de referencia y el valor que realmente entra en la dinamica.\r
\r
## 🟢 Nivel esencial\r
\r
La intuicion basica es sencilla: alejar el eje del centro de masas hace mas costoso el giro. No hace falta empezar con simbolos para verlo. Si sostienes una barra por el centro, arrancarla en rotacion resulta mas facil que si la sostienes por un extremo. La masa [[m]] es la misma, pero al cambiar el eje gran parte del cuerpo queda mas lejos de la linea de giro y ofrece mas resistencia a la aceleracion angular [[alpha]].\r
\r
La idea importante de este nivel es que el cuerpo no ha cambiado por dentro. No ha aparecido masa nueva ni una forma nueva. Lo unico que ha cambiado es desde donde obligamos al sistema a girar. Por eso este leaf no responde a "que momento de inercia tiene esta pieza" en abstracto, sino a "cuanto aumenta ese momento cuando el eje se desplaza". El foco esta en el aumento, no en el catalogo.\r
\r
Conviene fijar tambien una regla fisica muy util: para una direccion dada, el eje que pasa por el centro de masas produce el valor minimo dentro de la familia de ejes paralelos. Cualquier eje paralelo desplazado da una inercia mayor o igual. Esa afirmacion sirve como prueba de coherencia. Si la cuenta final sale menor que el valor central, el error no es de redondeo: se ha usado mal la idea del leaf.\r
\r
Otra clave del nivel esencial es aprender a mirar el dibujo correcto. El dato decisivo no es la distancia de un punto cualquiera al eje, sino el hecho de que existen dos ejes paralelos: el eje central de referencia y el eje real del problema. El teorema compara esos dos ejes. Cuando el alumno narra la escena con esa pareja de referencias, el formalismo posterior deja de ser misterioso.\r
\r
## 🔵 Nivel formal\r
\r
La relacion central del leaf es la formula de Steiner:\r
\r
{{f:steiner-directa}}\r
\r
Su lectura fisica es limpia. [[I]] es el momento de inercia respecto al eje desplazado. [[Icm]] es el momento de inercia respecto al eje paralelo que pasa por el centro de masas. [[m]] es la masa total del cuerpo. [[d]] es la distancia perpendicular entre ambos ejes. La expresion muestra que la inercia final se compone de una parte interna del cuerpo y de una correccion puramente geometrica.\r
\r
Ese punto merece subrayarse: el termino [[m]] [[d]]^2 no contiene detalles finos de la forma. Toda la informacion geometrica propia del cuerpo ya esta empaquetada en [[Icm]]. El termino extra solo responde a la localizacion del eje. Por eso Steiner es tan potente: una vez conocido el valor central, el traslado a un eje paralelo es inmediato.\r
\r
En problemas dinamicos, el teorema suele combinarse con la relacion de dinamica rotacional:\r
\r
{{f:respuesta-rotacional}}\r
\r
La jerarquia correcta es primero escoger el momento de inercia adecuado para el eje real y despues usarlo en la ecuacion dinamica. Un error comun es calcular bien el torque [[tau]] y luego insertar un valor de inercia referido al eje equivocado. El algebra puede parecer correcta, pero la interpretacion fisica queda rota.\r
\r
El signo de la correccion tambien orienta la lectura. Como la masa es positiva y la distancia al cuadrado nunca es negativa, el termino adicional no puede restar. Si se obtiene un resultado menor que [[Icm]], algo falla en la seleccion del eje, en la medida de [[d]] o en el uso de la formula inversa.\r
\r
## 🔴 Nivel estructural\r
\r
La hipotesis decisiva del teorema es geometrica: los ejes deben ser paralelos. Si cambia la orientacion del eje, Steiner deja de ser la herramienta adecuada. En ese caso hay que volver a integrar o pasar al tensor de inercia. Esta frontera conceptual es esencial porque muchos errores proceden de usar [[m]] [[d]]^2 como si sirviera para cualquier cambio de eje.\r
\r
Tambien es obligatorio que [[Icm]] corresponda a un eje con la misma direccion que el eje buscado. No basta con conocer "un momento de inercia del cuerpo". Tiene que ser el valor central de la familia correcta de ejes paralelos. En una barra, por ejemplo, no se puede trasladar un momento respecto a un eje longitudinal para obtener uno respecto a un eje transversal. Eso ya no es un cambio de posicion, sino un cambio de tipo de giro.\r
\r
Otra condicion estructural es suponer una distribucion de masa fija durante el analisis. Si el cuerpo se deforma, intercambia masa o tiene partes que se recolocan de forma apreciable, la separacion entre "inercia propia" y "correccion por desplazamiento" pierde validez o al menos deja de ser suficiente. El leaf funciona bien precisamente porque la masa del cuerpo puede tratarse como una estructura rigida.\r
\r
Mirado asi, este tema enseña algo mas general que una formula. Enseña a distinguir entre propiedades del cuerpo y propiedades de la eleccion del eje. Si falta el valor base, vuelves a momentos tipicos o a una integral. Si cambian orientaciones, te mueves hacia tensor de inercia. Si el eje correcto ya esta identificado y quieres estudiar movimiento, continúas hacia la ley rotacional correspondiente. Steiner ocupa un lugar intermedio muy claro dentro del mapa.\r
\r
## Interpretación física profunda\r
\r
La lectura profunda del teorema consiste en ver [[m]] [[d]]^2 como un coste geometrico por obligar al cuerpo a girar alrededor de un eje que no coincide con su eje central equivalente. El cuerpo no "sabe" de formulas, pero su respuesta mecanica refleja que ahora mas masa queda alejada del giro efectivo. Ese alejamiento adicional es justamente lo que el teorema cuantifica.\r
\r
Esta idea conecta con la experiencia. Una puerta pesada no solo cuesta moverla porque tenga mucha masa, sino porque esa masa esta distribuida lejos de las bisagras. Una barra cogida por un extremo parece torpe al arrancar en giro porque el eje real se ha alejado del centro de masas. El teorema convierte esa sensacion en una ley cuantitativa.\r
\r
Tambien ofrece criterio de diseño. Si se busca una respuesta angular rapida, interesa acercar el eje real al centro de masas o acercar masa al eje. Si se busca mas resistencia a cambios angulares, un eje mas alejado puede ser util. Por eso el leaf no se limita a ejercicios escolares: traduce decisiones geometricas en consecuencias dinamicas.\r
\r
## Orden de magnitud\r
\r
Una comprobacion muy util es comparar [[Icm]] con [[m]] [[d]]^2. Si [[m]] [[d]]^2 es pequeño frente a [[Icm]], el desplazamiento apenas altera la inercia. Si ambos son comparables, la correccion es relevante y no debe tratarse como detalle. Si [[m]] [[d]]^2 domina, la posicion del eje importa mas que la forma fina del cuerpo.\r
\r
Esta lectura previa permite detectar absurdos. En un objeto compacto con un desplazamiento minimo del eje, esperar un cambio gigantesco seria sospechoso. En una barra larga suspendida por un extremo, en cambio, es natural que el termino geometrico tenga mucho peso. La estimacion de orden de magnitud protege frente a errores de unidades y frente a la aceptacion ciega de cualquier resultado algebraico.\r
\r
## Método de resolución personalizado\r
\r
Un metodo fiable para este leaf puede resumirse en cinco pasos:\r
\r
1. Identificar el eje real de giro y su direccion.\r
2. Buscar el valor [[Icm]] correspondiente al eje paralelo que pasa por el centro de masas.\r
3. Medir la distancia perpendicular [[d]] entre ambos ejes.\r
4. Aplicar la formula de Steiner con unidades coherentes.\r
5. Comprobar que el resultado cumple [[I]] >= [[Icm]] y encaja con la escena fisica.\r
\r
La trampa mas frecuente esta entre los pasos 2 y 3. Muchos alumnos usan un [[Icm]] de otra orientacion o miden [[d]] desde un punto del cuerpo en vez de medirla entre ejes. Por eso conviene dibujar la geometria antes de despejar nada. En este leaf, un buen esquema vale mas que una cuenta rapida.\r
\r
## Casos especiales y ejemplo extendido\r
\r
El ejemplo clasico es una barra uniforme de longitud L. Para un eje perpendicular a la barra que pasa por su centro de masas se conoce un valor central de [[Icm]]. Si el eje real es paralelo y pasa por un extremo, la distancia entre ejes [[d]] es la mitad de la longitud. En ese caso la inercia final aumenta respecto al valor central, porque el desplazamiento del eje añade una correccion geometrica positiva.\r
\r
La importancia del ejemplo no esta solo en el resultado, sino en entender su significado: la barra es la misma y el incremento aparece unicamente porque el eje se ha desplazado desde el centro hasta el extremo.\r
\r
Hay dos casos limite instructivos. Si [[d]] tiende a cero, el resultado vuelve a [[Icm]], como debe ocurrir. Si [[d]] es mucho mayor que el tamaño caracteristico del cuerpo, el termino [[m]] [[d]]^2 domina y la localizacion del eje pesa mas que el detalle fino de la forma.\r
\r
## Preguntas reales del alumno\r
\r
**¿Por que necesito conocer [[Icm]] primero?**  \r
Porque Steiner no crea el momento de inercia desde cero; traslada a otro eje un valor central ya conocido.\r
\r
**¿Que distancia debo medir exactamente?**  \r
La distancia perpendicular entre los dos ejes paralelos, no la distancia de un punto cualquiera del cuerpo.\r
\r
**¿Puedo usar el teorema entre ejes no paralelos?**  \r
No. En cuanto cambia la orientacion del eje, cambia tambien la herramienta matematica necesaria.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf se apoya en definicion de momento de inercia, porque alli se entiende por que alejar masa del eje aumenta la resistencia al giro. Se alimenta de momentos tipicos, que suele proporcionar el valor de [[Icm]]. Limita con tensor de inercia, donde ya no basta con trasladar ejes paralelos. Y desemboca en la ley rotacional correspondiente, donde el valor corregido de [[I]] entra en la dinamica real del sistema.\r
\r
La secuencia didactica natural es clara: primero entender que mide el momento de inercia, despues aprender valores de referencia, luego dominar el traslado con Steiner y por ultimo insertar ese resultado en problemas de torque, energia o oscilacion.\r
\r
## Síntesis final\r
\r
Dominar el Teorema de Ejes Paralelos significa reconocer que el problema no pide un cuerpo nuevo, sino un eje nuevo. El nucleo del leaf es que la inercia respecto al centro de masas sirve como referencia privilegiada y que el desplazamiento del eje añade una correccion geometrica universal.\r
\r
La formula de Steiner resume esa idea con gran economia: una parte pertenece al cuerpo y otra al lugar desde el que lo hacemos girar. Cuando esa separacion se entiende, Steiner deja de ser un truco de memoria y pasa a ser un criterio fisico para leer sistemas rotacionales reales.`;export{e as default};
