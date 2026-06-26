const e=`## Conceptual errors

### Error 1: Confusing constant speed with zero acceleration

**Why it seems correct**
The student mistakenly associates acceleration only with a change in the "numerical value" of velocity (speed). Since in UCM the [[v]] does not change, the linear intuition inherited from MRU suggests there should be no acceleration.

**Why it is incorrect**
Acceleration is a vector quantity that measures the change in the velocity vector. In UCM, although the magnitude remains constant, the direction changes continuously. This change in direction is, by definition, an acceleration (centripetal).

**Detection signal**
If the student draws a force diagram without any net force toward the center, or if they claim the particle would move in a circle spontaneously due to "circular inertia."

**Conceptual correction**
Any change in the velocity vector (whether in magnitude, direction, or sense) implies the existence of an acceleration. In curves, acceleration is non-negotiable.

**Contrast mini-example**
Imagine a stone tied to a string. If the acceleration were zero, the net force would be zero and the string would have no tension, as indicated by Newton's second law:

{{f:segunda_ley_newton}}

However, when the string is released, the stone flies straight, proving that before there was something (acceleration/force) forcing it to turn.

## Model errors

### Error 2: Assuming centripetal acceleration is an additional external force

**Why it seems correct**
In many problems, the student treats "centripetal force" as if it were an additional physical interaction (like gravity or friction) that must be added to the sum of forces.

**Why it is incorrect**
"Centripetal force" is not a new force, but the role played by the net force in a curved motion. It is the name we give to the component of the total force that points toward the center.

**Detection signal**
Presence of an Fc or [[ac]] label on a Free Body Diagram (FBD) as if it were an independent arrow from real interactions.

**Conceptual correction**
Centripetal acceleration is the kinematic result of real forces (tension, normal, weight). It is not added to them, but is equal to their radial resultant.

**Contrast mini-example**
In a car taking a curve, the friction force is the centripetal force. If you added them as two distinct forces, you would be doubling physical reality and predicting an acceleration twice as large as the real one.

## Mathematical errors

### Error 3: Mixing radians and degrees in the calculation of linear speed

**Why it seems correct**
Students are used to measuring angles in sexagesimal degrees (360°). When calculating velocity, they directly multiply the degrees by the radius because "an angle is an angle."

**Why it is incorrect**
The linear formula is derived from the geometric definition of a radian (arc/radius). If degrees are used, the result will be off by a factor of pi / 180, giving a physically erroneous value.

**Detection signal**
Extremely large linear velocity results (e.g., 180 m/s for a slow rotation) or dimensions that do not cancel correctly.

**Conceptual correction**
For any calculation linking angular quantities with linear quantities (meters), the [[theta]] must be in radians.

**Contrast mini-example**
If an object turns 1° in a circle of 1 m, the traveled [[s]] is barely 1.7 cm. If you used the formula with degrees (1 * 1), you would get an arc of 1 meter! A discrepancy of almost 60 times.

## Interpretation errors

### Error 4: Believing that centripetal acceleration points outward

**Why it seems correct**
Due to the sensation of "pulling" outward that we experience in a car or a fairground ride, the student interprets the object's acceleration as being toward the outside of the circle (confusion with centrifugal force).

**Why it is incorrect**
The outward sensation is an effect of the observer's inertia (fictitious force). From an inertial viewpoint (fixed outside the system), the particle is being "pushed" inward to prevent it from escaping along the tangent.

**Detection signal**
Acceleration vectors drawn outward from the circle or use of incorrect negative signs in Newton's second law.

**Conceptual correction**
The [[ac]] always, without exception, points toward the center of rotation. It is a "center-seeking" acceleration.

**Contrast mini-example**
If acceleration were outward, when cutting the string of a sling, the stone should be shot radially away from the thrower. Instead, it flies off tangentially, proving that acceleration was previously keeping it "held" toward the center.

## Quick self-control rule

To verify if your UCM analysis is consistent, apply the **Tangent Test**: imagine that at this precise moment all forces disappear. If your model predicts that the object keeps moving in a circle or flies outward, your model is wrong. In a correct UCM, when forces disappear, the object must move in a **straight tangential line** with the same speed it had.
`;export{e as default};
