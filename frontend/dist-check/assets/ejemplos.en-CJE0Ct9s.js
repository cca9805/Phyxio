const e=`# Exam-type example\r
\r
## Problem statement\r
An engineer is analyzing the steady and fully developed water flow through a horizontal 100\\,mum wide microchannel. A constant pressure gradient of 1000\\,Pa/m is measured in the flow direction. Knowing that water has a density of 1000\\,kg/m^3 and a viscosity of 10^{-3}\\,Pa?s, determine the material acceleration of the particles and the Reynolds number if the average velocity is 1\\,mm/s.\r
\r
## Data\r
- Pressure gradient [[gp]]: -1000\\,Pa/m (favorable to flow).\r
- Density [[rho]]: 1000\\,kg/m^3.\r
- Dynamic viscosity [[mu]]: 10^{-3}\\,Pa?s.\r
- Characteristic velocity [[v]]: 10^{-3}\\,m/s.\r
- Characteristic length [[L]]: 10^{-4}\\,m (channel width).\r
- Projected gravity [[gx]]: 0\\,m/s^2 (horizontal).\r
\r
## System definition\r
The system consists of a fluid particle moving in the center of the microchannel. Because the channel is horizontal, gravity does not influence the direction of motion. As it is a fully developed flow, the velocity profile does not change along the channel, which greatly simplifies the local force balance. We assume the fluid is Newtonian and incompressible, which is a standard starting point for water in these conditions.\r
\r
## Physical model\r
We use the one-dimensional Navier-Stokes balance to relate acceleration with pressure and viscosity forces:\r
{{f:balance_1d}}\r
\r
Additionally, we evaluate the flow regime using the Reynolds number:\r
{{f:re_apoyo}}\r
\r
## Model justification\r
We choose Navier-Stokes because water is a viscous fluid and the system operates at a scale where internal friction is relevant. The 1D simplification is valid because the flow is predominantly unidirectional and developed. By neglecting entry and exit effects, we focus on the pure physics of the balance between pressure gradient and viscous friction.\r
\r
## Symbolic solution\r
In steady and developed flow, the material acceleration [[a]] must be zero if the system is in balance.\r
From the balance equation:

Equilibrium case where net material acceleration is canceled and projected gravity does not drive the streamwise direction:

The Reynolds number is calculated directly with the core formula:

{{f:re_apoyo}}


## Numerical substitution\r
For Reynolds:

For force balance:\r
Since the flow is steady and developed, net material acceleration is canceled by the balance of terms. The supplied pressure gradient (1000\\,Pa/m) is entirely consumed in overcoming viscous resistance.\r
\r
## Dimensional validation\r
The term [[rho]] a has units of [kg/m^3 ? m/s^2] = [kg/(m^2 ? s^2)].\r
The gradient [[gp]] has units [Pa/m] = [(N/m^2)/m] = [kg/(m^2 ? s^2)].\r
Both sides of the equation are dimensionally consistent, which validates the physical structure of our solution.\r
\r
## Physical interpretation\r
The value [[Re]] = 0.1 confirms that we are in a **laminar regime** (Stokes flow), where viscosity totally dominates over inertia. The net acceleration is zero because the pressure push exactly compensates for the viscous drag from the microchannel walls. In this regime, the flow is highly predictable and lacks instabilities, which is typical for microfluidic applications.\r
\r
---\r
\r
# Real-world example\r
\r
## Context\r
Crude oil ([[rho]] = 850\\,kg/m^3, [[mu]] = 0.1\\,Pa?s) is transported through a 20\\,cm diameter pipe at a velocity of 2\\,m/s. We wish to know if the laminar Navier-Stokes model is suitable for this engineering analysis.\r
\r
## Physical estimation\r
To perform a physical estimation of the regime, we calculate the Reynolds number. The order of magnitude of the inertial forces versus the viscous ones will tell us if the flow is stable.\r
Using the diameter as the characteristic length:

This approximation indicates that inertial forces are more than three thousand times higher than viscous ones, suggesting a scale of motion where viscosity can no longer dampen all perturbations.\r
\r
## Interpretation\r
Given that [[Re]] = 3400, the flow is in the **transition zone** between laminar and turbulent (exceeding the critical limit of 2300 for pipes). This means that inertial forces are starting to destabilize the fluid layers, and an analysis based purely on laminar Navier-Stokes would lead to significant errors in calculating pressure drop.\r
\r
Physically, this implies that the pressure gradient required to maintain the flow will be much higher than that predicted by Poiseuille's law, due to the additional energy dissipation in turbulent eddies. For a safe design, using empirical friction correlations or advanced turbulence models is recommended.\r
\r
## Additional details for length\r
This analysis is fundamental in the oil industry for sizing pumping systems. If a laminar flow were wrongly assumed, the pressure drop would be underestimated, which could lead to system failure due to lack of power. The transition to turbulence is not an exact point but a range where small perturbations can grow exponentially.\r
\r
In this scenario, any wall roughness in the pipe or any bend in the layout will act as a trigger for turbulence. Therefore, the Reynolds number acts as our physical sentinel to decide what level of mathematical complexity we must apply to the Navier-Stokes equations to obtain a realistic and safe solution.

This example is also useful to validate instrumentation in microchannels, because pressure sensors and flow sensors can be cross-checked against the same governing balance. In practice, this consistency check is used as an early diagnostic before running long experimental campaigns.`;export{e as default};
