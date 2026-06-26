const e=`# Error Audit: Levers

## Conceptual errors

### Error 1: Confusing a second-class lever with a third-class lever

**Why it seems correct**
It occurs due to the "effort saving" bias. Many students assume that any lever must multiply force to be useful. Since both have the support at one end, they are easily confused if one does not carefully observe which element is in the center of the rigid bar.

**Why it is incorrect**
Although both have the fulcrum at one end, their mechanical advantage is opposite. The second class always has a magnitude [[VM]] greater than unity (saves force), while the third class always has a magnitude [[VM]] less than unity (gains speed). Confusing them invalidates the analysis of the tool's functional purpose.

**Detection signal**
Obtaining a mechanical advantage greater than one in tools designed for agility or precision, such as laboratory tweezers or the human forearm when performing a fast movement.

**Conceptual correction**
Use the central element rule. Identify which magnitude is "locked" between the other two. If it is the resistance [[R]], it is 2nd class. If it is the effort [[P]], it is 3rd class.

**Mini-contrast example**
A wheelbarrow (2nd class) allows moving 100 kg with little effort; tweezers (3rd class) require more force in the fingers than they exert at the tip to gain tactile control.

## Model errors

### Error 2: Believing that a lever with great mechanical advantage saves work or energy

**Why it seems correct**
It is a sensory perception failure. Since using a long lever "costs us less" to move a heavy object, the brain erroneously interprets that we are performing less total work than if we lifted it by hand.

**Why it is incorrect**
It violates the Principle of Conservation of Energy. The lever is a force transformer, not an energy generator. The input work must be equal to the output work in an ideal model, fulfilling the law of conservation.

**Detection signal**
The student believes they have "discovered" a way to move objects spending less energy than the change in height of the payload requires.

**Conceptual correction**
Apply the Golden Rule of Mechanics: what you gain in force you pay for in distance. If the force is reduced to a tenth, your hand must travel ten times more linear distance.

**Mini-contrast example**
To lift a stone 10 cm with a lever that reduces the effort by half, your hand must necessarily descend 20 cm. The work performed (Force times distance) is the same.

## Mathematical errors

### Error 3: Measuring distances from the ends of the bar instead of from the fulcrum

**Why it seems correct**
This error stems from everyday linear measurement bias. We tend to use the physical end of an object (like a ruler or a board) as the natural zero point for measuring lengths for visual convenience.

**Why it is incorrect**
Lever physics is based on the balance of moments with respect to the rotation axis. In this context, the fulcrum is the only valid coordinate origin for calculating torques.

**Detection signal**
The student obtains force results that do not balance the system. The sum of the effort and resistance arms does not match the geometry relative to the central or lateral support point.

**Conceptual correction**
Always define the fulcrum as the zero point (x ≈ 0). All arm magnitudes [[bP]] and [[bR]] must necessarily originate from that pivot point.

**Mini-contrast example**
On a 3 m bar with the fulcrum 1 m from the left end, if you apply force at the right end, the arm is 2 m, not 3 m from the edge.

## Interpretation errors

### Error 4: Using mass in kilograms instead of weight in Newtons

**Why it seems correct**
It is a common unit confusion in daily life. Scales give us values in kilos, and we tend to treat that figure as the force the object exerts on the lever.

**Why it is incorrect**
The law of the lever requires the balance of moments, which are the product of a force by a distance. Mass is a scalar property that does not generate rotation; it is the weight force that generates the torque.

**Detection signal**
Use of incorrect units such as kg·m instead of N·m. The calculation will fail if the system is analyzed in gravity conditions other than Earth's.

**Conceptual correction**
Always multiply the mass by the acceleration of gravity to obtain the resistance [[R]] in Newtons before applying the equality of moments.

**Mini-contrast example**
A 10 kg block does not exert a moment of 10 units; it exerts a force of 98 N which, multiplied by the arm, gives the real physical torque.

## Quick self-control rule

Before finalizing your lever analysis, verify these three points:
1. **Belonging:** Have you correctly identified which of the forces is in the center to classify the class?
2. **Weighting:** Is the longest arm associated with the smallest force? (If not, the system will not be in equilibrium).
3. **Conservation:** Have you checked that the product of force by distance is constant on both sides (Work)?
`;export{e as default};
