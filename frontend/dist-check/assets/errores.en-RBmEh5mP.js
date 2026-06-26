const e=`# Common errors in energy in rolling\r
\r
## Conceptual errors\r
\r
### Error 1: treating translation and rotation as the same thing\r
**Why it seems right:** The body advances and spins at the same time, so the motion looks unified.\r
**Why it is incorrect:** [[K_total]] has one part with [[m]] and [[v_cm]] and another with [[I]] and [[omega]]. Each term measures a different form of motion.\r
**Detection signal:** The result uses only linear speed or only angular speed.\r
**Conceptual correction:** Always write both contributions before simplifying with [[R]].\r
**Contrast mini-example:** A hoop and a disk with equal [[m]], [[R]], and [[v_cm]] do not have the same energy because their [[I]] values differ.\r
\r
### Error 2: assuming rolling automatically means no slipping\r
**Why it seems right:** In everyday language, a moving wheel is said to roll.\r
**Why it is incorrect:** In physics, pure rolling requires no skidding and coherence between [[v_cm]], [[R]], and [[omega]].\r
**Detection signal:** The contact mark slips or the data do not satisfy the kinematic relation.\r
**Conceptual correction:** Validate contact before substituting the rolling condition.\r
**Contrast mini-example:** A locked tire moves along the road, but it is not in pure rolling and dissipates energy as heat.\r
\r
## Model errors\r
\r
### Error 3: forgetting losses when skidding occurs\r
**Why it seems right:** The ideal balance with [[E_total]] appears to conserve energy.\r
**Why it is incorrect:** Sliding turns part of the energy into heat and breaks the ideal condition.\r
**Detection signal:** The measured final speed is lower than the ideal prediction.\r
**Conceptual correction:** Add dissipated energy or frictional work.\r
**Contrast mini-example:** If a ball slips while starting, not all potential energy becomes [[K_total]].\r
\r
### Error 4: using moment of inertia for the wrong axis\r
**Why it seems right:** A table value of [[I]] is found and substituted directly.\r
**Why it is incorrect:** [[I]] must belong to the central spin axis used in rolling.\r
**Detection signal:** The split between translational and rotational energy is impossible for the body type.\r
**Conceptual correction:** Check axis and geometry, and use parallel-axis correction if needed.\r
**Contrast mini-example:** A rod has different [[I]] about its center and about an end.\r
\r
## Mathematical errors\r
\r
### Error 5: using diameter instead of radius\r
**Why it seems right:** The visible geometric datum is often the full wheel width.\r
**Why it is incorrect:** The rolling condition uses [[R]], not diameter.\r
**Detection signal:** The computed [[omega]] is half or twice the expected value.\r
**Conceptual correction:** Convert diameter to radius before using the constraint.\r
**Contrast mini-example:** With diameter \`0.6 m\`, the correct radius is \`0.3 m\`.\r
\r
### Error 6: mixing degrees and radians in [[phi]] or [[theta]]\r
**Why it seems right:** Angles [[phi]] and [[theta]] are written as familiar numbers.\r
**Why it is incorrect:** Trigonometric functions and angular work require consistent units.\r
**Detection signal:** The component of [[g]] or the work by [[tau]] has an implausible scale.\r
**Conceptual correction:** Declare angle mode and convert before calculating.\r
**Contrast mini-example:** \`30°\` is not \`30 rad\`; using it that way breaks the [[E_total]] balance.\r
\r
## Interpretation errors\r
\r
### Error 7: calling kinetic energy total mechanical energy\r
**Why it seems right:** [[K_total]] already adds two terms and looks complete.\r
**Why it is incorrect:** [[E_total]] may include potential energy and losses; [[K_total]] is only kinetic.\r
**Detection signal:** An incline problem contains no reference to height, [[g]], or [[phi]].\r
**Conceptual correction:** Name clearly whether the quantity is total kinetic or total mechanical energy.\r
**Contrast mini-example:** At the top of an incline, [[E_total]] can be large while [[K_total]] is zero.\r
\r
### Error 8: treating the graph as decoration\r
**Why it seems right:** The graph may look like a visual aid only.\r
**Why it is incorrect:** In this leaf it must show the split between translation and rotation.\r
**Detection signal:** The bars do not add up to [[K_total]].\r
**Conceptual correction:** Check that visual contributions close the balance.\r
**Contrast mini-example:** If the rotational bar grows when [[I]] changes, the total bar must reflect it.\r
\r
## Quick self-control rule\r
\r
Check five points: contact does not slip, [[R]] is really radius, [[I]] belongs to the central axis, [[K_total]] adds two terms, and [[E_total]] is used only when potential energy or losses are declared. If [[a_cm]], [[alpha]], [[tau]], or [[theta]] appear, verify that they belong to the model.`;export{e as default};
