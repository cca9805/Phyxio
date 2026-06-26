# Hydrodynamics - Guided Examples and Resolution

# Exam-type example
## Problem statement
A fire hose with an internal diameter of 8text{ cm} transports water with a flow rate of 1200text{ liters per minute}. At the end of the hose, a nozzle is attached that reduces the exit diameter to only 2.5text{ cm}. If the hose lies on the ground and the gauge pressure in the wide section is 5.5text{ bar}, calculate:
1.  The water velocity in the hose and at the nozzle exit.
2.  The gauge pressure just before the exit (assuming ideal flow without losses).
3.  The maximum height the jet would reach if pointed vertically upward.

## Data
- Hose diameter (D_1): 8text{ cm}  igual a  0.08text{ m}
- Nozzle diameter (D_2): 2.5text{ cm}  igual a  0.025text{ m}
- Flow rate [[Q]]: 1200text{ L/min}  igual a  frac{1.2text{ m}^3}{60text{ s}}  igual a  0.02text{ m}^3/text{s}
- Gauge pressure 1 (p_1): 5.5text{ bar}  igual a  5.5 cdot 10^5text{ Pa}
- Water density [[rho]]: 1000text{ kg/m}^3
- Gravity [[g]]: 9.81text{ m/s}^2

## System definition
The system is the control volume comprising the final section of the hose and the nozzle. It is an open system where water enters through section 1 and exits through section 2. The main target variables are velocity [[v]] and pressure [[p]].

## Physical model
The **Ideal Hydrodynamics** model is used. Steady flow (partial v / partial t  igual a  0), incompressible fluid [[rho]], and irrotational flow are assumed. We will use the continuity equation

{{f:caudal_hidro}}

 for velocities [[v]] and the Bernoulli energy balance

{{f:head_hidro}}

for pressure [[p]] and energy head [[H]].

## Model justification
This model is **valid** **because** the water density [[rho]] is constant and we **neglect** compressibility. We **assume** an ideal flow as the kinetic energy increase in the nozzle dominates over internal friction. We **consider** that the Reynolds number numero de Reynolds is high enough for a uniform velocity [[v]] profile. The energy balance

{{f:head_hidro}}

applies because there are no pumps or turbines, allowing an exact calculation of the pressure [[p]] to velocity conversion.

## Symbolic solution
1.  **Velocity and area calculation**:
    We use the circular area definition [[A]]

{{f:area_circular}}

 and the continuity equation

{{f:caudal_hidro}}

:
    
    A  igual a  frac{pi D^2}{4} implies v  igual a  frac{Q}{A}  igual a  frac{4Q}{pi D^2}
    
2.  **Pressure calculation**:
    We apply the Bernoulli energy balance

{{f:head_hidro}}

between points 1 (hose) and 2 (exit):
    
    p_1 + frac{1}{2}[[rho]] v_1^2  igual a  p_2 + frac{1}{2}[[rho]] v_2^2
    
    Solving for p_2.
3.  **Maximum height**:
    By energy conservation

{{f:head_hidro}}

(Bernoulli between exit and highest point):
    
    frac{1}{2}[[rho]] v_2^2  igual a  [[rho]] g z_{max} implies z_{max}  igual a  frac{v_2^2}{2g}
    

## Numerical substitution
1.  **Velocities**:
    - v_1  igual a  frac{0.02}{pi(0.04)^2} approx 3.98text{ m/s}
    - v_2  igual a  frac{0.02}{pi(0.0125)^2} approx 40.74text{ m/s}
2.  **Maximum height**:
    - z_{max}  igual a  frac{40.74^2}{2 cdot 9.81} approx 84.6text{ meters}

## Dimensional validation
- The computed velocity is expressed in meters per second, which is the expected physical unit for this quantity.
- The resulting maximum height is expressed in meters, so the unit consistency of the procedure is correct.

## Physical interpretation
The result **indicates** that a moderate diameter reduction produces a massive velocity increase. This **means** that pressure energy is almost entirely transformed into kinetic energy. It is **consistent** with fire-fighting equipment power and **physically** reasonable for the flow rate [[Q]] used.

# Real-world example
## Context
**Water supply in an urban pressure tower**. Cities use elevated water towers to maintain pressure in the network without constantly depending on electric pumps. Consider a tower where the water level is 45text{ meters} above the ground of a residential neighborhood.

## Physical estimation
To perform an **estimation** of the **order** of magnitude of the pressure, we use the **Energy Head [[H]]** equation:
{{f:head_hidro}}
At the top of the tower (point 1), velocity is nearly zero and pressure is atmospheric (0 gauge). Total energy is purely potential: H_1  igual a  z_1  igual a  45text{ m}.
In the house's inlet pipe (point 2), at ground level (z_2  igual a  0), potential energy has been converted into pressure and kinetic energy.
If there is no consumption (zero velocity), the static pressure would be:

p  igual a  [[rho]] g z  igual a  1000 cdot 9.81 cdot 45 approx 4.4 cdot 10^5text{ Pa}

This value of 4.4text{ bar} is a robust quantitative **approx** (approximation) that ensures supply to buildings up to 10 stories high, validating the hydraulic design based on the tower's elevation.

## Interpretation
The water tower works as a potential energy battery. Hydrodynamics teaches us that network design must balance pipe diameter: if the diameter is too small, opening the taps will increase velocity [[v]] so much that friction losses will drastically reduce the available pressure [[p]]. This fundamental principle of conservation ensures that energy is never created or destroyed, only transformed from one form to another during the fluid transport process through the city.
