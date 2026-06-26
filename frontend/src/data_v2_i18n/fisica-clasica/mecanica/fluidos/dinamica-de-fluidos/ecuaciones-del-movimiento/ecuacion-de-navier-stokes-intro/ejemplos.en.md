# Exam-type example

## Problem statement
An engineer is analyzing the steady and fully developed water flow through a horizontal 100\,mum wide microchannel. A constant pressure gradient of 1000\,Pa/m is measured in the flow direction. Knowing that water has a density of 1000\,kg/m^3 and a viscosity of 10^{-3}\,Pa?s, determine the material acceleration of the particles and the Reynolds number if the average velocity is 1\,mm/s.

## Data
- Pressure gradient [[gp]]: -1000\,Pa/m (favorable to flow).
- Density [[rho]]: 1000\,kg/m^3.
- Dynamic viscosity [[mu]]: 10^{-3}\,Pa?s.
- Characteristic velocity [[v]]: 10^{-3}\,m/s.
- Characteristic length [[L]]: 10^{-4}\,m (channel width).
- Projected gravity [[gx]]: 0\,m/s^2 (horizontal).

## System definition
The system consists of a fluid particle moving in the center of the microchannel. Because the channel is horizontal, gravity does not influence the direction of motion. As it is a fully developed flow, the velocity profile does not change along the channel, which greatly simplifies the local force balance. We assume the fluid is Newtonian and incompressible, which is a standard starting point for water in these conditions.

## Physical model
We use the one-dimensional Navier-Stokes balance to relate acceleration with pressure and viscosity forces:
{{f:balance_1d}}

Additionally, we evaluate the flow regime using the Reynolds number:
{{f:re_apoyo}}

## Model justification
We choose Navier-Stokes because water is a viscous fluid and the system operates at a scale where internal friction is relevant. The 1D simplification is valid because the flow is predominantly unidirectional and developed. By neglecting entry and exit effects, we focus on the pure physics of the balance between pressure gradient and viscous friction.

## Symbolic solution
In steady and developed flow, the material acceleration [[a]] must be zero if the system is in balance.
From the balance equation:

Equilibrium case where net material acceleration is canceled and projected gravity does not drive the streamwise direction:

The Reynolds number is calculated directly with the core formula:

{{f:re_apoyo}}


## Numerical substitution
For Reynolds:

For force balance:
Since the flow is steady and developed, net material acceleration is canceled by the balance of terms. The supplied pressure gradient (1000\,Pa/m) is entirely consumed in overcoming viscous resistance.

## Dimensional validation
The term [[rho]] a has units of [kg/m^3 ? m/s^2] = [kg/(m^2 ? s^2)].
The gradient [[gp]] has units [Pa/m] = [(N/m^2)/m] = [kg/(m^2 ? s^2)].
Both sides of the equation are dimensionally consistent, which validates the physical structure of our solution.

## Physical interpretation
The value [[Re]] = 0.1 confirms that we are in a **laminar regime** (Stokes flow), where viscosity totally dominates over inertia. The net acceleration is zero because the pressure push exactly compensates for the viscous drag from the microchannel walls. In this regime, the flow is highly predictable and lacks instabilities, which is typical for microfluidic applications.

---

# Real-world example

## Context
Crude oil ([[rho]] = 850\,kg/m^3, [[mu]] = 0.1\,Pa?s) is transported through a 20\,cm diameter pipe at a velocity of 2\,m/s. We wish to know if the laminar Navier-Stokes model is suitable for this engineering analysis.

## Physical estimation
To perform a physical estimation of the regime, we calculate the Reynolds number. The order of magnitude of the inertial forces versus the viscous ones will tell us if the flow is stable.
Using the diameter as the characteristic length:

This approximation indicates that inertial forces are more than three thousand times higher than viscous ones, suggesting a scale of motion where viscosity can no longer dampen all perturbations.

## Interpretation
Given that [[Re]] = 3400, the flow is in the **transition zone** between laminar and turbulent (exceeding the critical limit of 2300 for pipes). This means that inertial forces are starting to destabilize the fluid layers, and an analysis based purely on laminar Navier-Stokes would lead to significant errors in calculating pressure drop.

Physically, this implies that the pressure gradient required to maintain the flow will be much higher than that predicted by Poiseuille's law, due to the additional energy dissipation in turbulent eddies. For a safe design, using empirical friction correlations or advanced turbulence models is recommended.

## Additional details for length
This analysis is fundamental in the oil industry for sizing pumping systems. If a laminar flow were wrongly assumed, the pressure drop would be underestimated, which could lead to system failure due to lack of power. The transition to turbulence is not an exact point but a range where small perturbations can grow exponentially.

In this scenario, any wall roughness in the pipe or any bend in the layout will act as a trigger for turbulence. Therefore, the Reynolds number acts as our physical sentinel to decide what level of mathematical complexity we must apply to the Navier-Stokes equations to obtain a realistic and safe solution.

This example is also useful to validate instrumentation in microchannels, because pressure sensors and flow sensors can be cross-checked against the same governing balance. In practice, this consistency check is used as an early diagnostic before running long experimental campaigns.