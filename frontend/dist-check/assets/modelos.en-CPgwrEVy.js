const e=`# Models and validity\r
\r
## Ideal model\r
\r
The ideal model for this equation-of-motion leaf treats the system as a linear oscillator where state [[x]] remains periodic and bounded. The core assumption is a restoring interaction proportional to displacement and no dominant energy loss in the analyzed window. Under these hypotheses, one can build a coherent description of [[x]], [[v]], and [[a]] from [[A]], [[omega]], [[phi]], and [[t]].\r
\r
Its main strength is traceability: each magnitude keeps a clear physical role and graph interpretation maps directly to theory. The model is also scalable across educational and laboratory contexts because qualitative behavior remains stable as long as linearity is preserved.\r
\r
## Hypotheses\r
\r
1. Linear regime for displacements inside the elastic operating range.\r
2. Parameter [[omega]] approximately constant during observation.\r
3. Initial conditions well identified through [[A]] and [[phi]].\r
4. No dominant damping term distorting ideal periodicity.\r
5. Time sampling in [[t]] dense enough to resolve phase and sign changes.\r
\r
If one or more assumptions fail, ideal predictions lose reliability and model upgrading becomes necessary.\r
\r
## Quantitative validity domain\r
\r
Operational criteria:\r
\r
- relative amplitude inside linear range <= 10 percent of useful mechanical travel;\r
- relative drift of [[omega]] <= 5 percent over one test;\r
- fitting error in [[x]] <= 8 percent across at least 5 cycles;\r
- initial phase consistency with uncertainty below 0.2 rad;\r
- measurement noise in [[x]] below 5 percent of [[A]].\r
\r
When these conditions hold, the ideal model remains predictively useful for both didactic analysis and first-pass tuning decisions.\r
\r
## Model failure signals\r
\r
1. Systematic cycle-to-cycle amplitude drift without controlled external cause.\r
2. Cumulative phase mismatch growing with [[t]].\r
3. [[a]] versus [[x]] relation incompatible with restoring tendency.\r
4. Unstable estimates of [[omega]] when time window changes slightly.\r
5. Persistent need for nonlinear corrections to keep acceptable fit.\r
\r
These signals indicate that the real system has moved outside the ideal SHM validity range.\r
\r
## Extended or alternative model\r
\r
If noticeable dissipation appears, switch to a damped model. If strong external input dominates response, move to a forced model. If restoring behavior is not proportional to displacement, add controlled nonlinear terms.\r
\r
The purpose of switching is not mathematical complexity for its own sake. It is preserving physical causality and predictive value. Any alternative model should explain observed evolution of [[x]], [[v]], and [[a]] better than the ideal version while keeping dimensional and interpretive coherence.\r
\r
## Operational comparison\r
\r
Ideal SHM model:\r
- strong conceptual clarity and direct magnitude traceability;\r
- fast for estimating phase, amplitude, and baseline dynamics;\r
- useful for education, initial calibration, and trend reading.\r
\r
Extended model:\r
- required under relevant damping, forcing, or nonlinearity;\r
- needs more parameters, stronger calibration, and cleaner data;\r
- delivers higher fidelity in non-ideal operation.\r
\r
Explicit transition rule: when to switch models is when relative fitting error stays above 10 percent over multiple cycles or amplitude stability breaks systematically. At that point, keeping the ideal model can hide important physics and degrade design decisions.\r
`;export{e as default};
