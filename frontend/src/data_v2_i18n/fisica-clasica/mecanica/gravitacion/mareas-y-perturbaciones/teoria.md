# Mareas y perturbaciones

## Contexto conceptual

Una marea no es simplemente que un cuerpo atraiga a otro. Si toda la Tierra sintiera exactamente la misma aceleración hacia la Luna, el planeta completo caería como una partícula y no habría deformación interna. La marea aparece porque el campo gravitatorio externo no es uniforme: el punto cercano, el centro y el punto lejano sienten aceleraciones ligeramente distintas. Esa diferencia espacial es el núcleo físico de este leaf.

Las perturbaciones orbitales amplían la misma idea. Una órbita ideal de dos cuerpos es una primera aproximación, pero un satélite real también siente terceros cuerpos, achatamiento del planeta, presión de radiación o irregularidades de masa. La pregunta importante no es si esas acciones existen, sino si su escala es pequeña frente a la aceleración central [[ac]] y si pueden acumularse durante muchas vueltas.

## 🟢 Nivel esencial

La marea mide cuánto cambia la atracción gravitatoria dentro de un cuerpo extendido. Un mismo astro externo puede atraer a todo el planeta y, además, tirar de forma ligeramente distinta de cada zona. Esa diferencia produce estiramiento, abultamientos oceánicos, deformación de satélites o esfuerzos internos. La magnitud [[am]] representa esa diferencia interna, no la gravedad total hacia el perturbador.

La cercanía es decisiva. En gravitación ordinaria la fuerza disminuye con la distancia, pero la marea depende de cómo cambia esa fuerza al atravesar el cuerpo. Por eso un cuerpo muy masivo puede producir una marea menor que otro más cercano si la geometría favorece al cercano. Esta es la razón por la que la Luna domina muchas mareas terrestres aunque el Sol sea muchísimo más masivo.

Una perturbación orbital se reconoce cuando el movimiento principal sigue existiendo, pero aparece una corrección secundaria que puede deformar lentamente la trayectoria. Si la corrección es pequeña, se estudia como ajuste acumulativo. Si deja de ser pequeña, el modelo de dos cuerpos ya no basta y hay que pasar a una descripción de varios cuerpos.

## 🔵 Nivel formal

La aceleración mareal de primer orden usa la constante [[G]], la masa perturbadora [[M]], el radio del cuerpo afectado [[R]] y la distancia entre centros [[d]]. Su expresión válida como escala diferencial es:

{{f:aceleracion_mareal}}

Esta relación contiene el criterio didáctico principal: duplicar [[M]] duplica la marea, duplicar [[R]] también la duplica, pero duplicar [[d]] la reduce a una octava parte. La dependencia cúbica permite distinguir una fuerza gravitatoria intensa de una marea intensa.

Para decidir si una acción secundaria puede tratarse como perturbación se introduce el cociente adimensional:

{{f:parametro_perturbativo}}

Si [[eps]] es mucho menor que uno, la aceleración central [[ac]] fija la dinámica dominante y [[ap]] puede estudiarse como corrección. Si [[eps]] se acerca a uno, ya no hay jerarquía clara entre el movimiento principal y la perturbación.

Cuando se comparan dos perturbadores sobre el mismo cuerpo afectado, conviene usar una relación relativa:

{{f:comparacion_perturbadores}}

Aquí [[M1]], [[M2]], [[d1]], [[d2]], [[am1]] y [[am2]] separan el efecto de masa del efecto de distancia. La comparación es especialmente útil para analizar Sol-Luna, satélites de Júpiter, anillos planetarios o resonancias entre cuerpos cercanos.

Al estudiar deformaciones disipativas aparece una escala rotacional:

{{f:torque_mareal_conceptual}}

No es una fórmula cerrada de cálculo directo; indica que un abultamiento mareal con brazo de palanca y desfase puede ejercer un torque [[tau]]. Para cuantificarlo hacen falta elasticidad, viscosidad interna, geometría y fase de la deformación.

La descripción completa de una órbita perturbada exige recordar que las aceleraciones se suman vectorialmente:

{{f:aceleracion_total_conceptual}}

Esta relación evita un error frecuente: no basta con sumar módulos. La dirección de cada perturbación cambia con la posición orbital, por lo que dos acciones pequeñas pueden reforzarse, cancelarse parcialmente o acumular cambios de fase.

## 🔴 Nivel estructural

El modelo mareal de primer orden supone que el cuerpo afectado es pequeño comparado con la distancia al perturbador. En lenguaje físico, [[R]] debe ser mucho menor que [[d]]. Si esa condición falla, el gradiente ya no se representa bien con una sola escala y hay que calcular el campo completo punto a punto. También se asume que el cuerpo afectado no modifica de forma significativa la trayectoria del perturbador durante el intervalo analizado.

La segunda condición estructural es la separación entre causa instantánea y efecto acumulado. Una [[am]] diminuta puede ser irrelevante en una caída corta y, sin embargo, dominar la evolución de rotación de una luna durante millones de años. En problemas de mareas no se debe juzgar solo el valor instantáneo; hay que mirar si la acción se repite con la misma fase, si hay disipación y si el sistema tiene resonancias.

La tercera condición es vectorial. El parámetro [[eps]] da una escala, pero no informa por sí solo de la dirección de [[ap]]. Para predecir precesión, excentricidad o transferencia de energía orbital se necesita geometría. Por eso este leaf combina fórmulas escalares para estimar órdenes de magnitud con una lectura cualitativa de direcciones y acumulación.

## Interpretación física profunda

Las mareas son una prueba de que un campo gravitatorio no se agota en su valor local. Dos observadores muy próximos pueden acelerar casi igual y aun así sentir una diferencia suficiente para estirar un océano o calentar el interior de un satélite. Esa diferencia es pequeña en cada punto, pero organizada a escala planetaria produce patrones macroscópicos.

La física de perturbaciones enseña a pensar por jerarquías. Primero se identifica el movimiento dominante, después se cuantifica la corrección y finalmente se decide si esa corrección es despreciable, acumulativa o destructiva para el modelo simple. Este razonamiento aparece en mecánica celeste, navegación espacial, anillos planetarios, estabilidad de satélites artificiales y evolución de sistemas estelares múltiples.

## Orden de magnitud

En la Tierra, las aceleraciones mareales típicas debidas a la Luna son del orden de microaceleraciones comparadas con la gravedad superficial. Esa pequeñez explica por qué no percibimos la marea como una fuerza cotidiana directa. Sin embargo, al actuar sobre océanos completos y repetirse cada día, produce alturas medibles, corrientes y disipación.

En satélites cercanos a planetas gigantes, el mismo razonamiento cambia de escala. Un radio [[R]] grande, una distancia [[d]] relativamente pequeña y una masa perturbadora [[M]] enorme pueden generar calentamiento interno. Io es el ejemplo clásico: no necesita una fuente radiactiva extraordinaria para mostrar vulcanismo intenso; las mareas y resonancias orbitales suministran energía mecánica que acaba disipándose.

## Método de resolución personalizado

El primer paso es decidir cuál es el cuerpo afectado y cuál es el perturbador. Después se asignan [[M]], [[R]] y [[d]] con unidades SI y se calcula una escala [[am]]. El resultado debe leerse como diferencia de aceleración, no como gravedad total. Si el problema compara dos perturbadores, conviene usar [[M1]], [[M2]], [[d1]] y [[d2]] para evitar cálculos repetidos.

El segundo paso es comparar la perturbación con la dinámica dominante. Para una órbita, se estima [[ac]] y se obtiene [[eps]] con la aceleración secundaria [[ap]]. Si el cociente es pequeño, el modelo de órbita central más perturbación tiene sentido. Si no lo es, la respuesta debe indicar que la aproximación de primer orden no basta.

El tercer paso es interpretar dirección, acumulación y límites. Una perturbación transversal altera fase orbital; una radial modifica energía o excentricidad; una marea con desfase puede generar torque [[tau]]. En cada caso se debe cerrar la solución con una frase física, no solo con un número.

## Casos especiales y ejemplo extendido

Si dos perturbadores tienen masas muy distintas, no se puede elegir el dominante mirando solo [[M1]] y [[M2]]. La comparación correcta exige incorporar [[d1]] y [[d2]] al cubo. Esta es una de las mejores situaciones para detectar comprensión real: quien piensa solo en masa predice mal el origen de la marea dominante.

Si el cuerpo afectado es casi puntual, [[R]] tiende a hacer despreciable la marea interna aunque la aceleración global sea grande. Por eso un satélite pequeño puede moverse bajo una gravedad intensa sin sufrir deformaciones extremas si el gradiente sobre su propio tamaño es moderado.

Si el sistema tiene disipación, el efecto deja de ser puramente geométrico. La deformación no apunta exactamente hacia el perturbador, aparece un desfase y se puede transferir momento angular. Entonces [[tau]] se convierte en la magnitud conceptual que conecta mareas con sincronización rotacional, alejamiento orbital o calentamiento interno.

## Preguntas reales del alumno

¿Por qué el Sol no domina siempre las mareas si tiene mucha más masa? Porque la marea no depende solo de la masa, sino de la variación del campo a través del cuerpo afectado. La distancia entra con una potencia muy fuerte y puede compensar una enorme diferencia de masa.

¿Una perturbación pequeña puede cambiar una órbita real? Sí, si actúa durante mucho tiempo o si aparece en resonancia con el movimiento orbital. La pequeñez de [[eps]] permite aproximar, pero no autoriza a ignorar automáticamente el efecto acumulado.

¿La aceleración mareal apunta siempre hacia el perturbador? No de forma simple. La marea describe diferencias de aceleración dentro del cuerpo; genera estiramiento en una dirección y compresión relativa en otras. En problemas avanzados se necesita descripción tensorial o vectorial.

## Conexiones transversales y rutas de estudio

Este leaf conecta con campo gravitatorio porque una marea es una lectura espacial del campo, no solo de su valor en un punto. También conecta con energía orbital porque las perturbaciones pueden transferir energía, modificar excentricidad o calentar cuerpos mediante disipación interna.

Después de dominar este tema, tiene sentido estudiar resonancias orbitales, estabilidad de satélites, límites de Roche y dinámica de sistemas de tres cuerpos. En todos esos temas aparece la misma pregunta: qué parte del movimiento es central, qué parte es perturbación y cuándo la perturbación deja de ser pequeña.

## Síntesis final

Comprender mareas y perturbaciones significa pasar de una gravitación de cuerpos puntuales a una gravitación con extensión, gradiente, escala y acumulación temporal. El objetivo no es memorizar una expresión aislada, sino aprender a decidir cuándo una atracción externa deforma, corrige una órbita o exige abandonar el modelo ideal.
