# Despeje de formulas

## Que es

Despejar una formula es cambiar la forma de una igualdad para dejar sola la cantidad que quieres conocer. No cambia la relacion fisica: solo cambia que variable queda escrita como resultado. Si una ecuacion dice como se relacionan distancia, velocidad y tiempo, el despeje permite preguntar por cualquiera de esas tres cantidades sin inventar una formula nueva.

La idea central es que una igualdad se conserva si haces la misma operacion en ambos lados. Sumar, restar, multiplicar, dividir, elevar o tomar una raiz son movimientos permitidos si respetas el dominio de la operacion y no borras informacion fisica. Despejar bien es mantener viva la ecuacion mientras reorganizas sus piezas.

## Por que aparece en fisica

En fisica casi nunca se te entrega la ecuacion ya colocada exactamente como la necesitas. Un problema de movimiento puede darte velocidad y tiempo para hallar distancia, pero otro puede darte distancia y tiempo para hallar velocidad. En dinamica puedes conocer fuerza y masa para hallar aceleracion, o aceleracion y masa para hallar fuerza. La misma ley sirve para varias preguntas.

El despeje aparece en cinematica, energia, electricidad, fluidos y campos porque las formulas expresan dependencias. Una variable no es un numero decorativo: representa una magnitud con unidad, escala y sentido. Al despejar, decides que magnitud queda como incognita y cuales actuan como datos que condicionan el resultado.

## Idea visual o geometrica

Piensa en una balanza equilibrada. La igualdad es la balanza: lo que haces a un plato debes hacerlo al otro para que el equilibrio siga siendo cierto. Si una variable esta multiplicada por una constante, dividir ambos lados por esa constante retira el peso de los dos platos. Si esta sumada a otro termino, restar ese termino en ambos lados la separa.

Tambien puedes verlo como desmontar una maquina en orden inverso. Si sobre la incognita primero se multiplico y despues se sumo, para recuperarla debes deshacer primero la suma y luego la multiplicacion. El error comun es mover simbolos por costumbre sin pensar que operacion los une.

## Lenguaje simbolico minimo

Una igualdad tiene dos miembros: izquierdo y derecho. Una incognita es la variable que buscas; los datos son las cantidades conocidas o tratadas como conocidas. Para despejar `x` en `a x + b = c`, primero se elimina `b` restando `b` en ambos miembros y despues se elimina `a` dividiendo entre `a`, siempre que `a` no sea cero.

En fisica, cada simbolo conserva su unidad. Si despejas una velocidad, el resultado debe poder leerse en metros por segundo. Si despejas un tiempo, no puede quedar una expresion con unidad de longitud. La unidad funciona como prueba de coherencia: si no coincide, el despeje o la formula inicial estan mal usados.

Hay varias familias de despeje que conviene reconocer. En una relacion lineal como `a x + b = c`, la incognita esta encerrada por suma y multiplicacion. En una relacion con denominador como `p = F/A`, despejar `A` exige recordar que `A` no puede ser cero y que multiplicar por `A` cambia la estructura antes de dividir por `p`. En una relacion cuadratica como `K = (1/2) m v^2`, despejar `v` introduce una raiz y obliga a decidir si se busca velocidad con signo o modulo de la rapidez.

Tambien aparecen despejes donde la incognita esta repetida. En una expresion como `F = b v + c v^2`, la velocidad no se puede aislar moviendo un unico termino: hay que reconocer una ecuacion algebraica. En circuitos, rozamiento, fluidos o mecanica analitica, despejar puede significar agrupar terminos, factorizar, resolver una ecuacion cuadratica o aceptar una solucion numerica. Ese salto es importante: no todo despeje termina en una fraccion simple.

Por ultimo estan las funciones inversas. Si una variable aparece dentro de `sin`, `cos`, `ln` o `e^x`, no se libera dividiendo. Se usa la funcion inversa correspondiente y se revisa el dominio: un seno solo puede devolver valores entre `-1` y `1`, un logaritmo exige argumento positivo y una exponencial nunca produce valores negativos. Estas restricciones no son detalles algebraicos; son condiciones fisicas sobre los datos posibles.

## Que significa el resultado

El resultado de un despeje no es solo una forma algebraica mas comoda. Es una respuesta condicional: dice cuanto vale la incognita si los datos, el modelo y las condiciones del problema son validos. Por ejemplo, despejar el tiempo en una relacion de movimiento uniforme solo tiene sentido si la velocidad se mantiene constante durante el intervalo.

Cuando el resultado crece, decrece o cambia de signo al modificar un dato, esa reaccion tambien tiene significado fisico. Si al aumentar la masa aumenta la fuerza necesaria para una misma aceleracion, el despeje esta mostrando una dependencia directa. Si al aumentar una resistencia disminuye una corriente, esta mostrando una dependencia inversa.

El resultado tambien puede ser una familia de soluciones. Al tomar una raiz cuadrada aparecen dos signos matematicos, pero la fisica decide si ambos tienen sentido. Una rapidez suele tomarse positiva, mientras que una velocidad unidimensional puede admitir signo segun el eje elegido. En trigonometria puede haber varios angulos que cumplen la misma razon; el contexto geometrico decide cual corresponde al problema.

Por eso un despeje avanzado termina con tres lecturas: algebraica, dimensional y fisica. La lectura algebraica comprueba que la variable quedo aislada. La dimensional comprueba unidades. La fisica comprueba dominio, signo, escala, rama de solucion y condiciones del modelo.

## Cuando no debes usarlo

No debes despejar mecanicamente si no sabes que representa cada variable, si una cantidad puede ser cero en una division o si la formula pertenece a un modelo que no se cumple. Tampoco conviene aislar una variable dentro de una suma, una raiz, un seno o una potencia como si todos los terminos pudieran separarse libremente.

En problemas fisicos reales, antes de despejar hay que revisar condiciones: movimiento uniforme o acelerado, rozamiento despreciable o no, campo uniforme o variable, fluido ideal o viscoso. Un despeje algebraicamente correcto puede producir una respuesta fisicamente falsa si se aplica fuera de dominio.

Tampoco debes forzar una formula cerrada cuando el modelo conduce de forma natural a una ecuacion que se resuelve numericamente. En fisica, aceptar que una incognita debe encontrarse por iteracion, grafica o calculo numerico no es un fracaso: es reconocer la estructura real del problema. El despeje simbolico es una herramienta, no una obligacion.

## Resumen operativo

Despejar consiste en aislar la incognita conservando la igualdad, las unidades y el significado de la relacion. El criterio no es mover letras deprisa, sino identificar que operacion encierra a la variable, deshacerla en orden inverso y comprobar que el resultado responde a la pregunta fisica.

Un buen despeje termina con tres controles: la variable buscada queda sola, las unidades del resultado coinciden con esa variable y la dependencia obtenida tiene sentido. Si alguno de esos tres controles falla, no sigas calculando numeros: vuelve al modelo, a la ecuacion o al paso algebraico anterior.

<!-- algebra-depth-v2 -->
## Capa de profundidad: despeje de formulas

Este leaf no debe funcionar como una lista corta de reglas, sino como una herramienta para pensar problemas fisicos. El objetivo es aislar una incognita sin romper la igualdad, las unidades ni el dominio fisico. Un alumno basico necesita reconocer la magnitud buscada y la unidad esperada; un alumno intermedio debe justificar la operacion elegida; un alumno avanzado debe anticipar limites, dependencias y casos donde el modelo deja de servir.

Si la incognita aparece una vez, se deshacen operaciones inversas; si aparece varias veces, se agrupa, factoriza o se reconoce otro tipo de ecuacion.

| Estructura | Que mirar | Herramienta |
|---|---|---|
| `a x=b` | una aparicion | dividir |
| `a x+b=c` | suma externa | restar y dividir |
| `a/x=b` | incognita en denominador | multiplicar antes de dividir |
| `a x^2=b` | potencia par | raiz y signo |
| `x` repetida | varias apariciones | agrupar o resolver ecuacion |

La prueba de comprension es comparar. Si una entrada se multiplica por `2`, por `10` o por `1/2`, el alumno debe poder decir que ocurre con la salida antes de usar la calculadora. Esa prediccion convierte el algebra en control fisico del resultado.

