# Exam-type example

## Problem statement

In a calorimetry experiment, a piece of unknown metal of 120 g, previously heated to 95 °C in a boiling water bath, is placed inside a calorimeter containing 200 g of water at 22 °C. The equilibrium temperature of the mixture is 27.4 °C. Determine the specific heat capacity of the unknown metal, neglecting the heat absorbed by the calorimeter itself.

## Data

- Mass of the metal: 0.120 kg
- Initial temperature of the metal: 95 °C
- Mass of water: 0.200 kg
- Initial temperature of water: 22 °C
- Equilibrium temperature: 27.4 °C
- Specific heat capacity of water: 4186 J/(kg·K)

## System definition

The system is the metal + water assembly inside the ideal calorimeter. The quantity to determine is [[c]] of the unknown metal. The principle of energy conservation establishes that the heat [[Q]] released by the metal as it cools is equal in magnitude to the heat [[Q]] absorbed by the water as it warms, with opposite signs.

## Physical model

The complete process involves sensible heat: there is no phase change in either the metal or the water. The metal releases heat as it goes from 95 °C to 27.4 °C, and the water absorbs it as it rises from 22 °C to 27.4 °C. The specific heat capacity of the metal [[c]] is obtained from the energy equilibrium condition of the isolated system.

## Model justification

The sensible heat model with constant [[c]] is valid because the temperature ranges of the metal (27.4 °C to 95 °C, i.e. 67.6 K) and of the water (22 °C to 27.4 °C, i.e. 5.4 K) are moderate and include no phase transitions for either material. The heat absorbed by the calorimeter is neglected by hypothesis of the problem. The thermal isolation condition of the ideal calorimeter justifies that the sum of heats of the system is zero.

## Symbolic solution

Applying the energy conservation principle to the isolated system: the heat released by the metal plus the heat absorbed by the water equals zero. The heat of each material follows the sensible heat formula:

{{f:definicion_c}}

To compare the thermal inertia of each body, total heat capacity is also used:

{{f:capacidad_calorifica_total}}

The equilibrium condition is: [[m]] of metal · [[c]] of metal · [[DeltaT]] of metal + [[m]] of water · [[c]] of water · [[DeltaT]] of water equals zero. Solving for [[c]] of metal:

[[c]] of metal equals the ratio of the magnitude of heat absorbed by the water to the product of the mass of the metal and the magnitude of [[DeltaT]] of the metal.

## Numerical substitution

First, the temperature changes are computed:

[[DeltaT]] of metal: equilibrium temperature minus initial temperature of metal, that is 27.4 − 95, giving −67.6 K (the metal cools).

[[DeltaT]] of water: equilibrium temperature minus initial temperature of water, that is 27.4 − 22, giving 5.4 K (the water warms).

Heat absorbed by water: 0.200 × 4186 × 5.4. The product 0.200 × 4186 is 837.2; multiplied by 5.4 gives approximately 4521 J.

Heat released by metal: −4521 J (by energy conservation, equal in magnitude).

Specific heat capacity of metal: 4521 divided by (0.120 × 67.6). The product 0.120 × 67.6 is 8.112. The quotient 4521 / 8.112 gives approximately 557 J/(kg·K).

## Dimensional validation

The numerator has units of [mass] · [c_water] · [temperature], that is kg · J/(kg·K) · K, which simplifies to J. The denominator has units of [mass] · [temperature], that is kg · K. The ratio J / (kg · K) gives J/(kg·K), which is the correct unit of [[c]].

## Physical interpretation

The result of approximately 557 J/(kg·K) places the metal between iron (450 J/(kg·K)) and aluminium (900 J/(kg·K)). Comparing with the specific heat capacity table, the value is consistent with nickel (444 J/(kg·K)), iron (450 J/(kg·K)), or intermediate materials such as stainless steel (490–510 J/(kg·K)). Given that the experimental value may have an uncertainty of 5–10 % due to the neglected calorimeter losses, the material could be iron or steel.

The fact that [[c]] of the metal is much lower than that of water (557 vs. 4186 J/(kg·K)) explains why the equilibrium temperature is much closer to that of water than to that of the metal: although the metal started at 95 °C and the water at 22 °C, the final temperature of 27.4 °C is only 5.4 K from the water and 67.6 K from the metal. Water has greater total heat capacity ([[C_total]] of water = 0.200 × 4186 ≈ 837 J/K; [[C_total]] of metal = 0.120 × 557 ≈ 67 J/K): water's thermal inertia dominates the mixture.

---

# Real-world example

## Context

A materials engineer must select the most suitable material for the core of a low-cost thermal storage unit for a solar energy installation. The storage unit must store the maximum possible energy in a fixed volume of 0.5 m³, heating from 50 °C to 300 °C with surplus solar energy. Three materials are compared: liquid water (viable only up to 100 °C at atmospheric pressure), concrete ([[c]] ≈ 880 J/(kg·K), density ≈ 2200 kg/m³), and cast iron ([[c]] ≈ 450 J/(kg·K), density ≈ 7000 kg/m³).

## Physical estimation

For each material, the stored energy is computed as the product of [[C_total]] and the usable [[DeltaT]], where [[C_total]] is the total heat capacity of the given volume and [[DeltaT]] is the useful temperature range.

{{f:capacidad_calorifica_total}}

Concrete: mass = 2200 × 0.5 = 1100 kg. [[C_total]] = 1100 × 880 = 968 000 J/K. Useful [[DeltaT]] = 250 K (from 50 °C to 300 °C). Stored energy = 968 000 × 250 = 242 000 000 J, equivalent to 242 MJ.

Cast iron: mass = 7000 × 0.5 = 3500 kg. [[C_total]] = 3500 × 450 = 1 575 000 J/K. Useful [[DeltaT]] = 250 K. Stored energy = 1 575 000 × 250 = 393 750 000 J, equivalent to approximately 394 MJ.

The comparison shows that cast iron stores 63 % more energy than concrete in the same volume, despite having a lower [[c]] (450 vs. 880 J/(kg·K)), because its density is much higher (7000 vs. 2200 kg/m³). The determining quantity is not [[c]] alone but the product density · [[c]], which equals the volumetric heat capacity. For concrete this product is 2200 × 880 ≈ 1 936 000 J/(m³·K); for cast iron it is 7000 × 450 ≈ 3 150 000 J/(m³·K).

## Interpretation

This example illustrates that in engineering applications where volume is the constraint (not mass), the relevant property is the volumetric heat capacity (density × [[c]]), not [[c]] alone. Cast iron wins the comparison due to its high density despite its lower mass-specific heat capacity. If the constraint were the transported mass (for example, in a vehicle), the criterion would be the mass-specific heat capacity ([[C_total]] per kg) and the result could differ. Correct material selection depends on identifying which quantity is the operational constraint of the design.
