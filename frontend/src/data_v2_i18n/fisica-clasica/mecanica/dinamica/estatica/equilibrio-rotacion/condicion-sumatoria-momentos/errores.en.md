# Common Errors: Net Torque Balance Condition

## Conceptual errors

### Error 1: equalizing forces instead of torques

**Why it seems correct**
In translational equilibrium, forces are compared, so the same idea may be applied without checking rotation.

**Why it is incorrect**
Rotational equilibrium depends on [[tau1]] and [[tau2]], not only on [[F1]] and [[F2]]. Arms and angles change the effect of each force.

**Detection sign**
One writes [[F2]] = [[F1]] even though [[r1]] and [[r2]] are different.

**Conceptual correction**
Compare torques and require [[tau_net]] = 0.

**Mini-example**
A 40 N force at 0.75 m can balance 60 N at 0.50 m if they act in opposite rotation senses.

### Error 2: thinking zero net torque means absence of forces

**Why it seems correct**
If the system does not rotate, it may seem that nothing acts on it.

**Why it is incorrect**
Several forces may act while their torques cancel.

**Detection sign**
A real force is discarded because the problem states equilibrium.

**Conceptual correction**
Distinguish rotational equilibrium from absence of interaction.

**Mini-example**
A balanced scale has weights on both sides even though [[tau_net]] is zero.

## Model errors

### Error 3: mixing different pivots

**Why it seems correct**
Each individual torque may be computed correctly.

**Why it is incorrect**
The torque sum only makes sense if all torques are computed about the same axis.

**Detection sign**
[[tau1]] is measured from one end and [[tau2]] from another without transforming the setup.

**Conceptual correction**
Choose one pivot before computing any arm.

**Mini-example**
A torque about the center cannot be subtracted from a torque about an end and called [[tau_net]].

### Error 4: using total length instead of arm

**Why it seems correct**
The bar length is visible and easy to copy.

**Why it is incorrect**
The arm [[r1]] or [[r2]] is the distance from the axis to the corresponding line of action.

**Detection sign**
The same length value is used for forces applied at different points.

**Conceptual correction**
Mark the pivot and measure each arm from that point.

**Mini-example**
In a 1 m bar with a central pivot, a force at the end has a 0.5 m arm, not a 1 m arm.

## Mathematical errors

### Error 5: adding magnitudes and losing signs

**Why it seems correct**
Torque magnitudes are positive and easier to handle.

**Why it is incorrect**
Cancellation depends on sign. Opposite torques must be subtracted algebraically.

**Detection sign**
Two equal and opposite torques produce a nonzero [[tau_net]].

**Conceptual correction**
Fix the positive rotation sense before substituting numbers.

**Mini-example**
If [[tau1]] = 30 N m and [[tau2]] = 30 N m in the opposite sense, net torque is zero in this leaf convention.

### Error 6: forgetting the sine of the angle

**Why it seems correct**
When the force is perpendicular, the sine is one and the factor is not noticed.

**Why it is incorrect**
If [[theta1]] or [[theta2]] is not 90°, only part of the force produces rotation.

**Detection sign**
The calculation does not change when [[theta2]] changes.

**Conceptual correction**
Include the angular factor in each individual torque.

**Mini-example**
A force aligned with the radius produces no torque even if its magnitude is large.

## Interpretation errors

### Error 7: interpreting [[Feq]] as torque

**Why it seems correct**
[[Feq]] appears after imposing a condition on torques.

**Why it is incorrect**
[[Feq]] is a force; its units are N, not N m.

**Detection sign**
The balancing-force result is expressed in N m.

**Conceptual correction**
Check that torque has been divided by an effective arm.

**Mini-example**
If 30 N m must be compensated from 0.75 m, the required force is 40 N.

### Error 8: forgetting that translational equilibrium may also be required

**Why it seems correct**
The statement may focus on the torque sum.

**Why it is incorrect**
Complete static equilibrium also requires zero net force.

**Detection sign**
The body is declared at rest only because [[tau_net]] = 0.

**Conceptual correction**
Read this leaf as the rotational condition and check forces when the problem requires it.

**Mini-example**
Two equal parallel forces applied at the same point may have zero net torque and nonzero net force.

## Quick self-control rule

Before finishing, check one axis, one sign convention, arms from the pivot, angles relative to the radius, N m units for torques, and [[tau_net]] close to zero if equilibrium is claimed.
