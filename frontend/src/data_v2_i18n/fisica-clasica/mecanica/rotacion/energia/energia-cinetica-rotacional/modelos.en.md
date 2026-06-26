# Models for rotational kinetic energy

## Ideal model

The ideal model assumes a rigid body rotating about a fixed axis with constant moment of inertia. Under these conditions every point of the body shares the same [[omega]], and rotational energy is computed with

{{f:energia_rotacional_basica}}

. The axis does not move, the body does not deform, and no internal slipping occurs.

The model is powerful because it separates geometry, contained in [[I]], from kinematics, contained in [[omega]]. Once the axis is chosen, the problem becomes scalar. It is the natural model for disks on a shaft, fixed pulleys, ideal wheels, cylinders rotating about their center, and flywheels whose axis direction remains fixed.

## Hypotheses

The first hypothesis is rigidity: distances between material points remain constant. The second is a well-defined axis: the chosen [[I]] belongs to the actual axis of rotation. The third is common angular speed: different parts of the same ideal body do not spin independently. The fourth is that internal losses are not hidden inside [[Erot]], although they may be added later as dissipated energy.

The model also assumes [[omega]] is expressed in radians per second and that the moment of inertia does not change during the calculation. If mass moves inward, if a skater pulls in their arms, or if a mechanism shifts internal parts, [[I]] changes and the states must be treated separately.

## Quantitative validity domain

The model is quantitatively reliable when elastic deformation stores less than `5%` of the total energy, when the relative variation of moment of inertia satisfies `Delta I / I < 0.01`, and when angular speed remains below roughly `70%` of the rotor critical speed. For ordinary machines these conditions are often satisfied if the rotor is balanced and operated within design limits.

In rolling without slipping, the model remains valid for the rotational part, but it is not the whole kinetic energy. Translational kinetic energy of the center of mass must be added. In frictional braking, the formula gives [[Eroti]] and [[Erotf]], but the balance must include heat or extracted work. The model fails only when rotational energy is treated as the only term while other terms are physically present.

## Model failure signals

A clear failure signal is that different parts of the body have different angular speeds, as in flexible belts or stirred fluids. Another signal is a changing axis orientation with tensor coupling. The model also becomes incomplete when contact involves significant slipping and part of the mechanical energy is converted to heat.

Numerical results can reveal failure. Huge energies for small slow objects usually indicate unit errors. Negative energies indicate a wrong interpretation of angular direction. Final energies larger than possible without external work show that a source term is missing.

## Extended or alternative model

It is time to change model when a comparable energy term appears that the ideal model does not represent. The rolling model writes total kinetic energy as translation plus rotation. The dissipative model adds thermal energy. The three-dimensional model replaces scalar [[I]] with the inertia tensor. The variable-inertia model computes [[Erot]] in each state with its own moment of inertia and then uses angular momentum conservation or external work as required.

In engineering, a flexible rotor may require vibration modes and elastic energy. In a vehicle, the wheel energy adds to the chassis energy. In a generator, part of [[Wrot]] becomes electrical energy. These models do not reject the basic formula; they place it inside a fuller balance.

## Operational comparison

Use the ideal model when the axis is fixed, the body is rigid, and the question asks only for spin energy. Use the rolling model when the center of mass moves and a geometric constraint connects forward motion with spin. Use the dissipative model when braking, friction, or impact is present. Use the tensor model when the axis is not principal or orientation changes.

The practical decision is to ask what energy may be missing. If none is missing, [[Erot]] is enough. If the body translates, add translation. If it heats, add dissipation. If the axis changes, review the tensor. This prevents a correct formula from being used inside an incomplete model.