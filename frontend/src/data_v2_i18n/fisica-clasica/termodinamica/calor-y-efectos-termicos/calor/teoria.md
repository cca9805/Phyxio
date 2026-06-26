# Calor

## Contexto conceptual

El calor es uno de los conceptos más malinterpretados de la física. En el lenguaje cotidiano se habla de "calor almacenado" en un cuerpo, de "tener calor" o de "perder calor", pero estas expresiones son físicamente incorrectas. En termodinámica, el **calor no es una propiedad del sistema**: es energía en tránsito, un proceso de transferencia que ocurre únicamente cuando existe diferencia de temperatura entre dos sistemas.

Este leaf se sitúa dentro del bloque de calor y efectos térmicos, como paso previo a la comprensión de la calorimetría y de la primera ley de la termodinámica. Entender el calor como proceso y no como sustancia es el prerequisito conceptual para toda termodinámica posterior.

El concepto de calor está íntimamente ligado al de temperatura, pero son magnitudes radicalmente distintas: la temperatura describe el estado de un sistema, mientras que el calor describe un intercambio entre sistemas. Distinguir estos dos conceptos con precisión es el primer salto conceptual de la termodinámica.

## 🟢 Nivel esencial

Cuando tocas un objeto caliente, sientes que "el calor pasa" hacia tu mano. Esto describe con precisión lo que ocurre: la energía fluye desde el cuerpo más caliente hacia el más frío. Ese flujo de energía es lo que llamamos **calor** [[Q]].

El calor no existe como propiedad de un cuerpo; solo existe durante el proceso de transferencia. Una vez que los dos cuerpos alcanzan el equilibrio, el calor ha cesado. Lo que queda es una nueva temperatura de equilibrio, no "calor acumulado".

La cantidad de calor absorbida por un cuerpo depende de tres factores: cuánta materia hay ([[m]]), de qué material está hecho ([[c_esp]]) y cuánto cambia su temperatura ([[DeltaT]]). Materiales distintos responden de forma muy diferente al mismo aporte de energía: el agua necesita mucho más calor que el hierro para calentarse en la misma cantidad.

Una lectura esencial útil es separar dos preguntas: cuánta energía se transfiere y qué efecto observable produce. Si la temperatura no cambia durante una transición, la energía sigue entrando o saliendo, pero no aparece como calentamiento.

## 🔵 Nivel formal

La transferencia de calor sin cambio de estado —llamada calor **sensible**— sigue la relación:

{{f:calor_sensible}}

Aquí [[Q]] es la energía transferida en julios, [[m]] la masa en kilogramos, [[c_esp]] el calor específico del material en J/(kg·K), y [[DeltaT]] la diferencia entre temperatura final e inicial en kelvin o grados Celsius.

El signo de [[Q]] es crucial: si [[DeltaT]] es positivo (el sistema se calienta), [[Q]] es positivo y el sistema absorbe calor. Si [[DeltaT]] es negativo (el sistema se enfría), [[Q]] es negativo y el sistema cede calor al entorno.

Cuando el proceso involucra un **cambio de estado** —fusión, vaporización, solidificación o condensación— la temperatura permanece constante durante toda la transición aunque se transfiera energía. En ese caso, el calor intercambiado es **calor latente**:

{{f:calor_latente}}

donde [[L]] es el calor latente específico del material (en J/kg). El signo del proceso completo depende de la dirección de la transición: la fusión y vaporización son endotérmicas ([[Q]] > 0), mientras que la solidificación y condensación son exotérmicas ([[Q]] < 0).

La elección entre calor sensible y calor latente depende del tramo físico. Si hay variación de temperatura, [[DeltaT]] marca el proceso. Si hay cambio de fase a temperatura constante, [[L]] sustituye a [[c_esp]] como propiedad dominante.

## 🔴 Nivel estructural

La distinción entre calor sensible y calor latente revela la estructura profunda de cómo la energía se distribuye en la materia. En el calor sensible, la energía va a aumentar la agitación térmica de las moléculas (energía cinética promedio), lo que se manifiesta como aumento de temperatura. En el calor latente, la energía se invierte en romper o formar enlaces entre moléculas —energía potencial intermolecular— sin que cambie la energía cinética promedio, por eso la temperatura no varía.

Esta distinción tiene consecuencias prácticas de gran relevancia. El calor latente de vaporización del agua a 100 °C es aproximadamente 2 260 000 J/kg, frente a los 334 000 J/kg del calor de fusión. Para elevar el agua desde 0 °C hasta 100 °C se necesitan unos 419 000 J/kg; sin embargo, para completar la vaporización a 100 °C se necesitan más de cinco veces esa cantidad. Esto explica por qué las quemaduras de vapor son mucho más graves que las de agua hirviendo a la misma temperatura.

El calor específico del agua líquida —4186 J/(kg·K)— es excepcionalmente alto comparado con la mayoría de materiales sólidos y líquidos. Esta anomalía tiene origen en la red de puentes de hidrógeno del agua, que almacenan energía sin elevar significativamente la temperatura. Esta propiedad hace del agua un regulador térmico insustituible tanto en los organismos vivos como en los sistemas climáticos planetarios.

Desde el punto de vista formal, el calor no es una función de estado: su valor depende del camino termodinámico seguido, no solo del estado inicial y final. Dos procesos que llevan al mismo sistema desde el mismo estado inicial al mismo estado final pueden intercambiar cantidades distintas de calor. Esta dependencia del camino es lo que diferencia al calor del trabajo y de la energía interna en la primera ley de la termodinámica.

La unidad SI es el julio (J). **Caloría** equivale a 4.186 J; kilocaloría nutricional equivale a 4186 J.

## Interpretación física profunda

El signo de [[Q]] es la brújula del proceso térmico. Un [[Q]] positivo indica que el entorno aporta energía al sistema; el sistema es el "receptor" del proceso. Un [[Q]] negativo indica que el sistema entrega energía al entorno; el sistema es el "cedente".

En un proceso con cambio de estado, el calor latente actúa como una "esclusa" energética: el sistema absorbe o entrega energía sin que la temperatura registre ningún cambio observable. Para un observador que solo mide temperatura, la transición parece un paréntesis en el que "nada pasa", cuando en realidad se está reorganizando la estructura molecular.

> [!NOTE]
> El calor [[Q]] y la temperatura son magnitudes radicalmente distintas. Temperatura es un estado; calor es un proceso. Un cuerpo puede estar a alta temperatura y ceder poca energía (si su calor específico o su masa son pequeños), o estar a temperatura moderada y ceder mucha energía (si [[m]] o [[c_esp]] son grandes).

## Orden de magnitud

Para agua: calentar 1 kg de 20 °C a 100 °C requiere 4186 × 1 × 80 ≈ 335 000 J, es decir, algo menos de 0.1 kWh. Para hervir completamente ese mismo kilogramo (vaporización completa a 100 °C) se necesitan unos 2 260 000 J adicionales, equivalentes a unos 0.63 kWh.

Para metales: el cobre tiene [[c_esp]] ≈ 386 J/(kg·K) y el aluminio ≈ 900 J/(kg·K). Para el mismo aumento de temperatura y la misma masa, el aluminio requiere más del doble de energía que el cobre.

Un resultado de [[Q]] del orden de 10⁶ J o superior para masas de unos pocos kilogramos con variaciones de temperatura normales es una señal de error de unidades. Del mismo modo, un [[Q]] del orden de 10⁻² J para masas en el rango de kilogramos sugiere que el calor específico fue introducido en cal/(g·°C) sin convertir.

## Método de resolución personalizado

1. **Identificar el tipo de proceso**: ¿hay cambio de estado? Si no lo hay, usar calor sensible. Si lo hay, separar el proceso en tramos y aplicar calor latente en la transición.
2. **Verificar unidades antes de calcular**: masa en kg, calor específico en J/(kg·K), temperaturas en K o °C (el incremento es idéntico).
3. **Calcular [[DeltaT]] correctamente**: siempre como T_final − T_inicial. El signo resultante determina el signo de [[Q]].
4. **Aplicar la fórmula correspondiente** y verificar que el signo de [[Q]] es coherente con la intuición física del proceso.
5. **Comprobar el orden de magnitud**: comparar con los valores típicos de la tabla de calores específicos y latentes.

## Casos especiales y ejemplo extendido

**Proceso mixto (sensible + latente)**: Para fundir completamente 500 g de hielo a −10 °C hasta obtener agua a 20 °C, el proceso tiene tres tramos: (1) calentar el hielo de −10 °C a 0 °C con el calor específico del hielo (2090 J/(kg·K)), (2) fundir el hielo a 0 °C con el calor latente de fusión (334 000 J/kg), y (3) calentar el agua de 0 °C a 20 °C con el calor específico del agua (4186 J/(kg·K)). Los tres calores deben sumarse para obtener [[Q]] total. El tramo de fusión representa más del 90 % del total en este ejemplo.

**Proceso adiabático**: Si [[Q]] es nulo, no hay intercambio de calor. Esto puede ocurrir porque el proceso es muy rápido (sin tiempo para transferir calor) o porque el sistema está perfectamente aislado. En un proceso adiabático la temperatura puede cambiar igualmente, pero ese cambio de temperatura se debe al trabajo realizado sobre el sistema, no a transferencia de calor.

> [!WARNING]
> Un error muy frecuente es calcular [[DeltaT]] como T_inicial − T_final. Este error invierte el signo de [[Q]] y conduce a resultados físicamente inconsistentes: un sistema que se enfría parecería absorber calor.

## Preguntas reales del alumno

**¿Por qué el agua tarda tanto en hervir pero se enfría rápido en el vaso?**
El calentamiento hasta 100 °C implica calor sensible con un [[c_esp]] alto, lo que requiere mucha energía. Una vez que el agua está a temperatura ambiente en el vaso, la cesión de calor al entorno es un proceso continuo pero más lento que la fuente de calor del fogón. La asimetría entre calentamiento (fuente concentrada) y enfriamiento (disipación a temperatura ambiente) explica la diferencia de velocidades percibida.

**¿Si la temperatura no cambia durante la fusión, significa que no se transfiere energía?**
No. Durante la fusión se transfiere exactamente [[Q]] = [[m]] · [[L]] de energía, pero esa energía se invierte en romper la estructura cristalina del sólido, no en aumentar la agitación térmica. Por eso la temperatura se mantiene constante: la agitación media no aumenta, pero la energía potencial intermolecular sí.

**¿El calor específico del agua cambia con la temperatura?**
Sí, aunque de forma modesta en el rango habitual. Entre 0 °C y 100 °C el [[c_esp]] del agua varía en menos del 1 %, por lo que se puede considerar constante para cálculos estándar. A temperaturas extremas o en otras fases (hielo o vapor) el calor específico cambia de forma significativa.

**¿Por qué el calor depende del camino y no solo del estado inicial y final?**
Porque el calor no es una función de estado. El sistema puede llegar desde A hasta B por muchos caminos termodinámicos diferentes (a presión constante, a volumen constante, combinaciones), y en cada camino el calor intercambiado es distinto. Solo la energía interna y la entropía son funciones de estado; el calor y el trabajo son funciones de camino.

## Conexiones transversales y rutas de estudio

El calor es la magnitud de entrada de la [calorimetría](leaf:física-clasica/termodinámica/calor-y-efectos-térmicos/calorimetria), donde se aplica el principio de conservación de energía a mezclas de sistemas. También es uno de los dos términos de la [primera ley de la termodinámica](leaf:física-clasica/termodinámica/trabajo-y-primera-ley/primera-ley-de-la-termodinámica), junto con el trabajo.

Las [temperaturas](leaf:física-clasica/termodinámica/calor-y-efectos-térmicos/temperatura) son el prerequisito conceptual: sin entender qué mide la temperatura, no se puede interpretar correctamente el signo de [[DeltaT]] ni el sentido del flujo de [[Q]].

La [transferencia de calor](leaf:física-clasica/termodinámica/transferencia-de-calor/conduccion) estudia los mecanismos por los que [[Q]] fluye (conducción, convección, radiación), que son el "cómo" del proceso cuya "cuánto" define este leaf.

## Síntesis final

El calor [[Q]] es energía en tránsito impulsada por una diferencia de temperatura. Su magnitud en procesos sin cambio de estado depende linealmente de la masa, el calor específico del material y la variación de temperatura; durante un cambio de estado, depende de la masa y el calor latente. El signo de [[Q]] es la información más relevante del proceso: determina si el sistema gana o pierde energía y es coherente en todos los casos con el signo de [[DeltaT]].
