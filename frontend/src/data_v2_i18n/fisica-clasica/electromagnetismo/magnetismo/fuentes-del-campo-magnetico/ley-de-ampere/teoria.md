## Contexto conceptual

La **ley de Ampere** conecta una idea geometrica con una causa fisica: la circulacion del campo magnetico alrededor de una curva cerrada revela cuanta corriente atraviesa la superficie encerrada. No pregunta por un punto aislado del espacio, sino por una vuelta completa alrededor de las fuentes.

Dentro del magnetismo, esta ley es el puente entre corriente electrica y campo magnetico cuando existe simetria suficiente. Permite obtener [[campo_magnetico]] de forma directa en hilos rectos largos, solenoides y toroides, y tambien enseña cuando una integral cerrada no basta para resolver el problema.

## 🟢 Nivel esencial

Imagina rodear un cable con una circunferencia invisible. Si por el cable circula corriente, el campo magnetico se organiza en vueltas alrededor de el. La ley de Ampere dice que la suma orientada de ese campo a lo largo de la circunferencia depende de la corriente que atraviesa el interior de la curva.

La magnitud clave no es solo [[campo_magnetico]], sino la circulacion [[circulacion_magnetica]]. Esa circulacion mide si el campo acompaña el recorrido elegido o se opone a el. La corriente encerrada [[corriente_encerrada]] funciona como fuente neta: corrientes que atraviesan la superficie en sentidos opuestos pueden compensarse.

La idea esencial es rodear la fuente correcta, no perseguir valores sueltos de campo. Por eso una curva bien elegida convierte un problema espacial en una lectura global. Si la curva acompaña la forma natural del campo, todos los tramos hablan el mismo idioma fisico. Si la curva se elige sin criterio, la ley sigue siendo cierta, pero deja de ser una herramienta directa de calculo.

> [!NOTE]
> La curva amperiana no es un cable real. Es una trayectoria mental elegida para aprovechar la simetria del problema.

## 🔵 Nivel formal

La forma integral de la ley relaciona la circulacion de [[campo_magnetico]] con la corriente neta encerrada por la curva:

{{f:ampere_integral}}

Aqui [[dl]] representa un elemento orientado de la curva cerrada y [[mu0]] es la permeabilidad magnetica del vacio que sirve de constante de acoplamiento. Si [[campo_magnetico]] es tangente a la curva y tiene modulo constante sobre ella, la integral se simplifica. Esa es la razon por la que la ley es tan potente en problemas con simetria cilindrica o traslacional.

Para un hilo recto largo con corriente [[corriente_del_conductor]], se elige una circunferencia de radio [[radio_amperiano]] centrada en el hilo. Por simetria, [[campo_magnetico]] es tangente y constante sobre esa circunferencia:

{{f:campo_hilo_ampere}}

El resultado expresa que alejarse del hilo reduce el campo de forma inversa a la distancia. En un solenoide largo, la trayectoria amperiana se elige como un rectangulo que atraviesa el interior y el exterior. La contribucion exterior se desprecia en el modelo ideal y aparece:

{{f:campo_solenoide_largo}}

Estas tres relaciones no son recetas desconectadas. La primera es la ley general magnetostatica; las otras dos son consecuencias cuando la geometria permite evaluar la integral sin conocer cada punto del campo.

La lectura formal exige comprobar siempre que la longitud usada pertenece a la misma curva donde [[campo_magnetico]] mantiene la simetria asumida. Tambien exige fijar una orientacion antes de asignar signos a la corriente encerrada.

## 🔴 Nivel estructural

La estructura profunda de la ley de Ampere tiene tres capas. La primera es **topologica**: la curva cerrada encierra o no encierra corriente neta. La segunda es **geometrica**: la forma de la curva debe coincidir con la simetria del campo. La tercera es **fisica**: la corriente encerrada [[corriente_encerrada]] es la fuente de la circulacion [[circulacion_magnetica]].

Esta organizacion explica por que la ley puede ser verdadera y, aun asi, no resolver un problema de forma directa. Si [[campo_magnetico]] cambia de modulo o de direccion a lo largo de la trayectoria, la integral no se convierte en un producto simple. En ese caso, Ampere sigue imponiendo una condicion global, pero no determina por si sola el campo local.

> [!WARNING]
> Elegir una curva arbitraria suele ocultar el problema. La curva amperiana debe hacer que [[campo_magnetico]] sea tangente, nulo o constante por tramos; si no ocurre eso, la ley no produce un calculo simple.

Tambien hay que distinguir corriente encerrada de corriente cercana. Una corriente exterior a la curva puede modificar el campo en puntos de la trayectoria, pero no cambia la corriente neta que atraviesa la superficie. Por eso [[circulacion_magnetica]] puede ser cero aunque existan campos locales no nulos.

En campos variables en el tiempo aparece el limite conceptual de esta version. La forma magnetostatica se corrige con el termino de corriente de desplazamiento de Maxwell. Esa ampliacion permite que la ley sea compatible con capacitores cargandose y con ondas electromagneticas.

Por eso la estructura del leaf no es solo algebraica: primero se decide la fuente encerrada, despues la simetria de la curva y finalmente el dominio fisico donde el modelo puede usarse.

## Interpretación física profunda

La ley de Ampere no dice simplemente que la corriente produce campo. Dice que la corriente produce una **circulacion magnetica orientada**. Esa palabra es esencial: el campo magnetico alrededor de una corriente no apunta radialmente hacia ella, sino que gira alrededor de la fuente.

El signo de [[corriente_encerrada]] depende de la orientacion elegida para la curva. Si inviertes el sentido del recorrido, cambia el signo de [[circulacion_magnetica]]. Esto no cambia el montaje fisico; cambia la convencion usada para describirlo. La regla de la mano derecha conecta ambas elecciones.

> [!TIP]
> Antes de calcular, dibuja la curva y fija su sentido. Luego decide que corrientes atraviesan la superficie positiva asociada a esa orientacion.

## Orden de magnitud

Un cable recto con corriente de 10 A produce a 1 cm un campo del orden de decimas de militesla. A 10 cm, el campo cae aproximadamente diez veces. Esta escala es razonable para conductores de laboratorio y comparable con campos de pequenos electroimanes.

Un solenoide con [[densidad_de_espiras]] de 1000 espiras por metro y corriente de 2 A produce un campo interior del orden de militeslas. Un resultado de varios teslas para un solenoide escolar sin nucleo ferromagnetico suele ser absurdo; normalmente indica que se uso mal [[densidad_de_espiras]], [[corriente_del_conductor]] o las unidades de longitud.

## Método de resolución personalizado

1. Identifica si el problema pide [[circulacion_magnetica]], [[campo_magnetico]], [[campo_de_solenoide_largo]] o [[corriente_encerrada]].
2. Dibuja una curva cerrada y marca su orientacion.
3. Decide que corrientes atraviesan la superficie limitada por esa curva.
4. Comprueba si la simetria permite sacar [[campo_magnetico]] de la integral.
5. Si no hay simetria suficiente, usa Ampere como condicion global, no como formula directa de campo.

El orden evita sustituir datos antes de saber que encierra la curva. En Ampere, la geometria de la trayectoria es parte del modelo fisico, no un adorno del dibujo.

## Casos especiales y ejemplo extendido

El primer caso limite es una curva que no encierra corriente neta. La circulacion total [[circulacion_magnetica]] es nula, pero eso no obliga a que [[campo_magnetico]] sea cero en todos los puntos. Puede haber contribuciones locales que se compensan al recorrer la curva completa.

El segundo caso es el solenoide largo. Dentro, las contribuciones de muchas espiras se refuerzan y el campo es casi uniforme. Fuera, se cancelan parcialmente y el campo exterior ideal se desprecia. Esta separacion no es exacta cerca de los extremos.

Ejemplo extendido: un hilo recto muy largo transporta 5 A. A una distancia de 2 cm, una curva circular centrada en el hilo encierra toda la corriente. La simetria permite leer que [[campo_magnetico]] es tangente y constante. El campo resultante queda del orden de decenas de microteslas, comparable al campo terrestre. Si duplicas [[radio_amperiano]], el campo se reduce a la mitad.

## Preguntas reales del alumno

**¿La ley de Ampere sustituye a Biot-Savart?** No. Ampere es mas rapida cuando hay simetria; Biot-Savart es mas general para geometria complicada.

**¿Por que se usa una curva cerrada?** Porque la ley mide circulacion completa alrededor de corriente encerrada, no campo en un punto aislado.

**¿Una corriente fuera de la curva no importa?** No cambia [[corriente_encerrada]], pero puede contribuir al campo local sobre la trayectoria. La ley habla de circulacion neta.

**¿Por que en el solenoide se ignora el exterior?** Porque el modelo largo ideal hace que el campo exterior sea mucho menor que el interior. En solenoides reales hay bordes y fugas.

## Conexiones transversales y rutas de estudio

Este leaf conecta hacia atras con [Campo magnetico](leaf:fisica-clasica/electromagnetismo/magnetismo/campo-magnetico) y con [Ley de Biot-Savart](leaf:fisica-clasica/electromagnetismo/magnetismo/fuentes-del-campo-magnetico/ley-de-biot-savart). Ambas preparan la idea de que corrientes y geometria determinan el campo.

Hacia adelante conecta con materiales magneticos, solenoides reales, inductancia y ecuaciones de Maxwell. La ruta natural es estudiar primero campo magnetico, luego fuentes del campo, despues Ampere y finalmente la correccion de Maxwell para campos variables.

## Síntesis final

La ley de Ampere relaciona la circulacion [[circulacion_magnetica]] de [[campo_magnetico]] con la corriente encerrada [[corriente_encerrada]]. Su potencia aparece cuando la simetria permite elegir una curva amperiana adecuada. En hilos largos y solenoides da resultados directos; en geometria compleja sigue siendo una condicion global de consistencia magnetostatica.