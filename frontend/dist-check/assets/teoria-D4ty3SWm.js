const e=`# Flujo de energía

## Contexto conceptual

La energía en una onda no permanece estática: fluye desde la fuente que la genera hacia los receptores que la absorben. Este **transporte energético** es lo que distingue a las ondas de otras perturbaciones físicas. Una onda estacionaria, por ejemplo, almacena energía pero no la transporta de manera neta. En cambio, una onda progresiva funciona como un **conducto energético dinámico**, transfiriendo capacidad de realizar trabajo a través del espacio.

El flujo de energía describe **cuánta potencia atraviesa cada unidad de área perpendicular** a la propagación. Es fundamental en acústica, óptica y electromagnetismo. Comprenderlo permite diseñar transmisiones eficientes, protegerse de radiaciones y optimizar la recepción de señales.

## 🟢 Nivel esencial

Imagina una cuerda tensa que oscila transversalmente. Cada segmento de la cuerda se mueve arriba y abajo, pero la **energía viaja horizontalmente**, siguiendo la dirección de la cuerda. Este es el flujo de energía: el movimiento de la perturbación transporta capacidad de realizar trabajo desde la mano que agita la cuerda hasta el extremo opuesto.

La **densidad de flujo de energía** [[S_flujo]] indica cuánta potencia fluye por cada metro cuadrado perpendicular a la propagación. Su valor depende de dos factores esenciales: cuánta energía almacena el medio (la densidad de energía [[u_energia]]) y qué tan rápido se desplaza esa energía (la velocidad [[v]]). Una cuerda muy tensa (alta velocidad) puede transportar mucha energía incluso con amplitud moderada.

> [!TIP]
> El flujo es como el caudal de un río: depende de cuánta agua hay (densidad) y de qué tan rápido fluye (velocidad). Doblar cualquiera de los dos duplica el transporte.

## 🔵 Nivel formal

La relación fundamental entre flujo de energía, densidad de energía y velocidad de propagación establece que el flujo es el producto de la densidad por la velocidad:

{{f:flujo_energia_densidad}}

Esta ecuación vectorial describe cómo la energía almacenada en el medio se desplaza con la perturbación. En ondas unidimensionales como las de cuerda, el flujo se expresa en watts por metro (W/m) ya que el área perpendicular es simplemente la longitud unitaria a lo largo de la cuerda.

Para ondas transversales en cuerdas, la densidad de energía depende de la densidad lineal [[mu]], la frecuencia angular [[omega]] y el cuadrado de la amplitud [[A]]. Sustituyendo en la expresión del flujo obtenemos:

{{f:flujo_energia_cuerda}}

Esta relación revela la **dependencia cuadrática** tanto de la amplitud como de la frecuencia. Duplicar la amplitud cuadruplica el flujo; duplicar la frecuencia también cuadruplica el flujo. Esta no linealidad explica por qué pequeños cambios en la excitación de una onda producen grandes variaciones en su transporte energético.

La potencia total [[P_onda]] transportada por la onda a través de una sección perpendicular resulta del producto del flujo por el área interceptada:

{{f:potencia_desde_flujo}}

Esta ecuación conecta la intensidad local (flujo) con la capacidad total de transmisión energética (potencia).

## 🔴 Nivel estructural

El flujo de energía en ondas mecánicas emerge de la **interacción entre componentes cinética y potencial** de la energía almacenada. En una onda armónica, estos componentes oscilan desfasados en el espacio: donde la velocidad transversal es máxima (energía cinética dominante), la deformación es mínima (energía potencial mínima). Sin embargo, ambas contribuyen igualmente a la media temporal, y su suma determina la densidad total que se desplaza.

La dirección del flujo sigue la **dirección de propagación de la onda**, no la dirección de oscilación de las partículas del medio. En ondas transversales, las partículas oscilan perpendicularmente a la dirección del flujo energético. Esta distinción es crucial: la velocidad de propagación [[v]] determina la dirección del transporte, mientras que la velocidad transversal de oscilación describe el movimiento local de las partículas.

En el **límite de ondas estacionarias**, el flujo neto se anula porque la onda resultante es superposición de dos ondas progresivas de igual amplitud y direcciones opuestas. En los nodos de desplazamiento, el flujo es máximo (máxima transmisión local); en los vientres, el flujo es nulo (energía puramente almacenada, sin transporte neto). Esta distribución espacial del flujo caracteriza la estructura energética de las ondas estacionarias.

## Interpretación física profunda

El flujo de energía constituye la **manifestación observable del transporte ondulatorio**. Mientras la densidad de energía describe el estado local del medio, el flujo revela la **conectividad causal** entre diferentes regiones del espacio: una perturbación en la fuente afecta al receptor precisamente porque el flujo transporta información energética entre ambos.

El **signo del flujo** adquiere significado físico fundamental. Un flujo positivo indica transporte en el sentido de propagación definido como positivo; un flujo negativo, transporte en sentido opuesto. En medios disipativos, el flujo decrece monótonamente desde la fuente, reflejando la conversión de energía mecánica en térmica. En medios conservativos, el flujo permanece constante (en régimen estacionario), garantizando la conservación global de la energía.

La **proporcionalidad cuadrática** del flujo con amplitud y frecuencia tiene implicaciones profundas. Sistemas que operan con ondas de alta frecuencia pueden transmitir energía sustancial con amplitudes reducidas, minimizando deformaciones no deseadas del medio. Por el contrario, sistemas de baja frecuencia requieren grandes amplitudes para transportar potencia comparable, lo que puede inducir efectos no lineales y disipación adicional.

## Orden de magnitud

El flujo de energía ondulatorio abarca rangos extraordinariamente amplios. En **ondas de sonido audibles**, el umbral de audición corresponde a un flujo de aproximadamente 10⁻¹² W/m² (0 dB), mientras que el dolor auditivo se alcanza con 10 W/m² (130 dB) — un factor de 10¹³ entre ambos extremos. Esto demuestra la extraordinaria sensibilidad del oído humano y la amplia gama de intensidades que las ondas pueden presentar.

En **ondas electromagnéticas**, la irradiancia solar en la Tierra es de aproximadamente 10³ W/m². Los láseres de alta potencia alcanzan flujos de 10¹² W/m² o superiores, capaces de ionizar materiales instantáneamente. Las señales de radioastronomía, en contraste, pueden ser tan débiles como 10⁻²⁶ W/m², requiriendo antenas gigantescas y electrónica ultrasensible para su detección.

Para detectar errores de cálculo, verificar que el flujo resultante no exceda valores físicamente razonables para el sistema considerado. En cuerdas musicales, flujos superiores a 10³ W/m indicarían amplitudes destructivas o frecuencias inaudibles. En sistemas acústicos, flujos negativos (considerando magnitud escalar) son físicamente imposibles sin una redefinición explícita de la convención de signos.

## Método de resolución personalizado

Para calcular el flujo de energía en sistemas ondulatorios, seguir esta secuencia operativa:

1. **Identificar el tipo de onda**: ondas mecánicas en cuerdas, ondas acústicas, ondas electromagnéticas, etc. Cada tipo tiene expresiones específicas para la densidad de energía.

2. **Determinar la densidad de energía**: para ondas en cuerdas, calcular [[u_energia]] a partir de [[mu]], [[omega]] y [[A]]. Verificar que todas las magnitudes estén en unidades coherentes (SI).

3. **Obtener la velocidad de propagación**: usar la expresión apropiada para el medio. En cuerdas, [[v]] depende de la tensión y [[mu]].

4. **Aplicar la relación de flujo**: calcular [[S_flujo]] como producto de [[u_energia]] por [[v]]. La verificación dimensional debe cerrar como flujo de potencia por área.

5. **Calcular la potencia total**: si se conoce el área perpendicular interceptada, obtener [[P_onda]] multiplicando [[S_flujo]] por el área.

> [!WARNING]
> Verificar siempre que se usa la frecuencia angular [[omega]] en rad/s, no la frecuencia ordinaria en Hz. El error por factor (2π)² ≈ 39.5 es frecuente y significativo.

## Casos especiales y ejemplo extendido

**Ondas estacionarias**: En una onda estacionaria perfecta, el flujo neto es nulo en cualquier punto porque la energía fluye igualmente en ambas direcciones. Sin embargo, localmente existen flujos instantáneos no nulos que oscilan temporalmente. La energía queda "atrapada" entre nodos, oscilando entre formas cinética y potencial sin transporte neto.

**Ondas en medios disipativos**: En cuerdas reales con rozamiento o en tubos con absorción acústica, el flujo disminuye exponencialmente con la distancia recorrida. La potencia disponible en el receptor es menor que la emitida por la fuente, y la diferencia se convierte en calor.

**Ejemplo extendido - Cuerda de guitarra**: Una cuerda de acero con [[mu]] = 4×10⁻⁴ kg/m, tensada para propagar a [[v]] = 300 m/s, vibrando con [[A]] = 2 mm y [[omega]] = 2000 rad/s (frecuencia fundamental ~318 Hz), presenta una densidad de energía de aproximadamente 1.6 J/m. El flujo de energía resulta de 480 W/m, significando que cada metro de cuerda transmite casi medio kilovatio de potencia mecánica. Esta potencia se disipa gradualmente en el aire (produciendo sonido) y en los soportes de la cuerda, amortiguando la vibración en pocos segundos.

## Preguntas reales del alumno

**¿Por qué el flujo depende del cuadrado de la amplitud y no linealmente?**

La energía cinética de un elemento de cuerda depende del cuadrado de su velocidad transversal, y esta velocidad es proporcional a la amplitud por la frecuencia. Similarmente, la energía potencial depende del cuadrado de la deformación, también proporcional a la amplitud. Al combinar ambas contribuciones, la densidad de energía resulta proporcional a [[A]]², y por tanto el flujo hereda esta dependencia cuadrática.

**¿Cómo puede haber flujo de energía si las partículas del medio solo oscilan en su posición de equilibrio?**

Las partículas individuales no se desplazan con la onda, pero sí transmiten energía a sus vecinas mediante las fuerzas de tensión (en cuerdas) o presión (en fluidos). Es como una fila de dominós: cada pieza permanece en su lugar, pero la perturbación (y la energía asociada) viaja a través de la interacción entre elementos consecutivos.

**¿Por qué el flujo de una onda estacionaria es cero si la cuerda sigue vibrando?**

En la onda estacionaria hay dos ondas progresivas viajando en direcciones opuestas. Cada una transporta energía, pero los flujos son iguales y contrarios, cancelándose netamente. La energía queda confinada entre nodos, intercambiándose localmente entre formas cinética y potencial, sin dirección preferente de transporte.

**¿Qué sucede con el flujo cuando la onda alcanza un extremo fijo de la cuerda?**

En un extremo fijo, el flujo incidente se refleja completamente. Durante un instante, el flujo neto local puede anularse o incluso invertirse transitoriamente. El extremo fijo no absorbe energía (idealmente), por lo que toda la potencia que llega debe retornar hacia la fuente, estableciendo una onda estacionaria si las condiciones son adecuadas.

## Conexiones transversales y rutas de estudio

El flujo de energía conecta directamente con [intensidad ondulatoria](leaf:fisica-clasica/ondas/energia-y-transporte/intensidad-ondulatoria), donde se analiza la potencia por unidad de área en contextos tridimensionales como el sonido en el aire o la luz en el espacio.

En [ondas electromagnéticas](leaf:fisica-clasica/ondas/ondas-electromagnéticas/naturaleza-de-las-ondas-em), el concepto de flujo se formaliza mediante el **vector de Poynting**, que describe el transporte energético de campos eléctricos y magnéticos oscilantes. La matemática es distinta pero la interpretación física permanece: densidad de energía de campo multiplicada por velocidad de propagación.

La conservación del flujo energético en ausencia de disipación enlaza con los principios de [trabajo y energía](leaf:fisica-clasica/mecanica/trabajo-y-energia/teorema-trabajo-energia) en mecánica clásica. La potencia transmitida por la onda equivale al trabajo por unidad de tiempo que la onda puede realizar sobre un receptor.

Para profundizar en las aplicaciones tecnológicas, estudiar [ondas estacionarias](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-cuerdas/ondas-estacionarias) y su uso en instrumentos musicales, donde el confinamiento energético (flujo neto nulo pero almacenamiento máximo) es el principio operativo fundamental.

## Síntesis final

El flujo de energía constituye la **manifestación dinámica del transporte ondulatorio**, cuantificando cuánta potencia atraviesa cada unidad de área perpendicular a la propagación. Su dependencia cuadrática con la amplitud y la frecuencia confiere a las ondas una extraordinaria capacidad de transmitir energía con alta eficiencia cuando se operan en rangos apropiados.

Comprender el flujo requiere distinguir entre **almacenamiento** (densidad de energía) y **transporte** (flujo), entre **oscilación local** (velocidad de partículas) y **propagación global** (velocidad de la onda). En medios conservativos, el flujo permanece constante desde fuente hasta receptor; en medios reales, la atenuación por disipación reduce gradualmente la potencia disponible.

Las ondas progresivas transportan energía; las ondas estacionarias la confinan. Esta distinción estructural, gobernada por la dirección y magnitud del flujo, determina el comportamiento energético de todo sistema ondulatorio y subyace a innumerables aplicaciones tecnológicas, desde la transmisión inalámbrica hasta la resonancia mecánica.
`;export{e as default};
