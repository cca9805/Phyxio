const e=`\uFEFF# Exam-type example\r
\r
## Problem statement\r
A glass capillary tube with an internal radius [[r]] of 0.50 mm is vertically inserted into a container of pure water at room temperature (20^circC). The following physical parameters are known: the surface tension of water is [[sigma]] equal to 0.072 N/m, the liquid density is [[rho]] equal to 1000 kg/m al cubo, the acceleration of gravity is [[g]] equal to 9.81 m/s al cuadrado, and the contact angle between water and clean glass is [[theta]] equal to 0 rad (perfect wetting).\r
\r
It is requested to:\r
1. Calculate the capillary rise height [[h]] that the water column will reach.\r
2. Determine the pressure excess [[dp]] (Laplace Pressure) just below the meniscus, assuming it is approximately spherical with a radius equal to that of the tube.\r
3. Physically interpret why the liquid rises and what would happen to the height if the tube radius were halved.\r
\r
## Data\r
For the resolution, we identify the key magnitudes and their values in International System (SI) units:\r
- Surface tension [[sigma]]: 0.072 N/m.\r
- Tube radius [[r]]: 0.50 mm, equivalent to 5.0 por 10 elevado a -4 m.\r
- Fluid density [[rho]]: 1000 kg/m al cubo.\r
- Gravity [[g]]: 9.81 m/s al cuadrado.\r
- Contact angle [[theta]]: 0 rad.\r
\r
It is crucial to perform the radius conversion to meters before any calculation to ensure dimensional consistency with the rest of the variables.\r
\r
## System definition\r
The physical system consists of a liquid-gas interface confined in a cylindrical geometry of millimeter scale. Upon contacting the solid wall of the capillary, the adhesion forces between the water and the glass exceed the internal cohesive forces of the liquid, causing the surface to curve upward, forming a concave meniscus. This curvature generates a net vertical component of surface tension acting along the contact length [[L]] (the tube's perimeter) that "pulls" the water mass upward. Equilibrium is reached when the weight of the risen liquid column exactly equals the vertical force exerted by the interface on that perimeter.\r
\r
## Physical model\r
We will use the static capillary equilibrium model. This model assumes the fluid is incompressible and homogeneous, and that the interface is an ideal surface with constant surface tension. For the height calculation, we will apply Jurin's Law, which relates surface force to the weight of the column. For the pressure jump calculation, we will use the Young-Laplace Law applied to an interface with spherical symmetry.\r
\r
## Model justification\r
We choose Jurin's Law because the tube radius (0.5 mm) is small enough for the meniscus to be approximated as a spherical cap and for curvature effects to dominate over simple hydrostatic pressure. The contact angle [[theta]] value of 0 rad simplifies the model, assuming that the surface force acts purely in a vertical direction at the contact line. Dynamic effects (viscosity) are not considered since we are seeking the final equilibrium state.\r
\r
## Symbolic solution\r
1.  **Capillary height**:\r
    We use the fundamental force equilibrium relationship (Jurin's Law):\r
    {{f:ascenso_capilar}}\r
    Since cos(0) = 1, the formula simplifies to:\r
    \r
    With perfect wetting, the capillary height is obtained by balancing surface tension against the column weight.\r
    \r
\r
2.  **Pressure excess**:\r
    We apply Laplace's Law for a curved interface:\r
    {{f:laplace}}\r
    Where the radius of curvature of the interface [[R]] matches the tube radius [[r]] due to perfect wetting.\r
\r
3.  **Dependency analysis**:\r
    We observe that both [[h]] and [[dp]] are inversely proportional to the tube radius. This implies that the smaller the radius, the larger the observed effect.\r
\r
## Numerical substitution\r
1.  **Height calculation**:\r
    \r
    Substituting the data gives a capillary height of [[h]] = 0.02936 m.\r
    \r
    \r
    This is approximately 2.94 cm of rise.\r
    \r
    The water column rises approximately 2.94 cm.\r
\r
2.  **Pressure excess calculation**:\r
    \r
    The Young-Laplace estimate gives a pressure excess of [[dp]] = 288 Pa.\r
    \r
    This is the pressure jump across the meniscus.\r
\r
## Dimensional validation\r
We verify the units of height [[h]]:\r
\r
[h] = ([N/m] dividido por [kg/m al cubo]  multiplicado por  [m/s al cuadrado]  multiplicado por  [m]) = (N/m dividido por N/m al cubo) = m\r
\r
The result in meters is consistent with a length dimension. For pressure [[dp]]:\r
\r
For [[dp]], surface tension divided by a length gives pressure units, Pa.\r
\r
Both magnitudes present correct units according to the International System, validating the algebraic structure of the formulas used.\r
\r
## Physical interpretation\r
The rise of almost 3 cm demonstrates that at millimeter scales, surface tension is capable of performing significant work against gravity. The liquid does not "rise on its own," but is driven by the reduction of surface potential energy as it wets the glass wall. This indicates that the system is minimizing its total free energy by maximizing the contact between the water and the high-energy glass surface.\r
\r
If the tube radius were halved (0.25 mm), the height of the column would exactly double to 5.88 cm. This occurs because while the lifting force associated with length [[L]] is halved, the column weight per unit height (area) is reduced to a quarter, allowing surface tension to support a much taller column. This means that capillarity is fundamentally a scaling phenomenon where surface effects become dominant as the characteristic dimension decreases.\r
\r
# Real-world example\r
\r
## Context\r
A critical biological example is sap transport in plants and moisture retention in soils. Soil pores act as a network of interconnected capillaries that allow rainwater to rise from the water table to the roots, even in the absence of recent rain. This mechanism is vital for ecosystem survival during dry periods.\r
\r
## Physical estimation\r
Consider a soil pore with an effective radius of 0.05 mm (10 times smaller than our previous example). Using the relationship\r
\r
{{f:ascenso_capilar}}\r
\r
, the rise height would be:\r
\r
The smaller pore gives an estimated capillary rise of [[h]] = 0.294 m, about 29.4 cm.\r
\r
This quantitative **estimation** shows how the microscopic structure of the soil allows for keeping the Earth's surface hydrated through "capillary suction," a passive mechanism that requires no external energy input beyond molecular interaction.\r
\r
## Interpretation\r
The practical application reveals that surface tension is nature's tool for vertical transport in systems without mechanical pumps. In the soil, this force is what keeps water available for plants against the force of gravity. This **indicates** that surface tension is a key driver of the global water cycle at the microscale. However, in reality, factors such as the presence of salts (which change [[sigma]]) or pore irregularity (which changes [[theta]]) cause the actual rise to vary, but Jurin's model provides the ideal upper bound for understanding the phenomenon. The result is **consistent** with the observed moisture gradients in natural soil profiles. This **means** that capillary forces are the primary structural mechanism for environmental hydration.\r
`;export{e as default};
