const e=`# Exam-type example\r
\r
## Problem statement\r
\r
Two satellites are analyzed around a dominant source mass [[M]]. In part one, compute interaction force [[F]] between the source and a satellite of mass [[m1]] at distance [[r1]]. In part two, the satellite moves to [[r2]] and the new force [[F2]] must be estimated from [[F1]]. In part three, evaluate field [[g]] and acceleration [[a]] at both positions, then compute weight [[P]] of a test mass [[m]] located at the final position.\r
\r
The task is not only numerical. Model selection must be justified and trend consistency must be checked against inverse-square behavior.\r
\r
## Data\r
\r
Known quantities are [[G]], [[M]], [[m1]], [[m2]], [[r1]], [[r2]], and [[m]]. For comparison stage, masses are assumed constant between states. Distances are explicitly center-to-center, and [[r2]] is larger than [[r1]].\r
\r
All substitutions must use SI units and final answers should use reasonable scientific notation. A final physical interpretation sentence is required for each block.\r
\r
## System definition\r
\r
Primary system: Newtonian gravitational interaction with radial symmetry. Direct-force variables: [[F]], [[G]], [[m1]], [[m2]], [[r]]. Field-response variables: [[g]], [[a]], [[P]], [[m]], [[M]], [[r]]. State-comparison variables: [[F1]], [[F2]], [[r1]], [[r2]].\r
\r
No drag, thrust, or third-body perturbations are included in the base model.\r
\r
## Physical model\r
\r
Classical Newtonian gravity is used with central radial geometry. Direct force is computed with the full two-mass law. Field and acceleration are computed with source-mass form. State-to-state change uses inverse-square scaling when masses remain fixed.\r
\r
Core anchor of this section is the dependence of [[F]] on [[m1]], [[m2]], and [[r]], together with the field-response link from [[M]] to [[g]] and [[a]]. This keeps the model explicitly tied to the leaf nucleus rather than to a generic mechanics template.\r
\r
This model is appropriate because radial distances are explicit and the scenario does not demand relativistic precision.\r
\r
## Model justification\r
\r
The model choice is justified by four arguments. First, the regime is classical. Second, radial symmetry allows one dominant geometric coordinate [[r]]. Third, available data map directly to leaf formulas. Fourth, the problem requests trend comparison, where [[F1]], [[F2]], [[r1]], and [[r2]] provide a clean consistency path.\r
\r
The model would fail under strong relativistic conditions, highly asymmetric mass distributions, or major non-negligible perturbations.\r
\r
## Symbolic solution\r
\r
Direct-force block:\r
\r
{{f:ley_newton_gravitacion}}\r
\r
State-comparison block:\r
\r
{{f:variacion_inversa_cuadrado}}\r
\r
Field-intensity block:\r
\r
{{f:campo_gravitatorio}}\r
\r
Radial-acceleration block:\r
\r
{{f:aceleracion_gravitatoria}}\r
\r
Test-mass weight block:\r
\r
{{f:peso_desde_campo}}\r
\r
Directional conceptual block:\r
\r
{{f:forma_vectorial_conceptual}}\r
\r
Contribution-composition block:\r
\r
{{f:superposicion_conceptual}}\r
\r
## Numerical substitution\r
\r
Compute [[F1]] using [[m1]], [[m2]], and [[r1]]. Then estimate [[F2]] from radial scaling with [[r2]]. As a robustness check, recompute [[F2]] from the full law and compare both values.\r
\r
Next, compute [[g]] and [[a]] at both radii using [[M]]. At final position, evaluate [[P]] for test mass [[m]]. If radius increases, [[g]] and [[P]] should decrease.\r
\r
If any output violates expected trends, stop and audit units, exponents, and distance definition.\r
\r
## Dimensional validation\r
\r
Minimum checks are:\r
\r
1. [[F]], [[F1]], [[F2]] in newtons.\r
2. [[g]] and [[a]] in meters per second squared.\r
3. [[P]] in newtons.\r
4. [[r]], [[r1]], [[r2]], [[R]] in meters.\r
5. [[G]] in compatible SI units.\r
\r
Also validate that ratio [[F2]] over [[F1]] is dimensionless and matches the squared-distance ratio. This often catches hidden algebraic errors.\r
\r
## Physical interpretation\r
\r
The final reading is causal. Moving from [[r1]] to larger [[r2]] weakens gravitational interaction, so [[F2]] is lower than [[F1]]. The same radial law controls [[g]] and [[a]], so test-mass [[P]] also decreases at the final position.\r
\r
Directional meaning remains important. In one-dimensional radial tasks, magnitudes are often enough. In superposition contexts, orientation cannot be ignored.\r
\r
Exam closure criterion: result is complete only when value, units, and trend all support the same physical narrative.\r
\r
# Real-world example\r
\r
## Context\r
\r
A planetary observation mission must reconfigure probe orbit. Flight-dynamics engineers need a rapid estimate of how gravitational force changes when moving from low orbit to medium orbit. They also need updated local field estimates to schedule maneuvers and evaluate acceleration-sensitive payload limits.\r
\r
The same case is used in training programs to teach model-based reasoning. Students must connect one law to force, field, and weight outputs without symbolic inconsistency.\r
\r
## Physical estimation\r
\r
Workflow uses two layers. Layer one: compute [[F]] at each radius with the full law. Layer two: verify change ratio through [[F2]]-[[F1]] scaling. Agreement between layers increases confidence.\r
\r
Then compute [[g]] and [[a]] at operational final radius. Use those values to estimate [[P]] for onboard components of mass [[m]]. This helps verify expected mechanical loads during stabilization phases.\r
\r
When third-body effects are relevant, superposition reading is added. Even though the training case uses one dominant source, this extension is introduced to show model scalability.\r
\r
## Interpretation\r
\r
Operational decision is based on three checks. Check one: does new orbit reduce [[F]] enough to satisfy thermal-safety objective. Check two: does [[g]] change keep sensor behavior within tolerance. Check three: does trend interpretation match inverse-square expectation.\r
\r
If all checks pass, reconfiguration is approved. Otherwise, orbital plan is revised before execution.\r
\r
Educational value is direct: [[F]], [[g]], [[a]], and [[P]] become decision indicators instead of isolated symbols. This translation from equations to engineering judgment is the core competency targeted by this leaf.`;export{e as default};
