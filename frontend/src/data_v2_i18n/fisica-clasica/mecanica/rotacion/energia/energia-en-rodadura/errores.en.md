# Common errors in energy in rolling

## Conceptual errors

### Error 1: treating translation and rotation as the same thing
**Why it seems right:** The body advances and spins at the same time, so the motion looks unified.
**Why it is incorrect:** [[K_total]] has one part with [[m]] and [[v_cm]] and another with [[I]] and [[omega]]. Each term measures a different form of motion.
**Detection signal:** The result uses only linear speed or only angular speed.
**Conceptual correction:** Always write both contributions before simplifying with [[R]].
**Contrast mini-example:** A hoop and a disk with equal [[m]], [[R]], and [[v_cm]] do not have the same energy because their [[I]] values differ.

### Error 2: assuming rolling automatically means no slipping
**Why it seems right:** In everyday language, a moving wheel is said to roll.
**Why it is incorrect:** In physics, pure rolling requires no skidding and coherence between [[v_cm]], [[R]], and [[omega]].
**Detection signal:** The contact mark slips or the data do not satisfy the kinematic relation.
**Conceptual correction:** Validate contact before substituting the rolling condition.
**Contrast mini-example:** A locked tire moves along the road, but it is not in pure rolling and dissipates energy as heat.

## Model errors

### Error 3: forgetting losses when skidding occurs
**Why it seems right:** The ideal balance with [[E_total]] appears to conserve energy.
**Why it is incorrect:** Sliding turns part of the energy into heat and breaks the ideal condition.
**Detection signal:** The measured final speed is lower than the ideal prediction.
**Conceptual correction:** Add dissipated energy or frictional work.
**Contrast mini-example:** If a ball slips while starting, not all potential energy becomes [[K_total]].

### Error 4: using moment of inertia for the wrong axis
**Why it seems right:** A table value of [[I]] is found and substituted directly.
**Why it is incorrect:** [[I]] must belong to the central spin axis used in rolling.
**Detection signal:** The split between translational and rotational energy is impossible for the body type.
**Conceptual correction:** Check axis and geometry, and use parallel-axis correction if needed.
**Contrast mini-example:** A rod has different [[I]] about its center and about an end.

## Mathematical errors

### Error 5: using diameter instead of radius
**Why it seems right:** The visible geometric datum is often the full wheel width.
**Why it is incorrect:** The rolling condition uses [[R]], not diameter.
**Detection signal:** The computed [[omega]] is half or twice the expected value.
**Conceptual correction:** Convert diameter to radius before using the constraint.
**Contrast mini-example:** With diameter `0.6 m`, the correct radius is `0.3 m`.

### Error 6: mixing degrees and radians in [[phi]] or [[theta]]
**Why it seems right:** Angles [[phi]] and [[theta]] are written as familiar numbers.
**Why it is incorrect:** Trigonometric functions and angular work require consistent units.
**Detection signal:** The component of [[g]] or the work by [[tau]] has an implausible scale.
**Conceptual correction:** Declare angle mode and convert before calculating.
**Contrast mini-example:** `30°` is not `30 rad`; using it that way breaks the [[E_total]] balance.

## Interpretation errors

### Error 7: calling kinetic energy total mechanical energy
**Why it seems right:** [[K_total]] already adds two terms and looks complete.
**Why it is incorrect:** [[E_total]] may include potential energy and losses; [[K_total]] is only kinetic.
**Detection signal:** An incline problem contains no reference to height, [[g]], or [[phi]].
**Conceptual correction:** Name clearly whether the quantity is total kinetic or total mechanical energy.
**Contrast mini-example:** At the top of an incline, [[E_total]] can be large while [[K_total]] is zero.

### Error 8: treating the graph as decoration
**Why it seems right:** The graph may look like a visual aid only.
**Why it is incorrect:** In this leaf it must show the split between translation and rotation.
**Detection signal:** The bars do not add up to [[K_total]].
**Conceptual correction:** Check that visual contributions close the balance.
**Contrast mini-example:** If the rotational bar grows when [[I]] changes, the total bar must reflect it.

## Quick self-control rule

Check five points: contact does not slip, [[R]] is really radius, [[I]] belongs to the central axis, [[K_total]] adds two terms, and [[E_total]] is used only when potential energy or losses are declared. If [[a_cm]], [[alpha]], [[tau]], or [[theta]] appear, verify that they belong to the model.