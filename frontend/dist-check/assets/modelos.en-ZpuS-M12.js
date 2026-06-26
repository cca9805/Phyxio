const e=`# Model Analysis:

Physical analysis of the inclined plane can be approached from different levels of abstraction, depending on the required precision and the dissipative factors to be considered.

## Ideal model
The ideal model of the inclined plane is the pillar of simple machines. In this scheme, any dissipative force such as friction or air resistance is neglected. It is assumed that the surface is a rigid, non-deformable, and perfectly smooth solid with zero friction. This model allows deriving the pure geometric mechanical advantage and is the basis for understanding the "Golden Rule of Mechanics": what is gained in force is lost in distance by traveling a longer hypotenuse.

## Hypotheses
- **Perfectly rigid and smooth surface**: There is no plastic or elastic deformation of the ramp under the load weight, and microscopic irregularities are zero, eliminating any tangential resistance.
- **Point load without dimensions**: The object is treated as a material particle centered at its center of mass, ignoring rotation, tipping, or pressure distribution effects.
- **Absence of pneumatic friction**: Air resistance is considered negligible, which is valid for low operating speeds and objects with low cross-sections.
- **Ideal force transmission**: The pushing or pulling force is applied perfectly parallel to the ramp surface, maximizing the efficiency of the mechanical advantage.

## Quantitative validity domain
- **Friction coefficient**: The friction coefficient [[mu]] must be extremely low (below 0.05), such as in the case of polished ice or Teflon surfaces.
- **Operating speed**: Speeds must be below 5 m/s so that the aerodynamic drag force does not become significant compared to the parallel weight component [[Wpar]].
- **Structural integrity**: The deflection of the ramp under the load must be less than 1% to keep the angle [[theta]] and the geometric mechanical advantage constant.
- **Angular range**: The inclination angle [[theta]] must be between 1° and 89° for the machine to function as a vertical force multiplier.

## Model failure signals
- **Dynamic inconsistency**: The object stops or does not accelerate as predicted by the ideal acceleration, indicating the presence of hidden dissipative forces.
- **Heat generation**: Temperature increase is detected on the contact surfaces, indicating a dissipation of kinetic energy in the form of thermal energy.
- **Effort deviation**: The force [[P]] required to maintain a constant speed is significantly greater than the theoretical parallel weight component calculated by the ideal model.

## Extended or alternative model
The extended model introduces dynamic and static friction as a force proportional to the normal [[N]]. It is the standard for real industrial applications where contact between rough materials generates a resistance to sliding that cannot be ignored. This model is much more accurate for the design of transport ramps and braking systems.

## Operational comparison
While the ideal model predicts a perfect efficiency [[eta]] (the unit), the Coulomb model allows quantifying the thermal energy loss. In this scenario, the actual mechanical advantage is always less than the ideal one because part of the applied effort must overcome the friction force [[f]].

### Modeling formula registry

Ideal (Equilibrium):
{{f:ley_plano_ideal}}

Ideal (Dynamic):
{{f:aceleracion_galileo}}

Real (Friction):
{{f:fuerza_rozamiento}}

Real (Dynamic):
{{f:aceleracion_rampa}}
`;export{e as default};
