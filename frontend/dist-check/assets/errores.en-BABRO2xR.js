const e=`## Conceptual errors\r
\r
### Error\r
Treating [[Wnet]] as if it were the work of one convenient force only.\r
\r
Why it seems correct\r
Students often identify the most visible interaction, such as traction, gravity, or friction, and then let that one contribution stand for the whole process.\r
\r
Detection signal\r
The solution discusses one force but never asks for the global external balance acting through the interval.\r
\r
Mini-contrast example\r
A system may speed up because a motor pulls it while friction removes part of the gain. Reading only the motor work overstates the kinetic change.\r
\r
Conceptual correction\r
Remember that [[Wnet]] is the total relevant work balance. The theorem closes only when [[Wnet]] and [[dK]] describe the same complete process.\r
\r
### Error\r
Assuming that a modest speed change must imply a modest kinetic-energy change.\r
\r
Why it seems correct\r
Daily intuition compares speeds almost linearly, so a moderate-looking shift from [[vi]] to [[vf]] may feel energetically unimportant.\r
\r
Detection signal\r
The student accepts the number without checking whether the change in motion budget is actually much larger than the visual change in speed suggests.\r
\r
Mini-contrast example\r
Doubling speed does not simply double the kinetic-energy budget. The required net work can be far larger than naive intuition predicts.\r
\r
Conceptual correction\r
Read the process through [[Ki]], [[Kf]], and [[dK]], not only through an informal comparison of [[vi]] and [[vf]].\r
\r
## Model errors\r
\r
### Error\r
Using the theorem when the task actually asks for detailed time evolution.\r
\r
Why it seems correct\r
The theorem is so efficient that students try to use it even when the problem asks for instant-by-instant behavior.\r
\r
Detection signal\r
The calculation produces [[Wnet]] and [[dK]] but still does not answer the actual question, such as instantaneous force behavior or detailed timing.\r
\r
Mini-contrast example\r
The theorem may tell how much kinetic budget is lost during braking, but not the exact time profile of the braking force.\r
\r
Conceptual correction\r
Check first whether the question is global between states or local in time. If it is local, this leaf must be combined with another model.\r
\r
### Error\r
Changing the system definition in the middle of the solution.\r
\r
Why it seems correct\r
Multi-body problems invite students to shift attention from one object to another without noticing that the theorem requires a fixed boundary.\r
\r
Detection signal\r
[[Ki]] and [[Kf]] are computed for one object while [[Wnet]] is interpreted for a different one.\r
\r
Mini-contrast example\r
For a cart pulling a load, the balance is different if the system is the cart alone or the cart plus load.\r
\r
Conceptual correction\r
Fix the system at the start and keep [[Ki]], [[Kf]], [[dK]], and [[Wnet]] attached to that same system all the way through.\r
\r
## Mathematical errors\r
\r
### Error\r
Losing the sign of [[dK]] or [[Wnet]].\r
\r
Why it seems correct\r
Students often work with absolute values out of habit and postpone sign interpretation until the end.\r
\r
Detection signal\r
The answer reports only positive magnitudes and never clarifies whether the process gained or lost kinetic budget.\r
\r
Mini-contrast example\r
In braking, [[vf]] smaller than [[vi]] forces [[dK]] to be negative and therefore [[Wnet]] to be negative as well.\r
\r
Conceptual correction\r
Treat sign as core physical information, not as decorative algebra.\r
\r
### Error\r
Combining inconsistent units and still trusting the final number.\r
\r
Why it seems correct\r
The arithmetic can proceed formally even when the data no longer correspond to a coherent mechanical scale.\r
\r
Detection signal\r
The result has an absurd order of magnitude or cannot be interpreted as work or kinetic-energy change.\r
\r
Mini-contrast example\r
Using [[m]] in grams together with speed in meters per second produces a number, but not a trustworthy work balance for the leaf.\r
\r
Conceptual correction\r
Check that mass, speed, and energetic outputs are expressed in mutually consistent units before interpreting the result.\r
\r
## Interpretation errors\r
\r
### Error\r
Ending the exercise with a number and no causal reading.\r
\r
Why it seems correct\r
Many students are trained to stop once a numerical value appears, as if interpretation were optional commentary.\r
\r
Detection signal\r
The answer gives [[Wnet]] or [[dK]] but never explains what interaction balance added or removed kinetic budget from the system.\r
\r
Mini-contrast example\r
Saying that [[Wnet]] has a certain value is not enough. One must say whether the surroundings delivered energy to the motion or extracted it.\r
\r
Conceptual correction\r
Always end with a cause-and-effect sentence linking the change from [[Ki]] to [[Kf]] with the global work balance.\r
\r
## Quick self-control rule\r
\r
1. Fix the system boundary.\r
2. Decide whether the task is global between states or local in time.\r
3. Predict the expected sign of [[dK]] and [[Wnet]].\r
4. Check the order of magnitude of the result.\r
5. Finish with one sentence that links net work and kinetic-state change.`;export{e as default};
