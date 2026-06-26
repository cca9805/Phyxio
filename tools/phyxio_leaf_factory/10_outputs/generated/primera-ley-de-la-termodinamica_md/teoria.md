# Primera ley de la termodinamica

## Contexto conceptual

La primera ley de la termodinamica expresa una idea de conservacion: la energia no aparece ni desaparece dentro de un sistema cerrado, solo cambia de forma o cruza la frontera. En este leaf la frontera del sistema es esencial, porque separa lo que pertenece al sistema de lo que pertenece al entorno. [[calor_intercambiado]] y [[trabajo_sobre_sistema]] son formas de transferencia a traves de esa frontera, mientras que [[variacion_energia_interna]] describe lo que cambia dentro del sistema. La pregunta central es como se relacionan esas tres piezas para decidir si el sistema gana energia interna, la pierde o conserva el mismo estado energetico.

## 🟢 Nivel esencial

La primera ley dice que el sistema lleva una contabilidad energetica. Si entra energia por [[calor_intercambiado]] o por [[trabajo_sobre_sistema]], aumenta la energia interna; si sale energia por alguno de esos caminos, disminuye. La clave es no confundir transferencia con contenido: el sistema no contiene calor ni trabajo, contiene energia interna. El calor aparece cuando hay diferencia de temperatura entre sistema y entorno. El trabajo aparece cuando una accion mecanica comprime, expande, mueve o deforma la frontera. [[variacion_energia_interna]] es el resultado final de esa contabilidad. Si el estado final tiene mas energia que el inicial, el cambio es positivo; si tiene menos, es negativo. Por eso siempre hay que fijar primero la convencion de signos y despues sumar las aportaciones del proceso completo.

## 🔵 Nivel formal

En este leaf se adopta la convencion de trabajo realizado sobre el sistema. Con esa convencion, [[calor_intercambiado]] es positivo cuando entra calor y [[trabajo_sobre_sistema]] es positivo cuando el entorno realiza trabajo sobre el sistema. La relacion central es:

{{f:primera_ley_balance}}

Esta formula no dice que el calor o el trabajo esten almacenados. Dice que ambos son mecanismos de transferencia que modifican la energia interna. La energia interna, en cambio, si es una funcion de estado. Por eso su variacion se define comparando el estado final con el inicial:

{{f:definicion_variacion_energia_interna}}

La consecuencia es que [[variacion_energia_interna]] depende de [[energia_interna_final]] y [[energia_interna_inicial]], pero no del camino. Dos procesos distintos pueden tener el mismo cambio interno aunque repartan de forma diferente [[calor_intercambiado]] y [[trabajo_sobre_sistema]]. En un proceso adiabatico no hay transferencia de calor apreciable, de modo que el balance se reduce a:

{{f:proceso_adiabatico}}

La lectura formal completa exige tres comprobaciones: todas las magnitudes deben tener unidades de energia, la convencion de signo debe ser unica y el sistema debe ser cerrado para que no falten terminos asociados al transporte de materia. Tambien exige distinguir datos de estado y datos de proceso antes de despejar cualquier magnitud.

## 🔴 Nivel estructural

La primera ley en esta forma se apoya en varias hipotesis. La primera es que el sistema es cerrado: no entra ni sale materia. Si entra vapor, combustible, aire o liquido, tambien entra energia transportada por esa masa, y el balance simple deja de estar completo. La segunda hipotesis es que todas las transferencias relevantes se han clasificado como [[calor_intercambiado]] o [[trabajo_sobre_sistema]]. En una maquina real puede haber energia electrica, trabajo de eje, expansion, rozamiento o perdidas termicas; cada contribucion debe traducirse al balance con el signo adecuado.

El invariante fisico es la conservacion de la energia. Lo que cambia de un problema a otro es el reparto entre transferencia termica, transferencia mecanica y acumulacion interna. [[variacion_energia_interna]] es una propiedad de estado: si [[energia_interna_final]] y [[energia_interna_inicial]] son los mismos, su valor queda fijado aunque el proceso haya sido lento, rapido, reversible o irreversible. En cambio, [[calor_intercambiado]] y [[trabajo_sobre_sistema]] dependen del camino. Un gas puede llegar al mismo estado final recibiendo mucho calor y realizando trabajo, o recibiendo poco calor y siendo comprimido de otra manera.

Los limites aparecen cuando la frontera del sistema no esta bien definida, cuando el proceso no es cerrado o cuando se mezcla la convencion de trabajo. En muchos libros se usa trabajo hecho por el sistema; entonces el signo delante del trabajo cambia. Este leaf usa trabajo sobre el sistema, por eso una compresion aumenta la energia interna si no se compensa con salida de calor. En el DCL energetico, la lectura grafica debe mostrar flechas que cruzan la frontera: las entrantes suman, las salientes restan, y el resultado queda dentro como cambio de energia interna. Si la suma neta es cero, el sistema puede haber intercambiado mucha energia, pero termina con la misma energia interna.

Los casos frontera son instructivos. En un ciclo completo, [[energia_interna_final]] coincide con [[energia_interna_inicial]], por tanto [[variacion_energia_interna]] es nula. En un proceso adiabatico, [[calor_intercambiado]] se desprecia y el cambio interno procede del trabajo. En un recipiente rigido, el trabajo de expansion puede ser nulo, y el calor se refleja directamente en la energia interna. Esos limites guian la lectura del modelo.

## Interpretación física profunda

La energia interna representa la energia microscopica asociada al estado del sistema: agitacion molecular, enlaces, interacciones y configuraciones internas. La primera ley no obliga a conocer todos esos detalles microscopicos; basta con medir cuanto entra y sale por la frontera. [[calor_intercambiado]] no es una sustancia que fluye, sino una transferencia causada por diferencia de temperatura. [[trabajo_sobre_sistema]] tampoco es contenido interno, sino transferencia mecanica organizada. La potencia de la ley esta en que convierte procesos muy distintos en una misma contabilidad. Calentar un gas, comprimirlo con un piston o dejarlo expandirse son acciones diferentes, pero todas se traducen en el cambio de [[variacion_energia_interna]] cuando el sistema esta bien elegido.

## Orden de magnitud

En un laboratorio, calentar 100 g de agua unos pocos grados implica [[calor_intercambiado]] del orden de miles de julios. Comprimir aire lentamente en una jeringa puede implicar [[trabajo_sobre_sistema]] de decenas a cientos de julios. En motores, calderas o turbinas, las escalas suben a kJ o MJ. Un resultado de [[variacion_energia_interna]] de 1 J en una caldera industrial seria sospechosamente pequeno; un resultado de 1 MJ en una muestra pequena de gas de aula seria excesivo.

## Método de resolución personalizado

Primero define el sistema y dibuja su frontera. Despues fija la convencion: aqui [[calor_intercambiado]] y [[trabajo_sobre_sistema]] son positivos si entran al sistema. Tercero, clasifica cada dato del enunciado como transferencia termica, transferencia mecanica o energia de estado. Cuarto, convierte todas las unidades a julios antes de operar. Quinto, aplica el balance adecuado y solo al final interpreta el signo de [[variacion_energia_interna]]. Si el resultado contradice la intuicion fisica, revisa signos, unidades y si el sistema realmente era cerrado.

## Casos especiales y ejemplo extendido

En un proceso adiabatico, el aislamiento termico hace que [[calor_intercambiado]] sea despreciable. Si se comprime un gas en esas condiciones, [[trabajo_sobre_sistema]] positivo aumenta su energia interna y normalmente su temperatura. En un proceso a volumen constante, el trabajo de expansion puede ser cero; entonces el calor que entra se manifiesta como aumento de energia interna. En un ciclo, como un motor que vuelve al mismo estado tras cada vuelta, [[energia_interna_final]] y [[energia_interna_inicial]] coinciden. Puede entrar calor y salir trabajo, pero el cambio interno neto al cerrar el ciclo es cero. Esa idea permite analizar maquinas sin imaginar que acumulan energia indefinidamente.

## Preguntas reales del alumno

**Si entra calor, siempre sube la temperatura?** No siempre. Puede entrar [[calor_intercambiado]] y al mismo tiempo el sistema realizar trabajo hacia el entorno, de modo que parte de la energia no queda como energia interna.

**Por que el trabajo cambia de signo en otros libros?** Porque algunos textos definen positivo el trabajo hecho por el sistema. Este leaf usa [[trabajo_sobre_sistema]], positivo cuando el entorno trabaja sobre el sistema.

**Puede [[variacion_energia_interna]] ser cero aunque haya calor?** Si. En un ciclo o en un proceso donde el calor que entra se compensa con trabajo que sale, el estado interno final puede coincidir con el inicial.

## Conexiones transversales y rutas de estudio

Esta ley conecta con el trabajo de expansion, los procesos adiabaticos, los ciclos termicos y la energia interna de gases ideales. Tambien prepara la segunda ley, porque conservar energia no basta para decidir que procesos son posibles espontaneamente. Primero se aprende la contabilidad; despues se estudia la direccion natural de los procesos.

## Síntesis final

La primera ley es la contabilidad energetica de un sistema cerrado. [[calor_intercambiado]] y [[trabajo_sobre_sistema]] cruzan la frontera; [[variacion_energia_interna]] queda como resultado interno. Entender signos, unidades y frontera del sistema es entender la ley.
