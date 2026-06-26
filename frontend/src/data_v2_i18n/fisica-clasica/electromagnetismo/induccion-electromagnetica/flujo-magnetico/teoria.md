## Contexto conceptual

El **flujo magnetico** traduce una idea geometrica: no basta saber cuan intenso es el campo, tambien importa cuanta superficie atraviesa y con que orientacion. Por eso [[flujo_magnetico]] conecta campo magnetico, area y direccion en una sola lectura fisica.

Este leaf esta dentro de induccion electromagnetica porque la ley de Faraday no responde solo a la existencia de campo, sino al **cambio de flujo**. Comprender [[flujo_magnetico]] permite entender por que una bobina girando, un iman acercandose o una superficie deformandose pueden producir efectos electricos.

## 🟢 Nivel esencial

Imagina una ventana atravesada por lluvia oblicua. Si la ventana mira de frente a la lluvia, entra mucha agua; si la giras hasta ponerla casi paralela a la lluvia, entra muy poca. El flujo magnetico funciona de forma parecida: mide cuanto campo atraviesa una superficie, no solo si hay campo cerca.

La magnitud central es [[flujo_magnetico]]. Crece cuando aumenta [[campo_magnetico_uniforme]], cuando aumenta [[area_de_la_superficie]] o cuando la superficie se orienta mejor frente al campo. La orientacion se resume mediante [[cos_theta]], que distingue cruce frontal, cruce oblicuo y campo tangente.

La lectura esencial consiste en separar **presencia de campo** y **paso efectivo** por la superficie. Esa separacion evita tratar cualquier campo cercano como si ya generara flujo relevante.

> [!NOTE]
> Un campo intenso puede producir poco flujo si no atraviesa la superficie. La palabra clave es **atravesar**, no simplemente estar presente.

## 🔵 Nivel formal

Para una superficie plana en un campo uniforme, el flujo se calcula combinando tres factores: modulo del campo [[campo_magnetico_uniforme]], area efectiva [[area_de_la_superficie]] y factor de orientacion [[cos_theta]]. La relacion declarativa del leaf es:

{{f:flujo_uniforme}}

La misma lectura puede separarse en una componente normal del campo. Esta forma es util porque muestra que la parte tangente de [[campo_magnetico_uniforme]] no contribuye a [[flujo_magnetico]]:

{{f:componente_normal}}

Cuando la superficie esta orientada para cruce perpendicular positivo, el factor de orientacion toma su valor maximo y aparece una escala de referencia:

{{f:flujo_maximo}}

Esa escala no siempre coincide con el flujo real. Sirve para comparar si el flujo es pequeno por campo debil, por area reducida o por mala orientacion. En problemas de induccion, lo decisivo no es solo el valor de [[flujo_magnetico]], sino la diferencia entre dos estados:

{{f:variacion_flujo}}

El signo de [[variacion_de_flujo_magnetico]] conserva informacion fisica: indica si el flujo aumenta o disminuye respecto a la normal elegida. Esa informacion prepara la lectura de la ley de Lenz.

> [!NOTE]
> Las cuatro relaciones no son recetas independientes. [[flujo_maximo]] fija la escala, [[componente_normal_del_campo]] traduce la orientacion, [[flujo_magnetico]] da el acoplamiento real y [[variacion_de_flujo_magnetico]] compara estados. Ese orden evita confundir flujo grande con cambio de flujo.

## 🔴 Nivel estructural

El flujo magnetico organiza tres capas del problema. La primera es la **escala local** del campo, representada por [[campo_magnetico_uniforme]]. La segunda es la **escala geometrica**, representada por [[area_de_la_superficie]]. La tercera es la **orientacion**, representada por [[cos_theta]] o por la componente [[componente_normal_del_campo]]. Si una de estas capas falla, el flujo puede ser pequeno aunque las otras parezcan grandes.

Esta estructura explica por que [[flujo_magnetico]] no es una propiedad del campo solo, ni de la superficie sola. Es una propiedad del acoplamiento entre ambos. Cambiar la normal de la superficie invierte el signo, pero no cambia el montaje fisico; cambia la convencion de lectura. Por eso dos alumnos pueden obtener signos opuestos si eligieron normales opuestas, y ambos resultados pueden ser consistentes si lo declaran.

La forma uniforme es una aproximacion. Si el campo cambia mucho de un punto a otro, dividir la superficie en parches pequenos y sumar aportes locales es conceptualmente mas correcto. En ese caso, [[componente_normal_del_campo]] deja de ser un unico numero global y pasa a depender de la posicion. El flujo sigue siendo la suma orientada de cruces, pero ya no se reduce a un producto simple.

> [!WARNING]
> El modelo simple deja de ser fiable con campos no uniformes, superficies curvas sin normal unica o areas que cambian durante el proceso. En esos casos, [[flujo_magnetico]] debe leerse como una acumulacion de contribuciones locales.

El papel estructural de [[variacion_de_flujo_magnetico]] es distinto: no mide acoplamiento instantaneo, sino **cambio entre estados**. Una bobina puede tener gran [[flujo_magnetico]] y no inducir nada si el flujo permanece constante. En cambio, un cambio pequeno pero rapido puede ser decisivo en el leaf de Faraday.

## Interpretación física profunda

El flujo es una magnitud escalar con signo porque condensa una relacion orientada. Su signo no significa que el campo sea negativo en si mismo; significa que el campo atraviesa la superficie segun o contra la normal elegida. Esta distincion evita confundir convencion matematica con causa fisica.

La orientacion es el punto mas sutil. El area real puede ser grande, pero el area proyectada frente al campo puede ser pequena. Esa diferencia es lo que representa [[cos_theta]]. En una bobina giratoria, el area fisica no cambia, pero el flujo si cambia porque cambia la proyeccion.

> [!TIP]
> Antes de calcular, dibuja la normal de la superficie. Si no sabes hacia donde apunta la normal, no sabes interpretar el signo de [[flujo_magnetico]].

## Orden de magnitud

En un iman de laboratorio con [[campo_magnetico_uniforme]] cercano a 0.1 T y una espira de [[area_de_la_superficie]] cercana a 0.01 m², el flujo maximo esta alrededor de una milesima de weber. En el campo terrestre, con campo del orden de decenas de microteslas, la misma area produce un flujo miles de veces menor.

Un resultado de varios webers en una espira pequena de aula suele ser absurdo salvo que el campo sea extraordinariamente intenso o el area muy grande. Revisar [[campo_magnetico_uniforme]], [[area_de_la_superficie]] y [[cos_theta]] permite detectar el error.

## Método de resolución personalizado

1. Identifica si el problema pide [[flujo_magnetico]], [[componente_normal_del_campo]], [[flujo_maximo]] o [[variacion_de_flujo_magnetico]].
2. Dibuja la superficie y marca una normal.
3. Decide si el campo es uniforme; si no lo es, no uses el modelo simple sin justificarlo.
4. Usa [[campo_magnetico_uniforme]], [[area_de_la_superficie]] y [[cos_theta]] solo si describen la misma region fisica.
5. Si hay dos estados, calcula conceptualmente [[flujo_inicial]] y [[flujo_final]] antes de interpretar [[variacion_de_flujo_magnetico]].

El orden evita el error comun de sustituir numeros antes de entender la orientacion. En flujo magnetico, el dibujo no es decorativo: define el signo.

## Casos especiales y ejemplo extendido

El primer caso limite es campo tangente a la superficie. Aunque [[campo_magnetico_uniforme]] sea grande y [[area_de_la_superficie]] sea apreciable, [[componente_normal_del_campo]] es nulo y el flujo tambien. Este caso explica por que orientar una bobina puede apagar o maximizar el acoplamiento magnetico sin cambiar el iman.

El segundo caso limite es inversion de la normal. El valor absoluto de [[flujo_magnetico]] no cambia, pero el signo se invierte. Esto no altera la energia del montaje; altera la convencion que usara Faraday para asignar signo a la fem inducida.

Ejemplo extendido: una espira de area 0.020 m² se coloca en un campo de 0.30 T. Con cruce perpendicular, [[flujo_maximo]] es de 0.006 Wb. Si la espira gira hasta que el factor de orientacion vale 0.5, el flujo real queda en 0.003 Wb. Si luego pasa a orientacion tangente, [[flujo_final]] queda nulo y [[variacion_de_flujo_magnetico]] tiene modulo de 0.003 Wb respecto al estado anterior.

## Preguntas reales del alumno

**¿El flujo es lo mismo que el campo magnetico?** No. [[campo_magnetico_uniforme]] describe intensidad local; [[flujo_magnetico]] combina campo, area y orientacion.

**¿Por que aparece signo si el area no es negativa?** Porque la superficie tiene una normal elegida. El campo puede cruzar con esa normal o contra ella.

**¿Una superficie mas grande siempre da mas flujo?** Solo si el campo atraviesa esa superficie con orientacion efectiva. Si el campo es tangente, aumentar [[area_de_la_superficie]] no aumenta [[flujo_magnetico]].

**¿Por que importa [[variacion_de_flujo_magnetico]]?** Porque la induccion electromagnetica responde al cambio de flujo. Un flujo constante, aunque sea grande, no basta para producir induccion.

## Conexiones transversales y rutas de estudio

Este leaf prepara [Ley de Faraday](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/ley-de-faraday), donde [[variacion_de_flujo_magnetico]] se relaciona con fem inducida. Tambien conecta con [Ley de Lenz](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/ley-de-lenz), porque el signo del cambio de flujo fija la oposicion inducida.

La ruta natural es estudiar primero campo magnetico, despues flujo magnetico, luego Faraday y finalmente aplicaciones como generadores y transformadores. Asi se evita memorizar formulas sin comprender la geometria que las sostiene.

## Síntesis final

El flujo magnetico [[flujo_magnetico]] mide el acoplamiento orientado entre campo y superficie. Depende de [[campo_magnetico_uniforme]], [[area_de_la_superficie]] y [[cos_theta]], se interpreta mediante la componente [[componente_normal_del_campo]] y se compara con [[flujo_maximo]] para leer orientacion. En induccion, la magnitud decisiva es [[variacion_de_flujo_magnetico]], porque lo que produce efectos electricos es el cambio de flujo.