const e=`# Common Errors: Compound Pulleys

## Conceptual Errors

### Error 1: Counting Pulleys Instead of Supporting Segments

**Why it seems correct**
Visually, pulleys are prominent objects easy to count. It is intuitive to think that "more pulleys = more mechanical advantage".

**Why it is wrong**
Mechanical advantage depends on the number of rope segments directly supporting the load, not the number of pulleys. A movable pulley can contribute one or two segments depending on configuration. Counting pulleys instead of segments leads to incorrectly calculated mechanical advantage.

**Detection signal**
If your force calculation gives values that do not match practical experience (too high or too low), you are probably miscounting segments.

**Conceptual correction**
Draw the complete system and trace each rope segment from the load to the pulling point. Each segment coming from a movable pulley or the load counts toward [[nSel]]. Segments that only change direction on fixed pulleys do not increase mechanical advantage.

**Mini-example contrast**
A system with three movable pulleys can have 6 segments (optimal configuration) or only 3 segments (alternative configuration). Counting three pulleys does not distinguish these cases.

### Error 2: Ignoring Pulley Self-Weight

**Why it seems correct**
Pulley weight seems negligible compared to the load, especially in small systems.

**Why it is wrong**
In systems with multiple movable pulleys or light loads, the accumulated weight of the pulleys can be significant. Ignoring it makes the calculated force less than actually required.

**Detection signal**
If the real measured force is systematically greater than calculated by a constant margin, pulley weight is not being considered.

**Conceptual correction**
Add the weight of all movable pulleys to the useful load [[W]] before applying the formula. Fixed pulley weight does not affect traction.

**Mini-example contrast**
A system with two movable pulleys of 2 kg each lifting a 10 kg load. The effective weight is 14 kg, not 10 kg. The ideal force with 4 segments is 34.3 N, not 24.5 N.

## Model Errors

### Error 3: Assuming Constant Efficiency Regardless of Load

**Why it seems correct**
Efficiency [[eta]] is an equipment parameter, so it should be constant for a given system.

**Why it is wrong**
Efficiency varies with load: at very small loads, axle friction and rope stiffness dominate; at very large loads, elastic deformation and slipping become important. Using a single [[eta]] value for all calculations introduces errors.

**Detection signal**
If the relationship between measured force and load is not linear, efficiency is not constant.

**Conceptual correction**
For precise calculations, use typical efficiency curves or measure [[eta]] experimentally for the expected load range. For quick estimates, use conservative [[eta]] values (lower).

**Mini-example contrast**
A system with measured efficiency of 0.95 at 500 kg may have efficiency of only 0.75 at 50 kg due to constant friction effects that become relatively more important.

### Error 4: Applying Ideal Model to Severely Worn Systems

**Why it seems correct**
Model formulas are valid regardless of equipment condition, as long as pulleys and rope exist.

**Why it is wrong**
Pulleys with worn axles, deteriorated ropes, or lack of lubrication have very low efficiencies that may not satisfy model hypotheses. The ideal model assumes modest losses.

**Detection signal**
If the required force is comparable to the total weight (mechanical advantage near 1), the system has severe losses.

**Conceptual correction**
When [[eta]] falls below 0.6, the global efficiency model begins to fail. The physical system needs inspection, not just recalculation with another [[eta]] value.

**Mini-example contrast**
A construction hoist with 4 segments requiring force equal to the load weight has effective efficiency of 0.25, indicating severe mechanical failure (locked axles or slipping rope).

## Mathematical Errors

### Error 5: Incorrectly Solving the Real Force Formula

**Why it seems correct**
Algebraically, solving for [[F_real]] from the efficiency equation seems like a trivial step.

**Why it is wrong**
Confusing the position of [[eta]] in the denominator: some students write [[F_real]] as [[W]] divided by [[nSel]], then multiply by [[eta]], instead of dividing by the product [[nSel]] × [[eta]]. This gives calculated forces lower than real ones, which is dangerous.

**Detection signal**
If [[F_real]] results smaller than [[F_ideal]], there is an algebraic error. Real force must always be greater than ideal.

**Conceptual correction**
Remember that [[eta]] is in the denominator: higher efficiency (closer to 1) means lower real force. Lower efficiency (more losses) means higher force. Always verify that [[F_real]] > [[F_ideal]].

**Mini-example contrast**
With [[W]] = 1000 N, [[nSel]] = 4, [[eta]] = 0.8. The incorrect calculation gives 1000/4 × 0.8 = 200 N. The correct calculation gives 1000/(4 × 0.8) = 312.5 N. The error is 36%.

## Interpretation Errors

### Error 6: Concluding That More Segments Are Always Better

**Why it seems correct**
Mathematically, ideal force decreases monotonically with [[nSel]]. More segments always reduce theoretical force.

**Why it is wrong**
In practice, each additional segment implies more pulleys, more rope, more maintenance, more self-weight, and more friction losses. There is an optimum point where adding more segments increases complexity without significantly improving real performance.

**Detection signal**
If adding segments does not proportionally decrease the real measured force, the practical limit has been reached.

**Conceptual correction**
Recognize that mechanical system design involves trade-offs. Beyond 6-8 segments, marginal benefits typically do not justify the additional complexity cost.

**Mini-example contrast**
A rescue system with 8 segments and efficiency 0.7 requires force equal to 1000 N divided by the product of 8 segments times efficiency 0.7, that is, 179 N. A system with 4 segments and efficiency 0.9 (less losses from fewer pulleys) requires 1000 N divided by 4 × 0.9, that is, 278 N. The 100 N difference may not justify double the equipment.

## Quick Self-Control Rule

Before trusting a compound pulley calculation, verify:

- I have correctly counted supporting segments, not visible pulleys
- I have considered movable pulley self-weight if significant
- The efficiency used is appropriate for the load and equipment condition
- The calculated real force is greater than ideal force (always)
- The force order of magnitude is reasonable for the application
- I have considered whether the chosen number of segments is practical, not just theoretically optimal
`;export{e as default};
