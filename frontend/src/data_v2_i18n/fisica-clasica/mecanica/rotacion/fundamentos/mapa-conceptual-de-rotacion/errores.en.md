# Common Errors in Rotation

## Conceptual Errors

### Error 1: Confusing force with [[torque]]

#### Why it seems correct
In everyday experience, we associate force with the cause of motion. The student often believes that a large magnitude force will always produce a large rotation.

#### Why it is incorrect
[[torque]] depends on the "lever arm." A force applied on the rotation axis has a zero lever arm and cannot generate rotation, regardless of its magnitude. Spin is a property of force and its geometry.

#### Detection signal
The student adds forces instead of moments in the dynamic equation, or forgets to multiply by the perpendicular distance to the rotation axis.

#### Conceptual correction
Always draw the force's line of action and find the minimum distance to the axis. Remember that [[torque]] is

{{f:segunda-ley-rotacion}}

.

#### Mini-example
Trying to open a door by pushing right at the hinges: no matter how much force you exert, the door will not move because the lever arm is zero.

### Error 2: Treating moment of inertia as a universal constant

#### Why it seems correct
An object's mass is constant in classical mechanics, so the student assumes that the [[momento-de-inercia]] is also an intrinsic and invariable property.

#### Why it is incorrect
The [[momento-de-inercia]] I critically depends on the chosen rotation axis. If you change the axis, you change the mass distribution and, therefore, the object's resistance to spinning.

#### Detection signal
Using formulas from tables (like

{{f:posicion-angular-definicion}}

) without checking if the problem's axis matches the formula's symmetry axis.

#### Conceptual correction
Always define the rotation axis before choosing the formula for I. If the axis is displaced, Steiner's Theorem must be applied.

#### Mini-example
A rod is much easier to spin about its center than about one of its ends, even though the rod's mass is the same in both cases.

## Model Errors

### Error 3: Ignoring friction in pure rolling

#### Why it seems correct
The term "rolling without slipping" falsely suggests that no friction is involved, or that the system is perfectly ideal and lossless.

#### Why it is incorrect
For an object to accelerate angularly while rolling (like going down a ramp), a net [[torque]] is indispensable. This [[torque]] usually comes from static friction with the ground. Without friction, the object would only slide.

#### Detection signal
The Free Body Diagram does not include the friction force at the contact point, despite the object accelerating.

#### Conceptual correction
Identify what force is producing the change in [[velocidad-angular]]. If there are no applied forces other than weight, friction must be present to generate [[torque]].

#### Mini-example
A cylinder going down a perfect ice ramp (without friction) would descend without spinning, maintaining its original orientation throughout the fall.

## Mathematical Errors

### Error 4: Not using radians in connection equations

#### Why it seems correct
Sexagesimal degrees are the most familiar angle unit for students since primary education.

#### Why it is incorrect
The equations linking the linear and angular worlds (

{{f:relacion-lineal-angular-v}}

,

{{f:relacion-lineal-angular-v}}

) are derived from the definition of arc in radians. Using degrees introduces an error factor of 57.3, invalidating the result.

#### Detection signal
Numerical results for velocity or acceleration that are orders of magnitude larger than physically expected.

#### Conceptual correction
Set your calculator to radians and perform all unit conversions (

{{f:posicion-angular-definicion}}

) at the beginning of the problem.

#### Mini-example
If a 1 m wheel spins at 90^?/s, its tangential velocity is not 90 m/s (hurricane speed), but

{{f:posicion-angular-definicion}}

.

## Interpretation Errors

### Error 5: Believing that centripetal and angular acceleration are the same

#### Why it seems correct
Both magnitudes carry the name "acceleration" and appear exclusively in circular motion contexts.

#### Why it is incorrect
[[aceleracion-angular]] alpha changes the body's spin speed. Centripetal acceleration a_c is a linear component that only changes the velocity's direction to maintain the circular trajectory.

#### Detection signal
The student attempts to use the rotational second law formula to find the centripetal force or adds angular magnitudes to linear ones directly.

#### Conceptual correction
Distinguish between the change in "spin rate" (alpha) and the force needed to "keep the spin" (

{{f:posicion-angular-definicion}}

).

#### Mini-example
A satellite in circular orbit has a constant centripetal acceleration (towards Earth) but its [[aceleracion-angular]] is zero because its spin speed does not change.

## Quick Self-Control Rule
Before submitting, check: Have I defined the rotation axis? Have I used radians? Have I included friction if there is rolling? Does my [[momento-de-inercia]] correspond to the real axis? This routine avoids 90% of typical failures in rotation exams.