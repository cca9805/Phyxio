## Contexto conceptual

## 🟢 Nivel esencial

Para entender la calefacción resistiva, es necesario separar con claridad tres conceptos que a menudo se confunden:

**La potencia [[potencia_del_emisor]]** es el ritmo al que el emisor consume electricidad. Un radiador de 1,5 kW consume 1,5 kilovatios en cada segundo de funcionamiento. Es una característica fija del equipo que no cambia con el uso. Si el termostato desconecta el equipo, la [[potencia_del_emisor]] deja de actuar sobre el circuito; si lo mantiene encendido continuamente, [[potencia_del_emisor]] es constante.

**El tiempo efectivo [[tiempo_efectivo_de_uso]]** es la variable que el usuario controla con más libertad. No se mide en horas de aparato encendido sino en horas con la resistencia realmente activa. Un radiador con termostato puede estar encendido 8 horas pero con la resistencia activa solo 5 de esas horas. Esas 5 horas son las que determinan el [[consumo_electrico]].

**El consumo [[consumo_electrico]]** es el resultado del sistema: cuánta energía eléctrica ha usado el emisor en el periodo analizado. Es exactamente lo que marca el contador y lo que aparece en la factura. La relación entre estas tres magnitudes es la ley más simple de la termodinámica aplicada: el [[consumo_electrico]] es el producto de la [[potencia_del_emisor]] por el [[tiempo_efectivo_de_uso]].

Esta relación tiene una implicación directa y poderosa: en resistiva, si quieres reducir el consumo a la mitad, puedes reducir la [[potencia_del_emisor]] a la mitad (comprar un emisor menos potente) o reducir el [[tiempo_efectivo_de_uso]] a la mitad (usarlo la mitad de tiempo). Ambas estrategias son físicamente equivalentes, pero tienen consecuencias prácticas muy distintas en términos de confort.

El [[rendimiento de conversión|eta]] de los sistemas resistivos es extraordinariamente alto, típicamente entre 0,95 y 1,0, lo que significa que prácticamente toda la electricidad consumida llega como calor al espacio. Esta es la característica que hace a la resistiva transparente y predecible.

## 🔵 Nivel formal

La fracción del [[consumo_electrico]] que efectivamente calienta el recinto es el [[calor_util]], que se obtiene aplicando el [[rendimiento de conversión|eta]] del emisor.

La relación matemática fundamental es la definición del [[consumo_electrico]] como producto de [[potencia_del_emisor]] por [[tiempo_efectivo_de_uso]]:

{{f:energia}}

Una vez conocido el consumo, el [[calor_util]] entregado al recinto se obtiene aplicando el [[rendimiento de conversión|eta]] del emisor:

{{f:calor_util}}

En la práctica, para emisores resistivos domésticos, el [[rendimiento de conversión|eta]] ≈ 0,98, lo que significa que el [[calor_util]] es prácticamente igual al [[consumo_electrico]].

El [[coeficiente_de_rendimiento]] del sistema se define como el cociente entre el [[calor_util]] y la energía eléctrica invertida [[consumo_electrico]]:

{{f:cop_resistiva}}

En la calefacción resistiva ideal, [[coeficiente_de_rendimiento]] = [[calor_util]]/[[consumo_electrico]] ≈ 1. Esta igualdad es la clave conceptual más importante del tema: no existe ganancia energética; cada kWh eléctrico produce como máximo 1 kWh térmico. Comparado con una bomba de calor que puede alcanzar [[coeficiente_de_rendimiento]] = 4, el sistema resistivo necesita consumir 4 veces más electricidad para el mismo resultado térmico.

El análisis formal del sistema tiene dos dimensiones complementarias. En primer lugar, la dimensión de potencia: la [[potencia_del_emisor]] determina la tasa de calentamiento del recinto. Si la [[potencia_del_emisor]] es insuficiente para compensar las pérdidas térmicas del edificio en un día frío, la temperatura de consigna nunca se alcanza independientemente del [[tiempo_efectivo_de_uso]]. En segundo lugar, la dimensión energética: el [[consumo_electrico]] acumulado durante una temporada es el integral del perfil de [[potencia_del_emisor]] activa por el [[tiempo_efectivo_de_uso]], y determina directamente la factura. La separación entre estas dos dimensiones —potencia para confort, energía para coste— es el núcleo de todo análisis formal de un sistema de calefacción resistiva.

## 🔴 Nivel estructural

A nivel estructural, el análisis de la calefacción resistiva debe considerar sus límites físicos y los mecanismos de fallo del modelo simple:

**Límite termodinámico fundamental:** El [[coeficiente_de_rendimiento]] de la resistiva no puede superar 1 por la conservación de la energía. Esto no es un defecto de diseño sino una consecuencia directa del primer principio de la termodinámica aplicado a la conversión directa sin ciclo termodinámico. Cualquier sistema que prometa [[coeficiente_de_rendimiento]] > 1 en resistiva pura viola las leyes de la física.

**Dependencia de la demanda térmica del edificio:** El consumo total de una temporada no depende solo del emisor sino de la envolvente del edificio. Si la vivienda tiene malas ventanas o falta de aislamiento, la demanda térmica que el emisor debe cubrir es mucho mayor, aumentando el [[tiempo_efectivo_de_uso]] y, por tanto, el [[consumo_electrico]]. Una mejora de envolvente que reduzca la demanda a la mitad reduce el consumo a la mitad sin cambiar el equipo.

**Simultaneidad eléctrica:** Varios emisores resistivos funcionando a la vez, junto con otros electrodomésticos de alta potencia (cocina eléctrica, lavadora, etc.), pueden superar la potencia contratada o los límites de los circuitos. La suma de [[potencia_del_emisor]] simultáneas es una restricción de seguridad que el modelo simple no contempla.

**Inercia del termostato:** El modelo estacionario asume que el equipo funciona en régimen estacionario. En la práctica, los ciclos de encendido-apagado del termostato introducen variaciones que el modelo estacionario simplifica al usar [[tiempo_efectivo_de_uso]] como "horas activas equivalentes".

## Interpretación física profunda

La cadena causal en la calefacción resistiva sigue una lógica lineal directa: si la demanda térmica aumenta (por más frío, peor aislamiento o más horas de ocupación), el termostato mantiene la resistencia activa durante más tiempo, aumentando el [[tiempo_efectivo_de_uso]] y, en consecuencia, el [[consumo_electrico]] y el coste. No hay ningún factor multiplicador de rendimiento que pueda romper esta cadena; el [[coeficiente_de_rendimiento]] es irremediablemente igual a 1.

Este análisis revela que las dos palancas principales para reducir el gasto son: (1) reducir la demanda térmica del edificio actuando sobre el aislamiento y la estanqueidad, y (2) reducir el [[tiempo_efectivo_de_uso]] ajustando los horarios, la zonificación y la temperatura de consigna.

## Orden de magnitud

En una habitación de 20 m² en clima templado, la demanda térmica diaria en invierno puede ser de 5–10 kWh. Con un emisor de 2 kW y [[coeficiente_de_rendimiento]] = 1, necesitarás entre 2,5 y 5 horas de funcionamiento efectivo para cubrirla. En toda una temporada de 120 días, esto puede representar 600–1200 kWh eléctricos, lo que a un precio de 0,22 EUR/kWh equivale a 132–264 EUR solo para esa habitación.

## Método de resolución personalizado

Para analizar un sistema de calefacción resistiva:
1. Identifica cada emisor con su [[potencia_del_emisor]] nominal y su [[tiempo_efectivo_de_uso]] efectivo diario estimado.
2. Calcula el [[consumo_electrico]] por equipo y total con la fórmula principal.
3. Aplica el [[rendimiento de conversión|eta]] para obtener el [[calor_util]] real.
4. Calcula el [[coeficiente_de_rendimiento]] y compáralo con alternativas tecnológicas.
5. Evalúa la simultaneidad sumando todas las [[potencia_del_emisor]] activas a la vez.
6. Propón mejoras: reducir [[tiempo_efectivo_de_uso]] (horarios, termostato), reducir demanda (aislamiento) o migrar a tecnología con [[coeficiente_de_rendimiento]] > 1.

## Casos especiales y ejemplo extendido

Aunque el modelo ideal cubre la mayoría de situaciones domésticas, existen variantes que requieren consideración adicional:

**Emisores con varios niveles de potencia**: Algunos emisores tienen dos o tres posiciones (baja, media, alta). En ese caso, la [[potencia_del_emisor]] efectiva es el promedio ponderado por el tiempo en cada posición, y el [[consumo_electrico]] total es la suma de los consumos parciales en cada nivel.

**Múltiples emisores en el mismo circuito**: Si varios emisores comparten circuito, la restricción operativa es la suma de sus [[potencia_del_emisor]] simultáneas, que no debe superar la capacidad del circuito (típicamente 2,2–4,6 kW para circuitos de 10–20 A a 230 V). Esta restricción es independiente del [[consumo_electrico]] estacional pero determina qué combinaciones son posibles.

**Ejemplo rápido de verificación**: Un emisor de [[potencia_del_emisor]] = 1,5 kW funcionando [[tiempo_efectivo_de_uso]] = 6 h/día durante 30 días da [[consumo_electrico]] = 1,5 × 6 × 30 = 270 kWh. Con [[rendimiento de conversión|eta]] = 0,97: [[calor_util]] = 0,97 × 270 = 261,9 kWh. [[coeficiente_de_rendimiento]] = 261,9 / 270 = 0,97. Coste: 270 × 0,22 = 59,4 EUR/mes.

## Preguntas reales del alumno

- **¿Si convierte casi el 100% de la electricidad en calor, por qué es cara?** Porque el [[coeficiente_de_rendimiento]] es igual a 1 significa que necesitas exactamente 1 kWh eléctrico por cada kWh térmico que quieres. Una bomba de calor con [[coeficiente_de_rendimiento]] es igual a 4 solo necesita 0,25 kWh eléctricos para el mismo calor, siendo 4 veces más barata en energía.
- **¿Qué pesa más, la [[potencia_del_emisor]] o el [[tiempo_efectivo_de_uso]]?** Ambas son equivalentes matemáticamente, pero en uso doméstico el [[tiempo_efectivo_de_uso]] es más fácil de controlar (horarios, termostato) y suele ser donde hay más margen de ahorro.
- **¿Puedo comparar resistiva y bomba de calor por potencia nominal?** No. Debes comparar el [[consumo_electrico]] necesario para entregar el mismo [[calor_util]] en las mismas condiciones.

## Conexiones transversales y rutas de estudio

- **Bomba de calor**: contraste directo con [[coeficiente_de_rendimiento]] >> 1 para el mismo servicio térmico.
- **Eficiencia en climatización**: marco estacional para comparar ambas tecnologías.
- **Tensión y potencia en casa**: base para calcular [[potencia_del_emisor]] y límites de circuito.
- **Coste de la electricidad**: impacto económico del [[consumo_electrico]] calculado.

## Síntesis final

La calefacción resistiva es el sistema más transparente para entender las relaciones entre [[potencia_del_emisor]], [[tiempo_efectivo_de_uso]] y [[consumo_electrico]]. Su [[coeficiente_de_rendimiento]] = 1 no es un defecto, sino su característica más pedagógicamente valiosa: define con claridad el suelo energético a partir del cual cualquier otra tecnología de calefacción debe demostrar su ventaja. Entender bien la resistiva es el primer paso para evaluar con rigor la eficiencia de cualquier sistema alternativo.