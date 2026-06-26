# Viscosity and Newton's Law Examples

# Exam-type example

## Problem statement
The objective is to calculate the shear stress [[tau]] acting on the wall of a linear sliding bearing. A steel block with a contact surface of 0.5 square meters slides over a lubricating oil film (SAE 30) with thickness of 0.2 millimeters, equivalent to 2 times 10 to the minus 4 meters. The block moves at a constant speed of 1.2 meters per second. The dynamic viscosity of the oil at an operating temperature of 40 degrees Celsius is [[mu]] of 0.035 pascal second, and its density is [[rho]] of 880 kilograms per cubic meter. Determine:
1.  The shear rate [[dudy]] in the oil film.
2.  The generated shear stress [[tau]].
3.  The total drag force F required to maintain this motion.
4.  The kinematic viscosity [[nu]] of the oil under these conditions.
5.  The Reynolds Number [[Re]] for the system if the block has a characteristic length of 1 meter.

## Data
-   Contact surface: 0.5 square meters.
-   Film thickness (clearance): 0.2 millimeters, equivalent to 2 times 10 to the minus 4 meters.
-   Block velocity: 1.2 meters per second.
-   Dynamic viscosity of the fluid: [[mu]] of 0.035 pascal second.
-   Density of the fluid: [[rho]] of 880 kilograms per cubic meter.

## System definition
The system consists of a planar Couette flow, where a fluid is confined between a static bottom plate and a top plate moving at a constant velocity. The control volume is the oil film, which continuously deforms due to the motion of the steel block. This setup represents a classic problem in tribology, where understanding the mechanical interaction of surfaces in relative motion is fundamental for machine design and efficiency.

## Physical model
We will utilize the **Laminar Newtonian Fluid** model. It is assumed that the fluid behaves linearly according to Newton's Law of Viscosity

{{f:tau_mu}}

, where stress is proportional to the shear rate [[dudy]]. For kinematic viscosity, we will use the definition ratio

{{f:nu_mu}}

. The velocity profile is considered to be fully developed and linear due to the extremely small thickness of the film compared to the plate's dimensions.

## Model justification
This approach is **valid** **because** SAE 30 oil at moderate temperatures behaves in a Newtonian manner. **It is assumed** that the no-slip condition holds at the walls, so the fluid in contact with the block travels at velocity V and the fluid in contact with the base is at rest. **It is considered** that the flow is laminar given that the clearance is microscopic compared to the plate's extent, which suppresses any initial turbulent instabilities. Using a linear gradient is **correct** as long as there are no external pressure gradients curving the velocity profile.

## Symbolic solution
1.  **Calculation of the shear rate [[dudy]]**:
    
    The velocity gradient is taken as the ratio between relative speed and film thickness.
    
2.  **Application of Newton's Law of Viscosity** using

{{f:tau_mu}}

:
    
    Shear stress [[tau]] is obtained by multiplying [[mu]] by shear rate [[dudy]].
    
3.  **Calculation of the drag force**:
    
    Total force is obtained by multiplying [[tau]] by contact area.
    
4.  **Calculation of the kinematic viscosity [[nu]]** using

{{f:nu_mu}}

:
    
    [[nu]] = [[mu]] sobre [[rho]]
    
5.  **Calculation of the Reynolds number [[Re]]** using

{{f:re_mu}}

:
    
    [[Re]] = [[rho]]  por  V  por  L sobre [[mu]]
    

## Numerical substitution
1.  **Shear rate [[dudy]]**:
    
    With the given values, shear rate [[dudy]] is approximately 6000 per second.
    
2.  **Shear stress [[tau]]**:
    
    With that shear rate, shear stress [[tau]] is approximately 210 pascals.
    
3.  **Total force F**:
    
    Total drag force is approximately 105 newtons.
    
4.  **Kinematic viscosity [[nu]]**:
    
    [[nu]] = frac{0.035 Pa por s}{880 kg/m^3} aprox 3.98  por  10^{-5} m^2/s
    

## Dimensional validation
-   Stress: [Pa por s]  por  [s^{-1}] = Pa. Correct.
-   Force: [Pa]  por  [m^2] = N. Correct.
-   Kinematic viscosity: [kg/(m por s)] / [kg/m^3] = m^2/s. Correct.

## Physical interpretation
The obtained result **indicates** that a shear stress [[tau]] of 210 Pa is responsible for the resistance to motion. This **means** that the oil is dissipating mechanical energy as heat at a constant rate within the lubricating film. The [[nu]] value of 3.98  por  10^{-5} m^2/s is nearly 40 times higher than that of water, explaining why this oil is so effective at dampening vibrations and keeping the laminar regime [[Re]] under control in industrial engines. This energy dissipation is an irreversible process that must be managed to avoid thermal breakdown of the lubricant.

---

# Real-world example

## Context
### Estimating pressure drop in an oil pipeline
Imagine an industrial pipeline transporting heavy crude oil through a straight section of 10 km. To ensure flow, we need to know the kinematic viscosity [[nu]] and understand how it affects transport efficiency. The crude has a dynamic viscosity of [[mu]] = 0.8 Pa por s and a density of [[rho]] = 900 kg/m^3. In the global energy industry, calculating the required pumping power is essential for the economic viability of these infrastructures.

## Physical estimation
To perform a physical **estimation** of the flow behavior, we first calculate the kinematic viscosity [[nu]] using the relation

{{f:nu_mu}}

:

[[nu]] = frac{0.8 Pa por s}{900 kg/m^3} aprox 8.89  por  10^{-4} m^2/s

Next, we evaluate the Reynolds Number [[Re]] using the relation

{{f:re_mu}}

:

[[Re]] = [[rho]]  por  V  por  D sobre [[mu]] = 900  por  1  por  0.5 sobre 0.8 aprox 562

Since the result is below 2300, the physical **resultant** is that the flow is fully laminar, which allows for the use of pure viscous friction models in the pressure drop calculations.

## Interpretation
This example demonstrates that the number [[Re]] is the guardian of order in fluid transport. Although heavy crude oil is difficult to move due to its high dynamic viscosity [[mu]], this same property suppresses turbulence, allowing for a predictable and stable flow. In engineering, this analysis is critical: if the crude were less viscous, it might become turbulent, drastically increasing the pressure drop and demanding much more expensive pumps to maintain the supply line across the vast distances required for energy distribution.




