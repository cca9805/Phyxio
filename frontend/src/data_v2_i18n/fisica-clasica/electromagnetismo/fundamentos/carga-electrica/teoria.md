## Contexto conceptual

La carga eléctrica es la propiedad fundamental que hace que la materia interactúe electromagnéticamente. Sin carga eléctrica no existiría la ley de Coulomb, ni el campo eléctrico, ni los circuitos, ni la luz como onda electromagnética. Todo el edificio del electromagnetismo se sostiene sobre esta propiedad.

En la estructura del árbol de física de Phyxio, la carga eléctrica abre el bloque de electromagnetismo porque actúa como el punto de partida conceptual: antes de hablar de fuerzas, campos o potenciales, hay que entender qué propiedad de la materia origina esos efectos. La carga es a la electricidad lo que la masa es a la gravedad: la causa última.

La carga eléctrica también es especial porque posee dos rasgos que no comparten otras magnitudes físicas clásicas: es **cuantizada** (solo existe en múltiplos discretos de un valor mínimo) y es **conservada** (la carga total de un sistema aislado nunca cambia). Estas dos propiedades definen el comportamiento eléctrico de la materia desde la escala atómica hasta la de los circuitos de alta potencia.

## 🟢 Nivel esencial

La carga eléctrica es la razón por la que ciertas partículas se atraen o se repelen entre sí. Hay dos tipos: positiva (protones) y negativa (electrones). Dos cargas del mismo tipo se repelen; dos de tipos contrarios se atraen.

Un objeto cotidiano es **eléctricamente neutro** porque tiene el mismo número de protones y electrones. Cuando frotas un globo contra la lana, el globo gana electrones y queda con [[carga_electrica]] negativa; la lana pierde electrones y queda con [[carga_electrica]] positiva. La carga total del sistema (globo más lana) no ha cambiado: simplemente se ha redistribuido.

La carga eléctrica no puede crearse ni destruirse: solo transferirse. Y se transfiere siempre en paquetes discretos de tamaño mínimo [[carga_elemental]], la carga del protón. El [[numero_de_cargas_elementales]] de paquetes transferidos es siempre un número entero exacto.

## 🔵 Nivel formal

La cuantización de la carga establece que toda carga observable es un múltiplo entero de la carga elemental [[carga_elemental]]. Para un objeto con [[numero_de_cargas_elementales]] cargas elementales:

{{f:cuantizacion_carga}}

Aquí [[carga_electrica]] es la carga total, [[numero_de_cargas_elementales]] es un número entero (positivo para déficit de electrones, negativo para exceso) y [[carga_elemental]] es la carga del protón, aproximadamente 1.602 por diez elevado a menos diecinueve culombios.

Esta fórmula permite resolver dos tipos de problemas: dado [[numero_de_cargas_elementales]], calcular [[carga_electrica]]; dado [[carga_electrica]] medida, determinar cuántos electrones han sido transferidos despejando [[numero_de_cargas_elementales]]. El primer rearrangement es directo; el segundo exige que el cociente dé entero exacto, lo que sirve como verificación de coherencia física.

Para sistemas con múltiples objetos cargados, la carga neta se obtiene como suma algebraica de todas las cargas parciales:

{{f:carga_neta_sistema}}

La clave aquí es que [[q_pos]] y [[q_neg]] se suman con sus signos: la carga positiva contribuye con signo positivo y la carga negativa con signo negativo. Sumar los módulos y luego asignar signo es el error más frecuente. En un sistema aislado, [[q_neta]] antes de cualquier proceso debe ser igual a [[q_neta]] después: esa es la conservación de la carga.

Las dos fórmulas no son independientes. La cuantización dice que cada aportación individual a [[q_pos]] o [[q_neg]] es un múltiplo de [[carga_elemental]]; la carga neta del sistema es, por tanto, también múltiplo de [[carga_elemental]].

## 🔴 Nivel estructural

La cuantización de la carga es un hecho empírico descubierto por Millikan en 1909: midió la carga de miles de gotas de aceite y comprobó que todas eran múltiplos de un mismo valor mínimo. La cuantización fue observada antes de que la mecánica cuántica la explicara.

En la física moderna, los quarks tienen cargas fraccionarias de [[carga_elemental]] (un tercio y dos tercios), pero nunca se observan libres: están confinados en hadrones con carga total entera. Este confinamiento preserva la cuantización en múltiplos enteros de [[carga_elemental]] a escala macroscópica.

La **conservación de la carga** es una ley local: la carga no puede desaparecer en un punto y aparecer en otro sin un flujo de carga entre ambos. Esta versión local se expresa mediante la ecuación de continuidad y fundamenta la ley de Kirchhoff de corrientes: en todo nodo de un circuito, la corriente neta entrante es cero.

> [!WARNING]
> La neutralidad eléctrica no implica ausencia de cargas internas. Un objeto neutro puede tener cargas positivas en una región y negativas en otra, generando un campo dipolar intenso a corta distancia. Es la base del enlace iónico y la polarización dieléctrica.

La unidad SI de carga es el **culombio (C)**: desde 2019 se define como la carga transportada por 1 A durante 1 s, ligando [[carga_electrica]] con la corriente. La corriente es la tasa de flujo de carga, no la carga misma.

Otra implicación estructural: la carga eléctrica es un **invariante relativista**: todos los observadores miden la misma [[carga_electrica]] para un objeto, independientemente de su velocidad relativa. Esto contrasta con la masa o la longitud, que dependen del sistema de referencia.

## Interpretación física profunda

La materia es **eléctricamente discreta**: la carga parece continua a escala macroscópica porque un microcoulombio equivale a unos seis billones de cargas elementales, y la granularidad resulta indetectable.

La conservación de la carga no es solo un dato empírico: en la física teórica moderna se deriva del **teorema de Noether** aplicado a la invarianza de gauge del campo cuántico. La simetría profunda y la ley de conservación son dos caras del mismo fenómeno.

> [!NOTE]
> Cuando dos objetos neutros se frotan, ninguna carga se crea: los electrones migran de uno al otro. La suma algebraica de [[carga_electrica]] del sistema sigue siendo cero.

## Orden de magnitud

La carga elemental [[carga_elemental]] es aproximadamente 1.6 por diez elevado a menos diecinueve culombios; un rayo descarga entre 1 y 5 culombios; un condensador pequeño de laboratorio almacena entre 1 y 100 microcoulombios.

Para objetos electrizados por fricción cotidiana, la carga es del orden de nanocoulombios a microcoulombios. Un resultado de culombios para un globo frotado es absurdo: equivaldría a la descarga de un rayo. Un nanocoulombio corresponde a unos seis mil millones de cargas elementales; para laboratorio de bachillerato, el rango razonable está entre decenas de nanocoulombios y algunas decenas de microcoulombios.

## Método de resolución personalizado

Al resolver problemas de carga eléctrica, seguir esta secuencia:

1. **Identificar el sistema**: delimitar qué objetos forman el sistema y si está aislado.
2. **Inventariar las cargas**: listar [[q_pos]] y [[q_neg]] de cada objeto con sus signos correctos.
3. **Aplicar conservación**: [[q_neta]] del sistema es constante si está aislado; usar eso para obtener incógnitas.
4. **Aplicar cuantización si se pide [[numero_de_cargas_elementales]]**: dividir [[carga_electrica]] entre [[carga_elemental]] y verificar que el resultado es entero.
5. **Revisar la escala**: comprobar que el orden de magnitud del resultado es razonable para el contexto físico del problema.

El paso 4 actúa como validación automática: si [[numero_de_cargas_elementales]] no es entero, hay error en los datos o en las unidades.

## Casos especiales y ejemplo extendido

**Caso 1 — Electrización por inducción**: Un objeto cargado acerca a un conductor neutro sin contacto. Los electrones del conductor se redistribuyen internamente: si el objeto cargado es positivo, los electrones del conductor migran hacia el lado más próximo (carga negativa inducida en ese lado, positiva en el lado opuesto). La carga neta del conductor sigue siendo cero, pero ya no está uniformemente distribuida. Si en ese momento se pone a tierra el conductor (se proporciona un camino para que los electrones fluyan hacia tierra), la mitad inducida puede salir y el conductor queda cargado negativamente aunque nunca haya contacto directo.

**Caso 2 — Distribución de carga entre conductores en contacto**: Cuando dos conductores con cargas distintas se ponen en contacto, la carga se redistribuye hasta que el potencial eléctrico es igual en ambos. La carga neta total se conserva; la distribución final depende de las geometrías y capacidades de los conductores. Para dos esferas iguales, la distribución final es equitativa.

**Caso 3 — Neutralización**: Si un objeto con [[carga_electrica]] positiva y otro con [[carga_electrica]] negativa del mismo módulo se ponen en contacto, los electrones del objeto negativo fluyen hacia el positivo hasta que ambos quedan neutros. La carga total del sistema sigue siendo cero: ninguna carga se destruyó.

## Preguntas reales del alumno

**¿Por qué los electrones son los que se transfieren y no los protones?**

Los protones están ligados en el núcleo atómico con energías del orden de millones de electrónvoltios. Arrancarlos requiere reacciones nucleares. Los electrones de las capas externas, en cambio, están ligados con apenas pocos electrónvoltios y pueden transferirse fácilmente por contacto o fricción. En física de sólidos, son los electrones de conducción los que se mueven; los núcleos están fijos en la red cristalina.

**Si froto un globo y queda con [[carga_electrica]] negativa, ¿de dónde vienen los electrones extra?**

De la tela o la superficie con la que frotas. En el proceso de fricción, los electrones de la superficie de la tela migran al globo porque este material tiene mayor afinidad electrónica. La tela queda con déficit de electrones (carga positiva) y el globo con exceso (carga negativa). La carga total del sistema (globo más tela) permanece cero.

**¿Puede una partícula tener media carga elemental?**

Los quarks tienen cargas de un tercio y dos tercios de [[carga_elemental]], pero nunca se observan libres: el confinamiento de color de la cromodinámica cuántica impide extraerlos de los hadrones. A escala macroscópica y en toda la física clásica, la respuesta es no: la carga mínima observable en partículas libres es [[carga_elemental]].

**¿Por qué los metales conducen mejor la electricidad si todos los átomos tienen el mismo número de protones y electrones?**

En los metales, los electrones de las capas externas (de valencia) no están ligados a ningún átomo en particular sino que forman una "nube" de electrones libres compartida por toda la red. Cuando se aplica un campo eléctrico, esos electrones libres responden moviéndose colectivamente: eso es la corriente. En aislantes, todos los electrones están fuertemente ligados a sus átomos y no pueden moverse libremente.

## Conexiones transversales y rutas de estudio

La carga eléctrica conecta directamente con la [ley de Coulomb](leaf:fisica-clasica/electromagnetismo/fundamentos/ley-de-coulomb): [[carga_electrica]] es el factor que determina la fuerza entre objetos cargados. El siguiente paso natural es el [campo eléctrico](leaf:fisica-clasica/electromagnetismo/fundamentos/campo-electrico), donde [[carga_electrica]] actúa como factor de proporcionalidad entre campo y fuerza sobre una partícula de prueba.

En electromagnetismo avanzado, [[carga_electrica]] es la fuente del campo eléctrico en la ley de Gauss, y la corriente (flujo de [[carga_electrica]]) es la fuente del campo magnético. Comprender [[carga_electrica]] es comprender las fuentes de todos los campos electromagnéticos.

## Síntesis final

La carga eléctrica es la propiedad fundamental de la materia que origina toda la interacción electromagnética. Su cuantización en múltiplos enteros de [[carga_elemental]] y su conservación absoluta son las dos leyes más profundas del electromagnetismo clásico, con validez experimental sin excepción desde la escala atómica hasta la macroscópica. Todo cálculo eléctrico comienza por [[carga_electrica]].