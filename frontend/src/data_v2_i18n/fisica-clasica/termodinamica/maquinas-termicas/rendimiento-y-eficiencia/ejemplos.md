# Ejemplo tipo examen

## Enunciado

Una central termoeléctrica de vapor opera entre un foco caliente a 540 °C y un foco frío (condensador) a 40 °C. En condiciones nominales, la caldera suministra 850 kJ de calor al fluido de trabajo en cada ciclo. Las mediciones en el banco de pruebas indican que el generador eléctrico extrae 290 kJ de trabajo útil neto por ciclo.

Calcular: (a) el calor cedido al condensador por ciclo; (b) el rendimiento real de la central; (c) el rendimiento de Carnot para esas temperaturas de foco; (d) la eficiencia relativa de la central (cociente del rendimiento real al límite de Carnot).

## Datos

- Temperatura del foco caliente: 813.15 K (equivalente a 540 °C)
- Temperatura del foco frío: 313.15 K (equivalente a 40 °C)
- Calor absorbido por ciclo: 850 kJ
- Trabajo útil neto por ciclo: 290 kJ

## Definición del sistema

El sistema termodinámico es el ciclo completo de la central: fluido de trabajo (vapor de agua) que absorbe calor en la caldera, expande en la turbina, se enfría en el condensador y regresa a la caldera mediante la bomba. El ciclo es cerrado y estacionario: el fluido regresa exactamente a su estado inicial al final de cada ciclo completo.

Las dos magnitudes nucleares de entrada son [[Q_H]] y [[W_util]]. La magnitud derivada [[Q_C]] se obtiene del balance de primera ley; el rendimiento [[eta]] se calcula como cociente; el límite [[eta_Carnot]] requiere las temperaturas absolutas.

## Modelo físico

Se aplica el modelo de ciclo motor ideal de dos focos para calcular el rendimiento y el balance energético. Las hipótesis son: focos con temperaturas constantes durante cada ciclo, ciclo estacionario periódico y [[W_util]] igual a la diferencia entre los dos calores intercambiados. Para comparar con el límite de Carnot se usa la fórmula de rendimiento ideal con temperaturas absolutas.

El modelo es válido aquí porque los datos de [[Q_H]] y [[W_util]] se dan como valores medidos por ciclo completo, lo que corresponde exactamente al marco del modelo. Las irreversibilidades reales ya están incorporadas en el valor medido de [[W_util]] (290 kJ), que es menor que el límite de Carnot (604 kJ).

## Justificación del modelo

El modelo de ciclo de dos focos vale porque la caldera opera a temperatura prácticamente constante (supercalentador a 540 °C) y el condensador también a temperatura esencialmente fija (agua de refrigeración a 40 °C). La variación real de temperatura del vapor durante la expansión es interna al ciclo y está ya contabilizada en el trabajo medido.

El modelo dejaría de ser válido si la temperatura de la caldera variara más del 15% durante la absorción de calor o si el condensador operara con temperatura variable (por ejemplo, en invierno frente a verano con la misma instalación); en ese caso se necesitaría integrar la temperatura a lo largo del intercambiador.

## Resolución simbólica

Aplicando la conservación de energía al ciclo completo:

{{f:balance_termico}}

El calor cedido al condensador se obtiene despejando [[Q_C]].

El rendimiento real del ciclo se define como:

{{f:rendimiento_termico}}

La forma equivalente del rendimiento expresada con los dos calores confirma el mismo resultado:

{{f:rendimiento_calores}}

El límite de Carnot para los focos dados se calcula con la fórmula del rendimiento de calores aplicada al ciclo ideal con temperaturas absolutas.

## Sustitución numérica

**Calor cedido al condensador:**

Del balance energético, restando el trabajo útil al calor absorbido: 850 kJ menos 290 kJ da 560 kJ. Por tanto [[Q_C]] ≈ 560 kJ por ciclo.

**Rendimiento real:**

Dividiendo el trabajo útil entre el calor absorbido: 290 kJ entre 850 kJ da aproximadamente 0.341. Por tanto [[eta]] ≈ 0.341, es decir, un 34.1%.

**Verificación por la fórmula equivalente:**

Calculando el cociente del calor cedido al absorbido: 560 kJ entre 850 kJ da aproximadamente 0.659. El complemento a uno es 0.341. Resultado consistente con el calculado directamente.

**Límite de Carnot:**

Con temperaturas absolutas 813.15 K y 313.15 K, el cociente de temperaturas es 313.15 entre 813.15 aproximadamente 0.385. El límite de Carnot es 1 menos 0.385, aproximadamente 0.615. Por tanto [[eta_Carnot]] ≈ 0.615.

**Eficiencia relativa:**

El cociente del rendimiento real al límite de Carnot es 0.341 entre 0.615, aproximadamente 0.555. La central opera al 55.5% de su potencial termodinámico máximo.

## Validación dimensional

Verificación de [[eta]]: el cociente kJ/kJ es adimensional `[M L² T⁻²] / [M L² T⁻²]` da `[1]` ✓

Verificación del balance: la unidad de [[Q_C]] es kJ, igual que las de [[Q_H]] y [[W_util]]; las dimensiones `[M L² T⁻²]` se conservan en ambos lados del balance ✓

Verificación de [[eta_Carnot]]: cociente K/K adimensional `[Θ]/[Θ]` da `[1]` ✓

Los tres resultados son adimensionales o tienen las mismas unidades en ambos lados, lo que confirma la coherencia dimensional.

## Interpretación física

La central opera con un rendimiento real del 34.1%, mientras que el límite teórico para esos focos es del 61.5%. La diferencia de 27.4 puntos porcentuales representa trabajo que podría haberse producido en un ciclo perfecto pero que en la práctica se destruye por las irreversibilidades del sistema: gradientes de temperatura en caldera y condensador, rozamiento en turbina y bomba, mezcla irreversible en válvulas y tuberías.

La eficiencia relativa del 55.5% indica que la central aprovecha poco más de la mitad del potencial termodinámico disponible. Este valor es típico de las centrales de vapor convencionales de generación anterior: las centrales modernas de ciclo supercrítico pueden elevar la eficiencia relativa hasta el 65–70% elevando la temperatura del foco caliente a 600–620 °C.

El calor cedido al condensador representa el 65.9% de la energía de la caldera, es decir, 560 kJ de cada 850 kJ absorbidos. En términos anuales, esto equivale a enormes volúmenes de calor residual que se vierten al río o a las torres de refrigeración. Reducir [[Q_C]] un 5% equivaldría a aumentar la producción eléctrica en aproximadamente 42.5 kJ por ciclo sin quemar más combustible, lo que demuestra el enorme valor económico y ambiental de mejorar el rendimiento aunque sea en pocos puntos porcentuales.

Si la temperatura del condensador bajara de 40 °C a 25 °C (por ejemplo, en invierno con agua de río más fría), [[eta_Carnot]] subiría a aproximadamente 0.634 y el rendimiento real podría mejorar entre 1 y 2 puntos porcentuales dependiendo del estado del ciclo, lo que ilustra que la temperatura del foco frío es una palanca real de mejora, no solo teórica.

# Ejemplo de aplicación real

## Contexto

Un fabricante de motores diésel para maquinaria de construcción declara que su motor consume 12 litros de gasóleo por hora en régimen de plena carga. El poder calorífico inferior del gasóleo es 35 MJ por litro. El motor entrega una potencia mecánica de 75 kW medida en el banco de pruebas. Se pide estimar el rendimiento térmico del motor y valorar cuánta energía se disipa como calor residual por hora.

## Estimación física

El calor suministrado al motor por hora se obtiene multiplicando el consumo de combustible por su poder calorífico: 12 litros por hora multiplicados por 35 MJ por litro da 420 MJ por hora. Ese valor representa [[Q_H]] integrado durante una hora completa.

El trabajo útil producido en ese mismo intervalo se obtiene multiplicando la potencia por el tiempo: 75 kW multiplicados por 3600 segundos da 270 MJ por hora. Ese valor es [[W_util]] integrado durante una hora.

Dividiendo el trabajo útil entre el calor absorbido: 270 MJ entre 420 MJ da aproximadamente 0.643. Por tanto [[eta]] ≈ 0.643. Sin embargo, este resultado supera el rendimiento típico de los motores diésel reales (que ronda 0.40–0.46), lo que sugiere revisar los datos o considerar que la cifra de 75 kW incluye recuperación de calor.

Para una estimación más realista, si el rendimiento declarado es 0.42, el trabajo útil producido sería 420 × 0.42 aproximadamente 176 MJ por hora, y el calor residual [[Q_C]] sería 420 menos 176, es decir, 244 MJ por hora, equivalente a unos 67.8 kW de potencia calorífica disipada continuamente al sistema de refrigeración y a los gases de escape.

## Interpretación

Un rendimiento real del 42% para un motor diésel de alta cilindrada es un valor sólido. Los motores diésel modernos son los motores de combustión interna con mayor [[eta]] disponible comercialmente. Su ventaja frente a los motores de gasolina equivalentes proviene de la mayor relación de compresión (hasta 22:1 frente a 10:1), lo que eleva la temperatura de combustión y sube [[eta_Carnot]] para los mismos focos efectivos.

El calor residual de 244 MJ por hora equivale a calentar aproximadamente 580 litros de agua de 20 °C a 120 °C en ese intervalo. En maquinaria de construcción, ese calor se disipa al aire mediante el radiador y los gases de escape, pero en instalaciones fijas (grupos electrógenos, cogeneración agrícola) puede aprovecharse para secado de granos o calefacción, elevando el rendimiento global del sistema hasta el 80%.

La proporción entre [[Q_C]] y [[Q_H]] en este motor (aproximadamente 0.58) confirma que más de la mitad de la energía química del combustible se convierte en calor residual. Esta es la realidad termodinámica de los motores de combustión interna: la segunda ley impone que una fracción sustancial del calor nunca puede transformarse en trabajo, y el diseño del motor solo puede determinar cuán grande o pequeña es esa fracción.
