# Exam-type example


## Problem statement

A flat plate separates the hot interior of a chamber from a cold exterior. The inner face is maintained at eighty degrees Celsius and the outer face at twenty degrees Celsius. The plate has two square meters of useful surface, a [[espesor]] of four centimeters, and a [[conductividad_termica]] typical of a rigid insulating material. The goal is to estimate [[diferencia_temperatura]], [[gradiente_temperatura]], [[potencia_termica]], [[flujo_calor]], [[resistencia_termica]], and [[calor_transferido]] during half an hour of stable operation.

## Data

- [[temperatura_caliente]]: eighty degrees Celsius
- [[temperatura_fria]]: twenty degrees Celsius
- [[area]]: two square meters
- [[espesor]]: four centimeters
- [[conductividad_termica]]: zero point zero four W/(m·K)
- [[tiempo]]: half an hour
- Quantities to calculate: [[diferencia_temperatura]], [[gradiente_temperatura]], [[potencia_termica]], [[flujo_calor]], [[resistencia_termica]], [[calor_transferido]]

## System definition

The physical system is a homogeneous plate crossed by heat from the face associated with [[temperatura_caliente]] toward the face associated with [[temperatura_fria]]. The effective passing surface is represented by [[area]], and the main thermal path by [[espesor]]. The plate is assumed to have no holes, metallic bridges, or dominant edge effects, so lateral exchange is small compared with normal transfer across the faces. The process duration is represented by [[tiempo]], which will convert a thermal rate into accumulated [[calor_transferido]].

## Physical model

The physical model is one-dimensional steady conduction. The [[diferencia_temperatura]] is obtained by comparing [[temperatura_caliente]] and [[temperatura_fria]]. The [[gradiente_temperatura]] distributes that difference along [[espesor]]. With [[conductividad_termica]] and [[area]], the total [[potencia_termica]] is calculated. The [[flujo_calor]] compares surface intensity, and [[resistencia_termica]] summarizes the plate opposition to energy passage. The model is organized by:

{{f:diferencia_temperatura}}

{{f:gradiente_temperatura_1d}}

{{f:ley_fourier_conduccion_1d}}

{{f:flujo_calor_conduccion}}

{{f:flujo_potencia_area}}

{{f:calor_potencia_tiempo}}

{{f:resistencia_termica_conduccion}}

{{f:potencia_resistencia_termica}}

## Model justification

This model is suitable because the geometry is close to a flat plate with parallel faces. The [[area]] is much larger than the visible [[espesor]], so normal transfer dominates edge losses. The [[conductividad_termica]] is treated as constant because the thermal range is moderate for a school-level estimate. Maintained [[temperatura_caliente]] and [[temperatura_fria]] allow a stable [[potencia_termica]] to be used. If the temperatures changed rapidly during [[tiempo]], a transient model would be required, but here the purpose is a steady-state reading.

## Symbolic solution

The temperature difference is obtained directly from the boundary conditions:

{{f:diferencia_temperatura}}

The thermal gradient distributes this difference along the [[espesor]]:

{{f:gradiente_temperatura_1d}}

Applying Fourier's law gives the thermal power crossing the plate:

{{f:ley_fourier_conduccion_1d}}

The heat flux per unit [[area]] is:

{{f:flujo_calor_conduccion}}

Alternatively, the thermal resistance formulation gives:

{{f:resistencia_termica_conduccion}}

And the power can also be expressed as:

{{f:potencia_resistencia_termica}}

Finally, the accumulated heat transfer over [[tiempo]] is:

{{f:calor_potencia_tiempo}}

{{f:diferencia_temperatura}}

## Numerical substitution

The [[diferencia_temperatura]] between eighty degrees Celsius and twenty degrees Celsius is sixty kelvin. The [[espesor]] of four centimeters is converted to zero point zero four meters. The [[gradiente_temperatura]] is sixty kelvin spread through zero point zero four meters, giving a size of one thousand five hundred kelvin per meter. With [[conductividad_termica]] of zero point zero four W/(m·K), [[area]] of two square meters, and that thermal gap, [[potencia_termica]] is one hundred twenty watts. The [[flujo_calor]] is sixty watts per square meter. The [[resistencia_termica]] is zero point five K/W. During [[tiempo]] of one thousand eight hundred seconds, [[calor_transferido]] is two hundred sixteen thousand joules.

## Dimensional validation

For [[potencia_termica]], combining [[conductividad_termica]], [[area]], [[diferencia_temperatura]], and [[espesor]] gives watts. Dimensionally, W/(m·K) multiplied by m² and K, then divided by m, ends in W. A watt is J/s and has dimension `[M L² T⁻³]`.

For [[flujo_calor]], W divided by m² ends in W/m², with dimension `[M T⁻³]`.
For [[calor_transferido]], W multiplied by s gives J, with dimension `[M L² T⁻²]`.
For [[resistencia_termica]], m divided by W/(m·K) and m² gives K/W.

## Physical interpretation

The calculated scenario reveals how thermal conduction operates in a practical insulating layer. The sixty-kelvin temperature difference between the hot and cold faces creates the driving force for heat transfer. This difference is substantial enough to produce measurable thermal power but moderate enough that material properties remain approximately constant.

The resulting thermal power of one hundred twenty watts represents a moderate heat flow typical of building envelope situations. When distributed over the two-square-meter [[area]], this yields a heat flux of sixty watts per square meter—an intensity that would feel perceptible but not extreme. The thermal resistance of half a kelvin per watt indicates that this particular layer offers reasonable insulation; doubling the [[espesor]] would double this resistance and halve the heat flow for the same temperature difference.

The thermal gradient of fifteen hundred kelvin per meter describes how abruptly temperature changes within the material. This steep internal slope reflects the combination of significant temperature difference and small [[espesor]]. In practical terms, this means the material experiences intense internal thermal stress, which matters for long-term durability in real construction applications.

Over the half-hour duration, the accumulated heat transfer of two hundred sixteen thousand joules represents significant energy migration. This quantity helps assess heating or cooling loads in building design. The example illustrates how conduction responds to the interplay of material choice, geometry, and thermal conditions—demonstrating why proper insulation requires balancing these factors rather than focusing on single properties.The result says that the plate lets one hundred twenty watts of [[potencia_termica]] cross under the stated conditions. This is not total energy, but a rate: each second, a noticeable amount of energy crosses from the [[temperatura_caliente]] side to the [[temperatura_fria]] side. The [[flujo_calor]] of sixty watts per square meter helps compare this plate with other surfaces without letting [[area]] hide the intensity.

During half an hour, the accumulated [[calor_transferido]] is significant. The [[resistencia_termica]] of zero point five K/W shows that the plate resists the passage but does not block it. Increasing [[espesor]] or lowering [[conductividad_termica]] would reduce transfer. Increasing [[diferencia_temperatura]] would intensify it.

# Real-world example


## Context

In a home, a single window can behave as a weak point in insulation. Even if the wall has good [[resistencia_termica]], a glass region with smaller effective [[espesor]] and higher equivalent [[conductividad_termica]] may concentrate losses. During a cold night, indoor [[temperatura_caliente]] may stay near twenty degrees Celsius while outdoor [[temperatura_fria]] falls to zero degrees Celsius. The glazed [[area]] may be one square meter and the exposure [[tiempo]] may last several hours. This scenario explains why windows strongly affect the [[potencia_termica]] required for heating.

## Physical estimation

Take an idealized window with [[area]] of one square meter, [[espesor]] of four millimeters, and [[conductividad_termica]] near one W/(m·K). The [[diferencia_temperatura]] is twenty kelvin and the approximate [[gradiente_temperatura]] is five thousand kelvin per meter. The estimated [[potencia_termica]] is about five thousand watts if pure glass alone were used without surface resistances, which is too high for a complete real window. The [[flujo_calor]] would also be very large. In practice, air layers, coatings, and surface effects raise effective [[resistencia_termica]] and reduce [[calor_transferido]] during the night [[tiempo]].

## Interpretation

The estimate shows why the ideal model is useful and dangerous at once. It detects that small [[espesor]] and relatively high [[conductividad_termica]] favor losses, but it also warns that a real window needs an extended model. The important physical reading is not only the number, but which variable should be changed to reduce thermal passage.

## Symbolic resolution

First the thermal separation is determined with:

{{f:diferencia_temperatura}}

Then the spatial temperature change is calculated with:

{{f:gradiente_temperatura_1d}}

The total conductive transfer rate is obtained through:

{{f:ley_fourier_conduccion_1d}}

The surface intensity can be read directly as:

{{f:flujo_calor_conduccion}}

Or from total power:

{{f:flujo_potencia_area}}

The accumulated energy during the interval is calculated by:

{{f:calor_potencia_tiempo}}

The plate thermal opposition is estimated with:

{{f:resistencia_termica_conduccion}}

And the power is checked again through:

{{f:potencia_resistencia_termica}}