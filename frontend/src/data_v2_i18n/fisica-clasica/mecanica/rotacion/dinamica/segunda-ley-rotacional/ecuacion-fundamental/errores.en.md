# Common errors: fundamental equation of rotational dynamics

## Conceptual errors

### Error 1: confusing torque with force
**Why it seems correct:** The student recognizes that there is a mechanical cause and names it as if every cause of motion were simply a force.
**Why it is incorrect:** In this leaf the relevant cause is rotational. If torque is replaced by force without building lever arm and axis, the model no longer describes the correct phenomenon.
**Detection signal:** The reasoning never declares a rotation axis or directly compares a linear force with angular response.
**Conceptual correction:** Always ask what the net cause is about the chosen axis before writing the law.
**Contrast mini-example:** The same applied force near the axis and far from the axis does not produce the same rotational response.

### Error 2: treating the equation as universal without checking the system
**Why it seems correct:** The main formula is compact and looks as if it should work without extra conditions.
**Why it is incorrect:** The simple model needs a rigid body or an inertia that can be treated as constant about the chosen axis. If that fails, the physical reading changes.
**Detection signal:** The result disagrees with the experiment even though the algebra looks correct.
**Conceptual correction:** State first whether the system can be modeled as rigid and whether the axis remains well defined during the process.
**Contrast mini-example:** A skater who changes posture does not keep the same inertia throughout the entire motion.

## Model errors

### Error 3: ignoring resistive torque without justification
**Why it seems correct:** Many classroom problems omit friction, and the student carries that habit into every case.
**Why it is incorrect:** In real systems, a resistive torque can noticeably reduce angular response and change startup or braking times.
**Detection signal:** Measured angular acceleration is consistently smaller than predicted by the ideal model.
**Conceptual correction:** Decide explicitly whether resistive torque is negligible or must be included in the net balance.
**Contrast mini-example:** A motor may look weak not because it delivers too little torque, but because part of the available torque is lost in axle friction.

### Error 4: using inertia computed for a different axis
**Why it seems correct:** The student finds an inertia value in a table and inserts it without checking which axis it belongs to.
**Why it is incorrect:** Rotational inertia depends on axis choice. Changing the axis changes the resistance of the system to rotational change.
**Detection signal:** The computed response looks disproportionate for the actual geometry of the problem.
**Conceptual correction:** Verify that the inertia value corresponds exactly to the axis declared in the setup.
**Contrast mini-example:** A rod rotates very differently about its center than about one end.

## Mathematical errors

### Error 5: mixing angular units without control
**Why it seems correct:** The statement may speak in degrees, so the student keeps that scale through the whole calculation.
**Why it is incorrect:** Angular response must remain coherent with the unit system used by the rest of the model.
**Detection signal:** The final value appears tens of times above or below the expected scale.
**Conceptual correction:** Fix a unit convention before calculation and preserve it until the end.
**Contrast mini-example:** An apparently huge response often comes from never converting the angular description into the consistent unit system of the problem.

### Error 6: adding torques without respecting signs
**Why it seems correct:** The student sees several interactions and adds magnitudes because all of them seem to participate in the same phenomenon.
**Why it is incorrect:** Some torques support the positive rotation sense and others oppose it. The correct sum is algebraic, not only by magnitude.
**Detection signal:** The predicted rotation sense does not match the physical intuition of the scene.
**Conceptual correction:** Declare a positive sense and assign a sign to each contribution before summing.
**Contrast mini-example:** Two opposite actions can leave a small net torque even when each one is large by itself.

## Interpretation errors

### Error 7: accepting the result without comparing it to physical scale
**Why it seems correct:** The algebra closes and the units look acceptable.
**Why it is incorrect:** A number can be formally correct and still make no sense for the size, material, or operating speed of the real system.
**Detection signal:** The result implies turns, times, or speeds that contradict the reasonable behavior of the device.
**Conceptual correction:** Always compare the final answer with a prior order-of-magnitude estimate.
**Contrast mini-example:** If a small flywheel appears to accelerate as if it were a projectile, the problem is not solved but badly modeled.

## Quick self-control rule

Closure checklist:
1. Rotation axis and positive sense declared.
2. Inertia computed for that same axis.
3. Net torque built with coherent signs.
4. Ideal or non-ideal model stated clearly.
5. Final response compared with a physically reasonable scale.

If one checkpoint fails, the solution should not be closed. The model must be repaired before the algebra is trusted again.