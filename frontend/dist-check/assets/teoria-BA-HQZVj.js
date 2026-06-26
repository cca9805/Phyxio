const e=`# Concepto de Bomba de Calor

## Contexto conceptual
La climatización de espacios habitables ha evolucionado desde la combustión directa de biomasa e hidrocarburos hacia sistemas de alta eficiencia que interactúan de forma inteligente con la termodinámica del entorno. En este marco, la bomba de calor no emerge como un generador de energía en el sentido tradicional, sino como un gestor avanzado de flujos energéticos. Su relevancia en la física aplicada reside en su capacidad única para subvertir el flujo natural del calor —que siempre viaja de lo caliente a lo frío— mediante la aplicación de un trabajo externo.

Comprender este sistema es fundamental para cualquier estudiante de física o ingeniería, ya que representa la aplicación práctica más exitosa de la segunda ley de la termodinámica en el ámbito doméstico. Al entender cómo una máquina puede "bombear" calor contra el gradiente térmico, el alumno adquiere una visión profunda sobre la diferencia entre energía de alta calidad (trabajo) y energía de baja calidad (calor), y cómo la tecnología puede apalancar los recursos ambientales para maximizar la sostenibilidad.

## 🟢 Nivel esencial
La **bomba de calor** permite calentar o enfriar un espacio moviendo energía térmica de un lugar a otro, en lugar de generarla mediante resistencias o combustión. Al igual que una bomba de agua eleva líquido desde un pozo aplicando un esfuerzo, la bomba de calor aplica un esfuerzo eléctrico para elevar la temperatura de la energía térmica ambiental hasta un nivel útil.

Esta capacidad de aprovechar la energía dispersa en el aire, agua o tierra la define como tecnología renovable. Por cada unidad de electricidad consumida, el equipo entrega varias unidades de calor real; el entorno nos "regala" el resto. Esto es posible gracias a un refrigerante que circula cambiando de fase y transportando energía de forma extremadamente eficiente.

> [!TIP]
> Recuerda que una bomba de calor no es una estufa. Mientras una estufa gasta 1 unidad de energía para dar 1 unidad de calor, la bomba de calor gasta 1 para "transportar" 3 o 4 desde el exterior.

## 🔵 Nivel formal
Desde un punto de vista formal, el funcionamiento de la bomba de calor se rige por un ciclo de compresión de vapor operando en sentido inverso al de una máquina térmica. Para cuantificar la eficiencia de este proceso, no utilizamos el concepto de "rendimiento" tradicional (que siempre es menor al 100%), sino el [[coeficiente de rendimiento|cop]] ([[COP|cop]]). El [[cop]] es un multiplicador adimensional que relaciona el [[beneficio térmico|q_calor]] obtenido con el [[coste eléctrico|w_elec]] invertido.

La relación fundamental que define este coeficiente es:

{{f:cop_definicion}}

En esta expresión, [[q_calor]] representa el [[calor total|q_calor]] inyectado en el recinto, mientras que [[w_elec]] representa el [[trabajo neto|w_elec]] realizado por el compresor. Según la primera ley de la termodinámica aplicada al ciclo, la energía total entregada debe ser la suma de la [[energía eléctrica|e_elec]] consumida y la energía térmica capturada del foco frío, lo que nos lleva al balance de energía:

{{f:balance_primera_ley}}

Finalmente, para realizar balances económicos y de consumo real en una vivienda, introducimos el precio de la energía [[precio_kwh]] y el tiempo de funcionamiento [[hora]], lo que nos permite calcular el impacto final en la facturación mediante el [[coste]] total acumulado:

{{f:ahorro_relativo}}

{{f:consumo_equivalente}}

{{f:facturacion_total}}

## 🔴 Nivel estructural
La arquitectura física de una bomba de calor está limitada por las fronteras infranqueables de la segunda ley de la termodinámica. El límite superior de eficiencia para cualquier sistema que opere entre dos temperaturas dadas viene definido por el ciclo ideal de Carnot. Este límite nos indica que el [[COP|cop]] máximo posible es inversamente proporcional al "salto térmico" (la diferencia de temperatura entre el interior y el exterior). Cuanto mayor sea esta diferencia, más trabajo deberá realizar el compresor para elevar la presión y la temperatura del refrigerante, reduciendo inevitablemente la eficiencia del sistema.

Desde una perspectiva estructural, el sistema se compone de cuatro elementos críticos: el evaporador (donde se captura el [[calor ambiental|q_ambiente]]), el compresor (donde se invierte el [[trabajo eléctrico|w_elec]]), el condensador (donde se entrega el [[calor útil|q_calor]]) y la válvula de expansión. La coherencia de este conjunto depende de la capacidad del refrigerante para evaporarse a temperaturas muy bajas. Sin embargo, cuando la temperatura exterior cae drásticamente, la densidad del aire y la presión en el evaporador disminuyen tanto que el sistema debe realizar un esfuerzo de compresión desproporcionado.

Físicamente, el límite operativo se alcanza cuando la presión de evaporación se aproxima al vacío técnico o cuando el volumen específico del refrigerante aumenta tanto que el compresor no puede desplazar masa suficiente para transportar el calor necesario. En estas condiciones, el [[COP|cop]] real se degrada hacia la unidad, invalidando la ventaja del bombeo térmico.

> [!WARNING]
> La formación de escarcha en el evaporador es un límite estructural físico. Cuando el aire exterior está muy húmedo y frío, el hielo bloquea el intercambio térmico, obligando al sistema a invertir el ciclo para descongelarse, lo que penaliza el consumo de [[trabajo eléctrico|w_elec]] neto.

## Interpretación física profunda
La interpretación profunda de la bomba de calor revela una asimetría fundamental en la naturaleza. Mientras que es trivial y espontáneo degradar energía de alta calidad ([[trabajo eléctrico|w_elec]]) en calor de baja calidad (fricción o resistencia), es una tarea técnica sofisticada y "antinatural" utilizar esa electricidad para concentrar calor disperso en el ambiente y elevar su temperatura. El [[coste]] que pagamos por el confort térmico es, en última instancia, el precio de luchar contra la entropía del universo local.

Al utilizar una bomba de calor, no solo estamos realizando un [[ahorro]] en la factura; estamos realizando una optimización exergética de los recursos. Estamos usando la mínima cantidad posible de "orden" ([[trabajo eléctrico|w_elec]]) para gestionar una gran cantidad de "caos" térmico ([[calor ambiental|q_ambiente]]). Por tanto, la bomba de calor no es solo una máquina térmica, es un puente entre la tecnología humana y los ciclos térmicos naturales del planeta, permitiéndonos vivir en armonía con el entorno al aprovechar la energía solar almacenada en el aire, el agua o el suelo.

## Orden de magnitud
Para una vivienda unifamiliar media en un día de invierno, la demanda térmica [[q_demanda]] suele rondar los 150 [[megajulios|MJ]] (unos 42 [[kWh]] térmicos).
- **Sistema resistivo** con [[COP|cop]] de valor 1: Consumiría exactamente 42 [[kWh]] eléctricos con una potencia [[kilovatio]] de varios kW.
- **Bomba de calor** con [[COP|cop]] de valor 4: Consumiría solo 10,5 [[kWh]] eléctricos.

Esta comparativa muestra que la bomba de calor opera en una escala de eficiencia cuatro veces superior a los sistemas tradicionales. Un resultado de cálculo que devuelva un [[COP|cop]] de 0.5 o de 50 sería físicamente absurdo: el primero violaría la lógica económica del sistema y el segundo ignoraría los límites de la fricción y el ciclo de Carnot.

## Método de resolución personalizado
Para resolver problemas de balances en bombas de calor, sigue estos pasos operativos:
1.  **Identificar la carga**: Determina el [[calor entregado|q_calor]] necesario para calentar el recinto o el agua, habitualmente expresado como [[demanda térmica|q_demanda]].
2.  **Aplicar el [[COP|cop]]**: Utiliza la eficiencia media del equipo para hallar el [[trabajo eléctrico|w_elec]] necesario mediante la relación técnica de consumo equivalente.
3.  **Verificar el balance**: Asegúrate de que la suma del [[calor ambiental|q_ambiente]] y el [[trabajo eléctrico|w_elec]] sea igual al [[calor entregado|q_calor]].
4.  **Calcular el [[coste]]**: Aplica el [[precio de la energía|precio_kwh]] al consumo acumulado durante el [[tiempo de funcionamiento|hora]] para obtener el impacto económico real.

## Casos especiales y ejemplo extendido
Un caso especial crítico es la **geotermia**. Mientras que la aerotermia depende del aire exterior (cuya temperatura fluctúa), la geotermia utiliza el terreno, que mantiene una temperatura constante de unos 15 grados Celsius todo el año. Esto permite que el [[COP|cop]] se mantenga alto y estable incluso durante las ventiscas de nieve más extremas, ya que el sistema siempre "pesca" en una fuente térmica templada.

Otro ejemplo extendido es el uso de bombas de calor para **climatización de piscinas**. Dado que la temperatura del agua de la piscina es baja (unos 25-28 grados Celsius), el salto térmico con el aire exterior es pequeño, lo que dispara el [[COP|cop]] hasta valores de 5 o 6, convirtiéndose en una de las aplicaciones más rentables físicamente de toda la industria térmica.

## Preguntas reales del alumno
- **¿Si el aire está a -5 grados Celsius, cómo puede tener calor?** Físicamente, cualquier cuerpo por encima del cero absoluto (-273 grados Celsius) contiene energía térmica. Solo necesitamos un refrigerante que esté más frío que el aire exterior para poder "robarle" calor.
- **¿Consume mucha electricidad al arrancar?** Los sistemas Inverter modernos modulan el [[trabajo eléctrico|w_elec]] para arrancar suavemente, evitando picos de consumo y maximizando la vida del compresor.
- **¿Por qué sale agua de la unidad exterior?** Es la humedad del aire que se condensa (o hielo que se derrite) al entrar en contacto con el evaporador frío. Es señal de que el sistema está extrayendo energía del ambiente con eficacia.
- **¿Puedo tener calefacción infinita gratis?** No, siempre debes pagar el "peaje" del [[trabajo eléctrico|w_elec]] para mover el calor. La termodinámica prohíbe el calor gratis sin aporte de energía externa.

## Conexiones transversales y rutas de estudio
- **Termodinámica**: Conecta directamente con la segunda ley y el concepto de entropía.
- **Mecánica de fluidos**: Los procesos de compresión y expansión son aplicaciones directas del comportamiento de gases reales.
- **Sostenibilidad**: Representa el eje central de la descarbonización del sector residencial.

Para profundizar, se recomienda estudiar la leaf de \`[Ciclo de Carnot](leaf:fisica-clasica/termodinamica/maquinas-termicas/ciclo-de-carnot)\` a continuación para comprender el límite teórico absoluto.

## Síntesis final
La bomba de calor es la tecnología clave para una climatización eficiente y sostenible. Al actuar como un transportador de energía ambiental en lugar de un generador de calor, permite multiplicar el efecto de la electricidad consumida, logrando un [[ahorro]] masivo y reduciendo el impacto ambiental. Entender su funcionamiento es entender la física aplicada al servicio de la sociedad moderna.
`;export{e as default};
