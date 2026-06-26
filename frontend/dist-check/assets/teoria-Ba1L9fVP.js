const e=`# Calefacción Resistiva

La calefacción resistiva es la forma más directa y transparente de convertir electricidad en calor dentro de un espacio doméstico. Radiadores de aceite, convectores eléctricos, estufas de cuarzo, suelo radiante eléctrico y toalleros térmicos son sus manifestaciones cotidianas más comunes. Todos comparten el mismo principio físico fundamental: la corriente eléctrica atraviesa un material de alta resistencia y, por efecto Joule, la energía eléctrica se disipa en forma de calor. La elegancia de este sistema reside en su transparencia física: no hay ciclos termodinámicos, no hay fluidos refrigerantes, no hay compresores; únicamente la conversión directa y casi perfecta de una forma de energía en otra.

Sin embargo, esa aparente perfección técnica encierra una trampa económica que conviene entender desde la física. El hecho de que un emisor resistivo convierta prácticamente toda la electricidad que consume en calor útil no lo hace necesariamente la mejor opción económica ni energética para la calefacción estacional. Comprender por qué requiere dominar las relaciones entre [[potencia del emisor|P]], [[tiempo efectivo de uso|t]], [[consumo eléctrico|E]] y [[calor útil|Q]], así como entender qué significa exactamente un [[coeficiente de rendimiento|COP]] igual a 1 y por qué eso, lejos de ser una ventaja absoluta, puede resultar el mayor desafío económico de este tipo de sistema.

## Contexto conceptual

La calefacción resistiva opera bajo el principio de que toda resistencia eléctrica, al ser atravesada por corriente, disipa energía en forma de calor. Esta disipación, conocida como efecto Joule, es un fenómeno irreversible desde el punto de vista termodinámico: la energía eléctrica de alta calidad (capaz de realizar trabajo mecánico) se degrada hacia energía térmica de baja calidad (calor difuso). La ley que gobierna este proceso se expresa simplemente como la tasa de disipación de [[potencia del emisor|P]], que multiplica el tiempo de funcionamiento [[tiempo efectivo de uso|t]] para obtener el [[consumo eléctrico|E]] total.

Lo que distingue a la resistiva de otras tecnologías de calefacción es precisamente que no hay ganancia energética: cada julio de electricidad produce exactamente un julio de calor. Esto contrasta radicalmente con una bomba de calor, que puede extraer 3 o 4 julios de calor del aire exterior por cada julio eléctrico invertido, gracias a un ciclo termodinámico que "apalanca" la energía del entorno.

## 🟢 Nivel esencial

Para entender la calefacción resistiva, es necesario separar con claridad tres conceptos que a menudo se confunden:

**La potencia [[P]]** es el ritmo al que el emisor consume electricidad. Un radiador de 1,5 kW consume 1,5 kilovatios en cada segundo de funcionamiento. Es una característica fija del equipo que no cambia con el uso. Si el termostato desconecta el equipo, la [[P]] deja de actuar sobre el circuito; si lo mantiene encendido continuamente, [[P]] es constante.

**El tiempo efectivo [[t]]** es la variable que el usuario controla con más libertad. No se mide en horas de aparato encendido sino en horas con la resistencia realmente activa. Un radiador con termostato puede estar encendido 8 horas pero con la resistencia activa solo 5 de esas horas. Esas 5 horas son las que determinan el [[consumo eléctrico|E]].

**El consumo [[E]]** es el resultado del sistema: cuánta energía eléctrica ha usado el emisor en el periodo analizado. Es exactamente lo que marca el contador y lo que aparece en la factura. La relación entre estas tres magnitudes es la ley más simple de la termodinámica aplicada: el [[consumo eléctrico|E]] es el producto de la [[potencia del emisor|P]] por el [[tiempo efectivo de uso|t]].

Esta relación tiene una implicación directa y poderosa: en resistiva, si quieres reducir el consumo a la mitad, puedes reducir la [[P]] a la mitad (comprar un emisor menos potente) o reducir el [[t]] a la mitad (usarlo la mitad de tiempo). Ambas estrategias son físicamente equivalentes, pero tienen consecuencias prácticas muy distintas en términos de confort.

El [[rendimiento de conversión|eta]] de los sistemas resistivos es extraordinariamente alto, típicamente entre 0,95 y 1,0, lo que significa que prácticamente toda la electricidad consumida llega como calor al espacio. Esta es la característica que hace a la resistiva transparente y predecible.

## 🔵 Nivel formal

La fracción del [[consumo eléctrico|E]] que efectivamente calienta el recinto es el [[calor útil|Q]], que se obtiene aplicando el [[rendimiento de conversión|eta]] del emisor.

La relación matemática fundamental es la definición del [[consumo eléctrico|E]] como producto de [[potencia del emisor|P]] por [[tiempo efectivo de uso|t]]:

{{f:energia}}


Una vez conocido el consumo, el [[calor útil|Q]] entregado al recinto se obtiene aplicando el [[rendimiento de conversión|eta]] del emisor:

{{f:calor_util}}

En la práctica, para emisores resistivos domésticos, el [[rendimiento de conversión|eta]] ≈ 0,98, lo que significa que el [[calor útil|Q]] es prácticamente igual al [[consumo eléctrico|E]].

El [[coeficiente de rendimiento|COP]] del sistema se define como el cociente entre el [[calor útil|Q]] y la energía eléctrica invertida [[E]]:

{{f:cop_resistiva}}

En la calefacción resistiva ideal, [[COP]] = [[Q]]/[[E]] ≈ 1. Esta igualdad es la clave conceptual más importante del tema: no existe ganancia energética; cada kWh eléctrico produce como máximo 1 kWh térmico. Comparado con una bomba de calor que puede alcanzar [[COP]] = 4, el sistema resistivo necesita consumir 4 veces más electricidad para el mismo resultado térmico.

El análisis formal del sistema tiene dos dimensiones complementarias. En primer lugar, la dimensión de potencia: la [[potencia del emisor|P]] determina la tasa de calentamiento del recinto. Si la [[P]] es insuficiente para compensar las pérdidas térmicas del edificio en un día frío, la temperatura de consigna nunca se alcanza independientemente del [[tiempo efectivo de uso|t]]. En segundo lugar, la dimensión energética: el [[consumo eléctrico|E]] acumulado durante una temporada es el integral del perfil de [[P]] activa por el [[tiempo efectivo de uso|t]], y determina directamente la factura. La separación entre estas dos dimensiones —potencia para confort, energía para coste— es el núcleo de todo análisis formal de un sistema de calefacción resistiva.

## 🔴 Nivel estructural

A nivel estructural, el análisis de la calefacción resistiva debe considerar sus límites físicos y los mecanismos de fallo del modelo simple:

**Límite termodinámico fundamental:** El [[COP]] de la resistiva no puede superar 1 por la conservación de la energía. Esto no es un defecto de diseño sino una consecuencia directa del primer principio de la termodinámica aplicado a la conversión directa sin ciclo termodinámico. Cualquier sistema que prometa [[COP]] > 1 en resistiva pura viola las leyes de la física.

**Dependencia de la demanda térmica del edificio:** El consumo total de una temporada no depende solo del emisor sino de la envolvente del edificio. Si la vivienda tiene malas ventanas o falta de aislamiento, la demanda térmica que el emisor debe cubrir es mucho mayor, aumentando el [[tiempo efectivo de uso|t]] y, por tanto, el [[consumo eléctrico|E]]. Una mejora de envolvente que reduzca la demanda a la mitad reduce el consumo a la mitad sin cambiar el equipo.

**Simultaneidad eléctrica:** Varios emisores resistivos funcionando a la vez, junto con otros electrodomésticos de alta potencia (cocina eléctrica, lavadora, etc.), pueden superar la potencia contratada o los límites de los circuitos. La suma de [[P]] simultáneas es una restricción de seguridad que el modelo simple no contempla.

**Inercia del termostato:** El modelo estacionario asume que el equipo funciona en régimen estacionario. En la práctica, los ciclos de encendido-apagado del termostato introducen variaciones que el modelo estacionario simplifica al usar [[t]] como "horas activas equivalentes".

## Interpretación física profunda

La cadena causal en la calefacción resistiva sigue una lógica lineal directa: si la demanda térmica aumenta (por más frío, peor aislamiento o más horas de ocupación), el termostato mantiene la resistencia activa durante más tiempo, aumentando el [[tiempo efectivo de uso|t]] y, en consecuencia, el [[consumo eléctrico|E]] y el coste. No hay ningún factor multiplicador de rendimiento que pueda romper esta cadena; el [[COP]] es irremediablemente igual a 1.

Este análisis revela que las dos palancas principales para reducir el gasto son: (1) reducir la demanda térmica del edificio actuando sobre el aislamiento y la estanqueidad, y (2) reducir el [[tiempo efectivo de uso|t]] ajustando los horarios, la zonificación y la temperatura de consigna.

## Orden de magnitud

En una habitación de 20 m² en clima templado, la demanda térmica diaria en invierno puede ser de 5–10 kWh. Con un emisor de 2 kW y [[COP]] = 1, necesitarás entre 2,5 y 5 horas de funcionamiento efectivo para cubrirla. En toda una temporada de 120 días, esto puede representar 600–1200 kWh eléctricos, lo que a un precio de 0,22 EUR/kWh equivale a 132–264 EUR solo para esa habitación.

## Método de resolución personalizado

Para analizar un sistema de calefacción resistiva:
1. Identifica cada emisor con su [[P]] nominal y su [[t]] efectivo diario estimado.
2. Calcula el [[consumo eléctrico|E]] por equipo y total con la fórmula principal.
3. Aplica el [[rendimiento de conversión|eta]] para obtener el [[calor útil|Q]] real.
4. Calcula el [[COP]] y compáralo con alternativas tecnológicas.
5. Evalúa la simultaneidad sumando todas las [[P]] activas a la vez.
6. Propón mejoras: reducir [[t]] (horarios, termostato), reducir demanda (aislamiento) o migrar a tecnología con [[COP]] > 1.

## Casos especiales y ejemplo extendido

Aunque el modelo ideal cubre la mayoría de situaciones domésticas, existen variantes que requieren consideración adicional:

**Emisores con varios niveles de potencia**: Algunos emisores tienen dos o tres posiciones (baja, media, alta). En ese caso, la [[potencia del emisor|P]] efectiva es el promedio ponderado por el tiempo en cada posición, y el [[consumo eléctrico|E]] total es la suma de los consumos parciales en cada nivel.

**Múltiples emisores en el mismo circuito**: Si varios emisores comparten circuito, la restricción operativa es la suma de sus [[P]] simultáneas, que no debe superar la capacidad del circuito (típicamente 2,2–4,6 kW para circuitos de 10–20 A a 230 V). Esta restricción es independiente del [[consumo eléctrico|E]] estacional pero determina qué combinaciones son posibles.

**Ejemplo rápido de verificación**: Un emisor de [[P]] = 1,5 kW funcionando [[t]] = 6 h/día durante 30 días da [[consumo eléctrico|E]] = 1,5 × 6 × 30 = 270 kWh. Con [[rendimiento de conversión|eta]] = 0,97: [[calor útil|Q]] = 0,97 × 270 = 261,9 kWh. [[COP]] = 261,9 / 270 = 0,97. Coste: 270 × 0,22 = 59,4 EUR/mes.

## Preguntas reales del alumno

- **¿Si convierte casi el 100% de la electricidad en calor, por qué es cara?** Porque el [[COP]] = 1 significa que necesitas exactamente 1 kWh eléctrico por cada kWh térmico que quieres. Una bomba de calor con [[COP]] = 4 solo necesita 0,25 kWh eléctricos para el mismo calor, siendo 4 veces más barata en energía.
- **¿Qué pesa más, la [[P]] o el [[t]]?** Ambas son equivalentes matemáticamente, pero en uso doméstico el [[t]] es más fácil de controlar (horarios, termostato) y suele ser donde hay más margen de ahorro.
- **¿Puedo comparar resistiva y bomba de calor por potencia nominal?** No. Debes comparar el [[consumo eléctrico|E]] necesario para entregar el mismo [[calor útil|Q]] en las mismas condiciones.

## Conexiones transversales y rutas de estudio

- **Bomba de calor**: contraste directo con [[COP]] >> 1 para el mismo servicio térmico.
- **Eficiencia en climatización**: marco estacional para comparar ambas tecnologías.
- **Tensión y potencia en casa**: base para calcular [[P]] y límites de circuito.
- **Coste de la electricidad**: impacto económico del [[consumo eléctrico|E]] calculado.

## Síntesis final

La calefacción resistiva es el sistema más transparente para entender las relaciones entre [[potencia del emisor|P]], [[tiempo efectivo de uso|t]] y [[consumo eléctrico|E]]. Su [[COP]] = 1 no es un defecto, sino su característica más pedagógicamente valiosa: define con claridad el suelo energético a partir del cual cualquier otra tecnología de calefacción debe demostrar su ventaja. Entender bien la resistiva es el primer paso para evaluar con rigor la eficiencia de cualquier sistema alternativo.
`;export{e as default};
