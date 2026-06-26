const e=`# Common errors in work and torque\r
\r
## Conceptual errors\r
\r
### Error 1: thinking torque and work are the same\r
**Why it seems right:** Both can use newton-meter units.\r
**Why it is incorrect:** [[tau]] is rotational action; [[W]] is energy transferred through angular displacement.\r
**Detection signal:** Torque is reported as energy without mentioning [[theta]].\r
**Conceptual correction:** Require axis, turn, and sign before speaking about work.\r
**Contrast mini-example:** A locked shaft can have large [[tau]] and zero [[W]] if it does not rotate.\r
\r
### Error 2: forgetting work sign\r
**Why it seems right:** Students often use positive magnitudes for all data.\r
**Why it is incorrect:** Torque opposite to rotation extracts energy.\r
**Detection signal:** A brake appears to increase rotational energy.\r
**Conceptual correction:** Compare the sign of [[tau]] with [[omega]] or [[theta]].\r
**Contrast mini-example:** A motor delivers positive [[W]]; a brake on the same rotation produces negative [[W]].\r
\r
## Model errors\r
\r
### Error 3: using constant torque when torque varies\r
**Why it seems right:** Multiplication is simpler than integration.\r
**Why it is incorrect:** If [[tau]] changes, work is area under the curve.\r
**Detection signal:** The statement gives a curve, table, or dependence on [[theta]].\r
**Conceptual correction:** Use \`trabajo_torque_variable\` or a justified average.\r
**Contrast mini-example:** A torsional spring does not deliver the same work as constant torque equal to the final value.\r
\r
### Error 4: mixing different axes\r
**Why it seems right:** All data look rotational.\r
**Why it is incorrect:** [[tau]], [[omega]], and [[theta]] must refer to the same axis.\r
**Detection signal:** Computed power does not explain the energy change.\r
**Conceptual correction:** Declare axis and component before operating.\r
**Contrast mini-example:** Torque on one shaft and angular speed of another shaft do not give physical power.\r
\r
## Mathematical errors\r
\r
### Error 5: using degrees as radians\r
**Why it seems right:** Angles are often given in degrees.\r
**Why it is incorrect:** Angular work uses radians.\r
**Detection signal:** Work is dozens of times too large or too small.\r
**Conceptual correction:** Convert turns or degrees to radians.\r
**Contrast mini-example:** One turn is about \`6.28 rad\`, not \`360 rad\`.\r
\r
### Error 6: confusing power with work\r
**Why it seems right:** Both are related to energy.\r
**Why it is incorrect:** [[P]] is a rate; [[W]] is an accumulation.\r
**Detection signal:** The answer is in watts when joules were requested.\r
**Conceptual correction:** Multiply by time only if power is constant or integrate if it varies.\r
**Contrast mini-example:** a power of \`2000 W\` during \`5 s\` transfers \`10000 J\`, not \`2000 J\`.\r
\r
## Interpretation errors\r
\r
### Error 7: ignoring losses\r
**Why it seems right:** Computed work seems to close the problem.\r
**Why it is incorrect:** Part of [[W]] may become heat, sound, or electricity.\r
**Detection signal:** Rotational energy change is smaller than external work.\r
**Conceptual correction:** Write a balance with declared losses.\r
**Contrast mini-example:** In a brake, negative work on the rotor appears as heat.\r
\r
### Error 8: reading the graph without area\r
**Why it seems right:** Only curve height is inspected.\r
**Why it is incorrect:** Work depends on area under [[tau]] versus [[theta]].\r
**Detection signal:** Two curves with similar heights but different widths are treated equally.\r
**Conceptual correction:** Compare algebraic areas.\r
**Contrast mini-example:** Small torque through many turns can do more work than large torque through a small angle.\r
\r
## Quick self-control rule\r
\r
Check axis, sign, angular units, constancy of [[tau]], difference between [[W]] and [[P]], and declared losses. If any point is missing, the result is not closed.`;export{e as default};
