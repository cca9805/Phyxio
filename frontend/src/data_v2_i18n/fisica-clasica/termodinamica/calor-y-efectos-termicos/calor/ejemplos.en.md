# Exam-type example

## Problem statement

An aluminium block of 800 g is heated from 25 °C to 185 °C in a laboratory oven. Calculate the heat absorbed by the block. Then, once removed from the oven, the block is placed in contact with 500 g of water initially at 20 °C. Using the data above, estimate the final equilibrium temperature of the mixture, assuming no heat losses to the surroundings. The specific heat capacity of aluminium is 900 J/(kg·K) and that of water is 4186 J/(kg·K).

## Data

- Mass of the aluminium block: 0.800 kg
- Initial temperature of the aluminium: 25 °C
- Final temperature of the aluminium in the oven: 185 °C
- Specific heat capacity of aluminium: 900 J/(kg·K)
- Mass of water: 0.500 kg
- Initial temperature of water: 20 °C
- Specific heat capacity of water: 4186 J/(kg·K)

## System definition

The system for the first part is the aluminium block. The system for the second part is the aluminium-water mixture, treated as isolated from the surroundings (no losses). The quantity to calculate first is [[Q]] absorbed by the aluminium in the oven; then, the final equilibrium temperature of the mixture.

## Physical model

The energy transfer in both parts is governed by the sensible heat model. There are no phase changes because the temperatures involved (25 °C to 185 °C for the aluminium, and the expected equilibrium temperature between 20 °C and 185 °C for the mixture) do not cross any melting or boiling point of these materials at normal pressure.

The principle of energy conservation applied to the mixture states that the heat released by the aluminium as it cools is numerically equal to the heat absorbed by the water as it warms, with opposite signs.

The latent-heat magnitude [[L]] is therefore checked but not used in the calculation: it would only enter if the process included melting, boiling, condensation, or solidification. Its absence from the numerical balance is a modelling decision, not an omission.

## Model justification

The sensible heat model with constant [[c_esp]] is valid here because the temperature range of the aluminium (25 °C to 185 °C) falls within limits where the variation of its specific heat is below 2 %. For water, the range is also small and [[c_esp]] can be treated as constant without significant error. There is no phase change at any point in the process, confirming that the latent heat formula is not needed. If the equilibrium temperature turned out to exceed 100 °C, the model would need revision because the water would vaporize, but the calculation will show this does not occur.

## Symbolic solution

**Part 1: heat absorbed by the aluminium in the oven**

Applying the sensible heat formula:

{{f:calor_sensible}}

[[Q]] is obtained directly as the product of [[m]], [[c_esp]], and [[DeltaT]], where [[DeltaT]] is the difference between the final (185 °C) and initial (25 °C) temperatures of the aluminium.

**Part 2: equilibrium temperature of the mixture**

Applying again the sensible heat formula for each element of the mixture and the energy conservation principle, the heat released by the aluminium as it drops from 185 °C to the equilibrium temperature plus the heat absorbed by the water as it rises from 20 °C to the same temperature equals zero. Solving for the equilibrium temperature:

{{f:calor_sensible}}

The equilibrium equation is: [[m]] of aluminium × [[c_esp]] of aluminium × (T_eq − 185) plus [[m]] of water × [[c_esp]] of water × (T_eq − 20) equals zero. Solving for T_eq yields the equilibrium temperature.

## Numerical substitution

**Part 1:**

Multiplying 0.800 kg by 900 J/(kg·K) and by the temperature difference (185 − 25), which is 160 K: 0.800 × 900 × 160. The product 0.800 × 900 is 720 J/K; multiplied by 160 K gives 115 200 J. Therefore [[Q]] for the aluminium in the oven is approximately 115 200 J, equivalent to 115.2 kJ.

**Part 2:**

Numerator of T_eq: [(0.800 × 900 × 185) + (0.500 × 4186 × 20)].

First term: 0.800 × 900 × 185. The product 0.800 × 900 is 720; multiplied by 185 gives 133 200.

Second term: 0.500 × 4186 × 20. The product 0.500 × 4186 is 2093; multiplied by 20 gives 41 860.

Total numerator: 133 200 plus 41 860 equals 175 060.

Denominator: (0.800 × 900) + (0.500 × 4186). First term: 720. Second term: 2093. Sum: 2813.

T_eq: 175 060 divided by 2813 results in approximately 62.2 °C.

Therefore [[DeltaT]] for the aluminium in the mixture is 62.2 − 185, giving approximately −122.8 K (the aluminium cools), and [[DeltaT]] for the water is 62.2 − 20, giving approximately 42.2 K (the water warms).

## Dimensional validation

For sensible heat, the units of the product kg · J/(kg·K) · K resolve as follows: the kg factors cancel, the K factors cancel, and J remains. The dimension of [[Q]] is energy: `[M L² T⁻²]`, corresponding to the joule.

For the equilibrium temperature, the numerator has units of [mass × specific heat × temperature], which are J, and the denominator has units of [mass × specific heat], which are J/K. The ratio J divided by J/K gives K, which is the unit of temperature.

## Physical interpretation

The result from part one, approximately 115.2 kJ, represents the energy transferred by the oven to the aluminium block during the heating process. This value is positive because the system (the aluminium) has absorbed energy: positive [[Q]] and positive [[DeltaT]] are consistent. To put this result in perspective, 115.2 kJ is roughly the energy consumed by a 100 W light bulb in about 19 minutes.

The equilibrium temperature of about 62.2 °C reveals something physically significant: although the aluminium (0.8 kg) started at a much higher temperature than the water (0.5 kg), the final temperature is closer to that of the water than to that of the aluminium. This is because the total heat capacity of the water is 0.500 × 4186 ≈ 2093 J/K, compared to 0.800 × 900 ≈ 720 J/K for the aluminium. The total heat capacity of the water is almost three times that of the aluminium, so the water "absorbs" most of the aluminium's energy with a relatively modest temperature rise.

If the mass of water were doubled to 1 kg, the equilibrium temperature would shift considerably towards the water's initial value, because water's heat capacity would dominate even more over that of the aluminium. This behavior illustrates water's role as a thermal buffer: its high heat capacity damps temperature changes even when receiving large amounts of [[Q]].

---

# Real-world example

## Context

A floor heating system uses hot water circulating through pipes embedded in a concrete floor. Water enters at 45 °C and exits at 35 °C. The volumetric flow rate is 180 litres per hour. Estimate the total heat released by the water to the floor during one hour of operation and analyze what determines the thermal efficiency of the system.

## Physical estimation

The mass of water circulating in one hour is 180 litres × 1 kg/litre, giving 180 kg. The temperature drop of the water as it passes through the circuit is 35 − 45, yielding [[DeltaT]] of −10 K (the water cools). The heat released by the water to the floor, applying the sensible heat model, is the product of 180 kg, 4186 J/(kg·K), and 10 K in absolute value: 180 × 4186 × 10 gives approximately 7 534 800 J, equivalent to about 7.5 MJ. Expressed as power, this corresponds to 7 534 800 J divided by 3600 seconds, giving approximately 2.1 kW of mean thermal power released to the floor.

The efficiency of the system depends fundamentally on two factors: the temperature difference between the circulating water and the room air (which determines the conductive transfer gradient through the concrete), and the capacity of [[c_esp]] to transport energy per unit mass and temperature change. Water is especially well-suited as a heat-transfer fluid precisely because of its high [[c_esp]]: at the same mass flow rate, water carries approximately four times more energy than mineral oil for the same [[DeltaT]].

## Interpretation

The result of 7.5 MJ per hour corresponds to a power of about 2.1 kW, typical for heating a medium-sized room in moderate winter conditions. The sensible heat model allows this power to be predicted directly from accessible data: flow rate, inlet and outlet temperatures, and the specific heat capacity of water.

If the desired output power were to be increased without changing the water temperature, there would be two options: increase the flow rate (increase [[m]] per unit time) or increase the temperature difference between inlet and outlet (increase [[DeltaT]] in absolute value). The first option requires greater pump power; the second requires hotter water or a longer circuit. The dominant variable is the total [[Q]] released per hour, which scales linearly with both.
