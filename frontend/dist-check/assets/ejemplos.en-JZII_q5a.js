const e=`# Exam-type example

## Problem statement
The shaft with a diameter of 20  cm rotates at 1200  RPM inside a bearing with a diameter of 20.04  cm and a length of 30  cm. The space between the shaft and the bearing is filled with an oil with dynamic viscosity [[mu]] = 0.08  Pa s and density [[rho]] = 900  kg/m al cubo. Assuming that the velocity profile in the oil is linear, calculate the shear stress [[tau]] acting on the shaft, the total friction force [[F]] and the kinematic viscosity [[nu]] of the oil.

## Data
*   Shaft diameter (D sub shaft): 0.2  m, therefore shaft radius [[R]]: 0.1  m
*   Bearing diameter (D sub bearing): 0.2004  m
*   Rotational speed (N): 1200  RPM
*   Length ([[L]]): 0.3  m
*   Dynamic viscosity [[mu]]: 0.08  Pa s
*   Density [[rho]]: 900  kg/m al cubo

## System definition
The system consists of a fluid (oil) confined in the annular space between two concentric cylinders. Since the fluid thickness is much smaller than the shaft radius, the system behaves locally like a Couette flow between two parallel plates. The circular geometry is unfolded into a linear approximation that greatly simplifies the mathematical analysis without losing relevant physical precision. This transition from cylindrical to Cartesian coordinates is a standard technique in lubrication theory.

## Physical model
Steady and laminar flow of an incompressible Newtonian fluid is assumed for this analysis. The velocity profile is considered linear, which simplifies the velocity gradient [[du_dy]] to a constant throughout the entire fluid thickness. This assumption of linearity is valid because the Reynolds number in the gap is low, preventing the transition to turbulence that would complicate the velocity profile and increase the energy dissipation rate.

## Model justification
The no-slip condition ensures that the fluid velocity at the shaft wall is equal to its tangential velocity V, and zero at the bearing wall. The small clearance h justifies the parallel plate approximation. Mineral oil at these speeds behaves in a Newtonian manner, validating Newton's law of viscosity Newton's law of viscosity. Thermal stability is assumed constant for this initial calculation, allowing the viscosity [[mu]] to be treated as a fixed parameter.

## Symbolic solution

Formula set used in this solution:

{{f:newton_viscosity}}

{{f:shear_rate_def}}

{{f:viscosity_kinematic}}

{{f:shear_force_total}}

{{f:tangential_velocity_rot}}

{{f:omega_from_RPM}}

**1. Tangential velocity (V):**
The velocity at the shaft surface is determined from the rotational speed RPM-to-angular-velocity conversion and the shaft radius [[R]], applying the tangential velocity relation:

Tangential speed is obtained by converting rotation rate to angular speed and multiplying by the shaft radius.


**2. Fluid thickness (h):**
The radial clearance is calculated as the difference between the radii:

The fluid-film thickness is obtained from half the difference between bearing and shaft diameters.


**3. Strain rate strain-rate definition:**
Under the linear profile hypothesis, the strain rate is defined by strain-rate definition:

The strain rate is obtained by dividing tangential speed by the film thickness.


**4. Shear stress [[tau]]:**
Newton's law of viscosity Newton's law of viscosity is applied to obtain the shear stress:

The shear stress is obtained from dynamic viscosity and strain rate.


**5. Contact area [[A]]:**
We calculate the side area of the shaft in contact with the fluid:

The contact area is evaluated from the shaft diameter and the bearing length [[L]].


**6. Friction force [[F]]:**
We use the definition of total shear force total shear-force relation:

F = [[tau]]  multiplicado por  A


**7. Kinematic viscosity [[nu]]:**
Finally, the fluid properties are related through the definition of kinematic-viscosity definition:

The kinematic viscosity is obtained by normalizing dynamic viscosity with density.


## Numerical substitution
*   Tangential speed obtained from the rotational data: 12.566 m/s.
*   Fluid-film thickness obtained from the clearance: 0.0002 m.
*   Strain rate obtained from speed divided by thickness: 62830 s^-1.
*   Shear stress obtained from dynamic viscosity and strain rate: 5026.4 Pa.
*   Contact area evaluated from shaft diameter and bearing length: 0.1885 m^2.
*   Total tangential force obtained from shear stress and area: 947.5 N.
*   Kinematic viscosity obtained from dynamic viscosity and density: 8.89 x 10^-5 m^2/s.

## Dimensional validation

[[[tau]]] = [Pa  multiplicado por  s]  multiplicado por  [m/s] / [m] = [Pa  multiplicado por  s]  multiplicado por  [s elevado a -1] = [Pa]

The unit of shear stress is the Pascal, which is correct for force per unit area.

[F] = [Pa]  multiplicado por  [m al cuadrado] = [N/m al cuadrado]  multiplicado por  [m al cuadrado] = [N]

The force is obtained in Newtons, which is consistent.

[[[nu]]] = ([Pa  multiplicado por  s] dividido por [kg/m al cubo]) = ([(Pa)  multiplicado por  s] dividido por [kg/m al cubo]) = [m al cuadrado/s]

The unit of kinematic viscosity is m al cuadrado/s, which is correct for a diffusivity. These dimensions confirm that the applied formulas respect the physical structure of the International System. One Pascal is defined as one Newton per square meter.

## Physical interpretation
The value of [[tau]] = 5026  Pa indicates that the fluid exerts significant resistance to the shaft's rotation. This resistance is directly proportional to viscosity [[mu]] and velocity V, and inversely proportional to the film thickness h. Increased viscosity would require a higher motor torque to maintain the same rotational speed. The work done against this force is entirely dissipated as heat, increasing the oil's internal energy and requiring careful thermal management.

# Real-world example

## Context
Consider the design of a viscous braking system for an industrial safety device in an assembly plant. The device must dissipate energy through the shearing of a high-viscosity fluid (special silicone) contained in a small chamber to prevent a heavy load from descending too fast in the event of a mechanical failure. These types of dampers are critical for protecting expensive machinery and ensuring operator safety in industrial environments.

## Physical estimation
If the device has an effective contact area [[A]] of 0.1 m^2 and a calculated shear stress [[tau]] of 5000 Pa, the estimated braking force [[F]] is 500 N (according to total shear-force relation). This force is equivalent to the weight of a mass of approximately 50  kg, which is a significant physical magnitude for a small-scale braking system. The strain rate of 60000  s elevado a -1 is extremely high, implying significant heat generation through internal friction. If not managed thermally, the oil could reach critical temperatures that would degrade its molecular structure, reducing the effectiveness of the brake in a matter of seconds. The estimated heat flux is proportional to the product shear stress times tangential velocity, highlighting the importance of efficient cooling systems.

## Interpretation
The fluid concept allows us to predict that, unlike a traditional solid friction brake, the viscous braking force will increase linearly with the rotational speed. This provides smooth and progressive braking: the faster the system tries to move, the stronger the fluid's opposition. However, the validity limit of this calculation depends on the temperature not degrading the viscosity [[mu]] of the fluid, which would alter the estimated braking force in a non-linear way. Furthermore, at these very high strain rates, the fluid might start showing non-Newtonian effects, such as shear thinning, which would require a more advanced model than the simple Newton's law Newton's law of viscosity. In conclusion, the deep understanding of fluid behavior is what guarantees the reliability of the safety system under real operation conditions.
`;export{e as default};
