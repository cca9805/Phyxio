# Guided Examples: Head Loss Calculation

In this section, we will solve two fundamental problems illustrating how to apply the Darcy-Weisbach equations and the energy balance in real and academic scenarios.

# Exam-type example

## Problem statement
Water at 20 degrees Celsius, with [[rho]] equal to 998 kilograms per cubic meter and dynamic viscosity equal to 1.002 times ten to the minus three pascal second, must be transported through a commercial steel pipe with absolute roughness of 0.045 millimeters. The line is 150 meters long and has an internal diameter of 10 centimeters. If average velocity is 2 meters per second, determine head loss [[hf]] in meters and pressure drop [[dp]] in kilopascals. Consider [[g]] equal to 9.81 meters per second squared.

## Data
-   Density [[rho]]: 998 kilograms per cubic meter.
-   Dynamic viscosity: 1.002 times ten to the minus three pascal second.
-   Length [[L]]: 150 meters.
-   Diameter [[D]]: 0.1 meters, equivalent to 10 centimeters.
-   Absolute roughness: 0.045 times ten to the minus three meters.
-   Average velocity [[v]]: 2 meters per second.
-   Gravity [[g]]: 9.81 meters per second squared.

## System definition
The system consists of a control volume encompassing the fluid contained in the 150-meter straight section of pipe. Steady, incompressible, and fully developed flow is assumed, meaning the velocity profile does not vary along the duct.

## Physical model
We will use the **Darcy-Weisbach** model for primary losses, as the duct is circular and the fluid is water (Newtonian). To determine the friction factor [[f]], we will first evaluate the regime using the Reynolds Number [[Re]].

## Model justification
The physical justification is **valid** **because** water at these velocities and diameters presents a turbulent regime (high [[Re]]). The Darcy-Weisbach equation is **correct** for this case, considering both viscosity (through [[Re]]) and the relative roughness of commercial steel. This approach is **justified** as it captures energy dissipation due to eddies and friction in the boundary layer. Homogeneity and steady state are **assumed** based on standard industrial conditions.

## Symbolic solution
1.  **Reynolds Number Calculation**: compute [[Re]] with [[rho]], [[v]], [[D]] and dynamic viscosity to identify the flow regime.
2.  **Relative Roughness Calculation**: compute relative roughness as absolute roughness divided by [[D]].
3.  **[[f]] Calculation**: estimate [[f]] using an explicit turbulent correlation such as Haaland.
4.  **Head Loss Calculation**:
    {{f:darcy_weisbach}}
5.  **Pressure Conversion**:
    {{f:conversion_presion}}

## Numerical substitution
1.  **Reynolds**:
    -   With the given data, [[Re]] is approximately 199201, so the regime is turbulent.
2.  **Relative Roughness**:
    -   Relative roughness is approximately 0.00045.
3.  **Factor f**:
    -   [[f]] is approximately 0.0189.
4.  **Head Loss**:
    -   Applying Darcy-Weisbach gives [[hf]] approximately 5.78 meters.
5.  **Pressure Drop**:
    -   Converting with density and gravity gives [[dp]] approximately 56.6 kilopascals.

## Dimensional validation
-   **[[hf]]**: the dimensionless friction factor and geometric terms lead to a length magnitude, consistent with meters.
-   **[[dp]]**: multiplying density, gravity and head gives force per area, consistent with pascals.

## Physical interpretation
The result obtained **indicates** that water has lost energy equivalent to climbing almost two floors of a building just by rubbing against the walls. This **means** that if the pipe were horizontal, pressure at the end would be about 56.6 kilopascals lower than at the beginning. This value is fully **consistent** with industrial observations. The power dissipated as heat is approximately 890 watts, similar to having an electric heater constantly heating the water. This dissipation is **irreversible** and must be compensated by the pumping system.

---

# Real-world example

## Context
**Pumping to an elevated tank in rural communities**. In a rural community, water is pumped from a well to a tank located 20 meters above pump level. The PVC pipe is 50 meters long but includes four elbows of 90 degrees and one check valve. Engineers notice the water arrives with very little flow and seek to understand why the pump seems to be suffering.

## Physical estimation
To perform a physical **estimation**, we sum fitting coefficients to understand their weight in the system. For a design velocity of 1.5 meters per second:
-   Total fitting coefficient is approximately 6.1.
-   Velocity head is approximately 0.115 meters.
-   Secondary losses are approximately 0.7 meters.
-   Primary losses, with [[f]] around 0.02, are approximately 1.15 meters.
-   Total system loss **resultant** is approximately 1.85 meters.

## Interpretation
This calculation **demonstrates** that head loss represents a nine percent brake compared to the geometric height of 20 meters. This **means** the pump must not only overcome static height but must behave as if the tank were at about 21.85 meters. This **approximation** explains why a pump bought just for 20 meters would fail. The interpretation **indicates** that in systems with many singularities, design must oversize discharge pressure to compensate for this energy transport cost.

From an operational perspective, this second example also teaches a design rule that is common in field engineering: the pump curve and the system curve must be evaluated together. If the selected pump only meets nominal geometric height, real operating point will shift toward lower flow and unstable service. In practice, engineers include a conservative margin to absorb aging effects, fouling, and valve wear, all of which increase [[hf]] over time. This long-term perspective is essential for rural systems where maintenance is intermittent and supply reliability has direct social impact.