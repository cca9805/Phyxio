const e=`\uFEFF# Exam-type example

## Problem statement

A detailed one-dimensional collision between two spheres of different materials is analyzed to determine how the coefficient of restitution[[e]]governs the final state of the system and the energy transfers involved. The scenario poses a sphere of mass[[m1]]equal to 2 kg initially moving with a velocity[[v1i]]of 5 m/s to the right on a perfectly polished and frictionless horizontal surface. In its path, this sphere frontally impacts a second sphere of mass[[m2]]equal to 3 kg that is initially at absolute rest, so its initial velocity[[v2i]]is 0 m/s.

Previous laboratory studies have determined that the specific coefficient of restitution[[e]]for this pair of materials and geometry is 0.6 under current temperature conditions. The academic objective of the problem is threefold: first, to calculate the individual final velocities of each sphere,[[v1f]]and[[v2f]], immediately after contact ceases; second, to quantify the exact magnitude of the kinetic energy loss[[DeltaK]]produced by the collision; and third, to perform a deep physical interpretation of the impact process efficiency based on the results obtained.

## Data

To ensure a rigorous resolution, we classify the input data according to their physical nature:
- **Initial kinematic state (Causes)**: The projectile velocity[[v1i]]is 5 m/s and the target velocity[[v2i]]is 0 m/s.
- **Inertial properties of the system**: The mass of the incident body[[m1]]is 2 kg and the mass of the target body[[m2]]is 3 kg.
- **Constitutive parameter of contact**: The coefficient of restitution[[e]]is set at 0.6, which predetermines a partially inelastic behavior.
- **Expected output variables**: Final velocities[[v1f]]and[[v2f]], reduced mass of the system[[mu]], and kinetic energy loss[[DeltaK]].

By convention, the positive direction of the X-axis points to the right.

## System definition

The physical system under study is exclusively constituted by the set of the two colliding spheres. Since the impact occurs on a horizontal frictionless surface, the net external forces in the direction of motion are zero. Gravity forces and the ground's normal reaction cancel each other out on the vertical axis, allowing us to treat the system as isolated on the horizontal axis. During the very brief interval of time that the collision lasts, the internal contact forces (impulsive forces) are orders of magnitude higher than any other external force, reinforcing the validity of considering the system as isolated for the momentum balance.

## Physical model

The standard one-dimensional impulsive collision model is adopted. This theoretical framework assumes that the bodies are rigid enough that contact is almost instantaneous, allowing the change in position of the centers of mass during the interaction to be neglected. The resolution is based on the simultaneous application of two principles:
1. The conservation of linear momentum of the complete system, which governs the velocity distribution based on masses.
2. Newton's law of restitution, which uses the parameter[[e]]to model the elastic response of the materials.

It is assumed that there is no rotation of the spheres and that the collision is central, eliminating any transverse component of velocity.

## Model justification

The choice of the model based on the coefficient of restitution[[e]]is physically justified by the need to simplify the contact phenomenology. In a real collision between metals or polymers, deformation waves, acoustic vibrations, and micro-fractures occur that dissipate energy in an extremely complex way. Attempting to resolve these interactions through the laws of elasticity of continuous media would require a level of computational detail that would obscure the fundamental physics of the problem. The coefficient[[e]]acts as a macroscopic "transfer function" that condenses all that micro-physics into a single experimental value, allowing a robust prediction of exit velocities without needing to know the temporal history of contact forces. It is the minimum necessary model to obtain a physically consistent solution.

## Symbolic solution

The analytical procedure consists of solving the system of coupled equations following these structural steps:

1. **Linear momentum conservation**:
   We establish that the total system momentum remains constant.

2. **Velocity restitution equation**:
   We use the fundamental definition of the parameter to bind the relative velocities:
{{f:e}}

3. **Effective inertia calculation**:
   To determine the dissipated energy, we first calculate the reduced mass[[mu]]of the binary system:
{{f:mu}}

4. **Energy balance calculation**:
   The kinetic energy loss[[DeltaK]]is quantified through the direct relationship with the coefficient:
{{f:perdida_energia}}

5. **Physical limit verification**:
   Every result must be consistent with the range of validity of the restitution parameter:
{{f:rango_e}}

6. **Additional rebound prediction**:
   If the system involves successive bounces, the decay formula for the n-th bounce height[[hn]]would be applied:
{{f:altura_rebote}}

## Numerical substitution

We insert the problem values into the previous expressions:

- **Linear momentum balance**:
  We multiply each mass by its velocity. We find that the total initial momentum is 10 kg m/s, which must equal the sum of the final momenta.

- **Restitution application**:
  The relative separation speed[[vrel_f]]is obtained by multiplying[[e]]by the initial relative speed:
{{f:vrel_f}}
  This tells us that the difference between the final velocities must be 3 m/s.

- **Calculating final velocities**:
  Solving the system of equations, we find that the final velocity of the first body[[v1f]]is 0.2 m/s and the final velocity of the second body[[v2f]]is 3.2 m/s.

- **Dissipated energy calculation**:
  Using the reduced mass[[mu]]of 1.2 kg and the dissipation factor, we find that the kinetic energy loss[[DeltaK]]is 9.6 Joules.

## Dimensional validation

It is imperative to verify that the results are dimensionally consistent. The velocities[[v1f]]and[[v2f]]are measured in meters per second, which is correct for a length-over-time magnitude. The coefficient[[e]]is obtained from the ratio of two velocity differences, resulting in a dimensionless number, consistent with the theory. Finally, the energy loss[[DeltaK]]has dimensions of energy, Joules in the International System, confirming the validity of the derivation.

## Physical interpretation

The results reveal a typical behavior of a partially inelastic collision. Both spheres continue their motion to the right after impact. The incident sphere[[m1]], despite being the one carrying all the initial momentum, has been practically stopped, retaining only a residual velocity of 0.2 m/s. This indicates that the momentum transfer to the target sphere[[m2]] has been almost total.

From a model standpoint, we verify that the obtained value for[[e]]is within the allowed physical range. The loss of 9.6 Joules represents exactly 64% of the initial relative kinetic energy available for the impact.

# Real-world example

## Context

Consider a quality control scenario in a sports materials factory. It is desired to verify compliance with regulations for a high-competition tennis ball. The standard procedure consists of a vertical free-fall test onto a perfectly rigid granite plate. The ball is released from an initial height[[h0]]of 2.00 meters. After impact, the maximum height of the first bounce[[hf]]is measured. In our test, a bounce height[[hf]]of 1.28 meters is recorded. It is required to determine the coefficient of restitution[[e]]of the batch and predict the maximum height after the third bounce[[hn]].

## Physical estimation

Before proceeding with the exact calculation, we perform a qualitative and quantitative preliminary reading. The ball has recovered exactly 64% of its original height. Since the maximum height[[hf]]is proportional to the square of the exit velocity, we estimate that the coefficient of restitution[[e]]must be the square root of this factor. Our quantitative estimation is that the value of[[e]]will be 0.80. This value of 0.80 suggests a ball with efficient elastic response, ideal for professional play.

## Interpretation

To obtain the precise technical value, we apply the experimental derivation formula:
{{f:e_desde_alturas}}
Substituting the measured values of 1.28 m and 2.00 m, we obtain a coefficient of restitution[[e]]exactly equal to 0.80.

To deepen the analysis, we can predict how much height the ball will retain after a given number of successive bounces, for example with a bounce count[[n]]equal to 3. Applying the geometric decay model to obtain the n-th bounce height[[hn]]:
{{f:altura_rebote}}
Calculating the result for the third bounce with the obtained value of 0.80, we find a height[[hn]]of 0.524 meters.

The causal interpretation of this result is fundamental: the ball loses 20% of its relative speed in each contact with the ground. This behavior illustrates why in sports such as tennis, the player must provide constant mechanical work to compensate for the inevitable dissipation that the coefficient[[e]]imposes at each impact with the surface.
\r
`;export{e as default};
