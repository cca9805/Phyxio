const e=`# Exam-type example

## Problem statement
A single-family home located in a climate zone with moderate winters has an estimated average daily [[thermal demand|q_demanda]] of 180 [[megajoules|MJ]]. To meet this demand, the owner has installed an aerothermal heat pump that, according to design conditions, operates with an [[average seasonal coefficient of performance|cop]] of 3.5. If the current [[electricity price|precio_kwh]] is 0.22 euros for each billed [[kilowatt-hour|kWh]], you are requested to determine:
1. The total electrical energy in [[megajoules|MJ]] that the compressor must consume in a day.
2. The percentage energy [[saving|ahorro]] of the system compared to a traditional heating system by electric resistance (conventional stove).
3. The daily economic [[cost|coste]] of maintaining the home at comfort temperature.
4. The amount of [[ambient heat|q_ambiente]] that the system has been able to "extract" for free from the outdoor air.

## Data
- Daily [[thermal demand|q_demanda]]: 180 [[megajoules|MJ]].
- [[Coefficient of performance|cop]]: 3.5.
- [[Electric energy price|precio_kwh]]: 0.22 euros per [[kilowatt-hour|kWh]].
- Unit conversion factor: 1 [[kilowatt-hour|kWh]] is equivalent to 3.6 [[megajoules|MJ]].

## System definition
The system under study is the control volume that encompasses the home and the outdoor unit of the heat pump. It is considered an open system from a thermal point of view (it exchanges heat with the outside and the home) and a closed system from the point of view of the mass of the refrigerant fluid circulating through the internal circuit. The system boundaries are the walls of the building and the exchange surface of the outdoor evaporator.

## Physical model
The energy balance model in steady state for an inverse compression cycle is applied. The system satisfies the demand by delivering [[delivered heat|q_calor]], consuming [[electric work|w_elec]] that directly depends on the operational efficiency of the cycle. The fundamental relationship governing this energy transport is the definition of the pumping cycle performance:

{{f:cop_definicion}}

It is assumed that the system is capable of extracting thermal energy from the cold source (outdoor air) through the refrigerant evaporation process, fulfilling the first law of thermodynamics:

{{f:balance_primera_ley}}

Where [[ambient heat|q_ambiente]] represents the captured renewable energy.

## Model justification
The use of the steady-state balance model is justified because the statement provides average daily values of demand and performance. It is considered that, although temperatures fluctuate during the day, the integrated behavior of the system is correctly described by temporal averages for an economic and energy billing estimate. The model would stop being valid if the outdoor temperature fell below the critical freezing point of the refrigerant or if prolonged stops occurred that invalidated the steady flow state.

## Symbolic solution
To obtain the electrical energy consumed ([[total electric consumption|e_elec]]), which in this balance coincides with the total [[electric work|w_elec]] necessary to move the thermal load, we solve from the definition of [[COP|cop]]:

{{f:consumo_equivalente}}

The relative [[saving|ahorro]] is obtained by comparing the heat pump consumption with that of a reference resistive system (where the [[COP|cop]] has a unitary value), giving us the avoided energy fraction:

{{f:ahorro_relativo}}

Finally, the daily economic [[cost|coste]] is calculated by multiplying the accumulated electrical consumption by the current unit rate:

{{f:facturacion_total}}

The [[ambient heat|q_ambiente]] extracted from the outdoor air results from the net difference between the [[delivered heat|q_calor]] and the [[electric work|w_elec]] invested, following the first law of thermodynamics balance.

## Numerical substitution
1. **Daily electrical energy ([[electric work|w_elec]])**:
To satisfy a [[delivered heat|q_calor]] delivery of 180 [[megajoules|MJ]] with a [[COP|cop]] of 3.5:
Electrical energy: 180 [[megajoules|MJ]] divided by 3.5, which results in 51.43 [[megajoules|MJ]].
This is the value of the daily [[electric work|w_elec]] expressed in [[megajoules|MJ]].

2. **Percentage [[saving|ahorro]]**:
Value of the [[saving|ahorro]]: one minus the inverse of 3.5, which results in 0.714.
Expressed as a percentage, the system allows a **71.4 percent [[saving|ahorro]]** of [[total electric consumption|e_elec]] compared to a conventional stove.

3. **Daily consumption and [[cost|coste]]**:
We first convert energy from [[megajoules|MJ]] to commercial [[kilowatt-hour|kWh]]:
Consumption: 51.43 [[megajoules|MJ]] divided by 3.6, which results in 14.29 [[kilowatt-hour|kWh]].
We multiply by the [[electricity price|precio_kwh]] of 0.22 euros per [[kilowatt-hour|kWh]]:
[[daily expenditure|coste]]: 14.29 [[kilowatt-hour|kWh]] multiplied by 0.22 euros per [[kilowatt-hour|kWh]], which results in 3.14 euros.

4. **Extracted ambient heat ([[ambient heat|q_ambiente]])**:
Subtracting the [[electric work|w_elec]] from the [[delivered heat|q_calor]]:
[[ambient heat|q_ambiente]]: 180 [[megajoules|MJ]] minus 51.43 [[megajoules|MJ]], which results in 128.57 [[megajoules|MJ]].

## Dimensional validation
- For electrical consumption: An energy M L2 T-2 is divided by a dimensionless coefficient 1, resulting in an energy M L2 T-2. Coherent.
- For [[saving|ahorro]]: It is the subtraction of two dimensionless magnitudes 1 - 1, resulting in a dimensionless fraction 1. Coherent.
- For [[cost|coste]]: The product of an energy M L2 T-2 (in the form of [[kilowatt-hour|kWh]]) by a unit price [[electricity price|precio_kwh]] per each [[kilowatt-hour|kWh]] cancels the energy dimensions and leaves the monetary unit. Coherent.

## Physical interpretation
The obtained result reveals the powerful "thermal leverage" mechanism that characterizes this technology. To satisfy a demand of 180 [[megajoules|MJ]], the user has only had to buy 51.4 [[megajoules|MJ]] of [[total electric consumption|e_elec]]. This does not mean that energy is being created out of thin air (which would violate the first law), but that the compressor is performing [[electric work|w_elec]] to "force" 128.6 [[megajoules|MJ]] of thermal [[ambient heat|q_ambiente]] dispersed in the outdoor air (a low-temperature source) to concentrate and enter the home.

Physically, the system acts as an efficiency multiplier: for every joule of [[electric work|w_elec]] we consume, the environment "gives" us an additional 2.5 joules of [[ambient heat|q_ambiente]] thanks to the phase change of the refrigerant. This implies that the heat pump is, in essence, a collector of indirect solar energy stored in the air, becoming a massive sustainability tool.

# Real-world example

## Context
Imagine a mountain hotel that currently uses an old diesel boiler to heat the water in its heated pool. The manager is considering replacing it with a high-efficiency heat pump, taking advantage of the fact that the required water temperature is relatively low (about 28 degrees Celsius). We want to estimate the impact on the hotel's sustainability if a real [[coefficient of performance|cop]] of 4.8 is achieved during the season of use.

## Physical estimation
For a pool that requires an energy input of the order of 1,000,000 [[megajoules|MJ]] annually to compensate for evaporation and radiation losses:
- With the current combustion system, the hotel must buy and burn fuel equivalent to that million [[megajoules|MJ]].
- With a heat pump with a [[COP|cop]] of 4.8, the hotel will only pay for 208,333 [[megajoules|MJ]] of electrical [[electric work|w_elec]].
- The remaining 791,667 [[megajoules|MJ]] of [[delivered heat|q_calor]] will be captured for free from the mountain air.

If the [[electricity price|precio_kwh]] is 0.20 euros per [[kilowatt-hour|kWh]], the hotel would go from paying about 55,555 euros annually (estimated in equivalent energy) to paying only about 11,574 euros, achieving an economic [[saving|ahorro]] of almost 44,000 euros per year.

## Interpretation
The key to success in this real application lies in the low "thermal jump" required to heat water to 28 degrees Celsius. As the temperature difference is small, the compressor performs minimum mechanical effort, maximizing the [[COP|cop]] operational. Physically, this indicates that the heat pump is unbeatable in low-temperature applications, where [[saving|ahorro]] translates directly into a massive reduction in the establishment's carbon footprint, by replacing hydrocarbon burning with renewable [[ambient heat|q_ambiente]] capture.
`;export{e as default};
