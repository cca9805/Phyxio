const e=`# Common Errors: Linear Momentum [[p]]

## Conceptual Errors

### Error 1: Confusing Linear Momentum [[p]] with Kinetic Energy [[K]]

**Why it seems correct**
Both magnitudes depend exclusively on mass[[m]]and velocity[[v]]. For a student starting in dynamics, it seems they are describing "the same thing": the state of a moving object. The confusion is worsened because when one increases, the other usually does too.

It is common to believe that if linear momentum is conserved, kinetic energy must also be conserved, or vice-versa. They are perceived as two names for the same "amount of vigor" the body carries.

**Why it is incorrect**
Momentum[[p]]is a **vector** magnitude that depends linearly on velocity. Its conservation is linked to the symmetry of space. In contrast, energy[[K]]is a **scalar** that depends on the square of velocity and is linked to the symmetry of time.

In most real (inelastic) collisions, momentum is perfectly conserved while kinetic energy is transformed into heat or deformation. Ignoring this distinction prevents understanding why a car can be wrecked (energy loss) while still moving after the impact (momentum conservation).

**Detection signal**
Trying to add momenta of bodies moving in different directions as if they were simple numbers (scalars), or trying to apply kinetic energy conservation in a collision where objects stick together (plastic collision).

**Conceptual correction**
Remember: Momentum[[p]]measures the persistence of the **path** (vector), while energy[[K]]measures the **transformation capacity** (scalar). For momentum, direction is everything; for energy, direction is irrelevant.

**Contrast mini-example**
If you double a car's speed, its linear momentum[[p]]doubles (it is twice as hard to deflect), but its kinetic energy[[K]]quadruples. This explains why an accident at 100 km/h is much more than "twice" as bad as one at 50 km/h: linear momentum doubles, but the energetic destruction capacity multiplies by four.

---

## Model Errors

### Error 2: Ignoring the Vector Nature in Two-Dimensional Analysis

**Why it seems correct**
Operating only with vector magnitudes drastically simplifies the algebra. The brain tends to look for the fastest solution, and "adding numbers" is more intuitive than "adding arrows" through components or trigonometry.

It is often thought that if the system has a "total quantity of motion," this can be found by adding the absolute values of what each part carries, ignoring that motion in one axis cannot compensate for that in the other.

**Why it is incorrect**
Direction is an intrinsic property of linear momentum. Two massive bodies colliding head-on can have huge individual momenta, but the system's total momentum can be zero if their vectors are opposite.

By ignoring vectors, Newton's laws are violated. An impulse applied along the X-axis cannot, under any circumstances, generate linear momentum along the Y-axis. Without vectors, the analyst loses the ability to predict the final direction of the system after an oblique impact.

**Detection signal**
Obtaining a total final momentum greater than the initial in an isolated system simply by having added the "values" of the momenta without considering that some bodies were moving in opposite directions or along different axes.

**Conceptual correction**
Always decompose the analysis into independent components:

{{f:momentum_x}}

and

{{f:momentum_y}}

Treat each axis as a separate balance problem. The total vector is only recomposed at the end through the magnitude:

{{f:momentum_magnitude}}

**Contrast mini-example**
Two 0.2 kg billiard balls colliding head-on at 1 m/s each have a momentum of 0.2 kg·m/s. If you ignore vectors, you would say the system has 0.4 kg·m/s of momentum. However, after the collision, if they stop, the momentum is 0. Real physics tells us the initial momentum was already 0 (0.2 - 0.2), not 0.4.

---

## Mathematical Errors

### Error 3: Sign Error in the Calculation of Variation [[DeltaP]]

**Why it seems correct**
Subtracting the smaller magnitude from the larger to avoid handling negative signs is a constant temptation. It is believed that a "negative" momentum change has no physical meaning or that the sign is just a mathematical formality that can be added at the end "by common sense."

In bounce problems, the student usually sees that the speed does not change and erroneously concludes that the momentum change is zero, as they "subtract" the final speed from the initial without considering the change in direction.

**Why it is incorrect**
Variation is strictly defined as final state minus initial state:

{{f:momentum_change}}

A sign change in [[DeltaP]] reverses the direction of the calculated force[[Fnet]]. In physics, the sign is the direction; ignoring it is ignoring where the force pushes.

In a bounce, the velocity changes direction (from $+v$ to $-v$). The subtraction $(-v) - (+v)$ gives $-2v$, a huge change. If the sign is ignored, the subtraction would give zero, which would imply the wall has exerted no force on the object to make it bounce—a physical impossibility.

**Detection signal**
Obtaining a zero or very small variation value in situations where there is an obvious path change or violent braking. Also, obtaining average forces[[Fnet]]that point in the direction of travel during braking.

**Conceptual correction**
Strictly maintain the operational order: Final minus Initial. If the object bounces, the final state MUST carry an opposite sign to the initial in your balance equations.

**Contrast mini-example**
A ball hits the ground with [[Pinicial]] = 10 kg·m/s (downward) and bounces with [[Pfinal]] = 10 kg·m/s (upward). If you choose "up" as positive, then [[Pinicial]] = -10 and [[Pfinal]] = +10. The variation is 10 - (-10) = 20 kg·m/s. If you do 10 - 10 = 0, you would be saying that the ground did not have to push the ball to launch it upward.

---

## Interpretation Errors

### Error 4: Confusing Speed with Quantity of Motion

**Why it seems correct**
In everyday language, "carrying a lot of momentum" or having "a lot of inertia" is associated almost exclusively with going very fast. The brain prioritizes visual information about velocity[[v]]over less obvious information about mass[[m]].

There is a tendency to think that a very small object at high speed is always harder to stop than a massive object moving slowly, based on the visual impression of the "danger" of speed.

**Why it is incorrect**
Linear momentum[[p]]is a magnitude proportional to both factors. Mass is the scaling factor: a 10% increase in mass has exactly the same effect on momentum as a 10% increase in velocity.

Underestimating mass leads to fatal errors in interpreting industrial or nautical risks. A merchant ship at only 1 km/h has such a massive quantity of motion that no human force can stop it in a short interval, even though its speed seems "insignificant."

**Detection signal**
Concluding that an object is harmless in a collision based only on its low speed, or not understanding why so much force is needed to deflect the path of a heavy object even if it barely moves.

**Conceptual correction**
Always integrate both factors into your analysis. Ask yourself: "How much does what is moving weigh?". Linear momentum is "mass in motion," not just speed.

**Contrast mini-example**
A mosquito flying at 50 m/s (very fast) has a linear momentum of about 0.001 kg·m/s; you can stop it with a thread. A 20-ton truck moving at only 0.01 m/s (almost imperceptible) has a momentum of 200 kg·m/s. The truck, though it seems "stopped," has 200,000 times more dragging capacity than the mosquito.

---

## Quick Self-Control Rule

Before submitting your result, apply this three-step audit:

1.  **Vector Audit**: Does your final result have the correct sign according to the axis you chose? If the object brakes or bounces,[[DeltaP]]must point in the opposite direction to the initial motion.
2.  **Mass Audit**: Have you verified that mass[[m]]is included? A linear momentum result that only depends on velocity is, by definition, incorrect.
3.  **Units Audit**: Is the result in kg·m/s? If you used force and time, check that N·s gives the same dimension: $[M L T^{-2} \\cdot T] = [M L T^{-1}]$.
4.  **Cause Coherence**: Does the average force[[Fnet]]you calculated point in the same direction as the momentum change[[DeltaP]]? If not, there is a sign error in the balance.
`;export{e as default};
