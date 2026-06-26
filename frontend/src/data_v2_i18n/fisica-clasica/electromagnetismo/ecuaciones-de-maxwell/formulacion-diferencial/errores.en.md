Maxwell's local formulation requires a solid command of vector calculus and a deep understanding of field physics. Errors usually arise from an incorrect geometric interpretation of the operators or from ignoring the temporal dynamics of the interactions.

## Conceptual errors


### Error 1 : Confusing divergence with curl
**Why it seems correct**: Both are fundamental differential operators acting on vector fields and often appear together in Maxwell's equations, leading to the thought that they are similar tools for measuring flux.
**Why it is incorrect**: They have opposite physical and geometric meanings. [[divergencia_de_e]] measures how much the field "leaves" or "enters" an infinitesimal point (charge sources), while [[rotacional_de_e]] measures how much the field "spins" or circulates locally around that point. A high divergence does not imply a high curl, and vice versa.
**Detection signal**: Obtaining a vector as a result of the divergence (divergence is always a scalar) or trying to find the curl of a scalar field.
**Conceptual correction**: Remember the "Flux Theorem" to visualize divergence as an expansion, and the "Circulation Theorem" to visualize curl as a local whirlpool.
**Contrast mini-example**: An electrostatic field created by a point charge has non-zero divergence at the origin but zero curl everywhere. In contrast, a magnetic field inside a solenoid has non-zero curl but zero divergence always.

## Model errors

**Mini-example of contrast**

Check 1: In Differential Formulation, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.


### Error 2 : Forgetting the displacement current term in Ampère
**Why it seems correct**: In the vast majority of direct current or low-frequency circuit problems, the original Ampère's law (without the Maxwell term) works perfectly and simplifies calculations.
**Why it is incorrect**: Without the term proportional to the time variation of the electric field [[variacion_temporal_de_e]], Maxwell's equations are mathematically inconsistent in the presence of varying fields and violate the law of conservation of charge. Furthermore, this term is what physically allows the fields to self-sustain as waves traveling through the vacuum.
**Detection signal**: Mathematical inconsistency when calculating the magnetic field inside a parallel plate capacitor during its charging or discharging process.
**Conceptual correction**: Whenever there is an electric field that changes with time, that variation acts as a "source" of magnetic field, exactly with the same effect as a real current of electrons flowing through a wire.
**Contrast mini-example**: If you calculate the magnetic field near a wire charging a capacitor, classic Ampère works; but if you calculate it between the plates (where no electrons pass), classic Ampère would give zero, which is physically false.

## Mathematical errors

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.


### Error 3 : Using integral formulation units in differential equations
**Why it seems correct**: In early learning, it is tempting to insert the total charge in Gauss's differential law instead of the volumetric charge density [[rho]], or the total current instead of the density [[densidad_de_corriente]].
**Why it is incorrect**: The differential formulation is strictly local (point to point). Each term in these equations represents a density per unit volume or per unit infinitesimal area, not a global or integrated value over an extensive body.
**Detection signal**: Dimensional analysis of the result yields erroneous units (for example, obtaining volts instead of volts per square meter) or absurdly large numerical values.
**Conceptual correction**: Always verify that the input data for Nabla (\(\nabla\)) are functions of position or point densities, not total scalars.
**Contrast mini-example**: To find the field at a point, you cannot use a charge of \(5 \ \mathrm{C}\) in \(\nabla\cdot \mathbf{E}\). You must use a volumetric density \(\[[rho]](x,y,z)\) expressed in \(\mathrm{C/m^3}\).

## Interpretation errors

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.


### Error 4 : Applying the partial derivative in a surface discontinuity
**Why it seems correct**: An attempt is made to calculate the [[divergencia_de_e]] or [[rotacional_de_b]] right at the boundary or separation surface between two materials (such as air and metal) to see how the field changes when "crossing".
**Why it is incorrect**: Differential operators are only mathematically defined in regions where the field functions are continuous and differentiable. On a charge surface, the field jumps abruptly, and the derivative becomes infinite or undefined.
**Detection signal**: The divergence calculation yields an infinite value that cannot be handled or the result depends on the "side" of the boundary from which it is viewed.
**Conceptual correction**: At surfaces and interfaces, physics is not described by the differential equation, but by the "boundary conditions" derived from the integral form.
**Contrast mini-example**: Do not try to differentiate the field of an infinite plane right at the surface where the \(z\) coordinate is zero; instead, use the field jump given by \(\sigma/\epsilon_0\).

## Quick self-control rule

Before finalizing any analysis based on Maxwell differential, subject your results to this triple coherence filter:
1. **Entity Filter**: Did the divergence (a scalar product) result in a pure scalar? Did the curl (a vector product) result in a vector with direction and sense?
2. **Dynamics Filter**: If the problem mentions time-varying fields or high-frequency signals, have you included the time variation terms for B and E?
3. **Locality Filter**: Are you operating with densities (\(\[[rho]], \mathbf{J}\)) and not with global values (\(Q, I\))? Are you far from abrupt interfaces where the derivative fails?
If you pass these three filters, the probability that your local field description is physically robust is maximum.

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.