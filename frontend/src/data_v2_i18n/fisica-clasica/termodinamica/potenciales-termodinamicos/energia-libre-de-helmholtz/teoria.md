# Energía libre de Helmholtz

## Contexto conceptual

La termodinámica clásica ofrecía criterios de espontaneidad basados en el calor liberado o en el aumento de la entropía del universo. Sin embargo, muchos experimentos reales se realizan en **recipientes rígidos** donde el volumen no puede cambiar: calorímetros de bomba, autoclaves selladas, celdas de alta presión con paredes inamovibles o simplemente un sistema confinado en un recipiente cerrado. En esas condiciones, la presión no permanece necesariamente constante y el criterio de Gibbs —diseñado para presión y temperatura constantes— deja de ser el árbitro directo.

Hermann von Helmholtz formuló en 1882 un potencial termodinámico que encapsula la contribución energética y entrópica referida al sistema a **volumen y temperatura constantes**. El resultado es [[DeltaA]], la variación de energía libre de Helmholtz, que determina si un proceso ocurre espontáneamente cuando el recipiente impide cualquier trabajo de expansión frente al entorno.

Este leaf estudia [[DeltaA]] como el **criterio de espontaneidad en sistemas confinados**: cómo se calcula a partir de [[DeltaU]] y [[DeltaS]], qué significa su signo, cómo la temperatura [[T]] puede invertir la dirección del proceso y qué trabajo máximo no expansivo puede extraerse.

## 🟢 Nivel esencial

Imagina un gas atrapado en un cilindro con émbolo **bloqueado**: no puede expandirse ni contraerse. Si ocurre una reacción química o un cambio de fase dentro de ese recipiente, el sistema no puede realizar trabajo mecánico de expansión contra la atmósfera. Lo que sí puede ocurrir es un intercambio de calor con el entorno termostatado y, en algunos casos, trabajo eléctrico o químico no expansivo.

[[DeltaA]] mide si ese proceso confinado ocurre por sí solo. Combina dos impulsos competidores: el **impulso energético** (tendencia a liberar energía interna, representado por [[DeltaU]]) y el **impulso entrópico** (tendencia hacia mayor dispersión, representado por [[DeltaS]] escalado por [[T]]). Si el balance favorece la evolución, [[DeltaA]] es negativa y el proceso es espontáneo. Si se opone, [[DeltaA]] es positiva y se necesita trabajo externo.

La temperatura [[T]] actúa como árbitro: a baja [[T]] suele dominar [[DeltaU]]; a alta [[T]] puede dominar el término entrópico. Cuando ambos impulsos compiten con el mismo signo, existe una **temperatura de inversión** [[T_inv]] que separa los dos regímenes.

## 🔵 Nivel formal

La definición completa de la energía libre de Helmholtz en términos de funciones de estado es:

{{f:definicion_helmholtz}}

Esta expresión establece que [[DeltaA]] es la diferencia entre la variación de energía interna [[DeltaU]] y el producto de la temperatura absoluta [[T]] por la variación de entropía [[DeltaS]]. Los tres parámetros son funciones de estado, de modo que [[DeltaA]] también lo es.

El criterio de espontaneidad derivado es directo:

- **[[DeltaA]] negativa**: el proceso es espontáneo a V y T constantes; libera un máximo de trabajo no expansivo igual al valor absoluto de [[DeltaA]].
- **[[DeltaA]] nula**: el sistema está en equilibrio termodinámico.
- **[[DeltaA]] positiva**: el proceso no es espontáneo; requiere un aporte mínimo de trabajo externo igual a [[DeltaA]].

La tabla de los cuatro casos según el signo de [[DeltaU]] y [[DeltaS]]:

| Caso | [[DeltaU]] | [[DeltaS]] | Espontaneidad |
|------|---------|---------|---------------|
| Siempre espontáneo | negativa | positiva | Para cualquier [[T]] |
| Nunca espontáneo | positiva | negativa | Nunca |
| Espontáneo a baja T | negativa | negativa | Solo si [[T]] es menor que [[T_inv]] |
| Espontáneo a alta T | positiva | positiva | Solo si [[T]] supera [[T_inv]] |

La temperatura de inversión se obtiene imponiendo [[DeltaA]] nula:

{{f:temperatura_inversion}}

Cuando [[DeltaU]] y [[DeltaS]] tienen el mismo signo, existe un umbral real positivo [[T_inv]]. Cuando tienen signos opuestos, no existe cruce y el proceso es siempre o nunca espontáneo.

## 🔴 Nivel estructural

La ecuación de Helmholtz revela que [[DeltaA]] es una **función lineal de la temperatura** cuando [[DeltaU]] y [[DeltaS]] se consideran independientes de [[T]]. La gráfica de [[DeltaA]] frente a [[T]] es una recta cuya pendiente es exactamente menos [[DeltaS]] y cuya ordenada en el origen (extrapolación a [[T]] nulo) es [[DeltaU]]. Esta geometría conecta directamente el gráfico con las propiedades físicas del proceso confinado.

Esta linealidad tiene límites claros. Si el sistema atraviesa transiciones de fase o si el rango de [[T]] es muy amplio, [[DeltaU]] y [[DeltaS]] dejan de ser constantes y la recta se curva. En mezclas multicomponente dentro de un recipiente rígido, [[DeltaA]] debe calcularse con potenciales químicos parciales, no con simples sumas de propiedades puras.

El potencial de Helmholtz [[A]] y su variación [[DeltaA]] tienen una interpretación profunda: [[DeltaA]] es el **trabajo máximo no expansivo** extraíble a V y T constantes. En una celda electroquímica sellada, en un motor molecular biológico o en un proceso de adsorción en un material poroso rígido, [[DeltaA]] cuantifica la energía disponible para trabajo que no implique cambiar el volumen del sistema.

> [!NOTE]
> La distinción entre Helmholtz y Gibbs es operativa, no meramente formal: usar [[DeltaA]] cuando el volumen está fijado por el recipiente; usar la energía libre de Gibbs (ΔG) cuando la presión del entorno permanece constante. Confundir las condiciones de validez es el error conceptual más frecuente en termodinámica aplicada.

> [!WARNING]
> A temperaturas por encima de 2000 K, la constancia de [[DeltaU]] y [[DeltaS]] es una mala aproximación. Las capacidades caloríficas cambian notablemente y pueden producirse disociaciones moleculares que alteran el balance de Helmholtz de forma significativa.

## Interpretación física profunda

El término [[T]]·[[DeltaS]] en la ecuación de Helmholtz representa la fracción de energía interna que el sistema debe «entregar» al entorno en forma de calor reversible para mantener la temperatura constante mientras reorganiza su estructura molecular. La diferencia entre [[DeltaU]] y ese intercambio máximo es exactamente la energía que queda disponible como trabajo no expansivo: esa es [[DeltaA]].

Esta interpretación hace evidente por qué [[DeltaA]] es el criterio correcto para sistemas confinados: no pregunta cuánta energía total cambia, sino cuánta queda libre para hacer trabajo sin cambiar el volumen. Un proceso que libera mucha energía interna pero también destruye mucha entropía (crea orden) puede tener poco trabajo útil disponible.

El caso de la condensación de vapor en un recipiente rígido ilustra bien este razonamiento. La transición líquido-vapor reduce el desorden molecular ([[DeltaS]] negativa) pero libera energía interna ([[DeltaU]] negativa en la dirección de condensación). A temperatura baja domina [[DeltaU]] y la condensación es espontánea; a temperatura alta domina el término entrópico y la evaporación prevalece.

## Orden de magnitud

En la fusión del hielo a 273 K en un recipiente rígido, [[DeltaA]] es prácticamente nula (equilibrio de fases). A 250 K, [[DeltaA]] es ligeramente negativa, del orden de unos pocos kJ/mol, indicando que la solidificación es espontánea. En reacciones de isomerización en fase líquida confinada, [[DeltaA]] típicamente oscila entre menos 50 kJ/mol y más 50 kJ/mol.

Para procesos de adsorción de gases en materiales porosos rígidos a 298 K, [[DeltaA]] negativa de unos 20–40 kJ/mol indica adsorción espontánea. Una [[DeltaA]] de magnitud inferior a 1 kJ/mol indica un equilibrio muy sensible a pequeñas perturbaciones de temperatura. Valores superiores a 100 kJ/mol indican procesos muy favorables termodinámicamente en el recipiente confinado.

> [!TIP]
> Si un cálculo produce [[DeltaA]] en el orden de gigajulios, verificar si [[DeltaU]] y [[DeltaS]] están en julios o en kilojulios. Una mezcla de unidades es el error más frecuente y produce resultados mil veces mayores de lo esperado.

## Método de resolución personalizado

Para aplicar el criterio de Helmholtz de forma segura, seguir esta secuencia:

1. **Identificar el proceso y el sistema**: determinar si se trabaja a V y T constantes (recipiente rígido termostatado).
2. **Obtener [[DeltaU]] y [[DeltaS]]**: de tablas termodinámicas, calorimetría o cálculo teórico; verificar unidades coherentes.
3. **Expresar [[T]] en kelvin**: convertir siempre desde Celsius añadiendo 273.15.
4. **Calcular [[DeltaA]]**: aplicar la definición de Helmholtz restando el término entrópico del energético.
5. **Leer el signo**: negativo implica proceso espontáneo; positivo implica no espontáneo; cero implica equilibrio.
6. **Calcular [[T_inv]] si procede**: si [[DeltaU]] y [[DeltaS]] tienen el mismo signo, existe temperatura de inversión.
7. **Verificar coherencia**: comprobar que la tabla de casos es consistente con el resultado obtenido.

## Casos especiales y ejemplo extendido

**Proceso con ambos impulsos favorables**: Si [[DeltaU]] es negativa y [[DeltaS]] es positiva, [[DeltaA]] es negativa para cualquier [[T]] positivo. La oxidación de un metal en un recipiente sellado con aumento de entropía por formación de gas es un ejemplo. No existe [[T_inv]] real.

**Proceso con ambos impulsos desfavorables**: Si [[DeltaU]] es positiva y [[DeltaS]] es negativa, [[DeltaA]] es positiva para cualquier temperatura positiva. La síntesis de un cristal perfecto a partir de un líquido desordenado en un recipiente rígido entra en esta categoría.

**Proceso con competición de impulsos**: Cuando [[DeltaU]] y [[DeltaS]] tienen el mismo signo, [[T_inv]] separa dos regímenes. La evaporación de un líquido confinado en un recipiente rígido parcialmente lleno tiene [[DeltaU]] positiva y [[DeltaS]] positiva: por debajo de [[T_inv]] la condensación domina; por encima, la evaporación es espontánea.

## Preguntas reales del alumno

**¿Por qué no usar siempre Gibbs en lugar de Helmholtz?**
Porque Gibbs asume presión constante del entorno. En un recipiente rígido la presión interna cambia durante el proceso y el trabajo de expansión no está disponible. [[DeltaA]] es el criterio correcto cuando el volumen está fijado mecánicamente.

**¿Qué ocurre exactamente cuando [[DeltaA]] vale cero?**
El sistema está en equilibrio dinámico dentro del recipiente confinado. Cualquier pequeña perturbación desplazará el sistema hacia el equilibrio, no lejos de él.

**¿Puede [[T_inv]] ser negativa?**
No, una temperatura negativa en kelvin es físicamente imposible. Si el cálculo produce [[T_inv]] negativa, significa que [[DeltaU]] y [[DeltaS]] tienen signos opuestos; no existe umbral de inversión.

**¿Cómo se relaciona [[DeltaA]] con el trabajo máximo?**
El trabajo máximo no expansivo extraíble de un proceso reversible a V y T constantes es igual al valor absoluto de [[DeltaA]] cuando esta es negativa. El signo negativo de [[DeltaA]] indica que el sistema puede ceder esa energía como trabajo útil.

## Conexiones transversales y rutas de estudio

[[DeltaA]] conecta directamente con la energía interna [[DeltaU]]: el leaf [Energía interna](leaf:fisica-clasica/termodinamica/potenciales-termodinamicos/energia-interna) desarrolla el primer principio y las transformaciones a volumen constante. La entropía [[DeltaS]] se estudia en [Definición de entropía](leaf:fisica-clasica/termodinamica/entropia-y-segunda-ley/entropia/definicion).

La energía libre de Gibbs, hermana de Helmholtz para condiciones de presión constante, está en [Energía libre de Gibbs](leaf:fisica-clasica/termodinamica/potenciales-termodinamicos/energia-libre-de-gibbs). La termodinámica estadística conecta [[DeltaA]] con la función de partición canónica a través de la relación fundamental entre el potencial de Helmholtz y el logaritmo de la función de partición.

## Síntesis final

[[DeltaA]] es el criterio operativo de espontaneidad cuando el sistema no puede cambiar su volumen: combina el impulso energético de [[DeltaU]] con el entrópico de [[T]]·[[DeltaS]] en una sola magnitud evaluable. Su signo determina la dirección del proceso; su magnitud cuantifica el trabajo no expansivo máximo disponible. La temperatura [[T_inv]] marca el umbral donde la competición entre energía y entropía invierte el veredicto termodinámico.
