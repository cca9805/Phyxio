# Exam-type example

## Problem Statement
In a food processing plant, drinking water must be pumped through a stainless steel pipe with a length of L  igual a  500text{ m} and an internal diameter of D  igual a  0.15text{ m}. The required volumetric flow rate [[Q]] is 0.04text{ m}^3text{/s}. The friction factor [[f]] has been estimated at 0.018 using the Moody diagram. Calculate the pressure drop [[dp]] that the fluid will experience due solely to viscous friction along the entire path. Consider the water density as [[rho]]  igual a  1000text{ kg/m}^3.

## Data
- Pipe length: [[L]]  igual a  500text{ m}
- Internal diameter: [[D]]  igual a  0.15text{ m}
- Volumetric flow rate: [[Q]]  igual a  0.04text{ m}^3text{/s}
- Friction factor: [[f]]  igual a  0.018
- Fluid density: [[rho]]  igual a  1000text{ kg/m}^3

## System definition
The system is defined as a straight section of horizontal pipe with a constant circular cross-section. The fluid is water, treated as an incompressible and Newtonian fluid. The system operates in steady-state, meaning the flow rate [[Q]] does not vary with time. The environment is the industrial plant, and we focus exclusively on primary friction losses (major losses), ignoring elbows or valves at this stage of the calculation. We assume fully developed flow and negligible heat transfer with the surroundings.

## Physical model
We will use the **Pipe Flow** model based on the **Darcy-Weisbach Equation**. This model states that the pressure drop [[dp]] is directly proportional to the length [[L]], the friction factor [[f]], and the kinetic energy per unit volume ([[rho]] v^2 / 2), and inversely proportional to the diameter [[D]]. We will also use the kinematic relationship between flow rate and average velocity [[v]] through the cross-sectional area [[A]]. The governing equation is

{{f:dp_tubo}}

.

## Model justification
The use of Darcy-Weisbach is justified because it is the fundamental equation for calculating head losses in closed conduits under pressure. Since it is an incompressible fluid and a section of considerable length (L/D > 3000), friction losses dominate the energy balance. The factor [[f]] already includes the effects of the Reynolds number and the relative roughness of stainless steel. No compressible flow models are needed as water is a liquid.

## Symbolic solution
1.  **Area [[A]] calculation**:
    
    A  igual a  frac{pi D^2}{4} 
    
2.  **Average velocity [[v]] calculation**:
    
    v  igual a  frac{Q}{A}  igual a  frac{4Q}{pi D^2} 
    
3.  **Pressure drop [[dp]] calculation**:
    {{f:dp_tubo}}
    
    Delta p  igual a  f frac{L}{D} frac{[[rho]] v^2}{2} 
    

## Numerical substitution
1.  **Area**:
    A  igual a  pi cdot (0.15/2)^2 approx 0.01767text{ m}^2
2.  **Velocity**:
    v  igual a  0.04 / 0.01767 approx 2.26text{ m/s}
3.  **Pressure drop**:
    Delta p  igual a  0.018 cdot (500 / 0.15) cdot (1000 cdot 2.26^2 / 2)
    Delta p  igual a  0.018 cdot 3333.3 cdot 2553.8 approx 153,228text{ Pa}
    Delta p approx 1.53text{ bar}

## Dimensional validation
- [f]  igual a  1 (Dimensionless)
- [L/D]  igual a  L/L  igual a  1 (Dimensionless)
- [[[rho]] v^2 / 2]  igual a  (M L^{-3}) (L T^{-1})^2  igual a  M L^{-1} T^{-2} (Pascal)
The equation is dimensionally consistent with a pressure unit in SI.

## Physical interpretation
The result of 1.53text{ bar} **means** that the fluid loses a considerable amount of its initial mechanical energy as waste heat due to friction with the walls. This **indicates** that if we want to maintain the flow rate of 0.04text{ m}^3text{/s}, the pump at the source must provide an outlet pressure that exceeds the pressure required at the destination by at least 1.53text{ bar}. This highlights the energy-intensive nature of long-distance fluid transport.

---

# Real-world example

## Context
In the design of a fire extinguishing system for a building, it must be ensured that water reaches the furthest hydrant with a minimum pressure of 2text{ bar}. The pipe is 100text{ m} long and the friction generates a pressure drop that must be compensated for to ensure the safety of the occupants.

## Physical estimation
If the hydrant requires a flow rate [[Q]] of 0.02text{ m}^3text{/s} and we use a 10text{ cm} diameter pipe (f approx 0.02), the velocity will be about 2.5text{ m/s}. The estimated pressure drop will be:

Delta p  igual a  0.02 cdot frac{100}{0.1} cdot frac{1000 cdot 2.5^2}{2}  igual a  62,500text{ Pa}  igual a  0.625text{ bar}

This **order of magnitude** indicates that friction consumes almost one-third of the required pressure at the hydrant. Furthermore, if we consider the increased roughness of older pipes, this value could rise significantly over the system's lifespan.

## Interpretation
This calculation **means** that the pressure at the base of the building must be at least 2.625text{ bar} (plus hydrostatic head). If the system is not sized considering this [[dp]], the water jet will not have enough force to reach the fire, compromising the building's safety. This analysis **indicates** the critical need for precise hydraulic balances in civil engineering and the importance of using appropriate safety factors. Ultimately, mastering these calculations is what separates a functional design from a potentially dangerous one in high-stakes environments like fire safety.
