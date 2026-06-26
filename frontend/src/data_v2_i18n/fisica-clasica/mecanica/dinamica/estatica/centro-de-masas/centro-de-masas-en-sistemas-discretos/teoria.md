# Centro de masas en sistemas discretos

## Contexto conceptual

Este leaf no presenta la definición abstracta del centro de masas, sino su uso operativo en sistemas formados por un número finito de masas puntuales. La pregunta física es concreta: si varias masas [[m_i]] ocupan posiciones [[x_i]] sobre un mismo eje, ¿en qué punto [[xcm]] puede representarse la distribución total para describir su comportamiento traslacional?

La clave es que cada masa arrastra el promedio hacia su propia posición. Una masa pequeña lejos del origen puede competir con una masa grande cercana; por eso no basta mirar el punto medio geométrico. El centro de masas discreto es un promedio ponderado por masa, y la masa total [[M]] actúa como normalización.

## 🟢 Nivel esencial

En un sistema discreto no se reparte masa por todo el espacio, sino que se trabaja con objetos separados. Cada objeto aporta dos datos: cuánta masa tiene y dónde está. El centro de masas indica la posición efectiva del conjunto, como si toda la masa estuviera concentrada allí para describir el balance global.

La idea esencial es que una masa mayor tiene más influencia que una menor. El centro debe acercarse al lado donde hay más masa o donde las masas están más alejadas del origen. Antes de calcular conviene anticipar esa dirección y comprobar después que el número obtenido respeta la intuición física.

Este leaf es distinto al de cuerpos extendidos porque aquí no se integra. Se suma una lista finita de contribuciones. El alumno debe aprender a conservar el mismo origen, calcular la masa total y comprobar qué parte domina el promedio final.

## 🔵 Nivel formal

Para aplicar el modelo discreto se comienza calculando la masa total. En una colección finita de masas, [[M]] es la suma de todas las masas individuales:

{{f:masa_total_discreta}}

Con [[M]] definida, el centro de masas general en una dimensión se obtiene sumando productos masa por posición. Cada término del numerador tiene unidades de masa por longitud y representa la contribución de una partícula al primer momento discreto:

{{f:centro_masas_general}}

El caso de dos masas merece una fórmula propia porque aparece constantemente en ejercicios de equilibrio y permite ver la interpolación entre dos posiciones:

{{f:centro_masas_dos_masas}}

La lectura formal es importante: el numerador no suma posiciones, sino productos. Por eso una masa doble en la misma posición pesa doble en la media. Si todas las masas se multiplican por el mismo factor, [[M]] y el numerador se multiplican igual y [[xcm]] no cambia.

En un ejercicio con dos datos concretos, [[m_1]] debe permanecer asociado a [[x_1]] y [[m_2]] a [[x_2]]. Cambiar una pareja por descuido altera el primer momento aunque la lista de masas y posiciones parezca contener los mismos números. En sistemas con más cuerpos, la notación [[m_i]] y [[x_i]] recuerda que cada índice identifica una pareja física completa. Esa asociación es el paso formal que separa una media aritmética de un promedio ponderado por masa.

El formalismo también fija las unidades. Las masas aportan kilogramos, las posiciones aportan metros y el cociente final vuelve a ser una longitud. Si aparece una unidad de masa por longitud o una unidad sin longitud, el cálculo no representa una posición. Esta validación dimensional debe hacerse antes de interpretar el resultado.

## 🔴 Nivel estructural

La estructura del cálculo tiene tres capas. Primero se define el sistema: qué masas pertenecen al conjunto y cuáles no. Después se calcula [[M]], porque sin masa total positiva no hay promedio ponderado válido. Finalmente se calcula [[xcm]] y se interpreta su posición relativa respecto a los puntos del sistema.

El modelo discreto falla si una parte importante de la masa no puede tratarse como puntual o si la masa está distribuida de forma continua. En ese caso no basta una suma de pocos términos y conviene pasar al leaf de cuerpos extendidos. También falla si las masas cambian durante el intervalo o si el sistema no conserva una geometría fija. Esta distinción evita usar una suma discreta para un objeto cuya distribución interna es justamente lo que se quiere estudiar.

Un criterio estructural útil es el rango. Con masas no negativas, [[xcm]] debe quedar entre el menor y el mayor valor de [[x_i]]. Si aparece fuera, suele haber un signo equivocado, una posición medida desde otro origen o una masa omitida. Esa comprobación es tan importante como la sustitución numérica.

Otro criterio es la estabilidad frente a cambios. Si aumenta una masa situada a la derecha, el centro no debe moverse hacia la izquierda. Si se desplaza una masa ligera, el efecto debe ser menor que al desplazar una masa dominante la misma distancia. Estas pruebas no sustituyen el cálculo, pero detectan errores de asociación entre masas y posiciones antes de aceptar el resultado.

## Interpretación física profunda

El centro de masas discreto no tiene por qué coincidir con una partícula real. Puede caer en un punto vacío entre objetos. Eso no lo hace menos físico: representa la posición equivalente de la distribución total de masa. En problemas de equilibrio, transporte o diseño, esa posición indica hacia qué lado se concentra el peso efectivo.

El valor de [[M]] también tiene interpretación. Al aumentar todas las masas por el mismo factor, [[M]] cambia, pero [[xcm]] no se mueve, porque los pesos relativos son los mismos. En cambio, aumentar solo [[m_1]] desplaza el centro hacia [[x_1]]. Esta distinción separa cantidad total de distribución espacial.

Una lectura profunda consiste en preguntarse qué cambio movería más el centro. Mover una masa grande cerca del borde suele ser más importante que mover una masa pequeña cerca del centro. Por eso el cálculo no es una rutina algebraica aislada: traduce decisiones de distribución en consecuencias geométricas.

## Orden de magnitud

En un montaje escolar con masas entre décimas de kilogramo y decenas de kilogramos, y separaciones de centímetros o metros, [[xcm]] debe tener la misma escala que las posiciones dadas. Si dos posiciones están separadas unos pocos metros, ningún resultado razonable con masas positivas puede quedar decenas de metros fuera del sistema.

La comprobación rápida es comparar el valor final con el intervalo de coordenadas. Si todas las masas son positivas, el resultado debe quedar dentro del intervalo. Además, si una masa domina claramente, el centro debe acercarse a su coordenada, pero no tiene por qué coincidir con ella salvo que las demás contribuciones sean despreciables.

## Método de resolución personalizado

1. Dibuja un eje único y fija origen y sentido positivo.
2. Construye una tabla con cada masa y su posición.
3. Calcula [[M]] y verifica que sea positiva.
4. Calcula el primer momento discreto respetando cada pareja masa-posición.
5. Divide por [[M]] y valida unidades, rango y sesgo hacia la masa dominante.

Este método evita el error más común: sumar posiciones por un lado y masas por otro sin conservar las parejas físicas masa-posición. También ayuda a detectar datos incompletos: si un objeto aparece en el dibujo pero no en la tabla, el sistema físico no está definido.

## Casos especiales y ejemplo extendido

Si dos masas iguales están colocadas simétricamente respecto al origen, el centro de masas queda en el origen. Esa simetría no procede de una regla de punto medio universal, sino de la igualdad de contribuciones opuestas.

Si una masa se coloca en el origen, su término de momento puede ser cero, pero esa masa sigue aumentando [[M]] y por tanto afecta el resultado. Si una masa está a la izquierda del origen, su coordenada negativa puede desplazar [[xcm]] hacia valores negativos. El signo no es un error por sí mismo; depende del eje definido.

En sistemas con muchas piezas, conviene agrupar solo cuando el agrupamiento conserva el centro de masas interno de cada parte. Por ejemplo, un módulo extendido puede sustituirse por una masa puntual en su propio centro, pero no en un punto arbitrario.

## Preguntas reales del alumno

¿Por qué no se promedian solo las posiciones?
Porque una posición ocupada por una masa grande influye más que una posición ocupada por una masa pequeña.

¿Una masa en el origen no cuenta?
Su producto masa por posición puede valer cero, pero sigue contando en [[M]].

¿El centro de masas debe estar ocupado por material?
No. Puede estar en una zona vacía; representa una posición equivalente del conjunto.

¿Qué pasa si cambio el origen?
Cambian las coordenadas numéricas, pero las distancias físicas relativas se mantienen si todas las posiciones se transforman de forma coherente.

## Conexiones transversales y rutas de estudio

Este leaf conecta con promedio ponderado, equilibrio, torque, cantidad de movimiento y movimiento del centro de masas. La misma idea aparece cuando se analiza un sistema de partículas: aunque las partículas se muevan por separado, la posición del centro de masas resume el movimiento global.

Después de dominar sistemas discretos, el paso natural es cuerpos extendidos, donde las sumas se sustituyen por integrales. Más adelante aparece la misma idea en cuerpos compuestos, torque y momento de inercia.

## Síntesis final

El centro de masas en sistemas discretos es una media ponderada por masa aplicada a una lista finita de cuerpos. Su potencia está en conservar las parejas [[m_i]] y [[x_i]], calcular [[M]] correctamente y leer el resultado como una posición efectiva del sistema. Si el valor final respeta rango, unidades y sesgo hacia las masas dominantes, el cálculo no solo da un número: describe la distribución física del conjunto.
