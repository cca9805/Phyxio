# Procesos irreversibles

## Contexto conceptual

La segunda ley de la termodinámica establece que los procesos naturales tienen una dirección preferida: el calor fluye espontáneamente de lo caliente a lo frío, los gases se expanden hacia el vacío y los sistemas aislados tienden al equilibrio. Este leaf se centra en la **cuantificación** de esa irreversibilidad: dado un proceso concreto, ¿cuánta entropía genera el universo y qué consecuencias tiene para la energía útil disponible?

Dominar el cálculo de [[DeltaS_univ]] es esencial para evaluar la eficiencia real de cualquier máquina térmica, determinar si un proceso propuesto es termodinámicamente posible y cuantificar la degradación de energía útil (exergía) en cada etapa de un proceso industrial.

La irreversibilidad no es un defecto que se pueda eliminar completamente: toda transferencia de calor a gradiente finito, toda fricción y toda mezcla espontánea generan entropía. El objetivo práctico es minimizarla, y para ello es imprescindible saber medirla cuantitativamente.

## 🟢 Nivel esencial

Un **proceso irreversible** es aquel que no puede deshacerse espontáneamente: una vez ocurrido, el universo ha cambiado de forma permanente. La magnitud que detecta esta irreversibilidad es [[DeltaS_univ]], la variación de entropía del universo (sistema + entorno).

> [!TIP]
> Piensa en [[DeltaS_univ]] como un «contador de degradación»: cada vez que ocurre algo espontáneo en la naturaleza, el contador sube. Nunca baja. Si un cálculo te da [[DeltaS_univ]] negativo, hay un error seguro.

La lectura básica tiene tres casos: si el balance global aumenta, el proceso es irreversible; si queda nulo, describe el límite reversible ideal; si disminuye, el resultado no representa un proceso físico posible.

Para calcular [[DeltaS_univ]], se compara la variación de entropía del sistema con la del entorno. El sistema puede perder entropía siempre que el entorno compense esa pérdida y el balance conjunto no disminuya.

Las fuentes principales de irreversibilidad en la naturaleza son: transferencia de calor a través de gradientes finitos de temperatura, fricción mecánica, mezcla espontánea de sustancias, reacciones químicas espontáneas y expansión libre contra el vacío.

## 🔵 Nivel formal

El criterio cuantitativo de irreversibilidad se expresa como:

{{f:criterio_irreversibilidad}}

Donde [[DeltaS_sis]] se calcula como función de estado (mediante un camino reversible entre los estados inicial y final del sistema) y [[DeltaS_ent]] se calcula a partir del calor real intercambiado: [[DeltaS_ent]] = −[[Q_sis]] / [[T_ent]] para un entorno modelado como reservorio a temperatura constante.

> [!NOTE]
> La asimetría es crucial: para el **sistema** se usa un camino reversible (porque [[DeltaS_sis]] es función de estado). Para el **entorno** se usa el calor real (porque el entorno, al ser un reservorio en equilibrio, siempre se comporta reversiblemente internamente).

La generación de entropía por transferencia de calor a través de un gradiente finito se cuantifica mediante:

{{f:generacion_entropia_transferencia_calor}}

Esta fórmula muestra que [[S_gen]] es proporcional al calor transferido [[Q_sis]] y a la diferencia de inversos de temperatura (1/[[T_ent]] − 1/[[T_sis]]). Cuando [[T_sis]] = [[T_ent]], el factor se anula y no hay generación: es el límite reversible. Cuanto mayor es la diferencia de temperaturas, mayor es [[S_gen]] por cada julio transferido.

La entropía generada [[S_gen]] es numéricamente igual a [[DeltaS_univ]] cuando la única fuente de irreversibilidad es la transferencia de calor. Si hay otras fuentes (fricción, mezcla), [[DeltaS_univ]] incluye contribuciones adicionales.

Para un proceso adiabático irreversible (como la expansión libre de un gas ideal), [[DeltaS_ent]] = 0 (no hay calor intercambiado con el entorno) y toda la generación de entropía queda en el sistema: [[DeltaS_univ]] = [[DeltaS_sis]] > 0.

## 🔴 Nivel estructural

La estructura del balance entrópico revela propiedades fundamentales de la irreversibilidad:

**Aditividad de fuentes**: si un proceso tiene varias fuentes de irreversibilidad (gradiente térmico + fricción + mezcla), la entropía total generada es la suma de las contribuciones individuales. Cada fuente se puede cuantificar y atacar independientemente en un diseño de optimización.

**Conexión con la exergía**: la exergía destruida se obtiene multiplicando la temperatura ambiente de referencia por [[S_gen]]. Esto convierte [[S_gen]] en una magnitud directamente traducible a euros o vatios perdidos en ingeniería.

> [!WARNING]
> La exergía destruida por irreversibilidad **nunca** puede recuperarse. A diferencia de la energía (que se conserva), la exergía se destruye en cada proceso irreversible y esa destrucción es permanente.

**Asimetría temporal**: la condición [[DeltaS_univ]] > 0 introduce una dirección temporal en la física macroscópica. Mientras que las leyes de Newton y Maxwell son simétricas en el tiempo, la segunda ley rompe esa simetría: define un «antes» (menor entropía del universo) y un «después» (mayor entropía).

**Límite reversible como referencia**: el proceso reversible ([[DeltaS_univ]] = 0) es el límite asintótico inalcanzable que sirve como referencia teórica. Toda eficiencia de segunda ley se define como cociente entre el rendimiento real y el rendimiento reversible. La eficiencia de segunda ley es siempre < 1 para procesos reales.

**Fuentes universales de irreversibilidad**: toda diferencia finita de temperatura, presión o potencial químico genera entropía cuando se permite el flujo espontáneo. La magnitud de la generación es proporcional al «producto de flujo por fuerza generalizada»: para calor, flujo × (1/T_frío − 1/T_caliente); para masa, flujo × Δ(μ/T); para cantidad de movimiento, flujo × Δ(v/T).

**Irreversibilidad en procesos adiabáticos**: la expansión libre de un gas ideal (sin Q, sin W) genera entropía porque el sistema pasa de un macroestado con menos microestados accesibles a uno con más. No hay calor intercambiado, pero la entropía del universo aumenta. Esto demuestra que la irreversibilidad no requiere transferencia de calor: solo requiere que el proceso sea espontáneo hacia un nuevo equilibrio.

La magnitud [[DeltaS_univ]] es extensiva: duplicar el tamaño del sistema duplica la entropía generada para el mismo tipo de proceso. Esto permite definir tasas específicas de generación (por unidad de masa o por unidad de tiempo) útiles en diseño de equipos industriales.

## Interpretación física profunda

La irreversibilidad es la manifestación macroscópica de la tendencia estadística de los sistemas a evolucionar hacia macroestados más probables. Un macroestado con más microestados compatibles es estadísticamente aplastante respecto a uno con menos. La «fuerza» que empuja al sistema hacia el equilibrio no es una fuerza en sentido newtoniano, sino una consecuencia de la combinatoria de partículas.

[[DeltaS_univ]] > 0 significa que el universo ha transitado a un macroestado con exponencialmente más microestados accesibles. La probabilidad de que el proceso se revierta espontáneamente es tan absurdamente baja que es prácticamente cero para cualquier sistema macroscópico.

> [!NOTE]
> Para un solo julio transferido con un salto térmico de 10 K cerca de 300 K, [[DeltaS_univ]] es aproximadamente 0.11 J/K. La probabilidad de reversión espontánea es esencialmente cero.

La entropía generada no es «energía perdida» (la energía se conserva siempre). Es **calidad de energía perdida**: la misma cantidad de energía existe después del proceso, pero distribuida de forma menos útil para producir trabajo.

## Orden de magnitud

- **Transferencia de 1 kJ** entre cuerpos con ΔT = 10 K a ≈ 300 K: [[S_gen]] ≈ 0.11 J/K.
- **Transferencia de 1 kJ** entre cuerpos con ΔT = 100 K (400 K → 300 K): [[S_gen]] ≈ 0.83 J/K.
- **Expansión libre** de 1 mol de gas ideal al doble de volumen: [[DeltaS_univ]] = R·ln(2) ≈ 5.76 J/(mol·K).
- **Mezcla de agua** a 80 °C con agua a 20 °C (masas iguales, sin reservorio): [[DeltaS_univ]] ≈ 15–30 J/K (depende de la masa).
- **Combustión** de 1 mol de metano a 298 K: [[DeltaS_univ]] ≈ 2700 J/K — altamente irreversible.

Si un cálculo produce [[DeltaS_univ]] < 0, hay un error seguro. Si produce [[DeltaS_univ]] = 0 exacto para un proceso real (con fricción o gradientes), también hay error.

> [!WARNING]
> Un [[DeltaS_univ]] exactamente cero solo es posible en el límite reversible ideal. Cualquier proceso real tiene [[DeltaS_univ]] > 0, por pequeño que sea.

## Método de resolución personalizado

1. **Definir el universo termodinámico**: identificar qué es «sistema» y qué es «entorno». Todo lo que interactúa térmicamente con el sistema durante el proceso forma parte del universo.
2. **Calcular [[DeltaS_sis]]**: como función de estado, por un camino reversible entre los mismos estados i y f. Usar las fórmulas de variación de entropía (isotérmica, calentamiento, gas ideal) según corresponda.
3. **Calcular [[DeltaS_ent]]**: para un reservorio a T constante, [[DeltaS_ent]] = −[[Q_sis]]/[[T_ent]]. Usar el calor **real** del proceso, no Q_rev.
4. **Sumar**: [[DeltaS_univ]] = [[DeltaS_sis]] + [[DeltaS_ent]].
5. **Verificar segunda ley**: [[DeltaS_univ]] ≥ 0. Si da negativo, buscar error.
6. **Interpretar**: [[DeltaS_univ]] > 0 confirma irreversibilidad. La magnitud indica cuánta exergía se destruyó.

## Casos especiales y ejemplo extendido

**Caso 1: Expansión libre** (gas ideal, vacío). El gas se expande espontáneamente sin intercambiar calor ni trabajo. [[Q_sis]] = 0, por tanto [[DeltaS_ent]] = 0. Pero [[DeltaS_sis]] es positiva cuando se calcula por el camino reversible isotérmico equivalente. Resultado: [[DeltaS_univ]] > 0. El proceso es irreversible aunque no hay calor.

**Caso 2: Conducción de calor** entre dos bloques. Bloque A a 500 K y bloque B a 300 K se ponen en contacto hasta equilibrio (400 K, masas y capacidades iguales). La contribución del bloque caliente es negativa y la del bloque frío es positiva con mayor valor absoluto. Como el sistema es aislado, [[DeltaS_ent]] = 0 y [[DeltaS_univ]] = [[DeltaS_sis]] > 0. La irreversibilidad proviene del gradiente finito de T entre ambos bloques.

> [!TIP]
> En el caso de dos bloques en contacto sin entorno externo, el «universo» es solo los dos bloques juntos. No hay «entorno» separado. [[DeltaS_univ]] = variación total de entropía de los dos bloques.

## Preguntas reales del alumno

**¿Por qué el proceso reversible es inalcanzable?**
Porque requiere gradientes infinitesimales (ΔT → 0, ΔP → 0), lo que implica tiempo infinito para completar cualquier transferencia finita. En la práctica, siempre hay gradientes finitos, fricción y tiempos limitados que generan irreversibilidad.

**¿Puede un sistema ganar entropía en un proceso irreversible sin recibir calor?**
Sí. La expansión libre de un gas ideal no involucra calor ni trabajo, pero el sistema gana entropía porque aumentan los microestados accesibles. La irreversibilidad proviene del paso espontáneo a un nuevo equilibrio, no necesariamente de un flujo de calor.

**¿Cómo sé si el [[DeltaS_sis]] que calculé es correcto para un proceso irreversible?**
El truco es que [[DeltaS_sis]] no depende del proceso real (es función de estado). Se calcula inventando un camino reversible entre los mismos estados i y f. Si el sistema va de (T_i, V_i) a (T_f, V_f), [[DeltaS_sis]] se calcula con las fórmulas estándar independientemente de cómo llegó realmente.

**¿Qué ocurre si hay varias fuentes de irreversibilidad simultáneamente?**
Se suman. Si hay fricción y gradiente térmico, la entropía total generada es la suma de la generada por fricción y la generada por el gradiente. En diseño industrial, se identifican y cuantifican por separado para saber dónde invertir en mejoras.

## Conexiones transversales y rutas de estudio

Este leaf conecta directamente con:
- [Variación de entropía](leaf:física-clasica/termodinámica/entropía-y-segunda-ley/entropía/variación-de-entropía): proporciona las herramientas de cálculo de [[DeltaS_sis]].
- [Definición de entropía](leaf:física-clasica/termodinámica/entropía-y-segunda-ley/entropía/definición): fundamento teórico de por qué [[DeltaS_sis]] es función de estado.
- Ciclo de Carnot: el caso donde [[DeltaS_univ]] = 0 (máquina reversible ideal).
- Análisis exergético: traducción directa de [[S_gen]] a trabajo perdido usando la temperatura ambiente de referencia.

La comprensión de la irreversibilidad es prerequisito para el diseño de cualquier sistema energético eficiente: desde una central eléctrica hasta un refrigerador doméstico.

## Síntesis final

Un proceso irreversible se identifica y cuantifica mediante [[DeltaS_univ]] > 0. La entropía del universo siempre aumenta en procesos reales. Las fuentes de irreversibilidad (gradientes térmicos, fricción, mezcla) son aditivas y cuantificables. La exergía destruida es T_0 · [[S_gen]], proporcionando la conexión directa entre irreversibilidad termodinámica y pérdida económica de energía útil. El proceso reversible ([[DeltaS_univ]] = 0) es el límite ideal que establece la eficiencia máxima teórica.
