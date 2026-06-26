const e=`# Exam-type example

## Problem statement

In a traditional single-family home, the heating system consists of two resistive emitters: an electric convector with [[emitter power|P]] = 2.0 kW in the living room and an oil-filled radiator with [[emitter power|P]] = 1.5 kW in the main bedroom. During the winter season (150 days), the convector operates with an [[effective usage time|t]] of 5 hours per day and the radiator with [[effective usage time|t]] of 4 hours per day. The [[conversion efficiency|eta]] of both devices is 0.97. The electricity price is 0.22 EUR/kWh.

Required: (1) calculate the total seasonal [[electrical consumption|E]], (2) determine the total [[useful heat|Q]] delivered, (3) calculate the system's [[coefficient of performance|COP]], and (4) estimate the total seasonal cost.

## Data

- Convector: [[P]] = 2.0 kW; [[t]] = 5 h/day; season = 150 days; [[eta]] = 0.97.
- Radiator: [[P]] = 1.5 kW; [[t]] = 4 h/day; season = 150 days; [[eta]] = 0.97.
- Electricity price: 0.22 EUR/kWh.

## System definition

The physical system analyzed is the set of two resistive emitters operating in parallel in different rooms of the home. The system is thermodynamically open with respect to the house (it delivers heat to the room) but can be analyzed as closed in terms of the electrical energy balance: all energy entering as electricity is accounted for. Distribution losses are zero (no pipe network); the only losses are internal to each emitter, captured by [[conversion efficiency|eta]].

## Physical model

The linear stationary model of resistive heating is used. The hypotheses are:
- [[emitter power|P]] of each device is constant throughout the active period.
- [[effective usage time|t]] represents the real hours with the resistance active, correctly estimated.
- [[conversion efficiency|eta]] of each device is constant and independent of temperature.
- Thermostat cycles are averaged into the daily [[effective usage time|t]].

## Model justification

The linear resistive model is applicable because [[effective usage time|t]] is defined as hours with the resistance active (not connection hours), which eliminates the main error factor. With a 150-day season and stable climatic conditions, the stationary average is representative with an expected error margin below 10%. This model is appropriate for a planning estimate or basic audit.

## Symbolic solution

[[electrical consumption|E]] for each emitter is calculated with the main formula:

{{f:energia}}

For the convector: [[E]] = 2.0 kW × 5 h/day × 150 days = 1500 kWh.

For the radiator: [[E]] = 1.5 kW × 4 h/day × 150 days = 900 kWh.

Total [[electrical consumption|E]] for the season: 1500 + 900 = 2400 kWh.

Total [[useful heat|Q]] is obtained by applying [[conversion efficiency|eta]]:

{{f:calor_util}}

[[Q]] total = 0.97 × 2400 = 2328 kWh thermal.

The system's [[coefficient of performance|COP]] is:

{{f:cop_resistiva}}

[[COP]] = [[Q]] / [[E]] = 2328 / 2400 = 0.97 ≈ 1, confirming the resistive nature of the system.

## Numerical substitution

- [[E]] convector: 2.0 × 5 × 150 = **1500 kWh**
- [[E]] radiator: 1.5 × 4 × 150 = **900 kWh**
- [[E]] total: 1500 + 900 = **2400 kWh**
- [[Q]] total: 0.97 × 2400 = **2328 kWh**
- [[COP]]: 2328 / 2400 = **0.97**
- Total cost: 2400 × 0.22 = **528 EUR**

## Dimensional validation

- Consumption [[E]]: kW × h → kWh ✓
- Useful heat [[Q]]: dimensionless × kWh → kWh ✓
- Performance [[COP]]: kWh / kWh → dimensionless ✓
- Economic cost: kWh × EUR/kWh → EUR ✓

## Physical interpretation

The physically relevant result is that [[COP]] = 0.97 indicates the system operates within the expected regime: virtually all the electrical energy consumed (2400 kWh) is converted into [[useful heat|Q]] (2328 kWh). This means there is no possible energy gain beyond what enters.

The value of [[electrical consumption|E]] depends directly on the product of [[emitter power|P]] × [[effective usage time|t]]; it increases linearly with every additional kW of power and every additional hour of use. This implies that the only way to reduce it while maintaining the same [[useful heat|Q]] is to change technology. Physically, the resistive [[COP]] = 1 is the irreducible lower bound of any direct electric heating system. Compared with [[COP]] = 3.5 of a heat pump, the potential saving is 2400 − 665 = **1735 kWh per season (€381)**.

# Real-world example

## Context

A family evaluates whether to install a heat pump in their 80 m² home to replace the two resistive emitters from the previous example. The home consumes 2400 kWh of electricity per season for heating. The installed cost of the heat pump is €3500; a seasonal [[coefficient of performance|COP]] of 3.5 is estimated for the local climate. The electricity price is 0.22 EUR/kWh.

## Physical estimation

Order of magnitude check: an 80 m² home in a temperate climate has a thermal demand on the order of 2000–3000 kWh/season. The calculated value (2400 kWh) is consistent with that estimated magnitude for an average home.

Quantitative approximation of the contrast:
- Total seasonal resistive [[electrical consumption|E]]: 2400 kWh.
- Total [[useful heat|Q]] required: 0.97 × 2400 = 2328 kWh.
- Equivalent [[electrical consumption|E]] with heat pump ([[COP]] = 3.5): 2328 / 3.5 ≈ 665 kWh.
- Annual energy saving: 2400 − 665 = 1735 kWh (approximately 72% reduction).
- Annual economic saving: 1735 × 0.22 ≈ €381/season.
- Simple payback period: 3500 / 381 ≈ 9.2 seasons.

## Interpretation

The resistive [[coefficient of performance|COP]] = 1 is exactly the denominator of the economic argument for a heat pump. With [[COP]] = 3.5, the alternative system covers the same [[useful heat|Q]] consuming 28% of the resistive system's electricity. The annual saving of €381 allows recovery of the installation investment in under 10 seasons.

This comparison illustrates the leaf's central physical question: although [[conversion efficiency|eta]] ≈ 1 seems optimal, [[COP]] = 1 turns each season of use into an unavoidable cost that can only be avoided by changing the base technology. The perfect linearity of the resistive model ([[E]] = [[P]] · [[t]]) makes this comparative calculation feasible at basic audit precision.
`;export{e as default};
