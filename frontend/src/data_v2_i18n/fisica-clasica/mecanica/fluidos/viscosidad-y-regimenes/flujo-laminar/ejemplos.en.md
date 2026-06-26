# Laminar Flow Examples

# Exam-type example

## Problem statement
A pharmaceutical laboratory transports a highly viscous liquid compound through a stainless steel pipe of [[L]] = 12 m length and an internal diameter of 4 mm. The dynamic viscosity of the liquid is [[eta]] = 0.15 Pa*s and its density is 1050 kg/m^3. A pressure difference of [[deltaP]] = 80 kPa is applied between the ends. **Calculate** the volumetric flow rate [[Q]] in milliliters per second and the maximum velocity [[v_max]] at the pipe axis. Furthermore, **justify** whether the use of Poiseuille's law is valid by verifying the regime using the Reynolds Number.

## Data
- **Pipe length:** [[L]] = 12 m (Axial extension data).
- **Pipe radius:** [[R]] is 2 mm, or 0.002 m (derived from the 4 mm diameter).
- **Dynamic viscosity:** [[eta]] = 0.15 Pa*s (Internal flow resistance).
- **Pressure drop:** [[deltaP]] = 80000 Pa (Fluid driving force).
- **Density:** 1050 kg/m^3 (required for Reynolds calculation).

## System definition
The system is defined as a Newtonian, incompressible, and steady fluid flow within a rigid cylindrical duct of constant circular cross-section. The flow is considered fully developed, ignoring inlet and outlet effects due to the large length/diameter ratio (L/D = 3000).

## Physical model
The adopted physical model is **Hagen-Poiseuille Flow**. This model predicts that, under a laminar regime, the flow rate is directly proportional to the fourth power of the radius and the pressure gradient. The internal fluid friction dominates over inertia, resulting in a parabolic velocity profile where the fluid in contact with the wall is at rest.

## Model justification
To validate the model, we must first estimate the average velocity and the Reynolds Number. If [[Re]] < 2300, the regime is laminar and the model is physically correct. The high viscosity of the fluid (150 times that of water) strongly suggests that the flow will be laminar even under considerable pressures, as the Reynolds denominator (viscosity) will damp the inertial forces (numerator).

## Symbolic solution
First, we use Poiseuille's Law to find the flow rate:
{{f:poiseuille}}

Then, we calculate the maximum velocity at the axis:
{{f:v_max_def}}

Finally, we calculate the average velocity by dividing the flow rate by the circular cross-sectional area and verify the regime with [[Re]], comparing inertia with viscosity. To know the local velocity at any point of the radius, we would apply the profile:
{{f:perfil_velocidad}}

## Numerical substitution
1.  **Flow rate calculation [[Q]]**:
    
    Converted to mL/s, the result is approximately [[Q]] = 0.279 mL/s.
2.  **Calculation of [[v_max]]**:
    
3.  **Reynolds Verification**:
    The average velocity is half of [[v_max]], giving about 0.0222 m/s.
    The estimated Reynolds Number is approximately [[Re]] = 0.621.
    Since 0.621 is far below 2300, the regime is deeply laminar.

## Dimensional validation
We verify the flow rate units:
The dimension of [[Q]] is volume per unit time.
The resulting unit is the cubic meter per second, which is correct for a volumetric flow rate. For velocity:
The dimension of velocity is length per unit time.
Dimensional consistency checked.

## Physical interpretation
The result shows an extremely slow and ordered flow. A Reynolds Number of 0.62 indicates that viscous forces are nearly 4000 times more powerful than inertial forces in this system. The fluid moves so smoothly that there is no possibility of turbulence. The low flow rate (0.279 mL/s) despite high pressure (80 kPa) demonstrates how viscosity and the small pipe diameter act as a large hydraulic resistance, limiting mass transport.

# Real-world example

## Context
Analysis of vascular resistance in the human circulatory system. Consider a typical arteriole with a radius of [[R]] = 0.05 mm (5e-5 m) and a length of [[L]] = 2 mm (2e-3 m). Blood has a viscosity of [[eta]] = 0.004 Pa*s. We want to estimate the pressure drop required to maintain a healthy physiological flow.

## Physical estimation
If the flow rate required to irrigate a small tissue is [[Q]] = 1e-10 m^3/s, we solve for [[deltaP]] from Poiseuille's law:

Substituting the values:

This is approximately equivalent to 2.4 mmHg, a reasonable value for the pressure drop across an individual arteriole.

## Interpretation
This calculation illustrates why arterioles are called "resistance vessels." Because the radius [[R]] is in the denominator raised to the fourth power, the human body can control blood flow to specific organs through minute vasoconstriction or vasodilation. A 10 % reduction in arteriole radius would increase the required pressure drop by 52 % to maintain the same flow rate, forcing the heart to work much harder. The physics of laminar flow is, therefore, the silent motor that regulates our blood pressure and the distribution of nutrients to every corner of our body.

The key lesson is that laminar flow converts small geometric changes into large hydraulic consequences. The same pressure source can produce very different tissue perfusion if [[R]] changes slightly, because viscous resistance is amplified by confinement. This is why the model is not only a pipe-flow calculation, but also a useful physical language for microcirculation, infusion systems, and controlled dosing in biomedical devices.
