# Energía libre de Gibbs

## Contexto conceptual

La termodinámica clásica construyó sus criterios de espontaneidad de forma progresiva. El primer intento fue identificar los procesos exotérmicos como espontáneos, pero la realidad experimental mostró procesos endotérmicos perfectamente espontáneos —la disolución de muchas sales en agua, la fusión del hielo a temperatura ambiente— que contradecían esa intuición. La entropía, introducida por Clausius, resolvió el problema desde el punto de vista del universo: todo proceso espontáneo aumenta la entropía total. Sin embargo, manejar la entropía del universo completo resulta operativamente incómodo cuando el interés se centra en el sistema y en las condiciones de laboratorio habituales: **presión y temperatura constantes**.

Josiah Willard Gibbs formuló en la década de 1870 un potencial termodinámico que encapsula ambas contribuciones —energética y entrópica— en una sola magnitud referida exclusivamente al sistema. El resultado fue [[DeltaG]], la variación de energía libre de Gibbs, un criterio limpio y operativo que hoy guía la ingeniería química, la bioquímica y la ciencia de materiales.

Este leaf estudia [[DeltaG]] como el **árbitro universal de la espontaneidad** a presión y temperatura constantes: cómo se calcula, qué significa su signo, qué factores lo controlan y cómo la temperatura puede invertir la dirección de la espontaneidad.

## 🟢 Nivel esencial

Imagina dos fuerzas que compiten por el destino de cualquier proceso físico o químico. La primera es el **impulso energético**: los sistemas tienden a liberar energía, a bajar en entalpía, igual que una pelota tiende a rodar cuesta abajo. La segunda es el **impulso entrópico**: los sistemas tienden hacia la mayor dispersión posible, hacia más desorden, igual que los perfumes se difunden por una habitación.

[[DeltaG]] mide quién gana esa competición en condiciones reales de laboratorio. Si la suma algebraica de los dos impulsos favorece la evolución, [[DeltaG]] es negativa y el proceso ocurre por sí solo. Si la suma se opone, [[DeltaG]] es positiva y el proceso necesita ayuda externa.

Lo extraordinario es que la temperatura [[T]] actúa como árbitro entre los dos impulsos: a baja [[T]] suele dominar la entalpía [[DeltaH]]; a alta [[T]] puede dominar la entropía [[DeltaS]]. Esto significa que ciertos procesos son espontáneos a baja temperatura pero no a alta, y viceversa. La temperatura a la que ocurre ese cambio de régimen tiene nombre propio: **temperatura de inversión** [[T_inv]].

## 🔵 Nivel formal

La definición completa de la energía libre de Gibbs en términos de funciones de estado es:

{{f:definicion_gibbs}}

Esta expresión establece que [[DeltaG]] es la diferencia entre la variación de entalpía [[DeltaH]] y el producto de la temperatura absoluta [[T]] por la variación de entropía [[DeltaS]]. Los tres parámetros son funciones de estado, de modo que [[DeltaG]] también lo es: su valor depende solo del estado inicial y final del proceso, no del camino seguido.

El criterio de espontaneidad derivado es directo y poderoso:

- **[[DeltaG]] negativa**: el proceso es espontáneo a P y T constantes; libera un máximo de trabajo útil igual al valor absoluto de [[DeltaG]].
- **[[DeltaG]] nula**: el sistema está en equilibrio termodinámico; ni avanza ni retrocede espontáneamente.
- **[[DeltaG]] positiva**: el proceso no es espontáneo; requiere un aporte mínimo de trabajo externo igual a [[DeltaG]].

La tabla de los cuatro casos según el signo de [[DeltaH]] y [[DeltaS]] revela la riqueza del criterio:

| Caso | [[DeltaH]] | [[DeltaS]] | Espontaneidad |
|------|---------|---------|---------------|
| Siempre espontáneo | negativa | positiva | Para cualquier [[T]] |
| Nunca espontáneo | positiva | negativa | Nunca |
| Espontáneo a baja T | negativa | negativa | Solo si [[T]] es menor que [[T_inv]] |
| Espontáneo a alta T | positiva | positiva | Solo si [[T]] supera [[T_inv]] |

La temperatura de inversión se obtiene imponiendo [[DeltaG]] nulo en la ecuación:

{{f:temperatura_inversion}}

Cuando [[DeltaH]] y [[DeltaS]] tienen el mismo signo, existe un umbral real positivo [[T_inv]] que separa los dos regímenes. Cuando tienen signos opuestos, no existe cruce y el proceso es siempre o nunca espontáneo.

## 🔴 Nivel estructural

La ecuación de Gibbs revela que [[DeltaG]] es una **función lineal de la temperatura** cuando [[DeltaH]] y [[DeltaS]] se consideran independientes de [[T]]. La gráfica de [[DeltaG]] frente a [[T]] es una recta cuya pendiente es exactamente menos [[DeltaS]] y cuya ordenada en el origen (extrapolación a [[T]] nulo) es [[DeltaH]]. Esto conecta directamente la geometría del gráfico con las propiedades físicas del proceso.

Esta linealidad tiene implicaciones profundas. Si la recta tiene pendiente negativa (proceso con [[DeltaS]] positiva), [[DeltaG]] disminuye al aumentar la temperatura: el proceso se vuelve progresivamente más espontáneo con el calor. Si la pendiente es positiva ([[DeltaS]] negativa), la espontaneidad se deteriora al calentar. En ambos casos, **el dominio de validez de esta linealidad está limitado** por la constancia de [[DeltaH]] y [[DeltaS]] con la temperatura, una aproximación que falla cuando el sistema atraviesa transiciones de fase o cuando el rango de [[T]] es muy amplio.

potencial-quimico [[DeltaG]] tiene una interpretación termodinámica profunda como **trabajo no expansivo máximo** que puede obtenerse de un proceso a P y T constantes. En sistemas biológicos, este es el trabajo que realiza el metabolismo para mantener el orden celular contra la tendencia a la degradación. En celdas electroquímicas, [[DeltaG]] es la diferencia de potencial máxima multiplicada por la carga transferida. La conexión entre [[DeltaG]] y la constante de equilibrio de una reacción química se establece mediante la termodinámica estadística: un proceso con [[DeltaG]] muy negativa tiene una constante de equilibrio muy grande, lo que indica un favorecimiento masivo de los productos.

La aproximación de [[DeltaH]] y [[DeltaS]] constantes falla cuando la variación de temperatura supera el 30–40 % del valor absoluto en kelvin. La ley de Kirchhoff proporciona correcciones significativas en ese régimen. En mezclas, [[DeltaG]] debe calcularse desde potenciales químicos parciales.

> [!NOTE]
> La distinción entre procesos espontáneos y rápidos es crucial: [[DeltaG]] negativa indica que el proceso **puede** ocurrir, no que **ocurrirá** rápidamente. La cinética, gobernada por la energía de activación, determina la velocidad; la termodinámica, mediante [[DeltaG]], determina la dirección.

> [!WARNING]
> A temperaturas por encima de 2000 K, la constancia de [[DeltaH]] y [[DeltaS]] es una mala aproximación. Las capacidades caloríficas cambian notablemente y pueden producirse disociaciones moleculares que alteran el balance de Gibbs de forma significativa.

## Interpretación física profunda

El término [[T]]·[[DeltaS]] en la ecuación de Gibbs no es simplemente una corrección matemática. Representa el calor que el entorno cede al sistema de forma reversible, es decir, el intercambio energético que el entorno puede hacer sin verse degradado. La diferencia entre [[DeltaH]] y ese intercambio máximo con el entorno es exactamente la energía que queda disponible como trabajo útil: esa es [[DeltaG]].

Esto hace evidente por qué [[DeltaG]] es el criterio correcto para sistemas a P y T constantes: no pregunta cuánta energía total cambia, sino cuánta queda libre para hacer trabajo, descontada la parte que el entorno reclama irremediablemente en forma de calor entrópico. Proceso que libera mucho calor pero también crea mucho orden (destruye entropía) no tiene tanto trabajo útil disponible como parece.

La disolución de la sal en agua absorbe calor ([[DeltaH]] positiva) pero genera gran desorden ([[DeltaS]] positiva). A temperatura ambiente, el término [[T]]·[[DeltaS]] supera a [[DeltaH]] y [[DeltaG]] resulta negativa: la disolución es espontánea aunque enfríe la solución.

## Orden de magnitud

En reacciones de combustión típicas, [[DeltaG]] puede alcanzar valores de varios cientos de kilojulios por mol: la combustión del metano libera aproximadamente 818 kJ/mol de energía libre de Gibbs a 298 K. En reacciones bioquímicas como la hidrólisis del ATP, [[DeltaG]] es de alrededor de 30 kJ/mol, suficiente para impulsar síntesis moleculares complejas.

Para la fusión del hielo a 273 K, [[DeltaG]] es prácticamente nula (equilibrio); a 280 K es ligeramente negativa. Una [[DeltaG]] inferior a 1 kJ/mol indica equilibrio sensible a perturbaciones; valores superiores a 100 kJ/mol indican procesos muy favorables.

> [!TIP]
> Si un cálculo produce [[DeltaG]] en el orden de gigajulios, verificar si [[DeltaH]] y [[DeltaS]] están en julios o en kilojulios. Una mezcla de unidades es el error más frecuente y produce resultados mil veces mayores de lo esperado.

## Método de resolución personalizado

Para aplicar el criterio de Gibbs de forma segura, seguir esta secuencia:

1. **Identificar el proceso y el sistema**: determinar si se trabaja a P y T constantes.
2. **Obtener [[DeltaH]] y [[DeltaS]]**: de tablas termodinámicas, calorimetría o cálculo teórico; verificar que las unidades sean coherentes (J y J/K, o kJ y kJ/K, no mezclados).
3. **Expresar [[T]] en kelvin**: convertir siempre desde Celsius añadiendo 273.15.
4. **Calcular [[DeltaG]]**: aplicar la definición de Gibbs restando el término entrópico del entálpico.
5. **Leer el signo**: negativo implica proceso espontáneo; positivo implica proceso no espontáneo; cero implica equilibrio.
6. **Calcular [[T_inv]] si procede**: si [[DeltaH]] y [[DeltaS]] tienen el mismo signo, existe una temperatura de inversión que marca el cambio de régimen.
7. **Verificar coherencia**: comprobar que la tabla de casos (los cuatro cuadrantes de signos) es consistente con el resultado obtenido.

## Casos especiales y ejemplo extendido

**Proceso con ambos impulsos favorables**: Si [[DeltaH]] es negativa y [[DeltaS]] es positiva, [[DeltaG]] es negativa para cualquier valor positivo de [[T]]. El proceso es siempre espontáneo. Un ejemplo clásico es la combustión en exceso de oxígeno: exotérmica y con aumento del número de moléculas gaseosas. No existe [[T_inv]] real en este caso.

**Proceso con ambos impulsos desfavorables**: Si [[DeltaH]] es positiva y [[DeltaS]] es negativa, [[DeltaG]] es positiva para cualquier temperatura positiva. El proceso nunca es espontáneo en el sentido directo; solo ocurre en el sentido inverso. La síntesis de ozono a partir de oxígeno molecular en condiciones normales entra en esta categoría.

**Proceso con competición de impulsos**: Cuando [[DeltaH]] y [[DeltaS]] tienen el mismo signo, [[T_inv]] separa dos regímenes. Por ejemplo, la evaporación del agua tiene [[DeltaH]] positiva y [[DeltaS]] positiva. Por debajo de 373 K (a presión atmosférica), [[DeltaG]] es positiva: el agua no evapora espontáneamente. Exactamente a 373 K, [[DeltaG]] es nula: agua y vapor coexisten en equilibrio. Por encima de 373 K, [[DeltaG]] es negativa: la evaporación es espontánea.

## Preguntas reales del alumno

**¿Por qué un proceso exotérmico puede no ser espontáneo?**
Si [[DeltaS]] es negativa y suficientemente grande en valor absoluto, el término [[T]]·[[DeltaS]] puede superar a [[DeltaH]] y hacer [[DeltaG]] positiva. El proceso pierde espontaneidad porque destruye demasiado desorden, aunque libere energía.

**¿Qué ocurre exactamente cuando [[DeltaG]] vale cero?**
El sistema está en equilibrio dinámico: la velocidad de la reacción directa iguala a la de la inversa. No hay variación neta de ninguna propiedad macroscópica. Cualquier pequeña perturbación desplazará el sistema hacia el equilibrio, no lejos de él.

**¿Puede [[T_inv]] ser negativa?**
No. Si el cálculo produce [[T_inv]] negativa, [[DeltaH]] y [[DeltaS]] tienen signos opuestos: no existe umbral y el proceso es siempre o nunca espontáneo.

**¿Cómo afecta la presión a [[DeltaG]]?**
En el modelo estándar P y T se mantienen constantes. En gases, [[DeltaG]] también depende de la presión mediante el volumen molar; esa extensión corresponde al potencial químico.

## Conexiones transversales y rutas de estudio

[[DeltaG]] conecta directamente con el potencial químico de las mezclas: el criterio de espontaneidad para sistemas de composición variable se expresa como variación del potencial químico, que es la derivada parcial de [[G]] respecto a la cantidad de materia. El leaf [Potencial químico](leaf:fisica-clasica/termodinamica/potenciales-termodinamicos/potencial-quimico) amplía este enfoque.

La entalpía [[DeltaH]] tiene su leaf propio: [Entalpía](leaf:fisica-clasica/termodinamica/potenciales-termodinamicos/entalpia), donde se estudian los ciclos de Hess y la calorimetría. La energía libre de Helmholtz, hermana de Gibbs para condiciones de volumen constante, está en [Energía libre de Helmholtz](leaf:fisica-clasica/termodinamica/potenciales-termodinamicos/energia-libre-de-helmholtz).

La conexión con la constante de equilibrio química se establece en termodinámica estadística: el logaritmo de la constante de equilibrio es proporcional a menos [[DeltaG]] dividido entre [[T]] y la constante de Boltzmann.

## Síntesis final

[[DeltaG]] es el juez termodinámico de los procesos a presión y temperatura constantes: su signo dicta la dirección de la evolución espontánea, su magnitud cuantifica el trabajo útil máximo disponible y su dependencia lineal con [[T]] permite predecir la temperatura exacta —[[T_inv]]— en que cualquier proceso cambia de régimen. Dominar este criterio es dominar la dirección de los procesos en la gran mayoría de las situaciones físicas y químicas reales.
