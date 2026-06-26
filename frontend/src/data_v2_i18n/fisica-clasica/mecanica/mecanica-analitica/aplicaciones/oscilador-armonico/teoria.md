# Oscilador armonico

## Contexto conceptual

El oscilador armonico es el modelo lineal mas importante de la mecanica analitica. Aparece cuando un sistema se desplaza poco alrededor de un equilibrio estable y la fuerza restauradora puede aproximarse como proporcional al desplazamiento. Por eso sirve para leer muelles, vibraciones mecanicas, modos normales, pequenas oscilaciones de pendulos y aproximaciones locales de potenciales mas complejos.

En este leaf, [[m]], [[k]], [[omega]], [[Tper]], [[A]] y [[E]] forman una cadena causal sencilla. La masa aporta inercia, la rigidez aporta retorno, la frecuencia angular mide el ritmo natural, el periodo traduce ese ritmo a tiempo de ciclo, la amplitud fija el maximo desplazamiento y la energia total mide cuanto se ha excitado el modo.

## 🟢 Nivel esencial

La idea esencial es que el oscilador armonico no necesita una fuerza constante, sino una fuerza que aumenta cuanto mas se separa el sistema del equilibrio. Si el sistema se desplaza poco y el retorno es lineal, el movimiento resultante es periodico y tiene un ritmo propio. Ese ritmo no depende de empujar mas fuerte una vez fijados [[m]] y [[k]], sino de la relacion entre inercia y rigidez.

Una masa mayor responde mas lentamente porque ofrece mas inercia. Una rigidez mayor responde mas rapido porque devuelve con mas intensidad hacia el equilibrio. La amplitud, en el modelo ideal lineal, no cambia el periodo; cambia la energia almacenada. Esta separacion evita una confusion habitual: una oscilacion mas grande no tiene por que ser mas lenta o mas rapida en el modelo armonico ideal.

La energia total permanece constante si no hay rozamiento ni fuerza externa. Durante el movimiento se intercambia entre energia cinetica y energia potencial elastica, pero el total [[E]] queda fijado por [[k]] y [[A]]. La lectura fisica no es solo "calcular una frecuencia"; es decidir que parametro controla ritmo y cual controla energia.

## 🔵 Nivel formal

La frecuencia angular natural se obtiene comparando la rigidez restauradora con la inercia de la masa:

{{f:omega}}

El periodo de oscilacion traduce esa frecuencia angular en tiempo de un ciclo completo:

{{f:Tper}}

La energia mecanica total asociada a la amplitud maxima en un potencial elastico cuadratico es:

{{f:E}}

Estas tres relaciones son suficientes para resolver el nucleo del modelo lineal. Si se pide ritmo, se calculan [[omega]] y [[Tper]]. Si se pide energia de excitacion, se usa [[E]]. Si se modifica [[m]], cambia el ritmo pero no la energia para la misma amplitud y rigidez. Si se modifica [[A]], cambia la energia pero no el periodo lineal.

Formalmente conviene leer las relaciones como una secuencia, no como una lista aislada. Primero se identifica el par sistema-inercia mediante [[k]] y [[m]]. Despues se obtiene el reloj natural [[omega]], que no depende de como se haya soltado el sistema. A continuacion se traduce ese reloj en [[Tper]], una magnitud directamente comparable con datos experimentales. Solo al final entra [[A]] para fijar [[E]], porque la amplitud describe la preparacion del movimiento y no la propiedad temporal basica del oscilador.

Esta organizacion evita dos errores algebraicos frecuentes. El primero es usar la amplitud dentro de la frecuencia natural, mezclando estado inicial con parametro del sistema. El segundo es tratar la energia como si dependiera directamente de la masa, cuando en el modelo ideal de muelle lineal la energia maxima procede del potencial elastico. Por eso la parte formal no solo calcula: ordena que magnitud responde a que pregunta fisica.

## 🔴 Nivel estructural

Estructuralmente, el oscilador armonico representa la aproximacion cuadratica de un potencial cerca de un minimo estable. En mecanica analitica, esto es clave porque muchos sistemas no son exactamente armonicos, pero se comportan como tales para oscilaciones pequenas. La variable generalizada puede ser una posicion lineal, un angulo pequeno o una coordenada normal; lo importante es que el potencial tenga curvatura positiva alrededor del equilibrio.

El modelo deja de ser suficiente cuando aparecen amortiguamiento, fuerza externa, no linealidad fuerte o amplitudes grandes. Si la rigidez efectiva cambia con el desplazamiento, [[omega]] deja de ser constante. Si hay disipacion, [[E]] ya no se conserva. Si hay excitacion externa, el ritmo observado puede estar dominado por la frecuencia de forzamiento, no por la frecuencia natural.

La lectura estructural tambien separa parametros y estado. [[m]] y [[k]] describen el sistema; [[A]] describe como se ha preparado el movimiento; [[omega]] y [[Tper]] son consecuencias temporales; [[E]] resume la excitacion mecanica. Esta clasificacion ayuda a no tratar todas las magnitudes como datos intercambiables.

## Interpretación física profunda

El oscilador armonico es potente porque convierte estabilidad en movimiento periodico. Si el equilibrio es estable, una pequena perturbacion no aleja indefinidamente al sistema; lo hace regresar, cruzar el equilibrio y repetir el intercambio de energia. La frecuencia natural mide la rapidez de ese intercambio.

Desde el punto de vista lagrangiano, el modelo muestra como una energia cinetica cuadratica y un potencial cuadratico producen una ecuacion lineal. Desde el punto de vista hamiltoniano, la trayectoria en espacio fase es cerrada: el sistema no pierde energia, solo la reparte entre posicion y momento. Por eso el oscilador es un laboratorio conceptual para toda la mecanica analitica.

La amplitud tiene un papel diferente al de la frecuencia. Aumentar [[A]] hace la oscilacion mas energetica, pero no altera el reloj natural mientras el muelle siga siendo lineal. Esa independencia es una firma del modelo ideal y una senal para detectar no linealidades en datos reales.

## Orden de magnitud

En sistemas de laboratorio, [[omega]] puede ir desde pocos radianes por segundo hasta miles o mas, segun la masa y la rigidez. Una masa de kilogramos con un muelle suave puede oscilar en segundos; una pieza pequena con una rigidez alta puede oscilar en milisegundos. Esta escala ayuda a detectar resultados imposibles.

La energia suele ser muy sensible a la amplitud. Doblar [[A]] multiplica [[E]] por cuatro si [[k]] no cambia. Por eso pequenas amplitudes en sistemas rigidos pueden tener energia apreciable, mientras grandes amplitudes en sistemas blandos pueden seguir siendo moderadas.

## Método de resolución personalizado

Primero identifica si el problema pregunta por ritmo, tiempo o energia. Si pregunta por ritmo, localiza [[m]] y [[k]] y calcula [[omega]]. Si pregunta por ciclo, convierte esa lectura en [[Tper]]. Si pregunta por excitacion o energia almacenada, usa [[k]] y [[A]].

Despues revisa el modelo: debe haber retorno lineal, masa constante, pequenas oscilaciones y rozamiento despreciable. Conviene comprobar unidades antes de sustituir: [[k]] debe estar en N/m, [[m]] en kg y [[A]] en m. Finalmente interpreta el resultado: frecuencia alta significa respuesta rapida; periodo grande significa oscilacion lenta; energia alta significa amplitud o rigidez elevadas.

## Casos especiales y ejemplo extendido

Si [[A]] es cero, el sistema esta en equilibrio y [[E]] es cero, aunque [[omega]] siga caracterizando como responderia ante una pequena perturbacion. Si [[k]] se hace muy pequeno, el retorno es debil y el periodo crece. Si [[m]] aumenta mucho, la inercia domina y el movimiento se ralentiza.

Como ejemplo conceptual, dos osciladores pueden tener la misma amplitud pero frecuencias distintas si sus masas o rigideces son diferentes. Tambien pueden tener el mismo periodo y energias distintas si sus amplitudes o rigideces no coinciden. Separar esas posibilidades es lo que convierte el modelo en una herramienta de analisis, no en una receta de sustitucion.

## Preguntas reales del alumno

Una duda frecuente es por que la amplitud no aparece en el periodo. La respuesta es que esa independencia solo vale para el modelo lineal ideal; en sistemas no lineales puede dejar de cumplirse. Otra pregunta habitual es si frecuencia angular y frecuencia en hertz son lo mismo. No lo son: [[omega]] mide radianes por segundo y debe convertirse si se quiere ciclos por segundo.

Tambien suele confundirse energia alta con oscilacion mas rapida. En este modelo, una energia mayor por mayor amplitud no cambia el ritmo natural. Cambia cuanto se aleja del equilibrio y cuanta energia intercambia, no el reloj del sistema.

## Conexiones transversales y rutas de estudio

Este leaf conecta con Lagrange porque el oscilador sale de una energia cinetica y un potencial cuadratico. Conecta con Hamilton porque la energia total es constante y la trayectoria en espacio fase es cerrada. Tambien prepara modos normales, vibraciones moleculares, circuitos analogos y pequenas oscilaciones del pendulo.

La ruta didactica recomendable es: entender primero equilibrio estable y fuerza restauradora, luego calcular frecuencia y periodo, despues interpretar energia de amplitud y finalmente reconocer cuando el modelo lineal falla. Esa progresion evita mezclar respuesta temporal con excitacion energetica.

## Síntesis final

El oscilador armonico enseña a leer un sistema estable desde tres preguntas: que ritmo natural tiene, cuanto tarda en repetir el movimiento y cuanta energia almacena una amplitud dada. Al terminar este leaf debes distinguir parametros del sistema, estado de oscilacion y consecuencias temporales, y saber cuando el modelo ideal deja de representar una vibracion real.
