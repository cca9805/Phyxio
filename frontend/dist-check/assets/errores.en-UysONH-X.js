const e=`## Conceptual errors\r
\r
In physical pendulum problems, conceptual mistakes usually start when students apply equations as isolated templates. The correct starting point is causal: gravity provides restoring torque, while inertia about the real pivot is encoded in [[I]]. If this mechanism is not reconstructed, symbolic steps may look correct while physical meaning collapses.\r
\r
A frequent conceptual shortcut is to treat total [[m]] as a direct proxy for oscillation speed. That shortcut ignores how geometry modifies [[I]], and therefore misses why equal-mass bodies can have different [[T]] and [[omega0]] under different pivot locations.\r
\r
## Model errors\r
\r
Model errors occur when the physical representation is wrong even before algebra starts. The most common case is using [[I]] about a convenient geometric axis instead of the actual support axis. In that situation, the model produces numbers, but those numbers describe another system.\r
\r
Another model error is silently neglecting dissipation in setups where support friction is non-negligible. If period estimation is based on a short record with decaying amplitude, parameter inference can be biased. The fix is not to force the ideal model, but to document conditions and, when needed, move to an extended model with damping.\r
\r
## Mathematical errors\r
\r
Mathematical errors in this leaf are usually unit-related. Mixing centimeters and meters for [[d]], or inconsistent inertia units for [[I]], leads to strong scaling errors in [[T]], [[f]], and [[omega0]]. A reliable workflow is to convert all inputs to SI first, then run substitutions.\r
\r
A second recurring issue is confusing [[f]] with [[omega0]]. They both represent oscillation pace, but in different units. Reporting them without explicit conversion creates design errors, especially when comparing natural response with external periodic forcing.\r
\r
## Interpretation errors\r
\r
Interpretation errors appear when final results are reported without causal reading. A complete answer should state not only the value of [[T]] or [[f]], but also why that value is reasonable given [[I]], [[m]], [[d]], and [[g]].\r
\r
A practical indicator of weak interpretation is inability to predict trend direction under parameter changes. If a student cannot explain how [[T]] reacts to increased [[I]] or decreased [[d]], the solution is incomplete even if arithmetic is clean.\r
\r
## Quick self-control rule\r
\r
Use a short five-step check before closing any solution: define system and pivot clearly, state assumptions, enforce SI units, verify consistency between [[T]] and [[f]], and add one causal sentence relating the result to [[I]] and [[d]]. This micro-protocol catches most high-impact mistakes without adding excessive workload.`;export{e as default};
