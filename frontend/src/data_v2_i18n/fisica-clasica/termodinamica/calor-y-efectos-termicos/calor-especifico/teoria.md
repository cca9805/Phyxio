# Calor específico

## Contexto conceptual

El calor específico es la magnitud que permite comparar cómo responden distintos materiales ante el mismo aporte de energía térmica. En la vida cotidiana se observa que el metal de una sartén se calienta mucho más rápido que el agua que contiene, aunque la fuente de calor es la misma. El agua de los océanos tarda meses en cambiar de temperatura mientras el suelo adyacente varía varios grados en pocas horas. La piedra caliente de un horno de barro mantiene su temperatura durante horas después de apagarse. Todos estos fenómenos tienen la misma causa: los materiales difieren en su calor específico [[c]].

Este leaf se sitúa dentro del bloque de calor y efectos térmicos, después del concepto de calor [[Q]] y antes de la calorimetría, donde el calor específico se aplica al problema de la mezcla de sustancias a distintas temperaturas. Comprender [[c]] como propiedad intensiva del material —independiente de la cantidad— es el núcleo conceptual que distingue este leaf del leaf de calor [[Q]].

La distinción fundamental de este leaf respecto al de calor es la siguiente: el calor [[Q]] describe un proceso de transferencia de energía; el calor específico [[c]] describe una propiedad del material que determina cómo responde a ese proceso. Uno es una variable de proceso; el otro es una constante del material.

## 🟢 Nivel esencial

Cuando se calienta agua y metal con la misma fuente durante el mismo tiempo, el metal alcanza temperaturas mucho más altas que el agua. Esto no ocurre porque el metal "absorba menos calor": ambos reciben la misma energía. Ocurre porque el metal necesita menos energía que el agua para subir su temperatura en la misma cantidad.

El **calor específico** [[c]] de un material es la cantidad de energía que se necesita para calentar un kilogramo de ese material exactamente un kelvin. Un [[c]] alto significa que el material "resiste" los cambios de temperatura: necesita mucha energía para calentarse poco. Un [[c]] bajo significa que el material se calienta fácilmente con poca energía.

El calor específico es una propiedad del material, no del sistema. Un kilogramo de agua tiene el mismo [[c]] que un océano. Lo que cambia con la cantidad de materia es la **capacidad calorífica total** [[C_total]], que es simplemente [[c]] multiplicado por la masa.

## 🔵 Nivel formal

El calor específico se define como el cociente entre el calor transferido, la masa del sistema y la variación de temperatura:

{{f:definicion_c}}

Esta relación es a la vez la definición de [[c]] y la fórmula operacional para medirlo experimentalmente. Si se conocen [[Q]], [[m]] y [[DeltaT]], se obtiene [[c]] directamente.

La capacidad calorífica total del sistema es el producto de la masa por el calor específico:

{{f:capacidad_calorifica_total}}

Aquí [[C_total]] tiene unidades de J/K y describe la inercia térmica del sistema completo. La diferencia entre [[c]] y [[C_total]] es conceptualmente crucial: [[c]] es una propiedad **intensiva** (depende solo del material, no de la cantidad), mientras que [[C_total]] es una propiedad **extensiva** (depende de la cantidad de materia del sistema).

El signo de [[DeltaT]] determina el signo de [[Q]]: si la temperatura sube, [[Q]] es positivo; si baja, [[Q]] es negativo. El calor específico [[c]] es siempre positivo.

Operativamente, la misma relación se lee de dos formas: si se estudia el material, se despeja [[c]] a partir de [[Q]], [[m]] y [[DeltaT]]; si se diseña un sistema concreto, se usa [[C_total]] para estimar cuánta energía necesita todo el cuerpo por cada kelvin. Esta separación evita mezclar la propiedad del material con la respuesta térmica de una muestra real.

## 🔴 Nivel estructural

El calor específico tiene su origen en la estructura microscópica de la materia. A escala molecular, cuando se transfiere energía a un sólido o líquido, esa energía se reparte entre los modos de movimiento disponibles: traslación, rotación y vibración de las moléculas. Un material con muchos modos accesibles distribuye la energía entre ellos y su temperatura sube poco por cada julio absorbido, dando un [[c]] alto. Un material con pocos modos distribuye toda la energía en temperatura, dando un [[c]] bajo.

El agua tiene un [[c]] excepcionalmente alto (4186 J/(kg·K)) por su red de puentes de hidrógeno: estos enlaces almacenan energía adicional sin contribuir directamente al aumento de temperatura. El resultado es que el agua puede absorber enormes cantidades de [[Q]] con incrementos de temperatura relativamente modestos. Por eso los océanos son el principal regulador del clima terrestre.

La ley de Dulong-Petit (1819) estableció empíricamente que los calores específicos molares de los metales sólidos son aproximadamente iguales y cercanos a 25 J/(mol·K). Para el cobre, por ejemplo, predice un valor cercano al experimental, lo que conecta [[c]] con los grados de libertad vibracionales del sólido.

Para sólidos a baja temperatura, el calor específico no es constante: decrece siguiendo la ley de Debye y tiende a cero cuando la temperatura tiende a cero absoluto. Esta dependencia de [[c]] con T es una manifestación de la cuantización de los modos de vibración de la red cristalina y es uno de los primeros éxitos de la física cuántica del siglo XX.

Para gases ideales, el calor específico depende de si el proceso se realiza a volumen constante o a presión constante. En este leaf se trabaja con procesos a presión constante para sólidos y líquidos, donde la diferencia entre ambos es despreciable.

## Interpretación física profunda

El calor específico actúa como la "pereza térmica" del material: cuanto mayor es [[c]], más lentamente responde al calor. Esta inercia térmica tiene consecuencias opuestas según la aplicación. En refrigeración, un refrigerante con [[c]] alto es deseable porque puede absorber mucho calor sin calentarse excesivamente. En electrónica, un disipador con [[c]] bajo es deseable porque se calienta rápido, lo que activa la disipación antes de que el componente se dañe.

La distinción intensiva/extensiva entre [[c]] y [[C_total]] tiene implicaciones prácticas directas. En calorimetría, el principio de conservación de energía se escribe en términos de [[C_total]] de cada cuerpo participante, no de [[c]], porque cada cuerpo tiene una masa diferente. Dos cuerpos del mismo material pero de distinta masa tienen el mismo [[c]] pero distinta [[C_total]]: responden de forma diferente al mismo aporte de [[Q]].

> [!NOTE]
> El calor específico [[c]] es una propiedad del material, independiente de la cantidad. La capacidad calorífica total [[C_total]] es una propiedad del sistema, que depende de cuánta materia contiene. Nunca deben usarse como sinónimos.

## Orden de magnitud y tabla de referencia

Los valores de [[c]] en J/(kg·K) para materiales comunes a temperatura ambiente son:
- Agua líquida: 4186
- Alcohol etílico: 2400
- Hielo a 0 °C: 2090
- Vapor de agua a 100 °C: 2010
- Aluminio: 900
- Vidrio: 840
- Hierro/Acero: 450
- Cobre: 386
- Plata: 234
- Plomo: 128
- Mercurio líquido: 140

El agua líquida es la referencia histórica: la caloría se definió como la energía necesaria para calentar un gramo de agua en un grado Celsius.

## Método de resolución personalizado

1. **Identificar qué se pide**: ¿calor específico [[c]] del material, calor total [[Q]], variación de temperatura [[DeltaT]], masa [[m]] o capacidad calorífica total [[C_total]]?
2. **Seleccionar la fórmula adecuada**: para procesos sin cambio de estado, usar la definición de [[c]]. Para calcular [[C_total]], usar el producto [[m]] · [[c]].
3. **Verificar unidades antes de sustituir**: [[c]] en J/(kg·K), [[m]] en kg, [[DeltaT]] en K (o °C, el incremento es idéntico), [[Q]] en J.
4. **Calcular [[DeltaT]] correctamente**: T_final − T_inicial. El signo debe coincidir con el de [[Q]].
5. **Verificar el resultado contra la tabla**: el [[c]] calculado experimentalmente debe estar en el rango de los materiales conocidos. Un resultado fuera de rango suele indicar un error de unidades.

## Casos especiales y ejemplo extendido

**Mezcla de materiales**: cuando un sistema está compuesto por varios materiales (por ejemplo, un recipiente metálico que contiene agua), la [[C_total]] del conjunto es la suma de los productos `m_i · c_i` de cada componente. No se puede usar un [[c]] único para todo el sistema heterogéneo.

**Dependencia con la temperatura**: para materiales como el agua, [[c]] varía ligeramente con la temperatura. En el rango 0–100 °C, la variación es inferior al 1 %, por lo que se acepta el valor constante de 4186 J/(kg·K). Para metales a alta temperatura o para gases, la dependencia puede ser significativa y debe consultarse en tablas.

**Calor específico molar**: en química y termodinámica avanzada, se usa frecuentemente el calor específico molar `c_m` en J/(mol·K), que es el calor necesario por mol de sustancia. Para convertir: `c_m` es igual a [[c]] multiplicado por la masa molar del material en kg/mol.

> [!WARNING]
> El error más común es confundir [[c]] (J/(kg·K)) con [[C_total]] (J/K). Si el enunciado pregunta "¿cuánta energía necesita el sistema?", la respuesta usa [[C_total]]; si pregunta "¿qué propiedad tiene el material?", la respuesta usa [[c]].

## Preguntas reales del alumno

**¿Por qué la arena de la playa se calienta tanto más que el agua del mar con el mismo sol?**
La arena tiene un [[c]] de unos 840 J/(kg·K), aproximadamente cinco veces menor que el agua. Con el mismo flujo de energía solar, cada kilogramo de arena sube de temperatura cinco veces más que cada kilogramo de agua. Por eso la playa quema los pies al mediodía mientras el agua permanece fresca.

**¿Por qué el calor específico del hielo es distinto del del agua líquida?**
El hielo (2090 J/(kg·K)) y el agua líquida (4186 J/(kg·K)) son el mismo compuesto químico pero en estados de agregación distintos, con estructuras moleculares radicalmente diferentes. La red de puentes de hidrógeno del agua líquida almacena más energía por modo de movimiento que la estructura cristalina del hielo, lo que eleva su [[c]]. El calor específico depende del estado de agregación: un mismo material puede tener varios valores de [[c]] según si es sólido, líquido o gaseoso.

**¿Cómo se mide el calor específico en el laboratorio?**
El método directo es el calorímetro de mezclas: se calienta una muestra del material hasta una temperatura conocida, se introduce en agua de masa y temperatura conocidas, y se mide la temperatura de equilibrio. A partir del calor cedido por la muestra al agua (calculado con el [[c]] conocido del agua) se determina el [[c]] de la muestra. La precisión del método depende del aislamiento térmico del calorímetro y de la precisión de las medidas de temperatura.

**¿El calor específico puede cambiar con la presión?**
Para sólidos y líquidos, la dependencia de [[c]] con la presión es muy pequeña y se ignora en condiciones estándar. Para gases, la diferencia entre el calor específico a presión constante y el calor específico a volumen constante es significativa y viene determinada por la relación de Mayer. En termodinámica de ingeniería se trabaja habitualmente con el calor específico a presión constante para líquidos y sólidos.

## Conexiones transversales y rutas de estudio

El calor específico es el prerequisito inmediato de la [calorimetría](leaf:física-clasica/termodinámica/calor-y-efectos-térmicos/calorimetria), donde se aplica el principio de conservación de energía a mezclas de cuerpos. También es una de las dos propiedades clave en los problemas de [cambios de estado](leaf:física-clasica/termodinámica/calor-y-efectos-térmicos/cambios-de-estado), donde [[c]] describe los tramos de temperatura variable y el calor latente describe las transiciones de fase.

La [capacidad calorífica](leaf:física-clasica/termodinámica/calor-y-efectos-térmicos/capacidad-calorifica) es la magnitud extensiva complementaria: [[C_total]] = [[m]] · [[c]].

A nivel avanzado, la dependencia de [[c]] con la temperatura conecta con la [física estadística](leaf:física-moderna/física-estadística/distribucion-de-boltzmann) a través del teorema de equipartición y la función de partición.

## Síntesis final

El calor específico [[c]] cuantifica la resistencia de un material al cambio de temperatura: cuántos julios necesita cada kilogramo para subir un kelvin. Se determina como cociente entre calor transferido, masa y variación de temperatura. La capacidad calorífica total [[C_total]] es su contrapartida extensiva, proporcional a la masa del sistema. La distinción entre ambas —intensiva vs extensiva— es el núcleo del leaf y el prerequisito para la calorimetría.
