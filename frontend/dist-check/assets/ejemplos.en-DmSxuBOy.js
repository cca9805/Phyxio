const e=`\uFEFF# Exam-type example

## Problem statement

A metal calorimeter has known heat capacity [[C]] = 120 J/K. It contains 250 g of water. An electrical resistor delivers 40 W for 90 s and the temperature of the assembly rises from 20 C to 23.1 C. Estimate the total heat capacity of the system and check whether the calorimeter contribution matters.

## Data

- Calorimeter heat capacity: [[C]] = 120 J/K.
- Water mass: 0.250 kg.
- Specific heat of water: 4186 J/(kg K).
- Electrical power: 40 W.
- Heating time: 90 s.
- Measured change: [[DeltaT]] = 3.1 K.

## System definition

The system is water plus calorimeter. The resistor delivers energy to the assembly, and losses to the outside are assumed small during the interval. The quantity controlling the temperature change is not only the water contribution, but the total heat capacity of the whole assembly.

## Physical model

The model is sensible heating. There is no phase change, and the temperature range is small, so [[C]] can be treated as constant. Electrical energy becomes exchanged heat [[Q]] and is shared by water and container.

## Model justification

The temperature rise is moderate and water remains liquid. The resistor is inside the system, so its electrical work is interpreted as heat received by the assembly. Since the calorimeter [[C]] is comparable with a visible fraction of the water contribution, it must not be omitted.

The system choice also prevents an experimental ambiguity: if only the water were considered, part of the supplied energy would look lost, although it actually warms the container. The 3.1 K interval is small, so no temperature dependence of [[C]] is needed. The heating time is also short compared with the cooling time of the apparatus, so losses to air are treated as a secondary correction rather than the dominant mechanism.

The model is anchored to this leaf because the question is not the specific heat of water, but the effective heat capacity of the complete system. The observed quantity is [[DeltaT]], the energy input is [[Q]], and the response being tested is [[C]]. If the computed response reproduces the measured rise, the constant heat-capacity model is validated for this interval.

## Symbolic solution

The operational definition of the leaf is:

{{f:definicion_capacidad_calorifica}}

To relate the water capacity to mass and material, use:

{{f:capacidad_calorifica_desde_especifico}}

The total system capacity is obtained by adding the water contribution and the calorimeter contribution. Then the supplied heat is compared with total capacity times temperature change. If both values are close, the model is coherent.

## Numerical substitution

The delivered electrical energy is 3600 J. The heat capacity of the water is 0.250 times 4186, or 1046.5 J/K. Adding the calorimeter, the total heat capacity of the system is 1166.5 J/K.

With a rise of 3.1 K, the heat predicted by the model is 1166.5 times 3.1, approximately 3616 J. The difference from the 3600 J supplied is less than one percent, compatible with rounding and small losses.

## Dimensional validation

[[C]] is in J/K and [[DeltaT]] in K, so [[Q]] is in J. The result is also physically reasonable: the calorimeter represents a little more than ten percent of the water heat capacity, so ignoring it would produce a visible error in the computed temperature.

## Physical interpretation

Water dominates the thermal response, but the container is not irrelevant. The total capacity is larger than that of water alone, so the same heat produces a smaller temperature change. This is exactly the reading of [[C]]: larger heat capacity means stronger thermal buffering.

If the calorimeter were ignored, the capacity used would be 1046.5 J/K and the same energy would predict a rise of about 3.44 K. The observed rise is 3.1 K, smaller because the container also absorbs energy. That difference is not random noise: it is the quantitative trace of an additional heat capacity.

---

# Real-world example

## Context

A food reactor contains 30 kg of liquid product inside a metal jacket whose effective heat capacity is 18000 J/K. The product must be heated from 20 C to 65 C in half an hour. Estimate the minimum power of the heating system before losses are included.

## Physical estimation

The heat capacity of the contents is estimated from mass and a specific heat close to that of water, 3900 J/(kg K). This gives a content capacity of 117000 J/K. Adding the metal jacket, the effective total heat capacity becomes 135000 J/K.

The required temperature change is [[DeltaT]] = 45 K. The needed sensible energy is estimated by multiplying total heat capacity by that temperature change: about 6.08 MJ. Spread over 1800 s, the minimum average power is about 3.4 kW.

This estimate is a first design reading: it does not try to describe internal profiles, mixing, or losses. It fixes the minimum scale. If the installed heater delivered only 1 kW, even without losses the process would take roughly three times longer. If it delivered 6 kW, there would be margin for imperfect transfer, cold pipes, and valve opening.

## Interpretation

The quantitative reading shows that the reactor wall adds about fifteen percent to the energy that would be required if only the product were heated. A real design adds margin for losses and imperfect transfer, but the first scale check is given by [[C]]: the larger the total heat capacity, the slower or more powerful the heating stage must be.

The result also shows why two batches with the same target temperature may require different powers. Changing product mass, jacket material, or liquid amount changes [[C]] and therefore changes the heat required for the same [[DeltaT]]. In industrial operation, that reading prevents confusing a temperature setpoint with an energy requirement.
`;export{e as default};
