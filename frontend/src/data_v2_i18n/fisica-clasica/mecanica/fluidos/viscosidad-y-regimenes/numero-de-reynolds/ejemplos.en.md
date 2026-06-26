# Exam-type example

## Problem statement
Water at 20 degrees Celsius (with [[rho]] equal to 998 kg/m^3 and [[eta]] equal to 1.0 times 10 to the minus 3 Pa*s) is pumped through a horizontal pipe with a 5 cm internal diameter. If the mean flow velocity is 0.15 m/s, determine:
1. The flow's Reynolds number [[Re]].
2. The flow regime (laminar, transition, or turbulent).
3. The critical velocity at which the flow would stop being laminar (assume critical Reynolds equal to 2300).

## Data
- Density [[rho]]: 998 kg/m^3
- Dynamic viscosity [[eta]]: 1.0 times 10 to the minus 3 Pa*s
- Diameter (characteristic length [[L]]): 0.05 m
- Velocity [[v]]: 0.15 m/s
- Kinematic viscosity [[nu]]: approximately 1.0 times 10 to the minus 6 m^2/s
- Critical Reynolds: 2300

## System definition
The system consists of a closed cylindrical duct with a constant cross-section, representative of a water distribution network in an industrial environment. The fluid is pure water at room temperature, allowing it to be considered a Newtonian and incompressible fluid. The analysis focuses on a pipe section sufficiently far from elbows, valves, or inlets to ensure that the velocity profile is fully developed.

## Physical model
To predict flow behavior, we will use the Reynolds number [[Re]] as a control parameter. This physical model is based on the dynamic competition between the inertial forces of the fluid (which tend to disorder particle trajectories) and the viscous friction forces (which dissipate energy and keep fluid layers parallel). Regime classification is governed by classic empirical thresholds for internal flow.

## Model justification
The Reynolds number is the fundamental tool in this scenario because water is a fluid with constant viscosity under the given conditions. Being a macroscopic problem, surface tension effects are negligible. Using [[Re]] allows reducing all physical variables ([[rho]], [[v]], [[L]], [[eta]]) to a single value that uniquely defines the flow structure, allowing for a decision on whether to apply linear (laminar) equations or complex turbulence models.

## Symbolic solution
0. Calculation of kinematic viscosity [[nu]] using the relation between dynamic viscosity and density.

{{f:re_cinematico}}

1. Calculation of the Reynolds number [[Re]] with the full form and its equivalent form in terms of [[nu]].

{{f:re_dinamico}}

2. Calculation of critical velocity for critical Reynolds equal to 2300, solving velocity from the Reynolds definition.

## Numerical substitution
**Step 0: Kinematic viscosity**
By dividing dynamic viscosity by density, we obtain [[nu]] approximately equal to 1.002 times 10 to the minus 6 m^2/s.

**Step 1: [[Re]] calculation**
Substituting the data gives [[Re]] approximately equal to 7485.

**Step 2: Regime identification**
Given that [[Re]] is approximately 7485, significantly above the full transition threshold of 4000, the flow is classified as **fully turbulent**.

**Step 3: Critical velocity calculation**
Solving with critical Reynolds 2300, the critical velocity is approximately 0.0461 m/s.

## Sensitivity analysis
It is important to note how small changes in conditions affect the result:
- If the water were heated to 80 degrees Celsius, the viscosity [[eta]] would drop to a third of its value. This would triple the Reynolds number [[Re]], making the flow even more chaotic without changing velocity [[v]].
- If the pipe were 10 cm instead of 5 cm, [[Re]] would double, demonstrating that in large pipes, turbulence is almost inevitable.

## Dimensional validation
We perform a unit analysis to ensure that [[Re]] is dimensionless. Density multiplied by velocity and length has the same dimensions as dynamic viscosity, so the final ratio has no units. This cancellation confirms the validity of the mathematical procedure.

## Physical interpretation
The result [[Re]] approximately equal to 7485 **indicates** that inertial forces dominate over viscosity in a proportion close to 7500 to 1. **This implies** that any disturbance in the flow will not be dampened but will grow, forming vortices and eddies. **Therefore**, transport efficiency will be affected by a higher head loss (pressure drop), but heat transfer and the mixing of any substances dissolved in the water will be favored. The low critical velocity (approximately 4.6 cm/s) **demonstrates** that, in practical engineering conditions, laminar water flow in pipes of this diameter is an exception and not the rule.

# Real-world example

## Context
In high-performance engine cooling systems, such as those in Formula 1, controlling the Reynolds number is vital to prevent overheating of critical components.

## Physical estimation
Consider a cooling channel in the engine block with a diameter [[L]] of 8 mm. If a mixture of water and glycol is used, whose viscosity [[eta]] is 5 times higher than that of pure water, and it is pumped at 2 m/s, the Reynolds number [[Re]] will be approximately 3200.

## Interpretation
This value of [[Re]] around 3200 places the system in the transition zone. **This means** that the flow is unstable and alternates between orderly states and small bursts of turbulence. For an engineer, this is an interesting design point: intermittent turbulence helps break the thermal boundary layer and improves cooling, but without the massive pumping power penalty that full turbulent flow at much higher speeds would entail. The study of [[Re]] thus allows "tuning" the engine to work safely at the limit of its thermal capacity.