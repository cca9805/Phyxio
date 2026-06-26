const e=`# Common Errors in the Pendulum\r
\r
## Conceptual errors\r
\r
### Error 1 : assuming [[m]] changes [[Tper]] in the ideal simple pendulum\r
\r
**Why it seems correct**: in many dynamic problems a larger mass appears to respond more slowly.\r
\r
**Detection signal**: changing only [[m]] in the same setup is reported to modify [[omega]] or [[Tper]].\r
\r
**Contrast mini-example**: two different masses with the same [[L]] under the same [[g]] can keep the same ideal rhythm.\r
\r
**Conceptual correction**: in the simple model, timing depends on [[L]] and [[g]], not on [[m]].\r
\r
### Error 2 : treating [[theta]] as a linear displacement without angular context\r
\r
**Why it seems correct**: the bob clearly moves through space.\r
\r
**Detection signal**: degrees and radians are mixed without conversion and [[tau]] sign loses meaning.\r
\r
**Contrast mini-example**: the same numerical value of [[theta]] in degrees and radians describes very different states.\r
\r
**Conceptual correction**: treat [[theta]] as an angular variable with an explicit sign convention.\r
\r
## Model errors\r
\r
### Error 3 : applying small-oscillation timing at large amplitudes\r
\r
**Why it seems correct**: the motion still looks periodic.\r
\r
**Detection signal**: measured period increases as initial amplitude increases.\r
\r
**Contrast mini-example**: at moderate amplitude, linear prediction and measurement match better than at high amplitude.\r
\r
**Conceptual correction**: use the linear model only within its domain and switch to nonlinear treatment when timing error exceeds the target tolerance.\r
\r
### Error 4 : ignoring damping when cycle losses are visible\r
\r
**Why it seems correct**: the pendulum still oscillates for many cycles.\r
\r
**Detection signal**: maximum amplitude decays systematically from cycle to cycle.\r
\r
**Contrast mini-example**: in a low-friction pivot, losses may be small; in a rough pivot, they are not.\r
\r
**Conceptual correction**: include dissipation whenever energy conservation is not valid at the required precision.\r
\r
## Mathematical errors\r
\r
### Error 5 : inverting the trend between [[L]] and [[omega]]\r
\r
**Why it seems correct**: longer trajectory is associated with greater motion by intuition.\r
\r
**Detection signal**: increasing [[L]] is reported to increase [[omega]] under the same [[g]].\r
\r
**Contrast mini-example**: a long pendulum generally oscillates more slowly than a short one in the same field.\r
\r
**Conceptual correction**: check the inverse square-root trend between [[L]] and [[omega]] before substitution.\r
\r
### Error 6 : dropping the restoring sign in [[tau]]\r
\r
**Why it seems correct**: absolute values seem simpler to compute.\r
\r
**Detection signal**: [[tau]] keeps the same sign even when [[theta]] crosses vertical.\r
\r
**Contrast mini-example**: if [[theta]] switches side, [[tau]] must switch sign to preserve restoring direction.\r
\r
**Conceptual correction**: keep angular convention and verify opposite signs for [[theta]] and [[tau]].\r
\r
### Error 7 : mixing units for [[L]] or [[g]]\r
\r
**Why it seems correct**: numerical values still look plausible.\r
\r
**Detection signal**: timing result is outside expected order of magnitude for the setup.\r
\r
**Contrast mini-example**: entering length in centimeters without conversion yields artificially short periods.\r
\r
**Conceptual correction**: convert to SI before applying temporal relations.\r
\r
## Interpretation errors\r
\r
### Error 8 : reporting only [[Tper]] without causal reading\r
\r
**Why it seems correct**: the exercise often asks for one final value.\r
\r
**Detection signal**: the report does not explain whether the result is driven by high [[L]], low [[g]], or both.\r
\r
**Contrast mini-example**: two setups may have the same [[Tper]] from different parameter combinations.\r
\r
**Conceptual correction**: close every result with physical causality and a validity limit.\r
\r
### Error 9 : using [[tau]] alone to justify period\r
\r
**Why it seems correct**: both quantities belong to the same system.\r
\r
**Detection signal**: conclusions about [[Tper]] are drawn from one local value of [[tau]].\r
\r
**Contrast mini-example**: one instantaneous torque value does not determine the full cycle clock.\r
\r
**Conceptual correction**: separate local torque reading from global rhythm reading.\r
\r
### Error 10 : extrapolating the ideal model to any environment without checks\r
\r
**Why it seems correct**: timing relation appears universal.\r
\r
**Detection signal**: variations in [[g]], friction, or mounting conditions are ignored.\r
\r
**Contrast mini-example**: changing gravity environment modifies period even with the same geometry.\r
\r
**Conceptual correction**: verify environment assumptions and required precision before trusting the result.\r
\r
## Quick self-control rule\r
\r
Before closing a pendulum exercise, verify five points. First, unit coherence for [[L]], [[g]], and [[theta]]. Second, trend coherence: if [[L]] rises, [[omega]] falls and [[Tper]] rises. Third, dynamic sign: [[tau]] must oppose [[theta]]. Fourth, validity domain: amplitude and losses must match the selected model. Fifth, physical closure: explain in one sentence why the result has that order of magnitude and what limits its applicability.\r
\r
If any point fails, the final number may still be algebraically correct but physically unreliable. The objective of this section is not memorizing solutions; it is building a compact verification routine that turns each result into a defensible physical conclusion.`;export{e as default};
