const e=`# Ecuación de onda electromagnética

## Contexto conceptual

Las ecuaciones de Maxwell son cuatro leyes que gobiernan los campos [[E]] y [[B]] en todo punto del espacio y del tiempo. Por separado, cada ecuación describe una relación local: cuánta divergencia o rotacional tiene el campo en cada punto. Pero cuando se combinan —aplicando rotacional a la ley de Faraday y sustituyendo la ley de Ampère-Maxwell— emerge algo inesperado: una ecuación de onda.

Esta deducción fue el mayor logro teórico del siglo XIX. Maxwell no midió nada nuevo: solo manipuló las ecuaciones que ya conocía y encontró que los campos eléctrico y magnético podían propagarse solos, sin soporte material, a una velocidad que resultó coincidir exactamente con la velocidad de la luz. El electromagnetismo y la óptica, dos ramas aparentemente distintas, quedaron unificadas en un solo marco.

El resultado concreto es la **ecuación de onda electromagnética**, que dice que [[E]] y [[B]] se propagan como ondas a la velocidad [[c]], y que [[c]] es una consecuencia directa de las constantes [[epsilon0]] y [[mu0]] del vacío.

## 🟢 Nivel esencial

Una onda de luz es un campo eléctrico [[E]] y un campo magnético [[B]] que oscilan simultáneamente y se sostienen mutuamente. El campo [[E]] variable genera [[B]], y el [[B]] variable genera [[E]]: los dos campos se alimentan entre sí y se propagan por el vacío sin necesidad de ningún medio material.

La clave es la velocidad: la onda se propaga a [[c]], aproximadamente trescientos millones de metros por segundo. Esta velocidad no se mide directamente; **se deduce de los valores de [[epsilon0]] y [[mu0]]**, las constantes que describen cómo responde el vacío a los campos eléctricos y magnéticos. El hecho de que ese número coincidiera con la velocidad de la luz medida por Fizeau en 1849 fue la señal de que la luz es una onda electromagnética.

Una onda electromagnética en el vacío es siempre **transversal**: [[E]] y [[B]] oscilan perpendicularmente a la dirección de propagación y perpendicularmente entre sí. No hay oscilación en la dirección de avance; toda la energía viaja hacia adelante.

## 🔵 Nivel formal

La deducción parte de las ecuaciones diferenciales de Maxwell en el vacío (sin cargas ni corrientes). Se aplica el operador rotacional a la ley de Faraday:

{{f:onda_E}}

El término de la derecha contiene la segunda derivada temporal de [[E]]. El coeficiente que multiplica esa derivada es el producto [[mu0]]·[[epsilon0]]. Comparando con la forma estándar de la ecuación de onda escalar ∇²f = (1/v²)∂²f/∂t², se identifica inmediatamente la velocidad de propagación:

{{f:velocidad_luz}}

El valor numérico de [[c]] = 1/√(μ₀ε₀) es aproximadamente 2.998×10⁸ m/s, coincidiendo con la velocidad de la luz en el vacío medida experimentalmente. El mismo procedimiento con la ley de Ampère-Maxwell produce la ecuación simétrica para [[B]]:

{{f:onda_B}}

Ambos campos satisfacen la misma ecuación, confirma que se propagan a [[c]] con idéntica estructura. Para una onda plana que viaja en la dirección +x, la relación entre [[omega]] y [[k]] se obtiene sustituyendo la forma exponencial en la ecuación de onda:

{{f:relacion_dispersion}}

Esta **relación de dispersión lineal** significa que en el vacío no hay dispersión: todas las frecuencias se propagan a la misma velocidad [[c]]. La solución explícita más simple es la onda plana monocromática:

{{f:solucion_onda_plana_E}}

donde [[E]] oscila en el plano yz (transversal a x), con frecuencia [[omega]] y número de onda [[k]] ligados por [[omega]] = [[c]]·[[k]]. La longitud de onda [[lambda]] = 2π/[[k]] y la frecuencia f = [[omega]]/(2π) determinan la posición en el espectro electromagnético.

## 🔴 Nivel estructural

La ecuación de onda electromagnética no es solo una fórmula: es la manifestación de que el vacío tiene propiedades dinámicas. Las constantes [[epsilon0]] y [[mu0]] no son parámetros arbitrarios; están fijadas por las interacciones eléctricas y magnéticas fundamentales. Su producto determina [[c]], y el hecho de que [[c]] sea finita y universal es una consecuencia directa de la estructura del campo electromagnético.

**Carácter vectorial y polarización.** La ecuación de onda es vectorial: cada componente de [[E]] satisface una ecuación de onda escalar independiente. Esto da lugar al fenómeno de la **polarización**: la dirección de oscilación de [[E]] en el plano transversal puede ser lineal, circular o elíptica, dependiendo de la relación de fase y amplitud entre las componentes. La polarización es una propiedad puramente electromagnética sin equivalente en las ondas mecánicas escalares.

**Relación entre E y B en la onda.** En una onda plana, la amplitud de [[E]] es aproximadamente trescientos millones de veces mayor que la amplitud de [[B]]. Esta relación no es coincidencia, sino una consecuencia directa de la ley de Faraday local. En unidades SI el campo [[B]] es mucho más pequeño numéricamente, aunque ambos contribuyen por igual a la densidad de energía.

**Invarianza bajo cambios de sistema de referencia.** La velocidad [[c]] es la misma para todos los observadores inerciales. Esta propiedad fue el punto de partida de Einstein para la relatividad especial. Maxwell predijo sin saberlo que el espaciotiempo tiene una estructura no newtoniana.

**Límites de validez.** La ecuación de onda tal como está escrita es válida en el vacío. En un medio material con permitividad y permeabilidad relativas distintas de la unidad, la velocidad de fase es [[c]] dividida por el índice de refracción del medio. En medios dispersivos, ese índice depende de la frecuencia y las distintas componentes espectrales viajan a velocidades diferentes.

## Interpretación física profunda

La energía de la onda electromagnética no está en los conductores ni en ningún medio; está **en los campos mismos**. La densidad de energía electromagnética es proporcional a la suma de los cuadrados de [[E]] y [[B]], y esta energía se propaga a [[c]] en la dirección del vector de Poynting **S** = (1/μ₀)·**E** × **B**. La onda no necesita un "medio éter": el campo es la realidad física, y su energía se transporta en el vacío con perfecta eficiencia.

La simetría entre [[E]] y [[B]] en la ecuación de onda refleja la simetría dualidad del electromagnetismo clásico. Si se intercambian [[E]] → [[c]]·[[B]] y [[c]]·[[B]] → −[[E]], las ecuaciones de Maxwell en el vacío son invariantes. Esta simetría dual no tiene consecuencias observables directas en la física clásica, pero es la base de transformaciones útiles en electrodinámica y en extensiones cuánticas del campo.

## Orden de magnitud

En el vacío, [[c]] = 2.998×10⁸ m/s. Un fotón de luz visible (λ ≈ 500 nm) tiene [[k]] ≈ 1.26×10⁷ rad/m y [[omega]] ≈ 3.77×10¹⁵ rad/s. Un microondas doméstico trabaja a 2.45 GHz ([[omega]] ≈ 1.54×10¹⁰ rad/s, λ ≈ 12 cm). Un rayo gamma de 1 MeV tiene λ ≈ 1.24×10⁻¹² m.

La amplitud de [[E]] en una onda de luz solar directa es de unos 700 V/m, mientras que el [[B]] asociado es solo 700/3×10⁸ ≈ 2.3×10⁻⁶ T. Un resultado de [[c]] que no esté en el rango (2.9–3.1)×10⁸ m/s es físicamente absurdo y señala un error en las constantes introducidas.

## Método de resolución personalizado

Para problemas de propagación en el vacío, el procedimiento estándar es:

1. Identificar si se pide [[c]], [[omega]], [[k]] o [[lambda]].
2. Usar [[c]] = 1/√(μ₀ε₀) solo si se pide la velocidad a partir de constantes fundamentales.
3. Para convertir entre [[omega]], [[k]] y [[lambda]]: aplicar [[omega]] = [[c]]·[[k]] y [[lambda]] = 2π/[[k]].
4. Verificar coherencia dimensional: [[omega]] en rad/s, [[k]] en rad/m, [[lambda]] en m.
5. Si el medio no es vacío, sustituir [[c]] por v = [[c]]/n con n = √(εᵣμᵣ).

La trampa más frecuente es confundir frecuencia angular [[omega]] con frecuencia ordinaria f. La relación es [[omega]] = 2πf. El paso de [[k]] a [[lambda]] también genera errores: [[lambda]] = 2π/[[k]], no 1/[[k]].

## Casos especiales y ejemplo extendido

**Onda en un medio dispersivo.** En el vidrio óptico, el índice de refracción para luz visible es alrededor de 1.5. La velocidad de fase es [[c]] dividida entre ese índice, unos dos tercios de [[c]]. La longitud de onda en el vidrio es un tercio menor que en el vacío para la misma frecuencia. Esta diferencia es la causa de la refracción de Snell.

**Cavidad resonante rectangular.** Una cavidad de dimensiones a × b × d selecciona modos con números de onda discretos fijados por sus dimensiones. La frecuencia del modo más bajo es [[c]] dividida entre el doble de la dimensión mayor. Para una cavidad de 10 cm de lado esto da unos 1.5 GHz, en la banda de microondas: el principio de los hornos domésticos.

**Pulso gaussiano y dispersión.** Un pulso de luz no es monocromático sino una superposición de frecuencias. En el vacío, todas viajan a [[c]] y el pulso no se dispersa. En un medio dispersivo donde n depende de la frecuencia, las diferentes componentes viajan a velocidades distintas: el pulso se ensancha con la distancia. Este efecto limita la velocidad de transmisión en fibras ópticas.

## Preguntas reales del alumno

**¿La velocidad de la luz es un postulado o se deduce?** Se deduce. Maxwell no postuló [[c]]; simplemente combinó las ecuaciones de Gauss, Faraday y Ampère y obtuvo la ecuación de onda. La velocidad [[c]] = 1/√(μ₀ε₀) es una consecuencia matemática de esas leyes. Lo que sorprendió a Maxwell fue que ese valor coincidiera con la [[c]] medida experimentalmente.

**¿Por qué E y B son perpendiculares entre sí?** En una onda plana en el vacío, la ley de Gauss sin cargas impone que [[E]] sea perpendicular a la dirección de propagación. La ley de Faraday fuerza a [[B]] a ser perpendicular tanto a [[E]] como a esa dirección. La transversalidad es una consecuencia directa de las ecuaciones de Maxwell.

**¿Puede haber una onda con solo E o solo B?** No, en el vacío. Los dos campos están acoplados: [[E]] variable genera [[B]] (Faraday) y [[B]] variable genera [[E]] (Ampère-Maxwell). Una onda con solo [[E]] violaría la ley de Faraday. Los dos campos coexisten siempre en la onda y son inseparables.

**¿Qué pasa con la ecuación de onda en el vacío si hay cargas?** Si hay cargas o corrientes, aparecen términos fuente en las ecuaciones de Maxwell y la ecuación de onda homogénea ya no vale directamente. Se obtiene una ecuación inhomogénea con fuentes, cuya solución incluye las ondas emitidas por las cargas aceleradas (radiación).

## Conexiones transversales y rutas de estudio

La ecuación de onda electromagnética conecta directamente con la [formulación diferencial de Maxwell](leaf:fisica-clasica/electromagnetismo/ecuaciones-de-maxwell/formulacion-diferencial), de la que se deduce, y con la [formulación integral](leaf:fisica-clasica/electromagnetismo/ecuaciones-de-maxwell/formulacion-integral), que da el marco global. El paso siguiente natural es el estudio de las [ondas electromagnéticas en medios](leaf:fisica-clasica/electromagnetismo/ondas-electromagneticas/propagacion-en-medios), donde aparece el índice de refracción y la dispersión.

En el plano matemático, la ecuación de onda es también el punto de entrada al cálculo vectorial avanzado: el operador laplaciano vectorial ∇², el método de separación de variables en geometrías esféricas y cilíndricas, y la transformada de Fourier como herramienta de análisis espectral. En el plano físico, la invarianza de [[c]] es el punto de partida de la relatividad especial.

## Síntesis final

La ecuación de onda electromagnética es la consecuencia más profunda de las ecuaciones de Maxwell: demuestra que los campos [[E]] y [[B]] pueden existir y propagarse solos en el vacío, a la velocidad universal [[c]] = 1/√(μ₀ε₀), sin soporte material. Esta predicción unificó la óptica y el electromagnetismo, y fue el primer indicio de que la mecánica newtoniana debía ser reformulada.
`;export{e as default};
