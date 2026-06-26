const e=`# Frequent mistakes in the mass-spring oscillator\r
\r
## Conceptual errors\r
\r
### Error 1: assuming a single variable explains all behaviour\r
Why it seems correct: students observe a clear change in [[m]] or [[k]] and infer a one-variable explanation.\r
Detection signal: when asked to predict [[T]] or [[f]], the explanation ignores coupled inertia-stiffness effects.\r
Mini contrast example: two systems with equal [[m]] and different [[k]] do not share the same rhythm.\r
Conceptual correction: interpret the model as coupled dynamics, not one-parameter dependence.\r
\r
### Error 2: equating equilibrium crossing with stopping\r
Why it seems correct: restoring force appears small near the central position.\r
Detection signal: statement that velocity is zero whenever [[x]] is zero.\r
Mini contrast example: in ideal harmonic motion, equilibrium crossing usually corresponds to maximum speed.\r
Conceptual correction: separate position from dynamical state; zero displacement is not zero motion.\r
\r
## Model errors\r
\r
### Error 3: using the ideal model outside its validity range\r
Why it seems correct: equations still produce neat numerical output.\r
Detection signal: measured amplitude decays cycle by cycle, yet undamped assumptions are kept.\r
Mini contrast example: persistent envelope decay indicates non-negligible dissipation.\r
Conceptual correction: when to switch model: if sustained relative mismatch is > 10 percent with non-random pattern, include damping.\r
\r
### Error 4: treating stiffness as constant in nonlinear regime\r
Why it seems correct: catalogue data provide a nominal value for [[k]].\r
Detection signal: measured [[T]] varies strongly with amplitude.\r
Mini contrast example: at larger deformation, force-displacement relation is no longer linear.\r
Conceptual correction: restrict analysis to elastic range or use a calibrated nonlinear law.\r
\r
## Mathematical errors\r
\r
### Error 5: silent unit inconsistency\r
Why it seems correct: numbers look plausible at first glance.\r
Detection signal: [[f]] and [[T]] fail reciprocal consistency.\r
Mini contrast example: entering grams as kilograms shifts time scale dramatically.\r
Conceptual correction: convert all values to SI before substitution and check final order of magnitude.\r
\r
### Error 6: dropping sign information in restoring force\r
Why it seems correct: magnitude-only operations avoid negative numbers.\r
Detection signal: [[F]] is reported positive regardless of sign of [[x]].\r
Mini contrast example: stable restoring behaviour requires opposite signs for force and displacement.\r
Conceptual correction: keep axis convention explicit from the first step and audit sign logic.\r
\r
## Interpretation errors\r
\r
### Error 7: ending with a number but no physical reading\r
Why it seems correct: units are correct and arithmetic is complete.\r
Detection signal: inability to state which parameter should be tuned and why.\r
Mini contrast example: knowing [[omega0]] without sensitivity reading limits design relevance.\r
Conceptual correction: always add a causal conclusion linking outcome to parameter influence.\r
\r
### Error 8: treating phase as irrelevant detail\r
Why it seems correct: changing [[phi]] does not change [[omega0]].\r
Detection signal: model and experiment are compared with misaligned start times and interpreted as physics failure.\r
Mini contrast example: changing time reference [[t]] shifts apparent waveform start.\r
Conceptual correction: align initial condition and phase before judging model mismatch.\r
\r
## Quick self-control rule\r
\r
1. Define objective: compute [[omega0]], [[T]], [[f]], [[x]], or interpret [[F]].\r
2. Verify baseline assumptions: linear range, amplitude regime, coherent SI units.\r
3. Check reciprocal consistency between [[f]] and [[T]] and compare against expected scale.\r
4. Audit sign relation between [[x]] and [[F]] to confirm restoring direction.\r
5. Close with one causal statement explaining which parameter should change to modify behaviour.\r
`;export{e as default};
