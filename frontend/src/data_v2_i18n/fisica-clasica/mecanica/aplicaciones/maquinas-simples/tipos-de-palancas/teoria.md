# Tipos de palancas

## Contexto conceptual

Una palanca es una barra o cuerpo rígido que gira alrededor de un apoyo. Para clasificarla no basta mirar si “ayuda mucho” o si tiene una gran ventaja mecánica. La clasificación depende del orden espacial entre tres elementos: apoyo, potencia y resistencia. Ese orden define la magnitud [[clase_palanca]].

La potencia [[P]] es la fuerza aplicada para accionar la palanca. La resistencia [[R]] es la carga que se quiere sostener, mover o vencer. Los brazos [[d_P]] y [[d_R]] se miden desde el apoyo hasta las líneas de acción de esas fuerzas. La ventaja mecánica ideal [[VM]] ayuda a interpretar la geometría, pero no sustituye la identificación de la clase.

## 🟢 Nivel esencial

Hay tres clases clásicas. En una palanca de primera clase, el apoyo queda entre la potencia y la resistencia, como en unas tijeras o un balancín. En una palanca de segunda clase, la resistencia queda entre apoyo y potencia, como en una carretilla. En una palanca de tercera clase, la potencia queda entre apoyo y resistencia, como en el antebrazo humano.

La pregunta esencial es “qué elemento está en medio”. Si el apoyo está en medio, es primera clase. Si la resistencia está en medio, es segunda clase. Si la potencia está en medio, es tercera clase. Esta regla de posición es más importante que el tamaño exacto de las fuerzas.

Cada clase tiene una lectura funcional. La segunda clase suele favorecer ganancia de fuerza. La tercera suele sacrificar fuerza para ganar recorrido, rapidez o control. La primera puede favorecer uno u otro efecto según dónde se sitúe el apoyo.

En este nivel basta mirar el dibujo como una secuencia. No se empieza por calcular, sino por nombrar los tres puntos relevantes. Esa lectura evita que una carretilla y unas pinzas se confundan solo porque ambas tengan brazos y fuerzas.

## 🔵 Nivel formal

La palanca ideal se analiza con equilibrio de momentos respecto al apoyo:

{{f:lever_equilibrium}}

Esta igualdad dice que el momento de entrada y el momento resistente se compensan. No clasifica por sí sola la palanca, pero permite calcular la fuerza o el brazo necesario una vez conocida la geometría.

La ventaja mecánica ideal se lee como razón de brazos:

{{f:ideal_mechanical_advantage}}

Si [[VM]] es mayor que 1, la geometría favorece la fuerza: se puede equilibrar una resistencia mayor con una potencia menor, dentro del modelo ideal. Si [[VM]] es menor que 1, hay desventaja en fuerza, pero puede haber ganancia en recorrido o rapidez.

La diferencia con el leaf de ventaja mecánica es el centro de atención. Aquí se clasifica la palanca por el orden apoyo-potencia-resistencia y se interpreta qué tipo de dispositivo representa. [[VM]] se usa como lectura auxiliar para explicar el efecto de la geometría, no como criterio único de clase.

El nivel formal permite comprobar la coherencia de la clasificación. Una segunda clase típica tendrá la resistencia entre apoyo y potencia y, además, suele tener [[d_P]] mayor que [[d_R]]. Pero si un dispositivo no cumple esa tendencia numérica por un diseño particular, la clase no cambia mientras el orden espacial se mantenga.

## 🔴 Nivel estructural

La estructura de análisis empieza dibujando el apoyo. Después se localiza la potencia [[P]] y la resistencia [[R]]. Solo entonces se mide [[d_P]] y [[d_R]]. Si se miden brazos sin saber qué elemento está en medio, se puede calcular una razón correcta y aun así clasificar mal la palanca.

Una palanca de primera clase puede tener [[VM]] mayor, igual o menor que 1, porque el apoyo puede desplazarse hacia la resistencia o hacia la potencia. Una palanca de segunda clase ideal suele tener [[d_P]] mayor que [[d_R]], lo que favorece ventaja en fuerza. Una palanca de tercera clase suele tener [[d_P]] menor que [[d_R]], lo que exige más potencia que resistencia, pero aporta control o recorrido.

El criterio estructural más importante es que la clase no depende de la fuerza numérica aplicada. Cambiar [[P]] o [[R]] no convierte una palanca de tercera clase en una de segunda. Lo que cambia la clase es cambiar el orden espacial de apoyo, potencia y resistencia.

## Interpretación física profunda

Las clases de palancas describen configuraciones, no solo cálculos. Una carretilla no es de segunda clase porque tenga una [[VM]] concreta, sino porque la carga queda entre la rueda-apoyo y las manos-potencia. El antebrazo no es de tercera clase por un número, sino porque el músculo aplica la potencia entre el codo-apoyo y la carga en la mano.

Esta lectura evita confundir clasificación con rendimiento. Dos palancas de primera clase pueden comportarse de forma muy distinta si el apoyo cambia de posición. La clase dice el orden; la ventaja mecánica dice parte del efecto cuantitativo de ese orden.

También explica por qué una palanca puede ser útil aunque no multiplique fuerza. Una tercera clase puede requerir más [[P]] que [[R]], pero permite mover la resistencia con mayor recorrido o precisión. La utilidad mecánica depende del objetivo, no solo de maximizar [[VM]].

## Orden de magnitud

En dispositivos manuales, brazos de centímetros a metros y fuerzas de newtons a cientos de newtons son habituales. Si [[d_P]] es cuatro veces [[d_R]], la [[VM]] ideal será aproximadamente 4. En ese caso una resistencia de 200 N podría equilibrarse con una potencia ideal de 50 N, si el modelo sin pérdidas fuera válido.

Si [[d_P]] es menor que [[d_R]], la palanca no ofrece ventaja en fuerza. Eso no implica que esté mal diseñada: puede estar diseñada para velocidad, amplitud de movimiento o control fino. La interpretación debe conectar el número con la clase y con la función.

## Método de resolución personalizado

1. Dibuja apoyo, potencia y resistencia.
2. Identifica qué elemento queda entre los otros dos.
3. Asigna [[clase_palanca]] según ese orden.
4. Mide [[d_P]] y [[d_R]] desde el apoyo.
5. Usa la igualdad de momentos para relacionar [[P]] y [[R]].
6. Calcula [[VM]] solo como lectura geométrica auxiliar.
7. Interpreta si el diseño favorece fuerza, recorrido o control.

## Casos especiales y ejemplo extendido

En una tijera, el apoyo está entre la mano y el material cortado: primera clase. En una carretilla, la rueda está en un extremo, la carga en medio y las manos al otro: segunda clase. En el antebrazo, el codo es apoyo, el bíceps aplica potencia entre codo y mano, y la carga está en la mano: tercera clase.

Mover el apoyo de una palanca de primera clase puede cambiar la ventaja sin cambiar la clase. En cambio, mover la resistencia al centro o la potencia al centro sí cambia la clase.

## Preguntas reales del alumno

¿La clase se decide por la ventaja mecánica?
No. Se decide por el orden espacial entre apoyo, potencia y resistencia.

¿Una tercera clase es peor?
No necesariamente. Suele tener desventaja en fuerza, pero puede ganar recorrido, rapidez o control.

¿Una primera clase siempre multiplica fuerza?
No. Depende de la posición del apoyo y de la razón entre brazos.

¿Por qué se usa equilibrio de momentos?
Porque una palanca ideal en equilibrio compara los momentos de potencia y resistencia respecto al apoyo.

## Conexiones transversales y rutas de estudio

Este leaf conecta con momento de una fuerza, condición de sumatoria de momentos y ventaja mecánica. Primero se aprende qué produce momento; después se aprende cómo una palanca organiza fuerzas y brazos; luego se estudia la ventaja mecánica con más detalle.

También conecta con biomecánica y diseño de herramientas. Muchas articulaciones y utensilios se entienden clasificando primero la palanca y analizando después su compromiso entre fuerza y movimiento.

## Síntesis final

Los tipos de palancas se definen por la posición relativa de apoyo, potencia y resistencia. La igualdad de momentos relaciona [[P]], [[R]], [[d_P]] y [[d_R]], y [[VM]] ayuda a leer el efecto geométrico. Pero la clasificación [[clase_palanca]] pertenece al orden espacial: apoyo en medio, resistencia en medio o potencia en medio.
