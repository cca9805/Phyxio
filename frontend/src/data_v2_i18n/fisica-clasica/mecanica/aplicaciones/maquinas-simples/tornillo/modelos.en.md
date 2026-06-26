# Screw Models

## Ideal model
The ideal screw model treats it as a perfect simple machine where no energy is dissipated as heat. In this scenario, all the torsion work applied to the lever is fully translated into axial lifting work. The required force under this model is:

{{f:fuerza_ideal}}

This model is useful for establishing the lower bound of the necessary human effort and for calculating the pure theoretical mechanical advantage of the geometric design.

## Hypotheses
- **Infinite rigidity**: It is assumed that neither the screw nor the nut deforms under the load.
- **Uniform motion**: The effect of system inertia at startup is neglected.
- **Constant pitch**: It is assumed that axial advance is perfectly proportional to the rotation angle.

## Quantitative validity domain
For this model to be a faithful representation of technical reality:
- **Geometric relationship**: The model is valid when the thread pitch [[p]] meets the condition:

{{f:condicion_geometria}}

If the pitch is too large, the low-slope "simple machine" model fails.

- **Efficiency error**: The ideal model error relative to the real one is approximately:

{{f:error_rendimiento}}

For a standard screw with an efficiency of 40%, the ideal model error is 60%, making it unacceptable for final engineering calculations. The real [[ventaja_mecanica]] is, in that case, only 40% of the ideal [[ventaja_mecanica]].


- **Load range**: Valid for loads [[R]] below the material yield limit. In standard steels (S235), the maximum allowable thread pressure is 200 MPa. For bronze-on-steel screws, this value drops to 60-100 MPa. Exceeding this threshold leads to plastic deformation of the thread.

## Model failure signals
- **Plastic deformation**: If the screw does not turn freely when the load is removed, the elastic validity domain has been exceeded.
- **Excessive heating**: A clear sign that the "simple machine" model should be replaced by a thermodynamic heavy friction model.
- **Vibrations or squeaking**: Indicates that friction is not constant (stick-slip), invalidating the use of a fixed efficiency [[eta]].

## Extended or alternative model
For high-precision or critical load situations, the **Acme or Square Power Thread Model** is used.

**Transition to the alternative model:**
You should switch to this superior model when:
1. The pressure on the threads exceeds the safety limit of 200 MPa (R > 200 MPa).
2. A precision better than 5% is required for torque calculation, where the thread flank geometry (pressure angle) can no longer be ignored.
3. The screw is not single-start (multi-start), which drastically alters the p/(2*pi*r) relationship.

This model is more complex and requires the use of specific static and kinetic friction coefficients for the pair of materials used.

## Operational comparison
While the ideal model only requires geometry ([[r]], [[p]]), the real model needs to characterize the friction interface ([[eta]]). In practice, the real model is the only one used for sizing motors or actuators, reserving the ideal model only for preliminary conceptual design phases.
