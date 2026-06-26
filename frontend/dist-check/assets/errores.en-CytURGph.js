const e=`# Frequent errors: Simple Pulleys
\r
## Conceptual errors\r
\r
### Error 1: Confusing fixed with movable pulley\r
\r
**Why it seems correct**\r
\r
Both are "pulleys" and both are in the same textbook chapter, so intuition generalizes that all pulleys work the same. The visual analogy is strong: both have a wheel with a rope. The cognitive tendency to categorize by superficial appearance leads to thinking that if one pulley multiplies force, all do.\r
\r
**Why it is incorrect**\r
\r
The physical difference is radical: the fixed pulley has a single rope segment holding the load, so tension must equal the full weight. The movable pulley has two segments sharing the load, distributing the weight. The ideal force relation explicitly shows [[F]] depends inversely on [[nSel]]. With [[nSel]] of 1 there is no mechanical advantage; with [[nSel]] of 2, force is halved.
\r
**Detection signal**\r
\r
If you calculate needing the same force to lift a load with fixed pulley as without pulley, or assuming any pulley reduces force by half. Also when describing a fixed pulley as "saving force".\r
\r
**Conceptual correction**\r
\r
Always distinguish fixed pulley (changes direction and has [[nSel]] of 1) from movable pulley (multiplies force and has [[nSel]] of 2). Count the rope segments directly supporting the load: one means fixed, two means movable.
\r
**Contrast mini-example**\r
\r
Trying to lift 100 kg with fixed pulley requires 1000 N of force (impossible for many). With movable pulley only 500 N (manageable). The error of using fixed when movable is needed leaves the load immobile.\r
\r
### Error 2: Mis counting active rope segments\r
\r
**Why it seems correct**\r
\r
The visible rope seems to have many segments. Counting all visible segments, including those going to fixed points or simply redirecting the rope, seems logical. Visual intuition does not distinguish between "supporting load" and "redirecting rope".\r
\r
**Why it is incorrect**\r
\r
Only the segments coming directly from the movable pulley and pulling upward on the load are active. Segments going to fixed anchors do not support the load; they simply change cable direction. The ideal force relation uses exclusively [[nSel]], the number of supporting segments.
\r
**Detection signal**\r
\r
Obtaining force values that make no physical sense, such as force less than half of [[W]] in simple pulleys. Also when rope-displacement reasoning does not match reality.
\r
**Conceptual correction**\r
\r
Visually identify the movable pulley and count only the rope segments coming from it upward supporting the load. Ignore segments to fixed points or return lines.\r
\r
**Contrast mini-example**\r
\r
Counting 3 segments in a simple movable pulley predicts a force far too small. The correct count is [[nSel]] of 2, so the expected force is half the load weight.
\r
### Error 3: Confusing weight with mass\r
\r
**Why it seems correct**\r
\r
Everyday language uses "weighs 50 kilos" indistinctly. Textbooks sometimes give data in kilograms without specifying whether it is mass or weight. The confusion between mass (amount of matter) and weight (gravitational force) is deeply ingrained.\r
\r
**Why it is incorrect**\r
\r
The ideal force relation operates with forces in newtons. If the problem states "load of 50 kg" and you use 50 directly instead of converting it to about 490 N, the result has an error of about 80%. Weight [[W]] is a force; mass is an amount of matter. They are related by gravity, but conceptually distinct.
\r
**Detection signal**\r
\r
Force results that are numerically small (tens) when they should be hundreds. Inconsistent dimensions in final validation. Absurd answers like "I need 25 N to lift 50 kg".\r
\r
**Conceptual correction**\r
\r
Always convert masses to weights before using the relation. Multiply mass by gravity to obtain weight in N. Never substitute a mass value where the relation expects a force.
\r
**Contrast mini-example**\r
\r
Calculating that to lift 60 kg you need 30 N with movable pulley (using 60 as weight). The correct result: 60 kg × 9.8 = 588 N of weight, divided by 2 = 294 N. The factor-of-10 error is evident.\r
\r
\r
\r
## Model errors\r
\r
### Error 4: Not recognizing when the ideal model fails\r
\r
**Why it seems correct**\r
\r
The ideal model works in most textbook exercises, generating excessive confidence. The tendency to look for known patterns leads to applying the ideal force relation even when the real system has significant friction or the pulley is very heavy.
\r
**Why it is incorrect**\r
\r
The model assumes: massless rope, massless pulley, no friction, static equilibrium. In real systems with 5 kg cast iron pulleys lifting 20 kg loads, or rusty systems without lubrication, losses can exceed 20%. Real force may be well above half the load weight.
\r
**Detection signal**\r
\r
When theoretically calculated force cannot move the load in practice, or when the system requires increasing force during ascent (symptom of variable friction).\r
\r
**Conceptual correction**\r
\r
Always verify: pulley weight less than 5% of load? System lubricated? Constant velocity? If any fails, use extended model with efficiency or abandon simple pulleys.\r
\r
**Contrast mini-example**\r
\r
Calculating that with movable pulley you can lift 100 kg with 500 N (ideal). In real rusty system you need 650 N. The operator fails because they trusted the ideal model when the real one was significantly different.\r
\r
### Error 5: Ignoring the model's validity limits\r
\r
**Why it seems correct**\r
\r
Learned models work in educational contexts, creating expectation of universality. Excessive generalization leads to applying simple pulleys to situations where they are no longer adequate, such as 500 kg loads or 20 meter heights.\r
\r
**Why it is incorrect**\r
\r
The simple pulley model has structural limits: loads above 150 kg generate forces exceeding human capacity; heights above 10 m make long rope handling impractical; accelerations above 0.1g introduce significant inertias. Using simple pulleys in these ranges is dangerous and inefficient.\r
\r
**Detection signal**\r
\r
When the load exceeds what a person can theoretically lift with the maximum mechanical advantage of movable pulley (2:1), or when the required rope travel exceeds 20 meters.\r
\r
**Conceptual correction**\r
\r
Recognize that simple pulleys are for moderate loads (up to about 100 kg) and limited heights. For larger applications, compound pulleys or motorized systems are required. The validity limit is in ergonomics and safety, not just in the equations.\r
\r
**Contrast mini-example**\r
\r
Trying to lift 300 kg with movable pulley requires 1500 N theoretical (impossible for humans). The simple model predicts impossible. The error is insisting on the simple system when compound or motorized is required.\r
\r
## Mathematical errors\r
\r
### Error 6: Careless algebraic manipulations\r
\r
**Why it seems correct**\r
\r
Pure mathematics allows solving for any variable in an equation. Confidence in the rule of three leads to manipulating the ideal force relation without verifying the physical meaning of the result.
\r
**Why it is incorrect**\r
\r
Solving for [[W]] when looking for the maximum liftable load with a given force is mathematically valid, but the student may forget that [[W]] is weight, not mass, and ends up saying "I can lift 50 kg" when the result corresponds to only about 5 kg.
\r
**Detection signal**\r
\r
Results with inconsistent units or absurd values (like lifting 1000 kg with 100 N of force). Also confusion between mass and weight in numerical substitution.\r
\r
**Conceptual correction**\r
\r
Always verify dimensions after solving. Force in newtons, mass in kilograms. Remember that [[W]] in the formula is weight, not mass. Convert masses to weights by multiplying by gravity before using the relation.
\r
**Contrast mini-example**\r
\r
Solving that with 200 N you can lift a load of 400 N (40 kg) with movable pulley. The error: reporting "I can lift 400 kg". The correction: "I can lift 40 kg".\r
\r
### Error 7: Forgetting unit conversions\r
\r
**Why it seems correct**\r
\r
In textbook problems, data is sometimes given directly in newtons or conversions are omitted. The student assumes they can use the numbers as-is, forgetting that in real applications masses come in kg and forces must be calculated.\r
\r
**Why it is incorrect**\r
\r
The ideal force relation operates with forces in newtons. If the problem states "load of 50 kg" and the student uses 50 instead of converting it to about 490 N, the result has an error of 80% in relative terms, or an order of magnitude error if compared with other force values.
\r
**Detection signal**\r
\r
Force results that are numerically small (tens) when they should be hundreds, or vice versa. Inconsistent dimensions in final validation.\r
\r
**Conceptual correction**\r
\r
Convert all quantities to SI units before calculating. Mass in kilograms must become weight in newtons before substitution. Never substitute a mass value directly where the relation expects a force.
\r
**Contrast mini-example**\r
\r
Calculating that to lift 50 kg you need 25 N of force with movable pulley (using 50 instead of 490 N). The correct result is 245 N. The order-of-magnitude error is evident upon validation.\r
\r
## Interpretation errors\r
\r
### Error 8: Reporting excessive precision\r
\r
**Why it seems correct**\r
\r
Calculators give results with 8 decimal places. Numerical precision gives false confidence in the accuracy of the result. The student reports 245.823415 N as if all figures were significant.\r
\r
**Why it is incorrect**\r
\r
The ideal model has inherent uncertainties: unmodeled friction (±5-10%), variation of g with location (±0.5%), rope losses. The model is approximately 5-10% accurate. Reporting more than 2-3 significant figures is physically dishonest.\r
\r
**Detection signal**\r
\r
Results reported with more than 3 significant figures or excessive decimals. Also when reported precision implies distinguishing forces that differ by less than 1%, which is impossible to discern in the real system.\r
\r
**Conceptual correction**\r
\r
Adjust result precision to model precision. For simple pulleys in practical contexts, 2-3 significant figures are sufficient. Reporting "approximately 250 N" or "between 240 and 260 N" is more physically honest.\r
\r
**Contrast mini-example**\r
\r
Reporting that you need 294.1176471 N to lift 60 kg (calculator precision). The correct interpretation: "approximately 290 N" or "about 30 kgf".\r
\r
### Error 9: Skipping physical interpretation\r
\r
**Why it seems correct**\r
\r
The mathematical process is complete: data was identified, formula was applied, a number was obtained. The task seems finished. Educational culture sometimes emphasizes calculation over understanding.\r
\r
**Why it is incorrect**\r
\r
A number without physical context is just a number. Physics explains what the result means: Is it manageable for a human? How much rope must be pulled? How much work is done? Is it safe? Without this interpretation, knowledge is not transferable to real situations.\r
\r
**Detection signal**\r
\r
Solved problems that end with a force of 294 N without explaining whether this allows safely lifting the load, how much rope must be prepared, or if an average operator can perform the task sustainedly.
\r
**Conceptual correction**\r
\r
Always translate numerical result to concrete physical implications: "294 N equivalent to lifting about 30 kg, which is manageable for an average adult during short operations, but may cause fatigue in repetitive tasks. The required rope is 4 m to lift 2 m, which must be verified before starting."\r
\r
**Contrast mini-example**\r
\r
Ending a problem with "the force is 500 N". The complete interpretation: "500 N equivalent to about 50 kgf exceed the sustained capacity of an average worker (300-400 N). This operation requires two people or a compound pulley system with greater mechanical advantage."\r
\r
## Quick self-control rule\r
\r
Verification before submitting any simple pulley problem:\r
\r
**Does it make dimensional sense?** Verify that the unit of the result matches the expected unit.
\r
**Have I correctly counted the active segments?**\r
Visually count the segments supporting the load, not all visible segments. Validate that [[nSel]] is less than or equal to 2 for simple systems.
\r
**Did I verify units before calculating?**\r
Confirm all data is in SI. Masses converted to weights (N). Do not use kg where newtons are expected.\r
\r
**Is the result physically reasonable?**\r
Verify that calculated force is within the manageable range for humans (100-500 N typical). Confirm that rope displacement is practical.\r
\r
**Did I interpret the result in context?**\r
Explain whether the result allows performing the task safely, if additional equipment is required, or if there are important practical considerations.\r
\r
If any verification fails, review your work before considering it complete.\r
`;export{e as default};
