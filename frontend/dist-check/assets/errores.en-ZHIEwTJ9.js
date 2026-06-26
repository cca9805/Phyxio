const e=`# Common errors in 2D angular scattering

## Conceptual errors

### Error 1: Ignoring the vector nature of the collision
**Why it seems correct**: The brain tends to simplify problems by adding speeds directly as if they were scalars in a single dimension.
**Why it is incorrect**: In 2D, linear momentum is conserved as a vector. Adding [[v1f]] and [[v2f]] without considering their angles [[theta1]] and [[theta2]] violates the geometry of space and Newton's laws.
**Detection sign**: If by adding the final speeds you obtain a value equal to or greater than the initial one without applying sines or cosines, you are making this error.
**Conceptual correction**: Always decompose velocity into X and Y components before performing any addition or balance.
**Mini-example**: If you throw a ball at 1 m/s, the exit speeds could be [[v1f]] = 0.7 m/s and [[v2f]] = 0.7 m/s at 45 degrees. The scalar sum is 1.4 m/s (incorrect), but the vector sum is 1 m/s (correct).

### Error 2: Assuming angles always sum to 90 degrees
**Why it seems correct**: It is a famous result taught as a general rule in billiards and introductory physics.
**Why it is incorrect**: This rule is only valid for perfectly elastic collisions between identical masses where the target is initially at rest.
**Detection sign**: Applying that [[theta_total]] = 90° when masses are different or the collision is inelastic.
**Conceptual correction**: Calculate angles individually using momentum balances for each axis unless all restrictive conditions are met.
**Mini-example**: In a collision between a bowling ball [[m1]] and a ping-pong ball [[m2]], the opening angle will be much less than 90 degrees.

## Model errors

### Error 3: Confusing reference axes
**Why it seems correct**: Arbitrary axes are chosen that seem to facilitate drawing but complicate algebra.
**Why it is incorrect**: The leaf's standard model defines the X-axis as the incident direction of [[v1i]]. Changing this without adjusting trigonometric functions leads to projection errors.
**Detection sign**: Obtaining that initial vertical momentum is not zero when it should be according to the standard setup.
**Conceptual correction**: Always align the incident vector with the X-axis. Thus, the initial Y-momentum will always be zero by definition.
**Mini-example**: If the ball enters diagonally, mentally rotate it so it enters horizontally before applying the core formulas.

### Error 4: Applying energy conservation in inelastic collisions
**Why it seems correct**: There is an idea that energy "is always conserved" (which is true for total energy, but not for mechanical kinetic energy).
**Why it is incorrect**: In real collisions, part of the energy is converted into heat or deformation. Using the elastic energy balance in an inelastic collision overestimates the final speeds.
**Detection sign**: The problem statement mentions "energy loss" or "plastic collision" and you still equate [[Ki]] to [[Kf]].
**Conceptual correction**: Use only linear momentum balances, which are conserved regardless of the impact's elasticity.
**Mini-example**: In a car crash that leaves them dented, the final kinetic energy [[Kf]] is drastically lower than the initial [[Ki]].

## Mathematical errors

### Error 5: Swapping sine and cosine in projections
**Why it seems correct**: Quick confusion when identifying the angle with the adjacent or opposite axis.
**Why it is incorrect**: The X-axis (incidence) requires the cosine for the parallel component, while the Y-axis requires the sine for the lateral one.
**Detection sign**: Obtaining Y-momentum components that do not cancel correctly.
**Conceptual correction**: Remember that the component that "closes" the angle with the X-axis is always the cosine.
**Mini-example**: For a 30° angle, the forward component is [[v1f]] * cos(30°), not [[v1f]] * sin(30°).

### Error 6: Not solving correctly in two-equation systems
**Why it seems correct**: The 2D equation system can become algebraically dense and intermediate steps are omitted.
**Why it is incorrect**: You have two independent equations (X and Y) and two main unknowns ([[v1f]] and [[v2f]]). A sign error when solving invalidates both results.
**Detection sign**: Negative or imaginary speed values when solving the square root of energy.
**Conceptual correction**: Solve for one variable in the Y-equation (which is simpler since it equals zero) and substitute it into the X-equation.
**Mini-example**: If from Y you get [[v1f]] = [[v2f]], ensure this is physically possible according to the given angles.

## Interpretation errors

### Error 7: Ignoring the meaning of a negative angle
**Why it seems correct**: Angles are assumed as absolute values in the first quadrant.
**Why it is incorrect**: Physically, if one body leaves "up," the other must leave "down." Ignoring this in the lateral momentum balance leads to believing that momentum is created from nothing.
**Detection sign**: Writing that the sum of vertical momenta is positive instead of zero.
**Conceptual correction**: Consider that [[theta2]] represents an opposite direction to [[theta1]]. In formulas, this is reflected in the negative sign of the vertical component of the second body.
**Mini-example**: Two balls both leaving upward after colliding horizontally is a physically impossible event.

### Error 8: Believing angular scattering is independent of masses
**Why it seems correct**: It is thought that only "the angle at which it is hit" matters.
**Why it is incorrect**: The mass ratio [[m1]]/[[m2]] dictates the maximum possible angle and energy distribution.
**Detection sign**: Using the same solution for a billiard collision as for a neutron colliding with a heavy nucleus.
**Conceptual correction**: Always verify how each body's inertia affects the final deviation. Masses are the "weights" that determine which vector has more influence.
**Mini-example**: A truck [[m1]] barely deflects when hitting a mosquito [[m2]] laterally, regardless of the impact angle.

## ## Quick self-control rule
To validate your result instantly, check the balance on the Y-axis: the product [[m1]] * [[v1f]] * sin([[theta1]]) must be equal to [[m2]] * [[v2f]] * sin([[theta2]]). If they do not match, your exit geometry is incorrect. Also, in any passive collision, the projectile's final speed [[v1f]] must be strictly less than or equal to the initial [[v1i]]. If you obtain a higher velocity, you have accidentally "created" energy in your calculations.
`;export{e as default};
