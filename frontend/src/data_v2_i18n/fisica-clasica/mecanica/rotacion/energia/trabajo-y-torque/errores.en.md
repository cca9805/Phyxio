# Common errors in work and torque

## Conceptual errors

### Error 1: thinking torque and work are the same
**Why it seems right:** Both can use newton-meter units.
**Why it is incorrect:** [[tau]] is rotational action; [[W]] is energy transferred through angular displacement.
**Detection signal:** Torque is reported as energy without mentioning [[theta]].
**Conceptual correction:** Require axis, turn, and sign before speaking about work.
**Contrast mini-example:** A locked shaft can have large [[tau]] and zero [[W]] if it does not rotate.

### Error 2: forgetting work sign
**Why it seems right:** Students often use positive magnitudes for all data.
**Why it is incorrect:** Torque opposite to rotation extracts energy.
**Detection signal:** A brake appears to increase rotational energy.
**Conceptual correction:** Compare the sign of [[tau]] with [[omega]] or [[theta]].
**Contrast mini-example:** A motor delivers positive [[W]]; a brake on the same rotation produces negative [[W]].

## Model errors

### Error 3: using constant torque when torque varies
**Why it seems right:** Multiplication is simpler than integration.
**Why it is incorrect:** If [[tau]] changes, work is area under the curve.
**Detection signal:** The statement gives a curve, table, or dependence on [[theta]].
**Conceptual correction:** Use `trabajo_torque_variable` or a justified average.
**Contrast mini-example:** A torsional spring does not deliver the same work as constant torque equal to the final value.

### Error 4: mixing different axes
**Why it seems right:** All data look rotational.
**Why it is incorrect:** [[tau]], [[omega]], and [[theta]] must refer to the same axis.
**Detection signal:** Computed power does not explain the energy change.
**Conceptual correction:** Declare axis and component before operating.
**Contrast mini-example:** Torque on one shaft and angular speed of another shaft do not give physical power.

## Mathematical errors

### Error 5: using degrees as radians
**Why it seems right:** Angles are often given in degrees.
**Why it is incorrect:** Angular work uses radians.
**Detection signal:** Work is dozens of times too large or too small.
**Conceptual correction:** Convert turns or degrees to radians.
**Contrast mini-example:** One turn is about `6.28 rad`, not `360 rad`.

### Error 6: confusing power with work
**Why it seems right:** Both are related to energy.
**Why it is incorrect:** [[P]] is a rate; [[W]] is an accumulation.
**Detection signal:** The answer is in watts when joules were requested.
**Conceptual correction:** Multiply by time only if power is constant or integrate if it varies.
**Contrast mini-example:** a power of `2000 W` during `5 s` transfers `10000 J`, not `2000 J`.

## Interpretation errors

### Error 7: ignoring losses
**Why it seems right:** Computed work seems to close the problem.
**Why it is incorrect:** Part of [[W]] may become heat, sound, or electricity.
**Detection signal:** Rotational energy change is smaller than external work.
**Conceptual correction:** Write a balance with declared losses.
**Contrast mini-example:** In a brake, negative work on the rotor appears as heat.

### Error 8: reading the graph without area
**Why it seems right:** Only curve height is inspected.
**Why it is incorrect:** Work depends on area under [[tau]] versus [[theta]].
**Detection signal:** Two curves with similar heights but different widths are treated equally.
**Conceptual correction:** Compare algebraic areas.
**Contrast mini-example:** Small torque through many turns can do more work than large torque through a small angle.

## Quick self-control rule

Check axis, sign, angular units, constancy of [[tau]], difference between [[W]] and [[P]], and declared losses. If any point is missing, the result is not closed.