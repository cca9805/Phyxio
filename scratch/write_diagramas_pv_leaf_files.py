from pathlib import Path

base = Path(r'c:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\termodinamica\gases-y-modelos\diagramas-pv')
files = {
    'meta.yaml': '''id: diagramas-pv
nombre:
  es: Diagramas pv
  en: P-V Diagrams
area: fisica-clasica
bloque: termodinamica
subbloque: gases-y-modelos
parent_id: gases-y-modelos
ruta_relativa: fisica-clasica/termodinamica/gases-y-modelos/diagramas-pv
orden: 253500
type: leaf
niveles:
  es: [BACHILLERATO]
  en: [Upper Secondary]
icon: 🧪
descripcion: "Subtema: Diagramas p-V. Teoría, fórmulas, ejemplos y aplicaciones."
description_en: "Subtopic: P-V diagrams. Theory, formulas, examples and applications."
tags:
  es: [diagramas, p-v, termodinamica, gases, trabajo]
  en: [diagrams, p-v, thermodynamics, gases, work]
prerequisitos:
  - fisica-clasica/termodinamica/gases-y-modelos/gas-ideal
  - fisica-clasica/termodinamica/gases-y-modelos/procesos-termodinamicos
graficos: [Coord, Svg]
physical_role:
  es: concepto físico
  en: physical concept
dificultad: 3
tiempo_estimado_min: 30
pregunta_fisica_central:
  es: ¿Cómo se interpreta el trabajo y la forma de un proceso en un diagrama p-V?
  en: How is work and the shape of a process interpreted in a P-V diagram?
representacion_dominante: Coord
magnitud_dominante: P
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    tab_label:
      es: Interpretacion fisica
      en: Physical interpretation
  mini_graph:
    enabled: true
    preferred_type: Svg
  output_policy:
    show_summary_first: true
    max_inline_messages: 3
    show_warnings: true
    show_likely_errors: true
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
''',
    'teoria.md': '''# Diagramas pv

## Contexto conceptual

Los diagramas p-V son la representación gráfica esencial para leer procesos termodinámicos en gases. Cada punto del plano une una presión [[P]] con un volumen [[V]] y ofrece una lectura directa del estado macroscópico del gas.

Este leaf se centra en la interpretación del área bajo la trayectoria y en la forma que toma un proceso en el diagrama. Esa lectura geométrica conecta magnitudes de estado con conceptos de trabajo y sentido de la transferencia energética.

## 🟢 Nivel esencial

La idea esencial es que la forma de la curva en un diagrama p-V cuenta lo que hizo el gas. Una trayectoria horizontal significa que la presión se mantuvo constante. Una trayectoria hacia la derecha significa que el volumen aumentó y, por lo tanto, el gas hizo trabajo.

Cuando el volumen no cambia, el área bajo la curva es cero y no hay trabajo mecánico. Si la curva cierra un ciclo, el área encerrada representa el trabajo neto intercambiado entre el gas y su entorno.

En un proceso de expansión, la trayectoria se desplaza hacia mayores volúmenes y el trabajo es entregado al ambiente. En compresión, la trayectoria se mueve hacia volúmenes más pequeños y el trabajo se realiza sobre el gas.

## 🔵 Nivel formal

La relación fundamental para el gas ideal se escribe así:

{{f:gas_ideal}}

Esta fórmula describe las variables de estado del gas ideal: presión [[P]], volumen [[V]], cantidad de sustancia [[n]], temperatura [[T]] y constante [[R]]. Para un proceso isobárico, la presión permanece constante mientras el volumen cambia.

El trabajo en un proceso a presión constante está dado por:

{{f:trabajo_isobarico}}

En ese caso, [[DeltaV]] es la diferencia entre volumen final e inicial. El trabajo es proporcional a esa diferencia y su signo depende de la dirección del cambio de volumen.

El gas ideal también permite leer qué ocurre cuando una curva cruza familias de isotermas: si [[T]] es constante, la curva es una hipérbola suave en el diagrama p-V. Si [[P]] es constante, la curva es una línea horizontal. Estas formas son lecturas formales de la misma relación física.

La expresión de trabajo isobárico refuerza que no basta conocer el volumen aislado: el trabajo depende de la variación de volumen y de que la presión considerada sea realmente la presión del proceso.

## 🔴 Nivel estructural

En un diagrama p-V, la estructura física del proceso se organiza por regímenes. Un proceso isobárico es un tramo horizontal. Un proceso isocórico es un tramo vertical con trabajo nulo. Un proceso isotérmico se dibuja como una curva que mantiene constante la temperatura efectiva del gas.

El diagrama p-V distingue magnitudes de estado y magnitudes de proceso. [[P]] y [[V]] son magnitudes de estado que definen cada punto. [[W]] y [[DeltaV]] son magnitudes de proceso que describen cómo evoluciona la trayectoria.

Esta separación es importante porque la misma curva puede ser leída de dos maneras: como valores de estado en cada punto y como área acumulada entre puntos sucesivos. El trabajo aparece como un valor derivado de la forma de la curva, no como un valor independiente del estado.

En un proceso real, la curva puede combinar tramos diferentes. Por ejemplo, un ciclo cerrado tiene un tramo de expansión y un tramo de compresión. El trabajo neto del ciclo es la diferencia entre el área del proceso en un sentido y el área en el sentido opuesto.

También importa el contexto: si la presión no es constante, el área bajo la curva ya no es simplemente el producto de presión por volumen. Hay que integrar la curva p-V. Esa distinción sitúa el trabajo como una propiedad geométrica de la trayectoria, no sólo como una multiplicación simple.

## Interpretación física profunda

La interpretación física profunda de un diagrama p-V consiste en leer las direcciones y las áreas. Una trayectoria hacia la derecha indica expansión del gas. Una trayectoria hacia la izquierda indica compresión. El signo de [[W]] se extrae del sentido del cambio de volumen y de si la presión actúa en el mismo sentido de desplazamiento.

La forma de la curva también revela si el proceso fue rápido o lento, cercano a un proceso quasiestático, y si el gas permaneció en un régimen ideal desplazándose entre estados bien definidos.

Desde la perspectiva de la termodinámica, el diagrama p-V es una herramienta de diagnóstico: los estados de mayor volumen y menor presión ocupan una región baja del gráfico, mientras que los estados comprimidos aparecen en la región alta y a la izquierda.

Por eso, la lectura física no se limita a los valores numéricos. Se trata de interpretar la geometría del camino que une los estados inicial y final en términos de transferencia de energía y condiciones de equilibrio.

## Orden de magnitud

Para gases de laboratorio, una presión de orden 10⁵ Pa es típica. Si la presión se mantiene constante y el volumen cambia en decenas de mililitros, el trabajo puede ser de varios cientos de julios, no de kilojulios. Una variación de volumen de 0.03 m³ a 1.2×10⁵ Pa produce trabajo del orden de 3×10³ J.

Un volumen de 0.01 m³ es pequeño comparado con un litro completo, mientras que 0.05 m³ es un cuarto de litro. En el diagrama p-V, esos cambios corresponden a desplazamientos horizontales visibles y áreas que pueden medirse con precisión.

Una diferencia de temperatura de 10 K en un gas ideal a presión constante no es tan relevante para el trabajo como lo es el cambio de volumen. Esa escala de comparación ayuda a distinguir cuando conviene mantener la interpretación del diagrama o cuando hay que considerar efectos reales no ideales.

## Método de resolución personalizado

1. Identifica si el proceso mantiene alguna variable constante. En el diagrama p-V, eso aparece como un tramo horizontal, vertical o de forma hiperbólica.
2. Clasifica el proceso: isobárico, isocórico, isotérmico o una combinación de tramos.
3. Anota los estados inicial y final con [[P]], [[V]] y, si es necesario, [[T]] y [[n]].
4. Calcula [[DeltaV]] como la diferencia entre volumen final e inicial.
5. Si la presión es constante, utiliza la fórmula de trabajo isobárico. Si no, interpreta el trabajo como el área bajo la curva.
6. Verifica que el resultado numérico tenga sentido con la forma de la trayectoria del diagrama.

## Casos especiales y ejemplo extendido

Un caso especial ocurre cuando la presión es casi constante pero no exactamente. En un ciclo real de motor, el tramo de expansión puede parecer horizontal en una escala pequeña, pero la desviación del isobárico cambia el trabajo a integrar.

Otro caso es un proceso con un tramo vertical seguido de un tramo horizontal. El tramo vertical no hace trabajo; el tramo horizontal sí. El área total es la del único tramo que cambia volumen.

Un ejemplo extendido es un pistón que primero se calienta a volumen fijo y luego se expande a presión casi constante. En el diagrama p-V se ven dos segmentos distintos: primero vertical, luego horizontal. La interpretación es que el gas recibió calor sin trabajo y luego hizo trabajo contra la presión constante.

Este tipo de construcción muestra por qué es fundamental distinguir la forma de la trayectoria y no solo los estados inicial y final.

## Preguntas reales del alumno

¿Si la curva en el diagrama p-V es horizontal, siempre es un proceso sin cambio de temperatura? No. Puede ser un proceso isobárico que cambie de temperatura y aun así mantenga la presión constante.

¿Un ciclo cerrado siempre produce trabajo neto positivo? No. Si la compresión consume más área que la expansión, el trabajo neto puede ser negativo.

¿Cómo sé si debo interpretar el área como trabajo realizado por el gas o sobre el gas? Mira el sentido del cambio de volumen: hacia la derecha indica expansión y trabajo del gas; hacia la izquierda indica compresión y trabajo sobre el gas.

## Conexiones transversales y rutas de estudio

Este leaf se conecta con el estudio de la ley del gas ideal, los procesos termodinámicos y la primera ley. También enlaza con temas de energía interna y ciclos termodinámicos porque el trabajo definido en un diagrama p-V es la base de cualquier análisis de eficiencia.

La ruta recomendada es: primero dominar la lectura de [[P]] y [[V]], luego entender cómo clasificar procesos por la forma de la trayectoria y finalmente usar el diagrama para comparar trabajos de distintos ciclos.

## Síntesis final

Los diagramas p-V son una forma potente de traducir la termodinámica de gases a una geometría comprensible. El trabajo es el área bajo la trayectoria y la forma del proceso dice si el gas se expande, se comprime o pasa por tramos con variable fija.

Interpretar bien ese gráfico permite responder a la pregunta central del leaf: cómo asociar formas y áreas del diagrama con trabajo y cambio de estado.''',
    'teoria.en.md': '''# P-V Diagrams

## Conceptual context

P-V diagrams are the fundamental tool for reading thermodynamic processes in gases. Each point on the plane links pressure [[P]] with volume [[V]] and provides a direct diagnostic of the gas state.

This leaf focuses on the interpretation of the area under the trajectory and the shape of the process path. That geometric reading connects state variables with mechanical work and energy transfer.

## 🟢 Essential level

The essential idea is that the curve shape tells what the gas did. A horizontal path means pressure remained constant. A path moving to the right means volume increased, so the gas did work.

When volume does not change, the area under the curve is zero and there is no mechanical work. If the path closes a loop, the enclosed area represents net work exchanged between the gas and the environment.

In expansion, the trajectory moves to larger volumes and the gas delivers energy outward. In compression, the trajectory moves to smaller volumes and work is done on the gas.

## 🔵 Formal level

The ideal gas relation is expressed as:

{{f:gas_ideal}}

This formula connects state variables [[P]], [[V]], [[n]], [[T]], and constant [[R]]. For an isobaric process, pressure is constant while the volume changes.

Work in a constant-pressure process is expressed as:

{{f:trabajo_isobarico}}

In this expression, [[DeltaV]] is the difference between final and initial volume. The work is proportional to that volume change and its sign depends on the direction of displacement.

The ideal gas law also explains how a process path relates to families of isotherms: if [[T]] is constant, the path is a smooth curve. If [[P]] is constant, the path is horizontal. These are formal readings of the same physical relation.

The isobaric work expression reinforces that it is not enough to know the volume alone: work depends on how volume changes and whether the pressure used represents the actual process.

## 🔴 Structural level

In a P-V diagram, the physical structure of the process is organized by regimes. An isobaric process is a horizontal segment. An isochoric process is a vertical segment with zero work. An isothermal process appears as a curved segment that preserves the effective temperature of the gas.

The diagram distinguishes state variables from process variables. [[P]] and [[V]] define each point. [[W]] and [[DeltaV]] describe how the path evolves between points.

This separation is essential because the same path can be read in two ways: as the state values at each instant, and as an accumulated geometric area. Work is a geometric property of the curve, not an independent state variable.

In a real process, the path can combine different segments. For example, a closed cycle may include an expansion segment and a compression segment. Net work is the difference between the area of the expansion and the area of the compression.

It also matters whether the pressure is truly constant. If pressure varies, the area under the curve is not simply pressure times volume change. The work must be understood as the area under a general curve, which highlights the geometric origin of the concept.

## Deep physical interpretation

The deep physical interpretation of a P-V diagram is reading directions and areas. A path to the right indicates gas expansion. A path to the left indicates compression. The sign of [[W]] follows the direction of volume change and the effective pressure force along the path.

The shape of the curve also reveals whether the process is closer to a quasi-static regime and whether the gas remained ideal while moving between well-defined states.

From the thermodynamic perspective, the P-V diagram is a diagnostic tool. High-pressure, low-volume states lie in the upper-left region; low-pressure, high-volume states lie in the lower-right region. That spatial mapping makes the gas behavior easier to compare.

Therefore, the physical interpretation is not just numbers. It is understanding the geometry of the path as a record of energy transfer and equilibrium conditions.

## Order of magnitude

For laboratory gases, a pressure of order 10⁵ Pa is typical. If pressure remains constant and volume changes by a few hundred milliliters, the work is on the order of hundreds to thousands of joules. A volume change of 0.03 m³ at 1.2×10⁵ Pa produces work near 3×10³ J.

A volume of 0.01 m³ is approximately ten liters, while 0.05 m³ is approximately fifty liters. In the diagram, those changes correspond to visible horizontal displacements and measurable areas.

A temperature difference of 10 K in a gas at constant pressure is usually less relevant to work than the volume change itself. This order-of-magnitude view helps decide whether the P-V interpretation is sufficient.

## Personalized resolution method

1. Identify whether the process keeps any variable constant. In a P-V diagram, that appears as a horizontal, vertical, or curved segment.
2. Classify the process: isobaric, isochoric, isothermal, or a combination of segments.
3. Record the initial and final states with [[P]], [[V]], and, if relevant, [[T]] and [[n]].
4. Compute [[DeltaV]] as the difference between final and initial volume.
5. If pressure is constant, apply the isobaric work formula. Otherwise, interpret work as the area under the curve.
6. Check whether the numerical result is consistent with the curve shape.

## Special cases and extended example

A special case occurs when pressure is nearly constant but not exactly. In a real engine cycle, the expansion leg may appear nearly horizontal at one scale, while small deviations change the work evaluation.

Another case is a vertical segment followed by a horizontal segment. The vertical leg produces no work, while the horizontal leg does. The total work is determined by the horizontal area only.

An extended example is a piston that first heats at fixed volume and then expands at almost constant pressure. On the P-V diagram, two distinct segments appear: a vertical climb and then a horizontal extension. The interpretation is that the gas received heat without work first, then delivered work during expansion.

This construction shows why distinguishing curve shape from endpoint states is essential.

## Real student questions

If the curve is horizontal, does that always mean temperature is constant? No. A process can be isobaric with changing temperature as long as pressure remains fixed.

Does a closed loop always produce positive net work? No. If compression consumes more area than expansion, the net work can be negative.

How do I know whether to interpret the area as work done by the gas or work done on the gas? Look at the sign of [[DeltaV]]: positive expansion means work by the gas; negative compression means work on the gas.

## Cross-cutting connections and study paths

This leaf connects with ideal gas law, thermodynamic processes, and the first law of thermodynamics. It also links to internal energy and thermodynamic cycles because P-V work is the foundation for efficiency analysis.

The recommended path is: first master reading [[P]] and [[V]], then classify processes by path shape, and finally compare work of different cycles.

## Final synthesis

P-V diagrams translate gas thermodynamics into a clear geometric language. Work is the area under the path, and the path shape determines whether the gas expands, compresses, or follows a process at constant variables.

Interpreting the diagram correctly answers the leaf question: how to connect the shape of a P-V path with work and state changes.''',
    'modelos.md': '''# Modelo ideal

El modelo ideal que usa este leaf describe un gas diluido y sin interacciones moleculares relevantes. La única presión relevante es la ejercida por los choques de las moléculas con las paredes, y el volumen [[V]] ocupa todo el espacio disponible para el gas.

Este modelo permite interpretar la forma de un proceso en un diagrama p-V sin introducir correcciones de volumen finito, fuerzas intermoleculares ni efectos de no idealidad.

## Hipótesis

- El gas es ideal. Las moléculas no interaccionan excepto en choques elásticos.
- La presión [[P]] es homogénea dentro del volumen considerado.
- La cantidad de sustancia [[n]] se conserva en un sistema cerrado.
- La temperatura [[T]] define la familia de isotermas, y el proceso puede ser isobárico o de volumen variable.

Si se viola alguna hipótesis, la curva p-V puede distorsionarse y las fórmulas simples del leaf dejan de aplicar.

## Dominio de validez cuantitativo

- El modelo es válido para presiones del orden de 10⁵ Pa y menores, típicas de gases en recipientes de laboratorio.
- La ley funciona bien cuando la densidad permanece baja y se cumplen condiciones de gas ideal, es decir cuando P < 1×10⁶ Pa y las distancias moleculares son grandes frente al tamaño de las moléculas.
- Para volúmenes del orden de 10⁻⁴ m³ a 10⁻¹ m³ en recipientes comunes, la aproximación de gas ideal suele ser razonable si no hay condensación.

## Señales de fallo del modelo

- Si la trayectoria p-V se separa significativamente de una familia de isotermas ideales, el gas ya no es ideal.
- Si la curva muestra regiones de pendiente súbita o pliegues, puede haber transiciones de fase o efectos de interacción molecular.
- Si el trabajo inferido del área no coincide con la energía transferida estimada por otros medios, el modelo de gas ideal puede estar fallando.

## Modelo extendido o alternativo

Cuando conviene pasar al modelo de van der Waals u otro modelo realista: para densidades altas y presiones cercanas o superiores a 1×10⁶ Pa, las interacciones intermoleculares y el volumen finito de las partículas ya no pueden despreciarse.

La transición al modelo extendido conviene cuando el gas muestra un comportamiento más rígido de lo previsto por PV = nRT y la curva p-V se desplaza hacia presiones mayores a la misma temperatura.

## Comparación operativa

- Modelo ideal: simple, válido para gases diluidos a presiones moderadas. Modelo extendido: más complejo, necesario para densidades altas.
- Modelo ideal: curvas de proceso bien definidas y fáciles de leer. Modelo extendido: trayectorias corregidas por interacciones y volumen ocupado.
- Modelo ideal: útil para enseñanza y primeros cálculos de trabajo. Modelo extendido: necesario para predicciones precisas en condiciones extremas.
''',
    'modelos.en.md': '''# Ideal model

The ideal model used in this leaf describes a dilute gas without relevant molecular interactions. The only meaningful pressure is the one exerted by molecule-wall collisions, and volume [[V]] occupies the available space for the gas.

This model allows interpreting the shape of a process in a P-V diagram without finite-volume corrections, intermolecular forces, or non-ideal effects.

## Hypotheses

- The gas is ideal. Molecules do not interact except through elastic collisions.
- Pressure [[P]] is homogeneous within the considered volume.
- The amount of substance [[n]] is conserved in a closed system.
- Temperature [[T]] defines the family of isotherms, and the process may be isobaric or variable-volume.

If any hypothesis is violated, the P-V curve can distort and the simple leaf formulas cease to apply.

## Quantitative validity domain

- The model is valid for pressures around 10⁵ Pa and below, typical of laboratory gases.
- The law works well when density remains low and ideal gas conditions hold, that is when P < 1×10⁶ Pa and molecular spacing is large compared to molecular size.
- For volumes between 10⁻⁴ m³ and 10⁻¹ m³ in common containers, the ideal approximation is reasonable if condensation does not occur.

## Model failure signals

- If the P-V trajectory departs significantly from a family of ideal isotherms, the gas is no longer ideal.
- If the curve shows abrupt slope changes or folds, phase transitions or strong molecular interactions may be present.
- If the work inferred from area does not match energy transfer estimated by other means, the ideal gas model may be failing.

## Extended or alternative model

When to switch to the van der Waals or another realistic model: at high densities and pressures near or above 1×10⁶ Pa, intermolecular attractions and finite particle volume can no longer be neglected.

The transition to the extended model is appropriate when the gas behaves more rigidly than PV = nRT predicts and the P-V curve shifts to higher pressures at the same temperature.

## Operational comparison

- Ideal model: simple, valid for dilute gases at moderate pressures. Extended model: more complex, necessary for high-density conditions.
- Ideal model: process curves are well-defined and easy to read. Extended model: trajectories are corrected for interactions and excluded volume.
- Ideal model: useful for teaching and first work estimates. Extended model: required for accurate predictions under extreme conditions.
''',
    'errores.md': '''# Errores conceptuales

### Error 1: Confundir trabajo con energía interna

**Por qué parece correcto**
Trabajo y energía aparecen juntos en termodinámica, y muchos ejercicios asocian ambos conceptos. El alumno puede pensar que cualquier cambio de energía del gas es directamente trabajo mecánico.

**Por qué es incorrecto**
El trabajo [[W]] es energía transferida por desplazamiento volumétrico. La energía interna depende del estado termodinámico y puede cambiar incluso si el volumen no varía.

**Señal de detección**
Se detecta cuando se utiliza la variación de temperatura como si fuera el trabajo realizado por el gas.

**Corrección conceptual**
Se debe distinguir: el trabajo describe la transferencia mecánica entre gas y entorno; la energía interna describe el contenido energético del gas en su estado.

**Mini-ejemplo de contraste**
En un proceso isocórico el volumen no cambia, así que [[W]] es cero. Sin embargo la temperatura puede subir y la energía interna puede aumentar.

# Errores de modelo

### Error 1: Aplicar gas ideal en condiciones de alta densidad

**Por qué parece correcto**
PV = nRT es la ley más conocida del gas ideal y se intenta primero en cualquier problema de gases.

**Por qué es incorrecto**
A presiones altas y densidades elevadas las interacciones moleculares y el volumen finito de las partículas afectan significativamente la relación p-V.

**Señal de detección**
Esto suele aparecer cuando la curva p-V medida se separa de las isotermas ideales, especialmente para presiones mayores de 10⁶ Pa.

**Corrección conceptual**
Conviene usar un modelo extendido cuando el gas se desvía de la ley ideal. La desviación indica efectos de exclusión de volumen y atracción intermolecular.

**Mini-ejemplo de contraste**
Un gas a alta presión presenta una presión mayor que la predicha por PV = nRT. El modelo ideal subestima entonces la compresibilidad real.

# Errores matemáticos

### Error 1: Confundir [[DeltaV]] con volumen absoluto

**Por qué parece correcto**
El símbolo [[DeltaV]] se parece a [[V]], y puede parecer simplemente otra forma de hablar del volumen.

**Por qué es incorrecto**
[[DeltaV]] es la variación de volumen entre estados inicial y final. No es el volumen absoluto del gas en un instante dado.

**Señal de detección**
Cuando se usa [[DeltaV]] en lugar de [[V]] para calcular presión o trabajo, el resultado es erróneo.

**Corrección conceptual**
Usa [[V]] para el volumen en un punto específico y [[DeltaV]] para la diferencia entre volumen final e inicial.

**Mini-ejemplo de contraste**
Si V inicial es 0.02 m³ y V final es 0.05 m³, entonces [[DeltaV]] es 0.03 m³. No es correcto usar 0.05 m³ como [[DeltaV]].

# Errores de interpretación

### Error 1: Creer que un área mayor siempre significa más energía útil

**Por qué parece correcto**
El trabajo se representa como un área, y un área mayor parece intuitivamente mayor energía.

**Por qué es incorrecto**
El signo y la dirección del proceso importan. En compresión, el área se interpreta como trabajo recibido por el gas, no como energía entregada por él.

**Señal de detección**
Cuando un estudiante interpreta una trayectoria hacia la izquierda como si el gas hubiera generado energía útil.

**Corrección conceptual**
Observa el signo de [[DeltaV]]: expansión positiva significa trabajo por el gas; compresión negativa significa trabajo sobre el gas.

**Mini-ejemplo de contraste**
Una trayectoria horizontal hacia la izquierda tiene el mismo valor absoluto de área que una expansión, pero corresponde a trabajo entrante, no saliente.

# Regla de autocontrol rápido

Para cualquier trabajo en un diagrama p-V, comprueba siempre: si la presión es constante, si el cambio de volumen es positivo o negativo y si el área bajo la curva corresponde al signo esperado de [[W]].
''',
    'errores.en.md': '''# Conceptual errors

### Error 1: Confusing work with internal energy

**Why it seems correct**
Work and internal energy both appear together in thermodynamics, and many problems link them. The student may believe any energy change in the gas is automatically mechanical work.

**Why it is incorrect**
Mechanical work [[W]] is energy transferred by volume displacement. Internal energy depends on the thermodynamic state and can change even when volume does not.

**Detection signal**
The error appears when temperature change is treated as if it were the gas work.

**Conceptual correction**
Work describes mechanical energy exchange between gas and environment, while internal energy describes the gas energy content in a given state.

**Mini contrast example**
In an isochoric process, volume does not change, so [[W]] is zero even though temperature and internal energy can increase.

# Model errors

### Error 1: Applying ideal gas under high-density conditions

**Why it seems correct**
PV = nRT is the most familiar gas formula and is often the first choice for gas problems.

**Why it is incorrect**
At high pressure and density, molecular interactions and finite particle volume significantly alter the P-V relation.

**Detection signal**
You detect it when the measured P-V curve departs from ideal isotherms, especially for pressures above 1×10⁶ Pa.

**Conceptual correction**
Use an extended model like van der Waals when the gas deviates from the ideal law due to excluded volume and intermolecular attraction.

**Mini contrast example**
A high-pressure gas shows a pressure higher than PV = nRT predicts. The ideal model underestimates the real compression.

# Mathematical errors

### Error 1: Treating [[DeltaV]] as absolute volume

**Why it seems correct**
DeltaV looks similar to V, and the student may think it is just another volume symbol.

**Why it is incorrect**
[[DeltaV]] is the volume change between final and initial states, not the volume occupied at a single moment.

**Detection signal**
The mistake is exposed when [[DeltaV]] is used instead of [[V]] to obtain pressure or work.

**Conceptual correction**
Use [[V]] for the actual volume at a point and [[DeltaV]] for the change between two states.

**Mini contrast example**
If initial [[V]] is 0.02 m³ and final [[V]] is 0.05 m³, then [[DeltaV]] is 0.03 m³. It is wrong to use 0.05 m³ as [[DeltaV]].

# Interpretation errors

### Error 1: Believing a larger area always means more useful energy

**Why it seems correct**
Work is represented as area, so a larger area intuitively seems like more energy.

**Why it is incorrect**
Sign and process direction matter. In compression, the area is integrated in the opposite direction and represents work received, not delivered.

**Detection signal**
The student interprets a compression path as generating useful energy instead of consuming it.

**Conceptual correction**
Identify the sign of [[DeltaV]]: positive expansion means work done by the gas; negative compression means work done on the gas.

**Mini contrast example**
A horizontal path to the left in the P-V diagram has the same absolute area as an expansion, but corresponds to input work rather than output.

# Quick self-control rule

If a problem involves mechanical work, always check: whether pressure is constant, whether volume change is positive or negative, and whether the area under the curve matches the expected sign of [[W]].
''',
    'ejemplos.md': '''# Ejemplo tipo examen

## Enunciado
Un gas ideal de 0.50 mol se encuentra en un recipiente con volumen inicial de 0.020 m³ y presión constante de 1.2×10⁵ Pa. El gas se expande a volumen final 0.050 m³. Calcular el trabajo mecánico realizado, describir la forma de la trayectoria en el diagrama p-V e interpretar físicamente el resultado.

## Datos
- Cantidad de gas: 0.50 mol
- Presión constante: 1.2×10⁵ Pa
- Volumen inicial: 0.020 m³
- Volumen final: 0.050 m³

## Definición del sistema
Sistema: gas ideal cerrado que sufre un proceso isobárico a presión constante. El recipiente mantiene la presión fija mientras el volumen cambia de forma controlada.

## Modelo físico
Se asume la ley del gas ideal y un proceso isobárico. El gas es lo bastante diluido como para despreciar las interacciones moleculares y la presión se considera uniforme en todo el volumen.

## Justificación del modelo
La presión se mantiene constante, por lo que el trabajo puede calcularse con la expresión de proceso isobárico. El estado inicial y el estado final determinan una trayectoria horizontal en el diagrama p-V.

## Resolución simbólica
{{f:gas_ideal}}

{{f:trabajo_isobarico}}

En este problema, [[P]] es constante, [[DeltaV]] es la diferencia entre el volumen final y el volumen inicial, y el trabajo [[W]] se obtiene de ese producto.

## Sustitución numérica
El cambio de volumen es 0.030 m³, calculado como la diferencia entre 0.050 m³ y 0.020 m³. La presión constante es de 1.2×10⁵ Pa.

Multiplicar la presión por el cambio de volumen da aproximadamente 3.6×10³ J. Por tanto, [[W]] es positivo, lo que indica que el gas entrega energía al entorno.

## Validación dimensional
La unidad de trabajo es el joule. Un pascal equivale a un newton por metro cuadrado, y al multiplicarlo por un volumen en metros cúbicos se obtiene una unidad de energía. Por eso la expresión de trabajo isobárico es coherente con la dimensión de energía.

## Interpretación física
En el diagrama p-V la trayectoria es una línea horizontal entre 0.020 m³ y 0.050 m³. El área bajo la curva representa el trabajo mecánico que el gas realiza sobre el pistón.

El resultado muestra que el gas realiza trabajo porque el volumen aumenta. Si el volumen hubiera disminuido, el signo de [[W]] sería negativo y el gas absorbería energía del entorno.

# Ejemplo de aplicación real

## Contexto
Un cilindro con un pistón cargado por una fuerza constante se calienta lentamente. El gas dentro del cilindro se expande mientras la presión aplicada por el pistón se mantiene casi constante.

## Estimación física
Con una presión de 1.2×10⁵ Pa y un cambio de volumen de 0.030 m³, el trabajo mecánico realizado es del orden de 3.6 kJ. Esa energía es la que impulsa el movimiento del pistón.

## Interpretación
El gas entrega energía al mover el pistón. El diagrama p-V permite visualizar que el proceso es isobárico y que el área bajo la curva corresponde al trabajo disponible para realizar desplazamiento.
''',
    'ejemplos.en.md': '''# Exam-type example

## Problem statement
An ideal gas of 0.50 mol is contained in a vessel with initial volume 0.020 m³ and constant pressure 1.2×10⁵ Pa. The gas expands to a final volume of 0.050 m³. Calculate the mechanical work done, describe the shape of the trajectory on the P-V diagram, and interpret the result physically.

## Data
- Gas amount: 0.50 mol
- Constant pressure: 1.2×10⁵ Pa
- Initial volume: 0.020 m³
- Final volume: 0.050 m³

## System definition
System: a closed ideal gas undergoing an isobaric process at constant pressure. The vessel keeps pressure fixed while volume changes in a controlled manner.

## Physical model
We assume the ideal gas law and an isobaric process. The gas is sufficiently dilute that molecular interactions are negligible and pressure is uniform inside the volume.

## Model justification
Constant pressure allows applying the isobaric work expression. The initial and final states determine a horizontal trajectory on the P-V diagram.

## Symbolic solution
{{f:gas_ideal}}

{{f:trabajo_isobarico}}

In this problem, [[P]] stays constant, [[DeltaV]] is the difference between final and initial volume, and [[W]] is obtained from that product.

## Numerical substitution
The volume change is 0.030 m³, computed from 0.050 m³ minus 0.020 m³. The constant pressure is 1.2×10⁵ Pa.

Multiplying pressure by volume change gives about 3.6×10³ J. Thus, [[W]] is positive, indicating that the gas delivers energy to the surroundings.

## Dimensional validation
The unit of work is the joule. A pascal is a newton per square meter, and multiplied by cubic meters it becomes an energy unit. Therefore the isobaric work expression is dimensionally consistent.

## Physical interpretation
On the P-V diagram the path is a horizontal line between 0.020 m³ and 0.050 m³. The area under the curve represents the mechanical work that the gas does on the piston.

The result shows that the gas produces work because volume increases. If volume had decreased, [[W]] would be negative and the gas would absorb energy from the surroundings.

# Real-world example

## Context
A cylinder with a piston loaded by a constant force is heated slowly. The gas inside expands while the piston pressure remains approximately fixed.

## Physical estimation
With pressure of 1.2×10⁵ Pa and a volume change of 0.030 m³, the mechanical work is on the order of 3.6 kJ. That energy drives the piston motion.

## Interpretation
The gas delivers energy by moving the piston. The P-V diagram makes it clear that the process is isobaric and that the area under the curve corresponds to useful work.
''',
    'aplicaciones.md': '''## 1. Expansión de gas en un cilindro de laboratorio

En un experimento de física, un gas ideal contenido en un cilindro con pistón móvil se calienta lentamente mientras una pesa fija mantiene la presión casi constante. El diagrama p-V permite ver el proceso como una línea horizontal bien definida.

El análisis se centra en el área bajo la curva, que representa el trabajo mecánico necesario para desplazar el pistón. El gas realiza trabajo sobre el entorno si el volumen aumenta.

Variable dominante: la presión constante es la magnitud que controla el trabajo del tramo isobárico.
Límite de validez: el modelo deja de ser válido si la presión ya no se mantiene constante o si la densidad del gas aumenta hacia valores no ideales.

## 2. Admisión en un motor a gasolina

Durante la admisión de un motor, el cilindro se llena con mezcla de aire y combustible a presión cercana a la atmosférica. El tramo inicial del ciclo se puede aproximar como un proceso de volumen creciente con presión casi constante.

El diagrama p-V ayuda a estimar el trabajo de admisión y a comparar la magnitud de la expansión con el ciclo total. La presión ambiental controla el área relevante en ese tramo.

Variable dominante: la presión ambiente determina la magnitud del trabajo de admisión.
Límite de validez: el modelo no es válido si el proceso se vuelve dinámico o turbulento y la presión deja de ser homogénea en el cilindro.

## 3. Llenado de un balón meteorológico

Un balón meteorológico de gas ligero se llena hasta un volumen conocido antes de ser liberado. Durante el llenado, la presión interna se ajusta a la externa y el diagrama p-V describe la energía almacenada en el gas de llenado.

La forma del proceso muestra si el gas se expandió a presión constante o si hubo una ligera sobrepresión de llenado. El volumen final decide cuánta energía se ha dispuesto para el ascenso.

Variable dominante: el volumen final de llenado controla la energía mecánica disponible para elevar el balón.
Límite de validez: el modelo deja de ser válido si la presión interna se desvía de la presión externa por efectos de fricción o de llenado rápido.

## 4. Jeringa neumática de laboratorio

Una jeringa que se usa para desplazar gas lentamente contra una presión de referencia es un ejemplo directo de un proceso isobárico en el diagrama p-V. El operador observa el movimiento del pistón y el volumen varía mientras la presión se mantiene estable.

El análisis del área bajo la curva proporciona una estimación del trabajo mecánico aplicado o entregado por el gas durante la inyección o extracción.

Variable dominante: la presión de referencia del sistema regula el trabajo mecánico del proceso.
Límite de validez: el modelo pierde validez cuando el flujo ya no es lento y la presión del gas cambia significativamente durante el movimiento.

## 5. Compresión en un sistema de aire comprimido

En la salida de un compresor, el gas puede atravesar un tramo en el que la presión se aproxima a constante mientras el volumen disminuye. El diagrama p-V describe este tramo de compresión y el trabajo requerido para mantener el flujo.

Esta aplicación muestra cómo el mismo concepto de área bajo la curva aplica tanto a la expansión como a la compresión. El gas recibe trabajo cuando el volumen disminuye.

Variable dominante: la presión constante del compresor es la magnitud que determina el trabajo del tramo.
Límite de validez: el modelo no es válido en regímenes donde la presión del gas aumenta de forma significativa durante la compresión o cuando la temperatura varía mucho sin control.
''',
    'aplicaciones.en.md': '''## 1. Gas expansion in a laboratory cylinder

In a physics experiment, an ideal gas in a piston cylinder is heated slowly while a fixed weight keeps the pressure nearly constant. The P-V diagram shows the process as a clearly defined horizontal line.

The analysis focuses on the area under the curve, which represents mechanical work done to move the piston. The gas performs work on the environment when volume increases.

Dominant variable: the constant pressure controls the work of the isobaric segment.
Validity limit: the model fails if pressure no longer remains constant or if gas density increases toward non-ideal behavior.

## 2. Intake in a gasoline engine

During engine intake, the cylinder fills with an air-fuel mixture at pressure close to atmospheric. The initial cycle segment can be approximated as a volume increase at nearly constant pressure.

The P-V diagram helps estimate intake work and compare the expansion magnitude with the overall cycle. Ambient pressure controls the relevant area in that segment.

Dominant variable: ambient pressure determines the magnitude of intake work.
Validity limit: the model is invalid if the process becomes highly dynamic or turbulent and pressure becomes non-uniform in the cylinder.

## 3. Filling a weather balloon

A weather balloon is filled with light gas to a known volume before release. During filling, internal pressure adjusts to external pressure, and the P-V diagram describes the energy stored in the filling gas.

The process shape shows whether the gas expanded at constant pressure or whether there was a small filling overpressure. Final volume decides how much energy is available for ascent.

Dominant variable: the final filled volume controls the mechanical energy available to lift the balloon.
Validity limit: the model fails if internal pressure deviates from external pressure due to rapid filling or friction effects.

## 4. Laboratory pneumatic syringe

A syringe used to displace gas slowly against a reference pressure is a direct example of an isobaric process in the P-V diagram. The operator watches the piston move while volume changes and pressure stays stable.

The area under the curve gives an estimate of the mechanical work applied or delivered by the gas during injection or extraction.

Dominant variable: the reference system pressure regulates the mechanical work of the process.
Validity limit: the model breaks down when flow is no longer slow and gas pressure changes significantly during motion.

## 5. Compression in an air compressor system

At the output of a compressor, gas can pass through a stage where pressure is approximately constant while volume decreases. The P-V diagram describes this compression leg and the work required to maintain the flow.

This application shows how the same area-under-the-curve concept applies both to expansion and compression. The gas receives work when volume decreases.

Dominant variable: the compressor constant pressure determines the work of the segment.
Validity limit: the model is invalid in regimes where gas pressure increases significantly during compression or where temperature varies strongly without control.
''',
    'historia.md': '''## Problema histórico

El problema histórico que condujo al uso de diagramas p-V fue la necesidad de cuantificar el trabajo en motores de vapor. Los ingenieros del siglo XIX querían saber cómo traducir las observaciones de presión y volumen en energía útil, sin depender sólo de mediciones de fuerza.

Clapeyron y otros investigadores buscaban una herramienta gráfica que conectara el comportamiento de los gases con el rendimiento de máquinas térmicas.

## Dificultad conceptual previa

Antes de los diagramas p-V, la física de los gases se expresaba principalmente en ecuaciones algebraicas. Era difícil visualizar qué significaba un proceso y cómo comparar etapas de expansión y compresión en un ciclo.

El obstáculo real era entender cómo el trabajo mecánico se relacionaba con el cambio de volumen y con la presión variable a lo largo de un proceso.

## Qué cambió

La introducción del diagrama p-V permitió representar cada estado del gas como un punto y cada proceso como una curva. Ese cambio transformó el trabajo en una cantidad geométrica: el área bajo la curva.

Clapeyron y otros demostraron que se podía calcular el trabajo en un motor como el área encerrada por el ciclo en el diagrama. Esa idea fue clave para avanzar en termodinámica práctica.

## Impacto en la física

El impacto en la física fue inmediato: los diagramas p-V hicieron accesible el análisis de ciclos termodinámicos y permitieron comparar fácilmente distintas máquinas térmicas.

Ese avance ayudó a consolidar la termodinámica como disciplina y a comprender mejor conceptos como eficiencia y trabajo neto.

## Conexión con física moderna

Hoy los diagramas p-V siguen presentes en la enseñanza de la termodinámica y en el diseño de motores modernos. También se usan en el análisis de procesos de refrigeración y en la comparación de ciclos reales con modelos ideales.

La conexión con la física moderna es clara: el concepto de área en un diagrama continúa siendo la forma más directa de interpretar el trabajo de un gas.
''',
    'historia.en.md': '''## Historical problem

The historical problem that led to P-V diagrams was the need to quantify work in steam engines. Nineteenth-century engineers wanted a way to convert pressure and volume observations into useful energy without relying only on force measurements.

Clapeyron and other researchers sought a graphic tool that would connect gas behavior with the performance of thermal machines.

## Prior conceptual difficulty

Before P-V diagrams, gas physics was expressed mostly in algebraic equations. It was hard to visualize what a process meant and how to compare expansion and compression stages in a cycle.

The real obstacle was understanding how mechanical work related to volume change and to pressure varying along a process.

## What changed

The introduction of the P-V diagram made it possible to represent each gas state as a point and each process as a curve. That change turned work into a geometric quantity: the area under the curve.

Clapeyron and others showed that work in an engine could be calculated as the area enclosed by the cycle in the diagram. That idea unlocked practical thermodynamic analysis.

## Impact on physics

The impact on physics was immediate: P-V diagrams made thermodynamic cycle analysis accessible and allowed easy comparison of different heat engines.

This advance helped consolidate thermodynamics as a discipline and clarified concepts such as efficiency and net work.

## Connection with modern physics

Today P-V diagrams remain central in thermodynamics education and in the design of modern engines. They are also used in refrigeration analysis and in comparing real cycles with idealized models.

The link to modern physics is clear: the concept of area in a diagram remains the most direct way to interpret gas work.
'''
}

base.mkdir(parents=True, exist_ok=True)
for name, text in files.items():
    path = base / name
    path.write_text(text, encoding='utf-8')
print('written', len(files), 'files')
