# Procesos reversibles

## Contexto conceptual

La segunda ley de la termodinámica establece que los procesos naturales generan entropía en el universo: [[DeltaS_univ]] > 0 para todo proceso real. Sin embargo, existe un límite ideal en el que el proceso no genera entropía neta: [[DeltaS_univ]] = 0. Estos procesos se denominan **reversibles** y representan la referencia teórica con la que se compara todo proceso real.

Un proceso reversible es aquel que, una vez completado, puede deshacerse exactamente por el mismo camino, devolviendo tanto al sistema como al entorno a sus estados iniciales sin dejar huella en el universo. No destruye exergía, no degrada calidad energética y define la eficiencia máxima alcanzable por cualquier máquina térmica.

Comprender los procesos reversibles es esencial porque proporcionan el techo teórico: la eficiencia de Carnot [[eta_Carnot]], el trabajo máximo extraíble y el calor mínimo que debe cederse al foco frío. Todo análisis de segunda ley se basa en comparar lo real con lo reversible.

## 🟢 Nivel esencial

Un **proceso reversible** es un proceso ideal que no genera entropía en el universo. La condición que lo define es:

La condición que lo define es que el balance de entropía del universo sea nulo: el sistema y el entorno se compensan exactamente.

Esto significa que lo que el sistema gana en entropía, el entorno lo pierde exactamente, y viceversa. No hay degradación neta de energía: toda la energía que entra como calor puede, en principio, recuperarse íntegramente como trabajo.

> [!TIP]
> Piensa en un proceso reversible como un proceso que se puede «rebobinar» sin que nada cambie en el universo. Si pasas un vídeo hacia adelante y luego hacia atrás, todo vuelve exactamente como estaba. En un proceso irreversible, al rebobinar, algo habría cambiado permanentemente.

Las condiciones para que un proceso sea reversible son:
- **Sin fricción**: no hay disipación mecánica en ningún punto.
- **Sin gradientes finitos de temperatura**: el calor se transfiere con diferencias infinitesimales de T entre sistema y entorno.
- **Sin gradientes finitos de presión**: la expansión o compresión ocurre con diferencias infinitesimales de P.
- **Sin mezcla espontánea**: no hay difusión libre de sustancias.
- **Proceso cuasi-estático**: lo suficientemente lento para que el sistema esté en equilibrio interno en cada instante.

En la práctica, ningún proceso real cumple todas estas condiciones. El proceso reversible es un **límite ideal** útil para calcular eficiencias máximas y entropías.

## 🔵 Nivel formal

La condición de reversibilidad se formaliza como:

{{f:condicion_reversibilidad}}

Para un proceso reversible con intercambio de calor con un reservorio a temperatura [[T_caliente]] o [[T_frio]], el calor reversible [[Q_rev]] y la variación de entropía están relacionados por la definición de Clausius: [[DeltaS_sis]] = [[Q_rev]] / T (para procesos isotérmicos) o [[DeltaS_sis]] = integral de dQ_rev / T (para procesos no isotérmicos).

> [!NOTE]
> La condición [[DeltaS_univ]] = 0 no implica que [[DeltaS_sis]] = 0. El sistema puede ganar o perder entropía; lo que importa es que el entorno compense exactamente: [[DeltaS_ent]] = −[[DeltaS_sis]].

La máxima eficiencia de una máquina térmica cíclica reversible operando entre dos focos se obtiene directamente de [[DeltaS_univ]] = 0:

{{f:eficiencia_carnot}}

Esta fórmula muestra que [[eta_Carnot]] depende **solo** de las temperaturas absolutas de los focos, no del fluido de trabajo ni del diseño mecánico. Para [[T_caliente]] = 600 K y [[T_frio]] = 300 K, [[eta_Carnot]] = 1 − 300/600 = 0.50, es decir, como máximo el 50% del calor absorbido puede convertirse en trabajo.

El ciclo de Carnot es el ciclo reversible por excelencia: consta de dos isotermas (a [[T_caliente]] y [[T_frio]]) y dos adiabáticas reversibles (isentrópicas). En las isotermas, el sistema intercambia calor con los reservorios a gradiente infinitesimal de T. En las adiabáticas, no hay intercambio de calor y la entropía del sistema permanece constante.

## 🔴 Nivel estructural

La estructura del concepto de reversibilidad revela propiedades fundamentales de la termodinámica:

**Simetría temporal local**: un proceso reversible es el único compatible con la simetría temporal de las ecuaciones microscópicas. En el límite reversible, las leyes macroscópicas no distinguen entre «antes» y «después». Es la irreversibilidad la que rompe esta simetría introduciendo una flecha del tiempo.

**Cota superior universal**: el teorema de Carnot establece que ninguna máquina térmica operando entre dos focos puede tener eficiencia mayor que [[eta_Carnot]]. Toda máquina con eficiencia menor opera irreversiblemente. Toda máquina con eficiencia supuestamente mayor contiene un error. Este resultado es independiente del fluido de trabajo, del diseño mecánico y de los materiales.

> [!WARNING]
> Si un cálculo da una eficiencia real mayor que [[eta_Carnot]] para los mismos focos, hay un error seguro. No existe excepción a esta regla para máquinas cíclicas entre dos focos.

**Equivalencia de procesos reversibles**: todos los procesos reversibles entre los mismos estados producen la misma variación de entropía del sistema, porque [[DeltaS_sis]] es función de estado. Esto permite usar cualquier camino reversible para calcular [[DeltaS_sis]], independientemente de cómo ocurra el proceso real.

**Reversibilidad como función de estado**: la condición de reversibilidad no depende del camino específico, sino de que el camino sea cuasi-estático y sin disipación. Cualquier camino reversible entre los mismos estados produce [[DeltaS_univ]] = 0.

**Adiabática reversible = isentrópica**: en un proceso adiabático reversible, [[Q_rev]] = 0, por tanto [[DeltaS_sis]] = 0 y [[DeltaS_ent]] = 0. El sistema mantiene su entropía constante. Esta es la base de las compresiones y expansiones ideales en turbinas y compresores.

**Ciclo reversible como referencia**: cualquier ciclo termodinámico real se evalúa comparando su eficiencia con la de Carnot. La eficiencia de segunda ley se define como el cociente entre la eficiencia real y [[eta_Carnot]]: siempre es menor que 1 y cuantifica cuánto se pierde por irreversibilidades.

## Interpretación física profunda

La reversibilidad es la condición en la que no se destruye información termodinámica. En un proceso reversible, cada microestado del sistema puede rastrearse hasta su estado original: no se pierde trazabilidad. En un proceso irreversible, los microestados se mezclan de forma irrecuperable, destruyendo información y generando entropía.

Desde la perspectiva estadística, [[DeltaS_univ]] = 0 significa que el número total de microestados accesibles al universo no cambia. El sistema puede redistribuir microestados internamente, pero el universo como conjunto permanece con la misma multiplicidad combinatoria.

> [!NOTE]
> La reversibilidad no significa que «nada cambie». El sistema puede cambiar drásticamente (expandirse, calentarse, cambiar de fase). Lo que no cambia es la entropía total del universo.

La conexión con la exergía es directa: en un proceso reversible, la exergía destruida es cero (porque la exergía destruida es [[T_frio]] · [[DeltaS_univ]], y [[DeltaS_univ]] = 0). Todo el potencial de trabajo se conserva. En un proceso irreversible, parte de ese potencial se destruye irreversiblemente.

## Orden de magnitud

- **Proceso isotérmico reversible** (gas ideal, 1 mol, duplicación de volumen a 300 K): [[DeltaS_sis]] = R·ln(2) ≈ 5.76 J/(mol·K), [[DeltaS_ent]] = −5.76 J/(mol·K), [[DeltaS_univ]] = 0.
- **Ciclo de Carnot con focos moderados**: [[eta_Carnot]] ronda el 50%; de cada 1000 J absorbidos, como máximo unos 500 J pueden convertirse en trabajo.
- **Ciclo de Carnot con foco caliente muy alto**: [[eta_Carnot]] puede acercarse al 80%. La mayor separacion térmica permite mayor eficiencia reversible.
- **Compresión isentrópica ideal** (aire, relación de presiones 10:1): el aire se calienta de 300 K a ≈ 579 K sin intercambiar calor. [[DeltaS_sis]] = 0.

Si un cálculo produce [[DeltaS_univ]] > 0 para un proceso descrito como reversible, el proceso no es realmente reversible o hay error.

> [!WARNING]
> [[eta_Carnot]] = 1 (100%) requeriría [[T_frio]] = 0 K, lo cual es inalcanzable por el tercer principio. No existe motor térmico con eficiencia del 100%.

## Método de resolución personalizado

1. **Identificar el tipo de proceso**: ¿es isotérmico, adiabático, isobárico? ¿Es un ciclo completo?
2. **Verificar condiciones de reversibilidad**: ¿hay fricción? ¿Los gradientes de T y P son infinitesimales? ¿Es cuasi-estático?
3. **Calcular [[DeltaS_sis]]**: usando la fórmula apropiada (isotérmica, calentamiento, gas ideal).
4. **Calcular [[DeltaS_ent]]**: para un reservorio, [[DeltaS_ent]] = −[[Q_rev]]/T_reservorio.
5. **Verificar [[DeltaS_univ]] = 0**: si se cumple, el proceso es reversible.
6. **Si es un ciclo**: calcular [[eta_Carnot]] = 1 − [[T_frio]]/[[T_caliente]] y comparar con la eficiencia real.

## Casos especiales y ejemplo extendido

**Caso 1: Expansión isotérmica reversible** de un gas ideal. El gas se expande lentamente contra un pistón sin fricción, absorbiendo calor [[Q_rev]] de un reservorio a la misma temperatura T. [[DeltaS_sis]] = [[Q_rev]]/T > 0. [[DeltaS_ent]] = −[[Q_rev]]/T < 0. [[DeltaS_univ]] = 0. El proceso es reversible: se puede revertir comprimiendo el gas isotérmicamente y devolviendo todo el calor al reservorio.

**Caso 2: Compresión adiabática reversible** (isentrópica). No hay intercambio de calor: [[Q_rev]] = 0. [[DeltaS_sis]] = 0. [[DeltaS_ent]] = 0. [[DeltaS_univ]] = 0. El sistema se calienta por la compresión pero su entropía no cambia. Es la base de la compresión ideal en motores y compresores.

> [!TIP]
> En la compresión isentrópica, la temperatura sube aunque no haya calor. El aumento de T se debe al trabajo mecánico de compresión, no a transferencia de calor. La entropía no cambia porque el aumento de energía interna se compensa exactamente con la reducción de volumen.

**Caso 3: Ciclo de Carnot completo**. El ciclo combina una isoterma caliente, una adiabática reversible de enfriamiento, una isoterma fría y una adiabática reversible de calentamiento. En cada etapa, [[DeltaS_univ]] se mantiene nula. En el ciclo completo, el trabajo neto es la diferencia entre el calor absorbido y el cedido, y la eficiencia queda dada por la relación de Carnot.

## Preguntas reales del alumno

**¿Si un proceso reversible no existe en la realidad, para qué sirve estudiarlo?**
Sirve como referencia máxima. Igual que la velocidad de la luz es un límite inalcanzable pero esencial para la física relativista, el proceso reversible es un límite inalcanzable pero esencial para evaluar la eficiencia de cualquier máquina real. Sin esa referencia, no podríamos cuantificar cuánto trabajo se pierde por irreversibilidades.

**¿Un proceso cuasi-estático es siempre reversible?**
No. Un proceso cuasi-estático con fricción es lento pero irreversible: la fricción disipa energía como calor interno y genera entropía. Cuasi-estático es condición necesaria pero no suficiente para reversibilidad. Además, se necesita que no haya fricción, ni mezcla espontánea, ni gradientes finitos.

**¿Por qué la eficiencia de Carnot depende solo de las temperaturas?**
Porque la condición [[DeltaS_univ]] = 0 impone una relación fija entre el calor absorbido y el cedido: Q_C/Q_H = [[T_frio]]/[[T_caliente]]. Esta relación se deduce de la igualdad [[DeltaS_sis]](isoterma caliente) + [[DeltaS_sis]](isoterma fría) = 0 en el ciclo. El fluido de trabajo no aparece en la deducción.

**¿Puede una bomba de calor tener COP > 1?**
Sí, y no viola ninguna ley. El COP de una bomba de calor es Q_H/W, no una eficiencia en sentido estricto. El COP de Carnot para una bomba de calor compara [[T_caliente]] con la diferencia entre [[T_caliente]] y [[T_frio]], por lo que puede ser mucho mayor que 1. Esto es posible porque la bomba de calor «traslada» calor, no lo «crea».

## Conexiones transversales y rutas de estudio

Este leaf conecta directamente con:
- [Procesos irreversibles](leaf:física-clasica/termodinámica/entropía-y-segunda-ley/procesos-irreversibles): donde [[DeltaS_univ]] > 0 y la eficiencia es menor que Carnot.
- [Variación de entropía](leaf:física-clasica/termodinámica/entropía-y-segunda-ley/entropía/variación-de-entropía): herramientas de cálculo de [[DeltaS_sis]].
- [Definición de entropía](leaf:física-clasica/termodinámica/entropía-y-segunda-ley/entropía/definición): fundamento de por qué [[DeltaS_sis]] es función de estado.
- Análisis exergético: la exergía destruida es cero en procesos reversibles.

## Síntesis final

Un proceso reversible se define por [[DeltaS_univ]] = 0: no genera entropía neta en el universo. Requiere condiciones ideales (sin fricción, sin gradientes finitos, cuasi-estático) que son inalcanzables en la práctica. La eficiencia de Carnot [[eta_Carnot]] = 1 − [[T_frio]]/[[T_caliente]] es la consecuencia directa para máquinas térmicas cíclicas y constituye el techo teórico universal de rendimiento. Todo proceso real tiene [[DeltaS_univ]] > 0 y eficiencia menor que Carnot.
