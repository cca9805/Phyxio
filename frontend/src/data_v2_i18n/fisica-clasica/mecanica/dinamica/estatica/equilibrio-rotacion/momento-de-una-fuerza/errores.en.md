# Common Errors: Torque of a Force

## Conceptual errors

### Error 1: believing a large force always produces large torque

**Why it seems correct**
Force appears to be the direct cause of rotation.

**Why it is incorrect**
Torque also depends on the perpendicular arm [[d_perp]]. A large force may produce no rotation if it passes through the axis.

**Detection sign**
A large [[tau]] is predicted only because [[F]] is large, without checking geometry.

**Conceptual correction**
Before calculating, draw the line of action and measure the effective arm.

**Mini-example**
A 100 N force aligned with the radius produces zero torque.

### Error 2: confusing torque with rotational equilibrium

**Why it seems correct**
Torque is later used in equilibrium problems.

**Why it is incorrect**
This leaf computes one individual contribution. Equilibrium requires summing several contributions.

**Detection sign**
One concludes whether a body rotates or not from one isolated force.

**Conceptual correction**
Read [[tau]] as turning tendency, not as the final motion decision.

**Mini-example**
One force may produce [[tau]], but another opposite force may cancel it.

## Model errors

### Error 3: using [[r]] as if it were always [[d_perp]]

**Why it seems correct**
In the perpendicular case, both values coincide.

**Why it is incorrect**
If the force is oblique, the effective arm is [[d_perp]], not the whole radial distance [[r]].

**Detection sign**
The calculation gives the same torque for every [[theta]].

**Conceptual correction**
Use the geometric arm relation before computing torque.

**Mini-example**
With [[theta]] = 30°, the effective arm is smaller than [[r]].

### Error 4: measuring the angle relative to the ground

**Why it seems correct**
The angle to the horizontal is often easy to see in a drawing.

**Why it is incorrect**
The formula uses [[theta]] as the angle between force and radius from the axis.

**Detection sign**
A force perpendicular to the radius does not give maximum torque.

**Conceptual correction**
Draw the radius from the axis to the application point and measure the angle relative to that radius.

**Mini-example**
A vertical force is not always perpendicular to the radius; it depends on radius orientation.

## Mathematical errors

### Error 5: forgetting the sine

**Why it seems correct**
If the first example is perpendicular, the sine is one and seems unnecessary.

**Why it is incorrect**
For oblique forces, the sine decides what part of [[r]] produces rotation.

**Detection sign**
One uses [[tau]] = [[r]] times [[F]] even when [[theta]] is not 90°.

**Conceptual correction**
Compute [[d_perp]] first or use the complete trigonometric form.

**Mini-example**
With 40 N, 0.30 m, and 60°, torque is less than 12 N m.

### Error 6: giving incorrect units

**Why it seems correct**
N m has the same dimension as joule and may be confused with energy.

**Why it is incorrect**
Torque is expressed in N m and interpreted as turning tendency, not work.

**Detection sign**
The result is written in N, m, or J without stating that it is torque.

**Conceptual correction**
Keep the unit N m for [[tau]] and explain its rotational meaning.

**Mini-example**
6 N m describes turning capability, not 6 J of work done.

## Interpretation errors

### Error 7: ignoring torque sign

**Why it seems correct**
Magnitude formulas use positive quantities.

**Why it is incorrect**
The sign of [[tau]] indicates clockwise or counterclockwise sense according to the convention.

**Detection sign**
Torques of opposite rotation sense are compared as if they had the same sign.

**Conceptual correction**
Fix a positive sense before interpreting the result.

**Mini-example**
Two forces may have the same torque magnitude and opposite rotation senses.

### Error 8: thinking increasing force is the only way to increase torque

**Why it seems correct**
Force appears as a multiplying factor in the formula.

**Why it is incorrect**
[[tau]] can also be increased by increasing [[d_perp]] or making the force more perpendicular.

**Detection sign**
More force is always proposed even when the arm could be lengthened.

**Conceptual correction**
Review force, arm, and angle as three separate controls.

**Mini-example**
A longer wrench increases torque with the same applied force.

## Quick self-control rule

Before finishing, check defined axis, line of action, perpendicular arm, correct angle, N m units, and rotation sign.
