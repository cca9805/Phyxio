const e=`# Errores frecuentes: Exam-Type Problems\r
# Frequent errors: Exam-Type Problems\r
\r
## Conceptual errors\r
\r
### Error 1: Confusing cause and effect in forces\r
\r
**Why it seems correct**: Newton's Second Law equates force and acceleration, and algebraic equations look the same in both directions.\r
\r
**Why it is incorrect**: [[fuerza_rozamiento]] does not cause the motion; it is a consequence of [[fuerza_normal]] and [[coeficiente_rozamiento]]. Likewise, [[tension_cuerda]] does not generate [[aceleracion_sistema]]; the net global force is the cause. Reversing causality leads to setting up the equation system backwards.\r
\r
**Detection signal**: If your free-body diagram assigns [[tension_cuerda]] as the cause of [[fuerza_rozamiento]], or treats [[aceleracion_sistema]] as an applied force, you have inverted the causality.\r
\r
**Conceptual correction**: Draw the free-body diagram before writing any equation. Identify all real external forces on each object (weight, [[fuerza_normal]], [[tension_cuerda]], [[fuerza_rozamiento]]) and only then apply Newton's Second Law.\r
\r
#### Mini-example of contrast\r
\r
Incorrect: "The [[aceleracion_sistema]] pushes [[masa_2]] downward, generating [[tension_cuerda]]."\r
\r
Correct: The net force on [[masa_2]] (weight minus [[tension_cuerda]]) produces [[aceleracion_sistema]]. [[tension_cuerda]] is the rope's reaction to the transmitted weight, not its cause.\r
\r
---\r
\r
### Error 2: Applying the acceleration formula without computing prerequisite forces\r
\r
**Why it seems correct**: The [[aceleracion_sistema]] formula has all terms visible, so it appears sufficient to substitute the given data directly.\r
\r
**Why it is incorrect**: The formula requires [[componente_tangencial_peso]] and [[fuerza_rozamiento]] as inputs, which in turn need [[fuerza_normal]]. Skipping this chain and substituting the full weight of [[masa_1]] directly introduces a systematic error.\r
\r
**Detection signal**: If you use [[masa_1]] × [[aceleracion_gravedad]] instead of [[masa_1]] × [[aceleracion_gravedad]] × sin([[angulo_plano]]) for the tangential component, the error grows with [[angulo_plano]].\r
\r
**Conceptual correction**: Always compute in this order: [[fuerza_normal]] first, then [[fuerza_rozamiento]], then [[componente_tangencial_peso]], then [[aceleracion_sistema]], finally [[tension_cuerda]]. The formulas have a logical application sequence.\r
\r
#### Mini-example of contrast\r
\r
With [[angulo_plano]] = 30°, using full weight gives [[componente_tangencial_peso]] = 3 × 9.8 = 29.4 N (wrong). The correct value is 3 × 9.8 × sin(30°) = 14.7 N. The error in [[aceleracion_sistema]] is 50%.\r
\r
---\r
\r
## Model errors\r
\r
### Error 3: Swapping [[masa_1]] and [[masa_2]] when projecting forces\r
\r
**Why it seems correct**: Both masses appear in the same [[aceleracion_sistema]] equation and are summed in the denominator, making it easy to lose track of which acts on the slope and which hangs freely.\r
\r
**Why it is incorrect**: [[masa_1]] is on the inclined plane and has [[fuerza_normal]], [[fuerza_rozamiento]], and [[componente_tangencial_peso]]. [[masa_2]] only has its weight as driving force. Swapping them completely changes the force balance.\r
\r
**Detection signal**: If your [[fuerza_normal]] includes [[masa_2]], or if you compute [[componente_tangencial_peso]] using [[masa_2]], you have swapped the masses.\r
\r
**Conceptual correction**: Label physically: [[masa_1]] = "on the plane" (has [[angulo_plano]], [[fuerza_rozamiento]]); [[masa_2]] = "hangs vertically" (no plane friction). Never mix their equations.\r
\r
#### Mini-example of contrast\r
\r
Incorrect: [[fuerza_normal]] = ([[masa_1]] + [[masa_2]]) × [[aceleracion_gravedad]] × cos([[angulo_plano]]). Correct: [[fuerza_normal]] = [[masa_1]] × [[aceleracion_gravedad]] × cos([[angulo_plano]]). [[masa_2]] does not touch the plane and does not contribute to [[fuerza_normal]].\r
\r
---\r
\r
### Error 4: Not recognizing when the ideal pulley model fails\r
\r
**Why it seems correct**: The ideal pulley (massless, frictionless) greatly simplifies the problem and is the standard hypothesis in introductory mechanics texts.\r
\r
**Why it is incorrect**: A real pulley has rotational inertia that absorbs part of [[tension_cuerda]] and reduces effective [[aceleracion_sistema]]. If pulley mass exceeds 5% of [[masa_1]] + [[masa_2]], the error exceeds 5%.\r
\r
**Detection signal**: Experimental [[aceleracion_sistema]] is consistently lower than calculated, even when all parameters are well measured.\r
\r
**Conceptual correction**: In real laboratory problems, always check pulley mass. If appreciable, add its contribution as a rotational inertia term in the effective inertia denominator.\r
\r
#### Mini-example of contrast\r
\r
With [[masa_1]] = [[masa_2]] = 1 kg and pulley mass = 0.2 kg (radius 0.05 m), the ideal model gives [[aceleracion_sistema]] = 0. The real system's effective inertia is 10% higher, changing the calculated [[aceleracion_sistema]] while the experimental measurement already includes pulley inertia.\r
\r
---\r
\r
## Mathematical errors\r
\r
### Error 5: Using static instead of kinetic [[coeficiente_rozamiento]]\r
\r
**Why it seems correct**: Many problems state "coefficient of friction" without specifying static or kinetic, and students tend to use the single available value.\r
\r
**Why it is incorrect**: The dynamic friction formula (kinetic Coulomb model) is valid only when the system is already in motion. At rest, the static coefficient (higher) applies. Using kinetic friction at rest underestimates the resistance to motion onset.\r
\r
**Detection signal**: Calculated system should move (positive [[aceleracion_sistema]]), but in the experiment it remains at rest. The cause is that static [[coeficiente_rozamiento]] exceeds the kinetic value and the threshold has not been crossed.\r
\r
**Conceptual correction**: Always distinguish between the starting condition (maximum static friction) and the motion condition (kinetic friction). Check which value is given before substituting.\r
\r
#### Mini-example of contrast\r
\r
If the problem gives [[coeficiente_rozamiento]] = 0.30 (kinetic) but static is 0.40, maximum [[fuerza_rozamiento]] at rest is 0.40 × [[fuerza_normal]], not 0.30 × [[fuerza_normal]]. Using kinetic gives positive [[aceleracion_sistema]]; using static, the system does not start.\r
\r
---\r
\r
### Error 6: Sign errors in acceleration constraint algebraic manipulation\r
\r
**Why it seems correct**: The [[aceleracion_sistema]] equation is a fraction with several terms; moving terms across seems straightforward.\r
\r
**Why it is incorrect**: The sign convention for the positive axis of [[masa_1]] and [[masa_2]] must be coherent. If positive for [[masa_2]] is "downward" and positive for [[masa_1]] is "up the slope," a sign error in one body gives [[aceleracion_sistema]] with the wrong sign.\r
\r
**Detection signal**: Calculated [[aceleracion_sistema]] has negative sign when physically the system should accelerate, or vice versa.\r
\r
**Conceptual correction**: Define the positive axis explicitly for each body at the start. Write the equations of each body separately before combining. Do not jump directly to the combined result.\r
\r
#### Mini-example of contrast\r
\r
Defining positive "upward" for both bodies and summing equations without correcting the weight of [[masa_2]] (which acts downward) gives a wrong sign in [[aceleracion_sistema]]. Avoid this by writing the equation of [[masa_2]] as weight minus [[tension_cuerda]] produces [[aceleracion_sistema]], and [[masa_1]] as [[tension_cuerda]] minus tangential weight minus [[fuerza_rozamiento]] produces [[aceleracion_sistema]], explicitly and separately.\r
\r
---\r
\r
## Interpretation errors\r
\r
### Error 7: Treating negative [[aceleracion_sistema]] as a calculation error\r
\r
**Why it seems correct**: A positive axis direction is chosen expecting the system to accelerate that way; a negative result looks like a mathematical mistake.\r
\r
**Why it is incorrect**: Negative [[aceleracion_sistema]] means the system accelerates in the direction opposite to the chosen convention, or that the system does not move in the assumed direction. It is not an error; it is valuable physical information saying resistive forces dominate.\r
\r
**Detection signal**: If [[aceleracion_sistema]] is negative and the first reaction is to search for an algebra error, the result is probably correct and the system simply does not accelerate in the assumed direction.\r
\r
**Conceptual correction**: A negative [[aceleracion_sistema]] is a valid answer. It means: "the system moves (or tends to move) in the direction opposite to the chosen positive axis." Interpret the sign; do not discard it.\r
\r
#### Mini-example of contrast\r
\r
With [[masa_1]] = 3 kg, [[angulo_plano]] = 30°, [[coeficiente_rozamiento]] = 0.20, [[masa_2]] = 2 kg, [[aceleracion_sistema]] ≈ −0.04 m/s². This means resistive forces almost exactly balance [[masa_2]]'s weight; the system does not accelerate in the assumed direction. This is a correct result, not an error.\r
\r
---\r
\r
### Error 8: Omitting the physical interpretation of the numerical result\r
\r
**Why it seems correct**: Once the number for [[aceleracion_sistema]] or [[tension_cuerda]] is obtained, the problem seems solved. Interpretation looks like an optional comment.\r
\r
**Why it is incorrect**: Physics demands giving meaning to the number. A [[tension_cuerda]] = 19.6 N says something concrete: the rope supports exactly [[masa_2]]'s weight when [[aceleracion_sistema]] ≈ 0, revealing the system's equilibrium state. Without this interpretation, the student cannot detect whether the result is physically absurd.\r
\r
**Detection signal**: If [[aceleracion_sistema]] is positive but [[masa_2]] should descend and [[masa_1]] ascend, and the student reports the number without checking that the physical motion is coherent, the interpretation is missing.\r
\r
**Conceptual correction**: After computing, always answer: what motion does this [[aceleracion_sistema]] value predict? Is it coherent with the problem statement? Is [[tension_cuerda]] between 0 and [[masa_2]] × [[aceleracion_gravedad]], as it must be physically?\r
\r
#### Mini-example of contrast\r
\r
[[tension_cuerda]] = 25 N with [[masa_2]] = 2 kg and [[aceleracion_gravedad]] = 9.8 m/s²: [[masa_2]]'s weight is 19.6 N. A [[tension_cuerda]] greater than [[masa_2]]'s weight is physically impossible if only gravity acts on [[masa_2]]. The student who reports 25 N without interpreting it misses the most obvious error signal in the problem.\r
\r
---\r
\r
### Error 9: Forgetting to convert [[angulo_plano]] to radians in the calculator\r
\r
**Why it seems correct**: The problem gives [[angulo_plano]] in degrees (30°), which is the natural unit of angle expression.\r
\r
**Why it is incorrect**: Trigonometric functions in many scientific calculators and in code (Python, MATLAB) expect radians by default. sin(30) in radians ≈ −0.988, not 0.5.\r
\r
**Detection signal**: [[componente_tangencial_peso]] or [[fuerza_normal]] computed are much larger or smaller than expected (order of magnitude clearly wrong).\r
\r
**Conceptual correction**: Always verify calculator mode (DEG vs RAD). Get in the habit of writing sin(30°) explicitly or converting to radians before evaluating.\r
\r
#### Mini-example of contrast\r
\r
[[angulo_plano]] = 30°: sin(30° in degrees) = 0.5; sin(30 radians) ≈ −0.988. With this error, [[componente_tangencial_peso]] of [[masa_1]] = 3 kg changes from 14.7 N to −29.1 N, completely ruining the analysis.\r
\r
---\r
\r
## Quick self-control rule\r
\r
Before closing the problem, check mentally:\r
\r
1. Did I draw the free-body diagram of **each** body separately before writing equations?\r
2. Does [[fuerza_normal]] include only [[masa_1]] (not [[masa_2]])?\r
3. Did I compute [[fuerza_normal]] → [[fuerza_rozamiento]] → [[componente_tangencial_peso]] in that order?\r
4. Is [[tension_cuerda]] between 0 and [[masa_2]] × [[aceleracion_gravedad]]?\r
5. Is the sign of [[aceleracion_sistema]] consistent with the expected physical motion?\r
6. Is [[aceleracion_sistema]] between 0 and [[aceleracion_gravedad]]?\r
\r
If any point fails, reexamine before accepting the result as valid.\r
`;export{e as default};
