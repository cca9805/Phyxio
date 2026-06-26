const e=`# Common Errors in Rotation\r
\r
## Conceptual Errors\r
\r
### Error 1: Confusing force with [[torque]]\r
\r
#### Why it seems correct\r
In everyday experience, we associate force with the cause of motion. The student often believes that a large magnitude force will always produce a large rotation.\r
\r
#### Why it is incorrect\r
[[torque]] depends on the "lever arm." A force applied on the rotation axis has a zero lever arm and cannot generate rotation, regardless of its magnitude. Spin is a property of force and its geometry.\r
\r
#### Detection signal\r
The student adds forces instead of moments in the dynamic equation, or forgets to multiply by the perpendicular distance to the rotation axis.\r
\r
#### Conceptual correction\r
Always draw the force's line of action and find the minimum distance to the axis. Remember that [[torque]] is\r
\r
{{f:segunda-ley-rotacion}}\r
\r
.\r
\r
#### Mini-example\r
Trying to open a door by pushing right at the hinges: no matter how much force you exert, the door will not move because the lever arm is zero.\r
\r
### Error 2: Treating moment of inertia as a universal constant\r
\r
#### Why it seems correct\r
An object's mass is constant in classical mechanics, so the student assumes that the [[momento-de-inercia]] is also an intrinsic and invariable property.\r
\r
#### Why it is incorrect\r
The [[momento-de-inercia]] I critically depends on the chosen rotation axis. If you change the axis, you change the mass distribution and, therefore, the object's resistance to spinning.\r
\r
#### Detection signal\r
Using formulas from tables (like\r
\r
{{f:posicion-angular-definicion}}\r
\r
) without checking if the problem's axis matches the formula's symmetry axis.\r
\r
#### Conceptual correction\r
Always define the rotation axis before choosing the formula for I. If the axis is displaced, Steiner's Theorem must be applied.\r
\r
#### Mini-example\r
A rod is much easier to spin about its center than about one of its ends, even though the rod's mass is the same in both cases.\r
\r
## Model Errors\r
\r
### Error 3: Ignoring friction in pure rolling\r
\r
#### Why it seems correct\r
The term "rolling without slipping" falsely suggests that no friction is involved, or that the system is perfectly ideal and lossless.\r
\r
#### Why it is incorrect\r
For an object to accelerate angularly while rolling (like going down a ramp), a net [[torque]] is indispensable. This [[torque]] usually comes from static friction with the ground. Without friction, the object would only slide.\r
\r
#### Detection signal\r
The Free Body Diagram does not include the friction force at the contact point, despite the object accelerating.\r
\r
#### Conceptual correction\r
Identify what force is producing the change in [[velocidad-angular]]. If there are no applied forces other than weight, friction must be present to generate [[torque]].\r
\r
#### Mini-example\r
A cylinder going down a perfect ice ramp (without friction) would descend without spinning, maintaining its original orientation throughout the fall.\r
\r
## Mathematical Errors\r
\r
### Error 4: Not using radians in connection equations\r
\r
#### Why it seems correct\r
Sexagesimal degrees are the most familiar angle unit for students since primary education.\r
\r
#### Why it is incorrect\r
The equations linking the linear and angular worlds (\r
\r
{{f:relacion-lineal-angular-v}}\r
\r
,\r
\r
{{f:relacion-lineal-angular-v}}\r
\r
) are derived from the definition of arc in radians. Using degrees introduces an error factor of 57.3, invalidating the result.\r
\r
#### Detection signal\r
Numerical results for velocity or acceleration that are orders of magnitude larger than physically expected.\r
\r
#### Conceptual correction\r
Set your calculator to radians and perform all unit conversions (\r
\r
{{f:posicion-angular-definicion}}\r
\r
) at the beginning of the problem.\r
\r
#### Mini-example\r
If a 1 m wheel spins at 90^?/s, its tangential velocity is not 90 m/s (hurricane speed), but\r
\r
{{f:posicion-angular-definicion}}\r
\r
.\r
\r
## Interpretation Errors\r
\r
### Error 5: Believing that centripetal and angular acceleration are the same\r
\r
#### Why it seems correct\r
Both magnitudes carry the name "acceleration" and appear exclusively in circular motion contexts.\r
\r
#### Why it is incorrect\r
[[aceleracion-angular]] alpha changes the body's spin speed. Centripetal acceleration a_c is a linear component that only changes the velocity's direction to maintain the circular trajectory.\r
\r
#### Detection signal\r
The student attempts to use the rotational second law formula to find the centripetal force or adds angular magnitudes to linear ones directly.\r
\r
#### Conceptual correction\r
Distinguish between the change in "spin rate" (alpha) and the force needed to "keep the spin" (\r
\r
{{f:posicion-angular-definicion}}\r
\r
).\r
\r
#### Mini-example\r
A satellite in circular orbit has a constant centripetal acceleration (towards Earth) but its [[aceleracion-angular]] is zero because its spin speed does not change.\r
\r
## Quick Self-Control Rule\r
Before submitting, check: Have I defined the rotation axis? Have I used radians? Have I included friction if there is rolling? Does my [[momento-de-inercia]] correspond to the real axis? This routine avoids 90% of typical failures in rotation exams.`;export{e as default};
