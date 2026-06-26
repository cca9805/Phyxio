# Common Errors: Mechanical Advantage

## Conceptual errors

### Error 1: believing [[VM]] is real performance

**Why it seems correct**
Ideal advantage seems to state how much the machine helps.

**Why it is incorrect**
[[VM]] only describes ideal geometry. Real performance is read with [[VM_r]] and [[eta]].

**Detection sign**
The real force is expected to match the ideal force exactly.

**Conceptual correction**
Separate ideal design, real measurement, and efficiency.

**Mini-example**
A lever with [[VM]] = 4 may deliver [[VM_r]] = 3.2 if losses exist.

### Error 2: thinking high advantage is always better

**Why it seems correct**
Large [[VM]] reduces ideal force.

**Why it is incorrect**
It may require more displacement, lower speed, or an uncomfortable design.

**Detection sign**
The largest [[VM]] is always chosen without considering function.

**Conceptual correction**
Interpret advantage together with displacement, speed, and control.

**Mini-example**
A precision mechanism may prefer [[VM]] smaller than 1 to gain control.

## Model errors

### Error 3: mixing ideal and real configurations

**Why it seems correct**
The data seem to belong to the same machine.

**Why it is incorrect**
[[VM]], [[VM_r]], and [[eta]] must refer to the same geometry and load.

**Detection sign**
[[d_P]] from one fulcrum position is used with [[P]] measured in another.

**Conceptual correction**
Record configuration, load, and fulcrum position for every measurement.

**Mini-example**
Do not compare [[VM]] from a long lever with [[VM_r]] measured after shortening the arm.

### Error 4: using mass as load

**Why it seems correct**
Everyday language speaks of lifting “kilograms.”

**Why it is incorrect**
[[R]] is a force in newtons, not a mass in kg.

**Detection sign**
20 kg is substituted directly as [[R]] = 20 N.

**Conceptual correction**
Convert mass to weight when the load is weight.

**Mini-example**
A 20 kg mass weighs about 196 N near Earth.

## Mathematical errors

### Error 5: reversing the arm ratio

**Why it seems correct**
Both arms appear in a quotient.

**Why it is incorrect**
In this leaf, [[VM]] is computed as [[d_P]] divided by [[d_R]].

**Detection sign**
A lever with a long input arm gives advantage smaller than 1.

**Conceptual correction**
First state which arm belongs to effort and which to load.

**Mini-example**
If [[d_P]] = 1 m and [[d_R]] = 0.25 m, [[VM]] = 4.

### Error 6: mixing percentages in efficiency

**Why it seems correct**
Efficiency is often expressed as a percentage.

**Why it is incorrect**
The formula uses compatible decimal ratios. Mixing 80 with 0.8 changes the result.

**Detection sign**
[[eta]] becomes 80 instead of 0.8.

**Conceptual correction**
Compute as a ratio first and convert to percent only at the end.

**Mini-example**
[[VM_r]] = 3.2 and [[VM]] = 4 give [[eta]] = 0.8, or 80 percent.

## Interpretation errors

### Error 7: accepting [[eta]] greater than 1 without checking

**Why it seems correct**
It may look like the real machine beats the ideal design.

**Why it is incorrect**
In the ordinary model, real advantage should not exceed ideal advantage without changing model.

**Detection sign**
[[VM_r]] is greater than [[VM]] for the same data.

**Conceptual correction**
Check units, configuration, and measurements.

**Mini-example**
If [[VM]] = 4 and [[VM_r]] = 5, data were probably mixed.

### Error 8: using mechanical advantage to classify levers

**Why it seems correct**
Advantage describes an important lever function.

**Why it is incorrect**
Class depends on the spatial order of fulcrum, effort, and load.

**Detection sign**
Every lever with [[VM]] greater than 1 is called second class.

**Conceptual correction**
Use the lever-types leaf to classify and this leaf to quantify performance.

**Mini-example**
A first-class lever may also have [[VM]] greater than 1.

## Quick self-control rule

Before finishing, check that arms and forces belong to the same configuration, forces are in newtons, [[VM]] uses arms, [[VM_r]] uses real forces, and [[eta]] lies between 0 and 1.
