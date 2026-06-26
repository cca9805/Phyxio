const e=`## Conceptual errors\r
\r
### Error 1: treating the linear formula as universal\r
\r
**Why it seems correct**\r
The sinusoidal form resembles other linear oscillators, so it is tempting to extend the same rule to any amplitude. In addition, [[T]] has a simple expression, which creates the impression that it must always apply.\r
\r
**Why it is incorrect**\r
The linear expression depends on the small-angle approximation. When [[theta0]] grows, the exact sine cannot be replaced by the angle without a noticeable loss of accuracy, and the real period no longer matches the linear one.\r
\r
**Detection sign**\r
The student writes the correct equation but never mentions the amplitude range, or applies the same relation to cases with very different [[theta0]].\r
\r
**Conceptual correction**\r
The linear equation is an approximation valid only for small oscillations; if amplitude grows, the model must change.\r
\r
**Mini-contrast example**\r
A pendulum released with a tiny amplitude and another released with a large amplitude do not have to share exactly the same period. If the same formula is forced on both, the nonlinearity is ignored.\r
\r
## Model errors\r
\r
### Error 2: ignoring the ideal-system assumptions\r
\r
**Why it seems correct**\r
It is easy to think that knowing [[L]] and [[g]] is enough for every case. The point-mass and ideal-string assumptions disappear in practice, so the student forgets they are assumptions rather than automatic facts.\r
\r
**Why it is incorrect**\r
If the string has non-negligible mass, the support is not fixed, or the body cannot be treated as point-like, the simple model no longer represents the system with enough fidelity.\r
\r
**Detection sign**\r
The statement mentions strong friction, a moving support, or non-ideal geometry, yet the simple formula is used without comment.\r
\r
**Conceptual correction**\r
The ideal model is a first reading, but it must be justified by the setup’s assumptions.\r
\r
**Mini-contrast example**\r
If the support vibrates, the pendulum is no longer oscillating alone. The measured period includes the support motion and the ideal model is incomplete.\r
\r
## Mathematical errors\r
\r
### Error 3: mixing angular and temporal quantities\r
\r
**Why it seems correct**\r
Because [[omega0]] and [[f]] both describe repetition rate, the student treats them as interchangeable without conversion. The physical similarity induces a unit confusion.\r
\r
**Why it is incorrect**\r
[[omega0]] is measured in rad/s and [[f]] in Hz. They are related, but they are not the same quantity and cannot be swapped without the factor $2\\pi$.\r
\r
**Detection sign**\r
The response compares [[omega0]] and [[f]] directly, as if the numbers were equivalent, or computes a period without respecting the correct units.\r
\r
**Conceptual correction**\r
Frequency counts cycles per second and angular frequency counts radians per second; both are consistent, but not identical.\r
\r
**Mini-contrast example**\r
If [[omega0]] = 3.14 rad/s, that does not mean [[f]] = 3.14 Hz. The correct value is about 0.50 Hz.\r
\r
## Interpretation errors\r
\r
### Error 4: confusing phase with a physical change in the system\r
\r
**Why it seems correct**\r
Because a maximum appears at a different instant, it looks as if the oscillation itself changed physically. The student interprets a time shift as a system modification.\r
\r
**Why it is incorrect**\r
The phase [[phi]] only shifts the solution in time. It does not alter [[L]], [[g]], or the period, so it does not change the pendulum’s basic physics.\r
\r
**Detection sign**\r
The student attributes changes in length, gravity, or speed to [[phi]].\r
\r
**Conceptual correction**\r
Phase describes the temporal start, not the model’s structure.\r
\r
**Mini-contrast example**\r
Two identical oscillations with different phase have the same physics but not the same starting point in time. The period remains unchanged.\r
\r
## Quick self-control rule\r
\r
### Error 5: accepting a result without closing the physical loop\r
\r
**Why it seems correct**\r
If a number looks plausible, it is easy to believe the problem is solved. The review stops too early because the value “feels right”.\r
\r
**Why it is incorrect**\r
A result is valid only if it respects units, assumptions, and the physical reading of the motion. If [[T]], [[f]], [[omega0]], and the amplitude regime are not checked together, the answer is still fragile.\r
\r
**Detection sign**\r
The final result is never compared with a physical trend: nobody asks whether a larger [[L]] should give a larger [[T]].\r
\r
**Conceptual correction**\r
Before closing, always review three things: units, validity domain, and physical sense.\r
\r
**Mini-contrast example**\r
If a longer pendulum yields a smaller period than a shorter one, something failed before the final answer. That inconsistency forces a rebuild of the setup.\r
\r
In short, the simple pendulum fails not because of a lack of formulas, but because of overconfidence. The fix is to go back to the assumptions, check units, and confirm whether the regime is still linear.`;export{e as default};
