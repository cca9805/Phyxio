const n=`# Frequent mistakes: Kinetic Friction\r
\r
## Conceptual errors\r
\r
### Error 1: Using [[fk]] in non-sliding situations\r
\r
#### Why it seems correct\r
\r
Students memorize one friction expression and apply it to every contact problem.\r
\r
#### Why it is incorrect\r
\r
[[fk]] belongs to kinetic regime. Without nonzero [[v_rel]], kinetic-friction modeling is not the right description.\r
\r
#### Detection signal\r
\r
The solution applies [[fk]] even though the statement says there is no relative sliding.\r
\r
#### Conceptual correction\r
\r
Identify regime first. Use kinetic relations only when sliding is already present.\r
\r
#### Mini-example\r
\r
Incorrect: computing [[fk]] for a fully sticking interface. Correct: switch to static-regime reasoning when no sliding exists.\r
\r
### Error 2: Treating [[mu_k]] as universal constant\r
\r
#### Why it seems correct\r
\r
Introductory tables can create the illusion of one fixed value per material.\r
\r
#### Why it is incorrect\r
\r
[[mu_k]] depends on the surface pair and operating condition, including contamination and temperature.\r
\r
#### Detection signal\r
\r
The same coefficient is reused across different interfaces with no validation.\r
\r
#### Conceptual correction\r
\r
Declare the operating domain and use coefficients measured for that domain.\r
\r
#### Mini-example\r
\r
Incorrect: reusing dry-contact coefficient in lubricated contact. Correct: recalibrate for the actual interface state.\r
\r
### Error 3: Ignoring vector role of [[v_rel]]\r
\r
#### Why it seems correct\r
\r
Many worked examples focus only on force magnitudes.\r
\r
#### Why it is incorrect\r
\r
Without [[v_rel]] direction, friction orientation can be assigned with wrong sign.\r
\r
#### Detection signal\r
\r
Force magnitude looks plausible, but force direction in the diagram supports motion instead of opposing it.\r
\r
#### Conceptual correction\r
\r
Define tangential axis and sliding direction before finalizing friction sign.\r
\r
#### Mini-example\r
\r
Incorrect: [[fk]] pointing along [[v_rel]]. Correct: [[fk]] opposite to relative sliding direction.\r
\r
## Model errors\r
\r
### Error 4: Assuming constant [[mu_k]] outside calibrated range\r
\r
#### Why it seems correct\r
\r
Constant-coefficient models are simple and often acceptable in short tests.\r
\r
#### Why it is incorrect\r
\r
At high speed or high interface temperature, effective coefficient may drift.\r
\r
#### Detection signal\r
\r
Prediction error grows with test duration or speed while setup remains nominal.\r
\r
#### Conceptual correction\r
\r
State speed and temperature window where constant [[mu_k]] is accepted.\r
\r
#### Mini-example\r
\r
Incorrect: extending a low-speed fit to high-speed operation unchanged. Correct: use piecewise fit or recalibration.\r
\r
### Error 5: Not defining model-switch criterion\r
\r
#### Why it seems correct\r
\r
Saying “use an extended model when needed” appears sufficient.\r
\r
#### Why it is incorrect\r
\r
Without explicit trigger, model transition becomes subjective and non-repeatable.\r
\r
#### Detection signal\r
\r
Different analysts choose different models with identical data.\r
\r
#### Conceptual correction\r
\r
Define operational trigger, such as sustained error above threshold.\r
\r
#### Mini-example\r
\r
Incorrect: "switch model if result feels odd." Correct: "switch model when relative error exceeds 10% in repeated runs."\r
\r
## Mathematical errors\r
\r
### Error 6: Losing sign in tangential projection\r
\r
#### Why it seems correct\r
\r
Absolute values simplify arithmetic and reduce algebraic clutter.\r
\r
#### Why it is incorrect\r
\r
Sign carries direction information; removing it can invert net-force interpretation.\r
\r
#### Detection signal\r
\r
Computed acceleration points in a physically inconsistent direction.\r
\r
#### Conceptual correction\r
\r
Keep a fixed axis convention and separate magnitude from orientation.\r
\r
#### Mini-example\r
\r
Incorrect: adding [[fk]] to the driving term without sign check. Correct: project all forces in one axis with consistent sign convention.\r
\r
### Error 7: Mixing mass and force units\r
\r
#### Why it seems correct\r
\r
Problem statements often provide mass directly, tempting direct substitution.\r
\r
#### Why it is incorrect\r
\r
[[N]] is force. If mass is given, normal load must be derived from dynamics first.\r
\r
#### Detection signal\r
\r
[[fk]] is reported in inconsistent units instead of newtons.\r
\r
#### Conceptual correction\r
\r
Apply dimensional checks at each step and verify final force units.\r
\r
#### Mini-example\r
\r
Incorrect: multiplying [[mu_k]] by “12 kg.” Correct: derive normal force first, then compute [[fk]].\r
\r
## Interpretation errors\r
\r
### Error 8: Assuming higher [[mu_k]] is always better\r
\r
#### Why it seems correct\r
\r
More friction is intuitively associated with more control.\r
\r
#### Why it is incorrect\r
\r
In continuous operation, larger [[mu_k]] can raise thermal losses and wear.\r
\r
#### Detection signal\r
\r
A proposal improves local stopping but worsens energy and maintenance metrics.\r
\r
#### Conceptual correction\r
\r
Interpret outcomes with multi-objective criteria: control, efficiency, and component life.\r
\r
#### Mini-example\r
\r
Incorrect: always selecting the highest-friction coating. Correct: selecting a coefficient band compatible with mission profile.\r
\r
### Error 9: Ending with numbers and no causal reading\r
\r
#### Why it seems correct\r
\r
A final numeric value can look like complete resolution.\r
\r
#### Why it is incorrect\r
\r
Without causal interpretation, no regime decision or engineering action follows.\r
\r
#### Detection signal\r
\r
The final answer does not explain impact on velocity, dissipation, or control margin.\r
\r
#### Conceptual correction\r
\r
Close with a physical-state sentence: active regime, dominant variable, and operational consequence.\r
\r
#### Mini-example\r
\r
Incorrect: "[[fk]] equals X." Correct: "with this [[fk]], deceleration increases and entry-speed policy must be adjusted."\r
\r
## Quick self-control rule\r
\r
- Did I confirm kinetic regime before using [[fk]]?\r
- Is [[fk]] oriented opposite to [[v_rel]]?\r
- Is [[mu_k]] valid for this operating window?\r
- Are dimensions consistent at every step?\r
- Does the conclusion state a physical decision, not just arithmetic?\r
\r
If any answer is no, revise the full reasoning chain.\r
`;export{n as default};
