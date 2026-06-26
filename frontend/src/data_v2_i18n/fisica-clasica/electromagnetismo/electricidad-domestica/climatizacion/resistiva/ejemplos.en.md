# Exam-type example

## Problem statement

In a traditional single-family home, the heating system consists of two resistive emitters: an electric convector with [[potencia_del_emisor]] = 2.0 kW in the living room and an oil-filled radiator with [[potencia_del_emisor]] = 1.5 kW in the main bedroom. During the winter season (150 days), the convector operates with an [[tiempo_efectivo_de_uso]] of 5 hours per day and the radiator with [[tiempo_efectivo_de_uso]] of 4 hours per day. The [[conversion efficiency|eta]] of both devices is 0.97. The electricity price is 0.22 EUR/kWh.

Required: (1) calculate the total seasonal [[consumo_electrico]], (2) determine the total [[calor_util]] delivered, (3) calculate the system's [[coeficiente_de_rendimiento]], and (4) estimate the total seasonal cost.

## Data

- Convector: [[potencia_del_emisor]] = 2.0 kW; [[tiempo_efectivo_de_uso]] = 5 h/day; season = 150 days; [[eta]] = 0.97.
- Radiator: [[potencia_del_emisor]] = 1.5 kW; [[tiempo_efectivo_de_uso]] = 4 h/day; season = 150 days; [[eta]] = 0.97.
- Electricity price: 0.22 EUR/kWh.

## System definition

The physical system analyzed is the set of two resistive emitters operating in parallel in different rooms of the home. The system is thermodynamically open with respect to the house (it delivers heat to the room) but can be analyzed as closed in terms of the electrical energy balance: all energy entering as electricity is accounted for. Distribution losses are zero (no pipe network); the only losses are internal to each emitter, captured by [[conversion efficiency|eta]].

## Physical model

The linear stationary model of resistive heating is used. The hypotheses are:
- [[potencia_del_emisor]] of each device is constant throughout the active period.
- [[tiempo_efectivo_de_uso]] represents the real hours with the resistance active, correctly estimated.
- [[conversion efficiency|eta]] of each device is constant and independent of temperature.
- Thermostat cycles are averaged into the daily [[tiempo_efectivo_de_uso]].

The physical model considers fundamental system quantities such as [[calor_util]], [[coeficiente_de_rendimiento]], [[consumo_electrico]].

## Model justification

The linear resistive model is applicable because [[tiempo_efectivo_de_uso]] is defined as hours with the resistance active (not connection hours), which eliminates the main error factor. With a 150-day season and stable climatic conditions, the stationary average is representative with an expected error margin below 10%. This model is appropriate for a planning estimate or basic audit.

## Symbolic solution

[[consumo_electrico]] for each emitter is calculated with the main formula:

{{f:energia}}

For the convector: [[consumo_electrico]] = 2.0 kW × 5 h/day × 150 days = 1500 kWh.

For the radiator: [[consumo_electrico]] = 1.5 kW × 4 h/day × 150 days = 900 kWh.

Total [[consumo_electrico]] for the season: 1500 + 900 = 2400 kWh.

Total [[calor_util]] is obtained by applying [[conversion efficiency|eta]]:

{{f:calor_util}}

[[calor_util]] total = 0.97 × 2400 = 2328 kWh thermal.

The system's [[coeficiente_de_rendimiento]] is:

{{f:cop_resistiva}}

[[coeficiente_de_rendimiento]] = [[calor_util]] / [[consumo_electrico]] = 2328 / 2400 = 0.97 ≈ 1, confirming the resistive nature of the system.

## Numerical substitution

- [[consumo_electrico]] convector: 2.0 × 5 × 150 = **1500 kWh**
- [[consumo_electrico]] radiator: 1.5 × 4 × 150 = **900 kWh**
- [[consumo_electrico]] total: 1500 + 900 = **2400 kWh**
- [[calor_util]] total: 0.97 × 2400 = **2328 kWh**
- [[coeficiente_de_rendimiento]]: 2328 / 2400 = **0.97**
- Total cost: 2400 × 0.22 = **528 EUR**

## Dimensional validation

- Consumption [[consumo_electrico]]: kW × h → kWh ✓
- Useful heat [[calor_util]]: dimensionless × kWh → kWh ✓
- Performance [[coeficiente_de_rendimiento]]: kWh / kWh → dimensionless ✓
- Economic cost: kWh × EUR/kWh → EUR ✓

## Physical interpretation

The physically relevant result is that [[coeficiente_de_rendimiento]] = 0.97 indicates the system operates within the expected regime: virtually all the electrical energy consumed (2400 kWh) is converted into [[calor_util]] (2328 kWh). This means there is no possible energy gain beyond what enters.

The value of [[consumo_electrico]] depends directly on the product of [[potencia_del_emisor]] × [[tiempo_efectivo_de_uso]]; it increases linearly with every additional kW of power and every additional hour of use. This implies that the only way to reduce it while maintaining the same [[calor_util]] is to change technology. Physically, the resistive [[coeficiente_de_rendimiento]] = 1 is the irreducible lower bound of any direct electric heating system. Compared with [[coeficiente_de_rendimiento]] = 3.5 of a heat pump, the potential saving is 2400 − 665 = **1735 kWh per season (€381)**.

# Real-world example


## Context

A family evaluates whether to install a heat pump in their 80 m² home to replace the two resistive emitters from the previous example. The home consumes 2400 kWh of electricity per season for heating. The installed cost of the heat pump is €3500; a seasonal [[coeficiente_de_rendimiento]] of 3.5 is estimated for the local climate. The electricity price is 0.22 EUR/kWh.

## Physical estimation

Order of magnitude check: an 80 m² home in a temperate climate has a thermal demand on the order of 2000–3000 kWh/season. The calculated value (2400 kWh) is consistent with that estimated magnitude for an average home.

Quantitative approximation of the contrast:
- Total seasonal resistive [[consumo_electrico]]: 2400 kWh.
- Total [[calor_util]] required: 0.97 × 2400 = 2328 kWh.
- Equivalent [[consumo_electrico]] with heat pump ([[coeficiente_de_rendimiento]] = 3.5): 2328 / 3.5 ≈ 665 kWh.
- Annual energy saving: 2400 − 665 = 1735 kWh (approximately 72% reduction).
- Annual economic saving: 1735 × 0.22 ≈ €381/season.
- Simple payback period: 3500 / 381 ≈ 9.2 seasons.

## Interpretation

The resistive [[coeficiente_de_rendimiento]] = 1 is exactly the denominator of the economic argument for a heat pump. With [[coeficiente_de_rendimiento]] = 3.5, the alternative system covers the same [[calor_util]] consuming 28% of the resistive system's electricity. The annual saving of €381 allows recovery of the installation investment in under 10 seasons.

This comparison illustrates the leaf's central physical question: although [[conversion efficiency|eta]] ≈ 1 seems optimal, [[coeficiente_de_rendimiento]] = 1 turns each season of use into an unavoidable cost that can only be avoided by changing the base technology. The perfect linearity of the resistive model ([[consumo_electrico]] = [[potencia_del_emisor]] · [[tiempo_efectivo_de_uso]]) makes this comparative calculation feasible at basic audit precision.