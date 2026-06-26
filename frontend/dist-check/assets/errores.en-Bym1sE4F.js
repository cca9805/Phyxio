const e=`# Common mistakes\r
\r
## Conceptual errors\r
\r
### Error 1: using [[Ue]] without explaining what the system stores\r
\r
Why it looks correct:\r
The numerical result often comes out with an energy unit, which can make the solution look complete.\r
\r
Why it is incorrect:\r
If the spring, the deformation, and the natural-length reference are not mentioned, the answer lacks physical meaning.\r
\r
Detection cue:\r
The student gives a number but cannot explain what changes physically in the system.\r
\r
Mini-contrast example:\r
It is not enough to state a number for [[Ue]]; you must explain that the spring is more or less deformed relative to its natural length.\r
\r
Conceptual fix:\r
Describe the system, the deformation, and the state comparison before calculating.\r
\r
## Model errors\r
\r
### Error 2: keeping the ideal model when the statement already contradicts it\r
\r
Why it looks correct:\r
Hooke-based formulas still work algebraically even when the real situation is no longer linear.\r
\r
Why it is incorrect:\r
Permanent deformation, strong damping, hysteresis, or a clearly nonlinear response all signal that the basic model is no longer reliable.\r
\r
Detection cue:\r
There are permanent marks, visible stiffness changes, or a force-deformation curve that no longer looks straight.\r
\r
Mini-contrast example:\r
A spring that leaves a visible mark or changes stiffness should not be treated as ideal without justification.\r
\r
Conceptual fix:\r
Check the physical hypothesis before plugging in numbers and switch models when the situation is no longer ideal.\r
\r
## Mathematical errors\r
\r
### Error 3: making unit, sign, or conversion mistakes\r
\r
Why it looks correct:\r
The algebra may close even when the final unit is not the one expected.\r
\r
Why it is incorrect:\r
Mixing centimetres with metres or losing the square on [[x]] distorts the result without warning.\r
\r
Detection cue:\r
The energy comes out far too large for a small deformation or the sign does not match the real process.\r
\r
Mini-contrast example:\r
An energy value that is far too large for a small deformation usually points to a conversion error, not to unusual spring behavior.\r
\r
Conceptual fix:\r
Check the unit of [[k]], the unit of [[x]], and the dimensional consistency of the result before closing the exercise.\r
\r
## Interpretation errors\r
\r
### Error 4: ending with a number instead of a physical reading\r
\r
Why it looks correct:\r
A value of [[dUe]] or [[We]] may seem like a full answer when it is only a substitution outcome.\r
\r
Why it is incorrect:\r
If you do not say whether the spring stores, gives, or recovers energy, the answer is incomplete.\r
\r
Detection cue:\r
The solution does not explain the direction of change or the role of the sign.\r
\r
Mini-contrast example:\r
It is not enough to report the sign; you also need to explain what physical process that sign represents.\r
\r
Conceptual fix:\r
Always close with an interpretation sentence: what changes, why it changes, and in which direction.\r
\r
## Quick self-control rule\r
\r
1. Write the initial and final state of the spring first.\r
2. Confirm that deformation is measured from the natural length.\r
3. Check units and signs before substituting numbers.\r
4. State in one sentence whether energy increases, decreases, or is transferred.\r
5. If the real behavior is not linear, leave the ideal model in time.\r
`;export{e as default};
