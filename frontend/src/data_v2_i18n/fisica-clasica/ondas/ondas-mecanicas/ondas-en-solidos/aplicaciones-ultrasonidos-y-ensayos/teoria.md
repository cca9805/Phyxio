## Contexto conceptual

Los ultrasonidos son ondas mecánicas de presión (0.5–20 MHz en metales), cuyas longitudes de onda milimétricas detectan discontinuidades internas. El método emite un pulso, registra ecos e interpreta tiempo y amplitud de reflejos. Las variables centrales son [[v_us]] (velocidad), [[t_vuelo]] (tiempo de vuelo), [[d_defecto]] (profundidad), [[impedancia_acustica]] (impedancia acústica), [[coeficiente_de_reflexion_acustica]] (coeficiente de reflexión) y [[rho_mat]] (densidad), que determina [[impedancia_acustica]].

## 🟢 Nivel esencial

En un ensayo ultrasónico de pulso-eco, el transductor envía un impulso corto al material. El pulso recorre la pieza, llega a una discontinuidad y vuelve como eco. El eco más fuerte puede corresponder a una pared trasera o a un defecto. El tiempo que tarda en volver el eco es [[t_vuelo]].

La profundidad del defecto se obtiene porque el pulso hace un doble recorrido: primero hasta el defecto y luego de regreso. Por ello, la distancia real es la mitad de la que recorrería una onda viajando a la velocidad del material durante [[t_vuelo]]. Esta es la razón por la que la fórmula de profundidad incluye el factor 1/2.

La impedancia acústica [[impedancia_acustica]] combina la densidad [[rho_mat]] y la velocidad [[v_us]]. Si un defecto está lleno de aire, la diferencia de [[impedancia_acustica]] entre el material y el aire es enorme, lo que produce un eco muy intenso. Si el defecto está relleno con material similar, el eco puede ser débil o desaparecer. Esta es la razón por la que los defectos de aire son fáciles de detectar, pero las inclusiones de material denso son difíciles de ver.

## 🔵 Nivel formal

La relación principal de este leaf es:

{{f:profundidad_defecto}}

Esta fórmula expresa [[d_defecto]] en función de [[v_us]] y [[t_vuelo]] con factor 2 que corrige el doble recorrido del pulso (ida hasta el defecto y vuelta al transductor). Es válida si el material es homogéneo y [[v_us]] constante a lo largo del camino acústico. Si existen capas intermedias con diferente velocidad, se requiere sumar las contribuciones parciales de cada capa.

La impedancia acústica se define como:

{{f:impedancia_acustica}}

Esta ecuación muestra que [[impedancia_acustica]] aumenta con [[rho_mat]] y [[v_us]]. Es una propiedad intrínseca del material que caracteriza la resistencia del medio al paso de ondas de presión. Materiales densos y rígidos poseen valores de [[impedancia_acustica]] elevados, lo que implica que la energía transmitida entre medios muy diferentes será mínima y la reflexión será máxima.

El coeficiente de reflexión en una interfaz normal se expresa como:

{{f:coeficiente_reflexion}}

Si las impedancias son iguales, [[coeficiente_de_reflexion_acustica]] = 0 y toda la energía se transmite sin generar eco. Si difieren mucho, [[coeficiente_de_reflexion_acustica]] → ±1 y el eco es intenso. El signo de [[coeficiente_de_reflexion_acustica]] indica si la onda reflejada mantiene o invierte su fase respecto a la incidente: signo positivo significa que el segundo medio es más rígido, signo negativo que es más blando. Esta firma de fase permite identificar la naturaleza del defecto (aire, inclusión o delaminación) sin necesidad de información adicional.

## 🔴 Nivel estructural

Las decisiones prácticas en un ensayo ultrasónico dependen de varios factores:
- frecuencia del transductor,
- tipo de acoplante,
- modo de onda (longitudinal o de cizalladura),
- geometría del defecto.

Frecuencias altas mejoran resolución pero aumentan atenuación y ruido de grano. Se elige frecuencia balanceando resolución versus penetración: profundidad máxima inversamente proporcional a atenuación.

El acoplante elimina aire ([[impedancia_acustica]] ≈ 400 Rayl). Sin acoplante, casi toda la energía se refleja en superficie. Con acoplante (impedancia intermedia), la energía penetra y registra ecos internos, demostrando adaptación de impedancia.

Las ondas longitudinales son estándar en ensayos volumétricos. Las ondas de cizalladura detectan fisuras inclinadas. La anisotropía de [[v_us]] en laminados requiere correcciones para precisión.

La fórmula de [[impedancia_acustica]] y [[coeficiente_de_reflexion_acustica]] es válida en incidencia normal y para ondas planas. Los límites de validez son:
- **Incidencia oblicua**: [[coeficiente_de_reflexion_acustica]] cambia y puede haber modos de onda convertidos.
- **Defectos pequeños**: si el tamaño es menor que la longitud de onda, la dispersión domina y [[coeficiente_de_reflexion_acustica]] disminuye.
- **Superficies rugosas**: la reflexión se difunde y el eco se dispersa espacialmente.
- **Capas y tratamientos**: interfaces múltiples generan reverberaciones que enmascararan ecos internos.

Estos límites definen el dominio de validez cuantitativo del modelo simple y orientan hacia técnicas avanzadas cuando se necesita mayor precisión o cuando el material no es homogéneo.

> [!WARNING]
> La zona ciega del transductor impide detectar defectos muy superficiales. Un defecto cercano a la superficie puede no producir eco separado del pulso de entrada.

> [!NOTE]
> En materiales anisótropos como composites, [[v_us]] y [[impedancia_acustica]] varían con la dirección. Esto puede desplazarse el eco y alterar la profundidad aparente si no se usa el valor correcto de [[v_us]].

## Interpretación física profunda

La fórmula de profundidad es sencilla, pero su fiabilidad depende de supuestos: medio homogéneo, [[v_us]] constante y ecos separados en tiempo. Si el material tiene porosidad o gradientes térmicos, [[v_us]] local cambia y la profundidad calculada puede ser errónea.

El eco de un defecto visible indica que [[coeficiente_de_reflexion_acustica]] no es nulo. Sin embargo, el valor de [[coeficiente_de_reflexion_acustica]] no informa directamente de la profundidad; lo que informa es la amplitud relativa del eco. La profundidad viene de [[t_vuelo]] y [[v_us]], mientras que [[coeficiente_de_reflexion_acustica]] aporta información sobre la naturaleza del defecto. Esta separación entre información temporal (profundidad) e información de amplitud (tipo de defecto) es conceptualmente profunda: dos ecos pueden tener la misma profundidad pero muy diferentes amplitudes, lo que revela si el defecto es aire, óxido, inclusión o micro-grieta.

Una variación local de [[rho_mat]] altera [[impedancia_acustica]] y modula la amplitud del eco. Por eso, en piezas corrosivas o compuestas, es importante calibrar [[v_us]] con una muestra del mismo material y no usar valores tabulados sin verificar. Este principio explica por qué la reproducibildad de los ensayos ultrasónicos depende crucíalemente de la calibración: un error del 1% en [[v_us]] genera un error del 1% en profundidad, que en piezas de 100 mm significa 1 mm de incertidumbre.

Desde el punto de vista físico causal, el coeficiente de reflexión [[coeficiente_de_reflexion_acustica]] se puede entender como una medida de la resistencia acústica: si los dos medios tienen muy diferente impedancia, la onda incidente "ve" una barrera y la mayor parte se refleja. La fase del eco reflejado (positiva o invertida) codifica información sobre cuál de los dos medios tiene mayor impedancia, información que es útil para clasificar el tipo de defecto.

La resolución está limitada por longitud de onda: defectos menores que λ no generan reflexiones especulares, perdiéndose en ruido. Esto establece límite entre modelo geométrico y realidad ondulatoria.

## Orden de magnitud

En acero con [[v_us]] ≈ 5900 m/s, una pieza de 25 mm produce un eco de pared trasera en aproximadamente 8.5 µs. En agua con [[v_us]] ≈ 1540 m/s, 50 mm generan un eco en unos 65 µs.

Las impedancias típicas son: agua 1.5 MRayl, aluminio 17 MRayl, acero 45 MRayl y aire 400 Rayl. La diferencia entre acero y aire es tan grande que casi toda la energía se refleja en la superficie aire-metal.

## Método de resolución personalizado

Para un problema real de ensayo ultrasónico, primero se identifica el tipo de defecto y el medio circundante. Luego se elige la variable de mayor certidumbre: si [[v_us]] es conocida con precisión, se usa directamente; si no, se calcula primero con un bloque de referencia. En ensayos de espesor, la variable de referencia es el tiempo de vuelo hasta la pared trasera.

La estrategia estructurada es:
1. Calibrar [[v_us]] con un material conocido.
2. Medir [[t_vuelo]] del eco de defecto.
3. Calcular [[d_defecto]] con la fórmula de doble recorrido.
4. Calcular [[impedancia_acustica]] y valorar [[coeficiente_de_reflexion_acustica]] para interpretar la amplitud de eco.
5. Revisar coherencia con la geometría y el contexto físico.

## Casos especiales y ejemplo extendido

En piezas soldadas, un defecto oblicuo puede producir un eco débil incluso si tiene alto contraste, porque la reflexión se desvía fuera del transductor. En estos casos, se recurre a ángulos diferentes o a ondas de cizalladura para cruzar la soldadura.

En partes con recubrimientos, el primer eco puede corresponder a la interfaz recubrimiento/pieza y enmascarar ecos internos. El análisis extendido compara los tiempos de eco con el espesor conocido del recubrimiento y ajusta la velocidad en la capa superficial.

Cuando hay ruido de grano dentro del metal, el eco puede parecer difuso. En ese caso, se usa un transductor de menor frecuencia y se presta atención a la forma del pulso reflejado. Si el eco mantiene la misma forma temporal que el pulso inicial, es más probable que corresponda a un reflector geométrico real que al ruido.

## Preguntas reales del alumno

- ¿Por qué se usa gel y no aire? Porque el aire tiene [[impedancia_acustica]] muy baja (400 Rayl) y refleja casi toda la energía, mientras que el gel ([[impedancia_acustica]] ≈ 1.6 MRayl) adapta la impedancia entre el transductor piezoeléctrico ([[impedancia_acustica]] ≈ 30 MRayl) y la pieza metálica ([[impedancia_acustica]] ≈ 45 MRayl). Sin acoplante, la pérdida de energía es tan grande que casi ningún pulso penetra.

- ¿Un eco alto implica siempre un defecto grande? No necesariamente. La amplitud del eco depende de [[coeficiente_de_reflexion_acustica]], que puede ser grande para una fisura con aire (muy baja impedancia), incluso si su volumen es pequeño. Una micro-grieta de aire produce a veces un eco más fuerte que una inclusión de sólido grande.

- ¿Por qué importa [[rho_mat]] si la profundidad solo depende de [[v_us]] y [[t_vuelo]]? Porque [[rho_mat]] determina [[impedancia_acustica]] y modula la detectabilidad del eco. Además, [[v_us]] y [[rho_mat]] están correlacionados en un material: si la densidad aumenta (por ejemplo, por compresión o envejecimiento), [[v_us]] puede aumentar o disminuir, y ambos cambios afectan [[impedancia_acustica]]. Una material endurecido puede parecer ser el "mismo" acero en apariencia, pero [[v_us]] ha cambiado y los cálculos de profundidad dan resultados erróneos.

- ¿Qué pasa si hay ruido de grano muy fuerte? El ruido de grano es dispersión acústica producida por los límites de grano del material. Reducé el pulso reflejado en todas direcciones en lugar de dirigirse al transductor. Para reducir el ruido se elige una frecuencia más baja (mayor longitud de onda, menos sensible a granos) y se acepta perder resolución espacial. Este es un ejemplo de compromiso fundamental en física de mediciones.

## Conexiones transversales y rutas de estudio

Este leaf se relaciona con la propagación de ondas en sólidos y con la dinámica de vibraciones. El análisis de [[impedancia_acustica]] recuerda la impedancia en circuitos eléctricos, donde una diferencia de impedancias produce reflexión de ondas. La analogía ayuda a entender que los defectos ultrasónicos se comportan como discontinuidades en una línea de transmisión.

También conecta con la física de medios continuos, porque la velocidad [[v_us]] depende del módulo de elasticidad y la densidad del material. En consecuencia, un cambio de material implica un cambio de las condiciones de propagación y de la interpretación de los resultados.

## Síntesis final

Los ensayos ultrasónicos convierten [[t_vuelo]] en [[d_defecto]] usando [[v_us]]. La impedancia [[impedancia_acustica]] y el coeficiente de reflexión [[coeficiente_de_reflexion_acustica]] controlan qué ecos son detectables y qué información sobre el tipo de defecto se puede extraer.

La calibración con un bloque del mismo material reduce errores por variaciones de [[rho_mat]] y [[v_us]]. En problemas reales, se debe complementar el cálculo con observación de la forma del eco y con la comparación entre diferentes mediciones para discriminar defectos, inclusiones y fluctuaciones del material.