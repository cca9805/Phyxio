## Errores conceptuales

### Error 1: Confundir calor específico (intensivo) con capacidad calorífica total (extensiva)

**Por qué parece correcto**

Ambas magnitudes tienen nombres similares y relacionan calor con temperatura. El alumno que aprende [[c]] como "calor por unidad de temperatura" puede equipararlo con [[C_total]] sin notar que [[c]] tiene la masa en el denominador y [[C_total]] no. Además, cuando se trabaja con una muestra de un kilogramo, el valor numérico de [[c]] y de [[C_total]] coinciden accidentalmente, lo que refuerza la confusión.

**Por qué es incorrecto**

El calor específico [[c]] en J/(kg·K) es una propiedad intensiva: describe el material independientemente de la cantidad. La capacidad calorífica total [[C_total]] en J/K es una propiedad extensiva: describe el sistema y depende de cuánta materia contiene. Duplicar la masa de un sistema duplica [[C_total]] pero no cambia [[c]]. Usar [[c]] cuando se pregunta por el calor total del sistema, o usar [[C_total]] cuando se compara entre materiales, conduce a resultados incorrectos o incomparables.

**Señal de detección**

El alumno expresa [[c]] en J/K en lugar de J/(kg·K), o afirma que un bloque de aluminio de 2 kg tiene el doble de calor específico que uno de 1 kg del mismo material.

**Corrección conceptual**

[[c]] depende del material, no de la cantidad. [[C_total]] depende del material y de la masa del sistema. La relación [[C_total]] = [[m]] · [[c]] convierte la propiedad intensiva en la propiedad extensiva del sistema concreto. Siempre que se compare entre materiales, usar [[c]]; siempre que se calcule la energía del sistema completo, usar [[C_total]].

**Mini-ejemplo de contraste**

Dos bloques de aluminio: uno de 0.5 kg y otro de 2 kg. Ambos tienen el mismo [[c]] de 900 J/(kg·K). Sus capacidades caloríficas totales son 450 J/K y 1800 J/K respectivamente. Si se afirma que el bloque de 2 kg "tiene más calor específico", el error es evidente: el material es el mismo, lo que cambia es la extensión del sistema.

## Errores de modelo

### Error 2: Aplicar el mismo valor de c en sólido y en líquido para el mismo material

**Por qué parece correcto**

Si se aprende que "el calor específico del agua es 4186 J/(kg·K)", resulta natural usar ese valor en todos los cálculos relacionados con el agua: al calentar el agua líquida, al enfriar el hielo y al calcular el calor de un proceso que cruza los 0 °C. El valor es familiar y aparece en todos los ejercicios estándar.

**Por qué es incorrecto**

El calor específico depende del estado de agregación. El hielo tiene [[c]] ≈ 2090 J/(kg·K) y el vapor de agua a 100 °C tiene [[c]] ≈ 2010 J/(kg·K), mientras que el agua líquida tiene [[c]] ≈ 4186 J/(kg·K). Usar el valor del agua líquida para calcular el calor necesario para calentar hielo desde −20 °C hasta 0 °C introduce un error de aproximadamente el 100 % en ese tramo.

**Señal de detección**

El alumno calcula el calor necesario para llevar hielo de −20 °C a 20 °C usando un único valor de [[c]] de 4186 J/(kg·K) a lo largo de todo el proceso, sin separar el tramo sólido del tramo líquido ni incluir el calor de fusión.

**Corrección conceptual**

Los procesos que cruzan una transición de fase deben separarse en tramos. Cada tramo tiene su propio [[c]]: el tramo de hielo usa [[c]] del hielo, la fusión usa el calor latente de fusión, y el tramo de agua líquida usa [[c]] del agua. Solo así el calor total calculado es correcto.

**Mini-ejemplo de contraste**

Calentar 100 g de hielo desde −10 °C hasta 10 °C. Usando [[c]] constante del agua líquida: 0.1 × 4186 × 20 ≈ 8372 J. Usando los valores correctos: calor del hielo de −10 °C a 0 °C (0.1 × 2090 × 10 = 2090 J) más calor de fusión (0.1 × 334 000 = 33 400 J) más calor del agua de 0 °C a 10 °C (0.1 × 4186 × 10 = 4186 J) resulta 39 676 J. El error por usar solo [[c]] del agua líquida es casi cinco veces.

## Errores matemáticos

### Error 3: Obtener un calor específico negativo por invertir el orden de la resta en [[DeltaT]]

**Por qué parece correcto**

En muchos cálculos de física, tomar el valor absoluto de una diferencia es suficiente porque solo importa la magnitud. Si el alumno trabaja con la fórmula [[Q]] = [[m]] · [[c]] · [[DeltaT]] y sabe que [[c]] es positivo, puede asumir que el signo de [[Q]] se fija aparte y no le preocupa el orden de la resta.

**Por qué es incorrecto**

En la fórmula de definición [[c]] = [[Q]] / ([[m]] · [[DeltaT]]), invertir el orden de la resta en [[DeltaT]] cambia su signo. Si [[Q]] también tiene el signo correcto (positivo para calentamiento), el cociente resulta negativo y [[c]] aparece negativo. Como [[c]] es siempre positivo, el resultado negativo parece un error de cálculo, confundiendo al alumno sobre dónde está el error real.

**Señal de detección**

El alumno obtiene [[c]] negativo y lo interpreta como un fallo del procedimiento en lugar de identificar el error de signo en [[DeltaT]]. A veces toma el valor absoluto del resultado sin indicarlo.

**Corrección conceptual**

[[DeltaT]] se calcula siempre como T_final − T_inicial. Si el sistema se calienta, [[DeltaT]] es positivo y [[Q]] también lo es: el cociente da [[c]] positivo. Si el sistema se enfría, tanto [[DeltaT]] como [[Q]] son negativos: el cociente de dos negativos da igualmente [[c]] positivo. El resultado siempre es positivo cuando los signos son consistentes.

**Mini-ejemplo de contraste**

Una muestra absorbe 500 J mientras su temperatura sube de 20 °C a 25 °C. [[DeltaT]] correcto: 25 − 20 = 5 K. Usando [[c]] = 500 / ([[m]] · 5): [[c]] positivo. Si se resta al revés: [[DeltaT]] = 20 − 25 = −5 K. Usando [[c]] = 500 / ([[m]] · (−5)): [[c]] negativo. El resultado negativo indica el error de orden en la resta, no un calor específico negativo del material.

## Errores de interpretación

### Error 4: Concluir que el material con mayor c "absorbe más calor" ante la misma fuente

**Por qué parece correcto**

Un [[c]] mayor implica que el material necesita más energía por kilogramo para el mismo cambio de temperatura. Si la fuente de calor proporciona siempre la misma potencia, parece que el material con más [[c]] absorbe más por segundo.

**Por qué es incorrecto**

[[c]] indica cuánta energía se necesita para cambiar la temperatura en un kelvin por kilogramo, pero no determina la tasa de absorción bajo una fuente de potencia constante. Lo que determina la velocidad de calentamiento es la [[C_total]] del sistema y la potencia de la fuente. Si dos sistemas reciben la misma potencia durante el mismo tiempo, ambos absorben exactamente el mismo [[Q]]; sin embargo, el sistema con mayor [[C_total]] experimenta un [[DeltaT]] menor. La confusión entre absorción de calor y cambio de temperatura es el núcleo del error.

**Señal de detección**

El alumno afirma que "el agua absorbe más calor que el cobre porque tiene mayor calor específico" al comparar el calentamiento de iguales masas de ambos materiales con el mismo mechero durante el mismo tiempo. La absorción de [[Q]] es igual; lo que difiere es [[DeltaT]].

**Corrección conceptual**

Bajo la misma fuente de potencia durante el mismo tiempo, todos los sistemas absorben el mismo [[Q]] independientemente de su [[c]]. Lo que varía es [[DeltaT]]: el material con mayor [[C_total]] experimenta menor [[DeltaT]] para el mismo [[Q]]. [[c]] no determina cuánto calor se absorbe, sino cuánto cambia la temperatura por cada julio absorbido.

**Mini-ejemplo de contraste**

Dos vasos de 200 g, uno de agua y otro de aceite, sobre el mismo mechero durante 2 minutos. Ambos reciben el mismo [[Q]]. El aceite ([[c]] ≈ 2000 J/(kg·K)) alcanza el doble de [[DeltaT]] que el agua ([[c]] ≈ 4186 J/(kg·K)). No es que el aceite haya absorbido más calor; es que el mismo calor produce más cambio de temperatura en él.

## Errores de unidades

### Error 5: Usar la unidad "cal/g·°C" sin convertir cuando la fórmula requiere J/(kg·K)

**Por qué parece correcto**

Muchas tablas antiguas y textos de química expresan el calor específico en cal/(g·°C), donde el agua vale exactamente 1 cal/(g·°C). Este valor unitario para el agua hace que algunos alumnos lo recuerden y lo usen directamente en la fórmula sin percatarse del sistema de unidades.

**Por qué es incorrecto**

En el Sistema Internacional, [[c]] se expresa en J/(kg·K). Un valor de [[c]] en cal/(g·°C) debe convertirse multiplicando por 4186, porque 1 cal/(g·°C) equivale a 4186 J/(kg·K). Si se usa 1 cal/(g·°C) directamente en la fórmula [[Q]] = [[m]] · [[c]] · [[DeltaT]] con [[m]] en kilogramos y [[Q]] en julios, el resultado de [[Q]] es 4186 veces menor al correcto.

**Señal de detección**

El alumno calcula [[Q]] para el agua y obtiene un resultado 4186 veces menor al esperado, o usa [[c]] = 1 para el agua sin indicar las unidades del sistema empleado.

**Corrección conceptual**

Antes de sustituir en cualquier fórmula, verificar que todas las magnitudes están en unidades del Sistema Internacional. Para el calor específico: J/(kg·K). Para convertir desde cal/(g·°C): multiplicar por 4186. La equivalencia exacta es 1 cal/(g·°C) = 4186 J/(kg·K).

**Mini-ejemplo de contraste**

Calcular el calor para calentar 0.5 kg de agua de 20 °C a 80 °C. Con [[c]] = 4186 J/(kg·K): [[Q]] = 0.5 × 4186 × 60 ≈ 125 580 J. Con [[c]] = 1 cal/(g·°C) sin convertir y [[m]] en kg: [[Q]] = 0.5 × 1 × 60 = 30. Un resultado de 30 J para calentar medio kilogramo de agua en 60 grados revela inmediatamente el error de unidades: debería ser del orden de 100 000 J.

## Regla de autocontrol rápido

Antes de dar por bueno cualquier resultado relacionado con el calor específico, verificar tres condiciones:

1. **Signo de c**: el calor específico [[c]] siempre debe ser positivo. Si el resultado es negativo, hay un error de signo en [[DeltaT]] o en [[Q]]: revisar el orden de la resta en [[DeltaT]] y verificar que el signo de [[Q]] es coherente con el tipo de proceso (calentamiento positivo, enfriamiento negativo).

2. **Unidades del resultado**: [[c]] debe expresarse en J/(kg·K). Si el resultado de [[c]] está entre 100 y 5500 J/(kg·K) para sólidos y líquidos comunes, es razonable. Un resultado de [[c]] próximo a 1 para el agua sugiere que se usaron calorías en lugar de julios sin convertir.

3. **Rango del proceso**: verificar que [[DeltaT]] no cruza ninguna temperatura de transición de fase del material. Si la incluye, separar el proceso en tramos y aplicar el [[c]] correspondiente a cada fase, añadiendo el calor latente en la transición.
